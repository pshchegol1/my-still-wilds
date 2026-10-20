import { useState } from 'react';
import { ArrowRight, ChevronDown, Flag, MapPin, Mountain, Search } from 'lucide-react';
import { navigate } from '../router';
import './RouteExplorer.css';
import { TRIP_PROVINCES, TRIP_CITIES, ROUTE_SELECTION, findTripRoute, listTripRoutes } from '../data/routes/tripSearch';

const READY_ROUTES = listTripRoutes();

// Города сгруппированы по своей провинции для <optgroup> — независимо
// от того, какая провинция выбрана как "куда" (парк).
const CITIES_BY_PROVINCE = TRIP_CITIES.reduce((acc, city) => {
  (acc[city.provinceId] ??= []).push(city);
  return acc;
}, {});

// Форма "Plan Your Drive": провинция → город (откуда) → парк (куда).
// Если для комбинации есть готовая страница — ведёт на неё; если это
// текущая страница — прокручивает к карте (#trail-map). Для остальных
// комбинаций показывает честное "Coming soon".

function Field({ icon: Icon, label, value, onChange, children, disabled }) {
  return (
    <label className={`group relative flex min-w-0 flex-1 flex-col gap-1.5 ${disabled ? 'opacity-50' : ''}`}>
      <span className="type-tag flex items-center gap-1.5 text-[10px] tracking-[0.14em] text-gray-500">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="trip-select w-full cursor-pointer appearance-none rounded-xl border border-white/12 bg-[#0b1526]/80 py-3 pl-4 pr-10 text-sm text-white outline-none transition-colors hover:border-white/30 focus:border-[#488CDC] disabled:cursor-not-allowed"
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </span>
    </label>
  );
}

// onSelect — для страниц, которые показывают маршрут у себя же
// (Road Trips): вместо перехода на /route/:slug отдаём slug наверх.
export default function TripSearchForm({ currentSlug, provinceId, onSelect, title = 'Plan Your Drive' }) {
  const initial = ROUTE_SELECTION[currentSlug] ?? {};
  const startProvince = initial.province ?? provinceId ?? TRIP_PROVINCES[0].id;
  const provinceData = TRIP_PROVINCES.find((p) => p.id === startProvince) ?? TRIP_PROVINCES[0];

  const [province, setProvince] = useState(provinceData.id);
  const [city, setCity] = useState(
    initial.city
      ?? CITIES_BY_PROVINCE[startProvince]?.[0]?.id
      ?? TRIP_CITIES[0]?.id
      ?? '',
  );
  const [park, setPark] = useState(initial.park ?? provinceData.parks[0]?.id ?? '');
  const [missing, setMissing] = useState(false);

  const active = TRIP_PROVINCES.find((p) => p.id === province) ?? TRIP_PROVINCES[0];

  // Город отправления — любой город Канады, не зависит от выбранной
  // провинции (которая определяет только парк назначения), поэтому
  // смену провинции не сбрасывает выбор города.
  const changeProvince = (id) => {
    const next = TRIP_PROVINCES.find((p) => p.id === id);
    setProvince(id);
    setPark(next?.parks[0]?.id ?? '');
    setMissing(false);
  };

  // При выборе города подставляем его провинцию: чаще всего едут внутри
  // своей провинции, так форма заполняется сама. Межпровинциальные
  // поездки остаются возможны — провинцию можно переключить после.
  const changeCity = (id) => {
    setCity(id);
    setMissing(false);
    const home = TRIP_CITIES.find((c) => c.id === id)?.provinceId;
    const next = TRIP_PROVINCES.find((p) => p.id === home);
    if (next && next.id !== province) {
      setProvince(next.id);
      setPark(next.parks[0]?.id ?? '');
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const slug = findTripRoute({ province, city, park });
    if (!slug) {
      setMissing(true);
      return;
    }
    setMissing(false);
    if (onSelect) {
      onSelect(slug);
    } else if (slug === currentSlug) {
      document.getElementById('trail-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/route/${slug}`);
    }
  };

  return (
    <form onSubmit={submit} className="glass glass--ice glass--sm rounded-2xl p-5 md:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Search className="h-4 w-4 text-[#488CDC]" />
        <p className="type-stat text-sm tracking-wide text-white">{title}</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <Field icon={MapPin} label="Province" value={province} onChange={changeProvince}>
          {TRIP_PROVINCES.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </Field>
        <Field icon={Flag} label="From City" value={city} onChange={changeCity}>
          {TRIP_PROVINCES.map((p) => {
            const cities = CITIES_BY_PROVINCE[p.id];
            if (!cities?.length) return null;
            return (
              <optgroup key={p.id} label={p.name}>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </optgroup>
            );
          })}
        </Field>
        <Field icon={Mountain} label="To Park" value={park} onChange={(v) => { setPark(v); setMissing(false); }}>
          {active.parks.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </Field>

        <button
          type="submit"
          className="type-button inline-flex h-[46px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#488CDC] px-6 text-white transition-colors hover:bg-[#3a71b3]"
        >
          Show Route
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {missing && (
        <div className="mt-4 text-xs leading-relaxed text-[#e0b84a]">
          <p>This drive is coming soon. Ready now:</p>
          <ul className="mt-2 space-y-1">
            {READY_ROUTES.map(({ province, drives }) => (
              <li key={province}>
                <span className="type-stat">{province}</span> — {drives.join(' · ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
