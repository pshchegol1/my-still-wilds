// Forillon National Park — данные страницы /park/forillon
//
// Фото: по просьбе — снимок с карточки (/qc/parks/forillon.png): галечный
// пляж и светлые известняковые скалы над заливом — похоже на район
// Cap-Bon-Ami в Forillon (по виду, точное место не подтверждено).
// Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Forillon (главная): почти 245 км² между морем, скалами и
//   лесом; киты видны с берега; ископаемые; Grande-Grave; кормить животных
//   строго запрещено; 122 boul. de Gaspé, Gaspé QC G4X 0B1; администрация
//   418-368-5505; информация 1-888-773-8888; бронь 1-877-737-3783;
//   Dispatch (ЧП) 1-800-762-1422; экстренно 911.
// - Parks Canada, Hiking: Les Graves от Grande-Grave 15.2 км т/о, 4-5 ч;
//   от L'Anse-aux-Amérindiens 8 км т/о, 2-3 ч, маяк Cap-Gaspé на скале 95 м,
//   «Land's End»; Mont-Saint-Alban — смотровая башня на 285 м, от
//   Cap-Bon-Ami 3.6 км т/о до башни, первый км крутой; La Chute — 1 км петля,
//   водопад 17 м; Du Banc 4 км т/о — вид на маяк Cap-des-Rosiers, Irish
//   Memorial; Le Castor 2.9 км — бобры; Les Crêtes 33.2 км т/о, 13 ч,
//   бэккантри; собаки только на поводке.
// - Parks Canada, Frontcountry camping: три кемпинга (Petit-Gaspé — юг,
//   лес; Des-Rosiers — север, у моря; Cap-Bon-Ami); oTENTik в Petit-Gaspé и
//   Des-Rosiers; micrOcube в Des-Rosiers. Cap-Bon-Ami — только палатки
//   (Hipcamp / Lonely Planet).
// - Wikipedia: основан 8 июня 1970 — первый нацпарк Канады в Квебеке;
//   244 км²; восточная оконечность полуострова Гаспе, конец Аппалачей;
//   изъятие земель у 225 семей; Mi'kmaq; Fort Péninsule (ВМВ) у Penouille;
//   International Appalachian Trail заканчивается у Cap Gaspé; черные
//   медведи, лоси, рыси, лисы, бобры; колонии морских птиц, киты, тюлени;
//   164,130 посетителей в 2022-23.
// - Сезон кемпингов «конец мая — середина октября» — Hipcamp, на странице
//   с «check dates». Виды китов не перечислены — источники не проверены.
// - НЕ ЗАБЫТЬ: площадь в qc.js 240 км², в all-parks 244 — сказано
//   пользователю.

const IMAGE = '/qc/parks/forillon.png';

export const FORILLON = {
  slug: 'forillon',
  name: 'Forillon National Park',
  shortName: 'Forillon',
  province: 'Quebec',
  tag: 'Land’s End Of The Gaspé · Est. 1970',
  heroImage: IMAGE,
  heroCaption: 'Forillon National Park · QC',
  description:
    'Where the Appalachian Mountains end and drop into the sea. Limestone cliffs, pebble beaches, and a lighthouse at the tip of the Gaspé Peninsula — with whales and seals offshore and black bears and moose in the forest.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1970' },
    { label: 'Area', value: '244 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Cap-Gaspé Cliff', value: '95 m' },
    { label: 'Campgrounds', value: '3' },
    { label: 'Quebec', value: 'First National Park' },
  ],

  badges: ['Land’s End', 'Whale Watching', 'Appalachian Trail'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'End Of The Land',
    emoji: '🗻',
    title: 'Where The Appalachians Meet The Sea',
    text: 'The Appalachian Mountains run for thousands of kilometres — and Forillon is where they finally end, dropping into the Gulf of St. Lawrence. The International Appalachian Trail finishes at Cap Gaspé, where a lighthouse stands on a 95-metre cliff. Created in 1970, Forillon was Quebec’s first national park. Its creation also has a painful side: 225 families were expropriated from their land to make it.',
    stats: [
      { value: '95 m', label: 'Cliff under Cap-Gaspé lighthouse', level: 'gold' },
      { value: '1970', label: 'Quebec’s first national park', level: 'safe' },
      { value: '225', label: 'Families expropriated', level: 'danger' },
      { value: '285 m', label: 'Mont-Saint-Alban tower', level: 'blue' },
    ],
  },

  attractions: [
    {
      name: 'Cap-Gaspé & Land’s End',
      icon: '🗼',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A lighthouse on a 95 m cliff at the very tip of the peninsula — the end of the Les Graves trail and the International Appalachian Trail.',
    },
    {
      name: 'Mont-Saint-Alban Tower',
      icon: '🔭',
      tag: 'Viewpoint',
      tagLevel: 'blue',
      meta: 'An observation tower at 285 m with a panorama of the cliffs, Gaspé Bay, and the Gulf of St. Lawrence.',
    },
    {
      name: 'Grande-Grave',
      icon: '🏚️',
      tag: 'Heritage',
      tagLevel: 'purple',
      meta: 'A heritage fishing hamlet with the Hyman & Sons general store — the story of the families who lived and fished here.',
    },
    {
      name: 'Whales From Shore',
      icon: '🐋',
      tag: 'Wildlife',
      tagLevel: 'safe',
      meta: 'Whales can be seen from the park’s coast and cliffs. Seals rest on the rocks and beaches — watch from a distance.',
    },
    {
      name: 'La Chute Waterfall',
      icon: '💧',
      tag: 'Short Walk',
      tagLevel: 'olive',
      meta: 'A 1 km loop to a 17 m waterfall in the forest, with a red chair at its base. Steep sections and stairs.',
    },
    {
      name: 'Fort Péninsule',
      icon: '🏰',
      tag: 'History',
      tagLevel: 'danger',
      meta: 'A Second World War fortification near Penouille — walk into the tunnel to see a cannon still in place.',
    },
  ],

  wildlifeWarning:
    'Black bears and moose live in Forillon. Make noise on the trails, keep your distance, and never leave food out. Feeding wildlife is strictly prohibited. Watch seals and whales from shore without approaching, and stay back from the undercut cliff edges.',
  wildlife: [
    { name: 'Whales', level: 'safe', chance: '★★★☆☆ From the cliffs' },
    { name: 'Seals', level: 'safe', chance: '★★★☆☆ Rocks & beaches' },
    { name: 'Seabird Colonies', level: 'safe', chance: '★★★★☆ Cliffs' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forest trails' },
    { name: 'Moose', level: 'caution', chance: '★★☆☆☆ Forest & roads' },
    { name: 'Beaver', level: 'safe', chance: '★★★☆☆ Le Castor trail' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The busiest season. Book campsites early, especially for July and August. Bring layers — fog and wind roll in from the Gulf.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fall colours on the Appalachian slopes and quieter trails. Services wind down — check dates before you go.',
      rating: 4,
      note: 'Fall colours',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Cool and quiet. Campgrounds usually open from late May or early June — check Parks Canada for exact dates.',
      rating: 2,
      note: 'Season starts',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'Snowy and largely closed. Check Parks Canada for winter conditions and services.',
      rating: 1,
      note: 'Off season',
    },
  ],

  trailsNote: {
    title: 'Cliffs Are Undercut And Not Always Fenced',
    text: 'Stay on the marked trails near Cap-Gaspé and other cliffs. Dogs must be on a leash. On shared trails, hikers keep left, facing cyclists.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/qc/forillon/activ/randonnee-hiking',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'La Chute', length: '1 km loop', gain: '90 m', time: '30–45 min', area: 'Route 132', difficulty: 'Moderate' },
    { name: 'Les Graves → Cap-Gaspé', length: '8 km return', gain: '310 m', time: '2–3 hours', area: 'L’Anse-aux-Amérindiens', difficulty: 'Moderate' },
    { name: 'Mont-Saint-Alban Tower', length: '3.6 km return', gain: '325 m', time: '1.5–2 hours', area: 'Cap-Bon-Ami', difficulty: 'Moderate' },
    { name: 'Les Graves (full trail)', length: '15.2 km return', gain: '532 m', time: '4–5 hours', area: 'Grande-Grave', difficulty: 'Moderate' },
    { name: 'Les Crêtes', length: '33.2 km return', gain: '1,437 m', time: '~13 hours', area: 'Backcountry', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Forillon is at the tip of the Gaspé Peninsula, next to the town of Gaspé. From Québec City it is about 700 km along Route 132 — plan it as part of a Gaspésie road trip.',
      time: '~10.5 h from Québec City',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'The town of Gaspé has a regional airport. You will need a car to reach the trails and campgrounds.',
      time: 'Then continue by car',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Québec City to Forillon route for stops along the south shore of the St. Lawrence.',
      time: '5–7 day loop',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'A Parks Canada daily pass or Discovery Pass is required. Youth 17 and under enter free.',
    buyText: 'Book campsites, oTENTiks, and micrOcubes through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🌲',
      title: 'Petit-Gaspé',
      text: 'A quiet campground in the forest of the South Area, with oTENTiks.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🌊',
      title: 'Des-Rosiers',
      text: 'A campground by the sea in the North Area, with oTENTiks and micrOcube tiny houses.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Cap-Bon-Ami',
      text: 'The smallest campground, for tents only, near the cliffs and the Mont-Saint-Alban trail.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Gaspé',
      text: 'The nearest town, with hotels, restaurants, and supplies.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gaspe+Quebec', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Gaspe--Quebec', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Parks Canada Dispatch:', '1-800-762-1422'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['418-368-5505', 'Parks Canada: 1-888-773-8888', 'information@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '122 Gaspé Boulevard, Gaspé, QC G4X 0B1',
    },
    {
      icon: '🧥',
      title: 'Layers',
      text: 'Fog, wind, and big temperature swings come off the Gulf — bring warm layers even in summer.',
    },
    {
      icon: '🚫',
      title: 'Don’t Feed Wildlife',
      text: 'Feeding wildlife is strictly prohibited. Report feeding or harassment to Dispatch.',
    },
    {
      icon: '🐕',
      title: 'Pets',
      text: 'Dogs must be on a leash at all times on trails, beaches, and day-use areas.',
    },
  ],

  gallery: [],
};

export default FORILLON;
