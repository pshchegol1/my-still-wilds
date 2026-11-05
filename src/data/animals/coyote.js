// Coyote — данные страницы /wildlife/coyote
//
// Как Wood Bison и Orca — сделано самостоятельно без макета, по той же
// схеме, что и остальные страницы животных на сайте.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/рост: 10-18 кг — нижняя граница (10-12 кг) по данным правительства
//   Юкона, верхняя — по данным о восточных койотах/"койволках", которые
//   заметно крупнее западных особей (см. ниже про гибридизацию). Длина
//   тела с хвостом обычно около 1-1.3 м — общеизвестный диапазон,
//   отдельный источник для точной цифры не нашла.
// - Скорость: ~64 км/ч — наиболее часто повторяющаяся цифра среди
//   нескольких источников (разброс 64-69 км/ч на коротких бросках).
// - Продолжительность жизни: ~10 лет в дикой природе (правительство
//   Юкона).
// - Популяция: точной общеканадской или североамериканской цифры в
//   открытых источниках не нашла — вид классифицируется как "Increasing"
//   (растущая численность) по данным IUCN/canids.org, один источник
//   называет условный нижний порог ">500,000" в Северной Америке, другие
//   говорят про "миллионы" без указания методики подсчёта. На сайте дана
//   осторожная формулировка "Abundant & Growing" вместо точной цифры.
// - Статус: Least Concern (IUCN) — единственный надёжно подтверждённый
//   статус.
// - Восточные койоты/"койволки" (coywolves): по ДНК-исследованию 2014
//   года, типичный северовосточный койот — это в среднем примерно 62%
//   западный койот, 14% западный волк, 13% восточный волк и 11% домашняя
//   собака (точные пропорции спорны и различаются по региону — например,
//   у Frontenac Arch в Онтарио доля "волчьих" генов выше). Это и
//   объясняет, почему восточные койоты в Канаде заметно крупнее западных.
//   Встречаются в Онтарио, Квебеке, Нью-Брансуике, Новой Шотландии, ПЭО и
//   Ньюфаундленде и Лабрадоре.
// - Нападения на людей в Канаде редки: в среднем ~2.4 канадца в год
//   укушены или оцарапаны койотом; единственный документированный
//   смертельный случай с взрослым человеком в дикой природе — инцидент
//   2009 года в Cape Breton Highlands National Park, Новая Шотландия
//   (упомянут на странице кратко и уважительно, без подробностей, как
//   редчайшее исключение, а не типичный сценарий). Около трети нападений
//   на людей связаны с местами, где койотов подкармливали — умышленно
//   или по неосторожности (оставленный корм для домашних животных,
//   мусор). Городские вспышки происшествий — Stanley Park (Ванкувер,
//   2021, минимум 9 подтверждённых нападений) и Mission, BC (серия
//   нападений за неделю) — использованы как иллюстрация городского риска.
// - "Хейзинг" (активное отпугивание — крик, размахивание руками, громкие
//   звуки) — официально рекомендуемый метод в отличие от медведей/лосей/
//   бизонов, где лучше спокойно отступать: койоты, в отличие от крупных
//   копытных и медведей, реально отучаются приближаться к людям после
//   настойчивого отпугивания (WildSafeBC и другие провинциальные
//   материалы).
// - Места для просмотра — подобраны по контрасту сред обитания: Stanley
//   Park (городская популяция, Ванкувер), High Park (городская популяция,
//   Торонто), Banff National Park (горная популяция, Альберта), Point
//   Pelee National Park (водно-болотная/прерийная популяция, Онтарио) —
//   все реальные, задокументированные локации, но не равнозначны по
//   статусу: Stanley Park и High Park не национальные парки, это городские
//   парки с известной историей наблюдений/происшествий.
// - Фото/видео — все подлинно дикие:
//   * heroImage/постер — Wikimedia Commons, "My neighborhood coyote",
//     автор Thomas Quine, CC BY 2.0 — городской снимок (переход,
//     тротуар), иллюстрирует тему "встречается даже в городе".
//   * coyote-yellowknife.jpg (галерея) — Wikimedia Commons, "Arctic
//     coyote in Yellowknife, NWT", автор Marke Clinger, CC BY 2.0.
//   * coyote-highpark.jpg (галерея) — Wikimedia Commons, "Coyote in High
//     Park" (Торонто), автор NiceDerangedEpitaph89, CC BY-SA 4.0.
//   * heroVideo — файл пользователя "20261103 113253.mp4" (койот в
//     зарослях у воды, поздняя осень), перекодирован в coyote-hero.mp4
//     (H.264, без звука). Раньше здесь было видео с Pexels (Salim Da).

export const COYOTE = {
  slug: 'coyote',
  name: 'Coyote',
  shortName: 'Coyote',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/CAYOTE/coyote-hero.jpg',
  heroVideo: '/wildlife/CAYOTE/coyote-hero.mp4',
  heroCredit: 'Photo: Thomas Quine / Wikimedia Commons · CC BY 2.0',
  description:
    "Canada's most adaptable wild canid — coyotes thrive everywhere from Arctic tundra to downtown parks. Attacks on people are rare, but bold, food-habituated coyotes near cities are an increasingly common safety concern, and the right response is very different from how you'd handle a bear or moose.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '10-18 KG' },
    { label: 'Length', value: '1-1.3 M' },
    { label: 'Speed', value: '64 Km/H' },
    { label: 'Lifespan', value: '~10 Years' },
    { label: 'Population', value: 'Abundant & Growing' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 45 Metres',
    text: 'If a coyote gets closer than this, haze it immediately — yell, wave your arms, make noise. Unlike bears, backing away quietly is the wrong move.',
  },

  behaviorSection: {
    tag: 'Coyote Behaviour',
    title: "Canada's Most",
    highlight: 'Adaptable Wild Canid',
    accent: '#c99a2e',
    cards: [
      {
        title: 'Found In Every Province',
        icon: 'Compass',
        description:
          'Coyotes are the most widespread and adaptable wild canid in North America, thriving everywhere from Arctic tundra to Prairie grassland to downtown parks and ravines in major cities.',
      },
      {
        title: 'Eastern Coyotes Are Part Wolf',
        icon: 'PawPrint',
        description:
          "Coyotes in Ontario, Quebec, and Atlantic Canada are often larger \"coywolf\" hybrids, carrying wolf and even domestic dog ancestry. This is why eastern coyotes can look noticeably bigger than classic western coyotes.",
      },
      {
        title: 'Most Active At Dawn And Dusk',
        icon: 'Moon',
        description:
          'Coyotes are crepuscular, hunting most actively around sunrise and sunset. In cities, they are increasingly seen at night, moving confidently through parks, ravines, and quiet streets.',
      },
      {
        title: 'Food Habituation Drives Most Conflict',
        icon: 'Trash2',
        description:
          'Roughly a third of coyote attacks on people happen in areas where coyotes have been fed, intentionally or not. A coyote that loses its fear of humans over food becomes far bolder and more dangerous.',
      },
      {
        title: 'Attacks Are Rare But Real',
        icon: 'AlertTriangle',
        description:
          'On average, only about 2.4 Canadians a year are bitten or scratched by a coyote. One tragic exception stands out: a fatal 2009 attack on an adult hiker in Cape Breton Highlands National Park, Nova Scotia — an extremely rare event, not a typical outcome.',
      },
      {
        title: 'Hazing Actually Works',
        icon: 'Volume2',
        description:
          'Unlike bears or moose, coyotes reliably learn to avoid people who respond assertively. Yelling, waving arms, and making noise — known as "hazing" — is the officially recommended response to a bold coyote.',
      },
    ],
  },

  distanceLabels: {
    outer: '45m — Comfortable Distance',
    mid: '10-45m — Stay Alert',
    inner: '0-10m — Haze Now',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Haze Immediately',
      description: 'Too close for comfort. Make yourself big and loud right now — yell, wave your arms, throw an object nearby if needed.',
      level: 'danger',
    },
    {
      range: '10-45M',
      label: 'Stay Alert',
      description: "A coyote watching you from here should not be ignored. Maintain eye contact, stand tall, and be ready to haze if it keeps approaching.",
      level: 'caution',
    },
    {
      range: '45M+',
      label: 'Comfortable Distance',
      description: 'A typical, low-risk distance for observing a coyote going about its business. No action needed beyond staying aware.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Feed A Coyote',
      icon: 'Trash2',
      description: 'Intentional or accidental feeding — including unsecured garbage and pet food — is the single biggest cause of bold, dangerous coyote behaviour.',
    },
    {
      title: 'Never Run Or Turn Your Back',
      icon: 'RunningFigure',
      description: 'Running can trigger a chase instinct, especially around small children or pets. Back away slowly instead, facing the coyote.',
    },
    {
      title: 'Never Let Small Pets Roam Off-Leash',
      icon: 'PawPrint',
      description: 'Cats and small dogs can be seen as prey, especially during denning season (spring). Keep pets leashed and supervised in coyote territory.',
    },
    {
      title: 'Never Approach A Den Or Pups',
      icon: 'DoorOpen',
      description: 'Adult coyotes defend den sites aggressively, particularly from May to July. If you find pups, leave the area immediately without lingering.',
    },
    {
      title: 'Never Ignore Bold Behaviour',
      icon: 'EyeOff',
      description: "A coyote that approaches calmly instead of fleeing has likely lost its natural fear of people. Treat this as a clear warning sign, not a curiosity.",
    },
  ],

  alwaysDo: [
    {
      title: 'Haze — Make Yourself Big And Loud',
      icon: 'Volume2',
      description: 'Stand tall, wave your arms, shout in a firm voice. Unlike bears, this consistently teaches coyotes to keep their distance from people.',
    },
    {
      title: 'Keep Pets Leashed, Especially At Dawn/Dusk',
      icon: 'PawPrint',
      description: 'Coyotes are most active at these hours. A leashed, supervised pet is far safer than one roaming freely in a park or backyard.',
    },
    {
      title: 'Secure Food, Garbage, And Compost',
      icon: 'Trash2',
      description: "Removing easy food sources is the single most effective way to prevent coyotes from becoming comfortable around people and property.",
    },
    {
      title: 'Maintain Eye Contact While Backing Away',
      icon: 'Eye',
      description: "If a coyote is watching you, don't turn your back. Face it, stand your ground if needed, and retreat slowly rather than fleeing.",
    },
    {
      title: 'Report Bold Or Aggressive Coyotes',
      icon: 'MegaphoneIcon',
      description: 'Local wildlife authorities track problem individuals in urban areas — reporting bold behaviour helps protect both people and the coyotes themselves.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding coyotes — even unintentionally — is the leading cause of dangerous, habituated behaviour near homes and parks. A food-conditioned coyote loses its fear of people and becomes a serious risk to the whole neighbourhood.',
    items: [
      { name: 'Pet Food Left Outdoors', icon: '🐾', description: 'One of the most common ways coyotes become comfortable near homes' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Use wildlife-resistant bins — loose garbage is an easy meal' },
      { name: 'Compost Scraps', icon: '🌱', description: 'Food waste in open compost attracts coyotes and their prey' },
      { name: 'Bird Seed', icon: '🌽', description: 'Attracts rodents and small mammals, which in turn attract coyotes' },
      { name: 'Hand-Feeding', icon: '/icons/wildlife/🍞.png', description: 'Directly teaches coyotes to approach people for food' },
      { name: 'BBQ Or Meat Scraps', icon: '/icons/wildlife/🥩.png', description: 'Strong scents draw coyotes into yards and campsites' },
      { name: 'Fallen Fruit', icon: '/icons/wildlife/🍎.png', description: 'Clean up fruit trees — it\'s a reliable food source coyotes return to' },
      { name: 'Any Food Scraps Outdoors', icon: '/icons/wildlife/🍬.png', description: 'Even small amounts left outside build habituation over time' },
    ],
  },

  parksSectionTag: 'Where To See Them',
  parksSectionHeading: { lead: 'Where You Might', highlight: 'Spot A Coyote' },
  spotParks: [
    { name: 'Stanley Park', province: 'British Columbia', season: 'Well-documented urban population', level: 'caution' },
    { name: 'High Park', province: 'Ontario', season: 'Common urban sightings, Toronto', level: 'caution' },
    { name: 'Banff National Park', province: 'Alberta', season: 'Frequent sightings near the townsite', level: 'safe' },
    { name: 'Point Pelee National Park', province: 'Ontario', season: 'Prairie and wetland habitat', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Assess',
      description:
        'Stay calm and note the distance and behaviour of the coyote. Most sightings end with the animal moving on its own without any need for action.',
    },
    {
      title: 'If It Lingers — Haze It',
      description:
        'If the coyote does not leave on its own, make yourself look big: raise your arms, shout firmly, clap, or bang objects together. This is the opposite of bear advice — assertiveness works here.',
    },
    {
      title: 'Back Away While Facing It',
      description:
        'Retreat slowly without turning your back or running. Keep eye contact and continue making noise if the coyote follows or closes distance.',
    },
    {
      title: 'If Contact Occurs — Fight Back And Report',
      description:
        'In the rare event of contact, fight back firmly and get away as soon as possible. Report the incident to local animal control or park authorities right away so they can respond to the specific animal.',
    },
  ],

  gallery: [
    { src: '/wildlife/CAYOTE/coyote-hero.jpg', credit: 'Thomas Quine · CC BY 2.0' },
    { src: '/wildlife/CAYOTE/coyote-yellowknife.jpg', credit: 'Marke Clinger · CC BY 2.0 · Yellowknife, NWT' },
    { src: '/wildlife/CAYOTE/coyote-highpark.jpg', credit: 'NiceDerangedEpitaph89 · CC BY-SA 4.0 · High Park, Toronto' },
  ],
};

export default COYOTE;
