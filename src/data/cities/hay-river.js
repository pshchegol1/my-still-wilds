// Hay River — данные страницы /city/hay-river (Хей-Ривер, СЕВЕРО-ЗАПАДНЫЕ
// ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянные реки и сено, явное
// совпадение с английским "hay" = сено). В шапке фото с Wikimedia
// Commons — причал Fisherman's Wharf с рыбацкими лодками и видом на
// город через реку, автор Ymblanter, 03.08.2019, CC BY-SA 4.0 (GPS
// 60.849, -115.736 — совпадает с Хей-Ривер). Лицензия требует автора.
// Население — перепись 2021: 3 169 (-10.2% к 2016, 3528); отдельно
// population centre — 2 380 (другая методика, не смешиваем).
// "Hub of the North" — груз с юга (ж/д и автотрассы) перегружают на
// баржи для доставки по реке Маккензи в удалённые арктические общины;
// в гавани — база Канадской береговой охраны и коммерческий рыболовный
// флот. Источники о барже — туристические, физическую логистику не
// проверяли отдельно у транспортного органа.
// Больница — Hay River Regional Health Centre (новое здание, подрядчик
// назван отдельно от старого), 37911 Mackenzie Hwy; в 2022–2023 были
// перебои с укомплектованием персоналом и временные ограничения ER —
// предупреждение в тексте вместо гарантии "24/7".
// Twin Falls Gorge Territorial Park — около 50 км к югу по Mackenzie
// Highway (источники расходятся: 42–50 км); включает Alexandra Falls
// (≈32–33 м, третий по высоте водопад в NWT) и Louise Falls (≈15 м),
// связаны пешей тропой ≈2–3 км. Хрупкие обрывы и сильное течение —
// предупреждение о безопасности.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: статус "ворот" к Great Slave Lake и реке Маккензи,
// время в пути.

export const HAY_RIVER = {
  slug: 'hay-river',
  name: 'Hay River',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Hub of the North',
  accentLevel: 'safe',
  heroIcon: '🚢',
  heroImage: '/Cities/HayRiver/hero.jpg',
  heroCredit: 'Photo: Ymblanter / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.8158, lon: -115.7999 },
  subtitle: 'Where Road, Rail and River Meet',
  description:
    'Known across the North as the "Hub of the North," Hay River sits where the river of the same name empties into Great Slave Lake. Freight arriving by truck and rail is loaded onto barges here for the long journey down the Mackenzie River to remote Arctic communities, while a working fishing fleet and sandy lake beaches give the town a very different, more relaxed side.',

  actions: [
    { label: 'Explore Hay River', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈3.2K (2021)' },
    { label: 'Known For', value: 'Transportation Hub' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'To Yellowknife', value: '≈4 h by car' },
    { label: 'To Twin Falls Gorge Park', value: '≈45–50 min by car' },
  ],

  badges: ['Great Slave Lake', 'Barge Port', 'Twin Falls Gorge'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '3,169', label: 'People in Hay River in the 2021 census', level: 'safe' },
    { value: '1963', label: 'Year Hay River was incorporated as a town', level: 'purple' },
    { value: '32–33 m', label: 'Height of Alexandra Falls, the 3rd-highest waterfall in the NWT, near town', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Old Town', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'gold', meta: 'The original townsite at the river mouth, with the harbour and wharf' },
    { name: 'New Town', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'blue', meta: 'The rebuilt town centre on higher ground, with most shops and services' },
    { name: 'Vale Island', icon: '🏝️', tag: '🏝️ River Delta', tagLevel: 'purple', meta: 'An island neighbourhood in the Hay River delta' },
    { name: 'Great Slave Lake Beaches', icon: '🏖️', tag: '🏖️ Beach', tagLevel: 'safe', meta: 'Sandy shoreline along the lake near the river mouth' },
    { name: 'Hay River Reserve (Ka’a’gee Tu)', icon: '🪶', tag: '🪶 First Nation', tagLevel: 'olive', meta: 'The neighbouring Dene reserve community' },
  ],

  attractions: [
    {
      name: 'Fisherman’s Wharf',
      icon: '⚓',
      text: 'The working harbour where Hay River’s commercial fishing fleet docks — a good spot to watch boats and see the town across the water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Local life', level: 'blue' }],
    },
    {
      name: 'Great Slave Lake Beach',
      icon: '🏖️',
      text: 'Sandy beach where the Hay River meets Great Slave Lake — a surprisingly good summer swimming and sunset spot this far north.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Twin Falls Gorge Territorial Park',
      icon: '💧',
      text: 'About 45–50 minutes south on the Mackenzie Highway: Alexandra Falls and Louise Falls, linked by a scenic trail through a limestone gorge. Stay well back from unstable cliff edges.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Caution', level: 'danger' }],
    },
    {
      name: 'Hay River Barge & Harbour',
      icon: '🚢',
      text: 'Watch freight transfer from trucks and rail cars onto barges bound down the Mackenzie River for remote northern communities — the activity that gives Hay River its "Hub of the North" nickname.',
      tags: [{ label: 'Unique', level: 'purple' }, { label: 'Industrial', level: 'olive' }],
    },
    {
      name: 'Hay River Museum',
      icon: '🏛️',
      text: 'Local and transportation history, with outdoor exhibits including vintage overland vehicles. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
    },
  ],

  outdoorHeading: 'River Mouth, Lake and Waterfalls',
  outdoor: [
    { icon: '🏖️', name: 'Lake Beach', dist: 'River mouth', text: 'Sandy shoreline on Great Slave Lake.' },
    { icon: '💧', name: 'Alexandra & Louise Falls', dist: '≈45–50 min', text: 'Two waterfalls linked by a scenic gorge trail.' },
    { icon: '🎣', name: 'Fishing', dist: 'Hay River & Great Slave Lake', text: 'A long-standing commercial and recreational fishery.' },
    { icon: '🛶', name: 'Boating', dist: 'Harbour & lake', text: 'Boat access to Great Slave Lake from the river mouth.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter travel and recreation.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights outside summer.' },
  ],

  food: [
    { icon: '🐟', title: 'Fresh Lake Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Whitefish and other catches from Great Slave Lake.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🍽️', title: 'Restaurants', area: 'New Town', areaLevel: 'gold', text: 'A modest dining scene serving the regional hub.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops in the town centre.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'New Town', areaLevel: 'safe', text: 'The main supply point for the South Slave region.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding land.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves the river and Great Slave Lake as days lengthen.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm days for the lake beach, fishing and the waterfalls.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Colour', text: 'Boreal colour and the return of aurora season.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold & snowy', text: 'Deep cold, with ice roads and winter travel on the land.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 2 connects Hay River to Yellowknife and, via Alberta highways, to southern Canada.',
      time: '≈4 h from Yellowknife',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Hay River/Merlyn Carter Airport has scheduled flights connecting to Yellowknife and Edmonton.',
      time: 'Local flights available',
    },
    {
      icon: '🚢',
      title: 'By Barge',
      text: 'Hay River is the main loading point for barge freight heading down the Mackenzie River — a cargo route, not a passenger service.',
      time: 'Freight only',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Limited intercity coach options connect Hay River to Yellowknife and Alberta. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'New Town',
      area: 'Walkable',
      text: 'Most of the town’s hotels and motels.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hay+River+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Hay%20River%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓',
      title: 'Old Town',
      area: 'Near the harbour',
      text: 'A quieter area close to Fisherman’s Wharf.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hay+River+Northwest+Territories', level: 'blue' },
      ],
    },
    {
      icon: '💧',
      title: 'Twin Falls Gorge Park',
      area: '≈45–50 min away',
      text: 'Campgrounds at Louise Falls and Escarpment Creek.',
      links: [
        { label: 'NWT Parks', url: 'https://www.nwtparks.ca/find-a-park/twin-falls-territorial-park', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No Public Transit',
      text: 'Hay River has no municipal bus system — a car or taxi is the way to get around town, with Old Town and New Town a short drive apart.',
      linkLabel: 'Town of Hay River',
      linkUrl: 'https://hayriver.com/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Each town centre is walkable on its own.' },
          { icon: '🚗', title: 'Car', text: 'Needed to get between Old Town, New Town and the falls.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in town.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel on regional trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Falls tip:',
      text: 'Stick to marked viewpoints at Alexandra and Louise Falls — the limestone cliffs and currents are genuinely dangerous close up.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Hay River / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
      { icon: '🎣', label: 'Fishing charters: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏖️', label: 'Lake beach: free' },
      { icon: '💧', label: 'Twin Falls Gorge Park day use: check current fees' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🚢', title: 'Hub of the North', text: 'Hay River is a key logistics point — freight from the south transfers here onto barges for remote Arctic communities, which shapes the town’s economy and feel.' },
    { icon: '⚠️', title: 'Waterfall Safety', text: 'Alexandra and Louise Falls have unstable cliffs and dangerous currents — stay on marked trails and viewpoints.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Highway 2 can see heavy snow and ice — check road conditions before travelling.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Moose and bison can appear on regional highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife and Edmonton.' },
    { icon: '🏥', title: 'Check the ER', text: 'The health centre has faced staffing-related service limits in the past — check current status if you need urgent care.' },
    { icon: '🪶', title: 'Whose Land', text: 'Hay River is on the traditional territory of the Dene, near the K’atl’odeeche First Nation (Hay River Reserve) across the river.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hay River Regional Health Centre', '37911 Mackenzie Hwy', 'Call 911 · 811 for advice'] },
  ],
};

export default HAY_RIVER;
