import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Подсказка "листай вниз" на первом экране главной.
// - Компьютер: вертикальная дорожка с бегущей точкой и надписью SCROLL
//   в левом поле страницы — там пусто, карточки героя её не перекрывают.
// - Телефон: круглая кнопка со стрелкой внизу по центру.
// По клику плавно прокручивает к targetId. Гаснет, как только человек
// начал листать (больше не нужна), и снова появляется наверху.
// prefers-reduced-motion: без анимации и с мгновенной прокруткой.
export default function ScrollCue({ targetId = 'provinces' }) {
  const [scrolled, setScrolled] = useState(false);
  // На телефоне внизу первого экрана — ряд цифр героя; круглая кнопка
  // перекрыла бы их, поэтому там подсказка живёт только первые секунды.
  const [timedOut, setTimedOut] = useState(false);
  const hidden = scrolled || timedOut;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const isPhone = window.matchMedia?.('(max-width: 767px)').matches;
    const timer = isPhone ? setTimeout(() => setTimedOut(true), 5000) : null;
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const go = () => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(targetId)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={go}
      aria-label="Scroll down to explore"
      tabIndex={hidden ? -1 : 0}
      className={`scroll-cue ${hidden ? 'scroll-cue--hidden' : ''}`}
    >
      {/* Компьютер */}
      <span className="scroll-cue__desktop" aria-hidden="true">
        <span className="scroll-cue__label">Scroll</span>
        <span className="scroll-cue__track">
          <span className="scroll-cue__dot" />
        </span>
      </span>
      {/* Телефон */}
      <span className="scroll-cue__mobile" aria-hidden="true">
        <ChevronDown className="h-5 w-5" />
      </span>
    </button>
  );
}
