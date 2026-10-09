// Calgary → Banff → Lake Louise — данные страницы /route/calgary-banff-lake-louise
// Пилотный маршрут региона "Alberta & the Rockies".

const BANFF = '/parks/Banff National Park';

export const CALGARY_BANFF_LAKE_LOUISE = {
  slug: 'calgary-banff-lake-louise',
  name: 'Calgary to Banff & Lake Louise',
  region: 'Alberta · Canadian Rockies',
  tag: 'Pilot Route · Treaty 7 Territory',
  accentLevel: 'blue',
  backLabel: 'Back to Alberta',
  backHref: '/province/ab',
  heroImage: `${BANFF}/Lake Louise.png`,
  description:
    "The classic first drive into the Rockies — Trans-Canada Highway from Calgary through foothills, past the Stoney Nakoda Nation, into Banff townsite, and up to the turquoise water of Lake Louise. 185 km that most visitors underestimate.",

  badges: ['185 KM', '~2H DRIVE', 'BEAR COUNTRY', 'TREATY 7 LAND'],

  passport: [
    { icon: 'distance', label: 'Distance', value: '185 km total (Calgary → Banff 128 km, Banff → Lake Louise 57 km)' },
    { icon: 'time', label: 'Drive Time', value: '~2h non-stop · realistically 3.5–4.5h with stops' },
    { icon: 'fuel', label: 'Fuel Gap', value: '57 km Banff → Lake Louise with no gas stations — fill up in Banff' },
    { icon: 'cell', label: 'Cell Service', value: 'Strong Calgary–Canmore–Banff · patchy to none in valleys beyond Banff' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada Hwy 1, paved, 2–4 lanes · Parks Canada entry pass required' },
    { icon: 'winter', label: 'Winter Driving', value: 'Nov–Apr: winter tires required, possible closures in heavy snow' },
  ],

  seasonalNotes: [
    {
      icon: '🦟',
      title: 'Mosquitoes',
      text: 'Worst June–July near water — Lake Louise and Moraine Lake especially. Bring real repellent, not the travel-size one.',
    },
    {
      icon: '🌦️',
      title: 'Mountain Weather',
      text: 'Can change in 20 minutes. Snow is possible at elevation even in July. Pack a rain shell and a warm layer regardless of the forecast.',
    },
    {
      icon: '🅿️',
      title: 'Parking Reality',
      text: 'Lake Louise and Moraine Lake lots fill before sunrise in July–August. Since 2023 much of Moraine Lake Rd is shuttle/Roam-bus only for personal vehicles.',
    },
  ],

  wildlifeSafety: {
    title: 'This Is Bear Country',
    text: "Grizzly and black bears are present along the entire corridor. Bear spray isn't needed for the drive itself, but is essential for any trail from the road — including short viewpoint walks.",
    rules: [
      'Elk, deer, and bighorn sheep cross the highway constantly at dawn and dusk — the #1 cause of collisions in the park',
      'Never stop in the travel lane for wildlife photos — "bear jams" cause real accidents; use a pullout',
      'Keep 100m from bears and wolves, 30m from elk and sheep — closer than that is a ticket, not just a risk',
      'Store all food in the trunk, not the cabin, even for a short stop',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: "You're Driving Through Treaty 7 Territory",
    text: "This corridor crosses land that has been home to the Niitsitapi (Blackfoot Confederacy), the Îyâxe Nakoda (Stoney Nakoda Nation), the Tsuut'ina Nation, and the Métis Nation of Alberta long before the Trans-Canada Highway existed. Treaty 7, signed in 1877, covers the ground from Calgary through the foothills and into the mountains.",
    nations: [
      'Niitsitapi / Blackfoot Confederacy (Siksika, Piikani, Kainai)',
      'Îyâxe Nakoda / Stoney Nakoda Nation (Chiniki, Bearspaw, Wesley)',
      "Tsuut'ina Nation",
      'Métis Nation of Alberta, Region 3',
    ],
    authenticStop: {
      name: "Mînî Thnî (Morley) — Stoney Nakoda Nation",
      text: "Sits directly on Hwy 1 between Calgary and Canmore — not a detour. Home to the Chiniki, Bearspaw, and Wesley bands of the Stoney Nakoda. Stoney Nakoda Resort is Indigenous-owned; worth stopping rather than driving straight through.",
    },
    note: "Banff's Buffalo Nations Luxton Museum displays Indigenous artifacts but was founded by a non-Indigenous collector — some Stoney Nakoda community members have raised concerns about how it represents their history. The Cave and Basin National Historic Site in Banff gives a more direct account of the site's significance to the Stoney Nakoda before the hot springs were turned into a tourist attraction.",
  },

  stops: [
    {
      name: 'Calgary',
      km: 0,
      image: '/Cities/Calgary/Downtown & Beltline.png',
      text: 'Starting point — fill up the tank, the next guaranteed gas is Canmore, over an hour away.',
    },
    {
      name: 'Mînî Thnî (Morley) — Stoney Nakoda Nation',
      km: 60,
      icon: '🪶',
      cultural: true,
      text: 'Right on the highway. Stoney Nakoda Resort, and a chance to see the community rather than just drive past the reserve sign.',
    },
    {
      name: 'Canmore',
      km: 105,
      icon: '⛽',
      text: 'Last major town with full services before the national park gate — gas, groceries, and mountain views without park-gate crowds.',
    },
    {
      name: 'Banff',
      km: 128,
      image: `${BANFF}/Town of Banff.png`,
      text: 'Parks Canada entry pass checkpoint. Last gas station before the 57 km gap to Lake Louise — fill up here.',
    },
    {
      name: 'Lake Louise',
      km: 185,
      image: `${BANFF}/Lake Louise.png`,
      text: "The turquoise finish line. Arrive before 7am in summer or take the shuttle — the parking lot fills before sunrise.",
    },
  ],
};

export default CALGARY_BANFF_LAKE_LOUISE;
