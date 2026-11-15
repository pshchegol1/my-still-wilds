// London — данные страницы /city/london (Лондон, ОНТАРИО)
// Видео этого Лондона в бесплатных банках нет: по "london ontario" Pexels
// отдаёт Торонто, Оттаву и общие кадры Онтарио, а ролик Pixabay "white
// stork in London, Ontario" подписан неверно — белые аисты в Онтарио не
// водятся. В шапке фото с Wikimedia Commons — панорама центра и Victoria
// Park, автор Itskdoubt, 2017, CC BY-SA 4.0. Лицензия требует указывать
// автора — отсюда heroCredit.
// Население — перепись 2021 года: оценки на 2025 расходятся (~495K по
// одним данным, «около 500K» по городу), надёжной официальной нет.
// Тарифы LTC — с сайта перевозчика, дата вступления там не указана.
// MAT: город пишет 4%, Tourism London — 5% (повышение обсуждалось с 2026).

export const LONDON = {
  slug: 'london',
  name: 'London',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Southwestern Ontario',
  accentLevel: 'safe',
  heroIcon: '🌳',
  heroImage: '/Cities/London/hero.jpg',
  heroCredit: 'Photo: Itskdoubt / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 42.9849, lon: -81.2453 },
  subtitle: 'The Forest City',
  description:
    'Not the one in England — London, Ontario, a university city at the forks of its own Thames River, halfway between Toronto and Detroit. Its streets are so thickly planted that it has been called the Forest City for well over a century, and it is where Frederick Banting woke one night in 1920 with the idea that became insulin.',

  actions: [
    { label: 'Explore London', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈422K (2021)' },
    { label: 'River', value: 'The Thames' },
    { label: 'Nickname', value: 'Forest City' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈190 km · 2h' },
    { label: 'To Detroit', value: '≈190 km · 2h' },
  ],

  badges: ['Forest City', 'University Town', 'Southwestern Ontario'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1920', label: 'In the early hours of 31 October, Frederick Banting writes down the idea that leads to insulin — in a house you can visit', level: 'gold' },
    { value: '2021', label: 'Four members of the Afzaal family are killed in a hate-motivated attack — the city remembers them as Our London Family', level: 'danger' },
    { value: '1847', label: 'John Kinder Labatt takes over a London brewery — the start of one of Canada’s best-known beer names', level: 'purple' },
    { value: '2027', label: 'The first bus rapid transit line is expected — none is running yet in 2026', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Richmond Row', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Richmond Street bars and shops · Covent Garden Market · Canada Life Place arena' },
    { name: 'Victoria Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Central park', tagLevel: 'safe', meta: 'Festivals all summer · Skating in winter · Heart of the old city' },
    { name: 'The Forks & Museum London', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Where the Thames branches meet · Museum London · Eldon House · Riverside paths' },
    { name: 'Old North & Western', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'University', tagLevel: 'purple', meta: 'Western University campus · Tree-lined Victorian streets · Banting House nearby' },
    { name: 'Wortley Village', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Village', tagLevel: 'olive', meta: 'Small-town high street south of downtown · Cafés and independent shops' },
    { name: 'Springbank & Byron', icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', tag: 'West', tagLevel: 'danger', meta: 'Springbank Park · Storybook Gardens · Thames Valley Parkway' },
  ],

  attractions: [
    {
      name: 'Banting House',
      icon: '💉', iconSrc: '/icons/attractions/ph_syringe-thin.svg',
      text: 'In the early hours of 31 October 1920, a young doctor renting a room at 442 Adelaide Street North woke and wrote down an idea for treating diabetes. Frederick Banting went on to isolate insulin in Toronto the next year. The house is now a national historic site and small museum, known as the Birthplace of Insulin.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Small museum', level: 'blue' }],
    },
    {
      name: 'Our London Family Memorial',
      icon: '🕯️', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'On 6 June 2021, Salman Afzaal, Madiha Salman, Talat Afzaal and fifteen-year-old Yumnah Afzaal were killed by a driver who deliberately struck them while they walked; their young son survived. Police called it a hate-motivated act of Islamophobia. A memorial with a mural now stands at the site in northwest London, and the city gathers there every June.',
      tags: [{ label: 'Treat with care', level: 'danger' }],
    },
    {
      name: 'Thames Valley Parkway',
      icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg',
      text: 'A long multi-use path following the branches of the Thames through the city, linking Springbank Park, the Forks, downtown and the east end. The best way to see why London is called the Forest City.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Bike or walk', level: 'blue' }],
    },
    {
      name: 'Covent Garden Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'A downtown market hall with food vendors, bakeries and a farmers’ market outdoors in season, on a site that has hosted a market since the 1840s.',
      tags: [{ label: 'Downtown', level: 'gold' }, { label: 'Food', level: 'olive' }],
    },
    {
      name: 'Museum London & Eldon House',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The city’s art and history museum sits at the Forks of the Thames. Next door, Eldon House is a family home from the 1830s preserved with its original furnishings — one of the oldest surviving houses in the city.',
      tags: [{ label: 'Riverside', level: 'blue' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Victoria Park Festivals',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: 'Through the summer the downtown park hosts a festival almost every weekend, including the Sunfest world music festival in July. In winter there is an outdoor skating rink.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Mostly free', level: 'safe' }],
    },
  ],

  outdoorHeading: 'A City Under the Trees',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Thames Valley Parkway', dist: 'Across the city', text: 'Dozens of kilometres of paved paths along the river. Flat and shaded — ideal for cycling.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Springbank Park', dist: 'West end', text: 'The city’s largest park, along the Thames, with trails, gardens and Storybook Gardens for children.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'The Thames', dist: 'Through town', text: 'A shallow, gentle river for paddling in summer. Water levels drop low in late summer and rise fast after storms.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Westminster Ponds', dist: 'South London', text: 'A large wetland and forest conservation area with boardwalks and birding, inside the city.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Huron & Lake Erie', dist: '≈1h', text: 'Beaches at Grand Bend on Lake Huron and Port Stanley on Lake Erie are easy day trips.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', dist: 'Victoria Park', text: 'Outdoor skating downtown. London gets lake-effect snow from Lake Huron — sudden, heavy and localized.' },
  ],

  food: [
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer & Labatt', area: 'City-wide', areaLevel: 'gold', text: 'Labatt began here in the 1840s and still brews in London; a newer wave of craft breweries fills old industrial buildings.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Richmond Row', area: 'Downtown', areaLevel: 'danger', text: 'The main bar and restaurant strip — lively, and loud on student weekends.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Covent Garden Market', area: 'Downtown', areaLevel: 'olive', text: 'Lunch counters and local producers under one roof.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Wortley Village', area: 'South of downtown', areaLevel: 'blue', text: 'Cafés, bakeries and neighbourhood restaurants with a small-town feel.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'Dundas · Wellington', areaLevel: 'purple', text: 'A diverse, growing city with a wide range of Middle Eastern, Asian and Latin American restaurants.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm Country', area: 'Around the city', areaLevel: 'safe', text: 'Southwestern Ontario farmland surrounds London — farm stands and markets in season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Trees leaf out', text: 'The Forest City turns green quickly in May. Changeable weather; the river runs high.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Weekend festivals in Victoria Park, warm humid days and thunderstorms. The quietest time on campus.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour and students', text: 'The street trees turn and the river paths are at their best. Homecoming weekend at Western is crowded and rowdy.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Snow belt', text: 'Grey and cold, with bursts of lake-effect snow off Lake Huron that can close roads quickly.' },
  ],

  gettingThere: [
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'London is on VIA Rail’s Toronto–Windsor and Toronto–Sarnia routes; the station is downtown.',
      time: '≈2h from Toronto',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Highway 401',
      text: 'Highway 401 passes south of the city between Toronto and Windsor/Detroit. Watch for sudden whiteouts in winter snow squalls.',
      time: '≈2h from Toronto · ≈2h to Detroit',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — London (YXU)',
      text: 'London International Airport on the northeast edge of the city has a limited set of domestic and seasonal flights. Toronto Pearson is the main hub.',
      time: '≈20 min from downtown',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The nearest crossings are Windsor–Detroit and Sarnia–Port Huron, each about two hours away.',
      time: '≈2h to the border',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Central',
      text: 'Hotels near Richmond Row, Victoria Park and the train station.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+London+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=London%2C%20Ontario%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'South London & Highway 401',
      area: 'Car-friendly · Cheaper',
      text: 'Chain hotels near Wellington Road and the highway.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=London+Ontario+Canada', level: 'blue' },
      ],
    },
    {
      icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg',
      title: 'Near Western',
      area: 'Quiet · Tree-lined',
      text: 'Inns and short-term rentals in Old North near campus. Book well ahead for graduation and homecoming.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+North+London+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'London Transit (LTC)',
      text: 'City buses cover downtown, Western, Fanshawe and the main corridors. London’s bus rapid transit lines are still being built: the first centre-running bus lanes opened on Wellington Road in September 2026, the East London Link is expected in late 2027 and the Wellington Gateway in 2029. Expect construction detours.',
      linkLabel: 'London Transit',
      linkUrl: 'https://www.londontransit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from London Transit’s fares page (no effective date is shown). Cash must be exact. A stored-value smart card or tickets are cheaper per ride. Children 12 and under ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (exact): $3.50', 'Smart card: $2.65', '5 tickets: $13.25', 'Monthly Citipass: $112'],
        },
        linkLabel: 'LTC fares',
        linkUrl: 'https://www.londontransit.ca/fares-and-passes/fares/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Thames Valley Parkway makes cycling across town easy and pleasant.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for the lakes and countryside; downtown parking is easy compared with Toronto.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, Victoria Park, the Forks and Richmond Row are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Name tip:',
      text: 'When booking anything online, always add “Ontario” or “Canada”. Search engines, flight sites and hotel apps default to London, England.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels and short-term rentals also charge London’s Municipal Accommodation Tax: the city’s page lists 4%, while Tourism London lists 5% after an increase considered for 2026 — check the breakdown on your booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'London / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 13% HST + Municipal Accommodation Tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum and event tickets: 13% HST' },
    ],
    exempt: [
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'Parks and the Thames Valley Parkway: free' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌍', iconSrc: '/icons/attractions/ph_globe-thin.svg', title: 'The Other London', text: 'Always specify London, Ontario, Canada when booking or searching. Maps, flights and hotels default to England.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snow Squalls', text: 'Lake-effect snow off Lake Huron can turn Highway 401 and 402 into whiteouts with little warning. Check Ontario 511 in winter.' },
    { icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', title: 'Student City', text: 'Western and Fanshawe shape the calendar. Homecoming and move-in weekends are busy and rowdy around campus and downtown.' },
    { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'Rapid Transit Works', text: 'Bus rapid transit construction along major streets causes detours through 2027 and beyond.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Exact Cash', text: 'LTC drivers need exact cash. A reloadable smart card is cheaper and easier.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'London is on the traditional lands of the Anishinaabek, Haudenosaunee, Lūnaapéewak and Attawandaron peoples. The Chippewas of the Thames, Oneida Nation of the Thames and Munsee-Delaware Nation are close neighbours to the southwest.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Victoria Hospital', '800 Commissioners Road East', 'Emergencies: call 911'] },
  ],
};

export default LONDON;
