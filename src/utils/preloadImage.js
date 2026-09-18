// Прогрев картинки через <link rel="preload">, чтобы к моменту перехода
// на страницу провинции ее фоновое изображение уже было в кэше браузера —
// без этого при переходе оно доли секунды показывалось бы пустым/размытым.
// Вызывается заранее (при наведении/фокусе на карточку), а не только в
// момент клика.
const preloaded = new Set();

export function preloadImage(href) {
  if (!href || preloaded.has(href)) return;
  preloaded.add(href);

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = href;
  document.head.appendChild(link);
}
