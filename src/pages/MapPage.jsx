import { useState } from 'react';
import { ArrowLeft, ArrowRight, Users, X } from 'lucide-react';
import { navigate } from '../router';
import { PROVINCES_DATA } from '../data/mockData';
import { getProvinceDetail } from '../data/provinces';
import './MapPage.css';

// Схематичная (не географическая) карта — прямоугольные "плитки"
// провинций/территорий, разложенные так, чтобы примерно повторять их
// взаимное расположение на реальной карте (территории сверху, прерии
// и центр посередине, Атлантика и Ньюфаундленд справа снизу).
const VIEW = { w: 1080, h: 560 };

const SHAPES = {
  yt: { x: 20, y: 20, w: 130, h: 140 },
  nt: { x: 165, y: 20, w: 150, h: 140 },
  nu: { x: 330, y: 20, w: 340, h: 140 },

  bc: { x: 20, y: 180, w: 130, h: 190 },
  ab: { x: 165, y: 180, w: 130, h: 190 },
  sk: { x: 310, y: 180, w: 130, h: 190 },
  mb: { x: 455, y: 180, w: 130, h: 190 },
  on: { x: 600, y: 180, w: 190, h: 190 },
  qc: { x: 805, y: 180, w: 150, h: 190 },
  nl: { x: 965, y: 180, w: 90, h: 350 },

  nb: { x: 600, y: 390, w: 100, h: 140 },
  ns: { x: 710, y: 390, w: 110, h: 140 },
  pe: { x: 695, y: 350, w: 55, h: 45 },
};

// Свой набор различимых цветов для плиток — акценты провинций в их
// собственных данных местами повторяются (mb/nt оба #0ea5e9), а на
// карте все 13 должны читаться отдельно друг от друга.
const TILE_COLORS = {
  yt: '#4ade80', nt: '#22d3ee', nu: '#60a5fa',
  bc: '#38a169', ab: '#e08a4a', sk: '#e0b84a', mb: '#c026d3',
  on: '#3b82f6', qc: '#a855f7', nl: '#f97316',
  nb: '#d97706', ns: '#0891b2', pe: '#ec4899',
};

// Простая детерминированная раскладка городов внутри плитки провинции
// — не реальные координаты, а сетка, чтобы точки не накладывались.
function cityLayout(count, w, h) {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  const padX = w * 0.18;
  const padY = h * 0.18;
  const stepX = cols > 1 ? (w - padX * 2) / (cols - 1) : 0;
  const stepY = rows > 1 ? (h - padY * 2) / (rows - 1) : 0;
  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: cols > 1 ? padX + col * stepX : w / 2,
      y: rows > 1 ? padY + row * stepY : h / 2,
    };
  });
}

function CityCrestSmall({ city }) {
  const [failed, setFailed] = useState(false);
  if (!city.crest || failed) {
    return (
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
        style={{ background: `${city.accent}33`, border: `1px solid ${city.accent}66`, color: city.accent }}
      >
        {city.name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={city.crest}
      alt={`Coat of arms of ${city.name}`}
      className="h-16 w-16 shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function MapPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const selectedProvince = selectedId
    ? PROVINCES_DATA.find((p) => p.id === selectedId)
    : null;
  const selectedDetail = selectedId ? getProvinceDetail(selectedId) : null;
  const cities = selectedDetail?.cities?.items ?? [];

  const viewCx = VIEW.w / 2;
  const viewCy = VIEW.h / 2;

  return (
    <div className="map-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      <div className="mx-auto max-w-[1440px] px-6 py-7">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mt-8 space-y-3 text-center">
          <p className="type-tag text-[11px] tracking-[0.14em] text-[#D96B32]">Explore The Map</p>
          <h1 className="text-[36px] tracking-wide text-white md:text-[52px]">
            {selectedProvince ? (
              <>
                {selectedProvince.name.split(' ')[0]} <span className="text-[#D96B32]">{selectedProvince.name.split(' ').slice(1).join(' ')}</span>
              </>
            ) : (
              <>
                Every Province, <span className="text-[#D96B32]">One Map</span>
              </>
            )}
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            {selectedProvince
              ? `${cities.length} cities to discover. Click a city to see more.`
              : 'Click a province or territory to zoom in and see its cities.'}
          </p>
        </div>

        <div className="map-stage relative mx-auto mt-10 w-full max-w-[980px]">
          {selectedId && (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="glass glass--sm absolute left-2 top-2 z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back To Map
            </button>
          )}

          <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className="w-full" style={{ overflow: 'visible' }}>
            {PROVINCES_DATA.map((p) => {
              const shape = SHAPES[p.id];
              if (!shape) return null;
              const isSelected = selectedId === p.id;
              const isDimmed = selectedId && !isSelected;
              const cx = shape.x + shape.w / 2;
              const cy = shape.y + shape.h / 2;
              const scale = Math.min((VIEW.w * 0.82) / shape.w, (VIEW.h * 0.82) / shape.h);
              const tx = viewCx - cx;
              const ty = viewCy - cy;

              return (
                <g
                  key={p.id}
                  className="map-tile-group"
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: isSelected ? `translate(${tx}px, ${ty}px) scale(${scale})` : 'none',
                    opacity: isDimmed ? 0 : 1,
                    pointerEvents: isDimmed ? 'none' : 'auto',
                  }}
                >
                  <rect
                    x={shape.x}
                    y={shape.y}
                    width={shape.w}
                    height={shape.h}
                    rx="16"
                    className="map-tile"
                    fill={TILE_COLORS[p.id]}
                    fillOpacity={hoveredId === p.id && !selectedId ? 0.95 : 0.62}
                    stroke={hoveredId === p.id && !selectedId ? '#fff' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={hoveredId === p.id && !selectedId ? 2.5 : 1.5}
                    onMouseEnter={() => !selectedId && setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId((id) => (id === p.id ? null : id))}
                    onClick={() => !selectedId && setSelectedId(p.id)}
                    style={{ cursor: selectedId ? 'default' : 'pointer', transition: 'fill-opacity 200ms, stroke 200ms' }}
                  />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="map-tile-label"
                    style={{ fontSize: isSelected ? 10 : 15, fontFamily: "'Cinzel', Georgia, serif", fontWeight: 700, fill: '#fff', pointerEvents: 'none', opacity: isSelected ? 0 : 1, transition: 'opacity 200ms' }}
                  >
                    {p.id.toUpperCase()}
                  </text>

                  {/* Города — вложены в ту же группу, поэтому масштабируются
                      и двигаются вместе с провинцией при зуме. */}
                  {isSelected && cities.length > 0 && cityLayout(cities.length, shape.w, shape.h).map((pos, i) => {
                    const city = cities[i];
                    const px = shape.x + pos.x;
                    const py = shape.y + pos.y;
                    return (
                      <g
                        key={city.name}
                        className="map-city-dot"
                        style={{ transformOrigin: `${px}px ${py}px` }}
                        onClick={(e) => { e.stopPropagation(); setSelectedCity(city); }}
                      >
                        {/* Провинция уже увеличена в scale раз — делим
                            размеры точек/текста на тот же scale, чтобы
                            на экране они остались одного размера
                            независимо от исходного размера плитки. */}
                        <circle cx={px} cy={py} r={7 / scale} fill={city.accent} stroke="#fff" strokeWidth={1.5 / scale} />
                        <circle cx={px} cy={py} r={12 / scale} fill={city.accent} fillOpacity="0.25" className="map-city-pulse" />
                        <text
                          x={px}
                          y={py + 16 / scale}
                          textAnchor="middle"
                          style={{ fontSize: 8 / scale, fill: '#fff', fontFamily: "'Outfit', Arial, sans-serif", pointerEvents: 'none' }}
                        >
                          {city.name}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {hoveredId && !selectedId && SHAPES[hoveredId] && (
            <div
              className="glass glass--sm pointer-events-none absolute z-10 -translate-x-1/2 rounded-xl px-3 py-2 text-center"
              style={{
                left: `${((SHAPES[hoveredId].x + SHAPES[hoveredId].w / 2) / VIEW.w) * 100}%`,
                top: `${(SHAPES[hoveredId].y / VIEW.h) * 100}%`,
                transform: 'translate(-50%, -110%)',
              }}
            >
              <p className="type-stat text-xs text-white">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.name}</p>
              <p className="text-[10px] text-gray-400">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.tagline}</p>
            </div>
          )}
        </div>
      </div>

      {selectedCity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCity(null)}
        >
          <div
            className="glass glass--sm relative w-[320px] rounded-2xl p-6"
            style={{ '--glass-tint': '217, 107, 50' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCity(null)}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-4">
              <CityCrestSmall city={selectedCity} />
              <div>
                <p className="type-tag text-[10px] tracking-[0.1em]" style={{ color: selectedCity.accent }}>{selectedCity.label}</p>
                <p className="type-stat text-lg text-white">{selectedCity.name}</p>
              </div>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
              <Users className="h-3.5 w-3.5" />
              Population: {selectedCity.population}
            </p>

            <button
              type="button"
              onClick={() => navigate(`/province/${selectedId}`)}
              className="type-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs text-white"
              style={{ background: selectedCity.accent }}
            >
              More
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
