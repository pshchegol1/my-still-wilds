// Glace Bay — данные страницы /city/glace-bay (Глейс-Бей, НОВАЯ ШОТЛАНДИЯ)
// Видео Глейс-Бея в бесплатных банках нет (на Pexels по запросу — Glacier
// Bay на Аляске). В шапке фото с Wikimedia Commons — маяк на северном
// волнорезе гавани, автор Dennis G. Jarvis, 17.09.2011, CC BY-SA 2.0
// (GPS 46.183, -59.933 — гавань Глейс-Бея) — лицензия требует автора.
// Население — population centre, перепись 2021 (16 915); с 1995 года
// Глейс-Бей входит в Cape Breton Regional Municipality (CBRM).
// Музей шахтёров: экскурсия в шахту с бывшим горняком, база хора Men of
// the Deeps; сезон 2026 — до 18 октября, зимой по записи (уточнять).
// Маркони — National Historic Site на Table Head, вход бесплатный (Parks
// Canada); часы сезона не нашли. Savoy Theatre — здание 1927 года.
// Транспорт — Transit Cape Breton, маршруты 1 и 2 Сидней–Глейс-Бей.
// Больница — Glace Bay Hospital, 300 South St; приёмный покой исторически
// часто закрывается — на 25.10.2026 закрытий в списке NS Health нет.
// Налог: HST 14% + 3% гостиничный сбор CBRM (с 2024).
// Из общих знаний: 1902 — трансатлантические сообщения Маркони; птичий
// заказник Big Glace Bay Lake; Port Morien.

export const GLACE_BAY = {
  slug: 'glace-bay',
  name: 'Glace Bay',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Cape Breton Coal Town',
  accentLevel: 'gold',
  heroIcon: '⛏️',
  heroImage: '/Cities/GlaceBay/hero.jpg',
  heroCredit: 'Photo: Dennis Jarvis / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.1969, lon: -59.9570 },
  subtitle: 'Coal, Wireless and the Atlantic Edge',
  description:
    'A former coal-mining town on Cape Breton’s Atlantic coast, Glace Bay wears its history proudly. Go underground with a retired miner at the Cape Breton Miners Museum, stand where Marconi sent wireless messages across the ocean, catch a show at the 1927 Savoy Theatre and walk sea cliffs above the harbour.',

  actions: [
    { label: 'Explore Glace Bay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈17K (2021)' },
    { label: 'Municipality', value: 'Cape Breton Regional' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Sydney', value: '≈25 min by car' },
    { label: 'To Halifax', value: '≈4 h 30 min by car' },
  ],

  badges: ['Coal Mining', 'Marconi', 'Atlantic Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '16,915', label: 'People in the Glace Bay population centre in the 2021 census', level: 'gold' },
    { value: '1927', label: 'Year the current Savoy Theatre building opened', level: 'purple' },
    { value: '1902', label: 'Marconi’s wireless messages crossed the Atlantic from Table Head', level: 'blue' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Commercial Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, the Savoy Theatre and the old town hall' },
    { name: 'Quarry Point', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: '⛏️ Mining', tagLevel: 'danger', meta: 'Miners Museum on the cliffs above the ocean' },
    { name: 'Table Head', icon: '📡', iconSrc: '/icons/attractions/ph_broadcast-thin.svg', tag: '📡 History', tagLevel: 'blue', meta: 'Marconi National Historic Site and coastal views' },
    { name: 'Harbour', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: '⚓ Harbour', tagLevel: 'purple', meta: 'Fishing boats and the breakwater lighthouses' },
    { name: 'Big Glace Bay Lake', icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', tag: '🦆 Nature', tagLevel: 'safe', meta: 'Barrier beach and bird sanctuary east of town' },
    { name: 'Dominion & Reserve Mines', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏘️ Nearby', tagLevel: 'olive', meta: 'Neighbouring former mining communities' },
  ],

  attractions: [
    {
      name: 'Cape Breton Miners Museum',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'Go underground into an old room-and-pillar coal mine on a tour led by a retired miner, then explore the miners’ village. Home of the Men of the Deeps miners’ choir. Seasonal — check hours.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Marconi National Historic Site',
      icon: '📡', iconSrc: '/icons/attractions/ph_broadcast-thin.svg',
      text: 'At Table Head, where Guglielmo Marconi built a wireless station and sent messages across the Atlantic in the early 1900s. Run by Parks Canada; admission is free.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Savoy Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A grand 1927 theatre downtown that hosts concerts, plays and comedy — including productions celebrating Cape Breton music.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Evenings', level: 'blue' }],
    },
    {
      name: 'Glace Bay Heritage Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Local history in the town’s old town hall, from coal and the labour movement to wireless. Check hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Breakwater Lighthouses',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'Small red-topped lights mark the harbour entrance — a good spot for seabirds and sea views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'gold' }],
    },
    {
      name: 'Big Glace Bay Lake',
      icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'A coastal lagoon behind a barrier beach, protected as a bird sanctuary. Bring binoculars.',
      tags: [{ label: 'Nature', level: 'safe' }, { label: 'Birding', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Sea Cliffs, Beaches and Birds',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Coastal Walks', dist: 'Quarry Point', text: 'Cliff-top paths around the Miners Museum.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Big Glace Bay Lake', text: 'Waterfowl and shorebirds on the lagoon.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Beaches', dist: 'Port Morien & area', text: 'Sandy and rocky Atlantic beaches nearby.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Harbour', text: 'Watch the fleet come in or join a charter.' },
    { icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', name: 'Fortress of Louisbourg', dist: 'Day trip', text: 'Rebuilt 18th-century French fortress, about an hour away.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', name: 'Marconi Trail', dist: 'Scenic drive', text: 'Coastal route linking Glace Bay and Louisbourg.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster & Snow Crab', area: 'Seasonal', areaLevel: 'danger', text: 'Fresh from local boats.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Pies & Bakeries', area: 'Downtown', areaLevel: 'gold', text: 'Home-style baking.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Commercial Street', areaLevel: 'blue', text: 'Coffee shops in town.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'purple', text: 'Local bars, sometimes with live music.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Chowder', area: 'Local restaurants', areaLevel: 'safe', text: 'Seafood chowder on most menus.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Quiet', text: 'Cool and foggy; attractions start opening in June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Museums open daily, Men of the Deeps concerts and warm days.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Celtic Colours', text: 'Fall colour and the Celtic Colours festival across Cape Breton.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Off-season', text: 'Stormy and quiet; most attractions closed or by appointment.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 4 and Route 28 link Glace Bay with Sydney. From Halifax, drive Highway 102/104 to the Canso Causeway, then on to Sydney.',
      time: '≈25 min from Sydney',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'JA Douglas McCurdy Sydney Airport (YQY) is between Sydney and Glace Bay. Halifax Stanfield (YHZ) has many more flights.',
      time: '≈15 min from YQY',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Transit Cape Breton routes 1 and 2 run between Sydney and Glace Bay, including an express.',
      time: 'Check timetable',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries from Newfoundland arrive at North Sydney.',
      time: '≈40 min by car from North Sydney',
    },
  ],

  stay: [
    {
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      title: 'Glace Bay',
      area: 'Town',
      text: 'A few inns, motels and B&Bs in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Glace+Bay+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Glace%20Bay%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Sydney',
      area: '≈25 min away',
      text: 'The widest choice of hotels in the area.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sydney+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'Coastal Cottages',
      area: 'Port Morien & area',
      text: 'Cottages and rentals along the Atlantic shore.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Port+Morien+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Transit Cape Breton',
      text: 'Transit Cape Breton connects Glace Bay with Sydney on route 1 (local, seven days a week) and route 2 (express). Since June 15, 2026, you can tap a debit or credit card, use the Umo app or a reloadable card — or pay exact cash.',
      linkLabel: 'Transit Cape Breton',
      linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares (ages 18–59) from the CBRM June 2026 Riders’ Guide. A zone-change fee may apply on the Glace Bay–Sydney route — check the timetable.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $2.50 (exact cash or tap)', 'Monthly pass: $82.50', 'Transfers: 90 minutes', 'Reloadable card: $10'],
        },
        linkLabel: 'Passenger information',
        linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Best for Table Head, beaches and Louisbourg.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Routes 1 and 2 to Sydney.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Season tip:',
      text: 'Most attractions are open June to mid-October. Visiting outside the season? Call the Miners Museum ahead — winter visits are by appointment.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Accommodations in Cape Breton Regional Municipality, which includes Glace Bay, also collect a 3% marketing levy (since January 1, 2024).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Glace Bay / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST + 3% marketing levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', label: 'Theatre tickets: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '📡', iconSrc: '/icons/attractions/ph_broadcast-thin.svg', label: 'Marconi site: free' },
      { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', label: 'Harbour & coast walks: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Mine tour guides: tips appreciated.',
  },

  practical: [
    { icon: '🧥', iconSrc: '/icons/attractions/ph_hoodie-thin.svg', title: 'Underground Is Cold', text: 'Bring a warm layer for the mine tour — it stays cool below ground even in summer.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Cliff Edges', text: 'Coastal cliffs are eroding — stay back from the edge, especially after storms.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fog & Wind', text: 'Atlantic fog and wind can roll in fast; pack a jacket year-round.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Short Season', text: 'Many attractions close after mid-October; check dates before you go.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚑', iconSrc: '/icons/attractions/ph_ambulance-thin.svg', title: 'Check the ER', text: 'Glace Bay’s emergency department has closed at times due to staffing. Check Nova Scotia Health’s service status page; Cape Breton Regional Hospital in Sydney is open 24/7.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Glace Bay is in Unama’ki (Cape Breton), part of Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Glace Bay Hospital', '300 South St', 'Call 911 · 811 for advice'] },
  ],
};

export default GLACE_BAY;
