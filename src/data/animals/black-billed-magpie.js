// Black-billed Magpie — данные страницы /wildlife/black-billed-magpie
//
// Сделано самостоятельно без макета, по той же схеме, что Blue Jay.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - The Canadian Encyclopedia, "Magpie": единственная сорока в Канаде;
//   длина ~50 см, хвост — больше половины; чёрное оперение с
//   металлическим сине-зелёным отливом на крыльях и хвосте, белые плечи
//   и брюхо, белое пятно на раскрытом крыле; гнездо — большой куполообразный
//   шар из веток с одним или несколькими входами, внутри чаша из грязи;
//   строят ~6 недель; обычно 4-9 яиц, насиживает самка; некоторые пары
//   на всю жизнь; всеядны — членистоногие, семена, падаль, в основном на
//   земле; снимают клещей с бизонов, вапити, лосей, коров; изредка
//   разоряют гнёзда других птиц; оседлые, гнездятся от юга Юкона до
//   запада Манитобы, зимой кочуют восточнее; в последние десятилетия
//   расселились в NWT; исчезли с большой части ареала вместе со стадами
//   бизонов (падаль), восстановились благодаря жизни рядом с людьми.
// - BC Government, Species Summary: G5 / S5, BC Yellow list, General
//   Status Canada — Secure (2005); COSEWIC/SARA — нет; открытые
//   ландшафты, опушки, прибрежные заросли, фермы; насиживание 16-18 дней;
//   гнездо может использоваться повторно; пустые гнёзда сорок потом
//   занимают другие птицы; исследование в Альберте — без помощи самца
//   птенцов не выкормить.
// - Запасание еды, "похороны" и юридический статус охраны в Канаде —
//   в этих источниках НЕ указаны, на странице не использую.
//
// МЕДИА:
// - magpie-hero.mp4 — "Black-billed magpie (Pica hudsonia) in Colorado",
//   mark byzewski, CC BY 2.0 — Колорадо-Спрингс (США), сорока кричит на
//   столбе; первые 20 с. Канадских видео на Commons нет.
// - magpie-hero.jpg — Chris Woodrich, CC BY-SA 4.0 — Mount Royal
//   University, Калгари, 2025.
// - Карточка (magpie-card.jpg) — Charles J. Sharp, CC BY-SA 4.0 — Lake
//   Louise, Альберта.
// - Галерея (все Канада):
//   * magpie-edmonton.jpg — Rhododendrites, CC BY-SA 4.0 — Эдмонтон;
//   * magpie-saskatoon.jpg — Ryan Hodnett, CC BY-SA 4.0 — Саскатун;
//   * magpie-nest.jpg — Grungaloo, CC BY-SA 4.0 — гнездо, Калгари
//     (по координатам), ноябрь 2023.

export const BLACK_BILLED_MAGPIE = {
  slug: 'black-billed-magpie',
  name: 'Black-billed Magpie',
  shortName: 'Magpie',
  tag: 'Safe To Observe — A Clever Neighbour',
  level: 'safe',
  image: '/wildlife/Black-billed Magpie/magpie-hero.jpg',
  heroVideo: '/wildlife/Black-billed Magpie/magpie-hero.mp4',
  heroCredit: 'Photo: Chris Woodrich / Wikimedia Commons · CC BY-SA 4.0 · Calgary, Alberta',
  heroVideoCredit: 'Video: mark byzewski / Wikimedia Commons · CC BY 2.0 · Colorado',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "Black, white, and shimmering blue-green — Canada's only magpie. Once tied to the great bison herds, magpies now thrive in prairie towns, farmyards, and city parks from Yukon to Manitoba, building huge domed nests of sticks and picking ticks off moose and elk.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Length', value: '~50 CM' },
    { label: 'Tail', value: '50%+ Of Body' },
    { label: 'Eggs', value: 'Usually 4–9' },
    { label: 'Nest Building', value: '~6 Weeks' },
    { label: 'Range', value: 'Yukon To Manitoba' },
    { label: 'Status', value: 'Secure' },
  ],

  minDistanceWarning: {
    title: 'Leave Nests Alone',
    text: 'Magpies nest in bushes and trees and may reuse the same nest year after year. Watch from a distance in spring and early summer.',
  },

  behaviorSection: {
    tag: 'Magpie Behaviour',
    title: 'The Prairie’s',
    highlight: 'Clever Opportunist',
    accent: '#38a169',
    cards: [
      {
        title: 'Hidden Colours',
        icon: 'Eye',
        description:
          'Up close, the “black” wings and tail shine metallic blue and green.',
      },
      {
        title: 'Domed Stick Castles',
        icon: 'ShieldCheck',
        description:
          'The nest is a big dome of sticks with side entrances and a mud-lined cup inside — about six weeks of work.',
      },
      {
        title: 'Tick Pickers',
        icon: 'Footprints',
        description:
          'Magpies ride on bison, elk, moose, and cattle, plucking off blood-sucking ticks.',
      },
      {
        title: 'Eat Almost Anything',
        icon: 'Fish',
        description:
          'Insects, seeds, and carrion, mostly found on the ground — and now and then eggs or chicks of other birds.',
      },
      {
        title: 'Partners For Years',
        icon: 'Users',
        description:
          'Pairs often keep the same mate and territory year after year. Both parents are needed to raise the chicks.',
      },
      {
        title: 'Back With People',
        icon: 'Compass',
        description:
          'Magpies vanished from much of their range with the bison, then bounced back by living close to towns and farms.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Disturb A Nest',
      icon: 'XCircle',
      description: 'Pairs reuse nests and territories. Leave nests and young birds alone.',
    },
    {
      title: 'Never Hand-Feed Magpies',
      icon: 'AlertTriangle',
      description: 'Magpies learn fast. Hand-feeding teaches them to pester people for food.',
    },
    {
      title: 'Never Leave Pet Food Outside',
      icon: 'Trash2',
      description: 'Pet food and food scraps draw magpies — and other wildlife — to your yard.',
    },
    {
      title: 'Never Let Cats Roam',
      icon: 'PawPrint',
      description: 'Keep cats indoors to protect fledglings that are still learning to fly.',
    },
    {
      title: 'Never Pick Up A Fledgling',
      icon: 'DoorOpen',
      description: 'Leave young birds where they are — their parents may be close by.',
    },
  ],

  alwaysDo: [
    {
      title: 'Look For Them Near Wildlife',
      icon: 'Eye',
      description: 'In the parks, watch elk and moose — a magpie may be riding along, hunting ticks.',
    },
    {
      title: 'Spot The Nests In Winter',
      icon: 'Calendar',
      description: 'Big domed stick nests are easiest to see in leafless trees.',
    },
    {
      title: 'Secure Your Garbage',
      icon: 'Trash2',
      description: 'Lidded bins keep magpies from scattering trash.',
    },
    {
      title: 'Use Binoculars',
      icon: 'Camera',
      description: 'Binoculars reveal the hidden blue-green shine on their feathers.',
    },
    {
      title: 'Report Injured Birds',
      icon: 'Phone',
      description: 'Contact a local wildlife rehabilitation centre for injured birds.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Magpies already thrive around people. Feeding them makes them bolder around homes, picnic sites, and campgrounds.',
    items: [
      { name: 'Bread', icon: '/icons/wildlife/🍞.png', description: 'Little nutrition for birds' },
      { name: 'Meat Scraps', icon: '/icons/wildlife/🥩.png', description: 'Draws magpies and pests' },
      { name: 'Pet Food', icon: '🐾', description: 'Keep bowls indoors' },
      { name: 'Chips And Snacks', icon: '🍟', description: 'Not food for birds' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Draws scavengers' },
      { name: 'Fruit From Your Hand', icon: '/icons/wildlife/🍎.png', description: 'Teaches birds to beg' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Magpies' },
  spotParks: [
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — Lake Louise and valleys', level: 'safe' },
    { name: 'Calgary And Edmonton Parks', province: 'Alberta', season: 'Year-round — city parks and river valleys', level: 'safe' },
    { name: 'Saskatoon', province: 'Saskatchewan', season: 'Year-round — parks and riverbanks', level: 'safe' },
    { name: 'Jasper National Park', province: 'Alberta', season: 'Year-round — along the Yellowhead Highway valleys', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Look For The Long Tail',
      description:
        'Black and white body, white wing patches, and a tail longer than the rest of the bird — that’s a magpie.',
    },
    {
      title: 'Watch From A Distance',
      description:
        'Enjoy them going about their day without offering food.',
    },
    {
      title: 'Give Nests Room',
      description:
        'In spring and early summer, don’t linger beside a domed nest.',
    },
    {
      title: 'Report Injured Birds',
      description:
        'Contact a local wildlife rehabilitation centre if you find an injured magpie.',
    },
  ],

  gallery: [
    { src: '/wildlife/Black-billed Magpie/magpie-edmonton.jpg', credit: 'Rhododendrites · CC BY-SA 4.0 · Edmonton, Alberta' },
    { src: '/wildlife/Black-billed Magpie/magpie-saskatoon.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Saskatoon, Saskatchewan' },
    { src: '/wildlife/Black-billed Magpie/magpie-nest.jpg', credit: 'Grungaloo · CC BY-SA 4.0 · Calgary, Alberta' },
  ],
};

export default BLACK_BILLED_MAGPIE;
