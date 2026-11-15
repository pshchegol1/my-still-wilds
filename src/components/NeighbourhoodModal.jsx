import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X } from 'lucide-react';
import './NeighbourhoodModal.css';

// Увеличенная карточка района. Открывается кликом по карточке в сетке и
// «вырастает» из её места: стартовое положение (сдвиг и масштаб) считается из
// прямоугольника карточки и подставляется в CSS-переменные, дальше всё делает
// transition. Закрывается крестиком, Esc или кликом по затемнению.
//
// Рендерится порталом в body: страница лежит внутри обёртки с анимациями и
// transform/filter у предков ломают position: fixed.
//
// Используется и для районов, и для достопримечательностей. Данные — поле
// details у карточки:
//   lead      — одно-два предложения
//   see, eat  — [{ title, text }] районы: что посмотреть / где поесть
//   columns   — [{ title, icon, items: [{ title, text }] }] любые две колонки
//               (достопримечательности: Highlights / Tips); если задано,
//               see и eat не используются
//   practical — [{ label, text }] как добраться, цена, часы и т.п.
//   practicalTitle — заголовок блока practical (по умолчанию Good to know)
//   link      — { label, url } ссылка на официальный сайт
//   checked   — когда факты проверялись (показывается внизу)
// Без item.image шапка рисуется градиентом с большой иконкой item.iconSrc.
// Проп tags ([{ label, style }]) заменяет одиночную метку item.tag.

const CLOSE_MS = 260;

function MaskIcon({ src, className = 'h-4 w-4' }) {
  return (
    <span
      className={`icon-mask shrink-0 ${className}`}
      style={{ '--icon-src': `url('${src}')` }}
      aria-hidden="true"
    />
  );
}

export default function NeighbourhoodModal({ item, style, tags, originRect, onClose, returnFocusTo }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [open, setOpen] = useState(false);
  const closingRef = useRef(false);
  const { details } = item;
  const ICON_EYE = '/icons/attractions/ph_eye-thin.svg';
  const ICON_FORK = '/icons/attractions/ph_fork-knife-thin.svg';
  const columns = details.columns ?? [
    details.see?.length ? { title: 'What to see', icon: ICON_EYE, items: details.see } : null,
    details.eat?.length ? { title: 'Where to eat', icon: ICON_FORK, items: details.eat } : null,
  ].filter(Boolean);
  const tagList = tags ?? [{ label: item.tag, style }];

  // Откуда «растём»: центр карточки относительно центра панели
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || !originRect) return;
    const p = panel.getBoundingClientRect();
    const dx = originRect.left + originRect.width / 2 - (p.left + p.width / 2);
    const dy = originRect.top + originRect.height / 2 - (p.top + p.height / 2);
    const scale = Math.min(1, Math.max(0.2, originRect.width / p.width));
    panel.style.setProperty('--nb-from-x', `${dx}px`);
    panel.style.setProperty('--nb-from-y', `${dy}px`);
    panel.style.setProperty('--nb-from-s', String(scale));
  }, [originRect]);

  // Запуск анимации на следующем кадре, чтобы transition увидел стартовое состояние
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  // Блокировка прокрутки страницы, фокус на крестик, возврат фокуса при закрытии
  useEffect(() => {
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      returnFocusTo?.focus?.({ preventScroll: true });
    };
  }, [returnFocusTo]);

  const close = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setOpen(false);
    window.setTimeout(onClose, CLOSE_MS);
  };

  // Esc закрывает; Tab ходит по кругу внутри окна
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const nodes = panelRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // close читает только ref и onClose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return createPortal(
    <div
      className={`nb-overlay${open ? ' is-open' : ''}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        className="nb-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nb-title"
      >
        <button ref={closeRef} type="button" className="nb-close" onClick={close} aria-label="Close">
          <X className="h-5 w-5" />
        </button>

        <div className={`nb-hero${item.image ? '' : ' nb-hero--icon'}`} style={item.image ? undefined : { background: `radial-gradient(ellipse at 78% 30%, ${style.bg}, #0b1222 72%)` }}>
          {item.image ? (
            <img src={item.image} alt="" className="nb-hero__img" />
          ) : (
            item.iconSrc && (
              <span
                className="icon-mask nb-hero__icon"
                style={{ '--icon-src': `url('${item.iconSrc}')`, color: style.text }}
                aria-hidden="true"
              />
            )
          )}
          <div className="nb-hero__shade" />
          <div className="nb-hero__text">
            <div className="flex flex-wrap gap-2">
              {tagList.map((t) => (
                <span
                  key={t.label}
                  className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[9px] tracking-[0.12em]"
                  style={{
                    color: t.style.text,
                    borderColor: t.style.border,
                    background: `linear-gradient(${t.style.bg}, ${t.style.bg}), rgba(7,13,25,0.66)`,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <h3 id="nb-title" className="nb-title">{item.name}</h3>
          </div>
        </div>

        <div className="nb-body">
          {details.lead && <p className="nb-lead">{details.lead}</p>}

          {columns.length > 0 && (
            <div className="nb-cols">
              {columns.map((col) => (
                <section key={col.title}>
                  <h4 className="nb-h" style={{ color: style.text }}>
                    <MaskIcon src={col.icon} />
                    {col.title}
                  </h4>
                  <ul className="nb-list">
                    {col.items.map((it) => (
                      <li key={it.title}>
                        <p className="nb-item-title">{it.title}</p>
                        <p className="nb-item-text">{it.text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}

          {details.practical?.length > 0 && (
            <section>
              <h4 className="nb-h" style={{ color: style.text }}>
                <MaskIcon src="/icons/attractions/ph_info-thin.svg" />
                {details.practicalTitle ?? 'Good to know'}
              </h4>
              <div className="nb-practical">
                {details.practical.map((p) => (
                  <div key={p.label} className="nb-practical__item">
                    <p className="nb-practical__label" style={{ color: style.text }}>{p.label}</p>
                    <p className="nb-item-text">{p.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {details.link && (
            <a
              href={details.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-link type-tag"
              style={{ color: style.text, borderColor: style.border, background: style.bg }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {details.link.label}
            </a>
          )}

          <p className="nb-foot">
            {details.checked ? `Details checked ${details.checked}. ` : ''}
            Opening hours, prices and what is open change — confirm before you go.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
