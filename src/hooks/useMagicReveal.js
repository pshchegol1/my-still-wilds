import { useLayoutEffect } from 'react';

// Плавное появление блоков главной при прокрутке.
//
// Что и в каком порядке появляется:
// - Заголовок раздела — по частям: метка, затем заголовок, затем описание.
// - Сетки карточек — ряд за рядом, а внутри ряда слева направо (задержка
//   считается по положению карточки в ряду, поэтому каждый новый ряд
//   снова начинается без паузы).
// - Остальные блоки (баннеры, рассылка, подвал) — целиком.
//
// Как это устроено:
// - useLayoutEffect ставит классы ДО первой отрисовки: блоки ниже экрана
//   не мелькают видимыми и не прячутся потом.
// - Блок запускается, как только входит в экран (порог низкий), чтобы
//   анимация проигрывалась уже на глазах, а не догоняла прокрутку.
// - После перехода классы снимаются (.reveal-done): у карточек снова
//   работают собственные hover-переходы, а не медленные "появляющиеся".
// - prefers-reduced-motion: ничего не прячем и не анимируем.
const COL_STAGGER_MS = 110;
const MAX_COLS = 6;
const HEADER_STEP_MS = 120;
const DURATION_MS = 1500;

export function useMagicReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const items = [];
    const seen = new Set();
    const add = (el, delay = 0) => {
      if (!el || seen.has(el)) return;
      seen.add(el);
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${delay}ms`);
      items.push(el);
    };

    // Заголовок раздела: метка -> заголовок -> описание/кнопка
    const addHeader = (header) => {
      const h2 = header.querySelector('h2');
      if (!h2) {
        add(header);
        return;
      }
      const tag = Array.from(header.children).find((c) => c.tagName === 'SPAN');
      const parts = [tag, h2, ...Array.from(h2.parentElement.children).filter((c) => c !== h2)];
      parts.filter(Boolean).forEach((part, i) => add(part, i * HEADER_STEP_MS));
    };

    // Карточки сетки: колонка внутри ряда определяет задержку
    const addGrid = (grid) => {
      const kids = Array.from(grid.children);
      const rows = [];
      kids.forEach((kid) => {
        const top = Math.round(kid.offsetTop / 24); // допуск на разную высоту
        let row = rows.find((r) => r.top === top);
        if (!row) {
          row = { top, kids: [] };
          rows.push(row);
        }
        row.kids.push(kid);
      });
      rows.forEach((row) => {
        row.kids
          .sort((a, b) => a.offsetLeft - b.offsetLeft)
          .forEach((kid, col) => add(kid, Math.min(col, MAX_COLS) * COL_STAGGER_MS));
      });
    };

    root.querySelectorAll('section[id]').forEach((section) => {
      if (section.classList.contains('glass')) {
        add(section);
        return;
      }
      Array.from(section.children).forEach((child) => {
        if (child.classList.contains('grid')) addGrid(child);
        else if (child.querySelector('h2')) addHeader(child);
        else add(child);
      });
    });
    root.querySelectorAll(':scope > footer').forEach((footer) => add(footer));

    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add('is-revealed');
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
          timers.push(setTimeout(() => {
            el.classList.remove('reveal', 'is-revealed');
            el.classList.add('reveal-done');
            el.style.removeProperty('--reveal-delay');
          }, delay + DURATION_MS + 150));
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -3% 0px' },
    );
    items.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      items.forEach((el) => {
        el.classList.remove('reveal', 'is-revealed');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, [rootRef]);
}
