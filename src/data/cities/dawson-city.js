// Dawson City — данные страницы /city/dawson-city (Доусон-Сити, ЮКОН)
// Видео Доусона в бесплатных банках нет (Pexels не предлагает клипов по
// этому запросу). В шапке фото с Wikimedia Commons — Queen Street /
// Second Avenue, цветные исторические фасады на грунтовой улице, автор
// Prof Ranga Sai, 04.07.2026, CC0 (подпись не обязательна, указана для
// единообразия). GPS 64.062, -139.434 — совпадает с центром Доусона.
// Население — перепись 2021: городок (municipality) 1 577 (+14.7% к
// 2016); отдельно StatCan даёт population centre 1 092 — используем
// показатель по муниципалитету, как для других канадских городов на сайте.
// UNESCO: в сентябре 2023 Tr'ondëk-Klondike (городище Доусона плюс семь
// других объектов на территории Tr'ondëk Hwëch'in) включён в список
// Всемирного наследия — первый культурный объект Юкона.
// Больница — Dawson City Community Hospital, 501 6th Ave; заявлено ER
// 24/7, но в 2023 местная пожарная служба публично говорила о пробелах
// в скорой помощи (CBC) — предупреждение вместо гарантии.
// Транспорт: собственного городского транзита нет, передвижение пешком
// или на машине.
// Паром George Black (бесплатный, через реку Юкон к West Dawson и трассе
// Top of the World Highway) работает примерно с середины мая до середины
// октября; зимой иногда строят ледовую переправу, но в последние годы
// это ненадёжно из-за колебаний температуры (CBC, несколько лет подряд
// переправу не могли построить или она быстро ломалась) — предупреждение,
// не обещание.
// Diamond Tooth Gerties — казино с канканом, сезон начинается в мае
// (подтверждено на май 2026).
// Налог — как и во всём Юконе, только федеральный GST 5%, территориального
// налога с продаж нет.
// Из общих знаний: Klondike Gold Rush 1898, хижины Jack London и Robert
// Service, драга Dredge No. 4, Midnight Dome, Tr'ondëk Hwëch'in First
// Nation, Top of the World Highway в Аляску, время в пути.

export const DAWSON_CITY = {
  slug: 'dawson-city',
  name: 'Dawson City',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Heart of the Klondike Gold Rush',
  accentLevel: 'gold',
  heroIcon: '⛏️',
  heroImage: '/Cities/DawsonCity/hero.jpg',
  heroCredit: 'Photo: Prof Ranga Sai / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 64.0601, lon: -139.4322 },
  subtitle: 'Boomtown of the 1898 Gold Rush',
  description:
    'Where the Klondike River meets the Yukon, Dawson City exploded from wilderness to a city of 30,000 almost overnight during the 1898 gold rush — then settled into the small, wooden-boardwalk town you see today. Its historic townsite is now part of a UNESCO World Heritage Site, and gold panning, cancan shows and the midnight sun still draw travellers north.',

  actions: [
    { label: 'Explore Dawson City', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.6K (2021)' },
    { label: 'Status', value: 'UNESCO World Heritage (2023)' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈6 h by car' },
    { label: 'To Alaska border', value: '≈1 h 30 min by car' },
  ],

  badges: ['Gold Rush History', 'UNESCO Heritage', 'Midnight Sun'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 1 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1,577', label: 'People in Dawson City in the 2021 census — up 14.7% in five years', level: 'gold' },
    { value: '30,000', label: 'Estimated population at the peak of the 1898 Klondike Gold Rush', level: 'purple' },
    { value: '2023', label: 'Year the Dawson townsite joined the Tr’ondëk-Klondike UNESCO World Heritage Site', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Front Street', icon: '🏛️', tag: '🏛️ Historic', tagLevel: 'gold', meta: 'Boardwalks, false-front buildings and the SS Keno sternwheeler' },
    { name: 'Downtown Grid', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'blue', meta: 'Gravel streets lined with gold-rush-era saloons and hotels' },
    { name: 'West Dawson', icon: '🛶', tag: '🛶 Across the river', tagLevel: 'purple', meta: 'Reached by the George Black ferry or a winter ice crossing' },
    { name: 'Klondike River Valley', icon: '⛏️', tag: '⛏️ Mining', tagLevel: 'danger', meta: 'Historic and active gold claims along Bonanza and Eldorado creeks' },
    { name: 'Midnight Dome', icon: '🏔️', tag: '🏔️ Viewpoint', tagLevel: 'olive', meta: 'Hilltop above town with views over the Klondike and Yukon rivers' },
    { name: 'Tr’ondëk Hwëch’in Lands', icon: '🪶', tag: '🪶 First Nation', tagLevel: 'safe', meta: 'Traditional territory woven through the townsite and surrounding valley' },
  ],

  attractions: [
    {
      name: 'Diamond Tooth Gerties Gambling Hall',
      icon: '🎲',
      text: 'Canada’s oldest casino, with nightly cancan shows and gold-rush atmosphere. Opens for the summer season each May.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Evenings', level: 'purple' }],
    },
    {
      name: 'S.S. Keno National Historic Site',
      icon: '🚢',
      text: 'A restored sternwheeler on the Yukon River waterfront, once used to haul ore from the mines.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Free to view', level: 'safe' }],
    },
    {
      name: 'Dredge No. 4',
      icon: '⚙️',
      text: 'One of the largest wooden-hulled gold dredges in North America, preserved on Bonanza Creek south of town.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Tours', level: 'blue' }],
    },
    {
      name: 'Midnight Dome',
      icon: '🏔️',
      text: 'A short drive or hike above town for sweeping views of Dawson, the river confluence and the surrounding hills — especially striking near the summer solstice.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Views', level: 'gold' }],
    },
    {
      name: 'Jack London & Robert Service Cabins',
      icon: '📖',
      text: 'Replica and relocated cabins linked to the two writers who made the Klondike famous, with readings held in summer.',
      tags: [{ label: 'Literary', level: 'purple' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Gold Panning',
      icon: '🪙',
      text: 'Try your luck on Bonanza Creek, where the original 1896 gold strike happened, or at a town-based panning outfit.',
      tags: [{ label: 'Classic', level: 'gold' }, { label: 'Family', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Gold Creeks and River Valleys',
  outdoor: [
    { icon: '🏔️', name: 'Midnight Dome Trail', dist: 'Above town', text: 'Hike or drive up for panoramic valley views.' },
    { icon: '🪙', name: 'Bonanza Creek', dist: '≈15 min', text: 'Site of the original 1896 gold discovery; try panning.' },
    { icon: '🛶', name: 'Yukon River Paddling', dist: 'Downtown', text: 'Canoe trips on the river the gold rush was built around.' },
    { icon: '🥾', name: 'Ridge Road Trail', dist: 'Near town', text: 'Hiking trails through the hills above the valley.' },
    { icon: '🚗', name: 'Top of the World Highway', dist: 'Via ferry', text: 'A scenic, seasonal gravel road to the Alaska border.' },
    { icon: '🌌', name: 'Aurora & Midnight Sun', dist: 'Year-round', text: 'Near-endless summer daylight and winter northern lights.' },
  ],

  food: [
    { icon: '🍺', title: 'Saloons & Pubs', area: 'Front Street', areaLevel: 'gold', text: 'Gold-rush-themed bars and live music.' },
    { icon: '🐟', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Yukon River salmon and Arctic char.' },
    { icon: '🥞', title: 'Classic Diners', area: 'Downtown', areaLevel: 'olive', text: 'Hearty breakfasts fuel a day of sightseeing.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops among the historic storefronts.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries and cranberries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 1, note: 'Breakup', text: 'The Yukon River ice breaks up; many attractions are still closed.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Nearly 24-hour daylight, open attractions and the ferry running.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Shutting down', text: 'A brief colourful window before most seasonal businesses close.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'Deep cold and a tiny year-round population — a dramatic, remote experience.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Klondike Highway runs year-round from Whitehorse; the seasonal, gravel Top of the World Highway links to Alaska via the George Black ferry.',
      time: '≈6 h from Whitehorse',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Dawson City Airport (YDA) has limited scheduled flights, mainly connecting via Whitehorse.',
      time: 'Limited flights',
    },
    {
      icon: '⛴️',
      title: 'George Black Ferry',
      text: 'A free government ferry crosses the Yukon River to West Dawson and the Top of the World Highway, roughly mid-May to mid-October.',
      time: 'Seasonal, check status',
    },
    {
      icon: '🧊',
      title: 'Winter Crossing',
      text: 'In some winters an ice crossing links West Dawson to town, but warmer winters have made it unreliable in recent years — don’t count on it.',
      time: 'Check conditions',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Historic hotels and inns among the gold-rush buildings.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dawson+City+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dawson%20City%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛶',
      title: 'West Dawson',
      area: 'Across the river',
      text: 'Quieter campgrounds reached by the George Black ferry.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Dawson+Yukon', level: 'blue' },
      ],
    },
    {
      icon: '⛏️',
      title: 'Klondike Valley',
      area: 'Near Bonanza Creek',
      text: 'Lodges and campgrounds close to the historic gold claims.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Bonanza+Creek+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Local Transit',
      text: 'Dawson City has no public bus system — the historic downtown grid is small enough to explore entirely on foot, and a car or the free George Black ferry covers the rest.',
      linkLabel: 'City of Dawson',
      linkUrl: 'https://cityofdawson.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is a few compact blocks of boardwalk streets.' },
          { icon: '⛴️', title: 'George Black Ferry', text: 'Free crossing to West Dawson, seasonal.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Dredge No. 4, Midnight Dome and the creeks.' },
          { icon: '🚕', title: 'Taxis', text: 'Limited local service — arrange ahead.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Heading to Alaska via the Top of the World Highway? Check the George Black ferry’s operating status before you go — it closes for weather, maintenance and the shoulder seasons.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Dawson City has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Dawson City / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🎲', label: 'Diamond Tooth Gerties: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏔️', label: 'Midnight Dome viewpoint: free' },
      { icon: '⛴️', label: 'George Black ferry: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour and panning guides: 10–15%.',
  },

  practical: [
    { icon: '🚗', title: 'Remote & Seasonal', text: 'Many businesses, the ferry and the Top of the World Highway close outside summer — plan around the season.' },
    { icon: '☀️', title: 'Midnight Sun', text: 'Around the summer solstice, Dawson gets close to 24 hours of daylight — bring an eye mask if you need dark to sleep.' },
    { icon: '❄️', title: 'Deep Winter Cold', text: 'Winters are extreme, with long periods well below freezing — this is a summer-focused destination for most visitors.' },
    { icon: '🧊', title: 'Don’t Rely on the Ice', text: 'The winter ice crossing to West Dawson is not guaranteed every year — check current conditions before planning around it.' },
    { icon: '⏰', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer.' },
    { icon: '🚑', title: 'Limited Emergency Services', text: 'This is a small, remote community — local reports have noted gaps in ambulance coverage. Call 911 and expect a wait.' },
    { icon: '🪶', title: 'Whose Land', text: 'Dawson City sits on the traditional territory of the Tr’ondëk Hwëch’in, whose history is central to the Tr’ondëk-Klondike UNESCO World Heritage Site.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Dawson City Community Hospital', '501 6th Ave', 'Emergency: call 911 · Yukon HealthLine 811'] },
  ],
};

export default DAWSON_CITY;
