// Dartmouth — данные страницы /city/dartmouth (Дартмут, НОВАЯ ШОТЛАНДИЯ)
// Видео Дартмута в бесплатных банках нет: на Pexels по "dartmouth nova
// scotia" — Галифакс (набережная с южным терминалом) и деревня у озера
// (похоже на Шелберн) — проверено по кадрам.
// В шапке фото с Wikimedia Commons — Salt Marsh Trail (Cole Harbour, сразу
// к востоку от Дартмута, в том же муниципалитете HRM), автор Larry,
// август 2018, CC BY 2.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года: 72 139 (Дартмут, застроенная часть);
// с Cole Harbour — 96 165.
// Налоги и транзит — как в Галифаксе (HST 14%, Marketing Levy 3%, $3).
// Больница — Dartmouth General, 325 Pleasant St (Nova Scotia Health).
// Salt Marsh Trail ≈6.5 км, Shubie Park — novascotia.com/CTV.
// Озёра, канал Шубенакади, Alderney Landing, Lawrencetown — из общих знаний.

export const DARTMOUTH = {
  slug: 'dartmouth',
  name: 'Dartmouth',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · City of Lakes',
  accentLevel: 'safe',
  heroIcon: '🛶',
  heroImage: '/Cities/Dartmouth/hero.jpg',
  heroCredit: 'Photo: Larry / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.6713, lon: -63.5772 },
  subtitle: 'The City of Lakes Across the Harbour',
  description:
    'A short ferry ride from downtown Halifax, Dartmouth is the harbour city’s laid-back twin: a revived waterfront of cafés and breweries, a necklace of freshwater lakes for paddling and swimming, and a historic canal route inland. Just east, salt marshes and surf beaches begin — wild Atlantic coast only minutes from the ferry.',

  actions: [
    { label: 'Explore Dartmouth', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈72K (2021)' },
    { label: 'Part of', value: 'Halifax Regional Municipality' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Ferry to Halifax', value: '≈12 min' },
    { label: 'To Lawrencetown Beach', value: '≈25 min by car' },
  ],

  badges: ['City of Lakes', 'Harbour Ferry', 'Coastal Trails'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '72,139', label: 'People in Dartmouth in the 2021 census — about 96,000 including Cole Harbour', level: 'blue' },
    { value: '6.5 km', label: 'The Salt Marsh Trail, crossing tidal marsh on an old rail bed east of the city', level: 'safe' },
    { value: '$3', label: 'A ferry ride to downtown Halifax — the same fare as the bus', level: 'gold' },
    { value: '1996', label: 'Dartmouth merged with Halifax and other communities into Halifax Regional Municipality', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown Dartmouth', icon: '☕', tag: '☕ Waterfront', tagLevel: 'gold', meta: 'Portland Street cafés, breweries and murals by the ferry terminal' },
    { name: 'Alderney Landing', icon: '⛴️', tag: '⛴️ Ferry', tagLevel: 'blue', meta: 'Ferry terminal, farmers’ market and arts venue on the harbour' },
    { name: 'Lake Banook', icon: '🛶', tag: '🛶 Paddling', tagLevel: 'safe', meta: 'Home of canoe and kayak clubs and international regattas' },
    { name: 'Shubie Park', icon: '🌲', tag: '🌲 Canal', tagLevel: 'olive', meta: 'Woodland trails, beaches and the old Shubenacadie Canal locks' },
    { name: 'Dartmouth Crossing', icon: '🛍️', tag: '🛍️ Shopping', tagLevel: 'purple', meta: 'Big-box shopping and restaurants off Highway 118' },
    { name: 'Cole Harbour', icon: '🌾', tag: '🌾 East', tagLevel: 'danger', meta: 'Suburbs bordering salt marshes and the coastal heritage park' },
  ],

  attractions: [
    {
      name: 'Salt Marsh Trail',
      icon: '🌾',
      text: 'A flat 6.5 km trail along an old railway causeway through the Cole Harbour salt marsh — herons, tidal flats and granite islands. Part of the Trans Canada Trail.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Dartmouth Lakes',
      icon: '🛶',
      text: 'Dozens of freshwater lakes lie within the city. Lake Banook hosts paddling clubs and big regattas; others have supervised summer beaches.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Shubie Park & the Canal',
      icon: '🌲',
      text: 'Wooded trails between Lake Micmac and Lake Charles, with beaches and restored locks of the 19th-century Shubenacadie Canal, which once linked Halifax Harbour toward the Bay of Fundy.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Downtown Waterfront',
      icon: '🍻',
      text: 'A compact, walkable downtown of craft breweries, coffee shops and murals, with a harbourfront trail and views back to the Halifax skyline.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Nightlife', level: 'danger' }],
    },
    {
      name: 'Halifax–Dartmouth Ferry',
      icon: '⛴️',
      text: 'Ride across the harbour for the price of a bus ticket — the best skyline view in the region, especially at sunset.',
      tags: [{ label: 'Bus fare', level: 'gold' }, { label: 'Views', level: 'blue' }],
    },
    {
      name: 'Lawrencetown Beach',
      icon: '🏄',
      text: 'A wild, exposed Atlantic beach east of the city, famous for surfing year-round. Watch for strong currents.',
      tags: [{ label: 'Surf', level: 'blue' }, { label: 'Rip currents', level: 'caution' }],
    },
  ],

  outdoorHeading: 'Lakes, Marshes and Surf',
  outdoor: [
    { icon: '🛶', name: 'Paddling', dist: 'Lake Banook & chain of lakes', text: 'Calm lakes for canoe, kayak and paddleboard; rentals in summer.' },
    { icon: '🌾', name: 'Salt Marsh Trail', dist: '≈20 min east', text: 'Easy, flat trail over tidal marsh — good for birding and cycling.' },
    { icon: '🏄', name: 'Surfing', dist: 'Lawrencetown', text: 'Nova Scotia’s best-known surf beach; wetsuits needed most of the year.' },
    { icon: '🏊', name: 'Lake Swimming', dist: 'City beaches', text: 'Supervised lake beaches in summer — check water-quality advisories.' },
    { icon: '🚲', name: 'Cycling', dist: 'Canal & harbour trails', text: 'Multi-use paths along the canal lakes and the harbour.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Frozen lakes', text: 'Skating on lakes when the city confirms ice is safe.' },
  ],

  food: [
    { icon: '🍻', title: 'Craft Breweries', area: 'Downtown', areaLevel: 'gold', text: 'A cluster of local breweries and taprooms near the ferry.' },
    { icon: '🦞', title: 'Seafood', area: 'Waterfront', areaLevel: 'danger', text: 'Lobster rolls, chowder and fish and chips.' },
    { icon: '🥙', title: 'Donair', area: 'Everywhere', areaLevel: 'olive', text: 'The Halifax-area late-night classic.' },
    { icon: '☕', title: 'Cafés', area: 'Portland Street', areaLevel: 'purple', text: 'Independent coffee shops and bakeries.' },
    { icon: '🧺', title: 'Farmers’ Market', area: 'Alderney Landing', areaLevel: 'safe', text: 'Local produce and baking by the ferry.' },
    { icon: '🫐', title: 'Wild Blueberries', area: 'Summer', areaLevel: 'blue', text: 'Nova Scotia blueberries in pies and grunt.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool & foggy', text: 'Cool, foggy spring; lakes thaw in April and paddlers return in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days for lake beaches, paddling and patios.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Fall colour around the lakes and canal — but watch for tropical storms in September.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snow, rain and wind off the Atlantic; good winter surf for the brave.' },
  ],

  gettingThere: [
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'Halifax Transit ferries cross from downtown Halifax to Alderney Landing (and to Woodside) for the bus fare.',
      time: '≈12 min crossing',
    },
    {
      icon: '🌉',
      title: 'By Bridge',
      text: 'The Macdonald and MacKay bridges link Dartmouth with Halifax; both charge a toll.',
      time: '≈10–20 min to downtown Halifax',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is closer to Dartmouth than to downtown Halifax.',
      time: '≈25 min by car',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Ocean arrives at Halifax station; cross by ferry, bus or taxi.',
      time: 'Via Halifax',
    },
  ],

  stay: [
    {
      icon: '☕',
      title: 'Downtown Dartmouth',
      area: 'By the ferry',
      text: 'Inns and rentals steps from the ferry, cafés and breweries.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dartmouth%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛍️',
      title: 'Burnside & Dartmouth Crossing',
      area: 'Car-friendly',
      text: 'Chain hotels near the highways and shopping, handy for the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Crossing', level: 'blue' },
      ],
    },
    {
      icon: '🏄',
      title: 'Lawrencetown Coast',
      area: 'Surf & beaches',
      text: 'Cottages and rentals on the coast east of the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lawrencetown+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Halifax Transit',
      text: 'Dartmouth is served by Halifax Transit buses and the harbour ferries. One fare covers bus and ferry, with transfers. Tap-to-pay has been delayed; pay cash or use the HFXGO app.',
      linkLabel: 'Halifax Transit',
      linkUrl: 'https://www.halifax.ca/transportation/halifax-transit',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'The adult cash fare is $3.00 (set in 2024); a 25-cent increase was postponed to December 21, 2026. HFXGO caps fares per day and month.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $3.00 (bus & ferry)', 'HFXGO daily cap: $7.50', 'Monthly cap / pass: $90', '+25¢ planned Dec 21, 2026'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.halifax.ca/transportation/halifax-transit/fares-tickets-passes',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '⛴️', title: 'Ferry', text: 'The scenic way to Halifax.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown Dartmouth is small and walkable.' },
          { icon: '🚗', title: 'Car', text: 'Needed for the coast and surf beaches.' },
          { icon: '🚲', title: 'Bike', text: 'Canal and harbour trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Base yourself in downtown Dartmouth and commute to Halifax by ferry — often cheaper rooms and a harbour cruise twice a day.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). As part of Halifax Regional Municipality, Dartmouth hotels and short-term rentals also collect the 3% Marketing Levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Dartmouth / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 14% HST + 3% Marketing Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 14% HST' },
      { icon: '🛶', label: 'Boat & board rentals: 14% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌾', label: 'Salt Marsh Trail: free' },
      { icon: '🌲', label: 'Shubie Park trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', title: 'Beach Currents', text: 'Lawrencetown and other Atlantic beaches have strong rip currents — swim only where lifeguards are posted.' },
    { icon: '💧', title: 'Lake Water Quality', text: 'City lake beaches sometimes close for bacteria or blue-green algae — check advisories before swimming.' },
    { icon: '🌀', title: 'Storm Season', text: 'Post-tropical storms can damage coastal trails in late summer and fall; check trail status.' },
    { icon: '🌉', title: 'Bridge Tolls', text: 'Both harbour bridges charge a toll — check current payment options before you drive.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🎫', title: 'Transit Changes', text: 'Bus and ferry fares rise 25¢ on December 21, 2026; tap-to-pay should follow.' },
    { icon: '🪶', title: 'Whose Land', text: 'Dartmouth is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq, covered by the Peace and Friendship Treaties.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Dartmouth General Hospital', '325 Pleasant St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default DARTMOUTH;
