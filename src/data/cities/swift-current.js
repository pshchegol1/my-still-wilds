// Swift Current — данные страницы /city/swift-current (САСКАЧЕВАН)
// Видео Свифт-Каррента в бесплатных банках нет. Осторожно с Commons:
// "Swift Current Sunset" (GlacierNPS) — это озеро Swiftcurrent в Glacier NP,
// Монтана, не город.
// В шапке фото с Wikimedia Commons — Swift Current Creek в городе (по
// категории файла), автор Vidit9395, июнь 2018, CC BY-SA 4.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (16 750).
// Swift Transit — swiftcurrent.ca: $3 / $30 / $75, пн–сб («уточняйте»).
// Больница — Cypress Regional Hospital, 2004 Saskatchewan Dr (SHA, 24/7).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Chinook Pathway, Frontier Days, Lake Diefenbaker, Great Sand Hills,
// Cypress Hills, Grasslands — из общих знаний.

export const SWIFT_CURRENT = {
  slug: 'swift-current',
  name: 'Swift Current',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Southwest Hub',
  accentLevel: 'safe',
  heroIcon: '🌾',
  heroImage: '/Cities/SwiftCurrent/hero.jpg',
  heroCredit: 'Photo: Vidit9395 / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.2851, lon: -107.7972 },
  subtitle: 'Gateway to the Southwest Prairie',
  description:
    'On the Trans-Canada halfway between Regina and Medicine Hat, Swift Current is the friendly service town of Saskatchewan’s southwest. A green pathway follows Swift Current Creek through the city, and from here big-sky roads lead to Lake Diefenbaker, the Great Sand Hills, the Cypress Hills and the wild grasslands near the US border.',

  actions: [
    { label: 'Explore Swift Current', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈16.8K (2021)' },
    { label: 'Region', value: 'Southwest Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈2 h 30 min by car' },
    { label: 'To Lake Diefenbaker', value: '≈45 min by car' },
  ],

  badges: ['Southwest Hub', 'Creek Pathway', 'Prairie Gateway'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '16,750', label: 'People in the 2021 census — the largest city in southwest Saskatchewan', level: 'blue' },
    { value: 'Mon–Sat', label: 'Swift Transit’s Red Line runs 7 am to 7 pm, Monday to Saturday', level: 'gold' },
    { value: 'UTC-6', label: 'All year — and since November 2026 Alberta, 2 hours west, uses the same clock', level: 'purple' },
    { value: '$3', label: 'A one-way bus fare; children under 6 ride free', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Central Avenue', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, cafés and the restored Lyric Theatre' },
    { name: 'Chinook Pathway', icon: '🌊', tag: '🌊 Creek', tagLevel: 'blue', meta: 'Paved trail along Swift Current Creek through the city' },
    { name: 'Kinetic Exhibition Park', icon: '🐎', tag: '🐎 Events', tagLevel: 'danger', meta: 'Fairgrounds, home of Frontier Days and other events' },
    { name: 'Riverdene', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Neighbourhood near the creek and parks' },
    { name: 'North Hill', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'olive', meta: 'Hotels and services along the Trans-Canada' },
    { name: 'Heritage Village', icon: '🌾', tag: '🌾 History', tagLevel: 'purple', meta: 'Mennonite Heritage Village on the city’s edge' },
  ],

  attractions: [
    {
      name: 'Chinook Pathway',
      icon: '🚶',
      text: 'A paved walking and cycling trail that follows Swift Current Creek through parks and neighbourhoods — the city’s green spine.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Lyric Theatre',
      icon: '🎭',
      text: 'A historic downtown theatre restored as a venue for live music, events and community arts.',
      tags: [{ label: 'Events', level: 'purple' }, { label: 'Heritage', level: 'gold' }],
    },
    {
      name: 'Swift Current Museum & Art Gallery',
      icon: '🖼️',
      text: 'Local and natural history exhibits and a public art gallery showing regional artists.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Frontier Days',
      icon: '🤠',
      text: 'A long-running summer fair and rodeo at the exhibition grounds — check dates.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Tickets', level: 'caution' }],
    },
    {
      name: 'Saskatchewan Landing Provincial Park',
      icon: '🏞️',
      text: 'Where the highway crosses Lake Diefenbaker in a deep valley — beaches, hiking, and the historic Goodwin House. About 45 minutes north.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Day trip', level: 'blue' }],
    },
    {
      name: 'Great Sand Hills',
      icon: '🏜️',
      text: 'Open sand dunes rising out of the prairie northwest of the city — a surreal landscape for walking and photography.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Remote', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Big Sky Country',
  outdoor: [
    { icon: '🏖️', name: 'Lake Diefenbaker', dist: '≈45 min north', text: 'A long reservoir in a deep valley — boating, fishing and beaches.' },
    { icon: '🏜️', name: 'Great Sand Hills', dist: '≈1 h 30 min northwest', text: 'Sand dunes and grassland; roads are rough — carry water.' },
    { icon: '🌲', name: 'Cypress Hills', dist: '≈2 h southwest', text: 'Forested hills and a dark-sky preserve straddling the Alberta border.' },
    { icon: '🦬', name: 'Grasslands National Park', dist: '≈2 h south', text: 'Native prairie, bison and prairie dogs near the US border.' },
    { icon: '🚲', name: 'Cycling', dist: 'Chinook Pathway', text: 'Easy riding along the creek.' },
    { icon: '🌅', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets and summer storms over endless fields.' },
  ],

  food: [
    { icon: '🥩', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'danger', text: 'Ranch country means good local beef.' },
    { icon: '🍔', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and road-trip stops.' },
    { icon: '☕', title: 'Cafés', area: 'Central Avenue', areaLevel: 'olive', text: 'Local coffee shops downtown.' },
    { icon: '🥟', title: 'Mennonite Cooking', area: 'Heritage events', areaLevel: 'purple', text: 'Vereniki and farmer sausage at community events.' },
    { icon: '🍻', title: 'Pubs', area: 'Downtown', areaLevel: 'blue', text: 'Local pubs and taprooms.' },
    { icon: '🫐', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Prairie bloom', text: 'Crocuses on the hills in April; green prairie by June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fair season', text: 'Hot, dry and sunny — Frontier Days, lake trips and long evenings.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden fields and clear, crisp days.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Chinooks', text: 'Cold and windy, though warm chinook winds sometimes bring sudden thaws.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) runs through the city; Highway 4 heads north to Lake Diefenbaker and south toward Grasslands.',
      time: '≈2 h 30 min from Regina',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Swift Current has a small municipal airport; most travellers fly into Regina (YQR).',
      time: '≈2 h 30 min from YQR',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches on the Trans-Canada stop here between Regina and Medicine Hat. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger rail service to Swift Current.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'Trans-Canada Hotels',
      area: 'North Hill',
      text: 'Most hotels sit along the highway — convenient for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Swift%20Current%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near Central Avenue.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏞️',
      title: 'Saskatchewan Landing',
      area: 'Camping',
      text: 'Provincial park campgrounds above Lake Diefenbaker.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Swift Transit',
      text: 'The city’s Red Line runs Monday to Saturday from 7 am to 7 pm (last run starts at 6 pm), with no service on statutory holidays. Access Transit offers paratransit at the same fare.',
      linkLabel: 'Swift Transit',
      linkUrl: 'https://www.swiftcurrent.ca/divisions/infrastructure-operations/transit-services',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the City of Swift Current transit page; the city notes they can change without notice.',
        fareBox: {
          label: 'Adult',
          lines: ['One way: $3.00', '10-ride punch pass: $30.00', 'Monthly: $75.00', 'Kids 6–12: $1 · under 6 free'],
        },
        linkLabel: 'Swift Transit',
        linkUrl: 'https://www.swiftcurrent.ca/divisions/infrastructure-operations/transit-services',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Essential for parks and the sand hills.' },
          { icon: '🚲', title: 'Bike', text: 'The Chinook Pathway in summer.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Road-trip tip:',
      text: 'Driving west into Alberta? Since November 2026 Alberta also stays on UTC-6 all year, so your watch no longer changes at the border.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Next door in Alberta there is no provincial sales tax — only 5% GST.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Swift Current / SK', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', label: 'Event tickets: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚶', label: 'Chinook Pathway: free' },
      { icon: '🏜️', label: 'Great Sand Hills: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year — and since November 2026 so does Alberta.' },
    { icon: '🌬️', title: 'Prairie Wind', text: 'Strong winds are common; winter wind chill and blowing snow can close highways.' },
    { icon: '☀️', title: 'Sun & Heat', text: 'Summers are hot and dry — bring sunscreen and water for the sand hills.' },
    { icon: '🛣️', title: 'Remote Roads', text: 'Back roads to the sand hills and Grasslands are gravel with few services.' },
    { icon: '⛈️', title: 'Summer Storms', text: 'Hail and thunderstorms can build fast on hot afternoons.' },
    { icon: '🚌', title: 'No Sunday Buses', text: 'Swift Transit runs Monday to Saturday only.' },
    { icon: '🪶', title: 'Whose Land', text: 'Swift Current is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Cypress Regional Hospital', '2004 Saskatchewan Dr', 'Emergency 24/7 · call 911'] },
  ],
};

export default SWIFT_CURRENT;
