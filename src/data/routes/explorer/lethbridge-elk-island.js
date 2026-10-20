// Данные интерактивной карты маршрута Lethbridge → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './lethbridge-elk-island.line.json';

export const LETHBRIDGE_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Lethbridge', coords: [-112.8331, 49.69458] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Calgary', 'Red Deer'],

  stops: [
    { name: 'Lethbridge', km: 0, coords: [-112.8331, 49.69458] },
    { name: 'Calgary', km: 208, coords: [-114.05754, 51.04561] },
    { name: 'Red Deer', km: 355, coords: [-113.81415, 52.26906] },
    { name: 'Elk Island NP', km: 559, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '559', unit: 'km', note: 'Lethbridge to Elk Island via Calgary, Red Deer and Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~7h', unit: '', note: 'Non-stop — a full day, worth splitting at Red Deer' },
      { key: 'road', label: 'Road Type', value: 'Hwy 2 → Hwy 16', unit: '', note: 'Divided highway nearly throughout' },
    ],
    legs: [
      { from: 'Lethbridge', to: 'Calgary', km: 208, road: 'Hwy 3 → Hwy 2', note: 'North out of the dry south' },
      { from: 'Calgary', to: 'Red Deer', km: 147, road: 'Hwy 2 · QEII', note: 'The middle of the province' },
      { from: 'Red Deer', to: 'Elk Island NP', km: 204, road: 'QEII → Hwy 16', note: 'Through Edmonton and east to the gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Gas King', brand: 'Gas King', town: 'Lethbridge', km: 0, coords: [-112.80238, 49.67981] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Calgary', km: 197, coords: [-114.01533, 50.97677] },
    { name: 'Esso', brand: 'Esso', town: 'Calgary', km: 223, coords: [-114.04366, 51.1579] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 322, coords: [-113.94614, 52.01504] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Red Deer', km: 347, coords: [-113.81683, 52.21003] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Red Deer', km: 359, coords: [-113.87239, 52.28572] },
    { name: 'Esso', brand: 'Esso', town: 'Elk Island NP', km: 473, coords: [-113.54852, 53.25612] },
    { name: '7-Eleven Gas Bar', brand: '7-Eleven Gas Bar', town: 'Elk Island NP', km: 497, coords: [-113.44603, 53.42436] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Elk Island NP', km: 522, coords: [-113.27209, 53.5649] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 559, level: 'good', label: 'Lethbridge → Elk Island', text: 'Good the whole route, including in the park' },
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
    { name: 'Superlodge', type: 'Motel', town: 'Lethbridge', km: 0, coords: [-112.80914, 49.68907] },
    { name: 'Econo Lodge Inn', type: 'Hotel', town: 'Lethbridge', km: 0, coords: [-112.80483, 49.6813] },
    { name: 'Hotel Clique Calgary Airport', type: 'Hotel', town: 'Calgary', km: 222, coords: [-114.03413, 51.13887] },
    { name: 'Westin Calgary Airport', type: 'Hotel', town: 'Calgary', km: 222, coords: [-114.02824, 51.13738] },
    { name: 'Hampton', type: 'Hotel', town: 'Red Deer', km: 347, coords: [-113.81727, 52.20634] },
    { name: 'Microtel', type: 'Hotel', town: 'Red Deer', km: 347, coords: [-113.81793, 52.20539] },
    { name: 'Sandman Signature Edmonton South', type: 'Hotel', town: 'Elk Island NP', km: 493, coords: [-113.49032, 53.42386] },
    { name: 'Best Western South Edmonton Inn & Suites', type: 'Hotel', town: 'Elk Island NP', km: 493, coords: [-113.49041, 53.42306] },
  ],

  eats: [
    { name: 'The Penny Coffee House', type: 'Café', town: 'Lethbridge', km: 0, coords: [-112.83995, 49.69454] },
    { name: 'Koko Japanese Restaurant', type: 'Japanese', town: 'Lethbridge', km: 0, coords: [-112.83929, 49.69449] },
    { name: 'Pizza on Pointe', type: 'Pizza', town: 'Calgary', km: 179, coords: [-114.00183, 50.83484] },
    { name: 'Stockman\'s Restaurant and Lounge', type: 'Restaurant', town: 'Calgary', km: 179, coords: [-114.00157, 50.83545] },
    { name: 'The Chopped Leaf', type: 'Salad', town: 'Red Deer', km: 347, coords: [-113.81536, 52.20696] },
    { name: 'Second Cup', type: 'Café', town: 'Red Deer', km: 347, coords: [-113.81505, 52.20694] },
    { name: 'Workshop Eatery', type: 'Canadian', town: 'Elk Island NP', km: 492, coords: [-113.48042, 53.41569] },
    { name: 'Oodle Noodle', type: 'Asian', town: 'Elk Island NP', km: 492, coords: [-113.48148, 53.41079] },
  ],
};

export default LETHBRIDGE_ELK_ISLAND_EXPLORER;
