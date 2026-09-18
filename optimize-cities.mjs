import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

// Target size: 300x300 bounding box, maintaining aspect ratio
const TARGET_SIZE = 300;
const QUALITY = 85;

async function optimizeCity(filePath) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Processing: ${path.basename(filePath)} (${metadata.width}x${metadata.height})`);

    const tempPath = filePath + '.tmp';

    // Resize to fit within 300x300 bounding box, maintaining aspect ratio
    await image
      .resize(TARGET_SIZE, TARGET_SIZE, {
        fit: 'inside',
        withoutEnlargement: false, // Allow upscaling
      })
      .png({ quality: QUALITY, effort: 3 })
      .toFile(tempPath);

    // Replace original with temp file
    await fs.rename(tempPath, filePath);

    const newMeta = await sharp(filePath).metadata();
    console.log(`  → Resized to ${newMeta.width}x${newMeta.height}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  const provinces = ['ab', 'bc', 'mb', 'nl', 'ns', 'on', 'pe', 'qc', 'sk', 'yt', 'nb', 'nt', 'nu'];

  for (const prov of provinces) {
    const citiesDir = path.join(publicDir, prov, 'cities');

    try {
      const exists = await fs.stat(citiesDir);
      if (!exists.isDirectory()) continue;
    } catch {
      continue; // Folder doesn't exist
    }

    console.log(`\n📍 ${prov.toUpperCase()}:`);

    try {
      const files = await fs.readdir(citiesDir);
      const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

      for (const file of pngFiles) {
        const filePath = path.join(citiesDir, file);
        await optimizeCity(filePath);
      }
    } catch (error) {
      console.error(`Error reading directory ${citiesDir}:`, error.message);
    }
  }

  console.log('\n✅ All city images optimized and enlarged!');
}

main().catch(console.error);
