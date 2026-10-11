// Данные интерактивной карты маршрута Toronto → Bruce Peninsula.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './toronto-bruce-peninsula.line.json';

export const TORONTO_BRUCE_PENINSULA_EXPLORER = {
  line,
  provinceIso: 'CA-ON',
  from: { name: 'Toronto', coords: [-79.3839, 43.6535] },
  to: { name: 'Bruce Peninsula', coords: [-81.532, 45.1942] },
  via: ['Owen Sound', 'Wiarton', 'Tobermory'],

  stops: [
    { name: 'Toronto', km: 0, coords: [-79.3839, 43.6535] },
    { name: 'Owen Sound', km: 190, coords: [-80.943, 44.5678] },
    { name: 'Wiarton', km: 220, coords: [-81.1408, 44.7438] },
    { name: 'Lion\'s Head', km: 256, coords: [-81.2191, 44.9882] },
    { name: 'Tobermory', km: 305, coords: [-81.643, 45.2347] },
    { name: 'Bruce Peninsula NP', km: 315, coords: [-81.532, 45.1942] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '315', unit: 'km', note: '315 km as driven with the Lion’s Head detour · 294 km straight to Tobermory' },
      { key: 'time', label: 'Drive Time', value: '~4h45m', unit: '', note: 'Non-stop. A full day with stops, or stay overnight in Tobermory' },
      { key: 'road', label: 'Road Type', value: 'Hwy 10 / 6', unit: '', note: 'Hwy 400 north out of the city, then two-lane highway for the last 150 km' },
    ],
    legs: [
      { from: 'Toronto', to: 'Owen Sound', km: 190, road: 'Hwy 400 → Hwy 10', note: 'Divided highway out of the GTA, then two-lane through farm country' },
      { from: 'Owen Sound', to: 'Wiarton', km: 30, road: 'Hwy 6', note: 'The peninsula starts here and the road narrows' },
      { from: 'Wiarton', to: 'Tobermory', km: 85, road: 'Hwy 6 · two-lane', note: 'Services thin out — top up before you leave Wiarton' },
    ],
  },

  fuel: {
    summary: 'Fuel is easy as far as Wiarton. North of there the peninsula thins out fast, so top up in Wiarton rather than counting on finding something near Tobermory. The pins are the stations mapped in OpenStreetMap — there are more through the towns along Hwy 10.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по
    // этому маршруту неполная, и посчитанный по ней разрыв был бы
    // заметно больше реального.
    items: [
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Toronto', km: 0, coords: [-79.38754, 43.67308] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Toronto', km: 15, coords: [-79.53915, 43.62314] },
    { name: 'Esso', brand: 'Esso', town: 'Toronto', km: 30, coords: [-79.65467, 43.64846] },
    { name: 'Circle K', brand: 'Circle K', town: 'Toronto', km: 47, coords: [-79.7708, 43.76345] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Toronto', km: 64, coords: [-79.94634, 43.82332] },
    { name: 'Econo-Gas', brand: 'Econo-Gas', town: 'Owen Sound', km: 190, coords: [-80.94681, 44.57352] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps (Rogers, Telus, Bell).',
    segments: [
      { fromKm: 0, toKm: 190, level: 'good', label: 'Toronto → Owen Sound', text: 'Full coverage the whole way through southern Ontario' },
      { fromKm: 190, toKm: 256, level: 'fair', label: 'Owen Sound → Lion’s Head', text: 'Mostly fine, with drops between the villages' },
      { fromKm: 256, toKm: 315, level: 'poor', label: 'Upper peninsula & the park', text: 'Patchy to none on the trails and along the shoreline' },
    ],
  },

  weather: {
    intro: 'A mild-weather drive by Canadian standards — the real planning problem here is the parking reservation, not the road.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'May – October, dry pavement and long daylight',
          'Book the Grotto parking slot the moment reservations open — that decides the trip, not the weather',
          'Midweek beats any summer weekend on Hwy 400',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'November – April: lake-effect snow squalls come off Georgian Bay with little warning',
          'Spring and autumn rain makes the limestone at the Grotto genuinely slippery',
          'Deer along Hwy 6 at dawn and dusk',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Snow squall warning for Grey or Bruce County — visibility drops to nothing in minutes',
          'Freezing rain anywhere on the Hwy 10 corridor',
          'Most park facilities are closed in deep winter anyway',
        ],
      },
    ],
    links: [
      { label: 'Ontario 511 — road conditions', href: 'https://511on.ca' },
      { label: 'Parks Canada — Bruce Peninsula', href: 'https://parks.canada.ca/pn-np/on/bruce' },
    ],
  },

  hotels: [
    { name: 'Courtyard Marriott', type: 'Hotel', town: 'Toronto', km: 0, coords: [-79.3831, 43.66242] },
    { name: 'Econo Lodge Inn & Suites', type: 'Motel', town: 'Toronto', km: 0, coords: [-79.37551, 43.66032] },
    { name: 'Wiarton Willy\'s Inn', type: 'Motel', town: 'Wiarton', km: 218, coords: [-81.14018, 44.72695] },
    { name: 'Spirit Rock Motel', type: 'Motel', town: 'Wiarton', km: 221, coords: [-81.14084, 44.75015] },
  ],

  eats: [
    { name: 'Nord Lyon Cafe', type: 'Café', town: 'Toronto', km: 0, coords: [-79.39095, 43.65002] },
    { name: 'Red Lobster', type: 'Seafood', town: 'Toronto', km: 0, coords: [-79.38364, 43.65617] },
    { name: 'Kettle\'s Back Home Cooking', type: 'Regional', town: 'Owen Sound', km: 179, coords: [-80.90746, 44.47922] },
    { name: 'Swiss Chalet', type: 'Chicken', town: 'Owen Sound', km: 188, coords: [-80.91344, 44.57461] },
    { name: 'Mimi\'s Rooftop Cafe', type: 'Café', town: 'Wiarton', km: 220, coords: [-81.11162, 44.74741] },
    { name: 'Myskeek\'s Homestyle Cooking', type: 'Restaurant', town: 'Wiarton', km: 220, coords: [-81.14068, 44.74308] },
    { name: 'The Hungry Hiker', type: 'Restaurant', town: 'Tobermory', km: 304, coords: [-81.66257, 45.25052] },
  ],
};

export default TORONTO_BRUCE_PENINSULA_EXPLORER;
