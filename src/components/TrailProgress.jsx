import { useEffect, useRef, useState } from 'react';
import { Backpack } from 'lucide-react';
import './TrailProgress.css';

// «Тропа» сбоку: вертикальная линия с точками-разделами гайда и маленьким
// туристом, который идёт по ней вместе с прокруткой. Клик по точке
// плавно переносит к разделу. На телефоне — тонкая полоска сверху.
//
// Положение туриста считается между верхами соседних разделов: чем дальше
// пролистан раздел, тем дальше турист от его точки к следующей.
// Движение пишется прямо в style (rAF), в state — только смена активного
// раздела и появление тропы (после первого экрана).
// prefers-reduced-motion: турист просто стоит у активной точки.
const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function TrailProgress({ stops }) {
  const hikerRef = useRef(null);
  const fillRef = useRef(null);
  const barRef = useRef(null);
  const [active, setActive] = useState(-1);
  const [shown, setShown] = useState(false);
  const n = stops.length;

  useEffect(() => {
    let raf = null;
    let curActive = -1;
    let curShown = false;
    const frame = () => {
      raf = null;
      const vh = window.innerHeight;
      const anchor = vh * 0.4;
      const tops = stops.map((s) => document.getElementById(s.id)?.getBoundingClientRect().top ?? Infinity);

      let idx = -1;
      tops.forEach((t, i) => {
        if (t <= anchor) idx = i;
      });
      // дошли до самого низа страницы — последний раздел может не успеть
      // подняться до отметки, но путь закончен
      const atEnd = window.scrollY + vh >= document.documentElement.scrollHeight - 4;
      if (atEnd && Number.isFinite(tops[n - 1])) idx = n - 1;
      let pos = 0;
      if (idx >= 0) {
        const next = idx < n - 1 ? tops[idx + 1] : null;
        const frac = idx === n - 1 || next === null || !Number.isFinite(next) ? 0 : clamp01((anchor - tops[idx]) / (next - tops[idx]));
        pos = n > 1 ? (idx + frac) / (n - 1) : 0;
      }
      const pct = `${(pos * 100).toFixed(2)}%`;
      if (hikerRef.current) hikerRef.current.style.top = pct;
      if (fillRef.current) fillRef.current.style.height = pct;
      if (barRef.current) barRef.current.style.width = pct;

      if (idx !== curActive) {
        curActive = idx;
        setActive(idx);
      }
      const visible = tops[0] <= vh * 0.85;
      if (visible !== curShown) {
        curShown = visible;
        setShown(visible);
      }
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
  }, [stops, n]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="trail" data-shown={shown} aria-label="Guide sections">
        <div className="trail__line">
          <i ref={fillRef} className="trail__fill" />
        </div>
        {stops.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className="trail__stop"
            style={{ top: `${n > 1 ? (i / (n - 1)) * 100 : 0}%` }}
            data-active={i === active}
            data-passed={i < active}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => jump(s.id)}
          >
            <span className="trail__dot" />
            <span className="trail__label">{s.label}</span>
          </button>
        ))}
        <span ref={hikerRef} className="trail__hiker" aria-hidden="true">
          <Backpack className="h-3.5 w-3.5" />
        </span>
      </nav>

      <div className="trail-bar" data-shown={shown} aria-hidden="true">
        <i ref={barRef} />
      </div>
    </>
  );
}
