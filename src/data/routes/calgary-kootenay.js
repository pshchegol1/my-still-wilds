// Calgary → Kootenay National Park — данные страницы /route/calgary-kootenay
// Маршрут региона "British Columbia" (старт в Альберте).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Линия и расстояния — OSRM поверх OpenStreetMap: 264 км, ~3ч50м без
//   остановок; Calgary → Castle Junction 158 км (Trans-Canada), дальше
//   Hwy 93 South 106 км до Radium.
// - Parks Canada, How to get to Kootenay: Hwy 93 South — 94 км через парк,
//   единственная крупная дорога; от Banff 41 км до северо-восточного входа;
//   Radium — 2 км от юго-западного входа; дорога обслуживается круглый год,
//   лимит 90 км/ч, возможны временные закрытия; в парке нет заправок, еды и
//   общественного транспорта; ближайшие услуги — Radium и Invermere, с
//   северо-востока — Banff; четыре экстренных телефона вдоль дороги, 24/7,
//   прямо в Parks Canada Dispatch; сотовой связи и Wi-Fi в парке нет.
// - Parks Canada, Facilities: связь есть только у бассейнов Radium Hot
//   Springs и на Castle Junction.
// - Parks Canada, Driving (Banff): зимние шины или цепи обязательны на
//   Hwy 93S в Kootenay с 1 октября по 30 апреля (в Banff — 1 ноября —
//   31 марта).
// - Parks Canada, Wildlife Crossings Project: с 2003 по 2012 год на Hwy 93
//   South в Kootenay погибло больше 500 крупных животных.
// - Parks Canada, History of Highway 93 South (через страницу парка):
//   соглашение 1919 года — федеральное правительство строит дорогу в обмен
//   на 8 км земли по обе стороны; парк создан 21 апреля 1920, дорога
//   закончена в 1923; Sinclair Canyon — самый трудный участок.
// - Parks Canada, Kootenay Visitor Guide 2025: традиционные земли народов
//   ктунакса и секвепемк; Paint Pots — охру здесь собирали тысячи лет.
// - CBC (2018): лесные пожары закрывали Hwy 93 South от Castle Junction до
//   Radium.
// - НЕ использовано: время в пути по участкам (кроме OSRM), цены, точные
//   даты закрытия кемпингов.

import { CALGARY_KOOTENAY_EXPLORER } from './explorer/calgary-kootenay.js';

export const CALGARY_KOOTENAY = {
  slug: 'calgary-kootenay',
  name: 'Calgary to Kootenay',
  region: 'Alberta → British Columbia · Canadian Rockies',
  tag: 'Ktunaxa & Secwépemc Lands · Hwy 93 South',
  accentLevel: 'safe',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: '/bc/parks/Kootenay National Park.png',

  explorer: CALGARY_KOOTENAY_EXPLORER,
  description:
    'West through the Bow Valley, then south over the Continental Divide on a highway that built a national park. Highway 93 South crosses Kootenay with no fuel, no food and no cell signal for most of its length — past Marble Canyon and the ochre Paint Pots, down to the hot pools of Radium.',

  badges: ['264 KM', '~3H50M DRIVE', 'NO FUEL IN THE PARK', 'NO CELL SIGNAL'],

  headlineStats: [
    { value: '264', unit: 'km', label: 'Calgary to Radium Hot Springs' },
    { value: '94', unit: 'km', label: 'Of Highway 93 South Inside the Park' },
    { value: '500+', unit: '', label: 'Large Animals Killed on 93S, 2003–2012' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '264 km — 158 km on the Trans-Canada to Castle Junction, then 106 km on Highway 93 South to Radium' },
    { icon: 'time', label: 'Drive Time', value: '~3h50m non-stop · plan a full day with Marble Canyon, the Paint Pots and the pools' },
    { icon: 'fuel', label: 'Fuel', value: 'No fuel stations inside the park. Fill up in Banff or at Castle Junction; the next fuel is Radium, ~106 km on' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Castle Junction · none inside the park until the Radium pools · 4 emergency phones on the highway' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada (divided) to Castle Junction, then two-lane Highway 93 South · 90 km/h · Parks Canada pass required' },
    { icon: 'winter', label: 'Winter Driving', value: 'Winter tires or chains are required on 93 South in Kootenay from October 1 to April 30 · maintained year-round' },
  ],

  seasonalNotes: [
    {
      icon: '⛽',
      title: 'Fill Up Before the Turn-Off',
      text: 'Parks Canada is blunt about it: there are no fuel stations, no food services and no public transport in Kootenay. Once you leave Castle Junction, the next fuel is in Radium, about 106 km later. Banff is the last full-service town on the north side.',
    },
    {
      icon: '📵',
      title: 'Plan for No Signal',
      text: 'There is no cell or Wi-Fi coverage in the park except at Castle Junction and at the Radium Hot Springs pools. Four emergency phones along the highway connect straight to Parks Canada Dispatch, day and night. Download your maps before you go.',
    },
    {
      icon: '🔥',
      title: 'Summer Can Mean Smoke',
      text: 'Wildfires have closed Highway 93 South between Castle Junction and Radium in past summers. Check DriveBC and 511 Alberta on the morning you drive — closures can come with little warning.',
    },
  ],

  wildlifeSafety: {
    title: 'A Highway Through Wildlife Habitat',
    text: 'From 2003 to 2012, more than 500 large mammals were killed on Highway 93 South in Kootenay — and the real number is likely higher. Parks Canada has been adding fencing and wildlife crossings, but the road still runs through bear, elk, deer and bighorn sheep country.',
    rules: [
      'Keep to the 90 km/h limit and slow down further at dawn, dusk and night',
      'Never stop on the highway to watch wildlife — use pull-outs, and stay in your vehicle near bears',
      'Bighorn sheep often stand on the road near Radium — expect them around the bends',
      'Never feed wildlife; animals that learn to beg on the roadside end up being killed by traffic',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'A Park Traded for a Road',
    text: 'Kootenay lies within the traditional lands of the Ktunaxa and Secwépemc Peoples. At the Paint Pots, Indigenous people have gathered ochre from the iron-rich springs for thousands of years. The park itself was a bargain: in 1919 Ottawa agreed to finish the Banff–Windermere road across the Rockies in exchange for 8 km of land on each side of it. Kootenay National Park was created on April 21, 1920 — three years before the road, cut through Sinclair Canyon with picks, shovels and dynamite, was finished.',
    nations: [
      'Ktunaxa Nation',
      'Secwépemc (Shuswap) Nation',
    ],
    authenticStop: {
      name: 'The Paint Pots',
      text: 'Three cold, iron-rich mineral springs that stain the earth red and yellow. A short walk from the highway — the ochre beds are a place of deep significance, so stay on the boardwalk and take nothing.',
    },
    note: 'The road is the reason the park exists — and still its biggest pressure. The same highway that lets you see Kootenay in an afternoon is also where hundreds of animals have died.',
  },

  stops: [
    {
      name: 'Calgary',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Head west on the Trans-Canada toward the mountains — the foothills give way to the Bow Valley within an hour.',
    },
    {
      name: 'Canmore',
      km: 104,
      icon: '⛰️',
      text: 'The first mountain town on the way, just outside Banff National Park. Good for a coffee and a last relaxed fuel stop.',
    },
    {
      name: 'Banff',
      km: 127,
      icon: '⛽',
      text: 'The last full-service town before Kootenay. Fill the tank and pick up food — there is none for sale inside the park.',
    },
    {
      name: 'Castle Junction',
      km: 158,
      icon: '🛣️',
      text: 'Turn south onto Highway 93 South. Last cell signal and the last fuel for about 106 km.',
    },
    {
      name: 'Continental Divide & Marble Canyon',
      km: 176,
      icon: '🏞️',
      text: 'Cross the Divide at Vermilion Pass, then walk the short trail (0.9 km) into Marble Canyon, a narrow limestone gorge.',
    },
    {
      name: 'Paint Pots',
      km: 178,
      icon: '🎨',
      text: 'A short walk to the ochre beds — red and yellow earth around cold mineral springs.',
    },
    {
      name: 'Radium Hot Springs',
      km: 264,
      image: '/bc/parks/Kootenay National Park.png',
      text: 'Through Sinclair Canyon to the hot pools and the town of Radium, 2 km from the park’s south-west entrance. Fuel, food and signal again.',
    },
  ],
};

export default CALGARY_KOOTENAY;
