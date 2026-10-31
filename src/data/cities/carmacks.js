// Carmacks — данные страницы /city/carmacks (Кармакс, ЮКОН)
// Видео Кармакса в бесплатных банках нет (Pexels по запросу — только
// безымянные горные/дорожные ролики). В шапке фото с Wikimedia Commons —
// Five Finger Rapids на реке Юкон, знаковое место примерно в 20 км от
// посёлка (ниже по течению, к северу — реки здесь текут на север),
// автор Bo Mertz, 08.08.2011, CC BY-SA 2.0 (GPS 62.273, -136.343 —
// соответствует описанию "к северу от Carmacks"). Лицензия требует автора.
// Население — перепись 2021: деревня (village) 588 (+19.3% к 2016, 493);
// отдельно населённый пункт Carmacks Landing — 206 человек, не объединяем.
// Медцентр — Carmacks Health Centre, 106 River Drive, две медсестры
// (не больница с приёмным покоем).
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.
// Из общих знаний: посёлок на пересечении Klondike Highway и Campbell
// Highway; название — в честь золотоискателя George Carmack, одного из
// первооткрывателей клондайкского золота; историческая угольная добыча
// и пароходная остановка; гора Tantalus Butte над посёлком; Little
// Salmon/Carmacks First Nation; река Nordenskiold впадает в Юкон рядом;
// время в пути.

export const CARMACKS = {
  slug: 'carmacks',
  name: 'Carmacks',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Yukon River Crossroads',
  accentLevel: 'blue',
  heroIcon: '🛶',
  heroImage: '/Cities/Carmacks/hero.jpg',
  heroCredit: 'Photo: Bo Mertz / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.1064, lon: -136.2919 },
  subtitle: 'Riverboat Town at the Highway Crossroads',
  description:
    'A small village where the Klondike and Campbell highways meet the Yukon River, Carmacks grew up as a coal-mining and riverboat stop and takes its name from gold-rush prospector George Carmack. Today it’s best known as the access point for Five Finger Rapids, a dramatic set of rock pillars that once challenged paddle-wheelers heading north.',

  actions: [
    { label: 'Explore Carmacks', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈590 (2021)' },
    { label: 'Known For', value: 'Five Finger Rapids' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈2 h by car' },
    { label: 'To Dawson City', value: '≈4 h by car' },
  ],

  badges: ['Five Finger Rapids', 'Yukon River', 'Highway Junction'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '588', label: 'People in Carmacks in the 2021 census — up 19.3% in five years', level: 'blue' },
    { value: '≈20 km', label: 'Distance to Five Finger Rapids, downstream on the Yukon River', level: 'gold' },
    { value: '5', label: 'Rock channels that split the river at Five Finger Rapids — only one is passable', level: 'purple' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Village Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Services, the general store and the highway junction' },
    { name: 'Yukon River Waterfront', icon: '🛶', tag: '🛶 River', tagLevel: 'blue', meta: 'Boat launch and river access at the heart of the village' },
    { name: 'Tantalus Butte', icon: '⛰️', tag: '⛰️ Landmark', tagLevel: 'olive', meta: 'The hill overlooking town, tied to the area’s coal-mining past' },
    { name: 'Five Finger Rapids', icon: '🪨', tag: '🪨 Landmark', tagLevel: 'purple', meta: 'Rock pillars splitting the Yukon River downstream' },
    { name: 'Little Salmon/Carmacks Territory', icon: '🪶', tag: '🪶 First Nation', tagLevel: 'danger', meta: 'Traditional territory surrounding the village' },
  ],

  attractions: [
    {
      name: 'Five Finger Rapids',
      icon: '🪨',
      text: 'Four rock pillars split the Yukon River into five channels — only the easternmost is passable by boat. A viewing platform and stairs overlook the rapids from a roadside stop on the Klondike Highway.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Tantalus Butte',
      icon: '⛰️',
      text: 'The hill above the village, once mined for coal that fuelled Yukon River sternwheelers — now a scenic backdrop for Carmacks.',
      tags: [{ label: 'Views', level: 'blue' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Yukon River Paddling',
      icon: '🛶',
      text: 'Carmacks is a popular stop for canoeists paddling the Yukon River from Whitehorse toward Dawson City — a journey of several days.',
      tags: [{ label: 'Multi-day', level: 'caution' }, { label: 'Classic route', level: 'gold' }],
    },
    {
      name: 'Carmacks Visitor Information Centre',
      icon: 'ℹ️',
      text: 'Local history, First Nation culture and trip-planning advice for the surrounding region. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Little Salmon Lake',
      icon: '🎣',
      text: 'A quiet lake south of the village, popular for fishing and camping away from the highway.',
      tags: [{ label: 'Fishing', level: 'safe' }, { label: 'Camping', level: 'olive' }],
    },
  ],

  outdoorHeading: 'River Rapids and Highway Country',
  outdoor: [
    { icon: '🪨', name: 'Five Finger Rapids Viewpoint', dist: '≈20 km north', text: 'Stairs down to a platform overlooking the rock channels.' },
    { icon: '🛶', name: 'Yukon River Paddling', dist: 'From the village', text: 'A classic stretch of the long canoe route to Dawson City.' },
    { icon: '🎣', name: 'Fishing', dist: 'Little Salmon Lake', text: 'Lake trout and other northern species.' },
    { icon: '🥾', name: 'Tantalus Butte Trails', dist: 'Above the village', text: 'Short walks with views over the Yukon River valley.' },
    { icon: '🚗', name: 'Campbell Highway', dist: 'From the junction', text: 'A quieter route east toward Faro and Ross River.' },
    { icon: '🦌', name: 'Wildlife Watching', dist: 'Surrounding area', text: 'Moose and other wildlife along the river and highways.' },
  ],

  food: [
    { icon: '🍔', title: 'Highway Diners', area: 'Village centre', areaLevel: 'gold', text: 'Simple stops for Klondike Highway travellers.' },
    { icon: '🐟', title: 'River Fish', area: 'Local menus', areaLevel: 'blue', text: 'Yukon River salmon where available.' },
    { icon: '☕', title: 'Cafés', area: 'Village centre', areaLevel: 'purple', text: 'Coffee and quick bites near the highway junction.' },
    { icon: '🛒', title: 'General Store', area: 'Village centre', areaLevel: 'olive', text: 'Basic groceries and supplies for the road.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'The Yukon River ice breaks up; the canoe season hasn’t started yet.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'River season', text: 'Peak time for paddling, road trips and visiting the rapids.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Quiet', text: 'Traffic and river trips wind down as the season turns.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'A frozen river and a small, quiet highway community.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Carmacks sits where the Klondike Highway (to Dawson City) meets the Campbell Highway (to Faro and Watson Lake).',
      time: '≈2 h from Whitehorse',
    },
    {
      icon: '🛶',
      title: 'By River',
      text: 'A common overnight stop for canoeists and kayakers paddling the Yukon River from Whitehorse.',
      time: 'Multi-day trip',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Seasonal or charter coach services sometimes stop here along the Klondike Highway. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Carmacks has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Village Centre',
      area: 'Walkable',
      text: 'Motels near the highway junction and general store.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Carmacks+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Carmacks%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🪨',
      title: 'Five Finger Rapids',
      area: '≈20 min away',
      text: 'A roadside campground near the viewpoint.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Five+Finger+Rapids+Yukon', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Little Salmon Lake',
      area: 'South of the village',
      text: 'A quieter campground near the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Little+Salmon+Lake+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Local Transit',
      text: 'Carmacks has no public bus system — the village centre is a short walk, and a car (or canoe) covers the rest.',
      linkLabel: 'Yukon government',
      linkUrl: 'https://yukon.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The village centre is a few short blocks.' },
          { icon: '🚗', title: 'Car', text: 'Needed to reach Five Finger Rapids and onward highways.' },
          { icon: '🛶', title: 'Canoe', text: 'Many visitors arrive and leave by river.' },
          { icon: '🚕', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Rapids tip:',
      text: 'The Five Finger Rapids viewpoint involves a steep staircase down and back up — wear good shoes and take your time.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Carmacks has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Carmacks / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
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
      { icon: '🪨', label: 'Five Finger Rapids viewpoint: free' },
      { icon: '🛶', label: 'River access: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '⛽', title: 'Fuel Up', text: 'Carmacks is a key supply stop between Whitehorse and Dawson City — fill up here.' },
    { icon: '🛶', title: 'River Safety', text: 'The Yukon River current is strong and cold — paddlers should be well prepared and watch conditions at Five Finger Rapids.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Watch for moose and other large animals on the highways, especially at dawn and dusk.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Highway conditions can be severe in winter — check road reports before travelling.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '📶', title: 'Limited Services', text: 'This is a small highway village — cell coverage and services thin out once you leave it.' },
    { icon: '🪶', title: 'Whose Land', text: 'Carmacks is on the traditional territory of the Little Salmon/Carmacks First Nation.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Carmacks Health Centre', '106 River Dr', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default CARMACKS;
