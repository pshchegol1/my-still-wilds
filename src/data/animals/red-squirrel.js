// Red Squirrel — данные страницы /wildlife/red-squirrel
//
// Сделано самостоятельно без макета, по той же схеме, что Raccoon /
// Ground Squirrel. Категория на /wildlife — Small Mammals ("Safe to
// Observe"), поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
// Вид — американская красная белка (Tamiasciurus hudsonicus), обычная
// белка канадских лесов. НЕ путать с евразийской обыкновенной белкой
// (Sciurus vulgaris, с кисточками на ушах) — её в Канаде нет; именно она
// на картинке карточки Rectangle 231.png.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - University of Wisconsin–Stevens Point (Mammals of Wisconsin) и
//   справочные источники: вес ~141-312 г (обычно ~200-250 г); активна
//   днём; круглый год охраняет собственную территорию; в центре
//   территории — "midden" (кладовая): кучи чешуи от шишек бывают до 12 м
//   в поперечнике, осенью белка может запасти до 20,000 шишек; участок
//   ~0.5-1.5 га.
// - Kluane Red Squirrel Project (юго-запад Юкона, с 1987 года): семена
//   белой ели — больше 50% рациона белок в Юконе.
// - Численность помёта в надёжных источниках не нашла — НЕ указываю.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - rsq-hero.mp4 — "Red Squirrel - Tamiasciurus hudsonicus using
//   threatening behaviour video", Flickr gails_pictures, Wikimedia
//   Commons, CC BY 2.0 — дикая белка "ругается" на ветке, Jasper (Канада);
//   19.7 с.
// - Видео "American red squirrel" из Grands-Jardins не взяла — белка ест
//   рассыпанную на столе подкормку, а страница просит не кормить.
// - rsq-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, Moraine Lake, Banff NP.
// - Галерея (все Канада):
//   * rsq-banff.jpg — Charles J. Sharp, CC BY-SA 4.0, Banff;
//   * rsq-captourmente.jpg — Cephas, CC BY-SA 3.0, Cap Tourmente,
//     Квебек (снег);
//   * rsq-quebec.jpg — Wilfredor, CC0, ботанический сад Roger-Van den
//     Hende, Квебек.

export const RED_SQUIRREL = {
  slug: 'red-squirrel',
  name: 'Red Squirrel',
  shortName: 'Red Squirrel',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Red Squirrel/rsq-hero.jpg',
  heroVideo: '/wildlife/Red Squirrel/rsq-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Moraine Lake, Banff NP',
  heroVideoCredit: 'Video: gails_pictures / Flickr · CC BY 2.0 · Jasper, Canada',
  description:
    "The loud little guardian of Canada's conifer forests. The American red squirrel defends its patch of forest all year long, scolding anyone who comes near — and stockpiles thousands of spruce and pine cones to survive the winter.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '~140-310 G' },
    { label: 'Territory', value: '~0.5-1.5 HA' },
    { label: 'Cones Stored', value: 'Up To 20,000' },
    { label: 'Active', value: 'Daytime, Year-Round' },
    { label: 'Main Food', value: 'Conifer Seeds' },
    { label: 'Range', value: 'Forests Across Canada' },
  ],

  minDistanceWarning: {
    title: 'Don’t Feed — Watch From The Trail',
    text: 'Feeding wildlife is illegal in national parks. A squirrel that learns to beg loses its natural foraging habits and can bite.',
  },

  behaviorSection: {
    tag: 'Red Squirrel Behaviour',
    title: 'Small, Loud',
    highlight: 'And Territorial',
    accent: '#38a169',
    cards: [
      {
        title: 'A Year-Round Territory',
        icon: 'ShieldCheck',
        description:
          'Each red squirrel defends its own patch of forest — roughly 0.5 to 1.5 hectares — against other squirrels all year long.',
      },
      {
        title: 'The Midden',
        icon: 'Calendar',
        description:
          'At the heart of the territory is a midden: a cone stash surrounded by piles of discarded cone scales that can grow up to 12 m across.',
      },
      {
        title: 'Thousands Of Cones',
        icon: 'ArrowDown',
        description:
          'In a busy fall, one squirrel can store up to 20,000 cones to feed itself through the winter.',
      },
      {
        title: 'Spruce Seed Specialists',
        icon: 'Compass',
        description:
          'In the Yukon, white spruce seeds make up more than half of a red squirrel’s diet. Big cone years mean more squirrels.',
      },
      {
        title: 'The Scolding Chatter',
        icon: 'Volume2',
        description:
          'Red squirrels rattle, chatter, and stamp at intruders from a branch — often the first wildlife you’ll hear in a Canadian forest.',
      },
      {
        title: 'Decades Of Research',
        icon: 'Eye',
        description:
          'Scientists with the Kluane Red Squirrel Project have followed squirrels in southwest Yukon since 1987.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Red Squirrels',
      icon: 'Trash2',
      description: 'Handouts replace their natural diet and teach them to approach people — feeding wildlife is illegal in national parks.',
    },
    {
      title: 'Never Try To Pick One Up',
      icon: 'XCircle',
      description: 'Squirrels have sharp teeth and claws and will bite to defend themselves.',
    },
    {
      title: 'Never Disturb A Midden',
      icon: 'DoorOpen',
      description: 'A squirrel’s cone stash is its winter food supply. Don’t dig through or remove cones from middens.',
    },
    {
      title: 'Never Leave Food Unattended',
      icon: 'Trash2',
      description: 'Squirrels will chew into packs and tents to get at snacks.',
    },
    {
      title: 'Never Let Dogs Chase Them',
      icon: 'DogIcon',
      description: 'Keep dogs leashed so they don’t harass squirrels or other forest wildlife.',
    },
  ],

  alwaysDo: [
    {
      title: 'Listen For The Chatter',
      icon: 'Ear',
      description: 'A rattling call from the trees usually means a red squirrel has spotted you — stop and look up.',
    },
    {
      title: 'Look For Cone Piles',
      icon: 'Eye',
      description: 'Heaps of cone scales at the base of conifers mark a squirrel’s midden. Watch nearby quietly.',
    },
    {
      title: 'Zip Up Your Pack',
      icon: 'ShieldCheck',
      description: 'Keep food sealed in your pack or vehicle, especially at picnic sites.',
    },
    {
      title: 'Use A Zoom Lens',
      icon: 'Camera',
      description: 'Red squirrels are fast and curious. Stay put and let them come into view on their own.',
    },
    {
      title: 'Wash Hands After Outdoor Meals',
      icon: 'ShieldCheck',
      description: 'Basic hygiene keeps you safe around all wildlife and their droppings.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Squirrels that learn to beg crowd picnic areas, lose their natural foraging skills, and are more likely to bite.',
    items: [
      { name: 'Nuts And Trail Mix', icon: '🥜', description: 'The most common handout on trails' },
      { name: 'Bread And Crackers', icon: '/icons/wildlife/🍞.png', description: 'Junk food that replaces their natural diet' },
      { name: 'Chips And Snacks', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws squirrels to people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Seeds And Bird Seed', icon: '🌻', description: 'Feeders concentrate squirrels in one place' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Red Squirrels Chatter' },
  spotParks: [
    { name: 'Kluane National Park', province: 'Yukon', season: 'Year-round — white spruce forest', level: 'safe' },
    { name: 'Jasper National Park', province: 'Alberta', season: 'Year-round — conifer forest trails', level: 'safe' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Year-round — around lakes and trails', level: 'safe' },
    { name: 'Parc national des Grands-Jardins', province: 'Quebec', season: 'Year-round — boreal forest', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Look Up',
      description:
        'If you hear chattering, a squirrel is probably watching you from a branch nearby.',
    },
    {
      title: 'Stay Still And Enjoy',
      description:
        'Quiet watchers often get a close view as the squirrel goes back to its cones.',
    },
    {
      title: 'Don’t Offer Food',
      description:
        'Even if it comes close, keep your hands and snacks to yourself.',
    },
    {
      title: 'Move On Calmly',
      description:
        'The scolding is just territory defence. Continue along the trail and it will settle down.',
    },
  ],

  gallery: [
    { src: '/wildlife/Red Squirrel/rsq-banff.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Banff NP' },
    { src: '/wildlife/Red Squirrel/rsq-captourmente.jpg', credit: 'Cephas · CC BY-SA 3.0 · Cap Tourmente, Quebec' },
    { src: '/wildlife/Red Squirrel/rsq-quebec.jpg', credit: 'Wilfredor · CC0 · Quebec City' },
  ],
};

export default RED_SQUIRREL;
