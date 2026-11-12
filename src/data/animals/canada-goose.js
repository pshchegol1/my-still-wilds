// Canada Goose — данные страницы /wildlife/canada-goose
//
// Сделано самостоятельно без макета, по той же схеме, что Whooping Crane.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
// Правильное название вида — Canada Goose (не "Canadian Goose"); в
// карточке all-wildlife.js название исправлено.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Canada Goose": 11 подвидов (4 бывших
//   выделены в отдельный вид — Cackling Goose); вес от ~1.1 кг до 8 кг
//   (Giant Canada Goose); размах крыльев ~90 см — 2 м; летят нерегулярным
//   клином — экономия сил за счёт "drafting"; могут пролететь больше
//   1,000 км за день; линька 4-5 недель — не летают; пары на всю жизнь
//   (если партнёр погиб — находят нового); обычно 5-7 яиц; насиживает
//   самка 25-28 дней, самец охраняет рядом; семьи уходят от гнезда сразу
//   и могут пройти несколько км; птенцы встают на крыло в 6-9 недель, к
//   этому времени выживает примерно половина; молодые остаются с
//   родителями целый год; крупные гуси раскрывают крылья, громко шипят и
//   могут сильно ударить крылом; едят траву, листья, семена, ягоды, по
//   12+ часов в день; зимой — зерно на полях, газоны, парки; живут обычно
//   10+ лет, максимум ~24; в 1950 ~1 млн в Северной Америке, сейчас
//   больше 8 млн; канадские популяции стабильны или растут; городские
//   гуси — помёт, агрессия к людям, столкновения с самолётами.
// - ECCC, Migratory Birds Convention Act / Migratory Birds Regulations
//   2022: беспокоить, ловить, убивать перелётных птиц или трогать их
//   гнёзда/яйца можно только по разрешению; гнездо защищено, когда в нём
//   живая птица или жизнеспособное яйцо.
// - Вред кормления хлебом — в канадских официальных источниках прямо НЕ
//   нашла (есть в американских и муниципальных); на странице сказано
//   осторожно: "не кормите — гуси привыкают к людям".
//
// МЕДИА:
// - goose-hero.mp4 — "Canada goose (Branta canadensis) family", Courtney
//   Celley / USFWS, public domain — семья с гусятами, США; первые 20 с.
//   Канадских видео на Commons нет (есть европейские — там вид завезён).
// - goose-hero.jpg — Cephas, CC BY-SA 4.0 — Parc national de Plaisance,
//   Квебек.
// - Галерея (все Канада):
//   * goose-goslings.jpg — ImagePerson, CC BY 4.0 — гусыня с гусятами,
//     Кингстон, Онтарио;
//   * goose-flight.jpg — Ryan Hodnett, CC BY-SA 4.0 — стая в полёте,
//     Саскатун, Саскачеван;
//   * goose-plaisance.jpg — Cephas, CC BY-SA 4.0 — Parc national de
//     Plaisance, Квебек.

export const CANADA_GOOSE = {
  slug: 'canada-goose',
  name: 'Canada Goose',
  shortName: 'Goose',
  tag: 'Safe To Observe — But Give Nesting Geese Room',
  level: 'safe',
  image: '/wildlife/Canada Goose/goose-hero.jpg',
  heroVideo: '/wildlife/Canada Goose/goose-hero.mp4',
  heroCredit: 'Photo: Cephas / Wikimedia Commons · CC BY-SA 4.0 · Parc national de Plaisance, Quebec',
  heroVideoCredit: 'Video: Courtney Celley / USFWS · Public domain',
  description:
    "The honking V in the autumn sky. Canada geese pair for life, fiercely guard their goslings, and can fly more than 1,000 km in a single day. From about 1 million birds in 1950, North America now has more than 8 million — many of them living right in city parks.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '1.1 – 8 KG' },
    { label: 'Wingspan', value: '90 CM – 2 M' },
    { label: 'Eggs', value: 'Usually 5–7' },
    { label: 'Partners', value: 'Usually For Life' },
    { label: 'North America', value: '8 Million+' },
    { label: 'Lifespan', value: '10+ Years' },
  ],

  minDistanceWarning: {
    title: 'Give Nesting Geese Room',
    text: 'In spring, geese defend nests and goslings by hissing, spreading their wings, and striking hard with them. If a goose hisses or spreads its wings at you, back away slowly.',
  },

  behaviorSection: {
    tag: 'Canada Goose Behaviour',
    title: 'The Honking',
    highlight: 'V In The Sky',
    accent: '#38a169',
    cards: [
      {
        title: 'Flying In A V',
        icon: 'Wind',
        description:
          'The V formation lets geese save energy by “drafting” and helps the flock change speed and direction together.',
      },
      {
        title: 'Partners For Life',
        icon: 'Users',
        description:
          'Geese usually pair for life — though if a mate dies, the survivor will find a new one.',
      },
      {
        title: 'Fierce Parents',
        icon: 'ShieldCheck',
        description:
          'Larger geese open their wings, hiss loudly, and can deliver a hard blow with a wing to defend their nest or goslings.',
      },
      {
        title: 'Family Year',
        icon: 'Calendar',
        description:
          'Goslings can fly at 6–9 weeks, but stay with their parents for a full year.',
      },
      {
        title: 'Grass Grazers',
        icon: 'Footprints',
        description:
          'Geese mostly graze on grasses, leaves, seeds, and berries — often feeding for 12 hours a day or more.',
      },
      {
        title: 'Flightless Weeks',
        icon: 'AlertTriangle',
        description:
          'Each summer geese moult and cannot fly for four to five weeks, so they stay close to water for safety.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach A Nest Or Goslings',
      icon: 'XCircle',
      description: 'Parents will defend their young with hissing and powerful wing strikes.',
    },
    {
      title: 'Never Feed Geese',
      icon: 'Trash2',
      description: 'Fed geese lose their fear of people, crowd parks and beaches, and can become aggressive.',
    },
    {
      title: 'Never Touch Nests Or Eggs',
      icon: 'AlertTriangle',
      description: 'Canada geese are protected under the Migratory Birds Convention Act. Disturbing an active nest needs a federal permit.',
    },
    {
      title: 'Never Chase Or Harass Geese',
      icon: 'RunningFigure',
      description: 'Scaring migratory birds is a prohibited activity without a permit — and it’s stressful for the birds.',
    },
    {
      title: 'Never Leave Fishing Line Behind',
      icon: 'Fish',
      description: 'Lost line and hooks can tangle the legs and wings of geese and goslings.',
    },
  ],

  alwaysDo: [
    {
      title: 'Walk Around Families',
      icon: 'Footprints',
      description: 'On paths and lawns, give goose families a wide berth and let them pass.',
    },
    {
      title: 'Slow Down For Goslings',
      icon: 'Car',
      description: 'Goose families often walk several kilometres soon after hatching — watch for them crossing roads near water.',
    },
    {
      title: 'Keep Dogs On Leash',
      icon: 'DogIcon',
      description: 'Dogs can scatter families and separate goslings from their parents.',
    },
    {
      title: 'Watch The Fall Migration',
      icon: 'Eye',
      description: 'In fall, big flocks gather on prairie fields and wetlands before heading south.',
    },
    {
      title: 'Pack Out Your Garbage',
      icon: 'Trash2',
      description: 'Litter and food scraps teach geese to linger around picnic areas.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Geese find plenty of natural food. Feeding draws them into crowded parks, beaches, and roads, where they lose their fear of people.',
    items: [
      { name: 'Bread And Buns', icon: '/icons/wildlife/🍞.png', description: 'Poor food for geese' },
      { name: 'Crackers And Chips', icon: '🍟', description: 'Salty junk food' },
      { name: 'Popcorn', icon: '🍿', description: 'No nutrition for geese' },
      { name: 'Corn Or Birdseed', icon: '🌽', description: 'Draws flocks to people' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fruit', icon: '/icons/wildlife/🍎.png', description: 'Teaches geese to approach people' },
      { name: 'Fishing Line', icon: '🪢', description: 'Can tangle legs and wings' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Canada Geese' },
  spotParks: [
    { name: 'Parc national de Plaisance', province: 'Quebec', season: 'Spring and fall — Ottawa River wetlands', level: 'safe' },
    { name: 'Prairie Wetlands Around Saskatoon', province: 'Saskatchewan', season: 'Fall migration — big flocks', level: 'safe' },
    { name: 'City Parks And Waterfronts', province: 'Across Canada', season: 'Spring to fall — nesting pairs and goslings', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Watch For Warning Signs',
      description:
        'A goose that hisses or spreads its wings at you is defending its nest or young.',
    },
    {
      title: 'Back Away Calmly',
      description:
        'Step back slowly and give the goose space. Never swing at it.',
    },
    {
      title: 'Go Around',
      description:
        'Take another path around nests and goose families.',
    },
    {
      title: 'Report Problems',
      description:
        'Report injured geese to a local wildlife rehabilitation centre. Contact your municipality about nuisance geese.',
    },
  ],

  gallery: [
    { src: '/wildlife/Canada Goose/goose-goslings.jpg', credit: 'ImagePerson · CC BY 4.0 · Kingston, Ontario' },
    { src: '/wildlife/Canada Goose/goose-flight.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Saskatoon, Saskatchewan' },
    { src: '/wildlife/Canada Goose/goose-plaisance.jpg', credit: 'Cephas · CC BY-SA 4.0 · Parc national de Plaisance, QC' },
  ],
};

export default CANADA_GOOSE;
