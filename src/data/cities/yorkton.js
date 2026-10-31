// Yorkton — данные страницы /city/yorkton (Йорктон, САСКАЧЕВАН)
// Видео Йорктона в бесплатных банках нет; на Commons почти все фото
// города мелкие (600–1280 px).
// В шапке фото с Wikimedia Commons — здание суда Йорктона осенью, автор
// Hatsuki, сентябрь 2012, CC BY-SA 3.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года (16 280).
// Транспорт: тарифы 2026 ($5 / $90), субботы отменены в 2026, с января
// 2027 — транспорт по запросу через приложение (yorkton.ca).
// Кинофестиваль — старейший непрерывный в Северной Америке (Canadian
// Encyclopedia). Больница — SHA (270 Bradbrooke Dr).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Купол St. Mary's, духоборы, WDM, Good Spirit Lake — из общих знаний.

export const YORKTON = {
  slug: 'yorkton',
  name: 'Yorkton',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Parkland East',
  accentLevel: 'gold',
  heroIcon: '🎬',
  heroImage: '/Cities/Yorkton/hero.jpg',
  heroCredit: 'Photo: Hatsuki / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.2139, lon: -102.4628 },
  subtitle: 'Film, Faith and Farm Country',
  description:
    'The hub of east-central Saskatchewan, Yorkton grew up with the waves of Ukrainian, Doukhobor and other settlers who farmed the surrounding parkland. Today it is known for a richly painted Ukrainian church dome, a museum of prairie immigration, and a film festival that has run here every year since the mid-20th century.',

  actions: [
    { label: 'Explore Yorkton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈16.3K (2021)' },
    { label: 'Region', value: 'East-central Saskatchewan' },
    { label: 'Language', value: 'English · Ukrainian heritage' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈2 h 15 min by car' },
    { label: 'To Good Spirit Lake', value: '≈40 min by car' },
  ],

  badges: ['Film Festival', 'Ukrainian Heritage', 'Parkland Hub'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '16,280', label: 'People in the 2021 census — the regional centre of east-central Saskatchewan', level: 'blue' },
    { value: '1947', label: 'The Yorkton Film Council forms; its festival is described as North America’s longest continuous film festival', level: 'purple' },
    { value: '2027', label: 'City buses switch from fixed routes to app-booked on-demand service in January', level: 'gold' },
    { value: '$5', label: 'An adult bus trip in cash (2026); monthly pass $90', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Broadway Street', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Main shopping street, cafés and the historic court house' },
    { name: 'City Centre Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Green space and plaques in the heart of town' },
    { name: 'Ravine Ecological Preserve', icon: '🌾', tag: '🌾 Nature', tagLevel: 'olive', meta: 'Wetland trails and prairie restoration on the city’s edge' },
    { name: 'St. Mary’s Area', icon: '⛪', tag: '⛪ Heritage', tagLevel: 'purple', meta: 'Ukrainian Catholic church with a famous painted dome' },
    { name: 'Hwy 9 / 10 Corridor', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and shopping' },
    { name: 'Museum District', icon: '🏚️', tag: '🏚️ History', tagLevel: 'blue', meta: 'Western Development Museum on the west side' },
  ],

  attractions: [
    {
      name: 'St. Mary’s Ukrainian Catholic Church',
      icon: '⛪',
      text: 'Famous for the large painting covering the inside of its dome, created by an artist over several years in the early 1940s. Call ahead to see the interior.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Call ahead', level: 'caution' }],
    },
    {
      name: 'Yorkton Film Festival',
      icon: '🎬',
      text: 'Each spring the city hosts a festival of Canadian short films and documentaries, awarding the Golden Sheaf Awards. It traces its roots to 1947 and is described as the longest continuous film festival in North America.',
      tags: [{ label: 'Spring', level: 'gold' }, { label: 'Canadian film', level: 'blue' }],
    },
    {
      name: 'Western Development Museum',
      icon: '🏚️',
      text: 'The Yorkton branch tells the story of the many peoples who settled Saskatchewan, with recreated homes, churches and shops from immigrant communities.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Yorkton Court House',
      icon: '🏛️',
      text: 'A handsome early-20th-century brick and stone court house — one of the city’s landmark buildings.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Architecture', level: 'purple' }],
    },
    {
      name: 'Ravine Ecological Preserve',
      icon: '🌾',
      text: 'Walking trails through wetlands and restored prairie at the edge of the city — good for birds and quiet evenings.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
    },
    {
      name: 'Good Spirit Lake Provincial Park',
      icon: '🏖️',
      text: 'A shallow lake with wide sandy beaches and dunes northwest of the city — a summer favourite.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Parkland, Lakes and Dunes',
  outdoor: [
    { icon: '🏖️', name: 'Good Spirit Lake', dist: '≈40 min northwest', text: 'Sandy beaches, dunes and warm, shallow water.' },
    { icon: '🚶', name: 'Ravine Preserve Trails', dist: 'In the city', text: 'Easy loops through wetland and grassland.' },
    { icon: '🐦', name: 'Birding', dist: 'Sloughs & lakes', text: 'Waterfowl and songbirds in the parkland in spring and fall.' },
    { icon: '🚲', name: 'Cycling', dist: 'City paths', text: 'Flat roads and park paths.' },
    { icon: '⛸️', name: 'Winter Sports', dist: 'Rinks & trails', text: 'Outdoor rinks and cross-country trails.' },
    { icon: '🌅', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets over aspen bluffs and farmland.' },
  ],

  food: [
    { icon: '🥟', title: 'Perogies & Cabbage Rolls', area: 'Local cafés', areaLevel: 'gold', text: 'Ukrainian heritage cooking is part of daily life here.' },
    { icon: '🍞', title: 'Doukhobor Borscht & Bread', area: 'Community events', areaLevel: 'danger', text: 'Look for traditional dishes at local events.' },
    { icon: '🍔', title: 'Diners', area: 'Broadway Street', areaLevel: 'olive', text: 'Family restaurants and diners.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🥩', title: 'Prairie Beef', area: 'Restaurants', areaLevel: 'blue', text: 'Local beef on many menus.' },
    { icon: '🫐', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams from wild berries.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Film festival', text: 'The film festival brings filmmakers to town; sloughs fill with migrating birds.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days for Good Spirit Lake and summer fairs.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden aspen and busy harvest fields.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold prairie winters with snow and wind.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 10 links Yorkton with Regina to the southwest; Highways 9, 10 and 16 connect toward Manitoba.',
      time: '≈2 h 15 min from Regina',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Yorkton has a municipal airport with little scheduled service; most travellers fly into Regina (YQR).',
      time: '≈2 h 15 min from YQR',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger rail to Yorkton.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'Highway Hotels',
      area: 'Hwy 9 / 10',
      text: 'Most hotels are along the main highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkton', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yorkton%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near Broadway Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkton+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Good Spirit Lake',
      area: 'Camping',
      text: 'Provincial park campgrounds and cabins.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Yorkton Transit',
      text: 'Yorkton Transit is operated with SaskAbilities. In 2026 Saturday service was cut and weekday hours shortened; from January 2027 fixed routes are replaced by on-demand rides booked in the Blaise app, by phone or online.',
      linkLabel: 'City Transit Services',
      linkUrl: 'https://www.yorkton.ca/living-in-yorkton/transit/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are the city’s 2026 adult fares. Students pay $4 a trip or $50 a month; seniors 60+ can buy a $75 monthly pass.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $5.00', 'Monthly pass: $90.00', 'No Saturday service', 'On-demand from Jan 2027'],
        },
        linkLabel: 'Yorkton Transit',
        linkUrl: 'https://www.yorkton.ca/living-in-yorkton/transit/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way around town and to the lake.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚲', title: 'Bike', text: 'Flat streets in summer.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Weekend tip:',
      text: 'There are no city buses on Saturdays in 2026 — plan a taxi or rental car for weekend trips.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any local fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Yorkton / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', label: 'Festival passes: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌾', label: 'Ravine Preserve trails: free' },
      { icon: '🏛️', label: 'Court house & downtown walks: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year; nearby Manitoba switches in summer — mind the hour if you cross the border.' },
    { icon: '🚌', title: 'Transit Changes', text: 'No city buses on Saturdays in 2026, and a switch to on-demand service in January 2027.' },
    { icon: '❄️', title: 'Cold Winters', text: 'Temperatures often fall below −25 °C; plug in your car overnight.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Bring repellent for summer evenings near sloughs and lakes.' },
    { icon: '⛈️', title: 'Summer Storms', text: 'Prairie thunderstorms can bring hail — watch forecasts.' },
    { icon: '🎬', title: 'Festival Week', text: 'Hotels fill during the spring film festival — book early.' },
    { icon: '🪶', title: 'Whose Land', text: 'Yorkton is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Yorkton Regional Health Centre', '270 Bradbrooke Dr', 'Emergency 24/7 · call 911'] },
  ],
};

export default YORKTON;
