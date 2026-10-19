const sharp = require('sharp');

async function makeCircularMascot() {
  const meta = await sharp('public/assets/thatha_mascot_seal.jpg').metadata();
  const width = meta.width;
  const height = meta.height;
  const radius = width / 2;

  // The gold ring has a slight inner margin, so let's clip right around radius - 15
  const circleMask = Buffer.from(
    `<svg width="${width}" height="${height}">
      <circle cx="${radius}" cy="${radius}" r="${radius - 10}" fill="white" />
    </svg>`
  );

  await sharp('public/assets/thatha_mascot_seal.jpg')
    .composite([
      { input: circleMask, blend: 'dest-in' }
    ])
    .png()
    .toFile('public/assets/thatha_mascot_seal.png');

  console.log('Created thatha_mascot_seal.png with circular transparency!');
}

makeCircularMascot().catch(console.error);
