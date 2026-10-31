// Cambridge Bay — данные страницы /city/cambridge-bay (Кеймбридж-Бей, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только Кембридж в Англии и
// безымянные зимние пейзажи). В шапке фото с Wikimedia Commons — посёлок
// с воздуха зимой вдоль замёрзшей бухты, автор Tristan in Ottawa,
// 20.02.2014, CC BY-SA 2.0. Лицензия требует автора.
// Население — перепись 2021: расхождение между муниципалитетом (1 760,
// близко к 2016 — 1766) и population centre (1 403, заметное снижение
// с 1619 в 2016); используем показатель по муниципалитету, как для
// других городов на сайте.
// Кеймбридж-Бей — крупнейший населённый пункт острова Виктория и
// административный центр региона Китикмеот (с 1999 года, после деления
// Северо-Западных территорий).
// Canadian High Arctic Research Station (CHARS) — анонсирована в 2010,
// завершена в 2017, управляется Polar Knowledge Canada.
// История судна Maud: куплено Гудзонбей и переименовано в Baymaud,
// застряло во льдах и затонуло в 1930 году в бухте; поднято проектом
// "Maud Returns Home" летом 2016 года и возвращено в Норвегию в августе
// 2018 — музей в Аскере.
// Ovayok Territorial Park (гора/эскер Ovayok, он же Mount Pelly) —
// примерно в 15 км от посёлка, грунтовая дорога, нередко видны овцебыки.
// Медцентр — Kitikmeot Regional Health Centre, 13D Omingmak St; в
// прошлом были жалобы на недоукомплектованность персоналом — указываем
// с оговоркой, без "24/7".
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний sealift;
// остановка судов Северо-Западного прохода.
// Из общих знаний: время в пути.

export const CAMBRIDGE_BAY = {
  slug: 'cambridge-bay',
  name: 'Cambridge Bay',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Hub of the Kitikmeot',
  accentLevel: 'blue',
  heroIcon: '🔬',
  heroImage: '/Cities/CambridgeBay/hero.jpg',
  heroCredit: 'Photo: Tristan in Ottawa / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 69.1169, lon: -105.0576 },
  subtitle: 'Arctic Science on Victoria Island',
  description:
    'The largest community on Victoria Island and the administrative hub of the Kitikmeot Region, Cambridge Bay mixes deep Inuinnait history with cutting-edge Arctic science. It is home to the Canadian High Arctic Research Station, a major stop for Northwest Passage ships, and the one-time resting place of Roald Amundsen’s ship Maud.',

  actions: [
    { label: 'Explore Cambridge Bay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.8K (2021)' },
    { label: 'Known For', value: 'Arctic Research (CHARS)' },
    { label: 'Languages', value: 'Inuinnaqtun, English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Yellowknife', value: '≈2 h by plane' },
  ],

  badges: ['Victoria Island', 'Arctic Science', 'Northwest Passage'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈1.8K', label: 'People in Cambridge Bay — the largest community on Victoria Island', level: 'blue' },
    { value: '2017', label: 'Year the Canadian High Arctic Research Station opened here', level: 'purple' },
    { value: '2016–18', label: 'Years Amundsen’s ship Maud was raised from the bay and shipped home to Norway', level: 'gold' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Hamlet offices, shops and the main community buildings' },
    { name: 'CHARS Campus', icon: '🔬', tag: '🔬 Research', tagLevel: 'purple', meta: 'The Canadian High Arctic Research Station, opened 2017' },
    { name: 'Waterfront', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'blue', meta: 'Where the Maud once lay, and a stop for Northwest Passage ships' },
    { name: 'Ovayok Territorial Park', icon: '⛰️', tag: '⛰️ Park', tagLevel: 'safe', meta: 'The esker of Ovayok (Mount Pelly), about 15 km from town' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world' },
  ],

  attractions: [
    {
      name: 'Canadian High Arctic Research Station',
      icon: '🔬',
      text: 'A major Arctic science campus, operated by Polar Knowledge Canada, studying everything from climate to wildlife. Opened in 2017 after a long-planned build.',
      tags: [{ label: 'Landmark', level: 'purple' }, { label: 'Tours vary', level: 'caution' }],
    },
    {
      name: 'Ovayok Territorial Park',
      icon: '⛰️',
      text: 'A striking esker (Ovayok, also called Mount Pelly) about 15 km from town, reached by gravel road. Muskoxen are often spotted along the way.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Wildlife', level: 'blue' }],
    },
    {
      name: 'Maud Memorial Site',
      icon: '⚓',
      text: 'Roald Amundsen’s ship Maud sank in the bay in 1930 and lay there for decades as a local landmark before being raised in 2016 and shipped home to Norway in 2018.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Arctic Coast Visitor Centre',
      icon: 'ℹ️',
      text: 'Local history, Inuinnait culture and trip-planning information for the Kitikmeot region. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'gold' }],
    },
    {
      name: 'Northwest Passage Cruise Stop',
      icon: '🚢',
      text: 'Cambridge Bay is a key port of call for research and expedition ships transiting the Northwest Passage.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Shipping hub', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Tundra, Bay and Victoria Island Wilderness',
  outdoor: [
    { icon: '⛰️', name: 'Ovayok Territorial Park', dist: '≈15 km', text: 'Hiking around the esker, with a good chance of seeing muskoxen.' },
    { icon: '🎣', name: 'Fishing', dist: 'Around town', text: 'Arctic char fishing in nearby waters.' },
    { icon: '🦬', name: 'Muskox Viewing', dist: 'Ovayok area', text: 'A relatively reliable spot to see muskoxen in the wild.' },
    { icon: '🥾', name: 'Tundra Walking', dist: 'Around town', text: 'Open land right at the edge of the community.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and hunting in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Seal, caribou and Arctic char, traditional Inuinnait foods.' },
    { icon: '🍽️', title: 'Restaurants', area: 'Town centre', areaLevel: 'gold', text: 'A small dining scene serving residents and visiting researchers.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', title: 'Arctic Char', area: 'Local catch', areaLevel: 'safe', text: 'A signature northern fish, fresh or smoked.' },
    { icon: '☕', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving a small but international community.' },
    { icon: '🦆', title: 'Waterfowl', area: 'Seasonal', areaLevel: 'olive', text: 'Traditional hunting of geese and ducks in season.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice retreats slowly from the bay as days lengthen.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Open water', text: 'The mildest season, with Northwest Passage ships and open-bay activity.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before freeze-up and winter.' },
    { icon: '❄️', name: 'Winter', months: 'October — April', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and short days, with good odds for the northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Cambridge Bay Airport is the Kitikmeot region’s main hub, with flights connecting to Yellowknife and other communities. There is no road or rail link to the rest of Canada.',
      time: '≈2 h to Yellowknife',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods, and the bay is a regular stop for Northwest Passage expedition and research ships during the short ice-free season.',
      time: 'Seasonal, roughly July to October',
    },
    {
      icon: '🚕',
      title: 'Getting Around',
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel on the land around the community.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'Hotels near the airport and town centre, often booked by visiting researchers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cambridge+Bay+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Cambridge%20Bay%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛰️',
      title: 'Near Ovayok Park',
      area: '≈15 km away',
      text: 'Limited camping options near the territorial park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cambridge+Bay+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕',
      title: 'No Public Transit',
      text: 'Cambridge Bay has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle local travel.',
      linkLabel: 'Hamlet of Cambridge Bay',
      linkUrl: 'https://www.cambridgebay.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
          { icon: '🏍️', title: 'ATV', text: 'Widely used in summer, including the gravel road to Ovayok.' },
        ],
      },
    ],
    proTip: {
      label: 'Research tip:',
      text: 'If CHARS offers public tours during your visit, book ahead — the station is a working research facility, not a standard tourist attraction.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Cambridge Bay has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Cambridge Bay / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
      { icon: '🎟️', label: 'Tours and activities: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '⛰️', label: 'Ovayok Territorial Park: free' },
      { icon: '⚓', label: 'Waterfront & Maud site: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '✈️', title: 'Fly-In Only', text: 'No roads connect Cambridge Bay to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', title: 'High Arctic Climate', text: 'Winters are long, dark and very cold even by Nunavut standards — dress in serious layers.' },
    { icon: '☀️', title: 'Long Summer Days', text: 'Midsummer brings very long daylight — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — different from most of Nunavut, which uses Eastern or Central time.' },
    { icon: '🐻', title: 'Wildlife Caution', text: 'Polar bears and muskoxen can appear near town — ask locally about current sightings before hiking.' },
    { icon: '🪶', title: 'Inuit Homeland', text: 'Cambridge Bay is in the heart of Inuit Nunangat; Inuinnaqtun is spoken alongside English, reflecting the distinct Inuinnait culture of the Kitikmeot.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Kitikmeot Regional Health Centre', '13D Omingmak St · phone (867) 983-4500', 'Contact the health centre directly for emergencies'] },
  ],
};

export default CAMBRIDGE_BAY;
