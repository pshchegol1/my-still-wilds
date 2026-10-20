// Данные интерактивной карты маршрута Whitehorse → Kluane.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './whitehorse-kluane.line.json';

export const WHITEHORSE_KLUANE_EXPLORER = {
  line,
  provinceIso: 'CA-YT',
  from: { name: 'Whitehorse', coords: [-135.0549, 60.7216] },
  to: { name: 'Destruction Bay', coords: [-138.7998, 61.2514] },
  via: ['Haines Junction', 'Kluane Lake'],

  stops: [
    { name: 'Whitehorse', km: 0, coords: [-135.0549, 60.7216] },
    { name: 'Haines Junction', km: 155, coords: [-137.51, 60.7527] },
    { name: 'Kluane Lake', km: 230, coords: [-138.4, 61.05] },
    { name: 'Destruction Bay', km: 272, coords: [-138.7998, 61.2514] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '272', unit: 'km', note: 'Whitehorse to Destruction Bay · Haines Junction, the park gateway, is at 155 km' },
      { key: 'time', label: 'Drive Time', value: '~4h', unit: '', note: 'Non-stop. A full day in practice, and longer if you fly over the icefields' },
      { key: 'road', label: 'Road Type', value: 'Alaska Hwy', unit: '', note: 'Paved two-lane with frost heaves and gravel-patched sections' },
    ],
    legs: [
      { from: 'Whitehorse', to: 'Haines Junction', km: 155, road: 'Alaska Highway', note: 'Services are very limited between the two — leave with a full tank' },
      { from: 'Haines Junction', to: 'Kluane Lake', km: 75, road: 'Alaska Highway', note: 'The front ranges close in and the lake appears' },
      { from: 'Kluane Lake', to: 'Destruction Bay', km: 42, road: 'Alaska Highway · lakeshore', note: 'Along the water below Sheep Mountain' },
    ],
  },

  fuel: {
    summary: 'This is the route where fuel actually matters. Fill up in Whitehorse, fill up again in Haines Junction, and treat every pump after that as the last one. Northern stations keep short hours and some close off-season — never pass one on half a tank.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'PetroOne', brand: 'PetroOne', town: 'Whitehorse', km: 0, coords: [-135.08342, 60.71272] },
    { name: 'Otter Falls Cutoff', brand: 'Otter Falls Cutoff', town: 'Haines Junction', km: 122, coords: [-137.03443, 60.85383] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Haines Junction', km: 154, coords: [-137.51711, 60.76032] },
    { name: 'Fas Gas', brand: 'Fas Gas', town: 'Destruction Bay', km: 260, coords: [-138.80492, 61.25182] },
    ],
  },

  cell: {
    note: 'Approximate. Coverage exists in Whitehorse and Haines Junction and essentially nowhere else — carry a satellite messenger.',
    segments: [
      { fromKm: 0, toKm: 20, level: 'good', label: 'Whitehorse', text: 'Full coverage in and around the city' },
      { fromKm: 20, toKm: 150, level: 'poor', label: 'Alaska Highway west', text: 'Expect nothing between the two settlements' },
      { fromKm: 150, toKm: 165, level: 'fair', label: 'Haines Junction', text: 'Coverage in the village itself' },
      { fromKm: 165, toKm: 272, level: 'poor', label: 'Kluane Lake → Destruction Bay', text: 'Nothing along the lake — this is satellite-messenger country' },
    ],
  },

  weather: {
    intro: 'The far North sets the terms here: frost heaves in summer, −40 °C in winter, and five hours of usable light in December.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June – September, with near-endless daylight in June',
          'Book flightseeing out of Haines Junction ahead — it is the only way to see the icefields',
          'Late August onward the aurora returns and there is no light pollution',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Frost heaves ripple the pavement — the orange flags mean slow down, not decorate',
          'Dall sheep on the road near Sheep Mountain; moose anywhere at dawn and dusk',
          'May and October: services along the highway may already be closed for the season',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Below about −40 °C without winter tires, a full tank and emergency gear in the car',
          'Any trip where nobody knows your route — there is no cell coverage to call from',
          'Deep winter with only five hours of daylight, unless you have northern driving experience',
        ],
      },
    ],
    links: [
      { label: 'Yukon 511 — road conditions', href: 'https://511yukon.ca' },
      { label: 'Parks Canada — Kluane', href: 'https://parks.canada.ca/pn-np/yt/kluane' },
    ],
  },

  hotels: [
    { name: 'Airport Chalet', type: 'Hotel', town: 'Whitehorse', km: 0, coords: [-135.08283, 60.71492] },
    { name: 'Edgewater Hotel', type: 'Hotel', town: 'Whitehorse', km: 0, coords: [-135.05065, 60.7197] },
    { name: 'Glacier View Inn', type: 'Motel', town: 'Haines Junction', km: 154, coords: [-137.51473, 60.75734] },
    { name: 'The Raven Hotel', type: 'Hotel', town: 'Haines Junction', km: 154, coords: [-137.51224, 60.75398] },
    { name: 'Talbot Arm Motel', type: 'Motel', town: 'Destruction Bay', km: 260, coords: [-138.80613, 61.25189] },
    { name: 'Destruction Bay Lodge', type: 'Motel', town: 'Destruction Bay', km: 260, coords: [-138.80834, 61.25344] },
  ],

  eats: [
    { name: 'Baked Cafe', type: 'Café', town: 'Whitehorse', km: 0, coords: [-135.05083, 60.72017] },
    { name: 'Sanchez Cantina', type: 'Mexican', town: 'Whitehorse', km: 0, coords: [-135.05196, 60.7168] },
    { name: 'Kluane Park Restaurant', type: 'Restaurant', town: 'Haines Junction', km: 155, coords: [-137.51023, 60.75365] },
    { name: 'Village Bakery and Deli', type: 'Café', town: 'Haines Junction', km: 155, coords: [-137.51529, 60.75331] },
  ],
};

export default WHITEHORSE_KLUANE_EXPLORER;
