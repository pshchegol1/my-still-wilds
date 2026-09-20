import { ArrowLeft, MapPin, Star, Sparkles, Calendar } from 'lucide-react';
import { navigate } from '../router';
import { PARK_REGIONS, PARK_STATS } from '../data/parks/all-parks';
import './ParksPage.css';

// Звезды разложены равномерной сеткой (строки x колонки) по всей ширине
// и высоте баннера, с небольшим случайным сдвигом для естественности.
const STAR_COLS = 24;
const STAR_ROWS = 14;
const PARK_STARS = Array.from({ length: STAR_COLS * STAR_ROWS }, (_, i) => {
  const col = i % STAR_COLS;
  const row = Math.floor(i / STAR_COLS);
  const jitterX = ((i * 37 + 13) % 100) / 100 - 0.5;
  const jitterY = ((i * 73 + 29) % 100) / 100 - 0.5;
  const cellW = 100 / STAR_COLS;
  const cellH = 100 / STAR_ROWS;
  return {
    id: i,
    x: col * cellW + cellW / 2 + jitterX * cellW * 0.8,
    y: row * cellH + cellH / 2 + jitterY * cellH * 0.8,
    size: ((i * 17) % 15) / 10 + 0.3,
    duration: ((i * 19) % 40) / 10 + 3,
    delay: ((i * 23) % 60) / 10,
    opacity: ((i * 31) % 50) / 100 + 0.15,
  };
});

export default function ParksPage() {
  const regionOrder = [
    'britishColumbia',
    'alberta',
    'ontario',
    'quebec',
    'atlanticCanada',
    'prairieProvinces',
    'northernCanada',
  ];

  return (
    <div className="parks-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      {/* Hero Banner */}
      <section
        className="relative w-full overflow-hidden bg-[#070D19]"
        style={{
          aspectRatio: '1440 / 1051',
          backgroundImage: 'url(/parks-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/25" />

        {/* Звезды над горами */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARK_STARS.map((star) => (
            <div
              key={star.id}
              className="parks-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `parksTwinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
        </div>

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
            onClick={() => navigate('/')}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="space-y-6 mb-96">
            <div className="space-y-3 max-w-3xl">
              <h1 className="tracking-wide text-white text-[44px] leading-[1.02] md:text-[64px]">
                CANADA'S <span className="text-[#38A169]">NATIONAL PARKS</span>
              </h1>
              <p className="type-body-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                Complete guide to 48 Canadian national parks — from Banff to Auyuittuq.<br />
                Where to go, when to visit, and what makes each one unforgettable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-between w-full pt-16" style={{ fontFamily: "'Outfit', Arial, sans-serif" }}>
              <div className="flex items-center gap-3.5">
                <img src="/icons/montant frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#48B878]">{PARK_STATS.totalParks}</p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">National Parks</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/world frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#3E7BFA]">{PARK_STATS.provinces}</p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Provinces &amp; Territories</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/star frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#F0B828]">{PARK_STATS.protectedArea}</p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">km² Protected</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/people frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#E86349]">{PARK_STATS.visitors}</p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Annual Visitors</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-9 border-l border-white/15">
                <img src="/icons/calendar frame.svg" alt="" className="w-9 h-9 shrink-0" />
                <div>
                  <p className="type-stat text-2xl leading-tight text-[#00C8B3]">{PARK_STATS.oldestYear}</p>
                  <p className="uppercase tracking-wide text-[14px] text-gray-300">Oldest Park (Banff)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Park Sections */}
      <main className="relative z-20 max-w-[1440px] mx-auto px-6 -mt-64 pb-16 space-y-20">

        {/* Must Visit - Bento Grid */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-[#D96B32]">
            <Sparkles className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold tracking-wide">
              Must Visit — {PARK_REGIONS.mustVisit.tag}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <ParkCard park={PARK_REGIONS.mustVisit.parks[0]} large />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-2">
              {PARK_REGIONS.mustVisit.parks.slice(1, 3).map((park) => (
                <ParkCard key={park.name} park={park} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PARK_REGIONS.mustVisit.parks.slice(3).map((park) => (
              <ParkCard key={park.name} park={park} />
            ))}
          </div>
        </section>

        {/* Region sections */}
        {regionOrder.map((key) => {
          const region = PARK_REGIONS[key];
          return (
            <section key={key} className="space-y-8">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-[#6ee7a1]">
                <MapPin className="h-5 w-5 shrink-0" />
                <h2 className="text-lg font-bold tracking-wide">
                  {region.label} — {region.parks.length} Parks
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {region.parks.map((park, idx) => (
                  <ParkCard key={`${park.name}-${idx}`} park={park} />
                ))}
              </div>
            </section>
          );
        })}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
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

const SEASON_STYLES = {
  Summer: 'border-[#38A169]/60 bg-[#38A169]/15 text-[#6ee7a1]',
  Winter: 'border-[#4a88cf]/60 bg-[#4a88cf]/15 text-[#8fc0f0]',
  Fall: 'border-[#D96B32]/60 bg-[#D96B32]/15 text-[#ee8d54]',
  Spring: 'border-[#48d68b]/60 bg-[#48d68b]/15 text-[#8ff0bb]',
};

function SeasonPills({ seasons }) {
  if (!seasons?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 pt-1.5">
      {seasons.map((season) => (
        <span
          key={season}
          className={`rounded-md border px-2 py-0.5 text-[9px] uppercase tracking-wide ${SEASON_STYLES[season] ?? SEASON_STYLES.Summer}`}
        >
          {season}
        </span>
      ))}
    </div>
  );
}

function ParkCard({ park, large = false }) {
  const hasDetails = Boolean(park.area);

  return (
    <div
      className={`pc-card glass glass--photo glass--forest group relative overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-500 hover:-translate-y-1 flex flex-col justify-end p-5 cursor-pointer ${
        large ? 'h-72 md:h-full min-h-[19rem]' : 'h-56'
      }`}
    >
      <img
        src={park.image}
        alt={park.name}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

      {!hasDetails && (
        <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full border border-amber-400/40 bg-black/40 px-2.5 py-1 text-[11px] text-amber-300 backdrop-blur-md">
          <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-400" />
          {park.rating}
        </span>
      )}

      <div className="relative z-10 space-y-1">
        {hasDetails && (
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#6ee7a1]">{park.province}</p>
        )}
        <h3 className={`pc-card-title font-bold tracking-wide text-white transition-colors ${large ? 'text-xl' : 'text-sm'}`}>
          {park.name.toUpperCase()}
        </h3>

        {hasDetails ? (
          <>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-300">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 shrink-0" />
                {park.area}
              </span>
              {park.established && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 shrink-0" />
                  Est {park.established}
                </span>
              )}
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="h-3 w-3 shrink-0 fill-amber-400" />
                {park.rating}
              </span>
            </div>
            <SeasonPills seasons={park.seasons} />
          </>
        ) : (
          <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
            <MapPin className="h-3 w-3 shrink-0" />
            <span>{park.province}</span>
          </div>
        )}
      </div>
    </div>
  );
}
