// Yoho National Park — данные страницы /park/yoho

const BASE = "/parks/Yoho National Park";

export const YOHO = {
  slug: 'yoho',
  name: 'Yoho National Park',
  province: 'British Columbia',
  tag: 'UNESCO World Heritage · Est. 1886',
  heroImage: `${BASE}/Emerald Lake.jpg`,
  heroCaption: 'Emerald Lake · Yoho NP · BC',
  description:
    '"Yoho" is a Cree word meaning awe and wonder — and the park lives up to its name. Home to the famous Emerald Lake, the towering Takakkaw Falls, and the Burgess Shale fossil beds — one of the most important paleontological sites on Earth.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1886' },
    { label: 'Area', value: '1,313 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Highest Peak', value: 'Mt Goodsir 3,567m' },
    { label: 'Takakkaw Falls', value: '384m high' },
    { label: 'Fossils', value: '505M years old' },
  ],

  badges: ['UNESCO', 'Burgess Shale', 'Summer Only'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 2 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  attractions: [
    {
      name: 'Emerald Lake',
      image: `${BASE}/Emerald Lake.jpg`,
      tag: '🏆 Iconic',
      tagLevel: 'blue',
      meta: 'Vivid turquoise lake · Canoe rentals · Lodge · Year round beauty',
    },
    {
      name: 'Takakkaw Falls',
      image: `${BASE}/Takakkaw Falls.jpg`,
      tag: '💧 Waterfall',
      tagLevel: 'blue',
      meta: '384m — 3rd highest in Canada · Best in summer · Drive-up access',
    },
    {
      name: 'Burgess Shale',
      image: `${BASE}/Burgess Shale.jpeg`,
      tag: '🦕 Fossils',
      tagLevel: 'gold',
      meta: '505 million year old fossils · UNESCO · Guided hikes only',
    },
    {
      name: "Lake O'Hara",
      image: `${BASE}/Lake O'Hara.jpg`,
      tag: '🏔️ Alpine',
      tagLevel: 'safe',
      meta: 'Legendary alpine area · Restricted access by bus only · Book months ahead',
    },
    {
      name: 'Natural Bridge',
      image: `${BASE}/Natural Bridge.jpg`,
      tag: '🌊 Canyon',
      tagLevel: 'blue',
      meta: 'Rock arch carved by the Kicking Horse River · 5 min from highway',
    },
    {
      name: 'Spiral Tunnels Viewpoint',
      image: `${BASE}/Spiral Tunnels Viewpoint.jpeg`,
      tag: '🚂 Heritage',
      tagLevel: 'safe',
      meta: 'Historic railway engineering · Watch trains spiral through the mountain',
    },
  ],

  wildlifeWarning:
    'Always carry bear spray in Yoho. Grizzly and black bears are active throughout the park, especially on the Yoho Valley trails. Keep 100m from bears, 30m from all other wildlife.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★☆☆ Moderate — valley trails' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Common — spring' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★☆ Very common' },
    { name: 'Moose', level: 'caution', chance: '★★★☆☆ Wetland areas' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ High rocky terrain' },
    { name: 'Bighorn Sheep', level: 'safe', chance: '★★★☆☆ Road sides' },
    { name: 'River Otter', level: 'safe', chance: '★★☆☆☆ Emerald Lake area' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ River corridors' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: "Peak season. Takakkaw Falls at full force from glacier melt. All trails open. Lake O'Hara bus running. Emerald Lake canoe rentals available. Book months ahead for Lake O'Hara.",
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: "Golden larches at Lake O'Hara in late September are breathtaking. Fewer crowds after Labour Day. Elk rut in September. Takakkaw road closes in October — check before visiting.",
      rating: 5,
      note: 'Larches!',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: "Most roads and facilities closed including Takakkaw and Lake O'Hara access. Emerald Lake area accessible and beautiful in snow. Snowshoeing around the lake is magical.",
      rating: 2,
      note: 'Limited access',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow still on most trails. Bears emerging from hibernation. Some lower valley trails accessible. Takakkaw road typically opens in late May or June depending on snowpack.',
      rating: 3,
      note: 'Limited trails',
    },
  ],

  trailsNote: {
    title: "Lake O'Hara — Book 3 Months in Advance",
    text: "Access to Lake O'Hara is restricted to 42 people per day by bus to protect this fragile alpine ecosystem. Reservations open on April 1st for the entire summer season and sell out within minutes. Book through Parks Canada website the moment reservations open.",
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/yoho-national-park',
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/british-columbia/yoho-national-park?u=m&sh=1Xy3fU',
  trails: [
    { name: 'Emerald Lake Loop', length: '5.1 km loop', gain: '30 m gain', time: '1–2 hours', area: 'Emerald Lake', difficulty: 'Easy' },
    { name: 'Iceline Trail', length: '20 km loop', gain: '700 m gain', time: '6–8 hours', area: 'Yoho Valley', difficulty: 'Hard' },
    { name: 'Takakkaw Falls Trail', length: '1 km return', gain: '50 m gain', time: '30 min', area: 'Yoho Valley Road', difficulty: 'Easy' },
    { name: 'Yoho Lake and Highline Trail', length: '12 km loop', gain: '520 m gain', time: '4–5 hours', area: 'Yoho Valley', difficulty: 'Moderate' },
    { name: "Lake O'Hara Alpine Circuit", length: '12.5 km loop', gain: '600 m gain', time: '5–7 hours', area: "Lake O'Hara — Bus Required", difficulty: 'Hard' },
    { name: 'Burgess Shale Fossil Beds', length: '20 km return', gain: '760 m gain', time: 'Full day · Guided only', area: 'Field, BC', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Calgary International Airport (YYC) — the closest major airport. From Calgary drive west on the Trans-Canada Highway through Banff and into Yoho. The park entrance is at Field, BC.',
      time: '3 hours from Calgary Airport',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: "Take the Trans-Canada Highway (Hwy 1) west from Banff — Yoho begins just after the BC border. Field is the park's main community. Yoho Valley Road (to Takakkaw Falls) is steep and winding.",
      time: '27 km west of Lake Louise on Hwy 1',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: "No direct public bus service to Yoho. Rent a car from Calgary or Banff. The Lake O'Hara area has a restricted Parks Canada bus — reservation required separately from park entry.",
      time: 'Car essential — no transit service',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Parks Canada Discovery Pass or daily pass. Children under 18 always free.',
    buyText: "Lake O'Hara bus needs a separate reservation — opens April 1st and books out in minutes.",
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏰',
      title: 'Emerald Lake Lodge',
      text: 'The iconic log cabin lodge right on the shores of Emerald Lake. Stunning views, fireplace rooms, fine dining, and complete wilderness immersion. One of the most romantic hotels in Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/hotel/ca/emerald-lake-lodge.html', level: 'blue' },
        { label: 'Official Site', url: 'https://www.crmr.com/emerald', level: 'gold' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Camping in Yoho',
      text: "Kicking Horse Campground is the largest — near Field. Hoodoo Creek Campground has beautiful views. Lake O'Hara Campground requires the bus reservation plus a separate camping permit.",
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/Yoho', level: 'safe' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Field, BC',
      text: 'The small community of Field inside the park has a few B&Bs, the Truffle Pigs Bistro, and the iconic Field station. A charming, authentic mountain village with a very local feel.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Field+British+Columbia', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Field--British-Columbia', level: 'danger' },
      ],
    },
    {
      icon: '🛖',
      title: "Lake O'Hara Lodge",
      text: 'A legendary backcountry lodge accessible only by the restricted bus. Cabins and main lodge rooms available. One of the most exclusive and beautiful places to stay in all of Canada.',
      links: [
        { label: 'Official Site', url: 'https://www.lakeohara.com', level: 'gold' },
      ],
    },
    {
      icon: '🏨',
      title: 'Lake Louise (nearby)',
      text: 'Lake Louise in Banff, just 27 km east, offers many hotel options. A great base for exploring both Banff and Yoho parks on the same trip.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lake+Louise+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏠',
      title: 'Golden, BC (nearby)',
      text: 'The town of Golden is 55 km west of Field on the Trans-Canada. More affordable than Lake Louise with many hotels, hostels, and vacation rentals. Also a gateway to Glacier NP.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Golden+British+Columbia', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Golden--British-Columbia', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Emergency',
      lines: ['250-343-6783', 'Parks Canada Dispatch', '24/7 Emergency Line'],
    },
    {
      icon: '🐻',
      title: 'Bear Spray',
      text: 'Mandatory on Yoho Valley and backcountry trails. Available to rent or buy in Field or Golden.',
    },
    {
      icon: '🦕',
      title: 'Burgess Shale Permit',
      text: 'Fossil beds are protected — access only with a licensed guided hike. Collecting fossils is strictly prohibited.',
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Very limited — spotty in Field, none in the Yoho Valley or on trails. Carry a paper map and satellite communicator.',
    },
    {
      icon: '🌡️',
      title: 'Weather',
      text: 'Cool and wet even in summer. Snow possible any month at higher elevations. Pack layers and rain gear.',
    },
    {
      icon: '🏥',
      title: 'Hospital',
      lines: ['Golden & District Hospital', '835 9th Ave S, Golden, BC', '250-344-5271'],
    },
    {
      icon: '🚌',
      title: "Lake O'Hara Bus",
      text: 'Reservations open April 1st and sell out in minutes — book the instant the window opens.',
    },
    {
      icon: '🔒',
      title: 'Wildlife Corridors',
      text: 'Trails can close without notice for bear activity. Always check the Parks Canada trail report before hiking.',
    },
  ],

  gallery: [
    `${BASE}/Emerald Lake.jpg`,
    `${BASE}/Takakkaw Falls.jpg`,
    `${BASE}/Lake O'Hara.jpg`,
  ],
};

export default YOHO;
