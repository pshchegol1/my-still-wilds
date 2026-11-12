// Mingan Archipelago National Park Reserve — данные страницы
// /park/mingan-archipelago
//
// Фото: по просьбе — снимок с карточки (/qc/parks/mingan-archipelago.png).
// ВНИМАНИЕ: на снимке бирюзовая бухта с галечным пляжем и скалами в
// хвойном лесу — это узнаваемая Indian Head Cove / The Grotto на Bruce
// Peninsula (Онтарио), а не Mingan. Сказано пользователю, предложена замена.
// Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Mingan (главная): Северный берег Квебека; «самое большое
//   скопление монолитов в Канаде»; тысячи островов и островков;
//   арктико-альпийские растения, птичьи колонии, киты и тюлени; морские
//   экскурсии на Quarry и Niapiskau (монолиты) и на Île aux Perroquets и
//   Île Nue (монолиты, история, маяк, морские птицы); жильё — кемпинг,
//   oTENTik, Ôasis (каплевидные домики), 4-звёздочное; 1340 rue de la
//   Digue, Havre-Saint-Pierre QC G0G 1P0; 418-538-3285 / 418-949-2126;
//   1-888-773-8888; information@pc.gc.ca; дневная плата, молодёжь бесплатно.
// - Parks Canada, Backcountry camping / Hiking: попасть можно только на
//   лодке признанного Parks Canada перевозчика; более 80 км троп на более
//   чем 9 островах (названия и длины троп не даны → на странице без цифр).
// - Wikipedia: основан в 1984; 151 км²; «около тысячи островов и
//   островков»; напротив острова Антикости; ордовикские осадочные породы —
//   известняк и доломит; ~350 видов сосудистых растений, редкие — Mingan
//   thistle и др.; почти 200 видов птиц — колонии крачек и гаг, тупики,
//   гагарки, белоголовые орланы; серый, обыкновенный и гренландский
//   тюлени; горбачи, финвалы, малые полосатики; 44,017 посетителей 2022-23.
// - Наш маршрут quebec-city-mingan.js: 865 км от Квебека, Route 138;
//   лодки из Longue-Pointe-de-Mingan (западные острова, тупики) и из
//   Havre-Saint-Pierre (восточные, монолиты); Нитассинан, Innu Ekuanitshit;
//   «reserve» — из-за неурегулированных прав инну.
// - НЕ использовано: число монолитов, даты сезона, названия троп.

const IMAGE = '/qc/parks/mingan-archipelago.png';

export const MINGAN_ARCHIPELAGO = {
  slug: 'mingan-archipelago',
  name: 'Mingan Archipelago National Park Reserve',
  shortName: 'Mingan',
  province: 'Quebec',
  tag: 'Islands Of Stone Giants · Est. 1984',
  heroImage: IMAGE,
  heroCaption: 'Mingan Archipelago · QC',
  description:
    'A chain of about a thousand islands and islets on Quebec’s North Shore, where the sea has carved limestone into towers and mushroom-shaped monoliths. Reachable only by boat — with puffins, seals, and whales in the cold waters of the Gulf of St. Lawrence.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1984' },
    { label: 'Area', value: '151 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Islands & Islets', value: '~1,000' },
    { label: 'Hiking Trails', value: '80+ km' },
    { label: 'Access', value: 'Boat Only' },
  ],

  badges: ['Monoliths', 'Puffins', 'Boat Access'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 1 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'Carved By The Sea',
    emoji: '🗿',
    title: 'Canada’s Largest Group Of Monoliths',
    text: 'The Mingan islands are made of ancient sedimentary rock — limestone and dolomite laid down in a sea over 400 million years ago. Waves, frost, and ice have eroded the cliffs into free-standing pillars, arches, and “flowerpot” monoliths, the largest concentration in Canada. It is a park reserve because it lies in Nitassinan, the homeland of the Innu, whose land rights are still being negotiated.',
    stats: [
      { value: '~1,000', label: 'Islands and islets', level: 'blue' },
      { value: '~200', label: 'Bird species', level: 'safe' },
      { value: '~350', label: 'Plant species', level: 'olive' },
      { value: '80+ km', label: 'Island trails', level: 'gold' },
    ],
  },

  attractions: [
    {
      name: 'Niapiskau Island',
      icon: '🗿',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'One of the best-known islands for monoliths — reached by sea excursion from Havre-Saint-Pierre.',
    },
    {
      name: 'Quarry Island',
      icon: '🪨',
      tag: 'Monoliths',
      tagLevel: 'danger',
      meta: 'Monoliths and varied habitats, with trails along the shore — another classic sea excursion.',
    },
    {
      name: 'Île aux Perroquets',
      icon: '🐧',
      tag: 'Seabirds',
      tagLevel: 'safe',
      meta: 'A lighthouse station and seabird colonies, including Atlantic puffins — boats leave from Longue-Pointe-de-Mingan.',
    },
    {
      name: 'Île Nue',
      icon: '🏝️',
      tag: 'History',
      tagLevel: 'purple',
      meta: 'A low, open island with monoliths, history, and arctic-alpine plants.',
    },
    {
      name: 'Whales & Seals',
      icon: '🐋',
      tag: 'Marine Life',
      tagLevel: 'blue',
      meta: 'Humpback, fin, and minke whales feed in the area; grey, harbour, and harp seals rest on the rocks.',
    },
    {
      name: 'Ôasis Pods',
      icon: '🥚',
      tag: 'Unique Stay',
      tagLevel: 'olive',
      meta: 'Teardrop-shaped Parks Canada lodgings — a memorable way to spend a night on the islands.',
    },
  ],

  wildlifeWarning:
    'Seabird colonies are closed to landing during nesting — follow your boat operator’s rules and keep your distance. Watch seals and whales from afar. On land, black bears and moose are occasionally seen, and both are common along Route 138 at dawn and dusk.',
  wildlife: [
    { name: 'Atlantic Puffin', level: 'safe', chance: '★★★☆☆ Île aux Perroquets' },
    { name: 'Common Eider & Terns', level: 'safe', chance: '★★★★☆ Colonies' },
    { name: 'Seals', level: 'safe', chance: '★★★★☆ On the rocks' },
    { name: 'Minke Whale', level: 'safe', chance: '★★★☆☆ From the boat' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★☆☆☆ Coast' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The main season for sea excursions, camping, and puffins. Boat trips fill up — book before you make the long drive.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'The season winds down and boat trips become fewer. Check the detailed schedule before you go.',
      rating: 2,
      note: 'Season ends',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Cold and quiet on the North Shore. Island services have not started yet.',
      rating: 1,
      note: 'Before season',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Ice and storms on the Gulf. No island visits — and Route 138 can close in storms.',
      rating: 1,
      note: 'Closed',
    },
  ],

  trailsNote: {
    title: 'The Park Is Islands — Book A Boat First',
    text: 'There are more than 80 km of trails spread over 9+ islands, but every one of them starts with a boat ride. Weather can cancel crossings at short notice, so leave a spare day in your plans. The Gulf is cold all summer — dress for the water, not the air.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/qc/mingan/activ/randonnee-hiking',
  trailsLinkLabel: 'Hiking On Parks Canada',
  trailsTag: 'Island Walks',
  trailsTitle: { lead: 'Best', highlight: 'Islands To Walk' },
  trails: [
    { name: 'Niapiskau Island', length: 'Monolith trails', area: 'From Havre-Saint-Pierre', difficulty: 'By boat', level: 'blue' },
    { name: 'Quarry Island', length: 'Shore & forest trails', area: 'From Havre-Saint-Pierre', difficulty: 'By boat', level: 'blue' },
    { name: 'Île aux Perroquets', length: 'Lighthouse station', area: 'From Longue-Pointe-de-Mingan', difficulty: 'By boat', level: 'blue' },
    { name: 'Île Nue', length: 'Monoliths & arctic-alpine plants', area: 'Sea excursion', difficulty: 'By boat', level: 'blue' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Route 138 is the only road along the North Shore — about 865 km from Québec City to Havre-Saint-Pierre. Fill up in Sept-Îles.',
      time: '~12 h non-stop from Québec City',
    },
    {
      icon: '⛴️',
      title: 'By Boat',
      text: 'The islands are reached only by boat with operators recognized by Parks Canada — from Havre-Saint-Pierre for the eastern islands, and from Longue-Pointe-de-Mingan for the western islands.',
      time: 'Book ahead',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Québec City to Mingan route for stops along the North Shore, including the whales at Tadoussac.',
      time: '2–3 day drive',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free. Boat transport is booked separately with an operator.',
    buyText: 'Book camping, oTENTiks, and Ôasis through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '⛺',
      title: 'Island Camping',
      text: 'Camping on the islands — plan your boat transport together with your campsite.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🥚',
      title: 'oTENTik & Ôasis',
      text: 'Ready-to-camp tent-cabins and teardrop-shaped Ôasis pods.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Havre-Saint-Pierre',
      text: 'The fishing town at the end of the drive, with hotels, restaurants, and boat departures.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Havre-Saint-Pierre', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Havre-Saint-Pierre--Quebec', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park office:', '418-538-3285'],
    },
    {
      icon: 'ℹ️',
      title: 'Information',
      lines: ['418-949-2126', '1-888-773-8888', 'information@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '1340 de la Digue Street, Havre-Saint-Pierre, QC G0G 1P0',
    },
    {
      icon: '🌊',
      title: 'Cold Water',
      text: 'The Gulf of St. Lawrence is cold all summer. Dress in layers and bring rain gear for the boat.',
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Good in the towns, with long dead stretches on Route 138 and none on the water.',
    },
    {
      icon: '🪶',
      title: 'Innu Territory',
      text: 'The park lies in Nitassinan. The Innu community of Ekuanitshit is on Route 138 between the two boat departure points.',
    },
  ],

  gallery: [],
};

export default MINGAN_ARCHIPELAGO;
