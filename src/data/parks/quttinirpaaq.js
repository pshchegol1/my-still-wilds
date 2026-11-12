// Quttinirpaaq National Park — данные страницы /park/quttinirpaaq
//
// Фото: по просьбе — снимок с карточки (/nu/parks/quttirpaaq.png): люди с
// санями на морском льду у низких заснеженных холмов. Для Quttinirpaaq
// характерны «зазубренные чёрные пики» и большие ледники — здесь их нет;
// место не подтверждено (похоже на южнее, например залив у Икалуита).
// Сказано пользователю. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Quttinirpaaq (главная): самый северный нацпарк Канады;
//   «Quttinirpaaq» на инуктитуте — «земля на вершине мира»; тундра,
//   зазубренные чёрные пики, огромные ледники; овцебыки и карибу Пири;
//   археологические места возрастом в тысячи лет; однодневные и
//   многодневные походы, в т.ч. от Tanquary Fiord; весенние лыжные
//   походы; скалолазание, ледники, бэккантри-кемпинг; гиды, аутфиттеры и
//   жильё — в Resolute Bay и Grise Fiord; совместное управление с инуитами;
//   открыт круглый год; офис в Resolute 1-867-252-3000; 1-888-773-8888;
//   nunavut.info@pc.gc.ca; ЧП 1-780-852-3100.
// - Wikipedia: 1988 — Ellesmere Island National Park Reserve, 1999 —
//   переименован, 2000 — полноценный нацпарк (на карточке 1988 → оставили);
//   37,775 км² — второй по величине парк Канады после Wood Buffalo; северо-
//   восток острова Элсмир, ближайший посёлок — Alert; второй самый северный
//   парк на Земле (после Северо-Восточной Гренландии); Barbeau Peak 2,616 м
//   — высшая точка Нунавута; район озера Hazen — теплее, больше жизни;
//   станции и грунтовые полосы — Tanquary Fiord, Lake Hazen, Ward Hunt
//   Island; полярная пустыня; полярный день май-август, полярная ночь
//   ноябрь-февраль; зайцы, лемминги, овцебыки, полярные волки, очень мало
//   карибу Пири, кречеты; Fort Conger — исследовательская база, Federal
//   Heritage Building.
// - В nu.js была опечатка «Quttirpaaq» → исправлено на «Quttinirpaaq».
// - НЕ использовано: число посетителей (7 vs ~50 — Wikipedia противоречит),
//   стоимость чартеров, расстояние до полюса.

const IMAGE = '/nu/parks/quttirpaaq.png';

export const QUTTINIRPAAQ = {
  slug: 'quttinirpaaq',
  name: 'Quttinirpaaq National Park',
  shortName: 'Quttinirpaaq',
  province: 'Nunavut',
  tag: 'Top Of The World · Est. 1988',
  heroImage: IMAGE,
  heroCaption: 'Quttinirpaaq National Park · NU',
  description:
    'Quttinirpaaq means “land at the top of the world” in Inuktitut. Canada’s northernmost national park covers the far end of Ellesmere Island — a polar desert of jagged black peaks, massive glaciers, muskoxen, and Arctic wolves under the midnight sun.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1988' },
    { label: 'Area', value: '37,775 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Barbeau Peak', value: '2,616 m' },
    { label: 'Midnight Sun', value: 'May — August' },
    { label: 'Canada Rank', value: '#2 By Size' },
  ],

  badges: ['Northernmost Park', 'Glaciers', 'Polar Desert'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'Northernmost Canada',
    emoji: '🧭',
    title: 'The Park At The Top Of The World',
    text: 'Quttinirpaaq is Canada’s northernmost national park and the second-largest in the country, after Wood Buffalo. It holds Barbeau Peak — at 2,616 m the highest point in Nunavut — and Fort Conger, a historic base of early Arctic exploration. The land is a polar desert with very little precipitation, yet around Lake Hazen milder summers support more plants and animals.',
    stats: [
      { value: '2,616 m', label: 'Barbeau Peak', level: 'gold' },
      { value: '37,775 km²', label: '2nd-largest park in Canada', level: 'blue' },
      { value: '4 mo', label: 'Of midnight sun', level: 'olive' },
      { value: '4 mo', label: 'Of polar night', level: 'purple' },
    ],
  },

  attractions: [
    {
      name: 'Tanquary Fiord',
      icon: '🛩️',
      tag: 'Gateway',
      tagLevel: 'gold',
      meta: 'One of the park’s airstrips and warden stations — the starting point for many day hikes and treks.',
    },
    {
      name: 'Lake Hazen',
      icon: '💧',
      tag: 'Arctic Oasis',
      tagLevel: 'blue',
      meta: 'A region with milder temperatures and more plant and animal life, with an airstrip and warden station.',
    },
    {
      name: 'Barbeau Peak',
      icon: '🏔️',
      tag: 'Highest Point',
      tagLevel: 'danger',
      meta: 'At 2,616 m, the highest mountain in Nunavut — for serious glacier and mountaineering expeditions.',
    },
    {
      name: 'Fort Conger',
      icon: '🏚️',
      tag: 'History',
      tagLevel: 'purple',
      meta: 'An early Arctic exploration base, now protected as a Federal Heritage Building.',
    },
    {
      name: 'Ward Hunt Island',
      icon: '🧊',
      tag: 'Far North',
      tagLevel: 'olive',
      meta: 'A warden station and airstrip at the far northern edge of the park.',
    },
    {
      name: 'Spring Ski Touring',
      icon: '⛷️',
      tag: 'Expeditions',
      tagLevel: 'safe',
      meta: 'Ski touring across snow and glaciers for experienced, self-sufficient parties.',
    },
  ],

  wildlifeWarning:
    'Arctic wolves, muskoxen, and polar bears can be encountered. Keep a safe distance from all wildlife and read Parks Canada’s polar bear safety guidance. In this remote polar desert, search and rescue can take a long time — you must be fully self-reliant.',
  wildlife: [
    { name: 'Muskox', level: 'caution', chance: '★★★☆☆ Valleys' },
    { name: 'Arctic Wolf', level: 'caution', chance: '★★☆☆☆ Tundra' },
    { name: 'Arctic Hare', level: 'safe', chance: '★★★☆☆ Tundra' },
    { name: 'Peary Caribou', level: 'safe', chance: '★☆☆☆☆ Very rare' },
    { name: 'Gyrfalcon', level: 'safe', chance: '★☆☆☆☆ Cliffs' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Hiking and trekking under the midnight sun. Summers are short and often cool.',
      rating: 5,
      note: 'Midnight sun',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'Spring',
      level: 'olive',
      text: 'Spring ski touring season. The midnight sun begins in May.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Rapid freeze-up and fading light.',
      rating: 1,
      note: 'Freeze-up',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — February',
      level: 'caution',
      text: 'Polar night — the sun does not rise. Extreme cold.',
      rating: 1,
      note: 'Polar night',
    },
  ],

  trailsNote: {
    title: 'Expedition-Level Wilderness',
    text: 'Quttinirpaaq is a remote polar desert. Plan with the Parks Canada office in Resolute and local outfitters, carry everything you need, and be ready for long delays in search and rescue.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nu/quttinirpaaq',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Quttinirpaaq' },
  trails: [
    { name: 'Tanquary Fiord Hikes', length: 'Day & multi-day', area: 'Tanquary Fiord', difficulty: 'Self-reliant', level: 'caution' },
    { name: 'Spring Ski Touring', length: 'Multi-day', time: 'Spring', area: 'Glaciers & valleys', difficulty: 'Expert', level: 'danger' },
    { name: 'Glacier & Climbing Trips', length: 'Expedition', area: 'Barbeau Peak area', difficulty: 'Expert', level: 'danger' },
  ],

  gettingThere: [
    {
      icon: '🏘️',
      title: 'Resolute Bay',
      text: 'The Parks Canada office for the park is in Resolute. Guides, outfitters, and accommodation are available in Resolute Bay and Grise Fiord.',
      time: 'Office: 1-867-252-3000',
    },
    {
      icon: '🛩️',
      title: 'Fly Into The Park',
      text: 'The main access points are the gravel airstrips at Tanquary Fiord and Lake Hazen.',
      time: 'Charter flight',
    },
    {
      icon: '📋',
      title: 'Plan Ahead',
      text: 'Contact Parks Canada well in advance about fees, safety, and trip planning.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Fees',
    text: 'Daily visitor fees, overnight camping fees, and annual backcountry passes apply.',
    buyText: 'Contact the Resolute office to plan your trip.',
    url: 'https://parks.canada.ca/pn-np/nu/quttinirpaaq',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'Camp in the polar desert as part of a self-sufficient expedition.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/quttinirpaaq', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Resolute Bay & Grise Fiord',
      text: 'Accommodation and outfitters in the communities before and after your trip.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/quttinirpaaq', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['In the park:', '1-780-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Resolute Office',
      lines: ['1-867-252-3000', '1-888-773-8888', 'nunavut.info@pc.gc.ca'],
    },
    {
      icon: '🌑',
      title: 'Polar Night',
      text: 'From November to February the sun does not rise.',
    },
    {
      icon: '🏜️',
      title: 'Polar Desert',
      text: 'Very little precipitation, very cold winters, and short, cool summers.',
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bear Safety',
      text: 'Read Parks Canada’s polar bear safety guidance before your trip.',
    },
    {
      icon: '🪶',
      title: 'Inuit Co-Management',
      text: 'The park is managed cooperatively with Inuit.',
    },
  ],

  gallery: [],
};

export default QUTTINIRPAAQ;
