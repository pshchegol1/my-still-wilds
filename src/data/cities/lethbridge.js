// Lethbridge — данные страницы /city/lethbridge
// Видео Летбриджа в бесплатных банках нет: Pexels по "lethbridge" отдаёт
// Эдмонтон и Калгари, а ролик "bridges over Alberta's river" по кадрам —
// бетонные мосты над Северным Саскачеваном, не виадук Летбриджа.
// В шапке фото с Wikimedia Commons — виадук (High Level Bridge) над
// долиной реки Олдмен, автор Travhillier, 2016, CC BY-SA 4.0. Лицензия
// требует указывать автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Тарифы Lethbridge Transit — со страницы города; система оплаты
// менялась в 2026, в тексте сказано сверяться.

export const LETHBRIDGE = {
  slug: 'lethbridge',
  name: 'Lethbridge',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Southern Prairie',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/Lethbridge/hero.jpg',
  heroCredit: 'Photo: Travhillier / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.6942, lon: -112.8328 },
  subtitle: 'The City on the Coulees',
  description:
    'A prairie city built on the rim of the Oldman River valley, with a steel railway trestle a mile long striding across the coulees below. In Blackfoot it is Sikóóhkotok — the place of black rocks — and it sits at the heart of Blackfoot country, between the largest First Nations reserve in Canada and the mountains on the western skyline.',

  actions: [
    { label: 'Explore Lethbridge', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈114K' },
    { label: 'Climate', value: 'Dry · Windy' },
    { label: 'High Level Bridge', value: '≈1.6 km · 96 m' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈210 km · 2h' },
    { label: 'To Waterton', value: '≈130 km · 1.5h' },
  ],

  badges: ['Coulee Country', 'Blackfoot Territory', 'Chinook Winds'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1909', label: 'The High Level Bridge opens — still the largest railway structure in Canada, still carrying trains', level: 'gold' },
    { value: '1869', label: 'Fort Whoop-Up, the most notorious whisky fort, opens — its trade helped bring the Mounted Police west', level: 'danger' },
    { value: '1870', label: 'The last great battle between the Blackfoot and the Cree, fought in the river bottom below the city', level: 'purple' },
    { value: '1967', label: 'Nikka Yuko Japanese Garden opens for Canada’s centennial — named for Japan–Canada friendship', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: '🏛️ Core', tagLevel: 'gold', meta: 'Galt Museum on the coulee edge · Galt Gardens · Restaurants and the old brick blocks' },
    { name: 'The River Valley', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: '🌳 Below the city', tagLevel: 'safe', meta: 'Indian Battle Park · Fort Whoop-Up · Helen Schuler Nature Centre · Trails under the bridge' },
    { name: 'Henderson Lake', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: '🏞️ South-east', tagLevel: 'blue', meta: 'Lake and park · Nikka Yuko Japanese Garden · Exhibition grounds' },
    { name: 'West Lethbridge', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: '🎓 Across the river', tagLevel: 'purple', meta: 'University of Lethbridge built into the coulee · Newer suburbs · Coulee trails' },
    { name: 'North Lethbridge', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏘️ North', tagLevel: 'olive', meta: 'Older working neighbourhoods · Former mining and rail town · Local diners' },
    { name: 'South Side', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: '🛍️ Commercial', tagLevel: 'danger', meta: 'Mayor Magrath Drive · Most hotels and chain restaurants · Car-oriented' },
  ],

  attractions: [
    {
      name: 'High Level Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A steel trestle about 1.6 km long and 96 m high, built by the Canadian Pacific Railway between 1907 and 1909 to reach the coal mines and still carrying freight trains today. It is the largest railway structure in Canada. Walk the river-bottom trails in Indian Battle Park to stand directly beneath it — seeing a train cross overhead is the classic Lethbridge moment.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Iconic', level: 'gold' }],
    },
    {
      name: 'Fort Whoop-Up',
      icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      text: 'A reconstruction of the most notorious of the American “whisky forts” built on what is now Canadian soil from 1869. Between 1869 and 1874 its trade in liquor and guns did deep harm to Blackfoot communities, and the lawlessness helped push Ottawa to create the North West Mounted Police in 1873. A National Historic Site, run by the Galt Museum — the story is told as a harm, not a cowboy romance.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Hard history', level: 'danger' }],
    },
    {
      name: 'Indian Battle Park',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'The river bottom where, in 1870, the Blackfoot and the Cree fought the last great battle between them, often called the Battle of the Belly River; a peace followed the next year. Today it is a large park under the High Level Bridge, with trails, picnic areas and the fort.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'River valley', level: 'blue' }],
    },
    {
      name: 'Nikka Yuko Japanese Garden',
      icon: '⛩️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: 'A traditional Japanese garden opened in 1967 for Canada’s centennial, designed by landscape architects from Japan, with structures built there and reassembled here. The name means Japan–Canada friendship and honours Japanese Canadians in southern Alberta — many of whom came during the Second World War, forcibly removed from the BC coast and sent to work on sugar beet farms. Seasonal; check opening dates.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Galt Museum & Archives',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The city museum, in a former hospital building on the edge of the coulee, with the story of Sikóóhkotok — Blackfoot land, the coal mines, the railway and the people who came to farm. The viewing gallery over the river valley is worth the visit on its own.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
    },
    {
      name: 'Head-Smashed-In Buffalo Jump',
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'About an hour west, a UNESCO World Heritage Site where Blackfoot people drove bison over a cliff for some six thousand years. The interpretive centre, built into the cliff and run with Blackfoot guides, is one of the most important places in the province.',
      tags: [{ label: 'UNESCO', level: 'purple' }, { label: 'Day trip', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Coulees, River and Wind',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Coulee Trails', dist: 'Both sides of the river', text: 'Paths run along the coulee rims and down into the river bottom. Exposed, dry and steep in places — carry water, and watch for rattlesnakes on warm days.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Helen Schuler Nature Centre', dist: 'River bottom', text: 'A free nature centre with short trails through the cottonwood forest under the bridge. Deer, porcupines and owls live here, in the middle of the city.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Cycling', dist: 'City-wide', text: 'Long paved pathways connect the river valley, Henderson Lake and the neighbourhoods. Ride with the wind at your back — the other direction can be brutal.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Oldman River', dist: 'Through the valley', text: 'Floating and paddling in summer when flows allow. The river is cold, can be shallow and braided, and changes after spring runoff — check conditions first.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Waterton Lakes', dist: '≈1.5h south-west', text: 'The nearest national park, where prairie meets mountains with almost no foothills in between. A park pass is required.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', name: 'Wind & Chinooks', dist: 'Always', text: 'Lethbridge is one of the windier places in Canada, and chinook winds can push winter temperatures above zero in hours. Secure hats and car doors.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is ranching and feedlot country, and steak and burgers are the regional default.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown · North side', areaLevel: 'gold', text: 'A small brewery scene with taprooms that double as the town’s social rooms.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Asian Food', area: 'Downtown', areaLevel: 'purple', text: 'Long-established Chinese and Japanese restaurants reflect communities that have been in southern Alberta for more than a century.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm Country', area: 'Around the city', areaLevel: 'olive', text: 'Irrigated farmland surrounds the city — markets and farm stands in summer, and sweet corn from nearby Taber in August.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Independent coffee shops cluster downtown and around the university.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Exhibition grounds', areaLevel: 'safe', text: 'A seasonal market with southern Alberta producers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Green coulees', text: 'The coulees turn briefly green, wildflowers bloom and the river runs high. Wind is near constant and late snow happens.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Hot and dry', text: 'Long, sunny and hot, with dry air. Thunderstorms can bring hail fast — watch the western sky. Wildfire smoke drifts in some summers.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 4, note: 'Golden cottonwoods', text: 'The river-bottom cottonwoods turn gold and the heat breaks. Excellent walking weather.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold, broken by chinooks', text: 'Cold snaps, wind chill and blowing snow, broken by chinooks that can melt everything in a day. Highways close in blizzards — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Calgary',
      text: 'Highway 2 south and Highway 3 east, about 210 km across open prairie. Strong crosswinds are common; high-sided vehicles should take care.',
      time: '≈2h from Calgary',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Lethbridge (YQL)',
      text: 'A small airport south of the city with flights to Calgary. Most visitors fly into Calgary and drive.',
      time: '≈15 min from downtown',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The Coutts–Sweetgrass crossing on Highway 4 is the main border point, about 100 km south-east, on the route to Montana.',
      time: '≈1h from the border',
    },
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'From Waterton',
      text: 'Highways 5 and 6 connect Lethbridge with Waterton Lakes National Park through ranch land and wind farms.',
      time: '≈1.5h',
    },
  ],

  stay: [
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Mayor Magrath Drive',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels and motels along the main commercial strip in the south of the city. Practical rather than charming.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lethbridge+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Lethbridge%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Fewer rooms',
      text: 'Close to the Galt Museum, restaurants and the coulee edge. The best area to walk in the evening.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Lethbridge', level: 'blue' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Campgrounds',
      area: 'River valley · Seasonal',
      text: 'Campgrounds near the river and on the edge of the city in summer. Book ahead for long weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lethbridge+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Lethbridge Transit',
      text: 'A city bus network links downtown, the university, the college and the main commercial areas. Service is reasonable on the main routes and thin on evenings and Sundays — for the river valley sites, a car or bike is easier.',
      linkLabel: 'Lethbridge Transit',
      linkUrl: 'https://www.lethbridge.ca/roads-parking-transit/transit/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the city’s transit page. In 2026 the city added a mobile app and web portal for buying fares; older Breeze cards needed upgrading. Confirm current prices before you ride.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Cash: $3.00 (exact fare)', 'Day pass: $7.50', '10 rides: $22.50', 'Monthly pass: $77'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.lethbridge.ca/roads-parking-transit/transit/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to reach the river valley, Head-Smashed-In and Waterton.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Good pathways — but plan around the wind.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city; book ahead for early flights.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the coulee-edge viewpoints are walkable; the river bottom is a steep walk down.' },
        ],
      },
    ],
    proTip: {
      label: 'Bridge tip:',
      text: 'Freight trains cross the High Level Bridge several times a day without a published schedule. Walk the trails under it in Indian Battle Park and wait — the rumble carries a long way down the valley before the train appears.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Lethbridge / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum and garden admission: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', label: 'Transit fares: as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%.',
  },

  practical: [
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Wind', text: 'Expect strong wind on most days. It closes highways to light trailers, tears car doors from hands and makes winter cold far worse.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Rattlesnakes', text: 'Prairie rattlesnakes live in the coulees. Stay on trails, watch where you step on warm days and keep dogs leashed.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Sun & Heat', text: 'Summers are hot and dry with little shade on the coulee trails. Carry water and sunscreen.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Blowing snow can drop visibility to nothing on the open highways. Check 511 Alberta before travelling.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Pass for Waterton', text: 'Waterton Lakes National Park requires a Parks Canada pass — $12.25 adult per day in 2026, youth free.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Lethbridge is Sikóóhkotok, in Treaty 7 territory and the traditional lands of the Blackfoot Confederacy — Kainai, Piikani and Siksika. The Kainai Nation’s reserve, the largest First Nations reserve in Canada, lies just to the south-west.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Chinook Regional Hospital', '960 19 Street South', 'Emergencies: call 911'] },
  ],
};

export default LETHBRIDGE;
