// Данные интерактивной карты маршрута Yellowknife → Wood Buffalo.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './yellowknife-wood-buffalo.line.json';

export const YELLOWKNIFE_WOOD_BUFFALO_EXPLORER = {
  line,
  provinceIso: 'CA-NT',
  from: { name: 'Yellowknife', coords: [-114.3774, 62.4541] },
  to: { name: 'Fort Smith', coords: [-111.8903, 60.0059] },
  via: ['Fort Providence', 'Hay River'],

  stops: [
    { name: 'Yellowknife', km: 0, coords: [-114.3774, 62.4541] },
    { name: 'Fort Providence', km: 316, coords: [-117.65, 61.3667] },
    { name: 'Hay River', km: 495, coords: [-115.7866, 60.8156] },
    { name: 'Fort Smith', km: 769, coords: [-111.8903, 60.0059] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '769', unit: 'km', note: 'Yellowknife to Fort Smith via the Deh Cho Bridge and Hay River' },
      { key: 'time', label: 'Drive Time', value: '~12h', unit: '', note: 'Non-stop — a two-day trip in practice' },
      { key: 'road', label: 'Road Type', value: 'Hwy 3 → 1 → 2 → 5', unit: '', note: 'Chipseal and pavement, with the final leg slow for its length' },
    ],
    legs: [
      { from: 'Yellowknife', to: 'Fort Providence', km: 316, road: 'Hwy 3', note: 'Southwest across the Shield — bison use this road' },
      { from: 'Fort Providence', to: 'Hay River', km: 179, road: 'Hwy 1 → Hwy 2', note: 'Over the Deh Cho Bridge across the Mackenzie, then south' },
      { from: 'Hay River', to: 'Fort Smith', km: 274, road: 'Hwy 5 · no cell coverage', note: 'Through the park — slow going, and no signal for the whole leg' },
    ],
  },

  fuel: {
    summary: 'Northern rules. Yellowknife, Fort Providence, Enterprise and Hay River are the stations you plan around, and you never pass an open one on half a tank. Nothing between Hay River and Fort Smith. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Yellowknife', km: 0, coords: [-114.40247, 62.45259] },
    { name: 'Northern', brand: 'Northern', town: 'Fort Providence', km: 314, coords: [-117.65216, 61.35219] },
    { name: 'Twin Falls Motel', brand: 'Twin Falls Motel', town: 'Hay River', km: 457, coords: [-116.1426, 60.5579] },
    { name: 'Shell', brand: 'Shell', town: 'Hay River', km: 495, coords: [-115.78349, 60.81775] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Fort Smith', km: 764, coords: [-111.92502, 60.01213] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 316, level: 'fair', label: 'Yellowknife → Fort Providence', text: 'Around the towns only; long gaps between' },
      { fromKm: 316, toKm: 495, level: 'fair', label: 'Deh Cho Bridge → Hay River', text: 'Comes back in the communities along Hwy 1 and 2' },
      { fromKm: 495, toKm: 769, level: 'poor', label: 'Highway 5 to Fort Smith', text: 'No cellular coverage at all — carry a satellite messenger' },
    ],
  },

  weather: {
    intro: 'Open year-round and properly northern. The cold here is not an inconvenience — on a road with no signal and little traffic, it is the main hazard.',
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
          'May to September, when the roads are clear and park services run',
          'Late August onward for aurora with genuinely dark skies',
          'September for cool days after the insects have gone',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Bison on Highways 3 and 5 at any hour — this is the most likely incident',
          'Mosquitoes and blackflies around the delta are severe in June and July',
          'Wildfire smoke and road closures are a real summer risk in the North',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Deep winter cold snaps below −40 °C with no cell coverage on Hwy 5',
          'Blizzards and whiteouts on the open stretches of Hwy 3',
          'Any trip on this route without a full tank, warm gear and someone who knows your plan',
        ],
      },
    ],
    links: [
      { label: 'NWT Highway Conditions', href: 'https://www.inf.gov.nt.ca/en/highways' },
      { label: 'Parks Canada — Wood Buffalo', href: 'https://parks.canada.ca/pn-np/nt/woodbuffalo' },
    ],
  },

  hotels: [
    { name: 'Discovery Inn', type: 'Hotel', town: 'Yellowknife', km: 0, coords: [-114.36822, 62.45529] },
    { name: '6217 finlayson airbnb', type: 'Motel', town: 'Yellowknife', km: 0, coords: [-114.41599, 62.44421] },
    { name: 'Snowshoe Inn', type: 'Motel', town: 'Fort Providence', km: 314, coords: [-117.65016, 61.35119] },
    { name: 'Wood Buffalo Inn', type: 'Hotel', town: 'Fort Smith', km: 767, coords: [-111.88435, 60.00624] },
    { name: 'The Pelican Rapids Inn', type: 'Hotel', town: 'Fort Smith', km: 767, coords: [-111.87852, 60.00519] },
  ],

  eats: [
    { name: 'Coyote\'s Family Steakhouse', type: 'Steak House', town: 'Yellowknife', km: 0, coords: [-114.40952, 62.44565] },
    { name: 'Trek', type: 'Comfort Food', town: 'Yellowknife', km: 0, coords: [-114.36429, 62.45675] },
    { name: 'Yuki Restaurant', type: 'Restaurant', town: 'Hay River', km: 494, coords: [-115.79008, 60.80751] },
    { name: 'Back Eddy', type: 'Regional', town: 'Hay River', km: 495, coords: [-115.78726, 60.80905] },
    { name: 'Tim Hortons', type: 'Café', town: 'Fort Smith', km: 764, coords: [-111.92505, 60.01204] },
    { name: 'Berro\'s Pizza', type: 'Pizza', town: 'Fort Smith', km: 767, coords: [-111.88584, 60.00626] },
  ],
};

export default YELLOWKNIFE_WOOD_BUFFALO_EXPLORER;
