// Grand Falls-Windsor — данные страницы /city/grand-falls-windsor (Грэнд-
// Фолс-Виндзор, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Видео в бесплатных банках нет (Pexels по запросу "Grand Falls" выдаёт
// в основном Grand Rapids, Ниагарский и Гранд-Фолс в Аризоне — не те
// города). В шапке фото с Wikimedia Commons — центр города с воздуха,
// река Exploits на фоне, автор Quintin Soloviev, 25.06.2026, CC BY 4.0
// (GPS 48.929, -55.660 — совпадает с городом; подпись к файлу называет
// население 13 853, совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: 13 853 (-2.2% к 2016, 14171); другие
// агрегаторы дают заметно отличающиеся цифры (14287, 11986) с разной
// методикой — используем показатель Wikipedia/StatCan.
// История: два посёлка — Grand Falls (вокруг бумажного комбината) и
// Windsor — объединены в единый город (точный год слияния не нашли
// подтверждённым источником, не указываем конкретную дату). Комбинат
// AbitibiBowater (столетний newsprint mill) закрылся в 2009 году,
// лишив работы ~450 постоянных и ~500 сезонных/частично занятых
// сотрудников.
// Demasduit Regional Museum (бывший Mary March Provincial Museum) —
// переименован в 2022 году в честь Demasduit, беотукской женщины,
// которую похититель Джон Пейтон-младший назвал "Mary March"; новое
// имя выбрано, чтобы отличаться от Beothuk Interpretation Centre.
// Больница — Central Newfoundland Regional Health Centre, 50 Union St,
// 130 коек, ER заявлено 24/7 (данные стороннего агрегатора, не
// официального сайта — указываем с оговоркой).
// Транспорт: собственного городского автобуса не нашли; межгородской —
// DRL Coachlines по Trans-Canada Highway.
// Налог — HST 15%.
// Из общих знаний: река Exploits (лосось, самая длинная река острова),
// Salmonid Interpretation Centre, статус Grand Falls-Windsor как
// регионального центра центрального Ньюфаундленда, время в пути.

export const GRAND_FALLS_WINDSOR = {
  slug: 'grand-falls-windsor',
  name: 'Grand Falls-Windsor',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Heart of the Exploits Valley",
  accentLevel: 'danger',
  heroIcon: '🐟',
  heroImage: '/Cities/GrandFallsWindsor/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.9333, lon: -55.6625 },
  subtitle: "Regional Hub on the Exploits River",
  description:
    "Grand Falls-Windsor grew up around a century-old newsprint mill on the Exploits River, Newfoundland's longest river and one of its best Atlantic salmon runs. Today it's the commercial and service hub for central Newfoundland, with the Demasduit Regional Museum telling the region's Beothuk and settler history.",

  actions: [
    { label: 'Explore Grand Falls-Windsor', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈14K (2021)' },
    { label: 'Known For', value: 'Exploits River Salmon' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Newfoundland (UTC-3:30/-2:30)' },
    { label: 'To Gander', value: '≈50 min by car' },
    { label: "To St. John's", value: '≈4 h 30 min by car' },
  ],

  badges: ['Exploits River', 'Salmon Capital', 'Central NL Hub'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '13,853', label: 'People in the town in the 2021 census', level: 'danger' },
    { value: '2009', label: 'Year the century-old newsprint mill closed, ending AbitibiBowater’s operations here', level: 'purple' },
    { value: '2022', label: 'Year the Mary March Museum was renamed the Demasduit Regional Museum', level: 'blue' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, restaurants and civic buildings' },
    { name: 'Former Grand Falls', icon: '🏭', tag: '🏭 Mill Town', tagLevel: 'purple', meta: 'The original company town built around the paper mill' },
    { name: 'Former Windsor', icon: '🏘️', tag: '🏘️ Residential', tagLevel: 'olive', meta: 'The neighbouring community merged into today’s town' },
    { name: 'Exploits River', icon: '🎣', tag: '🎣 River', tagLevel: 'blue', meta: 'Newfoundland’s longest river, running through the town' },
    { name: 'Mount Peyton Area', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'safe', meta: 'Services and hotels along the Trans-Canada Highway' },
  ],

  attractions: [
    {
      name: 'Demasduit Regional Museum',
      icon: '🏛️',
      text: 'Formerly the Mary March Museum, renamed in 2022 to honour Demasduit, a Beothuk woman — covering Beothuk history and the region’s settler and industrial past.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Salmonid Interpretation Centre',
      icon: '🐟',
      text: 'An underwater viewing area on the Exploits River where you can watch Atlantic salmon migrate upstream — a highlight for visitors in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Exploits River',
      icon: '🎣',
      text: "Newfoundland's longest river and one of its top Atlantic salmon rivers, running right through town.",
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Iconic', level: 'purple' }],
    },
    {
      name: 'Former Paper Mill Site',
      icon: '🏭',
      text: 'The town grew up around a century-old newsprint mill that closed in 2009 — its legacy still shapes the downtown and local identity.',
      tags: [{ label: 'History', level: 'olive' }, { label: 'View only', level: 'caution' }],
    },
    {
      name: 'Central Newfoundland Day Trips',
      icon: '🚗',
      text: 'A convenient base for exploring central Newfoundland, including nearby lakes, trails and smaller communities along the Exploits Valley.',
      tags: [{ label: 'Regional hub', level: 'blue' }, { label: 'Day trips', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Rivers, Lakes and the Exploits Valley',
  outdoor: [
    { icon: '🎣', name: 'Exploits River Salmon Fishing', dist: 'In town', text: 'Licensed Atlantic salmon angling on one of the island’s top rivers.' },
    { icon: '👀', name: 'Salmonid Interpretation Centre', dist: 'In town', text: 'Watch salmon migrate through an underwater viewing window.' },
    { icon: '🥾', name: 'Trails', dist: 'Around town', text: 'Walking and cycling trails along the river and through town.' },
    { icon: '🛶', name: 'Paddling', dist: 'Exploits River', text: 'Canoeing and kayaking on calmer stretches.' },
    { icon: '🍁', name: 'Fall Colour', dist: 'Exploits Valley', text: 'Vivid boreal foliage across the surrounding hills.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter activity on nearby trail networks.' },
  ],

  food: [
    { icon: '🐟', title: 'Atlantic Salmon', area: 'Local menus', areaLevel: 'blue', text: 'From the Exploits River, when in season.' },
    { icon: '🦞', title: 'Seafood', area: 'Local restaurants', areaLevel: 'danger', text: 'Cod, crab and other Atlantic catches.' },
    { icon: '🍻', title: 'Pubs', area: 'Downtown', areaLevel: 'purple', text: 'Local bars and casual dining.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops in the town centre.' },
    { icon: '🥧', title: 'Jiggs Dinner & Toutons', area: 'Local restaurants', areaLevel: 'safe', text: 'Traditional Newfoundland comfort food.' },
    { icon: '🫐', title: 'Partridgeberries', area: 'Fall', areaLevel: 'olive', text: 'A Newfoundland fall specialty, in jams and desserts.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'The Exploits River runs high with snowmelt.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Salmon run', text: 'Peak season for salmon viewing, fishing and river trails.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Bright boreal colour across the Exploits Valley.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Cold and snowy, with good snowmobile trails nearby.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway runs through town, roughly midway across the island of Newfoundland.',
      time: '≈50 min from Gander',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'The nearest airport with scheduled service is Gander International Airport (YQX), about 50 minutes away.',
      time: '≈50 min from YQX',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'DRL Coachlines runs a daily intercity coach across Newfoundland, stopping in Grand Falls-Windsor. There is no local city bus system.',
      time: 'Check DRL schedule',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries from Nova Scotia dock several hours away, at Port aux Basques or Argentia.',
      time: 'Several hours’ drive from the ferry',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and motels near the town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Grand+Falls-Windsor+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Grand%20Falls-Windsor%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Trans-Canada Highway',
      area: 'Near Mount Peyton',
      text: 'Chain hotels convenient for road trips across the island.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Grand+Falls-Windsor+highway', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Exploits River',
      area: 'Nearby',
      text: 'Fishing lodges and cabins along the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Exploits+River+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No Local Transit',
      text: "Grand Falls-Windsor has no municipal bus system — a car or taxi is the way to get around town, and DRL Coachlines connects it to the rest of the island.",
      linkLabel: 'Town of Grand Falls-Windsor',
      linkUrl: 'https://www.grandfallswindsor.com/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact and walkable.' },
          { icon: '🚕', title: 'Taxis', text: 'The main way to get around town.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the river, lakes and day trips.' },
          { icon: '🚌', title: 'Intercity Bus', text: 'DRL Coachlines connects to other Newfoundland towns.' },
        ],
      },
    ],
    proTip: {
      label: 'Salmon tip:',
      text: 'Visit the Salmonid Interpretation Centre in summer to watch salmon migrate upstream through an underwater viewing window — timing depends on the run.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services, including hotel stays in Grand Falls-Windsor.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Grand Falls-Windsor / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', label: 'Museum admission: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '👀', label: 'Salmonid Interpretation Centre: free' },
      { icon: '🎣', label: 'Riverside walking: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🎣', title: 'Fishing Licences', text: 'Atlantic salmon angling on the Exploits River requires a Newfoundland & Labrador licence and follows seasonal rules.' },
    { icon: '🚗', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no local bus network.' },
    { icon: '❄️', title: 'Winter Driving', text: 'The Trans-Canada through central Newfoundland can see heavy snow — check conditions before long drives.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Moose are common on central Newfoundland highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Newfoundland Time: UTC-3:30 in winter, UTC-2:30 in summer — a half-hour offset unique to the island.' },
    { icon: '🏭', title: 'Mill History', text: 'The town’s identity is closely tied to its former paper mill, which closed in 2009 after a century of operation — a big part of local history and conversation.' },
    { icon: '🪶', title: 'Whose Land', text: "Grand Falls-Windsor is on the ancestral homeland of the Beothuk, and the island of Newfoundland is within the traditional territory of the Mi'kmaq." },
    { icon: '🏥', title: 'Medical Care', lines: ['Central Newfoundland Regional Health Centre', '50 Union St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default GRAND_FALLS_WINDSOR;
