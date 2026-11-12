// Данные интерактивной карты маршрута Calgary → Kootenay.
// Линия — реальная дорога (OSRM поверх OpenStreetMap). Заправки, отели и
// кафе — реальные объекты из OpenStreetMap (выгрузка Overpass, ноябрь
// 2026); список не исчерпывающий. Отсутствие заправок в парке
// подтверждено Parks Canada, а не только картой.
// Координаты в порядке [долгота, широта], как требует MapLibre.

import line from './calgary-kootenay.line.json';

export const CALGARY_KOOTENAY_EXPLORER = {
  line,
  provinceIso: 'CA-BC',
  from: { name: 'Calgary', coords: [-114.05754, 51.04561] },
  to: { name: 'Radium Hot Springs', coords: [-116.07606, 50.62007] },
  via: ['Banff', 'Castle Junction', 'Marble Canyon'],

  stops: [
    { name: 'Calgary', km: 0, coords: [-114.05754, 51.04561] },
    { name: 'Canmore', km: 104, coords: [-115.3486, 51.0884] },
    { name: 'Banff', km: 127, coords: [-115.5708, 51.1784] },
    { name: 'Castle Junction', km: 158, coords: [-115.91833, 51.26876] },
    { name: 'Marble Canyon', km: 176, coords: [-116.1209, 51.1859] },
    { name: 'Radium Hot Springs', km: 264, coords: [-116.07606, 50.62007] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '264', unit: 'km', note: 'Calgary → Castle Junction 158 km · Castle Junction → Radium 106 km on Hwy 93 South' },
      { key: 'time', label: 'Drive Time', value: '~3h50m', unit: '', note: 'Non-stop. Realistically a full day with Marble Canyon, the Paint Pots and the hot pools' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → 93S', unit: '', note: 'Divided Trans-Canada to Castle Junction, then two-lane Highway 93 South at 90 km/h' },
    ],
    legs: [
      { from: 'Calgary', to: 'Banff', km: 127, road: 'Hwy 1 · Trans-Canada', note: 'Foothills into the Bow Valley — Parks Canada pass needed from the Banff gate' },
      { from: 'Banff', to: 'Castle Junction', km: 31, road: 'Hwy 1 · wildlife-fenced', note: 'Last fuel and last cell signal for about 106 km' },
      { from: 'Castle Junction', to: 'Marble Canyon', km: 18, road: 'Hwy 93 South', note: 'Over the Continental Divide at Vermilion Pass into Kootenay' },
      { from: 'Marble Canyon', to: 'Radium Hot Springs', km: 88, road: 'Hwy 93 South', note: 'Down the Kootenay valley and through Sinclair Canyon — no services' },
    ],
  },

  fuel: {
    summary: 'Easy until Castle Junction. There are no fuel stations anywhere inside Kootenay National Park — the 106 km from Castle Junction to Radium has no pumps at all. Fill up in Banff or at Castle Junction.',
    longestGapKm: 106,
    items: [
      { name: 'Centex', brand: 'Centex', town: 'Calgary', km: 0, coords: [-114.05144, 51.05124] },
      { name: 'GB Fuels', brand: 'GB Fuels', town: 'Dead Man’s Flats', km: 87, coords: [-115.16277, 51.05958] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 127, coords: [-115.57419, 51.17871], note: 'Last full-service town before the park' },
      { name: 'Castle Mountain Chalets', brand: 'Independent', town: 'Castle Junction', km: 158, coords: [-115.9191, 51.26895], note: 'Last pump before Radium — check hours before relying on it', warn: true },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Radium Hot Springs', km: 264, coords: [-116.07128, 50.62285] },
      { name: 'Esso', brand: 'Esso', town: 'Radium Hot Springs', km: 264, coords: [-116.07092, 50.62224] },
    ],
  },

  cell: {
    note: 'Inside the park: Parks Canada says there is no cell or Wi-Fi coverage except at Castle Junction and the Radium Hot Springs pools. Outside the park: approximate.',
    segments: [
      { fromKm: 0, toKm: 158, level: 'good', label: 'Calgary → Castle Junction', text: 'Coverage along the Trans-Canada corridor' },
      { fromKm: 158, toKm: 262, level: 'poor', label: 'Castle Junction → Radium pools', text: 'No signal in the park — use the four emergency phones along the highway' },
      { fromKm: 262, toKm: 264, level: 'good', label: 'Radium Hot Springs', text: 'Signal returns at the pools and in town' },
    ],
  },

  weather: {
    intro: 'A mountain highway that is maintained all year — but in Kootenay, winter tires or chains are the law from October 1 to April 30, and summer wildfires have closed the road before.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'fair' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June, July and September — visitor services in the park run from May to mid-October',
          'Early morning, when parking at Marble Canyon and the Paint Pots is easy',
          'Any clear day after checking DriveBC and 511 Alberta',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Wildfire smoke and possible closures in late summer',
          'Wildlife on the road at dawn and dusk — bighorn sheep near Radium',
          'October and May can bring snow at Vermilion Pass',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Without winter tires or chains between October 1 and April 30 — it is required by law',
          'In a winter storm — there is no signal and no services for 106 km',
          'On an empty tank past Castle Junction',
        ],
      },
    ],
    links: [
      { label: 'DriveBC — road conditions', href: 'https://drivebc.ca' },
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Getting to Kootenay', href: 'https://parks.canada.ca/pn-np/bc/kootenay/visit/directions' },
    ],
  },

  hotels: [
    { name: 'Hotel Arts', type: 'Hotel', town: 'Calgary', km: 0, coords: [-114.06489, 51.04129] },
    { name: 'The Gateway Inn', type: 'Hotel', town: 'Canmore', km: 108, coords: [-115.38398, 51.12358] },
    { name: 'Rundle Chalet', type: 'Hotel', town: 'Canmore', km: 109, coords: [-115.38898, 51.12686] },
    { name: 'Best Western Plus', type: 'Hotel', town: 'Radium Hot Springs', km: 264, coords: [-116.07336, 50.62179] },
    { name: 'Village Country Inn', type: 'Motel', town: 'Radium Hot Springs', km: 264, coords: [-116.07441, 50.62015] },
  ],

  eats: [
    { name: 'Silver Dragon Restaurant', type: 'Chinese', town: 'Calgary', km: 0, coords: [-114.06228, 51.05038] },
    { name: 'Market Bistro', type: 'Restaurant', town: 'Canmore', km: 100, coords: [-115.32199, 51.05543] },
    { name: 'La Belle Patate', type: 'Sandwich', town: 'Canmore', km: 102, coords: [-115.32371, 51.07839] },
    { name: 'Big Horn Cafe', type: 'Café', town: 'Radium Hot Springs', km: 264, coords: [-116.07154, 50.62038] },
    { name: 'Horsethief Creek Pub & Eatery', type: 'Pub', town: 'Radium Hot Springs', km: 264, coords: [-116.06975, 50.62024] },
  ],
};

export default CALGARY_KOOTENAY_EXPLORER;
