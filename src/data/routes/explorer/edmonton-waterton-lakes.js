// Данные интерактивной карты маршрута Edmonton → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './edmonton-waterton-lakes.line.json';

export const EDMONTON_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Edmonton', coords: [-113.49124, 53.54621] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Red Deer', 'Calgary', 'Fort Macleod'],

  stops: [
    { name: 'Edmonton', km: 0, coords: [-113.49124, 53.54621] },
    { name: 'Red Deer', km: 155, coords: [-113.81415, 52.26906] },
    { name: 'Calgary', km: 301, coords: [-114.05754, 51.04561] },
    { name: 'Fort Macleod', km: 473, coords: [-113.4076, 49.72674] },
    { name: 'Waterton Lakes', km: 579, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '579', unit: 'km', note: 'Edmonton to Waterton via Red Deer, Calgary and Fort Macleod' },
      { key: 'time', label: 'Drive Time', value: '~7h25m', unit: '', note: 'Non-stop — a full day, worth splitting at Calgary' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 5/6', unit: '', note: 'Divided highway almost the entire way' },
    ],
    legs: [
      { from: 'Edmonton', to: 'Red Deer', km: 155, road: 'Hwy 2 · QEII', note: 'The busiest corridor in the province' },
      { from: 'Red Deer', to: 'Calgary', km: 146, road: 'Hwy 2 · QEII', note: 'Open parkland, mountains on the horizon at the end' },
      { from: 'Calgary', to: 'Fort Macleod', km: 172, road: 'Hwy 2 south', note: 'Chinook country with the Rockies on your right' },
      { from: 'Fort Macleod', to: 'Waterton Lakes', km: 106, road: 'Hwy 3 → Hwy 6', note: 'Toward the mountains, which rise straight out of the fields' },
    ],
  },

  fuel: {
    summary: 'Easy until the last hour. Pincher Creek and Cardston are the last proper stops, and fuel in the Waterton townsite is limited and seasonal — arrive with enough to leave again. Pins are only the stations mapped in OpenStreetMap.',
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
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 323, coords: [-113.9611, 50.9173] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 351, coords: [-113.88674, 50.69619] },
    { name: 'Johnson\'s Petroleum', brand: 'Johnson\'s Petroleum', town: 'Fort Macleod', km: 450, coords: [-113.50786, 49.87302] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 472, coords: [-113.41388, 49.72211] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Fort Macleod', km: 523, coords: [-113.93147, 49.48533] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 578, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 473, level: 'good', label: 'Edmonton → Fort Macleod', text: 'Solid along the Highway 2 corridor' },
      { fromKm: 473, toKm: 579, level: 'fair', label: 'Into Waterton', text: 'Thins out and goes patchy inside the park' },
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
    { name: 'Delta Edmonton Centre Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49544, 53.54364] },
    { name: 'Best Western City Centre Inn', type: 'Motel', town: 'Edmonton', km: 0, coords: [-113.50884, 53.56291] },
    { name: 'Motel 6', type: 'Motel', town: 'Calgary', km: 267, coords: [-114.00417, 51.30485] },
    { name: 'Best Western Plus', type: 'Hotel', town: 'Calgary', km: 267, coords: [-114.00799, 51.30342] },
  ],

  eats: [
    { name: 'Ricky\'s All Day Grill', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.51909, 53.56457] },
    { name: 'Nha Trang Vietnamese Restaurant', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.49478, 53.55905] },
    { name: 'Pizza Hut', type: 'Pizza', town: 'Red Deer', km: 138, coords: [-113.80789, 52.38287] },
    { name: 'Golden Cinnamon Indian Cuisine', type: 'Indian', town: 'Calgary', km: 267, coords: [-114.01534, 51.30119] },
    { name: 'Yum Yum Chicken & BBQ', type: 'Korean', town: 'Calgary', km: 267, coords: [-114.01534, 51.30113] },
  ],
};

export default EDMONTON_WATERTON_LAKES_EXPLORER;
