import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  Calendar,
  Car,
  ExternalLink,
  Info,
  MapPin,
  Mountain,
  Plane,
  Sparkles,
  Star,
  Tent,
  Ticket,
  Trees,
} from 'lucide-react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import './ParkPage.css';

// Тот же язык риска, что и на страницах животных (RISK_STYLES в
// AnimalPage.jsx), плюс два park-специфичных акцента — золотой (город,
// достопримечательности) и оливковый (весна, которой не находится места
// среди safe/caution/danger).
const PARK_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  olive: { text: '#b8d24a', solid: '#94ab35', border: 'rgba(184,210,74,0.45)', bg: 'rgba(184,210,74,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
};

function SectionTag({ icon: Icon, children }) {
  return (
    <span className="park-tag type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.14em]">
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

const TRANSPORT_ICONS = { '✈️': Plane, '🚗': Car, '🚌': Bus };

export default function ParkPage({ park }) {
  const accent = PARK_STYLES.blue;

  return (
    <div className="park-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white">
      {/* ================================================= */}
      {/* ГЕРОЙ                                              */}
      {/* ================================================= */}
      <header className="relative h-[520px] w-full overflow-hidden md:h-[700px]">
        <BackgroundVideo
          src={park.heroVideo}
          poster={park.heroImage}
          alt={park.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/70 via-[#070D19]/10 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate('/parks')}
              className="type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Parks
            </button>

            <div className="max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: PARK_STYLES.gold.text, borderColor: PARK_STYLES.gold.border, background: PARK_STYLES.gold.bg }}
              >
                <Star className="h-3 w-3" />
                {park.tag}
              </span>
              <h1 className="text-[40px] leading-[1.02] tracking-wide text-white md:text-[58px]">
                {park.name}
              </h1>
              <p className="type-display text-sm text-[#488CDC]">
                {park.province} · Est. {park.quickFacts.find((f) => f.label === 'Established')?.value} · {park.quickFacts.find((f) => f.label === 'Area')?.value}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">{park.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {park.actions.map((action, idx) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      idx === 0
                        ? 'type-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5'
                        : 'type-button inline-flex items-center gap-2 rounded-full border border-white/80 bg-[#070D19]/50 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-y-0.5'
                    }
                    style={idx === 0 ? { background: accent.solid } : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Плавающая панель Quick Facts */}
      <div className="relative z-10 mx-auto -mt-48 max-w-[1180px] px-6 md:-mt-64">
        <div
          className="glass glass--sm ml-auto w-full max-w-md space-y-5 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:max-w-lg md:p-7"
          style={{ '--glass-tint': '72, 140, 220' }}
        >
          <p className="type-tag text-[11px] tracking-[0.14em] text-gray-400">Park Facts</p>
          <div className="grid grid-cols-2 gap-4">
            {park.quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="type-tag text-[10px] tracking-[0.1em] text-gray-500">{fact.label}</p>
                <p className="type-stat mt-1.5 text-base text-white">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {park.badges.map((badge) => (
              <span
                key={badge}
                className="type-tag rounded-full border px-3 py-1 text-[9px] tracking-[0.14em]"
                style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="type-tag mb-3 text-[9px] tracking-[0.14em] text-gray-500">Best Seasons</p>
            <div className="grid grid-cols-4 gap-2">
              {park.bestSeasons.map((season) => {
                const style = PARK_STYLES[season.level] ?? PARK_STYLES.safe;
                return (
                  <div
                    key={season.label}
                    className="rounded-lg border p-2 text-center"
                    style={{ borderColor: style.border, background: style.bg }}
                  >
                    <p className="text-base">{season.icon}</p>
                    <p className="mt-1 text-[9px] font-semibold" style={{ color: style.text }}>{season.label}</p>
                    <p className="text-[8px] text-gray-500">{'★'.repeat(season.rating)}{'☆'.repeat(5 - season.rating)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-10">

        {/* ================================================= */}
        {/* ДОСТОПРИМЕЧАТЕЛЬНОСТИ                              */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Sparkles}>Must See</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Top <span style={{ color: PARK_STYLES.gold.text }}>Attractions</span> in {park.name.split(' ')[0]}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {park.attractions.map((attr) => {
              const style = PARK_STYLES[attr.tagLevel] ?? PARK_STYLES.safe;
              return (
                <div key={attr.name} className="group relative h-56 overflow-hidden rounded-2xl">
                  <img
                    src={attr.image}
                    alt={attr.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5">
                    <span
                      className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[8px] tracking-[0.12em]"
                      style={{ color: style.text, borderColor: style.border, background: style.bg }}
                    >
                      {attr.tag}
                    </span>
                    <p className="type-stat text-base text-white">{attr.name}</p>
                    <p className="text-[11px] text-gray-300">{attr.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЖИВОТНЫЕ                                           */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Trees}>Wildlife</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Animals You Can <span style={{ color: PARK_STYLES.safe.text }}>See in {park.name.split(' ')[0]}</span>
          </h2>

          <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            {park.wildlifeWarning}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {park.wildlife.map((animal) => {
              const style = PARK_STYLES[animal.level] ?? PARK_STYLES.safe;
              return (
                <div key={animal.name} className="glass glass--sm rounded-2xl p-4 text-center">
                  <p className="type-stat text-xs text-white">{animal.name}</p>
                  <p
                    className="type-tag mt-2 inline-block rounded-full border px-2 py-0.5 text-[8px] tracking-[0.1em]"
                    style={{ color: style.text, borderColor: style.border, background: style.bg }}
                  >
                    {animal.level === 'danger' ? 'Dangerous' : animal.level === 'caution' ? 'Caution' : 'Safe'}
                  </p>
                  <p className="mt-2 text-[10px] text-gray-500">{animal.chance}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЛУЧШЕЕ ВРЕМЯ ДЛЯ ПОСЕЩЕНИЯ                         */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Calendar}>Best Time to Visit</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            When to <span style={{ color: PARK_STYLES.gold.text }}>Visit {park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {park.seasons.map((season) => {
              const style = PARK_STYLES[season.level] ?? PARK_STYLES.safe;
              return (
                <div key={season.name} className="glass glass--sm rounded-2xl p-5">
                  <p className="text-3xl">{season.icon}</p>
                  <p className="type-stat mt-3 text-sm text-white">{season.name}</p>
                  <p className="mt-1 text-[11px] font-semibold" style={{ color: style.text }}>{season.months}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{season.text}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="text-xs" style={{ color: style.text }}>
                      {'●'.repeat(season.rating)}
                      <span className="text-gray-700">{'●'.repeat(5 - season.rating)}</span>
                    </span>
                    <span className="text-[10px] text-gray-500">{season.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ТРОПЫ                                              */}
        {/* ================================================= */}
        <section id="trails" className="space-y-7 scroll-mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <SectionTag icon={Mountain}>Top Trails</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                Best <span style={{ color: PARK_STYLES.safe.text }}>Hiking Trails</span> in {park.name.split(' ')[0]}
              </h2>
            </div>
            <a
              href={park.trailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-button inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5"
              style={{ background: PARK_STYLES.safe.solid }}
            >
              <ExternalLink className="h-4 w-4" />
              View All Trails on AllTrails
            </a>
          </div>

          {park.trailsNote && (
            <div className="flex items-start gap-3 rounded-2xl border border-[#D4A017]/25 bg-[#D4A017]/[0.06] p-5 text-sm leading-relaxed text-gray-300">
              <AlertTriangle className="h-5 w-5 shrink-0" style={{ color: PARK_STYLES.gold.text }} />
              <div>
                <p className="type-stat text-sm" style={{ color: PARK_STYLES.gold.text }}>{park.trailsNote.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{park.trailsNote.text}</p>
              </div>
            </div>
          )}

          <ul className="space-y-3">
            {park.trails.map((trail) => {
              const diffStyle = trail.difficulty === 'Hard' ? PARK_STYLES.danger : trail.difficulty === 'Moderate' ? PARK_STYLES.caution : PARK_STYLES.safe;
              return (
                <li
                  key={trail.name}
                  className="glass glass--sm flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="type-stat text-sm text-white">{trail.name}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400">
                      <span>{trail.length}</span>
                      <span>{trail.gain}</span>
                      <span>{trail.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{trail.area}</span>
                    </div>
                  </div>
                  <span
                    className="type-tag shrink-0 self-start rounded-full border px-3 py-1 text-[9px] tracking-[0.1em] sm:self-auto"
                    style={{ color: diffStyle.text, borderColor: diffStyle.border, background: diffStyle.bg }}
                  >
                    {trail.difficulty}
                  </span>
                </li>
              );
            })}
          </ul>

          {park.trailsEmbedUrl && (
            <div className="glass glass--sm space-y-3 rounded-2xl p-4">
              <div className="overflow-hidden rounded-xl">
                <iframe
                  src={park.trailsEmbedUrl}
                  title={`AllTrails: ${park.name}`}
                  className="aspect-video w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-gray-500">Interactive map · Powered by AllTrails</p>
            </div>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* КАК ДОБРАТЬСЯ                                      */}
        {/* ================================================= */}
        <section id="getting-there" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Car}>Getting There</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            How to <span style={{ color: PARK_STYLES.blue.text }}>Get to {park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {park.gettingThere.map((option) => {
              const Icon = TRANSPORT_ICONS[option.icon] ?? Car;
              return (
                <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                  <span
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ color: PARK_STYLES.blue.text, borderColor: PARK_STYLES.blue.border, background: PARK_STYLES.blue.bg }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="type-stat text-sm text-white">{option.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                  <p className="mt-3 text-[11px] font-semibold" style={{ color: PARK_STYLES.blue.text }}>{option.time}</p>
                </div>
              );
            })}
          </div>

          {park.entryPass && (
            <div className="glass glass--sm flex flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{ color: PARK_STYLES.gold.text, borderColor: PARK_STYLES.gold.border, background: PARK_STYLES.gold.bg }}
                >
                  <Ticket className="h-5 w-5" />
                </span>
                <div>
                  <p className="type-stat text-sm text-white">{park.entryPass.title}</p>
                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-gray-500">
                    {park.entryPass.text} {park.entryPass.buyText}
                  </p>
                </div>
              </div>
              <a
                href={park.entryPass.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button shrink-0 rounded-full px-4 py-2 text-xs text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PARK_STYLES.gold.solid }}
              >
                Buy Parks Pass
              </a>
            </div>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ГДЕ ОСТАНОВИТЬСЯ                                   */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Tent}>Where to Stay</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Accommodation <span style={{ color: PARK_STYLES.gold.text }}>in and Near {park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {park.stay.map((option) => (
              <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                <p className="text-3xl">{option.icon}</p>
                <p className="type-stat mt-3 text-sm text-white">{option.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                {option.links?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {option.links.map((link) => {
                      const style = PARK_STYLES[link.level] ?? PARK_STYLES.safe;
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.06em]"
                          style={{ color: style.text, borderColor: style.border, background: style.bg }}
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {park.practical && (
          <>
            <hr className="border-white/10" />
            <section className="space-y-7">
              <SectionTag icon={Info}>Practical Information</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                Everything You <span style={{ color: PARK_STYLES.safe.text }}>Need to Know</span>
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {park.practical.map((tip) => (
                  <div key={tip.title} className="glass glass--sm rounded-2xl p-5 text-center">
                    <p className="text-2xl">{tip.icon}</p>
                    <p className="type-stat mt-3 text-xs text-white">{tip.title}</p>
                    {tip.lines ? (
                      tip.lines.map((line, idx) => (
                        <p
                          key={line}
                          className={`mt-1 text-[11px] leading-relaxed ${idx === 0 ? 'text-gray-300' : 'text-gray-500'}`}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{tip.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ================================================= */}
        {/* ГАЛЕРЕЯ                                            */}
        {/* ================================================= */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {park.gallery.map((src, idx) => (
            <div key={`${src}-${idx}`} className="overflow-hidden rounded-2xl">
              <img src={src} alt={`${park.name} ${idx + 1}`} className="h-48 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </section>
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                             */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
          <p>© 2026 StillWilds.ca · Data from Parks Canada</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: PARK_STYLES.blue.text }} />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
