import { lazy, Suspense, useState } from 'react';
import {
  AlertTriangle,
  BedDouble,
  CloudSun,
  ExternalLink,
  Fuel,
  Gauge,
  Map as MapIcon,
  Moon,
  Navigation,
  Satellite,
  Signal,
  Utensils,
} from 'lucide-react';
import './RouteExplorer.css';

// Интерактивный блок маршрута: слева большая карта (Dark / Satellite),
// справа рамка "Trail Map", карточка выбранного маршрута и 6 вкладок.
// Вкладки Fuel Gap / Hotels / Eats выводят свои точки на карту,
// Cell Service перекрашивает линию маршрута по качеству связи.

const RouteMap = lazy(() => import('./RouteMap'));

const CELL_COLORS = { good: '#38a169', fair: '#e0b84a', poor: '#e05a4a' };
const CELL_LABELS = { good: 'Good signal', fair: 'Patchy', poor: 'No / weak signal' };
const WEATHER_STYLES = {
  good: { color: '#6ee7a1', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.1)' },
  fair: { color: '#e0b84a', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.1)' },
  caution: { color: '#7fb3ef', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  nogo: { color: '#f08a7a', border: 'rgba(224,90,74,0.5)', bg: 'rgba(224,90,74,0.1)' },
};
const MONTH_LEGEND = [
  { level: 'good', label: 'Best' },
  { level: 'fair', label: 'Mixed' },
  { level: 'caution', label: 'Winter roads' },
];

const TABS = [
  { id: 'numbers', label: 'Honest Numbers', icon: Gauge },
  { id: 'fuel', label: 'Fuel Gap', icon: Fuel },
  { id: 'cell', label: 'Cell Service', icon: Signal },
  { id: 'weather', label: 'Weather Driving', icon: CloudSun },
  { id: 'hotels', label: 'Hotels', icon: BedDouble },
  { id: 'eats', label: 'Eats', icon: Utensils },
];

// ---------------------------------------------------------------------
// Вкладки
// ---------------------------------------------------------------------

function NumbersTab({ data }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {data.stats.map((s) => (
          <div key={s.key} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="type-tag text-[9px] tracking-[0.12em] text-gray-500">{s.label}</p>
            <p className="type-stat mt-1.5 flex items-baseline gap-1 text-2xl leading-none text-white">
              {s.value}
              {s.unit && <span className="text-xs text-[#7fb3ef]">{s.unit}</span>}
            </p>
          </div>
        ))}
      </div>
      <ul className="space-y-2">
        {data.stats.map((s) => (
          <li key={s.key} className="text-xs leading-relaxed text-gray-400">
            <span className="text-gray-200">{s.label}:</span> {s.note}
          </li>
        ))}
      </ul>

      <div>
        <p className="type-tag mb-2 text-[9px] tracking-[0.14em] text-gray-500">Leg by Leg</p>
        <div className="space-y-2">
          {data.legs.map((leg) => (
            <div key={leg.from} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-white">{leg.from} → {leg.to}</p>
                <span className="type-stat text-sm text-[#7fb3ef]">{leg.km} km</span>
              </div>
              <p className="mt-1 text-[11px] text-gray-500">{leg.road} · {leg.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PoiList({ items, kind, hovered, onFocus }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, idx) => {
        const id = `${kind}-${idx}`;
        return (
          <li key={id}>
            <button
              type="button"
              onMouseEnter={() => onFocus({ id, fly: false })}
              onMouseLeave={() => onFocus(null)}
              onFocus={() => onFocus({ id, fly: false })}
              onClick={() => onFocus({ id, fly: true })}
              className={`poi-row flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                hovered === id ? 'is-active' : ''
              } ${item.warn ? 'poi-row--warn' : ''}`}
              style={{ '--poi': kind === 'fuel' ? '#e0b84a' : kind === 'hotels' ? '#a78bfa' : '#e08a4a' }}
            >
              <span className="type-stat w-12 shrink-0 text-right text-[11px] text-gray-500">{item.km} km</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-white">{item.name}</span>
                <span className="block truncate text-[11px] text-gray-500">
                  {[item.brand ?? item.type, item.town].filter(Boolean).join(' · ')}
                  {item.note && <span className={item.warn ? 'text-[#e0b84a]' : ''}> — {item.note}</span>}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function FuelTab({ data, total, fromName, hovered, onFocus }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2.5 rounded-xl border border-[#e0b84a]/30 bg-[#e0b84a]/[0.07] p-3 text-xs leading-relaxed text-[#f0d58a]">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        {/* Разрыв показываем, только если цифра проверена вручную:
            выгрузка OpenStreetMap неполная, и посчитанный по ней
            "самый длинный разрыв" завышает реальный. */}
        <p>
          {data.longestGapKm != null && (
            <span className="type-stat">Longest gap: {data.longestGapKm} km.</span>
          )}{' '}
          {data.summary}
        </p>
      </div>

      {/* Полоса маршрута с отметками заправок */}
      <div className="px-1">
        <div className="relative h-2 rounded-full bg-white/10">
          {data.items.map((item, idx) => (
            <span
              key={idx}
              className={`absolute top-1/2 h-3.5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full ${item.warn ? 'bg-[#e08a4a]' : 'bg-[#e0b84a]'}`}
              style={{ left: `${(item.km / total) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-gray-500">
          <span>{fromName} · 0 km</span>
          <span>{total} km</span>
        </div>
      </div>

      <PoiList items={data.items} kind="fuel" hovered={hovered} onFocus={onFocus} />
    </div>
  );
}

function CellTab({ data, total }) {
  return (
    <div className="space-y-4">
      <div className="flex h-3 overflow-hidden rounded-full">
        {data.segments.map((s) => (
          <span key={s.fromKm} style={{ width: `${((s.toKm - s.fromKm) / total) * 100}%`, background: CELL_COLORS[s.level] }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-[11px] text-gray-400">
        {Object.entries(CELL_LABELS).map(([level, label]) => (
          <span key={level} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: CELL_COLORS[level] }} />
            {label}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {data.segments.map((s) => (
          <li key={s.fromKm} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full" style={{ background: CELL_COLORS[s.level] }} />
            <div>
              <p className="text-sm text-white">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                {s.fromKm}–{s.toKm} km · <span style={{ color: CELL_COLORS[s.level] }}>{CELL_LABELS[s.level]}</span> · {s.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[11px] leading-relaxed text-gray-500">{data.note}</p>
    </div>
  );
}

function WeatherTab({ data }) {
  return (
    <div className="space-y-4">
      <p className="text-xs leading-relaxed text-gray-400">{data.intro}</p>

      <div>
        <div className="grid grid-cols-12 gap-1">
          {data.months.map(({ m, level }) => (
            <div key={m} className="flex flex-col items-center gap-1">
              <span className="h-6 w-full rounded-md" style={{ background: WEATHER_STYLES[level].color, opacity: 0.7 }} />
              <span className="text-[9px] text-gray-500">{m}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-400">
          {MONTH_LEGEND.map(({ level, label }) => (
            <span key={level} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: WEATHER_STYLES[level].color }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {data.levels.map((block) => {
        const st = WEATHER_STYLES[block.level];
        return (
          <div key={block.level} className="rounded-xl border p-3.5" style={{ borderColor: st.border, background: st.bg }}>
            <p className="type-stat text-sm" style={{ color: st.color }}>{block.title}</p>
            <ul className="mt-2 space-y-1.5">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-gray-300">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: st.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="flex flex-col gap-1.5">
        {data.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#7fb3ef] hover:text-white"
          >
            <ExternalLink className="h-3 w-3" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Основной блок
// ---------------------------------------------------------------------

export default function RouteExplorer({ route }) {
  const explorer = route.explorer;
  const [tab, setTab] = useState('numbers');
  const [mode, setMode] = useState('dark');
  const [focus, setFocus] = useState(null); // { id, fly } — из списка в карту
  const [mapHover, setMapHover] = useState(null); // id — из карты в список

  const total = Number(explorer.numbers.stats.find((s) => s.key === 'distance')?.value) || 185;
  const hovered = mapHover ?? focus?.id ?? null;
  const driveTime = explorer.numbers.stats.find((s) => s.key === 'time');

  const selectTab = (id) => {
    setTab(id);
    setFocus(null);
    setMapHover(null);
  };

  return (
    <section id="trail-map" className="scroll-mt-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* ---------------- КАРТА ---------------- */}
        <div className="route-map-frame relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#081226] sm:h-[520px] lg:h-[760px]">
          <Suspense fallback={<div className="absolute inset-0 animate-pulse bg-[#0b1730]" />}>
            <RouteMap explorer={explorer} mode={mode} tab={tab} focus={focus} onHover={setMapHover} />
          </Suspense>

          {/* Dark / Satellite */}
          <div className="absolute right-3 top-3 z-10 flex gap-1 rounded-xl border border-white/15 bg-[#070D19]/75 p-1 backdrop-blur-md">
            {[
              { id: 'dark', label: 'Dark', icon: Moon },
              { id: 'satellite', label: 'Satellite', icon: Satellite },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                aria-pressed={mode === id}
                title={label}
                className={`type-button flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs transition-colors ${
                  mode === id ? 'bg-[#488CDC] text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Легенда связи поверх карты */}
          {tab === 'cell' && (
            <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-3 rounded-xl border border-white/15 bg-[#070D19]/80 px-3 py-2 text-[11px] text-gray-300 backdrop-blur-md">
              {Object.entries(CELL_LABELS).map(([level, label]) => (
                <span key={level} className="flex items-center gap-1.5">
                  <span className="h-2 w-4 rounded-full" style={{ background: CELL_COLORS[level] }} />
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ---------------- ПАНЕЛЬ ---------------- */}
        <div className="flex min-h-0 flex-col gap-3 lg:h-[760px]">
          {/* Рамка Trail Map */}
          <div className="glass glass--ice glass--sm flex items-center gap-3 rounded-2xl px-4 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#488CDC]/45 bg-[#488CDC]/12 text-[#7fb3ef]">
              <MapIcon className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="type-stat text-base tracking-wide text-white">Trail Map</p>
              <p className="text-[11px] text-gray-500">Hover the points · drag to explore</p>
            </div>
          </div>

          {/* Выбранный маршрут */}
          <div className="glass glass--sm rounded-2xl p-4" style={{ '--glass-tint': '72, 140, 220' }}>
            <p className="type-tag text-[9px] tracking-[0.14em] text-gray-500">Selected Route</p>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="flex flex-col items-center self-stretch py-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#488CDC] text-[10px] font-bold text-white">A</span>
                <span className="my-1 w-px flex-1 bg-gradient-to-b from-[#488CDC] to-[#9cc4f2]/40" />
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#9cc4f2] text-[10px] font-bold text-[#9cc4f2]">B</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="truncate text-sm text-white">{explorer.from.name}</p>
                {explorer.via?.length > 0 && (
                  <p className="truncate text-[11px] text-gray-500">via {explorer.via.join(' · ')}</p>
                )}
                <p className="truncate text-sm text-white">{explorer.to.name}</p>
              </div>
              <div className="text-right">
                <p className="type-stat text-xl leading-none text-white">
                  {total}<span className="ml-0.5 text-xs text-[#7fb3ef]">km</span>
                </p>
                <p className="mt-1.5 flex items-center justify-end gap-1 text-[11px] text-gray-400">
                  <Navigation className="h-3 w-3" />
                  {driveTime ? `${driveTime.value}${driveTime.unit}` : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Вкладки */}
          <div className="glass glass--sm flex min-h-0 flex-1 flex-col rounded-2xl p-3" style={{ '--glass-tint': '72, 140, 220' }}>
            <div role="tablist" className="grid grid-cols-3 gap-1.5">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={tab === id}
                  onClick={() => selectTab(id)}
                  className={`explorer-tab flex flex-col items-center gap-1 rounded-xl border px-1.5 py-2.5 text-center transition-colors ${
                    tab === id ? 'is-active' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-[11px] leading-tight">{label}</span>
                </button>
              ))}
            </div>

            <div role="tabpanel" className="explorer-panel mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
              {tab === 'numbers' && <NumbersTab data={explorer.numbers} />}
              {tab === 'fuel' && <FuelTab data={explorer.fuel} total={total} fromName={explorer.from.name} hovered={hovered} onFocus={setFocus} />}
              {tab === 'cell' && <CellTab data={explorer.cell} total={total} />}
              {tab === 'weather' && <WeatherTab data={explorer.weather} />}
              {tab === 'hotels' && <PoiList items={explorer.hotels} kind="hotels" hovered={hovered} onFocus={setFocus} />}
              {tab === 'eats' && <PoiList items={explorer.eats} kind="eats" hovered={hovered} onFocus={setFocus} />}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[11px] text-gray-600">
        Route line and places from OpenStreetMap contributors. Hours and services change — confirm before you rely on them.
      </p>
    </section>
  );
}
