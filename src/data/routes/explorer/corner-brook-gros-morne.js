// Данные интерактивной карты маршрута Corner Brook → Gros Morne.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './corner-brook-gros-morne.line.json';

export const CORNER_BROOK_GROS_MORNE_EXPLORER = {
  line,
  provinceIso: 'CA-NL',
  from: { name: 'Corner Brook', coords: [-57.9474, 48.9532] },
  to: { name: 'Western Brook Pond', coords: [-57.7915, 49.751] },
  via: ['Deer Lake', 'Wiltondale', 'Rocky Harbour'],

  stops: [
    { name: 'Corner Brook', km: 0, coords: [-57.9474, 48.9532] },
    { name: 'Deer Lake', km: 53, coords: [-57.432, 49.183] },
    { name: 'Wiltondale', km: 84, coords: [-57.6078, 49.3951] },
    { name: 'Rocky Harbour', km: 122, coords: [-57.9196, 49.5885] },
    { name: 'Western Brook Pond', km: 150, coords: [-57.7915, 49.751] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '150', unit: 'km', note: 'Corner Brook to the Western Brook Pond trailhead · Rocky Harbour at 122 km' },
      { key: 'time', label: 'Drive Time', value: '~2h', unit: '', note: 'Non-stop — the park itself wants two or three days' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → Route 430', unit: '', note: 'Trans-Canada to Deer Lake, then the two-lane Viking Trail up the coast' },
    ],
    legs: [
      { from: 'Corner Brook', to: 'Deer Lake', km: 53, road: 'Trans-Canada Hwy 1', note: 'Fast four-lane along the Humber valley' },
      { from: 'Deer Lake', to: 'Wiltondale', km: 31, road: 'Route 430 · Viking Trail', note: 'Where the highway turns north and narrows to two lanes' },
      { from: 'Wiltondale', to: 'Rocky Harbour', km: 38, road: 'Route 430 · park road', note: 'Over the shoulder of the Long Range hills to the coast' },
      { from: 'Rocky Harbour', to: 'Western Brook Pond', km: 28, road: 'Route 430 · coastal', note: 'Open coast with the Long Range cliffs on your right' },
    ],
  },

  fuel: {
    summary: 'Corner Brook and Deer Lake are straightforward. Inside the park the stations are small village operations with short hours outside summer, so fill up in Deer Lake before you turn north. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'R&R Superette Irving', brand: 'R&R Superette Irving', town: 'Corner Brook', km: 0, coords: [-57.94356, 48.93627] },
    { name: 'North Atlantic', brand: 'North Atlantic', town: 'Corner Brook', km: 11, coords: [-57.82554, 48.95031] },
    { name: 'Irving', brand: 'Irving', town: 'Deer Lake', km: 30, coords: [-57.60128, 49.01342] },
    { name: 'Esso', brand: 'Esso', town: 'Deer Lake', km: 51, coords: [-57.43325, 49.17235] },
    { name: 'Jackladder', brand: 'Jackladder', town: 'Wiltondale', km: 72, coords: [-57.53018, 49.32583] },
    { name: 'Coyley\'s', brand: 'Coyley\'s', town: 'Wiltondale', km: 84, coords: [-57.60664, 49.39535] },
    { name: 'Irving', brand: 'Irving', town: 'Rocky Harbour', km: 121, coords: [-57.90568, 49.58631] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 53, level: 'good', label: 'Corner Brook → Deer Lake', text: 'Solid along the Trans-Canada' },
      { fromKm: 53, toKm: 122, level: 'fair', label: 'Viking Trail to Rocky Harbour', text: 'Comes and goes over the hills and through the park' },
      { fromKm: 122, toKm: 150, level: 'poor', label: 'The coast and the fjord', text: 'Nothing on the Western Brook boardwalk or out on the water' },
    ],
  },

  weather: {
    intro: 'Wind and fog off the Gulf run this coast. The road is good; the weather decides whether the boat sails and whether you see the mountain at all.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June to September, when the boat tours and park services are running',
          'Late June for icebergs drifting down the coast in a good year',
          'September for clear air, fewer people and the tuckamore turning',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Moose on Route 430 at dusk, night and dawn — the main risk on this route',
          'Fog can hide Gros Morne mountain for days at a stretch',
          'Gulf wind cancels the Western Brook Pond boat at short notice',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter storms with drifting snow and whiteouts on the exposed coast',
          'Most park services and both boat tours close from October to May',
          'Freezing rain on Route 430 — two lanes, little traffic and a long way from help',
        ],
      },
    ],
    links: [
      { label: 'Newfoundland 511 — road conditions', href: 'https://www.511nl.ca' },
      { label: 'Parks Canada — Gros Morne National Park', href: 'https://parks.canada.ca/pn-np/nl/grosmorne' },
    ],
  },

  hotels: [
    { name: 'Glynmill Inn Hotel', type: 'Hotel', town: 'Corner Brook', km: 1, coords: [-57.94034, 48.94922] },
    { name: 'Greenwood Inn', type: 'Hotel', town: 'Corner Brook', km: 1, coords: [-57.94287, 48.9516] },
    { name: 'Holiday Inn Express', type: 'Hotel', town: 'Deer Lake', km: 52, coords: [-57.436, 49.18062] },
    { name: 'Deer lake motel', type: 'Hotel', town: 'Deer Lake', km: 54, coords: [-57.4277, 49.18926] },
    { name: 'Neddies Harbour Inn', type: 'Hotel', town: 'Rocky Harbour', km: 111, coords: [-57.8609, 49.52519] },
    { name: 'Fisherman\'s landinn inn', type: 'Hotel', town: 'Rocky Harbour', km: 121, coords: [-57.90817, 49.5836] },
  ],

  eats: [
    { name: 'Tai-An Restaurant', type: 'Restaurant', town: 'Corner Brook', km: 0, coords: [-57.94877, 48.94308] },
    { name: 'Sorrento', type: 'Restaurant', town: 'Corner Brook', km: 0, coords: [-57.94539, 48.9515] },
    { name: 'Oasis Grill House', type: 'Restaurant', town: 'Deer Lake', km: 30, coords: [-57.60851, 49.02202] },
    { name: 'Cafe 59', type: 'Restaurant', town: 'Deer Lake', km: 30, coords: [-57.60432, 49.01246] },
    { name: 'The Black Spruce', type: 'Regional', town: 'Rocky Harbour', km: 111, coords: [-57.86069, 49.52478] },
    { name: 'Fisherman\'s Landing', type: 'Restaurant', town: 'Rocky Harbour', km: 122, coords: [-57.91641, 49.59115] },
  ],
};

export default CORNER_BROOK_GROS_MORNE_EXPLORER;
