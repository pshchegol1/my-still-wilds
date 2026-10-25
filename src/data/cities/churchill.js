// Churchill — данные страницы /city/churchill (Черчилл, МАНИТОБА)
// Видео Черчилла в бесплатных банках нет: Pexels и Pixabay по "polar bear"
// отдают медведей в зоопарках — для Черчилла это было бы подменой.
// В шапке фото с Wikimedia Commons — два белых медведя на прибрежной
// тундре Гудзонова залива у Черчилла, автор TravelingOtter, август 2014,
// CC BY 2.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (870).
// Нет дорог — только самолёт (Calm Air) и поезд VIA (Parks Canada).
// Горячая линия по медведям 204-675-2327 (Manitoba, Parks Canada,
// town of Churchill). Больница — 162 La Vérendrye Ave (WRHA).
// Сезоны медведей/белух/сияния, Prince of Wales Fort, Wapusk, «тюрьма для
// медведей», обломки Miss Piggy — из общих знаний.

export const CHURCHILL = {
  slug: 'churchill',
  name: 'Churchill',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Shore of Hudson Bay',
  accentLevel: 'caution',
  heroIcon: '🐻‍❄️',
  heroImage: '/Cities/Churchill/hero.jpg',
  heroCredit: 'Photo: TravelingOtter / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 58.7684, lon: -94.1650 },
  subtitle: 'Polar Bear Capital of the World',
  description:
    'A tiny town on the shore of Hudson Bay with no road to the outside world, Churchill is one of the few places on Earth where people live alongside polar bears. In autumn the bears gather on the coast waiting for the sea ice, in summer thousands of beluga whales fill the river mouth, and in winter the northern lights dance overhead.',

  actions: [
    { label: 'Explore Churchill', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈870 (2021)' },
    { label: 'Road Access', value: 'None — fly or train' },
    { label: 'Language', value: 'English · Cree · Dene' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Latitude', value: '≈58.8° N' },
    { label: 'Bear Alert Line', value: '204-675-2327' },
  ],

  badges: ['Polar Bears', 'Beluga Whales', 'Northern Lights'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '870', label: 'People in the 2021 census — and in autumn, often more polar bears nearby than visitors expect', level: 'blue' },
    { value: '0', label: 'Roads in — Churchill is reached only by plane or by train', level: 'danger' },
    { value: '24/7', label: 'Polar Bear Alert line: 204-675-BEAR (2327) — report any bear in or near town', level: 'gold' },
    { value: '3', label: 'Wildlife seasons: belugas in summer, polar bears in autumn, aurora in winter', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Kelsey Boulevard', icon: '🏙️', tag: '🏙️ Main street', tagLevel: 'gold', meta: 'Hotels, restaurants, shops and tour offices' },
    { name: 'Town Centre Complex', icon: '🏫', tag: '🏫 Hub', tagLevel: 'blue', meta: 'School, library, rec centre — and the town’s emergency shelter' },
    { name: 'Shoreline & Inukshuk', icon: '🌊', tag: '🌊 Bay', tagLevel: 'purple', meta: 'Rocky Hudson Bay coast at the edge of town — bear territory' },
    { name: 'Port & Grain Elevator', icon: '🚢', tag: '🚢 Port', tagLevel: 'olive', meta: 'Deep-water port on Hudson Bay, linked to the south by rail' },
    { name: 'Cape Merry', icon: '🏰', tag: '🏰 Heritage', tagLevel: 'danger', meta: 'Historic battery at the mouth of the Churchill River' },
    { name: 'Polar Bear Holding Facility', icon: '🔒', tag: '🔒 “Bear jail”', tagLevel: 'caution', meta: 'Where problem bears are held before being released — not open to visitors' },
  ],

  attractions: [
    {
      name: 'Polar Bear Tours',
      icon: '🐻‍❄️',
      text: 'From about October to November, polar bears gather along the coast waiting for Hudson Bay to freeze. Licensed operators take visitors out onto the tundra in large, high-clearance tundra vehicles — the only safe way to see them up close.',
      tags: [{ label: 'Book months ahead', level: 'caution' }, { label: 'Autumn', level: 'danger' }],
    },
    {
      name: 'Beluga Whales',
      icon: '🐋',
      text: 'In July and August thousands of beluga whales come into the Churchill River estuary. Watch from a boat, kayak or even snorkel with them on guided trips.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Guided', level: 'blue' }],
    },
    {
      name: 'Northern Lights',
      icon: '🌌',
      text: 'Churchill sits under the auroral oval, so the northern lights appear often on clear, dark nights — best in late winter. Go out only with a guide or to a safe viewing spot; bears may be around.',
      tags: [{ label: 'Winter', level: 'purple' }, { label: 'Bear-aware', level: 'caution' }],
    },
    {
      name: 'Prince of Wales Fort',
      icon: '🏰',
      text: 'A massive 18th-century stone fort built by the Hudson’s Bay Company across the river mouth, now a Parks Canada National Historic Site. Reached by boat in summer, with a bear guard.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Parks Canada', level: 'safe' }],
    },
    {
      name: 'Itsanitaq Museum',
      icon: '🗿',
      text: 'A small museum with a remarkable collection of Inuit carvings and artefacts. Check opening hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Inuit art', level: 'purple' }],
    },
    {
      name: 'Wapusk National Park',
      icon: '🏞️',
      text: 'A vast, roadless park south of town protecting one of the world’s largest polar bear denning areas. Access only with licensed tour operators.',
      tags: [{ label: 'Tour only', level: 'caution' }, { label: 'Remote', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Tundra, Taiga and Hudson Bay',
  outdoor: [
    { icon: '🛶', name: 'Kayaking with Belugas', dist: 'Churchill River', text: 'Guided paddles among curious belugas in July and August.' },
    { icon: '🐦', name: 'Birding', dist: 'June', text: 'Hundreds of species pass through or nest here, including rare Arctic species.' },
    { icon: '🐕', name: 'Dog Sledding', dist: 'Winter', text: 'Mushing tours through the boreal forest edge.' },
    { icon: '🌸', name: 'Tundra Flowers', dist: 'Late June — July', text: 'A brief, colourful bloom across the tundra.' },
    { icon: '✈️', name: 'Miss Piggy Wreck', dist: 'Near the airport', text: 'The remains of a cargo plane that crash-landed in 1979 — a famous photo stop.' },
    { icon: '🚫', name: 'No Solo Hiking', dist: 'Everywhere', text: 'Do not walk outside town or along the shore without a guide — polar bears can appear at any time.' },
  ],

  food: [
    { icon: '🐟', title: 'Arctic Char', area: 'Local restaurants', areaLevel: 'blue', text: 'Northern fish on several menus.' },
    { icon: '🦌', title: 'Caribou', area: 'Seasonal', areaLevel: 'danger', text: 'Northern game dishes when available.' },
    { icon: '🍔', title: 'Diners', area: 'Kelsey Blvd', areaLevel: 'gold', text: 'Hearty food after a day on the tundra.' },
    { icon: '☕', title: 'Cafés', area: 'Town', areaLevel: 'olive', text: 'Warm-up stops between tours.' },
    { icon: '🫐', title: 'Wild Berries', area: 'Late summer', areaLevel: 'purple', text: 'Cloudberries and blueberries on the tundra — never pick without a bear guard.' },
    { icon: '🛒', title: 'Groceries', area: 'Town stores', areaLevel: 'safe', text: 'Everything arrives by train or plane, so prices are high.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Long days return; ice breaks up on the bay in June. Bird migration peaks.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Beluga season', text: 'Belugas in the river, tundra flowers, boat trips to Prince of Wales Fort. Bears may still be near the coast.' },
    { icon: '🍂', name: 'Fall', months: 'October — November', level: 'danger', rating: 5, note: 'Polar bear season', text: 'Peak polar bear viewing as bears wait for the sea ice. Cold, windy and fully booked — plan a year ahead.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Aurora season', text: 'Extreme cold and long nights, but excellent northern lights and dog sledding.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Calm Air flies scheduled routes to Churchill from Winnipeg and Thompson. Tour packages often include charter flights in bear season.',
      time: '≈2 h from Winnipeg',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Winnipeg–Churchill train runs a few times a week. The journey takes about two days and is often delayed — or drive to Thompson and board there.',
      time: '≈2 days from Winnipeg',
    },
    {
      icon: '🚫',
      title: 'By Car',
      text: 'There is no road to Churchill. The nearest road connection is Thompson, where you can switch to the train or a flight.',
      time: 'Not possible',
    },
    {
      icon: '🚢',
      title: 'By Sea',
      text: 'A handful of expedition cruises call at Churchill in summer.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '🏨',
      title: 'Town Hotels & Lodges',
      area: 'Kelsey Blvd',
      text: 'A small number of hotels and B&Bs — they sell out for bear season a year or more ahead.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Churchill+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Churchill%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🐻‍❄️',
      title: 'Tundra Lodges',
      area: 'On the tundra',
      text: 'Some operators run mobile lodges out on the tundra in bear season — sold as part of tour packages.',
      links: [
        { label: 'Travel Manitoba', url: 'https://www.travelmanitoba.com/', level: 'blue' },
      ],
    },
    {
      icon: '🎒',
      title: 'Tour Packages',
      area: 'All-inclusive',
      text: 'Many visitors book packages that bundle flights, rooms and tundra-vehicle days.',
      links: [
        { label: 'Parks Canada – Wapusk', url: 'https://parks.canada.ca/pn-np/mb/wapusk', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐',
      title: 'Getting Around a Bear Town',
      text: 'Churchill has no public transit. The town is small, but walking at night or at the edges of town is dangerous because of polar bears. Most visitors move with their tour operator; taxis and rental vehicles are limited.',
      linkLabel: 'Town of Churchill',
      linkUrl: 'https://churchill.ca/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis & Tours',
        text: 'Local taxis and tour shuttles. Vehicle rental is limited — reserve early.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Tour shuttles: with packages', 'Taxis: local', 'Walking: daylight, in town only'],
        },
        linkLabel: 'Town of Churchill',
        linkUrl: 'https://churchill.ca/',
      },
      {
        icon: '🐻‍❄️',
        title: 'Bear Safety Rules',
        items: [
          { icon: '🌙', title: 'Not at Night', text: 'Avoid walking after dark, especially in autumn.' },
          { icon: '🚫', title: 'Stay in Town', text: 'Never walk on the shore or rocks without a guide.' },
          { icon: '📞', title: 'Report Bears', text: 'Call 204-675-2327 if you see a bear in or near town.' },
          { icon: '🚗', title: 'Shelter', text: 'If a bear approaches, get into a building or vehicle immediately.' },
        ],
      },
    ],
    proTip: {
      label: 'Bear tip:',
      text: 'Look for the “Polar Bear Alert” warning signs at the town edges — they mark where you should not go on foot.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Tours and hotels are taxed with GST and RST; check your package price to see whether taxes are included.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Churchill / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🐻‍❄️', label: 'Tundra tours: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Souvenirs: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌌', label: 'Northern lights: free' },
      { icon: '🗿', label: 'Inukshuk & town walks (daylight): free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Tundra-vehicle drivers and guides: 10–20% of the tour price is customary. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🐻‍❄️', title: 'Polar Bears Are Real', text: 'Bears can walk through town, especially from July to November. Stay alert, never walk at night or outside town, and obey warning signs.' },
    { icon: '📞', title: 'Bear Alert Line', text: 'Report any polar bear in or near town to 204-675-BEAR (2327), 24 hours. For emergencies, call 911.' },
    { icon: '📅', title: 'Book Early', text: 'Rooms and tours for October–November sell out a year or more ahead.' },
    { icon: '🥶', title: 'Extreme Cold', text: 'Autumn is windy and freezing; winter brings −30 °C and colder.' },
    { icon: '💸', title: 'High Prices', text: 'Everything arrives by train or plane — budget more for food and supplies.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Churchill lies within Treaty 5 territory and the traditional lands of the Cree, Dene (Sayisi Dene) and Inuit peoples.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Churchill Health Centre', '162 La Vérendrye Ave', 'Emergency 24/7 · call 911'] },
  ],
};

export default CHURCHILL;
