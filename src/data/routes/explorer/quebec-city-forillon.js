// Данные интерактивной карты маршрута Québec City → Forillon.
// Линия маршрута — реальная дорога (OSRM поверх OpenStreetMap), точки
// заправок/отелей/кафе — реальные объекты из OpenStreetMap (выгрузка
// Overpass, октябрь 2026). Список не исчерпывающий: это то, что
// нанесено на карту, а не все заведения на маршруте.
// Координаты везде в порядке [долгота, широта], как требует MapLibre.

import line from './quebec-city-forillon.line.json';

export const QUEBEC_CITY_FORILLON_EXPLORER = {
  line,
  provinceIso: 'CA-QC',
  from: { name: 'Québec City', coords: [-71.2084, 46.8137] },
  to: { name: 'Cap-aux-Os', coords: [-64.2064, 48.8244] },
  via: ['Rivière-du-Loup', 'Rimouski', 'Sainte-Anne-des-Monts'],

  stops: [
    { name: 'Québec City', km: 0, coords: [-71.2084, 46.8137] },
    { name: 'Rivière-du-Loup', km: 209, coords: [-69.5333, 47.8541] },
    { name: 'Rimouski', km: 316, coords: [-68.53, 48.4502] },
    { name: 'Sainte-Anne-des-Monts', km: 498, coords: [-66.485, 49.1263] },
    { name: 'Cap-aux-Os', km: 704, coords: [-64.2064, 48.8244] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '704', unit: 'km', note: 'Québec City to Cap-aux-Os around the Gaspé peninsula' },
      { key: 'time', label: 'Drive Time', value: '~10h30m', unit: '', note: 'Non-stop — nobody should do this in one day' },
      { key: 'road', label: 'Road Type', value: 'A-20 → Rte 132', unit: '', note: 'Autoroute for two hours, then coastal two-lane the rest of the way' },
    ],
    legs: [
      { from: 'Québec City', to: 'Rivière-du-Loup', km: 209, road: 'Autoroute 20', note: 'The only fast stretch of the whole drive' },
      { from: 'Rivière-du-Loup', to: 'Rimouski', km: 107, road: 'Route 132', note: 'Where the autoroute ends and the coast road begins' },
      { from: 'Rimouski', to: 'Sainte-Anne-des-Monts', km: 182, road: 'Route 132 · coastal', note: 'The river widens into the gulf and the mountains close in' },
      { from: 'Sainte-Anne-des-Monts', to: 'Cap-aux-Os', km: 206, road: 'Route 132 · Chic-Chocs coast', note: 'Winding, spectacular and slow — budget far more than the distance suggests' },
    ],
  },

  fuel: {
    summary: 'Good as far as Rimouski. Past Sainte-Anne-des-Monts the villages get small and the gaps longer, so top up when you pass an open station rather than when the gauge asks. Note the map thins out badly over the last 150 km — that is a gap in OpenStreetMap, not an empty road: Rivière-au-Renard and the villages along the tip do have fuel, on village hours. Pins are only what is mapped.',
    // longestGapKm намеренно не указан: выгрузка OpenStreetMap по этому
    // маршруту неполная, и посчитанный по ней разрыв был бы больше реального.
    items: [
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Québec City', km: 0, coords: [-71.20256, 46.81657] },
    { name: 'EKO', brand: 'EKO', town: 'Québec City', km: 25, coords: [-71.17943, 46.79391] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Québec City', km: 77, coords: [-70.56961, 46.97917] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Rivière-du-Loup', km: 139, coords: [-70.03741, 47.36574] },
    { name: 'Ultramar', brand: 'Ultramar', town: 'Rivière-du-Loup', km: 203, coords: [-69.5647, 47.81944] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Rimouski', km: 285, coords: [-68.86676, 48.29837] },
    { name: 'Irving', brand: 'Irving', town: 'Rimouski', km: 316, coords: [-68.51681, 48.46278] },
    { name: 'Gaz Optimum', brand: 'Gaz Optimum', town: 'Rimouski', km: 380, coords: [-67.88884, 48.72597] },
    { name: 'Harnois', brand: 'Harnois', town: 'Sainte-Anne-des-Monts', km: 439, coords: [-67.18217, 48.93658] },
    { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Sainte-Anne-des-Monts', km: 482, coords: [-66.66972, 49.10002] },
    { name: 'Gaz-O-Bar', brand: 'Gaz-O-Bar', town: 'Sainte-Anne-des-Monts', km: 557, coords: [-65.7392, 49.23281] },
    ],
  },

  cell: {
    note: 'Approximate — based on carrier coverage maps.',
    segments: [
      { fromKm: 0, toKm: 316, level: 'good', label: 'Québec City → Rimouski', text: 'Solid along the populated south shore' },
      { fromKm: 316, toKm: 498, level: 'fair', label: 'Toward the Chic-Chocs', text: 'Comes and goes between coastal villages' },
      { fromKm: 498, toKm: 704, level: 'poor', label: 'The peninsula tip', text: 'Drops in the valleys and inside the park' },
    ],
  },

  weather: {
    intro: 'A long coastal drive where the gulf makes its own weather. Fog, wind and a sharp temperature drop at the tip are normal, and winter closes the road in storms.',
    months: [
      { m: 'Jan', level: 'nogo' }, { m: 'Feb', level: 'nogo' }, { m: 'Mar', level: 'caution' },
      { m: 'Apr', level: 'caution' }, { m: 'May', level: 'fair' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'fair' }, { m: 'Nov', level: 'caution' }, { m: 'Dec', level: 'nogo' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'June to early October, while park services and the Gaspésie loop are fully open',
          'Mid-summer into September for whales from the Cap-Gaspé cliffs',
          'September for colour on the Chic-Chocs and far fewer vehicles',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Route 132 is winding two-lane for 400 km — plan far more time than the distance implies',
          'Moose at dawn and dusk, especially on the Chic-Chocs stretch',
          'Gulf fog can hide the whole coast for days',
        ],
      },
      {
        level: 'nogo',
        title: 'Don\'t Drive',
        items: [
          'Winter storms close Route 132 with blowing snow off the gulf',
          'Most park services close from late October to June',
          'Night driving on the winding coastal sections',
        ],
      },
    ],
    links: [
      { label: 'Québec 511 — road conditions', href: 'https://www.quebec511.info' },
      { label: 'Parks Canada — Forillon', href: 'https://parks.canada.ca/pn-np/qc/forillon' },
    ],
  },

  hotels: [
    { name: 'Auberge du Trésor', type: 'Hotel', town: 'Québec City', km: 0, coords: [-71.2061, 46.81309] },
    { name: 'Hôtel Belley', type: 'Hotel', town: 'Québec City', km: 0, coords: [-71.20973, 46.8169] },
    { name: 'Auberge Cap Martin', type: 'Motel', town: 'Rivière-du-Loup', km: 136, coords: [-70.07282, 47.35266] },
    { name: 'Le Martinet', type: 'Hotel', town: 'Rivière-du-Loup', km: 137, coords: [-70.06461, 47.35551] },
    { name: 'Auberge Saint-Simon', type: 'Motel', town: 'Rimouski', km: 268, coords: [-69.04445, 48.20354] },
    { name: 'Motel du Littoral', type: 'Motel', town: 'Rimouski', km: 312, coords: [-68.57345, 48.43588] },
    { name: 'Motel La Vigie', type: 'Hotel', town: 'Sainte-Anne-des-Monts', km: 407, coords: [-67.574, 48.83507] },
    { name: 'Motel du Portage', type: 'Hotel', town: 'Sainte-Anne-des-Monts', km: 407, coords: [-67.57406, 48.83365] },
    { name: 'Auberge Le Caribou', type: 'Hotel', town: 'Cap-aux-Os', km: 673, coords: [-64.39207, 49.00281] },
    { name: 'Motel du haut phare', type: 'Motel', town: 'Cap-aux-Os', km: 696, coords: [-64.20372, 48.85609] },
  ],

  eats: [
    { name: 'Bistro 1640', type: 'Restaurant', town: 'Québec City', km: 0, coords: [-71.20585, 46.81308] },
    { name: 'Aux Anciens Canadiens', type: 'Restaurant', town: 'Québec City', km: 0, coords: [-71.20743, 46.81169] },
    { name: 'Cap Martin', type: 'Restaurant', town: 'Rivière-du-Loup', km: 136, coords: [-70.07245, 47.35243] },
    { name: 'Chez Mami', type: 'Café', town: 'Rivière-du-Loup', km: 182, coords: [-69.7294, 47.67422] },
    { name: 'Tim Hortons', type: 'Café', town: 'Rimouski', km: 314, coords: [-68.54945, 48.43857] },
    { name: 'Yuzu Sushi', type: 'Sushi', town: 'Rimouski', km: 315, coords: [-68.53594, 48.44753] },
    { name: 'Restaurant Belle Plage', type: 'Regional', town: 'Sainte-Anne-des-Monts', km: 408, coords: [-67.56432, 48.84335] },
    { name: 'La petite bedaine', type: 'Fast Food', town: 'Sainte-Anne-des-Monts', km: 496, coords: [-66.49304, 49.12427] },
    { name: 'Resto-Pub La Révolte', type: 'Burger', town: 'Cap-aux-Os', km: 673, coords: [-64.39197, 49.00293] },
  ],
};

export default QUEBEC_CITY_FORILLON_EXPLORER;
