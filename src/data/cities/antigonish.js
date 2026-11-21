// Antigonish — данные страницы /city/antigonish (Антигониш, НОВАЯ ШОТЛАНДИЯ)
// Видео Антигониша в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — рассвет и туман над гаванью
// Антигониша, автор Brendan Riley, октябрь 2014, CC BY-SA 3.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (4 656, город; округ — 20 129).
// Highland Games: в 2026 — 161-е игры (novascotia.com).
// Транспорт — Antigonish Community Transit: фикс. маршрут + запись за 2 дня;
// тарифы не нашли — «уточняйте». Больница — St. Martha's, 25 Bay St (24/7).
// HST 14%. StFX, пляжи Pomquet и Mahoneys, Cape George, Keppoch —
// из общих знаний.

export const ANTIGONISH = {
  slug: 'antigonish',
  name: 'Antigonish',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Highland Heart',
  accentLevel: 'gold',
  heroIcon: '🎓',
  heroImage: '/Cities/Antigonish/hero.jpg',
  heroCredit: 'Photo: Brendan Riley / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.6168, lon: -61.9989 },
  subtitle: 'Highland Games and Harbour Mornings',
  description:
    'A small, lively university town between mainland Nova Scotia and Cape Breton, Antigonish is famous for its Highland Games — held every summer for more than 160 years — and for St. Francis Xavier University. Around it lie misty harbours, warm Northumberland beaches and the cliffs of Cape George.',

  actions: [
    { label: 'Explore Antigonish', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈4.7K (2021)' },
    { label: 'County', value: '≈20K' },
    { label: 'Language', value: 'English · Gaelic heritage' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈2 h by car' },
    { label: 'To Cape Breton', value: '≈45 min to the causeway' },
  ],

  badges: ['Highland Games', 'University Town', 'Northumberland Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '4,656', label: 'People in the town in the 2021 census — up 6.7% since 2016', level: 'blue' },
    { value: '161st', label: 'Antigonish Highland Games in 2026 — pipes, drums, dancing and heavy events', level: 'purple' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'gold' },
    { value: 'StFX', label: 'St. Francis Xavier University brings thousands of students to town each fall', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Cafés, pubs and shops in heritage buildings',
      details: {
        "lead": "Downtown Antigonish, in heritage buildings.",
        "see": [
          {
            "title": "Heritage buildings",
            "text": "Shops, cafés and pubs in older buildings; no individual venue was verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of town."
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
          "label": "Nova Scotia Tourism: Antigonish",
          "url": "https://novascotia.com/explore-by-region/northumberland-shore/antigonish/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'StFX Campus', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'University', tagLevel: 'purple', meta: 'Historic campus beside St. Ninian’s Cathedral',
      details: {
        "lead": "The St. Francis Xavier University campus beside St. Ninian’s Cathedral.",
        "see": [
          {
            "title": "St. Ninian’s Cathedral",
            "text": "The twin-towered cathedral; the first Highland Games in 1863 raised money to build it."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of town."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk."
          },
          {
            "label": "Good to know",
            "text": "No visitor-specific campus details were found."
          }
        ],
        "link": {
          "label": "Visit Antigonish: Highland Games",
          "url": "https://visitantigonish.ca/the-highland-games/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Antigonish Landing', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Trail', tagLevel: 'blue', meta: 'Walking trail along the estuary and marshes',
      details: {
        "lead": "A walking trail along the estuary and marshes.",
        "see": [
          {
            "title": "Trail",
            "text": "An estuary and salt-marsh walk from town; no 2026 trail details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "From town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check conditions in winter."
          }
        ],
        "link": {
          "label": "Antigonish County recreation",
          "url": "https://recreation.antigonishcounty.ca/outdoor-facilities/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Columbus Field', icon: '🏴', iconSrc: '/icons/attractions/ph_flag-thin.svg', tag: 'Games', tagLevel: 'danger', meta: 'Home of the Highland Games each July',
      details: {
        "lead": "The home of the Antigonish Highland Games each July.",
        "see": [
          {
            "title": "Highland Games",
            "text": "The 2026 games, the 161st, ran July 5–12 at Columbus Field. The 2027 games (the 162nd) are listed for July 4–11, 2027."
          },
          {
            "title": "History",
            "text": "First held in 1863 to raise funds for St. Ninian’s Cathedral."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Antigonish."
          },
          {
            "label": "Time to allow",
            "text": "A day during the games."
          },
          {
            "label": "Good to know",
            "text": "The 2027 venue was not confirmed beyond the 2026 location."
          }
        ],
        "link": {
          "label": "Tourism Nova Scotia: Antigonish Highland Games",
          "url": "https://novascotia.com/event/antigonish-highland-games/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Harbour Shore', icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', tag: 'Coast', tagLevel: 'safe', meta: 'Quiet roads around Antigonish Harbour',
      details: {
        "lead": "Quiet roads around Antigonish Harbour.",
        "see": [
          {
            "title": "Pomquet Beach",
            "text": "The provincial park beach east of town has a boardwalk and washrooms; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Around the harbour east of town."
          },
          {
            "label": "Good to know",
            "text": "A car is needed."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Antigonish",
          "url": "https://novascotia.com/explore-by-region/northumberland-shore/antigonish/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Keppoch', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Hills', tagLevel: 'olive', meta: 'Mountain trails just outside town',
      details: {
        "lead": "Mountain trails just outside town, at the Keppoch four-season recreation area.",
        "see": [
          {
            "title": "Trails",
            "text": "Sources give 30 or more trails, or about 40 km, for biking, hiking and snowshoeing."
          },
          {
            "title": "Winter",
            "text": "Groomed for cross-country skiing when there is snow, Wednesday to Sunday; snowshoes can be rented on site."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Just outside town; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          },
          {
            "label": "Good to know",
            "text": "Check thekeppoch.ca for conditions."
          }
        ],
        "link": {
          "label": "Keppoch: winter activities",
          "url": "https://www.thekeppoch.ca/winter-activities"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Antigonish Highland Games',
      icon: '🏴', iconSrc: '/icons/attractions/ph_flag-thin.svg',
      text: 'A week of Scottish culture each July — massed pipe bands, Highland dancing, caber tossing and ceilidhs. 2026 marked the 161st games. Book rooms early.',
      tags: [{ label: 'July', level: 'gold' }, { label: 'Tickets', level: 'caution' }],
      details: {
        "lead": "A week of Scottish culture each July at Columbus Field: pipe bands, Highland dancing, heavy events and ceilidhs.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2027",
                "text": "July 4–11, 2027, the 162nd games."
              },
              {
                "title": "2026",
                "text": "The 161st games ran July 5–12."
              },
              {
                "title": "History",
                "text": "First held in 1863 to raise funds for St. Ninian’s Cathedral."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book early",
                "text": "Rooms fill up for the games."
              },
              {
                "title": "Tickets",
                "text": "Check the games’ site for prices and the schedule."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets; check the site."
          },
          {
            "label": "Getting there",
            "text": "Columbus Field, Antigonish."
          },
          {
            "label": "Best time",
            "text": "Early July."
          }
        ],
        "link": {
          "label": "Visit Antigonish: the Highland Games",
          "url": "https://visitantigonish.ca/the-highland-games/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Antigonish Landing Trail',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'An easy trail through salt marsh and along the estuary right from town — great for birdwatching and sunrise walks.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
      details: {
        "lead": "An easy trail through salt marsh and along the estuary from town.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "Salt marsh and estuary, good for birdwatching."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No 2026 trail details or length were found."
              },
              {
                "title": "Winter",
                "text": "Check conditions before going."
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
            "text": "From town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Antigonish County recreation",
          "url": "https://recreation.antigonishcounty.ca/outdoor-facilities/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'St. Ninian’s Cathedral',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'A twin-towered stone cathedral beside the StFX campus, landmark of the town’s skyline.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Heritage', level: 'purple' }],
      details: {
        "lead": "A twin-towered stone cathedral beside the StFX campus, a landmark of the town’s skyline.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "The first Highland Games in 1863 raised money to build it."
              },
              {
                "title": "View",
                "text": "A landmark of the skyline."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Inside",
                "text": "A working church; no visiting hours were found, so call ahead."
              },
              {
                "title": "Free",
                "text": "Free to see from outside."
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
            "text": "In the centre of town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Visit Antigonish: Highland Games",
          "url": "https://visitantigonish.ca/the-highland-games/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cape George Lighthouse',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'A scenic drive and hiking trails lead to a lighthouse on high cliffs above the Northumberland Strait.',
      tags: [{ label: 'Scenic drive', level: 'blue' }, { label: 'Hiking', level: 'olive' }],
      details: {
        "lead": "A scenic drive and trails lead to a lighthouse on cliffs above the Northumberland Strait.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "About 33 km across three sections; the lighthouse is one trailhead."
              },
              {
                "title": "Short walk",
                "text": "A lighthouse section of about 4 km return is tagged for snowshoeing."
              },
              {
                "title": "Loop",
                "text": "An 11 km lighthouse loop is also listed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No 2026 trail reports were found; conditions are your responsibility."
              },
              {
                "title": "Drive",
                "text": "The road is the draw; allow time for stops."
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
            "text": "By car from Antigonish."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Cape George Trail (Trailpeak)",
          "url": "https://trailpeak.com/trails/cape-george-trail-near-antigonish-ns-2577"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Pomquet Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A long sandy beach backed by dunes east of town, with warm summer water and boardwalk trails.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'safe' }],
      details: {
        "lead": "A long sandy beach backed by dunes east of town, with a boardwalk and washrooms.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lifeguards",
                "text": "Summer supervision, roughly late June to August."
              },
              {
                "title": "Acadian trails",
                "text": "A 6 km snowshoe route in Pomquet; one February hiker found other tracks."
              },
              {
                "title": "Boardwalk",
                "text": "A boardwalk and washrooms at the beach."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter parking",
                "text": "The road up to the museum is not plowed in winter; park at the entrance and walk."
              },
              {
                "title": "Swimming",
                "text": "Swimming is a summer activity."
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
            "text": "East of Antigonish."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Acadian trails in Pomquet",
          "url": "https://trailpeak.com/trails/pomquet-acadian-trails-near-antigonish-ns-11377"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Keppoch Mountain',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'A former ski hill turned year-round trail network for hiking, mountain biking and snowshoeing.',
      tags: [{ label: 'Trails', level: 'olive' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A former ski hill turned year-round trail network for hiking, mountain biking and snowshoeing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "About 40 km, or more than 30 trails plus the old ski runs, depending on the source."
              },
              {
                "title": "Winter",
                "text": "Groomed for cross-country skiing when there is snow, Wednesday to Sunday."
              },
              {
                "title": "Snowshoes",
                "text": "Rentals are available on site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Conditions",
                "text": "Check thekeppoch.ca for grooming and conditions."
              },
              {
                "title": "Year-round",
                "text": "Open for several seasons."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check the site."
          },
          {
            "label": "Getting there",
            "text": "Just outside Antigonish."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          }
        ],
        "link": {
          "label": "Keppoch: winter activities",
          "url": "https://www.thekeppoch.ca/winter-activities"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Harbours, Hills and Warm Beaches',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Northumberland Beaches', dist: '≈15–30 min', text: 'Pomquet, Mahoneys and other warm-water beaches.' },
    { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', name: 'Cape George Trails', dist: '≈40 min north', text: 'Coastal cliffs, a lighthouse and long views to PEI and Cape Breton.' },
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Keppoch Trails', dist: '≈15 min', text: 'Mountain biking and hiking in the hills.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Antigonish Harbour', text: 'Sheltered water for kayaks among islands and marsh.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Landing & marshes', text: 'Herons, eagles and shorebirds.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', name: 'Cape Breton Day Trip', dist: '≈45 min to the causeway', text: 'Cross the Canso Causeway toward the Cabot Trail.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Coast', areaLevel: 'danger', text: 'Lobster rolls and suppers in season.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Oatcakes & Scones', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish baking traditions.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Main Street', areaLevel: 'purple', text: 'Student-town pubs with live Celtic music.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Independent coffee shops.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Weekends', areaLevel: 'safe', text: 'Local produce and baking.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Misty mornings', text: 'Cool, often foggy spring; the marshes come alive with birds.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Highland Games', text: 'The Highland Games in July, warm beaches and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Students & colour', text: 'Students return and the hills turn red and gold.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Snow and coastal storms; snowshoeing at Keppoch.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 104 (the Trans-Canada) runs past town between New Glasgow and the Canso Causeway to Cape Breton.',
      time: '≈2 h from Halifax',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is the nearest major airport.',
      time: '≈1 h 45 min by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Shuttle',
      text: 'Private shuttles connect Antigonish with Halifax airport — book ahead.',
      time: '≈2 h',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail to Antigonish.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Inns and hotels near Main Street and StFX — book far ahead for Games week and graduation.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Antigonish', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Antigonish%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Coastal Cottages',
      area: 'Beaches',
      text: 'Rentals near Pomquet and the harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Antigonish+County', level: 'blue' },
      ],
    },
    {
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      title: 'Cape George Shore',
      area: 'Quiet',
      text: 'B&Bs along the scenic drive.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cape+George+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg',
      title: 'Antigonish Community Transit',
      text: 'A community-run service with a fixed route in town plus a book-a-ride option. Book-a-ride trips are reserved in advance (typically two days ahead).',
      linkLabel: 'Town of Antigonish',
      linkUrl: 'https://www.townofantigonish.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'We could not find a current fare table — contact Antigonish Community Transit for prices and schedules.',
        fareBox: {
          label: 'Getting around',
          lines: ['Fixed route: in town', 'Book-a-ride: reserve ahead', 'Fares: confirm locally', 'Car: for beaches & capes'],
        },
        linkLabel: 'Town of Antigonish',
        linkUrl: 'https://www.townofantigonish.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and campus are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Landing trail and quiet roads.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for beaches and Cape George.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Local taxis available.' },
        ],
      },
    ],
    proTip: {
      label: 'Games tip:',
      text: 'During Highland Games week the town fills — reserve rooms months ahead or stay in New Glasgow, 45 minutes west.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Check your hotel bill for any local marketing levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Antigonish / NS', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Games tickets: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Landing trail: free' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Pomquet Beach: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Busy Weeks', text: 'Highland Games (July), StFX move-in (September) and graduation (May) fill every room in town.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fog', text: 'Morning fog on the harbour is common — beautiful, but drive carefully.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storms', text: 'Post-tropical storms can bring heavy rain and wind in late summer and fall.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife', text: 'Watch for deer on Highway 104 and rural roads at dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car Helps', text: 'Transit is limited — a car makes beaches and capes easy.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Antigonish is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Paq’tnkek Mi’kmaw Nation is nearby.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['St. Martha’s Regional Hospital', '25 Bay St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default ANTIGONISH;
