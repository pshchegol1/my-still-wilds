// Peregrine Falcon — данные страницы /wildlife/peregrine-falcon
//
// Сделано самостоятельно без макета, по той же схеме, что Bald Eagle.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Peregrine Falcon": размер вороны; самки
//   45-59 см, ~910 г; самцы 36-49 см, ~570 г; пикирует быстрее 300 км/ч;
//   добыча зависит от региона (Haida Gwaii — старики (Ancient Murrelet),
//   Лабрадор — чистики и грызуны, Rankin Inlet — лемминги и кулики, юг
//   Канады — чайки, крачки, поганки, кулики; в городах голуби — обычно
//   <20% рациона); гнездится в основном на скалах, в Арктике — также на
//   склонах и обрывах рек; гнезда не строит — неглубокая ямка; 3-4 яйца,
//   насиживание ~32 дня; вылетает обычно 1-2 птенца; гнёзда на зданиях в
//   Эдмонтоне, Калгари, Виннипеге, Торонто, Оттаве, Монреале, Сент-Джоне;
//   самка Scarlet на Sun Life (Монреаль) — 16 сезонов, 21 птенец; спад с
//   ~1945 из-за пестицидов; Канада ограничила ДДТ в 1969; с 1974 года
//   более 1,650 сапсанов выращено в неволе (Альберта, Саскачеван, Квебек)
//   и выпущено в 60+ местах от юга Альберты до залива Фанди; до 500 км в
//   день на миграции; самка из Эдмонтона долетела до Масатлана (Мексика)
//   меньше чем за 8 дней; арктических птиц из NWT находили в Аргентине;
//   в Канаде три подвида: anatum, tundrius, pealei.
// - COSEWIC 2017 (canada.ca): anatum/tundrius — Not at Risk (ноябрь
//   2017; в 2007 — Special Concern); pealei — Special Concern (2007 и
//   2017). Текущий статус в SARA Schedule 1 в источниках расходится — на
//   странице указан только статус COSEWIC.
// - Размах крыльев и продолжительность жизни в HWW не указаны — на
//   странице не используются.
//
// МЕДИА:
// - Видео нет: на Commons только 8-секундный ролик из Невады (мокрая
//   птица чистит перья) — слабо для hero, не брала.
// - peregrine-hero.jpg — Luke (iNaturalist 35648686), CC BY-SA 4.0 —
//   сапсан с пойманным золотым шилоклювым дятлом, Торонто (координаты
//   43.605, -79.413), 24.03.2019.
// - Галерея:
//   * peregrine-humber.jpg — Mykola Swarnyk, CC BY-SA 3.0 — самец,
//     Humber Bay Park West, Торонто (обрезано до горизонтального кадра);
//   * peregrine-windsor.jpg — Dennis Branson, public domain — взрослый
//     сапсан на мосту Ambassador Bridge, Виндзор, Онтарио, 2010
//     (маленькое разрешение, 683 px);
//   * peregrine-flight.jpg — Yellowstone National Park (NPS), public
//     domain — сапсан в полёте (США).
// - Отклонено: "Faucon pèlerin" Christian Fritschi — птица "Spirit" из
//   вольера (неволя).

export const PEREGRINE_FALCON = {
  slug: 'peregrine-falcon',
  name: 'Peregrine Falcon',
  shortName: 'Peregrine',
  tag: 'Safe To Observe — Give Nest Cliffs Space',
  level: 'safe',
  image: '/wildlife/Peregrine Falcon/peregrine-hero.jpg',
  heroCredit: 'Photo: Luke / iNaturalist · CC BY-SA 4.0 · Toronto, Ontario',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The fastest dive in the animal world — a peregrine can stoop at more than 300 km/h. Pesticides nearly wiped them out in the mid-1900s, but after DDT was restricted and more than 1,650 captive-bred falcons were released across Canada, they now hunt from Arctic cliffs to downtown skyscrapers.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Dive Speed', value: '300+ KM/H' },
    { label: 'Female', value: '45–59 CM · ~910 G' },
    { label: 'Male', value: '36–49 CM · ~570 G' },
    { label: 'Eggs', value: 'Usually 3–4' },
    { label: 'Released In Canada', value: '1,650+ Since 1974' },
    { label: 'Status (Anatum/Tundrius)', value: 'Not At Risk' },
  ],

  minDistanceWarning: {
    title: 'Stay Away From Nest Ledges',
    text: 'Peregrines return to the same cliff ledges year after year. Climbing, hiking, or flying drones near an active nest can make adults leave their eggs or chicks.',
  },

  behaviorSection: {
    tag: 'Peregrine Behaviour',
    title: 'The Fastest',
    highlight: 'Hunter Alive',
    accent: '#38a169',
    cards: [
      {
        title: 'Record-Breaking Dive',
        icon: 'ArrowDown',
        description:
          'Peregrines hunt by “stooping” — folding their wings and diving at more than 300 km/h to strike birds in mid-air.',
      },
      {
        title: 'Birds On The Menu',
        icon: 'Wind',
        description:
          'Prey depends on the region: seabirds on the Pacific coast, gulls and shorebirds in the south, lemmings and shorebirds in the Arctic.',
      },
      {
        title: 'No Real Nest',
        icon: 'ShieldCheck',
        description:
          'The female scrapes a shallow hollow on a cliff ledge — or a skyscraper — and lays usually 3 or 4 eggs. Incubation takes about 32 days.',
      },
      {
        title: 'City Falcons',
        icon: 'Eye',
        description:
          'Peregrines now nest on buildings in Edmonton, Calgary, Winnipeg, Toronto, Ottawa, Montreal, and Saint John. One Montreal female raised 21 young over 16 seasons.',
      },
      {
        title: 'Long-Distance Travellers',
        icon: 'Compass',
        description:
          'Migrating peregrines can fly up to 500 km a day. Arctic falcons banded in the NWT have turned up in Argentina.',
      },
      {
        title: 'Back From The Brink',
        icon: 'AlertTriangle',
        description:
          'DDT caused nesting failure and steep declines after 1945. Canada restricted it in 1969, and captive-bred birds were released at more than 60 sites.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach A Nest Ledge',
      icon: 'XCircle',
      description: 'Disturbance at the nest can cause adults to abandon eggs or chicks. Watch from far below.',
    },
    {
      title: 'Never Climb Near Active Nests',
      icon: 'AlertTriangle',
      description: 'Respect seasonal cliff closures for nesting falcons — check with the park before climbing.',
    },
    {
      title: 'Never Fly Drones By Cliffs Or Nest Buildings',
      icon: 'Volume2',
      description: 'Drones stress nesting falcons and can disturb their young.',
    },
    {
      title: 'Never Touch A Grounded Fledgling',
      icon: 'PawPrint',
      description: 'Young falcons often land on the ground while learning to fly. The parents are usually nearby — call a local wildlife centre if unsure.',
    },
    {
      title: 'Never Use Bait To Attract Falcons',
      icon: 'Fish',
      description: 'Luring falcons for photos changes their behaviour and can draw them into danger.',
    },
  ],

  alwaysDo: [
    {
      title: 'Bring Binoculars Or A Spotting Scope',
      icon: 'Camera',
      description: 'Falcons perch high on cliffs and buildings — optics let you watch without getting close.',
    },
    {
      title: 'Look Up In The City',
      icon: 'Eye',
      description: 'Scan ledges of tall buildings and bridges in spring — many Canadian cities have nesting pairs.',
    },
    {
      title: 'Keep Visits Short',
      icon: 'Calendar',
      description: 'Near nesting areas, watch briefly and move on so the adults can keep hunting and feeding their young.',
    },
    {
      title: 'Follow Cliff Closures',
      icon: 'ShieldCheck',
      description: 'Stay off closed trails and climbing routes during nesting season.',
    },
    {
      title: 'Report Injured Falcons',
      icon: 'Phone',
      description: 'Call a wildlife rehabilitation centre or conservation officer — don’t handle the bird yourself.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Peregrines catch their own prey. Feeding wild birds of prey teaches them to approach people and can draw them into traffic and other danger.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Never leave meat out for falcons' },
      { name: 'Live Bait Or Pigeons', icon: '🐦', description: 'Luring is harmful and stressful' },
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Not part of their natural hunt' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for a raptor' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fishing Line', icon: '🪢', description: 'Can tangle and injure birds' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can be swallowed or tangle birds' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Draws scavengers and pests' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Peregrines' },
  spotParks: [
    { name: 'Downtown Toronto & Waterfront', province: 'Ontario', season: 'Spring to summer — city nests', level: 'safe' },
    { name: 'Downtown Montreal', province: 'Quebec', season: 'Spring to summer — city nests', level: 'safe' },
    { name: 'Gwaii Haanas National Park Reserve', province: 'British Columbia', season: 'Spring to summer — coastal cliffs (Peale’s peregrine)', level: 'safe' },
    { name: 'Rankin Inlet', province: 'Nunavut', season: 'Summer — Arctic cliffs', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Look Up',
      description:
        'Scan cliff ledges, bridges, and tall buildings — peregrines often perch high in the open.',
    },
    {
      title: 'Back Away',
      description:
        'If a falcon circles overhead and calls, slowly leave the area.',
    },
    {
      title: 'Watch From A Distance',
      description:
        'Use binoculars or a long lens, and keep your visit short.',
    },
    {
      title: 'Report Problems',
      description:
        'Report injured falcons, grounded chicks in danger, or disturbed nests to a wildlife centre or conservation officer.',
    },
  ],

  gallery: [
    { src: '/wildlife/Peregrine Falcon/peregrine-humber.jpg', credit: 'Mykola Swarnyk · CC BY-SA 3.0 · Toronto, Ontario' },
    { src: '/wildlife/Peregrine Falcon/peregrine-windsor.jpg', credit: 'Dennis Branson · Public domain · Windsor, Ontario' },
    { src: '/wildlife/Peregrine Falcon/peregrine-flight.jpg', credit: 'Yellowstone National Park (NPS) · Public domain' },
  ],
};

export default PEREGRINE_FALCON;
