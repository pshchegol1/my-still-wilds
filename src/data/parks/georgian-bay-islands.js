// Georgian Bay Islands National Park — данные страницы /park/georgian-bay-islands
//
// Фото: по просьбе — снимок с карточки (/on/parks/georgian-bay-islands.png):
// скалы Канадского щита с соснами у воды — похоже на Георгиан-Бей (место не
// подтверждено). Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Georgian Bay Islands (главная): в крупнейшем в мире
//   пресноводном архипелаге; добраться только на лодке; тысячелетняя
//   история коренных народов, программа Nokomis (Grandmother) in Residence
//   — культура и учения анишинаабе; Beausoleil Island National Historic
//   Site; кемпинг, домики, oTENTik; Cedar Spring Visitor Centre закрыт до
//   мая 2027; телефоны 705-526-8907, 1-888-773-8888,
//   info.gbi-ibg@pc.gc.ca; экстренно 911 или Parks Canada Dispatch
//   1-877-852-3100; адрес 2611 Honey Harbour Road.
// - Parks Canada, Plan your visit / Boat shuttle: лодку нужно бронировать
//   заранее — Landmark Cruises (дневной визит, из Port of Honey Harbour)
//   или лицензированное водное такси (ночёвка); брони домиков и oTENTik
//   включают трансфер от 2611 Honey Harbour Road.
// - Parks Canada, Hiking: северные тропы — Rockview 1.5 км, Dossyonshing
//   2.5 км (сложная), Portage 0.3 км (самое узкое место острова, водно-
//   болотные угодья), Massassauga 2 км (названа в честь гремучника), Fairy
//   2.5 км петля ("must-hike"), Cambrian 2 км; южные — Huron 6.9 км
//   (буково-кленовый лес, друмлин; велосипеды), Georgian 7.1 км (велосипед
//   — только опытным), Christian 1.5 км, Heritage Loop 0.6 км, Lookout
//   1.5 км (платформа над кронами), Treasure 3.8 км (до Tonch Point);
//   север Beausoleil — важное место размножения амфибий, черепах и змей;
//   крепкая обувь, вода, репеллент.
// - Wikipedia: основан в 1929; ~13.5 км² (на карточке 14 — оставлено);
//   63 острова или части островов; часть Georgian Bay Littoral Biosphere
//   Reserve; Канадский щит (скалы, сосны) встречается с лиственными
//   лесами юга; 33 вида рептилий и амфибий, включая пятиполосого сцинка,
//   восточного свиноносого ужа, лисьего полоза и угрожаемого восточного
//   массасагу (гремучник); олени, лось, чёрный медведь, койот, восточный
//   волк, рысь; Beausoleil — крупнейший остров; Cedar Spring — кемпинг.
// - НЕ использовано: цены водного такси, расписание Landmark Cruises,
//   число мест в кемпинге.

const IMAGE = '/on/parks/georgian-bay-islands.png';

export const GEORGIAN_BAY_ISLANDS = {
  slug: 'georgian-bay-islands',
  name: 'Georgian Bay Islands National Park',
  shortName: 'Georgian Bay Islands',
  province: 'Ontario',
  tag: 'Boat Access Only · Est. 1929',
  heroImage: IMAGE,
  heroCaption: 'Georgian Bay Islands National Park · ON',
  description:
    'Rocky shores, pines, and open blue water in the world’s largest freshwater archipelago. You can only arrive by boat — to Beausoleil Island, where Canadian Shield rock meets southern hardwood forest and thousands of years of Anishinaabe history.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1929' },
    { label: 'Area', value: '14 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Islands', value: '63' },
    { label: 'Reptiles & Amphibians', value: '33 Species' },
    { label: 'Access', value: 'Boat Only' },
  ],

  badges: ['Boat Access', 'Biosphere Reserve', 'Anishinaabe Heritage'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'Where Two Worlds Meet',
    emoji: '🐍',
    title: 'Canadian Shield Meets The South',
    text: 'On Beausoleil Island, the bare rock and pines of the Canadian Shield meet the beech and maple forests of the south. This mix of habitats supports 33 species of reptiles and amphibians — including the five-lined skink, the eastern hognose snake, and the threatened eastern massasauga rattlesnake. The park is part of a UNESCO biosphere region along Georgian Bay’s shore.',
    stats: [
      { value: '33', label: 'Reptile & amphibian species', level: 'safe' },
      { value: '63', label: 'Islands and island parts', level: 'blue' },
      { value: '1929', label: 'Park established', level: 'gold' },
      { value: '0', label: 'Roads — boat access only', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Beausoleil Island',
      icon: '🏝️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'The park’s largest island — trails, camping, cabins, and a National Historic Site sharing its long Indigenous history.',
    },
    {
      name: 'Fairy Lake Trail',
      icon: '🌲',
      tag: 'Must-Hike',
      tagLevel: 'safe',
      meta: 'A 2.5 km loop with a quiet lakeside stop — the park calls it a must-hike.',
    },
    {
      name: 'Lookout Trail',
      icon: '🔭',
      tag: 'Viewpoint',
      tagLevel: 'blue',
      meta: 'Views over Georgian Bay and a platform looking out across the forest canopy.',
    },
    {
      name: 'Massassauga Trail',
      icon: '🐍',
      tag: 'Wildlife',
      tagLevel: 'danger',
      meta: 'Rocky shoreline trail named after the local rattlesnake — northern Beausoleil is a key breeding area for snakes, turtles, and amphibians.',
    },
    {
      name: 'Nokomis In Residence',
      icon: '🪶',
      tag: 'Culture',
      tagLevel: 'purple',
      meta: 'Learn Anishinaabe culture, traditions, and teachings from a Nokomis (Grandmother) in Residence.',
    },
    {
      name: 'Portage Trail',
      icon: '🌿',
      tag: 'Wetland',
      tagLevel: 'olive',
      meta: 'A short 0.3 km historic passage across the island’s narrowest point, through a pristine Great Lakes wetland.',
    },
  ],

  wildlifeWarning:
    'The eastern massasauga rattlesnake lives here and is threatened. Watch your step, wear sturdy footwear, stay on trails, and give snakes space — never handle or harm them. If bitten, stay calm and call 911. Black bears also live on Beausoleil Island — store food properly.',
  wildlife: [
    { name: 'Eastern Massasauga', level: 'danger', chance: '★★☆☆☆ Rocky shorelines' },
    { name: 'Five-lined Skink', level: 'safe', chance: '★★☆☆☆ Sunny rocks' },
    { name: 'Turtles', level: 'safe', chance: '★★★☆☆ Wetlands' },
    { name: 'White-tailed Deer', level: 'safe', chance: '★★★☆☆ Inner-island trails' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Forests' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'The best time to visit. Book the boat shuttle or a water taxi in advance, and reserve campsites, cabins, or oTENTiks early.',
      rating: 5,
      note: 'Peak season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Fewer people on the trails. Check whether boat services are still running before you plan a trip.',
      rating: 4,
      note: 'Quieter',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Access is very limited outside the boating season. Not a practical time for most visitors.',
      rating: 1,
      note: 'Limited access',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Amphibians and snakes become active, and the Cedar Spring Visitor Centre is scheduled to reopen in May 2027.',
      rating: 3,
      note: 'Wildlife wakes up',
    },
  ],

  trailsNote: {
    title: 'All Trails Are On Beausoleil Island',
    text: 'Trails range from short walks to over 7 km. Bikes are allowed on the Huron, Georgian (advanced riders only), and Christian trails. Cell service on the island is limited — download offline maps before you go.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/ontario/georgian-bay-islands-national-park',
  trails: [
    { name: 'Fairy Trail', length: '2.5 km loop', area: 'Northern Beausoleil', difficulty: 'Must-Hike', level: 'safe' },
    { name: 'Massassauga Trail', length: '2.0 km', area: 'Northern Beausoleil', difficulty: 'Rocky', level: 'caution' },
    { name: 'Dossyonshing Trail', length: '2.5 km', area: 'Northern Beausoleil', difficulty: 'Challenging', level: 'danger' },
    { name: 'Lookout Trail', length: '1.5 km', area: 'Southern Beausoleil', difficulty: 'Viewpoint', level: 'blue' },
    { name: 'Treasure Trail', length: '3.8 km', area: 'Cedar Spring → Tonch Point', difficulty: 'Challenging', level: 'danger' },
    { name: 'Huron Trail', length: '6.9 km', area: 'Southern Beausoleil · bikes OK', difficulty: 'Long', level: 'gold' },
  ],

  gettingThere: [
    {
      icon: '⛴️',
      title: 'Boat Shuttle',
      text: 'For day visits, reserve a seat with Landmark Cruises from the Port of Honey Harbour. Service does not run every day — check the schedule.',
      time: 'Reservation required',
    },
    {
      icon: '🚤',
      title: 'Water Taxi',
      text: 'For overnight camping, book one of the licensed water taxis in Honey Harbour. Cabin and oTENTik bookings include park transport from 2611 Honey Harbour Road.',
      time: 'Book in advance',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Drive to Honey Harbour on Georgian Bay — the departure point for all boats to Beausoleil Island. The nearest city is Midland.',
      time: 'Then continue by boat',
    },
  ],

  entryPass: {
    title: 'Entry Fees Apply',
    text: 'Regular Parks Canada fees apply. Youth 17 and under enter free. Boat transport is booked separately.',
    buyText: 'Cabin and oTENTik reservations include transport to the island.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Cedar Spring Campground',
      text: 'The main campground on Beausoleil Island, with reserved and wheelchair-accessible sites.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🛖',
      title: 'Cabins & oTENTiks',
      text: 'Roofed stays on the island — transport from Honey Harbour is included in the booking.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Honey Harbour & Midland',
      text: 'Stay on the mainland and visit for the day by boat shuttle.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Honey+Harbour+Ontario', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Parks Canada Dispatch:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['705-526-8907', '1-888-773-8888', 'info.gbi-ibg@pc.gc.ca'],
    },
    {
      icon: '🐍',
      title: 'Rattlesnakes',
      text: 'Eastern massasaugas are threatened and protected. Watch your step and give them space.',
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Limited and unreliable on Beausoleil Island — download offline maps first.',
    },
    {
      icon: '🦟',
      title: 'Pack Smart',
      text: 'Bring sturdy footwear, drinking water, and bug spray.',
    },
    {
      icon: 'ℹ️',
      title: 'Visitor Centre',
      text: 'The Cedar Spring Visitor Centre is closed until May 2027.',
    },
  ],

  gallery: [],
};

export default GEORGIAN_BAY_ISLANDS;
