// Wood Bison — данные страницы /wildlife/wood-bison
//
// В отличие от Polar Bear/Cougar/Moose, для этой страницы не было макета —
// контент собран и написан самостоятельно по той же схеме, что и
// остальные страницы животных на сайте (behaviorSection, distanceZones,
// Never/Always Do, Never Feed, spotParks, encounterSteps).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/рост/длина: 350-1,000 кг, высота в холке 1.3-1.8 м, длина тела
//   2.4-3.9 м — по данным Canadian Geographic и правительства NWT (самцы
//   обычно тяжелее 900 кг). Лесной бизон — самое крупное наземное
//   млекопитающее Северной Америки, крупнее равнинного бизона.
// - Скорость: ~56 км/ч — наиболее часто цитируемая цифра для бизонов в
//   целом (ровно столько же дают разные источники про американских
//   степных бизонов; отдельного исследования именно по лесному подвиду не
//   нашла, цифра дана по аналогии с видом в целом).
// - Популяция: оценки расходятся — Canadian Geographic называет ~10,000
//   лесных бизонов в Канаде (с учётом содержащихся в неволе и полувольных
//   стад), COSEWIC (комитет по статусу редких видов) — 5,100-7,100
//   взрослых особей в девяти диких субпопуляциях. На сайте используется
//   осторожная оценка "~10,000" с пометкой в quickFacts.
// - Статус: правительство NWT и Canadian Geographic называют вид
//   "Threatened" по федеральному Закону о видах под угрозой (SARA);
//   встречается также более новая информация о пересмотре статуса на
//   "Special Concern" (менее строгая категория) — не смогла подтвердить
//   текущий официальный статус напрямую, использую "Threatened" как более
//   часто цитируемый вариант, с пометкой об этом расхождении.
// - Wood Buffalo National Park (АльбертаNWT/Alberta): создан в 1922 для
//   защиты последней дикой популяции, сейчас — около 50% всех диких
//   лесных бизонов Канады, крупнейшее свободно пасущееся стадо в мире.
// - Elk Island National Park (Альберта): южная часть парка — стадо
//   генетически наиболее чистых лесных бизонов, переселённых туда в 1965;
//   самый доступный для посещения вариант, 35 минут от Эдмонтона.
// - Nahanni National Park Reserve (NWT): стадо в долине реки Liard,
//   происходит от 28 бизонов, переселённых из Elk Island в 1980; учёт
//   ведётся с лодки по песчаным косам реки в июле — доступ только по реке.
// - Трасса Alaska Highway в районе Haines Junction (Юкон): свободно
//   пасущееся стадо Aishihik Herd, реинтродуцировано в 1988-1992 (170
//   особей выпущено из временного загона у реки Nisling); держится в
//   коридоре между озером Kluane и Klondike Highway — это НЕ официальный
//   национальный парк, а дорожный коридор, отмечено в карточке отдельно.
// - Фото — дикие лесные бизоны с подтверждённой локацией:
//   * heroImage/постер — Wikimedia Commons, "Buffalo on the road to Fort
//     providence, Yellowknife 2011" (стадо с телятами), автор Alan Sim,
//     CC BY-SA 2.0 — съёмка у дороги возле Форт-Провиденс, NWT, реальный
//     ареал материковой (Макензи) популяции лесного бизона.
//   * bison-forest.jpg (галерея) — тот же автор/серия, одиночный бык на
//     опушке таёжного леса у той же дороги.
//   * bison-elkisland.jpg (галерея) — Wikimedia Commons, автор Khoshhat,
//     CC BY 4.0, стадо на лугу Elk Island National Park.
// - heroVideo — ВАЖНАЯ ОГОВОРКА: подлинное дикое видео стада бизонов
//   (Yellowstone National Park, Вайоминг, США), автор Roger Holzberg,
//   лицензия Pexels (атрибуция не обязательна) — на кадрах равнинный
//   бизон (Bison bison bison), а не лесной подвид (Bison bison
//   athabascae): отдельного бесплатного видео именно лесного бизона в
//   открытых источниках найти не удалось. Внешне подвиды очень похожи
//   (тот же вид), но для полной точности эта оговорка должна остаться.

export const WOOD_BISON = {
  slug: 'wood-bison',
  name: 'Wood Bison',
  shortName: 'Bison',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/Bison/bison-hero.jpg',
  heroVideo: '/wildlife/Bison/bison-hero.mp4',
  heroCredit: 'Photo: Alan Sim / Wikimedia Commons · CC BY-SA 2.0 · Fort Providence, NWT',
  description:
    "North America's largest land mammal — the wood bison is bigger than its plains cousin and roams the boreal forests of northern Canada. Despite its calm, grazing appearance, a wood bison can charge in an instant and is strong enough to flip a vehicle.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '350-1,000 KG' },
    { label: 'Height', value: '1.3-1.8 M' },
    { label: 'Speed', value: '56 Km/H' },
    { label: 'Length', value: 'Up To 3.9 M' },
    { label: 'Population', value: '~10,000' },
    { label: 'Status', value: 'Threatened' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 50 Metres',
    text: 'A bison that looks calm can charge without warning. They are faster than any human and strong enough to flip a vehicle.',
  },

  behaviorSection: {
    tag: 'Bison Behaviour',
    title: "North America's",
    highlight: 'Largest Land Mammal',
    accent: '#c99a2e',
    cards: [
      {
        title: 'Bigger Than Plains Bison',
        icon: 'Compass',
        description:
          "The wood bison is the largest land mammal in North America, outweighing even its well-known plains cousin. Bulls can top 1,000 kg. Their size does not make them slow — they are powerful, fast, and unpredictable.",
      },
      {
        title: 'Calm Looking, Instantly Dangerous',
        icon: 'AlertTriangle',
        description:
          'A grazing bison can look completely docile one moment and charge the next, with no visible warning. Most injuries happen when people approach too closely for a photo, misreading calm behaviour as safe.',
      },
      {
        title: 'Faster Than Any Human',
        icon: 'RunningFigure',
        description:
          'Despite their massive size, bison can run up to 56 km/h — far faster than the fastest human sprinter. You cannot outrun a charging bison. Distance and awareness are your only real defence.',
      },
      {
        title: 'Rut Season — July To September',
        icon: 'Calendar',
        description:
          'Bulls become significantly more aggressive during the summer rut, competing loudly and physically for mates. Bison are at their most unpredictable during this period — give extra distance.',
      },
      {
        title: 'Roam The Boreal Forest',
        icon: 'EyeOff',
        description:
          "Unlike the open-prairie herds most people picture, wood bison live in forested wetlands and meadows across the NWT, northern Alberta, and the Yukon. They can appear suddenly from treelines or along roadways.",
      },
      {
        title: 'Strong Swimmers',
        icon: 'Wind',
        description:
          'Wood bison cross rivers and lakes with ease as part of their seasonal movements. Herds are regularly spotted fording the Liard and Mackenzie river systems in the Northwest Territories.',
      },
    ],
  },

  distanceIcon: '/icons/wildlife/bison.svg',

  distanceLabels: {
    outer: '50m — Recommended Distance',
    mid: '20m — Caution Zone',
    inner: '10m — Charge Range',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Charge Zone',
      description: 'A bison this close may charge instantly. Back away toward a vehicle or solid shelter — do not run in the open.',
      level: 'danger',
    },
    {
      range: '10-50M',
      label: 'Caution Zone',
      description: 'Too close for comfort. Watch for a raised tail, pawing, or snorting — all signs it is agitated. Retreat slowly.',
      level: 'caution',
    },
    {
      range: '50M+',
      label: 'Recommended Distance',
      description: 'Observe quietly from this distance or farther, ideally from a vehicle. Never approach for a closer photo.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'Most bison injuries happen when people get closer for a better picture. Use a zoom lens — a calm-looking bison can charge within seconds.',
    },
    {
      title: 'Never Assume Calm Means Safe',
      icon: 'EyeOff',
      description: 'Bison give few warning signs before charging. A raised tail is a late sign of agitation — by the time you see it, you may already be too close.',
    },
    {
      title: 'Never Get Between A Cow And Calf',
      icon: 'PawPrint',
      description: 'A mother bison will defend her calf aggressively and without hesitation. If you see a calf, assume the mother is close by and back away.',
    },
    {
      title: 'Never Block Its Path',
      icon: 'DoorOpen',
      description: 'If a bison is on a trail or road, never try to walk around it closely or box it in. Give it a wide, open route to move on its own.',
    },
    {
      title: 'Never Let Pets Approach A Bison',
      icon: 'Users',
      description: 'A loose dog can provoke a bison into charging — and may lead it straight back to you. Keep dogs leashed in bison country.',
    },
  ],

  alwaysDo: [
    {
      title: 'Stay At Least 50 Metres Away',
      icon: 'Compass',
      description: "Give bison plenty of room at all times, ideally observing from a vehicle. This applies even to bison that appear to be ignoring you.",
    },
    {
      title: 'Watch For Warning Signs',
      icon: 'Eye',
      description: 'A raised tail, snorting, pawing the ground, or lowering the head all signal a bison is agitated and may charge. Retreat immediately if you see these.',
    },
    {
      title: 'Yield The Trail Or Road',
      icon: 'DoorOpen',
      description: 'If you encounter a bison on a trail or roadway, stop, back away, and let it choose its own path. Never try to push past or hurry it along.',
    },
    {
      title: 'Get To A Vehicle Or Solid Structure',
      icon: 'ShieldCheck',
      description: 'If a bison charges, get behind a vehicle, solid building, or other sturdy obstacle as fast as possible — this is far more reliable than trying to outrun it.',
    },
    {
      title: 'Report Aggressive Bison',
      icon: 'MegaphoneIcon',
      description: 'If a bison is behaving aggressively near a campground, road, or community, report it to park staff or local wildlife officers so others can be warned.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. A fed bison loses its fear of humans, becomes far more dangerous near roads and campgrounds, and may ultimately have to be destroyed.',
    items: [
      { name: 'Hay And Grain', icon: '🌾', description: 'Creates dependency and draws bison toward roads and farms' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Causes digestive problems and loss of natural foraging' },
      { name: 'Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Bison lose their fear of humans and return repeatedly' },
      { name: 'Fruit And Apples', icon: '/icons/wildlife/🍎.png', description: 'Teaches bison to approach vehicles and people for food' },
      { name: 'Salt And Minerals', icon: '🧂', description: 'Bison crave salt — never leave salt licks near roads or camps' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Creates dependency on human food sources' },
      { name: 'Garden Plants', icon: '🌱', description: 'Gardens and crops attract bison into residential areas' },
      { name: 'Any Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use bear-proof bins — unsecured garbage draws bison into camps' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where You Can', highlight: 'Spot Wood Bison' },
  spotParks: [
    { name: 'Wood Buffalo National Park', province: 'NWT / Alberta', season: "World's largest free-roaming herd", level: 'safe' },
    { name: 'Elk Island National Park', province: 'Alberta', season: 'Easiest to see — 35 min from Edmonton', level: 'safe' },
    { name: 'Nahanni National Park Reserve', province: 'NWT', season: 'Remote — Liard River Valley, river access only', level: 'caution' },
    { name: 'Alaska Highway — Haines Junction Area', province: 'Yukon', season: 'Free-ranging herd — watch for highway crossings', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Keep Your Distance',
      description:
        'The moment you spot a bison, stop and assess the distance. Stay at least 50 metres away. If it is grazing calmly and has not noticed you, back away slowly and quietly rather than continuing closer.',
    },
    {
      title: 'Watch For Warning Signs',
      description:
        'Watch for a raised tail, snorting, pawing the ground, or a lowered head — all signs of agitation. If you see any of these, retreat immediately and calmly, without turning your back and running.',
    },
    {
      title: 'If It Charges — Get To Solid Shelter',
      description:
        'A bison can run up to 56 km/h, faster than any human — do not try to outrun it in the open. Get behind a vehicle, building, or other solid obstacle as quickly as possible.',
    },
    {
      title: 'If Knocked Down — Protect Your Head And Stay Still',
      description:
        'If a bison knocks you down, curl into a ball, protect your head and neck with your arms, and stay as still as possible until it loses interest and moves away. Do not get up until it has left the area.',
    },
  ],

  gallery: [
    { src: '/wildlife/Bison/bison-hero.jpg', credit: 'Alan Sim · CC BY-SA 2.0 · Fort Providence, NWT' },
    { src: '/wildlife/Bison/bison-forest.jpg', credit: 'Alan Sim · CC BY-SA 2.0 · Fort Providence, NWT' },
    { src: '/wildlife/Bison/bison-elkisland.jpg', credit: 'Khoshhat · CC BY 4.0 · Elk Island NP' },
  ],
};

export default WOOD_BISON;
