// Watson Lake — данные страницы /city/watson-lake (Уотсон-Лейк, ЮКОН)
// Осторожно: Pexels по запросу "Watson Lake" в основном выдаёт одноимённое
// озеро в Аризоне (США) — не перепутать. Видео самого Уотсон-Лейка в
// бесплатных банках нет. В шапке фото с Wikimedia Commons — "Signpost
// Forest", автор Murray Foubister, 29.05.2010, CC BY-SA 2.0. GPS в EXIF
// отсутствует, но файл однозначно идентифицирован как знаменитый Sign
// Post Forest в Уотсон-Лейке (категория Commons), спутать с другим
// местом невозможно — ориентир уникальный. Лицензия требует автора.
// Население — перепись 2021: 1 133 (+4.6% к 2016, 1 083).
// Sign Post Forest: начат в 1942 канадским солдатом Carl Lindley; счёт
// указателей в разных источниках расходится (55К в 2004, 65К в 2008,
// "более 77К" без даты, "91К" без даты) — не называем точное число,
// пишем "десятки тысяч".
// Больница — Watson Lake Community Hospital, 817 Ravenhill Dr, заявлено
// ER 24/7 (yukon.ca); отдельно работает Watson Lake Health Centre,
// 801 Ravenhill Dr — это не приёмный покой, а амбулаторные услуги.
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Из общих знаний: Alaska Highway (Alcan) построена в 1942 году силами
// армии США, город — один из её ключевых пунктов снабжения; Northern
// Lights Centre/планетарий; аэропорт как историческая база Alcan; время
// в пути.

export const WATSON_LAKE = {
  slug: 'watson-lake',
  name: 'Watson Lake',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Sign Post Forest',
  accentLevel: 'safe',
  heroIcon: '🪧',
  heroImage: '/Cities/WatsonLake/hero.jpg',
  heroCredit: 'Photo: Murray Foubister / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.0633, lon: -128.7093 },
  subtitle: 'Alaska Highway Crossroads',
  description:
    'A small town at the junction of the Alaska and Campbell highways, Watson Lake is best known for the Sign Post Forest — tens of thousands of signs left by travellers from around the world, started by a homesick soldier in 1942. It remains a key stop for anyone driving the historic Alaska Highway.',

  actions: [
    { label: 'Explore Watson Lake', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.1K (2021)' },
    { label: 'Known For', value: 'Sign Post Forest' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈4 h 30 min by car' },
    { label: 'To BC border', value: '≈20 min by car' },
  ],

  badges: ['Sign Post Forest', 'Alaska Highway', 'Northern Lights'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1,133', label: 'People in Watson Lake in the 2021 census — up 4.6% in five years', level: 'safe' },
    { value: '1942', label: 'Year a homesick soldier building the Alaska Highway started the Sign Post Forest', level: 'gold' },
    { value: '80K+', label: 'Signs estimated in the Sign Post Forest, growing every year', level: 'purple' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Services, shops and the visitor centre along the highway' },
    { name: 'Sign Post Forest', icon: '🪧', tag: '🪧 Landmark', tagLevel: 'purple', meta: 'Rows of signs stretching through the trees downtown' },
    { name: 'Alaska Highway Corridor', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'blue', meta: 'Motels, fuel stops and services along the historic route' },
    { name: 'Watson Lake (the lake)', icon: '🏞️', tag: '🏞️ Nature', tagLevel: 'safe', meta: 'The lake the town is named for, just outside town' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Historic', tagLevel: 'olive', meta: 'Site of a key WWII-era Alaska Highway airfield' },
  ],

  attractions: [
    {
      name: 'Sign Post Forest',
      icon: '🪧',
      text: 'Tens of thousands of signs — license plates, hometown markers and handmade boards — left by travellers since 1942. Bring your own to add to the collection.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Northern Lights Centre',
      icon: '🌌',
      text: 'A planetarium-style theatre focused on the aurora borealis and northern astronomy — a good stop if you’re not visiting in aurora season.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Family', level: 'purple' }],
    },
    {
      name: 'Alaska Highway History',
      icon: '🛣️',
      text: 'Watson Lake was a key supply point during the 1942 construction of the Alaska Highway — exhibits at the visitor centre cover this wartime engineering feat.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Watson Lake',
      icon: '🏞️',
      text: 'The lake itself, just outside town, offers fishing and quiet shoreline away from the highway bustle.',
      tags: [{ label: 'Fishing', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Add Your Own Sign',
      icon: '✍️',
      text: 'A local tradition: bring a sign from home — a license plate, a street sign, anything — and nail it up alongside tens of thousands of others.',
      tags: [{ label: 'Tradition', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Lakes and the Open Highway',
  outdoor: [
    { icon: '🎣', name: 'Fishing', dist: 'Watson Lake', text: 'Lake trout and other northern species.' },
    { icon: '🚗', name: 'Alaska Highway Drive', dist: 'Through town', text: 'One of the great North American road trips.' },
    { icon: '🥾', name: 'Lakeside Trails', dist: 'Near town', text: 'Short walking trails around the lake and townsite.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Outside town', text: 'Clear, dark skies away from the few streetlights.' },
    { icon: '🛶', name: 'Paddling', dist: 'Watson Lake', text: 'Canoeing on calm water in summer.' },
    { icon: '🦌', name: 'Wildlife Watching', dist: 'Highway corridor', text: 'Moose, bears and other wildlife along the roads.' },
  ],

  food: [
    { icon: '🍔', title: 'Highway Diners', area: 'Along Alaska Hwy', areaLevel: 'gold', text: 'Classic road-trip stops for travellers.' },
    { icon: '🐟', title: 'Lake Fish', area: 'Local menus', areaLevel: 'blue', text: 'Freshly caught lake trout where available.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee and quick bites near the visitor centre.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Northern specialties like caribou.' },
    { icon: '🛒', title: 'Grocery Stop', area: 'Downtown', areaLevel: 'olive', text: 'The last major supplies before long highway stretches.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries from the surrounding forest.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Quiet', text: 'Snowmelt and a slow build-up to the summer travel season.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Highway season', text: 'Peak road-trip traffic and long daylight hours.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Slowing down', text: 'Traffic thins out as the highway season winds down.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 3, note: 'Aurora season', text: 'Cold and quiet, with good odds for the northern lights.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Watson Lake sits at the junction of the Alaska Highway and the Campbell Highway, a classic stop for Alaska-bound road trips.',
      time: '≈4 h 30 min from Whitehorse',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Watson Lake Airport (YQH) has limited scheduled service, mainly connecting through Whitehorse.',
      time: 'Limited flights',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Seasonal and charter coach services sometimes stop in Watson Lake along the Alaska Highway. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No passenger rail serves Watson Lake.',
      time: 'No rail service',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Near the Sign Post Forest',
      text: 'Motels and inns within walking distance of the landmark.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Watson+Lake+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Watson%20Lake%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Alaska Highway',
      area: 'Through town',
      text: 'Roadside motels and campgrounds for highway travellers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Alaska+Highway+Watson+Lake', level: 'blue' },
      ],
    },
    {
      icon: '🏞️',
      title: 'Watson Lake Shoreline',
      area: 'Near the lake',
      text: 'Campgrounds close to the water.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Watson+Lake+campground+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Local Transit',
      text: 'Watson Lake has no public bus system — the town centre is small enough to walk, and a car is essential for the highway and surrounding area.',
      linkLabel: 'Yukon government',
      linkUrl: 'https://yukon.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the Sign Post Forest are an easy walk.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the lake and onward highway travel.' },
          { icon: '🚕', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Bring a sign from home to add to the forest — a street sign, licence plate or hand-painted board are all traditional contributions.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Watson Lake has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Watson Lake / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
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
      { icon: '🪧', label: 'Sign Post Forest: free' },
      { icon: '🏞️', label: 'Lakeside trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🗺️', title: 'Not the Arizona One', text: 'Add “Yukon” when searching — Watson Lake, Arizona often comes up first in photos and maps.' },
    { icon: '⛽', title: 'Fuel Up', text: 'Watson Lake is a key supply stop — fill up here before long, remote stretches of the Alaska Highway.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Highway conditions can be severe in winter — check road reports before travelling.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Watch for moose and other large animals on the highway, especially at dawn and dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse and Vancouver.' },
    { icon: '📶', title: 'Limited Services', text: 'This is a small highway town — cell coverage and services thin out quickly once you leave it.' },
    { icon: '🪶', title: 'Whose Land', text: 'Watson Lake is on the traditional territory of the Liard First Nation and the Ross River Dena Council.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Watson Lake Community Hospital', '817 Ravenhill Dr', 'Emergency: call 911 · Yukon HealthLine 811'] },
  ],
};

export default WATSON_LAKE;
