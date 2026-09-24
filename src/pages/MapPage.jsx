import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Users, X } from 'lucide-react';
import { navigate } from '../router';
import { PROVINCES_DATA } from '../data/mockData';
import { getProvinceDetail } from '../data/provinces';
import { PROVINCE_PATHS } from '../data/canadaProvincePaths';
import './MapPage.css';

// Настоящие контуры провинций/территорий (взяты из готового SVG с
// границами Канады, не схематика). Реальный viewBox и bounding box
// каждой провинции измеряются в браузере через getBBox() при монтировании
// (см. useLayoutEffect ниже) — координаты в исходном файле не приведены
// к аккуратной сетке, поэтому их проще один раз замерить, чем вручную
// пересчитывать вложенный transform.
const FALLBACK_VIEWBOX = { x: 0, y: 0, w: 1350, h: 1300 };

// Свой набор различимых цветов — акценты провинций в их собственных
// данных местами повторяются (mb/nt оба #0ea5e9), а на карте все 13
// должны читаться отдельно друг от друга.
const TILE_COLORS = {
  yt: '#4ade80', nt: '#22d3ee', nu: '#60a5fa',
  bc: '#38a169', ab: '#e08a4a', sk: '#e0b84a', mb: '#c026d3',
  on: '#3b82f6', qc: '#a855f7', nl: '#f97316',
  nb: '#d97706', ns: '#0891b2', pe: '#ec4899',
};

// Простая детерминированная раскладка городов внутри bounding box
// провинции — не реальные координаты, а сетка, чтобы точки не
// накладывались; сама группа обрезается по контуру провинции
// (clipPath), поэтому точки не вылезают в океан.
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
  const [viewBox, setViewBox] = useState(FALLBACK_VIEWBOX);
  const [boxes, setBoxes] = useState({});
  const pathRefs = useRef({});

  // Измеряем реальные bounding box'ы один раз при монтировании: общий
  // viewBox — из объединения всех провинций (с отступом), а box каждой
  // провинции — для расчета transform-origin/scale при зуме и для
  // раскладки городов внутри её силуэта.
  useLayoutEffect(() => {
    const ids = Object.keys(PROVINCE_PATHS);
    const nextBoxes = {};
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const id of ids) {
      const el = pathRefs.current[id];
      if (!el) continue;
      const box = el.getBBox();
      nextBoxes[id] = box;
      minX = Math.min(minX, box.x);
      minY = Math.min(minY, box.y);
      maxX = Math.max(maxX, box.x + box.width);
      maxY = Math.max(maxY, box.y + box.height);
    }
    if (Number.isFinite(minX)) {
      const padX = (maxX - minX) * 0.03;
      const padY = (maxY - minY) * 0.03;
      setViewBox({ x: minX - padX, y: minY - padY, w: maxX - minX + padX * 2, h: maxY - minY + padY * 2 });
      setBoxes(nextBoxes);
    }
  }, []);

  const selectedProvince = selectedId
    ? PROVINCES_DATA.find((p) => p.id === selectedId)
    : null;
  const selectedDetail = selectedId ? getProvinceDetail(selectedId) : null;
  const cities = selectedDetail?.cities?.items ?? [];

  const viewCx = viewBox.x + viewBox.w / 2;
  const viewCy = viewBox.y + viewBox.h / 2;

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

          <svg
            viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
            className="w-full"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {Object.keys(PROVINCE_PATHS).map((id) => (
                <clipPath key={id} id={`map-clip-${id}`}>
                  <path d={PROVINCE_PATHS[id]} />
                </clipPath>
              ))}
            </defs>

            {PROVINCES_DATA.map((p) => {
              if (!PROVINCE_PATHS[p.id]) return null;
              const box = boxes[p.id];
              const isSelected = selectedId === p.id;
              const isDimmed = selectedId && !isSelected;
              const cx = box ? box.x + box.width / 2 : 0;
              const cy = box ? box.y + box.height / 2 : 0;
              const scale = box ? Math.min((viewBox.w * 0.82) / box.width, (viewBox.h * 0.82) / box.height) : 1;
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
                  <path
                    ref={(el) => { pathRefs.current[p.id] = el; }}
                    d={PROVINCE_PATHS[p.id]}
                    className="map-tile"
                    fill={TILE_COLORS[p.id]}
                    fillOpacity={hoveredId === p.id && !selectedId ? 0.95 : 0.62}
                    stroke={hoveredId === p.id && !selectedId ? '#fff' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={(hoveredId === p.id && !selectedId ? 2.5 : 1.5) / scale}
                    onMouseEnter={() => !selectedId && setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId((id) => (id === p.id ? null : id))}
                    onClick={() => !selectedId && setSelectedId(p.id)}
                    style={{ cursor: selectedId ? 'default' : 'pointer', transition: 'fill-opacity 200ms, stroke 200ms' }}
                  />
                  {box && (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="map-tile-label"
                      style={{
                        // Пока провинция не выбрана, к группе не применяется
                        // transform: scale(...), поэтому размер шрифта не
                        // нужно компенсировать делением на scale — иначе
                        // у маленьких провинций (PE, NS) с большим scale
                        // подпись становится почти нечитаемой.
                        fontSize: isSelected ? 10 / scale : 30,
                        fontFamily: "'Cinzel', Georgia, serif",
                        fontWeight: 700,
                        fill: '#fff',
                        pointerEvents: 'none',
                        opacity: isSelected ? 0 : 1,
                        transition: 'opacity 200ms',
                      }}
                    >
                      {p.id.toUpperCase()}
                    </text>
                  )}

                  {/* Города — вложены в ту же группу, поэтому масштабируются
                      и двигаются вместе с провинцией при зуме; обрезаны по
                      её настоящему силуэту, чтобы не вылезать в океан. */}
                  {isSelected && box && cities.length > 0 && (
                    <g clipPath={`url(#map-clip-${p.id})`}>
                      {cityLayout(cities.length, box.width, box.height).map((pos, i) => {
                        const city = cities[i];
                        const px = box.x + pos.x;
                        const py = box.y + pos.y;
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
                                независимо от исходного размера контура. */}
                            <circle cx={px} cy={py} r={8 / scale} fill={city.accent} stroke="#fff" strokeWidth={1.5 / scale} />
                            <circle cx={px} cy={py} r={13 / scale} fill={city.accent} fillOpacity="0.25" className="map-city-pulse" />
                            <text
                              x={px}
                              y={py + 19 / scale}
                              textAnchor="middle"
                              style={{ fontSize: 12 / scale, fontWeight: 600, fill: '#fff', fontFamily: "'Outfit', Arial, sans-serif", pointerEvents: 'none' }}
                            >
                              {city.name}
                            </text>
                          </g>
                        );
                      })}
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {hoveredId && !selectedId && boxes[hoveredId] && (
            <div
              className="glass glass--sm pointer-events-none absolute z-10 -translate-x-1/2 rounded-xl px-3 py-2 text-center"
              style={{
                left: `${((boxes[hoveredId].x + boxes[hoveredId].width / 2 - viewBox.x) / viewBox.w) * 100}%`,
                top: `${((boxes[hoveredId].y - viewBox.y) / viewBox.h) * 100}%`,
                transform: 'translate(-50%, -110%)',
              }}
            >
              <p className="type-stat text-base text-white">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.name}</p>
              <p className="text-sm text-gray-400">{PROVINCES_DATA.find((p) => p.id === hoveredId)?.tagline}</p>
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
                <p className="type-tag text-xs tracking-[0.1em]" style={{ color: selectedCity.accent }}>{selectedCity.label}</p>
                <p className="type-stat text-xl text-white">{selectedCity.name}</p>
              </div>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              Population: {selectedCity.population}
            </p>

            <button
              type="button"
              onClick={() => navigate(`/province/${selectedId}`)}
              className="type-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-white"
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
