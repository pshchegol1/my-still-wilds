// Данные интерактивной карты маршрута Lethbridge → Banff & Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './lethbridge-banff-lake-louise.line.json';

export const LETHBRIDGE_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Lethbridge', coords: [-112.8331, 49.69458] },
  to: { name: 'Lake Louise', coords: [-116.17754, 51.42497] },
  via: ['Fort Macleod', 'Calgary', 'Banff'],

  stops: [
    { name: 'Lethbridge', km: 0, coords: [-112.8331, 49.69458] },
    { name: 'Fort Macleod', km: 50, coords: [-113.4076, 49.72674] },
    { name: 'Calgary', km: 218, coords: [-114.05754, 51.04561] },
    { name: 'Banff', km: 347, coords: [-115.57208, 51.17508] },
    { name: 'Lake Louise', km: 405, coords: [-116.17754, 51.42497] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '405', unit: 'km', note: 'Lethbridge to Lake Louise via Fort Macleod, Calgary and Banff' },
      { key: 'time', label: 'Drive Time', value: '~5h25m', unit: '', note: 'Non-stop — an easy long day on good roads' },
      { key: 'road', label: 'Road Type', value: 'Hwy 3 → 2 → 1', unit: '', note: 'Divided or twinned the whole way' },
    ],
    legs: [
      { from: 'Lethbridge', to: 'Fort Macleod', km: 50, road: 'Hwy 3', note: 'West across irrigated prairie' },
      { from: 'Fort Macleod', to: 'Calgary', km: 168, road: 'Hwy 2 north', note: 'Chinook country with the Rockies on the left' },
      { from: 'Calgary', to: 'Banff', km: 129, road: 'Trans-Canada Hwy 1', note: 'West into the Bow Valley' },
      { from: 'Banff', to: 'Lake Louise', km: 58, road: 'Hwy 1 · park', note: 'The last stretch inside the park' },
    ],
  },

  fuel: {
    summary: 'Never a constraint on this route — the Highway 2 corridor is the busiest in Alberta and services run the whole way. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Gas King', brand: 'Gas King', town: 'Lethbridge', km: 0, coords: [-112.80238, 49.67981] },
    { name: 'Shell', brand: 'Shell', town: 'Fort Macleod', km: 48, coords: [-113.39623, 49.72509] },
    { name: 'Shell', brand: 'Shell', town: 'Calgary', km: 197, coords: [-113.99033, 50.9022] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 221, coords: [-114.11751, 51.05752] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 250, coords: [-114.47448, 51.08738] },
    { name: 'Esso Express', brand: 'Esso Express', town: 'Banff', km: 323, coords: [-115.36242, 51.10284] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Banff', km: 343, coords: [-115.55593, 51.18607] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 218, level: 'good', label: 'Lethbridge → Calgary', text: 'Solid across the southern prairie' },
      { fromKm: 218, toKm: 347, level: 'good', label: 'Calgary → Banff', text: 'Good through the Bow Valley' },
      { fromKm: 347, toKm: 405, level: 'fair', label: 'Banff → Lake Louise', text: 'Patchy west of the townsite' },
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
    { name: 'Superlodge', type: 'Motel', town: 'Lethbridge', km: 0, coords: [-112.80914, 49.68907] },
    { name: 'Econo Lodge Inn', type: 'Hotel', town: 'Lethbridge', km: 0, coords: [-112.80483, 49.6813] },
    { name: 'Motel 6', type: 'Motel', town: 'Fort Macleod', km: 92, coords: [-113.58991, 50.03996] },
    { name: 'Centro Motel', type: 'Motel', town: 'Calgary', km: 227, coords: [-114.16034, 51.07025] },
    { name: 'Traveller\'s Inn', type: 'Motel', town: 'Calgary', km: 227, coords: [-114.1614, 51.07008] },
    { name: 'Pigeon Mountain Motel', type: 'Motel', town: 'Banff', km: 313, coords: [-115.2622, 51.03959] },
    { name: 'Big Horn Motel', type: 'Motel', town: 'Banff', km: 313, coords: [-115.26441, 51.03945] },
  ],

  eats: [
    { name: 'The Penny Coffee House', type: 'Café', town: 'Lethbridge', km: 0, coords: [-112.83995, 49.69454] },
    { name: 'Koko Japanese Restaurant', type: 'Japanese', town: 'Lethbridge', km: 0, coords: [-112.83929, 49.69449] },
    { name: 'Tim Hortons', type: 'Café', town: 'Fort Macleod', km: 48, coords: [-113.39077, 49.72329] },
    { name: 'Macleod Pizza', type: 'Pizza', town: 'Fort Macleod', km: 49, coords: [-113.39887, 49.72526] },
    { name: 'Second Cup', type: 'Café', town: 'Calgary', km: 223, coords: [-114.12697, 51.03758] },
    { name: 'Pizza Bob\'s', type: 'Pizza', town: 'Calgary', km: 223, coords: [-114.12129, 51.05278] },
    { name: 'one98eight', type: 'Restaurant', town: 'Banff', km: 313, coords: [-115.26544, 51.03938] },
    { name: 'Husky House', type: 'Diner', town: 'Banff', km: 313, coords: [-115.26322, 51.03957] },
  ],
};

export default LETHBRIDGE_BANFF_LAKE_LOUISE_EXPLORER;
