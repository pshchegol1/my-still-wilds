// Данные интерактивной карты маршрута Halifax → Cabot Trail.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './halifax-cabot-trail.line.json';

export const HALIFAX_CABOT_TRAIL_EXPLORER = {
  line,
  provinceIso: 'CA-NS',
  from: { name: 'Halifax', coords: [-63.5859, 44.6486] },
  to: { name: 'Chéticamp', coords: [-61.0157, 46.6259] },
  via: ['Truro', 'Baddeck', 'Ingonish'],

  stops: [
    { name: 'Halifax', km: 0, coords: [-63.5859, 44.6486] },
    { name: 'Truro', km: 94, coords: [-63.2865, 45.3657] },
    { name: 'Canso Causeway', km: 261, coords: [-61.3996, 45.6457] },
    { name: 'Baddeck', km: 346, coords: [-60.7536, 46.0997] },
    { name: 'Ingonish', km: 438, coords: [-60.3675, 46.6919] },
    { name: 'Chéticamp', km: 545, coords: [-61.0157, 46.6259] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '545', unit: 'km', note: '350 km Halifax to Baddeck, then ~200 km around the Cabot Trail through the park' },
      { key: 'time', label: 'Drive Time', value: '~7h45m', unit: '', note: 'Pure driving. Genuinely a 2–3 day trip, not a day trip' },
      { key: 'road', label: 'Road Type', value: 'Hwy 102 / 105', unit: '', note: 'Divided highway to the Canso Causeway, then two-lane with steep grades' },
    ],
    legs: [
      { from: 'Halifax', to: 'Truro', km: 94, road: 'Hwy 102 · divided', note: 'Fast, ordinary highway — save your attention for later' },
      { from: 'Truro', to: 'Canso Causeway', km: 167, road: 'Hwy 104 · divided', note: 'Across mainland Nova Scotia to the crossing onto Cape Breton' },
      { from: 'Canso Causeway', to: 'Baddeck', km: 85, road: 'Hwy 105 · two-lane', note: 'Along the Bras d’Or Lake to the start of the loop' },
      { from: 'Baddeck', to: 'Chéticamp', km: 199, road: 'Cabot Trail', note: 'Steep grades up to 13% over French and MacKenzie Mountains' },
    ],
  },

  fuel: {
    summary: 'Fill up in Baddeck before you start the loop, and again in Chéticamp. Stations on the highlands stretch are few and keep short off-season hours. The pins show what is mapped in OpenStreetMap, not every pump on the route.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по
    // этому маршруту неполная, и посчитанный по ней разрыв был бы
    // заметно больше реального.
    items: [
    { name: 'Irving', brand: 'Irving', town: 'Halifax', km: 0, coords: [-63.57142, 44.63542] },
    { name: 'Race Track', brand: 'Race Track', town: 'Halifax', km: 21, coords: [-63.60892, 44.81327] },
    { name: 'McNeill\'s Shell', brand: 'McNeill\'s Shell', town: 'Halifax', km: 42, coords: [-63.50891, 44.96471] },
    { name: 'Irving', brand: 'Irving', town: 'Truro', km: 57, coords: [-63.40871, 45.08546] },
    { name: 'Esso', brand: 'Esso', town: 'Truro', km: 81, coords: [-63.27979, 45.25388] },
    { name: 'Esso', brand: 'Esso', town: 'Truro', km: 99, coords: [-63.24076, 45.38107] },
    { name: 'Shell', brand: 'Shell', town: 'Truro', km: 149, coords: [-62.67756, 45.57816] },
    { name: 'Sobeys Fast Fuel', brand: 'Sobeys Fast Fuel', town: 'Canso Causeway', km: 209, coords: [-61.9705, 45.61145] },
    { name: 'ESSO', brand: 'ESSO', town: 'Canso Causeway', km: 228, coords: [-61.74093, 45.59311] },
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Canso Causeway', km: 260, coords: [-61.38729, 45.64088] },
    { name: 'Rod\'s One Stop', brand: 'Rod\'s One Stop', town: 'Baddeck', km: 307, coords: [-61.13443, 45.96997] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Baddeck', km: 332, coords: [-60.91306, 46.08196] },
    { name: 'Caper Gas', brand: 'Caper Gas', town: 'Ingonish', km: 430, coords: [-60.40423, 46.64261] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps. The highlands plateau is the weak spot.',
    segments: [
      { fromKm: 0, toKm: 261, level: 'good', label: 'Halifax → Canso Causeway', text: 'Reliable along the divided highway' },
      { fromKm: 261, toKm: 346, level: 'good', label: 'Causeway → Baddeck', text: 'Fine along the Bras d’Or Lake' },
      { fromKm: 346, toKm: 438, level: 'fair', label: 'Baddeck → Ingonish', text: 'Drops in the river valleys and on the climbs' },
      { fromKm: 438, toKm: 545, level: 'poor', label: 'The highlands plateau', text: 'Little to nothing across the top and down French Mountain' },
    ],
  },

  weather: {
    intro: 'Fog off the Gulf, steep descents and moose. The Cabot Trail rewards an unhurried driver and punishes a tired one.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June – October, with late September and October the best weeks for colour',
          'Book inns along the trail months ahead for leaf season and Celtic Colours',
          'Drive the mountain sections in daylight, always',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Fog rolls in off the Gulf with no warning on the western side',
          'Use low gear on the descents — brake fade on MacKenzie Mountain is a known problem',
          'May and November: many businesses along the trail are closed or on short hours',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'After dark on the highlands — moose stand in the road and will not move',
          'Winter storm or freezing rain: the trail is exposed, steep and sparsely serviced',
          'Any time you are too tired for 13% grades with few guardrails',
        ],
      },
    ],
    links: [
      { label: 'Nova Scotia 511 — road conditions', href: 'https://511.novascotia.ca' },
      { label: 'Parks Canada — Cape Breton Highlands', href: 'https://parks.canada.ca/pn-np/ns/cbreton' },
    ],
  },

  hotels: [
    { name: 'Residence Inn Halifax Downtown', type: 'Hotel', town: 'Halifax', km: 0, coords: [-63.57538, 44.64589] },
    { name: 'Courtyard Halifax Downtown', type: 'Hotel', town: 'Halifax', km: 0, coords: [-63.57089, 44.64497] },
    { name: 'Comfort Inn Truro', type: 'Hotel', town: 'Truro', km: 92, coords: [-63.31651, 45.36853] },
    { name: 'Tidal Bore Inn', type: 'Motel', town: 'Truro', km: 92, coords: [-63.32474, 45.36549] },
    { name: 'Cove Motel', type: 'Motel', town: 'Canso Causeway', km: 256, coords: [-61.43827, 45.65498] },
    { name: 'Hearthstone (MacPuffin) Inn', type: 'Motel', town: 'Canso Causeway', km: 260, coords: [-61.38959, 45.64182] },
    { name: 'Cabot Trail Motel', type: 'Motel', town: 'Baddeck', km: 343, coords: [-60.79127, 46.0835] },
    { name: 'Baddeck Inn', type: 'Hotel', town: 'Baddeck', km: 344, coords: [-60.78229, 46.08695] },
    { name: 'Mountain View Motel & Cottages', type: 'Motel', town: 'Chéticamp', km: 501, coords: [-60.79588, 46.82007] },
    { name: 'Ocean View Motel & Chalets', type: 'Motel', town: 'Chéticamp', km: 543, coords: [-61.00303, 46.64229] },
  ],

  eats: [
    { name: 'Niche Supper Club Lounge', type: 'Restaurant', town: 'Halifax', km: 0, coords: [-63.57224, 44.64433] },
    { name: 'Press Gang', type: 'Restaurant', town: 'Halifax', km: 0, coords: [-63.57422, 44.6471] },
    { name: 'Irving Big Stop Restaurant', type: 'Burger', town: 'Truro', km: 91, coords: [-63.31087, 45.34964] },
    { name: 'Swiss Chalet', type: 'Chicken', town: 'Truro', km: 92, coords: [-63.31327, 45.36814] },
    { name: 'Irving Big Stop Restaurant', type: 'Restaurant', town: 'Canso Causeway', km: 257, coords: [-61.43914, 45.6494] },
    { name: 'Tim Hortons', type: 'Café', town: 'Baddeck', km: 344, coords: [-60.78049, 46.08786] },
    { name: 'Bell Buoy', type: 'American', town: 'Baddeck', km: 346, coords: [-60.74777, 46.10091] },
    { name: 'Mermaid Seekers', type: 'Restaurant', town: 'Ingonish', km: 401, coords: [-60.44568, 46.4907] },
    { name: 'Bean Barn Cafe', type: 'Café', town: 'Ingonish', km: 435, coords: [-60.40613, 46.68196] },
    { name: 'Le Gabriel', type: 'Restaurant', town: 'Chéticamp', km: 543, coords: [-61.00759, 46.63593] },
    { name: 'L\'abri', type: 'Restaurant', town: 'Chéticamp', km: 543, coords: [-61.00329, 46.64199] },
  ],
};

export default HALIFAX_CABOT_TRAIL_EXPLORER;
