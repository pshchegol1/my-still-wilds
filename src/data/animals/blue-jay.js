// Blue Jay — данные страницы /wildlife/blue-jay
//
// Сделано самостоятельно без макета, по той же схеме, что Snowy Owl.
// Категория на /wildlife — Birds ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF), "Blue Jay": ~30 см от клюва до хвоста;
//   самцы и самки похожи; синий цвет — не пигмент, а преломление света
//   структурой пера (если раздавить перо, синий исчезает); хохолок
//   показывает настроение — поднят при возбуждении/агрессии, вперёд при
//   удивлении, взъерошен при испуге, прижат при кормёжке/отдыхе; громкие
//   крики предупреждают птиц и зверей о хищниках; есть мягкий свист и
//   тихая брачная песня; едят в основном растительное — дикие плоды,
//   жёлуди, лесные орехи, буковые орешки, зерно, а также много насекомых,
//   иногда яйца и птенцов других птиц; прячут жёлуди и буковые орешки в
//   листья, траву, дупла; гнездо ~18 см на высоте 3-10 м; обычно 4-5
//   яиц; насиживание 16-18 дней; птенцы вылетают к ~21 дню, родители
//   кормят их ещё 1-2 месяца; частично перелётные — днём, стаями по
//   5-50+; до 3,000 за день в Point Pelee NP перед перелётом через озеро
//   Эри; гнездятся от центральной Альберты и Саскачевана через южную
//   Манитобу, Онтарио, Квебек до Приморских провинций и Ньюфаундленда;
//   окольцованные птицы жили 10-15 лет; на кормушках любят арахис, зерно,
//   особенно семена подсолнечника; птица-символ острова Принца Эдуарда;
//   охраняется провинциальными законами.
// - "Подражает ястребам" — в HWW НЕ указано, на странице не использую.
//
// МЕДИА:
// - Видео нет: "Bluejay.webm" (Point Pleasant Park, Галифакс) снято
//   боком/перевёрнуто, сойку в кадре почти не видно; остальные ролики —
//   у кормушек или из США.
// - bluejay-hero.jpg — Letartean, CC BY 3.0 — в дикой природе,
//   St-Irénée, Квебек, 2010.
// - Галерея (все Канада):
//   * bluejay-crest.jpg — Rob Hanson, CC BY 2.0 — с поднятым хохолком,
//     Welland, Онтарио;
//   * bluejay-captourmente.jpg — Cephas, CC BY-SA 3.0 — Cap Tourmente
//     National Wildlife Area, Квебек;
//   * bluejay-algonquin.jpg — Mdf, CC BY-SA 3.0 — на заснеженной ветке,
//     Algonquin PP, Онтарио (тот же снимок, что в карточке).

export const BLUE_JAY = {
  slug: 'blue-jay',
  name: 'Blue Jay',
  shortName: 'Blue Jay',
  tag: 'Safe To Observe — A Backyard Favourite',
  level: 'safe',
  image: '/wildlife/Blue Jay/bluejay-hero.jpg',
  heroCredit: 'Photo: Letartean / Wikimedia Commons · CC BY 3.0 · St-Irénée, Quebec',
  description:
    "Loud, clever, and brilliantly blue — the official bird of Prince Edward Island. Blue jays raise the alarm when predators are near, hide acorns to eat later, and on migration up to 3,000 have been counted passing Point Pelee in a single day.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Length', value: '~30 CM' },
    { label: 'Eggs', value: 'Usually 4–5' },
    { label: 'Lifespan', value: 'Up To 10–15 Yrs' },
    { label: 'Point Pelee Record', value: '3,000 In A Day' },
    { label: 'Provincial Bird', value: 'PEI' },
    { label: 'Found', value: 'Alberta To NL' },
  ],

  minDistanceWarning: {
    title: 'Give Nesting Jays Space',
    text: 'Blue jays nest 3–10 m up in trees in spring and summer. Watch from a distance and don’t linger near a nest.',
  },

  behaviorSection: {
    tag: 'Blue Jay Behaviour',
    title: 'The Forest’s',
    highlight: 'Alarm Bell',
    accent: '#38a169',
    cards: [
      {
        title: 'Blue Without Pigment',
        icon: 'Eye',
        description:
          'The blue comes from light bouncing off the feather’s structure — crush a feather and the blue disappears.',
      },
      {
        title: 'A Crest That Talks',
        icon: 'Wind',
        description:
          'Raised high when excited or aggressive, pointed forward when surprised, and flat when feeding or resting.',
      },
      {
        title: 'Alarm Calls',
        icon: 'Volume2',
        description:
          'Loud cries warn other birds and mammals when a predator is near.',
      },
      {
        title: 'Acorn Hoarders',
        icon: 'Footprints',
        description:
          'Jays bury acorns and beechnuts under leaves, in grass, and in hollow trees to eat later.',
      },
      {
        title: 'Daytime Migrants',
        icon: 'Compass',
        description:
          'Some jays migrate by day in loose flocks of 5 to 50 or more. Up to 3,000 have passed Point Pelee in a single day.',
      },
      {
        title: 'Devoted Parents',
        icon: 'Calendar',
        description:
          'Young leave the nest at about 21 days, but parents keep feeding them for another one to two months.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Disturb A Nest',
      icon: 'XCircle',
      description: 'Blue jays are protected by provincial law. Leave nests, eggs, and young alone.',
    },
    {
      title: 'Never Hand-Feed Jays',
      icon: 'AlertTriangle',
      description: 'Enjoy them at a feeder or in the wild — not from your hand.',
    },
    {
      title: 'Never Offer Bread Or Junk Food',
      icon: 'Trash2',
      description: 'If you feed backyard birds, stick to bird foods like sunflower seeds and peanuts.',
    },
    {
      title: 'Never Let Cats Roam Near Feeders',
      icon: 'PawPrint',
      description: 'Keep cats indoors — feeders can turn into traps for songbirds.',
    },
    {
      title: 'Never Pick Up A Fledgling',
      icon: 'DoorOpen',
      description: 'Young jays are still fed by their parents for weeks after leaving the nest.',
    },
  ],

  alwaysDo: [
    {
      title: 'Listen For The Alarm',
      icon: 'Ear',
      description: 'Loud jay calls can tip you off to a predator nearby.',
    },
    {
      title: 'Watch Fall Migration',
      icon: 'Compass',
      description: 'At Point Pelee, migrating jays gather before crossing Lake Erie.',
    },
    {
      title: 'Keep Feeders Clean',
      icon: 'ShieldCheck',
      description: 'If you feed birds, clean feeders regularly to help prevent disease.',
    },
    {
      title: 'Plant Oaks And Native Shrubs',
      icon: 'Footprints',
      description: 'Acorns, nuts, and wild fruits are the jay’s natural food.',
    },
    {
      title: 'Use Binoculars',
      icon: 'Camera',
      description: 'Jays are wary in the woods — binoculars bring out that brilliant blue.',
    },
  ],

  neverFeed: {
    tag: 'Not For Blue Jays',
    warning:
      'Backyard bird feeding is common in Canada, but some foods do more harm than good. Never hand-feed wild birds, and skip human junk food.',
    items: [
      { name: 'Bread', icon: '/icons/wildlife/🍞.png', description: 'Fills birds up with little nutrition' },
      { name: 'Salted Snacks', icon: '🥨', description: 'Not food for birds' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wildlife' },
      { name: 'Chocolate', icon: '🍫', description: 'Not food for birds' },
      { name: 'Meat Scraps', icon: '/icons/wildlife/🥩.png', description: 'Spoils and draws pests' },
      { name: 'Mouldy Seed', icon: '🦠', description: 'Spoiled food' },
      { name: 'Milk', icon: '/icons/wildlife/🥛.png', description: 'Not food for birds' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Draws predators to nests' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Blue Jays' },
  spotParks: [
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Migration — flocks gather before crossing Lake Erie', level: 'safe' },
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'Year-round — mixed forest', level: 'safe' },
    { name: 'Cap Tourmente National Wildlife Area', province: 'Quebec', season: 'Spring to fall', level: 'safe' },
    { name: 'Prince Edward Island', province: 'PEI', season: 'Year-round — the provincial bird', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Listen First',
      description:
        'You’ll often hear a blue jay’s loud call before you see it.',
    },
    {
      title: 'Watch The Crest',
      description:
        'A raised crest means an excited or alarmed bird — give it space.',
    },
    {
      title: 'Stay Back From Nests',
      description:
        'In spring and summer, avoid lingering near a nest 3–10 m up in a tree.',
    },
    {
      title: 'Report Injured Birds',
      description:
        'Contact a local wildlife rehabilitation centre for injured songbirds.',
    },
  ],

  gallery: [
    { src: '/wildlife/Blue Jay/bluejay-crest.jpg', credit: 'Rob Hanson · CC BY 2.0 · Welland, Ontario' },
    { src: '/wildlife/Blue Jay/bluejay-captourmente.jpg', credit: 'Cephas · CC BY-SA 3.0 · Cap Tourmente, Quebec' },
    { src: '/wildlife/Blue Jay/bluejay-algonquin.jpg', credit: 'Mdf · CC BY-SA 3.0 · Algonquin PP, Ontario' },
  ],
};

export default BLUE_JAY;
