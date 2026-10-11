// Winnipeg → Riding Mountain — данные страницы
// /route/winnipeg-riding-mountain
// Первый маршрут региона "Manitoba".

import { WINNIPEG_RIDING_MOUNTAIN_EXPLORER } from './explorer/winnipeg-riding-mountain.js';

export const WINNIPEG_RIDING_MOUNTAIN = {
  slug: 'winnipeg-riding-mountain',
  name: 'Winnipeg to Riding Mountain',
  region: 'Manitoba · Parkland',
  tag: 'Treaty 2 Territory',
  accentLevel: 'olive',
  backLabel: 'Back to Manitoba',
  backHref: '/province/mb',
  heroImage: '/mb/parks/riding-mountain.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: WINNIPEG_RIDING_MOUNTAIN_EXPLORER,
  description:
    'Flat prairie for two hours, and then the ground simply rises — an island of forest and lakes standing 450 metres above the wheat fields. Riding Mountain is the escarpment Manitobans drive to when they want hills, and almost nobody outside the province has heard of it.',

  badges: ['266 KM', '~3H40M DRIVE', 'BISON HERD', 'DARK SKY PRESERVE'],

  headlineStats: [
    { value: '266', unit: 'km', label: 'Winnipeg to Wasagaming' },
    { value: '~3h40', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '450', unit: 'm', label: 'The Escarpment Rises Above the Plain' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '266 km, Winnipeg to the Wasagaming townsite via Portage la Prairie and Neepawa' },
    { icon: 'time', label: 'Drive Time', value: '~3h40m non-stop · an easy half-day with a stop in Neepawa' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy along the Trans-Canada and Hwy 16 — Portage la Prairie and Neepawa both have full services' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie · patchy inside the park, especially on the north side' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada Hwy 1 then Hwy 16 (Yellowhead) and Hwy 10 · all paved, mostly flat and straight' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round, but prairie ground blizzards close highways with little warning — check Manitoba 511 before leaving' },
  ],

  seasonalNotes: [
    {
      icon: '🌬️',
      title: 'Ground Blizzards, Not Just Snowfall',
      text: 'On the open prairie, wind picks snow off the fields and erases the highway even on a clear day. Manitoba closes stretches of Hwy 1 and 16 for this several times each winter. It is not about how much snow fell — it is about the wind.',
    },
    {
      icon: '🦟',
      title: 'Mosquitoes Earn Their Reputation',
      text: 'Manitoba mosquitoes are a genuine factor from late June through August, and the park’s lakes and marshes are their heartland. Bring proper repellent, not a travel-size bottle.',
    },
    {
      icon: '🦬',
      title: 'The Bison Are Fenced — Deliberately',
      text: 'The Lake Audy bison enclosure holds a conservation herd you drive through. They are wild animals behind a fence, not livestock: stay in your vehicle and keep the windows up.',
    },
  ],

  wildlifeSafety: {
    title: 'Black Bear Country, and a Lot of Them',
    text: 'Riding Mountain has one of the denser black bear populations in Canada — the escarpment forest is ideal habitat. There are no grizzlies in Manitoba, but black bears here are numerous and used to people.',
    rules: [
      'Store food and garbage properly in the campgrounds; bears regularly test the Wasagaming area',
      'Elk and moose cross Hwy 10 through the park at dawn and dusk — this is where collisions happen',
      'Stay in the car through the Lake Audy bison range, no exceptions',
      'Ticks are common in the grassland edges from spring through midsummer — check yourself after hiking',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty 2 Land — and a Community Removed to Make a Park',
    text: 'The escarpment is the traditional territory of the Anishinaabe (Ojibwe) and Nêhiyawak (Cree), covered by Treaty 2, signed in 1871. Riding Mountain has a harder history than most parks: when it was established in 1930, the Keeseekoowenin Ojibway First Nation was forced off its reserve land inside the new park boundary and its buildings burned. The land was formally returned in 1991 — sixty years later — after a long campaign by the Nation.',
    nations: [
      'Anishinaabe (Ojibwe) Nations',
      'Keeseekoowenin Ojibway First Nation',
      'Nêhiyawak (Cree) Nations',
      'Métis Nation',
      'Treaty 2 (1871)',
    ],
    note: 'Parks Canada now acknowledges the 1930s eviction directly, which is more than many national parks do about their own founding. It is worth knowing before you arrive that the quiet forest you are driving into was cleared of its people to become quiet.',
  },

  stops: [
    {
      name: 'Winnipeg',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Head west on the Trans-Canada — the first hour is as flat as Canada gets.',
    },
    {
      name: 'Portage la Prairie',
      km: 85,
      icon: '⛽',
      text: 'Where Hwy 16, the Yellowhead, splits off northwest. Full services and the last big-box shopping of the trip.',
    },
    {
      name: 'Neepawa',
      km: 185,
      icon: '🌷',
      text: 'The lily capital of Manitoba and the hometown of novelist Margaret Laurence, whose Manawaka was this place. A reasonable lunch stop.',
    },
    {
      name: 'Onanole',
      km: 261,
      icon: '🛏️',
      text: 'The village just outside the south gate — cabins, campgrounds and cheaper beds than inside the park.',
    },
    {
      name: 'Riding Mountain — Wasagaming',
      km: 266,
      image: '/mb/parks/riding-mountain.png',
      text: 'The townsite on Clear Lake, with a log-built visitor centre from the 1930s. The bison range at Lake Audy is about 40 minutes further in.',
    },
  ],
};

export default WINNIPEG_RIDING_MOUNTAIN;
