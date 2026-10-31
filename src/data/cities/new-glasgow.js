// New Glasgow — данные страницы /city/new-glasgow (НОВАЯ ШОТЛАНДИЯ)
// Видео Нью-Глазго в бесплатных банках нет (осторожно: "Glasgow" в стоках —
// Шотландия).
// В шапке фото с Wikimedia Commons — берег East River осенью, автор
// Brendan Riley, октябрь 2015, CC BY-SA 3.0 — лицензия требует автора,
// отсюда heroCredit.
// Население — перепись 2021 года: 9 471 (город), 34 397 (агломерация).
// Pictou County Transit — pctransit.ca: $3 / $7.50 / $70 (без даты —
// «уточняйте»). Больница — Aberdeen Hospital, 835 East River Rd (24/7).
// HST 14% (с 1.04.2025).
// Museum of Industry, Hector в Пикту, Melmerby Beach, паром на PEI —
// из общих знаний.

export const NEW_GLASGOW = {
  slug: 'new-glasgow',
  name: 'New Glasgow',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Pictou County',
  accentLevel: 'danger',
  heroIcon: '🏴',
  heroImage: '/Cities/NewGlasgow/hero.jpg',
  heroCredit: 'Photo: Brendan Riley / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5926, lon: -62.6455 },
  subtitle: 'Scottish Roots on the East River',
  description:
    'Settled by Scottish Highlanders and built on coal, steel and shipbuilding, New Glasgow is the hub of Pictou County. Its riverside downtown sits a short drive from the warm-water beaches of the Northumberland Strait, the Hector heritage ship in Pictou, and the ferry to Prince Edward Island.',

  actions: [
    { label: 'Explore New Glasgow', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.5K (2021)' },
    { label: 'Urban area', value: '≈34K (Pictou County)' },
    { label: 'Language', value: 'English · Gaelic heritage' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈1 h 45 min by car' },
    { label: 'To PEI ferry', value: '≈30 min by car' },
  ],

  badges: ['Scottish Heritage', 'East River', 'Northumberland Shore'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '9,471', label: 'People in the town in the 2021 census — about 34,000 across the Pictou County urban area', level: 'blue' },
    { value: '1773', label: 'The ship Hector lands Scottish Highlanders at nearby Pictou, beginning large-scale Scottish settlement', level: 'purple' },
    { value: '$3', label: 'A Pictou County Transit bus ride; day pass $7.50', level: 'safe' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Provost Street', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Stone and brick heritage buildings, murals and cafés' },
    { name: 'Riverfront', icon: '🌊', tag: '🌊 East River', tagLevel: 'blue', meta: 'Waterfront trail and green space along the river' },
    { name: 'Glasgow Square', icon: '🎶', tag: '🎶 Events', tagLevel: 'purple', meta: 'Outdoor amphitheatre for summer concerts' },
    { name: 'Stellarton', icon: '🏭', tag: '🏭 Next door', tagLevel: 'danger', meta: 'Neighbouring town and home of the Museum of Industry' },
    { name: 'Trenton & Westville', icon: '🏘️', tag: '🏘️ Pictou County', tagLevel: 'olive', meta: 'Sister towns with parks and trails' },
    { name: 'Highway 104 Corridor', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'safe', meta: 'Hotels, shopping and services' },
  ],

  attractions: [
    {
      name: 'Nova Scotia Museum of Industry',
      icon: '🏭',
      text: 'In neighbouring Stellarton, a large museum of the province’s mining, manufacturing and railway history, including early steam locomotives.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Hector Heritage Quay',
      icon: '⛵',
      text: 'In the town of Pictou, about 15 minutes away, a full-size replica of the Hector, the ship that brought Highland settlers in 1773. Seasonal.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'Riverfront Trail',
      icon: '🌊',
      text: 'An easy walk along the East River through downtown, prettiest in autumn colour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'blue' }],
    },
    {
      name: 'Carmichael-Stewart House Museum',
      icon: '🏚️',
      text: 'A Victorian home museum with local history and shipbuilding exhibits. Seasonal hours.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Melmerby Beach',
      icon: '🏖️',
      text: 'A long sandy beach on the Northumberland Strait, where the water is among the warmest in Atlantic Canada in summer.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
    },
    {
      name: 'Downtown Murals & Roseland Theatre',
      icon: '🎨',
      text: 'Colourful murals decorate downtown walls, and the restored Roseland Theatre hosts films and events.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Culture', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Warm Water and Rolling Hills',
  outdoor: [
    { icon: '🏖️', name: 'Northumberland Beaches', dist: '≈20–30 min', text: 'Melmerby and other warm, shallow beaches on the strait.' },
    { icon: '⛴️', name: 'PEI Day Trip', dist: 'Caribou ferry', text: 'Northumberland Ferries cross from Caribou to Wood Islands, PEI, in season.' },
    { icon: '🚲', name: 'Trails', dist: 'Pictou County', text: 'Rail trails and riverside paths between the towns.' },
    { icon: '🛶', name: 'Paddling', dist: 'East River & harbour', text: 'Calm water for kayaks and canoes in summer.' },
    { icon: '🦅', name: 'Birding', dist: 'Coast', text: 'Bald eagles, ospreys and shorebirds along the coast.' },
    { icon: '⛷️', name: 'Winter Sports', dist: 'Nearby hills', text: 'Cross-country skiing and snowshoeing.' },
  ],

  food: [
    { icon: '🦞', title: 'Lobster', area: 'Northumberland Shore', areaLevel: 'danger', text: 'Lobster suppers and rolls in season.' },
    { icon: '🥧', title: 'Oatcakes & Meat Pies', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish-style baking with deep local roots.' },
    { icon: '🍻', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Local brewpubs.' },
    { icon: '🐟', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '☕', title: 'Cafés', area: 'Provost Street', areaLevel: 'blue', text: 'Independent coffee shops.' },
    { icon: '🫐', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool', text: 'Cool spring; the river valley greens up in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm strait beaches, festivals and the PEI ferry.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright foliage along the river and in the hills.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Snow and coastal storms; many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 104 (the Trans-Canada) passes the town between Truro and Antigonish.',
      time: '≈1 h 45 min from Halifax',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is the nearest major airport.',
      time: '≈1 h 30 min by car',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'From PEI, Northumberland Ferries sail from Wood Islands to Caribou, near Pictou, in season.',
      time: '≈30 min from Caribou',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches on the Halifax–Sydney route may stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'New Glasgow',
      area: 'Town & highway',
      text: 'Hotels near the Highway 104 exits and downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=New+Glasgow+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=New%20Glasgow%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛵',
      title: 'Pictou',
      area: 'Waterfront town',
      text: 'Inns on the harbour near the Hector.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pictou+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Northumberland Shore',
      area: 'Cottages',
      text: 'Beach cottages along the strait.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Northumberland+Shore+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Pictou County Transit',
      text: 'Pictou County Transit links New Glasgow with Stellarton, Trenton, Westville and Pictou Landing First Nation. It became permanent in 2023 and was redesigned in 2025–2026.',
      linkLabel: 'Pictou County Transit',
      linkUrl: 'https://pctransit.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from pctransit.ca (undated — confirm before you ride). Children under 5 ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Single: $3.00', 'Day pass: $7.50', 'Monthly: $70.00', 'Under 5: free'],
        },
        linkLabel: 'Pictou County Transit',
        linkUrl: 'https://pctransit.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Needed for beaches and the PEI ferry.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚌', title: 'Bus', text: 'Connects the Pictou County towns.' },
          { icon: '🚕', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Island tip:',
      text: 'Make a loop: drive the Confederation Bridge to PEI one way and take the Wood Islands–Caribou ferry back (check seasonal schedules).',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Check your hotel bill for any local marketing levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'New Glasgow / NS', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 14% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', label: 'Museum admission: 14% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌊', label: 'Riverfront trail: free' },
      { icon: '🏖️', label: 'Melmerby Beach: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏴', title: 'Not Scotland', text: 'Searching online? Add “Nova Scotia” — results for Glasgow, Scotland, dominate.' },
    { icon: '⛴️', title: 'Seasonal Ferry', text: 'The PEI ferry runs seasonally — book ahead in summer.' },
    { icon: '🌀', title: 'Storms', text: 'Post-tropical storms in late summer and fall can bring heavy rain and wind.' },
    { icon: '🦌', title: 'Wildlife', text: 'Watch for deer on rural roads at dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚌', title: 'Bus Coverage', text: 'Transit links the county towns, but beaches and the ferry need a car.' },
    { icon: '🪶', title: 'Whose Land', text: 'New Glasgow is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Pictou Landing First Nation is nearby.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Aberdeen Hospital', '835 East River Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default NEW_GLASGOW;
