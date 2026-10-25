// Sherbrooke — данные страницы /city/sherbrooke (Шербрук, КВЕБЕК)
// Видео Шербрука в бесплатных банках нет: Pexels отдаёт Монреаль и Квебек,
// а ролик со шпилем у реки (Steven HAuse) без локации — не ставим.
// В шапке фото с Wikimedia Commons: Lac des Nations, пешеходный мост и
// беседка у северо-восточного края озера, автор DXR, 14.04.2017,
// CC BY-SA 4.0 — лицензия требует указывать автора, отсюда heroCredit.
// Население — перепись 2021 года (Statistics Canada, 172 950).
// Тарифы STS — со страницы sts.qc.ca/tarifs/titres-et-tarifs (2026).
// Больницы — адреса CIUSSS de l'Estrie – CHUS (sante.gouv.qc.ca).
// Мурали, ущелье Magog, Bishop's, Mont-Orford и т. п. — из общих знаний.

export const SHERBROOKE = {
  slug: 'sherbrooke',
  name: 'Sherbrooke',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Eastern Townships',
  accentLevel: 'blue',
  heroIcon: '🌊',
  heroImage: '/Cities/Sherbrooke/hero.jpg',
  heroCredit: 'Photo: DXR / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.4042, lon: -71.8929 },
  subtitle: 'Queen of the Eastern Townships',
  description:
    'Built where the Magog River tumbles through a gorge into the Saint-François, Sherbrooke is the university town and regional capital of the Eastern Townships. A lakeside promenade, giant painted murals and a forested mountain inside city limits make it an easy stop — and a base for Mont-Orford, Lake Memphrémagog and the villages of the Townships.',

  actions: [
    { label: 'Explore Sherbrooke', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈173K (2021)' },
    { label: 'Rank in Quebec', value: '6th largest' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Montréal', value: '≈1 h 45 min by car' },
    { label: 'To Mont-Orford', value: '≈30 min by car' },
  ],

  badges: ['Eastern Townships', 'University Town', 'Two Rivers'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '172,950', label: 'People in the 2021 census — Quebec’s sixth-largest city', level: 'blue' },
    { value: '2', label: 'Rivers meet downtown: the Magog drops through a gorge into the Saint-François', level: 'gold' },
    { value: '2', label: 'Universities — French-language Université de Sherbrooke and English-language Bishop’s in Lennoxville', level: 'purple' },
    { value: '$3.50', label: 'A bus trip on a rechargeable STS card ($4.00 cash)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Centre-ville', icon: '🎨', tag: '🎨 Downtown', tagLevel: 'gold', meta: 'Murals · Rue Wellington and King Street · Restaurants and bars' },
    { name: 'Lac des Nations', icon: '🌊', tag: '🌊 Waterfront', tagLevel: 'blue', meta: 'Lakeside promenade · Footbridges and gazebos · Summer festival grounds' },
    { name: 'Vieux-Nord', icon: '🏛️', tag: '🏛️ Heritage', tagLevel: 'purple', meta: 'Victorian houses on tree-lined streets north of downtown' },
    { name: 'Mont-Bellevue', icon: '🌲', tag: '🌲 Mountain', tagLevel: 'olive', meta: 'Université de Sherbrooke campus · Forested city park with trails and a small ski hill' },
    { name: 'Lennoxville', icon: '🎓', tag: '🎓 English', tagLevel: 'danger', meta: 'Bishop’s University · Historically English-speaking borough · Pubs and a village feel' },
    { name: 'Fleurimont', icon: '🏡', tag: '🏡 East', tagLevel: 'safe', meta: 'Residential district · Regional university hospital (CHUS)' },
  ],

  attractions: [
    {
      name: 'Lac des Nations Promenade',
      icon: '🌊',
      text: 'A paved walking and cycling loop around a lake formed by the Magog River in the heart of the city, with footbridges, gazebos and fountains. The best spot for a sunset walk, and the setting of big summer festivals.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
    },
    {
      name: 'Murals of Sherbrooke',
      icon: '🎨',
      text: 'Downtown walls are covered with large painted murals telling the history and daily life of the city. Follow the mural circuit on foot — the tourist office has a map.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Self-guided', level: 'gold' }],
    },
    {
      name: 'Magog River Gorge',
      icon: '💦',
      text: 'Right downtown, the Magog River drops through a rocky gorge past a hydroelectric station. Walkways and a footbridge give close-up views of the rapids, especially powerful during the spring melt.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best in spring', level: 'caution' }],
    },
    {
      name: 'Musée de la nature et des sciences',
      icon: '🦉',
      text: 'A natural history and science museum in a former textile mill, with interactive exhibits on the animals and environments of southern Quebec. Good on a rainy day.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
    },
    {
      name: 'Mont-Bellevue Park',
      icon: '🌲',
      text: 'A forested mountain inside the city with hiking and mountain-bike trails, lookouts over Sherbrooke, and a small ski hill in winter.',
      tags: [{ label: 'Free trails', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'Lennoxville',
      icon: '🎓',
      text: 'The English-speaking corner of Sherbrooke, home to Bishop’s University and its historic campus on the Massawippi River — a reminder of the Townships’ Loyalist roots.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Pubs', level: 'gold' }],
    },
  ],

  outdoorHeading: 'Gateway to the Eastern Townships',
  outdoor: [
    { icon: '⛰️', name: 'Mont-Orford National Park', dist: '≈30 min west', text: 'Hiking, lakes and a ski resort in a Sépaq national park. Park access fees apply.' },
    { icon: '⛵', name: 'Lake Memphrémagog', dist: '≈30 min · Magog', text: 'A long lake stretching south into Vermont, with beaches, boat cruises and a lakeside promenade in Magog.' },
    { icon: '🏘️', name: 'North Hatley', dist: '≈20 min south', text: 'A pretty village at the head of Lake Massawippi, known for its inns and galleries.' },
    { icon: '🚲', name: 'Cycling', dist: 'City & regional trails', text: 'The lake loop and river paths in town connect to longer regional routes through the Townships.' },
    { icon: '🛶', name: 'Paddling', dist: 'Saint-François & Magog', text: 'Calm stretches of river and the lakes of the region in summer.' },
    { icon: '🍁', name: 'Fall Colours', dist: 'Late Sept — mid Oct', text: 'Rolling hills covered in maple make the Townships one of Quebec’s best fall drives.' },
  ],

  food: [
    { icon: '🍻', title: 'Microbreweries', area: 'Downtown', areaLevel: 'gold', text: 'Sherbrooke has a lively craft-beer scene in and around Wellington Street.' },
    { icon: '🧀', title: 'Townships Cheese', area: 'Region', areaLevel: 'safe', text: 'Artisanal cheeses from Eastern Townships farms and monasteries.' },
    { icon: '🍷', title: 'Local Wine & Cider', area: 'Townships', areaLevel: 'purple', text: 'Vineyards and cideries dot the surrounding countryside.' },
    { icon: '🍟', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes for a late-night bite.' },
    { icon: '☕', title: 'Student Cafés', area: 'Centre-ville · Lennoxville', areaLevel: 'blue', text: 'Two universities keep plenty of cheap cafés busy.' },
    { icon: '🍁', title: 'Sugar Shacks', area: 'Countryside', areaLevel: 'danger', text: 'Maple feasts in March and April in the farms around the city.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw & maple', text: 'Sugar shack season and roaring rapids in the Magog gorge. The rivers can flood low-lying areas in some years.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, outdoor shows at Lac des Nations, and beaches on the lakes nearby.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Peak colour', text: 'The Townships’ hills turn red and gold — usually peaking in late September to early October.' },
    { icon: '❄️', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Cold and snowy. Skiing at Mont-Orford and nearby resorts, snowshoeing on Mont-Bellevue.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Autoroute 10 (the Eastern Townships Autoroute) links Montréal to Sherbrooke, passing Magog and Mont-Orford.',
      time: '≈1 h 45 min from Montréal',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches run between Montréal and Sherbrooke several times a day. Check current schedules.',
      time: '≈2 h',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Montréal-Trudeau (YUL) is the nearest major airport. Sherbrooke has a small regional airport with limited service.',
      time: '≈1 h 45 min from YUL',
    },
    {
      icon: '🇺🇸',
      title: 'From Vermont',
      text: 'The US border at Stanstead–Derby Line is south of the city via Autoroute 55 and Interstate 91.',
      time: '≈45 min to the border',
    },
  ],

  stay: [
    {
      icon: '🎨',
      title: 'Downtown',
      area: 'Walkable · Murals & bars',
      text: 'Hotels near Wellington Street and Lac des Nations.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sherbrooke+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Sherbrooke%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎓',
      title: 'Lennoxville',
      area: 'Quiet · English-speaking',
      text: 'Inns and B&Bs near Bishop’s University.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lennoxville+Sherbrooke', level: 'blue' },
      ],
    },
    {
      icon: '⛰️',
      title: 'Magog & Orford',
      area: 'Lake & mountain',
      text: 'Stay by Lake Memphrémagog or at the foot of Mont-Orford, 30 minutes away.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Magog+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'STS Buses',
      text: 'The Société de transport de Sherbrooke (STS) runs the city’s bus network, connecting downtown with both university campuses, Lennoxville and Fleurimont. Pay cash or load trips onto a rechargeable Pratico card.',
      linkLabel: 'STS',
      linkUrl: 'https://www.sts.qc.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from the STS fares page (2026). Children 0–5 ride free with an adult; children 6–11 ride free with a children’s card from the STS operations centre — without it, the regular fare applies.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00 (exact fare)', 'Pratico card: $3.50 per trip', 'Day pass: $12.20', 'Monthly: $92.00'],
        },
        linkLabel: 'STS fares',
        linkUrl: 'https://www.sts.qc.ca/tarifs/titres-et-tarifs/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the murals and the lake are all walkable.' },
          { icon: '🚲', title: 'Bike', text: 'Good paths around the lake and along the rivers.' },
          { icon: '🚗', title: 'Car', text: 'Needed for Mont-Orford, Magog and the villages.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Family tip:',
      text: 'The STS family monthly pass ($104.60) covers up to two adults and four children aged 12 and under, and can be shared within the family.',
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
      { label: 'Sherbrooke / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
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
      { icon: '🎨', label: 'Mural circuit & lake promenade: free' },
      { icon: '🛏️', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', title: 'French First', text: 'Sherbrooke is mostly French-speaking; English is common in Lennoxville and at Bishop’s.' },
    { icon: '🚗', title: 'Car Helps', text: 'The city is easy by bus, but the Townships’ parks and villages need a car.' },
    { icon: '🎫', title: 'Exact Fare', text: 'STS drivers give no change — carry exact cash or use a Pratico card.' },
    { icon: '🌊', title: 'Spring Floods', text: 'The Saint-François and Magog rivers can rise fast during the spring melt. Stay back from the gorge edges.' },
    { icon: '❄️', title: 'Winter', text: 'Cold and snowy from December to March; winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Sherbrooke lies within Ndakina, the ancestral territory of the W8banaki (Abenaki) Nation.' },
    { icon: '🏥', title: 'Medical Care', lines: ['CHUS – Hôpital Fleurimont · 3001 12e Avenue Nord', 'CHUS – Hôtel-Dieu · 580 Rue Bowen Sud', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default SHERBROOKE;
