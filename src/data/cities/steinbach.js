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
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '17,806', label: 'People in the 2021 census — up 11% in five years, Manitoba’s third-largest city', level: 'blue' },
    { value: '1874', label: 'Mennonite families from the Russian Empire found the farming village of Steinbach', level: 'purple' },
    { value: '3rd', label: 'Largest city in Manitoba, after Winnipeg and Brandon', level: 'gold' },
    { value: '0', label: 'Regular city bus routes — Steinbach is a car town', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Shops, cafés and the Steinbach Arts Council' },
    { name: 'Mennonite Heritage Village', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'Museum', tagLevel: 'purple', meta: 'Open-air village on the north edge of the city' },
    { name: 'Highway 12 Corridor', icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', tag: 'Auto row', tagLevel: 'danger', meta: 'Dealerships, big-box stores and hotels' },
    { name: 'A.D. Penner Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Pond, walking paths and playgrounds' },
    { name: 'New Subdivisions', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Growing', tagLevel: 'olive', meta: 'Rapidly expanding residential areas around the edges' },
    { name: 'Nearby La Broquerie', icon: '⚜️', iconSrc: '/icons/attractions/ph_crown-thin.svg', tag: 'French', tagLevel: 'blue', meta: 'Small francophone village just east of the city' },
  ],

  attractions: [
    {
      name: 'Mennonite Heritage Village',
      icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg',
      text: 'An open-air museum telling the story of Mennonite settlers in Manitoba, with historic houses, a sod hut, barns, a replica windmill, church and school, plus an indoor gallery. A summer restaurant serves traditional Mennonite food.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Best in summer', level: 'caution' }],
    },
    {
      name: 'Main Street & Arts Centre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'The Steinbach Arts Council runs exhibitions, classes and performances; Main Street has local shops and cafés.',
      tags: [{ label: 'Free to browse', level: 'safe' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'A.D. Penner Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A city park with a pond, walking trails and space for picnics and events.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'St. Malo Provincial Park',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A small lake with a sandy beach and campground about half an hour southwest — a favourite summer escape.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Sandilands Provincial Forest',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'Sandy pine forest southeast of the city with hiking, mountain-biking and snowmobile trails.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Trails', level: 'blue' }],
    },
    {
      name: 'Auto City',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'Steinbach has long been known across Manitoba for its many car dealerships — people drive in from Winnipeg to shop.',
      tags: [{ label: 'Local fame', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Forest, Sand and Prairie',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Sandilands Trails', dist: '≈20–30 min southeast', text: 'Pine-forest walks and biking on sandy trails.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'St. Malo Beach', dist: '≈30 min southwest', text: 'Swimming and camping on a small lake.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Whiteshell Provincial Park', dist: '≈1 h 15 min northeast', text: 'Canadian Shield lakes and canoe routes.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'City paths', text: 'A growing network of paved paths around town.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Parks', text: 'Outdoor rinks and skating trails when it freezes.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Prairie & forest edge', text: 'Songbirds in the aspen and pine woodlands nearby.' },
  ],

  food: [
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Vereniki', area: 'Mennonite cooking', areaLevel: 'gold', text: 'Cottage-cheese dumplings served with cream gravy — a Mennonite classic.' },
    { icon: '🌭', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Farmer Sausage', area: 'Local butchers', areaLevel: 'danger', text: 'Smoked Mennonite sausage, often with vereniki.' },
    { icon: '🍞', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Zwieback', area: 'Bakeries', areaLevel: 'olive', text: 'Double-decker buns, traditional on Sunday afternoons.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Platz', area: 'Bakeries', areaLevel: 'purple', text: 'Fruit-topped sheet cake with crumb topping.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Main Street', areaLevel: 'blue', text: 'Coffee shops and casual restaurants.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Museum Restaurant', area: 'Heritage Village', areaLevel: 'safe', text: 'Traditional Mennonite meals in summer.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Snow melts in April; the museum opens fully as the weather warms.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, museum events and beach trips. Pioneer Days at the Heritage Village are a highlight — check dates.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Harvest fields and crisp, sunny days.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold', text: 'Prairie cold and snow; snowmobiling in the Sandilands.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'From Winnipeg take the Trans-Canada east and Highway 12 south, or Highway 59 and 52. The drive is short and flat.',
      time: '≈45 min from Winnipeg',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Winnipeg Richardson International (YWG) is the nearest airport.',
      time: '≈1 h by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'There is little or no intercity bus service. Check for current shuttle operators from Winnipeg.',
      time: 'Limited',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'No passenger rail serves Steinbach.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Highway 12',
      area: 'Hotels',
      text: 'Chain hotels along the main highway corridor.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Steinbach+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Steinbach%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'St. Malo',
      area: 'Camping',
      text: 'Provincial park campground by the beach.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '🌆', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
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
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No City Buses',
      text: 'Steinbach has no regular public transit. The city supports the Steinbach ACCESSible Transit program for seniors and people with mobility challenges; everyone else drives, cycles or takes a taxi.',
      linkLabel: 'City of Steinbach',
      linkUrl: 'https://www.steinbach.ca/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
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
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to get around and to reach the museum.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat roads and some paved paths.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Main Street is walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'For short trips.' },
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
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', label: 'Vehicles: GST + RST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'City parks: free' },
      { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', label: 'Sandilands trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Bring a Car', text: 'With no city buses, a car (or a ride) is the practical way to visit.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Museum Season', text: 'The outdoor village is at its best from late spring to early fall; check opening hours.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs & Ticks', text: 'Mosquitoes in summer and wood ticks in the Sandilands in late spring.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Open highways can drift with blowing snow. Check road conditions.' },
    { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', title: 'Sunday Hours', text: 'Some local businesses keep shorter hours on Sundays.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Steinbach is on Treaty 1 territory, the traditional lands of the Anishinaabe peoples and the homeland of the Red River Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Bethesda Regional Health Centre', '316 Henry St', 'Emergency 24/7 · call 911'] },
  ],
};

export default STEINBACH;
