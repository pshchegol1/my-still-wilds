import {
  matchAnimalRoute,
  matchCityRoute,
  matchParkRoute,
  matchProvinceRoute,
  matchRouteRoute,
} from './router.js';

// Какая страница отвечает за путь — с загрузкой по требованию.
//
// Раньше Root импортировал все страницы и все данные (города, маршруты с
// линиями для карты, парки, животных) сразу: один бандл ~8.5 МБ, который
// браузер качал и разбирал на любой странице. Теперь каждая страница и её
// данные — отдельный чанк, и грузится только то, что нужно этому пути.
//
// Порядок проверок и запасной вариант (нет данных — главная) — те же, что
// были в pageFor() в Root.jsx.
//
// Результат: { Component, props }. Шапку с логотипом-ссылкой на главную
// каждая страница рисует сама (главная — свою, внутренние — SiteNav).

const PAGES = {
  wildlife: () => import('./pages/WildlifePage.jsx'),
  parks: () => import('./pages/ParksPage.jsx'),
  hikersGuide: () => import('./pages/HikersGuidePage.jsx'),
  bearSpray: () => import('./pages/BearSprayPage.jsx'),
  map: () => import('./pages/MapPage.jsx'),
  roadTrips: () => import('./pages/RoadTripsPage.jsx'),
  moderation: () => import('./pages/ModerationPage.jsx'),
  animal: () => import('./pages/AnimalPage.jsx'),
  park: () => import('./pages/ParkPage.jsx'),
  city: () => import('./pages/CityPage.jsx'),
  route: () => import('./pages/RoutePage.jsx'),
  province: () => import('./pages/ProvincePage.jsx'),
};

const loadApp = () => import('./App.jsx');

const STATIC_PATHS = {
  '/wildlife': PAGES.wildlife,
  '/parks': PAGES.parks,
  '/hikers-guide': PAGES.hikersGuide,
  '/bear-spray': PAGES.bearSpray,
  '/map': PAGES.map,
  '/road-trips': PAGES.roadTrips,
  '/moderation': PAGES.moderation,
};

// Данные городов — по файлу на город (имя файла = slug, в каждом один
// экспорт с полем slug). Грузим только открытый город, а не все ~100.
const CITY_MODULES = import.meta.glob(['./data/cities/*.js', '!./data/cities/index.js']);

async function loadCity(slug) {
  const load = CITY_MODULES[`./data/cities/${slug}.js`];
  if (!load) return null;
  const mod = await load();
  return Object.values(mod).find((value) => value && typeof value === 'object' && value.slug === slug) ?? null;
}

// Детальная страница: данные + компонент грузятся параллельно. Нет данных —
// null, и resolve() переходит к следующей проверке (в итоге — главная).
async function detail(loadPage, getData, propName) {
  const [data, mod] = await Promise.all([getData(), loadPage()]);
  if (!data) return null;
  return { Component: mod.default, props: { [propName]: data } };
}

async function resolve(path) {
  // '/wildlife' и '/wildlife/' — одна и та же страница
  const loadStatic = Object.hasOwn(STATIC_PATHS, path)
    ? STATIC_PATHS[path]
    : path.endsWith('/') && Object.hasOwn(STATIC_PATHS, path.slice(0, -1))
      ? STATIC_PATHS[path.slice(0, -1)]
      : null;
  if (loadStatic) {
    const mod = await loadStatic();
    return { Component: mod.default, props: {} };
  }

  const animalSlug = matchAnimalRoute(path);
  if (animalSlug) {
    const found = await detail(PAGES.animal, async () => (await import('./data/animals/index.js')).getAnimalDetail(animalSlug), 'animal');
    if (found) return found;
  }

  const parkSlug = matchParkRoute(path);
  if (parkSlug) {
    const found = await detail(PAGES.park, async () => (await import('./data/parks/index.js')).getParkDetail(parkSlug), 'park');
    if (found) return found;
  }

  const citySlug = matchCityRoute(path);
  if (citySlug) {
    const found = await detail(PAGES.city, () => loadCity(citySlug), 'city');
    if (found) return found;
  }

  const routeSlug = matchRouteRoute(path);
  if (routeSlug) {
    const found = await detail(PAGES.route, async () => (await import('./data/routes/index.js')).getRouteDetail(routeSlug), 'route');
    if (found) return found;
  }

  const provinceId = matchProvinceRoute(path);
  if (provinceId) {
    const found = await detail(PAGES.province, async () => (await import('./data/provinces/index.js')).getProvinceDetail(provinceId), 'province');
    if (found) return found;
  }

  const app = await loadApp();
  return { Component: app.default, props: {} };
}

// Кэш по пути: повторный заход и предзагрузка (наведение на ссылку) не
// качают и не ищут заново. Неудачную загрузку (сеть) не кэшируем, чтобы
// следующая попытка прошла с нуля.
const cache = new Map();

export function resolvePage(path) {
  let promise = cache.get(path);
  if (!promise) {
    promise = resolve(path);
    promise.catch(() => cache.delete(path));
    cache.set(path, promise);
  }
  return promise;
}

// Тихая предзагрузка: ошибки здесь не важны — при настоящем переходе
// resolvePage попробует ещё раз.
export function preloadPage(path) {
  resolvePage(path).catch(() => {});
}

// Код всех страниц (без тяжёлых данных) в фоне, когда браузер свободен, —
// чтобы переходы между страницами оставались мгновенными, как раньше.
export function preloadAllPageCode() {
  [loadApp, ...Object.values(PAGES)].forEach((load) => {
    load().catch(() => {});
  });
}
