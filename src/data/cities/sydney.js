// Sydney — данные страницы /city/sydney (Сидни, НОВАЯ ШОТЛАНДИЯ, Кейп-Бретон)
// Осторожно: почти все "Sydney" в стоках — Австралия. Видео Сидни (NS)
// в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — набережная Сидни в сумерках, автор
// Plumzee, сентябрь 2017, CC BY-SA 4.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года: population centre Cape Breton – Sydney
// 30 960 (StatCan, Canadian Encyclopedia). На карточке было «3K» — ошибка.
// Transit Cape Breton: $2.50, месяц $82.50, tap-to-pay с 15.06.2026
// (CBRM Riders Guide June 2026). Marketing Levy CBRM 3% с 1.01.2024.
// HST 14%. Больница — Cape Breton Regional Hospital, 1482 George St.
// Big Fiddle, Celtic Colours, Louisbourg, Cabot Trail, Open Hearth Park,
// паром Marine Atlantic — из общих знаний.

export const SYDNEY = {
  slug: 'sydney',
  name: 'Sydney',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Cape Breton Island',
  accentLevel: 'purple',
  heroIcon: '🎻',
  heroImage: '/Cities/Sydney/hero.jpg',
  heroCredit: 'Photo: Plumzee / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.1368, lon: -60.1942 },
  subtitle: 'Heart of Cape Breton',
  description:
    'The largest community on Cape Breton Island, Sydney grew up around coal and steel and now welcomes cruise ships beneath a giant fiddle on its harbourfront. It is a warm, music-loving place — the base for the Fortress of Louisbourg, the Cabot Trail and the ferry to Newfoundland.',

  actions: [
    { label: 'Explore Sydney', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈31K (2021)' },
    { label: 'Part of', value: 'Cape Breton Regional Municipality' },
    { label: 'Language', value: 'English · Gaelic & Mi’kmaw heritage' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Louisbourg', value: '≈40 min by car' },
    { label: 'To Halifax', value: '≈4 h 30 min by car' },
  ],

  badges: ['Cape Breton', 'Celtic Music', 'Harbour City'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '30,960', label: 'People in the Sydney population centre in the 2021 census — the largest on Cape Breton Island', level: 'blue' },
    { value: '$2.50', label: 'A Transit Cape Breton ride since June 15, 2026 — now with tap-to-pay', level: 'safe' },
    { value: '3%', label: 'Marketing levy on hotel stays across the regional municipality, on top of 14% HST', level: 'purple' },
    { value: 'October', label: 'Celtic Colours festival brings fiddle music to venues across the island', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Esplanade', icon: '🎻', tag: '🎻 Harbourfront', tagLevel: 'gold', meta: 'Boardwalk, cruise pavilion and the Big Fiddle' },
    { name: 'North End Heritage District', icon: '🏚️', tag: '🏚️ Heritage', tagLevel: 'purple', meta: '18th-century houses, some run as seasonal house museums' },
    { name: 'Open Hearth Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Parkland on the remediated former steel plant and tar ponds site' },
    { name: 'Whitney Pier', icon: '⛪', tag: '⛪ Community', tagLevel: 'danger', meta: 'Historic multicultural steelworkers’ neighbourhood' },
    { name: 'Sydney River', icon: '🌊', tag: '🌊 South', tagLevel: 'blue', meta: 'Residential area and shopping on the river' },
    { name: 'North Sydney', icon: '⛴️', tag: '⛴️ Ferry', tagLevel: 'olive', meta: 'Across the harbour — Marine Atlantic ferries to Newfoundland' },
  ],

  attractions: [
    {
      name: 'The Big Fiddle',
      icon: '🎻',
      text: 'A giant fiddle and bow sculpture on the waterfront by the cruise pavilion — a tribute to Cape Breton’s Celtic music and the city’s favourite photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
    },
    {
      name: 'Fortress of Louisbourg',
      icon: '🏰',
      text: 'About 40 minutes away, Parks Canada’s huge reconstruction of an 18th-century French fortified town, with costumed interpreters, period food and cannon firings. Seasonal.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Must see', level: 'purple' }],
    },
    {
      name: 'Celtic Colours International Festival',
      icon: '🎶',
      text: 'Each October, concerts and community events across Cape Breton celebrate fiddle, piping and Gaelic song amid the fall colours. Book early.',
      tags: [{ label: 'October', level: 'danger' }, { label: 'Tickets', level: 'caution' }],
    },
    {
      name: 'North End Heritage Houses',
      icon: '🏚️',
      text: 'Historic 18th-century homes in the North End show life in early Sydney. Seasonal hours.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Open Hearth Park',
      icon: '🌳',
      text: 'Trails, sports fields and a playground built on land once occupied by the steel plant and the notorious Sydney Tar Ponds — a story of environmental recovery.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Cabot Trail',
      icon: '🛣️',
      text: 'Sydney is a gateway to the Cabot Trail loop through Cape Breton Highlands National Park — start in Baddeck, about an hour away.',
      tags: [{ label: 'Day trip+', level: 'blue' }, { label: 'Best in fall', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Island Coast and Highlands',
  outdoor: [
    { icon: '🛣️', name: 'Cabot Trail', dist: '≈1 h to Baddeck', text: 'One of Canada’s great scenic drives, with highland lookouts and whale-watching.' },
    { icon: '🥾', name: 'Cape Breton Highlands', dist: '≈2 h+', text: 'Hiking trails like the Skyline Trail above the Gulf of St. Lawrence.' },
    { icon: '🏖️', name: 'Beaches', dist: 'Around the island', text: 'Sandy and cobble beaches on the Atlantic and Bras d’Or Lake.' },
    { icon: '⛵', name: 'Bras d’Or Lake', dist: '≈30–60 min', text: 'An inland sea at the heart of Cape Breton — sailing and eagle-spotting.' },
    { icon: '🚲', name: 'Waterfront Paths', dist: 'Downtown', text: 'The Esplanade boardwalk and Open Hearth Park trails.' },
    { icon: '🐋', name: 'Whale Watching', dist: 'Cabot Trail coast', text: 'Pilot and minke whales from tour boats in summer.' },
  ],

  food: [
    { icon: '🦞', title: 'Lobster & Snow Crab', area: 'Local restaurants', areaLevel: 'danger', text: 'Fresh shellfish from Cape Breton waters in season.' },
    { icon: '🥧', title: 'Meat Pies & Oatcakes', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish- and Acadian-influenced home cooking.' },
    { icon: '🎶', title: 'Kitchen Parties', area: 'Pubs & halls', areaLevel: 'purple', text: 'Fiddle sessions and ceilidhs with food and dancing.' },
    { icon: '🐟', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Haddock and chips, a Maritime staple.' },
    { icon: '🍻', title: 'Local Brews', area: 'Downtown', areaLevel: 'blue', text: 'Craft beer and Cape Breton whisky to try nearby.' },
    { icon: '🫐', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late & cool', text: 'Spring comes late on the island; drift ice can linger offshore into April.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, cruise ships, festivals and the best Cabot Trail weather.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Celtic Colours', text: 'Brilliant highland colour and the Celtic Colours festival — book far ahead.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snowy and windy; many seasonal attractions close.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'J.A. Douglas McCurdy Sydney Airport (YQY) has flights to Halifax and Toronto. Check current schedules.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 104 and 105 cross the Canso Causeway onto Cape Breton Island; Highway 125 loops around Sydney.',
      time: '≈4 h 30 min from Halifax',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries sail from North Sydney to Port aux Basques and (seasonally) Argentia in Newfoundland.',
      time: 'North Sydney ≈20 min',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Cruise ships call at the Joan Harriss Cruise Pavilion beside the Big Fiddle.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '🎻',
      title: 'Downtown Waterfront',
      area: 'Walkable',
      text: 'Hotels on the Esplanade near the fiddle and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sydney+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Sydney%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛴️',
      title: 'North Sydney',
      area: 'Near the ferry',
      text: 'Handy for early Newfoundland crossings.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Sydney+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🏰',
      title: 'Louisbourg',
      area: 'Fortress town',
      text: 'Inns in the village next to the fortress.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Louisbourg+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Transit Cape Breton',
      text: 'Transit Cape Breton runs buses around Sydney and nearby communities. Since June 15, 2026, you can tap a debit or credit card, use the Umo app or a reloadable card — or pay exact cash. One payment gives 90 minutes of free transfers.',
      linkLabel: 'Transit Cape Breton',
      linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares (ages 18–59) from the CBRM June 2026 Riders’ Guide. Old paper tickets are accepted until December 31, 2026.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $2.50 (exact cash or tap)', 'Monthly pass: $82.50', 'Transfers: 90 minutes', 'Reloadable card: $10'],
        },
        linkLabel: 'Passenger information',
        linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Essential for Louisbourg and the Cabot Trail.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the waterfront are walkable.' },
          { icon: '🚌', title: 'Bus', text: 'Covers Sydney and nearby towns.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Festival tip:',
      text: 'Visiting for Celtic Colours in October? Book rooms and concerts months ahead — the island fills up.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Accommodations in Cape Breton Regional Municipality also collect a 3% marketing levy (since January 1, 2024).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Sydney / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 14% HST + 3% marketing levy' },
      { icon: '🍽️', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', label: 'Festival tickets: 14% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🎻', label: 'Big Fiddle & waterfront: free' },
      { icon: '🌳', label: 'Open Hearth Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🇦🇺', title: 'Not That Sydney', text: 'When booking, double-check “Sydney, Nova Scotia” — flights and hotels sometimes default to Sydney, Australia.' },
    { icon: '📅', title: 'Seasonal Sites', text: 'Louisbourg and many Cabot Trail businesses are seasonal — check dates outside summer and fall.' },
    { icon: '🌀', title: 'Storms', text: 'Post-tropical storms and winter nor’easters can bring high winds — check forecasts.' },
    { icon: '⛴️', title: 'Ferry Reservations', text: 'Book Marine Atlantic crossings ahead in summer, especially with a vehicle.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🦌', title: 'Wildlife on Roads', text: 'Watch for moose and deer on Cape Breton highways at dusk.' },
    { icon: '🪶', title: 'Whose Land', text: 'Sydney is in Unama’ki, the Cape Breton district of Mi’kma’ki — the ancestral and unceded territory of the Mi’kmaq; Membertou First Nation borders the city.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Cape Breton Regional Hospital', '1482 George St', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default SYDNEY;
