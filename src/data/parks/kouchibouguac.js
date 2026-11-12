// Kouchibouguac National Park — данные страницы /park/kouchibouguac
//
// Фото: по просьбе — снимок с карточки (/nb/parks/kouchibouguac.png):
// песчаные дюны с травой и забором от песка у моря — похоже на дюны парка
// (Kellys Beach), но такой пейзаж бывает на многих берегах — точное место не
// подтверждено. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Kouchibouguac (главная): тёплые пляжи и эстуарии, леса и
//   болота; неуступленная территория мигмак; Dark Sky Preserve; пляжи,
//   велосипед, походы, каноэ, рыбалка, зима; палатки/трейлеры, oTENTik,
//   примитивный кемпинг; открыт круглый год; 186 Route 117, Kouchibouguac NB
//   E4X 2P1; 506-876-2443; kouchibouguac@pc.gc.ca; молодёжь бесплатно.
// - Parks Canada, Hiking (через поиск): Pines 0.9 км петля; Salt Marsh
//   0.9 км; Kellys Beach Boardwalk 1.2 км в одну сторону, 30-45 мин, самая
//   популярная тропа — солёное болото, лагуна, дюны; Bog 1.8 км; Osprey
//   5.3 км; 60 км велодорожек.
// - Parks Canada, Camping (через поиск): South Kouchibouguac — 312 мест,
//   2 км от Kellys Beach; Côte-à-Fabien — ~31-32 места, у лагуны, тише.
// - Wikipedia: основан в 1969; 238 км² (на карточке NB было 239 → теперь
//   238); барьерные острова, ~25 км дюн, лагуны, солёные болота, болота,
//   леса; Kouchibouguac — от мигмакского «река длинных приливов»; ~50
//   видов под охраной SARA, в т.ч. исчезающий зуёк (piping plover); вторая
//   по величине колония крачек в Северной Америке; серые и обыкновенные
//   тюлени; Dark Sky с 2009; при создании парка изъяли земли ~215 семей
//   (>1,200 человек) из 7 общин, в основном потомков мигмак и акадийцев;
//   243,489 посетителей 2022-23.
// - НЕ использовано: имя Jackie Vautour, расстояние до Moncton, даты
//   сезона, температура воды.

const IMAGE = '/nb/parks/kouchibouguac.png';

export const KOUCHIBOUGUAC = {
  slug: 'kouchibouguac',
  name: 'Kouchibouguac National Park',
  shortName: 'Kouchibouguac',
  province: 'New Brunswick',
  tag: 'Dunes, Lagoons & Dark Skies · Est. 1969',
  heroImage: IMAGE,
  heroCaption: 'Kouchibouguac National Park · NB',
  description:
    'Warm beaches, about 25 km of sand dunes, quiet lagoons, and salt marshes on New Brunswick’s east coast. Cycle 60 km of gentle trails, watch seals and terns, and stay for the stars in a dark-sky preserve.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1969' },
    { label: 'Area', value: '238 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Sand Dunes', value: '~25 km' },
    { label: 'Bike Trails', value: '60 km' },
    { label: 'Dark Sky', value: 'Since 2009' },
  ],

  badges: ['Warm Beaches', 'Cycling', 'Dark-Sky Preserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'River Of Long Tides',
    emoji: '🏖️',
    title: 'A Coast Of Dunes And Lagoons',
    text: 'The park’s name comes from the Mi’kmaq name of the Kouchibouguac River — “river of the long tides.” Barrier islands with about 25 km of sand dunes shelter calm lagoons and salt marshes. They are home to the second-largest tern colony in North America, grey and harbour seals, and endangered piping plovers. The park’s creation also displaced about 215 families, mostly of Acadian and Mi’kmaq descent — a history Parks Canada has since changed its rules to avoid repeating.',
    stats: [
      { value: '~25 km', label: 'Of sand dunes', level: 'gold' },
      { value: '#2', label: 'Tern colony in North America', level: 'blue' },
      { value: '~50', label: 'Species at risk protected', level: 'danger' },
      { value: '60 km', label: 'Of bike trails', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Kellys Beach',
      icon: '🏖️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The park’s most popular spot — a 1.2 km boardwalk across salt marsh and lagoon to the dunes and beach.',
    },
    {
      name: 'Cycling Network',
      icon: '🚲',
      tag: 'Family Friendly',
      tagLevel: 'safe',
      meta: '60 km of gentle bike paths through forest and along the coast — ideal for easy exploring.',
    },
    {
      name: 'Seals & Terns',
      icon: '🦭',
      tag: 'Wildlife',
      tagLevel: 'blue',
      meta: 'Grey and harbour seals rest on the sandbars, and the second-largest tern colony in North America nests here.',
    },
    {
      name: 'Dark-Sky Preserve',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'Night skies protected from light pollution since 2009.',
    },
    {
      name: 'Bog Trail',
      icon: '🌿',
      tag: 'Easy Walk',
      tagLevel: 'olive',
      meta: 'A 1.8 km walk into a peat bog — a very different world from the beach.',
    },
    {
      name: 'Paddling The Lagoons',
      icon: '🛶',
      tag: 'On The Water',
      tagLevel: 'danger',
      meta: 'Calm lagoons and rivers for canoeing and kayaking, with a boat launch in the park.',
    },
  ],

  wildlifeWarning:
    'Piping plovers are endangered and nest on the beaches — respect closed areas and keep dogs leashed. Watch seals from a distance and never approach them on the sand. Stay on boardwalks to protect fragile dunes and marshes.',
  wildlife: [
    { name: 'Grey Seal', level: 'safe', chance: '★★★☆☆ Sandbars' },
    { name: 'Common Tern', level: 'safe', chance: '★★★★☆ Summer colony' },
    { name: 'Piping Plover', level: 'safe', chance: '★☆☆☆☆ Endangered' },
    { name: 'Harbour Seal', level: 'safe', chance: '★★☆☆☆ Lagoons' },
    { name: 'Fisher', level: 'safe', chance: '★☆☆☆☆ Rarely seen' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beach season — swimming, cycling, and paddling. Reserve South Kouchibouguac campsites early.',
      rating: 5,
      note: 'Beach season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Quiet beaches, fall colours, and clear nights for stargazing. Visitor services run until October.',
      rating: 4,
      note: 'Quiet & starry',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'A quiet time before the beach season. Endangered piping plovers begin nesting — respect any posted beach closures.',
      rating: 3,
      note: 'Quiet season',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — March',
      level: 'caution',
      text: 'The park is open year-round, with winter activities on offer. Check Parks Canada for current conditions.',
      rating: 2,
      note: 'Winter trails',
    },
  ],

  trailsNote: {
    title: 'Stay On The Boardwalks',
    text: 'Dunes and salt marshes are fragile, and endangered piping plovers nest on the beaches. Stay on boardwalks and marked trails, and follow any beach closures.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nb/kouchibouguac/activ/randonnee-hiking',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Pines', length: '0.9 km loop', time: '~30 min', area: 'Forest', difficulty: 'Easy' },
    { name: 'Salt Marsh', length: '0.9 km', area: 'Salt marsh', difficulty: 'Short walk', level: 'safe' },
    { name: 'Kellys Beach Boardwalk', length: '1.2 km one way', time: '30–45 min', area: 'Marsh, lagoon & dunes', difficulty: 'Easy' },
    { name: 'Bog', length: '1.8 km', area: 'Peat bog', difficulty: 'Short walk', level: 'safe' },
    { name: 'Osprey', length: '5.3 km', area: 'Near Côte-à-Fabien', difficulty: 'Longer walk', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The park is on New Brunswick’s east coast, at 186 Route 117 in Kouchibouguac.',
      time: 'Route 117',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Moncton, then drive north along the coast. You will need a car or bike in the park.',
      time: 'Then continue by car',
    },
    {
      icon: '🚲',
      title: 'Around The Park',
      text: 'The 60 km bike network links campgrounds, beaches, and trails — many visitors explore by bike.',
      time: 'Bring your bike',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Reserve campsites and oTENTiks through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'South Kouchibouguac',
      text: 'The main campground — 312 sites, about 2 km from Kellys Beach, with showers and access to the bike trails.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Côte-à-Fabien',
      text: 'A smaller, quieter campground by the lagoon, near the Osprey trail.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nb/kouchibouguac/activ/camping/fabien', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Nearby Towns',
      text: 'Inns and cottages in the villages along the coast near the park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kouchibouguac', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Kouchibouguac--New-Brunswick', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park office:', '506-876-2443'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['506-876-2443', 'kouchibouguac@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '186 Route 117, Kouchibouguac, NB E4X 2P1',
    },
    {
      icon: '🐦',
      title: 'Nesting Birds',
      text: 'Endangered piping plovers nest on the beaches. Follow any posted closures.',
    },
    {
      icon: '🌌',
      title: 'Night Sky',
      text: 'Bring a red light — the dark-sky preserve is best on clear, moonless nights.',
    },
    {
      icon: '🪶',
      title: 'Mi’gmaq Territory',
      text: 'The park is on unceded Mi’gmaq territory.',
    },
  ],

  gallery: [],
};

export default KOUCHIBOUGUAC;
