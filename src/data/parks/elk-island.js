// Elk Island National Park — данные страницы /park/elk-island

const BASE = '/parks/Elk Island National Park';

export const ELK_ISLAND = {
  slug: 'elk-island',
  name: 'Elk Island National Park',
  shortName: 'Elk Island',
  province: 'Alberta',
  tag: "Canada's Bison Capital · Est. 1906",
  // Акцент страницы (подзаголовок, основная кнопка, бейджи) — золотисто-
  // амбровый, в тон оригинальному макету (--elk-light: #A06828).
  accentLevel: 'gold',
  heroImage: `${BASE}/Elk.jpg`,
  description:
    "A hidden gem just outside Edmonton — Canada's most accessible national park and one of the world's most important bison conservation areas. Over 2,500 free-roaming bison, elk, moose, and some of the best stargazing in Alberta.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1906' },
    { label: 'Area', value: '194 km²' },
    { label: 'From Edmonton', value: '45 min' },
    { label: 'Bison Count', value: '800+' },
    { label: 'Wildlife Species', value: '250+' },
    { label: 'Dark Sky', value: '★ Preserve' },
  ],

  badges: ['Bison Conservation', 'Dark Sky Preserve', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  spotlight: {
    tag: 'Home of Canada’s Bison',
    emoji: '🦬',
    title: "Home of Canada's Plains and Wood Bison",
    text: 'Elk Island is one of the most important bison conservation sites in the world. The park maintains two fully fenced herds — Plains Bison on the south side and the rarer Wood Bison on the north side. In the late 1800s, bison were nearly extinct with fewer than 1,000 animals left in North America. Today Elk Island’s conservation program has helped restore bison populations across the continent. Every bison in Yellowstone National Park traces its lineage to Elk Island stock.',
    stats: [
      { value: '800+', label: 'Plains Bison', level: 'gold' },
      { value: '350+', label: 'Wood Bison', level: 'safe' },
      { value: '1906', label: 'Est. as park', level: 'gold' },
      { value: '50+', label: 'Countries received bison', level: 'blue' },
    ],
  },

  attractions: [
    {
      name: 'Bison Drive',
      image: `${BASE}/Bison Drive.jpg`,
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: 'Drive the park loop roads at dawn or dusk · Guaranteed bison sightings',
    },
    {
      name: 'Dark Sky Preserve Stargazing',
      image: `${BASE}/Dark Sky Preserve Stargazing.jpg`,
      tag: 'Dark Sky',
      tagLevel: 'blue',
      meta: "Milky Way visible · One of Alberta's best stargazing sites · Year round",
    },
    {
      name: 'Astotin Lake',
      image: `${BASE}/Astotin Lake.jpg`,
      tag: 'Water',
      tagLevel: 'safe',
      meta: 'Canoeing · Kayaking · Swimming · Picnics · Sandy beach',
    },
    {
      name: 'Aspen Parkland',
      image: `${BASE}/Aspen Parkland.jpg`,
      tag: 'Forest',
      tagLevel: 'gold',
      meta: 'Ancient aspen groves · Fall colours spectacular · October peak',
    },
    {
      name: 'Winter Wildlife & Skiing',
      image: `${BASE}/Winter Wildlife & Skiing.jpg`,
      tag: 'Winter',
      tagLevel: 'blue',
      meta: 'Cross-country skiing · Snowshoeing · Bison in snow — incredible',
    },
    {
      name: 'World-Class Birding',
      image: `${BASE}/World-Class Birding.jpg`,
      tag: 'Birding',
      tagLevel: 'safe',
      meta: '250+ bird species · Trumpeter swans · Loons · Warblers · Year round',
    },
  ],

  wildlifeWarning:
    'Bison are dangerous wild animals. Stay at least 100m from bison at all times. Never approach, feed, or block their path. Bison can run 60 km/h and are responsible for more injuries in national parks than any other animal. Stay in your vehicle when bison are near the road.',
  wildlife: [
    { name: 'Plains Bison', level: 'danger', chance: '★★★★★ Guaranteed sighting' },
    { name: 'Wood Bison', level: 'danger', chance: '★★★★☆ North section only' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★★ Very common' },
    { name: 'Moose', level: 'caution', chance: '★★★★☆ Wetland areas' },
    { name: 'Black Bear', level: 'danger', chance: '★★☆☆☆ Occasional' },
    { name: 'Coyote', level: 'caution', chance: '★★★★☆ Very common' },
    { name: 'Beaver', level: 'safe', chance: '★★★★☆ Ponds and lakes' },
    { name: 'Trumpeter Swan', level: 'safe', chance: '★★★★☆ Astotin Lake' },
    { name: 'Common Loon', level: 'safe', chance: '★★★★☆ Lake areas' },
    { name: 'Muskrat', level: 'safe', chance: '★★★★☆ Wetlands' },
    { name: 'White-tailed Deer', level: 'safe', chance: '★★★★★ Everywhere' },
    { name: 'Great Horned Owl', level: 'safe', chance: '★★★☆☆ Dawn and dusk' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Ideal for hiking, canoeing on Astotin Lake, and wildlife viewing. Bison calves born in May–June. Mosquitoes can be intense in June — bring strong repellent. Evenings perfect for stargazing.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Absolute best season. Golden aspen forests, elk rut in September (you can hear the bulls bugling!), bison in full winter coats, and spectacular Milky Way on clear nights. No mosquitoes!',
      rating: 5,
      note: 'Best overall!',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: "Magical and underrated. Bison in deep snow is one of Canada's most dramatic wildlife sights. Groomed cross-country ski trails, snowshoeing, and the best Northern Lights visibility of the year.",
      rating: 4,
      note: 'Northern Lights',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Bison calving season — watch newborn calves in May. Migrating birds arrive in huge numbers in April. Trails can be muddy. Bears active. Aspen leaves emerging — fresh and green.',
      rating: 4,
      note: 'Bison calves!',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/elk-island-national-park',
  trailsNote: {
    title: 'Bison on Trails',
    text: 'Bison roam freely on all trails. If you encounter a bison on the trail — stop, stay calm, give it plenty of space, and wait for it to move. Never run. Never try to go around a bison in dense bush. Most trails are not in fenced areas — bison encounters are common and expected.',
  },
  trails: [
    { name: 'Hayburger Trail', length: '4.6 km loop', gain: '40 m gain', time: '1–1.5 hours', area: 'South Park · Bison country', difficulty: 'Easy' },
    { name: 'Shoreline Trail (Astotin Lake)', length: '12.7 km loop', gain: '50 m gain', time: '3–4 hours', area: 'Astotin Lake', difficulty: 'Easy' },
    { name: 'Amisk Wuche Trail', length: '7 km loop', gain: '55 m gain', time: '2–2.5 hours', area: 'South Park · Wetlands', difficulty: 'Easy' },
    { name: 'Moss Lake Trail', length: '4.9 km loop', gain: '35 m gain', time: '1–1.5 hours', area: 'North Park · Wood Bison', difficulty: 'Easy' },
    { name: 'Wood Bison Trail', length: '16 km loop', gain: '70 m gain', time: '4–5 hours', area: 'North Park · Remote', difficulty: 'Moderate' },
    { name: 'Lakeview Trail', length: '2.2 km return', gain: '20 m gain', time: '45 min', area: 'Astotin Lake Day Use', difficulty: 'Easy' },
  ],
  trailsEmbedUrl: 'https://www.alltrails.com/widget/park/canada/alberta/elk-island-national-park?u=m&sh=1Xy3fU',

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car — Best Option',
      text: 'Take Yellowhead Highway (Hwy 16) east from Edmonton for 45 km. Turn right onto Range Road 210. The south park entrance is clearly signed. Takes about 45 minutes from downtown Edmonton. A car is essential — no public transit.',
      time: '45 min from Downtown Edmonton',
    },
    {
      icon: '🚌',
      title: 'Tours from Edmonton',
      text: "Several Edmonton tour operators offer guided day trips to Elk Island with knowledgeable naturalist guides. A great option if you don't have a car — guides know the best spots to find bison and other wildlife.",
      time: 'No public transit — guided tour or rental car',
    },
    {
      icon: '✈️',
      title: 'Flying to Edmonton',
      text: 'Fly into Edmonton International Airport (YEG). Rent a car at the airport and drive east on Hwy 16 — Elk Island is only 60 km from the airport. The perfect add-on to an Edmonton city trip.',
      time: '60 km from YEG · 50 min drive',
    },
  ],
  entryPass: {
    title: 'Parks Canada Discovery Pass',
    text: 'A day pass or annual Discovery Pass covers entry to Elk Island year-round.',
    buyText: 'Buy online before you go to skip the gate lineup.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Astotin Lake Campground',
      text: 'The only campground inside the park — sites right on the lake, with washrooms and firepits. Book well ahead for summer weekends.',
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' },
      ],
    },
    {
      icon: '🏨',
      title: 'Sherwood Park',
      text: 'The closest town with hotels, 25 minutes from the park — a practical base if camping isn’t your thing.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sherwood+Park+AB', level: 'blue' },
      ],
    },
    {
      icon: '🏙️',
      title: 'Edmonton',
      text: '45 minutes from the park with the widest range of hotels — easy to combine with a city trip.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Edmonton', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Edmonton-Hotels.d178294.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Park Wardens · 780-992-2950', '24/7'] },
    { icon: '🦬', title: 'Bison Safety', text: 'Stay 100m away at all times. Never approach, feed, or block their path.' },
    { icon: '🎫', title: 'Parks Pass', text: 'Discovery Pass or day pass required. Buy online at reservation.pc.gc.ca.' },
    { icon: '🦟', title: 'Mosquitoes', text: 'Intense in June — bring strong repellent and cover up at dawn/dusk.' },
    { icon: '🌌', title: 'Dark Sky Preserve', text: 'No artificial lighting after dark — one of Alberta’s best stargazing spots.' },
    { icon: '🚗', title: 'No Public Transit', text: 'A car or guided tour is required — there is no bus service to the park.' },
    { icon: '🥶', title: 'Winter Driving', text: 'Loop roads are plowed but can be icy — winter tires recommended Nov–Mar.' },
    { icon: '📶', title: 'Cell Service', text: 'Spotty inside the park. Download maps and trail info before you arrive.' },
  ],

  gallery: [
    `${BASE}/Elk.jpg`,
    '/mb/parks/elk-island.png',
    '/ab/parks/Elk Island National Park.png',
  ],
};

export default ELK_ISLAND;
