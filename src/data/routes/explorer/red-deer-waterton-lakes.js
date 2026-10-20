// Данные интерактивной карты маршрута Red Deer → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './red-deer-waterton-lakes.line.json';

export const RED_DEER_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Red Deer', coords: [-113.81415, 52.26906] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Calgary', 'Fort Macleod'],

  stops: [
    { name: 'Red Deer', km: 0, coords: [-113.81415, 52.26906] },
    { name: 'Calgary', km: 147, coords: [-114.05754, 51.04561] },
    { name: 'Fort Macleod', km: 319, coords: [-113.4076, 49.72674] },
    { name: 'Waterton Lakes', km: 424, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '424', unit: 'km', note: 'Red Deer to Waterton via Calgary and Fort Macleod' },
      { key: 'time', label: 'Drive Time', value: '~5h25m', unit: '', note: 'Non-stop — easy driving, but a full day with the park' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 5/6', unit: '', note: 'Divided almost throughout' },
    ],
    legs: [
      { from: 'Red Deer', to: 'Calgary', km: 147, road: 'Hwy 2 · QEII', note: 'Ninety minutes of open parkland' },
      { from: 'Calgary', to: 'Fort Macleod', km: 172, road: 'Hwy 2 south', note: 'Chinook country with the Rockies on your right' },
      { from: 'Fort Macleod', to: 'Waterton Lakes', km: 105, road: 'Hwy 3 → Hwy 6', note: 'The turn toward the mountains' },
    ],
  },

  fuel: {
    summary: 'Easy until the last hour. Pincher Creek and Cardston are the last proper stops, and fuel in the Waterton townsite is limited and seasonal — arrive with enough to leave again. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Centex', brand: 'Centex', town: 'Red Deer', km: 0, coords: [-113.77382, 52.26611] },
    { name: 'Shell', brand: 'Shell', town: 'Calgary', km: 99, coords: [-114.02613, 51.43065] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Calgary', km: 123, coords: [-114.00812, 51.21283] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Calgary', km: 140, coords: [-114.00486, 51.07095] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 152, coords: [-113.99284, 51.0375] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 173, coords: [-113.95862, 50.88018] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 277, coords: [-113.58612, 50.03348] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 318, coords: [-113.41388, 49.72211] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 423, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 319, level: 'good', label: 'Red Deer → Fort Macleod', text: 'Solid along the Highway 2 corridor' },
      { fromKm: 319, toKm: 424, level: 'fair', label: 'Into Waterton', text: 'Patchy inside the park' },
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
    { name: 'Radisson Hotel', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.84213, 52.28938] },
    { name: 'Baymont By Wyndham Red Deer', type: 'Hotel', town: 'Red Deer', km: 1, coords: [-113.81052, 52.26224] },
    { name: 'Hyatt Place', type: 'Hotel', town: 'Calgary', km: 132, coords: [-114.03476, 51.13745] },
    { name: 'Prince of Wales Hotel', type: 'Hotel', town: 'Waterton Lakes', km: 422, coords: [-113.90407, 49.05841] },
    { name: 'Crandell Mountain Lodge', type: 'Hotel', town: 'Waterton Lakes', km: 423, coords: [-113.91132, 49.05526] },
  ],

  eats: [
    { name: 'Westlake Grill', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.85139, 52.2619] },
    { name: 'Babycakes Cupcakery', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.77381, 52.2663] },
    { name: 'Madisons Restaurant and Bar', type: 'Restaurant', town: 'Calgary', km: 133, coords: [-114.07308, 51.12675] },
    { name: 'Shanghai Classic Restaurant', type: 'Chinese', town: 'Calgary', km: 133, coords: [-114.07033, 51.12829] },
    { name: 'Macleods Restrant and Lounge', type: 'Restaurant', town: 'Fort Macleod', km: 318, coords: [-113.40616, 49.72494] },
    { name: 'Macleod Pizza', type: 'Pizza', town: 'Fort Macleod', km: 318, coords: [-113.39887, 49.72526] },
    { name: 'Lakeside Chophouse', type: 'Restaurant', town: 'Waterton Lakes', km: 423, coords: [-113.90664, 49.05197] },
    { name: 'Fireside Lounge', type: 'Restaurant', town: 'Waterton Lakes', km: 423, coords: [-113.90656, 49.05204] },
  ],
};

export default RED_DEER_WATERTON_LAKES_EXPLORER;
