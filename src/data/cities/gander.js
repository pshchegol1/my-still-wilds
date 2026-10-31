// Gander — данные страницы /city/gander (Гандер, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Видео в бесплатных банках нет (Pexels — безымянные города и гуси).
// В шапке фото с Wikimedia Commons — интерьер международного зала
// аэропорта Гандера (знаменитый терминал 1959 года с муралом Kenneth
// Lochhead), автор Samuell, 03.07.2025, CC BY 4.0 (GPS 48.947, -54.575 —
// совпадает с аэропортом). Лицензия требует автора.
// Население — перепись 2021: 11 880 (+1.6% к 2016, 11688); отдельно
// population centre — 9 918 (другая методика, не смешиваем).
// История: Гандер построен вокруг крупного аэродрома, стратегически
// важного для трансатлантических перелётов (дозаправка) с 1930-х/40-х.
// 11 сентября 2001 — 38 рейсов перенаправлены в Гандер в рамках Operation
// Yellow Ribbon (второе место после Галифакса с 47 рейсами), ≈6500–7000
// пассажиров и экипажей приняты жителями на несколько дней. История легла
// в основу мюзикла Come From Away (премьера на Бродвее в 2017, 7
// номинаций Tony, выигран приз за режиссуру); есть экранизация на
// Apple TV.
// North Atlantic Aviation Museum — рядом с больницей на Trans-Canada Hwy,
// открыт с 1996 года, статичные экспонаты включают F-101 Voodoo,
// Lockheed Hudson, Canso.
// Больница — James Paton Memorial Regional Health Centre, 125 Trans-
// Canada Hwy; ER заявлено 24/7 с постоянным врачебным покрытием (данные
// стороннего агрегатора, адрес и телефон не из официального сайта
// больницы — указываем с лёгкой оговоркой).
// Налог — HST 15%; с 1 апреля 2026 города введён Tourism Accommodation
// Tax 4% на проживание (ожидаемый сбор ≈$500 тыс/год, партнёрство
// объявлено 11.03.2026, предельная ставка по закону — тоже 4%).
// Транспорт: собственного городского транспорта практически нет (такси
// и ограниченные местные услуги); межгородской автобус — DRL Coachlines.
// Из общих знаний: озеро Gander Lake, река Gander River (сплав/рыбалка),
// военное кладбище CWGC, время в пути.

export const GANDER = {
  slug: 'gander',
  name: 'Gander',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Crossroads of the World",
  accentLevel: 'purple',
  heroIcon: '✈️',
  heroImage: '/Cities/Gander/hero.jpg',
  heroCredit: 'Photo: Samuell / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.9569, lon: -54.6089 },
  subtitle: "The Town Behind Come From Away",
  description:
    "Built around one of the world's most important mid-20th-century airports, Gander became famous far beyond Newfoundland on September 11, 2001, when its residents took in thousands of stranded travellers — the true story behind the hit musical Come From Away. Today it's a quiet lakeside town with a mid-century aviation terminal still worth a visit.",

  actions: [
    { label: 'Explore Gander', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈12K (2021)' },
    { label: 'Known For', value: "9/11 Hospitality · Come From Away" },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Newfoundland (UTC-3:30/-2:30)' },
    { label: 'To Gander Lake', value: 'Right in town' },
    { label: "To St. John's", value: '≈4 h by car' },
  ],

  badges: ['Operation Yellow Ribbon', 'Historic Airport', 'Gander Lake'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '38', label: 'Flights diverted to Gander on September 11, 2001 — second only to Halifax', level: 'purple' },
    { value: '≈6,600', label: 'Stranded passengers and crew taken in by the town over several days', level: 'gold' },
    { value: '11,880', label: 'People living in Gander in the 2021 census', level: 'blue' },
    { value: '4%', label: "Gander's new tourism accommodation tax, starting April 1, 2026", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, restaurants and the town’s main services' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Aviation', tagLevel: 'purple', meta: 'The historic terminal, aviation museum and hospital district' },
    { name: 'Gander Lake Shore', icon: '🏞️', tag: '🏞️ Lake', tagLevel: 'blue', meta: 'Waterfront right at the edge of town' },
    { name: 'Cooper Crescent & Residential', icon: '🏘️', tag: '🏘️ Residential', tagLevel: 'olive', meta: 'Where many 9/11 "plane people" stayed with local families' },
    { name: 'Gander River Corridor', icon: '🎣', tag: '🎣 River', tagLevel: 'safe', meta: 'A well-known salmon river running near the town' },
  ],

  attractions: [
    {
      name: 'Gander International Airport Terminal',
      icon: '✈️',
      text: "The mid-century modern international lounge, largely unchanged since 1959, with its original murals and furniture — a landmark that once welcomed Cold War-era leaders, celebrities and, on 9/11, thousands of stranded travellers.",
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Historic', level: 'purple' }],
    },
    {
      name: 'North Atlantic Aviation Museum',
      icon: '🛩️',
      text: 'A museum on the aviation history that built the town, with static aircraft including an F-101 Voodoo, a Lockheed Hudson and a Canso waterbomber.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
    },
    {
      name: 'Come From Away Sites',
      icon: '🎭',
      text: 'Visit the places behind the hit musical — locals can point you to spots tied to the 9/11 story, including the schools and community halls that sheltered stranded passengers.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Local guides', level: 'gold' }],
    },
    {
      name: 'Gander Lake',
      icon: '🏞️',
      text: "One of Newfoundland's largest lakes, right at the edge of town — good for a walk, a paddle or simply the view.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Scenic', level: 'blue' }],
    },
    {
      name: 'Gander River',
      icon: '🎣',
      text: 'A well-regarded Atlantic salmon river nearby, with local guides running traditional Gander River boat trips.',
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Seasonal', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Lakes, Rivers and Boreal Forest',
  outdoor: [
    { icon: '🏞️', name: 'Gander Lake', dist: 'In town', text: 'Shoreline walking and paddling right at the edge of town.' },
    { icon: '🎣', name: 'Gander River Fishing', dist: 'Nearby', text: 'Atlantic salmon angling with traditional river boats.' },
    { icon: '🥾', name: 'Trails', dist: 'Around town', text: 'Walking trails through boreal forest and along the lakeshore.' },
    { icon: '🦆', name: 'Birding', dist: 'Lake & wetlands', text: 'Waterfowl and boreal birds around Gander’s ponds and lake.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter activity on nearby trail networks.' },
    { icon: '🍁', name: 'Fall Colour', dist: 'Around town', text: 'Boreal forest turns bright in September and October.' },
  ],

  food: [
    { icon: '🦞', title: 'Seafood', area: 'Local restaurants', areaLevel: 'danger', text: 'Cod, crab and other Atlantic catches.' },
    { icon: '🐟', title: 'Atlantic Salmon', area: 'Local menus', areaLevel: 'blue', text: 'From the Gander River, when in season.' },
    { icon: '🍻', title: 'Pubs', area: 'Downtown', areaLevel: 'purple', text: 'Local bars and casual dining.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops near the town centre.' },
    { icon: '🥧', title: 'Jiggs Dinner & Toutons', area: 'Local restaurants', areaLevel: 'safe', text: 'Traditional Newfoundland comfort food.' },
    { icon: '🫐', title: 'Partridgeberries', area: 'Fall', areaLevel: 'olive', text: 'A Newfoundland fall specialty, in jams and desserts.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'Lake ice clears and the Gander River runs high.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the lake, fishing and local festivals.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Boreal forest turns bright around the lake and river.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Cold and snowy, with good snowmobile trails nearby.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: "Gander International Airport (YQX) has scheduled flights to St. John's, Halifax and other hubs — a legacy of its history as a major transatlantic refuelling stop.",
      time: 'Airport is in town',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway runs through Gander, roughly midway across the island of Newfoundland.',
      time: "≈4 h to St. John's",
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'DRL Coachlines runs a daily intercity coach across Newfoundland, stopping in Gander. Local transit within town is limited.',
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
      text: 'Hotels and motels near the town centre and airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gander+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Gander%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏞️',
      title: 'Gander Lake',
      area: 'In town',
      text: 'A few properties with lake views.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gander+Lake+Newfoundland', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Gander River',
      area: 'Nearby',
      text: 'Fishing lodges and cabins along the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gander+River+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕',
      title: 'Limited Local Transit',
      text: "Gander has no full city bus system — taxis and your own vehicle are the main ways to get around. DRL Coachlines connects the town to the rest of the island.",
      linkLabel: 'Town of Gander',
      linkUrl: 'https://www.gandercanada.com/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is small and walkable.' },
          { icon: '🚕', title: 'Taxis', text: 'The main way to get around town.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the Gander River and day trips.' },
          { icon: '🚌', title: 'Intercity Bus', text: 'DRL Coachlines connects Gander to other Newfoundland towns.' },
        ],
      },
    ],
    proTip: {
      label: 'History tip:',
      text: 'Ask locally about Come From Away sites — many residents have their own stories from the 9/11 diversions and are happy to share them.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax. Starting April 1, 2026, Gander also collects a new 4% tourism accommodation tax on overnight stays.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Gander / NL', percent: '15%', note: 'HST + 4% accommodation tax', example: '$100 → pay $119', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST + 4% accommodation tax (from April 2026)' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', label: 'Museum admission: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏞️', label: 'Gander Lake shoreline: free' },
      { icon: '✈️', label: 'Viewing the terminal lounge: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🎭', title: 'Come From Away Context', text: 'Locals are proud of the town’s 9/11 story — ask respectfully, and many are glad to share their own memories.' },
    { icon: '🎣', title: 'Fishing Licences', text: 'Atlantic salmon angling on the Gander River requires a Newfoundland & Labrador licence and follows seasonal rules.' },
    { icon: '❄️', title: 'Winter Driving', text: 'The Trans-Canada through central Newfoundland can see heavy snow — check conditions before long drives.' },
    { icon: '🚗', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no full local bus network.' },
    { icon: '⏰', title: 'Time Zone', text: 'Newfoundland Time: UTC-3:30 in winter, UTC-2:30 in summer — a half-hour offset unique to the island.' },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Moose are common on central Newfoundland highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '🪶', title: 'Whose Land', text: "Gander is on the ancestral homeland of the Beothuk, and the island of Newfoundland is within the traditional territory of the Mi'kmaq." },
    { icon: '🏥', title: 'Medical Care', lines: ['James Paton Memorial Regional Health Centre', '125 Trans-Canada Hwy', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default GANDER;
