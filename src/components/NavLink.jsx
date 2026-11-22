import { navigate } from '../router';

// Ссылка меню. Обычный клик идёт через наш роутер, клик с Ctrl/Cmd/Shift или
// средней кнопкой остаётся обычной ссылкой (новая вкладка).
// Якорь на текущей же странице (например '/#provinces', когда мы уже на
// главной) отдаём браузеру: он сам прокрутит к разделу, как обычная
// ссылка '#provinces'.
export default function NavLink({ href, className, onNavigate, children, ...rest }) {
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    onNavigate?.();
    const hashAt = href.indexOf('#');
    const samePageAnchor = hashAt !== -1 && href.slice(0, hashAt) === window.location.pathname;
    if (samePageAnchor) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a href={href} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}
