// Aulavik National Park — данные страницы /park/aulavik
//
// Фото: по просьбе — снимок с карточки (/nt/parks/Aulavik National
// Park.png): белый медведь на каменистом арктическом берегу. Белые медведи
// встречаются на северном берегу парка, но место съёмки по снимку не
// определить — не подтверждено. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Aulavik (главная): «Aulavik» на инувиалуктун — «место,
//   где путешествуют люди»; >12,000 км² арктических низменностей на севере
//   острова Банкс; плодородные речные долины, полярная пустыня, бэдленды,
//   холмы, морской берег; один из самых изолированных парков Северной
//   Америки; спасатели Parks Canada в Инувике — помощь может идти 1-2 дня
//   и дольше; дроны запрещены (до $25,000); Thomsen River — спокойная река
//   через весь парк; некоммерческим группам — минимум 2 лодки, спутниковое
//   средство связи; всем нужен permit и регистрация; при остановке в Sachs
//   Harbour — связаться с хамлетом; infoinuvik-inuvikinfo@pc.gc.ca;
//   Box 29, Sachs Harbour NT X0E 0Z0; офис — по запросу; HMS Investigator
//   и McClure's Cache.
// - Wikipedia: основан в 1992; 12,274 км²; безлесный, полярная пустыня,
//   плато до 450 м; только самолётом, чартер — 4 места посадки; Thomsen —
//   «одна из самых северных судоходных рек Северной Америки»; самая высокая
//   плотность овцебыков на Земле (на острове 68-80 тыс., ~20% в парке);
//   карибу Пири (под угрозой), песцы, лемминги, зайцы, волки; белые
//   медведи, нерпы, белухи и гренландские киты у северного берега; ~150
//   видов цветковых; 34 посетителя в 2022-23; пре-дорсет, туле,
//   инувиалуиты с XVII века; McClure зимовал в Mercy Bay в 1850-53,
//   экипаж бросил HMS Investigator; Sachs Harbour — единственный посёлок
//   острова.
// - НЕ использовано: расстояние до Инувика, цены, даты сезона.

const IMAGE = '/nt/parks/Aulavik National Park.png';

export const AULAVIK = {
  slug: 'aulavik',
  name: 'Aulavik National Park',
  shortName: 'Aulavik',
  province: 'Northwest Territories',
  tag: 'Banks Island Arctic · Est. 1992',
  heroImage: IMAGE,
  heroCaption: 'Aulavik National Park · NT',
  description:
    'Aulavik means “place where people travel” in Inuvialuktun. On the north end of Banks Island, high in the Arctic, this treeless polar desert has the highest concentration of muskoxen on Earth — and only a few dozen visitors a year.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1992' },
    { label: 'Area', value: '12,274 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Visitors', value: '34 In 2022–23' },
    { label: 'Trees', value: 'None' },
    { label: 'Access', value: 'Charter Plane' },
  ],

  badges: ['Muskoxen', 'Thomsen River', 'High Arctic'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
  ],

  spotlight: {
    tag: 'Kingdom Of Muskoxen',
    emoji: '🦬',
    title: 'More Muskoxen Than Anywhere On Earth',
    text: 'Banks Island is home to an estimated 68,000–80,000 muskoxen, and around a fifth of them live in Aulavik — the highest concentration on the planet. The gentle Thomsen River, one of the most northerly navigable rivers in North America, runs the length of the park. People have travelled this land for thousands of years, from Pre-Dorset hunters to the Inuvialuit.',
    stats: [
      { value: '~20%', label: 'Of Banks Island’s muskoxen', level: 'gold' },
      { value: '34', label: 'Visitors in 2022–23', level: 'danger' },
      { value: '~150', label: 'Flowering plants', level: 'olive' },
      { value: '1–2 days+', label: 'Possible rescue time', level: 'blue' },
    ],
  },

  attractions: [
    {
      name: 'Thomsen River',
      icon: '🛶',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A gentle river running the length of the park — one of the most northerly navigable rivers in North America.',
    },
    {
      name: 'Muskoxen',
      icon: '🦬',
      tag: 'Wildlife',
      tagLevel: 'safe',
      meta: 'The highest concentration of muskoxen on Earth roams the river valleys.',
    },
    {
      name: 'Mercy Bay & HMS Investigator',
      icon: '⚓',
      tag: 'Arctic History',
      tagLevel: 'purple',
      meta: 'Captain McClure’s crew spent two winters here (1850–53) while searching for Franklin, then abandoned their ship.',
    },
    {
      name: 'Polar Desert',
      icon: '🏜️',
      tag: 'Landscape',
      tagLevel: 'olive',
      meta: 'Treeless lowlands, buttes, badlands, and a plateau up to 450 m — with high winds and little precipitation.',
    },
    {
      name: 'Arctic Coast',
      icon: '🐋',
      tag: 'Marine Life',
      tagLevel: 'blue',
      meta: 'Polar bears, seals, and beluga and bowhead whales along the park’s north coast.',
    },
    {
      name: 'Ancient Sites',
      icon: '🏺',
      tag: 'Heritage',
      tagLevel: 'danger',
      meta: 'Traces of Pre-Dorset, Thule, and Inuvialuit people who travelled and hunted here.',
    },
  ],

  wildlifeWarning:
    'Polar bears live along the coast and can appear anywhere. Wolves and muskoxen also demand respect — keep a safe distance. Aulavik is one of the most isolated parks in North America: rescue can take one to two days or longer, so you must be fully self-reliant.',
  wildlife: [
    { name: 'Muskox', level: 'caution', chance: '★★★★★ River valleys' },
    { name: 'Polar Bear', level: 'danger', chance: '★★☆☆☆ Coast' },
    { name: 'Peary Caribou', level: 'safe', chance: '★☆☆☆☆ Endangered' },
    { name: 'Arctic Fox', level: 'safe', chance: '★★★☆☆ Tundra' },
    { name: 'Snowy Owl', level: 'safe', chance: '★★☆☆☆ Summer' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'The short window for paddling the Thomsen River and hiking the tundra under the midnight sun.',
      rating: 5,
      note: 'Only season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'Winter arrives early in the High Arctic. Trips end before the cold sets in.',
      rating: 1,
      note: 'Freeze-up',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'October — May',
      level: 'caution',
      text: 'Long polar night and extreme cold. Not a visiting season.',
      rating: 1,
      note: 'Polar night',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'June',
      level: 'olive',
      text: 'Snowmelt and ice breakup. Use this time to register, get your permit, and arrange charters.',
      rating: 1,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'Permit, Registration & Self-Reliance',
    text: 'All visitors need a Parks Canada permit and must register before entering. Non-commercial paddling groups need at least two watercraft and a satellite communication device. Rescue may take 1–2 days or longer.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nt/aulavik',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Aulavik' },
  trails: [
    { name: 'Thomsen River Paddle', length: 'Multi-day', area: 'Length of the park', difficulty: 'Gentle river', level: 'blue' },
    { name: 'Tundra Hiking', length: 'Off-trail', area: 'River valleys & uplands', difficulty: 'Self-reliant', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🛩️',
      title: 'Charter Flight',
      text: 'Aulavik is a fly-in park. A charter plane is the most practical way in, with four landing sites in the park.',
      time: 'Fly-in only',
    },
    {
      icon: '🏘️',
      title: 'Sachs Harbour',
      text: 'The only community on Banks Island. If your group stops here, contact the Hamlet of Sachs Harbour before booking.',
      time: 'Box 29, Sachs Harbour',
    },
    {
      icon: '📋',
      title: 'Register First',
      text: 'Get a Parks Canada permit and register before entering. Plan with the Parks Canada team in Inuvik.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Permit & Registration Required',
    text: 'All visitors need a Parks Canada permit and must register before entering the park.',
    buyText: 'Email the Parks Canada Western Arctic office to start planning.',
    url: 'https://parks.canada.ca/pn-np/nt/aulavik',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Wilderness Camping',
      text: 'Camp on the tundra or along the Thomsen River — there are no facilities.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nt/aulavik', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📧',
      title: 'Contact',
      lines: ['infoinuvik-inuvikinfo@pc.gc.ca', 'Office: open upon request'],
    },
    {
      icon: '📍',
      title: 'Mailing Address',
      text: 'Box 29, Sachs Harbour, NT X0E 0Z0',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
    {
      icon: '📡',
      title: 'Satellite Device',
      text: 'Carry a satellite communication device such as an inReach.',
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bears',
      text: 'Polar bears can appear anywhere along the coast. Plan for bear safety.',
    },
    {
      icon: '🪶',
      title: 'Inuvialuit Land',
      text: 'Leaving the park? Contact the RCMP, the Inuvialuit Land Administration, and the local Hunters & Trappers Committee.',
    },
  ],

  gallery: [],
};

export default AULAVIK;
