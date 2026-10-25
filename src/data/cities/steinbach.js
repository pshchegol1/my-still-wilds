// Steinbach — данные страницы /city/steinbach (Штайнбах, МАНИТОБА)
// Видео Штайнбаха в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — красный амбар с ветронасосом в
// Mennonite Heritage Village, автор Shahnoor Habib Munmun, май 2009,
// CC BY 3.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (17 806; третий город Манитобы).
// Регулярного городского транспорта нет (CBC); есть только ACCESSible
// Transit для пожилых и людей с ограниченной мобильностью.
// Больница Bethesda — 316 Henry St.
// 1874 год, меннониты, ветряная мельница в музее, St. Malo, Sandilands —
// из общих знаний.

export const STEINBACH = {
  slug: 'steinbach',
  name: 'Steinbach',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Southeast',
  accentLevel: 'purple',
  heroIcon: '🌾',
  heroImage: '/Cities/Steinbach/hero.jpg',
  heroCredit: 'Photo: Shahnoor Habib Munmun / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.5258, lon: -96.6845 },
  subtitle: 'Mennonite Roots, Prairie Boomtown',
  description:
    'Founded in 1874 by Mennonite settlers from the Russian Empire, Steinbach has grown into Manitoba’s third-largest city — a busy, fast-growing hub for the southeast, famous for its car dealerships and its open-air Mennonite Heritage Village. It is an easy day trip from Winnipeg and a gateway to the beaches and forests of the southeast.',

  actions: [
    { label: 'Explore Steinbach', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈17.8K (2021)' },
    { label: 'Rank in Manitoba', value: '3rd largest' },
    { label: 'Language', value: 'English · Low German heritage' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈45 min by car' },
    { label: 'Founded', value: '1874' },
  ],

  badges: ['Mennonite Heritage', 'Fast Growing', 'Southeast Hub'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '17,806', label: 'People in the 2021 census — up 11% in five years, Manitoba’s third-largest city', level: 'blue' },
    { value: '1874', label: 'Mennonite families from the Russian Empire found the farming village of Steinbach', level: 'purple' },
    { value: '3rd', label: 'Largest city in Manitoba, after Winnipeg and Brandon', level: 'gold' },
    { value: '0', label: 'Regular city bus routes — Steinbach is a car town', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Shops, cafés and the Steinbach Arts Council' },
    { name: 'Mennonite Heritage Village', icon: '🌾', tag: '🌾 Museum', tagLevel: 'purple', meta: 'Open-air village on the north edge of the city' },
    { name: 'Highway 12 Corridor', icon: '🚗', tag: '🚗 Auto row', tagLevel: 'danger', meta: 'Dealerships, big-box stores and hotels' },
    { name: 'A.D. Penner Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Pond, walking paths and playgrounds' },
    { name: 'New Subdivisions', icon: '🏡', tag: '🏡 Growing', tagLevel: 'olive', meta: 'Rapidly expanding residential areas around the edges' },
    { name: 'Nearby La Broquerie', icon: '⚜️', tag: '⚜️ French', tagLevel: 'blue', meta: 'Small francophone village just east of the city' },
  ],

  attractions: [
    {
      name: 'Mennonite Heritage Village',
      icon: '🌾',
      text: 'An open-air museum telling the story of Mennonite settlers in Manitoba, with historic houses, a sod hut, barns, a replica windmill, church and school, plus an indoor gallery. A summer restaurant serves traditional Mennonite food.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Best in summer', level: 'caution' }],
    },
    {
      name: 'Main Street & Arts Centre',
      icon: '🎨',
      text: 'The Steinbach Arts Council runs exhibitions, classes and performances; Main Street has local shops and cafés.',
      tags: [{ label: 'Free to browse', level: 'safe' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'A.D. Penner Park',
      icon: '🌳',
      text: 'A city park with a pond, walking trails and space for picnics and events.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'St. Malo Provincial Park',
      icon: '🏖️',
      text: 'A small lake with a sandy beach and campground about half an hour southwest — a favourite summer escape.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Sandilands Provincial Forest',
      icon: '🌲',
      text: 'Sandy pine forest southeast of the city with hiking, mountain-biking and snowmobile trails.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Trails', level: 'blue' }],
    },
    {
      name: 'Auto City',
      icon: '🚗',
      text: 'Steinbach has long been known across Manitoba for its many car dealerships — people drive in from Winnipeg to shop.',
      tags: [{ label: 'Local fame', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Forest, Sand and Prairie',
  outdoor: [
    { icon: '🥾', name: 'Sandilands Trails', dist: '≈20–30 min southeast', text: 'Pine-forest walks and biking on sandy trails.' },
    { icon: '🏖️', name: 'St. Malo Beach', dist: '≈30 min southwest', text: 'Swimming and camping on a small lake.' },
    { icon: '🌲', name: 'Whiteshell Provincial Park', dist: '≈1 h 15 min northeast', text: 'Canadian Shield lakes and canoe routes.' },
    { icon: '🚲', name: 'Cycling', dist: 'City paths', text: 'A growing network of paved paths around town.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Parks', text: 'Outdoor rinks and skating trails when it freezes.' },
    { icon: '🐦', name: 'Birding', dist: 'Prairie & forest edge', text: 'Songbirds in the aspen and pine woodlands nearby.' },
  ],

  food: [
    { icon: '🥟', title: 'Vereniki', area: 'Mennonite cooking', areaLevel: 'gold', text: 'Cottage-cheese dumplings served with cream gravy — a Mennonite classic.' },
    { icon: '🌭', title: 'Farmer Sausage', area: 'Local butchers', areaLevel: 'danger', text: 'Smoked Mennonite sausage, often with vereniki.' },
    { icon: '🍞', title: 'Zwieback', area: 'Bakeries', areaLevel: 'olive', text: 'Double-decker buns, traditional on Sunday afternoons.' },
    { icon: '🥧', title: 'Platz', area: 'Bakeries', areaLevel: 'purple', text: 'Fruit-topped sheet cake with crumb topping.' },
    { icon: '☕', title: 'Cafés', area: 'Main Street', areaLevel: 'blue', text: 'Coffee shops and casual restaurants.' },
    { icon: '🍽️', title: 'Museum Restaurant', area: 'Heritage Village', areaLevel: 'safe', text: 'Traditional Mennonite meals in summer.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Snow melts in April; the museum opens fully as the weather warms.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, museum events and beach trips. Pioneer Days at the Heritage Village are a highlight — check dates.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Harvest fields and crisp, sunny days.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold', text: 'Prairie cold and snow; snowmobiling in the Sandilands.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'From Winnipeg take the Trans-Canada east and Highway 12 south, or Highway 59 and 52. The drive is short and flat.',
      time: '≈45 min from Winnipeg',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Winnipeg Richardson International (YWG) is the nearest airport.',
      time: '≈1 h by car',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'There is little or no intercity bus service. Check for current shuttle operators from Winnipeg.',
      time: 'Limited',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'No passenger rail serves Steinbach.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🚗',
      title: 'Highway 12',
      area: 'Hotels',
      text: 'Chain hotels along the main highway corridor.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Steinbach+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Steinbach%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️',
      title: 'St. Malo',
      area: 'Camping',
      text: 'Provincial park campground by the beach.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '🌆',
      title: 'Winnipeg',
      area: 'Day trip base',
      text: 'Many visitors stay in Winnipeg and visit Steinbach for the day.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Winnipeg', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No City Buses',
      text: 'Steinbach has no regular public transit. The city supports the Steinbach ACCESSible Transit program for seniors and people with mobility challenges; everyone else drives, cycles or takes a taxi.',
      linkLabel: 'City of Steinbach',
      linkUrl: 'https://www.steinbach.ca/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis',
        text: 'Local taxi companies serve the city.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'ACCESSible Transit: seniors & mobility', 'Taxis: local', 'Car: the norm'],
        },
        linkLabel: 'City of Steinbach',
        linkUrl: 'https://www.steinbach.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way to get around and to reach the museum.' },
          { icon: '🚲', title: 'Bike', text: 'Flat roads and some paved paths.' },
          { icon: '🚶', title: 'On Foot', text: 'Main Street is walkable.' },
          { icon: '🚕', title: 'Taxi', text: 'For short trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Day-trip tip:',
      text: 'Combine the Mennonite Heritage Village with lunch at its restaurant in summer, then head to St. Malo beach for the afternoon.',
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
      { label: 'Steinbach / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🚗', label: 'Vehicles: GST + RST' },
      { icon: '🎟️', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌳', label: 'City parks: free' },
      { icon: '🌲', label: 'Sandilands trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🚗', title: 'Bring a Car', text: 'With no city buses, a car (or a ride) is the practical way to visit.' },
    { icon: '📅', title: 'Museum Season', text: 'The outdoor village is at its best from late spring to early fall; check opening hours.' },
    { icon: '🦟', title: 'Bugs & Ticks', text: 'Mosquitoes in summer and wood ticks in the Sandilands in late spring.' },
    { icon: '❄️', title: 'Winter Driving', text: 'Open highways can drift with blowing snow. Check road conditions.' },
    { icon: '🛍️', title: 'Sunday Hours', text: 'Some local businesses keep shorter hours on Sundays.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Steinbach is on Treaty 1 territory, the traditional lands of the Anishinaabe peoples and the homeland of the Red River Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Bethesda Regional Health Centre', '316 Henry St', 'Emergency 24/7 · call 911'] },
  ],
};

export default STEINBACH;
