import { useEffect, useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useRoute } from '../router';
import { NAV_LINKS } from '../navLinks';
import { HomeLink } from './SiteLogo';
import NavLink from './NavLink';
import './SiteNav.css';

// Верхняя навигационная панель внутренних страниц: слева «назад», по центру
// логотип-ссылка на главную, справа разделы сайта. Узкие экраны получают
// бургер-меню вместо ряда ссылок.
//
// Панель липкая (sticky), а не fixed: у обёртки страницы в Root после
// анимации появления остаётся filter: blur(0), и fixed-потомок внутри неё
// ведёт себя как absolute и уезжает при прокрутке.
// Список разделов — общий с шапкой главной (см. navLinks.js)
const LINKS = NAV_LINKS;

export default function SiteNav({ backLabel, onBack }) {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 40);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const renderLinks = (extra) =>
    LINKS.map((link) => {
      const active = link.match(path);
      return (
        <li key={link.label}>
          <NavLink
            href={link.href}
            onNavigate={() => setOpen(false)}
            aria-current={active ? 'page' : undefined}
            className={`site-nav__link${active ? ' is-active' : ''}${extra ? ` ${extra}` : ''}`}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });

  return (
    <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Main">
      <div className="site-nav__bar">
        <div className="site-nav__inner">
          <div className="site-nav__side site-nav__side--left">
            <button type="button" onClick={onBack} className="site-nav__back">
              <ArrowLeft className="h-4 w-4" />
              <span className="site-nav__back-full">{backLabel}</span>
              <span className="site-nav__back-short">Back</span>
            </button>
          </div>

          <ul className="site-nav__links">{renderLinks()}</ul>

          <div className="site-nav__side site-nav__side--right">
            <button
              type="button"
              className="site-nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="site-nav-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <HomeLink className="site-nav__logo">
              <img src="/logo-mark.svg" alt="Still Wilds" />
            </HomeLink>
          </div>
        </div>

        {open && (
          <div id="site-nav-menu" className="site-nav__menu">
            <ul>{renderLinks('site-nav__link--menu')}</ul>
          </div>
        )}
      </div>
    </nav>
  );
}
