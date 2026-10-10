// Данные интерактивной карты маршрута Kamloops → Yoho via Rogers Pass.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). km — расстояние от старта вдоль маршрута.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './rogers-pass-yoho.line.json';

export const ROGERS_PASS_YOHO_EXPLORER = {
  line,
  provinceIso: 'CA-BC',
  from: { name: 'Kamloops', coords: [-120.3394, 50.6758] },
  to: { name: 'Field', coords: [-116.4892, 51.3961] },
  via: ['Revelstoke', 'Rogers Pass', 'Golden'],

  stops: [
    { name: 'Kamloops', km: 0, coords: [-120.3394, 50.6758] },
    { name: 'Salmon Arm', km: 110, coords: [-119.2791, 50.7005] },
    { name: 'Craigellachie', km: 166, coords: [-118.724, 50.9752] },
    { name: 'Revelstoke', km: 213, coords: [-118.1957, 50.998] },
    { name: 'Rogers Pass', km: 281, coords: [-117.5212, 51.3013] },
    { name: 'Golden', km: 362, coords: [-116.9645, 51.2992] },
    { name: 'Field', km: 422, coords: [-116.4892, 51.3961] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '422', unit: 'km', note: 'Kamloops to Field via Trans-Canada Hwy 1 eastbound — longer than it looks on a map' },
      { key: 'time', label: 'Drive Time', value: '~6h', unit: '', note: 'Non-stop. Realistically a 2-day trip split at Revelstoke or Golden' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1', unit: '', note: 'Trans-Canada Highway throughout — mountain grades and switchbacks through Rogers Pass' },
    ],
    legs: [
      { from: 'Kamloops', to: 'Revelstoke', km: 213, road: 'Hwy 1', note: 'Passes Salmon Arm and the Craigellachie Last Spike site' },
      { from: 'Revelstoke', to: 'Rogers Pass', km: 68, road: 'Hwy 1 · steep grade', note: 'The climb into Glacier National Park — no fuel on this leg' },
      { from: 'Rogers Pass', to: 'Golden', km: 81, road: 'Hwy 1 · steep grade', note: 'Longest fuel gap on the route — nothing at the summit itself' },
      { from: 'Golden', to: 'Field', km: 60, road: 'Hwy 1 · Kicking Horse Pass', note: 'Enters Yoho National Park, past the Spiral Tunnels viewpoint' },
    ],
  },

  fuel: {
    summary: 'Gas is easy in Kamloops, Salmon Arm, and Revelstoke. The 81 km between Revelstoke and Golden has nothing — no station at the Rogers Pass summit itself.',
    longestGapKm: 81,
    items: [
      { name: 'Mobil', brand: 'Mobil', town: 'Kamloops', km: 0, coords: [-120.35591, 50.6675] },
      { name: 'Dallas Drive Otter Co-Op Gas Bar', brand: 'Co-op', town: 'Kamloops', km: 16, coords: [-120.12057, 50.65855] },
      { name: 'Big Eddy Market', brand: 'Independent', town: 'Revelstoke', km: 210, coords: [-118.22461, 50.99793] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Revelstoke', km: 211, coords: [-118.21596, 51.00836], note: 'Fill up here — nothing for 81 km to Golden', warn: true },
      { name: 'Fas Gas', brand: 'Fas Gas', town: 'Revelstoke', km: 211, coords: [-118.21234, 51.01141] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Golden', km: 361, coords: [-116.9703, 51.30437] },
      { name: 'Centex', brand: 'Centex', town: 'Golden', km: 361, coords: [-116.96821, 51.30285] },
      { name: 'Yoho Brothers Trading Post', brand: 'Independent', town: 'Field', km: 418, coords: [-116.49076, 51.39858], note: 'Last stop before the park interior' },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps (Rogers, Telus, Bell). Download offline maps before Revelstoke.',
    segments: [
      { fromKm: 0, toKm: 213, level: 'good', label: 'Kamloops → Revelstoke', text: 'Reliable along the Trans-Canada corridor' },
      { fromKm: 213, toKm: 281, level: 'fair', label: 'Revelstoke → Rogers Pass', text: 'Starts dropping on the climb into Glacier National Park' },
      { fromKm: 281, toKm: 340, level: 'poor', label: 'Rogers Pass → approaching Golden', text: 'Notoriously poor to none through the pass itself' },
      { fromKm: 340, toKm: 422, level: 'good', label: 'Golden → Field', text: 'Recovers near Golden, stays solid into Yoho' },
    ],
  },

  weather: {
    intro: 'Rogers Pass is the snowiest, most avalanche-controlled stretch of highway on any of our routes. These are the rules locals actually drive by.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June – September, dry pavement — still budget the full day, this is a long drive regardless of season',
          'Fill up in Revelstoke no matter your gauge — the next pump is 81 km away in Golden',
          'Stop at the Rogers Pass Discovery Centre — the Hemlock Grove boardwalk is worth 15 minutes',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'October – May: winter tires/chains essential — this is one of the snowiest highway corridors in Canada',
          'Watch for temporary signal-controlled single-lane sections through the pass, common in summer construction too',
          'Elk and deer cross frequently near Golden and Field at dawn and dusk',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Active avalanche control in progress — planned closures of 20–90+ minutes are routine in winter, not optional',
          'Heavy snowfall warning for Rogers Pass — this is genuinely one of the snowiest measured locations in Canada',
          'Highway closure posted on DriveBC for the Trans-Canada through Glacier National Park',
        ],
      },
    ],
    links: [
      { label: 'DriveBC — highway conditions', href: 'https://drivebc.ca' },
      { label: 'Parks Canada — Rogers Pass / Glacier NP bulletins', href: 'https://parks.canada.ca/pn-np/bc/glacier/bulletins' },
    ],
  },

  hotels: [
    { name: 'The Vista Inn', type: 'Motel', town: 'Kamloops', km: 0, coords: [-120.3542, 50.67331] },
    { name: 'Sandman Inn & Suites Kamloops', type: 'Hotel', town: 'Kamloops', km: 1, coords: [-120.32783, 50.67192] },
    { name: 'Jade Mountain Motel', type: 'Motel', town: 'Salmon Arm', km: 61, coords: [-119.64798, 50.83179] },
    { name: 'Frontier Motel', type: 'Motel', town: 'Revelstoke', km: 211, coords: [-118.21151, 51.01135] },
    { name: 'Courthouse Inn Revelstoke', type: 'Hotel', town: 'Revelstoke', km: 212, coords: [-118.20694, 51.00399] },
    { name: 'Hillside Lodge and Chalet', type: 'Hotel', town: 'Golden', km: 345, coords: [-117.05603, 51.42706] },
    { name: 'Swiss Village Inn', type: 'Motel', town: 'Golden', km: 359, coords: [-116.976, 51.31602] },
  ],

  eats: [
    { name: 'Brownstone', type: 'Restaurant', town: 'Kamloops', km: 0, coords: [-120.3387, 50.67643] },
    { name: 'Canooligans', type: 'Restaurant', town: 'Salmon Arm', km: 119, coords: [-119.22786, 50.75382] },
    { name: 'Zalas Steak House', type: 'Steak', town: 'Revelstoke', km: 211, coords: [-118.21278, 51.00793] },
    { name: 'Raven + Pine Mountain Eatery', type: 'Restaurant', town: 'Golden', km: 359, coords: [-116.97147, 51.31102] },
    { name: 'Fire Pit BBQ Smokehouse', type: 'Barbecue', town: 'Golden', km: 359, coords: [-116.97265, 51.3121] },
    { name: 'Truffle Pigs Bistro', type: 'Restaurant', town: 'Field', km: 419, coords: [-116.49002, 51.39457] },
    { name: 'The Pig Pen', type: 'Café', town: 'Field', km: 419, coords: [-116.48996, 51.39449] },
  ],
};

export default ROGERS_PASS_YOHO_EXPLORER;
