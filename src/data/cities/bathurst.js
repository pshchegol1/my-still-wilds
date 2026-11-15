// Bathurst — данные страницы /city/bathurst (Батерст, НЬЮ-БРАНСУИК)
// Осторожно: не Bathurst в Новом Южном Уэльсе (Австралия). Видео Батерста
// в бесплатных банках нет. В шапке фото с Wikimedia Commons — центр
// и бухта Батерст сверху, автор Quintin Soloviev, 28.06.2025, CC BY 4.0
// (GPS 47.617, -65.661 — центр Батерста). Лицензия требует автора.
// Население — перепись 2021: город 12 157 (+2.2%), population centre 15 985.
// Транспорт — FlexGo (по вызову, через приложение/сайт) с 19.01.2026 только
// в пределах Батерста; Belle-Baie и Belledune — январь 2027 (csrchaleurrsc.ca);
// тарифы не нашли.
// Налог — HST 15%; Tourism Accommodation Levy 3.5% с 01.01.2020 (bathurst.ca).
// Больница — Chaleur Regional Hospital, 1750 Sunset Dr, приёмное 24/7 (Vitalité).
// Из общих знаний: Youghall Beach, Daly Point, Pabineau Falls, легенда
// о корабле-призраке, Pabineau First Nation, VIA Ocean, аэропорт YZT, Village Historique Acadien,
// время в пути.

export const BATHURST = {
  slug: 'bathurst',
  name: 'Bathurst',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Chaleur Bay',
  accentLevel: 'gold',
  heroIcon: '🏖️',
  heroImage: '/Cities/Bathurst/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 47.6186, lon: -65.6513 },
  subtitle: 'Bilingual Harbour Town on Chaleur Bay',
  description:
    'Set where the Nepisiguit River meets the warm, sheltered waters of Chaleur Bay, Bathurst is a small, bilingual city with sandy beaches, salt marshes full of birds and wild river gorges a short drive away. It is a relaxed base for summer swims, fall colour and the Acadian Peninsula.',

  actions: [
    { label: 'Explore Bathurst', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈12K (2021)' },
    { label: 'Region', value: 'Chaleur / Gloucester' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Moncton', value: '≈2 h 30 min by car' },
    { label: 'To Campbellton', value: '≈1 h 15 min by car' },
  ],

  badges: ['Chaleur Bay', 'Beaches', 'Bilingual'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '12,157', label: 'People in the city in the 2021 census — about 16K in the urban area', level: 'gold' },
    { value: '2026', label: 'Year FlexGo on-demand buses started in Bathurst', level: 'blue' },
    { value: '3.5%', label: 'City tourism levy on hotel stays, on top of HST', level: 'purple' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, cafés and the waterfront boardwalk' },
    { name: 'Waterfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: '⚓ Harbour', tagLevel: 'blue', meta: 'Marina, gazebo and the small harbour lighthouse' },
    { name: 'Youghall', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: '🏖️ Beach', tagLevel: 'danger', meta: 'Sandy beach and campground on Chaleur Bay' },
    { name: 'Daly Point', icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', tag: '🦆 Nature', tagLevel: 'safe', meta: 'Salt-marsh reserve with trails and an observation tower' },
    { name: 'East Bathurst', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏘️ Residential', tagLevel: 'olive', meta: 'Quiet neighbourhoods across the harbour' },
    { name: 'Nepisiguit River', icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', tag: '🎣 River', tagLevel: 'purple', meta: 'Salmon river with gorges and falls upstream' },
  ],

  attractions: [
    {
      name: 'Youghall Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A long sandy beach on Chaleur Bay, popular for swimming and sunsets, with a campground nearby.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Daly Point Nature Reserve',
      icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'Trails and boardwalks through salt marsh, fields and forest on the bay — good for birding.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
    },
    {
      name: 'Pabineau Falls',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'About 20 minutes up the Nepisiguit River: wide granite ledges and roaring rapids. Stay well back from the edge.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'safe' }],
    },
    {
      name: 'Waterfront Boardwalk',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'A short walk along the harbour with a gazebo, small shops and the harbour lighthouse.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Easy', level: 'blue' }],
    },
    {
      name: 'Chaleur Bay Phantom Ship',
      icon: '👻', iconSrc: '/icons/attractions/ph_ghost-thin.svg',
      text: 'Local legend tells of a burning ghost ship seen on the bay — a favourite story along the Chaleur coast.',
      tags: [{ label: 'Folklore', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Acadian Peninsula',
      icon: '🇫🇷', iconSrc: '/icons/attractions/ph_flag-thin.svg',
      text: 'East of Bathurst: Acadian villages, lighthouses and the Village Historique Acadien living-history museum near Caraquet. Seasonal.',
      tags: [{ label: 'Day trip', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Bay Beaches and River Gorges',
  outdoor: [
    { icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg', name: 'Swimming', dist: 'Youghall Beach', text: 'Sheltered water on Chaleur Bay.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Daly Point', text: 'Marsh birds, raptors and migrating shorebirds.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Salmon Fishing', dist: 'Nepisiguit River', text: 'Licensed salmon angling in season.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Bathurst Harbour', text: 'Calm water for kayaks and paddleboards.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Trails', dist: 'Around town', text: 'Walking and cycling trails by the water.' },
    { icon: '🏂', iconSrc: '/icons/attractions/ph_person-simple-snowboard-thin.svg', name: 'Winter Sports', dist: 'Region', text: 'Snowmobiling, skiing and snowshoeing in snowy winters.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster & Snow Crab', area: 'Seasonal', areaLevel: 'danger', text: 'Fresh from the Chaleur and Acadian fleets.' },
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Acadian Dishes', area: 'Local restaurants', areaLevel: 'purple', text: 'Poutine râpée, fricot and other Acadian classics.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Main Street', areaLevel: 'blue', text: 'Coffee shops downtown.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'gold', text: 'Local bars and live music.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild New Brunswick blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late thaw', text: 'Cool, with ice leaving the bay in spring.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm water, festivals and long evenings on the bay.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright foliage along the Nepisiguit and quiet beaches.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Lots of snow for snowmobiling and winter trails.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Route 11 follows the coast to Miramichi and Moncton in the south and Campbellton in the north.',
      time: '≈2 h 30 min from Moncton',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops at Bathurst a few times a week.',
      time: 'Check VIA schedule',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Bathurst Regional Airport (YZT) has limited flights, mainly to Montréal. Moncton (YQM) has more options.',
      time: 'Limited flights',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Bathurst with other New Brunswick cities. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Bathurst',
      area: 'Town',
      text: 'Hotels and inns downtown and near Route 11.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Bathurst+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Bathurst%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Youghall',
      area: 'Beachside',
      text: 'Camping and cottages near the beach.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Youghall+Bathurst', level: 'blue' },
      ],
    },
    {
      icon: '🇫🇷', iconSrc: '/icons/attractions/ph_flag-thin.svg',
      title: 'Caraquet',
      area: '≈1 h away',
      text: 'Inns on the Acadian Peninsula.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Caraquet+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg',
      title: 'FlexGo On-Demand Transit',
      text: 'Since January 19, 2026, FlexGo on-demand buses run within the City of Bathurst — book a ride through the FlexGo app or website. Service to Belle-Baie and Belledune is planned for January 2027.',
      linkLabel: 'Chaleur RSC — Public transportation',
      linkUrl: 'https://csrchaleurrsc.ca/en/community/public-transportation',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'We could not find current FlexGo fares for Bathurst — check the app or the Chaleur Regional Service Commission.',
        fareBox: {
          label: 'Getting around',
          lines: ['Buses: on demand (book ahead)', 'Area: City of Bathurst', 'Taxis: local', 'Car: for beaches & falls'],
        },
        linkLabel: 'Public transportation',
        linkUrl: 'https://csrchaleurrsc.ca/en/community/public-transportation',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are walkable.' },
          { icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg', title: 'FlexGo', text: 'Book on-demand rides in town.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Pabineau Falls and the Acadian Peninsula.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Beach tip:',
      text: 'Chaleur Bay is sheltered and warms up by late July — the best time for a swim at Youghall.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Since January 1, 2020, hotel stays in Bathurst also carry a 3.5% city tourism accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
      { label: 'Bathurst / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + 3.5% levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg', label: 'Campgrounds: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Youghall Beach: free' },
      { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', label: 'Daly Point trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not Australia', text: 'Add “New Brunswick” when booking — Bathurst in New South Wales often comes up first.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Bilingual City', text: 'English and French are both widely spoken; many locals switch easily between them.' },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'River Safety', text: 'At Pabineau Falls the rocks are slippery and the current is powerful — stay back from the water.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Heavy snow is common — use winter tires and check road conditions.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec across the bay.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Fishing Licences', text: 'Salmon angling needs a New Brunswick licence and follows strict rules.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Bathurst is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Pabineau First Nation is just upriver.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Chaleur Regional Hospital', '1750 Sunset Dr', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default BATHURST;
