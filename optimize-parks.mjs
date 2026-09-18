import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

// Target width: 1600px max for high quality display
const TARGET_WIDTH = 1600;
const QUALITY = 82;

async function optimizePark(filePath) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Processing: ${path.basename(filePath)} (${metadata.width}x${metadata.height}, ${Math.round((await fs.stat(filePath)).size / 1024 / 1024 * 10) / 10}MB)`);

    const tempPath = filePath + '.tmp';

    // Resize to max 1600px width, maintaining aspect ratio
    await image
      .resize(TARGET_WIDTH, undefined, {
        withoutEnlargement: true,
      })
      .png({ quality: QUALITY, effort: 3 })
      .toFile(tempPath);

    // Replace original with temp file
    await fs.rename(tempPath, filePath);

    const newMeta = await sharp(filePath).metadata();
    const newSize = Math.round((await fs.stat(filePath)).size / 1024 / 1024 * 10) / 10;
    console.log(`  → Resized to ${newMeta.width}x${newMeta.height} (${newSize}MB)`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  const provinces = ['ab', 'bc', 'mb', 'nl', 'ns', 'on', 'pe', 'qc', 'sk', 'yt', 'nb', 'nt', 'nu'];

  for (const prov of provinces) {
    const parksDir = path.join(publicDir, prov, 'parks');

    try {
      const exists = await fs.stat(parksDir);
      if (!exists.isDirectory()) continue;
    } catch {
      continue; // Folder doesn't exist
    }

    console.log(`\n🏔️  ${prov.toUpperCase()}:`);

    try {
      const files = await fs.readdir(parksDir);
      const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

      if (pngFiles.length === 0) {
        console.log('  (no images)');
        continue;
      }

      for (const file of pngFiles) {
        const filePath = path.join(parksDir, file);
        await optimizePark(filePath);
      }
    } catch (error) {
      console.error(`Error reading directory ${parksDir}:`, error.message);
    }
  }

  console.log('\n✅ All park images optimized!');
}

main().catch(console.error);
