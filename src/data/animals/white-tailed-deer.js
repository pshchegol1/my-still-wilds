// White-Tailed Deer — данные страницы /wildlife/white-tailed-deer
//
// Сделано самостоятельно без макета, по той же схеме, что Caribou / Wild
// Boar / Canada Lynx. Категория на /wildlife — Large Mammals ("Safe to
// Observe"), поэтому level: 'safe'.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWS; страница старая, 1968-1990 — численность
//   оттуда НЕ беру): ареал в Канаде — от Кейп-Бретона до юго-центральной
//   BC, единичные до Большого Невольничьего озера; взрослые самцы часто
//   выше 1 м в холке, обычно ~110 кг, исключительные северные — до 200 кг;
//   хвост ~30 см поднимается "флагом" с белой изнанкой при бегстве; рога
//   растут весной-летом, сбрасываются обычно в январе (декабрь-март);
//   оленята рождаются в основном в последнюю неделю мая-первую неделю
//   июня, 2-4 кг, пятнистые, двойни обычны; самка оставляет оленёнка одного
//   на часы и возвращается кормить; не трогать оленят; гон — последние три
//   недели ноября; зимой собираются в "deer yards", снег глубже 40 см
//   мешает двигаться; бродячие собаки сильно бьют оленей в конце зимы.
// - Parks Canada, Waterton "Aggressive deer": самки опасны в сезон
//   оленят (июнь-начало июля); держаться на расстоянии, не кормить.
// - BC Conservation Officer Service (через CTV / CBC / Castanet и др.):
//   самки с оленятами нападают на собак (видят в них хищников) и иногда на
//   хозяев; бьют передними копытами; самцы опасны в гон осенью; городские
//   олени смелее; держать собак на поводке; если олень атакует собаку на
//   поводке — бывает безопаснее отпустить поводок. BC: RAPP 1-877-952-7277.
// - Дорога: NS government — особая осторожность на рассвете и в сумерках.
//   Канадскую статистику столкновений НЕ привожу — данные старые и
//   противоречивые.
// - Минимальная дистанция 30 м — общее правило Parks Canada для оленей,
//   лосей, карибу и т.п. (100 м — для медведей, волков, кугуаров).
//
// МЕДИА:
// - deer-hero.mp4 — "White-tailed Deer in Rock Creek", Katja Schulz,
//   Wikimedia Commons, CC BY 2.0, Rock Creek Park, Вашингтон (США) —
//   дикие олени в реке (городской парк, без ограждений); первые 20 секунд.
// - deer-hero.jpg — "Female white-tailed deer", GregOberski, CC BY-SA 4.0,
//   Forks of the Credit Provincial Park, Онтарио.
// - Галерея (все — Канада):
//   * deer-buck.jpg — Ryan Hodnett, CC BY-SA 4.0, Kilally Meadows,
//     London, Онтарио (самец в бархатных рогах);
//   * deer-fawn.jpg — Mélanie Plante, CC BY 2.0, Parc national du Bic,
//     Квебек (оленёнок; маленькое разрешение 1024 px — только галерея);
//   * deer-gatineau.jpg — Padraic (User:Padraic), CC BY-SA 3.0, Gatineau Park,
//     Квебек, ноябрь 2007.

export const WHITE_TAILED_DEER = {
  slug: 'white-tailed-deer',
  name: 'White-Tailed Deer',
  shortName: 'Deer',
  shortNamePlural: 'Deer',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/White-tail Deer/deer-hero.jpg',
  heroVideo: '/wildlife/White-tail Deer/deer-hero.mp4',
  heroCredit: 'Photo: GregOberski / Wikimedia Commons · CC BY-SA 4.0 · Forks of the Credit PP, Ontario',
  heroVideoCredit: 'Video: Katja Schulz / Wikimedia Commons · CC BY 2.0',
  distanceIcon: '/icons/wildlife/white-tail-deer.svg',
  // Длинное имя на 64px заезжает под панель Quick Facts.
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "Canada's most familiar deer, named for the bright white tail it flashes like a flag when it runs. White-tails are gentle most of the year — but a doe guarding a fawn or a buck in the November rut can strike hard, and deer on the road are a real danger after dark.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Bucks)', value: '~110 KG' },
    { label: 'Height', value: 'Up To 1 M' },
    { label: 'Fawns', value: 'Late May-June' },
    { label: 'Rut', value: 'November' },
    { label: 'Range', value: 'Southern Canada' },
    { label: 'Status', value: 'Common' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Give deer at least 30 metres — more in June when does are guarding fawns, and in November during the rut. Keep dogs on a leash.',
  },

  behaviorSection: {
    tag: 'White-Tailed Deer Behaviour',
    title: 'Gentle — But',
    highlight: 'Not Tame',
    accent: '#38a169',
    cards: [
      {
        title: 'The White Flag',
        icon: 'Eye',
        description:
          'When alarmed, a white-tail raises its tail straight up, flashing the white underside as it bounds away — a warning signal to other deer.',
      },
      {
        title: 'Antlers Grown Every Year',
        icon: 'Calendar',
        description:
          'Bucks grow new antlers in velvet from spring to late summer, rub them clean in fall, and usually shed them in January.',
      },
      {
        title: 'Fawns Left Alone On Purpose',
        icon: 'EyeOff',
        description:
          'Spotted fawns are born in late May or early June. The doe leaves them hidden for hours and returns to nurse — a fawn alone is almost never abandoned.',
      },
      {
        title: 'Protective Mothers',
        icon: 'ShieldCheck',
        description:
          'In June and early July, does guarding fawns may charge dogs — and sometimes people — striking with their sharp front hooves.',
      },
      {
        title: 'The November Rut',
        icon: 'Flame',
        description:
          'During the breeding season, bucks travel constantly, spar with rivals, and are far less cautious — on trails and on roads.',
      },
      {
        title: 'Winter Deer Yards',
        icon: 'Wind',
        description:
          'When snow gets deep, deer gather in sheltered "yards" with food and cover. Snow deeper than about 40 cm makes moving and feeding hard.',
      },
    ],
  },

  distanceLabels: {
    outer: '100m — Fawning Season & Rut',
    mid: '30m — Parks Canada Minimum',
    inner: '0-30m — Too Close',
  },

  distanceZones: [
    {
      range: '0-30M',
      label: 'Too Close',
      description: 'A doe with a fawn or a rutting buck may charge at this range. Back away calmly and put your dog behind you.',
      level: 'danger',
    },
    {
      range: '30-100M',
      label: 'Watch Calmly',
      description: 'Fine most of the year. If the deer stamps its feet, snorts, or lowers its ears, move farther away.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Ideal Viewing',
      description: 'Use binoculars or a zoom lens — especially in June and November, when deer are most protective.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Touch Or Move A Fawn',
      icon: 'XCircle',
      description: 'A fawn lying alone is waiting for its mother. Human scent can cause a doe to abandon it — leave it exactly where it is.',
    },
    {
      title: 'Never Let Dogs Chase Deer',
      icon: 'DogIcon',
      description: 'Deer see dogs as predators. Does will attack dogs near fawns, and loose dogs can run exhausted deer to death in late winter.',
    },
    {
      title: 'Never Feed Deer',
      icon: 'Trash2',
      description: 'Fed deer lose their fear of people, gather near roads and homes, and become more likely to turn aggressive.',
    },
    {
      title: 'Never Approach A Rutting Buck',
      icon: 'Flame',
      description: 'In November, bucks are focused on rivals and mates. Give them extra room — they can strike with hooves and antlers.',
    },
    {
      title: 'Never Corner A Deer',
      icon: 'DoorOpen',
      description: 'A deer trapped in a yard or against a fence can panic and lash out. Always leave it a clear way out.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Most aggressive deer encounters involve dogs. If a deer attacks a leashed dog, letting go of the leash may be safer for you.',
    },
    {
      title: 'Drive Carefully At Dawn And Dusk',
      icon: 'Car',
      description: 'Deer are most active at dawn and dusk. Slow down, scan the ditches — and when one deer crosses, expect others to follow.',
    },
    {
      title: 'Back Away If Warned',
      icon: 'ArrowDown',
      description: 'Stamping, snorting, ears laid back, or raised hair are warnings. Move away slowly and put something solid between you.',
    },
    {
      title: 'Watch From A Distance',
      icon: 'Camera',
      description: 'Use a zoom lens and stay at least 30 metres away — farther in fawning season and the rut.',
    },
    {
      title: 'Report Aggressive Deer',
      icon: 'Phone',
      description: 'In national parks, tell park staff. In B.C., call the Conservation Officer RAPP line at 1-877-952-7277.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal, and many towns ban feeding deer. Fed deer crowd roads and yards, spread disease, and lose their natural fear of people and dogs.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Corn And Bird Seed', icon: '🌽', description: 'A sudden rich diet can make deer sick' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws deer onto roads and into yards' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts deer to people' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Never "rescue" a fawn with milk' },
      { name: 'Salt Licks', icon: '🧂', description: 'Crowds deer together near people' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Keeps deer coming back to homes' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Deer Roam' },
  spotParks: [
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Year-round — forest trails', level: 'safe' },
    { name: 'Kejimkujik National Park', province: 'Nova Scotia', season: 'Year-round — dawn and dusk', level: 'safe' },
    { name: 'Riding Mountain National Park', province: 'Manitoba', season: 'Spring to fall — meadows and roadsides', level: 'safe' },
    { name: 'Waterton Lakes National Park', province: 'Alberta', season: 'Watch for protective does in June', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Look For Fawns',
      description:
        'Most deer simply walk away. In June, check for a hidden fawn nearby — if there is one, the doe will be close and protective.',
    },
    {
      title: 'Bring Your Dog Close',
      description:
        'Shorten the leash and keep your dog beside or behind you. Never let it bark at, chase, or approach the deer.',
    },
    {
      title: 'Back Away And Go Around',
      description:
        'Give the deer plenty of space and take another route if it is on the trail. Do not turn your back on a deer that is stamping or approaching.',
    },
    {
      title: 'If It Charges — Get Behind Something',
      description:
        'Put a tree, car, or fence between you and the deer. If it attacks your leashed dog, letting go of the leash may keep you from being hurt.',
    },
  ],

  gallery: [
    { src: '/wildlife/White-tail Deer/deer-buck.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · London, Ontario' },
    { src: '/wildlife/White-tail Deer/deer-fawn.jpg', credit: 'Mélanie Plante · CC BY 2.0 · Parc du Bic, Quebec' },
    { src: '/wildlife/White-tail Deer/deer-gatineau.jpg', credit: 'Padraic / Wikimedia Commons · CC BY-SA 3.0 · Gatineau Park, Quebec' },
  ],
};

export default WHITE_TAILED_DEER;
