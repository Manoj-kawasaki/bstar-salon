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

console.log('\n--- Services Page FAQ Check ---');
const servicesHtml = fs.readFileSync('.next/server/app/services.html', 'utf8');
const servSchemas = Array.from(servicesHtml.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi));
console.log(`Found ${servSchemas.length} JSON-LD blocks on Services:`);
servSchemas.forEach((s, idx) => {
  try {
    const parsed = JSON.parse(s[1]);
    console.log(`Block #${idx + 1} Type: ${JSON.stringify(parsed['@type'])}`);
    if (parsed.mainEntity) {
      console.log(`  Service FAQ Questions (${parsed.mainEntity.length}):`);
      parsed.mainEntity.forEach(q => console.log(`   - ${q.name}`));
    }
  } catch (e) {
    console.error(`  Error parsing block #${idx + 1}:`, e.message);
  }
});


