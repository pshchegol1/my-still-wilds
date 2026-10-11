// Данные интерактивной карты маршрута Moncton → Bay of Fundy.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './moncton-fundy.line.json';

export const MONCTON_FUNDY_EXPLORER = {
  line,
  provinceIso: 'CA-NB',
  from: { name: 'Moncton', coords: [-64.8004, 46.0986] },
  to: { name: 'Fundy NP', coords: [-65.0449, 45.6172] },
  via: ['Hopewell Rocks', 'Alma'],

  stops: [
    { name: 'Moncton', km: 0, coords: [-64.8004, 46.0986] },
    { name: 'Hopewell Rocks', km: 40, coords: [-64.5783, 45.8178] },
    { name: 'Alma', km: 83, coords: [-64.9438, 45.6031] },
    { name: 'Fundy NP', km: 94, coords: [-65.0449, 45.6172] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '94', unit: 'km', note: 'Moncton to the Fundy park gate via Hopewell Rocks and Alma' },
      { key: 'time', label: 'Drive Time', value: '~1h40m', unit: '', note: 'Driving only — plan the day around the tide table, not the clock' },
      { key: 'road', label: 'Road Type', value: 'Route 114', unit: '', note: 'Two-lane paved the whole way, winding through the Caledonia Hills' },
    ],
    legs: [
      { from: 'Moncton', to: 'Hopewell Rocks', km: 40, road: 'Route 114', note: 'Out along the Petitcodiac, which has its own tidal bore' },
      { from: 'Hopewell Rocks', to: 'Alma', km: 43, road: 'Route 114 · hills', note: 'Winding inland over the Caledonia Hills to the coast again' },
      { from: 'Alma', to: 'Fundy NP', km: 11, road: 'Route 114 · park gate', note: 'Straight into the park from the village' },
    ],
  },

  fuel: {
    summary: 'Short enough that fuel is rarely the problem — fill up in Moncton and you are fine. Alma is the last village before the park and it is small, so top up there if you are low. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Irving', brand: 'Irving', town: 'Moncton', km: 0, coords: [-64.78405, 46.11662] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Moncton', km: 13, coords: [-64.71123, 46.02285] },
    { name: 'Irving', brand: 'Irving', town: 'Hopewell Rocks', km: 27, coords: [-64.63781, 45.91191] },
    { name: 'Coast Gas', brand: 'Coast Gas', town: 'Hopewell Rocks', km: 56, coords: [-64.72727, 45.75281] },
    { name: 'Gulf', brand: 'Gulf', town: 'Alma', km: 84, coords: [-64.9461, 45.60088] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 40, level: 'good', label: 'Moncton → Hopewell Rocks', text: 'Solid along Route 114' },
      { fromKm: 40, toKm: 83, level: 'fair', label: 'Over the Caledonia Hills', text: 'Drops in the valleys between the two coasts' },
      { fromKm: 83, toKm: 94, level: 'poor', label: 'Alma & the park', text: 'Patchy on the ocean floor and in the park’s wooded valleys' },
    ],
  },

  weather: {
    intro: 'The road here is easy. The tide is what you plan around — and fog off the bay is the one thing that can spoil the view.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'May – October, when the Hopewell Rocks ocean floor is open',
          'Check the day’s low-tide window first and build everything else around it',
          'The same ticket lets you come back at high tide — worth doing',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Sea fog can sit on the bay for days, especially early summer',
          'Route 114 through the hills is winding and dark at night',
          'Moose and deer along the inland stretch at dawn and dusk',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'The ocean floor at Hopewell closes for the winter season regardless of weather',
          'Freezing rain on Route 114 — it is hilly, two-lane and lightly travelled',
          'Never stay below the rocks past the posted window, whatever the weather is doing',
        ],
      },
    ],
    links: [
      { label: 'New Brunswick 511 — road conditions', href: 'https://511.gnb.ca' },
      { label: 'Parks Canada — Fundy National Park', href: 'https://parks.canada.ca/pn-np/nb/fundy' },
    ],
  },

  hotels: [
    { name: 'Delta Beausejour', type: 'Hotel', town: 'Moncton', km: 2, coords: [-64.77664, 46.08814] },
    { name: 'Residence Inn', type: 'Hotel', town: 'Moncton', km: 2, coords: [-64.77378, 46.08931] },
    { name: 'Bayview Chalets & Motel', type: 'Motel', town: 'Alma', km: 82, coords: [-64.93811, 45.60954] },
  ],

  eats: [
    { name: 'Sun Sun Chinese', type: 'Chinese', town: 'Moncton', km: 0, coords: [-64.81611, 46.10306] },
    { name: 'Jungle Jim\'s Eatery', type: 'American', town: 'Moncton', km: 0, coords: [-64.82334, 46.10607] },
    { name: 'Rocco\'s Cucina', type: 'Restaurant', town: 'Hopewell Rocks', km: 25, coords: [-64.64806, 45.92619] },
    { name: 'The Railway Diner', type: 'Burger', town: 'Hopewell Rocks', km: 25, coords: [-64.64797, 45.927] },
  ],
};

export default MONCTON_FUNDY_EXPLORER;
