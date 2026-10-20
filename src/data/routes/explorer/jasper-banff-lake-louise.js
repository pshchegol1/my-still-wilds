// Данные интерактивной карты маршрута Jasper → Banff & Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './jasper-banff-lake-louise.line.json';

export const JASPER_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  to: { name: 'Banff', coords: [-115.57208, 51.17508] },
  via: ['Saskatchewan River Crossing', 'Lake Louise'],

  stops: [
    { name: 'Jasper', km: 0, coords: [-118.08243, 52.87523] },
    { name: 'Saskatchewan River Crossing', km: 153, coords: [-116.74256, 51.97356] },
    { name: 'Lake Louise', km: 232, coords: [-116.17754, 51.42497] },
    { name: 'Banff', km: 290, coords: [-115.57208, 51.17508] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '290', unit: 'km', note: 'Jasper to Banff down the Icefields Parkway' },
      { key: 'time', label: 'Drive Time', value: '~4h30m', unit: '', note: 'Non-stop — nobody drives the parkway non-stop' },
      { key: 'road', label: 'Road Type', value: 'Hwy 93 → Hwy 1', unit: '', note: 'Two-lane parkway with long stretches and no passing lanes' },
    ],
    legs: [
      { from: 'Jasper', to: 'Saskatchewan River Crossing', km: 153, road: 'Hwy 93 · Icefields Parkway', note: 'Columbia Icefield and the glacier viewpoints' },
      { from: 'Saskatchewan River Crossing', to: 'Lake Louise', km: 79, road: 'Hwy 93 · Bow Summit', note: 'Over the high point at 2,069 m past Peyto Lake' },
      { from: 'Lake Louise', to: 'Banff', km: 58, road: 'Trans-Canada Hwy 1', note: 'Back onto divided highway and into the crowds' },
    ],
  },

  fuel: {
    summary: 'This is the route where fuel matters. Fill at Lake Louise before the Icefields Parkway: Saskatchewan River Crossing is the only pump for about 150 km and it is seasonal. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 0, coords: [-118.08198, 52.87382] },
    { name: 'Centex', brand: 'Centex', town: 'Saskatchewan River Crossing', km: 152, coords: [-116.74604, 51.97346] },
    { name: 'Shell', brand: 'Shell', town: 'Lake Louise', km: 232, coords: [-116.17737, 51.42638] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 289, coords: [-115.57419, 51.17871] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 20, level: 'fair', label: 'Around Jasper', text: 'Signal in the townsite, gone shortly after' },
      { fromKm: 20, toKm: 232, level: 'poor', label: 'The Icefields Parkway', text: 'Effectively nothing for 200 km' },
      { fromKm: 232, toKm: 290, level: 'good', label: 'Lake Louise → Banff', text: 'Returns on the Trans-Canada' },
    ],
  },

  weather: {
    intro: 'Mountain weather, mountain rules. Winter tires are a legal requirement on these highways from October through April, and conditions on the pass can differ completely from the city you left.',
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
          'June to September for full services and open trails',
          'September for colour, fewer people and stable weather',
          'Early mornings in summer — the parking is the limiting factor, not the driving',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Elk and bighorn sheep on the highway at dawn and dusk',
          'Shoulder season can bring snow at pass elevation while the valley is clear',
          'Summer parking at Lake Louise and Moraine fills before sunrise',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter storms and avalanche-control closures on the mountain highways',
          'Freezing rain on the Trans-Canada through the Bow Valley',
          'Any mountain drive without winter tires between October and April',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Banff National Park', href: 'https://parks.canada.ca/pn-np/ab/banff' },
    ],
  },

  hotels: [
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.0796, 52.87869] },
    { name: 'Japanese Adult Learning Centre', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.0791, 52.88427] },
    { name: 'Deer Lodge', type: 'Hotel', town: 'Lake Louise', km: 232, coords: [-116.20936, 51.41707] },
    { name: 'The Post Hotel & Spa', type: 'Hotel', town: 'Lake Louise', km: 232, coords: [-116.18104, 51.42658] },
    { name: 'Juniper Hotel', type: 'Hotel', town: 'Banff', km: 287, coords: [-115.58835, 51.18741] },
    { name: 'Fox Hotel and Suites', type: 'Hotel', town: 'Banff', km: 289, coords: [-115.56305, 51.18333] },
  ],

  eats: [
    { name: 'Coco\'s Café', type: 'Café', town: 'Jasper', km: 0, coords: [-118.08207, 52.87537] },
    { name: 'Lou Lou\'s', type: 'Italian', town: 'Jasper', km: 0, coords: [-118.0805, 52.87849] },
    { name: 'The Guide’s Pantry', type: 'Café', town: 'Lake Louise', km: 230, coords: [-116.21692, 51.41739] },
    { name: 'Fairview Bar & Restaurant', type: 'Restaurant', town: 'Lake Louise', km: 230, coords: [-116.21713, 51.41749] },
    { name: 'Cliffhouse Bistro', type: 'Café', town: 'Banff', km: 286, coords: [-115.61183, 51.19941] },
    { name: 'The Juniper Bistro', type: 'Restaurant', town: 'Banff', km: 287, coords: [-115.58877, 51.18726] },
  ],
};

export default JASPER_BANFF_LAKE_LOUISE_EXPLORER;
