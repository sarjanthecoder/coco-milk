const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeBackgroundFloodFill(inputPath, outputPath, tolerance = 35) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const rawBuffer = await image
    .ensureAlpha()
    .raw()
    .toBuffer();

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed boundary points: top edge, left edge, right edge, bottom edge
  // Helper to get index
  function getIdx(x, y) {
    return (y * width + x);
  }

  // Sample corner background color (top-left 5x5 average)
  let bgR = 0, bgG = 0, bgB = 0, count = 0;
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const p = (y * width + x) * 4;
      bgR += rawBuffer[p];
      bgG += rawBuffer[p + 1];
      bgB += rawBuffer[p + 2];
      count++;
    }
  }
  bgR /= count;
  bgG /= count;
  bgB /= count;

  function isBackground(x, y) {
    const p = (y * width + x) * 4;
    const r = rawBuffer[p];
    const g = rawBuffer[p + 1];
    const b = rawBuffer[p + 2];
    
    // Distance from sampled background
    const dist = Math.sqrt(
      (r - bgR) ** 2 +
      (g - bgG) ** 2 +
      (b - bgB) ** 2
    );

    // Also check if it's very light (off-white / cream studio backdrop)
    // Most background pixels have r > 220, g > 215, b > 200
    const isBright = r > 210 && g > 205 && b > 195;

    return dist < tolerance || (isBright && dist < tolerance * 1.8);
  }

  // Push all perimeter border pixels into queue
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
    visited[getIdx(x, 0)] = 1;
    visited[getIdx(x, height - 1)] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
    visited[getIdx(0, y)] = 1;
    visited[getIdx(width - 1, y)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];
    const idx = getIdx(x, y);

    if (isBackground(x, y)) {
      // Make transparent
      const p = idx * 4;
      rawBuffer[p + 3] = 0; // Alpha = 0

      // Check 4-connected neighbors
      const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nidx = getIdx(nx, ny);
          if (!visited[nidx]) {
            visited[nidx] = 1;
            if (isBackground(nx, ny)) {
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  // Feather edges: 1-pixel soft blend for alpha
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = (y * width + x) * 4;
      if (rawBuffer[p + 3] > 0) {
        // check if adjacent to transparent pixel
        const leftA = rawBuffer[p - 4 + 3];
        const rightA = rawBuffer[p + 4 + 3];
        const upA = rawBuffer[p - width * 4 + 3];
        const downA = rawBuffer[p + width * 4 + 3];

        if (leftA === 0 || rightA === 0 || upA === 0 || downA === 0) {
          rawBuffer[p + 3] = 180;
        }
      }
    }
  }

  await sharp(rawBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .png()
    .toFile(outputPath);

  console.log('Saved cutout:', outputPath);
}

async function prepareLandscapeBackdrop() {
  // From reference_hero.jpg (1024x576)
  // Reconstruct a pure tropical landscape environment:
  // The left 0..600 contains bright sunny sky, turquoise ocean, pier, distant mountains, and palm framing.
  // We can create a 1920x1080 high-res tropical landscape backdrop for the hero
  // with smooth gradient blending on the right so it flows naturally.
  const src = sharp('public/assets/reference_hero.jpg');
  
  // Extract left portion with pier, mountains, ocean, sky:
  const leftLandscape = await src
    .extract({ left: 0, top: 0, width: 620, height: 576 })
    .toBuffer();

  // Create an extended 1600x900 canvas:
  // The left has the authentic tropical beach scene, the right seamlessly extends
  // the turquoise sea, distant mountains, and golden sand using smart mirroring/blur and warm tropical lighting.
  const mirroredLandscape = await sharp(leftLandscape)
    .flop()
    .blur(1)
    .toBuffer();

  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 4,
      background: { r: 22, g: 191, b: 208, alpha: 1 } // turquoise ocean
    }
  })
    .composite([
      {
        input: await sharp(leftLandscape).resize(1100, 900, { fit: 'cover' }).toBuffer(),
        left: 0,
        top: 0
      },
      {
        input: await sharp(mirroredLandscape).resize(900, 900, { fit: 'cover' }).toBuffer(),
        left: 800,
        top: 0,
        blend: 'over'
      }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/assets/tropical_landscape.jpg');

  console.log('Created tropical_landscape.jpg');
}

async function main() {
  console.log('Processing assets...');
  await removeBackgroundFloodFill(
    'public/assets/bottle_with_sugar.jpg',
    'public/assets/bottle_with_sugar_cutout.png',
    40
  );
  await removeBackgroundFloodFill(
    'public/assets/bottle_without_sugar.jpg',
    'public/assets/bottle_without_sugar_cutout.png',
    40
  );
  await removeBackgroundFloodFill(
    'public/assets/bottle_pepper_flavor.jpg',
    'public/assets/bottle_pepper_flavor_cutout.png',
    40
  );
  await prepareLandscapeBackdrop();
  console.log('All assets processed successfully!');
}

main().catch(console.error);
