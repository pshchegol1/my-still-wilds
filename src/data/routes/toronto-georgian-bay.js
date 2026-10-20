// Toronto → Georgian Bay Islands National Park — данные страницы
// /route/toronto-georgian-bay
// Третий маршрут региона "Ontario".

import { TORONTO_GEORGIAN_BAY_EXPLORER } from './explorer/toronto-georgian-bay.js';

export const TORONTO_GEORGIAN_BAY = {
  slug: 'toronto-georgian-bay',
  name: 'Toronto to Georgian Bay Islands',
  region: 'Ontario · Georgian Bay',
  tag: 'Anishinaabe · Beausoleil Island',
  accentLevel: 'blue',
  backLabel: 'Back to Ontario',
  backHref: '/province/on',
  heroImage: '/on/parks/georgian-bay-islands.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: TORONTO_GEORGIAN_BAY_EXPLORER,
  description:
    'Three hours north to the edge of the Canadian Shield, where the pink granite drops straight into the water and the pines grow sideways out of the rock. The park is sixty-three islands and no roads — the drive ends at a dock in Honey Harbour, and a fifteen-minute boat finishes the job.',

  badges: ['189 KM', '~3H DRIVE', 'BOAT REQUIRED', 'RATTLESNAKE COUNTRY'],

  headlineStats: [
    { value: '189', unit: 'km', label: 'Toronto to Honey Harbour' },
    { value: '~3', unit: 'h', label: 'Drive Time, Traffic Depending' },
    { value: '63', unit: '', label: 'Islands in the Park' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '189 km, Toronto to the Honey Harbour dock via Barrie and Port Severn' },
    { icon: 'time', label: 'Drive Time', value: '~3h with normal traffic · summer Friday afternoons northbound on Hwy 400 can add an hour or more' },
    { icon: 'fuel', label: 'Fuel', value: 'No concern — Hwy 400 is lined with service centres the whole way' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Honey Harbour · patchy on the islands and in the back bays' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 400 north, then Muskoka Road 5 into Honey Harbour · all paved, four-lane most of the way' },
    { icon: 'winter', label: 'Winter Driving', value: 'Hwy 400 is a snow-squall corridor off Georgian Bay — whiteouts close it most winters. The park’s boat service runs only May to October anyway' },
  ],

  seasonalNotes: [
    {
      icon: '⛴️',
      title: 'Book the Boat Before You Book the Day',
      text: 'The DayTripper shuttle from Honey Harbour to Beausoleil Island takes about fifteen minutes, runs roughly Victoria Day to Thanksgiving, and needs a reservation. Day visitors get about four hours on the island, and bikes and kayaks are not allowed aboard. Without a booking or a water taxi, you have driven three hours to look at a dock.',
    },
    {
      icon: '🚗',
      title: 'Highway 400 Is the Real Variable',
      text: 'This is cottage country traffic. Northbound Friday afternoon and southbound Sunday evening in summer are the worst stretches of highway in the province, and the drive can swing from two and a half hours to four and a half. Leave early or go midweek.',
    },
    {
      icon: '🐍',
      title: 'This Is the Massasauga’s Stronghold',
      text: 'Eastern Georgian Bay is the core remaining habitat of the eastern massasauga rattlesnake, Ontario’s only venomous snake. On Beausoleil it is genuinely common. It is shy and it wants nothing to do with you — but watch where you step on warm granite and keep dogs on a leash.',
    },
  ],

  wildlifeSafety: {
    title: 'A Snake Worth Respecting, and Water Worth Fearing',
    text: 'Black bears swim between these islands and do turn up, but the two things that actually catch people out are a venomous snake at the top of its range and open Georgian Bay water that builds dangerous waves fast.',
    rules: [
      'Give any massasauga room and let it leave — it is a threatened species, and bites almost always follow someone trying to handle or kill one',
      'Keep dogs leashed on the island trails; dogs account for a disproportionate share of snake encounters',
      'Georgian Bay can go from flat to whitecaps in under an hour — in a small boat, check the marine forecast, not the land one',
      'Poison ivy is widespread on Beausoleil, including beside the main trails',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'An Island People Named After an Island They Had to Leave',
    text: 'Georgian Bay is Anishinaabe territory, and Beausoleil Island itself is a National Historic Site for what happened on it. Chief John Assance’s people settled there from 1842, but the soil was too thin for the farming the Crown expected of them. Families began leaving for Christian Island within a couple of years, most had followed by the early 1850s, and in 1856 Beausoleil and the other Georgian Bay islands were surrendered to the Crown. The community that formed on Christian Island is the Beausoleil First Nation today — still carrying the name of the island it was pushed off.',
    nations: [
      'Beausoleil First Nation',
      'Anishinaabe (Ojibwe, Odawa, Potawatomi) Nations',
      'Huron-Wendat Nation',
    ],
    authenticStop: {
      name: 'Sainte-Marie among the Hurons, Midland',
      text: 'On the route at Midland: a reconstruction of the 1639 French Jesuit mission in Wendat territory, and the place to understand that this bay was a centre of the Wendat confederacy long before it was cottage country. It is a reconstruction, not the original — but it is honest about being one.',
    },
    note: 'You will see the park marketed through Group of Seven paintings of windswept pines. Those paintings are of a landscape that had already been cleared of the people who lived on it — the surrender was in 1856, the paintings came sixty years later.',
  },

  stops: [
    {
      name: 'Toronto',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Hwy 400 north — the first forty minutes are the slowest part of the drive.',
    },
    {
      name: 'Barrie',
      km: 95,
      icon: '⛽',
      text: 'On Lake Simcoe, the halfway mark and the last big-city services. A reasonable place to stop before the landscape changes.',
    },
    {
      name: 'Midland',
      km: 148,
      icon: '⛪',
      text: 'A worthwhile detour off the highway for Sainte-Marie among the Hurons and the Wendat history of this shore.',
    },
    {
      name: 'Honey Harbour',
      km: 189,
      image: '/on/parks/georgian-bay-islands.png',
      text: 'The end of the road and the start of the park. The Parks Canada dock, the DayTripper boat, and the water taxis that serve the other islands.',
    },
  ],
};

export default TORONTO_GEORGIAN_BAY;
