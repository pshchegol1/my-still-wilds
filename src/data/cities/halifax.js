// Halifax — данные страницы /city/halifax (Галифакс, НОВАЯ ШОТЛАНДИЯ)
// Видео в шапке — Pexels, автор Max Medyk ("Aerial view of Halifax
// waterfront skyline"), проверено по кадрам: набережная Галифакса с
// причалами и Дартмут через гавань. Лицензия Pexels подписи не требует.
// Население — перепись 2021 года (HRM 439 819; городская часть 348 634).
// HST 14% с 1 апреля 2025 (Минфин NS). Marketing Levy 3% с 1.10.2023
// (By-law M-400, halifax.ca).
// Тарифы: $3 наличными (2024); +25¢ перенесено на 21 декабря 2026,
// tap-to-pay отложен; HFXGO кэп $7.50/день, $90/мес (CBC, Global News).
// Больница — QEII Halifax Infirmary; вход в приёмное с 14.12.2024 —
// 1840 Bell Rd (NSHA).
// Citadel, Pier 21, Maritime Museum, Public Gardens, Peggy's Cove,
// взрыв 1917, Titanic — из общих знаний.

export const HALIFAX = {
  slug: 'halifax',
  name: 'Halifax',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Capital on the Harbour',
  accentLevel: 'gold',
  heroIcon: '⚓',
  heroVideo: '/Cities/Halifax/hero.mp4',
  heroImage: '/Cities/Halifax/hero-poster.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.6488, lon: -63.5752 },
  subtitle: 'Harbour City of the Atlantic',
  description:
    'Built around one of the world’s great natural harbours, Halifax mixes a star-shaped hilltop fortress, a lively waterfront boardwalk and a maritime history that touches the Titanic, two world wars and the 1917 Halifax Explosion. It is a walkable, friendly capital with pubs full of live music — and the starting point for Peggy’s Cove, Lunenburg and the whole Atlantic coast.',

  actions: [
    { label: 'Explore Halifax', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈440K (HRM, 2021)' },
    { label: 'Role', value: 'Capital of Nova Scotia' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Airport', value: 'YHZ · ≈30 min' },
    { label: 'To Peggy’s Cove', value: '≈45 min by car' },
  ],

  badges: ['Harbour City', 'Maritime History', 'Gateway to the Coast'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '439,819', label: 'People in Halifax Regional Municipality in the 2021 census — the largest city in Atlantic Canada', level: 'blue' },
    { value: '14%', label: 'HST since April 1, 2025, down from 15% — plus a 3% marketing levy on hotel stays', level: 'purple' },
    { value: '1917', label: 'The Halifax Explosion — a munitions ship blast that devastated the north end', level: 'danger' },
    { value: '$3', label: 'A bus or ferry ride in cash; a 25¢ increase is planned for December 21, 2026', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Waterfront', icon: '⚓', tag: '⚓ Harbour', tagLevel: 'gold', meta: 'Boardwalk, piers, seafood shacks, museums and the ferry terminal' },
    { name: 'Citadel Hill & Spring Garden', icon: '🏰', tag: '🏰 Heritage', tagLevel: 'purple', meta: 'The star fort above downtown · Public Gardens · Shopping on Spring Garden Road' },
    { name: 'North End', icon: '🎨', tag: '🎨 Creative', tagLevel: 'danger', meta: 'Agricola and Gottingen streets — cafés, bars, galleries and the Hydrostone district' },
    { name: 'South End', icon: '🌳', tag: '🌳 Leafy', tagLevel: 'safe', meta: 'Universities, old houses and Point Pleasant Park at the tip of the peninsula' },
    { name: 'Dartmouth', icon: '⛴️', tag: '⛴️ Across the harbour', tagLevel: 'blue', meta: 'A short ferry ride away — lakes, waterfront and a growing downtown' },
    { name: 'Seaport District', icon: '🚢', tag: '🚢 Pier 21', tagLevel: 'olive', meta: 'Cruise terminal, immigration museum and farmers’ market' },
  ],

  attractions: [
    {
      name: 'Halifax Citadel National Historic Site',
      icon: '🏰',
      text: 'A star-shaped 19th-century fort on the hill above downtown, with costumed interpreters, soldiers in kilts and the daily noon gun. Views over the harbour from the ramparts.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Must see', level: 'gold' }],
    },
    {
      name: 'Waterfront Boardwalk',
      icon: '⚓',
      text: 'A long harbourfront walkway lined with piers, restaurants, ice-cream stands, tall ships in summer and harbour tours.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Canadian Museum of Immigration at Pier 21',
      icon: '🚢',
      text: 'The ocean terminal where around a million immigrants arrived in Canada, now a national museum of immigration stories.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Maritime Museum of the Atlantic',
      icon: '🧭',
      text: 'Shipwrecks, the Titanic — whose recovery operations were based in Halifax — and the 1917 Halifax Explosion, right on the waterfront.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Halifax Public Gardens',
      icon: '🌷',
      text: 'Formal Victorian gardens with a bandstand, ponds and flowerbeds in the heart of the city. Seasonal; free to enter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Spring–fall', level: 'olive' }],
    },
    {
      name: 'Halifax–Dartmouth Ferry',
      icon: '⛴️',
      text: 'One of North America’s oldest saltwater ferry services — and the cheapest harbour cruise in town, for the price of a bus ticket.',
      tags: [{ label: 'Bus fare', level: 'safe' }, { label: 'Views', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Coast, Coves and Islands',
  outdoor: [
    { icon: '🗼', name: 'Peggy’s Cove', dist: '≈45 min southwest', text: 'The famous lighthouse on bare granite. Stay off the dark, wet rocks — rogue waves are dangerous.' },
    { icon: '🏘️', name: 'Lunenburg', dist: '≈1 h 15 min', text: 'A colourful UNESCO World Heritage fishing town on the South Shore.' },
    { icon: '🌲', name: 'Point Pleasant Park', dist: 'South End', text: 'Forest trails and fort ruins at the mouth of the harbour.' },
    { icon: '🏝️', name: 'McNabs Island', dist: 'Harbour', text: 'Hiking and old forts on an island reached by seasonal boat.' },
    { icon: '🏖️', name: 'Crystal Crescent Beach', dist: '≈40 min', text: 'White-sand beaches and a rugged coastal trail.' },
    { icon: '🛶', name: 'Kayaking', dist: 'Dartmouth lakes · coast', text: 'Lake paddling in Dartmouth or guided sea kayaking along the coast.' },
  ],

  food: [
    { icon: '🦞', title: 'Lobster', area: 'Waterfront', areaLevel: 'danger', text: 'Lobster rolls and boiled lobster — best in season from shacks and restaurants.' },
    { icon: '🥙', title: 'Donair', area: 'City-wide', areaLevel: 'gold', text: 'Halifax’s own spiced-beef wrap with sweet garlic sauce — a late-night classic.' },
    { icon: '🦪', title: 'Oysters & Scallops', area: 'Downtown', areaLevel: 'blue', text: 'Nova Scotia oysters and Digby scallops on many menus.' },
    { icon: '🍻', title: 'Pubs & Live Music', area: 'Argyle & Grafton', areaLevel: 'purple', text: 'Celtic and East Coast music in lively pubs, plus local craft beer.' },
    { icon: '🐟', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Haddock and chips, a Maritime staple.' },
    { icon: '🫐', title: 'Blueberry Grunt', area: 'Bakeries', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries in traditional desserts.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool & foggy', text: 'Late, cool spring with fog off the ocean. Gardens bloom in June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm, breezy days, busy waterfront, festivals and tall ships.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour & seafood', text: 'Beautiful colour, fewer crowds and mild weather — but watch for tropical storms in September.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Wet & windy', text: 'Snow, rain and wind from the Atlantic — milder than inland Canada but stormy.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Halifax Stanfield International Airport (YHZ) has flights across Canada, to the US and to Europe. An express bus and taxis connect to downtown.',
      time: '≈30 min to downtown',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Ocean train runs between Montréal and Halifax a few times a week, arriving at the station near the Seaport.',
      time: 'Overnight from Montréal',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 102 links Halifax with Truro and the Trans-Canada; Highway 103 runs down the South Shore.',
      time: '≈2 h 45 min from Moncton',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Halifax is a major cruise port; ships dock at the Seaport beside Pier 21.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '⚓',
      title: 'Downtown & Waterfront',
      area: 'Walkable',
      text: 'Hotels near the boardwalk, Citadel and nightlife.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Halifax+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Halifax%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎨',
      title: 'North End',
      area: 'Local feel',
      text: 'Rentals and small inns near cafés and bars.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+End+Halifax', level: 'blue' },
      ],
    },
    {
      icon: '⛴️',
      title: 'Dartmouth',
      area: 'Across the harbour',
      text: 'Often cheaper, with a quick ferry ride to downtown Halifax.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Halifax Transit',
      text: 'Halifax Transit runs buses across the region and the harbour ferries to Dartmouth. The ferry costs the same as the bus and transfers work on both. Tap-to-pay with bank cards has been delayed; for now, pay cash or use the HFXGO app.',
      linkLabel: 'Halifax Transit',
      linkUrl: 'https://www.halifax.ca/transportation/halifax-transit',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'The adult cash fare has been $3.00 since 2024; a 25-cent increase was postponed to December 21, 2026. HFXGO barcode payments are capped per day and month.',
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
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact but hilly — the Citadel sits on top.' },
          { icon: '⛴️', title: 'Ferry', text: 'The fastest way to Dartmouth, and a scenic one.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Peggy’s Cove and the South Shore.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Harbour tip:',
      text: 'Ride the ferry to Dartmouth at sunset for the best skyline view in town — for the price of a bus ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single Harmonized Sales Tax of 14% (5% federal + 9% provincial) since April 1, 2025, when it dropped from 15%. Hotels and short-term rentals in Halifax also collect a 3% Marketing Levy, in place since October 1, 2023.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Halifax / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 14% HST + 3% Marketing Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 14% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 14% HST' },
      { icon: '🎟️', label: 'Museum admission: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '⚓', label: 'Waterfront boardwalk: free' },
      { icon: '🌷', label: 'Public Gardens: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', title: 'Peggy’s Cove Rocks', text: 'Stay off the dark, wet rocks near the lighthouse — waves have swept visitors into the sea.' },
    { icon: '🌫️', title: 'Fog & Layers', text: 'Ocean fog can roll in any time; bring a warm layer even in summer.' },
    { icon: '🌀', title: 'Storm Season', text: 'Post-tropical storms can hit in late summer and fall — check forecasts.' },
    { icon: '🦞', title: 'Lobster Season', text: 'Lobster is available year-round, but local fresh catches vary by fishing area and season.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Toronto.' },
    { icon: '🎫', title: 'Transit Changes', text: 'Bus and ferry fares rise 25¢ on December 21, 2026; tap-to-pay should follow.' },
    { icon: '🪶', title: 'Whose Land', text: 'Halifax (Kjipuktuk) is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq, covered by the Peace and Friendship Treaties.' },
    { icon: '🏥', title: 'Medical Care', lines: ['QEII Halifax Infirmary', 'Emergency entrance: 1840 Bell Rd', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default HALIFAX;
