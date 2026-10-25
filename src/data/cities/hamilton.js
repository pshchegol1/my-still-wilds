// Hamilton — данные страницы /city/hamilton
// В шапке ролик с Pixabay (Pixabay Content License, атрибуция не
// требуется), автор A-Trivial-Wanderer, теги Pier 4, Hamilton, Ontario.
// На кадрах марина и мыс с большим канадским флагом в западной гавани,
// за водой лесистый северный берег. Уникального ориентира (Skyway,
// заводы) в кадре нет — место подтверждено тегами автора и тем, что
// вид с ними не расходится. 15 с, пережат с 10,9 до ~5,9 МБ; постер —
// первый кадр. Прежнее фото водопада Вебстера (Laslovarga, Commons,
// CC BY-SA 4.0) — запасной вариант.
// Население — городской отчёт за 2025 год (640 465). Тарифы HSR —
// с изменения 1 сентября 2025; данных о 2026 не нашлось.
// Stelco в сентябре 2026 остановила часть производства в Гамильтоне
// из-за пошлин США — это текущий контекст города, он на странице.

export const HAMILTON = {
  slug: 'hamilton',
  name: 'Hamilton',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Head of Lake Ontario',
  accentLevel: 'gold',
  heroIcon: '💧',
  heroImage: '/Cities/Hamilton/hero-poster.jpg',
  heroVideo: '/Cities/Hamilton/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.2557, lon: -79.8711 },
  subtitle: 'Steel Town Under the Waterfalls',
  description:
    'A working harbour city at the western tip of Lake Ontario, split in two by the Niagara Escarpment — the lower city by the water, the upper city on “the Mountain”. Steel built it. The escarpment gives it something no other Canadian city has: well over a hundred waterfalls inside the city limits.',

  actions: [
    { label: 'Explore Hamilton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈640K' },
    { label: 'Waterfalls', value: '100+' },
    { label: 'Escarpment', value: '“The Mountain”' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈70 km · 1h' },
    { label: 'To Niagara Falls', value: '≈70 km · 1h' },
  ],

  badges: ['Waterfall City', 'Steel Town', 'Dish With One Spoon'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '100+', label: 'Waterfalls within the city — counts run from about 130 to 156, depending on who counts and when', level: 'blue' },
    { value: '1964', label: 'The very first Tim Hortons opens on Ottawa Street North — the rebuilt store has a small free museum', level: 'gold' },
    { value: '2026', label: 'Stelco idles finishing lines at Hamilton Works over US tariffs, putting hundreds of steel jobs at risk', level: 'danger' },
    { value: '1,100 ha', label: 'Royal Botanical Gardens — Canada’s largest botanical garden, on the Hamilton–Burlington line', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & James Street North', icon: '🎨', tag: '🎨 Arts strip', tagLevel: 'gold', meta: 'Galleries, cafés and bars · Monthly art crawl · Art Gallery of Hamilton' },
    { name: 'Hess Village', icon: '🍻', tag: '🍻 Nightlife', tagLevel: 'purple', meta: 'Patios and pubs in old houses · Loud on weekends' },
    { name: 'Locke Street', icon: '☕', tag: '☕ Shops', tagLevel: 'safe', meta: 'Independent shops, bakeries and brunch · Walkable · Near the escarpment stairs' },
    { name: 'West Harbour & Bayfront', icon: '⚓', tag: '⚓ Waterfront', tagLevel: 'blue', meta: 'Bayfront Park · Pier 4 · Waterfront trail · West Harbour GO station' },
    { name: '“The Mountain”', icon: '⛰️', tag: '⛰️ Upper city', tagLevel: 'olive', meta: 'Residential plateau above the escarpment · Brow viewpoints over the city' },
    { name: 'Dundas', icon: '💧', tag: '💧 West', tagLevel: 'danger', meta: 'Small-town main street · Webster’s and Tew’s Falls · Dundas Peak' },
  ],

  attractions: [
    {
      name: 'Webster’s & Tew’s Falls',
      icon: '💧',
      text: 'The most famous pair of Hamilton’s waterfalls, in the Spencer Gorge above Dundas: Webster’s is wide and curtain-like with a stone footbridge above it, Tew’s is tall and narrow in a deep amphitheatre. The trail between them leads to Dundas Peak, the classic autumn view. On busy weekends access is managed by reservation and parking fees — check the conservation authority before going.',
      tags: [{ label: 'Book on weekends', level: 'caution' }, { label: 'Iconic', level: 'gold' }],
    },
    {
      name: 'Albion Falls & the Escarpment',
      icon: '⛰️',
      text: 'A broad, stepped cascade on the east Mountain, and a reminder that these falls are dangerous: people have been injured and killed scrambling off-trail on the wet escarpment rock. Stay on marked paths and behind fences. Dozens of smaller falls along the Bruce Trail are quieter and just as good.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Stay on trail', level: 'danger' }],
    },
    {
      name: 'Royal Botanical Gardens',
      icon: '🌷',
      text: 'Canada’s largest botanical garden, about 1,100 hectares of gardens, marshes and trails straddling Hamilton and Burlington. The lilac and rose gardens peak in late spring and early summer; the nature sanctuaries are worth as much time as the formal beds.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Spring peak', level: 'safe' }],
    },
    {
      name: 'Canadian Warplane Heritage Museum',
      icon: '✈️',
      text: 'A hangar of historic aircraft at the airport, including an Avro Lancaster bomber that still flies — one of only two airworthy in the world. Flights in it are offered in season at a high price; just watching it run up is memorable.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Dundurn Castle',
      icon: '🏰',
      text: 'An Italianate villa built in the 1830s for Sir Allan MacNab, later a premier of the Province of Canada, on a hill above the harbour. Costumed tours of the house and the servants’ quarters below stairs.',
      tags: [{ label: 'Paid tours', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Tim Hortons Store No. 1',
      icon: '🍩',
      text: 'The chain began here on 17 May 1964, in a converted garage on Ottawa Street North. The rebuilt store has a free museum upstairs. Pure pilgrimage — but it is also on a good street of fabric and textile shops.',
      tags: [{ label: 'Free museum', level: 'safe' }, { label: 'Quick stop', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Escarpment, Gorge and Harbour',
  outdoor: [
    { icon: '🥾', name: 'Bruce Trail', dist: 'Across the city', text: 'Canada’s oldest long-distance footpath runs right through Hamilton along the escarpment, linking waterfalls, lookouts and forest. Easy to walk a section without leaving the city.' },
    { icon: '🪜', name: 'Escarpment Stairs', dist: 'Downtown to the Mountain', text: 'Long public staircases climb the escarpment from the lower city — a free, brutal workout with a view at the top.' },
    { icon: '🚴', name: 'Rail Trails', dist: 'East and west', text: 'Former railway lines turned flat trails run across the city and into the countryside, good for cycling and long walks.' },
    { icon: '🛶', name: 'Hamilton Harbour', dist: 'Bayfront', text: 'Paddling and a waterfront trail around the west harbour. The harbour is still recovering from a century of industry, and a major clean-up of contaminated sediment is under way.' },
    { icon: '🍂', name: 'Fall Colours', dist: 'Spencer Gorge · Dundas Peak', text: 'October colour along the escarpment is spectacular and very popular. Go on a weekday or early in the morning.' },
    { icon: '⚠️', name: 'Waterfall Safety', dist: 'Everywhere', text: 'Escarpment rock is wet, loose and slippery. Never climb on falls or go past fences; rescues happen every year.' },
  ],

  food: [
    { icon: '🍽️', title: 'James Street North', area: 'Downtown', areaLevel: 'gold', text: 'The best concentration of restaurants and cafés, many opened as artists and young families moved in from Toronto.' },
    { icon: '🥐', title: 'Locke Street', area: 'West downtown', areaLevel: 'safe', text: 'Bakeries, brunch spots and small restaurants along a walkable shopping street.' },
    { icon: '🍺', title: 'Craft Beer', area: 'City-wide', areaLevel: 'purple', text: 'A strong brewery scene, much of it in former industrial buildings.' },
    { icon: '🧺', title: 'Hamilton Farmers’ Market', area: 'Downtown', areaLevel: 'olive', text: 'An indoor market downtown with a long history and Niagara-region produce. Check current days before going.' },
    { icon: '🍩', title: 'Tim Hortons No. 1', area: 'Ottawa Street North', areaLevel: 'danger', text: 'Coffee and a doughnut where the chain started, if only to say you did.' },
    { icon: '🍑', title: 'Fruit Belt', area: 'East toward Niagara', areaLevel: 'blue', text: 'Orchards and farm stands along the escarpment east of the city in summer.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'Falls at full flow', text: 'Snowmelt and spring rain make the waterfalls their most powerful. Lilacs bloom at the Botanical Gardens in late May. Trails are muddy.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Thin falls, warm harbour', text: 'Many smaller falls slow to a trickle in dry spells, but the big ones keep going. Hot and humid; festivals and art crawls downtown.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours on the escarpment', text: 'Peak colour in October along the gorge and the Bruce Trail. Busy at the famous falls — book where required.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Frozen falls', text: 'Grey and slushy in the lower city, but frozen waterfalls can be striking. Escarpment trails are icy and dangerous — microspikes or stay off.' },
  ],

  gettingThere: [
    {
      icon: '🚆',
      title: 'By GO Transit',
      text: 'GO trains and buses on the Lakeshore West corridor link Hamilton with Toronto’s Union Station, at West Harbour and the downtown GO Centre. Service frequency varies by time of day; check GO Transit.',
      time: '≈1–1.5h from Union Station',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The QEW and Highway 403 from Toronto, often congested at rush hour. Hamilton sits between Toronto and Niagara, so it pairs easily with a Niagara trip.',
      time: '≈1h from Toronto',
    },
    {
      icon: '✈️',
      title: 'By Air — Hamilton (YHM)',
      text: 'John C. Munro Hamilton International Airport on the Mountain, mainly with low-cost and seasonal flights. Toronto Pearson (YYZ) is the main hub, about an hour away.',
      time: '≈20 min from downtown',
    },
    {
      icon: '🚌',
      title: 'From Niagara',
      text: 'Drive the QEW around the lake, or combine GO services. Many visitors base in Hamilton for Niagara day trips.',
      time: '≈1h to Niagara Falls',
    },
  ],

  stay: [
    {
      icon: '🎨',
      title: 'Downtown',
      area: 'Walkable · Central',
      text: 'Close to James Street North, Hess Village and the GO Centre. Mixed blocks — some streets are rough at night.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Hamilton+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Hamilton%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '💧',
      title: 'Dundas',
      area: 'Small-town · Near the falls',
      text: 'Inns and short-term rentals in the west end, close to Webster’s Falls and the gorge trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dundas+Ontario', level: 'blue' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Burlington Edge',
      area: 'Car-friendly · Near RBG',
      text: 'Hotels just across the city line by the Botanical Gardens and the highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Burlington+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'HSR — Hamilton Street Railway',
      text: 'City buses run across the lower city and up the Mountain. A light-rail line along Main and King streets is under construction; early civil works began in 2026, and no opening date has been announced. Expect closures and detours on the LRT corridor — Main and Ottawa streets close for about four months from 17 August 2026.',
      linkLabel: 'HSR',
      linkUrl: 'https://www.hamilton.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below took effect 1 September 2025; we did not find a 2026 change. You can tap a credit card or phone for the adult fare, or use Presto. Children 12 and under ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Presto / tap: $2.70', 'Cash: $3.50', 'Monthly pass: $118.80', 'Children 12 and under: free'],
        },
        linkLabel: 'HSR fares',
        linkUrl: 'https://www.hamilton.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Needed for the falls and the conservation areas; book parking at the popular ones.' },
          { icon: '🚲', title: 'Bike Share', text: 'Hamilton has a city bike-share system for the lower city.' },
          { icon: '🚆', title: 'GO Transit', text: 'For Toronto and Burlington; separate fares from HSR.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, James North, Locke and the waterfront are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Waterfall tip:',
      text: 'Visit the famous falls on a weekday morning in spring. Flow is strongest, crowds are smallest, and weekend reservation systems usually are not in force.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels charge Hamilton’s 4% Municipal Accommodation Tax, and since 1 July 2026 short-term rentals do too, for stays of 29 nights or less. HST is also charged on the accommodation tax itself.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Hamilton / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels and short-term rentals: 13% HST + 4% MAT' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', label: 'Museum and garden admission: 13% HST' },
    ],
    exempt: [
      { icon: '💧', label: 'Most waterfalls and trails: free (some parking fees)' },
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '🛏️', label: 'Stays of 30+ nights: no MAT' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⚠️', title: 'Waterfall Safety', text: 'The escarpment kills people. Stay on marked trails, respect fences, and never climb on the falls — especially in wet or icy conditions.' },
    { icon: '🅿️', title: 'Book the Popular Falls', text: 'Webster’s, Tew’s and Dundas Peak have managed access and parking fees on busy days. Check the Hamilton Conservation Authority before driving out.' },
    { icon: '🚧', title: 'LRT Construction', text: 'Main and King streets are being dug up for the light rail. Allow extra time downtown and check detours.' },
    { icon: '🏭', title: 'A Working City', text: 'Steel still matters here. In 2026 US tariffs pushed Stelco to idle finishing lines at Hamilton Works, with hundreds of jobs affected. It is part of the city you are visiting.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Tap a credit card or phone on HSR buses for the adult fare, or use Presto.' },
    { icon: '🪶', title: 'Whose Land', text: 'Hamilton is within the lands protected by the Dish With One Spoon wampum, an agreement between the Haudenosaunee and Anishinaabek to share the land, and is covered by the Between the Lakes Purchase of 1792 with the Mississaugas of the Credit. The city acknowledges the Erie, Neutral, Huron-Wendat, Haudenosaunee and Mississaugas as its traditional peoples.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hamilton General Hospital', '237 Barton Street East', 'Emergencies: call 911'] },
  ],
};

export default HAMILTON;
