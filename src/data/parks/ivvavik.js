// Ivvavik National Park — данные страницы /park/ivvavik
//
// Фото: по просьбе — снимок с карточки (/yt/parks/ivvavik.png). ВНИМАНИЕ:
// долина с густым высоким еловым лесом, широкой галечной рекой и
// заснеженными пиками; Ivvavik — в основном безлесная арктическая тундра
// (ели — лишь местами в долине Firth). Похоже скорее на горы южнее (Скалистые
// / юг Юкона). Не подтверждено — сказано пользователю. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Ivvavik (главная): «Ivvavik» на инувиалуктун — «место,
//   где рождаются, ясли»; первый нацпарк Канады, созданный по соглашению о
//   земельных претензиях коренного народа — Inuvialuit Final Agreement
//   (1984); охраняет часть мест отёла стада карибу Porcupine; Ivvavik Base
//   Camp — истории и культура хозяев-инувиалуитов; походы по открытой
//   местности; Firth River — река мирового класса для сплава; дроны
//   запрещены, штраф до $25,000; офис: 81 Kingmingya Street, Inuvik NT
//   X0E 0T0; infoinuvik-inuvikinfo@pc.gc.ca; офис открыт 6 мая — 13 сент.
// - Parks Canada, Base Camp / How to get there (через поиск): обязательный
//   инструктаж в Инувике, чартер Twin Otter над дельтой Маккензи и
//   Британскими горами; лагерь Imniarvik (Sheep Creek) — палатки,
//   кухня, ограждение от медведей; хозяин-инувиалуит и сотрудники Parks
//   Canada; поездки 4-5 дней в июне-июле; даты 2026 — не объявлены на
//   момент проверки.
// - Wikipedia: 10,168 км² (на карточке Юкона было 9,750 → исправлено);
//   до 1992 — Northern Yukon National Park; граничит с Vuntut на юге;
//   Британские горы переходят в хребет Брукса на Аляске; Firth River —
//   «одна из старейших рек Канады», начинается у наледей; сплав — конец
//   июня — начало августа; волки, гризли и чёрные медведи, лоси, толстороги
//   Далла (Sheep Creek — самая северная точка их ареала в Канаде), овцебыки,
//   росомахи, кречеты; мальма (Dolly Varden); ~200 км от Инувика, лучше
//   всего чартером; размеченных троп нет; 179 посетителей в 2022-23.
// - НЕ использовано: цены, телефон (на странице не указан), даты 2026.

const IMAGE = '/yt/parks/ivvavik.png';

export const IVVAVIK = {
  slug: 'ivvavik',
  name: 'Ivvavik National Park',
  shortName: 'Ivvavik',
  province: 'Yukon',
  tag: 'Arctic Nursery · Est. 1984',
  heroImage: IMAGE,
  heroCaption: 'Ivvavik National Park · YT',
  description:
    'Ivvavik means “a place for giving birth” in Inuvialuktun. In the far north of the Yukon, this roadless Arctic park protects calving grounds of the Porcupine caribou herd, the wild Firth River, and the British Mountains — reached only by charter plane from Inuvik.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1984' },
    { label: 'Area', value: '10,168 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Visitors', value: '179 In 2022–23' },
    { label: 'Marked Trails', value: 'None' },
    { label: 'Access', value: 'Charter Plane' },
  ],

  badges: ['Caribou Calving', 'Firth River', 'Inuvialuit Culture'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'A Land Claim Park',
    emoji: '🦌',
    title: 'The First Park Born From A Land Claim',
    text: 'In 1984, the Inuvialuit Final Agreement created Ivvavik — the first national park in Canada established through an Indigenous land claim agreement. The park protects part of the calving grounds of the Porcupine caribou herd, which gives it its name. Today Inuvialuit hosts welcome visitors at the park’s base camp and share the stories of this land.',
    stats: [
      { value: '1984', label: 'Inuvialuit Final Agreement', level: 'gold' },
      { value: '10,168 km²', label: 'Of Arctic wilderness', level: 'blue' },
      { value: '179', label: 'Visitors in 2022–23', level: 'danger' },
      { value: '0', label: 'Roads or marked trails', level: 'olive' },
    ],
  },

  attractions: [
    {
      name: 'Imniarvik Base Camp',
      icon: '⛺',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A Parks Canada camp at Sheep Creek with prospector tents, a camp kitchen, and a bear fence — with an Inuvialuit cultural host.',
    },
    {
      name: 'Firth River',
      icon: '🛶',
      tag: 'Whitewater',
      tagLevel: 'blue',
      meta: 'A world-class rafting river flowing north to the Beaufort Sea. The season runs from late June to early August.',
    },
    {
      name: 'Porcupine Caribou',
      icon: '🦌',
      tag: 'Wildlife',
      tagLevel: 'safe',
      meta: 'The park protects part of the herd’s calving grounds — the reason for the name Ivvavik.',
    },
    {
      name: 'British Mountains',
      icon: '⛰️',
      tag: 'Arctic Peaks',
      tagLevel: 'olive',
      meta: 'Open mountain terrain that stretches west into Alaska’s Brooks Range — ideal for off-trail Arctic hiking.',
    },
    {
      name: 'Dall Sheep At Sheep Creek',
      icon: '🐏',
      tag: 'Northern Limit',
      tagLevel: 'danger',
      meta: 'The northernmost Dall sheep habitat in Canada.',
    },
    {
      name: 'Inuvialuit Stories',
      icon: '🪶',
      tag: 'Culture',
      tagLevel: 'purple',
      meta: 'Hear stories and learn about Inuvialuit culture from hosts at the base camp.',
    },
  ],

  wildlifeWarning:
    'Grizzly bears, black bears, and wolves live in Ivvavik. You are far from help: travel in groups, carry bear spray, store food properly, and follow your guide or Parks Canada orientation. Help can take a long time to arrive in the Arctic.',
  wildlife: [
    { name: 'Caribou', level: 'safe', chance: '★★★☆☆ Calving season' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ River valleys' },
    { name: 'Dall Sheep', level: 'safe', chance: '★★★☆☆ Sheep Creek' },
    { name: 'Muskox', level: 'safe', chance: '★☆☆☆☆ Rare' },
    { name: 'Gyrfalcon', level: 'safe', chance: '★☆☆☆☆ Cliffs' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The only practical season. Base camp trips run in June and July; Firth River rafting from late June to early August. Midnight sun.',
      rating: 5,
      note: 'Visiting season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'A very short Arctic autumn. The Parks Canada office in Inuvik closes in mid-September.',
      rating: 1,
      note: 'Season ends',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'October — April',
      level: 'caution',
      text: 'Long Arctic winter. Winter travel is possible only for highly experienced, self-sufficient parties.',
      rating: 1,
      note: 'Experts only',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'The Inuvik office reopens in May. Snow and ice still cover much of the park.',
      rating: 2,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'No Marked Trails — Orientation Required',
    text: 'Ivvavik has no marked hiking trails. Visitors attend a mandatory orientation in Inuvik before flying in. Hike on open terrain with a guide or as a fully self-sufficient group.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/yt/ivvavik/activ/camp',
  trailsLinkLabel: 'Base Camp On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Ivvavik' },
  trails: [
    { name: 'Base Camp Trip', length: '4–5 days', time: 'June — July', area: 'Imniarvik (Sheep Creek)', difficulty: 'Guided', level: 'blue' },
    { name: 'Firth River Rafting', length: 'Multi-day', time: 'Late June — early August', area: 'To the Beaufort Sea', difficulty: 'Whitewater', level: 'danger' },
    { name: 'Independent Trip', length: 'Your own route', area: 'Charter from Inuvik', difficulty: 'Experienced', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'Fly To Inuvik',
      text: 'Inuvik, NT, is the gateway town and home of the Parks Canada office.',
      time: '81 Kingmingya Street',
    },
    {
      icon: '🛩️',
      title: 'Charter Into The Park',
      text: 'The park is about 200 km from Inuvik. A Twin Otter charter flies over the Mackenzie Delta and British Mountains to the base camp airstrip.',
      time: 'Included in base camp packages',
    },
    {
      icon: '📋',
      title: 'Orientation',
      text: 'All visitors attend a mandatory orientation in Inuvik before heading into the park.',
      time: 'Before your flight',
    },
  ],

  entryPass: {
    title: 'Fees & Base Camp',
    text: 'Park fees apply. Base camp packages include the charter flight; independent trips arrange their own.',
    buyText: 'Check Parks Canada for the 2026 base camp dates and booking.',
    url: 'https://parks.canada.ca/pn-np/yt/ivvavik/activ/camp',
  },

  stay: [
    {
      icon: '⛺',
      title: 'Imniarvik Base Camp',
      text: 'Furnished prospector tents, a camp kitchen, and a bear-proof fence at Sheep Creek.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/yt/ivvavik/activ/camp', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Inuvik, NT',
      text: 'Stay in Inuvik before and after your trip.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Inuvik', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📧',
      title: 'Contact',
      lines: ['infoinuvik-inuvikinfo@pc.gc.ca', 'Office: May 6 — Sept 13', 'Mon–Fri'],
    },
    {
      icon: '📍',
      title: 'Parks Canada Office',
      text: '81 Kingmingya Street, Inuvik, NT X0E 0T0',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
    {
      icon: '🐻',
      title: 'Bear Country',
      text: 'Grizzly and black bears live here. Carry bear spray and store food properly.',
    },
    {
      icon: '🎣',
      title: 'Fishing',
      text: 'A park fishing permit is required. Strict limits protect the Firth River’s Dolly Varden char.',
    },
    {
      icon: '🏺',
      title: 'Cultural Sites',
      text: 'Do not camp at archaeological sites — many remain important to local Indigenous people.',
    },
  ],

  gallery: [],
};

export default IVVAVIK;
