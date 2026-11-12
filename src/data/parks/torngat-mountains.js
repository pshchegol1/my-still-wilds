// Torngat Mountains National Park — данные страницы /park/torngat-mountains
//
// Фото: фьорд Nachvak в самом парке — Paul Gierszewski (2008), общественное
// достояние, Wikimedia Commons (File:Nachvak Fjord Labrador 2008.JPG).
// Поставлено вместо старого снимка с карточки (тот был похож на Скалистые
// горы). Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Torngat Mountains (главная): субарктика — острые пики,
//   фьорды, выточенные ледниками, айсберги; белые медведи и карибу; одни из
//   древнейших пород Земли; «родина инуитов» — путешествовать по древним
//   маршрутам вместе с инуитами; сезон 2026 — с середины июля до конца
//   августа; PO Box 471, Nain NL A0P 1L0; 709-922-1290 (англ.),
//   709-458-2417 (фр.); 1-888-922-1290;
//   infopntorngats-torngatsnpinfo@pc.gc.ca.
// - Wikipedia: резерват — 1 декабря 2005 (Labrador Inuit Land Claims
//   Agreement), парк — 10 июля 2008, первый нацпарк Лабрадора; 9,700 км²;
//   крупнейший нацпарк Атлантической Канады; Торнгат — самые высокие горы
//   материковой Канады к востоку от Скалистых; «Torngat» от инуктитутского
//   Tongait — «место духов»; совместное управление с правительством
//   Nunatsiavut, роль инуитов Nunavik; <600 посетителей в год; доступ —
//   чартер, круизное судно, снегоход, пешком; Silluak на Saglek Fiord —
//   точка старта; тропы в основном не размечены, рекомендуют вооружённых
//   местных гидов из-за медведей; лесные карибу (за 38 лет −81%), чёрные и
//   белые медведи, волки, лисы, сапсаны, беркуты; летний морской лёд
//   сокращается ~30% за десятилетие.
// - Через поиск (Parks Canada brochure 2015 и др.): Base Camp and Research
//   Station на Saglek Fiord, с середины июля до начала сентября; за
//   пределами огороженного лагеря — инуитские охранники от медведей;
//   Mount Caubvick ~1,652 м (на границе с Квебеком — Mont D'Iberville).
// - НЕ использовано: цены, расписание чартеров, оператор лагеря в 2026.

const IMAGE = '/nl/parks/torngat-nachvak-fjord.jpg';

export const TORNGAT_MOUNTAINS = {
  slug: 'torngat-mountains',
  name: 'Torngat Mountains National Park',
  shortName: 'Torngat Mountains',
  province: 'Newfoundland and Labrador',
  tag: 'Place Of Spirits · Est. 2005',
  heroImage: IMAGE,
  heroCaption: 'Nachvak Fjord · Photo: Paul Gierszewski (public domain)',
  description:
    'Torngat comes from the Inuktitut Tongait — “place of spirits.” At the northern tip of Labrador, the highest mountains in mainland Canada east of the Rockies rise above glacier-carved fjords and iceberg-dotted seas — an Inuit homeland you explore with Inuit guides.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '2005' },
    { label: 'Area', value: '9,700 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Mount Caubvick', value: '~1,652 m' },
    { label: 'Visitors', value: 'Under 600 / Year' },
    { label: '2026 Season', value: 'Mid-July — Aug' },
  ],

  badges: ['Fjords', 'Inuit Homeland', 'Polar Bears'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
  ],

  spotlight: {
    tag: 'Inuit Homeland',
    emoji: '🏔️',
    title: 'Mountains Of The Spirits',
    text: 'Set aside in 2005 through the Labrador Inuit Land Claims Agreement and made Labrador’s first national park in 2008, Torngat is co-managed with the Nunatsiavut Government. It is the largest national park in Atlantic Canada, with some of the oldest rocks on Earth. Polar bears roam the coast, and you follow ancient Inuit travel routes with Inuit guides.',
    stats: [
      { value: '9,700 km²', label: 'Largest park in Atlantic Canada', level: 'blue' },
      { value: '~1,652 m', label: 'Mount Caubvick', level: 'gold' },
      { value: '<600', label: 'Visitors per year', level: 'danger' },
      { value: '2008', label: 'Labrador’s first national park', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Base Camp On Saglek Fiord',
      icon: '⛺',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The Torngat Mountains Base Camp and Research Station — a fenced camp that is the hub for summer visits.',
    },
    {
      name: 'Nachvak Fjord',
      icon: '🌊',
      tag: 'Fjords',
      tagLevel: 'blue',
      meta: 'A deep fjord walled by steep, treeless mountains — one of the park’s most striking landscapes.',
    },
    {
      name: 'Mount Caubvick',
      icon: '🏔️',
      tag: 'Highest Peak',
      tagLevel: 'danger',
      meta: 'About 1,652 m on the Labrador–Quebec border — called Mont D’Iberville on the Quebec side.',
    },
    {
      name: 'Ancient Rocks',
      icon: '🪨',
      tag: 'Geology',
      tagLevel: 'olive',
      meta: 'The park holds some of the oldest rocks on Earth.',
    },
    {
      name: 'Inuit Travel Routes',
      icon: '🪶',
      tag: 'Culture',
      tagLevel: 'purple',
      meta: 'Explore the land with Inuit guides along routes travelled for generations.',
    },
    {
      name: 'Icebergs & Polar Bears',
      icon: '🐻‍❄️',
      tag: 'Wildlife',
      tagLevel: 'safe',
      meta: 'Icebergs drift past the coast, and polar bears hunt along the shore — viewed only with experienced guards.',
    },
  ],

  wildlifeWarning:
    'Polar bears are common along the coast and can appear anywhere. Outside the fenced base camp, travel with trained Inuit bear guards — Parks Canada strongly recommends them for all backcountry travel. Black bears and wolves also live here.',
  wildlife: [
    { name: 'Polar Bear', level: 'danger', chance: '★★★☆☆ Coast' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Declining' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Valleys' },
    { name: 'Arctic Fox', level: 'safe', chance: '★★☆☆☆ Tundra' },
    { name: 'Golden Eagle', level: 'safe', chance: '★☆☆☆☆ Mountains' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'Mid-July — August',
      level: 'safe',
      text: 'The visitor season in 2026 ran from mid-July to late August — the only time the base camp is open.',
      rating: 5,
      note: 'Visitor season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'The base camp closes and winter comes quickly.',
      rating: 1,
      note: 'Closed',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Long Arctic winter. The park can be reached by snowmobile, but only experienced, well-prepared parties should travel in this season.',
      rating: 1,
      note: 'Experts only',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May — June',
      level: 'olive',
      text: 'Ice and snow linger. Time to plan your trip and book flights or cruises.',
      rating: 1,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'Unmarked Trails — Go With Inuit Bear Guards',
    text: 'Most hiking routes in the Torngats are unmarked. Because of polar bears, travel outside the base camp with trained Inuit bear guards and check Parks Canada bulletins, trail conditions, and avalanche conditions before you go.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nl/torngats',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore The Torngats' },
  trails: [
    { name: 'Base Camp Stay', length: 'Multi-day', time: 'Mid-July — August', area: 'Saglek Fiord', difficulty: 'Guided', level: 'blue' },
    { name: 'Expedition Cruise', length: 'Ship-based', area: 'Coast & fjords', difficulty: 'Guided', level: 'blue' },
    { name: 'Backcountry Trek', length: 'Unmarked routes', area: 'Mountains & valleys', difficulty: 'Expert', level: 'danger' },
  ],

  gettingThere: [
    {
      icon: '🛩️',
      title: 'Charter Flight',
      text: 'Charter flights are one of the main ways into the park.',
      time: 'Summer only',
    },
    {
      icon: '🚢',
      title: 'Cruise Ship',
      text: 'Expedition cruises along the Labrador coast also stop in the park.',
      time: 'Summer',
    },
    {
      icon: '🏘️',
      title: 'Nain',
      text: 'The nearest community and home of the Parks Canada office.',
      time: 'PO Box 471, Nain',
    },
  ],

  entryPass: {
    title: 'Plan With Parks Canada',
    text: 'Park fees and permits apply. Contact the Nain office about base camp packages, guides, and bear guards.',
    buyText: 'Call 1-888-922-1290 or email the park office.',
    url: 'https://parks.canada.ca/pn-np/nl/torngats',
  },

  stay: [
    {
      icon: '⛺',
      title: 'Base Camp & Research Station',
      text: 'A fenced camp on Saglek Fiord, open in summer — the main place to stay in the park.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nl/torngats', level: 'safe' }],
    },
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'Wilderness camping on guided trips with bear guards.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nl/torngats', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Office',
      lines: ['709-922-1290', 'Toll-free: 1-888-922-1290', 'infopntorngats-torngatsnpinfo@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'PO Box 471, Nain, NL A0P 1L0',
    },
    {
      icon: '🐻‍❄️',
      title: 'Bear Guards',
      text: 'Trained Inuit bear guards are strongly recommended for all backcountry travel.',
    },
    {
      icon: '🏔️',
      title: 'Avalanche Conditions',
      text: 'Check avalanche and trail conditions with Parks Canada before hiking.',
    },
    {
      icon: '🌡️',
      title: 'Changing Climate',
      text: 'Summer sea ice is shrinking fast — about 30% per decade.',
    },
    {
      icon: '🪶',
      title: 'Inuit Co-Management',
      text: 'Co-managed with the Nunatsiavut Government, with a role for Nunavik Inuit.',
    },
  ],

  gallery: [],
};

export default TORNGAT_MOUNTAINS;
