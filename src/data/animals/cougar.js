// Cougar — данные страницы /wildlife/cougar
//
// Контент перенесён с макета, присланного пользователем (скриншот страницы,
// сгенерированной отдельно от этого сайта), тем же способом, что и Polar
// Bear ранее в этой сессии — внимательно построчно прочитан по частям в
// высоком разрешении.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/длина/скорость/прыжок из макета (53-100 кг, 1.5-2.7 м, 80 км/ч,
//   прыжок 5.5 м) в целом согласуются с открытыми источниками: самцы обычно
//   53-72 кг (отдельные особи регистрировались тяжелее), самки 34-48 кг;
//   длина тела с хвостом 1.5-2.75 м; скорость ~80 км/ч короткими рывками;
//   Toronto Zoo указывает прыжок в высоту более 5 м. Точных первоисточников
//   именно на верхнюю границу веса 100 кг и территорию 1,000 км² отдельно
//   не нашла — цифры из макета не противоречат общему диапазону, перенесены
//   как есть.
// - Статус "Least Concern": глобальный статус IUCN для вида в целом —
//   Least Concern; в Канаде вид оценён как "Secure" (National General
//   Status, 2005), в Онтарио, где популяция почти исчезла, отдельный
//   региональный статус "Special Concern" — на сайте показан только общий
//   канадский/глобальный статус, как в макете.
// - Парки (Pacific Rim, Gulf Islands, Banff, Waterton Lakes) — реальные
//   национальные парки с задокументированным присутствием кугуаров
//   (западное побережье BC и предгорья Альберты — основной ареал вида в
//   Канаде), это общеизвестный факт, отдельно по каждому парку не
//   перепроверялось в этой сессии.
// - Фото и видео — ВАЖНАЯ ОГОВОРКА: перепробовала около десятка кандидатов
//   с Pexels и Wikimedia Commons; почти все подписаны прямо как зоопарк
//   ("zoo", "enclosure") или на кадре виден вольер (сетка-рабица на фоне).
//   Единственные кандидаты без явных признаков вольера в кадре —
//   использованные ниже видео и фото, но это не равно подтверждению, что
//   животное дикое: это стандартная практика фотографии больших кошек в
//   "естественных" вольерах заповедников/реабилитационных центров, кадр
//   просто не показывает ограждение. Выдавать за однозначно дикую съёмку
//   нельзя — поэтому эта оговорка прямо здесь, а не как на Polar Bear,
//   где подлинность диких медведей Черчилла была подтверждена по описанию
//   файла и местоположению.
//   * heroVideo/cougar-hero.jpg — Pexels, "Footage of Cougar (Puma
//     concolor) in Forest", автор Nicky Pe, лицензия Pexels (атрибуция не
//     обязательна).
//   * cougar-hero.jpg (постер, крупный портрет) — Pexels, "Close-up on a
//     Brown Puma", автор Petr Ganaj.
//   * cougar-log.jpg (галерея, на бревне) — Pexels, "Cougar On Log",
//     автор Lucas Pezeta — на заднем плане этого кадра различимо
//     ограждение (слегка не в фокусе) — самый спорный из трёх, оставлен
//     из-за нехватки лучшей альтернативы.
//   * cougar-forest.jpg (галерея) — кадр из того же видео Nicky Pe.

export const COUGAR = {
  slug: 'cougar',
  name: 'Cougar',
  shortName: 'Cougar',
  shortNamePlural: 'Cougars',
  tag: 'Most Dangerous Animal',
  level: 'danger',
  image: '/wildlife/Cougar/cougar-hero.jpg',
  heroVideo: '/wildlife/Cougar/cougar-hero.mp4',
  // Видео кадрировано так, что морда кугуара оказывалась ровно под
  // панелью Quick Facts — сдвигаем видимую область выше, чтобы лицо не
  // перекрывалось рамкой.
  heroObjectPosition: 'center 100%',
  quickFactsShiftRight: '-2rem',
  description:
    "Canada's most secretive large predator — the cougar stalks its prey silently and strikes without warning. Also known as mountain lion or puma, it is the largest wild cat in Canada and a supreme ambush hunter.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '53-100 KG' },
    { label: 'Length', value: '1.5-2.7 M' },
    { label: 'Speed', value: '80 Km/H' },
    { label: 'Jump', value: '5.5M High' },
    { label: 'Territory', value: '1,000 Km2' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres',
    text: 'Cougars stalk silently. You may never see it before it attacks. Always hike in groups.',
  },

  behaviorSection: {
    tag: 'Cougar Behaviour',
    title: 'The',
    highlight: 'Ghost Of The Forest',
    accent: '#D4A017',
    cards: [
      {
        title: 'Invisible Predator',
        image: '/wildlife/Cougar/c30c139b-1a47-45d7-989c-4b7cbc21d63b 1.png',
        description:
          'Cougars are masters of stealth. A cougar can follow a hiker for hours without being seen or heard. Most people never know a cougar was watching them. Their spotted coat provides perfect camouflage in forests and rocky terrain.',
      },
      {
        title: 'Ambush Hunter',
        image: '/wildlife/Cougar/7d686996-0fd7-422c-aa39-cac6e567163c 1.png',
        description:
          'Unlike bears and wolves, cougars do not chase prey over long distances. They stalk patiently, get within 10-15 metres, then launch a single explosive attack — leaping onto the prey\'s back and biting the neck. The attack is over in seconds.',
      },
      {
        title: 'Most Active At Dawn And Dusk',
        image: '/wildlife/Cougar/2d07a8f8-16de-4946-a75b-ff3ac7247bb5 1.png',
        description:
          'Cougars hunt primarily at dawn and dusk when their vision gives them a significant advantage. Avoid hiking alone during these hours in cougar territory — especially on Vancouver Island, which has the highest cougar density in Canada.',
      },
      {
        title: 'Children And Pets Are At Highest Risk',
        image: '/wildlife/Cougar/Group 140.png',
        description:
          "Cougars target prey that is small, isolated, and moving erratically. Children running and small pets trigger a cougar's predatory instinct more than adults. Never let children run ahead on trails. Keep dogs on a leash at all times.",
      },
      {
        title: 'Enormous Territory',
        image: '/wildlife/Cougar/Group 139.png',
        description:
          'A single cougar can have a territory of up to 1,000 km². They are solitary and rarely seen. If you are in cougar country, there is likely a cougar nearby — you just cannot see it. This is why group hiking is essential.',
      },
      {
        title: 'Follow The Deer',
        image: '/wildlife/Cougar/Group 141.png',
        description:
          'Cougars follow deer migrations. Where deer are abundant, cougars will be close behind. Suburban areas with deer populations in BC are increasingly seeing cougar activity, especially in late evening hours near forest edges.',
      },
    ],
  },

  distanceIcon: '/icons/wildlife/cougar.svg',

  distanceLabels: {
    outer: '100m — Minimum Safe Distance',
    mid: '50m — Extreme Caution',
    inner: '15m — Attack Range',
  },

  distanceZones: [
    {
      range: '0-15M',
      label: 'Attack Zone',
      description: 'Cougar is in striking range. Stand ground, make noise, fight back immediately if attacked.',
      level: 'danger',
    },
    {
      range: '15-100M',
      label: 'High Danger',
      description: 'Cougar is watching you. Do not run. Make yourself appear large. Back away slowly.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Minimum Safe Distance',
      description: 'Observe from distance. Make noise. Do not approach. Alert others and park staff.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Run From A Cougar',
      icon: 'RunningFigure',
      description: "Running is the worst thing you can do. It instantly triggers the cougar's prey drive. A cougar can reach 80 km/h and leap 5.5 metres — you cannot outrun it.",
    },
    {
      title: 'Never Hike Alone In Cougar Territory',
      icon: 'Footprints',
      description: 'Solo hikers and joggers are the most common cougar attack victims. Always hike in groups of 3 or more. Make noise constantly on trails.',
    },
    {
      title: 'Never Let Pets Or Children Run Ahead',
      icon: 'PawPrint',
      description: "Small, fast-moving animals trigger cougar prey drive. Keep children between adults. Never let dogs off leash in cougar country.",
    },
    {
      title: 'Never Crouch Down Or Bend Over',
      icon: 'DoorOpen',
      description: 'Making yourself smaller looks like prey. Never kneel, crouch, or bend to look at something near a cougar. Stay upright and tall at all times.',
    },
    {
      title: 'Never Jog Alone At Dawn Or Dusk',
      icon: 'Moon',
      description: 'Joggers running alone during low-light hours are at the highest risk of cougar attack. Their movement mimics fleeing prey perfectly.',
    },
  ],

  alwaysDo: [
    {
      title: 'Stand Tall And Make Yourself Large',
      icon: 'Users',
      description: 'Open your jacket wide, raise arms above your head, stand on a rock if possible. Cougars prefer to attack smaller, weaker-looking prey. Appear as large and threatening as possible.',
    },
    {
      title: 'Maintain Direct Eye Contact',
      icon: 'Eye',
      description: 'Never look away. Eye contact signals dominance and tells the cougar you are aware of it. Looking away signals submission — a prey behaviour.',
    },
    {
      title: 'Shout Firmly And Throw Objects',
      icon: 'Volume2',
      description: 'Yell in a deep assertive voice. Throw sticks, rocks, water bottles — aim near the cougar but not directly at it. The goal is to convince it you are dangerous.',
    },
    {
      title: 'Group Together If With Others',
      icon: 'UsersThreeIcon',
      description: 'Have everyone stand together forming one large group. Pick up children immediately — do not let them run. A cluster of tall humans is far less appealing prey.',
    },
    {
      title: 'Fight Back Ferociously If Attacked',
      icon: 'XCircle',
      description: 'Never give up. Fight back with maximum aggression. Use trekking poles, rocks, sticks. Aim for the nose and eyes. Cougar attacks that are fought back are often successfully repelled.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding any wildlife in Canadian parks is illegal. Feeding deer attracts cougars — wherever deer gather, cougars follow. Never feed deer or any wildlife near residential or trail areas.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Directly encourages predatory behaviour near humans' },
      { name: 'Deer Attractants', icon: '🦌', description: 'Feeding deer brings cougars — they follow deer herds' },
      { name: 'Pet Food Outdoors', icon: '🐾', description: 'Attracts prey animals which in turn attract cougars' },
      { name: 'Fruit And Berries', icon: '/icons/wildlife/🍎.png', description: 'Attracts deer and small mammals which cougars hunt' },
      { name: 'Fish And Scraps', icon: '/icons/wildlife/🐟.png', description: 'Strong scent attracts both cougars and their prey' },
      { name: 'Bird Or Squirrel Feed', icon: '🌽', description: 'Any wildlife feeding creates a prey-rich area for cougars' },
      { name: 'Small Animal Feed', icon: '🐇', description: 'Cougars hunt rabbits and small animals — do not attract them' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Attracts raccoons and deer — cougar prey animals' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where', highlight: 'Cougars Are Present' },
  spotParks: [
    { name: 'Pacific Rim National Park', province: 'British Columbia', season: 'Active population — rarely seen', level: 'caution' },
    { name: 'Gulf Islands National Park', province: 'British Columbia', season: 'Confirmed sightings — caution required', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Rare sightings — expanding territory', level: 'caution' },
    { name: 'Waterton Lakes National Park', province: 'Alberta', season: 'Occasional sightings — trail cameras', level: 'caution' },
  ],

  bearSprayTitle: 'Carry Bear Spray — It Works On Cougars Too',
  bearSprayButtonLabel: 'Bear Spray Guide',
  bearSprayNote:
    'Bear spray is effective against cougar attacks. Keep it on your hip — not in your pack. Effective range 7–9 metres. However, cougar attacks happen so fast that you may not have time to deploy it — which is why deterrence and group hiking are critical.',

  encounterSteps: [
    {
      title: 'Stop — Do Not Run — Face The Cougar',
      description:
        'The moment you see a cougar, stop moving and face it directly. Running immediately activates its predatory chase instinct. Maintain eye contact. Speak firmly and loudly. Pick up children immediately without bending over — lift them to your shoulder level.',
    },
    {
      title: 'Make Yourself Appear As Large As Possible',
      description:
        'Open your jacket wide and hold it out. Raise your arms above your head. If wearing a backpack, hold it above your head. Stand on a rock or elevated surface if possible. A group should stand together shoulder to shoulder to appear as one large organism.',
    },
    {
      title: 'Shout — Throw Objects — Back Away Slowly',
      description:
        'Yell in a deep, commanding voice. Throw sticks and rocks near the cougar without turning away. Back away slowly — never turn your back. If the cougar follows, stop and repeat the aggressive display. Give the cougar a clear escape route.',
    },
    {
      title: 'If The Cougar Attacks — Fight Back Immediately',
      description:
        'Deploy bear spray if within 7–9 metres. If contact occurs, fight back with absolute maximum force. Do not play dead — ever. Use trekking poles, rocks, sticks, keys, anything. Jam fingers into eyes. Strike nose and ears. Cougar attacks repelled by aggressive resistance are well documented — never stop fighting.',
    },
  ],

  gallery: [
    '/wildlife/Cougar/cougar-hero.jpg',
    '/wildlife/Cougar/cougar-forest.jpg',
    '/wildlife/Cougar/cougar-log.jpg',
  ],
};

export default COUGAR;
