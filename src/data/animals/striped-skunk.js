// Striped Skunk — данные страницы /wildlife/striped-skunk
//
// Сделано самостоятельно без макета, по той же схеме, что Chipmunk.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Striped skunk": размером с кошку;
//   струя до 6 м, прицельно до 3 м, запах разносится почти на 1 км;
//   запаса в железах хватает на 5-6 выстрелов; предупреждения — рычание
//   или шипение, быстрое притопывание передними лапами, короткая ходьба
//   на передних лапах с поднятым хвостом (из этой позы полосатый скунс
//   стрелять НЕ может); стреляет, изогнувшись буквой U — голова и хвост к
//   угрозе; всеяден, летом в основном насекомые; ~70% рациона полезно
//   для людей; логова — чаще брошенные норы сурков или лис; кормится в
//   пределах ~800 м от логова; детёныши в начале мая, обычно 4-6 (от 2
//   до 16), новорождённые ~15 г; зимой в логове (ноябрь-декабрь), уходит
//   при ~0°C, самцы активны до ~-10°C; ареал — от Приморских провинций
//   до запада центральной BC и на север до Нунавута и СЗТ; главный
//   хищник — виргинский филин, но машины опаснее; скунсы — основные
//   переносчики бешенства, подозрение на бешенство нужно сообщать в CFIA;
//   при укусе — промыть мылом и водой и срочно к врачу; от запаха —
//   уксус, или (рецепт Ontario MNR) 1 л перекиси водорода + 50 мл соды +
//   5 мл средства для мытья посуды.
// - Минимальная дистанция 30 м — общее правило Parks Canada (и далеко за
//   пределами 6-метровой струи).
//
// МЕДИА:
// - skunk-hero.mp4 — "Female skunk with young", Dennis.insect.filmer,
//   Wikimedia Commons, CC BY-SA 4.0 — самка с детёнышами на газоне,
//   Franklin County, Огайо (США); первые 22 с, 720p.
// - Видео из Parc Omega (Квебек) и зоопарков не взяла — животные в неволе.
// - skunk-hero.jpg — Ryan Hodnett, CC BY-SA 4.0, Guelph, Онтарио.
// - Галерея:
//   * skunk-warning.jpg — Tom Koerner / USFWS, public domain, хвост поднят
//     — предупреждение, Seedskadee NWR (Вайоминг);
//   * skunk-juvenile.jpg — Ryan Hodnett, CC BY-SA 4.0, молодой скунс,
//     Guelph, Онтарио;
//   * skunk-grass.jpg — Tom Koerner / USFWS, public domain, Seedskadee NWR.

export const STRIPED_SKUNK = {
  slug: 'striped-skunk',
  name: 'Striped Skunk',
  shortName: 'Skunk',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Striped Skunk/skunk-hero.jpg',
  heroVideo: '/wildlife/Striped Skunk/skunk-hero.mp4',
  heroCredit: 'Photo: Ryan Hodnett / Wikimedia Commons · CC BY-SA 4.0 · Guelph, Ontario',
  heroVideoCredit: 'Video: Dennis.insect.filmer / Wikimedia Commons · CC BY-SA 4.0',
  description:
    "A cat-sized neighbour with the most famous defence in the forest. Striped skunks are gentle and would much rather walk away — but push one too far and it can hit you from 6 metres. They are also a major carrier of rabies, so look, don't touch.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Spray Range', value: 'Up To 6 M' },
    { label: 'Accurate To', value: '~3 M' },
    { label: 'Sprays Stored', value: '5-6' },
    { label: 'Kits', value: '4-6, Early May' },
    { label: 'Smell Carries', value: 'Almost 1 KM' },
    { label: 'Range', value: 'Maritimes To BC' },
  ],

  minDistanceWarning: {
    title: 'Stay Well Out Of Range',
    text: 'A skunk can spray up to 6 metres. Give it plenty of room, keep dogs leashed, and never corner one.',
  },

  behaviorSection: {
    tag: 'Striped Skunk Behaviour',
    title: 'Fair',
    highlight: 'Warning First',
    accent: '#38a169',
    cards: [
      {
        title: 'Warning Before Spraying',
        icon: 'AlertTriangle',
        description:
          'A skunk growls or hisses, stamps its front feet, and may walk on its front legs with its tail up. That is your cue to back away.',
      },
      {
        title: 'The U-Shaped Shot',
        icon: 'Flame',
        description:
          'To spray, it curves its body into a U so both head and tail face the threat — reaching up to 6 m, accurate to about 3 m.',
      },
      {
        title: 'Limited Ammunition',
        icon: 'ShieldCheck',
        description:
          'Its glands hold enough musk for only five or six sprays, which is why a skunk prefers to bluff first.',
      },
      {
        title: 'Helpful Insect Eater',
        icon: 'Compass',
        description:
          'In summer, skunks eat mostly insects. About 70% of their diet is thought to benefit people.',
      },
      {
        title: 'Winter Dens',
        icon: 'Moon',
        description:
          'Skunks fatten up in fall and den in November or December, often in old woodchuck or fox burrows, waking again in late winter.',
      },
      {
        title: 'Rabies Carrier',
        icon: 'AlertTriangle',
        description:
          'Skunks are major carriers of rabies. A rabid skunk may lose its fear of people — keep away and report it.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Corner Or Chase A Skunk',
      icon: 'DoorOpen',
      description: 'A skunk with no way out is the one that sprays. Always leave it an escape route.',
    },
    {
      title: 'Never Ignore The Warning Dance',
      icon: 'AlertTriangle',
      description: 'Stamping feet, hissing, and a raised tail mean “last warning.” Back away slowly right now.',
    },
    {
      title: 'Never Touch Or Pick One Up',
      icon: 'XCircle',
      description: 'Even a calm skunk or kit can carry rabies. Never handle a skunk, alive or dead.',
    },
    {
      title: 'Never Feed Skunks',
      icon: 'Trash2',
      description: 'Feeding draws skunks to homes and campsites, where they meet dogs — and spray.',
    },
    {
      title: 'Never Let Dogs Investigate',
      icon: 'DogIcon',
      description: 'Dogs are the most common target of skunk spray. Keep them leashed, especially at dusk.',
    },
  ],

  alwaysDo: [
    {
      title: 'Back Away Slowly',
      icon: 'ArrowDown',
      description: 'If you meet a skunk, move away calmly and quietly. Sudden movement can startle it.',
    },
    {
      title: 'Watch At Dusk With Care',
      icon: 'Moon',
      description: 'Skunks are most active from dusk to dawn. Use a flashlight on trails at night so you don’t surprise one.',
    },
    {
      title: 'Secure Garbage And Pet Food',
      icon: 'ShieldCheck',
      description: 'Lock bins and bring pet food inside so skunks don’t make your yard part of their route.',
    },
    {
      title: 'Know The De-Skunk Recipe',
      icon: 'Flame',
      description: 'Ontario’s MNR recipe: 1 L hydrogen peroxide, 50 mL baking soda, and 5 mL dish soap. Vinegar also helps.',
    },
    {
      title: 'Report Sick Skunks',
      icon: 'Phone',
      description: 'A skunk that seems confused, unafraid, or is out acting oddly may have rabies. Report suspected cases to the CFIA or local authorities.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Fed skunks lose their fear of people, gather around homes and campsites, and spread rabies to pets and other wildlife.',
    items: [
      { name: 'Pet Food', icon: '🐾', description: 'The number-one skunk magnet in yards' },
      { name: 'Meat And Scraps', icon: '/icons/wildlife/🥩.png', description: 'Draws skunks to campsites' },
      { name: 'Eggs', icon: '🥚', description: 'Never leave out as “treats”' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Junk food for wild animals' },
      { name: 'Fruit And Compost', icon: '/icons/wildlife/🍎.png', description: 'Secure compost bins' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Bird Seed', icon: '🌻', description: 'Spilled seed under feeders attracts skunks' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use locking bins' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Striped Skunks' },
  spotParks: [
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Spring to fall — forest edges at dusk', level: 'safe' },
    { name: 'Elk Island National Park', province: 'Alberta', season: 'Spring to fall — meadows and trails', level: 'safe' },
    { name: 'Kejimkujik National Park', province: 'Nova Scotia', season: 'Spring to fall — campground edges at night', level: 'safe' },
    { name: 'Riding Mountain National Park', province: 'Manitoba', season: 'Spring to fall — open woodland', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Freeze, Then Back Away',
      description:
        'If you spot a skunk, stop, then slowly move away. Don’t run straight at or past it.',
    },
    {
      title: 'Watch For Warnings',
      description:
        'Stamping, hissing, or a raised tail means it is about to spray. Increase the distance immediately.',
    },
    {
      title: 'If You Get Sprayed',
      description:
        'Rinse eyes with water, wash with the peroxide-baking-soda-dish-soap mix or vinegar, and wash clothes separately.',
    },
    {
      title: 'If Bitten Or Scratched',
      description:
        'Wash right away with soap and water and see a doctor or emergency department promptly because of rabies.',
    },
  ],

  gallery: [
    { src: '/wildlife/Striped Skunk/skunk-warning.jpg', credit: 'Tom Koerner / USFWS · Public domain · Tail-up warning' },
    { src: '/wildlife/Striped Skunk/skunk-juvenile.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Guelph, Ontario' },
    { src: '/wildlife/Striped Skunk/skunk-grass.jpg', credit: 'Tom Koerner / USFWS · Public domain · Wyoming' },
  ],
};

export default STRIPED_SKUNK;
