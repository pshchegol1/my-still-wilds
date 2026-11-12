// Snowy Owl — данные страницы /wildlife/snowy-owl
//
// Сделано самостоятельно без макета, по той же схеме, что Canada Goose.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Snowy Owl": почти полметра ростом,
//   размах крыльев почти 1.5 м; средний вес самки 2.3 кг, самца 1.8 кг;
//   взрослые самцы почти чисто белые, самки и молодые — с тёмными
//   полосами; активны днём, а также на рассвете и в сумерках; главная
//   добыча в Арктике — лемминги; каждой сове нужно эквивалент 7-12 мышей
//   в день; выводку из 9 птенцов нужно ~120 кг корма, почти 1,500
//   леммингов; гнездо — ямка в земле на бугре; территория 1-2 км²;
//   11-12 яиц в годы обилия леммингов, 4-7 — в бедные годы, после спада
//   леммингов могут не гнездиться; гнездятся в арктической тундре
//   (Элсмир, Баффинова Земля, Банкс, северное побережье от Юкона до
//   Лабрадора); зимой — во многих районах юга Канады, движение на юг с
//   ноября; число зимующих сильно меняется по годам, на юг залетают
//   в основном первогодки; официальная птица Квебека с 1987; убивать
//   запрещено по всей Канаде; угрозы зимой — столкновения с ЛЭП,
//   заборами, машинами; незаконный отстрел; голод у неопытных птиц; у
//   гнезда могут пикировать и бить людей.
// - Этика наблюдения (вторичные источники — Ontario Nature, Project
//   SnowStorm, USFWS): если птица реагирует — вы слишком близко; не
//   прикармливать/не приманивать мышами для фото (Ontario Nature не
//   принимает такие фото); USFWS советует ограничить наблюдение ~10
//   минутами (5 для групп) — на странице без цифр.
// - Конкретной дистанции в канадских официальных источниках НЕ нашла.
//
// МЕДИА:
// - Видео нет: на Commons только ролик через подзорную трубу (сова —
//   крошечное пятно) и видео из зоопарков — не брала.
// - owl-hero.jpg — David Syzdek, CC BY-SA 2.0 — Delta, BC.
// - Галерея (все Канада):
//   * owl-kanata.jpg — Tim Carey, public domain — на столбе, Kanata, Онтарио;
//   * owl-quebec.jpg — Marc-Lautenbacher, CC BY-SA 4.0 — молодая сова в
//     поле, Квебек;
//   * owl-delta.jpg — David Syzdek, CC BY-SA 2.0 — две совы, Delta, BC.
// - Отклонено: совы из African Lion Safari и зоопарка Сен-Фелисьен.

export const SNOWY_OWL = {
  slug: 'snowy-owl',
  name: 'Snowy Owl',
  shortName: 'Snowy Owl',
  tag: 'Safe To Observe — Let It Rest',
  level: 'safe',
  image: '/wildlife/Snowy Owl/owl-hero.jpg',
  heroCredit: 'Photo: David Syzdek / Wikimedia Commons · CC BY-SA 2.0 · Delta, BC',
  description:
    "The white owl of the Arctic — and Quebec's official bird. Snowy owls nest on the open tundra and hunt lemmings by day as well as by night. Some winters, young owls drift south to open fields and shorelines across southern Canada, where a quiet, distant look is the best gift you can give them.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Wingspan', value: 'Almost 1.5 M' },
    { label: 'Weight', value: '1.8 – 2.3 KG' },
    { label: 'Eggs', value: '4 – 12' },
    { label: 'Main Prey', value: 'Lemmings' },
    { label: 'Hunts', value: 'Day And Night' },
    { label: 'Best Time South', value: 'Nov – Winter' },
  ],

  minDistanceWarning: {
    title: 'If It Reacts, You’re Too Close',
    text: 'Wintering owls need to rest and save energy. If an owl turns to watch you, shifts, or flies off, back away. Never bait owls with mice for photos.',
  },

  behaviorSection: {
    tag: 'Snowy Owl Behaviour',
    title: 'Ghost Of',
    highlight: 'The Tundra',
    accent: '#38a169',
    cards: [
      {
        title: 'Lemming Hunters',
        icon: 'Eye',
        description:
          'Lemmings are the main Arctic prey. Raising nine chicks takes about 120 kg of food — nearly 1,500 lemmings.',
      },
      {
        title: 'Awake By Day',
        icon: 'Sun',
        description:
          'Unlike most owls, snowy owls hunt in daylight as well as at dawn and dusk.',
      },
      {
        title: 'Eggs Follow Lemmings',
        icon: 'Calendar',
        description:
          'In good lemming years a female may lay 11–12 eggs; in poor years only 4–7, or none at all.',
      },
      {
        title: 'Nest On The Ground',
        icon: 'ShieldCheck',
        description:
          'The female scrapes a shallow hollow on a tundra knoll. Each pair defends 1–2 km².',
      },
      {
        title: 'White Males, Barred Females',
        icon: 'Wind',
        description:
          'Adult males can be almost pure white. Females and young birds are heavily barred with dark brown.',
      },
      {
        title: 'Winter Wanderers',
        icon: 'Compass',
        description:
          'From November, some owls — mostly first-year birds — move south. Numbers swing wildly from winter to winter.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Bait Owls',
      icon: 'XCircle',
      description: 'Throwing out mice for photos teaches owls to approach people and roads. Ontario Nature refuses photos taken by baiting.',
    },
    {
      title: 'Never Flush A Resting Owl',
      icon: 'AlertTriangle',
      description: 'Every time an owl is pushed to fly, it burns energy it needs to survive the winter.',
    },
    {
      title: 'Never Stop On Busy Roads',
      icon: 'Car',
      description: 'Owls are often hit by cars. Pull fully off the road — and never chase an owl along a highway.',
    },
    {
      title: 'Never Trespass For A Photo',
      icon: 'DoorOpen',
      description: 'Owls often rest on farm fields and private land. Watch from public roads and paths.',
    },
    {
      title: 'Never Approach A Nest',
      icon: 'Volume2',
      description: 'On the tundra, snowy owls will dive at and strike people who come too close to their nest.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From Your Car',
      icon: 'Car',
      description: 'Pull safely off the road, stay inside your car, and use binoculars.',
    },
    {
      title: 'Use A Long Lens',
      icon: 'Camera',
      description: 'Frame the owl in its landscape instead of walking closer.',
    },
    {
      title: 'Keep Visits Short',
      icon: 'Calendar',
      description: 'Watch for a few minutes and move on, so the owl can rest and hunt.',
    },
    {
      title: 'Keep Your Voice Down',
      icon: 'Ear',
      description: 'Quiet observers see natural behaviour — hunting, preening, and stretching.',
    },
    {
      title: 'Report Injured Owls',
      icon: 'Phone',
      description: 'Owls hit by vehicles or tangled in fences need help — call a local wildlife rehabilitation centre.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Snowy owls must hunt on their own. Feeding or baiting draws them toward people, cars, and roads — where collisions are a leading cause of death.',
    items: [
      { name: 'Live Mice', icon: '🐁', description: 'Baiting for photos harms owls' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Teaches owls to approach people' },
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Not natural food' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'No nutrition for owls' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Fishing Line', icon: '🪢', description: 'Can tangle wings and talons' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Can tangle or be swallowed' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Snowy Owls' },
  spotParks: [
    { name: 'Boundary Bay', province: 'British Columbia', season: 'Winter — some years, many owls', level: 'safe' },
    { name: 'Wolfe Island', province: 'Ontario', season: 'Winter — open fields', level: 'safe' },
    { name: 'Ottawa Valley Fields', province: 'Ontario', season: 'Winter — from November', level: 'safe' },
    { name: 'Arctic Tundra', province: 'Nunavut · NWT', season: 'Summer — nesting, guided trips only', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop Far Away',
      description:
        'Scan fence posts, poles, and open fields — then stop well back once you spot an owl.',
    },
    {
      title: 'Watch The Owl',
      description:
        'If it turns to stare at you, shifts, or looks ready to fly, you are too close — back off.',
    },
    {
      title: 'Stay Quiet And Brief',
      description:
        'Enjoy a few minutes through binoculars, then leave it in peace.',
    },
    {
      title: 'Report Problems',
      description:
        'Report injured owls or anyone baiting or harassing them to local wildlife authorities.',
    },
  ],

  gallery: [
    { src: '/wildlife/Snowy Owl/owl-kanata.jpg', credit: 'Tim Carey · Public domain · Kanata, Ontario' },
    { src: '/wildlife/Snowy Owl/owl-quebec.jpg', credit: 'Marc-Lautenbacher · CC BY-SA 4.0 · Quebec' },
    { src: '/wildlife/Snowy Owl/owl-delta.jpg', credit: 'David Syzdek · CC BY-SA 2.0 · Delta, BC' },
  ],
};

export default SNOWY_OWL;
