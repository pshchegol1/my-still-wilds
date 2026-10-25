// Kingston — данные страницы /city/kingston
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Braeson Holland, описание "university town in Kingston, Canada".
// Проверено по кадрам: часовая башня Grant Hall Университета Куинс,
// University Avenue к озеру Онтарио, труба больницы Kingston General —
// это Кингстон, Онтарио (а не Ямайка и не Кингстон-на-Темзе). Снято
// поздней осенью или ранней весной, деревья голые. Оригинал 2560×1440,
// 24,7 МБ — пережат в 1920×1080, ~5,5 МБ; постер — первый кадр.
// Население — перепись 2021 года: оценки на 2025 у разных источников
// расходятся от 129 до 150 тысяч. Тарифы Kingston Transit — с сайта
// перевозчика, дата вступления там не указана.

export const KINGSTON = {
  slug: 'kingston',
  name: 'Kingston',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Where the Lake Meets the St. Lawrence',
  accentLevel: 'purple',
  heroIcon: '🏛️',
  heroImage: '/Cities/Kingston/hero-poster.jpg',
  heroVideo: '/Cities/Kingston/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.2312, lon: -76.486 },
  subtitle: 'The Limestone City',
  description:
    'A city of grey limestone at the eastern end of Lake Ontario, where the lake drains into the St. Lawrence and the Rideau Canal begins. Canada’s first capital, a fortress town, a prison town and a university town all at once — and the gateway to the Thousand Islands.',

  actions: [
    { label: 'Explore Kingston', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈132K (2021)' },
    { label: 'Climate', value: 'Lakeside · Windy' },
    { label: 'Rideau Canal', value: 'UNESCO site' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈260 km · 2.5h' },
    { label: 'From Ottawa', value: '≈195 km · 2h' },
  ],

  badges: ['Limestone City', 'First Capital', 'Katarokwi'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1841', label: 'Kingston becomes the first capital of the united Province of Canada — the seat moved on in 1844', level: 'gold' },
    { value: '2007', label: 'The Rideau Canal and Kingston’s fortifications are inscribed together as a UNESCO World Heritage Site', level: 'blue' },
    { value: '1835', label: 'Kingston Penitentiary opens — it held prisoners until 2013 and now runs tours led by former staff', level: 'danger' },
    { value: '2021', label: 'Council votes 12–1 to remove the Sir John A. Macdonald statue from City Park over residential schools', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown & the Waterfront', icon: '⚓', tag: '⚓ Core', tagLevel: 'gold', meta: 'Limestone City Hall · Market Square · Princess Street · Confederation Basin' },
    { name: 'Queen’s & Sydenham', icon: '🎓', tag: '🎓 University', tagLevel: 'purple', meta: 'Queen’s University campus · Grant Hall · Old limestone streets by the lake' },
    { name: 'Portsmouth Village', icon: '⛵', tag: '⛵ West', tagLevel: 'blue', meta: 'Olympic harbour from 1976 · Kingston Penitentiary · Waterfront trail' },
    { name: 'Point Frederick & Fort Henry', icon: '🏰', tag: '🏰 East', tagLevel: 'danger', meta: 'Royal Military College · Fort Henry on its hill · Views back over the city' },
    { name: 'Williamsville & Princess St', icon: '🛍️', tag: '🛍️ Up-town', tagLevel: 'olive', meta: 'Long commercial street · Local restaurants · Student neighbourhoods' },
    { name: 'Wolfe Island', icon: '⛴️', tag: '⛴️ Across the water', tagLevel: 'safe', meta: 'Free car ferry from downtown · Farmland and wind turbines · Quiet roads for cycling' },
  ],

  attractions: [
    {
      name: 'Fort Henry',
      icon: '🏰',
      text: 'A 19th-century British fortress on a hill east of downtown, built to defend the end of the Rideau Canal and the naval dockyard. In summer it comes alive with drill, musket and artillery demonstrations, and the evening Sunset Ceremony. Part of the Rideau Canal UNESCO World Heritage Site.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Summer programs', level: 'safe' }],
    },
    {
      name: 'Kingston Penitentiary',
      icon: '🔒',
      text: 'Opened in 1835 and closed in 2013, one of the oldest prisons in Canada. Tours run from spring to the end of October, many led by former correctional officers who worked there — candid, unsettling and among the best-reviewed tours in the province. Book ahead in season.',
      tags: [{ label: 'Book ahead', level: 'danger' }, { label: 'Apr–Oct', level: 'caution' }],
    },
    {
      name: 'Rideau Canal at Kingston Mills',
      icon: '🚣',
      text: 'The southern end of the 202 km Rideau Canal, opened in 1832 and still working with its original hand-operated locks. The flight of locks at Kingston Mills, just north of the city, is the place to watch boats rise through the rock cut.',
      tags: [{ label: 'Free to watch', level: 'safe' }, { label: 'UNESCO', level: 'blue' }],
    },
    {
      name: 'Thousand Islands',
      icon: '🏝️',
      text: 'East of the city the St. Lawrence breaks into more than a thousand islands of granite and pine. Cruises leave from downtown Kingston and from Gananoque; drive the Thousand Islands Parkway for the views. Our road-trip guide covers the route.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Cruises seasonal', level: 'caution' }],
    },
    {
      name: 'Bellevue House & the Macdonald Debate',
      icon: '⚖️',
      text: 'Sir John A. Macdonald, Canada’s first prime minister, lived in Kingston and is buried here. In 2021 the city removed his statue from City Park, citing his role in creating the residential school system. His former home, Bellevue House, is a national historic site whose interpretation has been reworked to address the harm his policies did, not only his nation-building.',
      tags: [{ label: 'Hard history', level: 'danger' }],
    },
    {
      name: 'Downtown & Market Square',
      icon: '🏛️',
      text: 'The grand limestone City Hall faces the waterfront across Market Square, where a farmers’ market runs in the warm months and a skating rink appears in winter. Princess Street climbs inland lined with shops, pubs and restaurants.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Lake, River and Canal',
  outdoor: [
    { icon: '⛵', name: 'Sailing', dist: 'Portsmouth · Downtown', text: 'Kingston hosted the sailing events of the 1976 Montréal Olympics and still calls itself a freshwater sailing capital. The afternoon winds off the lake are reliable — and can be strong.' },
    { icon: '🚲', name: 'Wolfe Island Cycling', dist: 'Free ferry', text: 'Take the free car ferry from downtown and cycle flat, quiet farm roads among the wind turbines. Check the ferry schedule for the return.' },
    { icon: '🛶', name: 'Paddling', dist: 'Rideau · Thousand Islands', text: 'The canal’s lakes north of the city and the islands to the east are classic paddling waters. Big ship traffic and wind on the St. Lawrence demand care.' },
    { icon: '🤿', name: 'Shipwreck Diving', dist: 'Lake Ontario', text: 'Cold, clear water preserves dozens of 19th- and 20th-century wrecks off Kingston. Guided dives only; the water stays cold year-round.' },
    { icon: '🥾', name: 'Waterfront Trail', dist: 'Along the lake', text: 'A walking and cycling route along the shore links downtown, Queen’s, Portsmouth and the parks to the west.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Market Square', text: 'An outdoor rink in front of City Hall in winter. Cold, windy and very pretty with the limestone lit up at night.' },
  ],

  food: [
    { icon: '🧺', title: 'Market Square', area: 'Downtown', areaLevel: 'olive', text: 'One of the oldest public markets in Ontario, with farmers and makers in the warm season. Check current days before going.' },
    { icon: '🍺', title: 'Pubs & Breweries', area: 'Downtown', areaLevel: 'gold', text: 'Limestone pubs and local breweries — a student city has plenty of both.' },
    { icon: '🍽️', title: 'Princess Street', area: 'Downtown', areaLevel: 'danger', text: 'The main restaurant strip, from cheap student eats to serious dining rooms.' },
    { icon: '🍷', title: 'Prince Edward County', area: '≈1h west', areaLevel: 'purple', text: 'A wine and food region across the Bay of Quinte, an easy day trip by car and a short free ferry.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown · Queen’s', areaLevel: 'blue', text: 'Independent coffee shops around campus and in the old downtown blocks.' },
    { icon: '🧀', title: 'Local Producers', area: 'Wolfe Island · Countryside', areaLevel: 'safe', text: 'Cheese, maple and farm produce from the surrounding countryside at the market and in shops.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Locks open', text: 'The canal reopens to boats in May, the penitentiary tours resume, and the city fills back up. Cool and windy by the lake.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Fort Henry programs, island cruises, sailing and festivals. Warm, sometimes humid, with lake breezes. Book accommodation early.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour and students', text: 'Fall colour along the canal and in the Thousand Islands. Queen’s homecoming and move-in weekends pack the city — avoid them unless that is the point.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold and windy', text: 'Cold, grey and windy off the lake, with ice on the water. Many seasonal attractions close.' },
  ],

  gettingThere: [
    {
      icon: '🚆',
      title: 'By Train — VIA Rail',
      text: 'Kingston is on VIA Rail’s Toronto–Ottawa–Montréal corridor, with frequent trains. The station is north of downtown; take a bus or taxi in.',
      time: '≈2.5h from Toronto · ≈2h from Ottawa',
    },
    {
      icon: '🚗',
      title: 'By Car — Highway 401',
      text: 'Highway 401 runs past the city between Toronto and Montréal. Highway 15 and the Rideau region connect north toward Ottawa.',
      time: '≈2.5h from Toronto · ≈3h from Montréal',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Kingston has a small regional airport. Most visitors fly into Toronto, Ottawa or Montréal and continue by train.',
      time: 'Limited service',
    },
    {
      icon: '🏝️',
      title: 'Thousand Islands Route',
      text: 'The Thousand Islands Parkway runs east from near Gananoque toward Brockville along the river — see our Kingston to the Thousand Islands road trip.',
      time: '≈30 min to Gananoque',
    },
  ],

  stay: [
    {
      icon: '⚓',
      title: 'Downtown',
      area: 'Walkable · Waterfront',
      text: 'Hotels and inns near the waterfront, Market Square and Princess Street. Expensive and fully booked on Queen’s weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kingston+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Kingston%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Highway 401 Corridor',
      area: 'Cheaper · Car needed',
      text: 'Chain hotels by the highway north of the city, practical for a road-trip stop.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kingston+Ontario', level: 'blue' },
      ],
    },
    {
      icon: '🏝️',
      title: 'Gananoque',
      area: 'Thousand Islands · 30 min',
      text: 'A small river town at the heart of the Thousand Islands, with inns and cruise departures.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gananoque+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Kingston Transit',
      text: 'City buses cover downtown, Queen’s, the train station and the suburbs, with express routes across town. For Fort Henry, Kingston Mills and the Thousand Islands, a car, bike or tour is easier.',
      linkLabel: 'Kingston Transit',
      linkUrl: 'https://www.kingstontransit.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from Kingston Transit’s standard fares page (no effective date is shown). Cash fares are coins only and drivers carry no change. Children 14 and under ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (coins): $3.50', 'Day pass: $10', '6-ride pass: $14', 'Monthly pass: $61.75'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.kingstontransit.ca/fares-and-passes/standard-fares-and-passes/',
      },
      {
        icon: '⛴️',
        title: 'Wolfe Island Ferry',
        text: 'The provincial car ferry to Wolfe Island leaves from downtown and is free. Summer queues for cars can be long; foot passengers and cyclists board easily.',
        fareBox: {
          label: 'Ferry',
          lines: ['Fare: free', 'From downtown Kingston', 'Check the schedule'],
        },
        linkLabel: 'Ontario ferries',
        linkUrl: 'https://www.ontario.ca/',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the waterfront and Queen’s are compact and walkable.' },
          { icon: '🚲', title: 'Bike', text: 'The waterfront trail and Wolfe Island are excellent by bike.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Available; useful from the train station.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the canal locks, Prince Edward County and the Parkway.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'Check the Queen’s University calendar before booking. Move-in week and homecoming fill every room in town and send prices soaring.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Kingston hotels and short-term rentals also charge a Municipal Accommodation Tax, introduced at 4% in 2018 — confirm the current rate on your booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Kingston / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 13% HST + Municipal Accommodation Tax' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', label: 'Tours and admissions: 13% HST' },
    ],
    exempt: [
      { icon: '⛴️', label: 'Wolfe Island ferry: free' },
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '🧒', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Tour guides: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🎓', title: 'Student City', text: 'Queen’s University shapes the calendar. Early September and homecoming weekends are crowded and loud; summer is quieter.' },
    { icon: '🌬️', title: 'Lake Wind', text: 'The wind off Lake Ontario makes summer evenings cool and winter brutal. Bring a layer even in July.' },
    { icon: '🔒', title: 'Book the Pen Tours', text: 'Kingston Penitentiary tours run roughly April to October and sell out on summer weekends.' },
    { icon: '🚆', title: 'Train Is Easy', text: 'VIA Rail makes Kingston an easy stop between Toronto, Ottawa and Montréal without a car.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', title: 'Exact Change', text: 'Kingston Transit takes coins only for cash fares, with no change given. A day pass is simpler.' },
    { icon: '🪶', title: 'Whose Land', text: 'Kingston stands at Katarokwi, the traditional homeland of the Anishinaabe, Haudenosaunee and Huron-Wendat. The name Cataraqui, still used for the river and parts of the city, comes from it.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Kingston General Hospital', '76 Stuart Street', 'Emergencies: call 911'] },
  ],
};

export default KINGSTON;
