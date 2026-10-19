const sharp = require('sharp');

async function makeCleanProductsBg() {
  console.log('Creating clean tropical background for Our Products section...');

  // From reference_products.jpg (1024x576):
  // Top framing (y: 0 to 180): Sky, palm fronds, distant green hills, sunlight
  // Bottom framing (y: 450 to 576): Beach sand with frangipani flower on left, green leaves
  
  const topHeader = await sharp('public/assets/reference_products.jpg')
    .extract({ left: 0, top: 0, width: 1024, height: 175 })
    .toBuffer();

  const bottomSand = await sharp('public/assets/reference_products.jpg')
    .extract({ left: 0, top: 465, width: 1024, height: 111 })
    .toBuffer();

  // Create a 1440 x 850 high-res canvas
  // Base background: soft warm beach cream
  await sharp({
    create: {
      width: 1440,
      height: 850,
      channels: 4,
      background: { r: 254, g: 250, b: 242, alpha: 1 }
    }
  })
  .composite([
    {
      input: await sharp(topHeader).resize(1440, 245, { fit: 'fill' }).toBuffer(),
      top: 0,
      left: 0
    },
    {
      input: await sharp(bottomSand).resize(1440, 160, { fit: 'fill' }).toBuffer(),
      top: 690,
      left: 0
    }
  ])
  .jpeg({ quality: 95 })
  .toFile('public/assets/products_clean_bg.jpg');

  console.log('Created products_clean_bg.jpg successfully!');
}

makeCleanProductsBg().catch(console.error);
