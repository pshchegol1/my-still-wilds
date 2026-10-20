// Surrey — данные страницы /city/surrey
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется):
// дрон над Surrey City Centre. Проверено по кадрам — эстакада SkyTrain,
// станция, автобусная петля TransLink и башни Уолли. Это именно Surrey
// в Британской Колумбии, а не графство Surrey в Англии: по слову
// "surrey" банки отдают в основном английские пляжи, так что кадры
// сверялись вручную. Оригинал был 50 с и 110 МБ при 17 Мбит/с —
// обрезан до 20 с и пережат до ~6,7 МБ, постер вырезан из первого
// кадра.
// Население — оценка BC Stats на 19 декабря 2025, а не перепись:
// разрыв между ними большой, поэтому в тексте прямо сказано, чья это
// цифра. Остальные данные (тарифы, расстояния, даты) — из проверенных
// источников на октябрь 2026; расписания и цены меняются, поэтому
// везде сказано сверяться перед поездкой.

export const SURREY = {
  slug: 'surrey',
  name: 'Surrey',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · South of the Fraser',
  accentLevel: 'safe',
  heroIcon: '🏙️',
  heroImage: '/Cities/Surrey/hero-poster.jpg',
  heroVideo: '/Cities/Surrey/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.1913, lon: -122.849 },
  subtitle: 'Six Towns Becoming One City',
  description:
    'The fastest-growing city in British Columbia, and on current projections the largest one by the end of the decade. Surrey is not a single downtown but six communities stitched together across the land south of the Fraser — towers and SkyTrain in one corner, a rodeo ground in another, beach and tidal flats in a third, and more than eight hundred parks in between.',

  actions: [
    { label: 'Explore Surrey', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈734K' },
    { label: 'Climate', value: 'Oceanic' },
    { label: 'City Parks', value: '800+' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈30 km · 45 min' },
    { label: 'To the US Border', value: '≈20 min' },
  ],

  badges: ['Fastest-Growing in BC', 'City of Parks', 'Coast Salish Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'olive', rating: 4 },
    { icon: '🌧️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '≈734K', label: 'People, on the BC Stats estimate for 2026 — the census count is lower, and the two are measured differently', level: 'blue' },
    { value: '800+', label: 'Parks managed by the city, most of them protecting natural areas rather than playing fields', level: 'safe' },
    { value: '550K+', label: 'People at the 2025 Vaisakhi parade, by RCMP estimate — the largest Sikh celebration in the world', level: 'purple' },
    { value: '2029', label: 'Target opening for the SkyTrain extension to Langley, now under construction across the city', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'City Centre (Whalley)', icon: '🏙️', tag: '🏙️ The new downtown', tagLevel: 'gold', meta: 'SkyTrain · Towers and cranes · SFU Surrey · Central City · Civic Plaza' },
    { name: 'Guildford', icon: '🛍️', tag: '🛍️ North-east', tagLevel: 'blue', meta: 'The big mall · Recreation centre · Closest to Tynehead and Highway 1' },
    { name: 'Fleetwood', icon: '🌲', tag: '🌲 Middle', tagLevel: 'safe', meta: 'Quiet residential · Fraser Highway · Four SkyTrain stations under construction' },
    { name: 'Newton', icon: '🪔', tag: '🪔 Most populated', tagLevel: 'purple', meta: 'Punjabi businesses and gurdwaras · Scott Road · Bear Creek Park' },
    { name: 'Cloverdale', icon: '🤠', tag: '🤠 Heritage town', tagLevel: 'olive', meta: 'Old main street · Surrey Museum · Rodeo grounds · A regular film location' },
    { name: 'South Surrey & Crescent Beach', icon: '🏖️', tag: '🏖️ The coast', tagLevel: 'caution', meta: 'Boundary Bay · Blackie Spit · Redwood Park · Peace Arch border crossing' },
  ],

  attractions: [
    {
      name: 'Green Timbers Urban Forest',
      icon: '🌲',
      text: 'The old-growth here was logged to the last giant tree, and in March 1930 the BC Forest Service replanted the cleared ground — British Columbia’s first reforestation project. Only a couple of dozen trees from that first planting survive, and they stand in what is now a city park with a lake, trails and picnic ground. Nothing about it looks dramatic; what it is, is the place the province started growing forests back.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Historic', level: 'gold' }],
    },
    {
      name: 'Vaisakhi & the Gurdwaras',
      icon: '🪔',
      text: 'Surrey’s Vaisakhi parade is the largest annual Sikh celebration anywhere in the world — Surrey RCMP estimated more than 550,000 people in 2025. It runs in April from Gurdwara Sahib Dasmesh Darbar in Newton, and volunteers hand out free vegetarian food along the whole route, as langar tradition requires. Check the date each spring; it moves.',
      tags: [{ label: 'April', level: 'purple' }, { label: 'Free food', level: 'safe' }],
    },
    {
      name: 'Crescent Beach & Blackie Spit',
      icon: '🐦',
      text: 'A low sandy corner of South Surrey on Boundary Bay, with a village-sized beach community and, at Blackie Spit, one of the better birding spots in the region — the tidal flats draw migrating shorebirds in spring and autumn. Parking fills early on hot weekends, and the tide goes out a very long way.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
    },
    {
      name: 'Historic Cloverdale & the Surrey Museum',
      icon: '🏛️',
      text: 'A nineteenth-century main street that somehow survived inside a city of three-quarters of a million people, with the Surrey Museum and the city archives at its centre. Film crews use the street often enough that you may arrive to find it dressed as somewhere else entirely.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Walkable', level: 'safe' }],
    },
    {
      name: 'Cloverdale Rodeo & Country Fair',
      icon: '🤠',
      text: 'The fair dates from 1888 and moved to the Cloverdale grounds in 1938; the rodeo was added in the mid-1940s. It now runs over the Victoria Day long weekend in May. Worth knowing before you buy a ticket: after a calf died at the 2007 event the rodeo dropped four timed events, which took it off the professional circuit — the animal-welfare argument around it has not gone away.',
      tags: [{ label: 'May long weekend', level: 'olive' }, { label: 'Contested', level: 'danger' }],
    },
    {
      name: 'Redwood Park',
      icon: '🌳',
      text: 'Two brothers, David and Peter Brown, were each given a hilltop parcel by their father in 1881 and planted it with trees from around the world, including redwood seeds carried back from California. They lived in a treehouse on the property; a replica stands in the middle of the park today. The grove is the strangest-feeling piece of forest in the city.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Dawn to dusk', level: 'blue' }],
    },
    {
      name: 'Surrey Fusion Festival',
      icon: '🎪',
      text: 'Two days in July at Holland Park, free to enter, with around fifty cultural pavilions and several stages — the city reported over 75,000 people in 2025. It is the clearest single answer to what Surrey actually is now, and the food is the reason most people go.',
      tags: [{ label: 'July · Free', level: 'safe' }, { label: 'Food', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Eight Hundred Parks and a Coastline',
  outdoor: [
    { icon: '🌲', name: 'Forest Trails', dist: 'Across the city', text: 'Of the 800-plus parks the city manages, only about a quarter have playing fields and playgrounds — the rest largely protect natural land. Green Timbers, Tynehead and Surrey Bend give real forest walking without leaving the city limits.' },
    { icon: '🏖️', name: 'Boundary Bay Shore', dist: 'South Surrey', text: 'Crescent Beach and the Blackie Spit flats are shallow, warm by BC standards in late summer, and enormous at low tide. Check the tide table before planning a swim — at low water the sea is a long walk away.' },
    { icon: '🐦', name: 'Birding', dist: 'Blackie Spit · Serpentine', text: 'The bay and the Serpentine lowlands sit on the Pacific Flyway, and the shorebird migrations in spring and autumn are the main event. Bring a scope; the birds are usually out on the flats, not at your feet.' },
    { icon: '🚲', name: 'Cycling', dist: 'City-wide', text: 'Surrey is flat in the north-west and hilly in the south, with a growing network of greenways linking the town centres. Distances between those centres are real — this is a city built for cars, with cycling added afterwards.' },
    { icon: '🎣', name: 'The Fraser River', dist: 'Northern edge', text: 'Surrey’s north edge is the Fraser, working river rather than scenic one — log booms, barges and industry. Fishing here is tightly regulated and the regulations change in-season; check before you cast.' },
    { icon: '🌧️', name: 'Rain Planning', dist: 'October — March', text: 'This is the wet coast: the winter half of the year is grey and damp rather than cold, and the trails turn to mud. Waterproofs matter far more than warm layers here.' },
  ],

  food: [
    { icon: '🍛', title: 'Punjabi Food', area: 'Newton · Scott Road', areaLevel: 'purple', text: 'The reason many people drive to Surrey in the first place. The concentration is along Scott Road (120 Street) and through Newton — sweet shops, vegetarian dhabas and tandoori places, most of them family-run and cash-friendly.' },
    { icon: '🥘', title: 'Langar', area: 'Gurdwaras · city-wide', areaLevel: 'safe', text: 'Sikh temples serve free vegetarian meals to anyone who comes, every day, as a matter of religious principle. Cover your head, remove your shoes, sit on the floor with everyone else. It is hospitality, not a restaurant — behave accordingly.' },
    { icon: '🌏', title: 'Everything Else', area: 'Guildford · Newton · Whalley', areaLevel: 'blue', text: 'Filipino, Korean, Vietnamese, Mexican, Afghan, Ethiopian — the strip malls here hold a density of cuisines that the glossier parts of Metro Vancouver cannot match on price.' },
    { icon: '🍓', title: 'Berry Farms', area: 'Cloverdale · South Surrey', areaLevel: 'danger', text: 'Half of Surrey is still farmland inside the Agricultural Land Reserve. Blueberry and strawberry farms sell at the gate and run U-pick in season, roughly June through August.' },
    { icon: '🍺', title: 'Craft Beer', area: 'City Centre · Cloverdale', areaLevel: 'gold', text: 'A small taproom scene, scattered rather than clustered, which means a plan and a designated driver. Several of the breweries sit in industrial parks rather than on a strip you can stroll.' },
    { icon: '🌽', title: 'Farmers’ Markets', area: 'Seasonal', areaLevel: 'olive', text: 'Markets run through the warm months in several of the town centres. Days and locations shift year to year — check the current schedule rather than turning up.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'March — May', level: 'safe', rating: 4, note: 'Green and wet', text: 'Everything flowers early here, and the shorebird migration peaks on the bay. Still genuinely rainy — spring on this coast is a wetter season than most visitors expect.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'The best of it', text: 'Dry, warm and long-lit, without the heat of the interior. This is when the beaches, the festivals and the berry farms all happen at once. Hot spells can be sharp, and most older housing here has no air conditioning.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'olive', rating: 4, note: 'Quiet and clear', text: 'Often the most settled weather of the year early on, then the rain returns. Birding is excellent again, and the forest parks are at their best.' },
    { icon: '🌧️', name: 'Winter', months: 'November — February', level: 'blue', rating: 3, note: 'Grey, not frozen', text: 'Mild and persistently wet rather than cold — snow is occasional and the region handles it badly when it comes. Short days; plan indoor time into any winter trip.' },
  ],

  gettingThere: [
    {
      icon: '🚇',
      title: 'By SkyTrain — the Expo Line',
      text: 'The Expo Line runs from downtown Vancouver through New Westminster to Surrey, ending at King George after Surrey Central and Gateway. It is the simplest way in and out without a car, it runs every few minutes, and the stations sit in the middle of City Centre. The extension towards Langley — sixteen kilometres and eight more stations — is under construction and targeted to open in late 2029.',
      time: '≈45 min from downtown Vancouver',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 1 over the Port Mann Bridge, Highway 99 from the south and Highway 17 all feed into Surrey, and none of the crossings is tolled. The old Pattullo Bridge closed permanently in February 2026 and was replaced by the stal̕əw̓asəm Bridge beside it; demolition of the old span runs for about two years, so expect changed approaches on the New Westminster side.',
      time: '45 min from Vancouver · longer at rush hour',
    },
    {
      icon: '🛂',
      title: 'From the United States',
      text: 'The Peace Arch crossing sits at the bottom of South Surrey, with the truck crossing at Pacific Highway next to it — together the busiest border point in British Columbia. Waits swing from minutes to hours depending on day and season; check the current border wait times before committing to a crossing.',
      time: '≈20 min from City Centre to the border',
    },
    {
      icon: '✈️',
      title: 'By Air — Vancouver (YVR)',
      text: 'There is no airport in Surrey. YVR is the arrival point, roughly forty kilometres away. The Canada Line plus the Expo Line will get you here on transit with one change downtown, but with luggage most people take a car.',
      time: '≈45–60 min from YVR',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'City Centre',
      area: 'Best for transit · Walkable core',
      text: 'Hotels beside Surrey Central and King George stations put you on the SkyTrain, which makes both Surrey and Vancouver reachable without a car. The area is a building site in places — it is being rebuilt from a suburb into a downtown in real time.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Surrey+City+Centre+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Surrey%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🛍️',
      title: 'Guildford',
      area: 'Cheaper · Near Highway 1',
      text: 'Handy if you are driving through or heading east, with the mall and recreation centre next door. You will need the car for everything else.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Guildford+Surrey+BC', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'South Surrey & White Rock',
      area: 'Quietest · Near the beach',
      text: 'The seaside end of the city, close to Crescent Beach, Redwood Park and the border. Far from the SkyTrain, so this is a car-based base — but it is the pleasant one.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=South+Surrey+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚇',
      title: 'TransLink — SkyTrain & Buses',
      text: 'Surrey is on the same TransLink system as the rest of Metro Vancouver: the Expo Line through City Centre, plus a dense bus network including the R1 RapidBus along King George Boulevard. Transit works well along those spines and thins out quickly away from them — Cloverdale, Crescent Beach and the farm country are much easier with a car.',
      linkLabel: 'TransLink',
      linkUrl: 'https://www.translink.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Compass',
        text: 'Tap a Compass card, a contactless bank card or your phone at the fare gate or on the bus. Fares rose on 1 July 2026, so confirm current prices before travelling. The zone rules matter here more than anywhere: Surrey to downtown Vancouver is a three-zone trip at peak, but the same ride is one zone after 6:30pm on weekdays and all day on weekends and holidays.',
        fareBox: {
          label: 'Adult stored value',
          lines: ['1 zone: $2.85', '2 zones: $4.20', '3 zones: $5.40', 'DayPass: $12.55', 'Buses: always 1 zone'],
        },
        linkLabel: 'Compass Card',
        linkUrl: 'https://www.compasscard.ca/',
      },
      {
        icon: '🚆',
        title: 'Key Links',
        text: 'Three Expo Line stations serve the city, with the busiest interchanges at Surrey Central and King George. Park-and-ride at Scott Road station is the usual move for drivers coming from further out who want to leave the car before the bridges.',
        fareBox: {
          label: 'Useful lines',
          lines: ['Expo Line — Scott Road · Gateway · Surrey Central · King George', 'R1 — King George Blvd RapidBus', '96 — Newton to Guildford', '502 / 503 — Fraser Highway to Langley'],
        },
        linkLabel: 'Schedules & Maps',
        linkUrl: 'https://www.translink.ca/schedules-and-maps',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Rental Car', text: 'The practical choice for seeing more than City Centre. Parking across Surrey is plentiful and mostly free, which is not true of Vancouver.' },
          { icon: '🚧', title: 'SkyTrain Construction', text: 'The Langley extension is being built along Fraser Highway through Fleetwood and Clayton. Expect lane closures and changed bus routing on that corridor until it opens.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Both operate across the city and to the airport. Fares to Vancouver are substantial — the SkyTrain is a fraction of the cost.' },
          { icon: '🚲', title: 'Greenways', text: 'A growing network of separated paths links parks and town centres, best in the flatter northern half of the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'If your plan is flexible, ride the SkyTrain into Vancouver after 6:30pm — the whole trip drops to a one-zone fare. Buses are always one zone whatever the distance, so a bus-and-SkyTrain combination can be cheaper than it first looks.',
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
      { label: 'BC / Surrey', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', label: 'Electronics and technology: 12%' },
      { icon: '⛽', label: 'Fuel: carries its own motor fuel taxes on top' },
    ],
    exempt: [
      { icon: '🍽️', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', label: 'Basic groceries: no PST' },
      { icon: '💊', label: 'Prescription medication: no PST' },
      { icon: '📚', label: 'Books and newspapers: no PST' },
      { icon: '🧒', label: "Children's clothing: no PST" },
      { icon: '🚲', label: 'Bicycles: no PST · Transit fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi and rideshare drivers: around 10%. Langar at a gurdwara is never tipped — donations go in the box, if at all.',
  },

  practical: [
    { icon: '🗺️', title: 'Distances Are Real', text: 'Surrey covers roughly three times the ground the City of Vancouver does, and the town centres are genuinely far apart — Guildford to Crescent Beach is a half-hour drive in good traffic. Plan around one or two of them a day, not the whole city.' },
    { icon: '☔', title: 'Rain Gear', text: 'From October to March, assume rain rather than hoping against it. A waterproof shell is more useful here than a heavy coat.' },
    { icon: '🚧', title: 'Construction', text: 'City Centre and the Fraser Highway corridor are both active building sites — SkyTrain works, towers and road changes. Routes and parking shift month to month; trust current directions over older guides.' },
    { icon: '🛂', title: 'The Border', text: 'Peace Arch is the busiest crossing in BC and waits are unpredictable. Check live border wait times the same day, and remember that returning to Canada can be the slower direction.' },
    { icon: '⏰', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Contactless bank cards and phones work directly at SkyTrain gates and on buses — no Compass card needed for a short visit. Fares changed on 1 July 2026.' },
    { icon: '🪶', title: 'Whose Land', text: 'Surrey sits on the territories of several Coast Salish nations, among them the Semiahmoo, Katzie, Kwantlen, Kwikwetlem, Qayqayt and Tsawwassen. The Semiahmoo community is at the southern edge of the city, by the bay that carries its name.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Surrey Memorial Hospital', '13750 96 Avenue', 'Emergencies: call 911'] },
  ],
};

export default SURREY;
