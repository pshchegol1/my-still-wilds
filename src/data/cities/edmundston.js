// Edmundston — данные страницы /city/edmundston (Эдмундстон, НЬЮ-БРАНСУИК)
// Видео Эдмундстона в бесплатных банках нет (Pexels по запросу — только
// безымянные ролики без привязки к месту). В шапке фото с Wikimedia
// Commons — город зимой со шпилями собора Notre-Dame, автор Quintin
// Soloviev, 28.01.2026, CC BY 4.0 (GPS 47.364, -68.321 — центр
// Эдмундстона). Лицензия требует автора.
// Население — перепись 2021: 16 437 (-0.9% к 2016); StatCan отдельно
// отмечает 15 500 без учёта населения в учреждениях.
// Транспорт — FlexGo, запущен в феврале 2025 (не 2026): фиксированный
// маршрут, TaxiBus по записи, патранзит; тариф Haut-Madawaska–Эдмундстон
// (33 км) ≈$5 на момент анонса (CBC, до запуска) — уточнять на flexgobus.com.
// Налог — HST 15%; городской гостиничный сбор существует (By-law 40R2023,
// edmundston.ca), но точный процент в найденных источниках не указан —
// не утверждаем конкретную цифру.
// Больница — Hôpital régional d'Edmundston (Vitalité), 275 boul. Hébert;
// ER неоднократно испытывал перегрузки (CBC/CTV до 2023) — предупреждение
// вместо "24/7".
// Из общих знаний: Республика Мадаваска (почётный титул мэра — "президент"),
// флаг с орлом, Foire Brayonne (конец июля/начало августа), бумажный
// комбинат J.D. Irving, мост в Мадаваску (Мэн, США), Edmundston Botanical
// Garden рядом (Сен-Жак), время в пути.

export const EDMUNDSTON = {
  slug: 'edmundston',
  name: 'Edmundston',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Capital of the Republic of Madawaska',
  accentLevel: 'purple',
  heroIcon: '🦅',
  heroImage: '/Cities/Edmundston/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 47.3737, lon: -68.3251 },
  subtitle: 'The Playful Republic on the Saint John River',
  description:
    'Where the Madawaska and Saint John rivers meet on the Québec and Maine borders, Edmundston is the unofficial capital of the "Republic of Madawaska" — a tongue-in-cheek regional identity with its own flag and an honorary "president" (the city’s mayor). It is a French-speaking mill town turned festival city, best known for the summer street party of the Foire Brayonne.',

  actions: [
    { label: 'Explore Edmundston', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈16K (2021)' },
    { label: 'Region', value: 'Madawaska' },
    { label: 'Language', value: 'French (majority)' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Fredericton', value: '≈2 h 45 min by car' },
    { label: 'To Québec border', value: 'A few minutes by car' },
  ],

  badges: ['Republic of Madawaska', 'Foire Brayonne', 'Tri-Border Region'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '16,437', label: 'People in the city in the 2021 census', level: 'purple' },
    { value: '1949', label: 'Year the "Republic of Madawaska" flag and coat of arms were formalized as local folklore', level: 'gold' },
    { value: '3', label: 'Jurisdictions meeting nearby — New Brunswick, Québec and Maine, USA', level: 'blue' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Rue Victoria shops, cafés and the cathedral spires' },
    { name: 'Rivers Confluence', icon: '🌊', tag: '🌊 Rivers', tagLevel: 'blue', meta: 'Where the Madawaska meets the Saint John River' },
    { name: 'Edmundston–Madawaska Bridge', icon: '🌉', tag: '🌉 Border', tagLevel: 'purple', meta: 'Crossing to Madawaska, Maine, USA' },
    { name: 'Saint-Basile', icon: '🏡', tag: '🏡 Heritage', tagLevel: 'olive', meta: 'One of the oldest Acadian settlements on the Upper Saint John' },
    { name: 'Mill District', icon: '🏭', tag: '🏭 Industry', tagLevel: 'danger', meta: 'The pulp and paper mill that shaped the city’s economy' },
    { name: 'Saint-Jacques', icon: '🌷', tag: '🌷 Gardens', tagLevel: 'safe', meta: 'Neighbouring village, home to the New Brunswick Botanical Garden' },
  ],

  attractions: [
    {
      name: 'New Brunswick Botanical Garden',
      icon: '🌷',
      text: 'A short drive away in Saint-Jacques: themed gardens, a butterfly house and seasonal displays. One of the region’s top attractions. Seasonal — check hours.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Foire Brayonne',
      icon: '🎉',
      text: 'A week-long summer festival of Brayon (Madawaska) culture, music and food, ending around the New Brunswick Day long weekend in late July or early August. Includes the popular “Party du Parking” street party.',
      tags: [{ label: 'Festival', level: 'purple' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Cathédrale Notre-Dame-de-l’Assomption',
      icon: '⛪',
      text: 'The twin-spired cathedral that dominates the downtown skyline, visible from across the river valley.',
      tags: [{ label: 'Architecture', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Edmundston–Madawaska Bridge',
      icon: '🌉',
      text: 'Cross the Saint John River into Madawaska, Maine — a quick way to step into the United States.',
      tags: [{ label: 'Border crossing', level: 'caution' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Republic of Madawaska Sites',
      icon: '🦅',
      text: 'Look for the eagle flag of the playful “Republic of Madawaska” around City Hall — the mayor of Edmundston holds the honorary title of its “president.”',
      tags: [{ label: 'Local folklore', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Saint-Basile Heritage Sites',
      icon: '🏡',
      text: 'One of the oldest Acadian parishes on the Upper Saint John, with historic churches and local museums nearby.',
      tags: [{ label: 'History', level: 'olive' }, { label: 'Day trip', level: 'blue' }],
    },
  ],

  outdoorHeading: 'River Valley and Border Country',
  outdoor: [
    { icon: '🚲', name: 'Riverside Trails', dist: 'Downtown', text: 'Paths along the Madawaska and Saint John rivers.' },
    { icon: '🌷', name: 'Botanical Garden', dist: 'Saint-Jacques', text: 'Themed gardens and a butterfly conservatory.' },
    { icon: '⛷️', name: 'Mont Farlagne', dist: 'Near Edmundston', text: 'Local ski hill for downhill and tubing in winter.' },
    { icon: '🎣', name: 'River Fishing', dist: 'Saint John River', text: 'Angling on the Upper Saint John in season.' },
    { icon: '🥾', name: 'Forest Trails', dist: 'Madawaska region', text: 'Hiking and ATV trails through the surrounding forest.' },
    { icon: '🛷', name: 'Winter Sports', dist: 'Region', text: 'Snowmobiling is huge in Madawaska County.' },
  ],

  food: [
    { icon: '🥔', title: 'Ployes & Acadian Food', area: 'Local restaurants', areaLevel: 'purple', text: 'Buckwheat ployes and other Madawaska-Acadian specialties.' },
    { icon: '🍁', title: 'Maple Products', area: 'Spring sugar shacks', areaLevel: 'gold', text: 'Local cabane à sucre traditions.' },
    { icon: '☕', title: 'Cafés', area: 'Rue Victoria', areaLevel: 'blue', text: 'Coffee shops downtown.' },
    { icon: '🍺', title: 'Local Pubs', area: 'Downtown', areaLevel: 'olive', text: 'Bars and casual dining.' },
    { icon: '🦞', title: 'Seafood', area: 'Restaurants', areaLevel: 'danger', text: 'Shipped in from the Maritime coast.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries from the surrounding forests.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Maple season', text: 'Snowmelt swells the rivers; maple sugar shacks open.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Foire Brayonne', text: 'Festival season, river trails and the Botanical Garden in bloom.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright foliage along the river valleys.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Snow sports', text: 'Skiing, snowmobiling and a cold, snowy interior climate.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Route 2) runs through Edmundston, linking Fredericton and Québec; a bridge crosses into Madawaska, Maine.',
      time: '≈2 h 45 min from Fredericton',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No scheduled passenger rail serves Edmundston directly; VIA Rail’s nearest stops are elsewhere in the province or in Québec.',
      time: 'No direct rail',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'The nearest airports with regular service are in Fredericton, Québec, or Presque Isle, Maine.',
      time: 'Limited local options',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches connect Edmundston with Fredericton, Moncton and Québec. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Rue Victoria and the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Edmundston+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Edmundston%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🌷',
      title: 'Saint-Jacques',
      area: 'Near the Botanical Garden',
      text: 'Lodging close to the gardens and the Trans-Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saint-Jacques+New+Brunswick', level: 'blue' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Mont Farlagne Area',
      area: 'Near the ski hill',
      text: 'Cottages and inns convenient for winter sports.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Edmundston+Mont+Farlagne', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐',
      title: 'FlexGo Regional Transit',
      text: 'FlexGo, launched in February 2025, is northwestern New Brunswick’s first public transit system: a fixed bus route, a reservation-based TaxiBus, and door-to-door paratransit, connecting Edmundston with Haut-Madawaska and other communities.',
      linkLabel: 'FlexGo',
      linkUrl: 'https://flexgobus.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'An early report put the Edmundston–Haut-Madawaska fare at about $5, before the service launched — confirm the current price on the FlexGo site or app.',
        fareBox: {
          label: 'Getting around',
          lines: ['Fixed bus route: check FlexGo', 'TaxiBus: book ahead', 'Paratransit: door-to-door', 'Car: for the Botanical Garden & ski hill'],
        },
        linkLabel: 'FlexGo',
        linkUrl: 'https://flexgobus.com/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact and walkable.' },
          { icon: '🚐', title: 'FlexGo', text: 'Fixed routes and on-demand rides regionally.' },
          { icon: '🚗', title: 'Car', text: 'Best for the Botanical Garden and ski hill.' },
          { icon: '🚕', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Carry your passport — Edmundston sits minutes from both the Québec and Maine (US) borders, and casual day trips across either one require ID.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Edmundston also has a tourism accommodation levy on hotel stays (By-law 40R2023) — we could not confirm its exact percentage, so check your bill or the city’s website.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec (nearby)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
      { label: 'Edmundston / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST + city levy' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎉', label: 'Festival vendors: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🦅', label: 'Republic of Madawaska sites: free' },
      { icon: '🌉', label: 'Crossing the bridge: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Festival vendors: tips appreciated.',
  },

  practical: [
    { icon: '🗣️', title: 'Mostly French', text: 'Edmundston is predominantly French-speaking — a few words of French go a long way, though many locals also speak English.' },
    { icon: '🛂', title: 'Two Borders Nearby', text: 'Québec and Maine (USA) are both a short drive away — bring a passport if you plan to cross either.' },
    { icon: '❄️', title: 'Cold Winters', text: 'Being inland, Edmundston sees colder winters and more snow than coastal New Brunswick — pack accordingly.' },
    { icon: '🎉', title: 'Festival Crowds', text: 'Book early if visiting during the Foire Brayonne in late July or early August — the city fills up.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of neighbouring Québec and Maine.' },
    { icon: '🦅', title: 'The “Republic”', text: 'The “Republic of Madawaska” is a friendly regional tradition, not a real country — enjoy the flag and the joke.' },
    { icon: '🪶', title: 'Whose Land', text: 'Edmundston is on the traditional territory of the Wolastoqiyik (Maliseet), the people of the Wolastoq — the Saint John River.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôpital régional d’Edmundston', '275 boul. Hébert', 'Call 911 · 811 for advice'] },
  ],
};

export default EDMUNDSTON;
