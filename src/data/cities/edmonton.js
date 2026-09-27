// Edmonton — данные страницы /city/edmonton

export const EDMONTON = {
  slug: 'edmonton',
  name: 'Edmonton',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Gateway to the North',
  heroVideo: '/Cities/Edmonton/12097522-hd_1920_1080_60fps.mp4',
  heroImage: '/ab/cities/edmonton.png',
  heroCaption: 'Downtown Edmonton · Alberta · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.5461, lon: -113.4938 },
  subtitle: "Canada's Festival City",
  description:
    "Alberta's capital and Canada's northernmost major city — Edmonton is a city of contrasts. World-class festivals, the largest urban river valley park in North America, a booming food scene, and the gateway to Jasper National Park just 4 hours away.",

  actions: [
    { label: 'Explore Edmonton', href: '#neighbourhoods' },
    { label: 'Nearby Parks', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '1.0 Million' },
    { label: 'Metro Area', value: '1.5 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'MST / UTC-7' },
    { label: 'Airport', value: 'YEG' },
    { label: 'To Jasper NP', value: '4 hours' },
  ],

  badges: ['Festival City', 'River Valley', 'Northern Lights'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  highlights: [
    { value: '50+', label: 'Major festivals per year — more per capita than any Canadian city', level: 'blue' },
    { value: '7,400', label: 'Acres of river valley park — largest urban park system in North America', level: 'safe' },
    { value: '#1', label: 'Fringe Theatre Festival in North America — every August', level: 'gold' },
    { value: '17h', label: 'Daylight in summer — one of the sunniest summer cities in Canada', level: 'purple' },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & ICE District',
      image: '/Cities/Edmonton/Downtown & ICE District.png',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Rogers Place arena · Stantec Tower · Bars · Restaurants · NHL',
    },
    {
      name: 'River Valley & Cloverdale',
      image: '/Cities/Edmonton/River Valley & Cloverdale.png',
      tag: 'Nature',
      tagLevel: 'safe',
      meta: '160 km of trails · Cycling · Kayaking · Footbridge views',
    },
    {
      name: 'Old Strathcona',
      image: '/Cities/Edmonton/Old Strathcona.png',
      tag: 'Arts',
      tagLevel: 'danger',
      meta: 'Fringe Festival · Whyte Avenue bars · Theatres · Farmers market',
    },
    {
      name: 'West Edmonton Mall Area',
      image: '/Cities/Edmonton/West Edmonton Mall Area.jpg',
      tag: 'Shopping',
      tagLevel: 'purple',
      meta: "World's largest mall · Indoor waterpark · Ice rink · Entertainment",
    },
    {
      name: 'Chinatown & Little Italy',
      image: '/Cities/Edmonton/Chinatown & Little Italy.png',
      tag: 'Multicultural',
      tagLevel: 'blue',
      meta: 'Authentic cuisine · Community markets · Cultural festivals',
    },
    {
      name: 'Garneau & University Area',
      image: '/Cities/Edmonton/Garneau & University Area.png',
      tag: 'Local',
      tagLevel: 'safe',
      meta: 'University of Alberta · Coffee shops · Bookstores · Local food',
    },
  ],

  attractions: [
    {
      name: 'West Edmonton Mall',
      icon: '🛍️',
      text: "The world's largest shopping and entertainment centre — 800+ stores, an indoor waterpark, ice skating rink, submarine rides, and a full amusement park under one roof.",
      tags: [{ label: 'Paid for Attractions', level: 'gold' }, { label: 'Entertainment', level: 'purple' }],
    },
    {
      name: 'River Valley Trail System',
      icon: '🌿',
      text: '160 km of trails along the North Saskatchewan River — the largest urban park in North America. Cycling, hiking, kayaking, skiing in winter. Free and world-class.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Royal Alberta Museum',
      icon: '🦕',
      text: "Canada's largest museum in western Canada — Indigenous peoples gallery, natural history, Alberta dinosaurs, and interactive exhibits. A world-class institution downtown.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Old Strathcona & Whyte Ave',
      icon: '🎭',
      text: "Edmonton's bohemian heart — lined with independent restaurants, vintage shops, live music venues, and theatres. Home of the world's largest Fringe Theatre Festival every August.",
      tags: [{ label: 'Free to Walk', level: 'safe' }, { label: 'Arts', level: 'purple' }],
    },
    {
      name: 'Rogers Place — Oilers Hockey',
      icon: '🏒',
      text: 'Watch the Edmonton Oilers play NHL hockey at Rogers Place — one of the most modern arenas in North America. Part of the ICE District entertainment complex downtown.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
    },
    {
      name: 'Northern Lights Viewing',
      icon: '🌌',
      text: "Edmonton's northern latitude (53°N) makes it one of the best cities in Canada for Northern Lights. September to March — drive 30 minutes outside the city away from light pollution.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sep–Mar', level: 'blue' }],
    },
    {
      name: 'Muttart Conservatory',
      icon: '🌸',
      text: 'Four stunning glass pyramids on the river valley floor, each housing a different world climate — tropical, arid, temperate, and feature. A unique and beautiful attraction.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'K-Days & Northlands',
      icon: '🎡',
      text: "K-Days is Edmonton's massive summer fair — 10 days of rides, concerts, food, and entertainment every July. One of the largest fairs in Western Canada.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'July', level: 'danger' }],
    },
    {
      name: 'Art Gallery of Alberta',
      icon: '🎨',
      text: 'Stunning glass and steel building in downtown Edmonton with Canadian and international art collections. The building itself is an architectural masterpiece worth visiting.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Arts', level: 'purple' }],
    },
  ],

  outdoorHeading: "North America's Largest Urban Park System",
  outdoorNote:
    '7,400 acres of connected parkland along the North Saskatchewan River — 22 times the size of New York\'s Central Park. Free, year-round, and right in the heart of the city.',
  outdoor: [
    { icon: '🚴', name: 'Cycling', dist: '160 km of trails', text: 'Rent bikes at multiple locations. The River Valley Road is car-free on weekends in summer.' },
    { icon: '🥾', name: 'Hiking', dist: 'Terwillegar Park', text: 'Endless trails through ravines, river banks, and forest. Terwillegar Park is the most popular family hiking area.' },
    { icon: '🚣', name: 'Kayaking', dist: 'North Saskatchewan River', text: 'Paddle the river through the city. Rentals available at several river access points in summer.' },
    { icon: '⛷️', name: 'Cross-Country Ski', dist: 'Goldstick Park', text: 'Groomed ski trails in winter throughout the valley. Muttart Ski Area and Goldstick Park most popular.' },
    { icon: '🛷', name: 'Tobogganing', dist: 'Gallagher Hill', text: 'Classic Canadian winter fun. Multiple designated hills throughout the valley — Gallagher Hill is a favourite.' },
    { icon: '🌺', name: 'Hawrelak Park', dist: 'River valley floor', text: 'Beautiful park with a large lake, pedal boats in summer, and skating in winter. Site of many summer festivals.' },
    { icon: '🌉', name: 'High Level Bridge', dist: 'Downtown', text: 'Walk the pedestrian walkway for stunning river valley views. The streetcar runs across it in summer.' },
    { icon: '🐾', name: 'Dog Parks', dist: 'Emily Murphy Park', text: 'Multiple off-leash areas throughout the valley. Emily Murphy Park is the most popular dog-friendly spot.' },
  ],

  festivals: [
    { month: 'JUNE', icon: '🌮', name: 'Edmonton International Street Performers Festival', text: 'Free outdoor performances across the city — acrobats, magicians, comedians. Sir Winston Churchill Square.', level: 'safe' },
    { month: 'JULY', icon: '🎡', name: 'K-Days', text: '10-day summer fair with concerts, rides, food, and entertainment. One of the largest fairs in Western Canada.', level: 'gold' },
    { month: 'AUGUST', icon: '🎭', name: 'Edmonton Fringe Festival', text: 'Largest fringe theatre festival in North America. 200+ productions, 1,500+ shows over 11 days in Old Strathcona.', level: 'danger' },
    { month: 'AUGUST', icon: '🎵', name: 'Edmonton Folk Music Festival', text: 'One of the best folk festivals in the world. Gallagher Hill — four days of incredible music on the river valley.', level: 'danger' },
    { month: 'SEPT', icon: '🌍', name: 'Heritage Festival', text: "Over 90 cultural pavilions at Hawrelak Park representing the world's cultures through food, music, and dance.", level: 'olive' },
    { month: 'NOV', icon: '🎄', name: 'Candy Cane Lane', text: 'Famous residential street in Bonnie Doon with over 100 houses decorated with millions of Christmas lights.', level: 'blue' },
    { month: 'FEB', icon: '❄️', name: 'Ice on Whyte Festival', text: 'World-class ice carving competition on Whyte Avenue. Intricate sculptures, snow slides, and winter activities.', level: 'blue' },
    { month: 'JUNE', icon: '🌈', name: 'Edmonton Pride Festival', text: "One of Western Canada's largest Pride celebrations — parade, festival, and events throughout the city in June.", level: 'safe' },
  ],

  food: [
    { icon: '🥩', title: 'Alberta Beef', area: 'Downtown · Everywhere', areaLevel: 'blue', text: "Alberta is the beef capital of Canada. Edmonton's steakhouses serve world-class Alberta AAA beef. Notable spots: Hy's Steakhouse, The Harvest Room, and Hardware Grill." },
    { icon: '🫕', title: 'Ukrainian Food', area: 'Old Strathcona · Whyte Ave', areaLevel: 'danger', text: 'Alberta has one of the largest Ukrainian communities in Canada. Perogies, borscht, and cabbage rolls are staples. The Ukrainian Cultural Heritage Village is just outside the city.' },
    { icon: '🍜', title: 'Asian Food Scene', area: 'Chinatown · Millwoods', areaLevel: 'gold', text: "Edmonton's diverse Asian community means exceptional Vietnamese pho, Filipino adobo, Korean BBQ, Chinese dim sum, and Indian curry. Little Vietnam on 97th Street is a must." },
    { icon: '🍺', title: 'Craft Beer Scene', area: 'Old Strathcona · Downtown', areaLevel: 'safe', text: "Edmonton has an impressive craft brewery scene. Alley Kat (Alberta's oldest craft brewery), Situation Brewing, and Blind Enthusiasm are local favourites on the beer trail." },
    { icon: '🌾', title: 'Farm-to-Table', area: 'Grandin · Downtown', areaLevel: 'blue', text: "Surrounded by Alberta's farmland, Edmonton chefs have embraced farm-to-table dining. The City Market (Old Strathcona Farmers' Market) is one of Canada's best year-round markets." },
    { icon: '☕', title: 'Independent Cafés', area: 'Whyte Ave · Garneau', areaLevel: 'purple', text: "Edmonton's independent café scene is thriving. Transcend Coffee, Iconoclast Coffee, and Roasti all roast locally. The University of Alberta area has some of the best cafés." },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Edmonton transforms in summer — 17 hours of daylight, festivals almost every weekend, river valley packed with cyclists and kayakers. Fringe Festival in August is unmissable. Best time to visit.',
      rating: 5,
      note: 'Festival season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Beautiful golden aspen leaves in the river valley. Heritage Festival in September. Northern Lights season begins. Cooler but still pleasant. Oilers hockey season starts in October.',
      rating: 4,
      note: 'Northern Lights',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Edmonton winters are very cold (-20°C average in January) but Edmontonians embrace it. Ice skating downtown, toboggan hills, ice carving festivals, and the best Northern Lights season. Dress warmly!',
      rating: 3,
      note: 'Very cold!',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow can persist into April. River valley trails open as snow melts. Street festivals begin in May. Great for day trips to Jasper before the summer crowds arrive. Budget-friendly season.',
      rating: 3,
      note: 'Shoulder season',
    },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Edmonton International Airport (YEG) offers direct flights to major Canadian cities and select international destinations. One of the largest airports in Canada by land area.',
      time: '30 min by car/shuttle to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 2 connects Edmonton to Calgary (~3 hours south). The Yellowhead Highway leads west to Jasper National Park (~4 hours) — one of the most scenic drives in Canada.',
      time: 'Calgary: 3h · Jasper: 4h',
    },
    {
      icon: '🚇',
      title: 'Getting Around',
      text: 'Edmonton Transit Service (ETS) runs buses and the LRT light rail line through downtown and the university area. A car is useful for river valley access and day trips.',
      time: 'ETS Smart Fare card · edmonton.ca/ets',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown / ICE District',
      area: 'Best for nightlife and hockey',
      text: 'Fairmont Hotel Macdonald, JW Marriott, Sutton Place. Walking distance to Rogers Place, restaurants, and the river valley stairs.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Edmonton', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Edmonton-Hotels.d178294.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🎭',
      title: 'Old Strathcona / Whyte Ave',
      area: 'Best for arts and festivals',
      text: 'Boutique hotels and B&Bs steps from the Fringe Festival grounds, live music, and the City Market. Edmonton\'s most walkable, characterful neighbourhood.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Old-Strathcona--Edmonton', level: 'danger' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Strathcona+Edmonton', level: 'blue' },
      ],
    },
    {
      icon: '🛍️',
      title: 'West Edmonton Mall Area',
      area: 'Best for families',
      text: 'Fantasyland Hotel offers themed rooms right inside the mall — waterpark, amusement park, and 800+ stores steps from your room.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Edmonton+Mall', level: 'blue' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Police · Fire · Ambulance', '24/7'] },
    { icon: '🚇', title: 'Transit Pass', text: 'ETS Smart Fare card works on buses and LRT — tap on and pay by zone-free flat fare.' },
    { icon: '🧥', title: 'Winter Gear', text: 'Winters routinely hit -20°C. Pack a proper parka, insulated boots, and layers if visiting Nov–Mar.' },
    { icon: '💵', title: 'Tipping', text: '15–20% at restaurants and for taxis is standard and expected, same as the rest of Canada.' },
    { icon: '🌌', title: 'Northern Lights', text: 'Best viewed Sep–Mar, 30+ minutes outside the city away from light pollution, on clear dark nights.' },
    { icon: '🍁', title: 'Cannabis', text: 'Legal for adults 18+ in Alberta. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🚕', title: 'Ride Sharing', text: 'Uber and Lyft both operate throughout Edmonton — reliable and often faster than driving downtown.' },
    { icon: '🏔️', title: 'Day Trips', text: 'Jasper National Park (4h), Elk Island National Park (45 min), and the Ukrainian Cultural Heritage Village are all easy trips.' },
  ],
};

export default EDMONTON;
