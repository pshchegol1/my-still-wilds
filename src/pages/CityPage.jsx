import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  Calendar,
  Car,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Compass,
  Eye,
  ExternalLink,
  Info,
  MapPin,
  Plane,
  RotateCw,
  Sparkles,
  Sun,
  Tent,
  Thermometer,
  Train,
  Utensils,
  Wind,
} from 'lucide-react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import './CityPage.css';

// Коды погоды WMO (Open-Meteo) -> иконка + подпись. Покрывает диапазоны,
// которых реально стоит ждать от прогноза, без экзотики вроде града.
const WEATHER_CODES = {
  0: { label: 'Clear Sky', icon: Sun },
  1: { label: 'Mostly Clear', icon: Sun },
  2: { label: 'Partly Cloudy', icon: Cloud },
  3: { label: 'Overcast', icon: Cloud },
  45: { label: 'Fog', icon: CloudFog },
  48: { label: 'Fog', icon: CloudFog },
  51: { label: 'Light Drizzle', icon: CloudDrizzle },
  53: { label: 'Drizzle', icon: CloudDrizzle },
  55: { label: 'Dense Drizzle', icon: CloudDrizzle },
  61: { label: 'Light Rain', icon: CloudRain },
  63: { label: 'Rain', icon: CloudRain },
  65: { label: 'Heavy Rain', icon: CloudRain },
  66: { label: 'Freezing Rain', icon: CloudRain },
  67: { label: 'Freezing Rain', icon: CloudRain },
  71: { label: 'Light Snow', icon: CloudSnow },
  73: { label: 'Snow', icon: CloudSnow },
  75: { label: 'Heavy Snow', icon: CloudSnow },
  77: { label: 'Snow Grains', icon: CloudSnow },
  80: { label: 'Rain Showers', icon: CloudRain },
  81: { label: 'Rain Showers', icon: CloudRain },
  82: { label: 'Violent Showers', icon: CloudRain },
  85: { label: 'Snow Showers', icon: CloudSnow },
  86: { label: 'Snow Showers', icon: CloudSnow },
  95: { label: 'Thunderstorm', icon: CloudLightning },
  96: { label: 'Thunderstorm', icon: CloudLightning },
  99: { label: 'Thunderstorm', icon: CloudLightning },
};

const WEATHER_REFRESH_MS = 10 * 60 * 1000;

function useLiveWeather(coords) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!coords) return undefined;
    let cancelled = false;

    const load = () => {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}` +
          '&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code' +
          '&hourly=visibility&timezone=auto&temperature_unit=celsius&windspeed_unit=kmh',
      )
        .then((res) => res.json())
        .then((data) => {
          if (cancelled || !data?.current) return;
          const hourIndex = data.hourly?.time?.indexOf(data.current.time.slice(0, 13) + ':00');
          const visibilityM = hourIndex >= 0 ? data.hourly.visibility[hourIndex] : null;
          setWeather({
            temperature: data.current.temperature_2m,
            feelsLike: data.current.apparent_temperature,
            humidity: data.current.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m,
            visibilityKm: visibilityM != null ? visibilityM / 1000 : null,
            weatherCode: data.current.weather_code,
            updatedAt: new Date(),
          });
        })
        .catch(() => {});
    };

    load();
    const interval = setInterval(load, WEATHER_REFRESH_MS);
    return () => { cancelled = true; clearInterval(interval); };
  }, [coords]);

  return weather;
}

// Тот же язык риска/акцентов, что и в ParkPage.jsx (PARK_STYLES), плюс
// фиолетовый — для культурных/арт-тегов, которых у парков не было.
const CITY_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  olive: { text: '#b8d24a', solid: '#94ab35', border: 'rgba(184,210,74,0.45)', bg: 'rgba(184,210,74,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  purple: { text: '#b98af0', solid: '#8b5fc9', border: 'rgba(185,138,240,0.45)', bg: 'rgba(185,138,240,0.12)' },
};

function SectionTag({ icon: Icon, children }) {
  return (
    <span className="city-tag type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.14em]">
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

const TRANSPORT_ICONS = { '✈️': Plane, '🚂': Train, '🚇': Bus, '🚗': Car, '🚌': Bus };

export default function CityPage({ city }) {
  const accent = CITY_STYLES.blue;
  const weather = useLiveWeather(city.coords);
  const weatherInfo = weather ? WEATHER_CODES[weather.weatherCode] ?? { label: 'Unknown', icon: Cloud } : null;
  const WeatherIcon = weatherInfo?.icon ?? Cloud;

  return (
    <div className="city-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white">
      {/* ================================================= */}
      {/* ГЕРОЙ                                              */}
      {/* ================================================= */}
      <header className="relative h-[520px] w-full overflow-hidden md:h-[700px]">
        <BackgroundVideo
          src={city.heroVideo}
          poster={city.heroImage}
          alt={city.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/70 via-[#070D19]/10 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate('/province/bc')}
              className="type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {city.province}
            </button>

            <div className="max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: CITY_STYLES.blue.text, borderColor: CITY_STYLES.blue.border, background: CITY_STYLES.blue.bg }}
              >
                <MapPin className="h-3 w-3" />
                {city.tag}
              </span>
              <h1 className="text-[40px] leading-[1.02] tracking-wide text-white md:text-[58px]">
                {city.name}
              </h1>
              <p className="type-display text-sm text-[#488CDC]">{city.subtitle}</p>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">{city.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {city.actions.map((action, idx) => (
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
      <div className="relative z-10 mx-auto -mt-64 max-w-[1180px] px-6 md:-mt-[22rem]">
        <div
          className="glass glass--sm ml-auto w-full max-w-md space-y-4 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          style={{ '--glass-tint': '72, 140, 220' }}
        >
          <p className="type-tag text-[10px] tracking-[0.14em] text-gray-400">City Facts</p>
          <div className="grid grid-cols-2 gap-3">
            {city.quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="type-tag text-[9px] tracking-[0.1em] text-gray-500">{fact.label}</p>
                <p className="type-stat mt-1 text-sm text-white">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {city.badges.map((badge) => (
              <span
                key={badge}
                className="type-tag rounded-full border px-2.5 py-0.5 text-[8px] tracking-[0.14em]"
                style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="type-tag mb-2 text-[8px] tracking-[0.14em] text-gray-500">Best Seasons</p>
            <div className="grid grid-cols-4 gap-1.5">
              {city.bestSeasons.map((season) => {
                const style = CITY_STYLES[season.level] ?? CITY_STYLES.safe;
                return (
                  <div
                    key={season.label}
                    className="rounded-md border p-1.5 text-center"
                    style={{ borderColor: style.border, background: style.bg }}
                  >
                    <p className="text-sm">{season.icon}</p>
                    <p className="mt-0.5 text-[8px] font-semibold" style={{ color: style.text }}>{season.label}</p>
                    <p className="text-[7px] text-gray-500">{'★'.repeat(season.rating)}{'☆'.repeat(5 - season.rating)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-10">

        {/* ================================================= */}
        {/* ПОГОДА                                             */}
        {/* ================================================= */}
        {weather && (
          <section className="space-y-7">
            <SectionTag icon={RotateCw}>Live Weather</SectionTag>
            <h2 className="text-[30px] tracking-wide md:text-[38px]">
              Today's Weather in <span style={{ color: CITY_STYLES.blue.text }}>{city.name}</span>
            </h2>

            <div
              className="relative overflow-hidden rounded-2xl p-6 md:p-7"
              style={{ background: 'linear-gradient(115deg, #9333c9 0%, #4c2e9e 45%, #12203f 85%)' }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <WeatherIcon className="mx-auto h-12 w-12 text-white/90" />
                    <p className="mt-1 text-xs text-[#a8f0c6]">{weatherInfo.label}</p>
                  </div>
                  <div>
                    <p className="type-stat text-5xl text-white">{Math.round(weather.temperature)}°C</p>
                    <p className="mt-1 text-sm text-gray-300">{city.name}, {city.region ?? 'BC'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    <p className="type-tag text-[9px] tracking-[0.1em] text-gray-300">Feels Like</p>
                    <p className="type-stat mt-1 text-lg text-white">{Math.round(weather.feelsLike)}°C</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    <p className="type-tag text-[9px] tracking-[0.1em] text-gray-300">Humidity</p>
                    <p className="type-stat mt-1 text-lg text-white">{Math.round(weather.humidity)}%</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    <p className="type-tag text-[9px] tracking-[0.1em] text-gray-300">Wind</p>
                    <p className="type-stat mt-1 text-lg text-white">{Math.round(weather.windSpeed)} km/h</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    <p className="type-tag text-[9px] tracking-[0.1em] text-gray-300">Visibility</p>
                    <p className="type-stat mt-1 text-lg text-white">
                      {weather.visibilityKm != null ? `${weather.visibilityKm.toFixed(1)} km` : '—'}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end lg:text-right">
                  <p className="text-[11px] text-gray-300">
                    Updated {weather.updatedAt.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
                  </p>
                  <p className="text-[11px] text-gray-400">Auto-refresh every 10 min</p>
                  <a
                    href={`https://www.google.com/search?q=weather+${encodeURIComponent(city.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-button mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs text-white transition-colors hover:bg-white/25"
                  >
                    Full Forecast
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {weather && <hr className="border-white/10" />}

        {/* ================================================= */}
        {/* РАЙОНЫ                                             */}
        {/* ================================================= */}
        <section id="neighbourhoods" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Compass}>Neighbourhoods</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Explore <span style={{ color: CITY_STYLES.blue.text }}>{city.name}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.neighbourhoods.map((n) => {
              const style = CITY_STYLES[n.tagLevel] ?? CITY_STYLES.blue;
              return (
                <div key={n.name} className="group relative h-56 overflow-hidden rounded-2xl">
                  <img
                    src={n.image}
                    alt={n.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5">
                    <span
                      className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[8px] tracking-[0.12em]"
                      style={{ color: style.text, borderColor: style.border, background: style.bg }}
                    >
                      {n.tag}
                    </span>
                    <p className="type-stat text-base text-white">{n.name}</p>
                    <p className="text-[11px] text-gray-300">{n.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ДОСТОПРИМЕЧАТЕЛЬНОСТИ                              */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Sparkles}>Must See</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Top <span style={{ color: CITY_STYLES.gold.text }}>Attractions</span> in {city.name}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.attractions.map((attr) => (
              <div key={attr.name} className="glass glass--sm rounded-2xl p-5">
                <p className="text-3xl">{attr.icon}</p>
                <p className="type-stat mt-3 text-sm text-white">{attr.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{attr.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {attr.tags.map((tag) => {
                    const style = CITY_STYLES[tag.level] ?? CITY_STYLES.safe;
                    return (
                      <span
                        key={tag.label}
                        className="type-tag rounded-full border px-2.5 py-0.5 text-[8px] tracking-[0.1em]"
                        style={{ color: style.text, borderColor: style.border, background: style.bg }}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ОТКРЫТЫЙ ВОЗДУХ                                    */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={MapPin}>Outdoor Adventures</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Get <span style={{ color: CITY_STYLES.safe.text }}>Outdoors</span> Near {city.name}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {city.outdoor.map((item) => (
              <div key={item.name} className="glass glass--sm rounded-2xl p-5">
                <p className="text-2xl">{item.icon}</p>
                <p className="type-stat mt-3 text-xs text-white">{item.name}</p>
                <p className="mt-1 text-[10px] font-semibold" style={{ color: CITY_STYLES.safe.text }}>{item.dist}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЕДА                                                */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Utensils}>Food Scene</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            What to <span style={{ color: CITY_STYLES.danger.text }}>Eat</span> in {city.name}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.food.map((item) => {
              const style = CITY_STYLES[item.areaLevel] ?? CITY_STYLES.blue;
              return (
                <div key={item.title} className="glass glass--sm rounded-2xl p-5">
                  <p className="text-3xl">{item.icon}</p>
                  <p className="type-stat mt-3 text-sm text-white">{item.title}</p>
                  <span
                    className="type-tag mt-2 inline-block rounded-full border px-2.5 py-0.5 text-[8px] tracking-[0.12em]"
                    style={{ color: style.text, borderColor: style.border, background: style.bg }}
                  >
                    {item.area}
                  </span>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{item.text}</p>
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
            When to <span style={{ color: CITY_STYLES.gold.text }}>Visit {city.name}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {city.seasons.map((season) => {
              const style = CITY_STYLES[season.level] ?? CITY_STYLES.safe;
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
        {/* КАК ДОБРАТЬСЯ                                      */}
        {/* ================================================= */}
        <section id="getting-there" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Car}>Getting There</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            How to <span style={{ color: CITY_STYLES.blue.text }}>Get to {city.name}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {city.gettingThere.map((option) => {
              const Icon = TRANSPORT_ICONS[option.icon] ?? Car;
              return (
                <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                  <span
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ color: CITY_STYLES.blue.text, borderColor: CITY_STYLES.blue.border, background: CITY_STYLES.blue.bg }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="type-stat text-sm text-white">{option.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                  <p className="mt-3 text-[11px] font-semibold" style={{ color: CITY_STYLES.blue.text }}>{option.time}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ГДЕ ОСТАНОВИТЬСЯ                                   */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Tent}>Where to Stay</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Accommodation <span style={{ color: CITY_STYLES.gold.text }}>in and Near {city.name}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {city.stay.map((option) => (
              <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                <p className="text-3xl">{option.icon}</p>
                <p className="type-stat mt-3 text-sm text-white">{option.title}</p>
                <p className="mt-1 text-[10px] font-semibold" style={{ color: CITY_STYLES.blue.text }}>{option.area}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                {option.links?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {option.links.map((link) => {
                      const style = CITY_STYLES[link.level] ?? CITY_STYLES.safe;
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

        {city.practical && (
          <>
            <hr className="border-white/10" />
            <section className="space-y-7">
              <SectionTag icon={Info}>Practical Information</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                Everything You <span style={{ color: CITY_STYLES.safe.text }}>Need to Know</span>
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {city.practical.map((tip) => (
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
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                             */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
          <p>© 2026 StillWilds.ca</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: CITY_STYLES.blue.text }} />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
