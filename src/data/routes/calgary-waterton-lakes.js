// Calgary → Waterton Lakes National Park — данные страницы
// /route/calgary-waterton-lakes
// Четвёртый маршрут региона "Alberta & the Rockies".

import { CALGARY_WATERTON_LAKES_EXPLORER } from './explorer/calgary-waterton-lakes.js';

export const CALGARY_WATERTON_LAKES = {
  slug: 'calgary-waterton-lakes',
  name: 'Calgary to Waterton Lakes',
  region: 'Alberta · Canadian Rockies',
  tag: 'Southern Rockies · Peace Park',
  accentLevel: 'safe',
  backLabel: 'Back to Alberta',
  backHref: '/province/ab',
  heroImage: '/ab/parks/waterton-lakes.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: CALGARY_WATERTON_LAKES_EXPLORER,
  description:
    "South past Fort Macleod to the windiest park in the Canadian Rockies — small, quiet, and shared across the US border as the world's first International Peace Park. Fewer crowds than Banff, considerably more wind. A direct run is 271 km; the detour to Head-Smashed-In Buffalo Jump most people make is worth the extra driving.",

  badges: ['331 KM', '~4H45M DRIVE', 'WINDIEST PARK', 'PEACE PARK'],

  headlineStats: [
    { value: '331', unit: 'km', label: 'Total Distance, With Stops' },
    { value: '1932', unit: '', label: 'Int’l Peace Park Est.' },
    { value: '38', unit: '%', label: 'Park Burned, 2017 Kenow Fire' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '331 km as driven with the Head-Smashed-In detour · 271 km if you go straight to Waterton on Hwy 2 and Hwy 6' },
    { icon: 'time', label: 'Drive Time', value: '~4h45m non-stop with the detour · ~3h30m if you skip it' },
    { icon: 'fuel', label: 'Fuel Gap', value: 'Last reliable stop before the park is Pincher Creek, ~57 km out — fill up there' },
    { icon: 'cell', label: 'Cell Service', value: 'Solid along Hwy 2 · patchy once inside the park itself' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (divided highway) then Hwy 3/6, paved throughout · Parks Canada entry pass required' },
    { icon: 'winter', label: 'Winter Driving', value: 'Most park services and the Prince of Wales Hotel close roughly Oct–May; Chief Mountain border crossing closes for winter entirely' },
  ],

  seasonalNotes: [
    {
      icon: '💨',
      title: 'This Park Is Genuinely Windy',
      text: "Waterton holds the title of windiest place in the Canadian Rockies — chinook gusts regularly top 100 km/h. Secure anything loose, and don't be surprised if a patio umbrella becomes a hazard.",
    },
    {
      icon: '🔥',
      title: '2017 Kenow Wildfire',
      text: "About 38% of the park burned in the 2017 Kenow fire. Much of the regrowth is now visible as young forest — striking rather than bleak, but don't expect untouched old growth everywhere.",
    },
    {
      icon: '🏨',
      title: 'Prince of Wales Hotel Season',
      text: "The iconic 1927 hotel on the bluff above the lake operates seasonally, roughly June through September. Outside that window it's closed, though still worth the view from outside.",
    },
  ],

  wildlifeSafety: {
    title: 'Bears, Cougars, and a Busy Highway',
    text: 'Both grizzly and black bears are present throughout the park, along with a healthy cougar population. Hwy 2 itself sees frequent deer and elk crossings at dawn and dusk.',
    rules: [
      'Keep 100m from bears and cougars, 30m from elk and deer — Waterton enforces this as strictly as Banff does',
      'Store food in the trunk at trailheads, not the cabin, even for a short stop',
      'Slow down on Hwy 2 at dawn and dusk — wildlife-vehicle collisions are common on this stretch',
      'High winds can make exposed ridge trails genuinely dangerous — check conditions before committing to anything above the treeline',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Blackfoot and Ktunaxa Territory',
    text: 'Waterton Lakes sits within traditional territory of the Blackfoot Confederacy — particularly the Kainai (Blood Tribe), whose reserve lies just east of the park — and the Ktunaxa Nation, who historically crossed the mountains here via the South Kootenay Pass. The route down from Calgary passes directly by one of the most significant Indigenous heritage sites in North America.',
    nations: [
      'Kainai Nation / Blood Tribe (Blackfoot Confederacy)',
      'Siksika & Piikani Nations (Blackfoot Confederacy)',
      'Ktunaxa Nation',
    ],
    authenticStop: {
      name: 'Head-Smashed-In Buffalo Jump, near Fort Macleod',
      text: 'A UNESCO World Heritage Site and one of the oldest, best-preserved buffalo jumps in North America, used for nearly 6,000 years. The interpretive centre is built into the cliff itself and developed with Blackfoot involvement — a genuine stop, not a short detour, since it sits right off the route.',
    },
  },

  stops: [
    {
      name: 'Calgary',
      km: 0,
      image: '/Cities/Calgary/Downtown & Beltline.png',
      text: "Starting point, heading south on Hwy 2 — a straight, fast run through ranch country before the mountains reappear near Waterton.",
    },
    {
      name: 'Head-Smashed-In Buffalo Jump',
      km: 184,
      icon: '🪶',
      cultural: true,
      text: 'The authentic stop on this route — see the Culture section above. Worth 1.5–2 hours, and the reason this drive is 331 km instead of 271.',
    },
    {
      name: 'Fort Macleod',
      km: 207,
      icon: '🏛️',
      text: 'Back on route after the detour — Alberta’s oldest settlement west of Medicine Hat, with a restored 1912 downtown worth a short walk.',
    },
    {
      name: 'Pincher Creek',
      km: 258,
      icon: '⛽',
      text: 'Last town with full services before the park gate — this is where you fill the tank, not Waterton townsite.',
    },
    {
      name: 'Waterton Townsite & Prince of Wales Hotel',
      km: 315,
      icon: '🏨',
      text: 'The historic 1927 hotel sits on a windswept bluff above the lake — one of the most photographed views in Alberta, even from the parking lot.',
    },
    {
      name: 'Cameron Lake',
      km: 331,
      image: '/ab/parks/waterton-lakes.png',
      text: 'A short drive from the townsite, right against the US border — glacier-fed, still, and usually far quieter than the lakeshore in town.',
    },
  ],
};

export default CALGARY_WATERTON_LAKES;
