// Jasper — данные страницы /city/jasper
// В шапке ролик, присланный владельцем сайта. Снят он, судя по кадрам,
// не в Джаспере, а в Банфе: озеро Минневанка и озеро Ту-Джек с дорогой
// Lake Minnewanka Road между ними, ~290 км отсюда. Поставлен по прямому
// решению владельца сайта; если найдётся кадр самого Джаспера, менять
// нужно только heroVideo и heroImage. Постер вырезан из первого кадра
// того же ролика. Проверенный пост-пожарный снимок Pyramid Lake (Hansueli
// Krapf, Commons, 10.06.2025, CC BY-SA 4.0) — запасной вариант.
// Город и национальный парк — разные страницы: парк описан в
// src/data/parks/jasper.js, здесь только сам город.
// Статус объектов после пожара (что открыто, что закрыто) — на
// октябрь 2026 и меняется по сезонам; в тексте везде сказано
// сверяться с Parks Canada.

export const JASPER = {
  slug: 'jasper',
  name: 'Jasper',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Inside Jasper National Park',
  accentLevel: 'safe',
  heroIcon: '🌲',
  heroImage: '/Cities/Jasper/hero-poster.jpg',
  heroVideo: '/Cities/Jasper/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.8737, lon: -118.0814 },
  subtitle: 'The Town That Is Rebuilding',
  description:
    'A small railway town in the middle of the largest national park in the Canadian Rockies — quieter, wilder and further from anywhere than Banff. In July 2024 a wildfire burned through roughly a third of it. Jasper is open, people live and work here, and the rebuilding is happening in plain sight; visiting is one of the ways the town recovers.',

  actions: [
    { label: 'Explore Jasper', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈4.7K' },
    { label: 'Elevation', value: '≈1,060 m' },
    { label: 'Park Pass', value: 'Required' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'From Edmonton', value: '≈365 km · 4h' },
    { label: 'To Banff', value: '≈290 km · 4h' },
  ],

  badges: ['National Park Town', 'Rebuilding', 'Treaty 6 & 8 Territory'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '≈30%', label: 'Of the town’s structures destroyed by the July 2024 wildfire — 358 of 1,113', level: 'danger' },
    { value: '½', label: 'Of the destroyed properties rebuilt or approved for rebuilding by July 2026, per Parks Canada', level: 'gold' },
    { value: '25K', label: 'People evacuated in a single night — about 5,000 residents and 20,000 visitors', level: 'blue' },
    { value: '1907', label: 'The park was created — and First Nations and Métis families were removed from it', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Connaught Drive & Downtown', icon: '🚂', tag: '🚂 Core', tagLevel: 'gold', meta: 'Railway station · Shops and restaurants · Information centre · Largely intact' },
    { name: 'Patricia Street', icon: '☕', tag: '☕ Main street', tagLevel: 'blue', meta: 'Cafés, outfitters and bars · One block up from the tracks' },
    { name: 'The Rebuilding Areas', icon: '🏗️', tag: '🏗️ West side', tagLevel: 'danger', meta: 'Neighbourhoods hit hardest in 2024 · Active construction · Residential, not a sight' },
    { name: 'Pyramid Bench', icon: '🏔️', tag: '🏔️ North', tagLevel: 'safe', meta: 'Pyramid and Patricia lakes · Five minutes’ drive · Trails and paddling' },
    { name: 'Lac Beauvert', icon: '🛶', tag: '🛶 Across the river', tagLevel: 'purple', meta: 'Jasper Park Lodge · Lakes Annette and Edith · Lakeside trail' },
    { name: 'Whistlers & the SkyTram', icon: '🚡', tag: '🚡 South', tagLevel: 'olive', meta: 'Jasper SkyTram · Whistlers campground · Views over the Athabasca valley' },
  ],

  attractions: [
    {
      name: 'The 2024 Fire — and Coming Back',
      icon: '🔥',
      text: 'In July 2024 a wildfire reached the townsite and destroyed 358 of its 1,113 structures — homes, businesses and hotels — while some 25,000 people were evacuated in a single night. A firefighter was killed by a falling tree during the response. Two years on, about half of the lost properties are rebuilt or approved for rebuilding, and most are expected back by the end of 2027. The burned neighbourhoods are where people live: drive through respectfully, do not treat them as a sightseeing stop.',
      tags: [{ label: 'Living history', level: 'danger' }, { label: 'Be respectful', level: 'caution' }],
    },
    {
      name: 'Pyramid & Patricia Lakes',
      icon: '🏔️',
      text: 'Two lakes a short drive above town under Pyramid Mountain, with an island on a footbridge, paddling, picnic spots and trails. The slopes behind still show the scars of the fire and of the pine beetle years before it. The easiest place to see the scenery Jasper is known for without a long drive.',
      tags: [{ label: 'Free', level: 'safe' }, { label: '5 min drive', level: 'blue' }],
    },
    {
      name: 'Jasper SkyTram',
      icon: '🚡',
      text: 'A tramway up Whistlers Mountain to a boardwalk and a steep trail to the summit, with the whole Athabasca valley below. Open in 2026 from mid-April to late October — check exact dates. Weather at the top is much colder than in town.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
    },
    {
      name: 'Maligne Lake',
      icon: '⛵',
      text: 'The largest lake in the park, about an hour’s drive south-east, with boat trips to Spirit Island in summer. There is no public transit to the lake. Maligne Canyon, on the same road, stays closed through the 2026 season because of unstable slopes and debris flows after the fire — check Parks Canada for its reopening.',
      tags: [{ label: 'Car needed', level: 'caution' }, { label: 'Canyon closed', level: 'danger' }],
    },
    {
      name: 'Valley of the Five Lakes',
      icon: '🥾',
      text: 'One of the best-loved hikes in the park reopened on 23 May 2026 — the first time since the fire — with a realigned ridge trail, a new short loop and better signage. One section at the south end of First Lake is still closed. Walking through recovering forest is part of the experience now.',
      tags: [{ label: 'Reopened 2026', level: 'safe' }, { label: 'Free', level: 'blue' }],
    },
    {
      name: 'Miette Hot Springs',
      icon: '♨️',
      text: 'The hottest springs in the Canadian Rockies, about an hour north-east of town up a winding mountain road. Seasonal — in 2026 open until mid-October, reopening in May 2027. Separately ticketed from the park pass.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Separate fee', level: 'gold' }],
    },
  ],

  outdoorHeading: 'A Bigger, Wilder Park',
  outdoor: [
    { icon: '🥾', name: 'Hiking', dist: 'From town and beyond', text: 'Many trails reopened after the fire, others are still closed or rerouted, and burned forest carries real hazards — falling trees and unstable ground. Check the Parks Canada open/closed list before every hike.' },
    { icon: '🦌', name: 'Wildlife', dist: 'Everywhere', text: 'Elk, bighorn sheep, mountain goats, bears and caribou in the high country. Keep 30 metres from elk and 100 metres from bears, carry bear spray, and never stop on the highway to watch animals.' },
    { icon: '🌌', name: 'Night Skies', dist: 'Outside town', text: 'Jasper protects its dark skies, and on clear nights away from town the Milky Way is overhead. Autumn and winter nights are long — and cold.' },
    { icon: '🛶', name: 'Paddling', dist: 'Pyramid · Patricia · Annette', text: 'Small lakes close to town for canoeing and paddleboarding. Glacier-fed water is cold enough to be dangerous — wear a lifejacket and stay near shore.' },
    { icon: '🧊', name: 'Columbia Icefield', dist: '≈100 km south', text: 'The Athabasca Glacier sits beside the Icefields Parkway, inside Jasper National Park. Never walk onto the glacier without a guide — there are hidden crevasses, and people have died there.' },
    { icon: '⛷️', name: 'Winter', dist: 'Marmot Basin · Maligne', text: 'A ski hill about half an hour from town, cross-country trails, and ice walks in winter. Quiet, cold and cheaper than Banff.' },
  ],

  food: [
    { icon: '🥩', title: 'Mountain-Town Dining', area: 'Patricia · Connaught', areaLevel: 'danger', text: 'Steak, bison, pub food and a few more ambitious kitchens. Some restaurants were lost in the fire and are rebuilding — choice is narrower than before 2024.' },
    { icon: '🍺', title: 'Brewpub', area: 'Downtown', areaLevel: 'gold', text: 'A brewpub on Connaught Drive is the usual after-hike stop and one of the busiest rooms in town.' },
    { icon: '☕', title: 'Cafés & Bakeries', area: 'Downtown', areaLevel: 'blue', text: 'Early cafés for trail lunches. Buy food before you leave town — there is nothing to buy at the trailheads.' },
    { icon: '🛒', title: 'Groceries', area: 'Downtown', areaLevel: 'safe', text: 'Groceries are expensive and choice is limited. Stock up in Hinton or Edmonton if you are self-catering.' },
    { icon: '🫐', title: 'Local Support', area: 'Town-wide', areaLevel: 'purple', text: 'Eating, staying and shopping locally is one of the most direct ways to help Jasper recover. Independent businesses carried the town through the first two years.' },
    { icon: '🍽️', title: 'Lodge Dining', area: 'Lac Beauvert', areaLevel: 'olive', text: 'The lodge across the river serves the most formal meals in the area. Book ahead in summer.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Quiet and muddy', text: 'Valley trails melt out first; the high country and Maligne Lake can stay frozen into June. Elk calving season — mothers are aggressive. Many seasonal attractions open in May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season · fire season', text: 'Everything open and accommodation scarce — and with fewer rooms since 2024, book early. This is also wildfire season: check fire bans and smoke forecasts, and know your evacuation route.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Elk rut, gold aspens', text: 'Quieter, golden, and the best time for wildlife. The elk rut makes bulls in town genuinely dangerous — keep well away. Seasonal attractions close through October.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Cold and quiet', text: 'Deep cold, few visitors, long dark nights. Ski at Marmot Basin, walk frozen canyons where open. The Icefields Parkway to Banff is a serious winter drive with no services — check DriveBC/511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car from Edmonton',
      text: 'Highway 16 (Yellowhead) runs west from Edmonton through Hinton to Jasper, about 365 km. You need a valid Parks Canada pass once you enter the park, even if you are only stopping in town.',
      time: '≈4h from Edmonton',
    },
    {
      icon: '🏔️',
      title: 'From Banff — Icefields Parkway',
      text: 'Highway 93 north from Lake Louise, about 290 km from Banff, through some of the finest mountain scenery in the world. There is almost no cell service and only one fuel stop in the middle, at Saskatchewan River Crossing — fill up before you set off.',
      time: '≈4h without stops',
    },
    {
      icon: '🚂',
      title: 'By Train',
      text: 'Jasper is one of the few Rockies towns with regular passenger rail. VIA Rail’s Canadian stops here on its Toronto–Vancouver route, and the Jasper–Prince Rupert train starts here. Both run only a few times a week — plan around the timetable.',
      time: 'A few departures a week',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'There is no commercial airport in the park. Edmonton (YEG) is the usual arrival point, then car or shuttle for about four hours.',
      time: '≈4h from YEG',
    },
  ],

  stay: [
    {
      icon: '🚂',
      title: 'Downtown Jasper',
      area: 'Walkable · Fewer rooms since 2024',
      text: 'Hotels and guest houses close to the station and restaurants. Several properties were lost in the fire; those destroyed are expected to reopen by spring 2027. Book well ahead for summer.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jasper+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Jasper%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '⛺',
      title: 'Park Campgrounds',
      area: 'Cheapest · Book early',
      text: 'Parks Canada campgrounds around town. Check which ones are open — some were affected by the fire.',
      links: [
        { label: 'Parks Canada Reservations', url: 'https://reservation.pc.gc.ca/', level: 'safe' },
      ],
    },
    {
      icon: '🏘️',
      title: 'Hinton',
      area: 'Outside the park · 1h away',
      text: 'A town on Highway 16 east of the park gate, with more and cheaper rooms. A practical base for day trips into the park if Jasper is full.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hinton+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌',
      title: 'Jasper Transit',
      text: 'A small municipal bus service links downtown, hotels and nearby neighbourhoods. Ridership jumped in 2026 and the town is moving to its own new fleet, with route changes planned — check current routes and fares with the Municipality of Jasper. There is no public transit to Maligne Lake or most trailheads.',
      linkLabel: 'Municipality of Jasper',
      linkUrl: 'https://www.jasper-alberta.ca/',
    },
    modes: [
      {
        icon: '🎫',
        title: 'Park Pass',
        text: 'Required for every vehicle and visitor in the park, including in town. The daily pass also covers Banff, Yoho and Kootenay and is valid until 4pm the next day.',
        fareBox: {
          label: '2026 daily admission',
          lines: ['Adult: $12.25', 'Senior: $10.75', 'Youth 17 and under: free', 'Family/group: $24.50', 'Discovery Pass: $83.50 adult'],
        },
        linkLabel: 'Parks Canada — Jasper',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/jasper',
      },
      {
        icon: '🗺️',
        title: 'What’s Open',
        text: 'Since the fire, trail and road status changes through the season. Parks Canada keeps an open/closed list — read it before planning any day out.',
        fareBox: {
          label: 'Closed through 2026',
          lines: ['Maligne Canyon', 'Cavell Road', 'Valley of the Five Lakes — Trail 9 section'],
        },
        linkLabel: 'Open & Closed — Parks Canada',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed',
      },
      {
        icon: '🚗',
        title: 'Other Options',
        items: [
          { icon: '🚗', title: 'Rental Car', text: 'Effectively required beyond town. Rent in Edmonton or Calgary — choice in Jasper is very limited.' },
          { icon: '🚌', title: 'Tours & Shuttles', text: 'Licensed operators run trips to Maligne Lake, the Icefield and other sights in season.' },
          { icon: '🚲', title: 'Cycling', text: 'Town is small and flat; bikes rent easily. Watch for elk on the paths.' },
          { icon: '🚶', title: 'On Foot', text: 'Downtown, the station and the riverside are all walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Fuel tip:',
      text: 'Fill the tank in Jasper or Hinton before any long drive. On the Icefields Parkway there is one fuel stop in 230 km, and it closes in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some properties add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Jasper / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', label: 'SkyTram, tours and rentals: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🏞️', label: 'Park admission: priced as posted' },
      { icon: '🛏️', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🔥', title: 'Fire Season', text: 'Summer is wildfire season. Check fire bans, smoke forecasts and Alberta Emergency Alerts, and know how you would leave town. Jasper has one highway east and one south.' },
    { icon: '🗺️', title: 'Check What’s Open', text: 'Trails, roads and sites have reopened in stages since 2024. Use the Parks Canada open/closed list rather than older guides or blog posts.' },
    { icon: '🎫', title: 'Park Pass', text: 'Every visitor needs a valid Parks Canada pass, including when only visiting town. In 2026: $12.25 adult per day, youth free.' },
    { icon: '🦌', title: 'Elk in Town', text: 'Elk wander the streets. Keep 30 metres away — further during the autumn rut and spring calving.' },
    { icon: '📵', title: 'No Signal', text: 'Coverage is good in town and drops away fast outside it — almost none on the Icefields Parkway. Download maps and tell someone your plans.' },
    { icon: '⏰', title: 'Time Zone', text: 'Alberta is on Mountain Time and still changes its clocks: UTC-7 in winter, UTC-6 in summer. The BC border is 25 km west — BC matches Alberta in winter and is one hour behind in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Jasper lies in Treaty 6 and Treaty 8 territory. Parks Canada works with over two dozen Indigenous partners here, among them the Simpcw, Aseniwuche Winewak, Stoney Nakoda and Mountain Métis. Parks Canada itself states that after 1907 First Nations and Métis families were forcibly removed from the park.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Seton — Jasper Healthcare Centre', '518 Robson Street', 'Emergencies: call 911'] },
  ],
};

export default JASPER;
