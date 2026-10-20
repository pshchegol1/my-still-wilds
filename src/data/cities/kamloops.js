// Kamloops — данные страницы /city/kamloops
// В шапке ролик из public/Cities/Kamloops. Снят он, судя по кадрам, не
// в Камлупсе: на видео озеро в густом хвойном лесу, а Камлупс —
// полупустыня у слияния двух рек. Ролик поставлен по прямому решению
// владельца сайта; если позже найдётся кадр самого города, менять
// нужно только heroVideo и heroImage. heroImage — постер, вырезанный
// из первой секунды того же ролика, чтобы шапка не мигала чужим видом
// до загрузки видео.
// Районы и достопримечательности без фото, работает icon-fallback.
// Все цифры (тарифы, расстояния, население) — из проверенных
// источников на октябрь 2026; графики и цены меняются, поэтому в
// тексте везде сказано сверяться перед поездкой.

export const KAMLOOPS = {
  slug: 'kamloops',
  name: 'Kamloops',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Thompson Country',
  accentLevel: 'gold',
  heroIcon: '🏜️',
  heroImage: '/Cities/Kamloops/hero-poster.jpg',
  heroVideo: '/Cities/Kamloops/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.6745, lon: -120.3273 },
  subtitle: 'Where the Rivers Meet',
  description:
    'The dry heart of British Columbia, at the confluence of the North and South Thompson rivers. Sagebrush hills instead of rainforest, some of the hottest summers in Canada, and over two thousand hours of sun a year. The name is Secwepemctsín — Tk’emlúps, "where the rivers meet" — and the Secwépemc have lived here for thousands of years.',

  actions: [
    { label: 'Explore Kamloops', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈98K' },
    { label: 'Climate', value: 'Semi-arid' },
    { label: 'Annual Sunshine', value: '2,000+ hours' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈355 km · 4–5h' },
    { label: 'To Sun Peaks', value: '≈45 min' },
  ],

  badges: ['Semi-Arid', 'River Confluence', 'Secwépemc Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'danger', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'gold', rating: 5 },
    { icon: '⛷️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '2', label: 'Rivers meeting in the middle of the city — the North and South Thompson', level: 'blue' },
    { value: '2,000+', label: 'Hours of sunshine a year, among the sunniest places in British Columbia', level: 'gold' },
    { value: '100+', label: 'Sports tournaments a year — the city calls itself the Tournament Capital of Canada', level: 'safe' },
    { value: '≈45 min', label: 'To Sun Peaks Resort, one of the largest ski areas in the country', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Riverside', icon: '🌳', tag: '🌳 Core', tagLevel: 'gold', meta: 'Victoria Street · Riverside Park · Beaches on the Thompson · Cafés and brewpubs' },
    { name: 'North Shore', icon: '🌉', tag: '🌉 Across the river', tagLevel: 'blue', meta: 'Tranquille Road · Older neighbourhoods · Cheaper stays · Links to the airport' },
    { name: 'Sahali & Aberdeen', icon: '🏫', tag: '🏫 Hillside', tagLevel: 'safe', meta: 'Thompson Rivers University · Shopping · Views over the valley' },
    { name: 'Valleyview & Dallas', icon: '🛣️', tag: '🛣️ East', tagLevel: 'olive', meta: 'Along the South Thompson · Highway motels · Closest to the BC Wildlife Park' },
    { name: 'Westsyde & Batchelor', icon: '🏡', tag: '🏡 Residential', tagLevel: 'purple', meta: 'North along the river · Quiet · Trailheads into the grassland hills' },
    { name: 'Tk’emlúps te Secwépemc', icon: '🪶', tag: '🪶 First Nation', tagLevel: 'danger', meta: 'Across the river from downtown · Secwépemc Museum & Heritage Park · Powwow grounds' },
  ],

  attractions: [
    {
      name: 'Secwépemc Museum & Heritage Park',
      icon: '🪶',
      text: 'The most important place in the city, and run by the Secwépemc themselves. A five-hectare site with a walking trail through the archaeological remains of a winter village roughly two thousand years old, reconstructed pit houses and a summer village, plus galleries of Secwépemc history. The main building was once the residence for the staff who ran the Indian residential school next door — the museum does not hide that.',
      tags: [{ label: 'Indigenous-run', level: 'danger' }, { label: 'Essential', level: 'gold' }],
    },
    {
      name: 'Le Estcwicwéy̓ — The Missing',
      icon: '🕯️',
      text: 'In May 2021 Tk’emlúps te Secwépemc announced that ground-penetrating radar had found what were reported as 215 potential unmarked burials at the former Kamloops Indian Residential School. A later specialist report put the figure at roughly 200 potential burial sites, with much of the grounds still unsurveyed, and the search continues. The Nation’s position is that the radar confirms what survivors’ oral history had already established. The site is not a tourist attraction — it is a place people visit quietly, if at all.',
      tags: [{ label: 'Treat with care', level: 'danger' }],
    },
    {
      name: 'Riverside Park',
      icon: '🏖️',
      text: 'Downtown on the Thompson, with a swimming beach, a waterfront walkway and free concerts in summer. It is the easiest introduction to why a desert city is built around water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Central', level: 'blue' }],
    },
    {
      name: 'BC Wildlife Park',
      icon: '🐺',
      text: 'East of the city, a rehabilitation-focused park with over two hundred animals — wolves, bison, cougars and more — most of them rescued and unable to return to the wild. There is a miniature train for children. About half an hour from downtown.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Family', level: 'safe' }],
    },
    {
      name: 'Sun Peaks Resort',
      icon: '⛷️',
      text: 'Roughly forty-five minutes north-east, one of the largest ski areas in Canada and a full village in its own right. Skiing in winter, mountain biking and alpine hiking in summer. Many people stay in Kamloops and drive up for the day.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Year-round', level: 'safe' }],
    },
    {
      name: 'The Grassland Hills',
      icon: '🌾',
      text: 'Kamloops sits in Canada’s dry interior grassland, and the hills around the city are laced with trails — Kenna Cartwright Park on the bluff above downtown is the biggest. Sagebrush, bunchgrass and no shade: these are morning and evening walks in summer, not midday ones.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'No shade', level: 'danger' }],
    },
  ],

  outdoorHeading: 'A Desert City Built on Two Rivers',
  outdoor: [
    { icon: '🚵', name: 'Mountain Biking', dist: 'Bike Ranch · city trails', text: 'Kamloops has a serious riding reputation and a dry, grippy dirt that holds up when the coast is a swamp. The Kamloops Bike Ranch is the city-run park; the surrounding hills hold far more. Summer riding is best early or late in the day.' },
    { icon: '🥾', name: 'Grassland Hiking', dist: 'Hills around the city', text: 'Open bunchgrass and sagebrush with long views over the river valleys. There is almost no shade anywhere — carry far more water than a coastal hike of the same length would need, and watch for rattlesnakes on warm rock.' },
    { icon: '🛶', name: 'The Thompson Rivers', dist: 'Through the city', text: 'Two rivers meet downtown, and both are used for paddling, rafting and swimming in summer. Current and cold water are real hazards in spring runoff — the rivers look calmer than they are.' },
    { icon: '🎣', name: 'Lake Fishing', dist: 'Hundreds within an hour', text: 'The plateau around Kamloops is famous for small trout lakes, and Kamloops trout is a recognised strain of rainbow. Licences are required; check regulations for each lake and season.' },
    { icon: '⛷️', name: 'Sun Peaks', dist: '≈45 min north-east', text: 'A large ski resort with a pedestrian village, reachable as a day trip from the city. Winter driving up the Sun Peaks Road needs proper tires; summer brings lift-served biking and alpine trails.' },
    { icon: '🐍', name: 'Heat & Wildlife', dist: 'City-wide', text: 'Western rattlesnakes live in these grasslands and are a genuine, if uncommon, hazard — watch where you put your hands and feet. Summer afternoons regularly pass 35 °C with no cover at all.' },
  ],

  food: [
    { icon: '🍺', title: 'Craft Beer', area: 'Downtown · North Shore', areaLevel: 'gold', text: 'A small but real brewery scene clustered downtown and across the river, and a reliable landing place after a hot afternoon on the trails.' },
    { icon: '🍷', title: 'Thompson Valley Wine', area: 'East of the city', areaLevel: 'purple', text: 'One of Canada’s newest and smallest wine regions, with a handful of wineries along the South Thompson. Much less developed than the Okanagan, which is part of its appeal.' },
    { icon: '☕', title: 'Cafés & Bakeries', area: 'Victoria Street', areaLevel: 'blue', text: 'The downtown strip has the concentration of independent coffee shops and bakeries. Good for an early start before the heat.' },
    { icon: '🥩', title: 'Ranch Country Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is cattle country — the grasslands around Kamloops have been ranched since the 1800s, and local beef shows up on menus throughout the city.' },
    { icon: '🍽️', title: 'Downtown Dining', area: 'Victoria Street', areaLevel: 'safe', text: 'The restaurant choice is concentrated in a few downtown blocks rather than spread across the city. Easy to cover on foot.' },
    { icon: '🌽', title: 'Farmers’ Markets', area: 'Seasonal · downtown', areaLevel: 'olive', text: 'Hot, dry summers and irrigation make this good growing country. Markets run through the warm months — check current days before planning around one.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'The best season', text: 'Green hills before the grass burns off, comfortable temperatures and long light. Arguably the nicest time to be here. River levels run high with snowmelt, so treat the water with respect.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'danger', rating: 4, note: 'Hot and smoky', text: 'Among the hottest places in Canada, regularly above 35 °C with no humidity and little shade. The lakes and rivers are the point. Wildfire smoke can settle over the valley for days or weeks — check air quality, not just the forecast.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'gold', rating: 5, note: 'Warm and clear', text: 'The heat breaks, the smoke usually clears and the light on the grassland hills is at its best. Excellent for hiking and riding, and the quietest the city gets.' },
    { icon: '⛷️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Dry cold, ski access', text: 'Drier and less snowy in the valley than the mountains around it, but cold and often grey with valley inversions. Sun Peaks is the reason most visitors come in winter; the Coquihalla can close in storms.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — the Coquihalla',
      text: 'Highway 5, the Coquihalla, is the fast route from Vancouver via Hope and Merritt — about 355 km. It is a high mountain highway that closes in winter storms and has long climbs; winter tires are required in the cold months. Highway 1 through the Fraser Canyon is slower by about an hour and more scenic.',
      time: '4–5h from Vancouver (≈355 km)',
    },
    {
      icon: '✈️',
      title: 'By Air — Kamloops Airport (YKA)',
      text: 'A small airport on the north-west side of the city with flights to Vancouver, Calgary and Prince George. The Vancouver hop is about fifty minutes in the air. Schedules are limited, so compare against the drive before booking.',
      time: '≈50 min from Vancouver',
    },
    {
      icon: '🚆',
      title: 'By Rail — VIA Rail',
      text: 'VIA Rail’s Canadian stops here on the Toronto–Vancouver route, but note two things: it runs only a few times a week, and Kamloops North station sits about 8 km from downtown on the far side of the river. It is a way to arrive, not a practical commuter link.',
      time: 'Few departures a week · station 8 km out',
    },
  ],

  stay: [
    {
      icon: '🌳',
      title: 'Downtown & Riverside',
      area: 'Best base · Walkable',
      text: 'Close to Riverside Park, the restaurants on Victoria Street and the river walk. The obvious choice if you want to leave the car parked.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kamloops+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Kamloops%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Valleyview & the Highway Strip',
      area: 'Cheaper · Car needed',
      text: 'Motels along the Trans-Canada east of the centre, handy if you are passing through or heading to the BC Wildlife Park. Less pleasant on foot.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Valleyview+Kamloops+BC', level: 'blue' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Sun Peaks Village',
      area: 'Ski-in · 45 min out',
      text: 'If the mountain is the reason for the trip, staying in the village saves the daily drive. More expensive than the city, and a long way from everything else.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sun+Peaks+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Kamloops Regional Transit (BC Transit)',
      text: 'A city bus network run by BC Transit covers downtown, the North Shore, the Sahali and Aberdeen hills and Thompson Rivers University. It works well for the central areas, but Kamloops is spread out across river valleys and hillsides — for Sun Peaks, the BC Wildlife Park or the grassland trailheads you will want a car.',
      linkLabel: 'BC Transit Kamloops',
      linkUrl: 'https://www.bctransit.com/kamloops',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app or a reloadable Umo card, tapping or scanning at the validator near the driver. A DayPASS applies automatically after your second paid trip of the day. Fares changed in September 2026, so confirm current prices before you travel.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $2.50', 'DayPASS: $5', '30-day adult pass: $55', 'Concession (13–18, 65+): $35', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍',
        title: 'Key Routes',
        text: 'Routes radiate from downtown across the river to the North Shore and up the hill to the university. Service levels change between semesters and seasons, so check the current schedule rather than assuming frequency.',
        fareBox: {
          label: 'Useful routes',
          lines: ['3 — Westsyde', '4 — Pacific Way', '5 — Pineview', '10 — North Shore / TRU Express'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/kamloops/schedules-and-maps',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Rental Car', text: 'The practical choice. Sun Peaks, the wildlife park, the lakes and the trailheads all need one, and parking in Kamloops is easy and cheap.' },
          { icon: '🚲', title: 'Rivers Trail', text: 'A paved path along the Thompson links downtown, Riverside Park and neighbourhoods either side — good for walking and cycling.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Available in the city and from the airport. Coverage thins out in the evenings and in outlying areas.' },
          { icon: '🏔️', title: 'Sun Peaks Shuttle', text: 'Seasonal shuttles run between Kamloops, the airport and Sun Peaks. Book ahead in ski season.' },
        ],
      },
    ],
    proTip: {
      label: 'Heat tip:',
      text: 'In July and August, plan walking and riding for before 10am or after 6pm. Midday here is genuinely dangerous without shade and water, and the bus is air-conditioned.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals carry no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate — 5% GST plus 8% PST on accommodation plus a Municipal and Regional District Tax of up to 3%. Confirm what a displayed room rate includes before booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Kamloops', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', label: 'Electronics and technology: 12%' },
      { icon: '🚵', label: 'Bike parts and rentals: 12% (the bike itself is exempt)' },
    ],
    exempt: [
      { icon: '🍽️', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', label: 'Basic groceries: no PST' },
      { icon: '💊', label: 'Prescription medication: no PST' },
      { icon: '📚', label: 'Books and newspapers: no PST' },
      { icon: '🧒', label: "Children's clothing: no PST" },
      { icon: '🚲', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and instructors: 10–15%. Hotel housekeeping: $2–5/night. Taxi and shuttle drivers: around 10%.',
  },

  practical: [
    { icon: '💧', title: 'Heat & Water', text: 'Summer afternoons pass 35 °C with almost no shade on the trails. Carry more water than you think you need, and plan outdoor activity for early morning or evening.' },
    { icon: '🔥', title: 'Wildfire Smoke', text: 'Smoke from interior fires can sit in the valley for days or weeks in July and August. Check the air quality index alongside the forecast, and have an indoor plan.' },
    { icon: '🐍', title: 'Rattlesnakes', text: 'Western rattlesnakes live in these grasslands. They avoid people, but watch where you step and reach on warm rock, and keep dogs leashed on the hill trails.' },
    { icon: '🛞', title: 'Winter Tires', text: 'Winter tires are required on the Coquihalla and the mountain highways in the cold months. The Coquihalla closes in storms — check DriveBC before setting out.' },
    { icon: '⏰', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Use the Umo app or card on Kamloops buses; children 12 and under ride free. Fares changed in September 2026 — confirm current prices.' },
    { icon: '🪶', title: 'Whose Land', text: 'Kamloops is in Secwépemcúl’ecw, the territory of the Secwépemc, and Tk’emlúps te Secwépemc is a community within the city, not a historical footnote. The Secwépemc Museum is run by the Nation and is the place to start.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Royal Inland Hospital', '311 Columbia Street', 'Emergencies: call 911'] },
  ],
};

export default KAMLOOPS;
