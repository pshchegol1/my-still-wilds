// Canada Lynx — данные страницы /wildlife/canada-lynx
//
// Сделано самостоятельно без макета, по той же схеме, что Wood Bison /
// Orca / Coyote / Wolverine.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Размеры, рацион, размножение, продолжительность жизни — правительство
//   Ньюфаундленда и Лабрадора (Salmonier Nature Park, animal facts):
//   средний вес взрослой ~7.7 кг (диапазон ~4.9-15.8 кг), высота в холке
//   ~60 см, длина 72 см - 1 м; живёт 10-20 лет; ~75% зимнего рациона —
//   заяц-беляк (snowshoe hare), до 200 зайцев в год; при нехватке зайцев —
//   полёвки, белки, тетерева, изредка телята лося/карибу. Ночной охотник,
//   больше полагается на зрение и слух, чем на нюх; подкарауливает добычу
//   у троп. Крупные, покрытые мехом лапы работают как снегоступы. Детёныши
//   (в среднем 3) рождаются март-май. Хищники рыси — волки и койоты.
// - 10-летний цикл: численность рыси достигает пика примерно раз в 10 лет
//   вслед за пиком численности зайца-беляка и падает после его краха —
//   этот цикл видно по 200-летним записям Hudson's Bay Company о
//   заготовке шкур (8-11 лет, с отставанием от зайца на 1-2 года).
// - На Ньюфаундленде рысь была крайне редка до завоза зайца-беляка в
//   середине XIX века — с тех пор численность следует за зайцем.
// - Статус: глобально Least Concern (IUCN). В Новой Шотландии — отдельно
//   "Endangered" (провинциальный закон, 2002): популяция сохранилась
//   практически только на нагорьях острова Кейп-Бретон, на материке
//   отсутствует как минимум 40 лет; главная угроза по плану восстановления
//   2025 года — лесозаготовки. Parks Canada ведёт отдельную страницу о
//   рыси в Cape Breton Highlands National Park.
// - Скорость: надёжного источника не нашла — поле Speed не используется.
// - Дистанция 30 м — общее правило Parks Canada для диких животных, кроме
//   медведей, волков и кугуаров (для них 100 м). Нападения рыси на людей
//   крайне редки — на странице сформулировано осторожно, без статистики.
// - Видео/фото:
//   * heroVideo / lynx-hero.jpg (кадр из него же) — заменён пользователем
//     на файл "10994322-Hd 3840 2160 25Fps.mp4" (источник не указан). ВАЖНО:
//     по виду это скорее евразийская рысь (Lynx lynx) — рыжеватый мех с
//     крупными чёткими пятнами, — а не канадская (серый мех, пятна едва
//     заметны); пользователь об этом предупреждён. Прежнее видео — дикая
//     канадская рысь с фотоловушки USFWS (Kenai NWR) — заменено.
//   * lynx-nahanni.jpg — рысь переплывает реку North Nahanni, горы
//     Маккензи, Северо-Западные территории; автор Mike Beauregard,
//     CC BY 2.0 (требует подписи).
//   * lynx-kuskokwim.jpg — рысь переплывает реку Kuskokwim, Аляска, USFWS,
//     public domain.
//   * lynx-moss.jpg — кадр из второго видео той же фотоловушки USFWS
//     (рысь валяется во мху), public domain.

export const CANADA_LYNX = {
  slug: 'canada-lynx',
  name: 'Canada Lynx',
  shortName: 'Lynx',
  shortNamePlural: 'Lynx',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/Canada Lynx/lynx-hero.jpg',
  heroVideo: '/wildlife/Canada Lynx/lynx-hero.mp4',
  description:
    "The silent hunter of Canada's boreal forest — built for deep snow on huge, fur-covered paws and tied to the snowshoe hare so closely that its whole population rises and falls with the hare every ten years. Lynx are shy and rarely seen, and pose very little risk to people.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '5-16 KG' },
    { label: 'Length', value: '72 CM - 1 M' },
    { label: 'Shoulder Height', value: '~60 CM' },
    { label: 'Lifespan', value: '10-20 Years' },
    { label: 'Main Prey', value: 'Snowshoe Hare' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Lynx are shy and rarely approach people. Never corner one or come between a mother and her kittens, and keep small pets close in lynx country.',
  },

  behaviorSection: {
    tag: 'Lynx Behaviour',
    title: 'Silent Hunter Of',
    highlight: 'The Boreal Forest',
    accent: '#c99a2e',
    cards: [
      {
        title: 'Built-In Snowshoes',
        icon: 'Footprints',
        description:
          'Long legs and huge, fur-covered paws spread the lynx\'s weight across the snow, letting it hunt in deep powder where heavier predators sink in.',
      },
      {
        title: 'The Hare Specialist',
        icon: 'PawPrint',
        description:
          'About three-quarters of a lynx\'s winter diet is snowshoe hare — up to 200 hares a year. When hares are scarce, it turns to voles, squirrels, and grouse.',
      },
      {
        title: 'The 10-Year Cycle',
        icon: 'Calendar',
        description:
          'Lynx numbers peak roughly every ten years, just after the snowshoe hare peaks, then crash when the hares do. Two centuries of Hudson\'s Bay Company fur records trace this rhythm.',
      },
      {
        title: 'Ambush At Night',
        icon: 'Moon',
        description:
          'Lynx hunt mostly at night, relying on sharp eyesight and hearing more than smell. They often wait silently beside a hare trail before pouncing.',
      },
      {
        title: 'Shy And Rarely Seen',
        icon: 'EyeOff',
        description:
          'Most people who live in lynx country never see one. When they do, the lynx usually watches briefly, then slips back into the trees.',
      },
      {
        title: 'Endangered In Nova Scotia',
        icon: 'AlertTriangle',
        description:
          'Across Canada the lynx is secure, but in Nova Scotia it survives only in the Cape Breton highlands and is listed as endangered. Logging is the main threat to its habitat.',
      },
    ],
  },

  distanceLabels: {
    outer: '100m — Comfortable Viewing',
    mid: '30m — Parks Canada Minimum',
    inner: '0-10m — Back Away',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Back Away',
      description: 'Too close. A cornered lynx or a mother with kittens may defend itself. Retreat slowly and give it a clear way out.',
      level: 'danger',
    },
    {
      range: '10-30M',
      label: 'Too Close',
      description: 'Inside the Parks Canada minimum for wildlife. Stop, keep pets close, and slowly increase the distance.',
      level: 'caution',
    },
    {
      range: '30M+',
      label: 'Observe Quietly',
      description: 'A rare and lucky sighting — watch from a distance with binoculars or a zoom lens, and let it move on in its own time.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Corner A Lynx',
      icon: 'DoorOpen',
      description: 'A lynx with no escape route may lash out with claws and teeth. Always leave it a clear path back into the forest.',
    },
    {
      title: 'Never Approach Kittens',
      icon: 'PawPrint',
      description: 'Kittens are born in spring and stay with their mother into winter. If you see young lynx, the mother is close — leave the area.',
    },
    {
      title: 'Never Leave Small Pets Unattended',
      icon: 'DogIcon',
      description: 'Cats, rabbits, and small dogs can look like prey to a lynx. Keep them indoors or on a leash, especially at dusk and night.',
    },
    {
      title: 'Never Feed Or Bait Wildlife',
      icon: 'Trash2',
      description: 'Food left out draws hares, rodents, and birds — and the predators that hunt them — right into yards and campsites.',
    },
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'A lynx sighting is a rare treat. Getting closer stresses the animal and usually ends the encounter — use a zoom lens instead.',
    },
  ],

  alwaysDo: [
    {
      title: 'Give It Space To Leave',
      icon: 'Compass',
      description: 'Most lynx simply melt back into the trees. Stay still or back away slowly, and let it go its own way.',
    },
    {
      title: 'Keep Pets Close',
      icon: 'Users',
      description: 'In boreal forest areas, keep dogs leashed and cats inside — especially overnight, when lynx are most active.',
    },
    {
      title: 'Secure Food And Garbage',
      icon: 'Trash2',
      description: 'Store food, garbage, and pet food where wildlife cannot reach it, so prey animals — and lynx — are not drawn to your camp.',
    },
    {
      title: 'Stand Tall If It Approaches',
      icon: 'Volume2',
      description: 'In the rare case a lynx comes toward you, make yourself look big, speak firmly, and back away. Fight back if it ever makes contact.',
    },
    {
      title: 'Report Unusual Behaviour',
      icon: 'MegaphoneIcon',
      description: 'A lynx that seems unafraid, sick, or aggressive should be reported to park staff or local wildlife officers.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Food left out attracts the hares, rodents, and birds that lynx hunt — bringing predators close to people and pets.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws predators directly to camps and yards' },
      { name: 'Pet Food Outdoors', icon: '🐾', description: 'An easy meal that attracts both prey and predators' },
      { name: 'Bird Seed', icon: '🌽', description: 'Brings rodents and grouse — lynx prey — close to homes' },
      { name: 'Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Garden scraps attract hares into yards' },
      { name: 'Fish And Scraps', icon: '/icons/wildlife/🐟.png', description: 'Strong scent carries far through the forest' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Draws wildlife into campgrounds and towns' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Any human food scent attracts wildlife' },
    ],
  },

  parksSectionTag: 'National Parks',
  parksSectionHeading: { lead: 'Parks Where You Might', highlight: 'Spot A Lynx' },
  spotParks: [
    { name: 'Cape Breton Highlands National Park', province: 'Nova Scotia', season: 'Endangered population — highlands', level: 'caution' },
    { name: 'Gros Morne National Park', province: 'Newfoundland', season: 'Boreal forest — tied to hare numbers', level: 'safe' },
    { name: 'Jasper National Park', province: 'Alberta', season: 'Rare — quiet forest trails at dawn', level: 'caution' },
    { name: 'Kluane National Park', province: 'Yukon', season: 'Boreal valleys — best in hare peak years', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Enjoy The Moment',
      description:
        'Lynx sightings are rare. Stay still and quiet — the lynx will usually watch you briefly and then move off on its own.',
    },
    {
      title: 'Pick Up Small Pets And Children',
      description:
        'Bring small pets and young children close to you right away, then calmly put more distance between your group and the lynx.',
    },
    {
      title: 'If It Comes Closer — Look Big',
      description:
        'Stand tall, raise your arms, and speak firmly. Back away slowly without turning to run, and make sure the lynx has a clear way out.',
    },
    {
      title: 'If Contact Occurs — Fight Back And Report',
      description:
        'Attacks are extremely rare, but if a lynx makes contact, fight back and get to safety. Report it to park staff or wildlife officers right away — unusual boldness can be a sign of illness.',
    },
  ],

  gallery: [
    { src: '/wildlife/Canada Lynx/lynx-nahanni.jpg', credit: 'Mike Beauregard · CC BY 2.0 · North Nahanni River, NWT' },
    { src: '/wildlife/Canada Lynx/lynx-kuskokwim.jpg', credit: 'USFWS · Public domain · Kuskokwim River, Alaska' },
    { src: '/wildlife/Canada Lynx/lynx-moss.jpg', credit: 'USFWS · Public domain · Kenai NWR' },
  ],
};

export default CANADA_LYNX;
