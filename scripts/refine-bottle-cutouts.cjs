const sharp = require('sharp');

async function createCleanOverlays() {
  console.log('Extracting exact bottle composites with transparency...');

  // From reference_products.jpg (1024x576)
  // Let's create high quality cutouts:
  // Card 1: x: 105, y: 140, w: 255, h: 335
  // Card 2: x: 430, y: 140, w: 260, h: 335
  // Card 3: x: 750, y: 140, w: 255, h: 335

  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 105, top: 140, width: 255, height: 335 })
    .png()
    .toFile('public/assets/bottle_overlay_sugar.png');

  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 430, top: 140, width: 260, height: 335 })
    .png()
    .toFile('public/assets/bottle_overlay_pure.png');

  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 750, top: 140, width: 255, height: 335 })
    .png()
    .toFile('public/assets/bottle_overlay_pepper.png');

  // Also extract the top coconut emblem from the header:
  // In reference_products.jpg, around x: 575, y: 32, w: 40, h: 40
  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 565, top: 22, width: 48, height: 48 })
    .png()
    .toFile('public/assets/header_coconut_icon.png');

  console.log('Bottle overlays and header icons ready!');
}

createCleanOverlays().catch(console.error);
