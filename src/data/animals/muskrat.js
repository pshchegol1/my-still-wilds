// Muskrat — данные страницы /wildlife/muskrat
//
// Сделано самостоятельно без макета, по той же схеме, что Striped Skunk.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Muskrat": в среднем ~1 кг, длина
//   ~50 см от носа до кончика хвоста; хвост до ~25 см, тонкий и сплющен
//   с боков (вертикально); может оставаться под водой до 15 минут; простые
//   хатки 0.5-1 м высотой, сложные — до 1.5 м высотой и 1.8 м шириной;
//   "push-ups" (кормовые укрытия во льду) — до 90 м от хатки; любимая еда
//   — рогоз, также камыш, хвощ, рдест, осоки, дикий рис; при нехватке —
//   рыба, лягушки, моллюски; 5-10 детёнышей в помёте, часто второй помёт
//   через месяц, иногда третий; плавают и ныряют с 3 недель; стареют к
//   3-4 годам; никогда не была под угрозой в Канаде; главный хищник —
//   американская норка, также каймановая черепаха, щука, лисы, барсуки,
//   росомахи, илька, еноты, рыси; не близкий родственник бобра — задние
//   лапы без перепонок, с бахромой из волос; может грызть под водой с
//   закрытым ртом; ондатра даёт трапперам Северной Америки больше дохода,
//   чем любое другое млекопитающее.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - muskrat-hero.mp4 — "Ondatra zibethicus", Cephas, Wikimedia Commons,
//   CC BY-SA 3.0 — ондатра собирает растения для хатки, Parc national de
//   Plaisance, Квебек; первые 20 с, обрезано до 1920x1080.
// - muskrat-hero.jpg — Cephas, CC BY-SA 3.0, ест водные растения,
//   Cap Tourmente, Квебек.
// - Галерея (все Квебек, Канада):
//   * muskrat-provancher.jpg — Cephas, CC BY-SA 4.0, болото
//     Léon-Provancher;
//   * muskrat-lodges.jpg — Cephas, CC BY-SA 3.0, хатки ондатр на болоте
//     Léon-Provancher;
//   * muskrat-captourmente.jpg — Cephas, CC BY-SA 4.0, Cap Tourmente.
//
// ВНИМАНИЕ: на картинке карточки /wildlife (Rectangle 237.png), похоже,
// НЕ ондатра, а нутрия (белые усы и морда, крупное тело) — сообщено
// пользователю, картинку карточки не меняла.

export const MUSKRAT = {
  slug: 'muskrat',
  name: 'Muskrat',
  shortName: 'Muskrat',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Muskrat/muskrat-hero.jpg',
  heroVideo: '/wildlife/Muskrat/muskrat-hero.mp4',
  heroCredit: 'Photo: Cephas / Wikimedia Commons · CC BY-SA 3.0 · Cap Tourmente, Quebec',
  heroVideoCredit: 'Video: Cephas / Wikimedia Commons · CC BY-SA 3.0 · Plaisance NP, Quebec',
  description:
    "The busy builder of Canada's marshes — smaller than a beaver, with a thin tail that works like a rudder. Muskrats pile cattails into lodges, can stay underwater for up to 15 minutes, and are one of the easiest wetland mammals to spot at dawn and dusk.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '~1 KG' },
    { label: 'Length', value: '~50 CM' },
    { label: 'Underwater', value: 'Up To 15 Min' },
    { label: 'Young', value: '5-10 Per Litter' },
    { label: 'Favourite Food', value: 'Cattails' },
    { label: 'Habitat', value: 'Marshes & Ponds' },
  ],

  minDistanceWarning: {
    title: 'Watch From The Shore',
    text: 'Muskrats are shy and harmless if left alone, but a cornered muskrat can bite. Never handle one or feed it.',
  },

  behaviorSection: {
    tag: 'Muskrat Behaviour',
    title: 'Little Builder',
    highlight: 'Of The Marsh',
    accent: '#38a169',
    cards: [
      {
        title: 'Cattail Lodges',
        icon: 'ShieldCheck',
        description:
          'Muskrats pile cattails and mud into lodges up to 1.5 m high and 1.8 m across — like small haystacks standing in the marsh.',
      },
      {
        title: 'Winter Push-Ups',
        icon: 'Calendar',
        description:
          'Under the ice, muskrats build small feeding shelters called push-ups up to 90 m from the lodge, so they can rest and breathe between dives.',
      },
      {
        title: '15-Minute Dives',
        icon: 'Fish',
        description:
          'A relaxed muskrat can stay underwater for up to 15 minutes, and it can chew plants underwater with its mouth closed.',
      },
      {
        title: 'Not A Small Beaver',
        icon: 'Eye',
        description:
          'Muskrats aren’t close relatives of beavers. Look for the thin, flattened-sideways tail and hind feet with hair fringes instead of webbing.',
      },
      {
        title: 'Big Families',
        icon: 'UsersThreeIcon',
        description:
          'Litters of 5–10 young, often two or even three litters a summer. Young swim and dive by three weeks old.',
      },
      {
        title: 'Food For Many',
        icon: 'Compass',
        description:
          'Mink are the muskrat’s main predator, followed by pike, snapping turtles, foxes, raccoons, and lynx.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Muskrats',
      icon: 'Trash2',
      description: 'Feeding wildlife is illegal in national parks and draws muskrats to docks and people.',
    },
    {
      title: 'Never Handle A Muskrat',
      icon: 'XCircle',
      description: 'Their front teeth are sharp, and a frightened muskrat will bite.',
    },
    {
      title: 'Never Climb On Or Break Lodges',
      icon: 'DoorOpen',
      description: 'Lodges and push-ups are homes and winter shelters, often with young inside.',
    },
    {
      title: 'Never Let Dogs Into The Marsh',
      icon: 'DogIcon',
      description: 'Dogs can destroy lodges, harm young muskrats, and disturb nesting birds.',
    },
    {
      title: 'Never Walk On Marsh Ice Near Lodges',
      icon: 'AlertTriangle',
      description: 'Ice is often thin around lodges and push-ups where muskrats keep holes open.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch At Dawn And Dusk',
      icon: 'Moon',
      description: 'Muskrats are most active early and late in the day. Scan open water near cattails.',
    },
    {
      title: 'Look For The V-Shaped Wake',
      icon: 'Eye',
      description: 'A small head and a narrow wake with a thin tail swishing behind usually means muskrat, not beaver.',
    },
    {
      title: 'Stay On Boardwalks',
      icon: 'Footprints',
      description: 'Marsh boardwalks give great views without trampling habitat.',
    },
    {
      title: 'Keep Dogs Leashed',
      icon: 'DogIcon',
      description: 'Near wetlands, keep dogs on a leash and out of the water.',
    },
    {
      title: 'Treat Drinking Water',
      icon: 'ShieldCheck',
      description: 'Filter, boil, or treat water from any marsh or pond before drinking.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Fed muskrats lose their wariness, crowd docks and beaches, and are more likely to bite.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Junk food that replaces marsh plants' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws muskrats to people' },
      { name: 'Corn', icon: '🌽', description: 'Often tossed from docks — don’t' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Fish And Bait', icon: '/icons/wildlife/🐟.png', description: 'Store bait securely on docks' },
      { name: 'Bird Seed', icon: '🌻', description: 'Spilled seed draws rodents' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Wetland Parks',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Muskrats' },
  spotParks: [
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Spring to fall — Marsh Boardwalk', level: 'safe' },
    { name: 'Plaisance National Park', province: 'Quebec', season: 'Spring to fall — Ottawa River marshes', level: 'safe' },
    { name: 'Elk Island National Park', province: 'Alberta', season: 'Spring to fall — ponds and wetlands', level: 'safe' },
    { name: 'Oak Hammock Marsh', province: 'Manitoba', season: 'Spring to fall — prairie wetland', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Watch',
      description:
        'Muskrats often keep feeding if you stand still. Enjoy the view from the shore or boardwalk.',
    },
    {
      title: 'Give It Room On Land',
      description:
        'A muskrat on a trail is usually heading to water. Step aside and let it pass.',
    },
    {
      title: 'Don’t Corner It',
      description:
        'Never block its path back to the water — that is when muskrats bite.',
    },
    {
      title: 'If Bitten — Wash It',
      description:
        'Wash any bite with soap and water and see a health professional.',
    },
  ],

  gallery: [
    { src: '/wildlife/Muskrat/muskrat-provancher.jpg', credit: 'Cephas · CC BY-SA 4.0 · Léon-Provancher marsh, Quebec' },
    { src: '/wildlife/Muskrat/muskrat-lodges.jpg', credit: 'Cephas · CC BY-SA 3.0 · Muskrat lodges, Quebec' },
    { src: '/wildlife/Muskrat/muskrat-captourmente.jpg', credit: 'Cephas · CC BY-SA 4.0 · Cap Tourmente, Quebec' },
  ],
};

export default MUSKRAT;
