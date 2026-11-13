import { useEffect, useRef, useState } from 'react';

// Число "набегает" от нуля до значения, когда блок попадает в кадр.
// Понимает значения вида "48", "200+", "10M", "10 M", "340K km²":
// число считается, всё остальное (приставки, суффиксы) остаётся как есть.
// Годы ("1885") и значения без числа не анимируются — набегающий год
// выглядел бы нелепо.
//
// Ширина не прыгает: невидимая копия итогового текста держит место, а
// анимированное число лежит поверх. Для скринридеров — итоговое значение.
// prefers-reduced-motion: сразу итоговое значение.
const PARSE = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function parse(value) {
  const m = PARSE.exec(String(value));
  if (!m) return null;
  const [, prefix, raw, suffix] = m;
  const target = parseFloat(raw.replace(/,/g, ''));
  if (Number.isNaN(target)) return null;
  const isYear = !suffix && !prefix && target >= 1000 && target < 2200;
  if (isYear) return null;
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  return { prefix, suffix, target, decimals, grouped: raw.includes(',') };
}

const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - 2 ** (-10 * t));

export default function CountUp({ value, duration = 1700, delay = 0 }) {
  const ref = useRef(null);
  const parsed = parse(value);
  // Без анимации (reduced-motion / нет IntersectionObserver) сразу итог.
  const [instant] = useState(
    () => !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window),
  );
  const [current, setCurrent] = useState(parsed ? (instant ? parsed.target : 0) : null);

  useEffect(() => {
    if (!parsed || instant) return undefined;

    let raf = null;
    let timer = null;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setCurrent(parsed.target * easeOutExpo(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(run, delay);
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
    };
    // value определяет parsed; duration/delay — константы вызова
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parsed) return <span>{value}</span>;

  const shown = parsed.decimals
    ? current.toFixed(parsed.decimals)
    : Math.round(current).toLocaleString('en-US', { useGrouping: parsed.grouped });

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>{value}</span>
      <span aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap">
        {parsed.prefix}{shown}{parsed.suffix}
      </span>
    </span>
  );
}
