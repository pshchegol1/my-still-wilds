// Данные интерактивной карты маршрута Regina → Grasslands.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './regina-grasslands.line.json';

export const REGINA_GRASSLANDS_EXPLORER = {
  line,
  provinceIso: 'CA-SK',
  from: { name: 'Regina', coords: [-104.6159, 50.448] },
  to: { name: 'Grasslands NP', coords: [-107.3701, 49.1126] },
  via: ['Moose Jaw', 'Assiniboia', 'Val Marie'],

  stops: [
    { name: 'Regina', km: 0, coords: [-104.6159, 50.448] },
    { name: 'Moose Jaw', km: 72, coords: [-105.5357, 50.3967] },
    { name: 'Assiniboia', km: 179, coords: [-105.9926, 49.6311] },
    { name: 'Val Marie', km: 355, coords: [-107.7288, 49.244] },
    { name: 'Grasslands NP', km: 400, coords: [-107.3701, 49.1126] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '400', unit: 'km', note: 'Regina to the West Block Ecotour via Moose Jaw, Assiniboia and Val Marie' },
      { key: 'time', label: 'Drive Time', value: '~6h', unit: '', note: 'Non-stop — realistically a full day with the park at the end of it' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1 → 2 → 18', unit: '', note: 'Paved to Val Marie, then gravel and clay inside the park' },
    ],
    legs: [
      { from: 'Regina', to: 'Moose Jaw', km: 72, road: 'Trans-Canada Hwy 1', note: 'The last fast, busy hour of the drive' },
      { from: 'Moose Jaw', to: 'Assiniboia', km: 107, road: 'Hwy 2 south', note: 'Off the Trans-Canada into open grain country' },
      { from: 'Assiniboia', to: 'Val Marie', km: 176, road: 'Hwy 13 → Hwy 4 → Hwy 18', note: 'Long, empty and the stretch where services disappear' },
      { from: 'Val Marie', to: 'Grasslands NP', km: 45, road: 'Ecotour road · gravel', note: 'Clay and gravel into the Frenchman River valley — avoid it wet' },
    ],
  },

  fuel: {
    summary: 'Treat Moose Jaw and Assiniboia as the real fuel stops — arrive at Assiniboia planning to fill up, not to check. Beyond it OpenStreetMap has nothing mapped all the way to the park, which is a gap in the map data rather than proof the road is empty: Val Marie is a village of a few hundred people and may well have a pump, but it will have village hours and no guarantee. There is nothing inside the park. Pins are only the stations mapped in OpenStreetMap.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Regina', km: 0, coords: [-104.61863, 50.47134] },
    { name: 'Pense Food Store Gas Bar', brand: 'Pense Food Store Gas Bar', town: 'Regina', km: 32, coords: [-104.98367, 50.41438] },
    { name: 'Tempo', brand: 'Tempo', town: 'Moose Jaw', km: 70, coords: [-105.50583, 50.41037] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Assiniboia', km: 142, coords: [-105.96492, 49.93673] },
    { name: 'Co-op', brand: 'Co-op', town: 'Assiniboia', km: 178, coords: [-106.0007, 49.63435] },
    { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Assiniboia', km: 223, coords: [-106.57384, 49.70794] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 179, level: 'good', label: 'Regina → Assiniboia', text: 'Solid along the highways and through the towns' },
      { fromKm: 179, toKm: 355, level: 'fair', label: 'South to Val Marie', text: 'Thins out badly across the open country' },
      { fromKm: 355, toKm: 400, level: 'poor', label: 'Inside the park', text: 'Effectively nothing — download maps before you leave Assiniboia' },
    ],
  },

  weather: {
    intro: 'Highways are easy; the park roads are not. Clay surfaces and open prairie wind decide whether this trip works, far more than the distance does.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'fair' }, { m: 'Aug', level: 'fair' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Late May to June, when the prairie is green and the visitor centre is open',
          'September for cooler days, no insects and the best light on the valley',
          'Any dry spell — the park roads need dry weather more than warm weather',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'July and August bring 35–40 °C afternoons with no shade anywhere',
          'Val Marie beds are few and book out in summer — reserve before driving six hours',
          'Rattlesnakes are most active in the heat of midsummer',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'The Ecotour and back roads after rain — the clay goes slick and people get stuck',
          'Winter: no park services, no visitor centre and ground blizzards on the highways',
          'Any day with a Saskatchewan Highway Hotline travel-not-recommended warning',
        ],
      },
    ],
    links: [
      { label: 'Saskatchewan Highway Hotline — road conditions', href: 'https://www.saskatchewan.ca/residents/transportation/highway-hotline' },
      { label: 'Parks Canada — Grasslands National Park', href: 'https://parks.canada.ca/pn-np/sk/grasslands' },
    ],
  },

  hotels: [
    { name: 'Knights Inn Regina', type: 'Motel', town: 'Regina', km: 0, coords: [-104.6171, 50.46256] },
    { name: 'Coachman Inn Motel', type: 'Motel', town: 'Regina', km: 0, coords: [-104.59338, 50.44683] },
  ],

  eats: [
    { name: 'Viet Thai', type: 'Thai', town: 'Regina', km: 0, coords: [-104.61845, 50.44565] },
    { name: 'Crave Kitchen + Wine Bar', type: 'Restaurant', town: 'Regina', km: 0, coords: [-104.60876, 50.44687] },
  ],
};

export default REGINA_GRASSLANDS_EXPLORER;
