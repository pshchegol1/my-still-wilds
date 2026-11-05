// Arctic Fox — данные страницы /wildlife/arctic-fox
//
// Сделано самостоятельно без макета, по той же схеме, что Red Fox.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Arctic fox": 2.5-9 кг, 75-115 см;
//   самый маленький дикий представитель псовых в Канаде; хвост 30-35%
//   длины; зимой густой белый мех, поздней весной линяет в более тонкий
//   двухцветный буро-коричневый; голубая (сизая) морфа — редко больше 5%
//   добытых в Канаде, до 50% в Гренландии; ареал — от северной оконечности
//   о. Элсмир до южной оконечности залива Джеймс; на тундре лемминги —
//   почти весь рацион круглый год, птицы, яйца, суслики и ягоды — лишь
//   5-10% летом; 10-15 охот за ночь, по 3-8 леммингов; прибрежные песцы
//   зимуют на морском льду и часто ходят за белыми медведями, подбирая
//   остатки тюленей; норы до 300 лет и до 100 входов; средний помёт ~11
//   щенков (до 22 в России); выводку из 11 нужно ~30 леммингов в день, а
//   перед уходом из норы — больше 100; численность леммингов меняется
//   циклами 3-4 года, численность песцов — в 10-20 раз между годами;
//   бешенство, чесотка, промысел снижают численность; риск бешенства
//   растёт возле искусственных источников еды, например свалок.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - afox-hero.mp4 — "Arctic fox (Vulpes lagopus)", Emma (Flickr),
//   Wikimedia Commons, CC BY-SA 2.0 — дикий песец на снегу среди валунов,
//   Гудзонов залив (Канада); 13 с, исходник 1270x720.
// - afox-hero.jpg — "Arctic fox" (6357363241), Emma (Flickr), CC BY 2.0 —
//   из той же серии снимков, точное место в описании файла не указано.
// - Галерея:
//   * afox-banks.jpg — Stephan Sprinz, CC BY 4.0, летний мех, у Sachs
//     Harbour, о. Банкс (Канада);
//   * afox-quttinirpaaq.jpg — Ansgar Walk, CC BY-SA 2.5, Quttinirpaaq NP,
//     Нунавут (Канада);
//   * afox-morphs.jpg — Jonatan Pie (Unsplash), CC0 — белая и голубая
//     морфы рядом, Исландия.
//   Фото из зоопарков (Oaklawn Farm, Parc Omega, Skansen и др.) не брала.

export const ARCTIC_FOX = {
  slug: 'arctic-fox',
  name: 'Arctic Fox',
  shortName: 'Arctic Fox',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Arctic Fox/afox-hero.jpg',
  heroVideo: '/wildlife/Arctic Fox/afox-hero.mp4',
  heroCredit: 'Photo: Emma / Flickr · CC BY 2.0',
  heroVideoCredit: 'Video: Emma / Wikimedia Commons · CC BY-SA 2.0 · Hudson Bay, Canada',
  description:
    "Canada's smallest wild canid, built for the coldest places on Earth. Snow-white in winter and brown in summer, arctic foxes live on lemmings, follow polar bears across the sea ice, and raise litters that average about 11 pups. Curious, but wild — never feed one.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '2.5-9 KG' },
    { label: 'Length', value: '75-115 CM' },
    { label: 'Average Litter', value: '~11 Pups' },
    { label: 'Dens', value: 'Up To 300 Years Old' },
    { label: 'Main Food', value: 'Lemmings' },
    { label: 'Range', value: 'Ellesmere To James Bay' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Arctic foxes can be curious and come close. Never feed or touch one — they can carry rabies.',
  },

  behaviorSection: {
    tag: 'Arctic Fox Behaviour',
    title: 'Built For',
    highlight: 'The Arctic',
    accent: '#38a169',
    cards: [
      {
        title: 'Two Coats A Year',
        icon: 'Calendar',
        description:
          'A thick white coat hides them in winter snow. In late spring they moult into a thinner brown-and-grey summer coat.',
      },
      {
        title: 'White Or Blue',
        icon: 'Eye',
        description:
          'A few arctic foxes are a dark blue-grey all year. In Canada they are rare — seldom more than 5% — but common in Greenland.',
      },
      {
        title: 'Lemming Hunters',
        icon: 'ArrowDown',
        description:
          'On the tundra, lemmings make up almost the whole diet. Parents may hunt 10 to 15 times a night, bringing back several lemmings each trip.',
      },
      {
        title: 'Shadowing Polar Bears',
        icon: 'Footprints',
        description:
          'In winter, coastal foxes travel out onto the sea ice and often follow polar bears to scavenge what is left of their seal kills.',
      },
      {
        title: 'Ancient Dens',
        icon: 'DoorOpen',
        description:
          'Some dens are used for centuries — up to 300 years old, with as many as 100 entrances.',
      },
      {
        title: 'Boom And Bust',
        icon: 'UsersThreeIcon',
        description:
          'Litters average about 11 pups. When lemmings boom every 3–4 years, fox numbers can jump 10 to 20 times — then crash.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Arctic Foxes',
      icon: 'Trash2',
      description: 'Food handouts and garbage draw foxes into towns and camps, where rabies spreads more easily.',
    },
    {
      title: 'Never Touch Or Pick One Up',
      icon: 'XCircle',
      description: 'Arctic foxes can carry rabies. A fox that walks right up to you may be sick — keep away.',
    },
    {
      title: 'Never Disturb A Den',
      icon: 'DoorOpen',
      description: 'Dens with pups are easily disturbed. Watch from far away and leave quickly.',
    },
    {
      title: 'Never Leave Garbage Or Food Out',
      icon: 'Trash2',
      description: 'Dumps and open garbage are where fox populations — and rabies risk — build up.',
    },
    {
      title: 'Never Follow A Fox Onto Sea Ice',
      icon: 'AlertTriangle',
      description: 'Foxes on the ice may be trailing a polar bear. Stay on safe ground with an experienced guide.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From A Distance',
      icon: 'Eye',
      description: 'Use binoculars or a zoom lens and stay at least 30 metres away, even if the fox seems friendly.',
    },
    {
      title: 'Keep Food Sealed',
      icon: 'ShieldCheck',
      description: 'Store food and garbage securely in camps and towns — it also keeps polar bears away.',
    },
    {
      title: 'Keep Dogs Leashed',
      icon: 'DogIcon',
      description: 'Dogs and foxes can pass rabies to each other. Keep dogs leashed and vaccinated.',
    },
    {
      title: 'Watch For Polar Bears',
      icon: 'AlertTriangle',
      description: 'Where you see arctic foxes on the coast, polar bears may be close. Travel with a guide and stay alert.',
    },
    {
      title: 'Report Sick Or Bold Foxes',
      icon: 'Phone',
      description: 'A fox acting strangely or approaching people should be reported to local wildlife officers right away.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Around northern towns, dumps and handouts concentrate foxes — and that raises the risk of rabies for foxes, dogs, and people.',
    items: [
      { name: 'Meat And Scraps', icon: '/icons/wildlife/🥩.png', description: 'The fastest way to make a fox bold' },
      { name: 'Fish', icon: '/icons/wildlife/🐟.png', description: 'Draws foxes — and bears — to camps' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Junk food for a wild predator' },
      { name: 'Pet Food', icon: '🐾', description: 'Keep it indoors' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Eggs', icon: '🥚', description: 'Never leave out as “treats”' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Dumps spread rabies among foxes' },
    ],
  },

  parksSectionTag: 'Arctic Parks',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Arctic Foxes' },
  spotParks: [
    { name: 'Churchill & Wapusk National Park', province: 'Manitoba', season: 'Fall & winter — white coats on the Hudson Bay coast', level: 'caution' },
    { name: 'Aulavik National Park', province: 'Northwest Territories', season: 'Summer — Banks Island tundra', level: 'safe' },
    { name: 'Quttinirpaaq National Park', province: 'Nunavut', season: 'Summer — Ellesmere Island', level: 'safe' },
    { name: 'James Bay Coast', province: 'Ontario · Quebec', season: 'Winter — the southern edge of their range', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Enjoy From A Distance',
      description:
        'Arctic foxes are often curious. Stay where you are, keep quiet, and let it go about its business.',
    },
    {
      title: 'Don’t Let It Come Close',
      description:
        'If a fox approaches, stand up, clap, and step back. Never offer food or reach out to touch it.',
    },
    {
      title: 'Look Around For Bears',
      description:
        'On the coast or sea ice, a fox may be following a polar bear. Check your surroundings and stay with your group.',
    },
    {
      title: 'If Bitten — Get Help Fast',
      description:
        'Wash any bite or scratch immediately and see a health centre right away because of the rabies risk. Report the fox.',
    },
  ],

  gallery: [
    { src: '/wildlife/Arctic Fox/afox-banks.jpg', credit: 'Stephan Sprinz · CC BY 4.0 · Banks Island, NWT' },
    { src: '/wildlife/Arctic Fox/afox-quttinirpaaq.jpg', credit: 'Ansgar Walk · CC BY-SA 2.5 · Quttinirpaaq NP, Nunavut' },
    { src: '/wildlife/Arctic Fox/afox-morphs.jpg', credit: 'Jonatan Pie · CC0 · Iceland' },
  ],
};

export default ARCTIC_FOX;
