import { useEffect, useRef } from 'react';

// Прогресс прокрутки элемента относительно вьюпорта: 0, когда верх
// элемента у верха экрана, растет к 1, когда элемент целиком уехал
// вверх (на высоту, равную его собственной). Используется для
// параллакса фона и для карточек, которые уменьшаются/гаснут при выходе
// из вьюпорта.
//
//   const ref = useScrollProgress((p, el) => { el.style.opacity = 1 - p; });
//
// Прогресс отдаётся в колбэк onProgress(p, el) раз в кадр, а не в state:
// иначе каждый кадр прокрутки перерисовывал бы весь компонент-владелец (на
// главной это вся страница с тысячей звёзд). Колбэк сам пишет стили
// напрямую в DOM. Вызывается только когда значение изменилось.
//
// При prefers-reduced-motion колбэк не вызывается — эффект отключается,
// элементы остаются в исходном (нулевом) положении из разметки.
export function useScrollProgress(onProgress) {
  const ref = useRef(null);
  const callbackRef = useRef(onProgress);

  useEffect(() => {
    callbackRef.current = onProgress;
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let raf = null;
    let last = null;

    const measure = () => {
      raf = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      if (p === last) return;
      last = p;
      callbackRef.current?.(p, el);
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

  return ref;
}
