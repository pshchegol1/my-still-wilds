// Riding Mountain National Park — данные страницы /park/riding-mountain
//
// Фото: по просьбе — снимок с карточки (/mb/parks/riding-mountain.png):
// заснеженный луг с сухой травой, ели и холм под голубым небом — похоже на
// луга Riding Mountain зимой (по виду, точное место не подтверждено).
// Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Riding Mountain (главная): территория Договора № 2,
//   работа с анишинабе и первыми нациями Договоров 1, 2, 4; луга, леса,
//   волчьи стаи, орхидеи, озёра и болота; тропы во все сезоны; кемпинг только
//   в отведённых местах, нужен permit; 135 Wasagaming Drive, Wasagaming MB;
//   204-848-7275; rmnp.info@pc.gc.ca; ЧП — 1-877-852-3100; молодёжь
//   бесплатно; Visitor Centre в Wasagaming.
// - Parks Canada, Summer Visitor Guide 2026 (через поиск): Ominnik Marsh
//   1.5 км петля; Grey Owl 7.4 км в одну сторону; Bald Hill 9.5 км в одну
//   сторону; Gorge Creek 5.5 км в одну сторону; J.E.T. 9.8 км.
// - Wikipedia: объявлен 30 мая 1933, открыт в июле; биосферный резерват
//   ЮНЕСКО с 1986; 2,969 км² (на карточках 2,973 → взяли 2,969); на
//   Манитобском уступе; Wasagaming на озере Clear Lake — единственный
//   коммерческий центр; ~13 км до Dauphin, ~95 км до Brandon, ~300 км к
//   северо-западу от Winnipeg; три экосистемы — луга, горная бореальная
//   тайга, восточный лиственный лес; лоси, вапити, волки, одна из самых
//   больших популяций чёрных медведей в Северной Америке, рыси, бобры;
//   вольер Lake Audy — ~40 бизонов от 20, привезённых из Альберты в 1931;
//   233 вида птиц, гагары на Clear Lake; Grey Owl жил в хижине в парке в
//   1931 — хижина доступна по тропе; земли Keeseekoowenin Ojibway изъяты в
//   1935, выселение 1936, возвращены в 1994; >400 км троп; кемпинги
//   Wasagaming, Lake Audy, Moon Lake, Deep Lake, Whirlpool Lake (палатки);
//   22 бэккантри-стоянки; гольф Clear Lake; 336,560 посетителей 2022-23.
// - НЕ использовано: описания троп (в найденном — только длины), даты
//   сезона, расстояние от бизонов в метрах.

const IMAGE = '/mb/parks/riding-mountain.png';

export const RIDING_MOUNTAIN = {
  slug: 'riding-mountain',
  name: 'Riding Mountain National Park',
  shortName: 'Riding Mountain',
  province: 'Manitoba',
  tag: 'Manitoba Escarpment · Est. 1933',
  heroImage: IMAGE,
  heroCaption: 'Riding Mountain National Park · MB',
  description:
    'Rising above the Manitoba prairie on the Manitoba Escarpment, Riding Mountain is where grasslands, boreal forest, and eastern hardwood forest meet. Swim at Clear Lake, see bison at Lake Audy, hike to Grey Owl’s cabin — and share the woods with wolves, elk, and black bears.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1933' },
    { label: 'Area', value: '2,969 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'UNESCO Biosphere', value: 'Since 1986' },
    { label: 'Trails', value: '400+ km' },
    { label: 'Bird Species', value: '233' },
  ],

  badges: ['Three Ecosystems', 'Lake Audy Bison', 'Clear Lake'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Where Ecosystems Meet',
    emoji: '🌲',
    title: 'Three Worlds On One Mountain',
    text: 'Riding Mountain rises from the flat prairie along the Manitoba Escarpment. On top, three ecosystems meet: grasslands, upland boreal forest, and eastern deciduous forest. That mix shelters elk, moose, wolves, and one of the largest black bear populations in North America. Since 1986 the park has been the core of a UNESCO biosphere reserve.',
    stats: [
      { value: '3', label: 'Ecosystems meet here', level: 'safe' },
      { value: '~40', label: 'Bison at Lake Audy', level: 'gold' },
      { value: '400+ km', label: 'Of trails', level: 'blue' },
      { value: '1986', label: 'UNESCO biosphere reserve', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Clear Lake & Wasagaming',
      icon: '🏖️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Beaches, boating, and the park’s only townsite — shops, restaurants, the Visitor Centre, and loons on the lake.',
    },
    {
      name: 'Lake Audy Bison',
      icon: '🦬',
      tag: 'Wildlife',
      tagLevel: 'danger',
      meta: 'A herd of about 40 plains bison, descended from 20 animals brought from Alberta in 1931.',
    },
    {
      name: 'Grey Owl’s Cabin',
      icon: '🛖',
      tag: 'History',
      tagLevel: 'purple',
      meta: 'Grey Owl lived here in 1931 while working to bring back beavers. The cabin is at the end of a 7.4 km trail.',
    },
    {
      name: 'Bald Hill',
      icon: '⛰️',
      tag: 'Viewpoint',
      tagLevel: 'olive',
      meta: 'One of the park’s longer day hikes — 9.5 km one way.',
    },
    {
      name: 'Ominnik Marsh',
      icon: '🦫',
      tag: 'Easy Walk',
      tagLevel: 'safe',
      meta: 'A short 1.5 km loop through marshland near Wasagaming.',
    },
    {
      name: 'Winter Trails',
      icon: '⛷️',
      tag: 'Snow Sports',
      tagLevel: 'blue',
      meta: 'Trails are open in every season — cross-country skiing and snowshoeing in winter.',
    },
  ],

  wildlifeWarning:
    'Riding Mountain has one of the largest black bear populations in North America — store food properly and keep a clean camp. Wolves, elk, and moose live here too: keep your distance, keep pets leashed, and never feed wildlife. Watch for animals on the roads at dawn and dusk.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Common' },
    { name: 'Plains Bison', level: 'danger', chance: '★★★★★ Lake Audy' },
    { name: 'Elk', level: 'caution', chance: '★★★☆☆ Meadows' },
    { name: 'Gray Wolf', level: 'caution', chance: '★☆☆☆☆ Rarely seen' },
    { name: 'Common Loon', level: 'safe', chance: '★★★★☆ Clear Lake' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beach days at Clear Lake, camping, and hiking. Wasagaming is busiest in July and August — reserve campsites early.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fall colour across the forests and quieter trails with cooler hiking weather.',
      rating: 5,
      note: 'Fall colours',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Trails stay open for winter use — cross-country skiing and snowshoeing. Check road and trail conditions.',
      rating: 3,
      note: 'Ski & snowshoe',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snowmelt and muddy trails. Services gradually open — check hours before visiting.',
      rating: 2,
      note: 'Mud season',
    },
  ],

  trailsNote: {
    title: 'Camping Only In Designated Areas',
    text: 'Backcountry trips need a national park camping permit and an entry pass, and you can camp only at designated sites. Check trail conditions before longer hikes.',
  },

  trailsUrl: 'https://pc.gc.ca/pn-np/mb/riding/visit/activ4/etat-sentiers-trail-conditions',
  trailsLinkLabel: 'Trail Conditions On Parks Canada',
  trails: [
    { name: 'Ominnik Marsh', length: '1.5 km loop', area: 'Wasagaming', difficulty: 'Easy' },
    { name: 'Gorge Creek', length: '5.5 km one way', area: 'Steep ravine trail', difficulty: 'Hard' },
    { name: 'Grey Owl', length: '7.4 km one way', area: 'To Grey Owl’s cabin', difficulty: 'Moderate' },
    { name: 'Bald Hill', length: '9.5 km one way', area: 'Day hike', difficulty: 'Long hike', level: 'caution' },
    { name: 'J.E.T.', length: '9.8 km one way', area: 'Day hike', difficulty: 'Long hike', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'About 300 km northwest of Winnipeg. Wasagaming, on Clear Lake, is at the south entrance — about 95 km north of Brandon.',
      time: '~300 km from Winnipeg',
    },
    {
      icon: '🏘️',
      title: 'From Dauphin',
      text: 'Dauphin is just north of the park, about 13 km from its boundary.',
      time: 'North side',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Winnipeg to Riding Mountain route for the drive and stops along the way.',
      time: 'Weekend trip',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Reserve campsites and accommodation through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Wasagaming Campground',
      text: 'The main campground, steps from Clear Lake and the townsite.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Lake Campgrounds',
      text: 'Quieter camping at Lake Audy, Moon Lake, Deep Lake, and tent-only Whirlpool Lake.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🎒',
      title: 'Backcountry',
      text: '22 wilderness campsites along the backcountry trails — permit required.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Wasagaming',
      text: 'The park’s only townsite, with places to stay and eat.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wasagaming', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Wasagaming--Manitoba', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'In the park:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['204-848-7275', 'rmnp.info@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '135 Wasagaming Drive, Wasagaming, MB',
    },
    {
      icon: '🐻',
      title: 'Bear Country',
      text: 'One of North America’s largest black bear populations — lock food away.',
    },
    {
      icon: '🚤',
      title: 'Watercraft',
      text: 'Boats and paddle craft must follow the park’s watercraft rules to protect its lakes.',
    },
    {
      icon: '🪶',
      title: 'Treaty 2 Territory',
      text: 'The park is in Treaty 2 territory and works with Anishinabe and First Nations of Treaties 1, 2, and 4.',
    },
  ],

  gallery: [],
};

export default RIDING_MOUNTAIN;
