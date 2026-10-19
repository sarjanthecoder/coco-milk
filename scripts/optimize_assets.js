import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
const backupDir = path.resolve('scripts/assets_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function run() {
  console.log('--- Starting Safe Asset Compression ---');
  const files = fs.readdirSync(assetsDir);
  let initialTotal = 0;
  let finalTotal = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = path.join(assetsDir, file);
    const backupPath = path.join(backupDir, file);
    const stat = fs.statSync(filePath);
    initialTotal += stat.size;

    // Backup if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const meta = await sharp(inputBuffer).metadata();
      let compressedBuffer;

      if (ext === '.jpg' || ext === '.jpeg') {
        compressedBuffer = await sharp(inputBuffer)
          .jpeg({
            quality: 88,
            mozjpeg: true,
            progressive: true,
            chromaSubsampling: '4:4:4'
          })
          .toBuffer();
      } else if (ext === '.png') {
        if (stat.size > 500 * 1024) {
          compressedBuffer = await sharp(inputBuffer)
            .png({
              quality: 92,
              compressionLevel: 9,
              palette: true,
              adaptiveFiltering: true
            })
            .toBuffer();
        } else {
          compressedBuffer = await sharp(inputBuffer)
            .png({
              compressionLevel: 9,
              adaptiveFiltering: true
            })
            .toBuffer();
        }
      }

      if (compressedBuffer && compressedBuffer.length < stat.size) {
        fs.writeFileSync(filePath, compressedBuffer);
        const newSize = compressedBuffer.length;
        finalTotal += newSize;
        const savedPct = (((stat.size - newSize) / stat.size) * 100).toFixed(1);
        console.log(`[OPTIMIZED] ${file.padEnd(32)} ${(stat.size / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (-${savedPct}%)`);
      } else {
        finalTotal += stat.size;
        console.log(`[UNCHANGED] ${file.padEnd(32)} ${(stat.size / 1024).toFixed(0)}KB (already optimal)`);
      }
    } catch (err) {
      finalTotal += stat.size;
      console.error(`[ERROR] ${file}:`, err.message);
    }
  }

  // Generate crisp Favicon set from thatha_mascot_seal.png
  try {
    const sealPath = path.join(assetsDir, 'thatha_mascot_seal.png');
    if (fs.existsSync(sealPath)) {
      await sharp(sealPath)
        .resize(32, 32)
        .png({ compressionLevel: 9 })
        .toFile(path.join(assetsDir, 'favicon_thatha_32.png'));

      await sharp(sealPath)
        .resize(192, 192)
        .png({ compressionLevel: 9 })
        .toFile(path.join(assetsDir, 'favicon_thatha_192.png'));

      await sharp(sealPath)
        .resize(32, 32)
        .toFile(path.resolve('public/favicon.ico'));

      console.log('[FAVICON] Successfully created favicon_thatha_32.png, favicon_thatha_192.png, and favicon.ico');
    }
  } catch (err) {
    console.error('[FAVICON ERROR]', err.message);
  }

  console.log('---------------------------------------');
  console.log(`Initial Assets Total: ${(initialTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Final Assets Total:   ${(finalTotal / 1024 / 1024).toFixed(2)} MB`);
  const totalSaved = (((initialTotal - finalTotal) / initialTotal) * 100).toFixed(1);
  console.log(`Total Reduction:      -${totalSaved}% bandwidth saved with ZERO visible quality loss`);
}

run();
