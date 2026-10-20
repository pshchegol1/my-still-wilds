// Banff — данные страницы /city/banff
// В шапке ролик, присланный владельцем сайта: гора Рандл, отражённая
// в озёрах Вермилион на закате, — прямо за городом. Проверено по кадрам.
// Исходник уже в SDR (bt709) и без звука; только переупакован с
// faststart, постер — первый кадр. 11 с, ~6,4 МБ.
// Город и национальный парк — разные страницы: парк описан в
// src/data/parks/banff.js, здесь только сам город.
// Население — муниципальная перепись 2024 года (с временными
// жителями). Тарифы Parks Canada и Roam — на сезон 2026; туристический
// сбор Альберты поднят до 6% с 1 апреля 2026.

export const BANFF = {
  slug: 'banff',
  name: 'Banff',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Inside Banff National Park',
  accentLevel: 'caution',
  heroIcon: '🏔️',
  heroImage: '/Cities/Banff/hero-poster.jpg',
  heroVideo: '/Cities/Banff/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.1784, lon: -115.5708 },
  subtitle: 'A Town Inside a National Park',
  description:
    'A mountain town of under ten thousand people sitting inside Canada’s first national park, on the Bow River under Mount Rundle. You cannot simply move here — you have to work in the park to live in it — and the town exists because three railway workers found hot springs in a cave in 1883. Millions of visitors pass through each year; elk walk the residential streets regardless.',

  actions: [
    { label: 'Explore Banff', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.4K' },
    { label: 'Elevation', value: '≈1,380 m' },
    { label: 'Park Pass', value: 'Required' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'From Calgary', value: '≈128 km · 1.5h' },
    { label: 'To Lake Louise', value: '≈58 km · 45 min' },
  ],

  badges: ['National Park Town', 'Hot Springs', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '⛷️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1885', label: 'The hot springs reserve that became Canada’s first national park two years later', level: 'gold' },
    { value: '1883', label: 'Three railway workers climbed into the Cave and Basin through a hole in its roof', level: 'danger' },
    { value: '$12.25', label: 'Daily adult park admission in 2026 — required just to stop in town, not only for hiking', level: 'blue' },
    { value: '30 m', label: 'Minimum distance Parks Canada asks you to keep from elk — they live in town and they are not tame', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Banff Avenue & Downtown', icon: '🏔️', tag: '🏔️ Core', tagLevel: 'gold', meta: 'Shops and restaurants · Mount Cascade at the end of the street · Busiest part of town' },
    { name: 'The Bow River & Bow Falls', icon: '🌊', tag: '🌊 Riverside', tagLevel: 'blue', meta: 'River trail · The pedestrian bridge · Bow Falls below the Banff Springs' },
    { name: 'Spray Avenue & the Banff Springs', icon: '🏰', tag: '🏰 South side', tagLevel: 'purple', meta: 'The 1888 railway hotel · Golf course · Upper Hot Springs and gondola road' },
    { name: 'Cave Avenue', icon: '♨️', tag: '♨️ West', tagLevel: 'danger', meta: 'Cave and Basin National Historic Site · Marsh boardwalk · Sundance trail' },
    { name: 'Tunnel Mountain', icon: '⛺', tag: '⛺ East', tagLevel: 'safe', meta: 'Campgrounds · The Banff Centre · The Hoodoos viewpoint · Short summit hike' },
    { name: 'Lake Minnewanka Road', icon: '🛶', tag: '🛶 North-east', tagLevel: 'olive', meta: 'Lake Minnewanka · Two Jack Lake · Johnson Lake · Wildlife on the road' },
  ],

  attractions: [
    {
      name: 'Cave and Basin',
      icon: '♨️',
      text: 'The reason everything else here exists. In November 1883 three Canadian Pacific Railway workers climbed down into a steaming cave through a hole in its roof; the fight over who owned the springs ended with Ottawa creating a hot springs reserve in 1885, which grew into Rocky Mountains Park — Canada’s first national park — in 1887. It is now a National Historic Site. The warm outflow pools are home to the Banff Springs snail, which lives nowhere else on earth; do not touch the water.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Paid entry', level: 'caution' }],
    },
    {
      name: 'Banff Upper Hot Springs',
      icon: '🛁',
      text: 'The one hot spring you can actually bathe in, a pool on the side of Sulphur Mountain run by Parks Canada with views across the valley. Busy at peak times and separately ticketed from the park pass. Evenings in winter, with snow falling, are the classic visit.',
      tags: [{ label: 'Separate fee', level: 'caution' }, { label: 'Year-round', level: 'safe' }],
    },
    {
      name: 'Banff Gondola',
      icon: '🚡',
      text: 'A short gondola ride up Sulphur Mountain to a summit boardwalk with views over the town and the Bow Valley. Expensive and crowded, but genuinely spectacular, and the boardwalk to the old weather observatory hut is worth the walk. Hiking up and riding down is an option.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Book ahead', level: 'danger' }],
    },
    {
      name: 'Bow Falls & the River Trail',
      icon: '🌊',
      text: 'A wide, low waterfall a short walk from downtown along the Bow, with the Fairmont Banff Springs — built by the railway in 1888 — standing above it. The riverside paths in both directions are flat, free and the best way to see the town on foot.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
    },
    {
      name: 'Lake Minnewanka',
      icon: '🛶',
      text: 'The largest lake in the park, a short drive or seasonal bus ride from town. Lakeshore trails, boat cruises in summer and, below the surface, the remains of a resort village flooded by a dam in 1941. Bighorn sheep on the road are common — slow down.',
      tags: [{ label: 'Seasonal bus', level: 'blue' }, { label: 'Wildlife', level: 'olive' }],
    },
    {
      name: 'Whyte Museum',
      icon: '🖼️',
      text: 'The museum and archives of the Canadian Rockies, founded by two Banff painters. It holds the records of the mountain guides, the early tourist trade — and of Banff Indian Days, the summer event from the late 1800s until 1978 at which Stoney Nakoda families were brought into town as a spectacle for visitors, under rules set by park authorities, and used it on their own terms anyway.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Trailheads from the Edge of Town',
  outdoor: [
    { icon: '🥾', name: 'Tunnel Mountain', dist: 'From town', text: 'A short, steady climb straight from the residential streets to a summit with a view down the whole Bow Valley. The best first hike in Banff, and achievable in a couple of hours.' },
    { icon: '🏞️', name: 'Johnston Canyon', dist: '≈25 km west', text: 'Catwalks bolted to the canyon walls lead to two waterfalls. Very popular — arrive early or late, and use the parking rules in force that season.' },
    { icon: '🚴', name: 'Legacy Trail', dist: 'Banff to Canmore', text: 'A paved cycling path running alongside the highway between the two towns, with the mountains on every side. Ride one way and take the Roam bus back.' },
    { icon: '⛷️', name: 'Skiing', dist: 'Three resorts', text: 'Mt Norquay sits right above town; Sunshine Village and Lake Louise are further out, with shuttles from Banff hotels in winter. One ski pass covers all three.' },
    { icon: '🛶', name: 'Paddling', dist: 'Vermilion Lakes · Bow River', text: 'Canoes and kayaks rent by the river in summer. Glacier-fed water is dangerously cold even in August — wear a lifejacket and stay close to shore.' },
    { icon: '🐻', name: 'Wildlife', dist: 'Everywhere', text: 'Elk in town, bighorn sheep on the roads, bears and wolves on the trails. Carry bear spray on any hike, keep 30 metres from elk and 100 metres from bears, and never stop on the highway to photograph an animal.' },
  ],

  food: [
    { icon: '🥩', title: 'Alberta Beef & Game', area: 'Banff Avenue', areaLevel: 'danger', text: 'Steakhouses and mountain-lodge menus with bison and elk are the house style. Prices reflect the location — this is a resort town in a national park.' },
    { icon: '🍺', title: 'Breweries & Distillery', area: 'Downtown', areaLevel: 'gold', text: 'A small brewpub and distillery scene within a few blocks of each other. After a long hiking day, the obvious place to end up.' },
    { icon: '🫕', title: 'Fondue & Après', area: 'Downtown · Ski hills', areaLevel: 'purple', text: 'Swiss mountain-guide heritage shows up in fondue restaurants that have outlasted every food trend. Après-ski on the hills in winter.' },
    { icon: '☕', title: 'Cafés & Bakeries', area: 'Downtown', areaLevel: 'blue', text: 'Early-opening cafés catch hikers before the trailheads fill. Grab lunch to carry — there is nothing to buy once you are on a trail.' },
    { icon: '🛒', title: 'Groceries', area: 'Downtown', areaLevel: 'safe', text: 'Groceries cost noticeably more in Banff than in Calgary or Canmore. If you are self-catering for a week, stock up before you arrive.' },
    { icon: '🍽️', title: 'Hotel Dining', area: 'Banff Springs · Chateau', areaLevel: 'olive', text: 'Afternoon tea or a drink in the grand railway hotels is the cheapest way to see inside them. Reservations help in summer.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Mud and snow', text: 'Valley trails melt out in May; high trails and lakes stay snowbound into June, and Moraine Lake is often still frozen. Elk calving season — mothers are aggressive. Quiet and cheaper.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Everything is open and everything is full. Book accommodation months ahead, use shuttles for Lake Louise and Moraine Lake, and expect wildfire smoke on some days. Nights stay cold.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Larches and the rut', text: 'Golden larches in mid-September draw crowds to the high trails. It is also the elk rut — bull elk in town are genuinely dangerous; keep your distance and stay out of their way.' },
    { icon: '⛷️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Three ski areas, frozen waterfalls, the hot springs in falling snow. Cold snaps below −25 °C happen. Winter tires and an emergency kit are essential on the highways.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car from Calgary',
      text: 'The Trans-Canada Highway runs west from Calgary into the park, about 128 km and an hour and a half. You need a valid Parks Canada pass from the moment you enter the park — stopping in town counts. Fenced highway with wildlife overpasses; stay alert for animals anyway.',
      time: '≈1.5h from Calgary (≈128 km)',
    },
    {
      icon: '✈️',
      title: 'From Calgary Airport (YYC)',
      text: 'There is no commercial airport in the park. Scheduled airport shuttles run from YYC to Banff hotels; book ahead in summer and ski season.',
      time: '≈1h45m from YYC',
    },
    {
      icon: '🚌',
      title: 'By Roam Transit',
      text: 'Roam buses link Banff with Canmore (Route 3) and Lake Louise (Route 8X express), and serve the town and nearby sights. The 8X takes reservations, and in summer it is the sane way to reach Lake Louise.',
      time: '≈25 min to Canmore · ≈45 min to Lake Louise',
    },
    {
      icon: '🚂',
      title: 'By Rail',
      text: 'There is no regular passenger train to Banff. The Rocky Mountaineer, a luxury tourist train, stops here between Vancouver and Calgary — a holiday in itself rather than a way to get here.',
      time: 'Tourist train only',
    },
  ],

  stay: [
    {
      icon: '🏔️',
      title: 'Downtown Banff',
      area: 'Walkable · Most expensive',
      text: 'Hotels on and around Banff Avenue put restaurants, the river and the bus loop on foot. Prices in July and August are among the highest in the country.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Banff+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Banff%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '⛺',
      title: 'Tunnel Mountain Campgrounds',
      area: 'Cheapest in the park · Book early',
      text: 'Parks Canada campgrounds a few minutes from town, with summer Roam service into downtown. Reservations open months ahead and sell out fast.',
      links: [
        { label: 'Parks Canada Reservations', url: 'https://reservation.pc.gc.ca/', level: 'safe' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Canmore',
      area: 'Cheaper · 20 min away',
      text: 'Just outside the park boundary, with more choice and lower prices. The Roam bus and the Legacy Trail connect the two towns. Note that you still need a park pass to enter Banff.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Canmore+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Roam Transit',
      text: 'Roam runs the town buses, the regional routes to Canmore and Lake Louise, and seasonal routes to sights like Lake Minnewanka and the Cave and Basin. In summer it is the best way to avoid parking battles.',
      linkLabel: 'Roam Transit',
      linkUrl: 'https://roamtransit.com/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Roam Fares',
        text: 'Fares below are from Roam’s 2026 fare table. Children ride free. Transfers between the Banff local routes are valid for 45 minutes.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Banff local: $2 · Day pass $5', 'Route 3 to Canmore: $6', 'Route 8X to Lake Louise: $12.50', 'System day pass: $30'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://roamtransit.com/fares/',
      },
      {
        icon: '🏞️',
        title: 'Parks Canada Shuttles',
        text: 'Moraine Lake Road is closed to private vehicles. In season (June to mid-October in 2026) the only ways in are the Parks Canada shuttle, Roam or a licensed commercial tour. Shuttles also serve Lake Louise. Reserve ahead; the shuttle ticket is separate from your park pass.',
        fareBox: {
          label: 'Parks Canada shuttle',
          lines: ['Adult: $12.75', 'Senior: $6 · Youth: $4', 'Plus booking fee', 'Park pass also required'],
        },
        linkLabel: 'Parks Canada — Banff',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/banff',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🅿️', title: 'Parking', text: 'Downtown parking is paid in the busy core and fills early in summer. Lake Louise parking is paid from mid-May to mid-October. Leave the car at the hotel and ride.' },
          { icon: '🚲', title: 'Cycling', text: 'Town is compact and flat along the river, and the Legacy Trail runs to Canmore. Bike rentals are easy to find.' },
          { icon: '🚕', title: 'Taxis', text: 'A small fleet; expect waits in peak season and late at night.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the river trails, Bow Falls and Cave and Basin are all walkable from Banff Avenue.' },
        ],
      },
    ],
    proTip: {
      label: 'Summer tip:',
      text: 'Do not try to drive to Lake Louise at midday in July. Book the 8X or the Parks Canada shuttle for an early slot — the lakeshore at 8am and the lakeshore at noon are different places.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some Banff properties also add their own destination or marketing fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Banff / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', label: 'Gondola, tours and rentals: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏞️', label: 'Park admission: priced as posted' },
      { icon: '🛏️', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and ski instructors: 10–15%. Hotel housekeeping: $2–5/night. Shuttle drivers: a few dollars per bag is appreciated.',
  },

  practical: [
    { icon: '🎫', title: 'Park Pass', text: 'Every vehicle stopping in the park needs a valid Parks Canada pass — including if you are only visiting the town. In 2026: $12.25 adult per day, $24.50 family, youth free. A Discovery Pass ($83.50 adult) pays off after about a week.' },
    { icon: '🦌', title: 'Elk in Town', text: 'Elk wander the streets and the schoolyard. Keep 30 metres away, never get between a cow and her calf in spring, and give bulls a very wide berth during the September–October rut.' },
    { icon: '🐻', title: 'Bear Safety', text: 'Carry bear spray on every trail and know how to use it. Some trails have seasonal group-hiking restrictions or closures — check Parks Canada trail reports before setting out.' },
    { icon: '📵', title: 'Cell Coverage', text: 'Coverage is good in town and along the Trans-Canada but disappears quickly on trails and side roads. Download maps before you go.' },
    { icon: '🏠', title: 'Who Can Live Here', text: 'You cannot simply buy a house and move to Banff. To reside in the park you must be an eligible resident — in practice, mostly people whose main job is in the park, and their families.' },
    { icon: '⏰', title: 'Time Zone', text: 'Alberta is on Mountain Time and still changes its clocks: UTC-7 in winter, UTC-6 in summer. Since BC stopped changing its clocks in 2026, the two provinces match in winter and Alberta is one hour ahead in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Banff lies in Treaty 7 territory and the traditional lands of the Stoney Nakoda, Tsuut’ina and Blackfoot Confederacy nations, with the Ktunaxa and Métis also tied to these valleys. When the park was created, the peoples who had hunted and gathered here for millennia were restricted from it.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Banff Mineral Springs Hospital', '305 Lynx Street', 'Emergencies: call 911'] },
  ],
};

export default BANFF;
