// Beaver — данные страницы /wildlife/beaver
//
// Сделано самостоятельно без макета, по той же схеме, что Harbour Seal.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Beaver": крупнейший грызун Северной
//   Америки (второй в мире после капибары); взрослые обычно 16-32 кг,
//   некоторые >45 кг; до ~1.3 м вместе с хвостом ~30 см; живут до 12 лет;
//   плывут до ~7 км/ч; прозрачные мембраны на глазах, нос и уши
//   закрываются под водой; удар хвостом по воде — сигнал тревоги;
//   резцы растут всю жизнь; валят деревья до ~40 см в диаметре, в
//   среднем 216 деревьев в год; плотины до 5.5 м высотой; хатки в среднем
//   ~5 м в ширину и 2 м в высоту, минимум два подводных входа; каналы до
//   нескольких сотен метров; пара на всю жизнь, семья — основа; гон в
//   январе-феврале, 3-4 бобрёнка в мае-июне, ~450 г; молодые живут с
//   родителями 2-3 года, расходятся до 250 км; на севере делают подводные
//   запасы веток на зиму; любят осину, тополь, иву, берёзу; ареал — вся
//   Канада, на север до устьев Маккензи и Коппермайна; на пике торговли
//   мехом в Европу шло ~200,000 шкурок в год; в первой половине XX века
//   во многих регионах бобров не осталось; охрана с конца 1930-х (Grey
//   Owl), сейчас популяция здорова.
// - Национальный символ Канады — официально с 24 марта 1975 года (CBC,
//   Canadian Parliamentary Review); на монете 5 центов с 1937 года, на
//   первой канадской марке 1851 года.
// - Grey Owl жил и работал с бобрами в Prince Albert NP (хижина у озера
//   Ajawaan) и до этого в Riding Mountain NP — общеизвестно (Parks Canada).
// - Риск для людей: бобр может укусить, если загнан в угол; вода у
//   бобровых прудов может содержать лямблий ("beaver fever") — общие
//   рекомендации; на странице сформулировано осторожно.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - beaver-hero.mp4 — "Castor canadensis, Saint-Donat-de-Montcalm,
//   2017-05", Pierre5018, Wikimedia Commons, CC BY-SA 3.0 — дикий бобр
//   плывёт в сумерках, Квебек; фрагмент 4-24 с, 1600 px, 30 fps.
// - beaver-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, Whistler, BC.
// - Галерея (все Канада):
//   * beaver-plaisance.jpg — Cephas, CC BY-SA 4.0, бобр несёт ветки к
//     хатке, Parc national de Plaisance, Квебек;
//   * beaver-lodge.jpg — Ryan Hodnett, CC BY-SA 4.0, хатка, Springdale,
//     Ньюфаундленд;
//   * beaver-dam.jpg — Cephas, CC BY-SA 3.0, плотина, Parc national de la
//     Jacques-Cartier, Квебек.

export const BEAVER = {
  slug: 'beaver',
  name: 'Beaver',
  shortName: 'Beaver',
  tag: 'Safe To Observe — National Animal',
  level: 'safe',
  image: '/wildlife/Beaver/beaver-hero.jpg',
  heroVideo: '/wildlife/Beaver/beaver-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Whistler, BC',
  heroVideoCredit: 'Video: Pierre5018 / Wikimedia Commons · CC BY-SA 3.0 · Saint-Donat, Quebec',
  description:
    "Canada's national animal and the country's master engineer. Beavers build dams and lodges that turn streams into ponds full of life. They are shy and gentle — the best way to meet one is quietly at dusk, from the shore.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '16-32 KG' },
    { label: 'Length', value: 'Up To 1.3 M' },
    { label: 'Trees Cut', value: '~216 A Year' },
    { label: 'Kits', value: '3-4, May-June' },
    { label: 'Lifespan', value: 'Up To 12 Years' },
    { label: 'Symbol Of Canada', value: 'Since 1975' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Watch quietly from the shore. Never block a beaver’s path to the water or corner one on land.',
  },

  behaviorSection: {
    tag: 'Beaver Behaviour',
    title: 'Canada’s',
    highlight: 'Master Builder',
    accent: '#38a169',
    cards: [
      {
        title: 'Dams And Lodges',
        icon: 'ShieldCheck',
        description:
          'Beavers build dams up to 5.5 m high and lodges about 5 m across, each with at least two underwater entrances that keep predators out.',
      },
      {
        title: 'Teeth That Never Stop',
        icon: 'Flame',
        description:
          'Their orange front teeth grow for life and stay chisel-sharp. A beaver can fell trees up to about 40 cm thick — around 216 trees a year.',
      },
      {
        title: 'The Tail Slap',
        icon: 'Volume2',
        description:
          'A loud slap of the flat tail on the water warns the family of danger. If you hear it, you have been noticed.',
      },
      {
        title: 'Built For Water',
        icon: 'Fish',
        description:
          'Clear eyelids, closable nose and ears, and waterproof fur let beavers swim up to about 7 km/h and work underwater.',
      },
      {
        title: 'A Winter Pantry',
        icon: 'Calendar',
        description:
          'In the north, beavers stockpile branches underwater near the lodge, then eat from this cache all winter under the ice.',
      },
      {
        title: 'Back From The Brink',
        icon: 'Compass',
        description:
          'The fur trade wiped beavers out of large parts of Canada. Protection from the late 1930s brought them back — today the population is healthy.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Corner A Beaver',
      icon: 'DoorOpen',
      description: 'On land beavers are slow and nervous. A cornered beaver can give a serious bite with those powerful teeth.',
    },
    {
      title: 'Never Damage Dams Or Lodges',
      icon: 'XCircle',
      description: 'Lodges hold families, often with kits inside. Climbing on or breaking a dam or lodge can flood the area or harm the animals.',
    },
    {
      title: 'Never Feed Beavers',
      icon: 'Trash2',
      description: 'Fed beavers lose their fear of people and are more likely to bite. Feeding wildlife is illegal in national parks.',
    },
    {
      title: 'Never Let Dogs Chase Beavers',
      icon: 'DogIcon',
      description: 'A beaver defending itself in the water can injure a dog badly. Keep dogs leashed near ponds.',
    },
    {
      title: 'Never Drink Untreated Pond Water',
      icon: 'AlertTriangle',
      description: 'Water from beaver ponds and streams can carry Giardia (“beaver fever”). Always filter, treat, or boil it.',
    },
  ],

  alwaysDo: [
    {
      title: 'Visit At Dawn Or Dusk',
      icon: 'Moon',
      description: 'Beavers are most active early and late in the day. Find a quiet spot near a lodge or dam and wait.',
    },
    {
      title: 'Stay Still And Quiet',
      icon: 'Eye',
      description: 'Beavers hear and smell well. Sit downwind, keep still, and you may watch them swim, eat, and work.',
    },
    {
      title: 'Watch For Chewed Trees',
      icon: 'AlertTriangle',
      description: 'Trees gnawed by beavers can fall without warning. Don’t stand or camp under half-cut trunks.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Near ponds and wetlands, keep dogs leashed and out of the water near lodges.',
    },
    {
      title: 'Treat All Drinking Water',
      icon: 'ShieldCheck',
      description: 'Filter, boil, or chemically treat water from any lake, pond, or stream before drinking.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Beavers that learn to expect food from people lose their natural fear — and those teeth can give a serious bite.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws beavers toward people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Chips And Snacks', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Pet Food', icon: '🐾', description: 'Never leave it out near ponds' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Beavers Build' },
  spotParks: [
    { name: 'Prince Albert National Park', province: 'Saskatchewan', season: 'Summer — Grey Owl’s cabin & beaver lodge', level: 'safe' },
    { name: 'Riding Mountain National Park', province: 'Manitoba', season: 'Summer — ponds and wetlands at dusk', level: 'safe' },
    { name: 'Elk Island National Park', province: 'Alberta', season: 'Spring to fall — wetland trails', level: 'safe' },
    { name: 'Plaisance National Park', province: 'Quebec', season: 'Spring to fall — Ottawa River marshes', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Stay Quiet',
      description:
        'If you see a beaver, stop where you are. Sudden movement or noise will send it diving with a tail slap.',
    },
    {
      title: 'Give It A Clear Path To Water',
      description:
        'On land, always leave the beaver an open route back to the water. Never step between it and the pond.',
    },
    {
      title: 'Back Away If It Hisses Or Stands Its Ground',
      description:
        'A beaver that won’t retreat may feel cornered. Move away slowly and give it space.',
    },
    {
      title: 'Report Unusual Behaviour',
      description:
        'A beaver that approaches people, seems sick, or is far from water should be reported to park staff or wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Beaver/beaver-plaisance.jpg', credit: 'Cephas · CC BY-SA 4.0 · Plaisance NP, Quebec' },
    { src: '/wildlife/Beaver/beaver-lodge.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Springdale, Newfoundland' },
    { src: '/wildlife/Beaver/beaver-dam.jpg', credit: 'Cephas · CC BY-SA 3.0 · Jacques-Cartier NP, Quebec' },
  ],
};

export default BEAVER;
