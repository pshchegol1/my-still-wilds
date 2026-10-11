// Toronto → Bruce Peninsula — данные страницы
// /route/toronto-bruce-peninsula
// Первый маршрут региона "Ontario & the Great Lakes".

import { TORONTO_BRUCE_PENINSULA_EXPLORER } from './explorer/toronto-bruce-peninsula.js';

export const TORONTO_BRUCE_PENINSULA = {
  slug: 'toronto-bruce-peninsula',
  name: 'Toronto to the Bruce Peninsula',
  region: 'Ontario · Georgian Bay',
  tag: 'Saugeen Ojibway Territory',
  accentLevel: 'safe',
  backLabel: 'Back to Ontario',
  backHref: '/province/on',
  heroImage: '/on/parks/bruce-peninsula.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: TORONTO_BRUCE_PENINSULA_EXPLORER,
  description:
    "Ontario's turquoise-water escape — north from Toronto up Highway 6 to limestone cliffs, the Grotto and the ferry port at Tobermory. The water looks Caribbean and is cold enough to take your breath away. The parking reservation is the part people get wrong.",

  badges: ['315 KM', '~4H45M DRIVE', 'BOOK PARKING', 'COLD WATER'],

  headlineStats: [
    { value: '315', unit: 'km', label: 'Total Distance, With Stops' },
    { value: '~4h45', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '100', unit: '%', label: 'Grotto Parking Is Reservation-Only' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '315 km as driven with the Lion’s Head detour · 294 km straight to Tobermory' },
    { icon: 'time', label: 'Drive Time', value: '~4h45m non-stop · realistically a full day, or stay overnight in Tobermory' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy the whole way — Owen Sound and Wiarton are the last full-service towns before the peninsula narrows' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Owen Sound · patchy on the upper peninsula and inside the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 400 north, then Hwy 10/6 — two-lane for the last 150 km · Parks Canada entry fee at the park' },
    { icon: 'winter', label: 'Winter Driving', value: 'Hwy 6 stays open but gets lake-effect snow squalls off Georgian Bay; most park services close for winter' },
  ],

  seasonalNotes: [
    {
      icon: '🅿️',
      title: 'The Grotto Needs a Reservation',
      text: 'Parking at Cyprus Lake for the Grotto is by timed reservation only in peak season, and slots are released ahead of time and go fast. Turning up without one means being turned away at the gate — this is the single most common mistake on this trip.',
    },
    {
      icon: '🥶',
      title: 'The Water Is Genuinely Cold',
      text: 'Georgian Bay looks tropical and is not. Water temperatures stay cold well into summer, and the Grotto’s shoreline is slippery limestone with deep drop-offs. People are rescued here every season.',
    },
    {
      icon: '🚗',
      title: 'Summer Weekend Traffic',
      text: 'Hwy 400 north out of Toronto backs up badly on Friday afternoons and southbound on Sunday evenings. Leaving early, or going midweek, can save well over an hour.',
    },
  ],

  wildlifeSafety: {
    title: 'Cliffs, Not Bears, Are the Risk Here',
    text: 'There are no grizzlies on the Bruce. The real hazards are the Niagara Escarpment cliffs — unfenced limestone edges above deep water, slick when wet — and the massasauga rattlesnake, Ontario’s only venomous snake.',
    rules: [
      'Stay back from cliff edges at the Grotto and along the Bruce Trail — the rock is undercut in places and breaks away',
      'Massasauga rattlesnakes are shy and protected; give them room, watch where you put your hands and feet on warm rock',
      'Wear real shoes, not sandals — the approach to the Grotto is uneven limestone, not a path',
      'Black bears do live on the peninsula in small numbers; store food properly if you are camping',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Saugeen Ojibway Territory',
    text: 'The Bruce Peninsula — Saukiing Anishnaabekiing — is the traditional territory of the Saugeen Ojibway Nation, made up of the Chippewas of Nawash Unceded First Nation at Neyaashiinigmiing and the Saugeen First Nation. The Nation has never surrendered its claim to the surrounding waters of Lake Huron and Georgian Bay, and has pursued that claim through the Canadian courts for decades.',
    nations: [
      'Saugeen Ojibway Nation (Saukiing Anishnaabekiing)',
      'Chippewas of Nawash Unceded First Nation',
      'Saugeen First Nation',
    ],
    note: 'The peninsula is often marketed purely as a swimming and hiking destination, with little said about whose land and water it is. The Nation’s own visitor information is the better source here — worth reading before you go rather than after.',
  },

  stops: [
    {
      name: 'Toronto',
      km: 0,
      image: '/Cities/Toronto/Downtown & Financial District.jpg',
      text: 'Starting point. Get onto Hwy 400 before the Friday afternoon rush if you can — it is the difference between four hours and six.',
    },
    {
      name: 'Owen Sound',
      km: 190,
      icon: '⛽',
      text: 'The last full-service city on the route — groceries, fuel and the last reliable big-box shopping before the peninsula.',
    },
    {
      name: 'Wiarton',
      km: 220,
      icon: '🦫',
      text: 'The gateway town at the base of the peninsula, known nationally for its groundhog. Fill up here if you skipped Owen Sound.',
    },
    {
      name: "Lion's Head",
      km: 256,
      icon: '🧗',
      text: 'A short detour off Hwy 6 to white cliffs over Georgian Bay — the Bruce Trail lookout here is quieter than the Grotto and costs nothing.',
    },
    {
      name: 'Tobermory',
      km: 305,
      icon: '⚓',
      text: 'Road’s end: a small harbour town with the Chi-Cheemaun ferry to Manitoulin Island and boat tours out to Flowerpot Island.',
    },
    {
      name: 'Bruce Peninsula National Park — the Grotto',
      km: 315,
      image: '/on/parks/bruce-peninsula.png',
      text: 'The turquoise sea cave everyone comes for. Reservation-only parking at Cyprus Lake, a 30–45 minute walk in over rough limestone.',
    },
  ],
};

export default TORONTO_BRUCE_PENINSULA;
