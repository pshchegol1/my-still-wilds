// Laval — данные страницы /city/laval (Лаваль, КВЕБЕК)
// Видео Лаваля в бесплатных банках нет: Pexels по "laval quebec" отдаёт
// Монреаль. В шапке фото с Wikimedia Commons — пруд Centre de la nature,
// автор Richard Mc Neil, CC BY 3.0 (снимок Panoramio, цвета насыщенные).
// Лицензия требует указывать автора — отсюда heroCredit.
// Осторожно с картинками: "Université Laval" — это город Квебек, а многие
// снимки с подписью "Laval" сделаны в Лавале во Франции.
// Население — перепись 2021 года (Statistics Canada, 438 366).
// Тарифы STL — со страницы перевозчика (сетка TR-2026).
// Факты про Cosmodôme, парк Mille-Îles и станции метро — из общих знаний.

export const LAVAL = {
  slug: 'laval',
  name: 'Laval',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Île Jésus, North of Montréal',
  accentLevel: 'olive',
  heroIcon: '🌿',
  heroImage: '/Cities/Laval/hero.jpg',
  heroCredit: 'Photo: Richard Mc Neil / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5697, lon: -73.7241 },
  subtitle: 'The Island City Next Door',
  description:
    'Quebec’s third-largest city fills a whole island of its own, Île Jésus, just across the Rivière des Prairies from Montréal. Mostly suburban and French-speaking, it is easy to overlook — but its northern shore along the Rivière des Mille Îles is a chain of wooded islands, marshes and paddling routes within sight of the metro.',

  actions: [
    { label: 'Explore Laval', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈438K (2021)' },
    { label: 'Rank in Quebec', value: '3rd largest' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Montréal', value: '≈20 min by metro' },
    { label: 'Area', value: '≈246 km²' },
  ],

  badges: ['Island City', 'Mille Îles River', 'Montréal Suburb'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '438,366', label: 'People in the 2021 census — Quebec’s third-largest city, after Montréal and Québec City', level: 'blue' },
    { value: '3', label: 'Montréal metro stations on Laval’s side of the river, at the end of the Orange Line', level: 'gold' },
    { value: '1965', label: 'The fourteen municipalities of Île Jésus merge into a single city, Laval', level: 'purple' },
    { value: '$5', label: 'A single All Modes AB trip — bus, metro, train and REM across Laval and Montréal', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Centropolis & Montmorency', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Montmorency metro · Restaurants and shopping · The closest thing to a city centre' },
    { name: 'Chomedey', icon: '🌍', tag: '🌍 West', tagLevel: 'blue', meta: 'Diverse residential district · Greek, Lebanese and Armenian communities · Carrefour Laval mall' },
    { name: 'Sainte-Rose', icon: '⛪', tag: '⛪ Old village', tagLevel: 'danger', meta: 'Historic stone church · Old village street · Gateway to the Mille Îles river park' },
    { name: 'Saint-François', icon: '🌾', tag: '🌾 East', tagLevel: 'olive', meta: 'Farmland and market gardens at the east end of the island' },
    { name: 'Vimont & Auteuil', icon: '🏡', tag: '🏡 North', tagLevel: 'safe', meta: 'Suburban neighbourhoods · Regional hospital · Parks' },
    { name: 'Laval-des-Rapides', icon: '🚇', tag: '🚇 South', tagLevel: 'purple', meta: 'Cartier and de la Concorde metro · Along the Rivière des Prairies' },
  ],

  attractions: [
    {
      name: 'Rivière des Mille Îles',
      icon: '🛶',
      text: 'The river along Laval’s northern edge is scattered with dozens of small islands, marshes and channels, protected as a park with canoe and kayak rentals in summer and skating trails in winter. The best place to see that a suburban city can still be wild at its edges.',
      tags: [{ label: 'Paddling', level: 'blue' }, { label: 'Seasonal rentals', level: 'caution' }],
    },
    {
      name: 'Centre de la nature',
      icon: '🌿',
      text: 'A large park built in a former quarry, with ponds, gardens, a small farm and walking paths. Skating and sledding in winter. Free to enter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Cosmodôme',
      icon: '🚀',
      text: 'A space science museum and camp near Highway 15, with exhibits on Canada’s role in space exploration. Check current opening hours.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Old Sainte-Rose',
      icon: '⛪',
      text: 'The church of Sainte-Rose-de-Lima, a recognised historic monument, anchors the oldest village core on the island, with heritage houses and cafés near the river.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Heritage', level: 'danger' }],
    },
    {
      name: 'Farm Stands of the East End',
      icon: '🍓',
      text: 'The eastern end of Île Jésus is still farmland — strawberries, sweet corn and pumpkins sold at roadside stands in season.',
      tags: [{ label: 'Summer–fall', level: 'gold' }],
    },
    {
      name: 'Easy Access to Montréal',
      icon: '🚇',
      text: 'Three Orange Line metro stations connect Laval to downtown Montréal without driving — useful if you stay here for lower hotel prices.',
      tags: [{ label: 'All Modes AB fare', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Rivers on Both Sides',
  outdoor: [
    { icon: '🛶', name: 'Paddling', dist: 'Rivière des Mille Îles', text: 'Calm channels between islands, with rentals in summer. Beginners can paddle in sheltered water.' },
    { icon: '⛸️', name: 'Winter Skating', dist: 'Mille Îles · Centre de la nature', text: 'Skating trails on the frozen river and park ponds when ice conditions allow.' },
    { icon: '🚲', name: 'Cycling', dist: 'Island-wide', text: 'A network of bike paths, including routes along both rivers.' },
    { icon: '🐦', name: 'Birding', dist: 'Marshes', text: 'Herons and waterfowl in the marshes of the Mille Îles.' },
    { icon: '🥾', name: 'Bois de l’Équerre', dist: 'West Laval', text: 'One of the larger woodlands left on the island, with walking trails.' },
    { icon: '🌊', name: 'Rivière des Prairies', dist: 'South shore', text: 'River views facing Montréal, with parks along the banks.' },
  ],

  food: [
    { icon: '🥙', title: 'Lebanese & Greek', area: 'Chomedey', areaLevel: 'purple', text: 'Long-established communities make Chomedey a good place for grills, pastries and mezze.' },
    { icon: '🍽️', title: 'Centropolis', area: 'Downtown', areaLevel: 'gold', text: 'A cluster of restaurants and terraces around a pond near Montmorency.' },
    { icon: '🍓', title: 'Farm Produce', area: 'Saint-François', areaLevel: 'safe', text: 'Strawberries and corn from the island’s farms in summer.' },
    { icon: '🍟', title: 'Poutine & Casse-croûtes', area: 'City-wide', areaLevel: 'olive', text: 'Classic Québec snack bars across the island.' },
    { icon: '☕', title: 'Village Cafés', area: 'Sainte-Rose', areaLevel: 'danger', text: 'Small cafés in the old village near the river.' },
    { icon: '🛒', title: 'Big-Box Shopping', area: 'Highway 15 · 440', areaLevel: 'blue', text: 'Major malls draw shoppers from across the region.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Floods possible', text: 'Spring floods can affect low-lying shores of both rivers in wet years. Parks green up in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'River season', text: 'Warm and humid — the best time for paddling the Mille Îles and farm stands.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour and harvest', text: 'Fall colour along the rivers and pumpkin season on the farms.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Skating', text: 'Cold and snowy; skating trails and sledding in the parks.' },
  ],

  gettingThere: [
    {
      icon: '🚇',
      title: 'By Metro',
      text: 'The Orange Line crosses under the Rivière des Prairies to Cartier, de la Concorde and Montmorency stations. You need an All Modes AB fare.',
      time: '≈20–30 min to downtown Montréal',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'The exo commuter train serves Laval stations on its line to Montréal. Check the current schedule.',
      time: 'Commuter service',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highways 15, 13 and 25 bridge Laval to Montréal and the Laurentians. Bridges jam at rush hour.',
      time: '≈20 min to Montréal off-peak',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Montréal-Trudeau (YUL) is about 25 minutes away by car.',
      time: '≈25 min',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Near Montmorency',
      area: 'Metro access · Good value',
      text: 'Hotels near the metro and Centropolis — a cheaper base for visiting Montréal.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Laval+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Laval%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Highway Hotels',
      area: 'Car-friendly',
      text: 'Chain hotels near Highways 15 and 440.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Laval+Chomedey', level: 'blue' },
      ],
    },
    {
      icon: '⛪',
      title: 'Sainte-Rose',
      area: 'Quiet · Near the river',
      text: 'Short-term rentals near the old village and the Mille Îles park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sainte-Rose+Laval', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'STL Buses & Montréal Metro',
      text: 'The Société de transport de Laval (STL) runs buses across the island, feeding the three Orange Line metro stations. Bus-only fares do not cover the metro, train or REM — buy an All Modes AB fare for trips into Montréal.',
      linkLabel: 'STL',
      linkUrl: 'https://stlaval.ca/en/fares',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the STL fares page (2026 fare grid). Children 0–5 ride free; children 6–11 ride free with a person aged 14+ holding a valid fare.',
        fareBox: {
          label: 'Adult',
          lines: ['Bus only: $3.75', 'All Modes AB: $5.00', '24h All Modes AB: $13.75', '10 trips AB: $47.50'],
        },
        linkLabel: 'STL fares',
        linkUrl: 'https://stlaval.ca/en/fares',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Laval is spread out; a car is the easiest way between neighbourhoods.' },
          { icon: '🚲', title: 'Bike', text: 'Good paths along the rivers in summer.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🚇', title: 'Metro', text: 'Best for trips into Montréal.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'Going into Montréal? Buy an All Modes AB fare from the start. A Laval bus-only ticket will not get you through the metro gates.',
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
      { label: 'Laval / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + QST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + QST' },
      { icon: '🎟️', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌿', label: 'Centre de la nature: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French First', text: 'Laval is French-speaking; English is widely understood, especially in Chomedey.' },
    { icon: '🎫', title: 'Right Fare', text: 'Bus-only and All Modes AB fares differ. You need AB for the metro.' },
    { icon: '🌊', title: 'Spring Floods', text: 'Low-lying shores flood in some springs. Check advisories before riverside walks.' },
    { icon: '❄️', title: 'Winter', text: 'Cold and snowy from December to March; dress warmly.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🔤', title: 'Not Université Laval', text: 'Université Laval is in Québec City, 250 km away — not in Laval.' },
    { icon: '🪶', title: 'Whose Land', text: 'Laval lies within the historic territory of Indigenous peoples of the St. Lawrence valley; the Kanien’kehá:ka communities of Kanehsatà:ke and Kahnawà:ke are the nearest First Nations today.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôpital de la Cité-de-la-Santé', '1755 Boulevard René-Laennec', 'Emergencies: call 911'] },
  ],
};

export default LAVAL;
