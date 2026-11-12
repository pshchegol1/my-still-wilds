// Narwhal — данные страницы /wildlife/narwhal
//
// Сделано самостоятельно без макета, по той же схеме, что Beluga Whale.
// Категория на /wildlife — Marine Life ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - COSEWIC 2024, "Narwhal, Northern Hudson Bay and Baffin Bay
//   subpopulations" (canada.ca): Not at Risk (май 2024; в 2004 — Special
//   Concern); ~161,100 особей — примерно 90% мирового количества — летом
//   в канадских водах (Baffin Bay ~141,900, Northern Hudson Bay ~19,200);
//   тренд стабильный или растущий, но неопределённость высокая; спинного
//   плавника нет — только низкий гребень; самцы ~5.4 м и ~1,935 кг, самки
//   ~4.9 м и ~1,552 кг; у большинства самцов один бивень из левого
//   верхнего зуба, прямой спиральный, может быть больше 3 м; едят в
//   основном глубоководных рыб и беспозвоночных (палтус, сайка,
//   кальмары); летом во фьордах и проливах высокой Арктики и восточного
//   Баффина, зимой — в паковых льдах Баффинова залива и пролива Дейвиса;
//   летом группы обычно <25, во время миграции — сотни; главная угроза —
//   подводный шум (судоходство, ледоколы), изменение климата и потеря
//   льда; косатки заставляют нарвалов прятаться на мелководье или во
//   льдах; промысел устойчив и co-managed (NWMB, NMRWB, DFO); важны для
//   инуитов — maqtaaq (кожа с жиром) богат витамином C.
// - Marine Mammal Regulations: 100 м — общий минимум для китов (200 м,
//   если кит отдыхает или с детёнышем) — DFO.
//
// МЕДИА:
// - Свободного видео диких нарвалов приемлемого качества на Commons нет
//   (только научные ролики Crittercam 720x480 и мультфильмы) — heroVideo
//   не задан.
// - narwhal-hero.jpg — Dr. Kristin Laidre, Polar Science Center UW /
//   NOAA, public domain, 2006 — группа нарвалов с бивнем (место в
//   описании не указано; исследования Laidre — Баффинов залив/Гренландия).
// - Галерея:
//   * narwhal-tusk.jpg — пресс-служба Газпром нефти, CC BY-SA 4.0, нарвал
//     с бивнем сверху, Земля Франца-Иосифа (Россия), 2019;
//   * narwhal-ice.jpg — Gazprom Neft, CC BY-SA 4.0, хвосты у кромки льда;
//   * narwhal-pod.jpg — Dr. Kristin Laidre / NOAA, public domain, группа
//     у Гренландии (вид сверху).

export const NARWHAL = {
  slug: 'narwhal',
  name: 'Narwhal',
  shortName: 'Narwhal',
  tag: 'Safe To Observe — From A Boat, At A Distance',
  level: 'safe',
  image: '/wildlife/Narwhal/narwhal-hero.jpg',
  heroCredit: 'Photo: Dr. Kristin Laidre / NOAA · Public domain',
  description:
    "The unicorn of the sea. About 90% of the world's narwhals spend the summer in Canadian Arctic waters, where males carry a single spiral tusk that can grow longer than 3 metres. Shy, deep-diving, and deeply important to Inuit, narwhals are best seen from shore or a guided boat at the floe edge.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Tusk', value: 'Up To 3 M+' },
    { label: 'Length (Males)', value: '~5.4 M' },
    { label: 'Weight (Males)', value: '~1,900 KG' },
    { label: 'In Canada', value: '~90% Of All' },
    { label: 'Canadian Count', value: '~161,000' },
    { label: 'Status (2024)', value: 'Not At Risk' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres — By Law',
    text: 'Canada’s Marine Mammal Regulations require 100 m from whales, and 200 m if they are resting or with calves. Narwhals are easily disturbed by noise.',
  },

  behaviorSection: {
    tag: 'Narwhal Behaviour',
    title: 'Unicorn Of',
    highlight: 'The Arctic',
    accent: '#38a169',
    cards: [
      {
        title: 'A Tooth, Not A Horn',
        icon: 'ShieldCheck',
        description:
          'The tusk is a long spiral tooth growing from the left side of the upper jaw. Most males have one; most females don’t.',
      },
      {
        title: 'Canada’s Whale',
        icon: 'Compass',
        description:
          'About 90% of the world’s narwhals summer in Canadian waters — in the fjords and sounds of the High Arctic and eastern Baffin Island.',
      },
      {
        title: 'Deep-Water Hunters',
        icon: 'Fish',
        description:
          'Narwhals feed mostly in deep water on Greenland halibut, Arctic cod, and squid.',
      },
      {
        title: 'Built For The Ice',
        icon: 'Wind',
        description:
          'Instead of a dorsal fin, narwhals have only a low ridge — and they spend winter among the pack ice of Baffin Bay and Davis Strait.',
      },
      {
        title: 'Sensitive To Noise',
        icon: 'Volume2',
        description:
          'Underwater noise from shipping and icebreakers is now the top threat, and has already shifted where narwhals spend their summers.',
      },
      {
        title: 'Central To Inuit Life',
        icon: 'UsersThreeIcon',
        description:
          'Narwhals are part of Inuit culture and food. Maqtaaq — skin and blubber — is a prized, vitamin-C-rich food shared across communities.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Within 100 M',
      icon: 'XCircle',
      description: 'It’s the law for whales in Canada — and narwhals are especially shy of boats.',
    },
    {
      title: 'Never Chase A Pod',
      icon: 'Car',
      description: 'Narwhals flee from disturbance. Chasing them burns energy and can push them away from feeding areas.',
    },
    {
      title: 'Never Make Unnecessary Noise',
      icon: 'Volume2',
      description: 'Keep engines low and avoid revving or loud music near whales. Noise is the biggest threat narwhals face.',
    },
    {
      title: 'Never Walk Onto Floe-Edge Ice Alone',
      icon: 'AlertTriangle',
      description: 'The floe edge can break off and drift. Only visit with experienced local Inuit guides.',
    },
    {
      title: 'Never Fly Drones Low Over Whales',
      icon: 'Eye',
      description: 'Low aircraft and drones near marine mammals are restricted under the Marine Mammal Regulations.',
    },
  ],

  alwaysDo: [
    {
      title: 'Go With Local Inuit Guides',
      icon: 'Users',
      description: 'Community-based outfitters know the ice, the whales, and the rules — and tourism supports local families.',
    },
    {
      title: 'Watch From The Floe Edge Or Shore',
      icon: 'Eye',
      description: 'Some of the best viewing is from the ice edge in early summer, where narwhals surface quietly nearby.',
    },
    {
      title: 'Respect Hunting Areas',
      icon: 'ShieldCheck',
      description: 'Narwhal hunting is co-managed and important to Inuit. Follow your guide’s lead and community rules.',
    },
    {
      title: 'Watch For Polar Bears',
      icon: 'AlertTriangle',
      description: 'At the floe edge, polar bears may be nearby. Your guide should always keep watch.',
    },
    {
      title: 'Report Whales In Trouble',
      icon: 'Phone',
      description: 'Report entangled, stranded, or trapped narwhals to DFO or local wildlife officers.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Keep all food and waste on board and pack it out.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never throw food to whales' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured on board' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Pollutes the water' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Also draws polar bears to camps' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Whales can swallow floating plastic' },
      { name: 'Fishing Line And Rope', icon: '🪢', description: 'Entanglement hurts whales' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful litter in the ocean' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Arctic Waters',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Narwhals' },
  spotParks: [
    { name: 'Tallurutiup Imanga (Lancaster Sound)', province: 'Nunavut', season: 'Summer — national marine conservation area', level: 'safe' },
    { name: 'Sirmilik National Park', province: 'Nunavut', season: 'June — floe edge near Pond Inlet', level: 'caution' },
    { name: 'Admiralty Inlet', province: 'Nunavut', season: 'Summer — near Arctic Bay', level: 'safe' },
    { name: 'Eastern Baffin Island Fjords', province: 'Nunavut', season: 'Summer — guided boat tours', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stay Quiet',
      description:
        'Narwhals are shy. Turn engines off or keep them low, and keep voices down.',
    },
    {
      title: 'Keep 100 Metres Or More',
      description:
        'Let narwhals come and go on their own. Never steer toward a pod.',
    },
    {
      title: 'Follow Your Guide',
      description:
        'At the floe edge, stay with your guide — for the whales’ sake and for safety on the ice.',
    },
    {
      title: 'Report Problems',
      description:
        'Report entangled, trapped, or stranded narwhals to DFO or local wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Narwhal/narwhal-tusk.jpg', credit: 'Gazprom Neft · CC BY-SA 4.0 · Franz Josef Land' },
    { src: '/wildlife/Narwhal/narwhal-ice.jpg', credit: 'Gazprom Neft · CC BY-SA 4.0 · Arctic ice edge' },
    { src: '/wildlife/Narwhal/narwhal-pod.jpg', credit: 'Dr. Kristin Laidre / NOAA · Public domain · Greenland' },
  ],
};

export default NARWHAL;
