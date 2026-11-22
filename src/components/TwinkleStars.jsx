import { useEffect, useRef } from 'react';

// Мерцающие звёзды на одном <canvas> вместо сотен <div> с CSS-анимацией.
//
// Раньше каждая звезда была отдельным элементом со своей бесконечной
// анимацией: на главной их 1 050, на Parks — 336. Браузер держал под каждую
// свой композитный слой и пересобирал их все каждый кадр, даже звёзды за
// экраном, — а prefers-reduced-motion при этом игнорировался.
//
// Здесь те же звёзды (позиции, размеры, длительности, задержки и ключевые
// кадры), рисуются одним слоем:
//  - только видимые звёзды, не чаще 30 раз в секунду (мерцание — медленные
//    затухания по 3–7 с, глазу этого достаточно);
//  - холст на паузе, пока он вне экрана;
//  - при prefers-reduced-motion — неподвижное звёздное небо;
//  - если слой выше полутора экранов (главная: звёзды по всей высоте
//    страницы), холст покрывает только полосу вокруг экрана и переезжает
//    вместе с прокруткой — без гигантского растра на всю страницу.
//
// Холст заполняет ближайший позиционированный родитель (он же задаёт
// систему координат звёзд, как раньше для absolute-дивов).
//
// stars:  [{ x, y, size, duration, delay, opacity, kind? }], x/y — проценты
//         от ширины/высоты родителя (левый верхний угол звезды), size — px;
//         opacity — значение до старта анимации (как inline-стиль раньше).
// kinds:  { [kind]: { min, max, scale?, glow? } } — ключевые кадры:
//         0% и 100% — min, 50% — max (opacity), scale — размер в 50%,
//         glow — свечение как box-shadow: 0 0 6px 1px rgba(255,255,255,.4).

const FRAME_MS = 1000 / 30;

// CSS ease-in-out = cubic-bezier(0.42, 0, 0.58, 1)
function easeInOut(x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const p1 = 0.42;
  const p2 = 0.58;
  const bx = (t) => 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t;
  const dbx = (t) => 3 * (1 - t) * (1 - t) * p1 + 6 * (1 - t) * t * (p2 - p1) + 3 * t * t * (1 - p2);
  let t = x;
  for (let i = 0; i < 6; i += 1) {
    const d = dbx(t);
    if (Math.abs(d) < 1e-6) break;
    t -= (bx(t) - x) / d;
    t = Math.min(1, Math.max(0, t));
  }
  return 3 * (1 - t) * t * t + t * t * t; // y(t) при y1 = 0, y2 = 1
}

// Значение ключевого кадра 0% → 50% → 100% (a → b → a) в момент времени
function keyframe(a, b, star, t) {
  if (t < star.delay) return null; // до старта — исходный inline-стиль
  const phase = ((t - star.delay) % star.duration) / star.duration;
  return phase < 0.5
    ? a + (b - a) * easeInOut(phase * 2)
    : b + (a - b) * easeInOut((phase - 0.5) * 2);
}

export default function TwinkleStars({ stars, kinds }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    let width = 0;
    let height = 0;
    let dpr = 1;
    let bandTop = 0;
    let bandHeight = 0;
    let banded = false;
    let visible = true;
    let raf = null;
    let last = 0;

    const draw = (now) => {
      const t = (now - start) / 1000;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, bandHeight);
      ctx.fillStyle = '#fff';
      for (const star of stars) {
        const kind = kinds[star.kind ?? 'default'];
        const size = star.size;
        const x = (star.x / 100) * width + size / 2;
        const y = (star.y / 100) * height + size / 2 - bandTop;
        if (y < -12 || y > bandHeight + 12) continue;
        let alpha = star.opacity;
        let scale = 1;
        if (!reduceMotion) {
          const a = keyframe(kind.min, kind.max, star, t);
          if (a !== null) {
            alpha = a;
            if (kind.scale) scale = keyframe(1, kind.scale, star, t);
          }
        }
        const r = (size / 2) * scale;
        ctx.globalAlpha = alpha;
        if (kind.glow) {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = 6 * scale;
          ctx.beginPath();
          ctx.arc(x, y, r + 1 * scale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
          ctx.fillStyle = '#fff';
        }
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    // Полоса холста (для высокого родителя) должна накрывать экран
    const placeBand = () => {
      if (!banded) return false;
      const rect = host.getBoundingClientRect();
      const viewTop = Math.min(Math.max(-rect.top, 0), height);
      const viewBottom = viewTop + window.innerHeight;
      if (viewTop >= bandTop && viewBottom <= bandTop + bandHeight) return false;
      bandTop = Math.min(Math.max(viewTop - (bandHeight - window.innerHeight) / 2, 0), Math.max(0, height - bandHeight));
      canvas.style.top = `${bandTop}px`;
      return true;
    };

    const resize = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vh = window.innerHeight;
      banded = height > vh * 1.5;
      bandHeight = banded ? Math.min(height, vh * 2) : height;
      if (!banded) bandTop = 0;
      canvas.style.top = `${bandTop}px`;
      canvas.style.height = `${bandHeight}px`;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(bandHeight * dpr));
      placeBand();
      draw(performance.now());
    };

    const tick = (now) => {
      raf = null;
      if (!visible) return;
      const moved = placeBand();
      if (moved || now - last >= FRAME_MS) {
        last = now;
        draw(now);
      }
      if (!reduceMotion || banded) raf = requestAnimationFrame(tick);
    };
    const run = () => {
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) run();
    });
    io.observe(host);
    window.addEventListener('resize', resize);
    resize();
    run();

    return () => {
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener('resize', resize);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [stars, kinds]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', left: 0, top: 0, width: '100%', pointerEvents: 'none' }}
    />
  );
}
