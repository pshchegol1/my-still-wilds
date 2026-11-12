// Bald Eagle — данные страницы /wildlife/bald-eagle
//
// Сделано самостоятельно без макета, по той же схеме, что остальные
// "safe"-животные. Категория на /wildlife — Birds ("Safe to Observe"),
// поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Bald Eagle": размах крыльев часто больше
//   2 м, до 2.4 м; вес может быть больше 7 кг, самки крупнее самцов;
//   белые голова и хвост появляются постепенно за 4-5 лет, молодые —
//   пёстрые бурые; гнёзда в среднем 1.5-2 м в ширину и ~1 м в высоту,
//   при многолетнем использовании — несколько метров и сотни кг; обычно
//   1-3 яйца (чаще 2), насиживание ~35 дней; основа питания — рыба, а
//   также водоплавающие, чайки, мелкие млекопитающие и падаль; больше
//   всего гнездится в BC, много в бореальных лесах AB/SK/MB/северо-
//   западного Онтарио, меньше — в Атлантической Канаде; в Канаде около
//   110,000 белоголовых орланов — ~55% мировой популяции; спад в середине
//   XX века из-за ДДТ (истончение скорлупы), восстановление после запрета;
//   беспокойство у гнезда может заставить взрослых бросить яйца/птенцов.
// - Squamish Environment Society (Brackendale Winter Eagle Count): рекорд
//   3,769 орланов (январь 1994; в других источниках 3,766/3,701 — на
//   странице "more than 3,700"), минимум 411 (2016), январь 2025 — 1,288;
//   численность зависит от количества лосося.
// - BC Parks, Brackendale Eagles Park: вход в сам парк зимой закрыт из-за
//   орланов; наблюдать — с дамбы Eagle Run в Brackendale.
// - COSEWIC: Not at Risk (реестры New Brunswick и NWT). Год оценки
//   (1984) точно не подтвердила — на странице без года.
// - BC Wildlife Act, s.34 (через сайты правительства BC / West Vancouver):
//   гнёзда орланов защищены круглый год, даже пустые.
// - Конкретную рекомендуемую дистанцию до гнезда для туристов в
//   канадских источниках НЕ нашла — на странице без цифры ("well back").
//
// МЕДИА:
// - eagle-hero.mp4 — "Bald Eagles Mating in Greater Toronto Area",
//   Lucastphotography, CC BY 4.0 — пара диких орланов на сосне, Торонто;
//   первые 20 с (в ролике спаривание — естественное поведение).
// - eagle-hero.jpg — Charles J. Sharp, CC BY-SA 4.0 — орлан в полёте,
//   Тофино, остров Ванкувер, BC.
// - Галерея (все Канада):
//   * eagle-columbia.jpg — Charles J. Sharp, CC BY-SA 4.0, р. Колумбия
//     возле Golden, BC;
//   * eagle-nest.jpg — Liam Quinn, CC BY-SA 2.0, гнездо с птенцом, остров
//     на оз. Ниписсинг, Онтарио;
//   * eagle-ucluelet.jpg — Roy Luck, CC BY 2.0, гавань Ucluelet, BC.

export const BALD_EAGLE = {
  slug: 'bald-eagle',
  name: 'Bald Eagle',
  shortName: 'Bald Eagle',
  tag: 'Safe To Observe — Give Nests Space',
  level: 'safe',
  image: '/wildlife/Bald Eagle/eagle-hero.jpg',
  heroVideo: '/wildlife/Bald Eagle/eagle-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Tofino, BC',
  heroVideoCredit: 'Video: Lucastphotography / Wikimedia Commons · CC BY 4.0 · Greater Toronto Area',
  description:
    "Canada is home to more than half of the world's bald eagles. With wings over two metres wide and a bright white head, they patrol coasts, rivers, and lakes from BC to Newfoundland — and in winter, thousands gather to feast on spawning salmon in BC's Squamish Valley.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Wingspan', value: '2 – 2.4 M' },
    { label: 'Weight', value: 'Up To 7 KG+' },
    { label: 'White Head', value: 'At 4–5 Years' },
    { label: 'In Canada', value: '~110,000' },
    { label: 'World Share', value: '~55%' },
    { label: 'Status', value: 'Not At Risk' },
  ],

  minDistanceWarning: {
    title: 'Stay Well Back From Nests',
    text: 'Disturbance near a nest can make eagles abandon their eggs or chicks. In BC, eagle nests are protected by law year-round — even when empty.',
  },

  behaviorSection: {
    tag: 'Bald Eagle Behaviour',
    title: 'Lord Of',
    highlight: 'The Waterways',
    accent: '#38a169',
    cards: [
      {
        title: 'Fish First',
        icon: 'Fish',
        description:
          'Fish are the heart of their diet, but they also take waterfowl, gulls, and small mammals — and often scavenge carrion.',
      },
      {
        title: 'Giant Nests',
        icon: 'ShieldCheck',
        description:
          'Nests are usually 1.5–2 m wide. Reused for years, they can grow several metres deep and weigh hundreds of kilograms.',
      },
      {
        title: 'Five Years To Turn White',
        icon: 'Calendar',
        description:
          'Young eagles are mottled brown. The famous white head and tail come in gradually over four to five years.',
      },
      {
        title: 'Salmon Season Gatherings',
        icon: 'UsersThreeIcon',
        description:
          'In winter, eagles gather where salmon spawn. Brackendale, BC, once counted more than 3,700 in a single day.',
      },
      {
        title: 'A Canadian Stronghold',
        icon: 'Compass',
        description:
          'About 110,000 bald eagles live in Canada — roughly 55% of the world population — most of them in British Columbia.',
      },
      {
        title: 'Back From DDT',
        icon: 'AlertTriangle',
        description:
          'The pesticide DDT thinned their eggshells and caused steep declines. After it was restricted, most populations recovered.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach A Nest',
      icon: 'XCircle',
      description: 'Adults may abandon eggs or chicks if disturbed. Watch nests only from far away.',
    },
    {
      title: 'Never Cut Or Climb A Nest Tree',
      icon: 'AlertTriangle',
      description: 'In BC, eagle nests are protected year-round under the Wildlife Act — even when not in use.',
    },
    {
      title: 'Never Flush Feeding Eagles',
      icon: 'RunningFigure',
      description: 'In winter, eagles need every meal. Scaring them off salmon wastes energy they can’t spare.',
    },
    {
      title: 'Never Fly Drones Near Eagles',
      icon: 'Volume2',
      description: 'Drones can stress eagles and disturb their nests.',
    },
    {
      title: 'Never Enter Closed Areas',
      icon: 'DoorOpen',
      description: 'Brackendale Eagles Park is closed in winter to protect the eagles. Watch from the public dyke instead.',
    },
  ],

  alwaysDo: [
    {
      title: 'Bring Binoculars Or A Long Lens',
      icon: 'Camera',
      description: 'The best eagle views are from a distance — let optics do the work.',
    },
    {
      title: 'Use Viewing Areas',
      icon: 'Eye',
      description: 'In Squamish, watch from the Eagle Run dyke in Brackendale, across from the eagles’ feeding grounds.',
    },
    {
      title: 'Keep Your Voice Down',
      icon: 'Ear',
      description: 'Quiet observers see more natural behaviour — and don’t push eagles off their perches.',
    },
    {
      title: 'Pack Out Fishing Line',
      icon: 'Trash2',
      description: 'Discarded line and hooks can tangle and injure eagles and other birds.',
    },
    {
      title: 'Report Injured Eagles',
      icon: 'Phone',
      description: 'Call a local wildlife rehabilitation centre or conservation officer — don’t handle the bird yourself.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Eagles that learn to take food from people lose their natural wariness and gather in risky places like roads and dumps. Let them find their own fish.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never toss fish to eagles' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Teaches eagles to rely on people' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for a raptor' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait and catch secured' },
      { name: 'Fishing Line And Hooks', icon: '🪢', description: 'Can tangle and injure birds' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can be swallowed or tangle birds' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Draws eagles to dumps and roads' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Bald Eagles' },
  spotParks: [
    { name: 'Brackendale Eagles Park', province: 'British Columbia', season: 'Winter salmon season — view from the dyke', level: 'caution' },
    { name: 'Pacific Rim National Park Reserve', province: 'British Columbia', season: 'Year-round — Tofino & Ucluelet coast', level: 'safe' },
    { name: 'Cape Breton Highlands National Park', province: 'Nova Scotia', season: 'Year-round — coastal cliffs', level: 'safe' },
    { name: 'Prince Albert National Park', province: 'Saskatchewan', season: 'Spring to fall — boreal lakes', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Look Up',
      description:
        'Scan tall trees and snags along shorelines — eagles often perch in plain view.',
    },
    {
      title: 'Keep Your Distance',
      description:
        'If the eagle stares at you, calls, or shifts on its perch, you’re too close — back away slowly.',
    },
    {
      title: 'Watch Quietly',
      description:
        'Stay still and quiet, and enjoy the bird through binoculars or a long lens.',
    },
    {
      title: 'Report Problems',
      description:
        'Report injured eagles or disturbed nests to a wildlife rehabilitation centre or conservation officer.',
    },
  ],

  gallery: [
    { src: '/wildlife/Bald Eagle/eagle-columbia.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Golden, BC' },
    { src: '/wildlife/Bald Eagle/eagle-nest.jpg', credit: 'Liam Quinn · CC BY-SA 2.0 · Lake Nipissing, Ontario' },
    { src: '/wildlife/Bald Eagle/eagle-ucluelet.jpg', credit: 'Roy Luck · CC BY 2.0 · Ucluelet, BC' },
  ],
};

export default BALD_EAGLE;
