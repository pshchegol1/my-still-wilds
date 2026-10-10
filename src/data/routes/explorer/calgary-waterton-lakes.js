// Данные интерактивной карты маршрута Calgary → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). km — расстояние от старта вдоль маршрута,
// включая детур на Head-Smashed-In Buffalo Jump. Координаты везде в
// порядке [долгота, широта], как требует MapLibre.

import line from './calgary-waterton-lakes.line.json';

export const CALGARY_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Calgary', coords: [-114.0719, 51.0447] },
  to: { name: 'Cameron Lake', coords: [-114.0492, 49.0092] },
  via: ['Head-Smashed-In Buffalo Jump', 'Fort Macleod', 'Pincher Creek', 'Waterton townsite'],

  stops: [
    { name: 'Calgary', km: 0, coords: [-114.0719, 51.0447] },
    { name: 'Head-Smashed-In Buffalo Jump', km: 184, coords: [-113.6535, 49.7057] },
    { name: 'Fort Macleod', km: 207, coords: [-113.4076, 49.7267] },
    { name: 'Pincher Creek', km: 258, coords: [-113.9503, 49.4857] },
    { name: 'Waterton townsite', km: 315, coords: [-113.907, 49.0509] },
    { name: 'Cameron Lake', km: 331, coords: [-114.0492, 49.0092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '331', unit: 'km', note: '271 km direct · 331 km as driven with the Head-Smashed-In detour' },
      { key: 'time', label: 'Drive Time', value: '~4h45m', unit: '', note: 'Non-stop with the detour · ~3h30m if you skip it' },
      { key: 'road', label: 'Road Type', value: 'Hwy 2 / 3 / 6', unit: '', note: 'Divided highway to Fort Macleod, then 2-lane paved the rest of the way' },
    ],
    legs: [
      { from: 'Calgary', to: 'Head-Smashed-In', km: 184, road: 'Hwy 2 · 4-lane divided', note: 'Fast run south through ranch country' },
      { from: 'Head-Smashed-In', to: 'Fort Macleod', km: 23, road: 'Hwy 785 → Hwy 2', note: 'Short backtrack onto the highway after the detour' },
      { from: 'Fort Macleod', to: 'Pincher Creek', km: 51, road: 'Hwy 3 · 2-lane', note: 'Last full-service town before the park' },
      { from: 'Pincher Creek', to: 'Cameron Lake', km: 73, road: 'Hwy 6 · park gate', note: 'Parks Canada checkpoint at the Waterton gate' },
    ],
  },

  fuel: {
    summary: 'Easy gas out of Calgary and again in Pincher Creek. After Pincher Creek, there is nothing until Waterton townsite — fill up before the park gate.',
    longestGapKm: 57,
    items: [
      { name: 'Shell', brand: 'Shell', town: 'Calgary', km: 0, coords: [-114.07377, 51.03757] },
      { name: 'Chevron', brand: 'Chevron', town: 'Calgary', km: 0, coords: [-114.08206, 51.03938] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 0, coords: [-114.07107, 51.0356] },
      { name: 'Pincher Creek Co-Op', brand: 'Co-op', town: 'Pincher Creek', km: 257, coords: [-113.94885, 49.49435], note: 'Fill up here — last stop for 57 km', warn: true },
      { name: 'Shell', brand: 'Shell', town: 'Pincher Creek', km: 257, coords: [-113.94864, 49.49504] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps (Rogers, Telus, Bell).',
    segments: [
      { fromKm: 0, toKm: 184, level: 'good', label: 'Calgary → Head-Smashed-In', text: 'Strong along the full Hwy 2 corridor' },
      { fromKm: 184, toKm: 258, level: 'good', label: 'Fort Macleod → Pincher Creek', text: 'Reliable through ranch country' },
      { fromKm: 258, toKm: 300, level: 'fair', label: 'Pincher Creek → park gate', text: 'Starts dropping as the highway climbs toward the mountains' },
      { fromKm: 300, toKm: 331, level: 'poor', label: 'Inside Waterton Lakes NP', text: 'Patchy once past the townsite — weak at Cameron Lake itself' },
    ],
  },

  weather: {
    intro: 'Waterton is windier and more exposed than Banff or Jasper. These are the rules locals actually drive by.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June – September — the Prince of Wales Hotel and most park services are open',
          'Mornings are generally calmer; chinook winds tend to build through the afternoon',
          'Leave Calgary early for Head-Smashed-In — the interpretive centre gets busy by midday in summer',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'High wind warnings are common even in summer — secure anything loose at viewpoints',
          'October – May: most park services, including the Prince of Wales Hotel, are closed',
          'Deer and elk cross Hwy 2 frequently at dawn and dusk',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Extreme wind warning issued for the park — gusts here can genuinely push a vehicle',
          'Chief Mountain border crossing is closed outside its seasonal hours regardless of weather',
          'Winter storm warning on Hwy 2 south of Fort Macleod — open prairie offers no windbreak',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Waterton Lakes bulletins', href: 'https://parks.canada.ca/pn-np/ab/waterton/bulletins' },
    ],
  },

  hotels: [
    { name: 'Courtyard by Marriott Calgary Downtown', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.07317, 51.04852] },
    { name: 'Calgary Marriott Downtown Hotel', type: 'Hotel', town: 'Calgary', km: 1, coords: [-114.06261, 51.04498] },
    { name: 'Super 8', type: 'Motel', town: 'Pincher Creek', km: 257, coords: [-113.94673, 49.49623] },
  ],

  eats: [
    { name: 'Rendezvous Cafe', type: 'Café', town: 'Calgary', km: 0, coords: [-114.08665, 51.04799] },
    { name: 'Higher Ground', type: 'Café', town: 'Calgary', km: 0, coords: [-114.08778, 51.05262] },
    { name: "Luigi's Pizza & Steakhouse", type: 'Restaurant', town: 'Pincher Creek', km: 257, coords: [-113.94677, 49.49691] },
    { name: 'Lakeside Chophouse', type: 'Restaurant', town: 'Waterton townsite', km: 314, coords: [-113.90664, 49.05197] },
    { name: 'Fireside Lounge', type: 'Restaurant', town: 'Waterton townsite', km: 314, coords: [-113.90656, 49.05204] },
  ],
};

export default CALGARY_WATERTON_LAKES_EXPLORER;
