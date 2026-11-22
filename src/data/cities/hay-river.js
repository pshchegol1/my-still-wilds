// Hay River — данные страницы /city/hay-river (Хей-Ривер, СЕВЕРО-ЗАПАДНЫЕ
// ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянные реки и сено, явное
// совпадение с английским "hay" = сено). В шапке фото с Wikimedia
// Commons — причал Fisherman's Wharf с рыбацкими лодками и видом на
// город через реку, автор Ymblanter, 03.08.2019, CC BY-SA 4.0 (GPS
// 60.849, -115.736 — совпадает с Хей-Ривер). Лицензия требует автора.
// Население — перепись 2021: 3 169 (-10.2% к 2016, 3528); отдельно
// population centre — 2 380 (другая методика, не смешиваем).
// "Hub of the North" — груз с юга (ж/д и автотрассы) перегружают на
// баржи для доставки по реке Маккензи в удалённые арктические общины;
// в гавани — база Канадской береговой охраны и коммерческий рыболовный
// флот. Источники о барже — туристические, физическую логистику не
// проверяли отдельно у транспортного органа.
// Больница — Hay River Regional Health Centre (новое здание, подрядчик
// назван отдельно от старого), 37911 Mackenzie Hwy; в 2022–2023 были
// перебои с укомплектованием персоналом и временные ограничения ER —
// предупреждение в тексте вместо гарантии "24/7".
// Twin Falls Gorge Territorial Park — около 50 км к югу по Mackenzie
// Highway (источники расходятся: 42–50 км); включает Alexandra Falls
// (≈32–33 м, третий по высоте водопад в NWT) и Louise Falls (≈15 м),
// связаны пешей тропой ≈2–3 км. Хрупкие обрывы и сильное течение —
// предупреждение о безопасности.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: статус "ворот" к Great Slave Lake и реке Маккензи,
// время в пути.

export const HAY_RIVER = {
  slug: 'hay-river',
  name: 'Hay River',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Hub of the North',
  accentLevel: 'safe',
  heroIcon: '🚢',
  heroImage: '/Cities/HayRiver/hero.jpg',
  heroCredit: 'Photo: Ymblanter / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.8158, lon: -115.7999 },
  subtitle: 'Where Road, Rail and River Meet',
  description:
    'Known across the North as the "Hub of the North," Hay River sits where the river of the same name empties into Great Slave Lake. Freight arriving by truck and rail is loaded onto barges here for the long journey down the Mackenzie River to remote Arctic communities, while a working fishing fleet and sandy lake beaches give the town a very different, more relaxed side.',

  actions: [
    { label: 'Explore Hay River', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈3.2K (2021)' },
    { label: 'Known For', value: 'Transportation Hub' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'To Yellowknife', value: '≈4 h by car' },
    { label: 'To Twin Falls Gorge Park', value: '≈45–50 min by car' },
  ],

  badges: ['Great Slave Lake', 'Barge Port', 'Twin Falls Gorge'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '3,169', label: 'People in Hay River in the 2021 census', level: 'safe' },
    { value: '1963', label: 'Year Hay River was incorporated as a town', level: 'purple' },
    { value: '32–33 m', label: 'Height of Alexandra Falls, the 3rd-highest waterfall in the NWT, near town', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Old Town', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'gold', meta: 'The original townsite at the river mouth, with the harbour and wharf',
      details: {
        "lead": "The original townsite at the river mouth on Vale Island, with the harbour and the Hay River Museum.",
        "see": [
          {
            "title": "Hay River Museum",
            "text": "On Vale Island, phone 867-874-3872. Its September 2026 hours were Wednesday to Sunday 9 am–5 pm, with Thursday-evening music; the last day for the season was September 27."
          },
          {
            "title": "Winter",
            "text": "An older report says it is normally closed in the colder months; Wikivoyage lists noon–5 pm daily from October 1 to December 25. Confirm by phone."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the river mouth."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Listings conflict on hours."
          }
        ],
        "link": {
          "label": "Hay River Museum: September 2026 hours",
          "url": "https://hayrivermuseum.com/september-2026-hours/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'New Town', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'blue', meta: 'The rebuilt town centre on higher ground, with most shops and services',
      details: {
        "lead": "The rebuilt town centre on higher ground, with most shops and services.",
        "see": [
          {
            "title": "Services",
            "text": "Most shops and services; no individual venue was verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On higher ground in the town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Venues keep their own hours."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Vale Island', icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg', tag: 'River Delta', tagLevel: 'purple', meta: 'An island neighbourhood in the Hay River delta',
      details: {
        "lead": "An island neighbourhood in the Hay River delta, home of Old Town and the museum.",
        "see": [
          {
            "title": "The museum",
            "text": "The Hay River Museum is on Vale Island, in Old Town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the delta at the river mouth."
          },
          {
            "label": "Good to know",
            "text": "See Old Town for details."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Great Slave Lake Beaches', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: 'Beach', tagLevel: 'safe', meta: 'Sandy shoreline along the lake near the river mouth',
      details: {
        "lead": "Sandy shoreline along the lake near the river mouth.",
        "see": [
          {
            "title": "Beach",
            "text": "A summer swimming and sunset spot; no lifeguard or facility details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Near the river mouth."
          },
          {
            "label": "Good to know",
            "text": "Great Slave Lake water is very cold."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hay River Reserve (Ka’a’gee Tu)', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: 'First Nation', tagLevel: 'olive', meta: 'The neighbouring Dene reserve community',
      details: {
        "lead": "The neighbouring Dene reserve community.",
        "see": [
          {
            "title": "Community",
            "text": "A Dene community next to Hay River; no visitor facilities were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Next to the town."
          },
          {
            "label": "Good to know",
            "text": "Please be respectful; ask permission before photographing people or homes."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Fisherman’s Wharf',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'The working harbour where Hay River’s commercial fishing fleet docks — a good spot to watch boats and see the town across the water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Local life', level: 'blue' }],
      details: {
        "lead": "The working harbour where Hay River’s commercial fishing fleet docks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "A harbour for watching boats and the town across the water."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No visitor information was found; ask locally about access."
              },
              {
                "title": "Winter",
                "text": "The harbour freezes."
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
            "text": "In Old Town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Great Slave Lake Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'Sandy beach where the Hay River meets Great Slave Lake — a surprisingly good summer swimming and sunset spot this far north.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A sandy beach where the Hay River meets Great Slave Lake, good for summer swimming and sunsets.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "A summer beach."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Cold water",
                "text": "The lake is very cold."
              },
              {
                "title": "Details",
                "text": "No facility details were found."
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
            "text": "Near the river mouth."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Twin Falls Gorge Territorial Park',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'About 45–50 minutes south on the Mackenzie Highway: Alexandra Falls and Louise Falls in a limestone gorge. The riverside trail and viewing platforms were closed in June 2026 because of erosion, so check before going. Stay well back from unstable cliff edges.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Caution', level: 'danger' }],
      details: {
        "lead": "About 50 km south of Hay River on Highway 1, Alexandra Falls and Louise Falls in a limestone gorge.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Closures",
                "text": "A June 2, 2026 notice closed the 5 km Twin Falls Park Trail and all viewing platforms because of erosion; no reopening date."
              },
              {
                "title": "Open",
                "text": "Louise Falls Campground and the Alexandra Falls rest stop (washroom, picnic tables) stay open; Escarpment Creek was closed for wildfire remediation."
              },
              {
                "title": "Season",
                "text": "Campground May 15 to September 15, 2026; reservations on 1-888-822-2647."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Closed in winter per one RV guide; climbers use the frozen falls, which is not a park service."
              },
              {
                "title": "Safety",
                "text": "Stay well back from unstable edges."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Camping fees apply; no day-use fee was found."
          },
          {
            "label": "Getting there",
            "text": "On Highway 1, 74.6 km from the Alberta border, by Enterprise."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "NWT Parks: Twin Falls",
          "url": "https://www.nwtparks.ca/find-a-park/twin-falls-territorial-park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hay River Barge & Harbour',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'Watch freight transfer from trucks and rail cars onto barges bound down the Mackenzie River for remote northern communities — the activity that gives Hay River its "Hub of the North" nickname.',
      tags: [{ label: 'Unique', level: 'purple' }, { label: 'Industrial', level: 'olive' }],
      details: {
        "lead": "Freight is transferred from trucks and rail to barges heading down the Mackenzie River to northern communities.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Role",
                "text": "A transportation hub for the North."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Access",
                "text": "This is an industrial site; no visitor information was found. Ask locally and keep to public viewpoints."
              },
              {
                "title": "Season",
                "text": "Barges run in the open-water season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to watch from public areas."
          },
          {
            "label": "Getting there",
            "text": "At the harbour."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Wikivoyage: Hay River",
          "url": "https://en.wikivoyage.org/wiki/Hay_River"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hay River Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Local and transportation history, with outdoor exhibits including vintage overland vehicles. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
      details: {
        "lead": "Local and transportation history on Vale Island, with outdoor exhibits.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "September 2026",
                "text": "Wednesday to Sunday 9 am–5 pm, Thursday-evening music 7–9 pm, closed Monday and Tuesday; last day September 27."
              },
              {
                "title": "Other listings",
                "text": "Wikivoyage lists summer Monday to Saturday 10–5 and winter (October 1 to December 25) noon–5 pm daily."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Seasonal",
                "text": "It is normally closed in the colder months, per an older report."
              },
              {
                "title": "Phone",
                "text": "+1 867-874-3872."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check before going."
          },
          {
            "label": "Getting there",
            "text": "Vale Island, Old Town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Hay River Museum",
          "url": "https://hayrivermuseum.com/september-2026-hours/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Mouth, Lake and Waterfalls',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Beach', dist: 'River mouth', text: 'Sandy shoreline on Great Slave Lake.' },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', name: 'Alexandra & Louise Falls', dist: '≈45–50 min', text: 'Two waterfalls linked by a scenic gorge trail.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Hay River & Great Slave Lake', text: 'A long-standing commercial and recreational fishery.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Boating', dist: 'Harbour & lake', text: 'Boat access to Great Slave Lake from the river mouth.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter travel and recreation.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights outside summer.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fresh Lake Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Whitefish and other catches from Great Slave Lake.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'New Town', areaLevel: 'gold', text: 'A modest dining scene serving the regional hub.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops in the town centre.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'New Town', areaLevel: 'safe', text: 'The main supply point for the South Slave region.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding land.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves the river and Great Slave Lake as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm days for the lake beach, fishing and the waterfalls.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Colour', text: 'Boreal colour and the return of aurora season.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold & snowy', text: 'Deep cold, with ice roads and winter travel on the land.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 2 connects Hay River to Yellowknife and, via Alberta highways, to southern Canada.',
      time: '≈4 h from Yellowknife',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Hay River/Merlyn Carter Airport has scheduled flights connecting to Yellowknife and Edmonton.',
      time: 'Local flights available',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Barge',
      text: 'Hay River is the main loading point for barge freight heading down the Mackenzie River — a cargo route, not a passenger service.',
      time: 'Freight only',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Limited intercity coach options connect Hay River to Yellowknife and Alberta. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'New Town',
      area: 'Walkable',
      text: 'Most of the town’s hotels and motels.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hay+River+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Hay%20River%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Old Town',
      area: 'Near the harbour',
      text: 'A quieter area close to Fisherman’s Wharf.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hay+River+Northwest+Territories', level: 'blue' },
      ],
    },
    {
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      title: 'Twin Falls Gorge Park',
      area: '≈45–50 min away',
      text: 'Campgrounds at Louise Falls and Escarpment Creek.',
      links: [
        { label: 'NWT Parks', url: 'https://www.nwtparks.ca/find-a-park/twin-falls-territorial-park', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No Public Transit',
      text: 'Hay River has no municipal bus system — a car or taxi is the way to get around town, with Old Town and New Town a short drive apart.',
      linkLabel: 'Town of Hay River',
      linkUrl: 'https://hayriver.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Each town centre is walkable on its own.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed to get between Old Town, New Town and the falls.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in town.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on regional trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Falls tip:',
      text: 'Stick to marked viewpoints at Alexandra and Louise Falls — the limestone cliffs and currents are genuinely dangerous close up.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Hay River / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
      { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', label: 'Fishing charters: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Lake beach: free' },
      { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', label: 'Twin Falls Gorge Park day use: check current fees' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', title: 'Hub of the North', text: 'Hay River is a key logistics point — freight from the south transfers here onto barges for remote Arctic communities, which shapes the town’s economy and feel.' },
    { icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', title: 'Waterfall Safety', text: 'Alexandra and Louise Falls have unstable cliffs and dangerous currents — stay on marked trails and viewpoints.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Highway 2 can see heavy snow and ice — check road conditions before travelling.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Moose and bison can appear on regional highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife and Edmonton.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Check the ER', text: 'The health centre has faced staffing-related service limits in the past — check current status if you need urgent care.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Hay River is on the traditional territory of the Dene, near the K’atl’odeeche First Nation (Hay River Reserve) across the river.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hay River Regional Health Centre', '37911 Mackenzie Hwy', 'Call 911 · 811 for advice'] },
  ],
};

export default HAY_RIVER;
