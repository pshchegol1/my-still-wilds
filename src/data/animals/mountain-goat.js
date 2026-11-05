// Mountain Goat — данные страницы /wildlife/mountain-goat
//
// Сделано самостоятельно без макета, по той же схеме, что Elk / Musk Ox.
// Категория на /wildlife — Large Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Glacier NP (BC) "Mountain goats": самцы 80-100 кг,
//   самки 60-80 кг; рога из кератина растут всю жизнь, есть у обоих
//   полов; густой подшёрсток и остевой волос до 20 см, выдерживают до
//   -50°C; едят злаки, лишайники, мхи, осоки, цветковые растения; живут
//   12-14 лет; ~50% всех горных козлов живут в BC; весной-летом спускаются
//   к Трансканадскому шоссе лизать соль с обочины — Parks Canada ставит
//   искусственные солонцы выше дороги; угрозы — хищники, камнепады и
//   лавины, столкновения с машинами; посетителям: держаться минимум
//   100 м, не идти по следам (особенно зимой), не кормить, собаки на
//   поводке, на дороге не останавливаться, а сбросить скорость и ехать
//   дальше; dispatch 1-877-852-3100 (Glacier / Mount Revelstoke).
// - BC Parks (Valhalla, Cathedral, Gimli): козлов привлекает соль в моче
//   и потной одежде туристов — в Gimli поставили туалет с отводом мочи и
//   искусственные солонцы.
// - Olympic NP (США, NPS "Goats and Your Safety"): после смертельного
//   случая в 2010 году — держаться подальше, мочиться минимум в ~50 ярдах
//   от тропы, не оставлять потную одежду; если козёл идёт следом —
//   прогонять криком, махать курткой, бросать камни.
// - Козлята: обычно рождаются в конце мая - начале июня, чаще один
//   (бывают двойни) — несколько справочных источников сходятся.
// - "Не настоящий козёл" (родственник антилоп-козлов, отдельный род) —
//   общеизвестно, в тексте сформулировано осторожно.
//
// МЕДИА:
// - goat-hero.mp4 — "YohoNationalpark-Oreamnos americanus-Schneeziege",
//   Hedwig Storch, Wikimedia Commons, CC BY-SA 3.0 — дикий козёл на скале,
//   Yoho NP, BC. ИСХОДНИК 720x576 (старое DV-видео) — сделала деинтерлейс и
//   увеличила до 1024x768, но картинка мягкая. Лучшего свободного видео
//   диких горных козлов не нашла.
// - goat-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, самка с козлёнком у
//   Radium Hot Springs, BC.
// - Галерея:
//   * goat-radium.jpg — Charles J. Sharp, CC BY-SA 4.0, Radium, BC;
//   * goat-kid.jpg — Charles J. Sharp, CC BY-SA 4.0, козлёнок, Radium, BC;
//   * goat-meadow.jpg — Glacier NP (Монтана, США), NPS, public domain.
//   Фото "Mountain Goats 43" (Jasper) не взяла — на нём водяной знак.

export const MOUNTAIN_GOAT = {
  slug: 'mountain-goat',
  name: 'Mountain Goat',
  shortName: 'Mountain Goat',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Mountain Goat/goat-hero.jpg',
  heroVideo: '/wildlife/Mountain Goat/goat-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Radium Hot Springs, BC',
  heroVideoCredit: 'Video: Hedwig Storch / Wikimedia Commons · CC BY-SA 3.0 · Yoho NP, BC',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The white climber of the Rockies and Coast Mountains, at home on cliffs where nothing can follow. About half of all mountain goats live in British Columbia. They are calm, but they crave salt — and goats that learn to seek it from hikers and highways can become bold and dangerous.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Males)', value: '80-100 KG' },
    { label: 'Horns', value: 'Males & Females' },
    { label: 'Cold Limit', value: 'Down To -50°C' },
    { label: 'Kids', value: 'Late May-June' },
    { label: 'Lifespan', value: '12-14 Years' },
    { label: 'In BC', value: '~50% Of All Goats' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres',
    text: 'Parks Canada asks visitors to stay at least 100 metres from mountain goats and never follow their tracks.',
  },

  behaviorSection: {
    tag: 'Mountain Goat Behaviour',
    title: 'Masters Of',
    highlight: 'The Cliffs',
    accent: '#38a169',
    cards: [
      {
        title: 'Built For Sheer Rock',
        icon: 'ArrowDown',
        description:
          'Mountain goats live on steep cliffs and ledges where wolves, cougars, and bears struggle to follow — their main defence against predators.',
      },
      {
        title: 'Double Coat For -50°C',
        icon: 'Wind',
        description:
          'A thick woolly undercoat under guard hairs up to 20 cm long lets them survive winter storms at temperatures as low as -50°C.',
      },
      {
        title: 'Horns On Both Sexes',
        icon: 'ShieldCheck',
        description:
          'Males and females both grow short, sharp black horns made of keratin that keep growing their whole life.',
      },
      {
        title: 'Salt Seekers',
        icon: 'AlertTriangle',
        description:
          'Goats need minerals. In spring and summer some come down to lick salt from highway shoulders — and some learn to seek salt from hikers’ urine and sweaty gear.',
      },
      {
        title: 'Kids On The Cliffs',
        icon: 'Calendar',
        description:
          'Kids are usually born in late May or early June, most often one at a time, sometimes twins.',
      },
      {
        title: 'Not A True Goat',
        icon: 'Compass',
        description:
          'Despite the name, the mountain goat belongs to its own genus — a North American relative of goat-antelopes, not of farm goats.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Or Follow Goats',
      icon: 'Footprints',
      description: 'Stay at least 100 metres away and never follow goat tracks — especially in winter, when food is scarce and every bit of energy counts.',
    },
    {
      title: 'Never Urinate Near The Trail',
      icon: 'XCircle',
      description: 'Goats are attracted to the salt in urine. Go well off trail on rock, away from where goats feed, so they don’t learn to linger near people.',
    },
    {
      title: 'Never Leave Sweaty Gear Behind',
      icon: 'Trash2',
      description: 'Packs, hats, and clothing soaked in sweat are a salt lick to a goat. Keep your gear on you or close at hand.',
    },
    {
      title: 'Never Stop On The Highway',
      icon: 'Car',
      description: 'If goats are on or near the road, slow down, stay in your vehicle, and keep driving — don’t pull over to watch.',
    },
    {
      title: 'Never Let A Goat Follow You',
      icon: 'RunningFigure',
      description: 'A goat that approaches or follows hikers has lost its fear of people. Move away and make it keep its distance.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From 100 Metres',
      icon: 'Eye',
      description: 'Use binoculars or a zoom lens. Goats on cliffs are easiest to spot from a valley trail or viewpoint.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Dogs can stress goats and push them onto dangerous terrain — and a cornered goat can defend itself with sharp horns.',
    },
    {
      title: 'If A Goat Comes Close — Scare It Off',
      icon: 'MegaphoneIcon',
      description: 'Yell, wave a jacket, and back away to keep it at a distance. Goats that get used to people are the ones that cause injuries.',
    },
    {
      title: 'Watch For Falling Rocks',
      icon: 'AlertTriangle',
      description: 'Goats moving on cliffs above a trail or road can knock rocks loose. Don’t stop directly below them.',
    },
    {
      title: 'Report Goats On The Highway',
      icon: 'Phone',
      description: 'In Glacier and Mount Revelstoke national parks, call Parks Canada dispatch at 1-877-852-3100.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Goats that learn to get salt or food from people become bold around trails and highways — and that is how both goats and people get hurt.',
    items: [
      { name: 'Salt Or Salty Snacks', icon: '🧂', description: 'The number-one thing that makes goats bold' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws goats toward people and roads' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts goats to trails' },
      { name: 'Sports Drinks', icon: '🥤', description: 'Spilled electrolytes attract goats to camps' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Goats Climb' },
  spotParks: [
    { name: 'Glacier National Park', province: 'British Columbia', season: 'Spring & summer — slow down on the highway', level: 'caution' },
    { name: 'Mount Revelstoke National Park', province: 'British Columbia', season: 'Summer — alpine and subalpine slopes', level: 'safe' },
    { name: 'Kootenay National Park', province: 'British Columbia', season: 'Near Radium Hot Springs — cliffs and roadsides', level: 'safe' },
    { name: 'Yoho National Park', province: 'British Columbia', season: 'Summer — rocky cliffs above valley trails', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Give It 100 Metres',
      description:
        'If you see a goat on or near the trail, stop and let it move on. Wait or take another route rather than walking past it.',
    },
    {
      title: 'Never Let It Get Close',
      description:
        'If a goat approaches, back away. Yell, wave a jacket or poles, and make yourself big to keep it at a distance.',
    },
    {
      title: 'Keep Gear And Dogs Close',
      description:
        'Pick up packs and clothing, keep your dog leashed beside you, and never leave salty gear where a goat can reach it.',
    },
    {
      title: 'Report Bold Goats',
      description:
        'A goat that follows people or won’t leave a trail needs attention. Report it to park staff with the time and location.',
    },
  ],

  gallery: [
    { src: '/wildlife/Mountain Goat/goat-radium.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Radium, BC' },
    { src: '/wildlife/Mountain Goat/goat-kid.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Radium, BC' },
    { src: '/wildlife/Mountain Goat/goat-meadow.jpg', credit: 'NPS · Public domain · Glacier NP, Montana' },
  ],
};

export default MOUNTAIN_GOAT;
