// Calgary → Vancouver — данные страницы /route/calgary-vancouver
// Межпровинциальный маршрут "город → город" (Alberta → BC).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Линия и расстояния — OSRM поверх OpenStreetMap: 994 км по Trans-Canada
//   до Kamloops, дальше Coquihalla до Hope и Hwy 1 до Vancouver. OSRM ~13.4
//   ч; гиды и форумы: ~10.5-11 ч по Coquihalla → на странице "~11-13 ч".
//   Альтернатива Kamloops → Cache Creek → Lytton → Hope (Fraser Canyon) —
//   279 км против 206 км по Coquihalla (+73 км, OSRM).
// - Перевалы: Kicking Horse Pass 1,627 м — высшая точка Trans-Canada, на
//   Континентальном водоразделе в Yoho; Rogers Pass 1,330 м
//   (thecanadianrockies.com / Wikipedia; в тексте Wikipedia есть и 1,643 м
//   для Kicking Horse → на странице 1,627, как в инфобоксе).
// - Spiral Tunnels открыты 1 сентября 1909, смотровая площадка у трассы
//   (Wikipedia, Big Hill).
// - Parks Canada, Glacier NP: крупнейшая в мире мобильная артиллерийская
//   противолавинная программа (с Вооружёнными силами Канады, с 1961);
//   135 лавинных путей на 43 км трассы; ~100 часов закрытий в год, обычно
//   4-8 ч; в марте 2026 трасса Revelstoke — Golden была закрыта 3 дня.
// - Kicking Horse Canyon Phase 4 — завершён 31 июля 2024, 4 полосы, 100 км/ч
//   (InfrastructureBC / kickinghorsecanyon.ca).
// - Последний костыль CPR — Craigellachie, 7 ноября 1885, Donald Smith
//   (Wikipedia / Canadian Museum of History).
// - Время: Alberta — UTC−6 круглый год с 1 ноября 2026 (alberta.ca);
//   большая часть BC — UTC−7 (gov.bc.ca); Golden остаётся на UTC−6, как
//   Alberta (gov.bc.ca, golden.ca); Revelstoke — BC-время → часы переводятся
//   между Golden и Revelstoke (точная точка не подтверждена).
// - Народы: Golden — неуступленные земли ктунакса и секвепемк, Métis Nation
//   Columbia River Society (Tourism Golden); Revelstoke — синикст,
//   секвепемк, силкс, ктунакса (seerevelstoke.com); Kamloops —
//   Tk’emlúps te Secwépemc (City of Kamloops); Calgary — Treaty 7.
// - Coquihalla — те же факты, что в edmonton-vancouver.js.
// - НЕ использовано: точная граница часового пояса, цены.

import { CALGARY_VANCOUVER_EXPLORER } from './explorer/calgary-vancouver.js';

export const CALGARY_VANCOUVER = {
  slug: 'calgary-vancouver',
  name: 'Calgary to Vancouver',
  region: 'Alberta → British Columbia · Trans-Canada & Coquihalla',
  tag: 'Four National Parks · Three Passes',
  accentLevel: 'gold',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: '/ab/parks/banff.png',

  explorer: CALGARY_VANCOUVER_EXPLORER,
  description:
    'The classic crossing of the Rockies: the Trans-Canada through Banff, over Kicking Horse Pass — the highest point on the whole highway — through Yoho, Glacier and Mount Revelstoke, then down the Shuswap to Kamloops and over the Coquihalla to Vancouver. Four national parks in a single drive.',

  badges: ['994 KM', '11–13H DRIVING', '4 NATIONAL PARKS', 'AVALANCHE COUNTRY'],

  headlineStats: [
    { value: '994', unit: 'km', label: 'Calgary to Vancouver' },
    { value: '1,627', unit: 'm', label: 'Kicking Horse Pass — Highest on the Trans-Canada' },
    { value: '4', unit: '', label: 'National Parks on the Way' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '994 km on the Trans-Canada to Kamloops, the Coquihalla to Hope, then Hwy 1 into Vancouver' },
    { icon: 'time', label: 'Drive Time', value: '~11–13 h of driving · two days is far better, with a night in Golden, Revelstoke or Kamloops' },
    { icon: 'fuel', label: 'Fuel', value: 'Towns every hour or so — the longest gaps are through Glacier National Park and over the Coquihalla' },
    { icon: 'cell', label: 'Cell Service', value: 'Good in the towns · weak through Yoho and Glacier national parks and on parts of the Coquihalla' },
    { icon: 'road', label: 'Road Type', value: 'Divided highway through Banff, then a mix of four-lane and two-lane mountain highway to Kamloops · four-lane Coquihalla' },
    { icon: 'winter', label: 'Winter Driving', value: 'Avalanche-control closures at Rogers Pass · winter tires required on BC highways from October 1 · Parks Canada pass needed' },
  ],

  seasonalNotes: [
    {
      icon: '🏔️',
      title: 'Rogers Pass Is Avalanche Country',
      text: 'Glacier National Park runs the world’s largest mobile artillery avalanche-control program, with the Canadian Armed Forces, across 135 avalanche paths on a 43 km stretch of the highway. Closures add up to about 100 hours a year and usually last 4 to 8 hours — but in March 2026 the road between Revelstoke and Golden stayed shut for three days. In winter, check DriveBC before you leave Golden or Revelstoke.',
    },
    {
      icon: '🕐',
      title: 'The Clock Changes After Golden',
      text: 'Since November 1, 2026 Alberta keeps UTC−6 all year and most of BC keeps UTC−7. Golden chose to stay on Alberta’s time, while Revelstoke uses BC time — so your phone goes back an hour somewhere between the two, not at the provincial border.',
    },
    {
      icon: '🚧',
      title: 'Kicking Horse Canyon Is Finally Done',
      text: 'The hardest stretch of the Trans-Canada, east of Golden, reopened as a full four-lane highway on July 31, 2024, after years of construction. The canyon is still steep and tight — but the long construction closures are over.',
    },
  ],

  wildlifeSafety: {
    title: 'Fenced Highway, Then Open Valleys',
    text: 'Through Banff the Trans-Canada is fenced, with wildlife overpasses. West of the national parks the fences end, and elk, deer, bighorn sheep and bears can be on the road — especially at dawn and dusk.',
    rules: [
      'Never stop on the highway for wildlife inside the national parks — use pull-outs',
      'Slow down on the two-lane sections between Golden and Revelstoke at night',
      'Stay in your vehicle near bears, even for a photo',
      'Never feed wildlife — animals that learn to beg end up hit by traffic',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'The Road the Railway Built',
    text: 'This drive follows the Canadian Pacific Railway across the mountains, and you can see why: the Spiral Tunnels, opened in 1909, loop the trains through Kicking Horse Pass, and at Craigellachie, west of Revelstoke, the last spike was driven on November 7, 1885. The land is far older than the railway. Calgary is on Treaty 7 territory; Golden on the unceded lands of the Ktunaxa and Secwépemc and home to the Métis Nation Columbia River Society; Revelstoke is the homeland of the Sinixt and within Secwépemc, Syilx and Ktunaxa territories; Kamloops is Tk’emlúps te Secwépemc land.',
    nations: [
      'Treaty 7 Nations (Calgary region)',
      'Ktunaxa Nation',
      'Secwépemc Nation, including Tk’emlúps te Secwépemc',
      'Sinixt and Syilx Peoples',
      'Métis Nation Columbia River Society',
    ],
    authenticStop: {
      name: 'The Last Spike, Craigellachie',
      text: 'A short stop beside Highway 1 where the transcontinental railway was completed. It is a story of nation-building — and of the Indigenous lands the railway was laid across.',
    },
    note: 'Most of the BC land on this drive was never ceded by treaty. The railway, and later the highway, were built across it anyway.',
  },

  stops: [
    { name: 'Calgary', km: 0, icon: '🏙️', text: 'Starting point. West on the Trans-Canada toward the mountains.' },
    { name: 'Canmore', km: 107, icon: '⛰️', text: 'The first mountain town, just outside Banff National Park.' },
    { name: 'Banff', km: 133, icon: '🏔️', text: 'Into Banff National Park — a Parks Canada pass is required from here.' },
    { name: 'Lake Louise', km: 190, icon: '💧', text: 'Last services before Kicking Horse Pass. The lake itself is a short detour off the highway.' },
    { name: 'Kicking Horse Pass & Spiral Tunnels', km: 208, icon: '🚂', text: 'Cross the Continental Divide at 1,627 m — the highest point on the Trans-Canada — into Yoho. The Spiral Tunnels viewpoint is just beyond.' },
    { name: 'Golden', km: 275, icon: '⛽', text: 'Down the rebuilt Kicking Horse Canyon to Golden. Fill up before Rogers Pass.' },
    { name: 'Rogers Pass', km: 356, icon: '❄️', text: 'Through Glacier National Park at 1,330 m — avalanche country in winter, alpine meadows and glaciers in summer.' },
    { name: 'Revelstoke', km: 422, icon: '🌲', text: 'Mount Revelstoke National Park is right above town. BC time from here — clocks go back an hour.' },
    { name: 'Craigellachie — The Last Spike', km: 470, icon: '📍', text: 'Where the Canadian Pacific Railway was completed on November 7, 1885.' },
    { name: 'Salmon Arm', km: 526, icon: '🏞️', text: 'Along Shuswap Lake toward the dry interior.' },
    { name: 'Kamloops', km: 636, icon: '🛏️', text: 'A natural overnight stop. Day two climbs the Coquihalla.' },
    { name: 'Hope', km: 842, icon: '🌲', text: 'Down from the Coquihalla summit to the Fraser River.' },
    { name: 'Vancouver', km: 992, image: '/Cities/Vancouver/Stanley Park.jpg', text: 'The Pacific, after about 150 km through the Fraser Valley.' },
  ],

  fork: {
    tag: 'Choose Your Way Down',
    title: 'Coquihalla, or the Fraser Canyon?',
    intro: 'From Kamloops there are two ways to the coast. This guide takes the faster Coquihalla. The older Trans-Canada follows the Thompson and Fraser rivers through a deep canyon — about 73 km longer, slower and two-lane, but far more dramatic.',
    options: [
      {
        name: 'The Coquihalla (this guide)',
        tag: 'Faster',
        level: 'blue',
        time: 'Kamloops → Hope · 206 km',
        text: 'Four lanes over a summit above 1,200 m via Merritt. The quickest way to Vancouver — but it closes in heavy snow.',
      },
      {
        name: 'Fraser Canyon (Hwy 1)',
        tag: 'Scenic',
        level: 'gold',
        time: 'Kamloops → Hope · 279 km',
        text: 'Through Cache Creek and Lytton along the Thompson and Fraser rivers — two-lane, between steep canyon walls. A slower, older road.',
      },
    ],
  },
};

export default CALGARY_VANCOUVER;
