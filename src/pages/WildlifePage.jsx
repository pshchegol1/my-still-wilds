import { HomeLink } from '../components/SiteLogo';
import { useEffect, useRef } from 'react';
import { MapPin, AlertTriangle, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { navigate, navigateToAnimal } from '../router';
import { WILDLIFE_CATEGORIES } from '../data/animals/all-wildlife';
import CountUp from '../components/CountUp';
import { useMagicReveal } from '../hooks/useMagicReveal';
import './WildlifePage.css';

const RISK_LEVELS = {
  danger: { color: '#ee8d54', bg: 'rgba(222, 107, 50, 0.15)', border: 'rgba(222, 107, 50, 0.45)' },
  caution: { color: '#e0b84a', bg: 'rgba(224, 184, 74, 0.15)', border: 'rgba(224, 184, 74, 0.45)' },
  safe: { color: '#6ee7a1', bg: 'rgba(56, 161, 105, 0.15)', border: 'rgba(56, 161, 105, 0.45)' },
};

const CATEGORIES = [
  { id: 'dangerous', key: 'dangerous', level: 'danger', icon: AlertTriangle, title: 'Dangerous' },
  { id: 'caution', key: 'caution', level: 'caution', icon: AlertCircle, title: 'Caution' },
  { id: 'large-mammals', key: 'largeMammals', level: 'safe', icon: CheckCircle2, title: 'Large Mammals' },
  { id: 'small-mammals', key: 'smallMammals', level: 'safe', icon: CheckCircle2, title: 'Small Mammals' },
  { id: 'marine-life', key: 'marineLift', level: 'safe', icon: CheckCircle2, title: 'Marine Life' },
  { id: 'birds', key: 'birds', level: 'safe', icon: CheckCircle2, title: 'Birds' },
];

// Числа героя считаются из данных, а не набраны вручную
const COUNT = (key) => WILDLIFE_CATEGORIES[key].animals.length;
const STATS = {
  dangerous: COUNT('dangerous'),
  caution: COUNT('caution'),
  safe: COUNT('largeMammals') + COUNT('smallMammals') + COUNT('marineLift') + COUNT('birds'),
};
STATS.total = STATS.dangerous + STATS.caution + STATS.safe;

// Липкий заголовок раздела: тонкая линия под ним показывает, сколько
// раздела уже пролистано (пишется прямо в style, без state).
function useSectionProgress(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const sections = Array.from(root.querySelectorAll('section[data-cat]'));
    let raf = null;
    const frame = () => {
      raf = null;
      sections.forEach((sec) => {
        const bar = sec.querySelector('.wl-cat-head__bar');
        if (!bar) return;
        const rect = sec.getBoundingClientRect();
        const span = Math.max(1, rect.height - window.innerHeight * 0.5);
        const p = Math.min(1, Math.max(0, -rect.top / span));
        bar.style.transform = `scaleX(${p})`;
      });
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(frame);
    };
    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [rootRef]);
}

export default function WildlifePage() {
  const rootRef = useRef(null);
  useMagicReveal(rootRef);
  useSectionProgress(rootRef);

  return (
    <div ref={rootRef} className="wildlife-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      {/* Hero Banner */}
      <section
        className="relative w-full overflow-hidden bg-[#070D19]"
        style={{
          aspectRatio: '4624 / 1952',
          backgroundImage: 'url(/wildlife-hero.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070D19] to-transparent" />
        <div
          className="absolute bottom-0 inset-x-0 h-[75%]"
          style={{
            background: 'linear-gradient(to top, #070D19 0%, #070D19 35%, rgba(7,13,25,0.95) 45%, rgba(7,13,25,0.82) 55%, rgba(7,13,25,0.62) 65%, rgba(7,13,25,0.4) 75%, rgba(7,13,25,0.18) 88%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full mx-auto flex w-full max-w-[1440px] flex-col justify-between px-6 py-7">
          <button
            type="button"
            onClick={() => navigate('/#wildlife')}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="space-y-6 mb-8">
            {/* Title and Description */}
            <div className="space-y-3 max-w-3xl hero-in" style={{ '--hero-delay': '0.1s' }}>
              <h1 className="tracking-wide text-white text-[44px] leading-[1.02] md:text-[64px]">
                CANADA'S <span className="text-[#38A169]">WILDLIFE</span>
              </h1>
              <p className="type-body-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                Complete guide to {STATS.total} Canadian animals — from grizzly bears to beavers.<br />
                Where to find them, how to stay safe, and how to protect them.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-between w-full pt-8 hero-in" style={{ fontFamily: "'Outfit', Arial, sans-serif", '--hero-delay': '0.45s' }}>
              <div className="flex items-center gap-3.5">
                <img src="/icons/Dangerous frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#C8622A]"><CountUp value={STATS.dangerous} delay={650} /></p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Dangerous</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/Caution frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#F0B828]"><CountUp value={STATS.caution} delay={750} /></p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Caution</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/Safe  frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#48B878]"><CountUp value={STATS.safe} delay={850} /></p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Safe to Observe</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/people frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#E86349]"><CountUp value={STATS.total} delay={950} /></p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Total Animals</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/map frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#488CDC]"><CountUp value={13} delay={1050} /></p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Provinces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Categories */}
      <main className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 space-y-20">

        {CATEGORIES.map(({ id, key, level, icon: Icon, title }) => {
          const cat = WILDLIFE_CATEGORIES[key];
          return (
            <section key={id} id={id} data-cat className="space-y-8">
              <div
                className="wl-cat-head sticky top-0 z-20 -mx-6 px-6 pt-3 bg-[#070D19]/85 backdrop-blur-md"
                style={{ color: RISK_LEVELS[level].color }}
              >
                <div className="flex items-center gap-2 pb-3">
                  <Icon className="h-6 w-6 shrink-0" />
                  <h2 className="text-base sm:text-xl font-bold tracking-wide">
                    {title} — {cat.tag}
                  </h2>
                  <span className="ml-auto shrink-0 whitespace-nowrap text-xs font-normal tracking-wide text-gray-400">
                    {cat.animals.length} animals
                  </span>
                </div>
                <i className="wl-cat-head__line" aria-hidden="true" />
                <i className="wl-cat-head__bar" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.animals.map((animal) => (
                  <AnimalCard key={animal.name} animal={animal} level={level} />
                ))}
              </div>
            </section>
          );
        })}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <HomeLink className="inline-block">
            <img src="/logo-compact.svg" alt="Still Wilds" className="w-[180px]" />
          </HomeLink>
          <p>© 2026 StillWilds.ca · Data from Parks Canada</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38A169]" />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function AnimalCard({ animal, level }) {
  const isClickable = animal.slug;
  const risk = RISK_LEVELS[level];

  return (
    <div
      onClick={(e) => isClickable && navigateToAnimal(animal.slug, e.currentTarget)}
      className={`wc-card glass glass--photo glass--ember group relative overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-500 hover:-translate-y-1 h-72 md:h-80 flex flex-col justify-end p-5 ${
        isClickable ? 'cursor-pointer' : ''
      }`}
      style={{ '--hover-accent': risk.color, '--hover-border': risk.border }}
    >
      {/* Image */}
      <img
        src={animal.image}
        alt={animal.name}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

      {/* Risk badge - top right corner */}
      <RiskBadge level={level} className="absolute right-4 top-4 z-10 text-[11px]" />

      {/* Content */}
      <div className="relative z-10 space-y-1.5">
        <h3 className="wc-card-title text-base font-bold tracking-wide text-white transition-colors">
          {animal.name.toUpperCase()}
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
          <MapPin className="h-3 w-3 shrink-0" />
          <span>{animal.location}</span>
        </div>
      </div>
    </div>
  );
}

function RiskBadge({ level, className = '' }) {
  const riskConfig = {
    danger: { icon: AlertTriangle, text: '#ee8d54', solid: '#D96B32', border: 'rgba(222, 107, 50, 0.45)', bg: 'rgba(222, 107, 50, 0.15)', label: 'Dangerous' },
    caution: { icon: AlertCircle, text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224, 184, 74, 0.45)', bg: 'rgba(224, 184, 74, 0.12)', label: 'Caution' },
    safe: { icon: CheckCircle2, text: '#6ee7a1', solid: '#38a169', border: 'rgba(56, 161, 105, 0.45)', bg: 'rgba(56, 161, 105, 0.12)', label: 'Safe' },
  };

  const risk = riskConfig[level];
  const Icon = risk.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-md ${className}`}
      style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      {risk.label}
    </span>
  );
}
