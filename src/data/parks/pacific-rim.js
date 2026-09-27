// Pacific Rim National Park Reserve — данные страницы /park/pacific-rim

export const PACIFIC_RIM = {
  slug: 'pacific-rim',
  name: 'Pacific Rim National Park Reserve',
  shortName: 'Pacific Rim',
  province: 'British Columbia',
  tag: 'BC · National Park Reserve · Est. 1970',
  heroImage: '/bc/parks/pacific-rim.png',
  description:
    "Canada's most dramatic meeting of land and ocean — ancient temperate rainforest, world-class surf beaches, and labyrinthine sea kayak routes along the wild west coast of Vancouver Island. One of the most breathtaking places on Earth.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'Surf Tofino', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1970' },
    { label: 'Area', value: '511 km²' },
    { label: 'Coastline', value: '130 km' },
    { label: 'From Victoria', value: '4.5h Drive' },
    { label: '3 Units', value: 'Beach · Broken · Nitinat' },
    { label: 'Surf Town', value: 'Tofino ★' },
  ],

  badges: ['World-Class Surf', 'Temperate Rainforest', 'Sea Kayaking'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '🌧️', label: 'Winter', level: 'blue', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  spotlight: {
    tag: "Tofino Special",
    emoji: '🏄',
    title: "Tofino — Canada's Surf Capital",
    text: 'The town of Tofino sits at the edge of Pacific Rim and is one of the most beloved destinations in all of Canada. World-class surfing year-round, whale watching, hot springs, and the most dramatic storm watching in the country — winter storms bring 10-metre waves crashing onto Long Beach while visitors watch from cozy lodges. The annual Tofino Storm Watching season (October–March) is as popular as the summer beach season.',
    link: { label: 'Tourism Tofino', url: 'https://www.tourismtofino.com' },
  },

  attractionsTag: 'Three Units',
  attractionsTitle: 'Pacific Rim Has Three Distinct Areas',
  attractions: [
    {
      name: 'Long Beach Unit',
      icon: '🏖️',
      tag: 'Most Visited',
      tagLevel: 'blue',
      meta: '16 km of wild surf beach · World-class surfing at Cox Bay and Chesterman · Old-growth rainforest trails · Tofino and Ucluelet nearby',
    },
    {
      name: 'Broken Group Islands',
      icon: '🚣',
      tag: 'Sea Kayak',
      tagLevel: 'blue',
      meta: '100+ islands in Barkley Sound · World-renowned sea kayaking · Accessible by boat only · Primitive camping on islands',
    },
    {
      name: 'West Coast Trail',
      icon: '🥾',
      tag: 'Legendary',
      tagLevel: 'safe',
      meta: "75 km multi-day epic · One of the world's great hikes · 6–8 days · Permit required · Advanced hikers only",
    },
  ],

  wildlifeWarning:
    'Black and Grizzly Bears active throughout the park. Carry bear spray at all times on trails. On the West Coast Trail, bear canisters are mandatory. Store all food in provided bear boxes at campsites. Never approach wildlife.',
  wildlife: [
    { name: 'Grey Whale', level: 'safe', chance: '★★★★★ March–Oct migration' },
    { name: 'Humpback Whale', level: 'safe', chance: '★★★★☆ Summer feeding' },
    { name: 'Stellar Sea Lion', level: 'safe', chance: '★★★★★ Rocks and shore' },
    { name: 'Sea Otter', level: 'safe', chance: '★★★★☆ Kelp forests' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Beaches at low tide' },
    { name: 'Grey Wolf', level: 'caution', chance: '★★★☆☆ Beach wolves rare' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★★★ Everywhere' },
    { name: 'Pacific White-sided Dolphin', level: 'safe', chance: '★★★★☆ Boat tours' },
    { name: 'Pacific Salmon', level: 'safe', chance: '★★★★★ Rivers in fall' },
    { name: 'Tufted Puffin', level: 'safe', chance: '★★★☆☆ Offshore islands' },
    { name: 'Dungeness Crab', level: 'safe', chance: '★★★★★ Tidal pools' },
    { name: 'Giant Pacific Octopus', level: 'safe', chance: '★★★☆☆ Scuba diving' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — best surf conditions, whale watching, hiking, and sea kayaking. Long Beach is glorious. Tofino is extremely busy — book accommodations 6+ months ahead. Grey whales feeding offshore.',
      rating: 5,
      note: 'Book early!',
    },
    {
      icon: '🌧️',
      name: 'Fall / Storm Season',
      months: 'October — November',
      level: 'danger',
      text: "Legendary storm watching season — 10-metre waves, dramatic skies, and incredible power. Watching Pacific storms from Tofino lodges is one of BC's most unique travel experiences. Fewer crowds, lower prices.",
      rating: 5,
      note: 'Storm watching!',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — February',
      level: 'blue',
      text: "Wild and raw — the rainforest is lush and misty, surf is consistent, and you'll have Long Beach nearly to yourself. Grey whale migration begins in March. Excellent for experienced surfers and nature lovers.",
      rating: 4,
      note: 'Raw beauty',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: "Grey whale migration peaks in March — one of the world's great wildlife spectacles. Wildflowers on the rainforest floor. Fewer crowds than summer. West Coast Trail opens May 1.",
      rating: 4,
      note: 'Grey whales!',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/pacific-rim-national-park-reserve',
  trails: [
    { name: 'West Coast Trail', length: '75 km point-to-point', gain: '4,600 m gain', time: '6–8 days', area: 'Nitinat Unit · Permit required', difficulty: 'Hard' },
    { name: 'Rainforest Trail (Loop A & B)', length: '2 km each loop', gain: 'minimal gain', time: '45 min each', area: 'Long Beach Unit · Old-growth', difficulty: 'Easy' },
    { name: 'Shorepine Bog Trail', length: '800 m loop', gain: 'flat', time: '30 min', area: 'Long Beach Unit · Boardwalk', difficulty: 'Easy' },
    { name: 'South Beach Trail', length: '1.8 km return', gain: '30 m gain', time: '45 min', area: 'Long Beach Unit · Hidden beach', difficulty: 'Easy' },
    { name: 'Nuu-chah-nulth Trail', length: '16 km one-way', gain: '180 m gain', time: '5–7 hours', area: 'Long Beach · Tofino to Ucluelet', difficulty: 'Moderate' },
    { name: 'Schooner Cove Trail', length: '2 km return', gain: '50 m gain', time: '1 hour', area: 'Long Beach · Hidden cove', difficulty: 'Easy' },
  ],
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/british-columbia/pacific-rim-national-park-reserve?u=m&sh=1Xy3fU',
  trailsNote: {
    title: 'West Coast Trail Permit',
    text: 'Only 75 hikers per day allowed on the West Coast Trail (26 from each trailhead + 23 reservations). Permits open in January and sell out within hours. Book through Parks Canada reservation system as soon as they open. Season runs May 1 – September 30.',
  },

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car + Ferry',
      text: 'From Victoria: BC Ferries to Nanaimo, then drive Hwy 4 west through Port Alberni to Tofino — 4.5 hours total. From Vancouver: Ferry to Nanaimo then 3.5h drive. The drive through the mountains on Hwy 4 is spectacular but has one narrow mountain pass.',
      time: '4.5h from Victoria · 5h from Vancouver',
    },
    {
      icon: '✈️',
      title: 'Fly into Tofino',
      text: 'Tofino-Long Beach Airport (YAZ) has scheduled flights from Vancouver (35 min) with Pacific Coastal Airlines. A tiny regional airport but a massive time saver. Car rental available at the airport.',
      time: '35 min flight from Vancouver YVR',
    },
    {
      icon: '🚌',
      title: 'By Bus — Tofino Bus',
      text: 'Tofino Bus runs daily service from Victoria and Nanaimo to Tofino and Ucluelet — a popular option for backpackers and surfers without cars. Takes longer but very affordable and convenient.',
      time: 'Victoria to Tofino ~6h by bus',
    },
  ],
  entryPass: {
    title: 'Parks Canada Discovery Pass',
    text: 'A day pass or annual Discovery Pass covers entry to Pacific Rim year-round.',
    buyText: 'Buy online before you go.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏨',
      title: 'Tofino — Luxury & Mid-Range',
      text: "Wickaninnish Inn is one of Canada's most celebrated hotels — built on the rocks above the surf. Pacific Sands Beach Resort and Long Beach Lodge are also exceptional. Book 6+ months ahead for summer.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Tofino+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Tofino-Hotels.d6140174.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Green Point Campground',
      text: "Parks Canada's campground right on Long Beach — falling asleep to the sound of Pacific waves. The most coveted campsites in BC. Reservations open in January and sell out in minutes for summer.",
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/PacificRim', level: 'safe' },
      ],
    },
    {
      icon: '🏠',
      title: 'Vacation Rentals — Tofino',
      text: 'Many beautiful vacation homes, cabins, and surf houses available in Tofino. Great for groups — split costs and cook fresh seafood. Airbnb and VRBO have excellent options.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Tofino--BC', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/tofino', level: 'blue' },
      ],
    },
    {
      icon: '🌊',
      title: 'Ucluelet — Quieter Alternative',
      text: 'The town of Ucluelet is 40 km south of Tofino — less visited, more affordable, and with its own incredible Wild Pacific Trail. Black Rock Oceanfront Resort has stunning views.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Ucluelet+BC', level: 'blue' },
      ],
    },
    {
      icon: '🚣',
      title: 'Broken Group Islands Camping',
      text: 'Primitive camping on islands in Barkley Sound — accessible only by kayak or water taxi from Ucluelet or Bamfield. Apply for permit through Parks Canada. Unforgettable wilderness experience.',
      links: [
        { label: 'Permits', url: 'https://reservation.pc.gc.ca/PacificRim', level: 'safe' },
      ],
    },
    {
      icon: '🥾',
      title: 'West Coast Trail Camping',
      text: 'Designated campsites along the 75 km trail — included with your WCT permit. Sleep on wild beaches, in old-growth forest, and on dramatic clifftops. A true wilderness experience.',
      links: [
        { label: 'WCT Permit', url: 'https://reservation.pc.gc.ca/PacificRim/WCT', level: 'safe' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Park Wardens · 250-726-3500', '24/7'] },
    { icon: '🐻', title: 'Bear Safety', text: 'Bear spray required on trails. Bear canisters mandatory on the WCT.' },
    { icon: '🎫', title: 'Parks Pass', text: 'Discovery Pass or day pass required. Buy online at reservation.pc.gc.ca.' },
    { icon: '🏄', title: 'Surf Rentals', text: 'Boards and wetsuits available in Tofino year-round — water stays cool, wear a hood.' },
    { icon: '🌧️', title: 'Rain Gear', text: 'Pack for rain any season — this is a temperate rainforest. Waterproof everything.' },
    { icon: '📶', title: 'Cell Service', text: 'Spotty outside Tofino and Ucluelet. Download offline maps before you go.' },
    { icon: '🌊', title: 'Tide Tables', text: 'Check tides before beach hikes — some routes are impassable at high tide.' },
    { icon: '🦞', title: 'Local Seafood', text: "Fresh Dungeness crab and spot prawns are a Tofino must — try Tacofino or the Fish Store." },
  ],

  gallery: [
    '/bc/parks/pacific-rim.png',
    '/ab/parks/Pacific Rim National Park.png',
  ],
};

export default PACIFIC_RIM;
