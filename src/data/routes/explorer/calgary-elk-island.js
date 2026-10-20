// Данные интерактивной карты маршрута Calgary → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './calgary-elk-island.line.json';

export const CALGARY_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Calgary', coords: [-114.05754, 51.04561] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Red Deer', 'Edmonton'],

  stops: [
    { name: 'Calgary', km: 0, coords: [-114.05754, 51.04561] },
    { name: 'Red Deer', km: 147, coords: [-113.81415, 52.26906] },
    { name: 'Edmonton', km: 301, coords: [-113.49124, 53.54621] },
    { name: 'Elk Island NP', km: 354, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '354', unit: 'km', note: 'Calgary to Elk Island via Red Deer and Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~4h35m', unit: '', note: 'Non-stop — a long day trip, or a leg on the way elsewhere' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 16', unit: '', note: 'Divided four-lane throughout' },
    ],
    legs: [
      { from: 'Calgary', to: 'Red Deer', km: 147, road: 'Hwy 2 · QEII', note: 'North through open parkland' },
      { from: 'Red Deer', to: 'Edmonton', km: 154, road: 'Hwy 2 · QEII', note: 'The second half of the prairie run' },
      { from: 'Edmonton', to: 'Elk Island NP', km: 53, road: 'Hwy 16 · Yellowhead', note: 'East out of the city to the park gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 0, coords: [-114.09436, 51.05281] },
    { name: 'Costco', brand: 'Costco', town: 'Calgary', km: 23, coords: [-113.98559, 51.21144] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 47, coords: [-114.0296, 51.42563] },
    { name: 'RaceTrac', brand: 'RaceTrac', town: 'Red Deer', km: 104, coords: [-114.03321, 51.93279] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Red Deer', km: 147, coords: [-113.82557, 52.26272] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 173, coords: [-113.77253, 52.46433] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 201, coords: [-113.60882, 52.67531] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 225, coords: [-113.64198, 52.89824] },
    { name: 'Circle K', brand: 'Circle K', town: 'Edmonton', km: 272, coords: [-113.54327, 53.30992] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 290, coords: [-113.49401, 53.46735] },
    { name: 'Tempo', brand: 'Tempo', town: 'Edmonton', km: 302, coords: [-113.47574, 53.54855] },
    { name: 'Esso', brand: 'Esso', town: 'Edmonton', km: 325, coords: [-113.17386, 53.56911] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 354, level: 'good', label: 'Calgary → Elk Island', text: 'Good the whole way, including in the park' },
    ],
  },

  weather: {
    intro: 'Easy driving in every season. What the season changes is what you see — bison stand out against snow, and summer brings the mosquitoes.',
    months: [
      { m: 'Jan', level: 'fair' }, { m: 'Feb', level: 'fair' }, { m: 'Mar', level: 'good' },
      { m: 'Apr', level: 'good' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'fair' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Year-round — the park never closes and the highways are always ploughed',
          'September and October for the aspen turning and no insects',
          'Clear winter nights for the Beaver Hills Dark Sky Preserve',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Mosquitoes are serious on the trails in July',
          'Aurora nights draw crowds; some areas have been closed after overuse',
          'Deep cold snaps make a roadside stop unpleasant fast',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Prairie blizzards close the QEII and Hwy 16 a few times each winter',
          'Never leave your vehicle when bison are on the parkway, in any weather',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Elk Island National Park', href: 'https://parks.canada.ca/pn-np/ab/elkisland' },
    ],
  },

  hotels: [
    { name: 'Calgary Marriott Downtown Hotel', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.06261, 51.04498] },
    { name: 'Days Inn', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.06038, 51.02049] },
    { name: 'Hampton', type: 'Hotel', town: 'Red Deer', km: 139, coords: [-113.81727, 52.20634] },
    { name: 'Microtel', type: 'Hotel', town: 'Red Deer', km: 139, coords: [-113.81793, 52.20539] },
  ],

  eats: [
    { name: 'Rendezvous Cafe', type: 'Café', town: 'Calgary', km: 0, coords: [-114.08665, 51.04799] },
    { name: 'Silver Dragon Restaurant', type: 'Chinese', town: 'Calgary', km: 0, coords: [-114.06228, 51.05038] },
    { name: 'The Chopped Leaf', type: 'Salad', town: 'Red Deer', km: 139, coords: [-113.81536, 52.20696] },
    { name: 'Second Cup', type: 'Café', town: 'Red Deer', km: 139, coords: [-113.81505, 52.20694] },
    { name: 'Tim Hortons', type: 'Café', town: 'Edmonton', km: 282, coords: [-113.52897, 53.39708] },
  ],
};

export default CALGARY_ELK_ISLAND_EXPLORER;
