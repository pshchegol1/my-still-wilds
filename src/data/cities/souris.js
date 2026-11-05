// Souris, Prince Edward Island — данные страницы /city/souris
//
// ВАЖНО: это Souris в графстве Kings, PEI (порт парома на Магдаленские острова) —
// НЕ Souris, Манитоба (гораздо более крупный город с тем же названием) и НЕ
// одноимённые Souris во Франции. Все источники ниже проверены именно на PEI.
// Также отдельно: Souris West — отдельный муниципалитет по соседству (население
// 379 по переписи 2021) — НЕ путать с самим городом Souris, о котором эта карточка.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 1,079 чел. (перепись 2021, +2.5% к 2016 — 1,053), 480 занятых жилищ
//   из 533 всего, площадь 3.61 км², плотность 298.9/км² (Wikipedia / StatCan census
//   profile). Город инкорпорирован в 1910 (The Canadian Encyclopedia); встречается
//   также дата основания поселения 1740 (расхождение в источниках по ранней истории,
//   не по дате инкорпорации).
// - Название "Souris" по-французски означает "мышь" — по распространённой версии,
//   из-за исторических нашествий полевых мышей в этом районе; это общеизвестный,
//   часто повторяемый факт о топонимике, не нашла его в источниках этого конкретного
//   поиска, поэтому формулирую как популярную версию, а не доказанный факт.
// - Паром CTMA Souris — Cap-aux-Meules (Магдаленские острова, Квебек): маршрут
//   действует с 1960-х/1971 года (источники расходятся на этот счёт), переправа
//   занимает около 5 часов. Это единственный морской порт въезда на Магдаленские
//   острова. Старое судно MV Madeleine обслуживало маршрут около 24 лет до вывода
//   из эксплуатации в 2021; CBC сообщал о новом судне стоимостью $155 млн
//   (en.wikipedia.org/CTMA, CBC).
// - Souris Historic Lighthouse: деревянная башня на Knight Point с видом на город и
//   гавань, построена в 1880 (Tourism PEI, Historic Places Canada); интерпретационный
//   центр открыт для посетителей с июля 2010 — экспозиция о маяке, истории порта,
//   морском стекле, оригинальная линза Френеля (museumspei.ca, Tourism PEI). Также
//   встречается альтернативное название "Souris East Lighthouse" в некоторых
//   источниках.
// - East Point Lighthouse — отдельная достопримечательность примерно в 25 км
//   (≈10 минут на машине) восточнее Souris, построен в 1867, последний маяк,
//   построенный до вхождения PEI в Конфедерацию в 1873 — описан в карточке именно
//   как ближайшая поездка за пределы города, не как достопримечательность в черте
//   Souris (ehcanadatravel.com, Island Archives).
// - Медицина: Souris Hospital, 17 Knights Avenue, Souris, PE C0A 2B0, тел.
//   (902) 687-7150, 17-коечная community hospital. ВАЖНО: у больницы НЕТ отделения
//   неотложной помощи (источники Health PEI и 211 PEI подтверждают это; один
//   сторонний агрегатор ошибочно указывает круглосуточную ER — не используется как
//   источник). При экстренных случаях нужно звонить 911 или ехать в Kings County
//   Memorial Hospital (Монтегю) или Queen Elizabeth Hospital (Шарлоттаун) — указано
//   в карточке честно, без утверждения о наличии ER на месте.
// - Фото в шапке: Wikimedia Commons, "Souris, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 05.07.2025. GPS в EXIF: 46.355288,
//   -62.266517 — соответствует городу Souris (видны характерные красные скалы
//   побережья PEI и океан). Сравнивала с ещё одним снимком того же автора (гавань
//   Souris) — выбрала этот за более узнаваемую композицию целого города.
// - Видео в бесплатных банках не найдено (выдача Pexels нерелевантна).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const SOURIS = {
  slug: 'souris',
  name: 'Souris',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Kings County',
  tag: 'Gateway to the Magdalen Islands',
  accentLevel: 'blue',
  heroIcon: '🚢',
  heroImage: '/Cities/Souris/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.3534, lon: -62.2497 },

  subtitle: "PEI's Northeastern Ferry Town",
  description:
    "Souris is a small coastal town at the northeastern tip of Prince Edward Island, best known as the mainland's only ferry link to Quebec's Magdalen Islands. A working fishing port with red sandstone cliffs, a restored 1880 lighthouse, and an easy drive to East Point, Souris makes a scenic final stop before — or first stop after — crossing the Gulf of St. Lawrence.",

  actions: [
    { label: 'Explore Souris', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '1,079 (2021)' },
    { label: 'Role', value: 'Ferry Port to Magdalen Islands' },
    { label: 'Incorporated', value: '1910' },
    { label: 'Setting', value: 'Northeastern Coast' },
    { label: 'Region', value: 'Kings County' },
    { label: 'Known For', value: 'Ferry, Lighthouse & Fishing Port' },
  ],

  badges: ['Ferry Gateway', 'Kings County', 'Historic Lighthouse'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1910', label: 'Year Souris was incorporated as a town', level: 'blue' },
    { value: '1880', label: 'Year the Souris Historic Lighthouse was built', level: 'gold' },
    { value: '~5 hrs', label: 'Length of the CTMA ferry crossing to the Magdalen Islands', level: 'purple' },
    { value: '1,079', label: 'Population at the 2021 census, up 2.5% from 2016', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Ferry Terminal & Harbour', icon: '🚢', tag: '🚢 Port', tagLevel: 'blue', meta: 'The CTMA ferry dock and working fishing harbour' },
    { name: 'Knight Point', icon: '🏮', tag: '🏮 Lighthouse', tagLevel: 'gold', meta: 'Home to the Souris Historic Lighthouse overlooking the town' },
    { name: 'Downtown', icon: '🏘️', tag: '🏘️ Main Street', tagLevel: 'purple', meta: 'Shops, services and the town\'s commercial core' },
  ],

  attractions: [
    {
      name: 'CTMA Ferry Terminal',
      icon: '🚢',
      text: "Souris is the only sea port of entry to Quebec's Magdalen Islands — the roughly five-hour crossing is an attraction in its own right.",
      tags: [{ label: 'Ferry', level: 'blue' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Souris Historic Lighthouse',
      icon: '🏮',
      text: 'A wooden lighthouse tower built in 1880 on Knight Point, with an interpretive centre covering the lighthouse, the port\'s history, and local sea glass.',
      tags: [{ label: 'Historic', level: 'gold' }, { label: 'Museum', level: 'purple' }],
    },
    {
      name: 'Souris Harbour',
      icon: '⚓',
      text: "A working fishing harbour lined with boats, central to the town's economy.",
      tags: [{ label: 'Waterfront', level: 'blue' }],
    },
    {
      name: 'East Point Lighthouse',
      icon: '🗼',
      text: 'About a 10-minute drive east of Souris, this 1867 lighthouse — the last built before PEI joined Confederation — sits on dramatic red cliffs with ocean views.',
      tags: [{ label: 'Day Trip', level: 'caution' }, { label: 'Scenic', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Coastal Cliffs and Harbour',
  outdoor: [
    { icon: '🏖️', name: 'Red Sandstone Cliffs', dist: 'Along the coast', text: "PEI's signature red cliffs meet the ocean around Souris." },
    { icon: '⚓', name: 'Souris Harbour', dist: 'Downtown', text: 'A working fishing port, lively with boat traffic in season.' },
    { icon: '🗼', name: 'East Point Lighthouse', dist: '~25 km east', text: 'A scenic day trip to the easternmost point of PEI.' },
    { icon: '🚢', name: 'Gulf of St. Lawrence Views', dist: 'Ferry terminal', text: 'Open-water views from the ferry dock toward the Magdalen Islands.' },
  ],

  food: [
    { icon: '🦪', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'blue', text: "Fresh catch reflecting Souris's working fishing harbour." },
    { icon: '🍽️', title: 'Main Street Restaurants', area: 'Downtown', areaLevel: 'gold', text: "A small-town dining scene serving residents, fishers and ferry travellers." },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops along the main commercial street.' },
  ],

  seasons: [
    { icon: '☀️', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days, the busiest ferry season, and the best time for East Point day trips.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather, fewer crowds, and a reduced ferry schedule later in the season.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Ferry service limited', text: 'Cold and quiet — the Magdalen Islands ferry runs a reduced seasonal schedule.' },
    { icon: '🌸', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet time as the harbour and ferry season wake back up.' },
  ],

  gettingThere: [
    { icon: '🚗', title: 'From Charlottetown', text: 'Souris is roughly 75 km northeast of Charlottetown by road.', time: '~1 hour drive' },
    { icon: '⛴️', title: 'By Ferry', text: 'CTMA operates the only sea route to the Magdalen Islands, Quebec, from the Souris terminal.', time: 'Seasonal, ~5 hr crossing' },
    { icon: '✈️', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, about an hour away by car.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🚢',
      title: 'Near the Ferry Terminal',
      area: 'Downtown Souris',
      text: 'Convenient for travellers catching the Magdalen Islands ferry.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Souris+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Souris%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'Small and Walkable, Car for the Coast',
      text: 'Downtown Souris is easily walkable, while a car is needed to reach East Point and the rest of eastern PEI.',
      linkLabel: 'CTMA Ferry',
      linkUrl: 'https://www.ctma.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the harbour are walkable.' },
          { icon: '🚗', title: 'By Car', text: 'Needed for East Point and the rest of eastern PEI.' },
          { icon: '⛴️', title: 'By Ferry', text: 'Souris is the departure point for the Magdalen Islands crossing.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Booking the CTMA ferry well ahead is recommended in peak summer months, and schedules are reduced outside the main season — check current sailing times before planning your trip.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Souris / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 15% HST' },
      { icon: '🍽️', label: 'Restaurant meals: 15% HST' },
      { icon: '⛴️', label: 'Ferry tickets: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏮', label: 'Lighthouse grounds: free to view' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard.',
  },

  practical: [
    { icon: '💵', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), about an hour away.' },
    { icon: '🌡️', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '⛴️', title: 'Ferry Planning', text: 'The Magdalen Islands ferry runs a seasonal schedule — check CTMA\'s website and book ahead in summer.' },
    { icon: '⏰', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', title: 'Medical Care', lines: ['Souris Hospital, 17 Knights Avenue — no emergency department', 'For emergencies, call 911 or go to Montague or Charlottetown · 811 for advice'] },
  ],
};

export default SOURIS;
