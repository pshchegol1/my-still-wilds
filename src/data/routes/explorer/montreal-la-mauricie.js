// Данные интерактивной карты маршрута Montréal → La Mauricie.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './montreal-la-mauricie.line.json';

export const MONTREAL_LA_MAURICIE_EXPLORER = {
  line,
  provinceIso: 'CA-QC',
  from: { name: 'Montréal', coords: [-73.5698, 45.5032] },
  to: { name: 'La Mauricie', coords: [-72.9648, 46.7829] },
  via: ['Trois-Rivières', 'Shawinigan'],

  stops: [
    { name: 'Montréal', km: 0, coords: [-73.5698, 45.5032] },
    { name: 'Trois-Rivières', km: 140, coords: [-72.5428, 46.3432] },
    { name: 'Shawinigan', km: 179, coords: [-72.7519, 46.5397] },
    { name: 'Saint-Jean-des-Piles', km: 200, coords: [-72.7408, 46.6918] },
    { name: 'La Mauricie NP', km: 225, coords: [-72.9648, 46.7829] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '225', unit: 'km', note: '182 km direct to the gate · 225 km as driven with the Trois-Rivières stop and the park road' },
      { key: 'time', label: 'Drive Time', value: '~2h30m', unit: '', note: 'To the park gate. Add about 40 min for the slow Parkway inside the park' },
      { key: 'road', label: 'Road Type', value: 'A-40 / A-55', unit: '', note: 'Divided autoroute the whole way, then a narrow paved Parkway in the park' },
    ],
    legs: [
      { from: 'Montréal', to: 'Trois-Rivières', km: 140, road: 'Autoroute 40 · divided', note: 'Straightforward highway along the Saint Lawrence' },
      { from: 'Trois-Rivières', to: 'Shawinigan', km: 39, road: 'Autoroute 55 north', note: 'Up the Saint-Maurice valley' },
      { from: 'Shawinigan', to: 'La Mauricie NP', km: 46, road: 'Route 155 → park Parkway', note: 'The in-park road is narrow and winding — slower than the distance suggests' },
    ],
  },

  fuel: {
    summary: 'Easy the whole way along the autoroute. The last pumps are at Saint-Jean-des-Piles by the gate — there is no fuel inside the park, so fill up before you drive in.',
    longestGapKm: 34,
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Montréal', km: 0, coords: [-73.58948, 45.51719] },
    { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Montréal', km: 15, coords: [-73.57511, 45.59268] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Montréal', km: 30, coords: [-73.49062, 45.72032] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Montréal', km: 56, coords: [-73.34646, 45.93294] },
    { name: 'Shell', brand: 'Shell', town: 'Trois-Rivières', km: 77, coords: [-73.19959, 46.08986] },
    { name: 'Esso', brand: 'Esso', town: 'Trois-Rivières', km: 97, coords: [-73.00331, 46.19605] },
    { name: 'Shell', brand: 'Shell', town: 'Trois-Rivières', km: 128, coords: [-72.64533, 46.30511] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Trois-Rivières', km: 143, coords: [-72.57741, 46.33472] },
    { name: 'Esso', brand: 'Esso', town: 'Shawinigan', km: 174, coords: [-72.79401, 46.52925] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Saint-Jean-des-Piles', km: 191, coords: [-72.70413, 46.62263] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps. Coverage ends roughly where the park begins.',
    segments: [
      { fromKm: 0, toKm: 179, level: 'good', label: 'Montréal → Shawinigan', text: 'Full coverage along Autoroute 40 and 55' },
      { fromKm: 179, toKm: 200, level: 'fair', label: 'Shawinigan → the park gate', text: 'Thinning out as the valley narrows' },
      { fromKm: 200, toKm: 225, level: 'poor', label: 'Inside the park', text: 'Unreliable to absent through most of the interior' },
    ],
  },

  weather: {
    intro: 'The road is the easy part here. The season you pick decides the trip — and in June that means black flies.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'fair' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'August and September: the flies are gone and the lakes are still warm',
          'October for colour, though services start closing',
          'Reserve canoe routes and backcountry sites well ahead for summer weekends',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Late May to early July: black flies decide whether you enjoy being outside',
          'Moose on the Parkway at dawn and dusk — long blind curves',
          'April and November: the Parkway may be closed or partly open only',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'The park Parkway is closed to cars in winter — access is on skis or snowshoes from the entrances',
          'Freezing rain on Autoroute 40, which Québec gets several times each winter',
        ],
      },
    ],
    links: [
      { label: 'Québec 511 — road conditions', href: 'https://www.quebec511.info' },
      { label: 'Parks Canada — La Mauricie', href: 'https://parks.canada.ca/pn-np/qc/mauricie' },
    ],
  },

  hotels: [
    { name: 'Ritz Carlton', type: 'Hotel', town: 'Montréal', km: 0, coords: [-73.57792, 45.50009] },
    { name: 'Le Centre Sheraton', type: 'Hotel', town: 'Montréal', km: 0, coords: [-73.57154, 45.49803] },
    { name: 'Holiday Inn Express & Suites Trois-Rivieres', type: 'Hotel', town: 'Trois-Rivières', km: 135, coords: [-72.58342, 46.3188] },
    { name: 'Comfort Inn', type: 'Hotel', town: 'Trois-Rivières', km: 145, coords: [-72.59488, 46.32831] },
    { name: 'La vieille caisse', type: 'Hotel', town: 'Shawinigan', km: 164, coords: [-72.77383, 46.44049] },
    { name: 'Hôtel Énergie Shawinigan', type: 'Hotel', town: 'Shawinigan', km: 179, coords: [-72.75459, 46.54097] },
  ],

  eats: [
    { name: 'Noodles Star', type: 'Chinese', town: 'Montréal', km: 0, coords: [-73.58042, 45.49307] },
    { name: '3 Brasseurs', type: 'Burger', town: 'Montréal', km: 0, coords: [-73.57549, 45.49719] },
    { name: 'Tim Hortons', type: 'Café', town: 'Trois-Rivières', km: 134, coords: [-72.60305, 46.33044] },
    { name: 'Le Caféier', type: 'Café', town: 'Trois-Rivières', km: 135, coords: [-72.60503, 46.32041] },
    { name: 'Restaurant Les Beaux-Frères', type: 'Burger', town: 'Shawinigan', km: 164, coords: [-72.77932, 46.44398] },
    { name: 'Café Mandala', type: 'Café', town: 'Shawinigan', km: 164, coords: [-72.77293, 46.44017] },
  ],
};

export default MONTREAL_LA_MAURICIE_EXPLORER;
