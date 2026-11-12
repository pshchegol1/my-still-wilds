// La Mauricie National Park — данные страницы /park/la-mauricie
//
// Фото: по просьбе — снимок с карточки (/qc/parks/la-mauricie.png): вид
// сверху на длинное извилистое озеро среди лесистых холмов — очень похоже
// на озеро Wapizagonke в La Mauricie (по виду, точная точка съёмки не
// подтверждена). Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, La Mauricie (главная): «доступный и дикий»; круглый год —
//   походы, кемпинг, каноэ, велосипед, лыжи, Parkway; домики
//   Saint-Jean-des-Piles, исторические лоджи W8banaki и Andrew; связь с
//   атикамеку и W8banakiak; дневная плата, молодёжь бесплатно; Parkway
//   частично закрыт с 13 окт. 2026 по 27 мая 2027; входы Saint-Jean-des-Piles
//   (A-55, съезд 226) и Saint-Mathieu (A-55, съезд 217); 1-888-773-8888;
//   бронь 1-877-737-3783; экстренная служба парка 819-536-3180;
//   information@pc.gc.ca.
// - Parks Canada, Hiking: более 110 км троп.
// - Parks Canada, Trail description: Les Cascades 2.4 км петля, 103 м, 1 ч;
//   Les Falaises 4 км петля, 268 м, 1.5 ч, обзор с утёсов над Wapizagonke;
//   Les Chutes-Waber 7.2 км петля пешком, 349 м, 6-8 ч, водопад Waber;
//   La Tourbière 300 м по настилу через плавучее болото, орхидеи и
//   хищные растения; Lac-du-Pimbina 14.2 км петля, 636 м, 5.5 ч; участок
//   Mekinac вдоль Saint-Maurice закрыт навсегда из-за оползней.
// - Parks Canada, Camping: три кемпинга Mistagance, Rivière-à-la-Pêche,
//   Wapizagonke — более 500 лесных мест; летний сезон 2026: 14 мая — 25 окт.
// - Wikipedia: основан в 1970; 536 км²; Лаврентийские горы, южная часть
//   Канадского щита; ~15 км к северу от Shawinigan, ~45 км от
//   Trois-Rivières; ~150 озёр; лес — 93%; эмблема — обыкновенная гагара;
//   лоси, чёрные медведи, бобры, выдры, рыси, восточные волки; лесная
//   черепаха под угрозой; наскальные рисунки на утёсе озера Wapizagonke;
//   маршрут каноэ-кемпинга через ~12 озёр с волоками, ~200 мест только с
//   воды; 278,923 посетителя в 2022-23.
// - НЕ использовано: Jean Chrétien (нет в источниках), виды рыб для
//   рыбалки, точные даты зимнего сезона.

const IMAGE = '/qc/parks/la-mauricie.png';

export const LA_MAURICIE = {
  slug: 'la-mauricie',
  name: 'La Mauricie National Park',
  shortName: 'La Mauricie',
  province: 'Quebec',
  tag: 'Lakes Of The Laurentians · Est. 1970',
  heroImage: IMAGE,
  heroCaption: 'La Mauricie National Park · QC',
  description:
    'About 150 lakes tucked between the rolling, forested hills of the Laurentians. Paddle from lake to lake, hike to waterfalls and clifftop lookouts, and listen for loons — the park’s emblem — about 225 km by road from Montréal.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1970' },
    { label: 'Area', value: '536 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Lakes', value: '~150' },
    { label: 'Hiking Trails', value: '110+ km' },
    { label: 'Forest Cover', value: '93%' },
  ],

  badges: ['Canoe Camping', 'Lakes & Loons', 'Year-Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Lake Country',
    emoji: '🛶',
    title: 'A Park Made For Paddling',
    text: 'La Mauricie sits on the southern edge of the Canadian Shield, where glaciers left about 150 lakes in its valleys. A canoe-camping route links about a dozen of them by portages, with around 200 campsites reachable only from the water. On a cliff above Lake Wapizagonke are ancient rock paintings, a reminder that Indigenous peoples fished, hunted, and gathered in these valleys long before the park existed.',
    stats: [
      { value: '~150', label: 'Lakes', level: 'blue' },
      { value: '~200', label: 'Water-access campsites', level: 'safe' },
      { value: '110+ km', label: 'Hiking trails', level: 'olive' },
      { value: '93%', label: 'Covered by forest', level: 'gold' },
    ],
  },

  attractions: [
    {
      name: 'Lake Wapizagonke',
      icon: '🛶',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A long, narrow lake between steep forested hills — the heart of the park for canoeing, beaches, and lookouts.',
    },
    {
      name: 'Waber Falls',
      icon: '💧',
      tag: 'Waterfall',
      tagLevel: 'blue',
      meta: 'Reached by the Les Chutes-Waber trail — a full-day loop on foot, or shorter if you paddle part of the way.',
    },
    {
      name: 'Les Falaises Lookouts',
      icon: '⛰️',
      tag: 'Viewpoint',
      tagLevel: 'danger',
      meta: 'Lookouts on top of rock walls high above Lake Wapizagonke.',
    },
    {
      name: 'Canoe-Camping Route',
      icon: '🏕️',
      tag: 'Backcountry',
      tagLevel: 'safe',
      meta: 'About a dozen lakes linked by portages, with around 200 campsites you can only reach by boat.',
    },
    {
      name: 'Laurentian Parkway',
      icon: '🚗',
      tag: 'Scenic Drive',
      tagLevel: 'olive',
      meta: 'A winding road through the park between the Saint-Jean-des-Piles and Saint-Mathieu entrances, with lookouts and picnic areas.',
    },
    {
      name: 'Heritage Lodges',
      icon: '🏡',
      tag: 'History',
      tagLevel: 'purple',
      meta: 'The W8banaki and Andrew lodges — once private hunting and fishing clubs — now welcome park visitors.',
    },
  ],

  wildlifeWarning:
    'La Mauricie has a healthy black bear population, and bears pass through campgrounds. Store food in your car or a bear locker, keep a clean site, and keep your distance. Watch for moose on the Parkway at dawn and dusk. Black flies and mosquitoes are thick in early summer.',
  wildlife: [
    { name: 'Common Loon', level: 'safe', chance: '★★★★☆ Lakes' },
    { name: 'Beaver', level: 'safe', chance: '★★★☆☆ Ponds & creeks' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forest & camps' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Wetlands' },
    { name: 'Wood Turtle', level: 'safe', chance: '★☆☆☆☆ Rare, at risk' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Canoeing, beaches, and camping at Mistagance, Rivière-à-la-Pêche, and Wapizagonke. Book early. Bug spray is a must in June.',
      rating: 5,
      note: 'Paddling season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Brilliant fall colours over the lakes. Part of the Parkway closes from mid-October; reduced fees in the fall low season.',
      rating: 5,
      note: 'Fall colours',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — March',
      level: 'caution',
      text: 'Cross-country skiing, snowshoeing, and winter hiking from the Rivière à la Pêche and Saint-Gérard sectors. Winter accommodation is available.',
      rating: 3,
      note: 'Ski & snowshoe',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'The park opens sector by sector — the 2026 summer season started gradually from May 14. Check what is open before you go.',
      rating: 2,
      note: 'Gradual opening',
    },
  ],

  trailsNote: {
    title: 'Check Trail Conditions Before You Go',
    text: 'Some trails close for safety — the Mekinac section along the Saint-Maurice River is permanently closed because of landslides. Check Parks Canada trail conditions before your hike.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'La Tourbière', length: '300 m loop', gain: '11 m', time: '15 min', area: 'Esker Picnic Area', difficulty: 'Easy' },
    { name: 'Les Cascades', length: '2.4 km loop', gain: '103 m', time: '1 hour', area: 'Shewenegan Picnic Area', difficulty: 'Easy' },
    { name: 'Les Falaises', length: '4 km loop', gain: '268 m', time: '1.5 hours', area: 'Ruisseau-Brodeur', difficulty: 'Moderate' },
    { name: 'Les Chutes-Waber', length: '7.2 km loop', gain: '349 m', time: '6–8 hours', area: 'Wapizagonke Picnic Area', difficulty: 'Moderate' },
    { name: 'Lac-du-Pimbina', length: '14.2 km loop', gain: '636 m', time: '5.5 hours', area: 'Rivière à la Pêche', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Take Highway 55 north. Exit 226 leads to the Saint-Jean-des-Piles entrance; exit 217 leads to the Saint-Mathieu entrance.',
      time: '~15 km north of Shawinigan',
    },
    {
      icon: '🏙️',
      title: 'From Trois-Rivières',
      text: 'The nearest larger city, about 45 km south of the park.',
      time: '~45 min by car',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Montréal to La Mauricie route for the drive and stops along the way.',
      time: 'Weekend trip',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free. Reduced fees in the fall low season.',
    buyText: 'Book campsites and cabins through the Parks Canada Reservation Service.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Three Campgrounds',
      text: 'Mistagance, Rivière-à-la-Pêche, and Wapizagonke — over 500 wooded sites for tents, trailers, and RVs.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🛶',
      title: 'Canoe-Camping',
      text: 'Around 200 campsites reachable only by water, along a route of lakes and portages.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/qc/mauricie/activ/camping/canot-camping-canoe', level: 'safe' }],
    },
    {
      icon: '🏡',
      title: 'Heritage Lodges & Cabins',
      text: 'The W8banaki and Andrew lodges and rental cabins at Saint-Jean-des-Piles.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/qc/mauricie', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Shawinigan',
      text: 'The nearest town, with hotels and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Shawinigan+Quebec', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Shawinigan--Quebec', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park emergency service:', '819-536-3180'],
    },
    {
      icon: 'ℹ️',
      title: 'Information',
      lines: ['1-888-773-8888', 'Reservations: 1-877-737-3783', 'information@pc.gc.ca'],
    },
    {
      icon: '🦟',
      title: 'Bugs',
      text: 'Black flies and mosquitoes from late May into July — bring repellent and long sleeves.',
    },
    {
      icon: '🗣️',
      title: 'Language',
      text: 'The region works in French. Park staff manage in English, but signs are mostly in French.',
    },
    {
      icon: '🚧',
      title: 'Parkway Closures',
      text: 'Part of the Parkway is closed from mid-October to late May. Check entrance and parking status.',
    },
    {
      icon: '🐻',
      title: 'Bear Country',
      text: 'Keep food locked away and your campsite clean.',
    },
  ],

  gallery: [],
};

export default LA_MAURICIE;
