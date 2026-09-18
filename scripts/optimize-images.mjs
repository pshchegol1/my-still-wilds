// Готовит загруженные изображения к вебу: уменьшает, пережимает и
// раскладывает под теми именами, на которые ссылается код.
// Группа с format: 'png' остается PNG — это нужно там, где важна
// прозрачность (гербы, картинки со скругленными углами).
// Оригиналы переносятся в assets-src/ (вне public/, в сборку не попадают).
//
//   node scripts/optimize-images.mjs

import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1600;
const QUALITY = 82;

// Группы: откуда берем, куда кладем и как переименовываем.
// Ключ карты имен — имя файла без расширения в нижнем регистре.
const GROUPS = [
  {
    name: 'wildlife',
    from: 'public/wildlife',
    to: 'public/wildlife',
    originals: 'assets-src/wildlife',
    names: {
      'bald eagle': 'bald-eagle',
      'bald-eagle': 'bald-eagle',
      caribou: 'caribou',
      cougar: 'cougar',
      'grey wolf': 'grey-wolf',
      'grey-wolf': 'grey-wolf',
      'gray wolf': 'grey-wolf',
      'grizzly bear': 'grizzly-bear',
      'grizzly-bear': 'grizzly-bear',
      moose: 'moose',
      'orca whale': 'orca-whale',
      'orca-whale': 'orca-whale',
    },
  },
  {
    name: 'ab-parks',
    from: 'public/ab/Parks Of Alberta',
    to: 'public/ab/parks',
    originals: 'assets-src/ab-parks',
    format: 'png', // в файлах есть прозрачность
    maxWidth: 900,
    names: {
      'banff national park': 'banff',
      'jasper national park': 'jasper',
      'waterton lakes': 'waterton-lakes',
    },
  },
  {
    name: 'parks',
    from: 'public/wildlife/Parks',
    to: 'public/parks',
    originals: 'assets-src/parks',
    names: {
      'banff national park': 'banff',
      'jasper national park': 'jasper',
      'yoho national park': 'yoho',
      'fundy national park': 'fundy',
      'gros morne national park': 'gros-morne',
    },
  },
];

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1) + ' MB';

let totalBefore = 0;
let totalAfter = 0;

for (const group of GROUPS) {
  let entries;
  try {
    entries = await readdir(group.from);
  } catch {
    continue; // папки может не быть — это нормально
  }

  const sources = entries.filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  if (!sources.length) continue;

  await mkdir(group.to, { recursive: true });
  await mkdir(group.originals, { recursive: true });

  for (const file of sources) {
    const target = group.names[path.parse(file).name.toLowerCase()];
    if (!target) {
      console.warn(`${group.name}: пропущен (неизвестное имя) ${file}`);
      continue;
    }

    const format = group.format ?? 'jpg';
    const maxWidth = group.maxWidth ?? MAX_WIDTH;

    const src = path.join(group.from, file);
    const out = path.join(group.to, `${target}.${format}`);

    // Уже готовый файл с нужным именем — не трогаем
    if (path.resolve(src) === path.resolve(out)) continue;

    const original = await stat(src);
    const meta = await sharp(src).metadata();

    const pipeline = sharp(src).resize({ width: maxWidth, withoutEnlargement: true });

    await (format === 'png'
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
    ).toFile(out);

    const optimized = await stat(out);
    totalBefore += original.size;
    totalAfter += optimized.size;

    console.log(
      `${group.name}: ${file}  ${meta.width}px ${mb(original.size)}  ->  ` +
        `${target}.${format}  ${Math.min(maxWidth, meta.width)}px ${mb(optimized.size)}`
    );

    await rename(src, path.join(group.originals, file));
  }
}

if (totalBefore) {
  console.log(`\nитого: ${mb(totalBefore)} -> ${mb(totalAfter)}`);
} else {
  console.log('нечего обрабатывать');
}
