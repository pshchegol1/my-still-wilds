// Charlottetown, Prince Edward Island — данные страницы /city/charlottetown
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население города: 38,809 чел. (перепись 2021, +7.5% к 2016 — StatCan census profile).
//   Агломерация (CMA) по данным Canada.ca economic profile ≈78,858 (рост 22% за 2011–2021),
//   не перепроверено напрямую по первичным таблицам StatCan — указано с осторожностью.
//   С переписи 2021 часть бывшего population centre Корнуолла вошла в границы Шарлоттауна
//   (релевантно, т.к. Корнуолл — отдельный город в списке PEI).
// - Confederation Centre of the Arts: открыт 6 октября 1964, к 100-летию Charlottetown
//   Conference 1864 года; национальный мемориал "отцам Конфедерации"; архитекторы —
//   Affleck, Desbarats, Lebensold, Michaud & Sise (брутализм); адрес 145 Richmond St.
//   (Wikipedia, confederationcentre.com/about/our-history).
// - Province House (место Charlottetown Conference 1864) — общеизвестный факт, национальный
//   исторический памятник Канады.
// - Транспорт: T3 Transit, наличный тариф для взрослого — $2.00 (точная сумма без сдачи),
//   актуальность на 2026 год отдельно не подтверждена — рекомендуется сверить перед поездкой.
// - Queen Elizabeth Hospital: 60 Riverside Drive, Charlottetown, PE C1A 8T5 — официальный
//   источник (gov.pe.ca); отделение неотложной помощи заявлено провинцией как круглосуточное;
//   номер телефона найден только в стороннем неофициальном источнике — не указан в файле.
// - Фото в шапке: Wikimedia Commons, "Downtown Charlottetown.jpg", автор Quintin Soloviev,
//   CC BY 4.0, снято 2025-09-16. GPS в EXIF: 46.232792, -63.120769 — соответствует центру
//   Шарлоттауна (набережная, шпили собора St. Dunstan's Basilica на фоне). Проверено также
//   сравнением с другими кадрами того же фотографа и видом армории Queen Charlotte Armoury.
// - Отклонённый вариант: видео с Pexels "lively-canadian-harbor-with-summer-tourists" —
//   при покадровом разборе на флагштоке рядом с канадским флагом виден бело-синий
//   андреевский крест (флаг Новой Шотландии) — это Галифакс, не Шарлоттаун. Отклонено.
// - "Остров Принца Эдуарда" / "Anne of Green Gables" — ассоциация с Charlottetown Festival
//   (мюзикл идёт в Confederation Centre с 1965), это общеизвестный культурный факт, не
//   привязка самого Энн-туризма к городу (дом Green Gables физически в Кавендише).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка).

export const CHARLOTTETOWN = {
  slug: 'charlottetown',
  name: 'Charlottetown',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Queens County',
  tag: 'Birthplace of Confederation',
  accentLevel: 'safe',
  heroIcon: '🏛️',
  heroImage: '/Cities/Charlottetown/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.2382, lon: -63.1311 },

  subtitle: 'Where Canada Was Born',
  description:
    'Charlottetown is the capital of Prince Edward Island and, by national lore, the birthplace of Canada itself — it was here, in September 1864, that delegates met at Province House for the Charlottetown Conference that set Confederation in motion. Today it is a compact, walkable harbour city of red-brick heritage blocks, a lively waterfront boardwalk, and a year-round arts scene centred on the Confederation Centre of the Arts.',

  actions: [
    { label: 'Explore Downtown', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '38,809 (2021)' },
    { label: 'Role', value: 'Capital of PEI' },
    { label: 'Founded', value: '1764' },
    { label: 'Historic Role', value: 'Birthplace of Confederation' },
    { label: 'Setting', value: 'Harbour City' },
    { label: 'Known For', value: 'Arts & Festivals' },
  ],

  badges: ['Capital City', 'National Historic Site', 'Walkable Downtown'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1764', label: 'Year Charlottetown was founded and named', level: 'blue' },
    { value: '1864', label: 'Year the Charlottetown Conference set Confederation in motion', level: 'gold' },
    { value: '1964', label: 'Year the Confederation Centre of the Arts opened', level: 'purple' },
    { value: '38,809', label: 'Population at the 2021 census', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown / Victoria Row', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Historic Core', tagLevel: 'gold', meta: 'Pedestrian-friendly strip of patios and heritage storefronts' },
    { name: "Peake's Wharf & the Waterfront", icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbourfront', tagLevel: 'blue', meta: 'Boardwalk, shops and seafood restaurants on Charlottetown Harbour' },
    { name: 'Brighton', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Leafy heritage neighbourhood near Victoria Park' },
    { name: 'Sherwood', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Suburban', tagLevel: 'purple', meta: 'Quiet residential area north of downtown' },
    { name: 'Parkdale', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Local Life', tagLevel: 'caution', meta: 'Everyday neighbourhood close to the city centre' },
  ],

  attractions: [
    {
      name: 'Province House National Historic Site',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The building where the 1864 Charlottetown Conference was held — the meeting widely credited with starting the road to Canadian Confederation.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Confederation Centre of the Arts',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A national memorial to the Fathers of Confederation, opened in 1964, housing theatres and an art gallery with over 17,000 Canadian works.',
      tags: [{ label: 'Arts', level: 'purple' }, { label: 'Landmark', level: 'blue' }],
    },
    {
      name: "Peake's Wharf",
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'The historic waterfront district, now a boardwalk lined with shops, seafood restaurants and harbour views.',
      tags: [{ label: 'Waterfront', level: 'blue' }, { label: 'Family', level: 'safe' }],
    },
    {
      name: 'Victoria Row',
      icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg',
      text: 'A pedestrian-only block of restored heritage buildings filled with patios, cafés and shops.',
      tags: [{ label: 'Dining', level: 'gold' }, { label: 'Walkable', level: 'safe' }],
    },
    {
      name: 'Beaconsfield Historic House',
      icon: '🏠', iconSrc: '/icons/attractions/ph_house-thin.svg',
      text: 'An 1877 Victorian mansion that shows how Charlottetown\'s merchant class once lived.',
      tags: [{ label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'Victoria Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A waterfront park with walking paths, views over the harbour, and the Government House grounds.',
      tags: [{ label: 'Outdoors', level: 'safe' }, { label: 'Free', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Harbour and Parkland',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Confederation Trail', dist: 'Citywide access', text: 'PEI\'s province-spanning rail-trail network, popular for walking and cycling.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Victoria Park', dist: 'Downtown', text: 'Waterfront walking paths with harbour views.' },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Harbour Boat Tours', dist: "Peake's Wharf", text: 'Seasonal boat tours of Charlottetown Harbour.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Hillsborough River Kayaking', dist: 'Near downtown', text: 'Paddling routes on the river bordering the city.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Joe Ghiz Park', dist: 'Near downtown', text: 'A green space with trails close to the city centre.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Downtown Walking Routes', dist: 'City centre', text: 'A compact, flat core that is easy to explore entirely on foot.' },
  ],

  food: [
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'blue', text: 'Mussels, oysters and lobster suppers — the island\'s culinary signature.' },
    { icon: '🍦', iconSrc: '/icons/attractions/ph_ice-cream-thin.svg', title: 'Cows Creamery', area: "Peake's Wharf", areaLevel: 'gold', text: 'PEI\'s famous ice cream brand, with a flagship shop on the waterfront.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Victoria Row Patios', area: 'Downtown', areaLevel: 'purple', text: 'Outdoor dining along the pedestrian-only heritage strip.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: "Peake's Wharf Restaurants", area: 'Waterfront', areaLevel: 'safe', text: 'Seafood restaurants overlooking the harbour.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Breweries', area: 'Downtown', areaLevel: 'caution', text: 'A growing scene of craft breweries and distilleries.' },
    { icon: '🥗', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Farm-to-Table Dining', area: 'Citywide', areaLevel: 'safe', text: 'Restaurants built around Island-grown produce.' },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'The Charlottetown Festival, warm harbour days and the busiest season of the year.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Fewer crowds, mild weather and fall colour across the Island.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Quiet season', text: 'Cold and quiet downtown, with many outdoor attractions closed for the season.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quieter, lower-priced time as the Island wakes back up.' },
  ],

  gettingThere: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) has domestic flights from major Canadian cities.', time: 'Year-round' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Confederation Bridge', text: 'A 13 km bridge links PEI to New Brunswick, for drivers and buses.', time: 'Year-round' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Northumberland Ferries', text: 'A seasonal ferry connects PEI to Nova Scotia.', time: 'Seasonal' },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown / Victoria Row',
      area: 'Walkable',
      text: 'Historic inns and hotels steps from Province House and the Confederation Centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Charlottetown+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Charlottetown%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: "Peake's Wharf",
      area: 'Waterfront',
      text: 'Hotels on the harbour, close to boat tours and seafood restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Charlottetown+Prince+Edward+Island', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'Compact and Walkable',
      text: 'Downtown Charlottetown is small enough to explore entirely on foot — Province House, the Confederation Centre, Victoria Row and Peake\'s Wharf are all within easy walking distance.',
      linkLabel: 'T3 Transit',
      linkUrl: 'https://www.t3transit.ca/',
    },
    modes: [
      {
        icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'T3 Transit',
        fareBox: { label: 'Adult Cash Fare', lines: ['$2.00 exact change', 'Verify current fares before your trip'] },
        items: [
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'City Bus Routes', text: 'Flat-fare routes connecting downtown, the airport area and surrounding neighbourhoods.' },
        ],
      },
    ],
    proTip: {
      label: 'Walking tip:',
      text: 'Most visitors never need the bus — downtown\'s main sights are all within a 15-minute walk of each other.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Charlottetown / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
      { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', label: 'Boat tours: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'Victoria Park views: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Airport', text: 'Charlottetown Airport (YYG).' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Getting Around', text: 'Downtown is highly walkable; a car is useful for exploring the rest of the Island.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Queen Elizabeth Hospital, 60 Riverside Drive', '24-hour emergency department · Call 911'] },
  ],
};

export default CHARLOTTETOWN;
