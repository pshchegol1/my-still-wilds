// Данные интерактивной карты маршрута Edmonton → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './edmonton-elk-island.line.json';

export const EDMONTON_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Edmonton', coords: [-113.4912, 53.5462] },
  to: { name: 'Elk Island NP', coords: [-112.8773, 53.6114] },
  via: ['Sherwood Park'],

  stops: [
    { name: 'Edmonton', km: 0, coords: [-113.4912, 53.5462] },
    { name: 'Sherwood Park', km: 17, coords: [-113.2966, 53.5257] },
    { name: 'Elk Island NP', km: 60, coords: [-112.8773, 53.6114] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '60', unit: 'km', note: 'Downtown Edmonton to the park gate on Hwy 16' },
      { key: 'time', label: 'Drive Time', value: '~1h', unit: '', note: 'With city traffic — closer to 40 minutes from the east side' },
      { key: 'road', label: 'Road Type', value: 'Hwy 16', unit: '', note: 'The Yellowhead, divided four-lane the entire way' },
    ],
    legs: [
      { from: 'Edmonton', to: 'Sherwood Park', km: 17, road: 'Hwy 16 · Yellowhead', note: 'Through the east side of the city — the slow part' },
      { from: 'Sherwood Park', to: 'Elk Island NP', km: 43, road: 'Hwy 16', note: 'Open four-lane across farmland to the Beaver Hills' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around on a 60 km drive. Sherwood Park and Fort Saskatchewan have everything, and there is no fuel inside the park. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso', brand: 'Esso', town: 'Edmonton', km: 0, coords: [-113.49418, 53.5552] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 8, coords: [-113.41887, 53.49882] },
    { name: '7-Eleven', brand: '7-Eleven', town: 'Sherwood Park', km: 16, coords: [-113.32074, 53.53504] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Sherwood Park', km: 24, coords: [-113.27209, 53.5649] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Sherwood Park', km: 32, coords: [-113.14739, 53.55485] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Elk Island NP', km: 42, coords: [-113.00616, 53.57093] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 60, level: 'good', label: 'Edmonton → Elk Island', text: 'Good the whole way and inside the park' },
    ],
  },

  weather: {
    intro: 'An easy drive year-round. The season changes what you see rather than whether you get there — snow makes the bison easier to spot, summer brings the mosquitoes.',
    months: [
      { m: 'Jan', level: 'fair' }, { m: 'Feb', level: 'fair' }, { m: 'Mar', level: 'good' },
      { m: 'Apr', level: 'good' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'fair' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Year-round — the park never closes and the highway is always ploughed',
          'September and October for the aspen turning and no insects',
          'Clear winter nights for the Beaver Hills Dark Sky Preserve',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Deep winter cold snaps make a roadside stop unpleasant fast',
          'Mosquitoes are serious on the trails in July',
          'Aurora nights draw crowds; some areas have been closed after overuse',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Prairie blizzards close Hwy 16 a few times each winter — check 511 Alberta',
          'Never leave your vehicle when bison are on the parkway, in any weather',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Elk Island National Park', href: 'https://parks.canada.ca/pn-np/ab/elkisland' },
    ],
  },

  hotels: [
    { name: 'Delta Edmonton Centre Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49544, 53.54364] },
    { name: 'Best Western City Centre Inn', type: 'Motel', town: 'Edmonton', km: 0, coords: [-113.50884, 53.56291] },
    { name: 'Ramada Inn', type: 'Hotel', town: 'Sherwood Park', km: 20, coords: [-113.31922, 53.54549] },
    { name: 'Days Inn', type: 'Hotel', town: 'Sherwood Park', km: 21, coords: [-113.2988, 53.55416] },
  ],

  eats: [
    { name: 'Ricky\'s All Day Grill', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.51909, 53.56457] },
    { name: 'Nha Trang Vietnamese Restaurant', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.49478, 53.55905] },
    { name: 'Buffet Royale', type: 'Buffet', town: 'Sherwood Park', km: 14, coords: [-113.33193, 53.51312] },
    { name: 'The Chopped Leaf', type: 'Salad', town: 'Sherwood Park', km: 14, coords: [-113.31834, 53.51322] },
  ],
};

export default EDMONTON_ELK_ISLAND_EXPLORER;
