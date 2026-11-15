// Trois-Rivières — данные страницы /city/trois-rivieres (Труа-Ривьер, КВЕБЕК)
// Видео Труа-Ривьера в бесплатных банках нет: Pexels отдаёт посторонние
// ролики, а "St. Lawrence River in Quebec" снят в La Malbaie.
// В шапке фото с Wikimedia Commons — центр города сверху (собор, река
// Святого Лаврентия), автор Quintin Soloviev, июнь 2026, CC BY 4.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (139 163; в подписи к фото на Commons
// стоит 144 472 — это более поздняя оценка, не перепись).
// Тарифы STTR — со страницы sttr.qc.ca/tarifs.
// Больница — CHAUR, адрес из репертуара Santé Québec.
// 1634 год, мост Laviolette, Старая тюрьма, Гран-при, Notre-Dame-du-Cap —
// из общих знаний.

export const TROIS_RIVIERES = {
  slug: 'trois-rivieres',
  name: 'Trois-Rivières',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Mauricie',
  accentLevel: 'purple',
  heroIcon: '⛪',
  heroImage: '/Cities/TroisRivieres/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.3432, lon: -72.5418 },
  subtitle: 'Halfway Between Montréal and Québec',
  description:
    'Founded in 1634, Trois-Rivières is one of the oldest cities in Quebec, set where the Saint-Maurice River splits around islands before flowing into the St. Lawrence. Its old quarter, riverside park and a former prison you can tour make it a rewarding stop on the road between Montréal and Québec City — and the gateway to La Mauricie National Park.',

  actions: [
    { label: 'Explore Trois-Rivières', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈139K (2021)' },
    { label: 'Founded', value: '1634' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Montréal / Québec', value: '≈1 h 30 min each' },
    { label: 'To La Mauricie NP', value: '≈45 min by car' },
  ],

  badges: ['Old Quarter', 'St. Lawrence', 'Mauricie Gateway'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1634', label: 'Year the French founded a trading post here — among the oldest European settlements in Quebec', level: 'purple' },
    { value: '139,163', label: 'People in the 2021 census — the main city of the Mauricie region', level: 'blue' },
    { value: '3', label: 'The “three rivers”: the Saint-Maurice reaches the St. Lawrence in channels split by islands', level: 'gold' },
    { value: '$4', label: 'A single STTR bus ride in exact cash; $3.60 with a card', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Vieux-Trois-Rivières', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: '🏛️ Old quarter', tagLevel: 'purple', meta: 'Rue des Ursulines · Ursuline monastery · Old houses and the riverside terrace' },
    { name: 'Centre-ville', icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', tag: '🍷 Downtown', tagLevel: 'gold', meta: 'Rue des Forges · Terraces, bars and the cathedral' },
    { name: 'Parc portuaire', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: '⚓ Waterfront', tagLevel: 'blue', meta: 'Riverside boardwalk · Views of the Laviolette Bridge · Amphitheatre nearby' },
    { name: 'Cap-de-la-Madeleine', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: '⛪ East bank', tagLevel: 'danger', meta: 'Notre-Dame-du-Cap shrine · Across the Saint-Maurice' },
    { name: 'Île Saint-Quentin', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: '🏖️ Island park', tagLevel: 'safe', meta: 'Beach, trails and picnic spots at the mouth of the Saint-Maurice' },
    { name: 'Pointe-du-Lac', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: '🌾 West', tagLevel: 'olive', meta: 'Quiet west end on Lac Saint-Pierre' },
  ],

  attractions: [
    {
      name: 'Old Prison of Trois-Rivières',
      icon: '🔒', iconSrc: '/icons/attractions/ph_lock-thin.svg',
      text: 'A 19th-century stone prison that held inmates until the 1980s. Tours, some led by former prisoners, take you through the cells. Part of the Musée POP, Quebec’s museum of popular culture.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Book ahead', level: 'caution' }],
    },
    {
      name: 'Vieux-Trois-Rivières',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The historic quarter around Rue des Ursulines, with the Ursuline monastery, old stone houses and a terrace overlooking the river. Small enough to see on foot in an hour or two.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
    },
    {
      name: 'Parc portuaire',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'A riverside boardwalk and park downtown with views of ships on the St. Lawrence and the green arch of the Laviolette Bridge.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sunsets', level: 'gold' }],
    },
    {
      name: 'Laviolette Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'Opened in 1967, the long steel arch bridge is the only road crossing of the St. Lawrence between Montréal and Québec City. Best seen from the waterfront.',
      tags: [{ label: 'Landmark', level: 'blue' }],
    },
    {
      name: 'Notre-Dame-du-Cap Shrine',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'A major Catholic pilgrimage site in Cap-de-la-Madeleine, with a large modern basilica and a small 18th-century stone church in landscaped gardens by the river.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Pilgrimage', level: 'purple' }],
    },
    {
      name: 'Boréalis',
      icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg',
      text: 'A museum in a former pulp mill filtration plant telling the story of the paper industry that built the Mauricie region.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Industrial heritage', level: 'blue' }],
    },
  ],

  outdoorHeading: 'River City, Forest Region',
  outdoor: [
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'La Mauricie National Park', dist: '≈45 min north', text: 'Parks Canada lakes and forest: canoeing, camping, a scenic parkway and hiking trails. Entry fees apply.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Île Saint-Quentin', dist: 'In the city', text: 'An island park with a beach, trails and winter skating.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Lac Saint-Pierre', dist: 'West of the city', text: 'A wide, shallow lake on the St. Lawrence and a UNESCO biosphere reserve, rich in birdlife.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Riverside paths', text: 'Bike paths along the St. Lawrence and the Saint-Maurice; the Route Verte passes through.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Saint-Maurice', text: 'Calm channels around the islands at the river mouth.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall Colours', dist: 'Mauricie valley', text: 'The drive north along the Saint-Maurice is beautiful in late September and early October.' },
  ],

  food: [
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Rue des Forges Terraces', area: 'Downtown', areaLevel: 'gold', text: 'Restaurants and bars with summer patios on the main downtown street.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Microbreweries', area: 'Centre-ville', areaLevel: 'purple', text: 'Several craft breweries and pubs downtown.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Regional Cheese', area: 'Mauricie', areaLevel: 'safe', text: 'Cheeses and fresh curds from farms in the region.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Sugar Shacks', area: 'Countryside', areaLevel: 'danger', text: 'Maple feasts in March and April around the city.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Old quarter', areaLevel: 'blue', text: 'Small cafés near Rue des Ursulines.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Ice breaks up on the rivers; sugar shack season. Spring floods can affect low areas near the rivers.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm and lively — outdoor shows on the waterfront and the Grand Prix street race in August.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Good weather and fall colour in La Mauricie National Park.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Cold', text: 'Cold and snowy, with skating and cross-country skiing nearby.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Autoroute 40 runs along the north shore of the St. Lawrence between Montréal and Québec City, right through Trois-Rivières. Autoroute 55 crosses the Laviolette Bridge to the south shore.',
      time: '≈1 h 30 min from either city',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches stop in Trois-Rivières on the Montréal–Québec City route.',
      time: '≈1 h 45 min',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Montréal-Trudeau (YUL) is the nearest major airport.',
      time: '≈1 h 45 min by car',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no VIA Rail passenger service to Trois-Rivières — come by car or bus, or take the train to Montréal or Québec City and continue by coach.',
      time: 'Check VIA Rail',
    },
  ],

  stay: [
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown & Old Quarter',
      area: 'Walkable',
      text: 'Hotels near Rue des Forges and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Trois-Rivieres+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Trois-Rivi%C3%A8res%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway Hotels',
      area: 'Autoroute 40 · 55',
      text: 'Chain hotels for a quick overnight on the road.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Trois-Rivieres', level: 'blue' },
      ],
    },
    {
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      title: 'Near La Mauricie',
      area: 'Shawinigan · Saint-Mathieu',
      text: 'Inns and cabins closer to the national park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Shawinigan+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'STTR Buses',
      text: 'The Société de transport de Trois-Rivières (STTR) runs the city’s buses, covering downtown, the university (UQTR) and Cap-de-la-Madeleine.',
      linkLabel: 'STTR',
      linkUrl: 'https://www.sttr.qc.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the STTR fares page. Children 11 and under ride free with a person aged 12+ holding a valid fare (up to 4 children).',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00 (exact)', 'Card (e-purse): $3.60', 'Day pass: $11.25', 'Monthly: $81.00'],
        },
        linkLabel: 'STTR fares',
        linkUrl: 'https://www.sttr.qc.ca/tarifs/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The old quarter, downtown and waterfront are close together.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Riverside paths in summer.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for La Mauricie National Park.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Road-trip tip:',
      text: 'Driving between Montréal and Québec City? Take Autoroute 40 or the slower riverside Chemin du Roy (Route 138) and stop here for lunch in the old quarter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Trois-Rivières / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', label: 'Waterfront park & old quarter: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French First', text: 'Trois-Rivières is overwhelmingly French-speaking; English is understood in hotels and tourist sites.' },
    { icon: '🏁', iconSrc: '/icons/attractions/ph_flag-checkered-thin.svg', title: 'Grand Prix Weekend', text: 'In August the downtown streets become a racing circuit — hotels fill up and roads close. Check dates before booking.' },
    { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'No Train', text: 'Plan to arrive by car or bus; there is no passenger rail to the city itself.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Cold and snowy. Winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Black flies and mosquitoes in La Mauricie from late May into July.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Trois-Rivières lies on lands long used by the Atikamekw, W8banaki (Abenaki) and other Indigenous peoples; the W8banaki community of Wôlinak is across the river near Bécancour.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['CHAUR – Pavillon Sainte-Marie', '1991 Boulevard du Carmel', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default TROIS_RIVIERES;
