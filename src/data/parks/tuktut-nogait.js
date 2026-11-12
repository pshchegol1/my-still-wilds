// Tuktut Nogait National Park — данные страницы /park/tuktut-nogait
//
// Фото: по просьбе — снимок с карточки (/nt/parks/tuktut-nogait.png).
// ВНИМАНИЕ: ели и высокие заснеженные горы на фоне; Tuktut Nogait — это
// безлесная арктическая тундра с пологими холмами и каньонами, высоких
// снежных хребтов там нет. Похоже на горы южнее. Не подтверждено — сказано
// пользователю. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Tuktut Nogait (главная): 18,890 км², ~170 км к северу от
//   Полярного круга; пологие холмы, три большие реки, крутые каньоны,
//   водопады, карибу; «один из самых изолированных парков Северной
//   Америки»; открыт с ограничениями — походы и сплав запрещены в каньонах
//   Hornaday ниже озера Uyarsivik, включая La Roncière Falls; всем нужен
//   permit и регистрация; некоммерческим группам — минимум 2 лодки,
//   спутниковая связь; спасатели в Инувике — зависят от погоды и самолётов;
//   дроны запрещены (до $25,000); PO Box 91, Paulatuk NT X0E 1N0;
//   867-580-3233; infoinuvik-inuvikinfo@pc.gc.ca.
// - Parks Canada (через поиск): La Roncière Falls — 21 м (другие сайты
//   пишут 23 м → взяли 21 м Parks Canada).
// - Wikipedia / Canadian Encyclopedia: основан в 1998 (на карточках было
//   1996 → исправлено) благодаря инуитам Паулатука; «tuktut nogait» на
//   инувиалуктун — «молодые карибу»; места отёла стада Bluenose-West;
//   реки Hornaday, Brock, Roscoe; в каньонах гнездятся сапсаны, зимняки,
//   кречеты, беркуты; >400 археологических мест — стоянки, тайники, могилы,
//   опоры для каяков; овцебыки, гризли, голец, росомахи, волки; 12
//   посетителей в 2022-23.
// - Площадь: на карточках 16,340, Wikipedia 18,100, Parks Canada 18,890 →
//   взяли Parks Canada.
// - НЕ использовано: даты сезона, расстояние до Инувика, цены.

const IMAGE = '/nt/parks/tuktut-nogait.png';

export const TUKTUT_NOGAIT = {
  slug: 'tuktut-nogait',
  name: 'Tuktut Nogait National Park',
  shortName: 'Tuktut Nogait',
  province: 'Northwest Territories',
  tag: 'Young Caribou · Est. 1998',
  heroImage: IMAGE,
  heroCaption: 'Tuktut Nogait National Park · NT',
  description:
    'Tuktut Nogait means “young caribou” in Inuvialuktun. North of the Arctic Circle, rolling tundra, deep river canyons, and waterfalls shelter the calving grounds of the Bluenose-West caribou herd — in one of the most isolated parks in North America.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1998' },
    { label: 'Area', value: '18,890 km²' },
    { label: 'Rating', value: '4.4 ★' },
    { label: 'Visitors', value: '12 In 2022–23' },
    { label: 'Archaeological Sites', value: '400+' },
    { label: 'Arctic Circle', value: '~170 km North' },
  ],

  badges: ['Caribou Calving', 'River Canyons', 'Remote Arctic'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
  ],

  spotlight: {
    tag: 'Caribou Nursery',
    emoji: '🦌',
    title: 'Where The Bluenose-West Caribou Give Birth',
    text: 'The park protects the calving grounds of the Bluenose-West caribou herd. Created in 1998 through the efforts of the Inuit of Paulatuk, it also holds more than 400 archaeological sites — old campsites, food caches, graves, and kayak rests. Along the canyons of the Hornaday, Brock, and Roscoe rivers, falcons and eagles nest on steep rock walls.',
    stats: [
      { value: '12', label: 'Visitors in 2022–23', level: 'danger' },
      { value: '400+', label: 'Archaeological sites', level: 'purple' },
      { value: '21 m', label: 'La Roncière Falls', level: 'blue' },
      { value: '3', label: 'Major rivers', level: 'gold' },
    ],
  },

  attractions: [
    {
      name: 'Bluenose-West Caribou',
      icon: '🦌',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The park’s name means “young caribou” — it protects the herd’s calving grounds.',
    },
    {
      name: 'Hornaday River',
      icon: '🛶',
      tag: 'Paddling',
      tagLevel: 'blue',
      meta: 'One of three major rivers flowing through steep canyons. Some canyon sections are closed to visitors.',
    },
    {
      name: 'La Roncière Falls',
      icon: '💧',
      tag: 'Closed Area',
      tagLevel: 'danger',
      meta: 'A 21 m waterfall on the Hornaday River. The canyons around it are currently closed to hiking and paddling.',
    },
    {
      name: 'Canyon Raptors',
      icon: '🦅',
      tag: 'Birds',
      tagLevel: 'olive',
      meta: 'Peregrine falcons, gyrfalcons, rough-legged hawks, and golden eagles nest on the canyon walls.',
    },
    {
      name: 'Ancient Sites',
      icon: '🏺',
      tag: 'Heritage',
      tagLevel: 'purple',
      meta: 'More than 400 archaeological sites — leave everything exactly as you find it.',
    },
    {
      name: 'Rolling Tundra',
      icon: '🌿',
      tag: 'Hiking',
      tagLevel: 'safe',
      meta: 'Open hills and river valleys for off-trail Arctic hiking, outside the closed canyon areas.',
    },
  ],

  wildlifeWarning:
    'Grizzly bears and wolves live in Tuktut Nogait. This is one of the most isolated parks in North America — rescue depends on weather, aircraft, and staff and may take a long time. Be fully self-reliant and capable of handling emergencies.',
  wildlife: [
    { name: 'Caribou', level: 'safe', chance: '★★★☆☆ Calving grounds' },
    { name: 'Muskox', level: 'caution', chance: '★★★☆☆ Tundra' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ River valleys' },
    { name: 'Wolverine', level: 'caution', chance: '★☆☆☆☆ Rare' },
    { name: 'Peregrine Falcon', level: 'safe', chance: '★★☆☆☆ Canyons' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'The short Arctic summer — the only practical time to paddle and hike, under the midnight sun.',
      rating: 5,
      note: 'Only season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'Freeze-up comes early this far north.',
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
      text: 'Snowmelt and caribou calving. Register, get your permit, and arrange flights in advance.',
      rating: 1,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'Some Canyons Are Closed',
    text: 'Hiking and paddling are prohibited in the Hornaday River canyons downstream from Uyarsivik Lake, including around La Roncière Falls. All visitors need a Parks Canada permit and must register before entering.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nt/tuktutnogait',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Tuktut Nogait' },
  trails: [
    { name: 'River Paddling', length: 'Multi-day', area: 'Outside closed canyons', difficulty: 'Self-reliant', level: 'caution' },
    { name: 'Tundra Hiking', length: 'Off-trail', area: 'Hills & river valleys', difficulty: 'Self-reliant', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🛩️',
      title: 'By Air',
      text: 'The park is reached by air. Plan your flight with Parks Canada and licensed air operators.',
      time: 'Fly-in only',
    },
    {
      icon: '🏘️',
      title: 'Paulatuk',
      text: 'The nearest community and home of the park office.',
      time: 'PO Box 91, Paulatuk',
    },
    {
      icon: '📋',
      title: 'Register First',
      text: 'Get a Parks Canada permit and register before entering. Paddling groups must submit contact numbers and carry a satellite device.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Permit & Registration Required',
    text: 'All paddlers and hikers must get a Parks Canada permit and register before entering the park.',
    buyText: 'Contact the Paulatuk office to plan your trip.',
    url: 'https://parks.canada.ca/pn-np/nt/tuktutnogait',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Wilderness Camping',
      text: 'Camp on the tundra — there are no facilities in the park.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nt/tuktutnogait', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Office',
      lines: ['867-580-3233', 'infoinuvik-inuvikinfo@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'PO Box 91, Paulatuk, NT X0E 1N0',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
    {
      icon: '📡',
      title: 'Satellite Device',
      text: 'Paddling parties must carry a communication device such as an inReach.',
    },
    {
      icon: '🛶',
      title: 'Two Boats',
      text: 'Parks Canada strongly recommends at least two watercraft per paddling party.',
    },
    {
      icon: '🏺',
      title: 'Leave It Be',
      text: 'Don’t disturb archaeological sites — they are part of Inuvialuit heritage.',
    },
  ],

  gallery: [],
};

export default TUKTUT_NOGAIT;
