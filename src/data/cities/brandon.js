// Brandon — данные страницы /city/brandon (Брандон, МАНИТОБА)
// Видео Брандона в бесплатных банках нет (Pexels по "brandon manitoba"
// не отдаёт ни одного ролика из Брандона).
// В шапке фото с Wikimedia Commons — панорама центра со зданием McKenzie
// Seeds, автор MBBrdn, август 2026, CC0 (подпись не обязательна, но
// указана для единообразия).
// Население — перепись 2021 года (51 313; brandon.ca).
// Тарифы Brandon Transit — циркуляр правительства Манитобы 2025-25
// (официальную страницу 2026 найти не удалось — на странице «уточняйте»).
// Налог на проживание 5% с 1 июля 2023 (By-law 7355, brandon.ca).
// Больница — список учреждений Манитобы.
// Музеи, Riverbank, Spruce Woods, McKenzie Seeds — из общих знаний.

export const BRANDON = {
  slug: 'brandon',
  name: 'Brandon',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · The Wheat City',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/Brandon/hero.jpg',
  heroCredit: 'Photo: MBBrdn / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.8485, lon: -99.9501 },
  subtitle: 'Heart of the Western Prairie',
  description:
    'Manitoba’s second city grew up on the Assiniboine River as a grain and railway centre — hence its nickname, the Wheat City. Today Brandon is a university and farm-show town with a riverside trail network, a museum in a wartime air-training hangar, and quick access to the sand dunes of Spruce Woods and the forests of Riding Mountain.',

  actions: [
    { label: 'Explore Brandon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈51K (2021)' },
    { label: 'Rank in Manitoba', value: '2nd largest' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈2 h 15 min by car' },
    { label: 'To Spruce Woods', value: '≈45 min by car' },
  ],

  badges: ['Wheat City', 'Assiniboine River', 'Prairie Hub'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '51,313', label: 'People in the 2021 census — Manitoba’s second-largest city', level: 'blue' },
    { value: '5%', label: 'City accommodation tax on hotel rooms since July 1, 2023, on top of GST and RST', level: 'purple' },
    { value: '1', label: 'Wartime air-training base turned museum, with vintage aircraft in its original hangars', level: 'gold' },
    { value: '$2', label: 'A Brandon Transit bus ride in cash (2025 fare)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Rosser Avenue', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Heritage brick buildings · Cafés and shops · McKenzie Seeds building' },
    { name: 'Riverbank', icon: '🌊', tag: '🌊 River', tagLevel: 'blue', meta: 'Riverbank Discovery Centre · Trails along the Assiniboine' },
    { name: 'University District', icon: '🎓', tag: '🎓 Campus', tagLevel: 'purple', meta: 'Brandon University · Older tree-lined streets' },
    { name: 'Keystone Centre Area', icon: '🐄', tag: '🐄 Events', tagLevel: 'danger', meta: 'Arena and fairgrounds — home of the Royal Manitoba Winter Fair' },
    { name: 'North Hill', icon: '🛒', tag: '🛒 Shopping', tagLevel: 'olive', meta: 'Big-box stores and hotels along the Trans-Canada' },
    { name: 'South End', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Newer neighbourhoods and parks' },
  ],

  attractions: [
    {
      name: 'Commonwealth Air Training Plan Museum',
      icon: '✈️',
      text: 'Housed in original Second World War hangars at the airport, this museum tells the story of the plan that trained Allied aircrews across Canada, with restored aircraft on display.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Aviation', level: 'blue' }],
    },
    {
      name: 'Riverbank Discovery Centre',
      icon: '🌊',
      text: 'Brandon’s visitor centre on the Assiniboine, gateway to kilometres of riverside walking and cycling trails.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Trails', level: 'blue' }],
    },
    {
      name: 'Daly House Museum',
      icon: '🏛️',
      text: 'A restored Victorian home of Brandon’s first mayor, showing life in the city’s early days.',
      tags: [{ label: 'Small fee', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Royal Manitoba Winter Fair',
      icon: '🐎',
      text: 'One of Canada’s big agricultural fairs, held each spring at the Keystone Centre with horse shows, livestock and family events. Check dates.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Art Gallery of Southwestern Manitoba',
      icon: '🖼️',
      text: 'A downtown public gallery showing regional and Canadian contemporary art.',
      tags: [{ label: 'Free or low cost', level: 'safe' }, { label: 'Indoor', level: 'purple' }],
    },
    {
      name: 'Spruce Woods Provincial Park',
      icon: '🏜️',
      text: 'East of Brandon, the Spirit Sands are open sand dunes in the middle of the prairie — a surprising desert-like hike. Bring water and avoid midday heat.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Park pass', level: 'caution' }],
    },
  ],

  outdoorHeading: 'River Valley and Sand Hills',
  outdoor: [
    { icon: '🚶', name: 'Assiniboine Riverbank Trails', dist: 'In the city', text: 'Paved and natural trails through the river valley.' },
    { icon: '🏜️', name: 'Spirit Sands', dist: '≈45 min east', text: 'Dunes and the Devil’s Punch Bowl in Spruce Woods Provincial Park.' },
    { icon: '🛶', name: 'Assiniboine Paddling', dist: 'Spruce Woods', text: 'A gentle river canoe route through the park.' },
    { icon: '🦬', name: 'Riding Mountain', dist: '≈1 h 15 min north', text: 'National park with bison, lakes and the resort village of Wasagaming.' },
    { icon: '⛷️', name: 'Winter Trails', dist: 'Valley & parks', text: 'Cross-country skiing and skating when the snow arrives.' },
    { icon: '🐦', name: 'Birding', dist: 'River valley', text: 'Migrating songbirds and waterfowl in spring and fall.' },
  ],

  food: [
    { icon: '🥟', title: 'Perogies & Kubasa', area: 'Local diners', areaLevel: 'gold', text: 'Prairie Ukrainian and Polish comfort food.' },
    { icon: '🥩', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'danger', text: 'Local beef in a farm-country city.' },
    { icon: '☕', title: 'Downtown Cafés', area: 'Rosser Avenue', areaLevel: 'olive', text: 'Independent coffee shops in heritage buildings.' },
    { icon: '🍻', title: 'Craft Beer', area: 'City-wide', areaLevel: 'purple', text: 'Local brewpubs and taprooms.' },
    { icon: '🥘', title: 'World Flavours', area: 'City-wide', areaLevel: 'blue', text: 'A growing immigrant community brings Latin American, Asian and African restaurants.' },
    { icon: '🌾', title: 'Farmers’ Market', area: 'Summer', areaLevel: 'safe', text: 'Local produce, baking and honey in season.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Fair season', text: 'The Winter Fair arrives in spring; the river can run high during the melt.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Long days', text: 'Hot and sunny — great for the dunes (early morning) and riverside trails.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden fields, crisp days and colour in the river valley.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Cold prairie winters with strong winds and blowing snow.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes the north edge of the city. Winnipeg is east, Regina is west; Highway 10 runs north to Riding Mountain.',
      time: '≈2 h 15 min from Winnipeg',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Brandon Municipal Airport (YBR) has limited scheduled service. Most travellers fly into Winnipeg (YWG).',
      time: 'Limited service',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches link Brandon with Winnipeg and other prairie towns. Check current operators.',
      time: '≈2 h 30 min from Winnipeg',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s transcontinental train passes through the region, stopping at nearby Rivers rather than Brandon. Check VIA for current stops.',
      time: 'Check VIA Rail',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'North Hill / Trans-Canada',
      area: 'Highway hotels',
      text: 'Most hotels cluster along 18th Street and the Trans-Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Brandon+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Brandon%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few hotels near Rosser Avenue and the Riverbank trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Brandon+Manitoba', level: 'blue' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Spruce Woods',
      area: 'Camping',
      text: 'Campgrounds and yurts in the provincial park.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Brandon Transit',
      text: 'The city runs Brandon Transit, a local bus network linking downtown, the university, shopping areas and residential districts. Service is reduced in the evenings and on Sundays.',
      linkLabel: 'City of Brandon',
      linkUrl: 'https://www.brandon.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are 2025 adult fares from a Government of Manitoba circular; we could not confirm 2026 prices — check with the City of Brandon before you travel.',
        fareBox: {
          label: 'Adult (2025)',
          lines: ['Cash: $2.00', '10 rides: $18.00', '30-day pass: $98.00', 'SMART card: $3.50'],
        },
        linkLabel: 'City of Brandon',
        linkUrl: 'https://www.brandon.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way around a spread-out city.' },
          { icon: '🚲', title: 'Bike', text: 'Riverbank trails in summer.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact.' },
        ],
      },
    ],
    proTip: {
      label: 'Dune tip:',
      text: 'Hike the Spirit Sands early in the morning — the open sand gets very hot by midday in July and August.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel rooms in Brandon also carry the City’s 5% accommodation tax (since July 1, 2023), charged on the room rate only.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Brandon / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST + 5% city accommodation tax' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🛎️', label: 'Hotel extras (pets, late checkout): no city accommodation tax' },
      { icon: '🌊', label: 'Riverbank trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌬️', title: 'Prairie Wind', text: 'Strong winds are common; winter wind chill makes it feel much colder than the thermometer says.' },
    { icon: '🏜️', title: 'Dune Safety', text: 'Carry plenty of water on the Spirit Sands — there is little shade.' },
    { icon: '🦟', title: 'Bugs & Ticks', text: 'Mosquitoes in summer and wood ticks in late spring along the trails.' },
    { icon: '🌊', title: 'River Levels', text: 'The Assiniboine can flood in wet springs; riverside trails sometimes close.' },
    { icon: '🎟️', title: 'Fair Week', text: 'Hotels fill during the Winter Fair and big Keystone Centre events — book ahead.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Brandon is on Treaty 2 territory, the traditional lands of the Dakota, Anishinaabe and Cree peoples, and the homeland of the Red River Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Brandon Regional Health Centre', '150 McTavish Ave E', 'Emergencies: call 911'] },
  ],
};

export default BRANDON;
