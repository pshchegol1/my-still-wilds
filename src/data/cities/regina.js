// Regina — данные страницы /city/regina (Реджайна, САСКАЧЕВАН)
// Видео Реджайны в бесплатных банках нет: Pexels отдаёт Эдмонтон
// (в т.ч. «историческое Законодательное собрание» — эдмонтонское).
// В шапке фото с Wikimedia Commons — центр города с берега озера Wascana
// осенью, каякер на воде, автор Tintaggon, сентябрь 2012, CC BY-SA 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (226 404; CTV News).
// Тарифы — regina.ca/…/fares-passes (повышение с 8 апреля 2026; кэпы).
// Сбор 3% Destination Marketing Fund — добровольный, Regina Hotel
// Association (презентация U of R 2026). Больницы — SHA.
// Saskatchewan не переводит часы (UTC-6 круглый год).
// RCMP Heritage Centre, Royal Saskatchewan Museum, Roughriders, Pile o’
// Bones — из общих знаний.

export const REGINA = {
  slug: 'regina',
  name: 'Regina',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Queen City',
  accentLevel: 'safe',
  heroIcon: '🏛️',
  heroImage: '/Cities/Regina/hero.jpg',
  heroCredit: 'Photo: Tintaggon / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.4452, lon: -104.6189 },
  subtitle: 'The Queen City of the Plains',
  description:
    'Saskatchewan’s capital grew up on a treeless plain where buffalo bones once piled by a creek — nearly every tree in the city was planted by hand. Today Regina wraps around Wascana Lake and its huge urban park, home to a domed legislature, the provincial museum and art gallery. It is also the training ground of every Mountie and one of the most passionate football towns in Canada.',

  actions: [
    { label: 'Explore Regina', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈226K (2021)' },
    { label: 'Role', value: 'Capital of Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'Airport', value: 'YQR · ≈10 min' },
    { label: 'To Saskatoon', value: '≈2 h 45 min by car' },
  ],

  badges: ['Provincial Capital', 'Wascana Lake', 'Rider Nation'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '226,404', label: 'People in the 2021 census — Saskatchewan’s second-largest city and its capital', level: 'blue' },
    { value: '$9.60', label: 'Daily fare cap on a Umo card — ride as much as you like after three trips (2026)', level: 'safe' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not switch to daylight saving time', level: 'purple' },
    { value: '3%', label: 'Voluntary destination marketing fee at member hotels, on top of GST and PST', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Victoria Park', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Office towers around a green square · Farmers’ market in summer' },
    { name: 'Wascana Centre', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Lake, Legislative Building, museum, gallery and walking trails' },
    { name: 'Cathedral Village', icon: '⛪', tag: '⛪ Village', tagLevel: 'purple', meta: 'Character homes, cafés and an annual street arts festival' },
    { name: 'Warehouse District', icon: '🍻', tag: '🍻 Nightlife', tagLevel: 'danger', meta: 'Old brick warehouses turned into breweries, restaurants and lofts' },
    { name: 'Lakeview', icon: '🏡', tag: '🏡 Leafy', tagLevel: 'olive', meta: 'Elm-lined streets south of Wascana Lake' },
    { name: 'RCMP Depot', icon: '🐎', tag: '🐎 Heritage', tagLevel: 'blue', meta: 'RCMP training academy and Heritage Centre in the west end' },
  ],

  attractions: [
    {
      name: 'Saskatchewan Legislative Building',
      icon: '🏛️',
      text: 'A grand domed legislature facing Wascana Lake, with marble halls and art inside. Free guided tours run year-round — check the schedule.',
      tags: [{ label: 'Free tours', level: 'safe' }, { label: 'Landmark', level: 'gold' }],
    },
    {
      name: 'Wascana Centre',
      icon: '🌳',
      text: 'A large urban park built around a man-made lake, with trails, islands, waterfowl, boat rentals in summer and skating in winter. The city’s green heart.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'RCMP Heritage Centre',
      icon: '🐎',
      text: 'The museum of the Royal Canadian Mounted Police beside Depot, the training academy every Mountie passes through. Check for the Sergeant Major’s Parade on select weekdays.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Must see', level: 'purple' }],
    },
    {
      name: 'Royal Saskatchewan Museum',
      icon: '🦖',
      text: 'The provincial museum in Wascana Centre, covering dinosaurs, prairie ecology and First Nations history.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'MacKenzie Art Gallery',
      icon: '🖼️',
      text: 'Saskatchewan’s major public gallery, with historic and contemporary Canadian and Indigenous art.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Mosaic Stadium',
      icon: '🏈',
      text: 'Home of the Saskatchewan Roughriders. On game days the city turns green — and fans wear watermelons on their heads.',
      tags: [{ label: 'Tickets', level: 'gold' }, { label: 'Summer–fall', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Lake, Valley and Prairie Sky',
  outdoor: [
    { icon: '🚶', name: 'Wascana Trails', dist: 'In the city', text: 'Paved loops around the lake and through the park.' },
    { icon: '🛶', name: 'Paddling Wascana', dist: 'Summer', text: 'Canoe and kayak rentals on the calm city lake.' },
    { icon: '🏞️', name: 'Qu’Appelle Valley', dist: '≈1 h northeast', text: 'A deep valley of lakes and hills cutting through the prairie — beaches, golf and the town of Fort Qu’Appelle.' },
    { icon: '🚂', name: 'Moose Jaw', dist: '≈45 min west', text: 'Tunnel tours, a historic downtown and the Temple Gardens mineral spa.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Wascana Lake', text: 'Skating on the lake and outdoor rinks when it freezes.' },
    { icon: '🌅', name: 'Prairie Sunsets', dist: 'Everywhere', text: 'Wide-open sky makes for huge sunsets and storms in summer.' },
  ],

  food: [
    { icon: '🍕', title: 'Neighbourhood Pizza', area: 'City-wide', areaLevel: 'gold', text: 'Local pizza joints are a Regina institution — ask a local for their favourite.' },
    { icon: '🍻', title: 'Craft Breweries', area: 'Warehouse District', areaLevel: 'danger', text: 'Taprooms in old brick buildings.' },
    { icon: '☕', title: 'Cafés', area: 'Cathedral Village', areaLevel: 'purple', text: 'Independent coffee shops on 13th Avenue.' },
    { icon: '🥟', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie Ukrainian comfort food.' },
    { icon: '🥩', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Local beef and bison.' },
    { icon: '🫐', title: 'Saskatoon Berry Pie', area: 'Bakeries', areaLevel: 'safe', text: 'The prairie berry, baked into pies and tarts.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Snow melts in April; trees leaf out in May and Wascana fills with birds.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot, sunny days, late sunsets, festivals and football. Watch for thunderstorms.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Crisp days, golden trees in the park and the football season’s best games.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Cold, windy winters, often below −25 °C — but lots of sunshine.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Regina International Airport (YQR) is close to downtown, with flights across Canada.',
      time: '≈10 min to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes the city; Highway 11 runs north to Saskatoon and Highway 6 south toward the US border.',
      time: '≈2 h 45 min from Saskatoon',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches link Regina with Saskatoon and other prairie towns. Check current operators.',
      time: '≈3 h to Saskatoon',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger train to Regina — the old Union Station is now a casino. VIA’s transcontinental route passes through Saskatoon instead.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Victoria Park, a short walk from Wascana.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Regina%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🍻',
      title: 'Warehouse District',
      area: 'Nightlife',
      text: 'Rentals near breweries and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Warehouse+District', level: 'blue' },
      ],
    },
    {
      icon: '🛣️',
      title: 'East & Airport',
      area: 'Highway hotels',
      text: 'Chain hotels along Victoria Avenue East and near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Saskatchewan', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Regina Transit',
      text: 'Regina Transit runs buses across the city. Pay exact coins, or tap a Umo card or app — stored value is cheaper and capped daily and monthly. Fares rose on April 8, 2026, and paper transfers were removed.',
      linkLabel: 'Regina Transit',
      linkUrl: 'https://www.regina.ca/transportation-roads-parking/transit/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares from the City of Regina fares page (2026). Umo cards cost $5 at transit agents. For children 13 and under, see the city’s child transit pass rules.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $3.50 (exact coins)', 'Umo stored value: $3.20', 'Daily cap: $9.60', 'Monthly cap / pass: $97'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.regina.ca/transportation-roads-parking/transit/fares-passes/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown, Wascana and Cathedral Village are walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Flat city with park paths.' },
          { icon: '🚗', title: 'Car', text: 'Handy for Qu’Appelle Valley and Moose Jaw.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'Tap a Umo card instead of paying cash — it is cheaper per ride and stops charging after $9.60 in a day.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST, and member hotels of the Regina Hotel Association add a voluntary 3% destination marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Regina / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST (+ 3% marketing fee at member hotels)' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
      { icon: '🏈', label: 'Game tickets: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏛️', label: 'Legislative Building tours: free' },
      { icon: '🌳', label: 'Wascana Centre: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year — the same as Alberta since November 2026, and the same as Manitoba in winter.' },
    { icon: '🏈', title: 'Game Day', text: 'On Roughriders home games, hotels fill and the city wears green. Book ahead.' },
    { icon: '❄️', title: 'Cold Winters', text: 'Wind chills below −30 °C are common in January. Plug in your car overnight.' },
    { icon: '⛈️', title: 'Summer Storms', text: 'Prairie thunderstorms build quickly on hot afternoons — watch the sky.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Bring repellent for summer evenings by Wascana Lake.' },
    { icon: '🎫', title: 'Exact Coins', text: 'Cash fares need exact coins; a Umo card is easier.' },
    { icon: '🪶', title: 'Whose Land', text: 'Regina is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Regina General Hospital · 1440 14th Ave', 'Pasqua Hospital · 4101 Dewdney Ave', 'Emergencies: call 911'] },
  ],
};

export default REGINA;
