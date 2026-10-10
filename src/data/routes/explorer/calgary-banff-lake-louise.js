// Данные интерактивной карты маршрута Calgary → Banff → Lake Louise.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). km — расстояние от старта вдоль маршрута.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './calgary-banff-lake-louise.line.json';

export const CALGARY_BANFF_LAKE_LOUISE_EXPLORER = {
  line,
  provinceIso: 'CA-AB',
  from: { name: 'Calgary', coords: [-114.0719, 51.0447] },
  to: { name: 'Lake Louise', coords: [-116.1773, 51.4254] },
  via: ['Canmore', 'Banff'],

  // Остановки на карте (подписи вдоль линии)
  stops: [
    { name: 'Calgary', km: 0, coords: [-114.0719, 51.0447] },
    { name: 'Mînî Thnî', km: 61, coords: [-114.8446, 51.1461] },
    { name: 'Canmore', km: 104, coords: [-115.3486, 51.0884] },
    { name: 'Banff', km: 128, coords: [-115.5708, 51.1784] },
    { name: 'Lake Louise', km: 186, coords: [-116.1773, 51.4254] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '185', unit: 'km', note: 'Calgary → Banff 128 km · Banff → Lake Louise 57 km' },
      { key: 'time', label: 'Drive Time', value: '~2', unit: 'h', note: 'Non-stop. Realistically 3.5–4.5 h with stops and photo pullouts' },
      { key: 'road', label: 'Road Type', value: 'Hwy 1', unit: '', note: 'Trans-Canada Highway — paved, divided, 2–4 lanes the whole way' },
    ],
    legs: [
      { from: 'Calgary', to: 'Canmore', km: 104, road: 'Hwy 1 · 4-lane divided', note: 'Fast prairie-to-foothills run, speed limit 110 km/h' },
      { from: 'Canmore', to: 'Banff', km: 24, road: 'Hwy 1 · park gate', note: 'Parks Canada pass checkpoint at the East Gate' },
      { from: 'Banff', to: 'Lake Louise', km: 57, road: 'Hwy 1 · wildlife-fenced', note: 'Limit drops to 90 km/h inside the park — enforced' },
    ],
  },

  fuel: {
    summary: 'Gas is easy until Banff. After that, the only pump before Lake Louise is a small seasonal station at Castle Junction — plan on the full 57 km.',
    longestGapKm: 57,
    items: [
      { name: 'Valley Ridge Esso', brand: 'Esso', town: 'Calgary (west edge)', km: 16, coords: [-114.24739, 51.0917], note: 'Last stop inside city limits' },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Hwy 1 & Hwy 22', km: 32, coords: [-114.47448, 51.08738] },
      { name: 'Chevron — Stoney Nakoda', brand: 'Chevron', town: 'Mînî Thnî', km: 61, coords: [-114.84457, 51.1461], note: 'Indigenous-run, right on the highway' },
      { name: 'GoodStoney Gas', brand: 'GoodStoney', town: 'Morley', km: 74, coords: [-115.01676, 51.10014] },
      { name: 'Shell', brand: 'Shell', town: "Dead Man's Flats", km: 95, coords: [-115.26621, 51.03923] },
      { name: 'Esso', brand: 'Esso', town: "Dead Man's Flats", km: 95, coords: [-115.26342, 51.03941] },
      { name: 'Shell', brand: 'Shell', town: 'Canmore', km: 105, coords: [-115.35998, 51.09866] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Canmore', km: 105, coords: [-115.363, 51.10361] },
      { name: 'Co-op Gas Bar', brand: 'Co-op', town: 'Banff', km: 126, coords: [-115.55593, 51.18607] },
      { name: 'Banff Shell', brand: 'Shell', town: 'Banff', km: 127, coords: [-115.56578, 51.18261] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Banff', km: 128, coords: [-115.57419, 51.17871], note: 'Fill up here — last reliable pump for 57 km', warn: true },
      { name: 'Castle Mountain Chalets', brand: 'Independent', town: 'Castle Junction', km: 159, coords: [-115.9191, 51.26895], note: 'Small and seasonal — hours vary, don’t count on it', warn: true },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Lake Louise', km: 185, coords: [-116.1761, 51.42486] },
      { name: 'Shell', brand: 'Shell', town: 'Lake Louise', km: 185, coords: [-116.17737, 51.42638] },
    ],
  },

  // Уровни покрытия — приблизительно, по картам покрытия операторов
  // (Rogers / Telus / Bell) и отзывам водителей. Не измерения.
  cell: {
    note: 'Approximate — based on carrier coverage maps (Rogers, Telus, Bell). Download offline maps before Banff.',
    segments: [
      { fromKm: 0, toKm: 60, level: 'good', label: 'Calgary → Mînî Thnî', text: 'Full LTE/5G along the highway' },
      { fromKm: 60, toKm: 92, level: 'fair', label: 'Morley → Lac des Arcs', text: 'Mostly fine, short drops in the Bow Valley gap' },
      { fromKm: 92, toKm: 132, level: 'good', label: 'Canmore → Banff', text: 'Strong — both towns have full coverage' },
      { fromKm: 132, toKm: 158, level: 'fair', label: 'Banff → Castle Junction', text: 'Patchy — calls drop, texts usually get through' },
      { fromKm: 158, toKm: 181, level: 'poor', label: 'Castle Junction → Lake Louise', text: 'Long stretches with no signal in the valley' },
      { fromKm: 181, toKm: 186, level: 'good', label: 'Lake Louise village', text: 'Good in the village, weak up at the lake itself' },
    ],
  },

  weather: {
    intro: 'Mountain weather changes in 20 minutes. These are the rules locals actually drive by.',
    // Помесячная шкала: go / caution / nogo-риск
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
          'June – September, dry pavement, daylight',
          'Leave Calgary before 8 am — less traffic, better parking at the lakes',
          'Clear mornings: afternoon thunderstorms are common in July',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'October – May: winter tires strongly recommended (mandatory past Lake Louise on the BC side, Oct 1 – Apr 30)',
          'Dawn and dusk: elk, deer and sheep on the road',
          'Chinook winds near Calgary — melt by day, black ice by night',
          'Wildfire smoke in July–August — check air quality and closures',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Snowfall or blowing-snow warning issued for Banff National Park',
          'Freezing rain — Hwy 1 turns to glass, ditches fill fast',
          'Highway closed for avalanche control or a crash — no detours exist',
          'Active wildfire evacuation alert along the corridor',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'Parks Canada — Banff road alerts', href: 'https://parks.canada.ca/pn-np/ab/banff/bulletins' },
    ],
  },

  hotels: [
    { name: 'Stoney Nakoda Hotel', type: 'Resort', town: 'Mînî Thnî', km: 74, coords: [-115.01619, 51.10209], note: 'Indigenous-owned, on the highway' },
    { name: 'Copperstone Resort', type: 'Resort', town: "Dead Man's Flats", km: 95, coords: [-115.26223, 51.04028] },
    { name: 'Coast Canmore Hotel', type: 'Hotel', town: 'Canmore', km: 103, coords: [-115.34538, 51.08741] },
    { name: 'The Malcolm Hotel', type: 'Hotel', town: 'Canmore', km: 103, coords: [-115.3522, 51.08653] },
    { name: 'HI Banff Alpine Centre', type: 'Hostel', town: 'Banff', km: 126, coords: [-115.54805, 51.18525] },
    { name: 'Moxy Banff', type: 'Hotel', town: 'Banff', km: 126, coords: [-115.55715, 51.18554] },
    { name: 'Elk + Avenue Hotel', type: 'Hotel', town: 'Banff', km: 127, coords: [-115.57074, 51.17992] },
    { name: 'Mount Royal Hotel', type: 'Hotel', town: 'Banff', km: 128, coords: [-115.57069, 51.17627] },
    { name: 'Fairmont Banff Springs', type: 'Historic Hotel', town: 'Banff', km: 128, coords: [-115.56146, 51.16405], note: 'The 1888 "castle in the Rockies"' },
    { name: 'HI Castle Mountain', type: 'Hostel', town: 'Castle Junction', km: 159, coords: [-115.91679, 51.26745] },
    { name: 'The Post Hotel & Spa', type: 'Hotel', town: 'Lake Louise', km: 185, coords: [-116.18104, 51.42658] },
    { name: 'Lake Louise Inn', type: 'Hotel', town: 'Lake Louise', km: 185, coords: [-116.18165, 51.42914] },
    { name: 'HI Lake Louise Alpine Centre', type: 'Hostel', town: 'Lake Louise', km: 185, coords: [-116.18276, 51.42777] },
  ],

  eats: [
    { name: "Smitty's", type: 'Diner', town: 'Mînî Thnî', km: 61, coords: [-114.84498, 51.14625] },
    { name: 'Husky House', type: 'Diner', town: "Dead Man's Flats", km: 95, coords: [-115.26322, 51.03957] },
    { name: 'Le Fournil Bakery', type: 'Bakery', town: 'Canmore', km: 103, coords: [-115.35094, 51.09144] },
    { name: 'Rocky Mountains Bagel Co', type: 'Café', town: 'Canmore', km: 103, coords: [-115.35095, 51.09068] },
    { name: 'Crazyweed Restaurant', type: 'Restaurant', town: 'Canmore', km: 105, coords: [-115.35858, 51.09627] },
    { name: 'Good Earth Coffeehouse', type: 'Café', town: 'Banff', km: 127, coords: [-115.57048, 51.1796] },
    { name: 'Park Distillery', type: 'Restaurant', town: 'Banff', km: 128, coords: [-115.57107, 51.17777] },
    { name: 'Wild Flour Bakery', type: 'Bakery', town: 'Banff', km: 128, coords: [-115.5726, 51.17715] },
    { name: 'The Grizzly House', type: 'Fondue', town: 'Banff', km: 128, coords: [-115.57117, 51.17704] },
    { name: 'The Bison Restaurant', type: 'Canadian', town: 'Banff', km: 128, coords: [-115.57263, 51.17754] },
    { name: "Laggan's Bakery", type: 'Bakery', town: 'Lake Louise', km: 185, coords: [-116.17961, 51.4252], note: 'Local legend — get there before the tour buses' },
    { name: "Bill Peyto's Cafe", type: 'Café', town: 'Lake Louise', km: 185, coords: [-116.18286, 51.42779] },
    { name: 'Lake Louise Village Grill', type: 'Restaurant', town: 'Lake Louise', km: 185, coords: [-116.17934, 51.42555] },
  ],
};

export default CALGARY_BANFF_LAKE_LOUISE_EXPLORER;
