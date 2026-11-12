// Mule Deer — данные страницы /wildlife/mule-deer
//
// Сделано самостоятельно без макета, по той же схеме, что Elk /
// White-Tailed Deer. Категория на /wildlife — Large Mammals ("Safe to
// Observe"), поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
// По просьбе добавлен блок сравнения Mule Deer vs Elk (comparisonSection,
// как Black Bear vs Grizzly) — их часто путают.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Alberta Institute for Wildlife Conservation (AIWC), "Spotting the
//   difference: Alberta's mule deer and whitetails": уши 20-25 см, часто
//   с тёмными краями; тонкий хвост "как верёвка" с чёрным кончиком;
//   большое ярко-белое "зеркало", видно даже при опущенном хвосте; морда
//   светло-серая с тёмной "маской" на лбу; рога: главная ветвь
//   раздваивается буквой Y, и концы раздваиваются снова; испуганный
//   олень прыгает на всех четырёх ногах сразу ("stotting"); живут в
//   прериях юга Альберты, предгорьях, долинах гор (Jasper, Banff), и в
//   городах (Okotoks); едят листья, веточки, кустарник больше, чем траву;
//   зимой — полынь, веточки пихты Дугласа; хроническая изнуряющая болезнь
//   (CWD) поражает оленей, вапити и лосей.
// - Parks Canada, Waterton "Aggressive deer": в посёлке Waterton олени
//   привыкли к людям и потеряли осторожность; самки агрессивно защищают
//   оленят в сезон отёла (июнь — начало июля), особенно опасно гулять с
//   собакой; держать дистанцию, не кормить; сообщать об агрессии:
//   1-888-927-3367. Конкретной дистанции для оленей Parks Canada НЕ
//   называет — на странице без цифры.
// - Ареал: WAFWA (до Саскачевана, Альберты, BC и юга Юкона); BC gov —
//   чаще всего во внутренних районах BC; Canadian Encyclopedia — изредка
//   до Манитобы. Численность (Альберта ~133,000 / 188,000) в источниках
//   расходится — на странице НЕ указываю.
// - Вес: официальной канадской цифры в кг НЕ нашла — на странице без веса.
// - Вапити (для сравнения): из elk.js — Hinterland Who's Who: бык ~1.5 м
//   в холке, ~300-350 кг, рога >1.2 м; Parks Canada: держаться 30 м,
//   гон 1 сент. - 15 окт., отёл 15 мая - 30 июня, осенью трубят. Светлое
//   кремовое "зеркало", тёмные голова и шея, грива у быков, короткий
//   незаметный хвост — ICWDM / Wikipedia (вторичные источники).
//
// МЕДИА:
// - muledeer-hero.mp4 — "Mule Deer foraging at Okanagan Mountain
//   Provincial Park", Extemporalist, CC0 — BC; видно белое "зеркало" и
//   хвост с чёрным кончиком. Атрибуция не обязательна, но указана.
// - muledeer-hero.jpg — "Mule Deer 2", Jakub Fryš, CC BY-SA 4.0 — Banff NP.
// - Карточка (muledeer-card.jpg) — "Mule Deer 3", Jakub Fryš, CC BY-SA 4.0.
// - Галерея:
//   * muledeer-stotting.jpg — Steven Fine, CC BY-SA 4.0 — прыжок
//     "stotting", Pahranagat NWR, Невада (США);
//   * muledeer-fawn.jpg — David Whelan, CC0 — самка с оленёнком,
//     Writing-on-Stone, Альберта;
//   * muledeer-clearwater.jpg — Eddie Carle, GFDL / CC BY-SA 3.0 — самка
//     в летней рыжей шерсти, Clearwater Pass, Banff NP, 2006.
// - muledeer-rump.jpg — кадр из того же видео (Extemporalist, CC0) для
//   блока сравнения: видно белое зеркало и чёрный кончик хвоста.
// - compare-elk.jpg — 'Bull Elk Stag', Wilson Hui, CC BY 2.0 — бык вапити
//   у Maligne Canyon, Jasper NP (видны тёмная шея, светлое зеркало, рога).
// - Отклонено: "Mule deer in Calgary" — оленя кормят с руки шишкой.

export const MULE_DEER = {
  slug: 'mule-deer',
  name: 'Mule Deer',
  shortName: 'Mule Deer',
  shortNamePlural: 'Mule Deer',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Mule Deer/muledeer-hero.jpg',
  heroVideo: '/wildlife/Mule Deer/muledeer-hero.mp4',
  heroCredit: 'Photo: Jakub Fryš / Wikimedia Commons · CC BY-SA 4.0 · Banff NP',
  heroVideoCredit: 'Video: Extemporalist / Wikimedia Commons · CC0 · Okanagan Mountain PP, BC',
  description:
    "The big-eared deer of the West. Mule deer roam the prairies, foothills, and mountain valleys of Alberta and BC — and even wander through towns like Banff and Waterton. Look for huge ears, a bright white rump, and a thin rope-like tail with a black tip.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Ears', value: '20–25 CM Long' },
    { label: 'Tail', value: 'Black Tip' },
    { label: 'Antlers', value: 'Forked Y-Shape' },
    { label: 'Fawning', value: 'June–Early July' },
    { label: 'Range', value: 'AB · BC · SK · YT' },
    { label: 'Diet', value: 'Shrubs & Twigs' },
  ],

  minDistanceWarning: {
    title: 'Give Does And Fawns Space',
    text: 'In June and early July, mother deer aggressively defend their fawns — especially from dogs. Parks Canada warns deer in Waterton have lost their fear of people.',
  },

  behaviorSection: {
    tag: 'Mule Deer Behaviour',
    title: 'Big Ears,',
    highlight: 'Bouncing Escape',
    accent: '#38a169',
    cards: [
      {
        title: 'Named For Their Ears',
        icon: 'Ear',
        description:
          'Their mule-like ears are usually 20–25 cm long, often with dark edges.',
      },
      {
        title: 'The Pogo-Stick Bounce',
        icon: 'RunningFigure',
        description:
          'When startled, mule deer “stot” — springing off all four feet at once, like a pogo stick.',
      },
      {
        title: 'Black-Tipped Tail',
        icon: 'Eye',
        description:
          'A thin, rope-like tail with a black tip, set against a big bright-white rump patch.',
      },
      {
        title: 'Forked Antlers',
        icon: 'ShieldCheck',
        description:
          'A buck’s antlers fork into a Y — and each fork splits again.',
      },
      {
        title: 'Browsers, Not Grazers',
        icon: 'Footprints',
        description:
          'They prefer leaves, twigs, and shrubs over grass. In winter they rely on sagebrush and Douglas-fir twigs.',
      },
      {
        title: 'At Home In Town',
        icon: 'AlertTriangle',
        description:
          'In Waterton, Banff, and towns like Okotoks, deer feel safe from predators — and can lose their fear of people.',
      },
    ],
  },

  comparisonSection: {
    tag: 'Mule Deer Or Elk?',
    title: 'Know The ',
    highlight: 'Difference',
    suffix: ' — They’re Often Confused',
    warning:
      'Both live side by side in Banff, Jasper, and Waterton. Elk are much bigger and Parks Canada asks for at least 30 m from them in every season. Mule deer does can be just as defensive when they have fawns.',
    actionLabel: 'Most defensive',
    left: {
      name: 'Mule Deer',
      image: '/wildlife/Mule Deer/muledeer-rump.jpg',
      rows: [
        { label: 'Size', value: 'Much smaller' },
        { label: 'Ears', value: 'Huge — 20–25 cm' },
        { label: 'Tail', value: 'Thin, black tip' },
        { label: 'Rump', value: 'Bright white patch' },
        { label: 'Antlers', value: 'Fork into Y’s' },
        { label: 'Running', value: 'Bounces on all fours' },
      ],
      action: 'June–July (fawns)',
      actionLevel: 'caution',
    },
    right: {
      name: 'Elk (Wapiti)',
      image: '/wildlife/Mule Deer/compare-elk.jpg',
      rows: [
        { label: 'Size', value: 'Bulls ~1.5 m, 300+ kg' },
        { label: 'Antlers', value: 'Huge — up to 1.2 m+' },
        { label: 'Tail', value: 'Short, hard to see' },
        { label: 'Rump', value: 'Pale cream patch' },
        { label: 'Neck', value: 'Dark brown, bulls maned' },
        { label: 'Sound', value: 'Bulls bugle in fall' },
      ],
      action: 'Sept–Oct & May–June',
      actionLevel: 'caution',
    },
  },

  neverDo: [
    {
      title: 'Never Feed Deer',
      icon: 'XCircle',
      description: 'Fed deer lose their fear of people and can become aggressive. Parks Canada asks visitors never to entice or feed them.',
    },
    {
      title: 'Never Approach A Fawn',
      icon: 'AlertTriangle',
      description: 'Leave fawns alone — the mother may be close by and will defend it.',
    },
    {
      title: 'Never Let Dogs Off Leash',
      icon: 'DogIcon',
      description: 'People walking dogs are especially at risk during fawning season.',
    },
    {
      title: 'Never Corner A Deer',
      icon: 'DoorOpen',
      description: 'In town, give deer an easy way out — never block them between buildings or fences.',
    },
    {
      title: 'Never Pet Or Pose With Deer',
      icon: 'Camera',
      description: 'Deer used to people can turn aggressive. Admire them from a distance.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep A Good Distance',
      icon: 'Eye',
      description: 'Watch from far away and use a zoom lens — the deer should not change what it is doing because of you.',
    },
    {
      title: 'Be Extra Careful In June–July',
      icon: 'Calendar',
      description: 'Fawning season is when does are most protective.',
    },
    {
      title: 'Leash And Control Your Dog',
      icon: 'DogIcon',
      description: 'Keep dogs close, and walk another way if you see a doe.',
    },
    {
      title: 'Slow Down On The Road',
      icon: 'Car',
      description: 'Deer often cross roads in towns, foothills, and mountain parks.',
    },
    {
      title: 'Report Aggressive Deer',
      icon: 'Phone',
      description: 'In Waterton, call Parks Canada at 1-888-927-3367 and take a photo of the animal if you can.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding deer is how they lose their fear of people. Parks Canada notes that crowds of deer in Waterton have also drawn bears and cougars into town.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Not natural food for deer' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Teaches deer to beg' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Draws deer to people' },
      { name: 'Corn', icon: '🌽', description: 'Not natural food for deer' },
      { name: 'Salt Or Mineral Licks', icon: '🧂', description: 'Draws deer to people' },
      { name: 'Pine Cones From Your Hand', icon: '🌲', description: 'Hand-feeding is still feeding' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Mule Deer' },
  spotParks: [
    { name: 'Waterton Lakes National Park', province: 'Alberta', season: 'Year-round — deer in town, extra care in June–July', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — mountain valleys', level: 'safe' },
    { name: 'Jasper National Park', province: 'Alberta', season: 'Year-round — mountain valleys', level: 'safe' },
    { name: 'Writing-on-Stone Provincial Park', province: 'Alberta', season: 'Spring to fall — coulees and grasslands', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Check: Deer Or Elk?',
      description:
        'Huge ears, black-tipped tail, white rump — mule deer. Much bigger, dark neck, cream rump — elk. Keep 30 m from elk.',
    },
    {
      title: 'Look For A Fawn',
      description:
        'In June and July, assume a doe has a hidden fawn nearby and give her extra room.',
    },
    {
      title: 'Back Away With Your Dog',
      description:
        'Keep your dog close and calmly walk away from the deer.',
    },
    {
      title: 'Report Aggression',
      description:
        'Report aggressive deer or attacks to Parks Canada (Waterton: 1-888-927-3367) or local wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Mule Deer/muledeer-stotting.jpg', credit: 'Steven Fine · CC BY-SA 4.0 · Nevada (stotting)' },
    { src: '/wildlife/Mule Deer/muledeer-fawn.jpg', credit: 'David Whelan · CC0 · Writing-on-Stone, Alberta' },
    { src: '/wildlife/Mule Deer/muledeer-clearwater.jpg', credit: 'Eddie Carle · CC BY-SA 3.0 · Clearwater Pass, Banff NP' },
  ],
};

export default MULE_DEER;
