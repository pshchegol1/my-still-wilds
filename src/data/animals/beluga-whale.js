// Beluga Whale — данные страницы /wildlife/beluga-whale
//
// Сделано самостоятельно без макета, по той же схеме, что Humpback Whale.
// Категория на /wildlife — Marine Life ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет). Карточка:
// "Churchill · St. Lawrence" — на странице обе популяции.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - DFO (Quebec region, "Boaters and belugas: keep your distance",
//   "Rules of navigation around beluga whales"): для белух
//   Св. Лаврентия минимальная дистанция — 400 м (обязательна для
//   исчезающих/угрожаемых видов, включая белуху Св. Лаврентия и синего
//   кита); если белухи подходят к судну — отойти и держать 400 м.
//   Поправка 2018 года к Marine Mammal Regulations.
// - Marine Mammal Regulations, Schedule VI: для отдельных участков эстуария
//   р. Черчилл и р. Сил — отдельная дистанция 50 м (как она применяется
//   — на странице описано осторожно, "special rules").
// - SARA: белуха Св. Лаврентия — Endangered (в 2005 была Threatened).
// - Western Hudson Bay: крупнейшая популяция белух в мире; ~55,000
//   приходят летом (AFP / Arab News); в эстуарии р. Черчилл летом —
//   тысячи (оценки расходятся, на странице "thousands").
// - Численность белух Св. Лаврентия (~900) — только из туристического
//   источника, на странице НЕ указываю.
// - Длину/вес и прозвище "canary of the sea" в официальных источниках не
//   подтвердила — прозвище есть в подписи фото на Commons ("Canaries of
//   the sea"), на странице сформулировано как прозвище.
//
// МЕДИА:
// - Свободного видео диких белух в хорошем качестве на Commons нет (только
//   аквариумы и научный ролик 960 px) — heroVideo не задан.
// - beluga-hero.jpg — Ansgar Walk, CC BY-SA 2.5, белуха в р. Черчилл у
//   Гудзонова залива (Манитоба), 1999.
// - Галерея (все Канада):
//   * beluga-pod.jpg — TravelingOtter, CC BY 2.0, группа белух, Черчилл;
//   * beluga-tadoussac.jpg — Luca Galuzzi, CC BY-SA 2.5, Тадуссак, Квебек;
//   * beluga-churchill.jpg — TravelingOtter, CC BY 2.0, Черчилл.

export const BELUGA_WHALE = {
  slug: 'beluga-whale',
  name: 'Beluga Whale',
  shortName: 'Beluga',
  tag: 'Safe To Observe — From A Boat, At A Distance',
  level: 'safe',
  image: '/wildlife/Beluga Whale/beluga-hero.jpg',
  heroCredit: 'Photo: Ansgar Walk / Wikimedia Commons · CC BY-SA 2.5 · Churchill River, Manitoba',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The white whale of the North, nicknamed the “canary of the sea” for its chirps and whistles. Each summer thousands of belugas crowd into the warm river mouths of western Hudson Bay — while a small, endangered population lives year-round in the St. Lawrence and is protected by some of Canada's strictest boating rules.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Colour', value: 'White Adults' },
    { label: 'Hudson Bay Summer', value: '~55,000' },
    { label: 'St. Lawrence', value: 'Endangered' },
    { label: 'St. Lawrence Distance', value: '400 M By Law' },
    { label: 'Nickname', value: 'Canary Of The Sea' },
    { label: 'Best Viewing', value: 'July-August' },
  ],

  minDistanceWarning: {
    title: 'St. Lawrence: 400 Metres — By Law',
    text: 'St. Lawrence belugas are endangered. Boaters must stay at least 400 m away — and move off if belugas approach.',
  },

  behaviorSection: {
    tag: 'Beluga Behaviour',
    title: 'The White Whale',
    highlight: 'Of The North',
    accent: '#38a169',
    cards: [
      {
        title: 'Canary Of The Sea',
        icon: 'Volume2',
        description:
          'Belugas are famous for their chirps, clicks, and whistles.',
      },
      {
        title: 'Summer In The River Mouths',
        icon: 'Calendar',
        description:
          'Every summer, belugas gather in the estuaries of western Hudson Bay — the Churchill, Seal, and Nelson rivers — to feed, moult, and raise calves.',
      },
      {
        title: 'The World’s Largest Population',
        icon: 'UsersThreeIcon',
        description:
          'Western Hudson Bay hosts the biggest beluga population on Earth — tens of thousands of whales each summer.',
      },
      {
        title: 'An Endangered Neighbour',
        icon: 'AlertTriangle',
        description:
          'The St. Lawrence belugas live year-round near Tadoussac and the Saguenay Fjord. They are listed as endangered under Canada’s Species at Risk Act.',
      },
      {
        title: 'White As Adults',
        icon: 'Eye',
        description:
          'Belugas are born grey and slowly turn white as they grow — perfect camouflage among sea ice.',
      },
      {
        title: 'No Dorsal Fin',
        icon: 'ShieldCheck',
        description:
          'Instead of a tall fin, belugas have a low ridge on their back, which helps them swim under ice.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach St. Lawrence Belugas Within 400 M',
      icon: 'XCircle',
      description: 'It’s the law. If belugas approach your boat, move away and keep 400 m.',
    },
    {
      title: 'Never Chase Or Follow A Pod',
      icon: 'Car',
      description: 'Let belugas choose where they go. Never cut through a group or block their path.',
    },
    {
      title: 'Never Swim With Belugas',
      icon: 'Fish',
      description: 'Swimming with, touching, or interacting with marine mammals counts as disturbance under Canadian law.',
    },
    {
      title: 'Never Feed Belugas',
      icon: 'Trash2',
      description: 'Feeding or attracting marine mammals is illegal under Canada’s Marine Mammal Regulations.',
    },
    {
      title: 'Never Make Loud Noise Near Them',
      icon: 'Volume2',
      description: 'Belugas rely on sound to communicate and find food. Keep engines low and avoid revving near whales.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From Shore At Tadoussac',
      icon: 'Eye',
      description: 'Shore lookouts on the Saguenay Fjord often give great views of St. Lawrence belugas — with zero disturbance.',
    },
    {
      title: 'Choose A Licensed Tour In Churchill',
      icon: 'ShieldCheck',
      description: 'Churchill River tours run under special federal rules for that estuary. Go with a licensed operator.',
    },
    {
      title: 'Slow Down In Beluga Areas',
      icon: 'Car',
      description: 'Follow posted speed limits in the St. Lawrence Estuary and Saguenay Fjord.',
    },
    {
      title: 'Turn Off Your Engine If They Come Close',
      icon: 'AlertTriangle',
      description: 'In Churchill, belugas are often curious. Stay still and let them pass on their own.',
    },
    {
      title: 'Report Stranded Or Injured Belugas',
      icon: 'Phone',
      description: 'In Quebec, call the marine mammal emergency network. Elsewhere, contact DFO.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Belugas that associate boats with food face higher risks from vessel strikes and noise.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never throw fish to belugas' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured on board' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Pollutes the water' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws wildlife to boats' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Whales can swallow floating plastic' },
      { name: 'Fishing Line And Rope', icon: '🪢', description: 'Entanglement hurts whales' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful litter in the ocean' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything from your boat' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Belugas' },
  spotParks: [
    { name: 'Churchill River Estuary', province: 'Manitoba', season: 'July-August — thousands of belugas', level: 'safe' },
    { name: 'Saguenay–St. Lawrence Marine Park', province: 'Quebec', season: 'Summer — keep 400 m, endangered population', level: 'caution' },
    { name: 'Saguenay Fjord National Park', province: 'Quebec', season: 'Summer — Baie-Sainte-Marguerite lookout', level: 'safe' },
    { name: 'Seal River Estuary', province: 'Manitoba', season: 'Summer — remote, with guides', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Slow Down And Watch',
      description:
        'When you see white backs in the water, slow down and take note of where the pod is heading.',
    },
    {
      title: 'Know Which Rules Apply',
      description:
        'In the St. Lawrence, keep 400 m. In the Churchill River, follow your licensed operator and the special rules for that estuary.',
    },
    {
      title: 'If They Approach — Stay Calm',
      description:
        'Put the engine in neutral or move away slowly. Never chase or try to touch them.',
    },
    {
      title: 'Report Problems',
      description:
        'Report stranded, injured, or harassed belugas to DFO or the regional marine mammal response line.',
    },
  ],

  gallery: [
    { src: '/wildlife/Beluga Whale/beluga-pod.jpg', credit: 'TravelingOtter · CC BY 2.0 · Churchill, Manitoba' },
    { src: '/wildlife/Beluga Whale/beluga-tadoussac.jpg', credit: 'Luca Galuzzi · CC BY-SA 2.5 · Tadoussac, Quebec' },
    { src: '/wildlife/Beluga Whale/beluga-churchill.jpg', credit: 'TravelingOtter · CC BY 2.0 · Churchill, Manitoba' },
  ],
};

export default BELUGA_WHALE;
