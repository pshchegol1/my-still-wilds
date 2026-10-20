// Данные интерактивной карты маршрута Lethbridge → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './lethbridge-jasper.line.json';

export const LETHBRIDGE_JASPER_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Lethbridge', coords: [-112.8331, 49.69458] },
  to: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  via: ['Calgary', 'Banff', 'Saskatchewan River Crossing'],

  stops: [
    { name: 'Lethbridge', km: 0, coords: [-112.8331, 49.69458] },
    { name: 'Calgary', km: 208, coords: [-114.05754, 51.04561] },
    { name: 'Banff', km: 337, coords: [-115.57208, 51.17508] },
    { name: 'Saskatchewan River Crossing', km: 472, coords: [-116.74256, 51.97356] },
    { name: 'Jasper', km: 627, coords: [-118.08243, 52.87523] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '627', unit: 'km', note: 'Lethbridge to Jasper via Calgary, Banff and the Icefields Parkway' },
      { key: 'time', label: 'Drive Time', value: '~8h50m', unit: '', note: 'Non-stop — genuinely a two-day trip' },
      { key: 'road', label: 'Road Type', value: 'Hwy 2 → 1 → 93', unit: '', note: 'Divided highway, then two-lane parkway' },
    ],
    legs: [
      { from: 'Lethbridge', to: 'Calgary', km: 208, road: 'Hwy 3 → Hwy 2', note: 'North across chinook country' },
      { from: 'Calgary', to: 'Banff', km: 129, road: 'Trans-Canada Hwy 1', note: 'Into the Bow Valley' },
      { from: 'Banff', to: 'Saskatchewan River Crossing', km: 135, road: 'Hwy 1 → Hwy 93', note: 'Onto the Icefields Parkway at Lake Louise' },
      { from: 'Saskatchewan River Crossing', to: 'Jasper', km: 155, road: 'Hwy 93 · Columbia Icefield', note: 'The glacier section at the end of a long day' },
    ],
  },

  fuel: {
    summary: 'This is the route where fuel matters. Fill at Lake Louise before the Icefields Parkway: Saskatchewan River Crossing is the only pump for about 150 km and it is seasonal. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Gas King', brand: 'Gas King', town: 'Lethbridge', km: 0, coords: [-112.80238, 49.67981] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 197, coords: [-114.01533, 50.97677] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 224, coords: [-114.239, 51.10748] },
    { name: 'Esso', brand: 'Esso', town: 'Banff', km: 303, coords: [-115.26342, 51.03941] },
    { name: 'Centex', brand: 'Centex', town: 'Saskatchewan River Crossing', km: 473, coords: [-116.74604, 51.97346] },
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 625, coords: [-118.08198, 52.87382] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 395, level: 'good', label: 'Lethbridge → Lake Louise', text: 'Solid across the prairie and the Bow Valley' },
      { fromKm: 395, toKm: 610, level: 'poor', label: 'The Icefields Parkway', text: 'Effectively nothing for 200 km' },
      { fromKm: 610, toKm: 627, level: 'fair', label: 'Into Jasper', text: 'Returns near the townsite' },
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
    { name: 'Superlodge', type: 'Motel', town: 'Lethbridge', km: 0, coords: [-112.80914, 49.68907] },
    { name: 'Econo Lodge Inn', type: 'Hotel', town: 'Lethbridge', km: 0, coords: [-112.80483, 49.6813] },
    { name: 'Northwinds Hotel Canmore', type: 'Motel', town: 'Banff', km: 312, coords: [-115.3558, 51.09643] },
    { name: 'Rocky Mountain Ski Lodge', type: 'Hotel', town: 'Banff', km: 312, coords: [-115.35672, 51.09801] },
    { name: 'The Crossing Resort', type: 'Motel', town: 'Saskatchewan River Crossing', km: 473, coords: [-116.74739, 51.97418] },
    { name: 'Couture\'s', type: 'Hotel', town: 'Jasper', km: 625, coords: [-118.08567, 52.87208] },
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 626, coords: [-118.0796, 52.87869] },
  ],

  eats: [
    { name: 'The Penny Coffee House', type: 'Café', town: 'Lethbridge', km: 0, coords: [-112.83995, 49.69454] },
    { name: 'Koko Japanese Restaurant', type: 'Japanese', town: 'Lethbridge', km: 0, coords: [-112.83929, 49.69449] },
    { name: 'Pizza on Pointe', type: 'Pizza', town: 'Calgary', km: 179, coords: [-114.00183, 50.83484] },
    { name: 'Stockman\'s Restaurant and Lounge', type: 'Restaurant', town: 'Calgary', km: 179, coords: [-114.00157, 50.83545] },
    { name: 'Eclipse Coffee Roasters', type: 'Café', town: 'Banff', km: 312, coords: [-115.35844, 51.09585] },
    { name: 'Crazyweed Restaurant', type: 'Restaurant', town: 'Banff', km: 312, coords: [-115.35858, 51.09627] },
    { name: 'Parkway Pub', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 473, coords: [-116.7473, 51.97411] },
    { name: 'The Crossing Cafe', type: 'Restaurant', town: 'Saskatchewan River Crossing', km: 473, coords: [-116.74688, 51.97345] },
    { name: 'Caribou Chalet', type: 'Restaurant', town: 'Jasper', km: 617, coords: [-118.08286, 52.80105] },
    { name: 'Jasper Curry Place', type: 'Indian', town: 'Jasper', km: 625, coords: [-118.08172, 52.87411] },
  ],
};

export default LETHBRIDGE_JASPER_EXPLORER;
