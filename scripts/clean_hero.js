const sharp = require('sharp');

async function testCrop() {
  // Original is 1920x995
  // If we crop from left: 0 to 1440, height: 995
  await sharp('public/images/s2-bg2.jpg')
    .extract({ left: 0, top: 0, width: 1440, height: 995 })
    .toFile('public/images/bstar-hero-crop1.jpg');

  // Or crop symmetrically centered: say width: 1450, left: 100
  await sharp('public/images/s2-bg2.jpg')
    .extract({ left: 50, top: 0, width: 1390, height: 995 })
    .toFile('public/images/bstar-hero-crop2.jpg');

  console.log('Saved crops');
}

testCrop();
