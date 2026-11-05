// Raccoon — данные страницы /wildlife/raccoon
//
// Сделано самостоятельно без макета, по той же схеме, что Ground Squirrel.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Raccoon": северные взрослые обычно
//   6-8 кг, южные ~4 кг, осенью до 28 кг; длина с хвостом в среднем
//   80 см; самцы ~на 25% крупнее; чёрная "маска", на хвосте 5-10 колец;
//   всеядны — кукуруза, раки, фрукты, орехи; к поздней осени до половины
//   веса — жир; "полоскание" еды (lotor) — вероятно связано с ловлей
//   раков, врождённое поведение; логова в дуплах, пнях, пещерах, зданиях,
//   в городах — дымоходы, канализация, чердаки; до 23 в общем логове, но
//   обычно 4-5; детёныши ~75 г, слепые, 3-7 на севере; беременность ~63
//   дня; зимой НЕ спячка — малоактивны, температура тела не падает; во
//   всех провинциях, кроме Ньюфаундленда и Лабрадора, ареал расширяется на
//   север; в городах участок <0.1 км², плотность до 100 на км²; енотовое
//   бешенство смертельно, впервые в Канаде — восточное Онтарио, июль 1999;
//   енотовая аскарида (Baylisascaris procyonis) очень опасна для людей,
//   ~12 смертей, в основном дети; в природе живут 3-5 лет.
// - BCCDC / UNBC (wildlife disease): не кормить енотов; высокая доля
//   енотов заражена аскаридой; держать питомцев дегельминтизированными;
//   гигиена рук и дома; места "туалетов" енотов не трогать, обращаться в
//   местную службу здравоохранения для обеззараживания.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - raccoon-hero.mp4 — "Raccoon on Seedskadee National Wildlife Refuge",
//   Tom Koerner / USFWS, public domain — дикий енот кормится на
//   мелководье (Вайоминг, США); первые 20 с, 1600 px.
// - raccoon-hero.jpg — D. Gordon E. Robertson, CC BY-SA 3.0, самка на
//   дереве, Оттава.
// - Галерея (все Канада):
//   * raccoon-highpark.jpg — Fabian Roudra Baroi, CC BY-SA 4.0, спит в
//     развилке дерева, High Park, Торонто;
//   * raccoon-sooke.jpg — Buiobuione, CC BY-SA 4.0, еноты на литорали,
//     Sooke, BC;
//   * raccoon-stanleypark.jpg — Goran Vlacic, CC BY-SA 2.0, Stanley Park,
//     Ванкувер.

export const RACCOON = {
  slug: 'raccoon',
  name: 'Raccoon',
  shortName: 'Raccoon',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Raccoon/raccoon-hero.jpg',
  heroVideo: '/wildlife/Raccoon/raccoon-hero.mp4',
  heroCredit: 'Photo: D. Gordon E. Robertson / Wikimedia Commons · CC BY-SA 3.0 · Ottawa',
  description:
    "The masked bandit of Canada's cities and shorelines — clever, nimble-fingered, and at home anywhere from forests to downtown Toronto. Raccoons are fun to watch, but they can carry rabies and a dangerous roundworm, so never feed or handle them.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '~4-8 KG' },
    { label: 'Length', value: '~80 CM' },
    { label: 'Tail Rings', value: '5-10' },
    { label: 'Young', value: '3-7 (North)' },
    { label: 'Winter', value: 'Inactive, Not Hibernating' },
    { label: 'Range', value: 'All Provinces But NL' },
  ],

  minDistanceWarning: {
    title: 'Don’t Feed — Don’t Touch',
    text: 'Raccoons can carry rabies and raccoon roundworm, which is very dangerous to people. Never hand-feed, pet, or corner one.',
  },

  behaviorSection: {
    tag: 'Raccoon Behaviour',
    title: 'The Masked',
    highlight: 'Bandit',
    accent: '#38a169',
    cards: [
      {
        title: 'Clever Hands',
        icon: 'Eye',
        description:
          'Raccoons feel for food with their sensitive front paws, often dabbling them in water — the “washing” behaviour behind their Latin name, lotor.',
      },
      {
        title: 'Eats Almost Anything',
        icon: 'Fish',
        description:
          'Corn, crayfish, fruit, and nuts are favourites, but raccoons adapt to whatever is around — including garbage and pet food.',
      },
      {
        title: 'City Champions',
        icon: 'UsersThreeIcon',
        description:
          'In cities, raccoons can live on less than 0.1 km² each, at densities of up to 100 per km², using attics, chimneys, sewers, and culverts as dens.',
      },
      {
        title: 'Winter Sleepers — Not Hibernators',
        icon: 'Moon',
        description:
          'Raccoons store fat in fall and stay inactive in cold spells, but their body temperature doesn’t drop. They come out on milder winter nights.',
      },
      {
        title: 'Spreading North',
        icon: 'Compass',
        description:
          'Found in every province except Newfoundland and Labrador, raccoons are slowly moving north as land is cleared.',
      },
      {
        title: 'Disease Risks',
        icon: 'AlertTriangle',
        description:
          'Raccoon rabies has been found in Ontario and Quebec, and raccoon roundworm eggs in their droppings can seriously harm people, especially children.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Raccoons',
      icon: 'Trash2',
      description: 'Fed raccoons lose their fear, gather in groups, and become bolder around homes, campsites, and people.',
    },
    {
      title: 'Never Touch Or Pet One',
      icon: 'XCircle',
      description: 'Even a calm raccoon can bite or scratch, and rabies is fatal once symptoms start.',
    },
    {
      title: 'Never Touch Raccoon Droppings',
      icon: 'AlertTriangle',
      description: 'Raccoon roundworm eggs can survive in latrine sites for a long time. Keep children and pets away.',
    },
    {
      title: 'Never Corner A Raccoon',
      icon: 'DoorOpen',
      description: 'A trapped raccoon will defend itself. Always leave it a clear way out.',
    },
    {
      title: 'Never Leave Food Or Garbage Out',
      icon: 'Trash2',
      description: 'Coolers, packs, compost, and pet bowls are easy targets for clever paws.',
    },
  ],

  alwaysDo: [
    {
      title: 'Lock Up Food At Camp',
      icon: 'ShieldCheck',
      description: 'Store coolers and food in a hard-sided vehicle or locker — raccoons can open zippers and latches.',
    },
    {
      title: 'Watch From A Distance',
      icon: 'Eye',
      description: 'Enjoy raccoons from afar, especially at dusk near water, and use a zoom lens.',
    },
    {
      title: 'Keep Pets Vaccinated',
      icon: 'DogIcon',
      description: 'Keep dogs and cats vaccinated for rabies and dewormed, and keep them away from raccoons.',
    },
    {
      title: 'Wash Your Hands',
      icon: 'ShieldCheck',
      description: 'After being outdoors where raccoons live, wash hands well — especially before eating.',
    },
    {
      title: 'Report Sick-Looking Raccoons',
      icon: 'Phone',
      description: 'A raccoon that staggers, seems confused, or is unusually tame may be sick. Keep away and call local authorities.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Fed raccoons gather in larger numbers — and crowding spreads rabies and roundworm to other raccoons, pets, and people.',
    items: [
      { name: 'Pet Food', icon: '🐾', description: 'Keep bowls indoors' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Junk food for wild animals' },
      { name: 'Fish And Scraps', icon: '/icons/wildlife/🐟.png', description: 'Draws raccoons to docks and camps' },
      { name: 'Meat', icon: '/icons/wildlife/🥩.png', description: 'Teaches raccoons to raid camps' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Fruit And Compost', icon: '/icons/wildlife/🍎.png', description: 'Secure compost bins' },
      { name: 'Nuts And Seeds', icon: '🥜', description: 'Bird feeders attract raccoons too' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use locking, raccoon-proof bins' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Raccoons' },
  spotParks: [
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Spring to fall — forest trails at dusk', level: 'safe' },
    { name: 'High Park, Toronto', province: 'Ontario', season: 'Year-round — city forest', level: 'safe' },
    { name: 'Stanley Park, Vancouver', province: 'British Columbia', season: 'Year-round — shorelines and trails', level: 'safe' },
    { name: 'Mount Royal Park, Montreal', province: 'Quebec', season: 'Spring to fall — wooded slopes', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Give It Space',
      description:
        'Stop, step back, and let the raccoon go on its way. Don’t follow it.',
    },
    {
      title: 'Make Yourself Big And Loud',
      description:
        'If a raccoon comes too close, stand tall, clap, and shout. Most will run off.',
    },
    {
      title: 'Keep Pets And Kids Close',
      description:
        'Pick up small pets and keep children away. Never let a dog confront a raccoon.',
    },
    {
      title: 'If Bitten Or Scratched',
      description:
        'Wash the wound with soap and water for several minutes and see a doctor right away about rabies.',
    },
  ],

  gallery: [
    { src: '/wildlife/Raccoon/raccoon-highpark.jpg', credit: 'Fabian Roudra Baroi · CC BY-SA 4.0 · High Park, Toronto' },
    { src: '/wildlife/Raccoon/raccoon-sooke.jpg', credit: 'Buiobuione · CC BY-SA 4.0 · Sooke, BC' },
    { src: '/wildlife/Raccoon/raccoon-stanleypark.jpg', credit: 'Goran Vlacic · CC BY-SA 2.0 · Stanley Park, Vancouver' },
  ],
};

export default RACCOON;
