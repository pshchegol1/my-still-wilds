// Данные интерактивной карты маршрута Winnipeg → Riding Mountain.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './winnipeg-riding-mountain.line.json';

export const WINNIPEG_RIDING_MOUNTAIN_EXPLORER = {
  line,
  provinceIso: 'CA-MB',
  from: { name: 'Winnipeg', coords: [-97.1385, 49.8955] },
  to: { name: 'Wasagaming', coords: [-99.9719, 50.6578] },
  via: ['Portage la Prairie', 'Neepawa'],

  stops: [
    { name: 'Winnipeg', km: 0, coords: [-97.1385, 49.8955] },
    { name: 'Portage la Prairie', km: 85, coords: [-98.2892, 49.9724] },
    { name: 'Neepawa', km: 185, coords: [-99.4664, 50.2284] },
    { name: 'Onanole', km: 261, coords: [-99.969, 50.6236] },
    { name: 'Wasagaming', km: 266, coords: [-99.9719, 50.6578] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '266', unit: 'km', note: 'Winnipeg to the Wasagaming townsite via Portage la Prairie and Neepawa' },
      { key: 'time', label: 'Drive Time', value: '~3h40m', unit: '', note: 'Non-stop. An easy half-day with a stop in Neepawa' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 / 16 / 10', unit: '', note: 'Trans-Canada, then the Yellowhead and Hwy 10 north — flat and straight' },
    ],
    legs: [
      { from: 'Winnipeg', to: 'Portage la Prairie', km: 85, road: 'Trans-Canada Hwy 1', note: 'As flat as Canada gets — divided highway the whole way' },
      { from: 'Portage la Prairie', to: 'Neepawa', km: 100, road: 'Hwy 16 · Yellowhead', note: 'Northwest across the wheat country' },
      { from: 'Neepawa', to: 'Wasagaming', km: 81, road: 'Hwy 5 → Hwy 10', note: 'The escarpment finally rises out of the plain' },
    ],
  },

  fuel: {
    summary: 'Easy the whole way — Portage la Prairie and Neepawa both have full services, and there are more stations along Hwy 16 than are mapped here. Fill up in Onanole or Wasagaming before heading deeper into the park.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Shell', brand: 'Shell', town: 'Winnipeg', km: 0, coords: [-97.13551, 49.92182] },
    { name: 'Husky', brand: 'Husky', town: 'Winnipeg', km: 13, coords: [-97.31578, 49.88197] },
    { name: 'Homestead Co-op', brand: 'Homestead Co-op', town: 'Portage la Prairie', km: 63, coords: [-98.00278, 49.92939] },
    { name: 'Petro-Pass', brand: 'Petro-Pass', town: 'Neepawa', km: 184, coords: [-99.47907, 50.22589] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 185, level: 'good', label: 'Winnipeg → Neepawa', text: 'Reliable across the prairie' },
      { fromKm: 185, toKm: 261, level: 'fair', label: 'Neepawa → the escarpment', text: 'Thinner as the highway climbs into the parkland' },
      { fromKm: 261, toKm: 266, level: 'poor', label: 'Inside the park', text: 'Patchy, and worse on the north side and at Lake Audy' },
    ],
  },

  weather: {
    intro: 'Summer here is easy driving. Winter is about wind, not snowfall — ground blizzards close prairie highways on clear days.',
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
          'May – September, with long prairie daylight',
          'September is quieter and the mosquitoes have eased off',
          'Clear nights: the park is a Dark Sky Preserve',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Late June to August: mosquitoes around the lakes are a genuine factor',
          'Elk and moose on Hwy 10 inside the park at dawn and dusk',
          'Spring melt can flood low spots on the secondary roads',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Ground blizzard or blowing-snow warning — Manitoba closes Hwy 1 and 16 for this',
          'Freezing rain across the open prairie, where there is no shelter and no detour',
          'Whiteout conditions: pulling over on a prairie highway is its own hazard',
        ],
      },
    ],
    links: [
      { label: 'Manitoba 511 — road conditions', href: 'https://www.manitoba511.ca' },
      { label: 'Parks Canada — Riding Mountain', href: 'https://parks.canada.ca/pn-np/mb/riding' },
    ],
  },

  hotels: [
    { name: 'Mariaggi’s Theme Suite Hotel & Spa', type: 'Hotel', town: 'Winnipeg', km: 0, coords: [-97.14059, 49.89725] },
    { name: 'New Lodge Winnipeg', type: 'Hotel', town: 'Winnipeg', km: 1, coords: [-97.15998, 49.90134] },
    { name: 'Elkhorn Resort', type: 'Hotel', town: 'Wasagaming', km: 265, coords: [-99.96015, 50.65119] },
    { name: 'Arrowhead Resort', type: 'Hotel', town: 'Wasagaming', km: 265, coords: [-99.97222, 50.65549] },
  ],

  eats: [
    { name: 'Sam\'s Place', type: 'Café', town: 'Winnipeg', km: 0, coords: [-97.13653, 49.89741] },
    { name: 'The Old Spaghetti Factory', type: 'Italian', town: 'Winnipeg', km: 0, coords: [-97.12966, 49.8869] },
    { name: 'Prairie Donair', type: 'Restaurant', town: 'Portage la Prairie', km: 84, coords: [-98.28511, 49.97321] },
    { name: 'Over the Coals', type: 'Greek', town: 'Portage la Prairie', km: 84, coords: [-98.28657, 49.97307] },
    { name: 'Paris Cafe', type: 'Chinese', town: 'Neepawa', km: 148, coords: [-98.95095, 50.22624] },
    { name: 'Tim Hortons', type: 'Café', town: 'Neepawa', km: 148, coords: [-98.95202, 50.22609] },
    { name: 'T.R. McKoy\'s', type: 'Restaurant', town: 'Wasagaming', km: 265, coords: [-99.97282, 50.65584] },
    { name: 'Aristocrat Pizza', type: 'Pizza', town: 'Wasagaming', km: 265, coords: [-99.9715, 50.65716] },
  ],
};

export default WINNIPEG_RIDING_MOUNTAIN_EXPLORER;
