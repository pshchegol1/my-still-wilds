// Cape Breton Highlands National Park — данные страницы
// /park/cape-breton-highlands
//
// Фото: по просьбе — снимок с карточки (/ns/parks/cape-breton-highlands.png):
// шоссе в долине между холмами в осенних красках — похоже на Cabot Trail в
// парке (по виду, точное место не подтверждено). Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Cape Breton Highlands (главная): 37639 Cabot Trail,
//   Ingonish Beach NS B0C 1L0; 902-224-2306; cbinfo@pc.gc.ca; 911; дикие
//   животные — Jasper Dispatch 1-877-852-3100; открыт круглый год; услуги
//   15 мая — 25 окт. 2026; парковку у Skyline Trail нужно бронировать с
//   26 июня по 25 окт. 2026 (новое в 2026, платно); соглашение
//   Toqi'maliaptmu'k с мигмак; красные стулья; пляжи, велосипед.
// - Parks Canada, Hiking: Skyline 6.5 км т/о или 8 км петля, 2-3 ч, лёгкая;
//   Franey 4.5 км нижняя петля / 13 км полная, сложная, до 423 м; Middle
//   Head 5.3 км, 1.5 ч; Acadian 8.4 км петля, 3-4 ч; Fishing Cove 12 км,
//   5-6 ч, сложная; Lone Shieling 0.6 км; Le Chemin du Buttereau 4.6 км;
//   Mary Ann Falls 13.9 км. Советы: ходить с напарником и крепкой палкой,
//   мошка и комары всё лето, погода на плато меняется быстро.
// - Parks Canada, Camping (через поиск): Broad Cove 202 места (крупнейший),
//   Chéticamp 97, Ingonish Beach 60, Corney Brook 22; бронь — Chéticamp,
//   Mkwesaqtuk/Cap-Rouge, Ingonish Beach, Broad Cove, Fishing Cove;
//   Fishing Cove — 8 бэккантри-мест, нужен permit; в июле-августе
//   кемпинги заполняются.
// - Wikipedia: основан в 1936 — первый нацпарк в Атлантической Канаде;
//   948 км² в тексте / 949 в инфобоксе (взяли 949, как на карточке); около
//   трети Cabot Trail проходит по парку; 26 размеченных троп; плато в
//   стиле тундры; White Hill 533.5 м — высшая точка Новой Шотландии;
//   акадийский и бореальный лес; Chéticamp — акадийская деревня у западного
//   входа; 5 морских пляжей, сильные течения у Black Brook и Ingonish Beach;
//   Highlands Links (18 лунок, Stanley Thompson) у Keltic Lodge; лоси (18
//   завезены из Elk Island в 1947-48), рыси, чёрные медведи, койоты;
//   белоголовые орланы, олуши, Bicknell's thrush; горбачи, гринды; в 2009
//   койоты смертельно напали на туристку на Skyline Trail; 277,203
//   посетителей 2022-23.
// - НЕ использовано: имя погибшей (не нужно на странице), сроки сезона
//   кемпингов 2026 (источники расходятся).

const IMAGE = '/ns/parks/cape-breton-highlands.png';

export const CAPE_BRETON_HIGHLANDS = {
  slug: 'cape-breton-highlands',
  name: 'Cape Breton Highlands National Park',
  shortName: 'Cape Breton Highlands',
  province: 'Nova Scotia',
  tag: 'Along The Cabot Trail · Est. 1936',
  heroImage: IMAGE,
  heroCaption: 'Cape Breton Highlands National Park · NS',
  description:
    'Where the highlands of Cape Breton drop straight into the sea. The Cabot Trail winds along coastal cliffs and through deep river canyons, with moose on the plateau, whales offshore, and some of Canada’s most brilliant fall colours.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1936' },
    { label: 'Area', value: '949 km²' },
    { label: 'Rating', value: '4.8 ★' },
    { label: 'Cabot Trail', value: '~1/3 In Park' },
    { label: 'Marked Trails', value: '26' },
    { label: 'Highest Point', value: 'White Hill 533 m' },
  ],

  badges: ['Cabot Trail', 'Skyline Trail', 'Fall Colours'],

  bestSeasons: [
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
  ],

  spotlight: {
    tag: 'Mountains Meet The Sea',
    emoji: '🛣️',
    title: 'The Cabot Trail Through The Highlands',
    text: 'About a third of the famous Cabot Trail runs through the park, climbing from the Acadian village of Chéticamp onto a windswept, tundra-like plateau and down to the beaches of Ingonish. Created in 1936, this was the first national park in Atlantic Canada. Its plateau holds White Hill, the highest point in Nova Scotia, while its coast is home to moose, bald eagles, and whales offshore.',
    stats: [
      { value: '1936', label: 'First park in Atlantic Canada', level: 'gold' },
      { value: '~1/3', label: 'Of the Cabot Trail', level: 'blue' },
      { value: '533 m', label: 'White Hill — NS high point', level: 'olive' },
      { value: '26', label: 'Marked hiking trails', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Skyline Trail',
      icon: '🌅',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The park’s best-known trail — 6.5 km return over the highlands, with views of the coast and the Gulf of St. Lawrence. Parking must be reserved.',
    },
    {
      name: 'Cabot Trail Drive',
      icon: '🚗',
      tag: 'Scenic Drive',
      tagLevel: 'blue',
      meta: 'Coastal cliffs, lookouts, and river canyons between Chéticamp and Ingonish.',
    },
    {
      name: 'Franey Lookout',
      icon: '⛰️',
      tag: 'Viewpoint',
      tagLevel: 'danger',
      meta: 'A steep, difficult climb near Ingonish to a lookout at about 420 m — the lower loop is 4.5 km, the full loop 13 km.',
    },
    {
      name: 'Ingonish Beach',
      icon: '🏖️',
      tag: 'Beaches',
      tagLevel: 'safe',
      meta: 'A long beach between a freshwater lake and the ocean. Watch for strong currents.',
    },
    {
      name: 'Lone Shieling',
      icon: '🌳',
      tag: 'Old Forest',
      tagLevel: 'olive',
      meta: 'A short 0.6 km loop through 350-year-old sugar maples — one of the largest old-growth hardwood forests in the Maritimes, with a replica Scottish crofter’s hut.',
    },
    {
      name: 'Chéticamp',
      icon: '🎻',
      tag: 'Acadian Culture',
      tagLevel: 'purple',
      meta: 'The Acadian village at the park’s western entrance, with a park information centre.',
    },
  ],

  wildlifeWarning:
    'Moose are common — keep your distance and slow down on the Cabot Trail. Coyotes live in the park; attacks are rare, but in 2009 a hiker was killed by coyotes on the Skyline Trail. Hike with a companion, carry a sturdy walking stick, and never feed wildlife.',
  wildlife: [
    { name: 'Moose', level: 'caution', chance: '★★★★☆ Plateau & roads' },
    { name: 'Pilot Whale', level: 'safe', chance: '★★☆☆☆ Offshore' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ Coast' },
    { name: 'Coyote', level: 'danger', chance: '★★☆☆☆ Trails' },
    { name: 'Black Bear', level: 'danger', chance: '★☆☆☆☆ Forest' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beaches, whale watching, and full services. Campgrounds can fill in July and August, and Skyline parking must be booked.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'The highlands turn red and gold — one of Canada’s great fall-colour drives. Visitor services run until late October.',
      rating: 5,
      note: 'Fall colours',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Quiet trails and late snow on the plateau. Visitor services start in mid-May.',
      rating: 2,
      note: 'Season starts',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'The park stays open year-round, but services are closed. Weather on the Cabot Trail can be severe.',
      rating: 2,
      note: 'No services',
    },
  ],

  trailsNote: {
    title: 'Book Skyline Trail Parking',
    text: 'From June 26 to October 25, 2026, the Skyline Trail parking lot requires a paid reservation. Book online or call 1-877-737-3783. Weather on the plateau and coast changes quickly — bring layers, water, and bug repellent.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/ns/cbreton/activ/randonnee-hiking',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Skyline', length: '6.5 km return / 8 km loop', time: '2–3 hours', area: 'West side, near Chéticamp', difficulty: 'Easy' },
    { name: 'Middle Head', length: '5.3 km return', time: '1.5 hours', area: 'Ingonish', difficulty: 'Easy' },
    { name: 'Acadian', length: '8.4 km loop', time: '3–4 hours', area: 'Chéticamp', difficulty: 'Moderate' },
    { name: 'Franey', length: '4.5 km lower loop / 13 km full', time: '1.5–6 hours', area: 'Ingonish', difficulty: 'Hard' },
    { name: 'Fishing Cove', length: '12 km return', time: '5–6 hours', area: 'Backcountry cove', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Drive the Cabot Trail — enter at Chéticamp on the west side or Ingonish on the east side.',
      time: 'Park office: Ingonish Beach',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Halifax or Sydney, then drive to Cape Breton Island.',
      time: 'Then continue by car',
    },
    {
      icon: '🧭',
      title: 'Plan The Drive',
      text: 'About a third of the Cabot Trail loop runs through the park. Take your time — there are many lookouts and trailheads along the way.',
      time: 'Allow a full day or more',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free. Seasonal and annual passes are available.',
    buyText: 'Reserve campsites and Skyline Trail parking through the Parks Canada Reservation Service.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Broad Cove',
      text: 'The park’s largest campground — 202 sites near Ingonish.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Chéticamp & Ingonish Beach',
      text: 'Reservable campgrounds at the west and east ends of the park.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🎒',
      title: 'Fishing Cove',
      text: 'Eight backcountry campsites in a remote cove — a permit is required.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Chéticamp & Ingonish',
      text: 'Inns, motels, and restaurants just outside the park entrances.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cheticamp+Nova+Scotia', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Ingonish--Nova-Scotia', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Wildlife reports:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['902-224-2306', 'cbinfo@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: '37639 Cabot Trail, Ingonish Beach, NS B0C 1L0',
    },
    {
      icon: '🌊',
      title: 'Beaches',
      text: 'Strong currents at Black Brook and Ingonish Beach — swim with care.',
    },
    {
      icon: '🦟',
      title: 'Bugs',
      text: 'Black flies and mosquitoes are common all summer. Bring repellent.',
    },
    {
      icon: '🪶',
      title: 'Mi’kmaq Partnership',
      text: 'Parks Canada and the Mi’kmaq of Nova Scotia co-manage protected areas under the Toqi’maliaptmu’k Arrangement.',
    },
  ],

  gallery: [],
};

export default CAPE_BRETON_HIGHLANDS;
