// Kootenay National Park — данные страницы /park/kootenay
//
// Фото: по просьбе используется только снимок с карточки
// (/bc/parks/Kootenay National Park.png) — он же герой. Достопримечательности
// с иконками (как у Kluane), галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Kootenay (главная): открыт круглый год, услуги для
//   посетителей май — середина октября; Visitor Centre — 7556 Main Street
//   East, Radium Hot Springs; тел. 250-347-9505 (май — середина октября);
//   Dispatch (не срочно, 24/7) 403-762-1470; дроны запрещены (штраф до
//   $25,000); все водоёмы Yoho и Kootenay закрыты для лодок и рыбалки до
//   31 марта 2027 (инвазивные виды, whirling disease); Radium Hot Springs —
//   минеральные горячие источники + прохладный бассейн, историческое место;
//   экскурсии к окаменелостям Burgess Shale.
// - Parks Canada / Canada Post (2020): парк создан 21 апреля 1920 года
//   соглашением о строительстве Banff-Windermere Highway (Hwy 93 South).
// - Parks Canada, "History of Highway 93 South": 1858 — Джеймс Гектор
//   назвал Vermilion Pass лучшим путём; стройка началась в 1911; по
//   соглашению 1919 года федеральное правительство строит дорогу в обмен
//   на 5 миль (8 км) земли по обе стороны — под национальный парк; парк
//   основан за три года до окончания дороги (1923); Sinclair Canyon — самый
//   трудный участок.
// - Площадь 1,406 км², часть Canadian Rocky Mountain Parks World Heritage
//   Site (UNESCO, 1984) — Wikipedia / Britannica.
// - Parks Canada, Day hikes: таблица троп (длина в одну сторону, время
//   туда-обратно, набор высоты) — Marble Canyon 0.9 км/30 мин/65 м; Paint
//   Pots 1 км/40 мин/35 м; Stanley Glacier 4.9 км/3 ч/405 м; Floe Lake
//   10.8 км/7 ч или 2 дня/1,120 м; Kindersley Pass 10 км/8 ч/1,250 м и
//   Sinclair Creek — минимум группа из 4 человек (гризли); Olive Lake
//   0.3 км, весной возможны закрытия из-за медведей; Rockwall Trail
//   54.1 км, 3-5 дней, 3,405 м, верхние участки под снегом до начала-
//   середины июля, осенью снег с конца сентября; Numa Creek закрыт.
//   Расстояния от Radium: Olive Lake 12 км, Paint Pots 86 км, Marble
//   Canyon 89 км, Continental Divide 96 км.
//   Всего больше 200 км троп.
// - Parks Canada, Points of interest: Paint Pots — три железистых
//   минеральных источника, окрашивающих землю охрой; Olive Lake —
//   изумрудное озеро на перевале Sinclair Pass; Continental Divide —
//   водораздел Тихого и Атлантического океанов, Fireweed Loop — лес после
//   пожара 1968 года; Kootenay Valley viewpoint — хребты Mitchell и
//   Vermilion; Stanley Glacier — окаменелости старше 500 млн лет,
//   экскурсии с гидом по записи; Dolly Varden — экспозиция о заборах и
//   переходах для животных.
// - Охра Paint Pots и народы ктунакса / секвепемк — по туристическим
//   источникам (не Parks Canada); на странице сформулировано осторожно.
// - Radium Hot Springs: горячий бассейн 37-40 °C (Parks Canada);
//   прохладный — 27-29 °C (источники расходятся) → на странице без цифры.
//   Работа зимой официально НЕ подтверждена — "check hours".
// - Кемпинги: Redstreak (весь бронируется, oTENTik только здесь), McLeod
//   Meadows и Marble Canyon (половина мест бронируется, остальные — кто
//   первый); даты сезона меняются каждый год — на странице без дат.
// - Бараны у Radium и на Hwy 93 — из страницы Bighorn Sheep (Parks
//   Canada). Горные козы у Radium — страница Mountain Goat.
// - НЕ подтверждено и не используется: высота высочайшей вершины,
//   число посетителей, точные даты кемпингов, работа бассейна зимой,
//   Kootenay Park Lodge.

const IMAGE = '/bc/parks/Kootenay National Park.png';

export const KOOTENAY = {
  slug: 'kootenay',
  name: 'Kootenay National Park',
  shortName: 'Kootenay',
  province: 'British Columbia',
  tag: 'UNESCO World Heritage · Est. 1920',
  heroImage: IMAGE,
  heroCaption: 'Kootenay National Park · BC',
  description:
    'Born from a highway: Kootenay was created in 1920 so a road could cross the Rockies. Today Highway 93 South winds past painted ochre springs, a narrow marble canyon, 500-million-year-old fossils, and ends at the steaming pools of Radium Hot Springs.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1920' },
    { label: 'Area', value: '1,406 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Hot Pool', value: '37–40 °C' },
    { label: 'Trails', value: '200+ km' },
    { label: 'Rockwall Trail', value: '54 km' },
  ],

  badges: ['UNESCO', 'Hot Springs', 'Burgess Shale'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '♨️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'A Park Made By A Road',
    emoji: '🛣️',
    title: 'Kootenay Was Traded For A Highway',
    text: 'In 1919, British Columbia and Ottawa struck a deal: the federal government would finish the Banff-Windermere road across the Rockies, and in return receive 8 km of land on each side of it for a national park. Kootenay was born on April 21, 1920 — three years before the road was finished. Workers cut through Sinclair Canyon with pick axes, shovels, and dynamite. Today that road is Highway 93 South, and the park is part of the Canadian Rocky Mountain Parks World Heritage Site.',
    stats: [
      { value: '1920', label: 'Park established', level: 'gold' },
      { value: '1923', label: 'Road completed', level: 'blue' },
      { value: '8 km', label: 'Land on each side of the road', level: 'safe' },
      { value: '1984', label: 'UNESCO World Heritage', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Radium Hot Springs',
      icon: '♨️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Mineral hot pool kept at 37–40 °C plus a cool swimming pool, beneath the cliffs of Sinclair Canyon. A registered historic place.',
    },
    {
      name: 'Marble Canyon',
      icon: '🏞️',
      tag: 'Canyon',
      tagLevel: 'blue',
      meta: 'Short trail over bridges above a deep, narrow canyon — 0.9 km one way, about 30 minutes return. 89 km north of Radium.',
    },
    {
      name: 'Paint Pots',
      icon: '🎨',
      tag: 'Ochre Springs',
      tagLevel: 'danger',
      meta: 'Three iron-rich mineral springs that stain the earth ochre-red. Easy 1 km walk, 86 km north of Radium.',
    },
    {
      name: 'Stanley Glacier',
      icon: '🦕',
      tag: 'Fossils',
      tagLevel: 'safe',
      meta: 'Hike to an alpine basin fed by glacier meltwater. Guided hikes help you find fossils more than 500 million years old.',
    },
    {
      name: 'Olive Lake',
      icon: '💚',
      tag: 'Easy Stop',
      tagLevel: 'olive',
      meta: 'A clear green lake at the summit of Sinclair Pass — a 0.3 km stroll, 12 km from Radium.',
    },
    {
      name: 'Continental Divide',
      icon: '🗺️',
      tag: 'Viewpoint',
      tagLevel: 'purple',
      meta: 'Stand between the Pacific and Atlantic watersheds. The Fireweed Loop walks through forest regrowing after the 1968 fire.',
    },
  ],

  wildlifeWarning:
    'Bighorn sheep often stand right on Highway 93 near Radium — slow down. Carry bear spray on every trail. Kindersley Pass and Sinclair Creek require a group of at least four because of grizzly bears. Keep 100 m from bears, 30 m from all other wildlife.',
  wildlife: [
    { name: 'Bighorn Sheep', level: 'safe', chance: '★★★★★ Radium & Hwy 93' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ Cliffs near Radium' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★☆☆ Valley meadows' },
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Roadsides in spring' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Backcountry' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Wetlands' },
    { name: 'Gray Wolf', level: 'caution', chance: '★☆☆☆☆ Rare' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'All campgrounds and the Visitor Centre in Radium are open. Easy roadside walks are snow-free, and the high Rockwall Trail usually clears of snow by early to mid July.',
      rating: 5,
      note: 'Peak season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Quieter trails and crisp days. Snow can return to high passes from late September — check the trail report. Visitor services wind down by mid-October.',
      rating: 4,
      note: 'Fewer crowds',
    },
    {
      icon: '♨️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'The park stays open year-round, but visitor services close and the high country is deep in snow. A snowy soak in Radium Hot Springs is the highlight — check pool hours before you go.',
      rating: 3,
      note: 'Hot springs',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Bears are active along the valley bottoms, and some trails (like Olive Lake) can close for bear activity. Redstreak Campground opens first; higher trails stay snowy.',
      rating: 2,
      note: 'Bear season',
    },
  ],

  trailsNote: {
    title: 'Group Of Four Required On Grizzly Trails',
    text: 'Kindersley Pass and Sinclair Creek can only be hiked in a tight group of at least four people because of grizzly bear activity. Some trails close without notice — always check the Parks Canada trail report first.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/kootenay-national-park',
  trails: [
    { name: 'Marble Canyon', length: '0.9 km one way', gain: '65 m gain', time: '30 min return', area: '89 km north of Radium', difficulty: 'Easy' },
    { name: 'Paint Pots', length: '1 km one way', gain: '35 m gain', time: '40 min return', area: '86 km north of Radium', difficulty: 'Easy' },
    { name: 'Stanley Glacier', length: '4.9 km one way', gain: '405 m gain', time: '3 hours return', area: 'Near the Continental Divide', difficulty: 'Moderate' },
    { name: 'Sinclair Canyon', length: '2.8 km one way', gain: '350 m gain', time: '2 hours return', area: 'Radium Hot Springs', difficulty: 'Moderate' },
    { name: 'Floe Lake', length: '10.8 km one way', gain: '1,120 m gain', time: '7 hours or 2 days', area: '72 km from Radium', difficulty: 'Hard' },
    { name: 'Rockwall Trail', length: '54.1 km', gain: '3,405 m gain', time: '3–5 days', area: 'Backpacking route', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Calgary International Airport (YYC). Drive west through Banff to Castle Junction, then turn south onto Highway 93 into Kootenay.',
      time: 'Calgary → Banff → Castle Junction → Hwy 93 South',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 93 South runs the length of the park, from the Continental Divide near Banff down to the village of Radium Hot Springs at the south entrance. Watch for sheep and other wildlife on the road.',
      time: 'Scenic drive end to end — allow a full day with stops',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'There is no regular public transit through the park. A car is the practical way to reach trailheads and day-use areas along Highway 93.',
      time: 'Car essential',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'A Parks Canada daily pass or Discovery Pass is required. Youth 17 and under enter free.',
    buyText: 'Guided Burgess Shale fossil hikes to Stanley Glacier must be booked separately.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Redstreak Campground',
      text: 'Just above the village of Radium Hot Springs, with an evening interpretive show. It is the only campground with oTENTik tent-cabins. All sites can be reserved.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🌲',
      title: 'McLeod Meadows & Marble Canyon',
      text: 'Quieter summer-only campgrounds in the valley. About half the sites can be reserved; the rest are first-come, first-served.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Radium Hot Springs Village',
      text: 'The village at the park’s south gate has motels, lodges, and restaurants — a few minutes from the hot pools.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Radium+Hot+Springs+British+Columbia', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Radium-Hot-Springs--British-Columbia', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['Call 911', 'Parks Canada Dispatch (non-urgent, 24/7)', '403-762-1470'],
    },
    {
      icon: 'ℹ️',
      title: 'Visitor Centre',
      lines: ['7556 Main Street East, Radium Hot Springs', '250-347-9505', 'May — mid-October'],
    },
    {
      icon: '🐻',
      title: 'Bear Spray',
      text: 'Carry it on every trail. Groups of four are mandatory on Kindersley Pass and Sinclair Creek.',
    },
    {
      icon: '🚤',
      title: 'No Boats Or Fishing',
      text: 'All lakes and rivers in Kootenay and Yoho are closed to watercraft and angling until March 31, 2027, to stop invasive species.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drones are prohibited in the park — fines can reach $25,000.',
    },
    {
      icon: '🦕',
      title: 'Fossils',
      text: 'Burgess Shale fossils are protected. See them only on a guided hike — never collect.',
    },
  ],

  gallery: [],
};

export default KOOTENAY;
