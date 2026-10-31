// Yellowknife — данные страницы /city/yellowknife (Йеллоунайф,
// СЕВЕРО-ЗАПАДНЫЕ ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянные зимние реки и
// Эдмонтон). В шапке фото с Wikimedia Commons — панорама центра города
// с отеля Explorer, белая ночь конца июня, автор Daniel Case, 28.06.2015,
// CC BY-SA 3.0. Лицензия требует автора.
// Население — перепись 2021: 20 340 (+3.9% к 2016, 19569); крупнейший
// город территории, где проживает около половины её населения
// (41 070 на всю территорию в 2021).
// Больница — Stanton Territorial Hospital; источники расходятся в
// номере дома (548 или 550 Byrne Rd) — указываем улицу без точного
// номера. ER заявлено 24/7, это референтная больница для всей
// территории и региона Китикмеот в Нунавуте.
// Транспорт — Yellowknife Transit: новые тарифы с 1 октября 2024 —
// $2 за разовую поездку, 10 поездок $18 (полный тариф)/$12 (льготный),
// годовой абонемент $750/$500; точных данных на 2026 не нашли, не
// утверждаем, что цены не изменились.
// Важный контекст: в августе 2023 около 20 000 жителей были эвакуированы
// из-за лесного пожара, порядок снят 6 сентября 2023; город создал
// отдельное подразделение по готовности к ЧС после независимого разбора
// ситуации — упоминаем как контекст для сезона пожаров, не как текущую
// угрозу.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5% (как в Юконе, Альберте, Нунавуте).
// Из общих знаний: статус столицы и "алмазной столицы" Канады, Old
// Town, Ragged Ass Road, Prince of Wales Northern Heritage Centre,
// Great Slave Lake, северное сияние, время в пути.

export const YELLOWKNIFE = {
  slug: 'yellowknife',
  name: 'Yellowknife',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Diamond & Aurora Capital',
  accentLevel: 'blue',
  heroIcon: '🌌',
  heroImage: '/Cities/Yellowknife/hero.jpg',
  heroCredit: 'Photo: Daniel Case / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.4540, lon: -114.3718 },
  subtitle: 'Capital on the Shore of Great Slave Lake',
  description:
    'Built on the north shore of Great Slave Lake, Yellowknife grew from a 1930s gold-rush camp into the territorial capital and one of the best places on Earth to see the northern lights. Colourful houseboats and float planes fill Old Town, diamonds from nearby mines flow through downtown, and the midnight sun and aurora mark the turning of its extreme seasons.',

  actions: [
    { label: 'Explore Yellowknife', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈20K (2021)' },
    { label: 'Share of NWT', value: '≈50% of the territory' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'To Edmonton', value: '≈2 h by plane' },
    { label: 'Best Aurora Season', value: 'Late Aug — April' },
  ],

  badges: ['Northern Lights', 'Diamond Capital', 'Great Slave Lake'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '20,340', label: 'People in Yellowknife in the 2021 census — about half of all NWT residents', level: 'blue' },
    { value: '240+', label: 'Clear nights a year on average — part of why aurora odds here are so high', level: 'purple' },
    { value: '1934', label: 'Decade gold was first found nearby, sparking the town that became Yellowknife', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Government offices, shops and the city’s tallest buildings' },
    { name: 'Old Town', icon: '🛶', tag: '🛶 Historic', tagLevel: 'purple', meta: 'Colourful cabins, float planes and houseboats on the water' },
    { name: 'Ragged Ass Road', icon: '🏘️', tag: '🏘️ Local Icon', tagLevel: 'olive', meta: 'A short, famously named street in Old Town' },
    { name: 'Frame Lake', icon: '🌊', tag: '🌊 Lake', tagLevel: 'blue', meta: 'A lake within the city, ringed by a walking trail' },
    { name: 'Niven Lake', icon: '🏞️', tag: '🏞️ Trails', tagLevel: 'safe', meta: 'A residential area with lakeside walking paths' },
    { name: 'Great Slave Lake Shore', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'danger', meta: 'The bay and marina on one of the world’s deepest lakes' },
  ],

  attractions: [
    {
      name: 'Northern Lights Viewing',
      icon: '🌌',
      text: 'Yellowknife sits under the auroral oval and sees over 240 clear nights a year on average, making it one of the most reliable places in the world to see the northern lights — best from late August to April.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Old Town & Ragged Ass Road',
      icon: '🛶',
      text: 'Wander the colourful cabins, float plane bases and houseboats of Old Town, including the famously named Ragged Ass Road.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'purple' }],
    },
    {
      name: 'Prince of Wales Northern Heritage Centre',
      icon: '🏛️',
      text: 'The territorial museum, covering Dene, Inuvialuit and settler history, the gold rush and the diamond mining industry.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Legislative Assembly of the NWT',
      icon: '🏛️',
      text: 'A distinctive circular building housing the territorial government, with free public tours available — check current hours.',
      tags: [{ label: 'Architecture', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Great Slave Lake',
      icon: '🌊',
      text: 'One of the deepest lakes in North America, right at the city’s edge — boat tours, fishing and ice roads depending on the season.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Seasonal activities', level: 'purple' }],
    },
    {
      name: 'Diamond Mines & Jewellery',
      icon: '💎',
      text: 'Yellowknife is Canada’s diamond-cutting hub — several shops downtown sell and cut diamonds from nearby NWT mines.',
      tags: [{ label: 'Shopping', level: 'gold' }, { label: 'Unique', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Lake, Tundra and Northern Sky',
  outdoor: [
    { icon: '🌌', name: 'Aurora Tours', dist: 'Outside the city', text: 'Guided viewing at dedicated aurora camps away from city lights.' },
    { icon: '🚶', name: 'Frame Lake Trail', dist: 'Downtown', text: 'An easy loop walk right in the city.' },
    { icon: '🎣', name: 'Ice Fishing', dist: 'Great Slave Lake', text: 'A classic winter activity on the frozen lake.' },
    { icon: '🛶', name: 'Boating & Kayaking', dist: 'Great Slave Lake', text: 'Summer paddling and boat tours from Old Town.' },
    { icon: '🛷', name: 'Dog Sledding', dist: 'Outside the city', text: 'A popular winter activity with local outfitters.' },
    { icon: '☀️', name: 'Midnight Sun', dist: 'Midsummer', text: 'Nearly 24-hour daylight around the summer solstice.' },
  ],

  food: [
    { icon: '🐟', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Arctic char, whitefish and trout from Great Slave Lake.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops serving a diverse northern capital.' },
    { icon: '🍻', title: 'Pubs & Breweries', area: 'Downtown', areaLevel: 'purple', text: 'Local bars, including NWT’s own breweries.' },
    { icon: '🧺', title: 'Farmers’ Market', area: 'Summer', areaLevel: 'safe', text: 'Seasonal outdoor market with local vendors.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding land.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves Great Slave Lake as days lengthen fast.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'Near round-the-clock daylight for boating, fishing and festivals.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Aurora returns', text: 'Darkness returns, bringing back the best northern lights viewing.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 5, note: 'Aurora season', text: 'Deep cold but prime aurora viewing, ice roads and winter festivals.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Yellowknife Airport (YZF) has flights to Edmonton, Calgary and other hubs, plus connections across the NWT.',
      time: '≈2 h from Edmonton',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 3 connects Yellowknife to the rest of the territory and, via Alberta highways, to southern Canada — a long drive through remote country.',
      time: '≈15 h from Edmonton',
    },
    {
      icon: '🧊',
      title: 'By Ice Road',
      text: 'In winter, ice roads extend travel options across frozen lakes to remote communities and mine sites.',
      time: 'Winter only',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Limited intercity coach options connect Yellowknife to southern Canada. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near government offices and shops.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yellowknife%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛶',
      title: 'Old Town',
      area: 'Waterfront',
      text: 'B&Bs and inns near the houseboats and float planes.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+Old+Town', level: 'blue' },
      ],
    },
    {
      icon: '🌌',
      title: 'Aurora Lodges',
      area: 'Outside the city',
      text: 'Dedicated aurora-viewing camps and lodges away from city lights.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+aurora+lodge', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Yellowknife Transit',
      text: 'City buses cover downtown and the main residential areas, with a dedicated route for the Folk on the Rocks festival each July.',
      linkLabel: 'Yellowknife Transit',
      linkUrl: 'https://www.yellowknife.ca/en/living-here/transit.aspx',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares introduced October 1, 2024. Confirm current pricing before you ride, since rates can change.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $2', '10-ride pass: $18 (full) / $12 (discount)', 'Annual pass: $750 (full) / $500 (discount)', 'Check current rates'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.yellowknife.ca/en/living-here/transit.aspx',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and Old Town are walkable.' },
          { icon: '🚌', title: 'Bus', text: 'Covers downtown and residential neighbourhoods.' },
          { icon: '🚗', title: 'Car', text: 'Useful for aurora viewing outside the city.' },
          { icon: '🚕', title: 'Taxis', text: 'Widely available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Aurora tip:',
      text: 'Check the aurora forecast, dress for serious cold, and head a few minutes outside the city lights for the darkest skies and best views.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Yellowknife / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🌌', label: 'Aurora tours: 5% GST' },
      { icon: '💎', label: 'Diamonds and jewellery: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🛶', label: 'Old Town walking: free' },
      { icon: '🏛️', label: 'Heritage Centre admission: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Aurora and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🌌', title: 'Aurora Season', text: 'Northern lights are best seen from late August to April, away from city lights, on clear nights.' },
    { icon: '❄️', title: 'Serious Cold', text: 'Winter temperatures regularly drop well below freezing — dress in layers and watch for frostbite warnings.' },
    { icon: '☀️', title: 'Midnight Sun', text: 'In midsummer, Yellowknife gets nearly 24 hours of daylight — pack an eye mask if you need dark to sleep.' },
    { icon: '🔥', title: 'Fire Season Awareness', text: 'In August 2023, wildfires forced a three-week evacuation of the entire city — a reminder that summer and fall fire risk is a real, if occasional, concern; check current conditions if visiting in fire season.' },
    { icon: '⏰', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Edmonton and Calgary.' },
    { icon: '🧊', title: 'Winter Roads', text: 'Ice roads and highways can be affected by extreme cold — check conditions before winter travel.' },
    { icon: '🪶', title: 'Whose Land', text: 'Yellowknife is on the traditional territory of the Yellowknives Dene First Nation, within the North Slave region of the NWT.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Stanton Territorial Hospital', 'Byrne Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default YELLOWKNIFE;
