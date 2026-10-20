// Regina → Grasslands National Park — данные страницы
// /route/regina-grasslands
// Второй маршрут региона "Saskatchewan".

import { REGINA_GRASSLANDS_EXPLORER } from './explorer/regina-grasslands.js';

export const REGINA_GRASSLANDS = {
  slug: 'regina-grasslands',
  name: 'Regina to Grasslands',
  region: 'Saskatchewan · Frenchman River Valley',
  tag: 'Treaty 4 · Nakoda, Nêhiyawak & Métis',
  accentLevel: 'caution',
  backLabel: 'Back to Saskatchewan',
  backHref: '/province/sk',
  heroImage: '/sk/parks/grasslands.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: REGINA_GRASSLANDS_EXPLORER,
  description:
    'Six hours southwest to the emptiest place in southern Canada. Grasslands protects the last real mixed-grass prairie left — the ecosystem that used to run from Texas to Alberta and now survives in fragments. There are bison, prairie dogs and no light for a hundred kilometres in any direction. There is also very little else, and that is the whole point.',

  badges: ['400 KM', '~6H DRIVE', 'DARKEST SKY IN CANADA', 'GRAVEL IN THE PARK'],

  headlineStats: [
    { value: '400', unit: 'km', label: 'Regina to the West Block Ecotour' },
    { value: '~6', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '907', unit: 'km²', label: 'Of Surviving Mixed-Grass Prairie' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '400 km, Regina to the West Block via Moose Jaw, Assiniboia and Val Marie · the East Block is a further two hours east again' },
    { icon: 'time', label: 'Drive Time', value: '~6h non-stop · realistically a full day, and the park itself needs two more' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill up in Moose Jaw or Assiniboia. Val Marie is a village of a few hundred people — do not arrive expecting a choice of stations or late hours' },
    { icon: 'cell', label: 'Cell Service', value: 'Fine along the highways, unreliable around Val Marie and effectively gone inside the park. Download your maps before you leave Assiniboia' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 1 to Moose Jaw, then Hwy 2 and Hwy 18 southwest · paved to Val Marie, gravel and dirt inside the park' },
    { icon: 'winter', label: 'Winter Driving', value: 'The highways stay open but this is open prairie with nothing to break the wind. The park has no winter services and the visitor centre closes in October' },
  ],

  seasonalNotes: [
    {
      icon: '🌧️',
      title: 'Rain Turns the Park Roads to Grease',
      text: 'The Ecotour road and the back roads are clay. Dry, they are fine in any car. Wet, they turn slick and rutted, and Parks Canada advises against driving them — people get stuck here with no cell signal and no traffic to flag down. Check the forecast before you commit to the loop.',
    },
    {
      icon: '🌌',
      title: 'Genuinely the Darkest Sky in the Country',
      text: 'Grasslands is routinely described as the darkest Dark Sky Preserve in Canada. There is no town glow on any horizon. Bring a red headlamp, give your eyes half an hour, and plan a night here rather than treating it as a bonus.',
    },
    {
      icon: '🚐',
      title: 'Val Marie Is the Whole Infrastructure',
      text: 'Beds, food and the West Block visitor centre are all in one small village. Rooms are limited and book out in summer, the visitor centre runs roughly late May to mid-October, and there is no grocery store worth the name. Arrive supplied.',
    },
  ],

  wildlifeSafety: {
    title: 'No Bears — But Rattlesnakes, Bison and Heat',
    text: 'This is the one part of Canada where prairie rattlesnakes live, and the park has a free-ranging plains bison herd restored in the mid-2000s. Add forty-degree summer afternoons with no shade at all, and the risks here are nothing like a mountain park.',
    rules: [
      'Prairie rattlesnakes are present — watch your footing, do not reach into rock crevices, and keep dogs leashed',
      'The bison are loose and unfenced: stay 100 metres back, and stay in your car if they are on the Ecotour road',
      'Carry far more water than feels sensible; there is no shade and no water source on the trails',
      'Scorpions, black widow spiders and cactus are all genuinely here — the prairie is not a soft landscape',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty 4 — and the Valley Sitting Bull Retreated To',
    text: 'This is Treaty 4 territory, signed in 1874, and the land of the Nakoda, Nêhiyawak (Cree), Saulteaux, Dakota, Lakota and Métis. The Frenchman River valley holds thousands of years of occupation: tipi rings are still visible on the uplands, and bison drive sites and the Métis wintering settlements are part of the same landscape. It is also where Sitting Bull and several thousand Lakota crossed in 1877 after the Battle of the Little Bighorn, living in the Cypress Hills and Wood Mountain country for four years before hunger forced a return to the United States.',
    nations: [
      'Nakoda (Assiniboine) Nations — Treaty 4 (1874)',
      'Nêhiyawak (Cree) and Saulteaux Nations',
      'Dakota and Lakota Nations',
      'Métis Nation–Saskatchewan',
    ],
    authenticStop: {
      name: 'Wood Mountain Post and the Lakota Story',
      text: 'East of the park near Wood Mountain is the post where the North-West Mounted Police dealt with Sitting Bull’s people, and the Wood Mountain Lakota First Nation — descendants of those who stayed — still lives in the area. A detour, but it is the part of this landscape no highway sign explains.',
    },
    note: 'The park also carries a conservation failure worth stating plainly: black-footed ferrets were reintroduced here in 2009 in what was presented as a landmark recovery, and the latest federal recovery report lists the park as currently unoccupied by them. Restoration is not a straight line, and the park does not pretend otherwise.',
  },

  stops: [
    {
      name: 'Regina',
      km: 0,
      icon: '🏙️',
      text: 'Starting point and the provincial capital. Head west on the Trans-Canada — the last easy hour of the drive.',
    },
    {
      name: 'Moose Jaw',
      km: 72,
      icon: '⛽',
      text: 'Where you turn south off the Trans-Canada. Full services, and the last city of any size on the route.',
    },
    {
      name: 'Assiniboia',
      km: 179,
      icon: '🌾',
      text: 'A prairie service town on Hwy 2 — fuel, food and the practical halfway point. Top up here rather than counting on Val Marie.',
    },
    {
      name: 'Val Marie',
      km: 355,
      icon: '🏚️',
      text: 'A village of a few hundred at the park gate, with the West Block visitor centre, a handful of beds and not much more. Everything you need comes from here.',
    },
    {
      name: 'Grasslands — West Block',
      km: 400,
      image: '/sk/parks/grasslands.png',
      text: 'The Ecotour road into the Frenchman River valley: bison, prairie dog colonies, tipi rings and a horizon with nothing on it.',
    },
  ],
};

export default REGINA_GRASSLANDS;
