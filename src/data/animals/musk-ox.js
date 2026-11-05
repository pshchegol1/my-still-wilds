// Musk Ox — данные страницы /wildlife/musk-ox
//
// Сделано самостоятельно без макета, по той же схеме, что Caribou / Elk.
// Категория на /wildlife — Large Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Hinterland Who's Who (CWF/ECCC; ревизия 1990 — численность оттуда НЕ
//   беру): быки 270-315 кг, самки примерно на 90 кг легче; у быков
//   сплошной "boss" из рога и кости до 10 см толщиной; подшёрсток qiviut
//   прочнее овечьей шерсти, примерно в 8 раз теплее и тоньше кашемира;
//   внешний волос — самый длинный среди млекопитающих Северной Америки;
//   от волков встают в плотный круг мордами наружу, быки/самки
//   выбегают навстречу, телята прижимаются к матерям; от людей сначала
//   держат круг и срываются, только если на них давят вплотную; гон в
//   конце лета — быки ревут и бьются; телята на северных островах — с
//   апреля по июнь, один телёнок в год; зимой копают снег до ив, злаков и
//   осок; большинство канадских овцебыков — на арктических островах,
//   особенно Банкс и Виктория; в 1917 году правительство Канады взяло
//   вид под охрану после того, как его почти истребили; единственный
//   дикий хищник — арктический волк.
// - Отдельной официальной дистанции Parks Canada для овцебыков не нашла —
//   30 м здесь как общее правило Parks Canada для крупных копытных,
//   на странице прямо сказано "farther is better".
//
// МЕДИА:
// - muskox-hero.mp4 — "Muskox (Ovibos moschatus) in Norway", автор указан
//   на Commons как "liver Reik" (источник — Vimeo), CC BY 3.0 — дикие
//   овцебыки национального парка Доврефьель-Суннальсфьелла (Норвегия;
//   популяция завезена туда в XX веке, но живёт на воле). Фрагмент 54-74 с.
// - muskox-hero.jpg — USFWS / Katrina Liebich, public domain, бык у реки
//   Каннинг, Arctic NWR (Аляска).
// - Галерея:
//   * muskox-aulavik.jpg — Paul Gierszewski, CC BY-SA 4.0, стадо в
//     Aulavik NP, остров Банкс (Канада, 2022);
//   * muskox-herd.jpg — USFWS, public domain, стадо выстроилось линией,
//     Arctic NWR (Аляска);
//   * muskox-victoria.jpg — Ansgar Walk, CC BY-SA 3.0, остров Виктория,
//     Нунавут (маленькое разрешение 1181 px — только галерея).

export const MUSK_OX = {
  slug: 'musk-ox',
  name: 'Musk Ox',
  shortName: 'Musk Ox',
  shortNamePlural: 'Muskoxen',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/Muskox/muskox-hero.jpg',
  heroVideo: '/wildlife/Muskox/muskox-hero.mp4',
  heroCredit: 'Photo: Katrina Liebich / USFWS · Public domain · Arctic NWR, Alaska',
  heroVideoCredit: 'Video: liver Reik / Wikimedia Commons · CC BY 3.0 · Dovrefjell NP, Norway',
  description:
    "An Ice Age survivor wrapped in wool about eight times warmer than sheep's. Muskoxen face Arctic blizzards — and wolves — by standing their ground in a tight circle, horns out. They are not aggressive, but a pressured herd or a lone bull can charge, so give them plenty of room.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight (Bulls)', value: '270-315 KG' },
    { label: 'Wool', value: '~8× Warmer' },
    { label: 'Calves', value: 'April-June' },
    { label: 'Rut', value: 'Late Summer' },
    { label: 'Habitat', value: 'Arctic Tundra' },
    { label: 'Protected', value: 'Since 1917' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Farther is better. If muskoxen bunch together and face you, you are already too close — back away slowly.',
  },

  behaviorSection: {
    tag: 'Musk Ox Behaviour',
    title: 'Built For The',
    highlight: 'High Arctic',
    accent: '#38a169',
    cards: [
      {
        title: 'The Defensive Circle',
        icon: 'UsersThreeIcon',
        description:
          'Threatened by wolves, adults form a tight ring facing outward with calves pressed in the middle. Bulls or cows burst out to charge the attackers.',
      },
      {
        title: 'Qiviut — Warmest Wool',
        icon: 'Wind',
        description:
          'Their soft underwool, qiviut, is stronger than sheep’s wool, about eight times warmer, and finer than cashmere — under the longest hair of any North American mammal.',
      },
      {
        title: 'Armoured Heads',
        icon: 'ShieldCheck',
        description:
          'A bull’s horns join in a solid “boss” of horn and bone up to 10 cm thick across the forehead — his armour for head-on clashes.',
      },
      {
        title: 'Late-Summer Rut',
        icon: 'Flame',
        description:
          'In late summer, bulls bellow and fight for control of a herd. This is when a lone bull is most likely to be short-tempered.',
      },
      {
        title: 'Digging For Winter Food',
        icon: 'ArrowDown',
        description:
          'In winter, muskoxen paw craters through the snow to reach willows, grasses, and sedges.',
      },
      {
        title: 'Saved From Extinction',
        icon: 'AlertTriangle',
        description:
          'Hunting for meat and hides drove muskoxen to the brink. Canada protected them in 1917, and herds slowly recovered — today most live on Banks and Victoria islands.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Approach A Herd',
      icon: 'RunningFigure',
      description: 'A herd that bunches up and faces you is defending itself. Pushing closer can trigger a sudden stampede or charge.',
    },
    {
      title: 'Never Split A Herd Or Calves',
      icon: 'Users',
      description: 'Never walk between herd members or near calves. Separated animals are stressed and easy prey for wolves.',
    },
    {
      title: 'Never Bring Dogs Close',
      icon: 'DogIcon',
      description: 'Muskoxen see dogs as wolves and may charge to defend the herd. Keep dogs leashed and well away.',
    },
    {
      title: 'Never Approach A Lone Bull',
      icon: 'Flame',
      description: 'Solitary bulls, especially during the late-summer rut, can be unpredictable. Give them an extra-wide berth.',
    },
    {
      title: 'Never Chase For A Photo',
      icon: 'Camera',
      description: 'Making muskoxen run burns energy they cannot spare in the Arctic. If they move away, let them go.',
    },
  ],

  alwaysDo: [
    {
      title: 'Watch From Far Away',
      icon: 'Eye',
      description: 'Use binoculars or a long lens. On open tundra muskoxen are easy to see from a long way off — there is no need to get close.',
    },
    {
      title: 'Read The Herd',
      icon: 'AlertTriangle',
      description: 'Animals bunching together and turning to face you is a warning. Back away slowly.',
    },
    {
      title: 'Keep Rocks Or Water Between You',
      icon: 'Compass',
      description: 'If a muskox comes toward you, move away and put a large boulder, vehicle, or a river between you.',
    },
    {
      title: 'Travel With A Guide',
      icon: 'Users',
      description: 'Most muskox country is remote Arctic wilderness with polar bears and limited rescue. Go with an experienced local guide.',
    },
    {
      title: 'Leave No Trace',
      icon: 'Trash2',
      description: 'Pack out all garbage and food waste. Arctic soils and plants recover extremely slowly.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Muskoxen digest a tough Arctic diet of willows, grasses, and sedges — human food can make them sick and draws them toward people.',
    items: [
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Can cause serious digestive problems' },
      { name: 'Apples And Fruit', icon: '/icons/wildlife/🍎.png', description: 'Not part of a tundra diet' },
      { name: 'Carrots And Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Creates dependency on human food' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife to camps' },
      { name: 'Milk And Dairy', icon: '/icons/wildlife/🥛.png', description: 'Not part of a wild diet' },
      { name: 'Salt', icon: '🧂', description: 'Draws animals into camps' },
      { name: 'Hay Or Feed', icon: '🌾', description: 'Never bait muskoxen for a photo' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Also attracts polar bears and foxes' },
    ],
  },

  parksSectionTag: 'Arctic Parks',
  parksSectionHeading: { lead: 'Where To See', highlight: 'Muskoxen' },
  spotParks: [
    { name: 'Aulavik National Park', province: 'Northwest Territories', season: 'Banks Island — summer, fly-in only', level: 'safe' },
    { name: 'Quttinirpaaq National Park', province: 'Nunavut', season: 'Ellesmere Island — remote, summer', level: 'safe' },
    { name: 'Thelon Wildlife Sanctuary', province: 'NWT · Nunavut', season: 'Mainland tundra — canoe trips', level: 'safe' },
    { name: 'Victoria Island', province: 'Nunavut · NWT', season: 'Around Cambridge Bay — with local guides', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop When You Spot Them',
      description:
        'On open tundra you will usually see muskoxen long before they react. Stop there and watch from a distance.',
    },
    {
      title: 'Watch For Bunching',
      description:
        'If the herd groups together and turns to face you, it feels threatened. Do not take another step closer.',
    },
    {
      title: 'Back Away Slowly',
      description:
        'Move away calmly the way you came and give the herd an open escape route. Never run toward or around them.',
    },
    {
      title: 'If One Charges — Get Behind Something',
      description:
        'Move behind a large boulder or vehicle, or across water, and keep backing away.',
    },
  ],

  gallery: [
    { src: '/wildlife/Muskox/muskox-aulavik.jpg', credit: 'Paul Gierszewski · CC BY-SA 4.0 · Aulavik NP, Banks Island' },
    { src: '/wildlife/Muskox/muskox-herd.jpg', credit: 'USFWS · Public domain · Arctic NWR, Alaska' },
    { src: '/wildlife/Muskox/muskox-victoria.jpg', credit: 'Ansgar Walk · CC BY-SA 3.0 · Victoria Island, Nunavut' },
  ],
};

export default MUSK_OX;
