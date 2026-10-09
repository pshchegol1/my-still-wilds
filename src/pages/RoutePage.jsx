import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Feather,
  Fuel,
  Gauge,
  GitFork,
  Info,
  MapPin,
  Navigation,
  Ship,
  Signal,
  Snowflake,
} from 'lucide-react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import './RoutePage.css';

// Тот же язык, что и в ParkPage.jsx/CityPage.jsx, плюс terracotta —
// тёплый акцент только для культурного/исторического блока, чтобы он
// визуально не читался как предупреждение (danger/caution уже заняты
// другими смыслами на этой странице).
const ROUTE_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  terracotta: { text: '#D97A52', solid: '#B85F3C', border: 'rgba(217,122,82,0.45)', bg: 'rgba(217,122,82,0.12)' },
};

const PASSPORT_ICONS = { distance: Gauge, time: Navigation, fuel: Fuel, cell: Signal, winter: Snowflake, road: MapPin, ferry: Ship };

function SectionTag({ icon: Icon, children }) {
  return (
    <span className="route-tag type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.14em]">
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

export default function RoutePage({ route }) {
  const accent = ROUTE_STYLES[route.accentLevel] ?? ROUTE_STYLES.blue;

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
              onClick={() => navigate(route.backHref ?? '/')}
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
        {/* ТЕХНИЧЕСКИЙ ПАСПОРТ МАРШРУТА                       */}
        {/* ================================================= */}
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

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ПРЕДУПРЕЖДЕНИЯ И ВЫЖИВАНИЕ                         */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={AlertTriangle}>Honest Warnings</SectionTag>
          <h2 className="text-[28px] tracking-wide md:text-[34px]">
            What <span style={{ color: ROUTE_STYLES.danger.text }}>Nobody Tells You</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {route.seasonalNotes.map((note) => (
              <div key={note.title} className="glass glass--sm rounded-2xl p-5">
                <p className="text-2xl">{note.icon}</p>
                <p className="type-stat mt-3 text-sm text-white">{note.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{note.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <div>
              <p className="type-stat text-sm text-[#f0b98a]">{route.wildlifeSafety.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#f0b98a]/90">{route.wildlifeSafety.text}</p>
              {route.wildlifeSafety.rules?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {route.wildlifeSafety.rules.map((rule) => (
                    <li key={rule} className="flex items-start gap-2 text-xs text-[#f0b98a]/90">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#f0b98a]" />
                      {rule}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* КУЛЬТУРНЫЙ И ИСТОРИЧЕСКИЙ КОНТЕКСТ                 */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Feather}>{route.culture.tag}</SectionTag>
          <h2 className="text-[28px] tracking-wide md:text-[34px]">
            Whose <span style={{ color: ROUTE_STYLES.terracotta.text }}>Land You're Driving On</span>
          </h2>

          <div
            className="glass glass--sm rounded-2xl p-6 md:p-7"
            style={{ '--glass-tint': '217, 122, 82' }}
          >
            <p className="type-stat text-base" style={{ color: ROUTE_STYLES.terracotta.text }}>{route.culture.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{route.culture.text}</p>

            {route.culture.nations?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {route.culture.nations.map((nation) => (
                  <span
                    key={nation}
                    className="type-tag rounded-full border px-3 py-1.5 text-[10px] tracking-[0.06em]"
                    style={{ color: ROUTE_STYLES.terracotta.text, borderColor: ROUTE_STYLES.terracotta.border, background: ROUTE_STYLES.terracotta.bg }}
                  >
                    {nation}
                  </span>
                ))}
              </div>
            )}
          </div>

          {route.culture.authenticStop && (
            <div className="glass glass--sm flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center">
              <p className="shrink-0 text-5xl">🪶</p>
              <div>
                <p className="type-tag text-[9px] tracking-[0.14em] text-gray-500">Stop for an Authentic Experience</p>
                <p className="type-stat mt-1.5 text-sm text-white">{route.culture.authenticStop.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{route.culture.authenticStop.text}</p>
              </div>
            </div>
          )}

          {route.culture.note && (
            <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {route.culture.note}
            </p>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ОСТАНОВКИ ПО ПУТИ                                  */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={MapPin}>Along the Way</SectionTag>
          <h2 className="text-[28px] tracking-wide md:text-[34px]">
            Stops <span style={{ color: accent.text }}>Worth the Brakes</span>
          </h2>

          <div className="space-y-3">
            {route.stops.map((stop, idx) => (
              <div key={stop.name} className="flex gap-3 sm:gap-4">
                {/* Линия маршрута: узел-километр + сегмент до следующей остановки */}
                <div className="relative flex w-7 shrink-0 flex-col items-center sm:w-9">
                  <span
                    className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 bg-[#070D19] text-[11px] font-bold"
                    style={{ borderColor: accent.text, color: accent.text }}
                  >
                    {idx + 1}
                  </span>
                  {idx < route.stops.length - 1 && (
                    <span
                      className="mt-1 w-[2px] flex-1 rounded-full"
                      style={{ background: `linear-gradient(to bottom, ${accent.text}66, ${accent.text}1a)` }}
                    />
                  )}
                </div>

                <div className="glass glass--sm flex flex-1 flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center">
                  {stop.image ? (
                    <img src={stop.image} alt={stop.name} className="h-32 w-full shrink-0 rounded-xl object-cover sm:w-44" loading="lazy" />
                  ) : (
                    <div
                      className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl border text-4xl sm:w-44"
                      style={
                        stop.cultural
                          ? { borderColor: ROUTE_STYLES.terracotta.border, background: ROUTE_STYLES.terracotta.bg }
                          : { borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }
                      }
                    >
                      {stop.icon ?? '📍'}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="type-tag rounded-full border px-2.5 py-0.5 text-[9px] tracking-[0.1em]"
                        style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
                      >
                        {idx === 0 ? 'Start' : `${stop.km} km`}
                      </span>
                    </div>
                    <p className="type-stat mt-2 text-sm text-white">{stop.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{stop.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
