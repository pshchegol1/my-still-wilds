// Corner Brook → L'Anse aux Meadows — данные страницы
// /route/corner-brook-lanse-aux-meadows
// Второй маршрут региона "Newfoundland & Labrador" — продолжение Viking Trail.

import { CORNER_BROOK_LANSE_AUX_MEADOWS_EXPLORER } from './explorer/corner-brook-lanse-aux-meadows.js';

export const CORNER_BROOK_LANSE_AUX_MEADOWS = {
  slug: 'corner-brook-lanse-aux-meadows',
  name: "Corner Brook to L'Anse aux Meadows",
  region: 'Newfoundland · The Viking Trail',
  tag: 'UNESCO World Heritage · The Norse Landing',
  accentLevel: 'danger',
  backLabel: 'Back to Newfoundland & Labrador',
  backHref: '/province/nl',
  heroImage: '/nl/parks/lanse-aux-meadows.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: CORNER_BROOK_LANSE_AUX_MEADOWS_EXPLORER,
  description:
    'Five hundred and forty kilometres up the Great Northern Peninsula to the only confirmed Norse settlement in North America. Tree-ring dating puts Norse axes cutting wood here in the year 1021 — four and a half centuries before Columbus. The drive is long, lonely and genuinely dangerous at night, and the thing at the end of it is unmatched anywhere on the continent.',

  badges: ['539 KM', '~7H30M DRIVE', 'MOOSE COUNTRY', 'DATED TO AD 1021'],

  headlineStats: [
    { value: '539', unit: 'km', label: "Corner Brook to L'Anse aux Meadows" },
    { value: '~7h30', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '1021', unit: 'AD', label: 'The Year the Norse Cut Wood Here' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: "539 km, Corner Brook to L'Anse aux Meadows via Deer Lake, Port au Choix and St. Anthony" },
    { icon: 'time', label: 'Drive Time', value: '~7h30m non-stop · this is a two-day trip in practice, and Gros Morne is on the way' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill in Deer Lake, then treat every open station on Route 430 as the one you use. Communities thin out badly north of Port au Choix and hours are short off-season' },
    { icon: 'cell', label: 'Cell Service', value: 'Patchy for most of the peninsula and gone in long stretches between communities. Do not plan on it' },
    { icon: 'road', label: 'Road Type', value: 'Route 430, the Viking Trail — two-lane, paved, exposed to the Gulf the whole way' },
    { icon: 'winter', label: 'Winter Driving', value: 'The road stays open but gets serious drifting and whiteouts. The Norse site itself closes outside roughly June to early October' },
  ],

  seasonalNotes: [
    {
      icon: '🫎',
      title: 'Do Not Drive This Road After Dark',
      text: 'Seven and a half hours on a two-lane highway through the densest moose country in the province. This is the single most important thing on this page. A moose stands taller than your headlights, so you see legs, not eyes, and at highway speed the body comes through the windscreen. Plan to arrive before dusk, every time.',
    },
    {
      icon: '📅',
      title: 'The Site Has a Short Season',
      text: 'L’Anse aux Meadows opens roughly June to early October, with the costumed interpretation and the reconstructed sod buildings only staffed in that window. Drive seven hours in May and you may reach a locked gate and a view of grassy mounds.',
    },
    {
      icon: '🧊',
      title: 'Icebergs Are Luck, Not a Schedule',
      text: 'Late May into June is iceberg season along this coast and it can be extraordinary — but it depends entirely on the year’s ice. Treat an iceberg as a bonus, not a reason to book the trip.',
    },
  ],

  wildlifeSafety: {
    title: 'The Hazard Is the Highway',
    text: 'Newfoundland’s moose were introduced and have almost nothing that preys on an adult, so the population on this peninsula is very high. Moose-vehicle collisions on Route 430 are the documented danger on this route — not bears, not the coast.',
    rules: [
      'Never drive Route 430 between dusk and dawn if you can avoid it — break the trip at Rocky Harbour or Port au Choix instead',
      'Scan both ditches continuously, and slow right down through the brush-lined cuts where moose step out',
      'Carry food, water and warm layers: a breakdown here can mean a long wait with no cell signal',
      'Black bears live on the peninsula — standard food storage and distance rules on the trails',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'The Year 1021, and the People Who Were Already Here',
    text: 'Helge and Anne Stine Ingstad came in 1960 and local residents led them to grass-covered mounds nobody outside had explained. Anne Stine Ingstad’s excavations from 1961 to 1968 proved the site was Norse: eight sod-and-timber buildings and more than eight hundred Norse objects. It became a National Historic Site in 1968 and a UNESCO World Heritage Site in 1978. In 2021 a study in Nature used a cosmic-ray spike recorded in tree rings worldwide in 993 to count outward and date wood cut here with metal tools to exactly AD 1021. What the Norse found was not an empty coast — this peninsula had been home to Indigenous peoples for thousands of years before they arrived, and the Dorset site at Port au Choix on the way north makes that unmistakable.',
    nations: [
      "Mi'kmaq Nation (Newfoundland Mi'kma'ki)",
      'Dorset and Maritime Archaic peoples — Port au Choix',
      'Beothuk — no longer a surviving people',
      'Inuit of Labrador, across the strait',
    ],
    authenticStop: {
      name: 'Port au Choix National Historic Site',
      text: 'At the 286 km mark and worth stopping for: burial grounds and settlement sites of the Maritime Archaic, Dorset and Groswater peoples going back some 5,500 years. It is older than the Norse site by thousands of years and gets a fraction of the visitors.',
    },
    note: 'The site is usually told as the moment Europeans "reached" North America. It is more accurate as the moment two populations that had circled the globe in opposite directions finally met — and the people already living here had done the longer journey.',
  },

  stops: [
    {
      name: 'Corner Brook',
      km: 0,
      icon: '🏙️',
      text: 'Starting point on the west coast. Stock up properly — the choices get narrower from here north.',
    },
    {
      name: 'Deer Lake',
      km: 53,
      icon: '⛽',
      text: 'Where the Viking Trail leaves the Trans-Canada. Last fully reliable fuel and groceries before the peninsula.',
    },
    {
      name: 'Port au Choix',
      km: 286,
      icon: '🪨',
      text: 'A fishing town on a limestone headland with 5,500 years of burial and settlement sites. The natural overnight stop and the best reason to break the drive.',
    },
    {
      name: 'St. Anthony',
      km: 498,
      icon: '🏥',
      text: 'The service centre of the northern peninsula — fuel, beds, food and the Grenfell mission hospital that shaped this coast.',
    },
    {
      name: "L'Anse aux Meadows",
      km: 539,
      image: '/nl/parks/lanse-aux-meadows.png',
      text: 'The end of the road and the end of the Norse westward expansion: sod building outlines on a windswept bay, with reconstructions alongside them.',
    },
  ],
};

export default CORNER_BROOK_LANSE_AUX_MEADOWS;
