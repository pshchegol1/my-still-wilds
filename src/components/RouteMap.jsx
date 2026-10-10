import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Карта маршрута на MapLibre. Подложки без API-ключей (CARTO с 2026 года
// требует ключ): тёмный режим — Esri Dark Gray + тёмная отмывка рельефа,
// подкрашенные под фон сайта; спутник — Esri World Imagery.
// Поверх — граница провинции из /geo/canada-provinces.geojson, светящаяся
// линия маршрута, раскраска покрытия связи и точки POI активной вкладки.
// Файл грузится лениво (React.lazy), чтобы MapLibre не утяжелял остальной сайт.

const ACCENT = '#488CDC';
const CELL_COLORS = { good: '#38a169', fair: '#e0b84a', poor: '#e05a4a' };

const ICONS = {
  fuel: '<line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  hotels: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  eats: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
};
const POI_COLORS = { fuel: '#e0b84a', hotels: '#a78bfa', eats: '#e08a4a' };

const esri = (service) => [`https://server.arcgisonline.com/ArcGIS/rest/services/${service}/MapServer/tile/{z}/{y}/{x}`];

// Слои каждого режима — переключаются видимостью
const MODE_LAYERS = {
  dark: ['dark-base', 'dark-relief', 'dark-labels'],
  satellite: ['satellite'],
};

const STYLE = {
  version: 8,
  sources: {
    darkBase: { type: 'raster', tiles: esri('Canvas/World_Dark_Gray_Base'), tileSize: 256, maxzoom: 16, attribution: 'Basemap © Esri, HERE, Garmin, © OpenStreetMap contributors' },
    darkRelief: { type: 'raster', tiles: esri('Elevation/World_Hillshade_Dark'), tileSize: 256, maxzoom: 13 },
    darkLabels: { type: 'raster', tiles: esri('Canvas/World_Dark_Gray_Reference'), tileSize: 256, maxzoom: 16 },
    satellite: { type: 'raster', tiles: esri('World_Imagery'), tileSize: 256, maxzoom: 18, attribution: 'Imagery © Esri, Maxar, Earthstar Geographics' },
  },
  layers: [
    { id: 'bg', type: 'background', paint: { 'background-color': '#081226' } },
    { id: 'dark-base', type: 'raster', source: 'darkBase', paint: { 'raster-opacity': 0.62 } },
    { id: 'dark-relief', type: 'raster', source: 'darkRelief', paint: { 'raster-opacity': 0.5, 'raster-saturation': -1, 'raster-contrast': 0.2 } },
    { id: 'dark-labels', type: 'raster', source: 'darkLabels', paint: { 'raster-opacity': 0.75 } },
    { id: 'satellite', type: 'raster', source: 'satellite', layout: { visibility: 'none' }, paint: { 'raster-saturation': -0.15 } },
  ],
};

// --- геометрия: километраж вдоль линии и нарезка по км ----------------
const rad = (x) => (x * Math.PI) / 180;
function haversine(a, b) {
  const dLat = rad(b[1] - a[1]);
  const dLon = rad(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[1])) * Math.cos(rad(b[1])) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

function sliceByKm(coords, segments) {
  const cum = [0];
  for (let i = 1; i < coords.length; i++) cum[i] = cum[i - 1] + haversine(coords[i - 1], coords[i]);
  const total = cum[cum.length - 1];
  return segments.map((seg) => {
    const from = Math.min(seg.fromKm, total);
    const to = Math.min(seg.toKm, total);
    const part = coords.filter((_, i) => cum[i] >= from && cum[i] <= to);
    // Добавляем соседние вершины, чтобы сегменты стыковались без разрывов
    const first = cum.findIndex((d) => d >= from);
    const last = cum.findLastIndex((d) => d <= to);
    if (first > 0) part.unshift(coords[first - 1]);
    if (last < coords.length - 1) part.push(coords[last + 1]);
    return {
      type: 'Feature',
      properties: { level: seg.level },
      geometry: { type: 'LineString', coordinates: part },
    };
  });
}

function boundsOf(coords) {
  return coords.reduce((b, c) => b.extend(c), new maplibregl.LngLatBounds(coords[0], coords[0]));
}

function popupHtml(item, kind) {
  const meta = [item.brand ?? item.type, item.town].filter(Boolean).join(' · ');
  return `
    <div class="sw-popup-card" style="--poi:${POI_COLORS[kind]}">
      <p class="sw-popup-kicker">${kind === 'fuel' ? 'Gas Station' : kind === 'hotels' ? 'Stay' : 'Eat'} · ${item.km} km</p>
      <p class="sw-popup-title">${item.name}</p>
      <p class="sw-popup-meta">${meta}</p>
      ${item.note ? `<p class="sw-popup-note">${item.note}</p>` : ''}
    </div>`;
}

export default function RouteMap({ explorer, mode, tab, focus, onHover }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef(new Map()); // id -> { marker, popup, el }
  const readyRef = useRef(false);
  const onHoverRef = useRef(onHover);
  useEffect(() => {
    onHoverRef.current = onHover;
  }, [onHover]);

  // --- инициализация ----------------------------------------------------
  useEffect(() => {
    const coords = explorer.line.geometry.coordinates;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: STYLE,
      bounds: boundsOf(coords),
      // справа больше места: подписи остановок уходят вправо от точки;
      // на телефоне отступы меньше, иначе маршрут сжимается в угол
      fitBoundsOptions: {
        padding: containerRef.current.clientWidth < 640
          ? { top: 70, bottom: 40, left: 30, right: 80 }
          : { top: 80, bottom: 50, left: 50, right: 120 },
      },
      attributionControl: { compact: true },
      cooperativeGestures: true,
    });
    mapRef.current = map;
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

    const stopMarkers = [];

    map.on('load', () => {
      // Граница провинции
      map.addSource('province', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addLayer({ id: 'province-glow', type: 'line', source: 'province', paint: { 'line-color': ACCENT, 'line-width': 6, 'line-opacity': 0.18, 'line-blur': 4 } });
      map.addLayer({ id: 'province-line', type: 'line', source: 'province', paint: { 'line-color': ACCENT, 'line-width': 1.2, 'line-opacity': 0.6, 'line-dasharray': [3, 2] } });
      fetch('/geo/canada-provinces.geojson')
        .then((r) => r.json())
        .then((geo) => {
          const features = geo.features.filter((f) => f.properties.iso === explorer.provinceIso);
          map.getSource('province')?.setData({ type: 'FeatureCollection', features });
        })
        .catch(() => {});

      // Линия маршрута: широкое свечение + яркое ядро
      map.addSource('route', { type: 'geojson', data: explorer.line });
      map.addLayer({ id: 'route-glow', type: 'line', source: 'route', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': ACCENT, 'line-width': 14, 'line-opacity': 0.25, 'line-blur': 8 } });
      map.addLayer({ id: 'route-core', type: 'line', source: 'route', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': '#9cc4f2', 'line-width': 3.5 } });

      // Покрытие связи (видно только на вкладке Cell Service)
      map.addSource('cell', { type: 'geojson', data: { type: 'FeatureCollection', features: sliceByKm(coords, explorer.cell.segments) } });
      map.addLayer({
        id: 'cell-line',
        type: 'line',
        source: 'cell',
        layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'none' },
        paint: {
          'line-color': ['match', ['get', 'level'], 'good', CELL_COLORS.good, 'fair', CELL_COLORS.fair, CELL_COLORS.poor],
          'line-width': 6,
        },
      });

      // Остановки маршрута — HTML-маркеры с подписью
      explorer.stops.forEach((stop, idx) => {
        const el = document.createElement('div');
        const edge = idx === 0 || idx === explorer.stops.length - 1;
        el.className = `sw-stop ${edge ? 'sw-stop--edge' : ''}`;
        el.innerHTML = `<span class="sw-stop-dot">${idx === 0 ? 'A' : idx === explorer.stops.length - 1 ? 'B' : ''}</span><span class="sw-stop-label">${stop.name}</span>`;
        stopMarkers.push(new maplibregl.Marker({ element: el, anchor: 'left', offset: [edge ? -13 : -6, 0] }).setLngLat(stop.coords).addTo(map));
      });

      // На узком экране атрибуцию держим свёрнутой (кнопка ⓘ)
      if (containerRef.current?.clientWidth < 640) {
        containerRef.current.querySelector('.maplibregl-ctrl-attrib')?.classList.remove('maplibregl-compact-show');
      }

      readyRef.current = true;
      map.fire('sw:ready');
    });

    return () => {
      readyRef.current = false;
      stopMarkers.forEach((m) => m.remove());
      map.remove();
      mapRef.current = null;
    };
  }, [explorer]);

  // --- Dark / Satellite --------------------------------------------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const apply = () => {
      Object.entries(MODE_LAYERS).forEach(([layerMode, ids]) => {
        ids.forEach((id) => map.setLayoutProperty(id, 'visibility', layerMode === mode ? 'visible' : 'none'));
      });
    };
    if (map.isStyleLoaded()) apply();
    else map.once('styledata', apply);
  }, [mode]);

  // --- слои и маркеры активной вкладки ----------------------------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return undefined;

    const markers = markersRef.current;
    const build = () => {
      const isCell = tab === 'cell';
      map.setLayoutProperty('cell-line', 'visibility', isCell ? 'visible' : 'none');
      map.setPaintProperty('route-core', 'line-opacity', isCell ? 0 : 1);

      const items = explorer[tab];
      if (!Array.isArray(items) && !Array.isArray(items?.items)) return;
      const list = Array.isArray(items) ? items : items.items;

      list.forEach((item, idx) => {
        const id = `${tab}-${idx}`;
        const el = document.createElement('button');
        el.type = 'button';
        el.className = `sw-poi ${item.warn ? 'sw-poi--warn' : ''}`;
        el.style.setProperty('--poi', POI_COLORS[tab]);
        el.setAttribute('aria-label', item.name);
        el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[tab]}</svg>`;

        const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 18, className: 'sw-popup', maxWidth: '240px' })
          .setHTML(popupHtml(item, tab));
        const marker = new maplibregl.Marker({ element: el }).setLngLat(item.coords).addTo(map);

        el.addEventListener('mouseenter', () => {
          popup.setLngLat(item.coords).addTo(map);
          onHoverRef.current?.(id);
        });
        el.addEventListener('mouseleave', () => {
          popup.remove();
          onHoverRef.current?.(null);
        });
        el.addEventListener('click', () => map.easeTo({ center: item.coords, zoom: Math.max(map.getZoom(), 13) }));

        markers.set(id, { marker, popup, el, item });
      });
    };

    if (readyRef.current) build();
    else map.once('sw:ready', build);

    return () => {
      map.off('sw:ready', build);
      markers.forEach(({ marker, popup }) => {
        popup.remove();
        marker.remove();
      });
      markers.clear();
    };
  }, [tab, explorer]);

  // --- подсветка точки при наведении на строку списка -------------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return undefined;
    const entry = focus?.id ? markersRef.current.get(focus.id) : null;
    if (!entry) return undefined;

    entry.el.classList.add('is-active');
    entry.popup.setLngLat(entry.item.coords).addTo(map);
    if (focus.fly) map.flyTo({ center: entry.item.coords, zoom: 13.5, speed: 1.4 });

    return () => {
      entry.el.classList.remove('is-active');
      entry.popup.remove();
    };
  }, [focus]);

  // h-full вместо absolute: .maplibregl-map сам ставит position: relative
  return <div ref={containerRef} className="h-full w-full" />;
}
