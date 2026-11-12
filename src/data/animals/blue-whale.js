// Blue Whale — данные страницы /wildlife/blue-whale
//
// Сделано самостоятельно без макета, по той же схеме, что Narwhal /
// Beluga Whale. Категория на /wildlife — Marine Life ("Safe to Observe"),
// поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - DFO / SARA, "Blue whale northwest Atlantic recovery strategy" и
//   progress report: атлантическая (северо-западная) популяция —
//   Endangered по SARA с 2005 года (COSEWIC: Endangered 2002, подтверждено
//   2012); причина — промысел; маловероятно, что взрослых больше 250.
// - Исследование выживаемости (rorqual.com, Unger и др.): в эстуарии Св.
//   Лаврентия ~190 особей (95% CI 155-271); мало детёнышей — всего 21
//   телёнок за 32+ года наблюдений в заливе Св. Лаврентия; угрозы —
//   запутывание в снастях и столкновения с судами.
// - DFO: 400 м — обязательная минимальная дистанция для исчезающих или
//   угрожаемых китов, включая синего кита и белуху Св. Лаврентия.
// - "Самое крупное животное" — общеизвестно; размеры (до ~30 м)
//   указываю осторожно ("about 30 m"), т.к. официальной канадской цифры
//   не нашла (в описании видео на Commons — до 29.9 м).
//
// МЕДИА:
// - Видео "Antarctic Blue Whales" с Commons НЕ взяла: на кадрах тёмные
//   киты с заметным серповидным спинным плавником — больше похожи на
//   финвалов. Других свободных видео синих китов нет — heroVideo не задан.
// - bluewhale-hero.jpg — NOAA Photo Library (anim1754), public domain —
//   синий кит выдыхает, вид сверху (место не указано).
// - Галерея:
//   * bluewhale-aerial.jpg — NOAA Photo Library (anim1755), public domain;
//   * bluewhale-fluke.jpg — Myriamdc, CC BY-SA 4.0, хвост, Калифорния;
//   * bluewhale-svalbard.jpg — Carina Gsottbauer, CC BY-SA 4.0, Isfjord,
//     Шпицберген (североатлантический регион).

export const BLUE_WHALE = {
  slug: 'blue-whale',
  name: 'Blue Whale',
  shortName: 'Blue Whale',
  tag: 'Endangered — Observe At 400 M',
  level: 'safe',
  image: '/wildlife/Blue Whale/bluewhale-hero.jpg',
  heroCredit: 'Photo: NOAA Photo Library · Public domain',
  description:
    "The largest animal that has ever lived — and one of Canada's rarest whales. Only a few hundred blue whales use the Gulf of St. Lawrence and the Northwest Atlantic, and calves are seldom seen. Watching one surface from the shore or a responsible tour boat is unforgettable — from at least 400 metres.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Length', value: 'About 30 M' },
    { label: 'Record', value: 'Largest Animal Ever' },
    { label: 'St. Lawrence Est.', value: '~190 Whales' },
    { label: 'Mature Adults', value: 'Likely <250' },
    { label: 'Min. Distance', value: '400 M By Law' },
    { label: 'Status (Atlantic)', value: 'Endangered' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 400 Metres — By Law',
    text: 'Blue whales are endangered. Canada’s Marine Mammal Regulations require boats to stay at least 400 m away.',
  },

  behaviorSection: {
    tag: 'Blue Whale Behaviour',
    title: 'The Largest',
    highlight: 'Animal Ever',
    accent: '#38a169',
    cards: [
      {
        title: 'Bigger Than Any Dinosaur',
        icon: 'ShieldCheck',
        description:
          'Blue whales can reach about 30 m long — the largest animal known to have lived on Earth.',
      },
      {
        title: 'A Towering Blow',
        icon: 'Wind',
        description:
          'When a blue whale surfaces, its tall column of breath is often the first thing you see from shore or a boat.',
      },
      {
        title: 'Rare In Canadian Waters',
        icon: 'AlertTriangle',
        description:
          'Probably fewer than 250 mature blue whales use the Northwest Atlantic, and only about 190 have been estimated in the St. Lawrence Estuary.',
      },
      {
        title: 'Very Few Calves',
        icon: 'Calendar',
        description:
          'Only 21 calves have been recorded in more than 32 years of watching in the Gulf of St. Lawrence — a sign the population is struggling.',
      },
      {
        title: 'Threats At Sea',
        icon: 'Car',
        description:
          'Ship strikes and entanglement in fishing gear are among the main threats today.',
      },
      {
        title: 'Recovering From Whaling',
        icon: 'Compass',
        description:
          'Commercial whaling reduced the Atlantic population. It has been listed as Endangered under the Species at Risk Act since 2005.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Within 400 M',
      icon: 'XCircle',
      description: 'For endangered whales like the blue whale, 400 m is the legal minimum distance in Canada.',
    },
    {
      title: 'Never Chase Or Cut Across Its Path',
      icon: 'Car',
      description: 'Let the whale choose its direction. Never steer in front of it or follow closely.',
    },
    {
      title: 'Never Speed Through Whale Areas',
      icon: 'AlertTriangle',
      description: 'Ship strikes are a major threat. Slow down in the St. Lawrence and the Gulf, especially in summer.',
    },
    {
      title: 'Never Leave Fishing Gear Or Rope Adrift',
      icon: 'Trash2',
      description: 'Entanglement in ropes and gear injures and kills whales. Keep all lines on board.',
    },
    {
      title: 'Never Fly Drones Low Over Whales',
      icon: 'Volume2',
      description: 'Low aircraft and drones near marine mammals are restricted under the Marine Mammal Regulations.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From Shore',
      icon: 'Eye',
      description: 'Lookouts along the north shore of the St. Lawrence can offer views of blows far out at sea.',
    },
    {
      title: 'Choose A Responsible Tour',
      icon: 'ShieldCheck',
      description: 'Pick operators that follow the 400 m rule and the St. Lawrence navigation rules.',
    },
    {
      title: 'Bring Binoculars',
      icon: 'Camera',
      description: 'At 400 m, a good pair of binoculars or a zoom lens is your best friend.',
    },
    {
      title: 'Slow Down And Keep Watch',
      icon: 'Car',
      description: 'If you are boating, post a lookout for blows and slow down when whales are nearby.',
    },
    {
      title: 'Report Entangled Or Injured Whales',
      icon: 'Phone',
      description: 'Never try to help an entangled whale yourself. Report it right away to DFO or the marine mammal emergency line.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Keep all food, waste, and gear on board.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never throw food to whales' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured on board' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Pollutes the water' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws wildlife to boats' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Whales can swallow floating plastic' },
      { name: 'Fishing Line And Rope', icon: '🪢', description: 'Entanglement is a major threat' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful litter in the ocean' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything from your boat' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Blue Whales' },
  spotParks: [
    { name: 'Saguenay–St. Lawrence Marine Park', province: 'Quebec', season: 'Summer to fall — keep 400 m', level: 'caution' },
    { name: 'Mingan Archipelago National Park Reserve', province: 'Quebec', season: 'Summer — Gulf of St. Lawrence', level: 'safe' },
    { name: 'St. Lawrence North Shore', province: 'Quebec', season: 'Summer — shore lookouts', level: 'safe' },
    { name: 'Gulf of St. Lawrence', province: 'QC · NL', season: 'Summer to fall — open water', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Look For The Blow',
      description:
        'A tall, column-shaped blow far out at sea is often your first sign of a blue whale.',
    },
    {
      title: 'Keep 400 Metres',
      description:
        'If you are on a boat, stay at least 400 m away and never steer toward the whale.',
    },
    {
      title: 'If It Surfaces Closer — Stop',
      description:
        'Put the engine in neutral and wait until the whale is well clear before moving again.',
    },
    {
      title: 'Report Problems',
      description:
        'Report entangled, injured, or stranded whales and any harassment to DFO.',
    },
  ],

  gallery: [
    { src: '/wildlife/Blue Whale/bluewhale-aerial.jpg', credit: 'NOAA Photo Library · Public domain' },
    { src: '/wildlife/Blue Whale/bluewhale-fluke.jpg', credit: 'Myriamdc · CC BY-SA 4.0 · California' },
    { src: '/wildlife/Blue Whale/bluewhale-svalbard.jpg', credit: 'Carina Gsottbauer · CC BY-SA 4.0 · Svalbard' },
  ],
};

export default BLUE_WHALE;
