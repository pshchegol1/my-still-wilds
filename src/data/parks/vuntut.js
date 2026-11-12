// Vuntut National Park — данные страницы /park/vuntut
//
// Фото: по просьбе — снимок с карточки (/yt/parks/vuntut.png): осенняя
// тундра с жёлтыми кустарниками, озерцо, полоса елей и округлые горы —
// северный Юкон похож, но по снимку место не определить (подобные виды
// типичны и для Tombstone у Dempster Hwy). Не подтверждено. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Vuntut (главная): удалённая нетронутая арктическая
//   глушь, история первых наций за тысячелетия; одна из великих миграций
//   животных планеты — стадо карибу Porcupine, одно из крупнейших в
//   Северной Америке, центр культуры вунтут-гвичин; ~50 км по воздуху или
//   190 км по реке к северу от Old Crow; John Tizya Centre в Old Crow —
//   выставки, записи рассказов старейшин, орудия, карибу и ледниковая
//   Берингия; Old Crow Flats — мелкие озёра и ручьи, важны для охоты
//   вунтут-гвичин; нужна полная самостоятельность; 867-966-3622 (пн-пт
//   8:30-17:00 PST); pc.vuntutinfo.pc@canada.ca; Box 19, Old Crow YT Y0B 1N0;
//   кооперативное управление.
// - Wikipedia: основан в 1995 по Vuntut Gwitchin First Nation Final
//   Agreement; 4,345 км²; «vuntut» на гвичин — «среди озёр»; меньше 25
//   посетителей в год; летом — самолёт или лодка, зимой — самолёт или
//   по земле; лучшее время — июнь-август, открыт круглый год; никаких
//   объектов и троп; разрешение на бэккантри и кемпинг обязательно;
//   спортивная рыбалка запрещена; карибу, лисы, сапсаны, лоси, гризли и
//   чёрные медведи, волки, росомахи, кречеты, овцебыки, беркуты, рыси;
//   граничит с Ivvavik, через границу — Arctic National Wildlife Refuge.
// - НЕ использовано: Рамсарский статус Old Crow Flats, окаменелости,
//   расписание авиарейсов в Old Crow, цены.

const IMAGE = '/yt/parks/vuntut.png';

export const VUNTUT = {
  slug: 'vuntut',
  name: 'Vuntut National Park',
  shortName: 'Vuntut',
  province: 'Yukon',
  tag: 'Among The Lakes · Est. 1995',
  heroImage: IMAGE,
  heroCaption: 'Vuntut National Park · YT',
  description:
    'Vuntut means “among the lakes” in Gwich’in. One of Canada’s least-visited parks, it protects Arctic wilderness on the path of the Porcupine caribou migration — land the Vuntut Gwitchin have lived on for countless generations. No roads, no trails, no facilities.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1995' },
    { label: 'Area', value: '4,345 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Visitors', value: 'Under 25 / Year' },
    { label: 'From Old Crow', value: '~50 km By Air' },
    { label: 'Facilities', value: 'None' },
  ],

  badges: ['Caribou Migration', 'Gwich’in Culture', 'True Wilderness'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'People Of The Lakes',
    emoji: '🦌',
    title: 'The Caribou And The Vuntut Gwitchin',
    text: 'The Porcupine caribou herd — one of the largest in North America — travels through this land on one of the planet’s great animal migrations. For the Vuntut Gwitchin of Old Crow, the herd is at the heart of their culture and way of life. The park was created in 1995 through the Vuntut Gwitchin First Nation Final Agreement and is managed cooperatively.',
    stats: [
      { value: '<25', label: 'Visitors per year', level: 'danger' },
      { value: '1995', label: 'Vuntut Gwitchin Agreement', level: 'gold' },
      { value: '4,345 km²', label: 'Of Arctic wilderness', level: 'blue' },
      { value: '0', label: 'Roads, trails, or facilities', level: 'olive' },
    ],
  },

  attractions: [
    {
      name: 'Porcupine Caribou',
      icon: '🦌',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'One of North America’s largest caribou herds migrates through the region.',
    },
    {
      name: 'Old Crow Flats',
      icon: '💧',
      tag: 'Wetlands',
      tagLevel: 'blue',
      meta: 'A vast wetland of shallow lakes and small streams, vital to the Vuntut Gwitchin for hunting and traditional practices.',
    },
    {
      name: 'John Tizya Centre',
      icon: '🏛️',
      tag: 'In Old Crow',
      tagLevel: 'purple',
      meta: 'Exhibits, recordings of elders’ stories, traditional tools, and the story of the caribou and ice-age Beringia.',
    },
    {
      name: 'Old Crow Community',
      icon: '🏘️',
      tag: 'Gateway',
      tagLevel: 'safe',
      meta: 'Home of the Vuntut Gwitchin First Nation and the Parks Canada office — the starting point for any visit.',
    },
    {
      name: 'Arctic Wilderness',
      icon: '🏕️',
      tag: 'Self-Reliant',
      tagLevel: 'danger',
      meta: 'No trails or facilities — only for travellers with the skills and gear to go fully self-sufficient.',
    },
    {
      name: 'Arctic Wildlife',
      icon: '🦅',
      tag: 'Wildlife',
      tagLevel: 'olive',
      meta: 'Grizzly bears, wolves, wolverines, muskoxen, golden eagles, and gyrfalcons.',
    },
  ],

  wildlifeWarning:
    'Grizzly bears, black bears, and wolves live here, and help is very far away. Vuntut is remote Arctic wilderness: you must be fully self-reliant, with the equipment and skills to travel safely on your own.',
  wildlife: [
    { name: 'Caribou', level: 'safe', chance: '★★★☆☆ Migration' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Tundra' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Wetlands' },
    { name: 'Wolverine', level: 'caution', chance: '★☆☆☆☆ Rare' },
    { name: 'Golden Eagle', level: 'safe', chance: '★★☆☆☆ Mountains' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The best time to visit. Access by air or by boat on the river from Old Crow.',
      rating: 5,
      note: 'Best time',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'A short Arctic autumn of golden tundra. Weather turns quickly.',
      rating: 2,
      note: 'Short season',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'October — April',
      level: 'caution',
      text: 'The park is open year-round. Winter access is by air or over land — for experienced Arctic travellers only.',
      rating: 1,
      note: 'Experts only',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Breakup season on the rivers. Plan your trip with the Parks Canada office in Old Crow.',
      rating: 2,
      note: 'Planning time',
    },
  ],

  trailsNote: {
    title: 'No Trails — Permit Required',
    text: 'Vuntut has no developed trails or facilities. A permit is required for backcountry travel and camping, and sport fishing is not allowed. Contact the Parks Canada office in Old Crow before planning a trip.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/yt/vuntut',
  trailsLinkLabel: 'Plan Your Visit On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Reach Vuntut' },
  trails: [
    { name: 'By Air', length: '~50 km', area: 'From Old Crow', difficulty: 'Charter', level: 'blue' },
    { name: 'By River', length: '~190 km', time: 'Summer', area: 'From Old Crow', difficulty: 'Expert', level: 'danger' },
    { name: 'Over Land', length: 'Winter only', area: 'From Old Crow', difficulty: 'Expert', level: 'danger' },
  ],

  gettingThere: [
    {
      icon: '🏘️',
      title: 'Start In Old Crow',
      text: 'Old Crow, Yukon, is the nearest community and home of the park office and John Tizya Centre.',
      time: 'Box 19, Old Crow',
    },
    {
      icon: '🛩️',
      title: 'By Air',
      text: 'About 50 km north of Old Crow by air — the most direct way in, in summer or winter.',
      time: '~50 km',
    },
    {
      icon: '🛶',
      title: 'By River',
      text: 'About 190 km by river from Old Crow in summer — for skilled, self-sufficient paddlers.',
      time: '~190 km',
    },
  ],

  entryPass: {
    title: 'Permit Required',
    text: 'A permit is required for backcountry travel and camping in the park. Sport fishing is not allowed.',
    buyText: 'Contact the Parks Canada office in Old Crow to arrange your permit.',
    url: 'https://parks.canada.ca/pn-np/yt/vuntut',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'Wilderness camping only, with a permit. There are no facilities in the park.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/yt/vuntut', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Old Crow, YT',
      text: 'Plan your stay in the community before and after your trip — contact the park office for advice.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/yt/vuntut', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Office',
      lines: ['867-966-3622', 'Mon–Fri, 8:30–5:00 PST', 'pc.vuntutinfo.pc@canada.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'Box 19, Old Crow, YT Y0B 1N0',
    },
    {
      icon: '🏛️',
      title: 'John Tizya Centre',
      text: 'Mon–Fri, 9:00–12:00 and 1:00–4:30, in Old Crow.',
    },
    {
      icon: '🎣',
      title: 'No Sport Fishing',
      text: 'Sport fishing is not permitted in Vuntut National Park.',
    },
    {
      icon: '🧭',
      title: 'Self-Reliance',
      text: 'Bring the equipment and skills to travel safely in an isolated Arctic environment.',
    },
    {
      icon: '🪶',
      title: 'Vuntut Gwitchin Land',
      text: 'The park is managed cooperatively with the Vuntut Gwitchin First Nation.',
    },
  ],

  gallery: [],
};

export default VUNTUT;
