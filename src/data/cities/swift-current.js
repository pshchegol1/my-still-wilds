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
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '16,750', label: 'People in the 2021 census — the largest city in southwest Saskatchewan', level: 'blue' },
    { value: 'Mon–Sat', label: 'Swift Transit’s Red Line runs 7 am to 7 pm, Monday to Saturday', level: 'gold' },
    { value: 'UTC-6', label: 'All year — and since November 2026 Alberta, 2 hours west, uses the same clock', level: 'purple' },
    { value: '$3', label: 'A one-way bus fare; children under 6 ride free', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Central Avenue', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, cafés and the restored Lyric Theatre' },
    { name: 'Chinook Pathway', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: '🌊 Creek', tagLevel: 'blue', meta: 'Paved trail along Swift Current Creek through the city' },
    { name: 'Kinetic Exhibition Park', icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg', tag: '🐎 Events', tagLevel: 'danger', meta: 'Fairgrounds, home of Frontier Days and other events' },
    { name: 'Riverdene', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Neighbourhood near the creek and parks' },
    { name: 'North Hill', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: '🛣️ Highway', tagLevel: 'olive', meta: 'Hotels and services along the Trans-Canada' },
    { name: 'Heritage Village', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: '🌾 History', tagLevel: 'purple', meta: 'Mennonite Heritage Village on the city’s edge' },
  ],

  attractions: [
    {
      name: 'Chinook Pathway',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A paved walking and cycling trail that follows Swift Current Creek through parks and neighbourhoods — the city’s green spine.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Lyric Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A historic downtown theatre restored as a venue for live music, events and community arts.',
      tags: [{ label: 'Events', level: 'purple' }, { label: 'Heritage', level: 'gold' }],
    },
    {
      name: 'Swift Current Museum & Art Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'Local and natural history exhibits and a public art gallery showing regional artists.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Frontier Days',
      icon: '🤠', iconSrc: '/icons/attractions/ph_horse-thin.svg',
      text: 'A long-running summer fair and rodeo at the exhibition grounds — check dates.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Tickets', level: 'caution' }],
    },
    {
      name: 'Saskatchewan Landing Provincial Park',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'Where the highway crosses Lake Diefenbaker in a deep valley — beaches, hiking, and the historic Goodwin House. About 45 minutes north.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Day trip', level: 'blue' }],
    },
    {
      name: 'Great Sand Hills',
      icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg',
      text: 'Open sand dunes rising out of the prairie northwest of the city — a surreal landscape for walking and photography.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Remote', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Big Sky Country',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Diefenbaker', dist: '≈45 min north', text: 'A long reservoir in a deep valley — boating, fishing and beaches.' },
    { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', name: 'Great Sand Hills', dist: '≈1 h 30 min northwest', text: 'Sand dunes and grassland; roads are rough — carry water.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Cypress Hills', dist: '≈2 h southwest', text: 'Forested hills and a dark-sky preserve straddling the Alberta border.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Grasslands National Park', dist: '≈2 h south', text: 'Native prairie, bison and prairie dogs near the US border.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Chinook Pathway', text: 'Easy riding along the creek.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets and summer storms over endless fields.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'danger', text: 'Ranch country means good local beef.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and road-trip stops.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Central Avenue', areaLevel: 'olive', text: 'Local coffee shops downtown.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Mennonite Cooking', area: 'Heritage events', areaLevel: 'purple', text: 'Vereniki and farmer sausage at community events.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'blue', text: 'Local pubs and taprooms.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Prairie bloom', text: 'Crocuses on the hills in April; green prairie by June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fair season', text: 'Hot, dry and sunny — Frontier Days, lake trips and long evenings.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden fields and clear, crisp days.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Chinooks', text: 'Cold and windy, though warm chinook winds sometimes bring sudden thaws.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) runs through the city; Highway 4 heads north to Lake Diefenbaker and south toward Grasslands.',
      time: '≈2 h 30 min from Regina',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Swift Current has a small municipal airport; most travellers fly into Regina (YQR).',
      time: '≈2 h 30 min from YQR',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches on the Trans-Canada stop here between Regina and Medicine Hat. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail service to Swift Current.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Trans-Canada Hotels',
      area: 'North Hill',
      text: 'Most hotels sit along the highway — convenient for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Swift%20Current%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near Central Avenue.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
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
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Swift Transit',
      text: 'The city’s Red Line runs Monday to Saturday from 7 am to 7 pm (last run starts at 6 pm), with no service on statutory holidays. Access Transit offers paratransit at the same fare.',
      linkLabel: 'Swift Transit',
      linkUrl: 'https://www.swiftcurrent.ca/divisions/infrastructure-operations/transit-services',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
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
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for parks and the sand hills.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Chinook Pathway in summer.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
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
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Event tickets: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'Chinook Pathway: free' },
      { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', label: 'Great Sand Hills: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year — and since November 2026 so does Alberta.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Strong winds are common; winter wind chill and blowing snow can close highways.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Sun & Heat', text: 'Summers are hot and dry — bring sunscreen and water for the sand hills.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Back roads to the sand hills and Grasslands are gravel with few services.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Hail and thunderstorms can build fast on hot afternoons.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'No Sunday Buses', text: 'Swift Transit runs Monday to Saturday only.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Swift Current is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Cypress Regional Hospital', '2004 Saskatchewan Dr', 'Emergency 24/7 · call 911'] },
  ],
};

export default SWIFT_CURRENT;
