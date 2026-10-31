// Faro — данные страницы /city/faro (Фаро, ЮКОН)
// Видео Фаро в бесплатных банках нет (Pexels по запросу — только зимние
// пейзажи и маяки без связи с местом; слово "Faro" по-испански/итальянски
// означает "маяк", отсюда путаница в выдаче). В шапке фото с Wikimedia
// Commons — посёлок с вертолёта на фоне долины и гор, подпись к файлу
// "Town of Faro seen from helicopter", автор Histif, май 2009, CC BY-SA 4.0
// — лицензия требует автора. GPS в EXIF нет, но подпись однозначно
// называет место.
// Население — перепись 2021: 440 (+26.4% к 2016, 348) — самый быстрый
// рост среди городов Юкона на сайте; статистика Юкона связывает прежнее
// падение с закрытием рудника.
// История: посёлок построен в 1968–69 компанией Cyprus Anvil Mines для
// одного из крупнейших открытых свинцово-цинковых рудников в мире;
// рудник закрылся окончательно в 1998 году (банкротство последнего
// владельца). Сейчас здесь один из самых сложных проектов рекультивации
// заброшенных рудников в Канаде — ориентировочный срок завершения около
// 2039 года (федеральные публикации, 2026). Беспокойство — утечка
// токсичных металлов в реки Пелли и Юкон ниже по течению.
// Медцентр — Faro Community Health Centre; в августе 2025 закрывался на
// месяц из-за нехватки медсестёр, мэр публично говорил о кризисе
// здравоохранения — предупреждение вместо гарантии круглосуточной помощи.
// Fannin sheep (гибрид снежного барана Далла и барана Стоуна) —
// смотровая станция Mount Mye с домиком и печкой; ежегодный фестиваль
// Crane and Sheep Viewing Festival.
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.

export const FARO = {
  slug: 'faro',
  name: 'Faro',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Former Mining Capital',
  accentLevel: 'purple',
  heroIcon: '⛏️',
  heroImage: '/Cities/Faro/hero.jpg',
  heroCredit: 'Photo: Histif / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.2309, lon: -133.3756 },
  subtitle: 'Mountain Town Reborn After the Mine',
  description:
    'Built in 1968–69 to house workers at one of the world’s largest open-pit lead-zinc mines, Faro sits in a remote valley on the Robert Campbell Highway, framed by the Pelly Mountains. Since the mine closed, this small community has reinvented itself around wildlife viewing, wilderness recreation and one of Canada’s biggest ongoing mine-cleanup projects.',

  actions: [
    { label: 'Explore Faro', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈440 (2021)' },
    { label: 'Known For', value: 'Fannin Sheep Viewing' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈4 h by car' },
    { label: 'To Ross River', value: '≈1 h by car' },
  ],

  badges: ['Fannin Sheep', 'Mine Remediation', 'Pelly Mountains'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '440', label: 'People in Faro in the 2021 census — up 26.4% in five years', level: 'purple' },
    { value: '1968', label: 'Year the town was built for the Cyprus Anvil lead-zinc mine', level: 'gold' },
    { value: '≈2039', label: 'Estimated completion of the Faro Mine Remediation Project', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Built for thousands of mine workers, now a quieter community' },
    { name: 'Mount Mye', icon: '🐏', tag: '🐏 Wildlife', tagLevel: 'purple', meta: 'Sheep-viewing station overlooking the valley' },
    { name: 'Pelly Mountains', icon: '⛰️', tag: '⛰️ Backdrop', tagLevel: 'blue', meta: 'The range framing the town and old mine site' },
    { name: 'Faro Mine Site', icon: '⚠️', tag: '⚠️ Remediation', tagLevel: 'danger', meta: 'One of Canada’s largest ongoing mine-cleanup projects' },
    { name: 'Robert Campbell Highway', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'olive', meta: 'The route connecting Faro to Carmacks and Watson Lake' },
  ],

  attractions: [
    {
      name: 'Mount Mye Fannin Sheep Viewing Station',
      icon: '🐏',
      text: 'A viewing platform and warm cabin for watching Fannin sheep — a rare, naturally occurring hybrid of Dall’s and Stone’s sheep found around Faro.',
      tags: [{ label: 'Rare wildlife', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Crane and Sheep Viewing Festival',
      icon: '🎉',
      text: 'An annual community festival celebrating the spring migration of sandhill cranes and the local sheep population.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Community', level: 'purple' }],
    },
    {
      name: 'Faro Museum',
      icon: '🏛️',
      text: 'Local and mining history, including displays on the town’s boom years and its wildlife. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
    },
    {
      name: 'Faro Mine Site',
      icon: '⚠️',
      text: 'Once one of the world’s largest open-pit lead-zinc mines, now the focus of a decades-long federal remediation project. Viewable from a distance; not open for casual visits.',
      tags: [{ label: 'History', level: 'danger' }, { label: 'View only', level: 'caution' }],
    },
    {
      name: 'Van Gorder Falls & Trails',
      icon: '🥾',
      text: 'Local hiking trails around the valley, popular for berry-picking and quiet walks in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
    },
  ],

  outdoorHeading: 'Mountain Valley and Wildlife',
  outdoor: [
    { icon: '🐏', name: 'Sheep Viewing', dist: 'Mount Mye', text: 'Watch rare Fannin sheep from a dedicated platform.' },
    { icon: '🥾', name: 'Valley Trails', dist: 'Around town', text: 'Hiking and berry-picking trails near the townsite.' },
    { icon: '🎣', name: 'Fishing', dist: 'Pelly River', text: 'Angling on the river below the valley.' },
    { icon: '🦅', name: 'Birding', dist: 'Spring migration', text: 'Sandhill cranes pass through in spring.' },
    { icon: '🏔️', name: 'Pelly Mountains', dist: 'Surrounding the town', text: 'Remote alpine scenery with few other visitors.' },
    { icon: '🦌', name: 'Wildlife Watching', dist: 'Highway corridor', text: 'Moose, caribou and other northern species nearby.' },
  ],

  food: [
    { icon: '🍔', title: 'Local Diner', area: 'Town centre', areaLevel: 'gold', text: 'Simple stops for residents and travellers.' },
    { icon: '🛒', title: 'General Store', area: 'Town centre', areaLevel: 'olive', text: 'Basic groceries and supplies.' },
    { icon: '☕', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee and quick bites.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🐟', title: 'River Fish', area: 'Local menus', areaLevel: 'blue', text: 'Pelly River fish where in season.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding valley.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 3, note: 'Crane migration', text: 'Sandhill cranes pass through, and the sheep festival often falls in this window.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'Trails, fishing and the sheep viewing station are at their best.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Berry season', text: 'Berry-picking and good sheep viewing as weather cools.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'A small, remote mountain community under deep snow.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Faro sits off the Robert Campbell Highway, reached via a side road from Carmacks or from Watson Lake through Ross River.',
      time: '≈4 h from Whitehorse',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Faro has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'No regular scheduled bus service reaches Faro — most visitors arrive by car.',
      time: 'No scheduled service',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No passenger rail serves Faro.',
      time: 'No rail service',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small selection of motels and inns.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Faro+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Faro%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🐏',
      title: 'Near Mount Mye',
      area: 'Short drive from town',
      text: 'Close to the sheep viewing station.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Faro+Yukon+campground', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Pelly River',
      area: 'Nearby',
      text: 'Riverside camping for anglers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pelly+River+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Local Transit',
      text: 'Faro has no public bus system — the town centre is a short walk, and a car is essential for the highway and surrounding wilderness.',
      linkLabel: 'Yukon government',
      linkUrl: 'https://yukon.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The town centre is a few short blocks.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the highway and Mount Mye.' },
          { icon: '🚕', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Sheep tip:',
      text: 'Bring binoculars to the Mount Mye viewing station — Fannin sheep graze well up the mountainside, and the cabin’s woodstove makes a cold wait more comfortable.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Faro has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Faro / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '⛽', label: 'Fuel & supplies: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🐏', label: 'Sheep viewing station: free' },
      { icon: '🥾', label: 'Valley trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '⛽', title: 'Fuel Up', text: 'Services are limited along the surrounding highways — fill up and stock supplies in Faro.' },
    { icon: '🐏', title: 'Respect the Sheep', text: 'View Fannin sheep from the designated platform and keep a respectful distance — don’t approach them on the mountainside.' },
    { icon: '❄️', title: 'Winter Isolation', text: 'Faro is remote even by Yukon standards — check road and weather conditions before winter travel.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Watch for moose and other large animals on the highway, especially at dawn and dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '📶', title: 'Limited Services', text: 'This is a small, remote community — cell coverage and services are limited outside town.' },
    { icon: '🪶', title: 'Whose Land', text: 'Faro is on the traditional territory of the Ross River Dena Council and the Selkirk First Nation.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Faro Community Health Centre', 'Staffing can be limited — check status before relying on it', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default FARO;
