// Lloydminster — данные страницы /city/lloydminster (Ллойдминстер, AB/SK)
// Видео Ллойдминстера в бесплатных банках нет; на Commons в основном
// фото магазинов.
// В шапке фото с Wikimedia Commons — ратуша сверху, вид на север вдоль
// границы Альберты и Саскачевана (красные пограничные столбы), автор
// Jason Whiting, июль 2014, CC BY-SA 4.0 — лицензия требует автора,
// отсюда heroCredit.
// Население — перепись 2021 года: 31 582 (19 739 AB + 11 843 SK).
// Налоги: SK-сторона — PST в городе обычно не взимается, кроме авто,
// жилья (lodging), связи и электричества для бизнеса (уведомление SK
// 2015/2017); AB-сторона — без PST, отели + 6% Tourism Levy с 1.04.2026.
// Время: город следует Альберте; Альберта с 1 ноября 2026 — UTC-6 круглый
// год (Bill 31); Саскачеван внёс закон, разрешающий Ллойдминстеру
// следовать за Альбертой (апрель 2026) — статус уточнить.
// Транспорт: регулярного автобуса нет; Border City Connects — по запросу
// для людей с ограниченной мобильностью (sk.211.ca).
// Больница — 3820 43 Ave (SK), 24/7, для жителей обеих провинций.
// Barr Colonists, 1903, пограничные столбы на 4-м меридиане — из общих
// знаний.

export const LLOYDMINSTER = {
  slug: 'lloydminster',
  name: 'Lloydminster',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan & Alberta · Border City',
  accentLevel: 'gold',
  heroIcon: '🧭',
  heroImage: '/Cities/Lloydminster/hero.jpg',
  heroCredit: 'Photo: Jason Whiting / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.2780, lon: -110.0050 },
  subtitle: 'One City, Two Provinces',
  description:
    'Lloydminster is Canada’s best-known border city, split between two provinces: the Alberta–Saskatchewan border runs right down its main street, marked by giant red survey posts. Founded in 1903 by British settlers of the Barr Colony, it is now a busy oil-and-farming hub where taxes, licence plates and even history lessons depend on which side of the street you stand on.',

  actions: [
    { label: 'Explore Lloydminster', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈31.6K (2021)' },
    { label: 'Split', value: '≈19.7K AB · ≈11.8K SK' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'To Edmonton', value: '≈2 h 30 min by car' },
    { label: 'To Saskatoon', value: '≈3 h by car' },
  ],

  badges: ['Border City', 'Two Provinces', 'Barr Colony'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '31,582', label: 'People in the 2021 census — 19,739 in Alberta and 11,843 in Saskatchewan', level: 'blue' },
    { value: '1903', label: 'The Barr Colonists, settlers from Britain, found the town on the future provincial border', level: 'purple' },
    { value: '0%', label: 'Provincial sales tax on most purchases — on either side of the line (lodging excepted)', level: 'safe' },
    { value: 'UTC-6', label: 'The whole city follows Alberta Time, which no longer changes from November 2026', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Meridian Avenue (50th Ave)', icon: '🧭', tag: '🧭 Border', tagLevel: 'gold', meta: 'The provincial boundary down the middle of the street, with the red border markers' },
    { name: 'Downtown', icon: '🏙️', tag: '🏙️ Centre', tagLevel: 'purple', meta: 'City Hall, shops and cafés straddling the border' },
    { name: 'Alberta Side', icon: '🏔️', tag: '🏔️ West', tagLevel: 'blue', meta: 'Most of the city’s residents and newer neighbourhoods' },
    { name: 'Saskatchewan Side', icon: '🌾', tag: '🌾 East', tagLevel: 'olive', meta: 'The hospital, older streets and a growing east end' },
    { name: 'Bud Miller All Seasons Park', icon: '🌳', tag: '🌳 Park', tagLevel: 'safe', meta: 'Large park with trails, a lake and gardens' },
    { name: 'Highway 16 Strip', icon: '🛣️', tag: '🛣️ Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and big-box stores on the Yellowhead' },
  ],

  attractions: [
    {
      name: 'Border Markers',
      icon: '🧭',
      text: 'Tall red posts styled like surveyors’ markers stand along the boundary on Meridian Avenue. Stand with one foot in Alberta and one in Saskatchewan — the classic Lloydminster photo.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
    },
    {
      name: 'Lloydminster Cultural & Science Centre',
      icon: '🏛️',
      text: 'The city’s museum and cultural complex, telling the story of the Barr Colony and the region’s natural history. Check opening hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Bud Miller All Seasons Park',
      icon: '🌳',
      text: 'A large park with walking trails, a small lake, gardens and winter skating.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
    },
    {
      name: 'City Hall on the Border',
      icon: '🏢',
      text: 'One city government runs both halves of town — City Hall stands right beside the provincial boundary.',
      tags: [{ label: 'Free to view', level: 'safe' }],
    },
    {
      name: 'Heavy Oil Country',
      icon: '🛢️',
      text: 'Lloydminster sits in the middle of a heavy-oil region; refineries and oilfield services drive the local economy.',
      tags: [{ label: 'Industry', level: 'danger' }],
    },
    {
      name: 'Prairie & Parkland Day Trips',
      icon: '🚗',
      text: 'Lakes and provincial parks in both provinces are within an hour or two — from the Battlefords to the lakes north of the city.',
      tags: [{ label: 'Car needed', level: 'caution' }],
    },
  ],

  outdoorHeading: 'Parkland on the Border',
  outdoor: [
    { icon: '🚶', name: 'City Trails', dist: 'Bud Miller Park', text: 'Walking paths, a lake and gardens in town.' },
    { icon: '🏖️', name: 'Nearby Lakes', dist: '≈30–60 min', text: 'Small lakes and provincial parks on both sides of the border.' },
    { icon: '🎣', name: 'Fishing', dist: 'Area lakes', text: 'Pike and walleye. Fish with the licence of the province you are in.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'City park', text: 'Outdoor skating when it freezes.' },
    { icon: '🦆', name: 'Birding', dist: 'Sloughs', text: 'Waterfowl in the prairie potholes in spring and fall.' },
    { icon: '🌌', name: 'Northern Lights', dist: 'Outside town', text: 'Clear winter nights can bring the aurora.' },
  ],

  food: [
    { icon: '🥩', title: 'Steakhouses', area: 'City-wide', areaLevel: 'danger', text: 'Alberta and Saskatchewan beef on many menus.' },
    { icon: '🍔', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and road-trip stops.' },
    { icon: '🥟', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie Ukrainian comfort food.' },
    { icon: '☕', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🍻', title: 'Pubs', area: 'City-wide', areaLevel: 'blue', text: 'Oil-town pubs and taprooms.' },
    { icon: '🫐', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'Late thaw; the parkland greens up in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fair season', text: 'Warm days, long evenings and summer exhibitions.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden aspen and harvest fields.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters — often below −25 °C.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Yellowhead Highway (Highway 16) runs through the city, linking Edmonton to the west with the Battlefords and Saskatoon to the east.',
      time: '≈2 h 30 min from Edmonton',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Lloydminster has a small regional airport; most travellers fly into Edmonton (YEG) or Saskatoon (YXE).',
      time: '≈2 h 45 min from YEG',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches on the Yellowhead may stop here. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger rail service to Lloydminster.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️',
      title: 'Highway 16',
      area: 'Hotels',
      text: 'Most hotels line the Yellowhead on both sides of the border.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lloydminster', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Lloydminster%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Downtown',
      area: 'Near the markers',
      text: 'A few options close to Meridian Avenue.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lloydminster+Alberta', level: 'blue' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Lake Campgrounds',
      area: 'Nearby parks',
      text: 'Provincial park campgrounds within an hour.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'No City Buses',
      text: 'Lloydminster has no regular public bus service. Border City Connects runs pre-booked door-to-door rides for people with mobility challenges; everyone else drives, cycles or takes a taxi.',
      linkLabel: 'City transportation',
      linkUrl: 'https://www.lloydminster.ca/home-property-utilities/roads-sidewalks-and-transportation/transportation/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis & Accessible Rides',
        text: 'Local taxis serve both sides of the city. Border City Connects (for riders with mobility challenges) should be booked 24 hours ahead; check its current fares.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Accessible rides: book 24 h ahead', 'Taxis: local', 'Car: the norm'],
        },
        linkLabel: 'City transportation',
        linkUrl: 'https://www.lloydminster.ca/home-property-utilities/roads-sidewalks-and-transportation/transportation/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way around a spread-out city.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the border markers are walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Park paths in summer.' },
          { icon: '🚕', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Check which province an address is in — it matters for some taxes, licences and services, even though one city runs both halves.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Mostly 5% GST — on both sides',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, and under special rules most purchases on Lloydminster’s Saskatchewan side are also exempt from Saskatchewan PST — so you usually pay just 5% GST. Exceptions on the Saskatchewan side include vehicles, lodging and telecommunications. Hotels on the Alberta side add Alberta’s 6% Tourism Levy (from April 1, 2026).',
    comparison: [
      { label: 'Lloydminster (most goods)', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Rest of Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels, AB side: GST + 6% Tourism Levy' },
      { icon: '🏨', label: 'Hotels, SK side: GST + SK PST (lodging is not exempt)' },
      { icon: '🍽️', label: 'Restaurant meals: GST' },
      { icon: '🚗', label: 'Vehicles (SK side): PST applies' },
    ],
    exempt: [
      { icon: '🛍️', label: 'Most goods on either side: no provincial tax' },
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🧭', label: 'Border markers: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', title: 'One Clock', text: 'The whole city follows Alberta. From November 1, 2026 Alberta stays on UTC-6 all year — the same as the rest of Saskatchewan. Saskatchewan has moved to update its law to match; check locally if in doubt.' },
    { icon: '🧾', title: 'Tax Quirk', text: 'Most shopping is GST-only on both sides — but hotels, vehicles and some services are taxed differently by province.' },
    { icon: '🏥', title: 'One Hospital', text: 'The hospital is on the Saskatchewan side but serves both provinces — bring your provincial health card.' },
    { icon: '🎣', title: 'Two Licences', text: 'Fishing and hunting licences depend on which province you are in.' },
    { icon: '❄️', title: 'Winter', text: 'Temperatures often drop below −25 °C. Plug in your car overnight.' },
    { icon: '🚗', title: 'Car Town', text: 'With no city buses, plan to drive or use taxis.' },
    { icon: '🪶', title: 'Whose Land', text: 'Lloydminster is on Treaty 6 territory, the traditional lands of the Cree and other First Nations, and the homeland of the Métis; Onion Lake Cree Nation lies nearby.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Lloydminster Hospital · 3820 43 Ave', 'Emergency 24/7 · 306-820-6033', 'Emergencies: call 911'] },
  ],
};

export default LLOYDMINSTER;
