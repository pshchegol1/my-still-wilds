// Данные интерактивной карты маршрута Toronto → Montréal.
// Линия — реальная дорога (OSRM поверх OpenStreetMap). Заправки, отели и
// кафе — реальные объекты из OpenStreetMap (выгрузка Overpass, ноябрь
// 2026, точки И контуры зданий; подписи посёлков — по ближайшему
// населённому пункту OSM). Список не исчерпывающий.
// Координаты в порядке [долгота, широта], как требует MapLibre.

import line from './toronto-montreal.line.json';

export const TORONTO_MONTREAL_EXPLORER = {
  line,
  provinceIso: 'CA-QC',
  from: { name: 'Toronto', coords: [-79.38393, 43.65348] },
  to: { name: 'Montréal', coords: [-73.56981, 45.50318] },
  via: ['Kingston', 'Brockville', 'Cornwall'],

  stops: [
    { name: 'Toronto', km: 0, coords: [-79.38393, 43.65348] },
    { name: 'Port Hope', km: 105, coords: [-78.29397, 43.95158] },
    { name: 'Belleville', km: 187, coords: [-77.36076, 44.24363] },
    { name: 'Kingston', km: 258, coords: [-76.48098, 44.2312] },
    { name: 'Gananoque', km: 286, coords: [-76.16267, 44.32962] },
    { name: 'Brockville', km: 337, coords: [-75.70168, 44.60392] },
    { name: 'Cornwall', km: 432, coords: [-74.73338, 45.047] },
    { name: 'Montréal', km: 548, coords: [-73.56981, 45.50318] },
  ],

  numbers: {
    stats: [
      { key: 'distance', label: 'Distance', value: '548', unit: 'km', note: 'Highway 401 to the Quebec border, then Autoroute 20' },
      { key: 'time', label: 'Drive Time', value: '~5.5–6.5h', unit: '', note: 'Guides give ~5.5–6 h; map routing ~6.5 h. Traffic can add hours' },
      { key: 'road', label: 'Road Type', value: '401 → A-20', unit: '', note: 'Multi-lane divided freeway the whole way' },
    ],
    legs: [
      { from: 'Toronto', to: 'Kingston', km: 258, road: 'Hwy 401', note: 'Along Lake Ontario — the slowest part is leaving Toronto' },
      { from: 'Kingston', to: 'Cornwall', km: 174, road: 'Hwy 401', note: 'Along the St. Lawrence past the Thousand Islands' },
      { from: 'Cornwall', to: 'Quebec border', km: 36, road: 'Hwy 401', note: 'Last stretch in Ontario' },
      { from: 'Quebec border', to: 'Montréal', km: 80, road: 'Autoroute 20', note: 'French signs, then heavy city traffic' },
    ],
  },

  fuel: {
    summary: 'The easiest fuel planning on the site: stations every few dozen kilometres and ONroute service centres right on the 401. The longest stretch between mapped stations outside Toronto is about 45 km. Toronto’s suburbs are left off the map — there are stations at almost every exit.',
    longestGapKm: 45,
    items: [
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Toronto', km: 0, coords: [-79.39431, 43.6447] },
      { name: 'Pioneer', brand: 'Pioneer', town: 'Oshawa', km: 57, coords: [-78.87077, 43.88848] },
      { name: 'Shell', brand: 'Shell', town: 'Bowmanville', km: 72, coords: [-78.68965, 43.8974] },
      { name: 'Shell', brand: 'Shell', town: 'Newcastle', km: 81, coords: [-78.58182, 43.9188] },
      { name: 'Mobil', brand: 'Mobil', town: 'Port Hope', km: 103, coords: [-78.3219, 43.95978] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Cobourg', km: 113, coords: [-78.1944, 43.97808] },
      { name: 'Esso', brand: 'Esso', town: 'Grafton', km: 128, coords: [-78.02546, 43.99199] },
      { name: 'Shell', brand: 'Shell', town: 'Brighton', km: 150, coords: [-77.76706, 44.073] },
      { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Quinte West', km: 160, coords: [-77.65909, 44.10947] },
      { name: 'Olco', brand: 'Olco', town: 'Glen Miller', km: 168, coords: [-77.58347, 44.14798] },
      { name: 'Ultramar', brand: 'Ultramar', town: 'Belleville', km: 179, coords: [-77.44697, 44.18148] },
      { name: 'Petro-Canada', brand: 'Petro-Canada', town: 'Napanee', km: 219, coords: [-76.96757, 44.26866] },
      { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Odessa', km: 244, coords: [-76.65562, 44.2832] },
      { name: 'Esso', brand: 'Esso', town: 'Bur Creek', km: 251, coords: [-76.5688, 44.27936] },
      { name: 'Stinson', brand: 'Stinson', town: 'Kingston', km: 253, coords: [-76.54391, 44.27218] },
      { name: 'Esso', brand: 'Esso', town: 'Gananoque', km: 285, coords: [-76.16908, 44.33777] },
      { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Mallorytown', km: 317, coords: [-75.85743, 44.48856] },
      { name: 'Mr Gas', brand: 'Mr Gas', town: 'Prescott', km: 356, coords: [-75.51222, 44.71094] },
      { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Nudell Bush', km: 401, coords: [-75.08148, 44.971] },
      { name: 'MacEwen', brand: 'MacEwen', town: 'Cornwall', km: 436, coords: [-74.68623, 45.05699] },
      { name: 'Canadian Tire', brand: 'Canadian Tire', town: 'Rivière-Beaudette', km: 466, coords: [-74.3634, 45.20199] },
      { name: 'Petroplus', brand: 'Petroplus', town: 'Saint-Zotique', km: 473, coords: [-74.28682, 45.22904] },
      { name: 'Shell', brand: 'Shell', town: 'Les Coteaux', km: 481, coords: [-74.19625, 45.27226] },
      { name: 'Ultramar', brand: 'Ultramar', town: 'Vaudreuil-Dorion', km: 499, coords: [-74.05192, 45.37444] },
      { name: 'Shell', brand: 'Shell', town: 'Montréal', km: 544, coords: [-73.57746, 45.48127] },
    ],
  },

  cell: {
    note: 'Approximate — this is one of the best-covered corridors in Canada.',
    segments: [
      { fromKm: 0, toKm: 548, level: 'good', label: 'Toronto → Montréal', text: 'Good coverage along the whole route' },
    ],
  },

  weather: {
    intro: 'An all-season freeway. Weather matters less than traffic — but winter storms can still close lanes or slow the whole corridor.',
    months: [
      { m: 'Jan', level: 'caution' }, { m: 'Feb', level: 'caution' }, { m: 'Mar', level: 'fair' },
      { m: 'Apr', level: 'good' }, { m: 'May', level: 'good' }, { m: 'Jun', level: 'good' },
      { m: 'Jul', level: 'good' }, { m: 'Aug', level: 'good' }, { m: 'Sep', level: 'good' },
      { m: 'Oct', level: 'good' }, { m: 'Nov', level: 'fair' }, { m: 'Dec', level: 'caution' },
    ],
    levels: [
      {
        level: 'good',
        title: 'Best to Drive',
        items: [
          'Midweek mornings, after the Toronto rush hour',
          'September and October for fall colour along the St. Lawrence',
          'Any season, with a check of Ontario 511 and Québec 511',
        ],
      },
      {
        level: 'fair',
        title: 'Drive With Care',
        items: [
          'Friday afternoons and holiday weekends — heavy traffic out of both cities',
          'Construction season on the 401 and on Montréal’s bridges',
          'Early and late winter storms',
        ],
      },
      {
        level: 'nogo',
        title: "Don't Drive",
        items: [
          'Into a major winter storm warning — whiteouts close the 401',
          'Without winter tires in a Quebec-registered or rental car between Dec 1 and Mar 15',
        ],
      },
    ],
    links: [
      { label: 'Ontario 511 — road conditions', href: 'https://511on.ca' },
      { label: 'Québec 511 — road conditions', href: 'https://www.quebec511.info' },
    ],
  },

  hotels: [
    { name: 'Courtyard Marriott', type: 'Hotel', town: 'Toronto', km: 0, coords: [-79.3831, 43.66242] },
    { name: 'Travelodge', type: 'Hotel', town: 'Oshawa', km: 55, coords: [-78.89044, 43.87383] },
    { name: 'Quality Suites', type: 'Hotel', town: 'Whitby', km: 55, coords: [-78.89629, 43.87225] },
    { name: 'Holiday Inn Express & Suites Clarington-Bowmanville', type: 'Hotel', town: 'Bowmanville', km: 72, coords: [-78.6943, 43.89519] },
    { name: 'Hampton', type: 'Hotel', town: 'Port Hope', km: 103, coords: [-78.32203, 43.96358] },
    { name: 'Best Western', type: 'Hotel', town: 'Cobourg', km: 113, coords: [-78.192, 43.97233] },
    { name: 'The Grafton Inn & Cafe', type: 'Hotel', town: 'Grafton', km: 128, coords: [-78.02643, 43.99216] },
    { name: 'Comfort Inn', type: 'Hotel', town: 'Quinte West', km: 167, coords: [-77.58026, 44.13071] },
    { name: 'Hampton Inn & Suites Belleville', type: 'Hotel', town: 'Belleville', km: 179, coords: [-77.44353, 44.17672] },
    { name: 'Hampton Inn', type: 'Hotel', town: 'Napanee', km: 218, coords: [-76.97112, 44.26147] },
    { name: 'Motel 6', type: 'Motel', town: 'Bur Creek', km: 251, coords: [-76.56617, 44.28247] },
    { name: 'Hampton Inn by Hilton Kingston', type: 'Hotel', town: 'Kingston', km: 261, coords: [-76.44855, 44.27061] },
    { name: 'Countryside Inn', type: 'Motel', town: 'Kingston Mills', km: 262, coords: [-76.43933, 44.28046] },
    { name: 'Colonial Resort & Spa', type: 'Motel', town: 'Gananoque', km: 284, coords: [-76.17817, 44.32645] },
    { name: 'Iroquois Motel', type: 'Motel', town: 'Iroquois', km: 378, coords: [-75.31615, 44.85174] },
    { name: 'Holiday Inn Express & Suites', type: 'Hotel', town: 'Vaudreuil-Dorion', km: 504, coords: [-74.02972, 45.41259] },
    { name: 'Marriott Courtyard West Island / Baie-d\'Urfe', type: 'Hotel', town: 'Baie-d\'Urfé', km: 514, coords: [-73.9165, 45.42654] },
  ],

  eats: [
    { name: 'Nord Lyon Cafe', type: 'Café', town: 'Toronto', km: 0, coords: [-79.39095, 43.65002] },
    { name: 'Stacked Pancake and Breakfast House', type: 'Restaurant', town: 'Oshawa', km: 56, coords: [-78.87983, 43.88158] },
    { name: 'A Stones Throw Pub & Grill', type: 'Grill', town: 'Bowmanville', km: 72, coords: [-78.7004, 43.90549] },
    { name: 'Massey House Restaurant', type: 'Restaurant', town: 'Newcastle', km: 81, coords: [-78.58811, 43.9175] },
    { name: 'Stacked Pancake & Breakfast House', type: 'Breakfast', town: 'Port Hope', km: 103, coords: [-78.32403, 43.96156] },
    { name: 'Homeplate Restaurant', type: 'Restaurant', town: 'Cobourg', km: 113, coords: [-78.19377, 43.97182] },
    { name: 'The Big Apple', type: 'Restaurant', town: 'Colborne', km: 138, coords: [-77.90585, 44.02202] },
    { name: 'Momma\'s diner', type: 'Restaurant', town: 'Quinte West', km: 167, coords: [-77.57979, 44.12651] },
    { name: 'IHOP', type: 'Breakfast', town: 'Belleville', km: 179, coords: [-77.44572, 44.17871] },
    { name: 'Napanee Fish & Chips', type: 'Fish And Chips', town: 'Napanee', km: 219, coords: [-76.96561, 44.26094] },
    { name: 'Tim Hortons', type: 'Café', town: 'Odessa', km: 244, coords: [-76.65685, 44.28326] },
    { name: 'St. Louis Bar & Grill', type: 'Chicken', town: 'Bur Creek', km: 252, coords: [-76.56888, 44.27326] },
    { name: 'St. Louis Bar & Grill', type: 'Chicken', town: 'Kingston', km: 260, coords: [-76.45176, 44.26904] },
    { name: 'Laverne\'s Eatery', type: 'Restaurant', town: 'Gananoque', km: 285, coords: [-76.16434, 44.32825] },
    { name: 'Tim Hortons', type: 'Café', town: 'Mallorytown', km: 317, coords: [-75.85765, 44.48912] },
    { name: 'Bobby\'s', type: 'Restaurant', town: 'Prescott', km: 356, coords: [-75.51278, 44.71055] },
    { name: 'Yefsi Restaurant', type: 'Italian', town: 'Iroquois', km: 378, coords: [-75.31677, 44.84885] },
    { name: 'Tim Hortons', type: 'Café', town: 'Nudell Bush', km: 401, coords: [-75.08197, 44.97124] },
    { name: 'Butler\'s Restaurant', type: 'Restaurant', town: 'Ingleside', km: 409, coords: [-74.9899, 44.9967] },
    { name: 'Tim Hortons', type: 'Café', town: 'Cornwall', km: 436, coords: [-74.68746, 45.05987] },
    { name: 'Perch and Paddle Riverfront Pub', type: 'Restaurant', town: 'South Lancaster', km: 452, coords: [-74.50647, 45.12167] },
    { name: 'Tim Hortons', type: 'Café', town: 'Rivière-Beaudette', km: 466, coords: [-74.36315, 45.20259] },
    { name: 'La Frite à Brigitte', type: 'Restaurant', town: 'Coteau-du-Lac', km: 483, coords: [-74.1781, 45.2869] },
    { name: 'La Belle & La Boeuf - Burger Bar', type: 'Restaurant', town: 'Vaudreuil-Dorion', km: 504, coords: [-74.03132, 45.41195] },
    { name: 'Pizza Hut', type: 'Pizza', town: 'Kirkland', km: 516, coords: [-73.89037, 45.4427] },
    { name: 'Green Spot', type: 'American', town: 'Montréal', km: 544, coords: [-73.5788, 45.48091] },
  ],
};

export default TORONTO_MONTREAL_EXPLORER;
