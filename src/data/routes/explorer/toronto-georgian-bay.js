// Данные интерактивной карты маршрута Toronto → Georgian Bay Islands.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './toronto-georgian-bay.line.json';

export const TORONTO_GEORGIAN_BAY_EXPLORER = {
  line,
  provinceIso: 'CA-ON',
  from: { name: 'Toronto', coords: [-79.3839, 43.6535] },
  to: { name: 'Honey Harbour', coords: [-79.8116, 44.874] },
  via: ['Barrie', 'Midland'],

  stops: [
    { name: 'Toronto', km: 0, coords: [-79.3839, 43.6535] },
    { name: 'Barrie', km: 95, coords: [-79.6901, 44.3893] },
    { name: 'Midland', km: 148, coords: [-79.8857, 44.7501] },
    { name: 'Honey Harbour', km: 189, coords: [-79.8116, 44.874] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '189', unit: 'km', note: 'Toronto to the Parks Canada dock at Honey Harbour' },
      { key: 'time', label: 'Drive Time', value: '~3h', unit: '', note: 'Summer Friday traffic northbound can add an hour or more' },
      { key: 'road', label: 'Road Type', value: 'Hwy 400', unit: '', note: 'Four-lane highway north, then Muskoka Road 5 to the dock' },
    ],
    legs: [
      { from: 'Toronto', to: 'Barrie', km: 95, road: 'Hwy 400', note: 'The cottage-country corridor — where the traffic lives' },
      { from: 'Barrie', to: 'Midland', km: 53, road: 'Hwy 400 → Hwy 93', note: 'Off the main highway toward Georgian Bay' },
      { from: 'Midland', to: 'Honey Harbour', km: 41, road: 'Hwy 400 → Muskoka Rd 5', note: 'Onto the Shield — granite, pine and the end of the road' },
    ],
  },

  fuel: {
    summary: 'Never an issue: Hwy 400 is lined with service centres and Port Severn is minutes from the dock. Worth noting there is no fuel on the islands themselves. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Toronto', km: 0, coords: [-79.39431, 43.6447] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Toronto', km: 21, coords: [-79.49927, 43.76085] },
    { name: 'Esso', brand: 'Esso', town: 'Barrie', km: 49, coords: [-79.57382, 44.00514] },
    { name: 'Shell', brand: 'Shell', town: 'Barrie', km: 82, coords: [-79.67269, 44.28586] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Barrie', km: 102, coords: [-79.62222, 44.44204] },
    { name: 'Waverley Service Centre', brand: 'Waverley Service Centre', town: 'Midland', km: 132, coords: [-79.82405, 44.64352] },
    { name: 'Esso', brand: 'Esso', town: 'Midland', km: 152, coords: [-79.86209, 44.74145] },
    { name: 'Picnic Island Resort', brand: 'Picnic Island Resort', town: 'Honey Harbour', km: 188, coords: [-79.82705, 44.86372] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 148, level: 'good', label: 'Toronto → Midland', text: 'Solid along Hwy 400' },
      { fromKm: 148, toKm: 189, level: 'good', label: 'Into Honey Harbour', text: 'Good to the dock; patchier out on the islands' },
    ],
  },

  weather: {
    intro: 'The drive is easy nine months of the year. What governs this trip is the boat season and, in winter, the snow squalls that roll off Georgian Bay onto Hwy 400.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Late May to early October, while the DayTripper boat is running',
          'September for warm water, open trails and far less traffic',
          'Midweek any time — the highway is a different road without cottage traffic',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Friday northbound and Sunday southbound in summer are the worst traffic in Ontario',
          'Georgian Bay weather turns fast — check the marine forecast, not the land one',
          'Shoulder season means reduced boat service; confirm before driving up',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Squall season: lake-effect whiteouts close Hwy 400 most winters',
          'The park boat service does not run outside roughly May to October',
          'Never cross open water in a small boat with a wind warning posted',
        ],
      },
    ],
    links: [
      { label: 'Ontario 511 — road conditions', href: 'https://511on.ca' },
      { label: 'Parks Canada — Georgian Bay Islands', href: 'https://parks.canada.ca/pn-np/on/georg' },
    ],
  },

  hotels: [
    { name: 'Marriott City Centre', type: 'Hotel', town: 'Toronto', km: 0, coords: [-79.38995, 43.64234] },
    { name: 'Hotel Victoria', type: 'Hotel', town: 'Toronto', km: 0, coords: [-79.37767, 43.64819] },
    { name: 'Holiday Inn Express & Suites Barrie', type: 'Hotel', town: 'Barrie', km: 87, coords: [-79.6902, 44.33197] },
    { name: 'Super 8', type: 'Motel', town: 'Barrie', km: 87, coords: [-79.68983, 44.33591] },
    { name: 'Comfort Inn', type: 'Hotel', town: 'Midland', km: 145, coords: [-79.86929, 44.73014] },
    { name: 'Quality Inn & Conference Centre', type: 'Hotel', town: 'Midland', km: 145, coords: [-79.87119, 44.73115] },
  ],

  eats: [
    { name: 'Nord Lyon Cafe', type: 'Café', town: 'Toronto', km: 0, coords: [-79.39095, 43.65002] },
    { name: 'Drom Taberna', type: 'Restaurant', town: 'Toronto', km: 0, coords: [-79.39956, 43.64821] },
    { name: 'St. Louis Bar & Grill', type: 'Chicken', town: 'Barrie', km: 61, coords: [-79.59759, 44.10727] },
    { name: 'Daybreak', type: 'Restaurant', town: 'Barrie', km: 61, coords: [-79.5982, 44.10789] },
    { name: 'Tim Hortons', type: 'Café', town: 'Midland', km: 143, coords: [-79.90804, 44.73759] },
    { name: 'Stacked Pancake & Breakfast House', type: 'Breakfast', town: 'Midland', km: 145, coords: [-79.87409, 44.7305] },
    { name: 'Fin City Fish & Chips Restaurant', type: 'Fish And Chips', town: 'Honey Harbour', km: 184, coords: [-79.77926, 44.86668] },
    { name: 'Thrive Foods Café', type: 'Café', town: 'Honey Harbour', km: 188, coords: [-79.82186, 44.86884] },
  ],
};

export default TORONTO_GEORGIAN_BAY_EXPLORER;
