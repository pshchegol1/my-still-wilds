// Prince Albert National Park — данные страницы /park/prince-albert
//
// Фото: по просьбе — снимок с карточки (/sk/parks/prince-albert.png):
// осенний смешанный лес — ели и жёлтые осины — у ручья с мостиком; похоже
// на южный бореальный лес парка (по виду, точное место не подтверждено).
// Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Prince Albert (главная): центр Саскачевана, где луга
//   овсяницы встречаются с озёрами, болотами и смешанным бореальным лесом;
//   открыт круглый год, часть услуг только летом; лодкам нужен
//   обязательный AIS-permit; «You Are in Black Bear Country»; PO Box 100,
//   Waskesiu Lake SK S0J 2Y0; 306-663-4522; 1-888-773-8888; ЧП в парке
//   1-877-852-3100; princealbertinfo@pc.gc.ca; кемпинг и oTENTik.
// - Wikipedia: объявлен парком 24 марта 1927, открыт 10 августа 1928;
//   3,874 км² (на общей карточке 3,875 → взяли 3,874); ~200 км к северу от
//   Saskatoon, вход ~80 км к северу от г. Prince Albert; Waskesiu Lake —
//   единственный посёлок; озёра Waskesiu, Kingsmere, Crean; >400 равнинных
//   бизонов — единственное свободно живущее стадо в исконном ареале в
//   Канаде, с полным набором хищников; одна из крупнейших колоний белых
//   пеликанов в Канаде на Lavallée Lake — закрыта для посещения; волки
//   зимой ходят по льду и дорогам; Grey Owl — первый натуралист службы
//   парков, жил на Ajawaan Lake, хижина «Beaver Lodge»; кемпинги Beaver Glen
//   (213), Red Deer (161), The Narrows, Namekus Lake, Sandy Lake; бэккантри-
//   тропы 13-54 км; гольф «The Lobstick» (Stanley Thompson); 287,372
//   посетителя 2022-23; рекорд холода −48.3 °C.
// - Tourism Saskatchewan (ссылки на страницы Parks Canada): Mud Creek 2 км
//   петля, бобровая хатка; Boundary Bog 2 км петля, болото,
//   саррацения (pitcher plant); Narrows Peninsula 3 км; Spruce River
//   Highlands 8.5 км петля, вышка 10 м, 3-4 ч; Grey Owl Trail 19.9 км в
//   одну сторону, сложная, ночёвка в бэккантри, регистрация в Visitor Centre.
// - НЕ использовано: подробности биографии Grey Owl, Dark Sky (не
//   подтверждено), даты летнего сезона.

const IMAGE = '/sk/parks/prince-albert.png';

export const PRINCE_ALBERT = {
  slug: 'prince-albert',
  name: 'Prince Albert National Park',
  shortName: 'Prince Albert',
  province: 'Saskatchewan',
  tag: 'Where Prairie Meets Boreal · Est. 1927',
  heroImage: IMAGE,
  heroCaption: 'Prince Albert National Park · SK',
  description:
    'Where prairie grasslands give way to lakes, wetlands, and boreal forest. Paddle Waskesiu Lake, hike to Grey Owl’s cabin, and share the park with free-roaming plains bison, wolves, and white pelicans.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1927' },
    { label: 'Area', value: '3,874 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Plains Bison', value: '400+' },
    { label: 'Big Lakes', value: '3' },
    { label: 'From Saskatoon', value: '~200 km' },
  ],

  badges: ['Free-Roaming Bison', 'Grey Owl’s Cabin', 'Lakes & Boreal'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Wild Bison',
    emoji: '🦬',
    title: 'Canada’s Only Free-Ranging Bison In Their Original Range',
    text: 'In the park’s southwest corner, where aspen forest meets meadows, lives a herd of more than 400 plains bison. It is the only free-ranging herd in Canada still living in its original range — alongside its natural predators, including wolves. The park also protects one of Canada’s largest white pelican colonies on Lavallée Lake, closed to visitors so the birds can nest undisturbed.',
    stats: [
      { value: '400+', label: 'Plains bison', level: 'gold' },
      { value: '19.9 km', label: 'Grey Owl Trail, one way', level: 'danger' },
      { value: '1927', label: 'Park created', level: 'blue' },
      { value: '3,874 km²', label: 'Of lakes, forest & prairie', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Grey Owl’s Cabin',
      icon: '🛖',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Beaver Lodge on Ajawaan Lake — home of Grey Owl, the park’s first naturalist. Reach it on the 19.9 km Grey Owl Trail.',
    },
    {
      name: 'Waskesiu Lake',
      icon: '🏖️',
      tag: 'Lake Life',
      tagLevel: 'blue',
      meta: 'Beaches, boating, and the Waskesiu Lake townsite — the park’s only community, with shops and lodging.',
    },
    {
      name: 'Plains Bison',
      icon: '🦬',
      tag: 'Wildlife',
      tagLevel: 'danger',
      meta: 'A wild herd of 400+ in the remote southwest — rarely seen, and never to be approached.',
    },
    {
      name: 'Spruce River Highlands',
      icon: '🗼',
      tag: 'Viewpoint',
      tagLevel: 'olive',
      meta: 'An 8.5 km loop over glacier-built hills to a 10 m viewing tower.',
    },
    {
      name: 'Boundary Bog',
      icon: '🌿',
      tag: 'Easy Walk',
      tagLevel: 'safe',
      meta: 'A 2 km loop to a black spruce bog and kettle lake, with carnivorous pitcher plants.',
    },
    {
      name: 'The Lobstick Golf Course',
      icon: '⛳',
      tag: 'Heritage',
      tagLevel: 'purple',
      meta: 'An 18-hole course in Waskesiu designed by Stanley Thompson in the early 1930s.',
    },
  ],

  wildlifeWarning:
    'You are in black bear country: store food properly and keep a clean camp. Never approach bison — they are wild and unpredictable. In winter, wolves often travel on frozen lakes and plowed roads; keep pets leashed and close.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Forest & camps' },
    { name: 'Plains Bison', level: 'danger', chance: '★☆☆☆☆ Remote southwest' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★☆☆☆ Winter, frozen lakes' },
    { name: 'Beaver', level: 'safe', chance: '★★★☆☆ Mud Creek' },
    { name: 'White Pelican', level: 'safe', chance: '★★★☆☆ Lakes in summer' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beaches, paddling, and camping at Waskesiu. Boats need an aquatic invasive species permit before entering park waters.',
      rating: 5,
      note: 'Main season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Golden aspens and tamaracks, quieter trails, and fewer bugs. Some services close after summer.',
      rating: 4,
      note: 'Golden aspen',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'The park is open year-round. Very cold — temperatures have dropped below −48 °C. Watch for wolf tracks on the lakes.',
      rating: 3,
      note: 'Deep cold',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Ice-out on the lakes and the start of the season. Many services open closer to summer.',
      rating: 2,
      note: 'Ice-out',
    },
  ],

  trailsNote: {
    title: 'Register Before Backcountry Trips',
    text: 'The Grey Owl Trail is usually an overnight trip. Register at the Visitor Centre before you set out and camp only at designated backcountry campgrounds.',
  },

  trailsUrl: 'https://parks.canada.ca/pn-np/sk/princealbert/activ/experiences/randonee-hiking',
  trailsLinkLabel: 'Hiking On Parks Canada',
  trails: [
    { name: 'Mud Creek', length: '2 km loop', area: 'Narrows Road', difficulty: 'Easy' },
    { name: 'Boundary Bog', length: '2 km loop', area: 'Highway 264', difficulty: 'Easy' },
    { name: 'Narrows Peninsula', length: '3 km loop', area: 'Kingsmere Road', difficulty: 'Moderate' },
    { name: 'Spruce River Highlands', length: '8.5 km loop', time: '3–4 hours', area: 'Highway 263', difficulty: 'Hard' },
    { name: 'Grey Owl Trail', length: '19.9 km one way', time: 'Overnight', area: 'Kingsmere Road', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The main entrance is about 80 km north of the city of Prince Albert, and about 200 km north of Saskatoon.',
      time: 'Waskesiu Lake townsite',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Saskatoon, then drive north. You will need a car inside the park.',
      time: 'Then continue by car',
    },
    {
      icon: '🗺️',
      title: 'Road Trip',
      text: 'See our Saskatoon to Prince Albert National Park route for stops along the way.',
      time: 'Weekend trip',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Reserve campsites and oTENTiks through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Beaver Glen & Red Deer',
      text: 'The main campgrounds near Waskesiu — Beaver Glen (213 sites) and Red Deer (161 full-hookup sites).',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Lakeside Campgrounds',
      text: 'Quieter campgrounds at The Narrows, Namekus Lake, and Sandy Lake.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Waskesiu Lake',
      text: 'Cabins, lodges, and hotels in the park’s townsite.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Waskesiu+Lake', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Waskesiu-Lake--Saskatchewan', level: 'danger' },
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
      title: 'Park Information',
      lines: ['306-663-4522', 'princealbertinfo@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Address',
      text: 'PO Box 100, Waskesiu Lake, SK S0J 2Y0',
    },
    {
      icon: '🚤',
      title: 'Boat Permit',
      text: 'All watercraft need an aquatic invasive species certification permit before entering park waters.',
    },
    {
      icon: '🐻',
      title: 'Bear Country',
      text: 'Lock food away and keep a clean campsite.',
    },
    {
      icon: '🦟',
      title: 'Bugs',
      text: 'Bring repellent for summer hikes near lakes and bogs.',
    },
  ],

  gallery: [],
};

export default PRINCE_ALBERT;
