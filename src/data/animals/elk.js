// Elk (Wapiti) — данные страницы /wildlife/elk
//
// Сделано самостоятельно без макета, по той же схеме, что Caribou /
// White-Tailed Deer. Категория на /wildlife — Large Mammals ("Safe to
// Observe"), поэтому level: 'safe' (раздел "How Close Is Too Close?" для
// safe-животных не показывается, distanceZones не нужны).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Jasper "Elk safety": не подходить к вапити ни в какой
//   сезон — могут атаковать без предупреждения; контактные встречи
//   редки; отёл 15 мая - 30 июня — самки защищают телят ударами копыт и
//   бросками; гон 1 сентября - 15 октября — быки крайне агрессивно
//   охраняют гарем; держаться минимум 30 м ("три автобуса"); никогда не
//   вставать между быком и самками и не парковаться между ними — могут
//   атаковать машину; собаки на поводке (вапити видят в них волков/
//   койотов); если вапити бросается — казаться больше, не бежать, не
//   поворачиваться спиной, укрыться за деревом/камнем/машиной, не
//   притворяться мёртвым. Jasper Dispatch 780-852-6155.
// - Parks Canada, Banff (бюллетень по гону 2026, Global News, RMOtoday):
//   обходить вапити по склону сверху; бык скрипит зубами или прижимает
//   уши — вы слишком близко; перцовый спрей против медведей эффективен и
//   против вапити как последняя линия защиты; телёнок часто спрятан
//   рядом, и его не видно. Banff Dispatch 403-762-1470.
// - Вес/рост: Hinterland Who's Who (CWF/ECCC) — бык ~150 см в холке,
//   ~300-350 кг (крупные — до ~500 кг в конце лета), самка ~135 см,
//   ~250 кг; рога крупного быка могут быть >1.2 м и ~14 кг.
//   Численность (~72,000 в Канаде по CWF) НЕ привожу — дата оценки
//   неизвестна.
//
// МЕДИА:
// - elk-hero.mp4 — "Elk (Cervus canadensis)", U.S. Fish and Wildlife
//   Service, public domain, США — дикие быки во время гона (трубят),
//   первые 20 секунд; атрибуция не нужна.
// - elk-hero.jpg — "Banff - elks", Jakub Fryš, CC BY-SA 4.0 — быки
//   поздней осенью, Banff NP.
// - Галерея:
//   * elk-sparring.jpg — "Sparring Elks", Jakub Fryš, CC BY-SA 4.0, Banff;
//   * elk-jasper.jpg — Thomas Fuhrmann, CC BY-SA 4.0, Jasper NP;
//   * elk-calf.jpg — NPS / Jacob W. Frank, public domain, Yellowstone (США).

export const ELK = {
  slug: 'elk',
  name: 'Elk',
  shortName: 'Elk',
  shortNamePlural: 'Elk',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Elk/elk-hero.jpg',
  heroVideo: '/wildlife/Elk/elk-hero.mp4',
  heroCredit: 'Photo: Jakub Fryš / Wikimedia Commons · CC BY-SA 4.0 · Banff NP',
  description:
    "Wapiti — the elk of the Rockies — graze calmly along roadsides in Banff and Jasper, and their eerie fall bugling is one of Canada's great wildlife sounds. They look tame, but Parks Canada warns they can attack without warning, especially cows with calves in spring and bulls during the fall rut.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Bulls)', value: '300-350 KG' },
    { label: 'Height', value: '~1.5 M' },
    { label: 'Antlers', value: 'Up To 1.2 M+' },
    { label: 'Calving', value: 'May 15-June 30' },
    { label: 'Rut', value: 'Sept 1-Oct 15' },
    { label: 'Status', value: 'Common' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Stay at least 30 metres — about three bus lengths — from all elk, in every season. Never get between a bull and his cows.',
  },

  behaviorSection: {
    tag: 'Elk Behaviour',
    title: 'Calm Giants With',
    highlight: 'Two Dangerous Seasons',
    accent: '#38a169',
    cards: [
      {
        title: 'The Fall Bugle',
        icon: 'Volume2',
        description:
          'During the rut, bulls bugle — a high, whistling scream that carries across valleys — to challenge rivals and gather a harem of cows.',
      },
      {
        title: 'Bulls Guard Their Harems',
        icon: 'Flame',
        description:
          'From September 1 to October 15 in Jasper, bulls become extremely aggressive and may attack anything that comes too close to them or their cows — including cars.',
      },
      {
        title: 'Protective Mothers',
        icon: 'ShieldCheck',
        description:
          'Calves are born from mid-May to the end of June. Cows defend newborns by charging and kicking, and the calf is often hidden nearby where you cannot see it.',
      },
      {
        title: 'Antlers Grown Every Year',
        icon: 'Calendar',
        description:
          'A big bull’s antlers can span more than 1.2 metres and weigh around 14 kg. They are shed in late winter and regrown in velvet every summer.',
      },
      {
        title: 'They See Dogs As Wolves',
        icon: 'DogIcon',
        description:
          'Elk may treat a dog as a predator like a wolf or coyote. A dog near elk can trigger an attack on the dog — and on its owner.',
      },
      {
        title: 'Warning Signs',
        icon: 'AlertTriangle',
        description:
          'Ears pinned back, teeth grinding, raised hair, or a bull walking toward you are signs you are too close. Back away immediately.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Elk — In Any Season',
      icon: 'RunningFigure',
      description: 'Parks Canada warns elk can attack without warning. Calm-looking roadside elk are still wild animals.',
    },
    {
      title: 'Never Get Between A Bull And His Cows',
      icon: 'Users',
      description: 'During the rut, walking or parking between a bull and his harem can provoke a charge — at you or at your vehicle.',
    },
    {
      title: 'Never Go Near A Lone Cow In Spring',
      icon: 'EyeOff',
      description: 'In May and June a cow standing alone may have a calf hidden in the grass nearby. Give her a very wide berth.',
    },
    {
      title: 'Never Run Or Turn Your Back',
      icon: 'XCircle',
      description: 'If an elk approaches, running can trigger a chase. Face it, look big, and back away slowly.',
    },
    {
      title: 'Never Play Dead',
      icon: 'Skull',
      description: 'Unlike some bear encounters, playing dead does not work with elk. If knocked down, get up and get behind cover.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep 30 Metres Away',
      icon: 'Eye',
      description: 'About three bus lengths. Use binoculars or a zoom lens, and move away if the elk reacts to you.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Dogs must be leashed and under control at all times in national parks — or leave them at home.',
    },
    {
      title: 'Walk Around On The Uphill Side',
      icon: 'Compass',
      description: 'If you must pass elk, go around on the high side of a slope and keep trees, rocks, or vehicles between you.',
    },
    {
      title: 'Stay In Your Vehicle',
      icon: 'Car',
      description: 'When elk are on or near the road, watch from inside your car and never park between a bull and cows.',
    },
    {
      title: 'Carry Bear Spray',
      icon: 'SprayCan',
      description: 'Parks Canada says bear spray is effective against elk — keep it handy as a last line of defence against a charging bull.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Elk that link people with food lose their fear, crowd townsites and roads, and become far more likely to injure someone.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws elk toward people and cars' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts elk to people' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Hay Or Pet Feed', icon: '🌾', description: 'Teaches elk to visit yards and campsites' },
      { name: 'Salt Licks', icon: '🧂', description: 'Pulls elk onto roads and into danger' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Keeps elk coming back to townsites' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Elk Roam' },
  spotParks: [
    { name: 'Jasper National Park', province: 'Alberta', season: 'Year-round — extra caution in spring & fall', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — fall bugling season', level: 'caution' },
    { name: 'Elk Island National Park', province: 'Alberta', season: 'Year-round — aspen parkland', level: 'safe' },
    { name: 'Riding Mountain National Park', province: 'Manitoba', season: 'Fall rut — listen for bugling', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Check The Season',
      description:
        'From mid-May to June, watch for hidden calves and protective cows. From September to mid-October, watch for rutting bulls and their harems.',
    },
    {
      title: 'Give It 30 Metres Or More',
      description:
        'Stay at least three bus lengths away, keep your dog close on a leash, and never walk between a bull and his cows.',
    },
    {
      title: 'If It Approaches — Look Big And Back Away',
      description:
        'Raise your arms or a jacket, keep eye contact, never turn your back or run, and put a tree, large rock, or vehicle between you.',
    },
    {
      title: 'If Knocked Down — Get Up',
      description:
        'Do not play dead. Get up, move to cover, and use bear spray or any object to protect yourself. Report it to park dispatch right away.',
    },
  ],

  gallery: [
    { src: '/wildlife/Elk/elk-sparring.jpg', credit: 'Jakub Fryš · CC BY-SA 4.0 · Banff NP' },
    { src: '/wildlife/Elk/elk-jasper.jpg', credit: 'Thomas Fuhrmann · CC BY-SA 4.0 · Jasper NP' },
    { src: '/wildlife/Elk/elk-calf.jpg', credit: 'NPS / Jacob W. Frank · Public domain · Yellowstone' },
  ],
};

export default ELK;
