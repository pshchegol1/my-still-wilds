// Данные интерактивной карты маршрута Canmore → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './canmore-jasper.line.json';

export const CANMORE_JASPER_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Canmore', coords: [-115.36058, 51.08982] },
  to: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  via: ['Lake Louise', 'Saskatchewan River Crossing'],

  stops: [
    { name: 'Canmore', km: 0, coords: [-115.36058, 51.08982] },
    { name: 'Lake Louise', km: 80, coords: [-116.17754, 51.42497] },
    { name: 'Saskatchewan River Crossing', km: 159, coords: [-116.74256, 51.97356] },
    { name: 'Jasper', km: 313, coords: [-118.08243, 52.87523] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '313', unit: 'km', note: 'Canmore to Jasper via Lake Louise and the Icefields Parkway' },
      { key: 'time', label: 'Drive Time', value: '~4h45m', unit: '', note: 'Non-stop — the parkway alone deserves most of a day' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → Hwy 93', unit: '', note: 'Divided to Lake Louise, then two-lane parkway' },
    ],
    legs: [
      { from: 'Canmore', to: 'Lake Louise', km: 80, road: 'Trans-Canada Hwy 1', note: 'Through Banff and up the Bow Valley' },
      { from: 'Lake Louise', to: 'Saskatchewan River Crossing', km: 79, road: 'Hwy 93 · Bow Summit', note: 'The high point of the parkway' },
      { from: 'Saskatchewan River Crossing', to: 'Jasper', km: 154, road: 'Hwy 93 · Columbia Icefield', note: 'Glaciers, then the descent into Jasper' },
    ],
  },

  fuel: {
    summary: 'This is the route where fuel matters. Fill at Lake Louise before the Icefields Parkway: Saskatchewan River Crossing is the only pump for about 150 km and it is seasonal. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso', brand: 'Esso', town: 'Canmore', km: 0, coords: [-115.35243, 51.08874] },
    { name: 'Shell', brand: 'Shell', town: 'Canmore', km: 23, coords: [-115.56578, 51.18261] },
    { name: 'Centex', brand: 'Centex', town: 'Saskatchewan River Crossing', km: 160, coords: [-116.74604, 51.97346] },
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 312, coords: [-118.08198, 52.87382] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 80, level: 'good', label: 'Canmore → Lake Louise', text: 'Good along the Trans-Canada' },
      { fromKm: 80, toKm: 295, level: 'poor', label: 'The Icefields Parkway', text: 'Effectively nothing the whole way' },
      { fromKm: 295, toKm: 313, level: 'fair', label: 'Into Jasper', text: 'Returns near the townsite' },
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
    { name: 'Paintbox Lodge', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.35773, 51.09018] },
    { name: 'Mystic Springs Chalets & Hot Pools', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.34236, 51.08655] },
    { name: 'The Crossing Resort', type: 'Motel', town: 'Saskatchewan River Crossing', km: 160, coords: [-116.74739, 51.97418] },
    { name: 'Couture\'s', type: 'Hotel', town: 'Jasper', km: 312, coords: [-118.08567, 52.87208] },
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 313, coords: [-118.0796, 52.87869] },
  ],

  eats: [
    { name: 'Bakery Cafe', type: 'Café', town: 'Canmore', km: 0, coords: [-115.36103, 51.08957] },
    { name: 'Murrieta\'s Bar & Grill', type: 'Restaurant', town: 'Canmore', km: 0, coords: [-115.36064, 51.08911] },
    { name: 'Market Cafe', type: 'Coffee Shop', town: 'Lake Louise', km: 48, coords: [-115.84148, 51.24673] },
    { name: 'Blackswift Bistro Johnston Canyon', type: 'Bistro', town: 'Lake Louise', km: 48, coords: [-115.84126, 51.24681] },
    { name: 'Parkway Pub', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 160, coords: [-116.7473, 51.97411] },
    { name: 'The Crossing Cafe', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 160, coords: [-116.74688, 51.97345] },
    { name: 'Caribou Chalet', type: 'Restaurant', town: 'Jasper', km: 304, coords: [-118.08286, 52.80105] },
    { name: 'Jasper Curry Place', type: 'Indian', town: 'Jasper', km: 312, coords: [-118.08172, 52.87411] },
  ],
};

export default CANMORE_JASPER_EXPLORER;
