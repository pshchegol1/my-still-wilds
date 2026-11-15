// Labrador City — данные страницы /city/labrador-city (Лабрадор-Сити,
// НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Примечание: отдельно на сайте уже есть страница Labrador West —
// региональное название для города-побратима Лабрадор-Сити + Уобуш
// (см. labrador-west.js). Эта страница фокусируется именно на самом
// Лабрадор-Сити: карьер Carol Lake, базилика, планировка города — без
// повтора общего регионального обзора. В данных провинции обе карточки
// числятся отдельно (похоже на дублирование из исходной вёрстки), но
// раз обе запрошены — делаем их содержательно разными.
// Видео в бесплатных банках нет (Pexels по "Labrador City" выдаёт собак
// породы лабрадор). В шапке фото с Wikimedia Commons — открытый
// железорудный карьер рядом с озером, автор Neil Carey, сентябрь 2003,
// CC BY-SA 2.0 (GPS 52.908, -66.909 — рядом с Лабрадор-Сити/Carol Lake).
// Лицензия требует автора.
// Население — перепись 2021: 7 412 (+2.7% к 2016, 7220); второй по
// величине населённый пункт Лабрадора после Хэппи-Вэлли-Гус-Бей.
// История: железная руда открыта в 1892, права — у Iron Ore Company of
// Canada (IOC) с 1936; плановый посёлок у озера Carol Lake строился с
// 1959, добыча началась в 1962. Источники расходятся в дате получения
// статуса города (1961 по одним данным, 1980 по другим) — не называем
// единую дату.
// Базилика Our Lady of Perpetual Help — местная католическая базилика,
// заметный ориентир города.
// Остальные практические данные (больница, налог, транспорт, часовой
// пояс) совпадают с общими для региона Лабрадор-Уэст.

export const LABRADOR_CITY = {
  slug: 'labrador-city',
  name: 'Labrador City',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Built on Iron Ore",
  accentLevel: 'danger',
  heroIcon: '⛏️',
  heroImage: '/Cities/LabradorCity/hero.jpg',
  heroCredit: 'Photo: Neil Carey / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.9403, lon: -66.9108 },
  subtitle: "A Planned Town Beside the Carol Lake Mine",
  description:
    "Laid out from scratch in the late 1950s on the shore of Carol Lake, Labrador City was built entirely around the Iron Ore Company of Canada's massive open-pit mine. It's the larger of the twin towns that make up Labrador West, with a compact planned downtown, a notable Catholic basilica, and the vast mine pit as a constant backdrop to daily life.",

  actions: [
    { label: 'Explore Labrador City', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈7.4K (2021)' },
    { label: 'Known For', value: 'Carol Lake Iron Mine' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Wabush', value: '≈3 km' },
    { label: 'To Sept-Îles, QC', value: '≈5–6 h by car' },
  ],

  badges: ['Carol Lake Mine', 'Planned Town', 'IOC Company Town'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '7,412', label: 'People in Labrador City in the 2021 census — up 2.7% in five years', level: 'danger' },
    { value: '1962', label: 'Year the Iron Ore Company of Canada began production at Carol Lake', level: 'gold' },
    { value: '1959', label: 'Year construction began on the planned townsite by Carol Lake', level: 'purple' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'The compact, planned town centre built for mine workers' },
    { name: 'Carol Lake Mine', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: 'Mine', tagLevel: 'danger', meta: "The vast open-pit operation that founded the town" },
    { name: 'Residential Grid', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Housing', tagLevel: 'olive', meta: 'Mid-century planned streets built for IOC employees and families' },
    { name: 'Jean Lake Area', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Lake', tagLevel: 'blue', meta: 'A nearby lake with an easy walking trail' },
    { name: 'Route 500 Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'safe', meta: 'The road linking Labrador City to Wabush and Québec' },
  ],

  attractions: [
    {
      name: 'Carol Lake Mine',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'The Iron Ore Company of Canada’s enormous open-pit mine, in production since 1962, sits right beside the town and lake it’s named for — viewable from designated lookouts.',
      tags: [{ label: 'Landmark', level: 'danger' }, { label: 'View only', level: 'caution' }],
    },
    {
      name: 'Basilica of Our Lady of Perpetual Help',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: "A notable Catholic basilica in town, serving as a focal point for the community since the town's early years.",
      tags: [{ label: 'Landmark', level: 'purple' }, { label: 'Architecture', level: 'blue' }],
    },
    {
      name: 'Jean Lake Walking Trail',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'An easy roughly 5 km loop trail around Jean Lake, reached from Grenfell Drive — a quick escape into the boreal forest.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Easy', level: 'blue' }],
    },
    {
      name: 'Menihek Nordic Ski Club',
      icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'About 3 km from downtown, with roughly 16 km of groomed cross-country trails — some of the best Nordic skiing in Atlantic Canada.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Must do', level: 'gold' }],
    },
    {
      name: 'Downtown Labrador City',
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: "Shops, services and the town's civic buildings, laid out as a single planned community in the late 1950s.",
      tags: [{ label: 'Walkable', level: 'safe' }, { label: 'History', level: 'olive' }],
    },
  ],

  outdoorHeading: 'Lakes, Forest and Mining-Country Trails',
  outdoor: [
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Nordic Skiing', dist: 'Menihek Nordic Ski Club', text: 'Groomed cross-country trails right outside town.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Downhill Skiing', dist: 'Smokey Mountain, ≈5 km', text: 'Local ski hill in the Wapusakatta Mountains.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Jean Lake Trail', dist: 'Near downtown', text: 'An easy walking loop around a nearby lake.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Menihek Lakes chain', text: 'Lake trout and other species nearby.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Regional trails', text: 'A major winter activity across the Labrador Trough.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights, especially in winter.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Downtown', areaLevel: 'gold', text: "The larger dining scene of the twin towns." },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou and other northern specialties where available.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Downtown', areaLevel: 'blue', text: 'The main shopping hub for the Labrador West region.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops serving the mining community.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Local catch', areaLevel: 'safe', text: 'Lake trout from the Menihek Lakes.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'olive', text: 'Local bars popular with mine workers and residents.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Thaw', text: 'Snow retreats slowly from Carol Lake and the surrounding hills.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'Warm days for lake fishing and hiking around Jean Lake.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright boreal colour before the long winter sets in.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — April', level: 'blue', rating: 5, note: 'Ski country', text: 'Deep, reliable snow — a serious draw for Nordic and downhill skiers.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Reached via Québec Route 389 from Baie-Comeau or Manic-Cinq — a long, remote drive not connected to the rest of the island of Newfoundland by road.',
      time: '≈5–6 h from Sept-Îles, QC',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'The Tshiuetin Railway runs from Sept-Îles, Québec, to Labrador City — the province’s last scheduled passenger rail service.',
      time: 'Check Tshiuetin schedule',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Wabush Airport (YWK), about 3 km away, has scheduled flights connecting mainly through Québec.',
      time: '≈3 km from downtown',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'No direct scheduled bus service connects Labrador City to southern Canada; most travellers combine bus, train or flights via Québec.',
      time: 'Check connections',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Most of the region’s hotels and motels.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Labrador%20City%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Near Menihek Trails',
      area: 'Ski season',
      text: 'Convenient for Nordic skiing visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Wabush',
      area: '≈3 km away',
      text: 'The neighbouring town, with its own small selection of hotels near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wabush+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No Public Transit',
      text: 'Labrador City has no public bus system — a car or taxi is the way to get around, with Wabush about 3 km away.',
      linkLabel: 'Labrador City',
      linkUrl: 'https://www.labradorcity.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is small and walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed to reach Wabush, the mine lookouts and the lakes.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in town.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Widely used for winter travel on regional trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Québec Route 389 to Labrador City is long and remote — fuel up, check weather, and carry supplies before setting out.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services, including Labrador City.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Labrador City / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec (across the border)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Ski passes: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', label: 'Jean Lake Trail: free' },
      { icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', label: 'Viewing the basilica: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Ski and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Different Time Zone', text: "Unlike the island of Newfoundland, Labrador City runs on Atlantic Time (UTC-4 winter, UTC-3 summer) — no half-hour offset here." },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Serious Winters', text: 'Labrador City has some of the coldest, snowiest winters in the province — dress for it, and expect a long ski season.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Québec Route 389 to town is long with limited services — plan fuel stops and check road and weather conditions.' },
    { icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', title: 'Mining Economy', text: "The local economy follows global iron ore prices, so employment and activity can shift with the market — part of daily conversation here." },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Moose and caribou are common on regional highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no public bus here or to neighbouring Wabush.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: "Labrador City is within Nitassinan, the traditional territory of the Innu, and near Inuit and NunatuKavut communities of Labrador." },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Labrador West Health Centre', '1700 Nichols-Adam Hwy', 'Call 911 · 811 for advice'] },
  ],
};

export default LABRADOR_CITY;
