// Campbellton — данные страницы /city/campbellton (Кэмпбелтон, НЬЮ-БРАНСУИК)
// Видео Кэмпбелтона в бесплатных банках нет (Pexels по запросу — только
// безымянные ролики без привязки к месту). В шапке фото с Wikimedia
// Commons — центр города с воздуха зимой, мост Дж. К. Ван Хорна через
// Ресtigouche и гора Sugarloaf на фоне, автор Quintin Soloviev, 14.03.2025,
// CC BY 4.0 (GPS 48.002, -66.678 — центр Кэмпбелтона). Лицензия требует
// автора.
// Население — перепись 2021: старый город 7 047 (+2.4% к 2016); с
// 01.01.2023 Кэмпбелтон объединился с Atholville, Tide Head, Glencoe
// и частями соседних LSD — оценка новой территории ≈12 000 (на данных
// переписи 2021, не отдельный подсчёт).
// Больница — Campbellton Regional Hospital, 189 Lily Lake Rd (Vitalité);
// приёмное отделение в прошлом неоднократно закрывалось из-за нехватки
// персонала — в тексте предупреждение, без утверждения "24/7".
// Sugarloaf Provincial Park — горнолыжный склон и парк в Atholville
// (внутри объединённого Кэмпбелтона), 11.5 км².
// Транспорт: собственного транзита по состоянию на начало 2026 года не
// было; автобусы для региона Кэмпбелтон–Гранд-Фолс анонсированы на
// "позже в 2026" (CBC) — подробностей не нашли, пишем "уточняйте".
// Налог — HST 15%; городской гостиничный сбор подтверждения не нашли,
// в тексте не утверждаем.
// Из общих знаний: статуя лосося, вокзал VIA Rail, мост соединяет с
// Квебеком (Pointe-à-la-Croix), Restigouche — место последнего морского
// сражения Франции в Северной Америке (1760), время в пути.

export const CAMPBELLTON = {
  slug: 'campbellton',
  name: 'Campbellton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Restigouche Gateway',
  accentLevel: 'blue',
  heroIcon: '🐟',
  heroImage: '/Cities/Campbellton/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.0054, lon: -66.6730 },
  subtitle: 'Salmon Capital on the Restigouche',
  description:
    'Tucked under the shadow of Sugarloaf Mountain where the Restigouche River meets Chaleur Bay, Campbellton is a small northern city famous for Atlantic salmon fishing, a long French-English history and snowy winters made for skiing. A steel bridge links it to Pointe-à-la-Croix, Québec, just across the water.',

  actions: [
    { label: 'Explore Campbellton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈7K (city, 2021)' },
    { label: 'Region', value: 'Restigouche' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Bathurst', value: '≈1 h 15 min by car' },
    { label: 'To Québec border', value: '≈2 min across the bridge' },
  ],

  badges: ['Sugarloaf Mountain', 'Salmon Fishing', 'Restigouche River'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '7,047', label: 'People in the old city in the 2021 census — before the 2023 amalgamation', level: 'blue' },
    { value: '2023', label: 'Year Campbellton merged with Atholville, Tide Head and nearby areas', level: 'purple' },
    { value: '11.5 km²', label: 'Size of Sugarloaf Provincial Park, with its ski hill right in town', level: 'gold' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Water Street shops, cafés and the riverfront' },
    { name: 'Waterfront', icon: '🌉', tag: '🌉 River', tagLevel: 'blue', meta: 'Views of the J.C. Van Horne Bridge and Restigouche River' },
    { name: 'Atholville', icon: '⛷️', tag: '⛷️ Ski', tagLevel: 'danger', meta: 'Now part of Campbellton — home to Sugarloaf Provincial Park' },
    { name: 'Tide Head', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Quiet riverside community, also now part of the city' },
    { name: 'Pointe-à-la-Croix, QC', icon: '🇫🇷', tag: '🇫🇷 Québec', tagLevel: 'purple', meta: 'Across the bridge — a different province in two minutes' },
    { name: 'Sugarloaf Mountain', icon: '⛰️', tag: '⛰️ Landmark', tagLevel: 'olive', meta: 'The rounded peak that overlooks the whole city' },
  ],

  attractions: [
    {
      name: 'Sugarloaf Provincial Park',
      icon: '⛷️',
      text: 'A ski hill and four-season park right in town, built around the distinctive rounded peak of Sugarloaf Mountain. Skiing and tubing in winter, trails and a pool in summer.',
      tags: [{ label: 'Four seasons', level: 'gold' }, { label: 'Family', level: 'danger' }],
    },
    {
      name: 'J.C. Van Horne Bridge',
      icon: '🌉',
      text: 'The steel bridge over the Restigouche River linking Campbellton to Pointe-à-la-Croix, Québec — walk or drive across to another province.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'blue' }],
    },
    {
      name: 'Giant Salmon Statue',
      icon: '🐟',
      text: 'A large sculpture of an Atlantic salmon on the waterfront, celebrating the Restigouche’s famous salmon fishery.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'gold' }],
    },
    {
      name: 'Restigouche River Salmon Fishing',
      icon: '🎣',
      text: 'One of eastern Canada’s legendary Atlantic salmon rivers. Licensed anglers and guided outfitters work the pools around Campbellton in season.',
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Seasonal', level: 'purple' }],
    },
    {
      name: 'Battle of the Restigouche Site',
      icon: '⚓',
      text: 'The river here was the scene of the last French naval battle in North America (1760). A National Historic Site marks the location nearby.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Downtown Water Street',
      icon: '🏙️',
      text: 'Shops, diners and the VIA Rail station along the main riverside street.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Food', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Mountain, River and Bay',
  outdoor: [
    { icon: '⛷️', name: 'Downhill Skiing', dist: 'Sugarloaf Park', text: 'Alpine runs with views over the Restigouche.' },
    { icon: '🎣', name: 'Salmon Fishing', dist: 'Restigouche River', text: 'Licensed Atlantic salmon angling in season.' },
    { icon: '🥾', name: 'Trail Hiking', dist: 'Sugarloaf Park', text: 'Summer trails up and around the mountain.' },
    { icon: '🛶', name: 'Paddling', dist: 'Restigouche River', text: 'Canoeing and kayaking on calmer stretches.' },
    { icon: '🏂', name: 'Snow Tubing', dist: 'Sugarloaf Park', text: 'Family-friendly tubing hill in winter.' },
    { icon: '🚗', name: 'Scenic Drives', dist: 'Route 11 & 17', text: 'Mountain and coastal roads around the region.' },
  ],

  food: [
    { icon: '🐟', title: 'Atlantic Salmon', area: 'Local restaurants', areaLevel: 'blue', text: 'The river’s signature catch, when in season.' },
    { icon: '🥔', title: 'Acadian Dishes', area: 'Around the region', areaLevel: 'purple', text: 'Poutine râpée and other Acadian classics.' },
    { icon: '☕', title: 'Cafés', area: 'Water Street', areaLevel: 'gold', text: 'Coffee shops downtown.' },
    { icon: '🦞', title: 'Seafood', area: 'Chaleur region', areaLevel: 'danger', text: 'Lobster and crab from the bay nearby.' },
    { icon: '🍺', title: 'Local Pubs', area: 'Downtown', areaLevel: 'olive', text: 'Casual bars and diners.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries from the surrounding forests.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Ice-out', text: 'Snowmelt swells the Restigouche; cool well into May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Salmon season', text: 'Fishing, trails and warm (if brief) summer days.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Mountain foliage around Sugarloaf and the river valley.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 5, note: 'Ski season', text: 'Reliable snow for skiing, tubing and snowmobiling.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Route 11 runs south along the coast to Bathurst; Route 17 heads inland toward Edmundston. The bridge crosses straight into Québec.',
      time: '≈1 h 15 min from Bathurst',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops at the Campbellton station a few times a week.',
      time: 'Check VIA schedule',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'The nearest larger airports are in Bathurst and Québec’s Gaspé region; most visitors arrive by road or rail.',
      time: 'Limited local options',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches serve Campbellton from other New Brunswick and Québec points. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Water Street and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Campbellton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Campbellton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛷️',
      title: 'Sugarloaf Area',
      area: 'Atholville',
      text: 'Lodging near the ski hill and provincial park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sugarloaf+Campbellton', level: 'blue' },
      ],
    },
    {
      icon: '🇫🇷',
      title: 'Pointe-à-la-Croix, QC',
      area: 'Across the bridge',
      text: 'A handful of options just over the river in Québec.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pointe-a-la-Croix+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No Local Transit Yet',
      text: 'Campbellton does not run its own public transit system. A regional on-demand bus service covering Campbellton and Grand Falls has been announced for 2026 — check for launch details before relying on it.',
      linkLabel: 'City of Campbellton',
      linkUrl: 'https://campbellton.org/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the waterfront are walkable.' },
          { icon: '🚗', title: 'Car', text: 'The best way to reach Sugarloaf and fishing spots.' },
          { icon: '🚕', title: 'Taxis', text: 'Available locally.' },
          { icon: '🚆', title: 'VIA Rail', text: 'Useful for onward travel, not local trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Bridge tip:',
      text: 'Crossing the J.C. Van Horne Bridge into Québec takes you into a different time zone in summer — Québec stays on Eastern Time, one hour behind Atlantic.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax on most goods and services, including hotel stays in Campbellton.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec (across the bridge)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
      { label: 'Campbellton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '⛷️', label: 'Ski lift tickets: 15% HST' },
      { icon: '🛍️', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🐟', label: 'Salmon statue & waterfront: free' },
      { icon: '🌉', label: 'Crossing the bridge: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'Bilingual Region', text: 'English and French are both common; crossing into Québec, French becomes the main language.' },
    { icon: '❄️', title: 'Serious Winters', text: 'Heavy snow and cold are normal from November to March — dress for it and check road conditions.' },
    { icon: '🎣', title: 'Fishing Licences', text: 'Atlantic salmon angling requires a New Brunswick licence and follows strict seasonal rules.' },
    { icon: '🕐', title: 'Crossing Time Zones', text: 'Québec just across the bridge stays on Eastern Time — it can be an hour behind Campbellton in summer.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚑', title: 'Check the ER', text: 'The Campbellton Regional Hospital’s emergency department has faced staffing-related disruptions in the past — check current status before relying on it for urgent care.' },
    { icon: '🪶', title: 'Whose Land', text: 'Campbellton sits on the traditional territory of the Mi’gmaq, near the Mi’gmaq community of Listuguj across the river.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Campbellton Regional Hospital', '189 Lily Lake Rd', 'Call 911 · 811 for advice'] },
  ],
};

export default CAMPBELLTON;
