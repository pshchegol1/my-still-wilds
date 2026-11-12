// Humpback Whale — данные страницы /wildlife/humpback-whale
//
// Сделано самостоятельно без макета, по той же схеме, что Orca. Категория
// на /wildlife — Marine Life ("Safe to Observe"), поэтому level: 'safe'
// (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - DFO (canada.ca, 2018 и 2019; dfo-mpo "Approach distances"): Marine
//   Mammal Regulations — минимум 100 м до большинства китов, дельфинов и
//   морских свиней; 200 м — если кит отдыхает или с детёнышем; 400 м —
//   для исчезающих видов (белуха Св. Лаврентия, синий кит и т.п.). Первое
//   осуждение по новым правилам — штраф $2,000 гиду за подход к горбачу
//   ближе 100 м (Work Channel у Принс-Руперта, BC).
// - DFO / SARA: северотихоокеанская популяция горбачей была в списке
//   Threatened (2005), затем переведена в Special Concern; более 20,000
//   северотихоокеанских горбачей проводят лето у берегов BC.
// - Washington Dept. of Fish and Wildlife (обзор вида): самки в среднем
//   12 м, до 18 м и до 40,000 кг; самцы на 1-1.5 м короче.
// - NOAA: до моратория на коммерческий китобойный промысел (1985) все
//   популяции сократились, большинство — более чем на 95%; самые длинные
//   грудные плавники среди китов (NOAA Sanctuaries); часто выпрыгивают и
//   бьют по воде плавниками и хвостом.
// - Пение и кормёжка "пузырьковой сетью" — общеизвестно, подтверждено
//   фото/видео с Commons (Аляска, Тонга); формулировки осторожные.
//
// МЕДИА:
// - humpback-hero.mp4 — "Humpback whale lobtailing in slow motion",
//   Giles Laurent, Wikimedia Commons, CC BY-SA 4.0 — горбач бьёт хвостом
//   по воде, замедленная съёмка, Ísafjarðardjúp (Исландия); 4K → 1600 px.
//   Дрон-видео NOAA (Гавайи) не взяла — служебная надпись в кадре.
// - humpback-hero.jpg — Buiobuione, CC BY-SA 4.0, хвост горбача, BC.
// - Галерея:
//   * humpback-fluke.jpg — Buiobuione, CC BY-SA 4.0, BC;
//   * humpback-calm.jpg — Buiobuione, CC BY-SA 4.0, BC;
//   * humpback-bubblenet.jpg — Evadb, public domain, кормёжка
//     "пузырьковой сетью", Lynn Canal у Джуно (Аляска).

export const HUMPBACK_WHALE = {
  slug: 'humpback-whale',
  name: 'Humpback Whale',
  shortName: 'Humpback',
  tag: 'Safe To Observe — From A Boat, At A Distance',
  level: 'safe',
  image: '/wildlife/Humpback Whale/humpback-hero.jpg',
  heroVideo: '/wildlife/Humpback Whale/humpback-hero.mp4',
  heroCredit: 'Photo: Buiobuione / Wikimedia Commons · CC BY-SA 4.0 · British Columbia',
  heroVideoCredit: 'Video: Giles Laurent / Wikimedia Commons · CC BY-SA 4.0 · Iceland',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The acrobat of the open ocean — a 40-tonne whale that leaps clear of the water, slaps its giant flippers, and sings long, haunting songs. Humpbacks were hunted almost to extinction, but they have made a remarkable comeback along both of Canada's coasts.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Length', value: 'Up To 18 M' },
    { label: 'Weight', value: 'Up To 40 Tonnes' },
    { label: 'In BC Each Summer', value: '20,000+' },
    { label: 'Min. Distance', value: '100 M By Law' },
    { label: 'Coasts', value: 'Pacific & Atlantic' },
    { label: 'Status (Pacific)', value: 'Special Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres — By Law',
    text: 'Canada’s Marine Mammal Regulations require 100 m from most whales, and 200 m if the whale is resting or with a calf.',
  },

  behaviorSection: {
    tag: 'Humpback Whale Behaviour',
    title: 'Giants That',
    highlight: 'Leap And Sing',
    accent: '#38a169',
    cards: [
      {
        title: 'Breaching',
        icon: 'ArrowDown',
        description:
          'Weighing up to 40 tonnes doesn’t stop humpbacks from launching almost their whole body out of the water.',
      },
      {
        title: 'The Longest Flippers',
        icon: 'Eye',
        description:
          'Humpbacks have the longest pectoral fins of any whale, and they often slap them — and their tails — on the surface.',
      },
      {
        title: 'Bubble-Net Feeding',
        icon: 'UsersThreeIcon',
        description:
          'Groups of humpbacks blow rings of bubbles to trap schools of fish, then lunge up through the middle with mouths wide open.',
      },
      {
        title: 'Whale Song',
        icon: 'Volume2',
        description:
          'Humpbacks are famous for long, complex songs that can carry for great distances underwater.',
      },
      {
        title: 'Long-Distance Travellers',
        icon: 'Compass',
        description:
          'Humpbacks feed in cold Canadian waters in summer and migrate to warm southern waters to breed in winter.',
      },
      {
        title: 'Back From The Brink',
        icon: 'ShieldCheck',
        description:
          'Whaling cut most populations by more than 95%. Since protection, humpbacks have returned — over 20,000 now spend summers off BC.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Closer Than 100 M',
      icon: 'XCircle',
      description: 'It’s the law in Canada. In 2019 a BC tour guide was fined $2,000 for getting too close to a humpback.',
    },
    {
      title: 'Never Approach A Mother And Calf',
      icon: 'Users',
      description: 'The minimum distance doubles to 200 m when a whale is resting or with its calf.',
    },
    {
      title: 'Never Cut Across A Whale’s Path',
      icon: 'Car',
      description: 'Don’t position your boat in front of whales or between them. Let them choose where they go.',
    },
    {
      title: 'Never Swim With Or Feed Whales',
      icon: 'Fish',
      description: 'Swimming with, feeding, or interacting with marine mammals counts as disturbance under Canadian law.',
    },
    {
      title: 'Never Fly Drones Low Over Whales',
      icon: 'Volume2',
      description: 'Low aircraft and drones near whales are restricted under the Marine Mammal Regulations.',
    },
  ],

  alwaysDo: [
    {
      title: 'Choose A Responsible Tour',
      icon: 'ShieldCheck',
      description: 'Look for operators that follow the 100 m rule and slow down near whales.',
    },
    {
      title: 'Slow Down When You See A Blow',
      icon: 'Car',
      description: 'If you see a spout, tail, or fin, reduce speed and watch where the whale is heading.',
    },
    {
      title: 'Put Engines In Neutral If One Surfaces Near You',
      icon: 'AlertTriangle',
      description: 'If a whale comes close to your boat, stop and wait until it moves away.',
    },
    {
      title: 'Watch From Shore',
      icon: 'Eye',
      description: 'Headlands in BC, Newfoundland, and the Gulf of St. Lawrence offer great shore-based whale watching.',
    },
    {
      title: 'Report Entangled Or Injured Whales',
      icon: 'Phone',
      description: 'Never try to free an entangled whale yourself. Report it to DFO or a marine mammal response line.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Whales that associate boats with food face a much higher risk of ship strikes.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never throw fish to whales' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait onboard and secured' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Pollutes the water' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws wildlife to boats' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Whales can swallow floating plastic' },
      { name: 'Fishing Line And Rope', icon: '🪢', description: 'Entanglement is a major threat to humpbacks' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful litter in the ocean' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything from your boat' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Humpback Whales' },
  spotParks: [
    { name: 'Pacific Rim National Park Reserve', province: 'British Columbia', season: 'Spring to fall — tours from Tofino & Ucluelet', level: 'safe' },
    { name: 'Gwaii Haanas National Park Reserve', province: 'British Columbia', season: 'Summer — Haida Gwaii waters', level: 'safe' },
    { name: 'Saguenay–St. Lawrence Marine Park', province: 'Quebec', season: 'Summer to fall — Tadoussac', level: 'safe' },
    { name: 'Witless Bay Ecological Reserve', province: 'Newfoundland', season: 'June to August — capelin season', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Slow Down And Watch',
      description:
        'When you spot a blow or tail, slow your boat and note which way the whale is moving.',
    },
    {
      title: 'Keep 100 Metres Or More',
      description:
        'Stay at least 100 m away — 200 m if the whale is resting or with a calf. Approach from the side, never head-on.',
    },
    {
      title: 'If It Surfaces Near You — Stop',
      description:
        'Put the engine in neutral and wait until the whale is well clear before moving again.',
    },
    {
      title: 'Report Problems',
      description:
        'Report entangled, injured, or dead whales — and anyone harassing whales — to DFO.',
    },
  ],

  gallery: [
    { src: '/wildlife/Humpback Whale/humpback-fluke.jpg', credit: 'Buiobuione · CC BY-SA 4.0 · British Columbia' },
    { src: '/wildlife/Humpback Whale/humpback-bubblenet.jpg', credit: 'Evadb · Public domain · Bubble-net feeding, Alaska' },
    { src: '/wildlife/Humpback Whale/humpback-calm.jpg', credit: 'Buiobuione · CC BY-SA 4.0 · British Columbia' },
  ],
};

export default HUMPBACK_WHALE;
