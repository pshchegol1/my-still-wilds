// Cornwall, Prince Edward Island — данные страницы /city/cornwall
//
// ВАЖНО: это Cornwall в графстве Queens, PEI (пригород Шарлоттауна) — НЕ Cornwall
// в Онтарио (город у реки Св. Лаврентия) и НЕ Cornwall в Англии (графство на
// юго-западе Великобритании). Поисковая выдача по обоим запросам сильно засорена
// этими двумя другими Корнуоллами — все источники ниже проверены именно на PEI.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 6,574 чел. (перепись 2021, +22.9% к 2016 — 5,348), площадь 28.2 км²,
//   плотность 233.0/км² (town's own site, Wikipedia). По данным CBC, Корнуолл —
//   самое быстрорастущее поселение острова среди населённых пунктов от 1000 жителей.
//   У сайта citypopulation.de встречена другая цифра (7,495) по более старой/другой
//   методике — не используется, в карточке дана официальная цифра переписи 2021.
//   С переписи 2021 бывший population centre Корнуолла вошёл в population centre
//   Шарлоттауна — это геостатистическая особенность, не означает потерю статуса
//   отдельного муниципалитета.
// - География: расположен в 6 км к западу от Шарлоттауна, Queens County; граничит
//   с North River на востоке и West River (Eliot River) на юге и западе
//   (cornwallpe.ca — town crest page, community profile).
// - История: первые известные поселенцы — французские фермеры в районе North River
//   в середине XVIII века; англоязычные поселенцы — с 1790 года. Судостроение в
//   North River (начало XIX века) просуществовало больше века, угасло в 1920-х.
//   Статус incorporated village — 1966; 1 апреля 1995 — слияние Cornwall, Eliot
//   River и North River в единый Town of Cornwall (также упоминаются York Point и
//   East Wiltshire как присоединённые территории). Назван в честь герцогства
//   Корнуолл в Англии (cornwallpe.ca/welcome-to-cornwall/history).
// - Рекреация: Terry Fox Sports Complex (футбольное поле с надписью "CORNWALL PE",
//   команда Cornwall Timberwolves — видно прямо на фото в шапке), бесплатная беговая
//   дорожка в APM Centre для жителей, муниципальный открытый бассейн (летний сезон),
//   сеть пешеходных троп с картой на сайте города (cornwallpe.ca/parksrecreation,
//   /trail-map). Hyde Park — исторически упоминаемый парк в Корнуолле (встречается в
//   старых архивных фото Wikimedia Commons 2007 года).
// - Медицина: отдельной больницы в самом Корнуолле нет — город обслуживается Queen
//   Elizabeth Hospital в соседнем Шарлоттауне, как и другие пригороды столицы PEI.
// - Фото в шапке: Wikimedia Commons, "Cornwall, PEI.jpg", автор Quintin Soloviev,
//   CC BY 4.0, снято 01.07.2025. GPS в EXIF: 46.219047, -63.230631 — к западу от
//   Шарлоттауна, соответствует положению Корнуолла. На самом кадре видна надпись
//   "CORNWALL PE" на спортивном поле и название команды "Cornwall Timberwolves" —
//   прямое визуальное подтверждение локации.
// - Видео в бесплатных банках не найдено (выдача Pexels — только Cornwall, Англия,
//   и несвязанные регионы Канады).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const CORNWALL = {
  slug: 'cornwall',
  name: 'Cornwall',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Queens County',
  tag: 'Gateway West of Charlottetown',
  accentLevel: 'red',
  heroIcon: '🌾',
  heroImage: '/Cities/Cornwall/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.2341, lon: -63.2242 },

  subtitle: "PEI's Fastest-Growing Town",
  description:
    'Cornwall sits just 6 km west of Charlottetown, bordered by the North River and West River — a once-rural farming community that has become one of the fastest-growing towns on Prince Edward Island. Formed in 1995 from the merger of Cornwall, Eliot River and North River, it keeps a gently rolling, small-town feel while sitting minutes from the capital.',

  actions: [
    { label: 'Explore Cornwall', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '6,574 (2021)' },
    { label: 'Growth', value: '+22.9% since 2016' },
    { label: 'Setting', value: '6 km West of Charlottetown' },
    { label: 'Town Status Since', value: '1995' },
    { label: 'Region', value: 'Queens County' },
    { label: 'Known For', value: 'Rapid Growth & Rivers' },
  ],

  badges: ['Fastest-Growing Town', 'Queens County', 'Riverside Setting'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '6,574', label: 'Population at the 2021 census, up 22.9% from 2016', level: 'safe' },
    { value: '1995', label: 'Year Cornwall, Eliot River and North River merged into one town', level: 'blue' },
    { value: '1790', label: 'Year English-speaking settlers arrived, after mid-1700s French farmers', level: 'gold' },
    { value: '6 km', label: "Distance west of downtown Charlottetown", level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Civic Core', tagLevel: 'gold', meta: 'Town Hall, schools and the main commercial strip along Route 1',
      details: {
        "lead": "The civic and shopping core of a town of 6,574 people (2021), just west of Charlottetown.",
        "see": [
          {
            "title": "The town",
            "text": "Cornwall was formed on 1 April 1995 when the communities of Cornwall, Eliot River and North River merged; its name was chosen by a local plebiscite."
          },
          {
            "title": "Growth",
            "text": "The 2021 census counted 6,574 residents, up 22.9% from 2016."
          },
          {
            "title": "Shops",
            "text": "No individual shops or restaurants were verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Immediately west of Charlottetown, in Queens County."
          },
          {
            "label": "Good to know",
            "text": "Mostly a commuter and residential town rather than a sightseeing stop."
          }
        ],
        "link": {
          "label": "Town of Cornwall: history",
          "url": "https://cornwallpe.ca/welcome-to-cornwall/history/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North River', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Riverside', tagLevel: 'blue', meta: 'Historic shipbuilding community, now part of Cornwall',
      details: {
        "lead": "The former shipbuilding community, now part of Cornwall.",
        "see": [
          {
            "title": "Shipbuilding",
            "text": "A significant shipbuilding industry was founded at North River in the early 1800s and continued for over 100 years before declining in the 1920s."
          },
          {
            "title": "Early settlement",
            "text": "French farmers settled the North River area in the mid-1700s; English-speaking settlers followed in 1790."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town of Cornwall."
          },
          {
            "label": "Good to know",
            "text": "No heritage sites or tours were found; the history is mostly in the record."
          }
        ],
        "link": {
          "label": "Cornwall (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Cornwall,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Eliot River / West River', icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg', tag: 'Riverside', tagLevel: 'safe', meta: 'Along the Eliot River, one of the three communities merged into Cornwall in 1995',
      details: {
        "lead": "The Eliot River community, one of the three that merged to form the town in 1995.",
        "see": [
          {
            "title": "Amalgamation",
            "text": "The incorporated communities of Cornwall, Eliot River and North River amalgamated on 1 April 1995."
          },
          {
            "title": "River",
            "text": "The sources found did not describe public viewpoints; ask Town Hall."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town of Cornwall."
          },
          {
            "label": "Good to know",
            "text": "The plain card calls it the West (Eliot) River; the Town’s own pages use Eliot River."
          }
        ],
        "link": {
          "label": "Town of Cornwall: history",
          "url": "https://cornwallpe.ca/welcome-to-cornwall/history/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'East Wiltshire', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'purple', meta: 'A rural area near Cornwall; not one of the three communities merged in 1995',
      details: {
        "lead": "A rural area near Cornwall.",
        "see": [
          {
            "title": "Boundary",
            "text": "The town was formed from Cornwall, Eliot River and North River, so East Wiltshire is not one of the three communities that merged in 1995; check a map for the exact boundary."
          },
          {
            "title": "Visitor sights",
            "text": "No visitor attractions were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Near Cornwall, in Queens County."
          },
          {
            "label": "Good to know",
            "text": "Mainly homes and farms."
          }
        ],
        "link": {
          "label": "Cornwall (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Cornwall,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Terry Fox Sports Complex',
      icon: '⚽', iconSrc: '/icons/attractions/ph_soccer-ball-thin.svg',
      text: "Cornwall's main sports complex, opened in 2010, with turf football and soccer fields, a baseball and softball field and four tennis courts.",
      tags: [{ label: 'Sports', level: 'blue' }, { label: 'Family', level: 'safe' }],
      details: {
        "lead": "A multi-sport facility behind Eliot River Elementary School, officially opened on 18 September 2010.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fields",
                "text": "A football turf field, a soccer turf field, a baseball and softball field and four tennis courts."
              },
              {
                "title": "Role",
                "text": "Serves the sports needs of Cornwall and the surrounding area."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Booking",
                "text": "Field use goes through the Town’s facility booking schedule."
              },
              {
                "title": "Winter",
                "text": "Outdoor fields; not a winter attraction."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to watch; bookings may carry fees."
          },
          {
            "label": "Getting there",
            "text": "Behind Eliot River Elementary School, Cornwall."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          }
        ],
        "link": {
          "label": "PEI Government: Terry Fox Sports Complex opens",
          "url": "https://archivenews.princeedwardisland.ca/terry-fox-sports-complex-opens-cornwall-federal-and-provincial-support"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Town of Cornwall Trail Network',
      icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg',
      text: 'A network of walking and cycling trails through town, mapped on the municipal trail map.',
      tags: [{ label: 'Trails', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "Walking and cycling trails through town; the Town’s draft 2026 summer guide mentions about 15 km of trails and active transportation pathways.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 15 km, per a draft guide, so verify the final figure."
              },
              {
                "title": "Map",
                "text": "The Town publishes a trail map; look for the Terry Fox trail map on its site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No winter grooming information was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Getting there",
            "text": "Around the town."
          },
          {
            "label": "Time to allow",
            "text": "An hour or more."
          }
        ],
        "link": {
          "label": "Town of Cornwall: parks and recreation",
          "url": "https://cornwallpe.ca/parksrecreation/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'North River & West River Views',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'The town grew from the communities of North River and Eliot River, and river shores are part of its landscape; ask Town Hall about public access points.',
      tags: [{ label: 'Scenic', level: 'blue' }],
      details: {
        "lead": "Cornwall grew from the communities of North River and Eliot River, and river shores are part of its landscape.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "North River had a shipbuilding industry from the early 1800s to the 1920s."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Access",
                "text": "No specific public viewpoints were found; ask Town Hall."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Getting there",
            "text": "Around the town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Town of Cornwall: history",
          "url": "https://cornwallpe.ca/welcome-to-cornwall/history/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Town of Cornwall Pool',
      icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg',
      text: "A municipal outdoor pool, open seasonally; the Town posts schedules and closures on its website and Facebook page.",
      tags: [{ label: 'Seasonal', level: 'gold' }],
      details: {
        "lead": "A municipal outdoor pool open for the summer season.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The Town says it is open for the summer season; the 2026 summer guide lists pool schedules and lessons."
              },
              {
                "title": "Poolside Park",
                "text": "Cornwall Civic Centre’s Poolside Park hosts events."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "Outdoor pool; not open in late November."
              },
              {
                "title": "Schedules",
                "text": "Closures and schedule changes are posted on the Town’s Facebook page."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not found; check the Town."
          },
          {
            "label": "Getting there",
            "text": "At the Cornwall Civic Centre."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Town of Cornwall: parks and recreation",
          "url": "https://cornwallpe.ca/parksrecreation/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'APM Centre Walking Track',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A walking track at the APM Centre, a multi-use recreation complex serving thirteen local communities.',
      tags: [{ label: 'Indoor', level: 'purple' }],
      details: {
        "lead": "A walking track at the APM Centre, a multi-use recreation complex serving thirteen local communities.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Operator",
                "text": "The APM Centre is run by Communities13 Inc."
              },
              {
                "title": "Cornwall residents",
                "text": "The Town reimburses the walking-track membership for residents: proof of membership dated after 1 April 2025 and ID showing Cornwall residency go to Town Hall."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No track hours were found; ask the centre."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Membership needed; Cornwall residents can claim it back."
          },
          {
            "label": "Getting there",
            "text": "APM Centre, Cornwall area."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Town of Cornwall: parks and recreation",
          "url": "https://cornwallpe.ca/parksrecreation/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Rivers and Rolling Countryside',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Cornwall Trail Network', dist: 'Townwide', text: 'Walking and cycling trails mapped across the town.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'North River Shoreline', dist: 'Eastern edge of town', text: 'Water views along the river bordering Cornwall.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', name: 'West (Eliot) River Views', dist: 'Southern & western edge', text: 'Rolling farmland meets the river along this border.' },
    { icon: '⚽', iconSrc: '/icons/attractions/ph_soccer-ball-thin.svg', name: 'Terry Fox Sports Complex', dist: 'Town centre', text: 'Turf sports fields for local games and tournaments.' },
    { icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg', name: 'Town Pool', dist: 'Town centre', text: 'Outdoor municipal swimming, open seasonally.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Local Restaurants', area: 'Along Route 1', areaLevel: 'blue', text: "Casual dining along Cornwall's main commercial strip." },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving the growing local community.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery & Retail', area: 'Townwide', areaLevel: 'safe', text: 'Everyday shopping, with downtown Charlottetown a short drive away.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Nearby Charlottetown', areaLevel: 'gold', text: "Charlottetown's seafood restaurants are just minutes away." },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the trails, the town pool and sports fields.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather and fall colour across the surrounding farmland.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Quiet season', text: 'Cold, with indoor facilities like the APM Centre taking over from outdoor activity.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, green season as the town reopens its outdoor facilities.' },
  ],

  gettingThere: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'From Charlottetown', text: 'Cornwall is about 6 km west of downtown Charlottetown via Route 1, a short drive from the capital.', time: 'Minutes away' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, a short drive from Cornwall.', time: 'Year-round' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick connects to the rest of PEI, with Cornwall on the route into Charlottetown.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Along Route 1',
      text: "Accommodations near Cornwall's main commercial strip, close to Charlottetown.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cornwall+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Cornwall%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Car-Friendly, Close to the Capital',
      text: 'Cornwall is best explored by car, with Route 1 providing a direct, short connection into downtown Charlottetown.',
      linkLabel: 'Town of Cornwall',
      linkUrl: 'https://cornwallpe.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'The main way to get around Cornwall and into Charlottetown.' },
          { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', title: 'By Trail', text: 'Local trails connect neighbourhoods for walking and cycling.' },
        ],
      },
    ],
    proTip: {
      label: 'Location tip:',
      text: 'Cornwall makes a quiet, fast-growing base just minutes from downtown Charlottetown by car.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Cornwall / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', label: 'Trail access: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), a short drive away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Getting Around', text: 'A car is the easiest way to get around Cornwall and into Charlottetown.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Served by Queen Elizabeth Hospital in Charlottetown', '24-hour emergency department · Call 911'] },
  ],
};

export default CORNWALL;
