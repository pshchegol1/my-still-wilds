// Данные интерактивной карты маршрута Québec City → Mingan.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './quebec-city-mingan.line.json';

export const QUEBEC_CITY_MINGAN_EXPLORER = {
  line,
  provinceIso: 'CA-QC',
  from: { name: 'Québec City', coords: [-71.2084, 46.8137] },
  to: { name: 'Havre-Saint-Pierre', coords: [-63.6004, 50.2464] },
  via: ['Tadoussac', 'Baie-Comeau', 'Sept-Îles'],

  stops: [
    { name: 'Québec City', km: 0, coords: [-71.2084, 46.8137] },
    { name: 'Tadoussac', km: 215, coords: [-69.7175, 48.1433] },
    { name: 'Baie-Comeau', km: 413, coords: [-68.1801, 49.2118] },
    { name: 'Sept-Îles', km: 646, coords: [-66.3791, 50.211] },
    { name: 'Havre-Saint-Pierre', km: 865, coords: [-63.6004, 50.2464] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '865', unit: 'km', note: 'Québec City to Havre-Saint-Pierre along the north shore' },
      { key: 'time', label: 'Drive Time', value: '~12h', unit: '', note: 'Non-stop — a two-day drive at minimum' },
      { key: 'road', label: 'Road Type', value: 'Route 138', unit: '', note: 'The only road along this coast, two-lane the whole way' },
    ],
    legs: [
      { from: 'Québec City', to: 'Tadoussac', km: 215, road: 'Route 138', note: 'Along the north shore to the mouth of the Saguenay' },
      { from: 'Tadoussac', to: 'Baie-Comeau', km: 198, road: 'Route 138', note: 'Forest and river, with the villages spacing out' },
      { from: 'Baie-Comeau', to: 'Sept-Îles', km: 233, road: 'Route 138', note: 'Long, quiet and increasingly remote' },
      { from: 'Sept-Îles', to: 'Havre-Saint-Pierre', km: 219, road: 'Route 138 · final stretch', note: 'The thinnest section for services — fill up before you start it' },
    ],
  },

  fuel: {
    summary: 'Fine as far as Sept-Îles. The 219 km from there to Havre-Saint-Pierre is the stretch to respect: few communities, and no alternative road if anything goes wrong. Fill up in Sept-Îles whatever the gauge reads. The long blank between Baie-Comeau and Sept-Îles on the map is a hole in OpenStreetMap rather than a real void — Port-Cartier and the villages along the way have fuel. Pins are only what is mapped.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Québec City', km: 0, coords: [-71.20256, 46.81657] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Québec City', km: 38, coords: [-70.89757, 47.0425] },
    { name: 'Shell', brand: 'Shell', town: 'Québec City', km: 102, coords: [-70.51538, 47.52312] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Tadoussac', km: 141, coords: [-70.15551, 47.65949] },
    { name: 'Sonic', brand: 'Sonic', town: 'Tadoussac', km: 221, coords: [-69.6979, 48.1881] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Tadoussac', km: 257, coords: [-69.38969, 48.3695] },
    { name: 'Esso', brand: 'Esso', town: 'Tadoussac', km: 299, coords: [-69.10362, 48.63026] },
    { name: 'Sonerco', brand: 'Sonerco', town: 'Baie-Comeau', km: 359, coords: [-68.63777, 48.93836] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Baie-Comeau', km: 399, coords: [-68.33834, 49.17693] },
    { name: 'Irving', brand: 'Irving', town: 'Sept-Îles', km: 637, coords: [-66.41548, 50.2726] },
    { name: 'Shell', brand: 'Shell', town: 'Havre-Saint-Pierre', km: 863, coords: [-63.60779, 50.23854] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 215, level: 'good', label: 'Québec City → Tadoussac', text: 'Solid along the populated shore' },
      { fromKm: 215, toKm: 646, level: 'fair', label: 'Tadoussac → Sept-Îles', text: 'In the towns, long dead stretches between them' },
      { fromKm: 646, toKm: 865, level: 'poor', label: 'The final stretch', text: 'Very little, and nothing out on the water' },
    ],
  },

  weather: {
    intro: 'One road, and a long way from anywhere. Weather here decides not just the driving but whether the island boats sail at all.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'nogo' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'caution' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'fair' },
      { m: 'Oct', level: 'caution' }, { m: 'Nov', level: 'nogo' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Mid-June to early September, the park’s operating season',
          'Late June to August for the puffin colonies off Longue-Pointe',
          'Combine it with whale watching at Tadoussac on the way up',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Route 138 is the only road — a closure means waiting, not detouring',
          'Boat crossings cancel for wind and fog; keep a spare day',
          'Moose and black bear along the whole north shore at dawn and dusk',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter: the park is closed and Route 138 shuts in storms with no alternative',
          'Any day with a marine wind warning if the island trip is the point of the drive',
        ],
      },
    ],
    links: [
      { label: 'Québec 511 — road conditions', href: 'https://www.quebec511.info' },
      { label: 'Parks Canada — Mingan Archipelago', href: 'https://parks.canada.ca/pn-np/qc/mingan' },
    ],
  },

  hotels: [
    { name: 'Auberge du Trésor', type: 'Hotel', town: 'Québec City', km: 0, coords: [-71.2061, 46.81309] },
    { name: 'Hôtel Belley', type: 'Hotel', town: 'Québec City', km: 0, coords: [-71.20973, 46.8169] },
  ],

  eats: [
    { name: 'Bistro 1640', type: 'Restaurant', town: 'Québec City', km: 0, coords: [-71.20585, 46.81308] },
    { name: 'Aux Anciens Canadiens', type: 'Restaurant', town: 'Québec City', km: 0, coords: [-71.20743, 46.81169] },
    { name: 'Le Bidou', type: 'Restaurant', town: 'Baie-Comeau', km: 359, coords: [-68.64368, 48.94352] },
  ],
};

export default QUEBEC_CITY_MINGAN_EXPLORER;
