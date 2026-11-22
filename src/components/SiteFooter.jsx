import { HomeLink } from './SiteLogo';

// Общий подвал внутренних страниц: логотип-ссылка на главную, копирайт и
// отметка «Updated». Раньше разметка была скопирована в каждую страницу и
// понемногу расходилась.
//
//   note      — пояснение после копирайта ("Data from Parks Canada"), необязательно;
//   accent    — цвет точки у «Updated» (цвет страницы), по умолчанию зелёный;
//   wide      — ширина как у страниц с колонкой 1440px (Parks, Wildlife, гид, карта),
//               иначе 1180px — подвал выровнен по контенту страницы.
//
// relative z-10 — подвал всегда над закреплёнными фоновыми слоями страницы
// (горы, силуэты), где они есть; на остальных страницах это ни на что не влияет.
export default function SiteFooter({ note, accent = 'var(--sw-green)', wide = false }) {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div
        className={`mx-auto flex ${wide ? 'max-w-[1440px]' : 'max-w-[1180px]'} flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between`}
      >
        <HomeLink className="inline-block">
          <img loading="lazy" src="/logo-compact.svg" alt="Still Wilds" className="w-[180px]" />
        </HomeLink>
        <p>© 2026 StillWilds.ca{note ? ` · ${note}` : ''}</p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          Updated 2026
        </p>
      </div>
    </footer>
  );
}
