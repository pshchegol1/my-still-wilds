// Corner Brook — данные страницы /city/corner-brook (Корнер-Брук, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Видео в бесплатных банках нет (Pexels не выдаёт релевантных клипов).
// В шапке фото с Wikimedia Commons — город с воздуха, залив Бэй-оф-Айлендс
// и горы на фоне, автор Quintin Soloviev, 24.06.2026, CC BY 4.0 (GPS
// 48.951, -57.958 — совпадает с центром Корнер-Брука). Подпись к файлу
// прямо называет население (19 316) — совпадает с переписью. Лицензия
// требует автора.
// Население — перепись 2021: город 19 333 (-2.4% к 2016, 19806); census
// agglomeration (CA) 29 762.
// Целлюлозно-бумажный комбинат: строительство начато в 1923 году
// (Newfoundland Pulp and Paper Co.), первая бумага — в 1925-м; посёлок
// при заводе спланирован по принципам "города-сада". В 1938 комбинат
// перешёл к Bowater-Lloyd, сделав город одним из самых процветающих в
// Атлантической Канаде; в 1984 Bowater ушла, завод купила Kruger Inc. —
// актуальный владелец. По данным CBC (июль 2025) — план инвестиций
// $700 млн к 100-летию завода. Современный город образован слиянием
// нескольких посёлков в 1956 году.
// Больница — Western Memorial Regional Hospital, новое здание по адресу
// 100 Health Care Crescent открыто для пациентов 2 июня 2024; с мая 2024
// при вызове скорой через больницу просят вешать трубку и звонить 911.
// Транспорт — Corner Brook Transit: по старым данным тариф для взрослых
// $3.25, работа Пн–Пт 7:00–18:00, без выходных; с 1 апреля 2026 заявлено
// расширение часов и вечерний/выходной транспорт по вызову (бюджет
// $826 тыс. на 2026) — почасовой график на 2026 не нашли, пишем
// "уточняйте", не называем точных часов.
// Marble Mountain (горнолыжный курорт, крупнейший в Атлантической Канаде)
// — в феврале 2025 провинция объявила приём предложений на продажу/аренду
// курорта; подтверждения завершения сделки на дату написания не нашли —
// пишем с оговоркой, не утверждаем нового владельца.
// Налог — HST 15%.
// Из общих знаний: статуя Captain James Cook (составлял карты залива в
// 1760-х), холмы Blow Me Down, река Humber, лосось на реке Humber,
// время в пути.

export const CORNER_BROOK = {
  slug: 'corner-brook',
  name: 'Corner Brook',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · The Paper City",
  accentLevel: 'safe',
  heroIcon: '🎿',
  heroImage: '/Cities/CornerBrook/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.9500, lon: -57.9522 },
  subtitle: "Newfoundland's Second City on the Bay of Islands",
  description:
    "Built around one of Canada's great pulp and paper mills, Corner Brook spreads up the hillsides above the Bay of Islands, with the Humber River running through town and the Long Range Mountains as a backdrop. It's the service hub for western Newfoundland and the gateway to skiing at Marble Mountain and salmon fishing on the Humber.",

  actions: [
    { label: 'Explore Corner Brook', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈19K (2021)' },
    { label: 'Metro Area', value: '≈30K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Newfoundland (UTC-3:30/-2:30)' },
    { label: 'To Gros Morne', value: '≈1 h 15 min by car' },
    { label: "To St. John's", value: '≈5 h 30 min by car' },
  ],

  badges: ['Bay of Islands', 'Marble Mountain', 'Humber River'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '19,333', label: 'People in the city in the 2021 census — about 30K across the metro area', level: 'safe' },
    { value: '1925', label: 'Year the first paper rolled off the line at the Corner Brook mill', level: 'gold' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'purple' },
    { value: '1956', label: 'Year several surrounding communities merged to form today’s city', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Main Street shops, cafés and the harbourfront' },
    { name: 'Townsite', icon: '🏘️', tag: '🏘️ Historic', tagLevel: 'purple', meta: 'The original company neighbourhood built for mill workers in the 1920s' },
    { name: 'Humber River', icon: '🎣', tag: '🎣 River', tagLevel: 'blue', meta: 'The salmon river running through the heart of the city' },
    { name: 'Steady Brook', icon: '⛷️', tag: '⛷️ Ski', tagLevel: 'danger', meta: 'Home to Marble Mountain, a short drive east of downtown' },
    { name: 'Bay of Islands Shore', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'safe', meta: 'Waterfront along the bay, with mountain views across the water' },
    { name: 'Mill District', icon: '🏭', tag: '🏭 Industry', tagLevel: 'olive', meta: 'The working pulp and paper mill that built the city' },
  ],

  attractions: [
    {
      name: 'Marble Mountain Resort',
      icon: '⛷️',
      text: 'The largest ski resort in Atlantic Canada, a short drive from downtown in Steady Brook. The resort’s ownership has been in transition — check current operating status and season dates before planning a trip.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Check status', level: 'caution' }],
    },
    {
      name: 'Captain James Cook Monument',
      icon: '🧭',
      text: 'A memorial honouring Captain Cook, who charted the Bay of Islands in the 1760s before his Pacific voyages — with sweeping views over the city and bay.',
      tags: [{ label: 'Views', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Humber River Salmon Fishing',
      icon: '🎣',
      text: 'One of Newfoundland’s best-known Atlantic salmon rivers, running right through the city.',
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Seasonal', level: 'purple' }],
    },
    {
      name: 'Corner Brook Museum & Archives',
      icon: '🏛️',
      text: 'Local and mill history, including the story of the paper company town built here in the 1920s. Check hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
    },
    {
      name: 'Blow Me Down Mountains',
      icon: '🏔️',
      text: 'Across the Bay of Islands, these rugged hills offer hiking and dramatic views back over Corner Brook and the water.',
      tags: [{ label: 'Day trip', level: 'danger' }, { label: 'Hiking', level: 'safe' }],
    },
    {
      name: 'Bay of Islands',
      icon: '⚓',
      text: 'The deep fjord-like bay the city sits on, ringed by mountains — explore by boat tour or along the waterfront.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Boat tours', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Mountains, Rivers and the Bay',
  outdoor: [
    { icon: '⛷️', name: 'Downhill Skiing', dist: 'Marble Mountain', text: 'The biggest ski hill in Atlantic Canada, with vertical to match.' },
    { icon: '🎣', name: 'Salmon Fishing', dist: 'Humber River', text: 'Licensed Atlantic salmon angling through the city and beyond.' },
    { icon: '🥾', name: 'Hiking', dist: 'Blow Me Down & area', text: 'Trails with views over the bay and mountains.' },
    { icon: '🚣', name: 'Paddling', dist: 'Bay of Islands', text: 'Kayaking and boat tours on the sheltered bay.' },
    { icon: '🚴', name: 'Trails', dist: 'Around the city', text: 'Walking and cycling paths along the waterfront and hills.' },
    { icon: '🏂', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter activity in the surrounding highlands.' },
  ],

  food: [
    { icon: '🦞', title: 'Seafood', area: 'Local restaurants', areaLevel: 'danger', text: 'Cod, crab and other Atlantic catches.' },
    { icon: '🐟', title: 'Atlantic Salmon', area: 'Local menus', areaLevel: 'blue', text: 'From the Humber River, when in season.' },
    { icon: '🍻', title: 'Pubs', area: 'Downtown', areaLevel: 'purple', text: 'Local bars and casual dining.' },
    { icon: '☕', title: 'Cafés', area: 'Main Street', areaLevel: 'gold', text: 'Coffee shops in the downtown core.' },
    { icon: '🥧', title: 'Jiggs Dinner & Toutons', area: 'Local restaurants', areaLevel: 'safe', text: 'Traditional Newfoundland comfort food.' },
    { icon: '🫐', title: 'Partridgeberries', area: 'Fall', areaLevel: 'olive', text: 'A Newfoundland fall specialty, in jams and desserts.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'Snow retreats from the hills; the Humber River runs high.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the bay, hiking and salmon fishing.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Vivid fall colour across the surrounding mountains.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Reliable snow for Marble Mountain and winter trails.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Deer Lake Regional Airport (YDF), about 50 minutes away, has flights to Halifax and Toronto — the main gateway for western Newfoundland.',
      time: '≈50 min from Deer Lake Airport',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries from Nova Scotia dock at Port aux Basques, about 2.5 hours south along the Trans-Canada Highway.',
      time: '≈2 h 30 min from Port aux Basques',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway runs through Corner Brook, linking Gros Morne National Park to the north and St. John’s across the island.',
      time: '≈1 h 15 min to Gros Morne',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coach options across the island are limited. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Main Street and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Corner+Brook+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Corner%20Brook%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Marble Mountain / Steady Brook',
      area: '≈10 min away',
      text: 'Lodges and inns near the ski resort.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Steady+Brook+Newfoundland', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Humber Valley',
      area: 'Near Deer Lake',
      text: 'Fishing lodges and cabins along the Humber River.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Humber+Valley+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Corner Brook Transit',
      text: 'City buses run on weekday schedules, with an on-demand evening and weekend service expanded from April 2026. Check the city website for current routes and times.',
      linkLabel: 'Corner Brook Transit',
      linkUrl: 'https://www.cornerbrook.com/bus-transit/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares as last posted by the city. Hours have been expanding — confirm current schedule before relying on evening or weekend service.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $3.25', '5-ride card: $13.50', 'Children under 12: $2.00', 'On-demand evenings/weekends: check city site'],
        },
        linkLabel: 'Bus & transit info',
        linkUrl: 'https://www.cornerbrook.com/bus-transit/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is hilly but walkable.' },
          { icon: '🚌', title: 'Bus', text: 'Covers the city on weekday and expanding evening/weekend schedules.' },
          { icon: '🚗', title: 'Car', text: 'Useful for Marble Mountain, Gros Morne and day trips.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Gros Morne tip:',
      text: 'Corner Brook makes a good base for Gros Morne National Park — about 1 h 15 min north, easily a full-day round trip.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services, including hotel stays in Corner Brook.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Corner Brook / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '⛷️', label: 'Ski lift tickets: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🧭', label: 'Captain Cook Monument: free' },
      { icon: '⚓', label: 'Waterfront walking: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing and ski guides: 10–15%.',
  },

  practical: [
    { icon: '⛷️', title: 'Check Marble Mountain Status', text: "The resort's ownership has been in transition since the province sought a buyer in 2025 — confirm current season dates and operations before visiting." },
    { icon: '🎣', title: 'Fishing Licences', text: 'Atlantic salmon angling on the Humber requires a Newfoundland & Labrador licence and follows seasonal rules.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Snow is heavy and reliable here — winter tires and caution are essential on the Trans-Canada and local hills.' },
    { icon: '🌫️', title: 'Bay Weather', text: 'Weather can change fast on the Bay of Islands — check forecasts before boat trips or hikes.' },
    { icon: '⏰', title: 'Time Zone', text: 'Newfoundland Time: UTC-3:30 in winter, UTC-2:30 in summer — a half-hour offset unique to the island.' },
    { icon: '⛰️', title: 'Hilly Streets', text: 'Downtown and the surrounding neighbourhoods are built on steep terrain — good footwear helps in winter.' },
    { icon: '🪶', title: 'Whose Land', text: "Corner Brook is on the ancestral homeland of the Beothuk, and the island of Newfoundland is within the traditional territory of the Mi'kmaq." },
    { icon: '🏥', title: 'Medical Care', lines: ['Western Memorial Regional Hospital', '100 Health Care Crescent', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default CORNER_BROOK;
