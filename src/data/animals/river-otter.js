// River Otter — данные страницы /wildlife/river-otter
//
// Сделано самостоятельно без макета, по той же схеме, что Beaver.
// Категория на /wildlife — Small Mammals ("Safe to Observe"), поэтому
// level: 'safe' (раздела "How Close Is Too Close?" нет).
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Nature Canada: речная выдра живёт во всех провинциях Канады, кроме
//   Острова Принца Эдуарда, где её истребили.
// - Справочные источники (зоопарки, базы данных — не правительственные,
//   поэтому формулировки осторожные): взрослые ~5-14 кг; едят рыбу,
//   черепах, амфибий, крабов, раков, иногда птиц и мелких млекопитающих;
//   в помёте 1-6 щенков, обычно 2-3; могут закрывать ноздри при нырянии.
//   Время под водой ("до 8 минут") только в одном источнике — НЕ указываю.
// - BC Conservation Officer Service и СМИ BC (Port Alberni, Central
//   Saanich, Penticton, Comox): нападения выдр на людей "необычны и
//   редки", но выдры могут быть агрессивны рядом с детёнышами; были
//   случаи, когда группы выдр нападали на собак в воде и даже тащили их
//   под воду; CRD (Victoria): выдры выглядят игривыми, но могут напасть,
//   если чувствуют угрозу; рекомендации — собак на поводке, держать
//   дистанцию. Также бывали случаи гибели детёнышей выдр от собак.
// - Скатывание по снегу/глине и "горки" — фото следов-жёлоба в снегу
//   (Ripon, Квебек) подтверждает поведение.
// - Минимальная дистанция 30 м — общее правило Parks Canada.
//
// МЕДИА:
// - otter-hero.mp4 — "Northern river otter at Seedskadee National Wildlife
//   Refuge", Tom Koerner / USFWS, public domain — выдра охотится на раков
//   у берега (Вайоминг, США); снято с рук, выдра небольшая в кадре;
//   фрагмент 4-24 с.
// - otter-hero.jpg — "River Otter (Lontra canadensis)", Neal Herbert /
//   NPS (Yellowstone), public domain.
// - Галерея:
//   * otter-quidividi.jpg — Jeremy T. Hetzel, CC BY 2.0, выдра ест рыбу на
//     льду озера Quidi Vidi, Сент-Джонс, Ньюфаундленд;
//   * otter-slide.jpg — Cephas, CC BY-SA 3.0, след-жёлоб выдры в снегу,
//     Ripon, Квебек;
//   * otter-ice.jpg — Tom Koerner / USFWS, public domain, выдра с рыбой и
//     сороками на льду, Seedskadee NWR.
//   Фото "Loutre de rivière" (Laval) не взяла — по кадру животное больше
//   похоже на бобра/ондатру, чем на выдру.

export const RIVER_OTTER = {
  slug: 'river-otter',
  name: 'River Otter',
  shortName: 'River Otter',
  tag: 'Safe To Observe — From A Distance',
  level: 'safe',
  image: '/wildlife/River Otter/otter-hero.jpg',
  heroVideo: '/wildlife/River Otter/otter-hero.mp4',
  heroCredit: 'Photo: Neal Herbert / NPS · Public domain',
  description:
    "Sleek, playful, and always on the move, river otters slide down snowbanks, wrestle in the shallows, and chase fish under the ice. They live in every province except PEI. Watch them from a distance — especially with a dog — because a family of otters can turn fierce.",

  actions: [
    { label: 'Where to See', href: '#parks' },
    { label: 'Viewing Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '~5-14 KG' },
    { label: 'Diet', value: 'Fish & Crayfish' },
    { label: 'Pups', value: 'Usually 2-3' },
    { label: 'Habitat', value: 'Rivers, Lakes, Coasts' },
    { label: 'Range', value: 'All Provinces But PEI' },
    { label: 'Status', value: 'Common' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Otters look playful, but may attack if they feel threatened — especially near their young. Keep dogs on a leash and out of the water.',
  },

  behaviorSection: {
    tag: 'River Otter Behaviour',
    title: 'Playful —',
    highlight: 'But Wild',
    accent: '#38a169',
    cards: [
      {
        title: 'Snow And Mud Slides',
        icon: 'ArrowDown',
        description:
          'Otters often slide on their bellies down snowy or muddy banks, leaving long grooves in the snow — a sure sign they live nearby.',
      },
      {
        title: 'Expert Swimmers',
        icon: 'Fish',
        description:
          'A long, streamlined body, webbed feet, and a thick tail make otters fast underwater hunters. They can close their nostrils when they dive.',
      },
      {
        title: 'Fish, Crayfish And More',
        icon: 'Compass',
        description:
          'Otters eat mostly fish and crayfish, plus frogs, turtles, crabs, and sometimes birds or small mammals.',
      },
      {
        title: 'Family Groups',
        icon: 'UsersThreeIcon',
        description:
          'Mothers raise litters of usually two or three pups, and families often travel, hunt, and play together.',
      },
      {
        title: 'Fierce Near Their Young',
        icon: 'ShieldCheck',
        description:
          'Attacks on people are rare, but BC conservation officers warn otters can be aggressive when pups are around.',
      },
      {
        title: 'Dangerous To Dogs',
        icon: 'DogIcon',
        description:
          'In BC, groups of otters have attacked dogs swimming toward them — biting them and even pulling them underwater.',
      },
    ],
  },

  neverDo: [
    {
      title: 'Never Let Your Dog Swim Toward Otters',
      icon: 'DogIcon',
      description: 'Otters defend themselves as a group in the water, where a dog is at a big disadvantage. Call your dog back immediately.',
    },
    {
      title: 'Never Approach A Den Or Pups',
      icon: 'DoorOpen',
      description: 'Mothers with young are the most likely to attack. If you see pups, back away and give the family space.',
    },
    {
      title: 'Never Swim Toward Otters',
      icon: 'XCircle',
      description: 'People swimming near otter families have been bitten. Get out of the water and let them pass.',
    },
    {
      title: 'Never Feed Otters',
      icon: 'Fish',
      description: 'Fed otters hang around docks and beaches, lose their fear of people and dogs, and are more likely to bite.',
    },
    {
      title: 'Never Leave Fish Or Bait Lying Around',
      icon: 'Trash2',
      description: 'Fish cleaning scraps and bait draw otters to docks, boats, and campsites.',
    },
  ],

  alwaysDo: [
    {
      title: 'Keep Dogs On A Leash',
      icon: 'DogIcon',
      description: 'Near rivers, lakes, and seashores where otters live, keep dogs leashed and practise a solid recall.',
    },
    {
      title: 'Watch From The Shore',
      icon: 'Eye',
      description: 'Use binoculars and stay at least 30 metres away. Otters are most active early and late in the day.',
    },
    {
      title: 'Look For Signs',
      icon: 'Footprints',
      description: 'Slides in snow or mud, tracks, and piles of fish scales on rocks or docks show otters use the area.',
    },
    {
      title: 'Leave The Water If Otters Approach',
      icon: 'ArrowDown',
      description: 'If otters swim toward you while you are swimming or paddling, calmly move away and get out of the water.',
    },
    {
      title: 'Report Aggressive Otters',
      icon: 'Phone',
      description: 'In BC, report aggressive wildlife to the Conservation Officer RAPP line at 1-877-952-7277. In parks, tell park staff.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wildlife in Canadian national parks is illegal. Otters that link people with fish hang around docks and beaches — and that is when dogs and swimmers get bitten.',
    items: [
      { name: 'Fish Or Fish Scraps', icon: '/icons/wildlife/🐟.png', description: 'The fastest way to make an otter bold' },
      { name: 'Bait', icon: '🎣', description: 'Store bait securely on docks and boats' },
      { name: 'Meat Of Any Kind', icon: '/icons/wildlife/🥩.png', description: 'Draws otters to campsites' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Not food for a carnivore' },
      { name: 'Candy And Sweets', icon: '/icons/wildlife/🍬.png', description: 'Harmful and attracts wildlife' },
      { name: 'Pet Food', icon: '🐾', description: 'Don’t leave it on decks near water' },
      { name: 'Fishing Line And Hooks', icon: '🪝', description: 'Discarded gear injures otters' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Pack out everything you bring in' },
    ],
  },

  parksSectionTag: 'Where To See',
  parksSectionHeading: { lead: 'Where To See', highlight: 'River Otters' },
  spotParks: [
    { name: 'Pacific Rim National Park Reserve', province: 'British Columbia', season: 'Year-round — rocky shores and estuaries', level: 'safe' },
    { name: 'Greater Victoria Waterfront', province: 'British Columbia', season: 'Year-round — keep dogs leashed', level: 'caution' },
    { name: 'Kejimkujik National Park', province: 'Nova Scotia', season: 'Rivers and lakes — dawn and dusk', level: 'safe' },
    { name: 'Quidi Vidi Lake', province: 'Newfoundland', season: 'Winter — otters fishing at the ice edge', level: 'safe' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Leash Your Dog',
      description:
        'The moment you see otters, put your dog on a short leash and keep it out of the water.',
    },
    {
      title: 'Give Them Space',
      description:
        'Stay at least 30 metres away. If there are pups, back off even farther.',
    },
    {
      title: 'Get Out Of The Water',
      description:
        'If you are swimming or paddling and otters come toward you, calmly move away and leave the water.',
    },
    {
      title: 'If Attacked — Protect Yourself And Report',
      description:
        'Get to shore, protect your face and hands, and seek medical care for any bite. Report the incident to wildlife officers.',
    },
  ],

  gallery: [
    { src: '/wildlife/River Otter/otter-quidividi.jpg', credit: 'Jeremy T. Hetzel · CC BY 2.0 · Quidi Vidi Lake, Newfoundland' },
    { src: '/wildlife/River Otter/otter-slide.jpg', credit: 'Cephas · CC BY-SA 3.0 · Otter slide, Ripon, Quebec' },
    { src: '/wildlife/River Otter/otter-ice.jpg', credit: 'Tom Koerner / USFWS · Public domain · Wyoming' },
  ],
};

export default RIVER_OTTER;
