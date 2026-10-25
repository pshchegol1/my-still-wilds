// Windsor — данные страницы /city/windsor (Виндзор, ОНТАРИО)
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Mohit Singh, "snowy waterfront in Windsor, Canada at sunrise".
// Проверено по кадрам: заснеженная набережная Виндзора, лёд на реке
// Детройт и мост Амбассадор на горизонте — это канадский берег, а не
// Детройт и не английский Виндзор. Таймлапс 21 с; оригинал 44 МБ при
// 16,7 Мбит/с — пережат до ~6,4 МБ; постер — первый кадр.
// Население — перепись 2021 года. Тариф Transit Windsor — со страницы
// города (без даты); с 5 октября 2026 введена оплата через Umo.
// Мост Гордона Хоу открылся для машин 27 июля 2026.

export const WINDSOR = {
  slug: 'windsor',
  name: 'Windsor',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Across the River from Detroit',
  accentLevel: 'caution',
  heroIcon: '🌉',
  heroImage: '/Cities/Windsor/hero-poster.jpg',
  heroVideo: '/Cities/Windsor/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 42.3149, lon: -83.0364 },
  subtitle: 'The City That Looks North to the USA',
  description:
    'Canada’s southernmost city and its busiest border crossing, facing the Detroit skyline across a river less than a kilometre wide — and, oddly, looking north to it. A car town, a former rum-running capital, and the last stop on the Underground Railroad for many people escaping slavery.',

  actions: [
    { label: 'Explore Windsor', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈230K (2021)' },
    { label: 'River', value: 'Detroit River' },
    { label: 'Crossings', value: '2 bridges · tunnel' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈370 km · 3.5h' },
    { label: 'To Detroit', value: '≈5 min' },
  ],

  badges: ['Border City', 'Automotive Capital', 'Underground Railroad'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '2026', label: 'The Gordie Howe International Bridge opens to traffic on 27 July — the new crossing to Detroit', level: 'blue' },
    { value: '1930', label: 'The Detroit–Windsor Tunnel opens, a year after the Ambassador Bridge — the world’s first international road tunnel under water', level: 'gold' },
    { value: '1851', label: 'Sandwich First Baptist Church is completed by people who escaped slavery — still an active congregation', level: 'purple' },
    { value: '1920s', label: 'Prohibition turns the Detroit River into one of North America’s great smuggling routes', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Downtown & the Riverfront', icon: '🌉', tag: '🌉 Core', tagLevel: 'gold', meta: 'Riverfront trail · Detroit skyline views · Caesars Windsor · Tunnel entrance' },
    { name: 'Walkerville', icon: '🥃', tag: '🥃 Heritage', tagLevel: 'danger', meta: 'Hiram Walker distillery town · Restored brick streets · Cafés and pubs' },
    { name: 'Olde Sandwich Town', icon: '⛪', tag: '⛪ Oldest', tagLevel: 'purple', meta: 'One of the oldest European settlements in Ontario · Sandwich First Baptist Church · Under the Ambassador Bridge' },
    { name: 'Via Italia (Erie Street)', icon: '🍝', tag: '🍝 Little Italy', tagLevel: 'olive', meta: 'Italian restaurants, bakeries and cafés' },
    { name: 'Ford City', icon: '🚗', tag: '🚗 East', tagLevel: 'blue', meta: 'Neighbourhood that grew around the Ford plant · Drouillard Road' },
    { name: 'South Windsor & LaSalle', icon: '🏡', tag: '🏡 Residential', tagLevel: 'safe', meta: 'Suburbs toward the Gordie Howe bridge · Ojibway Prairie nature reserves' },
  ],

  attractions: [
    {
      name: 'Riverfront Trail & Detroit Skyline',
      icon: '🌆',
      text: 'A long riverside park and trail runs along Windsor’s waterfront with the Detroit skyline directly across the water — a view that most Canadians never see from their own side. Because the river bends, Detroit actually lies north of Windsor here.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best at sunset', level: 'gold' }],
    },
    {
      name: 'Sandwich First Baptist Church',
      icon: '⛪',
      text: 'Built by a congregation formed around 1840 of people who had escaped slavery in the United States; the brick church was completed in 1851. It sheltered newly arrived freedom seekers, and members helped make its bricks by hand. A national historic site and one of the oldest continuously active Black churches in Canada.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Active church', level: 'purple' }],
    },
    {
      name: 'Gordie Howe International Bridge',
      icon: '🌉',
      text: 'The new cable-stayed bridge to Detroit opened to vehicles on 27 July 2026, with a pedestrian and cycling path opening in August. It joins the Ambassador Bridge (1929) and the Detroit–Windsor Tunnel (1930) as the city’s crossings.',
      tags: [{ label: 'Opened 2026', level: 'blue' }, { label: 'Toll', level: 'caution' }],
    },
    {
      name: 'Walkerville & Hiram Walker',
      icon: '🥃',
      text: 'Hiram Walker founded a distillery here in the 1850s and built a company town around it; Canadian Club whisky is still made in Walkerville. The heritage district has some of the city’s best-preserved streets.',
      tags: [{ label: 'Distillery tours', level: 'gold' }, { label: 'Walkable', level: 'safe' }],
    },
    {
      name: 'Rum-Running History',
      icon: '🚤',
      text: 'During US Prohibition, liquor flowed across the Detroit River from Windsor by boat, car and even across the winter ice. The waterfront and Walkerville still carry stories of the era.',
      tags: [{ label: 'History', level: 'danger' }],
    },
    {
      name: 'Point Pelee National Park',
      icon: '🦋',
      text: 'About an hour southeast, the southernmost point of mainland Canada — a sandspit into Lake Erie famous for spring bird migration and autumn monarch butterflies. A Parks Canada pass is required.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Park pass', level: 'caution' }],
    },
  ],

  outdoorHeading: 'River, Prairie and Lake Erie',
  outdoor: [
    { icon: '🚲', name: 'Riverfront Trail', dist: 'Downtown', text: 'Flat, paved and right on the water, with sculpture parks and views of Detroit.' },
    { icon: '🌾', name: 'Ojibway Prairie', dist: 'West Windsor', text: 'Rare tallgrass prairie and oak savannah, protected in a cluster of nature reserves inside the city.' },
    { icon: '🦋', name: 'Point Pelee', dist: '≈1h', text: 'Spring warbler migration and the autumn monarch gathering draw birders from across the continent.' },
    { icon: '🍷', name: 'Essex County Wine Trail', dist: 'South county', text: 'Wineries along Lake Erie’s north shore, one of Canada’s warmest growing regions.' },
    { icon: '🏖️', name: 'Lake Erie Beaches', dist: '≈45 min', text: 'Warm, shallow water in summer. Check beach water-quality advisories before swimming.' },
    { icon: '🎣', name: 'Fishing', dist: 'Detroit River', text: 'Walleye in spring draw crowds of anglers. An Ontario licence is required.' },
  ],

  food: [
    { icon: '🍕', title: 'Windsor-Style Pizza', area: 'City-wide', areaLevel: 'danger', text: 'Shredded pepperoni and a sturdy crust — a local style Windsorites defend loudly.' },
    { icon: '🍝', title: 'Via Italia', area: 'Erie Street', areaLevel: 'olive', text: 'Little Italy’s restaurants, bakeries and gelato.' },
    { icon: '🥙', title: 'Middle Eastern Food', area: 'City-wide', areaLevel: 'purple', text: 'A large Lebanese and Arab community makes Windsor strong for shawarma and grills.' },
    { icon: '🥃', title: 'Whisky', area: 'Walkerville', areaLevel: 'gold', text: 'Canadian whisky made in the city since the 1850s.' },
    { icon: '🍷', title: 'Essex County Wine', area: 'South county', areaLevel: 'safe', text: 'Lake Erie North Shore wineries a short drive away.' },
    { icon: '🍅', title: 'Greenhouse Country', area: 'Leamington', areaLevel: 'blue', text: 'Leamington’s greenhouses produce vegetables for much of Canada; farm stands in summer.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Bird migration', text: 'Early spring by Canadian standards, with migration peaking at Point Pelee in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Hot and humid', text: 'One of the hottest, most humid places in Canada. Riverfront festivals and fireworks; thunderstorms are common.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest and monarchs', text: 'Wine harvest in Essex County and monarch butterflies gathering at Point Pelee.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Grey and mild-ish', text: 'Milder than most of Canada but grey, with ice on the river and occasional heavy snow.' },
  ],

  gettingThere: [
    {
      icon: '🛂',
      title: 'From Detroit',
      text: 'Three crossings: the Ambassador Bridge, the Detroit–Windsor Tunnel into downtown, and the Gordie Howe International Bridge (opened July 2026). All need a passport or equivalent; check border wait times.',
      time: '≈5–15 min plus border',
    },
    {
      icon: '🚆',
      title: 'By Train — VIA Rail',
      text: 'Windsor is the western end of VIA Rail’s Québec City–Windsor corridor, with trains to London and Toronto.',
      time: '≈4h from Toronto',
    },
    {
      icon: '🚗',
      title: 'By Car — Highway 401',
      text: 'Highway 401 ends in Windsor, connecting to the new Gordie Howe bridge. Heavy truck traffic.',
      time: '≈3.5h from Toronto',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Windsor International Airport has limited flights. Detroit Metropolitan (DTW) across the border is a major hub but means a border crossing.',
      time: '≈30 min to DTW plus border',
    },
  ],

  stay: [
    {
      icon: '🌉',
      title: 'Downtown Riverfront',
      area: 'Walkable · Skyline views',
      text: 'Hotels on the river with views of Detroit, including the casino resort.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Windsor+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Windsor%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🥃',
      title: 'Walkerville',
      area: 'Heritage · Quieter',
      text: 'Short-term rentals and small inns in the historic district.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Walkerville+Windsor', level: 'blue' },
      ],
    },
    {
      icon: '🍷',
      title: 'Essex County',
      area: 'Wine country · Car needed',
      text: 'Inns and B&Bs near the wineries and Lake Erie.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kingsville+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Transit Windsor',
      text: 'City buses cover downtown, the university, the college and suburbs. A new Umo payment system launched on 5 October 2026; exact cash is still accepted. Point Pelee and the wine country need a car.',
      linkLabel: 'Transit Windsor',
      linkUrl: 'https://www.citywindsor.ca/residents/transit-windsor/fares',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'The city’s fares page lists the adult cash fare below, including a two-hour transfer (no date is shown). Confirm current fares, especially after the switch to Umo.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (exact): $3.95', 'Includes 2-hour transfer', 'Umo app and card from Oct 2026'],
        },
        linkLabel: 'Fares and passes',
        linkUrl: 'https://www.citywindsor.ca/residents/transit-windsor/fares',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way around Essex County.' },
          { icon: '🚲', title: 'Bike', text: 'The Riverfront Trail and a growing network of bike lanes.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Available; cross-border trips need a driver who can cross.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the riverfront and Walkerville are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Check live border wait times for all three crossings before you go. The tunnel is quickest for downtown-to-downtown trips; the bridges suit highway traffic.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Windsor hotels and short-term rentals charge a 6% Municipal Accommodation Tax (since April 2025) for stays of 30 days or fewer, and HST applies on top of it. Across the river, Michigan prices are in US dollars with US taxes.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Windsor / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 13% HST + 6% MAT' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍷', label: 'Wine and alcohol: 13% HST' },
      { icon: '🎟️', label: 'Tours and admissions: 13% HST' },
    ],
    exempt: [
      { icon: '🌆', label: 'Riverfront Trail and parks: free' },
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '🛏️', label: 'Stays over 30 days: no MAT' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', title: 'Passports', text: 'Crossing to Detroit requires a passport or other approved document, and returning to Canada means customs. Check what you can bring back.' },
    { icon: '💵', title: 'Two Currencies', text: 'US dollars are often accepted near the border but at poor rates. Use cards or Canadian cash.' },
    { icon: '🌡️', title: 'Heat & Humidity', text: 'Summer heat and humidity are among the highest in Canada. Watch for heat warnings.' },
    { icon: '🧭', title: 'Detroit Is North', text: 'Because the river bends, Detroit lies north of downtown Windsor — a favourite local fact.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as Detroit.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Transit Windsor moved to Umo in October 2026; exact cash still works.' },
    { icon: '🪶', title: 'Whose Land', text: 'Windsor is on the traditional territory of the Three Fires Confederacy — the Ojibwe, Odawa and Potawatomi. Caldwell First Nation and Walpole Island First Nation are the nearest First Nations.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Windsor Regional Hospital — Ouellette Campus', '1030 Ouellette Avenue', 'Emergencies: call 911'] },
  ],
};

export default WINDSOR;
