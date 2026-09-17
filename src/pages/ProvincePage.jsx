import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Compass,
  Languages,
  MapPin,
  MapPinned,
  PawPrint,
  Star,
  Sun,
  Thermometer,
  Trees,
  Users,
} from 'lucide-react';
import StillWildsLogo from '../components/StillWildsLogo';
import WildlifeIcon from '../components/WildlifeIcon';
import { navigate } from '../router';
import './ProvincePage.css';

// Иконки для карточек фактов (about.facts[].icon)
const FACT_ICONS = {
  MapPin,
  Users,
  Sun,
  Languages,
  Thermometer,
  CalendarDays,
};

// Цветовые схемы бейджа опасности для карточек дикой природы
const RISK_STYLES = {
  safe: { text: '#6ee7a1', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
};

const DEFAULT_THEME = { accent: '#38A169', accentSoft: '#6ee7a1' };

function SectionTag({ icon: Icon, children }) {
  return (
    <span className="pp-tag type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px]">
      <Icon className="h-3 w-3" />
      {children}
    </span>
  );
}

// Герб города; если изображения нет или оно не загрузилось — рисуем щит
function CityCrest({ city }) {
  const [failed, setFailed] = useState(false);

  if (!city.crest || failed) {
    return (
      <svg viewBox="0 0 64 78" className="h-[74px] w-[60px]" aria-hidden="true">
        <defs>
          <linearGradient id={`crest-${city.name}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
        {/* Щит */}
        <path
          d="M32 3 59 11v30c0 16-13.5 27.5-27 34C18.5 68.5 5 57 5 41V11L32 3Z"
          fill={`url(#crest-${city.name})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.6"
        />
        {/* Внутренняя рамка */}
        <path
          d="M32 9 53 15v25c0 13-11 22.5-21 28-10-5.5-21-15-21-28V15L32 9Z"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <text
          x="32"
          y="44"
          textAnchor="middle"
          fill="rgba(255,255,255,0.92)"
          style={{ font: '700 26px var(--font-display)' }}
        >
          {city.name.charAt(0)}
        </text>
      </svg>
    );
  }

  return (
    <img
      src={city.crest}
      alt={`Coat of arms of ${city.name}`}
      className="h-[74px] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProvincePage({ province }) {
  const { about, cities, parks, wildlife } = province;
  const theme = province.theme ?? DEFAULT_THEME;

  return (
    <div
      className="province-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white"
      style={{ '--accent': theme.accent, '--accent-soft': theme.accentSoft }}
    >

      {/* ================================================= */}
      {/* ГЕРОЙ                                             */}
      {/* ================================================= */}
      <header className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
        <img
          src={province.heroImage}
          alt={province.name}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/45 to-[#070D19]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/85 via-transparent to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="pp-outline-btn type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Provinces
            </button>

            <div className="max-w-2xl space-y-4 pb-4">
              <h1 className="type-h1 text-[40px] leading-[1.05] tracking-wide text-white sm:text-[56px] md:text-[64px]">
                {province.heroTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </h1>

              <p className="pp-accent-soft type-tag text-[12px] tracking-[0.18em]">
                {province.kicker}
              </p>

              <p className="max-w-md text-sm leading-relaxed text-gray-300">
                {province.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#parks"
                  className="type-button inline-flex items-center gap-2 rounded-full bg-[#d96b32] px-5 py-2.5 text-white transition-all hover:-translate-y-0.5 hover:bg-[#e07a3f]"
                >
                  <MapPinned className="h-4 w-4" />
                  Explore The Map
                </a>
                <a
                  href="#cities"
                  className="pp-outline-btn type-button inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#070D19]/50 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-y-0.5"
                >
                  <Compass className="h-4 w-4" />
                  View Cities
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* ПОЛОСА СТАТИСТИКИ                                 */}
      {/* ================================================= */}
      <div className="border-b border-white/10 bg-[#070D19]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 px-6 md:grid-cols-4">
          {province.heroStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-4 py-7 text-center ${idx > 0 ? 'md:border-l md:border-white/10' : ''}`}
            >
              <p className="type-stat text-2xl text-[#e08a4a] md:text-[28px]">{stat.value}</p>
              <p className="type-tag mt-1.5 text-[10px] tracking-[0.15em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 py-14">

        {/* ================================================= */}
        {/* О ПРОВИНЦИИ                                       */}
        {/* ================================================= */}
        <section id="about" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Compass}>{about.tag}</SectionTag>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5">
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                {about.headingLead} <span className="pp-accent">{about.headingAccent}</span>
              </h2>
              {about.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="text-sm leading-relaxed text-gray-400">
                  {text}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {about.facts.map((fact) => {
                const Icon = FACT_ICONS[fact.icon] ?? MapPin;
                return (
                  <div
                    key={fact.label}
                    className="pp-fact rounded-2xl border border-white/10 bg-[#0E1726] p-4 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="pp-fact-icon mb-4 flex h-9 w-9 items-center justify-center rounded-xl border">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="type-tag text-[10px] tracking-[0.14em] text-gray-400">
                      {fact.label}
                    </p>
                    <p className="type-stat mt-1 text-base text-white">{fact.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ГОРОДА                                            */}
        {/* ================================================= */}
        <section id="cities" className="space-y-7 scroll-mt-10">
          <SectionTag icon={MapPin}>{cities.tag}</SectionTag>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[30px] tracking-wide md:text-[38px]">
              Cities Of <span className="pp-accent">{province.name}</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400 md:text-right">
              {cities.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.items.map((city) => (
              <article
                key={city.name}
                className="city-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
                style={{ '--city-accent': city.accent }}
              >
                <span className="city-glow" aria-hidden="true" />

                <div className="relative flex h-[92px] items-center justify-center">
                  <CityCrest city={city} />
                </div>

                <p
                  className="type-tag relative mt-4 text-[10px] tracking-[0.14em]"
                  style={{ color: city.accent }}
                >
                  {city.label}
                </p>
                <h3 className="pp-hover-accent type-stat relative mt-1 text-lg text-white transition-colors">
                  {city.name}
                </h3>

                <p className="relative mt-2 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <Users className="h-3.5 w-3.5" />
                  {city.population}
                </p>

                <span className="city-chip type-tag relative mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px]">
                  Explore
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* НАЦИОНАЛЬНЫЕ ПАРКИ                                */}
        {/* ================================================= */}
        <section id="parks" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Trees}>{parks.tag}</SectionTag>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-[30px] tracking-wide md:text-[38px]">
              Parks Of <span className="pp-accent">{province.name}</span>
            </h2>
            <a
              href="/#parks"
              className="pp-outline-btn type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-gray-200 transition-all"
            >
              <Compass className="h-4 w-4" />
              All Parks
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {parks.items.map((park) => (
              <article
                key={park.name}
                className="pp-park group relative h-56 overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 md:h-64"
              >
                <img
                  src={park.image}
                  alt={park.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 space-y-1 p-4">
                  <h3 className="pp-hover-accent type-stat text-base text-white transition-colors md:text-lg">
                    {park.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <span>{park.area}</span>
                    <span className="flex items-center gap-1 text-[#e0b84a]">
                      <Star className="h-3 w-3 fill-current" />
                      {park.rating}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ДИКАЯ ПРИРОДА                                     */}
        {/* ================================================= */}
        <section id="wildlife" className="space-y-7 scroll-mt-10">
          <SectionTag icon={PawPrint}>{wildlife.tag}</SectionTag>

          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Wildlife Of <span className="pp-accent">{province.name}</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {wildlife.items.map((animal) => {
              const risk = RISK_STYLES[animal.level] ?? RISK_STYLES.safe;
              return (
                <article
                  key={animal.name}
                  className="rounded-2xl border border-white/10 bg-[#0E1726] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <WildlifeIcon
                    name={animal.icon}
                    className="mx-auto h-8 w-8"
                    style={{ color: risk.text }}
                  />
                  <h3 className="type-stat mt-3 text-sm text-white">{animal.name}</h3>
                  <span
                    className="type-tag mt-3 block rounded-full border px-2 py-1 text-[9px] tracking-[0.12em]"
                    style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
                  >
                    {animal.risk}
                  </span>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                            */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <StillWildsLogo width={84} height={48} color="#EBF0F4" />
          <p>© 2026 StillWilds.ca · Data from Parks Canada</p>
          <p className="flex items-center gap-1.5">
            <span className="pp-dot h-1.5 w-1.5 rounded-full" />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
