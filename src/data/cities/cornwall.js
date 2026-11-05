// Cornwall, Prince Edward Island — данные страницы /city/cornwall
//
// ВАЖНО: это Cornwall в графстве Queens, PEI (пригород Шарлоттауна) — НЕ Cornwall
// в Онтарио (город у реки Св. Лаврентия) и НЕ Cornwall в Англии (графство на
// юго-западе Великобритании). Поисковая выдача по обоим запросам сильно засорена
// этими двумя другими Корнуоллами — все источники ниже проверены именно на PEI.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 6,574 чел. (перепись 2021, +22.9% к 2016 — 5,348), площадь 28.2 км²,
//   плотность 233.0/км² (town's own site, Wikipedia). По данным CBC, Корнуолл —
//   самое быстрорастущее поселение острова среди населённых пунктов от 1000 жителей.
//   У сайта citypopulation.de встречена другая цифра (7,495) по более старой/другой
//   методике — не используется, в карточке дана официальная цифра переписи 2021.
//   С переписи 2021 бывший population centre Корнуолла вошёл в population centre
//   Шарлоттауна — это геостатистическая особенность, не означает потерю статуса
//   отдельного муниципалитета.
// - География: расположен в 6 км к западу от Шарлоттауна, Queens County; граничит
//   с North River на востоке и West River (Eliot River) на юге и западе
//   (cornwallpe.ca — town crest page, community profile).
// - История: первые известные поселенцы — французские фермеры в районе North River
//   в середине XVIII века; англоязычные поселенцы — с 1790 года. Судостроение в
//   North River (начало XIX века) просуществовало больше века, угасло в 1920-х.
//   Статус incorporated village — 1966; 1 апреля 1995 — слияние Cornwall, Eliot
//   River и North River в единый Town of Cornwall (также упоминаются York Point и
//   East Wiltshire как присоединённые территории). Назван в честь герцогства
//   Корнуолл в Англии (cornwallpe.ca/welcome-to-cornwall/history).
// - Рекреация: Terry Fox Sports Complex (футбольное поле с надписью "CORNWALL PE",
//   команда Cornwall Timberwolves — видно прямо на фото в шапке), бесплатная беговая
//   дорожка в APM Centre для жителей, муниципальный открытый бассейн (летний сезон),
//   сеть пешеходных троп с картой на сайте города (cornwallpe.ca/parksrecreation,
//   /trail-map). Hyde Park — исторически упоминаемый парк в Корнуолле (встречается в
//   старых архивных фото Wikimedia Commons 2007 года).
// - Медицина: отдельной больницы в самом Корнуолле нет — город обслуживается Queen
//   Elizabeth Hospital в соседнем Шарлоттауне, как и другие пригороды столицы PEI.
// - Фото в шапке: Wikimedia Commons, "Cornwall, PEI.jpg", автор Quintin Soloviev,
//   CC BY 4.0, снято 01.07.2025. GPS в EXIF: 46.219047, -63.230631 — к западу от
//   Шарлоттауна, соответствует положению Корнуолла. На самом кадре видна надпись
//   "CORNWALL PE" на спортивном поле и название команды "Cornwall Timberwolves" —
//   прямое визуальное подтверждение локации.
// - Видео в бесплатных банках не найдено (выдача Pexels — только Cornwall, Англия,
//   и несвязанные регионы Канады).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const CORNWALL = {
  slug: 'cornwall',
  name: 'Cornwall',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Queens County',
  tag: 'Gateway West of Charlottetown',
  accentLevel: 'red',
  heroIcon: '🌾',
  heroImage: '/Cities/Cornwall/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.2341, lon: -63.2242 },

  subtitle: "PEI's Fastest-Growing Town",
  description:
    'Cornwall sits just 6 km west of Charlottetown, bordered by the North River and West River — a once-rural farming community that has become one of the fastest-growing towns on Prince Edward Island. Formed in 1995 from the merger of Cornwall, Eliot River and North River, it keeps a gently rolling, small-town feel while sitting minutes from the capital.',

  actions: [
    { label: 'Explore Cornwall', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '6,574 (2021)' },
    { label: 'Growth', value: '+22.9% since 2016' },
    { label: 'Setting', value: '6 km West of Charlottetown' },
    { label: 'Town Status Since', value: '1995' },
    { label: 'Region', value: 'Queens County' },
    { label: 'Known For', value: 'Rapid Growth & Rivers' },
  ],

  badges: ['Fastest-Growing Town', 'Queens County', 'Riverside Setting'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '6,574', label: 'Population at the 2021 census, up 22.9% from 2016', level: 'safe' },
    { value: '1995', label: 'Year Cornwall, Eliot River and North River merged into one town', level: 'blue' },
    { value: '1790', label: 'Year English-speaking settlers arrived, after mid-1700s French farmers', level: 'gold' },
    { value: '6 km', label: "Distance west of downtown Charlottetown", level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏙️', tag: '🏙️ Civic Core', tagLevel: 'gold', meta: 'Town Hall, schools and the main commercial strip along Route 1' },
    { name: 'North River', icon: '🌊', tag: '🌊 Riverside', tagLevel: 'blue', meta: 'Historic shipbuilding community, now part of Cornwall' },
    { name: 'Eliot River / West River', icon: '🌿', tag: '🌿 Riverside', tagLevel: 'safe', meta: 'Bordering the West (Eliot) River to the south and west' },
    { name: 'East Wiltshire', icon: '🏡', tag: '🏡 Residential', tagLevel: 'purple', meta: 'A former community amalgamated into the Town of Cornwall' },
  ],

  attractions: [
    {
      name: 'Terry Fox Sports Complex',
      icon: '⚽',
      text: "Cornwall's main sports complex, home to turf fields and local teams including the Cornwall Timberwolves.",
      tags: [{ label: 'Sports', level: 'blue' }, { label: 'Family', level: 'safe' }],
    },
    {
      name: 'Town of Cornwall Trail Network',
      icon: '🚴',
      text: 'A network of walking and cycling trails through town, mapped on the municipal trail map.',
      tags: [{ label: 'Trails', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'North River & West River Views',
      icon: '🌊',
      text: 'Water views border the town on two sides — the North River to the east and the West (Eliot) River to the south and west.',
      tags: [{ label: 'Scenic', level: 'blue' }],
    },
    {
      name: 'Town of Cornwall Pool',
      icon: '🏊',
      text: "A municipal outdoor pool, open seasonally for residents and visitors.",
      tags: [{ label: 'Seasonal', level: 'gold' }],
    },
    {
      name: 'APM Centre Walking Track',
      icon: '🚶',
      text: 'An indoor walking track available to residents year-round.',
      tags: [{ label: 'Indoor', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Rivers and Rolling Countryside',
  outdoor: [
    { icon: '🚴', name: 'Cornwall Trail Network', dist: 'Townwide', text: 'Walking and cycling trails mapped across the town.' },
    { icon: '🌊', name: 'North River Shoreline', dist: 'Eastern edge of town', text: 'Water views along the river bordering Cornwall.' },
    { icon: '🌾', name: 'West (Eliot) River Views', dist: 'Southern & western edge', text: 'Rolling farmland meets the river along this border.' },
    { icon: '⚽', name: 'Terry Fox Sports Complex', dist: 'Town centre', text: 'Turf sports fields for local games and tournaments.' },
    { icon: '🏊', name: 'Town Pool', dist: 'Town centre', text: 'Outdoor municipal swimming, open seasonally.' },
  ],

  food: [
    { icon: '🍽️', title: 'Local Restaurants', area: 'Along Route 1', areaLevel: 'blue', text: "Casual dining along Cornwall's main commercial strip." },
    { icon: '☕', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving the growing local community.' },
    { icon: '🛒', title: 'Grocery & Retail', area: 'Townwide', areaLevel: 'safe', text: 'Everyday shopping, with downtown Charlottetown a short drive away.' },
    { icon: '🦪', title: 'PEI Seafood', area: 'Nearby Charlottetown', areaLevel: 'gold', text: "Charlottetown's seafood restaurants are just minutes away." },
  ],

  seasons: [
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the trails, the town pool and sports fields.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather and fall colour across the surrounding farmland.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Quiet season', text: 'Cold, with indoor facilities like the APM Centre taking over from outdoor activity.' },
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, green season as the town reopens its outdoor facilities.' },
  ],

  gettingThere: [
    { icon: '🚗', title: 'From Charlottetown', text: 'Cornwall is about 6 km west of downtown Charlottetown via Route 1, a short drive from the capital.', time: 'Minutes away' },
    { icon: '✈️', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, a short drive from Cornwall.', time: 'Year-round' },
    { icon: '🚗', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick connects to the rest of PEI, with Cornwall on the route into Charlottetown.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Town Centre',
      area: 'Along Route 1',
      text: "Accommodations near Cornwall's main commercial strip, close to Charlottetown.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cornwall+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Cornwall%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'Car-Friendly, Close to the Capital',
      text: 'Cornwall is best explored by car, with Route 1 providing a direct, short connection into downtown Charlottetown.',
      linkLabel: 'Town of Cornwall',
      linkUrl: 'https://cornwallpe.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'By Car', text: 'The main way to get around Cornwall and into Charlottetown.' },
          { icon: '🚴', title: 'By Trail', text: 'Local trails connect neighbourhoods for walking and cycling.' },
        ],
      },
    ],
    proTip: {
      label: 'Location tip:',
      text: 'Cornwall makes a quiet, fast-growing base just minutes from downtown Charlottetown by car.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Cornwall / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', label: 'Store goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚴', label: 'Trail access: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), a short drive away.' },
    { icon: '🌡️', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚗', title: 'Getting Around', text: 'A car is the easiest way to get around Cornwall and into Charlottetown.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', title: 'Medical Care', lines: ['Served by Queen Elizabeth Hospital in Charlottetown', '24-hour emergency department · Call 911'] },
  ],
};

export default CORNWALL;
