// Ottawa — данные страницы /city/ottawa
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Braeson Holland, "drone view over the city of Ottawa".
// Проверено по кадрам: центр города, Верховный суд, Парламент, река
// Оттава с мостами на закате. Оригинал 2560×1440 60 fps, 14 Мбит/с —
// пережат в 1920×1080 30 fps, ~5,2 МБ; постер — первый кадр.
// Центральный блок Парламента закрыт на реконструкцию с 2019 года и,
// по отчётам правительства, откроется не раньше начала 2030-х —
// на странице это сказано прямо, чтобы никто не ехал «в Парламент».
// Население — оценка города на конец 2025 года.

export const OTTAWA = {
  slug: 'ottawa',
  name: 'Ottawa',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Canada’s Capital',
  accentLevel: 'blue',
  heroIcon: '🏛️',
  heroImage: '/Cities/Ottawa/hero-poster.jpg',
  heroVideo: '/Cities/Ottawa/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.4215, lon: -75.6972 },
  subtitle: 'The Capital on the River',
  description:
    'The national capital, on the Ottawa River where Ontario faces Quebec across the water. Parliament on its cliff, a 19th-century canal that freezes into a skateway, the country’s national museums within walking distance of each other — and all of it on unceded Algonquin Anishinaabe land.',

  actions: [
    { label: 'Explore Ottawa', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.12M' },
    { label: 'Languages', value: 'English · French' },
    { label: 'Rideau Canal', value: 'UNESCO site' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Montréal', value: '≈200 km · 2h' },
    { label: 'From Toronto', value: '≈450 km · 4.5h' },
  ],

  badges: ['National Capital', 'Bilingual City', 'Algonquin Territory'],

  bestSeasons: [
    { icon: '🌷', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '⛸️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '7.8 km', label: 'Rideau Canal Skateway — the largest naturally frozen rink in the world, when winter cooperates', level: 'blue' },
    { value: '2030s', label: 'When Parliament’s Centre Block is expected to reopen — it has been closed for renovation since 2019', level: 'danger' },
    { value: '0', label: 'Days the Skateway opened in winter 2022–23 — a warm year, and a sign of what climate change does here', level: 'caution' },
    { value: '2007', label: 'The Rideau Canal, built 1826–1832, is inscribed as a UNESCO World Heritage Site', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Parliament & Downtown', icon: '🏛️', tag: '🏛️ Core', tagLevel: 'red', meta: 'Parliament Hill · Sparks Street · Confederation Park · National War Memorial' },
    { name: 'ByWard Market', icon: '🧺', tag: '🧺 Old market', tagLevel: 'gold', meta: 'Market laid out in the 1820s · Restaurants and bars · National Gallery nearby' },
    { name: 'The Glebe', icon: '🏡', tag: '🏡 South', tagLevel: 'safe', meta: 'Bank Street shops · Lansdowne Park · Along the canal' },
    { name: 'Centretown & Little Italy', icon: '🍝', tag: '🍝 West', tagLevel: 'olive', meta: 'Preston Street restaurants · Dow’s Lake · Chinatown on Somerset' },
    { name: 'Westboro & Hintonburg', icon: '☕', tag: '☕ West end', tagLevel: 'purple', meta: 'Independent shops and cafés · Riverside paths · Wellington Street West' },
    { name: 'Gatineau (Quebec)', icon: '🌉', tag: '🌉 Across the river', tagLevel: 'blue', meta: 'Canadian Museum of History · Gatineau Park · French-speaking · Quebec tax rules' },
  ],

  attractions: [
    {
      name: 'Parliament Hill',
      icon: '🏛️',
      text: 'The Gothic Revival parliament buildings on their cliff above the river are the symbol of the country — but the Centre Block, with the Peace Tower, has been closed for a full rehabilitation since 2019, and the government expects to finish construction in 2030–31 and reopen about a year later. The House of Commons sits temporarily in the West Block and the Senate in a converted railway station. Free guided tours run in summer; check visit.parl.ca. The grounds stay open to everyone.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Under renovation', level: 'danger' }],
    },
    {
      name: 'Rideau Canal & Skateway',
      icon: '⛸️',
      text: 'A canal built in 1826–1832 as a military supply route, still working in summer with its original locks beside Parliament, and a UNESCO World Heritage Site since 2007. In winter its downtown stretch becomes a 7.8 km skateway — but only when it is cold enough. It did not open at all in 2022–23 and managed only about ten days in 2023–24; in 2026 it opened on New Year’s Eve. Check the NCC ice report before you bring skates.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Weather-dependent', level: 'caution' }],
    },
    {
      name: 'National Museums',
      icon: '🖼️',
      text: 'The National Gallery (with the giant spider sculpture outside), the Canadian War Museum, the Canadian Museum of Nature and, across the river in Gatineau, the Canadian Museum of History — all within a short walk, bike or bus of each other. The Aviation and Space Museum is further east. Plan at least a day; check each one for current hours and admission.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Rainy-day plan', level: 'blue' }],
    },
    {
      name: 'ByWard Market',
      icon: '🧺',
      text: 'The old market district laid out by Lt-Col John By, the canal’s builder, in the 1820s. Food stalls, restaurants, bars and the busiest evening streets in the city. Lively — and, late at night, rough around the edges.',
      tags: [{ label: 'Free to wander', level: 'safe' }, { label: 'Evenings', level: 'purple' }],
    },
    {
      name: 'Gatineau Park',
      icon: '🌲',
      text: 'A 361 km² wilderness park in Quebec, fifteen minutes from Parliament, with lakes, lookouts over the Ottawa Valley, hiking and some of the best cross-country skiing near any capital. Parking fees and seasonal road closures apply — check the NCC before going.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Quebec side', level: 'olive' }],
    },
    {
      name: 'Winterlude',
      icon: '❄️',
      text: 'The capital region’s winter festival, held over three weekends in late January and February on both sides of the river — ice sculptures, the Skateway, snow playgrounds. In 2026 it ran 30 January to 16 February; 2027 dates are announced each autumn.',
      tags: [{ label: 'February', level: 'blue' }, { label: 'Mostly free', level: 'safe' }],
    },
  ],

  outdoorHeading: 'River, Canal and Greenbelt',
  outdoor: [
    { icon: '🚴', name: 'Cycling', dist: 'City-wide', text: 'Hundreds of kilometres of riverside and canal pathways, plus Sunday car-free parkways in summer. One of the best capitals in the world to explore by bike.' },
    { icon: '⛸️', name: 'Skating', dist: 'Rideau Canal', text: 'When the Skateway is open, it is the way to commute through downtown. Rentals and food huts line the ice. The season gets shorter in warm winters.' },
    { icon: '🛶', name: 'Paddling', dist: 'Canal · Ottawa River', text: 'Canoes and kayaks on the canal and Dow’s Lake in summer. The Ottawa River itself is big water with real current and whitewater upstream.' },
    { icon: '🥾', name: 'Gatineau Park', dist: '≈15 min', text: 'Trails, lookouts and lakes just across the river. Busy on autumn weekends when the colours peak.' },
    { icon: '🌳', name: 'Greenbelt', dist: 'Around the city', text: 'A belt of forest, wetland and farmland around the inner city, with trails at Mer Bleue bog and Stony Swamp.' },
    { icon: '🌷', name: 'Tulips', dist: 'Commissioner’s Park', text: 'The Canadian Tulip Festival in May recalls the bulbs the Netherlands has sent since the Second World War, when the Dutch royal family sheltered in Ottawa.' },
  ],

  food: [
    { icon: '🥐', title: 'BeaverTails', area: 'ByWard Market', areaLevel: 'gold', text: 'The fried-dough pastry was born in Ottawa’s region and is sold from huts on the canal in winter. A tourist cliché that is also genuinely good when it is −20 °C.' },
    { icon: '🍝', title: 'Little Italy', area: 'Preston Street', areaLevel: 'danger', text: 'Italian restaurants and patios along Preston Street, a short walk from Dow’s Lake.' },
    { icon: '🍜', title: 'Chinatown', area: 'Somerset Street West', areaLevel: 'purple', text: 'Vietnamese, Chinese and pan-Asian restaurants under the Chinatown arch.' },
    { icon: '🥘', title: 'Shawarma', area: 'City-wide', areaLevel: 'olive', text: 'Ottawa has a large Lebanese community and a serious shawarma culture — locals argue about it the way other cities argue about pizza.' },
    { icon: '🍺', title: 'Craft Beer', area: 'Hintonburg · Glebe', areaLevel: 'blue', text: 'A strong brewery scene, especially in the west end.' },
    { icon: '🧀', title: 'Québécois Food', area: 'Gatineau', areaLevel: 'safe', text: 'Cross the bridge for poutine, tourtière and a different food culture — and a different sales tax.' },
  ],

  seasons: [
    { icon: '🌷', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'Tulips and thaw', text: 'The tulip festival in May and the canal reopening to boats. Spring floods on the Ottawa River can be serious in wet years.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Canada Day and humidity', text: 'Festivals, Canada Day on 1 July, Parliament tours. Hot and humid, with thunderstorms; Canada Day crowds and security are heavy downtown.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours', text: 'Maple colours in Gatineau Park and along the canal, cool clear days. Arguably the best time to visit.' },
    { icon: '⛸️', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Cold, if you are lucky', text: 'One of the coldest capitals in the world, with −25 °C cold snaps. That is what makes the Skateway and Winterlude possible — warm winters now cut both short.' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Air — Ottawa (YOW)',
      text: 'The airport is linked to the city by O-Train Line 4, opened in January 2025, from South Keys station — no premium fare. Transfer to Line 2 there for the city.',
      time: '≈35–55 min to downtown by train',
    },
    {
      icon: '🚆',
      title: 'By Train — VIA Rail',
      text: 'Frequent VIA Rail trains on the Montréal–Ottawa–Toronto corridor arrive at Ottawa station east of downtown, connected to the O-Train.',
      time: '≈2h from Montréal · ≈4.5h from Toronto',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Highway 417 from Montréal and Highway 401/416 from Toronto. Downtown parking is expensive and limited; winter driving needs real winter tires.',
      time: '≈2h from Montréal · ≈4.5h from Toronto',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity coaches connect Ottawa with Montréal, Toronto and Kingston. Schedules and operators change; check before planning.',
      time: '≈2–5h',
    },
  ],

  stay: [
    {
      icon: '🏛️',
      title: 'Downtown & ByWard Market',
      area: 'Walkable · Most expensive',
      text: 'Walk to Parliament, the canal, the market and the museums. Book early around Canada Day and Winterlude.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Ottawa', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Ottawa%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🏡',
      title: 'The Glebe & Centretown',
      area: 'Neighbourhood feel',
      text: 'Smaller hotels and rentals close to the canal, Lansdowne and Bank Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Centretown+Ottawa', level: 'blue' },
      ],
    },
    {
      icon: '🌉',
      title: 'Gatineau',
      area: 'Across the river · Quebec',
      text: 'Often cheaper, close to the Museum of History and Gatineau Park, a bridge from Parliament. Prices include Quebec taxes, not Ontario ones.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gatineau+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚆',
      title: 'OC Transpo — O-Train & Buses',
      text: 'The O-Train runs east–west across downtown on Line 1 and north–south on Lines 2 and 4 (to the airport), with a large bus network. Line 1’s east and west extensions are built or under construction but not yet open — the east extension is waiting on a technical fix, the west is expected in 2027.',
      linkLabel: 'OC Transpo',
      linkUrl: 'https://www.octranspo.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Fares',
        text: 'Fares below are from OC Transpo for 2026. Pay with Presto, a contactless bank card or cash. Presto has a daily cap at the DayPass price. The same fare covers buses and the O-Train, including the airport line.',
        fareBox: {
          label: 'Adult',
          lines: ['Presto / contactless: $4.10', 'Cash: $4.15', 'DayPass: $12.25', 'Monthly pass: $138.50'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.octranspo.com/en/fares/costs/',
      },
      {
        icon: '🌉',
        title: 'Crossing to Gatineau',
        text: 'Gatineau is served by STO, a separate Quebec transit agency. Some connections are shared downtown; check transfer rules between the two systems.',
        fareBox: {
          label: 'Two systems',
          lines: ['Ottawa: OC Transpo', 'Gatineau: STO', 'Check transfer rules'],
        },
        linkLabel: 'STO',
        linkUrl: 'https://www.sto.ca/',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚲', title: 'Bike', text: 'Excellent pathways; bike share and rentals in summer.' },
          { icon: '🚶', title: 'On Foot', text: 'Parliament, the Market, the Gallery and the canal are all close together.' },
          { icon: '⛸️', title: 'Skates', text: 'In a good winter, the canal is a real commuting route.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available, including to the airport.' },
        ],
      },
    ],
    proTip: {
      label: 'Skateway tip:',
      text: 'The NCC posts ice conditions daily in winter. Sections open and close separately, and a warm spell can shut the whole thing overnight — check the morning you plan to skate.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases in Ottawa carry 13% HST. Hotels and short-term rentals also charge the city’s Municipal Accommodation Tax, which rose to 6% on 1 January 2026. Cross the bridge to Gatineau and you are in Quebec, where GST plus QST comes to 14.975% — prices on the two sides of the river are taxed differently.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ottawa / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Gatineau / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 13% HST + 6% Municipal Accommodation Tax' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', label: 'Museum and event tickets: 13% HST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '📚', label: 'Printed books: provincial portion rebated' },
      { icon: '🧒', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '❄️', title: 'Real Winter', text: 'January cold snaps reach −25 °C or lower with wind chill. Dress in layers, cover skin, and treat frostbite warnings seriously.' },
    { icon: '🏛️', title: 'Parliament Under Repair', text: 'The Centre Block and Peace Tower are closed until the 2030s. Tours visit the temporary chambers instead; check visit.parl.ca for current tours.' },
    { icon: '🌉', title: 'Two Provinces', text: 'Gatineau is in Quebec: French first, different taxes, different transit, different alcohol rules. Ottawa and Gatineau share the same time zone.' },
    { icon: '🗣️', title: 'Bilingual City', text: 'Ottawa is officially bilingual and federal services are in both languages; in Gatineau, French is the default. A “bonjour-hello” greeting is normal.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', title: 'Transit Payment', text: 'Tap a contactless bank card or Presto on OC Transpo; the daily cap means you never pay more than a DayPass.' },
    { icon: '🪶', title: 'Whose Land', text: 'Ottawa is on the unceded, unsurrendered territory of the Algonquin Anishinaabe Nation, whose homeland is the watershed of Kichi Sibi — the Ottawa River. No treaty ever ceded this land, including the ground Parliament stands on.' },
    { icon: '🏥', title: 'Medical Care', lines: ['The Ottawa Hospital — Civic Campus', '1053 Carling Avenue', 'Emergencies: call 911'] },
  ],
};

export default OTTAWA;
