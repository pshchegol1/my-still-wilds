// Grand Falls-Windsor — данные страницы /city/grand-falls-windsor (Грэнд-
// Фолс-Виндзор, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Видео в бесплатных банках нет (Pexels по запросу "Grand Falls" выдаёт
// в основном Grand Rapids, Ниагарский и Гранд-Фолс в Аризоне — не те
// города). В шапке фото с Wikimedia Commons — центр города с воздуха,
// река Exploits на фоне, автор Quintin Soloviev, 25.06.2026, CC BY 4.0
// (GPS 48.929, -55.660 — совпадает с городом; подпись к файлу называет
// население 13 853, совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: 13 853 (-2.2% к 2016, 14171); другие
// агрегаторы дают заметно отличающиеся цифры (14287, 11986) с разной
// методикой — используем показатель Wikipedia/StatCan.
// История: два посёлка — Grand Falls (вокруг бумажного комбината) и
// Windsor — объединены в единый город (точный год слияния не нашли
// подтверждённым источником, не указываем конкретную дату). Комбинат
// AbitibiBowater (столетний newsprint mill) закрылся в 2009 году,
// лишив работы ~450 постоянных и ~500 сезонных/частично занятых
// сотрудников.
// Demasduit Regional Museum (бывший Mary March Provincial Museum) —
// переименован в 2022 году в честь Demasduit, беотукской женщины,
// которую похититель Джон Пейтон-младший назвал "Mary March"; новое
// имя выбрано, чтобы отличаться от Beothuk Interpretation Centre.
// Больница — Central Newfoundland Regional Health Centre, 50 Union St,
// 130 коек, ER заявлено 24/7 (данные стороннего агрегатора, не
// официального сайта — указываем с оговоркой).
// Транспорт: собственного городского автобуса не нашли; межгородской —
// DRL Coachlines по Trans-Canada Highway.
// Налог — HST 15%.
// Из общих знаний: река Exploits (лосось, самая длинная река острова),
// Salmonid Interpretation Centre, статус Grand Falls-Windsor как
// регионального центра центрального Ньюфаундленда, время в пути.

export const GRAND_FALLS_WINDSOR = {
  slug: 'grand-falls-windsor',
  name: 'Grand Falls-Windsor',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Heart of the Exploits Valley",
  accentLevel: 'danger',
  heroIcon: '🐟',
  heroImage: '/Cities/GrandFallsWindsor/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.9333, lon: -55.6625 },
  subtitle: "Regional Hub on the Exploits River",
  description:
    "Grand Falls-Windsor grew up around a century-old newsprint mill on the Exploits River, Newfoundland's longest river and one of its best Atlantic salmon runs. Today it's the commercial and service hub for central Newfoundland, with the Demasduit Regional Museum telling the region's Beothuk and settler history.",

  actions: [
    { label: 'Explore Grand Falls-Windsor', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈14K (2021)' },
    { label: 'Known For', value: 'Exploits River Salmon' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Newfoundland (UTC-3:30/-2:30)' },
    { label: 'To Gander', value: '≈50 min by car' },
    { label: "To St. John's", value: '≈4 h 30 min by car' },
  ],

  badges: ['Exploits River', 'Salmon Capital', 'Central NL Hub'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '13,853', label: 'People in the town in the 2021 census', level: 'danger' },
    { value: '2009', label: 'Year the century-old newsprint mill closed, ending AbitibiBowater’s operations here', level: 'purple' },
    { value: '2022', label: 'Year the Mary March Museum was renamed the Demasduit Regional Museum', level: 'blue' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Shops, restaurants and civic buildings',
      details: {
        "lead": "Shops, restaurants and civic buildings.",
        "see": [
          {
            "title": "Demasduit Regional Museum",
            "text": "At 24 St. Catherine Street; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town centre."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No individual venue was verified."
          }
        ],
        "link": {
          "label": "Exploits Connect: Demasduit Regional Museum",
          "url": "https://exploitsconnect.ca/directory/demasduit-regional-museum/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Former Grand Falls', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Mill Town', tagLevel: 'purple', meta: 'The original company town built around the paper mill',
      details: {
        "lead": "The original company town built around the paper mill.",
        "see": [
          {
            "title": "The mill",
            "text": "AbitibiBowater announced closure in December 2008 and production stopped in February 2009; its legacy shapes the town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Good to know",
            "text": "The mill site is not open to visitors."
          }
        ],
        "link": {
          "label": "CBC: mill closure anniversary",
          "url": "https://www.cbc.ca/news/canada/newfoundland-labrador/mill-closure-anniversary-grand-falls-windsor-1.5020839"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Former Windsor', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'olive', meta: 'The neighbouring community merged into today’s town',
      details: {
        "lead": "The neighbouring community merged into today’s town.",
        "see": [
          {
            "title": "Amalgamation",
            "text": "Grand Falls and Windsor voted to amalgamate in 1991."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "Canadian Encyclopedia: Grand Falls-Windsor",
          "url": "https://thecanadianencyclopedia.ca/en/article/grand-falls-windsor"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Exploits River', icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'The Atlantic salmon river the town sits on',
      details: {
        "lead": "The Atlantic salmon river the town sits on.",
        "see": [
          {
            "title": "Salmon",
            "text": "The river is known for Atlantic salmon; no source confirmed the claim that it is Newfoundland’s longest river."
          },
          {
            "title": "Season",
            "text": "Fall catch-and-release salmon angling is permitted on the Lower Exploits River from September 8 to October 7, 2026."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Through the town."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "A salmon licence is required; check DFO."
          }
        ],
        "link": {
          "label": "DFO: Anglers’ Guide 2026–27",
          "url": "https://www.nfl.dfo-mpo.gc.ca/en/anglers-guide-2026-2027-newfoundland-and-labrador-scheduled-salmon-rivers"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Mount Peyton Area', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'safe', meta: 'Services and hotels along the Trans-Canada Highway',
      details: {
        "lead": "Services and hotels along the Trans-Canada Highway.",
        "see": [
          {
            "title": "Services",
            "text": "Places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Trans-Canada Highway."
          },
          {
            "label": "Good to know",
            "text": "A convenient base for central Newfoundland."
          }
        ],
        "link": {
          "label": "Newfoundland and Labrador tourism",
          "url": "https://www.newfoundlandlabrador.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Demasduit Regional Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Formerly the Mary March Museum, renamed after a December 2021 announcement to honour Demasduit, a Beothuk woman — covering Beothuk history and the region’s settler and industrial past.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "Formerly the Mary March Museum, renamed after a December 2021 announcement to honour Demasduit, a Beothuk woman.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The Rooms says regional museums are open about the first week of May to the first week of October; tourism lists April 29 to October 4. Closed now."
              },
              {
                "title": "Hours",
                "text": "The Rooms lists Sunday noon–5 pm; a directory gives other hours that look unreliable."
              },
              {
                "title": "Admission",
                "text": "Listed at $6 adults, $4 seniors and students, free for 16 and under; verify."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Contact",
                "text": "24 St. Catherine Street; (709) 292-4522 in season."
              },
              {
                "title": "Owner",
                "text": "Owned and operated by The Rooms."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee in season."
          },
          {
            "label": "Getting there",
            "text": "24 St. Catherine Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "The Rooms: Demasduit Regional Museum",
          "url": "https://www.therooms.ca/DRM"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Salmonid Interpretation Centre',
      icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'An underwater viewing area on the Exploits River where you can watch Atlantic salmon migrate upstream — a highlight for visitors in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "An underwater viewing area on the Exploits River for watching Atlantic salmon migrate upstream, a summer attraction.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Viewing",
                "text": "Watching salmon migrate upstream, in season."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "No 2026 season or hours were found; it is not running in winter."
              },
              {
                "title": "Confirm",
                "text": "Ask the town or The Rooms before going."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Listed as free; confirm."
          },
          {
            "label": "Getting there",
            "text": "On the Exploits River."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Newfoundland and Labrador tourism",
          "url": "https://www.newfoundlandlabrador.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Exploits River',
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      text: "An Atlantic salmon river the town sits on; a salmon licence is required.",
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Iconic', level: 'purple' }],
      details: {
        "lead": "An Atlantic salmon river the town sits on; a salmon licence is required.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "Catch-and-release salmon angling on the Lower Exploits from September 8 to October 7, 2026."
              },
              {
                "title": "Claim",
                "text": "No source confirmed it is Newfoundland’s longest river."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Licence",
                "text": "Required; check DFO’s anglers’ guide."
              },
              {
                "title": "Closed now",
                "text": "The 2026 season has ended."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Licence required."
          },
          {
            "label": "Getting there",
            "text": "Through the town."
          },
          {
            "label": "Best time",
            "text": "Fall, per the 2026 season."
          }
        ],
        "link": {
          "label": "DFO: Anglers’ Guide 2026–27",
          "url": "https://www.nfl.dfo-mpo.gc.ca/en/anglers-guide-2026-2027-newfoundland-and-labrador-scheduled-salmon-rivers"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Former Paper Mill Site',
      icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg',
      text: 'The town grew up around a newsprint mill that closed in 2009 — its legacy still shapes the downtown and local identity.',
      tags: [{ label: 'History', level: 'olive' }, { label: 'View only', level: 'caution' }],
      details: {
        "lead": "The town grew up around a newsprint mill that closed in 2009.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Closure",
                "text": "AbitibiBowater announced it in December 2008; production stopped in February 2009 (some sources say March)."
              },
              {
                "title": "Legacy",
                "text": "Still shapes the downtown and local identity."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "View only",
                "text": "Not open to visitors."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view from outside."
          },
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "CBC: mill closure anniversary",
          "url": "https://www.cbc.ca/news/canada/newfoundland-labrador/mill-closure-anniversary-grand-falls-windsor-1.5020839"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Central Newfoundland Day Trips',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'A convenient base for exploring central Newfoundland, including nearby lakes, trails and smaller communities along the Exploits Valley.',
      tags: [{ label: 'Regional hub', level: 'blue' }, { label: 'Day trips', level: 'gold' }],
      details: {
        "lead": "A convenient base for central Newfoundland, including nearby lakes, trails and communities along the Exploits Valley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hub",
                "text": "On the Trans-Canada Highway."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Plan",
                "text": "No specific day-trip details were verified; ask at the town’s visitor information."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies."
          },
          {
            "label": "Getting there",
            "text": "By car."
          },
          {
            "label": "Time to allow",
            "text": "A day per trip."
          }
        ],
        "link": {
          "label": "Newfoundland and Labrador tourism",
          "url": "https://www.newfoundlandlabrador.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Rivers, Lakes and the Exploits Valley',
  outdoor: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Exploits River Salmon Fishing', dist: 'In town', text: 'Licensed Atlantic salmon angling on one of the island’s top rivers.' },
    { icon: '👀', iconSrc: '/icons/attractions/ph_eye-thin.svg', name: 'Salmonid Interpretation Centre', dist: 'In town', text: 'Watch salmon migrate through an underwater viewing window.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Trails', dist: 'Around town', text: 'Walking and cycling trails along the river and through town.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Exploits River', text: 'Canoeing and kayaking on calmer stretches.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall Colour', dist: 'Exploits Valley', text: 'Vivid boreal foliage across the surrounding hills.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Regional trails', text: 'Popular winter activity on nearby trail networks.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Atlantic Salmon', area: 'Local menus', areaLevel: 'blue', text: 'From the Exploits River, when in season.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Local restaurants', areaLevel: 'danger', text: 'Cod, crab and other Atlantic catches.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'purple', text: 'Local bars and casual dining.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops in the town centre.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Jiggs Dinner & Toutons', area: 'Local restaurants', areaLevel: 'safe', text: 'Traditional Newfoundland comfort food.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Partridgeberries', area: 'Fall', areaLevel: 'olive', text: 'A Newfoundland fall specialty, in jams and desserts.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'The Exploits River runs high with snowmelt.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Salmon run', text: 'Peak season for salmon viewing, fishing and river trails.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Bright boreal colour across the Exploits Valley.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Cold and snowy, with good snowmobile trails nearby.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway runs through town, roughly midway across the island of Newfoundland.',
      time: '≈50 min from Gander',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'The nearest airport with scheduled service is Gander International Airport (YQX), about 50 minutes away.',
      time: '≈50 min from YQX',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'DRL Coachlines runs a daily intercity coach across Newfoundland, stopping in Grand Falls-Windsor. There is no local city bus system.',
      time: 'Check DRL schedule',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries from Nova Scotia dock several hours away, at Port aux Basques or Argentia.',
      time: 'Several hours’ drive from the ferry',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and motels near the town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Grand+Falls-Windsor+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Grand%20Falls-Windsor%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Trans-Canada Highway',
      area: 'Near Mount Peyton',
      text: 'Chain hotels convenient for road trips across the island.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Grand+Falls-Windsor+highway', level: 'blue' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Exploits River',
      area: 'Nearby',
      text: 'Fishing lodges and cabins along the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Exploits+River+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No Local Transit',
      text: "Grand Falls-Windsor has no municipal bus system — a car or taxi is the way to get around town, and DRL Coachlines connects it to the rest of the island.",
      linkLabel: 'Town of Grand Falls-Windsor',
      linkUrl: 'https://www.grandfallswindsor.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around town.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the river, lakes and day trips.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Intercity Bus', text: 'DRL Coachlines connects to other Newfoundland towns.' },
        ],
      },
    ],
    proTip: {
      label: 'Salmon tip:',
      text: 'Visit the Salmonid Interpretation Centre in summer to watch salmon migrate upstream through an underwater viewing window — timing depends on the run.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services, including hotel stays in Grand Falls-Windsor.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Grand Falls-Windsor / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '👀', iconSrc: '/icons/attractions/ph_eye-thin.svg', label: 'Salmonid Interpretation Centre: free' },
      { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', label: 'Riverside walking: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Fishing Licences', text: 'Atlantic salmon angling on the Exploits River requires a Newfoundland & Labrador licence and follows seasonal rules.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no local bus network.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'The Trans-Canada through central Newfoundland can see heavy snow — check conditions before long drives.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Moose are common on central Newfoundland highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Newfoundland Time: UTC-3:30 in winter, UTC-2:30 in summer — a half-hour offset unique to the island.' },
    { icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', title: 'Mill History', text: 'The town’s identity is closely tied to its former paper mill, which closed in 2009 after a century of operation — a big part of local history and conversation.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: "Grand Falls-Windsor is on the ancestral homeland of the Beothuk, and the island of Newfoundland is within the traditional territory of the Mi'kmaq." },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Central Newfoundland Regional Health Centre', '50 Union St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default GRAND_FALLS_WINDSOR;
