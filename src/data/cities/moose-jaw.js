// Moose Jaw — данные страницы /city/moose-jaw (Мус-Джо, САСКАЧЕВАН)
// Видео Мус-Джо в бесплатных банках нет (Pexels: только лоси, не город).
// В шапке фото с Wikimedia Commons — центр Мус-Джо сверху с ж/д путями,
// автор Quintin Soloviev, август 2026, CC BY 4.0 — лицензия требует
// автора, отсюда heroCredit.
// Население — перепись 2021 года (33 665; Moose Jaw Today, StatCan).
// Тариф наличными $3.25 — с 1 февраля 2023 (Discover Moose Jaw); цены
// проездных не нашли — «уточняйте». Больница — SHA (55 Diefenbaker Dr).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Туннели, Temple Gardens, Snowbirds в 15 Wing, Mac the Moose, мурали —
// из общих знаний.

export const MOOSE_JAW = {
  slug: 'moose-jaw',
  name: 'Moose Jaw',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Friendly City',
  accentLevel: 'caution',
  heroIcon: '🫎',
  heroImage: '/Cities/MooseJaw/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.3934, lon: -105.5519 },
  subtitle: 'Tunnels, Mineral Springs and Snowbirds',
  description:
    'A prairie railway town with a famously quirky name, Moose Jaw hides a network of old tunnels under its downtown, soaks visitors in a geothermal mineral pool and is home base for Canada’s Snowbirds aerobatic team. Murals cover its heritage buildings, and a giant moose statue greets you off the highway.',

  actions: [
    { label: 'Explore Moose Jaw', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈33.7K (2021)' },
    { label: 'Rank in Saskatchewan', value: '4th largest' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈45 min by car' },
    { label: 'Air Base', value: '15 Wing Moose Jaw' },
  ],

  badges: ['Tunnels', 'Mineral Spa', 'Snowbirds'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '33,665', label: 'People in the 2021 census — Saskatchewan’s fourth-largest city', level: 'blue' },
    { value: '15 Wing', label: 'The air force base that is home to the Snowbirds aerobatic team', level: 'purple' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks', level: 'gold' },
    { value: '$3.25', label: 'A city bus ride in cash (since 2023 — confirm current fares)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Historic Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Main Street heritage buildings, murals and tunnel tours' },
    { name: 'River Street', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: 'Old town', tagLevel: 'danger', meta: 'Once the rowdy hotel strip near the station; now the spa and tunnel tours' },
    { name: 'Crescent Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Central park with an amphitheatre, art museum and creek' },
    { name: 'Wakamow Valley', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Valley', tagLevel: 'blue', meta: 'River valley parkland with trails along the Moose Jaw River' },
    { name: 'Tourism Info & Mac', icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', tag: 'Photo stop', tagLevel: 'olive', meta: 'Mac the Moose beside the Trans-Canada' },
    { name: '15 Wing', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Base', tagLevel: 'purple', meta: 'Military flight training base south of the city' },
  ],

  attractions: [
    {
      name: 'Tunnels of Moose Jaw',
      icon: '🕯️', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'Costumed guided tours under the downtown streets tell stories of Prohibition-era bootlegging and of Chinese immigrants in the early 1900s. Local legend links the tunnels to Al Capone — a tale that has never been proven.',
      tags: [{ label: 'Paid tours', level: 'gold' }, { label: 'Book ahead', level: 'caution' }],
    },
    {
      name: 'Temple Gardens Mineral Spa',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'A hotel spa with a rooftop pool filled with warm mineral water drawn from deep underground — a favourite in winter, when steam rises into the cold air.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Mac the Moose',
      icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A giant moose statue at the visitor centre by the Trans-Canada Highway — the city’s friendly mascot and an essential photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Roadside', level: 'danger' }],
    },
    {
      name: 'Downtown Murals',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Dozens of large murals on heritage buildings illustrate the city’s history — pick up a walking-tour map.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Self-guided', level: 'purple' }],
    },
    {
      name: 'Western Development Museum',
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      text: 'The Moose Jaw branch focuses on transportation history — trains, planes and vintage cars — with a gallery on the Snowbirds.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Snowbirds Air Shows',
      icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg',
      text: 'The Canadian Forces Snowbirds train from 15 Wing; when an air show or practice is scheduled, the sky over the city fills with formation flying. Check dates.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Spectacular', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Valley Trails and Prairie Lakes',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Wakamow Valley', dist: 'In the city', text: 'Trails, bridges and picnic areas along the Moose Jaw River.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Buffalo Pound Provincial Park', dist: '≈30 min northeast', text: 'A long valley lake with beaches, trails and a small bison herd.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Valley paths', text: 'Easy riding on park paths and quiet streets.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Crescent Park', text: 'Outdoor skating when it freezes.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets and summer thunderstorms over open fields.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Lakes & sloughs', text: 'Waterfowl and shorebirds in spring and fall.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Main Street', areaLevel: 'gold', text: 'Classic prairie diners and family restaurants.' },
    { icon: '🥡', iconSrc: '/icons/attractions/ph_package-thin.svg', title: 'Chinese-Canadian', area: 'Downtown', areaLevel: 'danger', text: 'A long tradition of small-town Chinese-Canadian restaurants.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'olive', text: 'Coffee shops in heritage buildings.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'City', areaLevel: 'purple', text: 'Local taprooms and pubs.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Saskatchewan beef on many menus.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Bakeries', areaLevel: 'safe', text: 'Berry pies and preserves.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Mild days return; the valley greens up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot and sunny — tunnel tours, patios, and possible Snowbirds shows.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Crisp days and golden fields around the city.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Spa season', text: 'Cold and windy — the perfect time for the outdoor mineral pool.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) runs past the city, about 70 km west of Regina.',
      time: '≈45 min from Regina',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Regina International (YQR) is the nearest commercial airport.',
      time: '≈50 min by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches between Regina and Calgary may stop here. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail service to Moose Jaw.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      title: 'Downtown',
      area: 'Near the spa & tunnels',
      text: 'Stay steps from Temple Gardens, the tunnels and Main Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moose+Jaw', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Moose%20Jaw%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway Hotels',
      area: 'Trans-Canada',
      text: 'Chain hotels by the highway near Mac the Moose.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moose+Jaw+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Buffalo Pound',
      area: 'Camping',
      text: 'Provincial park campgrounds by the lake.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Moose Jaw Transit',
      text: 'The city runs a small bus network linking downtown with the main neighbourhoods. Service is limited on evenings and Sundays.',
      linkLabel: 'City of Moose Jaw',
      linkUrl: 'https://moosejaw.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'The adult cash fare rose to $3.25 on February 1, 2023; passes were not changed then. We could not find a current fare table — confirm with the city.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $3.25 (since 2023)', 'Day & monthly passes: available', 'Discounts: students, seniors 60+', 'Confirm current prices'],
        },
        linkLabel: 'City of Moose Jaw',
        linkUrl: 'https://moosejaw.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the spa, tunnels and murals are close together.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Buffalo Pound and day trips.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Wakamow Valley paths.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Day-trip tip:',
      text: 'From Regina, Moose Jaw makes a perfect day: tunnel tour in the morning, mural walk at lunch, mineral pool in the evening.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Moose Jaw / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', label: 'Spa admission: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tunnel tours: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', label: 'Mac the Moose: free' },
      { icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', label: 'Mural walk: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year.' },
    { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Book Tunnel Tours', text: 'Tours run on set schedules and can sell out on summer weekends.' },
    { icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', title: 'Pack a Swimsuit', text: 'Even in winter — the outdoor mineral pool is the city’s best warm-up.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Strong winds and blowing snow in winter — check highway conditions.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Thunderstorms can build fast on hot afternoons.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Bring repellent for the valley trails in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Moose Jaw is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dr. F.H. Wigmore Regional Hospital', '55 Diefenbaker Dr', 'Emergencies: call 911'] },
  ],
};

export default MOOSE_JAW;
