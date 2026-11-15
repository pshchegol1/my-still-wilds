// Behchoko — данные страницы /city/behchoko (Бечоко, СЕВЕРО-ЗАПАДНЫЕ
// ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянная еда, горные
// деревни, музыкальные инструменты, совсем не то). В шапке фото с
// Wikimedia Commons — мост через Frank Channel на шоссе Yellowknife
// Highway рядом с посёлком, автор CambridgeBayWeather, 21.09.2010,
// CC BY-SA 3.0. Подпись к файлу прямо называет место. Лицензия требует
// автора.
// Население — перепись 2021: 1 746 (-6.8% к 2016, 1874); крупнейшая из
// общин тличо (по данным ИИ-сгенерированной Grokipedia — свыше 65%
// населения региона Tłı̨chǫ живёт здесь; остальные общины — Whatì,
// Gamètì, Wekweètì; эту цифру не перепроверяли у официального
// источника, указываем с оговоркой). Самоуправление общины — Tłı̨chǫ
// Community Government с 4 августа 2005 года.
// История названия: ранее известен как Rae-Edzo / Fort Rae — старое
// название встречается в источниках, современное официальное —
// Behchokǫ̀.
// Медцентр: Mary Adele Bishop Health Centre — по уведомлению от 30 июля
// 2023 на сайте Tłı̨chǫ Government числился закрытым, пациентов
// направляли в Frame Lake Clinic в Йеллоунайфе; более свежего
// подтверждения о статусе не нашли — указываем как предупреждение,
// не как факт о полном отсутствии медпомощи. Ближайшая больница —
// Yellowknife.
// Дорога: Highway 3 (Yellowknife Highway), около часа к северо-западу
// от Йеллоунайфа.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: Chief Jimmy Bruneau Regional High School, традиции
// тличо (карибу, охота), время в пути.

export const BEHCHOKO = {
  slug: 'behchoko',
  name: 'Behchokö',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Largest Tłı̨chǫ Community',
  accentLevel: 'blue',
  heroIcon: '🪶',
  heroImage: '/Cities/Behchoko/hero.jpg',
  heroCredit: 'Photo: CambridgeBayWeather / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.8053, lon: -116.0417 },
  subtitle: 'Heart of Tłı̨chǫ Territory',
  description:
    'On the north arm of Great Slave Lake, Behchokǫ̀ (formerly known as Rae-Edzo) is the largest of the four Tłı̨chǫ communities and the seat of the Tłı̨chǫ Community Government since 2005. Reached from Yellowknife by the Frank Channel Bridge, it sits at the heart of Tłı̨chǫ land, culture and self-government.',

  actions: [
    { label: 'Explore Behchokö', href: '#neighbourhoods' },
    { label: 'Learn More', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.7K (2021)' },
    { label: 'Nation', value: 'Tłı̨chǫ Government' },
    { label: 'Languages', value: 'Tłı̨chǫ (Dogrib), English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'Highway 3' },
    { label: 'To Yellowknife', value: '≈1 h by car' },
  ],

  badges: ['Tłı̨chǫ Government', 'Great Slave Lake', 'Frank Channel Bridge'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1,746', label: 'People in Behchokǫ̀ in the 2021 census', level: 'blue' },
    { value: '1', label: 'Largest of the four Tłı̨chǫ communities (with Whatì, Gamètì and Wekweètì)', level: 'purple' },
    { value: '2005', label: 'Year the Tłı̨chǫ Community Government took effect under self-government', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Edzo', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'olive', meta: 'The newer part of the community, on higher ground' },
    { name: 'Rae', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Historic', tagLevel: 'purple', meta: 'The older lakeside settlement, the original Fort Rae trading post area' },
    { name: 'Frank Channel', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Bridge', tagLevel: 'blue', meta: 'The channel and bridge connecting the community to Highway 3' },
    { name: 'Great Slave Lake Shore', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Lake', tagLevel: 'safe', meta: 'Shoreline on the lake’s north arm' },
  ],

  attractions: [
    {
      name: 'Frank Channel Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A landmark steel truss bridge on the Yellowknife Highway, crossing the channel that connects Behchokǫ̀ to the rest of the North Slave region.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Free to see', level: 'safe' }],
    },
    {
      name: 'Chief Jimmy Bruneau Regional High School',
      icon: '🏫', iconSrc: '/icons/attractions/ph_chalkboard-teacher-thin.svg',
      text: 'A regional school serving Tłı̨chǫ communities, named for a respected Tłı̨chǫ chief and known for its distinctive architecture.',
      tags: [{ label: 'Community', level: 'gold' }, { label: 'Not a tourist site', level: 'caution' }],
    },
    {
      name: 'Tłı̨chǫ Culture & Land',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'Behchokǫ̀ is the administrative heart of Tłı̨chǫ self-government, with traditions of caribou hunting, fishing and land-based life still central to community life.',
      tags: [{ label: 'Cultural', level: 'purple' }, { label: 'Respect protocols', level: 'danger' }],
    },
    {
      name: 'Great Slave Lake Shoreline',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Quiet lakeshore on the north arm of Great Slave Lake, used for fishing and boating by the community.',
      tags: [{ label: 'Local life', level: 'blue' }, { label: 'Fishing', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Lake and Tłı̨chǫ Land',
  outdoor: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Great Slave Lake', text: 'Traditional and recreational fishing on the lake’s north arm.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Caribou Hunting', dist: 'Traditional territory', text: 'An important seasonal activity for the Tłı̨chǫ.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of travelling the land in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around the community', text: 'Northern lights visible on clear nights.' },
  ],

  food: [
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Caribou & Country Food', area: 'Traditional', areaLevel: 'danger', text: 'Caribou, fish and other land-based foods remain central to Tłı̨chǫ life.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Great Slave Lake', areaLevel: 'blue', text: 'Whitefish and other species from the lake.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Community Store', area: 'In town', areaLevel: 'safe', text: 'Basic groceries and supplies.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Big River Service Centre', area: 'Highway 3', areaLevel: 'gold', text: 'A roadside motel, restaurant and gas stop on the highway.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves Great Slave Lake as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'The mildest season, with fishing and land-based activities.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Hunting season', text: 'A key season for caribou hunting on the land.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Cold & snowy', text: 'Deep cold, with snowmobile travel and good aurora viewing.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 3 (the Yellowknife Highway) connects Behchokǫ̀ to Yellowknife via the Frank Channel Bridge.',
      time: '≈1 h from Yellowknife',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'The community has a local airstrip; scheduled flights mainly connect through Yellowknife.',
      time: 'Via Yellowknife',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Limited intercity coach options run along Highway 3. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg',
      title: 'Big River Service Centre',
      area: 'Highway 3',
      text: 'A roadside motel, restaurant, bar and gas stop — the main visitor accommodation in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Behchoko+Northwest+Territories', level: 'blue' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Yellowknife',
      area: '≈1 h away',
      text: 'A much wider range of hotels, for those using Behchokǫ̀ as a day trip.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+Northwest+Territories', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Public Transit',
      text: 'Behchokǫ̀ is a small community reached on foot, by car or by snowmobile — there is no public transit system.',
      linkLabel: 'Tłı̨chǫ Government',
      linkUrl: 'https://www.tlicho.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Rae and Edzo are each walkable on their own.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed to get between Rae, Edzo and the highway.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Visitor note:',
      text: 'Behchokǫ̀ is the seat of Tłı̨chǫ self-government and a residential community first — check with the Tłı̨chǫ Government for guidance before visiting outside the Big River Service Centre area.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Behchokö / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Motel & restaurant: 5% GST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 5% GST' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', label: 'Viewing Frank Channel Bridge: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Limited Local Health Care', text: 'The Mary Adele Bishop Health Centre has faced closures in recent years, with patients directed to Yellowknife — check current status before relying on local care, and expect to travel to Yellowknife for anything beyond basic services.' },
    { icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', title: 'Residential Community', text: 'Behchokǫ̀ is primarily a residential Tłı̨chǫ community, not set up for tourism — most visitor services are at the Big River Service Centre on the highway.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Highway 3 can see heavy snow and ice — check road conditions before travelling.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Caribou and other wildlife can appear on the highway — drive cautiously.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife.' },
    { icon: '🤝', iconSrc: '/icons/attractions/ph_handshake-thin.svg', title: 'Respect & Context', text: 'Behchokǫ̀ is the seat of Tłı̨chǫ self-government — approach the community with respect for its culture and governance.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Behchokǫ̀ is the largest community of the Tłı̨chǫ (Dogrib) people, within Tłı̨chǫ territory in the North Slave region.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Mary Adele Bishop Health Centre', 'Status has varied — nearest full hospital is Yellowknife', 'Call 911 where available · 811 for advice'] },
  ],
};

export default BEHCHOKO;
