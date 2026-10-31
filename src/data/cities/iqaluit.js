// Iqaluit — данные страницы /city/iqaluit (Икалуит, НУНАВУТ)
// Видео Икалуита в бесплатных банках нет — проверила похожий клип
// "aerial view of a small community near the iceberg", на деле Гренландия
// (Pexels), не брала. В шапке фото с Wikimedia Commons — панорама города
// летом с разноцветными домами на склоне, автор Quintin Soloviev,
// 03.07.2024, CC BY 4.0 (GPS 63.744, -68.506 — центр Икалуита). Подпись
// к файлу называет Икалуит "the northernmost city in Canada" — это верно
// только в узком смысле (единственный населённый пункт со статусом
// "city" в Нунавуте, город получил этот статус в 2001); поселения
// севернее (Resolute, Grise Fiord, Pond Inlet и др.) не имеют статуса
// города — уточняем формулировку, не повторяем голое "northernmost".
// Лицензия требует автора.
// Население — перепись 2021: город 7 429 (-4.0% к 2016, 7740) — около
// 20% всего населения Нунавута (36 858 в 2021).
// Транспорт — Iqaluit Transit, частный оператор по городской лицензии
// (Jacinto Marques), один маршрут из 14 остановок от аэропорта до Apex;
// тариф $5 наличными/картой; сведения о дате запуска в 2026 году
// расходятся по источникам — не называем точную дату.
// Больница — Qikiqtani General Hospital, приёмное отделение заявлено
// 24/7 (gov.nu.ca); точный адрес из вторичных источников — указываем
// с оговоркой.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог, связывающих Икалуит с остальной Канадой, нет — добраться можно
// только самолётом или (летом) морем; это общеизвестный факт о Нунавуте.
// Из общих знаний: собор St. Jude's (сгорел в 2005, снесён в 2006,
// перестроен и открыт в 2012 — проверено отдельным поиском), парк Sylvia
// Grinnell в черте города, район Apex в ~5 км, музей Nunatta
// Sunakkutaangit, статус столицы с 1999 года, время в пути.

export const IQALUIT = {
  slug: 'iqaluit',
  name: 'Iqaluit',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Capital on Frobisher Bay',
  accentLevel: 'blue',
  heroIcon: '🧊',
  heroImage: '/Cities/Iqaluit/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 63.7467, lon: -68.5170 },
  subtitle: 'Canada’s Arctic Capital',
  description:
    'Set on the rocky shore of Frobisher Bay, Iqaluit is Canada’s smallest and only Arctic capital — the sole incorporated city in Nunavut, and reachable only by air or, briefly in summer, by sea. Colourful houses climb the hillside above the bay, Inuit art and culture are everywhere, and the midnight sun and the aurora mark the turning of its extreme seasons.',

  actions: [
    { label: 'Explore Iqaluit', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈7.4K (2021)' },
    { label: 'Share of Nunavut', value: '≈20% of the territory' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'Road Access', value: 'None — fly or sail in' },
    { label: 'To Ottawa', value: '≈3 h by plane' },
  ],

  badges: ['Capital of Nunavut', 'No Road Access', 'Frobisher Bay'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '7,429', label: 'People in Iqaluit in the 2021 census — about 20% of all Nunavummiut', level: 'blue' },
    { value: '2001', label: 'Year Iqaluit was chartered as a city — the only one in Nunavut', level: 'purple' },
    { value: '0', label: 'Highways connecting Iqaluit to the rest of Canada — it’s fly-in or sail-in only', level: 'danger' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Government offices, shops and the colourful hillside houses' },
    { name: 'Apex', icon: '🏘️', tag: '🏘️ Historic', tagLevel: 'blue', meta: 'An older community about 5 km away, reached by road, taxi or trail' },
    { name: 'Waterfront', icon: '🚤', tag: '🚤 Bay', tagLevel: 'purple', meta: 'Boats, sealift barges and sweeping views over Frobisher Bay' },
    { name: 'Road to Nowhere', icon: '🛣️', tag: '🛣️ Local Icon', tagLevel: 'olive', meta: 'A local road leading out onto the tundra, named half in jest' },
    { name: 'Sylvia Grinnell Park', icon: '🏞️', tag: '🏞️ Park', tagLevel: 'safe', meta: 'Tundra park and river right at the edge of the city' },
  ],

  attractions: [
    {
      name: 'St. Jude’s Anglican Cathedral',
      icon: '⛪',
      text: 'Known as the “igloo church” for its rounded shape. The original 1972 building burned in a 2005 arson fire; it was rebuilt with fire-resistant materials and reopened in 2012.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Free to view', level: 'safe' }],
    },
    {
      name: 'Nunatta Sunakkutaangit Museum',
      icon: '🏛️',
      text: 'A small museum in a former Hudson’s Bay Company building, with Inuit clothing, tools and art, including a full-size sealskin canoe.',
      tags: [{ label: 'Indoor', level: 'purple' }, { label: 'Culture', level: 'gold' }],
    },
    {
      name: 'Sylvia Grinnell Territorial Park',
      icon: '🏞️',
      text: 'Right at the city limits: tundra trails, the Sylvia Grinnell River and good spots for picnics and fishing.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
    },
    {
      name: 'Apex',
      icon: '🚶',
      text: 'A quieter, older community about 5 km from downtown — reach it by taxi, local road, or the roughly 40-minute walking trail.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Walkable', level: 'danger' }],
    },
    {
      name: 'Inuit Art & Carving',
      icon: '🎨',
      text: 'Galleries and shops around the city sell soapstone carvings, prints and other Inuit art — look for work by local and regional artists.',
      tags: [{ label: 'Shopping', level: 'purple' }, { label: 'Culture', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Tundra, Bay and Arctic Sky',
  outdoor: [
    { icon: '🥾', name: 'Tundra Hiking', dist: 'Sylvia Grinnell Park', text: 'Trails across open tundra right by the city.' },
    { icon: '🎣', name: 'Fishing', dist: 'Sylvia Grinnell River', text: 'Arctic char fishing in season.' },
    { icon: '🛶', name: 'Boating', dist: 'Frobisher Bay', text: 'Local operators run wildlife and sightseeing trips in open-water months.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around the city', text: 'Northern lights on clear nights outside the brief summer season.' },
    { icon: '☀️', name: 'Midnight Sun', dist: 'Midsummer', text: 'Near round-the-clock daylight in June and July.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and exploring in winter.' },
  ],

  food: [
    { icon: '🦭', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Arctic char, caribou and seal, traditional Inuit foods.' },
    { icon: '🍽️', title: 'Restaurants', area: 'Downtown', areaLevel: 'gold', text: 'A small but varied dining scene for a northern capital.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops serving residents and visitors.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Downtown', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', title: 'Arctic Char', area: 'Local menus', areaLevel: 'safe', text: 'A signature northern fish, fresh or smoked.' },
    { icon: '🍲', title: 'Community Feasts', area: 'Seasonal events', areaLevel: 'olive', text: 'Country-food feasts mark festivals and celebrations.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Snow and ice retreat slowly; days lengthen fast toward summer.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'The mildest, busiest season, with near-endless daylight.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before winter sets in hard.' },
    { icon: '❄️', name: 'Winter', months: 'October — April', level: 'blue', rating: 3, note: 'Long & dark', text: 'Deep cold and short days, but striking northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Iqaluit Airport (YFB) is the only practical way in — flights connect to Ottawa, Montréal and other Nunavut communities. There is no road or rail connection to the rest of Canada.',
      time: '≈3 h from Ottawa',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods and some passengers during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕',
      title: 'Getting Around',
      text: 'Taxis are a common way to get around; a small private bus service also covers a single downtown-to-Apex route.',
      time: 'Local only',
    },
    {
      icon: '🛷',
      title: 'By Snowmobile',
      text: 'Snowmobiles are widely used locally for winter travel on the land, including to Apex and beyond.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near government offices and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Iqaluit+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Iqaluit%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Apex',
      area: '≈5 km away',
      text: 'A quieter, more traditional setting near the bay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Apex+Iqaluit', level: 'blue' },
      ],
    },
    {
      icon: '🏞️',
      title: 'Near Sylvia Grinnell Park',
      area: 'City edge',
      text: 'Limited camping options close to the tundra and river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Iqaluit+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐',
      title: 'Iqaluit Transit',
      text: 'A privately run shuttle service operates under a city licence, covering a single 14-stop route between the airport and Apex. City council has run and stopped bus service before, so check current status before relying on it.',
      linkLabel: 'City of Iqaluit',
      linkUrl: 'https://iqaluit.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Reported base fare and payment options — confirm current details with the operator before your trip.',
        fareBox: {
          label: 'Getting around',
          lines: ['Shuttle bus: $5 (cash, card, smart card)', 'Taxis: widely used', 'Snowmobile: common in winter', 'Walking: downtown is compact'],
        },
        linkLabel: 'City of Iqaluit',
        linkUrl: 'https://iqaluit.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is walkable, though hilly and often icy.' },
          { icon: '🚕', title: 'Taxis', text: 'The most reliable way to get around town.' },
          { icon: '🚐', title: 'Shuttle', text: 'Single route, airport to Apex.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Flight tip:',
      text: 'Weather can delay or cancel flights with little warning — build slack into your travel plans, especially in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Nunavut has no territorial sales tax — only the federal 5% GST applies. Prices themselves, however, run high because nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Iqaluit / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🎨', label: 'Art and carvings: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏞️', label: 'Sylvia Grinnell Park: free' },
      { icon: '⛪', label: 'Viewing St. Jude’s Cathedral: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '✈️', title: 'Fly-In Only', text: 'No roads connect Iqaluit to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', title: 'Extreme Winters', text: 'Winters are long, dark and very cold — dress in serious layers and respect weather warnings.' },
    { icon: '☀️', title: 'Midnight Sun', text: 'In midsummer the sun barely sets — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as Toronto and Montréal.' },
    { icon: '🦊', title: 'Wildlife Caution', text: 'Polar bears and other Arctic wildlife can appear near town — ask locally about current sightings before hiking.' },
    { icon: '🪶', title: 'Inuit Homeland', text: 'Iqaluit is in the heart of Inuit Nunangat; Inuktitut is an official language alongside English, and Inuit culture shapes daily life here.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Qikiqtani General Hospital', 'Emergency department · phone (867) 975-8600', 'Call 911 where available, or the hospital directly'] },
  ],
};

export default IQALUIT;
