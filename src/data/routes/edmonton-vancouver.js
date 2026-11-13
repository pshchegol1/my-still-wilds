// Edmonton → Vancouver — данные страницы /route/edmonton-vancouver
// Первый межпровинциальный маршрут "город → город" (Alberta → BC).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Линия и расстояния — OSRM поверх OpenStreetMap: 1,169 км через Hinton,
//   Jasper, Mount Robson, Valemount, Clearwater, Kamloops, Merritt, Hope.
//   Время OSRM ~15 ч; сторонние гиды дают 12-14.5 ч → на странице
//   "~12-15 ч за рулём", план на 2 дня (Edmonton → Kamloops ~805 км в
//   первый день — destinationlesstravel / turo).
// - Wikipedia, BC Highway 5: Hwy 16 до Tête Jaune Cache, дальше Hwy 5 на
//   юг; к югу от Kamloops — Coquihalla; Hwy 5 — кратчайший наземный путь
//   Vancouver — Edmonton; Blue River — ~109 км до Valemount.
// - Coquihalla: перевал ~1,244 м (несколько источников, официального не
//   найдено → "over 1,200 m", как у TranBC); в ноябре 2021 атмосферная река
//   смыла участки дороги, для обычных машин между Hope и Merritt открыли
//   19 января 2022 (BC gov news). Зимние шины/цепи на Hwy 5: с 1 октября;
//   дата окончания в источниках расходится (31 марта / 30 апреля) → на
//   странице "from October 1 — check DriveBC for the end date".
// - Mount Robson: 3,954 м, высшая точка Канадских Скалистых гор
//   (Britannica); Mount Robson Provincial Park — 1 марта 1913, второй по
//   старшинству провинциальный парк BC (Wikipedia).
// - Часовые пояса: Alberta — Mountain, Mount Robson / Valemount — Pacific;
//   граница на Yellowhead Pass (Wikipedia / timeanddate).
//   С 1 ноября 2026 обе провинции не переводят часы: Alberta — UTC−6
//   круглый год (alberta.ca), большая часть BC — UTC−7 (gov.bc.ca) → BC
//   всегда на час позади.
// - Jasper wildfire 2024: 358 из 1,113 строений городка уничтожены, ~32%
//   (Parks Canada через CTV / Town & Country Today).
// - Wells Gray: Helmcken Falls 141 м, доступ из Clearwater по Clearwater
//   Valley Road, парк создан в 1939 (Wikipedia).
// - Кamloops — территория Tk’emlúps te Secwépemc, неуступленные земли
//   Secwépemc (City of Kamloops). Merritt — регион народа Nlaka’pamux
//   (Nicola Tribal Association). Vancouver — Musqueam, Squamish,
//   Tsleil-Waututh. Edmonton — Treaty 6.
// - НЕ использовано: точное покрытие сотовой связью на Hwy 5 (официальной
//   карты нет — см. cell в explorer), цены на топливо.

import { EDMONTON_VANCOUVER_EXPLORER } from './explorer/edmonton-vancouver.js';

export const EDMONTON_VANCOUVER = {
  slug: 'edmonton-vancouver',
  name: 'Edmonton to Vancouver',
  region: 'Alberta → British Columbia · Yellowhead & Coquihalla',
  tag: 'Across the Rockies · Two Provinces',
  accentLevel: 'blue',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: '/ab/parks/jasper.png',

  explorer: EDMONTON_VANCOUVER_EXPLORER,
  description:
    'The shortest road from Edmonton to the Pacific: west on the Yellowhead through Jasper, past Mount Robson — the highest peak in the Canadian Rockies — then south through the North Thompson valley to Kamloops and over the Coquihalla to Vancouver. Two provinces, two time zones, and a two-day drive done properly.',

  badges: ['1,169 KM', '12–15H DRIVING', '2 DAYS', 'TIME ZONE CHANGE'],

  headlineStats: [
    { value: '1,169', unit: 'km', label: 'Edmonton to Vancouver' },
    { value: '3,954', unit: 'm', label: 'Mount Robson — Highest in the Rockies' },
    { value: '2', unit: '', label: 'Provinces · Alberta & BC' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '1,169 km via Hwy 16 to Tête Jaune Cache, Hwy 5 south to Kamloops and the Coquihalla, then Hwy 1 into Vancouver' },
    { icon: 'time', label: 'Drive Time', value: '~12–15 h of driving · plan two days, with the night in Kamloops (~810 km from Edmonton)' },
    { icon: 'fuel', label: 'Fuel', value: 'Plenty in Alberta. In BC, fill up in Valemount — the North Thompson valley has long stretches between small towns' },
    { icon: 'cell', label: 'Cell Service', value: 'Good near towns · patchy in Jasper National Park and on parts of Hwy 5 between Valemount and Clearwater' },
    { icon: 'road', label: 'Road Type', value: 'Divided Yellowhead, two-lane Hwy 16/5 through the mountains, then the four-lane Coquihalla over a pass above 1,200 m' },
    { icon: 'winter', label: 'Winter Driving', value: 'Winter tires or chains required on BC Hwy 5 from October 1 · the Coquihalla closes in severe storms · Parks Canada pass needed in Jasper' },
  ],

  seasonalNotes: [
    {
      icon: '🕐',
      title: 'Check Your Clock at Yellowhead Pass',
      text: 'Neither province changes its clocks any more: since November 1, 2026 Alberta stays on Alberta Time (UTC−6) and most of British Columbia on UTC−7, all year. So BC is always one hour behind Alberta. The line is Yellowhead Pass — set your watch back an hour when you cross.',
    },
    {
      icon: '🌨️',
      title: 'The Coquihalla Is a Real Mountain Pass',
      text: 'The four-lane Coquihalla climbs over a summit above 1,200 m between Merritt and Hope. It closes in heavy snow, and in November 2021 an atmospheric river washed out sections of it — regular traffic was not back until January 2022. Check DriveBC before the second day.',
    },
    {
      icon: '🔥',
      title: 'Jasper Is Rebuilding',
      text: 'The July 2024 wildfire destroyed 358 of the 1,113 structures in the Jasper townsite — about a third of the town. The highway is open and the town welcomes visitors, but expect rebuilding and some services still recovering.',
    },
  ],

  wildlifeSafety: {
    title: 'Mountain Highways, Mountain Wildlife',
    text: 'Elk, deer, bighorn sheep, moose and bears all use the valleys this road follows — especially through Jasper National Park and the Robson and North Thompson valleys.',
    rules: [
      'Slow down at dawn and dusk, when wildlife is most active on the road',
      'In Jasper National Park, never stop on the highway for animals — use pull-outs and stay in your vehicle near bears',
      'Watch for moose and deer on the two-lane sections — they are hard to see at night',
      'Never feed wildlife — roadside animals that learn to beg are often killed by traffic',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty Land to Unceded Coast',
    text: 'The drive starts in Treaty 6 territory around Edmonton and ends on the unceded lands of the Musqueam, Squamish and Tsleil-Waututh Nations in Vancouver. In between it crosses Secwépemc land — Kamloops sits on Tk’emlúps te Secwépemc territory, within the unceded ancestral lands of the Secwépemc Nation — and the Nicola Valley around Merritt, home to Nlaka’pamux communities. In British Columbia most of the land was never covered by treaties at all.',
    nations: [
      'Treaty 6 First Nations (Edmonton region)',
      'Tk’emlúps te Secwépemc and the Secwépemc Nation',
      'Nlaka’pamux communities of the Nicola Valley',
      'Musqueam, Squamish and Tsleil-Waututh Nations',
    ],
    authenticStop: {
      name: 'Kamloops — Tk’emlúps te Secwépemc',
      text: 'The natural overnight stop is also the heart of Secwépemc territory, where the North and South Thompson rivers meet. Look for experiences run by Tk’emlúps te Secwépemc rather than passing straight through.',
    },
    note: 'Unlike most of the Prairies, much of British Columbia is unceded: First Nations here never signed treaties giving up their land. Most of this drive is on such land.',
  },

  stops: [
    {
      name: 'Edmonton',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. West on Highway 16, the Yellowhead — farmland first, then forestry country.',
    },
    {
      name: 'Hinton',
      km: 287,
      icon: '⛽',
      text: 'The last full-service town before the national park, and the last fuel at normal prices before Jasper.',
    },
    {
      name: 'Jasper',
      km: 365,
      icon: '🏔️',
      text: 'Into Jasper National Park (Parks Canada pass required). The townsite is rebuilding after the 2024 wildfire.',
    },
    {
      name: 'Mount Robson',
      km: 452,
      icon: '⛰️',
      text: 'Over Yellowhead Pass into BC — set your watch back an hour. Stop at the visitor centre for the view of Mount Robson, 3,954 m — the highest peak in the Canadian Rockies.',
    },
    {
      name: 'Valemount',
      km: 488,
      icon: '⛽',
      text: 'South onto Highway 5 at Tête Jaune Cache. Valemount is the place to fill up before the long North Thompson valley.',
    },
    {
      name: 'Clearwater',
      km: 686,
      icon: '💧',
      text: 'Gateway to Wells Gray Provincial Park. A detour up the Clearwater Valley Road leads to Helmcken Falls, 141 m high.',
    },
    {
      name: 'Kamloops',
      km: 812,
      icon: '🛏️',
      text: 'The natural overnight stop, where the North and South Thompson rivers meet. Day two starts on the Coquihalla.',
    },
    {
      name: 'Merritt',
      km: 898,
      icon: '🛣️',
      text: 'Last town before the Coquihalla summit. Check DriveBC here in winter.',
    },
    {
      name: 'Hope',
      km: 1018,
      icon: '🌲',
      text: 'Down off the mountains to the Fraser River. From here the Trans-Canada runs west through the Fraser Valley.',
    },
    {
      name: 'Vancouver',
      km: 1169,
      image: '/Cities/Vancouver/Stanley Park.jpg',
      text: 'The Pacific. From Hope it is about 150 km through the Fraser Valley — traffic, not mountains, decides the last hour.',
    },
  ],

  fork: {
    tag: 'Scenic Alternative',
    title: 'Faster, or Through Five National Parks?',
    intro: 'Both routes start on the Yellowhead to Jasper. This page follows the direct road. The alternative turns south at Jasper onto the Icefields Parkway and crosses the Rockies on the Trans-Canada instead — about 230 km longer, and closer to four more hours at the wheel, but through Jasper, Banff, Yoho, Glacier and Mount Revelstoke national parks.',
    options: [
      {
        name: 'The Direct Route (this guide)',
        tag: 'Faster',
        level: 'blue',
        time: '1,169 km · ~12–15 h driving',
        text: 'Yellowhead and Highway 5 via Mount Robson, the North Thompson valley and the Coquihalla. Fewer crowds, easier fuel, and the best choice in winter.',
      },
      {
        name: 'Icefields Parkway & Trans-Canada',
        tag: 'Five National Parks',
        level: 'gold',
        time: '~1,400 km · roughly 4 h more driving',
        text: 'Jasper → Icefields Parkway → Lake Louise → Yoho → Rogers Pass → Revelstoke → Kamloops → Vancouver. The Parkway has no cell signal and only one seasonal fuel stop — a summer route, not a winter one.',
        href: '/route/icefields-parkway',
        linkLabel: 'See the Icefields Parkway Guide',
      },
    ],
  },
};

export default EDMONTON_VANCOUVER;
