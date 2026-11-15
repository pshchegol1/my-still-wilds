// Pond Inlet — данные страницы /city/pond-inlet (Понд-Инлет, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только безымянные ледники и
// скандинавские пейзажи). В шапке фото с Wikimedia Commons — посёлок
// (Mittimatalik), отражающийся в спокойной воде, снежные горы острова
// Баффин на фоне, автор Emilijak Knezevic, 16.07.2022, CC BY-SA 4.0.
// Лицензия требует автора.
// Население — перепись 2021: 1 555 (-3.8% к 2016, 1617).
// Понд-Инлет (Mittimatalik) — одна из двух общин-ворот (вместе с Arctic
// Bay) в национальный парк Sirmilik (создан 2001, ≈22 200 км²); офис
// парка находится в Понд-Инлет. Остров Байлот примерно в 25 км на
// лодке/снегоходе; залив между ними — Navy Board Inlet, вход в
// Северо-Западный проход. На скалах острова Байлот — крупная колония
// морских птиц; с 1962 года федеральный заказник перелётных птиц
// Bylot Island Migratory Bird Sanctuary — второй по величине в Канаде.
// В окрестных водах — нарвалы и белухи.
// Медцентр — Pond Inlet Health Centre; в декабре 2023 временно закрывался
// из-за нехватки персонала (паравики обеспечивали экстренную помощь) —
// указываем с оговоркой, без "24/7". Адреса не нашли.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний sealift.
// Из общих знаний: статус региона Qikiqtaaluk (Баффин), рейсы Pond
// Inlet–Iqaluit, время в пути.

export const POND_INLET = {
  slug: 'pond-inlet',
  name: 'Pond Inlet',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Gateway to Sirmilik',
  accentLevel: 'danger',
  heroIcon: '🐋',
  heroImage: '/Cities/PondInlet/hero.jpg',
  heroCredit: 'Photo: Emilijak Knezevic / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 72.6988, lon: -77.9552 },
  subtitle: 'Mittimatalik, Narwhal Capital of the North',
  description:
    'On the northern coast of Baffin Island, Pond Inlet (Mittimatalik) looks out across Navy Board Inlet to the glaciated peaks of Bylot Island. One of the gateway communities to Sirmilik National Park, it is famous for narwhal, beluga and seabird colonies — and ranks among the most spectacular settings of any community in Canada.',

  actions: [
    { label: 'Explore Pond Inlet', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.6K (2021)' },
    { label: 'Known For', value: 'Narwhal & Sirmilik Park' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Iqaluit', value: '≈2 h by plane' },
  ],

  badges: ['Sirmilik National Park', 'Bylot Island', 'Narwhal'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈1.6K', label: 'People in Pond Inlet in the 2021 census', level: 'danger' },
    { value: '22,200 km²', label: 'Size of Sirmilik National Park, reached from Pond Inlet', level: 'blue' },
    { value: '≈25 km', label: 'Distance across the water to Bylot Island’s bird cliffs and glaciers', level: 'purple' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Hamlet office, school and the main community buildings' },
    { name: 'Waterfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Inlet', tagLevel: 'blue', meta: 'Shoreline facing Bylot Island across Navy Board Inlet' },
    { name: 'Sirmilik Park Office', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Park', tagLevel: 'purple', meta: 'Trip planning and permits for Sirmilik National Park' },
    { name: 'Bylot Island', icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', tag: 'Wildlife', tagLevel: 'danger', meta: 'Glaciers, seabird cliffs and a federal migratory bird sanctuary' },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world' },
  ],

  attractions: [
    {
      name: 'Sirmilik National Park',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A vast, remote park of glaciers and icecaps, reached from Pond Inlet, one of its two gateway communities (with Arctic Bay). The park has no maintained facilities — visitors need to be self-sufficient or travel with a guide.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Guide recommended', level: 'caution' }],
    },
    {
      name: 'Bylot Island Migratory Bird Sanctuary',
      icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'Across the water from town, Bylot Island’s cliffs host huge seabird colonies; the sanctuary has been federally protected since 1962 and is one of Canada’s largest.',
      tags: [{ label: 'Wildlife', level: 'blue' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Narwhal & Beluga Watching',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'The waters around Pond Inlet and Bylot Island are prime narwhal and beluga habitat — boat tours run in the open-water season with local guides.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Guided', level: 'purple' }],
    },
    {
      name: 'Navy Board Inlet',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'The channel between Pond Inlet and Bylot Island, and a historic entry point to the Northwest Passage.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'History', level: 'olive' }],
    },
    {
      name: 'Inuit Art & Culture',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Carving and printmaking are active local traditions — look for work by Pond Inlet artists.',
      tags: [{ label: 'Culture', level: 'gold' }, { label: 'Shopping', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Glaciers, Narwhal and Seabird Cliffs',
  outdoor: [
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Narwhal & Beluga Tours', dist: 'By boat', text: 'Guided wildlife-watching on the inlet in summer.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Sirmilik National Park', dist: 'By boat/snowmobile', text: 'Glaciers, icecaps and remote wilderness.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Bylot Island Birding', dist: '≈25 km', text: 'Massive seabird colonies on the cliffs.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Nearby lakes & rivers', text: 'Arctic char fishing in season.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land and ice', text: 'The main way to reach Bylot Island and the park in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Narwhal, seal and Arctic char, traditional Inuit foods.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Narwhal Muktuk', area: 'Seasonal', areaLevel: 'purple', text: 'A traditional delicacy during the narwhal season.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Arctic Char', area: 'Local catch', areaLevel: 'safe', text: 'A staple fish from nearby waters.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Community Meals', area: 'Local events', areaLevel: 'gold', text: 'Shared country-food meals mark community gatherings.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Small Shops', area: 'Town centre', areaLevel: 'olive', text: 'A handful of stores for daily essentials.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Ice & snow', text: 'Long daylight returns while the inlet is still frozen — good for snowmobile trips.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Narwhal season', text: 'Open water brings whale tours, boat access to Bylot Island and nearly round-the-clock daylight.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before freeze-up and winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and long darkness, with striking northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Pond Inlet Airport has scheduled flights connecting through Iqaluit. There is no road or rail link to the rest of Canada.',
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
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'The main way to reach Bylot Island and Sirmilik National Park outside the open-water season.',
      time: 'Winter and spring',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport and town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pond+Inlet+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Pond%20Inlet%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'Sirmilik Trips',
      area: 'Guided',
      text: 'Wilderness outfitters arrange lodging as part of multi-day park or wildlife trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pond+Inlet+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No Public Transit',
      text: 'Pond Inlet has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle travel in this small Arctic community.',
      linkLabel: 'Hamlet of Pond Inlet',
      linkUrl: 'https://www.pondinlet.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Essential for reaching Bylot Island and the park.' },
          { icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Boat', text: 'Used for narwhal tours and summer crossings to Bylot Island.' },
        ],
      },
    ],
    proTip: {
      label: 'Wildlife tip:',
      text: 'Book narwhal and beluga tours with a local guide well ahead of your trip — good sightings depend on ice conditions and local knowledge.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Pond Inlet has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Pond Inlet / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', label: 'Wildlife tours: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Shoreline viewing: free' },
      { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Park entry: no standard day-use fee' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Wildlife and park guides: 10–15%, often included in tour packages.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Pond Inlet to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Serious Wilderness', text: 'Sirmilik National Park and Bylot Island have no maintained facilities — go with an experienced guide, not independently.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Long Summer Days', text: 'Midsummer brings very long daylight — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as Iqaluit and Toronto.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife Caution', text: 'Polar bears can appear near town and on the ice — ask locally about current sightings before heading out.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Pond Inlet (Mittimatalik) is in the heart of Inuit Nunangat; Inuktitut is widely spoken alongside English.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Pond Inlet Health Centre', 'Has faced staffing-related closures in the past', 'Check current status before relying on it; call 911 where available'] },
  ],
};

export default POND_INLET;
