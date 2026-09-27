// Vancouver — данные страницы /city/vancouver

export const VANCOUVER = {
  slug: 'vancouver',
  name: 'Vancouver',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · City Guide',
  heroVideo: '/Cities/Vancouver/hero 2160 60Fps.mp4',
  heroImage: '/bc/cities/vancouver.png',
  heroCaption: 'Downtown Vancouver · BC · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.2827, lon: -123.1207 },
  subtitle: 'Where Ocean Meets Mountains',
  description:
    "Canada's most beautiful city — a stunning blend of cosmopolitan culture, rainforest, ocean, and snow-capped mountains. Ski in the morning, kayak in the afternoon, and dine in one of the world's best food cities by evening.",

  actions: [
    { label: 'Explore Vancouver', href: '#neighbourhoods' },
    { label: 'Nearby Parks', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '675,000' },
    { label: 'Metro Area', value: '2.6 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'PST / UTC-8' },
    { label: 'Airport', value: 'YVR' },
    { label: 'Ski Resort', value: '30 min away' },
  ],

  badges: ['2010 Olympics', 'Year Round', 'Top 10 World'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & Coal Harbour',
      image: '/Cities/Vancouver/Downtown & Coal Harbour.jpg',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Waterfront · Convention Centre · Canada Place · Robson Street shopping',
    },
    {
      name: 'Stanley Park',
      image: '/Cities/Vancouver/Stanley Park.jpg',
      tag: 'Nature',
      tagLevel: 'safe',
      meta: '1,000 acres of rainforest · Seawall · Beaches · Totem poles',
    },
    {
      name: 'Chinatown & Gastown',
      image: '/Cities/Vancouver/Chinatown & Gastown.jpg',
      tag: 'Food',
      tagLevel: 'danger',
      meta: "Historic steam clock · World's best dim sum · Night markets",
    },
    {
      name: 'Granville Island',
      image: '/Cities/Vancouver/Granville Island.jpg',
      tag: 'Market',
      tagLevel: 'blue',
      meta: 'Public market · Artisan studios · Fresh seafood · Ferries',
    },
    {
      name: 'Kitsilano & Main Street',
      image: '/Cities/Vancouver/Kitsilano & Main Street.jpg',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Beach · Cafés · Independent shops · Art galleries · Murals',
    },
    {
      name: 'English Bay & West End',
      image: '/Cities/Vancouver/English Bay & West End.jpg',
      tag: 'Beach',
      tagLevel: 'blue',
      meta: 'Sunset Beach · Cyclists · Rollerbladers · Most walkable area',
    },
  ],

  attractions: [
    {
      name: 'Stanley Park',
      icon: '🌲',
      text: 'One of the largest urban parks in North America. 8.8km seawall walk, ancient rainforest, beaches, totem poles, and stunning views of the mountains and harbour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Capilano Suspension Bridge',
      icon: '🌉',
      text: 'Walk across a 137m suspension bridge swaying above the rainforest canopy. Treetop adventure walk and cliffwalk included. 30 minutes from downtown.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Granville Island Public Market',
      icon: '🎪',
      text: "Vancouver's beloved food market with local artisans, fresh seafood, baked goods, and dozens of food vendors. Take the Aquabus ferry from downtown.",
      tags: [{ label: 'Free Entry', level: 'safe' }, { label: 'Food', level: 'danger' }],
    },
    {
      name: 'Grouse Mountain',
      icon: '🏔️',
      text: 'Take the aerial tramway to the summit for panoramic city views. Skiing in winter, hiking in summer, and a resident grizzly bear habitat open year round.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Vancouver Aquarium',
      icon: '🐋',
      text: 'Inside Stanley Park — home to beluga whales, sea otters, Pacific octopus, and hundreds of marine species. One of the best aquariums in North America.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Museum of Anthropology (UBC)',
      icon: '🏛️',
      text: 'World-class collection of Northwest Coast Indigenous art and artifacts. The Bill Reid Gallery features the famous Raven and the First Men sculpture. On UBC campus.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Whistler Blackcomb',
      icon: '⛷️',
      text: 'The #1 ski resort in North America — just 2 hours from Vancouver. World-class skiing in winter and mountain biking and hiking in summer. A must-do side trip.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: '2h from Vancouver', level: 'blue' }],
    },
    {
      name: 'Canada Place & Waterfront',
      icon: '🚢',
      text: "Vancouver's iconic landmark — the sails-shaped convention centre and cruise ship terminal. Walk the waterfront promenade for harbour views and mountain panoramas.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'English Bay Sunset',
      icon: '🌅',
      text: 'The most celebrated sunset spot in Vancouver. Watch the sun drop behind the mountains and islands from English Bay Beach. Free, beautiful, and unforgettable.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
  ],

  outdoor: [
    { icon: '⛷️', name: 'Ski Grouse Mountain', dist: '30 min from Downtown', text: 'Night skiing with city views. Gondola access. Bears and wolves on site year round.' },
    { icon: '🌊', name: 'Sea Kayaking', dist: 'Indian Arm · Deep Cove', text: 'Paddle in calm ocean inlets surrounded by mountains. Guided tours available.' },
    { icon: '🚴', name: 'Seawall Cycling', dist: '22 km loop · Downtown', text: "World's longest uninterrupted waterfront path. Rent bikes near Stanley Park." },
    { icon: '🥾', name: 'Hike the Grouse Grind', dist: 'North Vancouver · 30 min', text: '"Mother Nature\'s Stairmaster" — 2.9 km straight up Grouse Mountain. Hard but rewarding.' },
    { icon: '🏄', name: 'Surf Tofino', dist: '4.5 hours from Vancouver', text: 'Wild Pacific surfing on Vancouver Island. World-class waves and stunning coast.' },
    { icon: '🦅', name: 'Whale Watching', dist: 'Vancouver Harbour', text: 'Orca, humpback, and minke whale tours from Vancouver Harbour. Summer best.' },
    { icon: '🌲', name: 'Lynn Canyon Park', dist: 'North Vancouver · 25 min', text: 'Free suspension bridge through old-growth rainforest. Less crowded than Capilano.' },
    { icon: '🏔️', name: 'Garibaldi Provincial Park', dist: '1 hour from Vancouver', text: 'Stunning alpine lakes, glaciers, and volcanic landscapes. Cheakamus Lake trail is iconic.' },
  ],

  food: [
    { icon: '🦞', title: 'Fresh Pacific Seafood', area: 'Granville Island · Gastown', areaLevel: 'blue', text: "Vancouver's location on the Pacific means the freshest Dungeness crab, salmon, halibut, and spot prawns. Joe Fortes and the Lobster Man are local institutions." },
    { icon: '🥟', title: 'World-Class Dim Sum', area: 'Richmond · Chinatown', areaLevel: 'danger', text: 'Vancouver has the best dim sum outside of Hong Kong. The suburb of Richmond has over 500 Asian restaurants. Sun Sui Wah and Parker Place Night Market are must-visits.' },
    { icon: '🍣', title: 'Japanese Food', area: 'Robson Street · Steveston', areaLevel: 'gold', text: "Vancouver has a huge Japanese community. Excellent ramen, sushi, and izakayas throughout the city. Tojo's restaurant created the California Roll right here in Vancouver." },
    { icon: '🍁', title: 'Indigenous Cuisine', area: 'Downtown · Gastown', areaLevel: 'safe', text: "Salmon, bannock, and traditional First Nations ingredients are celebrated in Vancouver's food scene. Salmon n' Bannock is the city's celebrated Indigenous-owned restaurant." },
    { icon: '☕', title: 'Coffee Culture', area: 'Everywhere!', areaLevel: 'blue', text: "Vancouver is a world-class coffee city. Revolver, Elysian, and 49th Parallel are local roasters with cult followings. Café culture is deeply embedded in the city's DNA." },
    { icon: '🌮', title: 'Food Trucks & Night Markets', area: 'Richmond Night Market', areaLevel: 'purple', text: "The Richmond Night Market (May–October) is the largest in North America with over 100 food vendors. Vancouver's food truck scene covers everything from tacos to Korean BBQ." },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — warm, dry, and sunny. Beaches packed, outdoor concerts, markets. Longest days of the year. Book accommodation well in advance. Whistler mountain biking open.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — November',
      level: 'danger',
      text: 'Still warm in September. Beautiful fall colours in Stanley Park. Fewer tourists, lower prices. Rain begins in October. Ski season starts at Whistler in November.',
      rating: 4,
      note: 'Great value',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — February',
      level: 'caution',
      text: 'Mild city temperatures (rarely below 0°C) but rainy. World-class skiing at Whistler just 2 hours away. Vancouver itself stays green all winter. Christmas markets and Capilano Canyon Lights.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: 'Cherry blossoms (late March–April) make Vancouver one of the most beautiful cities on Earth. Cool and rainy but stunning. Fewer crowds and great hotel deals. Spring skiing at Whistler.',
      rating: 4,
      note: 'Cherry blossoms!',
    },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: "Vancouver International Airport (YVR) is one of Canada's busiest — direct flights from over 60 cities worldwide including London, Tokyo, Sydney, and all major North American cities.",
      time: '25 min by Canada Line SkyTrain to downtown',
    },
    {
      icon: '🚂',
      title: 'By Train / Bus',
      text: 'VIA Rail and Amtrak connect Vancouver to the rest of Canada and Seattle. BC Ferries connect Vancouver Island and the Gulf Islands. TransLink SkyTrain is excellent within the city.',
      time: 'Seattle: 3.5h by Amtrak · Calgary: 13h by train',
    },
    {
      icon: '🚇',
      title: 'Getting Around',
      text: 'TransLink SkyTrain, buses, and SeaBus cover the city efficiently. Mobi bike share downtown. Uber and Lyft available. Car not needed in the city but useful for day trips to parks.',
      time: 'SkyTrain Compass Card · translink.ca',
    },
  ],

  stay: [
    {
      icon: '🏰',
      title: 'Downtown / Coal Harbour',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Hotel Vancouver, Rosewood Hotel Georgia, JW Marriott Parq. Walking distance to everything. Best for first-time visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Vancouver', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Vancouver-Hotels.d8030.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🌲',
      title: 'West End / Stanley Park',
      area: 'Beach lifestyle · Relaxed vibe',
      text: 'English Bay Beach Hotel, Sylvia Hotel (historic!). Walking distance to Stanley Park and English Bay. Great for couples and outdoor lovers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+End+Vancouver', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Vancouver--British-Columbia', level: 'danger' },
      ],
    },
    {
      icon: '🎨',
      title: 'Kitsilano',
      area: 'Local feel · Beaches · Cafés',
      text: 'More residential and local. Steps from Kits Beach and 4th Avenue shops. Great B&Bs and vacation rentals. A neighbourhood feel away from the tourist crowds.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Kitsilano--Vancouver', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/vancouver', level: 'blue' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Whistler Village',
      area: '2 hours from Vancouver',
      text: 'If skiing or summer hiking Whistler is the plan — stay in the village. Fairmont Chateau Whistler, Pan Pacific, and many condo rentals available.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whistler+Village', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Whistler--British-Columbia', level: 'danger' },
      ],
    },
    {
      icon: '🏨',
      title: 'Gastown / Yaletown',
      area: 'Hip · Historic · Restaurants',
      text: "Loden Hotel, Opus Hotel. Vancouver's trendiest neighbourhoods — cobblestone streets, converted warehouses, and the best restaurant scene in the city.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gastown+Vancouver', level: 'blue' },
      ],
    },
    {
      icon: '💰',
      title: 'Burnaby / Surrey',
      area: 'Budget Friendly · SkyTrain Access',
      text: 'More affordable options just outside Vancouver with easy SkyTrain access into downtown. Metrotown area in Burnaby has good transit and shopping.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Burnaby+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Burnaby-Hotels.d180116.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊',
      title: 'TransLink — Metro Vancouver Transit',
      text: 'TransLink operates SkyTrain, buses, SeaBus, and West Coast Express across Metro Vancouver. The Compass Card is your all-in-one transit card — load it at any station. Vancouver has one of the best public transit systems in Canada — you can get almost anywhere without a car.',
      linkLabel: 'TransLink Official',
      linkUrl: 'https://www.translink.ca',
    },
    modes: [
      {
        icon: '🚇',
        title: 'SkyTrain',
        text: '3 lines: Expo, Millennium, Canada Line. Airport (YVR) to downtown in 25 min. Runs ~5am to 1:30am daily. Fully automated — no driver.',
        fareBox: {
          label: 'Fares (Compass Card)',
          lines: ['Zone 1: $2.40 / trip', 'Zone 2: $3.45 · Zone 3: $4.55', 'Day Pass: $11.25', 'Under 5: Free'],
        },
        linkLabel: 'SkyTrain Map',
        linkUrl: 'https://www.translink.ca/schedules-and-maps/skytrain',
      },
      {
        icon: '🚌',
        title: 'Bus & SeaBus',
        text: '200+ bus routes cover all of Metro Vancouver. SeaBus connects downtown to North Vancouver in 12 minutes — scenic and free with your transit fare. Night buses run after SkyTrain closes.',
        fareBox: {
          label: 'Compass Card',
          lines: ['• Tap on/off at every stop', '• Free transfer within 90 min', '• Load online or at stations', '• Or tap Visa/Mastercard directly'],
        },
        linkLabel: 'Bus Routes',
        linkUrl: 'https://www.translink.ca/schedules-and-maps/buses',
      },
      {
        icon: '🚲',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Uber & Lyft', text: 'Both available. More expensive than transit but convenient late at night.' },
          { icon: '🚲', title: 'Mobi Bike Share', text: 'E-bikes and regular bikes. 1,800 bikes across the city. mobibikes.ca' },
          { icon: '⛴️', title: 'Aquabus & False Creek Ferries', text: 'Mini ferries to Granville Island. theaquabus.com · bcferries.com' },
          { icon: '🚢', title: 'BC Ferries', text: 'Ferries to Vancouver Island and Gulf Islands. bcferries.com' },
        ],
      },
    ],
    proTip: {
      label: 'Airport Pro Tip:',
      text: 'Take the Canada Line SkyTrain from YVR directly to downtown Vancouver — 25 minutes, $4.55 with Compass Card. Much cheaper than a taxi ($35–45) or Uber ($25–35). Trains run every 6–8 minutes from early morning until after midnight.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: GST 5% + PST 7% = 12%',
    description: 'BC charges both federal GST (5%) and provincial PST (7%) on most purchases. Combined total is 12%. Note: BC uses separate GST and PST — they are not combined into HST like Ontario. Hotels also add a 2% Tourism Levy on top.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe' },
      { label: 'Vancouver / BC', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'danger', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'blue' },
    ],
    appliesTo: [
      { icon: '👜', label: 'Most retail goods and clothing' },
      { icon: '🍽️', label: 'Restaurant meals and takeout' },
      { icon: '🏨', label: 'Hotels + 2% Tourism Levy' },
      { icon: '✈️', label: 'Flights and transportation' },
      { icon: '🎫', label: 'Entertainment and activities' },
      { icon: '📱', label: 'Electronics and technology' },
    ],
    exempt: [
      { icon: '🥬', label: 'Basic groceries (fresh food)' },
      { icon: '💊', label: 'Prescription medications' },
      { icon: '🏥', label: 'Most medical services' },
      { icon: '📚', label: 'Most educational services' },
      { icon: '🏠', label: 'Long-term residential rent' },
      { icon: '👶', label: 'Most childcare services' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    {
      icon: '🌧️',
      title: 'Weather',
      text: 'Mild and rainy Oct–Apr. Warm and sunny Jul–Sep. Always pack a light rain jacket. Snow in city is rare.',
    },
    {
      icon: '💰',
      title: 'Currency',
      text: 'Canadian Dollar (CAD). Vancouver is expensive — budget $150–250/night for mid-range hotels.',
    },
    {
      icon: '🚇',
      title: 'Compass Card',
      text: 'Buy at any SkyTrain station. Or tap your Visa/Mastercard directly on the reader — no card needed.',
    },
    {
      icon: '🌐',
      title: 'Language',
      text: "English primary. One of the world's most multilingual cities — Mandarin, Cantonese, Punjabi widely spoken.",
    },
    {
      icon: '🏥',
      title: 'Hospital',
      lines: ['Vancouver General Hospital', '899 W 12th Ave', '604-875-4111'],
    },
    {
      icon: '🍁',
      title: 'Cannabis',
      text: 'Legal in Canada. Licensed stores throughout Vancouver. Must be 19+. Not permitted in public parks or beaches.',
    },
    {
      icon: '🚰',
      title: 'Tap Water',
      text: 'Tap water is safe and delicious throughout Vancouver. No need to buy bottled water.',
    },
    {
      icon: '🐻',
      title: 'Wildlife Note',
      text: 'Coyotes active in Stanley Park at night. Bears enter suburban areas occasionally. Keep food secured when camping nearby.',
    },
  ],
};

export default VANCOUVER;
