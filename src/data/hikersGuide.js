// Hiker's Guide — данные страницы /hikers-guide

export const GUIDE_STATS = [
  { value: '48', label: 'National Parks' },
  { value: '10K+', label: 'km of Trails' },
  { value: '4', label: 'Seasons to Prepare' },
];

export const NAV_TAGS = [
  { id: 'day-hike', label: 'Day Hike', icon: '/icons/hike/si_sun-line.svg' },
  { id: 'multi-day', label: 'Multi-Day', icon: '/icons/hike/ph_tent-light.svg' },
  { id: 'what-to-wear', label: 'What To Wear', icon: '/icons/hike/iconoir_shirt.svg' },
  { id: 'essentials', label: '10 Essentials', icon: '/icons/hike/ph_first-aid-kit-light.svg' },
  { id: 'safety-rules', label: 'Safety Tips', icon: '/icons/hike/tdesign_secured.svg' },
];

// icon — файл из /icons/hike. Там, где картинки нет (Fully Charged
// Phone), поле опущено и карточка рисует галочку вместо снимка.
export const PACK_LISTS = {
  dayHike: {
    title: 'Day Hike',
    subtitle: 'Perfect for a few hours — up to a full day',
    icon: '/icons/hike/day-hike.png',
    items: [
      { label: 'Bear Spray', icon: '/icons/hike/bear-spray.png', priority: 'must' },
      { label: 'Water — 2L Minimum', icon: '/icons/hike/water-bottle.png', priority: 'must' },
      { label: 'Trail Map + Compass', icon: '/icons/hike/map-compass.png', priority: 'must' },
      { label: 'First Aid Kit', icon: '/icons/hike/first-aid-kit.png', priority: 'must' },
      { label: 'Headlamp + Extra Batteries', icon: '/icons/hike/headlamp.png', priority: 'must' },
      { label: 'Food + Extra Snacks', icon: '/icons/hike/snacks.png', priority: 'must' },
      { label: 'Rain Jacket', icon: '/icons/hike/rain-jacket.png', priority: 'must' },
      { label: 'Sunscreen + Sunglasses', icon: '/icons/hike/sunscreen-sunglasses.png', priority: 'recommended' },
      { label: 'Bug Spray / DEET', icon: '/icons/hike/bug-spray.png', priority: 'recommended' },
      { label: 'Fully Charged Phone', priority: 'recommended' },
      { label: 'Bear Bell', icon: '/icons/hike/bear-bell.png', priority: 'recommended' },
      { label: 'Daypack 20–35L', icon: '/icons/hike/backpack.png', priority: 'optional' },
    ],
  },
  multiDay: {
    title: 'Multi-Day Hike',
    subtitle: 'Overnight backcountry trips',
    icon: '/icons/hike/multi-day-hike.png',
    items: [
      { label: 'Bear Spray', icon: '/icons/hike/bear-spray.png', priority: 'must' },
      { label: 'Tent + Sleeping Bag / Pad', icon: '/icons/hike/tent-sleeping-bag.png', priority: 'must' },
      { label: 'Water Filter / Purification Tablets', icon: '/icons/hike/water-filter.png', priority: 'must' },
      { label: 'Bear Canister For Food', icon: '/icons/hike/bear-canister.png', priority: 'must' },
      { label: 'Satellite Communicator (SPOT/Garmin)', icon: '/icons/hike/satellite-communicator.png', priority: 'must' },
      { label: 'Topographic Map + Compass + GPS', icon: '/icons/hike/topo-map-gps.png', priority: 'must' },
      { label: 'Camp Stove + Fuel + Cookware', icon: '/icons/hike/camp-stove.png', priority: 'must' },
      { label: 'Comprehensive First Aid Kit', icon: '/icons/hike/first-aid-kit.png', priority: 'must' },
      { label: 'Headlamp + Backup Light', icon: '/icons/hike/headlamp.png', priority: 'must' },
      { label: 'Full Clothing Layers System', icon: '/icons/hike/clothing-layers.png', priority: 'must' },
      { label: 'Solar Charger / Power Bank', icon: '/icons/hike/solar-charger.png', priority: 'recommended' },
      { label: 'Trowel + Waste Bags (Leave No Trace)', icon: '/icons/hike/trowel-waste-bags.png', priority: 'recommended' },
    ],
  },
};

// accent — зеленый у однодневных размеров, желтый у многодневных.
export const BACKPACK_SIZES = [
  { size: '10–20L', name: 'Hydration Pack', desc: 'Short walks under 2 hours', accent: '#6ee7a1' },
  { size: '20–35L', name: 'Day Pack', desc: 'Full-day hike or 2 hikes', accent: '#6ee7a1' },
  { size: '40–55L', name: 'Weekend Pack', desc: '1–3 nights out', accent: '#F0B828' },
  { size: '60–80L', name: 'Expedition Pack', desc: '4+ nights backcountry', accent: '#F0B828' },
];

// Все шесть карточек секции "3-Layer Clothing System" устроены
// одинаково, поэтому лежат одним массивом: кикер-подпись, заголовок,
// картинка, описание, список и цвет акцента (точка, буллиты, рамка).
export const CLOTHING_CARDS = [
  {
    label: 'Layer 1 — Base Layer',
    title: 'Moisture Wicking Base',
    icon: '/icons/hike/layer-base.png',
    accent: '#6ee7a1',
    desc: 'The layer closest to your skin. Moves sweat away from your body to keep you dry. Never use cotton — it stays wet and makes you cold.',
    items: [
      'Merino wool t-shirt or long sleeve',
      'Synthetic (polyester) athletic shirt',
      'Moisture-wicking underwear',
      'Merino wool or synthetic socks',
      'Compression tights (optional — cold weather)',
    ],
  },
  {
    label: 'Layer 2 — Mid Layer',
    title: 'Insulation Layer',
    icon: '/icons/hike/layer-mid.png',
    accent: '#F0B828',
    desc: "Traps warm air close to your body. You can remove this layer when you heat up on the trail. Essential in Canada's variable mountain weather.",
    items: [
      'Fleece jacket or pullover',
      'Down or synthetic insulated jacket',
      'Fleece or softshell pants (cold weather)',
      'Light insulated vest (shoulder seasons)',
      'Wool mid-layer sweater (alternative)',
    ],
  },
  {
    label: 'Layer 3 — Outer Shell',
    title: 'Weather Protection',
    icon: '/icons/hike/layer-shell.png',
    accent: '#4a88cf',
    desc: 'Protects you from wind and rain. Should be waterproof and breathable. Mountain weather in Canada can change within minutes — always have this layer accessible.',
    items: [
      'Hardshell waterproof jacket (Gore-Tex)',
      'Waterproof rain pants',
      'Windbreaker (lighter option for summer)',
      'Pack cover for your backpack',
      'Gaiters (muddy or snowy trails)',
    ],
  },
  {
    label: 'Footwear',
    title: 'Hiking Boots And Socks',
    icon: '/icons/hike/footwear.png',
    accent: '#F0B828',
    desc: 'Your boots are your most important gear. Always break in new boots before a long hike. Wet feet cause blisters — waterproof boots are essential in Canada.',
    items: [
      'Waterproof hiking boots (ankle support)',
      'Trail runners (day hikes, dry trails)',
      'Merino wool hiking socks x2 pairs',
      'Blister prevention patches',
      'Camp shoes or sandals (overnight trips)',
    ],
  },
  {
    label: 'Head And Hands',
    title: 'Head · Neck · Hands',
    icon: '/icons/hike/head-hands.png',
    accent: '#ee8d54',
    desc: 'You lose 40% of body heat through your head. Always pack a warm hat even in summer — mountain temperatures drop fast in the afternoon and evening.',
    items: [
      'Sun hat or wide brim hat (summer)',
      'Warm wool or fleece beanie (always)',
      'Neck gaiter or balaclava (cold weather)',
      'Light liner gloves + waterproof mitts',
      'UV-protection sunglasses',
    ],
  },
  {
    label: 'Never Wear These',
    title: 'What NOT To Wear',
    icon: '/icons/hike/never-wear.png',
    accent: '#ee8d54',
    // Единственная карточка-предупреждение: рамка и текст списка красятся
    // акцентом, а не остаются серыми.
    danger: true,
    desc: 'These items can cause hypothermia, blisters, and dangerous situations on the trail. Avoid them regardless of conditions.',
    items: [
      'Cotton T-shirts or jeans — stays wet',
      'Sandals or flip-flops on trails',
      'Hoodies instead of proper layers',
      'New unworn boots on long hikes',
      'Bright scented perfume or cologne',
      'Dark colours in bear country at dawn',
    ],
  },
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

// icon — файл из /icons/hike (прозрачный PNG с отдельным предметом,
// как в списках Day Hike/Multi-Day). iconFallback — компонент
// lucide-react на случай, если для пункта картинки не найдётся.
export const TEN_ESSENTIALS = [
  { title: 'Navigation', icon: '/icons/hike/map-compass.png', iconFallback: 'Compass', desc: 'Topographic map + compass or GPS. Know how to use them before you go.' },
  { title: 'Sun Protection', icon: '/icons/hike/sunscreen-sunglasses.png', iconFallback: 'Sun', desc: 'Sunscreen SPF 30+, sunglasses, and a hat. UV exposure is higher at altitude.' },
  { title: 'Insulation', icon: '/icons/hike/clothing-layers.png', iconFallback: 'Layers2', desc: 'Extra layers beyond what the forecast suggests. Weather changes fast in the backcountry.' },
  { title: 'Illumination', icon: '/icons/hike/headlamp.png', iconFallback: 'Flashlight', desc: 'Headlamp with extra batteries — never plan around your phone flashlight alone.' },
  { title: 'First Aid Kit', icon: '/icons/hike/first-aid-kit.png', iconFallback: 'Stethoscope', desc: 'Blister treatment, bandages, medication, personal medications, and emergency contacts.' },
  { title: 'Fire Starter', icon: '/icons/hike/fire-starter.png', iconFallback: 'Flame', desc: 'Waterproof matches, lighter, and tinder. Practice starting a fire before you need one.' },
  { title: 'Repair Tools & Knife', icon: '/icons/hike/repair-tools-knife.png', iconFallback: 'Wrench', desc: 'Multi-tool or knife, duct tape, cord, and gear repair kit.' },
  { title: 'Nutrition', icon: '/icons/hike/snacks.png', iconFallback: 'Utensils', desc: 'Extra food beyond planned meals — high-calorie, non-perishable snacks.' },
  { title: 'Hydration', icon: '/icons/hike/water-bottle.png', iconFallback: 'Droplet', desc: 'Extra water or a filter/purification method. Dehydration is the #1 hiker mistake.' },
  { title: 'Emergency Shelter', icon: '/icons/hike/tent-sleeping-bag.png', iconFallback: 'Tent', desc: 'Emergency bivy or space blanket. Even for short day hikes, plan for an unplanned night out.' },
  { title: 'Bear Spray', icon: '/icons/hike/bear-spray.png', iconFallback: 'PawPrint', desc: 'Canada-specific, properly rated. Holstered where you can reach it in under 2 seconds.' },
  { title: 'Communication', icon: '/icons/hike/satellite-communicator.png', iconFallback: 'Radio', desc: 'Satellite communicator where cell service is not guaranteed — most Canadian backcountry.' },
];

// icon — файл из /icons/hike; iconFallback — компонент lucide-react
// (см. RULE_ICONS в HikersGuidePage.jsx) на случай, если картинки нет.
export const GOLDEN_RULES = [
  { title: 'Always Tell Someone Your Plan', icon: '/icons/hike/rule-tell-plan.png', iconFallback: 'MessageSquare', desc: 'Before every hike — tell a trusted contact your route and expected return time. Leave a copy at the trailhead register if available.' },
  { title: 'Never Hike Alone In Bear Country', icon: '/icons/hike/rule-not-alone.png', iconFallback: 'Users', desc: 'Solo hikers are far more vulnerable. Always hike in groups of 3 or more where possible — bears avoid noisy, larger groups.' },
  { title: 'Check The Weather Before Every Hike', icon: '/icons/hike/rule-weather.png', iconFallback: 'CloudSun', desc: 'Mountain weather in Canada can change rapidly and without warning. Check the forecast right before you leave — not the night before.' },
  { title: 'Know When To Turn Back', icon: '/icons/hike/rule-turn-back.png', iconFallback: 'Undo2', desc: 'Most accidents happen when pushing past your turnaround time. If the weather, daylight, or your energy turns — turn back.' },
  { title: 'Drink Water Before You\'re Thirsty', iconFallback: 'Droplet', desc: 'By the time you feel thirsty, you\'re already dehydrated. Drink small amounts often throughout the hike, not just at breaks.' },
  { title: 'Never Rely Only On Your Phone', iconFallback: 'Smartphone', desc: 'Phone batteries die, screens crack, and signal disappears fast in the backcountry. Always carry a paper map and compass as backup.' },
  { title: 'Leave No Trace', icon: '/icons/hike/rule-leave-no-trace.png', iconFallback: 'Recycle', desc: 'Pack out everything you pack in. Stay on marked trails. Never pick plants or disturb wildlife. Camp only in designated areas.' },
  { title: 'Respect River Crossings', icon: '/icons/hike/rule-river-crossing.png', iconFallback: 'Waves', desc: 'Glacial rivers are colder and stronger than they look. Never cross alone, unbuckle your backpack straps, and use trekking poles for stability.' },
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
