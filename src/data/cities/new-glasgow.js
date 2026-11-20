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
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '9,471', label: 'People in the town in the 2021 census — about 34,000 across the Pictou County urban area', level: 'blue' },
    { value: '1773', label: 'The ship Hector lands Scottish Highlanders at nearby Pictou, beginning large-scale Scottish settlement', level: 'purple' },
    { value: '$3', label: 'A Pictou County Transit bus ride; day pass $7.50', level: 'safe' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Provost Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Stone and brick heritage buildings, murals and cafés' },
    { name: 'Riverfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'East River', tagLevel: 'blue', meta: 'Waterfront trail and green space along the river' },
    { name: 'Glasgow Square', icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg', tag: 'Events', tagLevel: 'purple', meta: 'Outdoor amphitheatre for summer concerts' },
    { name: 'Stellarton', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Next door', tagLevel: 'danger', meta: 'Neighbouring town and home of the Museum of Industry' },
    { name: 'Trenton & Westville', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Pictou County', tagLevel: 'olive', meta: 'Sister towns with parks and trails' },
    { name: 'Highway 104 Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'safe', meta: 'Hotels, shopping and services' },
  ],

  attractions: [
    {
      name: 'Nova Scotia Museum of Industry',
      icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg',
      text: 'In neighbouring Stellarton, a large museum of the province’s mining, manufacturing and railway history, including early steam locomotives.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Hector Heritage Quay',
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'In the town of Pictou, about 15 minutes away, a full-size replica of the Hector, the ship that brought Highland settlers in 1773. Seasonal.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'Riverfront Trail',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'An easy walk along the East River through downtown, prettiest in autumn colour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'blue' }],
    },
    {
      name: 'Carmichael-Stewart House Museum',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'A Victorian home museum with local history and shipbuilding exhibits. Seasonal hours.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Melmerby Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A long sandy beach on the Northumberland Strait, where the water is among the warmest in Atlantic Canada in summer.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
    },
    {
      name: 'Downtown Murals & Roseland Theatre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Colourful murals decorate downtown walls, and the restored Roseland Theatre hosts films and events.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Culture', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Warm Water and Rolling Hills',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Northumberland Beaches', dist: '≈20–30 min', text: 'Melmerby and other warm, shallow beaches on the strait.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'PEI Day Trip', dist: 'Caribou ferry', text: 'Northumberland Ferries cross from Caribou to Wood Islands, PEI, in season.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Trails', dist: 'Pictou County', text: 'Rail trails and riverside paths between the towns.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'East River & harbour', text: 'Calm water for kayaks and canoes in summer.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Coast', text: 'Bald eagles, ospreys and shorebirds along the coast.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Sports', dist: 'Nearby hills', text: 'Cross-country skiing and snowshoeing.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Northumberland Shore', areaLevel: 'danger', text: 'Lobster suppers and rolls in season.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Oatcakes & Meat Pies', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish-style baking with deep local roots.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Local brewpubs.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Provost Street', areaLevel: 'blue', text: 'Independent coffee shops.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool', text: 'Cool spring; the river valley greens up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm strait beaches, festivals and the PEI ferry.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright foliage along the river and in the hills.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Snow and coastal storms; many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 104 (the Trans-Canada) passes the town between Truro and Antigonish.',
      time: '≈1 h 45 min from Halifax',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is the nearest major airport.',
      time: '≈1 h 30 min by car',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'From PEI, Northumberland Ferries sail from Wood Islands to Caribou, near Pictou, in season.',
      time: '≈30 min from Caribou',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches on the Halifax–Sydney route may stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'New Glasgow',
      area: 'Town & highway',
      text: 'Hotels near the Highway 104 exits and downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=New+Glasgow+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=New%20Glasgow%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      title: 'Pictou',
      area: 'Waterfront town',
      text: 'Inns on the harbour near the Hector.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pictou+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
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
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Pictou County Transit',
      text: 'Pictou County Transit links New Glasgow with Stellarton, Trenton, Westville and Pictou Landing First Nation. It became permanent in 2023 and was redesigned in 2025–2026.',
      linkLabel: 'Pictou County Transit',
      linkUrl: 'https://pctransit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
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
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for beaches and the PEI ferry.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Connects the Pictou County towns.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
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
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Riverfront trail: free' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Melmerby Beach: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏴', iconSrc: '/icons/attractions/ph_flag-thin.svg', title: 'Not Scotland', text: 'Searching online? Add “Nova Scotia” — results for Glasgow, Scotland, dominate.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Seasonal Ferry', text: 'The PEI ferry runs seasonally — book ahead in summer.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storms', text: 'Post-tropical storms in late summer and fall can bring heavy rain and wind.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife', text: 'Watch for deer on rural roads at dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus Coverage', text: 'Transit links the county towns, but beaches and the ferry need a car.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'New Glasgow is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Pictou Landing First Nation is nearby.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Aberdeen Hospital', '835 East River Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default NEW_GLASGOW;
