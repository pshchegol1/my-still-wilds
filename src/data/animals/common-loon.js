// Common Loon — данные страницы /wildlife/common-loon
//
// Сделано самостоятельно без макета, по той же схеме, что Bald Eagle /
// Peregrine Falcon. Категория на /wildlife — Birds ("Safe to Observe"),
// поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Loons": вес взрослых 2.7 — больше 6.3 кг;
//   почти 1 м от клюва до лап; размах крыльев 130-140 см; под водой почти
//   минуту, ныряет до 80 м; многие кости не полые, а плотные; ноги сильно
//   сзади — на суше неуклюжи; для взлёта разбегаются по воде против ветра,
//   в штиль — несколько сотен метров; на миграции ~120 км/ч; летом едят
//   рыбу, раков, лягушек, улиток, саламандр, пиявок; 4 основных крика —
//   tremolo, wail, yodel, hoot; больше всего кричат с середины мая до
//   середины июня; yodel — только самцы, до 6 секунд; гнездо у самой воды,
//   часто на островах, хатках ондатры, полузатопленных брёвнах; обычно 2
//   яйца в июне; насиживание 26-31 день; птенцы катаются на спине
//   родителя; родители почти всё время рядом до ~8 недель; к 11-12 неделям
//   птенцы сами добывают корм и могут летать; зимуют на Тихоокеанском и
//   Атлантическом побережьях; гнездятся в большей части Канады; угрозы —
//   свинцовые грузила, ртуть, кислотные дожди, застройка берегов, волна
//   от лодок.
// - Birds Canada (Canadian Lakes Loon Survey): больше 90% всех
//   обыкновенных гагар мира гнездятся в Канаде; 40-летние данные
//   волонтёров показывают снижение выживаемости птенцов.
// - Cottage Life (со ссылкой на Birds Canada): гнёзда смывает волной от
//   моторных лодок, лодки разлучают птенцов с родителями; ртуть делает
//   родителей вялыми; взрослых ~240,000 гнездящихся пар (на странице НЕ
//   указываю — вторичный источник).
// - Ограничения на свинцовые снасти в национальных парках Канады —
//   по материалам кампании "Get the Lead Out" (вторичные источники);
//   на странице сформулировано осторожно, без годов и размеров.
// - Гагара на монете в 1 доллар ("loonie") — общеизвестно.
// - Конкретной рекомендуемой дистанции до гагар/гнёзд в канадских
//   официальных источниках НЕ нашла — на странице без цифры.
//
// МЕДИА:
// - Видео нет: USFWS "Common Loon (Gavia Immer)" (взрослая с птенцом на
//   спине, США) пробовала — на весь экран сильно пикселит (апскейл), убрала;
//   канадские видео на Commons (Golden ON, Wood Lake BC) — птицы очень
//   далеко, 720p.
// - loon-hero.jpg — Cephas, CC BY-SA 3.0 — гагара хлопает крыльями,
//   Blue Sea Lake, Квебек.
// - Галерея (все Канада):
//   * loon-chick.jpg — ImagePerson, CC BY 4.0 — взрослая с птенцом, озеро
//     в восточном Онтарио;
//   * loon-bowron.jpg — Trougnouf, CC BY 4.0 — Swan Lake, Bowron Lake
//     Provincial Park, BC;
//   * loon-ontario.jpg — ImagePerson, CC BY 4.0 — озеро в восточном
//     Онтарио.

export const COMMON_LOON = {
  slug: 'common-loon',
  name: 'Common Loon',
  shortName: 'Loon',
  tag: 'Safe To Observe — Give Nests And Chicks Space',
  level: 'safe',
  image: '/wildlife/Common Loon/loon-hero.jpg',
  heroCredit: 'Photo: Cephas / Wikimedia Commons · CC BY-SA 3.0 · Blue Sea Lake, Quebec',
  description:
    "The voice of Canada's lakes — and the bird on the loonie. More than 90% of the world's common loons nest in Canada. Their haunting wails and yodels carry across the water on summer nights, and their tiny chicks ride on their parents' backs.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Nests In Canada', value: '90%+ Of World' },
    { label: 'Weight', value: '2.7 – 6.3+ KG' },
    { label: 'Wingspan', value: '130 – 140 CM' },
    { label: 'Dives To', value: '80 M' },
    { label: 'Eggs', value: 'Usually 2' },
    { label: 'Best Time', value: 'May – August' },
  ],

  minDistanceWarning: {
    title: 'Stay Away From Nests And Chicks',
    text: 'Loons nest right at the water’s edge. Boats, wakes, and paddlers that come too close can wash out nests or separate chicks from their parents.',
  },

  behaviorSection: {
    tag: 'Loon Behaviour',
    title: 'Voice Of',
    highlight: 'The Northern Lakes',
    accent: '#38a169',
    cards: [
      {
        title: 'Four Famous Calls',
        icon: 'Volume2',
        description:
          'Loons use four main calls — the tremolo, wail, yodel, and hoot. Only males yodel, and a yodel can last up to six seconds.',
      },
      {
        title: 'Deep Divers',
        icon: 'ArrowDown',
        description:
          'Solid, heavy bones help loons dive as deep as 80 m and stay under for almost a minute while chasing fish.',
      },
      {
        title: 'Chicks On Board',
        icon: 'ShieldCheck',
        description:
          'Chicks ride on a parent’s back to rest, stay warm, and hide from predators. By 11–12 weeks they feed themselves and may fly.',
      },
      {
        title: 'Built For Water',
        icon: 'Fish',
        description:
          'Their legs sit far back on the body — perfect for swimming, but loons can barely shuffle on land.',
      },
      {
        title: 'A Long Runway',
        icon: 'Wind',
        description:
          'To take off, a loon runs across the water into the wind — on a calm day it may need several hundred metres.',
      },
      {
        title: 'Fewer Chicks',
        icon: 'AlertTriangle',
        description:
          'Volunteer surveys show loon chick survival is declining. Mercury, lead tackle, wakes, and shoreline development all play a part.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach A Nest',
      icon: 'XCircle',
      description: 'Loons nest right on the shoreline. A frightened adult may leave its eggs exposed to predators and cold.',
    },
    {
      title: 'Never Chase Or Split Up A Family',
      icon: 'Car',
      description: 'Boats can separate chicks from their parents. Give families a wide berth.',
    },
    {
      title: 'Never Speed Near Shorelines',
      icon: 'AlertTriangle',
      description: 'Boat wakes can wash out loon nests built at the water’s edge.',
    },
    {
      title: 'Never Use Lead Sinkers Or Jigs',
      icon: 'Trash2',
      description: 'Loons can swallow lost lead tackle and be poisoned. Choose lead-free fishing gear.',
    },
    {
      title: 'Never Fly Drones Low Over Loons',
      icon: 'Volume2',
      description: 'Drones overhead can stress nesting birds and chicks.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From A Distance',
      icon: 'Camera',
      description: 'Use binoculars or a long lens. If a loon changes its behaviour because of you, you’re too close.',
    },
    {
      title: 'Slow Down On The Water',
      icon: 'Car',
      description: 'Keep wakes low near shorelines, especially in June and July when loons are nesting.',
    },
    {
      title: 'Switch To Lead-Free Tackle',
      icon: 'Fish',
      description: 'Lead-free sinkers and jigs protect loons and other waterbirds.',
    },
    {
      title: 'Pack Out Fishing Line',
      icon: 'Trash2',
      description: 'Discarded line and hooks can tangle and injure loons.',
    },
    {
      title: 'Join The Loon Survey',
      icon: 'Users',
      description: 'Birds Canada’s Canadian Lakes Loon Survey relies on volunteers to track loon families on their lakes.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Loons find all their own food in the lake. Feeding them draws birds toward boats, docks, and people, where they can be hurt.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for loons' },
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never toss fish to loons' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured in the boat' },
      { name: 'Lead Sinkers And Jigs', icon: '🪝', description: 'Swallowed lead can kill loons' },
      { name: 'Fishing Line', icon: '🪢', description: 'Can tangle and injure birds' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can be swallowed or tangle birds' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Draws predators to nesting shores' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Common Loons' },
  spotParks: [
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'May to September — lakes and canoe routes', level: 'safe' },
    { name: 'Bowron Lake Provincial Park', province: 'British Columbia', season: 'Summer — canoe circuit lakes', level: 'safe' },
    { name: 'Blue Sea Lake', province: 'Quebec', season: 'Summer — Outaouais lakes', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Slow Down',
      description:
        'When you see loons, ease off the throttle or stop paddling and let them carry on.',
    },
    {
      title: 'Watch Their Behaviour',
      description:
        'If a loon starts calling or moves away from you, you are too close — back off.',
    },
    {
      title: 'Keep Families Together',
      description:
        'Never come between adults and chicks. Steer well around them.',
    },
    {
      title: 'Report Problems',
      description:
        'Report injured or tangled loons to a local wildlife rehabilitation centre.',
    },
  ],

  gallery: [
    { src: '/wildlife/Common Loon/loon-chick.jpg', credit: 'ImagePerson · CC BY 4.0 · Eastern Ontario' },
    { src: '/wildlife/Common Loon/loon-bowron.jpg', credit: 'Trougnouf · CC BY 4.0 · Bowron Lake PP, BC' },
    { src: '/wildlife/Common Loon/loon-ontario.jpg', credit: 'ImagePerson · CC BY 4.0 · Eastern Ontario' },
  ],
};

export default COMMON_LOON;
