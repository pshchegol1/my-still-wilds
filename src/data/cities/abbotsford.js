// Abbotsford — данные страницы /city/abbotsford
// Видео города в бесплатных банках нет: Pexels по "abbotsford" отдаёт
// случайные пригороды и Новую Зеландию, Pixabay и Wikimedia Commons —
// ничего. Поэтому в шапке фото с Commons: тюльпанные поля Abbotsford
// Tulip Festival на фоне горы Сумас, автор Dllu, лицензия CC BY-SA 4.0.
// Лицензия требует указывать автора — отсюда heroCredit.
// Население — оценка StatCan на 1 июля 2025, а не перепись; в тексте
// сказано, чья это цифра. Тарифы BC Transit менялись 6 сентября 2026,
// и на сайте перевозчика дата вступления не указана, поэтому везде
// сказано сверяться перед поездкой.

export const ABBOTSFORD = {
  slug: 'abbotsford',
  name: 'Abbotsford',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Fraser Valley',
  accentLevel: 'olive',
  heroIcon: '🌷',
  heroImage: '/Cities/Abbotsford/hero.jpg',
  heroCredit: 'Photo: Dllu / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.0504, lon: -122.3045 },
  subtitle: 'The City in the Country',
  description:
    'Canada’s farming capital by value, wrapped around an airport and spread across the widest part of the Fraser Valley. Roughly seven tenths of Abbotsford is protected farmland, Mount Baker fills the southern sky, and the flat ground east of town is a lake that was drained a century ago — and came back for two weeks in November 2021.',

  actions: [
    { label: 'Explore Abbotsford', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈175K' },
    { label: 'Climate', value: 'Oceanic · Wet' },
    { label: 'Land in the ALR', value: '≈72%' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈70 km · 1h' },
    { label: 'To the US Border', value: '≈10 min' },
  ],

  badges: ['Farming Capital', 'Fraser Valley', 'Stó:lō Territory'],

  bestSeasons: [
    { icon: '🌷', label: 'Spring', level: 'gold', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'olive', rating: 4 },
    { icon: '🌧️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈72%', label: 'Of the city’s land sits inside the Agricultural Land Reserve — farming is not a fringe here, it is the plan', level: 'olive' },
    { value: '1911', label: 'The Gur Sikh Temple, the oldest surviving gurdwara in North America and a National Historic Site', level: 'gold' },
    { value: '1924', label: 'The year Sumas Lake was finished being drained for farmland — it flooded back in November 2021', level: 'blue' },
    { value: '~$1B', label: 'In annual farm gate receipts from the region’s farms, the highest concentration in the country', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Historic Downtown', icon: '🏘️', tag: '🏘️ The old core', tagLevel: 'gold', meta: 'Essendene Avenue · Independent shops and cafés · Jubilee Park · Walkable' },
    { name: 'West Abbotsford & Clearbrook', icon: '🛒', tag: '🛒 Busiest', tagLevel: 'blue', meta: 'South Fraser Way · Shopping · Gurdwaras · Most of the city’s services' },
    { name: 'East Abbotsford', icon: '🏞️', tag: '🏞️ Hillside', tagLevel: 'safe', meta: 'Newer residential · Views over the valley · Closest to Sumas Mountain' },
    { name: 'Clayburn Village', icon: '🧱', tag: '🧱 Heritage', tagLevel: 'danger', meta: 'BC’s first company town · Brick houses from 1905–08 · Village store and tearoom' },
    { name: 'Sumas Prairie', icon: '🌾', tag: '🌾 The old lakebed', tagLevel: 'caution', meta: 'Dead-flat farmland below sea level · Dairy and berry farms · Flood country' },
    { name: 'Bradner & Mount Lehman', icon: '🌼', tag: '🌼 Rural west', tagLevel: 'purple', meta: 'Daffodil fields · Back roads · Flower show in April · Farm stands' },
  ],

  attractions: [
    {
      name: 'Gur Sikh Temple',
      icon: '🛕',
      text: 'Built by Sikh millworkers and opened in 1911, using lumber from the mill where many of them worked. It is the oldest surviving gurdwara in North America and a National Historic Site — Parks Canada designated it in 2002. The adjoining Sikh Heritage Museum tells the story of the community that built it, including the exclusion laws it was built under. Still an active place of worship: cover your head and remove your shoes.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Active gurdwara', level: 'danger' }],
    },
    {
      name: 'Sumas Prairie & the Lake That Returned',
      icon: '🌊',
      text: 'Semá:th X̲ó:tsa — Sumas Lake — fed the Semá:th people for generations until it was drained between 1920 and 1924 and turned into farmland. In November 2021 an atmospheric river sent the Nooksack River over the border, the dike failed, and the lake refilled; about 1,100 Abbotsford homes were evacuated. A 2024 study by UBC researchers and Semá:th members costed letting part of the lakebed return at under half the price of rebuilding the dikes. The city’s position remains flood prevention. Driving Highway 1 across the prairie, you are crossing a lakebed.',
      tags: [{ label: 'Contested', level: 'danger' }, { label: 'Drive-through', level: 'blue' }],
    },
    {
      name: 'Clayburn Village',
      icon: '🧱',
      text: 'British Columbia’s first company town, built between 1905 and 1908 at the foot of Sumas Mountain for the workers of the Vancouver Fireclay Company. Its bricks went into landmarks across the province. Seven of the original company brick houses still stand, along with the church and schoolhouse, in a designated heritage conservation area. The village store and tearoom are the usual reason people stop.',
      tags: [{ label: 'Heritage area', level: 'gold' }, { label: 'Small', level: 'blue' }],
    },
    {
      name: 'Abbotsford International Airshow',
      icon: '✈️',
      text: 'Three days every August at the airport, and one of the largest annual events in British Columbia. Tickets usually sell out in advance and the roads around the airport jam badly on the weekend — buy early, arrive early, and plan the exit before you need it.',
      tags: [{ label: 'August', level: 'caution' }, { label: 'Book ahead', level: 'danger' }],
    },
    {
      name: 'Tulip & Daffodil Fields',
      icon: '🌷',
      text: 'Spring here is a commercial flower crop before it is a tourist attraction. The tulip festival fields run roughly April into May, and out at Bradner the daffodil farms have supported a flower show since 1928 — it began in one man’s parlour and now shows hundreds of daffodil varieties. Both are weather-dependent and dated differently each year; check before driving out.',
      tags: [{ label: 'April — May', level: 'gold' }, { label: 'Ticketed', level: 'caution' }],
    },
    {
      name: 'Sumas Mountain & the Trails',
      icon: '🥾',
      text: 'The mountain on the city’s eastern edge carries the main hiking network, including the long climb to Chadsey Lake. Lower down, Mill Lake Park sits in the middle of the city with an easy loop around the water. The valley trails are mud from October to April — this is boots country, not trainers.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Muddy in winter', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Farmland, Floodplain and One Mountain',
  outdoor: [
    { icon: '🥾', name: 'Sumas Mountain', dist: 'East edge of the city', text: 'The main hiking ground, with a steep forest climb to Chadsey Lake near the top. Wet roots and mud for much of the year; the summit views over the valley are the payoff.' },
    { icon: '🚲', name: 'Discovery Trail', dist: 'Through the city', text: 'A multi-use path threading the city between parks and neighbourhoods — the easiest way to see Abbotsford without a car, and flat for most of its length.' },
    { icon: '🛶', name: 'Mill Lake', dist: 'City centre', text: 'A small lake with a loop path, a playground and ducks, right in the middle of town. The default local walk, and busy on any dry evening.' },
    { icon: '🌾', name: 'Farm Roads', dist: 'Sumas Prairie · Mount Lehman', text: 'The back roads through the farmland are flat, quiet and genuinely scenic, with Mount Baker across the border for a backdrop. They are working roads — expect tractors, and give them room.' },
    { icon: '🦅', name: 'Birding', dist: 'Sumas Prairie · Fraser lowlands', text: 'The prairie floods seasonally and draws raptors, swans and snow geese through the winter months. Watch from the road; the fields are private and in use.' },
    { icon: '🌧️', name: 'Rain Planning', dist: 'October — March', text: 'The Fraser Valley catches the weather coming up from the coast, and the wet half of the year is persistent rather than dramatic. Waterproofs matter more than warm layers.' },
  ],

  food: [
    { icon: '🍓', title: 'Berry Country', area: 'City-wide', areaLevel: 'danger', text: 'Raspberries and blueberries by the square kilometre — over a thousand hectares of raspberries alone. Farm stands and U-pick run roughly June to August, and the gate price is a fraction of the supermarket one.' },
    { icon: '🥛', title: 'Dairy', area: 'Sumas Prairie · Matsqui', areaLevel: 'safe', text: 'This is one of the densest dairy districts in the country, and local cheese and ice cream show up on menus and at farm shops throughout the valley.' },
    { icon: '🍛', title: 'Punjabi Food', area: 'Clearbrook · South Fraser Way', areaLevel: 'purple', text: 'Abbotsford’s Punjabi community is more than a century old, and the food reflects it — sweet shops, vegetarian dhabas and tandoori places concentrated in the west of the city.' },
    { icon: '🍷', title: 'Valley Wine & Cider', area: 'Rural edges', areaLevel: 'gold', text: 'A small Fraser Valley wine and cider scene, built on fruit rather than reputation. Tasting rooms are scattered across farmland, so plan a route and a driver.' },
    { icon: '☕', title: 'Historic Downtown', area: 'Essendene Avenue', areaLevel: 'blue', text: 'The old main street holds most of the independent cafés, bakeries and restaurants. It is the one part of the city that works properly on foot.' },
    { icon: '🌽', title: 'Farm Stands', area: 'Back roads', areaLevel: 'olive', text: 'Unstaffed roadside stands with an honesty box are normal here. Carry small cash — many of them have no other way to pay.' },
  ],

  seasons: [
    { icon: '🌷', name: 'Spring', months: 'March — May', level: 'gold', rating: 5, note: 'Flower season', text: 'Daffodils then tulips, fields of them, with the valley at its greenest. Still wet, and the flower dates move with the weather every year — confirm before driving out.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Berries and the airshow', text: 'Warm, dry and long — U-pick season, farm stands, and the airshow in August. Hot spells can be sharp and most older housing has no air conditioning.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'olive', rating: 4, note: 'Harvest, then rain', text: 'The harvest end of the year, often with settled weather early on. The rain returns properly by late October, and with it the flood-watch season.' },
    { icon: '🌧️', name: 'Winter', months: 'November — February', level: 'blue', rating: 2, note: 'Wet and flood-prone', text: 'Mild, grey and persistently wet. Atmospheric rivers in November and December are a genuine hazard here, not a weather curiosity — the 2021 flood closed Highway 1 through the valley. Check DriveBC in heavy rain.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — Highway 1',
      text: 'Abbotsford sits on the Trans-Canada about seventy kilometres east of Vancouver, roughly an hour outside rush hour and considerably more inside it. Highway 11 runs north to Mission across the Fraser and south to the border. The highway crosses Sumas Prairie east of the city — the stretch that closed under water in November 2021.',
      time: '≈1h from Vancouver (≈70 km)',
    },
    {
      icon: '✈️',
      title: 'By Air — Abbotsford (YXX)',
      text: 'A real airport in the middle of the city, used mainly by low-cost carriers for domestic routes. For some trips it is cheaper and far quicker to get through than Vancouver, and parking is a fraction of the price. Route choice is limited, so compare both airports.',
      time: 'In the city · 10 min from downtown',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'The FVX (route 66) links Abbotsford to the Carvolth exchange in Langley, where TransLink buses continue to the SkyTrain — the practical transit route in from Vancouver. Intercity coaches also serve the city. Plan on a transfer either way.',
      time: '≈1h45m from Vancouver via Carvolth',
    },
    {
      icon: '🛂',
      title: 'From the United States',
      text: 'The Huntingdon crossing on Highway 11 sits at the south edge of the city, opposite Sumas, Washington. It is usually far quieter than the Peace Arch, which is why people from Vancouver sometimes drive out to use it. Check current wait times either way.',
      time: '≈10 min from the city centre',
    },
  ],

  stay: [
    {
      icon: '🛒',
      title: 'Clearbrook & South Fraser Way',
      area: 'Most choice · Car needed',
      text: 'Where most of the hotels are, along the main commercial strip and close to the airport. Convenient rather than charming.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Abbotsford+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Abbotsford%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Historic Downtown',
      area: 'Walkable · Limited rooms',
      text: 'Fewer beds, but the one area where you can leave the car and walk to dinner. Book early in airshow week — the whole city fills.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Abbotsford+BC', level: 'blue' },
      ],
    },
    {
      icon: '🌾',
      title: 'Farm Stays & Harrison',
      area: 'Rural · Further out',
      text: 'The valley has farm guesthouses, and Harrison Hot Springs is about an hour further east if you want the resort end of the Fraser Valley.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fraser+Valley+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Central Fraser Valley Transit (BC Transit)',
      text: 'Abbotsford is not on the TransLink system — Compass cards and Metro Vancouver fares do not apply here. The local network is BC Transit’s Central Fraser Valley system, covering Abbotsford and Mission, plus the FVX express to Langley. It serves the main corridors reasonably and the farmland barely at all; outside the built-up core, this is a car city.',
      linkLabel: 'BC Transit — Central Fraser Valley',
      linkUrl: 'https://www.bctransit.com/central-fraser-valley/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app, a reloadable Umo card or contactless. Note that fares and products changed on 6 September 2026 and BC Transit’s own fares page does not state an effective date — treat the figures below as a guide and confirm the current price before you ride.',
        fareBox: {
          label: 'Listed fares',
          lines: ['Single ride: $2.75', 'FVX single ride: $5', 'DayPASS: $5.50', '30-day adult pass: $59', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍',
        title: 'Key Routes',
        text: 'Local routes radiate from the Bourquin and Highstreet exchanges across Abbotsford and over the river to Mission. The FVX is the one that matters for visitors without a car — it is the link towards Metro Vancouver.',
        fareBox: {
          label: 'Useful routes',
          lines: ['66 FVX — Abbotsford to Carvolth (Langley)', '2 — Bourquin to Clearbrook', '12 — McKee', '31/32 — Mission connections'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/central-fraser-valley/schedules-and-maps',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Rental Car', text: 'Effectively required to see the farmland, Clayburn, Bradner or the mountain trailheads. Parking across the city is easy and mostly free.' },
          { icon: '✈️', title: 'Airport Access', text: 'YXX is inside the city, so a taxi from most hotels is short. Transit to the airport exists but is infrequent — check the schedule rather than assuming.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Both operate, though coverage thins in the rural areas and late at night.' },
          { icon: '🚲', title: 'Discovery Trail', text: 'The city’s multi-use path makes cycling between the central neighbourhoods genuinely practical. The farm roads beyond are flat but carry fast traffic.' },
        ],
      },
    ],
    proTip: {
      label: 'Airport tip:',
      text: 'If you are flying domestically, price Abbotsford (YXX) against Vancouver (YVR) before booking. The security line is a different world, parking is cheap, and for Fraser Valley destinations it saves an hour of driving at each end.',
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
      { label: 'BC / Abbotsford', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
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
      { icon: '🚲', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%. Farm stands and honesty boxes are not tipped — pay the posted price.',
  },

  practical: [
    { icon: '🌊', title: 'Flood Season', text: 'November and December bring atmospheric rivers to this valley, and Sumas Prairie sits below sea level behind dikes. The 2021 flood cut Highway 1 and evacuated about 1,100 homes. In heavy rain, check DriveBC and the city’s emergency notices before travelling across the prairie.' },
    { icon: '☔', title: 'Rain Gear', text: 'From October to March, assume rain. Trails turn to mud and stay that way — waterproof boots are worth more here than a warm coat.' },
    { icon: '🚜', title: 'Working Farmland', text: 'Most of the pretty scenery is someone’s business. Stay on the road for photographs, do not enter fields, and expect slow farm machinery on the back roads.' },
    { icon: '🚌', title: 'Not TransLink', text: 'Compass cards do not work here — this is BC Transit territory, with separate fares and its own app. The FVX to Langley is the bridge between the two systems.' },
    { icon: '✈️', title: 'Airshow Week', text: 'In early August the airshow fills every hotel room in the city and jams the roads around the airport. Either plan around it or book months ahead.' },
    { icon: '⏰', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🪶', title: 'Whose Land', text: 'Abbotsford is on Stó:lō territory, and specifically the territories of the Semá:th (Sumas) and Máthxwi (Matsqui) First Nations. Semá:th X̲ó:tsa — the lake drained to make Sumas Prairie — was their main food source, and its loss is living history rather than background.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Abbotsford Regional Hospital', '32900 Marshall Road', 'Emergencies: call 911'] },
  ],
};

export default ABBOTSFORD;
