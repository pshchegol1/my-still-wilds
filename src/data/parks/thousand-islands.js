// Thousand Islands National Park — данные страницы /park/thousand-islands
//
// Фото: по просьбе — снимок с карточки (/on/parks/thousand-islands.png).
// ВНИМАНИЕ: на нём Power House замка Boldt Castle (Heart Island,
// Alexandria Bay) — это американская сторона реки, штат Нью-Йорк, НЕ
// канадский национальный парк. Сказано пользователю; лучше заменить.
// Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Thousand Islands (главная): гранитные острова на реке
//   Св. Лаврентия, переходная зона между Канадским щитом и горами
//   Адирондак; на острова — только на лодке; каякинг (своя лодка или
//   прокат), аудиотуры в приложении Parks Canada; кемпинг на островах и
//   oTENTik; Mallorytown — 2 County Road 5; 613-923-5261, 1-888-773-8888,
//   pnmille-iles-thousandislandsnp@pc.gc.ca; экстренно — 911; дикие
//   животные и пожары — 1-877-852-3100; закрыт на сезон до мая 2027.
// - Parks Canada, Hours (2026): Mallorytown Landing — 15 мая — 7 сентября
//   (потом самостоятельная регистрация до 12 октября); тропы Jones Creek и
//   Landons Bay — 15 мая — 12 октября; острова — 15 мая — 12 октября.
// - Parks Canada, Hiking: Jones Creek — от 20-минутных прогулок до 2-часовых
//   походов, смотровые площадки, скалы, сосны (12 км сети — Parks Canada
//   facilities, по поиску); Landons Bay — 6 троп, Lookout Trail — "лучший
//   природный вид в районе Тысячи островов" (7 км сети); Mallorytown
//   Landing — Smoky Fire Trail 850 м, Six Nations Trail 1.1 км (закрыт после
//   бури); Grenadier Island — тропы к историческим зданиям; тропы открыты
//   круглый год, но вне сезона не обслуживаются; Wolf и Hawk Loop —
//   временно закрыты (стройка парковки).
// - Parks Canada, Facilities: 19 островных участков между Kingston и
//   Brockville; на большинстве — причалы, компостные туалеты, тропы,
//   навесы, простые стоянки.
// - Wikipedia: основан в 1904 — первый национальный парк Канады к востоку
//   от Скалистых гор; до 2013 — St. Lawrence Islands National Park; 24.4 км²
//   (на карточке 24); 21 остров + островки; в Frontenac Arch Biosphere
//   Reserve; ирокезы ловили рыбу здесь летом в начале 1600-х; башня
//   Cathcart Tower на Cedar Island — история войны 1812 года.
// - НЕ использовано: виды под угрозой (полоз, черепахи) — не подтверждены.

const IMAGE = '/on/parks/thousand-islands.png';

export const THOUSAND_ISLANDS = {
  slug: 'thousand-islands',
  name: 'Thousand Islands National Park',
  shortName: 'Thousand Islands',
  province: 'Ontario',
  tag: 'St. Lawrence River · Est. 1904',
  heroImage: IMAGE,
  heroCaption: 'Thousand Islands region · St. Lawrence River',
  description:
    'Granite islands scattered along the St. Lawrence River, where the Canadian Shield meets the Adirondack Mountains. Paddle between them, camp on an island of your own, and explore Canada’s first national park east of the Rockies.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1904' },
    { label: 'Area', value: '24 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Island Properties', value: '19' },
    { label: 'Season', value: 'May 15 — Oct 12' },
    { label: 'Access', value: 'Boat To Islands' },
  ],

  badges: ['Paddling', 'Island Camping', 'Biosphere Reserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'First In The East',
    emoji: '🏝️',
    title: 'Canada’s First National Park East Of The Rockies',
    text: 'Created in 1904 and known as St. Lawrence Islands National Park until 2013, this is one of Canada’s smallest national parks — about 24 km² of islands and shoreline between Kingston and Brockville. It sits in the Frontenac Arch Biosphere Reserve, a granite bridge where the Canadian Shield crosses the river toward the Adirondacks. People have fished these islands for thousands of years, and Cathcart Tower on Cedar Island recalls the War of 1812.',
    stats: [
      { value: '1904', label: 'Park established', level: 'gold' },
      { value: '19', label: 'Island properties', level: 'blue' },
      { value: '2013', label: 'Renamed Thousand Islands', level: 'safe' },
      { value: '1812', label: 'Cathcart Tower history', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Island Camping',
      icon: '🏕️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Paddle or boat to an island campsite — most park islands have docks, composting toilets, trails, and simple sites.',
    },
    {
      name: 'Landons Bay Lookout',
      icon: '🔭',
      tag: 'Viewpoint',
      tagLevel: 'blue',
      meta: 'Parks Canada calls it the best natural view in the Thousand Islands. Six trails wind through fields, forest, and wetlands.',
    },
    {
      name: 'Jones Creek',
      icon: '🌲',
      tag: 'Hiking',
      tagLevel: 'safe',
      meta: 'Rocky lookouts and tall pines, with walks from 20 minutes to 2-hour hikes off the Thousand Islands Parkway.',
    },
    {
      name: 'Mallorytown Landing',
      icon: '⛵',
      tag: 'Gateway',
      tagLevel: 'olive',
      meta: 'The park’s mainland hub — oTENTiks, picnic areas, a boat launch, and short trails.',
    },
    {
      name: 'Grenadier Island',
      icon: '🏚️',
      tag: 'History',
      tagLevel: 'danger',
      meta: 'Trails lead to historic buildings, and an old township road crosses the island.',
    },
    {
      name: 'Cedar Island',
      icon: '🗼',
      tag: 'War Of 1812',
      tagLevel: 'purple',
      meta: 'Home of Cathcart Tower, a reminder of the river’s military past.',
    },
  ],

  wildlifeWarning:
    'Many animals share these islands — coyotes, deer, foxes, beavers, and raccoons. Keep food and garbage sealed and out of reach, especially on island campsites, and never feed wildlife. Report wildlife incidents to 1-877-852-3100.',
  wildlife: [
    { name: 'White-tailed Deer', level: 'safe', chance: '★★★☆☆ Mainland trails' },
    { name: 'Raccoon', level: 'safe', chance: '★★★★☆ Campsites at night' },
    { name: 'Beaver', level: 'safe', chance: '★★★☆☆ Quiet bays' },
    { name: 'Red Fox', level: 'safe', chance: '★★☆☆☆ Forest edges' },
    { name: 'Turkey Vulture', level: 'safe', chance: '★★★★☆ Overhead' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Full services at Mallorytown Landing until early September. Prime paddling and island camping season — book campsites and oTENTiks ahead.',
      rating: 5,
      note: 'Peak season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — mid-October',
      level: 'danger',
      text: 'Self-serve registration after Labour Day. Island facilities and mainland trailheads stay open until mid-October.',
      rating: 4,
      note: 'Quieter',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Facilities close for the season. Trails can still be used for hiking and snowshoeing, but they are not maintained.',
      rating: 1,
      note: 'Off season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'The park reopens on May 15 — a quiet time to paddle before summer crowds.',
      rating: 3,
      note: 'Season opens',
    },
  ],

  trailsNote: {
    title: 'Some Trails Are Closed',
    text: 'The Six Nations Trail at Mallorytown Landing is closed after storm damage, and the Wolf and Hawk Loop trails are closed during parking lot construction. Check Parks Canada bulletins before you go.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/on/1000/activ/randon-hike',
  trailsLinkLabel: 'Trails On Parks Canada',
  trails: [
    { name: 'Jones Creek Trails', length: '~12 km network', time: '20 min — 2 hours', area: 'Thousand Islands Parkway', difficulty: 'Easy — Moderate', level: 'caution' },
    { name: 'Landons Bay Trails', length: '~7 km network', time: '1 hour — full day', area: 'Landons Bay', difficulty: 'Lookout', level: 'blue' },
    { name: 'Smoky Fire Trail', length: '850 m', area: 'Mallorytown Landing', difficulty: 'Easy' },
    { name: 'Grenadier Island Trails', length: 'Island trails', area: 'Boat access', difficulty: 'History', level: 'danger' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The park lies along the St. Lawrence between Kingston and Brockville. Mallorytown Landing, Jones Creek, and Landons Bay are reached from the Thousand Islands Parkway.',
      time: 'Mallorytown: 2 County Road 5',
    },
    {
      icon: '🛶',
      title: 'By Boat Or Kayak',
      text: 'The islands can only be reached by boat. Bring your own or rent one locally; boats launch from Mallorytown Landing.',
      time: 'Boat access only for islands',
    },
    {
      icon: '📱',
      title: 'No Boat?',
      text: 'Parks Canada lists options for visitors without a boat — check their “getting here” page before you plan an island trip.',
      time: 'Plan ahead',
    },
  ],

  entryPass: {
    title: 'Fees & Reservations',
    text: 'Regular Parks Canada fees apply. Youth 17 and under enter free. Island campsites and oTENTiks are reserved online.',
    buyText: 'After Labour Day, registration is self-serve.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏝️',
      title: 'Island Campsites',
      text: 'Primitive campsites on park islands, most with docks, shelters, and composting toilets. Bring everything you need by boat.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'oTENTiks',
      text: 'Ready-to-camp tent-cabins at Mallorytown Landing and on some islands.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Kingston & Gananoque',
      text: 'Stay in nearby towns along the river and visit the park for the day.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gananoque+Ontario', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Wildlife incidents & wildfires:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['613-923-5261', '1-888-773-8888'],
    },
    {
      icon: '🛶',
      title: 'On The River',
      text: 'Large ships travel the St. Lawrence. Wear a life jacket and keep clear of shipping traffic.',
    },
    {
      icon: '🎧',
      title: 'Audio Tours',
      text: 'Self-guided audio tours are available in the Parks Canada app.',
    },
    {
      icon: '🗺️',
      title: 'Trail Brochures',
      text: 'Brochures with lengths, difficulty, and lookouts are posted at trailheads.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drones are not permitted in national parks.',
    },
  ],

  gallery: [],
};

export default THOUSAND_ISLANDS;
