// Black Bear — данные страницы /wildlife/black-bear

export const BLACK_BEAR = {
  slug: 'black-bear',
  name: 'Black Bear',
  shortName: 'Bear',
  tag: 'Dangerous Animal',
  level: 'danger',
  image: '/wildlife/Black Bear/Rectangle 205.png',
  heroVideo: '/wildlife/Black Bear/14832707 3840 2160 25Fps.mp4',
  distanceIcon: '/wildlife/Black Bear/e0670bd0-ca79-4802-8974-a4eb6f956768 1.png',
  description:
    'The most common bear in Canada — found in every province and territory. Despite being smaller than the grizzly, the black bear is still a powerful predator that demands deep respect and careful behaviour.',

  actions: [
    { label: 'Where To See', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '57-270 KG' },
    { label: 'Height', value: '0.7-1.0 M' },
    { label: 'Speed', value: '55 Km/H' },
    { label: 'Lifespan', value: '18-25 Years' },
    { label: 'Population In Canada', value: '~500,000' },
    { label: 'Status', value: 'Least Concern' },
  ],

  minDistanceWarning: 'Min. Distance: 100 Metres — Never approach. Carry bear spray. Especially near cubs.',

  comparisonSection: {
    tag: 'Compare Bear Species',
    title: 'Know The ',
    highlight: 'Difference',
    suffix: ' — It Could Save Your Life',
    warning:
      'You react differently to each bear. Play dead for a surprise grizzly attack. Fight back against a black bear attack. Misidentifying the bear can be fatal.',
    left: {
      name: 'Black Bear',
      accent: '#488CDC',
      image: '/wildlife/Black Bear/e0670bd0-ca79-4802-8974-a4eb6f956768 1.png',
      rows: [
        { label: 'Shoulder hump', value: 'No hump' },
        { label: 'Face profile', value: 'Straight nose' },
        { label: 'Ears', value: 'Tall and rounded' },
        { label: 'Front claws', value: 'Short – 4cm' },
        { label: 'Tracks', value: 'Curved rear feet' },
        { label: 'Colour', value: 'Black, brown, cinnamon' },
      ],
      action: 'Fight Back',
      actionLevel: 'danger',
    },
    right: {
      name: 'Grizzly Bear',
      image: '/wildlife/Black Bear/Дизайн без названия (7) 1.png',
      rows: [
        { label: 'Shoulder hump', value: 'Prominent hump' },
        { label: 'Face profile', value: 'Dished / concave' },
        { label: 'Ears', value: 'Short and rounded' },
        { label: 'Front claws', value: 'Long – 10cm' },
        { label: 'Tracks', value: 'Straighter toe line' },
        { label: 'Colour', value: 'Brown with grizzled tips' },
      ],
      action: 'Play Dead',
      actionLevel: 'caution',
    },
  },

  distanceZones: [
    {
      range: '0-50M',
      label: 'Extreme Danger',
      description: 'Bear may charge, especially with cubs nearby. Back away immediately. Never run.',
      level: 'danger',
    },
    {
      range: '50-100M',
      label: 'Caution Zone',
      description: 'Below legal limit. Bear rarely attacks unless surprised. Move away slowly.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Safe Distance',
      description: 'Legal minimum in national parks. Observe quietly, never approach further.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Run From A Bear',
      icon: 'RunningFigure',
      description: 'Running triggers a chase instinct. Black bears can reach speeds up to 55 km/h — faster than any human.',
    },
    {
      title: 'Never Hike Alone At Dawn/Dusk',
      icon: 'Moon',
      description: 'Black bears are most active at dawn and dusk. Always hike in groups of 3 or more.',
    },
    {
      title: 'Never Get Between A Mother And Cubs',
      icon: 'Skull',
      description: 'A mother bear protecting cubs is extremely dangerous. If you see cubs, the mother is very close — leave immediately.',
    },
    {
      title: 'Never Play Dead With A Black Bear',
      icon: 'PawPrint',
      description: 'Unlike grizzlies, playing dead with a black bear signals easy prey. Always fight back aggressively.',
    },
    {
      title: 'Never Leave Food Unsecured',
      icon: 'Trash2',
      description: 'Black bears have an exceptional sense of smell — they can detect food from 30km away.',
    },
  ],

  alwaysDo: [
    {
      title: 'Stand Tall And Make Yourself Large',
      icon: 'DoorOpen',
      description: 'Raise your arms, open your jacket, stand on a log. Black bears are less likely to approach a large-looking human.',
    },
    {
      title: 'Make Noise On Trails',
      icon: 'Volume2',
      description: 'Talk, clap, or use a bear bell. Most encounters happen because bears are surprised.',
    },
    {
      title: 'Hike In Groups Of 3 Or More',
      icon: 'Users',
      description: 'Black bears are naturally cautious and will avoid larger groups of people making noise.',
    },
    {
      title: 'Carry Bear Spray — On Your Hip',
      icon: 'SprayCan',
      description: 'Keep it accessible at all times. Practice drawing it before you hike — it works against black bears too.',
    },
    {
      title: 'Fight Back If Attacked',
      icon: 'XCircle',
      description: 'Black bear attacks are usually predatory. Fight back with everything — fists, rocks, sticks. Aim for the nose and eyes.',
    },
  ],

  neverFeed: {
    warning:
      'Feeding any wildlife in Canadian national parks is illegal — fines up to $25,000. A fed bear is a dead bear: bears that associate humans with food must be euthanized.',
    items: [
      { name: 'Meat & Fish', icon: '/icons/wildlife/🥩.png', description: 'Encourages predatory behaviour toward humans' },
      { name: 'Fruit & Berries', icon: '/icons/wildlife/🍎.png', description: 'Bears learn to approach campsites for easy food' },
      { name: 'Bread & Grains', icon: '/icons/wildlife/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Candy & Sweets', icon: '/icons/wildlife/🍬.png', description: 'Bears can smell sugar from 20km away' },
      { name: 'Processed Fish', icon: '/icons/wildlife/🐟.png', description: 'Associates humans with easy protein sources' },
      { name: 'Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Even "natural" foods from humans are dangerous' },
      { name: 'Dairy Products', icon: '/icons/wildlife/🥛.png', description: 'Strong scent attracts bears from great distances' },
      { name: 'Any Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Never leave any food waste accessible near camps' },
    ],
  },

  spotParks: [
    { name: 'Banff National Park', province: 'Alberta', season: 'High chance · Spring & Fall' },
    { name: 'Pacific Rim National Park', province: 'British Columbia', season: 'Very high · Coastal trails' },
    { name: 'Cape Breton Highlands', province: 'Nova Scotia', season: 'Moderate · Forest trails' },
    { name: 'Algonquin Provincial Park', province: 'Ontario', season: 'Very common · Widespread' },
  ],

  bearSprayNote:
    'Bear spray is effective against black bear attacks too — more effective than firearms. It must be accessible on your hip, not in your pack. Effective range: 7-9 metres. Always check the expiry date.',

  encounterSteps: [
    {
      title: 'Stay Calm — Do Not Run',
      description:
        'Stop and assess the situation calmly. If the bear hasn\'t noticed you, back away quietly. Running will trigger a chase instinct.',
    },
    {
      title: 'Make Yourself Large And Loud',
      description:
        'Stand tall, raise your arms, open your jacket. Speak firmly in a low voice. Black bears are naturally cautious and usually retreat when confronted confidently.',
    },
    {
      title: 'If The Bear Charges — Deploy Bear Spray',
      description:
        'Wait until the bear is within 7-9 metres. Spray in a sweeping motion across its face. Most charges from black bears are bluffs meant to test you.',
    },
    {
      title: 'If Contact Occurs — Fight Back',
      description:
        'This is the critical difference from grizzly bears — do NOT play dead. Fight back aggressively with everything you have. Use rocks, sticks, trekking poles. Aim for the nose and eyes — the bear will usually flee.',
    },
  ],

  gallery: [
    '/wildlife/Black Bear/Rectangle 205.png',
    '/wildlife/Black Bear/Rectangle 206.png',
    '/wildlife/Black Bear/Rectangle 207.png',
  ],
};

export default BLACK_BEAR;
