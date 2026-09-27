// Kluane National Park — данные страницы /park/kluane

export const KLUANE = {
  slug: 'kluane',
  name: 'Kluane National Park',
  shortName: 'Kluane',
  province: 'Yukon',
  tag: 'UNESCO World Heritage · Est. 1972',
  heroImage: '/yt/parks/kluane.png',
  description:
    "Home to Canada's highest peaks, the world's largest non-polar icefields, and some of the most intact wilderness on Earth. Kluane is raw, remote, and humbling — a place where glaciers the size of small countries flow between mountains that touch the sky.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'Mt Logan', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1972' },
    { label: 'Area', value: '22,013 km²' },
    { label: 'UNESCO', value: '★ 1979' },
    { label: 'Highest Peak', value: 'Mt Logan 5,959m' },
    { label: 'Icefield Size', value: '~8,000 km²' },
    { label: 'From Whitehorse', value: '2h Drive' },
  ],

  badges: ['Largest Icefields', 'Grizzly Bears', 'Aurora Viewing'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌌', label: 'Winter', level: 'blue', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'UNESCO World Heritage',
    emoji: '🧊',
    title: "UNESCO World Heritage Site · World's Largest Non-Polar Icefields",
    text: 'Kluane contains the largest non-polar icefields on Earth — over 80% of the park is covered in glaciers and permanent ice. The St. Elias Mountains here are the tallest coastal range in the world. Mt. Logan at 5,959m is Canada’s highest peak and the second highest in North America after Denali. The park forms part of the largest internationally protected wilderness area on the planet, shared with Wrangell-St. Elias (Alaska), Glacier Bay (Alaska), and Tatshenshini-Alsek (BC) — together a UNESCO site of 97,000 km².',
    stats: [
      { value: '5,959m', label: "Mt. Logan — Canada's highest", level: 'blue' },
      { value: '~8,000 km²', label: 'Icefield area', level: 'safe' },
      { value: '97,000 km²', label: 'Total UNESCO complex', level: 'gold' },
      { value: '1979', label: 'UNESCO designated', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Kaskawulsh Glacier Viewpoint',
      icon: '🏔️',
      tag: 'Iconic',
      tagLevel: 'blue',
      meta: "One of Kluane's most accessible glaciers — visible from the Slims River West trail. Massive, ancient, and otherworldly.",
    },
    {
      name: 'Northern Lights',
      icon: '🌌',
      tag: 'Aurora',
      tagLevel: 'purple',
      meta: 'Among the best aurora viewing in Canada — zero light pollution, clear skies, Aug–April. Whitehorse is the base.',
    },
    {
      name: 'Flightseeing over the Icefields',
      icon: '✈️',
      tag: 'Adventure',
      tagLevel: 'safe',
      meta: 'Fly over the St. Elias icefields and Mt. Logan — a once-in-a-lifetime perspective on the largest non-polar ice mass on Earth.',
    },
    {
      name: 'Kluane Lake',
      icon: '🎣',
      tag: 'Wilderness',
      tagLevel: 'safe',
      meta: "Yukon's largest lake — 408 km², turquoise glacial water, world-class lake trout fishing, and stunning mountain reflections.",
    },
    {
      name: 'Grizzly Bear Viewing',
      icon: '🐻',
      tag: 'Wildlife',
      tagLevel: 'danger',
      meta: "One of North America's highest grizzly densities — dawn and dusk sightings are common along the Alaska Highway corridor.",
    },
    {
      name: 'Alsek River Rafting',
      icon: '🛶',
      tag: 'Adventure',
      tagLevel: 'blue',
      meta: "One of the world's great wilderness river journeys — 10–14 days through glaciers, grizzly country, and mountain wilderness to the Pacific.",
    },
  ],

  wildlifeWarning:
    'Kluane has one of the highest densities of Grizzly Bears in North America. Carry bear spray at all times. Make noise on trails. Bear canisters required for overnight trips. Never hike alone in this park — groups of 4+ strongly recommended. All food must be stored in approved containers.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★★★ Very high density' },
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Lower elevations' },
    { name: 'Mountain Lion', level: 'danger', chance: '★★☆☆☆ Rarely seen' },
    { name: 'Grey Wolf', level: 'caution', chance: '★★★☆☆ Pack territories' },
    { name: "Caribou (Dall's)", level: 'safe', chance: '★★★★☆ Alpine meadows' },
    { name: "Dall's Sheep", level: 'safe', chance: '★★★★★ Cliff faces' },
    { name: 'Moose', level: 'caution', chance: '★★★★☆ Valleys & lakes' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★★★ Everywhere' },
    { name: 'Arctic Fox', level: 'safe', chance: '★★★☆☆ Higher elevations' },
    { name: 'Beaver', level: 'safe', chance: '★★★★☆ Rivers & ponds' },
    { name: 'Great Grey Owl', level: 'safe', chance: '★★★☆☆ Forest edges' },
    { name: 'Golden Eagle', level: 'safe', chance: '★★★★☆ Alpine soaring' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Only window for most hiking trails — snowpack melts by late June. Up to 20 hours of daylight in June. Grizzlies very active. Flightseeing season. Alsek River rafting. Wildflowers in July. Essential to book everything months ahead.',
      rating: 5,
      note: 'Only hiking window',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Spectacular fall colours across the Yukon — golden aspens and crimson bearberry. Grizzlies hyperphagia (eating constantly before hibernation). First Northern Lights of the season appear in August–September. Trails closing by late September.',
      rating: 4,
      note: 'First aurora!',
    },
    {
      icon: '🌌',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Peak Northern Lights season — the dark skies of Kluane and Whitehorse are among the best in Canada. Cross-country skiing, snowshoeing, and dog sledding near Haines Junction. Extreme cold — temperatures can reach -40°C.',
      rating: 4,
      note: 'Best Aurora!',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow still deep in the mountains — trails inaccessible. Grizzlies emerging from dens in late April. Migratory birds arriving. Good for wildlife viewing by vehicle. Skiing possible through May at higher elevations.',
      rating: 3,
      note: 'Bears emerging',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/yukon-territory/kluane-national-park-and-reserve',
  trailsNote: {
    title: 'Wilderness Alert',
    text: 'Most trails in Kluane are unmaintained and unmarked beyond the first few kilometres. Backcountry hikers must register at the visitor centre, carry a satellite communicator, and have strong navigation skills. Bear spray mandatory. Groups of 4+ strongly recommended for all overnight trips.',
  },
  trails: [
    { name: 'Slims River West Trail (Kaskawulsh Glacier)', length: '35 km return', gain: '450 m gain', time: '2–3 days', area: 'Sheep Mountain · Most iconic', difficulty: 'Hard' },
    { name: "King's Throne Trail", length: '18 km return', gain: '1,000 m gain', time: '7–9 hours', area: 'Kathleen Lake · Alpine cirque', difficulty: 'Hard' },
    { name: 'Auriol Trail', length: '15 km loop', gain: '530 m gain', time: '5–7 hours', area: 'Haines Junction · Day hike', difficulty: 'Moderate' },
    { name: 'Rock Glacier Trail', length: '4.5 km return', gain: '200 m gain', time: '2 hours', area: 'Haines Junction area', difficulty: 'Easy' },
    { name: 'Sheep Creek Trail', length: '20 km return', gain: '700 m gain', time: '2 days', area: "Sheep Mountain · Dall's sheep", difficulty: 'Hard' },
    { name: 'Kathleen Lake Shoreline', length: '3 km loop', gain: 'flat', time: '1 hour', area: 'Kathleen Lake · Easy access', difficulty: 'Easy' },
  ],
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/yukon-territory/kluane-national-park-and-reserve?u=m&sh=1Xy3fU',

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — Alaska Highway',
      text: 'Drive the legendary Alaska Highway (Hwy 1) from Whitehorse west to Haines Junction — 2 hours. The park entrance and visitor centre are in Haines Junction. The drive itself is spectacular. A car is essential — no public transit to the park.',
      time: '2h from Whitehorse · 2.5h from Skagway Alaska',
    },
    {
      icon: '✈️',
      title: 'Fly to Whitehorse',
      text: 'Whitehorse Airport (YXY) has daily flights from Vancouver (2.5h) and Calgary (2h) with Air Canada and WestJet. From Whitehorse, rent a car and drive 2 hours west to Haines Junction and Kluane.',
      time: '2.5h from Vancouver YVR · 2h from Calgary YYC',
    },
    {
      icon: '🚌',
      title: 'By Bus — Whitehorse to Haines Junction',
      text: 'Seasonal shuttle services connect Whitehorse to Haines Junction in summer. Limited schedule — a rental car gives far more flexibility for exploring the park and trailheads.',
      time: 'Whitehorse to Haines Junction ~2h',
    },
  ],
  entryPass: {
    title: 'Parks Canada Discovery Pass',
    text: 'A day pass or annual Discovery Pass covers entry to Kluane year-round.',
    buyText: 'Register at the Haines Junction visitor centre before any backcountry trip.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏨',
      title: 'Haines Junction Hotels',
      text: 'The gateway town to Kluane — Raven Hotel and Alcan Motor Inn are the main options. Basic but comfortable, with the visitor centre right in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Haines+Junction+Yukon', level: 'blue' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Kathleen Lake Campground',
      text: "Parks Canada's only front-country campground — right on the turquoise lake with mountain views. First-come, first-served in shoulder season.",
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/Kluane', level: 'safe' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Whitehorse',
      text: '2 hours from the park with the widest range of hotels, restaurants, and flights. A practical base for exploring the Yukon beyond Kluane too.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whitehorse+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Park Wardens · 867-634-7207', '24/7'] },
    { icon: '🐻', title: 'Bear Safety', text: 'Bear spray mandatory, canisters required overnight. Hike in groups of 4+.' },
    { icon: '🎫', title: 'Register First', text: 'All backcountry trips must register at the Haines Junction visitor centre.' },
    { icon: '🛰️', title: 'Satellite Comms', text: 'No cell service in the park — carry a satellite communicator for emergencies.' },
    { icon: '🥶', title: 'Extreme Cold', text: 'Winter temperatures can reach -40°C. Dress for serious cold if visiting Nov–Mar.' },
    { icon: '⛽', title: 'Fuel Up', text: 'Fill up in Whitehorse or Haines Junction — services are very sparse beyond that.' },
    { icon: '🌌', title: 'Aurora Season', text: 'Best viewed Aug–Apr, away from Haines Junction lights, on clear cold nights.' },
    { icon: '🗺️', title: 'Navigation', text: 'Most trails unmarked past the first few km — strong map and compass skills required.' },
  ],

  gallery: [
    '/yt/parks/kluane.png',
    '/ab/parks/Kluane National Park.png',
    '/mb/parks/Kluane National Park.png',
  ],
};

export default KLUANE;
