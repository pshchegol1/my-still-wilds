// Проверка «точка внутри контура провинции» без DOM: разбираем d-строку
// SVG (абсолютные M/L/C/Z, как в canadaProvincePaths.js) в многоугольники
// и проверяем точку по правилу чётности (дыры считаются корректно).
const cache = new Map();

function toPolygons(d) {
  const tokens = d.match(/[MLCZz]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
  const polys = [];
  let cur = null;
  let pos = [0, 0];
  let cmd = '';
  let i = 0;
  while (i < tokens.length) {
    if (/[A-Za-z]/.test(tokens[i])) {
      cmd = tokens[i];
      i += 1;
      if (cmd === 'Z' || cmd === 'z') {
        if (cur && cur.length > 2) polys.push(cur);
        cur = null;
      }
      continue;
    }
    if (cmd === 'M') {
      if (cur && cur.length > 2) polys.push(cur);
      pos = [Number(tokens[i]), Number(tokens[i + 1])];
      cur = [pos];
      i += 2;
      cmd = 'L';
    } else if (cmd === 'L') {
      pos = [Number(tokens[i]), Number(tokens[i + 1])];
      (cur ||= []).push(pos);
      i += 2;
    } else if (cmd === 'C') {
      const [x0, y0] = pos;
      const c1 = [Number(tokens[i]), Number(tokens[i + 1])];
      const c2 = [Number(tokens[i + 2]), Number(tokens[i + 3])];
      const end = [Number(tokens[i + 4]), Number(tokens[i + 5])];
      (cur ||= []);
      for (let k = 1; k <= 6; k += 1) {
        const t = k / 6;
        const u = 1 - t;
        cur.push([
          u * u * u * x0 + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * end[0],
          u * u * u * y0 + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * end[1],
        ]);
      }
      pos = end;
      i += 6;
    } else {
      i += 1;
    }
  }
  if (cur && cur.length > 2) polys.push(cur);
  return polys;
}

export function pointInPath(d, x, y) {
  let polys = cache.get(d);
  if (!polys) {
    polys = toPolygons(d);
    cache.set(d, polys);
  }
  let inside = false;
  for (const poly of polys) {
    for (let a = 0, b = poly.length - 1; a < poly.length; b = a, a += 1) {
      const [xa, ya] = poly[a];
      const [xb, yb] = poly[b];
      if (ya > y !== yb > y && x < ((xb - xa) * (y - ya)) / (yb - ya) + xa) inside = !inside;
    }
  }
  return inside;
}

// Ближайшая к (x, y) вершина контура — для «подтягивания» города,
// оказавшегося снаружи упрощённого силуэта.
export function nearestPathPoint(d, x, y) {
  let polys = cache.get(d);
  if (!polys) {
    pointInPath(d, x, y);
    polys = cache.get(d);
  }
  let best = null;
  let bestDist = Infinity;
  for (const poly of polys) {
    for (const [px, py] of poly) {
      const dist = (px - x) * (px - x) + (py - y) * (py - y);
      if (dist < bestDist) {
        bestDist = dist;
        best = [px, py];
      }
    }
  }
  return best;
}
