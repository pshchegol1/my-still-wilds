// Winnipeg — данные страницы /city/winnipeg (Виннипег, МАНИТОБА)
// Видео Виннипега в бесплатных банках нет: Pexels отдаёт Эдмонтон,
// ролик с Законодательным собранием вертикальный (7 с), а таймлапс
// "dome roof" с тегом Winnipeg снят в России (панельки, тарелки).
// В шапке фото с Wikimedia Commons — мост Esplanade Riel и Музей прав
// человека в сумерках, автор Ethan Sahagun, июль 2026, CC BY 4.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (749 607 город, 834 678 агломерация).
// Тарифы — winnipeg.ca/…/transit/fares (2026). Налог на проживание
// 6% с 1 апреля 2024 (assessment.winnipeg.ca), RST 7%, GST 5%.
// The Forks, Exchange District, Saint-Boniface, Qaumajuq, поезда VIA —
// из общих знаний.

export const WINNIPEG = {
  slug: 'winnipeg',
  name: 'Winnipeg',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Where the Red Meets the Assiniboine',
  accentLevel: 'gold',
  heroIcon: '🌉',
  heroImage: '/Cities/Winnipeg/hero.jpg',
  heroCredit: 'Photo: Ethan Sahagun / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.8951, lon: -97.1384 },
  subtitle: 'Heart of the Prairies',
  description:
    'At the forks of the Red and Assiniboine rivers, a meeting place for thousands of years, Winnipeg grew into the gateway of the Canadian West. Today it is a city of brick warehouse districts, a striking human rights museum, a French-speaking quarter and long, festival-filled winters — and the starting point for trips to Lake Winnipeg, Riding Mountain and the polar bears of Churchill.',

  actions: [
    { label: 'Explore Winnipeg', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈750K (2021)' },
    { label: 'Metro Area', value: '≈835K' },
    { label: 'Language', value: 'English · French' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Airport', value: 'YWG · ≈20 min' },
    { label: 'To Lake Winnipeg', value: '≈1 h by car' },
  ],

  badges: ['Prairie Capital', 'The Forks', 'Human Rights Museum'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '749,607', label: 'People in the 2021 census — Manitoba’s capital and by far its largest city', level: 'blue' },
    { value: '2', label: 'Rivers meet at The Forks — the Red and the Assiniboine', level: 'gold' },
    { value: 'Treaty 1', label: 'Winnipeg lies on Treaty 1 territory and the homeland of the Red River Métis', level: 'purple' },
    { value: '$3.10', label: 'A bus ride with a peggo card ($3.45 cash); kids 11 and under ride free with an adult', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'The Forks', icon: '🌉', tag: '🌉 Riverside', tagLevel: 'gold', meta: 'Market hall · River walks · Skating trail on the ice in winter' },
    { name: 'Exchange District', icon: '🏛️', tag: '🏛️ Heritage', tagLevel: 'purple', meta: 'Early-1900s warehouses and terra-cotta facades · Galleries, bars and theatres' },
    { name: 'Saint-Boniface', icon: '⚜️', tag: '⚜️ French quarter', tagLevel: 'blue', meta: 'Francophone heart of the city · Cathedral ruins and Louis Riel’s grave' },
    { name: 'Osborne Village', icon: '☕', tag: '☕ Lively', tagLevel: 'danger', meta: 'Dense, walkable strip of cafés, bars and shops south of the Legislature' },
    { name: 'Corydon & Wolseley', icon: '🌳', tag: '🌳 Leafy', tagLevel: 'safe', meta: 'Patios on Corydon Avenue · Elm-lined streets and old houses in Wolseley' },
    { name: 'Chinatown & West End', icon: '🎨', tag: '🎨 Diverse', tagLevel: 'olive', meta: 'Murals, Filipino and Vietnamese restaurants, community life' },
  ],

  attractions: [
    {
      name: 'Canadian Museum for Human Rights',
      icon: '🏛️',
      text: 'A spiralling glass-and-stone building at The Forks devoted to human rights stories from Canada and around the world. Ramps of glowing alabaster lead up to the Tower of Hope, with views over the city.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'The Forks',
      icon: '🌉',
      text: 'The meeting place of two rivers and a gathering spot for thousands of years. Now a National Historic Site with a food hall, riverside paths and, in winter, a skating trail on the frozen river ice when conditions allow.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Exchange District',
      icon: '🏛️',
      text: 'One of the best-preserved early-20th-century commercial districts in North America — a National Historic Site so intact that it often stands in for old New York or Chicago in films.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Walking tours', level: 'purple' }],
    },
    {
      name: 'Winnipeg Art Gallery – Qaumajuq',
      icon: '🖼️',
      text: 'The art gallery and its Inuit art centre, Qaumajuq, home to one of the largest public collections of contemporary Inuit art in the world. Check the gallery site for current hours.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Inuit art', level: 'blue' }],
    },
    {
      name: 'Assiniboine Park & Zoo',
      icon: '🐻‍❄️',
      text: 'A huge urban park with gardens, the Leo Mol Sculpture Garden and a zoo whose Journey to Churchill exhibit lets you watch polar bears swim overhead.',
      tags: [{ label: 'Park free', level: 'safe' }, { label: 'Zoo paid', level: 'gold' }],
    },
    {
      name: 'Manitoba Legislative Building',
      icon: '🗽',
      text: 'A grand neoclassical legislature topped by the gilded Golden Boy statue. Free guided tours are offered; grounds stretch to the Assiniboine River.',
      tags: [{ label: 'Free tours', level: 'safe' }, { label: 'Heritage', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Prairie, Lakes and Shield',
  outdoor: [
    { icon: '⛸️', name: 'River Skating Trail', dist: 'The Forks · winter', text: 'A long skating and walking trail on the frozen Red and Assiniboine rivers when ice is safe. Open dates depend on the weather.' },
    { icon: '🏖️', name: 'Lake Winnipeg Beaches', dist: '≈1 h north', text: 'Sandy beaches such as Grand Beach on one of the largest lakes in Canada.' },
    { icon: '🦬', name: 'FortWhyte Alive', dist: 'South Winnipeg', text: 'Lakes, trails, a bison herd and huge flocks of geese in fall.' },
    { icon: '🐦', name: 'Oak Hammock Marsh', dist: '≈30 min north', text: 'A restored prairie marsh with boardwalks; spectacular during spring and fall bird migration.' },
    { icon: '🌲', name: 'Whiteshell Provincial Park', dist: '≈1 h 30 min east', text: 'Canadian Shield lakes, granite and canoe routes near the Ontario border.' },
    { icon: '🚲', name: 'Cycling', dist: 'City paths', text: 'Flat river trails and active-transportation routes across the city.' },
  ],

  food: [
    { icon: '🥟', title: 'Perogies', area: 'North End', areaLevel: 'gold', text: 'A legacy of Ukrainian and Polish immigrants — homemade perogies and kubasa sausage.' },
    { icon: '🍔', title: 'Fat Boy', area: 'City-wide', areaLevel: 'danger', text: 'Winnipeg’s signature chili-topped burger, sold at local burger shacks.' },
    { icon: '🍩', title: 'Jeanne’s Cake', area: 'Local classic', areaLevel: 'purple', text: 'A local favourite: a sponge-and-shortcake dessert sold in supermarkets across the city.' },
    { icon: '🥘', title: 'Filipino Food', area: 'West End · North End', areaLevel: 'safe', text: 'A large Filipino community fills the city with bakeries and turo-turo spots.' },
    { icon: '🍽️', title: 'The Forks Market', area: 'The Forks', areaLevel: 'blue', text: 'A food hall with local vendors and a craft-beer bar by the rivers.' },
    { icon: '🥖', title: 'French Bistros', area: 'Saint-Boniface', areaLevel: 'olive', text: 'Bakeries and bistros in the francophone quarter.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Floods & thaw', text: 'Snow melts in April; the Red River can flood in high-water years. Warm by June, with mosquitoes arriving soon after.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot, sunny and long-days — Folklorama, outdoor patios and beach trips. Bring mosquito repellent.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Geese & colour', text: 'Crisp days, golden trees along the rivers and huge flocks of migrating geese.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Very cold', text: 'One of the coldest big cities on Earth — wind chills below −40 happen. But Festival du Voyageur and the river skating trail make it fun.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Winnipeg James Armstrong Richardson International Airport (YWG) has flights across Canada and to the US. Transit and taxis connect it to downtown.',
      time: '≈20 min to downtown',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Toronto–Vancouver train, the Canadian, stops at Union Station downtown, and Winnipeg is the starting point of the long train north to Churchill. Check schedules — departures are a few times a week.',
      time: 'Union Station · downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway passes through the city. Regina is to the west, Kenora and Lake of the Woods to the east, and the US border is south on Highway 75.',
      time: '≈1 h to the US border',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches link Winnipeg with other Prairie cities and northwestern Ontario. Check current operators.',
      time: 'Varies',
    },
  ],

  stay: [
    {
      icon: '🌉',
      title: 'Downtown & The Forks',
      area: 'Walk to the museum',
      text: 'Hotels near The Forks, the Exchange District and the arena.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Winnipeg+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Winnipeg%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '☕',
      title: 'Osborne Village',
      area: 'Lively · Walkable',
      text: 'Rentals and small hotels near cafés and bars, a short walk from the Legislature.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Osborne+Village+Winnipeg', level: 'blue' },
      ],
    },
    {
      icon: '✈️',
      title: 'Airport & Polo Park',
      area: 'Convenient',
      text: 'Chain hotels near the airport and the city’s main shopping mall.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Polo+Park+Winnipeg', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Winnipeg Transit',
      text: 'Winnipeg Transit runs the city’s buses, including rapid-transit corridors to the south. Pay with cash or the reloadable peggo card ($5), which gives a cheaper fare.',
      linkLabel: 'Winnipeg Transit',
      linkUrl: 'https://www.winnipeg.ca/services-programs/transportation-roads-parking/transit',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are the City of Winnipeg’s 2026 full fares (ages 17–64). Children 11 and under ride free with a fare-paying customer.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $3.45', 'peggo e-cash: $3.10', '24-hour e-pass: $11.45', 'Monthly e-pass: $119.35'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.winnipeg.ca/services-programs/transportation-roads-parking/transit/fares',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown, The Forks and the Exchange are close together; skywalks link many downtown buildings in winter.' },
          { icon: '🚲', title: 'Bike', text: 'Flat city with riverside trails — great from May to October.' },
          { icon: '🚗', title: 'Car', text: 'Useful for FortWhyte, beaches and parks outside the city.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Winter tip:',
      text: 'Downtown’s enclosed skywalk system lets you cross many blocks indoors on frigid days — handy between hotels, malls and the arena.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotels and short-term rentals in Winnipeg add the City’s 6% accommodation tax (raised from 5% on April 1, 2024).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Winnipeg / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST + 6% city accommodation tax' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🌉', label: 'The Forks & river walks: free' },
      { icon: '🏛️', label: 'Legislature guided tours: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '❄️', title: 'Real Cold', text: 'Winter wind chills can drop below −40. Dress in layers, cover exposed skin and check the forecast.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Summer mosquitoes are legendary, especially after wet springs — bring repellent for evenings outdoors.' },
    { icon: '🌊', title: 'Spring Floods', text: 'The Red River floods in some springs; riverside trails may close. A floodway channels water around the city.' },
    { icon: '⚜️', title: 'Bilingual Pockets', text: 'Winnipeg is English-speaking, but Saint-Boniface has a strong French-speaking community and services.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — one hour behind Toronto.' },
    { icon: '🎫', title: 'Get a peggo', text: 'A $5 peggo card saves on every bus ride and holds day or monthly passes.' },
    { icon: '🪶', title: 'Whose Land', text: 'Winnipeg is on Treaty 1 territory, the traditional lands of the Anishinaabeg, Cree, Oji-Cree, Dakota and Dene peoples, and the homeland of the Red River Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Health Sciences Centre (HSC)', '820 Sherbrook St — follow signs to Emergency', 'Emergencies: call 911'] },
  ],
};

export default WINNIPEG;
