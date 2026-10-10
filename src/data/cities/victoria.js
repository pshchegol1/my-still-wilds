// Victoria — данные страницы /city/victoria
// Фото города пока нет на диске (есть только герб-crest, не фото) —
// hero и районы используют icon-fallback в CityPage.jsx, а не
// выдуманные пути к несуществующим картинкам.

export const VICTORIA = {
  slug: 'victoria',
  name: 'Victoria',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · The Garden City',
  accentLevel: 'purple',
  heroIcon: '🏛️',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4284, lon: -123.3656 },
  subtitle: 'The Capital on the Pacific',
  description:
    "British Columbia's capital sits at the southern tip of Vancouver Island — a walkable harbour city of Victorian architecture, flower-lined streets, afternoon tea, whale watching and some of the mildest weather in Canada. A world away from the mainland, just a ferry ride from Vancouver.",

  actions: [
    { label: 'Explore Victoria', href: '#neighbourhoods' },
    { label: 'Whale Watching', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈92K city' },
    { label: 'Metro Area', value: '≈397K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8)' },
    { label: 'Airport', value: 'YYJ' },
    { label: 'From Vancouver', value: 'Ferry 1h35' },
  ],

  badges: ['Provincial Capital', 'Very Walkable', 'Mild Climate'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌧️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 5 },
  ],

  highlights: [
    { value: 'Mile 0', label: 'The Trans-Canada Highway starts here, at Beacon Hill Park', level: 'purple' },
    { value: '1h 35', label: 'BC Ferries crossing from Tsawwassen (Vancouver) to Swartz Bay', level: 'safe' },
    { value: '$6', label: 'The most you pay for transit in a day with Umo fare capping', level: 'gold' },
    { value: 'Oldest', label: 'Chinatown in Canada — home to narrow Fan Tan Alley', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Inner Harbour', icon: '🏛️', tag: '🏛️ Downtown', tagLevel: 'purple', meta: 'Parliament · Fairmont Empress · Museum · Water taxis' },
    { name: 'Chinatown & Old Town', icon: '🏮', tag: '🏮 Historic', tagLevel: 'danger', meta: 'Fan Tan Alley · Market Square · Government Street shops' },
    { name: 'James Bay', icon: '🌳', tag: '🌳 Parks & Sea', tagLevel: 'safe', meta: 'Beacon Hill Park · Mile 0 · Dallas Road waterfront walk' },
    { name: 'Fernwood', icon: '🎨', tag: '🎨 Local', tagLevel: 'purple', meta: 'Indie cafés · Theatre · Neighbourhood square · Local feel' },
    { name: 'Oak Bay Village', icon: '🏡', tag: '🏡 Seaside', tagLevel: 'blue', meta: 'English-style village · Tea rooms · Beaches · Stargazing spot' },
    { name: 'Rockland & Cook Street Village', icon: '🏰', tag: '🏰 Heritage', tagLevel: 'gold', meta: 'Craigdarroch Castle · Heritage homes · Cafés and bakeries' },
  ],

  attractions: [
    {
      name: 'Inner Harbour',
      icon: '⛵',
      text: 'The postcard heart of Victoria — seaplanes, harbour ferries, street performers and the best views of the Parliament Buildings and the Fairmont Empress. Pleasant at any hour; magical at dusk.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Iconic', level: 'purple' }],
    },
    {
      name: 'BC Parliament Buildings',
      icon: '🏛️',
      text: 'The provincial legislature faces the harbour and is outlined in lights after dark. Walk the grounds any time; check the schedule if you want a tour of the interior.',
      tags: [{ label: 'Grounds free', level: 'safe' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Afternoon Tea at the Empress',
      icon: '🫖',
      text: "Victoria's most famous ritual — tiered trays, loose-leaf tea and a lobby that feels like another century. Reserve ahead in summer. Other tea rooms around town offer more relaxed alternatives.",
      tags: [{ label: 'Reservation', level: 'gold' }, { label: 'Tradition', level: 'danger' }],
    },
    {
      name: 'Royal BC Museum',
      icon: '🦣',
      text: 'Natural and human history of British Columbia, right on the Inner Harbour. Some galleries have been reopening in stages, so check what is open and the current hours before you go.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Craigdarroch Castle',
      icon: '🏰',
      text: 'A Victorian mansion built for coal baron Robert Dunsmuir, now a National Historic Site. Self-guided tours, stained glass, and views from the tower. Check days and hours — it is not open every day.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Butchart Gardens',
      icon: '🌺',
      text: 'About 55 acres of formal gardens in Brentwood Bay — Sunken Garden, Rose Garden, Japanese Garden. Allow a half day and about 30 minutes each way by car, or take a tour or transit.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: '20 km away', level: 'purple' }],
    },
    {
      name: 'Beacon Hill Park & Mile 0',
      icon: '🌳',
      text: 'About 200 acres of gardens, ponds, peacocks and sea views. The Mile 0 marker for the Trans-Canada Highway is near the Dallas Road edge. Walk the cliffs for views across to the Olympic Mountains.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'purple' }],
    },
    {
      name: "Fisherman's Wharf",
      icon: '🏠',
      text: 'A colourful floating-home community with food kiosks and seals hoping for scraps. A short walk or harbour-ferry ride from the Inner Harbour — a good spot for fish and chips outdoors.',
      tags: [{ label: 'Free to walk', level: 'safe' }, { label: 'Casual eats', level: 'danger' }],
    },
    {
      name: 'Whale Watching',
      icon: '🐋',
      text: 'Tours depart from the Inner Harbour and nearby marinas into the Salish Sea — orcas, humpbacks and grey whales, plus seals and sea lions. Choose operators that follow responsible-viewing guidelines.',
      tags: [{ label: 'Paid Tour', level: 'gold' }, { label: 'Spring–Fall', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Nature Beyond the Harbour',
  outdoor: [
    { icon: '🌊', name: 'Beacon Hill Park & Dallas Road', dist: 'In the city', text: 'Gardens, ponds and peacocks in the park, then a cliff-top walk along Dallas Road with views across the strait to the Olympic Mountains. Easy, flat and free.' },
    { icon: '🐟', name: 'Goldstream Provincial Park', dist: '~20 min drive', text: 'Old-growth forest, Niagara Falls (a 47m drop) and the steep Mount Finlayson trail. Chum salmon spawn here mid-Oct to early Dec, drawing bald eagles.' },
    { icon: '🚲', name: 'Galloping Goose Trail', dist: 'Bike or hike', text: 'A flat, car-free regional trail from downtown out to the western communities, passing Thetis Lake Regional Park along the way.' },
    { icon: '🥾', name: 'Sooke Coast Hiking', dist: '30–60 min drive', text: 'East Sooke Regional Park has rugged coastal hiking; the Juan de Fuca Marine Trail and Botanical Beach are further out. Check tides and carry offline maps.' },
    { icon: '🛶', name: 'Kayaking & Paddleboarding', dist: 'Inner Harbour & Gorge', text: 'Rent on the sheltered Inner Harbour and Gorge Waterway, or join a guided sea-kayak trip along the coast. The Pacific stays cold all year — wear a lifejacket.' },
    { icon: '🏝️', name: 'Southern Gulf Islands', dist: 'Ferry from Swartz Bay', text: 'Salt Spring, Pender, Galiano, Mayne and Saturna islands — markets and galleries on Salt Spring, quiet cycling and beaches on the smaller islands.' },
  ],

  food: [
    { icon: '🫖', title: 'Afternoon Tea', area: 'Inner Harbour · Government St', areaLevel: 'purple', text: 'Victoria takes tea seriously. The Fairmont Empress is the classic, and local tea merchants and tea rooms across the city offer calmer, cheaper ways to join the tradition.' },
    { icon: '🐟', title: 'Fish & Chips', area: "Ogden Point · Fisherman's Wharf", areaLevel: 'blue', text: "Fresh Pacific fish served from harbourside kiosks and shipping-container counters. Eat on the water with seagulls watching your every bite." },
    { icon: '🍺', title: 'Craft Beer & Ale Trail', area: 'Downtown · Harbour-side', areaLevel: 'gold', text: "Victoria has one of Canada's earliest craft-beer scenes, including long-running brewpubs on the water. The Victoria Ale Trail links the breweries." },
    { icon: '🦀', title: 'Pacific Seafood', area: 'Restaurants citywide', areaLevel: 'safe', text: 'Wild salmon, Dungeness crab, oysters and — in late spring — spot prawns, a beloved BC seasonal treat. Ask what is local and in season.' },
    { icon: '🥟', title: 'Chinatown & Fan Tan Alley', area: 'Fisgard Street', areaLevel: 'danger', text: "Dim sum, bakeries and tiny independent shops in Canada's oldest Chinatown. Squeeze down Fan Tan Alley, one of the narrowest streets in the country." },
    { icon: '🥕', title: 'Farmers Markets', area: 'Moss Street · Cook Street Village', areaLevel: 'purple', text: 'Greater Victoria has a strong farm-to-table culture. Weekend farmers markets in season are great for local cheese, baking, flowers and picnic supplies.' },
  ],

  seasons: [
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Book early', text: 'Peak season — warm, dry days, long evenings, gardens at their fullest and whale watching in full swing. Inner Harbour is busy and hotels and ferries fill up, so reserve early.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Quieter', text: 'Calm, golden light and thinner crowds. September is often still pleasant; rain starts returning through October. A good value time with whales and gardens still around.' },
    { icon: '🌧️', name: 'Winter', months: 'November — February', level: 'blue', rating: 3, note: 'Mild & wet', text: 'Mild by Canadian standards, with rain and grey skies more common than snow. Cozy pubs, storm watching on the coast, and holiday lights. Pack a proper rain jacket.' },
    { icon: '🌸', name: 'Spring', months: 'March — May', level: 'olive', rating: 5, note: 'Blossoms!', text: "Cherry blossoms and spring bulbs arrive early — often while the rest of Canada is still under snow. Grey whales pass through, and crowds stay moderate." },
  ],

  gettingThere: [
    {
      icon: '⛴️',
      title: 'By BC Ferries from Vancouver',
      text: 'The classic route: Tsawwassen to Swartz Bay across the Gulf Islands. Swartz Bay is roughly 30 minutes from downtown Victoria. Reservations are strongly recommended in summer, on weekends and holidays. Foot passengers can connect by bus (routes 70/71/72).',
      time: '1h35 crossing + ~30 min to downtown',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: "Victoria International Airport (YYJ) is north of the city near Sidney, with flights from Vancouver, Calgary, Toronto and other Canadian and US cities. For a scenic arrival, floatplanes fly between downtown Vancouver and Victoria's Inner Harbour in about half an hour.",
      time: 'Short taxi/rideshare from YYJ to downtown',
    },
    {
      icon: '⛴️',
      title: 'From Seattle & Washington State',
      text: "Passenger and vehicle ferries cross the Strait to downtown Victoria's harbour, and floatplanes fly from Seattle. Bring a passport — you are crossing an international border, and check each operator's current schedule.",
      time: 'Passport required',
    },
  ],

  stay: [
    {
      icon: '🏰',
      title: 'Inner Harbour',
      area: 'Best location · Walk everywhere',
      text: 'The Fairmont Empress, Hotel Grand Pacific and Delta Victoria Ocean Pointe put you steps from the harbour, Parliament and the museum. Best for first-time visitors — and the priciest area.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Inner+Harbour+Victoria+BC', level: 'purple' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Victoria-Hotels.d6086023.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏮',
      title: 'Downtown & Old Town',
      area: 'Boutique · Restaurants · Nightlife',
      text: 'Boutique hotels near Government Street, Chinatown and Market Square. Easy walking to restaurants, pubs and shopping, and a short stroll to the harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Victoria+BC', level: 'purple' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Victoria--BC', level: 'danger' },
      ],
    },
    {
      icon: '🏡',
      title: 'James Bay',
      area: 'Quiet · Heritage · Near the park',
      text: 'A residential neighbourhood of heritage B&Bs and guesthouses next to Beacon Hill Park and the sea. A calm base that is still a short walk from the Inner Harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=James+Bay+Victoria+BC', level: 'purple' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/James-Bay--Victoria--BC', level: 'danger' },
      ],
    },
    {
      icon: '🌊',
      title: 'Oak Bay',
      area: 'Seaside · Relaxed · Upscale',
      text: 'Oak Bay Beach Hotel and village inns offer a quieter seaside stay with beaches, tea rooms and starry skies. You will want a bus, rideshare or bike to reach downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Oak+Bay+BC', level: 'purple' },
      ],
    },
    {
      icon: '🚢',
      title: 'Sidney / Swartz Bay',
      area: 'Ferry & airport · Budget',
      text: 'Several hotels near the airport and ferry terminal for early sailings or late flights. Practical rather than scenic; downtown Victoria is about a 30-minute ride away.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sidney+BC', level: 'purple' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Westshore & Langford',
      area: 'More affordable · Car helpful',
      text: 'West of the city, with more rooms for the money and easy access to Sooke and Goldstream. Plan on a car or the bus for sightseeing in central Victoria.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Langford+BC', level: 'purple' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/victoria', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'BC Transit — Victoria Regional Transit',
      text: "Victoria has no subway, SkyTrain or light rail — transit is a bus network that runs seven days a week and reaches all ferry terminals. Downtown is compact and very walkable. Vancouver's Compass card does not work here — use an Umo card, the Umo app or a contactless card.",
      linkLabel: 'BC Transit Official',
      linkUrl: 'https://www.bctransit.com/victoria',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Umo',
        text: 'Fares are the same for any ride in the region. Pay with the Umo app, a reloadable Umo card, contactless, or cash with exact change. Transit fares are exempt from sales tax.',
        fareBox: {
          label: 'Fares (adult)',
          lines: ['Single ride: $3.00', 'DayPass / daily cap: $6.00', '30-Day Pass: $85', 'Cash does not get the daily cap'],
        },
        linkLabel: 'Umo — Get the App or Card',
        linkUrl: 'https://ca.umopass.com',
      },
      {
        icon: '🛳️',
        title: 'Ferry & Airport Buses',
        text: 'Routes 70, 71 and 72 run between downtown and the Swartz Bay ferry terminal. The airport is served via Sidney (route 88 area) — many visitors find a taxi or rideshare easier.',
        fareBox: {
          label: 'Key Routes',
          lines: ['70 / 71 / 72 — Downtown ↔ Swartz Bay', '87 / 88 — Sidney ↔ Airport area', 'Download the Transit or Umo app', 'Real-time bus tracking in Umo'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/victoria/schedules-and-maps',
      },
      {
        icon: '🚶',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'Walk the Core', text: "Inner Harbour, museum, Chinatown and Government Street are all within a short walk." },
          { icon: '⛴️', title: 'Victoria Harbour Ferries', text: "Small water taxis hop between the Inner Harbour, Fisherman's Wharf and other waterfront stops." },
          { icon: '🚲', title: 'Cycling', text: 'Bike lanes and the Galloping Goose Trail make cycling a popular way to see the region.' },
          { icon: '🚕', title: 'Taxi & Rideshare', text: 'Taxis and ride-hailing apps are available; useful for the airport and late evenings.' },
        ],
      },
    ],
    proTip: {
      label: 'Car-free tip:',
      text: 'You do not need a car for central Victoria. Arrive by ferry or seaplane, walk the Inner Harbour area, and use a bus, tour or rideshare only for Butchart Gardens and farther trips.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      "Most goods are taxed at 12% — federal GST of 5% plus BC's provincial sales tax (PST) of 7%. But BC's rules have important exceptions: restaurant meals have no PST (only 5% GST), alcohol carries a 10% PST, and hotel stays carry a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax) — some hotels also add a ~1% Destination Marketing Fee. Always check whether a displayed room price includes tax.",
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Victoria', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'purple', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '👕', label: 'Adult clothing and shoes' },
      { icon: '📱', label: 'Electronics and technology' },
      { icon: '🎁', label: 'Souvenirs, gifts and most retail goods' },
      { icon: '🥤', label: 'Soda and similar drinks' },
      { icon: '🍷', label: 'Alcohol: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', label: 'Hotels: ~16% (GST + PST + 3% MRDT)' },
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
      'Tipping is customary. Restaurants: 15–20% of the pre-tax bill. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Bar staff: $1–2 per drink. Whale-watching and tour guides: 10–15% is appreciated.',
  },

  practical: [
    { icon: '🚶', title: 'Walkable Core', text: 'The Inner Harbour, museum, Chinatown and Government Street are all close together. Comfortable shoes beat a car here.' },
    { icon: '⛴️', title: 'Reserve the Ferry', text: 'BC Ferries reservations are strongly recommended in summer and on weekends and holidays. Without one you may wait for later sailings.' },
    { icon: '🧥', title: 'Layers & Rain Gear', text: 'Mild year-round, but sea breezes and wet winters are real. Pack layers and a waterproof jacket outside midsummer.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Use Umo (app, card) or contactless. Cash is exact change with no daily cap. Compass card is not accepted here.' },
    { icon: '🐋', title: 'Whale Watching', text: 'Choose licensed operators who follow viewing guidelines and keep a respectful distance from marine mammals. Dress warmly.' },
    { icon: '🚲', title: 'Cycling', text: 'Bike lanes and the Galloping Goose Trail connect Victoria with the western communities. Helmets are required in BC.' },
    { icon: '🏥', title: 'Hospital', lines: ['Royal Jubilee Hospital', '1952 Bay Street, Victoria', 'Emergencies: call 911'] },
    { icon: '📅', title: 'Check Before You Go', text: 'Museum galleries, castle days and tour schedules change. Confirm hours on the official sites before planning a day around them.' },
  ],
};

export default VICTORIA;
