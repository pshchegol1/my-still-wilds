// Nahanni National Park Reserve — данные страницы /park/nahanni
//
// Фото: по просьбе — снимок с карточки (/nt/parks/naianni.png). ВНИМАНИЕ:
// широкий невысокий водопад с бирюзовой водой и наклонными слоями скал
// очень похож на Bow Falls в Банфе (Альберта), а не на Virginia Falls
// (узкий отвесный водопад 90 м со скалой посередине). Не подтверждено —
// сказано пользователю, предложена замена. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Nahanni (главная): Cirque of the Unclimbables — гранитные
//   шпили над альпийским лугом; Virginia Falls (Náįlįcho) на South Nahanni
//   River — падение вдвое выше Ниагары; ~30,000 км²; объект ЮНЕСКО; дене и
//   их предки пользуются этими землями до 10,000 лет; Dehcho First Nations
//   приветствуют гостей в Nahʔą Dehé; ночёвки требуют бронирования поездки;
//   дневные полёты (Nahanni day flight); сплав — в топ-20 приключений
//   National Geographic; Little Nahanni и Flat River для опытных; походы в
//   Ragged Range; дроны запрещены (до $25,000); офис Fort Simpson
//   867-695-6558, 10005 100 Street, PO Box 348, Fort Simpson NT X0E 0N0;
//   офис Nahanni Butte 867-695-6748; nahanni.info@pc.gc.ca.
// - Wikipedia: регион Дехчо, ~500 км к западу от Йеллоунайфа; резерват с
//   1972 (на карточках было 1976 → исправлено на 1972); 30,050 км² после
//   расширения 2009; ЮНЕСКО в 1978 — среди первых природных объектов
//   мира; South Nahanni — Canadian Heritage River с 1987; четыре каньона со
//   стенами до ~1,000 м; Virginia Falls ~90 м, скала Mason's Rock в
//   центре; Rabbitkettle — крупнейшие туфовые холмы Канады (North Mound
//   27 м), только с сотрудником парка и босиком; гризли, лесные карибу,
//   бараны Далла, ~42 вида млекопитающих, ~180 птиц; легенды Headless
//   Valley; совместное управление — Naha Dehe Consensus Team (с 2000);
//   доступ только гидросамолётом или вертолётом, обычно из Fort Simpson;
//   1,104 посетителя в 2022-23.
// - НЕ использовано: «единственное место гнездования журавля» (ошибка в
//   Wikipedia — они гнездятся в Wood Buffalo), длина реки, цены.

const IMAGE = '/nt/parks/naianni.png';

export const NAHANNI = {
  slug: 'nahanni',
  name: 'Nahanni National Park Reserve',
  shortName: 'Nahanni',
  province: 'Northwest Territories',
  tag: 'UNESCO World Heritage · Est. 1972',
  heroImage: IMAGE,
  heroCaption: 'Nahanni National Park Reserve · NT',
  description:
    'The South Nahanni River cuts through deep canyons and plunges over Virginia Falls — twice the height of Niagara. Among the first natural sites on the UNESCO World Heritage List, this Dehcho wilderness is reached only by floatplane or helicopter.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1972' },
    { label: 'Area', value: '30,050 km²' },
    { label: 'Rating', value: '4.8 ★' },
    { label: 'Virginia Falls', value: '~90 m Drop' },
    { label: 'UNESCO', value: 'Since 1978' },
    { label: 'Access', value: 'Floatplane Only' },
  ],

  badges: ['Virginia Falls', 'River Canyons', 'UNESCO Site'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
  ],

  spotlight: {
    tag: 'Nahʔą Dehé',
    emoji: '🌊',
    title: 'A River Through Four Canyons',
    text: 'The South Nahanni River winds through four great canyons with walls up to about 1,000 m high. At Virginia Falls — Náįlįcho in Dene — the river drops about 90 m around a central rock spire. Dene people and their ancestors have used this land for up to 10,000 years, and the park is managed together with the Dehcho First Nations. In 1978 it became one of the first natural sites on the UNESCO World Heritage List.',
    stats: [
      { value: '~90 m', label: 'Virginia Falls drop', level: 'blue' },
      { value: '4', label: 'River canyons', level: 'danger' },
      { value: '1978', label: 'UNESCO World Heritage', level: 'gold' },
      { value: '~10,000', label: 'Years of Dene presence', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Virginia Falls (Náįlįcho)',
      icon: '💧',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A drop twice the height of Niagara, split by Mason’s Rock — reachable on a day flight from the gateway communities.',
    },
    {
      name: 'South Nahanni River',
      icon: '🛶',
      tag: 'Paddling',
      tagLevel: 'blue',
      meta: 'A legendary multi-day river trip, ranked by National Geographic among the world’s top adventures. A Canadian Heritage River since 1987.',
    },
    {
      name: 'Cirque Of The Unclimbables',
      icon: '🧗',
      tag: 'Alpine',
      tagLevel: 'danger',
      meta: 'Sheer granite spires rising above an alpine meadow in the Ragged Range.',
    },
    {
      name: 'Rabbitkettle Tufa Mounds',
      icon: '♨️',
      tag: 'Rare Geology',
      tagLevel: 'olive',
      meta: 'The largest tufa mounds in Canada, built by hot springs. Visit only with park staff — and barefoot on the North Mound.',
    },
    {
      name: 'The Four Canyons',
      icon: '🏞️',
      tag: 'Canyons',
      tagLevel: 'purple',
      meta: 'Limestone walls up to about 1,000 m high line the river below Virginia Falls.',
    },
    {
      name: 'Headless Valley',
      icon: '👻',
      tag: 'Legends',
      tagLevel: 'safe',
      meta: 'Unsolved deaths in the early 1900s gave this valley its eerie name and stories of a lost gold mine.',
    },
  ],

  wildlifeWarning:
    'Grizzly bears, black bears, and wolves live in Nahanni. This is remote wilderness with limited rescue capability — store food properly, carry bear spray, and know how to handle bear encounters before you go.',
  wildlife: [
    { name: 'Dall Sheep', level: 'safe', chance: '★★★☆☆ Canyon walls' },
    { name: 'Woodland Caribou', level: 'safe', chance: '★★☆☆☆ Uplands' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ River valleys' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forest' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ River flats' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'River trips, alpine hiking, and day flights to Virginia Falls. The Fort Simpson office is open daily in July and August.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'The season winds down fast in the North. Check with the park office before planning a late trip.',
      rating: 2,
      note: 'Season ends',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'October — April',
      level: 'caution',
      text: 'Long, cold northern winter. The Fort Simpson office is open on weekdays.',
      rating: 1,
      note: 'Off season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Breakup on the rivers. A good time to book trips, charters, and reservations.',
      rating: 1,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'Reservations Required For Overnight Trips',
    text: 'Any overnight visit to Nahanni needs a trip reservation. Rivers here are serious: learn about river hazards and difficulty ratings, and know that rescue capability is limited.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nt/nahanni',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Experience Nahanni' },
  trails: [
    { name: 'Day Flight', length: 'Flightseeing', area: 'Virginia Falls & beyond', difficulty: 'Easy', level: 'safe' },
    { name: 'South Nahanni River Trip', length: 'Multi-day', area: 'Canyons & falls', difficulty: 'Expert', level: 'danger' },
    { name: 'Nahanni Alpine Experience', length: 'Trekking', area: 'Ragged Range', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🛩️',
      title: 'By Floatplane',
      text: 'The park can only be reached by floatplane or helicopter, most often from Fort Simpson.',
      time: 'Gateway: Fort Simpson, NT',
    },
    {
      icon: '🏘️',
      title: 'Gateway Communities',
      text: 'Fort Simpson, Fort Liard, and Nahanni Butte are the nearest communities. Parks Canada has offices in Fort Simpson and Nahanni Butte.',
      time: '~500 km west of Yellowknife',
    },
    {
      icon: '📋',
      title: 'Reserve Your Trip',
      text: 'Overnight visits require a trip reservation. Book charters and outfitters well in advance.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Fees & Reservations',
    text: 'Park fees apply. All overnight trips need a reservation with Parks Canada.',
    buyText: 'Contact the Fort Simpson office for charters, outfitters, and trip planning.',
    url: 'https://parks.canada.ca/pn-np/nt/nahanni',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'River trips and treks camp in the wilderness — with a trip reservation.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nt/nahanni', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Fort Simpson, NT',
      text: 'The main gateway community, with the Parks Canada office and floatplane bases.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fort+Simpson', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Fort Simpson Office',
      lines: ['867-695-6558', 'nahanni.info@pc.gc.ca'],
    },
    {
      icon: 'ℹ️',
      title: 'Nahanni Butte Office',
      lines: ['867-695-6748', 'Summer weekdays only'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '10005 100 Street, PO Box 348, Fort Simpson, NT X0E 0N0',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
    {
      icon: '🌊',
      title: 'River Hazards',
      text: 'Learn the river difficulty ratings and hazards before you paddle.',
    },
    {
      icon: '🪶',
      title: 'Dehcho Land',
      text: 'The park is managed together with the Dehcho First Nations.',
    },
  ],

  gallery: [],
};

export default NAHANNI;
