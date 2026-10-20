// Corner Brook → Gros Morne — данные страницы
// /route/corner-brook-gros-morne
// Первый маршрут региона "Newfoundland & Labrador".

import { CORNER_BROOK_GROS_MORNE_EXPLORER } from './explorer/corner-brook-gros-morne.js';

export const CORNER_BROOK_GROS_MORNE = {
  slug: 'corner-brook-gros-morne',
  name: 'Corner Brook to Gros Morne',
  region: 'Newfoundland · Viking Trail',
  tag: "Mi'kma'ki · UNESCO World Heritage",
  accentLevel: 'danger',
  backLabel: 'Back to Newfoundland & Labrador',
  backHref: '/province/nl',
  heroImage: '/nl/parks/gros-morne.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: CORNER_BROOK_GROS_MORNE_EXPLORER,
  description:
    "Two hours of highway to a place where the Earth's mantle is lying on the surface. Gros Morne is a UNESCO World Heritage Site because the rock here proved plate tectonics — the orange Tablelands are ocean floor that was pushed up onto the continent. The rest of the park is fjords, and the best one needs a three-kilometre walk and a boat.",

  badges: ['150 KM', '~2H DRIVE', 'MOOSE COUNTRY', 'UNESCO WORLD HERITAGE'],

  headlineStats: [
    { value: '150', unit: 'km', label: 'Corner Brook to Western Brook Pond' },
    { value: '~2', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '1987', unit: '', label: 'Named a UNESCO World Heritage Site' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '150 km, Corner Brook to the Western Brook Pond trailhead · Rocky Harbour, the park hub, is at 122 km' },
    { icon: 'time', label: 'Drive Time', value: '~2h non-stop · but the park needs two or three days, not an afternoon' },
    { icon: 'fuel', label: 'Fuel', value: 'Corner Brook and Deer Lake are easy. Inside the park, stations are small village operations with short off-season hours' },
    { icon: 'cell', label: 'Cell Service', value: 'Fine along the Trans-Canada · patchy on Route 430, and effectively nothing on the trails or the fjord' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada Hwy 1 to Deer Lake, then Route 430 — the Viking Trail — two-lane and coastal' },
    { icon: 'winter', label: 'Winter Driving', value: 'Route 430 stays open but gets serious wind and drifting snow off the gulf. Most park services close from October to May' },
  ],

  seasonalNotes: [
    {
      icon: '🫎',
      title: 'Moose Are the Real Hazard Here',
      text: 'Newfoundland has no native moose — the population descends from four animals introduced in 1904 and now numbers in the tens of thousands on an island with almost nothing that preys on an adult. Route 430 at dusk, night or dawn is the single most dangerous part of this trip. A moose is two metres at the shoulder, so headlights pass underneath it and you see legs, not eyes. Slow down and scan the shoulders.',
    },
    {
      icon: '🥾',
      title: 'Western Brook Pond Is Not a Viewpoint',
      text: 'The landlocked fjord everyone photographs is a 3 km walk each way from the parking lot across a bog boardwalk, and then a boat tour you need to have booked. There is no drive-up version of it. Budget half a day and buy the ticket in advance.',
    },
    {
      icon: '🧭',
      title: 'The Park Has Two Arms, and You Must Choose',
      text: 'The Tablelands and Trout River are south on Route 431; the fjords, Rocky Harbour and Cow Head are north on Route 430. They are a good hour apart on different roads. Trying to do both in one day means seeing neither properly.',
    },
  ],

  wildlifeSafety: {
    title: 'The Animal That Hurts People Here Is on the Road',
    text: 'There are black bears in the park and you should behave accordingly on the trails. But the documented injuries on this coast come from moose-vehicle collisions on the highway, not from encounters in the woods.',
    rules: [
      'Drive Route 430 slowly between dusk and dawn — this is not advice about comfort, it is the main risk on the route',
      'Scan both shoulders and the ditch line; moose step out without pausing',
      'Black bears live throughout the park — carry noise, store food, keep distance on the trails',
      'The Gros Morne Mountain trail closes in spring for caribou calving, and weather can cancel the fjord boat tours at short notice',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Mi’kmaq Land, the Beothuk Absence, and Six Villages Inside a Park',
    text: "This coast is part of Mi'kma'ki, and the Mi'kmaq are still here — the Qalipu Mi'kmaq First Nation has members throughout western Newfoundland. The island's other Indigenous people, the Beothuk, are not: the last known Beothuk, Shanawdithit, died in 1829, after disease and the loss of access to the coast destroyed the population. The park itself has a living history too. The 1973 plan would have moved 175 families; instead the boundary was drawn around six existing communities, and households in smaller coves — Woody Cove, Lobster Cove, Green Point, Belldowns Point, Bakers Brook — were compensated to move into Rocky Harbour, Norris Point and Cow Head. Sally's Cove refused to go, and is still there.",
    nations: [
      "Mi'kmaq Nation (Newfoundland Mi'kma'ki)",
      'Qalipu Mi’kmaq First Nation',
      'Beothuk — no longer a surviving people',
    ],
    authenticStop: {
      name: 'Broom Point Fishing Premises',
      text: 'A fishing station on Route 430 where the three Mudge brothers and their families worked each summer from 1941 until 1975, when they sold the whole camp — boats, traps, nets and all — to the park. The buildings are restored and staffed, so it is one family’s working life rather than a general exhibit about fishing. Check the current season before relying on it.',
    },
    note: 'The communities inside the park are not a museum display: people live in Rocky Harbour, Sally’s Cove and Cow Head, fish from them, and have opinions about the park that founded itself around their houses. Worth remembering when you drive through at speed.',
  },

  stops: [
    {
      name: 'Corner Brook',
      km: 0,
      icon: '🏙️',
      text: 'Starting point, the biggest city on the west coast, built around a pulp mill in a steep valley. Last full-service stop with real choice.',
    },
    {
      name: 'Deer Lake',
      km: 53,
      icon: '⛽',
      text: 'Where the Viking Trail leaves the Trans-Canada. Fuel, groceries and the regional airport — the practical turning point of the drive.',
    },
    {
      name: 'Wiltondale',
      km: 84,
      icon: '🧭',
      text: 'The junction that decides your trip: Route 431 south to the Tablelands and Trout River, or Route 430 north to the fjords and Rocky Harbour.',
    },
    {
      name: 'Rocky Harbour',
      km: 122,
      image: '/nl/parks/gros-morne.png',
      text: 'The park hub, on the coast — beds, food, the Lobster Cove Head lighthouse and the discovery centre. Most people base themselves here.',
    },
    {
      name: 'Western Brook Pond',
      km: 150,
      icon: '🚶',
      text: 'The parking lot for the landlocked fjord. Three kilometres of boardwalk across the bog, then the boat tour beneath cliffs roughly 600 metres high.',
    },
  ],
};

export default CORNER_BROOK_GROS_MORNE;
