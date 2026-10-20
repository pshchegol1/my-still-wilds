// Данные интерактивной карты маршрута Jasper → Elk Island.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './jasper-elk-island.line.json';

export const JASPER_ELK_ISLAND_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Jasper', coords: [-118.08243, 52.87523] },
  to: { name: 'Elk Island NP', coords: [-112.87728, 53.61137] },
  via: ['Hinton', 'Edson', 'Edmonton'],

  stops: [
    { name: 'Jasper', km: 0, coords: [-118.08243, 52.87523] },
    { name: 'Hinton', km: 77, coords: [-117.58868, 53.39905] },
    { name: 'Edson', km: 165, coords: [-116.44285, 53.58587] },
    { name: 'Edmonton', km: 366, coords: [-113.49124, 53.54621] },
    { name: 'Elk Island NP', km: 420, coords: [-112.87728, 53.61137] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '420', unit: 'km', note: 'Jasper to Elk Island on Hwy 16 via Edmonton' },
      { key: 'time', label: 'Drive Time', value: '~5h35m', unit: '', note: 'Non-stop — one highway nearly the whole way' },
      { key: 'road', label: 'Road Type', value: 'Hwy 16', unit: '', note: 'Two-lane in the west, divided in the east' },
    ],
    legs: [
      { from: 'Jasper', to: 'Hinton', km: 77, road: 'Hwy 16 · park gate', note: 'Out of the park and down the Athabasca' },
      { from: 'Hinton', to: 'Edson', km: 88, road: 'Hwy 16', note: 'Coal and forestry country' },
      { from: 'Edson', to: 'Edmonton', km: 201, road: 'Hwy 16 · Yellowhead', note: 'Into farmland and the city' },
      { from: 'Edmonton', to: 'Elk Island NP', km: 54, road: 'Hwy 16 east', note: 'Out the other side to the park gate' },
    ],
  },

  fuel: {
    summary: 'Not something to plan around: the corridor is well served and there is no fuel inside the park itself. Pins are the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 0, coords: [-118.08198, 52.87382] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Hinton', km: 75, coords: [-117.6146, 53.38807] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 350, coords: [-113.68755, 53.56614] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Edmonton', km: 362, coords: [-113.53545, 53.55932] },
    { name: 'Shell', brand: 'Shell', town: 'Edmonton', km: 374, coords: [-113.42061, 53.60128] },
    { name: 'Gas Plus', brand: 'Gas Plus', town: 'Elk Island NP', km: 401, coords: [-113.00616, 53.57093] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 77, level: 'fair', label: 'Jasper → Hinton', text: 'Drops inside the park, returns at Hinton' },
      { fromKm: 77, toKm: 420, level: 'good', label: 'Hinton → Elk Island', text: 'Good along Hwy 16 the rest of the way' },
    ],
  },

  weather: {
    intro: 'Easy driving in every season. What the season changes is what you see — bison stand out against snow, and summer brings the mosquitoes.',
    months: [
      { m: 'Jan', level: 'fair' }, { m: 'Feb', level: 'fair' }, { m: 'Mar', level: 'good' },
      { m: 'Apr', level: 'good' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'fair' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Year-round — the park never closes and the highways are always ploughed',
          'September and October for the aspen turning and no insects',
          'Clear winter nights for the Beaver Hills Dark Sky Preserve',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Mosquitoes are serious on the trails in July',
          'Aurora nights draw crowds; some areas have been closed after overuse',
          'Deep cold snaps make a roadside stop unpleasant fast',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Prairie blizzards close the QEII and Hwy 16 a few times each winter',
          'Never leave your vehicle when bison are on the parkway, in any weather',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Elk Island National Park', href: 'https://parks.canada.ca/pn-np/ab/elkisland' },
    ],
  },

  hotels: [
    { name: 'Astoria Hotel', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.0796, 52.87869] },
    { name: 'Athabasca Hotel', type: 'Hotel', town: 'Jasper', km: 0, coords: [-118.08169, 52.87661] },
    { name: 'Miette Mountain Cabins', type: 'Hotel', town: 'Hinton', km: 43, coords: [-117.92717, 53.20525] },
    { name: 'Holiday Inn Express', type: 'Hotel', town: 'Edmonton', km: 354, coords: [-113.61653, 53.56216] },
    { name: 'Residence Inn by Marriott Edmonton West', type: 'Hotel', town: 'Edmonton', km: 354, coords: [-113.61228, 53.55528] },
  ],

  eats: [
    { name: 'Coco\'s Café', type: 'Café', town: 'Jasper', km: 0, coords: [-118.08207, 52.87537] },
    { name: 'Lou Lou\'s', type: 'Italian', town: 'Jasper', km: 0, coords: [-118.0805, 52.87849] },
    { name: 'Jumbo Dim Sum & Dining', type: 'Restaurant', town: 'Edmonton', km: 354, coords: [-113.61417, 53.54839] },
    { name: 'Sushi Garden', type: 'Sushi', town: 'Edmonton', km: 354, coords: [-113.61187, 53.54624] },
  ],
};

export default JASPER_ELK_ISLAND_EXPLORER;
