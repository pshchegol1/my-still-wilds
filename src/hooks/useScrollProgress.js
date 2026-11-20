import { useEffect, useRef, useState } from 'react';

// Прогресс прокрутки элемента относительно вьюпорта: 0, когда верх
// элемента у верха экрана, растет к 1, когда элемент целиком уехал
// вверх (на высоту, равную его собственной). Используется для
// параллакса фона и для карточек, которые уменьшаются/гаснут при выходе
// из вьюпорта.
//
// При prefers-reduced-motion прогресс всегда 0 — эффект отключается,
// но верстка не меняется.
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let raf = null;

    const measure = () => {
      raf = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      setProgress(p);
    };

    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Первое измерение может случиться до того, как применятся стили и
    // загрузится контент (высота шапки ещё нулевая) — тогда элемент оказывается
    // «выше экрана» и прогресс ложно равен 1. Пересчитываем при любом
    // изменении высоты страницы.
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(onScroll);
    resizeObserver?.observe(document.documentElement);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return [ref, progress];
}
