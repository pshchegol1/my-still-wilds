// Toronto — данные страницы /city/toronto

export const TORONTO = {
  slug: 'toronto',
  name: 'Toronto',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: "Ontario · Canada's Largest City",
  // Акцент страницы (тег в шапке, подзаголовок, основная кнопка) — красный,
  // в тон оригинальному макету Toronto.
  accentLevel: 'red',
  heroVideo: '/Cities/Toronto/11300218-uhd_3840_2160_24fps.mp4',
  heroImage: '/on/cities/toronto.png',
  heroCaption: 'CN Tower · Toronto · Ontario · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.6532, lon: -79.3832 },
  subtitle: 'The Centre of the Universe',
  description:
    "Canada's largest city and one of the world's most multicultural — over 200 languages spoken, world-class museums, the iconic CN Tower, NBA and NHL action, and a food scene that rivals any city on Earth. Toronto is endlessly alive.",

  actions: [
    { label: 'Explore Toronto', href: '#neighbourhoods' },
    { label: 'Niagara Falls', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '2.9 Million' },
    { label: 'Metro Area', value: '6.7 Million' },
    { label: 'Languages', value: '200+' },
    { label: 'Time Zone', value: 'EST / UTC-5' },
    { label: 'Airport', value: 'YYZ / Billy Bishop' },
    { label: 'Niagara Falls', value: '1.5h Away' },
  ],

  badges: ['200 Languages', 'NBA · NHL · MLB', 'TIFF · Festivals'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '6.7M', label: 'Metro population — largest city in Canada, 4th largest in North America', level: 'red' },
    { value: '200+', label: 'Languages spoken — most multicultural city in the world', level: 'safe' },
    { value: '553m', label: 'CN Tower height — tallest free-standing structure in the Western Hemisphere', level: 'gold' },
    { value: '4', label: 'Major sports teams — Raptors · Maple Leafs · Blue Jays · TFC', level: 'blue' },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & Financial District',
      image: '/Cities/Toronto/Downtown & Financial District.jpg',
      tag: 'Downtown',
      tagLevel: 'red',
      meta: 'CN Tower · Rogers Centre · Scotiabank Arena · PATH system',
    },
    {
      name: 'Harbourfront & Distillery',
      image: '/Cities/Toronto/Harbourfront & Distillery.jpg',
      tag: 'Waterfront',
      tagLevel: 'safe',
      meta: 'Lake Ontario · Ferry to Toronto Islands · Historic Distillery District',
    },
    {
      name: 'Kensington Market & Chinatown',
      image: '/Cities/Toronto/Kensington Market & Chinatown.jpg',
      tag: 'Culture',
      tagLevel: 'danger',
      meta: 'Bohemian · Vintage · Street food · World cultures in one block',
    },
    {
      name: 'Queen West & Ossington',
      image: '/Cities/Toronto/Queen West & Ossington.jpg',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Art galleries · Independent fashion · Best bars · Street art',
    },
    {
      name: 'Little Italy & Little Portugal',
      image: '/Cities/Toronto/Little Italy & Little Portugal.jpg',
      tag: 'Food',
      tagLevel: 'blue',
      meta: 'College Street · Best espresso · Trattorias · Patios in summer',
    },
    {
      name: 'Yorkville & Bloor Street',
      image: '/Cities/Toronto/Yorkville & Bloor Street.jpg',
      tag: 'Upscale',
      tagLevel: 'gold',
      meta: 'Luxury shopping · Fine dining · Royal Ontario Museum · High-end hotels',
    },
  ],

  attractions: [
    {
      name: 'CN Tower',
      icon: '🗼',
      text: 'The defining symbol of Toronto — 553m tall with a glass floor observation deck, EdgeWalk (outdoor walk at 356m), and 360 Restaurant rotating at the top. Views stretch to Niagara Falls on clear days.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Iconic', level: 'red' }],
    },
    {
      name: 'Royal Ontario Museum',
      icon: '🦕',
      text: "Canada's largest museum — ancient Egypt, dinosaurs, Indigenous cultures, and world history. The Michael Lee-Chin Crystal addition is itself an architectural masterpiece. In Yorkville.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'Scotiabank Arena — Raptors & Leafs',
      icon: '🏀',
      text: 'Watch the Toronto Raptors (NBA champions 2019!) or the storied Toronto Maple Leafs play in one of the most electric arenas in North America — right downtown on Bay Street.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
    },
    {
      name: 'Toronto Islands',
      icon: '🏝️',
      text: 'A chain of islands in Lake Ontario just 10 minutes by ferry from downtown. Beaches, bike rentals, Centreville Amusement Park, and stunning views of the Toronto skyline. Summer favourite.',
      tags: [{ label: 'Ferry $9', level: 'gold' }, { label: 'Summer', level: 'red' }],
    },
    {
      name: 'Distillery Historic District',
      icon: '🥃',
      text: "North America's largest collection of Victorian industrial architecture — now a pedestrian village of galleries, restaurants, boutiques, and cafés. Famous Christmas Market in December.",
      tags: [{ label: 'Free to Walk', level: 'safe' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: 'TIFF — Toronto Film Festival',
      icon: '🎬',
      text: "The Toronto International Film Festival (September) is one of the world's most prestigious — a launching pad for Oscar-winning films. Celebrity sightings everywhere during the festival.",
      tags: [{ label: 'September', level: 'gold' }, { label: 'Annual', level: 'purple' }],
    },
    {
      name: "Ripley's Aquarium",
      icon: '🎡',
      text: 'Beneath the CN Tower — 16,000 aquatic animals including sharks, rays, and a 97m underwater tunnel. One of the best aquariums in Canada. Open late — great for evenings.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Family', level: 'purple' }],
    },
    {
      name: 'Niagara Falls Day Trip',
      icon: '💧',
      text: 'Just 1.5 hours from Toronto — the most powerful waterfall in North America. Take the Maid of the Mist boat, walk behind the falls, or view from the Canadian side for the best perspective.',
      tags: [{ label: 'Free to View', level: 'safe' }, { label: '1.5h Away', level: 'red' }],
    },
    {
      name: 'St. Lawrence Market',
      icon: '🛒',
      text: "One of the world's great food markets — named #1 food market in the world by National Geographic. Fresh produce, cheese, meat, baked goods, and local vendors since 1803.",
      tags: [{ label: 'Free to Browse', level: 'safe' }, { label: 'Sat Best Day', level: 'danger' }],
    },
  ],

  outdoor: [
    { icon: '🏝️', name: 'Toronto Islands', dist: '10 min ferry', text: 'Beaches, bike rentals, and skyline views just a short ferry ride from downtown.' },
    { icon: '🌳', name: 'High Park', dist: 'West Toronto', text: "The city's largest park — cherry blossoms in April, a zoo, trails, and Grenadier Pond." },
    { icon: '🚴', name: 'Martin Goodman Trail', dist: '56 km waterfront', text: 'Cycling and walking path along Lake Ontario connecting the Beaches to the Humber River.' },
    { icon: '🥾', name: 'Don Valley Trails', dist: 'Central Toronto', text: 'Forested ravine trails cutting through the city — a surprising escape minutes from downtown.' },
    { icon: '🏖️', name: 'The Beaches', dist: 'East Toronto', text: 'Boardwalk, sandy beach, and a laid-back neighbourhood vibe along Lake Ontario.' },
    { icon: '⛵', name: 'Sailing on Lake Ontario', dist: 'Harbourfront', text: 'Rent a sailboat or take a harbour cruise for skyline views from the water.' },
    { icon: '🎿', name: 'Winter Skating', dist: 'Nathan Phillips Square', text: 'Free outdoor skating rink at City Hall — a Toronto winter tradition, skate rentals on site.' },
    { icon: '💧', name: 'Niagara Falls & Wine Country', dist: '1.5 hours away', text: "Niagara Falls and the Niagara-on-the-Lake wine region make for a perfect day trip from the city." },
  ],

  food: [
    { icon: '🍜', title: "World's Most Diverse Food City", area: 'Everywhere', areaLevel: 'red', text: "Toronto is considered the world's most ethnically diverse city — this makes it one of Earth's greatest food cities. Authentic Ethiopian, Sri Lankan, Jamaican, Persian, Korean, and hundreds more cuisines at every price point." },
    { icon: '🥟', title: 'Chinatown & Dim Sum', area: 'Spadina Ave · Scarborough', areaLevel: 'danger', text: "Multiple Chinatowns throughout the city. The Scarborough Chinatown offers some of North America's most authentic Chinese food. Dim sum on weekend mornings at Ocean Fisheries or Casa Victoria." },
    { icon: '🧆', title: 'Middle Eastern & Persian', area: 'Kensington · Danforth', areaLevel: 'gold', text: 'Toronto has one of the largest Persian communities outside Iran. Excellent shawarma, falafel, kababs, and baklava throughout the city. The Danforth (Greektown) is legendary for souvlaki and baklava.' },
    { icon: '🍕', title: 'Pizza & Italian', area: 'Little Italy · College St', areaLevel: 'blue', text: "Toronto's Italian community has created an exceptional pizza and pasta scene. Terroni is a cult favourite. Little Italy on College Street has some of the best espresso and tiramisu outside Rome." },
    { icon: '🫐', title: 'Brunch Culture', area: 'Queen West · Leslieville', areaLevel: 'safe', text: 'Toronto has an obsessive brunch culture — weekend lineups are legendary. Aunties and Uncles in Kensington, Lady Marmalade in Leslieville, and Drake Hotel on Queen West are institutions.' },
    { icon: '🍁', title: 'Jamaican & Caribbean', area: 'Eglinton · Scarborough', areaLevel: 'purple', text: 'Toronto has the largest Jamaican diaspora outside Jamaica. Excellent jerk chicken, oxtail, curry goat, and patties throughout the city. Eglinton West (Little Jamaica) is the place to go.' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — Toronto Islands packed, outdoor festivals, Caribana (July), Pride (June), and amazing patio culture. Warm and humid. Blue Jays baseball at Rogers Centre. Busiest and most expensive.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — November',
      level: 'danger',
      text: 'Best season overall. TIFF in September, spectacular fall colours in October, fewer crowds. Perfect temperatures for walking. Raptors and Leafs seasons begin. Leaf-peeping in nearby parks and Muskoka.',
      rating: 5,
      note: 'Best overall',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'December — February',
      level: 'blue',
      text: 'Cold and sometimes snowy. Maple Leafs and Raptors are in full swing — great for sports fans. Distillery Christmas Market is magical. Indoor PATH system means you can explore downtown without going outside.',
      rating: 3,
      note: 'Sports season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: 'Cherry blossoms at High Park in late April are spectacular — rivalling Vancouver. Cool and sometimes rainy but beautiful. Lower hotel prices. Blue Jays opening day in April is a celebration.',
      rating: 4,
      note: 'Cherry blossoms!',
    },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: "Toronto Pearson (YYZ) is Canada's busiest airport with direct global flights. Billy Bishop Airport (YTZ) on the Toronto Islands serves short-haul flights right downtown.",
      time: '25 min by UP Express train to Union Station',
    },
    {
      icon: '🚂',
      title: 'By Train / Bus',
      text: 'VIA Rail connects Toronto to Montreal, Ottawa, and Windsor from Union Station. GO Transit trains and buses serve the wider Greater Toronto Area and beyond.',
      time: 'Montreal: 5h · Ottawa: 4.5h by VIA Rail',
    },
    {
      icon: '🚇',
      title: 'Getting Around',
      text: 'The TTC runs the subway, streetcars, and buses across the city. The PATH is a 30km underground walkway connecting downtown buildings — handy in winter.',
      time: 'PRESTO card · ttc.ca',
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊',
      title: 'TTC — Toronto Transit Commission',
      text: 'The TTC operates the subway (2 main lines plus Line 4 and the Eglinton Crosstown), streetcars, and buses across the city. A PRESTO card or tap-to-pay works across the whole network with free transfers.',
      linkLabel: 'TTC Official',
      linkUrl: 'https://www.ttc.ca',
    },
    modes: [
      {
        icon: '🚇',
        title: 'Subway',
        text: 'Line 1 (Yonge-University) and Line 2 (Bloor-Danforth) cover most of downtown. Runs approximately 6am to 1:30am, with Line 1 running 24 hours on weekends in parts.',
        fareBox: {
          label: 'Fares (PRESTO / Tap)',
          lines: ['Adult single: $3.35', 'Day Pass: $13.50', 'Free transfer within 2 hours', 'Kids 12 & under: Free'],
        },
        linkLabel: 'Subway Map',
        linkUrl: 'https://www.ttc.ca/routes-and-schedules/subway',
      },
      {
        icon: '🚋',
        title: 'Streetcars & Buses',
        text: "Toronto's iconic red streetcars run along King, Queen, and Spadina among others. Extensive bus network covers the rest of the city and suburbs.",
        fareBox: {
          label: 'PRESTO Card',
          lines: ['• Tap Visa/Mastercard directly', '• Or load a PRESTO card', '• Free transfer within 2 hours', '• PRESTO app for mobile fare'],
        },
        linkLabel: 'Streetcar Routes',
        linkUrl: 'https://www.ttc.ca/routes-and-schedules',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚆', title: 'UP Express', text: 'Direct train from Pearson Airport to Union Station downtown in 25 minutes.' },
          { icon: '🚗', title: 'Uber & Lyft', text: 'Both widely available. Traffic can be heavy — transit is often faster downtown.' },
          { icon: '🚲', title: 'Bike Share Toronto', text: 'Docked bike share with stations across downtown. bikesharetoronto.com' },
        ],
      },
    ],
    proTip: {
      label: 'Airport Tip:',
      text: 'The UP Express from Pearson to Union Station takes 25 minutes and costs less than a taxi — trains run every 15 minutes from 5:30am to 1am.',
    },
  },

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown / Financial District',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Royal York, Ritz-Carlton, Hotel X. Steps from Union Station, the PATH system, and the CN Tower.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Toronto', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Toronto-Hotels.d178293.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🎨',
      title: 'Queen West / Kensington',
      area: 'Best for arts and nightlife',
      text: "Boutique hotels and B&Bs in Toronto's most creative neighbourhoods — galleries, vintage shops, and the best bars within walking distance.",
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Queen-West--Toronto', level: 'red' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Queen+West+Toronto', level: 'blue' },
      ],
    },
    {
      icon: '🛍️',
      title: 'Yorkville',
      area: 'Best for luxury',
      text: "Four Seasons, Park Hyatt. Toronto's most upscale neighbourhood — high-end shopping, fine dining, and the Royal Ontario Museum on your doorstep.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkville+Toronto', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Toronto-Hotels-Yorkville.d6146150.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
  ],

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'danger',
    description: 'Ontario uses HST — a single combined tax of 13% that merges federal GST (5%) and provincial sales tax (8%) into one. This is higher than Alberta (5%) and BC (12%) but lower than Quebec (14.975%). Hotels may also charge additional Municipal Accommodation Tax (MAT) of 4%.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'red' },
      { label: 'Ontario / Toronto', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'danger', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'red' },
    ],
    appliesTo: [
      { icon: '🛍️', label: 'Most retail goods and clothing' },
      { icon: '🍽️', label: 'Restaurant meals and takeout' },
      { icon: '🏨', label: 'Hotels + 4% Municipal Accommodation Tax' },
      { icon: '🎟️', label: 'Entertainment and event tickets' },
      { icon: '🚕', label: 'Ride shares and taxis' },
      { icon: '📱', label: 'Electronics and technology' },
    ],
    exempt: [
      { icon: '🥬', label: 'Basic groceries (fresh food)' },
      { icon: '💊', label: 'Prescription medications' },
      { icon: '🏥', label: 'Most medical services' },
      { icon: '📚', label: 'Most educational services' },
      { icon: '🏠', label: 'Long-term residential rent' },
      { icon: '👶', label: 'Children\'s clothing and footwear' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    { icon: '☀️', title: 'Weather', text: 'Humid summers, cold snowy winters. Layer up for fall/spring — temperatures swing quickly.' },
    { icon: '💰', title: 'Currency', text: 'Canadian Dollar (CAD). Toronto is one of the more expensive Canadian cities — budget accordingly.' },
    { icon: '🚇', title: 'PRESTO Card', text: 'Tap your Visa/Mastercard directly on TTC readers, or load a PRESTO card for the whole GTA network.' },
    { icon: '🌐', title: 'Language', text: "English primary, French also official nationally. World's most multilingual city — 200+ languages spoken." },
    { icon: '🏥', title: 'Hospital', lines: ['Toronto General Hospital', '200 Elizabeth St', '416-340-4800'] },
    { icon: '🍁', title: 'Cannabis', text: 'Legal for adults 19+ in Ontario. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🧊', title: 'PATH System', text: "30km of underground walkways connect downtown buildings — a great way to explore in winter without the cold." },
    { icon: '💧', title: 'Day Trips', text: 'Niagara Falls (1.5h), Niagara-on-the-Lake wine country (1.5h), and Muskoka cottage country (2h) are popular trips.' },
  ],
};

export default TORONTO;
