// Данные интерактивной карты маршрута Red Deer → Banff & Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './red-deer-banff-lake-louise.line.json';

export const RED_DEER_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Red Deer', coords: [-113.81415, 52.26906] },
  to: { name: 'Lake Louise', coords: [-116.17754, 51.42497] },
  via: ['Calgary', 'Banff'],

  stops: [
    { name: 'Red Deer', km: 0, coords: [-113.81415, 52.26906] },
    { name: 'Calgary', km: 147, coords: [-114.05754, 51.04561] },
    { name: 'Banff', km: 276, coords: [-115.57208, 51.17508] },
    { name: 'Lake Louise', km: 334, coords: [-116.17754, 51.42497] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '334', unit: 'km', note: 'Red Deer to Lake Louise via Calgary and Banff' },
      { key: 'time', label: 'Drive Time', value: '~4h25m', unit: '', note: 'Non-stop — a day trip if you leave early' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 1', unit: '', note: 'Divided highway throughout' },
    ],
    legs: [
      { from: 'Red Deer', to: 'Calgary', km: 147, road: 'Hwy 2 · QEII', note: 'Ninety minutes of open parkland' },
      { from: 'Calgary', to: 'Banff', km: 129, road: 'Trans-Canada Hwy 1', note: 'West into the mountains' },
      { from: 'Banff', to: 'Lake Louise', km: 58, road: 'Hwy 1 · park', note: 'Fenced park highway' },
    ],
  },

  fuel: {
    summary: 'Never a constraint on this route — the Highway 2 corridor is the busiest in Alberta and services run the whole way. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Centex', brand: 'Centex', town: 'Red Deer', km: 0, coords: [-113.77382, 52.26611] },
    { name: 'Chevron', brand: 'Chevron', town: 'Calgary', km: 137, coords: [-114.03282, 51.09465] },
    { name: 'Chevron', brand: 'Chevron', town: 'Calgary', km: 208, coords: [-114.84457, 51.1461] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 275, coords: [-115.57419, 51.17871] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 276, level: 'good', label: 'Red Deer → Banff', text: 'Solid along the QEII and Trans-Canada' },
      { fromKm: 276, toKm: 334, level: 'fair', label: 'Banff → Lake Louise', text: 'Patchy west of the townsite' },
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
    { name: 'Radisson Hotel', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.84213, 52.28938] },
    { name: 'Baymont By Wyndham Red Deer', type: 'Hotel', town: 'Red Deer', km: 1, coords: [-113.81052, 52.26224] },
    { name: 'Hyatt Place', type: 'Hotel', town: 'Calgary', km: 132, coords: [-114.03476, 51.13745] },
    { name: 'Hidden Ridge Resort', type: 'Hotel', town: 'Banff', km: 271, coords: [-115.54615, 51.18813] },
    { name: 'Lobby', type: 'Hotel', town: 'Banff', km: 271, coords: [-115.54679, 51.18768] },
  ],

  eats: [
    { name: 'Westlake Grill', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.85139, 52.2619] },
    { name: 'Babycakes Cupcakery', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.77381, 52.2663] },
    { name: 'Madisons Restaurant and Bar', type: 'Restaurant', town: 'Calgary', km: 133, coords: [-114.07308, 51.12675] },
    { name: 'Shanghai Classic Restaurant', type: 'Chinese', town: 'Calgary', km: 133, coords: [-114.07033, 51.12829] },
    { name: 'Alpha Bistro', type: 'Restaurant', town: 'Banff', km: 270, coords: [-115.53587, 51.19983] },
    { name: 'Buffalo Mountain Cafe', type: 'Café', town: 'Banff', km: 272, coords: [-115.55149, 51.184] },
  ],
};

export default RED_DEER_BANFF_LAKE_LOUISE_EXPLORER;
