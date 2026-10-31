// Whitehorse — данные страницы /city/whitehorse (Уайтхорс, ЮКОН)
// Видео Уайтхорса в бесплатных банках нет (Pexels по запросу — только
// безымянные горные/городские ролики без привязки к месту). В шапке
// фото с Wikimedia Commons — подвесной мост (Robert Lowe Bridge, 1922)
// через изумрудный Юкон в Miles Canyon, популярное место рядом с городом,
// автор Prof Ranga Sai, 03.07.2026, CC0 (подпись не обязательна, но
// указана для консистентности с другими страницами). GPS 60.663, -135.029 —
// Miles Canyon, в черте City of Whitehorse, ≈10 км к югу от центра.
// Население — перепись 2021: город (CSD) 28 201 (+12.4% к 2016), census
// agglomeration 31 913. Город — 70.1% населения всего Юкона.
// Транспорт — Whitehorse Transit: с 01.07.2026 наличные $3.50, день $8,
// 10 билетов $33, месячный $87 (whitehorse.ca, поэтапное повышение).
// Налог — в Юконе нет территориального налога с продаж, только GST 5%
// (как в Альберте, СЗТ и Нунавуте). Городской гостиничный сбор не нашли —
// не утверждаем.
// Больница — Whitehorse General Hospital, 5 Hospital Rd, новое приёмное
// отделение открыто в январе 2018, заявлено как работающее 24/7.
// S.S. Klondike NHS — в сезоне 2026 судно и здания закрыты, территория
// открыта (parks.canada.ca). Takhini Hot Springs теперь называются Eclipse
// Nordic Hot Springs, только для взрослых 19+, ежедневно 9:00–22:30.
// Из общих знаний: Klondike Highway, SS Klondike как символ города,
// северное сияние, Golden Horseshoe/золотая лихорадка история, время
// в пути, статус столицы территории.

export const WHITEHORSE = {
  slug: 'whitehorse',
  name: 'Whitehorse',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Capital on the Yukon River',
  accentLevel: 'safe',
  heroIcon: '🐎',
  heroImage: '/Cities/Whitehorse/hero.jpg',
  heroCredit: 'Photo: Prof Ranga Sai / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.7212, lon: -135.0568 },
  subtitle: 'Gateway to the Yukon Wilderness',
  description:
    'Home to most of the territory’s people, Whitehorse sits on the banks of the Yukon River between forested hills, with the dramatic walls of Miles Canyon just south of downtown. It is a small, outdoorsy capital — a base for the Klondike Highway, the northern lights, and some of Canada’s wildest country.',

  actions: [
    { label: 'Explore Whitehorse', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈28K (2021)' },
    { label: 'Share of Yukon', value: '≈70% of the territory' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Skagway, AK', value: '≈2 h 30 min by car' },
    { label: 'To Dawson City', value: '≈6 h by car' },
  ],

  badges: ['Yukon River', 'Northern Lights', 'Miles Canyon'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '28,201', label: 'People in Whitehorse in the 2021 census — about 70% of all Yukoners', level: 'safe' },
    { value: '1922', label: 'Year the Miles Canyon suspension bridge was built', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST, no territorial tax', level: 'gold' },
    { value: '19+', label: 'Minimum age at the former Takhini, now Eclipse Nordic Hot Springs', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Main Street shops, the SS Klondike and the waterfront' },
    { name: 'Riverfront & Rotary Park', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Yukon River trail and the Millennium Bridge' },
    { name: 'Riverdale', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Quiet neighbourhood across the river from downtown' },
    { name: 'Miles Canyon', icon: '🌉', tag: '🌉 Landmark', tagLevel: 'purple', meta: 'Dramatic basalt canyon and footbridge just south of downtown' },
    { name: 'Whitehorse Airport Area', icon: '✈️', tag: '✈️ Hilltop', tagLevel: 'olive', meta: 'Above downtown, with viewpoints over the valley' },
    { name: 'Takhini & North Highway', icon: '♨️', tag: '♨️ Hot Springs', tagLevel: 'danger', meta: 'Route to the hot springs and the Klondike Highway north' },
  ],

  attractions: [
    {
      name: 'Miles Canyon',
      icon: '🌉',
      text: 'A short walk or drive from downtown: basalt cliffs frame the emerald Yukon River, crossed by a 1922 suspension footbridge. One of the city’s signature views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Must see', level: 'gold' }],
    },
    {
      name: 'S.S. Klondike National Historic Site',
      icon: '🚢',
      text: 'A restored Yukon River sternwheeler on the downtown waterfront. For the 2026 season the ship and buildings are closed, though the grounds remain open — check Parks Canada before planning an indoor visit.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Check status', level: 'caution' }],
    },
    {
      name: 'MacBride Museum of Yukon History',
      icon: '🏛️',
      text: 'Gold rush artifacts, wildlife displays and local history in the heart of downtown. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Yukon Wildlife Preserve',
      icon: '🦌',
      text: 'A drive-and-walk preserve north of the city with caribou, musk ox, moose and other northern species in large natural enclosures.',
      tags: [{ label: 'Family', level: 'danger' }, { label: 'Year-round', level: 'safe' }],
    },
    {
      name: 'Eclipse Nordic Hot Springs',
      icon: '♨️',
      text: 'Natural hot springs north of the city (formerly Takhini Hot Springs), now an adults-only (19+) Nordic-style spa, open daily.',
      tags: [{ label: '19+', level: 'caution' }, { label: 'Relaxing', level: 'purple' }],
    },
    {
      name: 'Northern Lights Viewing',
      icon: '🌌',
      text: 'On clear nights from late August to April, the aurora borealis can appear right over the city — drive a few minutes from the lights for a darker sky.',
      tags: [{ label: 'Seasonal', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
  ],

  outdoorHeading: 'River Trails and Northern Wilderness',
  outdoor: [
    { icon: '🚲', name: 'Millennium Trail', dist: 'Downtown', text: 'Riverside loop trail linking downtown and Riverdale.' },
    { icon: '🥾', name: 'Miles Canyon Trails', dist: '≈10 min', text: 'Trails along the canyon rim and down to the river.' },
    { icon: '🛶', name: 'Yukon River Paddling', dist: 'Downtown', text: 'Canoe and kayak trips on the river that once carried gold-rush steamboats.' },
    { icon: '⛷️', name: 'Mount Sima', dist: 'Near city', text: 'Local ski hill for downhill skiing and snowboarding.' },
    { icon: '🎿', name: 'Nordic Skiing', dist: 'Whitehorse trails', text: 'Extensive groomed cross-country ski trails in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Outside the city', text: 'Dark-sky spots a short drive from downtown.' },
  ],

  food: [
    { icon: '🐟', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Arctic char and grayling on local menus.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou, bison and other northern specialties.' },
    { icon: '☕', title: 'Cafés', area: 'Main Street', areaLevel: 'gold', text: 'Coffee shops in the compact downtown.' },
    { icon: '🍺', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Yukon Brewing and other local breweries.' },
    { icon: '🧑‍🍳', title: 'Farmers’ Market', area: 'Summer Saturdays', areaLevel: 'safe', text: 'Local produce and crafts in the warmer months.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'The Yukon River ice breaks up; days lengthen fast.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'Long daylight hours for hiking, paddling and festivals.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Short season', text: 'A quick but colourful turn before winter sets in.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 4, note: 'Aurora season', text: 'Cold and dark, but prime time for the northern lights and winter sports.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Erik Nielsen Whitehorse International Airport (YXY) has flights to Vancouver, Calgary and other hubs.',
      time: '≈10 min to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Alaska Highway runs through Whitehorse, linking it to British Columbia and Alaska; the Klondike Highway heads north to Dawson City.',
      time: '≈6 h to Dawson City',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Seasonal coach and shuttle services connect Whitehorse with Skagway, Alaska, and other Yukon communities. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No scheduled passenger rail serves Whitehorse; the historic White Pass railway runs seasonal excursions from Skagway, not through to the city.',
      time: 'No direct rail',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Main Street and the riverfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whitehorse+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Whitehorse%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '✈️',
      title: 'Airport Area',
      area: 'Near YXY',
      text: 'Hotels convenient for early flights.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whitehorse+Airport', level: 'blue' },
      ],
    },
    {
      icon: '♨️',
      title: 'Takhini / North Highway',
      area: '≈25 min away',
      text: 'Lodges and cabins near the hot springs and wildlife preserve.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Takhini+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Whitehorse Transit',
      text: 'Whitehorse Transit runs city buses across downtown, Riverdale and the suburbs. Fares rose as part of a phased increase approved in the city’s 2026–2028 operating budget.',
      linkLabel: 'Whitehorse Transit',
      linkUrl: 'https://www.whitehorse.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares effective July 1, 2026. Drivers do not carry change — bring exact fare.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $3.50 (exact cash)', 'Day pass: $8', '10 tickets: $33', 'Monthly pass: $87'],
        },
        linkLabel: 'Whitehorse Transit',
        linkUrl: 'https://www.whitehorse.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is small and walkable.' },
          { icon: '🚌', title: 'Bus', text: 'Covers downtown, Riverdale and suburban areas.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Miles Canyon, the hot springs and day trips.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Aurora tip:',
      text: 'For northern lights, check the forecast, dress warmly, and drive a few minutes outside the city lights for the darkest skies.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Yukon has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site. We could not confirm any separate municipal accommodation levy in Whitehorse.',
    comparison: [
      { label: 'Whitehorse / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '♨️', label: 'Hot springs & tours: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌉', label: 'Miles Canyon trails: free' },
      { icon: '🌌', label: 'Northern lights viewing: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🌌', title: 'Aurora Season', text: 'Northern lights are best seen from late August to April, away from city lights, on clear nights.' },
    { icon: '❄️', title: 'Serious Cold', text: 'Winter temperatures regularly drop well below freezing — dress in layers and watch for frostbite warnings.' },
    { icon: '☀️', title: 'Midnight Sun', text: 'In midsummer, Whitehorse gets nearly 19 hours of daylight — pack an eye mask if you need dark to sleep.' },
    { icon: '🧊', title: 'Winter Driving', text: 'Highways can close or ice over in winter — check road conditions before long drives.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Vancouver.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Moose and other large animals cross highways, especially at dawn and dusk — drive carefully outside town.' },
    { icon: '🪶', title: 'Whose Land', text: 'Whitehorse is on the traditional territory of the Kwanlin Dün First Nation and the Ta’an Kwäch’än Council.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Whitehorse General Hospital', '5 Hospital Rd', 'Emergency department · call 911 · Yukon HealthLine 811'] },
  ],
};

export default WHITEHORSE;
