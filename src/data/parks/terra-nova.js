// Terra Nova National Park — данные страницы /park/terra-nova
//
// Фото: по просьбе — снимок с карточки (/nl/parks/Terra Nova.png).
// ВНИМАНИЕ: вид сверху на фьорд с посёлком на берегу, крутым мысом и
// островом очень похож на Bonne Bay и Norris Point в Gros Morne, а не на
// Terra Nova — не подтверждено, сказано пользователю. Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Terra Nova (главная): самый восточный нацпарк Канады;
//   островной бореальный лес; dark sky preserve; 80 км троп; кемпинг
//   frontcountry, backcountry, oTENTik; долгосрочный кемпинг в Newman
//   Sound — бронь только по телефону; парк открыт 15 мая — 11 окт. 2026;
//   709-533-2801; terranova@pc.gc.ca; General Delivery, Glovertown NL
//   A0G 2L0; молодёжь бесплатно; темы безопасности — лоси, пожары.
// - Parks Canada, Hiking (ran-hik): Malady Head 3.4 км т/о, 1-1.5 ч;
//   Mill Cove Lookout 1.5 км т/о, 30 мин; Louil Hill 3.5 км петля; Goowiddy
//   Path 8 км петля, 2.5-3.5 ч; Coastal Trail 9.5 км т/о, ~3.25 ч, лёгкая —
//   средняя; Outport Trail 35 км т/о, 11 ч или несколько дней, сложная;
//   Ochre Hill 5 км, 1-1.5 ч; Sandy Pond 3 км петля; Dunphy's Pond 10 км т/о.
// - Wikipedia: основан в 1957 — первый нацпарк провинции; 399 км² (на
//   карточке 400); северо-восточный берег Ньюфаундленда, заливы Bonavista
//   Bay; от Port Blandford до Glovertown; скалы, мысы, укрытые бухты;
//   «Terra Nova» — латинское имя Ньюфаундленда; лоси, ньюфаундлендские
//   чёрные медведи, карибу, рыси, бобры, выдры; горбачи, малые полосатики,
//   финвалы, гринды, гренландские тюлени, косатки; кемпинги Newman Sound и
//   Malady Head; визит-центр Salton's Brook; следы народа беотук; зимой —
//   снегоступы, беговые лыжи, зимний кемпинг; 45,191 посетитель 2022-23.
// - НЕ использовано: описание троп (Parks Canada даёт только цифры),
//   гольф, расстояния до St. John's.

const IMAGE = '/nl/parks/Terra Nova.png';

export const TERRA_NOVA = {
  slug: 'terra-nova',
  name: 'Terra Nova National Park',
  shortName: 'Terra Nova',
  province: 'Newfoundland and Labrador',
  tag: 'Canada’s Most Easterly Park · Est. 1957',
  heroImage: IMAGE,
  heroCaption: 'Terra Nova National Park · NL',
  description:
    'Rocky fingers of land reaching into the sheltered sounds of Bonavista Bay, wrapped in island boreal forest. Paddle quiet coves, hike the coast, watch for whales and moose — and stay for the dark skies of Canada’s most easterly national park.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1957' },
    { label: 'Area', value: '399 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Hiking Trails', value: '80 km' },
    { label: 'Dark Sky', value: 'Preserve' },
    { label: 'Coast', value: 'Bonavista Bay' },
  ],

  badges: ['Most Easterly', 'Sea Kayaking', 'Dark Sky'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Where Land Meets Sea',
    emoji: '🛶',
    title: 'The Sheltered Sounds Of Bonavista Bay',
    text: 'Terra Nova — the old Latin name for Newfoundland — was the province’s first national park, created in 1957. Its coast is a maze of headlands, cliffs, and sheltered inlets like Newman Sound, perfect for boating and paddling. Offshore, humpback, minke, and fin whales feed in the bay, while moose, lynx, and beavers live in the boreal forest. The park also protects traces of the Beothuk people and early European outport settlements.',
    stats: [
      { value: '1957', label: 'First park in Newfoundland', level: 'gold' },
      { value: '80 km', label: 'Hiking trails', level: 'safe' },
      { value: '35 km', label: 'Outport Trail return', level: 'danger' },
      { value: '399 km²', label: 'Of forest, bog & coast', level: 'blue' },
    ],
  },

  attractions: [
    {
      name: 'Newman Sound',
      icon: '🌊',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A long, sheltered inlet of Bonavista Bay — the heart of the park, with its main campground and quiet water for paddling.',
    },
    {
      name: 'Outport Trail',
      icon: '🥾',
      tag: 'Backcountry',
      tagLevel: 'danger',
      meta: 'The park’s longest hike — 35 km return, done in a long day or as a multi-day trip with backcountry camping.',
    },
    {
      name: 'Whales In The Bay',
      icon: '🐋',
      tag: 'Marine Life',
      tagLevel: 'blue',
      meta: 'Humpback, minke, fin, and pilot whales feed offshore in Bonavista Bay.',
    },
    {
      name: 'Dark Sky Preserve',
      icon: '🌌',
      tag: 'Stargazing',
      tagLevel: 'purple',
      meta: 'A designated dark sky preserve — with evening programs under the stars.',
    },
    {
      name: 'Salton’s Brook',
      icon: 'ℹ️',
      tag: 'Visitor Centre',
      tagLevel: 'safe',
      meta: 'The park’s main visitor centre — the place to start, with programs and information.',
    },
    {
      name: 'Malady Head',
      icon: '⛰️',
      tag: 'Lookout',
      tagLevel: 'olive',
      meta: 'A short but steep 3.4 km return trail near the Malady Head campground.',
    },
  ],

  wildlifeWarning:
    'Moose are common in Terra Nova and on the Trans-Canada Highway that runs through the park — drive slowly, especially at dawn and dusk. Newfoundland black bears also live here: store food properly and keep a clean campsite.',
  wildlife: [
    { name: 'Moose', level: 'caution', chance: '★★★★☆ Forest & highway' },
    { name: 'Humpback Whale', level: 'safe', chance: '★★★☆☆ Bonavista Bay' },
    { name: 'Lynx', level: 'safe', chance: '★☆☆☆☆ Rarely seen' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forest' },
    { name: 'Beaver', level: 'safe', chance: '★★★☆☆ Ponds' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The main season: camping, paddling, freshwater swimming, evening theatre, and whale watching in the bay.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Quieter trails and fall colour. The 2026 operating season ran until October 11.',
      rating: 4,
      note: 'Season ends',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'The park opened for the 2026 season on May 15. Expect cool, changeable weather.',
      rating: 2,
      note: 'Season opens',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Snowshoeing, cross-country skiing, and winter camping for well-prepared visitors.',
      rating: 2,
      note: 'Snow sports',
    },
  ],

  trailsNote: {
    title: 'Check Trail Conditions First',
    text: 'Some trails are steep and rocky, and conditions can change. Stay on marked trails, check conditions with Parks Canada, and plan the Outport Trail as a long day or a multi-day trip.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/nl/terranova/activ/ran-hik',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Mill Cove Lookout', length: '1.5 km return', time: '30 min', difficulty: 'Moderate' },
    { name: 'Malady Head', length: '3.4 km return', time: '1–1.5 hours', difficulty: 'Moderate' },
    { name: 'Coastal Trail', length: '9.5 km return', time: '~3.25 hours', difficulty: 'Easy' },
    { name: 'Goowiddy Path', length: '8 km loop', time: '2.5–3.5 hours', difficulty: 'Hard' },
    { name: 'Outport Trail', length: '35 km return', time: '11 hours or multi-day', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway runs through the park, between Port Blandford and Glovertown on the northeast coast of Newfoundland.',
      time: 'Glovertown, NL',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into St. John’s or Gander, then drive along the Trans-Canada Highway.',
      time: 'Then continue by car',
    },
    {
      icon: '🛶',
      title: 'By Water',
      text: 'Backcountry campsites can be reached on foot, or by canoe or kayak.',
      time: 'Reserve ahead',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Long-term camping at Newman Sound can only be booked by phone: 1-877-737-3783.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Newman Sound',
      text: 'The park’s main campground, set in old-growth forest by the sea, with oTENTiks and long-term camping.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Malady Head',
      text: 'A second frontcountry campground near the Malady Head trail.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Glovertown & Clarenville',
      text: 'Towns near the park with hotels, restaurants, and supplies.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Glovertown+Newfoundland', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Glovertown--Newfoundland-and-Labrador', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park office:', '709-533-2801'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['709-533-2801', 'terranova@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Mailing Address',
      text: 'General Delivery, Glovertown, NL A0G 2L0',
    },
    {
      icon: '🫎',
      title: 'Moose On The Road',
      text: 'Drive slowly through the park, especially at dawn and dusk.',
    },
    {
      icon: '🔥',
      title: 'Fire Safety',
      text: 'Check the fire danger rating and use only designated fire pits.',
    },
    {
      icon: '🌦️',
      title: 'Weather',
      text: 'Coastal weather changes quickly — bring rain gear and warm layers.',
    },
  ],

  gallery: [],
};

export default TERRA_NOVA;
