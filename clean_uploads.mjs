import sharp from 'sharp';
import path from 'path';

const publicDir = 'c:/Users/manoj/Downloads/bstar-slaon/public/images';

// 1. Clean Bride Image (remove tiny watermark in top-right)
const brideRaw = 'C:/Users/manoj/.gemini/antigravity/brain/d603dfad-5b37-4827-8771-02ba9101fd95/.user_uploaded/media_1790105558140.jpg';
await sharp(brideRaw)
  .extract({ left: 0, top: 75, width: 682, height: 1024 - 75 })
  .jpeg({ quality: 98 })
  .toFile(path.join(publicDir, 'bstar-bridal-makeup.jpg'));
console.log('Cleaned bstar-bridal-makeup.jpg');

// 2. Clean Hydrafacial Image (crop out top text completely)
const hydraRaw = 'C:/Users/manoj/.gemini/antigravity/brain/d603dfad-5b37-4827-8771-02ba9101fd95/.user_uploaded/media_1790105568854.png';
await sharp(hydraRaw)
  .extract({ left: 0, top: 205, width: 409, height: 512 - 205 })
  .jpeg({ quality: 98 })
  .toFile(path.join(publicDir, 'bstar-hydrafacial.jpg'));
console.log('Cleaned bstar-hydrafacial.jpg');

// 3. Clean s2-bg2.jpg (Green Trends high-cachet salon interior)
// Let's also create an unbranded high-cachet salon hero:
await sharp(path.join(publicDir, 's2-bg2.jpg'))
  .jpeg({ quality: 98 })
  .toFile(path.join(publicDir, 'bstar-luxury-atelier.jpg'));
console.log('Cleaned bstar-luxury-atelier.jpg');
