// Edmonton → Elk Island National Park — данные страницы
// /route/edmonton-elk-island
// Самый короткий маршрут на сайте.

import { EDMONTON_ELK_ISLAND_EXPLORER } from './explorer/edmonton-elk-island.js';

export const EDMONTON_ELK_ISLAND = {
  slug: 'edmonton-elk-island',
  name: 'Edmonton to Elk Island',
  region: 'Alberta · Beaver Hills',
  tag: 'Treaty 6 · Beaver Hills Biosphere',
  accentLevel: 'safe',
  backLabel: 'Back to Alberta',
  backHref: '/province/ab',
  heroImage: '/ab/parks/Elk Island National Park.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: EDMONTON_ELK_ISLAND_EXPLORER,
  description:
    'Forty-five minutes from a city of a million people to a fenced patch of aspen parkland holding the most important bison in Canada. Almost every plains bison conservation herd in the country traces back to this park. You can be here before breakfast and back for lunch, which is exactly why most Edmontonians have never bothered.',

  badges: ['60 KM', '~1H DRIVE', 'BISON BOTH SIDES OF THE ROAD', 'DARK SKY PRESERVE'],

  headlineStats: [
    { value: '60', unit: 'km', label: 'Edmonton to the Park Gate' },
    { value: '~1', unit: 'h', label: 'Door to Trailhead' },
    { value: '194', unit: 'km²', label: 'Of Fenced Aspen Parkland' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '60 km, downtown Edmonton to the park gate on Hwy 16 via Sherwood Park' },
    { icon: 'time', label: 'Drive Time', value: '~1h with city traffic · closer to 40 minutes from the east side' },
    { icon: 'fuel', label: 'Fuel', value: 'Not a consideration. Sherwood Park and Fort Saskatchewan have everything, and there is nothing to run out of on a 60 km drive' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole way and inside the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 16, the Yellowhead — divided four-lane the entire distance' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open and ploughed year-round. The park stays open all winter and is genuinely good in it — the bison are easier to see against snow' },
  ],

  seasonalNotes: [
    {
      icon: '🦬',
      title: 'Bison Have Right of Way, Literally',
      text: 'The park road runs through range where plains bison roam loose on the north side and wood bison on the south. They stand on the pavement and they do not move for horns. Stay in the vehicle, wait, and never get out for a photo — this is where the injuries happen.',
    },
    {
      icon: '🌌',
      title: 'It Goes Dark Surprisingly Fast',
      text: 'Elk Island has been part of the Beaver Hills Dark Sky Preserve since 2006, and it is the nearest truly dark sky to Edmonton. The catch is that it is an hour from a city of a million people, so the aurora nights get busy and Parks Canada has closed some areas after crowding.',
    },
    {
      icon: '🦟',
      title: 'Midsummer Mosquitoes Are Not a Joke',
      text: 'This is aspen parkland full of shallow lakes and wetlands — ideal mosquito habitat. July evenings on the Amisk Wuche trails can be genuinely unpleasant without repellent.',
    },
  ],

  wildlifeSafety: {
    title: 'The Densest Hoofed Animals in Canada, Behind One Fence',
    text: 'Elk Island is fenced, which fools people into treating it like a zoo. Inside that fence are plains bison, wood bison, elk, moose and deer at some of the highest densities of large mammals anywhere in Canada. A bull bison weighs close to a tonne and can outrun you.',
    rules: [
      'Stay at least 100 metres from bison — the length of a football field, not a car length',
      'If bison are on the road, stay in your vehicle with the windows up and wait them out',
      'Never walk between a cow and a calf, and leave any trail where you see bison ahead',
      'Watch for wildlife on Hwy 16 at the park boundary at dawn and dusk; moose cross here',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty 6 Land, and the Herd That Repopulated a Species',
    text: 'The Beaver Hills — amiskwaciy — are Treaty 6 territory and the homeland of the Nêhiyawak (Cree), Nakota Sioux, Saulteaux, Blackfoot and Métis, who hunted bison here for thousands of years before the herds were destroyed in the 1870s and 1880s. The park has an unlikely sequel to that story. In 1907 Canada bought the Pablo-Allard herd from Montana — 708 animals shipped north between 1907 and 1912 — intended for Buffalo National Park at Wainwright. About forty could not be rounded up and were left at Elk Island. Those forty became the founding stock for what Parks Canada describes as essentially every plains bison conservation herd in the country.',
    nations: [
      'Nêhiyawak (Cree) Nations — Treaty 6 (1876)',
      'Nakota Sioux (Alexis, Paul, Enoch)',
      'Saulteaux and Blackfoot Nations',
      'Métis Nation of Alberta',
    ],
    authenticStop: {
      name: 'Elk Island Bison Transfers',
      text: 'The park still ships bison out: herds have gone from here to Banff, to Montana, to Russia, and to First Nations rebuilding their own herds, including The Key First Nation in Saskatchewan. It is the rare conservation story where you can stand at the source.',
    },
    note: 'Worth holding both halves together: the bison here exist because the Canadian state bought back a remnant of a species its own policy had helped destroy — a destruction that was also deliberately used to force Plains Nations off the land and onto reserves. The animals were saved. The purpose the slaughter served had already been achieved.',
  },

  stops: [
    {
      name: 'Edmonton',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Head east on Hwy 16 — the Yellowhead runs straight to the park gate.',
    },
    {
      name: 'Sherwood Park',
      km: 17,
      icon: '🛒',
      text: 'The eastern suburb and the last shopping of any kind. If you want food for a picnic, buy it here rather than in the park.',
    },
    {
      name: 'Elk Island National Park',
      km: 60,
      image: '/ab/parks/Elk Island National Park.png',
      text: 'The gate on Hwy 16. Bison range north and south of the parkway, with Astotin Lake, the beach and the main trails a few minutes in.',
    },
  ],
};

export default EDMONTON_ELK_ISLAND;
