// Fredericton — данные страницы /city/fredericton (Фредериктон, НЬЮ-БРАНСУИК)
// Видео в шапке — Pexels, автор Steven Hause ("Church roof visible through
// trees near a river in autumn"). На странице место не указано — сверено
// по кадрам с Commons "FrederictonSkyline2013.jpg": шпиль Christ Church
// Cathedral слева и купол Законодательного собрания справа, вид через реку
// Сент-Джон. Лицензия Pexels подписи не требует. Клип "autumn cityscape"
// (30084303) — это Оттава, не взят.
// Население — перепись 2021: город 63 116, агломерация (CMA) 108 610.
// Транспорт — fredericton.ca: $3 наличными или картой/телефоном (open
// payment), месячный $85, 10 поездок $27.50, пересадки бесплатно.
// Налог — HST 15%; Tourism Accommodation Levy 3.5% (By-law R-13, текст).
// Больница — Dr. Everett Chalmers Regional Hospital, 700 Priestman St,
// приёмное 24/7 (Horizon). Смена караула — июль–август (Tourism
// Fredericton, без даты — уточнять).
// Из общих знаний: собор (1853), Законодательное собрание, Beaverbrook Art
// Gallery, Walking Bridge, Boyce Farmers Market, Harvest Music Festival,
// Mactaquac, Kings Landing, UNB, время в пути.

export const FREDERICTON = {
  slug: 'fredericton',
  name: 'Fredericton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Capital on the River',
  accentLevel: 'blue',
  heroIcon: '🏛️',
  heroVideo: '/Cities/Fredericton/hero.mp4',
  heroImage: '/Cities/Fredericton/hero-poster.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.9636, lon: -66.6431 },
  subtitle: 'Capital City on the Saint John River',
  description:
    'New Brunswick’s leafy capital sits on a broad bend of the Saint John River. Watch the changing of the guard in the Historic Garrison District, walk across an old railway bridge turned riverside trail, browse one of Canada’s best-loved Saturday farmers’ markets and see a major art collection at the Beaverbrook Art Gallery.',

  actions: [
    { label: 'Explore Fredericton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈63K (2021)' },
    { label: 'Metro Area', value: '≈109K' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Saint John', value: '≈1 h 15 min by car' },
    { label: 'To Moncton', value: '≈1 h 45 min by car' },
  ],

  badges: ['Provincial Capital', 'Riverside Trails', 'Garrison District'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '63,116', label: 'People in the city in the 2021 census — about 109K in the metro area', level: 'blue' },
    { value: '$3', label: 'Bus fare — pay cash or tap a card or phone', level: 'gold' },
    { value: '3.5%', label: 'City tourism levy on hotel stays, on top of HST', level: 'purple' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Queen and King streets, pubs, cafés and the riverfront' },
    { name: 'Historic Garrison District', icon: '🎖️', tag: '🎖️ History', tagLevel: 'danger', meta: 'Officers’ Square, old barracks and summer events' },
    { name: 'The Green', icon: '🌳', tag: '🌳 Riverside', tagLevel: 'safe', meta: 'Riverside parkland by the cathedral and the gallery' },
    { name: 'Northside', icon: '🌉', tag: '🌉 Across the river', tagLevel: 'blue', meta: 'Nashwaaksis and Devon, reached by the Walking Bridge' },
    { name: 'College Hill', icon: '🎓', tag: '🎓 Campus', tagLevel: 'purple', meta: 'UNB and St. Thomas University on the hill above downtown' },
    { name: 'Marysville', icon: '🏭', tag: '🏭 Heritage', tagLevel: 'olive', meta: 'Former mill town with a historic cotton mill' },
  ],

  attractions: [
    {
      name: 'Historic Garrison District',
      icon: '🎖️',
      text: 'The old British military quarter on the river. In July and August, watch the changing of the guard in Officers’ Square — check the current schedule.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Beaverbrook Art Gallery',
      icon: '🖼️',
      text: 'A major art gallery on the riverbank, with Canadian and international works.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Christ Church Cathedral',
      icon: '⛪',
      text: 'A Gothic Revival cathedral from the mid-1800s, its tall spire a landmark on the Fredericton skyline.',
      tags: [{ label: 'Architecture', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Legislative Assembly',
      icon: '🏛️',
      text: 'New Brunswick’s domed legislature on Queen Street. Tours are offered — check times.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Tours', level: 'blue' }],
    },
    {
      name: 'Boyce Farmers Market',
      icon: '🧺',
      text: 'A much-loved Saturday morning market with local produce, baking, crafts and food stalls.',
      tags: [{ label: 'Saturdays', level: 'caution' }, { label: 'Food', level: 'danger' }],
    },
    {
      name: 'Bill Thorpe Walking Bridge',
      icon: '🌉',
      text: 'A former railway bridge over the Saint John River, now part of the city’s trail network. Great views at sunset.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'gold' }],
    },
  ],

  outdoorHeading: 'River Trails and Forest Parks',
  outdoor: [
    { icon: '🚲', name: 'Riverfront Trails', dist: 'Downtown', text: 'Paved trails along both banks of the river.' },
    { icon: '🌲', name: 'Odell Park', dist: 'West side', text: 'Old-growth forest and walking trails in the city.' },
    { icon: '🛶', name: 'Paddling', dist: 'Saint John River', text: 'Canoe and kayak rentals in summer.' },
    { icon: '🏞️', name: 'Mactaquac Provincial Park', dist: '≈25 min', text: 'Beaches, golf and campground on the headpond.' },
    { icon: '🏘️', name: 'Kings Landing', dist: '≈35 min', text: 'Living-history village of 19th-century New Brunswick.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Downtown', text: 'Outdoor rinks and snowy trails in winter.' },
  ],

  food: [
    { icon: '🧺', title: 'Farmers’ Market', area: 'Boyce Market', areaLevel: 'safe', text: 'Saturday breakfast and local produce.' },
    { icon: '🍻', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Several local breweries and taprooms.' },
    { icon: '🦞', title: 'Maritime Seafood', area: 'Restaurants', areaLevel: 'danger', text: 'Lobster, mussels and chowder.' },
    { icon: '🥞', title: 'Fiddleheads', area: 'Spring', areaLevel: 'olive', text: 'A New Brunswick spring speciality.' },
    { icon: '☕', title: 'Cafés', area: 'Queen & King St', areaLevel: 'blue', text: 'Coffee shops in the downtown core.' },
    { icon: '🍁', title: 'Maple Treats', area: 'Late winter', areaLevel: 'gold', text: 'Local maple syrup and sugar shacks nearby.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Freshet', text: 'The river rises with snowmelt; low riverside areas can flood.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Guard & concerts', text: 'Changing of the guard, outdoor concerts and paddling.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Harvest festival', text: 'Fall colour and the Harvest Music Festival in September.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Cold and snowy; skating, snowshoeing and FROSTival events.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Fredericton International Airport (YFC) has flights to Toronto, Montréal and other hubs.',
      time: '≈20 min to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Route 2) passes the city, linking Moncton, Edmundston and Québec. Route 7 runs to Saint John.',
      time: '≈4 h 30 min from Halifax',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches link Fredericton with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No passenger trains serve Fredericton; the nearest VIA Rail stations are on the Montréal–Halifax line, such as Moncton.',
      time: 'No direct rail',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near the river, the Garrison District and Queen Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fredericton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Fredericton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Prospect Street & Highway',
      area: 'Uptown',
      text: 'Chain hotels near shopping and the Trans-Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fredericton+Prospect+Street', level: 'blue' },
      ],
    },
    {
      icon: '🏞️',
      title: 'Mactaquac',
      area: '≈25 min away',
      text: 'Camping and cottages by the headpond.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Mactaquac+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Fredericton Transit',
      text: 'Fredericton Transit runs buses on both sides of the river. Pay $3 in exact cash or tap a debit or credit card, phone or smartwatch. Ask the driver for a free one-way transfer.',
      linkLabel: 'Fredericton Transit',
      linkUrl: 'https://www.fredericton.ca/node/1037',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Adult fares from the City of Fredericton. Children under 6 ride free. Some banks show a temporary $6 hold when you tap — it is reversed the next business day.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $3 (exact cash or tap)', '10-ride card: $27.50', 'Monthly pass: $85', 'Transfers: free, one way'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.fredericton.ca/node/1037',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the Green are very walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Trails along the river and over the Walking Bridge.' },
          { icon: '🚌', title: 'Bus', text: 'Covers the main neighbourhoods.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Kings Landing and Mactaquac.' },
        ],
      },
    ],
    proTip: {
      label: 'Saturday tip:',
      text: 'Go to the Boyce Farmers Market early on Saturday morning — it gets busy fast.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Fredericton also carry a 3.5% city tourism accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Fredericton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST + 3.5% levy' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', label: 'Festival tickets: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🎖️', label: 'Changing of the guard: free' },
      { icon: '🌉', label: 'Walking Bridge & trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', title: 'Spring Flooding', text: 'The Saint John River can flood in spring; riverside trails and roads may close.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Snowy winters — use winter tires and check road conditions before long drives.' },
    { icon: '🗣️', title: 'Bilingual Province', text: 'New Brunswick is officially bilingual; Fredericton is mostly English-speaking.' },
    { icon: '🎓', title: 'Student Calendar', text: 'Hotels fill up at university move-in and graduation in May.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec and Ontario.' },
    { icon: '🦟', title: 'Bugs', text: 'Bring repellent for forest trails in early summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Fredericton is on the unceded territory of the Wolastoqiyik (Maliseet), the people of the Wolastoq — the Saint John River.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Dr. Everett Chalmers Regional Hospital', '700 Priestman St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default FREDERICTON;
