// Bowhead Whale — данные страницы /wildlife/bowhead-whale
//
// Сделано самостоятельно без макета, по той же схеме, что Blue Whale /
// Narwhal. Категория на /wildlife — Marine Life ("Safe to Observe"),
// поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - ECCC / SARA, "Bowhead whale in eastern Canada and west Greenland:
//   consultation document" и Ninginganiq National Wildlife Area
//   (canada.ca): популяция Eastern Canada–West Greenland — одна большая
//   популяция, общая для Канады и Западной Гренландии; сильно истощена
//   коммерческим китобойным промыслом в XIX-XX веках; COSEWIC 2009 —
//   Special Concern; в Ninginganiq (Isabella Bay, восточный Баффин)
//   гренландские киты бывают с конца августа до начала октября; инуиты
//   добывают их тысячелетиями.
// - NOAA Fisheries "Bowhead whale": могут жить больше 200 лет (по новым
//   методам определения возраста; осторожнее — "well over 100 years" по
//   каменным наконечникам гарпунов); череп позволяет пробивать лёд
//   толщиной ~20 см (8 дюймов), по рассказам китобоев — до ~60 см;
//   слой жира 43-48 см (17-19 дюймов) — толще, чем у любого кита; фильтруют
//   воду через китовый ус.
// - Hinterland Who's Who (CWF): самый длинный китовый ус среди живущих
//   китов — до 4 м.
// - DFO: Marine Mammal Regulations — 100 м от большинства китов, 200 м
//   если кит отдыхает или с детёнышем.
//
// МЕДИА:
// - Хорошего свободного видео нет (единственное — "Bowhead whales in
//   Alaska", Kiliii Yuyan: киты очень далеко, в большинстве кадров пустое
//   море) — heroVideo не задан.
// - bowhead-hero.jpg — "Bowhead-1 Kate Stafford edit", Bering Land Bridge
//   National Preserve (NPS, Flickr), CC BY-SA 2.0 — кит выпрыгивает,
//   Берингов пролив (Аляска), 2011.
// - Галерея:
//   * bowhead-ice.jpg — Vicki Beaver, Alaska Fisheries Science Center /
//     NOAA, public domain — кит у кромки льда, вид сверху;
//   * bowhead-tailslap.jpg — Olga Shpak (IEE RAS), CC BY-SA 3.0 — удар
//     хвостом, Охотское море; маленькое разрешение (960 px);
//   * bowhead-spyhop.jpg — Olga Shpak (IEE RAS), CC BY-SA 3.0 — кит
//     поднимает голову из воды, Охотское море; маленькое разрешение.
//   Канадских свободных фото живых гренландских китов на Commons нет —
//   единственное канадское фото снято на инуитской охоте (Иглулик), его
//   не брала.

export const BOWHEAD_WHALE = {
  slug: 'bowhead-whale',
  name: 'Bowhead Whale',
  shortName: 'Bowhead',
  tag: 'Safe To Observe — From A Boat, At A Distance',
  level: 'safe',
  image: '/wildlife/Bowhead Whale/bowhead-hero.jpg',
  heroCredit: 'Photo: Kate Stafford / Bering Land Bridge NP (NPS) · CC BY-SA 2.0',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The great whale of the Arctic ice. Bowheads may live more than 200 years, carry the longest baleen of any whale, and can break through sea ice with their massive heads. Nearly wiped out by commercial whaling, they are slowly recovering in the waters of Nunavut.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Lifespan', value: 'May Exceed 200 Years' },
    { label: 'Baleen', value: 'Up To 4 M' },
    { label: 'Blubber', value: 'Up To ~48 CM' },
    { label: 'Breaks Ice', value: '~20 CM+' },
    { label: 'Range', value: 'Arctic Canada' },
    { label: 'Status (2009)', value: 'Special Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres — By Law',
    text: 'Canada’s Marine Mammal Regulations require 100 m from whales, and 200 m if they are resting or with a calf.',
  },

  behaviorSection: {
    tag: 'Bowhead Behaviour',
    title: 'Giant Of',
    highlight: 'The Arctic Ice',
    accent: '#38a169',
    cards: [
      {
        title: 'Two Centuries Old',
        icon: 'Calendar',
        description:
          'Studies suggest bowheads may live more than 200 years — stone harpoon tips have even been found in harvested whales.',
      },
      {
        title: 'Ice-Breaking Heads',
        icon: 'ShieldCheck',
        description:
          'A huge, arched skull lets bowheads break breathing holes through sea ice about 20 cm thick — and, by some hunters’ accounts, much thicker.',
      },
      {
        title: 'The Longest Baleen',
        icon: 'Fish',
        description:
          'Bowheads have the longest baleen of any living whale — up to 4 metres — to strain tiny prey from huge mouthfuls of water.',
      },
      {
        title: 'The Thickest Blubber',
        icon: 'Wind',
        description:
          'Their blubber can be 43–48 cm thick — thicker than any other whale’s — keeping them warm in icy water.',
      },
      {
        title: 'Shared With Greenland',
        icon: 'Compass',
        description:
          'Bowheads of the eastern Canadian Arctic form one large population that travels between Nunavut and West Greenland.',
      },
      {
        title: 'Hunted For Centuries',
        icon: 'UsersThreeIcon',
        description:
          'Commercial whaling in the 1800s–1900s nearly wiped them out. Inuit have hunted bowheads for thousands of years, and still do under co-management.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach Within 100 M',
      icon: 'XCircle',
      description: 'It’s the law for whales in Canada — and 200 m if the whale is resting or with a calf.',
    },
    {
      title: 'Never Chase Or Cut Across Its Path',
      icon: 'Car',
      description: 'Let the whale choose where it goes. Never steer in front of it or follow closely.',
    },
    {
      title: 'Never Walk Onto Sea Ice Alone',
      icon: 'AlertTriangle',
      description: 'Arctic ice can break and drift. Only travel with experienced local guides.',
    },
    {
      title: 'Never Leave Rope Or Gear In The Water',
      icon: 'Trash2',
      description: 'Entanglement in fishing gear can injure or kill whales.',
    },
    {
      title: 'Never Fly Drones Low Over Whales',
      icon: 'Volume2',
      description: 'Low aircraft and drones near marine mammals are restricted under the Marine Mammal Regulations.',
    },
  ],

  alwaysDo: [
    {
      title: 'Go With Local Inuit Guides',
      icon: 'Users',
      description: 'Community outfitters know the ice, the whales, and the rules — and tourism supports local families.',
    },
    {
      title: 'Keep Engines Low And Quiet',
      icon: 'Volume2',
      description: 'Arctic whales rely on sound. Slow down and keep noise to a minimum near them.',
    },
    {
      title: 'Respect Protected Areas',
      icon: 'ShieldCheck',
      description: 'Ninginganiq National Wildlife Area protects important bowhead habitat. Follow all area rules.',
    },
    {
      title: 'Watch For Polar Bears',
      icon: 'AlertTriangle',
      description: 'On Arctic coasts and ice, polar bears may be close. Your guide should always keep watch.',
    },
    {
      title: 'Report Whales In Trouble',
      icon: 'Phone',
      description: 'Report entangled, stranded, or trapped whales to DFO or local wildlife officers.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Keep all food, waste, and gear on board.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Never throw food to whales' },
      { name: 'Bait', icon: '🎣', description: 'Keep bait secured on board' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Pollutes the water' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Also draws polar bears to camps' },
      { name: 'Plastic Bags', icon: '🛍️', description: 'Whales can swallow floating plastic' },
      { name: 'Fishing Line And Rope', icon: '🪢', description: 'Entanglement hurts whales' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful litter in the ocean' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything' },
    ],
  },

  parksSectionTag: 'Arctic Waters',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Bowhead Whales' },
  spotParks: [
    { name: 'Ninginganiq National Wildlife Area', province: 'Nunavut', season: 'Late August to early October — Isabella Bay', level: 'safe' },
    { name: 'Eastern Baffin Island', province: 'Nunavut', season: 'Summer — guided boat tours', level: 'safe' },
    { name: 'Davis Strait & Baffin Bay', province: 'Nunavut', season: 'Expedition cruises', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Spot The Broad, Finless Back',
      description:
        'Bowheads have no dorsal fin — look for a broad, smooth back rising out of the water.',
    },
    {
      title: 'Keep 100 Metres Or More',
      description:
        'Stay well back and let the whale come and go on its own. Never steer toward it.',
    },
    {
      title: 'Stay Quiet And Follow Your Guide',
      description:
        'Keep engines low, voices down, and stay with your guide on the water and the ice.',
    },
    {
      title: 'Report Problems',
      description:
        'Report entangled, trapped, or stranded whales to DFO or local wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Bowhead Whale/bowhead-ice.jpg', credit: 'Vicki Beaver / NOAA · Public domain' },
    { src: '/wildlife/Bowhead Whale/bowhead-tailslap.jpg', credit: 'Olga Shpak · CC BY-SA 3.0 · Sea of Okhotsk' },
    { src: '/wildlife/Bowhead Whale/bowhead-spyhop.jpg', credit: 'Olga Shpak · CC BY-SA 3.0 · Sea of Okhotsk' },
  ],
};

export default BOWHEAD_WHALE;
