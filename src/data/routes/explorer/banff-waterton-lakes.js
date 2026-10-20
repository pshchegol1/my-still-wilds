// Данные интерактивной карты маршрута Banff → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './banff-waterton-lakes.line.json';

export const BANFF_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Banff', coords: [-115.57208, 51.17508] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Calgary', 'Fort Macleod'],

  stops: [
    { name: 'Banff', km: 0, coords: [-115.57208, 51.17508] },
    { name: 'Calgary', km: 129, coords: [-114.05754, 51.04561] },
    { name: 'Fort Macleod', km: 301, coords: [-113.4076, 49.72674] },
    { name: 'Waterton Lakes', km: 406, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '406', unit: 'km', note: 'Banff to Waterton via Calgary and Fort Macleod' },
      { key: 'time', label: 'Drive Time', value: '~5h20m', unit: '', note: 'Non-stop — the park-to-park day most itineraries underestimate' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → 2 → 6', unit: '', note: 'Out of the mountains, across the prairie, back in' },
    ],
    legs: [
      { from: 'Banff', to: 'Calgary', km: 129, road: 'Trans-Canada Hwy 1', note: 'East and out of the Rockies' },
      { from: 'Calgary', to: 'Fort Macleod', km: 172, road: 'Hwy 2 south', note: 'Chinook country with the mountains on your right' },
      { from: 'Fort Macleod', to: 'Waterton Lakes', km: 105, road: 'Hwy 3 → Hwy 6', note: 'Back into the mountains at the far south end' },
    ],
  },

  fuel: {
    summary: 'Easy until the last hour. Pincher Creek and Cardston are the last proper stops, and fuel in the Waterton townsite is limited and seasonal — arrive with enough to leave again. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 1, coords: [-115.57419, 51.17871] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 23, coords: [-115.363, 51.10361] },
    { name: 'Tempo', brand: 'Tempo', town: 'Calgary', km: 122, coords: [-114.14285, 51.04601] },
    { name: 'Centex', brand: 'Centex', town: 'Calgary', km: 146, coords: [-114.00189, 50.9429] },
    { name: 'Johnson\'s Petroleum', brand: 'Johnson\'s Petroleum', town: 'Fort Macleod', km: 277, coords: [-113.50786, 49.87302] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 300, coords: [-113.41388, 49.72211] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Fort Macleod', km: 350, coords: [-113.93147, 49.48533] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 405, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 129, level: 'fair', label: 'Banff → Calgary', text: 'Patchy in the valley, good near the city' },
      { fromKm: 129, toKm: 301, level: 'good', label: 'Calgary → Fort Macleod', text: 'Solid across the prairie' },
      { fromKm: 301, toKm: 406, level: 'fair', label: 'Into Waterton', text: 'Patchy inside the park' },
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
    { name: 'Brewster\'s Mountain Lodge', type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57213, 51.17677] },
    { name: 'King Edward Hotel', type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57119, 51.17653] },
    { name: 'Prince of Wales Hotel', type: 'Hotel', town: 'Waterton Lakes', km: 404, coords: [-113.90407, 49.05841] },
    { name: 'Crandell Mountain Lodge', type: 'Hotel', town: 'Waterton Lakes', km: 405, coords: [-113.91132, 49.05526] },
  ],

  eats: [
    { name: 'Wild Flour Bakery', type: 'Café', town: 'Banff', km: 0, coords: [-115.5726, 51.17715] },
    { name: 'Vistas Dining Room', type: 'Restaurant', town: 'Banff', km: 0, coords: [-115.56126, 51.17176] },
    { name: 'Rosso Coffee Roasters', type: 'Café', town: 'Calgary', km: 131, coords: [-114.03134, 51.04025] },
    { name: 'The Attic Bar & Stage', type: 'Pizza', town: 'Calgary', km: 131, coords: [-114.0309, 51.03975] },
    { name: 'Macleods Restrant and Lounge', type: 'Restaurant', town: 'Fort Macleod', km: 300, coords: [-113.40616, 49.72494] },
    { name: 'Macleod Pizza', type: 'Pizza', town: 'Fort Macleod', km: 300, coords: [-113.39887, 49.72526] },
    { name: 'Lakeside Chophouse', type: 'Restaurant', town: 'Waterton Lakes', km: 405, coords: [-113.90664, 49.05197] },
    { name: 'Fireside Lounge', type: 'Restaurant', town: 'Waterton Lakes', km: 405, coords: [-113.90656, 49.05204] },
  ],
};

export default BANFF_WATERTON_LAKES_EXPLORER;
