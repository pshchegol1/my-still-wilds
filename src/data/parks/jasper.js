// Jasper National Park — данные страницы /park/jasper

const BASE = '/parks/Jasper National Park';

export const JASPER = {
  slug: 'jasper',
  name: 'Jasper National Park',
  province: 'Alberta',
  tag: "Dark Sky Preserve · UNESCO World Heritage",
  heroImage: `${BASE}/Maligne Lake.jpg`,
  heroCaption: 'Maligne Lake · Jasper NP · Alberta',
  description:
    "Canada's largest Rocky Mountain national park — a vast wilderness of glaciers, hot springs, and roaming wildlife. One of the world's largest Dark Sky Preserves, Jasper offers some of the best stargazing on Earth.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1907' },
    { label: 'Area', value: '10,878 km²' },
    { label: 'Rating', value: '4.8 ★' },
    { label: 'Visitors/Year', value: '2.5M+' },
    { label: 'Highest Peak', value: 'Mt Columbia 3,747m' },
    { label: 'Dark Sky', value: "World's Largest" },
  ],

  badges: ['UNESCO', 'Dark Sky Preserve', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  attractions: [
    {
      name: 'Maligne Lake',
      image: `${BASE}/Maligne Lake.jpg`,
      tag: '🏆 Iconic',
      tagLevel: 'blue',
      meta: 'Spirit Island · Boat tours · Most photographed lake in Canada',
    },
    {
      name: 'Miette Hot Springs',
      image: `${BASE}/Miette Hot Springs.jpeg`,
      tag: '♨️ Hot Springs',
      tagLevel: 'danger',
      meta: 'Hottest natural springs in the Rockies · 54°C source temperature',
    },
    {
      name: 'Icefields Parkway',
      image: `${BASE}/Icefields Parkway.png`,
      tag: '🛣️ Scenic Drive',
      tagLevel: 'blue',
      meta: '232 km · Athabasca Glacier · Columbia Icefield · Peyto Lake',
    },
    {
      name: 'Athabasca Falls',
      image: `${BASE}/Athabasca Falls.jpg`,
      tag: '🌊 Waterfall',
      tagLevel: 'blue',
      meta: 'Most powerful waterfall in the Rockies · Year round · 23m drop',
    },
    {
      name: 'Dark Sky Festival',
      image: `${BASE}/Dark Sky Festival.jpg`,
      tag: '🌌 Dark Sky',
      tagLevel: 'gold',
      meta: 'Annual October event · Milky Way visible · No light pollution',
    },
    {
      name: 'Columbia Icefield',
      image: `${BASE}/Columbia Icefield.jpg`,
      tag: '🧊 Glacier',
      tagLevel: 'safe',
      meta: 'Walk on the glacier · Skywalk over valley · Ice Explorer tours',
    },
  ],

  wildlifeWarning:
    'Always carry bear spray in Jasper. Jasper has one of the highest wolf and grizzly populations in the Rockies. Keep 100m from bears and wolves, 30m from all other wildlife.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★★☆ Common — valley floors' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Very common — spring' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★★☆☆ Best chance in Rockies' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★★ Extremely common' },
    { name: 'Moose', level: 'caution', chance: '★★★☆☆ Wetland areas' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Endangered herd' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ High rocky slopes' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ Near Maligne Lake' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails and Maligne Lake accessible. Wildlife very active. Boat tours available. Book everything well in advance. Fewer crowds than Banff.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Best for wildlife and dark sky. Elk rut in September is spectacular. Dark Sky Festival in October. Fewer crowds, lower prices. Milky Way visible on clear nights.',
      rating: 5,
      note: 'Best overall',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Ice climbing, cross-country skiing, snowshoeing. Northern Lights visible on clear nights. Marmot Basin ski resort open. Very few crowds — a true winter wilderness experience.',
      rating: 4,
      note: 'Northern Lights',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Bears emerging from hibernation — high wildlife activity. Waterfalls at peak flow. Some high trails still snowy. Maligne Lake road opens in late May. Budget-friendly season.',
      rating: 3,
      note: 'Wildlife season',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/jasper-national-park',
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/alberta/jasper-national-park?u=m&sh=1Xy3fU',
  trails: [
    { name: 'Valley of the Five Lakes', length: '9 km loop', gain: '115 m gain', time: '2–3 hours', area: 'South of Jasper Town', difficulty: 'Easy' },
    { name: 'Wilcox Pass', length: '8 km return', gain: '340 m gain', time: '3–4 hours', area: 'Icefields Parkway', difficulty: 'Moderate' },
    { name: 'Cavell Meadows Loop', length: '8 km loop', gain: '385 m gain', time: '3–4 hours', area: 'Mt Edith Cavell', difficulty: 'Moderate' },
    { name: 'Skyline Trail', length: '44 km one way', gain: '1,615 m gain', time: '2–3 days', area: 'Maligne Lake', difficulty: 'Hard' },
    { name: 'Maligne Canyon', length: '7.5 km return', gain: '105 m gain', time: '2–3 hours', area: 'Maligne Road', difficulty: 'Easy' },
    { name: 'Mount Edith Cavell via Cavell Meadows', length: '13 km return', gain: '700 m gain', time: '5–6 hours', area: 'Cavell Road', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Edmonton International Airport (YEG) — 4 hours east of Jasper. Or fly into Calgary (YYC) — 3.5 hours south via Icefields Parkway. Both airports have car rentals and shuttles.',
      time: '4h from Edmonton · 3.5h from Calgary',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'From Edmonton take Highway 16 west — the Yellowhead Highway. From Calgary take the Icefields Parkway (Highway 93) north through Banff — one of the world\'s most scenic drives.',
      time: '362 km from Edmonton · Hwy 16 West',
    },
    {
      icon: '🚂',
      title: 'By Train',
      text: 'VIA Rail runs the famous Canadian train from Vancouver to Toronto — stops in Jasper. A scenic overnight journey through the Rockies. Book months in advance for sleeper cabins.',
      time: 'From Vancouver ~17 hours · Scenic route',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass needed. Children under 18 are always free.',
    buyText: 'Jasper Shuttle operates routes within the park in summer — otherwise a car is required.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏰',
      title: 'Fairmont Jasper Park Lodge',
      text: 'The iconic lakeside lodge on Lac Beauvert. Golf course, spa, horseback riding, and stunning mountain views. The most famous hotel in Jasper. Book well in advance.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/hotel/ca/fairmont-jasper-park-lodge.html', level: 'safe' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Jasper-Hotels.d87.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏨',
      title: 'Jasper Town Hotels',
      text: 'Many options in Jasper townsite — Crimson Jasper, Pyramid Lake Resort, Jasper Inn. Walkable town with restaurants and shops. More affordable than Banff.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jasper+National+Park', level: 'safe' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Jasper--Alberta', level: 'danger' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Camping in Jasper',
      text: 'Whistlers Campground is the largest — closest to town. Wapiti Campground open year round. Pocahontas Campground near Miette Hot Springs. Reserve through Parks Canada.',
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/Jasper', level: 'safe' },
      ],
    },
    {
      icon: '🛖',
      title: 'Backcountry Huts',
      text: 'Several backcountry campgrounds along the Skyline Trail and other routes. Backcountry permit required — book through Parks Canada website. Bring all your own gear.',
      links: [
        { label: 'Backcountry Permit', url: 'https://reservation.pc.gc.ca/Jasper/backcountry', level: 'safe' },
      ],
    },
    {
      icon: '🌟',
      title: 'Pyramid Lake Resort',
      text: 'Stunning lake views just minutes from town. Cabins and hotel rooms. Canoe rentals in summer, ice skating in winter. One of the most beautiful settings in Jasper.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/hotel/ca/pyramid-lake-resort.html', level: 'safe' },
      ],
    },
    {
      icon: '🏡',
      title: 'Vacation Rentals',
      text: 'Several vacation homes and cabins available in and around Jasper townsite. Great for families or groups. Often better value than hotels for longer stays.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Jasper--Alberta', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/en-ca/vacation-rentals/canada/alberta/jasper', level: 'blue' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Emergency',
      lines: ['780-852-6156', 'Parks Canada Dispatch', '24/7 Emergency Line'],
    },
    {
      icon: '🐻',
      title: 'Bear Spray',
      text: 'Mandatory on all backcountry trails. Available to rent or buy in Jasper townsite.',
    },
    {
      icon: '🌌',
      title: 'Dark Sky Preserve',
      text: "World's second largest. Best stargazing: August–October. Dark Sky Festival in October each year.",
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Good in Jasper town only. No service on most trails. Always carry a paper map and satellite communicator.',
    },
    {
      icon: '🌡️',
      title: 'Weather',
      text: 'Cooler and wetter than Banff. Pack rain gear year round. Snow possible any month above 2,000m elevation.',
    },
    {
      icon: '🏥',
      title: 'Hospital',
      lines: ['Seton Jasper Healthcare Centre', '518 Robson Street, Jasper', '780-852-3344'],
    },
    {
      icon: '🚌',
      title: 'Jasper Shuttle',
      text: 'Runs to Maligne Lake and Miette Hot Springs in summer. Reduces parking congestion at popular sites.',
    },
    {
      icon: '🔒',
      title: 'Wildlife Corridors',
      text: 'Several trails may be closed due to wildlife activity. Check Parks Canada website before hiking.',
    },
  ],

  gallery: [
    `${BASE}/Maligne Lake.jpg`,
    `${BASE}/Athabasca Falls.jpg`,
    `${BASE}/Columbia Icefield.jpg`,
  ],
};

export default JASPER;
