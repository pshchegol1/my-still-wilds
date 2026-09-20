import { ArrowLeft, MapPin, ShieldAlert, AlertTriangle, AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
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
      {/* Hero Banner */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="/wildlife-hero.png"
          alt="Canada's Wildlife"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#070D19]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 py-12">
          <div></div>

          <div className="space-y-6">
            {/* Title and Description */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
                CANADA'S <span className="text-[#48B878]">WILDLIFE</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Complete guide to 46 Canadian animals — from grizzly bears to beavers. Where to find them, how to stay safe, and how to protect them.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[#ee8d54]/40">
                <AlertTriangle className="w-5 h-5 text-[#ee8d54]" />
                <div>
                  <p className="text-xl font-bold text-white">4</p>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Dangerous</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[#e0b84a]/40">
                <AlertCircle className="w-5 h-5 text-[#e0b84a]" />
                <div>
                  <p className="text-xl font-bold text-white">8</p>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Caution</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[#6ee7a1]/40">
                <CheckCircle2 className="w-5 h-5 text-[#6ee7a1]" />
                <div>
                  <p className="text-xl font-bold text-white">33</p>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Safe to Observe</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[#4a88cf]/40">
                <Lightbulb className="w-5 h-5 text-[#4a88cf]" />
                <div>
                  <p className="text-xl font-bold text-white">45</p>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Total Animals</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[#48d68b]/40">
                <MapPin className="w-5 h-5 text-[#48d68b]" />
                <div>
                  <p className="text-xl font-bold text-white">13</p>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Provinces</p>
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
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6" style={{ color: RISK_LEVELS.danger.color }} />
              <h2 className="text-3xl font-bold tracking-wide">
                <span style={{ color: RISK_LEVELS.danger.color }}>DANGEROUS</span>
              </h2>
            </div>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.danger.color }}
            >
              {WILDLIFE_CATEGORIES.dangerous.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WILDLIFE_CATEGORIES.dangerous.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="danger" />
            ))}
          </div>
        </section>

        {/* Caution Animals */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6" style={{ color: RISK_LEVELS.caution.color }} />
              <h2 className="text-3xl font-bold tracking-wide">
                <span style={{ color: RISK_LEVELS.caution.color }}>CAUTION</span>
              </h2>
            </div>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.caution.color }}
            >
              {WILDLIFE_CATEGORIES.caution.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WILDLIFE_CATEGORIES.caution.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="caution" />
            ))}
          </div>
        </section>

        {/* Large Mammals */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-wide">
              <span style={{ color: RISK_LEVELS.safe.color }}>LARGE MAMMALS</span>
            </h2>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.safe.color }}
            >
              {WILDLIFE_CATEGORIES.largeMammals.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {WILDLIFE_CATEGORIES.largeMammals.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Small Mammals */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-wide">
              <span style={{ color: RISK_LEVELS.safe.color }}>SMALL MAMMALS</span>
            </h2>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.safe.color }}
            >
              {WILDLIFE_CATEGORIES.smallMammals.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {WILDLIFE_CATEGORIES.smallMammals.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Marine Life */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-wide">
              <span style={{ color: RISK_LEVELS.safe.color }}>MARINE LIFE</span>
            </h2>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.safe.color }}
            >
              {WILDLIFE_CATEGORIES.marineLift.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {WILDLIFE_CATEGORIES.marineLift.animals.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} level="safe" />
            ))}
          </div>
        </section>

        {/* Birds */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-wide">
              <span style={{ color: RISK_LEVELS.safe.color }}>BIRDS</span>
            </h2>
            <p
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: RISK_LEVELS.safe.color }}
            >
              {WILDLIFE_CATEGORIES.birds.tag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
  const risk = RISK_LEVELS[level];
  const isClickable = animal.slug;

  return (
    <div
      onClick={() => isClickable && navigate(`/wildlife/${animal.slug}`)}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
        isClickable ? 'cursor-pointer' : ''
      }`}
      style={{
        border: `2px solid ${risk.border}`,
        background: risk.bg,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-bold tracking-wide text-white group-hover:transition-colors">
          {animal.name.toUpperCase()}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <MapPin className="h-3 w-3 shrink-0" />
          <span>{animal.location}</span>
        </div>
      </div>
    </div>
  );
}
