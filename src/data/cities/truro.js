// Truro — данные страницы /city/truro (Труро, НОВАЯ ШОТЛАНДИЯ)
// Видео Труро в бесплатных банках нет (осторожно: Truro в Корнуолле, Англия).
// В шапке фото с Wikimedia Commons — Труро сверху летом, долина до залива
// Кобекуид, автор Quintin Soloviev, июль 2025, CC BY 4.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (12 954, город).
// Victoria Park: Joseph Howe Falls, Jacob's Ladder ≈175 ступеней; площадь
// в источниках разная (400–3000 акров) — не указываем. Приливная волна —
// Salmon River, смотровая у Hwy 102 exit 14 (AAA).
// Транспорт: Colchester Transportation Cooperative — door-to-door для всех;
// тарифы не нашли. Больница — Colchester East Hants Health Centre,
// 600 Abenaki Rd (24/7). HST 14%.
// Деревья-скульптуры, Burntcoat Head, VIA Ocean — из общих знаний.

export const TRURO = {
  slug: 'truro',
  name: 'Truro',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · The Hub Town',
  accentLevel: 'blue',
  heroIcon: '🌊',
  heroImage: '/Cities/Truro/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.3650, lon: -63.2861 },
  subtitle: 'Hub of Nova Scotia, Edge of the Fundy Tides',
  description:
    'Where Nova Scotia’s main highways and railway meet, Truro is the province’s crossroads — and a gateway to the Bay of Fundy’s record tides. Watch a tidal bore surge up the Salmon River, climb past waterfalls in a wooded gorge in Victoria Park, and wander a downtown dotted with sculptures carved from old elm trees.',

  actions: [
    { label: 'Explore Truro', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13K (2021)' },
    { label: 'County', value: 'Colchester' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈1 h by car' },
    { label: 'To Burntcoat Head', value: '≈1 h by car' },
  ],

  badges: ['Hub Town', 'Tidal Bore', 'Victoria Park'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '12,954', label: 'People in the town in the 2021 census — up 5.7% since 2016', level: 'blue' },
    { value: '≈175', label: 'Steps on Jacob’s Ladder, the staircase up the side of Victoria Park’s gorge', level: 'gold' },
    { value: '2×', label: 'A day the tide surges up the Salmon River as a tidal bore', level: 'purple' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Prince Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Shops, cafés, civic square and tree sculptures',
      details: {
        "lead": "The town centre, with the tree sculptures and the Colchester Historeum.",
        "see": [
          {
            "title": "Colchester Historeum",
            "text": "At 29 Young Street; Tuesday to Friday 10 am–4 pm, closed noon–1 pm; archives by appointment. Phone (902) 895-6284."
          },
          {
            "title": "Tree sculptures",
            "text": "Carved from elm trunks killed by Dutch elm disease, scattered through town; no 2026 map was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Truro."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Hours may differ on November 27, 2026."
          }
        ],
        "link": {
          "label": "Colchester Historeum",
          "url": "http://www.colchesterhistoreum.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Victoria Park', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Gorge, waterfalls, hemlock forest and trails at the edge of downtown',
      details: {
        "lead": "A large wooded park beside downtown with a gorge, waterfalls and old-growth hemlocks.",
        "see": [
          {
            "title": "Falls",
            "text": "Joseph Howe Falls and Waddell Falls along Lepper Brook, about 1 km from the main parking lot."
          },
          {
            "title": "Jacob’s Ladder",
            "text": "175 steps; most people descend it, the more adventurous climb it."
          },
          {
            "title": "Winter",
            "text": "Sources say about 20 km of groomed ski and snowshoe trails, while another says winter trails are not maintained; use at your own risk."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the edge of downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Park size is given as 1,000 acres to 3,000 hectares. Use spikes on ice; the falls freeze into shapes."
          }
        ],
        "link": {
          "label": "Victoria Park Truro",
          "url": "https://www.victoriaparktruro.ca/top-10-things-to-do"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Salmon River', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Tides', tagLevel: 'blue', meta: 'Tidal bore viewing and marsh dykes north of town',
      details: {
        "lead": "The Fundy Discovery Site and tidal bore viewing north of town.",
        "see": [
          {
            "title": "Fundy Discovery Site",
            "text": "At 103 Tidal Bore Road, Lower Truro; it posts bore times for May to December 2026. Vehicles longer than 30 ft are barred from Tidal Bore Road from September 24, 2026 because of bridge construction."
          },
          {
            "title": "Truro viewing area",
            "text": "A municipal shore-side area with parking, a small visitor centre and an accessible view; the raised platform at the bend was reported closed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of Truro; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Check tide times first."
          }
        ],
        "link": {
          "label": "Fundy Discovery Site",
          "url": "https://fundydiscovery.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bible Hill', icon: '🐄', iconSrc: '/icons/attractions/ph_cow-thin.svg', tag: 'Farms', tagLevel: 'olive', meta: 'Neighbouring village with the agricultural campus and exhibition grounds',
      details: {
        "lead": "The neighbouring village with the agricultural campus and exhibition grounds.",
        "see": [
          {
            "title": "Agricultural campus",
            "text": "Farm and exhibition grounds; no visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Next to Truro."
          },
          {
            "label": "Good to know",
            "text": "Mostly a residential and farming community."
          }
        ],
        "link": {
          "label": "Town of Truro",
          "url": "https://www.truro.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Railway Station Area', icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', tag: 'Rail', tagLevel: 'purple', meta: 'VIA Rail stop on the Montréal–Halifax line',
      details: {
        "lead": "The VIA Rail stop on the Montréal–Halifax line.",
        "see": [
          {
            "title": "Station",
            "text": "The VIA Rail stop; check viarail.ca for current schedules."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Truro."
          },
          {
            "label": "Good to know",
            "text": "Train schedules change; confirm before planning."
          }
        ],
        "link": {
          "label": "VIA Rail",
          "url": "https://www.viarail.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Highway 102/104 Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Hub', tagLevel: 'danger', meta: 'Hotels and services at the province’s main crossroads',
      details: {
        "lead": "Hotels and services at the province’s main crossroads.",
        "see": [
          {
            "title": "Services",
            "text": "Places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Where Highways 102 and 104 meet."
          },
          {
            "label": "Good to know",
            "text": "A convenient base for Fundy tides and Victoria Park."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Victoria Park',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'A large wooded park right next to downtown, with Joseph Howe Falls and Waddell Falls in a deep gorge, old-growth hemlocks and Jacob’s Ladder — about 175 steps up the gorge wall. Trails for every level.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "A wooded park next to downtown with Joseph Howe Falls, Waddell Falls, old-growth hemlocks and Jacob’s Ladder.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Falls",
                "text": "Joseph Howe Falls and Waddell Falls sit in the Lepper Brook gorge, about 1 km from the main lot."
              },
              {
                "title": "Jacob’s Ladder",
                "text": "175 steps up the gorge wall."
              },
              {
                "title": "Hemlocks",
                "text": "A stately old-growth Eastern hemlock forest."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Open year-round; the park is maintained April to November, though one source cites 20 km of groomed ski trails."
              },
              {
                "title": "Ice",
                "text": "Wear ice spikes and keep off groomed ski tracks."
              },
              {
                "title": "Frozen falls",
                "text": "The falls freeze into unique shapes."
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
            "text": "Next to downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Victoria Park Truro",
          "url": "https://www.victoriaparktruro.ca/top-10-things-to-do"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Salmon River Tidal Bore',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Twice a day the incoming Fundy tide pushes a wave up the Salmon River against its current. The Fundy Discovery Site at 103 Tidal Bore Road in Lower Truro posts bore times through December 2026 — check the tide timetable.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Timed', level: 'caution' }],
      details: {
        "lead": "Twice a day the incoming Fundy tide pushes a wave up the Salmon River against its current.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fundy Discovery Site",
                "text": "103 Tidal Bore Road, Lower Truro; posts tidal bore times May to December 2026."
              },
              {
                "title": "Truro viewing area",
                "text": "A municipal shore-side area with parking and a small visitor centre; the raised platform was reported closed."
              },
              {
                "title": "Large vehicles",
                "text": "Vehicles over 30 ft are barred from Tidal Bore Road from September 24, 2026 during bridge work."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tide times",
                "text": "Check bore times; the wave varies with the tide."
              },
              {
                "title": "Palliser",
                "text": "An old forum post mentions lighted viewing at the Palliser; confirm before relying on it."
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
            "text": "North of Truro; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Fundy Discovery Site",
          "url": "https://fundydiscovery.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tree Sculptures',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'After Dutch elm disease killed many of the town’s elms, the trunks were carved into sculptures scattered through town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Self-guided', level: 'purple' }],
      details: {
        "lead": "Elm trunks killed by Dutch elm disease carved into sculptures scattered through town.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "What",
                "text": "Carved from the trunks of elms that succumbed to Dutch elm disease."
              },
              {
                "title": "Where",
                "text": "Scattered throughout the town."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Map",
                "text": "No 2026 map or count was found; ask at the visitor centre."
              },
              {
                "title": "Free",
                "text": "Free to see."
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
            "text": "Around Truro."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Town of Truro",
          "url": "https://www.truro.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Burntcoat Head Park',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'About an hour away on the Minas Basin, a site associated with some of the highest tides ever recorded. Walk the ocean floor at low tide, then watch it flood.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Tide times', level: 'caution' }],
      details: {
        "lead": "On the Minas Basin, a park known for some of the highest tides recorded; the ocean floor is walkable at low tide.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Open mid-May to mid-October (about May 15 to October 15); it is closed now."
              },
              {
                "title": "Tides",
                "text": "A range of 16.3 m (53.5 ft) was recorded and cited by the Guinness Book in 1975; other sources give different figures."
              },
              {
                "title": "Lighthouse",
                "text": "A replica lighthouse and interpretive centre, trails and displays."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Guided walks",
                "text": "Low-tide ocean-floor walks run only on select days between May and October."
              },
              {
                "title": "Tide speed",
                "text": "The tide comes in faster than most people expect."
              },
              {
                "title": "Owner",
                "text": "Operated by the Municipality of East Hants."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check the park’s site."
          },
          {
            "label": "Getting there",
            "text": "About an hour from Truro by car."
          },
          {
            "label": "Best time",
            "text": "Summer, timed to the tide."
          }
        ],
        "link": {
          "label": "Burntcoat Head Park",
          "url": "https://www.burntcoatheadpark.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tidal Bore Rafting',
      icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'On the Shubenacadie River south of town, outfitters run Zodiac rides through the rapids created by the incoming bore. Seasonal.',
      tags: [{ label: 'Adventure', level: 'danger' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "Outfitters run Zodiac rides through the rapids created by the incoming bore on the Shubenacadie River.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "May to October, peaking July to August; Shubie River Wranglers published a 2026 tide schedule."
              },
              {
                "title": "Closed now",
                "text": "The 2026 season is over."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book",
                "text": "Check the outfitter’s site for 2027 bookings and prices."
              },
              {
                "title": "Tides",
                "text": "Trips are scheduled around the tide."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm with the outfitter."
          },
          {
            "label": "Getting there",
            "text": "On the Shubenacadie River south of Truro."
          },
          {
            "label": "Best time",
            "text": "July and August."
          }
        ],
        "link": {
          "label": "Tidal Bore Rafting guide",
          "url": "https://novascotiavacation.ca/guides/tidal-bore-rafting/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Colchester Historeum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The county museum and archives, covering Mi’kmaw, Acadian and settler history. Check hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "The county museum and archives at 29 Young Street, on Mi’kmaw, Acadian and settler history.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Tuesday to Friday 10 am–4 pm, closed noon–1 pm; archives by appointment."
              },
              {
                "title": "Admission",
                "text": "No current price found; an old listing gave $2."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Black Friday",
                "text": "Hours may differ on November 27, 2026."
              },
              {
                "title": "Phone",
                "text": "(902) 895-6284."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee; confirm."
          },
          {
            "label": "Getting there",
            "text": "29 Young Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Colchester Historeum",
          "url": "http://www.colchesterhistoreum.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Gorges, Marshes and Fundy Tides',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Victoria Park Trails', dist: 'Downtown', text: 'Gorge trails, waterfalls and forest loops.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Tidal Bore', dist: 'Salmon River', text: 'Watch the tide reverse the river twice daily.' },
    { icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Bore Rafting', dist: 'Shubenacadie River', text: 'Muddy, thrilling rides on the incoming tide.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Marshes', text: 'Eagles and shorebirds on the dykelands.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cobequid Trail', dist: 'Truro area', text: 'Multi-use trail along the Salmon River and bay.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Trails', dist: 'Victoria Park', text: 'Snowshoeing and frozen waterfalls in winter.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Local restaurants', areaLevel: 'danger', text: 'Lobster, scallops and chowder.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Farm Produce', area: 'Farmers’ market', areaLevel: 'safe', text: 'Colchester County farms supply weekly markets.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Local brewpubs.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Prince Street', areaLevel: 'blue', text: 'Coffee shops in the downtown core.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'gold', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Waterfalls', text: 'Snowmelt makes Victoria Park’s falls roar; trails can be muddy.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Rafting season', text: 'Warm days for trails, tidal bore rafting and markets.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Brilliant foliage in the gorge and countryside.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Snow and storms; frozen falls in the park.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 102 runs south to Halifax and Highway 104 (the Trans-Canada) east–west — Truro sits where they meet.',
      time: '≈1 h from Halifax',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops at Truro a few times a week.',
      time: '≈1 h 30 min to Halifax by train',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is about halfway between Truro and Halifax.',
      time: '≈40 min by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches between Halifax and other Maritime cities stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Truro',
      area: 'Town & highway',
      text: 'Hotels near the highway interchanges and downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Truro+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Truro%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'Tidal Bore Area',
      area: 'Riverside',
      text: 'Campgrounds and inns near the Salmon and Shubenacadie rivers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Colchester+County+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      title: 'Near Victoria Park',
      area: 'Walkable',
      text: 'B&Bs within walking distance of the park and downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Truro+Victoria+Park', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg',
      title: 'Colchester Transportation Cooperative',
      text: 'There is no fixed-route city bus. The Colchester Transportation Cooperative offers door-to-door rides across the county, open to everyone and booked in advance. The town and county have studied adding fixed-route transit.',
      linkLabel: 'Town of Truro',
      linkUrl: 'https://www.truro.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'We could not find a current fare table — contact the cooperative for prices and booking.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Door-to-door rides: book ahead', 'Taxis: local', 'Car: for tides & beaches'],
        },
        linkLabel: 'Town of Truro',
        linkUrl: 'https://www.truro.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and Victoria Park are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Cobequid Trail and quiet roads.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the tidal bore and Fundy shore.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Tide tip:',
      text: 'Look up the tidal bore timetable before you go — the wave arrives at a different time each day and only lasts a few minutes.',
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
      { label: 'Truro / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Rafting tours: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', label: 'Victoria Park: free' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Tidal bore viewing: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Rafting guides: 10–15%.',
  },

  practical: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Tide Safety', text: 'Fundy tides rise fast — never walk out on mud flats without checking tide times, and stay off riverbanks during the bore.' },
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not Cornwall', text: 'Add “Nova Scotia” when booking — Truro in Cornwall, England, often comes up first.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', title: 'Gorge Trails', text: 'Victoria Park’s stairs and gorge paths can be slippery when wet or icy.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storms', text: 'Post-tropical storms in late summer and fall can flood low areas near the rivers.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car Helps', text: 'No city buses — a car makes Fundy day trips easy.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Truro is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Millbrook First Nation borders the town.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Colchester East Hants Health Centre', '600 Abenaki Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default TRURO;
