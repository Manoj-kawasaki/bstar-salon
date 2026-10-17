import fs from 'fs';
import path from 'path';

function check(file) {
  const fullPath = path.join('.next/server/app', file);
  if (!fs.existsSync(fullPath)) {
    console.log(`[MISSING] ${fullPath}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const title = content.match(/<title>([^<]*)<\/title>/);
  const desc = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/);
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

  console.log(`\n========================================`);
  console.log(`FILE: ${file}`);
  console.log(`TITLE: ${title ? title[1] : 'NONE'}`);
  console.log(`DESC:  ${desc ? desc[1] : 'NONE'}`);
  if (h1) {
    const cleanH1 = h1[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`H1:    ${cleanH1}`);
  }
}

const files = [
  'index.html',
  'services.html',
  'services/hair.html',
  'services/skin.html',
  'services/bridal.html',
  'services/grooming.html',
  'services/nails.html',
  'gallery.html',
];

for (const f of files) {
  check(f);
}

console.log('\n--- JSON-LD Schema Check ---');
const homeHtml = fs.readFileSync('.next/server/app/index.html', 'utf8');
const schemas = Array.from(homeHtml.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi));

console.log(`Found ${schemas.length} JSON-LD blocks on Homepage:`);
schemas.forEach((s, idx) => {
  try {
    const parsed = JSON.parse(s[1]);
    console.log(`\nBlock #${idx + 1}:`);
    console.log(`  Type: ${JSON.stringify(parsed['@type'])}`);
    if (parsed.aggregateRating) {
      console.log(`  AggregateRating: ${parsed.aggregateRating.ratingValue}★ (${parsed.aggregateRating.reviewCount} reviews)`);
    }
    if (parsed.areaServed) {
      console.log(`  Areas Served (${parsed.areaServed.length}):`, parsed.areaServed.map(a => a.name).join(', '));
    }
    if (parsed.mainEntity) {
      console.log(`  FAQ Questions (${parsed.mainEntity.length}):`, parsed.mainEntity.map(q => q.name));
    }
  } catch (e) {
    console.error(`  Error parsing block #${idx + 1}:`, e.message);
  }
});

console.log('\n--- Live Production URL Verification ---');
import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirecting from ${url} -> ${res.headers.location}`);
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        const title = data.match(/<title>([^<]*)<\/title>/);
        const desc = data.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/);
        const h1 = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        console.log(`\nURL: ${url} (Status: ${res.statusCode})`);
        console.log(`  TITLE: ${title ? title[1] : 'NONE'}`);
        console.log(`  DESC:  ${desc ? desc[1] : 'NONE'}`);
        if (h1) {
          const cleanH1 = h1[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
          console.log(`  H1:    ${cleanH1}`);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.log(`Error fetching ${url}:`, err.message);
      resolve();
    });
  });
}


const liveUrls = [
  'https://bstarsalon.com',
  'https://bstarsalon.com/services',
  'https://bstarsalon.com/services/hair',
];

for (const u of liveUrls) {
  await fetchUrl(u);
}




