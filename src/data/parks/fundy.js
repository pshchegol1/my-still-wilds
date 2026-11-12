// Fundy National Park — данные страницы /park/fundy
//
// Фото: у парка две карточки с разными снимками. В all-parks —
// /parks/fundy.jpg: это Hopewell Rocks (скалы-«цветочные горшки»), они НЕ в
// нацпарке, а в отдельном провинциальном парке. В nb.js — /nb/parks/fundy.png:
// скалистый берег с лесистым утёсом-островом в заливе Фанди — похоже на
// побережье парка (точное место не подтверждено). Для hero взят второй.
// Сказано пользователю. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Fundy (главная): неуступленная территория мигмак;
//   «самые высокие приливы в мире»; в парке прилив до 12 м и больше; гулять
//   по дну при отливе, каноэ/каяк на приливе; водопады в акадийском лесу;
//   лосось Inner Bay of Fundy — восстановление; мост Point Wolfe закрыт с
//   8 сентября до декабря 2026 на ремонт; 8642 Route 114, NB E4H 4V2;
//   506-887-6000; fundy@pc.gc.ca; 911; не экстренно — 1-877-852-3100;
//   молодёжь бесплатно.
// - Parks Canada, Hiking: >100 км троп — от петли 0.5 км до кольца ~50 км;
//   Fundy Circuit 48 км; Dobson Trail 58 км до Riverview; Fundy Footpath
//   41 км до Big Salmon River (Wikipedia даёт 64.3 км → взяли Parks Canada).
// - Parks Canada, страницы троп: Dickson Falls 1.5 км петля, ~30 мин,
//   средняя, самый фотографируемый водопад; Third Vault Falls 7.4 км т/о,
//   3-4 ч, сложная, водопад 16 м — самый большой в парке; Matthews Head
//   4.5 км петля, 1.5-2 ч, сложная, смотровая на красном конгломерате.
// - Wikipedia: основан 10 апреля 1948 (в тексте есть и 1946 → взяли 1948,
//   как в инфобоксе и на карточке); 207 км² (на карточках 206); рядом с
//   Alma; >25 водопадов; одни из последних чистых древостоев красной ели;
//   ~38 видов млекопитающих — лоси, олени, чёрные медведи; >260 видов птиц;
//   сапсан исчез к 1948 и возвращён; 5 кемпингов (Chignecto North,
//   Headquarters, Cannontown, Point Wolfe, Lakeview) — 521 место, плюс
//   oTENTik, юрты, Ôasis; крытые мосты; гольф-поле 9 лунок Stanley Thompson;
//   303,575 посетителей 2022-23.
// - НЕ использовано: статус Dark Sky (не подтверждён в найденных
//   источниках), расстояния до Moncton/Saint John, Caribou Plain (источники
//   расходятся).

const IMAGE = '/nb/parks/fundy.png';

export const FUNDY = {
  slug: 'fundy',
  name: 'Fundy National Park',
  shortName: 'Fundy',
  province: 'New Brunswick',
  tag: 'World’s Highest Tides · Est. 1948',
  heroImage: IMAGE,
  heroCaption: 'Fundy National Park · NB',
  description:
    'On the shore of the Bay of Fundy, home of the world’s highest tides. Walk the ocean floor at low tide, paddle in on the rising water, then hike inland through Acadian forest to more than 25 waterfalls.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1948' },
    { label: 'Area', value: '207 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Tides', value: 'Up To 12 m+' },
    { label: 'Waterfalls', value: '25+' },
    { label: 'Trails', value: '100+ km' },
  ],

  badges: ['Highest Tides', 'Waterfalls', 'Acadian Forest'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Tidal Wonder',
    emoji: '🌊',
    title: 'The Ocean Floor Twice A Day',
    text: 'The Bay of Fundy has the highest tides in the world. In the park, the water rises 12 metres or more — so a beach you walk across in the morning can be under the sea by afternoon. At low tide you can explore the exposed ocean floor; at high tide, you can paddle over the same spot. Inland, the Acadian forest hides more than 25 waterfalls and some of the last pure red spruce stands in eastern North America.',
    stats: [
      { value: '12 m+', label: 'Tidal range in the park', level: 'blue' },
      { value: '25+', label: 'Waterfalls', level: 'safe' },
      { value: '16 m', label: 'Third Vault Falls', level: 'gold' },
      { value: '260+', label: 'Bird species recorded', level: 'olive' },
    ],
  },

  attractions: [
    {
      name: 'Walk The Ocean Floor',
      icon: '🦀',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'At low tide, explore the exposed sea floor — then watch the water return. Always know when the tide turns.',
    },
    {
      name: 'Dickson Falls',
      icon: '💧',
      tag: 'Easy Walk',
      tagLevel: 'safe',
      meta: 'The park’s most photographed waterfall — a 1.5 km loop with boardwalks through a cool, fern-filled valley.',
    },
    {
      name: 'Third Vault Falls',
      icon: '🌊',
      tag: 'Biggest Falls',
      tagLevel: 'blue',
      meta: 'At 16 m, the largest waterfall in the park, at the end of a 3.7 km trail through mixed forest.',
    },
    {
      name: 'Point Wolfe Covered Bridge',
      icon: '🌉',
      tag: 'Landmark',
      tagLevel: 'danger',
      meta: 'A red covered bridge over the Point Wolfe River. Closed for repairs until December 2026 — check alternative routes.',
    },
    {
      name: 'Paddle The Tide',
      icon: '🛶',
      tag: 'On The Water',
      tagLevel: 'purple',
      meta: 'Canoe or kayak on the rising tide — on water that will be gone again in a few hours.',
    },
    {
      name: 'Fundy Footpath',
      icon: '🥾',
      tag: 'Backcountry',
      tagLevel: 'olive',
      meta: 'A rugged 41 km coastal footpath from the park’s Goose River trail to the Big Salmon River near St. Martins.',
    },
  ],

  wildlifeWarning:
    'Moose, white-tailed deer, and black bears live in the park. Keep your distance, store food properly, and drive carefully at dawn and dusk. On the shore, the real danger is the tide — it comes in fast and can cut you off from the beach exit.',
  wildlife: [
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Forest & bogs' },
    { name: 'White-tailed Deer', level: 'safe', chance: '★★★☆☆ Roadsides' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forest' },
    { name: 'Peregrine Falcon', level: 'safe', chance: '★★☆☆☆ Sea cliffs' },
    { name: 'Shorebirds', level: 'safe', chance: '★★★☆☆ Tidal flats' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season for camping, beach walks at low tide, and paddling. Campgrounds fill up — reserve ahead.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Brilliant Acadian-forest colours along the waterfall trails. Point Wolfe Covered Bridge is closed for repairs until December 2026.',
      rating: 5,
      note: 'Fall colours',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snowmelt makes the waterfalls at their strongest. Some services open later — check hours before you go.',
      rating: 3,
      note: 'Full waterfalls',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — March',
      level: 'caution',
      text: 'The park is always open, with winter activities offered. Check Parks Canada for current winter services.',
      rating: 2,
      note: 'Quiet season',
    },
  ],

  trailsNote: {
    title: 'Check The Tide Before You Head Out',
    text: 'Tides here rise 12 metres or more. Check tide times before walking on the beach or the ocean floor, and leave well before the water returns. Inland trails are rugged with steep river valleys — choose a trail that fits your limits and tell someone your route.',
  },

  trailsUrl: 'https://www.parks.canada.ca/pn-np/nb/fundy/visit/sentiers-trails',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Dickson Falls', length: '1.5 km loop', time: '~30 min', area: 'Forest & brook', difficulty: 'Moderate' },
    { name: 'Matthews Head', length: '4.5 km loop', time: '1.5–2 hours', area: 'Coast & forest', difficulty: 'Hard' },
    { name: 'Third Vault Falls', length: '7.4 km return', time: '3–4 hours', area: 'Forest', difficulty: 'Hard' },
    { name: 'Fundy Circuit', length: '48 km', time: 'Multi-day', area: 'Backcountry', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The park is on Route 114 next to the village of Alma, on the New Brunswick shore of the Bay of Fundy.',
      time: '8642 Route 114',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'The nearest larger airports are in Moncton and Saint John. You will need a car to reach the park.',
      time: 'Then continue by car',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Moncton to the Bay of Fundy route for the drive and nearby stops like Hopewell Rocks.',
      time: 'Day trip or weekend',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free. Fishing permits are sold on site.',
    buyText: 'Book campsites, oTENTiks, yurts, and Ôasis through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Five Campgrounds',
      text: 'Chignecto North, Headquarters, Cannontown, Point Wolfe, and Lakeview — together over 500 sites.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'oTENTiks, Yurts & Ôasis',
      text: 'Ready-to-camp options for a night in the park without bringing a tent.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Alma',
      text: 'A small fishing village right at the park entrance, with places to stay and eat.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Alma+New+Brunswick', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Alma--New-Brunswick', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Non-emergency (Dispatch):', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['506-887-6000', 'fundy@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '8642 Route 114, Fundy National Park, NB E4H 4V2',
    },
    {
      icon: '🌊',
      title: 'Tide Times',
      text: 'Check the tide table before any beach walk — the water comes back fast.',
    },
    {
      icon: '🚧',
      title: 'Point Wolfe Bridge',
      text: 'Closed for repairs until December 2026 — this affects Point Wolfe access and some backcountry routes.',
    },
    {
      icon: '🪶',
      title: 'Mi’gmaq Territory',
      text: 'The park is on unceded Mi’gmaq territory.',
    },
  ],

  gallery: [],
};

export default FUNDY;
