import { useEffect, useRef, useState } from 'react';
import './Atmosphere.css';

// Живая атмосфера главной — один закреплённый на экране слой:
//  1) горные хребты внизу: три слоя едут при прокрутке с разной скоростью
//     (параллакс) и поднимаются из-за края экрана, когда начинаешь листать;
//  2) северное сияние сверху, которое плавно меняет цвет по разделам:
//     провинции — зелёное, животные — тёплое, парки — голубое, рассылка —
//     фиолетовое. На первом экране это сияние не нужно — там уже есть своё
//     (оно уезжает вместе со страницей).
//
// Движение пишется прямо в style (requestAnimationFrame), а не в state:
// иначе каждый кадр прокрутки перерисовывал бы React. Тема — в state, но
// меняется только при смене раздела.
// prefers-reduced-motion: горы стоят на месте, сияние не дрейфует.
//
// variant="city" — тот же слой, но вместо гор силуэт города: три плана
// зданий с антеннами и светящимися окнами цвета текущего раздела (страницы
// городов). liftFrom сдвигает начало подъёма силуэта: на странице города
// сверху полноэкранное фото, и подъём должен начаться, когда оно уезжает.

// Рваный силуэт хребта детерминированно (одинаковый при каждой загрузке).
function makeRidge(seed, baseY, amp, steps) {
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  const pts = [];
  for (let i = 0; i <= steps; i += 1) {
    const x = (i / steps) * 1200;
    const peak = i % 2 === 0;
    const y = baseY - (peak ? amp * (0.55 + rnd() * 0.45) : amp * (0.08 + rnd() * 0.3));
    pts.push([x, y]);
  }
  return pts;
}

const toPoints = (pts) => pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');

// Силуэт города детерминированно: ряд зданий разной ширины и высоты, высота
// ограничена «синусной» огибающей — получаются кластеры высоток и просветы.
// Часть зданий со ступенчатой крышей, часть с антенной. Окна — отдельно у
// каждого здания: своя сетка внутри контура, рядами-этажами, у одних зданий
// светится больше, у других меньше, часть стоит тёмной (на силуэт seed не
// влияет — окна считаются своим генератором).
function makeSkyline(seed, baseY, minH, maxH) {
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  const pts = [[0, baseY]];
  const buildings = [];
  let x = 0;
  while (x < 1200) {
    const w = Math.min(1200 - x, 11 + rnd() * 30);
    const env = 0.5 + 0.5 * Math.sin((x / 1200) * Math.PI * 2.2 + seed);
    const h = minH + (maxH - minH) * (0.15 + 0.85 * env * (0.4 + 0.6 * rnd()));
    const top = baseY - h;
    buildings.push({ x, w, top });
    pts.push([x, top]);
    if (rnd() < 0.28 && w > 18) {
      const inset = w * 0.24;
      pts.push([x + inset, top], [x + inset, top - 10 - rnd() * 12], [x + w - inset, top - 10 - rnd() * 12], [x + w - inset, top]);
    } else if (rnd() < 0.14) {
      const cx = x + w / 2;
      pts.push([cx - 0.8, top], [cx, top - 16 - rnd() * 16], [cx + 0.8, top]);
    }
    pts.push([x + w, top]);
    x += w;
  }
  pts.push([1200, baseY]);

  let ws = seed * 7919 + 13;
  const wrnd = () => {
    ws = (ws * 16807) % 2147483647;
    return ws / 2147483647;
  };
  const PITCH_X = 5.5;
  const PITCH_Y = 7;
  let lit = '';
  let dim = '';
  buildings.forEach((b) => {
    if (b.w < 12 || wrnd() < 0.3) return; // тёмное здание
    const density = 0.12 + wrnd() * 0.3;
    const cols = Math.max(1, Math.floor((b.w - 5) / PITCH_X));
    const x0 = b.x + (b.w - ((cols - 1) * PITCH_X + 2)) / 2;
    for (let y = b.top + 6; y < 294; y += PITCH_Y) {
      const floor = 0.4 + wrnd() * 1.2; // этаж освещён сильнее или слабее
      const depth = 1 - 0.5 * ((y - b.top) / (300 - b.top)); // ниже — реже
      for (let c = 0; c < cols; c += 1) {
        if (wrnd() < density * floor * depth) {
          const d = `M${(x0 + c * PITCH_X).toFixed(1)} ${y.toFixed(1)}h2v2.8h-2z`;
          if (wrnd() < 0.35) dim += d;
          else lit += d;
        }
      }
    }
  });
  return { pts, lit, dim };
}

const SKYLINES = [
  { key: 'back', ...makeSkyline(11, 240, 60, 170), fill: 'url(#atmo-glow-back)', shift: 6, rise: 1, windows: false },
  { key: 'mid', ...makeSkyline(23, 270, 50, 140), fill: 'url(#atmo-glow-mid)', shift: 14, rise: 0.75, windows: true },
  { key: 'front', ...makeSkyline(47, 300, 35, 95), fill: 'rgba(5, 11, 22, 0.94)', shift: 26, rise: 0.5, windows: true },
];

const RIDGES = [
  { key: 'back', pts: makeRidge(7, 200, 120, 15), fill: 'url(#atmo-glow-back)', shift: 6, rise: 1 },
  { key: 'mid', pts: makeRidge(19, 240, 125, 21), fill: 'url(#atmo-glow-mid)', shift: 14, rise: 0.75 },
  { key: 'front', pts: makeRidge(43, 280, 105, 29), fill: 'rgba(5, 11, 22, 0.94)', shift: 26, rise: 0.5 },
];

// id раздела -> тема сияния (по умолчанию — разделы главной; другие
// страницы передают свой список через проп sections)
const SECTIONS = [
  ['provinces', 'provinces'],
  ['wildlife', 'wildlife'],
  ['safety', 'wildlife'],
  ['parks', 'parks'],
  ['newsletter', 'newsletter'],
];

export default function Atmosphere({ sections = SECTIONS, variant = 'mountains', liftFrom = 0 }) {
  const layers = variant === 'city' ? SKYLINES : RIDGES;
  const [theme, setTheme] = useState('hero');
  const layerRefs = useRef({});

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let raf = null;
    let current = 'hero';

    const frame = () => {
      raf = null;
      const vh = window.innerHeight;
      const y = window.scrollY;

      // Тема: последний раздел, верх которого уже выше 45% экрана.
      let next = 'hero';
      for (const [id, name] of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.45) next = name;
      }
      if (next !== current) {
        current = next;
        setTheme(next);
      }

      if (reduce) return;
      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      const p = Math.min(1, Math.max(0, y / max));
      // Горы поднимаются из-за края за первые ~80% высоты экрана прокрутки.
      const lift = Math.min(1, Math.max(0, (y - vh * liftFrom) / (vh * 0.8)));
      layers.forEach((r) => {
        const el = layerRefs.current[r.key];
        if (!el) return;
        const dx = -p * r.shift;
        const dy = (1 - lift) * 38 * r.rise + 0;
        el.style.transform = `translate3d(${dx}%, ${dy}%, 0)`;
      });
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(frame);
    };

    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [sections, layers, liftFrom]);

  return (
    <div className={`atmosphere${variant === 'city' ? ' atmosphere--city' : ''}`} data-theme={theme} aria-hidden="true">
      <div className="atmosphere__aurora atmosphere__aurora--provinces" />
      <div className="atmosphere__aurora atmosphere__aurora--wildlife" />
      <div className="atmosphere__aurora atmosphere__aurora--parks" />
      <div className="atmosphere__aurora atmosphere__aurora--newsletter" />

      {/* Градиенты вершин: цвет раздела вверху гор, тёмная подошва внизу */}
      <svg width="0" height="0" className="atmosphere__defs">
        <defs>
          <linearGradient id="atmo-glow-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="atmosphere__glow-stop atmosphere__glow-stop--back" />
            <stop offset="0.75" stopColor="rgb(14, 34, 54)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="atmo-glow-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="atmosphere__glow-stop atmosphere__glow-stop--mid" />
            <stop offset="0.7" stopColor="rgb(9, 22, 38)" stopOpacity="0.82" />
          </linearGradient>
        </defs>
      </svg>

      <div className="atmosphere__ridges">
        {layers.map((r) => (
          <svg
            key={r.key}
            ref={(el) => { layerRefs.current[r.key] = el; }}
            className={`atmosphere__ridge atmosphere__ridge--${r.key}`}
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <polygon points={`0,300 ${toPoints(r.pts)} 1200,300`} fill={r.fill} />
            {r.windows && (
              <>
                <path d={r.lit} className="atmosphere__window" />
                <path d={r.dim} className="atmosphere__window atmosphere__window--dim" />
              </>
            )}
            <polyline
              points={toPoints(r.pts)}
              className="atmosphere__rim"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
