// Glacier National Park (British Columbia) — данные страницы /park/glacier
//
// Фото: по просьбе — только снимок с карточки
// (/bc/parks/Glacier National Park.png). Достопримечательности с иконками,
// галереи нет (как у Kootenay).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Glacier — Fast facts: 1,350 км² (на карточке 1,349 —
//   оставлено); основан в 1886, после завершения железной дороги в 1885;
//   ледников 129 (2018), было 337 меньше чем за 40 лет; наблюдения за
//   ледниками с 1887 (семья Во); ~10 м снега в год на Rogers Pass, на
//   окрестных вершинах до двух раз больше; январь ~-9 °C, июль ~13.5 °C;
//   внутренний дождевой лес до ~1,300 м; кедры и тсуги до 1,000 лет и до
//   4 м в диаметре; ~235 видов птиц летом; лавина в марте 1910 убила 58
//   железнодорожников; Connaught Tunnel открыт в 1916; контроль лавин
//   Parks Canada + Канадские вооружённые силы с 1961; три кемпинга;
//   на полпути между Калгари и Ванкувером.
// - Parks Canada, History: Glacier House (отель CPR, закрыт в 1925); в
//   1899 наняты швейцарские гиды — первый чисто рекреационный технический
//   альпинизм в Северной Америке; участок Trans-Canada через Rogers Pass
//   открыт в 1962.
// - Parks Canada, Avalanche control — facts: крупнейшая в мире мобильная
//   программа контроля лавин; 105-мм гаубицы C-3; 16 огневых позиций,
//   ~40 км шоссе, 135 лавинных путей; ~2,000 лавин в год у коридора;
//   скорость до 250 км/ч; ~100 часов закрытия шоссе в год; Rogers Pass
//   1,330 м — третья по высоте точка Trans-Canada; национальное
//   историческое место с 1971.
// - Parks Canada, Glacier — главная: Rogers Pass Centre (9520 Trans-
//   Canada Hwy), на сайте висит баннер о временном закрытии — на странице
//   "check if open"; справки 250-837-7500; экстренные вызовы в парке
//   1-877-852-3100; mrg.information@pc.gc.ca; ~14 м снега в среднем
//   (для бэккантри, официально).
// - Parks Canada, Hiking: собаки запрещены на Balu Pass и во всём
//   водосборе Connaught Creek; 100 м от медведей и других крупных
//   животных, 30 м — от оленей и т. п.; дроны запрещены; некоторые
//   тропы открываются только к концу июня; мосты на тропах снимают в
//   конце сентября — начале октября; выше 2,000 м лавинная опасность,
//   особенно с ноября по июнь; о встречах с медведями, пумами,
//   росомахами и карибу сообщать Parks Canada.
// - Parks Canada, Short hikes: Hemlock Grove (350 м, 15 мин), Loop Brook
//   (1.7 км, 40 мин, каменные опоры старого моста), Abandoned Rails
//   (2.4 км туда-обратно, 1 ч, место лавины 1910), Bear Creek Falls
//   (1 км туда-обратно, 95 м, 1 ч; с востока нет левого поворота).
// - Длинные тропы (Hermit, Asulkan Valley, Abbott Ridge): официальных
//   цифр Parks Canada не нашла; взяты ПРИМЕРНЫЕ значения, в которых
//   сходятся несколько сторонних гидов (hikebiketravel, trailheadtraveler,
//   pilotplans) — на странице со знаком "~". Avalanche Crest и Glacier
//   Crest — источники расходятся, не включены.
// - НЕ подтверждено и не используется: высочайшая вершина, число
//   посетителей, даты кемпингов, отели внутри парка, время в пути.

const IMAGE = '/bc/parks/Glacier National Park.png';

export const GLACIER = {
  slug: 'glacier',
  name: 'Glacier National Park',
  shortName: 'Glacier',
  province: 'British Columbia',
  tag: 'Rogers Pass · Est. 1886',
  heroImage: IMAGE,
  heroCaption: 'Glacier National Park · BC',
  description:
    'Steep, snowy, and wild — the Columbia Mountains at their most dramatic. Over a hundred glaciers, ancient cedar rainforest, and Rogers Pass, where the railway and the Trans-Canada Highway battle about 10 metres of snow every winter.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1886' },
    { label: 'Area', value: '1,349 km²' },
    { label: 'Rating', value: '4.7 ★' },
    { label: 'Glaciers', value: '129 (2018)' },
    { label: 'Snow / Year', value: '~10 m' },
    { label: 'Rogers Pass', value: '1,330 m' },
  ],

  badges: ['Avalanche Country', 'Old-Growth Rainforest', 'Railway History'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 2 },
  ],

  spotlight: {
    tag: 'The Snow War',
    emoji: '🏔️',
    title: 'The World’s Largest Mobile Avalanche Control Program',
    text: 'Rogers Pass gets about 10 metres of snow a year, and some 2,000 avalanches run along the highway corridor each winter. Since 1961 Parks Canada and the Canadian Armed Forces have fought back together: forecasters choose the targets, and soldiers fire 105 mm howitzers from roadside gun positions to bring slopes down safely before they hit the road. It is the largest mobile avalanche control program in the world.',
    stats: [
      { value: '135', label: 'Avalanche paths', level: 'blue' },
      { value: '16', label: 'Gun positions', level: 'danger' },
      { value: '~40 km', label: 'Highway protected', level: 'safe' },
      { value: '1961', label: 'Program began', level: 'gold' },
    ],
  },

  attractions: [
    {
      name: 'Rogers Pass',
      icon: '🛤️',
      tag: 'Historic',
      tagLevel: 'gold',
      meta: 'National Historic Site at 1,330 m — the Canadian Pacific Railway crossed the Selkirks here, completed in 1885. Check whether the Rogers Pass Centre is open before you go.',
    },
    {
      name: 'Hemlock Grove Boardwalk',
      icon: '🌲',
      tag: 'Rainforest',
      tagLevel: 'safe',
      meta: 'A 350 m barrier-free boardwalk through inland rainforest of giant cedar and hemlock — some trees up to 1,000 years old.',
    },
    {
      name: 'Loop Brook',
      icon: '🌉',
      tag: 'Railway',
      tagLevel: 'blue',
      meta: '1.7 km loop on the old rail grade past giant stone bridge pillars from the 1880s railway.',
    },
    {
      name: 'Abandoned Rails',
      icon: '⚠️',
      tag: 'History',
      tagLevel: 'danger',
      meta: 'Flat 2.4 km walk on the old rail line, past the site of the 1910 avalanche that killed 58 railway workers.',
    },
    {
      name: 'Bear Creek Falls',
      icon: '💧',
      tag: 'Waterfall',
      tagLevel: 'blue',
      meta: 'Short, steep 1 km return trail to a hidden glacial waterfall. Coming from the east? Turn around at the Hermit trailhead — there’s no left turn.',
    },
    {
      name: 'Illecillewaet Valley',
      icon: '🧊',
      tag: 'Glaciers',
      tagLevel: 'purple',
      meta: 'Where Glacier House once stood. Swiss guides led climbers here from 1899 — the birth of recreational mountaineering in North America.',
    },
  ],

  wildlifeWarning:
    'Carry bear spray where you can reach it. Keep at least 100 m from bears and other large animals, and 30 m from deer. Dogs are not allowed on the Balu Pass trail or anywhere in the Connaught Creek drainage.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Valleys and trails' },
    { name: 'Grizzly Bear', level: 'danger', chance: '★★☆☆☆ Backcountry' },
    { name: 'Mountain Caribou', level: 'caution', chance: '★☆☆☆☆ Rare — report sightings' },
    { name: 'Wolverine', level: 'caution', chance: '★☆☆☆☆ Rare — report sightings' },
    { name: 'Cougar', level: 'danger', chance: '★☆☆☆☆ Rare — report sightings' },
    { name: 'Birds', level: 'safe', chance: '★★★★☆ ~235 species in summer' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'Late June — August',
      level: 'safe',
      text: 'The short hiking season. Some trailheads don’t open until late June because of snow and avalanche hazard.',
      rating: 5,
      note: 'Best hiking',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Cool and quiet. Trail bridges are usually removed in late September or early October, and snow returns early to the high country.',
      rating: 3,
      note: 'Short window',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — April',
      level: 'caution',
      text: 'World-class backcountry ski touring for experienced, avalanche-trained skiers only. The Trans-Canada can close for a few hours at a time during avalanche control — check DriveBC before you go.',
      rating: 3,
      note: 'Experts only',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'May — June',
      level: 'olive',
      text: 'Avalanche hazard continues above treeline until June. Low-elevation walks like Hemlock Grove are the safest choice.',
      rating: 2,
      note: 'Avalanche season',
    },
  ],

  trailsNote: {
    title: 'Snow And Avalanches Shape Every Hike',
    text: 'Trails above treeline (about 2,000 m) can face avalanche hazard from November to June. Some trailheads open only in late June, and bridges come out in early fall. Check the Parks Canada trail report before every hike.',
  },

  trailsUrl: 'https://www.alltrails.com/parks/canada/british-columbia/glacier-national-park--2',
  trails: [
    { name: 'Hemlock Grove Boardwalk', length: '350 m loop', gain: 'Flat', time: '15 min', area: 'Hemlock Grove Day Use', difficulty: 'Easy' },
    { name: 'Loop Brook', length: '1.7 km loop', gain: 'Minimal', time: '40 min', area: 'Loop Brook Viewpoint', difficulty: 'Easy' },
    { name: 'Abandoned Rails', length: '2.4 km return', gain: 'Flat', time: '1 hour', area: 'Rogers Pass summit', difficulty: 'Easy' },
    { name: 'Bear Creek Falls', length: '1 km return', gain: '95 m gain', time: '1 hour', area: 'East of Rogers Pass', difficulty: 'Easy' },
    { name: 'Hermit Trail', length: '~3 km one way', gain: '~820 m gain', time: 'Steep half-day', area: 'Hermit trailhead', difficulty: 'Hard' },
    { name: 'Asulkan Valley', length: '~7 km one way', gain: '~870 m gain', time: 'Full day', area: 'Illecillewaet Campground', difficulty: 'Hard' },
    { name: 'Abbott Ridge', length: '~13.6 km return', gain: '~1,030 m gain', time: 'Full day', area: 'Illecillewaet Campground', difficulty: 'Hard' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'The park sits about halfway between Calgary and Vancouver. Fly into Calgary (YYC) and drive west on the Trans-Canada, or into Kelowna (YLW) and drive north-east.',
      time: 'Then continue by car on Highway 1',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Hwy 1) crosses the park over Rogers Pass, between the towns of Revelstoke and Golden. In winter, closures for avalanche control are common — check DriveBC.',
      time: 'Rogers Pass Centre: 9520 Trans-Canada Hwy',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Trailheads and day-use areas are spread along Highway 1, so a car is the practical way to explore the park.',
      time: 'Car recommended',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'A Parks Canada daily pass or Discovery Pass is required. Youth 17 and under enter free.',
    buyText: 'Winter backcountry users must follow Parks Canada’s winter access rules — areas close during avalanche control.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏕️',
      title: 'Illecillewaet Campground',
      text: 'Set in the old-growth forest of the Illecillewaet Valley, right at the start of the Asulkan, Abbott Ridge, and valley trails.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🌲',
      title: 'Loop Brook & Mountain Creek',
      text: 'The park’s other two frontcountry campgrounds, along Highway 1. Loop Brook sits beside the historic railway loop.',
      links: [{ label: 'Parks Canada', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Revelstoke & Golden',
      text: 'The nearest towns with hotels, restaurants, and services — Revelstoke to the west, Golden to the east.',
      links: [
        { label: 'Revelstoke', url: 'https://www.booking.com/searchresults.html?ss=Revelstoke+British+Columbia', level: 'blue' },
        { label: 'Golden', url: 'https://www.booking.com/searchresults.html?ss=Golden+British+Columbia', level: 'gold' },
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
      lines: ['250-837-7500', 'mrg.information@pc.gc.ca', 'Rogers Pass Centre'],
    },
    {
      icon: '🏔️',
      title: 'Avalanche Safety',
      text: 'Above treeline, avalanche hazard is real from November to June. Winter travel is for trained, equipped parties only.',
    },
    {
      icon: '🚗',
      title: 'Highway Closures',
      text: 'Avalanche control closes the Trans-Canada about 100 hours a year, usually for a few hours at a time. Check DriveBC.',
    },
    {
      icon: '🐕',
      title: 'Dogs',
      text: 'Not allowed on the Balu Pass trail or in the Connaught Creek drainage. Elsewhere, keep them leashed.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Recreational drones are prohibited in all national parks.',
    },
  ],

  gallery: [],
};

export default GLACIER;
