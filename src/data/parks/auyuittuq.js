// Auyuittuq National Park — данные страницы /park/auyuittuq
//
// Фото: по просьбе — снимок с карточки (/nu/parks/auyuittuq.png): фьорд с
// ледником, сползающим в море, айсберги, скалистые заснеженные горы —
// похоже на берег Баффиновой Земли, но такие виды есть и в Гренландии;
// точное место не подтверждено. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Auyuittuq (главная): юго-восток Баффиновой Земли —
//   ледники, крутые фьорды, извилистые речные долины; «Auyuittuq» на
//   инуктитуте — «земля, которая никогда не тает»; история людей >3,000
//   лет; совместное управление инуитов и Parks Canada; Akshayuk Pass —
//   природный коридор ~100 км (пешком, на лыжах, снегоступах), скалолазание
//   и альпинизм; гиды и аутфиттеры из Pangnirtung и Qikiqtarjuaq; дневные
//   туры — весной к Полярному кругу, летом на Ulu Peak; ночлег в посёлках;
//   открыт круглый год; 867-473-2500 (Pangnirtung), 867-927-8834
//   (Qikiqtarjuaq), 1-888-773-8888; nunavut.info@pc.gc.ca; ЧП
//   1-780-852-3100; P.O. Box 353 Pangnirtung NU X0A 0R0; P.O. Box 122
//   Qikiqtarjuaq NU X0A 0B0; полноценный нацпарк — с 2001.
// - Wikipedia: полуостров Камберленд, большей частью за Полярным кругом;
//   создан в 1972 как Baffin Island National Park (резерват; в других
//   источниках — 1976); ледник Penny ~6,000 км²; стена горы Thor — 1,250 м,
//   Asgard — 800 м; ветер в перевале до 175 км/ч; маршрут — вдоль рек Weasel
//   и Owl через озеро Summit; регистрация и инструктаж в офисе парка
//   обязательны; паводок 2008 смыл мост у Windy Lake; лемминги, песцы,
//   белые совы, белые медведи, волки, нарвалы, белухи; 256 посетителей
//   2022-23.
// - Площадь: Canadian Encyclopedia и муниципалитет Pangnirtung — 19,089 км²
//   (Wikipedia — 21,470). На карточке Nunavut было 5,008 → 19,089.
// - НЕ использовано: цены, текущие закрытия троп/мостов (бюллетени не
//   прочитаны — на странице совет проверить их).

const IMAGE = '/nu/parks/auyuittuq.png';

export const AUYUITTUQ = {
  slug: 'auyuittuq',
  name: 'Auyuittuq National Park',
  shortName: 'Auyuittuq',
  province: 'Nunavut',
  tag: 'The Land That Never Melts · Est. 1972',
  heroImage: IMAGE,
  heroCaption: 'Auyuittuq National Park · NU',
  description:
    'Auyuittuq means “the land that never melts” in Inuktitut. On Baffin Island, glaciers pour off the Penny Ice Cap between granite walls — including Mount Thor’s 1,250 m sheer face — and Akshayuk Pass cuts a 100 km route across the Arctic Circle.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1972' },
    { label: 'Area', value: '19,089 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Akshayuk Pass', value: '~100 km' },
    { label: 'Penny Ice Cap', value: '~6,000 km²' },
    { label: 'Mount Thor Face', value: '1,250 m' },
  ],

  badges: ['Akshayuk Pass', 'Glaciers', 'Inuit Co-Managed'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'Arctic Mountains',
    emoji: '🏔️',
    title: 'A Pass Through The Ice',
    text: 'Akshayuk Pass is a natural corridor of about 100 km that crosses the Cumberland Peninsula, following the Weasel and Owl rivers past Summit Lake. Above it rise Mount Thor, with a 1,250 m sheer face, and Mount Asgard, with walls of about 800 m. The Penny Ice Cap — about 6,000 km² of ice — feeds the glaciers. People have lived here for over 3,000 years, and the park is co-managed by Inuit and Parks Canada.',
    stats: [
      { value: '~100 km', label: 'Akshayuk Pass', level: 'blue' },
      { value: '1,250 m', label: 'Mount Thor face', level: 'danger' },
      { value: '~6,000 km²', label: 'Penny Ice Cap', level: 'olive' },
      { value: '3,000+', label: 'Years of human history', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Akshayuk Pass',
      icon: '🥾',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Hike, ski, or snowshoe this natural corridor of about 100 km across the Cumberland Peninsula.',
    },
    {
      name: 'Mount Thor',
      icon: '🧗',
      tag: 'Big Wall',
      tagLevel: 'danger',
      meta: 'A granite peak with a sheer face of about 1,250 m, rising above the pass.',
    },
    {
      name: 'Mount Asgard',
      icon: '⛰️',
      tag: 'Climbing',
      tagLevel: 'purple',
      meta: 'A granite peak with walls of about 800 m — an objective for experienced climbers.',
    },
    {
      name: 'Penny Ice Cap',
      icon: '🧊',
      tag: 'Glaciers',
      tagLevel: 'blue',
      meta: 'About 6,000 km² of ice feeding glaciers that flow down the valleys.',
    },
    {
      name: 'Arctic Circle Marker',
      icon: '🧭',
      tag: 'Day Trip',
      tagLevel: 'safe',
      meta: 'Guided spring trips take you to the Arctic Circle inside the park.',
    },
    {
      name: 'Ulu Peak',
      icon: '🏔️',
      tag: 'Day Hike',
      tagLevel: 'olive',
      meta: 'A guided summer day hike offered by local outfitters.',
    },
  ],

  wildlifeWarning:
    'Polar bears can be encountered in the park, especially near the coast. Learn polar bear safety before you go and travel with experienced guides if you are unsure. Wildlife is otherwise sparse — the bigger daily risks are weather, wind, and terrain.',
  wildlife: [
    { name: 'Polar Bear', level: 'danger', chance: '★☆☆☆☆ Coast' },
    { name: 'Arctic Fox', level: 'safe', chance: '★★☆☆☆ Valleys' },
    { name: 'Snowy Owl', level: 'safe', chance: '★★☆☆☆ Summer' },
    { name: 'Lemming', level: 'safe', chance: '★★★☆☆ Tundra' },
    { name: 'Narwhal', level: 'safe', chance: '★☆☆☆☆ Fjords' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'Hiking season in Akshayuk Pass. Weather changes fast, and glacial meltwater rivers must be treated with care.',
      rating: 5,
      note: 'Hiking season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: 'Ski and snowshoe season in the pass, and guided spring trips to the Arctic Circle.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Freeze-up and rapidly worsening weather.',
      rating: 1,
      note: 'Freeze-up',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — February',
      level: 'caution',
      text: 'Dark, extremely cold, and windy. The park is open year-round, but this is for expert expeditions only.',
      rating: 1,
      note: 'Experts only',
    },
  ],

  trailsNote: {
    title: 'Register, Attend Orientation, Check Bulletins',
    text: 'All visitors must register at a park office in Pangnirtung or Qikiqtarjuaq and attend an orientation. Winds in Akshayuk Pass can reach 175 km/h, and floods have washed out bridges before — always check current bulletins.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nu/auyuittuq',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Auyuittuq' },
  trails: [
    { name: 'Akshayuk Pass Traverse', length: '~100 km', area: 'Weasel & Owl rivers', difficulty: 'Expert', level: 'danger' },
    { name: 'Arctic Circle Day Trip', length: 'Guided', time: 'Spring', area: 'Local outfitters', difficulty: 'Guided', level: 'blue' },
    { name: 'Ulu Peak Hike', length: 'Guided', time: 'Summer', area: 'Local outfitters', difficulty: 'Guided', level: 'blue' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'Fly To Nunavut',
      text: 'Fly to Pangnirtung or Qikiqtarjuaq on Baffin Island — the two gateway communities.',
      time: 'Gateway communities',
    },
    {
      icon: '🚤',
      title: 'Into The Park',
      text: 'Arrange transportation to and from the park with local guides and outfitters in either community.',
      time: 'Book in advance',
    },
    {
      icon: '📋',
      title: 'Register & Orientation',
      text: 'Register at the Parks Canada office and attend the mandatory orientation before entering.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Fees & Registration',
    text: 'Park user fees apply, including daily visitor fees and overnight camping. Annual backcountry passes are available.',
    buyText: 'Contact the Pangnirtung or Qikiqtarjuaq office to register and plan your trip.',
    url: 'https://parks.canada.ca/pn-np/nu/auyuittuq',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'Camp along Akshayuk Pass — with registration and fees.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/auyuittuq', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Pangnirtung & Qikiqtarjuaq',
      text: 'Overnight accommodation is available in both gateway communities.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/auyuittuq', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['In the park:', '1-780-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Offices',
      lines: ['Pangnirtung: 867-473-2500', 'Qikiqtarjuaq: 867-927-8834', 'nunavut.info@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'P.O. Box 353, Pangnirtung, NU X0A 0R0',
    },
    {
      icon: '💨',
      title: 'Extreme Wind',
      text: 'Winds in Akshayuk Pass can reach 175 km/h. Secure your tent and gear.',
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bear Safety',
      text: 'Read Parks Canada’s polar bear safety guidance before your trip.',
    },
    {
      icon: '🪶',
      title: 'Inuit Co-Management',
      text: 'The park is co-managed by Inuit and Parks Canada.',
    },
  ],

  gallery: [],
};

export default AUYUITTUQ;
