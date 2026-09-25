// Gray Wolf — данные страницы /wildlife/gray-wolf

export const GRAY_WOLF = {
  slug: 'gray-wolf',
  name: 'Gray Wolf',
  // "Gray Wolf".split(' ')[0] дало бы "Gray" в заголовках вида
  // "Never Feed A {shortName}" — нужно последнее слово.
  shortName: 'Wolf',
  shortNamePlural: 'Wolves',
  tag: 'Caution — Wild Animal',
  level: 'caution',
  image: '/wildlife/grey-wolf.jpg',
  heroVideo: '/wildlife/Gray Wolf/16871503-uhd_3840_2160_30fps.mp4',
  distanceIcon: '/icons/wildlife/wolf.svg',
  quickFactsAccent: { text: '#488CDC', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)', rgb: '72, 140, 220' },
  parksTagAccent: '#8AAFCA',
  description:
    'Canada\'s most iconic predator — the gray wolf is a highly intelligent, social animal that lives and hunts in packs. Rarely aggressive toward humans, but must always be respected as a wild apex predator.',

  actions: [
    { label: 'Where To See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '30-80 KG' },
    { label: 'Height', value: '0.6-0.9 M' },
    { label: 'Speed', value: '56-64 Km/H' },
    { label: 'Pack Size', value: '5-10 Wolves' },
    { label: 'Population In Canada', value: '~60,000' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: 'Min. Distance: 100m — Never approach or feed, especially with pups nearby.',

  behaviorSection: {
    tag: 'Pack Behavior',
    title: 'Understanding',
    highlight: 'Wolf Packs',
    accent: '#7fb3d5',
    cards: [
      {
        title: 'Alpha Pair',
        image: '/wildlife/Gray Wolf/Icons/241b7385-e4f4-48a8-b77c-3bd6e2736143 1.svg',
        description:
          'Every pack is led by an alpha male and female — the only pair that breeds. If you see a lone wolf, there are likely more nearby — never assume you are seeing the whole pack.',
      },
      {
        title: 'Hunting Hours',
        image: '/wildlife/Gray Wolf/Icons/cfdce9c9-c037-4771-aa13-ba8bc3119a49 1.svg',
        description:
          'Wolves are most active at dawn, dusk, and night. They can travel up to 70 km per day while hunting. Be extra cautious in these hours, especially near livestock or campsites.',
      },
      {
        title: 'Howling',
        image: '/wildlife/Gray Wolf/Icons/1ae6de0c-17f5-43d3-85a7-867de650b98b 1.svg',
        description:
          'Howling lets packs communicate over long distances, rally members, and mark territory. It is not a sign of aggression or an imminent attack — do not howl back.',
      },
    ],
  },

  distanceZones: [
    {
      range: '0-50M',
      label: 'Extreme Danger',
      description: 'Pack may perceive you as a threat or prey. Back away immediately. Never run.',
      level: 'danger',
    },
    {
      range: '50-100M',
      label: 'Caution Zone',
      description: 'Below legal distance. Make yourself appear large. Back away slowly.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Safe Observation',
      description: 'Legal minimum in national parks. Observe quietly. Never approach further.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Run From A Wolf',
      icon: 'RunningFigure',
      description: 'Running triggers a chase instinct. Wolves can reach speeds up to 64 km/h — you cannot outrun them.',
    },
    {
      title: 'Never Hike Alone At Night',
      icon: 'NightIcon',
      description: 'Wolves are most active after dark. Solo hikers are more vulnerable. Always hike in groups of 3 or more.',
    },
    {
      title: 'Never Let Pets Roam Freely',
      icon: 'DogIcon',
      description: 'Wolves may view dogs as rivals or prey. Keep pets on a leash at all times in wolf territory.',
    },
    {
      title: 'Never Approach Pups Or A Den',
      icon: 'Skull',
      description: 'A wolf protecting pups is extremely dangerous. If you see pups, the pack is very close. Leave immediately.',
    },
    {
      title: 'Never Leave Food Unsecured',
      icon: 'TrashIcon',
      description: 'Food attracts wolves to campsites. Always use bear-proof canisters. Cook and eat away from your tent.',
    },
  ],

  alwaysDo: [
    {
      title: 'Stand Tall — Make Yourself Large',
      icon: 'PawPrint',
      description: 'Raise your arms, open your jacket, stand on a log. Wolves are less likely to approach a large-looking human.',
    },
    {
      title: 'Make Noise — Speak Firmly',
      icon: 'MegaphoneIcon',
      description: 'Shout in a deep, assertive voice. Bang sticks together. Make it clear you are human and not prey.',
    },
    {
      title: 'Hike In Groups',
      icon: 'UsersThreeIcon',
      description: 'Wolves rarely approach groups of 3 or more people. Stay close together and do not split up.',
    },
    {
      title: 'Maintain Eye Contact',
      icon: 'EyeContactIcon',
      description: 'Unlike bears, calm eye contact with a wolf shows dominance. Do not look away or turn your back.',
    },
    {
      title: 'Back Away Slowly Facing The Wolf',
      icon: 'DoorOpen',
      description: 'Never turn your back. Move sideways and backwards, keeping the wolf in sight until it is out of range.',
    },
  ],

  neverFeed: {
    warning:
      'Feeding any wildlife in Canadian national parks is illegal — fines up to $25,000. A fed wolf is a dead wolf: wolves that associate humans with food must be euthanized.',
    items: [
      { name: 'Meat Of Any Kind', icon: '/wildlife/Gray Wolf/🥩.png', description: 'Directly encourages predatory behaviour toward humans' },
      { name: 'Fish', icon: '/wildlife/Gray Wolf/🐟.png', description: 'Strong scent attracts entire pack to campsites' },
      { name: 'Bones And Scraps', icon: '/wildlife/Gray Wolf/🍖.png', description: 'Even scraps teach wolves that humans mean an easy meal' },
      { name: 'Pet Food', icon: '/wildlife/Gray Wolf/🐾.png', description: 'Strong scent left outdoors draws wolves close to homes' },
      { name: 'Bread And Grains', icon: '/wildlife/Gray Wolf/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Dairy Products', icon: '/wildlife/Gray Wolf/🧀.png', description: 'Strong scent draws wolves from great distances' },
      { name: 'Candy And Snacks', icon: '/wildlife/Gray Wolf/🍬.png', description: 'Wolves investigate any wrapper or scent near a camp' },
      { name: 'Any Garbage', icon: '/wildlife/Gray Wolf/🗑️.png', description: 'Never leave waste — store all food in canisters' },
    ],
  },

  spotParks: [
    { name: 'Banff National Park', province: 'Alberta', season: 'Moderate chance · Rare sightings' },
    { name: 'Jasper National Park', province: 'Alberta', season: 'High chance · Dawn/Dusk' },
    { name: 'Kootenay National Park', province: 'British Columbia', season: 'Moderate · Forest trails' },
    { name: 'Kluane National Park', province: 'Yukon', season: 'High chance · Lakes/Rivers' },
  ],

  encounterSteps: [
    {
      title: 'Stay Calm — Do Not Run',
      description:
        'Stop and assess the situation. In most cases, the wolf will leave on its own if you stay calm and do not make sudden movements. Running will trigger a chase.',
    },
    {
      title: 'Make Yourself Large And Loud',
      description:
        'Stand tall, raise your arms, open your jacket. Shout firmly in a deep voice — "Go away! Back off!" Bring hiking poles together. Maintain eye contact. This usually causes the wolf to retreat.',
    },
    {
      title: 'Back Away Slowly — Never Turn Your Back',
      description:
        'Face the wolf at all times. Move backward slowly. Keep your group together — form a tight cluster. If with children, place them in the centre of the group and lift small children off the ground immediately.',
    },
    {
      title: 'If The Wolf Charges — Fight Back Aggressively',
      description:
        'Wolf attacks on humans are extremely rare, but if contact occurs — fight back. Do not play dead. Use any object as a weapon — trekking poles, rocks, sticks. Aim for the nose and eyes. Wolves are deterred by aggressive resistance.',
    },
  ],

  gallery: [
    '/wildlife/Gray Wolf/image 112.png',
    '/wildlife/Gray Wolf/image 114.png',
    '/wildlife/Gray Wolf/image 115.png',
  ],
};

export default GRAY_WOLF;
