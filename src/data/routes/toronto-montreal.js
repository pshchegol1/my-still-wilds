// Toronto → Montréal — данные страницы /route/toronto-montreal
// Межпровинциальный маршрут "город → город" (Ontario → Quebec).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Линия — OSRM поверх OpenStreetMap, без заездов в города: 548 км по
//   Hwy 401 и Autoroute 20. Гиды: ~540-550 км, ~5.5-6 ч (Turo, mtl.org);
//   OSRM ~6.5 ч → на странице "~5.5-6.5 ч". Kingston — примерно середина.
// - ONroute — сервисные площадки на 401 примерно каждые 80-100 км, прямо у
//   трассы (гиды); пробки на выезде из Toronto и на въезде в Montréal.
// - Hwy 401 у Toronto — самый загруженный участок трассы в Северной
//   Америке: AADT ~450,300 (2019, Renforth — 427) (Wikipedia).
// - Квебек: зимние шины обязательны с 1 декабря по 15 марта, штраф $200-300,
//   правило распространяется на машины, зарегистрированные в Квебеке, и
//   прокатные (SAAQ). Для машин из Онтарио требование не подтверждено →
//   на странице "Québec-registered and rental cars".
// - Thousand Islands Parkway — между Gananoque и Brockville вдоль реки, с
//   мощёной велодорожкой ~37 км в одну сторону, часть Waterfront Trail
//   (Ontario by Bike / Waterfront Trail).
// - Toronto — территория Договора № 13 с Mississaugas of the Credit и
//   соглашения Dish With One Spoon (City of Toronto). Montréal —
//   Tiohtià:ke на языке kanien'kéha.
// - НЕ использовано: Loyalist Parkway (номер трассы не подтверждён),
//   конкретные ONroute по названиям, народы у Kingston и Cornwall.

import { TORONTO_MONTREAL_EXPLORER } from './explorer/toronto-montreal.js';

export const TORONTO_MONTREAL = {
  slug: 'toronto-montreal',
  name: 'Toronto to Montréal',
  region: 'Ontario → Quebec · Highway 401 & Autoroute 20',
  tag: 'Along Lake Ontario & the St. Lawrence',
  accentLevel: 'danger',
  backLabel: 'Back to Quebec',
  backHref: '/province/qc',
  heroImage: '/Cities/Montreal/hero-poster.jpg',

  explorer: TORONTO_MONTREAL_EXPLORER,
  description:
    'Canada’s busiest corridor: east from Toronto along Lake Ontario on Highway 401, past Kingston and the Thousand Islands, then along the St. Lawrence into Quebec and Montréal. An easy one-day drive — the traffic, not the road, is the challenge.',

  badges: ['548 KM', '~5.5–6.5H DRIVING', 'ONE DAY', 'FRENCH FROM THE BORDER'],

  headlineStats: [
    { value: '548', unit: 'km', label: 'Toronto to Montréal' },
    { value: '450k', unit: '', label: 'Vehicles a Day on the 401 in Toronto' },
    { value: '2', unit: '', label: 'Provinces · Ontario & Quebec' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '548 km on Highway 401 to the Quebec border, then Autoroute 20 into Montréal' },
    { icon: 'time', label: 'Drive Time', value: '~5.5–6.5 h without traffic · Kingston is roughly halfway' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy — ONroute service centres sit right on the 401 every 80–100 km or so' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along the whole corridor' },
    { icon: 'road', label: 'Road Type', value: 'Multi-lane divided freeway all the way · very heavy traffic around both cities' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round · winter storms can slow the whole corridor · Québec-registered and rental cars need winter tires Dec 1 – Mar 15' },
  ],

  seasonalNotes: [
    {
      icon: '🚗',
      title: 'The 401 Is the Busiest Highway in North America',
      text: 'In Toronto, one stretch of the 401 carried about 450,000 vehicles a day (2019 count). Leave early, avoid Friday afternoons, and expect the same at the other end — the approach to Montréal is just as slow.',
    },
    {
      icon: '🇫🇷',
      title: 'Signs Switch to French at the Border',
      text: 'The 401 becomes Autoroute 20 at the Quebec border, and road signs are in French from there. A few words help: “sortie” is exit, “est/ouest” is east/west, and “rue barrée” means road closed.',
    },
    {
      icon: '❄️',
      title: 'Quebec’s Winter Tire Law',
      text: 'In Quebec, winter tires are mandatory from December 1 to March 15 for Québec-registered vehicles and rental cars, with fines of $200–$300. Ontario has no such law — but on this road in winter, they are worth having anyway.',
    },
  ],

  wildlifeSafety: {
    title: 'Freeway Driving, Not Wilderness',
    text: 'This is the most urban drive on the site. The real risks are speed and traffic, not animals — though wildlife can still cross the rural stretches of eastern Ontario.',
    rules: [
      'Keep right except to pass — the 401 has heavy truck traffic',
      'Watch for wildlife on the rural stretches at dawn and dusk',
      'In winter, slow down for snow and whiteouts — check Ontario 511 and Québec 511',
      'Use ONroute centres for breaks instead of stopping on the shoulder',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'From Treaty Land to Tiohtià:ke',
    text: 'Toronto is covered by Treaty 13 with the Mississaugas of the Credit, and lies within the Dish With One Spoon territory — an agreement between the Anishinaabe and Haudenosaunee to share and care for the Great Lakes region. The road ends in Montréal, known in the Kanien’kéha (Mohawk) language as Tiohtià:ke. In between it follows the St. Lawrence, for centuries the main route into the heart of the continent.',
    nations: [
      'Mississaugas of the Credit First Nation',
      'Anishinaabe and Haudenosaunee Peoples (Dish With One Spoon)',
      'Kanien’kehá:ka (Mohawk) Nation',
    ],
    authenticStop: {
      name: 'The Thousand Islands',
      text: 'Leave the 401 at Gananoque and follow the Thousand Islands Parkway along the river to Brockville — granite islands, a riverside bike path, and Thousand Islands National Park.',
    },
    note: 'This corridor is the most travelled in Canada, and also one of the oldest routes on the continent — long before the highway or the railway, it was a water route.',
  },

  stops: [
    { name: 'Toronto', km: 0, icon: '🏙️', text: 'Starting point. East on the 401 — leave early to beat the traffic.' },
    { name: 'Port Hope & Cobourg', km: 110, icon: '🌊', text: 'Small Lake Ontario towns just off the highway, good for a first break.' },
    { name: 'Belleville', km: 187, icon: '⛽', text: 'Gateway to Prince Edward County and the Bay of Quinte.' },
    { name: 'Kingston', km: 258, icon: '🏛️', text: 'Roughly halfway. A limestone city at the head of the St. Lawrence — worth a lunch stop.' },
    { name: 'Gananoque', km: 286, icon: '🏝️', text: 'Gateway to the Thousand Islands and the scenic parkway along the river.' },
    { name: 'Brockville', km: 337, icon: '🚂', text: 'A river town at the eastern end of the Thousand Islands.' },
    { name: 'Cornwall', km: 432, icon: '🌉', text: 'Last Ontario city before Quebec.' },
    { name: 'Quebec Border', km: 468, icon: '🇫🇷', text: 'The 401 becomes Autoroute 20 — signs in French from here.' },
    { name: 'Montréal', km: 548, image: '/Cities/Montreal/hero-poster.jpg', text: 'Into the island city. Expect traffic on the bridges and in the tunnels.' },
  ],

  fork: {
    tag: 'Scenic Detour',
    title: 'Stay on the 401, or Follow the River?',
    intro: 'Between Gananoque and Brockville, a slower road runs right along the St. Lawrence through the Thousand Islands. It adds time, not much distance.',
    options: [
      {
        name: 'Highway 401 (this guide)',
        tag: 'Faster',
        level: 'blue',
        time: 'Gananoque → Brockville · ~51 km freeway',
        text: 'The quickest way, inland from the river.',
      },
      {
        name: 'Thousand Islands Parkway',
        tag: 'Scenic',
        level: 'gold',
        time: 'Gananoque → Brockville · two-lane, along the river',
        text: 'Granite islands, river views, and a paved bike path of about 37 km beside the road. Passes Thousand Islands National Park.',
        href: '/park/thousand-islands',
        linkLabel: 'See the Thousand Islands Park Guide',
      },
    ],
  },
};

export default TORONTO_MONTREAL;
