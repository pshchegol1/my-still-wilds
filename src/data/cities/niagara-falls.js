// Niagara Falls — данные страницы /city/niagara-falls
// В шапке ролик, присланный владельцем сайта: дрон над водопадом
// Подкова (Horseshoe Falls) и порогами над ним — проверено по кадрам.
// Исходник был в HDR (HLG, bt2020): переведён в SDR (bt709) тонмаппингом,
// иначе на обычных экранах выглядел бы блёклым. 19,5 с, пережат с 31 до
// ~6,8 МБ; постер — первый кадр.
// Это страница канадского города Niagara Falls, Онтарио. Одноимённый
// город в штате Нью-Йорк — на другом берегу, и путать их нельзя:
// погранпереход, другая валюта, другие правила.
// Население — перепись 2021 года (свежей оценки по самому городу не
// нашлось). MAT — 4% с 1 апреля 2026, 5% с 1 апреля 2027.

export const NIAGARA_FALLS = {
  slug: 'niagara-falls',
  name: 'Niagara Falls',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Niagara Region',
  accentLevel: 'safe',
  heroIcon: '🌊',
  heroImage: '/Cities/NiagaraFalls/hero-poster.jpg',
  heroVideo: '/Cities/NiagaraFalls/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.0896, lon: -79.0849 },
  subtitle: 'Where the River Falls Off a Cliff',
  description:
    'A city built around one of the most famous waterfalls on earth. The Horseshoe Falls — nearly all of it in Canada — pours the overflow of four Great Lakes over a cliff on the edge of town. Beside it sits a free public park more than a century old; a block away, the neon of Clifton Hill. Both are Niagara.',

  actions: [
    { label: 'Explore Niagara Falls', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈94K (2021)' },
    { label: 'Horseshoe Falls', value: '≈57 m high' },
    { label: 'Park Entry', value: 'Free' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈130 km · 1.5h' },
    { label: 'To the US', value: 'Rainbow Bridge' },
  ],

  badges: ['Horseshoe Falls', 'Border City', 'Treaty 381 Lands'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '169,000', label: 'Cubic metres of water over the brink every minute at peak daytime flow, per Niagara Parks', level: 'blue' },
    { value: '~½', label: 'Of the river is diverted for hydro power — more at night and in winter, under a 1950 treaty', level: 'gold' },
    { value: '1885', label: 'The Niagara Parks Commission is created to keep the falls’ edge a free public park', level: 'safe' },
    { value: '2022', label: 'The old Power Station opens to visitors, with a 670 m tunnel down to the river', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Queen Victoria Park', icon: '🌊', tag: '🌊 The falls', tagLevel: 'blue', meta: 'Free riverside park · Table Rock at the brink · Gardens · Nightly illumination' },
    { name: 'Clifton Hill', icon: '🎡', tag: '🎡 The strip', tagLevel: 'danger', meta: 'Wax museums, haunted houses, the SkyWheel · Loud, bright, deliberate kitsch' },
    { name: 'Fallsview', icon: '🏨', tag: '🏨 Above the falls', tagLevel: 'gold', meta: 'High-rise hotels and casino · Rooms with falls views · Expensive' },
    { name: 'Lundy’s Lane', icon: '🛣️', tag: '🛣️ Motels', tagLevel: 'olive', meta: 'Cheaper motels and chain restaurants · 1814 battlefield · Car needed' },
    { name: 'Queen Street Downtown', icon: '🏛️', tag: '🏛️ Old downtown', tagLevel: 'purple', meta: 'The original town centre · Quieter · Murals and local cafés' },
    { name: 'Niagara Parkway North', icon: '🍇', tag: '🍇 Downriver', tagLevel: 'safe', meta: 'Whirlpool and Niagara Glen · Toward Niagara-on-the-Lake and wineries' },
  ],

  attractions: [
    {
      name: 'Horseshoe Falls & Table Rock',
      icon: '🌊',
      text: 'The viewpoint at Table Rock puts you a few metres from the brink, where the green water curls over a drop of about 57 metres. It is free, open year-round, and the single most important thing to see. Expect to get wet from the mist. The falls are lit in colour every night after dark.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
    },
    {
      name: 'The Boat Trip',
      icon: '🚤',
      text: 'Boats leave from the bottom of the gorge and push into the mist at the foot of the Horseshoe. Loud, soaking and genuinely overwhelming — the closest you can get to the falls. Seasonal, usually spring to late fall; ponchos provided.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Niagara Parks Power Station',
      icon: '⚡',
      text: 'A 1905 hydro power station beside the upper rapids, restored and opened to visitors. Since July 2022 a tunnel about 670 m long takes you some 55 m underground to a viewing platform at river level below the falls. Good for understanding why so much of the river does not go over the edge.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
    },
    {
      name: 'Where the Water Goes',
      icon: '⚖️',
      text: 'Under the 1950 Niagara River Water Diversion Treaty between Canada and the US, roughly half the river is taken around the falls to power stations — more at night and in the off-season, when fewer people are watching. The falls you see are partly a managed spectacle. It is not a secret, just rarely mentioned.',
      tags: [{ label: 'Honest context', level: 'danger' }],
    },
    {
      name: 'Whirlpool & Niagara Glen',
      icon: '🌀',
      text: 'Downriver the gorge turns sharply and the water spins in a giant whirlpool. An old cable car crosses above it, and the Niagara Glen trails drop to the river through boulders and forest — the wildest part of the area and much quieter than the falls.',
      tags: [{ label: 'Trails free', level: 'safe' }, { label: 'Steep', level: 'caution' }],
    },
    {
      name: 'Niagara-on-the-Lake & Wineries',
      icon: '🍇',
      text: 'About 20 km north along the Niagara Parkway, a preserved 19th-century town and the heart of Ontario wine country, known especially for icewine. Easy by car or bike; WEGO buses run part of the way in season.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Wine', level: 'purple' }],
    },
  ],

  outdoorHeading: 'The Gorge, the Parkway and the River',
  outdoor: [
    { icon: '🚴', name: 'Niagara Parkway Trail', dist: 'Fort Erie to Niagara-on-the-Lake', text: 'A long recreational trail beside the river — the best way to see the falls, the gorge and the wineries in one ride. Flat and well signed.' },
    { icon: '🥾', name: 'Niagara Glen', dist: 'Downriver', text: 'Rough trails down into the gorge among boulders and old forest. Steep and slippery when wet; allow time for the climb back up.' },
    { icon: '🌊', name: 'White Water Walk', dist: 'Lower gorge', text: 'A boardwalk at the edge of the violent lower rapids of the gorge. Seasonal and ticketed.' },
    { icon: '🦅', name: 'Birding', dist: 'Gorge and river', text: 'The Niagara River is an Important Bird Area, especially for gulls in late fall and winter, when thousands gather below the falls.' },
    { icon: '❄️', name: 'Winter Falls', dist: 'Queen Victoria Park', text: 'Ice builds up around the falls in cold winters, but the falls themselves do not stop. A quiet, beautiful time to visit — dress for wind and spray that freezes.' },
    { icon: '⚠️', name: 'Stay Behind the Rails', dist: 'Everywhere', text: 'The current above the falls is lethal. Never climb railings or enter the river; people have died here.' },
  ],

  food: [
    { icon: '🍷', title: 'Wine Country', area: 'Niagara-on-the-Lake · Bench', areaLevel: 'purple', text: 'Ontario’s main wine region, known for icewine and cool-climate whites. Tasting rooms line the roads north and west of the city.' },
    { icon: '🍽️', title: 'Falls-View Dining', area: 'Fallsview · Skylon Tower', areaLevel: 'gold', text: 'Restaurants with a view of the falls charge for it. Book a window table, and expect tourist prices.' },
    { icon: '🍔', title: 'Clifton Hill Food', area: 'Clifton Hill', areaLevel: 'danger', text: 'Chains and themed restaurants aimed at tourists. Convenient, rarely memorable.' },
    { icon: '☕', title: 'Local Cafés', area: 'Queen Street', areaLevel: 'blue', text: 'The old downtown has the local coffee shops and family restaurants, away from the tourist zone.' },
    { icon: '🍑', title: 'Fruit Stands', area: 'Niagara Parkway · Bench', areaLevel: 'safe', text: 'Niagara is Ontario’s fruit belt — peaches, cherries and grapes at roadside stands in summer.' },
    { icon: '🍺', title: 'Craft Beer', area: 'Region-wide', areaLevel: 'olive', text: 'Breweries are scattered across the Niagara region, alongside the wineries.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Rising flow, blossoms', text: 'Spring melt pushes the flow up, the boats return and fruit trees blossom along the Parkway. Cool and changeable.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Peak crowds', text: 'Everything open, longest hours, biggest crowds and highest hotel prices. Hot and humid; the mist helps.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Harvest season', text: 'Grape harvest, autumn colours in the gorge, smaller crowds. The best balance of the year.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Ice and lights', text: 'Ice formations, a winter light festival and low prices. Boats and some attractions close; cold wind off the gorge.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car from Toronto',
      text: 'The QEW around the end of Lake Ontario, about 130 km. Heavy traffic on summer weekends. Parking near the falls is paid and expensive in season.',
      time: '≈1.5h from Toronto',
    },
    {
      icon: '🚆',
      title: 'By GO Train',
      text: 'GO Transit runs trains from Toronto’s Union Station to Niagara Falls station. From 8 September 2026 three of the five weekday trips were cut, so check the current timetable — weekend service differs. The station is about 2 km from the falls; use WEGO or walk.',
      time: '≈2h from Union Station',
    },
    {
      icon: '🛂',
      title: 'From the United States',
      text: 'The Rainbow Bridge crosses right beside the falls; the Queenston–Lewiston bridge is downriver. You need a passport or equivalent document. Walking across the Rainbow Bridge is possible and memorable.',
      time: 'Minutes from the falls',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Toronto Pearson (YYZ) is the main international airport; Buffalo Niagara (BUF) in the US is closer but means a border crossing.',
      time: '≈1.5h from YYZ',
    },
  ],

  stay: [
    {
      icon: '🏨',
      title: 'Fallsview',
      area: 'Falls views · Most expensive',
      text: 'High-rise hotels above the falls. Pay for a falls-view room only if you will actually be in it — confirm the view type before booking.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fallsview+Niagara+Falls+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Niagara%20Falls%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🛣️',
      title: 'Lundy’s Lane',
      area: 'Cheaper · Car needed',
      text: 'Motels and chain hotels a short drive from the falls. Good value outside peak weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lundys+Lane+Niagara+Falls', level: 'blue' },
      ],
    },
    {
      icon: '🍇',
      title: 'Niagara-on-the-Lake',
      area: 'Quieter · Wine country',
      text: 'Inns and B&Bs in the historic town, 20 minutes from the falls. More expensive, much calmer.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Niagara-on-the-Lake', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'WEGO & Niagara Region Transit',
      text: 'WEGO is the visitor bus network run with Niagara Parks, linking the falls, Clifton Hill, Fallsview, Lundy’s Lane and sights along the Parkway. Regular city service is Niagara Region Transit. For wineries and Niagara-on-the-Lake, a car, bike or tour is easiest.',
      linkLabel: 'WEGO — Niagara Parks',
      linkUrl: 'https://www.niagaraparks.com/getting-around/wego-niagara-falls-bus/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'WEGO Passes',
        text: 'Prices below are 2026 fares, tax included. Children 2 and under ride free. Some Niagara Parks attraction passes include WEGO.',
        fareBox: {
          label: 'WEGO',
          lines: ['24-hour adult: $16', '24-hour child (3–12): $12', '48-hour adult: $20', '48-hour child: $16'],
        },
        linkLabel: 'WEGO',
        linkUrl: 'https://www.niagaraparks.com/getting-around/wego-niagara-falls-bus/',
      },
      {
        icon: '🅿️',
        title: 'Parking',
        text: 'Lots near the falls are paid and fill up on summer weekends. Niagara Parks sells a parking pass covering several of its lots; otherwise park once and use WEGO.',
        fareBox: {
          label: 'Tips',
          lines: ['Park once, then ride WEGO', 'Avoid Clifton Hill lots on weekends', 'Check event days'],
        },
        linkLabel: 'Parking pass',
        linkUrl: 'https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/parking-pass/',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚲', title: 'Bike', text: 'The Parkway trail is ideal for cycling; rentals available in season.' },
          { icon: '🚶', title: 'On Foot', text: 'The falls, Clifton Hill and Fallsview are walkable but hilly.' },
          { icon: '🚕', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🍇', title: 'Wine Tours', text: 'Guided tours handle the driving between wineries.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'See the falls twice: early morning, before the tour buses, and after dark when they are lit in colour. Midday in July is the worst time to be at Table Rock.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels also charge Niagara Falls’ Municipal Accommodation Tax: 4% of the room rate from 1 April 2026, rising to 5% on 1 April 2027. Some properties add their own destination or resort fees on top — check the full breakdown before booking. Across the Rainbow Bridge, US prices are in US dollars and taxed differently.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Niagara Falls / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: 13% HST + 4% MAT (5% from April 2027)' },
      { icon: '🍽️', label: 'Restaurant meals: 13% HST' },
      { icon: '🍷', label: 'Wine and alcohol: 13% HST' },
      { icon: '🎟️', label: 'Attraction tickets: often tax-included — check' },
    ],
    exempt: [
      { icon: '🌊', label: 'Queen Victoria Park and the falls: free' },
      { icon: '🥦', label: 'Basic groceries: no HST' },
      { icon: '💊', label: 'Prescription medication: no HST' },
      { icon: '🧒', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides and drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', title: 'Two Cities, Two Countries', text: 'Niagara Falls, New York is across the river. Crossing needs a passport or equivalent, and returning to Canada is subject to customs. Do not book the wrong city by mistake.' },
    { icon: '💧', title: 'The Mist', text: 'Spray from the falls soaks anyone near Table Rock or on the boats. Protect cameras and phones, and wear shoes with grip.' },
    { icon: '⚠️', title: 'River Safety', text: 'The upper river is fast and deadly. Stay behind all railings, keep children close, and never enter the water anywhere near the falls.' },
    { icon: '💰', title: 'Tourist Prices', text: 'Parking, food and attractions near the falls are priced for visitors. Combination passes from Niagara Parks can save money if you plan several attractions.' },
    { icon: '⏰', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as New York across the river.' },
    { icon: '🚆', title: 'Train Cuts', text: 'Weekday GO train service to Niagara Falls was reduced from 8 September 2026. Check GO Transit before relying on the train.' },
    { icon: '🪶', title: 'Whose Land', text: 'Niagara Falls is on land covered by the Niagara Purchase (Treaty 381, 1764/1781) with the Mississaugas of the Credit First Nation, and is also the traditional territory of the Haudenosaunee, including the Six Nations of the Grand River. The city’s own plan acknowledges both.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Greater Niagara General Hospital', '5546 Portage Road', 'Emergencies: call 911'] },
  ],
};

export default NIAGARA_FALLS;
