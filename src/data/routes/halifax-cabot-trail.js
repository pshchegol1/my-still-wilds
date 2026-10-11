// Halifax → Cape Breton Highlands (Cabot Trail) — данные страницы
// /route/halifax-cabot-trail
// Первый маршрут региона "Atlantic Canada".

export const HALIFAX_CABOT_TRAIL = {
  slug: 'halifax-cabot-trail',
  name: 'Halifax to the Cabot Trail',
  region: 'Nova Scotia · Cape Breton',
  tag: "Unama'ki · Mi'kma'ki",
  accentLevel: 'danger',
  backLabel: 'Back to Nova Scotia',
  backHref: '/province/ns',
  heroImage: '/ns/parks/cape-breton-highlands.png',
  description:
    "Canada's most famous coastal drive, and it starts a long way from the coast — 350 km of Nova Scotia before you even reach Cape Breton, then the Cabot Trail climbing straight up the headlands of Cape Breton Highlands National Park. Nobody does this in a day.",

  badges: ['545 KM', '~7H45M DRIVING', '2–3 DAYS', 'MOOSE COUNTRY'],

  headlineStats: [
    { value: '545', unit: 'km', label: 'Halifax to Chéticamp, the Long Way' },
    { value: '~7h45', unit: 'm', label: 'Pure Driving Time' },
    { value: '13', unit: '%', label: 'Steepest Grade on French Mountain' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '545 km total — 350 km Halifax to Baddeck, then ~200 km around the Cabot Trail through the park' },
    { icon: 'time', label: 'Drive Time', value: '~7h45m of driving · genuinely a 2–3 day trip, not a day trip' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill up in Baddeck or Chéticamp — stations inside the highlands are few and keep short off-season hours' },
    { icon: 'cell', label: 'Cell Service', value: 'Fine along Hwy 102/105 · patchy to none on the highlands plateau and in the park’s river valleys' },
    { icon: 'road', label: 'Road Type', value: 'Divided highway to the Canso Causeway, then two-lane · the Cabot Trail has steep grades and tight switchbacks' },
    { icon: 'winter', label: 'Winter Driving', value: 'The Cabot Trail stays open but is exposed and icy; most park services, restaurants and inns close roughly late October to May' },
  ],

  seasonalNotes: [
    {
      icon: '🫎',
      title: 'Moose on the Road',
      text: 'The highlands hold one of the densest moose populations in the Maritimes, and the Cabot Trail runs straight through it. A moose weighs more than your car and its eyes do not reflect headlights the way a deer’s do. Dawn, dusk and night driving here are a real risk.',
    },
    {
      icon: '🍂',
      title: 'Fall Colour Crowds',
      text: 'Late September and October are the best weeks and the busiest. Inns along the trail book out months ahead for the Celtic Colours festival and leaf season — if you want to go then, reserve early or stay in Baddeck and drive in.',
    },
    {
      icon: '🚐',
      title: 'Which Way Around',
      text: 'Driving the loop clockwise keeps you on the inside lane away from the cliff edge; counter-clockwise puts you on the ocean side with the better views and the harder nerves. Neither is wrong — just decide before French Mountain, not on it.',
    },
  ],

  wildlifeSafety: {
    title: 'Steep Grades and Big Animals',
    text: 'French Mountain and MacKenzie Mountain climb to around 450 m on grades reaching 13%, with switchbacks and few guardrails. Combine that with moose and fog rolling in off the Gulf and this road demands your full attention.',
    rules: [
      'Use a low gear on the descents rather than riding the brakes — brake fade on MacKenzie Mountain is a known problem',
      'Slow right down at dawn, dusk and after dark: moose stand in the road and do not move',
      'Pull into the marked lookouts for photos — stopping on the shoulder of a switchback is how collisions happen here',
      'Black bears and coyotes live in the park; store food properly and keep dogs leashed',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: "Unama'ki — and Three Living Cultures",
    text: "Cape Breton is Unama'ki, one of the seven districts of Mi'kma'ki, the ancestral territory of the Mi'kmaq, who have been here for thousands of years and still live in five communities on the island — Eskasoni, Membertou, Wagmatcook, We'koqma'q and Potlotek. The Cabot Trail also runs through Acadian Chéticamp, where French is the everyday language, and past Gaelic-speaking communities settled by Highland Scots cleared from their own land. Three cultures, none of them a museum piece.",
    nations: [
      "Mi'kmaq Nation (Unama'ki)",
      'Eskasoni, Membertou, Wagmatcook, We’koqma’q and Potlotek',
      'Acadian communities (Chéticamp)',
      'Gaelic-speaking Cape Breton communities',
    ],
    authenticStop: {
      name: 'Eskasoni Cultural Journeys, Goat Island',
      text: "Eskasoni is the largest Mi'kmaw community in the world, and the guided trail on Goat Island is run by the community itself — not a performance staged for buses. It sits off the Bras d'Or Lake, a short detour from the Baddeck leg rather than a separate trip.",
    },
    note: "The trail is named for John Cabot, on the contested assumption he landed here in 1497. Plenty of local signage treats that as settled fact; the Mi'kmaq were already here, and had been for millennia.",
  },

  stops: [
    {
      name: 'Halifax',
      km: 0,
      icon: '⚓',
      text: 'Starting point. Hwy 102 north out of the city — the first two hours are ordinary highway, so save your energy for later.',
    },
    {
      name: 'Truro',
      km: 94,
      icon: '⛽',
      text: 'The crossroads of Nova Scotia and a sensible first break. Tidal bore viewing on the Salmon River if the timing happens to line up.',
    },
    {
      name: 'Canso Causeway',
      km: 261,
      icon: '🌊',
      text: 'The rock causeway onto Cape Breton Island — the deepest in the world when it was built. From here the landscape starts to change.',
    },
    {
      name: 'Baddeck',
      km: 346,
      icon: '🏨',
      text: 'The traditional start and end of the Cabot Trail loop, on the Bras d’Or Lake. Most people sleep here before driving the trail — do that.',
    },
    {
      name: 'Ingonish',
      km: 438,
      icon: '🏌️',
      text: 'The park’s eastern entrance, with the Highland Links golf course and a beach where a freshwater lake and the Atlantic are separated by a sandbar.',
    },
    {
      name: 'Chéticamp & Cape Breton Highlands',
      km: 545,
      image: '/ns/parks/cape-breton-highlands.png',
      text: 'Over the highlands plateau and down French Mountain into Acadian Chéticamp — the stretch the postcards are made of, and the one that demands the most of your brakes.',
    },
  ],
};

export default HALIFAX_CABOT_TRAIL;
