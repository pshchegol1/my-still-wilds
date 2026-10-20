// Québec → Mingan Archipelago — данные страницы
// /route/quebec-city-mingan
// Третий маршрут региона "Quebec" — Côte-Nord.

import { QUEBEC_CITY_MINGAN_EXPLORER } from './explorer/quebec-city-mingan.js';

export const QUEBEC_CITY_MINGAN = {
  slug: 'quebec-city-mingan',
  name: 'Québec City to Mingan',
  region: 'Québec · Côte-Nord',
  tag: 'Nitassinan · Innu Territory',
  accentLevel: 'caution',
  backLabel: 'Back to Quebec',
  backHref: '/province/qc',
  heroImage: '/qc/parks/mingan-archipelago.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: QUEBEC_CITY_MINGAN_EXPLORER,
  description:
    'The longest drive on this site: 865 kilometres up the north shore to a chain of limestone islands carved by the sea into mushrooms and towers. Route 138 is the only road, it follows the water the whole way, and it eventually stops — Mingan is where most people turn around, and the pavement itself gives out not far beyond.',

  badges: ['865 KM', '~12H DRIVE', 'BOAT FOR THE ISLANDS', 'ONE ROAD IN'],

  headlineStats: [
    { value: '865', unit: 'km', label: 'Québec City to Havre-Saint-Pierre' },
    { value: '~12', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '1,000+', unit: '', label: 'Islands, Islets and Reefs' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '865 km, Québec City to Havre-Saint-Pierre via Tadoussac, Baie-Comeau and Sept-Îles' },
    { icon: 'time', label: 'Drive Time', value: '~12h non-stop · a two-day drive, minimum, and worth three with the whales at Tadoussac' },
    { icon: 'fuel', label: 'Fuel', value: 'Fine to Sept-Îles. The 220 km from there to Havre-Saint-Pierre is the thinnest stretch — fill up in Sept-Îles whatever the gauge reads' },
    { icon: 'cell', label: 'Cell Service', value: 'Good in the towns, long dead stretches between them, and nothing on the water' },
    { icon: 'road', label: 'Road Type', value: 'Route 138 the entire way — two-lane, coastal, and the only road there is' },
    { icon: 'winter', label: 'Winter Driving', value: 'Route 138 is maintained but closes in storms with no alternative route. The park operates roughly mid-June to early September' },
  ],

  seasonalNotes: [
    {
      icon: '⛴️',
      title: 'The Park Is Islands — Book a Boat',
      text: 'Nothing in this park is reachable by car. Boats leave from Longue-Pointe-de-Mingan for the western islands and the puffins, and from Havre-Saint-Pierre for the eastern islands and the famous monoliths. Trips run a short summer season and fill up. Book before you drive twelve hours.',
    },
    {
      icon: '🛣️',
      title: 'One Road, No Detour',
      text: 'Route 138 is the only land connection along this coast. If it closes for weather, a slide or an accident, there is no parallel route and no way around — you wait. Check Québec 511 before each leg rather than assuming you can improvise.',
    },
    {
      icon: '🐦',
      title: 'Puffins and Monoliths Are Different Trips',
      text: 'Île aux Perroquets and the puffin colonies are off Longue-Pointe; the eroded limestone monoliths people come to photograph are on Niapiskau and Quarry, out of Havre-Saint-Pierre. They are 50 km apart on the mainland and separate boat tours. Pick deliberately or allow two days.',
    },
  ],

  wildlifeSafety: {
    title: 'Cold Water and a Long Way From Anywhere',
    text: 'There is little on these islands that threatens you. What makes this trip serious is distance: you are hundreds of kilometres from a hospital on a single road, on water that is cold enough year-round to matter.',
    rules: [
      'The Gulf of St. Lawrence stays cold all summer — in a small boat, dress for immersion, not for the air temperature',
      'Weather cancels island crossings at short notice; build a spare day into the trip rather than a tight schedule',
      'Nesting seabird colonies are closed to landing in season — the boat operators know the rules, follow them',
      'Moose and black bear are on Route 138 at dawn and dusk across the whole north shore',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Nitassinan — Why It Is Still Called a Reserve',
    text: 'This coast is Nitassinan, the homeland of the Innu, and the Innu community of Ekuanitshit sits directly on Route 138 between Longue-Pointe-de-Mingan and Havre-Saint-Pierre. The park’s formal name is a National Park Reserve, and the word reserve is not decoration: in Canada that designation is used where Indigenous land claims remain unsettled, so the islands are protected under an arrangement that explicitly leaves the question of title open. The archipelago has been part of Innu travel, fishing and hunting for thousands of years, and the whole drive crosses territory where those claims are live.',
    nations: [
      'Innu Nation — Nitassinan',
      'Ekuanitshit (Mingan) Innu community',
      'Nutashkuan and Uashat mak Mani-utenam Innu communities',
    ],
    authenticStop: {
      name: 'Ekuanitshit',
      text: 'The Innu community at Mingan, on the road between the two boat departure points. Visiting respectfully — rather than driving past it to photograph the islands offshore — is the difference between seeing the landscape and seeing whose landscape it is.',
    },
    note: 'Most coverage of Mingan is about the rock formations. The reason the park is a "reserve" rather than a park is a legal fact about unresolved Innu title, and it is printed on the sign at the entrance if you read it.',
  },

  stops: [
    {
      name: 'Québec City',
      km: 0,
      icon: '🏛️',
      text: 'Starting point. North shore of the St. Lawrence on Route 138 — the road you will be on for the next twelve hours.',
    },
    {
      name: 'Tadoussac',
      km: 215,
      icon: '🐋',
      text: 'Where the Saguenay fjord meets the river and the whale watching is among the best in the world. Worth a day in its own right, not a photo stop.',
    },
    {
      name: 'Baie-Comeau',
      km: 413,
      icon: '⛽',
      text: 'An industrial town built on hydroelectric power and aluminium. Full services and a reasonable overnight if you are splitting the drive here.',
    },
    {
      name: 'Sept-Îles',
      km: 646,
      icon: '🛏️',
      text: 'The last city on the coast, an iron-ore port and the practical base before the final stretch. Fill up and stock up properly.',
    },
    {
      name: 'Havre-Saint-Pierre',
      km: 865,
      image: '/qc/parks/mingan-archipelago.png',
      text: 'The fishing town at the end of the drive, and the departure point for the eastern islands and their monoliths.',
    },
  ],
};

export default QUEBEC_CITY_MINGAN;
