// Данные интерактивной карты маршрута Canmore → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './canmore-elk-island.line.json';

export const CANMORE_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Canmore', coords: [-115.36058, 51.08982] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Calgary', 'Red Deer'],

  stops: [
    { name: 'Canmore', km: 0, coords: [-115.36058, 51.08982] },
    { name: 'Calgary', km: 104, coords: [-114.05754, 51.04561] },
    { name: 'Red Deer', km: 251, coords: [-113.81415, 52.26906] },
    { name: 'Elk Island NP', km: 455, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '455', unit: 'km', note: 'Canmore to Elk Island via Calgary, Red Deer and Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~5h45m', unit: '', note: 'Non-stop — a full driving day on good roads' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → QEII → 16', unit: '', note: 'Divided throughout' },
    ],
    legs: [
      { from: 'Canmore', to: 'Calgary', km: 104, road: 'Trans-Canada Hwy 1', note: 'East out of the mountain corridor' },
      { from: 'Calgary', to: 'Red Deer', km: 147, road: 'Hwy 2 · QEII', note: 'North through open parkland' },
      { from: 'Red Deer', to: 'Elk Island NP', km: 204, road: 'QEII → Hwy 16', note: 'Through Edmonton and east to the gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso Express', brand: 'Esso Express', town: 'Canmore', km: 0, coords: [-115.36242, 51.10284] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 72, coords: [-114.47448, 51.08738] },
    { name: 'Tempo', brand: 'Tempo', town: 'Calgary', km: 98, coords: [-114.14285, 51.04601] },
    { name: 'Shell', brand: 'Shell', town: 'Calgary', km: 126, coords: [-113.99002, 51.19994] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 150, coords: [-114.00008, 51.41212] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 243, coords: [-113.81501, 52.20436] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Red Deer', km: 255, coords: [-113.83888, 52.29071] },
    { name: 'Esso', brand: 'Esso', town: 'Red Deer', km: 278, coords: [-113.77253, 52.46433] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 329, coords: [-113.64198, 52.89824] },
    { name: 'UFA Cardlock', brand: 'UFA Cardlock', town: 'Elk Island NP', km: 373, coords: [-113.54055, 53.28121] },
    { name: 'Husky', brand: 'Husky', town: 'Elk Island NP', km: 400, coords: [-113.37488, 53.45447] },
    { name: 'Esso', brand: 'Esso', town: 'Elk Island NP', km: 425, coords: [-113.17386, 53.56911] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 455, level: 'good', label: 'Canmore → Elk Island', text: 'Good from Canmore onward, including in the park' },
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
    { name: 'Paintbox Lodge', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.35773, 51.09018] },
    { name: 'Quality Resort Chateau Canmore', type: 'Hotel', town: 'Canmore', km: 0, coords: [-115.36075, 51.09962] },
    { name: 'Four Points by Sheraton Calgary West', type: 'Hotel', town: 'Calgary', km: 91, coords: [-114.20597, 51.08353] },
    { name: 'Sandman Hotel & Suites Calgary West', type: 'Hotel', town: 'Calgary', km: 91, coords: [-114.20887, 51.08528] },
    { name: 'Holiday Inn & Suites Red Deer South', type: 'Hotel', town: 'Red Deer', km: 244, coords: [-113.81187, 52.21372] },
    { name: 'Hampton', type: 'Hotel', town: 'Red Deer', km: 244, coords: [-113.81727, 52.20634] },
  ],

  eats: [
    { name: 'Bakery Cafe', type: 'Café', town: 'Canmore', km: 0, coords: [-115.36103, 51.08957] },
    { name: 'Murrieta\'s Bar & Grill', type: 'Restaurant', town: 'Canmore', km: 0, coords: [-115.36064, 51.08911] },
    { name: 'Great Canadian Pizza/ Butter Chicken Hut', type: 'Pizza', town: 'Calgary', km: 89, coords: [-114.24028, 51.10744] },
    { name: 'Tim Hortons', type: 'Café', town: 'Calgary', km: 89, coords: [-114.2401, 51.10743] },
    { name: 'The Donut Mill', type: 'Sandwich', town: 'Red Deer', km: 243, coords: [-113.81515, 52.20506] },
    { name: 'Boston Pizza', type: 'Pizza', town: 'Red Deer', km: 243, coords: [-113.81676, 52.20512] },
    { name: 'Triple L', type: 'Japanese', town: 'Elk Island NP', km: 404, coords: [-113.36473, 53.47704] },
    { name: 'Montana\'s', type: 'Barbecue', town: 'Elk Island NP', km: 404, coords: [-113.37004, 53.47751] },
  ],
};

export default CANMORE_ELK_ISLAND_EXPLORER;
