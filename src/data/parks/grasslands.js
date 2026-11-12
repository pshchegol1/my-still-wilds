// Grasslands National Park — данные страницы /park/grasslands
//
// Фото: по просьбе — снимок с карточки (/sk/parks/grasslands.png): бизоны
// лежат в сухой прерии — похоже на стадо Grasslands (по виду, точное место
// не подтверждено). По краям снимка — белые пятна-артефакты. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Grasslands (главная): юг Саскачевана; окаменелости
//   динозавров, граница массового вымирания, очаги, кольца типи,
//   загонные линии для бизонов, остатки погребов; тропа 70 Mile Butte и
//   Ecotour Scenic Drive (West Block); кемпинг Rock Creek (East Block),
//   oTENTik; открыт круглый год, часть услуг только летом; запрет костров
//   (на момент проверки); дроны запрещены; PO Box 150, Val Marie SK
//   S0N 2T0; Visitor Centre 1-877-345-2257; Rock Creek 1-306-750-0937;
//   infopnprairies-grasslandsnpinfo@pc.gc.ca; ЧП 1-877-852-3100.
// - Parks Canada, Hiking: Badlands Parkway (East Block) — 11 км по краю
//   бэдлендов; можно ходить без троп по бэккантри.
// - Parks Canada, Safety: дикая прерия, мало услуг; опасности — бизоны,
//   гремучие змеи, степные пожары, грозы; вся поверхностная вода солёная
//   и непригодна для питья — свою воду везти; правило: если животное
//   сдвинулось из-за вас — вы слишком близко; признаки агрессии бизона —
//   трясёт головой, короткие броски, громко фыркает.
// - Wikipedia: основан в 1981; 907 км² (на общей карточке 731 → взяли 907,
//   как в sk.js); два участка — West Block (~1 ч к югу от Swift Current,
//   центр в Val Marie) и East Block (~1 ч к югу от Assiniboia); долина
//   Frenchman River; смешанная и низкотравная прерия; бизоны, вилорогая
//   антилопа, шалфейный тетерев, кроличий сыч, лисица-корсак, черноногий
//   хорёк, гремучая змея; единственные в Канаде колонии чернохвостых
//   луговых собачек; бизоны возвращены в 2006 из Elk Island — с 71 до 300+
//   к 2015; dark-sky preserve с 2 окт. 2009; 1874 — первые в Западной
//   Канаде останки динозавров (Killdeer Badlands); 1877 — Сидящий Бык и
//   ~5000 сиу укрылись здесь после Литтл-Бигхорна; Frenchman Valley
//   Campground — типи, бэккантри; Valley of 1000 Devils в East Block.
// - Komoot / статьи (сторонние) — длины троп со знаком "~": 70 Mile Butte
//   ~4.2 км, Two Trees ~3.9 км, Valley of 1000 Devils ~11-12 км (источники
//   расходятся).
// - НЕ использовано: точная дистанция до бизонов в метрах (не найдена),
//   «самое тёмное небо в Канаде».

const IMAGE = '/sk/parks/grasslands.png';

export const GRASSLANDS = {
  slug: 'grasslands',
  name: 'Grasslands National Park',
  shortName: 'Grasslands',
  province: 'Saskatchewan',
  tag: 'Wild Prairie & Dark Skies · Est. 1981',
  heroImage: IMAGE,
  heroCaption: 'Grasslands National Park · SK',
  description:
    'One of the last wild stretches of native prairie in Canada. Watch bison and prairie dogs, walk the badlands where Western Canada’s first dinosaur bones were found, and sleep under the stars of a dark-sky preserve.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1981' },
    { label: 'Area', value: '907 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Dark Sky', value: 'Since 2009' },
    { label: 'Bison', value: 'Back Since 2006' },
    { label: 'Two Blocks', value: 'West & East' },
  ],

  badges: ['Bison', 'Prairie Dogs', 'Dark-Sky Preserve'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Living Prairie',
    emoji: '🦬',
    title: 'The Prairie As It Used To Be',
    text: 'Grasslands protects mixed-grass and shortgrass prairie along the Montana border — a landscape that has almost vanished elsewhere. Plains bison returned in 2006, the only black-tailed prairie dog colonies in Canada live here, and black-footed ferrets have been brought back after 70 years. History runs deep too: tipi rings, bison drive lanes, and the Killdeer Badlands, where the first dinosaur remains in Western Canada were found in 1874.',
    stats: [
      { value: '2006', label: 'Bison reintroduced', level: 'gold' },
      { value: '300+', label: 'Bison by 2015', level: 'danger' },
      { value: '1874', label: 'First dinosaur find in W. Canada', level: 'olive' },
      { value: '2009', label: 'Dark-sky preserve', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Prairie Dog Towns',
      icon: '🐿️',
      tag: 'Only In Canada',
      tagLevel: 'gold',
      meta: 'The only black-tailed prairie dog colonies in Canada live in and around the park — watch them pop up from their burrows.',
    },
    {
      name: 'Ecotour Scenic Drive',
      icon: '🚗',
      tag: 'West Block',
      tagLevel: 'blue',
      meta: 'A self-guided drive through the West Block’s landscapes, history, and conservation stories.',
    },
    {
      name: '70 Mile Butte',
      icon: '⛰️',
      tag: 'Sunset Hike',
      tagLevel: 'danger',
      meta: 'A favourite West Block hike to a high butte above the open prairie — popular at sunset.',
    },
    {
      name: 'Badlands Parkway',
      icon: '🏜️',
      tag: 'East Block',
      tagLevel: 'olive',
      meta: 'An 11 km scenic drive along the rim of the East Block badlands.',
    },
    {
      name: 'Dark-Sky Preserve',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'Designated in 2009 — the Milky Way stretches from horizon to horizon over the open prairie.',
    },
    {
      name: 'Tipi Rings & Fossils',
      icon: '🦕',
      tag: 'Deep History',
      tagLevel: 'safe',
      meta: 'Dinosaur fossils, the mass-extinction boundary, tipi rings, and bison drive lanes — look, but leave everything in place.',
    },
  ],

  wildlifeWarning:
    'Bison are wild and unpredictable. If an animal moves because of you, you are too close. Watch for warning signs — head shaking, short charges, loud snorting — and back away. Prairie rattlesnakes live here: watch your step, and wear long pants or snake gaiters.',
  wildlife: [
    { name: 'Plains Bison', level: 'danger', chance: '★★★★☆ West Block' },
    { name: 'Prairie Dog', level: 'safe', chance: '★★★★★ Colonies' },
    { name: 'Pronghorn', level: 'safe', chance: '★★★☆☆ Open prairie' },
    { name: 'Prairie Rattlesnake', level: 'danger', chance: '★★☆☆☆ Watch your step' },
    { name: 'Burrowing Owl', level: 'safe', chance: '★☆☆☆☆ Rare, at risk' },
  ],

  seasons: [
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — June',
      level: 'olive',
      text: 'Green prairie and wildflowers. Weather can change fast — storms roll in over the open plains.',
      rating: 4,
      note: 'Green prairie',
    },
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'Hot and dry with little shade. Hike early or late, carry lots of water, and check for fire bans.',
      rating: 4,
      note: 'Hot & dry',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Golden grass, cooler hiking weather, and long, dark nights for stargazing.',
      rating: 5,
      note: 'Best hiking',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'The park is open year-round, but services are limited. Know your options before exploring the snowy prairie.',
      rating: 2,
      note: 'Limited services',
    },
  ],

  trailsNote: {
    title: 'Bring All Your Water',
    text: 'All surface water in the park — ponds, creeks, and rivers — is generally salty and unfit to drink. Carry plenty of your own. This is a prairie wilderness with few services: watch for bison, rattlesnakes, wildfires, and storms.',
  },

  trailsUrl: 'https://www.parks.canada.ca/pn-np/sk/grasslands/activ/experiences/randonee-hiking',
  trailsLinkLabel: 'Hiking On Parks Canada',
  trails: [
    { name: '70 Mile Butte', length: '~4.2 km', area: 'West Block', difficulty: 'Easy' },
    { name: 'Two Trees', length: '~3.9 km', area: 'West Block', difficulty: 'Easy' },
    { name: 'Badlands Parkway', length: '11 km drive', area: 'East Block', difficulty: 'Scenic drive', level: 'blue' },
    { name: 'Valley of 1000 Devils', length: '~11–12 km', area: 'East Block', difficulty: 'Hard' },
    { name: 'Backcountry', length: 'Your own route', area: 'Both blocks', difficulty: 'Experienced', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'West Block',
      text: 'About an hour south of Swift Current. The main Visitor Centre is in the village of Val Marie.',
      time: '~1 h from Swift Current',
    },
    {
      icon: '🚙',
      title: 'East Block',
      text: 'About an hour south of Assiniboia, in the Wood Mountain Hills — wilder and more remote.',
      time: '~1 h from Assiniboia',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Regina to Grasslands route for the drive across southern Saskatchewan.',
      time: 'Weekend trip',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Reserve campsites and oTENTiks through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Frenchman Valley Campground',
      text: 'West Block campground with serviced sites, tipi camping, and a cook shelter.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Rock Creek Campground',
      text: 'East Block campground near the badlands, with its own phone line: 1-306-750-0937.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🎒',
      title: 'Backcountry Camping',
      text: 'Pick your own spot on the open prairie — for well-prepared, self-sufficient campers.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/sk/grasslands', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'In the park:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Visitor Centre',
      lines: ['1-877-345-2257', 'Rock Creek: 1-306-750-0937'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'PO Box 150, Val Marie, SK S0N 2T0',
    },
    {
      icon: '💧',
      title: 'No Drinking Water',
      text: 'Surface water is salty and unsafe. Carry all the water you need.',
    },
    {
      icon: '🔥',
      title: 'Fire Bans',
      text: 'Fire bans can cover both blocks, including campgrounds. Check bulletins before you go.',
    },
    {
      icon: '🚫',
      title: 'No Drones',
      text: 'Recreational drones are prohibited in all Parks Canada places.',
    },
  ],

  gallery: [],
};

export default GRASSLANDS;
