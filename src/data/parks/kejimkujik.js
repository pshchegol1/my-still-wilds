// Kejimkujik National Park and National Historic Site — данные страницы
// /park/kejimkujik
//
// Фото: по просьбе — снимок с карточки (/ns/parks/kejimkujik.png): тихое
// озеро/река с каменистым берегом в смешанном лесу — похоже на Kejimkujik
// (по виду, точное место не подтверждено). Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Kejimkujik (главная): юго-запад Новой Шотландии; культура
//   мигмак, воды, по которым мигмак плавали тысячи лет; единственный в NS
//   dark-sky preserve; Seaside — Port Joli, атлантический берег, белый песок;
//   петроглифы мигмак; кемпинг Jeremy's Bay, крытое жильё, бэккантри;
//   с 1 ноября до выходных Victoria Day — вход бесплатный, большинство
//   услуг закрыто, тропы не обслуживаются и не патрулируются; полный
//   сервис — июль-август; 3005 Main Parkway, Maitland Bridge NS B0T 1B0;
//   Seaside — 1188 St Catherines River Road, Port Joli; Visitor Centre
//   902-682-2772 (май-окт.), администрация 902-682-2770,
//   kejimkujik@pc.gc.ca; ЧП в парке 1-800-565-2224; 911.
// - Parks Canada, Hiking: Mill Falls 2 км т/о; Hemlocks and Hardwoods 5 км
//   петля, хемлоки ~300 лет; Peter Point 1.9 км; Merrymakedge 2.7 км;
//   Slapfoot 3.7 км, смотровая вышка; Channel Lake 24 км петля (бэккантри);
//   Liberty Lake 56 км; Seaside: Harbour Rocks 2.8 км в одну сторону, тюлени,
//   пляж закрыт в сезон гнездования зуйков; Port Joli Head 4.4 км петля,
//   сложная, «волны-убийцы» — держаться от кромки воды.
// - Wikipedia: внутренняя часть 404 км², Seaside 22 км² (на карточке NS —
//   381 → взяли 404); национальный парк и одновременно национальное
//   историческое место по всей территории — единственный такой в Канаде;
//   ~500 петроглифов, в основном 1700-1800-х, одна площадка — только с
//   гидом летом; ~46 озёр, Kejimkujik Lake 26 км²; река Mersey — путь мигмак
//   к Атлантике; черепаха Бландинга, восточный ленточный уж; зуёк (piping
//   plover) на Seaside, тюлени; куница возвращена в 1986; хемлоковый
//   хермес угрожает хемлокам с 2018; Jeremy's Bay — 355 мест; Seaside
//   ~93 км от основной части; 75,284 посетителя 2022-23.
// - Год основания: 1969 (решение) / 1974 (официально, Canadian
//   Encyclopedia) → на странице 1974, как на карточке.
// - НЕ использовано: год Dark Sky и год статуса Historic Site (источники
//   расходятся/не найдены), длительность походов.

const IMAGE = '/ns/parks/kejimkujik.png';

export const KEJIMKUJIK = {
  slug: 'kejimkujik',
  name: 'Kejimkujik National Park',
  shortName: 'Kejimkujik',
  province: 'Nova Scotia',
  tag: 'Mi’kmaw Waters & Dark Skies · Est. 1974',
  heroImage: IMAGE,
  heroCaption: 'Kejimkujik National Park · NS',
  description:
    'Quiet lakes and rivers that the Mi’kmaq have paddled for thousands of years, old hemlock forests, rock carvings, and Nova Scotia’s only dark-sky preserve — plus a wild Atlantic coastline at Kejimkujik Seaside.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1974' },
    { label: 'Area', value: '404 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Lakes', value: '~46' },
    { label: 'Petroglyphs', value: '~500' },
    { label: 'Dark Sky', value: 'Only One In NS' },
  ],

  badges: ['Canoeing', 'Mi’kmaw Petroglyphs', 'Dark-Sky Preserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Living Culture',
    emoji: '🪶',
    title: 'A Park And A National Historic Site',
    text: 'Kejimkujik is the only place in Canada where the whole landscape is both a national park and a national historic site. For thousands of years the Mi’kmaq travelled these lakes and the Mersey River to the Atlantic. Around 500 petroglyphs — figures carved into slate on the shores of Kejimkujik Lake, mostly from the 1700s and 1800s — record their life here. Only one petroglyph site is open to the public, on a guided tour in summer.',
    stats: [
      { value: '~500', label: 'Mi’kmaw petroglyphs', level: 'purple' },
      { value: '~46', label: 'Lakes in the park', level: 'blue' },
      { value: '300 yrs', label: 'Old hemlock trees', level: 'olive' },
      { value: '22 km²', label: 'Kejimkujik Seaside', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Petroglyph Tour',
      icon: '🪨',
      tag: 'Mi’kmaw Heritage',
      tagLevel: 'purple',
      meta: 'See Mi’kmaw rock carvings on the shore of Kejimkujik Lake — open only with a guide in summer.',
    },
    {
      name: 'Paddling The Lakes',
      icon: '🛶',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Canoe routes link lakes by portages, some of them centuries old. Equipment rentals are available.',
    },
    {
      name: 'Dark-Sky Preserve',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'blue',
      meta: 'Nova Scotia’s only dark-sky preserve — the Milky Way over the lakes on clear nights.',
    },
    {
      name: 'Hemlocks & Hardwoods',
      icon: '🌲',
      tag: 'Old Forest',
      tagLevel: 'olive',
      meta: 'A 5 km loop with boardwalks through a stand of hemlocks around 300 years old.',
    },
    {
      name: 'Mill Falls',
      icon: '💧',
      tag: 'Easy Walk',
      tagLevel: 'safe',
      meta: 'A short trail along the Mersey River to the Mill Falls viewing area.',
    },
    {
      name: 'Kejimkujik Seaside',
      icon: '🏖️',
      tag: 'Atlantic Coast',
      tagLevel: 'danger',
      meta: 'White sand, turquoise water, and seals on the rocks at Port Joli — about 93 km from the inland park.',
    },
  ],

  wildlifeWarning:
    'Blanding’s turtles and eastern ribbonsnakes — both species at risk — live here: drive slowly on park roads and never move or handle them. At Kejimkujik Seaside, parts of the beach close while endangered piping plovers nest; keep dogs on a leash and watch seals from a distance.',
  wildlife: [
    { name: 'Blanding’s Turtle', level: 'safe', chance: '★★☆☆☆ Lakes & roads' },
    { name: 'Eastern Ribbonsnake', level: 'safe', chance: '★☆☆☆☆ Wetlands, at risk' },
    { name: 'Harbour & Grey Seals', level: 'safe', chance: '★★★☆☆ Seaside' },
    { name: 'Piping Plover', level: 'safe', chance: '★☆☆☆☆ Seaside, endangered' },
    { name: 'American Marten', level: 'safe', chance: '★☆☆☆☆ Forest, reintroduced' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'Full services, paddling, swimming beaches, and guided petroglyph tours. Book Jeremy’s Bay campsites early.',
      rating: 5,
      note: 'Full services',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fall colours on the lakes and fewer bugs. Limited services; the Visitor Centre and camping close on October 31.',
      rating: 4,
      note: 'Quiet & colourful',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May — June',
      level: 'olive',
      text: 'Facilities open on the Victoria Day weekend with limited services in May and June.',
      rating: 2,
      note: 'Season opens',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — mid-May',
      level: 'caution',
      text: 'Free entry, self-guided visits, and stargazing. Most facilities are closed, and trails are not maintained or patrolled.',
      rating: 2,
      note: 'Self-guided',
    },
  ],

  trailsNote: {
    title: 'Off-Season: Trails Are Not Patrolled',
    text: 'From November 1 to the Victoria Day weekend, trails are not maintained or patrolled and you are responsible for your own safety. At Seaside, keep back from the water’s edge on Port Joli Head — rogue waves can surge onto the rocks.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/ns/kejimkujik/activ/rando-hiking',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Mill Falls', length: '2 km return', area: 'Mersey River', difficulty: 'Easy' },
    { name: 'Hemlocks and Hardwoods', length: '5 km loop', area: 'Old-growth forest', difficulty: 'Easy' },
    { name: 'Harbour Rocks', length: '2.8 km one way', area: 'Kejimkujik Seaside', difficulty: 'Easy' },
    { name: 'Port Joli Head', length: '4.4 km loop', area: 'Kejimkujik Seaside', difficulty: 'Hard' },
    { name: 'Channel Lake', length: '24 km loop', area: 'Backcountry', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'Inland Park',
      text: 'The main entrance is at Maitland Bridge in southwest Nova Scotia — 3005 Main Parkway.',
      time: 'From Halifax by car',
    },
    {
      icon: '🌊',
      title: 'Kejimkujik Seaside',
      text: 'A separate coastal area at Port Joli on the Atlantic shore, about 93 km from the inland park.',
      time: '1188 St Catherines River Rd',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Halifax to Kejimkujik route for the drive and stops along the way.',
      time: 'Weekend trip',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply from the Victoria Day weekend to October 31, or use a Parks Canada Discovery Pass. Youth 17 and under enter free. No entry fees from November 1 to the Victoria Day weekend.',
    buyText: 'Book Jeremy’s Bay campsites, roofed accommodation, and backcountry sites through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Jeremy’s Bay Campground',
      text: 'The park’s main campground, with about 355 sites near Kejimkujik Lake.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Roofed Accommodation',
      text: 'Ready-to-camp options for a night under the dark skies without a tent.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🛶',
      title: 'Backcountry Sites',
      text: 'Paddle-in and hike-in campsites along the lakes and backcountry trails.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park emergencies:', '1-800-565-2224'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['Visitor Centre: 902-682-2772', 'Office: 902-682-2770', 'kejimkujik@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '3005 Main Parkway, Maitland Bridge, NS B0T 1B0',
    },
    {
      icon: '🌌',
      title: 'Stargazing',
      text: 'Best in fall, winter, and spring on clear nights. Use a red light to keep your night vision.',
    },
    {
      icon: '🐢',
      title: 'Species At Risk',
      text: 'Drive slowly and never handle turtles or snakes — several species here are at risk.',
    },
    {
      icon: '🐕',
      title: 'Dogs',
      text: 'Keep dogs on a leash at all times. Some Seaside beach areas close during plover nesting.',
    },
  ],

  gallery: [],
};

export default KEJIMKUJIK;
