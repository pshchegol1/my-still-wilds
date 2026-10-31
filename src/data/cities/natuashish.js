// Natuashish — данные страницы /city/natuashish (Натуашиш, НЬЮФАУНДЛЕНД
// И ЛАБРАДОР)
// Фото/видео: ни на Wikimedia Commons, ни на Pexels не нашли ни одного
// свободного изображения самого посёлка — община маленькая, очень
// удалённая и появилась недавно (2002–2003), свободных снимков в
// открытых источниках просто нет. Поиск по Commons сильно засорён
// совпадением с кодом аэропорта (IATA YNP совпадает с сокращением
// другого парка на Викискладе). Пользователь подтвердил — делаем
// страницу без heroImage/heroVideo: сайт сам показывает красивый
// фолбэк (градиент + иконка + "Photo coming soon"), это сделано
// намеренно, не баг.
// Население — перепись 2021: 856 человек (-8.7% к 2016, 938); состав
// 420 мужчин/435 женщин. Отдельно — зарегистрированная численность
// народа Mushuau Innu First Nation на октябрь 2019: 1072 человека,
// из них 991 проживает в резервации (это не то же самое, что перепись
// населения, не смешиваем цифры).
// История: посёлок — результат переселения общины мушуау-инну с острова
// Илуикояк (Davis Inlet, ≈15 км) в 2002–2003 годах; первая группа из
// 150 семей переехала в декабре 2002, переселение завершилось в течение
// следующих ≈7–12 месяцев (источники расходятся, указываем "в течение
// года"). Это одно из самых дорогих и резонансных переселений коренной
// общины в истории Канады — оценки стоимости выросли с ≈$82 млн (1996)
// до более $152 млн к моменту переезда. Статус федеральной резервации
// получен в 2003. До этого община дважды переселялась властями:
// Nutak (1948, без консультаций с жителями) и затем Davis Inlet (1967).
// Natuashish Airport (YNP) — около 3 км к западу от посёлка; дорог,
// связывающих с остальной Канадой, нет, только самолёт или (летом)
// морской транспорт.
// Медцентр — Natuashish Community Clinic, работает Labrador-Grenfell
// Health совместно с Mushuau Innu Health Commission (MIHC); экстренные
// случаи эвакуируют по воздуху. Телефоны найдены в старом community
// profile — указываем с оговоркой, без точного адреса.
// Налог — HST 15% (по всей провинции).

export const NATUASHISH = {
  slug: 'natuashish',
  name: 'Natuashish',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Mushuau Innu Community",
  accentLevel: 'blue',
  heroIcon: '🪶',
  // Фото/видео не найдены в открытых источниках — страница намеренно
  // без heroImage/heroVideo, сайт показывает фолбэк с иконкой.
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 55.9167, lon: -61.1833 },
  subtitle: 'Home of the Mushuau Innu First Nation',
  description:
    "On the north coast of Labrador, Natuashish is the home of the Mushuau Innu First Nation, built in 2002–2003 after the community relocated from Davis Inlet. Reachable only by air or sea, it is a small, close-knit Innu community rebuilding its life and culture on its own terms, on the shore of Little Sango Pond.",

  actions: [
    { label: 'Explore Natuashish', href: '#neighbourhoods' },
    { label: 'Learn More', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈860 (2021)' },
    { label: 'Nation', value: 'Mushuau Innu First Nation' },
    { label: 'Languages', value: 'Innu-aimun, English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Road Access', value: 'None — fly or sail in' },
    { label: 'Founded', value: '2002–2003' },
  ],

  badges: ['Mushuau Innu', 'Fly-In Only', 'North Coast of Labrador'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 1 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '856', label: 'People in Natuashish in the 2021 census', level: 'blue' },
    { value: '2002', label: 'Year the first families relocated here from Davis Inlet', level: 'purple' },
    { value: '≈$152M', label: 'Final estimated cost of the relocation from Davis Inlet — one of the most expensive in Canadian history', level: 'danger' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Community Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Band council office, school, clinic and community buildings' },
    { name: 'Little Sango Pond Shore', icon: '🌊', tag: '🌊 Waterfront', tagLevel: 'blue', meta: 'The pond the community is built beside' },
    { name: 'Natuashish Airport Area', icon: '✈️', tag: '✈️ Access', tagLevel: 'olive', meta: 'About 3 km west of the community — the only way in or out' },
    { name: 'Former Davis Inlet Site', icon: '🏝️', tag: '🏝️ History', tagLevel: 'purple', meta: 'The community’s previous home on Iluikoyak Island, about 15 km away' },
  ],

  attractions: [
    {
      name: 'Mushuau Innu First Nation School',
      icon: '🏫',
      text: 'The community school, expanded and renovated in recent years — a centre of daily life and language revitalization for Innu-aimun.',
      tags: [{ label: 'Community', level: 'gold' }, { label: 'Not a tourist site', level: 'caution' }],
    },
    {
      name: 'Little Sango Pond',
      icon: '🌊',
      text: 'The pond on which the community sits, offering quiet shoreline and, in season, fishing.',
      tags: [{ label: 'Local life', level: 'blue' }, { label: 'Fishing', level: 'safe' }],
    },
    {
      name: 'Traditional Land & Hunting Grounds',
      icon: '🏞️',
      text: 'The surrounding land remains central to Mushuau Innu life, including seasonal hunting and gathering on traditional territory — a key reason the community moved away from Davis Inlet.',
      tags: [{ label: 'Cultural', level: 'purple' }, { label: 'Respect protocols', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Coastal Labrador Land',
  outdoor: [
    { icon: '🎣', name: 'Fishing', dist: 'Little Sango Pond & coast', text: 'Traditional and recreational fishing in local waters.' },
    { icon: '🦌', name: 'Caribou Hunting', dist: 'Traditional territory', text: 'An important seasonal activity for the Mushuau Innu.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of travelling the land in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around the community', text: 'Northern lights visible on clear nights.' },
  ],

  food: [
    { icon: '🦌', title: 'Caribou & Country Food', area: 'Traditional', areaLevel: 'danger', text: 'Caribou, fish and other land-based foods remain central to Innu life.' },
    { icon: '🛒', title: 'Community Store', area: 'In town', areaLevel: 'blue', text: 'Basic groceries, with prices reflecting fly-in costs.' },
    { icon: '🐟', title: 'Local Fish', area: 'Little Sango Pond', areaLevel: 'safe', text: 'Fish from the pond and nearby coastal waters.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 1, note: 'Breakup', text: 'Ice and snow retreat slowly on the Labrador coast.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Open season', text: 'The mildest season, with fishing and land-based activities.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 2, note: 'Hunting season', text: 'A key season for caribou hunting on the land.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and snow, with snowmobile travel across the land.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Natuashish Airport (YNP), about 3 km west of the community, is the main way in — flights connect through other coastal Labrador communities. There is no road access.',
      time: 'Fly-in only',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Coastal boats and supply ships serve Natuashish during the ice-free season.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '🏘️',
      title: 'Community',
      area: 'Limited options',
      text: 'Natuashish has very limited visitor accommodation — this is a residential Innu community, not a tourism destination. Travel here is typically for official, community or family reasons; contact the band office in advance.',
      links: [],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'No Public Transit',
      text: 'Natuashish is a small, compact community reached on foot, by snowmobile or by truck — there is no public transit system.',
      linkLabel: 'Mushuau Innu First Nation',
      linkUrl: 'https://innu.ca/',
    },
    modes: [
      {
        icon: '🚶',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The community is small and walkable.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
          { icon: '🚚', title: 'Truck', text: 'Used for local trips and airport runs.' },
        ],
      },
    ],
    proTip: {
      label: 'Visitor note:',
      text: 'Natuashish is a residential First Nation community rebuilt after a difficult history — visitors should contact the band office ahead of any trip and follow local guidance and protocols.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services across the province.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Natuashish / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🛒', label: 'Store goods: 15% HST' },
      { icon: '✈️', label: 'Flights and freight: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
    ],
    tippingNote:
      'Natuashish has no tourism or hospitality industry to speak of — standard Canadian tipping norms don’t really apply here.',
  },

  practical: [
    { icon: '✈️', title: 'Fly-In Only', text: 'No roads connect Natuashish to the rest of Canada — all travel is by air or, in summer, by sea.' },
    { icon: '🏘️', title: 'Not a Tourist Destination', text: 'This is a residential First Nation community, not set up for casual visitors — plan any trip through the band office.' },
    { icon: '💰', title: 'High Prices', text: 'Groceries and goods cost significantly more here, since everything arrives by plane or summer boat.' },
    { icon: '❄️', title: 'Harsh Climate', text: 'Winters are long and cold on the Labrador coast — dress in serious layers.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🤝', title: 'Respect & Context', text: 'Natuashish exists because of a difficult history of forced relocation (Nutak in 1948, Davis Inlet in 1967, Natuashish in 2002–03) — approach the community with respect and awareness of that history.' },
    { icon: '🪶', title: 'Whose Land', text: 'Natuashish is home to the Mushuau Innu First Nation, within Nitassinan, the traditional territory of the Innu.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Natuashish Community Clinic', 'Run with the Mushuau Innu Health Commission', 'Emergencies are medevac’d · call 911 where available'] },
  ],
};

export default NATUASHISH;
