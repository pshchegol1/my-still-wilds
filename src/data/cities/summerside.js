// Summerside, Prince Edward Island — данные страницы /city/summerside
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 16,001 чел. (перепись 2021, +7.8% к 2016 — 14,839), 7,097 занятых жилищ
//   из 7,393 всего, площадь 28.21 км², плотность 567.2/км². Второй по населению город PEI
//   (Wikipedia / StatCan census profile). Неофициальная оценка мэра на 2024-25 — ≈16,500,
//   указана отдельно как неофициальная.
// - Город основан (incorporated as a town) 1 апреля 1877, статус города (city) — 1 апреля
//   1995. Крупнейший работодатель — Canada Revenue Agency (общедоступный факт).
// - Consolidated Credit Union Place: многофункциональный центр по адресу 511 Notre Dame
//   Street, построен в две очереди, открыт в 2006 (ранее — Summerside Wellness Centre);
//   принимал Royal Bank Cup 2013 (национальный юниорский хоккейный чемпионат) и
//   предсезонный матч Kraft Hockeyville 2017; включает бассейн, горку, джакузи, фитнес-
//   центр, беговую дорожку, боулинг, каток (Wikipedia, architecture49.com).
// - Spinnakers' Landing — набережная в стиле рыбацкой деревни рядом с яхт-клубом,
//   управляется Port of Summerside, торговые точки и рестораны для туристов
//   (exploresummerside.com, CBC).
// - Eptek Art and Culture Centre — упоминается многократно как популярная
//   достопримечательность Саммерсайда, подробностей о текущей экспозиции не нашли —
//   формулировка в файле общая, без конкретных деталей выставок.
// - Prince County Hospital: 65 Roy Boates Avenue, Summerside, PE C1N 2A9,
//   тел. (902) 438-4200, отделение неотложной помощи — круглосуточно, после 20:00 все
//   двери закрыты кроме входа в Emergency (princeedwardisland.ca, erstat.ca). Отдельно
//   отметим: в прошлом были периодические перебои с ночными хирургическими операциями
//   (CBC-репортажи 2021-2023) — в файл эту деталь не включаем, т.к. она может быть уже
//   неактуальна, но сама больница и её адрес/режим ER подтверждены официально.
// - Фото в шапке: Wikimedia Commons, "Summerside, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 02.07.2025. GPS в EXIF: 46.386303, -63.791796 —
//   соответствует гавани/даунтауну Саммерсайда. Сравнивала с другим недавним снимком того
//   же автора (октябрь 2025) — выбрала этот за более чистую композицию и чёткость.
// - Видео в бесплатных банках не найдено (Pexels — нерелевантная выдача по запросу).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const SUMMERSIDE = {
  slug: 'summerside',
  name: 'Summerside',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Prince County',
  tag: "PEI's Second City",
  accentLevel: 'blue',
  heroIcon: '⚓',
  heroImage: '/Cities/Summerside/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.3959, lon: -63.7876 },

  subtitle: 'Harbour City on the Northumberland Strait',
  description:
    "Summerside is Prince Edward Island's second-largest city, a harbour town on the Northumberland Strait known for its waterfront, its deep roots in Acadian and shipbuilding history, and a compact downtown that mixes heritage architecture with modern community facilities. Spinnakers' Landing and the Summerside waterfront make it a natural base for exploring PEI's western half.",

  actions: [
    { label: 'Explore Downtown', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '16,001 (2021)' },
    { label: 'Role', value: "PEI's Second City" },
    { label: 'City Status Since', value: '1995' },
    { label: 'Setting', value: 'Harbour on Northumberland Strait' },
    { label: 'Region', value: 'Prince County' },
    { label: 'Known For', value: 'Waterfront & Heritage' },
  ],

  badges: ['Harbour City', 'Prince County', 'Walkable Downtown'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1877', label: 'Year Summerside was incorporated as a town', level: 'blue' },
    { value: '1995', label: 'Year Summerside became a city', level: 'gold' },
    { value: '16,001', label: 'Population at the 2021 census, up 7.8% from 2016', level: 'safe' },
    { value: '#2', label: "Largest city in Prince Edward Island by population", level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Historic Core', tagLevel: 'gold', meta: 'Heritage storefronts, City Hall and the main shopping streets' },
    { name: "Spinnakers' Landing & the Waterfront", icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbourfront', tagLevel: 'blue', meta: 'Fishing-village-style boardwalk next to the yacht club' },
    { name: 'Notre Dame Area', icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', tag: 'Recreation', tagLevel: 'purple', meta: 'Home to Credit Union Place and community sports facilities' },
    { name: 'Slemon Park', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Former Air Base', tagLevel: 'caution', meta: 'Site of the old CFB Summerside, now an industrial and aviation park' },
    { name: 'St. Eleanors', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Residential area on the western edge of the city' },
  ],

  attractions: [
    {
      name: "Spinnakers' Landing",
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: "Summerside's waterfront marketplace, built in a fishing-village theme beside the yacht club, with shops and restaurants.",
      tags: [{ label: 'Waterfront', level: 'blue' }, { label: 'Family', level: 'safe' }],
    },
    {
      name: 'Consolidated Credit Union Place',
      icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg',
      text: 'A major community recreation centre with a pool, waterslide, fitness centre and arena — it has hosted national junior hockey events.',
      tags: [{ label: 'Recreation', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Eptek Art and Culture Centre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: "One of Summerside's cultural venues, hosting art and heritage exhibits in the downtown area.",
      tags: [{ label: 'Culture', level: 'gold' }],
    },
    {
      name: 'College of Piping and Celtic Performing Arts',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: "A centre dedicated to Celtic music and dance, reflecting PEI's Scottish heritage.",
      tags: [{ label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Harbourfront Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: "Summerside's live performance venue, hosting touring and local productions.",
      tags: [{ label: 'Arts', level: 'gold' }],
    },
    {
      name: 'PEI Sports Hall of Fame',
      icon: '🏆', iconSrc: '/icons/attractions/ph_trophy-thin.svg',
      text: "A small museum celebrating the island's sporting history.",
      tags: [{ label: 'Museum', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Harbourfront and Open Water',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Confederation Trail', dist: 'Through Summerside', text: "PEI's province-spanning rail-trail network passes through the city." },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Silver Fox Curling & Yacht Club', dist: 'Waterfront', text: 'Sailing and yacht club activity on the harbour.' },
    { icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg', name: 'Indoor Pool & Waterslide', dist: 'Credit Union Place', text: 'Year-round swimming regardless of weather.' },
    { icon: '⛳', iconSrc: '/icons/attractions/ph_golf-thin.svg', name: 'Summerside Golf & Country Club', dist: 'Near downtown', text: 'A local golf course open to visitors.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: "Spinnakers' Landing Boardwalk", dist: 'Waterfront', text: 'A scenic walk along the harbour.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Northumberland Strait Views', dist: 'Waterfront', text: 'Open water views across the strait.' },
  ],

  food: [
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'blue', text: 'Mussels, oysters and other local seafood on area menus.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: "Spinnakers' Landing Dining", area: 'Waterfront', areaLevel: 'gold', text: 'Restaurants along the harbour boardwalk.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops and casual spots along the main streets.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Local Markets', area: 'Citywide', areaLevel: 'safe', text: 'Island produce and local goods.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Breweries', area: 'Downtown', areaLevel: 'caution', text: "A small but growing craft beverage scene." },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm harbour days, the busiest time for the waterfront and local events.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Fewer crowds and mild weather.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Quiet season', text: 'Cold, with indoor venues like Credit Union Place taking over from outdoor activity.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, lower-priced time as the city wakes back up.' },
  ],

  gettingThere: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Summerside Airport (YSU) and nearby Slemon Park handle limited air traffic; most visitors fly into Charlottetown.', time: 'Limited service' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Road', text: 'About 40 minutes from Charlottetown and roughly 30 minutes from the Confederation Bridge by car.', time: 'Year-round' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick is the main route onto the Island for visitors arriving by car.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and inns near the heritage core and main shopping streets.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Summerside+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Summerside%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Waterfront',
      area: "Near Spinnakers' Landing",
      text: 'Accommodations close to the harbour boardwalk and yacht club.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Summerside+Prince+Edward+Island', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'Compact and Car-Friendly',
      text: 'Downtown Summerside is small and walkable, while a car makes it easy to reach Credit Union Place, Slemon Park and the rest of western PEI.',
      linkLabel: 'City of Summerside',
      linkUrl: 'https://www.summerside.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are easily walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'Recommended for reaching outlying areas and other parts of western PEI.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally for shorter trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Trip tip:',
      text: 'Summerside makes a convenient base for day trips across western PEI, including the Confederation Trail and North Cape.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Summerside / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
      { icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', label: 'Recreation admissions: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Waterfront walks: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Major Airport', text: 'Charlottetown Airport (YYG), about 40 minutes away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Getting Around', text: 'Downtown is walkable; a car is recommended for the rest of western PEI.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Prince County Hospital, 65 Roy Boates Avenue', '24-hour emergency department · Call 911'] },
  ],
};

export default SUMMERSIDE;
