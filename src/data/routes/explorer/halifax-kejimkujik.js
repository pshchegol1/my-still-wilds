// Данные интерактивной карты маршрута Halifax → Kejimkujik.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './halifax-kejimkujik.line.json';

export const HALIFAX_KEJIMKUJIK_EXPLORER = {
  line,
  provinceIso: 'CA-NS',
  from: { name: 'Halifax', coords: [-63.5859, 44.6486] },
  to: { name: 'Maitland Bridge', coords: [-65.202, 44.4486] },
  via: ['Bridgewater'],

  stops: [
    { name: 'Halifax', km: 0, coords: [-63.5859, 44.6486] },
    { name: 'Bridgewater', km: 102, coords: [-64.5194, 44.3774] },
    { name: 'Maitland Bridge', km: 170, coords: [-65.202, 44.4486] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '170', unit: 'km', note: 'Halifax to the Maitland Bridge park entrance via Bridgewater' },
      { key: 'time', label: 'Drive Time', value: '~2h30m', unit: '', note: 'Non-stop — the park itself wants a full day or more' },
      { key: 'road', label: 'Road Type', value: 'Hwy 103 → Rte 8', unit: '', note: 'Fast highway along the South Shore, then two-lane inland' },
    ],
    legs: [
      { from: 'Halifax', to: 'Bridgewater', km: 102, road: 'Hwy 103', note: 'Along the South Shore — the quick part of the drive' },
      { from: 'Bridgewater', to: 'Maitland Bridge', km: 68, road: 'Route 8 · inland', note: 'Inland through forest and small villages to the park gate' },
    ],
  },

  fuel: {
    summary: 'Straightforward. Bridgewater has everything, and Annapolis Royal covers the far side. Route 8 between them runs through small villages, so fill up before you turn inland rather than counting on the way. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Irving', brand: 'Irving', town: 'Halifax', km: 0, coords: [-63.57142, 44.63542] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Halifax', km: 12, coords: [-63.71291, 44.64576] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Bridgewater', km: 67, coords: [-64.30708, 44.56776] },
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Bridgewater', km: 98, coords: [-64.5353, 44.39896] },
    { name: 'Irving', brand: 'Irving', town: 'Bridgewater', km: 110, coords: [-64.60832, 44.37594] },
    { name: 'Race Tac', brand: 'Race Tac', town: 'Maitland Bridge', km: 151, coords: [-65.01978, 44.37811] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 102, level: 'good', label: 'Halifax → Bridgewater', text: 'Solid along Hwy 103' },
      { fromKm: 102, toKm: 170, level: 'fair', label: 'Route 8 inland', text: 'Patchy between villages and inside the park' },
    ],
  },

  weather: {
    intro: 'An easy drive in any season. What changes is the park: nearly everything there runs between the Victoria Day weekend and the end of October.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'fair' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'May to October, while the campgrounds, canoe rentals and petroglyph tours run',
          'September and October for colour, no insects and empty lakes',
          'Clear new-moon nights for the dark-sky programming',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Tick season runs spring through autumn — this is a Lyme disease area',
          'Blackfly and mosquito peak in June on the inland trails',
          'Most park services close from November to the Victoria Day weekend',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Nor’easters and freezing rain — Route 8 is two-lane, wooded and quiet',
          'Hurricane remnants in late summer bring down trees across inland roads',
        ],
      },
    ],
    links: [
      { label: 'Nova Scotia 511 — road conditions', href: 'https://511.novascotia.ca' },
      { label: 'Parks Canada — Kejimkujik', href: 'https://parks.canada.ca/pn-np/ns/kejimkujik' },
    ],
  },

  hotels: [
    { name: 'Residence Inn Halifax Downtown', type: 'Hotel', town: 'Halifax', km: 0, coords: [-63.57538, 44.64589] },
    { name: 'Courtyard Halifax Downtown', type: 'Hotel', town: 'Halifax', km: 0, coords: [-63.57089, 44.64497] },
    { name: 'Best Western', type: 'Hotel', town: 'Bridgewater', km: 98, coords: [-64.53966, 44.40015] },
    { name: 'Comfort Inn', type: 'Hotel', town: 'Bridgewater', km: 100, coords: [-64.51706, 44.38515] },
    { name: 'Whitman Inn', type: 'Hotel', town: 'Maitland Bridge', km: 164, coords: [-65.15544, 44.43189] },
  ],

  eats: [
    { name: 'Niche Supper Club Lounge', type: 'Restaurant', town: 'Halifax', km: 0, coords: [-63.57224, 44.64433] },
    { name: 'Press Gang', type: 'Restaurant', town: 'Halifax', km: 0, coords: [-63.57422, 44.6471] },
    { name: 'Rebecca\'s Restaurant', type: 'Local', town: 'Bridgewater', km: 82, coords: [-64.37883, 44.45577] },
    { name: 'Swiss Chalet', type: 'Chicken', town: 'Bridgewater', km: 98, coords: [-64.53582, 44.39931] },
    { name: 'E-J‘s Grill', type: 'Restaurant', town: 'Maitland Bridge', km: 169, coords: [-65.19848, 44.44155] },
  ],
};

export default HALIFAX_KEJIMKUJIK_EXPLORER;
