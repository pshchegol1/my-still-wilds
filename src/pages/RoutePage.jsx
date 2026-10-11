import {
  ArrowLeft,
  ExternalLink,
  Fuel,
  Gauge,
  GitFork,
  MapPin,
  Navigation,
  Ship,
  Signal,
  Snowflake,
} from 'lucide-react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import TripSearchForm from '../components/TripSearchForm';
import RouteExplorer from '../components/RouteExplorer';
import {
  ROUTE_STYLES,
  SectionTag,
  RouteWarnings,
  RouteCulture,
  RouteStops,
  accentOf,
} from '../components/RouteSections';
import './RoutePage.css';

const PASSPORT_ICONS = { distance: Gauge, time: Navigation, fuel: Fuel, cell: Signal, winter: Snowflake, road: MapPin, ferry: Ship };

export default function RoutePage({ route }) {
  const accent = accentOf(route);

  return (
    <div className="route-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white">
      {/* ================================================= */}
      {/* ГЕРОЙ                                              */}
      {/* ================================================= */}
      <header className="relative h-[480px] w-full overflow-hidden md:h-[600px]">
        <BackgroundVideo
          src={route.heroVideo}
          poster={route.heroImage}
          alt={route.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/70 via-[#070D19]/10 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate(`${route.backHref ?? '/'}#routes`)}
              className="type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {route.backLabel ?? 'Back'}
            </button>

            <div className="max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
              >
                <Navigation className="h-3 w-3" />
                {route.tag}
              </span>
              <h1 className="text-[36px] leading-[1.05] tracking-wide text-white md:text-[52px]">
                {route.name}
              </h1>
              <p className="type-display text-sm" style={{ color: accent.text }}>{route.region}</p>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">{route.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {route.badges.map((badge) => (
                  <span
                    key={badge}
                    className="type-tag rounded-full border px-3 py-1.5 text-[10px] tracking-[0.1em] backdrop-blur-md"
                    style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-14">

        {/* ================================================= */}
        {/* ПОИСК МАРШРУТА + ИНТЕРАКТИВНАЯ КАРТА               */}
        {/* ================================================= */}
        <div className="space-y-6">
          <TripSearchForm key={`form-${route.slug}`} currentSlug={route.slug} />
          {route.explorer && <RouteExplorer key={`map-${route.slug}`} route={route} />}
        </div>

        {/* ================================================= */}
        {/* ТЕХНИЧЕСКИЙ ПАСПОРТ МАРШРУТА                       */}
        {/* Только для маршрутов без карты — у остальных эти   */}
        {/* цифры живут во вкладках RouteExplorer.             */}
        {/* ================================================= */}
        {!route.explorer && (
        <section className="space-y-7">
          <SectionTag icon={Gauge}>Route Passport</SectionTag>
          <h2 className="text-[28px] tracking-wide md:text-[34px]">
            The <span style={{ color: accent.text }}>Honest Numbers</span>
          </h2>

          {route.headlineStats?.length > 0 && (
            <div className="glass glass--sm flex flex-wrap items-stretch justify-center gap-x-10 gap-y-6 rounded-2xl px-8 py-8 sm:justify-between">
              {route.headlineStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex min-w-[120px] flex-col items-center text-center sm:items-start sm:text-left ${
                    idx > 0 ? 'sm:border-l sm:border-white/10 sm:pl-10' : ''
                  }`}
                >
                  <p className="type-stat flex items-baseline gap-1.5 text-[40px] leading-none text-white md:text-[56px]">
                    {stat.value}
                    <span className="text-base font-semibold md:text-lg" style={{ color: accent.text }}>{stat.unit}</span>
                  </p>
                  <p className="type-tag mt-2.5 text-[10px] tracking-[0.14em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {route.passport.map((item) => {
              const Icon = PASSPORT_ICONS[item.icon] ?? MapPin;
              return (
                <div key={item.label} className="glass glass--sm rounded-2xl p-5">
                  <span
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="type-tag text-[10px] tracking-[0.1em] text-gray-500">{item.label}</p>
                  <p className="type-stat mt-1.5 text-sm text-white">{item.value}</p>
                </div>
              );
            })}
          </div>
        </section>
        )}

        <hr className="border-white/10" />

        <RouteWarnings route={route} />

        <hr className="border-white/10" />

        <RouteCulture route={route} />

        <hr className="border-white/10" />

        <RouteStops route={route} />

        {/* ================================================= */}
        {/* РАЗВИЛКА МАРШРУТА (опционально)                    */}
        {/* ================================================= */}
        {route.fork && (
          <>
            <hr className="border-white/10" />
            <section className="space-y-7">
              <SectionTag icon={GitFork}>{route.fork.tag ?? 'Choose Your Ending'}</SectionTag>
              <h2 className="text-[28px] tracking-wide md:text-[34px]">
                {route.fork.title ?? (
                  <>Two Ways to <span style={{ color: accent.text }}>Finish This Trip</span></>
                )}
              </h2>
              {route.fork.intro && (
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400">{route.fork.intro}</p>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {route.fork.options.map((option) => {
                  const style = ROUTE_STYLES[option.level] ?? accent;
                  return (
                    <div key={option.name} className="glass glass--sm flex flex-col gap-4 rounded-2xl p-6">
                      {option.image && (
                        <img src={option.image} alt={option.name} className="h-40 w-full rounded-xl object-cover" loading="lazy" />
                      )}
                      <div>
                        <span
                          className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[9px] tracking-[0.1em]"
                          style={{ color: style.text, borderColor: style.border, background: style.bg }}
                        >
                          {option.tag}
                        </span>
                        <p className="type-stat mt-2.5 text-base text-white">{option.name}</p>
                        <p className="mt-1 text-xs font-semibold" style={{ color: style.text }}>{option.time}</p>
                        <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                        {option.href && (
                          <button
                            type="button"
                            onClick={() => navigate(option.href)}
                            className="type-tag mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] tracking-[0.06em]"
                            style={{ color: style.text, borderColor: style.border, background: style.bg }}
                          >
                            <ExternalLink className="h-3 w-3" />
                            {option.linkLabel ?? 'Learn More'}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                             */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
          <p>© 2026 StillWilds.ca · Route data is approximate — always check current conditions</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent.text }} />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
