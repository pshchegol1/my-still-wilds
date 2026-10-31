// Labrador West — данные страницы /city/labrador-west (Лабрадор-Уэст,
// НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Осторожно: Labrador West — региональное название для города-побратима
// Лабрадор-Сити и Уобуша (≈3 км друг от друга); в данных провинции
// отдельно числится ещё и "Labrador City" с похожим населением — похоже
// на дублирование из исходной вёрстки сайта (как было с "French River"
// у Кармакса). Эта страница — про весь регион Лабрадор-Уэст.
// Видео в бесплатных банках нет (Pexels по "Labrador City" выдаёт в
// основном собак породы лабрадор). В шапке фото с Wikimedia Commons —
// город с воздуха у озера, автор Quintin Soloviev, 16.06.2026, CC BY 4.0
// (GPS 52.941, -66.895 — совпадает с Лабрадор-Сити; подпись к файлу
// называет население 7412 и статус "2nd-largest population centre in
// Labrador" — совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: Лабрадор-Сити 7 412 (+2.7% к 2016, 7220);
// Уобуш 1 964 (+3% к 2016, 1906); вместе ≈9 376 (канадский федеральный
// экономический профиль региона).
// История: железная руда открыта в 1892, права приобретены Iron Ore
// Company of Canada (IOC) в 1936; добыча на Carol Lake началась в 1962.
// Соседний Wabush Mines (рудник Scully) открыт в 1965, руда вывозилась
// по Квебек-Норт-Шор-энд-Лабрадорской железной дороге.
// Часовой пояс — важное отличие от острова Ньюфаундленд: Лабрадор-Уэст
// на Atlantic Time (UTC-4/-3), а не на Newfoundland Time с получасовым
// сдвигом.
// Транспорт: собственного городского автобуса нет (в отличие от Happy
// Valley-Goose Bay, где он появился); пассажирский поезд Tshiuetin из
// Sept-Îles (Квебек) до Лабрадор-Сити/Уобуша — последнее пассажирское
// ж/д сообщение в провинции, расписание уточнять у оператора.
// Больница — Labrador West Health Centre (переименован, возможно,
// преемник Captain William Jackman Memorial Hospital — связь не
// подтвердили отдельным источником), 1700 Nichols-Adam Hwy.
// Лыжные клубы — Menihek Nordic Ski Club (≈3 км, беговые трассы,
// Koch Trail System 15 км), Smokey Mountain Ski Club (≈5 км, горные
// лыжи в горах Wapusakatta).
// Налог — HST 15%.

export const LABRADOR_WEST = {
  slug: 'labrador-west',
  name: 'Labrador West',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Iron Ore Country",
  accentLevel: 'danger',
  heroIcon: '⛏️',
  heroImage: '/Cities/LabradorWest/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.9400, lon: -66.9108 },
  subtitle: "Twin Mining Towns on the Labrador Trough",
  description:
    "Labrador City and its smaller neighbour Wabush sit on the vast Labrador Trough iron ore deposits that built them in the 1960s. Together they form Labrador West, a self-sufficient mining region of lakes and boreal forest, reached by a long highway or the province's last passenger train — and a world away from the rest of Newfoundland & Labrador in climate, time zone and feel.",

  actions: [
    { label: 'Explore Labrador West', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.4K combined (2021)' },
    { label: 'Known For', value: 'Iron Ore Mining' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Sept-Îles, QC', value: '≈5–6 h by car' },
    { label: 'Road Access', value: 'Via Québec Route 389' },
  ],

  badges: ['Iron Ore Country', 'Carol Lake', 'Menihek Trails'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '7,412', label: 'People in Labrador City in the 2021 census — the 2nd-largest population centre in Labrador', level: 'danger' },
    { value: '1,964', label: 'People in neighbouring Wabush — together, about 9,376 across Labrador West', level: 'purple' },
    { value: '1962', label: 'Year the Iron Ore Company of Canada began production at Carol Lake', level: 'gold' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Labrador City', icon: '🏙️', tag: '🏙️ Larger Town', tagLevel: 'gold', meta: 'The bigger of the twin towns, with most shops and services' },
    { name: 'Wabush', icon: '🏘️', tag: '🏘️ Neighbour', tagLevel: 'purple', meta: 'A smaller town about 3 km away, with its own airport' },
    { name: 'Carol Lake', icon: '⛏️', tag: '⛏️ Mine Site', tagLevel: 'danger', meta: 'The massive open-pit iron ore operation that built the region' },
    { name: 'Menihek Lakes', icon: '🏞️', tag: '🏞️ Lakes', tagLevel: 'blue', meta: 'A chain of lakes around the towns, used for recreation' },
    { name: 'Smokey Mountain / Wapusakatta', icon: '⛷️', tag: '⛷️ Ski', tagLevel: 'safe', meta: 'The hills just outside town used for downhill and Nordic skiing' },
  ],

  attractions: [
    {
      name: 'Carol Lake Mine',
      icon: '⛏️',
      text: 'The Iron Ore Company of Canada’s massive open-pit operation, in production since 1962 — the economic engine behind Labrador West. Viewable from designated lookouts; not open for casual visits.',
      tags: [{ label: 'Landmark', level: 'danger' }, { label: 'View only', level: 'caution' }],
    },
    {
      name: 'Menihek Nordic Ski Club',
      icon: '🎿',
      text: 'About 3 km from Labrador City, with roughly 16 km of groomed cross-country trails, including the Koch Trail System — among the best Nordic skiing in Atlantic Canada.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Must do', level: 'gold' }],
    },
    {
      name: 'Smokey Mountain Ski Club',
      icon: '⛷️',
      text: 'A downhill ski area about 5 km north of Labrador City, in the Wapusakatta Mountains.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Family', level: 'purple' }],
    },
    {
      name: 'Jean Lake Walking Trail',
      icon: '🥾',
      text: 'A roughly 5 km trail circling Jean Lake, accessible from Grenfell Drive — an easy summer walk close to town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Easy', level: 'blue' }],
    },
    {
      name: 'Tshiuetin Railway',
      icon: '🚆',
      text: "Newfoundland & Labrador's last scheduled passenger train runs from Sept-Îles, Québec, to Labrador City and Wabush — a scenic, remote rail journey through the Labrador Trough.",
      tags: [{ label: 'Unique', level: 'purple' }, { label: 'Check schedule', level: 'caution' }],
    },
  ],

  outdoorHeading: 'Boreal Lakes and Mining-Country Trails',
  outdoor: [
    { icon: '🎿', name: 'Nordic Skiing', dist: 'Menihek Nordic Ski Club', text: 'Some of the best groomed cross-country trails in Atlantic Canada.' },
    { icon: '⛷️', name: 'Downhill Skiing', dist: 'Smokey Mountain', text: 'A local ski hill in the Wapusakatta Mountains.' },
    { icon: '🥾', name: 'Jean Lake Trail', dist: 'Near town', text: 'An easy loop walk around a nearby lake.' },
    { icon: '🎣', name: 'Fishing', dist: 'Menihek Lakes', text: 'Lake trout and other species in the surrounding lake chain.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'A major winter activity across the Labrador Trough.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights, especially in winter.' },
  ],

  food: [
    { icon: '🍽️', title: 'Restaurants', area: 'Labrador City & Wabush', areaLevel: 'gold', text: 'A modest but solid dining scene serving both towns.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou and other northern specialties where available.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Labrador City', areaLevel: 'blue', text: 'Well-stocked for the region, though prices can run higher.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops serving the mining community.' },
    { icon: '🐟', title: 'Lake Fish', area: 'Local catch', areaLevel: 'safe', text: 'Lake trout from the Menihek Lakes.' },
    { icon: '🍻', title: 'Pubs', area: 'Labrador City', areaLevel: 'olive', text: 'Local bars popular with mine workers and residents.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Thaw', text: 'Snow retreats slowly from the lakes and hills.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'Warm days for lake fishing and hiking around the Menihek chain.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright boreal colour before the long winter sets in.' },
    { icon: '❄️', name: 'Winter', months: 'November — April', level: 'blue', rating: 5, note: 'Ski country', text: 'Deep, reliable snow — a serious draw for Nordic and downhill skiers.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Reached via Québec Route 389 from Baie-Comeau or Manic-Cinq — a long, remote drive with limited services, not connected to the rest of the island of Newfoundland by road.',
      time: '≈5–6 h from Sept-Îles, QC',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'The Tshiuetin Railway runs from Sept-Îles, Québec, to Labrador City and Wabush — the province’s last scheduled passenger rail service.',
      time: 'Check Tshiuetin schedule',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Wabush Airport (YWK) has scheduled flights, mainly connecting through Québec and other regional hubs.',
      time: 'Via regional connections',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'No direct scheduled bus service connects Labrador West to southern Canada; most travellers combine bus, train or flights via Québec.',
      time: 'Check connections',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Labrador City',
      area: 'Main town',
      text: 'The larger town, with most hotels and services.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Labrador%20City%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Wabush',
      area: '≈3 km away',
      text: 'A smaller selection of hotels near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wabush+Newfoundland', level: 'blue' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Near Smokey Mountain',
      area: 'Ski season',
      text: 'Convenient for winter sports visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No Public Transit',
      text: 'Neither Labrador City nor Wabush runs a public bus system — a car or taxi is the way to get around, with roughly 3 km between the two towns.',
      linkLabel: 'Labrador City',
      linkUrl: 'https://www.labradorcity.com/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Each town centre is small and walkable.' },
          { icon: '🚗', title: 'Car', text: 'Needed to get between Labrador City and Wabush, and out to the lakes.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in both towns.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Widely used for winter travel on regional trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Québec Route 389 to Labrador West is long and remote — fuel up, check weather, and carry supplies before setting out.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services across the province, including Labrador West.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Labrador West / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec (across the border)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎿', label: 'Ski passes: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🥾', label: 'Jean Lake Trail: free' },
      { icon: '🏞️', label: 'Menihek Lakes shoreline: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Ski and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'Different Time Zone', text: "Unlike the island of Newfoundland, Labrador West runs on Atlantic Time (UTC-4 winter, UTC-3 summer) — no half-hour offset here." },
    { icon: '❄️', title: 'Serious Winters', text: 'Labrador West has some of the coldest, snowiest winters in the province — dress for it, and expect a long ski season.' },
    { icon: '🛣️', title: 'Remote Roads', text: 'Québec Route 389 to the region is long with limited services — plan fuel stops and check road and weather conditions.' },
    { icon: '⛏️', title: 'Mining Economy', text: "The local economy follows global iron ore prices, so employment and activity can shift with the market — part of daily conversation here." },
    { icon: '🦌', title: 'Wildlife on the Road', text: 'Moose and caribou are common on regional highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '🚗', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no public bus between or within the towns.' },
    { icon: '🪶', title: 'Whose Land', text: "Labrador West is within Nitassinan, the traditional territory of the Innu, and near Inuit and NunatuKavut communities of Labrador." },
    { icon: '🏥', title: 'Medical Care', lines: ['Labrador West Health Centre', '1700 Nichols-Adam Hwy, Labrador City', 'Call 911 · 811 for advice'] },
  ],
};

export default LABRADOR_WEST;
