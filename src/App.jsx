import { useState } from 'react';
import {
  ArrowRight,
  Map,
  MapPin,
  Info,
  TriangleAlert,
  CircleAlert,
  CircleCheck,
  Compass,
  Trees,
  Shield,
  ShieldAlert,
  Users,
  Calendar,
  Star,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import {
  PROVINCES_DATA,
  PROVINCE_STATS,
  WILDLIFE_DATA,
  PARKS_DATA,
  PARK_STATS,
  FOOTER_LINKS,
} from './data/mockData';
import { hasProvinceDetail } from './data/provinces';
import { navigate } from './router';
import './App.css';


// Уровни опасности для карточек животных
const RISK_LEVELS = {
  safe: { icon: CircleCheck, className: 'border-[#38A169]/60 bg-[#38A169]/15 text-[#6ee7a1]' },
  caution: { icon: CircleAlert, className: 'border-[#e0b84a]/60 bg-[#e0b84a]/15 text-[#e0b84a]' },
  danger: { icon: TriangleAlert, className: 'border-[#D96B32]/70 bg-[#D96B32]/20 text-[#ee8d54]' },
};

function RiskBadge({ level, label, className = '' }) {
  const risk = RISK_LEVELS[level] ?? RISK_LEVELS.safe;
  const Icon = risk.icon;
  return (
    <span
      className={`type-tag inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 backdrop-blur-md ${risk.className} ${className}`}
    >
      <Icon className="h-3 w-3 shrink-0" />
      {label}
    </span>
  );
}

// Сезоны для карточек парков
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
          className={`type-tag rounded-md border px-2 py-0.5 text-[9px] ${SEASON_STYLES[season] ?? SEASON_STYLES.Summer}`}
        >
          {season}
        </span>
      ))}
    </div>
  );
}

// Площадь, год основания и рейтинг одной строкой
function ParkMeta({ park, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300 ${className}`}>
      <span className="flex items-center gap-1">
        <MapPin className="h-3 w-3 shrink-0" />
        {park.area}
      </span>
      {park.established && (
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3 shrink-0" />
          Est. {park.established}
        </span>
      )}
      <span className="flex items-center gap-1 text-amber-400">
        <Star className="h-3 w-3 shrink-0 fill-amber-400" />
        {park.rating}
      </span>
    </div>
  );
}

// Иконки карточек статистики (PROVINCE_STATS[].icon)
const STAT_ICONS = { map: Map, trees: Trees, users: Users };

function StatIcon({ name }) {
  // Горы — собственный вектор проекта, остальное из lucide
  if (name === 'mountains') {
    // Маска, чтобы иконка принимала цвет карточки, а не зеленый из файла
    return (
      <span
        className="icon-mask h-6 w-6"
        style={{ '--icon-src': "url('/icons/icon-mountains.svg')" }}
        aria-hidden="true"
      />
    );
  }
  const Icon = STAT_ICONS[name] ?? Map;
  return <Icon className="h-5 w-5" />;
}

// Позиции звезд, сгенерированные вне рендера для чистоты компонентов React 19
const STARS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 1009) / 1009 * 100,
  y: ((i * 73 + 29) % 1013) / 1013 * 100,
  size: ((i * 17) % 15) / 10 + 0.3,
  duration: ((i * 19) % 40) / 10 + 3,
  delay: ((i * 23) % 60) / 10,
  opacity: ((i * 31) % 50) / 100 + 0.1,
}));

const BIG_STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: (i * 47 + 19) % 100,
  y: (i * 29 + 11) % 60,
  size: ((i * 13) % 20) / 10 + 2,
  duration: ((i * 17) % 30) / 10 + 4,
  delay: ((i * 31) % 50) / 10,
}));

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070D19] text-[#EBF0F4] relative overflow-hidden flex flex-col items-center selection:bg-[#38A169]/30 selection:text-white">
      
      {/* --- ФОН: СЕВЕРНОЕ СИЯНИЕ И ЗВЕЗДЫ --- */}
      <div className="app-background">
        <div className="space-cloud space-cloud--one" />
        <div className="space-cloud space-cloud--two" />
        <div className="space-cloud space-cloud--three" />

        {STARS.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

        {BIG_STARS.map((star) => (
          <div
            key={`big-${star.id}`}
            className="star star--big"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.8,
              animation: `twinkleBig ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

        {/* --- СЕВЕРНОЕ СИЯНИЕ: 3 ПОЛОСЫ ВВЕРХУ --- */}
        <div className="aurora-container">
          <div className="aurora-band aurora-band--one" />
          <div className="aurora-band aurora-band--two" />
          <div className="aurora-band aurora-band--three" />
        </div>
        <div className="space-glow space-glow--orange" />
        <div className="space-glow space-glow--blue" />
      </div>

      {/* --- ОСНОВНОЙ КОНТЕНТ --- */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-16 py-6 flex flex-col gap-20 md:gap-28">
        
        {/* ================================================= */}
        {/* НАВИГАЦИЯ С ВАШИМ ТОЧНЫМ ЛОГОТИПОМ               */}
        {/* ================================================= */}
        <header className="flex items-center justify-between py-2">
          <a href="#" className="flex items-center group cursor-pointer -my-2">
            <img src="/logo-green.svg" alt="Still Wilds" className="w-[170px]" />
          </a>

          <nav className="hidden md:flex items-center gap-8 tracking-wider text-gray-300 type-body-sm">
            <a href="#provinces" className="hover:text-white transition-colors">Provinces</a>
            <a href="#wildlife" className="hover:text-white transition-colors">Wildlife</a>
            <a href="#parks" className="hover:text-white transition-colors">Parks</a>
            <a href="#safety" className="hover:text-white transition-colors">Safety Guide</a>
            <a href="#newsletter" className="hover:text-white transition-colors">Dispatch</a>
          </nav>

          <a
            href="#parks"
            className="bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/20"
            style={{ paddingLeft: '38.4px', paddingRight: '38.4px', paddingTop: '12px', paddingBottom: '12px', fontSize: '16.8px' }}
          >
            Get Started
          </a>
        </header>

        {/* ================================================= */}
        {/* SECTION 1: HERO СЕКЦИЯ                           */}
        {/* ================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2 -mt-[5vh]">

          {/* Левая колонка */}
          <div className="lg:col-span-5 pr-2 flex flex-col">

            <div className="space-y-8">

              <h1 className="tracking-wide">
                <span className="text-gray-300">DISCOVER</span> <br />
                <span className="text-white">THE STILL</span> <br />
                <span className="text-[#38A169]">WILDS</span> <br />
                <span className="text-white">OF CANADA</span>
              </h1>

              <p
                className="text-gray-400 leading-relaxed max-w-sm font-normal"
                style={{
                  fontFamily: "Outfit, serif",
                  fontSize: "100%"
                }}
              >
                Mountains, Wildlife, Cities — All In One Place. Reliable Data From Parks Canada And Official Sources To Help You Explore Safely.
              </p>

              <div
                className="flex flex-wrap items-center justify-start w-full pt-8 gap-4"
              >
                <a
                  href="#parks"
                  className="flex items-center bg-[#D96B32] hover:bg-[#E07B50] type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/25 text-white"
                  style={{ paddingLeft: '28.08px', paddingRight: '28.08px', paddingTop: '11.7px', paddingBottom: '11.7px', fontSize: '16.38px', gap: '9.36px' }}
                >
                  <span>Explore The Map</span>
                  <ArrowRight style={{ width: '18.72px', height: '18.72px' }} />
                </a>

                <a
                  href="#provinces"
                  className="bg-transparent type-button rounded-full transition-all cursor-pointer border border-[#48B878] text-[#48B878] hover:bg-[#48B878]/10"
                  style={{ paddingLeft: '37.44px', paddingRight: '37.44px', paddingTop: '11.7px', paddingBottom: '11.7px', fontSize: '16.38px' }}
                >
                  All Provinces
                </a>
              </div>

            </div>

            {/* Статистика */}
            <div className="grid grid-cols-4 pt-8 text-left my-auto">
              <div className="flex flex-col items-start px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>48</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">National Parks</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>13</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">Provinces</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>200+</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">Wildlife Species</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>10M</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">km² of Nature</p>
              </div>
            </div>

          </div>

          {/* Правая колонка с карточкой Banff и 3 мини-карточками */}
          <div className="lg:col-span-7">
            <div className="glass glass--ember group relative w-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-[2/1] overflow-hidden rounded-b-2xl bg-[#0a1521]">
                <img 
                  src="/parks/image-9.png" 
                  alt="Mountain landscape in Banff National Park"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-4 p-6">
                <span className="type-tag inline-flex items-center gap-1 rounded-full border border-[#38A169] px-6 py-1.5 text-[#6ee7a1] bg-[#38A169]/10">
                  <span className="featured-star" aria-hidden="true">★</span>
                  FEATURED
                </span>

                <h2 className="text-xl font-bold tracking-wide text-white md:text-2xl">
                  BANFF NATIONAL PARK
                </h2>

                <p className="text-sm leading-relaxed text-gray-200">
                  Canada's Oldest National Park. Lake Louise, Icefields Parkway, Hot Springs And Glaciers.
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-300">
                  <span>Alberta · 6,641 Km²</span>
                  <a href="#parks" className="flex items-center gap-1 font-medium text-white transition-colors hover:text-[#6ee7a1]">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* 3 Карточки снизу */}
            <div className="mt-4 grid w-full grid-cols-1 gap-2.5 md:grid-cols-3">
              
              <div className="glass glass--sm glass--forest group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] p-4 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center text-[#48d68b]">
                  <img src="/icons/icon-mountains.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  MOUNTAINS & PARKS
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Banff, Jasper, Yoho — 48 National Parks Of Canada Are Waiting For You.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#38A169] px-3 py-1 uppercase tracking-wide text-[#52d995]">Nature</span>
                  <a href="#parks" className="flex items-center gap-1 text-[#52d995] transition-colors hover:text-white">Read More <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

              <div className="glass glass--sm glass--ember group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] p-4 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center text-[#e77a3a]">
                  <img src="/icons/icon-paw.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  WILDLIFE
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Bears, Moose, Wolves — Where They Live And How To Stay Safe.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#D96B32] px-3 py-1 uppercase tracking-wide text-[#ee8d54]">Safety</span>
                  <a href="#wildlife" className="flex items-center gap-1 text-[#ee8d54] transition-colors hover:text-white">Learn More <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

              <div className="glass glass--sm glass--sand group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] p-4 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center text-[#e6ddc8]">
                  <img src="/icons/icon-city.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  CITIES OF CANADA
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Toronto, Vancouver, Montreal — Culture And Architecture.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#e6ddc8] px-3 py-1 uppercase tracking-wide text-[#e6ddc8]">10 Cities</span>
                  <a href="#provinces" className="flex items-center gap-1 text-[#e6ddc8] transition-colors hover:text-white">View All <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 2: EXPLORE ALL OF CANADA (Provinces)     */}
        {/* ================================================= */}
        <section id="provinces" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="space-y-3">
            {/* Пилюля вынесена отдельной строкой и поднята над заголовком */}
            <span className="provinces-tag section-tag type-tag inline-flex items-center rounded-full border border-[#38A169] bg-[#38A169]/10 text-[#6ee7a1]">
              <span className="rounded-full bg-[#38A169]" style={{ height: '7.26px', width: '7.26px' }} />
              10 PROVINCES · 3 TERRITORIES
            </span>

            {/* items-start — описание справа выравнивается по строке EXPLORE */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h2 className="tracking-wide">
                EXPLORE <br />
                ALL OF <span className="text-[#38A169]">CANADA</span>
              </h2>

              <div className="flex flex-col items-end text-right gap-4 max-w-lg">
                <p className="text-gray-400 text-sm leading-relaxed">
                  From the Pacific coast to the Atlantic shores, across vast tundra and dense forests — every province has its own story.
                </p>
                <a
                  href="#parks"
                  className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#38A169] text-[#6ee7a1] hover:bg-[#38A169]/15 hover:text-white transition-all type-button"
                >
                  <span>Interactive Map</span>
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Асимметричная сетка 13 провинций и территорий */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5">
            {PROVINCES_DATA.map((prov) => {
              // У провинции есть отдельная страница — карточка становится ссылкой
              const hasPage = hasProvinceDetail(prov.id);
              const href = `/province/${prov.id}`;
              const Wrapper = hasPage ? 'a' : 'div';

              return (
              <Wrapper
                key={prov.id}
                {...(hasPage
                  ? {
                      href,
                      onClick: (event) => {
                        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                        event.preventDefault();
                        navigate(href);
                      },
                    }
                  : {})}
                className={`glass glass--photo glass--forest group relative block overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 ${prov.colSpan} h-56 md:h-64 ${hasPage ? 'cursor-pointer' : ''}`}
              >
                {/* Фотография */}
                <img
                  src={prov.image}
                  alt={prov.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Градиентные наложения для читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,161,105,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Верхний бейдж региона */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="type-tag rounded-full border border-white/20 bg-[#070e1b]/70 px-3 py-1 text-[10px] text-gray-200 backdrop-blur-md">
                    {prov.tag}
                  </span>
                </div>

                {/* Нижний контент карточки */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-1">
                  <h3 className="text-base md:text-lg font-bold tracking-wide text-white group-hover:text-[#6ee7a1] transition-colors">
                    {prov.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="line-clamp-1">{prov.tagline}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#6ee7a1] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                </div>
              </Wrapper>
              );
            })}
          </div>

          {/* Статистика: четыре отдельные карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {PROVINCE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`glass glass--sm glass--${stat.tint} flex items-center gap-4 rounded-2xl px-5 py-4`}
              >
                <span className="stat-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
                  <StatIcon name={stat.icon} />
                </span>
                <div>
                  <p className="type-stat text-xl leading-tight text-[#D96B32] md:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 3: CANADA'S WILDLIFE                     */}
        {/* ================================================= */}
        <section id="wildlife" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="space-y-3">
            {/* Пилюля вынесена отдельной строкой над заголовком */}
            <span className="section-tag type-tag inline-flex items-center rounded-full border border-[#D96B32] bg-[#D96B32]/10 text-[#ee8d54]">
              <img src="/icons/icon-paw.svg" alt="" className="h-4 w-4" />
              OVER 200 SPECIES
            </span>

            {/* items-start — описание справа выравнивается по строке CANADA'S */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h2 className="tracking-wide">
                CANADA'S <br />
                <span className="text-[#D96B32]">WILDLIFE</span>
              </h2>

              <div className="flex flex-col items-end text-right gap-4 max-w-lg">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bears, wolves, whales, caribou... Canada's ecosystems are home to some of the most resilient and majestic wildlife on Earth. Learn how to observe them safely.
                </p>
                <a
                  href="#safety"
                  className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#D96B32] text-[#ee8d54] hover:bg-[#D96B32]/15 hover:text-white transition-all type-button"
                >
                  <img src="/icons/icon-paw.svg" alt="" className="w-4 h-4" />
                  <span>All Wildlife</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bento сетка животных */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Большая карточка: Гризли (Grizzly Bear) */}
            <div className="glass glass--photo glass--ember lg:col-span-6 group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 min-h-[26rem] md:min-h-[34rem] flex flex-col justify-end p-6 md:p-8">
              <img
                src={WILDLIFE_DATA.featured.image}
                alt={WILDLIFE_DATA.featured.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/40 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <RiskBadge
                  level={WILDLIFE_DATA.featured.level}
                  label={WILDLIFE_DATA.featured.risk}
                  className="px-3.5 py-1 text-[10px]"
                />
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  {WILDLIFE_DATA.featured.name.toUpperCase()}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {WILDLIFE_DATA.featured.location}
                  </span>
                  {WILDLIFE_DATA.featured.note && (
                    <span className="flex items-center gap-1.5">
                      <Info className="h-3.5 w-3.5 shrink-0" />
                      {WILDLIFE_DATA.featured.note}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Правая сетка 2x2: Волк, Лось, Карибу, Орел */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WILDLIFE_DATA.grid.map((animal, idx) => (
                <div
                  key={idx}
                  className="glass glass--photo glass--ember group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 h-56 md:h-auto flex flex-col justify-end p-5"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                  <div className="relative z-10 space-y-1.5">
                    <RiskBadge level={animal.level} label={animal.risk} className="text-[9px]" />
                    <h4 className="text-base font-bold tracking-wide text-white group-hover:text-[#ee8d54] transition-colors">
                      {animal.name.toUpperCase()}
                    </h4>
                    <p className="flex items-center gap-1.5 text-[11px] text-gray-300">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {animal.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Нижний ряд 3 животных: Косатка, Морская черепаха, Пума */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WILDLIFE_DATA.bottom.map((animal, idx) => (
              <div
                key={idx}
                className="glass glass--photo glass--ember group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 h-52 flex flex-col justify-end p-5"
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <RiskBadge level={animal.level} label={animal.risk} className="text-[9px]" />
                  <h4 className="text-base font-bold tracking-wide text-white group-hover:text-[#ee8d54] transition-colors">
                    {animal.name.toUpperCase()}
                  </h4>
                  <p className="flex items-center gap-1.5 text-[11px] text-gray-300">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {animal.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Баннер правил безопасности дикой природы */}
          <div 
            id="safety"
            className="glass glass--ember relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D96B32]/15 border border-[#D96B32]/30 flex items-center justify-center text-[#ee8d54] shrink-0 mt-1">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 max-w-2xl">
                <h4 className="text-lg font-bold tracking-wide text-white">
                  WILDLIFE SAFETY RULES
                </h4>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Always maintain safe distance (100m for bears, 30m for other large wildlife). Never feed animals. Store food in certified bear-proof canisters, travel in groups, and carry bear spray on accessible hip holsters.
                </p>
              </div>
            </div>

            <button 
              onClick={() => alert("Parks Canada Safety Guide: Always carry bear spray, stay at least 100m from bears and wolves, pack out all trash, and make noise while hiking.")}
              className="shrink-0 px-6 py-2.5 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/20 flex items-center gap-2"
            >
              <span>Official Safety Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 4: CANADA'S NATIONAL PARKS               */}
        {/* ================================================= */}
        <section id="parks" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="space-y-3">
            {/* Пилюля вынесена отдельной строкой над заголовком */}
            <span className="section-tag type-tag inline-flex items-center rounded-full border border-[#38A169] bg-[#38A169]/10 text-[#6ee7a1]">
              <img src="/icons/icon-mountains.svg" alt="" className="h-4 w-4" />
              48 NATIONAL PARKS
            </span>

            {/* items-start — описание справа выравнивается по строке CANADA'S */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h2 className="tracking-wide">
                CANADA'S <br />
                NATIONAL <span className="text-[#38A169]">PARKS</span>
              </h2>

              <div className="flex flex-col items-end text-right gap-4 max-w-lg">
                <p className="text-gray-400 text-sm leading-relaxed">
                  From the Rocky Mountains to the Atlantic coast... Canada's national parks preserve some of the most breathtaking wilderness on Earth.
                </p>
                <a
                  href="#parks"
                  className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#38A169] text-[#6ee7a1] hover:bg-[#38A169]/15 hover:text-white transition-all type-button"
                >
                  <img src="/icons/icon-mountains.svg" alt="" className="w-4 h-4" />
                  <span>All 48 Parks</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Сетка парков: Featured Banff слева + 2 карточки справа */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Большая карточка: Banff National Park */}
            <div className="glass glass--photo glass--forest lg:col-span-7 group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 min-h-[26rem] md:min-h-[32rem] flex flex-col justify-end p-6 md:p-8">
              <img
                src={PARKS_DATA.featured.image}
                alt={PARKS_DATA.featured.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
              
              <div className="relative z-10 space-y-1.5">
                <p className="type-tag text-[10px] tracking-[0.14em] text-[#6ee7a1]">
                  {PARKS_DATA.featured.province}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  {PARKS_DATA.featured.name.toUpperCase()}
                </h3>
                <ParkMeta park={PARKS_DATA.featured} className="text-xs" />
                <SeasonPills seasons={PARKS_DATA.featured.seasons} />
              </div>
            </div>

            {/* 2 Карточки справа: Jasper & Yoho */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {PARKS_DATA.side.map((park, idx) => (
                <div
                  key={idx}
                  className="glass glass--photo glass--forest group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 flex-1 min-h-[15rem] flex flex-col justify-end p-6"
                >
                  <img
                    src={park.image}
                    alt={park.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                  <div className="relative z-10 space-y-1">
                    <p className="type-tag text-[10px] tracking-[0.14em] text-[#6ee7a1]">
                      {park.province}
                    </p>
                    <h4 className="text-lg font-bold tracking-wide text-white group-hover:text-[#6ee7a1] transition-colors">
                      {park.name.toUpperCase()}
                    </h4>
                    <ParkMeta park={park} className="text-[11px]" />
                    <SeasonPills seasons={park.seasons} />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Нижний ряд 3 карточек: Gros Morne, Pacific Rim, +42 More Parks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {PARKS_DATA.bottom.map((park, idx) => (
              <div
                key={idx}
                className="glass glass--photo glass--forest group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 h-64 flex flex-col justify-end p-5"
              >
                <img
                  src={park.image}
                  alt={park.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <p className="type-tag text-[10px] tracking-[0.14em] text-[#6ee7a1]">
                    {park.province}
                  </p>
                  <h4 className="text-base font-bold tracking-wide text-white group-hover:text-[#6ee7a1] transition-colors">
                    {park.name.toUpperCase()}
                  </h4>
                  <ParkMeta park={park} className="text-[11px]" />
                  <SeasonPills seasons={park.seasons} />
                </div>
              </div>
            ))}

            {/* Карточка +42 More Parks с сиянием */}
            <div className="glass glass--forest relative overflow-hidden rounded-2xl p-6 h-64 flex flex-col items-center justify-center text-center">
              {/* Фоновые пятна северного сияния */}
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-[#38A169]/25 blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#D96B32]/20 blur-2xl" />

              <div className="relative z-10 space-y-2">
                <p className="type-stat text-5xl md:text-6xl text-white leading-none tracking-tight">
                  +42
                </p>
                <p className="type-stat pb-2 text-lg tracking-wide text-white">
                  More Parks
                </p>
                <button
                  onClick={() => alert("Explore all 48 Canadian National Parks: From Quttinirpaaq in the far north to Point Pelee in the south.")}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button text-xs rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/30"
                >
                  <span
                    className="icon-mask w-4 h-4"
                    style={{ '--icon-src': "url('/icons/icon-mountains.svg')" }}
                    aria-hidden="true"
                  />
                  View All 48
                </button>
              </div>
            </div>

          </div>

          {/* Статистика национальных парков */}
          <div className="glass glass--forest grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:p-6 rounded-2xl">
            {PARK_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 px-3 py-2 ${idx > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#38A169]/10 border border-[#38A169]/30 flex items-center justify-center text-[#6ee7a1] shrink-0">
                  {idx === 0 && <Trees className="w-5 h-5" />}
                  {idx === 1 && <Shield className="w-5 h-5" />}
                  {idx === 2 && <Users className="w-5 h-5" />}
                  {idx === 3 && <Calendar className="w-5 h-5" />}
                </div>
                <div>
                  <p className="type-stat text-xl md:text-2xl text-white leading-tight">{stat.value}</p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 5: STAY UPDATED ON CANADA (Newsletter)   */}
        {/* ================================================= */}
        <section id="newsletter" className="glass glass--dusk relative overflow-hidden rounded-3xl p-8 md:p-14 text-center scroll-mt-12">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-radial from-[#38A169]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
              STAY UPDATED ON CANADA
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get seasonal park updates, wildlife safety alerts, and newly discovered trails in your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#38A169]/15 border border-[#38A169]/40 text-[#6ee7a1] text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! You are now subscribed to the Still Wilds monthly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <div className="relative w-full sm:w-96">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 rounded-full bg-[#070D19]/80 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#38A169] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/25 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-500 pt-2">
              We respect your privacy. Unsubscribe at any time. Sourced with Parks Canada public alerts.
            </p>
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 6: FOOTER                                */}
        {/* ================================================= */}
        <footer className="w-full border-t border-white/10 pt-12 pb-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Бренд колонка */}
            <div className="md:col-span-5 space-y-5">
              <a href="#" className="inline-block">
                <img src="/logo-green.svg" alt="Still Wilds" className="w-[200px]" />
              </a>
              <p className="max-w-sm text-sm leading-relaxed text-gray-300 md:text-base">
                Canada's most complete travel guide — mountains, wildlife, cities and everything in between.
              </p>
              
              {/* Соцсети */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="#" 
                  aria-label="Twitter / X" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Facebook" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="YouTube" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Навигационные колонки */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              {FOOTER_LINKS.map((column) => (
                <div key={column.title} className="space-y-4">
                  <p className="type-tag text-sm tracking-[0.18em] text-gray-300">
                    {column.title.toUpperCase()}
                  </p>
                  <ul className="space-y-3 text-xs text-gray-400">
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="group flex items-center gap-3 transition-colors hover:text-white"
                        >
                          <span
                            className="icon-mask h-[18px] w-[18px] shrink-0"
                            style={{ '--icon-src': `url('/icons/${item.icon}')` }}
                            aria-hidden="true"
                          />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Нижняя строчка копирайта и статуса */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Still Wilds · Data sourced from Parks Canada · Made with 🍁 in Canada</p>
            
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#6ee7a1] bg-[#38A169]/10 border border-[#38A169]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#38A169] animate-pulse" />
              <span>Parks Status: 46 Open · 2 Seasonal</span>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
