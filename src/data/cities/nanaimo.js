// Nanaimo — данные страницы /city/nanaimo
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор назвал серию "sunrise over Nanaimo". Проверено по кадрам:
// лесистый остров с песчаниковым берегом за узким проливом, гавань
// с огнями города дальше и пар над промзоной — это сходится с видом
// на гавань Нанаймо и острова Ньюкасл (Saysutshun) и Протекшн. Точную
// точку съёмки по кадру установить нельзя, поэтому в тексте страницы
// острова на видео не названы. Клип исходно лёгкий (13,7 с, 4,7 МБ),
// только переупакован с faststart; постер — первый кадр.
// Население — цифра из городского отчёта State of the Economy 2025.
// Тарифы BC Transit — из rider's guide, действующего с 6 сентября 2026.

export const NANAIMO = {
  slug: 'nanaimo',
  name: 'Nanaimo',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Central Vancouver Island',
  accentLevel: 'blue',
  heroIcon: '⚓',
  heroImage: '/Cities/Nanaimo/hero-poster.jpg',
  heroVideo: '/Cities/Nanaimo/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.1659, lon: -123.9401 },
  subtitle: 'The Harbour City',
  description:
    'Vancouver Island’s second city and its front door from the mainland — two ferry terminals, a floatplane harbour and a fast passenger boat to downtown Vancouver. A coal town built on Snuneymuxw land, now the jumping-off point for the whole middle of the island, with small islands scattered across its harbour and a dessert named after it.',

  actions: [
    { label: 'Explore Nanaimo', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈113K' },
    { label: 'Climate', value: 'Mild coastal' },
    { label: 'Ferry Terminals', value: '2 + passenger' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈1h40m by ferry' },
    { label: 'To Victoria', value: '≈110 km · 1.5h' },
  ],

  badges: ['Harbour City', 'Island Gateway', 'Snuneymuxw Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'olive', rating: 4 },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1854', label: 'The year the Snuneymuxw signed a Douglas Treaty — one of only a handful of historic treaties on Vancouver Island', level: 'danger' },
    { value: '1853', label: 'The Hudson’s Bay Company began the Bastion to guard its coal workings — it still stands on the waterfront', level: 'gold' },
    { value: '≈70 min', label: 'By passenger ferry from Nanaimo harbour to downtown Vancouver, no car and no terminal sprawl', level: 'blue' },
    { value: '1967', label: 'First World Championship Bathtub Race — still run across the Strait every July', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown & the Harbourfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: '⚓ Core', tagLevel: 'blue', meta: 'Harbourfront Walkway · Bastion · Commercial Street · Floatplanes and passenger ferry' },
    { name: 'Old City Quarter', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏚️ Heritage', tagLevel: 'gold', meta: 'Victorian-era buildings · Independent shops · Cafés · Up the hill from downtown' },
    { name: 'Departure Bay', icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: '⛴️ North', tagLevel: 'safe', meta: 'Horseshoe Bay ferry terminal · Beach · Kayak rentals · Views to Newcastle Island' },
    { name: 'North Nanaimo', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: '🛍️ Suburban', tagLevel: 'olive', meta: 'Shopping centres · Most of the hotels · Neck Point and Piper’s Lagoon parks' },
    { name: 'South End & Harewood', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: '⛏️ Coal country', tagLevel: 'danger', meta: 'The old mining neighbourhoods · Colliery Dam Park · Vancouver Island University' },
    { name: 'Snuneymuxw Communities', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: '🪶 First Nation', tagLevel: 'purple', meta: 'Reserve lands along the Nanaimo River estuary · Operators of the Saysutshun ferry' },
  ],

  attractions: [
    {
      name: 'Saysutshun (Newcastle Island)',
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      text: 'A car-free marine provincial park a few minutes across the harbour, reached by a seasonal foot ferry run by the Snuneymuxw First Nation. Saysutshun was a place of healing and spiritual training for the Snuneymuxw long before the Hudson’s Bay Company opened a coal mine on it; today it has a trail right round the island, sandstone shoreline and campsites. Ferries run from spring to early autumn — check the current schedule.',
      tags: [{ label: 'Seasonal ferry', level: 'blue' }, { label: 'Snuneymuxw-run', level: 'danger' }],
    },
    {
      name: 'The Bastion',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'An octagonal wooden blockhouse the Hudson’s Bay Company built between 1853 and 1855 to protect its coal operation, after a Snuneymuxw chief showed company men where the coal was. It still sits on the waterfront above the harbour. Small, quick to see, and a good place to start understanding why the town exists.',
      tags: [{ label: 'Historic', level: 'gold' }, { label: 'Waterfront', level: 'blue' }],
    },
    {
      name: 'Protection Island & the Dinghy Dock',
      icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg',
      text: 'A small residential island in the harbour with a floating pub moored off its shore, reached by a little cash-only passenger ferry from downtown, roughly hourly. Going for a drink by boat is the point. Weather can cancel the crossing, and hours change with the season.',
      tags: [{ label: 'Cash ferry', level: 'caution' }, { label: 'Year-round', level: 'safe' }],
    },
    {
      name: 'Nanaimo Museum',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'Downtown, with the coal-mining history that built the city — including the 1887 explosion at No. 1 Mine that killed 150 men, the worst mining disaster in British Columbia’s history — alongside Snuneymuxw history and culture. The honest version of the coal story is a hard one, and the museum tells it.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
    },
    {
      name: 'World Championship Bathtub Race',
      icon: '🛁', iconSrc: '/icons/attractions/ph_bathtub-thin.svg',
      text: 'Every July since 1967, small motorboats built around bathtubs race a long circuit out into the Strait of Georgia and back, with a waterfront festival around it. Absurd, genuinely competitive and the event the city is proudest of. Dates move each year — check before planning a trip around it.',
      tags: [{ label: 'July', level: 'purple' }, { label: 'Free to watch', level: 'safe' }],
    },
    {
      name: 'The Nanaimo Bar',
      icon: '🍫', iconSrc: '/icons/attractions/ph_cookie-thin.svg',
      text: 'The no-bake dessert — crumb base, custard middle, chocolate top — carries the city’s name. Printed recipes under that name date from the 1950s, and exactly where it came from is argued about. Tourism Nanaimo publishes a self-guided trail of cafés selling their own versions, including ones that stray a long way from the original.',
      tags: [{ label: 'Sweet', level: 'gold' }, { label: 'Self-guided', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Islands, Lakes and a Mountain Behind',
  outdoor: [
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Kayaking the Harbour', dist: 'Departure Bay · Downtown', text: 'Sheltered water between the islands makes this one of the easier places on the coast to paddle. Ferry traffic and floatplanes share the harbour — stay well clear of both, and check wind and tide before going out.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Mount Benson', dist: 'West of the city', text: 'The mountain behind Nanaimo, with a steep climb to the summit and views across the Strait to the Coast Mountains. Lower down, Westwood Lake offers an easy loop and a swimming beach.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Colliery Dam Park', dist: 'South End', text: 'Forest trails around two lakes in the middle of the old mining district — the dams were built to supply water to the coal works. Popular for summer swims.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Neck Point & Piper’s Lagoon', dist: 'North Nanaimo', text: 'Rocky headlands and tide pools on the north shore, good for short walks and watching the Strait. Seals and sea lions pass offshore; at low tide the pools are the attraction.' },
    { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', name: 'Nanaimo River', dist: 'South of the city', text: 'Clear river pools popular for swimming and tubing in summer. Water levels, current and cold are real hazards early in the season, and parts of the river are on private or First Nation land.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Gabriola Island', dist: '20 min ferry', text: 'A short BC Ferries hop from downtown to a quiet Gulf Island with sandstone galleries, beaches and trails. A good day trip without a car if you are willing to cycle.' },
  ],

  food: [
    { icon: '🍫', iconSrc: '/icons/attractions/ph_cookie-thin.svg', title: 'Nanaimo Bars', area: 'City-wide', areaLevel: 'gold', text: 'Every café has one; plenty have reinvented it. Worth trying a traditional one before the deep-fried or cocktail versions.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Harbourfront', areaLevel: 'blue', text: 'Fish and chips on the waterfront are the default, with local shellfish from the island farms on more ambitious menus.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown · Old City', areaLevel: 'danger', text: 'A solid brewery scene for a city this size, mostly within walking distance of the harbour. Plus the floating pub, if you want the beer with a boat ride.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Old City Quarter', areaLevel: 'safe', text: 'The heritage blocks up the hill hold the independent coffee shops and bakeries. The best part of town to wander without a plan.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'Downtown · North End', areaLevel: 'purple', text: 'A university town with a growing international population, and the restaurant mix has followed — not Vancouver-level, but a long way from small-town choice.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Markets', area: 'Seasonal', areaLevel: 'olive', text: 'Island farms and producers sell at markets through the warm months. Days and locations change — check the current schedule.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'March — May', level: 'safe', rating: 4, note: 'Green and quiet', text: 'Mild and early, with the island in full green and few visitors. Still wet. The Saysutshun ferry starts up again in spring with a reduced schedule.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Dry, warm and long, without the heat of the interior. Ferries are at their busiest — reserve vehicle space or expect to wait sailings. Wildfire smoke from elsewhere on the island can drift in during August.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'olive', rating: 4, note: 'Calm weather', text: 'Often the most settled weather of the year early on, and much easier ferries. Salmon run in the rivers. The rain returns properly by late October.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Winter', months: 'November — February', level: 'blue', rating: 3, note: 'Grey and windy', text: 'Mild and wet rather than cold, with winter storms that can cancel sailings and floatplanes. Snow is occasional and the city handles it badly when it comes.' },
  ],

  gettingThere: [
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By BC Ferries',
      text: 'Two vehicle routes: Horseshoe Bay (West Vancouver) to Departure Bay, about an hour and forty minutes, lands close to downtown; Tsawwassen (south of Vancouver) to Duke Point, about two hours, lands south of the city. In summer and on holiday weekends, reserve or expect to wait one or more sailings.',
      time: '≈1h40m–2h crossing',
    },
    {
      icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Passenger Ferry',
      text: 'Hullo runs a fast foot-passenger ferry between Nanaimo harbour and downtown Vancouver, about seventy minutes each way. Without a car, it is usually the quickest door-to-door option. Schedules and fares change; check before travelling.',
      time: '≈70 min to downtown Vancouver',
    },
    {
      icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg',
      title: 'By Floatplane or Air',
      text: 'Floatplanes fly from Nanaimo harbour to downtown Vancouver in about twenty minutes — expensive, but spectacular and fast. Nanaimo Airport (YCD), south of the city, has scheduled flights to Vancouver and Calgary.',
      time: '≈20 min by floatplane',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car on the Island',
      text: 'Highway 1 runs south over the Malahat to Victoria, about 110 km. Highway 19 continues north towards Campbell River, and Highway 4 branches west at Parksville for Port Alberni, Tofino and Pacific Rim — a mountain road with closures, so check DriveBC first.',
      time: '≈1.5h to Victoria · ≈3h to Tofino',
    },
  ],

  stay: [
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Downtown & Harbourfront',
      area: 'Best base · Walkable',
      text: 'Next to the passenger ferry, the floatplanes, the Protection Island boat and the Saysutshun ferry. The right choice if you are arriving without a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Nanaimo+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Nanaimo%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Departure Bay',
      area: 'Near the ferry · Beach',
      text: 'Handy for an early sailing to Horseshoe Bay, with a beach and kayak rentals on the doorstep. Quieter than downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Departure+Bay+Nanaimo', level: 'blue' },
      ],
    },
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'North Nanaimo',
      area: 'Most hotels · Car needed',
      text: 'Where the chain hotels and motels cluster, along the highway. Convenient for driving on up the island; you will drive to everything else.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Nanaimo+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Regional District of Nanaimo Transit (BC Transit)',
      text: 'Buses run by BC Transit cover downtown, the north end, the university and the ferry terminals, with regional links to Parksville, Qualicum and Lantzville. Service is workable along the main corridors and sparse beyond them — for Mount Benson, the Nanaimo River or anywhere up-island, plan on a car.',
      linkLabel: 'BC Transit Nanaimo',
      linkUrl: 'https://www.bctransit.com/nanaimo',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'Pay with cash, the Umo app or card, or contactless. After your second paid ride of the day, a DayPASS applies automatically to the same payment method. Fares below are from the rider’s guide effective 6 September 2026.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $2.75', 'DayPASS: $5.50', '30-day adult pass: $65', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
        title: 'Harbour Ferries',
        text: 'The small boats are part of getting around here. The Saysutshun ferry runs to Newcastle Island in season — hourly in summer, about $15 return for adults. The Protection Island ferry runs roughly hourly all year and takes cash only.',
        fareBox: {
          label: 'Island boats',
          lines: ['Saysutshun: seasonal · ≈$15 adult return', 'Protection Island: year-round · cash only', 'Gabriola: BC Ferries, ≈20 min'],
        },
        linkLabel: 'Saysutshun Ferry',
        linkUrl: 'https://newcastleisland.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'Needed for most of what is around Nanaimo rather than in it. If you bring one over on the ferry, reserve the sailing.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Harbourfront Walkway', text: 'A long waterfront path links downtown with the marinas and Departure Bay direction — the nicest way to get around the core.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city and to both ferry terminals. Book ahead for early sailings.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'E-Trail', text: 'The E&N rail corridor trail runs through the city and is the flattest cycling route north–south.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Coming from Vancouver without a car, the passenger ferry or floatplane lands you in the harbour itself. The vehicle ferries land at terminals you then have to leave by bus or taxi — fine with a car, slow without one.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals carry no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate — 5% GST plus 8% PST on accommodation plus a Municipal and Regional District Tax of up to 3%. Confirm what a displayed room rate includes before booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Nanaimo', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology: 12%' },
      { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Kayak and gear rentals: 12%' },
    ],
    exempt: [
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no PST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no PST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Books and newspapers: no PST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: no PST" },
      { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and kayak instructors: 10–15%. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%.',
  },

  practical: [
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Reserve Ferries', text: 'In summer and on long weekends, vehicle sailings between Nanaimo and the mainland fill up. Reserve, or arrive early and be prepared to wait a sailing or two.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Weather Cancels Boats', text: 'Winter winds cancel small harbour ferries, floatplanes and occasionally BC Ferries sailings. Build slack into any trip that depends on a boat.' },
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Carry Cash', text: 'The Protection Island ferry is cash only, and so are some market stalls. Everything else takes cards.' },
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Wildfire Season', text: 'Fires elsewhere on the island can bring smoke in summer and close Highway 4 to the west coast. Check DriveBC and air quality before heading inland.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Contactless cards work on Nanaimo buses, with the DayPASS cap applied automatically. Compass cards from Vancouver do not.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Nanaimo is on Snuneymuxw territory — the city’s name comes from theirs. Their 1854 treaty with James Douglas guaranteed hunting and fishing rights that the courts have since had to enforce. The Saysutshun ferry is Snuneymuxw-run; riding it is a direct way to support the Nation.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Nanaimo Regional General Hospital', '1200 Dufferin Crescent', 'Emergencies: call 911'] },
  ],
};

export default NANAIMO;
