// Harbour Seal — данные страницы /wildlife/harbour-seal
//
// Сделано самостоятельно без макета, по той же схеме, что Pronghorn /
// Bighorn Sheep. Категория на /wildlife — Large Mammals ("Safe to
// Observe"), поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Marine Mammal Regulations (SOR/93-56), s. 7: запрещено беспокоить
//   морских млекопитающих (включая тюленей); "беспокоить" — в том числе
//   приближаться, чтобы покормить, плавать с ним или взаимодействовать,
//   сдвинуть или заставить уйти с места, отделить от группы или встать
//   между ним и детёнышем, зажать между судном и берегом, пометить.
//   Отдельной дистанции для тюленей в этой части нет (200 м — для
//   китов/дельфинов/морских свиней в покое или с детёнышем).
// - COSEWIC (Harbour seal): в Канаде три подвида — тихоокеанский (BC),
//   атлантический/восточноарктический и пресноводный в озёрах Lacs des
//   Loups Marins (Квебек), отрезанный от моря 3000-8000 лет назад
//   (500-600 особей); на востоке Канады редко больше ~154 см, 100 кг и 30
//   лет; держатся у островков, рифов, осыхающих камней и эстуариев.
// - Детёныши: одинокий детёныш на берегу — норма, мать кормится в море и
//   может отсутствовать до ~24 ч (NOAA и сети спасения морских
//   млекопитающих); квебекская сеть советует держаться минимум 50 м и
//   уйти, чтобы мать вернулась; NOAA рекомендует 100 ярдов (~90 м). DFO в
//   2016 году советовал вернуть унесённого детёныша на тот же пляж.
//   На странице — "минимум 50 м, лучше 100 м" как рекомендация, без
//   ссылки на конкретный канадский норматив.
//
// МЕДИА:
// - seal-hero.mp4 — "Eastern Pacific Harbour Seal (Phoca vitulina) on ice
//   floe", Flickr gails_pictures, Wikimedia Commons, CC BY 2.0 — дикий
//   тюлень на льдине, Glacier Bay (Аляска; тот же тихоокеанский подвид,
//   что в BC). Первые 22 секунды.
// - seal-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, Тофино, о. Ванкувер.
// - Галерея:
//   * seal-klewnuggit.jpg — Extemporalist, CC0, Klewnuggit Inlet Marine
//     Provincial Park, BC;
//   * seal-pup.jpg — marneejill (Flickr, Канада), CC BY 4.0 — детёныш;
//     точное место не указано;
//   * seal-haulout.jpg — кадр из видео Artie Kopelman, CC BY 2.0, лежбище
//     на песчаной косе, Брукхейвен, Нью-Йорк (США).
//   Фото "Seal waiting to be fed" (Oak Bay) не взяла — прикормленные
//   тюлени, ровно то, чего страница просит не делать.

export const HARBOUR_SEAL = {
  slug: 'harbour-seal',
  name: 'Harbour Seal',
  shortName: 'Harbour Seal',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Harbour Seal/seal-hero.jpg',
  heroVideo: '/wildlife/Harbour Seal/seal-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Tofino, BC',
  heroVideoCredit: 'Video: gails_pictures / Flickr · CC BY 2.0 · Glacier Bay, Alaska',
  description:
    "The spotted, round-headed seal of Canada's coasts, often seen resting on rocks at low tide or watching boats with big dark eyes. Harbour seals are gentle and shy — and a pup alone on the beach is usually not abandoned, just waiting for its mother.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Length', value: 'Up To ~1.5 M' },
    { label: 'Weight', value: 'Up To ~100 KG' },
    { label: 'Lifespan', value: 'Up To ~30 Years' },
    { label: 'Subspecies', value: '3 In Canada' },
    { label: 'Habitat', value: 'Rocky Coasts' },
    { label: 'Protected By', value: 'Marine Mammal Regs' },
  ],

  minDistanceWarning: {
    title: 'Keep At Least 50 Metres Away',
    text: '100 metres is better. Disturbing a seal — including feeding it or separating a pup from its mother — is illegal under Canada’s Marine Mammal Regulations.',
  },

  behaviorSection: {
    tag: 'Harbour Seal Behaviour',
    title: 'Life Between',
    highlight: 'The Tides',
    accent: '#38a169',
    cards: [
      {
        title: 'Hauling Out',
        icon: 'Sun',
        description:
          'Harbour seals rest on rocks, reefs, and sandbars exposed at low tide. Resting on land is essential — every time they are scared into the water, they lose that rest.',
      },
      {
        title: 'Pups Left Alone',
        icon: 'EyeOff',
        description:
          'Mothers leave pups on the shore while they feed at sea, sometimes for up to a day. A lone pup is usually fine — people “rescuing” it is the biggest danger.',
      },
      {
        title: 'Three Canadian Subspecies',
        icon: 'Compass',
        description:
          'Canada has a Pacific form in BC, an Atlantic and eastern Arctic form, and a rare freshwater population in Quebec’s Lacs des Loups Marins.',
      },
      {
        title: 'Freshwater Seals',
        icon: 'Fish',
        description:
          'The Lacs des Loups Marins seals were cut off from the sea 3,000 to 8,000 years ago and now number only a few hundred.',
      },
      {
        title: 'Shy And Easily Spooked',
        icon: 'AlertTriangle',
        description:
          'Seals that lift their heads, stare, or shuffle toward the water are telling you that you are too close. Back off before they flush.',
      },
      {
        title: 'Protected By Law',
        icon: 'ShieldCheck',
        description:
          'Canada’s Marine Mammal Regulations make it illegal to disturb seals — including feeding, touching, swimming with, or moving them.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Touch Or Move A Pup',
      icon: 'XCircle',
      description: 'Picking up or moving a pup can stop its mother from coming back. Leave it exactly where it is and give it space.',
    },
    {
      title: 'Never Feed Seals',
      icon: 'Fish',
      description: 'Feeding marine mammals is illegal. Fed seals lose their fear of boats and docks and can get injured or become aggressive.',
    },
    {
      title: 'Never Swim With Or Approach Seals',
      icon: 'RunningFigure',
      description: 'Seals can bite, and approaching to swim with or interact with a seal counts as disturbance under the law.',
    },
    {
      title: 'Never Flush Seals Into The Water',
      icon: 'Volume2',
      description: 'Loud noise, drones, and boats coming close can stampede a haul-out and separate pups from their mothers.',
    },
    {
      title: 'Never Let Dogs Near Seals',
      icon: 'DogIcon',
      description: 'Dogs can injure pups and spread disease — and seals can bite back. Keep dogs leashed on seal beaches.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep 50-100 Metres Away',
      icon: 'Eye',
      description: 'Use binoculars or a zoom lens. If a seal looks at you or moves toward the water, back away.',
    },
    {
      title: 'Leave A Lone Pup Alone',
      icon: 'Users',
      description: 'Move away so the mother feels safe to return. Ask others on the beach to do the same.',
    },
    {
      title: 'Slow Down In Boats And Kayaks',
      icon: 'Compass',
      description: 'Pass haul-outs slowly and well offshore, never between seals and the shore, and never trap them against rocks.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'On beaches used by seals, keep dogs leashed and well away from resting animals and pups.',
    },
    {
      title: 'Report Injured Or Sick Seals',
      icon: 'Phone',
      description: 'If a seal or pup looks injured, entangled, or is still alone after a day, call DFO or a local marine mammal response network — don’t handle it yourself.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding seals is illegal under Canada’s Marine Mammal Regulations. Seals that learn to beg at docks and boats get hit by propellers, tangled in fishing gear, and can bite people.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'The most common illegal handout at docks' },
      { name: 'Bait', icon: '🎣', description: 'Never toss bait to seals near boats' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Not food for a marine predator' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Teaches seals to approach people' },
      { name: 'Milk For Pups', icon: '/icons/wildlife/🥛.png', description: 'Never try to feed a lone pup' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Fishing Line And Hooks', icon: '🪝', description: 'Discarded gear injures and entangles seals' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Plastic on beaches ends up in the sea' },
    ],
  },

  parksSectionTag: 'Coastal Parks',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Harbour Seals' },
  spotParks: [
    { name: 'Pacific Rim National Park Reserve', province: 'British Columbia', season: 'Year-round — rocky shores near Tofino', level: 'safe' },
    { name: 'Gulf Islands National Park Reserve', province: 'British Columbia', season: 'Year-round — reefs and islets at low tide', level: 'safe' },
    { name: 'Kouchibouguac National Park', province: 'New Brunswick', season: 'Summer — seals on the offshore sand dunes', level: 'safe' },
    { name: 'Saguenay–St. Lawrence Marine Park', province: 'Quebec', season: 'Summer — rocky shores of the estuary', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Look',
      description:
        'When you spot seals on rocks or a beach, stop at least 50 metres away. Check whether there are pups.',
    },
    {
      title: 'Watch For Signs Of Stress',
      description:
        'Heads up, staring at you, or shuffling toward the water means you are too close. Back away slowly and quietly.',
    },
    {
      title: 'Lone Pup? Walk Away',
      description:
        'A pup alone is usually waiting for its mother. Don’t touch, feed, or cover it — move away so the mother can return.',
    },
    {
      title: 'Report, Don’t Rescue',
      description:
        'If the animal is clearly injured, entangled, or the pup is still alone after a full day, call DFO or a marine mammal response line.',
    },
  ],

  gallery: [
    { src: '/wildlife/Harbour Seal/seal-klewnuggit.jpg', credit: 'Extemporalist · CC0 · Klewnuggit Inlet, BC' },
    { src: '/wildlife/Harbour Seal/seal-pup.jpg', credit: 'marneejill · CC BY 4.0' },
    { src: '/wildlife/Harbour Seal/seal-haulout.jpg', credit: 'Artie Kopelman · CC BY 2.0 · New York' },
  ],
};

export default HARBOUR_SEAL;
