// Положение солнца и время восхода/захода для карты (MapPage).
// Упрощённые формулы NOAA: точность порядка 1–2 минут для широт до ~65°,
// этого хватает для визуализации «день/ночь» и подсказок на карте.
// Библиотеки не нужны, всё считается в браузере по текущему времени.

const RAD = Math.PI / 180;

// Опорный город для каждой провинции/территории: по нему считаем солнце
// и показываем время. Это не центр провинции, а крупный город — подпись
// на карте прямо называет его.
export const SUN_POINTS = {
  bc: { city: 'Vancouver', lat: 49.28, lon: -123.12, tz: 'America/Vancouver' },
  ab: { city: 'Calgary', lat: 51.05, lon: -114.07, tz: 'America/Edmonton' },
  sk: { city: 'Regina', lat: 50.45, lon: -104.61, tz: 'America/Regina' },
  mb: { city: 'Winnipeg', lat: 49.9, lon: -97.14, tz: 'America/Winnipeg' },
  on: { city: 'Toronto', lat: 43.65, lon: -79.38, tz: 'America/Toronto' },
  qc: { city: 'Montréal', lat: 45.5, lon: -73.57, tz: 'America/Toronto' },
  nb: { city: 'Fredericton', lat: 45.96, lon: -66.64, tz: 'America/Moncton' },
  ns: { city: 'Halifax', lat: 44.65, lon: -63.57, tz: 'America/Halifax' },
  pe: { city: 'Charlottetown', lat: 46.24, lon: -63.13, tz: 'America/Halifax' },
  nl: { city: "St. John's", lat: 47.56, lon: -52.71, tz: 'America/St_Johns' },
  yt: { city: 'Whitehorse', lat: 60.72, lon: -135.05, tz: 'America/Whitehorse' },
  nt: { city: 'Yellowknife', lat: 62.45, lon: -114.37, tz: 'America/Yellowknife' },
  nu: { city: 'Iqaluit', lat: 63.75, lon: -68.52, tz: 'America/Iqaluit' },
};

// Склонение солнца (рад) и уравнение времени (мин) для момента date.
function solarParams(date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const dayOfYear = (date.getTime() - start) / 86400000;
  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  const g = ((2 * Math.PI) / 365) * (dayOfYear + (utcHours - 12) / 24);
  const eqTime =
    229.18 *
    (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl =
    0.006918 -
    0.399912 * Math.cos(g) +
    0.070257 * Math.sin(g) -
    0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) +
    0.00148 * Math.sin(3 * g);
  return { decl, eqTime, utcMinutes: utcHours * 60 };
}

// Высота солнца над горизонтом в градусах (отрицательная — ночь).
export function sunAltitude(date, lat, lon) {
  const { decl, eqTime, utcMinutes } = solarParams(date);
  const trueSolarMinutes = (((utcMinutes + eqTime + 4 * lon) % 1440) + 1440) % 1440;
  const hourAngle = (trueSolarMinutes / 4 - 180) * RAD;
  const phi = lat * RAD;
  const sinAlt = Math.sin(phi) * Math.sin(decl) + Math.cos(phi) * Math.cos(decl) * Math.cos(hourAngle);
  return Math.asin(Math.max(-1, Math.min(1, sinAlt))) / RAD;
}

// Восход и закат ближайшего к date дня в точке. Возвращает
// { rise, set } (Date) либо { polar: 'night' | 'day' }, если солнце не
// восходит или не заходит (север зимой/летом).
function sunTimes(date, lat, lon) {
  // Параметры считаем на полдень UTC того же дня — для восхода/заката этого достаточно.
  const noon = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 12));
  const { decl, eqTime } = solarParams(noon);
  const phi = lat * RAD;
  const cosH = (Math.cos(90.833 * RAD) - Math.sin(phi) * Math.sin(decl)) / (Math.cos(phi) * Math.cos(decl));
  if (cosH > 1) return { polar: 'night' };
  if (cosH < -1) return { polar: 'day' };
  const ha = Math.acos(cosH) / RAD;
  const riseMin = 720 - 4 * (lon + ha) - eqTime;
  const setMin = 720 - 4 * (lon - ha) - eqTime;
  const base = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return { rise: new Date(base + riseMin * 60000), set: new Date(base + setMin * 60000) };
}

function fmtTime(date, tz) {
  return new Intl.DateTimeFormat('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: tz,
  }).format(date);
}

// Состояние солнца в опорном городе провинции в момент now.
// level: 0 — глубокая ночь … 1 — полный день (для плавной тени на карте).
export function sunInfo(id, now) {
  const p = SUN_POINTS[id];
  if (!p) return null;
  const alt = sunAltitude(now, p.lat, p.lon);
  // Сутки считаем по местной дате города, иначе вечером по UTC дата уже «завтрашняя».
  const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: p.tz, year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(now)
    .split('-')
    .map(Number);
  const dayRef = new Date(Date.UTC(localDate[0], localDate[1] - 1, localDate[2], 12));
  const times = sunTimes(dayRef, p.lat, p.lon);

  let phase;
  if (alt > 6) phase = 'day';
  else if (alt > -0.83) phase = 'golden';
  else if (alt > -12) phase = 'twilight';
  else phase = 'night';

  // Гладкая яркость: 1 при высоте ≥ 10°, 0 при ≤ −12°.
  const level = Math.max(0, Math.min(1, (alt + 12) / 22));

  const out = {
    city: p.city,
    tz: p.tz,
    alt,
    phase,
    level,
    localTime: fmtTime(now, p.tz),
    polar: times.polar || null,
    rise: times.rise ? fmtTime(times.rise, p.tz) : null,
    set: times.set ? fmtTime(times.set, p.tz) : null,
  };
  return out;
}

// Долгота подсолнечной точки (где солнце в зените) в градусах, −180…180.
export function subsolarLongitude(date) {
  const { eqTime, utcMinutes } = solarParams(date);
  let lon = (720 - utcMinutes - eqTime) / 4;
  lon = ((((lon + 180) % 360) + 360) % 360) - 180;
  return lon;
}

// Привязка «широта/долгота ↔ координаты SVG-карты провинций».
// Контуры на карте нарисованы в конической проекции, поэтому используем
// коническую проекцию Ламберта с параметрами, подобранными по центрам
// провинций (скрипт подбора есть в истории работы; средняя ошибка порядка
// 15–20 единиц viewBox, это заметно меньше прежнего линейного приближения).
// Для картинки день/ночь и расстановки городов на карте этого достаточно,
// для навигации — нет.
const LCC = (() => {
  const R = Math.PI / 180;
  const P1 = 30.4656 * R;
  const P2 = 34.6739 * R;
  const L0 = -69.1374 * R;
  const S = 1417.645;
  const TX = 1917.322;
  const TY = 732.206;
  const TH = 0.193621;
  const n = Math.log(Math.cos(P1) / Math.cos(P2)) / Math.log(Math.tan(Math.PI / 4 + P2 / 2) / Math.tan(Math.PI / 4 + P1 / 2));
  const F = (Math.cos(P1) * Math.pow(Math.tan(Math.PI / 4 + P1 / 2), n)) / n;
  const r0 = F / Math.pow(Math.tan(Math.PI / 4 + (60 * R) / 2), n);
  return { R, S, TX, TY, TH, n, F, r0, L0 };
})();

export function projectXY(lon, lat) {
  const { R, S, TX, TY, TH, n, F, r0, L0 } = LCC;
  const r = F / Math.pow(Math.tan(Math.PI / 4 + (lat * R) / 2), n);
  const t = n * (lon * R - L0);
  const x = r * Math.sin(t);
  const y = r0 - r * Math.cos(t);
  const c = Math.cos(TH);
  const si = Math.sin(TH);
  return { x: S * (x * c - y * si) + TX, y: -S * (x * si + y * c) + TY };
}

export function unprojectXY(X, Y) {
  const { R, S, TX, TY, TH, n, F, r0, L0 } = LCC;
  const xr = (X - TX) / S;
  const yr = -(Y - TY) / S;
  const c = Math.cos(TH);
  const si = Math.sin(TH);
  const x = xr * c + yr * si;
  const y = -xr * si + yr * c;
  const rho = Math.sign(n) * Math.hypot(x, r0 - y);
  const theta = Math.atan2(x, r0 - y);
  return { lon: (L0 + theta / n) / R, lat: (2 * Math.atan(Math.pow(F / rho, 1 / n)) - Math.PI / 2) / R };
}

// Положение тела на дуге неба карты «по времени». Опорная точка —
// Виннипег (центр страны): днём по дуге идёт солнце от восхода до заката,
// ночью луна от заката до следующего восхода. frac 0…1 — доля пути
// (0 — только взошло/зашло, 1 — вот-вот зайдёт/взойдёт).
export function skyCycle(now) {
  const p = SUN_POINTS.mb;
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: p.tz, year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(now)
    .split('-')
    .map(Number);
  const ref = (offset) => new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + offset, 12));
  const today = sunTimes(ref(0), p.lat, p.lon);
  if (!today.rise) return { body: 'sun', frac: 0.5 };
  const t = now.getTime();
  if (t >= today.rise.getTime() && t <= today.set.getTime()) {
    return { body: 'sun', frac: (t - today.rise.getTime()) / (today.set.getTime() - today.rise.getTime()) };
  }
  if (t > today.set.getTime()) {
    const next = sunTimes(ref(1), p.lat, p.lon);
    return { body: 'moon', frac: (t - today.set.getTime()) / (next.rise.getTime() - today.set.getTime()) };
  }
  const prev = sunTimes(ref(-1), p.lat, p.lon);
  return { body: 'moon', frac: (t - prev.set.getTime()) / (today.rise.getTime() - prev.set.getTime()) };
}
