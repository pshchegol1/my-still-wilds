// Québec City — данные страницы /city/quebec-city
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Ali Soheil, "aerial footage of Château Frontenac". Проверено по
// кадрам: Шато Фронтенак, терраса Дюфферен, река Св. Лаврентия. Исходник
// был в HDR (HLG): переведён в SDR, обрезан с 2730×1440 до 16:9 и пережат
// до ~6,3 МБ, 23 с; постер — первый кадр.
// Население — перепись 2021 года (город, без агломерации).
// Тариф RTC: на 2026 сайт даёт разовую поездку $3.85 и дневной $10.50;
// на старой странице $3.15 — на странице сказано сверяться.
// Адрес Hôtel-Dieu de Québec — из общих знаний, в этот раз не проверен.

export const QUEBEC_CITY = {
  slug: 'quebec-city',
  name: 'Québec City',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Capitale-Nationale',
  accentLevel: 'safe',
  heroIcon: '🏰',
  heroImage: '/Cities/QuebecCity/hero-poster.jpg',
  heroVideo: '/Cities/QuebecCity/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.8139, lon: -71.208 },
  subtitle: 'The Walled City on the Cliff',
  description:
    'The capital of Quebec and one of the oldest European cities in North America, set on a cliff where the St. Lawrence suddenly narrows — which is what the Algonquian word kébec means. Its old town is still ringed by stone walls, the only fortified city north of Mexico to keep nearly all of them, and French is spoken almost everywhere.',

  actions: [
    { label: 'Explore Québec City', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈549K (2021)' },
    { label: 'Language', value: 'French' },
    { label: 'Old Québec', value: 'UNESCO 1985' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Montréal', value: '≈250 km · 2.5h' },
    { label: 'Founded', value: '1608' },
  ],

  badges: ['Walled City', 'French-Speaking', 'UNESCO Old Town'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1608', label: 'Samuel de Champlain founds a trading post at the foot of the cliff', level: 'gold' },
    { value: '1759', label: 'The British defeat the French on the Plains of Abraham, in a battle that lasted under an hour', level: 'danger' },
    { value: '1985', label: 'Old Québec becomes a UNESCO World Heritage Site — the most complete fortified colonial town north of Mexico', level: 'blue' },
    { value: '2033', label: 'Target opening of the new tramway; construction disrupts parts of the city until then', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Upper Town (Haute-Ville)', icon: '🏰', tag: '🏰 Inside the walls', tagLevel: 'gold', meta: 'Château Frontenac · Dufferin Terrace · Rue Saint-Jean · Citadelle' },
    { name: 'Lower Town & Petit-Champlain', icon: '🏘️', tag: '🏘️ Below the cliff', tagLevel: 'danger', meta: 'Oldest streets in the city · Place Royale · Funicular and Breakneck Stairs' },
    { name: 'Old Port', icon: '⚓', tag: '⚓ Waterfront', tagLevel: 'blue', meta: 'Marina · Farmers’ market · Antique shops on Rue Saint-Paul' },
    { name: 'Saint-Roch', icon: '☕', tag: '☕ Lower city', tagLevel: 'olive', meta: 'Restaurants, cafés and start-ups · Rue Saint-Joseph · Revitalised old district' },
    { name: 'Montcalm & Grande Allée', icon: '🌳', tag: '🌳 West of the walls', tagLevel: 'safe', meta: 'Plains of Abraham · Fine-arts museum · Terraces on Grande Allée' },
    { name: 'Wendake', icon: '🪶', tag: '🪶 Huron-Wendat Nation', tagLevel: 'purple', meta: 'Huron-Wendat community in the north of the city · Museum and hotel' },
  ],

  attractions: [
    {
      name: 'Château Frontenac & Dufferin Terrace',
      icon: '🏰',
      text: 'The castle-like railway hotel built in the 1890s dominates the skyline. The boardwalk in front of it, Dufferin Terrace, runs along the cliff edge with views down the river — free, and the best place to start.',
      tags: [{ label: 'Free terrace', level: 'safe' }, { label: 'Iconic', level: 'gold' }],
    },
    {
      name: 'The Fortifications & Citadelle',
      icon: '🧱',
      text: 'About 4.6 km of walls and gates still surround the old town. Walk sections of them on top; the star-shaped Citadelle on Cap Diamant is still an active military base, with guided tours and the summer changing of the guard.',
      tags: [{ label: 'Walls: free', level: 'safe' }, { label: 'Citadelle: paid', level: 'gold' }],
    },
    {
      name: 'Petit-Champlain & Place Royale',
      icon: '🏘️',
      text: 'The narrow lanes of the Lower Town, where the city began. Reach them by the funicular or by the steep Breakneck Stairs. Lovely and very busy in summer.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Crowded', level: 'caution' }],
    },
    {
      name: 'Plains of Abraham',
      icon: '⚔️',
      text: 'The battlefield of 13 September 1759, where British forces defeated the French in under an hour — now a huge urban park on the clifftop, used for concerts in summer and cross-country skiing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'History', level: 'danger' }],
    },
    {
      name: 'Montmorency Falls',
      icon: '💧',
      text: 'About 15 minutes from downtown, a waterfall about 30 metres higher than Niagara, with a suspension bridge over the top and a cable car. In winter its spray builds a cone of ice at the bottom.',
      tags: [{ label: 'Paid parking', level: 'caution' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Winter Carnival',
      icon: '⛄',
      text: 'The Carnaval de Québec, one of the largest winter festivals in the world, runs over several weeks from late January into February with night parades, ice canoe races and Bonhomme, its snowman mascot. Dates are announced each year.',
      tags: [{ label: 'Jan–Feb', level: 'blue' }, { label: 'Book early', level: 'danger' }],
    },
  ],

  outdoorHeading: 'Cliff, River and Snow',
  outdoor: [
    { icon: '🚶', name: 'Walls & Stairs', dist: 'Old Québec', text: 'The city is steep. Walking the walls and the stairways between Upper and Lower Town is the best workout and the best sightseeing.' },
    { icon: '🚲', name: 'Corridor du Littoral', dist: 'Along the river', text: 'A long cycling and walking path beside the St. Lawrence, linking to Montmorency Falls.' },
    { icon: '⛷️', name: 'Skiing', dist: '≈30–45 min', text: 'Mont-Sainte-Anne and Le Massif, with views over the river, are within easy reach.' },
    { icon: '🛶', name: 'Île d’Orléans', dist: '≈20 min', text: 'A farm island in the river with orchards, cideries and strawberry fields. Cycle the loop road in summer.' },
    { icon: '⛸️', name: 'Skating', dist: 'Place D’Youville', text: 'An outdoor rink by the city gates in winter.' },
    { icon: '🍁', name: 'Jacques-Cartier Park', dist: '≈45 min north', text: 'A deep glacial valley for hiking and paddling in the Laurentians.' },
  ],

  food: [
    { icon: '🥧', title: 'Québécois Classics', area: 'Old Québec', areaLevel: 'danger', text: 'Tourtière, pea soup and sugar pie — traditional dishes served in old stone houses.' },
    { icon: '🍁', title: 'Maple Taffy', area: 'Winter streets', areaLevel: 'gold', text: 'Hot maple syrup poured on snow and rolled onto a stick — a Carnival favourite.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Fries, curds and gravy at every price point.' },
    { icon: '🍎', title: 'Île d’Orléans Produce', area: 'Island farms', areaLevel: 'safe', text: 'Cider, ice cider, berries and cheese from the island farms.' },
    { icon: '☕', title: 'Saint-Roch Cafés', area: 'Rue Saint-Joseph', areaLevel: 'blue', text: 'The city’s modern dining and café scene.' },
    { icon: '🧺', title: 'Old Port Market', area: 'Old Port', areaLevel: 'purple', text: 'Local produce and Quebec food products, open year-round.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Slow thaw', text: 'Snow lingers into April. Sugar-shack season around the city in March–April. Green by June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival d’été', text: 'Warm days, the big summer music festival on the Plains of Abraham, and crowds in the old town.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours', text: 'Red maples, crisp air and cruise ships on the river. Book ahead in early October.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Snow city', text: 'Deep snow and −20 °C cold snaps. The old town under snow and the Winter Carnival are magical — dress warmly.' },
  ],

  gettingThere: [
    {
      icon: '🚆',
      title: 'By Train — VIA Rail',
      text: 'VIA Rail trains from Montréal arrive at the Gare du Palais, a short walk below the old town.',
      time: '≈3.5h from Montréal',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highways 20 and 40 from Montréal. Parking inside the walls is limited; use public car parks.',
      time: '≈2.5h from Montréal',
    },
    {
      icon: '✈️',
      title: 'By Air — Jean-Lesage (YQB)',
      text: 'Québec City’s airport has flights from major Canadian cities and some US and sun destinations. Taxi or bus to the old town.',
      time: '≈20–30 min to downtown',
    },
    {
      icon: '⛴️',
      title: 'Lévis Ferry',
      text: 'A short ferry crosses the river to Lévis — worth it for the view of the old town and Château Frontenac from the water.',
      time: '≈12 min crossing',
    },
  ],

  stay: [
    {
      icon: '🏰',
      title: 'Inside the Walls',
      area: 'Historic · Pricier',
      text: 'Hotels and inns in old stone buildings, steps from everything. Book far ahead for the Carnival and fall.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Quebec%20City%2C%20Quebec', level: 'gold' },
      ],
    },
    {
      icon: '☕',
      title: 'Saint-Roch',
      area: 'Lively · Better value',
      text: 'Modern hotels in the lower city, a walk or short bus ride from the old town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saint-Roch+Quebec', level: 'blue' },
      ],
    },
    {
      icon: '🍎',
      title: 'Île d’Orléans',
      area: 'Rural · Car needed',
      text: 'Farm inns and B&Bs on the island, 20 minutes from the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Ile+d%27Orleans', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'RTC Buses',
      text: 'The RTC runs the city’s buses, including frequent Métrobus lines through the old town and along the main corridors. The future tramway is under construction and expected around 2033. The old town itself is best on foot.',
      linkLabel: 'RTC',
      linkUrl: 'https://www.rtcquebec.ca/en',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'RTC’s 2026 fare schedule lists the prices below; an older page still shows a lower single fare, so confirm before you ride. A single fare includes a 90-minute transfer on OPUS or an occasional card.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single fare: $3.85', 'Day pass: $10.50', '90-minute transfer included'],
        },
        linkLabel: 'RTC fares',
        linkUrl: 'https://www.rtcquebec.ca/en/rates-and-purchase/rates-and-passes/fare-schedule',
      },
      {
        icon: '🚡',
        title: 'Funicular',
        text: 'The Old Québec Funicular links Dufferin Terrace with Petit-Champlain — a short ride that saves the climb. Paid; open year-round.',
        fareBox: {
          label: 'Funicular',
          lines: ['Upper ↔ Lower Town', 'Paid per ride', 'Or take the stairs'],
        },
        linkLabel: 'Québec City Tourism',
        linkUrl: 'https://www.quebec-cite.com/en',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'The old town is compact but steep — wear good shoes.' },
          { icon: '⛴️', title: 'Ferry', text: 'The Québec–Lévis ferry is cheap and scenic.' },
          { icon: '🚕', title: 'Taxis', text: 'Available; useful from the airport and train station with luggage.' },
          { icon: '🚗', title: 'Car', text: 'Useful for Montmorency, Île d’Orléans and skiing; not for the old town.' },
        ],
      },
    ],
    proTip: {
      label: 'View tip:',
      text: 'Take the Lévis ferry at sunset. The view back at the Château Frontenac and the cliffs is the best in the city, for the price of a ferry ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days, and GST and QST are calculated on the price including it.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Québec City / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + QST' },
      { icon: '🍷', label: 'Wine and cider: GST + QST' },
      { icon: '🎟️', label: 'Tours and admissions: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏰', label: 'Dufferin Terrace and the walls: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French Everywhere', text: 'Québec City is far more French-speaking than Montréal. People in tourist areas usually speak English, but a few French phrases go a long way.' },
    { icon: '🪜', title: 'Steep Streets', text: 'Hills and stairs everywhere; icy in winter. Wear shoes with grip.' },
    { icon: '❄️', title: 'Winter Cold', text: 'January can bring −25 °C wind chills. Dress in layers and cover skin.' },
    { icon: '🏨', title: 'Book Ahead', text: 'Rooms inside the walls sell out during the Carnival, the summer festival and early October.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🚧', title: 'Tramway Works', text: 'Construction for the new tramway affects several corridors in 2026 and beyond.' },
    { icon: '🪶', title: 'Whose Land', text: 'Québec City is on the ancestral lands of the Huron-Wendat Nation, whose community of Wendake lies within the city. The name comes from kébec, an Algonquian word for the place where the river narrows.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôtel-Dieu de Québec', '11 Côte du Palais', 'Emergencies: call 911'] },
  ],
};

export default QUEBEC_CITY;
