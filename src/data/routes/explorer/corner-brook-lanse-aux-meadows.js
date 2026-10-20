// Данные интерактивной карты маршрута Corner Brook → L'Anse aux Meadows.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './corner-brook-lanse-aux-meadows.line.json';

export const CORNER_BROOK_LANSE_AUX_MEADOWS_EXPLORER = {
  line,
  provinceIso: 'CA-NL',
  from: { name: 'Corner Brook', coords: [-57.9474, 48.9532] },
  to: { name: 'L\'Anse aux Meadows', coords: [-55.5324, 51.6018] },
  via: ['Deer Lake', 'Port au Choix', 'St. Anthony'],

  stops: [
    { name: 'Corner Brook', km: 0, coords: [-57.9474, 48.9532] },
    { name: 'Deer Lake', km: 53, coords: [-57.432, 49.183] },
    { name: 'Port au Choix', km: 286, coords: [-57.3589, 50.7069] },
    { name: 'St. Anthony', km: 498, coords: [-55.5919, 51.3654] },
    { name: 'L\'Anse aux Meadows', km: 539, coords: [-55.5324, 51.6018] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '539', unit: 'km', note: 'Corner Brook to L\'Anse aux Meadows up the Great Northern Peninsula' },
      { key: 'time', label: 'Drive Time', value: '~7h30m', unit: '', note: 'Non-stop — in practice a two-day trip, with Gros Morne on the way' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → Rte 430', unit: '', note: 'The Viking Trail: two-lane, paved, exposed to the Gulf' },
    ],
    legs: [
      { from: 'Corner Brook', to: 'Deer Lake', km: 53, road: 'Trans-Canada Hwy 1', note: 'Fast four-lane up the Humber valley' },
      { from: 'Deer Lake', to: 'Port au Choix', km: 233, road: 'Route 430 · Viking Trail', note: 'Past Gros Morne and up the open west coast' },
      { from: 'Port au Choix', to: 'St. Anthony', km: 212, road: 'Route 430 → Route 432', note: 'The emptiest stretch — long gaps between communities' },
      { from: 'St. Anthony', to: 'L\'Anse aux Meadows', km: 41, road: 'Route 436', note: 'Out to the tip and the Norse site' },
    ],
  },

  fuel: {
    summary: 'Fill in Deer Lake, then treat every open station as the one you use. Communities thin out badly north of Port au Choix, hours are short outside summer, and there is a lot of road between them. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'R&R Superette Irving', brand: 'R&R Superette Irving', town: 'Corner Brook', km: 0, coords: [-57.94356, 48.93627] },
    { name: 'Esso', brand: 'Esso', town: 'Deer Lake', km: 60, coords: [-57.46346, 49.23413] },
    { name: 'Irving', brand: 'Irving', town: 'Deer Lake', km: 121, coords: [-57.90568, 49.58631] },
    { name: 'Western Petroleum', brand: 'Western Petroleum', town: 'Deer Lake', km: 161, coords: [-57.78053, 49.86806] },
    { name: 'Irving', brand: 'Irving', town: 'Port au Choix', km: 263, coords: [-57.17141, 50.60499] },
    { name: 'Irving', brand: 'Irving', town: 'Port au Choix', km: 361, coords: [-56.87758, 51.08183] },
    { name: 'Esso', brand: 'Esso', town: 'St. Anthony', km: 400, coords: [-56.68107, 51.33925] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'St. Anthony', km: 496, coords: [-55.59865, 51.3717] },
    { name: 'Western Petroleum', brand: 'Western Petroleum', town: 'L\'Anse aux Meadows', km: 524, coords: [-55.47481, 51.50422] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 53, level: 'good', label: 'Corner Brook → Deer Lake', text: 'Solid along the Trans-Canada' },
      { fromKm: 53, toKm: 286, level: 'fair', label: 'Viking Trail north', text: 'In the communities, gone between them' },
      { fromKm: 286, toKm: 539, level: 'poor', label: 'The northern peninsula', text: 'Long dead stretches — do not plan on a signal' },
    ],
  },

  weather: {
    intro: 'The season governs this trip twice over: the Norse site has a short opening window, and the road is genuinely dangerous in the dark at any time of year.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'nogo' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June to early October, while the Norse site is open and staffed',
          'Late May into June for icebergs along the coast, in a good ice year',
          'September for clear air, no insects and quiet roads',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Moose on Route 430 — never drive this road between dusk and dawn',
          'Fog and gulf wind can close in for days at a time',
          'Shoulder season means short station hours and closed services',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter storms with drifting snow and whiteouts on the exposed coast',
          'The Norse site is closed outside roughly June to early October',
          'Any night drive on the peninsula, in any season',
        ],
      },
    ],
    links: [
      { label: 'Newfoundland 511 — road conditions', href: 'https://www.511nl.ca' },
      { label: 'Parks Canada — L\'Anse aux Meadows', href: 'https://parks.canada.ca/lhn-nhs/nl/meadows' },
    ],
  },

  hotels: [
    { name: 'Glynmill Inn Hotel', type: 'Hotel', town: 'Corner Brook', km: 1, coords: [-57.94034, 48.94922] },
    { name: 'Greenwood Inn', type: 'Hotel', town: 'Corner Brook', km: 1, coords: [-57.94287, 48.9516] },
    { name: 'Sunrise cottage', type: 'Hotel', town: 'Port au Choix', km: 180, coords: [-57.71489, 50.02702] },
    { name: 'Écho sea motel  cabin et restaurant', type: 'Hotel', town: 'Port au Choix', km: 285, coords: [-57.35395, 50.70413] },
    { name: 'Grenfell Heritage Hotel & Suites', type: 'Hotel', town: 'St. Anthony', km: 497, coords: [-55.58739, 51.36398] },
    { name: 'Valhalla Lodge', type: 'Hotel', town: 'L\'Anse aux Meadows', km: 529, coords: [-55.47453, 51.54185] },
  ],

  eats: [
    { name: 'Tai-An Restaurant', type: 'Restaurant', town: 'Corner Brook', km: 0, coords: [-57.94877, 48.94308] },
    { name: 'Sorrento', type: 'Restaurant', town: 'Corner Brook', km: 0, coords: [-57.94539, 48.9515] },
    { name: 'Harbour View Coffee Shop, Bakery & Takeout', type: 'Café', town: 'Port au Choix', km: 286, coords: [-57.35633, 50.70601] },
    { name: 'Anchor Café', type: 'Restaurant', town: 'Port au Choix', km: 286, coords: [-57.35846, 50.70761] },
    { name: 'Tim Hortons', type: 'Café', town: 'St. Anthony', km: 496, coords: [-55.59915, 51.37102] },
    { name: 'Lightkeepers Cafe', type: 'Restaurant', town: 'St. Anthony', km: 497, coords: [-55.55602, 51.35617] },
    { name: 'Skipper Hot\'s Lounge', type: 'Restaurant', town: 'L\'Anse aux Meadows', km: 535, coords: [-55.4943, 51.58128] },
    { name: 'The Norseman', type: 'Restaurant', town: 'L\'Anse aux Meadows', km: 538, coords: [-55.52735, 51.60056] },
  ],
};

export default CORNER_BROOK_LANSE_AUX_MEADOWS_EXPLORER;
