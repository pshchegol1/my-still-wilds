// Baker Lake — данные страницы /city/baker-lake (Бейкер-Лейк, НУНАВУТ)
// Осторожно: большинство фото на Commons по запросу "Baker Lake" — это
// одноимённое озеро у горы Маунт-Бейкер в штате Вашингтон (США), не
// Нунавут! Отфильтровали вручную. Видео в бесплатных банках нет (Pexels
// выдаёт только безымянные озёра и остров Ванкувер). В шапке фото с
// Wikimedia Commons — вид на посёлок через озеро от аэропорта, автор
// Paul Gierszewski, 22.07.2014, CC BY-SA 4.0 — подпись "View from
// airport" и остальные фото того же автора подтверждены как именно
// Нунавут. Лицензия требует автора.
// Население — перепись 2021: расхождение между муниципалитетом (2 061,
// -0.4% к 2016) и population centre (1 653); используем показатель по
// муниципалитету.
// Бейкер-Лейк (Qamani'tuaq) — единственная населённая точка Нунавута,
// расположенная не на побережье, а в глубине материка, на озере Бейкер.
// Примерно в 40 км — географический центр Канады (Destination Nunavut).
// Ближайший населённый пункт к заповеднику Thelon Wildlife Sanctuary
// (≈52 000 км², создан для овцебыков).
// Известен резьбой по камню — выразительный, "грубый" стиль, который
// связывают с суровым климатом; центр ремёсел им. Jessie Oonark.
// Медцентр — Baker Lake Health Centre; точного адреса не нашли, только
// телефон (867) 793-2816 — указываем с оговоркой. В 2020-х были жалобы
// депутата на нехватку персонала.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний sealift.
// Из общих знаний: река Kazan River (популярна для сплава), статус
// региона Kivalliq, время в пути.

export const BAKER_LAKE = {
  slug: 'baker-lake',
  name: 'Baker Lake',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Canada’s Geographic Heart',
  accentLevel: 'purple',
  heroIcon: '🎨',
  heroImage: '/Cities/BakerLake/hero.jpg',
  heroCredit: 'Photo: Paul Gierszewski / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 64.3161, lon: -96.0144 },
  subtitle: 'Nunavut’s Only Inland Community',
  description:
    'Set on the shore of its namesake lake deep in the Kivalliq interior, Baker Lake (Qamani’tuaq) is the only community in Nunavut not on the coast — and sits close to the geographic centre of Canada. It is known across the territory for its raw, expressive stone carving tradition and as the gateway to the vast Thelon Wildlife Sanctuary.',

  actions: [
    { label: 'Explore Baker Lake', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈2.1K (2021)' },
    { label: 'Known For', value: 'Inuit Carving Art' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Rankin Inlet', value: '≈1 h by plane' },
  ],

  badges: ['Inland Nunavut', 'Carving Tradition', 'Thelon Gateway'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈2.1K', label: 'People in Baker Lake in the 2021 census', level: 'purple' },
    { value: '1', label: 'Only inland community in Nunavut — every other one sits on the coast', level: 'gold' },
    { value: '≈40 km', label: 'Distance to the geographic centre of Canada', level: 'blue' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Hamlet office, school and the main community buildings' },
    { name: 'Lakeshore', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: '🌊 Lake', tagLevel: 'blue', meta: 'The shore of Baker Lake, where the community is strung along the water' },
    { name: 'Jessie Oonark Centre Area', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: '🎨 Arts', tagLevel: 'purple', meta: 'Hub of the community’s renowned carving and craft tradition' },
    { name: 'Thelon Country', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: '🏞️ Wilderness', tagLevel: 'safe', meta: 'Gateway to the remote Thelon Wildlife Sanctuary to the south' },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: '✈️ Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world' },
  ],

  attractions: [
    {
      name: 'Jessie Oonark Arts & Crafts Centre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'A community workspace for carving, printmaking, sewing and jewellery-making — the heart of Baker Lake’s famous Inuit art scene, known for raw, expressive stone sculpture.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Geographic Centre of Canada',
      icon: '📍', iconSrc: '/icons/attractions/ph_map-pin-thin.svg',
      text: 'A marker roughly 40 km from town locates the geographic centre of the country — a quirky bragging point for a place few Canadians ever visit.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Remote', level: 'caution' }],
    },
    {
      name: 'Thelon Wildlife Sanctuary',
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'One of the largest wildlife refuges in North America, created to protect muskoxen — reached by charter flight or guided wilderness trip from Baker Lake.',
      tags: [{ label: 'Wilderness', level: 'danger' }, { label: 'Guided only', level: 'caution' }],
    },
    {
      name: 'Kazan River',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'A Canadian Heritage River popular with experienced wilderness canoeists, flowing into Baker Lake from the south.',
      tags: [{ label: 'Multi-day', level: 'purple' }, { label: 'Experienced only', level: 'caution' }],
    },
    {
      name: 'Baker Lake Shoreline',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Walk the shore of the lake itself — open tundra views in every direction, far from any coastline.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Easy', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Tundra, Lake and Wild Rivers',
  outdoor: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Baker Lake', text: 'Lake trout and Arctic char in the lake and nearby rivers.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Kazan River Canoeing', dist: 'South of town', text: 'A multi-day wilderness paddling route for experienced canoeists.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Thelon Wildlife Sanctuary', dist: 'By charter flight', text: 'Muskox and barren-ground wildlife in a vast protected refuge.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tundra Walking', dist: 'Around town', text: 'Open land right at the edge of the community.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and hunting in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Caribou', area: 'Local markets', areaLevel: 'blue', text: 'A staple country food in this inland community.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Local catch', areaLevel: 'safe', text: 'Lake trout and Arctic char from Baker Lake.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Community Meals', area: 'Local events', areaLevel: 'gold', text: 'Shared country-food meals mark community gatherings.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Small Shops', area: 'Town centre', areaLevel: 'olive', text: 'A handful of stores for daily essentials.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', title: 'Waterfowl', area: 'Seasonal', areaLevel: 'purple', text: 'Traditional hunting of geese and ducks in season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Lake ice breaks up slowly as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Open water', text: 'The mildest season, with canoeing, fishing and long daylight.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before freeze-up and winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — April', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep inland cold, with good odds for the northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Baker Lake Airport (YBK) has scheduled flights connecting through Rankin Inlet. There is no road or rail link to the rest of Canada.',
      time: '≈1 h to Rankin Inlet',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Sealift barges reach Baker Lake via Chesterfield Inlet during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'Getting Around',
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel, hunting and visiting the land around town.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport and town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Baker+Lake+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Baker%20Lake%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Kazan River Trips',
      area: 'Guided',
      text: 'Wilderness outfitters arrange lodging as part of multi-day canoe trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Baker+Lake+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No Public Transit',
      text: 'Baker Lake has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle travel in this small inland community.',
      linkLabel: 'Hamlet of Baker Lake',
      linkUrl: 'https://www.bakerlake.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel and hunting.' },
          { icon: '🏍️', iconSrc: '/icons/attractions/ph_motorcycle-thin.svg', title: 'ATV', text: 'Widely used in summer around the community.' },
        ],
      },
    ],
    proTip: {
      label: 'Art tip:',
      text: 'Visit the Jessie Oonark Centre to see artists at work — Baker Lake carvings and prints are collected across Canada, and buying directly supports local artists.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Baker Lake has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Baker Lake / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', label: 'Art and carvings: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Lakeshore walking: free' },
      { icon: '📍', iconSrc: '/icons/attractions/ph_map-pin-thin.svg', label: 'Geographic centre marker: free to view' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Wilderness guides: 10–15%, often included in trip packages.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Baker Lake to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Inland Climate', text: 'Being inland, Baker Lake sees colder winters and less maritime moderation than coastal Nunavut communities.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Wilderness Trips Need Guides', text: 'The Kazan River and Thelon Wildlife Sanctuary are serious backcountry — go with an experienced outfitter, not independently.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — the same as Winnipeg.' },
    { icon: '📶', iconSrc: '/icons/attractions/ph_cell-signal-full-thin.svg', title: 'Limited Services', text: 'This is a small, remote community — book flights, tours and accommodation well ahead.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Baker Lake (Qamani’tuaq) is in the heart of Inuit Nunangat; Inuktitut is widely spoken alongside English.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Baker Lake Health Centre', 'Phone (867) 793-2816', 'Check current contact details with the Government of Nunavut'] },
  ],
};

export default BAKER_LAKE;
