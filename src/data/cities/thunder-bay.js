// Thunder Bay — данные страницы /city/thunder-bay
// Видео Тандер-Бея в бесплатных банках нет: по "thunder bay" Pexels и
// Pixabay отдают грозы и чужие заливы. На Commons есть промо-ролик
// "Thunder Bay and Surrounding" (Epica Pictures, CC BY 3.0), но он 2 мин,
// 1280×552 и почти весь — люди крупным планом; для шапки не годится.
// В шапке фото с Wikimedia Commons — Marina Park осенью, озеро Верхнее
// и Спящий Великан на горизонте, автор Tony Webster, 2015, CC BY 2.0.
// Лицензия требует указывать автора — отсюда heroCredit.
// Население — перепись 2021 года. Тарифы — с сайта города, с 1.04.2026.
// Высота водопада Какабека (~40 м) — из общих знаний, источника в этот
// раз не нашлось, на странице не указана.

export const THUNDER_BAY = {
  slug: 'thunder-bay',
  name: 'Thunder Bay',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · North Shore of Lake Superior',
  accentLevel: 'blue',
  heroIcon: '⛰️',
  heroImage: '/Cities/ThunderBay/hero.jpg',
  heroCredit: 'Photo: Tony Webster / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.3809, lon: -89.2477 },
  subtitle: 'Under the Sleeping Giant',
  description:
    'The largest city on Lake Superior’s Canadian shore, a grain and timber port at the head of the Great Lakes, facing a long mesa across the bay that looks like a giant lying on his back. It is also a city with hard truths: the place Terry Fox had to stop, and the subject of national reports on racism against Indigenous people.',

  actions: [
    { label: 'Explore Thunder Bay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈108K (2021)' },
    { label: 'Lake', value: 'Superior' },
    { label: 'Climate', value: 'Cold · Continental' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈1,400 km · 2h flight' },
    { label: 'To Winnipeg', value: '≈700 km · 8h' },
  ],

  badges: ['Lake Superior', 'Sleeping Giant', 'Robinson-Superior Treaty'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1980', label: 'Terry Fox ends his Marathon of Hope just outside the city on 1 September, after about 5,373 km', level: 'danger' },
    { value: '2007', label: 'The Sleeping Giant is voted one of the Seven Wonders of Canada', level: 'gold' },
    { value: '44', label: 'Recommendations in the 2018 Broken Trust report, which found systemic racism in the city’s police', level: 'purple' },
    { value: '7', label: 'Indigenous students who died away from home in Thunder Bay between 2000 and 2011 — Seven Fallen Feathers', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Port Arthur & the Waterfront', icon: '⚓', tag: '⚓ North core', tagLevel: 'blue', meta: 'Marina Park · Prince Arthur’s Landing · Bay Street · Views to the Sleeping Giant' },
    { name: 'Fort William', icon: '🏛️', tag: '🏛️ South core', tagLevel: 'gold', meta: 'The older south downtown · Victoria Avenue · Grain elevators by the river' },
    { name: 'Bay & Algoma', icon: '🥞', tag: '🥞 Finnish quarter', tagLevel: 'danger', meta: 'Historic Finnish neighbourhood · The Hoito restaurant · Cafés' },
    { name: 'Intercity', icon: '🛍️', tag: '🛍️ Middle', tagLevel: 'olive', meta: 'Where the two old cities meet · Shopping and hotels · Car-oriented' },
    { name: 'Current River', icon: '🌲', tag: '🌲 North end', tagLevel: 'safe', meta: 'Boulevard Lake · Trails · Terry Fox Monument just east on Highway 11/17' },
    { name: 'Fort William First Nation', icon: '🪶', tag: '🪶 Neighbour', tagLevel: 'purple', meta: 'Anemki Wajiw (Mount McKay) lookout · Across the Kaministiquia River' },
  ],

  attractions: [
    {
      name: 'Sleeping Giant Provincial Park',
      icon: '⛰️',
      text: 'The great mesa across the bay, Nanabijou in Ojibwe tradition, protected as a provincial park about an hour’s drive away. Trails climb to the Top of the Giant, with high cliffs dropping to Lake Superior. A long, hard day hike — start early and carry plenty of water.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Park fee', level: 'caution' }],
    },
    {
      name: 'Terry Fox Monument',
      icon: '🏃',
      text: 'On 1 September 1980, after 143 days and about 5,373 km, Terry Fox was forced to stop his cross-Canada run near Thunder Bay when cancer had spread to his lungs. A bronze monument overlooks Lake Superior on the Trans-Canada Highway east of the city, near where he stopped. Few places in the country feel as quiet.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Lookout', level: 'gold' }],
    },
    {
      name: 'Kakabeka Falls',
      icon: '💧',
      text: 'A powerful waterfall on the Kaministiquia River about 30 minutes west of the city, falling into a deep rock gorge. Boardwalks run along both sides. Flow is highest in spring.',
      tags: [{ label: 'Provincial park', level: 'blue' }, { label: 'Easy walk', level: 'safe' }],
    },
    {
      name: 'Fort William Historical Park',
      icon: '🏰',
      text: 'A large reconstruction of the North West Company’s fur-trade post, where voyageurs met each summer to trade with the Anishinaabe and Métis. Costumed interpretation in summer; check the current season and hours.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Summer', level: 'caution' }],
    },
    {
      name: 'Seven Fallen Feathers & Broken Trust',
      icon: '🕯️',
      text: 'Between 2000 and 2011, seven Indigenous high school students who had to leave their remote northern communities to attend school in Thunder Bay died here; five were found in the city’s rivers. Journalist Tanya Talaga told their story in Seven Fallen Feathers. In 2018 the provincial police review office’s Broken Trust report found systemic racism in the Thunder Bay Police Service and called for nine death investigations to be reopened. Visitors should know this is part of the city.',
      tags: [{ label: 'Hard history', level: 'danger' }],
    },
    {
      name: 'Marina Park & Prince Arthur’s Landing',
      icon: '⚓',
      text: 'The waterfront park in Port Arthur, with a splash pad, public art, a skating rink in winter and the best view of the Sleeping Giant from town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Waterfront', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Lake Superior and the Boreal',
  outdoor: [
    { icon: '🥾', name: 'Top of the Giant', dist: 'Sleeping Giant PP', text: 'One of the great hikes of the Great Lakes — long, steep at the end, with a cliff-edge view over Superior. Allow a full day.' },
    { icon: '🛶', name: 'Lake Superior Paddling', dist: 'Along the shore', text: 'Spectacular but serious: the lake is cold all summer, and wind and waves build fast. Paddle with a guide or real experience.' },
    { icon: '⛷️', name: 'Skiing', dist: 'Around the city', text: 'Downhill at Loch Lomond and Mount Baldy, and excellent cross-country trails. Winter is long and reliable.' },
    { icon: '💎', name: 'Amethyst', dist: 'East of the city', text: 'The region is known for amethyst, and several mines let visitors dig for their own in summer.' },
    { icon: '🎣', name: 'Fishing', dist: 'Rivers and Superior', text: 'Lake trout, salmon and steelhead. An Ontario fishing licence is required.' },
    { icon: '🐻', name: 'Wildlife', dist: 'Everywhere outside town', text: 'Black bears, moose and wolves live close to the city. Carry bear spray on remote trails and watch for moose on the highways at dusk.' },
  ],

  food: [
    { icon: '🥞', title: 'Finnish Pancakes', area: 'Bay & Algoma', areaLevel: 'danger', text: 'Thunder Bay has one of the largest Finnish communities outside Finland, and thin Finnish pancakes are the local breakfast.' },
    { icon: '🍩', title: 'Persians', area: 'City-wide', areaLevel: 'gold', text: 'A sweet cinnamon roll with pink icing, invented in Thunder Bay and almost unknown elsewhere.' },
    { icon: '🐟', title: 'Lake Superior Fish', area: 'Waterfront', areaLevel: 'blue', text: 'Whitefish and lake trout on local menus.' },
    { icon: '🍺', title: 'Craft Beer', area: 'Port Arthur', areaLevel: 'olive', text: 'Local breweries named after the Sleeping Giant and the lake.' },
    { icon: '☕', title: 'Cafés', area: 'Bay & Algoma · Waterfront', areaLevel: 'purple', text: 'Independent coffee shops in the older neighbourhoods.' },
    { icon: '🫐', title: 'Wild Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'The boreal forest around the city is full of wild blueberries in August.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Late and muddy', text: 'Spring comes late; ice lingers on the lake into May. Kakabeka Falls is at its most powerful. Blackflies arrive in June.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Best season', text: 'Long, warm days cooled by Lake Superior. Hiking, paddling and festivals. Bring bug spray.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour on the shore', text: 'Maples and birches along the Superior shore, crisp days, fewer insects. Weather turns quickly in late October.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Long and cold', text: 'Deep cold, frequent −30 °C nights and reliable snow. Great for skiing, hard for driving the long highways.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air — Thunder Bay (YQT)',
      text: 'The practical way in. Thunder Bay International Airport has direct flights from Toronto and Winnipeg.',
      time: '≈2h from Toronto',
    },
    {
      icon: '🚗',
      title: 'By Car — Trans-Canada Highway',
      text: 'Highways 11/17 along the Lake Superior shore are among the most scenic and remote in Canada — long stretches with no services or cell signal. Fuel up at every chance and avoid night driving because of moose.',
      time: '≈8h from Winnipeg · ≈14h from Toronto',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coach service along the Trans-Canada is limited and changes often; check current operators.',
      time: 'Long journeys',
    },
    {
      icon: '🛂',
      title: 'From the United States',
      text: 'The Pigeon River crossing on Highway 61 links Thunder Bay with Minnesota’s North Shore.',
      time: '≈45 min to the border',
    },
  ],

  stay: [
    {
      icon: '⚓',
      title: 'Port Arthur Waterfront',
      area: 'Walkable · Lake views',
      text: 'Hotels near Marina Park and Bay Street, the most pleasant base in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Thunder+Bay+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Thunder%20Bay%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🛍️',
      title: 'Intercity & Airport',
      area: 'Car-friendly',
      text: 'Chain hotels near the shopping centres and the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Thunder+Bay+Intercity', level: 'blue' },
      ],
    },
    {
      icon: '⛺',
      title: 'Provincial Park Camping',
      area: 'Summer · Book ahead',
      text: 'Campgrounds at Sleeping Giant and Kakabeka Falls provincial parks.',
      links: [
        { label: 'Ontario Parks Reservations', url: 'https://reservations.ontarioparks.ca/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Thunder Bay Transit',
      text: 'City buses link Port Arthur, Fort William, Intercity, the university and the college. Service is limited in the evenings and on Sundays, and the main sights outside the city need a car.',
      linkLabel: 'Thunder Bay Transit',
      linkUrl: 'https://www.thunderbay.ca/city-services/transit/fares-and-passes/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below took effect on 1 April 2026. Cash must be exact; drivers cannot give change.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (exact): $3.25', 'Monthly pass: $92.65'],
        },
        linkLabel: 'Fares and passes',
        linkUrl: 'https://www.thunderbay.ca/city-services/transit/fares-and-passes/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚗', title: 'Car', text: 'Essential for the Sleeping Giant, Kakabeka Falls and the Terry Fox Monument.' },
          { icon: '🚲', title: 'Bike', text: 'Waterfront and Boulevard Lake trails are good in summer.' },
          { icon: '🚕', title: 'Taxis', text: 'Available in the city; book ahead for early flights.' },
          { icon: '🚶', title: 'On Foot', text: 'The Port Arthur waterfront and Bay & Algoma are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Highway tip:',
      text: 'On Highways 11 and 17 along Superior, gas stations can be 100+ km apart and close early. Never pass a station with half a tank.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels may also add a Municipal Accommodation Tax — check the breakdown on your booking.',
    comparison: [
      { label: 'Manitoba', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Thunder Bay / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 13% HST (+ any accommodation tax)' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', label: 'Park and museum fees: 13% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '🧒', label: "Children's clothing: provincial portion rebated" },
      { icon: '🏃', label: 'Terry Fox Monument and waterfront: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '⛽', title: 'Remote Highways', text: 'Fuel, food and phone signal are scarce along the Superior shore. Plan stops and carry water and warm clothes in every season.' },
    { icon: '🫎', title: 'Moose on the Road', text: 'Moose collisions are deadly. Slow down at dusk and dawn and watch the ditches.' },
    { icon: '🦟', title: 'Bugs', text: 'Blackflies in June and mosquitoes all summer. Bring repellent and long sleeves.' },
    { icon: '🌊', title: 'Lake Superior Is Cold', text: 'Even in August the water can be cold enough to cause shock. Wear a lifejacket on the water.' },
    { icon: '⏰', title: 'Time Zone', text: 'Thunder Bay is on Eastern Time like Toronto. Just to the west the province switches to Central Time — watch the clock if you drive toward Manitoba.' },
    { icon: '✈️', title: 'Fly In', text: 'From southern Ontario, flying is far quicker than the two-day drive.' },
    { icon: '🪶', title: 'Whose Land', text: 'Thunder Bay is on the traditional territory of the Anishinaabe and Fort William First Nation, signatory to the Robinson-Superior Treaty of 1850. Many Indigenous students and families from remote northern First Nations live in the city for school and health care.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Thunder Bay Regional Health Sciences Centre', '980 Oliver Road', 'Emergencies: call 911'] },
  ],
};

export default THUNDER_BAY;
