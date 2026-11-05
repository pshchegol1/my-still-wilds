// Pronghorn — данные страницы /wildlife/pronghorn
//
// Сделано самостоятельно без макета, по той же схеме, что Bighorn Sheep /
// Mountain Goat. Категория на /wildlife — Large Mammals ("Safe to
// Observe"), поэтому level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Saskatchewan Stock Growers Foundation, "Get to know your grasslands:
//   pronghorn": в Канаде — Саскачеван и Альберта, северная граница
//   ареала; не настоящие антилопы, ближе к жирафам и окапи; 90-150 фунтов
//   (~40-68 кг), самцы крупнее; до 95 км/ч — самое быстрое наземное
//   млекопитающее Северной Америки; белые полосы на шее, белое "зеркало",
//   волосы которого встают дыбом при тревоге; глаза дают обзор ~320°;
//   рога — костный стержень с кератиновым чехлом, чехол сбрасывается
//   каждую зиму и отрастает весной, у самок рожки в несколько дюймов;
//   едят злаки, разнотравье, полынь, немного кактусов и зерна; не
//   перепрыгивают изгороди, а пролезают под ними — колючая проволока
//   внизу режет спины; дружелюбная изгородь — гладкая нижняя проволока на
//   16-18 дюймах (~40-45 см); снежные зимы 2010-2013 в Саскачеване
//   сократили популяцию примерно вдвое; зимой поедают зерно/корм скота,
//   который рубец часто не переваривает — высокая смертность.
// - Alberta Conservation Association / CTV / Globe and Mail: в Альберте
//   миграция обычно ~300 км, некоторые до 800 км; волонтёры меняют нижнюю
//   колючую проволоку на гладкую (база Suffield и др.); дороги, включая
//   Трансканадское шоссе, — риск столкновений.
// - Grasslands NP: вилороги там есть — подтверждено фото с Commons
//   ("Antilocapra americana GNP", Cephas).
// - Численность (оценки 18-20 тыс. в СК и ~20 тыс. в АБ) расходятся между
//   источниками — на странице НЕ привожу.
// - Минимальная дистанция 30 м — общее правило Parks Canada для копытных.
//
// МЕДИА:
// - pronghorn-hero.mp4 — "LamarValley10Am140626", автор User:ערן (Eran),
//   Wikimedia Commons, CC BY 4.0 — дикие вилороги в Lamar Valley,
//   Yellowstone (США); съёмка с рук, животные небольшие в кадре;
//   фрагмент 12-32 с.
// - pronghorn-hero.jpg — "Antilocapra americana GNP 01", Cephas,
//   CC BY-SA 4.0, Grasslands NP, Саскачеван.
// - Галерея:
//   * pronghorn-gravelbourg.jpg — Awmcphee, CC BY-SA 3.0, семья на
//     грунтовой дороге у Gravelbourg, Саскачеван;
//   * pronghorn-running.jpg — Tom Koerner / USFWS, public domain,
//     Seedskadee NWR (Вайоминг, США);
//   * pronghorn-grasslands.jpg — Cephas, CC BY-SA 4.0, Grasslands NP.
//   Фото из Forestry Farm Park (зоопарк в Саскатуне) сознательно не взяла.

export const PRONGHORN = {
  slug: 'pronghorn',
  name: 'Pronghorn',
  shortName: 'Pronghorn',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Pronghorn/pronghorn-hero.jpg',
  heroVideo: '/wildlife/Pronghorn/pronghorn-hero.mp4',
  heroCredit: 'Photo: Cephas / Wikimedia Commons · CC BY-SA 4.0 · Grasslands NP, Saskatchewan',
  heroVideoCredit: 'Video: Eran (ערן) / Wikimedia Commons · CC BY 4.0 · Lamar Valley, Yellowstone',
  description:
    "The fastest land mammal in North America, reaching up to 95 km/h across the open prairie. Pronghorn are shy and harmless to people — the real dangers are to them: barbed-wire fences, highways, and deep-snow winters on the northern edge of their range in Alberta and Saskatchewan.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Top Speed', value: 'Up To 95 KM/H' },
    { label: 'Weight', value: '~40-68 KG' },
    { label: 'Field Of View', value: '~320°' },
    { label: 'Migration (AB)', value: 'Up To 800 KM' },
    { label: 'Habitat', value: 'Open Prairie' },
    { label: 'In Canada', value: 'AB & SK' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Pronghorn spook easily. Watch from your vehicle or from a distance, and never chase them — on foot or by car.',
  },

  behaviorSection: {
    tag: 'Pronghorn Behaviour',
    title: 'Built For',
    highlight: 'Speed',
    accent: '#38a169',
    cards: [
      {
        title: 'Fastest In North America',
        icon: 'RunningFigure',
        description:
          'Pronghorn can reach about 95 km/h and keep up a fast pace over long distances.',
      },
      {
        title: 'Eyes Like Binoculars',
        icon: 'Eye',
        description:
          'Large, bulging eyes give them roughly a 320° field of view, so they spot danger — including you — from very far away.',
      },
      {
        title: 'The White Alarm Signal',
        icon: 'AlertTriangle',
        description:
          'When alarmed, the long white hairs on the rump stand up and flash, warning the rest of the herd to run.',
      },
      {
        title: 'Horns They Shed',
        icon: 'Calendar',
        description:
          'Their horns are a bony core under a keratin sheath. The sheath falls off every winter and regrows in spring — a rare trait among horned animals.',
      },
      {
        title: 'Under, Not Over',
        icon: 'ArrowDown',
        description:
          'Pronghorn rarely jump fences — they crawl underneath. Low barbed wire cuts their backs, and in deep snow fences can trap whole herds.',
      },
      {
        title: 'Long Prairie Migrations',
        icon: 'Compass',
        description:
          'In Alberta, pronghorn often migrate about 300 km between seasonal ranges, and some travel as far as 800 km.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Chase Pronghorn',
      icon: 'Car',
      description: 'Chasing them on foot or by vehicle burns energy they need to survive winter — and can drive them into fences or traffic.',
    },
    {
      title: 'Never Feed Grain Or Livestock Feed',
      icon: 'XCircle',
      description: 'A pronghorn’s stomach often can’t handle grain or stockpiled feed. In hard winters this kind of food kills many of them.',
    },
    {
      title: 'Never Approach A Hidden Fawn',
      icon: 'EyeOff',
      description: 'Fawns lie still in the grass while their mother feeds nearby. Leave them exactly where they are.',
    },
    {
      title: 'Never Leave Old Wire On The Ground',
      icon: 'Trash2',
      description: 'Loose and abandoned wire tangles legs and horns. Pack out any wire or debris you find on public land.',
    },
    {
      title: 'Never Let Dogs Run Loose',
      icon: 'DogIcon',
      description: 'Dogs chasing pronghorn exhaust them and can separate fawns from their mothers.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From Your Vehicle',
      icon: 'Car',
      description: 'On prairie roads, a parked car makes a perfect blind. Pull well off the road and stay inside.',
    },
    {
      title: 'Use Binoculars',
      icon: 'Eye',
      description: 'With their 320° vision, pronghorn will see you first. Give them space and enjoy them through a lens.',
    },
    {
      title: 'Drive Carefully On Prairie Roads',
      icon: 'AlertTriangle',
      description: 'Herds cross highways and gravel roads during migration. Slow down in pronghorn country, especially in fall and winter.',
    },
    {
      title: 'Leave Gates As You Find Them',
      icon: 'DoorOpen',
      description: 'On ranch land and public grasslands, respect gates and fences — and support wildlife-friendly fencing projects.',
    },
    {
      title: 'Report Trapped Or Injured Animals',
      icon: 'Phone',
      description: 'If you see pronghorn caught in a fence or hurt on a road, report it to provincial wildlife officers or park staff.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in national parks is illegal. For pronghorn, human food and grain are especially dangerous — their stomachs often cannot digest it, and winter feeding has killed many animals.',
    items: [
      { name: 'Grain And Livestock Feed', icon: '🌾', description: 'Often fatal to pronghorn in winter' },
      { name: 'Bread And Crackers', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws pronghorn toward roads and people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Corn', icon: '🌽', description: 'Rich food their stomachs struggle with' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Salt', icon: '🧂', description: 'Pulls animals onto roads' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Prairie Parks',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Pronghorn' },
  spotParks: [
    { name: 'Grasslands National Park', province: 'Saskatchewan', season: 'Spring to fall — open prairie', level: 'safe' },
    { name: 'Dinosaur Provincial Park', province: 'Alberta', season: 'Spring to fall — badlands edges', level: 'safe' },
    { name: 'Writing-on-Stone Provincial Park', province: 'Alberta', season: 'Spring to fall — grasslands above the river', level: 'safe' },
    { name: 'Southeast Alberta & SW Saskatchewan', province: 'Prairie backroads', season: 'Year-round — watch from your car', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop At A Distance',
      description:
        'Pronghorn usually see you long before you see them. Stop where you are, ideally in your vehicle, and watch.',
    },
    {
      title: 'Stay Quiet And Still',
      description:
        'If the white rump hairs flare up, the herd is alarmed. Hold still or move back so they don’t bolt toward a fence or road.',
    },
    {
      title: 'Let Them Cross',
      description:
        'If a herd is crossing the road, stop safely and wait — pronghorn often follow one another, so expect more than one.',
    },
    {
      title: 'Help, Don’t Handle',
      description:
        'Never try to free a pronghorn caught in a fence yourself. Note the location and report it to wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/Pronghorn/pronghorn-gravelbourg.jpg', credit: 'Awmcphee · CC BY-SA 3.0 · Gravelbourg, Saskatchewan' },
    { src: '/wildlife/Pronghorn/pronghorn-running.jpg', credit: 'Tom Koerner / USFWS · Public domain · Wyoming' },
    { src: '/wildlife/Pronghorn/pronghorn-grasslands.jpg', credit: 'Cephas · CC BY-SA 4.0 · Grasslands NP' },
  ],
};

export default PRONGHORN;
