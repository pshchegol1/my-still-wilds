// Red Fox — данные страницы /wildlife/red-fox
//
// Сделано самостоятельно без макета, по той же схеме, что River Otter.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Red fox": 3.6-6.8 кг, 90-112 см, из
//   них ~треть — хвост; самцы чуть крупнее, северные лисы крупнее; окрасы
//   — рыжий (самый частый), "крестовка" (тёмный крест на спине) и
//   чернобурая (чёрная с белыми кончиками остевых волос); едят в основном
//   полёвок, мышей, леммингов, белок, зайцев; "мышкование" — слушает
//   мышь под травой/снегом и прыгает сверху; охотятся в основном на
//   закате, ночью и рано утром; участок вокруг логова 4-8 км²; логова
//   часто в старых норах сурков, обычно на южном склоне в сухом песке;
//   щенки с марта по май, от 1 до 10, в среднем 5; слепые, глаза
//   открываются на второй неделе; отлучение ~в месяц, самостоятельны ~в
//   3 месяца; одни из самых широко распространённых млекопитающих Канады
//   — во всех провинциях и территориях; отличный слух; бешенство: больная
//   лиса теряет страх, выходит днём; при укусе — промыть рану и срочно к
//   врачу.
// - Parks Canada (Sault Ste. Marie Canal NHS): кормить лис в местах
//   Parks Canada запрещено законом; эколог Parks Canada — подкормка
//   приносит больше вреда, чем пользы. Правительство PEI: подкормка ведёт
//   к привыканию, укусам, царапинам и передаче болезней. NWT: штраф $253
//   за намеренную подкормку. Banff (RMOtoday): лисы стали поводом для
//   предупреждения не кормить диких животных. Toronto: просили не
//   собираться у логова с лисятами и не кормить их.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - Хорошего свободного видео диких рыжих лис на Commons нет (USFWS —
//   4-секундный ролик; остальное — Европа/Япония или сады) — heroVideo
//   не задан, в шапке фото.
// - fox-hero.jpg — "PEI-001 - Red Fox (2015)", Dennis G. Jarvis,
//   CC BY-SA 2.0 — Остров Принца Эдуарда.
// - Галерея:
//   * fox-mousing.jpg — Goutham89, CC BY-SA 4.0, "мышкование" в снегу,
//     Grand Teton NP (США);
//   * fox-cross-yukon.jpg — Martin Lopatka, CC BY-SA 2.0, лиса-крестовка
//     у Dawson City, Юкон;
//   * fox-bic.jpg — Marc-Lautenbacher, CC BY-SA 4.0, Parc national du Bic,
//     Квебек.

export const RED_FOX = {
  slug: 'red-fox',
  name: 'Red Fox',
  shortName: 'Red Fox',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Red Fox/fox-hero.jpg',
  heroCredit: 'Photo: Dennis G. Jarvis / Wikimedia Commons · CC BY-SA 2.0 · Prince Edward Island',
  description:
    "Found in every province and territory, the red fox is one of Canada's most widespread mammals — a clever, quiet hunter that can hear a mouse under the snow. Foxes are shy and harmless when left wild, but foxes that are fed quickly become bold, and that is when bites happen.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '3.6-6.8 KG' },
    { label: 'Length', value: '90-112 CM' },
    { label: 'Pups', value: 'Avg. 5, March-May' },
    { label: 'Home Range', value: '4-8 KM²' },
    { label: 'Colours', value: 'Red, Cross, Silver' },
    { label: 'Range', value: 'All Of Canada' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Never feed or approach a fox. A fox that walks up to people has usually been fed — or may be sick.',
  },

  behaviorSection: {
    tag: 'Red Fox Behaviour',
    title: 'Clever',
    highlight: 'Quiet Hunter',
    accent: '#38a169',
    cards: [
      {
        title: 'The Mousing Pounce',
        icon: 'ArrowDown',
        description:
          'A fox listens for a mouse moving under grass or snow, then leaps high and pounces nose-first to pin it down.',
      },
      {
        title: 'Incredible Hearing',
        icon: 'Ear',
        description:
          'Sharp ears, keen eyes, and a strong sense of smell let foxes find hidden prey — even a rabbit tucked out of sight.',
      },
      {
        title: 'Red, Cross Or Silver',
        icon: 'Eye',
        description:
          'Most are red, but some are “cross foxes” with a dark cross on the back, and some are silver — black with white-tipped hairs. All are the same species.',
      },
      {
        title: 'Dusk And Night Hunter',
        icon: 'Moon',
        description:
          'Foxes hunt mostly around sunset, through the night, and in early morning, which is the best time to spot one.',
      },
      {
        title: 'Spring Dens',
        icon: 'Calendar',
        description:
          'Pups are born from March to May — usually about five — often in an old woodchuck burrow facing south. They leave the den at around three months.',
      },
      {
        title: 'Rabies Warning Signs',
        icon: 'AlertTriangle',
        description:
          'A fox that seems unafraid, wanders in daylight acting strangely, or foams at the mouth may be sick. Keep away and report it.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed A Fox',
      icon: 'Trash2',
      description: 'Feeding wildlife is illegal in Parks Canada places. Fed foxes lose their fear, approach people and cars, and are more likely to bite.',
    },
    {
      title: 'Never Hand-Feed For A Photo',
      icon: 'Camera',
      description: 'That cute close-up teaches the fox to approach the next person — and a fed fox often ends up hit by a car or removed.',
    },
    {
      title: 'Never Crowd A Den',
      icon: 'DoorOpen',
      description: 'Gathering at a den stresses the family and can make the parents move or abandon the pups. Watch briefly from far away.',
    },
    {
      title: 'Never Touch A Fox Or Pup',
      icon: 'XCircle',
      description: 'Foxes can carry rabies and other diseases. Never pick up or pet a fox, even one that seems tame or orphaned.',
    },
    {
      title: 'Never Leave Food Or Garbage Out',
      icon: 'Trash2',
      description: 'Pet food, compost, and garbage draw foxes into yards and campsites and teach them to rely on people.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From A Distance',
      icon: 'Eye',
      description: 'Use binoculars or a zoom lens and stay at least 30 metres away. Dawn and dusk are the best times.',
    },
    {
      title: 'Keep Pets Close',
      icon: 'DogIcon',
      description: 'Keep dogs leashed and small pets indoors at night, especially near dens in spring.',
    },
    {
      title: 'Haze A Bold Fox',
      icon: 'MegaphoneIcon',
      description: 'If a fox comes too close, stand tall, clap, and shout to scare it off — it helps the fox stay wild.',
    },
    {
      title: 'Wash Any Bite Immediately',
      icon: 'ShieldCheck',
      description: 'If a fox bites or scratches you, wash the wound right away and see a doctor urgently because of the rabies risk.',
    },
    {
      title: 'Report Sick Or Fed Foxes',
      icon: 'Phone',
      description: 'Report foxes acting strangely, or people feeding them, to park staff or provincial wildlife officers.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife is illegal in Canadian national parks, and provinces like PEI and the NWT warn — or fine — people who feed foxes. Fed foxes become bold, bite, and spread disease.',
    items: [
      { name: 'Meat And Scraps', icon: '/icons/wildlife/🥩.png', description: 'The fastest way to make a fox bold' },
      { name: 'Pet Food', icon: '🐾', description: 'Keep it indoors — foxes find it fast' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Junk food for a wild predator' },
      { name: 'Fish And Bait', icon: '/icons/wildlife/🐟.png', description: 'Draws foxes to docks and campsites' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Eggs', icon: '🥚', description: 'Never leave out as “treats”' },
      { name: 'Compost', icon: '/icons/wildlife/🍎.png', description: 'Secure compost bins and fallen fruit' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Keeps foxes coming back to yards' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Foxes Roam' },
  spotParks: [
    { name: 'Prince Edward Island National Park', province: 'Prince Edward Island', season: 'Year-round — dunes and fields at dusk', level: 'safe' },
    { name: 'Parc national du Bic', province: 'Quebec', season: 'Spring to fall — coastal meadows', level: 'safe' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — never feed roadside foxes', level: 'caution' },
    { name: 'Dawson City Region', province: 'Yukon', season: 'Year-round — look for cross foxes', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Enjoy It From Where You Are',
      description:
        'Most foxes will glance at you and trot away. Stop, stay quiet, and watch from a distance.',
    },
    {
      title: 'Don’t Follow It',
      description:
        'Following a fox can lead you to a den and stress the family. Let it go on its way.',
    },
    {
      title: 'If It Comes Close — Scare It Off',
      description:
        'A fox that approaches has likely been fed. Stand tall, wave your arms, clap, and shout until it leaves.',
    },
    {
      title: 'If It Acts Sick — Leave And Report',
      description:
        'Stumbling, unusual tameness, or foaming at the mouth can mean rabies. Keep people and pets away and call wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Red Fox/fox-mousing.jpg', credit: 'Goutham89 · CC BY-SA 4.0 · Grand Teton NP' },
    { src: '/wildlife/Red Fox/fox-cross-yukon.jpg', credit: 'Martin Lopatka · CC BY-SA 2.0 · Dawson City, Yukon' },
    { src: '/wildlife/Red Fox/fox-bic.jpg', credit: 'Marc-Lautenbacher · CC BY-SA 4.0 · Parc national du Bic, Quebec' },
  ],
};

export default RED_FOX;
