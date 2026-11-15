// Rankin Inlet — данные страницы /city/rankin-inlet (Ранкин-Инлет, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только норвежские фьорды и
// безымянные зимние пейзажи). В шапке фото с Wikimedia Commons — инукшук
// на холме над посёлком и заливом Гудзона, автор OhanaUnited, 29.08.2025,
// CC BY-SA 4.0 (GPS 62.812, -92.088 — совпадает с Ранкин-Инлетом).
// Лицензия требует автора.
// Население — перепись 2021: 2 975 (+4.7% к 2016, 2842) — по Wikipedia,
// самый подробный и согласованный источник; другие агрегаторы дают
// заметно отличающиеся цифры (2698–3236), не совпадающие по методике —
// используем значение Wikipedia как наиболее обоснованное.
// История: Ранкин-Инлет (Kangiqiniq) — единственный населённый пункт
// Нунавута, выросший из рудника. North Rankin Nickel Mine работал
// 1957–1962, первым в Канаде нанимал инуитов на шахтные работы; при
// закрытии в 1962 году 70–80% из ~500 жителей были шахтёрами. Старая
// копровая башня сгорела в конце 1970-х, на флаге посёлка её силуэт
// сохранился.
// Рудник Meliadine (золото, Agnico Eagle) — действующий, добыча с 2019
// года, примерно в 25 км от посёлка, частная грунтовая дорога для нужд
// рудника (не общественная трасса).
// Медцентр — Rankin Inlet Health Centre/Kivalliq Health Centre,
// Tariuq Ave; адрес из вторичных источников — с оговоркой. Также есть
// Long-Term Care Centre (для пожилых, не приёмный покой).
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог, связывающих посёлок с остальной Канадой, нет — только самолёт
// (и летом грузовое судно); это общеизвестный факт о Нунавуте.
// Из общих знаний: статус регионального узла Kivalliq, озеро Williamson
// Lake рядом с посёлком, аэропорт как запасной для шаттла NASA в
// прошлом, время в пути.

export const RANKIN_INLET = {
  slug: 'rankin-inlet',
  name: 'Rankin Inlet',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Hub of the Kivalliq Region',
  accentLevel: 'safe',
  heroIcon: '⛏️',
  heroImage: '/Cities/RankinInlet/hero.jpg',
  heroCredit: 'Photo: OhanaUnited / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.8084, lon: -92.0877 },
  subtitle: 'Mining Roots on Hudson Bay',
  description:
    'The regional hub of the Kivalliq, Rankin Inlet (Kangiqiniq) is unique among Nunavut communities: it grew up around a nickel mine rather than a traditional camp. Set on the western shore of Hudson Bay, it today mixes government offices, an active gold mine nearby, and a strong Inuit cultural life, with inukshuit marking the rocky hills above town.',

  actions: [
    { label: 'Explore Rankin Inlet', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈3K (2021)' },
    { label: 'Known For', value: 'Mining Heritage' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Iqaluit', value: '≈2 h by plane' },
  ],

  badges: ['Hudson Bay', 'Mining History', 'Kivalliq Hub'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '2,975', label: 'People in Rankin Inlet in the 2021 census — up 4.7% in five years', level: 'safe' },
    { value: '1957', label: 'Year the North Rankin Nickel Mine opened, founding the community', level: 'purple' },
    { value: '25 km', label: 'Distance to the active Meliadine gold mine, producing since 2019', level: 'gold' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Government offices, shops and the hamlet office' },
    { name: 'Waterfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: '🌊 Bay', tagLevel: 'blue', meta: 'Shoreline along Hudson Bay, busy in the open-water season' },
    { name: 'Inukshuk Hill', icon: '🗿', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: '🗿 Landmark', tagLevel: 'purple', meta: 'A hilltop inukshuk overlooking the community and bay' },
    { name: 'Williamson Lake', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: '🏞️ Nature', tagLevel: 'safe', meta: 'A lake near town used for recreation' },
    { name: 'Old Mine Site', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: '⛏️ History', tagLevel: 'olive', meta: 'Remnants of the original nickel mine that founded the town' },
  ],

  attractions: [
    {
      name: 'Inukshuk Hill',
      icon: '🗿', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A rocky hill above town topped by an inukshuk, with sweeping views over the community and Hudson Bay.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Views', level: 'gold' }],
    },
    {
      name: 'Mining Heritage Sites',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'Remnants of the North Rankin Nickel Mine (1957–1962), the first mine in Canada to employ Inuit workers — the old headframe is gone, but equipment and the site remain visible near the power plant.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Unique', level: 'blue' }],
    },
    {
      name: 'Inuit Art & Carving',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Rankin Inlet is known across Nunavut for its distinctive ceramic and stone sculpture tradition — look for local galleries and artists.',
      tags: [{ label: 'Culture', level: 'gold' }, { label: 'Shopping', level: 'purple' }],
    },
    {
      name: 'Williamson Lake',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'A lake near the community, used for fishing, picnics and quiet time away from town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
    },
    {
      name: 'Hudson Bay Shoreline',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Walk the rocky shore for views across the bay — watch for marine wildlife in the open-water season.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Wildlife', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Tundra, Bay and Lake Country',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tundra Walking', dist: 'Around town', text: 'Open tundra trails right at the edge of the community.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Williamson Lake', text: 'Arctic char and lake trout nearby.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Shoreline Walks', dist: 'Hudson Bay', text: 'Rocky coast with wide bay views.' },
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Wildlife Watching', dist: 'Hudson Bay', text: 'Seals and seabirds in open-water months.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and exploring in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Arctic char, caribou and seal, traditional Inuit foods.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Town centre', areaLevel: 'gold', text: 'A small dining scene serving residents and visitors.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops in the community.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Arctic Char', area: 'Local menus', areaLevel: 'safe', text: 'A signature northern fish, fresh or smoked.' },
    { icon: '🍲', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Community Feasts', area: 'Seasonal events', areaLevel: 'olive', text: 'Country-food feasts mark festivals and celebrations.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice retreats slowly from Hudson Bay as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Open water', text: 'The mildest season, with long daylight and open-bay activities.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before freeze-up and winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — April', level: 'blue', rating: 3, note: 'Long & cold', text: 'Deep cold and short days, with good odds for the northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Rankin Inlet Airport (YRT) is the region’s main hub, with flights to Iqaluit, Winnipeg and smaller Kivalliq communities. There is no road or rail link to the rest of Canada.',
      time: '≈2 h to Iqaluit',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'Getting Around',
      text: 'Taxis are the main way to get around town; many residents also use ATVs and snowmobiles.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel on the land around the community.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'Hotels and inns near government offices and the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rankin+Inlet+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Rankin%20Inlet%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'Waterfront',
      area: 'Near the bay',
      text: 'A few options close to the Hudson Bay shoreline.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rankin+Inlet+Nunavut', level: 'blue' },
      ],
    },
    {
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      title: 'Williamson Lake Area',
      area: 'Near town',
      text: 'Limited options close to the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rankin+Inlet+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No Public Transit',
      text: 'Rankin Inlet has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle local travel in a compact community.',
      linkLabel: 'Hamlet of Rankin Inlet',
      linkUrl: 'https://rankininlet.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
          { icon: '🏍️', iconSrc: '/icons/attractions/ph_motorcycle-thin.svg', title: 'ATV', text: 'Widely used in summer around the community.' },
        ],
      },
    ],
    proTip: {
      label: 'Flight tip:',
      text: 'As the Kivalliq region’s main air hub, Rankin Inlet often sees connecting flights — build in slack for weather delays, especially in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Rankin Inlet has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Rankin Inlet / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', label: 'Art and carvings: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🗿', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', label: 'Inukshuk Hill: free' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Williamson Lake access: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Rankin Inlet to the rest of Canada — plan entirely around flight schedules.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, as everything arrives by plane or summer barge.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Extreme Winters', text: 'Winters are long and very cold, with strong winds off Hudson Bay — dress in serious layers.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Long Summer Days', text: 'Midsummer brings very long daylight hours — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — the same as Winnipeg, one hour behind Iqaluit.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife Caution', text: 'Polar bears can appear near town along the coast — ask locally about current sightings before walking the shoreline.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Rankin Inlet is in the heart of Inuit Nunangat; Inuktitut is an official language alongside English, and Inuit culture shapes daily life here.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Rankin Inlet Health Centre', 'Tariuq Ave · phone (867) 645-8300', 'Call the health centre directly for emergencies'] },
  ],
};

export default RANKIN_INLET;
