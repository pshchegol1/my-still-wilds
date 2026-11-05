// Polar Bear — данные страницы /wildlife/polar-bear
//
// Контент этой версии перенесён с макета, присланного пользователем
// (скриншот страницы, сгенерированной отдельно от этого сайта), с двумя
// сознательными правками и одним дополнением сверх дословного переноса:
//
// 1) ИСПРАВЛЕНО: в макете Wapusk National Park подписан как парк в
//    провинции Nunavut — это ошибка, Wapusk фактически в Манитобе (как и
//    Черчилл). Пользователь подтвердил исправление на Manitoba, остальные
//    данные перенесены как есть.
// 2) ИСПРАВЛЕНО (без отдельного решения пользователя — явная ошибка
//    копипаста в самом макете, не фактический вопрос): карточка поведения
//    "Active Day And Night" в макете дословно повторяла текст карточки
//    "Apex Marine Predator" (про плавание, а не про активность днём/ночью)
//    — текст переписан по смыслу заголовка. Аналогично пункт "Always Do"
//    — "Hire A Licensed Polar Bear Guide" в макете шёл с текстом про позу
//    тела и "black bears" (явно перепутанный кусок из другого раздела
//    сайта) — переписан по смыслу заголовка.
// 3) ДОБАВЛЕНО сверх макета: heroVideo/heroImage с подписью автора — в
//    макете шапка вообще без фото/видео, просто звёздный градиент.
//    Пользователь прямо попросил оставить ранее добавленное видео
//    (public/wildlife/Polar Bear/polar bear.mp4) и фото-постер, и
//    добавить звёздный фон уже поверх/вокруг них (starryBackground ниже
//    покрывает мерцающими звёздами всю страницу под остальным контентом,
//    видео в шапке не трогает).
//
// Остальные цифры и формулировки (вес, скорость, дальность заплыва,
// дальность чутья, популяция, зоны дистанции, тексты правил, список
// кормов, описания парков, номер Polar Bear Alert, шаги при встрече) —
// дословно с макета по требованию пользователя ("остальные данные я
// переношу как есть"), БЕЗ дополнительной перепроверки через свои
// источники. Отдельно стоит обратить внимание: "Population In Canada:
// ~26,000" в макете — это, похоже, перепутанная мировая популяция белого
// медведя (в прошлой версии файла я проверяла: мировая ≈26,000, именно
// канадская ≈16,000 по оценке COSEWIC). Перенесено как в макете по прямой
// просьбе пользователя, но не перепроверено заново — стоит свериться
// отдельно, если точность именно этой цифры важна.
//
// 4) behaviorSection.cards[].image — круглые иллюстрации добавлены
//    пользователем вручную в public/wildlife/Polar Bear (файлы с UUID-
//    именами). Сопоставлены с карточками по содержанию рисунка: медведь
//    в воде/на льду — Apex Marine Predator; медведь преследует человека —
//    They Hunt Humans; медведь принюхивается со "шлейфом" запаха —
//    Extraordinary Sense Of Smell; круг, поделённый на день/ночь — Active
//    Day And Night; круг на 4 сезона (снег/цветы/осень/солнце) —
//    Seasonal Presence; медведица с двумя медвежатами на льду — Mother
//    With Cubs.

export const POLAR_BEAR = {
  slug: 'polar-bear',
  name: 'Polar Bear',
  shortName: 'Polar Bear',
  shortNamePlural: 'Polar Bears',
  tag: 'Most Dangerous Animal',
  level: 'danger',
  image: '/wildlife/Polar Bear/polar-bear-hero.jpg',
  heroVideo: '/wildlife/Polar Bear/polar bear.mp4',
  heroCredit: 'Photo: Rituraj Phukan / Wikimedia Commons · CC BY 4.0 · Churchill, Manitoba',
  starryBackground: true,
  quickFactsAccent: { text: '#7ec8e3', border: 'rgba(126,200,227,0.45)', bg: 'rgba(126,200,227,0.12)', rgb: '126, 200, 227' },
  parksTagAccent: '#7ec8e3',
  description:
    "The world's largest land predator and the apex predator of the Arctic — the polar bear is the only bear that actively hunts humans. It is intelligent, patient, and capable of swimming hundreds of kilometres. Extreme caution is required at all times.",

  actions: [
    { label: 'Where To See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '350-700 KG' },
    { label: 'Length', value: '1.8-2.8 M' },
    { label: 'Speed', value: '40 Km/H' },
    { label: 'Swimming', value: '100+ Km' },
    { label: 'Population In Canada', value: '~26,000' },
    { label: 'Smell Range', value: '32 Km' },
  ],

  minDistanceWarning: {
    title: 'Most Dangerous Bear',
    text: 'The only bear species that actively hunts humans. Bear spray alone may not be sufficient. Firearms required in Churchill.',
  },

  behaviorSection: {
    tag: 'Arctic Behaviour',
    title: 'Understanding The',
    highlight: "World's Largest Land Predator",
    accent: '#488CDC',
    cards: [
      {
        title: 'Apex Marine Predator',
        image: '/wildlife/Polar Bear/5d5f4fd0-2635-471c-96f1-f1fff5a5a017 1.png',
        description:
          'Unlike black and grizzly bears, polar bears are classified as marine mammals. They can swim continuously for days, covering over 100 km. They hunt primarily on sea ice, ambushing ringed seals at breathing holes.',
      },
      {
        title: 'They Hunt Humans',
        image: '/wildlife/Polar Bear/5038c4ff-173f-4051-b809-884a0ce0bb02 2.png',
        description:
          'Polar bears are the only bear species that will stalk and actively hunt humans as prey. Unlike grizzly encounters — which are usually surprise or defensive — a polar bear approaching you is likely hunting you. There is no bluff charge.',
      },
      {
        title: 'Extraordinary Sense Of Smell',
        image: '/wildlife/Polar Bear/831486c3-4c50-408a-876b-d23db67fc0b6 1.png',
        description:
          'A polar bear can smell a seal — or a human — from up to 32 kilometres away and detect prey under 3 feet of snow. They can smell a camp, food, or garbage from enormous distances. This makes them extremely attracted to human settlements.',
      },
      {
        title: 'Active Day And Night',
        image: '/wildlife/Polar Bear/7d32a5a8-27aa-4be4-a116-651c6de1ada1 1.png',
        description:
          "Unlike many mammals, polar bears don't settle into a fixed day/night rhythm or hibernate through winter. They can be active and hunting at any hour, in any season — encounters are not limited to daylight.",
      },
      {
        title: 'Seasonal Presence',
        image: '/wildlife/Polar Bear/2b4648af-b84b-4e0a-9007-d93afb82a54e 1.png',
        description:
          'In Churchill, Manitoba, bears gather from October to November waiting for Hudson Bay to freeze. This is peak season — hundreds of bears are present. In summer, some bears remain along coasts and are hungrier and more dangerous.',
      },
      {
        title: 'Mother With Cubs',
        image: '/wildlife/Polar Bear/6ed476e6-61b8-4c34-8190-e31403350bac 1.png',
        description:
          'A mother polar bear with cubs is extraordinarily dangerous. She will attack without warning or provocation. Give mothers with cubs the maximum possible distance — never get between them. Never corner them against a barrier.',
      },
    ],
  },

  distanceLabels: {
    outer: '300m-RECOMMENDED DISTANCE IN CHURCHILL',
    mid: '100m — Legal Minimum',
    inner: '50m — EXTREME DANGER',
  },

  distanceZones: [
    {
      range: '0-50M',
      label: 'Lethal Zone',
      description: 'A polar bear at this distance is in attack range. Deploy bear spray. Use firearm if available. Do not run.',
      level: 'danger',
    },
    {
      range: '50-300M',
      label: 'Danger Zone',
      description: "Back away to shelter immediately. Never turn your back. Alert others and call Bear Alert.",
      level: 'caution',
    },
    {
      range: '300M+',
      label: 'Recommended Distance',
      description: 'Observe from vehicles or bear-proof shelters only. Never approach closer.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Run From A Polar Bear',
      icon: 'RunningFigure',
      description: 'Running signals prey behaviour. A polar bear can reach 40 km/h on land and is an exceptional swimmer. You cannot escape.',
    },
    {
      title: 'Never Walk Alone In Polar Bear Territory',
      icon: 'Moon',
      description: 'In Churchill, never walk outside alone — day or night. Always travel in groups with an armed polar bear guard.',
    },
    {
      title: 'Never Play Dead',
      icon: 'Skull',
      description: 'Playing dead does not work with polar bears. They are active predators — fight back with everything you have if contact occurs.',
    },
    {
      title: 'Never Leave A Vehicle For Photos',
      icon: 'Camera',
      description: 'In Churchill, polar bear watching is done from specially designed Tundra Buggies. Never exit a vehicle near polar bears.',
    },
    {
      title: 'Never Leave Any Food Or Garbage Outside',
      icon: 'Trash2',
      description: "Churchill has bear-proof bins for a reason. A polar bear's sense of smell will detect any food from enormous distances.",
    },
  ],

  alwaysDo: [
    {
      title: 'Hire A Licensed Polar Bear Guide',
      icon: 'Users',
      description: 'A licensed, armed polar bear guide knows the terrain, reads bear behaviour, and is trained to respond. Never venture into polar bear territory without one.',
    },
    {
      title: 'Carry Bear Spray — And Know It May Not Be Enough',
      icon: 'SprayCan',
      description: 'Bear spray is effective but polar bears are larger than grizzlies. In Churchill, guides also carry firearms for additional protection.',
    },
    {
      title: 'Call The Polar Bear Alert Line Immediately',
      icon: 'Phone',
      description: 'Churchill: 204-675-2327. If you see a bear near town, call immediately. Do not approach. Manitoba Conservation officers will respond.',
    },
    {
      title: 'Stay Inside Or In A Vehicle',
      icon: 'Car',
      description: 'In Churchill during bear season, stay indoors or in a vehicle. Walk between buildings quickly. If caught outside, get to shelter immediately.',
    },
    {
      title: 'Fight Back Aggressively If Attacked',
      icon: 'XCircle',
      description: 'Polar bear attacks are predatory. Fight back with maximum aggression. Use any weapon — sticks, rocks, flares. Aim for the nose and eyes.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding a polar bear is illegal and potentially fatal. A polar bear that loses its natural fear of humans becomes an immediate danger to the entire community and must be euthanized. Fines up to $100,000 in Nunavut.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Creates immediate association between humans and prey' },
      { name: 'Dog Food Or Pet Food', icon: '🐾', description: 'Dogs are prey for polar bears — their food attracts bears immediately' },
      { name: 'Bread & Grains', icon: '/icons/wildlife/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Candy & Sweets', icon: '/icons/wildlife/🍬.png', description: 'Any human food scent attracts bears to camp or town' },
      { name: 'Fish And Seafood', icon: '/icons/wildlife/🐟.png', description: 'Their natural prey — reinforces hunting behaviour near humans' },
      { name: 'Bones And Scraps', icon: '🦴', description: 'Bears return to the same location repeatedly once fed' },
      { name: 'Dairy Products', icon: '/icons/wildlife/🥛.png', description: 'Polar bears detect odours from 32 km away' },
      { name: 'Any Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use bear-proof containers. Never leave waste in the open' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Best Places To', highlight: 'Spot Polar Bears' },
  spotParks: [
    { name: 'Churchill Wildlife Area', province: 'Manitoba', season: 'Guaranteed sightings — Oct to Nov', level: 'safe' },
    { name: 'Wapusk National Park', province: 'Manitoba', season: 'Denning area — highest density', level: 'safe' },
    { name: 'Auyuittuq National Park', province: 'Nunavut', season: 'Possible — always carry firearms', level: 'caution' },
    { name: 'Aulavik National Park', province: 'NWT', season: 'Remote Arctic — guide required', level: 'caution' },
  ],

  infoCallout: {
    title: 'Churchill Polar Bear Alert Number',
    text: 'If you see a polar bear near Churchill town: Call 204-675-2327 immediately. Manitoba Conservation officers operate 24/7 during bear season. Do not approach the bear. Get inside immediately and wait for officials.',
  },

  bearSprayTitle: 'Bear Spray + Firearm',
  bearSprayButtonLabel: 'Bear Spray Guide',
  bearSprayImage2: '/wildlife/Polar Bear/firearm.png',
  bearSprayNote:
    'In polar bear territory, bear spray is mandatory but firearms are also recommended. Guides in Churchill and Nunavut carry rifles. Bear spray effective range: 7–9 metres. Never venture into polar bear habitat without a licensed armed guide.',

  encounterSteps: [
    {
      title: 'Get To Shelter Immediately',
      description:
        'Unlike other bears — do not try to assess the situation. If you see a polar bear in Churchill or any Arctic settlement, get inside the nearest building or vehicle immediately. Call 204-675-2327. Do not wait to see what the bear does.',
    },
    {
      title: 'If In The Wilderness — Do Not Run',
      description:
        'If you are in a remote area, stand your ground. Make yourself appear as large as possible. Speak loudly and firmly. Wave arms. Use flares or air horn if available. Back slowly toward shelter without turning your back.',
    },
    {
      title: 'Deploy Bear Spray At 7-9 Metres',
      description:
        'If the bear continues to approach, deploy bear spray in a wide sweeping arc when within 7–9 metres. Unlike grizzlies, polar bear charges are rarely bluffs. If you have a firearm and a licensed guide, follow their instructions precisely.',
    },
    {
      title: 'If Contact Occurs — Fight Back With Everything',
      description:
        'Never play dead with a polar bear. Fight back with absolute maximum aggression. Use every weapon available — sticks, rocks, trekking poles. Aim for the nose, eyes, and ears. Shout, kick, bite if necessary. This is a predatory attack — your only chance is to make the bear decide the fight is not worth the cost.',
    },
  ],

  // Галерея заменена пользователем на собственные фото (Pexels,
  // pascalphotgraphy360) — визуально похоже на съёмку в зоопарке (те же
  // бетонные камни/мутная вода, что и у heroVideo выше), но это не
  // проверялось напрямую через Pexels API, только по кадру. Подпись
  // автора не добавлена, т.к. Pexels-лицензия не требует атрибуции.
  gallery: [
    '/wildlife/Polar Bear/pexels-pascalphotgraphy360-18022548.jpg',
    '/wildlife/Polar Bear/pexels-pascalphotgraphy360-18022551.jpg',
    '/wildlife/Polar Bear/pexels-pascalphotgraphy360-29140056.jpg',
  ],
};

export default POLAR_BEAR;
