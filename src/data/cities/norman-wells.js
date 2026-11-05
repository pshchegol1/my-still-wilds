// Norman Wells — данные страницы /city/norman-wells (Норман-Уэллс,
// СЕВЕРО-ЗАПАДНЫЕ ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — совсем нерелевантная выдача,
// портреты пожилых людей). В шапке фото с Wikimedia Commons — город
// с воздуха на реке Маккензи, автор Quintin Soloviev, 28.09.2019,
// CC BY 4.0 (GPS 65.287, -126.824 — совпадает с Норман-Уэллс; подпись
// к файлу называет население 673 и статус нефтяного города в регионе
// Sahtu — совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: 673 (-13.5% к 2016, 778).
// ГЛАВНЫЙ АКТУАЛЬНЫЙ ФАКТ: нефть открыта компанией Imperial Oil
// 23.08.1920 (мировой рекорд на тот момент — самая северная скважина);
// добыча то останавливалась (1924), то возобновлялась (НПЗ 1936,
// трубопровод Canol во Вторую мировую — первая нефть пошла по трубе
// 19.12.1943, но до Уайтхорса дошла только 01.04.1945; труба заброшена
// после войны); трубопровод до юга (Norman Wells Pipeline) достроен в
// 1985. Добыча ОСТАНОВЛЕНА в августе 2026 года — 106 лет производства
// завершились 1 сентября 2026 (по собственным материалам Imperial Oil).
// Причина — истощение месторождения и нерентабельность; ответственность
// за энергоснабжение города передана NWT Power Corporation в августе
// 2026. Далее — демонтаж и консервация (3–5 лет), полная рекультивация
// займёт около 20 лет, начало — не раньше 2031 года. Налоги Imperial
// Oil (~$6 млн/год) составляли около 70% бюджета города — это создаёт
// серьёзную экономическую неопределённость для Норман-Уэллса прямо
// сейчас.
// Медцентр — новое здание Sahtú Got'iné Regional Health and Social
// Services Centre открыто (заменило старое здание 40-летней давности);
// точного актуального адреса не нашли — указываем с оговоркой.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: горы Norman Range/Franklin Mountains на фоне, джет-
// боты по Маккензи, статус региона Sahtu, время в пути.

export const NORMAN_WELLS = {
  slug: 'norman-wells',
  name: 'Norman Wells',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · A Century of Oil, Now Closing',
  accentLevel: 'blue',
  heroIcon: '🛢️',
  heroImage: '/Cities/NormanWells/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 65.2822, lon: -126.8325 },
  subtitle: 'On the Mackenzie River, at the End of an Oil Era',
  description:
    "Norman Wells grew up around an oil discovery made in 1920 — once the world's most northerly producing well — and the dramatic wartime Canol Pipeline project of the 1940s. In August 2026, after 106 years, Imperial Oil shut in production here for good, a major turning point for this small Mackenzie River town as it figures out what comes next.",

  actions: [
    { label: 'Explore Norman Wells', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈673 (2021)' },
    { label: 'Known For', value: 'Century-Old Oilfield' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'None year-round — fly in' },
    { label: 'Oil Production', value: 'Ended August 2026' },
  ],

  badges: ['Mackenzie River', 'Oil History', 'Sahtu Region'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1920', label: 'Year Imperial Oil struck oil here — then the world’s most northerly producing well', level: 'gold' },
    { value: '106', label: 'Years of oil production, ending when Imperial shut in the field in August 2026', level: 'danger' },
    { value: '≈70%', label: 'Share of the town’s budget that came from Imperial’s property taxes', level: 'purple' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Shops, services and the airport, close together on the riverbank' },
    { name: 'Oilfield Area', icon: '🛢️', tag: '🛢️ Industry', tagLevel: 'blue', meta: 'The Imperial Oil site now moving into decommissioning' },
    { name: 'Mackenzie Riverfront', icon: '🌊', tag: '🌊 River', tagLevel: 'safe', meta: 'The riverbank the town sits on, with Franklin Mountains views' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Access', tagLevel: 'purple', meta: 'The town’s main year-round link to the rest of the territory' },
  ],

  attractions: [
    {
      name: 'Oilfield History Sites',
      icon: '🛢️',
      text: 'Norman Wells grew from a 1920 oil strike and the dramatic WWII-era Canol Pipeline project, which ran crude 1,000 km to a refinery in Whitehorse. After 106 years, production ended here in August 2026, closing a major chapter of the town’s history.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Changing', level: 'caution' }],
    },
    {
      name: 'Mackenzie River Views',
      icon: '🌊',
      text: 'The town sits right on the Mackenzie River, with the Franklin Mountains (Norman Range) as a dramatic backdrop.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Free', level: 'safe' }],
    },
    {
      name: 'Canol Heritage Trail',
      icon: '🥾',
      text: 'The abandoned WWII pipeline route is now a famous, extremely remote backcountry hiking trail starting near Norman Wells — for serious, well-prepared wilderness travellers only.',
      tags: [{ label: 'Expert only', level: 'danger' }, { label: 'Multi-day', level: 'caution' }],
    },
    {
      name: 'Jet Boat & River Tours',
      icon: '🚤',
      text: 'Local operators run boat trips on the Mackenzie River, a classic way to see the region’s scale and scenery.',
      tags: [{ label: 'Guided', level: 'purple' }, { label: 'Seasonal', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Mackenzie River and Mountain Views',
  outdoor: [
    { icon: '🚤', name: 'River Boat Tours', dist: 'Mackenzie River', text: 'See the river and surrounding mountains by jet boat.' },
    { icon: '🥾', name: 'Canol Heritage Trail', dist: 'From Norman Wells', text: 'A legendary, extremely remote multi-day wilderness hike.' },
    { icon: '🎣', name: 'Fishing', dist: 'Mackenzie River', text: 'Northern fish species in the river and nearby lakes.' },
    { icon: '🏔️', name: 'Franklin Mountains Views', dist: 'Across the river', text: 'A dramatic mountain backdrop visible from town.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Regional trails', text: 'A key way of travelling the land in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights outside summer.' },
  ],

  food: [
    { icon: '🐟', title: 'River Fish', area: 'Local catch', areaLevel: 'blue', text: 'Fish from the Mackenzie River.' },
    { icon: '🦌', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties where available.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'purple', text: 'The main supply point for the Sahtu region.' },
    { icon: '🍽️', title: 'Restaurants', area: 'Town centre', areaLevel: 'gold', text: 'A small dining scene serving residents and visitors.' },
    { icon: '☕', title: 'Cafés', area: 'Town centre', areaLevel: 'safe', text: 'Coffee shops in the compact town centre.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves the Mackenzie River as days lengthen fast.' },
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Open season', text: 'Long daylight for river trips and the Canol Trail’s short hiking window.' },
    { icon: '🍂', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A quick transition before freeze-up and winter.' },
    { icon: '❄️', name: 'Winter', months: 'October — March', level: 'blue', rating: 3, note: 'Ice road season', text: 'Cold and snowy, with winter roads opening seasonal land access.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Norman Wells Airport has scheduled flights connecting to Yellowknife and Inuvik — the town’s only year-round link to the outside world.',
      time: 'Scheduled flights available',
    },
    {
      icon: '🧊',
      title: 'By Winter Road',
      text: 'A seasonal winter road connects Norman Wells to other Mackenzie Valley communities and highways when conditions allow.',
      time: 'Winter only',
    },
    {
      icon: '🚢',
      title: 'By Barge',
      text: 'Summer barge traffic on the Mackenzie River brings in bulk freight.',
      time: 'Seasonal cargo',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'No scheduled bus service connects Norman Wells to the rest of the territory.',
      time: 'No service',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norman+Wells+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Norman%20Wells%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🥾',
      title: 'Canol Trail Trips',
      area: 'Guided',
      text: 'Outfitters arrange logistics for the remote Canol Heritage Trail.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norman+Wells+Northwest+Territories', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Public Transit',
      text: 'Norman Wells is a small, compact town reached on foot, by taxi or by snowmobile — there is no public transit system.',
      linkLabel: 'Norman Wells',
      linkUrl: 'https://normanwells.com/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', title: 'Taxis', text: 'Available locally.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'With Imperial Oil’s operations winding down after 2026, services and the town’s economy may shift — check current conditions before planning a visit.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Norman Wells / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🛒', label: 'Store goods: 5% GST' },
      { icon: '🚤', label: 'River tours: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌊', label: 'Riverfront views: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. River and trail guides: 10–15%.',
  },

  practical: [
    { icon: '🛢️', title: 'Town in Transition', text: 'Imperial Oil shut in production here in August 2026 after 106 years, ending a role that provided about 70% of the town’s tax revenue — expect the local economy and services to be in flux for years to come.' },
    { icon: '✈️', title: 'Fly-In for Most of the Year', text: 'No permanent road connects Norman Wells to the rest of the territory — plan around flights, with a seasonal winter road as the only ground option.' },
    { icon: '🥾', title: 'Canol Trail Is Serious', text: 'The Canol Heritage Trail is one of the most remote, difficult hikes in Canada — go only with proper preparation, gear and ideally a guide.' },
    { icon: '❄️', title: 'Cold Winters', text: 'Winters are long and cold this far north — dress in serious layers.' },
    { icon: '⏰', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife and Inuvik.' },
    { icon: '🦌', title: 'Wildlife Caution', text: 'Bears and other wildlife are present on area trails — carry bear spray and make noise.' },
    { icon: '🪶', title: 'Whose Land', text: 'Norman Wells is in the Sahtu Region, on the traditional territory of the Sahtu Dene and Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Sahtú Got’iné Regional Health and Social Services Centre', 'Call 911 where available · 811 for advice'] },
  ],
};

export default NORMAN_WELLS;
