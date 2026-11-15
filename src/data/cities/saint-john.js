// Saint John — данные страницы /city/saint-john (Сент-Джон, НЬЮ-БРАНСУИК)
// Осторожно: не St. John's (Ньюфаундленд) — на Pexels по запросу
// "Saint John New Brunswick" почти все дрон-клипы на деле St. John's
// (Signal Hill, The Narrows), поэтому видео нет. В шапке фото с Wikimedia
// Commons — центр и гавань с воздуха, круизный лайнер у причала, автор
// Quintin Soloviev, 12.10.2025, CC BY 4.0 (GPS 45.269, -66.076 — гавань
// Сент-Джона). Лицензия требует автора.
// Население — перепись 2021: город 69 895 (+3.4%), CMA 130 613 (saintjohn.ca).
// Транспорт — saintjohn.ca, с 01.01.2026: $3 наличными без сдачи,
// Transcard 10 поездок $27.30, месячный $83.50, приложение SJTRides.
// Налог — HST 15%; сбор с гостиниц 3.5% (по данным 2019–2023 — уточнять).
// Больница — Saint John Regional Hospital, 400 University Ave, приёмное 24/7,
// единственный травмацентр I уровня в NB (ERstat/Horizon).
// Паром Fundy Rose в Дигби — чуть больше 2 ч (Bay Ferries); расписание 2026
// не подтверждено.
// Из общих знаний: Reversing Falls, City Market, NB Museum, Irving Nature
// Park, Rockwood Park, Fundy Trail, St. Martins, Carleton Martello Tower,
// город лоялистов (1785), время в пути.

export const SAINT_JOHN = {
  slug: 'saint-john',
  name: 'Saint John',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Port City on the Fundy',
  accentLevel: 'safe',
  heroIcon: '⚓',
  heroImage: '/Cities/SaintJohn/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.2733, lon: -66.0633 },
  subtitle: 'Historic Port City on the Bay of Fundy',
  description:
    'Where the Saint John River meets the Bay of Fundy, this historic port city packs Victorian brick streets, a lively market and a harbour busy with cruise ships. Watch the Fundy tides push the river backwards at the Reversing Falls, hike the coastal trails of Irving Nature Park and drive the Fundy Trail to sea caves and cliffs.',

  actions: [
    { label: 'Explore Saint John', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈70K (2021)' },
    { label: 'Metro Area', value: '≈131K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Fredericton', value: '≈1 h 15 min by car' },
    { label: 'Ferry to Digby, NS', value: 'Just over 2 h' },
  ],

  badges: ['Reversing Falls', 'Port City', 'Fundy Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '69,895', label: 'People in the city in the 2021 census — about 131K in the metro area', level: 'safe' },
    { value: '2×', label: 'A day the Fundy tide pushes the river backwards at the Reversing Falls', level: 'blue' },
    { value: '$3', label: 'Bus fare in 2026 — exact cash, or use the SJTRides app', level: 'gold' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Uptown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Victorian brick streets, King’s Square, pubs and the City Market' },
    { name: 'Waterfront & Market Square', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'blue', meta: 'Harbour Passage trail, the museum and cruise ship terminal' },
    { name: 'Reversing Falls', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Tides', tagLevel: 'purple', meta: 'Lookouts over the river gorge on the west side' },
    { name: 'West Side', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Local', tagLevel: 'olive', meta: 'Carleton Martello Tower, Irving Nature Park and the ferry terminal' },
    { name: 'Rockwood Park', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Huge urban park with lakes, trails and climbing cliffs' },
    { name: 'Trinity Royal', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'Preserved 19th-century architecture rebuilt after the 1877 fire' },
  ],

  attractions: [
    {
      name: 'Reversing Falls Rapids',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'At high tide the Bay of Fundy pushes the Saint John River upstream through a narrow gorge, creating rapids that change direction twice a day. Visit at both low and high tide to see the difference.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Must see', level: 'gold' }],
    },
    {
      name: 'Saint John City Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'A historic covered market in the heart of Uptown, under a roof shaped like an upturned ship’s hull. Local seafood, dulse, cheese and lunch counters.',
      tags: [{ label: 'Food', level: 'danger' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Irving Nature Park',
      icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'Coastal trails and boardwalks on a peninsula just west of the city — look for seals and shorebirds. Free.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'safe' }],
    },
    {
      name: 'New Brunswick Museum',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'The provincial museum on the waterfront, with natural history, art and a whale skeleton. Check hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Family', level: 'purple' }],
    },
    {
      name: 'Fundy Trail Parkway',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'About an hour east: a scenic road with lookouts, waterfalls and beaches along the Fundy cliffs. The fishing village of St. Martins has sea caves you can walk into at low tide.',
      tags: [{ label: 'Day trip', level: 'gold' }, { label: 'Tide times', level: 'caution' }],
    },
    {
      name: 'Carleton Martello Tower',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A 19th-century stone fort with sweeping views over the harbour and city. A Parks Canada National Historic Site — check seasonal hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Views', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Fundy Tides and Coastal Trails',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Harbour Passage', dist: 'Uptown', text: 'Waterfront trail from Market Square to the Reversing Falls.' },
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Irving Nature Park', dist: 'West Side', text: 'Coastal trails, seals and birdlife.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Rockwood Park', dist: 'North End', text: 'Lakes, hiking, mountain biking and rock climbing.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Sea Kayaking', dist: 'St. Martins', text: 'Paddle past the sea caves at high tide.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Fundy Footpath', dist: 'East of St. Martins', text: 'A tough multi-day coastal hike for experienced trekkers.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Whale Watching', dist: 'Bay of Fundy', text: 'Summer tours run from coastal towns in the region.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster & Seafood', area: 'Uptown', areaLevel: 'danger', text: 'Lobster rolls, scallops and chowder.' },
    { icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg', title: 'Dulse', area: 'City Market', areaLevel: 'safe', text: 'Dried Fundy seaweed — a salty local snack.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Uptown', areaLevel: 'purple', text: 'Breweries and pubs in historic buildings.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'King’s Square', areaLevel: 'blue', text: 'Coffee shops along the Uptown streets.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'gold', text: 'Wild New Brunswick blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Freshet', text: 'The river runs high with snowmelt; low areas can flood.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Cool & foggy', text: 'Mild days cooled by Fundy fog — great for hiking and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Cruise season', text: 'Fall colour and the busiest months for cruise ships.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snow, wind and freezing rain; Uptown pedways help.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Route 7 links Saint John with Fredericton, and Route 1 runs east to Moncton and west to the US border at St. Stephen.',
      time: '≈1 h 30 min from Moncton',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Bay Ferries’ Fundy Rose crosses the Bay of Fundy to Digby, Nova Scotia, in just over two hours. Book ahead in summer.',
      time: 'Just over 2 h to Digby',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Saint John Airport (YSJ) has flights to Toronto and other hubs; Moncton and Fredericton airports are alternatives.',
      time: '≈20 min to Uptown',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Saint John with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Uptown',
      area: 'Walkable',
      text: 'Hotels connected by pedways to the market and waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saint+John+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saint%20John%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'East Side',
      area: 'Near highway',
      text: 'Chain hotels near shopping and Route 1.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=East+Saint+John+New+Brunswick', level: 'blue' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'St. Martins',
      area: '≈45 min away',
      text: 'Inns and cottages by the sea caves and Fundy Trail.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=St.+Martins+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Saint John Transit',
      text: 'Saint John Transit runs city buses and the Comex commuter service. Pay $3 in exact cash, use a Transcard or monthly pass, or buy tickets in the SJTRides app.',
      linkLabel: 'Fares and passes',
      linkUrl: 'https://saintjohn.ca/en/transit/fares-and-passes',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares effective January 1, 2026. The Comex commuter cash fare is $4.50.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $3 (exact cash)', '10-ride Transcard: $27.30', 'Monthly pass: $83.50', 'App: SJTRides'],
        },
        linkLabel: 'Fares and passes',
        linkUrl: 'https://saintjohn.ca/en/transit/fares-and-passes',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Uptown is compact and hilly, with indoor pedways.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers the city’s sides of the river.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the Fundy Trail and St. Martins.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Tide tip:',
      text: 'See the Reversing Falls twice — at low tide the river pours out to sea; at high tide the bay pushes it back. Check the tide table for the times.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Saint John also carry a tourism accommodation levy (3.5% at last check).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Saint John / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + tourism levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Tours and attractions: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Reversing Falls lookouts: free' },
      { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', label: 'Irving Nature Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not St. John’s', text: 'Saint John (New Brunswick) is not St. John’s (Newfoundland) — double-check flights and bookings.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fundy Fog', text: 'Summer fog rolls in fast and keeps the city cool — bring a layer.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Tide Safety', text: 'At St. Martins and other beaches, the tide rises quickly — check tide times before exploring sea caves.' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', title: 'Cruise Days', text: 'Uptown gets busy when cruise ships are in, especially in September and October.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec, Ontario and Maine.' },
    { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Hilly Streets', text: 'Uptown streets are steep and icy in winter; use the indoor pedways.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Saint John is on the unceded territory of the Wolastoqiyik (Maliseet), the people of the Wolastoq — the Saint John River.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Saint John Regional Hospital', '400 University Ave', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default SAINT_JOHN;
