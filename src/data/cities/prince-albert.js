// Prince Albert — данные страницы /city/prince-albert (САСКАЧЕВАН)
// Видео Принс-Альберта в бесплатных банках нет: на Pexels есть только
// "Prince Albert's Cairn" — это памятник в Шотландии, не город.
// В шапке фото с Wikimedia Commons — река North Saskatchewan и набережная
// центра осенью, автор Carolyn Carleton, сентябрь 2013, CC BY-SA 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (37 756; citypa.ca).
// Тарифы — citypa.ca, сетка от 1 сентября 2024 (новее не нашли —
// «уточняйте»). Больница Victoria — SHA (идёт расширение корпуса).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Diefenbaker House, три премьера, Grey Owl, Waskesiu — из общих знаний.

export const PRINCE_ALBERT = {
  slug: 'prince-albert',
  name: 'Prince Albert',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Gateway to the North',
  accentLevel: 'gold',
  heroIcon: '🌲',
  heroImage: '/Cities/PrinceAlbert/hero.jpg',
  heroCredit: 'Photo: Carolyn Carleton / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.2033, lon: -105.7531 },
  subtitle: 'Where the Prairie Meets the Forest',
  description:
    'Saskatchewan’s third-largest city sits on the North Saskatchewan River right where farmland gives way to boreal forest. Prince Albert is the jumping-off point for Prince Albert National Park’s lakes and wilderness, and a city with deep history — from the fur trade to three prime ministers who once represented it in Parliament.',

  actions: [
    { label: 'Explore Prince Albert', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈37.8K (2021)' },
    { label: 'Rank in Saskatchewan', value: '3rd largest' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Saskatoon', value: '≈1 h 30 min by car' },
    { label: 'To Waskesiu', value: '≈1 h by car' },
  ],

  badges: ['Gateway to the North', 'River City', 'National Park Base'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '37,756', label: 'People in the 2021 census — Saskatchewan’s third-largest city', level: 'blue' },
    { value: '3', label: 'Prime ministers — Laurier, King and Diefenbaker — represented Prince Albert in Parliament', level: 'purple' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks', level: 'gold' },
    { value: '$3', label: 'A city bus ride in cash (2024 fare schedule — confirm before you go)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Central Avenue', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Heritage storefronts, galleries and cafés' },
    { name: 'Riverfront', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Rotary Trail along the North Saskatchewan River' },
    { name: 'East Hill', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Neighbourhoods and shopping on the hill' },
    { name: 'Little Red River Park', icon: '🌲', tag: '🌲 Park', tagLevel: 'olive', meta: 'Large wooded park with trails and winter sports' },
    { name: 'Prime Ministers Park', icon: '🏛️', tag: '🏛️ Heritage', tagLevel: 'purple', meta: 'Park honouring the city’s prime-ministerial ties' },
    { name: 'West Flat', icon: '🏘️', tag: '🏘️ West', tagLevel: 'danger', meta: 'Older residential area near the river' },
  ],

  attractions: [
    {
      name: 'Prince Albert National Park',
      icon: '🌲',
      text: 'An hour north, a vast park of boreal forest, lakes and aspen parkland with a resort village at Waskesiu Lake. Beaches, canoe routes, wildlife — and a free-roaming plains bison herd in its remote southwest.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Must see', level: 'gold' }],
    },
    {
      name: 'Grey Owl’s Cabin',
      icon: '🛶',
      text: 'Inside the national park, the lakeside cabin of conservationist Grey Owl is reached by a long hike or a canoe trip — a classic Saskatchewan adventure.',
      tags: [{ label: 'Full day+', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'Diefenbaker House Museum',
      icon: '🏛️',
      text: 'The former home of Prime Minister John Diefenbaker, preserved as a small museum. Seasonal hours.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Rotary Trail',
      icon: '🚶',
      text: 'A paved trail loop through the city and along the riverbank, good for walking and cycling.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Little Red River Park',
      icon: '⛷️',
      text: 'A wooded river-valley park at the edge of the city with hiking and biking in summer and cross-country skiing and tobogganing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
    },
    {
      name: 'Arts Centre & Galleries',
      icon: '🎨',
      text: 'The city’s historic brick former city hall is now the Prince Albert Arts Centre, and the Mann Art Gallery shows regional and Indigenous art.',
      tags: [{ label: 'Culture', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Forest, Lakes and River',
  outdoor: [
    { icon: '🏖️', name: 'Waskesiu Lake', dist: '≈1 h north', text: 'Sandy beaches, boating and a resort townsite in the national park.' },
    { icon: '🛶', name: 'Canoe Routes', dist: 'National park', text: 'Classic boreal paddling, including the route to Grey Owl’s cabin.' },
    { icon: '🎣', name: 'Fishing', dist: 'Northern lakes', text: 'Pike and walleye in the lakes north of the city. Licence required.' },
    { icon: '⛷️', name: 'Cross-Country Skiing', dist: 'Little Red · park', text: 'Groomed trails in winter.' },
    { icon: '🌌', name: 'Northern Lights', dist: 'Outside town', text: 'Dark skies north of the city often show the aurora in winter.' },
    { icon: '🦌', name: 'Wildlife', dist: 'Park roads', text: 'Elk, deer, black bears and foxes — drive carefully at dusk.' },
  ],

  food: [
    { icon: '🐟', title: 'Pickerel', area: 'Local restaurants', areaLevel: 'blue', text: 'Fresh northern lake fish on menus.' },
    { icon: '🫓', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread at events and some cafés.' },
    { icon: '🍔', title: 'Diners', area: 'Central Avenue', areaLevel: 'gold', text: 'Family restaurants and classic diners.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'olive', text: 'Small coffee shops on the main street.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'purple', text: 'Blueberries and saskatoons in the forest nearby.' },
    { icon: '🥟', title: 'Perogies', area: 'Local spots', areaLevel: 'safe', text: 'Prairie comfort food.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'River ice breaks up in April; the forest greens in May. Black flies start in late spring.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days and long evenings — the best time for Waskesiu and canoeing.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden aspen', text: 'Golden aspen along the river and in the park; elk rut in September.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold & snowy', text: 'Very cold, snowy winters — skiing, snowmobiling and aurora nights.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 11 and Highway 2 connect Prince Albert with Saskatoon; Highway 2 continues north to the national park.',
      time: '≈1 h 30 min from Saskatoon',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Prince Albert has a regional airport; most travellers fly into Saskatoon (YXE).',
      time: '≈1 h 30 min from YXE',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches connect with Saskatoon. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger rail to Prince Albert.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Prince Albert',
      area: 'City hotels',
      text: 'Hotels downtown and along the highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Prince+Albert+Saskatchewan', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Prince%20Albert%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Waskesiu',
      area: 'National park',
      text: 'Cabins, lodges and campgrounds in the park’s townsite.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Waskesiu+Lake', level: 'blue' },
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/sk/princealbert', level: 'safe' },
      ],
    },
    {
      icon: '🎣',
      title: 'Lake Lodges',
      area: 'North of the city',
      text: 'Fishing lodges and cabins on northern lakes.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Prince Albert Transit',
      text: 'The city runs a local bus network covering downtown, East Hill and the main neighbourhoods. Service is limited in the evenings and on Sundays.',
      linkLabel: 'City of Prince Albert',
      linkUrl: 'https://www.citypa.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the city’s schedule dated September 1, 2024 — we could not find a newer one, so confirm before you travel.',
        fareBox: {
          label: 'Adult (2024 schedule)',
          lines: ['Cash: $3.00', '10 tickets: $25.00', 'Monthly (18–64): $80.00', 'Seniors monthly: $30.00'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.citypa.ca/parking-streets-and-transportation/transit/fares-and-passes',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Essential for the national park.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚲', title: 'Bike', text: 'The Rotary Trail in summer.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Park tip:',
      text: 'Buy your Parks Canada pass online before driving north — and fill up in Prince Albert, as services thin out quickly.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any local marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Prince Albert / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
      { icon: '🎣', label: 'Fishing gear: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚶', label: 'Rotary Trail: free' },
      { icon: '🌲', label: 'Little Red River Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–20%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year.' },
    { icon: '🔥', title: 'Wildfire Season', text: 'Northern Saskatchewan sees wildfires most summers — check park and road advisories.' },
    { icon: '🦟', title: 'Bugs', text: 'Black flies and mosquitoes are intense in June and July in the forest.' },
    { icon: '🐻', title: 'Bears', text: 'Black bears live in the national park; store food properly when camping.' },
    { icon: '❄️', title: 'Winter', text: 'Temperatures often drop below −30 °C. Plug in your car overnight.' },
    { icon: '🏥', title: 'Hospital Works', text: 'Victoria Hospital is being expanded — allow extra time to find the right entrance.' },
    { icon: '🪶', title: 'Whose Land', text: 'Prince Albert is on Treaty 6 territory, the traditional lands of the Cree people, and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Victoria Hospital · 1200 24th St W', 'Emergency 24/7 · (306) 765-6000', 'Emergencies: call 911'] },
  ],
};

export default PRINCE_ALBERT;
