// Banff National Park — данные страницы /park/banff

const BASE = '/parks/Banff National Park';

export const BANFF = {
  slug: 'banff',
  name: 'Banff National Park',
  province: 'Alberta',
  tag: "Canada's First National Park · UNESCO",
  heroImage: `${BASE}/Moraine Lake.png`,
  heroCaption: 'Moraine Lake · Banff NP · Alberta',
  description:
    "Canada's oldest and most iconic national park — a world of turquoise lakes, ancient glaciers, and rugged Rocky Mountain peaks. Home to grizzly bears, wolves, and elk, Banff is where wilderness meets wonder.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1885' },
    { label: 'Area', value: '6,641 km²' },
    { label: 'Rating', value: '4.9 ★' },
    { label: 'Visitors/Year', value: '4M+' },
    { label: 'Highest Peak', value: 'Mt Forbes 3,612m' },
    { label: 'Wildlife', value: '65+ species' },
  ],

  badges: ['UNESCO World Heritage', 'First Park · 1885', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  attractions: [
    {
      name: 'Lake Louise',
      image: `${BASE}/Lake Louise.png`,
      tag: '🏆 Iconic',
      tagLevel: 'caution',
      meta: 'Turquoise glacier lake · Fairmont Chateau · Year round',
    },
    {
      name: 'Moraine Lake',
      image: `${BASE}/Moraine Lake.png`,
      tag: '📸 Best Photo',
      tagLevel: 'safe',
      meta: 'Valley of the Ten Peaks · June to October only',
    },
    {
      name: 'Icefields Parkway',
      image: `${BASE}/Icefields Parkway.png`,
      tag: '🛣️ Scenic Drive',
      tagLevel: 'caution',
      meta: "232 km · World's most scenic highway · Athabasca Glacier",
    },
    {
      name: 'Cave & Basin Hot Springs',
      image: `${BASE}/Cave & Basin Hot Springs.png`,
      tag: '♨️ Hot Springs',
      tagLevel: 'danger',
      meta: 'Historic thermal springs · Origin of the park · Year round',
    },
    {
      name: 'Town of Banff',
      image: `${BASE}/Town of Banff.png`,
      tag: '🏘️ Town',
      tagLevel: 'gold',
      meta: 'Restaurants · Shops · Museums · Nightlife · Year round',
    },
    {
      name: 'Johnston Canyon',
      image: `${BASE}/Johnston Canyon.png`,
      tag: '💧 Waterfall',
      tagLevel: 'safe',
      meta: 'Spectacular canyon walk · Upper and Lower Falls · Ice walks in winter',
    },
  ],

  wildlifeWarning:
    'Always carry bear spray. Stay 100m from bears and wolves, 30m from all other wildlife. Never feed animals. Report sightings to Parks Canada.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★☆☆ Moderate chance' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Common — spring' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★☆☆☆ Rare sightings' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★★ Very common' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Rare — north areas' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ Rocky slopes' },
    { name: 'Bighorn Sheep', level: 'safe', chance: '★★★★☆ Common roadside' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ Near rivers' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails open, Moraine Lake accessible, wildflowers blooming. Book accommodation 6+ months in advance. Crowds at Lake Louise and Moraine Lake.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Best photography season — golden larches at Lake Louise. Elk rut in September. Less crowded than summer. Cooler temperatures. Some high trails may close by October.',
      rating: 5,
      note: 'Best photos',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Ski season — Lake Louise Ski Resort open. Ice skating on frozen lakes. Johnston Canyon ice walk. Northern Lights possible. Much fewer crowds and lower prices.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Shoulder season — fewer crowds, lower prices. Bears coming out of hibernation — high wildlife activity. Some trails still snowy. Moraine Lake road typically opens late May.',
      rating: 3,
      note: 'Budget friendly',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/banff-national-park',
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/alberta/banff-national-park?u=m&sh=1Xy3fU',
  trails: [
    { name: 'Plain of Six Glaciers', length: '14 km return', gain: '365 m gain', time: '4–5 hours', area: 'Lake Louise', difficulty: 'Moderate' },
    { name: 'Sentinel Pass via Larch Valley', length: '11.6 km return', gain: '725 m gain', time: '5–6 hours', area: 'Moraine Lake', difficulty: 'Hard' },
    { name: 'Johnston Canyon Lower and Upper Falls', length: '5.8 km return', gain: '215 m gain', time: '2–3 hours', area: 'Johnston Canyon', difficulty: 'Easy' },
    { name: 'Sulphur Mountain via Banff', length: '11 km return', gain: '655 m gain', time: '4–5 hours', area: 'Banff Town', difficulty: 'Moderate' },
    { name: 'Bow Summit and Peyto Lake Lookout', length: '3.2 km return', gain: '100 m gain', time: '1–2 hours', area: 'Icefields Parkway', difficulty: 'Easy' },
    { name: 'Mount Temple', length: '17.4 km return', gain: '1,675 m gain', time: '8–10 hours', area: 'Lake Louise', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Calgary International Airport (YYC) — the closest major airport. Flights from Toronto, Vancouver, Montreal, and all major Canadian cities. International connections available.',
      time: '1 hour 20 min from Calgary airport',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Take the Trans-Canada Highway (Highway 1) west from Calgary. The drive is 128 km and takes about 1.5 hours. A Parks Canada Discovery Pass is required to enter — buy at the gate or online.',
      time: '128 km west of Calgary on Hwy 1',
    },
    {
      icon: '🚌',
      title: 'By Bus / Shuttle',
      text: 'Brewster Express and Banff Airporter run daily shuttles from Calgary airport to Banff. Roam Transit operates routes within Banff and to Lake Louise in summer.',
      time: '2 hours from Calgary airport',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass required to enter all 48 national parks. Children under 18 are free.',
    buyText: 'Skip the gate lineup — purchase your pass in advance on the Parks Canada website.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏰',
      title: 'Fairmont Banff Springs',
      text: 'The iconic castle hotel in the heart of Banff. Stunning mountain views, multiple restaurants, spa, and ski-in access. Book well in advance for peak season.',
    },
    {
      icon: '🏨',
      title: 'Banff Town Hotels',
      text: 'Many mid-range options in Banff town — Moose Hotel, Juniper Hotel, and Rimrock Resort. Walking distance to restaurants and shops, easy access to the gondola.',
    },
    {
      icon: '🏕️',
      title: 'Camping',
      text: 'Tunnel Mountain and Two Jack Lake campgrounds offer front-country camping close to town. Reserve on the Parks Canada reservation system months ahead for summer dates.',
    },
  ],

  practical: [
    { icon: '🎫', title: 'Parks Pass', text: 'Required daily or annually — buy online to skip the gate line.' },
    { icon: '🐻', title: 'Bear Country', text: 'Carry bear spray, make noise on trails, store food properly.' },
    { icon: '📶', title: 'Cell Service', text: 'Good in Banff town, spotty to none on backcountry trails.' },
    { icon: '🌡️', title: 'Weather', text: 'Mountain weather changes fast — layers year-round, even in summer.' },
  ],

  gallery: [
    `${BASE}/Lake Louise.png`,
    `${BASE}/Moraine Lake.png`,
    `${BASE}/Johnston Canyon.png`,
  ],
};

export default BANFF;
