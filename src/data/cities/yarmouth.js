// Yarmouth — данные страницы /city/yarmouth (Ярмут, НОВАЯ ШОТЛАНДИЯ)
// Видео Ярмута в бесплатных банках нет (осторожно: Great Yarmouth в Англии
// и Ярмуты в Мэне/Массачусетсе).
// В шапке фото с Wikimedia Commons — маяк Cape Forchu (свет для гавани
// Ярмута), автор Dennis G. Jarvis, 31 июля 2011, CC BY-SA 2.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (6 829, город; округ — 24 947).
// Паром CAT Yarmouth–Bar Harbor: сезон 2026 — 14 мая–14 октября (уже
// закончился); возвращается в 2027, май–октябрь (Bay Ferries, CTV).
// Городской автобус — кольцевой маршрут, $2 (CBC), расписание ред. 12.2024
// («уточняйте»). Больница — Yarmouth Regional, 60 Vancouver St.
// HST 14%. Музеи, Acadian Shore, Mavillette — из общих знаний.

export const YARMOUTH = {
  slug: 'yarmouth',
  name: 'Yarmouth',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Gateway to the South Shore',
  accentLevel: 'safe',
  heroIcon: '🗼',
  heroImage: '/Cities/Yarmouth/hero.jpg',
  heroCredit: 'Photo: Dennis G. Jarvis / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.8374, lon: -66.1174 },
  subtitle: 'Seaport at the Tip of Nova Scotia',
  description:
    'At the southwestern tip of Nova Scotia, Yarmouth is an old shipbuilding port where Victorian sea captains’ houses line the streets and a red-and-white lighthouse guards the harbour. In summer the CAT ferry links it with Maine, and Acadian villages and long sandy beaches stretch along the coast in both directions.',

  actions: [
    { label: 'Explore Yarmouth', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈6.8K (2021)' },
    { label: 'County', value: '≈25K' },
    { label: 'Language', value: 'English · French (Acadian)' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈3 h 30 min by car' },
    { label: 'Ferry to Maine', value: 'CAT · May–Oct' },
  ],

  badges: ['Seaport', 'Lighthouses', 'Acadian Coast'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '6,829', label: 'People in the town in the 2021 census — about 25,000 in Yarmouth County', level: 'blue' },
    { value: 'May–Oct', label: 'The CAT ferry to Bar Harbor, Maine ran May 14 – Oct 14 in 2026 and returns for 2027', level: 'gold' },
    { value: '1839', label: 'Cape Forchu light station is established to guide ships into Yarmouth harbour', level: 'purple' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, cafés and the harbourfront boardwalk' },
    { name: 'Collins Street Heritage District', icon: '🏚️', tag: '🏚️ Heritage', tagLevel: 'purple', meta: 'Victorian sea captains’ houses and gardens' },
    { name: 'Waterfront', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'blue', meta: 'Fishing boats, the ferry terminal and harbour walks' },
    { name: 'Cape Forchu', icon: '🗼', tag: '🗼 Lighthouse', tagLevel: 'safe', meta: 'Headland lighthouse and coastal trail about 15 minutes away' },
    { name: 'Frost Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'olive', meta: 'Green space in the centre of town' },
    { name: 'Acadian Shore', icon: '⚜️', tag: '⚜️ French', tagLevel: 'danger', meta: 'French-speaking villages along the coast north and east' },
  ],

  attractions: [
    {
      name: 'Cape Forchu Lightstation',
      icon: '🗼',
      text: 'The red-and-white light that guards Yarmouth harbour, on a rocky headland with walking trails, picnic areas and wide ocean views. A light station has stood here since 1839.',
      tags: [{ label: 'Free grounds', level: 'safe' }, { label: 'Must see', level: 'gold' }],
    },
    {
      name: 'CAT Ferry to Maine',
      icon: '⛴️',
      text: 'A high-speed ferry crosses the Gulf of Maine to Bar Harbor in summer — a scenic shortcut to New England. Seasonal; bring a passport.',
      tags: [{ label: 'May–Oct', level: 'caution' }, { label: 'Passport', level: 'danger' }],
    },
    {
      name: 'Yarmouth County Museum',
      icon: '🚢',
      text: 'One of Canada’s notable collections of ship portraits from Yarmouth’s golden age of sail, plus local history archives.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Firefighters’ Museum of Nova Scotia',
      icon: '🚒',
      text: 'Vintage fire engines and equipment in a downtown museum — popular with kids.',
      tags: [{ label: 'Family', level: 'olive' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Collins Street Heritage District',
      icon: '🏚️',
      text: 'Stroll past grand Victorian homes built by captains and merchants when Yarmouth was a major shipping port.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'purple' }],
    },
    {
      name: 'Mavillette Beach',
      icon: '🏖️',
      text: 'A long sandy beach with dunes on St. Marys Bay, north of town on the Acadian French Shore.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Lighthouses, Beaches and Acadian Coast',
  outdoor: [
    { icon: '🗼', name: 'Lighthouse Route', dist: 'Along the coast', text: 'Cape Forchu and many more lights along the South Shore.' },
    { icon: '🏖️', name: 'Beaches', dist: '≈30–45 min', text: 'Mavillette and other sandy beaches on St. Marys Bay.' },
    { icon: '🐋', name: 'Whale Watching', dist: 'Bay of Fundy coast', text: 'Tours from Brier Island and Digby Neck to the north.' },
    { icon: '🚲', name: 'Rail Trail', dist: 'Yarmouth County', text: 'A converted railway line for walking and cycling.' },
    { icon: '🛶', name: 'Paddling', dist: 'Lakes & coves', text: 'Quiet lakes inland and sheltered coves.' },
    { icon: '🐦', name: 'Birding', dist: 'Coast', text: 'Migrating songbirds and seabirds pass this southwestern tip.' },
  ],

  food: [
    { icon: '🦞', title: 'Lobster', area: 'Southwest Nova', areaLevel: 'danger', text: 'This region lands some of Canada’s biggest lobster catches — fresh lobster is everywhere in season.' },
    { icon: '🥔', title: 'Rappie Pie', area: 'Acadian Shore', areaLevel: 'gold', text: 'Traditional Acadian grated-potato pie with chicken or clams.' },
    { icon: '🦪', title: 'Scallops & Clams', area: 'Waterfront', areaLevel: 'blue', text: 'Fresh shellfish from local boats.' },
    { icon: '🐟', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🍻', title: 'Local Brews', area: 'Downtown', areaLevel: 'purple', text: 'Craft beer and cideries in the region.' },
    { icon: '🫐', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Foggy', text: 'Cool, foggy spring by the ocean; the ferry starts in mid-May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Ferry season', text: 'Mild, breezy summers rarely get hot — perfect for beaches and lighthouses.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Calm & colour', text: 'Mild days and fewer crowds; the ferry ends mid-October.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Mild but stormy', text: 'One of Canada’s milder winters, but wet and windy.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 101 runs up the Bay of Fundy side to Halifax; Highway 103 follows the South Shore.',
      time: '≈3 h 30 min from Halifax',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Bay Ferries’ CAT links Yarmouth with Bar Harbor, Maine, seasonally (May–October).',
      time: 'Seasonal',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Yarmouth has a small regional airport with limited service; Halifax (YHZ) is the main gateway.',
      time: '≈3 h from YHZ',
    },
    {
      icon: '🚌',
      title: 'By Shuttle',
      text: 'Private shuttles connect Yarmouth with Halifax — book ahead.',
      time: '≈3 h 30 min',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Inns and hotels near the waterfront and ferry terminal.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yarmouth+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yarmouth%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏚️',
      title: 'Heritage B&Bs',
      area: 'Collins Street area',
      text: 'Stay in a restored Victorian captain’s house.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yarmouth+Bed+and+Breakfast', level: 'blue' },
      ],
    },
    {
      icon: '⚜️',
      title: 'Acadian Shore',
      area: 'Coastal villages',
      text: 'Cottages and inns near the beaches of St. Marys Bay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Clare+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Yarmouth Town Bus',
      text: 'The town runs a small loop bus around Yarmouth, including stops at the hospital and shopping areas. Service has been interrupted at times — check with the town before relying on it.',
      linkLabel: 'Town of Yarmouth',
      linkUrl: 'https://www.townofyarmouth.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'A single ride has been reported at $2 (CBC); the route was revised in December 2024. Confirm the current fare and schedule with the town.',
        fareBox: {
          label: 'Getting around',
          lines: ['Town loop bus: ≈$2', 'Schedule: check town site', 'Taxis: local', 'Car: for lighthouses & beaches'],
        },
        linkLabel: 'Town of Yarmouth',
        linkUrl: 'https://www.townofyarmouth.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the waterfront are compact.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Cape Forchu and the beaches.' },
          { icon: '🚲', title: 'Bike', text: 'Flat coastal roads and the rail trail.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in town.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Arriving on the CAT from Maine? Allow time for Canadian customs at the terminal, and book a room ahead in peak summer.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Check your hotel bill for any local marketing levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Yarmouth / NS', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 14% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 14% HST' },
      { icon: '⛴️', label: 'Ferry fares: check booking terms' },
      { icon: '🛍️', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🗼', label: 'Cape Forchu grounds: free' },
      { icon: '🏚️', label: 'Heritage district walk: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', title: 'Border Crossing', text: 'The CAT ferry crosses an international border — carry a valid passport and check entry rules for Canada and the US.' },
    { icon: '📅', title: 'Ferry Season', text: 'The CAT runs only from mid-May to mid-October; outside those months, drive via New Brunswick.' },
    { icon: '🌫️', title: 'Fog', text: 'Thick sea fog is common, especially in early summer — drive carefully on coastal roads.' },
    { icon: '🗺️', title: 'Not That Yarmouth', text: 'Add “Nova Scotia” when booking — Great Yarmouth (England) and Yarmouth (Maine) often show up first.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Maine.' },
    { icon: '🦞', title: 'Lobster Season', text: 'The local lobster season traditionally opens in late November — fresh catches peak in winter and spring.' },
    { icon: '🪶', title: 'Whose Land', text: 'Yarmouth is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Yarmouth Regional Hospital', '60 Vancouver St', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default YARMOUTH;
