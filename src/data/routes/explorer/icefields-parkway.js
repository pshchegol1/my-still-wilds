// Данные интерактивной карты маршрута Icefields Parkway: Banff → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). km — расстояние от старта вдоль маршрута.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './icefields-parkway.line.json';

export const ICEFIELDS_PARKWAY_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Banff', coords: [-115.5708, 51.1784] },
  to: { name: 'Jasper', coords: [-118.0824, 52.8752] },
  via: ['Lake Louise', 'Columbia Icefield'],

  stops: [
    { name: 'Banff', km: 0, coords: [-115.5708, 51.1784] },
    { name: 'Lake Louise', km: 58, coords: [-116.1773, 51.4254] },
    { name: 'Peyto Lake', km: 103, coords: [-116.5074, 51.7174] },
    { name: 'Columbia Icefield', km: 189, coords: [-117.2242, 52.2203] },
    { name: 'Athabasca Falls', km: 267, coords: [-117.8835, 52.6644] },
    { name: 'Jasper', km: 299, coords: [-118.0824, 52.8752] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '299', unit: 'km', note: 'Banff → Lake Louise 58 km · Lake Louise → Jasper 241 km (the Icefields Parkway proper, Hwy 93N)' },
      { key: 'time', label: 'Drive Time', value: '~4h45m', unit: '', note: 'Non-stop. Realistically a full day (8–10h) with viewpoints and the Columbia Icefield' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 / 93N', unit: '', note: 'Trans-Canada to Lake Louise, then the 2-lane alpine Icefields Parkway the rest of the way' },
    ],
    legs: [
      { from: 'Banff', to: 'Lake Louise', km: 58, road: 'Hwy 1 · wildlife-fenced', note: 'Speed drops to 90 km/h inside the park — enforced' },
      { from: 'Lake Louise', to: 'Columbia Icefield', km: 131, road: 'Hwy 93N · 2-lane alpine', note: 'Crosses Bow Summit, 2,068m — the highest point on this route' },
      { from: 'Columbia Icefield', to: 'Jasper', km: 110, road: 'Hwy 93N · 2-lane alpine', note: 'Passes Sunwapta and Athabasca Falls before descending into Jasper' },
    ],
  },

  fuel: {
    summary: "Gas is easy to Lake Louise. After that, the only pump before Jasper is at Saskatchewan River Crossing — plan around that 241 km stretch, it's genuinely the only option.",
    longestGapKm: 140,
    items: [
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 1, coords: [-115.57419, 51.17871], note: 'Last guaranteed stop before Lake Louise' },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Lake Louise', km: 58, coords: [-116.1761, 51.42486], note: 'Fill up here — nothing else for 140 km', warn: true },
      { name: 'Shell', brand: 'Shell', town: 'Lake Louise', km: 58, coords: [-116.17737, 51.42638] },
      { name: 'The Crossing Resort', brand: 'Independent', town: 'Saskatchewan River Crossing', km: 140, coords: [-116.74604, 51.97346], note: 'The only pump on the Parkway itself — seasonal hours, don’t assume it’s open late', warn: true },
      { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 298, coords: [-118.08198, 52.87382] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps (Rogers, Telus, Bell). Download offline maps before leaving Lake Louise.',
    segments: [
      { fromKm: 0, toKm: 58, level: 'good', label: 'Banff → Lake Louise', text: 'Full LTE/5G along the highway' },
      { fromKm: 58, toKm: 80, level: 'fair', label: 'Lake Louise → Bow Summit', text: 'Coverage starts dropping as the parkway climbs' },
      { fromKm: 80, toKm: 230, level: 'poor', label: 'Bow Summit → Sunwapta Falls', text: 'Essentially no signal for most of this stretch — the longest dead zone on any of our routes' },
      { fromKm: 230, toKm: 267, level: 'fair', label: 'Sunwapta Falls → Athabasca Falls', text: 'Patchy as the valley opens up approaching Jasper' },
      { fromKm: 267, toKm: 299, level: 'good', label: 'Athabasca Falls → Jasper', text: 'Strong once you’re in Jasper townsite' },
    ],
  },

  weather: {
    intro: 'This is the highest, most exposed of our Rockies drives. These are the rules locals actually drive by.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June – September, dry pavement, daylight — leave Banff by 8am for parking at Peyto Lake and the Icefield',
          'Clear mornings: afternoon thunderstorms build over the Icefield by early afternoon in July',
          'Fill up in Lake Louise regardless of your gauge — it’s the last reliable stop',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'October – May: winter tires mandatory on this stretch, Oct 1 – Apr 30',
          'Dawn and dusk: bighorn sheep and mountain goats are frequently right on the shoulder',
          'Snow is possible at Bow Summit (2,068m) in any month, including July',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Snowfall or blowing-snow warning for the Icefields Parkway corridor',
          'Avalanche control closure near the Weeping Wall — no detour exists on this road',
          'Freezing rain at elevation — this is a 2-lane mountain road with no shoulder in places',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Icefields Parkway bulletins', href: 'https://parks.canada.ca/pn-np/ab/banff/bulletins' },
    ],
  },

  hotels: [
    { name: "Brewster's Mountain Lodge", type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57213, 51.17677] },
    { name: 'King Edward Hotel', type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57119, 51.17653] },
    { name: 'The Post Hotel & Spa', type: 'Hotel', town: 'Lake Louise', km: 58, coords: [-116.18104, 51.42658] },
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 299, coords: [-118.0796, 52.87869], note: 'Historic, right in the townsite' },
  ],

  eats: [
    { name: 'Wild Flour Bakery', type: 'Café', town: 'Banff', km: 0, coords: [-115.5726, 51.17715] },
    { name: 'Vistas Dining Room', type: 'Restaurant', town: 'Banff', km: 0, coords: [-115.56126, 51.17176] },
    { name: "Laggan's", type: 'Café', town: 'Lake Louise', km: 58, coords: [-116.17961, 51.4252], note: 'Local legend — get there before the tour buses' },
    { name: 'The Crossing Cafe', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 140, coords: [-116.74688, 51.97345], note: 'Attached to the only gas station on the Parkway' },
    { name: "Evil Dave's Grill", type: 'Restaurant', town: 'Jasper', km: 299, coords: [-118.08287, 52.87432] },
    { name: "Coco's Café", type: 'Café', town: 'Jasper', km: 299, coords: [-118.08207, 52.87537] },
  ],
};

export default ICEFIELDS_PARKWAY_EXPLORER;
