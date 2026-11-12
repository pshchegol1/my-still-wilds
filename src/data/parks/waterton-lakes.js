// Waterton Lakes National Park — данные страницы /park/waterton-lakes
//
// Фото: по просьбе — снимок с карточки (/ab/parks/waterton-lakes.png);
// по виду — узкое озеро Upper Waterton между гор (похоже на правду, но
// место съёмки не подтверждено). Достопримечательности с иконками,
// галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Waterton (главная): здесь прерии Альберты встречаются с
//   вершинами Скалистых гор; открыт круглый год; 16 мест для пикника;
//   дроны запрещены (штраф до $25,000); 403-859-5133,
//   waterton.info@pc.gc.ca; экстренно — 911.
// - Parks Canada, Short walks: Red Rock Canyon loop 0.7 км/20 мин (верхний
//   мост закрыт); Blakiston Falls 2 км т/о/45 мин; Cameron Lakeshore 3 км
//   т/о/1 ч (виды на Glacier NP, США); Linnet Lake 1 км; Townsite loop
//   3.2 км (Cameron Falls, павильон International Peace Park); Prince of
//   Wales loop 2 км.
// - Parks Canada, Day hikes: Bertha 5.2 км т/о до водопада, 10.4 км до
//   озера, 460 м, 4.5 ч (тропа в лавинном пути); Crypt 17.2 км т/о, 675 м,
//   6 ч — 15 мин на лодке до Crypt Landing, узкий тоннель и карниз над
//   обрывом; Carthew-Alderson 20.1 км в одну сторону, 650 м, 8 ч;
//   Lakeshore — пересекает границу США (правила CBP), назад на лодке из
//   Goat Haunt. Bear's Hump — 2.8 км т/о, 225 м, 1 ч (Parks Canada, по
//   поиску).
// - Wikipedia: национальный парк с 1895; 505 км²; Waterton-Glacier
//   International Peace Park — 1932; биосферный заповедник — 1979 (второй
//   в Канаде); ЮНЕСКО — 1995 (в составе Peace Park); пожар сентября 2017
//   (Kenow) — ~200 км², эвакуация посёлка; Prince of Wales Hotel — 1927,
//   национальное историческое место с 1992; высоты 1,290 м (посёлок) —
//   2,910 м (Mount Blakiston); >1,000 видов сосудистых растений, >20
//   эндемиков… (на странице — "more than 1,000 plant species").
// - CTV / CBC (2021): шесть равнинных бизонов из Elk Island прибыли
//   19 февраля 2021; благословение старейшин Kainai, Piikani, Siksika;
//   прежнее стадо с 1952 до пожара 2017; летний загон 124 га.
// - Parks Canada, Aggressive deer: олени в посёлке привыкли к людям;
//   самки защищают оленят в июне — начале июля; осторожно с собаками;
//   сообщать 1-888-927-3367.
// - Parks Canada (бюллетень 2025): лодки без мотора извне парка
//   запрещено спускать на воду; моторные — 90-дневный карантин
//   (правила 2026 года не подтверждены → "check current rules").
// - НЕ использовано: глубина озера, названия кемпингов кроме Townsite,
//   число посетителей.

const IMAGE = '/ab/parks/waterton-lakes.png';

export const WATERTON_LAKES = {
  slug: 'waterton-lakes',
  name: 'Waterton Lakes National Park',
  shortName: 'Waterton',
  province: 'Alberta',
  tag: 'UNESCO World Heritage · Est. 1895',
  heroImage: IMAGE,
  heroCaption: 'Waterton Lakes National Park · AB',
  description:
    'Where the prairies meet the mountains. Rolling grasslands run straight into the peaks of the Rockies here, around a chain of deep blue lakes that reaches across the border into Montana. Part of the world’s first International Peace Park.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1895' },
    { label: 'Area', value: '505 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Peace Park', value: 'Since 1932' },
    { label: 'Highest Peak', value: 'Mt Blakiston 2,910m' },
    { label: 'Plant Species', value: '1,000+' },
  ],

  badges: ['UNESCO', 'Peace Park', 'Biosphere Reserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'Peace Across A Border',
    emoji: '🤝',
    title: 'The World’s First International Peace Park',
    text: 'In 1932 Waterton joined with Glacier National Park in Montana to form the Waterton-Glacier International Peace Park — a symbol of friendship between Canada and the United States. It became a biosphere reserve in 1979 and a UNESCO World Heritage Site in 1995. In 2017 the Kenow wildfire burned about 200 km² and forced the townsite to evacuate.',
    stats: [
      { value: '1932', label: 'International Peace Park', level: 'gold' },
      { value: '1979', label: 'Biosphere reserve', level: 'safe' },
      { value: '1995', label: 'UNESCO World Heritage', level: 'blue' },
      { value: '2017', label: 'Kenow wildfire', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Prince of Wales Hotel',
      icon: '🏨',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Built in 1927 on a bluff above Upper Waterton Lake — a National Historic Site overlooking Upper and Middle Waterton lakes.',
    },
    {
      name: 'Red Rock Canyon',
      icon: '🪨',
      tag: 'Canyon',
      tagLevel: 'danger',
      meta: 'A short paved loop around a canyon of brilliant red and green rock. Nearby, a 2 km return walk leads to Blakiston Falls.',
    },
    {
      name: 'Cameron Lake',
      icon: '🏞️',
      tag: 'Lake',
      tagLevel: 'blue',
      meta: 'Subalpine lake at the end of the Akamina Parkway, looking south to a headwall in Glacier National Park, USA.',
    },
    {
      name: 'Crypt Lake',
      icon: '⛵',
      tag: 'Adventure',
      tagLevel: 'purple',
      meta: 'Reach the trailhead by boat, then climb to a hidden lake — the route squeezes through a tight tunnel onto a narrow cliff ledge.',
    },
    {
      name: 'Bear’s Hump',
      icon: '⛰️',
      tag: 'Viewpoint',
      tagLevel: 'safe',
      meta: 'A short, steep climb right from town to a classic view over the townsite and Upper Waterton Lake.',
    },
    {
      name: 'Bison Paddock',
      icon: '🦬',
      tag: 'Wildlife',
      tagLevel: 'olive',
      meta: 'Plains bison returned in 2021 after the 2017 fire, welcomed with a Blackfoot Confederacy blessing. Watch from the paddock loop road.',
    },
  ],

  wildlifeWarning:
    'Deer in the townsite are used to people and can be aggressive — especially does with fawns in June and early July, and especially toward dogs. Keep dogs leashed, never feed wildlife, and carry bear spray on every trail.',
  wildlife: [
    { name: 'Mule Deer', level: 'caution', chance: '★★★★★ Townsite — can be aggressive' },
    { name: 'Bighorn Sheep', level: 'safe', chance: '★★★☆☆ Open slopes' },
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Valleys and trails' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Backcountry' },
    { name: 'Plains Bison', level: 'caution', chance: '★★★★☆ Bison paddock' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★☆☆ Grasslands' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The busiest season. Prime time for Crypt Lake and the high trails. Watch for protective mother deer in town in June and early July.',
      rating: 5,
      note: 'Peak season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fewer crowds on the trails. Boat shuttles run less often — check the Crypt Lake schedule.',
      rating: 4,
      note: 'Fewer crowds',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'The park is open year-round, but services are limited. Some trailheads, like Bertha, sit in avalanche paths — check the avalanche advisory.',
      rating: 2,
      note: 'Quiet season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Bears are active in the valleys. High trails are still snowy, and boat shuttles start up later in the season.',
      rating: 3,
      note: 'Valley trails',
    },
  ],

  trailsNote: {
    title: 'Some Trails Cross Into The USA',
    text: 'The Lakeshore and Boundary Creek trails cross the Canada–U.S. border, and U.S. Customs and Border Protection rules apply. Crypt Lake needs a boat shuttle — check the schedule, especially in spring and fall.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/waterton-lakes-national-park',
  trails: [
    { name: 'Red Rock Canyon Loop', length: '0.7 km loop', gain: 'Minimal', time: '20 min', area: 'Red Rock Parkway', difficulty: 'Easy' },
    { name: 'Cameron Lakeshore', length: '3 km return', gain: 'Minimal', time: '1 hour', area: 'Cameron Lake', difficulty: 'Easy' },
    { name: 'Bear’s Hump', length: '2.8 km return', gain: '225 m gain', time: '1 hour', area: 'Townsite', difficulty: 'Moderate' },
    { name: 'Bertha Lake', length: '10.4 km return', gain: '460 m gain', time: '4.5 hours', area: 'Townsite', difficulty: 'Moderate' },
    { name: 'Crypt Lake', length: '17.2 km return', gain: '675 m gain', time: '6 hours', area: 'Boat to Crypt Landing', difficulty: 'Hard' },
    { name: 'Carthew-Alderson', length: '20.1 km one way', gain: '650 m gain', time: '8 hours', area: 'Cameron Lake → Townsite', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Calgary (YYC) and drive south through the foothills, or into Lethbridge (YQL) to the east.',
      time: 'Then continue by car',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Waterton sits in Alberta’s southwest corner, on the border with Montana. Two scenic roads lead from town into the mountains: the Akamina Parkway to Cameron Lake and the Red Rock Parkway to Red Rock Canyon.',
      time: 'Southwest corner of Alberta',
    },
    {
      icon: '⛵',
      title: 'By Boat',
      text: 'A boat shuttle crosses Upper Waterton Lake to the Crypt Lake trailhead (about 15 minutes) and to Goat Haunt at the south end of the lake.',
      time: 'Check seasonal schedules',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'A Parks Canada daily pass or Discovery Pass is required. Youth 17 and under enter free.',
    buyText: 'Backcountry campsites on the Carthew-Alderson and other routes need a reservation.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏨',
      title: 'Prince of Wales Hotel',
      text: 'The historic 1927 hotel on the bluff above Upper Waterton Lake — an icon of the park.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Prince+of+Wales+Hotel+Waterton', level: 'blue' }],
    },
    {
      icon: '🏕️',
      title: 'Townsite Campground',
      text: 'Camp right in the village of Waterton Park, a short walk from the lake, shops, and trailheads.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Waterton Park Village',
      text: 'The small townsite inside the park has lodges, motels, and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Waterton+Park+Alberta', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Waterton-Park--Alberta', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Aggressive deer reports:', '1-888-927-3367'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['403-859-5133', 'waterton.info@pc.gc.ca'],
    },
    {
      icon: '🛶',
      title: 'Boats & Paddleboards',
      text: 'Non-motorized watercraft from outside the park have been banned from park waters to stop invasive species. Check current rules before you bring a kayak or SUP.',
    },
    {
      icon: '🛂',
      title: 'Border Trails',
      text: 'Trails that cross into the USA follow U.S. Customs and Border Protection rules. Carry proper ID.',
    },
    {
      icon: '🦌',
      title: 'Deer In Town',
      text: 'Keep a good distance and keep dogs leashed, especially in fawning season (June — early July).',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drones are prohibited — fines up to $25,000.',
    },
  ],

  gallery: [],
};

export default WATERTON_LAKES;
