// Stratford, Prince Edward Island — данные страницы /city/stratford
//
// ВАЖНО: это Stratford в графстве Queens, PEI (пригород Шарлоттауна через реку
// Hillsborough) — НЕ Stratford в Онтарио (город фестиваля Шекспира) и НЕ
// Stratford-upon-Avon в Англии. Все источники ниже проверены именно на PEI.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 10,927 чел. (перепись 2021, +12.5% к 2016 — 9,711), 4,307 занятых жилищ
//   из 4,667 всего, площадь 22.67 км², плотность 482/км². Третье по величине поселение
//   PEI (Wikipedia / StatCan census profile). Городские источники (town's own данные)
//   отмечают, что цифры переписи могут занижать реальное население из-за undercount —
//   указано с оговоркой, в карточку взята официальная цифра переписи.
// - География и история: Stratford расположен на юго-восточном берегу реки Hillsborough,
//   напротив Шарлоттауна — классический "спальный" пригород столицы. Образован слиянием
//   нескольких поселений (включая Southport) в единый город; провинциальный профиль и
//   ключевые факты PEI называют год инкорпорации 1995 (как и у Summerside) — у Wikipedia
//   формулировка про объединение Southport чуть иная, но год не противоречит.
// - Парки и трейлы: около 30 км пешеходных/велосипедных троп по всему городу (моторный
//   транспорт запрещён); Keppoch Park (136 Keppoch Road); Tea Hill Park — 15 акров на
//   набережной с пляжем и видами на Northumberland Strait (владение/статус парка указано
//   неоднозначно в источниках — упомянут и как "Tea Hill Provincial Park"); Robert Cotton
//   Park — дендрарий и сады; Fullerton's Creek Conservation Park — 140 акров вокруг
//   городского водозабора с тропами и смотровой площадкой на болото Fullerton's Marsh
//   (townofstratford.ca).
// - Медицина: Stratford фактически обслуживается больницей Шарлоттауна (Queen Elizabeth
//   Hospital, 60 Riverside Drive) — отдельной больницы в самом городе нет, это общая
//   практика для пригородов столицы PEI.
// - Фото в шапке: Wikimedia Commons, "Stratford, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 18.07.2025. GPS в EXIF: 46.229093, -63.106289 —
//   соответствует жилым районам Стратфорда на берегу залива, видно море на горизонте.
// - Видео в бесплатных банках не найдено (выдача Pexels нерелевантна — только другие
//   регионы Канады и одноимённые Stratford в США/Онтарио).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const STRATFORD = {
  slug: 'stratford',
  name: 'Stratford',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Queens County',
  tag: "Charlottetown's Riverside Suburb",
  accentLevel: 'purple',
  heroIcon: '🌉',
  heroImage: '/Cities/Stratford/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.2159, lon: -63.0894 },

  subtitle: 'Across the River from the Capital',
  description:
    "Stratford sits on the south-east bank of the Hillsborough River, directly across the water from Charlottetown. PEI's third-largest community, it has grown quickly into a green, family-friendly suburb with nearly 30 km of trails, waterfront parks, and quick access to the capital's downtown just across the bridge.",

  actions: [
    { label: 'Explore the Trails', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '10,927 (2021)' },
    { label: 'Role', value: "PEI's 3rd-Largest Community" },
    { label: 'Setting', value: 'Across the River from Charlottetown' },
    { label: 'Growth', value: '+12.5% since 2016' },
    { label: 'Region', value: 'Queens County' },
    { label: 'Known For', value: 'Trails & Waterfront Parks' },
  ],

  badges: ['Riverside Suburb', 'Queens County', '30 km of Trails'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '10,927', label: 'Population at the 2021 census, up 12.5% from 2016', level: 'safe' },
    { value: '#3', label: 'Largest community in Prince Edward Island by population', level: 'purple' },
    { value: '30 km', label: 'Of car-free walking and cycling trails across town', level: 'blue' },
    { value: '140', label: 'Acres protected at Fullerton\'s Creek Conservation Park', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Southport', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: '🌉 Riverfront', tagLevel: 'blue', meta: 'The historic riverside community closest to the Charlottetown bridge' },
    { name: 'Keppoch', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: '🏖️ Waterfront', tagLevel: 'safe', meta: 'Home to Keppoch and Tea Hill parks on the Strait shoreline' },
    { name: 'Town Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: '🏙️ Civic Core', tagLevel: 'gold', meta: "Stratford's municipal offices, schools and shops" },
    { name: "Fullerton's Creek", icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: '🌳 Conservation', tagLevel: 'purple', meta: 'A protected wetland and trail area around the town wellfield' },
  ],

  attractions: [
    {
      name: 'Tea Hill Park',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A 15-acre waterfront park on Keppoch Road with public beach access and views south across the Northumberland Strait.',
      tags: [{ label: 'Beach', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Keppoch Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A community park off Keppoch Road, reachable by local transit, with recreational facilities for families.',
      tags: [{ label: 'Family', level: 'safe' }],
    },
    {
      name: "Fullerton's Creek Conservation Park",
      icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: "A 140-acre protected area around the town's wellfield, with walking trails, a multi-purpose field, and a viewing platform over Fullerton's Marsh.",
      tags: [{ label: 'Nature', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Robert Cotton Park',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'A park featuring an arboretum, gardens and walking trails.',
      tags: [{ label: 'Gardens', level: 'gold' }],
    },
    {
      name: 'Stratford Trail Network',
      icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg',
      text: 'Close to 30 km of car-free trails link the town\'s neighbourhoods and parks, groomed for winter use as well.',
      tags: [{ label: 'Trails', level: 'blue' }],
    },
    {
      name: 'Hillsborough River Views',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'Waterfront spots along the Southport shoreline look directly across the river to downtown Charlottetown.',
      tags: [{ label: 'Scenic', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Trails and the Hillsborough Shoreline',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Stratford Trail Network', dist: 'Townwide', text: 'Nearly 30 km of car-free walking and cycling trails.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Tea Hill Park Beach', dist: 'Keppoch Road', text: 'Public beach access on the Northumberland Strait.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: "Fullerton's Marsh Viewing", dist: "Fullerton's Creek Park", text: 'A viewing platform over a protected wetland.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Groomed Winter Trails', dist: 'Fullerton\'s Creek & Kenny Park', text: 'Winter grooming and clearing keeps key routes open year-round.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', name: 'Riverfront Views', dist: 'Southport', text: 'Direct views across the Hillsborough River to Charlottetown.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Robert Cotton Park Arboretum', dist: 'Town centre', text: 'Gardens and tree collections open to walk through.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Local Restaurants', area: 'Town centre', areaLevel: 'blue', text: 'A small but growing dining scene serving the fast-growing suburb.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving the local community.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery & Retail', area: 'Townwide', areaLevel: 'safe', text: 'Everyday shopping for residents, with downtown Charlottetown a short drive or bridge crossing away.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Nearby Charlottetown', areaLevel: 'gold', text: "Charlottetown's waterfront dining is minutes away across the river." },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the trails, beaches and waterfront parks.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather and fall colour along the trail network.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Groomed trails', text: 'Cold, but key trails like Fullerton\'s Creek are groomed for winter use.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, green season as the trails and parks reopen.' },
  ],

  gettingThere: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'From Charlottetown', text: 'Stratford sits directly across the Hillsborough River — a short drive over the bridge from downtown Charlottetown.', time: 'Minutes away' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, a short drive from Stratford.', time: 'Year-round' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick connects to the rest of PEI, with Stratford a short drive beyond Charlottetown.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Southport / Riverfront',
      area: 'Near the bridge',
      text: 'Close to the Hillsborough River crossing into downtown Charlottetown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Stratford+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Stratford%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Keppoch Waterfront',
      area: 'Near Tea Hill Park',
      text: 'Quieter options near the Strait shoreline and beach parks.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Stratford+Prince+Edward+Island', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Linked to Charlottetown',
      text: 'Stratford connects easily to downtown Charlottetown by car or local transit across the Hillsborough River, while its own trail network makes getting around town on foot or bike easy too.',
      linkLabel: 'Town of Stratford',
      linkUrl: 'https://townofstratford.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'The quickest way across the river to Charlottetown and the rest of the Island.' },
          { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', title: 'By Trail', text: 'Nearly 30 km of car-free trails connect Stratford\'s neighbourhoods and parks.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Local Transit', text: 'Bus routes link Stratford to Charlottetown.' },
        ],
      },
    ],
    proTip: {
      label: 'Location tip:',
      text: 'Staying in Stratford puts you minutes from downtown Charlottetown, with quieter, greener surroundings and direct access to riverfront and Strait-side parks.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Stratford / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', label: 'Trail access: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), a short drive away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Getting Around', text: 'A car or bike is the easiest way to get around, with an extensive local trail network.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Served by Queen Elizabeth Hospital in Charlottetown', '24-hour emergency department · Call 911'] },
  ],
};

export default STRATFORD;
