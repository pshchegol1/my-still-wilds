// Данные интерактивной карты маршрута Edmonton → Banff & Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './edmonton-banff-lake-louise.line.json';

export const EDMONTON_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Edmonton', coords: [-113.49124, 53.54621] },
  to: { name: 'Lake Louise', coords: [-116.17754, 51.42497] },
  via: ['Red Deer', 'Calgary', 'Banff'],

  stops: [
    { name: 'Edmonton', km: 0, coords: [-113.49124, 53.54621] },
    { name: 'Red Deer', km: 155, coords: [-113.81415, 52.26906] },
    { name: 'Calgary', km: 301, coords: [-114.05754, 51.04561] },
    { name: 'Banff', km: 430, coords: [-115.57208, 51.17508] },
    { name: 'Lake Louise', km: 489, coords: [-116.17754, 51.42497] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '489', unit: 'km', note: 'Edmonton to Lake Louise via Red Deer, Calgary and Banff' },
      { key: 'time', label: 'Drive Time', value: '~6h25m', unit: '', note: 'Non-stop — a full day once you stop in the mountains' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 1', unit: '', note: 'Divided highway the entire distance' },
    ],
    legs: [
      { from: 'Edmonton', to: 'Red Deer', km: 155, road: 'Hwy 2 · QEII', note: 'The busiest stretch of highway in Alberta' },
      { from: 'Red Deer', to: 'Calgary', km: 146, road: 'Hwy 2 · QEII', note: 'Open parkland, and the mountains appear near the end' },
      { from: 'Calgary', to: 'Banff', km: 129, road: 'Trans-Canada Hwy 1', note: 'Into the Bow Valley and through the park gate' },
      { from: 'Banff', to: 'Lake Louise', km: 59, road: 'Hwy 1 · park', note: 'Fenced highway with the wildlife overpasses' },
    ],
  },

  fuel: {
    summary: 'Never a constraint on this route — the Highway 2 corridor is the busiest in Alberta and services run the whole way. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso', brand: 'Esso', town: 'Edmonton', km: 0, coords: [-113.49418, 53.5552] },
    { name: 'Flying J', brand: 'Flying J', town: 'Edmonton', km: 25, coords: [-113.54268, 53.33947] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 76, coords: [-113.64198, 52.89824] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 100, coords: [-113.60882, 52.67531] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 127, coords: [-113.77253, 52.46433] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Red Deer', km: 149, coords: [-113.87239, 52.28572] },
    { name: 'Shell', brand: 'Shell', town: 'Calgary', km: 253, coords: [-114.02613, 51.43065] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Calgary', km: 277, coords: [-114.00812, 51.21283] },
    { name: 'Centex', brand: 'Centex', town: 'Calgary', km: 293, coords: [-114.0628, 51.07302] },
    { name: 'Esso', brand: 'Esso', town: 'Banff', km: 375, coords: [-115.01621, 51.09928] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Banff', km: 427, coords: [-115.55593, 51.18607] },
    { name: 'Shell', brand: 'Shell', town: 'Lake Louise', km: 488, coords: [-116.17737, 51.42638] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 301, level: 'good', label: 'Edmonton → Calgary', text: 'Solid along the QEII' },
      { fromKm: 301, toKm: 430, level: 'good', label: 'Calgary → Banff', text: 'Good through the Bow Valley' },
      { fromKm: 430, toKm: 489, level: 'fair', label: 'Banff → Lake Louise', text: 'Patchy west of the townsite, gone on the trails' },
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
    { name: 'Delta Edmonton Centre Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49544, 53.54364] },
    { name: 'Best Western City Centre Inn', type: 'Motel', town: 'Edmonton', km: 0, coords: [-113.50884, 53.56291] },
    { name: 'Motel 6', type: 'Motel', town: 'Calgary', km: 267, coords: [-114.00417, 51.30485] },
    { name: 'Best Western Plus', type: 'Hotel', town: 'Calgary', km: 267, coords: [-114.00799, 51.30342] },
    { name: 'WorldMark Canmore - Banff', type: 'Hotel', town: 'Banff', km: 403, coords: [-115.35847, 51.06936] },
    { name: 'Mystic Springs Chalets & Hot Pools', type: 'Hotel', town: 'Banff', km: 404, coords: [-115.34236, 51.08655] },
    { name: 'Charleston Residence', type: 'Hotel', town: 'Lake Louise', km: 487, coords: [-116.17483, 51.42352] },
    { name: 'Deer Lodge', type: 'Hotel', town: 'Lake Louise', km: 488, coords: [-116.20936, 51.41707] },
  ],

  eats: [
    { name: 'Ricky\'s All Day Grill', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.51909, 53.56457] },
    { name: 'Nha Trang Vietnamese Restaurant', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.49478, 53.55905] },
    { name: 'Pizza Hut', type: 'Pizza', town: 'Red Deer', km: 138, coords: [-113.80789, 52.38287] },
    { name: 'Golden Cinnamon Indian Cuisine', type: 'Indian', town: 'Calgary', km: 267, coords: [-114.01534, 51.30119] },
    { name: 'Yum Yum Chicken & BBQ', type: 'Korean', town: 'Calgary', km: 267, coords: [-114.01534, 51.30113] },
    { name: 'La Belle Patate', type: 'Sandwich', town: 'Banff', km: 403, coords: [-115.32371, 51.07839] },
    { name: 'Epi Canmore', type: 'Café', town: 'Banff', km: 403, coords: [-115.32369, 51.07843] },
    { name: 'Lodge of the Ten Peaks', type: 'Restaurant', town: 'Lake Louise', km: 487, coords: [-116.16216, 51.4418] },
    { name: 'Whiskey Jack Lodge', type: 'Restaurant', town: 'Lake Louise', km: 487, coords: [-116.16231, 51.44243] },
  ],
};

export default EDMONTON_BANFF_LAKE_LOUISE_EXPLORER;
