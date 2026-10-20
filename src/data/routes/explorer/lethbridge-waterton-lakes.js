// Данные интерактивной карты маршрута Lethbridge → Waterton Lakes.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './lethbridge-waterton-lakes.line.json';

export const LETHBRIDGE_WATERTON_LAKES_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Lethbridge', coords: [-112.8331, 49.69458] },
  to: { name: 'Waterton Lakes', coords: [-113.90702, 49.05092] },
  via: ['Cardston'],

  stops: [
    { name: 'Lethbridge', km: 0, coords: [-112.8331, 49.69458] },
    { name: 'Cardston', km: 79, coords: [-113.31657, 49.20012] },
    { name: 'Waterton Lakes', km: 132, coords: [-113.90702, 49.05092] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '132', unit: 'km', note: 'Lethbridge to Waterton via Cardston on Hwy 5' },
      { key: 'time', label: 'Drive Time', value: '~1h50m', unit: '', note: 'Non-stop — the only Alberta mountain park that works as a half-day' },
      { key: 'road', label: 'Road Type', value: 'Hwy 5 → Hwy 6', unit: '', note: 'Two-lane and paved across open farmland' },
    ],
    legs: [
      { from: 'Lethbridge', to: 'Cardston', km: 79, road: 'Hwy 5 southwest', note: 'Across Kainai territory with the peaks ahead' },
      { from: 'Cardston', to: 'Waterton Lakes', km: 53, road: 'Hwy 5 → Hwy 6', note: 'The last farmland, then straight into the mountains' },
    ],
  },

  fuel: {
    summary: 'Lethbridge and Cardston both have full services, and the drive is under two hours. Fuel in the Waterton townsite is limited and seasonal, so fill in Cardston if you plan to drive the park roads. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Lethbridge', km: 0, coords: [-112.82477, 49.70095] },
    { name: 'RaceTrac', brand: 'RaceTrac', town: 'Cardston', km: 77, coords: [-113.3022, 49.20086] },
    { name: 'Barn Store', brand: 'Barn Store', town: 'Cardston', km: 102, coords: [-113.6015, 49.13196] },
    { name: 'Independent', brand: 'Independent', town: 'Waterton Lakes', km: 131, coords: [-113.90768, 49.05267] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 79, level: 'good', label: 'Lethbridge → Cardston', text: 'Good across the farmland' },
      { fromKm: 79, toKm: 132, level: 'fair', label: 'Into Waterton', text: 'Patchy once you are in the park' },
    ],
  },

  weather: {
    intro: 'The wind is the story here. Waterton sits where the prairie hits the mountains with nothing in between, and the gusts that produces close highways and shut the park’s own roads.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June to September, when the townsite and the park roads are fully open',
          'September for warm days, no crowds and the best light on the lakes',
          'Any calm day — wind matters more here than temperature',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Gusts over 100 km/h are routine; high-sided vehicles get pushed around',
          'Much of the park’s road network closes outside the summer season',
          'Bears are active along the Akamina and Red Rock parkways',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Ground blizzards close Hwy 5 and 6 several times most winters',
          'Black ice after a chinook thaw refreezes overnight',
          'Wind warnings — this is the windiest corner of the Canadian Rockies',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Waterton Lakes National Park', href: 'https://parks.canada.ca/pn-np/ab/waterton' },
    ],
  },

  hotels: [
    { name: 'Sandman Signature Lethbridge Lodge', type: 'Hotel', town: 'Lethbridge', km: 0, coords: [-112.84623, 49.69465] },
    { name: 'Wingate by Wyndham', type: 'Hotel', town: 'Lethbridge', km: 0, coords: [-112.83492, 49.69736] },
  ],

  eats: [
    { name: 'The Penny Coffee House', type: 'Café', town: 'Lethbridge', km: 0, coords: [-112.83995, 49.69454] },
    { name: 'Koko Japanese Restaurant', type: 'Japanese', town: 'Lethbridge', km: 0, coords: [-112.83929, 49.69449] },
  ],
};

export default LETHBRIDGE_WATERTON_LAKES_EXPLORER;
