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

export default function Atmosphere({ sections = SECTIONS }) {
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
      const lift = Math.min(1, y / (vh * 0.8));
      RIDGES.forEach((r) => {
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
  }, [sections]);

  return (
    <div className="atmosphere" data-theme={theme} aria-hidden="true">
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
        {RIDGES.map((r) => (
          <svg
            key={r.key}
            ref={(el) => { layerRefs.current[r.key] = el; }}
            className={`atmosphere__ridge atmosphere__ridge--${r.key}`}
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <polygon points={`0,300 ${toPoints(r.pts)} 1200,300`} fill={r.fill} />
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
