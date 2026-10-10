// Icefields Parkway: Banff to Jasper — данные страницы /route/icefields-parkway
// Третий маршрут региона "Alberta & the Rockies".

import { ICEFIELDS_PARKWAY_EXPLORER } from './explorer/icefields-parkway.js';

const BANFF = '/parks/Banff National Park';
const JASPER = '/parks/Jasper National Park';

export const ICEFIELDS_PARKWAY = {
  slug: 'icefields-parkway',
  name: 'Icefields Parkway: Banff to Jasper',
  region: 'Alberta · Canadian Rockies',
  tag: 'Signature Drive · Hwy 93N',
  accentLevel: 'gold',
  backLabel: 'Back to Alberta',
  backHref: '/province/ab',
  heroImage: `${JASPER}/Icefields Parkway.png`,

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: ICEFIELDS_PARKWAY_EXPLORER,
  description:
    "Often called one of the most scenic drives on Earth — 299 km door to door from Banff, built around the 232 km Icefields Parkway itself (Hwy 93N, Lake Louise to Jasper) between two national parks. There is exactly one gas station on that stretch, and it isn't optional to know where.",

  badges: ['299 KM', '~4H45M NON-STOP', 'ONE GAS STATION', 'YEAR-ROUND'],

  headlineStats: [
    { value: '299', unit: 'km', label: 'Total Distance, Banff to Jasper' },
    { value: '2,068', unit: 'm', label: 'Highest Point — Bow Summit' },
    { value: '1', unit: '', label: 'Gas Station, 232km Parkway Stretch' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '299 km total, Banff to Jasper (57 km warm-up to Lake Louise + the 232 km Icefields Parkway itself, Hwy 93N)' },
    { icon: 'time', label: 'Drive Time', value: '~4h45m non-stop · realistically a full day (8–10h) with viewpoints' },
    { icon: 'fuel', label: 'Fuel Gap', value: 'Only one station on the entire route — Saskatchewan River Crossing, roughly the midpoint. Fill up before you leave Lake Louise or Jasper.' },
    { icon: 'cell', label: 'Cell Service', value: 'Little to none for most of the drive — download offline maps before you start' },
    { icon: 'road', label: 'Road Type', value: '2-lane paved alpine highway, crosses Banff then Jasper National Park · one Parks pass covers both' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round and genuinely stunning in snow, but expect ice, wind, and occasional avalanche-control closures near the Weeping Wall' },
  ],

  seasonalNotes: [
    {
      icon: '⛽',
      title: 'The Fuel Gap Is Real',
      text: "Saskatchewan River Crossing is the only station on the 232 km Icefields Parkway stretch itself. It has closed outside peak season in past years — call ahead or just leave with a full tank regardless.",
    },
    {
      icon: '🌬️',
      title: 'Weather Changes Fast',
      text: 'Bow Summit sits at 2,068m — snow is possible there even in July. The valley floor can be warm and sunny while the pass is in cloud and sleet.',
    },
    {
      icon: '📷',
      title: 'Peyto Lake Crowds',
      text: 'The famous wolf-head-shaped viewpoint gets genuinely crowded by mid-morning in summer. Arrive before 9am or after 5pm for a parking spot and a clear shot.',
    },
  ],

  wildlifeSafety: {
    title: 'Bighorn Sheep Own the Shoulder',
    text: 'Bighorn sheep and mountain goats are frequently right on the road edge, especially near the Weeping Wall and Sunwapta area — they are used to cars and will not move for you.',
    rules: [
      'Never feed or approach roadside sheep and goats — it habituates them to traffic and gets animals killed',
      'Caribou historically used this corridor, but the southern Rockies herds are now critically endangered — sightings here are essentially a thing of the past',
      'Pull fully into a designated viewpoint for photos — stopping in the driving lane on a 2-lane mountain highway is genuinely dangerous',
      'Bears are present throughout — standard 100m distance rule applies at every trailhead and viewpoint, not just deep trails',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'A Travel Corridor Long Before It Was a Highway',
    text: "The mountain passes the Icefields Parkway now follows were travel and hunting routes for the Stoney Nakoda, Ktunaxa, Secwépemc (Shuswap), and Cree peoples long before Hwy 93N was built in the 1930s. The Columbia Icefield itself is a hydrological triple divide — meltwater from here reaches the Pacific, the Atlantic (via Hudson Bay), and the Arctic Ocean, a genuinely rare geographic feature.",
    nations: [
      'Îyâxe Nakoda / Stoney Nakoda Nation',
      'Ktunaxa Nation',
      'Secwépemc (Shuswap) Nation',
      'Cree Nations',
    ],
    note: "Unlike some of our other routes, there isn't a single dedicated Indigenous cultural centre directly on this corridor — the history here lives in the land and travel routes themselves rather than one site you can pull into. Worth knowing rather than assuming it isn't there.",
  },

  stops: [
    {
      name: 'Banff',
      km: 0,
      image: `${BANFF}/Town of Banff.png`,
      text: 'Starting point. Top off the tank here even if you already filled up in Lake Louise.',
    },
    {
      name: 'Lake Louise',
      km: 58,
      image: `${BANFF}/Lake Louise.png`,
      text: "The warm-up before the real Icefields Parkway begins at the junction just past here — last reliable gas for a while if you haven't already filled up.",
    },
    {
      name: 'Peyto Lake Viewpoint',
      km: 103,
      icon: '🏔️',
      text: "Peyto Lake's wolf-head shape is one of the most photographed views in the Rockies. The short paved path from the parking lot is easy, but the lot fills fast.",
    },
    {
      name: 'Columbia Icefield',
      km: 189,
      image: `${JASPER}/Columbia Icefield.jpg`,
      text: 'Roughly the midpoint of the parkway itself — and the only fuel stop on that 232 km stretch. Ice Explorer tours drive onto the Athabasca Glacier itself; the Glacier Skywalk glass platform is just up the road.',
    },
    {
      name: 'Athabasca Falls',
      km: 267,
      image: `${JASPER}/Athabasca Falls.jpg`,
      text: 'Not the tallest waterfall in the Rockies, but one of the most powerful — the Athabasca River forces itself through a narrow limestone gorge. A 5-minute walk from the parking lot.',
    },
    {
      name: 'Jasper — Maligne Lake',
      km: 299,
      image: `${JASPER}/Maligne Lake.jpg`,
      text: "Journey's end in Jasper townsite — Maligne Lake is a worthwhile 45-minute side trip from town, not directly on the parkway itself, but close enough to be part of most people's day.",
    },
  ],
};

export default ICEFIELDS_PARKWAY;
