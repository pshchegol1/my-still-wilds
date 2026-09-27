// Calgary — данные страницы /city/calgary

export const CALGARY = {
  slug: 'calgary',
  name: 'Calgary',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Gateway to the Rockies',
  // Акцент страницы (тег в шапке, подзаголовок, основная кнопка) — золотой
  // вместо стандартного синего, в тон оригинальному макету Calgary.
  accentLevel: 'gold',
  heroVideo: '/Cities/Calgary/12649042_3840_2160_24fps.mp4',
  heroImage: '/ab/cities/calgary.png',
  heroCaption: 'Downtown Calgary · Alberta · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.0447, lon: -114.0719 },
  subtitle: 'Where the Prairies Meet the Rockies',
  description:
    "Alberta's largest city and Canada's energy capital — Calgary is a vibrant, modern city with the Rocky Mountains as its backdrop. Home to the world-famous Calgary Stampede, a booming food scene, and the perfect base for Banff and Jasper day trips.",

  actions: [
    { label: 'Explore Calgary', href: '#neighbourhoods' },
    { label: 'Day Trips', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '1.4 Million' },
    { label: 'Metro Area', value: '1.6 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'MST / UTC-7' },
    { label: 'Airport', value: 'YYC' },
    { label: 'To Banff NP', value: '1.5 Hours' },
  ],

  badges: ['Stampede City', 'No PST', 'Sunniest City'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '335', label: 'Sunny days per year — sunniest major city in Canada', level: 'gold' },
    { value: '1.5h', label: 'Drive to Banff National Park — best mountain access in Canada', level: 'safe' },
    { value: '10', label: 'Days of Calgary Stampede — greatest outdoor show on Earth · July', level: 'gold' },
    { value: '5%', label: 'Only GST — no provincial tax. Shopping cheaper than most cities', level: 'purple' },
  ],

  spotlight: {
    tag: 'World Famous',
    emoji: '🤠',
    title: 'Calgary Stampede — Greatest Outdoor Show on Earth',
    text: "Every July for 10 days, Calgary transforms into the world's biggest rodeo and western festival. Over 1.2 million visitors attend the chuckwagon races, rodeo competitions, live concerts, midway rides, and famous Stampede pancake breakfasts served free on street corners throughout the city. The entire city dresses in western wear — boots, hats, and denim everywhere.",
    links: [
      { label: 'Calgary Stampede Official', url: 'https://www.calgarystampede.com', level: 'blue' },
      { label: 'Buy Tickets', url: 'https://www.calgarystampede.com/stampede/tickets', level: 'gold' },
    ],
  },

  neighbourhoods: [
    {
      name: 'Downtown & Beltline',
      image: '/Cities/Calgary/Downtown & Beltline.png',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Stephen Avenue · Bow Tower · Telus Sky · Arts District',
    },
    {
      name: "Eau Claire & Prince's Island",
      image: "/Cities/Calgary/Eau Claire & Prince's Island.png",
      tag: 'Parks',
      tagLevel: 'safe',
      meta: "Bow River pathways · Prince's Island Park · Farmers market",
    },
    {
      name: 'Inglewood',
      image: '/Cities/Calgary/Inglewood.png',
      tag: 'Trendy',
      tagLevel: 'danger',
      meta: 'Oldest neighbourhood · Antiques · Craft beer · Local shops',
    },
    {
      name: 'Kensington',
      image: '/Cities/Calgary/Kensington.png',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Cafés · Boutiques · Restaurants · Bow River views',
    },
    {
      name: '17th Avenue SW',
      image: '/Cities/Calgary/17th Avenue SW.png',
      tag: 'Food',
      tagLevel: 'blue',
      meta: 'Restaurant row · Nightlife · Patio season · International food',
    },
    {
      name: 'Mission & 4th Street',
      image: '/Cities/Calgary/Mission & 4th Street.png',
      tag: 'Local',
      tagLevel: 'safe',
      meta: 'Brunch spots · Independent cafés · Riverside walks',
    },
  ],

  attractions: [
    {
      name: 'Calgary Tower',
      icon: '🗼',
      text: '191m observation deck with a glass floor — stunning 360° views of downtown, Bow River, and the Rocky Mountains on the horizon. Restaurant at the top.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Views', level: 'blue' }],
    },
    {
      name: 'Glenbow Museum',
      icon: '🦕',
      text: 'World-class museum of Western Canadian history, Indigenous culture, and art. Currently under major renovation — check opening status before visiting.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
    },
    {
      name: "Prince's Island Park",
      icon: '🌿',
      text: 'Beautiful island park in the Bow River right in downtown. Walking paths, festivals in summer, and stunning city views. Free and perfect for an afternoon.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Calgary Zoo',
      icon: '🐆',
      text: "One of Canada's largest zoos with 1,000+ animals including giant pandas, gorillas, and Canadian wildlife. WildLife area features Canadian species in their natural habitats.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Family', level: 'purple' }],
    },
    {
      name: 'Bow River Pathway',
      icon: '🛶',
      text: 'Over 1,000 km of pathways along the Bow River — cycling, walking, and inline skating. One of the longest urban pathway systems in North America. Free and stunning.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
    },
    {
      name: 'Arts Commons',
      icon: '🎭',
      text: "Calgary's premier arts complex — four theatres, Jubilee Auditorium, and year-round performances. Home to the Calgary Philharmonic and world-class touring shows.",
      tags: [{ label: 'Tickets Vary', level: 'gold' }, { label: 'Arts', level: 'purple' }],
    },
    {
      name: 'Banff Day Trip',
      icon: '🏔️',
      text: 'Calgary is the closest major city to Banff National Park — just 1.5 hours west on the Trans-Canada Highway. The most popular day trip from Calgary. UNESCO World Heritage site.',
      tags: [{ label: 'Parks Pass', level: 'gold' }, { label: '1.5h Away', level: 'blue' }],
    },
    {
      name: 'Drumheller Badlands',
      icon: '🦕',
      text: "The Dinosaur Capital of the World — just 1.5 hours east of Calgary. The Royal Tyrrell Museum has one of the world's best dinosaur fossil collections. An unmissable day trip.",
      tags: [{ label: 'Paid', level: 'gold' }, { label: '1.5h Away', level: 'blue' }],
    },
    {
      name: 'Scotiabank Saddledome',
      icon: '🏒',
      text: 'Watch the Calgary Flames play NHL hockey in this iconic saddle-shaped arena. The Saddledome is one of the most recognizable arenas in Canada — in the heart of Stampede Park.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
    },
  ],

  outdoor: [
    { icon: '🛶', name: 'Bow River Pathway', dist: '1,000+ km network', text: 'Cycling, walking, and inline skating along one of North America\'s longest urban pathway systems.' },
    { icon: '🌿', name: "Prince's Island Park", dist: 'Downtown', text: 'Island park in the Bow River — walking paths, summer festivals, and skyline views.' },
    { icon: '🏔️', name: 'Nose Hill Park', dist: 'North Calgary', text: 'One of the largest urban parks in Canada — native prairie grassland with panoramic mountain views.' },
    { icon: '🚴', name: 'Elbow River Pathway', dist: 'South Calgary', text: 'Quieter cycling and walking pathway connecting to Fish Creek Provincial Park.' },
    { icon: '🎿', name: 'Winsport Canada Olympic Park', dist: 'West Calgary', text: '1988 Olympics venue — skiing, tobogganing, bobsleigh experiences, and a ski jump tower with city views.' },
    { icon: '🏞️', name: 'Fish Creek Provincial Park', dist: 'South Calgary', text: "One of the largest urban parks in North America — forests, wetlands, and the Bow Valley Ranch historic site." },
    { icon: '🐎', name: 'Stampede Park', dist: 'Victoria Park', text: "Year-round events venue, home of the Calgary Stampede — casino, agri-food exhibits, and concerts outside of July too." },
    { icon: '🏔️', name: 'Banff & Kananaskis', dist: '1–1.5 hours away', text: 'The Rockies are Calgary\'s backyard — hiking, skiing, and turquoise lakes within a short drive.' },
  ],

  food: [
    { icon: '🥩', title: 'Alberta Beef', area: 'Everywhere · Steakhouses', areaLevel: 'gold', text: "Calgary is Alberta beef country — world-class AAA steaks are the city's signature dish. Caesar's Steakhouse has been the institution since 1972. Saltlik and The Bison are newer favourites." },
    { icon: '🌮', title: '17th Avenue Food Scene', area: '17th Ave SW', areaLevel: 'danger', text: "Calgary's restaurant row — Mexican, Japanese, Ethiopian, Lebanese, and Canadian all within blocks of each other. The best concentration of restaurants in the city with great patio culture in summer." },
    { icon: '🍺', title: 'Craft Beer', area: 'Inglewood · Beltline', areaLevel: 'safe', text: 'Calgary has a thriving craft brewery scene. Village Brewery, Tool Shed, and Born Colorado are local favourites. Inglewood has become the craft beer hub with multiple taprooms walkable from each other.' },
    { icon: '🥞', title: 'Stampede Pancake Breakfast', area: 'Citywide · July Only', areaLevel: 'gold', text: 'During Calgary Stampede (July), free pancake breakfasts are served on street corners throughout the city every morning. A beloved Calgary tradition — don\'t miss it if you\'re here in July.' },
    { icon: '🍜', title: 'International Food', area: 'International Avenue', areaLevel: 'blue', text: 'International Avenue (17th Ave SE) in Forest Lawn is one of the most multicultural streets in Canada — Vietnamese, Ethiopian, Mexican, Filipino, and more. Authentic and affordable.' },
    { icon: '☕', title: 'Coffee Culture', area: 'Kensington · Inglewood', areaLevel: 'purple', text: 'Phil & Sebastian Coffee (born in Calgary) has become one of Canada\'s most celebrated roasters. Analog Coffee in Inglewood and Rosso Coffee are also local institutions worth visiting.' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — 335 sunny days per year means summer is spectacular. Calgary Stampede in July is unmissable. Banff day trips at their best. Patio culture everywhere. Warm and dry with very low humidity.',
      rating: 5,
      note: 'Stampede!',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Beautiful crisp days, golden aspen leaves in the foothills. Fewer tourists at Banff. Chinook winds can bring surprise warm days in October and November. Flames hockey season starts.',
      rating: 4,
      note: 'Great value',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Cold but sunny — Calgary gets more sunshine than any Canadian city even in winter. Chinook winds bring sudden warm spells. Skiing at Lake Louise and Banff Sunshine just 1.5 hours away. Christmas market downtown.',
      rating: 3,
      note: 'Ski season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow possible into April but Chinooks keep things mild. Banff is less crowded and more affordable. Spring skiing at resorts. Great time to visit before summer prices kick in.',
      rating: 4,
      note: 'Budget friendly',
    },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Calgary International Airport (YYC) is one of the busiest in Canada — direct flights to major North American, European, and Asian cities.',
      time: '20 min by car/shuttle to downtown',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway connects Calgary directly to Banff (1.5h) and Vancouver. Highway 2 leads north to Edmonton (~3 hours). No train station for passenger rail.',
      time: 'Banff: 1.5h · Edmonton: 3h',
    },
    {
      icon: '🚇',
      title: 'Getting Around',
      text: 'Calgary Transit runs the CTrain (light rail) and buses. The CTrain is free within the downtown Free Fare Zone. A car is useful for Banff and Kananaskis day trips.',
      time: 'Calgary Transit fare card · calgarytransit.com',
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊',
      title: 'Calgary Transit — CTrain & Buses',
      text: 'Calgary Transit operates the CTrain light rail (Red and Blue lines) and an extensive bus network across the city. The downtown core has a Free Fare Zone on 7th Avenue — no ticket needed for CTrain travel within it.',
      linkLabel: 'Calgary Transit Official',
      linkUrl: 'https://www.calgarytransit.com',
    },
    modes: [
      {
        icon: '🚇',
        title: 'CTrain',
        text: '2 lines: Red and Blue. Runs roughly 4:30am to 1:30am. Downtown 7th Avenue segment is a Free Fare Zone — no ticket required.',
        fareBox: {
          label: 'Fares',
          lines: ['Adult single: $3.75', 'Day Pass: $11.00', 'Monthly Pass: $121', 'Downtown Free Fare Zone'],
        },
        linkLabel: 'CTrain Map',
        linkUrl: 'https://www.calgarytransit.com/routes-schedules/ctrain',
      },
      {
        icon: '🚌',
        title: 'Buses',
        text: 'Extensive bus network covering all quadrants of the city, connecting to CTrain stations. Same fare as CTrain with free transfers.',
        fareBox: {
          label: 'Fare Card',
          lines: ['• Tap Visa/Mastercard directly', '• Or use the Calgary Transit app', '• Free transfer within 90 min', '• Exact change accepted on board'],
        },
        linkLabel: 'Bus Routes',
        linkUrl: 'https://www.calgarytransit.com/routes-schedules',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Uber & Lyft', text: 'Both widely available. Useful for Banff-bound early starts before transit runs.' },
          { icon: '🚲', title: 'Bike Share', text: 'Calgary has an extensive pathway network — check local bike rental shops downtown.' },
          { icon: '🚙', title: 'Car Rental', text: 'Recommended for Banff, Kananaskis, and Drumheller day trips — public transit does not reach the parks.' },
        ],
      },
    ],
    proTip: {
      label: 'Banff Day Trip Tip:',
      text: "There's no public transit to Banff — rent a car or book a shuttle (Banff Airporter, On-It Regional Transit seasonal bus). The drive is 1.5 hours on the Trans-Canada Highway with stunning mountain views the whole way.",
    },
  },

  stay: [
    {
      icon: '🏙️',
      title: 'Downtown / Beltline',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Palliser, Hyatt Regency, Hotel Arts. Walking distance to Stephen Avenue, the Bow River, and CTrain Free Fare Zone.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Calgary', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Calgary-Hotels.d178289.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🍽️',
      title: '17th Avenue SW / Mission',
      area: 'Best for food and nightlife',
      text: 'Boutique hotels and B&Bs steps from Calgary\'s best restaurant row. Walkable, vibrant, and close to the Elbow River pathway.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/17th-Avenue--Calgary', level: 'danger' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=17th+Avenue+Calgary', level: 'blue' },
      ],
    },
    {
      icon: '🎨',
      title: 'Inglewood / Kensington',
      area: 'Best for local character',
      text: "Calgary's oldest and most artsy neighbourhoods — antique shops, craft breweries, and independent cafés. A quieter, more residential home base.",
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Inglewood--Calgary', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/alberta/calgary', level: 'blue' },
      ],
    },
  ],

  taxInfo: {
    totalTaxPercent: '5%',
    headline: '🎉 Alberta Has NO Provincial Sales Tax!',
    headlineLevel: 'safe',
    description: 'Same as Edmonton — Alberta is the only province with no PST. You only pay federal GST of 5%. This makes Calgary one of the cheapest major cities in Canada for shopping and dining. A $500 shopping trip costs $25 in tax — vs $60 in Vancouver or $65 in Toronto.',
    comparison: [
      { label: 'Calgary / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    { icon: '☀️', title: 'Weather', text: 'Sunny but variable — Chinook winds can swing temperatures 20°C+ in hours, even in winter. Layer up.' },
    { icon: '💰', title: 'Currency', text: 'Canadian Dollar (CAD). Calgary is more affordable than Vancouver or Toronto — no PST helps too.' },
    { icon: '🚇', title: 'CTrain Fare', text: 'Tap your Visa/Mastercard directly, or use the Calgary Transit app. Downtown 7th Ave is fare-free.' },
    { icon: '🌐', title: 'Language', text: 'English primary. A multicultural city with large South Asian, Filipino, and East Asian communities.' },
    { icon: '🏥', title: 'Hospital', lines: ['Foothills Medical Centre', '1403 29 St NW', '403-944-1110'] },
    { icon: '🍁', title: 'Cannabis', text: 'Legal for adults 18+ in Alberta. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🌬️', title: 'Chinook Winds', text: 'Warm winter winds can melt snow in hours. Locals joke Calgary has two seasons: winter and construction.' },
    { icon: '🏔️', title: 'Day Trips', text: 'Banff (1.5h), Drumheller Badlands (1.5h), and Kananaskis Country (1h) are all easy day trips from Calgary.' },
  ],
};

export default CALGARY;
