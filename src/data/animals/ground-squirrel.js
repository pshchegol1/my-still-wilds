// Ground Squirrel — данные страницы /wildlife/ground-squirrel
//
// Сделано самостоятельно без макета, по той же схеме, что Porcupine.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет). На карточке
// "Yukon · NWT · Prairies", поэтому страница про три канадских вида:
// арктический (Юкон/СЗТ/Нунавут), колумбийский (Скалистые горы) и
// суслик Ричардсона (прерии).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - NPS "Arctic ground squirrel" + Barnes, Science 1989: в спячке
//   температура тела опускается до -2.9°C, а зверёк не замерзает
//   (Guinness — самая низкая температура тела у млекопитающего);
//   спячка до ~9 месяцев (Guinness); летом тело ~37°C; периодически
//   "просыпаются" и дрожат 12-15 часов, чтобы согреться.
// - Parks Canada (Banff / Waterton) и CBC / RMOutlook: колумбийский
//   суслик спит до ~7 месяцев (около 70% года; в Альберте ~250 дней) —
//   важная добыча для гризли, койотов, волков и беркутов; в Waterton его
//   часто ошибочно называют "gopher"; в Банфе защищён от ядов и
//   смертельных ловушек. Блохи сусликов могут переносить возбудителя
//   чумы (Yersinia pestis) — поэтому не трогать и не кормить.
// - Суслик Ричардсона — по фото из Grasslands NP (Cephas); отдельных
//   цифр по нему на странице нет.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - gsq-hero.mp4 — "Yukon Ground Squirrel Chirp Video", Tmanaok,
//   Wikimedia Commons, CC BY 4.0 — арктический суслик свистит у норы на
//   склоне King's Throne Peak (Kluane NP, Юкон); 4K исходник, 8.7 с
//   (зациклено), уменьшено до 1600 px.
// - gsq-hero.jpg — Charles J. Sharp, CC BY-SA 4.0, колумбийский суслик,
//   Banff NP.
// - Галерея:
//   * gsq-arctic.jpg — NPS / Jacob W. Frank, public domain, арктический
//     суслик (Аляска);
//   * gsq-columbian.jpg — Charles J. Sharp, CC BY-SA 4.0, колумбийский
//     суслик с детёнышем, Bow Valley Parkway, Banff;
//   * gsq-richardsons.jpg — Cephas, CC BY-SA 4.0, суслик Ричардсона,
//     Grasslands NP, Саскачеван.

export const GROUND_SQUIRREL = {
  slug: 'ground-squirrel',
  name: 'Ground Squirrel',
  shortName: 'Ground Squirrel',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Ground Squirrel/gsq-hero.jpg',
  heroVideo: '/wildlife/Ground Squirrel/gsq-hero.mp4',
  heroCredit: 'Photo: Charles J. Sharp / Wikimedia Commons · CC BY-SA 4.0 · Banff NP',
  heroVideoCredit: 'Video: Tmanaok / Wikimedia Commons · CC BY 4.0 · Kluane NP, Yukon',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "The whistling sentries of Canada's meadows, mountains, and tundra. Arctic, Columbian, and Richardson's ground squirrels spend most of the year asleep underground — and the Arctic ground squirrel survives winter with a body temperature below freezing. Cute and bold, but please don't feed them.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Canadian Species', value: 'Arctic, Columbian, Richardson’s' },
    { label: 'Coldest Body', value: '-2.9°C (Arctic)' },
    { label: 'Hibernation', value: 'Up To 7-9 Months' },
    { label: 'Summer Body', value: '~37°C' },
    { label: 'Habitat', value: 'Meadows & Tundra' },
    { label: 'Status', value: 'Common' },
  ],

  minDistanceWarning: {
    title: 'Don’t Feed — Don’t Touch',
    text: 'Feeding wildlife is illegal in national parks. Ground squirrels can carry fleas that spread disease, so never hand-feed or handle them.',
  },

  behaviorSection: {
    tag: 'Ground Squirrel Behaviour',
    title: 'Masters Of',
    highlight: 'Hibernation',
    accent: '#38a169',
    cards: [
      {
        title: 'Below-Freezing Bodies',
        icon: 'Wind',
        description:
          'In deep hibernation, Arctic ground squirrels cool their bodies to as low as -2.9°C without freezing — the lowest body temperature recorded in any mammal.',
      },
      {
        title: 'Months Underground',
        icon: 'Moon',
        description:
          'Columbian ground squirrels sleep up to seven months a year, and Arctic ground squirrels can hibernate up to nine. Summer is short and busy.',
      },
      {
        title: 'Shivering Wake-Ups',
        icon: 'Flame',
        description:
          'Every so often during winter, hibernating Arctic ground squirrels shiver for 12–15 hours to rewarm, then cool down again.',
      },
      {
        title: 'Alarm Whistles',
        icon: 'Volume2',
        description:
          'Standing upright by their burrows, ground squirrels give sharp chirps and whistles to warn neighbours of hawks, eagles, foxes, and people.',
      },
      {
        title: 'Food For Many',
        icon: 'UsersThreeIcon',
        description:
          'In the Rockies, Columbian ground squirrels are key prey for grizzly bears, coyotes, wolves, and golden eagles.',
      },
      {
        title: 'Not A “Gopher”',
        icon: 'AlertTriangle',
        description:
          'Ground squirrels are often called gophers, but true gophers are a different group of burrowing rodents.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Feed Ground Squirrels',
      icon: 'Trash2',
      description: 'Feeding wildlife is illegal in national parks. Fed squirrels crowd trails and picnic areas and lose their natural diet.',
    },
    {
      title: 'Never Hand-Feed Or Touch',
      icon: 'XCircle',
      description: 'Ground squirrels can bite, and their fleas can carry plague bacteria. Keep your hands to yourself.',
    },
    {
      title: 'Never Dig Into Burrows',
      icon: 'DoorOpen',
      description: 'Burrows shelter families and hibernating animals. Leave them untouched.',
    },
    {
      title: 'Never Let Dogs Chase Them',
      icon: 'DogIcon',
      description: 'Dogs digging at burrows destroy homes and can pick up fleas. Keep dogs leashed.',
    },
    {
      title: 'Never Leave Snacks Unattended',
      icon: 'Trash2',
      description: 'Ground squirrels will raid open packs and picnic tables in seconds.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From The Trail',
      icon: 'Eye',
      description: 'Sit quietly near a meadow and watch them stand guard, feed, and chase each other.',
    },
    {
      title: 'Listen For The Whistle',
      icon: 'Ear',
      description: 'A sharp chirp often means a predator is overhead — look up for hawks and eagles.',
    },
    {
      title: 'Close Your Pack',
      icon: 'ShieldCheck',
      description: 'Keep food zipped away and pack out every crumb.',
    },
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Protects burrows and keeps your dog away from fleas.',
    },
    {
      title: 'Report Dead Or Sick Animals',
      icon: 'Phone',
      description: 'Several dead ground squirrels in one area should be reported to park staff — don’t handle them.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Hand-fed ground squirrels bite, swarm picnic areas, and draw in predators — and their fleas can carry disease.',
    items: [
      { name: 'Nuts And Trail Mix', icon: '🥜', description: 'The most common handout on trails' },
      { name: 'Bread And Crackers', icon: '/icons/wildlife/🍞.png', description: 'Junk food that replaces their natural diet' },
      { name: 'Chips And Snacks', icon: '🥨', description: 'Salt and fat they cannot handle' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and teaches begging' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Draws squirrels to people' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Seeds And Bird Seed', icon: '🌻', description: 'Concentrates squirrels in one place' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Ground Squirrels Live' },
  spotParks: [
    { name: 'Kluane National Park', province: 'Yukon', season: 'Summer — Arctic ground squirrels in alpine meadows', level: 'safe' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Spring to late summer — Columbian ground squirrels', level: 'safe' },
    { name: 'Waterton Lakes National Park', province: 'Alberta', season: 'Spring to summer — meadows near the townsite', level: 'safe' },
    { name: 'Grasslands National Park', province: 'Saskatchewan', season: 'Spring to summer — Richardson’s ground squirrels', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Watch Without Feeding',
      description:
        'If a ground squirrel comes close, it is probably used to handouts. Keep your hands and food to yourself.',
    },
    {
      title: 'Shoo It Away',
      description:
        'Stand up, wave your hands, and pack up food so it learns people are not a food source.',
    },
    {
      title: 'Don’t Touch',
      description:
        'Never pick up a ground squirrel, even a young one. Bites and fleas are both real risks.',
    },
    {
      title: 'Wash And Report Bites',
      description:
        'If bitten or scratched, wash the area well and see a health professional. Report it to park staff.',
    },
  ],

  gallery: [
    { src: '/wildlife/Ground Squirrel/gsq-arctic.jpg', credit: 'NPS / Jacob W. Frank · Public domain · Arctic ground squirrel' },
    { src: '/wildlife/Ground Squirrel/gsq-columbian.jpg', credit: 'Charles J. Sharp · CC BY-SA 4.0 · Columbian, Banff NP' },
    { src: '/wildlife/Ground Squirrel/gsq-richardsons.jpg', credit: 'Cephas · CC BY-SA 4.0 · Richardson’s, Grasslands NP' },
  ],
};

export default GROUND_SQUIRREL;
