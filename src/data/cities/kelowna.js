// Kelowna — данные страницы /city/kelowna
// Районы пока без фото (есть только герб-crest, не фото) — используют
// icon-fallback в CityPage.jsx.
//
// Hero-видео: яблоневый сад Оканагана (Pexels #19666848, лицензия
// Pexels — свободно для коммерческого использования). Выбрано потому,
// что автор прямо указал съёмку в Okanagan, BC; кадры проверены
// вручную — шпалерные ряды яблонь со светоотражающим полотном и сухие
// холмы с жёлтой сосной соответствуют долине. Постер — кадр из этого
// же видео.

export const KELOWNA = {
  slug: 'kelowna',
  name: 'Kelowna',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Okanagan Valley',
  accentLevel: 'blue',
  heroVideo: '/Cities/Kelowna/19666848_2560_1440_24fps.mp4',
  heroImage: '/Cities/Kelowna/hero-poster.jpg',
  heroIcon: '🍇',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.888, lon: -119.496 },
  subtitle: 'The Heart of the Okanagan',
  description:
    "A sunny lakeside city in BC's interior — warm beaches on Okanagan Lake, dozens of wineries within a short drive, orchards, rail-trail cycling and a ski resort in the hills behind town. Kelowna is wine country, lake country and powder country in one trip.",

  actions: [
    { label: 'Explore Kelowna', href: '#neighbourhoods' },
    { label: 'Wine Country', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈145K city' },
    { label: 'Metro Area', value: '≈222K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'Airport', value: 'YLW' },
    { label: 'From Vancouver', value: '≈45 min flight' },
  ],

  badges: ['Wine Region', 'Lake Beaches', 'Ski Nearby'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '⛷️', label: 'Winter', level: 'blue', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '130+ km', label: 'Length of Okanagan Lake — Kelowna sits on its eastern shore', level: 'blue' },
    { value: '≈45 min', label: 'Flight from Vancouver to Kelowna (YLW)', level: 'safe' },
    { value: '≈40', label: 'Wineries within about 20 minutes of the city', level: 'gold' },
    { value: '$6', label: 'Maximum daily bus cost with Umo fare capping', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Cultural District', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'blue', meta: 'Bernard Avenue · Waterfront Park · Art gallery · Museum · Restaurants' },
    { name: 'Pandosy & Lower Mission', icon: '🏖️', tag: '🏖️ Beaches', tagLevel: 'blue', meta: 'Lake beaches · Cafés · Boat launches · Relaxed village feel' },
    { name: 'West Kelowna Wine Trail', icon: '🍷', tag: '🍷 Wine', tagLevel: 'purple', meta: 'Across the lake bridge · Hillside vineyards · Tasting rooms' },
    { name: 'Knox Mountain & North End', icon: '⛰️', tag: '⛰️ Hiking', tagLevel: 'safe', meta: 'City-edge park · Lookouts · Hiking and biking trails' },
    { name: 'East Kelowna & Southeast', icon: '🍎', tag: '🍎 Orchards', tagLevel: 'gold', meta: 'Orchards · Farm stands · Quieter, more rural roads' },
    { name: 'Lake Country (north)', icon: '🌾', tag: '🌾 Farms', tagLevel: 'purple', meta: 'About 15–20 minutes north · Farms · Lakeside parks' },
  ],

  attractions: [
    {
      name: 'Okanagan Lake & Beaches',
      icon: '🏖️',
      text: 'The lake is the heart of the city — warm enough for summer swimming, with beaches and lakeside parks along the shore. The water can turn choppy in the afternoon, so keep paddling trips to the morning.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Waterfront Park & Boardwalk',
      icon: '🌅',
      text: 'An easy lakeside promenade of roughly 2 km with views of the lake, hills and the floating bridge. Downtown, free and best at sunset. Stuart Park, nearby, opens a skating rink in December.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Knox Mountain Park',
      icon: '⛰️',
      text: 'A big city-edge park with lookouts over Kelowna and Okanagan Lake. Free parking at the base and a trail of about an hour return to the viewpoint. Go at sunrise or sunset — midday summer is hot.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Myra Canyon Trestles',
      icon: '🚲',
      text: 'A flat, scenic section of the old Kettle Valley Railway with 18 trestle bridges and tunnels. About a 40-minute drive from town; popular on foot and by bike. Golden larches make fall especially pretty.',
      tags: [{ label: 'Half day', level: 'blue' }, { label: 'Paid', level: 'gold' }],
    },
    {
      name: 'Okanagan Wineries',
      icon: '🍷',
      text: "Roughly 40 wineries sit within about 20 minutes of the city, from big estates like Quails' Gate and Mission Hill to small family cellars. Book a guided tour or a designated driver — tasting and driving do not mix.",
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Food & Drink', level: 'danger' }],
    },
    {
      name: "Kelowna Farmers' & Crafters' Market",
      icon: '🧺',
      text: 'A large, long-running market held on Wednesdays and Saturdays from 8 a.m. in the summer season. Fresh fruit, baking, preserves and local crafts — a good place for picnic supplies.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Food & Drink', level: 'danger' }],
    },
    {
      name: 'Big White Ski Resort',
      icon: '⛷️',
      text: 'About 45 minutes to an hour from Kelowna, famous for powder snow and a ski-in, ski-out village. In summer it turns to mountain biking and hiking. Winter driving here needs proper tires.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Bear Creek Provincial Park',
      icon: '🌲',
      text: 'On the west side of the lake, with a forest loop to a waterfall and canyon views. A shaded alternative on hot days and a good family hike.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Cultural District',
      icon: '🎨',
      text: 'Kelowna Art Gallery, the Okanagan Heritage Museum and the arts spaces around Water Street are a rainy-day or evening option, all close to the waterfront.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Nature Around the Lake',
  outdoor: [
    { icon: '🚲', name: 'Kettle Valley Rail Trail', dist: 'Outdoor · bike rental', text: 'Beyond the Myra Canyon trestles, the former railway grade offers gentle cycling with big valley views. Rent a bike near Knox Mountain if you did not bring one.' },
    { icon: '🛶', name: 'Paddling & Boating', dist: 'Okanagan Lake', text: 'Kayaks, paddleboards and boats on Okanagan Lake — the water is warmest in summer. Go early before the afternoon chop, and wear a lifejacket.' },
    { icon: '🥾', name: 'Knox Mountain & Okanagan Mountain Park', dist: 'Free', text: 'Trails from short city hikes to wilder routes; Okanagan Mountain Park has secluded bays reachable by boat. Carry water and avoid midday heat in summer.' },
    { icon: '🚵', name: 'Mountain Biking', dist: 'Knox Mountain · Big White', text: 'Knox Mountain has trails for several levels, and Big White opens bike terrain in summer. Check trail conditions and rules before riding.' },
    { icon: '⛷️', name: 'Skiing & Snowboarding', dist: 'Big White, winter', text: 'Big White is the big name — known for light, dry powder. A winter day trip from Kelowna, or stay on the mountain for several days.' },
    { icon: '🎣', name: 'Fishing & Lake Days', dist: 'Licence required', text: 'Okanagan Lake and nearby waters offer fishing and quiet bays. Check BC fishing licence and regulations before you cast a line.' },
  ],

  food: [
    { icon: '🍷', title: 'Okanagan Wine', area: 'West Kelowna · Mission · East Kelowna', areaLevel: 'purple', text: 'Cool-climate reds, crisp whites and sparkling wine from vineyards above the lake. Many wineries have restaurants with patio views — book lunch in summer.' },
    { icon: '🍺', title: 'Craft Beer, Cider & Spirits', area: 'Downtown · Citywide', areaLevel: 'gold', text: 'A strong craft scene: breweries, cideries and distilleries all over town, many with food. Good for an evening when you are done with wine.' },
    { icon: '🍒', title: 'Orchard Fruit', area: 'Roadside stands · Summer–Fall', areaLevel: 'danger', text: 'Cherries, peaches, apricots and apples, sold straight from farms and roadside stands in season. Look for the BC Tree Fruits label in shops.' },
    { icon: '🥗', title: 'Farm-to-Table', area: 'Restaurants citywide', areaLevel: 'safe', text: 'Chefs lean heavily on local produce, cheese and wine. Menus change with the harvest — ask what is from the valley.' },
    { icon: '🧺', title: "Farmers' Market", area: 'Wednesdays & Saturdays', areaLevel: 'blue', text: 'Baking, jams, honey, produce and prepared food. Arrive early for the best choice and parking.' },
    { icon: '🌅', title: 'Lakeside Patios', area: 'Waterfront · Pandosy', areaLevel: 'blue', text: 'Long summer evenings on patios by the water. Remember: restaurant food has no PST in BC, but drinks carry extra tax.' },
  ],

  seasons: [
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Book early', text: 'Hot, dry and bright — peak season for lake beaches, patios and rail-trail cycling. Hotels fill up, so book early. Wildfire smoke can affect air quality in some years; check conditions before you go.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Harvest!', text: 'Harvest season at wineries and orchards, warm days and cooler nights, and golden larches at Myra Canyon. Many locals say this is the best time to visit.' },
    { icon: '⛷️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Big White brings skiers, and downtown Stuart Park opens a skating rink in December. In town it is colder and quieter. Carry winter tires on mountain highways.' },
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'olive', rating: 4, note: 'Quiet & fresh', text: 'Orchard blossoms, lighter crowds and lower hotel prices. Higher trails may still hold snow. Lake water is still cold; wineries are calm and welcoming.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air — Kelowna Airport (YLW)',
      text: 'YLW is the second-busiest airport in BC after Vancouver, about 14 km northeast of downtown. Flights from Vancouver take under an hour; there are also nonstops from Calgary, Toronto and Seattle, among others. Rent a car, take Route 23, or grab a taxi or rideshare.',
      time: 'Vancouver ≈ 45 min flight · downtown ≈ 14 km',
    },
    {
      icon: '🚗',
      title: 'By Car from Vancouver',
      text: 'Take Hwy 1 east to Hope, then the Coquihalla (Hwy 5) north to Merritt, then Hwy 97C east to Kelowna. About 400–450 km. Mountain passes bring snow and closures in winter, so use winter tires and check DriveBC before you go.',
      time: '≈ 4–5 hours (about 400–450 km)',
    },
    {
      icon: '🚗',
      title: 'Okanagan Road-Trip Loop',
      text: 'A classic: Vancouver → Kelowna → Penticton and Osoyoos → Princeton → Hope → Vancouver. Roughly 850 km; allow at least two days. Kelowna to Penticton is about 60 km, around 45 minutes.',
      time: 'Loop ≈ 850 km · min. 2 days',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown & Waterfront',
      area: 'Best base · Walk to the lake',
      text: 'Lakeside hotels and condos steps from Waterfront Park, Bernard Avenue restaurants, the market and the Cultural District. Best for first-time visitors without a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kelowna+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Kelowna-Hotels.d6054449.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Pandosy & Lower Mission',
      area: 'Beach feel · Relaxed',
      text: 'Quieter, beach-oriented stays south of downtown with cafés, small shops and lake access. A good fit for families and summer visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pandosy+Kelowna+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Pandosy--Kelowna--BC', level: 'danger' },
      ],
    },
    {
      icon: '🍷',
      title: 'West Kelowna Wine Country',
      area: 'Vineyards · Tasting rooms',
      text: 'Hillside wineries, vineyard inns and B&Bs across the lake bridge. Wake up among the vines; plan on a car or driver for dinner.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Kelowna+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/West-Kelowna--BC', level: 'danger' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Big White Mountain',
      area: 'Ski-in, ski-out · Winter',
      text: "Canada's largest ski-in, ski-out village is about 45 minutes to an hour from town. Stay up the mountain for powder mornings; check winter road conditions.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Big+White+BC', level: 'blue' },
        { label: 'Big White', url: 'https://www.bigwhite.com', level: 'gold' },
      ],
    },
    {
      icon: '✈️',
      title: 'Airport Area',
      area: 'Early flights · Practical',
      text: 'The Four Points by Sheraton is the only hotel near the terminal, about 1 km away with a shuttle. Handy for early departures, but far from the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kelowna+Airport', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏡',
      title: 'Orchard & Farm Stays',
      area: 'Rural · Quiet',
      text: 'Vacation rentals and farm stays in East Kelowna and Lake Country — good for groups wanting space, fruit stands nearby and a slow pace.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Kelowna--BC', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/kelowna', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Kelowna Regional Transit (BC Transit)',
      text: 'Kelowna has no subway or light rail — transit is a bus network covering Kelowna, West Kelowna, Lake Country and Peachland. Downtown is walkable and the waterfront is flat, but wineries, Myra Canyon and Big White are easiest with a car, tour or rideshare. Children 12 and under ride free.',
      linkLabel: 'BC Transit Kelowna',
      linkUrl: 'https://www.bctransit.com/kelowna',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Umo',
        text: 'The same fare applies on any local route. Pay with the Umo app or a reloadable Umo card; cash is accepted with exact change. On Umo, the second payment in a day converts to a DayPASS. Transit fares are exempt from sales tax.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $3.00', 'DayPASS: $6.00', 'Children 12 and under: free', 'Fares changed on October 1, 2025'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '✈️',
        title: 'Airport & Key Routes',
        text: 'The airport (YLW) is about 14 km northeast of downtown and is served by routes 23, 90 and 13. Route 23 is the most frequent and connects to Route 97 at UBC Okanagan. Route 97 links Orchard Park mall with downtown. Route 70 runs between Kelowna and Penticton.',
        fareBox: {
          label: 'Useful routes',
          lines: ['23 — Airport ↔ UBCO / Lake Country', '97 — Orchard Park ↔ Downtown', '1 — Downtown, markets and cafés', '70 — Penticton ↔ Kelowna'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/kelowna/schedules-and-maps',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'Walk the Waterfront', text: 'Downtown, Waterfront Park and the boardwalk are all within a flat, easy walk.' },
          { icon: '🚕', title: 'Taxi & Rideshare', text: 'Taxis and rideshare are available; Lyft operates at the airport. Useful for wineries and late evenings.' },
          { icon: '🚲', title: 'Bike & Scooter', text: 'Rent a bike near Knox Mountain or along the waterfront for the lakeside paths.' },
          { icon: '🍷', title: 'Wine Tours', text: 'Guided tours with a driver are the safest way to taste at several wineries.' },
        ],
      },
    ],
    proTip: {
      label: 'Plan ahead:',
      text: 'Buses run less often on evenings and holidays, and not all wineries are on a route. If you want to visit several, book a tour or a driver rather than relying on transit.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      "Most goods are taxed at 12%. But BC has important exceptions: restaurant meals have no PST (just 5% GST), alcohol carries 10% PST, and hotel stays carry a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax, which also applies to short-term rental bookings made through online platforms). For a wine-country trip, the alcohol rule matters most — wine, beer and winery tasting fees are all taxed at the higher ≈15% rate, not the restaurant-meal 5%.",
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Kelowna', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🍷', label: 'Wine, beer and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🥂', label: 'Winery tasting fees: 10% PST + 5% GST' },
      { icon: '🏨', label: 'Hotels: ~16% (GST + PST + 3% MRDT)' },
      { icon: '👕', label: 'Adult clothing, electronics, souvenirs: 12%' },
      { icon: '🥤', label: 'Soda and similar drinks: 12%' },
    ],
    exempt: [
      { icon: '🍽️', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', label: 'Basic groceries and fresh fruit: no PST' },
      { icon: '💊', label: 'Prescription medication: no PST' },
      { icon: '📚', label: 'Books and newspapers: no PST' },
      { icon: '🧒', label: "Children's clothing: no PST" },
      { icon: '🚌', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Bar staff: $1–2 per drink. Wine tour guides and drivers: 10–15%.',
  },

  practical: [
    { icon: '🔥', title: 'Wildfire & Smoke', text: 'Summers can bring wildfire smoke or restrictions. Check air quality and BC Wildfire Service updates, and be flexible with outdoor plans.' },
    { icon: '🍷', title: 'Wine & Driving', text: 'Do not drink and drive. Book a tour, hire a driver or nominate a sober driver for winery days.' },
    { icon: '🛞', title: 'Winter Driving', text: 'Winter tires or chains are required on many BC highways, including the route from Vancouver. Check DriveBC for conditions.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Use the Umo app or card, or exact cash. Kids 12 and under ride free. Fares include no sales tax.' },
    { icon: '🌊', title: 'Lake Safety', text: 'The lake can be cold and choppy by afternoon. Wear a lifejacket on the water and respect swimming-area signs.' },
    { icon: '☀️', title: 'Sun & Heat', text: 'Summer days are hot and dry. Bring sunscreen, a hat and plenty of water, especially on Knox Mountain.' },
    { icon: '🏥', title: 'Hospital', lines: ['Kelowna General Hospital', '2268 Pandosy Street', 'Emergencies: call 911'] },
    { icon: '📅', title: 'Check Before You Go', text: 'Winery hours, markets and trail conditions change seasonally. Confirm on official sites before planning a day around them.' },
  ],
};

export default KELOWNA;
