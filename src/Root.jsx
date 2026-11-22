import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { preloadAllPageCode, preloadPage, resolvePage } from './pageResolver.js';
import { useRoute } from './router.js';

// Длительность затухания старой страницы для браузеров без View
// Transitions API — совпадает с pageOut в index.css.
const FADE_OUT_MS = 220;

// Chrome/Edge/Safari поддерживают View Transitions API: браузер сам
// морфит общий элемент (view-transition-name на карточке провинции и на
// герое ее страницы) и делает кросс-фейд всего остального. Firefox — нет,
// для него ниже остается прежнее ручное затухание через CSS-класс.
const supportsViewTransition =
  typeof document !== 'undefined' && typeof document.startViewTransition === 'function';

// Если в URL есть якорь (например "/province/ab#routes" после кнопки
// "Back to Alberta" на странице маршрута) и такой элемент существует на
// новой странице — скроллим к нему. Иначе как обычно наверх.
function scrollToTarget() {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ block: 'start' });
      return;
    }
  }
  window.scrollTo(0, 0);
}

// Чанк страницы не загрузился (обрыв сети или сайт обновили, и старых
// файлов больше нет) — перезагружаем страницу целиком по новому адресу.
// Не чаще раза в 10 секунд, чтобы без сети не уйти в бесконечный цикл.
const RELOAD_KEY = 'stillwilds:chunk-reload';
function recoverFromLoadError(error) {
  console.error(error);
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY)) || 0;
    if (Date.now() - last < 10000) return;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    return;
  }
  window.location.reload();
}

// initial — уже загруженная первая страница (см. main.jsx): { path, page }.
export default function Root({ initial }) {
  const path = useRoute();

  // Показываем предыдущий маршрут, пока идет затухание и пока грузится
  // новая страница. Состояние "уходим" выводится из данных, а не хранится.
  const [shown, setShown] = useState(initial);
  const leaving = path !== shown.path;

  useEffect(() => {
    // Эффект зависит от [path, shown.path], а не от производного leaving:
    // flushSync ниже сам меняет shown, и если бы leaving был зависимостью,
    // это же изменение считалось бы новым запуском эффекта.
    if (path === shown.path) return undefined;

    // Новый переход (или возврат назад) до окончания загрузки отменяет этот
    let cancelled = false;
    const pagePromise = resolvePage(path);

    if (supportsViewTransition) {
      // Переход стартует только когда страница уже загружена: старая
      // остаётся на экране, и браузер морфит её сразу в готовую новую, без
      // пустого кадра посередине.
      pagePromise.then((page) => {
        if (cancelled) return;
        // flushSync обязателен: startViewTransition должен увидеть уже
        // обновленный DOM синхронно внутри своего колбэка, иначе браузер
        // снимет "новый" кадр раньше, чем React успеет перерисовать страницу.
        const transition = document.startViewTransition(() => {
          flushSync(() => setShown({ path, page }));
        });
        // Скроллим после transition.ready, а не сразу в колбэке: до этого
        // момента браузер еще не закоммитил layout нового кадра, и вызов
        // scrollIntoView/scrollTo внутри колбэка молча не срабатывает.
        transition.ready.then(scrollToTarget).catch(() => {});
        // Быстрый повторный переход браузер обрывает сам (это ожидаемо и
        // безопасно) — без .catch() это всплывало бы необработанным
        // AbortError в консоли.
        transition.finished.catch(() => {});
      }, (error) => {
        if (!cancelled) recoverFromLoadError(error);
      });
      return () => {
        cancelled = true;
      };
    }

    // Без View Transitions: ждём и затухание старой страницы, и загрузку новой
    let timer = null;
    const fadeOut = new Promise((resolve) => {
      timer = setTimeout(resolve, FADE_OUT_MS);
    });
    Promise.all([pagePromise, fadeOut]).then(([page]) => {
      if (cancelled) return;
      // flushSync здесь тоже обязателен: scrollToTarget ищет элемент по
      // якорю сразу после смены страницы, а значит DOM должен быть уже
      // перерисован — без flushSync React мог бы закоммитить его позже.
      flushSync(() => setShown({ path, page }));
      scrollToTarget();
    }, (error) => {
      if (!cancelled) recoverFromLoadError(error);
    });

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [path, shown.path]);

  // Первая загрузка: страница появляется уже после того, как браузер
  // попытался прокрутить к якорю из адреса, поэтому делаем это сами.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || window.scrollY !== 0) return;
    try {
      document.querySelector(hash)?.scrollIntoView({ block: 'start' });
    } catch {
      // невалидный селектор в якоре — просто остаёмся наверху
    }
  }, []);

  // Предзагрузка: при наведении/фокусе на внутреннюю ссылку заранее
  // качаем её страницу и данные, а в свободное время — код всех страниц.
  useEffect(() => {
    const onIntent = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      let url;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      preloadPage(url.pathname);
    };
    document.addEventListener('pointerover', onIntent, { passive: true });
    document.addEventListener('focusin', onIntent);
    document.addEventListener('touchstart', onIntent, { passive: true });

    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1));
    const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
    let idleId = null;
    // Сначала даём догрузиться текущей странице (видео, картинки героя)
    const delay = setTimeout(() => {
      idleId = idle(preloadAllPageCode);
    }, 2500);

    return () => {
      document.removeEventListener('pointerover', onIntent);
      document.removeEventListener('focusin', onIntent);
      document.removeEventListener('touchstart', onIntent);
      clearTimeout(delay);
      if (idleId !== null) cancelIdle(idleId);
    };
  }, []);

  // Ручной CSS-фейд нужен только без View Transitions API — иначе он
  // проигрывался бы под браузерной сценой и мог с ней разойтись по времени.
  const cssFadeClass = supportsViewTransition
    ? ''
    : `page-fade${leaving ? ' page-fade--out' : ''}`;

  // Шапку с логотипом-ссылкой на главную рисует сама страница: у главной —
  // своя, у всех внутренних — SiteNav (кнопка «на главную» везде на одном
  // месте). Новой внутренней странице тоже нужен <SiteNav />.
  const { Component, props } = shown.page;

  return (
    <>
      <div key={shown.path} className={cssFadeClass}>
        <Component {...props} />
      </div>

      {/* Общая для всех страниц кнопка "наверх" */}
      <ScrollToTop />
    </>
  );
}
