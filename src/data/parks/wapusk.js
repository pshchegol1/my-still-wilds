// Wapusk National Park — данные страницы /park/wapusk
//
// Фото: по просьбе — снимок с карточки (/mb/parks/wapusk.png): закат над
// заснеженным, торосистым берегом — похоже на побережье Гудзонова залива
// у Черчилла, но по снимку место не определить. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Wapusk (главная): 11,475 км² на границе бореального леса
//   и арктической тундры; одно из крупнейших в мире мест, где белые
//   медведицы роют родильные берлоги; территория Договора № 5, земли кри,
//   дене, инуитов и метисов Red River; все посещения — только с
//   лицензированным туроператором из Черчилла; наблюдение за медведями —
//   февраль и март; авиатуры, вертолёты; Visitor Centre Parks Canada в
//   Черчилле; веб-камера; доступ ограничен круглый год; 1-888-773-8888,
//   204-675-8863, manitoba@pc.gc.ca; ЧП 1-877-852-3100 / 1-780-852-6155;
//   P.O. Box 127, Churchill MB R0B 0E0; молодёжь бесплатно.
// - Wikipedia: основан в 1996 — 37-й нацпарк Канады; ~45 км к югу от
//   Черчилла, на берегу Гудзонова залива; «wapusk» — «белый медведь» на
//   языке кри; медведицы роют берлоги в торфяниках и выходят в марте;
//   Cape Churchill — только вертолёт или Tundra Buggy, «лучшее место в мире»
//   для наблюдения медведей, ~1000 медведей проходят зимой; карибу, волки,
//   >250 видов птиц — бородатая неясыть, белые гуси, сапсаны; сырая
//   субарктика, торфяники (~27%), вечная мерзлота; Hudson Bay Lowlands;
//   82 посетителя в 2022-23; York Factory First Nation, Fox Lake First
//   Nation, Sayisi Dene, инуиты.
// - Площадь: Parks Canada и Wikipedia — 11,475 (на карточке MB было 11,067
//   → исправлено).
// - НЕ использовано: цены туров, названия операторов, точные даты, троп
//   в парке нет — секция троп показывает способы посещения.

const IMAGE = '/mb/parks/wapusk.png';

export const WAPUSK = {
  slug: 'wapusk',
  name: 'Wapusk National Park',
  shortName: 'Wapusk',
  province: 'Manitoba',
  tag: 'Land Of The White Bear · Est. 1996',
  heroImage: IMAGE,
  heroCaption: 'Wapusk National Park · MB',
  description:
    'Wapusk means “white bear” in Cree. On the shore of Hudson Bay, where boreal forest meets Arctic tundra, this remote park protects one of the largest polar bear denning areas in the world. There is no road access — every visit is with a licensed operator from Churchill.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1996' },
    { label: 'Area', value: '11,475 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Visitors', value: '82 In 2022–23' },
    { label: 'Bird Species', value: '250+' },
    { label: 'Access', value: 'Licensed Tours Only' },
  ],

  badges: ['Polar Bears', 'Tundra', 'Remote'],

  bestSeasons: [
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Polar Bear Nursery',
    emoji: '🐻‍❄️',
    title: 'Where Polar Bear Cubs Are Born',
    text: 'Pregnant polar bears dig maternity dens in the park’s peatlands and spend the winter there. In March, mothers emerge with their cubs and head for the sea ice of Hudson Bay. This makes Wapusk one of the largest polar bear denning areas on Earth — and one of Canada’s least-visited parks: only 82 people visited in 2022–23.',
    stats: [
      { value: '~1,000', label: 'Bears pass Cape Churchill', level: 'gold' },
      { value: 'March', label: 'Mothers and cubs emerge', level: 'blue' },
      { value: '82', label: 'Visitors in 2022–23', level: 'danger' },
      { value: '250+', label: 'Bird species', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Polar Bear Denning',
      icon: '🐻‍❄️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Guided winter trips in February and March to see mothers and cubs leaving their dens — with a licensed operator only.',
    },
    {
      name: 'Cape Churchill',
      icon: '📍',
      tag: 'Bear Viewing',
      tagLevel: 'danger',
      meta: 'Reached only by helicopter or tundra vehicle. About 1,000 polar bears pass through the area.',
    },
    {
      name: 'Aerial Tours',
      icon: '🚁',
      tag: 'From Churchill',
      tagLevel: 'blue',
      meta: 'Helicopter and small-plane flights over the tundra, peatlands, and Hudson Bay coast.',
    },
    {
      name: 'Tundra & Peatlands',
      icon: '🌿',
      tag: 'Landscape',
      tagLevel: 'olive',
      meta: 'A wet subarctic world of muskeg, bogs, and permafrost, where forest gives way to tundra.',
    },
    {
      name: 'Birds Of Hudson Bay',
      icon: '🦢',
      tag: 'Birding',
      tagLevel: 'safe',
      meta: 'More than 250 species, with hundreds of thousands of nesting shorebirds and waterfowl, including snow geese.',
    },
    {
      name: 'Parks Canada Visitor Centre',
      icon: 'ℹ️',
      tag: 'In Churchill',
      tagLevel: 'purple',
      meta: 'Start here to learn about the park, polar bears, and the region before your tour.',
    },
  ],

  wildlifeWarning:
    'This is polar bear country. Polar bears are dangerous and can appear anywhere near the coast and in Churchill itself. Never walk out alone — all activities in the park require a licensed tour operator. Follow your guide’s instructions at all times.',
  wildlife: [
    { name: 'Polar Bear', level: 'danger', chance: '★★★★☆ With a guide' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Tundra' },
    { name: 'Gray Wolf', level: 'caution', chance: '★☆☆☆☆ Rarely seen' },
    { name: 'Snow Goose', level: 'safe', chance: '★★★★☆ Summer' },
    { name: 'Peregrine Falcon', level: 'safe', chance: '★★☆☆☆ Summer' },
  ],

  seasons: [
    {
      icon: '❄️',
      name: 'Winter',
      months: 'February — March',
      level: 'caution',
      text: 'Polar bear denning season — guided trips to watch mothers and cubs emerge from their dens. Extreme cold.',
      rating: 5,
      note: 'Denning season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'October — November',
      level: 'danger',
      text: 'Peak polar bear season around Churchill (about mid-October to November), as bears wait for Hudson Bay to freeze. Tours and hotels book up early.',
      rating: 4,
      note: 'Bears on the coast',
    },
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Nesting birds and green tundra. Access is still by licensed operator only.',
      rating: 3,
      note: 'Birds & tundra',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'A short, cold transition season with limited trips.',
      rating: 2,
      note: 'Limited trips',
    },
  ],

  trailsNote: {
    title: 'Licensed Operators Only',
    text: 'Wapusk is remote and not reachable by road. A licensed tour operator is required for all activities in the park. Book through operators in Churchill and check Parks Canada’s safety information for polar bear country.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/mb/wapusk',
  trailsLinkLabel: 'How To Visit On Parks Canada',
  trailsTag: 'Ways To Visit',
  trailsTitle: { lead: 'How To', highlight: 'See Wapusk' },
  trails: [
    { name: 'Denning Tour', length: 'Winter trip', time: 'February — March', area: 'From Churchill', difficulty: 'Guided', level: 'blue' },
    { name: 'Helicopter Flight', length: 'Aerial tour', area: 'From Churchill', difficulty: 'Guided', level: 'blue' },
    { name: 'Tundra Vehicle', length: 'Over-snow / tundra', area: 'Cape Churchill', difficulty: 'Guided', level: 'blue' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'Fly To Churchill',
      text: 'There is no road access to Churchill. Scheduled flights run from Winnipeg and Thompson.',
      time: 'Gateway: Churchill, MB',
    },
    {
      icon: '🚆',
      title: 'Train To Churchill',
      text: 'Regular train service also reaches Churchill — a long journey across northern Manitoba.',
      time: 'Multi-day trip',
    },
    {
      icon: '🚁',
      title: 'Into The Park',
      text: 'About 45 km south of Churchill. Reach it only on a licensed tour — by helicopter, small plane, or over-snow and tundra vehicles.',
      time: 'Licensed operator required',
    },
  ],

  entryPass: {
    title: 'Fees & Licensed Tours',
    text: 'Daily visitor fees apply; youth 17 and under enter free. All activities require a licensed tour operator.',
    buyText: 'Contact Parks Canada in Churchill for the list of licensed operators.',
    url: 'https://parks.canada.ca/pn-np/mb/wapusk',
  },

  stay: [
    {
      icon: '🏘️',
      title: 'Churchill, MB',
      text: 'Visitors stay in Churchill and join licensed tours from town. Hotels book up fast in polar bear season.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Churchill+Manitoba', level: 'blue' },
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/mb/wapusk', level: 'safe' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'In the park:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Information',
      lines: ['204-675-8863', '1-888-773-8888', 'manitoba@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'P.O. Box 127, Churchill, MB R0B 0E0',
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bear Safety',
      text: 'Never walk alone near the coast. Follow your guide and Parks Canada’s polar bear safety rules.',
    },
    {
      icon: '🥶',
      title: 'Extreme Cold',
      text: 'Winter trips mean deep cold and wind — dress in serious Arctic layers.',
    },
    {
      icon: '🪶',
      title: 'Treaty 5 Territory',
      text: 'Lands traditionally used by the Cree, Dene, Inuit, and Red River Métis peoples.',
    },
  ],

  gallery: [],
};

export default WAPUSK;
