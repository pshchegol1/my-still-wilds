import { MapPin, AlertTriangle, AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { navigate } from '../router';
import { WILDLIFE_CATEGORIES } from '../data/animals/all-wildlife';
import './WildlifePage.css';

const RISK_LEVELS = {
  danger: { color: '#ee8d54', bg: 'rgba(222, 107, 50, 0.15)', border: 'rgba(222, 107, 50, 0.45)' },
  caution: { color: '#e0b84a', bg: 'rgba(224, 184, 74, 0.15)', border: 'rgba(224, 184, 74, 0.45)' },
  safe: { color: '#6ee7a1', bg: 'rgba(56, 161, 105, 0.15)', border: 'rgba(56, 161, 105, 0.45)' },
};

export default function WildlifePage() {
  return (
    <div className="wildlife-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-[#070D19]/95 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
          >
            ← Back
          </button>
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[120px]" />
          <a
            href="/#parks"
            className="bg-[#D96B32] hover:bg-[#E07B50] text-white text-sm px-4 py-2 rounded-full transition-all"
          >
            Get Started
          </a>
        </div>
      </header>

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#070D19]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 py-12">
          <div className="space-y-6 mb-8">
            {/* Title and Description */}
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
                CANADA'S <span className="text-[#48B878]">WILDLIFE</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Complete guide to 46 Canadian animals — from grizzly bears to beavers.<br />
                Where to find them, how to stay safe, and how to protect them.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap pt-8">
              <div className="flex items-center gap-2.5 pr-6">
                <AlertTriangle className="w-5 h-5 shrink-0 text-[#ee8d54]" />
                <div>
                  <p className="text-lg font-bold text-white leading-tight">4</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Dangerous</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-6 border-l border-white/15">
                <AlertCircle className="w-5 h-5 shrink-0 text-[#e0b84a]" />
                <div>
                  <p className="text-lg font-bold text-white leading-tight">8</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Caution</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-6 border-l border-white/15">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6ee7a1]" />
                <div>
                  <p className="text-lg font-bold text-white leading-tight">33</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Safe to Observe</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-6 border-l border-white/15">
                <Lightbulb className="w-5 h-5 shrink-0 text-[#4a88cf]" />
                <div>
                  <p className="text-lg font-bold text-white leading-tight">45</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Total Animals</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pl-6 border-l border-white/15">
                <MapPin className="w-5 h-5 shrink-0 text-[#48d68b]" />
                <div>
                  <p className="text-lg font-bold text-white leading-tight">13</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Provinces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Categories */}
      <main className="max-w-[1440px] mx-auto px-6 pb-16 space-y-20">

        {/* Dangerous Animals */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.danger.color }}>
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Dangerous — {WILDLIFE_CATEGORIES.dangerous.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.dangerous.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="danger" />
            ))}
          </div>
        </section>

        {/* Caution Animals */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.caution.color }}>
            <AlertCircle className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Caution — {WILDLIFE_CATEGORIES.caution.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.caution.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="caution" />
            ))}
          </div>
        </section>

        {/* Large Mammals */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.safe.color }}>
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Large Mammals — {WILDLIFE_CATEGORIES.largeMammals.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.largeMammals.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Small Mammals */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.safe.color }}>
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Small Mammals — {WILDLIFE_CATEGORIES.smallMammals.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.smallMammals.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Marine Life */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.safe.color }}>
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Marine Life — {WILDLIFE_CATEGORIES.marineLift.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.marineLift.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Birds */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color: RISK_LEVELS.safe.color }}>
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Birds — {WILDLIFE_CATEGORIES.birds.tag}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {WILDLIFE_CATEGORIES.birds.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

function AnimalCard({ animal, level }) {
  const isClickable = animal.slug;

  return (
    <div
      onClick={() => isClickable && navigate(`/wildlife/${animal.slug}`)}
      className={`glass glass--photo glass--ember group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 h-72 md:h-80 flex flex-col justify-end p-5 ${
        isClickable ? 'cursor-pointer' : ''
      }`}
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

      {/* Content */}
      <div className="relative z-10 space-y-1.5">
        <RiskBadge level={level} className="text-[9px]" />
        <h3 className="text-base font-bold tracking-wide text-white group-hover:text-[#ee8d54] transition-colors">
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
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 backdrop-blur-md ${className}`}
      style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
    >
      <Icon className="h-3 w-3 shrink-0" />
      {risk.label}
    </span>
  );
}
