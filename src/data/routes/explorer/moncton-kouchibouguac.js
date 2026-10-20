// Данные интерактивной карты маршрута Moncton → Kouchibouguac.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './moncton-kouchibouguac.line.json';

export const MONCTON_KOUCHIBOUGUAC_EXPLORER = {
  line,
  provinceIso: 'CA-NB',
  from: { name: 'Moncton', coords: [-64.8004, 46.0986] },
  to: { name: 'Kouchibouguac NP', coords: [-65.0133, 46.8318] },
  via: ['Shediac', 'Bouctouche'],

  stops: [
    { name: 'Moncton', km: 0, coords: [-64.8004, 46.0986] },
    { name: 'Shediac', km: 26, coords: [-64.5492, 46.2195] },
    { name: 'Bouctouche', km: 61, coords: [-64.7236, 46.4735] },
    { name: 'Kouchibouguac NP', km: 115, coords: [-65.0133, 46.8318] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '115', unit: 'km', note: 'Moncton to the park entrance via Shediac and Bouctouche' },
      { key: 'time', label: 'Drive Time', value: '~1h35m', unit: '', note: 'Non-stop — the coastal villages are worth stopping for' },
      { key: 'road', label: 'Road Type', value: 'Rte 15 → Rte 11', unit: '', note: 'Paved throughout, with Route 134 as the slower coastal option' },
    ],
    legs: [
      { from: 'Moncton', to: 'Shediac', km: 26, road: 'Route 15', note: 'East to the strait — the shore changes within half an hour' },
      { from: 'Shediac', to: 'Bouctouche', km: 35, road: 'Route 11 · Acadian coast', note: 'Past Parlee Beach and into Acadian country' },
      { from: 'Bouctouche', to: 'Kouchibouguac NP', km: 54, road: 'Route 11 → Route 117', note: 'North through Richibucto to the park gate' },
    ],
  },

  fuel: {
    summary: 'Nothing to plan around: Shediac, Bouctouche and Richibucto are all on the route with full services, and the longest gap is well under an hour. There is no fuel inside the park. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Irving', brand: 'Irving', town: 'Moncton', km: 0, coords: [-64.8065, 46.08652] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Moncton', km: 10, coords: [-64.69962, 46.12781] },
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Shediac', km: 25, coords: [-64.56445, 46.21707] },
    { name: 'Shell', brand: 'Shell', town: 'Bouctouche', km: 55, coords: [-64.68506, 46.44541] },
    { name: 'Irving', brand: 'Irving', town: 'Bouctouche', km: 84, coords: [-64.87533, 46.6468] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 115, level: 'good', label: 'Moncton → Kouchibouguac', text: 'Good along the coast and in the park’s main areas' },
    ],
  },

  weather: {
    intro: 'An easy coastal drive. The season decides everything else — this is a summer-water park, and most of it shuts down once the beach season ends.',
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
          'July and August for the warmest saltwater swimming in Atlantic Canada',
          'Early September for the same water with the crowds gone',
          'June for the lagoon trails before the insects peak',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Kellys Beach parking fills early on hot July and August days',
          'Mosquitoes on the inland and marsh trails from June into July',
          'Nesting closures take sections of beach out of use through the summer',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter storms and freezing rain along the strait',
          'Hurricane remnants in late summer — storm surge reshapes these dunes',
        ],
      },
    ],
    links: [
      { label: 'New Brunswick 511 — road conditions', href: 'https://511.gnb.ca' },
      { label: 'Parks Canada — Kouchibouguac', href: 'https://parks.canada.ca/pn-np/nb/kouchibouguac' },
    ],
  },

  hotels: [
    { name: 'Gomotel.ca', type: 'Motel', town: 'Moncton', km: 1, coords: [-64.7953, 46.08036] },
    { name: 'V Hotel and Suites', type: 'Hotel', town: 'Moncton', km: 1, coords: [-64.785, 46.08766] },
    { name: 'Bouctouche Bay Inn', type: 'Motel', town: 'Bouctouche', km: 57, coords: [-64.69419, 46.45636] },
    { name: 'Bouctouche Inn & Suites', type: 'Hotel', town: 'Bouctouche', km: 60, coords: [-64.73164, 46.46821] },
  ],

  eats: [
    { name: 'Sun Sun Chinese', type: 'Chinese', town: 'Moncton', km: 0, coords: [-64.81611, 46.10306] },
    { name: 'Jungle Jim\'s Eatery', type: 'American', town: 'Moncton', km: 0, coords: [-64.82334, 46.10607] },
    { name: 'La Paneterie', type: 'Restaurant', town: 'Bouctouche', km: 59, coords: [-64.71937, 46.46319] },
    { name: 'Tim Hortons', type: 'Café', town: 'Bouctouche', km: 59, coords: [-64.73151, 46.46618] },
  ],
};

export default MONCTON_KOUCHIBOUGUAC_EXPLORER;
