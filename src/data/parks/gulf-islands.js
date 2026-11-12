// Gulf Islands National Park Reserve — данные страницы /park/gulf-islands
//
// Фото: по просьбе — снимок с карточки (/bc/parks/gulf-islands.png).
// ВНИМАНИЕ: на нём крутые скальные острова-кекуры — для пологих
// песчаниковых Gulf Islands нетипично; место съёмки не подтверждено —
// сказано пользователю. Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Gulf Islands Visitor Guide 2025 (PDF): часть родины
//   береговых салишей (W̱SÁNEĆ и Quw'utsun); дельфины-косатки, морские
//   свиньи, сивучи, тюлени, выдры; орланы, соколы, грифы-индейки;
//   Whale Trail — East Point (Saturna) и Georgina Point (Mayne);
//   Russell Island — Haumea Trail 1.2 км, 30 мин, клам-сады салишей не
//   меньше 1,000 лет, гавайская усадьба Mahoi старше века; Sidney Spit —
//   20 мин на лодке из Sidney, сезонный пешеходный паром, 29 мест, без
//   воды, без костров, SK̲ŦÁMEN Trail 3.5 км; Mount Norman (Pender) —
//   2.4 км в одну сторону, набор 244 м, Advanced; Princess Margaret
//   (Portland) Perimeter 7 км, 3 ч; Tumbo Island TEMOSEN 3.5 км, 90 мин
//   (бывшая звероферма, лес, шахта; пихта Дугласа и гарриев дуб); Winter
//   Cove (Saturna) Xwiwxwyus 1.5 км; Narvaez Bay 1.3 км; D'Arcy Island —
//   в конце 1800-х — начале 1900-х колония для китайских иммигрантов с
//   проказой; кемпинги: SMONEĆTEN 49 (Vancouver Island, 25 мин от
//   Victoria), Prior Centennial 17 (Pender), Sidney Spit 29; сезон
//   15 мая — 30 сентября; бронь reservation.pc.gc.ca / 1-877-737-3783;
//   правила: костры только в кольцах Prior Centennial и SMONEĆTEN; вода
//   только там же; собаки на поводке; дроны запрещены; велосипеды на
//   тропах запрещены (кроме Narvaez Bay); Beaumont и Cabbage Island —
//   закрыты для кемпинга; телефоны 250-654-4000, 1-866-944-1744,
//   экстренный 1-877-852-3100; BC Ferries до Pender, Saturna, Mayne.
// - Parks Canada, главная: Salish Sea; средиземноморский климат; редкие
//   экосистемы; Southern Resident killer whales — под угрозой; Sidney
//   Island закрыт 15 октября 2026 — 14 февраля 2027; экстренно — 911.
// - Wikipedia / Canadian Encyclopedia: создан в 2003 (официально — 2010);
//   36 км² суши (+ ~26 км² воды); 15+ островов (источники расходятся).
// - Transport Canada / DFO: 400 м от всех косаток в южных прибрежных
//   водах BC (Campbell River — Ucluelet); временные зоны-убежища у Pender
//   и Saturna летом/осенью (даты по годам меняются — на странице без дат).

const IMAGE = '/bc/parks/gulf-islands.png';

export const GULF_ISLANDS = {
  slug: 'gulf-islands',
  name: 'Gulf Islands National Park Reserve',
  shortName: 'Gulf Islands',
  province: 'British Columbia',
  tag: 'Salish Sea · Est. 2003',
  heroImage: IMAGE,
  heroCaption: 'Gulf Islands National Park Reserve · BC',
  description:
    'Island-hopping in the Salish Sea. Scattered across more than a dozen islands, this park reserve protects sunny bluffs, arbutus forests, sandy spits, and the waters where killer whales hunt — all part of the Coast Salish homeland, cared for since time immemorial.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '2003' },
    { label: 'Area', value: '36 km²' },
    { label: 'Rating', value: '4.5 ★' },
    { label: 'Islands', value: '15+' },
    { label: 'Camping Season', value: 'May 15 — Sept 30' },
    { label: 'Orcas', value: 'Keep 400 m' },
  ],

  badges: ['Whale Watching', 'Coast Salish Homeland', 'Kayaking'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  spotlight: {
    tag: 'Whales From Shore',
    emoji: '🐋',
    title: 'Watch Killer Whales Without Leaving Land',
    text: 'The waters around the park reserve are home to killer whales, porpoises, sea lions, and seals. Southern Resident killer whales are endangered — boats must stay at least 400 m away. The best way to watch is from shore: the Whale Trail sites at East Point on Saturna Island and Georgina Point on Mayne Island look out over channels where whales often pass.',
    stats: [
      { value: '400 m', label: 'Min. distance from orcas', level: 'danger' },
      { value: '2', label: 'Shore-based Whale Trail sites', level: 'blue' },
      { value: '1,000+', label: 'Years of Coast Salish clam gardens', level: 'gold' },
      { value: '15+', label: 'Islands in the park', level: 'safe' },
    ],
  },

  attractions: [
    {
      name: 'East Point',
      icon: '🐋',
      tag: 'Whale Watching',
      tagLevel: 'blue',
      meta: 'Saturna Island — legendary shore-based whale watching and a community museum in the old fog alarm building.',
    },
    {
      name: 'Sidney Spit',
      icon: '🏖️',
      tag: 'Beach',
      tagLevel: 'gold',
      meta: 'A car-free island 20 minutes by boat from Sidney — sandy spit, Douglas-fir forest, and a 3.5 km loop trail.',
    },
    {
      name: 'Mount Norman',
      icon: '⛰️',
      tag: 'Viewpoint',
      tagLevel: 'safe',
      meta: 'Pender Island’s high point — climb 244 m for sweeping views over the islands.',
    },
    {
      name: 'Russell Island',
      icon: '🌺',
      tag: 'History',
      tagLevel: 'danger',
      meta: 'Boat-access only. Coast Salish clam gardens used for at least 1,000 years, and a Hawaiian homestead more than a century old.',
    },
    {
      name: 'Tumbo Island',
      icon: '🌳',
      tag: 'Recovery',
      tagLevel: 'olive',
      meta: 'Once fur-farmed, logged, and mined — now Douglas-fir and Garry oak forest around a large marsh full of birds.',
    },
    {
      name: 'Princess Margaret (Portland Island)',
      icon: '🛶',
      tag: 'Kayaking',
      tagLevel: 'purple',
      meta: 'A 7 km shoreline loop around the whole island, with three backcountry campgrounds — a paddler’s favourite.',
    },
  ],

  wildlifeWarning:
    'Southern Resident killer whales are endangered: keep boats at least 400 m from all killer whales. Give seals and sea lions space on their haul-outs, keep dogs on a leash, and never fly drones in the park reserve.',
  wildlife: [
    { name: 'Killer Whale', level: 'caution', chance: '★★★☆☆ East Point & channels' },
    { name: 'Harbour Seal', level: 'safe', chance: '★★★★★ Rocks and islets' },
    { name: 'Steller Sea Lion', level: 'safe', chance: '★★★☆☆ Salish Sea' },
    { name: 'Porpoise', level: 'safe', chance: '★★★☆☆ Open water' },
    { name: 'River Otter', level: 'safe', chance: '★★★☆☆ Shorelines' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★★☆ Overhead' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Warm, sunny, and the best time to paddle. Park interpreters run programs in July and August. Campgrounds are open and book up — reserve early.',
      rating: 5,
      note: 'Peak season',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Frontcountry camping ends September 30. Quieter islands and good whale watching from shore. Sidney Island closes in mid-October.',
      rating: 3,
      note: 'Quieter',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Backcountry camping stays open year-round, but expect wind, rain, and rough water for paddlers. Some areas close for the season.',
      rating: 2,
      note: 'Experienced only',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Milder days return to the islands’ Mediterranean-like climate. Frontcountry campgrounds open May 15.',
      rating: 4,
      note: 'Season opens',
    },
  ],

  trailsNote: {
    title: 'Some Places Are Closed',
    text: 'Beaumont Campground and Cabbage Island are closed to camping until further notice, and Sidney Island closes from October 15, 2026, to February 14, 2027. Cycling is not allowed on park trails, except the Narvaez Bay access trail. Check Parks Canada bulletins before you go.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/gulf-islands-national-park-reserve',
  trails: [
    { name: 'Haumea Trail', length: '1.2 km loop', time: '30 min', area: 'Russell Island — boat access', difficulty: 'Easy' },
    { name: 'SK̲ŦÁMEN Trail', length: '3.5 km loop', area: 'Sidney Spit', difficulty: 'Easy' },
    { name: 'TEMOSEN Trail', length: '3.5 km loop', time: '90 min', area: 'Tumbo Island — boat access', difficulty: 'Easy' },
    { name: 'Xwiwxwyus Trail', length: '1.5 km loop', area: 'Winter Cove, Saturna', difficulty: 'Easy' },
    { name: 'Mount Norman', length: '2.4 km one way', gain: '244 m gain', area: 'Pender Island', difficulty: 'Hard' },
    { name: 'Princess Margaret Perimeter', length: '7 km loop', time: '3 hours', area: 'Portland Island — boat access', difficulty: 'Moderate' },
  ],

  gettingThere: [
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'BC Ferries sails to Pender, Saturna, and Mayne islands. A seasonal walk-on passenger ferry from the town of Sidney reaches Sidney Spit.',
      time: 'Sidney Spit: about 20 minutes by boat',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'SMONEĆTEN Campground is on the Saanich Peninsula of Vancouver Island, about 25 minutes from Victoria. On the islands, drive or cycle from the ferry terminal to park areas.',
      time: 'Bring your car on the ferry to the islands',
    },
    {
      icon: '🛶',
      title: 'By Boat Or Kayak',
      text: 'Many park islands — like Russell, Tumbo, D’Arcy, and Portland — can only be reached by private boat, kayak, or water taxi. Mooring buoys and docks are available at several sites.',
      time: 'Strong paddling skills needed',
    },
  ],

  entryPass: {
    title: 'Camping Reservations',
    text: 'Youth enter free. Camping and mooring fees apply. Frontcountry campgrounds and Shingle Bay and Narvaez Bay backcountry sites can be reserved.',
    buyText: 'Reserve online or by phone: 1-877-737-3783.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'SMONEĆTEN Campground',
      text: '49 RV, tent, and walk-in sites among tall cedars on Vancouver Island — 25 minutes from Victoria, with drinking water and fire rings. Look for the signs introducing W̱SÁNEĆ plant relatives.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🌲',
      title: 'Prior Centennial (Pender)',
      text: '17 drive-in sites in a Douglas-fir forest, with drinking water and fire rings.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏖️',
      title: 'Sidney Spit',
      text: '29 tent sites on a car-free island. No water, no garbage service, and no campfires — pack in, pack out.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🛶',
      title: 'Backcountry Campgrounds',
      text: 'Rustic paddle-in or hike-in sites on D’Arcy, Isle-de-Lis, Portland, Pender, Prevost, and Saturna islands. Bring your own drinking water.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Park emergency contact:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['250-654-4000', '1-866-944-1744', 'gulfinfo@pc.gc.ca'],
    },
    {
      icon: '💧',
      title: 'Bring Water',
      text: 'Drinking water is only available at Prior Centennial and SMONEĆTEN campgrounds.',
    },
    {
      icon: '🔥',
      title: 'Fires',
      text: 'Only in the fire rings at Prior Centennial and SMONEĆTEN. No fires at Sidney Spit, backcountry sites, or day-use areas.',
    },
    {
      icon: '🐕',
      title: 'Dogs',
      text: 'Dogs must be on a leash at all times — pick up and pack out their waste.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drone use is prohibited in the park reserve.',
    },
  ],

  gallery: [],
};

export default GULF_ISLANDS;
