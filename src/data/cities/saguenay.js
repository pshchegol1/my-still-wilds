// Saguenay — данные страницы /city/saguenay (Сагеней, КВЕБЕК)
// Видео Сагенея в бесплатных банках нет: Pexels по "saguenay fjord" отдаёт
// норвежские фьорды. В шапке фото с Wikimedia Commons — река Сагеней и
// Чикутими (собор, Старый порт) с моста Sainte-Anne, автор 0x010C,
// сентябрь 2016, CC BY-SA 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (144 723).
// Тарифы STS — со страницы sts.saguenay.ca/tarifs-et-distributeurs/tarifs.
// Больница — адрес из репертуара Santé Québec.
// Слияние 2002 года, Пульпери, потоп 1996 года, алюминиевый мост в Арвиде,
// поезд VIA до Жонкьера — из общих знаний.

export const SAGUENAY = {
  slug: 'saguenay',
  name: 'Saguenay',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Saguenay–Lac-Saint-Jean',
  accentLevel: 'safe',
  heroIcon: '🌊',
  heroImage: '/Cities/Saguenay/hero.jpg',
  heroCredit: 'Photo: 0x010C / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4284, lon: -71.0685 },
  subtitle: 'City at the Head of the Fjord',
  description:
    'Where the Saguenay River widens into one of the world’s great fjords, three old towns — Chicoutimi, Jonquière and La Baie — became a single city in 2002. Saguenay is the capital of a proud, far-flung region: a base for kayaking between cliffs, ice fishing on the bay, cycling around Lac Saint-Jean and eating wild blueberries by the handful.',

  actions: [
    { label: 'Explore Saguenay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈145K (2021)' },
    { label: 'Boroughs', value: 'Chicoutimi · Jonquière · La Baie' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Québec City', value: '≈2 h 30 min by car' },
    { label: 'Fjord to Tadoussac', value: '≈100 km' },
  ],

  badges: ['Saguenay Fjord', 'Three Boroughs', 'Blueberry Country'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '144,723', label: 'People in the 2021 census — capital of the Saguenay–Lac-Saint-Jean region', level: 'blue' },
    { value: '2002', label: 'Chicoutimi, Jonquière, La Baie and smaller towns merge into the City of Saguenay', level: 'purple' },
    { value: '1996', label: 'The Saguenay flood — the “little white house” in Chicoutimi survived the torrent and became its symbol', level: 'danger' },
    { value: '$4', label: 'A single STS bus ride in cash; tickets are $3.70', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Chicoutimi', icon: '⛪', tag: '⛪ Centre', tagLevel: 'gold', meta: 'Downtown on the hill · Cathedral · Old Port on the river · Rue Racine bars' },
    { name: 'Jonquière', icon: '🎭', tag: '🎭 West', tagLevel: 'purple', meta: 'Rue Saint-Dominique nightlife · Cégep town · Rivière-aux-Sables park' },
    { name: 'Arvida', icon: '🏭', tag: '🏭 Heritage', tagLevel: 'blue', meta: 'Planned aluminium company town · Aluminium bridge over the Saguenay' },
    { name: 'La Baie', icon: '⚓', tag: '⚓ The bay', tagLevel: 'safe', meta: 'Cruise-ship quay on Baie des Ha! Ha! · Musée du Fjord · Ice-fishing village in winter' },
    { name: 'Laterrière', icon: '🌲', tag: '🌲 South', tagLevel: 'olive', meta: 'Village atmosphere on the road to Québec City' },
    { name: 'Shipshaw', icon: '⚡', tag: '⚡ North shore', tagLevel: 'caution', meta: 'Hydroelectric station · Rural north bank of the river' },
  ],

  attractions: [
    {
      name: 'Saguenay Fjord',
      icon: '🏞️',
      text: 'Cliffs rise straight out of dark water for about 100 km from Saguenay to Tadoussac. See it from a cruise boat, a sea kayak or the trails of Fjord-du-Saguenay National Park, which starts a short drive from La Baie.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Park fees apply', level: 'caution' }],
    },
    {
      name: 'La Pulperie de Chicoutimi',
      icon: '🏭',
      text: 'The stone buildings of a huge early-20th-century pulp mill on the Chicoutimi River, now a regional museum. The “little white house” that stood firm in the 1996 flood is part of the site.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Old Port of Chicoutimi',
      icon: '⚓',
      text: 'A waterfront park and marina on the Saguenay below downtown, with a promenade, summer shows and views across to the north shore.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer events', level: 'blue' }],
    },
    {
      name: 'Musée du Fjord',
      icon: '🐟',
      text: 'A museum and aquarium in La Baie devoted to the fjord’s unusual mix of fresh and salt water and the creatures that live in it.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Arvida Aluminium Bridge',
      icon: '🌉',
      text: 'Arvida was built as a company town for aluminium production, and its bridge over the Saguenay is made of aluminium — an early showcase for the metal that still drives the local economy.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Industrial heritage', level: 'blue' }],
    },
    {
      name: 'Rue Racine & Rue Saint-Dominique',
      icon: '🍻',
      text: 'The main streets of downtown Chicoutimi and Jonquière, lined with microbreweries, bars and restaurants — lively on summer evenings.',
      tags: [{ label: 'Nightlife', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Fjord, Lake and Forest',
  outdoor: [
    { icon: '🛶', name: 'Sea Kayaking', dist: 'Saguenay Fjord', text: 'Guided trips between the cliffs. Water is cold year-round and tides are strong — go with an outfitter.' },
    { icon: '🥾', name: 'Fjord-du-Saguenay National Park', dist: '≈30–60 min', text: 'Sépaq park with cliff-top trails, lookouts and multi-day hikes along the fjord.' },
    { icon: '🎣', name: 'Ice Fishing', dist: 'La Baie · winter', text: 'A village of fishing huts appears on the frozen Baie des Ha! Ha! each winter.' },
    { icon: '🚲', name: 'Véloroute des Bleuets', dist: 'Lac Saint-Jean · ≈1 h west', text: 'A long cycling loop around Lac Saint-Jean through blueberry country.' },
    { icon: '⛷️', name: 'Skiing', dist: 'Le Valinouët · Mont Bélu', text: 'Ski hills north of the river and in La Baie, with deep snow.' },
    { icon: '🏘️', name: 'Sainte-Rose-du-Nord', dist: '≈45 min', text: 'A tiny village tucked into a cove on the north shore of the fjord.' },
  ],

  food: [
    { icon: '🫐', title: 'Wild Blueberries', area: 'Region', areaLevel: 'blue', text: 'The region is famous for its bleuets — in pies, chocolate-covered, or fresh in August.' },
    { icon: '🥧', title: 'Tourtière du Lac-Saint-Jean', area: 'Region', areaLevel: 'danger', text: 'A deep, slow-baked meat-and-potato pie, the regional signature dish.' },
    { icon: '🍻', title: 'Microbreweries', area: 'Chicoutimi · Jonquière', areaLevel: 'gold', text: 'A strong craft-beer culture on Rue Racine and Rue Saint-Dominique.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes.' },
    { icon: '🧀', title: 'Cheese Curds', area: 'Region', areaLevel: 'safe', text: 'Fresh, squeaky curds from regional dairies.' },
    { icon: '🐟', title: 'Fjord Fish', area: 'La Baie', areaLevel: 'purple', text: 'Smelt and other fish from the fjord, especially in ice-fishing season.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late thaw', text: 'Snow lingers into April; black flies arrive in late May and June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fjord season', text: 'Warm days and long evenings — the season for cruises, kayaking and blueberries.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour on the cliffs', text: 'Bright colours along the fjord in late September; cruise ships call at La Baie.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Deep cold', text: 'Long and very cold, with plenty of snow — ice fishing, snowmobiling and skiing.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Route 175 crosses the Laurentides Wildlife Reserve from Québec City. Fill up before the reserve and check winter road conditions.',
      time: '≈2 h 30 min from Québec City',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Bagotville Airport (YBG) in La Baie, shared with a military base, has flights to Montréal.',
      time: 'Short hop from Montréal',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail runs a long, scenic Montréal–Jonquière line through the backcountry a few times a week. Check the current schedule.',
      time: 'Most of a day',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches connect Saguenay with Québec City.',
      time: '≈3 h',
    },
  ],

  stay: [
    {
      icon: '⛪',
      title: 'Chicoutimi',
      area: 'Downtown · Old Port',
      text: 'Hotels near Rue Racine and the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Chicoutimi+Saguenay', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saguenay%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓',
      title: 'La Baie',
      area: 'On the fjord',
      text: 'Inns by the bay, closest to the national park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=La+Baie+Saguenay', level: 'blue' },
      ],
    },
    {
      icon: '🎭',
      title: 'Jonquière',
      area: 'Nightlife · West end',
      text: 'Handy for Lac Saint-Jean and the VIA Rail station.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jonquiere+Saguenay', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'STS Buses',
      text: 'The Société de transport du Saguenay (STS) runs buses linking Chicoutimi, Jonquière and La Baie. Distances between the boroughs are long, so many visitors drive.',
      linkLabel: 'STS',
      linkUrl: 'https://sts.saguenay.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the STS fares page. Children under 5 ride free. Pay in exact cash, or load the Accès card at a distributor.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00 (exact)', 'Ticket: $3.70', 'Family day pass: $12.50', 'Monthly: $83.50'],
        },
        linkLabel: 'STS fares',
        linkUrl: 'https://sts.saguenay.ca/tarifs-et-distributeurs/tarifs',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'The easiest way between boroughs and to the fjord.' },
          { icon: '🚲', title: 'Bike share', text: 'Accès Vélo bikes in summer; free with a monthly STS pass.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in each borough.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown Chicoutimi and the Old Port are walkable — but hilly.' },
        ],
      },
    ],
    proTip: {
      label: 'Family tip:',
      text: 'The $12.50 family day pass covers one or two adults with up to four children aged 12 and under — but not two adults without kids.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Saguenay / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + QST' },
      { icon: '🚤', label: 'Fjord cruises and tours: GST + QST' },
      { icon: '🎟️', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '⚓', label: 'Old Port promenade: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French Only, Mostly', text: 'Saguenay is one of the most French-speaking cities in Canada. English is less common than in Montréal — a few words of French help.' },
    { icon: '🚗', title: 'Long Distances', text: 'The three boroughs are spread out along the river; plan on driving.' },
    { icon: '🛣️', title: 'Route 175', text: 'The road through the Laurentides reserve has long stretches without services and no cell signal in places. Watch for moose.' },
    { icon: '❄️', title: 'Real Winter', text: 'Winters are long and very cold. Winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '🦟', title: 'Bugs', text: 'Black flies and mosquitoes from late May into July — bring repellent for the trails.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Saguenay lies within Nitassinan, the ancestral territory of the Innu; the Innu community of Mashteuiatsh is on Lac Saint-Jean.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôpital de Chicoutimi', '305 Rue Saint-Vallier', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default SAGUENAY;
