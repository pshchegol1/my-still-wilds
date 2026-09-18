import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

// Кнопка "наверх" в правом нижнем углу. Появляется, когда страница
// прокручена, и плавно возвращает наверх по клику.
const SHOW_AFTER = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(window.scrollY > SHOW_AFTER);
    sync(); // на случай, если страница открыта уже прокрученной
    window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      // Пока кнопка скрыта — убираем ее из потока событий и с клавиатуры
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`glass glass--sm glass--forest fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[#6ee7a1] transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
