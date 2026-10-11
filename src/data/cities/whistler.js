// Whistler — данные страницы /city/whistler
// Районы пока без фото (есть только герб-crest, не фото) — используют
// icon-fallback в CityPage.jsx. Hero-видео реальное: вид на деревню и
// долину с кабинами гондолы, кадры проверены. Постер — кадр из него.

export const WHISTLER = {
  slug: 'whistler',
  name: 'Whistler',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Sea-to-Sky',
  accentLevel: 'blue',
  heroVideo: '/Cities/Whistler/11984824_1920_1080_60fps.mp4',
  heroImage: '/Cities/Whistler/hero-poster.jpg',
  heroIcon: '🏔️',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.1163, lon: -122.9574 },
  subtitle: "Canada's Mountain Resort Village",
  description:
    "Two mountains, one pedestrian village and the PEAK 2 PEAK gondola linking them. Whistler is a world-famous ski resort in winter and North America's biggest mountain-bike park in summer — a two-hour drive up the Sea-to-Sky Highway from Vancouver.",

  actions: [
    { label: 'Explore Whistler', href: '#neighbourhoods' },
    { label: 'Ski Season', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈14K' },
    { label: 'Village Elevation', value: '670 m' },
    { label: 'Ski Terrain', value: '8,171 acres' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '120 km · 1.5–2h' },
    { label: 'Ski Opening', value: 'Nov 20 (target)' },
  ],

  badges: ['Ski Resort', 'Bike Park', 'Year-Round'],

  bestSeasons: [
    { icon: '🚵', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '⛷️', label: 'Winter', level: 'blue', rating: 5 },
    { icon: '🌱', label: 'Spring', level: 'olive', rating: 3 },
  ],

  highlights: [
    { value: '8,171', label: 'Acres of ski terrain across Whistler and Blackcomb mountains', level: 'blue' },
    { value: '≈11.9 m', label: 'Average annual snowfall on the mountain', level: 'safe' },
    { value: '100+', label: 'Trails in Whistler Mountain Bike Park, the largest in North America', level: 'gold' },
    { value: '120 km', label: 'From Vancouver along the Sea-to-Sky Highway (Hwy 99)', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Whistler Village', icon: '🏘️', tag: '🏘️ Core', tagLevel: 'blue', meta: 'Pedestrian heart · Village gondola · Shops · Restaurants · Après-ski' },
    { name: 'Upper Village & Blackcomb', icon: '⛷️', tag: '⛷️ Ski-in', tagLevel: 'blue', meta: 'Blackcomb Gondola · Ski-in, ski-out stays · Quieter evenings' },
    { name: 'Creekside', icon: '🚡', tag: '🚡 Relaxed', tagLevel: 'purple', meta: 'Original base area · Gondola · Cafés · Less crowded' },
    { name: 'Lost Lake & Alpine Meadows', icon: '🌲', tag: '🌲 Lakes', tagLevel: 'safe', meta: 'Forest trails · Swimming · Nordic skiing · North of the village' },
    { name: 'Function Junction', icon: '🍺', tag: '🍺 Local', tagLevel: 'gold', meta: 'Local workshops · Cafés and brewery scene · Budget stays nearby' },
    { name: 'Pemberton', icon: '🌾', tag: '🌾 Valley', tagLevel: 'danger', meta: 'Farm valley north of Whistler · Linked by the Pemberton Commuter bus' },
  ],

  attractions: [
    {
      name: 'PEAK 2 PEAK Gondola',
      icon: '🚡',
      text: 'A record-breaking gondola crossing the valley between Whistler and Blackcomb mountains, with views of volcanic peaks, coastal rainforest and glaciers. Sightseeing hours are seasonal, so check dates before you plan.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Views', level: 'blue' }],
    },
    {
      name: 'Skiing & Snowboarding',
      icon: '⛷️',
      text: 'About 8,171 acres of terrain across two mountains, with around 11.9 m of average snowfall. The season usually opens in late November, weather permitting. Early in the season lifts open later in the morning, so check hours.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Winter', level: 'blue' }],
    },
    {
      name: 'Whistler Mountain Bike Park',
      icon: '🚵',
      text: 'The largest bike park in North America: 100+ trails in four zones, from beginner flow trails to expert downhill. Lessons and rentals are available. It runs from late spring into early fall.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Summer', level: 'blue' }],
    },
    {
      name: 'Alpine Hiking',
      icon: '🥾',
      text: 'More than 50 km of high alpine trails reached by gondola. These are summer-only: they close for the season in fall and reopen the following summer. Valley trails stay open lower down year-round.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Summer only', level: 'blue' }],
    },
    {
      name: 'Valley Trail & Lakes',
      icon: '🚲',
      text: 'A paved, mostly car-free network that links the village, neighbourhoods and lakes — ideal for walking, cycling and a summer swim. Rent a bike in the village.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Whistler Village & Olympic Plaza',
      icon: '🏟️',
      text: 'The car-free village centre hosted events at the 2010 Winter Olympics. Today it is the place for strolling, shopping, street performers and après-ski.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Nordic Spa Day',
      icon: '♨️',
      text: 'Whistler has Scandinavian-style spas that alternate hot baths, cold plunges and steam, a classic recovery after a ski or bike day. Book ahead in winter.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Relax', level: 'purple' }],
    },
    {
      name: 'Sea to Sky Gondola',
      icon: '🌉',
      text: 'On the way up from Vancouver, near Squamish: a 10-minute gondola to a summit at about 885 m with viewing platforms and trails. A good stop on the drive.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'En route', level: 'blue' }],
    },
    {
      name: 'Shannon Falls & Brandywine Falls',
      icon: '💦',
      text: 'Two free waterfall stops along the Sea-to-Sky Highway. Easy short walks from the parking areas — a good way to break up the drive.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Adventure Year-Round',
  outdoor: [
    { icon: '🚵', name: 'Mountain Biking', dist: 'Bike park · summer', text: 'Whistler Mountain Bike Park has four zones and 100+ trails; lessons are the best way to improve. The valley also has cross-country trails. Wear a full-face helmet and protective gear on lift-served terrain.' },
    { icon: '🥾', name: 'High-Alpine Hiking', dist: '50+ km of trails', text: 'Ride up the gondola and walk across the alpine. Conditions change fast — carry layers, water and a map. Alpine trails are open in summer only.' },
    { icon: '🛶', name: 'Lakes & Paddling', dist: 'Valley floor · free', text: 'Several lakes around the valley for swimming, paddleboarding, kayaking and canoeing in summer. Water stays cold even in July and August; wear a lifejacket.' },
    { icon: '🎿', name: 'Ski & Snowboard', dist: '8,171 acres', text: 'Two mountains, from groomed beginner runs to glacier terrain. Book lessons early and check lift hours — early-season days start later. Passes are cheapest bought in advance.' },
    { icon: '❄️', name: 'Nordic & Snowshoeing', dist: 'Near the village', text: 'Cross-country skiing and snowshoeing on the valley floor are quieter, cheaper alternatives to downhill skiing. Several trailheads are close to the village.' },
    { icon: '🐻', name: 'Wildlife & Bear Safety', dist: 'Valley-wide', text: 'Black bears are common in the Whistler valley in warm months and may show up in town. Never feed them, store food and garbage securely, and carry bear spray on remote trails.' },
  ],

  food: [
    { icon: '🍻', title: 'Après-Ski', area: 'Village · Base areas', areaLevel: 'danger', text: "Whistler's signature: patios and pubs fill up when the lifts close. In winter many places have live music and DJs; in summer the same patios catch the evening sun." },
    { icon: '🍔', title: 'Mountain Dining', area: 'On the mountain', areaLevel: 'blue', text: 'From quick lodge lunches to sit-down restaurants high on the slopes and, in summer, at alpine viewpoints.' },
    { icon: '🍺', title: 'Craft Beer & Pubs', area: 'Village · Function Junction', areaLevel: 'gold', text: 'A good craft-beer scene with brewpubs and taprooms in the valley. Locals favour the cluster at Function Junction.' },
    { icon: '☕', title: 'Cafés & Bakeries', area: 'Village · Creekside', areaLevel: 'blue', text: 'Quick breakfast spots and bakeries are the way to start early on a ski or bike day. Expect lines at peak times.' },
    { icon: '🍽️', title: 'Fine Dining', area: 'Village · Upper Village', areaLevel: 'purple', text: 'Whistler has a serious restaurant scene with Pacific Northwest menus, seafood and wine lists. Reserve ahead in winter and on summer weekends.' },
    { icon: '🥔', title: 'Pemberton Farm Produce', area: 'Pemberton Valley', areaLevel: 'safe', text: 'The valley to the north is farming country; local produce shows up on Whistler menus and at markets in season.' },
  ],

  seasons: [
    { icon: '⛷️', name: 'Winter', months: 'Late November — April', level: 'blue', rating: 5, note: 'Ski season', text: 'Prime season. Peak crowds at Christmas, New Year, February and spring break, so book lodging early. Winter tires are required on Hwy 99 from October 1 to April 30.' },
    { icon: '🌱', name: 'Spring', months: 'May — June', level: 'olive', rating: 3, note: 'Quiet & cheaper', text: 'A shoulder season. Lower elevations turn green while snow lingers up high. The bike park typically opens in mid-May, with full gondola access from mid-June. Some services run reduced hours.' },
    { icon: '🚵', name: 'Summer', months: 'July — August', level: 'safe', rating: 5, note: 'Bike & hike', text: 'Warm days, with village highs around 27°C. Mountain biking, alpine hiking and lake swimming. Crankworx brings crowds in late July and early August. Reserve ahead.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: "Check what's open", text: 'Cooler and quieter. Alpine trails and gondola sightseeing close for the season and the bike park winds down. October is the quietest time of year — check what is running before you go.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — Sea-to-Sky Highway',
      text: 'Take Highway 99 north from Vancouver: about 120 km along Howe Sound and up through the Coast Mountains. It is the only road to Whistler. Winter tires are required from October 1 to April 30, and avalanche control or weather can close it temporarily.',
      time: '1.5–2.5h (120 km) — longer on summer weekends',
    },
    {
      icon: '🚌',
      title: 'By Bus from Vancouver',
      text: 'Skylynx runs scheduled buses from Vancouver International Airport and downtown Vancouver; Epic Rides is a budget option from downtown. Buses fill up on winter weekends, so book ahead. There is no train from Vancouver to Whistler.',
      time: 'Downtown ≈ 2h · YVR ≈ 2.5–3h',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Whistler has no commercial airport; most visitors fly into Vancouver (YVR) and continue by shuttle or car. Floatplane flights from Vancouver run in season as a scenic splurge.',
      time: 'Fly to YVR, then ≈ 2–2.5h by road',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Whistler Village',
      area: 'Best base · Everything on foot',
      text: 'The lively centre: restaurants, shops, après-ski and the Whistler Village Gondola. Best for first-time visitors and short stays. Also the busiest and priciest.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whistler+Village+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Whistler-Hotels.d6054449.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Upper Village & Blackcomb',
      area: 'Ski-in, ski-out · Quiet',
      text: 'Steps from the Blackcomb Gondola with a calmer evening feel. A good choice for skiers who want first chair without a walk.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Upper+Village+Whistler+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Whistler--BC', level: 'danger' },
      ],
    },
    {
      icon: '🚡',
      title: 'Creekside',
      area: 'Relaxed · Near lifts',
      text: 'The original base area, with its own gondola, cafés and a slower pace. Good value and easy access to the slopes outside the busiest times.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Creekside+Whistler+BC', level: 'blue' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/whistler', level: 'purple' },
      ],
    },
    {
      icon: '🛏️',
      title: 'Function Junction & Cheakamus',
      area: 'Budget · Local',
      text: 'Hostels and lower-cost lodging south of the village, linked by bus. HI Whistler is among the budget options. Trade-off: a bus ride to the lifts.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cheakamus+Whistler+BC', level: 'blue' },
        { label: 'Hostelling International', url: 'https://www.hihostels.com', level: 'safe' },
      ],
    },
    {
      icon: '🌲',
      title: 'Pemberton',
      area: 'Farm valley · Quiet',
      text: 'Farm stays and cabins in the valley to the north. Lower prices than Whistler and a very different pace; use the Pemberton Commuter bus or a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pemberton+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Pemberton--BC', level: 'danger' },
      ],
    },
    {
      icon: '🌉',
      title: 'Squamish',
      area: 'Stopover · Climbing town',
      text: 'Halfway on the Sea-to-Sky route, with a more affordable base and lots of outdoor activity. Good if you split the trip or want a quieter night.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Squamish+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Whistler Transit (BC Transit & the Resort Municipality)',
      text: 'Whistler is compact and the village centre is car-free. A bus network links the Village, Upper Village, Creekside, Function Junction and other neighbourhoods, so many visitors never need a car once they arrive. Children 12 and under ride free, and some routes run only in winter.',
      linkLabel: 'Whistler Transit',
      linkUrl: 'https://www.bctransit.com/whistler',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app or card, or contactless where available. On Umo the second ride in a day converts to a DayPASS. Fares are exempt from sales tax — confirm current prices before you travel.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $2.75', 'DayPASS: about $5.50', '30-Day Pass: $55', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍',
        title: 'Key Routes',
        text: 'Single-digit routes cover the Village area. Several routes cut back once the ski season ends: Route 4 Market Place and Route 25 Whistler Creek are seasonal, and Routes 5, 7 and 20X run less often in spring.',
        fareBox: {
          label: 'Useful routes',
          lines: ['5 — Upper Village / Benchlands', '20X — Cheakamus Express', '25 — Whistler Creek (winter)', '99 — Pemberton Commuter ($4.50)'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/whistler/schedules-and-maps',
      },
      {
        icon: '🚶',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'Walk the Village', text: 'The Village and Upper Village connect by a pleasant pedestrian route; most of the centre is car-free.' },
          { icon: '🚲', title: 'Valley Trail', text: 'A paved trail network for bikes and walkers links neighbourhoods and lakes in summer.' },
          { icon: '🚕', title: 'Taxis & Shuttles', text: 'Taxis and hotel shuttles help with luggage and late nights. Book airport shuttles in advance.' },
          { icon: '🚗', title: 'Rental Car', text: 'Useful for day trips down the Sea-to-Sky, but parking in the Village costs money.' },
        ],
      },
    ],
    proTip: {
      label: 'Dual pass tip:',
      text: 'If you are travelling between Pemberton and Whistler, a Dual DayPASS costs $12 and covers both systems and the Pemberton Commuter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals have no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax). Some Whistler properties also add resort or service fees, so confirm what a displayed room price includes — après-ski drinks and lodging are where the difference really shows.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Whistler', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🍺', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', label: 'Lodging: ~16% (GST + PST + 3% MRDT)' },
      { icon: '👕', label: 'Adult clothing and ski gear: 12%' },
      { icon: '📱', label: 'Electronics and technology: 12%' },
      { icon: '🎿', label: 'Rentals and goods: 12% (check each shop)' },
    ],
    exempt: [
      { icon: '🍽️', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', label: 'Basic groceries: no PST' },
      { icon: '💊', label: 'Prescription medication: no PST' },
      { icon: '📚', label: 'Books and newspapers: no PST' },
      { icon: '🧒', label: "Children's clothing: no PST" },
      { icon: '🚌', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Ski and bike instructors: 10–15% for a good lesson. Hotel housekeeping: $2–5/night. Shuttle drivers and bellhops: a few dollars.',
  },

  practical: [
    { icon: '🛞', title: 'Winter Tires', text: 'Winter tires (M+S or snowflake symbol) are required on Hwy 99 from October 1 to April 30. Check your rental has them and watch DriveBC.' },
    { icon: '📅', title: 'Book Early', text: 'Christmas, New Year, February and summer weekends sell out. Book lodging, lessons and bike-park access well ahead.' },
    { icon: '🕘', title: 'Early-Season Hours', text: 'Lifts open later in the morning early in the season, since BC now stays on daylight time year-round. Always check current mountain hours.' },
    { icon: '⏰', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🐻', title: 'Bear Safety', text: 'Make noise on trails, carry bear spray, and keep food, coolers and garbage locked away. Never approach or feed wildlife.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Use Umo (app or card) on Whistler buses; kids 12 and under ride free. Service is reduced outside the ski season.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Whistler Health Care Centre', '4380 Lorimer Road', 'Emergencies: call 911'] },
    { icon: '🔎', title: "Check What's Open", text: 'In fall and spring, lifts, trails and restaurants may be closed. Confirm on Whistler Blackcomb and Tourism Whistler before you go.' },
  ],
};

export default WHISTLER;
