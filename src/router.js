import { useEffect, useState } from 'react';

// Минимальный роутер на History API — без внешних зависимостей.
// Якорные ссылки вида #provinces продолжают работать как обычно.

const ROUTE_CHANGE = 'stillwilds:routechange';

export function navigate(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  // Запоминаем, откуда пришли (путь + якорь), в state записи истории —
  // так "назад"-кнопки вида AnimalPage могут вернуть туда, откуда
  // реально кликнули карточку, а не на жестко прописанный маршрут.
  const from = window.location.pathname + window.location.hash;
  window.history.pushState({ from }, '', path);
  window.dispatchEvent(new Event(ROUTE_CHANGE));
  // Наверх прокручиваем не здесь, а в момент подмены страницы (Root),
  // иначе фон уезжает еще до того, как старая страница погасла.
}

// Куда вести "назад"-кнопку: туда, откуда реально перешли на текущую
// страницу (сохранено в history.state при навигации), иначе — fallback.
export function getBackPath(fallback) {
  return window.history.state?.from || fallback;
}

// Переход с карточки животного на его страницу. cardEl раньше помечал
// картинку карточки тем же view-transition-name, что и герой AnimalPage,
// чтобы браузер "доращивал" прямоугольник карточки в прямоугольник героя
// (geometry morph) — на практике это выглядело хуже простого
// затемнения/проявления (видно было, как фото тянется и искажается по
// пути). Теперь имя есть только у героя на AnimalPage.jsx, и он всегда
// появляется "соло" через animalHeroIn (см. index.css) — ровно так же,
// как при уходе через "Назад" он соло исчезает через animalHeroOut.
// cardEl оставлен в сигнатуре для обратной совместимости вызовов.
export function navigateToAnimal(slug, cardEl) {
  void cardEl;
  navigate(`/wildlife/${slug}`);
}

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    window.addEventListener(ROUTE_CHANGE, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(ROUTE_CHANGE, sync);
    };
  }, []);

  return path;
}

// "/province/bc" -> "bc"; иначе null
export function matchProvinceRoute(path) {
  const match = /^\/province\/([a-z-]+)\/?$/i.exec(path);
  return match ? match[1].toLowerCase() : null;
}

// "/wildlife/grizzly-bear" -> "grizzly-bear"; иначе null
export function matchAnimalRoute(path) {
  const match = /^\/wildlife\/([a-z-]+)\/?$/i.exec(path);
  return match ? match[1].toLowerCase() : null;
}

// "/park/banff" -> "banff"; иначе null
export function matchParkRoute(path) {
  const match = /^\/park\/([a-z-]+)\/?$/i.exec(path);
  return match ? match[1].toLowerCase() : null;
}

// "/city/vancouver" -> "vancouver"; иначе null
export function matchCityRoute(path) {
  const match = /^\/city\/([a-z-]+)\/?$/i.exec(path);
  return match ? match[1].toLowerCase() : null;
}

// "/route/calgary-banff-lake-louise" -> "calgary-banff-lake-louise"; иначе null
export function matchRouteRoute(path) {
  const match = /^\/route\/([a-z-]+)\/?$/i.exec(path);
  return match ? match[1].toLowerCase() : null;
}
