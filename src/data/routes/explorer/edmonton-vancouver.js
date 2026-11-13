// Данные интерактивной карты маршрута Edmonton → Vancouver.
// Линия — реальная дорога (OSRM поверх OpenStreetMap). Заправки, отели и
// кафе — реальные объекты из OpenStreetMap (выгрузка Overpass, ноябрь
// 2026, точки И контуры зданий; подписи посёлков — по ближайшему
// населённому пункту OSM). Список не исчерпывающий.
// Координаты в порядке [долгота, широта], как требует MapLibre.

import line from './edmonton-vancouver.line.json';

export const EDMONTON_VANCOUVER_EXPLORER = {
  line,
  provinceIso: 'CA-BC',
  from: { name: 'Edmonton', coords: [-113.49124, 53.54621] },
  to: { name: 'Vancouver', coords: [-123.11395, 49.26087] },
  via: ['Jasper', 'Mount Robson', 'Kamloops', 'Coquihalla'],

  stops: [
    { name: 'Edmonton', km: 0, coords: [-113.49124, 53.54621] },
    { name: 'Hinton', km: 287, coords: [-117.58868, 53.39905] },
    { name: 'Jasper', km: 365, coords: [-118.08243, 52.87523] },
    { name: 'Mount Robson', km: 452, coords: [-119.22904, 53.03549] },
    { name: 'Valemount', km: 488, coords: [-119.28058, 52.83151] },
    { name: 'Clearwater', km: 686, coords: [-120.06546, 51.65035] },
    { name: 'Kamloops', km: 812, coords: [-120.33942, 50.67583] },
    { name: 'Merritt', km: 898, coords: [-120.78841, 50.11249] },
    { name: 'Hope', km: 1018, coords: [-121.44159, 49.37998] },
    { name: 'Vancouver', km: 1169, coords: [-123.11395, 49.26087] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '1,169', unit: 'km', note: 'Hwy 16 → Hwy 5 → Coquihalla → Hwy 1, as routed on the map' },
      { key: 'time', label: 'Drive Time', value: '~12–15h', unit: '', note: 'Guides give 12–14.5 h; map routing gives ~15 h. Split it over two days' },
      { key: 'road', label: 'Road Type', value: 'Hwy 16 → 5 → 1', unit: '', note: 'Yellowhead, the North Thompson valley, then the four-lane Coquihalla' },
    ],
    legs: [
      { from: 'Edmonton', to: 'Jasper', km: 365, road: 'Hwy 16 · Yellowhead', note: 'Farmland and forestry country, then into Jasper National Park' },
      { from: 'Jasper', to: 'Valemount', km: 123, road: 'Hwy 16 → Hwy 5', note: 'Over Yellowhead Pass into BC — clocks go back an hour — past Mount Robson' },
      { from: 'Valemount', to: 'Kamloops', km: 324, road: 'Hwy 5 · Yellowhead South', note: 'Down the North Thompson valley through Blue River and Clearwater' },
      { from: 'Kamloops', to: 'Hope', km: 206, road: 'Hwy 5 · Coquihalla', note: 'Four lanes over a summit above 1,200 m — the winter crux of the trip' },
      { from: 'Hope', to: 'Vancouver', km: 151, road: 'Hwy 1 · Trans-Canada', note: 'Through the Fraser Valley — traffic, not terrain, from here' },
    ],
  },

  fuel: {
    summary: 'Easy in Alberta, with a station every few dozen kilometres to Hinton. In BC the towns spread out: about 123 km from Jasper to Valemount, 105 km from Blue River to Clearwater, and 118 km over the Coquihalla from Merritt to Hope with no stations mapped in between. Fill up in Jasper, Valemount and Merritt. Pins are stations mapped in OpenStreetMap.',
    longestGapKm: 123,
    items: [
      { name: 'Hughes', brand: 'Hughes', town: 'Edmonton', km: 0, coords: [-113.47971, 53.54627] },
      { name: 'Tempo', brand: 'Tempo', town: 'Edmonton', km: 0, coords: [-113.47574, 53.54855] },
      { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'St. Albert', km: 7, coords: [-113.56676, 53.59254] },
      { name: 'Shell', brand: 'Shell', town: 'St. Albert', km: 16, coords: [-113.68755, 53.56614] },
      { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Spruce Grove', km: 32, coords: [-113.93398, 53.56268] },
      { name: 'Shell', brand: 'Shell', town: 'Point Alison', km: 72, coords: [-114.54129, 53.57968] },
      { name: 'Race Trac', brand: 'Race Trac', town: 'Evansburg', km: 104, coords: [-115.01158, 53.60083] },
      { name: 'Domo', brand: 'Domo', town: 'Carrot Creek', km: 161, coords: [-115.85569, 53.60889] },
      { name: 'Shell', brand: 'Shell', town: 'Edson', km: 199, coords: [-116.41356, 53.58684] },
      { name: 'Chevron', brand: 'Chevron', town: 'Edson', km: 199, coords: [-116.41321, 53.58771] },
      { name: 'Shell', brand: 'Shell', town: 'Hinton', km: 287, coords: [-117.59169, 53.39918] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Hinton', km: 287, coords: [-117.60098, 53.3966] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Jasper', km: 363, coords: [-118.07928, 52.88045] },
      { name: 'Shell', brand: 'Shell', town: 'Jasper', km: 364, coords: [-118.08198, 52.87382] },
      { name: 'Federated Co-operatives', brand: 'Federated Co-operatives', town: 'Valemount', km: 487, coords: [-119.27655, 52.82875] },
      { name: 'Tempo', brand: 'Tempo', town: 'Valemount', km: 487, coords: [-119.27679, 52.829] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Blue River', km: 576, coords: [-119.30973, 52.10951] },
      { name: 'Esso', brand: 'Esso', town: 'Blue River', km: 577, coords: [-119.31056, 52.1036] },
      { name: 'Shell', brand: 'Shell', town: 'Clearwater', km: 682, coords: [-120.03998, 51.65176] },
      { name: 'Canco', brand: 'Canco', town: 'Clearwater', km: 682, coords: [-120.03168, 51.65136] },
      { name: 'Chevron', brand: 'Chevron', town: 'Barriere', km: 744, coords: [-120.12932, 51.17329] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Barriere', km: 744, coords: [-120.12707, 51.17291] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Kamloops', km: 792, coords: [-120.31233, 50.7976] },
      { name: 'Esso', brand: 'Esso', town: 'Kamloops', km: 815, coords: [-120.36822, 50.65219] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Merritt', km: 896, coords: [-120.78823, 50.11152] },
      { name: 'Super Save', brand: 'Super Save', town: 'Merritt', km: 897, coords: [-120.7767, 50.10902] },
      { name: 'Esso', brand: 'Esso', town: 'Hope', km: 1015, coords: [-121.4348, 49.3756] },
      { name: 'Centex', brand: 'Centex', town: 'Hope', km: 1015, coords: [-121.42513, 49.37567] },
      { name: 'Chevron', brand: 'Chevron', town: 'Chilliwack', km: 1072, coords: [-122.00641, 49.14075] },
      { name: 'Shell', brand: 'Shell', town: 'Abbotsford', km: 1096, coords: [-122.26881, 49.03749] },
      { name: 'Chevron', brand: 'Chevron', town: 'Abbotsford', km: 1096, coords: [-122.26934, 49.03782] },
      { name: 'Chevron', brand: 'Chevron', town: 'Vancouver', km: 1161, coords: [-123.04381, 49.2579] },
      { name: 'Shell', brand: 'Shell', town: 'Vancouver', km: 1165, coords: [-123.10122, 49.26946] },
    ],
  },

  cell: {
    note: 'Approximate. There is no official coverage map for Highway 5; BC is expanding cell service along rural highways, so coverage may be better than shown. Download offline maps before leaving Jasper.',
    segments: [
      { fromKm: 0, toKm: 287, level: 'good', label: 'Edmonton → Hinton', text: 'Coverage along Hwy 16 and in the towns' },
      { fromKm: 287, toKm: 488, level: 'fair', label: 'Hinton → Valemount', text: 'Drops inside Jasper National Park and the Robson valley; returns near the towns' },
      { fromKm: 488, toKm: 686, level: 'poor', label: 'Valemount → Clearwater', text: 'Expect gaps in the North Thompson valley between small communities' },
      { fromKm: 686, toKm: 898, level: 'good', label: 'Clearwater → Merritt', text: 'Coverage around Kamloops and the towns' },
      { fromKm: 898, toKm: 1018, level: 'fair', label: 'Coquihalla', text: 'Mostly covered, with weaker spots over the summit' },
      { fromKm: 1018, toKm: 1169, level: 'good', label: 'Hope → Vancouver', text: 'Strong through the Fraser Valley' },
    ],
  },

  weather: {
    intro: 'Two mountain crossings on one trip: Yellowhead Pass and the Coquihalla. Summer is easy; from October the Coquihalla decides whether day two happens on schedule.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'fair' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'fair' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'May, June and September — dry roads and fewer summer crowds',
          'Two days with a night in Kamloops, so neither pass is driven tired or in the dark',
          'Any day after checking 511 Alberta and DriveBC',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Wildfire smoke and possible closures in late summer',
          'Wildlife on the road in Jasper and the Robson valley at dawn and dusk',
          'Shoulder-season snow at Yellowhead Pass and on the Coquihalla',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Without winter tires or chains on BC Hwy 5 from October 1 — it is required by law',
          'The Coquihalla in a winter storm warning — it closes, and there is no quick detour',
          'Through the night in winter to save a hotel stop',
        ],
      },
    ],
    links: [
      { label: '511 Alberta — road conditions', href: 'https://511.alberta.ca' },
      { label: 'DriveBC — road conditions', href: 'https://drivebc.ca' },
      { label: 'Parks Canada — Jasper National Park', href: 'https://parks.canada.ca/pn-np/ab/jasper' },
    ],
  },

  hotels: [
    { name: 'Alberta Place Suite Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.49712, 53.54024] },
    { name: 'Matrix Hotel', type: 'Hotel', town: 'Edmonton', km: 0, coords: [-113.50433, 53.53901] },
    { name: 'Rodeway Inn', type: 'Hotel', town: 'Edson', km: 199, coords: [-116.41513, 53.58646] },
    { name: 'Guest House Inn & Suites', type: 'Hotel', town: 'Edson', km: 200, coords: [-116.41772, 53.58618] },
    { name: 'Timberland Hotel', type: 'Hotel', town: 'Hinton', km: 286, coords: [-117.5886, 53.39974] },
    { name: 'Tara Vista Inn', type: 'Hotel', town: 'Hinton', km: 287, coords: [-117.59754, 53.39662] },
    { name: 'Overlander Mountain Lodge', type: 'Motel', town: 'Brûlé', km: 311, coords: [-117.80974, 53.2397] },
    { name: 'Miette Mountain Cabins', type: 'Hotel', town: 'Brûlé', km: 320, coords: [-117.92717, 53.20525] },
    { name: 'Chateau Jasper', type: 'Hotel', town: 'Jasper', km: 362, coords: [-118.08099, 52.88583] },
    { name: 'Forest Park Hotel', type: 'Hotel', town: 'Jasper', km: 362, coords: [-118.07751, 52.88955] },
    { name: 'Rocky Inn', type: 'Hotel', town: 'Valemount', km: 487, coords: [-119.27931, 52.82872] },
    { name: 'Best Western Plus Valemount Inn & Suites', type: 'Hotel', town: 'Valemount', km: 489, coords: [-119.26904, 52.8159] },
    { name: 'Glacier Mountain Lodge', type: 'Hotel', town: 'Blue River', km: 576, coords: [-119.31042, 52.10916] },
    { name: 'Mike Wiegele Helicopter Skiing', type: 'Hotel', town: 'Blue River', km: 576, coords: [-119.30376, 52.11309] },
    { name: 'Avola Mountain Lodge', type: 'Hotel', town: 'Avola', km: 615, coords: [-119.32544, 51.78462] },
    { name: 'Log Inn Pub', type: 'Hotel', town: 'Avola', km: 616, coords: [-119.32188, 51.78233] },
    { name: 'Overlook Cabin', type: 'Motel', town: 'Clearwater', km: 681, coords: [-120.01325, 51.64624] },
    { name: 'Ace Western Motel', type: 'Motel', town: 'Clearwater', km: 682, coords: [-120.03667, 51.65034] },
    { name: 'Monte Carlo Motel', type: 'Motel', town: 'Barriere', km: 744, coords: [-120.12748, 51.17373] },
    { name: 'Y5 Motel & Campground', type: 'Motel', town: 'Barriere', km: 745, coords: [-120.12724, 51.17037] },
    { name: 'Riverland Inn & Suites', type: 'Motel', town: 'Kamloops', km: 807, coords: [-120.30349, 50.67513] },
    { name: 'Parkview Motel', type: 'Motel', town: 'Kamloops', km: 808, coords: [-120.31457, 50.67339] },
    { name: 'Sportsman\'s Motel', type: 'Motel', town: 'Merritt', km: 894, coords: [-120.77118, 50.122] },
    { name: 'Coldwater Hotel', type: 'Hotel', town: 'Merritt', km: 896, coords: [-120.78971, 50.11059] },
    { name: 'Alpine Motel', type: 'Motel', town: 'Hope', km: 1015, coords: [-121.43284, 49.37573] },
    { name: 'Heritage Inn', type: 'Hotel', town: 'Hope', km: 1015, coords: [-121.43167, 49.37523] },
  ],

  eats: [
    { name: 'Double Greeting Won Ton House', type: 'Chinese', town: 'Edmonton', km: 0, coords: [-113.48298, 53.54484] },
    { name: 'Mikado', type: 'Restaurant', town: 'Edmonton', km: 0, coords: [-113.50883, 53.54564] },
    { name: 'Aaa Chinese Restaurant & Lounge', type: 'Chinese', town: 'St. Albert', km: 7, coords: [-113.56451, 53.58832] },
    { name: 'La Cocina Latina', type: 'Mexican', town: 'St. Albert', km: 8, coords: [-113.58947, 53.59103] },
    { name: 'Tim Hortons', type: 'Café', town: 'Spruce Grove', km: 32, coords: [-113.93355, 53.56238] },
    { name: 'Tim Hortons', type: 'Café', town: 'Point Alison', km: 72, coords: [-114.54059, 53.57914] },
    { name: 'Original Joe\'s Restaurant & Bar', type: 'Restaurant', town: 'Edson', km: 200, coords: [-116.42085, 53.58625] },
    { name: 'Ricky\'s All Day Grill', type: 'Western', town: 'Edson', km: 200, coords: [-116.41677, 53.58612] },
    { name: 'The Old Grind', type: 'Restaurant', town: 'Hinton', km: 286, coords: [-117.5886, 53.39883] },
    { name: 'K&L Sushi', type: 'Sushi', town: 'Hinton', km: 286, coords: [-117.59018, 53.39842] },
    { name: 'Stone Peak Restaurant', type: 'Restaurant', town: 'Brûlé', km: 311, coords: [-117.81015, 53.23924] },
    { name: 'Kumama', type: 'Restaurant', town: 'Jasper', km: 362, coords: [-118.06799, 52.88991] },
    { name: 'Saddle Mountain Restaurant', type: 'Restaurant', town: 'Blue River', km: 576, coords: [-119.30579, 52.11392] },
    { name: 'Powder Max Dining Room', type: 'Restaurant', town: 'Blue River', km: 576, coords: [-119.30281, 52.11317] },
    { name: 'Hop \'n\' Hog', type: 'Local', town: 'Clearwater', km: 682, coords: [-120.03843, 51.65473] },
    { name: 'Double "R" Pizza and Subs', type: 'Pizza', town: 'Clearwater', km: 682, coords: [-120.0329, 51.6443] },
    { name: 'Yaki Joe\'s Gormet Pizza', type: 'Pizza', town: 'Kamloops', km: 806, coords: [-120.29936, 50.68118] },
    { name: 'Victoria Oriental', type: 'Chinese', town: 'Kamloops', km: 808, coords: [-120.3131, 50.67345] },
    { name: 'Kekuli Cafe Indigenous Cuisine', type: 'Café', town: 'Merritt', km: 896, coords: [-120.78882, 50.11159] },
    { name: 'Coldwater Cafe', type: 'Café', town: 'Merritt', km: 896, coords: [-120.78956, 50.11039] },
    { name: 'Britton Creek Snack Shop', type: 'Sandwich', town: 'Brookmere', km: 959, coords: [-121.00117, 49.65177] },
    { name: 'Spice and Grill', type: 'Indian', town: 'Hope', km: 1015, coords: [-121.43095, 49.37644] },
    { name: 'Home Restaurant', type: 'Restaurant', town: 'Hope', km: 1015, coords: [-121.42729, 49.37587] },
    { name: 'Cafe Episode', type: 'Café', town: 'Vancouver', km: 1161, coords: [-123.04469, 49.25861] },
    { name: 'Prince Chinese Seafood Restaurant', type: 'Chinese', town: 'Vancouver', km: 1161, coords: [-123.04514, 49.25847] },
  ],
};

export default EDMONTON_VANCOUVER_EXPLORER;
