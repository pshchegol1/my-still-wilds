import { ArrowLeft, MapPin, ShieldAlert } from 'lucide-react';
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
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070D19]/95 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </button>
          <h1 className="text-2xl font-bold text-white">Canada's Wildlife</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          CANADA'S <span className="text-[#D96B32]">WILDLIFE</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Over 200 wildlife species call Canada home. Learn about dangerous, cautious, and safe-to-observe animals across the country.
        </p>
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
