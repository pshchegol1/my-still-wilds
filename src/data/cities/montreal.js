// Montreal — данные страницы /city/montreal
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Matthew Padilla, "aerial view of Montreal skyline at sunset".
// Проверено по кадрам: башня 1000 de La Gauchetière с медной верхушкой
// и гора Мон-Руаяль за ней. Оригинал 31 с, 2560×1440 50 fps — обрезан
// до 20 с, 1920×1080 30 fps, ~4,7 МБ; постер — первый кадр.
// ВНИМАНИЕ: ролик Pexels "Aerial view of Montreal's Old Port" на самом
// деле снят в Старом порту Квебека (бассейн Луиз, элеваторы Бунге) —
// не использовать для Монреаля.
// Население — перепись 2021 года, город без агломерации. Тарифы STM —
// со страницы перевозчика (дата не указана).

export const MONTREAL = {
  slug: 'montreal',
  name: 'Montréal',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Island City on the St. Lawrence',
  accentLevel: 'blue',
  heroIcon: '⛪',
  heroImage: '/Cities/Montreal/hero-poster.jpg',
  heroVideo: '/Cities/Montreal/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5019, lon: -73.5674 },
  subtitle: 'North America’s French-Speaking Metropolis',
  description:
    'A city on an island in the St. Lawrence, built around a small mountain that gives it its name. French is the language of the street, the menus and the signs, but the city has always been a crossroads — Kanien’kehá:ka land called Tiohtià:ke, a fur-trade port, an industrial capital and now a city of festivals, bagels and steep outdoor staircases.',

  actions: [
    { label: 'Explore Montréal', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.76M (2021)' },
    { label: 'Language', value: 'French first' },
    { label: 'Mount Royal', value: '≈233 m' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈540 km · 5h' },
    { label: 'From Québec City', value: '≈250 km · 2.5h' },
  ],

  badges: ['French-Speaking', 'Festival City', 'Tiohtià:ke'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1642', label: 'Ville-Marie is founded by French colonists on the site of today’s Old Montréal', level: 'gold' },
    { value: '1976', label: 'Montréal hosts the Summer Olympics — the stadium’s inclined tower still dominates the east end', level: 'blue' },
    { value: '2025', label: 'The REM light metro reaches Deux-Montagnes; the airport branch is still under construction', level: 'purple' },
    { value: '$3.75', label: 'One STM metro or bus trip — the 24-hour pass also covers the 747 airport bus', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Old Montréal & Old Port', icon: '⛪', tag: '⛪ Historic', tagLevel: 'gold', meta: 'Cobblestone streets · Notre-Dame Basilica · Waterfront promenade · Busy in summer' },
    { name: 'Downtown & Quartier des Spectacles', icon: '🎭', tag: '🎭 Core', tagLevel: 'blue', meta: 'Festival plazas · Sainte-Catherine Street · Museums · Underground city' },
    { name: 'Plateau Mont-Royal', icon: '🪜', tag: '🪜 Iconic', tagLevel: 'danger', meta: 'Outdoor staircases · Colourful row houses · Cafés · Below the mountain' },
    { name: 'Mile End', icon: '🥯', tag: '🥯 Creative', tagLevel: 'olive', meta: 'Bagel bakeries · Studios and bookshops · Mixed communities' },
    { name: 'Little Italy & Jean-Talon', icon: '🍅', tag: '🍅 Market', tagLevel: 'safe', meta: 'Jean-Talon Market · Italian cafés · Produce and Québec cheese' },
    { name: 'Hochelaga & the Olympic Park', icon: '🏟️', tag: '🏟️ East', tagLevel: 'purple', meta: 'Olympic Stadium · Botanical Garden · Biodôme · Working-class roots' },
  ],

  attractions: [
    {
      name: 'Mount Royal Park',
      icon: '⛰️',
      text: 'The mountain at the heart of the city, landscaped as a park by Frederick Law Olmsted, the designer of New York’s Central Park. Walk up to the Kondiaronk Belvedere for the classic view over downtown and the river. Sunday “Tam-Tams” drumming gatherings take place by the monument in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best view', level: 'gold' }],
    },
    {
      name: 'Old Montréal',
      icon: '⛪',
      text: 'The oldest part of the city, with stone buildings from the French and British regimes, Notre-Dame Basilica and its blue-and-gold interior, and the Old Port along the river. Beautiful early in the morning; crowded on summer afternoons.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Basilica: paid', level: 'gold' }],
    },
    {
      name: 'Festival Season',
      icon: '🎷',
      text: 'Montréal runs festivals almost every week of summer — the International Jazz Festival, Just for Laughs, the fireworks competition and more — many with free outdoor stages in the Quartier des Spectacles. Winter has its own, with Montréal en Lumière and Igloofest.',
      tags: [{ label: 'Summer peak', level: 'gold' }, { label: 'Many free shows', level: 'safe' }],
    },
    {
      name: 'Bagels, Smoked Meat & Poutine',
      icon: '🥯',
      text: 'Wood-fired, honey-boiled Montréal bagels from the Mile End bakeries, smoked meat sandwiches downtown, and poutine at any hour. Montréal food is a serious reason to visit.',
      tags: [{ label: 'Food', level: 'danger' }, { label: 'Cheap eats', level: 'safe' }],
    },
    {
      name: 'Olympic Park, Biodôme & Botanical Garden',
      icon: '🌺',
      text: 'In the east end: the 1976 Olympic Stadium with its inclined tower, the Biodôme’s indoor ecosystems, and one of the largest botanical gardens in the world, with Chinese and Japanese gardens and a First Nations Garden.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'blue' }],
    },
    {
      name: 'Jean-Talon Market',
      icon: '🧺',
      text: 'One of the largest open-air public markets in North America, in Little Italy — produce, Québec cheeses, maple products and street food, open year-round.',
      tags: [{ label: 'Free to browse', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
    },
  ],

  outdoorHeading: 'Mountain, River and Bike Paths',
  outdoor: [
    { icon: '🚲', name: 'Cycling', dist: 'City-wide', text: 'Montréal has one of the most extensive bike networks in North America, with separated lanes and the BIXI bike-share system in the warm months.' },
    { icon: '⛰️', name: 'Mount Royal', dist: 'Central', text: 'Trails, stairs and the summit belvedere. In winter, cross-country skiing and snowshoeing on the mountain.' },
    { icon: '🛶', name: 'Lachine Canal', dist: 'Southwest', text: 'A historic canal turned linear park, with a cycling path and kayak rentals.' },
    { icon: '🏄', name: 'River Surfing', dist: 'Lachine Rapids', text: 'A standing wave in the St. Lawrence lets people surf in the middle of the city. Lessons only — the current is dangerous.' },
    { icon: '⛸️', name: 'Skating', dist: 'Parks citywide', text: 'Outdoor rinks open across the city in winter, including at the Old Port and Lac aux Castors on the mountain.' },
    { icon: '🍁', name: 'Fall Colours', dist: 'Mount Royal · Laurentians', text: 'Maples turn brilliant red in early October, on the mountain and in the Laurentians an hour north.' },
  ],

  food: [
    { icon: '🥯', title: 'Bagels', area: 'Mile End', areaLevel: 'gold', text: 'Two rival bakeries open around the clock — small, dense, honey-boiled and wood-fired.' },
    { icon: '🥪', title: 'Smoked Meat', area: 'Downtown · Plateau', areaLevel: 'danger', text: 'Brined, spiced and piled high on rye — a Jewish-Montréal classic.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Fries, cheese curds and gravy, from greasy spoons to fancy versions.' },
    { icon: '🍷', title: 'Bistros & BYOB', area: 'Plateau', areaLevel: 'purple', text: 'Many restaurants are “apportez votre vin” — bring your own wine from the SAQ or a dépanneur.' },
    { icon: '🧀', title: 'Québec Cheese & Maple', area: 'Markets', areaLevel: 'safe', text: 'Local cheeses and maple products at Jean-Talon and Atwater markets.' },
    { icon: '🍜', title: 'Global Food', area: 'City-wide', areaLevel: 'blue', text: 'Haitian, Lebanese, Vietnamese, Portuguese and many more communities feed the city.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Terraces open', text: 'A messy thaw in April, then a sudden burst of green and the return of café terraces in May. Sugar-shack season in the countryside in March–April.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot and humid, with a festival nearly every week. Book accommodation well ahead for the Grand Prix and the Jazz Festival.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour and comfort', text: 'Cool, clear days and red maples on the mountain. One of the best times to visit.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold and snowy', text: 'Long, cold and snowy, with −20 °C spells. The underground city, winter festivals and skating make it work — dress for it.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air — Montréal-Trudeau (YUL)',
      text: 'The 747 bus runs 24/7 between the airport and downtown; a 24-hour STM pass covers it. The REM light-metro link to the airport is still under construction.',
      time: '≈45–70 min to downtown by bus',
    },
    {
      icon: '🚆',
      title: 'By Train — VIA Rail',
      text: 'Frequent trains on the Québec City–Windsor corridor arrive at Central Station downtown, under the Queen Elizabeth hotel.',
      time: '≈5h from Toronto · ≈2h from Ottawa',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highways 20 and 40 from Toronto and Québec City. Bridges onto the island jam at rush hour and summer roadwork is legendary. Parking downtown is expensive.',
      time: '≈5h from Toronto',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches arrive at the downtown bus station from Toronto, Ottawa, Québec City and New York.',
      time: '≈2–7h',
    },
  ],

  stay: [
    {
      icon: '⛪',
      title: 'Old Montréal',
      area: 'Historic · Pricier',
      text: 'Boutique hotels in stone buildings near the basilica and the Old Port.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Montreal', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Montreal%2C%20Quebec', level: 'gold' },
      ],
    },
    {
      icon: '🎭',
      title: 'Downtown',
      area: 'Central · Metro access',
      text: 'Big hotels near the festivals, shopping and the underground city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Montreal', level: 'blue' },
      ],
    },
    {
      icon: '🪜',
      title: 'Plateau & Mile End',
      area: 'Local feel',
      text: 'Small hotels and short-term rentals among cafés and staircases. Check the rental is legally registered.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Plateau+Mont-Royal', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚇',
      title: 'STM Métro & Buses',
      text: 'Four métro lines and a dense bus network cover the island, linked to the underground city. The REM light metro serves the West Island, the South Shore and the North Shore. Rubber-tired métro trains are quiet and frequent.',
      linkLabel: 'STM',
      linkUrl: 'https://www.stm.info/en',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares (Zone A)',
        text: 'Fares below are from the STM fares page (no effective date shown). The 24-hour, 3-day and weekend passes also cover the 747 airport bus. Children 11 and under ride free with an adult.',
        fareBox: {
          label: 'Zone A',
          lines: ['1 trip: $3.75', '10 trips: $35', '24 hours: $11.25', '3 days: $21.75', 'Unlimited weekend: $17'],
        },
        linkLabel: 'STM fares',
        linkUrl: 'https://www.stm.info/en/info/fares/transit-fares',
      },
      {
        icon: '🚲',
        title: 'BIXI Bike Share',
        text: 'Thousands of shared bikes, including e-bikes, at stations across the city from spring to fall.',
        fareBox: {
          label: 'BIXI',
          lines: ['Seasonal (spring–fall)', 'Single rides or passes', 'Pay in the app'],
        },
        linkLabel: 'BIXI',
        linkUrl: 'https://bixi.com/en/',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Old Montréal, downtown and the Plateau are very walkable.' },
          { icon: '🚇', title: 'Underground City', text: 'Kilometres of tunnels link métro stations, malls and buildings — useful in winter.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🚗', title: 'Car', text: 'Not needed in the city; parking and roadwork make driving slow.' },
        ],
      },
    ],
    proTip: {
      label: 'Airport tip:',
      text: 'Buy a 24-hour pass on arrival: it covers the 747 bus downtown and unlimited métro rides for the rest of the day, for the same price as a single 747 ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days, and GST and QST are calculated on the price including it. Prices are usually shown before tax.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Montréal / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + QST' },
      { icon: '🍷', label: 'Wine and alcohol: GST + QST' },
      { icon: '🎟️', label: 'Festival and museum tickets: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '⛰️', label: 'Mount Royal and many festival stages: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill (card terminals often suggest more). Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French First', text: 'French is the official language and the default everywhere. Most people in central Montréal also speak English; a “bonjour” first is appreciated.' },
    { icon: '🚧', title: 'Orange Cones', text: 'Summer roadwork is everywhere. Allow extra time when driving and check detours.' },
    { icon: '❄️', title: 'Winter Gear', text: 'Bring a proper coat, hat, gloves and boots with grip from December to March.' },
    { icon: '🍷', title: 'BYOB Restaurants', text: 'Many restaurants let you bring your own wine. Buy it at the SAQ or a dépanneur.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Quebec changes its clocks.' },
    { icon: '🎫', title: 'Get an OPUS Card', text: 'For longer stays, a reloadable OPUS card makes métro and bus travel easier.' },
    { icon: '🪶', title: 'Whose Land', text: 'Montréal is Tiohtià:ke, a historic meeting place of many Indigenous nations. The Kanien’kehá:ka (Mohawk) of Kahnawà:ke and Kanehsatà:ke are the closest communities today.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Montreal General Hospital', '1650 Cedar Avenue', 'Emergencies: call 911'] },
  ],
};

export default MONTREAL;
