// Mount Revelstoke National Park — данные страницы /park/mount-revelstoke
//
// Фото: по просьбе — снимок с карточки (/bc/parks/Mount Revelstoke.png).
// ВНИМАНИЕ: на нём известняковая вершина над бирюзовым озером — похоже на
// Скалистые горы (район Banff), а не на Mount Revelstoke (Columbia
// Mountains, лесистая вершина). Не подтверждено — сказано пользователю.
// Достопримечательности с иконками, галереи нет.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, "Hiking in Mount Revelstoke National Park" (брошюра,
//   PDF): Giant Cedars 0.5 км петля, 28 м ступеней, 15 мин; Skunk Cabbage
//   1.2 км петля, 30 мин; Inspiration Woods 2.5 км, 133 м; Nels Nelsen Ski
//   Jump 1 км, 78 м, 30 мин ("world records were set"); Summit trail 10 км,
//   1,353 м, 4-5 ч вверх — первый путь к лугам; Lindmark 8 км, 982 м;
//   Fire Lookout 0.5 км — исторический пожарный наблюдательный пункт,
//   панорама 360°; Koo Koo Sint 0.7 км — о Дэвиде Томпсоне; First
//   Footsteps 1 км — искусство коренных народов; Heather Lake 0.4 км;
//   Miller Lake 5.5 км/183 м; Eva Lake 6 км/209 м, 2-3 ч (в одну сторону);
//   Jade Lakes 9 км/428 м до первого озера, 3-4 ч; на вершине 10 троп;
//   луга цветут в августе; виды на Selkirk и Monashee; "единственный в
//   мире внутриматериковый кедровый дождевой лес" (так в брошюре);
//   снег возможен и в августе; ночёвка — пропуск + разрешение на
//   бэккантри-кемпинг; костры запрещены; рыбалка — лицензия нацпарка;
//   экстренная служба 1-877-852-3100; офис 250-837-7500; 30-50 м от
//   большинства животных, 100 м от медведей; собаки на поводке.
// - Parks Canada, Hiking (страница): Meadows in the Sky Parkway открывается
//   по мере таяния снега и закрывается к началу октября; весной (май —
//   конец июня) высокие тропы под снегом и лавиноопасны; выше ~2,000 м
//   лавины возможны ноябрь — июнь; 100 м от медведей, 30 м от оленей;
//   сообщать о встречах с медведями, пумами, росомахами, карибу; клещи.
// - Parks Canada, главная: зимой — снегоступы, фэтбайк, лыжи на дороге;
//   вход бесплатный (Free admission — ссылка на сборы; на странице
//   осторожно "check current fees").
// - Wikipedia: основан в 1914; 260 км²; дорога 26 км, начата в 1911,
//   закончена в 1927; в 1915 на дороге работали интернированные; трамплин
//   с 1915, расширен до олимпийских норм в 1933, самый длинный
//   естественный трамплин в Канаде, последние соревнования в 1971; в
//   парке — часть одного из немногих внутренних умеренных дождевых лесов
//   мира, кедры у Giant Cedars старше 800 лет; небольшое стадо карибу
//   (под угрозой).
// - Шаттл к вершине от Balsam Lake: оператор и цены меняются (в одном
//   источнике — частный Revy Rides) → на странице "check current service".
// - НЕ использовано: высота вершины, даты открытия дороги по годам,
//   кемпинг Snowforest (не подтверждён).

const IMAGE = '/bc/parks/Mount Revelstoke.png';

export const MOUNT_REVELSTOKE = {
  slug: 'mount-revelstoke',
  name: 'Mount Revelstoke National Park',
  shortName: 'Mount Revelstoke',
  province: 'British Columbia',
  tag: 'Meadows In The Sky · Est. 1914',
  heroImage: IMAGE,
  heroCaption: 'Mount Revelstoke National Park · BC',
  description:
    'Drive to the top of a mountain. The Meadows in the Sky Parkway climbs 26 km from ancient cedar rainforest to subalpine meadows that burst into colour every August — with the Selkirk and Monashee ranges spread out all around you.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1914' },
    { label: 'Area', value: '260 km²' },
    { label: 'Rating', value: '4.6 ★' },
    { label: 'Summit Road', value: '26 km' },
    { label: 'Wildflowers', value: 'Peak In August' },
    { label: 'Old Cedars', value: '800+ Years' },
  ],

  badges: ['Wildflower Meadows', 'Inland Rainforest', 'Ski Jump History'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'Meadows In The Sky',
    emoji: '🌼',
    title: 'A Road To The Top Of A Mountain',
    text: 'Local mountaineers and skiers built the first trail to the summit in 1910, and work on a road began in 1911. Finished in 1927, the 26 km Meadows in the Sky Parkway now carries visitors from the rainforest of the Columbia Valley to the subalpine meadows on top — for many people, the first time they stand on a mountain summit. Ten short and long trails start from the top.',
    stats: [
      { value: '1910', label: 'First summit trail', level: 'gold' },
      { value: '1927', label: 'Parkway completed', level: 'blue' },
      { value: '26 km', label: 'From valley to summit', level: 'safe' },
      { value: 'August', label: 'Wildflower peak', level: 'danger' },
    ],
  },

  attractions: [
    {
      name: 'Meadows in the Sky Parkway',
      icon: '🛣️',
      tag: 'Iconic',
      tagLevel: 'gold',
      meta: '26 km paved road to the summit with roadside viewpoints over Revelstoke, the Columbia River, and the Monashee Mountains.',
    },
    {
      name: 'Summit Wildflower Meadows',
      icon: '🌼',
      tag: 'Wildflowers',
      tagLevel: 'danger',
      meta: 'Subalpine meadows explode into colour every August. Short summit trails loop past Heather Lake and through the flowers.',
    },
    {
      name: 'Giant Cedars Boardwalk',
      icon: '🌲',
      tag: 'Rainforest',
      tagLevel: 'safe',
      meta: 'A 0.5 km boardwalk through inland rainforest of western redcedar and hemlock — some trees are more than 800 years old.',
    },
    {
      name: 'Skunk Cabbage Boardwalk',
      icon: '🌿',
      tag: 'Wetland',
      tagLevel: 'olive',
      meta: '1.2 km loop through a rare Columbia Mountain wetland, where skunk cabbage leaves grow as tall as children.',
    },
    {
      name: 'Summit Fire Lookout',
      icon: '🔭',
      tag: 'Viewpoint',
      tagLevel: 'blue',
      meta: 'A short trail to the historic fire lookout with a 360° panorama. The nearby Parapets viewpoint is wheelchair-accessible with assistance.',
    },
    {
      name: 'Nels Nelsen Ski Jump',
      icon: '⛷️',
      tag: 'History',
      tagLevel: 'purple',
      meta: 'Once the longest natural ski jump in Canada, where international records were set. Explore it on a 1 km trail.',
    },
  ],

  wildlifeWarning:
    'Carry bear spray where you can reach it. Keep at least 100 m from bears and 30 m from deer and other smaller animals. Leave earbuds out so you can hear what’s around you, and check yourself and your pets for ticks.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Valleys and parkway' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Backcountry' },
    { name: 'Mountain Caribou', level: 'caution', chance: '★☆☆☆☆ Rare — report sightings' },
    { name: 'Wolverine', level: 'caution', chance: '★☆☆☆☆ Rare — report sightings' },
    { name: 'Cougar', level: 'danger', chance: '★☆☆☆☆ Rare — report sightings' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'July — August',
      level: 'safe',
      text: 'The parkway opens up to the summit as the snow melts. Wildflowers peak in August. Even in summer, pack warm layers — snow is possible in August on the high trails.',
      rating: 5,
      note: 'Wildflowers',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September',
      level: 'danger',
      text: 'Quiet, crisp days on the summit trails. The Meadows in the Sky Parkway closes by early October.',
      rating: 3,
      note: 'Short season',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'The parkway becomes a snowy playground for snowshoeing, fat biking, and Nordic skiing. Avalanche terrain above treeline is for trained backcountry users only.',
      rating: 3,
      note: 'Snowshoe & ski',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May — June',
      level: 'olive',
      text: 'The valley boardwalks open first. High trails stay snow-bound and avalanche-prone until late June, and the parkway opens in stages as snow melts.',
      rating: 2,
      note: 'Valley trails only',
    },
  ],

  trailsNote: {
    title: 'Snow Can Linger Into Summer',
    text: 'Most trails start from the Meadows in the Sky Parkway, which opens only as the snow melts. Eva, Miller, and Jade Lakes are backcountry trails — be ready for snow even in August, and get a backcountry permit for any overnight trip.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/mount-revelstoke-national-park',
  trails: [
    { name: 'Giant Cedars Boardwalk', length: '0.5 km loop', gain: '28 m (stairs)', time: '15 min', area: 'Trans-Canada Hwy', difficulty: 'Easy' },
    { name: 'Skunk Cabbage Boardwalk', length: '1.2 km loop', gain: '5 m', time: '30 min', area: 'Trans-Canada Hwy', difficulty: 'Easy' },
    { name: 'Fire Lookout', length: '0.5 km one way', gain: '11 m', time: '30 min', area: 'Summit', difficulty: 'Easy' },
    { name: 'Eva Lake', length: '6 km one way', gain: '209 m', time: '2–3 hours one way', area: 'Summit — backcountry', difficulty: 'Moderate' },
    { name: 'Jade Lakes', length: '9 km one way', gain: '428 m', time: '3–4 hours to first lake', area: 'Summit — backcountry', difficulty: 'Hard' },
    { name: 'Summit Trail', length: '10 km one way', gain: '1,353 m', time: '4–5 hours uphill', area: 'Nels Nelsen parking lot', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Kelowna (YLW) or Calgary (YYC) and drive to the town of Revelstoke on the Trans-Canada Highway. The park sits right next to town.',
      time: 'Then a short drive from Revelstoke',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Meadows in the Sky Parkway starts just outside Revelstoke and climbs 26 km to the summit area. The rainforest boardwalks are right on the Trans-Canada Highway east of town.',
      time: 'Parkway: snow-free season only',
    },
    {
      icon: '🚐',
      title: 'Summit Shuttle',
      text: 'The last stretch from Balsam Lake to the summit has been served by a shuttle in summer. Service and operators change — check with Parks Canada before you go.',
      time: 'Check current service',
    },
  ],

  entryPass: {
    title: 'Park Pass Required',
    text: 'Check current Parks Canada fees before your visit. Youth 17 and under enter free.',
    buyText: 'Overnight trips to Eva or Jade Lakes need a backcountry camping permit.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '⛺',
      title: 'Backcountry Camping',
      text: 'Backcountry campsites near Eva and Jade Lakes. A park pass and backcountry permit are required; open fires are not allowed.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Revelstoke',
      text: 'The town of Revelstoke sits at the foot of the mountain, with hotels, restaurants, and services — the natural base for the park and nearby Glacier National Park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Revelstoke+British+Columbia', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Revelstoke--British-Columbia', level: 'danger' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Emergency',
      lines: ['911', 'Emergencies in the park:', '1-877-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Park Information',
      lines: ['250-837-7500', 'mrg.information@pc.gc.ca', 'Revelstoke office'],
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Reception is unreliable on the mountain. Tell someone your plans before you hike.',
    },
    {
      icon: '🔥',
      title: 'No Open Fires',
      text: 'Open fires are not allowed in the backcountry.',
    },
    {
      icon: '🎣',
      title: 'Fishing',
      text: 'A National Park fishing licence is required.',
    },
    {
      icon: '🌸',
      title: 'Leave It Be',
      text: 'Wildflowers, berries, rocks, and antlers are protected — leave them for others to enjoy.',
    },
  ],

  gallery: [],
};

export default MOUNT_REVELSTOKE;
