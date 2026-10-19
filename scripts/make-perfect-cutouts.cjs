const sharp = require('sharp');
const fs = require('fs');

async function processGeminiCutouts() {
  console.log('Processing Gemini bottle assets for the exact clone layout...');

  // The Gemini generated images (896x1200) have:
  // - bottle_with_sugar.jpg: Bottle with Sugar, wood pedestal, cane sugar bowl, coconuts, palm leaves.
  // - bottle_without_sugar.jpg: Bottle Without Sugar, wood pedestal, milk splash, coconuts, palm leaves.
  // - bottle_pepper_flavor.jpg: Bottle Pepper Flavor, wood pedestal, black pepper bowl, coconuts, palm leaves.
  // Let's create optimized web assets:
  
  // 1. Resize each to a crisp 600x800 web asset for the card right side
  await sharp('public/assets/bottle_with_sugar.jpg')
    .resize(600, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .jpeg({ quality: 92 })
    .toFile('public/assets/bottle_card_sugar.jpg');

  await sharp('public/assets/bottle_without_sugar.jpg')
    .resize(600, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .jpeg({ quality: 92 })
    .toFile('public/assets/bottle_card_pure.jpg');

  await sharp('public/assets/bottle_pepper_flavor.jpg')
    .resize(600, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .jpeg({ quality: 92 })
    .toFile('public/assets/bottle_card_pepper.jpg');

  // Also let's extract the exact bottles from reference_products.jpg (1024x576)
  // Bottle 1: With Sugar (approx left 110, top 140, width 250, height 335)
  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 110, top: 140, width: 250, height: 335 })
    .png()
    .toFile('public/assets/exact_bottle_sugar.png');

  // Bottle 2: Without Sugar (approx left 435, top 140, width 255, height 335)
  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 435, top: 140, width: 255, height: 335 })
    .png()
    .toFile('public/assets/exact_bottle_pure.png');

  // Bottle 3: Pepper Flavor (approx left 755, top 140, width 250, height 335)
  await sharp('public/assets/reference_products.jpg')
    .extract({ left: 755, top: 140, width: 250, height: 335 })
    .png()
    .toFile('public/assets/exact_bottle_pepper.png');

  console.log('All card bottle assets generated successfully!');
}

processGeminiCutouts().catch(console.error);
