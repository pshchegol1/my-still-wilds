// Carmacks — данные страницы /city/carmacks (Кармакс, ЮКОН)
// Видео Кармакса в бесплатных банках нет (Pexels по запросу — только
// безымянные горные/дорожные ролики). В шапке фото с Wikimedia Commons —
// Five Finger Rapids на реке Юкон, знаковое место примерно в 20 км от
// посёлка (ниже по течению, к северу — реки здесь текут на север),
// автор Bo Mertz, 08.08.2011, CC BY-SA 2.0 (GPS 62.273, -136.343 —
// соответствует описанию "к северу от Carmacks"). Лицензия требует автора.
// Население — перепись 2021: деревня (village) 588 (+19.3% к 2016, 493);
// отдельно населённый пункт Carmacks Landing — 206 человек, не объединяем.
// Медцентр — Carmacks Health Centre, 106 River Drive, две медсестры
// (не больница с приёмным покоем).
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.
// Из общих знаний: посёлок на пересечении Klondike Highway и Campbell
// Highway; название — в честь золотоискателя George Carmack, одного из
// первооткрывателей клондайкского золота; историческая угольная добыча
// и пароходная остановка; гора Tantalus Butte над посёлком; Little
// Salmon/Carmacks First Nation; река Nordenskiold впадает в Юкон рядом;
// время в пути.

export const CARMACKS = {
  slug: 'carmacks',
  name: 'Carmacks',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Yukon River Crossroads',
  accentLevel: 'blue',
  heroIcon: '🛶',
  heroImage: '/Cities/Carmacks/hero.jpg',
  heroCredit: 'Photo: Bo Mertz / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.1064, lon: -136.2919 },
  subtitle: 'Riverboat Town at the Highway Crossroads',
  description:
    'A small village where the Klondike and Campbell highways meet the Yukon River, Carmacks grew up as a coal-mining and riverboat stop and takes its name from gold-rush prospector George Carmack. Today it’s best known as the access point for Five Finger Rapids, a dramatic set of rock pillars that once challenged paddle-wheelers heading north.',

  actions: [
    { label: 'Explore Carmacks', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈590 (2021)' },
    { label: 'Known For', value: 'Five Finger Rapids' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈2 h by car' },
    { label: 'To Dawson City', value: '≈4 h by car' },
  ],

  badges: ['Five Finger Rapids', 'Yukon River', 'Highway Junction'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '588', label: 'People in Carmacks in the 2021 census — up 19.3% in five years', level: 'blue' },
    { value: '≈20 km', label: 'Distance to Five Finger Rapids, downstream on the Yukon River', level: 'gold' },
    { value: '5', label: 'Rock channels that split the river at Five Finger Rapids — only one is passable', level: 'purple' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Village Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Services, the general store and the highway junction',
      details: {
        "lead": "Services, the general store and the highway junction, with the Tagé Cho Hudän Interpretive Centre nearby.",
        "see": [
          {
            "title": "Tagé Cho Hudän Interpretive Centre",
            "text": "On the Klondike Highway north of the bridge. One guide lists mid-May to mid-September, daily 9 am–6 pm, with appointments off-season on 867-863-5831; another gave Tuesday to Saturday 10 am–5 pm for 2024. The 2026 season is unconfirmed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the junction of the Klondike Highway."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Phone before visiting in winter."
          }
        ],
        "link": {
          "label": "Travel Yukon: Tagé Cho Hudän",
          "url": "https://www.travelyukon.com/en/see-and-do/experience-providers/tage-cho-hudan-interpretive-centre"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Yukon River Waterfront', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Boat launch and river access at the heart of the village',
      details: {
        "lead": "The boat launch and river access in the heart of the village.",
        "see": [
          {
            "title": "River access",
            "text": "The launch is a starting or stopping point for paddlers on the Yukon River; no winter information was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the village."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          },
          {
            "label": "Good to know",
            "text": "Paddling is a summer activity."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tantalus Butte', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Landmark', tagLevel: 'olive', meta: 'The hill overlooking the village',
      details: {
        "lead": "The hill overlooking the village.",
        "see": [
          {
            "title": "The butte",
            "text": "A scenic backdrop; no verified visitor details or coal-mining history were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Near the village."
          },
          {
            "label": "Good to know",
            "text": "Ask at the interpretive centre about local history."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Five Finger Rapids', icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Landmark', tagLevel: 'purple', meta: 'Rock pillars splitting the Yukon River downstream',
      details: {
        "lead": "Four rock islands split the Yukon River into five channels, about 24 km north of Carmacks.",
        "see": [
          {
            "title": "Viewing platform",
            "text": "A 1.4 km return trail with interpretive panels; one visitor counted a 219-step staircase."
          },
          {
            "title": "Season",
            "text": "Listed May 8 to October 1, 2026; the gate is open year-round."
          },
          {
            "title": "History",
            "text": "From about 1900 to 1927 the channel was widened by blasting."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At km 380 of the North Klondike Highway."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Stairs can be icy in winter."
          }
        ],
        "link": {
          "label": "Yukon.ca: Five Finger Rapids Recreation Site",
          "url": "https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/site/five-finger-rapids-recreation-site"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Little Salmon/Carmacks Territory', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: 'First Nation', tagLevel: 'danger', meta: 'Traditional territory surrounding the village',
      details: {
        "lead": "The traditional territory of the Little Salmon/Carmacks First Nation around the village.",
        "see": [
          {
            "title": "Territory",
            "text": "The village sits in Northern Tutchone territory; Tagé Cho Hudän Interpretive Centre tells the community’s story."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In and around Carmacks."
          },
          {
            "label": "Good to know",
            "text": "Check the interpretive centre’s hours."
          }
        ],
        "link": {
          "label": "Yukon Museum Guide: Tagé Cho Hudän",
          "url": "https://www.yukonmuseums.ca/cultural/tagecho/tagecho.html"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Five Finger Rapids',
      icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'Four rock islands split the Yukon River into five channels. A viewing platform reached by a long staircase (one visitor counted 219 steps) overlooks the rapids from a stop on the Klondike Highway about 24 km north of Carmacks.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "Four rock islands split the Yukon River into five channels; a viewing platform overlooks them from the Klondike Highway.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trail",
                "text": "A 1.4 km return trail with interpretive panels; one visitor counted 219 steps to the platform."
              },
              {
                "title": "Season",
                "text": "The listed season is May 8 to October 1, 2026; the gate is open year-round."
              },
              {
                "title": "Blasting",
                "text": "From about 1900 to 1927 blasting widened the channel by about 6 m."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "The stairs may be icy; no winter maintenance details were found."
              },
              {
                "title": "Free",
                "text": "Free."
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
            "text": "About 24 km north of Carmacks on the Klondike Highway."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Yukon.ca: Five Finger Rapids Recreation Site",
          "url": "https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/site/five-finger-rapids-recreation-site"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tantalus Butte',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'The hill above the village and a scenic backdrop for Carmacks. Ask at the visitor centre about its coal-mining history.',
      tags: [{ label: 'Views', level: 'blue' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "The hill above the village and a scenic backdrop for Carmacks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "A landmark over the village."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "No source for the coal-mining story was found; ask at the interpretive centre."
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
            "text": "Near the village."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yukon River Paddling',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Carmacks is a popular stop for canoeists paddling the Yukon River from Whitehorse toward Dawson City — a journey of several days.',
      tags: [{ label: 'Multi-day', level: 'caution' }, { label: 'Classic route', level: 'gold' }],
      details: {
        "lead": "Carmacks is a popular stop on the multi-day Yukon River canoe route from Whitehorse toward Dawson City.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Route",
                "text": "A multi-day paddle of the Yukon River."
              },
              {
                "title": "Launch",
                "text": "Boat launch and river access in the village."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "A summer trip."
              },
              {
                "title": "Details",
                "text": "No 2027 outfitter or permit details were verified."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to paddle; gear and shuttles extra."
          },
          {
            "label": "Getting there",
            "text": "Carmacks is on the Klondike Highway."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Carmacks Visitor Information Centre',
      icon: 'ℹ️', iconSrc: '/icons/attractions/ph_info-thin.svg',
      text: 'Local history, First Nation culture and trip-planning advice for the surrounding region. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "Local history, First Nation culture and trip-planning advice; the Tagé Cho Hudän Interpretive Centre is on the highway north of the bridge.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "One guide lists mid-May to mid-September, daily 9 am–6 pm; another gave Tuesday to Saturday 10 am–5 pm for 2024."
              },
              {
                "title": "Off-season",
                "text": "Appointments on 867-863-5831."
              },
              {
                "title": "Season",
                "text": "The 2026 season is not confirmed by any source."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Call",
                "text": "Phone before visiting."
              },
              {
                "title": "Closed in 2023",
                "text": "Travel Yukon noted it was closed for the 2023 season."
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
            "text": "Klondike Highway, north of the bridge."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Yukon Museum Guide: Tagé Cho Hudän",
          "url": "https://www.yukonmuseums.ca/cultural/tagecho/tagecho.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Little Salmon Lake',
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      text: 'A quiet lake south of the village, popular for fishing and camping away from the highway.',
      tags: [{ label: 'Fishing', level: 'safe' }, { label: 'Camping', level: 'olive' }],
      details: {
        "lead": "A lake with a Yukon government campground, popular for fishing, where lake trout are carefully managed.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Campground",
                "text": "On the west end of the lake; the official listing shows 22 sites, another guide 15; fees about $18–20 a night."
              },
              {
                "title": "Access",
                "text": "The gate is open year-round, but the campground is not plowed in winter, per one guide."
              },
              {
                "title": "Fishing",
                "text": "Special restrictions protect lake trout; the daily and possession limits changed here."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Regulations",
                "text": "Check the Yukon fishing regulations summary before fishing."
              },
              {
                "title": "Boat launch",
                "text": "A boat launch is noted."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Camping fee; fishing licence needed."
          },
          {
            "label": "Getting there",
            "text": "Along the Klondike Highway; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Yukon.ca: Little Salmon Lake Campground",
          "url": "https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/site/little-salmon-lake"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Rapids and Highway Country',
  outdoor: [
    { icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Five Finger Rapids Viewpoint', dist: '≈20 km north', text: 'Stairs down to a platform overlooking the rock channels.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Yukon River Paddling', dist: 'From the village', text: 'A classic stretch of the long canoe route to Dawson City.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Little Salmon Lake', text: 'Lake trout and other northern species.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tantalus Butte Trails', dist: 'Above the village', text: 'Short walks with views over the Yukon River valley.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', name: 'Campbell Highway', dist: 'From the junction', text: 'A quieter route east toward Faro and Ross River.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife Watching', dist: 'Surrounding area', text: 'Moose and other wildlife along the river and highways.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Highway Diners', area: 'Village centre', areaLevel: 'gold', text: 'Simple stops for Klondike Highway travellers.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'River Fish', area: 'Local menus', areaLevel: 'blue', text: 'Yukon River salmon where available.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Village centre', areaLevel: 'purple', text: 'Coffee and quick bites near the highway junction.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'General Store', area: 'Village centre', areaLevel: 'olive', text: 'Basic groceries and supplies for the road.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'The Yukon River ice breaks up; the canoe season hasn’t started yet.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'River season', text: 'Peak time for paddling, road trips and visiting the rapids.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Quiet', text: 'Traffic and river trips wind down as the season turns.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'A frozen river and a small, quiet highway community.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Carmacks sits where the Klondike Highway (to Dawson City) meets the Campbell Highway (to Faro and Watson Lake).',
      time: '≈2 h from Whitehorse',
    },
    {
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By River',
      text: 'A common overnight stop for canoeists and kayakers paddling the Yukon River from Whitehorse.',
      time: 'Multi-day trip',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Seasonal or charter coach services sometimes stop here along the Klondike Highway. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Carmacks has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Village Centre',
      area: 'Walkable',
      text: 'Motels near the highway junction and general store.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Carmacks+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Carmacks%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'Five Finger Rapids',
      area: '≈20 min away',
      text: 'A roadside campground near the viewpoint.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Five+Finger+Rapids+Yukon', level: 'blue' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Little Salmon Lake',
      area: 'South of the village',
      text: 'A quieter campground near the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Little+Salmon+Lake+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Local Transit',
      text: 'Carmacks has no public bus system — the village centre is a short walk, and a car (or canoe) covers the rest.',
      linkLabel: 'Yukon government',
      linkUrl: 'https://yukon.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The village centre is a few short blocks.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed to reach Five Finger Rapids and onward highways.' },
          { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Canoe', text: 'Many visitors arrive and leave by river.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Rapids tip:',
      text: 'The Five Finger Rapids viewpoint involves a steep staircase down and back up — wear good shoes and take your time.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Carmacks has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Carmacks / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel & supplies: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Five Finger Rapids viewpoint: free' },
      { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'River access: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Fuel Up', text: 'Carmacks is a key supply stop between Whitehorse and Dawson City — fill up here.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'River Safety', text: 'The Yukon River current is strong and cold — paddlers should be well prepared and watch conditions at Five Finger Rapids.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Watch for moose and other large animals on the highways, especially at dawn and dusk.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Highway conditions can be severe in winter — check road reports before travelling.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '📶', iconSrc: '/icons/attractions/ph_cell-signal-full-thin.svg', title: 'Limited Services', text: 'This is a small highway village — cell coverage and services thin out once you leave it.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Carmacks is on the traditional territory of the Little Salmon/Carmacks First Nation.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Carmacks Health Centre', '106 River Dr', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default CARMACKS;
