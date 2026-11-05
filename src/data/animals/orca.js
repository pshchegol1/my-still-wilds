// Orca — данные страницы /wildlife/orca
//
// Как и Wood Bison, сделано самостоятельно без макета, по той же схеме,
// что и остальные страницы животных на сайте. Ключевое отличие от
// медведей/кугуара/лося/бизона: дикие косатки не нападали на людей в
// открытой воде (все известные смертельные случаи — с содержащимися в
// неволе животными), поэтому "опасность" здесь — это не угроза атаки, а
// риск повредить/побеспокоить кита и столкновения с судном. Уровень
// карточки на /wildlife оставлен "caution" (как было на сайте изначально,
// до создания этой страницы), но контент выстроен вокруг морских правил
// дистанции, а не "зарядов" и защиты от нападения.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Вес/длина: 2,700-6,000 кг, 5.5-9.8 м — по сводным данным Salish Sea
//   Wildlife Guide и NOAA Fisheries (самцы крупнее самок, рекордные особи
//   тяжелее указанного диапазона).
// - Скорость: 55.5 км/ч — зафиксированный рекорд (Guinness World Records /
//   UBC Marine Mammal Research Unit, замер у тихоокеанского побережья
//   Канады в 1958), на коротких бросках; крейсерская скорость значительно
//   ниже.
// - Популяции в БК: на побережье Британской Колумбии выделяют три
//   генетически и поведенчески различных экотипа — Resident (рыбоядные),
//   Bigg's/Transient (поедают морских млекопитающих) и Offshore (открытый
//   океан). Northern Resident — статус "Threatened" по SARA, оценка
//   численности порядка 300 особей (последняя надёжно подтверждённая
//   цифра переписи DFO — 309 особей в 2017, более свежих точных данных в
//   открытых источниках не нашла). Southern Resident — отдельная,
//   критически угрожаемая популяция, статус "Endangered", на 2023-2024
//   около 73-75 особей по данным WWF-Canada и переписи. Эти две цифры
//   указаны в карточке раздельно, т.к. относятся к разным популяциям с
//   очень разной судьбой.
// - Правила дистанции в канадских водах: федеральные Marine Mammal
//   Regulations требуют минимум 200 м от косаток в большинстве вод Канады
//   и 400 м в критической среде обитания Southern Resident (южная часть
//   пролива Джорджия и прилегающие воды) — используется как
//   minDistanceWarning и зоны дистанции на странице.
// - Johnstone Strait / Robson Bight (о. Ванкувер, у Telegraph Cove) —
//   всемирно известное место наблюдения за Northern Resident, включая
//   знаменитые "трущиеся" галечные пляжи косаток; Gulf Islands и воды у
//   Виктории — ключевая часть среды обитания Southern Resident; оба
//   факта общеизвестны и широко задокументированы.
// - Фото/видео — все подлинно дикие, с проверенной локацией:
//   * heroImage/постер — Wikimedia Commons, "5 orcas in johnstone
//     strait.jpg", автор Winky (Vancouver, Canada), CC BY 2.0 — стая
//     спинных плавников в проливе Джонстон, БК.
//   * orca-victoria.jpg (галерея) — Wikimedia Commons, "Bull Killer Whale
//     near Victoria BC.JPG", автор Kevstan, CC BY-SA 3.0 — самец с высоким
//     спинным плавником у Виктории, БК; на фоне видны лодки наблюдателей
//     на безопасной дистанции.
//   * orca-telegraph-cove.jpg (галерея) — Wikimedia Commons, автор
//     Buiobuione, CC BY-SA 4.0 — плавник и фонтан у Telegraph Cove,
//     о. Ванкувер.
//   * heroVideo — Pexels, "Killer Whales Swimming Underwater", автор
//     Zlatin Georgiev, лицензия Pexels (атрибуция не обязательна) —
//     подводные кадры стаи в открытой воде, без признаков аквариума/
//     вольера; точное место съёмки на странице не указано.

export const ORCA = {
  slug: 'orca',
  name: 'Orca',
  shortName: 'Orca',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/ORCA/orca-hero.jpg',
  heroVideo: '/wildlife/ORCA/orca-hero.mp4',
  heroCredit: 'Photo: Winky / Wikimedia Commons · CC BY 2.0 · Johnstone Strait, BC',
  description:
    "The apex predator of the Pacific coast and one of the ocean's most intelligent animals — orcas live in tight-knit, matrilineal pods and have never been confirmed to fatally attack a human in the wild. The real danger runs the other way: boat strikes and disturbance are what threaten them, which is why strict distance laws protect BC's whales.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '2,700-6,000 KG' },
    { label: 'Length', value: '5.5-9.8 M' },
    { label: 'Speed', value: '55.5 Km/H' },
    { label: 'Pod Size', value: 'Up To 50' },
    { label: 'Population (BC)', value: '~300 N · ~75 S' },
    { label: 'Status', value: 'Threatened–Endangered' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 200-400 Metres',
    text: "Federal law requires vessels to stay back from all killer whales in BC waters — 400 metres in Southern Resident critical habitat. Never approach by boat, kayak, or paddleboard.",
  },

  behaviorSection: {
    tag: 'Orca Behaviour',
    title: 'Apex Predator Of',
    highlight: 'The Pacific Coast',
    accent: '#488CDC',
    cards: [
      {
        title: 'Three Distinct Types In BC',
        icon: 'Compass',
        description:
          "BC's waters hold three genetically and behaviourally distinct orca populations: fish-eating Residents, marine-mammal-hunting Bigg's (Transients), and the rarely seen Offshores. They do not interbreed, despite sharing the same coastline.",
      },
      {
        title: 'Highly Intelligent And Social',
        icon: 'Users',
        description:
          'Orcas live in tight matrilineal pods led by the oldest females, often for 90 years or more. Each pod has its own unique vocal dialect, passed down through generations like a cultural tradition.',
      },
      {
        title: 'No Confirmed Wild Attack On A Human',
        icon: 'ShieldCheck',
        description:
          'Despite being an apex predator capable of hunting sharks and whales, no wild orca has ever been confirmed to fatally attack a human. All known fatal incidents have involved orcas held in captivity.',
      },
      {
        title: 'Southern Residents Are Critically Endangered',
        icon: 'AlertTriangle',
        description:
          'Only around 75 Southern Resident orcas remain, struggling with a shortage of their preferred prey, Chinook salmon. Every individual loss is a significant blow to the population\'s survival.',
      },
      {
        title: 'Boat Noise Disrupts Hunting',
        icon: 'Volume2',
        description:
          'Orcas hunt and communicate using echolocation. Engine noise from boat traffic can drown this out, making it harder for whales to find food — a major reason behind BC\'s mandatory viewing distances.',
      },
      {
        title: 'Strong, Fast Swimmers',
        icon: 'Wind',
        description:
          'Orcas can burst to speeds over 55 km/h and dive hundreds of metres, but spend most of their time cruising slowly as a pod, surfacing to breathe every few minutes.',
      },
    ],
  },

  distanceIcon: '/icons/wildlife/orca.svg',

  distanceLabels: {
    outer: '400m — Southern Resident Habitat',
    mid: '200m — Minimum Legal Distance',
    inner: 'Exclusion Zone',
  },

  distanceZones: [
    {
      range: '0-200M',
      label: 'Illegal Zone',
      description: 'Operating a vessel this close is against federal law and puts the whale at serious risk. Slow down and move away immediately.',
      level: 'danger',
    },
    {
      range: '200-400M',
      label: 'Caution Zone',
      description: 'The legal minimum in most BC waters — but Southern Resident critical habitat requires the full 400 metres. Idle your engine and let whales pass.',
      level: 'caution',
    },
    {
      range: '400M+',
      label: 'Recommended Viewing Distance',
      description: 'A safe, legal distance for observing whales, especially in Southern Resident habitat. Use binoculars or a zoom lens for a closer look.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Approach By Boat For A Closer Look',
      icon: 'Camera',
      description: 'Closing the distance to get a better photo or view is illegal and puts the whale at risk of a vessel strike. Use a zoom lens instead.',
    },
    {
      title: 'Never Feed Or Throw Fish To Orcas',
      icon: 'PawPrint',
      description: 'Feeding disrupts natural hunting behaviour and is illegal under the Marine Mammal Regulations — it can also teach whales to approach boats.',
    },
    {
      title: 'Never Chase Or Follow A Pod',
      icon: 'RunningFigure',
      description: 'Pursuing whales as they travel causes stress and is a federal offence. Let the pod set the pace and direction — never follow.',
    },
    {
      title: "Never Cut Across A Pod's Path",
      icon: 'DoorOpen',
      description: 'Positioning your boat in front of or through a travelling pod risks a collision. Always approach parallel and from the side, never head-on.',
    },
    {
      title: 'Never Use Jet Skis Near Whales',
      icon: 'Volume2',
      description: 'Fast, loud watercraft are especially disruptive to orca echolocation and are specifically restricted around whales in BC waters.',
    },
  ],

  alwaysDo: [
    {
      title: 'Maintain The Legal Minimum Distance',
      icon: 'Compass',
      description: 'Stay at least 200 metres back in most BC waters, and 400 metres in Southern Resident critical habitat — regardless of how calm the whales appear.',
    },
    {
      title: 'Slow Down Or Idle When Whales Are Near',
      icon: 'Wind',
      description: 'Reduce speed well before reaching the distance limit, and idle your engine if a pod approaches your position rather than you approaching them.',
    },
    {
      title: 'Watch For Signs Of Disturbance',
      icon: 'Eye',
      description: 'Rapid direction changes, prolonged diving, or tail-slapping can signal a whale is stressed by nearby vessels — back away further if you see these.',
    },
    {
      title: 'Report Your Sighting',
      icon: 'MegaphoneIcon',
      description: "Report orca sightings to the BC Cetacean Sightings Network or the WhaleReport app — this data helps researchers track and protect BC's whale populations.",
    },
    {
      title: 'Choose A Licensed Whale-Watching Operator',
      icon: 'ShieldCheck',
      description: "Operators who follow Canada's Be Whale Wise guidelines know current regulations and how to watch whales responsibly, from a safe and legal distance.",
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or attracting marine mammals is illegal under Canada\'s Marine Mammal Regulations. An orca that associates boats with food is at far greater risk of vessel strikes and dangerous human contact.',
    items: [
      { name: 'Fish Or Bait', icon: '/icons/wildlife/🐟.png', description: 'Illegal under federal law — disrupts natural hunting behaviour' },
      { name: 'Chum Or Berley', icon: '🧂', description: 'Draws orcas toward boats, increasing collision risk' },
      { name: 'Food Scraps From Boats', icon: '/icons/wildlife/🍞.png', description: 'Teaches whales to associate vessels with an easy meal' },
      { name: 'Any Garbage Or Plastic', icon: '/icons/wildlife/🗑️.png', description: 'Marine debris is often mistaken for food and can be fatal' },
      { name: 'Hand-Feeding From Docks', icon: '🐾', description: 'Illegal and dangerous — never feed whales from shore or a kayak' },
      { name: 'Salmon Carcasses', icon: '🦴', description: 'Disrupts natural feeding patterns and can spread disease' },
      { name: 'Processed Human Food', icon: '/icons/wildlife/🍬.png', description: 'Never part of a wild diet — causes serious digestive harm' },
      { name: 'Bait Left In The Water', icon: '🎣', description: 'Attracts orcas into high-traffic boating lanes' },
    ],
  },

  parksSectionTag: 'Where To See Them',
  parksSectionHeading: { lead: 'Best Places To', highlight: 'Spot Orcas' },
  spotParks: [
    { name: 'Johnstone Strait / Robson Bight', province: 'British Columbia', season: 'Famous Northern Resident rubbing beaches', level: 'safe' },
    { name: 'Pacific Rim National Park Reserve', province: 'British Columbia', season: "Coastal waters — Bigg's (Transient) sightings", level: 'safe' },
    { name: 'Gulf Islands National Park Reserve', province: 'British Columbia', season: 'Southern Resident critical habitat', level: 'caution' },
    { name: 'Waters Near Victoria', province: 'British Columbia', season: 'Frequent sightings, licensed tours available', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Slow Down And Reduce Your Wake',
      description:
        'The moment you spot an orca or a blow in the distance, slow your vessel well before the 200-400 metre distance line. Reduce your wake and avoid sudden course changes.',
    },
    {
      title: 'Position Parallel, Never Head-On',
      description:
        "Keep to the side of a pod's direction of travel rather than crossing or heading toward it. Let the whales choose their own path without needing to react to your boat.",
    },
    {
      title: 'If A Whale Approaches You — Go Neutral',
      description:
        "If curious orcas close the distance themselves, put your engine in neutral and let them pass. Do not chase after them once they move away — the encounter ends on their terms.",
    },
    {
      title: 'Watch, Report, And Move On',
      description:
        'Enjoy the sighting from a legal distance, log your observation with a whale sighting network if possible, and continue on your way once the pod has moved past — don\'t linger at the edge of the distance limit.',
    },
  ],

  gallery: [
    { src: '/wildlife/ORCA/orca-hero.jpg', credit: 'Winky · CC BY 2.0 · Johnstone Strait, BC' },
    { src: '/wildlife/ORCA/orca-victoria.jpg', credit: 'Kevstan · CC BY-SA 3.0 · Near Victoria, BC' },
    { src: '/wildlife/ORCA/orca-telegraph-cove.jpg', credit: 'Buiobuione · CC BY-SA 4.0 · Telegraph Cove, BC' },
  ],
};

export default ORCA;
