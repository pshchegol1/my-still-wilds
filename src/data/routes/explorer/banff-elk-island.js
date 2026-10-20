// Данные интерактивной карты маршрута Banff → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './banff-elk-island.line.json';

export const BANFF_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Banff', coords: [-115.57208, 51.17508] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Calgary', 'Red Deer'],

  stops: [
    { name: 'Banff', km: 0, coords: [-115.57208, 51.17508] },
    { name: 'Calgary', km: 129, coords: [-114.05754, 51.04561] },
    { name: 'Red Deer', km: 276, coords: [-113.81415, 52.26906] },
    { name: 'Elk Island NP', km: 479, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '479', unit: 'km', note: 'Banff to Elk Island via Calgary, Red Deer and Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~6h05m', unit: '', note: 'Non-stop — a full day of driving on divided highway' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → QEII → 16', unit: '', note: 'Divided throughout' },
    ],
    legs: [
      { from: 'Banff', to: 'Calgary', km: 129, road: 'Trans-Canada Hwy 1', note: 'East and out of the Rockies' },
      { from: 'Calgary', to: 'Red Deer', km: 147, road: 'Hwy 2 · QEII', note: 'North into the prairie' },
      { from: 'Red Deer', to: 'Elk Island NP', km: 203, road: 'QEII → Hwy 16', note: 'Through Edmonton and east to the gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 1, coords: [-115.57419, 51.17871] },
    { name: 'Esso', brand: 'Esso', town: 'Banff', km: 34, coords: [-115.26342, 51.03941] },
    { name: 'Chevron', brand: 'Chevron', town: 'Calgary', km: 68, coords: [-114.84457, 51.1461] },
    { name: 'Chevron', brand: 'Chevron', town: 'Calgary', km: 138, coords: [-114.03282, 51.09465] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 174, coords: [-114.00008, 51.41212] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 243, coords: [-113.94614, 52.01504] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Red Deer', km: 277, coords: [-113.82034, 52.27955] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 353, coords: [-113.64198, 52.89824] },
    { name: '7-Eleven', brand: '7-Eleven', town: 'Elk Island NP', km: 418, coords: [-113.45198, 53.44662] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 129, level: 'fair', label: 'Banff → Calgary', text: 'Patchy in the valley, good near the city' },
      { fromKm: 129, toKm: 479, level: 'good', label: 'Calgary → Elk Island', text: 'Good for the rest of the drive' },
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
    { name: 'Brewster\'s Mountain Lodge', type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57213, 51.17677] },
    { name: 'King Edward Hotel', type: 'Hotel', town: 'Banff', km: 0, coords: [-115.57119, 51.17653] },
    { name: 'Applause Hotel Calgary Airport', type: 'Hotel', town: 'Calgary', km: 143, coords: [-114.03496, 51.13835] },
    { name: 'Hotel Clique Calgary Airport', type: 'Hotel', town: 'Calgary', km: 143, coords: [-114.03413, 51.13887] },
    { name: 'Holiday Inn Express Red Deer North', type: 'Hotel', town: 'Red Deer', km: 279, coords: [-113.85013, 52.286] },
    { name: 'Quality Inn', type: 'Hotel', town: 'Red Deer', km: 279, coords: [-113.81583, 52.29884] },
  ],

  eats: [
    { name: 'Wild Flour Bakery', type: 'Café', town: 'Banff', km: 0, coords: [-115.5726, 51.17715] },
    { name: 'Vistas Dining Room', type: 'Restaurant', town: 'Banff', km: 0, coords: [-115.56126, 51.17176] },
    { name: 'Smitty\'s', type: 'Pancake', town: 'Calgary', km: 68, coords: [-114.84498, 51.14625] },
    { name: 'CAPS Bar & Grill', type: 'Restaurant', town: 'Calgary', km: 137, coords: [-114.03169, 51.09002] },
    { name: 'Westlake Grill', type: 'Restaurant', town: 'Red Deer', km: 277, coords: [-113.85139, 52.2619] },
    { name: 'Burger Boy', type: 'Restaurant', town: 'Red Deer', km: 277, coords: [-113.81922, 52.28009] },
    { name: 'Supreme Pizza', type: 'Pizza', town: 'Elk Island NP', km: 418, coords: [-113.4446, 53.44486] },
    { name: 'Millhurst Pizza', type: 'Pizza', town: 'Elk Island NP', km: 419, coords: [-113.43102, 53.44522] },
  ],
};

export default BANFF_ELK_ISLAND_EXPLORER;
