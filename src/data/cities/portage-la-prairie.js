// Portage la Prairie — данные страницы /city/portage-la-prairie (МАНИТОБА)
// Видео Портидж-ла-Прери в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — голландская мельница в Island Park
// на Crescent Lake, автор Shahnoor Habib Munmun, CC BY 3.0 — лицензия
// требует автора, отсюда heroCredit. Мельница 1950-х — Travel Manitoba.
// Население — перепись 2021 года (13 270).
// Городского автобуса нет (было только ТЭО транзита, WSP 2021).
// Больница: новое здание на Crescent Rd / River Rd достроено, открытие
// перенесено на осень 2026 (Southern Health) — на странице «уточняйте»;
// действующий адрес — 524 5th St SE.
// Банка Coca-Cola (бывшая водонапорная башня) — Travel Manitoba.
// Fort la Reine, Delta Marsh, поезда VIA — из общих знаний.

export const PORTAGE_LA_PRAIRIE = {
  slug: 'portage-la-prairie',
  name: 'Portage la Prairie',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Central Plains',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/PortageLaPrairie/hero.jpg',
  heroCredit: 'Photo: Shahnoor Habib Munmun / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.9728, lon: -98.2926 },
  subtitle: 'The Island City of the Prairie',
  description:
    'Named for the old portage between the Assiniboine River and Lake Manitoba, Portage la Prairie is a farm city an hour west of Winnipeg wrapped around a crescent-shaped oxbow lake. Its island park, Dutch-style windmill and pioneer museum make an easy stop on the Trans-Canada, and Delta Marsh on Lake Manitoba draws birders from far away.',

  actions: [
    { label: 'Explore Portage', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13.3K (2021)' },
    { label: 'Region', value: 'Central Plains' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈1 h by car' },
    { label: 'To Delta Marsh', value: '≈30 min by car' },
  ],

  badges: ['Island Park', 'Farm Country', 'Trans-Canada Stop'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '13,270', label: 'People in the 2021 census — a farm and food-processing hub west of Winnipeg', level: 'blue' },
    { value: '1950s', label: 'Decade the Dutch-style windmill was built in Island Park', level: 'gold' },
    { value: '1', label: 'Oxbow lake — Crescent Lake — curls around Island Park in the middle of the city', level: 'purple' },
    { value: '2026', label: 'A new regional hospital is finished, with opening set for fall 2026', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Island Park', icon: '🌳', tag: '🌳 Heart', tagLevel: 'safe', meta: 'Park inside Crescent Lake · Windmill · Water park · Deer and waterfowl sanctuary' },
    { name: 'Saskatchewan Avenue', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Main street with heritage buildings, shops and cafés' },
    { name: 'Crescent Lake Shore', icon: '🌊', tag: '🌊 Lake', tagLevel: 'blue', meta: 'Walking path with historical signs around the lake' },
    { name: 'Trans-Canada Strip', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'olive', meta: 'Hotels, restaurants and fuel along Highway 1' },
    { name: 'Fort la Reine Area', icon: '🏚️', tag: '🏚️ Heritage', tagLevel: 'purple', meta: 'Pioneer museum village on the east edge of the city' },
    { name: 'Poplar Bluff', icon: '🏭', tag: '🏭 Industry', tagLevel: 'caution', meta: 'Food-processing plants that turn local potatoes and peas into products' },
  ],

  attractions: [
    {
      name: 'Island Park & Crescent Lake',
      icon: '🌳',
      text: 'An oxbow lake curls around a large island park in the centre of town, with a walking path, playground, bandshell, arboretum, outdoor water park and a deer and waterfowl sanctuary.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Dutch-Style Windmill',
      icon: '🌬️',
      text: 'A wooden windmill built in the 1950s on the shore of Crescent Lake — the classic photo stop, especially in autumn colour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
    },
    {
      name: 'Fort la Reine Museum',
      icon: '🏚️',
      text: 'A pioneer village museum with historic buildings, a railway car and farm machinery, named after the French fur-trade post built near here in the 1700s. Seasonal.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Delta Marsh',
      icon: '🐦',
      text: 'One of the largest freshwater marshes in North America, on the south shore of Lake Manitoba. Spectacular during spring and fall bird migration.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
    },
    {
      name: 'Giant Coke Can',
      icon: '🥫',
      text: 'Billed as the World’s Largest Coca-Cola Can — a former water tower turned into a giant can, in a hotel parking lot by the highway. A quick, quirky photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Roadside', level: 'danger' }],
    },
    {
      name: 'Saskatchewan Avenue',
      icon: '🏛️',
      text: 'The downtown main street, with early-1900s buildings, local shops and places to eat.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'olive' }],
    },
  ],

  outdoorHeading: 'Lake, Marsh and Prairie',
  outdoor: [
    { icon: '🐦', name: 'Delta Marsh Birding', dist: '≈30 min north', text: 'Waterfowl, songbirds and shorebirds by the thousands in spring and fall.' },
    { icon: '🚶', name: 'Crescent Lake Path', dist: 'In town', text: 'An easy loop around the lake with historical signs.' },
    { icon: '🏖️', name: 'Lake Manitoba Beaches', dist: '≈30 min north', text: 'Delta Beach and other shoreline spots on a huge prairie lake.' },
    { icon: '🛶', name: 'Paddling', dist: 'Crescent Lake', text: 'Calm water for canoes and kayaks in summer.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Crescent Lake', text: 'Skating on the lake when the city clears the ice.' },
    { icon: '🌾', name: 'Prairie Drives', dist: 'Around town', text: 'Endless fields of wheat, canola and potatoes — golden at harvest time.' },
  ],

  food: [
    { icon: '🥔', title: 'Local Potatoes', area: 'Farm country', areaLevel: 'gold', text: 'Portage sits in a major potato-growing area — fries taste better here.' },
    { icon: '🍓', title: 'U-Pick Berries', area: 'Summer farms', areaLevel: 'danger', text: 'Strawberry and saskatoon u-pick farms near town in season.' },
    { icon: '🍔', title: 'Highway Diners', area: 'Trans-Canada', areaLevel: 'olive', text: 'Classic road-trip stops along Highway 1.' },
    { icon: '☕', title: 'Downtown Cafés', area: 'Saskatchewan Ave', areaLevel: 'blue', text: 'Coffee and baking on the main street.' },
    { icon: '🥟', title: 'Perogies', area: 'Local restaurants', areaLevel: 'purple', text: 'Prairie Ukrainian comfort food.' },
    { icon: '🌽', title: 'Farm Stands', area: 'Late summer', areaLevel: 'safe', text: 'Sweet corn and vegetables sold roadside.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Bird migration', text: 'Huge flocks pass Delta Marsh; the Assiniboine can run high during the melt.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Park season', text: 'Warm days, the water park and lake activities in Island Park.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest & geese', text: 'Golden fields, autumn colour around the windmill and migrating geese.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Open prairie means strong winds and blowing snow; skating on the lake.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes right by the city; the Yellowhead (Highway 16) branches off west toward Saskatoon.',
      time: '≈1 h from Winnipeg',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail trains between Winnipeg and the west, and the Winnipeg–Churchill train, stop at Portage la Prairie a few times a week. Check current schedules.',
      time: '≈1 h 30 min from Winnipeg',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Winnipeg (YWG) is the nearest commercial airport.',
      time: '≈1 h by car',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches between Winnipeg and Brandon may stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'Trans-Canada Hotels',
      area: 'Highway 1',
      text: 'Most hotels are along the highway — convenient for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Portage+la+Prairie', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Portage%20la%20Prairie%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Near Island Park',
      text: 'A few options close to Saskatchewan Avenue and the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Portage+la+Prairie+Manitoba', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Lake Manitoba',
      area: 'Cottages',
      text: 'Cabins and campgrounds on the lake shore to the north.',
      links: [
        { label: 'Travel Manitoba', url: 'https://www.travelmanitoba.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No City Buses',
      text: 'Portage la Prairie has no public bus system — the city has only studied the idea. Downtown and Island Park are walkable; drive or take a taxi further out.',
      linkLabel: 'City of Portage la Prairie',
      linkUrl: 'https://www.city-plap.com/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis',
        text: 'Local taxi companies operate in the city.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local', 'Walking: downtown & park', 'Car: for Delta Marsh'],
        },
        linkLabel: 'City of Portage la Prairie',
        linkUrl: 'https://www.city-plap.com/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Island Park and downtown are close together.' },
          { icon: '🚲', title: 'Bike', text: 'Flat streets and the lake path.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Delta Marsh and Lake Manitoba.' },
          { icon: '🚕', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Road-trip tip:',
      text: 'Driving the Trans-Canada? Take the short detour into town for a walk around Crescent Lake and the windmill — it beats a highway rest stop.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Portage / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌳', label: 'Island Park & windmill: free' },
      { icon: '🐦', label: 'Delta Marsh viewing: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏥', title: 'New Hospital', text: 'A new Portage Regional Health Centre was completed with opening planned for fall 2026. Check Southern Health-Santé Sud for which building runs the emergency department when you visit.' },
    { icon: '🌬️', title: 'Prairie Wind', text: 'Open fields mean strong winds and blowing snow in winter — check highway conditions.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Marsh country — bring repellent from June to August, especially at Delta Marsh.' },
    { icon: '🌊', title: 'River Levels', text: 'The Assiniboine floods in some springs; the Portage Diversion channel sends water north to Lake Manitoba.' },
    { icon: '🛣️', title: 'Easy Stop', text: 'An hour from Winnipeg — a good first or last stop on a western road trip.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Portage la Prairie is on Treaty 1 territory, the traditional lands of the Anishinaabe and Dakota peoples and the homeland of the Red River Métis; Long Plain, Dakota Tipi and Dakota Plains First Nations are nearby.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Portage Regional Health Centre', '524 5th St SE (new building opening fall 2026)', 'Emergencies: call 911'] },
  ],
};

export default PORTAGE_LA_PRAIRIE;
