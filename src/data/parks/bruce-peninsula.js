// Bruce Peninsula National Park — данные страницы /park/bruce-peninsula
//
// Фото: по просьбе — снимок с карточки (/on/parks/bruce-peninsula.png):
// вид сверху на светлый известняковый берег и бирюзовую воду — похоже на
// Bruce Peninsula, но место съёмки не подтверждено. Достопримечательности
// с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Bruce Peninsula (главная): скалы Niagara Escarpment
//   обрываются в воду Георгиан-Бей; орхидеи, папоротники, чёрные медведи;
//   Grotto и Halfway Log Dump требуют брони; зимний кемпинг и юрты (сезон
//   15 декабря 2026 — 30 апреля 2027, бронь с 17 ноября 2026); Visitor
//   Centre в Tobermory — 120 Chi sin tib dek Road; 519-596-2233,
//   1-888-773-8888, bruce-fathomfive@pc.gc.ca; угроза — 911; нарушения —
//   1-877-852-3100; осенью (1-23 ноября 2026) участки Bruce Trail закрыты
//   для охоты Saugeen Ojibway Nation; рядом — Fathom Five National Marine
//   Park (каменные "цветочные горшки", маяки, дайвинг).
// - Parks Canada, Parking reservations: Grotto — бронь с 1 мая по 31
//   октября, 4-часовые слоты (8-12, 9-13, 12-16, 13-17, 16-20, 17-21);
//   Halfway Log Dump — 19 июня — 7 сентября, 6-часовые слоты; Little Cove —
//   15 мая — 15 сентября (муниципальная система); если всё занято —
//   доступа нет; высаживать людей нельзя; по Cyprus Lake Road пешком
//   нельзя; путь к Grotto, Indian Head Cove и берегу ~1 ч туда-обратно;
//   из Little Cove до Grotto и обратно — больше 12 часов, сложный
//   технический рельеф.
// - Parks Canada, Places to visit: Grotto — природная пещера у Indian Head
//   Cove, ~1 км от парковки; Halfway Log Dump ~1 км, дорога Emmett Lake
//   Road ~8 км гравий, зимой не чистится; Singing Sands — на Lake Huron,
//   хрупкие дюны, редкие цветы, настил, 20 мая — 31 октября, открытые
//   костры запрещены; Cyprus Lake Campground — 232 места и 10 юрт, можно
//   дойти до Grotto пешком.
// - Parks Canada: смотровая вышка у Visitor Centre закрыта на проверку;
//   Burnt Point Loop — напротив Dunks Bay Lookout, для более опытных;
//   длина ~5.3 км — сторонний гид (на странице со "~").
// - Wikipedia: основан в 1987; 156 км² (в карточке так же); ядро
//   Niagara Escarpment World Biosphere Reserve (ЮНЕСКО); заповедник
//   тёмного неба с 2009; 34 вида орхидей; важное место обитания восточного
//   массасаги; соединён с Bruce Trail.
// - НЕ использовано: возраст кедров на скалах, цены парковки, число
//   посетителей.

const IMAGE = '/on/parks/bruce-peninsula.png';

export const BRUCE_PENINSULA = {
  slug: 'bruce-peninsula',
  name: 'Bruce Peninsula National Park',
  shortName: 'Bruce Peninsula',
  province: 'Ontario',
  tag: 'Niagara Escarpment · Est. 1987',
  heroImage: IMAGE,
  heroCaption: 'Bruce Peninsula National Park · ON',
  description:
    'White limestone cliffs of the Niagara Escarpment plunge into the turquoise water of Georgian Bay. Explore the famous Grotto sea cave, wildflower-filled dunes on Lake Huron, and a designated Dark Sky Preserve.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1987' },
    { label: 'Area', value: '156 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Orchids', value: '34 Species' },
    { label: 'Dark Sky', value: 'Since 2009' },
    { label: 'Grotto Parking', value: 'Reserve Ahead' },
  ],

  badges: ['Biosphere Reserve', 'Dark Sky Preserve', 'Grotto'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'Plan Ahead',
    emoji: '🅿️',
    title: 'No Reservation, No Grotto',
    text: 'The Grotto is so popular that parking must be reserved from May 1 to October 31, in 4-hour time slots. When the lots are full, there is no other way in — dropping people off and walking along Cyprus Lake Road are not allowed. Halfway Log Dump needs a reservation in summer too. Camping at Cyprus Lake? You can walk to the Grotto straight from your site.',
    stats: [
      { value: '4 hrs', label: 'Grotto parking slot', level: 'blue' },
      { value: 'May — Oct', label: 'Reservations required', level: 'gold' },
      { value: '~1 km', label: 'Parking to the Grotto', level: 'safe' },
      { value: '232', label: 'Cyprus Lake campsites', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'The Grotto',
      icon: '🌊',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A natural sea cave in the limestone cliffs near Indian Head Cove — about 1 km from the parking lot.',
    },
    {
      name: 'Indian Head Cove',
      icon: '🪨',
      tag: 'Shoreline',
      tagLevel: 'blue',
      meta: 'A rocky bay of clear water and limestone ledges right next to the Grotto.',
    },
    {
      name: 'Halfway Log Dump',
      icon: '🏞️',
      tag: 'Wild Shore',
      tagLevel: 'safe',
      meta: 'Rugged shoreline at the end of a gravel road, with access to the Bruce Trail along the clifftops.',
    },
    {
      name: 'Singing Sands',
      icon: '🌸',
      tag: 'Dunes',
      tagLevel: 'danger',
      meta: 'Lake Huron beach with fragile dunes, rare flowers, and a boardwalk.',
    },
    {
      name: 'Dark Sky Preserve',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'Designated in 2009. Camp at Cyprus Lake for a night under the stars.',
    },
    {
      name: 'Fathom Five (nearby)',
      icon: '⚓',
      tag: 'Marine Park',
      tagLevel: 'olive',
      meta: 'Neighbouring National Marine Park off Tobermory, known for limestone “flowerpots,” lightstations, and scuba diving.',
    },
  ],

  wildlifeWarning:
    'Black bears live in the park — store food securely and never feed wildlife. The park is important habitat for the threatened eastern massasauga rattlesnake: watch your step, stay on trails, and give snakes space.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Forests and campgrounds' },
    { name: 'Eastern Massasauga', level: 'danger', chance: '★★☆☆☆ Rocky, sunny areas' },
    { name: 'Orchids', level: 'safe', chance: '★★★★☆ 34 species' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — reserve Grotto parking or a Cyprus Lake campsite well ahead. Singing Sands is open for beach days.',
      rating: 5,
      note: 'Book ahead',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — November',
      level: 'danger',
      text: 'Fewer crowds; Grotto reservations run until October 31. In November, some Bruce Trail sections close for Saugeen Ojibway Nation hunting — check bulletins.',
      rating: 4,
      note: 'Quieter',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — April',
      level: 'caution',
      text: 'Winter camping and yurts at Cyprus Lake. Gravel roads like Emmett Lake Road are not plowed — don’t drive them in snow.',
      rating: 2,
      note: 'Winter camping',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Grotto reservations start May 1, and Singing Sands opens May 20. A quieter time before the summer crowds.',
      rating: 3,
      note: 'Season opens',
    },
  ],

  trailsNote: {
    title: 'The Bruce Trail Is No Easy Walk',
    text: 'Along the clifftops, the Bruce Trail crosses difficult, technical terrain. A return hike from Little Cove to the Grotto can take more than 12 hours — dangerous for inexperienced hikers. Stay back from cliff edges.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/ontario/bruce-peninsula-national-park',
  trails: [
    { name: 'Grotto & Indian Head Cove', length: '~1 km from parking', time: '~1 hour return', area: 'Cyprus Lake', difficulty: 'Reservation', level: 'gold' },
    { name: 'Halfway Log Dump', length: '~1 km from parking', area: 'Emmett Lake Road', difficulty: 'Reservation', level: 'gold' },
    { name: 'Singing Sands Boardwalk', length: '200 m', time: '5 min', area: 'Dorcas Bay, Lake Huron', difficulty: 'Easy' },
    { name: 'Burnt Point Loop', length: '~5.3 km loop', area: 'Across from Dunks Bay Lookout', difficulty: 'Some Experience', level: 'caution' },
    { name: 'Bruce Trail: Little Cove ↔ Grotto', length: 'Long clifftop route', time: '12+ hours return', area: 'Georgian Bay shore', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Drive Highway 6 north up the Bruce Peninsula toward Tobermory. The Grotto is reached from Cyprus Lake Road; Singing Sands is west of Highway 6 on Dorcas Bay Road.',
      time: 'Grotto: parking reservation required',
    },
    {
      icon: 'ℹ️',
      title: 'Visitor Centre',
      text: 'The Parks Canada Visitor Centre in Tobermory has information and hiking trails and is open year-round. Its parking lot does not give access to the Grotto.',
      time: '120 Chi sin tib dek Road, Tobermory',
    },
    {
      icon: '🚫',
      title: 'No Drop-Offs',
      text: 'Driving in to drop off visitors is not allowed, and you can’t walk along Cyprus Lake Road. If parking is fully booked, there is no access at that time.',
      time: 'Reserve before you go',
    },
  ],

  entryPass: {
    title: 'Parking Reservations',
    text: 'Grotto (May 1 — Oct 31) and Halfway Log Dump (June 19 — Sept 7) require a parking reservation. You pay admission, parking, and a reservation fee.',
    buyText: 'Little Cove parking is booked through the municipality.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Cyprus Lake Campground',
      text: '232 campsites and 10 yurts with drinking water — and you can walk to the Grotto from your site. Some sites and the yurts are open year-round.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Tobermory',
      text: 'The village at the tip of the peninsula, with places to stay and eat — and the gateway to Fathom Five National Marine Park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Tobermory+Ontario', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Tobermory--Ontario', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park violations / safety:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['519-596-2233', '1-888-773-8888', 'bruce-fathomfive@pc.gc.ca'],
    },
    {
      icon: '🧗',
      title: 'Cliff Edges',
      text: 'Limestone cliffs drop straight into the water. Stay back from edges and supervise children.',
    },
    {
      icon: '🔥',
      title: 'Fires',
      text: 'No open fires at Singing Sands — charcoal barbecues only in the designated area.',
    },
    {
      icon: '🐍',
      title: 'Rattlesnakes',
      text: 'Eastern massasaugas are threatened and protected. Give them space — never handle or harm them.',
    },
    {
      icon: '🗼',
      title: 'Lookout Tower',
      text: 'The Visitor Centre observation tower is closed for inspection and maintenance.',
    },
  ],

  gallery: [],
};

export default BRUCE_PENINSULA;
