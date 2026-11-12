// Chipmunk — данные страницы /wildlife/chipmunk
//
// Сделано самостоятельно без макета, по той же схеме, что Red Squirrel.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет). Основной вид —
// восточный бурундук (Tamias striatus) юго-востока Канады; на западе и
// севере живут другие виды, например малый бурундук (Neotamias minimus) —
// он в галерее (BC).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Connecticut DEEP (Chipmunk fact sheet): восточный бурундук — восток
//   США до Миссисипи и юго-восток Канады.
// - Virginia DWR: длина 8-10 дюймов (~20-25 см), вес 2.3-4.5 унции
//   (~65-128 г).
// - Tennessee TWRA: часто с набитыми защёчными мешками; осенью в пик
//   заготовок может собрать до 165 желудей в день.
// - Справочные источники (менее авторитетные, формулировки осторожные):
//   зимой впадают в спячку, но просыпаются каждые несколько дней, чтобы
//   поесть из запасов; норы до ~3 м длиной (10 футов).
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - chipmunk-hero.mp4 — "Tamias striatus", Cephas, Wikimedia Commons,
//   CC BY-SA 3.0 — восточный бурундук на ветке, заповедник Gault
//   (Mont Saint-Hilaire), Квебек; первые 20 с, обрезано до 1920x1080.
// - chipmunk-hero.jpg — Paul Harrison, CC BY-SA 4.0, восточное Онтарио
//   (тот же снимок, что на карточке /wildlife).
// - Галерея (все Канада):
//   * chipmunk-cheeks.jpg — Cephas, CC BY-SA 3.0, с набитыми щеками,
//     Cap Tourmente, Квебек;
//   * chipmunk-laval.jpg — Cephas, CC BY-SA 4.0, кампус Université Laval,
//     Квебек;
//   * chipmunk-least.jpg — trougnouf (Benoit Brummer), CC BY 4.0, малый
//     бурундук, Stawamus Chief, BC.
//   Видео малого бурундука с Sulphur Mountain (Banff) не взяла — он ест
//   у металлического ящика на плитке, похоже на подкормку.

export const CHIPMUNK = {
  slug: 'chipmunk',
  name: 'Chipmunk',
  shortName: 'Chipmunk',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Chipmunk/chipmunk-hero.jpg',
  heroVideo: '/wildlife/Chipmunk/chipmunk-hero.mp4',
  heroCredit: 'Photo: Paul Harrison / Wikimedia Commons · CC BY-SA 4.0 · Eastern Ontario',
  heroVideoCredit: 'Video: Cephas / Wikimedia Commons · CC BY-SA 3.0 · Gault Reserve, Quebec',
  description:
    "The striped, cheek-stuffing sprinter of Canada's forests and campgrounds. Chipmunks spend the fall hauling seeds and nuts into underground pantries, then wake through the winter to snack on them. Fun to watch — and best left wild.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '~65-130 G' },
    { label: 'Length', value: '~20-25 CM' },
    { label: 'Acorns Gathered', value: 'Up To 165 A Day' },
    { label: 'Winter', value: 'Sleeps, Wakes To Eat' },
    { label: 'Burrows', value: 'Up To ~3 M Long' },
    { label: 'Eastern Range', value: 'Southeastern Canada' },
  ],

  minDistanceWarning: {
    title: 'Don’t Feed — Watch From The Trail',
    text: 'Feeding wildlife is illegal in national parks. Hand-fed chipmunks lose their natural foraging habits and can bite.',
  },

  behaviorSection: {
    tag: 'Chipmunk Behaviour',
    title: 'Little Stripes,',
    highlight: 'Big Pantries',
    accent: '#38a169',
    cards: [
      {
        title: 'Built-In Shopping Bags',
        icon: 'ShieldCheck',
        description:
          'Stretchy cheek pouches let chipmunks carry seeds and nuts back to their burrow. You’ll often see them with comically full cheeks.',
      },
      {
        title: 'Fall Hoarders',
        icon: 'Calendar',
        description:
          'In peak season, a single chipmunk can gather as many as 165 acorns in a day to stock its winter food supply.',
      },
      {
        title: 'Underground Homes',
        icon: 'ArrowDown',
        description:
          'Chipmunks dig burrows that can run about 3 m long, with chambers for sleeping and storing food.',
      },
      {
        title: 'Winter Snack Breaks',
        icon: 'Moon',
        description:
          'Chipmunks hibernate, but not straight through: they wake every few days to eat from their stash before going back to sleep.',
      },
      {
        title: 'More Than One Species',
        icon: 'Compass',
        description:
          'The eastern chipmunk lives in southeastern Canada. Farther west and north you’ll meet other chipmunks, like the smaller least chipmunk.',
      },
      {
        title: 'Alarm Chips',
        icon: 'Volume2',
        description:
          'A sharp, repeated “chip” call warns of predators. If you hear it, a chipmunk has probably spotted you.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Chipmunks',
      icon: 'Trash2',
      description: 'Feeding wildlife is illegal in national parks, and handouts replace their natural diet.',
    },
    {
      title: 'Never Hand-Feed Or Pick One Up',
      icon: 'XCircle',
      description: 'Chipmunks have sharp teeth and will bite when grabbed or when fingers come near food.',
    },
    {
      title: 'Never Leave Snacks Unattended',
      icon: 'Trash2',
      description: 'Chipmunks raid picnic tables and chew into packs and tents in seconds.',
    },
    {
      title: 'Never Block A Burrow',
      icon: 'DoorOpen',
      description: 'Burrows hold food stores and young. Leave entrances untouched.',
    },
    {
      title: 'Never Let Dogs Dig Them Out',
      icon: 'DogIcon',
      description: 'Keep dogs leashed so they don’t destroy burrows or chase chipmunks.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch Quietly',
      icon: 'Eye',
      description: 'Sit still near logs and rocky edges — chipmunks soon go back to foraging in plain view.',
    },
    {
      title: 'Listen For The “Chip”',
      icon: 'Ear',
      description: 'A repeated chipping sound usually means a chipmunk is nearby on alert.',
    },
    {
      title: 'Zip Up Your Food',
      icon: 'ShieldCheck',
      description: 'Keep snacks sealed in your pack, cooler, or vehicle at picnic sites and campgrounds.',
    },
    {
      title: 'Use A Zoom Lens',
      icon: 'Camera',
      description: 'Chipmunks move fast. Stay put and let them come into the frame.',
    },
    {
      title: 'Wash Hands After Picnics',
      icon: 'ShieldCheck',
      description: 'Good hygiene keeps you safe around all small wildlife.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Hand-fed chipmunks crowd campsites, lose their natural foraging skills, and are more likely to bite.',
    items: [
      { name: 'Nuts And Trail Mix', icon: '🥜', description: 'The most common handout at campsites' },
      { name: 'Bread And Crackers', icon: '/icons/wildlife/🍞.png', description: 'Junk food that replaces their natural diet' },
      { name: 'Chips And Snacks', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws chipmunks to people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Seeds And Bird Seed', icon: '🌻', description: 'Feeders concentrate chipmunks in one place' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Chipmunks Scurry' },
  spotParks: [
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'Spring to fall — rocky trails and campgrounds', level: 'safe' },
    { name: 'La Mauricie National Park', province: 'Quebec', season: 'Spring to fall — mixed forest', level: 'safe' },
    { name: 'Gault Nature Reserve', province: 'Quebec', season: 'Spring to fall — Mont Saint-Hilaire forest', level: 'safe' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Summer — least chipmunks on mountain trails', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Watch',
      description:
        'Chipmunks are curious. Stay still and you may see one fill its cheeks right in front of you.',
    },
    {
      title: 'Keep Food Out Of Reach',
      description:
        'If one comes close, it is looking for a handout. Pack food away instead of offering it.',
    },
    {
      title: 'Don’t Touch',
      description:
        'Never try to grab or pet a chipmunk — bites happen fast.',
    },
    {
      title: 'If Bitten — Wash It',
      description:
        'Wash any bite or scratch with soap and water and see a health professional if needed.',
    },
  ],

  gallery: [
    { src: '/wildlife/Chipmunk/chipmunk-cheeks.jpg', credit: 'Cephas · CC BY-SA 3.0 · Cap Tourmente, Quebec' },
    { src: '/wildlife/Chipmunk/chipmunk-laval.jpg', credit: 'Cephas · CC BY-SA 4.0 · Quebec City' },
    { src: '/wildlife/Chipmunk/chipmunk-least.jpg', credit: 'Benoit Brummer · CC BY 4.0 · Least chipmunk, Squamish, BC' },
  ],
};

export default CHIPMUNK;
