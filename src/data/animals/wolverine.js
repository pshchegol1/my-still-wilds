// Wolverine — данные страницы /wildlife/wolverine
//
// Сделано самостоятельно без макета, по той же схеме, что Wood Bison /
// Orca / Coyote.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/длина: самцы ~11-18 кг, самки ~6-15 кг, общая длина около 1 м
//   (до ~1.25 м) — Alberta SAR fact sheet, Saskatchewan status assessment
//   (со ссылкой на COSEWIC), species account.
// - Скорость: в надёжных источниках не нашла — поле Speed НЕ использую.
// - Участок обитания: у самцов 230-1,580 км², у самок с детёнышами
//   50-400 км² — Parks Canada (Glacier / Mount Revelstoke NP).
// - Популяция и статус: COSEWIC 2014 — "Special Concern", единая
//   популяция по всей Канаде, численность неизвестна, но вероятно
//   >10,000 взрослых особей; SARA Schedule 1 — Special Concern (2018).
//   Исчезла (или почти) на большей части юга и востока Канады.
// - Поведение (Parks Canada): пересекает горы напрямую, а не обходит их;
//   охотится на карибу и горных козлов, ест сурков, дикобразов, сусликов,
//   корни и ягоды, но большая часть рациона — туши крупных животных,
//   погибших от хищников или лавин. Беременные самки в конце зимы уходят
//   высоко в горы и устраивают логово под снегом среди валунов/осыпей;
//   беспокойство от лыжников, хелиски и снегоходов может заставить
//   бросить логово. Трасса Trans-Canada частично разрывает ареал.
// - Правила безопасности (Parks Canada): не приближаться, не идти по
//   следам к животному; если похоже на логово (несколько цепочек следов к
//   отверстию в снегу) — немедленно уйти и сообщить персоналу парка.
//   Минимальная дистанция 30 м — общее правило Parks Canada для "прочих"
//   диких животных (100 м — для медведей, волков, кугуаров).
// - "Защищает добычу даже от крупных хищников" — широко распространённое
//   утверждение, сформулировано на странице осторожно ("reported to").
// - Видео: свободного видео дикой росомахи (не зоопарк) найти не удалось
//   — на Pexels росомах нет вообще. heroVideo не задан, в шапке фото.
// - Фото (все public domain, US National Park Service):
//   * wolverine-hero.jpg — самка "Joni" с двумя детёнышами, фотоловушка
//     NPS / Cascades Carnivore Project, Mount Rainier NP (Вашингтон, США)
//     — дикая особь; обрезаны служебные полосы с датой/температурой.
//   * wolverine-snow.jpg — тот же проект, фотоловушка у исследовательской
//     станции (видна деревянная конструкция приманки), обрезаны полосы.
//   * wolverine-arctic.jpg — Gates of the Arctic NP (Аляска), S. Behrns,
//     NPS; дикая, но маленькое разрешение (482 px) — только для галереи.
//   * wolverine-rock.jpg — из слайд-архива NPS Yellowstone, 1968; дикая
//     это особь или в неволе — в описании файла не указано.

export const WOLVERINE = {
  slug: 'wolverine',
  name: 'Wolverine',
  shortName: 'Wolverine',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/Wolverine/wolverine-hero.jpg',
  // На кадре фотоловушки животные в самом низу — без сдвига они
  // оказываются под заголовком и панелью Quick Facts.
  heroZoomPan: 'scale(1.6) translate(4%, -18%)',
  description:
    "The ghost of Canada's mountains — a solitary, rarely seen member of the weasel family that crosses entire ranges in search of food. Wolverines pose almost no risk to people; the real danger runs the other way, as winter disturbance near dens can drive mothers to abandon their young.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '6-18 KG' },
    { label: 'Length', value: '~1 M' },
    { label: 'Home Range', value: 'Up To 1,580 Km²' },
    { label: 'Habitat', value: 'Alpine & Boreal' },
    { label: 'Population', value: '>10,000 Adults' },
    { label: 'Status', value: 'Special Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Never approach or follow tracks toward a wolverine. If you find a den in the snow, leave immediately and report it to park staff.',
  },

  behaviorSection: {
    tag: 'Wolverine Behaviour',
    title: 'Ghost Of',
    highlight: 'The Mountains',
    accent: '#c99a2e',
    cards: [
      {
        title: 'Enormous, Solitary Ranges',
        icon: 'Compass',
        description:
          'A male wolverine can roam a territory of up to 1,580 km². They live alone and at very low densities, which is why even park biologists rarely see one in person.',
      },
      {
        title: 'Over The Mountain, Not Around',
        icon: 'Footprints',
        description:
          'Wolverines often travel straight over mountain ranges instead of going around them, moving from valley bottoms up to alpine tundra and back down again.',
      },
      {
        title: 'Hunter And Scavenger',
        icon: 'PawPrint',
        description:
          'They can kill caribou and mountain goats, but much of their diet comes from carcasses left by other predators or avalanches — plus marmots, porcupines, roots, and berries.',
      },
      {
        title: 'Snow Dens In Late Winter',
        icon: 'Calendar',
        description:
          'Pregnant females climb to high elevations in late winter and den under deep snow among boulders. Skiers, heli-skiers, and snowmobiles nearby can cause them to abandon the den.',
      },
      {
        title: 'Fierce For Their Size',
        icon: 'Flame',
        description:
          'Despite weighing about as much as a medium dog, wolverines are reported to defend a carcass even against much larger predators. Never try to get between one and its food.',
      },
      {
        title: 'A Species Of Special Concern',
        icon: 'AlertTriangle',
        description:
          'Wolverines have disappeared from much of southern and eastern Canada. Highways, habitat loss, trapping, and a warming climate that shrinks deep spring snow all threaten them.',
      },
    ],
  },

  distanceLabels: {
    outer: '100m — Recommended Distance',
    mid: '30m — Parks Canada Minimum',
    inner: '0-10m — Back Away Now',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Back Away Now',
      description: 'Far too close — especially near food or a den. Retreat calmly without turning to run, and give it an open escape route.',
      level: 'danger',
    },
    {
      range: '10-30M',
      label: 'Too Close',
      description: 'Inside the Parks Canada minimum for wildlife. Stop, do not follow, and slowly increase the distance.',
      level: 'caution',
    },
    {
      range: '30M+',
      label: 'Observe Quietly',
      description: 'Watch from a distance with binoculars or a zoom lens, and keep it brief — then note the time and location to report the sighting.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Follow Wolverine Tracks',
      icon: 'Footprints',
      description: 'Tracking a wolverine toward its location disturbs it and can lead you straight to a den. Parks Canada specifically asks visitors not to.',
    },
    {
      title: 'Never Approach A Snow Den',
      icon: 'DoorOpen',
      description: 'Several sets of tracks leading to and from a hole in the snow may mean a den. Leave immediately — disturbance can make a mother abandon her kits.',
    },
    {
      title: 'Never Get Between It And Food',
      icon: 'Skull',
      description: 'A wolverine on a carcass or food cache may defend it fiercely. Never try to scare it off a kill or retrieve food it has taken.',
    },
    {
      title: 'Never Leave Food At Backcountry Huts',
      icon: 'Trash2',
      description: 'Unsecured food, garbage, and caches teach wolverines to raid huts and camps. Store everything properly and pack out all waste.',
    },
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'A wolverine sighting is rare and exciting — but getting closer stresses the animal. Use a zoom lens and stay well back.',
    },
  ],

  alwaysDo: [
    {
      title: 'Give It Space And Let It Leave',
      icon: 'Compass',
      description: 'Most encounters end with the wolverine moving on by itself. Stay calm, keep your distance, and leave it a clear path away from you.',
    },
    {
      title: 'Leave Den Areas Immediately',
      icon: 'ShieldCheck',
      description: 'If you suspect a den, turn back the way you came and notify park staff. Avoid the area for the rest of the season.',
    },
    {
      title: 'Respect Winter Closures',
      icon: 'Calendar',
      description: 'Some backcountry ski and snowmobile areas are closed in late winter to protect denning females. Check closures before heading out.',
    },
    {
      title: 'Secure Food And Garbage',
      icon: 'Trash2',
      description: 'Keep food sealed and stored away from your tent or hut, and never leave scraps, bait, or fish waste behind.',
    },
    {
      title: 'Report Your Sighting',
      icon: 'MegaphoneIcon',
      description: 'Note the time, date, exact location, and track size, and photograph tracks with an object for scale. Park biologists use these reports to study this rare species.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. A wolverine that learns to find food at huts, camps, or trap lines becomes a nuisance and a hazard — and may have to be removed.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws wolverines into camps and huts' },
      { name: 'Fish And Scraps', icon: '/icons/wildlife/🐟.png', description: 'Strong scent carries for long distances' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Teaches wolverines to raid backcountry huts' },
      { name: 'Pet Food', icon: '🐾', description: 'An easy meal that creates habituation' },
      { name: 'Bait Or Trap Lures', icon: '🎣', description: 'Never leave bait unattended in the backcountry' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Any human food scent attracts wildlife' },
      { name: 'Food Caches', icon: '🎒', description: 'Store caches properly — wolverines are famous for raiding them' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Wolverines Live' },
  spotParks: [
    { name: 'Glacier National Park', province: 'British Columbia', season: 'Rare — active Parks Canada research', level: 'caution' },
    { name: 'Mount Revelstoke National Park', province: 'British Columbia', season: 'Rare — alpine and subalpine areas', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Rare — remote backcountry valleys', level: 'caution' },
    { name: 'Kluane National Park', province: 'Yukon', season: 'Rare — vast, remote wilderness', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Stay Calm',
      description:
        'Wolverine sightings are rare and usually brief. Stop where you are, keep quiet, and watch where it is heading so you can stay out of its path.',
    },
    {
      title: 'Give It Room To Leave',
      description:
        'Back away slowly if you are within 30 metres, without turning to run. Make sure the wolverine has a clear escape route away from you.',
    },
    {
      title: 'If It Is On Food Or Near A Den — Leave',
      description:
        'Never try to drive a wolverine off a carcass or approach a possible den. Retreat the way you came and avoid the area entirely.',
    },
    {
      title: 'Report The Sighting',
      description:
        'Record the time, date, exact location, and track measurements, and photograph tracks with a scale object. Send it to park staff — every record helps researchers protect this species.',
    },
  ],

  gallery: [
    { src: '/wildlife/Wolverine/wolverine-arctic.jpg', credit: 'S. Behrns / NPS · Public domain · Gates of the Arctic NP' },
    { src: '/wildlife/Wolverine/wolverine-snow.jpg', credit: 'NPS / Cascades Carnivore Project · Public domain' },
    { src: '/wildlife/Wolverine/wolverine-rock.jpg', credit: 'NPS · Public domain' },
  ],
};

export default WOLVERINE;
