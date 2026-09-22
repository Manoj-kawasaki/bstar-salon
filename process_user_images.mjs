import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import https from 'https';

const publicDir = 'c:/Users/manoj/Downloads/bstar-slaon/public/images';

// 1. Process User Real Salon Interior: media_1790105433355.jpg
const salonInterior = 'C:/Users/manoj/.gemini/antigravity/brain/d603dfad-5b37-4827-8771-02ba9101fd95/.user_uploaded/media_1790105433355.jpg';
if (fs.existsSync(salonInterior)) {
  await sharp(salonInterior)
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'bstar-salon-interior.jpg'));
  console.log('Saved bstar-salon-interior.jpg');
}

// 2. Process User Royal Indian Bride: media_1790105558140.jpg
const brideImg = 'C:/Users/manoj/.gemini/antigravity/brain/d603dfad-5b37-4827-8771-02ba9101fd95/.user_uploaded/media_1790105558140.jpg';
if (fs.existsSync(brideImg)) {
  const brideMeta = await sharp(brideImg).metadata();
  console.log('Bride meta:', brideMeta);
  // Crop watermark top right (x > width - 100, y < 80) if needed
  await sharp(brideImg)
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'bstar-bridal-makeup.jpg'));
  console.log('Saved bstar-bridal-makeup.jpg');
}

// 3. Process User Hydrafacial: media_1790105568854.png (409 x 512)
// Text "Get The Glow With Hydrafacial Treatment" is in the top 35% of the image.
// If we crop from y=170 downwards, we get pure client face + wand + therapist hands with ZERO text!
const hydraImg = 'C:/Users/manoj/.gemini/antigravity/brain/d603dfad-5b37-4827-8771-02ba9101fd95/.user_uploaded/media_1790105568854.png';
if (fs.existsSync(hydraImg)) {
  const hydraMeta = await sharp(hydraImg).metadata();
  console.log('Hydra meta:', hydraMeta);
  await sharp(hydraImg)
    .extract({ left: 0, top: 160, width: hydraMeta.width, height: hydraMeta.height - 160 })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'bstar-hydrafacial.jpg'));
  console.log('Saved bstar-hydrafacial.jpg');
}

// 4. Download and inspect Green Trends makeover images
const gtImages = [
  { name: 'gt-makeover-1.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/Makeover-Image-1..jpg' },
  { name: 'gt-makeover-2.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/Makeover-Image-2..jpg' },
  { name: 'gt-makeover-3.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/Makeover-Image-3..jpg' },
  { name: 'gt-makeover-4.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/Makeover-Image-4..jpg' },
  { name: 'gt-in1.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/in1.jpg' },
  { name: 'gt-in2.jpg', url: 'https://www.mygreentrends.in/wp-content/uploads/2020/09/in2.jpg' }
];

for (const item of gtImages) {
  try {
    await new Promise((resolve, reject) => {
      https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode !== 200) {
          console.log(`Failed ${item.name}: status ${res.statusCode}`);
          return resolve();
        }
        const fileStream = fs.createWriteStream(path.join(publicDir, item.name));
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${item.name}`);
          resolve();
        });
      }).on('error', err => {
        console.log(`Error ${item.name}:`, err.message);
        resolve();
      });
    });
  } catch (e) {
    console.log(e);
  }
}
