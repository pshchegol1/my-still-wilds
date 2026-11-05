// Bighorn Sheep — данные страницы /wildlife/bighorn-sheep
//
// Сделано самостоятельно без макета, по той же схеме, что Mountain Goat /
// Elk. Категория на /wildlife — Large Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Jasper "Sheep and goat family": в Джаспере довольно
//   обычны, популяция около 3000; песочная шерсть и белое "зеркало"; у
//   баранов массивные закрученные рога, у овец короткие острые; рога
//   постоянные и каждый год чуть подрастают — по кольцам можно оценить
//   возраст; в основном пасутся на траве; сезонно мигрируют между
//   низкими травянистыми склонами и альпийскими лугами, всегда рядом со
//   скалами; зимой смешанные стада, летом раздельные; гон осенью — бараны
//   бьются рогами, пока слабый не уступит; часто видны на Hwy 16 к
//   востоку от Джаспера и на Icefields Parkway у Tangle Falls.
// - Parks Canada / СМИ (Radium, Kootenay NP): в среднем 9.5 баранов в год
//   гибли под машинами у Радиума в 2001-2020; зимний соляной раствор на
//   дороге привлекает овец; министерство поставило отвлекающие солонцы у
//   Hwy 93 и 95. В Джаспере на Yellowhead (Hwy 16) снижение скорости не
//   уменьшило число столкновений именно с баранами (исследование).
// - Jasper: находиться ближе 30 м к лосям, вапити, карибу, баранам и
//   козлам вне машины — restricted activity, штраф до $25,000.
// - Вес: видовой справочник — самцы в среднем ~79 кг (до 145 кг), самки
//   ~59 кг (до 104 кг). Подвиды отличаются, поэтому в Quick Facts — "до".
//
// МЕДИА:
// - sheep-hero.mp4 — "Bighorn Sheep Zion", Fredlyfish4, Wikimedia Commons,
//   CC BY-SA 3.0, Zion NP (Юта, США). ВНИМАНИЕ: это пустынный подвид
//   (desert bighorn), не скалистый канадский; исходник 1076x606, увеличен
//   до 1280. Свободного видео канадских баранов не нашла.
// - sheep-hero.jpg — "Bighorn Sheep", Philipp Haupt, CC BY 2.0 — два
//   барана, Banff NP.
// - Галерея (все Канада):
//   * sheep-ram-radium.jpg — Charles J. Sharp, CC BY-SA 4.0, баран у
//     дороги, Radium / Kootenay NP;
//   * sheep-jasper.jpg — Thomas Fuhrmann, CC BY-SA 4.0, Jasper NP;
//   * sheep-lamb.jpg — Charles J. Sharp, CC BY-SA 4.0, ягнёнок, Radium.

export const BIGHORN_SHEEP = {
  slug: 'bighorn-sheep',
  name: 'Bighorn Sheep',
  shortName: 'Bighorn',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Bighorn Sheep/sheep-hero.jpg',
  heroVideo: '/wildlife/Bighorn Sheep/sheep-hero.mp4',
  heroCredit: 'Photo: Philipp Haupt / Wikimedia Commons · CC BY 2.0 · Banff NP',
  heroVideoCredit: 'Video: Fredlyfish4 / Wikimedia Commons · CC BY-SA 3.0 · Zion NP, Utah',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The curl-horned icon of the Rockies, famous for the crack of rams clashing in the fall. Bighorns are calm and easy to spot along mountain highways — which is exactly the problem: drawn to road salt, they are hit by cars every year.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Rams)', value: 'Up To 145 KG' },
    { label: 'Horns', value: 'Grow For Life' },
    { label: 'Rut', value: 'Fall' },
    { label: 'Diet', value: 'Grazer' },
    { label: 'In Jasper', value: '~3,000 Sheep' },
    { label: 'Status', value: 'Common' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'In Jasper, getting within 30 metres of bighorn sheep outside your vehicle is a restricted activity, with fines of up to $25,000.',
  },

  behaviorSection: {
    tag: 'Bighorn Sheep Behaviour',
    title: 'Horns, Cliffs',
    highlight: 'And Salt',
    accent: '#38a169',
    cards: [
      {
        title: 'Horns That Tell Their Age',
        icon: 'ShieldCheck',
        description:
          'Horns are never shed — they grow a little every year. Rams carry massive curls, ewes short spiky horns, and the growth rings show roughly how old a sheep is.',
      },
      {
        title: 'The Fall Clash',
        icon: 'Flame',
        description:
          'During the fall rut, rams settle who is dominant by crashing their horns together — again and again until the weaker one gives up.',
      },
      {
        title: 'Never Far From A Cliff',
        icon: 'ArrowDown',
        description:
          'Bighorns graze on grassy slopes and alpine meadows but always stay close to rocky ledges, where they can escape predators.',
      },
      {
        title: 'Herds Change With The Seasons',
        icon: 'UsersThreeIcon',
        description:
          'Rams and ewes gather in mixed herds in winter, then split into separate ram and ewe-and-lamb groups for the summer.',
      },
      {
        title: 'Drawn To Road Salt',
        icon: 'Car',
        description:
          'Salt and de-icing brine on highways pull sheep onto the road. Near Radium Hot Springs, an average of almost 10 bighorns a year were killed by vehicles from 2001 to 2020.',
      },
      {
        title: 'Seasonal Travellers',
        icon: 'Compass',
        description:
          'Many herds move between low grassy winter range and high alpine summer pastures, crossing roads and valleys along the way.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Or Lure Sheep',
      icon: 'Trash2',
      description: 'Feeding wildlife is illegal in national parks. Sheep that link people and cars with food linger on roads — and get hit.',
    },
    {
      title: 'Never Stop On The Highway',
      icon: 'Car',
      description: 'If sheep are on or near the road, slow down and keep driving. Stopping in traffic causes crashes and keeps sheep on the road.',
    },
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'Roadside sheep look tame, but they are wild. Stay 30 metres back and use a zoom lens from inside your vehicle.',
    },
    {
      title: 'Never Get Near Clashing Rams',
      icon: 'Flame',
      description: 'During the fall rut, rams focused on rivals can slam into anything in their way. Give fighting rams lots of space.',
    },
    {
      title: 'Never Let Dogs Chase Sheep',
      icon: 'DogIcon',
      description: 'Being chased can push sheep onto roads or dangerous terrain. Keep dogs leashed at all times.',
    },
  ],

  alwaysDo: [
    {
      title: 'Slow Down In Sheep Zones',
      icon: 'Car',
      description: 'Watch for sheep on Hwy 16 east of Jasper, the Icefields Parkway near Tangle Falls, and Highway 93 near Radium.',
    },
    {
      title: 'Watch From Your Vehicle',
      icon: 'Eye',
      description: 'If you want to watch, pull over only where it is legal and safe, well off the road, and stay inside.',
    },
    {
      title: 'Keep 30 Metres Away On Foot',
      icon: 'Footprints',
      description: 'On trails, give sheep room and let them move on. Never walk between a ewe and her lamb.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Dogs must be leashed and under control in national parks — for your safety and the sheep’s.',
    },
    {
      title: 'Report Sheep On The Road',
      icon: 'Phone',
      description: 'In Jasper, report wildlife concerns to Parks Canada Dispatch at 780-852-6155.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Bighorns that learn to beg at cars stay on the highway — and every year some of them are killed by traffic.',
    items: [
      { name: 'Salt Or Salty Snacks', icon: '🧂', description: 'Keeps sheep on the road' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Teaches sheep to approach cars' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts sheep to people' },
      { name: 'Chips And Crackers', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Bighorns Roam' },
  spotParks: [
    { name: 'Jasper National Park', province: 'Alberta', season: 'Hwy 16 east & Icefields Parkway near Tangle Falls', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — slow down on park roads', level: 'safe' },
    { name: 'Kootenay National Park', province: 'British Columbia', season: 'Radium Hot Springs — watch Hwy 93', level: 'caution' },
    { name: 'Waterton Lakes National Park', province: 'Alberta', season: 'Grassy slopes near the townsite', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'On The Road — Slow Down',
      description:
        'Sheep on the highway may not move. Slow down, steer around them carefully, and keep driving — don’t stop in traffic.',
    },
    {
      title: 'Stay In Your Vehicle',
      description:
        'If you pull over, do it only where it is legal and safe. Watch from inside and never get out to approach.',
    },
    {
      title: 'On Foot — Give Them 30 Metres',
      description:
        'Step aside and let the herd move on. In the fall, stay well away from rams that are posturing or clashing.',
    },
    {
      title: 'Never Offer Food',
      description:
        'A sheep that approaches you is looking for a handout. Back away, don’t feed it, and report bold sheep to park staff.',
    },
  ],

  gallery: [
    { src: '/wildlife/Bighorn Sheep/sheep-ram-radium.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Radium, Kootenay NP' },
    { src: '/wildlife/Bighorn Sheep/sheep-jasper.jpg', credit: 'Thomas Fuhrmann · CC BY-SA 4.0 · Jasper NP' },
    { src: '/wildlife/Bighorn Sheep/sheep-lamb.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Radium, BC' },
  ],
};

export default BIGHORN_SHEEP;
