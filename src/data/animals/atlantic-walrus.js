// Atlantic Walrus — данные страницы /wildlife/atlantic-walrus
//
// Сделано самостоятельно без макета, по той же схеме, что Harp Seal.
// Категория на /wildlife — Large Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет), но в тексте прямо
// сказано, что для людей в лодках и каяках моржи опасны.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - The Canadian Encyclopedia "Walrus": самки в среднем ~850 кг и ~2.75 м,
//   самцы ~1000 кг и ~3 м (в Гудзоновом заливе мельче); бивни у обоих
//   полов, до 60 см, помогают вылезать на лёд; жёсткие подвижные
//   чувствительные усы; ~6 см жира; кормятся в основном на глубине до
//   100 м, едят донных беспозвоночных (в основном двустворчатых
//   моллюсков), некоторые убивают или подбирают тюленей; летом отдыхают
//   на льду или суше, зимой держатся в полыньях; телёнок сосёт мать до ~3
//   лет, роды обычно раз в 3 года, в основном с середины апреля по июнь;
//   в Канаде — северные берега Гудзонова залива, пролив Дейвиса, Фокс-
//   Бейсин, Баффинов залив, к югу до залива Джеймс и Лабрадора; морская
//   популяция у Новой Шотландии, Ньюфаундленда и в заливе Св. Лаврентия
//   истреблена; главные хищники — белые медведи и люди; инуиты
//   добывают моржей ежегодно.
// - COSEWIC 2017: популяции High Arctic и Central-Low Arctic — Special
//   Concern; Nova Scotia-Newfoundland-Gulf of St. Lawrence — Extinct
//   (истреблена к ~1850).
// - AECO Arctic Wildlife Guidelines: для Канады — минимум 100 м от
//   плывущих моржей; держаться за пределами группы, отходить, если моржи
//   приближаются; паника на лежбище может убить детёнышей. Моржи наиболее
//   известны нападениями на людей в лодках — бивнями или переворачивая
//   лодку/каяк (в т.ч. случай с каякером Erik Boomer у о. Элсмир, 2012).
//
// МЕДИА:
// - Свободного видео диких моржей на Wikimedia Commons нет (только зоопарки
//   и мультфильмы) — heroVideo не задан. Канадские фото на Commons — сцены
//   охоты, их не беру.
// - walrus-hero.jpg — Godot13, CC BY-SA 4.0 — атлантические моржи на камне
//   у острова Phippsøya, Шпицберген (снято с Zodiac).
// - Галерея (Шпицберген, тот же атлантический подвид):
//   * walrus-tusks.jpg — Gary Bembridge, CC BY 2.0, Poolepynten;
//   * walrus-haulout.jpg — Gary Bembridge, CC BY 2.0, Poolepynten;
//   * walrus-closeup.jpg — Andreas Weith, CC BY-SA 4.0, Wahlbergøya.

export const ATLANTIC_WALRUS = {
  slug: 'atlantic-walrus',
  name: 'Atlantic Walrus',
  shortName: 'Walrus',
  shortNamePlural: 'Walruses',
  tag: 'Observe Only With A Guide',
  level: 'safe',
  image: '/wildlife/Atlantic Walrus/walrus-hero.jpg',
  heroCredit: 'Photo: Godot13 / Wikimedia Commons · CC BY-SA 4.0 · Svalbard',
  heroTitleSize: 'clamp(40px, 3.6vw, 56px)',
  description:
    "A one-tonne Arctic giant with ivory tusks and a moustache of sensitive whiskers. Walruses once lived as far south as the Gulf of St. Lawrence; today Canada's walruses live only in the Arctic. Calm on land, they can be dangerous to people in small boats and kayaks.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Males)', value: '~1,000 KG' },
    { label: 'Length', value: '~3 M' },
    { label: 'Tusks', value: 'Up To 60 CM' },
    { label: 'Calves Nurse', value: 'Up To 3 Years' },
    { label: 'Habitat', value: 'Arctic Sea Ice' },
    { label: 'Status', value: 'Special Concern' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 100 Metres',
    text: 'Stay at least 100 metres from swimming walruses, and farther from groups resting on ice or land. If they approach your boat, move away.',
  },

  behaviorSection: {
    tag: 'Walrus Behaviour',
    title: 'Tusks, Whiskers',
    highlight: 'And Ice',
    accent: '#38a169',
    cards: [
      {
        title: 'Tusks On Both Sexes',
        icon: 'ShieldCheck',
        description:
          'Males and females both grow tusks up to 60 cm long. Walruses use them to haul their huge bodies out onto the ice.',
      },
      {
        title: 'Whiskers That Feel For Food',
        icon: 'Fish',
        description:
          'Stiff, mobile whiskers help walruses find clams and other shellfish on the sea floor, mostly in water less than 100 metres deep.',
      },
      {
        title: 'Hauling Out Together',
        icon: 'UsersThreeIcon',
        description:
          'In summer, walruses crowd together on ice or beaches to rest. In winter they gather at polynyas — patches of open water in the sea ice.',
      },
      {
        title: 'Slow To Grow Up',
        icon: 'Calendar',
        description:
          'A calf can nurse for about three years, and mothers usually give birth only once every three years — so populations recover slowly.',
      },
      {
        title: 'Dangerous To Small Boats',
        icon: 'AlertTriangle',
        description:
          'Walruses are best known for attacking people in boats — they can injure with their tusks or capsize a small boat or kayak.',
      },
      {
        title: 'Lost From The South',
        icon: 'Compass',
        description:
          'Walruses were once common around Nova Scotia, Newfoundland, and the Gulf of St. Lawrence, but were hunted out by about 1850.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Paddle Close To Walruses',
      icon: 'XCircle',
      description: 'Kayaks and small boats are at real risk. A walrus can surface beside you without warning, strike with its tusks, or tip you over.',
    },
    {
      title: 'Never Approach A Haul-Out',
      icon: 'RunningFigure',
      description: 'A startled group can stampede into the water, and calves can be crushed. Always stay outside the edge of the group.',
    },
    {
      title: 'Never Get Between Walruses And The Water',
      icon: 'DoorOpen',
      description: 'Walruses on land must be able to reach the sea. Blocking their path is how dangerous stampedes start.',
    },
    {
      title: 'Never Go Without A Guide',
      icon: 'Users',
      description: 'Walrus country is remote Arctic coast with polar bears and moving ice. Visit only with experienced local guides.',
    },
    {
      title: 'Never Fly Drones Over Them',
      icon: 'Volume2',
      description: 'Noise from drones and engines can panic a haul-out. Keep drones grounded near walruses.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep 100 Metres From Swimming Walruses',
      icon: 'Eye',
      description: 'That is the minimum for Canada in the Arctic expedition guidelines — and more is better, especially in a kayak.',
    },
    {
      title: 'Back Off If They Approach',
      icon: 'ArrowDown',
      description: 'If walruses swim toward your boat, slowly move away. Don’t wait to see how close they come.',
    },
    {
      title: 'Stay Quiet Near Haul-Outs',
      icon: 'Wind',
      description: 'Move slowly and quietly, and watch for heads lifting — that means the group is getting nervous.',
    },
    {
      title: 'Watch For Polar Bears',
      icon: 'AlertTriangle',
      description: 'Polar bears hunt walruses, so bears may be nearby. Your guide should always keep watch.',
    },
    {
      title: 'Respect Inuit Communities',
      icon: 'Compass',
      description: 'Walruses are an important food and cultural resource for Inuit. Follow local guidance and hunting-area rules.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding or disturbing marine mammals is illegal under Canada’s Marine Mammal Regulations. Walruses that learn to approach boats put themselves and people in danger.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'Teaches walruses to approach boats' },
      { name: 'Bait', icon: '🎣', description: 'Never toss bait near walruses' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws walruses — and polar bears — to camps' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Not food for a marine mammal' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Fishing Line And Hooks', icon: '🪝', description: 'Discarded gear entangles marine mammals' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Attracts polar bears to Arctic camps' },
    ],
  },

  parksSectionTag: 'Arctic Waters',
  parksSectionHeading: { lead: 'Where Walruses', highlight: 'Live' },
  spotParks: [
    { name: 'Foxe Basin', province: 'Nunavut', season: 'Summer — around Igloolik, with local guides', level: 'caution' },
    { name: 'Northern Hudson Bay & Hudson Strait', province: 'Nunavut', season: 'Summer — ice edges and islands', level: 'caution' },
    { name: 'Baffin Bay & Davis Strait', province: 'Nunavut', season: 'Summer — expedition cruises', level: 'caution' },
    { name: 'Labrador Coast', province: 'Newfoundland & Labrador', season: 'Rare — southern edge of the range', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Spot Them Early',
      description:
        'Scan the water and ice edges for heads and tusks. Decide your route before you get close.',
    },
    {
      title: 'Keep 100 Metres Or More',
      description:
        'From swimming walruses keep at least 100 metres — more in a kayak. Stay outside the edge of any group on land or ice.',
    },
    {
      title: 'If They Approach — Leave',
      description:
        'If walruses swim toward you or lift their heads and move, steer slowly away. Don’t let them surface next to your boat.',
    },
    {
      title: 'Never Block Their Path To The Water',
      description:
        'On land, always leave walruses a clear way to the sea and move back if the group gets restless.',
    },
  ],

  gallery: [
    { src: '/wildlife/Atlantic Walrus/walrus-tusks.jpg', credit: 'Gary Bembridge · CC BY 2.0 · Svalbard' },
    { src: '/wildlife/Atlantic Walrus/walrus-haulout.jpg', credit: 'Gary Bembridge · CC BY 2.0 · Svalbard' },
    { src: '/wildlife/Atlantic Walrus/walrus-closeup.jpg', credit: 'Andreas Weith · CC BY-SA 4.0 · Svalbard' },
  ],
};

export default ATLANTIC_WALRUS;
