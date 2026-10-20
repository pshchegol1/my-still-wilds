// Данные интерактивной карты маршрута Canmore → Banff & Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './canmore-banff-lake-louise.line.json';

export const CANMORE_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Canmore', coords: [-115.36058, 51.08982] },
  to: { name: 'Lake Louise', coords: [-116.17754, 51.42497] },
  via: ['Banff'],

  stops: [
    { name: 'Canmore', km: 0, coords: [-115.36058, 51.08982] },
    { name: 'Banff', km: 26, coords: [-115.57208, 51.17508] },
    { name: 'Lake Louise', km: 84, coords: [-116.17754, 51.42497] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '84', unit: 'km', note: 'Canmore to Lake Louise via the Banff townsite' },
      { key: 'time', label: 'Drive Time', value: '~1h20m', unit: '', note: 'Non-stop — parking is the real time cost in summer' },
      { key: 'road', label: 'Road Type', value: 'Trans-Canada', unit: '', note: 'Divided and fenced through the park' },
    ],
    legs: [
      { from: 'Canmore', to: 'Banff', km: 26, road: 'Trans-Canada Hwy 1', note: 'Through the park gate — a pass is required from here' },
      { from: 'Banff', to: 'Lake Louise', km: 58, road: 'Hwy 1 · park', note: 'Fenced highway with the wildlife overpasses above it' },
    ],
  },

  fuel: {
    summary: 'Short enough that fuel is never the question. Canmore is the cheapest of the three towns, and prices inside the park are higher. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso', brand: 'Esso', town: 'Canmore', km: 0, coords: [-115.35243, 51.08874] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Banff', km: 23, coords: [-115.55593, 51.18607] },
    { name: 'Shell', brand: 'Shell', town: 'Lake Louise', km: 84, coords: [-116.17737, 51.42638] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 26, level: 'good', label: 'Canmore → Banff', text: 'Good along the valley' },
      { fromKm: 26, toKm: 84, level: 'fair', label: 'Banff → Lake Louise', text: 'Patchy west of the townsite' },
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
    { name: 'Paintbox Lodge', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.35773, 51.09018] },
    { name: 'Mystic Springs Chalets & Hot Pools', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.34236, 51.08655] },
    { name: 'Hidden Ridge Resort', type: 'Hotel', town: 'Banff', km: 22, coords: [-115.54615, 51.18813] },
    { name: 'Douglas Fir Resort & Chalets', type: 'Hotel', town: 'Banff', km: 22, coords: [-115.54866, 51.18437] },
    { name: 'Charleston Residence', type: 'Hotel', town: 'Lake Louise', km: 83, coords: [-116.17483, 51.42352] },
    { name: 'Deer Lodge', type: 'Hotel', town: 'Lake Louise', km: 84, coords: [-116.20936, 51.41707] },
  ],

  eats: [
    { name: 'Bakery Cafe', type: 'Café', town: 'Canmore', km: 0, coords: [-115.36103, 51.08957] },
    { name: 'Murrieta\'s Bar & Grill', type: 'Restaurant', town: 'Canmore', km: 0, coords: [-115.36064, 51.08911] },
    { name: 'Alpha Bistro', type: 'Restaurant', town: 'Banff', km: 21, coords: [-115.53587, 51.19983] },
    { name: 'Buffalo Mountain Cafe', type: 'Café', town: 'Banff', km: 22, coords: [-115.55149, 51.184] },
    { name: 'Lodge of the Ten Peaks', type: 'Restaurant', town: 'Lake Louise', km: 83, coords: [-116.16216, 51.4418] },
    { name: 'Whiskey Jack Lodge', type: 'Restaurant', town: 'Lake Louise', km: 83, coords: [-116.16231, 51.44243] },
  ],
};

export default CANMORE_BANFF_LAKE_LOUISE_EXPLORER;
