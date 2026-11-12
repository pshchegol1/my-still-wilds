// Whooping Crane — данные страницы /wildlife/whooping-crane
//
// Сделано самостоятельно без макета, по той же схеме, что Atlantic Puffin.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Whooping Crane": крупный самец ~1.5 м —
//   самая высокая птица Северной Америки; размах крыльев 2 м и больше;
//   ~1,300-1,400 птиц в 1860; к 1941 — всего ~22 диких (16 из них —
//   предки нынешней дикой стаи); гнездятся в Wood Buffalo NP — единственная
//   самоподдерживающаяся дикая гнездовая популяция; зимуют в Aransas
//   (Техас); миграция ~4,000 км, в среднем ~400 км в день; обычно 2 яйца,
//   насиживание 29-30 дней, выживает обычно 1 птенец; птенцы рыже-
//   оранжевые, молодые — коричнево-белые; крик слышен за несколько км;
//   пары танцуют и поют дуэтом; угроза — столкновения с ЛЭП.
// - U.S. Fish and Wildlife Service, пресс-релиз июнь 2026: зимой
//   2025-2026 в Техасе ~540 журавлей (стая Aransas–Wood Buffalo), из них
//   не меньше 57 молодых и 143 взрослые пары; летом 2025 в Wood Buffalo
//   вылетело не меньше 66 птенцов (данные Canadian Wildlife Service);
//   больше 500 птиц уже 9+ лет подряд.
// - Parks Canada / SARA: критическое местообитание в Wood Buffalo NP;
//   вид — endangered. BirdLife IBA: доступ в зону гнездования
//   контролируется, ограничены низкие полёты.
// - Миграция через Саскачеван: CWS ведёт сеть сообщений о наблюдениях
//   (North American Crane Working Group), осенние остановки — например,
//   район Marcelin к северо-западу от Саскатуна (турист. отчёт — на
//   странице только "Saskatchewan").
//
// КАРТОЧКА: в all-wildlife.js была локация 'BC · Ontario · Quebec' — это
// неверно (дикие журавли гнездятся в Wood Buffalo NP (Альберта/NWT) и
// пролетают через Саскачеван). Исправлено на 'Wood Buffalo NP ·
// Saskatchewan'.
//
// МЕДИА:
// - Видео нет: свободных видео на Commons не нашла.
// - Канадских свободных фото диких журавлей нет; все фото — с зимовки
//   Aransas (Техас), то есть той же дикой стаи, что гнездится в Wood
//   Buffalo. Птиц из реинтродуцированных стай (Флорида, Висконсин,
//   Индиана) и зоопарка Калгари не брала.
// - crane-hero.jpg — Klaus Nigge / USFWS, CC BY 2.0 — три журавля,
//   Aransas NWR.
// - Галерея:
//   * crane-flock.jpg — USFWS Mountain-Prairie, public domain — клин в
//     полёте (место в описании не указано);
//   * crane-flight.jpg — John Noll / USDA, public domain — в полёте, Техас;
//   * crane-marsh.jpg — Steve Hillebrand / USFWS, public domain — Aransas.

export const WHOOPING_CRANE = {
  slug: 'whooping-crane',
  name: 'Whooping Crane',
  shortName: 'Whooping Crane',
  tag: 'Endangered — Observe From Afar',
  level: 'safe',
  image: '/wildlife/Whooping Crane/crane-hero.jpg',
  heroCredit: 'Photo: Klaus Nigge / USFWS · CC BY 2.0 · Aransas NWR, Texas',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  heroObjectPosition: 'center 30%',
  description:
    "North America's tallest bird — and one of its greatest comeback stories. In 1941 only about 22 wild whooping cranes were left. Today the last natural wild flock, about 540 birds, still nests in Canada's Wood Buffalo National Park and flies some 4,000 km to winter on the Texas coast.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Height', value: 'Up To 1.5 M' },
    { label: 'Wingspan', value: '2 M+' },
    { label: 'Lowest Count', value: '~22 Birds (1941)' },
    { label: 'Wild Flock 2026', value: '~540 Birds' },
    { label: 'Migration', value: '~4,000 KM' },
    { label: 'Status', value: 'Endangered' },
  ],

  minDistanceWarning: {
    title: 'Endangered — Never Approach',
    text: 'If you spot a whooping crane on migration, stay in your vehicle, keep well back, and report the sighting. Access to the nesting area in Wood Buffalo National Park is controlled.',
  },

  behaviorSection: {
    tag: 'Whooping Crane Behaviour',
    title: 'Back From',
    highlight: 'The Brink',
    accent: '#38a169',
    cards: [
      {
        title: 'Tallest Bird In North America',
        icon: 'ShieldCheck',
        description:
          'A large male stands about 1.5 m tall, with wings that stretch 2 m or more from tip to tip.',
      },
      {
        title: 'Down To 22',
        icon: 'AlertTriangle',
        description:
          'In 1941 only about 22 wild birds were left. Sixteen of them are the ancestors of today’s entire wild flock.',
      },
      {
        title: 'Nesting In Wood Buffalo',
        icon: 'Compass',
        description:
          'The only self-sustaining wild flock nests in the wetlands of Wood Buffalo National Park on the Alberta–NWT border.',
      },
      {
        title: 'A 4,000 KM Journey',
        icon: 'Wind',
        description:
          'Each fall the cranes fly about 4,000 km to Texas, often around 400 km a day, stopping over in Saskatchewan.',
      },
      {
        title: 'Duets And Dances',
        icon: 'Volume2',
        description:
          'Pairs call in duet and perform courtship dances. Their whooping call can carry for several kilometres.',
      },
      {
        title: 'Rusty Chicks',
        icon: 'Calendar',
        description:
          'Pairs usually lay two eggs, but often only one chick survives. Chicks are reddish-orange; young birds are cinnamon and white.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Or Flush Cranes',
      icon: 'XCircle',
      description: 'Migrating cranes need every hour of rest and feeding. Scaring them into flight wastes precious energy.',
    },
    {
      title: 'Never Leave Your Vehicle Near Them',
      icon: 'Car',
      description: 'Watch from the road and stay in your car — don’t walk out into the field toward them.',
    },
    {
      title: 'Never Enter Closed Nesting Areas',
      icon: 'DoorOpen',
      description: 'Access to the nesting grounds in Wood Buffalo National Park is controlled to protect the flock.',
    },
    {
      title: 'Never Fly Drones Near Cranes',
      icon: 'Volume2',
      description: 'Low-flying aircraft are restricted over the nesting area. Keep drones away from cranes everywhere.',
    },
    {
      title: 'Never Confuse Them With Game Birds',
      icon: 'AlertTriangle',
      description: 'Hunters: whooping cranes are sometimes seen with sandhill cranes. Be certain of your target.',
    },
  ],

  alwaysDo: [
    {
      title: 'Report Your Sighting',
      icon: 'Phone',
      description: 'Report whooping cranes seen on migration to the Canadian Wildlife Service — every sighting helps track the flock.',
    },
    {
      title: 'Note The Details',
      icon: 'Eye',
      description: 'Record the date, time, location, number of birds, and any leg bands or transmitters.',
    },
    {
      title: 'Use Binoculars Or A Scope',
      icon: 'Camera',
      description: 'Watch and photograph from a long way off. The bird’s behaviour should not change because of you.',
    },
    {
      title: 'Look In Spring And Fall',
      icon: 'Calendar',
      description: 'In Saskatchewan, cranes pass through on migration in April–May and again in the fall.',
    },
    {
      title: 'Support Wetland Protection',
      icon: 'ShieldCheck',
      description: 'Cranes depend on healthy wetlands for nesting and stopovers.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Whooping cranes are endangered and must stay wild. Feeding draws them toward roads, people, and power lines — one of their biggest threats.',
    items: [
      { name: 'Grain Or Corn', icon: '🌽', description: 'Never bait cranes into fields' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for cranes' },
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never leave food out' },
      { name: 'Fruit', icon: '/icons/wildlife/🍎.png', description: 'Teaches cranes to approach people' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fishing Line', icon: '🪢', description: 'Can tangle long legs' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can be swallowed' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where They Live',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Whooping Cranes' },
  spotParks: [
    { name: 'Wood Buffalo National Park', province: 'Alberta · NWT', season: 'Nesting area — controlled access', level: 'caution' },
    { name: 'Saskatchewan Stopovers', province: 'Saskatchewan', season: 'April–May and fall migration', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop At A Distance',
      description:
        'If you see tall white birds with black wingtips in a field or marsh, stop well back and stay in your vehicle.',
    },
    {
      title: 'Watch Quietly',
      description:
        'Use binoculars. If the cranes stop feeding or start walking away, you are too close.',
    },
    {
      title: 'Record The Details',
      description:
        'Note the date, time, place, number of birds, and any bands or transmitters.',
    },
    {
      title: 'Report It',
      description:
        'Report the sighting to the Canadian Wildlife Service.',
    },
  ],

  gallery: [
    { src: '/wildlife/Whooping Crane/crane-flock.jpg', credit: 'USFWS Mountain-Prairie · Public domain' },
    { src: '/wildlife/Whooping Crane/crane-flight.jpg', credit: 'John Noll / USDA · Public domain · Texas' },
    { src: '/wildlife/Whooping Crane/crane-marsh.jpg', credit: 'Steve Hillebrand / USFWS · Public domain · Aransas NWR' },
  ],
};

export default WHOOPING_CRANE;
