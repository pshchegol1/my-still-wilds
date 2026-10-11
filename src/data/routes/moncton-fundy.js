// Moncton → Fundy National Park — данные страницы
// /route/moncton-fundy
// Первый маршрут региона "New Brunswick".

import { MONCTON_FUNDY_EXPLORER } from './explorer/moncton-fundy.js';

export const MONCTON_FUNDY = {
  slug: 'moncton-fundy',
  name: 'Moncton to the Bay of Fundy',
  region: 'New Brunswick · Bay of Fundy',
  tag: "Mi'kma'ki · Siknikt District",
  accentLevel: 'danger',
  backLabel: 'Back to New Brunswick',
  backHref: '/province/nb',
  heroImage: '/nb/parks/hopewell-rocks.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: MONCTON_FUNDY_EXPLORER,
  description:
    'The shortest drive on this site and the one most governed by a timetable. Ninety-odd kilometres from Moncton to the highest tides on Earth — where the same beach you walked at low tide is under four storeys of water six hours later. Check the tide chart before you check the weather.',

  badges: ['94 KM', '~1H40M DRIVE', 'TIDE-DEPENDENT', 'HIGHEST TIDES ON EARTH'],

  headlineStats: [
    { value: '94', unit: 'km', label: 'Moncton to Fundy National Park' },
    { value: '~1h40', unit: 'm', label: 'Drive Time, With Both Stops' },
    { value: '16', unit: 'm', label: 'Tidal Range in the Upper Bay' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '94 km total, Moncton to the Fundy park gate via Hopewell Rocks and Alma' },
    { icon: 'time', label: 'Drive Time', value: '~1h40m of driving · but plan the whole day around the tide table, not the clock' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy in Moncton · Alma is the last village before the park, and it is small' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along Hwy 114 · patchy on the ocean floor at Hopewell and inside the park’s valleys' },
    { icon: 'road', label: 'Road Type', value: 'Route 114 the whole way — two-lane, paved, winding through the Caledonia Hills' },
    { icon: 'winter', label: 'Winter Driving', value: 'Route 114 stays open, but Hopewell Rocks closes its ocean floor for the season and most of Alma shuts down' },
  ],

  seasonalNotes: [
    {
      icon: '🌊',
      title: 'The Tide Table Runs This Trip',
      text: 'You can only walk the ocean floor at Hopewell Rocks for a few hours either side of low tide, and the site posts the day’s safe window. Arrive at high tide and you will be looking at water where the trail was. Check the schedule and build the day backwards from it.',
    },
    {
      icon: '🥾',
      title: 'The Mud Is Real Mud',
      text: 'The sea floor at Hopewell is slick red silt, not sand. Wear shoes you are willing to ruin, or rent boots on site — flip-flops get lost in it, and the staircase back up is long.',
    },
    {
      icon: '🦟',
      title: 'Black Flies and Mosquitoes Inland',
      text: 'The coast gets a breeze; the forest trails inside Fundy National Park do not. June and early July are the worst for biting insects on the inland waterfall hikes.',
    },
  ],

  wildlifeSafety: {
    title: 'The Tide Is the Hazard Here',
    text: 'The Bay of Fundy moves roughly 160 billion tonnes of water twice a day, and it comes in faster than you expect. People have had to be rescued from the base of the rocks after losing track of time.',
    rules: [
      'Leave the ocean floor when staff say to — the posted window is not a suggestion',
      'The incoming tide fills channels behind you first, so you can be cut off while the path ahead still looks dry',
      'Cliff edges above the rocks are undercut and crumbling; stay on the viewing platforms',
      'Moose and black bears live in the park’s interior — standard distance rules on the trails',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: "Siknikt — and the Acadian Deportation",
    text: "This shore sits in Siknikt, the 'drainage area' district of Mi'kma'ki, Mi'kmaq territory, and the people here have read these tides for thousands of years. The Mi'kmaq account of the bay describes the whale Putup stirring the water — a story about the tides that predates every measurement of them. The same coast was farmed by Acadians behind dykes until the deportations of 1755, when British forces expelled them; the villages and dyked marshlands around Moncton carry both histories at once.",
    nations: [
      "Mi'kmaq Nation (Siknikt district of Mi'kma'ki)",
      'Fort Folly First Nation',
      'Acadian communities of the upper bay',
    ],
    note: 'Most signage here sells the tides as a natural wonder and stops there. The Mi\'kmaq have their own interpretation of this coast, and the Acadian dykelands you drive past are the remains of a community that was removed by force — neither is background scenery.',
  },

  stops: [
    {
      name: 'Moncton',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. The Petitcodiac River through town has its own tidal bore — a wave that runs upstream twice a day, worth timing if you are early.',
    },
    {
      name: 'Hopewell Rocks',
      km: 40,
      image: '/nb/parks/hopewell-rocks.png',
      text: 'The flowerpot rocks. Walk the sea floor at low tide, then come back at high tide to see the same spot under 12 metres of water — the ticket covers both visits in a day.',
    },
    {
      name: 'Alma',
      km: 83,
      icon: '🦞',
      text: 'A fishing village at the park gate where boats sit on mud at low tide and float at high. Last fuel, groceries and the place to eat lobster before you go in.',
    },
    {
      name: 'Fundy National Park',
      km: 94,
      image: '/nb/parks/fundy.png',
      text: 'Forest, waterfalls and the Acadian highlands behind the coast — a very different landscape from the shoreline you just drove.',
    },
  ],
};

export default MONCTON_FUNDY;
