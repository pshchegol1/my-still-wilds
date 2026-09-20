import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import App from './App.jsx';
import ProvincePage from './pages/ProvincePage.jsx';
import AnimalPage from './pages/AnimalPage.jsx';
import WildlifePage from './pages/WildlifePage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { getProvinceDetail } from './data/provinces/index.js';
import { getAnimalDetail } from './data/animals/index.js';
import { matchProvinceRoute, matchAnimalRoute, useRoute } from './router.js';

// Длительность затухания старой страницы для браузеров без View
// Transitions API — совпадает с pageOut в index.css.
const FADE_OUT_MS = 180;

// Chrome/Edge/Safari поддерживают View Transitions API: браузер сам
// морфит общий элемент (view-transition-name на карточке провинции и на
// герое ее страницы) и делает кросс-фейд всего остального. Firefox — нет,
// для него ниже остается прежнее ручное затухание через CSS-класс.
const supportsViewTransition =
  typeof document !== 'undefined' && typeof document.startViewTransition === 'function';

function pageFor(path) {
  if (path === '/wildlife') return <WildlifePage />;

  const animalSlug = matchAnimalRoute(path);
  const animal = animalSlug ? getAnimalDetail(animalSlug) : null;
  if (animal) return <AnimalPage animal={animal} />;

  const provinceId = matchProvinceRoute(path);
  const province = provinceId ? getProvinceDetail(provinceId) : null;

  // Нет данных для этого id — показываем главную страницу
  return province ? <ProvincePage province={province} /> : <App />;
}

export default function Root() {
  const path = useRoute();

  // Показываем предыдущий маршрут, пока идет затухание.
  // Состояние "уходим" выводится из данных, а не хранится отдельно.
  const [shown, setShown] = useState(path);
  const leaving = path !== shown;

  useEffect(() => {
    // Эффект зависит от [path, shown], а не от производного leaving:
    // flushSync ниже сам меняет shown, и если бы leaving был зависимостью,
    // это же изменение считалось бы новым запуском эффекта и обрывало
    // собственный только что успешно запущенный переход через cleanup.
    if (path === shown) return undefined;

    if (supportsViewTransition) {
      // flushSync обязателен: startViewTransition должен увидеть уже
      // обновленный DOM синхронно внутри своего колбэка, иначе браузер
      // снимет "новый" кадр раньше, чем React успеет перерисовать страницу.
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setShown(path);
          window.scrollTo(0, 0);
        });
      });
      // Быстрый повторный переход браузер обрывает сам (это ожидаемо и
      // безопасно) — без .catch() это всплывало бы необработанным
      // AbortError в консоли.
      transition.finished.catch(() => {});
      return undefined;
    }

    const timer = setTimeout(() => {
      setShown(path);
      window.scrollTo({ top: 0 });
    }, FADE_OUT_MS);

    return () => clearTimeout(timer);
  }, [path, shown]);

  // Ручной CSS-фейд нужен только без View Transitions API — иначе он
  // проигрывался бы под браузерной сценой и мог с ней разойтись по времени.
  const cssFadeClass = supportsViewTransition
    ? ''
    : `page-fade${leaving ? ' page-fade--out' : ''}`;

  return (
    <>
      <div key={shown} className={cssFadeClass}>
        {pageFor(shown)}
      </div>

      {/* Общая для всех страниц кнопка "наверх" */}
      <ScrollToTop />
    </>
  );
}
