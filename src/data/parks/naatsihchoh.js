// Nááts'ihch'oh National Park Reserve — данные страницы /park/naatsihchoh
//
// Фото: по просьбе — снимок с карточки (/nt/parks/Naats'ihch'oh.png).
// ВНИМАНИЕ: высокий снежный пик над густым высоким хвойным лесом — очень
// похоже на Гималаи/Кашмир (характерные деодары), а не на горы Маккензи
// на севере Канады. Не подтверждено — сказано пользователю, предложена
// замена. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Nááts'įhch'oh (главная): назван в честь горы Nááts'įhch'oh,
//   важного места для народа сахту; юго-запад Северо-Западных территорий у
//   границы Юкона, земли Shúhtaot'ine (горные дене); гризли, бараны Далла,
//   снежные козы, лесные карибу; большинство прилетает гидросамолётом из
//   посёлков NWT и Юкона; сплав — только для опытных, лишь несколько групп
//   в год, есть гиды; пакрафт, походы; река Pı̨́ı̨́p'enéh łéetǫ́ǫ́ Deé
//   (Broken Skull) — популярна; названия на диалекте горных дене; открыт
//   круглый год; офис: 38 Bear Rock Drive, Tulita NT X0E 0K0;
//   1-867-588-4884; tulitainfo-infotulita@pc.gc.ca; пн-пт; дроны запрещены
//   (до $25,000).
// - Parks Canada, Management Plan 2017 и новости (через поиск): 4,895 км²;
//   формально создан в декабре 2014 (на карточке было 2012 и 5,600 км² →
//   исправлено); юго-запад района Sahtu Settlement Area; охраняет верховья
//   South Nahanni River и священные земли.
// - Wikipedia (через поиск): сплав по «rock garden» South Nahanni можно
//   начинать от Nááts'įhch'oh Tué (Moose Ponds) — источник один, на
//   странице помечено осторожно.
// - НЕ использовано: число посетителей, цены, Howard's Pass.

const IMAGE = "/nt/parks/Naats'ihch'oh.png";

export const NAATSIHCHOH = {
  slug: 'naatsihchoh',
  name: 'Nááts’įhch’oh National Park Reserve',
  shortName: 'Nááts’įhch’oh',
  province: 'Northwest Territories',
  tag: 'Mountain Dene Homeland · Est. 2014',
  heroImage: IMAGE,
  heroCaption: 'Nááts’įhch’oh National Park Reserve · NT',
  description:
    'Named for a mountain sacred to the Sahtu people, this remote reserve near the Yukon border protects the headwaters of the South Nahanni River — wild rivers, grizzly bears, Dall’s sheep, mountain goats, and woodland caribou on the land of the Shúhtaot’ine (Mountain Dene).',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '2014' },
    { label: 'Area', value: '4,895 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Protects', value: 'Nahanni Headwaters' },
    { label: 'Access', value: 'Floatplane' },
    { label: 'Office', value: 'Tulita, NT' },
  ],

  badges: ['Wild Rivers', 'Mountain Dene', 'Remote'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
  ],

  spotlight: {
    tag: 'Shúhtaot’ine Land',
    emoji: '⛰️',
    title: 'Where The South Nahanni Begins',
    text: 'Nááts’įhch’oh protects the headwaters of the South Nahanni River in the Sahtu Settlement Area, just upstream of Nahanni National Park Reserve. The park takes its name from a mountain of special importance to the Sahtu people, and its place names come from the Shúhtaot’ine (Mountain Dene) dialect. Formally created in December 2014, it is one of Canada’s newest and wildest parks.',
    stats: [
      { value: '4,895 km²', label: 'Of mountain wilderness', level: 'blue' },
      { value: '2014', label: 'Park reserve created', level: 'gold' },
      { value: 'Few', label: 'Paddling groups per year', level: 'danger' },
      { value: '4', label: 'Iconic large mammals', level: 'olive' },
    ],
  },

  attractions: [
    {
      name: 'South Nahanni Headwaters',
      icon: '🛶',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The upper South Nahanni River — paddlers can start near Moose Ponds (Nááts’įhch’oh Tué). For experienced paddlers only.',
    },
    {
      name: 'Broken Skull River',
      icon: '🌊',
      tag: 'Paddling',
      tagLevel: 'blue',
      meta: 'Pı̨́ı̨́p’enéh łéetǫ́ǫ́ Deé — a popular river destination in the park.',
    },
    {
      name: 'Nááts’įhch’oh Mountain',
      icon: '🏔️',
      tag: 'Sacred Place',
      tagLevel: 'purple',
      meta: 'The mountain the park is named for — a significant place for the Sahtu people.',
    },
    {
      name: 'Packrafting',
      icon: '🎒',
      tag: 'Adventure',
      tagLevel: 'danger',
      meta: 'Combine hiking and packrafting across mountain valleys and rivers.',
    },
    {
      name: 'Mountain Wildlife',
      icon: '🐐',
      tag: 'Wildlife',
      tagLevel: 'safe',
      meta: 'Grizzly bears, Dall’s sheep, mountain goats, and woodland caribou.',
    },
    {
      name: 'Guided Trips',
      icon: '🧭',
      tag: 'Outfitters',
      tagLevel: 'olive',
      meta: 'Several outfitters offer guided canoe trips for those without expedition experience.',
    },
  ],

  wildlifeWarning:
    'Grizzly bears live throughout the park. Carry bear spray, store food properly, and keep a clean camp. This is remote mountain wilderness — rescue can take a long time, so be prepared and self-reliant.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Valleys' },
    { name: 'Dall’s Sheep', level: 'safe', chance: '★★★☆☆ Mountains' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★☆☆☆ Cliffs' },
    { name: 'Woodland Caribou', level: 'safe', chance: '★★☆☆☆ Uplands' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The paddling and hiking season. Only a few groups make canoe trips each year.',
      rating: 5,
      note: 'Paddling season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'The northern season ends quickly.',
      rating: 1,
      note: 'Season ends',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'October — April',
      level: 'caution',
      text: 'The park is open year-round, but winter here is long and severe.',
      rating: 1,
      note: 'Off season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Time to reserve, register, and arrange floatplane charters.',
      rating: 1,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'For Experienced Paddlers Only',
    text: 'Canoe trips in Nááts’įhch’oh are for experienced paddlers. Check reservation and registration requirements with Parks Canada, and read the Important Bulletins before you go.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nt/naatsihchoh',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore The Park' },
  trails: [
    { name: 'South Nahanni Canoe Trip', length: 'Multi-day', area: 'From the headwaters', difficulty: 'Expert', level: 'danger' },
    { name: 'Broken Skull River', length: 'Multi-day', area: 'River trip', difficulty: 'Expert', level: 'danger' },
    { name: 'Hiking & Packrafting', length: 'Off-trail', area: 'Mountain valleys', difficulty: 'Self-reliant', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🛩️',
      title: 'By Floatplane',
      text: 'Most visitors arrive by floatplane from nearby communities in the Northwest Territories and Yukon.',
      time: 'Fly-in only',
    },
    {
      icon: '🏘️',
      title: 'Tulita Office',
      text: 'The Parks Canada office for the park is in Tulita, NT.',
      time: '38 Bear Rock Drive',
    },
    {
      icon: '📋',
      title: 'Reserve & Register',
      text: 'Check Parks Canada’s reservation and registration requirements before your trip.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Plan With Parks Canada',
    text: 'Contact the Tulita office about reservations, registration, and fees.',
    buyText: 'Call 1-867-588-4884 or email the park office.',
    url: 'https://parks.canada.ca/pn-np/nt/naatsihchoh',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Wilderness Camping',
      text: 'Camp along the rivers on your paddling or hiking trip.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nt/naatsihchoh', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Office',
      lines: ['1-867-588-4884', 'Mon–Fri, 9–12 and 1–5', 'tulitainfo-infotulita@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '38 Bear Rock Drive, Tulita, NT X0E 0K0',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
    {
      icon: '🐻',
      title: 'Grizzly Country',
      text: 'Carry bear spray and store food properly.',
    },
    {
      icon: '🗺️',
      title: 'Dene Place Names',
      text: 'Place names in the park come from the Shúhtaot’ine (Mountain Dene) dialect.',
    },
    {
      icon: '🪶',
      title: 'Sahtu Land',
      text: 'The park lies within the Sahtu Settlement Area.',
    },
  ],

  gallery: [],
};

export default NAATSIHCHOH;
