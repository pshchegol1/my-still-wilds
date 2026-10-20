// Данные интерактивной карты маршрута Canmore → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './canmore-waterton-lakes.line.json';

export const CANMORE_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Canmore', coords: [-115.36058, 51.08982] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Calgary', 'Fort Macleod'],

  stops: [
    { name: 'Canmore', km: 0, coords: [-115.36058, 51.08982] },
    { name: 'Calgary', km: 104, coords: [-114.05754, 51.04561] },
    { name: 'Fort Macleod', km: 277, coords: [-113.4076, 49.72674] },
    { name: 'Waterton Lakes', km: 382, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '382', unit: 'km', note: 'Canmore to Waterton via Calgary and Fort Macleod' },
      { key: 'time', label: 'Drive Time', value: '~5h', unit: '', note: 'Non-stop — a long but straightforward day' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → 2 → 6', unit: '', note: 'Divided highway for most of the distance' },
    ],
    legs: [
      { from: 'Canmore', to: 'Calgary', km: 104, road: 'Trans-Canada Hwy 1', note: 'East out of the mountain corridor' },
      { from: 'Calgary', to: 'Fort Macleod', km: 173, road: 'Hwy 2 south', note: 'The Rockies stay on your right the whole way' },
      { from: 'Fort Macleod', to: 'Waterton Lakes', km: 105, road: 'Hwy 3 → Hwy 6', note: 'Prairie straight into mountains, no foothills' },
    ],
  },

  fuel: {
    summary: 'Easy until the last hour. Pincher Creek and Cardston are the last proper stops, and fuel in the Waterton townsite is limited and seasonal — arrive with enough to leave again. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso Express', brand: 'Esso Express', town: 'Canmore', km: 0, coords: [-115.36242, 51.10284] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 72, coords: [-114.47448, 51.08738] },
    { name: 'Tempo', brand: 'Tempo', town: 'Calgary', km: 98, coords: [-114.14285, 51.04601] },
    { name: '7-Eleven', brand: '7-Eleven', town: 'Calgary', km: 122, coords: [-114.01678, 50.93244] },
    { name: 'Johnson\'s Petroleum', brand: 'Johnson\'s Petroleum', town: 'Fort Macleod', km: 253, coords: [-113.50786, 49.87302] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 275, coords: [-113.41388, 49.72211] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Fort Macleod', km: 326, coords: [-113.93147, 49.48533] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 381, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 277, level: 'good', label: 'Canmore → Fort Macleod', text: 'Good along the highway corridor' },
      { fromKm: 277, toKm: 382, level: 'fair', label: 'Into Waterton', text: 'Patchy inside the park' },
    ],
  },

  weather: {
    intro: 'The wind is the story here. Waterton sits where the prairie hits the mountains with nothing in between, and the gusts that produces close highways and shut the park’s own roads.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June to September, when the townsite and the park roads are fully open',
          'September for warm days, no crowds and the best light on the lakes',
          'Any calm day — wind matters more here than temperature',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Gusts over 100 km/h are routine; high-sided vehicles get pushed around',
          'Much of the park’s road network closes outside the summer season',
          'Bears are active along the Akamina and Red Rock parkways',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Ground blizzards close Hwy 5 and 6 several times most winters',
          'Black ice after a chinook thaw refreezes overnight',
          'Wind warnings — this is the windiest corner of the Canadian Rockies',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Waterton Lakes National Park', href: 'https://parks.canada.ca/pn-np/ab/waterton' },
    ],
  },

  hotels: [
    { name: 'Paintbox Lodge', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.35773, 51.09018] },
    { name: 'Quality Resort Chateau Canmore', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.36075, 51.09962] },
    { name: 'Four Points by Sheraton Calgary West', type: 'Hotel', town: 'Calgary', km: 91, coords: [-114.20597, 51.08353] },
    { name: 'Sandman Hotel & Suites Calgary West', type: 'Hotel', town: 'Calgary', km: 91, coords: [-114.20887, 51.08528] },
    { name: 'Prince of Wales Hotel', type: 'Hotel', town: 'Waterton Lakes', km: 380, coords: [-113.90407, 49.05841] },
    { name: 'Northland Lodge', type: 'Hotel', town: 'Waterton Lakes', km: 381, coords: [-113.91642, 49.0501] },
  ],

  eats: [
    { name: 'Bakery Cafe', type: 'Café', town: 'Canmore', km: 0, coords: [-115.36103, 51.08957] },
    { name: 'Murrieta\'s Bar & Grill', type: 'Restaurant', town: 'Canmore', km: 0, coords: [-115.36064, 51.08911] },
    { name: 'Great Canadian Pizza/ Butter Chicken Hut', type: 'Pizza', town: 'Calgary', km: 89, coords: [-114.24028, 51.10744] },
    { name: 'Tim Hortons', type: 'Café', town: 'Calgary', km: 89, coords: [-114.2401, 51.10743] },
    { name: 'Macleods Restrant and Lounge', type: 'Restaurant', town: 'Fort Macleod', km: 276, coords: [-113.40616, 49.72494] },
    { name: 'Macleod Pizza', type: 'Pizza', town: 'Fort Macleod', km: 276, coords: [-113.39887, 49.72526] },
    { name: 'Zum\'s Eatery', type: 'Restaurant', town: 'Waterton Lakes', km: 381, coords: [-113.90718, 49.05105] },
    { name: 'The Taco Bar', type: 'Restaurant', town: 'Waterton Lakes', km: 381, coords: [-113.90882, 49.05121] },
  ],
};

export default CANMORE_WATERTON_LAKES_EXPLORER;
