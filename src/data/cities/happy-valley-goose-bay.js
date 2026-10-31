// Happy Valley-Goose Bay — данные страницы /city/happy-valley-goose-bay
// (Хэппи-Вэлли-Гус-Бей, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Видео в бесплатных банках нет (Pexels — безымянные прибрежные посёлки
// и гусь на снегу). В шапке фото с Wikimedia Commons — вид из окна
// самолёта на весь город, реку Черчилл и авиабазу CFB Goose Bay, автор
// Shawn from Airdrie, май 2008, CC BY-SA 2.0. Снимок старый, но даёт
// редкий полный обзор геометрии города и реки разом; GPS в EXIF нет,
// но содержимое (расположение ВПП, изгиб реки) однозначно совпадает с
// известной планировкой Гус-Бей. Лицензия требует автора.
// Население — перепись 2021: 8 040 (-0.9% к 2016, 8109); является
// крупнейшим населённым пунктом Лабрадора в целом.
// История: аэродром построен Королевскими ВВС Канады в 1941–43,
// переименован в CFB Goose Bay в 1968. США свернули стратегические
// операции в 1976, полностью ушли в 1991. База стала основным полигоном
// низковысотной тактической подготовки НАТО (сходство рельефа с
// Советским Союзом + близость к Европе); последние постоянные
// контингенты (Германия и Италия) не продлили аренду после начала
// 2026 — по старым источникам это произошло в 2006 году, NATO training
// в сокращённом виде могло продолжаться позже — не утверждаем точный
// статус на 2026 год.
// Больница — Labrador Health Centre, 227 Hamilton River Rd (строго по
// официальному адресу Eastern Health/NL Health Services), приёмное
// отделение заявлено 24/7; были перебои с телефонной связью в прошлом
// — предупреждение в тексте.
// Транспорт: 23 июня 2025 года запущен первый в истории Лабрадора
// муниципальный автобус (электрический, 18 мест, бесплатный в первую
// неделю), финансирование — Rural Transit Solutions Fund ($672 тыс.
// федеральных + $100 тыс. провинциальных + $68 тыс. городских). В
// августе 2025 фиксированный маршрут заменён на транспорт по вызову
// (on-demand) — пишем про обе модели, без устаревшей информации о
// фиксированном маршруте как актуальной.
// Налог — HST 15%.
// Из общих знаний: река Черчилл (Hamilton/Grand River), статус
// крупнейшего города Лабрадора и центра региона, кампус Memorial
// University/College of the North Atlantic, время в пути.

export const HAPPY_VALLEY_GOOSE_BAY = {
  slug: 'happy-valley-goose-bay',
  name: 'Happy Valley-Goose Bay',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Capital of Labrador",
  accentLevel: 'purple',
  heroIcon: '🛩️',
  heroImage: '/Cities/HappyValleyGooseBay/hero.jpg',
  heroCredit: 'Photo: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.3019, lon: -60.3261 },
  subtitle: "Labrador's Largest Town on the Churchill River",
  description:
    "Where the Churchill River meets Lake Melville, Happy Valley-Goose Bay grew up around a huge wartime airfield that later became one of NATO's key low-level flight training bases. Today it's Labrador's largest community and service centre — a gateway to the vast boreal interior, with a brand-new electric transit bus marking its first-ever public transportation.",

  actions: [
    { label: 'Explore Happy Valley-Goose Bay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈8K (2021)' },
    { label: 'Known For', value: 'CFB Goose Bay · NATO Training' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Labrador City', value: '≈9–10 h by car (via QC)' },
    { label: "To St. John's", value: '≈2 h by plane' },
  ],

  badges: ['CFB Goose Bay', 'Churchill River', "Labrador's Capital"],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '8,040', label: "People in the town in the 2021 census — Labrador's largest community", level: 'purple' },
    { value: '1941', label: 'Year construction began on the airfield that became CFB Goose Bay', level: 'gold' },
    { value: 'June 2025', label: "Launch of Labrador's first-ever public transit bus — a free, electric service", level: 'blue' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Goose Bay', icon: '🛩️', tag: '🛩️ Airfield', tagLevel: 'purple', meta: 'The original airbase community, still home to CFB Goose Bay' },
    { name: 'Happy Valley', icon: '🏘️', tag: '🏘️ Residential', tagLevel: 'olive', meta: 'The neighbouring residential community, merged into one town' },
    { name: 'Riverfront', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Along the Churchill River as it widens toward Lake Melville' },
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, services and the hub for central and coastal Labrador' },
    { name: 'Campus Area', icon: '🎓', tag: '🎓 Education', tagLevel: 'safe', meta: 'Memorial University’s Labrador Campus and the College of the North Atlantic' },
  ],

  attractions: [
    {
      name: 'CFB Goose Bay',
      icon: '🛩️',
      text: 'Built in 1941–43, this huge airfield became one of NATO’s main low-level tactical flight training bases during the Cold War, hosting squadrons from several European air forces. Not open for casual visits, but a defining feature of the town.',
      tags: [{ label: 'Landmark', level: 'purple' }, { label: 'View only', level: 'caution' }],
    },
    {
      name: 'Churchill River & Lake Melville',
      icon: '🌊',
      text: 'The town sits where the Churchill River widens toward Lake Melville — a striking setting for riverside walks and boat trips.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Labrador Interpretation Centre',
      icon: '🏛️',
      text: "In nearby North West River, exhibits on Labrador's Innu, Inuit and settler history. Check hours and seasonal access.",
      tags: [{ label: 'Culture', level: 'gold' }, { label: 'Day trip', level: 'purple' }],
    },
    {
      name: 'Lawrence O’Brien Arts Centre',
      icon: '🎭',
      text: 'The town’s performing arts venue, hosting concerts, theatre and community events.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Evenings', level: 'blue' }],
    },
    {
      name: 'Boreal Wilderness Access',
      icon: '🌲',
      text: 'As the hub of central Labrador, the town is a launch point for fishing camps, hunting trips and vast stretches of boreal forest and tundra further inland.',
      tags: [{ label: 'Remote', level: 'danger' }, { label: 'Guided', level: 'caution' }],
    },
  ],

  outdoorHeading: 'River, Forest and the Labrador Interior',
  outdoor: [
    { icon: '🎣', name: 'Fishing', dist: 'Churchill River & area', text: 'Salmon and trout fishing on the river and nearby lakes.' },
    { icon: '🚣', name: 'Boating', dist: 'Lake Melville', text: 'Boat trips on the wide tidal estuary toward the coast.' },
    { icon: '🥾', name: 'Trails', dist: 'Around town', text: 'Walking trails through boreal forest near the community.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'A major way of travelling and exploring in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights, especially in winter.' },
    { icon: '🦌', name: 'Caribou Country', dist: 'Interior Labrador', text: 'Vast wilderness further inland, home to caribou herds.' },
  ],

  food: [
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou and other country food specialties.' },
    { icon: '🐟', title: 'River Fish', area: 'Local catch', areaLevel: 'blue', text: 'Salmon and trout from the Churchill River.' },
    { icon: '🍽️', title: 'Restaurants', area: 'Downtown', areaLevel: 'gold', text: 'A modest dining scene serving the regional hub.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops in the town centre.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Downtown', areaLevel: 'olive', text: 'The main supply point for central and coastal Labrador.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Partridgeberries and bakeapples from the surrounding land.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'The Churchill River breaks up and days lengthen fast.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Open season', text: 'Warm days for fishing, boating and visiting the Labrador Interpretation Centre.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright boreal colour before the long winter.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Deep snow', text: 'Cold and snowy, with snowmobiling and good aurora viewing.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: "Goose Bay Airport, on the CFB Goose Bay site, has scheduled flights to St. John's, Halifax and other hubs — the main way in and out of central Labrador.",
      time: "≈2 h to St. John's",
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Connected to Labrador West and Québec by the long Trans-Labrador Highway — a serious road trip with limited services along the way.',
      time: '≈9–10 h to Labrador City',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Coastal ferries connect Happy Valley-Goose Bay to communities along the Labrador coast in the ice-free season.',
      time: 'Seasonal, check schedule',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'No scheduled intercity coach connects Happy Valley-Goose Bay to the rest of the province; most long-distance travel is by air.',
      time: 'Limited options',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and inns near the town centre and airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Happy+Valley-Goose+Bay', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Happy%20Valley-Goose%20Bay%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🌊',
      title: 'Riverfront',
      area: 'Near the Churchill River',
      text: 'A few properties with river views.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Happy+Valley-Goose+Bay', level: 'blue' },
      ],
    },
    {
      icon: '🏛️',
      title: 'North West River',
      area: 'Day trip away',
      text: 'A smaller, historic community near the Labrador Interpretation Centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+West+River+Labrador', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Labrador’s First Public Transit',
      text: 'Happy Valley-Goose Bay launched Labrador’s first-ever public transit bus on June 23, 2025 — a free, electric, 18-seat accessible vehicle. The service switched from a fixed route to an on-demand model from August 2025; book rides through the town’s app.',
      linkLabel: 'Town of Happy Valley-Goose Bay',
      linkUrl: 'https://townhvgb.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares were free during the first week of launch in June 2025; check the town’s current on-demand transit app for pricing and booking.',
        fareBox: {
          label: 'Getting around',
          lines: ['On-demand bus: book via app', 'Taxis: available locally', 'Snowmobile: common in winter', 'Car: useful for day trips'],
        },
        linkLabel: 'Transit updates',
        linkUrl: 'https://townhvgb.com/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is walkable.' },
          { icon: '🚌', title: 'On-Demand Bus', text: 'Book a ride through the town’s transit app.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in town.' },
          { icon: '🚗', title: 'Car', text: 'Useful for North West River and day trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Transit tip:',
      text: 'This on-demand bus service is brand new — download the town’s transit app ahead of time and confirm current hours before relying on it.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services, including Happy Valley-Goose Bay.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Happy Valley-Goose Bay / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎭', label: 'Arts centre tickets: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌊', label: 'Riverfront walking: free' },
      { icon: '🚌', label: 'Transit bus: free in launch week (check current fares)' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing and wilderness guides: 10–15%.',
  },

  practical: [
    { icon: '✈️', title: 'Plan Around Flights', text: "Road access to the rest of the province is a very long drive — most visitors fly in via St. John's or Halifax." },
    { icon: '🛩️', title: 'Military Town', text: 'CFB Goose Bay shapes daily life here — respect posted restrictions around the base.' },
    { icon: '❄️', title: 'Serious Winters', text: 'Winters are long and cold, with strong winds off the river and lake — dress in serious layers.' },
    { icon: '🦌', title: 'Wildlife Caution', text: 'Moose and caribou are common on regional roads — drive cautiously, especially at dawn and dusk.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — the same as Labrador West, different from the island of Newfoundland.' },
    { icon: '🚌', title: 'New Transit', text: "The town's on-demand bus service launched in 2025 — check current hours and app availability before relying on it." },
    { icon: '🪶', title: 'Whose Land', text: "Happy Valley-Goose Bay is within Nitassinan, the traditional territory of the Innu, and close to NunatuKavut and Inuit communities of Labrador." },
    { icon: '🏥', title: 'Medical Care', lines: ['Labrador Health Centre', '227 Hamilton River Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default HAPPY_VALLEY_GOOSE_BAY;
