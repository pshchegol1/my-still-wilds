// Данные интерактивной карты маршрута Red Deer → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './red-deer-elk-island.line.json';

export const RED_DEER_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Red Deer', coords: [-113.81415, 52.26906] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Edmonton'],

  stops: [
    { name: 'Red Deer', km: 0, coords: [-113.81415, 52.26906] },
    { name: 'Edmonton', km: 154, coords: [-113.49124, 53.54621] },
    { name: 'Elk Island NP', km: 207, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '207', unit: 'km', note: 'Red Deer to Elk Island via Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~2h50m', unit: '', note: 'Non-stop — comfortably a day trip' },
      { key: 'road', label: 'Road Type', value: 'QEII → Hwy 16', unit: '', note: 'Divided four-lane the whole distance' },
    ],
    legs: [
      { from: 'Red Deer', to: 'Edmonton', km: 154, road: 'Hwy 2 · QEII', note: 'Ninety minutes north on the busiest road in Alberta' },
      { from: 'Edmonton', to: 'Elk Island NP', km: 53, road: 'Hwy 16 · Yellowhead', note: 'East out of the city to the park gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Centex', brand: 'Centex', town: 'Red Deer', km: 0, coords: [-113.77382, 52.26611] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 26, coords: [-113.77253, 52.46433] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 78, coords: [-113.64198, 52.89824] },
    { name: 'Chevron', brand: 'Chevron', town: 'Edmonton', km: 124, coords: [-113.54409, 53.30101] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 144, coords: [-113.49401, 53.46735] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 159, coords: [-113.46679, 53.59261] },
    { name: 'Esso', brand: 'Esso', town: 'Edmonton', km: 178, coords: [-113.17386, 53.56911] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 207, level: 'good', label: 'Red Deer → Elk Island', text: 'Good the whole way, including in the park' },
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
    { name: 'Baymont By Wyndham Red Deer', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.81052, 52.26224] },
    { name: 'Sandman Hotel Red Deer', type: 'Hotel', town: 'Red Deer', km: 0, coords: [-113.81608, 52.24701] },
    { name: 'Derrick Motel', type: 'Motel', town: 'Edmonton', km: 144, coords: [-113.49122, 53.47535] },
    { name: 'Royal Lodge', type: 'Motel', town: 'Edmonton', km: 144, coords: [-113.49131, 53.47431] },
  ],

  eats: [
    { name: 'Shiso Japanese Restaurant', type: 'Japanese', town: 'Red Deer', km: 0, coords: [-113.81337, 52.25872] },
    { name: 'Babycakes Cupcakery', type: 'Restaurant', town: 'Red Deer', km: 0, coords: [-113.77381, 52.2663] },
    { name: 'Paris Baguette', type: 'Café', town: 'Edmonton', km: 135, coords: [-113.53804, 53.40704] },
    { name: 'The Chopped Leaf', type: 'Salad', town: 'Edmonton', km: 135, coords: [-113.53617, 53.4068] },
  ],
};

export default RED_DEER_ELK_ISLAND_EXPLORER;
