// Генерирует src/data/provinceShapes.js — упрощённые силуэты провинций
// (SVG-путь + размеры) для фонового слоя страницы провинции (Atmosphere).
//
// Источник: public/geo/canada-provinces.geojson. Контуры проецируются в
// коническую равноугольную проекцию Ламберта (стандартные параллели 49° и
// 77°, как на привычных картах Канады), берутся только внешние кольца
// (озёра внутри не нужны), мелкие острова отбрасываются, остальное
// упрощается алгоритмом Дугласа—Пекера.
//
// Запуск: node scripts/build-province-shapes.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const geo = JSON.parse(fs.readFileSync(path.join(root, 'public/geo/canada-provinces.geojson'), 'utf8'));

const rad = (d) => (d * Math.PI) / 180;
const PHI1 = rad(49);
const PHI2 = rad(77);
const PHI0 = rad(63.390675);
const LAM0 = rad(-91.86667);
const N = Math.log(Math.cos(PHI1) / Math.cos(PHI2)) / Math.log(Math.tan(Math.PI / 4 + PHI2 / 2) / Math.tan(Math.PI / 4 + PHI1 / 2));
const F = (Math.cos(PHI1) * Math.tan(Math.PI / 4 + PHI1 / 2) ** N) / N;
const rho = (phi) => F / Math.tan(Math.PI / 4 + phi / 2) ** N;
const RHO0 = rho(PHI0);

// [lon, lat] -> [x, y] (y вниз, как в SVG)
function project([lon, lat]) {
  const r = rho(rad(lat));
  const theta = N * (rad(lon) - LAM0);
  return [r * Math.sin(theta), -(RHO0 - r * Math.cos(theta))];
}

// Дуглас—Пекер для замкнутого кольца
function simplify(points, eps) {
  if (points.length < 4) return points;
  const sq = (p, a, b) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    if (dx === 0 && dy === 0) return (p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2;
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)));
    return (p[0] - (a[0] + t * dx)) ** 2 + (p[1] - (a[1] + t * dy)) ** 2;
  };
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    let maxD = 0;
    let idx = -1;
    for (let i = s + 1; i < e; i += 1) {
      const d = sq(points[i], points[s], points[e]);
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > eps * eps && idx !== -1) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

const area = (ring) => {
  let a = 0;
  for (let i = 0; i < ring.length; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % ring.length];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a / 2);
};

const SIZE = 300; // большая сторона силуэта в единицах viewBox
const EPS = 0.45; // допуск упрощения
const MIN_SHARE = 0.0007; // отбрасываем острова меньше этой доли от bbox

const shapes = {};
for (const f of geo.features) {
  const id = f.properties.iso.replace('CA-', '').toLowerCase();
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  const rings = polys.map((p) => p[0].map(project));

  let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
  rings.forEach((r) => r.forEach(([x, y]) => {
    minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  }));
  const scale = SIZE / Math.max(maxX - minX, maxY - minY);
  const norm = rings.map((r) => r.map(([x, y]) => [(x - minX) * scale, (y - minY) * scale]));
  const w = (maxX - minX) * scale;
  const h = (maxY - minY) * scale;

  const kept = norm
    .filter((r) => area(r) >= MIN_SHARE * w * h)
    .map((r) => simplify(r, EPS))
    .filter((r) => r.length >= 4);

  const d = kept
    .map((r) => `M${r.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`)
    .join('');
  shapes[id] = { w: Math.round(w * 10) / 10, h: Math.round(h * 10) / 10, d };
  console.log(id.padEnd(3), `${rings.length} parts -> ${kept.length} kept`, `${(d.length / 1024).toFixed(1)} KB`, `${shapes[id].w}x${shapes[id].h}`);
}

const out = `// Сгенерировано scripts/build-province-shapes.mjs — не править вручную.
// Упрощённые силуэты провинций (Lambert, большая сторона = ${SIZE}) для
// фонового слоя Atmosphere на страницах провинций.
export const PROVINCE_SHAPES = ${JSON.stringify(shapes, null, 2)};
`;
fs.writeFileSync(path.join(root, 'src/data/provinceShapes.js'), out);
console.log('written', (out.length / 1024).toFixed(1), 'KB');
