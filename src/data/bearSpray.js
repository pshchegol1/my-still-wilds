// Bear Spray — данные страницы /bear-spray

export const BEAR_SPRAY = {
  hero: {
    tag: 'Bear Spray Safety',
    title: 'Bear Spray',
    subtitle: 'How To Use · When To Use · What To Buy',
    description:
      'Bear spray is the most effective deterrent against bear attacks — more reliable than firearms. Every hiker in bear country should carry one and know how to use it before they need it.',
    specs: [
      { label: 'Effective Range', value: '7-9 Metres', icon: 'Target', color: 'danger' },
      { label: 'Spray Duration', value: '6-9 Seconds', icon: 'Timer', color: 'danger' },
      { label: 'Effectiveness', value: '92% Success Rate', icon: 'CheckCircle2', color: 'safe' },
      { label: 'Active Ingredient', value: 'Capsaicin 1-2%', icon: 'Thermometer', color: 'caution' },
      { label: 'Expiry', value: 'Check Before Storing', icon: 'Calendar', color: 'danger' },
      { label: 'Min. Can Size', value: '225g / 7.9 Oz', icon: 'Package', color: 'danger' },
    ],
  },

  effectivenessStats: [
    { value: '92%', label: 'Success Rate Of Bear Spray In Deterring Bear Attacks', color: 'safe' },
    { value: '0%', label: 'Deaths Recorded When Bear Spray Was Used Correctly', color: 'ice' },
    { value: '67%', label: 'Success Rate Of Firearms When Defending Against Bears', color: 'danger' },
  ],
  effectivenessSource:
    'Source: Journal Of Wildlife Management — a review of bear encounters found bear spray stopped aggressive behaviour in the large majority of cases. Firearms were only effective some of the time and often escalated the encounter.',

  steps: [
    { step: 1, title: 'Remove Safety Clip', desc: 'Unclip the safety tab with your thumb. Practice this motion so it becomes muscle memory.', image: '/icons/bear-spray/step-1-safety-clip.svg' },
    { step: 2, title: 'Wait — 7 To 9 Metres', desc: 'Let the bear close to effective range. Spraying too early wastes the can before it can reach the bear.', image: '/icons/bear-spray/step-2-wait-distance.svg' },
    { step: 3, title: 'Aim Slightly Down', desc: 'Aim at the ground just in front of the bear so the cloud rises into its path as it approaches.', icon: 'ArrowDownToLine' },
    { step: 4, title: 'Spray 2-3 Seconds', desc: "Discharge in a sweeping motion across the bear's face to build a wall of deterrent.", icon: 'SprayCan' },
    { step: 5, title: 'Back Away Slowly', desc: 'Retreat sideways, never turn your back or run. Keep the can ready in case the bear returns.', icon: 'Footprints' },
  ],
  windWarning:
    'Always check wind direction before you deploy. If the wind is blowing toward you, move sideways first — spraying into the wind will blow the capsaicin back into your own face, temporarily blinding you and making the situation worse.',

  video: {
    title: 'Watch How To Use Bear Spray',
    subtitle: 'A short demonstration of the draw, aim and deploy sequence',
  },

  carryRight: {
    correct: {
      title: 'Correct Way To Carry',
      items: [
        'On your hip holster',
        'In your hand on dense trails',
        "At arm's reach while sleeping",
        'Check the safety clip is on',
      ],
    },
    wrong: {
      title: 'Never Carry This Way',
      items: [
        'Never inside your backpack',
        'Never left in a hot car',
        'Never used as a room spray',
        'Never use an expired can',
      ],
    },
  },

  comparison: {
    intro:
      'A grizzly bear can charge at 56 km/h. From 60 metres away, it reaches you in under 4 seconds — you must deploy bear spray before the bear enters the 7-9m effective range, and you must deploy it fast.',
    bars: [
      { label: 'Bear Spray Range', value: '7-9m', pct: 40, color: 'danger' },
      { label: 'Grizzly Charge Speed', value: '56 Km/H', pct: 92, color: 'ice' },
      { label: 'Firearm Range', value: '50-100m', pct: 65, color: 'sand' },
      { label: 'Firearm Accuracy Under Charge', value: 'Low', pct: 18, color: 'caution' },
    ],
  },

  mistakes: [
    { title: 'Spray On Tent', desc: 'The scent lingers for days and attracts curious bears instead of repelling them.', icon: 'Tent' },
    { title: 'Use As Bug Repellent', desc: 'Capsaicin is not a repellent — spraying it on skin or gear causes burns, not protection.', icon: 'Bug' },
    { title: 'Bring On Airplane', desc: 'Bear spray is a prohibited item in checked and carry-on luggage on most airlines.', icon: 'Plane' },
    { title: 'Near Children', desc: 'Wind drift can carry the cloud back onto bystanders — keep children well clear when practicing.', icon: 'Baby' },
  ],

  storage: [
    { title: 'Temperature', desc: 'Store between -20°C and +48°C. Never leave the can in a hot car in summer — extreme cold reduces spray pressure.', icon: 'Thermometer' },
    { title: 'Expiry Date', desc: 'Check the expiry date printed on the can before every trip. Most cans last 3-4 years — an expired can may not spray far enough. Replace it, your life depends on it.', icon: 'CalendarClock' },
    { title: 'Pre-Trip Check', desc: 'Before every hike, check the gauge is full, the safety clip is in place, the nozzle is clear, and the expiry date is valid. Practice drawing it from the holster at home.', icon: 'ClipboardCheck' },
  ],

  products: [
    {
      name: 'Counter Assault',
      badge: 'Best Overall',
      badgeColor: 'safe',
      spec: 'Longest Range · 9 Metres',
      features: [
        'One of the longest ranges on the market',
        'Long spray duration per can',
        'Widely carried across Canadian outfitters',
      ],
    },
    {
      name: 'UDAP Bear Spray',
      badge: 'Backcountry Pick',
      badgeColor: 'caution',
      spec: 'Lightweight — Great For Day Hikes',
      features: [
        'Lightweight canister for day hikes',
        'Includes belt holster',
        'Maximum-strength capsaicin formula',
      ],
    },
    {
      name: 'Guard Alaska',
      badge: 'Budget Pick',
      badgeColor: 'sand',
      spec: 'Wide Spray Pattern',
      features: [
        'Most affordable option',
        'Wide spray pattern',
        'Available at major Canadian retailers',
      ],
    },
  ],

  emergency: {
    title: 'If You Or Someone Gets Sprayed',
    desc: "Do not touch or rub your face or eyes. Flush with large amounts of clean water for 15-20 minutes. Remove and bag contaminated clothing. Intense burning, temporary blindness and breathing difficulty usually subside within 30-45 minutes — seek medical attention if symptoms persist or worsen.",
  },
};

export default BEAR_SPRAY;
