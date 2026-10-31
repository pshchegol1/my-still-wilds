// Red Deer — данные страницы /city/red-deer
// Видео Ред-Дира в бесплатных банках нет: по "red deer" банки отдают
// животное или Эдмонтон с Калгари. В шапке фото с Wikimedia Commons —
// аэрофото центра города с долиной реки за ним, автор Quintin
// Soloviev, август 2026, CC BY 4.0. Лицензия требует указывать
// автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Canadian Finals Rodeo в 2024–2026 проходит в Эдмонтоне, а не здесь,
// хотя многие гиды ещё пишут иначе, — поэтому на странице его нет.
// Тарифы Red Deer Transit — с сайта города, действуют с 1 сентября 2026.

export const RED_DEER = {
  slug: 'red-deer',
  name: 'Red Deer',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Central Parkland',
  accentLevel: 'purple',
  heroIcon: '🦌',
  heroImage: '/Cities/RedDeer/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.2681, lon: -113.8112 },
  subtitle: 'Halfway Between, and Its Own Place',
  description:
    'Alberta’s third-largest city, sitting almost exactly halfway between Calgary and Edmonton on the Red Deer River. Most people know it as a stop on Highway 2; the people who stop find a long, wooded river valley threaded through the middle of town, Alberta’s oldest bird sanctuary — and a history that includes two of the province’s hardest stories.',

  actions: [
    { label: 'Explore Red Deer', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈115K' },
    { label: 'Climate', value: 'Continental' },
    { label: 'Rank in Alberta', value: '3rd largest' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈150 km · 1.5h' },
    { label: 'From Edmonton', value: '≈150 km · 1.5h' },
  ],

  badges: ['River Valley City', 'Central Alberta', 'Treaty 6 & 7 Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'safe', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1924', label: 'Gaetz Lakes becomes a federal migratory bird sanctuary — the oldest in Alberta, inside the city', level: 'safe' },
    { value: '1885', label: 'Soldiers occupy a fortified stopping house at the river crossing — today’s Fort Normandeau', level: 'gold' },
    { value: '≈70', label: 'Children who died at the Red Deer Indian Industrial School (1893–1919), out of about 350 students', level: 'danger' },
    { value: '2,844', label: 'Albertans sterilized under the 1928–1972 eugenics law — Red Deer’s training school was at its centre', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Core', tagLevel: 'gold', meta: 'Ross Street and Little Gaetz · Murals · Museum + Art Gallery · City Hall Park' },
    { name: 'Waskasoo Park & the River', icon: '🌳', tag: '🌳 The green spine', tagLevel: 'safe', meta: 'Trails along the Red Deer River · Bower Ponds · Heritage Ranch · Through the whole city' },
    { name: 'Gaetz Lakes & Kerry Wood', icon: '🐦', tag: '🐦 North-east', tagLevel: 'blue', meta: 'Bird sanctuary · Nature centre · Quiet walking trails' },
    { name: 'Westerner Park', icon: '🏟️', tag: '🏟️ South', tagLevel: 'danger', meta: 'Centrium arena · Hockey, rodeo, trade shows · Exhibition grounds' },
    { name: 'Gasoline Alley', icon: '⛽', tag: '⛽ Highway 2', tagLevel: 'olive', meta: 'Fuel, chain restaurants and hotels · Where the highway traffic stops' },
    { name: 'North Red Deer', icon: '🏘️', tag: '🏘️ Across the river', tagLevel: 'purple', meta: 'Older neighbourhoods · Riverside trails · Quieter residential streets' },
  ],

  attractions: [
    {
      name: 'Waskasoo Park',
      icon: '🌳',
      text: 'A park system that follows the Red Deer River and its creeks right through the city, linking dozens of kilometres of paved and gravel trails, ponds, picnic sites and natural areas. It is the reason Red Deer is a pleasant city to spend a day in rather than just a highway stop. Bower Ponds for skating in winter and paddleboats in summer; Heritage Ranch for the stairs up to river views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Gaetz Lakes Sanctuary',
      icon: '🐦',
      text: 'Alberta’s oldest federal migratory bird sanctuary, protected since 1924, with roughly five kilometres of trails, a bird blind and viewing decks around two oxbow lakes. Enter through the Kerry Wood Nature Centre, named for the naturalist who fought to protect it in the 1950s. No pets, bikes or jogging — this is a place for walking quietly.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'No pets', level: 'caution' }],
    },
    {
      name: 'Fort Normandeau',
      icon: '🏰',
      text: 'A replica of the fortified stopping house at the old Calgary–Edmonton Trail river crossing, occupied by soldiers in 1885 during the North-West Resistance and later by the Mounted Police. It sits a short drive west of the city, and the site includes a monument to the children of the Red Deer Indian Industrial School and interpretation of Indigenous and Métis history.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'gold' }],
    },
    {
      name: 'Red Deer Indian Industrial School',
      icon: '🕯️',
      text: 'A Methodist-run residential school operated near the city from 1893 to 1919, with about 350 students and one of the highest death rates of any residential school in Canada — at least seventy children died. Four students who died in the 1918 flu are buried in the Red Deer Cemetery, where a memorial now bears their names; a ground-penetrating radar search of the school site began in 2021. This is not a tourist stop, but it is part of the city.',
      tags: [{ label: 'Treat with care', level: 'danger' }],
    },
    {
      name: 'Michener Centre & Alberta’s Eugenics Law',
      icon: '⚖️',
      text: 'The Provincial Training School opened here in 1923 and became central to Alberta’s Sexual Sterilization Act: between 1928 and 1972 the province sterilized 2,844 people. In 1996 Leilani Muir, sterilized at the school as a teenager without being told, became the first person to win a lawsuit against Alberta for it. It is part of Red Deer’s history, and it deserves to be known.',
      tags: [{ label: 'Hard history', level: 'danger' }],
    },
    {
      name: 'Red Deer Museum + Art Gallery',
      icon: '🖼️',
      text: 'The city museum downtown, with central Alberta history, Indigenous history and rotating art exhibitions. A good indoor hour on a cold or wet day.',
      tags: [{ label: 'Downtown', level: 'blue' }, { label: 'Indoor', level: 'gold' }],
    },
  ],

  outdoorHeading: 'A River Valley Through the City',
  outdoor: [
    { icon: '🚴', name: 'Trail System', dist: 'City-wide', text: 'Waskasoo Park’s trails let you cross most of the city on foot or by bike without touching a busy road. Mostly flat, with steep stairs and hills up the valley sides.' },
    { icon: '🛶', name: 'Red Deer River', dist: 'Through town', text: 'Paddling and floating in summer. The river is cold and changes quickly with rain upstream in the mountains — check flows before going out.' },
    { icon: '⛸️', name: 'Bower Ponds', dist: 'Central', text: 'Skating in winter, paddleboats in summer, and a hub of trails in between.' },
    { icon: '🏖️', name: 'Sylvan Lake', dist: '≈25 km west', text: 'The nearest big lake, with a beach town, marina and summer crowds. Water quality advisories happen some summers — check before swimming.' },
    { icon: '🦕', name: 'Drumheller Badlands', dist: '≈1h45 south-east', text: 'Downstream on the same Red Deer River, the valley turns into badlands and the Royal Tyrrell dinosaur museum. A full day trip.' },
    { icon: '🦌', name: 'Wildlife', dist: 'River valley', text: 'Deer, moose, beaver, coyotes and owls live along the river valley inside the city. Give moose a wide berth, especially with calves.' },
  ],

  food: [
    { icon: '🥩', title: 'Alberta Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is the heart of Alberta farm and ranch country, and steakhouses and burger places are everywhere.' },
    { icon: '🍺', title: 'Craft Beer', area: 'Downtown · Industrial areas', areaLevel: 'gold', text: 'A small but real brewery scene; several taprooms are in light industrial parks rather than downtown.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown · Little Gaetz', areaLevel: 'blue', text: 'Independent coffee shops in the older downtown blocks around Ross Street.' },
    { icon: '🍜', title: 'Global Food', area: 'City-wide', areaLevel: 'purple', text: 'Filipino, Vietnamese, Indian and Latin American restaurants reflect a growing immigrant community.' },
    { icon: '⛽', title: 'Road Food', area: 'Gasoline Alley', areaLevel: 'olive', text: 'Every chain restaurant you can name, clustered at the highway exits for the Calgary–Edmonton traffic.' },
    { icon: '🧺', title: 'Farmers’ Market', area: 'Seasonal', areaLevel: 'safe', text: 'A summer market with central Alberta producers. Check current days and location before going.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Muddy, then green', text: 'Snowmelt and mud in April give way to a green river valley by late May. Migrating birds fill Gaetz Lakes.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Best season', text: 'Warm, long days on the trails and the river, and Sylvan Lake nearby. Thunderstorms and hail can build fast in the afternoon; wildfire smoke drifts in some summers.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'safe', rating: 4, note: 'Golden valley', text: 'The aspens and poplars along the river turn gold. Crisp mornings, quiet trails.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold and bright', text: 'Real prairie winter, with cold snaps below −30 °C. Skating at Bower Ponds and groomed trails make it livable. Highway 2 can close in storms — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — Highway 2',
      text: 'The Queen Elizabeth II Highway between Calgary and Edmonton runs past the city. About 150 km either way, through farm country with little shelter from crosswinds and blowing snow.',
      time: '≈1.5h from Calgary or Edmonton',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Red Deer Regional Airport has limited scheduled service. Most visitors fly into Calgary (YYC) or Edmonton (YEG) and drive.',
      time: '≈1.5h from either major airport',
    },
    {
      icon: '🚌',
      title: 'By Intercity Bus',
      text: 'Private coach services run between Calgary, Red Deer and Edmonton. Schedules change frequently — check current operators before planning around them.',
      time: '≈1.5–2h',
    },
    {
      icon: '🏖️',
      title: 'Day Trips',
      text: 'Sylvan Lake is about 25 km west; Drumheller and the badlands are about 1h45 south-east; the Rockies at Nordegg are roughly two to two and a half hours west.',
      time: 'Car needed',
    },
  ],

  stay: [
    {
      icon: '⛽',
      title: 'Gasoline Alley & Highway 2',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels at the highway exits, practical for a stop between Calgary and Edmonton.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Red+Deer+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Red%20Deer%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable · Close to trails',
      text: 'Fewer hotels, but close to restaurants, the museum and the river valley trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Red+Deer', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Sylvan Lake',
      area: 'Summer · Beach town',
      text: 'Lake cottages and hotels 25 km west, if the trip is about summer rather than the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sylvan+Lake+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Red Deer Transit',
      text: 'City buses connect downtown, the polytechnic, the hospital and the main shopping areas. Service is thinner on evenings and weekends; for Fort Normandeau, Sylvan Lake or Drumheller you will need a car.',
      linkLabel: 'Red Deer Transit',
      linkUrl: 'https://www.reddeer.ca/city-services/transit/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the City of Red Deer, effective 1 September 2026 to 31 August 2027. Drivers cannot give change and accept only $5 and $10 bills — bring exact fare.',
        fareBox: {
          label: 'Adult (18–64)',
          lines: ['Cash: $3', 'Day pass: $10', '12 rides: $33', 'Monthly pass: $75'],
        },
        linkLabel: 'Fares and Passes',
        linkUrl: 'https://www.reddeer.ca/city-services/transit/fares-and-passes/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way to cover the city and the region; parking is easy.' },
          { icon: '🚲', title: 'Bike', text: 'The trail system makes cycling across town genuinely pleasant in summer.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Available across the city.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the river valley trails are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'If you are driving Calgary–Edmonton, skip the Gasoline Alley exit and drive ten minutes into town instead. A walk at Bower Ponds or Gaetz Lakes beats a service-station break.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Red Deer / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', label: 'Event and museum tickets: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚌', label: 'Transit fares: as posted' },
      { icon: '🛏️', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%.',
  },

  practical: [
    { icon: '❄️', title: 'Winter Highway', text: 'Highway 2 between Calgary and Edmonton is busy and exposed. Blowing snow and black ice cause pile-ups every winter — check 511 Alberta and slow down.' },
    { icon: '⛈️', title: 'Summer Storms', text: 'Central Alberta gets strong summer thunderstorms with hail and occasional tornado warnings. Take Alberta Emergency Alerts seriously.' },
    { icon: '🫎', title: 'Moose in Town', text: 'Moose wander into the river valley and sometimes the streets. They are more dangerous than they look — keep well back.' },
    { icon: '🏥', title: 'Hospital Construction', text: 'The regional hospital is undergoing a major expansion; expect construction around the site and check current entrances before visiting.' },
    { icon: '⏰', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🎫', title: 'Transit Fares', text: 'Exact fare only on Red Deer buses — drivers carry no change. Fares rose on 1 September 2026.' },
    { icon: '🪶', title: 'Whose Land', text: 'The City of Red Deer acknowledges Treaty 6 and Treaty 7 territory and recognises the land as a Métis gathering site. The name itself is a translation of Indigenous names for the river that referred to elk — European settlers mistook the elk for the red deer of the British Isles.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Red Deer Regional Hospital Centre', '3942 50A Avenue', 'Emergencies: call 911'] },
  ],
};

export default RED_DEER;
