// Kamloops → Rogers Pass → Yoho National Park — данные страницы
// /route/rogers-pass-yoho
// Третий маршрут региона "British Columbia & the Coast" —
// внутренний, горный, в противовес прибрежному Vancouver-Whistler-Island.

const YOHO = '/parks/Yoho National Park';

export const ROGERS_PASS_YOHO = {
  slug: 'rogers-pass-yoho',
  name: 'Kamloops to Yoho via Rogers Pass',
  region: 'British Columbia · Interior Mountains',
  tag: 'Trans-Canada Highway · Avalanche Country',
  accentLevel: 'danger',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: `${YOHO}/Emerald Lake.jpg`,
  description:
    "The Trans-Canada Highway at its most dramatic — east from Kamloops through Rogers Pass, Canada's snowiest and most avalanche-prone stretch of highway, to the glacier-carved valleys of Yoho National Park.",

  badges: ['280 KM', '~3H DRIVE', 'AVALANCHE CONTROL', 'ROGERS PASS'],

  headlineStats: [
    { value: '280', unit: 'km', label: 'Total Distance' },
    { value: '1,330', unit: 'm', label: 'Rogers Pass Summit' },
    { value: '105mm', unit: '', label: 'Howitzers Used for Avalanche Control' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '~280 km, Kamloops to Field (Yoho) via Trans-Canada Hwy 1 eastbound' },
    { icon: 'time', label: 'Drive Time', value: '~3h non-stop · realistically 4.5–6h with stops at Craigellachie, Revelstoke, and Rogers Pass' },
    { icon: 'fuel', label: 'Fuel Gap', value: 'No station at the Rogers Pass summit itself — fill up in Revelstoke or Golden on either side' },
    { icon: 'cell', label: 'Cell Service', value: 'Notoriously poor to none through the Rogers Pass corridor' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada Hwy 1, paved, mountain grades and switchbacks · Parks Canada pass required through Glacier and Yoho' },
    { icon: 'winter', label: 'Winter Driving', value: 'Winter tires/chains essential — this is one of the snowiest highway corridors in Canada, with planned avalanche-control closures' },
  ],

  seasonalNotes: [
    {
      icon: '💣',
      title: 'Avalanche Control Closures',
      text: 'In winter, Parks Canada and the Canadian Armed Forces run the world’s largest mobile avalanche control program at Rogers Pass, using artillery to trigger controlled slides. Planned highway closures of 20–90+ minutes are routine — build in slack.',
    },
    {
      icon: '❄️',
      title: 'Heavy Snowfall',
      text: 'Rogers Pass is among the snowiest measured locations in Canada. Even outside storm events, expect snow on the road well into spring at the summit.',
    },
    {
      icon: '🦴',
      title: 'Burgess Shale Access',
      text: "Yoho's famous Cambrian fossil beds are UNESCO-listed but only reachable by a guided hike (no independent access) — book through Parks Canada well ahead in summer.",
    },
  ],

  wildlifeSafety: {
    title: 'Mountain Caribou Habitat',
    text: 'Glacier National Park (BC) is one of the last strongholds for mountain caribou in Canada — some trails and areas close seasonally specifically to protect calving herds. Respect every closure, even if the trail looks fine.',
    rules: [
      'Black bears and grizzlies are present throughout — 100m distance rule at every viewpoint and trailhead, not just backcountry trails',
      'Do not stop in the driving lane for wildlife or avalanche-control activity — pull into a marked viewpoint',
      'Watch for highway work crews and temporary signal-controlled single-lane sections, common through the pass in summer',
      'Elk and deer cross frequently near Golden and Field at dawn and dusk',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Secwépemc and Ktunaxa Territory',
    text: 'The western half of this drive, around Kamloops and Salmon Arm, crosses Secwépemc (Shuswap) Nation territory. Further east, toward Golden and Yoho, the route enters land traditionally used by the Ktunaxa Nation. The highway itself traces the path first surveyed for the Canadian Pacific Railway in 1881 — Craigellachie, where the CPR’s Last Spike was driven in 1885, sits right along this stretch.',
    nations: [
      'Secwépemc (Shuswap) Nation',
      'Ktunaxa Nation',
    ],
    note: "As with the Icefields Parkway, there isn't a single dedicated Indigenous cultural centre directly on this corridor — the Craigellachie stop below covers railway history specifically, not Indigenous history, and we're not pretending otherwise.",
  },

  stops: [
    {
      name: 'Kamloops',
      km: 0,
      icon: '🚗',
      text: 'Starting point. Fill the tank — it’s a long stretch before the next guaranteed cheap gas.',
    },
    {
      name: 'Craigellachie — CPR Last Spike',
      km: 115,
      icon: '🚂',
      text: "A short pull-off marking where the Canadian Pacific Railway's transcontinental line was completed in 1885 — a real, quick stop with genuine history, not a tourist trap.",
    },
    {
      name: 'Revelstoke',
      km: 150,
      icon: '⛽',
      text: 'Last full-service town before the long climb into Rogers Pass — top off here regardless of your gauge.',
    },
    {
      name: 'Rogers Pass — Glacier National Park',
      km: 195,
      image: '/bc/parks/Glacier National Park.png',
      text: "The summit, and the heart of Canada's most intensive avalanche-control operation. The Hemlock Grove boardwalk at the visitor centre is worth 15 minutes even if you're not stopping longer.",
    },
    {
      name: 'Yoho — Field & Emerald Lake',
      km: 280,
      image: `${YOHO}/Emerald Lake.jpg`,
      text: 'Journey’s end. Emerald Lake, the Natural Bridge, and Takakkaw Falls are all within a short drive of Field — easily worth staying the night rather than pushing on.',
    },
  ],
};

export default ROGERS_PASS_YOHO;
