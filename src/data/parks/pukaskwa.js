// Pukaskwa National Park — данные страницы /park/pukaskwa
//
// Фото: по просьбе — снимок с карточки (/on/parks/Pukaskwa National
// Park.png): подвесной мост над каньоном с отвесными стенами. ВНИМАНИЕ:
// очень похоже на Eagle Canyon Adventures (частный парк у Thunder Bay), а не
// на мост через White River в Pukaskwa — не подтверждено, сказано
// пользователю. Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Pukaskwa (главная): дикий гранитный берег озера Верхнее,
//   ели и сосны, скалы, песчаные пляжи; чёрные медведи на черничниках,
//   лоси в болотах, гагары; культура анишинаабе; однодневный поход к
//   подвесному мосту над водопадом; бэккантри-тропы и прибрежный маршрут
//   для каяков; кемпинг Hattie Cove, oTENTik, бэккантри-стоянки — бронь;
//   киоск 807-357-1726 (или 807-229-0238), pukaskwaont@pc.gc.ca; экстренно —
//   Parks Canada Dispatch 1-877-852-3100; адрес Hwy 627, Heron Bay;
//   безопасность: медведи, насекомые, озеро Верхнее.
// - Parks Canada, Coastal Hiking trip planner / Backcountry: Coastal Trail
//   ~60 км от Hattie Cove до North Swallow River; водопад Chigaamiwinigum;
//   удалённое место, спасение занимает время, вы сами отвечаете за
//   безопасность.
// - Wikipedia: основан в 1978; 1,878 км²; ~15 км к югу от Marathon; часть
//   "самой длинной неосвоенной береговой линии Великих озёр"; Coastal Trail
//   60 км — часть Voyageur Hiking Trail, два подвесных моста (White River
//   у Chigaamiwinigum и Willow River); Hwy 627 — единственная дорога;
//   Hattie Cove — на севере парка; Pukaskwa Pits — сооружения из камней
//   возрастом около тысячи лет на галечных пляжах; лесные карибу — с ~30 в
//   1970-х до ~4 в 2012, к 2017 исчезли из парка; волки Великих озёр.
// - Сторонние гиды (Explore Mag, Northern Ontario Travel): поход к мосту
//   White River ~18 км туда-обратно, 8-9 ч; Mdaabii Miikna ~24-25 км, 2-3
//   дня; Beach Trail ~2 км т/о — со знаком "~".
// - НЕ использовано: высота моста, роль Biigtigong Nishnaabeg (не
//   подтверждено), даты сезона.

const IMAGE = '/on/parks/Pukaskwa National Park.png';

export const PUKASKWA = {
  slug: 'pukaskwa',
  name: 'Pukaskwa National Park',
  shortName: 'Pukaskwa',
  province: 'Ontario',
  tag: 'Lake Superior Wilderness · Est. 1978',
  heroImage: IMAGE,
  heroCaption: 'Pukaskwa National Park · ON',
  description:
    'Wild granite shores, windswept spruce, and the cold, clear water of Lake Superior. Pukaskwa protects part of the longest undeveloped shoreline on the Great Lakes — reached by just one road, and explored on foot or by kayak.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1978' },
    { label: 'Area', value: '1,878 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Coastal Trail', value: '~60 km' },
    { label: 'Road In', value: 'Only Hwy 627' },
    { label: 'Shoreline', value: 'Lake Superior' },
  ],

  badges: ['Lake Superior', 'Backcountry', 'Anishinaabe Heritage'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Superior Wilderness',
    emoji: '🌊',
    title: 'The Wild Coast Of Lake Superior',
    text: 'Pukaskwa guards part of the longest undeveloped shoreline anywhere on the Great Lakes. Only one road reaches the park — beyond Hattie Cove, the coast is roadless. The 60 km Coastal Hiking Trail follows the shore over granite and cobble beaches, crossing rivers on suspension bridges. On some beaches you can see the Pukaskwa Pits: stone structures built by the area’s first peoples about a thousand years ago.',
    stats: [
      { value: '~60 km', label: 'Coastal Hiking Trail', level: 'safe' },
      { value: '1', label: 'Road into the park', level: 'blue' },
      { value: '2', label: 'Suspension bridges on the trail', level: 'gold' },
      { value: '~1,000', label: 'Years — Pukaskwa Pits', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'White River Suspension Bridge',
      icon: '🌉',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A suspension bridge high above Chigaamiwinigum Falls — a long day hike along the Coastal Trail from Hattie Cove.',
    },
    {
      name: 'Coastal Hiking Trail',
      icon: '🥾',
      tag: 'Backcountry',
      tagLevel: 'danger',
      meta: 'About 60 km from Hattie Cove to the North Swallow River — rugged, remote, and one of Canada’s classic backpacking routes.',
    },
    {
      name: 'Hattie Cove',
      icon: '🏕️',
      tag: 'Base Camp',
      tagLevel: 'safe',
      meta: 'The park’s campground, oTENTiks, beaches, and visitor centre — where the Coastal Trail begins.',
    },
    {
      name: 'Pukaskwa Pits',
      icon: '🪨',
      tag: 'Heritage',
      tagLevel: 'purple',
      meta: 'Stone structures on cobble beaches, built about a thousand years ago. Look, but never move a stone.',
    },
    {
      name: 'Coastal Paddling Route',
      icon: '🛶',
      tag: 'Kayaking',
      tagLevel: 'blue',
      meta: 'Paddle along the Superior shore — only for experienced sea kayakers ready for cold water and sudden weather.',
    },
    {
      name: 'Blueberry Season',
      icon: '🫐',
      tag: 'Wildlife',
      tagLevel: 'olive',
      meta: 'Black bears feed in the blueberry patches, moose wander the wetlands, and loons call at sunset.',
    },
  ],

  wildlifeWarning:
    'This is bear country — black bears feed on blueberries along the trails. Carry bear spray, store food properly, and keep 100 m from bears. Watch for moose on Highway 627, and be ready for biting insects in early summer.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Blueberry patches' },
    { name: 'Moose', level: 'caution', chance: '★★★☆☆ Wetlands' },
    { name: 'Common Loon', level: 'safe', chance: '★★★★☆ Lakes at sunset' },
    { name: 'Gray Wolf', level: 'caution', chance: '★☆☆☆☆ Rarely seen' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The main hiking and paddling season. Reserve Hattie Cove sites, oTENTiks, and backcountry campsites ahead. Bring bug protection.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fewer bugs and quieter trails, but Lake Superior storms grow stronger. Check site conditions before you go.',
      rating: 4,
      note: 'Quieter',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Snow-covered and largely closed. For experienced winter travellers only — check Parks Canada site conditions.',
      rating: 1,
      note: 'Closed season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Lingering snow and cold water. Services open later in the season — check dates and hours before planning a trip.',
      rating: 2,
      note: 'Season starts',
    },
  ],

  trailsNote: {
    title: 'Remote And Rugged — Rescues Take Time',
    text: 'Pukaskwa’s backcountry is remote, and help can be far away. You are responsible for your own safety: plan carefully, check trail conditions, and carry the right gear for Lake Superior weather.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/on/pukaskwa/activ/experience/randonnees-hiking/etat-sentiers-trail-conditions',
  trailsLinkLabel: 'Trail Conditions On Parks Canada',
  trails: [
    { name: 'Beach Trail', length: '~2 km return', area: 'Hattie Cove', difficulty: 'Easy' },
    { name: 'White River Suspension Bridge', length: '~18 km return', time: '~8–9 hours', area: 'From Hattie Cove', difficulty: 'Hard' },
    { name: 'Mdaabii Miikna', length: '~24 km loop', time: '2–3 days', area: 'Backcountry', difficulty: 'Moderate' },
    { name: 'Coastal Hiking Trail', length: '~60 km one way', time: 'Multi-day', area: 'Hattie Cove → North Swallow River', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 627 is the only road into the park, near the town of Marathon on Lake Superior’s north shore. The park is about 15 km south of Marathon.',
      time: 'Hattie Cove: end of Hwy 627',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'The nearest larger city airport is Thunder Bay; from there it is a long drive east along the Lake Superior shore.',
      time: 'Then continue by car',
    },
    {
      icon: '🛶',
      title: 'Into The Backcountry',
      text: 'Beyond Hattie Cove, the coast is reached only on foot along the Coastal Trail or by boat or kayak.',
      time: 'Reservations required',
    },
  ],

  entryPass: {
    title: 'Fees & Reservations',
    text: 'Daily visitor fees apply. Youth 17 and under enter free. oTENTiks and backcountry campsites must be reserved.',
    buyText: 'Check Hattie Cove parking capacity and site conditions before you go.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Hattie Cove Campground',
      text: 'The park’s frontcountry campground near Lake Superior beaches and the start of the Coastal Trail.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'oTENTiks',
      text: 'Ready-to-camp tent-cabins at Hattie Cove — reservations required.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Marathon, ON',
      text: 'The nearest town, on the Trans-Canada Highway, with places to stay and supplies.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Marathon+Ontario', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Parks Canada Dispatch:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Kiosk',
      lines: ['807-357-1726', 'Backup: 807-229-0238', 'pukaskwaont@pc.gc.ca'],
    },
    {
      icon: '🌊',
      title: 'Lake Superior',
      text: 'Cold water and sudden storms. Paddle only with the right skills and gear.',
    },
    {
      icon: '🦟',
      title: 'Bugs',
      text: 'Bring repellent and bug-proof clothing — the park lists bugs as a key safety concern.',
    },
    {
      icon: '🪨',
      title: 'Leave It Be',
      text: 'Never move rocks at the Pukaskwa Pits — they are a thousand-year-old cultural heritage.',
    },
    {
      icon: '🐻',
      title: 'Bear Country',
      text: 'Carry bear spray, store food properly, and keep a clean camp.',
    },
  ],

  gallery: [],
};

export default PUKASKWA;
