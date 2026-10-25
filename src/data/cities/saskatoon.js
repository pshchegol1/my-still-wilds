// Saskatoon — данные страницы /city/saskatoon (Саскатун, САСКАЧЕВАН)
// Видео Саскатуна в бесплатных банках нет: Pexels по "saskatoon" отдаёт
// Эдмонтон (ролики August Domingo с рекой и мостами — это мост Walterdale
// в Эдмонтоне, проверено по кадрам), Pixabay — пусто.
// В шапке фото с Wikimedia Commons — Саскатун сверху осенью, изгиб South
// Saskatchewan River и центр, автор Quintin Soloviev, октябрь 2025,
// CC BY 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (266 141 город, 317 480 агломерация).
// Тарифы — saskatoontransit.ca/fares (с 1 июля 2026; следующее повышение
// 1 января 2027). Сбор 4% Destination Marketing Fee — Discover Saskatoon.
// Больницы — sk.211.ca. Саскачеван не переводит часы (UTC-6 круглый год).
// Remai Modern, Wanuskewin, Bessborough, Meewasin — из общих знаний.

export const SASKATOON = {
  slug: 'saskatoon',
  name: 'Saskatoon',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · City of Bridges',
  accentLevel: 'gold',
  heroIcon: '🌉',
  heroImage: '/Cities/Saskatoon/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.1332, lon: -106.6700 },
  subtitle: 'The City of Bridges',
  description:
    'Saskatchewan’s largest city spreads along both banks of the South Saskatchewan River, stitched together by a row of bridges and a long green riverside trail system. Saskatoon pairs a castle-like railway hotel and a striking modern art gallery with deep Indigenous history at Wanuskewin — and endless prairie sky just beyond the suburbs.',

  actions: [
    { label: 'Explore Saskatoon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈266K (2021)' },
    { label: 'Metro Area', value: '≈317K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'Airport', value: 'YXE · ≈15 min' },
    { label: 'To Regina', value: '≈2 h 45 min by car' },
  ],

  badges: ['City of Bridges', 'River Valley', 'Prairie Hub'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '266,141', label: 'People in the 2021 census — Saskatchewan’s largest city', level: 'blue' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks for daylight saving', level: 'purple' },
    { value: '$3.25', label: 'A single bus ride since July 1, 2026; kids in Grade 8 and under ride free', level: 'safe' },
    { value: '4%', label: 'Destination marketing fee added by participating hotels, on top of GST and PST', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & River Landing', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Remai Modern · Farmers’ market · Riverfront promenade' },
    { name: 'Broadway', icon: '🎭', tag: '🎭 Lively', tagLevel: 'purple', meta: 'Cafés, independent shops, restaurants and the historic Broadway Theatre' },
    { name: 'Riversdale', icon: '☕', tag: '☕ Trendy', tagLevel: 'danger', meta: 'Revitalised historic district with coffee roasters and eateries' },
    { name: 'Nutana', icon: '🌳', tag: '🌳 Leafy', tagLevel: 'safe', meta: 'Older tree-lined streets on the east bank above the river' },
    { name: 'University of Saskatchewan', icon: '🎓', tag: '🎓 Campus', tagLevel: 'blue', meta: 'Greystone buildings on a riverside campus' },
    { name: 'Sutherland & Forestry Farm', icon: '🦌', tag: '🦌 Park', tagLevel: 'olive', meta: 'Forestry Farm Park and Zoo in the city’s northeast' },
  ],

  attractions: [
    {
      name: 'Meewasin Valley Trails',
      icon: '🚶',
      text: 'A long network of paved and natural trails follows both banks of the South Saskatchewan River through the city — perfect for walking, cycling and watching the sun set over the bridges.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Wanuskewin Heritage Park',
      icon: '🦬',
      text: 'Just north of the city, an Indigenous heritage site with archaeological sites thousands of years old, interpretive trails through the Opimihaw Creek valley and a returned plains bison herd. Run with First Nations guidance.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Must see', level: 'purple' }],
    },
    {
      name: 'Remai Modern',
      icon: '🖼️',
      text: 'A bold riverside art museum known for its large collection of Picasso linocuts alongside contemporary Canadian and international art.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Delta Bessborough',
      icon: '🏰',
      text: 'The “Castle on the River” — a 1930s railway hotel with turrets and gardens on the riverbank, the city’s signature landmark.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Landmark', level: 'danger' }],
    },
    {
      name: 'Western Development Museum',
      icon: '🏚️',
      text: 'Walk the streets of 1910 Boomtown, a full-size indoor recreation of a prairie town at the height of settlement.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Saskatoon Farmers’ Market',
      icon: '🫐',
      text: 'Local produce, baking and Saskatoon-berry treats near River Landing.',
      tags: [{ label: 'Weekends', level: 'caution' }, { label: 'Local food', level: 'safe' }],
    },
  ],

  outdoorHeading: 'River Valley and Open Prairie',
  outdoor: [
    { icon: '🚲', name: 'Riverbank Cycling', dist: 'In the city', text: 'Flat, scenic trails on both sides of the river, crossing the bridges.' },
    { icon: '🛶', name: 'River Paddling', dist: 'South Saskatchewan', text: 'Calm stretches for experienced paddlers; currents and sandbars change — check conditions.' },
    { icon: '🦬', name: 'Wanuskewin Trails', dist: '≈15 min north', text: 'Prairie valley walks past bison and ancient sites.' },
    { icon: '🏖️', name: 'Pike Lake & Blackstrap', dist: '≈30–40 min', text: 'Provincial parks with beaches in summer and ski hills in winter.' },
    { icon: '🌲', name: 'Prince Albert National Park', dist: '≈2 h 30 min north', text: 'Boreal lakes, wildlife and Grey Owl’s cabin.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'City rinks', text: 'Outdoor rinks and skating paths when it freezes.' },
  ],

  food: [
    { icon: '🫐', title: 'Saskatoon Berries', area: 'City-wide', areaLevel: 'purple', text: 'The city’s namesake berry in pies, jams and ice cream.' },
    { icon: '☕', title: 'Coffee Roasters', area: 'Riversdale · Broadway', areaLevel: 'gold', text: 'A strong independent café scene.' },
    { icon: '🥟', title: 'Perogies', area: 'Local spots', areaLevel: 'danger', text: 'Ukrainian heritage cooking found across the prairies.' },
    { icon: '🍻', title: 'Craft Breweries', area: 'City-wide', areaLevel: 'olive', text: 'Taprooms and brewpubs in industrial and downtown spaces.' },
    { icon: '🥩', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Local beef and bison on menus.' },
    { icon: '🌾', title: 'Farm-to-Table', area: 'Downtown', areaLevel: 'safe', text: 'Restaurants built around Saskatchewan grains and produce.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Ice leaves the river in April; trails dry out and the valley turns green in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Long, sunny days and very late sunsets — festivals, patios and river trails.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden valley', text: 'Golden aspens along the river and crisp, clear prairie days.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters with temperatures often below −25 °C — but plenty of sunshine.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Saskatoon John G. Diefenbaker International Airport (YXE) has flights across Canada and some US routes.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 11 links Saskatoon with Regina; the Yellowhead (Highway 16) runs east–west toward Edmonton and Manitoba.',
      time: '≈2 h 45 min from Regina',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Toronto–Vancouver train, the Canadian, stops at Saskatoon’s station on the west side of the city a few times a week. Check the schedule.',
      time: 'Few times a week',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches connect Saskatoon with Regina and other prairie cities. Check current operators.',
      time: '≈3 h from Regina',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown & Riverfront',
      area: 'Walkable',
      text: 'Hotels near River Landing, the Bessborough and the trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saskatoon+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saskatoon%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎭',
      title: 'Broadway',
      area: 'Lively',
      text: 'Rentals and small hotels close to cafés and nightlife.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Broadway+Saskatoon', level: 'blue' },
      ],
    },
    {
      icon: '✈️',
      title: 'Airport & North End',
      area: 'Convenient',
      text: 'Chain hotels near the airport and highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saskatoon+Airport', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Saskatoon Transit',
      text: 'Saskatoon Transit runs buses across the city. Pay exact cash, use a reloadable smart card, or buy fares in the transit app. Fares rose on July 1, 2026 and are set to rise again on January 1, 2027.',
      linkLabel: 'Saskatoon Transit',
      linkUrl: 'https://saskatoontransit.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares effective July 1, 2026, from the Saskatoon Transit fares page. Children in Grade 8 and under ride free — no pass needed. Drivers carry no change.',
        fareBox: {
          label: 'Adult (from July 2026)',
          lines: ['Single ride: $3.25', 'Day pass: $9.50', '10 rides: $27.50', 'Monthly: $91.00'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://saskatoontransit.ca/fares',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚲', title: 'Bike', text: 'Riverside trails make cycling easy in summer.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, Broadway and Riversdale are walkable via the bridges.' },
          { icon: '🚗', title: 'Car', text: 'Useful for Wanuskewin and provincial parks.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Clock tip:',
      text: 'Saskatchewan stays on UTC-6 all year. In summer it matches Alberta (Mountain Daylight Time); in winter it matches Manitoba.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST, and many Saskatoon hotels also add a 4% Destination Marketing Fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatoon / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST (+ 4% marketing fee at many hotels)' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
      { icon: '🎟️', label: 'Admissions: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚶', label: 'Meewasin trails: free' },
      { icon: '🏰', label: 'Bessborough gardens & riverbank: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on Central Standard Time (UTC-6) all year — check times when connecting to Alberta or Manitoba.' },
    { icon: '❄️', title: 'Cold Winters', text: 'Winters regularly drop below −25 °C with wind chill. Dress in layers and plug in your car overnight.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Summer evenings by the river can be buggy — bring repellent.' },
    { icon: '🌊', title: 'River Safety', text: 'The South Saskatchewan has strong currents and shifting sandbars; do not swim in the river.' },
    { icon: '☀️', title: 'Big Sky Sun', text: 'Prairie sun is strong in summer — sunscreen and water on the trails.' },
    { icon: '🎫', title: 'Exact Fare', text: 'Bus drivers carry no change; use the app or a smart card.' },
    { icon: '🪶', title: 'Whose Land', text: 'Saskatoon is on Treaty 6 territory and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Royal University Hospital · 103 Hospital Dr', 'St. Paul’s Hospital · 1702 20th St W', 'Emergencies: call 911'] },
  ],
};

export default SASKATOON;
