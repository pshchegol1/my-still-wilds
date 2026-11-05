// Porcupine — данные страницы /wildlife/porcupine
//
// Сделано самостоятельно без макета, по той же схеме, что Snowshoe Hare.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Porcupine": считается, что иголок
//   больше 30,000; самые длинные на спине и хвосте — до 12.5 см, на морде
//   ~1.2 см, на брюхе, ногах и носу их нет; на кончике десятки мелких
//   зазубрин, которые во влажной плоти разбухают и затягивают иглу
//   глубже; за одну встречу могут остаться сотни игл, на их месте
//   вырастают новые; иглы НЕ выстреливаются — отрываются при ударе
//   хвостом и лишь "кажется", что летят; при угрозе горбится, прячет
//   голову, поворачивается задом, топает, стучит зубами; второй по
//   величине грызун Канады после бобра; самцы в среднем ~5.5 кг, самки
//   ~4.5 кг; длина 68-100 см; зимой ест внутреннюю кору (сосны, тсуга),
//   весной кору клёна, серёжки и листья, летом травы и водные растения,
//   осенью буковые орешки и жёлуди; грызёт дерево, кожу, кости, сброшенные
//   рога — возможно, ради соли и чтобы стачивать зубы; хорошо лазает;
//   рождение март-май, обычно один детёныш ~0.4 кг, мягкие иглы твердеют
//   за несколько часов, лазает через пару дней; главный охотник — илька
//   (fisher), иглы находили у койотов, пум, рысей, лис, медведей, волков,
//   филинов.
// - Совет про собак (не трогать иглы самим, ехать к ветеринару) — общая
//   практика; формулировка осторожная.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - porcupine-hero.mp4 — "Erethizon dorsatum North American Porcupine
//   Eating", Tyler Savitski, Wikimedia Commons, CC BY-SA 4.0 — дикий
//   дикобраз ест листья, State Game Land 57, Пенсильвания (США); 4K
//   исходник, уменьшен до 1920, первые 20 с.
// - porcupine-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, Yoho NP, BC.
// - Галерея (все Канада):
//   * porcupine-quills.jpg — Charles J. Sharp, CC BY-SA 4.0, иглы со
//     спины, Yoho NP;
//   * porcupine-tree.jpg — D. Gordon E. Robertson, CC BY-SA 3.0, спит на
//     дереве, Оттава;
//   * porcupine-calgary.jpg — David A Mitchell (Калгари), CC BY 2.0.

export const PORCUPINE = {
  slug: 'porcupine',
  name: 'Porcupine',
  shortName: 'Porcupine',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Porcupine/porcupine-hero.jpg',
  heroVideo: '/wildlife/Porcupine/porcupine-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Yoho NP, BC',
  heroVideoCredit: 'Video: Tyler Savitski / Wikimedia Commons · CC BY-SA 4.0',
  description:
    "Canada's second-largest rodent wears a coat of more than 30,000 barbed quills. Porcupines are slow, peaceful plant-eaters — they can't throw their quills, but anyone who gets too close, especially a curious dog, can end up with a face full of them.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Quills', value: '30,000+' },
    { label: 'Longest Quills', value: 'Up To 12.5 CM' },
    { label: 'Weight', value: '~4.5-5.5 KG' },
    { label: 'Length', value: '68-100 CM' },
    { label: 'Young', value: '1, March-May' },
    { label: 'Diet', value: 'Bark & Plants' },
  ],

  minDistanceWarning: {
    title: 'Keep Your Distance',
    text: 'Porcupines can’t throw quills, but a swing of the tail can drive hundreds into anyone close. Keep dogs leashed and well away.',
  },

  behaviorSection: {
    tag: 'Porcupine Behaviour',
    title: 'Armed —',
    highlight: 'But Peaceful',
    accent: '#38a169',
    cards: [
      {
        title: '30,000 Barbed Quills',
        icon: 'ShieldCheck',
        description:
          'Each quill ends in tiny barbs that swell once inside flesh, working the quill deeper. Lost quills are simply replaced.',
      },
      {
        title: 'They Can’t Throw Quills',
        icon: 'XCircle',
        description:
          'Quills come loose when the porcupine lashes its tail, which can make them look like they are flying — but they are never shot out.',
      },
      {
        title: 'Warning Show',
        icon: 'Volume2',
        description:
          'A threatened porcupine hunches up, tucks its head, turns its back, stamps its feet, and chatters its teeth. That is your signal to leave.',
      },
      {
        title: 'Bark Eater And Climber',
        icon: 'ArrowDown',
        description:
          'In winter porcupines live on inner tree bark, and they climb well thanks to padded, gripping hind feet.',
      },
      {
        title: 'Craving Salt',
        icon: 'AlertTriangle',
        description:
          'Porcupines gnaw wood, leather, bones, and shed antlers — likely for salt. Sweaty tool handles, boots, and packs can be targets.',
      },
      {
        title: 'Born With Soft Quills',
        icon: 'Calendar',
        description:
          'A single baby is born in spring with soft quills that harden within hours, and it can climb after a couple of days.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Let Your Dog Near A Porcupine',
      icon: 'DogIcon',
      description: 'Dogs are the most common victims. Quills in the face and mouth are painful and can work deeper over time.',
    },
    {
      title: 'Never Try To Touch Or Pick One Up',
      icon: 'XCircle',
      description: 'A porcupine will turn its back and swing its tail at anything that reaches toward it.',
    },
    {
      title: 'Never Corner A Porcupine',
      icon: 'DoorOpen',
      description: 'Give it a clear way out. A trapped porcupine has only one defence — its quills.',
    },
    {
      title: 'Never Leave Salty Gear Out',
      icon: 'Trash2',
      description: 'Sweaty boots, packs, paddles, and tool handles can be chewed overnight. Store gear inside.',
    },
    {
      title: 'Never Pull Quills Out Of Your Dog Yourself',
      icon: 'AlertTriangle',
      description: 'Barbed quills break and work deeper. Take your dog to a veterinarian as soon as possible.',
    },
  ],

  alwaysDo: [
    {
      title: 'Look Up In The Trees',
      icon: 'Eye',
      description: 'Porcupines often rest high in trees during the day. Look for a dark ball in the branches and chewed bark below.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Especially at dusk and night, when porcupines are moving on the ground.',
    },
    {
      title: 'Store Gear Inside',
      icon: 'ShieldCheck',
      description: 'Keep boots, packs, and anything salty in your tent, car, or cabin.',
    },
    {
      title: 'Drive Slowly At Night',
      icon: 'Car',
      description: 'Slow-moving porcupines often cross roads after dark.',
    },
    {
      title: 'Get Medical Help For Quills',
      icon: 'Phone',
      description: 'If you or your pet are quilled, see a doctor or vet — quills should be removed whole.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Porcupines that learn to visit campsites for food and salt chew gear and meet dogs — with painful results for both.',
    items: [
      { name: 'Salt And Salty Snacks', icon: '🧂', description: 'Draws porcupines to campsites and gear' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Teaches porcupines to approach people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wild animals' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Pet Food', icon: '🐾', description: 'Brings porcupines — and dogs — together' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Porcupines Live' },
  spotParks: [
    { name: 'Yoho National Park', province: 'British Columbia', season: 'Spring to fall — forest edges', level: 'safe' },
    { name: 'Forillon National Park', province: 'Quebec', season: 'Summer — forest trails', level: 'safe' },
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'Year-round — look up in the trees', level: 'safe' },
    { name: 'Riding Mountain National Park', province: 'Manitoba', season: 'Year-round — mixed forest', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Leash Your Dog',
      description:
        'Grab your dog right away and keep it close. Most quill injuries happen to dogs that rush in.',
    },
    {
      title: 'Give It Space',
      description:
        'Back away and let the porcupine waddle off or climb a tree. Don’t block its path.',
    },
    {
      title: 'Watch For The Warning',
      description:
        'Chattering teeth, raised quills, and a turned back mean it feels threatened. Move farther away.',
    },
    {
      title: 'If Quilled — Get Help',
      description:
        'Don’t cut or yank the quills. See a doctor, or take your pet to a vet, as soon as possible.',
    },
  ],

  gallery: [
    { src: '/wildlife/Porcupine/porcupine-quills.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Yoho NP, BC' },
    { src: '/wildlife/Porcupine/porcupine-tree.jpg', credit: 'D. Gordon E. Robertson · CC BY-SA 3.0 · Ottawa' },
    { src: '/wildlife/Porcupine/porcupine-calgary.jpg', credit: 'David A Mitchell · CC BY 2.0' },
  ],
};

export default PORCUPINE;
