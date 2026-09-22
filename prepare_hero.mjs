import sharp from 'sharp';
import path from 'path';

const publicDir = 'c:/Users/manoj/Downloads/bstar-slaon/public/images';
const input = path.join(publicDir, 's2-bg2.jpg');

// Let's inspect s2-bg2.jpg and apply a rich luxury tone
// Also let's crop/overlay or blur any tiny stickers on the mirror shelf
// Size is 1920 x 1024
await sharp(input)
  .modulate({
    brightness: 0.95,
    saturation: 1.15
  })
  .jpeg({ quality: 96 })
  .toFile(path.join(publicDir, 'bstar-hero-salon.jpg'));

console.log('Saved bstar-hero-salon.jpg');
