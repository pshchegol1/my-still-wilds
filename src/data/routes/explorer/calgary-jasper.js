// Данные интерактивной карты маршрута Calgary → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './calgary-jasper.line.json';

export const CALGARY_JASPER_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Calgary', coords: [-114.05754, 51.04561] },
  to: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  via: ['Banff', 'Lake Louise', 'Saskatchewan River Crossing'],

  stops: [
    { name: 'Calgary', km: 0, coords: [-114.05754, 51.04561] },
    { name: 'Banff', km: 129, coords: [-115.57208, 51.17508] },
    { name: 'Lake Louise', km: 187, coords: [-116.17754, 51.42497] },
    { name: 'Saskatchewan River Crossing', km: 266, coords: [-116.74256, 51.97356] },
    { name: 'Jasper', km: 420, coords: [-118.08243, 52.87523] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '420', unit: 'km', note: 'Calgary to Jasper via Banff and the Icefields Parkway' },
      { key: 'time', label: 'Drive Time', value: '~6h15m', unit: '', note: 'Non-stop — plan a full day, the parkway is the point' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → Hwy 93', unit: '', note: 'Divided to Lake Louise, then two-lane parkway' },
    ],
    legs: [
      { from: 'Calgary', to: 'Banff', km: 129, road: 'Trans-Canada Hwy 1', note: 'Into the Bow Valley and the park gate' },
      { from: 'Banff', to: 'Lake Louise', km: 58, road: 'Hwy 1 · park', note: 'The last divided highway of the drive' },
      { from: 'Lake Louise', to: 'Saskatchewan River Crossing', km: 79, road: 'Hwy 93 · Bow Summit', note: 'Over the 2,069 m high point past Peyto Lake' },
      { from: 'Saskatchewan River Crossing', to: 'Jasper', km: 154, road: 'Hwy 93 · Columbia Icefield', note: 'The glacier section and the long descent to Jasper' },
    ],
  },

  fuel: {
    summary: 'This is the route where fuel matters. Fill at Lake Louise before the Icefields Parkway: Saskatchewan River Crossing is the only pump for about 150 km and it is seasonal. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 0, coords: [-114.04895, 51.06728] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 32, coords: [-114.47448, 51.08738] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Banff', km: 103, coords: [-115.34608, 51.08606] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 187, level: 'good', label: 'Calgary → Lake Louise', text: 'Good along the Trans-Canada' },
      { fromKm: 187, toKm: 400, level: 'poor', label: 'The Icefields Parkway', text: 'Effectively nothing for 200 km' },
      { fromKm: 400, toKm: 420, level: 'fair', label: 'Into Jasper', text: 'Returns near the townsite' },
    ],
  },

  weather: {
    intro: 'Two very different approaches to the same park: the Yellowhead is a working highway that stays serviced all winter, the Icefields Parkway is not.',
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
          'June to September, when the parkway services and park facilities are open',
          'September for clear air, fewer vehicles and stable roads',
          'Any time of year on the Yellowhead, which is the all-season approach',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Elk and bighorn sheep on the roads around the townsite',
          'Smoke from summer wildfires can close highways at short notice',
          'Shoulder season closes the seasonal fuel at Saskatchewan River Crossing',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'The Icefields Parkway in a winter storm — unserviced, no signal, avalanche closures',
          'Any parkway drive without a full tank and winter tires in the cold months',
          'Night driving on the parkway, where wildlife and no lighting combine badly',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Jasper National Park', href: 'https://parks.canada.ca/pn-np/ab/jasper' },
    ],
  },

  hotels: [
    { name: 'Days Inn', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.06038, 51.02049] },
    { name: 'Hotel Arts', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.06489, 51.04129] },
    { name: 'Num-Ti-Jah Lodge', type: 'Hotel', town: 'Lake Louise', km: 226, coords: [-116.46649, 51.67849] },
    { name: 'The Crossing Resort', type: 'Motel', town: 'Saskatchewan River Crossing', km: 267, coords: [-116.74739, 51.97418] },
    { name: 'Glacier View Lodge', type: 'Hotel', town: 'Saskatchewan River Crossing', km: 316, coords: [-117.22426, 52.22038] },
  ],

  eats: [
    { name: 'Silver Dragon Restaurant', type: 'Chinese', town: 'Calgary', km: 0, coords: [-114.06228, 51.05038] },
    { name: 'Regency Palace Restaurant', type: 'Restaurant', town: 'Calgary', km: 0, coords: [-114.06207, 51.04952] },
    { name: 'Cliffhouse Bistro', type: 'Café', town: 'Banff', km: 132, coords: [-115.61183, 51.19941] },
    { name: 'Parkway Pub', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 267, coords: [-116.7473, 51.97411] },
    { name: 'The Crossing Cafe', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 267, coords: [-116.74688, 51.97345] },
  ],
};

export default CALGARY_JASPER_EXPLORER;
