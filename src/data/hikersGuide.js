// Hiker's Guide — данные страницы /hikers-guide

export const GUIDE_STATS = [
  { value: '48', label: 'National Parks' },
  { value: '10K+', label: 'km of Trails' },
  { value: '4', label: 'Seasons to Prepare' },
];

export const NAV_TAGS = [
  { id: 'day-hike', label: 'Day Hike' },
  { id: 'multi-day', label: 'Multi-Day' },
  { id: 'what-to-wear', label: 'What To Wear' },
  { id: 'essentials', label: '10 Essentials' },
  { id: 'safety-rules', label: 'Safety Tips' },
];

export const PACK_LISTS = {
  dayHike: {
    title: 'Day Hike',
    subtitle: 'Perfect for a few hours — up to a full day',
    items: [
      'Bear Spray',
      'Water — 2L Minimum',
      'Trail Map + Compass',
      'First Aid Kit',
      'Headlamp + Extra Batteries',
      'Food + Extra Snacks',
      'Rain Jacket',
      'Sunscreen + Sunglasses',
      'Bug Spray / DEET',
      'Fully Charged Phone',
      'Bear Bell',
      'Daypack 20–35L',
    ],
  },
  multiDay: {
    title: 'Multi-Day Hike',
    subtitle: 'Overnight backcountry trips',
    items: [
      'Bear Spray',
      'Tent + Sleeping Bag / Pad',
      'Water Filter / Purification Tablets',
      'Bear Canister For Food',
      'Satellite Communicator (SPOT/Garmin)',
      'Topographic Map + Compass + GPS',
      'Camp Stove + Fuel + Cookware',
      'Comprehensive First Aid Kit',
      'Headlamp + Backup Light',
      'Full Clothing Layers System',
      'Solar Charger / Power Bank',
      'Trowel + Waste Bags (Leave No Trace)',
    ],
  },
};

export const BACKPACK_SIZES = [
  { size: '10–20L', name: 'Hydration Pack', desc: 'Short walks under 2 hours' },
  { size: '20–35L', name: 'Day Pack', desc: 'Full-day hike or 2 hikes' },
  { size: '40–55L', name: 'Weekend Pack', desc: '1–3 nights out' },
  { size: '60–80L', name: 'Expedition Pack', desc: '4+ nights backcountry' },
];

export const CLOTHING_LAYERS = [
  {
    layer: 'Layer 1 — Base Layer',
    title: 'Moisture Wicking Base',
    desc: 'The layer closest to your skin. Moves sweat away from your body to keep you dry. Never cotton — use merino wool or synthetics.',
    items: ['Merino wool or synthetic t-shirt', 'Synthetic underwear', 'Moisture-wicking socks', 'Compression tights (optional — cold weather)'],
  },
  {
    layer: 'Layer 2 — Mid Layer',
    title: 'Insulation Layer',
    desc: 'Traps warm air close to your body. You can remove this layer when you get hot, and put it back on when you stop moving.',
    items: ['Fleece jacket or pullover', 'Down or synthetic insulated jacket', 'Wool sweater', 'Vest (extra core warmth without bulk)'],
  },
  {
    layer: 'Layer 3 — Outer Shell',
    title: 'Weather Protection',
    desc: 'Blocks wind and rain. Should be waterproof and breathable. Mountain weather in Canada can change in minutes.',
    items: ['Waterproof / windproof jacket (Gore-Tex)', 'Waterproof pants', 'Wide-brimmed or brimmed hat for sun', 'Pack cover for your backpack'],
  },
];

export const FOOTWEAR = {
  title: 'Hiking Boots and Socks',
  items: [
    'Broken-in, waterproof hiking boots',
    'Ankle support for uneven terrain',
    'Wool or synthetic hiking socks — never cotton',
    'Spare socks in your pack',
    'Gaiters for mud, snow, or scree',
  ],
};

export const HEAD_HANDS = {
  title: 'Head, Neck, Hands',
  items: [
    'Sun hat and/or knit toque for cold',
    'Neck gaiter or buff — sun and warmth',
    'Lightweight gloves for cool mornings',
    'Insulated waterproof gloves in winter',
    'UV-protective sunglasses',
  ],
};

export const NEVER_WEAR = [
  'Cotton t-shirts or hoodies — stays wet, causes hypothermia',
  'Brand-new, unbroken-in boots',
  'Jeans on any backcountry trail',
  'Open sandals off maintained paths',
  'Dark colours alone in bear country — stay visible',
];

export const SEASON_PACKS = {
  summer: {
    label: 'Summer',
    months: 'June – August',
    items: ['Light breathable layers', 'Sun hat + SPF 30+', 'Extra water — heat + altitude', 'Bug spray / DEET', 'Lightweight rain shell'],
  },
  fall: {
    label: 'Fall',
    months: 'September – October',
    items: ['Insulated mid layer', 'Waterproof shell', 'Warm hat + gloves', 'Headlamp — shorter days', 'Traction device for early frost'],
  },
  winter: {
    label: 'Winter',
    months: 'November – March',
    items: ['Full insulated layering system', 'Insulated waterproof boots', 'Snowshoes or microspikes', 'Avalanche gear if backcountry', 'Emergency bivy / space blanket'],
  },
  spring: {
    label: 'Spring',
    months: 'April – May',
    items: ['Waterproof boots — mud season', 'Layered clothing for swings', 'Trekking poles for slippery trails', 'Bear spray — bears wake up hungry', 'Extra socks — wet trail conditions'],
  },
};

export const TEN_ESSENTIALS = [
  { title: 'Navigation', desc: 'Topographic map + compass or GPS. Know how to use them before you go.' },
  { title: 'Sun Protection', desc: 'Sunscreen SPF 30+, sunglasses, and a hat. UV exposure is higher at altitude.' },
  { title: 'Insulation', desc: 'Extra layers beyond what the forecast suggests. Weather changes fast in the backcountry.' },
  { title: 'Illumination', desc: 'Headlamp with extra batteries — never plan around your phone flashlight alone.' },
  { title: 'First Aid Kit', desc: 'Blister treatment, bandages, medication, personal medications, and emergency contacts.' },
  { title: 'Fire Starter', desc: 'Waterproof matches, lighter, and tinder. Practice starting a fire before you need one.' },
  { title: 'Repair Tools & Knife', desc: 'Multi-tool or knife, duct tape, cord, and gear repair kit.' },
  { title: 'Nutrition', desc: 'Extra food beyond planned meals — high-calorie, non-perishable snacks.' },
  { title: 'Hydration', desc: 'Extra water or a filter/purification method. Dehydration is the #1 hiker mistake.' },
  { title: 'Emergency Shelter', desc: 'Emergency bivy or space blanket. Even for short day hikes, plan for an unplanned night out.' },
  { title: 'Bear Spray', desc: 'Canada-specific, properly rated. Holstered where you can reach it in under 2 seconds.' },
  { title: 'Communication', desc: 'Satellite communicator where cell service is not guaranteed — most Canadian backcountry.' },
];

export const GOLDEN_RULES = [
  { title: 'Always Tell Someone Your Plan', desc: 'Before every hike — tell a trusted contact your route and expected return time. Leave a copy at the trailhead register if available.' },
  { title: 'Never Hike Alone In Bear Country', desc: 'Solo hikers are far more vulnerable. Always hike in groups of 3 or more where possible — bears avoid noisy, larger groups.' },
  { title: 'Check The Weather Before Every Hike', desc: 'Mountain weather in Canada can change rapidly and without warning. Check the forecast right before you leave — not the night before.' },
  { title: 'Know When To Turn Back', desc: 'Most accidents happen when pushing past your turnaround time. If the weather, daylight, or your energy turns — turn back.' },
  { title: 'Drink Water Before You\'re Thirsty', desc: 'By the time you feel thirsty, you\'re already dehydrated. Drink small amounts often throughout the hike, not just at breaks.' },
  { title: 'Never Rely Only On Your Phone', desc: 'Phone batteries die, screens crack, and signal disappears fast in the backcountry. Always carry a paper map and compass as backup.' },
  { title: 'Leave No Trace', desc: 'Pack out everything you pack in. Stay on marked trails. Never pick plants or disturb wildlife. Camp only in designated areas.' },
  { title: 'Respect River Crossings', desc: 'Glacial rivers are colder and stronger than they look. Never cross alone, unbuckle your backpack straps, and use trekking poles for stability.' },
];

export const EMERGENCIES = [
  {
    title: 'Emergency In A National Park',
    tag: 'SOS',
    action: '1-877-852-3100',
    desc: 'Call Parks Canada Dispatch immediately. If no cell service, activate your satellite communicator SOS. Give your exact location and describe the emergency.',
  },
  {
    title: 'If You Get Lost',
    tag: 'STAY PUT',
    action: '3 Whistle Blasts',
    desc: 'STOP. Stay, Think, Observe, Plan. Do not wander further. Stay where you are — it\'s far easier for search teams to find a stationary person. Signal with 3 whistle blasts, repeated.',
  },
  {
    title: 'Bear Encounter',
    tag: "DON'T RUN",
    action: 'Stay Calm, Back Away',
    desc: 'Do not run. Stand your ground, speak firmly, back away slowly. If it charges, use bear spray at close range. Read our full Bear Safety Guide for step-by-step actions.',
  },
];
