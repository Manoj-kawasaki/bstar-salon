import https from 'https';

const urls = [
  'https://www.mygreentrends.in/',
  'https://www.mygreentrends.in/hair-care-services/',
  'https://www.mygreentrends.in/skin-care-services/',
  'https://www.mygreentrends.in/bridal-services/',
  'https://www.mygreentrends.in/services/'
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

const found = new Set();
for (const u of urls) {
  const html = await fetchUrl(u);
  const matches = html.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  for (const m of matches) {
    if (!m.includes('logo') && !m.includes('icon') && (m.includes('upload') || m.includes('theme') || m.includes('banner') || m.includes('service'))) {
      found.add(m);
    }
  }
}

console.log('Total Green Trends images:', found.size);
for (const img of Array.from(found).slice(0, 30)) {
  console.log(img);
}
