// Gros Morne National Park — данные страницы /park/gros-morne

export const GROS_MORNE = {
  slug: 'gros-morne',
  name: 'Gros Morne National Park',
  shortName: 'Gros Morne',
  province: 'Newfoundland and Labrador',
  tag: 'UNESCO World Heritage · Est. 1973',
  heroImage: '/parks/gros-morne.jpg',
  description:
    "Where the ocean meets ancient mountains — Gros Morne is a geological wonder that helped reshape our understanding of plate tectonics. Towering fjord-like lakes, dramatic coastal cliffs, and some of the Earth's oldest exposed rock.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1973' },
    { label: 'Area', value: '1,805 km²' },
    { label: 'Rating', value: '4.9 ★' },
    { label: 'Highest Peak', value: 'Gros Morne Mt 806m' },
    { label: 'Coastline', value: '50+ km' },
    { label: 'Rock Age', value: '480M years' },
  ],

  badges: ['UNESCO 1987', 'Plate Tectonics', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  spotlight: {
    tag: 'UNESCO World Heritage',
    emoji: '🌍',
    title: 'UNESCO World Heritage Site — Since 1987',
    text: "Gros Morne was inscribed as a UNESCO World Heritage Site because it provides outstanding examples of Earth's geological processes — specifically the movement of tectonic plates. The park contains some of the best exposed examples of mantle rock in the world, known as the Tablelands, which proved the theory of plate tectonics. Walking the Tablelands is like walking on the ocean floor of an ancient sea.",
    link: { label: 'UNESCO Page', url: 'https://whc.unesco.org/en/list/419' },
  },

  attractions: [
    {
      name: 'Western Brook Pond',
      image: '/nl/parks/gros-morne.png',
      tag: 'Iconic',
      tagLevel: 'blue',
      meta: 'Landlocked fjord · Boat tours · 16 km long · 165m deep',
    },
    {
      name: 'The Tablelands',
      icon: '🌍',
      tag: 'Geological',
      tagLevel: 'gold',
      meta: "Ancient ocean floor · Mars-like landscape · Earth's mantle exposed",
    },
    {
      name: 'Gros Morne Mountain',
      icon: '🏔️',
      tag: 'Summit',
      tagLevel: 'safe',
      meta: '806m summit · Arctic-alpine plateau · 360° views',
    },
    {
      name: 'Lobster Cove Head Lighthouse',
      icon: '🚨',
      tag: 'Coastal',
      tagLevel: 'blue',
      meta: 'Iconic red lighthouse · Rocky Point · Whale watching spot',
    },
    {
      name: 'Bonne Bay',
      icon: '🐋',
      tag: 'Wildlife',
      tagLevel: 'blue',
      meta: 'Marine fjord · Whale sightings · Sea kayaking · Fishing villages',
    },
    {
      name: 'Norris Point & Rocky Harbour',
      icon: '🏘️',
      tag: 'Village',
      tagLevel: 'safe',
      meta: 'Gateway towns · Restaurants · Galleries · Local fishing culture',
    },
  ],

  wildlifeWarning:
    'Black bears are present in Gros Morne. Carry bear spray on all inland trails. Newfoundland has the highest moose density in North America — use extreme caution near roads at dawn and dusk.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Moderate chance' },
    { name: 'Moose', level: 'caution', chance: '★★★★★ Everywhere — be careful' },
    { name: 'Humpback Whale', level: 'safe', chance: '★★★★☆ July to September' },
    { name: 'Harbour Seal', level: 'safe', chance: '★★★★☆ Coastal areas' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★★☆ Near rivers and coast' },
    { name: 'Red Fox', level: 'safe', chance: '★★★★☆ Very common' },
    { name: 'Atlantic Puffin', level: 'safe', chance: '★★★☆☆ Coastal cliffs' },
    { name: 'Caribou', level: 'safe', chance: '★★★☆☆ Highland plateau' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails open, boat tours on Western Brook Pond running daily. Whale watching at its best in July–August. Wildflowers on the highland plateau. Book well in advance.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Stunning fall colours on the Long Range Mountains. Fewer crowds. Cooler hiking temperatures. Some boat tours end in September. One of the most beautiful fall landscapes in Atlantic Canada.',
      rating: 5,
      note: 'Best colours',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Cross-country skiing and snowshoeing. Very few crowds — experience true wilderness solitude. Some services closed. Weather can be severe — Atlantic storms arrive quickly. Check forecasts carefully.',
      rating: 3,
      note: 'For adventurers',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Icebergs drift past the coast in May — a spectacular sight. Seabirds returning. Some trails may still have snow. Whale watching begins in late May. A magical and underrated season to visit.',
      rating: 4,
      note: 'Icebergs!',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/newfoundland-and-labrador/gros-morne-national-park',
  trails: [
    { name: 'Gros Morne Mountain Trail', length: '16 km return', gain: '806 m gain', time: '7–9 hours', area: 'Gros Morne Village', difficulty: 'Hard' },
    { name: 'Tablelands Trail', length: '4 km return', gain: '60 m gain', time: '1–2 hours', area: 'Woody Point', difficulty: 'Easy' },
    { name: 'Western Brook Pond Trail', length: '6 km return', gain: '25 m gain', time: '1.5–2 hours', area: 'Highway 430', difficulty: 'Easy' },
    { name: 'Green Gardens Trail', length: '9 km loop', gain: '310 m gain', time: '3–4 hours', area: 'Trout River', difficulty: 'Moderate' },
    { name: 'Lookout Trail', length: '4.4 km return', gain: '200 m gain', time: '1.5–2.5 hours', area: 'Rocky Harbour', difficulty: 'Easy' },
    { name: 'Long Range Traverse', length: '35 km one way', gain: '1,200 m gain', time: '3–4 days', area: 'Backcountry · Permit required', difficulty: 'Hard' },
  ],
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/newfoundland-and-labrador/gros-morne-national-park?u=m&sh=1Xy3fU',

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Deer Lake Regional Airport (YDF) — the closest airport, just 50 km from the park. Direct flights from Halifax, Montreal, and Toronto. Car rental available at the airport.',
      time: '50 km from Deer Lake Airport',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: "From St. John's take the Trans-Canada Highway (TCH) west to Deer Lake, then Highway 430 north into the park. The drive from St. John's takes about 6 hours. A scenic and essential road trip.",
      time: "6h from St. John's · TCH then Hwy 430",
    },
    {
      icon: '🚗',
      title: 'By Ferry',
      text: 'Marine Atlantic operates ferries from North Sydney, Nova Scotia to Port aux Basques, NL — then drive north on the TCH. The crossing takes 6–7 hours. Book well in advance for summer travel.',
      time: 'Ferry 6–7h · Then 3h drive north',
    },
  ],
  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass needed. Children under 18 are free.',
    buyText: 'Western Brook Pond boat tours must be booked separately through Ocean Watch Tours — very popular, book in advance!',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏨',
      title: 'Rocky Harbour Hotels',
      text: "Rocky Harbour is the main gateway town. Ocean View Hotel and Fisherman's Landing Inn are the most popular. Great base for exploring the northern part of the park.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rocky+Harbour+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Camping in the Park',
      text: 'Berry Hill Campground is the largest and most popular — close to Rocky Harbour. Trout River, Green Point, and Lomond campgrounds also available. Reserve early for summer.',
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/GrosMorne', level: 'safe' },
      ],
    },
    {
      icon: '🏠',
      title: 'Cottages and Cabins',
      text: 'Many charming Newfoundland cottages and cabins available for rent in Rocky Harbour, Norris Point, and Woody Point. Authentic local experience with kitchen facilities.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Rocky-Harbour--Newfoundland', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/newfoundland-and-labrador', level: 'blue' },
      ],
    },
    {
      icon: '🌟',
      title: 'Norris Point B&Bs',
      text: 'The charming village of Norris Point sits right on Bonne Bay. Several excellent B&Bs with stunning views. A quieter and more intimate alternative to Rocky Harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norris+Point+Newfoundland', level: 'blue' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Park Wardens · 709-458-2417', '24/7'] },
    { icon: '🐻', title: 'Bear Safety', text: 'Carry bear spray on inland trails. Store food properly at campsites.' },
    { icon: '🎫', title: 'Parks Pass', text: 'Discovery Pass or day pass required. Buy online at reservation.pc.gc.ca.' },
    { icon: '🚤', title: 'Boat Tours', text: 'Western Brook Pond tours book out fast in summer — reserve well ahead.' },
    { icon: '🌦️', title: 'Weather', text: 'Atlantic storms arrive quickly — check forecasts daily, especially on the coast.' },
    { icon: '⛽', title: 'Fuel Up', text: 'Gas stations are sparse — fill up in Deer Lake or Rocky Harbour before exploring.' },
    { icon: '📶', title: 'Cell Service', text: 'Patchy throughout the park. Download offline maps before your trip.' },
    { icon: '🧊', title: 'Icebergs', text: 'Best viewed in May from coastal viewpoints near Rocky Harbour and St. Anthony.' },
  ],

  gallery: [
    '/parks/gros-morne.jpg',
    '/nl/parks/gros-morne.png',
  ],
};

export default GROS_MORNE;
