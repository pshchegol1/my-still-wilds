import { navigate } from '../router';
import './SiteLogo.css';

// Ссылка на главную страницу. Обычный клик идёт через наш роутер (без
// перезагрузки), а клик с Ctrl/Cmd/Shift или средней кнопкой работает как
// обычная ссылка — можно открыть главную в новой вкладке.
export function HomeLink({ children, className = '', ...rest }) {
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate('/');
  };
  return (
    <a href="/" onClick={onClick} className={className} aria-label="Still Wilds — home page" {...rest}>
      {children}
    </a>
  );
}

// Значок-логотип по центру вверху внутренних страниц — «шлюз» на главную.
// Лежит поверх шапки страницы (absolute, уезжает вместе с ней при прокрутке).
export default function SiteLogo() {
  return (
    <HomeLink className="site-logo">
      <img src="/logo-mark.svg" alt="Still Wilds" />
    </HomeLink>
  );
}
