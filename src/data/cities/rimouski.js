// Rimouski — данные страницы /city/rimouski (Римуски, КВЕБЕК)
// Видео Римуски в бесплатных банках нет: Pexels отдаёт посторонние города,
// ролики с маяками — без локации (не Pointe-au-Père).
// В шапке фото с Wikimedia Commons — центр города сверху вдоль берега
// реки Святого Лаврентия в отлив, автор Quintin Soloviev, август 2026,
// CC BY 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (48 935).
// Тарифы — со страницы rimouskibus.com/pages/infos-pratiques/tarifs
// (тарифы пересматривают каждое 1 марта — на странице есть «уточняйте»).
// Паром Rimouski–Forestville не ходит с 2022 года (мемуар г. Форествиль
// 2026–2027). Больница — адрес из репертуара Santé Québec.
// Pointe-au-Père, Empress of Ireland, Onondaga, пожар 1950 года, Bic,
// Reford Gardens, поезд Ocean — из общих знаний.

export const RIMOUSKI = {
  slug: 'rimouski',
  name: 'Rimouski',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Bas-Saint-Laurent',
  accentLevel: 'gold',
  heroIcon: '🌅',
  heroImage: '/Cities/Rimouski/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4489, lon: -68.5236 },
  subtitle: 'Sunsets on the Sea-River',
  description:
    'On the south shore where the St. Lawrence is already so wide it looks like the sea, Rimouski is a small university city devoted to ocean science. Walk the seaside promenade at sunset, climb into a real submarine at Pointe-au-Père, and spot seals in Bic National Park just down the coast — the start of the road to the Gaspé.',

  actions: [
    { label: 'Explore Rimouski', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈49K (2021)' },
    { label: 'Region', value: 'Bas-Saint-Laurent' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Québec City', value: '≈3 h by car' },
    { label: 'To Bic National Park', value: '≈20 min by car' },
  ],

  badges: ['Sea-River Sunsets', 'Ocean Science', 'Gateway to Gaspé'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '48,935', label: 'People in the 2021 census — the main city of the Bas-Saint-Laurent', level: 'blue' },
    { value: '1914', label: 'The liner Empress of Ireland sank off Pointe-au-Père; its story is told at the maritime site', level: 'danger' },
    { value: '1950', label: 'A great fire destroyed a large part of the city, which was rebuilt in the following years', level: 'purple' },
    { value: '$4', label: 'A single Citébus or Taxibus ride in exact cash', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Centre-ville', icon: '⛪', tag: '⛪ Downtown', tagLevel: 'gold', meta: 'Cathedral · Rue Saint-Germain · Shops, cafés and bars' },
    { name: 'Promenade de la mer', icon: '🌅', tag: '🌅 Waterfront', tagLevel: 'blue', meta: 'Seaside walking and cycling path · Sunset benches · Marina' },
    { name: 'Pointe-au-Père', icon: '🗼', tag: '🗼 East', tagLevel: 'danger', meta: 'Lighthouse · Submarine Onondaga · Empress of Ireland museum' },
    { name: 'University District', icon: '🎓', tag: '🎓 Campus', tagLevel: 'purple', meta: 'UQAR and its ocean-science institute · Student life' },
    { name: 'Le Bic', icon: '🦭', tag: '🦭 West', tagLevel: 'safe', meta: 'Village and national park on rocky coves · Seals and sunsets' },
    { name: 'Sainte-Blandine & Mont-Lebel', icon: '🌲', tag: '🌲 Inland', tagLevel: 'olive', meta: 'Rural districts on the plateau south of the city' },
  ],

  attractions: [
    {
      name: 'Pointe-au-Père Maritime Historic Site',
      icon: '🗼',
      text: 'Climb the tall lighthouse, step aboard the decommissioned Canadian submarine Onondaga, and learn the story of the Empress of Ireland, which sank nearby in 1914 with heavy loss of life.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Bic National Park',
      icon: '🦭',
      text: 'A Sépaq park of capes, coves and islands about 20 minutes west of downtown. Harbour seals haul out on the rocks at low tide, and the sunsets are among the best on the river.',
      tags: [{ label: 'Park fees apply', level: 'caution' }, { label: 'Wildlife', level: 'safe' }],
    },
    {
      name: 'Promenade de la mer',
      icon: '🌅',
      text: 'A waterfront path along the shore downtown. Join locals on the benches at sunset, when the sun sinks into the wide estuary.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sunsets', level: 'gold' }],
    },
    {
      name: 'Île Saint-Barnabé',
      icon: '🏝️',
      text: 'A wooded island just offshore, reached by a short boat ride in summer, with walking trails and the story of a hermit who once lived there.',
      tags: [{ label: 'Summer only', level: 'caution' }, { label: 'Boat ride', level: 'blue' }],
    },
    {
      name: 'Canyon des Portes de l’Enfer',
      icon: '🌉',
      text: 'A deep river canyon south of the city with trails and a high suspension footbridge. About half an hour inland.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Reford Gardens (Jardins de Métis)',
      icon: '🌷',
      text: 'Famous historic gardens by the river in Grand-Métis, east of Rimouski, plus an international garden festival in summer.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Summer', level: 'safe' }],
    },
  ],

  outdoorHeading: 'Where the River Becomes the Sea',
  outdoor: [
    { icon: '🥾', name: 'Hiking in Bic', dist: '≈20 min west', text: 'Coastal trails and lookouts; the climb to Pic Champlain gives sweeping views.' },
    { icon: '🛶', name: 'Sea Kayaking', dist: 'Bic · Rimouski', text: 'Guided outings among the islands — tides and cold water make a guide worthwhile.' },
    { icon: '🚲', name: 'Cycling', dist: 'Route Verte', text: 'Quebec’s long-distance cycle route follows the shore through the city.' },
    { icon: '🐦', name: 'Birding', dist: 'Pointe-au-Père shore', text: 'Seabirds and shorebirds along the tidal flats east of the city.' },
    { icon: '🌅', name: 'Sunset Watching', dist: 'Promenade · Bic', text: 'The river faces northwest here, so summer sunsets set over open water.' },
    { icon: '⛷️', name: 'Winter Sports', dist: 'Mont-Comi · trails', text: 'Downhill skiing southeast of the city, plus cross-country and snowshoe trails.' },
  ],

  food: [
    { icon: '🦐', title: 'Northern Shrimp', area: 'Region', areaLevel: 'danger', text: 'Small sweet Matane shrimp and other seafood from the lower St. Lawrence and the Gaspé.' },
    { icon: '🦀', title: 'Snow Crab', area: 'Seasonal', areaLevel: 'gold', text: 'Fresh crab at fish shops and restaurants in spring and early summer.' },
    { icon: '🍻', title: 'Microbreweries', area: 'Downtown', areaLevel: 'purple', text: 'Local craft beer in the bars of Rue Saint-Germain.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes.' },
    { icon: '🧀', title: 'Bas-Saint-Laurent Cheese', area: 'Region', areaLevel: 'safe', text: 'Cheeses and curds from farms along the shore.' },
    { icon: '☕', title: 'Student Cafés', area: 'Downtown · UQAR', areaLevel: 'blue', text: 'Relaxed cafés in a university town.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Slow to warm', text: 'Ice leaves the river in April; it stays cool and windy by the water into June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Best season', text: 'Pleasant, rarely hot, with long evenings and spectacular sunsets. Most attractions are open only in summer.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour & calm', text: 'Fewer visitors, fall colour on the hills, and still-good hiking in Bic.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Long, snowy winters with strong winds off the river. Many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Autoroute 20 follows the south shore from Québec City; Route 132 continues east along the coast to the Gaspé Peninsula.',
      time: '≈3 h from Québec City',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Montréal–Halifax train, the Ocean, stops in Rimouski a few times a week. Check the current schedule.',
      time: 'Overnight from Montréal',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches run along the south shore from Québec City and continue toward the Gaspé.',
      time: '≈4 h from Québec City',
    },
    {
      icon: '⛴️',
      title: 'Across the River',
      text: 'The Rimouski–Forestville ferry has not operated since 2022. To reach the North Shore, check the other St. Lawrence ferry crossings before you go.',
      time: 'No ferry from Rimouski',
    },
  ],

  stay: [
    {
      icon: '🌅',
      title: 'Downtown & Waterfront',
      area: 'Walk to the promenade',
      text: 'Hotels near the cathedral and the seaside path.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rimouski+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Rimouski%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🦭',
      title: 'Le Bic',
      area: 'Near the national park',
      text: 'Inns in the village, or camping and ready-to-camp tents inside the park (book early with Sépaq).',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Le+Bic+Rimouski', level: 'blue' },
      ],
    },
    {
      icon: '🗼',
      title: 'Pointe-au-Père',
      area: 'Quiet · By the lighthouse',
      text: 'Motels and B&Bs on the east side of the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pointe-au-Pere+Rimouski', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Citébus & Taxibus',
      text: 'The Société des transports de Rimouski runs Citébus routes through the central city and Taxibus — shared taxis on set routes — to the outer districts. One fare table covers both.',
      linkLabel: 'Rimouskibus',
      linkUrl: 'https://www.rimouskibus.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the STR fares page; prices are revised every March 1, so confirm before you travel. Children 0–12 ride free with someone aged 16+ (up to three children aged 6–12 per adult).',
        fareBox: {
          label: 'Adult',
          lines: ['Single, cash: $4.00 (exact)', 'Day pass (Transit app): $9.25', '10 rides: $34.75', 'Monthly: $90.75'],
        },
        linkLabel: 'STR fares',
        linkUrl: 'https://www.rimouskibus.com/pages/infos-pratiques/tarifs',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown and the promenade are compact and walkable.' },
          { icon: '🚲', title: 'Bike', text: 'The seaside path is ideal in summer.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Bic, the canyon and the gardens.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Sunset tip:',
      text: 'Check the sunset time and head to the Promenade de la mer or Bic National Park 30 minutes before — locals do.',
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
      { label: 'Rimouski / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
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
      { icon: '🌅', label: 'Promenade de la mer: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French Region', text: 'Rimouski is almost entirely French-speaking. Staff at major sites speak English, but a few French phrases go a long way.' },
    { icon: '📅', title: 'Summer Season', text: 'Pointe-au-Père, the island boat, the canyon and the gardens mostly open from June to early fall. Check dates before you go.' },
    { icon: '🧥', title: 'Bring a Layer', text: 'Even in July, wind off the cold river can make evenings chilly.' },
    { icon: '🌊', title: 'Tides', text: 'The shore has large tidal flats. Watch the tide times when walking out on the rocks in Bic.' },
    { icon: '❄️', title: 'Winter', text: 'Long and windy. Winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'The Bas-Saint-Laurent lies within the traditional territories of the Wolastoqiyik (Maliseet) and Mi’gmaq peoples.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Hôpital régional de Rimouski', '150 Avenue Rouleau', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default RIMOUSKI;
