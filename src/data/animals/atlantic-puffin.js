// Atlantic Puffin — данные страницы /wildlife/atlantic-puffin
//
// Сделано самостоятельно без макета, по той же схеме, что Common Loon.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Atlantic Puffin": единственный тупик
//   Северной Атлантики; официальная птица Ньюфаундленда и Лабрадора с
//   1992; машут крыльями 300-400 раз в минуту; при посадке часто
//   "падают"; под водой гребут крыльями и лапами; едят мелкую рыбу —
//   мойву и песчанку; обычно несут 1-2 рыбки по 12-15 см; канадский
//   рекорд — 61 рыбка в клюве (личинки песчанки 2.3-3.3 см); шипы во рту
//   удерживают добычу; гнездятся в норах 50-200 см на травянистых склонах;
//   одно яйцо (~14% веса самки); насиживают оба ~6 недель; птенец
//   вылетает в ~40 дней (до 80 при нехватке корма); размножаются с 4-5
//   лет; в Северной Америке ~500,000 пар; ~60% из них — на четырёх
//   островах Witless Bay; в мире ~12 млн пар; зимуют в открытой
//   Атлантике; живут в среднем ~20 лет; обычно тот же партнёр и та же
//   нора; после сезона сбрасывают яркие пластинки клюва; угрозы — чайки,
//   сети (1980: ~8,000 тупиков погибли в Witless Bay), нефть, нехватка
//   корма.
// - Правительство NL, Witless Bay Ecological Reserve: наблюдать в
//   основном с лодок; высадка на острова — только по разрешению; с 1
//   апреля по 1 сентября самолёты не ниже 300 м. Список лодочных
//   операторов с разрешениями на разных страницах правительства
//   расходится — на странице операторов не называю.
// - Размер, вес, размах крыльев взрослых в HWW не указаны — не использую.
// - Правила смотровой площадки в Elliston официально НЕ нашла — на
//   странице общий совет держаться тропы и края обрыва.
//
// МЕДИА:
// - puffin-hero.mp4 — "Atlantic puffins (Fratercula arctica) in Iceland",
//   buffy goodman, CC BY 3.0 — Látrabjarg, Исландия (не Канада);
//   фрагмент 12-30 с. Канадских видео на Commons нет.
// - puffin-hero.jpg — Ryan Hodnett, CC BY-SA 4.0 — Elliston, NL, 2019.
// - Галерея (все Канада):
//   * puffin-burrow.jpg — lwolfartist, CC BY 2.0 — тупик у норы, тур в
//     Witless Bay, NL, 2022 (снято с лодки);
//   * puffin-colony.jpg — lwolfartist, CC BY 2.0 — склон колонии, Witless
//     Bay, NL;
//   * puffin-elliston.jpg — Ryan Hodnett, CC BY-SA 4.0 — группа, один с
//     травой для гнезда, Elliston, NL.

export const ATLANTIC_PUFFIN = {
  slug: 'atlantic-puffin',
  name: 'Atlantic Puffin',
  shortName: 'Puffin',
  tag: 'Safe To Observe — Respect The Colony',
  level: 'safe',
  image: '/wildlife/Atlantic Puffin/puffin-hero.jpg',
  heroVideo: '/wildlife/Atlantic Puffin/puffin-hero.mp4',
  heroCredit: 'Photo: Ryan Hodnett / Wikimedia Commons · CC BY-SA 4.0 · Elliston, Newfoundland',
  heroVideoCredit: 'Video: buffy goodman / Wikimedia Commons · CC BY 3.0 · Iceland',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The official bird of Newfoundland and Labrador. Each summer, puffins return to grassy island slopes to dig burrows, raise a single chick, and fly in with beaks full of capelin. About 60% of North America's puffins nest on just four islands in Witless Bay.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Wingbeats', value: '300–400 / Min' },
    { label: 'Eggs', value: 'Just One' },
    { label: 'Record Catch', value: '61 Fish At Once' },
    { label: 'N. America', value: '~500,000 Pairs' },
    { label: 'Lifespan', value: '~20 Years' },
    { label: 'Best Time', value: 'Summer' },
  ],

  minDistanceWarning: {
    title: 'Stay Off The Nesting Slopes',
    text: 'Puffins nest in burrows under the grass — one wrong step can collapse a burrow with an egg or chick inside. In Witless Bay, landing on the islands requires a permit.',
  },

  behaviorSection: {
    tag: 'Puffin Behaviour',
    title: 'Clown Of',
    highlight: 'The Sea',
    accent: '#38a169',
    cards: [
      {
        title: 'A Beak Full Of Fish',
        icon: 'Fish',
        description:
          'Spines inside the mouth hold fish in place. The Canadian record is 61 tiny sand lance carried in one beak.',
      },
      {
        title: 'Burrow Builders',
        icon: 'ShieldCheck',
        description:
          'Most puffins nest in burrows 50–200 cm long, dug into grassy slopes on predator-free islands.',
      },
      {
        title: 'One Precious Egg',
        icon: 'Calendar',
        description:
          'Each pair lays a single egg. Both parents incubate for about six weeks, and the chick leaves at around 40 days.',
      },
      {
        title: 'Flying Flat Out',
        icon: 'Wind',
        description:
          'Puffins beat their wings 300–400 times a minute to stay in the air — and often crash-land on arrival.',
      },
      {
        title: 'Underwater Flyers',
        icon: 'ArrowDown',
        description:
          'Puffins dive head-first and “fly” underwater with their wings, steering with their feet, to catch capelin and sand lance.',
      },
      {
        title: 'Winter At Sea',
        icon: 'Compass',
        description:
          'After breeding they shed their colourful bill plates and spend the winter alone or in pairs far out on the North Atlantic.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Walk On Nesting Slopes',
      icon: 'XCircle',
      description: 'Burrows lie just under the grass and can collapse underfoot, crushing eggs or chicks.',
    },
    {
      title: 'Never Land On Reserve Islands',
      icon: 'DoorOpen',
      description: 'In Witless Bay Ecological Reserve, only permit holders may go ashore. View from a boat.',
    },
    {
      title: 'Never Block A Puffin’s Path',
      icon: 'Footprints',
      description: 'Parents flying in with fish need a clear way to their burrow. Don’t stand between them and the slope.',
    },
    {
      title: 'Never Fly Drones Over Colonies',
      icon: 'Volume2',
      description: 'Drones can panic whole colonies. In Witless Bay, aircraft must stay above 300 m from April to September.',
    },
    {
      title: 'Never Lean Over Cliff Edges',
      icon: 'AlertTriangle',
      description: 'Puffin cliffs are steep and slippery — keep well back from the edge, for your safety and theirs.',
    },
  ],

  alwaysDo: [
    {
      title: 'Take A Licensed Boat Tour',
      icon: 'ShieldCheck',
      description: 'In Witless Bay, permitted boat tours let you see the colonies without disturbing them.',
    },
    {
      title: 'Stay On Marked Trails',
      icon: 'Footprints',
      description: 'At mainland viewing spots like Elliston, keep to paths and stay off the grassy burrow areas.',
    },
    {
      title: 'Sit Quietly And Wait',
      icon: 'Eye',
      description: 'Puffins often go about their business if you stay still and quiet at a respectful distance.',
    },
    {
      title: 'Bring A Zoom Lens',
      icon: 'Camera',
      description: 'Let your lens do the work so you never need to step closer.',
    },
    {
      title: 'Pack Out Everything',
      icon: 'Trash2',
      description: 'Litter and food scraps attract gulls, which prey on puffin eggs and chicks.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Puffins catch their own fish at sea. Food left on cliffs and boats draws gulls — the main predators of puffin eggs and chicks.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Draws gulls to the colony' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for seabirds' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured on board' },
      { name: 'Chips And Snacks', icon: '🍟', description: 'Harmful and attracts gulls' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fishing Line And Nets', icon: '🪢', description: 'Puffins drown in nets and get tangled' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can be swallowed at sea' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Atlantic Puffins' },
  spotParks: [
    { name: 'Witless Bay Ecological Reserve', province: 'Newfoundland and Labrador', season: 'Summer — boat tours only, no landing', level: 'safe' },
    { name: 'Elliston', province: 'Newfoundland and Labrador', season: 'Summer — viewing from the mainland', level: 'safe' },
    { name: 'Cape Bonavista', province: 'Newfoundland and Labrador', season: 'Summer — coastal cliffs', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Find A Spot And Settle',
      description:
        'Choose a place on the trail or boat, sit down, and let the puffins come and go.',
    },
    {
      title: 'Watch Your Step',
      description:
        'Stay off grassy slopes — they may be full of burrows.',
    },
    {
      title: 'Give Them Room To Land',
      description:
        'If puffins hesitate to fly in with fish, you are in their way — move back.',
    },
    {
      title: 'Report Problems',
      description:
        'Report oiled, tangled, or injured seabirds to local wildlife authorities.',
    },
  ],

  gallery: [
    { src: '/wildlife/Atlantic Puffin/puffin-burrow.jpg', credit: 'lwolfartist · CC BY 2.0 · Witless Bay, NL' },
    { src: '/wildlife/Atlantic Puffin/puffin-colony.jpg', credit: 'lwolfartist · CC BY 2.0 · Witless Bay, NL' },
    { src: '/wildlife/Atlantic Puffin/puffin-elliston.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Elliston, NL' },
  ],
};

export default ATLANTIC_PUFFIN;
