// Разделы сайта — один список и один порядок для всех меню: шапка главной
// (App.jsx) и панель SiteNav на внутренних страницах (вместе с бургер-меню).
// match — когда пункт подсвечивается как текущий раздел.
export const NAV_LINKS = [
  { label: 'Provinces', href: '/#provinces', match: (p) => p.startsWith('/province') },
  { label: 'Parks', href: '/parks', match: (p) => p.startsWith('/park') },
  { label: 'Wildlife', href: '/wildlife', match: (p) => p.startsWith('/wildlife') },
  { label: 'Road Trips', href: '/road-trips', match: (p) => p.startsWith('/road-trips') || p.startsWith('/route') },
  { label: "Hiker's Guide", href: '/hikers-guide', match: (p) => p.startsWith('/hikers-guide') },
  { label: 'Map', href: '/map', match: (p) => p.startsWith('/map') },
];
