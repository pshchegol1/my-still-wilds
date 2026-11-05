// Snowshoe Hare — данные страницы /wildlife/snowshoe-hare
//
// Сделано самостоятельно без макета, по той же схеме, что Arctic Fox.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC) "Snowshoe hare": взрослые 1.2-1.6 кг;
//   новорождённые 45-75 г; большие густо опушённые лапы с четырьмя
//   длинными пальцами, широко расставляемыми в рыхлом снегу; летом
//   серо-бурый, к середине зимы почти белый; линька дважды в год (август-
//   сентябрь и март-апрель), запускается длиной дня; на влажном юго-
//   западе BC остаются бурыми круглый год; ~10-летний цикл численности,
//   прослеживается более 200 лет по пушным записям Hudson's Bay Company;
//   на пике 500-600 зайцев на км²; спад в основном из-за хищников —
//   рысь, лиса, койот, норка, виргинский филин, ястреб-тетеревятник;
//   летом травы и листья, зимой веточки, почки, кора; до 4 помётов в год,
//   1-13 зайчат, рождаются в шерсти, зрячими и почти сразу прыгают,
//   самостоятельны в 3-4 недели; прыжки до 3 м, скорость до 45 км/ч;
//   во всех провинциях и территориях, в основном в бореальном лесу, до
//   дельты Маккензи; живут до 6 лет, но очень редко; активны от заката
//   до рассвета; участок 6-10 га; днём отдыхают в "форме" под кустом.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - Свободного видео диких беляков на Wikimedia Commons нет (только
//   мультфильм 1957 года) — heroVideo не задан.
// - hare-hero.jpg — "Lepus americanus" (31255566782), David A Mitchell
//   (Flickr, Калгари), CC BY 2.0 — заяц в смене меха (белый с бурым).
// - Галерея:
//   * hare-summer.jpg — Cephas, CC BY-SA 4.0, летний мех, Parc national
//     des Grands-Jardins, Квебек;
//   * hare-grosmorne.jpg — Ryan Hodnett, CC BY-SA 4.0, Gros Morne NP,
//     Ньюфаундленд;
//   * hare-winter.jpg — NPS / Jim Peaco, public domain, белый зимний мех,
//     Yellowstone (США).
//   Фото "Edmonton Leporidae" не брала — автор сам не уверен, беляк это
//   или белохвостый заяц.

export const SNOWSHOE_HARE = {
  slug: 'snowshoe-hare',
  name: 'Snowshoe Hare',
  shortName: 'Snowshoe Hare',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Snowshoe Hare/hare-hero.jpg',
  heroCredit: 'Photo: David A Mitchell / Wikimedia Commons · CC BY 2.0',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  // Морда зайца в центре кадра — подняли выше заголовка и Quick Facts.
  heroZoomPan: 'scale(1.3) translate(0%, -10%)',
  description:
    "The hare that changes colour with the seasons — brown in summer, snow-white in winter — and runs on built-in snowshoes. Found in every province and territory, it is the heartbeat of the boreal forest: when hare numbers boom and crash every ten years, lynx and other predators follow.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '1.2-1.6 KG' },
    { label: 'Top Speed', value: 'Up To 45 KM/H' },
    { label: 'Leaps', value: 'Up To 3 M' },
    { label: 'Population Cycle', value: '~10 Years' },
    { label: 'Litters', value: 'Up To 4 A Year' },
    { label: 'Range', value: 'All Of Canada' },
  ],

  minDistanceWarning: {
    title: 'Watch From A Distance',
    text: 'Hares are harmless, but they freeze to hide. Don’t chase or pick one up — and leave young hares where you find them.',
  },

  behaviorSection: {
    tag: 'Snowshoe Hare Behaviour',
    title: 'Built For',
    highlight: 'The Boreal Winter',
    accent: '#38a169',
    cards: [
      {
        title: 'Two Coats A Year',
        icon: 'Calendar',
        description:
          'Hares moult in late summer and again in spring. Day length, not snow, triggers the change from grey-brown to almost pure white.',
      },
      {
        title: 'Natural Snowshoes',
        icon: 'Footprints',
        description:
          'Huge, furry hind feet with four long toes spread wide in soft snow, letting hares stay on top while predators sink.',
      },
      {
        title: 'The 10-Year Cycle',
        icon: 'Compass',
        description:
          'Hare numbers rise and crash about every ten years — up to 500–600 hares per km² at the peak. Hudson’s Bay Company fur records show this cycle for over 200 years.',
      },
      {
        title: 'Food For The Forest',
        icon: 'UsersThreeIcon',
        description:
          'Lynx, foxes, coyotes, owls, and goshawks all depend on hares. When hares crash, so do many of their predators.',
      },
      {
        title: 'Born Ready To Hop',
        icon: 'ArrowDown',
        description:
          'Young hares are born fully furred with their eyes open and can hop almost right away. Mothers can have up to four litters a year.',
      },
      {
        title: 'Freeze, Then Flee',
        icon: 'EyeOff',
        description:
          'Hares rest by day in a sheltered “form” and rely on staying still. If spotted, they can bound 3 m at a time at up to 45 km/h.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Pick Up A Young Hare',
      icon: 'XCircle',
      description: 'Young hares are nursed only about once a day, so they are often alone — they are not orphaned. Leave them exactly where they are.',
    },
    {
      title: 'Never Chase A Hare',
      icon: 'RunningFigure',
      description: 'Running burns precious winter energy and can push a hare into the path of predators or traffic.',
    },
    {
      title: 'Never Feed Hares',
      icon: 'Trash2',
      description: 'Human food can make hares sick and draws them — and their predators — to campsites and roads.',
    },
    {
      title: 'Never Let Dogs Off Leash',
      icon: 'DogIcon',
      description: 'Dogs easily chase down young hares. Keep dogs leashed in hare habitat.',
    },
    {
      title: 'Never Handle A Sick Or Dead Hare',
      icon: 'AlertTriangle',
      description: 'Wild hares can carry diseases. Use gloves, or better, leave it and report unusual deaths to wildlife officers.',
    },
  ],

  alwaysDo: [
    {
      title: 'Look At Dawn And Dusk',
      icon: 'Moon',
      description: 'Hares are most active from sundown to dawn. Walk quietly along forest edges and trails.',
    },
    {
      title: 'Look For Tracks In Snow',
      icon: 'Footprints',
      description: 'Big hind-foot prints landing ahead of the small front ones are a sure sign of a snowshoe hare.',
    },
    {
      title: 'Stay Still For A Photo',
      icon: 'Camera',
      description: 'A frozen hare is trying to hide. Use a zoom lens from where you stand and let it relax.',
    },
    {
      title: 'Drive Slowly At Night',
      icon: 'Car',
      description: 'Hares often cross forest roads after dark, especially in peak years.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'It protects hares, especially young ones in spring and summer.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Hares that gather around campsites and roads for handouts draw in predators and are hit by cars.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Carrots', icon: '/icons/wildlife/🥕.png', description: 'Not a natural food — creates dependency' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws hares to people and roads' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful to wild hares' },
      { name: 'Chips And Snacks', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Pet Food', icon: '🐾', description: 'Keep it indoors' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Attracts hares and their predators' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Hares Hide' },
  spotParks: [
    { name: 'Parc national des Grands-Jardins', province: 'Quebec', season: 'Summer and winter — boreal forest', level: 'safe' },
    { name: 'Gros Morne National Park', province: 'Newfoundland', season: 'Summer — trails and forest edges', level: 'safe' },
    { name: 'Kluane National Park', province: 'Yukon', season: 'Year-round — boreal valleys', level: 'safe' },
    { name: 'Prince Albert National Park', province: 'Saskatchewan', season: 'Year-round — boreal forest', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop When You See One',
      description:
        'A hare that freezes thinks it is hidden. Stop and watch quietly.',
    },
    {
      title: 'Give It Room',
      description:
        'Step back or go around so the hare doesn’t feel cornered.',
    },
    {
      title: 'Leave Young Hares Alone',
      description:
        'A small hare on its own is normal — its mother nurses it only about once a day.',
    },
    {
      title: 'Report Unusual Behaviour',
      description:
        'A hare that is stumbling, unafraid, or found dead without injury should be reported to wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Snowshoe Hare/hare-summer.jpg', credit: 'Cephas · CC BY-SA 4.0 · Grands-Jardins, Quebec' },
    { src: '/wildlife/Snowshoe Hare/hare-grosmorne.jpg', credit: 'Ryan Hodnett · CC BY-SA 4.0 · Gros Morne NP' },
    { src: '/wildlife/Snowshoe Hare/hare-winter.jpg', credit: 'NPS / Jim Peaco · Public domain · Winter coat' },
  ],
};

export default SNOWSHOE_HARE;
