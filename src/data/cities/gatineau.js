// Gatineau — данные страницы /city/gatineau (Гатино, КВЕБЕК)
// Видео в шапке — Pexels, автор RUIQING BI ("Peaceful Riverfront View of
// Ottawa Skyline at Twilight"). Снято с оттавского берега у Nepean Point;
// первая половина ролика — Парламент, поэтому взят отрезок с 9-й секунды:
// через реку виден Халл (центр Гатино) — Канадский музей истории, башни
// Place du Portage и пар фабрики Kruger. Лицензия Pexels подписи не требует.
// Население — перепись 2021 года (Statistics Canada, 291 041).
// Тарифы STO: $4.75 наличными (CBC, 2026) и месячный $116.50 (PDF-сетка
// STO 2026) — сайт STO при проверке не открывался, на странице есть
// пометка «уточняйте». Больницы — адреса с сайта CISSS de l'Outaouais.
// Парковка у визит-центра парка Гатино — платная с 1 сентября 2026 (CTV).
// Слияние 2002 года, музей, парк Гатино, казино — из общих знаний.

export const GATINEAU = {
  slug: 'gatineau',
  name: 'Gatineau',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Across the River from Ottawa',
  accentLevel: 'gold',
  heroIcon: '🏛️',
  heroVideo: '/Cities/Gatineau/hero.mp4',
  heroImage: '/Cities/Gatineau/hero-poster.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.4765, lon: -75.7013 },
  subtitle: 'The Quebec Side of the Capital',
  description:
    'Across the Ottawa River from Parliament Hill, Gatineau is the other half of Canada’s capital region — French-speaking, a little cheaper, and home to the Canadian Museum of History. Fifteen minutes north of its bridges begins Gatineau Park, a huge wedge of lakes, forest and ski trails that most capitals could only dream of.',

  actions: [
    { label: 'Explore Gatineau', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈291K (2021)' },
    { label: 'Rank in Quebec', value: '4th largest' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Parliament Hill', value: '≈5 min by bridge' },
    { label: 'To Gatineau Park', value: '≈15 min by car' },
  ],

  badges: ['Capital Region', 'Gatineau Park', 'Museum of History'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '291,041', label: 'People in the 2021 census — Quebec’s fourth-largest city', level: 'blue' },
    { value: '2002', label: 'Hull, Aylmer, Gatineau, Buckingham and Masson-Angers merge into one city', level: 'purple' },
    { value: '5', label: 'Bridges across the Ottawa River to downtown Ottawa and beyond', level: 'gold' },
    { value: '$4.75', label: 'A single STO bus fare in cash (2026) — confirm on sto.ca', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Hull (Downtown)', icon: '🏛️', tag: '🏛️ Centre', tagLevel: 'gold', meta: 'Museum of History · Federal office towers · Bars and restaurants of Vieux-Hull' },
    { name: 'Aylmer', icon: '⛵', tag: '⛵ West', tagLevel: 'blue', meta: 'Old village core · Marina on Lac Deschênes · Bike paths along the river' },
    { name: 'Gatineau (East)', icon: '🏡', tag: '🏡 East', tagLevel: 'safe', meta: 'Largest residential sector · Rapibus line · Shopping along Maloney Boulevard' },
    { name: 'Plateau', icon: '🌲', tag: '🌲 Northwest', tagLevel: 'olive', meta: 'Newer neighbourhoods on the edge of Gatineau Park' },
    { name: 'Lac-Leamy', icon: '🎰', tag: '🎰 Leisure', tagLevel: 'purple', meta: 'Casino du Lac-Leamy · Urban beach · Park around the lakes' },
    { name: 'Buckingham & Masson-Angers', icon: '🌾', tag: '🌾 Far east', tagLevel: 'danger', meta: 'Small-town feel on the Lièvre River · Gateway east toward Montebello' },
  ],

  attractions: [
    {
      name: 'Canadian Museum of History',
      icon: '🏛️',
      text: 'One of Canada’s most visited museums sits on the riverbank directly facing Parliament Hill. Its curving building, designed by Douglas Cardinal, holds the Grand Hall with its row of Pacific Coast totem poles and the Canadian History Hall. The terrace has one of the best views of Parliament in the region.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Gatineau Park',
      icon: '🌲',
      text: 'A vast federal park managed by the National Capital Commission, starting just north of downtown. Hiking and biking trails in summer, a large network of cross-country ski trails in winter, swimming beaches, and lookouts over the Ottawa Valley.',
      tags: [{ label: 'Free entry', level: 'safe' }, { label: 'Some paid parking', level: 'caution' }],
    },
    {
      name: 'Champlain Lookout',
      icon: '👀',
      text: 'The classic viewpoint at the end of the Gatineau Parkway, looking out over the Ottawa River valley. Spectacular in early October. The parkway closes to cars in winter, when it becomes part of the ski network.',
      tags: [{ label: 'Fall colours', level: 'danger' }, { label: 'Seasonal road', level: 'caution' }],
    },
    {
      name: 'Pink Lake',
      icon: '💧',
      text: 'A small, green lake in Gatineau Park, ringed by a short boardwalk trail. Swimming is not allowed — the lake is fragile — but the loop makes an easy half-hour walk.',
      tags: [{ label: 'Easy trail', level: 'safe' }, { label: 'No swimming', level: 'caution' }],
    },
    {
      name: 'Mackenzie King Estate',
      icon: '🏚️',
      text: 'The summer retreat of Canada’s longest-serving prime minister, with gardens and the picturesque ruins he collected. Seasonal opening; parking fees apply in summer.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'Old Aylmer & the Marina',
      icon: '⛵',
      text: 'A historic village core with stone buildings, cafés and a marina on Lac Deschênes, a wide stretch of the Ottawa River. Good for sunset walks and bike rides along the shore.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sunsets', level: 'gold' }],
    },
  ],

  outdoorHeading: 'A Wilderness Park Next to the Capital',
  outdoor: [
    { icon: '🥾', name: 'Hiking', dist: 'Gatineau Park', text: 'Trails from short lake loops to long ridge walks. The busiest trailheads fill up on fall weekends.' },
    { icon: '⛷️', name: 'Cross-Country Skiing', dist: 'Gatineau Park', text: 'A large groomed network of classic and skate-ski trails. Trail passes are required.' },
    { icon: '🚲', name: 'Cycling', dist: 'Parkways & river paths', text: 'The Gatineau Parkway is popular with road cyclists; check for car-free mornings in summer. Paths link to Ottawa’s network across the bridges.' },
    { icon: '🏊', name: 'Swimming', dist: 'Park beaches · Lac-Leamy', text: 'Supervised beaches on lakes in Gatineau Park and an urban beach at Lac-Leamy in summer.' },
    { icon: '🛶', name: 'Paddling', dist: 'Lakes & Ottawa River', text: 'Canoe rentals on park lakes; calm water on Lac Deschênes off Aylmer.' },
    { icon: '🍁', name: 'Fall Colours', dist: 'Late Sept — mid Oct', text: 'The park’s hardwood ridges turn red and gold — go on a weekday if you can.' },
  ],

  food: [
    { icon: '🍻', title: 'Vieux-Hull Bars', area: 'Downtown', areaLevel: 'gold', text: 'Bars and live music around the Promenade du Portage, busy with Ottawans crossing the bridge on weekends.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Proper Quebec casse-croûtes and late-night spots.' },
    { icon: '🍁', title: 'Sugar Shacks', area: 'Outaouais', areaLevel: 'danger', text: 'In March and April, cabanes à sucre in the surrounding countryside serve maple feasts.' },
    { icon: '🍷', title: 'Bistros', area: 'Hull · Aylmer', areaLevel: 'purple', text: 'French-style bistros, often a little cheaper than across the river.' },
    { icon: '🧀', title: 'Local Cheese & Produce', area: 'Markets', areaLevel: 'safe', text: 'Quebec cheeses and Outaouais farm produce at local markets in season.' },
    { icon: '☕', title: 'Village Cafés', area: 'Old Aylmer', areaLevel: 'blue', text: 'Cafés near the marina for a slow morning by the river.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Maple & floods', text: 'Sugar shack season in early spring. The Ottawa River can flood low-lying areas in wet years. Black flies in the park in May–June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Park season', text: 'Warm and humid — beaches, paddling and patios. Gatineau Park parking fills early on weekends.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Peak colour', text: 'The best season: brilliant colour in Gatineau Park, usually peaking around early October.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Cold and snowy — perfect for cross-country skiing and snowshoeing in the park. Winterlude events take place across the capital region in February.' },
  ],

  gettingThere: [
    {
      icon: '🌉',
      title: 'From Ottawa',
      text: 'Five bridges cross the river. Walking or cycling from Parliament Hill to the Museum of History takes about 20 minutes; STO buses cross into downtown Ottawa.',
      time: '≈5–15 min',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Ottawa International (YOW) is the main airport. Gatineau has a small regional airport with limited service.',
      time: '≈25–30 min from YOW',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no VIA Rail station in Gatineau — use Ottawa Station, then cross by bus, taxi or car.',
      time: 'Ottawa Station ≈15 min',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 50 runs east toward Montréal along the Quebec side of the river; Highway 5 heads north past Gatineau Park.',
      time: '≈2 h to Montréal',
    },
  ],

  stay: [
    {
      icon: '🏛️',
      title: 'Downtown Hull',
      area: 'Walk to Parliament · Museum',
      text: 'Hotels near the Museum of History, often cheaper than downtown Ottawa yet a short walk across the bridge.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hull+Gatineau', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Gatineau%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎰',
      title: 'Lac-Leamy',
      area: 'Resort-style',
      text: 'Hotels by the casino and the lakes, between downtown and the east end.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lac-Leamy+Gatineau', level: 'blue' },
      ],
    },
    {
      icon: '🌲',
      title: 'Near Gatineau Park',
      area: 'Chelsea · Old Chelsea',
      text: 'Inns and rentals just outside the city in Chelsea, close to park trailheads.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Chelsea+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'STO Buses & Rapibus',
      text: 'The Société de transport de l’Outaouais (STO) runs Gatineau’s buses, including the Rapibus — a bus line on its own dedicated corridor from the east end to downtown Hull. Many STO routes continue across the river into downtown Ottawa.',
      linkLabel: 'STO',
      linkUrl: 'https://www.sto.ca/en/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares rise every year. The figures below are for 2026 from secondary sources — confirm on sto.ca before you travel. The STO monthly pass is also accepted on OC Transpo buses and the O-Train in Ottawa.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single, cash: $4.75', 'Monthly pass: ≈$116.50', 'Day passes on the Multi card'],
        },
        linkLabel: 'STO fares',
        linkUrl: 'https://www.sto.ca/en/fares/grid/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown Hull and Parliament Hill are a walk apart.' },
          { icon: '🚲', title: 'Bike', text: 'River paths connect Aylmer, Hull and Ottawa’s network.' },
          { icon: '🚗', title: 'Car', text: 'Needed for most of Gatineau Park and the outer sectors.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Available on both sides of the river.' },
        ],
      },
    ],
    proTip: {
      label: 'Two-province tip:',
      text: 'You cross a provincial border every time you cross a bridge. Taxes, liquor rules and the drinking age change — 18 in Quebec, 19 in Ontario.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total — slightly more than the 13% HST across the river in Ottawa. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ottawa / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Gatineau / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + QST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + QST' },
      { icon: '🎟️', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌲', label: 'Gatineau Park entry: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French First', text: 'Gatineau is French-speaking, but with so many federal workers English is widely understood.' },
    { icon: '🍺', title: 'Different Rules', text: 'Beer and wine are sold in Quebec corner stores (dépanneurs); the drinking age is 18, not 19 as in Ontario.' },
    { icon: '🅿️', title: 'Park Parking', text: 'Paid parking at the Gatineau Park Visitor Centre since 1 September 2026: first 30 min free, then $3 per 30 min, max $16/day. Summer fees also apply at beaches and the Mackenzie King Estate.' },
    { icon: '🦟', title: 'Bugs', text: 'Black flies and mosquitoes in Gatineau Park from May into July — bring repellent.' },
    { icon: '🌊', title: 'Spring Floods', text: 'The Ottawa River has flooded parts of Gatineau in wet springs. Check advisories in April and May.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time, the same as Ottawa: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Gatineau lies on the unceded traditional territory of the Algonquin Anishinaabe Nation.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôpital de Hull · 116 Boul. Lionel-Émond', 'Hôpital de Gatineau · 909 Boul. La Vérendrye Ouest', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default GATINEAU;
