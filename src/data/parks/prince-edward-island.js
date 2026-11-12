// Prince Edward Island National Park — данные страницы
// /park/prince-edward-island
//
// Фото: по просьбе — снимок с карточки (/pe/parks/pei-national-park.png):
// бело-красный маяк в дюнах; на табличке читается «Covehead Lighthouse» —
// маяк Covehead в самом парке (район Brackley-Dalvay). Галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, PEI National Park (главная): песчаные пляжи, красные
//   утёсы, дюны, береговая велодорожка, леса, бухты; доступен круглый год,
//   услуги с мая по октябрь; Cavendish, Greenwich, Ross Lane Beach;
//   кемпинг Cavendish; рыжие лисицы, водоплавающие, славки, цапли;
//   соглашение Toquktmekl (co-management) с Mi'kmaq Epekwitnewaq Kapmntemuow; работы осенью
//   2026 (Ross Lane Beach, дорога кемпинга Cavendish, Greenwich);
//   902-672-6350; pnipe-peinp@pc.gc.ca; 2 Palmers Lane, Charlottetown PE
//   C1A 5V8; рядом — Green Gables Heritage Place и Dalvay-by-the-Sea
//   (национальные исторические места).
// - Parks Canada, Trails (через поиск): Greenwich Dunes 4.6 км т/о/петля;
//   Cavendish Dunelands 2.4 км в одну сторону, лёгкая, плавучий настил —
//   велосипед вести рядом; Homestead Trail — петли MacNeill 10 км и Simpson
//   6 км; Gulf Shore Way East 12.2 км, West 8.5 км в одну сторону.
// - Tourism PEI: кемпинг Stanhope в районе Brackley-Dalvay, рядом Gulf
//   Shore Way.
// - Wikipedia: основан в 1937; 27 км² (на карточке PEI было 226 → 27);
//   ~60 км вдоль северного берега, у залива Св. Лаврентия; пляжи, дюны,
//   пресноводные болота, солёные марши; гнездовья исчезающего зуйка
//   (piping plover), Important Bird Area; дюны Greenwich переданы парку в
//   1998; сильная эрозия берега от зимних штормов; койоты, лисы, еноты,
//   бобры, норки.
// - НЕ использовано: расстояние до Charlottetown, кол-во мест в кемпингах,
//   описание опасных течений (Parks Canada лишь «быстро меняющийся океан»).

const IMAGE = '/pe/parks/pei-national-park.png';

export const PRINCE_EDWARD_ISLAND = {
  slug: 'prince-edward-island',
  name: 'Prince Edward Island National Park',
  shortName: 'PEI National Park',
  province: 'Prince Edward Island',
  tag: 'Beaches & Dunes · Est. 1937',
  heroImage: IMAGE,
  heroCaption: 'Covehead Lighthouse · PEI National Park',
  description:
    'About 60 km of PEI’s north shore — broad sandy beaches, red cliffs, wind-sculpted dunes, and a seaside cycling path. Swim in the Gulf of St. Lawrence, explore the Greenwich dunes, and visit the farm that inspired Anne of Green Gables nearby.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1937' },
    { label: 'Area', value: '27 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Coastline', value: '~60 km' },
    { label: 'Visitor Services', value: 'May — Oct' },
    { label: 'Open', value: 'Year-Round' },
  ],

  badges: ['Beaches', 'Red Cliffs', 'Cycling'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 1 },
  ],

  spotlight: {
    tag: 'Shifting Shores',
    emoji: '🏖️',
    title: 'A Coast Made Of Sand',
    text: 'The park is a narrow ribbon along PEI’s north shore — in places just a few hundred metres wide. Its beaches, dunes, saltmarshes, and wetlands are constantly reshaped by wind, waves, and winter storms, which erode the coast every year. The dunes shelter nesting piping plovers, an endangered shorebird, and the Greenwich dune system — added to the park in 1998 — is one of its wildest corners.',
    stats: [
      { value: '~60 km', label: 'Of north shore', level: 'blue' },
      { value: '1937', label: 'Park created', level: 'gold' },
      { value: '1998', label: 'Greenwich dunes added', level: 'olive' },
      { value: '20+ km', label: 'Gulf Shore Way bike path', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'Greenwich Dunes',
      icon: '🏜️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'A 4.6 km trail to one of the park’s most extensive sand dune systems, added to the park in 1998.',
    },
    {
      name: 'Cavendish Beach',
      icon: '🏖️',
      tag: 'Beaches',
      tagLevel: 'safe',
      meta: 'Broad sand beaches and red cliffs on the Gulf of St. Lawrence, with the park’s main campground nearby.',
    },
    {
      name: 'Gulf Shore Way',
      icon: '🚲',
      tag: 'Cycling',
      tagLevel: 'blue',
      meta: 'A seaside path for cycling and walking — 12.2 km in the east section and 8.5 km in the west.',
    },
    {
      name: 'Covehead Lighthouse',
      icon: '🗼',
      tag: 'Lighthouse',
      tagLevel: 'danger',
      meta: 'A small white-and-red lighthouse in the dunes of the Brackley-Dalvay area.',
    },
    {
      name: 'Green Gables Heritage Place',
      icon: '📚',
      tag: 'Nearby History',
      tagLevel: 'purple',
      meta: 'The 19th-century farm in Cavendish that inspired L.M. Montgomery’s Anne of Green Gables — a national historic site next to the park.',
    },
    {
      name: 'Dalvay-by-the-Sea',
      icon: '🏰',
      tag: 'Nearby History',
      tagLevel: 'olive',
      meta: 'A Victorian-era mansion, now an inn and a national historic site, near the Brackley-Dalvay beaches.',
    },
  ],

  wildlifeWarning:
    'Red foxes live in the park — never feed them or leave food out; wildlife that gets used to human food becomes a danger to itself and to people. Endangered piping plovers nest on the beaches: respect closed areas and keep dogs on a leash.',
  wildlife: [
    { name: 'Red Fox', level: 'caution', chance: '★★★★☆ Common' },
    { name: 'Great Blue Heron', level: 'safe', chance: '★★★☆☆ Coastal bays' },
    { name: 'Piping Plover', level: 'safe', chance: '★☆☆☆☆ Endangered' },
    { name: 'Waterfowl', level: 'safe', chance: '★★★☆☆ Wetlands' },
    { name: 'Beaver', level: 'safe', chance: '★★☆☆☆ Ponds' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Beach season — swimming, sandcastles, cycling, and camping. Reserve Cavendish and Stanhope campsites early.',
      rating: 5,
      note: 'Beach season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Quiet beaches and great cycling weather. In fall 2026, roadwork affects parts of Cavendish, Greenwich, and Ross Lane Beach.',
      rating: 4,
      note: 'Quiet season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May',
      level: 'olive',
      text: 'Visitor services begin in May. Cool weather and empty beaches.',
      rating: 3,
      note: 'Services open',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'The park is accessible year-round, but visitor services are closed. Winter storms reshape the coast.',
      rating: 1,
      note: 'No services',
    },
  ],

  trailsNote: {
    title: 'Water Safety On The Gulf',
    text: 'The ocean here changes quickly. Check conditions before swimming, stay on boardwalks and marked trails to protect the dunes, and walk your bike across the floating boardwalk at Cavendish.',
  },

  trailsUrl: 'https://www.parks.canada.ca/pn-np/pe/pei-ipe/activ/sentiers-trails',
  trailsLinkLabel: 'All Trails On Parks Canada',
  trails: [
    { name: 'Cavendish Dunelands', length: '2.4 km one way', area: 'Cavendish', difficulty: 'Easy' },
    { name: 'Greenwich Dunes', length: '4.6 km return/loop', area: 'Greenwich', difficulty: 'Dune walk', level: 'safe' },
    { name: 'Homestead – Simpson Loop', length: '6 km', area: 'Cavendish', difficulty: 'Walk or bike', level: 'blue' },
    { name: 'Homestead – MacNeill Loop', length: '10 km', area: 'Cavendish', difficulty: 'Walk or bike', level: 'blue' },
    { name: 'Gulf Shore Way East', length: '12.2 km one way', area: 'Brackley-Dalvay', difficulty: 'Bike path', level: 'blue' },
  ],

  gettingThere: [
    {
      icon: '🌉',
      title: 'By Car',
      text: 'Cross the Confederation Bridge from New Brunswick or take the ferry from Nova Scotia, then drive to the north shore.',
      time: 'Cavendish, Brackley-Dalvay, Greenwich',
    },
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Charlottetown, then drive north to the park’s beaches.',
      time: 'Then continue by car',
    },
    {
      icon: '🚲',
      title: 'By Bike',
      text: 'The Gulf Shore Way links beaches and campgrounds along the coast.',
      time: 'Bring your bike',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily visitor fees apply in season, or use a Parks Canada Discovery Pass. Youth 17 and under enter free.',
    buyText: 'Reserve campsites at Cavendish and Stanhope through Parks Canada reservations.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Cavendish Campground',
      text: 'The park’s campground in the Cavendish area, near the beach.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '⛺',
      title: 'Stanhope Campground',
      text: 'A full-service campground in the Brackley-Dalvay area, with easy access to the Gulf Shore Way.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Cavendish & Charlottetown',
      text: 'Cottages, inns, and hotels near the park and in PEI’s capital.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cavendish+PEI', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Cavendish--Prince-Edward-Island', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park office:', '902-672-6350'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['902-672-6350', 'pnipe-peinp@pc.gc.ca'],
    },
    {
      icon: '📍',
      title: 'Mailing Address',
      text: '2 Palmers Lane, Charlottetown, PE C1A 5V8',
    },
    {
      icon: '🦊',
      title: 'Don’t Feed Foxes',
      text: 'Feeding foxes harms them. Keep food packed away at beaches and campsites.',
    },
    {
      icon: '🚧',
      title: 'Fall 2026 Work',
      text: 'Ross Lane Beach coastal access is closed until spring 2027; roadwork at Cavendish and Greenwich until about December 2026.',
    },
    {
      icon: '🪶',
      title: 'Mi’kmaq Partnership',
      text: 'Parks Canada and the Mi’kmaq of Epekwitk (PEI) work together under a co-management agreement.',
    },
  ],

  gallery: [],
};

export default PRINCE_EDWARD_ISLAND;
