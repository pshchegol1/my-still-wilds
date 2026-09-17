import { useEffect, useState } from 'react';

// Минимальный роутер на History API — без внешних зависимостей.
// Якорные ссылки вида #provinces продолжают работать как обычно.

const ROUTE_CHANGE = 'stillwilds:routechange';

export function navigate(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event(ROUTE_CHANGE));
  window.scrollTo({ top: 0 });
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
