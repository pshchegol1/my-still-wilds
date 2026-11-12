// Point Pelee National Park — данные страницы /park/point-pelee
//
// Фото: по просьбе — снимок с карточки (/on/parks/Point Pelee.png).
// ВНИМАНИЕ: на нём каменный берег с волнорезами из глыб — для песчаной
// косы Point Pelee нетипично, похоже на берег озера Онтарио; место съёмки
// не подтверждено — сказано пользователю. Достопримечательности с
// иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Point Pelee (главная): южная оконечность материковой
//   Канады; второй по величине самый маленький нацпарк (сайт) / самый
//   маленький (Wikipedia) → на странице без слова "smallest"; один из самых
//   экологически разнообразных; oTENTik (A-frame) в Camp Henry круглый год;
//   Dark Sky Nights; часы — с 7 утра до сумерек; межсезонье 1 ноября —
//   31 марта; парк закрыт для посетителей 12-23 ноября 2026; 1118 Point
//   Pelee Drive, Leamington; 519-322-2365; 1-877-852-3100;
//   pelee.info@pc.gc.ca.
// - Parks Canada, Shuttle to the Tip: бесплатный шаттл от Visitor Centre,
//   ~2 км (7 мин) до выставки и башни на Tip; сезон в источниках
//   расходится (с 1 апреля до Дня благодарения / апрель — октябрь) → на
//   странице "spring to fall, check schedule".
// - Parks Canada, Park regulations / Swimming: купаться и даже заходить в
//   воду на Tip (и на всех пляжах южнее выставки) запрещено — штраф до
//   $10,000; опасные течения и подводные потоки; спасателей нет ни на
//   одном пляже.
// - Wikipedia: основан 29 мая 1918 — первый нацпарк Канады, созданный ради
//   охраны природы; 1,564 га (~15 км²); широта как у Рима и Барселоны;
//   Рамсарское угодье с 1987; заповедник тёмного неба с 2006 — первый
//   такой нацпарк в Канаде; болото ~70% площади; каролинские виды (лисий
//   полоз, пятиполосый сцинк); >360 видов птиц, >100 гнездятся; Caldwell
//   First Nation — земля не уступлена по договору 1790 года.
// - Туристические гиды (hikebiketravel и др.): Marsh Boardwalk ~1 км петля,
//   смотровая вышка (была закрыта по безопасности в 2023 — на странице
//   "check if open"); Tilden Woods ~1.4 км; миграция птиц весной (май) и
//   осенью (август — октябрь); монархи — пик в начале — середине сентября.
// - НЕ использовано: Festival of Birds (даты не подтверждены), общая длина
//   троп (источники расходятся).

const IMAGE = '/on/parks/Point Pelee.png';

export const POINT_PELEE = {
  slug: 'point-pelee',
  name: 'Point Pelee National Park',
  shortName: 'Point Pelee',
  province: 'Ontario',
  tag: 'Southernmost Mainland Canada · Est. 1918',
  heroImage: IMAGE,
  heroCaption: 'Point Pelee National Park · ON',
  description:
    'Stand at the southern tip of mainland Canada — on the same latitude as Rome. This tiny sand spit in Lake Erie is a funnel for migrating birds and monarch butterflies, wrapped in marsh, beaches, and rare Carolinian forest.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1918' },
    { label: 'Area', value: '15 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Bird Species', value: '360+' },
    { label: 'Marsh', value: '~70% Of Park' },
    { label: 'Dark Sky', value: 'Since 2006' },
  ],

  badges: ['Bird Migration', 'Monarchs', 'Dark Sky Preserve'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Migration Highway',
    emoji: '🦋',
    title: 'Where Birds And Butterflies Cross Lake Erie',
    text: 'Point Pelee pokes deep into Lake Erie, so migrating birds and butterflies funnel through it on their way across the lake. More than 360 bird species have been recorded here. In spring (May) and fall (August–October) waves of songbirds pass through, and each September thousands of monarch butterflies pass through on their journey to Mexico.',
    stats: [
      { value: '360+', label: 'Bird species recorded', level: 'safe' },
      { value: 'May', label: 'Spring bird migration', level: 'olive' },
      { value: 'Sept', label: 'Monarch peak', level: 'danger' },
      { value: '1918', label: 'Protected for nature', level: 'gold' },
    ],
  },

  attractions: [
    {
      name: 'The Tip',
      icon: '📍',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The southernmost point of mainland Canada — a narrowing sand spit pointing into Lake Erie. No swimming or wading: dangerous currents.',
    },
    {
      name: 'Marsh Boardwalk',
      icon: '🌾',
      tag: 'Wetland',
      tagLevel: 'safe',
      meta: 'A boardwalk loop of about 1 km through the cattail marsh that covers about 70% of the park.',
    },
    {
      name: 'Spring Bird Migration',
      icon: '🐦',
      tag: 'Birding',
      tagLevel: 'blue',
      meta: 'In May, waves of migrating songbirds pass through after crossing Lake Erie — over 360 species have been recorded here.',
    },
    {
      name: 'Monarch Migration',
      icon: '🦋',
      tag: 'Butterflies',
      tagLevel: 'danger',
      meta: 'In September, thousands of monarch butterflies pass through Point Pelee on their way to Mexico.',
    },
    {
      name: 'Carolinian Forest',
      icon: '🌳',
      tag: 'Rare Habitat',
      tagLevel: 'olive',
      meta: 'Southern trees and wildlife rare in Canada — including the eastern fox snake and the five-lined skink.',
    },
    {
      name: 'Dark Sky Nights',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'The first national park in Canada named a Dark Sky Preserve (2006). Join an evening visit to see the stars over Lake Erie.',
    },
  ],

  wildlifeWarning:
    'Many rare Carolinian species live here, including the eastern fox snake and five-lined skink — watch where you step and never handle wildlife. Stay on trails and boardwalks to protect fragile habitat, and keep dogs on a leash.',
  wildlife: [
    { name: 'Warblers', level: 'safe', chance: '★★★★★ May migration' },
    { name: 'Monarch Butterfly', level: 'safe', chance: '★★★★☆ September' },
    { name: 'Waterfowl & Shorebirds', level: 'safe', chance: '★★★★☆ Marsh and beaches' },
    { name: 'Eastern Fox Snake', level: 'safe', chance: '★★☆☆☆ Open habitats' },
    { name: 'Five-lined Skink', level: 'safe', chance: '★☆☆☆☆ Rare' },
  ],

  seasons: [
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'The famous spring bird migration peaks in May. Come early in the day — the park opens at 7 a.m. The Tip shuttle starts running in spring.',
      rating: 5,
      note: 'Bird migration',
    },
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beach days on Lake Erie and paddling in the marsh. Swim only at permitted beaches — there are no lifeguards, and swimming or wading at the Tip is prohibited.',
      rating: 4,
      note: 'Beaches & marsh',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'August — October',
      level: 'danger',
      text: 'Fall bird migration and the monarch butterfly gathering in September. Quieter trails as the season winds down.',
      rating: 5,
      note: 'Monarchs',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Off-peak operations from November 1 to March 31. The oTENTiks at Camp Henry are open year-round. The park is closed to visitors November 12–23, 2026.',
      rating: 2,
      note: 'Quiet season',
    },
  ],

  trailsNote: {
    title: 'No Swimming Or Wading At The Tip',
    text: 'Dangerous currents and undertows surround the Tip. Swimming or wading at the Tip, or at any beach south of the Tip exhibit area, is prohibited — fines can reach $10,000. There are no lifeguards at any beach in the park.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/ontario/point-pelee-national-park',
  trails: [
    { name: 'Marsh Boardwalk', length: '~1 km loop', area: 'Marsh', difficulty: 'Easy' },
    { name: 'The Tip', length: '~2 km by free shuttle', time: '7 min ride', area: 'Visitor Centre → Tip', difficulty: 'Shuttle', level: 'blue' },
    { name: 'Tilden Woods', length: '~1.4 km loop', area: 'Forest', difficulty: 'Easy' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The park is near Leamington in southwestern Ontario, on Lake Erie. The entrance is at 1118 Point Pelee Drive.',
      time: 'Open 7 a.m. to dusk',
    },
    {
      icon: '🚌',
      title: 'Shuttle To The Tip',
      text: 'A free shuttle runs about 2 km (7 minutes) from the Visitor Centre to the Tip exhibit and tower, from spring to fall.',
      time: 'Check the current schedule',
    },
    {
      icon: '🚲',
      title: 'By Bike',
      text: 'Cycling is one of the park’s listed activities — a fun way to get between beaches and trailheads.',
      time: 'Bring your own bike',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'A Parks Canada daily pass or Discovery Pass is required. Youth 17 and under enter free.',
    buyText: 'Book oTENTiks at Camp Henry through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '⛺',
      title: 'Camp Henry oTENTiks',
      text: 'A-frame oTENTik cabins inside the park, available year-round — wake up close to the migration.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Leamington & Kingsville',
      text: 'Nearby towns on Lake Erie with hotels, B&Bs, and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Leamington+Ontario', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Leamington--Ontario', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Parks Canada Emergency:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['519-322-2365', 'pelee.info@pc.gc.ca'],
    },
    {
      icon: '🌊',
      title: 'Swimming',
      text: 'No lifeguards at any beach. Swimming and wading at the Tip are prohibited.',
    },
    {
      icon: '🕖',
      title: 'Hours',
      text: 'The park is open from 7 a.m. to dusk daily.',
    },
    {
      icon: '🗼',
      title: 'Towers',
      text: 'Observation towers may be closed for safety — check before you go.',
    },
    {
      icon: '📱',
      title: 'Park Map',
      text: 'An interactive map is available in the Parks Canada app.',
    },
  ],

  gallery: [],
};

export default POINT_PELEE;
