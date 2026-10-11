import { AlertTriangle, Feather, Info, MapPin } from 'lucide-react';
import './RouteSections.css';

// Секции маршрута, общие для /route/:slug и /road-trips. Живут в одном
// месте, чтобы вёрстка не разъехалась между страницами: на странице
// маршрута они идут подряд, на Road Trips — перерисовываются при смене
// выбора в форме.

// Тот же язык, что и в ParkPage.jsx/CityPage.jsx, плюс terracotta —
// тёплый акцент только для культурного/исторического блока, чтобы он
// визуально не читался как предупреждение (danger/caution уже заняты
// другими смыслами на этой странице).
export const ROUTE_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  terracotta: { text: '#D97A52', solid: '#B85F3C', border: 'rgba(217,122,82,0.45)', bg: 'rgba(217,122,82,0.12)' },
};

export const accentOf = (route) => ROUTE_STYLES[route.accentLevel] ?? ROUTE_STYLES.blue;

export function SectionTag({ icon: Icon, children }) {
  return (
    <span className="route-section-tag type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.14em]">
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------
// Предупреждения и выживание
// ---------------------------------------------------------------------
export function RouteWarnings({ route }) {
  return (
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
  );
}

// ---------------------------------------------------------------------
// Культурный и исторический контекст
// ---------------------------------------------------------------------
export function RouteCulture({ route }) {
  return (
    <section className="space-y-7">
      <SectionTag icon={Feather}>{route.culture.tag}</SectionTag>
      <h2 className="text-[28px] tracking-wide md:text-[34px]">
        Whose <span style={{ color: ROUTE_STYLES.terracotta.text }}>Land You're Driving On</span>
      </h2>

      <div className="glass glass--sm rounded-2xl p-6 md:p-7" style={{ '--glass-tint': '217, 122, 82' }}>
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
  );
}

// ---------------------------------------------------------------------
// Остановки по пути
// ---------------------------------------------------------------------
export function RouteStops({ route }) {
  const accent = accentOf(route);

  return (
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
  );
}
