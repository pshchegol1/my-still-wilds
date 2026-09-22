// Grizzly Bear — данные страницы /wildlife/grizzly-bear

export const GRIZZLY_BEAR = {
  slug: 'grizzly-bear',
  name: 'Grizzly Bear',
  tag: 'Dangerous Animal',
  level: 'danger',
  image: '/wildlife/grizzly-bear.jpg',
  heroVideo: '/wildlife/grizzly-bear-hero.mp4',
  description:
    'One of North America\'s most powerful predators. The grizzly bear is an iconic symbol of Canada\'s wilderness — magnificent, unpredictable, and worthy of the deepest respect.',

  actions: [
    { label: 'Where To Stay', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '180-360 KG' },
    { label: 'Height', value: '1.5-2.5 M' },
    { label: 'Speed', value: '56 Km/H' },
    { label: 'Lifespan', value: '20-25 Years' },
    { label: 'Population In Canada', value: '~26,000' },
    { label: 'Status', value: 'Special Concern' },
  ],

  minDistanceWarning: 'Min. Distance: 100 Metres — Never approach. Carry bear spray at all times.',

  distanceZones: [
    {
      range: '0-50M',
      label: 'Extreme Danger',
      description: 'Bear will likely charge. Use bear spray immediately. Do not run.',
      level: 'danger',
    },
    {
      range: '50-100M',
      label: 'Danger Zone',
      description: 'Below legal limit. Back away slowly. Have bear spray ready.',
      level: 'caution',
    },
    {
      range: '100M+',
      label: 'Minimum Safe Distance',
      description: 'Legal minimum in national parks. Stay calm, observe quietly.',
      level: 'safe',
    },
  ],

  // icon — имя компонента lucide-react (см. RULE_ICONS в AnimalPage.jsx).
  neverDo: [
    {
      title: 'Never Run Away',
      icon: 'RunningFigure',
      description: 'Running triggers the bear\'s chase instinct. A grizzly can outrun a horse over short distances.',
    },
    {
      title: 'Never Approach For A Photo',
      icon: 'Camera',
      description: 'Getting closer than 100m is illegal in national parks and extremely dangerous.',
    },
    {
      title: 'Never Hike Alone At Dawn/Dusk',
      icon: 'Moon',
      description: 'Grizzlies are most active at dawn and dusk. Always hike in groups of 3 or more.',
    },
    {
      title: 'Never Play Dead With A Predatory Bear',
      icon: 'Skull',
      description: 'Play dead only during a surprise attack. Fight back if a bear enters your tent at night.',
    },
    {
      title: 'Never Leave Food Or Garbage Unsecured',
      icon: 'Trash2',
      description: 'Bears associate humans with food. Always use bear-proof canisters or hang food 4m high.',
    },
  ],

  alwaysDo: [
    {
      title: 'Make Noise On Trails',
      icon: 'Volume2',
      description: 'Talk, clap, or use a bear bell. Most encounters happen because bears are surprised. Give them warning.',
    },
    {
      title: 'Carry Bear Spray — Accessible',
      icon: 'SprayCan',
      description: 'Keep it on your hip, not in your pack. Practice drawing it before you hike. It works 92% of the time.',
    },
    {
      title: 'Hike In Groups Of 3 Or More',
      icon: 'Users',
      description: 'Large groups are rarely attacked. Larger groups make more noise and appear less vulnerable.',
    },
    {
      title: 'Stay Calm And Speak Quietly',
      icon: 'EyeOff',
      description: 'If you see a bear, stay calm. Never make direct eye contact — it\'s a sign of aggression.',
    },
    {
      title: 'Back Away Slowly — Never Corner',
      icon: 'DoorOpen',
      description: 'Give the bear an escape route. Never corner an animal — it will feel forced to defend itself.',
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
    { name: 'Jasper National Park', province: 'Alberta', season: 'High chance · Dawn & Dusk' },
    { name: 'Yoho National Park', province: 'British Columbia', season: 'Moderate · Summer' },
    { name: 'Kluane National Park', province: 'Yukon', season: 'High chance · Remote trails' },
  ],

  bearSprayNote:
    'Bear spray is the most effective deterrent against grizzly attacks — more effective than firearms. It must be accessible on your hip, not in your pack. Effective range: 7-9 metres. Always check the expiry date.',

  encounterSteps: [
    {
      title: 'Stay Calm — Do Not Run',
      description:
        'Stop moving. Speak in a calm, low voice. Let the bear know you are human. Avoid direct eye contact — bears see this as a challenge. Running triggers a chase instinct: a grizzly can reach 56 km/h.',
    },
    {
      title: 'Identify Yourself — Wave Arms Slowly',
      description:
        'Raise your arms slowly to appear larger. Talk quietly — "Hey bear, I\'m just passing through." Give the bear space to leave. Move sideways and slightly backward — never directly toward or away.',
    },
    {
      title: 'If The Bear Charges — Deploy Bear Spray',
      description:
        'Wait until the bear is within 7-9 metres. Aim slightly downward. Spray in a sweeping motion across the bear\'s face. The cloud creates a barrier. Most charges are bluffs — the bear may stop and leave.',
    },
    {
      title: 'If Contact Occurs — Play Dead (Surprise Attack)',
      description:
        'For surprise attacks: fall face down, clasp hands over neck, spread legs to make it harder to flip you. Stay still until the bear leaves. For predatory attacks (bear stalking you at night) — fight back aggressively.',
    },
  ],

  gallery: [
    '/wildlife/grizzly-bear.jpg',
    '/wildlife/grizzly-bear.jpg',
    '/wildlife/grizzly-bear.jpg',
  ],
};

export default GRIZZLY_BEAR;
