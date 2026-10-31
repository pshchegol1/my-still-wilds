// Arviat — данные страницы /city/arviat (Арвиат, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только безымянные зимние и
// патагонские пейзажи). Свежих качественных фото посёлка на Commons
// очень мало; в шапке — "Churches of Arviat, Nunavut, Canada", автор
// Ansgar Walk, 30.06.1995 — старое, но однозначно подписанное и с
// характерным видом посёлка; более свежих альтернатив высокого
// разрешения не нашли (только close-up одного здания 2025 года).
// Лицензия CC BY-SA 2.5 требует автора.
// Население — перепись 2021: расхождение между инфобоксом Wikipedia
// (2 657, по поселению/hamlet) и population centre (2 766); третий по
// величине населённый пункт Нунавута после Икалуита и Ранкин-Инлета.
// Название: Arviat означает "место горбатого/гренландского кита"
// (arviq — гренландский кит на инуктитуте); до 1 июня 1989 посёлок
// официально назывался Eskimo Point.
// Арвиат известен как одно из лучших мест в Канаде для наблюдения
// белых медведей осенью (с миграцией к морскому льду) и белух летом;
// в прошлом были случаи нападений медведей — предупреждение в тексте.
// Медцентр — Arviat Health Centre; конкретного адреса не нашли, только
// номера телефонов из разных источников — указываем с оговоркой.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний сealift.
// Из общих знаний: тёплый общинный дух, школа John Arnalukjuak, статус
// региона Kivalliq, время в пути.

export const ARVIAT = {
  slug: 'arviat',
  name: 'Arviat',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Polar Bear Country',
  accentLevel: 'gold',
  heroIcon: '🐻‍❄️',
  heroImage: '/Cities/Arviat/hero.jpg',
  heroCredit: 'Photo: Ansgar Walk / Wikimedia Commons · CC BY-SA 2.5',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 61.1083, lon: -94.0556 },
  subtitle: 'Place of the Bowhead Whale',
  description:
    'On the western shore of Hudson Bay, Arviat — “place of the bowhead whale” in Inuktitut — is Nunavut’s third-largest community and one of its most traditional, with deep Inuit language and culture still at the centre of daily life. Each fall, polar bears migrate past the town on their way to the sea ice, making Arviat one of the best places in Canada to see them.',

  actions: [
    { label: 'Explore Arviat', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈2.7K (2021)' },
    { label: 'Known For', value: 'Polar Bear Viewing' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Rankin Inlet', value: '≈1 h by plane' },
  ],

  badges: ['Polar Bears', 'Hudson Bay', 'Inuit Culture'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈2.7K', label: 'People in Arviat — Nunavut’s third-largest community', level: 'gold' },
    { value: '1989', label: 'Year the community officially adopted the name Arviat, replacing Eskimo Point', level: 'purple' },
    { value: 'Fall', label: 'Season hundreds of polar bears migrate past town toward the sea ice', level: 'danger' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', tag: '🏘️ Centre', tagLevel: 'gold', meta: 'Hamlet office, school and the main community buildings' },
    { name: 'Hudson Bay Shoreline', icon: '🌊', tag: '🌊 Coast', tagLevel: 'blue', meta: 'The coast where polar bears and beluga are seen' },
    { name: 'Maguse River Area', icon: '🏞️', tag: '🏞️ Land', tagLevel: 'safe', meta: 'Tundra and river country used for traditional hunting and fishing' },
    { name: 'Airport Area', icon: '✈️', tag: '✈️ Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world' },
  ],

  attractions: [
    {
      name: 'Fall Polar Bear Migration',
      icon: '🐻‍❄️',
      text: 'Every autumn, polar bears pass close to Arviat as they head toward the forming sea ice on Hudson Bay — one of the best polar bear viewing opportunities in Canada, usually with a local guide.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Guide recommended', level: 'caution' }],
    },
    {
      name: 'Beluga Watching',
      icon: '🐋',
      text: 'In summer, belugas can be seen from shore or by boat along the Hudson Bay coast near Arviat.',
      tags: [{ label: 'Summer', level: 'blue' }, { label: 'Wildlife', level: 'purple' }],
    },
    {
      name: 'Inuit Culture & Crafts',
      icon: '🧵',
      text: 'Arviat is known for its strong Inuit traditions — carving, sewing and other crafts are widely practised, and the Inuktitut language remains the community’s dominant tongue.',
      tags: [{ label: 'Culture', level: 'gold' }, { label: 'Shopping', level: 'purple' }],
    },
    {
      name: 'Hudson Bay Shoreline',
      icon: '🌊',
      text: 'Walk the rocky, tundra-backed coast for wide views over the bay — always with awareness of wildlife.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Caution', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Tundra and Hudson Bay Coast',
  outdoor: [
    { icon: '🐻‍❄️', name: 'Polar Bear Tours', dist: 'Guided', text: 'Local operators run fall viewing trips along the migration route.' },
    { icon: '🐋', name: 'Beluga Watching', dist: 'Hudson Bay coast', text: 'Whales visible from shore in summer.' },
    { icon: '🎣', name: 'Fishing', dist: 'Maguse River', text: 'Arctic char fishing on nearby rivers.' },
    { icon: '🥾', name: 'Tundra Walking', dist: 'Around town', text: 'Open land right at the edge of the community.' },
    { icon: '🛷', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and hunting in winter.' },
    { icon: '🌌', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Seal, caribou and Arctic char, traditional Inuit foods.' },
    { icon: '🐋', title: 'Beluga & Whale', area: 'Seasonal', areaLevel: 'purple', text: 'Traditional harvest foods during whale season.' },
    { icon: '🛒', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🍽️', title: 'Community Meals', area: 'Local events', areaLevel: 'gold', text: 'Shared country-food meals mark community gatherings.' },
    { icon: '🐟', title: 'Arctic Char', area: 'Local catch', areaLevel: 'safe', text: 'A staple fish from nearby rivers and the bay.' },
    { icon: '☕', title: 'Small Shops', area: 'Town centre', areaLevel: 'olive', text: 'A handful of stores for daily essentials.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice retreats from the bay as days lengthen.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Beluga season', text: 'Mild weather and whale-watching along the coast.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Polar bear season', text: 'The main draw for visitors, as bears migrate past town.' },
    { icon: '❄️', name: 'Winter', months: 'November — April', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and short days on the open coast.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Arviat Airport has scheduled flights connecting through Rankin Inlet and on to Winnipeg. There is no road or rail link to the rest of Canada.',
      time: '≈1 h to Rankin Inlet',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕',
      title: 'Getting Around',
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel, hunting and visiting the land around town.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport and town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Arviat+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Arviat%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🐻‍❄️',
      title: 'Polar Bear Season',
      area: 'Fall',
      text: 'Guided tour operators often arrange lodging as part of fall bear-viewing packages.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Arviat+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕',
      title: 'No Public Transit',
      text: 'Arviat has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle travel in this compact coastal community.',
      linkLabel: 'Hamlet of Arviat',
      linkUrl: 'https://www.arviat.ca/',
    },
    modes: [
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', title: 'Snowmobile', text: 'Common for winter travel and hunting.' },
          { icon: '🏍️', title: 'ATV', text: 'Widely used in summer around the community.' },
        ],
      },
    ],
    proTip: {
      label: 'Bear safety tip:',
      text: 'Never approach a polar bear or walk the shoreline alone during fall migration season — go with a knowledgeable local guide, as the community itself takes precautions during this period.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Arviat has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Arviat / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 5% GST' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🐻‍❄️', label: 'Guided tours: 5% GST' },
      { icon: '🛍️', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌊', label: 'Shoreline viewing: free' },
      { icon: '🐋', label: 'Beluga watching from shore: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Wildlife guides: 10–15%, often included in tour packages.',
  },

  practical: [
    { icon: '✈️', title: 'Fly-In Only', text: 'No roads connect Arviat to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '🐻‍❄️', title: 'Polar Bear Safety', text: 'Bears pass close to town in fall, and the community takes real precautions — never go to the shoreline alone during this season, and follow local guidance.' },
    { icon: '💰', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', title: 'Harsh Winters', text: 'Winters are long and cold, with strong winds off Hudson Bay — dress in serious layers.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — the same as Winnipeg.' },
    { icon: '📶', title: 'Limited Services', text: 'This is a small, remote community — book tours and accommodation well ahead, especially for fall bear season.' },
    { icon: '🪶', title: 'Inuit Homeland', text: 'Arviat is in the heart of Inuit Nunangat, with one of Nunavut’s strongest traditions of spoken Inuktitut; respect local customs and ask before photographing people.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Arviat Health Centre', 'For emergencies, contact the health centre directly', 'Check current contact details with the Government of Nunavut'] },
  ],
};

export default ARVIAT;
