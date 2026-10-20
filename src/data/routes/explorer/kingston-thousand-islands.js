// Данные интерактивной карты маршрута Kingston → Thousand Islands.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './kingston-thousand-islands.line.json';

export const KINGSTON_THOUSAND_ISLANDS_EXPLORER = {
  line,
  provinceIso: 'CA-ON',
  from: { name: 'Kingston', coords: [-76.4284, 44.3054] },
  to: { name: 'Mallorytown Landing', coords: [-75.8591, 44.4549] },
  via: ['Gananoque'],

  stops: [
    { name: 'Kingston', km: 0, coords: [-76.4284, 44.3054] },
    { name: 'Gananoque', km: 26, coords: [-76.1627, 44.3296] },
    { name: 'Mallorytown Landing', km: 59, coords: [-75.8591, 44.4549] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '59', unit: 'km', note: 'Kingston to the park’s mainland base at Mallorytown Landing' },
      { key: 'time', label: 'Drive Time', value: '~45m', unit: '', note: 'Along the scenic parkway rather than Hwy 401' },
      { key: 'road', label: 'Road Type', value: '1000 Islands Pkwy', unit: '', note: 'Two-lane river road running parallel to the 401' },
    ],
    legs: [
      { from: 'Kingston', to: 'Gananoque', km: 26, road: 'Hwy 2 → Hwy 401', note: 'Out of the city to the gateway town for the boat tours' },
      { from: 'Gananoque', to: 'Mallorytown Landing', km: 33, road: '1000 Islands Parkway', note: 'The scenic stretch — river on one side, granite on the other' },
    ],
  },

  fuel: {
    summary: 'Nothing to plan for: Kingston, Gananoque and the 401 service centres cover the whole distance, and the drive is under an hour. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Ultramar', brand: 'Ultramar', town: 'Kingston', km: 1, coords: [-76.42172, 44.29904] },
    { name: 'Esso', brand: 'Esso', town: 'Kingston', km: 11, coords: [-76.33619, 44.3215] },
    { name: 'Esso', brand: 'Esso', town: 'Gananoque', km: 25, coords: [-76.16908, 44.33777] },
    { name: 'Stinson', brand: 'Stinson', town: 'Gananoque', km: 39, coords: [-76.01772, 44.39344] },
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Mallorytown Landing', km: 56, coords: [-75.85743, 44.48856] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 59, level: 'good', label: 'Kingston → Mallorytown Landing', text: 'Good the whole way · on the water you may roam onto US carriers' },
    ],
  },

  weather: {
    intro: 'A short, easy drive in any season. What changes is the river: the islands, the boats and most of the park shut down once the water freezes.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'fair' },
      { m: 'Apr', level: 'good' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'May to October, while the boat tours and island camping are running',
          'September and early October for the colour along the parkway',
          'Any clear day — the parkway is the point, not the shortcut',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Lake-effect snow off Lake Ontario can make Hwy 401 here genuinely bad',
          'Shoulder season closes island services; the mainland trails stay open',
          'In a private boat, know which side of the border you are on',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Freezing rain — eastern Ontario gets it, and the parkway is unlit and quiet',
          'Winter closes the islands entirely; there is no boat access on ice',
        ],
      },
    ],
    links: [
      { label: 'Ontario 511 — road conditions', href: 'https://511on.ca' },
      { label: 'Parks Canada — Thousand Islands National Park', href: 'https://parks.canada.ca/pn-np/on/1000' },
    ],
  },

  hotels: [
    { name: 'Lord Nelson Motel', type: 'Motel', town: 'Kingston', km: 3, coords: [-76.43269, 44.28607] },
    { name: 'Trinity House Inn', type: 'Hotel', town: 'Gananoque', km: 26, coords: [-76.16203, 44.32894] },
    { name: 'Colonial Resort & Spa', type: 'Motel', town: 'Gananoque', km: 26, coords: [-76.17817, 44.32645] },
  ],

  eats: [
    { name: 'Laverne\'s Eatery', type: 'Restaurant', town: 'Gananoque', km: 26, coords: [-76.16434, 44.32825] },
    { name: 'Muskie Jake’s Tap & Grill', type: 'Restaurant', town: 'Gananoque', km: 26, coords: [-76.15812, 44.32575] },
    { name: 'Tim Hortons', type: 'Café', town: 'Mallorytown Landing', km: 56, coords: [-75.85765, 44.48912] },
    { name: 'Starbucks', type: 'Café', town: 'Mallorytown Landing', km: 56, coords: [-75.85676, 44.48969] },
  ],
};

export default KINGSTON_THOUSAND_ISLANDS_EXPLORER;
