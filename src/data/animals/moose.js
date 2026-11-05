// Moose — данные страницы /wildlife/moose
//
// Контент перенесён с макета, присланного пользователем (скриншот страницы,
// сгенерированной отдельно от этого сайта), тем же способом, что и Polar
// Bear/Cougar ранее в этой сессии — построчно прочитан по частям в высоком
// разрешении. Макет ввёл два новых типа блоков, которых раньше не было на
// сайте (дорожная опасность "Moose On The Road" и рамка "Warning Signs A
// Moose Is About To Charge") — под них добавлена опциональная поддержка в
// AnimalPage.jsx (animal.hazardSection, animal.warningSigns), не влияющая
// на остальные страницы животных.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/длина/скорость/размах рогов из макета (400-700 кг, 1.4-2.1 м,
//   56 км/ч, рога до 1.8 м) в целом согласуются с открытыми источниками:
//   канадские самцы в среднем ≈545 кг, самки ≈400-450 кг (отдельные особи
//   тяжелее); длина быка 2.4-3.1 м (включая тело без высоты в холке);
//   скорость ~56 км/ч — самая устойчивая цифра во всех источниках; размах
//   рогов обычно 120-150 см, у рекордных особей свыше 2 м — цифра 1.8 м из
//   макета попадает в этот диапазон.
// - Популяция в Канаде: источники расходятся (500,000-1,000,000 по одним
//   данным, 800,000-1,000,000 по другим) — цифра макета "1 million" на
//   верхней границе этого диапазона, не противоречит.
// - Статус: глобально IUCN — Least Concern (региональные популяции могут
//   снижаться, например в Манитобе — не отражено на сайте, т.к. макет не
//   упоминает это отдельно).
// - "Лоси — самая частая причина травм среди диких животных Канады,
//   опережая медведей" и "крупнейшая дорожная опасность, особенно в
//   Ньюфаundленде/Онтарио/Альберте" — общеизвестные, часто цитируемые в
//   канадских источниках факты (Canadian Wildlife Federation и др.),
//   отдельно по регионам в этой сессии не перепроверялись.
// - Фото/видео — дикие животные, с проверкой:
//   * heroVideo — заменён пользователем на другой файл
//     (12168638_1920_1080_24fps.mp4, переименован в moose-hero.mp4):
//     молодой лось крупным планом на траве. На кадрах нет видимых признаков
//     вольера (открытая трава, естественное освещение), но источник файла
//     мне не известен (не проверяла сама через Pexels/Commons) — в отличие
//     от heroImage ниже, который я сама нашла и проверила.
//   * moose-hero.jpg (постер, использован и в галерее) — Wikimedia
//     Commons, "Cow Moose in Algonquin 1.JPG", автор Rrburke, CC BY-SA
//     3.0, самка лося в Algonquin Provincial Park (Онтарио) — указан в
//     описании файла, парк есть и в списке parks ниже.
//   * moose-pair.jpg (галерея) — Wikimedia Commons, "Moose (Alces alces),
//     Female and Male - Algonquin Provincial Park, Ontario.jpg", автор
//     Ryan Hodnett, CC BY-SA 4.0.
//   * moose-water.jpg (галерея) — Wikimedia Commons, "Crow River Moose at
//     Sunset.jpg", автор Dkyryluk, CC BY-SA 4.0 — бык кормится в воде,
//     соответствует разделу про сильных пловцов.
// - Для карточек поведения и блока Warning Signs своих иллюстраций нет —
//   использованы стандартные иконки lucide (как было с Cougar до того,
//   как пользователь прислал свои PNG).

export const MOOSE = {
  slug: 'moose',
  name: 'Moose',
  shortName: 'Moose',
  shortNamePlural: 'Moose',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/Moose/moose-hero.jpg',
  heroVideo: '/wildlife/Moose/moose-hero.mp4',
  heroCredit: 'Photo: Rrburke / Wikimedia Commons · CC BY-SA 3.0 · Algonquin Provincial Park',
  description:
    'The largest member of the deer family and Canada\'s most iconic animal — the moose is deceptively dangerous. Despite its gentle appearance, a moose can charge without warning and cause serious injury with its powerful hooves.',

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '400-700 KG' },
    { label: 'Length', value: '1.4-2.1 M' },
    { label: 'Speed', value: '56 Km/H' },
    { label: 'Antler Span', value: '1.8 M Wide' },
    { label: 'Population', value: '1 Million' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Moose injure more people in Canada than bears. Never approach — especially cows with calves.',
  },

  behaviorSection: {
    tag: 'Moose Behaviour',
    title: 'More Dangerous Than',
    highlight: 'They Look',
    accent: '#9ab973',
    cards: [
      {
        title: 'Injure More People Than Bears',
        image: '/wildlife/Moose/Ellipse 89.png',
        description:
          'In Canada, moose injure far more people annually than bears. Their size and unpredictability make them extremely dangerous. A kick from a moose hoof can kill a person instantly. Never underestimate a moose because it is not a predator.',
      },
      {
        title: 'Biggest Road Hazard In Canada',
        image: '/wildlife/Moose/Ellipse 90.png',
        description:
          'Moose are the most dangerous wildlife hazard on Canadian roads — especially in Newfoundland, Ontario, and Alberta. Their legs are long enough that a collision sends their body through the windshield. Drive slowly at dawn and dusk in moose territory.',
      },
      {
        title: 'Cow With Calves Is Extremely Dangerous',
        image: '/wildlife/Moose/Ellipse 92.png',
        description:
          'A mother moose protecting her calves will charge without hesitation or warning. Spring and early summer are the most dangerous times. If you see a calf, the mother is extremely close. Back away immediately and put a large tree between you and her.',
      },
      {
        title: 'Rut Season — October To November',
        image: '/wildlife/Moose/Ellipse 91.png',
        description:
          'Bull moose during rut season are highly aggressive and unpredictable. They will charge vehicles, people, and other animals. Antlers can span 1.8 metres. A charging bull moose during rut is extremely dangerous — give maximum distance.',
      },
      {
        title: 'They Blend Into Forest',
        image: '/wildlife/Moose/Ellipse 93.png',
        description:
          'Despite being enormous, moose are surprisingly difficult to spot in dense forest. Their dark brown coat blends with shadows and tree trunks. You can walk to within metres of a moose without seeing it — especially in dense brush.',
      },
      {
        title: 'Strong Swimmers',
        image: '/wildlife/Moose/Ellipse 88.png',
        description:
          'Moose are excellent swimmers and can cross large lakes and rivers with ease. They often wade in water to cool down and feed on aquatic plants. Never approach a moose in or near water — they are more aggressive when cornered near water.',
      },
    ],
  },

  hazardSection: {
    tag: 'Road Safety Warning',
    heading: { lead: 'Moose On The Road —', highlight: 'Extreme Danger' },
    calloutTitle: "Moose Are Canada's Deadliest Road Hazard",
    calloutText:
      'A moose can weigh up to 700 kg. Their legs are so tall that in a collision, the body comes directly through the windshield — not over the hood like a deer. This makes moose collisions far more deadly than deer collisions. Newfoundland has the highest moose-vehicle collision rate in Canada.',
    tips: [
      { title: 'Drive Slowly At Night', text: 'Moose are most active at dawn and dusk. Their dark coat makes them nearly invisible at night. Slow down significantly in posted moose zones.' },
      { title: 'Watch For Yellow Signs', text: 'Moose warning signs are placed in known crossing areas. Take them seriously — reduce speed immediately when you see them.' },
      { title: 'Use High Beams', text: 'Use high beams on rural roads at night when no other vehicles are present. Watch for eye shine from the sides of the road.' },
    ],
  },

  distanceIcon: '/icons/wildlife/moose.svg',

  distanceLabels: {
    outer: '100m — Recommended Distance',
    mid: '30m — Minimum Safe Distance',
    inner: '10m — Charge Range',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Charge Zone',
      description: 'Moose will charge. Run to nearest large tree or solid structure. Get something solid between you and it.',
      level: 'danger',
    },
    {
      range: '10-30M',
      label: 'Danger Zone',
      description: 'Too close. Back away slowly. Watch for warning signs — laid-back ears, raised hackles, head lowering.',
      level: 'caution',
    },
    {
      range: '30M+',
      label: 'Minimum Safe Distance',
      description: 'Stay still and observe quietly. Never move closer. Give the moose space to move away on its own.',
      level: 'safe',
    },
  ],

  warningSigns: {
    title: 'Warning Signs A Moose Is About To Charge',
    items: [
      { title: 'Ears Pinned Back', image: '/wildlife/Moose/Ellipse 114.png', text: 'Sign of aggression — move away immediately' },
      { title: 'Head Lowering', image: '/wildlife/Moose/Ellipse 113.png', text: 'Pre-charge position — get behind a tree now' },
      { title: 'Stomping Hooves', image: '/wildlife/Moose/Ellipse 115.png', text: 'Warning signal — back away slowly now' },
      { title: 'Hackles Raised', image: '/wildlife/Moose/Ellipse 116.png', text: 'Fur on neck stands up — highly agitated' },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'Most moose attacks happen when people try to get closer for a better photo. Use a zoom lens. A moose that looks calm can charge within seconds.',
    },
    {
      title: 'Never Get Between A Cow And Her Calf',
      icon: 'XCircle',
      description: 'A mother moose will charge and stomp anything she perceives as a threat to her calf. If you see a calf, back away immediately — the mother is very close.',
    },
    {
      title: 'Never Let Your Dog Approach A Moose',
      icon: 'PawPrint',
      description: 'Dogs trigger aggressive moose behaviour — moose see them as wolves. A dog can lead an angry moose directly back to you. Always leash dogs in moose territory.',
    },
    {
      title: 'Never Corner A Moose',
      icon: 'DoorOpen',
      description: "A cornered moose is extremely dangerous. Never block a moose's escape route. Always leave the moose an open path to retreat.",
    },
    {
      title: 'Never Make Loud Noises Near A Moose',
      icon: 'MegaphoneIcon',
      description: 'Unlike bears, making noise near a moose can startle it into charging. Approach moose areas quietly and back away calmly if you spot one.',
    },
  ],

  alwaysDo: [
    {
      title: 'Get Behind A Large Tree Immediately',
      icon: 'ShieldCheck',
      description: 'If a moose charges, put the largest tree between you and it. Unlike bears, moose will not pursue around obstacles for long. A solid tree can save your life.',
    },
    {
      title: 'Run If You Are In The Open',
      icon: 'RunningFigure',
      description: 'Unlike bear encounters — if a moose charges and you are in the open, run to the nearest shelter or large tree. Moose charges are often bluffs but you cannot take that risk.',
    },
    {
      title: 'Watch For Warning Signs',
      icon: 'Eye',
      description: 'Learn to read moose body language. Ears back, head lowering, hackles raised, and stomping hooves all signal an imminent charge. React immediately — do not wait.',
    },
    {
      title: 'Give Lots Of Space And Be Patient',
      icon: 'Compass',
      description: 'If a moose is blocking a trail, wait patiently at a safe distance. Never try to go around a moose in dense bush. The moose will move on its own in time.',
    },
    {
      title: 'Curl Up And Protect Your Head If Knocked Down',
      icon: 'ShieldCheck',
      description: 'If a moose knocks you down, curl into a ball, protect your head and neck with your arms, and stay still. Moose stomp — they do not bite. Stay down until the moose moves away.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding moose is illegal in Canadian national parks. A fed moose loses its fear of humans and becomes a danger to everyone in the area. It will also be euthanized.',
    items: [
      { name: 'Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Moose lose fear of humans and return repeatedly' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Causes digestive problems and dependency on humans' },
      { name: 'Salt And Minerals', icon: '🧂', description: 'Moose crave salt — never leave salt licks near roads' },
      { name: 'Fruit And Apples', icon: '/icons/wildlife/🍎.png', description: 'Teaches moose to approach cars and people for food' },
      { name: 'Garden Plants', icon: '🌱', description: 'Gardens attract moose to suburban and residential areas' },
      { name: 'Hay And Feed', icon: '🌾', description: 'Never leave livestock feed accessible to wildlife' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Creates dependency and loss of natural foraging behaviour' },
      { name: 'Any Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use bear-proof bins — moose raid unsecured garbage' },
    ],
  },

  spotParks: [
    { name: 'Jasper National Park', province: 'Alberta', season: 'Very common — wetland areas', level: 'safe' },
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'Highest chance — near lakes at dawn', level: 'safe' },
    { name: 'Gros Morne National Park', province: 'Newfoundland', season: 'Guaranteed sightings — year round', level: 'safe' },
    { name: 'Mount Revelstoke Park', province: 'BC', season: 'Moderate — valley bottoms', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Assess — Keep Your Distance',
      description:
        "Stop immediately when you spot a moose. Stay at least 30 metres away — 100 metres if with calves. Watch the moose's body language carefully. If it is feeding calmly and has not noticed you, back away slowly and quietly.",
    },
    {
      title: 'Watch For Warning Signs And Back Away',
      description:
        'If the moose notices you — watch its ears, head position, and hackles. If ears go back or head lowers, back away immediately. Speak calmly and quietly. Do not make sudden movements. Give the moose a clear escape route.',
    },
    {
      title: 'If The Moose Charges — Run To A Large Tree',
      description:
        'Unlike bears — run from a charging moose. Get behind the largest tree you can find. Moose will typically stop and circle the tree. If no tree is available, run to any solid structure. A moose charge can be a bluff but do not risk it.',
    },
    {
      title: 'If Knocked Down — Curl Up And Protect Your Head',
      description:
        'If a moose knocks you down, curl into a tight ball immediately. Cover your head and neck with your arms. Stay as still as possible. Moose stomp and kick — they do not bite or shake prey like predators. Stay down and still until the moose moves away, then get up and leave quickly.',
    },
  ],

  // Галерея заменена пользователем на присланные фото (файлы без
  // метаданных об источнике/лицензии — в отличие от moose-hero/pair/water
  // выше, которые я проверяла сама через Wikimedia Commons). Подписи
  // авторов не ставлю, т.к. источник не известен.
  gallery: [
    '/wildlife/Moose/Rectangle 208.png',
    '/wildlife/Moose/Rectangle 431.png',
    '/wildlife/Moose/Rectangle 432.png',
  ],
};

export default MOOSE;
