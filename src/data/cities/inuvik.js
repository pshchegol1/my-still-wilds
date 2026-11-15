// Inuvik — данные страницы /city/inuvik (Инувик, СЕВЕРО-ЗАПАДНЫЕ
// ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянные зимние и финские
// пейзажи). В шапке фото с Wikimedia Commons — церковь-иглу Our Lady
// of Victory, автор Adam Jones, Ph.D., 05.08.2013, CC BY-SA 3.0.
// Лицензия требует автора.
// Население — перепись 2021: 3 137 (-3.3% к 2016, 3243); ≈50%
// населения региона Beaufort Delta живёт в Инувике.
// Дорога Inuvik–Tuktoyaktuk Highway открыта в конце 2017 года, ≈137–140
// км гравия, построена на насыпи для защиты вечной мерзлоты; соединяется
// с трассой Dempster Highway (736 км) в самом Инувике — первая в Канаде
// дорога с круглогодичным доступом к побережью Северного Ледовитого
// океана.
// Световой режим — в среднем 56 дней полуночного солнца летом и 30 дней
// полярной ночи зимой (по одним данным), другой источник даёт 57 дней
// подряд без захода солнца с конца мая по конец июля — цифры немного
// расходятся, указываем осторожно.
// Больница — Inuvik Regional Hospital, 285 Mackenzie Rd (в одном
// справочнике — 289), ER заявлено 24/7; в 2023–2024 были временные
// приостановки родовспоможения из-за нехватки персонала — предупреждение
// в тексте.
// Общественного транспорта внутри города не нашли; межгородские автобусы
// крайне редки и в основном туристические (из Доусон-Сити/Уайтхорса).
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: статус самого северного крупного города на
// Mackenzie Highway/Dempster system, дельта реки Маккензи, северное
// сияние, время в пути.

export const INUVIK = {
  slug: 'inuvik',
  name: 'Inuvik',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Arctic Gateway',
  accentLevel: 'danger',
  heroIcon: '⛪',
  heroImage: '/Cities/Inuvik/hero.jpg',
  heroCredit: 'Photo: Adam Jones, Ph.D. / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 68.3617, lon: -133.7230 },
  subtitle: 'Where the Road Meets the Arctic Ocean',
  description:
    'Built in the 1950s on the East Channel of the Mackenzie Delta, Inuvik is the main service centre of Canada\'s western Arctic. It is famous for its distinctive igloo-shaped church, its above-ground "utilidors" that carry pipes over the permafrost, and as the northern end of the Dempster Highway — the road that finally connects Canada\'s highway network to the Arctic Ocean at Tuktoyaktuk.',

  actions: [
    { label: 'Explore Inuvik', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈3.1K (2021)' },
    { label: 'Known For', value: 'Igloo Church · Arctic Highway' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'Dempster Highway' },
    { label: 'To Tuktoyaktuk', value: '≈2 h by car' },
  ],

  badges: ['Igloo Church', 'Dempster Highway', 'Mackenzie Delta'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '3,137', label: 'People in Inuvik in the 2021 census', level: 'danger' },
    { value: '2017', label: 'Year the Inuvik–Tuktoyaktuk Highway opened, reaching the Arctic Ocean by road', level: 'purple' },
    { value: '≈56', label: 'Average days of midnight sun each summer — and about 30 days of polar night in winter', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Shops, services and the town’s distinctive above-ground utilidors' },
    { name: 'East Three', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'olive', meta: 'Main residential area, named for the original planning designation' },
    { name: 'East Channel Waterfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'The Mackenzie Delta channel the town overlooks' },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Aviation', tagLevel: 'purple', meta: 'Mike Zubko International Airport, a key regional hub' },
    { name: 'Dempster Highway Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'danger', meta: 'The southern approach road and the start of the Arctic Ocean route' },
  ],

  attractions: [
    {
      name: 'Our Lady of Victory Church',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'Inuvik’s famous igloo-shaped Catholic church, one of the most photographed buildings in the Canadian Arctic.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Landmark', level: 'purple' }],
    },
    {
      name: 'Inuvik–Tuktoyaktuk Highway',
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      text: 'Opened in 2017, this gravel highway runs about 137–140 km north to Tuktoyaktuk on the Arctic Ocean — the first all-season road in Canada to reach the Arctic coast.',
      tags: [{ label: 'Road trip', level: 'danger' }, { label: 'Unique', level: 'blue' }],
    },
    {
      name: 'Dempster Highway',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'The legendary 736 km gravel highway from the Klondike Highway near Dawson City, crossing the Arctic Circle on its way to Inuvik.',
      tags: [{ label: 'Classic drive', level: 'gold' }, { label: 'Remote', level: 'caution' }],
    },
    {
      name: 'Utilidors',
      icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      text: 'Inuvik’s above-ground insulated utility corridors, built because the permafrost makes underground pipes impossible — a distinctive feature of the town’s streets.',
      tags: [{ label: 'Unique', level: 'purple' }, { label: 'Free to see', level: 'safe' }],
    },
    {
      name: 'Mackenzie Delta',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'One of the largest river deltas in North America, visible from town and best explored by boat or small plane.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Guided tours', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Arctic Highways and River Delta',
  outdoor: [
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', name: 'Arctic Ocean Road Trip', dist: 'To Tuktoyaktuk', text: 'Drive the Inuvik–Tuktoyaktuk Highway to the Arctic coast.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Mackenzie Delta Tours', dist: 'By boat or plane', text: 'See one of the continent’s great river deltas from the water or air.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Mackenzie River & channels', text: 'Northern fish species in the delta waterways.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Trails', dist: 'Around town', text: 'Short walking trails through boreal and tundra terrain.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Midnight Sun', dist: 'Summer', text: 'Around-the-clock daylight for weeks each summer.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Polar night', text: 'Dark winter skies make for striking northern lights.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Delta Fish', area: 'Local menus', areaLevel: 'blue', text: 'Whitefish and other species from the Mackenzie Delta.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou and other northern specialties.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops serving a small Arctic town.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Downtown', areaLevel: 'purple', text: 'The main supply hub for the western Arctic region.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Downtown', areaLevel: 'safe', text: 'A modest dining scene serving residents and travellers.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Cloudberries and cranberries from the tundra.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves the Mackenzie Delta as daylight grows fast.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — July', level: 'gold', rating: 5, note: 'Midnight sun', text: 'Weeks of round-the-clock daylight, ideal for the Dempster and delta trips.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'August — September', level: 'danger', rating: 2, note: 'Short window', text: 'A quick transition before the long polar night.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 4, note: 'Polar night', text: 'About a month of winter darkness, with prime aurora viewing.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Road',
      text: 'The Dempster Highway runs 736 km from near Dawson City, Yukon, crossing the Arctic Circle to reach Inuvik — a classic, remote gravel road trip.',
      time: '≈8–10 h from Dawson City',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Mike Zubko International Airport has flights connecting to Yellowknife, Whitehorse and Edmonton — a key regional hub.',
      time: 'Scheduled flights available',
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Onward to Tuktoyaktuk',
      text: 'The Inuvik–Tuktoyaktuk Highway, opened in 2017, continues north to the Arctic Ocean.',
      time: '≈2 h to Tuktoyaktuk',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Scheduled bus service is rare; most non-driving visitors arrive via organized tours from Dawson City or Whitehorse.',
      time: 'Seasonal tours only',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and inns near the town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Inuvik+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Inuvik%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Dempster Highway Travellers',
      area: 'Road-trip base',
      text: 'A natural stop before or after driving the Dempster or the Tuktoyaktuk Highway.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Inuvik+Northwest+Territories', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Public Transit',
      text: 'Inuvik has no municipal bus system — the town is compact and walkable, with taxis and personal vehicles covering the rest.',
      linkLabel: 'Town of Inuvik',
      linkUrl: 'https://www.inuvik.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is small and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the Dempster and Tuktoyaktuk highways.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Carry extra fuel, a spare tire and supplies on the Dempster and Tuktoyaktuk highways — services are sparse and distances are long.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Inuvik / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
      { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Delta tours: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', label: 'Viewing the igloo church: free' },
      { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', label: 'Town walking trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Highways', text: 'The Dempster and Tuktoyaktuk highways are long gravel roads with few services — plan fuel, tires and supplies carefully.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Polar Night', text: 'Inuvik gets about a month of winter darkness — plan for very short or no daylight if visiting then.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Midnight Sun', text: 'In midsummer the sun doesn’t set for weeks — pack an eye mask if you need darkness to sleep.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Permafrost City', text: 'Inuvik’s above-ground utilidors exist because of the permafrost — a visible reminder of the Arctic environment.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife and Edmonton.' },
    { icon: '🚑', iconSrc: '/icons/attractions/ph_ambulance-thin.svg', title: 'Check the Hospital', text: 'Inuvik Regional Hospital has faced staffing-related service pauses in the past (including birthing services) — check current status for anything beyond routine emergency care.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Inuvik is within the Inuvialuit Settlement Region and Gwich’in Settlement Area, home to the Inuvialuit and Gwich’in peoples.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Inuvik Regional Hospital', '285 Mackenzie Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default INUVIK;
