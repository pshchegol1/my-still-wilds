// Wood Buffalo National Park — данные страницы /park/wood-buffalo
//
// Фото: по просьбе — снимок с карточки (/ab/parks/Wood Buffalo.png): два
// бизона в сухой траве. По виду это могут быть и равнинные бизоны (место
// съёмки не подтверждено). Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Wood Buffalo (главная): на границе Альберты и NWT;
//   крупнейший национальный парк Канады; бореальные равнины, крупнейшие в
//   мире стада лесных бизонов, важное место журавлей-кликунов, карст и
//   пещеры, дельта Peace-Athabasca; традиционная территория дене, кри и
//   метисов; крупнейший в мире заповедник тёмного неба (лучше всего с
//   осени до весны); открыт круглый год, услуги май — октябрь; Fort Smith
//   Visitor Centre 867-872-7960; Fort Chipewyan 780-697-3662; закрытия
//   после пожаров 2023 года; дроны запрещены (штраф до $25,000).
// - Wikipedia: основан в 1922; 44,741 км² (на карточке было 44,807 —
//   исправлено на цифру Wikipedia); второй по
//   величине нацпарк мира; ЮНЕСКО 1983; тёмное небо — 28 июня 2013 (RASC);
//   ~3,000 лесных бизонов (гибридизированы с равнинными); одно из двух
//   известных мест гнездования журавля-кликуна; самая длинная бобровая
//   плотина в мире ~850 м, найдена в 2007 по спутниковым снимкам; Neon Lake
//   Springs; Peace-Athabasca — одна из крупнейших пресноводных дельт мира;
//   Рамсарское угодье; дорога круглый год до Fort Smith (Mackenzie Hwy →
//   Hwy 5 у Hay River); рейсы из Edmonton в Fort Smith и Fort Chipewyan;
//   зимняя ледовая дорога из Fort McMurray через Fort Chipewyan.
// - Parks Canada, Hiking: Salt Plains Access 350 м в одну сторону, крутой
//   спуск; Salt River Meadows 2.2 км петля; Karstland — закрыт (обвал
//   карстовой воронки); Grosbeak, Salt Pan, Benchmark, Lane Lake —
//   закрыты; Lakeside — частично (до Kettle Point); Rainbow Lake 12 км т/о.
// - Parks Canada brochure: Salt Plains — 370 км².
// - Parks Canada, Camping: Pine Lake — 60 км к югу от Fort Smith, на
//   берегу карстового озера; с выходных Victoria Day до 30 сентября;
//   пляж, кухонный навес, площадка; вода не питьевая; есть домики
//   (число в источниках расходится → без числа).
// - Журавли-кликуны: ~540 птиц зимой 2025-26 (USFWS) — см. whooping-crane.js.
// - НЕ использовано: число посетителей как "факт" (2,399 в 2022-23 есть в
//   Wikipedia, но не указываю), фестиваль тёмного неба (не подтверждён).

const IMAGE = '/ab/parks/Wood Buffalo.png';

export const WOOD_BUFFALO = {
  slug: 'wood-buffalo',
  name: 'Wood Buffalo National Park',
  shortName: 'Wood Buffalo',
  province: 'Alberta · NWT',
  tag: 'UNESCO World Heritage · Est. 1922',
  heroImage: IMAGE,
  heroCaption: 'Wood Buffalo National Park · AB / NWT',
  description:
    'Canada’s largest national park — bigger than Switzerland. Created in 1922 to save the last wood bison, it protects the world’s largest wood bison herds, the nesting grounds of the last natural wild whooping crane flock, vast salt plains, and the world’s largest Dark Sky Preserve.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1922' },
    { label: 'Area', value: '44,741 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Wood Bison', value: '~3,000' },
    { label: 'UNESCO', value: '★ 1983' },
    { label: 'Dark Sky', value: 'World’s Largest' },
  ],

  badges: ['Largest In Canada', 'Wood Bison', 'Dark Sky Preserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌌', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'A Park Of Records',
    emoji: '🦬',
    title: 'Bison, Cranes, And A World Of Dark Sky',
    text: 'Wood Buffalo is the second-largest national park in the world. It was created to protect the last wood bison and now holds about 3,000 of them. It is one of only two places on Earth where whooping cranes have been known to nest, and its Peace-Athabasca Delta is one of the largest freshwater deltas in the world. In 2013 it became the world’s largest Dark Sky Preserve — and in 2007, satellite images revealed the world’s longest beaver dam here, about 850 m long.',
    stats: [
      { value: '44,741 km²', label: 'Largest park in Canada', level: 'gold' },
      { value: '~3,000', label: 'Wood bison', level: 'danger' },
      { value: '~850 m', label: 'Longest beaver dam', level: 'blue' },
      { value: '2013', label: 'Dark Sky Preserve', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Salt Plains',
      icon: '🧂',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A vast 370 km² salt plain. From the viewpoint, a short, steep trail leads down the escarpment onto the flats.',
    },
    {
      name: 'Wood Bison',
      icon: '🦬',
      tag: 'Wildlife',
      tagLevel: 'danger',
      meta: 'The largest wood bison herds in the world. Watch from your vehicle and give them plenty of room.',
    },
    {
      name: 'Pine Lake',
      icon: '🏝️',
      tag: 'Swim & Camp',
      tagLevel: 'blue',
      meta: 'A sinkhole lake with a sandy beach and the park’s campground — 60 km south of Fort Smith.',
    },
    {
      name: 'Dark Sky',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'The world’s largest Dark Sky Preserve. Best from fall through spring — with a chance of northern lights.',
    },
    {
      name: 'Peace-Athabasca Delta',
      icon: '🦆',
      tag: 'Wetlands',
      tagLevel: 'safe',
      meta: 'One of the largest freshwater deltas on Earth — a vital stop for waterbirds. Reached from Fort Chipewyan.',
    },
    {
      name: 'Karst & Sinkholes',
      icon: '🕳️',
      tag: 'Geology',
      tagLevel: 'olive',
      meta: 'Karst country of sinkholes and caves around the Salt River. Stay on open trails — a sinkhole collapse closed the Karstland loop.',
    },
  ],

  wildlifeWarning:
    'Bison are huge, fast, and unpredictable — stay in your vehicle or keep a large distance. Keep at least 100 m from bears. Never approach or disturb whooping cranes — access to their nesting area is controlled.',
  wildlife: [
    { name: 'Wood Bison', level: 'caution', chance: '★★★★☆ Roadsides and meadows' },
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Forests and roads' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★☆☆☆ Forests and meadows' },
    { name: 'Whooping Crane', level: 'caution', chance: '★☆☆☆☆ Controlled nesting area' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Wetlands' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Visitor services and Pine Lake Campground are open. Long days for bison watching and the Salt Plains. Some trails remain closed after the 2023 wildfires — check bulletins.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Dark skies return and the northern lights may appear. Pine Lake Campground closes September 30; visitor services end in October.',
      rating: 4,
      note: 'Dark skies',
    },
    {
      icon: '🌌',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'The park stays open year-round. Long, cold nights under the world’s largest Dark Sky Preserve. A winter ice road reaches Fort Chipewyan.',
      rating: 3,
      note: 'Stargazing',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Whooping cranes fly back north to nest. Pine Lake Campground opens on the Victoria Day weekend in May.',
      rating: 3,
      note: 'Season opens',
    },
  ],

  trailsNote: {
    title: 'Many Trails Closed After The 2023 Fires',
    text: 'Grosbeak Lake, Salt Pan Lake, Benchmark Creek, and Lane Lake are closed, and the Karstland loop is closed after a sinkhole collapsed. Always check Parks Canada bulletins before you go.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nt/woodbuffalo/activ/randonnee-hiking',
  trailsLinkLabel: 'Trail Status On Parks Canada',
  trails: [
    { name: 'Salt Plains Access', length: '350 m one way', gain: 'Steep descent', area: 'Salt Plains Viewpoint', difficulty: 'Moderate' },
    { name: 'Salt River Meadows', length: '2.2 km loop', gain: 'Stream crossings', area: 'Salt River Day Use Area', difficulty: 'Moderate' },
    { name: 'Lakeside Trail', length: '3.1 km one way', time: 'Partially closed', area: 'Pine Lake', difficulty: 'Moderate' },
    { name: 'Rainbow Lake', length: '12 km return', area: 'Salt River Day Use Area', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Commercial flights connect Edmonton with Fort Smith and Fort Chipewyan, the two gateway communities.',
      time: 'Fort Smith — the main gateway',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Year-round road access to Fort Smith via the Mackenzie Highway and Highway 5 near Hay River. Pine Lake is about 60 km south of Fort Smith.',
      time: 'A long northern road trip — plan fuel stops',
    },
    {
      icon: '❄️',
      title: 'Winter Road',
      text: 'In winter, an ice road runs from Fort McMurray through Fort Chipewyan. Conditions change — check road reports first.',
      time: 'Winter only',
    },
  ],

  entryPass: {
    title: 'Plan Ahead',
    text: 'Visitor services run May to October. Pine Lake campsites and cabins can be booked through Parks Canada. Youth 17 and under enter free.',
    buyText: 'Pine Lake water is not drinkable without filtering or treating.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Pine Lake Campground',
      text: 'On the shore of a sinkhole lake with a sandy beach, cook shelter, and playground. Rustic cabins are also available. Open Victoria Day weekend to September 30.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Fort Smith, NWT',
      text: 'The main gateway town with the park’s visitor centre, hotels, and services.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fort+Smith+Northwest+Territories', level: 'blue' }],
    },
    {
      icon: '🛶',
      title: 'Fort Chipewyan, AB',
      text: 'Gateway to the Peace-Athabasca Delta, with a Parks Canada office and visitor centre — reached by air, or by ice road in winter.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nt/woodbuffalo', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Parks Canada Dispatch (24/7):', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Visitor Centres',
      lines: ['Fort Smith: 867-872-7960', 'Fort Chipewyan: 780-697-3662'],
    },
    {
      icon: '🔥',
      title: 'Wildfire Closures',
      text: 'Some areas burned in 2023 remain closed because of hazards. Respect all closures.',
    },
    {
      icon: '💧',
      title: 'Water',
      text: 'Lake water must be filtered or treated before drinking. Bring enough water for trips.',
    },
    {
      icon: '📶',
      title: 'Remote Travel',
      text: 'This is a remote northern park — tell someone your plans and carry supplies.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
  ],

  gallery: [],
};

export default WOOD_BUFFALO;
