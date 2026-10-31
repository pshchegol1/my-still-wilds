// Canmore — данные страницы /city/canmore
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Edward Rode, ролик назван "Canmore, Alberta, Canada". Проверено
// по кадрам: город внизу, над ним Ha Ling Peak и хребет, водохранилище
// Rundle Forebay и река Боу справа. Оригинал 13 с, 10 МБ — пережат до
// ~4,5 МБ, постер вырезан из первого кадра.
// Canmore — НЕ в национальном парке: пропуск Parks Canada в городе не
// нужен, а для троп Кананаскиса нужен отдельный провинциальный
// Kananaskis Conservation Pass. Это главная путаница у туристов,
// поэтому на странице она разобрана явно.
// Население — оценка Alberta Regional Dashboard на 2025 год.

export const CANMORE = {
  slug: 'canmore',
  name: 'Canmore',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Bow Valley',
  accentLevel: 'blue',
  heroIcon: '⛰️',
  heroImage: '/Cities/Canmore/hero-poster.jpg',
  heroVideo: '/Cities/Canmore/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.0884, lon: -115.3479 },
  subtitle: 'The Mountain Town Outside the Park',
  description:
    'A former coal town in the Bow Valley, twenty minutes short of Banff and just outside the national park gate. It mined coal for almost a century, hosted the Nordic events of the 1988 Olympics on the old mine lands, and now lives on the mountains around it — Ha Ling, the Three Sisters and the trails of Kananaskis on its doorstep.',

  actions: [
    { label: 'Explore Canmore', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈17.3K' },
    { label: 'Elevation', value: '≈1,310 m' },
    { label: 'Park Pass', value: 'Not in town' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈106 km · 1h15' },
    { label: 'To Banff', value: '≈26 km · 20 min' },
  ],

  badges: ['Bow Valley', 'Former Coal Town', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '⛷️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1979', label: 'The year the last coal mine closed — Canmore had been a mining town for close to a century', level: 'danger' },
    { value: '1988', label: 'Cross-country skiing and biathlon at the Calgary Olympics, on the reclaimed mine lands', level: 'gold' },
    { value: '$15', label: 'Kananaskis Conservation Pass per vehicle per day — needed at many trailheads, not for town', level: 'blue' },
    { value: '1978', label: 'First Canmore Folk Music Festival — the longest-running folk festival in Alberta', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏘️', tag: '🏘️ Core', tagLevel: 'gold', meta: 'Main Street shops and cafés · Centennial Park · Walkable · Ha Ling straight ahead' },
    { name: 'Bow River & Policeman’s Creek', icon: '🌊', tag: '🌊 Riverside', tagLevel: 'blue', meta: 'Boardwalk along the creek · River paths · The old engine bridge' },
    { name: 'Spring Creek & Railway', icon: '🚂', tag: '🚂 Central', tagLevel: 'olive', meta: 'Newer mixed neighbourhood · Close to downtown · Bow Valley Trail hotels nearby' },
    { name: 'Nordic Centre & Mineside', icon: '⛷️', tag: '⛷️ South-west', tagLevel: 'safe', meta: 'Olympic trail network · Old mine sites · Quarry Lake · Road to Spray Lakes' },
    { name: 'Three Sisters', icon: '🏔️', tag: '🏔️ East', tagLevel: 'danger', meta: 'Golf, resort homes · Built over old mine workings · Contested growth area' },
    { name: 'Bow Valley Trail', icon: '🛣️', tag: '🛣️ Highway strip', tagLevel: 'purple', meta: 'Most hotels and motels · Car-oriented · Roam bus to Banff' },
  ],

  attractions: [
    {
      name: 'Ha Ling Peak',
      icon: '⛰️',
      text: 'The mountain that looms over town is named after Ha Ling, a Chinese cook who in 1896 accepted a $50 bet that he could not climb it, plant a flag and get back in a day — and did. For decades the peak carried a slur instead of his name; a campaign led by a Canmore teacher of Chinese descent had it renamed in the late 1990s. The steep trail to the summit is one of the most popular in the area and needs a Kananaskis pass at the trailhead.',
      tags: [{ label: 'Steep hike', level: 'danger' }, { label: 'Kananaskis pass', level: 'caution' }],
    },
    {
      name: 'Canmore Nordic Centre',
      icon: '⛷️',
      text: 'Built for the cross-country and biathlon events of the 1988 Olympics on land that had been an open-pit coal mine. Now a provincial park with a large trail network — skiing in winter, mountain biking and running in summer — and still a training base for Canadian athletes.',
      tags: [{ label: 'Olympic venue', level: 'gold' }, { label: 'Year-round', level: 'safe' }],
    },
    {
      name: 'Grassi Lakes',
      icon: '💧',
      text: 'Two small, startlingly clear green-blue ponds under limestone cliffs, reached by a short hike past a waterfall. One of the most visited trails in the valley — go early, and bring a Kananaskis Conservation Pass for the car park, where fines are real.',
      tags: [{ label: 'Easy hike', level: 'safe' }, { label: 'Pass required', level: 'caution' }],
    },
    {
      name: 'Quarry Lake',
      icon: '🏊',
      text: 'A former open-pit mine reclaimed into a lake with a small beach, picnic meadow and off-leash dog area. Cold, but on a hot day it is where the town swims, with the Three Sisters reflected in the water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Swimming', level: 'blue' }],
    },
    {
      name: 'Canmore Museum & the Mines',
      icon: '⛏️',
      text: 'Canmore was a coal town for close to a century until the last mine closed in 1979, and much of the land the town is built on — including the Three Sisters development — sits over old mine workings. The local museum and the North West Mounted Police Barracks tell the story of the miners and the railway that made the town.',
      tags: [{ label: 'Local history', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
    },
    {
      name: 'Canmore Folk Music Festival',
      icon: '🎶',
      text: 'Alberta’s longest-running folk festival, held every year since 1978 over the Heritage Day long weekend in early August at Centennial Park downtown. Parking that weekend is almost nonexistent — come by bike or bus.',
      tags: [{ label: 'August long weekend', level: 'purple' }, { label: 'Ticketed', level: 'caution' }],
    },
  ],

  outdoorHeading: 'Kananaskis at the Back Door',
  outdoor: [
    { icon: '🥾', name: 'Mountain Hiking', dist: 'Ha Ling · East End of Rundle · Grassi', text: 'Steep, rewarding hikes start minutes from town. Many trailheads are in Kananaskis and need the Conservation Pass. Snow lingers on north faces well into June.' },
    { icon: '🚴', name: 'Legacy Trail', dist: 'Canmore to Banff', text: 'A paved path beside the highway into Banff National Park, about 22 km. Ride there and take the Roam bus back. Entering the park by bike still requires a park pass.' },
    { icon: '🚵', name: 'Mountain Biking', dist: 'Nordic Centre', text: 'The Olympic trail network turns into one of the best mountain-biking hubs in Alberta once the snow melts.' },
    { icon: '🛶', name: 'Bow River', dist: 'Through town', text: 'Paddling and float trips on the Bow. It is cold, fast in spring runoff and has weirs and debris — go with a guide if you do not know the river.' },
    { icon: '🐻', name: 'Wildlife Corridors', dist: 'Around town', text: 'Canmore sits in a narrow wildlife corridor between the mountains, and bears, elk, cougars and wolves move through the edges of town. Carry bear spray on any trail, keep dogs leashed, and respect corridor closures.' },
    { icon: '🏔️', name: 'Spray Lakes Road', dist: 'Into Kananaskis', text: 'A gravel road over the shoulder of Ha Ling into the Spray Valley — dusty, rough and spectacular. Fuel up first, expect no signal, and buy a Conservation Pass.' },
  ],

  food: [
    { icon: '☕', title: 'Main Street Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Bakeries and coffee shops that open early for hikers and climbers. Grab trail lunch here — Kananaskis has almost nothing for sale.' },
    { icon: '🍺', title: 'Breweries & Distillery', area: 'Downtown · Bow Valley Trail', areaLevel: 'gold', text: 'A small but strong brewery scene, plus a distillery. The usual end to a mountain day.' },
    { icon: '🥩', title: 'Mountain Dining', area: 'Downtown', areaLevel: 'danger', text: 'From pubs to fine dining, generally a little cheaper and less crowded than Banff — which is why Banff visitors often come here to eat.' },
    { icon: '🛒', title: 'Groceries', area: 'Bow Valley Trail', areaLevel: 'safe', text: 'Full supermarkets with prices closer to Calgary than to Banff. The place to stock up before heading into the park or Kananaskis.' },
    { icon: '🍜', title: 'Global Food', area: 'Downtown', areaLevel: 'purple', text: 'A wider range of cuisines than you might expect for a town this size, fed by the international crowd that works in the valley.' },
    { icon: '🧺', title: 'Farmers’ Market', area: 'Summer · downtown', areaLevel: 'olive', text: 'A summer market with Alberta producers and local makers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Valley first, peaks later', text: 'The valley thaws early; higher trails stay snowy and avalanche-prone into June. Bears come out hungry — carry spray from the first warm days.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Long days, busy trailheads and the folk festival in early August. Wildfire smoke can fill the valley. Start hikes early to beat both crowds and afternoon thunderstorms.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Larches and quiet', text: 'Golden larches on the high trails in mid-September, fewer people, crisp mornings. Elk rut season — keep away from bulls.' },
    { icon: '⛷️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Nordic skiing', text: 'Cross-country skiing at the Nordic Centre, ice climbing, and quick access to the Banff ski hills. Chinook winds bring sudden thaws; cold snaps below −25 °C still happen.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car from Calgary',
      text: 'The Trans-Canada Highway west from Calgary, about 106 km. Canmore is the last town before the Banff National Park gate, so no park pass is needed to drive into town — only if you continue west.',
      time: '≈1h15 from Calgary',
    },
    {
      icon: '✈️',
      title: 'From Calgary Airport (YYC)',
      text: 'Scheduled airport shuttles run to Canmore and Banff hotels. Book ahead in summer and ski season.',
      time: '≈1h30 from YYC',
    },
    {
      icon: '🚌',
      title: 'By Roam Transit',
      text: 'Roam’s Route 3 links Canmore and Banff in about 25 minutes. Local Canmore routes are fare-free.',
      time: '≈25 min to Banff',
    },
    {
      icon: '🚴',
      title: 'By Bike from Banff',
      text: 'The Legacy Trail connects the two towns along the valley floor — one of the most scenic commutes in the country.',
      time: '≈22 km',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Downtown Canmore',
      area: 'Walkable · Best base',
      text: 'Close to Main Street, the river and the bus. More character than the highway strip and easy to manage without a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Canmore+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Canmore%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Bow Valley Trail',
      area: 'Most hotels · Car-friendly',
      text: 'Hotels and motels along the old highway, with parking and a Roam stop. Usually cheaper than Banff for the same standard.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Bow+Valley+Trail+Canmore', level: 'blue' },
      ],
    },
    {
      icon: '⛺',
      title: 'Kananaskis Campgrounds',
      area: 'Rustic · Pass required',
      text: 'Provincial campgrounds in Kananaskis and along the Spray Lakes road. Book through Alberta Parks; a Conservation Pass is required for your vehicle.',
      links: [
        { label: 'Alberta Parks Reservations', url: 'https://reserve.albertaparks.ca/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Roam Transit',
      text: 'Roam runs Canmore’s local buses and the regional link to Banff and Lake Louise. Canmore local routes are currently fare-free. Kananaskis trailheads have no public transit — you will need a car.',
      linkLabel: 'Roam Transit',
      linkUrl: 'https://roamtransit.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Two Different Passes',
        text: 'The most common confusion in Canmore. The town itself needs neither. Kananaskis trailheads (Grassi Lakes, Ha Ling, the Spray Lakes road) need the provincial Conservation Pass. Driving west into Banff needs the federal Parks Canada pass. They are not interchangeable.',
        fareBox: {
          label: '2026 prices',
          lines: ['Kananaskis pass: $15/vehicle/day', 'Kananaskis annual: $90', 'Parks Canada daily: $12.25 adult', 'Town of Canmore: no pass'],
        },
        linkLabel: 'Kananaskis Conservation Pass',
        linkUrl: 'https://www.albertaparks.ca/',
      },
      {
        icon: '🚍',
        title: 'Roam Fares',
        text: 'Fares from Roam’s 2026 fare table. Children ride free.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Canmore local: fare-free', 'Route 3 to Banff: $6', 'System day pass: $30'],
        },
        linkLabel: 'Roam Fares',
        linkUrl: 'https://roamtransit.com/fares/',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Car', text: 'Needed for Kananaskis and most trailheads. Downtown has paid parking in summer.' },
          { icon: '🚲', title: 'Bike', text: 'Town is compact and bike-friendly, with paths along the river and the Legacy Trail to Banff.' },
          { icon: '🚕', title: 'Taxis', text: 'Limited; book ahead for early or late trips.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the river, Policeman’s Creek and Quarry Lake are all walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Pass tip:',
      text: 'If you will hike in Kananaskis more than six days in a year, the $90 annual Conservation Pass is cheaper than buying daily passes. Check Alberta Parks for how many vehicles it covers.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some properties add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Canmore / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', label: 'Tours, rentals and lessons: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏞️', label: 'Park passes: priced as posted' },
      { icon: '🛏️', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and instructors: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🎫', title: 'Which Pass?', text: 'Town: none. Kananaskis trailheads: Kananaskis Conservation Pass ($15/vehicle/day in 2026; parking without one is fined). Banff National Park: Parks Canada pass. Buy the right one before you park.' },
    { icon: '🐻', title: 'Bears in Town', text: 'Bears and cougars use the corridors around Canmore. Carry bear spray on every trail, never leave food or garbage out, and keep dogs on leash.' },
    { icon: '🌬️', title: 'Chinooks & Weather', text: 'Warm chinook winds can melt snow in hours in winter, and summer storms build fast in the afternoon. Check the forecast before any mountain day.' },
    { icon: '📵', title: 'No Signal Out There', text: 'Coverage is fine in town and vanishes on the Spray Lakes road and most of Kananaskis. Download maps and tell someone your plan.' },
    { icon: '🏗️', title: 'Growth & Housing', text: 'Canmore is under pressure: second homes, short-term rentals and the contested Three Sisters development — approved by a provincial tribunal in 2022 over the town’s objections — shape local politics. Workers struggle to find housing; it is part of the town you are visiting.' },
    { icon: '⏰', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🪶', title: 'Whose Land', text: 'Canmore is in Treaty 7 territory. The Stoney Nakoda (Îyârhe Nakoda) Nations live just east of the valley at Mînî Thnî (Morley), and the Bow Valley is also part of the traditional lands of the Tsuut’ina and the Blackfoot Confederacy.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Canmore General Hospital', '1100 Hospital Place', 'Emergencies: call 911'] },
  ],
};

export default CANMORE;
