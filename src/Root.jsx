import { useEffect, useState } from 'react';
import App from './App.jsx';
import ProvincePage from './pages/ProvincePage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { getProvinceDetail } from './data/provinces/index.js';
import { matchProvinceRoute, useRoute } from './router.js';

// Длительность затухания старой страницы — совпадает с pageOut в index.css
const FADE_OUT_MS = 180;

function pageFor(path) {
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
    if (!leaving) return undefined;

    const timer = setTimeout(() => {
      setShown(path);
      window.scrollTo({ top: 0 });
    }, FADE_OUT_MS);

    return () => clearTimeout(timer);
  }, [leaving, path]);

  return (
    <>
      <div key={shown} className={`page-fade${leaving ? ' page-fade--out' : ''}`}>
        {pageFor(shown)}
      </div>

      {/* Общая для всех страниц кнопка "наверх" */}
      <ScrollToTop />
    </>
  );
}
