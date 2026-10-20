// Данные интерактивной карты маршрута Jasper → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './jasper-waterton-lakes.line.json';

export const JASPER_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Lake Louise', 'Calgary', 'Fort Macleod'],

  stops: [
    { name: 'Jasper', km: 0, coords: [-118.08243, 52.87523] },
    { name: 'Lake Louise', km: 231, coords: [-116.17754, 51.42497] },
    { name: 'Calgary', km: 414, coords: [-114.05754, 51.04561] },
    { name: 'Fort Macleod', km: 586, coords: [-113.4076, 49.72674] },
    { name: 'Waterton Lakes', km: 692, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '692', unit: 'km', note: 'Jasper to Waterton via the Icefields Parkway, Calgary and Fort Macleod' },
      { key: 'time', label: 'Drive Time', value: '~9h35m', unit: '', note: 'Non-stop — this is a two-day route' },
      { key: 'road', label: 'Road Type', value: 'Hwy 93 → 1 → 2 → 6', unit: '', note: 'Parkway, then divided highway, then mountains again' },
    ],
    legs: [
      { from: 'Jasper', to: 'Lake Louise', km: 231, road: 'Hwy 93 · Icefields Parkway', note: 'Glaciers and no services — fill up before you start' },
      { from: 'Lake Louise', to: 'Calgary', km: 183, road: 'Trans-Canada Hwy 1', note: 'Out of the mountains and onto the prairie' },
      { from: 'Calgary', to: 'Fort Macleod', km: 172, road: 'Hwy 2 south', note: 'Chinook country, mountains on the right' },
      { from: 'Fort Macleod', to: 'Waterton Lakes', km: 106, road: 'Hwy 3 → Hwy 6', note: 'Back into the Rockies at the southern end' },
    ],
  },

  fuel: {
    summary: 'Two different problems in one drive. Fill in Jasper for the parkway, where the only pump is seasonal, then it is easy from Lake Louise all the way south until the last hour. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 0, coords: [-118.08198, 52.87382] },
    { name: 'Centex', brand: 'Centex', town: 'Lake Louise', km: 152, coords: [-116.74604, 51.97346] },
    { name: 'GB Fuels', brand: 'GB Fuels', town: 'Calgary', km: 328, coords: [-115.16277, 51.05958] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 398, coords: [-114.239, 51.10748] },
    { name: 'BVD Petroleum', brand: 'BVD Petroleum', town: 'Calgary', km: 422, coords: [-113.99992, 51.008] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Macleod', km: 585, coords: [-113.41388, 49.72211] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 691, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 215, level: 'poor', label: 'The Icefields Parkway', text: 'Effectively nothing for 200 km' },
      { fromKm: 215, toKm: 586, level: 'good', label: 'Lake Louise → Fort Macleod', text: 'Good from the Trans-Canada south' },
      { fromKm: 586, toKm: 692, level: 'fair', label: 'Into Waterton', text: 'Patchy inside the park' },
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
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.0796, 52.87869] },
    { name: 'Japanese Adult Learning Centre', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.0791, 52.88427] },
  ],

  eats: [
    { name: 'Coco\'s Café', type: 'Café', town: 'Jasper', km: 0, coords: [-118.08207, 52.87537] },
    { name: 'Lou Lou\'s', type: 'Italian', town: 'Jasper', km: 0, coords: [-118.0805, 52.87849] },
    { name: 'Smitty\'s', type: 'Pancake', town: 'Calgary', km: 353, coords: [-114.84498, 51.14625] },
    { name: 'Kitamba Java', type: 'Café', town: 'Calgary', km: 416, coords: [-114.02852, 51.04556] },
  ],
};

export default JASPER_WATERTON_LAKES_EXPLORER;
