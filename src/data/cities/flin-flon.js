// Flin Flon — данные страницы /city/flin-flon (Флин-Флон, МАНИТОБА)
// Видео Флин-Флона в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — "Flin Flon in the Fall": озеро и
// гранитные скалы щита в городе, автор Theoffice89 (AaronC), сентябрь
// 2012, CC BY-SA 3.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года: 5 099 всего, 4 940 на манитобской
// стороне (город стоит на границе с Саскачеваном).
// Эвакуация из-за лесного пожара 28 мая — 25 июня 2025 (CTV, Global News).
// Больница — Northern Health Region (Third Ave & Church St; 50 Church St —
// это дом престарелых, не больница).
// Название из романа, статуя Флинтабетти Флонатина, закрытие шахты 777
// в 2022 году, Bakers Narrows — из общих знаний.

export const FLIN_FLON = {
  slug: 'flin-flon',
  name: 'Flin Flon',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · On the Saskatchewan Border',
  accentLevel: 'danger',
  heroIcon: '⛏️',
  heroImage: '/Cities/FlinFlon/hero.jpg',
  heroCredit: 'Photo: Theoffice89 / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 54.7682, lon: -101.8650 },
  subtitle: 'The Town Built on Rock',
  description:
    'Named after the hero of a science-fiction novel and built straight onto the granite of the Canadian Shield, Flin Flon is a copper-and-zinc mining town that climbs over bare rock, boardwalks and lakes. It sits right on the Manitoba–Saskatchewan border and opens onto a vast landscape of lakes, canoe routes and northern lights.',

  actions: [
    { label: 'Explore Flin Flon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈5.1K (2021)' },
    { label: 'Provinces', value: 'Manitoba · Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈8–9 h by car' },
    { label: 'Founded', value: '1920s–30s (mining)' },
  ],

  badges: ['Mining Town', 'Two Provinces', 'Canadian Shield'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '5,099', label: 'People in the 2021 census — about 4,940 on the Manitoba side, the rest in Saskatchewan', level: 'blue' },
    { value: '2', label: 'Provinces — the city straddles the Manitoba–Saskatchewan boundary', level: 'gold' },
    { value: '2025', label: 'A wildfire forced the whole town to evacuate from May 28 to June 25; the town itself was spared', level: 'danger' },
    { value: '1', label: 'Statue of Flintabbatey Flonatin, the fictional explorer the town is named after', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Shops and cafés on a street that winds over the rock' },
    { name: 'Ross Lake', icon: '🌊', tag: '🌊 In town', tagLevel: 'blue', meta: 'Small lake and walking trail in the middle of town' },
    { name: 'Hillside Streets', icon: '🏚️', tag: '🏚️ Rock town', tagLevel: 'danger', meta: 'Houses perched on granite, linked by steep stairs and boardwalks' },
    { name: 'Creighton (SK)', icon: '🏡', tag: '🏡 Neighbour', tagLevel: 'safe', meta: 'Separate town just across the border in Saskatchewan' },
    { name: 'Channing', icon: '⛏️', tag: '⛏️ Mine side', tagLevel: 'caution', meta: 'Area near the historic mine and smelter site' },
    { name: 'Bakers Narrows', icon: '🏕️', tag: '🏕️ Lakes', tagLevel: 'olive', meta: 'Provincial park and cottages south of town' },
  ],

  attractions: [
    {
      name: 'Flintabbatey Flonatin Statue',
      icon: '🗿',
      text: 'The town took its name from Josiah Flintabbatey Flonatin, the explorer hero of the novel “The Sunless City”, which prospectors found in the area. A cartoon-style statue of “Flinty” now greets visitors.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
    },
    {
      name: 'Town Built on Rock',
      icon: '🪨',
      text: 'Streets curve around outcrops of ancient Precambrian granite, and many houses sit on bare rock. Wander the hillside stairs for the views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'blue' }],
    },
    {
      name: 'Flin Flon Station Museum',
      icon: '🏛️',
      text: 'A small seasonal museum about the town’s mining and railway history. Check opening hours before you go.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Bakers Narrows Provincial Park',
      icon: '🏕️',
      text: 'A lakeside park with a beach, campground and lookout tower on Lake Athapapuskow, a short drive south.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
    },
    {
      name: 'Grass River & Lake Country',
      icon: '🛶',
      text: 'Flin Flon is a gateway to classic Canadian Shield canoe country — clear lakes, islands and portages.',
      tags: [{ label: 'Outfitters', level: 'blue' }, { label: 'Experience needed', level: 'caution' }],
    },
    {
      name: 'Northern Lights',
      icon: '🌌',
      text: 'Clear, dark nights from late August to April often bring the aurora. Head to a lake shore just outside town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Clear nights', level: 'purple' }],
    },
  ],

  outdoorHeading: 'Lakes on the Shield',
  outdoor: [
    { icon: '🎣', name: 'Fishing', dist: 'Surrounding lakes', text: 'Pike, walleye and lake trout in deep, clear lakes. Manitoba or Saskatchewan licence depending on where you fish.' },
    { icon: '🛶', name: 'Canoeing & Kayaking', dist: 'Lake Athapapuskow & beyond', text: 'Island-studded lakes and longer wilderness routes.' },
    { icon: '🥾', name: 'Hiking', dist: 'Around town', text: 'Rocky trails with lake views; watch your footing on bare granite.' },
    { icon: '🏖️', name: 'Swimming', dist: 'Bakers Narrows', text: 'A sandy beach in the provincial park in summer.' },
    { icon: '🛷', name: 'Winter Sports', dist: 'Trails & frozen lakes', text: 'Snowmobiling, ice fishing and cross-country skiing.' },
    { icon: '🔥', name: 'Fire Recovery', dist: 'Outside town', text: 'Large areas around town burned in 2025 — check trail and road conditions before heading out.' },
  ],

  food: [
    { icon: '🐟', title: 'Pickerel & Pike', area: 'Local restaurants', areaLevel: 'blue', text: 'Fresh lake fish on many menus.' },
    { icon: '🍔', title: 'Diners', area: 'Main Street', areaLevel: 'gold', text: 'Comfort food in a classic mining-town setting.' },
    { icon: '☕', title: 'Coffee Shops', area: 'Downtown', areaLevel: 'olive', text: 'Small local cafés for a warm-up.' },
    { icon: '🫐', title: 'Wild Blueberries', area: 'Late summer', areaLevel: 'purple', text: 'Berry picking on the rocky hills around town.' },
    { icon: '🍺', title: 'Pubs', area: 'Downtown', areaLevel: 'danger', text: 'Hockey-town pubs — the Flin Flon Bombers have a long history.' },
    { icon: '🛒', title: 'Groceries', area: 'Town', areaLevel: 'safe', text: 'Stock up here before heading to remote lakes.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Fire season starts', text: 'Late thaw; by late May the forest dries out and wildfire risk rises. Check fire bans and advisories.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm, long days for paddling, fishing and beaches — and the town’s summer festival.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Gold & aurora', text: 'Golden aspen against pink granite and dark nights for northern lights.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters — ice fishing, snowmobiling and short days.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 10 runs north from Dauphin and The Pas. From Saskatchewan, Highway 106 (the Hanson Lake Road) and Highway 167 lead in from the west. Distances between services are long.',
      time: '≈8–9 h from Winnipeg',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Flin Flon has a small regional airport with limited scheduled service. Check current flights to Winnipeg.',
      time: 'Limited service',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators from Winnipeg or The Pas.',
      time: 'Check operators',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'There is no passenger train to Flin Flon. VIA Rail’s Winnipeg–Churchill train stops in The Pas, about 1 h 30 min by road to the south.',
      time: 'Nearest: The Pas',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown Flin Flon',
      area: 'Near Main Street',
      text: 'Hotels and motels in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Flin+Flon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Flin%20Flon%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Bakers Narrows',
      area: 'Lakeside camping',
      text: 'Provincial park campground on Lake Athapapuskow.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '🎣',
      title: 'Fishing Lodges',
      area: 'Remote lakes',
      text: 'Lodges and outfitters on lakes around the region, some fly-in only.',
      links: [
        { label: 'Travel Manitoba', url: 'https://www.travelmanitoba.com/', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶',
      title: 'Small Town, No Transit',
      text: 'Flin Flon is small and has no city bus network. You can walk the downtown, but you will need a car to reach lakes and parks.',
      linkLabel: 'City of Flin Flon',
      linkUrl: 'https://www.cityofflinflon.ca/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis',
        text: 'Local taxis serve the town and the airport. Book ahead at night and on weekends.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local companies', 'Walking: downtown', 'Car: needed for lakes'],
        },
        linkLabel: 'City of Flin Flon',
        linkUrl: 'https://www.cityofflinflon.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Downtown is compact but steep — wear good shoes.' },
          { icon: '🚗', title: 'Car', text: 'Essential for Bakers Narrows and fishing lakes.' },
          { icon: '🛶', title: 'Boat', text: 'Many cabins and lodges are reached by water.' },
          { icon: '🚕', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Part of town is in Saskatchewan, and Creighton next door is fully in Saskatchewan. Sales tax and fishing licences change at the border line.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'On the Manitoba side, most purchases carry 5% GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Saskatchewan charges 5% GST plus 6% PST — so prices can differ slightly across the border.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Flin Flon / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
      { icon: '🎣', label: 'Fishing gear: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🗿', label: 'Flinty statue & town walks: free' },
      { icon: '🌌', label: 'Northern lights: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–20%.',
  },

  practical: [
    { icon: '🔥', title: 'Wildfire Season', text: 'In 2025 the whole town was evacuated for almost a month. From May to September, check Manitoba and Saskatchewan fire advisories and road closures.' },
    { icon: '🛣️', title: 'Remote Roads', text: 'Long distances with few services. Fill up whenever you can and carry water and a winter kit.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer. Most of Saskatchewan does not change clocks — check times if you travel further west.' },
    { icon: '🦟', title: 'Bugs', text: 'Black flies and mosquitoes in June and July — bring repellent.' },
    { icon: '❄️', title: 'Winter', text: 'Temperatures often fall below −30 °C. Plug in your car overnight.' },
    { icon: '🎣', title: 'Two Licences', text: 'Lakes on each side of the border need that province’s fishing licence.' },
    { icon: '🪶', title: 'Whose Land', text: 'Flin Flon is on the traditional lands of the Cree (Ininew) people; Mathias Colomb Cree Nation and other First Nations are in the region.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Flin Flon General Hospital', 'Third Ave & Church St', 'Emergency 24/7 · call 911'] },
  ],
};

export default FLIN_FLON;
