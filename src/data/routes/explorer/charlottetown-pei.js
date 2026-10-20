// Данные интерактивной карты маршрута Charlottetown → PEI National Park.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './charlottetown-pei.line.json';

export const CHARLOTTETOWN_PEI_EXPLORER = {
  line,
  provinceIso: 'CA-PE',
  from: { name: 'Charlottetown', coords: [-63.1265, 46.2354] },
  to: { name: 'Cavendish', coords: [-63.3785, 46.4913] },
  via: ['Dalvay-by-the-Sea', 'Brackley Beach', 'North Rustico'],

  stops: [
    { name: 'Charlottetown', km: 0, coords: [-63.1265, 46.2354] },
    { name: 'Dalvay-by-the-Sea', km: 26, coords: [-63.0733, 46.4147] },
    { name: 'Brackley Beach', km: 38, coords: [-63.1921, 46.424] },
    { name: 'North Rustico', km: 56, coords: [-63.3131, 46.4583] },
    { name: 'Cavendish', km: 64, coords: [-63.3785, 46.4913] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '64', unit: 'km', note: 'Charlottetown to Cavendish the scenic way, along both halves of the parkway' },
      { key: 'time', label: 'Drive Time', value: '~1h20m', unit: '', note: '35 minutes if you cut straight across the island instead' },
      { key: 'road', label: 'Road Type', value: 'Route 2 → 6 → Parkway', unit: '', note: 'All paved and easy · the Gulf Shore Parkway closes for winter' },
    ],
    legs: [
      { from: 'Charlottetown', to: 'Dalvay-by-the-Sea', km: 26, road: 'Route 2 → Route 6 → Route 25', note: 'Across the middle of the island to the eastern end of the park' },
      { from: 'Dalvay-by-the-Sea', to: 'Brackley Beach', km: 12, road: 'Gulf Shore Parkway East', note: 'The coastal stretch — dunes, Covehead harbour, open water' },
      { from: 'Brackley Beach', to: 'North Rustico', km: 18, road: 'Route 6 · inland', note: 'The parkway stops; you go around Rustico Bay on the inland road' },
      { from: 'North Rustico', to: 'Cavendish', km: 8, road: 'Gulf Shore Parkway West', note: 'Red cliffs and the look-offs that survived Fiona' },
    ],
  },

  fuel: {
    summary: 'The least demanding route on this site — villages every few minutes in any direction. There is no fuel inside the park boundary itself, which is the only thing worth remembering. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Esso', brand: 'Esso', town: 'Charlottetown', km: 1, coords: [-63.10055, 46.22921] },
    { name: 'Irving', brand: 'Irving', town: 'Dalvay-by-the-Sea', km: 14, coords: [-63.01792, 46.3281] },
    { name: 'Esso', brand: 'Esso', town: 'Brackley Beach', km: 45, coords: [-63.23662, 46.3882] },
    { name: 'Irving', brand: 'Irving', town: 'North Rustico', km: 57, coords: [-63.3136, 46.45836] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Cavendish', km: 64, coords: [-63.37812, 46.49108] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 38, level: 'good', label: 'Charlottetown → Brackley', text: 'Good throughout, including on the beaches' },
      { fromKm: 38, toKm: 64, level: 'good', label: 'Rustico → Cavendish', text: 'Good along the whole north shore' },
    ],
  },

  weather: {
    intro: 'Summer here is as gentle as Canadian driving gets. Winter is the opposite: no mountains to break the wind, and whiteouts that close the island’s highways.',
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
          'July and August for warm water — the Gulf is the warmest swimming north of the Carolinas',
          'June and September for the same coast without the Cavendish crowds',
          'The whole parkway is open and beaches are supervised in the summer season',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Check the park’s alerts page: some post-Fiona closures are permanent',
          'Hurricane season runs late August into October on this coast',
          'Cavendish parking fills by late morning in midsummer',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'The Gulf Shore Parkway is closed for the winter season',
          'Island blizzards and whiteouts shut PEI highways several times each winter',
          'Storm surge days — stay off the cliff edges and the beaches entirely',
        ],
      },
    ],
    links: [
      { label: 'PEI 511 — road conditions', href: 'https://511.gov.pe.ca' },
      { label: 'Parks Canada — PEI National Park', href: 'https://parks.canada.ca/pn-np/pe/pei-ipe' },
    ],
  },

  hotels: [
    { name: 'Holman Grand Hotel', type: 'Hotel', town: 'Charlottetown', km: 0, coords: [-63.12733, 46.23518] },
    { name: 'Delta Prince Edward Hotel', type: 'Hotel', town: 'Charlottetown', km: 0, coords: [-63.12383, 46.23179] },
    { name: 'By the Bay Cottages', type: 'Hotel', town: 'Dalvay-by-the-Sea', km: 30, coords: [-63.12223, 46.41975] },
    { name: 'Shaw\'s Hotel', type: 'Hotel', town: 'Brackley Beach', km: 38, coords: [-63.1916, 46.42402] },
    { name: 'Brackley Country Inn', type: 'Hotel', town: 'Brackley Beach', km: 41, coords: [-63.18892, 46.39384] },
    { name: 'North Rustico Harbour Inn', type: 'Motel', town: 'North Rustico', km: 57, coords: [-63.31556, 46.46347] },
    { name: 'Gulfview Cottages', type: 'Motel', town: 'North Rustico', km: 57, coords: [-63.30443, 46.46861] },
    { name: 'Silverwood Motel', type: 'Motel', town: 'Cavendish', km: 64, coords: [-63.40139, 46.48618] },
    { name: 'Cavendish Motel', type: 'Motel', town: 'Cavendish', km: 64, coords: [-63.37786, 46.49196] },
  ],

  eats: [
    { name: 'Casa Mia Café', type: 'Burger', town: 'Charlottetown', km: 0, coords: [-63.12779, 46.234] },
    { name: 'Pho Vietnam', type: 'Vietnamese', town: 'Charlottetown', km: 0, coords: [-63.12763, 46.2339] },
    { name: 'Richard\'s Fresh Seafood', type: 'Seafood', town: 'Brackley Beach', km: 32, coords: [-63.14541, 46.42868] },
    { name: 'Shaw\'s Hotel', type: 'Restaurant', town: 'Brackley Beach', km: 38, coords: [-63.19154, 46.42391] },
    { name: 'New Glasgow Lobster Suppers', type: 'Restaurant', town: 'North Rustico', km: 53, coords: [-63.34581, 46.41034] },
    { name: 'Pedro\'s Island Eatery', type: 'Restaurant', town: 'North Rustico', km: 56, coords: [-63.3124, 46.45856] },
    { name: 'Butter Churn Cafe', type: 'Café', town: 'Cavendish', km: 64, coords: [-63.38232, 46.48819] },
    { name: 'Pizza Delight', type: 'Pizza', town: 'Cavendish', km: 64, coords: [-63.41099, 46.48142] },
  ],
};

export default CHARLOTTETOWN_PEI_EXPLORER;
