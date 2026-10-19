const sharp = require('sharp');

async function extractDetail() {
  try {
    // Extract palm branch from top right of reference_hero (width 1024, height 576)
    // Top right has vivid green coconut palm fronds against sky
    const palmFrond = await sharp('public/assets/reference_hero.jpg')
      .extract({ left: 650, top: 0, width: 374, height: 260 })
      .png()
      .toFile('public/assets/palm_frond_right.png');
    console.log('Extracted palm_frond_right.png');

    // Extract coconut half from reference_hero
    const coconutHalf = await sharp('public/assets/reference_hero.jpg')
      .extract({ left: 615, top: 395, width: 120, height: 110 })
      .png()
      .toFile('public/assets/coconut_half.png');
    console.log('Extracted coconut_half.png');

  } catch (err) {
    console.error('Extract error:', err);
  }
}

extractDetail();
