// Данные интерактивной карты маршрута Edmonton → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './edmonton-jasper.line.json';

export const EDMONTON_JASPER_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Edmonton', coords: [-113.49124, 53.54621] },
  to: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  via: ['Edson', 'Hinton'],

  stops: [
    { name: 'Edmonton', km: 0, coords: [-113.49124, 53.54621] },
    { name: 'Edson', km: 202, coords: [-116.44285, 53.58587] },
    { name: 'Hinton', km: 288, coords: [-117.58868, 53.39905] },
    { name: 'Jasper', km: 366, coords: [-118.08243, 52.87523] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '366', unit: 'km', note: 'Edmonton to Jasper on Hwy 16, the Yellowhead' },
      { key: 'time', label: 'Drive Time', value: '~4h45m', unit: '', note: 'Non-stop — the only Jasper approach that is simply a drive' },
      { key: 'road', label: 'Road Type', value: 'Hwy 16', unit: '', note: 'Divided, then two-lane with passing lanes' },
    ],
    legs: [
      { from: 'Edmonton', to: 'Edson', km: 202, road: 'Hwy 16 · Yellowhead', note: 'Farmland giving way to forestry country' },
      { from: 'Edson', to: 'Hinton', km: 86, road: 'Hwy 16', note: 'Coal country, and the mountains come into view' },
      { from: 'Hinton', to: 'Jasper', km: 78, road: 'Hwy 16 · park gate', note: 'Into the park along the Athabasca valley' },
    ],
  },

  fuel: {
    summary: 'Straightforward: Edson and Hinton are full-service towns. Hinton is the last fuel at normal prices before park rates. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Hughes', brand: 'Hughes', town: 'Edmonton', km: 0, coords: [-113.47971, 53.54627] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 72, coords: [-114.54129, 53.57968] },
    { name: 'Esso', brand: 'Esso', town: 'Edson', km: 102, coords: [-114.99052, 53.58886] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Hinton', km: 283, coords: [-117.543, 53.42614] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 288, level: 'good', label: 'Edmonton → Hinton', text: 'Reasonable along Hwy 16 through the towns' },
      { fromKm: 288, toKm: 366, level: 'fair', label: 'Into the park', text: 'Drops past the gate, returns in the townsite' },
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
    { name: 'Delta Edmonton Centre Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49544, 53.54364] },
    { name: 'Alberta Place Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49712, 53.54024] },
    { name: 'Pyramid Lake Resort', type: 'Hotel', town: 'Jasper', km: 360, coords: [-118.08915, 52.91646] },
    { name: 'Patricia Lake Bungalows', type: 'Hotel', town: 'Jasper', km: 362, coords: [-118.09681, 52.90308] },
  ],

  eats: [
    { name: 'Mikado', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.50883, 53.54564] },
    { name: 'Double Greeting Won Ton House', type: 'Chinese', town: 'Edmonton', km: 0, coords: [-113.48298, 53.54484] },
    { name: 'Aalto', type: 'Restaurant', town: 'Jasper', km: 360, coords: [-118.08893, 52.91618] },
    { name: 'Kumama', type: 'Restaurant', town: 'Jasper', km: 363, coords: [-118.06799, 52.88991] },
  ],
};

export default EDMONTON_JASPER_EXPLORER;
