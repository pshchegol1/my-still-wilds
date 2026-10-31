// North Battleford — данные страницы /city/north-battleford (САСКАЧЕВАН)
// Видео Норт-Батлфорда в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — город сверху осенью, автор Quintin
// Soloviev, октябрь 2025, CC BY 4.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года (13 836).
// Транспорт — cityofnb.ca: только будни, $4 наличными, месяц $60
// (страница без даты — «уточняйте»). Больница — Battlefords Union
// Hospital, 1092 107th St (24/7); Saskatchewan Hospital — психиатрия, без
// приёмного отделения. Saskatchewan не переводит часы (UTC-6).
// Fort Battleford, могила Battleford Eight, Allen Sapp, WDM — из общих
// знаний.

export const NORTH_BATTLEFORD = {
  slug: 'north-battleford',
  name: 'North Battleford',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Battlefords',
  accentLevel: 'gold',
  heroIcon: '🏞️',
  heroImage: '/Cities/NorthBattleford/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.7575, lon: -108.2861 },
  subtitle: 'Where Two Rivers Meet History',
  description:
    'North Battleford faces the old town of Battleford across the North Saskatchewan River, near where the Battle River joins it. Together “the Battlefords” hold some of the most important — and painful — history of the Canadian West, from the first capital of the North-West Territories to the events of 1885, alongside a gallery devoted to Cree artist Allen Sapp.',

  actions: [
    { label: 'Explore North Battleford', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13.8K (2021)' },
    { label: 'Metro (Battlefords)', value: '≈19.4K' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Saskatoon', value: '≈1 h 45 min by car' },
    { label: 'Rivers', value: 'North Saskatchewan · Battle' },
  ],

  badges: ['River Valley', 'Prairie History', 'Cree Art'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '13,836', label: 'People in the 2021 census — the larger of the two Battlefords', level: 'blue' },
    { value: '1885', label: 'Year of the North-West Resistance; eight Indigenous men were hanged at Fort Battleford that November', level: 'danger' },
    { value: 'Mon–Fri', label: 'City buses run on weekdays only', level: 'gold' },
    { value: '$4', label: 'An adult bus fare in cash; kids 6 and under ride free', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown North Battleford', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'gold', meta: 'Main streets, galleries and the civic centre' },
    { name: 'Battleford (town)', icon: '🏰', tag: '🏰 Old capital', tagLevel: 'purple', meta: 'Separate town across the river with Fort Battleford and historic buildings' },
    { name: 'River Valley', icon: '🌊', tag: '🌊 Valley', tagLevel: 'blue', meta: 'Trails and lookouts above the North Saskatchewan' },
    { name: 'Central Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Paths and green space in the city' },
    { name: 'Highway 16 Strip', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and the Western Development Museum' },
    { name: 'King Hill', icon: '🌄', tag: '🌄 Lookout', tagLevel: 'olive', meta: 'Panoramic views over the city and valley' },
  ],

  attractions: [
    {
      name: 'Fort Battleford National Historic Site',
      icon: '🏰',
      text: 'A North-West Mounted Police post established in 1876 in Battleford, across the river. Parks Canada interprets its role in the 1885 Resistance from several perspectives. Seasonal.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Summer', level: 'caution' }],
    },
    {
      name: 'Gravesite of the Battleford Eight',
      icon: '🪶',
      text: 'Near Fort Battleford, the mass grave of eight Cree and Assiniboine men hanged in 1885 — a place of remembrance. Please visit respectfully.',
      tags: [{ label: 'Memorial', level: 'purple' }],
    },
    {
      name: 'Allen Sapp Gallery',
      icon: '🖼️',
      text: 'A gallery dedicated to Allen Sapp, the celebrated Cree painter whose works record everyday life on the nearby Red Pheasant reserve.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Western Development Museum',
      icon: '🚜',
      text: 'The North Battleford branch tells the story of prairie farming, with a heritage village and historic machinery.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Government House (Battleford)',
      icon: '🏛️',
      text: 'Battleford was the first capital of the North-West Territories; the historic Government House site recalls that era.',
      tags: [{ label: 'Heritage', level: 'purple' }],
    },
    {
      name: 'River Valley Trails',
      icon: '🚶',
      text: 'Walking and cycling paths along the North Saskatchewan valley, with views of the bridges linking the Battlefords.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Rivers and Prairie Lakes',
  outdoor: [
    { icon: '🏖️', name: 'The Battlefords Provincial Park', dist: '≈40 min north', text: 'Beaches, camping and fishing on Jackfish Lake.' },
    { icon: '🛶', name: 'River Paddling', dist: 'North Saskatchewan', text: 'Experienced paddlers can float the wide river — check currents and sandbars.' },
    { icon: '🎣', name: 'Fishing', dist: 'Jackfish & Murray lakes', text: 'Pike and walleye. Licence required.' },
    { icon: '🚶', name: 'Valley Walks', dist: 'In the city', text: 'Trails with views across the river.' },
    { icon: '⛸️', name: 'Winter Sports', dist: 'Rinks & trails', text: 'Outdoor rinks and snowmobile trails.' },
    { icon: '🌌', name: 'Northern Lights', dist: 'Outside town', text: 'Clear winter nights can bring the aurora this far north.' },
  ],

  food: [
    { icon: '🍔', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and classic diners.' },
    { icon: '🫓', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread at events and some cafés.' },
    { icon: '🥟', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie comfort food.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🐟', title: 'Lake Fish', area: 'Restaurants', areaLevel: 'blue', text: 'Pickerel from northern lakes.' },
    { icon: '🫐', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'River ice breaks up in April; the valley greens in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Heritage season', text: 'Fort Battleford and museums are open; lake days at Jackfish Lake.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden valley', text: 'Golden aspen in the river valley and harvest on the fields.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters; many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Yellowhead Highway (Highway 16) links the Battlefords with Saskatoon to the southeast and Lloydminster to the west.',
      time: '≈1 h 45 min from Saskatoon',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'North Battleford has a regional airport; most travellers fly into Saskatoon (YXE).',
      time: '≈1 h 45 min from YXE',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches may stop here on the Yellowhead route. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no regular passenger rail service to North Battleford.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'Highway 16',
      area: 'Hotels',
      text: 'Most hotels are along the Yellowhead.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Battleford', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=North%20Battleford%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near the galleries.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Battleford+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏖️',
      title: 'Jackfish Lake',
      area: 'Camping & cabins',
      text: 'Provincial park campgrounds and lake cabins to the north.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'North Battleford Transit',
      text: 'The city runs a small bus service on weekdays only, with limited hours. Plan on a car or taxi for evenings, weekends and trips to Battleford.',
      linkLabel: 'City public transportation',
      linkUrl: 'https://www.cityofnb.ca/roads-parking-transportation/public-transportation/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the City of North Battleford transit page (undated — confirm before you travel). Exact change is needed for cash fares.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00', '8-ride card: $24.00', 'Monthly pass: $60.00', 'Kids 6 and under: free'],
        },
        linkLabel: 'Fares & schedule',
        linkUrl: 'https://www.cityofnb.ca/roads-parking-transportation/public-transportation/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Essential for Fort Battleford and the lakes.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown is walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Valley trails in summer.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Heritage tip:',
      text: 'Visit Fort Battleford and the Battleford Eight gravesite on the same morning, then cross back for the Allen Sapp Gallery.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any local fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'North Battleford / SK', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + PST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', label: 'Museum admission: GST + PST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚶', label: 'River valley trails: free' },
      { icon: '🌄', label: 'King Hill lookout: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year. Lloydminster and Alberta to the west use the same clock since Alberta stopped changing time in November 2026.' },
    { icon: '🚌', title: 'Weekday Buses', text: 'City buses do not run on weekends.' },
    { icon: '🪶', title: 'Sensitive History', text: 'The events of 1885 remain deeply significant for local First Nations — approach memorial sites with respect.' },
    { icon: '❄️', title: 'Winter', text: 'Temperatures often fall below −25 °C. Plug in your car overnight.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Bring repellent for summer evenings in the valley and at the lakes.' },
    { icon: '🏥', title: 'Right Hospital', text: 'Saskatchewan Hospital North Battleford is psychiatric only — for emergencies go to Battlefords Union Hospital.' },
    { icon: '🪶', title: 'Whose Land', text: 'The Battlefords are on Treaty 6 territory, the traditional lands of the Cree, Assiniboine (Nakota) and other First Nations, and the homeland of the Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Battlefords Union Hospital', '1092 107th St', 'Emergency 24/7 · call 911'] },
  ],
};

export default NORTH_BATTLEFORD;
