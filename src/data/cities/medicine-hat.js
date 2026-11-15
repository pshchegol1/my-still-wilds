// Medicine Hat — данные страницы /city/medicine-hat
// Видео Медисин-Хата в бесплатных банках нет: Pexels по "medicine hat"
// отдаёт Эдмонтон и случайные кадры. В шапке фото с Wikimedia Commons —
// осенний центр города, ферменный мост через Южный Саскачеван и
// Saamis Tepee на горизонте, автор ColtonMckeePhotography, 2021,
// CC BY-SA 4.0. Лицензия требует указывать автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Тарифы Medicine Hat Transit — из городского Ride Guide (ноябрь 2025);
// подтверждения на 2026 нет, в тексте сказано сверяться.

export const MEDICINE_HAT = {
  slug: 'medicine-hat',
  name: 'Medicine Hat',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · South-East Prairie',
  accentLevel: 'caution',
  heroIcon: '🔥',
  heroImage: '/Cities/MedicineHat/hero.jpg',
  heroCredit: 'Photo: ColtonMckeePhotography / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.0405, lon: -110.6764 },
  subtitle: 'The Gas City',
  description:
    'A brick-and-clay city in the dry south-east corner of Alberta, set in the valley of the South Saskatchewan River among coulees and short-grass prairie. It sits on so much natural gas that Rudyard Kipling joked it had “all hell for a basement”, and its name comes from a Blackfoot word — saamis — for a medicine man’s headdress.',

  actions: [
    { label: 'Explore Medicine Hat', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈68.7K' },
    { label: 'Climate', value: 'Semi-arid · Sunny' },
    { label: 'Saamis Tepee', value: '≈65 m tall' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈295 km · 3h' },
    { label: 'To Cypress Hills', value: '≈65 km · 50 min' },
  ],

  badges: ['Gas City', 'Clay District', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1907', label: 'Kipling visits and says the region has “all hell for a basement” — the gas is still under the city', level: 'danger' },
    { value: '1916', label: 'Medalta Potteries opens — the Clay District made Medicine Hat a centre of Canadian ceramics', level: 'gold' },
    { value: '≈65 m', label: 'Saamis Tepee, built for the 1988 Calgary Olympics and raised here in 1991 over an archaeological site', level: 'purple' },
    { value: '2004', label: 'Cypress Hills becomes a dark-sky preserve — about an hour from the city', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Brick main streets · Esplanade Arts & Heritage Centre · City Hall by the river' },
    { name: 'The Historic Clay District', icon: '🏺', iconSrc: '/icons/attractions/ph_plant-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'Medalta museum in the old kilns · Brick plants · National Historic District' },
    { name: 'South Saskatchewan River Valley', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Green spine', tagLevel: 'safe', meta: 'Police Point Park · Riverside trails · Cottonwood forest' },
    { name: 'Saamis Heights', icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg', tag: 'South rim', tagLevel: 'purple', meta: 'Saamis Tepee · Saamis Archaeological Site · Views over the valley' },
    { name: 'Dunmore Road', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'Commercial', tagLevel: 'olive', meta: 'Most hotels and chain restaurants · Highway 1 access · Car-oriented' },
    { name: 'Crescent Heights', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'North', tagLevel: 'blue', meta: 'Residential neighbourhoods on the north side of the river · Coulee walks' },
  ],

  attractions: [
    {
      name: 'Medalta in the Historic Clay District',
      icon: '🏺', iconSrc: '/icons/attractions/ph_plant-thin.svg',
      text: 'Medalta Potteries made stoneware, dinnerware and crocks here from 1916 to 1954, using local clay and the city’s cheap natural gas to fire its kilns. The factory is now a museum and working ceramics studio inside the original beehive kilns, within the Medicine Hat Clay Industries National Historic District. One of the most interesting industrial heritage sites on the prairies.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Paid entry', level: 'caution' }],
    },
    {
      name: 'Saamis Tepee',
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      text: 'A steel tepee about 65 metres tall, built for the 1988 Calgary Winter Olympics and re-erected here in 1991 on the rim of the valley. It stands above the Saamis Archaeological Site, and storyboards around its base tell Indigenous history and culture. Often billed as the world’s tallest tepee.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Landmark', level: 'purple' }],
    },
    {
      name: 'Esplanade Arts & Heritage Centre',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The glass-fronted arts centre by the river, with the city museum and archives, a gallery and a theatre under one roof. The place to understand the gas, the clay and the ranching that built the city.',
      tags: [{ label: 'Downtown', level: 'blue' }, { label: 'Indoor', level: 'gold' }],
    },
    {
      name: 'Police Point Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A large natural park on a bend of the South Saskatchewan River, with trails through cottonwood forest, a nature centre and plenty of deer, beaver and birds.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
    },
    {
      name: 'Cypress Hills Interprovincial Park',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'About an hour south-east, the hills rise far above the prairie and carry lodgepole pine forest — a surprise in the middle of the grasslands. Elkwater Lake on the Alberta side, Fort Walsh National Historic Site on the Saskatchewan side, and a dark-sky preserve since 2004 that makes it one of the best stargazing places in western Canada.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Dark sky', level: 'purple' }],
    },
    {
      name: 'The Name',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'Medicine Hat comes from the Blackfoot saamis, a medicine man’s headdress. Several legends explain it — one of a hunter given a sacred hat by a river spirit, another of a Cree medicine man who lost his headdress in the river while retreating from a battle with the Blackfoot. A brick mural at City Hall depicts one of them.',
      tags: [{ label: 'Blackfoot', level: 'danger' }],
    },
  ],

  outdoorHeading: 'River Valley and Short-Grass Prairie',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'River Trails', dist: 'City-wide', text: 'Paved and gravel trails follow the South Saskatchewan and its coulees across the city. Exposed and hot in summer — go early with water.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'South Saskatchewan River', dist: 'Through town', text: 'Paddling and floating on a broad, slow-looking river that still has real current and cold water. Check flows and go with someone who knows it.' },
    { icon: '🌵', iconSrc: '/icons/attractions/ph_cactus-thin.svg', name: 'Prairie & Coulees', dist: 'Around the city', text: 'Short-grass prairie with cactus, sage and rattlesnakes. Stay on trails and watch your step on warm days.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Stargazing', dist: 'Cypress Hills', text: 'The dark-sky preserve at Cypress Hills is about an hour away; even the edge of the city has big prairie skies on clear nights.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Valley and prairie', text: 'Deer and pronghorn on the prairie edges, beavers in the river valley, raptors overhead. Pronghorn are fast — never chase them for a photo.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'River and reservoirs', text: 'Walleye, pike and trout in the region. An Alberta fishing licence is required; check current regulations.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Ranch Country Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is cattle country, and steak, burgers and barbecue are the regional default.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'gold', text: 'A small brewery scene for a city this size, with taprooms close to the old downtown.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Independent coffee shops in the brick blocks near the river and the Esplanade.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'City-wide', areaLevel: 'purple', text: 'Long-established Chinese restaurants and a growing range of other cuisines.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Greenhouses & Farms', area: 'Around the city', areaLevel: 'olive', text: 'Cheap gas and long sun made the area a greenhouse centre; local produce shows up at markets in summer.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Seasonal', areaLevel: 'safe', text: 'A summer market with south-east Alberta producers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Green prairie', text: 'The prairie greens briefly and wildflowers and cactus bloom in the coulees. Windy, with late snow possible.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Hot and dry', text: 'One of the hottest, driest and sunniest corners of Canada. Days above 30 °C are common; thunderstorms can bring hail. Plan outdoor time for mornings and evenings.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Golden valley', text: 'The cottonwoods along the river turn gold, the heat breaks and the light is long. The best season to visit.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold and dry', text: 'Cold snaps and wind, broken by chinooks. Dry and often sunny, but highways can close in blowing snow — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Trans-Canada Highway',
      text: 'Highway 1 runs south-east from Calgary across the prairie to Medicine Hat and on into Saskatchewan. Long, straight and windy, with few services between towns.',
      time: '≈3h from Calgary (≈295 km)',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'From Lethbridge',
      text: 'Highway 3 east through irrigated farmland and small towns.',
      time: '≈1h45 (≈165 km)',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Medicine Hat Airport has limited scheduled service. Most visitors fly into Calgary and drive.',
      time: '≈3h from YYC by car',
    },
    {
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      title: 'To Cypress Hills',
      text: 'Highway 41 south to Elkwater climbs out of the prairie into the hills. Fill the tank before leaving the city.',
      time: '≈50 min (≈65 km)',
    },
  ],

  stay: [
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Dunmore Road & Trans-Canada',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels and motels along the highway and the main commercial road. Practical for a road trip stop.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Medicine+Hat+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Medicine%20Hat%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Fewer rooms',
      text: 'Close to the Esplanade, the river and downtown restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Medicine+Hat', level: 'blue' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Cypress Hills Campgrounds',
      area: 'Rustic · Book ahead',
      text: 'Provincial campgrounds and cabins at Elkwater, for a night under the darkest skies in the region.',
      links: [
        { label: 'Alberta Parks Reservations', url: 'https://reserve.albertaparks.ca/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Medicine Hat Transit',
      text: 'City buses connect downtown, Medicine Hat College, the hospital and the main shopping areas. Service is limited on evenings and weekends; for Medalta, Police Point or Cypress Hills a car is far easier.',
      linkLabel: 'Medicine Hat Transit',
      linkUrl: 'https://www.medicinehat.ca/en/roads-parking-and-transportation/transit.aspx',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the city’s Ride Guide (November 2025). Cash, day passes and monthly passes are accepted alongside the reloadable MHT Go! card. Confirm current prices before you ride.',
        fareBox: {
          label: 'Adult (18–64)',
          lines: ['Single trip: $3.25', 'Day pass: $6.50', 'Monthly pass: $70.50'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.medicinehat.ca/en/roads-parking-and-transportation/transit.aspx',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to see the city and the region.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The river trail network is good for cycling; mind the heat and wind.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the Esplanade and the riverfront are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Driving the Trans-Canada between Calgary and Regina, Medicine Hat is the natural overnight stop. Give it an evening: the Clay District and a walk along the river are worth more than a highway motel and nothing else.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Medicine Hat / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST 5% + PST 6%', example: '$100 → pay $111', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 5% GST' },
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
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Heat & Sun', text: 'Summers are hot, dry and very sunny. Carry water, wear a hat and avoid long walks in the midday heat.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Rattlesnakes', text: 'Prairie rattlesnakes live in the coulees and river valley. Stay on trails and keep dogs leashed.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Wind & Storms', text: 'Strong wind is common, and summer thunderstorms bring hail. Take Alberta Emergency Alerts seriously.' },
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Long Empty Highways', text: 'Services are far apart on the Trans-Canada east and west of the city. Fill up before long stretches.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta stays on Alberta Time (UTC-6) all year — the same clock as Saskatchewan, 50 km east, so there is no time change at the border.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Fees', text: 'Cypress Hills is a provincial park; check Alberta Parks for current day-use and camping fees.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Medicine Hat is in Treaty 7 territory and the traditional lands of the Blackfoot Confederacy. The city’s name, from the Blackfoot saamis, and the Saamis Archaeological Site above the valley are reminders of how long people have lived here.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Medicine Hat Regional Hospital', '666 5 Street SW', 'Emergencies: call 911'] },
  ],
};

export default MEDICINE_HAT;
