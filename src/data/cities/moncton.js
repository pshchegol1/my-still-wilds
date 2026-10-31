// Moncton — данные страницы /city/moncton (Монктон, НЬЮ-БРАНСУИК)
// Видео Монктона в бесплатных банках нет (Pexels по запросу — Ричмонд,
// Йёнчёпинг и безымянные города). В шапке фото с Wikimedia Commons —
// "Moncton Landscape From The Marsh", James Mann, 12.06.2017, CC BY 2.0
// (GPS 46.0825, -64.7659 — марш у реки Петикодьяк, центр Монктона);
// обрезано до 16:9 без чёрных полос оригинала. Лицензия требует автора.
// Население — перепись 2021: город 79 470 (+10.5% к 2016), CMA 157 717.
// Транспорт — codiactranspo.ca: $3 наличными без сдачи, день $7, 10 поездок
// $29, 30 дней $73, групповой день $18; приложение Codiac+.
// Налог — HST 15%; Tourism Accommodation Levy 3.5% (By-law A-1419, moncton.ca).
// Больницы — The Moncton Hospital, 135 MacBeath Ave; CHU Dr-Georges-L.-Dumont,
// 330 av. Université — обе приёмные 24/7.
// Приливная волна — Bore Park, 10 Bendview Ct; 0.5–1 м, ±20 мин (moncton.ca).
// Из общих знаний: первый официально двуязычный город Канады (2002),
// Magnetic Hill, Hopewell Rocks, Shediac, Avenir Centre, VIA Ocean, время
// в пути.

export const MONCTON = {
  slug: 'moncton',
  name: 'Moncton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Hub of the Maritimes',
  accentLevel: 'danger',
  heroIcon: '🌊',
  heroImage: '/Cities/Moncton/hero.jpg',
  heroCredit: 'Photo: James Mann / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.0878, lon: -64.7782 },
  subtitle: 'Bilingual Crossroads on the Petitcodiac',
  description:
    'New Brunswick’s largest city is a friendly, fast-growing hub where English and French mix on every street. Watch the tidal bore roll up the Petitcodiac River, test the famous Magnetic Hill illusion, and use Moncton as a base for the Hopewell Rocks, the warm beaches of Shediac and the Bay of Fundy.',

  actions: [
    { label: 'Explore Moncton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈79K (2021)' },
    { label: 'Metro Area', value: '≈158K' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Hopewell Rocks', value: '≈40 min by car' },
    { label: 'To Halifax', value: '≈2 h 45 min by car' },
  ],

  badges: ['Tidal Bore', 'Bilingual City', 'Fundy Gateway'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '79,470', label: 'People in the city in 2021 — up 10.5% in five years', level: 'danger' },
    { value: '0.5–1 m', label: 'Height of the tidal bore on the Petitcodiac River', level: 'blue' },
    { value: '2×', label: 'A day the bore arrives — check the city timetable', level: 'purple' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Restaurants, pubs, the Capitol Theatre and the Avenir Centre' },
    { name: 'Riverfront', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Bore Park and the riverfront trail along the Petitcodiac' },
    { name: 'Magnetic Hill', icon: '🧲', tag: '🧲 Family', tagLevel: 'danger', meta: 'The hill illusion, a zoo and a summer water park' },
    { name: 'Dieppe', icon: '🇫🇷', tag: '🇫🇷 Acadian', tagLevel: 'purple', meta: 'Mostly French-speaking city next door, with the airport' },
    { name: 'Riverview', icon: '🏡', tag: '🏡 Across the river', tagLevel: 'safe', meta: 'Quiet town on the south bank with marsh trails' },
    { name: 'Centennial Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'olive', meta: 'Large city park with a beach, trails and winter skating' },
  ],

  attractions: [
    {
      name: 'Tidal Bore at Bore Park',
      icon: '🌊',
      text: 'Twice a day the Fundy tide pushes a wave up to about a metre high up the Petitcodiac River. Arrive 30 minutes early — it can come 20 minutes either side of the forecast time.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Timed', level: 'caution' }],
    },
    {
      name: 'Magnetic Hill',
      icon: '🧲',
      text: 'Put your car in neutral and it seems to roll uphill — a famous optical illusion. The area also has a zoo and a seasonal water park.',
      tags: [{ label: 'Classic', level: 'gold' }, { label: 'Family', level: 'danger' }],
    },
    {
      name: 'Hopewell Rocks',
      icon: '🪨',
      text: 'About 40 minutes away: giant “flowerpot” rock formations on the Bay of Fundy. Walk the ocean floor at low tide and kayak around them at high tide.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Tide times', level: 'caution' }],
    },
    {
      name: 'Parlee Beach & Shediac',
      icon: '🏖️',
      text: 'About 25 minutes away on the Northumberland Strait — some of the warmest saltwater swimming in Canada, plus a giant lobster sculpture.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
    },
    {
      name: 'Resurgo Place',
      icon: '🏛️',
      text: 'Moncton’s museum of local history, with a hands-on transportation discovery centre. Check hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Capitol Theatre',
      icon: '🎭',
      text: 'A restored 1920s theatre on Main Street, hosting concerts, plays and shows.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Evenings', level: 'blue' }],
    },
  ],

  outdoorHeading: 'River, Marsh and Fundy Coast',
  outdoor: [
    { icon: '🚲', name: 'Riverfront Trail', dist: 'Downtown', text: 'Paved trail along the Petitcodiac, linking Moncton, Dieppe and Riverview.' },
    { icon: '🦆', name: 'Marsh Walks', dist: 'Riverview', text: 'Dyke trails and birds on the river marshes.' },
    { icon: '🪨', name: 'Hopewell Rocks', dist: '≈40 min', text: 'Ocean-floor walks and kayaking.' },
    { icon: '🥾', name: 'Fundy National Park', dist: '≈1 h 15 min', text: 'Waterfalls, forest trails and coastal views.' },
    { icon: '🏖️', name: 'Parlee Beach', dist: '≈25 min', text: 'Warm water and long sandy beach.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Centennial Park', text: 'Outdoor rinks and snowy trails.' },
  ],

  food: [
    { icon: '🦞', title: 'Lobster', area: 'Shediac', areaLevel: 'danger', text: 'Lobster suppers and boat tours by the sea.' },
    { icon: '🥔', title: 'Acadian Dishes', area: 'Dieppe & area', areaLevel: 'purple', text: 'Poutine râpée, fricot and other Acadian classics.' },
    { icon: '🍻', title: 'Craft Beer', area: 'Downtown', areaLevel: 'gold', text: 'Local breweries and taprooms.' },
    { icon: '🧺', title: 'Farmers’ Market', area: 'Downtown', areaLevel: 'safe', text: 'Saturday market with local produce and food stalls.' },
    { icon: '☕', title: 'Cafés', area: 'Main Street', areaLevel: 'blue', text: 'Coffee shops in the city centre.' },
    { icon: '🐟', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Cool and muddy; attractions open by late spring.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Beaches, Hopewell Rocks, Magnetic Hill and festivals.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Fall colour along the Fundy coast and quieter attractions.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Cold and snowy; hockey games and outdoor skating.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Greater Moncton Roméo LeBlanc International Airport (YQM) in Dieppe has flights to Toronto, Montréal and other hubs.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops in Moncton a few times a week.',
      time: '≈4 h to Halifax by train',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Route 2) connects Moncton with Fredericton, Nova Scotia and the Confederation Bridge to PEI.',
      time: '≈1 h 45 min from Fredericton',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches link Moncton with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Main Street, the Avenir Centre and the riverfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moncton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Moncton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🧲',
      title: 'Magnetic Hill',
      area: 'Near the highway',
      text: 'Hotels by the Trans-Canada, handy for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Magnetic+Hill+Moncton', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Shediac',
      area: '≈25 min away',
      text: 'Cottages and inns near Parlee Beach.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Shediac+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Codiac Transpo',
      text: 'Codiac Transpo runs buses across Moncton, Dieppe and Riverview. Pay with exact cash, or buy passes in the Codiac+ app.',
      linkLabel: 'Codiac Transpo',
      linkUrl: 'https://www.codiactranspo.ca/moncton-transport/fares',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares from Codiac Transpo. A group day pass ($18, up to five people) can be bought on the bus.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $3 (exact cash)', 'Day pass: $7', '10 trips: $29', '30-day pass: $73'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.codiactranspo.ca/moncton-transport/fares',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚲', title: 'Bike', text: 'The riverfront trail links three communities.' },
          { icon: '🚌', title: 'Bus', text: 'Covers the metro area.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Hopewell Rocks, Fundy and beaches.' },
        ],
      },
    ],
    proTip: {
      label: 'Fundy tip:',
      text: 'Plan Hopewell Rocks around the tides: arrive near low tide to walk the ocean floor, and stay or return at high tide to see the change.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Moncton also carry a 3.5% city tourism accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Moncton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST + 3.5% levy' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', label: 'Attraction tickets: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌊', label: 'Tidal bore viewing: free' },
      { icon: '🚲', label: 'Riverfront trail: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Kayak guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'Bilingual City', text: 'Moncton is officially bilingual — a friendly “Bonjour-Hi” is common; you can be served in English or French.' },
    { icon: '🌊', title: 'Tide Safety', text: 'Fundy tides rise fast — never walk out on mud or the ocean floor without checking tide times.' },
    { icon: '🏖️', title: 'Beach Days', text: 'Parlee Beach fills up on hot summer weekends — go early.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Snowy winters — use winter tires and check road conditions before long drives.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec and Ontario.' },
    { icon: '🚑', title: 'Two Hospitals', text: 'Moncton has two hospitals with 24/7 emergency departments: The Moncton Hospital and the Dr. Georges-L.-Dumont University Hospital Centre (mainly French-language service).' },
    { icon: '🪶', title: 'Whose Land', text: 'Moncton is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq.' },
    { icon: '🏥', title: 'Medical Care', lines: ['The Moncton Hospital', '135 MacBeath Ave', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default MONCTON;
