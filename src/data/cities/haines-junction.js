// Haines Junction — данные страницы /city/haines-junction (Хейнс-Джанкшен, ЮКОН)
// Видео в бесплатных банках нет (Pexels по запросу — только безымянные
// железнодорожные/дорожные ролики). В шапке фото с Wikimedia Commons —
// озеро Kathleen Lake в нацпарке Клуэйн рядом с посёлком, автор
// BeautifulEarth, 21.06.2017, CC BY-SA 4.0 — лицензия требует автора.
// Подпись к файлу на Commons явно называет место: "at Kluane National
// Park and Reserve near Haines Junction". Фото очень широкое (панорама),
// при показе в шапке центральная часть (горы) останется в кадре.
// Население — перепись 2021: деревня (village) 688 (+12.2% к 2016, 613).
// Отдельно Yukon Bureau of Statistics даёт оценку 2022 года — 1018
// человек, но это другая методика подсчёта (видимо, с окрестностями),
// не сравниваем напрямую с переписью.
// Медцентр — Haines Junction Health Centre, 131 Bates St (yukon.ca,
// обновлено 07.05.2026) — это центр здоровья, не полноценная больница
// с приёмным покоем; для серьёзных случаев эвакуация в Whitehorse General.
// Visitor Centre парка Клуэйн — в здании Da Kų Cultural Centre; сезон
// примерно с середины мая до середины сентября (точные часы на 2026 не
// нашли — пишем "уточняйте в Parks Canada").
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.
// Из общих знаний: гора Логан (высшая точка Канады) в парке Клуэйн,
// Haines Road в Аляску через Британскую Колумбию, озеро Dezadeash,
// катание на хели-лыжах/ледниковые туры, время в пути.

export const HAINES_JUNCTION = {
  slug: 'haines-junction',
  name: 'Haines Junction',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Gateway to Kluane National Park',
  accentLevel: 'danger',
  heroIcon: '🏔️',
  heroImage: '/Cities/HainesJunction/hero.jpg',
  heroCredit: 'Photo: BeautifulEarth / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.7522, lon: -137.5108 },
  subtitle: 'Where the Highway Meets the Icefields',
  description:
    'A small highway village at the edge of Kluane National Park and Reserve, Haines Junction sits beneath some of Canada’s highest, most remote mountains — including Mount Logan, the country’s tallest peak. It is the main gateway for hiking, glacier flights and the turquoise waters of Kathleen Lake.',

  actions: [
    { label: 'Explore Haines Junction', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈690 (2021)' },
    { label: 'Known For', value: 'Kluane National Park' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈1 h 30 min by car' },
    { label: 'To Haines, AK', value: '≈4 h by car' },
  ],

  badges: ['Kluane National Park', 'Mount Logan', 'Glacier Flights'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '688', label: 'People in Haines Junction in the 2021 census — up 12.2% in five years', level: 'danger' },
    { value: '5,959 m', label: 'Height of Mount Logan, Canada’s tallest peak, deep inside Kluane National Park', level: 'purple' },
    { value: '22,013 km²', label: 'Size of Kluane National Park and Reserve, mostly ice and remote peaks', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Village Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Services, the Da Kų Cultural Centre and the highway junction' },
    { name: 'Alaska Highway Corridor', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'blue', meta: 'The main route north to Whitehorse and south toward BC' },
    { name: 'Haines Road', icon: '🚗', tag: '🚗 Border Route', tagLevel: 'purple', meta: 'Scenic road south to Haines, Alaska, via British Columbia' },
    { name: 'Kathleen Lake', icon: '🏔️', tag: '🏔️ Park', tagLevel: 'danger', meta: 'The park’s main day-use area, a short drive south of the village' },
    { name: 'Dezadeash Lake', icon: '🎣', tag: '🎣 Fishing', tagLevel: 'safe', meta: 'Quiet lake along the Haines Road, popular with anglers' },
  ],

  attractions: [
    {
      name: 'Da Kų Cultural Centre & Kluane Visitor Centre',
      icon: '🏛️',
      text: 'A combined First Nations cultural centre and Parks Canada visitor centre in the village — the place to plan any trip into Kluane. Open roughly mid-May to mid-September; check current hours.',
      tags: [{ label: 'Start here', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Kathleen Lake',
      icon: '🏔️',
      text: 'A short drive from the village: a turquoise glacial lake ringed by snow-capped peaks, with picnic areas, a campground and trailheads.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Glacier & Icefield Flights',
      icon: '🛩️',
      text: 'Local operators fly scenic routes over the massive Kluane icefields and Mount Logan — one of the only ways to see the park’s remote interior.',
      tags: [{ label: 'Splurge', level: 'purple' }, { label: 'Weather-dependent', level: 'caution' }],
    },
    {
      name: 'St. Elias Lake Trail',
      icon: '🥾',
      text: 'An easy, popular day hike to a quiet lake framed by the St. Elias Mountains.',
      tags: [{ label: 'Easy hike', level: 'safe' }, { label: 'Family', level: 'danger' }],
    },
    {
      name: 'Haines Road Scenic Drive',
      icon: '🚗',
      text: 'One of the great northern drives, running south through alpine tundra and past Dezadeash Lake to the Alaska coast at Haines.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Border crossing', level: 'caution' }],
    },
  ],

  outdoorHeading: 'Mountains, Icefields and Alpine Trails',
  outdoor: [
    { icon: '🥾', name: 'King’s Throne Trail', dist: 'Kathleen Lake', text: 'A steep, rewarding climb above the lake for panoramic views.' },
    { icon: '🏔️', name: 'St. Elias Lake Trail', dist: 'Near highway', text: 'An easy hike to an alpine lake.' },
    { icon: '🛩️', name: 'Icefield Flightseeing', dist: 'From the village', text: 'Scenic flights over glaciers and Mount Logan.' },
    { icon: '🎣', name: 'Fishing', dist: 'Dezadeash & Kathleen Lakes', text: 'Lake trout and grayling in the surrounding lakes.' },
    { icon: '🚴', name: 'Alsek Trail', dist: 'Kathleen Lake', text: 'A long backcountry route toward Alsek Pass.' },
    { icon: '🏕️', name: 'Backcountry Camping', dist: 'Kluane interior', text: 'Permits required for wilderness travel into the park.' },
  ],

  food: [
    { icon: '🍔', title: 'Highway Diners', area: 'Village centre', areaLevel: 'gold', text: 'Simple, hearty stops for road-trippers.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '☕', title: 'Cafés', area: 'Village centre', areaLevel: 'purple', text: 'Coffee and baked goods near the visitor centre.' },
    { icon: '🛒', title: 'Grocery Stop', area: 'Village centre', areaLevel: 'olive', text: 'The last well-stocked store before long stretches of highway.' },
    { icon: '🐟', title: 'Lake Fish', area: 'Local menus', areaLevel: 'blue', text: 'Freshly caught trout where in season.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding alpine terrain.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Quiet', text: 'Snow lingers at elevation; most visitor services are still closed.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Park season', text: 'Trails, flights and the visitor centre are all open.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Alpine colour', text: 'Tundra turns gold before services wind down for winter.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 3, note: 'Remote & cold', text: 'Deep snow and a dramatic, very quiet mountain landscape.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Alaska Highway links Haines Junction with Whitehorse; the Haines Road runs south to the Alaska coast via British Columbia.',
      time: '≈1 h 30 min from Whitehorse',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Haines Junction has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
    {
      icon: '🛩️',
      title: 'Scenic Flights',
      text: 'Local air operators offer flightseeing over Kluane’s icefields — the only way most visitors see the park’s remote interior.',
      time: 'Weather-dependent',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Seasonal or charter coach services sometimes stop here along the Alaska Highway. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Village Centre',
      area: 'Walkable',
      text: 'Motels and inns near the visitor centre and highway junction.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Haines+Junction+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Haines%20Junction%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏔️',
      title: 'Kathleen Lake',
      area: '≈25 min away',
      text: 'A Parks Canada campground right on the lake.',
      links: [
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/yt/kluane', level: 'blue' },
      ],
    },
    {
      icon: '🎣',
      title: 'Dezadeash Lake',
      area: 'Along the Haines Road',
      text: 'Lakeside campgrounds for a quieter stay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dezadeash+Lake+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Local Transit',
      text: 'Haines Junction has no public bus system — the village centre is a short walk, and a car (or a booked flight) is essential for the park itself.',
      linkLabel: 'Kluane National Park',
      linkUrl: 'https://parks.canada.ca/pn-np/yt/kluane',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The village centre is a few short blocks.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Kathleen Lake and the Haines Road.' },
          { icon: '🛩️', title: 'Flightseeing', text: 'The way to reach the park’s remote icefields.' },
          { icon: '🚕', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Weather tip:',
      text: 'Mountain weather changes fast here — book glacier flights with flexible dates, and check in at the visitor centre before any backcountry hike.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Haines Junction has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Haines Junction / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🛩️', label: 'Flightseeing tours: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏔️', label: 'Kathleen Lake day-use: free' },
      { icon: '🥾', label: 'Most day-hike trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Flight and hiking guides: 10–15%.',
  },

  practical: [
    { icon: '🧊', title: 'Pack for the Mountains', text: 'Weather changes fast near the icefields — bring layers even in summer.' },
    { icon: '🐻', title: 'Bear Country', text: 'Carry bear spray and make noise on trails — this is serious grizzly and black bear habitat.' },
    { icon: '📋', title: 'Backcountry Permits', text: 'Overnight trips into Kluane’s interior require a park permit — register at the visitor centre.' },
    { icon: '⛽', title: 'Fuel Up', text: 'This is a key fuel and supply stop before long stretches of the Alaska Highway and Haines Road.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '🛂', title: 'Border Crossing', text: 'Driving the Haines Road to Alaska means crossing both US and Canadian border posts — bring a passport.' },
    { icon: '🪶', title: 'Whose Land', text: 'Haines Junction is on the traditional territory of the Champagne and Aishihik First Nations.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Haines Junction Health Centre', '131 Bates St', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default HAINES_JUNCTION;
