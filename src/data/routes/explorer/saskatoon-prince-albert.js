// Данные интерактивной карты маршрута Saskatoon → Prince Albert National Park.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './saskatoon-prince-albert.line.json';

export const SASKATOON_PRINCE_ALBERT_EXPLORER = {
  line,
  provinceIso: 'CA-SK',
  from: { name: 'Saskatoon', coords: [-106.6608, 52.1318] },
  to: { name: 'Waskesiu Lake', coords: [-106.1948, 53.9613] },
  via: ['Duck Lake', 'Prince Albert'],

  stops: [
    { name: 'Saskatoon', km: 0, coords: [-106.6608, 52.1318] },
    { name: 'Duck Lake', km: 85, coords: [-106.2296, 52.8119] },
    { name: 'Prince Albert', km: 143, coords: [-105.7559, 53.202] },
    { name: 'Waskesiu Lake', km: 248, coords: [-106.1948, 53.9613] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '248', unit: 'km', note: 'Saskatoon to the Waskesiu townsite via Duck Lake and Prince Albert' },
      { key: 'time', label: 'Drive Time', value: '~3h20m', unit: '', note: 'Non-stop driving — add an hour if you stop at Duck Lake or Fort Carlton' },
      { key: 'road', label: 'Road Type', value: 'Hwy 11 → 2 → 263', unit: '', note: 'The Louis Riel Trail north, then into the park on paved secondary road' },
    ],
    legs: [
      { from: 'Saskatoon', to: 'Duck Lake', km: 85, road: 'Hwy 11 · Louis Riel Trail', note: 'Open grain country, mostly divided highway' },
      { from: 'Duck Lake', to: 'Prince Albert', km: 58, road: 'Hwy 11', note: 'The fields start breaking into aspen bluffs' },
      { from: 'Prince Albert', to: 'Waskesiu Lake', km: 105, road: 'Hwy 2 → Hwy 263', note: 'Into the boreal forest · gas at Christopher Lake, then village pumps near the park' },
    ],
  },

  fuel: {
    summary: 'Stations all the way, but they change character past Prince Albert: village pumps with limited and seasonal hours instead of highway plazas. Prince Albert is the last place open whenever you arrive, so top up there. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: '7-Eleven', brand: '7-Eleven', town: 'Saskatoon', km: 0, coords: [-106.66121, 52.13305] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Saskatoon', km: 24, coords: [-106.57528, 52.31822] },
    { name: 'T R Petroleum', brand: 'T R Petroleum', town: 'Duck Lake', km: 48, coords: [-106.41279, 52.51014] },
    { name: 'T R Petroleum', brand: 'T R Petroleum', town: 'Duck Lake', km: 66, coords: [-106.3299, 52.66141] },
    { name: 'Esso', brand: 'Esso', town: 'Duck Lake', km: 87, coords: [-106.21181, 52.81649] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Prince Albert', km: 140, coords: [-105.7609, 53.18378] },
    { name: 'Esso', brand: 'Esso', town: 'Prince Albert', km: 178, coords: [-105.76358, 53.51038] },
    { name: 'Esso', brand: 'Esso', town: 'Waskesiu Lake', km: 218, coords: [-105.92331, 53.85273] },
    { name: 'Tempo', brand: 'Tempo', town: 'Waskesiu Lake', km: 232, coords: [-106.08614, 53.92216] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 143, level: 'good', label: 'Saskatoon → Prince Albert', text: 'Solid along Hwy 11 through the towns' },
      { fromKm: 143, toKm: 215, level: 'fair', label: 'North on Hwy 2', text: 'Thins out as the farms give way to forest' },
      { fromKm: 215, toKm: 248, level: 'poor', label: 'Inside the park', text: 'Patchy around Waskesiu and gone on the backcountry trails' },
    ],
  },

  weather: {
    intro: 'A straightforward summer drive and a genuinely risky winter one — not because of the road, but because of what prairie wind does to visibility.',
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
          'June to September, when the park townsite is fully open',
          'Long northern evenings — sunset after 9pm in midsummer',
          'September gives you the aspen turning gold and almost no crowds',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Deer and moose on Hwy 11 and Hwy 2 at dawn and dusk',
          'Shoulder season closes most Waskesiu services — check before counting on food',
          'Early snow in October can arrive before the ploughs are out',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Ground blizzards: wind lifts field snow and erases the highway on a clear day',
          'Saskatchewan closes stretches of Hwy 11 for this most winters',
          'Extreme cold snaps below −35 °C make a breakdown on the north stretch serious',
        ],
      },
    ],
    links: [
      { label: 'Saskatchewan Highway Hotline — road conditions', href: 'https://www.saskatchewan.ca/residents/transportation/highway-hotline' },
      { label: 'Parks Canada — Prince Albert National Park', href: 'https://parks.canada.ca/pn-np/sk/princealbert' },
    ],
  },

  hotels: [
    { name: 'Park Town Hotel', type: 'Hotel', town: 'Saskatoon', km: 0, coords: [-106.65266, 52.13152] },
    { name: 'The Inn on College', type: 'Hotel', town: 'Saskatoon', km: 0, coords: [-106.64521, 52.12855] },
    { name: 'Super 8 by Wyndham Prince Albert', type: 'Hotel', town: 'Prince Albert', km: 139, coords: [-105.76279, 53.17251] },
    { name: 'Holiday Inn Express & Suites', type: 'Hotel', town: 'Prince Albert', km: 140, coords: [-105.73242, 53.17391] },
  ],

  eats: [
    { name: 'Hudson\'s', type: 'Canadian', town: 'Saskatoon', km: 0, coords: [-106.6608, 52.12635] },
    { name: 'Red Pepper', type: 'Chinese', town: 'Saskatoon', km: 0, coords: [-106.66278, 52.12761] },
    { name: 'Venice House', type: 'Restaurant', town: 'Prince Albert', km: 141, coords: [-105.75939, 53.18878] },
    { name: 'Tim Hortons', type: 'Café', town: 'Prince Albert', km: 142, coords: [-105.75931, 53.19912] },
    { name: 'Pete\'s Terrace Restaurant', type: 'Restaurant', town: 'Waskesiu Lake', km: 232, coords: [-106.08745, 53.92252] },
  ],
};

export default SASKATOON_PRINCE_ALBERT_EXPLORER;
