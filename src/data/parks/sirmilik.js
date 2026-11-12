// Sirmilik National Park — данные страницы /park/sirmilik
//
// Фото: по просьбе — снимок с карточки (/nu/parks/sirmilik.png): снежная
// равнина с замёрзшими протоками и столовой горой под ледяной шапкой —
// похоже на высокую Арктику, но место по снимку не определить — не
// подтверждено. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Sirmilik (главная): ледники, долины, красные скальные
//   «худу»; морские птицы на утёсах острова Байлот; нарвалы и белухи;
//   инуиты живут здесь тысячи лет; совместное управление инуитов и Parks
//   Canada; гиды и аутфиттеры; жильё в Pond Inlet и Arctic Bay;
//   бэккантри-кемпинг; походы и лыжи по Байлоту и полуострову Борден;
//   сафари у кромки льда (floe edge) — белые медведи, киты, тюлени, птицы;
//   каяки; открыт круглый год; Pond Inlet office 1-867-899-8092,
//   1-888-773-8888, sirmilik.info@pc.gc.ca; ЧП 1-780-852-3100; P.O. Box 300,
//   Pond Inlet NU X0A 0S0.
// - Wikipedia: основан в 2001 (в лиде есть 1999 → взяли 2001, как в
//   инфобоксе и на карточке); 22,200 км²; «Sirmilik» на инуктитуте —
//   «место ледников»; большая часть острова Байлот, Oliver Sound и
//   полуостров Борден с заливом Baillarge; Байлот ~11,067 км² — один из
//   крупнейших необитаемых островов мира; высшая точка — Angilaaq 1,951 м;
//   ледник Kaparoqtalik; северный берег — пролив Ланкастер, берлоги белых
//   медведиц; птичий заказник с 1965; ~300,000 толстоклювых кайр и ~80,000
//   моевок; большая колония больших белых гусей; >70 видов птиц, ~40
//   гнездятся; нарвалы мигрируют у Байлота; белухи, песцы, тюлени, моржи,
//   карибу Пири, белые медведи, волки; летом в среднем до ~10 °C, январь
//   ~−30 °C.
// - НЕ использовано: число посетителей (в Wikipedia «6» — похоже на ошибку),
//   цены, даты сезона кромки льда.

const IMAGE = '/nu/parks/sirmilik.png';

export const SIRMILIK = {
  slug: 'sirmilik',
  name: 'Sirmilik National Park',
  shortName: 'Sirmilik',
  province: 'Nunavut',
  tag: 'Place Of Glaciers · Est. 2001',
  heroImage: IMAGE,
  heroCaption: 'Sirmilik National Park · NU',
  description:
    'Sirmilik means “the place of glaciers” in Inuktitut. At the top of Baffin Island, glaciers spill off Bylot Island, red hoodoos rise from the valleys, hundreds of thousands of seabirds crowd the cliffs, and narwhals and belugas swim in the icy waters.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '2001' },
    { label: 'Area', value: '22,200 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Highest Peak', value: '1,951 m' },
    { label: 'Bird Sanctuary', value: 'Since 1965' },
    { label: 'Gateway', value: 'Pond Inlet' },
  ],

  badges: ['Glaciers', 'Seabird Cliffs', 'Floe Edge'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'Bylot Island',
    emoji: '🐦',
    title: 'An Island Of Ice And Birds',
    text: 'Bylot Island — about 11,000 km² and one of the largest uninhabited islands in the world — is covered in glaciers and ice caps. Its cliffs hold some 300,000 thick-billed murres and 80,000 black-legged kittiwakes, and a large colony of greater snow geese nests on the island, which has been a migratory bird sanctuary since 1965. Narwhals pass along its shores, and polar bears den on the north coast facing Lancaster Sound.',
    stats: [
      { value: '~300,000', label: 'Thick-billed murres', level: 'blue' },
      { value: '~80,000', label: 'Black-legged kittiwakes', level: 'safe' },
      { value: '1,951 m', label: 'Angilaaq Mountain', level: 'gold' },
      { value: '70+', label: 'Bird species recorded', level: 'olive' },
    ],
  },

  attractions: [
    {
      name: 'Floe Edge Safari',
      icon: '🐋',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Where sea ice meets open water — watch for polar bears, narwhals, belugas, seals, and seabirds with a local guide.',
    },
    {
      name: 'Bylot Island Glaciers',
      icon: '🧊',
      tag: 'Glaciers',
      tagLevel: 'blue',
      meta: 'Glaciers and ice caps cover one of the world’s largest uninhabited islands.',
    },
    {
      name: 'Seabird Cliffs',
      icon: '🐦',
      tag: 'Birds',
      tagLevel: 'safe',
      meta: 'Hundreds of thousands of murres and kittiwakes nest on Bylot’s cliffs and at Baillarge Bay.',
    },
    {
      name: 'Red Hoodoos',
      icon: '🪨',
      tag: 'Geology',
      tagLevel: 'danger',
      meta: 'Red-rock hoodoo spires rise from the park’s valleys.',
    },
    {
      name: 'Oliver Sound',
      icon: '🛶',
      tag: 'Kayaking',
      tagLevel: 'purple',
      meta: 'Kangiqłuruluk — a fjord within the park, explored by kayak or boat with outfitters.',
    },
    {
      name: 'Greater Snow Geese',
      icon: '🪿',
      tag: 'Nesting',
      tagLevel: 'olive',
      meta: 'A large colony of greater snow geese nests on Bylot Island each summer.',
    },
  ],

  wildlifeWarning:
    'Polar bears live here and den on the north coast of Bylot Island. Learn polar bear safety before your trip and travel with experienced local guides. Respect seabird colonies and keep your distance from walruses and whales.',
  wildlife: [
    { name: 'Narwhal', level: 'safe', chance: '★★★☆☆ Floe edge & coast' },
    { name: 'Polar Bear', level: 'danger', chance: '★★☆☆☆ Coast & ice' },
    { name: 'Thick-billed Murre', level: 'safe', chance: '★★★★★ Cliffs' },
    { name: 'Beluga', level: 'safe', chance: '★★☆☆☆ Icy waters' },
    { name: 'Arctic Fox', level: 'safe', chance: '★★☆☆☆ Tundra' },
  ],

  seasons: [
    {
      icon: '🌸',
      name: 'Spring',
      months: 'Spring',
      level: 'olive',
      text: 'Snow and sea ice — the time for ski trips and guided floe edge tours. Ask outfitters for current dates.',
      rating: 5,
      note: 'Floe edge',
    },
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'The warmest weeks — highs around 10 °C. Hiking, kayaking, and seabirds on the cliffs.',
      rating: 5,
      note: 'Hiking & kayaking',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Short autumn and fast freeze-up. Travel becomes difficult.',
      rating: 1,
      note: 'Freeze-up',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Long, dark, and very cold — January highs average around −30 °C.',
      rating: 1,
      note: 'Polar night',
    },
  ],

  trailsNote: {
    title: 'Go With Local Guides',
    text: 'Sirmilik is remote High Arctic wilderness. Local guides and outfitters in Pond Inlet and Arctic Bay can arrange transportation and guided trips. Check the Pond Inlet office for safety information and fees.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nu/sirmilik',
  trailsLinkLabel: 'Plan Your Trip On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'Explore Sirmilik' },
  trails: [
    { name: 'Floe Edge Trip', length: 'Guided', time: 'Spring', area: 'Sea ice edge', difficulty: 'Guided', level: 'blue' },
    { name: 'Ski Touring', length: 'Multi-day', time: 'Spring', area: 'Bylot Island & Borden Peninsula', difficulty: 'Expert', level: 'danger' },
    { name: 'Hiking & Kayaking', length: 'Multi-day', time: 'Summer', area: 'Valleys & fjords', difficulty: 'Self-reliant', level: 'caution' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'Fly To Pond Inlet',
      text: 'Pond Inlet (Mittimatalik) is the main gateway and home of the Parks Canada office. Arctic Bay is another nearby community.',
      time: 'Gateway: Pond Inlet',
    },
    {
      icon: '🚤',
      title: 'Into The Park',
      text: 'Local guides and outfitters can arrange transportation to and from the park, or book you on a guided group trip.',
      time: 'Book with outfitters',
    },
    {
      icon: '📋',
      title: 'Plan Ahead',
      text: 'Contact the Pond Inlet office about fees, safety, and trip planning before you go.',
      time: 'Before you go',
    },
  ],

  entryPass: {
    title: 'Fees',
    text: 'Daily visitor fees, overnight camping fees, and annual backcountry passes apply.',
    buyText: 'Contact the Pond Inlet office for fees and planning.',
    url: 'https://parks.canada.ca/pn-np/nu/sirmilik',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Backcountry Camping',
      text: 'Backcountry camping in the park, with Parks Canada fees.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/sirmilik', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Pond Inlet & Arctic Bay',
      text: 'Accommodation is available in both nearby communities.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/nu/sirmilik', level: 'safe' }],
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
      title: 'Pond Inlet Office',
      lines: ['1-867-899-8092', '1-888-773-8888', 'sirmilik.info@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'P.O. Box 300, Pond Inlet, NU X0A 0S0',
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bear Safety',
      text: 'Read Parks Canada’s polar bear safety guidance before your trip.',
    },
    {
      icon: '🥶',
      title: 'Cold Even In Summer',
      text: 'Summer highs average only around 10 °C. Bring full cold-weather gear.',
    },
    {
      icon: '🪶',
      title: 'Inuit Co-Management',
      text: 'Inuit and Parks Canada manage the park cooperatively. Inuit continue to hunt and fish here.',
    },
  ],

  gallery: [],
};

export default SIRMILIK;
