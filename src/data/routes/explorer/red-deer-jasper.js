// Данные интерактивной карты маршрута Red Deer → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './red-deer-jasper.line.json';

export const RED_DEER_JASPER_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Red Deer', coords: [-113.81415, 52.26906] },
  to: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  via: ['Edmonton', 'Edson', 'Hinton'],

  stops: [
    { name: 'Red Deer', km: 0, coords: [-113.81415, 52.26906] },
    { name: 'Edmonton', km: 154, coords: [-113.49124, 53.54621] },
    { name: 'Edson', km: 355, coords: [-116.44285, 53.58587] },
    { name: 'Hinton', km: 441, coords: [-117.58868, 53.39905] },
    { name: 'Jasper', km: 520, coords: [-118.08243, 52.87523] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '520', unit: 'km', note: 'Red Deer to Jasper via Edmonton on the Yellowhead' },
      { key: 'time', label: 'Drive Time', value: '~6h40m', unit: '', note: 'Non-stop — long but easy, with no mountain pass' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 16', unit: '', note: 'Divided for most of the distance' },
    ],
    legs: [
      { from: 'Red Deer', to: 'Edmonton', km: 154, road: 'Hwy 2 · QEII', note: 'North rather than west — the long way round' },
      { from: 'Edmonton', to: 'Edson', km: 201, road: 'Hwy 16 · Yellowhead', note: 'West into forestry country' },
      { from: 'Edson', to: 'Hinton', km: 86, road: 'Hwy 16', note: 'The mountains come into view' },
      { from: 'Hinton', to: 'Jasper', km: 79, road: 'Hwy 16 · park gate', note: 'Into the park along the Athabasca' },
    ],
  },

  fuel: {
    summary: 'Never a constraint on this route — the Highway 2 corridor is the busiest in Alberta and services run the whole way. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Centex', brand: 'Centex', town: 'Red Deer', km: 0, coords: [-113.77382, 52.26611] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 26, coords: [-113.77253, 52.46433] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 78, coords: [-113.64198, 52.89824] },
    { name: 'Chevron', brand: 'Chevron', town: 'Edmonton', km: 124, coords: [-113.54409, 53.30101] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 147, coords: [-113.49806, 53.49944] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 174, coords: [-113.76093, 53.56378] },
    { name: 'Esso', brand: 'Esso', town: 'Edmonton', km: 198, coords: [-114.12413, 53.55591] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 226, coords: [-114.54129, 53.57968] },
    { name: 'Flying J Cardlock', brand: 'Flying J Cardlock', town: 'Edson', km: 351, coords: [-116.38613, 53.59094] },
    { name: 'Tempo', brand: 'Tempo', town: 'Hinton', km: 437, coords: [-117.54283, 53.42344] },
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 518, coords: [-118.08198, 52.87382] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 441, level: 'good', label: 'Red Deer → Hinton', text: 'Good along the QEII and Hwy 16' },
      { fromKm: 441, toKm: 520, level: 'fair', label: 'Into the park', text: 'Drops past the gate, returns in the townsite' },
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
    { name: 'Baymont By Wyndham Red Deer', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.81052, 52.26224] },
    { name: 'Sandman Hotel Red Deer', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.81608, 52.24701] },
    { name: 'Athabasca Valley Inn & Suites', type: 'Hotel', town: 'Hinton', km: 437, coords: [-117.544, 53.42499] },
    { name: 'Holiday Inn Express', type: 'Hotel', town: 'Hinton', km: 438, coords: [-117.55387, 53.40908] },
    { name: 'Pyramid Lake Resort', type: 'Hotel', town: 'Jasper', km: 514, coords: [-118.08915, 52.91646] },
    { name: 'Patricia Lake Bungalows', type: 'Hotel', town: 'Jasper', km: 516, coords: [-118.09681, 52.90308] },
  ],

  eats: [
    { name: 'Shiso Japanese Restaurant', type: 'Japanese', town: 'Red Deer', km: 0, coords: [-113.81337, 52.25872] },
    { name: 'Babycakes Cupcakery', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.77381, 52.2663] },
    { name: 'Paris Baguette', type: 'Café', town: 'Edmonton', km: 135, coords: [-113.53804, 53.40704] },
    { name: 'The Chopped Leaf', type: 'Salad', town: 'Edmonton', km: 135, coords: [-113.53617, 53.4068] },
    { name: 'Rojo Marrón', type: 'Restaurant', town: 'Hinton', km: 437, coords: [-117.54576, 53.42349] },
    { name: 'The Nest Cafe & Botique', type: 'Café', town: 'Hinton', km: 437, coords: [-117.54236, 53.42507] },
    { name: 'Aalto', type: 'Restaurant', town: 'Jasper', km: 514, coords: [-118.08893, 52.91618] },
    { name: 'Kumama', type: 'Restaurant', town: 'Jasper', km: 516, coords: [-118.06799, 52.88991] },
  ],
};

export default RED_DEER_JASPER_EXPLORER;
