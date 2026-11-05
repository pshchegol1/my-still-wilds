// Harp Seal — данные страницы /wildlife/harp-seal
//
// Сделано самостоятельно без макета, по той же схеме, что Harbour Seal.
// Категория на /wildlife — Large Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - DFO (научные отчёты CSAS по северо-западноатлантическим гренландским
//   тюленям): лето проводят в канадской Арктике и у Гренландии, осенью
//   уходят на юг; щенятся на паковом льду в заливе Святого Лаврентия
//   ("Gulf") или у южного Лабрадора / северо-восточного Ньюфаундленда
//   ("Front") в конце февраля - марте; белый мех ("whitecoat") линяет
//   примерно в 3 недели.
// - DFO, учёт 2022: родилось ~614,100 щенков — меньше, чем в 2017
//   (746,500), и самая низкая оценка с 1994 года.
// - VOCM / DFO, 2021: из-за плохого льда в южной части залива Св.
//   Лаврентия щенков практически не было.
// - Marine Mammal Regulations (SOR/93-56), s. 7: запрещено беспокоить
//   морских млекопитающих, в т.ч. приближаться, чтобы кормить, трогать,
//   сдвинуть, отделить от группы или встать между матерью и детёнышем.
// - Запрет коммерческой добычи щенков-бельков (whitecoats) в Канаде с
//   1987 года — общеизвестный факт.
// - Вес/размер в надёжных канадских источниках не нашла — НЕ указываю.
//
// МЕДИА:
// - Свободного видео диких гренландских тюленей на Wikimedia Commons нет —
//   heroVideo не задан, в шапке фото (как у Wolverine).
// - harp-hero.jpg — "Harp seal mother and pup", Visit Greenland,
//   CC BY 2.0 — самка кормит бялька на льду (Гренландия).
// - Галерея:
//   * harp-newfoundland.jpg — Ting ting Chen, CC BY-SA 4.0, Brigus South,
//     южный берег Ньюфаундленда (Канада);
//   * harp-floe.jpg — Brian Gratwicke, CC BY 2.0, Гренландское море;
//   * harp-herd.jpg — Brian Gratwicke, CC BY 2.0, Гренландское море.

export const HARP_SEAL = {
  slug: 'harp-seal',
  name: 'Harp Seal',
  shortName: 'Harp Seal',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Harp Sea/harp-hero.jpg',
  heroCredit: 'Photo: Visit Greenland / Wikimedia Commons · CC BY 2.0',
  // Мать и щенок в левой нижней части кадра — без сдвига уходят под
  // заголовок и Quick Facts.
  heroZoomPan: 'scale(1.4) translate(13%, -12%)',
  description:
    "The seal of the sea ice. Every late winter, harp seals gather on the pack ice of the Gulf of St. Lawrence and off Newfoundland and Labrador to give birth to fluffy white pups. They depend on that ice — and as it shrinks, fewer pups are being born.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Pups Born', value: 'Late Feb-March' },
    { label: 'Whitecoat', value: '~3 Weeks' },
    { label: 'Pups In 2022', value: '~614,000' },
    { label: 'Nursery', value: 'Pack Ice' },
    { label: 'Summer Range', value: 'Arctic & Greenland' },
    { label: 'Protected By', value: 'Marine Mammal Regs' },
  ],

  minDistanceWarning: {
    title: 'Keep At Least 50 Metres Away',
    text: '100 metres is better. Disturbing a seal — including touching a pup or separating it from its mother — is illegal under Canada’s Marine Mammal Regulations.',
  },

  behaviorSection: {
    tag: 'Harp Seal Behaviour',
    title: 'Born On',
    highlight: 'The Ice',
    accent: '#38a169',
    cards: [
      {
        title: 'Pack-Ice Nurseries',
        icon: 'Calendar',
        description:
          'In late February and March, mothers give birth on floating pack ice in the Gulf of St. Lawrence and off southern Labrador and northeastern Newfoundland — an area called “the Front.”',
      },
      {
        title: 'The Whitecoat',
        icon: 'Eye',
        description:
          'Newborn pups wear thick white fur for about three weeks before moulting into a spotted grey coat.',
      },
      {
        title: 'Long Migrations',
        icon: 'Compass',
        description:
          'Harp seals spend summer feeding in the Canadian Arctic and around Greenland, then swim south each autumn to the ice where they give birth.',
      },
      {
        title: 'No Ice, No Pups',
        icon: 'AlertTriangle',
        description:
          'In 2021, there was virtually no pupping in the southern Gulf of St. Lawrence because of poor ice. The 2022 count of about 614,000 pups was the lowest since 1994.',
      },
      {
        title: 'Whitecoat Hunting Banned',
        icon: 'ShieldCheck',
        description:
          'Commercial hunting of whitecoat pups has been banned in Canada since 1987.',
      },
      {
        title: 'Protected By Law',
        icon: 'Fish',
        description:
          'Canada’s Marine Mammal Regulations make it illegal to disturb seals — including feeding, touching, or moving them.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Touch Or Pick Up A Pup',
      icon: 'XCircle',
      description: 'Handling a pup can make its mother abandon it. Whitecoats look cuddly, but they are wild animals that can bite.',
    },
    {
      title: 'Never Get Between Mother And Pup',
      icon: 'Users',
      description: 'Separating a mother from her pup counts as disturbance under Canadian law.',
    },
    {
      title: 'Never Walk Onto Sea Ice Alone',
      icon: 'AlertTriangle',
      description: 'Pack ice shifts, cracks, and drifts offshore. Only visit seals on the ice with licensed, experienced guides.',
    },
    {
      title: 'Never Feed Seals',
      icon: 'Fish',
      description: 'Feeding marine mammals is illegal and teaches seals to approach people and boats.',
    },
    {
      title: 'Never Let Dogs Near Seals',
      icon: 'DogIcon',
      description: 'Young harp seals sometimes rest on beaches in Newfoundland and beyond. Keep dogs leashed and well away.',
    },
  ],

  alwaysDo: [
    {
      title: 'Go With A Licensed Guide',
      icon: 'Users',
      description: 'Seal-watching on the ice is only safe with tour operators who know the ice and follow the rules for approaching seals.',
    },
    {
      title: 'Keep 50-100 Metres Away On Shore',
      icon: 'Eye',
      description: 'If you find a harp seal on a beach, watch from a distance with binoculars and keep other people back too.',
    },
    {
      title: 'Leave Beached Seals Alone',
      icon: 'EyeOff',
      description: 'Young harp seals sometimes haul out on beaches to rest. Resting on land is normal — don’t push them back into the water.',
    },
    {
      title: 'Check Ice Conditions',
      icon: 'Calendar',
      description: 'Pup-viewing trips depend entirely on the ice. In poor ice years, trips may be cancelled — that’s for the seals’ safety and yours.',
    },
    {
      title: 'Report Injured Seals',
      icon: 'Phone',
      description: 'If a seal looks injured, entangled, or sick, call DFO or a local marine mammal response network — don’t handle it yourself.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding seals is illegal under Canada’s Marine Mammal Regulations. Seals that learn to approach people get tangled in fishing gear, hit by boats, and can bite.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Teaches seals to approach boats and docks' },
      { name: 'Bait', icon: '🎣', description: 'Never toss bait to seals near boats' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Not food for a marine predator' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Teaches seals to approach people' },
      { name: 'Milk For Pups', icon: '/icons/wildlife/🥛.png', description: 'Never try to feed a pup — its mother will' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Fishing Line And Hooks', icon: '🪝', description: 'Discarded gear entangles seals' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Plastic on beaches ends up in the sea' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Harp Seals' },
  spotParks: [
    { name: 'Îles-de-la-Madeleine', province: 'Quebec', season: 'Late Feb-March — guided ice trips when ice allows', level: 'caution' },
    { name: 'Gulf of St. Lawrence', province: 'QC · PEI · NS · NB', season: 'Late winter — pupping on the pack ice', level: 'safe' },
    { name: 'The Front', province: 'Newfoundland & Labrador', season: 'Late winter — off the northeast coast', level: 'safe' },
    { name: 'Eastern Arctic', province: 'Nunavut', season: 'Summer — feeding grounds', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Seal On The Beach? Stay Back',
      description:
        'Young harp seals sometimes rest on shore. Stop at least 50 metres away — resting on land is normal.',
    },
    {
      title: 'Keep People And Dogs Away',
      description:
        'Ask others to give the seal space, and keep dogs leashed and well back.',
    },
    {
      title: 'Don’t Push It Back Into The Water',
      description:
        'Never touch, herd, or try to “rescue” a healthy seal. It will return to the sea on its own.',
    },
    {
      title: 'Report If It Looks Hurt',
      description:
        'If the seal is injured, entangled, or in a dangerous spot like a road, call DFO or a marine mammal response line.',
    },
  ],

  gallery: [
    { src: '/wildlife/Harp Sea/harp-newfoundland.jpg', credit: 'Ting ting Chen · CC BY-SA 4.0 · Brigus South, Newfoundland' },
    { src: '/wildlife/Harp Sea/harp-floe.jpg', credit: 'Brian Gratwicke · CC BY 2.0 · Greenland Sea' },
    { src: '/wildlife/Harp Sea/harp-herd.jpg', credit: 'Brian Gratwicke · CC BY 2.0 · Greenland Sea' },
  ],
};

export default HARP_SEAL;
