// Данные интерактивной карты маршрута Edmonton → Jasper.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка Overpass,
// ноябрь 2026, точки И контуры зданий; подписи посёлков — по ближайшему
// населённому пункту OSM). Список не исчерпывающий: это то, что
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
    summary: 'Straightforward: stations every few dozen kilometres, with Edson and Hinton as full-service towns. The longest gap is about 80 km, Edson to Hinton. Hinton is the last fuel at normal prices before park rates. Pins are the stations mapped in OpenStreetMap.',
    longestGapKm: 80,
    items: [
      { name: 'Hughes', brand: 'Hughes', town: 'Edmonton', km: 0, coords: [-113.47971, 53.54627] },
      { name: 'Tempo', brand: 'Tempo', town: 'Edmonton', km: 0, coords: [-113.47574, 53.54855] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 0, coords: [-113.5088, 53.53853] },
      { name: 'Flying J', brand: 'Flying J', town: 'St. Albert', km: 11, coords: [-113.61316, 53.57155] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Spruce Grove', km: 31, coords: [-113.91602, 53.55906] },
      { name: 'Shell', brand: 'Shell', town: 'Point Alison', km: 72, coords: [-114.54129, 53.57968] },
      { name: 'Esso', brand: 'Esso', town: 'Entwistle', km: 102, coords: [-114.99052, 53.58886] },
      { name: 'Journeyman Inn', brand: 'Journeyman Inn', town: 'Entwistle', km: 103, coords: [-114.99263, 53.58919] },
      { name: 'Shell', brand: 'Shell', town: 'Niton Junction', km: 155, coords: [-115.76882, 53.61814] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Niton Junction', km: 155, coords: [-115.76703, 53.61824] },
      { name: 'Esso', brand: 'Esso', town: 'Niton Junction', km: 155, coords: [-115.76999, 53.61801] },
      { name: 'Domo', brand: 'Domo', town: 'Carrot Creek', km: 161, coords: [-115.85569, 53.60889] },
      { name: 'Shell', brand: 'Shell', town: 'Edson', km: 199, coords: [-116.41356, 53.58684] },
      { name: 'Chevron', brand: 'Chevron', town: 'Edson', km: 199, coords: [-116.41321, 53.58771] },
      { name: 'Esso', brand: 'Esso', town: 'Edson', km: 203, coords: [-116.44305, 53.57828] },
      { name: 'Tempo', brand: 'Tempo', town: 'Hinton', km: 283, coords: [-117.54283, 53.42344] },
      { name: 'Flying J', brand: 'Flying J', town: 'Hinton', km: 287, coords: [-117.58618, 53.40538] },
      { name: 'Shell', brand: 'Shell', town: 'Hinton', km: 288, coords: [-117.59169, 53.39918] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Jasper', km: 364, coords: [-118.07928, 52.88045] },
      { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 365, coords: [-118.08198, 52.87382] },
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
    { name: 'The Sandman Signature Edmonton Downtown Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49327, 53.54471] },
    { name: 'Delta Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49587, 53.54355] },
    { name: 'Super 8', type: 'Hotel', town: 'St. Albert', km: 11, coords: [-113.61415, 53.57148] },
    { name: 'Rodeway Inn', type: 'Hotel', town: 'Edson', km: 199, coords: [-116.41513, 53.58646] },
    { name: 'Guest House Inn & Suites', type: 'Hotel', town: 'Edson', km: 200, coords: [-116.41772, 53.58618] },
    { name: 'Holiday Inn Express & Suites', type: 'Hotel', town: 'Edson', km: 200, coords: [-116.42029, 53.58493] },
    { name: 'Timberland Hotel', type: 'Hotel', town: 'Hinton', km: 288, coords: [-117.5886, 53.39974] },
    { name: 'Tara Vista Inn', type: 'Hotel', town: 'Hinton', km: 288, coords: [-117.59754, 53.39662] },
    { name: 'Holiday Inn', type: 'Hotel', town: 'Hinton', km: 288, coords: [-117.59626, 53.39734] },
    { name: 'Overlander Mountain Lodge', type: 'Motel', town: 'Brûlé', km: 312, coords: [-117.80974, 53.2397] },
    { name: 'Lobstick Lodge', type: 'Hotel', town: 'Jasper', km: 363, coords: [-118.08057, 52.8866] },
    { name: 'Tonquin Inn', type: 'Hotel', town: 'Jasper', km: 363, coords: [-118.07824, 52.88667] },
    { name: 'The Crimson', type: 'Hotel', town: 'Jasper', km: 364, coords: [-118.07901, 52.88158] },
  ],

  eats: [
    { name: 'Buco\'s Pizzeria', type: 'Pizza', town: 'Edmonton', km: 0, coords: [-113.4931, 53.54723] },
    { name: 'One01 Bistro', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.49398, 53.54792] },
    { name: 'Japanese Village', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.49397, 53.54827] },
    { name: 'Aaa Chinese Restaurant & Lounge', type: 'Chinese', town: 'St. Albert', km: 7, coords: [-113.56451, 53.58832] },
    { name: 'Denny\'s', type: 'American', town: 'St. Albert', km: 11, coords: [-113.61368, 53.57106] },
    { name: 'The Grill at the Links', type: 'Restaurant', town: 'Spruce Grove', km: 30, coords: [-113.90435, 53.56163] },
    { name: 'Tim Hortons', type: 'Café', town: 'Point Alison', km: 72, coords: [-114.54059, 53.57914] },
    { name: 'The Lighthouse Restaurant & Lounge', type: 'Restaurant', town: 'Entwistle', km: 103, coords: [-114.9939, 53.58917] },
    { name: 'Tim Hortons', type: 'Café', town: 'Edson', km: 199, coords: [-116.41358, 53.58816] },
    { name: 'Smitty\'s', type: 'Pancake', town: 'Edson', km: 199, coords: [-116.41421, 53.58683] },
    { name: 'Ricky\'s All Day Grill', type: 'Western', town: 'Edson', km: 200, coords: [-116.41677, 53.58612] },
    { name: 'The Nest Cafe & Botique', type: 'Café', town: 'Hinton', km: 283, coords: [-117.54236, 53.42507] },
    { name: 'Starbucks', type: 'Café', town: 'Hinton', km: 287, coords: [-117.58758, 53.40026] },
    { name: 'The Old Grind', type: 'Restaurant', town: 'Hinton', km: 288, coords: [-117.5886, 53.39883] },
    { name: 'Stone Peak Restaurant', type: 'Restaurant', town: 'Brûlé', km: 312, coords: [-117.81015, 53.23924] },
    { name: 'Evil Dave\'s Grill', type: 'Restaurant', town: 'Jasper', km: 363, coords: [-118.07746, 52.88812] },
    { name: 'Lou Lou\'s', type: 'Italian', town: 'Jasper', km: 364, coords: [-118.0805, 52.87849] },
    { name: 'Palisades', type: 'Greek', town: 'Jasper', km: 364, coords: [-118.08018, 52.87905] },
  ],
};

export default EDMONTON_JASPER_EXPLORER;
