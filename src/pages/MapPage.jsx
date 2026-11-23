import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import SiteFooter from '../components/SiteFooter';
import { ArrowLeft, ArrowRight, Moon, Sun, Users, X } from 'lucide-react';
import { navigate } from '../router';
import { PROVINCES_DATA } from '../data/mockData';
import { getProvinceDetail } from '../data/provinces';
import { getCityDetail } from '../data/cities';
import { nearestPathPoint, pointInPath } from '../utils/pathHit';
import { PROVINCE_PATHS } from '../data/canadaProvincePaths';
import SiteNav from '../components/SiteNav';
import TwinkleStars from '../components/TwinkleStars';
import { projectXY, skyCycle, sunAltitude, sunInfo, unprojectXY } from '../utils/sun';
import './MapPage.css';

// Настоящие контуры провинций/территорий (взяты из готового SVG с
// границами Канады, не схематика). Реальный viewBox и bounding box
// каждой провинции измеряются в браузере через getBBox() при монтировании
// (см. useLayoutEffect ниже) — координаты в исходном файле не приведены
// к аккуратной сетке, поэтому их проще один раз замерить, чем вручную
// пересчитывать вложенный transform.
const FALLBACK_VIEWBOX = { x: 0, y: 0, w: 1350, h: 1300 };
// Звёзды на заднем плане страницы — та же сетка с детерминированным
// сдвигом, что на странице животного (без Math.random: одинаковый результат
// при каждой отрисовке). Рисуются одним холстом через TwinkleStars.
const STAR_COLS = 14;
const STAR_ROWS = 18;
const MAP_STARS = Array.from({ length: STAR_COLS * STAR_ROWS }, (_, i) => {
  const col = i % STAR_COLS;
  const row = Math.floor(i / STAR_COLS);
  const jitterX = ((i * 37 + 13) % 100) / 100 - 0.5;
  const jitterY = ((i * 73 + 29) % 100) / 100 - 0.5;
  const cellW = 100 / STAR_COLS;
  const cellH = 100 / STAR_ROWS;
  return {
    id: i,
    x: col * cellW + cellW / 2 + jitterX * cellW * 0.8,
    y: row * cellH + cellH / 2 + jitterY * cellH * 0.8,
    size: ((i * 17) % 15) / 10 + 0.4,
    duration: ((i * 19) % 40) / 10 + 3,
    delay: ((i * 23) % 60) / 10,
    opacity: ((i * 31) % 50) / 100 + 0.2,
  };
});
const MAP_STAR_KINDS = { default: { min: 0.2, max: 0.9 } };

// Падающие звёзды: место старта (% страницы), цикл и задержка в секундах.
// Значения заданы вручную, чтобы небо не менялось при перезагрузке.
const METEORS = [
  { left: 92, top: 4, dur: 13, delay: 1 },
  { left: 70, top: 14, dur: 17, delay: 6 },
  { left: 100, top: 30, dur: 15, delay: 9 },
  { left: 55, top: 2, dur: 19, delay: 12 },
  { left: 85, top: 22, dur: 21, delay: 3 },
  { left: 40, top: 10, dur: 16, delay: 15 },
  { left: 98, top: 52, dur: 18, delay: 7 },
  { left: 63, top: 36, dur: 23, delay: 18 },
];

const SKY = 170;
const SKY_HORIZON = SKY - 10; // линия «горизонта» (от верха viewBox)
const SKY_PEAK = 36; // верхняя точка дуги

// Свой набор различимых цветов — акценты провинций в их собственных
// данных местами повторяются (mb/nt оба #0ea5e9), а на карте все 13
// должны читаться отдельно друг от друга.
const TILE_COLORS = {
  yt: '#4ade80', nt: '#22d3ee', nu: '#60a5fa',
  bc: '#38a169', ab: '#e08a4a', sk: '#e0b84a', mb: '#c026d3',
  on: '#3b82f6', qc: '#a855f7', nl: '#f97316',
  nb: '#d97706', ns: '#0891b2', pe: '#ec4899',
};

// Простая детерминированная раскладка городов внутри bounding box
// провинции — не реальные координаты, а сетка, чтобы точки не
// накладывались; сама группа обрезается по контуру провинции
// (clipPath), поэтому точки не вылезают в океан.
// Города без собственной страницы (нет slug) — координаты вручную.
const EXTRA_CITY_COORDS = {
  'Fort Smith': { lat: 60.0, lon: -111.89 },
};

// Расставляет города на карте по настоящим координатам (проекция в
// utils/sun.js). Подписи разводятся: сначала пробуем под точкой, потом
// над ней, справа и слева, и берём первое место, не пересекающееся с уже
// поставленными подписями и точками. scale — увеличение провинции на экране.
function placeCities(cities, scale, box, pathD) {
  const dots = cities.map((city) => {
    const coords = (city.slug && getCityDetail(city.slug)?.coords) || EXTRA_CITY_COORDS[city.name];
    if (!coords) return { city, px: null, py: null };
    let { x, y } = projectXY(coords.lon, coords.lat);
    // Проекция приближённая, а контур упрощённый: если город выпал за
    // силуэт (Windsor, Inuvik у берега), переносим его к ближайшей точке
    // границы и чуть сдвигаем внутрь, к центру провинции.
    if (pathD && !pointInPath(pathD, x, y)) {
      const near = nearestPathPoint(pathD, x, y);
      if (near) {
        const cx = box.x + box.width / 2;
        const cy = box.y + box.height / 2;
        const len = Math.hypot(cx - near[0], cy - near[1]) || 1;
        x = near[0] + ((cx - near[0]) / len) * 6;
        y = near[1] + ((cy - near[1]) / len) * 6;
      }
    }
    return { city, px: x, py: y };
  });
  // Без координат — запасная сетка внутри контура (как раньше).
  const missing = dots.filter((d) => d.px === null);
  if (missing.length) {
    const grid = cityLayout(missing.length, box.width, box.height);
    missing.forEach((d, i) => {
      d.px = box.x + grid[i].x;
      d.py = box.y + grid[i].y;
    });
  }
  const placed = [];
  return dots.map((d) => {
    const sx = d.px * scale;
    const sy = d.py * scale;
    const w = d.city.name.length * 9.5;
    // Кандидаты подписи: под точкой, над ней, справа, слева, затем дальше
    // по тем же сторонам (для скученных городов вроде юго-запада BC).
    const mk = (anchor, dx, dy) => {
      const left = anchor === 'middle' ? sx + dx - w / 2 : anchor === 'start' ? sx + dx : sx + dx - w;
      return { anchor, dx, dy, rect: [left, sy + dy - 13, left + w, sy + dy + 5] };
    };
    const options = [
      mk('middle', 0, 26), mk('middle', 0, -16), mk('start', 14, 5), mk('end', -14, 5),
      mk('start', 14, -14), mk('end', -14, -14), mk('start', 14, 24), mk('end', -14, 24),
      mk('middle', 0, 46), mk('middle', 0, -36), mk('start', 18, -32), mk('end', -18, 42),
    ];
    const overlapArea = (r) => {
      let area = 0;
      for (const q of placed) {
        const ox = Math.min(r[2], q[2]) - Math.max(r[0], q[0]);
        const oy = Math.min(r[3], q[3]) - Math.max(r[1], q[1]);
        if (ox > 0 && oy > 0) area += ox * oy;
      }
      for (const o of dots) {
        if (o === d) continue;
        const ox = o.px * scale;
        const oy = o.py * scale;
        if (ox > r[0] - 10 && ox < r[2] + 10 && oy > r[1] - 10 && oy < r[3] + 10) area += 400;
      }
      return area;
    };
    let choice = options[0];
    let bestArea = Infinity;
    for (const o of options) {
      const a = overlapArea(o.rect);
      if (a < bestArea) {
        bestArea = a;
        choice = o;
      }
      if (a === 0) break;
    }
    placed.push(choice.rect);
    return { ...d, label: choice };
  });
}

function cityLayout(count, w, h) {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  // Точки — не настоящие координаты, поэтому им не обязательно занимать
  // весь bounding box: провинции неправильной формы (заливы, полуострова),
  // и точки у самого края box рискуют попасть за пределы силуэта и
  // обрезаться clipPath'ом. Большой отступ держит сетку ближе к центру.
  const padX = w * 0.32;
  const padY = h * 0.32;
  const stepX = cols > 1 ? (w - padX * 2) / (cols - 1) : 0;
  const stepY = rows > 1 ? (h - padY * 2) / (rows - 1) : 0;
  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: cols > 1 ? padX + col * stepX : w / 2,
      y: rows > 1 ? padY + row * stepY : h / 2,
    };
  });
}

// Значки солнца и луны для плитки провинции (чистый SVG, без эмодзи).
function SunGlyph({ x, y, r = 11, color = '#fbbf24' }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return (
      <line
        key={i}
        x1={x + Math.cos(a) * (r + 4)}
        y1={y + Math.sin(a) * (r + 4)}
        x2={x + Math.cos(a) * (r + 9)}
        y2={y + Math.sin(a) * (r + 9)}
      />
    );
  });
  return (
    <g pointerEvents="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <circle cx={x} cy={y} r={r} fill={color} stroke="none" />
      {rays}
    </g>
  );
}

function MoonGlyph({ x, y, r = 12 }) {
  return (
    <path
      pointerEvents="none"
      d={`M ${x + r * 0.3} ${y - r} A ${r} ${r} 0 1 0 ${x + r} ${y + r * 0.4} A ${r * 0.8} ${r * 0.8} 0 1 1 ${x + r * 0.3} ${y - r} Z`}
      fill="#cbd5e1"
    />
  );
}

function sunPhaseText(info) {
  if (!info) return '';
  if (info.polar === 'night') return 'Polar night: the sun does not rise today';
  if (info.polar === 'day') return 'Midnight sun: the sun does not set today';
  return `Sunrise ${info.rise} · Sunset ${info.set}`;
}

function CityCrestSmall({ city }) {
  const [failed, setFailed] = useState(false);
  if (!city.crest || failed) {
    return (
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
        style={{ background: `${city.accent}33`, border: `1px solid ${city.accent}66`, color: city.accent }}
      >
        {city.name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={city.crest}
      alt={`Coat of arms of ${city.name}`}
      className="h-16 w-16 shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function MapPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [viewBox, setViewBox] = useState(FALLBACK_VIEWBOX);
  const [boxes, setBoxes] = useState({});
  const pathRefs = useRef({});
  // Солнце на карте: текущий момент обновляется раз в 30 секунд, поэтому
  // восход и закат плавно «проходят» по провинциям, пока страница открыта.
  const [now, setNow] = useState(() => new Date());
  const [showSun, setShowSun] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const sunById = useMemo(() => {
    const out = {};
    for (const id of Object.keys(PROVINCE_PATHS)) out[id] = sunInfo(id, now);
    return out;
  }, [now]);

  // Тень ночи: по сетке считаем высоту солнца в каждой точке карты и
  // рисуем её в маленький canvas; SVG растягивает его с билинейным
  // сглаживанием, поэтому граница день/ночь получается мягкой.
  const shadowUrl = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const gw = 120;
    const gh = Math.max(8, Math.round((gw * viewBox.h) / viewBox.w));
    const canvas = document.createElement('canvas');
    canvas.width = gw;
    canvas.height = gh;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const img = ctx.createImageData(gw, gh);
    for (let j = 0; j < gh; j += 1) {
      for (let i = 0; i < gw; i += 1) {
        const X = viewBox.x + ((i + 0.5) / gw) * viewBox.w;
        const Y = viewBox.y + ((j + 0.5) / gh) * viewBox.h;
        const { lon, lat } = unprojectXY(X, Y);
        const alt = sunAltitude(now, Math.max(-85, Math.min(85, lat)), lon);
        const ad = Math.max(0, Math.min(1, (4 - alt) / 16)) * 0.66;
        const aa = alt > -6 && alt < 8 ? 0.3 * (1 - Math.abs(alt - 1) / 7) : 0;
        const alpha = ad + aa * (1 - ad);
        const k = (j * gw + i) * 4;
        if (alpha > 0) {
          img.data[k] = (5 * ad + 255 * aa * (1 - ad)) / alpha;
          img.data[k + 1] = (11 * ad + 154 * aa * (1 - ad)) / alpha;
          img.data[k + 2] = (26 * ad + 60 * aa * (1 - ad)) / alpha;
        }
        img.data[k + 3] = Math.round(alpha * 255);
      }
    }
    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL();
  }, [now, viewBox]);

  // Солнце и луна идут по дуге над картой по времени суток: днём солнце
  // от восхода (справа, восток) до заката (слева, запад), ночью луна от
  // заката до следующего восхода. Опорная точка — Виннипег, центр страны.
  const sky = useMemo(() => skyCycle(now), [now]);
  // Звёзды видны только ночью: гаснут, когда солнце в центре страны
  // (Виннипег) поднимается над горизонтом, и загораются в сумерках. При
  // выключенном «Day & night» звёзды горят всегда.
  const starOpacity = showSun && sunById.mb ? Math.max(0, Math.min(1, (2 - sunById.mb.alt) / 10)) : 1;
  const skyX = viewBox.x + (1 - sky.frac) * viewBox.w;
  const skyY = viewBox.y + SKY_HORIZON - Math.sin(Math.PI * sky.frac) * (SKY_HORIZON - SKY_PEAK);

  // Измеряем реальные bounding box'ы один раз при монтировании: общий
  // viewBox — из объединения всех провинций (с отступом), а box каждой
  // провинции — для расчета transform-origin/scale при зуме и для
  // раскладки городов внутри её силуэта.
  useLayoutEffect(() => {
    const ids = Object.keys(PROVINCE_PATHS);
    const nextBoxes = {};
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const id of ids) {
      const el = pathRefs.current[id];
      if (!el) continue;
      const box = el.getBBox();
      nextBoxes[id] = box;
      minX = Math.min(minX, box.x);
      minY = Math.min(minY, box.y);
      maxX = Math.max(maxX, box.x + box.width);
      maxY = Math.max(maxY, box.y + box.height);
    }
    if (Number.isFinite(minX)) {
      const padX = (maxX - minX) * 0.03;
      const padY = (maxY - minY) * 0.03;
      // Намеренно: размеры можно узнать только из отрисованного SVG (getBBox),
      // а useLayoutEffect применяет их до первого кадра — это штатный
      // сценарий «измерить DOM и обновить состояние», мигания нет.
      // Сверху оставляем «небо» под дугу солнца (SKY единиц viewBox).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setViewBox({ x: minX - padX, y: minY - padY - SKY, w: maxX - minX + padX * 2, h: maxY - minY + padY * 2 + SKY });
      setBoxes(nextBoxes);
    }
  }, []);

  const selectedProvince = selectedId
    ? PROVINCES_DATA.find((p) => p.id === selectedId)
    : null;
  const selectedDetail = selectedId ? getProvinceDetail(selectedId) : null;
  const cities = useMemo(() => selectedDetail?.cities?.items ?? [], [selectedDetail]);

  // Увеличенная провинция: левый клик по пустому месту сбоку от неё
  // (слева или справа) возвращает карту ко всем провинциям. Кнопки,
  // навигация, открытая карточка города и сами города клик не засчитывают;
  // короткая пауза после выбора не даёт тому же клику сразу выйти обратно.
  useEffect(() => {
    if (!selectedId || selectedCity) return undefined;
    const armedAt = Date.now();
    const onClick = (e) => {
      if (e.button !== 0 || Date.now() - armedAt < 450) return;
      if (e.target?.closest?.('button, a, nav, footer, [role="dialog"], .map-city-dot')) return;
      const el = pathRefs.current[selectedId];
      if (!el) return;
      const r = el.getBoundingClientRect();
      const margin = 8;
      if (e.clientX < r.left - margin || e.clientX > r.right + margin) setSelectedId(null);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [selectedId, selectedCity]);

  // Города выбранной провинции на настоящих координатах.
  const selBox = selectedId ? boxes[selectedId] : null;
  const selScale = selBox ? Math.min((viewBox.w * 0.82) / selBox.width, (viewBox.h * 0.82) / selBox.height) : 1;
  const cityPoints = useMemo(
    () => (selBox && cities.length ? placeCities(cities, selScale, selBox, PROVINCE_PATHS[selectedId]) : []),
    [cities, selBox, selScale, selectedId],
  );

  const viewCx = viewBox.x + viewBox.w / 2;
  const viewCy = viewBox.y + viewBox.h / 2;

  return (
    <div className="map-page min-h-screen bg-sw-bg text-sw-text">
      {/* Мерцающие звёзды на всю страницу. Первый child без z-index —
          рисуются под всем остальным. */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ opacity: starOpacity, transition: 'opacity 1500ms ease' }}
      >
        <TwinkleStars stars={MAP_STARS} kinds={MAP_STAR_KINDS} />
        {METEORS.map((m, i) => (
          <span
            key={i}
            className="map-meteor"
            style={{ left: `${m.left}%`, top: `${m.top}%`, '--dur': `${m.dur}s`, '--delay': `${m.delay}s` }}
          />
        ))}
      </div>
      <SiteNav backLabel="Back to Home" onBack={() => navigate('/')} />
      <div className="mx-auto max-w-[1440px] px-6 pb-7 pt-[70px]">

        <div className="mt-8 space-y-3 text-center">
          <p className="type-tag text-[12px] tracking-[0.14em] text-sw-ember">Explore The Map</p>
          <h1 className="text-[36px] tracking-wide text-white md:text-[52px]">
            {selectedProvince ? (
              <>
                {selectedProvince.name.split(' ')[0]} <span className="text-sw-ember">{selectedProvince.name.split(' ').slice(1).join(' ')}</span>
              </>
            ) : (
              <>
                Every Province, <span className="text-sw-ember">One Map</span>
              </>
            )}
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            {selectedProvince
              ? `${cities.length} cities to discover. Click a city to see more.${showSun && sunById[selectedId] ? ` Sun in ${sunById[selectedId].city}: ${sunPhaseText(sunById[selectedId])}.` : ''}`
              : 'Click a province or territory to zoom in and see its cities.'}
          </p>
        </div>

        <div className="map-stage relative mx-auto mt-10 w-full max-w-[980px]">
          {selectedId && (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="glass glass--sm absolute left-2 top-2 z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back To Map
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowSun((v) => !v)}
            aria-pressed={showSun}
            className="glass glass--sm absolute right-2 top-2 z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white"
          >
            {showSun ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            Day &amp; night {showSun ? 'on' : 'off'}
          </button>

          <svg
            viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
            className="w-full"
            style={{ overflow: 'visible' }}
          >
            {PROVINCES_DATA.map((p) => {
              if (!PROVINCE_PATHS[p.id]) return null;
              const box = boxes[p.id];
              const isSelected = selectedId === p.id;
              const isDimmed = selectedId && !isSelected;
              const cx = box ? box.x + box.width / 2 : 0;
              const cy = box ? box.y + box.height / 2 : 0;
              const scale = box ? Math.min((viewBox.w * 0.82) / box.width, (viewBox.h * 0.82) / box.height) : 1;
              const tx = viewCx - cx;
              const ty = viewCy - cy;

              return (
                <g
                  key={p.id}
                  className="map-tile-group"
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: isSelected ? `translate(${tx}px, ${ty}px) scale(${scale})` : 'none',
                    opacity: isDimmed ? 0 : 1,
                    pointerEvents: isDimmed ? 'none' : 'auto',
                  }}
                >
                  <path
                    ref={(el) => { pathRefs.current[p.id] = el; }}
                    d={PROVINCE_PATHS[p.id]}
                    className="map-tile"
                    fill={TILE_COLORS[p.id]}
                    fillOpacity={hoveredId === p.id && !selectedId ? 0.95 : 0.62}
                    stroke={hoveredId === p.id && !selectedId ? '#fff' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={(hoveredId === p.id && !selectedId ? 2.5 : 1.5) / scale}
                    onMouseEnter={() => !selectedId && setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId((id) => (id === p.id ? null : id))}
                    onClick={() => !selectedId && setSelectedId(p.id)}
                    style={{ cursor: selectedId ? 'default' : 'pointer', transition: 'fill-opacity 200ms, stroke 200ms' }}
                  />
                  {box && (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="map-tile-label"
                      style={{
                        // Пока провинция не выбрана, к группе не применяется
                        // transform: scale(...), поэтому размер шрифта не
                        // нужно компенсировать делением на scale — иначе
                        // у маленьких провинций (PE, NS) с большим scale
                        // подпись становится почти нечитаемой.
                        fontSize: isSelected ? 10 / scale : 30,
                        fontFamily: "'Cinzel', Georgia, serif",
                        fontWeight: 700,
                        fill: '#fff',
                        pointerEvents: 'none',
                        opacity: isSelected ? 0 : 1,
                        transition: 'opacity 200ms',
                      }}
                    >
                      {p.id.toUpperCase()}
                    </text>
                  )}

                  {/* Города — вложены в ту же группу, поэтому масштабируются
                      и двигаются вместе с провинцией при зуме. Точки —
                      условная сетка, не настоящие координаты, поэтому здесь
                      сознательно нет clipPath по силуэту: он обрезал бы
                      подписи городов у самого края неправильной формы
                      провинции. */}
                  {isSelected && box && cities.length > 0 && (
                    <g>
                      {cityPoints.map(({ city, px, py, label }) => {
                        return (
                          <g
                            key={city.name}
                            className="map-city-dot"
                            style={{ transformOrigin: `${px}px ${py}px` }}
                            onClick={(e) => { e.stopPropagation(); setSelectedCity(city); }}
                          >
                            {/* Провинция уже увеличена в scale раз — делим
                                размеры точек/текста на тот же scale, чтобы
                                на экране они остались одного размера
                                независимо от исходного размера контура. */}
                            <circle cx={px} cy={py} r={9 / scale} fill={city.accent} stroke="#fff" strokeWidth={1.5 / scale} />
                            <circle cx={px} cy={py} r={14 / scale} fill={city.accent} fillOpacity="0.25" className="map-city-pulse" />
                            <text
                              x={px + label.dx / scale}
                              y={py + label.dy / scale}
                              textAnchor={label.anchor}
                              style={{ fontSize: 18 / scale, fontWeight: 700, fill: '#fff', fontFamily: "'Outfit', Arial, sans-serif", pointerEvents: 'none' }}
                            >
                              {city.name}
                            </text>
                          </g>
                        );
                      })}
                    </g>
                  )}
                </g>
              );
            })}

            {showSun && (
              <g pointerEvents="none">
                <defs>
                  <clipPath id="land-clip">
                    {PROVINCES_DATA.map((p) => (PROVINCE_PATHS[p.id] ? <path key={p.id} d={PROVINCE_PATHS[p.id]} /> : null))}
                  </clipPath>
                  <radialGradient id="sun-glow">
                    <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {shadowUrl && (
                  <image
                    href={shadowUrl}
                    x={viewBox.x}
                    y={viewBox.y}
                    width={viewBox.w}
                    height={viewBox.h}
                    preserveAspectRatio="none"
                    clipPath="url(#land-clip)"
                    style={{ opacity: selectedId ? 0 : 1, transition: 'opacity 350ms' }}
                  />
                )}
                <path
                  d={`M ${viewBox.x} ${viewBox.y + SKY_HORIZON} Q ${viewBox.x + viewBox.w / 2} ${viewBox.y + SKY_HORIZON - 2 * (SKY_HORIZON - SKY_PEAK)} ${viewBox.x + viewBox.w} ${viewBox.y + SKY_HORIZON}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                  style={{ opacity: selectedId ? 0 : 1, transition: 'opacity 350ms' }}
                />
                <g style={{ opacity: selectedId ? 0 : 1, transition: 'opacity 350ms' }}>
                  {sky.body === 'sun' ? (
                    <>
                      <circle cx={skyX} cy={skyY} r="64" fill="url(#sun-glow)" />
                      <SunGlyph x={skyX} y={skyY} r={22} />
                    </>
                  ) : (
                    <>
                      <circle cx={skyX} cy={skyY} r="58" fill="rgba(165,180,252,0.16)" />
                      <MoonGlyph x={skyX} y={skyY} r={20} />
                    </>
                  )}
                </g>
              </g>
            )}
          </svg>

          {hoveredId && !selectedId && boxes[hoveredId] && (
            <div
              className="glass glass--sm pointer-events-none absolute z-10 -translate-x-1/2 rounded-xl px-3 py-2 text-center"
              style={{
                left: `${((boxes[hoveredId].x + boxes[hoveredId].width / 2 - viewBox.x) / viewBox.w) * 100}%`,
                top: `${((boxes[hoveredId].y - viewBox.y) / viewBox.h) * 100}%`,
                transform: 'translate(-50%, -110%)',
              }}
            >
              <p className="type-stat text-base text-white">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.name}</p>
              <p className="text-sm text-gray-400">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.tagline}</p>
              {showSun && sunById[hoveredId] && (
                <p className="mt-1 text-xs text-amber-200/90">
                  {sunById[hoveredId].city} {sunById[hoveredId].localTime} · {sunPhaseText(sunById[hoveredId])}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {selectedCity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCity(null)}
        >
          <div
            className="glass glass--sm relative w-[320px] rounded-2xl p-6"
            style={{ '--glass-tint': '217, 107, 50' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCity(null)}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-4">
              <CityCrestSmall city={selectedCity} />
              <div>
                <p className="type-tag text-xs tracking-[0.1em]" style={{ color: selectedCity.accent }}>{selectedCity.label}</p>
                <p className="type-stat text-xl text-white">{selectedCity.name}</p>
              </div>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              Population: {selectedCity.population}
            </p>

            <button
              type="button"
              onClick={() => navigate(selectedCity.slug ? `/city/${selectedCity.slug}` : `/province/${selectedId}`)}
              className="type-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-white"
              style={{ background: selectedCity.accent }}
            >
              More
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
      <SiteFooter wide />
    </div>
  );
}
