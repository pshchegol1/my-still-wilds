// Vancouver → Southern Gulf Islands — данные страницы
// /route/vancouver-gulf-islands
// Четвёртый маршрут региона "British Columbia & the Coast" — короткий
// паромный уход от города, в отличие от большого Vancouver-Whistler-Island.

export const VANCOUVER_GULF_ISLANDS = {
  slug: 'vancouver-gulf-islands',
  name: 'Vancouver to the Gulf Islands',
  region: 'British Columbia · Salish Sea',
  tag: 'Ferry Day Trip · Coast Salish Territory',
  accentLevel: 'blue',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: '/bc/parks/gulf-islands.png',
  description:
    "Not a road trip so much as a short drive and a long ferry ride — Tsawwassen to the Southern Gulf Islands, where Salt Spring's Saturday Market and quiet coastal roads replace highway miles.",

  badges: ['40 KM DRIVE', '~1H35M FERRY', 'SALT SPRING ISLAND', 'BOOK AHEAD'],

  headlineStats: [
    { value: '40', unit: 'km', label: 'Drive to Tsawwassen Terminal' },
    { value: '~1h35', unit: 'm', label: 'Ferry Crossing' },
    { value: '5', unit: '', label: 'Southern Gulf Islands Served' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '~40 km drive from downtown Vancouver to Tsawwassen Ferry Terminal' },
    { icon: 'time', label: 'Drive + Ferry Time', value: '~40 min drive · ~1h35m BC Ferries crossing to Salt Spring Island (Long Harbour)' },
    { icon: 'ferry', label: 'Ferry Reservations', value: 'Not always available on this route — arrive early (60–90 min) on summer weekends regardless' },
    { icon: 'cell', label: 'Cell Service', value: 'Good near village centres (Ganges) · patchy in rural and forested parts of the islands' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 17 to Tsawwassen + BC Ferries · island roads are narrow, winding, and mostly unlit at night' },
    { icon: 'winter', label: 'Winter Driving', value: 'Sailing frequency drops noticeably Oct–Apr, and weather cancellations happen — always have a backup plan for the return trip' },
  ],

  seasonalNotes: [
    {
      icon: '🧀',
      title: 'Saturday Market Is Seasonal',
      text: "Salt Spring's famous Saturday Market in Ganges runs roughly April through October only — showing up in January expecting it is a common tourist mistake.",
    },
    {
      icon: '⛴️',
      title: 'Inter-Island Sailings Are Sparse',
      text: "If you plan to hop between Salt Spring, Galiano, Mayne, Pender, and Saturna in one trip, check schedules carefully — some inter-island connections run only a couple of times a day.",
    },
    {
      icon: '💸',
      title: 'Island Pricing',
      text: 'Accommodation and dining on Salt Spring run noticeably higher than mainland equivalents, especially July–August — book ahead rather than arriving and hoping.',
    },
  ],

  wildlifeSafety: {
    title: 'The Real Risk Here Is the Ferry Schedule',
    text: "This isn't bear country in the way the Rockies are, but missing your return sailing with no reservation can mean hours of waiting at the terminal — plan around the schedule, not against it.",
    rules: [
      'Check the current BC Ferries schedule before you leave — Gulf Islands routes change seasonally more than the major routes do',
      'Resident orca pods pass near the islands May–September — if you’re on deck, scan the water, but never approach by boat closer than regulations allow',
      'Deer are common and largely unafraid of cars on island roads — slow down, especially at dawn and dusk',
      'Island roads are narrow with minimal shoulder — cyclists are common in summer, give them real space',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Coast Salish Territory, Long Before the Ferries',
    text: 'The Southern Gulf Islands sit within the traditional territories of multiple Coast Salish peoples, including the W̱SÁNEĆ (Saanich) Nations and Hulʼqumiʼnum-speaking nations such as Cowichan Tribes and Penelakut Tribe, who have documented village, fishing, and harvesting sites across these islands going back thousands of years — well before they carried their current English names.',
    nations: [
      'W̱SÁNEĆ (Saanich) Nations',
      'Cowichan Tribes',
      'Penelakut Tribe',
    ],
    note: "We don't have a single, verified Indigenous-owned cultural centre on Salt Spring to point you to the way we can for Whistler — rather than invent one, we're flagging that gap honestly. If that changes, this section will be updated.",
  },

  stops: [
    {
      name: 'Vancouver',
      km: 0,
      image: '/Cities/Vancouver/Stanley Park.jpg',
      text: 'Starting point — allow more time than Google Maps suggests for the drive to Tsawwassen during Friday afternoon traffic.',
    },
    {
      name: 'Tsawwassen Ferry Terminal',
      km: 40,
      icon: '⛴️',
      text: 'Check in at least 60 minutes before sailing on summer weekends — this terminal serves both the Gulf Islands and Victoria, and the wrong line costs you the sailing.',
    },
    {
      name: 'Long Harbour, Salt Spring Island',
      km: 40,
      icon: '🚢',
      text: 'The ferry dock on Salt Spring — about 10 minutes’ drive from Ganges, the island’s main village.',
    },
    {
      name: 'Ganges Village & Saturday Market',
      km: 50,
      icon: '🧺',
      text: 'Artist studios, the Salt Spring Island Cheese Company, and the open-air market (seasonal — see the note above) all within walking distance of each other.',
    },
    {
      name: 'Mount Maxwell Viewpoint',
      km: 60,
      image: '/bc/parks/gulf-islands.png',
      text: 'A rough but driveable road to a cliff-edge viewpoint over the other Gulf Islands and the Salish Sea — the payoff shot of the trip.',
    },
  ],
};

export default VANCOUVER_GULF_ISLANDS;
