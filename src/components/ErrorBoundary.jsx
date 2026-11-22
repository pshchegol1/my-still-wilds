import { Component } from 'react';
import { navigate } from '../router';

// Страховка от падения страницы: если при отрисовке страницы случилась
// ошибка, вместо чёрного экрана показываем короткое сообщение с кнопками
// «перезагрузить» и «на главную». Root оборачивает каждую страницу отдельно
// и сбрасывает границу при переходе (key = путь), так что сломанная
// страница не блокирует остальной сайт.
//
// Ловит только ошибки отрисовки (render, эффекты жизненного цикла) — так
// устроены error boundaries в React; ошибки в обработчиках кликов сюда не
// попадают.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Page crashed:', error, info?.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main
        role="alert"
        className="flex min-h-screen flex-col items-center justify-center gap-6 bg-sw-bg px-6 text-center text-sw-text"
      >
        <img src="/logo-mark.svg" alt="" className="w-14 opacity-80" />
        <div className="space-y-2">
          <h1 className="text-[32px] tracking-wide text-white">Something went wrong</h1>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400">
            This page couldn’t be displayed. Reloading usually fixes it — or head back to the home page.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="type-button rounded-full bg-sw-ember px-6 py-3 text-white transition-colors hover:bg-sw-ember-light"
          >
            Reload page
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="type-button rounded-full border border-sw-green px-6 py-3 text-sw-mint transition-colors hover:bg-sw-green/10"
          >
            Go to home
          </button>
        </div>
      </main>
    );
  }
}
