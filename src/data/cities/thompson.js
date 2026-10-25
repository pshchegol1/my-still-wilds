// Thompson — данные страницы /city/thompson (Томпсон, МАНИТОБА)
// Видео Томпсона в бесплатных банках нет (Pexels по "thompson manitoba"
// отдаёт только Законодательное собрание в Виннипеге).
// В шапке фото с Wikimedia Commons — мурал с волком на высотке Highland
// Tower (Spirit Way), автор Bobak Ha'Eri, май 2009, CC BY 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (13 035, муниципалитет).
// Городского автобуса нет с лета 2024 года (CBC; циркуляр Манитобы 2025).
// Мурал по картине Роберта Бейтмана — Travel Manitoba и сайт города.
// Больница — Northern Health Region.
// История с никелем Inco/Vale, водопады, Paint Lake — из общих знаний.

export const THOMPSON = {
  slug: 'thompson',
  name: 'Thompson',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Hub of the North',
  accentLevel: 'blue',
  heroIcon: '🐺',
  heroImage: '/Cities/Thompson/hero.jpg',
  heroCredit: 'Photo: Bobak Ha’Eri / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 55.7435, lon: -97.8558 },
  subtitle: 'Wolf City of the Boreal North',
  description:
    'Carved out of the boreal forest in the late 1950s around one of the world’s great nickel deposits, Thompson is the service centre for all of northern Manitoba. A ten-storey wolf watches over town from the side of an apartment tower, the Burntwood River winds past, and waterfalls, lakes and northern lights are a short drive away.',

  actions: [
    { label: 'Explore Thompson', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13K (2021)' },
    { label: 'Founded', value: 'Late 1950s (nickel)' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈740 km · ≈8 h' },
    { label: 'To Pisew Falls', value: '≈1 h by car' },
  ],

  badges: ['Northern Hub', 'Wolf Capital', 'Boreal Forest'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '13,035', label: 'People in the 2021 census — the largest city in northern Manitoba', level: 'blue' },
    { value: '10', label: 'Storeys tall — the lighted wolf mural based on a painting by Robert Bateman', level: 'gold' },
    { value: '2 km', label: 'Spirit Way, a walking and biking path celebrating the city’s bond with the wolf', level: 'purple' },
    { value: '0', label: 'City bus routes — local transit has been suspended since summer 2024', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'City Centre', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Shops, services and the main mall · Start of Spirit Way' },
    { name: 'Spirit Way', icon: '🐺', tag: '🐺 Walk', tagLevel: 'purple', meta: 'Path linking painted wolf sculptures, the wolf mural and lookouts' },
    { name: 'Burntwood Riverside', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Trails and views along the Burntwood River' },
    { name: 'Westwood & Eastwood', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Neighbourhoods built for mine families, surrounded by forest' },
    { name: 'Mine Site', icon: '⛏️', tag: '⛏️ Industry', tagLevel: 'caution', meta: 'The nickel operation the city was built for — not open to the public' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Gateway', tagLevel: 'olive', meta: 'Flights to Winnipeg and fly-in northern communities' },
  ],

  attractions: [
    {
      name: 'The Wolf Mural',
      icon: '🐺',
      text: 'A ten-storey painting of a wolf, reproduced from a work by wildlife artist Robert Bateman, covers the side of an apartment tower and is lit at night. Tourism sources call it the world’s largest lighted mural.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Icon', level: 'gold' }],
    },
    {
      name: 'Spirit Way',
      icon: '🚶',
      text: 'A 2 km walking and cycling path through town connecting painted wolf sculptures, the mural, a lookout and heritage displays.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Heritage North Museum',
      icon: '🏛️',
      text: 'A small museum in a log building about the region’s natural history, Indigenous heritage, fur trade and mining. Check opening hours.',
      tags: [{ label: 'Small fee', level: 'gold' }, { label: 'Indoor', level: 'purple' }],
    },
    {
      name: 'Pisew Falls',
      icon: '💦',
      text: 'One of Manitoba’s most spectacular waterfalls, where the Grass River plunges through a rocky gorge. A short boardwalk leads to viewing platforms. About an hour south on Highway 6.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Day trip', level: 'blue' }],
    },
    {
      name: 'Paint Lake Provincial Park',
      icon: '🏖️',
      text: 'A large lake with beaches, camping, boating and fishing about half an hour south of the city — Thompson’s summer playground.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Northern Lights',
      icon: '🌌',
      text: 'At 55° north, Thompson sees the aurora often on clear, dark nights from late August through April. Head just outside town, away from lights.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Clear nights', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Shield, Rivers and Boreal Forest',
  outdoor: [
    { icon: '🥾', name: 'Kwasitchewan Falls Trail', dist: 'From Pisew Falls', text: 'A long, rugged backcountry trail to Manitoba’s highest waterfall. For experienced hikers only — plan for an overnight.' },
    { icon: '🎣', name: 'Fishing', dist: 'Paint Lake · Burntwood River', text: 'Pike and walleye in summer, ice fishing in winter. A Manitoba licence is required.' },
    { icon: '🛶', name: 'Canoeing', dist: 'Grass & Burntwood rivers', text: 'Classic Canadian Shield paddling with portages and rapids — go with experience or a guide.' },
    { icon: '🏂', name: 'Winter Sports', dist: 'Around town', text: 'Cross-country skiing, snowshoeing and snowmobile trails through the forest.' },
    { icon: '🦌', name: 'Wildlife', dist: 'Boreal forest', text: 'Moose, black bears, foxes and the wolves the city celebrates. Keep your distance.' },
    { icon: '🌌', name: 'Aurora Watching', dist: 'Outside town', text: 'Dark skies just minutes from the city.' },
  ],

  food: [
    { icon: '🐟', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Pickerel (walleye) and other fish from northern lakes.' },
    { icon: '🍔', title: 'Diners & Family Restaurants', area: 'City Centre', areaLevel: 'gold', text: 'Hearty comfort food for mine workers and travellers.' },
    { icon: '🫓', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread, often served at gatherings and festivals.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'purple', text: 'Blueberries and other wild berries in the forest around town.' },
    { icon: '☕', title: 'Coffee Shops', area: 'Downtown', areaLevel: 'olive', text: 'Warm-up stops for long northern winters.' },
    { icon: '🛒', title: 'Groceries', area: 'Regional hub', areaLevel: 'safe', text: 'Thompson stocks supplies for many fly-in communities; prices are higher than in the south.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late thaw', text: 'Snow lasts into April and lakes stay icy into May. Black flies arrive in late spring.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Long days', text: 'Warm days and very long evenings — best for waterfalls, beaches and paddling. Bring bug spray.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Aurora season', text: 'Golden aspen and birch, few bugs and darker nights for the northern lights.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Deep cold', text: 'Long, very cold winters with deep snow — but clear nights for aurora and great snowmobiling.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Thompson Airport (YTH) has regular flights to Winnipeg and onward to northern communities.',
      time: 'Daily flights from Winnipeg',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Provincial Highway 6 runs north from Winnipeg through long stretches of forest with few services. Fill up wherever you can and carry winter gear.',
      time: '≈8 h from Winnipeg',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Winnipeg–Churchill train serves Thompson a couple of times a week. It is slow and often late — check the schedule with VIA.',
      time: 'About a day from Winnipeg',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity buses connect Thompson with Winnipeg. Check current operators and schedules.',
      time: '≈9–10 h',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'City Centre',
      area: 'Near services',
      text: 'Hotels and motels within walking distance of shops and Spirit Way.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Thompson+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Thompson%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Paint Lake',
      area: 'Lake & camping',
      text: 'Campgrounds and cabins at the provincial park, half an hour south.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '💦',
      title: 'Pisew Falls',
      area: 'Rustic',
      text: 'Basic camping for hikers heading to Kwasitchewan Falls.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕',
      title: 'No City Buses',
      text: 'Thompson has had no local bus service since summer 2024, when the city’s transit contract ended. Plan to get around by taxi, car or on foot.',
      linkLabel: 'City of Thompson',
      linkUrl: 'https://thompson.ca/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis',
        text: 'Local taxi companies serve the city and the airport. Fares are by meter or set price — ask before you ride.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: available', 'Car rental: at the airport', 'Walking: compact centre'],
        },
        linkLabel: 'City transportation info',
        linkUrl: 'https://thompson.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The city centre and Spirit Way are walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Spirit Way and local trails in summer.' },
          { icon: '🚗', title: 'Car', text: 'Essential for Pisew Falls, Paint Lake and aurora trips.' },
          { icon: '🚕', title: 'Taxi', text: 'The main option without a car.' },
        ],
      },
    ],
    proTip: {
      label: 'Road tip:',
      text: 'Highway 6 has long gaps between gas stations and little cell coverage. Top up the tank, carry water and a blanket, and watch for moose at dusk.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Thompson / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
      { icon: '⛽', label: 'Fuel: taxes included in the pump price' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🐺', label: 'Spirit Way & wolf mural: free' },
      { icon: '💦', label: 'Pisew Falls: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🚕', title: 'No Buses', text: 'There is no city transit — book taxis ahead at busy times or rent a car at the airport.' },
    { icon: '🛣️', title: 'Remote Roads', text: 'Highway 6 is long and isolated. Check road conditions in winter and travel in daylight if you can.' },
    { icon: '❄️', title: 'Extreme Cold', text: 'Winter temperatures often drop below −30 °C. Dress for frostbite risk and keep a winter kit in the car.' },
    { icon: '🦟', title: 'Bugs', text: 'Black flies and mosquitoes are intense in June and July — bring repellent and a head net for trails.' },
    { icon: '🐻', title: 'Wildlife', text: 'Black bears and wolves live around town. Never feed wildlife, and store food securely when camping.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Thompson is on Treaty 5 territory, the traditional lands of the Cree (Ininew) people; Nisichawayasihk Cree Nation is among the First Nations of the region.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Thompson General Hospital', '871 Thompson Drive South', 'Emergency 24/7 · call 911'] },
  ],
};

export default THOMPSON;
