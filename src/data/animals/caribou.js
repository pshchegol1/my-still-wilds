// Caribou — данные страницы /wildlife/caribou
//
// Сделано самостоятельно без макета, по той же схеме, что Wood Bison /
// Orca / Coyote / Wolverine / Canada Lynx / Wild Boar. Категория на
// /wildlife — Large Mammals ("Safe to Observe"), поэтому level: 'safe'.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWS / Canadian Wildlife Federation): рога есть у
//   большинства самок — редкость среди оленей; быки сбрасывают рога в
//   ноябре-декабре, беременные самки держат до отёла в июне; широкие
//   вогнутые копыта — "снегоступы", лопаты для раскопки лишайника и вёсла
//   при плавании; лишайник — главный зимний корм, находят его под снегом
//   по запаху; один телёнок в год, большинство рождается за ~10 дней в
//   мае-начале июня, телёнок идёт за матерью через несколько часов;
//   угрозы — фрагментация местообитаний (дороги, вырубки, сейсмопрофили),
//   хищники, олений мозговой червь, изменение климата (обледенение).
//   Статусы COSEWIC: Atlantic-Gaspésie — Endangered, Boreal и Southern
//   Mountain — Threatened, Peary — Endangered и т.д.
// - COSEWIC 2016: barren-ground caribou — Threatened, спад ~56% за три
//   поколения (с 1989) у 70% популяции с данными.
// - Вес: ~90-180 кг — данные Canadian Wildlife Service (через зеркало
//   uOttawa): barren-ground быки ~145 / самки ~90 кг, woodland быки ~180
//   / самки ~135 кг.
// - Jasper NP (Parks Canada + местные новости): сезонные зимние закрытия
//   ареалов карибу (точные даты меняются по годам — в тексте их нет);
//   собаки запрещены в занятых карибу местообитаниях; 30 м — restricted
//   activity для лосей/оленей/карибу у дорог, штраф до $25,000; закрытия
//   нужны, чтобы волки не ходили по натоптанным людьми тропам в снегу;
//   избегать походов в ареалах в отёл (июнь-начало июля) и гон (конец
//   сентября-начало октября).
// - Карибу на канадской монете 25 центов — с 1937 года (Royal Canadian
//   Mint, общеизвестный факт).
//
// МЕДИА:
// - caribou-hero.jpg — "Mountain-type Woodland Caribou", ThartmannWiki,
//   Wikimedia Commons, CC BY-SA 4.0, Jasper NP, Альберта — дикий, Канада.
// - caribou-hero.mp4 — "Caribou (Rangifer tarandus)", U.S. Fish and
//   Wildlife Service, public domain, тундра, США (вероятно Аляска; точное
//   место в описании не указано) — дикие быки, атрибуция не нужна.
// - Галерея:
//   * caribou-denali.jpg — NPS / Daniel A. Leifheit, public domain, Denali;
//   * caribou-winter.jpg — USFWS Alaska, public domain, Western Arctic
//     Herd, Selawik NWR;
//   * caribou-river.jpg — Danielle Brigida, CC BY 2.0, Arctic NWR.

export const CARIBOU = {
  slug: 'caribou',
  name: 'Caribou',
  shortName: 'Caribou',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Caribou/caribou-hero.jpg',
  heroVideo: '/wildlife/Caribou/caribou-hero.mp4',
  heroCredit: 'Photo: ThartmannWiki / Wikimedia Commons · CC BY-SA 4.0 · Jasper NP',
  distanceIcon: '/icons/wildlife/caribou.svg',
  // Стадо в видео в нижней трети кадра — без сдвига уходит под Quick Facts.
  heroObjectPosition: 'center 100%',
  description:
    "The animal on Canada's quarter — a deer built for snow and tundra, where even the females grow antlers. Caribou are calm and rarely a danger to people, but many herds are now at risk, and in places like Jasper your distance and your route can decide whether they survive.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '90-180 KG' },
    { label: 'Antlers', value: 'Males & Females' },
    { label: 'Diet', value: 'Lichen In Winter' },
    { label: 'Calves', value: '1 Per Year' },
    { label: 'Habitat', value: 'Tundra & Boreal' },
    { label: 'Status', value: 'Many Herds At Risk' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'In Jasper, getting within 30 metres of caribou outside your vehicle is a restricted activity, with fines of up to $25,000.',
  },

  behaviorSection: {
    tag: 'Caribou Behaviour',
    title: 'Built For',
    highlight: 'Snow And Tundra',
    accent: '#38a169',
    cards: [
      {
        title: 'Antlers On Both Sexes',
        icon: 'ShieldCheck',
        description:
          'Caribou are the only deer where most females grow antlers too. Bulls drop theirs after the fall rut, while pregnant cows keep them through winter to defend feeding spots.',
      },
      {
        title: 'Hooves Like Snowshoes',
        icon: 'Footprints',
        description:
          'Huge, concave hooves spread their weight on snow and muskeg, grip ice, work as paddles when swimming, and act as shovels for digging out food.',
      },
      {
        title: 'Lichen Eaters',
        icon: 'Wind',
        description:
          'In winter caribou smell lichen under the snow and dig craters to reach it. In summer they switch to sedges, willow shoots, flowers, and mushrooms.',
      },
      {
        title: 'Epic Migrations',
        icon: 'Compass',
        description:
          'Barren-ground herds walk hundreds of kilometres between winter forests and tundra calving grounds, while some woodland caribou move only a few kilometres a year.',
      },
      {
        title: 'Calves On The Move In Hours',
        icon: 'Calendar',
        description:
          'Most calves are born within about 10 days in late May or early June. A newborn can follow its mother within a few hours — a key defence against predators.',
      },
      {
        title: 'Many Herds In Decline',
        icon: 'AlertTriangle',
        description:
          'Habitat fragmentation, predators using roads and packed trails, and a changing climate have hit caribou hard. Some southern mountain herds have already disappeared.',
      },
    ],
  },

  distanceLabels: {
    outer: '100m — Best For Viewing',
    mid: '30m — Parks Canada Minimum',
    inner: '0-30m — Too Close',
  },

  distanceZones: [
    {
      range: '0-30M',
      label: 'Too Close',
      description: 'Inside the Parks Canada minimum. If a caribou stops feeding, raises its head, or moves away, you are disturbing it — back off.',
      level: 'danger',
    },
    {
      range: '30-100M',
      label: 'Watch Respectfully',
      description: 'Stay quiet and keep it brief, especially near cows and calves in early summer or bulls during the fall rut.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Ideal Viewing',
      description: 'Use binoculars or a zoom lens. From a vehicle, stay inside and pull over only where it is safe.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Enter A Caribou Closure',
      icon: 'XCircle',
      description: 'Seasonal closures in Jasper keep people from packing trails in the snow that wolves then use to reach caribou. Entering one can lead to court charges.',
    },
    {
      title: 'Never Bring Dogs Into Caribou Habitat',
      icon: 'DogIcon',
      description: 'Dogs are not allowed in occupied caribou habitat in Jasper. Even a leashed dog can stress caribou and push them away from food.',
    },
    {
      title: 'Never Leave Your Car To Get Closer',
      icon: 'Car',
      description: 'Roadside caribou are a common sight in some parks. Getting out and approaching them is illegal in Jasper and puts both you and them at risk.',
    },
    {
      title: 'Never Chase Or Surround A Herd',
      icon: 'RunningFigure',
      description: 'Forcing caribou to run burns energy they cannot spare in winter and can separate calves from their mothers.',
    },
    {
      title: 'Never Fly Drones Near Caribou',
      icon: 'Eye',
      description: 'Drones are not allowed in national parks without a permit and can stampede a herd. Keep them grounded.',
    },
  ],

  alwaysDo: [
    {
      title: 'Check Closures Before You Go',
      icon: 'Calendar',
      description: 'Look up current Parks Canada bulletins for seasonal caribou closures before skiing, snowshoeing, or hiking in caribou range.',
    },
    {
      title: 'Avoid Calving And Rut Seasons',
      icon: 'ShieldCheck',
      description: 'Parks Canada asks hikers to avoid caribou habitat during calving (June to early July) and the rut (late September to early October).',
    },
    {
      title: 'Slow Down On The Road',
      icon: 'Car',
      description: 'Caribou may linger on roads, especially when escaping biting insects in summer. Drive slowly and give them time to move off.',
    },
    {
      title: 'Watch From A Distance',
      icon: 'Camera',
      description: 'Stay at least 30 metres away, use a zoom lens, and leave the moment a caribou looks up or starts to move.',
    },
    {
      title: 'Report Concerns',
      icon: 'Phone',
      description: 'In Jasper, report people in closed areas or harassing caribou to Parks Canada Dispatch at 780-852-6155.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Caribou that learn to approach people and roads for food or salt are far more likely to be hit by vehicles.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Upsets a stomach built for lichen' },
      { name: 'Fruit And Apples', icon: '/icons/wildlife/🍎.png', description: 'Draws caribou toward people and roads' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Can cause serious digestive problems' },
      { name: 'Salt Or Salt Licks', icon: '🧂', description: 'Pulls caribou onto roads and into danger' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
      { name: 'Hand-Picked Lichen', icon: '🌿', description: 'Never lure caribou closer for a photo' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Caribou Roam' },
  spotParks: [
    { name: 'Jasper National Park', province: 'Alberta', season: 'Southern mountain herds — respect closures', level: 'caution' },
    { name: 'Ivvavik National Park', province: 'Yukon', season: 'Porcupine herd — spring & summer migration', level: 'safe' },
    { name: 'Gros Morne National Park', province: 'Newfoundland', season: 'Woodland caribou — tablelands & highlands', level: 'safe' },
    { name: 'Torngat Mountains National Park', province: 'Labrador', season: 'Remote Arctic tundra herds', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Stay Back',
      description:
        'If you come across caribou, stop where you are. Stay at least 30 metres away — farther if there are calves or it is the fall rut.',
    },
    {
      title: 'Let Them Choose The Path',
      description:
        'Never block a herd’s route or move between animals. Step off the trail and let them pass at their own pace.',
    },
    {
      title: 'Leave If They React',
      description:
        'A caribou that lifts its head, stops feeding, or walks away is telling you that you are too close. Back off quietly the way you came.',
    },
    {
      title: 'On The Road — Stay In Your Vehicle',
      description:
        'Slow down, pull over only where it is safe, and watch from inside. Never honk to move caribou off the road.',
    },
  ],

  gallery: [
    { src: '/wildlife/Caribou/caribou-denali.jpg', credit: 'NPS / Daniel A. Leifheit · Public domain · Denali NP' },
    { src: '/wildlife/Caribou/caribou-winter.jpg', credit: 'USFWS Alaska · Public domain · Western Arctic Herd' },
    { src: '/wildlife/Caribou/caribou-river.jpg', credit: 'Danielle Brigida · CC BY 2.0 · Arctic NWR' },
  ],
};

export default CARIBOU;
