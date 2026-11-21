// Saint John — данные страницы /city/saint-john (Сент-Джон, НЬЮ-БРАНСУИК)
// Осторожно: не St. John's (Ньюфаундленд) — на Pexels по запросу
// "Saint John New Brunswick" почти все дрон-клипы на деле St. John's
// (Signal Hill, The Narrows), поэтому видео нет. В шапке фото с Wikimedia
// Commons — центр и гавань с воздуха, круизный лайнер у причала, автор
// Quintin Soloviev, 12.10.2025, CC BY 4.0 (GPS 45.269, -66.076 — гавань
// Сент-Джона). Лицензия требует автора.
// Население — перепись 2021: город 69 895 (+3.4%), CMA 130 613 (saintjohn.ca).
// Транспорт — saintjohn.ca, с 01.01.2026: $3 наличными без сдачи,
// Transcard 10 поездок $27.30, месячный $83.50, приложение SJTRides.
// Налог — HST 15%; сбор с гостиниц 3.5% (по данным 2019–2023 — уточнять).
// Больница — Saint John Regional Hospital, 400 University Ave, приёмное 24/7,
// единственный травмацентр I уровня в NB (ERstat/Horizon).
// Паром Fundy Rose в Дигби — чуть больше 2 ч (Bay Ferries); расписание 2026
// не подтверждено.
// Из общих знаний: Reversing Falls, City Market, NB Museum, Irving Nature
// Park, Rockwood Park, Fundy Trail, St. Martins, Carleton Martello Tower,
// город лоялистов (1785), время в пути.

export const SAINT_JOHN = {
  slug: 'saint-john',
  name: 'Saint John',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Port City on the Fundy',
  accentLevel: 'safe',
  heroIcon: '⚓',
  heroImage: '/Cities/SaintJohn/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.2733, lon: -66.0633 },
  subtitle: 'Historic Port City on the Bay of Fundy',
  description:
    'Where the Saint John River meets the Bay of Fundy, this historic port city packs Victorian brick streets, a lively market and a harbour busy with cruise ships. Watch the Fundy tides push the river backwards at the Reversing Falls, hike the coastal trails of Irving Nature Park and drive the Fundy Trail to sea caves and cliffs.',

  actions: [
    { label: 'Explore Saint John', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈70K (2021)' },
    { label: 'Metro Area', value: '≈131K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Fredericton', value: '≈1 h 15 min by car' },
    { label: 'Ferry to Digby, NS', value: 'Just over 2 h' },
  ],

  badges: ['Reversing Falls', 'Port City', 'Fundy Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '69,895', label: 'People in the city in the 2021 census — about 131K in the metro area', level: 'safe' },
    { value: '2×', label: 'A day the Fundy tide pushes the river backwards at the Reversing Falls', level: 'blue' },
    { value: '$3', label: 'Bus fare in 2026 — exact cash, or use the SJTRides app', level: 'gold' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Uptown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Victorian brick streets, King’s Square, pubs and the City Market',
      details: {
        "lead": "Victorian brick streets, King’s Square, pubs and the City Market in the heart of Saint John.",
        "see": [
          {
            "title": "City Market",
            "text": "At 47 Charlotte Street, established in 1876; one source calls it Canada’s oldest continuously operating farmers’ market."
          },
          {
            "title": "King’s Square",
            "text": "One of the public squares in the Trinity Royal area."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Hours change on holidays and cruise-ship days."
          }
        ],
        "link": {
          "label": "Discover Saint John: City Market",
          "url": "https://www.discoversaintjohn.com/place/discover-saint-john-city-market"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waterfront & Market Square', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'blue', meta: 'Harbour Passage trail, Market Square and the cruise ship terminal',
      details: {
        "lead": "The harbour, Harbour Passage and the cruise ship terminal.",
        "see": [
          {
            "title": "Harbour Passage",
            "text": "A wide paved trail along the harbour from Uptown to the Reversing Falls, linking the north and west sides with Uptown."
          },
          {
            "title": "New Brunswick Museum",
            "text": "Older listings put it at Market Square; it has been listed as temporarily closed, with a revitalised museum planned for Douglas Avenue."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the harbour in Uptown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Confirm museum status with the New Brunswick Museum."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick: Harbour Passage",
          "url": "https://tourismnewbrunswick.ca/listing/harbour-passage"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Reversing Falls', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Tides', tagLevel: 'purple', meta: 'Lookouts over the river gorge on the west side',
      details: {
        "lead": "Lookouts over the river gorge on the west side, where the tide reverses the flow.",
        "see": [
          {
            "title": "Tide times",
            "text": "The Government of Canada’s Reversing Falls station gives turning times; for November 22, 2026 the turns are listed at about 00:56, 08:30, 13:13 and 21:01 (AST)."
          },
          {
            "title": "Falls River Park",
            "text": "A city park with free parking and a large viewing deck."
          },
          {
            "title": "Timing",
            "text": "One visitor says the reversal occurs just after slack tide; times matter."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the west side, at the gorge."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Skywalk and lookout operating hours were not confirmed."
          }
        ],
        "link": {
          "label": "Government of Canada: Reversing Falls tides",
          "url": "https://tides.gc.ca/en/stations/00066"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Side', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Local', tagLevel: 'olive', meta: 'Carleton Martello Tower, Irving Nature Park and the ferry terminal',
      details: {
        "lead": "The west side, with the Carleton Martello Tower, Irving Nature Park and the ferry terminal.",
        "see": [
          {
            "title": "Carleton Martello Tower",
            "text": "The tower is closed this year for restoration; the visitor centre and grounds remain open."
          },
          {
            "title": "Irving Nature Park",
            "text": "A coastal park on the Bay of Fundy; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the harbour from Uptown."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "A car is easiest."
          }
        ],
        "link": {
          "label": "Parks Canada: Carleton Martello Tower",
          "url": "https://parks.canada.ca/lhn-nhs/nb/carleton/visit"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Rockwood Park', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Huge urban park of about 890 hectares with lakes and about 55 trails',
      details: {
        "lead": "One of Canada’s largest municipal parks, about 890 hectares, just north of Uptown.",
        "see": [
          {
            "title": "Trails and lakes",
            "text": "About 55 trails and footpaths and 10 to 13 lakes, depending on the source."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 10–15 minutes by car from Uptown, 30–40 minutes on foot or bike."
          },
          {
            "label": "Time to allow",
            "text": "Two hours to half a day."
          },
          {
            "label": "Good to know",
            "text": "No source confirmed the cliff climbing; check what is open."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick: Rockwood Park",
          "url": "https://tourismnewbrunswick.ca/listing/rockwood-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Trinity Royal', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'Preserved 19th-century architecture rebuilt after the 1877 fire',
      details: {
        "lead": "A preserved area of Victorian brick buildings rebuilt after the Great Fire of June 20, 1877.",
        "see": [
          {
            "title": "The fire",
            "text": "“Black Wednesday” destroyed about 1,612 buildings, left 13,000 homeless and killed 22 people."
          },
          {
            "title": "Heritage area",
            "text": "Protected by law since 1982; sources describe it as roughly 20 blocks, including the Loyalist Burial Ground, Queen’s Square and King’s Square."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Uptown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The city offers historic walking tours."
          }
        ],
        "link": {
          "label": "Discover Saint John: Trinity Royal",
          "url": "https://www.discoversaintjohn.com/trinity-royal-preservation-area"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Reversing Falls Rapids',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'At high tide the Bay of Fundy pushes the Saint John River upstream through a narrow gorge, creating rapids that change direction twice a day. Visit at both low and high tide to see the difference.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "The Fundy tide pushes the Saint John River upstream through a narrow gorge, so the rapids change direction twice a day.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tide station",
                "text": "The Government of Canada’s Reversing Falls station lists the turning points; for November 22, 2026: about 00:56, 08:30, 13:13 and 21:01 (AST)."
              },
              {
                "title": "Viewing",
                "text": "Falls River Park has free parking and a large viewing deck."
              },
              {
                "title": "Both tides",
                "text": "See it at low and high tide to see the difference."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Timing",
                "text": "The reversal is clearest just after slack tide."
              },
              {
                "title": "Confirm",
                "text": "Skywalk and lookout hours were not found; check with the operators."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free at the park."
          },
          {
            "label": "Getting there",
            "text": "West side of Saint John."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Government of Canada: Reversing Falls tides",
          "url": "https://tides.gc.ca/en/stations/00066"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Saint John City Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'A historic covered market in the heart of Uptown, under a roof shaped like an upturned ship’s hull. Local seafood, dulse, cheese and lunch counters.',
      tags: [{ label: 'Food', level: 'danger' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A historic covered market at 47 Charlotte Street, established in 1876, with a roof shaped like an inverted ship’s hull.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "Described as the oldest continuously operating farmers’ market in Canada."
              },
              {
                "title": "Hours",
                "text": "Listings conflict: about 7–10 am to 6 pm on weekdays and to 5 pm on Saturday; Canada Day 2026 was 10 am–3 pm."
              },
              {
                "title": "Food",
                "text": "Local seafood, dulse, cheese and lunch counters."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Holidays",
                "text": "Hours vary on holidays and cruise-ship days; vendors set their own hours."
              },
              {
                "title": "Confirm",
                "text": "Check before going."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter."
          },
          {
            "label": "Getting there",
            "text": "47 Charlotte Street, Uptown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Discover Saint John: City Market",
          "url": "https://www.discoversaintjohn.com/place/discover-saint-john-city-market"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Irving Nature Park',
      icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'Coastal trails and boardwalks on a peninsula just west of the city — look for seals and shorebirds. Free.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'safe' }],
      details: {
        "lead": "Coastal trails and boardwalks on a peninsula west of the city, with 11 km of rugged Bay of Fundy shoreline.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Sources describe a May to October season; hours of about 8 am–8 pm until mid-September, then 8 am–6 pm to mid-October."
              },
              {
                "title": "Seals",
                "text": "Seals can be thick on the rocks in mid-June and mid-October; there is a seal observation deck."
              },
              {
                "title": "Trails",
                "text": "Eight walking trails; the main loop is described as 9 to 10 km."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No winter access information was found; call 506-653-7367."
              },
              {
                "title": "Free",
                "text": "Free to enter."
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
            "text": "1790 Sand Cove Road, west of the city; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Summer to early autumn."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick: Irving Nature Park",
          "url": "https://tourismnewbrunswick.ca/listing/irving-nature-park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'New Brunswick Museum',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'The provincial museum has been listed as temporarily closed since 2025, with a revitalised museum planned for its original 1934 home on Douglas Avenue. Check before going.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Family', level: 'purple' }],
      details: {
        "lead": "The provincial museum is listed as temporarily closed, with a revitalised museum planned for its original 1934 home on Douglas Avenue.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Status",
                "text": "Listings show it temporarily closed since 2025, with no reopening date."
              },
              {
                "title": "Before closure",
                "text": "Saturday hours of 10 am–5 pm and admission of about $6–10."
              },
              {
                "title": "Whales",
                "text": "Earlier reviews mention the Hall of Great Whales; whether it is on view now is not confirmed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check the museum’s site or call before planning a visit."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable while closed."
          },
          {
            "label": "Getting there",
            "text": "Douglas Avenue (planned); older listings gave Market Square."
          },
          {
            "label": "Time to allow",
            "text": "Two hours when open."
          }
        ],
        "link": {
          "label": "New Brunswick Museum",
          "url": "https://en.wikipedia.org/wiki/New_Brunswick_Museum"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fundy Trail Parkway',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'About an hour east: a scenic road with lookouts, waterfalls and beaches along the Fundy cliffs. St. Martins, the village at the western end, is known for its sea caves — check tide times.',
      tags: [{ label: 'Day trip', level: 'gold' }, { label: 'Tide times', level: 'caution' }],
      details: {
        "lead": "A scenic road with lookouts, waterfalls and beaches along the Fundy cliffs, about an hour east of Saint John.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "May 15 to October 25, 2026, so it is closed now; the exact opening is confirmed by NB Parks each year."
              },
              {
                "title": "Fees",
                "text": "Two guides give $12.17 per adult, $10.43 seniors, $6.96 youth and $37.39 family (2026)."
              },
              {
                "title": "Interpretive Centre",
                "text": "At Big Salmon River, where Fundy Footpath hikers register."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources give 9 am–5 pm in shoulder season and up to 8 am–8 pm in summer."
              },
              {
                "title": "St. Martins",
                "text": "Known for its sea caves; check tide times."
              },
              {
                "title": "Winter",
                "text": "No winter closure rules were found; check NB Parks."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid in season, about $12 for adults."
          },
          {
            "label": "Getting there",
            "text": "About an hour east of Saint John by car."
          },
          {
            "label": "Best time",
            "text": "Late May to October."
          }
        ],
        "link": {
          "label": "Discover Saint John: Fundy Trail",
          "url": "https://www.discoversaintjohn.com/place/fundy-trail-provincial-park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Carleton Martello Tower',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A 19th-century stone fort with sweeping views over the harbour and city. A Parks Canada National Historic Site; the tower itself is closed this year for restoration, though the visitor centre and grounds stay open.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Views', level: 'gold' }],
      details: {
        "lead": "A 19th-century stone fort with sweeping views over the harbour and city, a Parks Canada National Historic Site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "Parks Canada says access to the tower is not available this year because of ongoing restoration."
              },
              {
                "title": "Visitor centre",
                "text": "The visitor centre and grounds stay open."
              },
              {
                "title": "Hours",
                "text": "Third-party listings conflict (about 10 am–5:30 pm, Saturday to Wednesday in one)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fees",
                "text": "Parks Canada mentions daily fees and free youth admission; adult prices were not found."
              },
              {
                "title": "Contact",
                "text": "Phone 506-636-4011."
              },
              {
                "title": "Not Quebec",
                "text": "Do not confuse it with the Martello tower in Quebec City."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check Parks Canada; visitor centre listed as free."
          },
          {
            "label": "Getting there",
            "text": "On the west side of Saint John."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Parks Canada: Carleton Martello Tower",
          "url": "https://parks.canada.ca/lhn-nhs/nb/carleton/visit"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Fundy Tides and Coastal Trails',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Harbour Passage', dist: 'Uptown', text: 'Waterfront trail from Market Square to the Reversing Falls.' },
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Irving Nature Park', dist: 'West Side', text: 'Coastal trails, seals and birdlife.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Rockwood Park', dist: 'North End', text: 'Lakes, hiking, mountain biking and rock climbing.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Sea Kayaking', dist: 'St. Martins', text: 'Paddle past the sea caves at high tide.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Fundy Footpath', dist: 'East of St. Martins', text: 'A tough multi-day coastal hike for experienced trekkers.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Whale Watching', dist: 'Bay of Fundy', text: 'Summer tours run from coastal towns in the region.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster & Seafood', area: 'Uptown', areaLevel: 'danger', text: 'Lobster rolls, scallops and chowder.' },
    { icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg', title: 'Dulse', area: 'City Market', areaLevel: 'safe', text: 'Dried Fundy seaweed — a salty local snack.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Uptown', areaLevel: 'purple', text: 'Breweries and pubs in historic buildings.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'King’s Square', areaLevel: 'blue', text: 'Coffee shops along the Uptown streets.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'gold', text: 'Wild New Brunswick blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Freshet', text: 'The river runs high with snowmelt; low areas can flood.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Cool & foggy', text: 'Mild days cooled by Fundy fog — great for hiking and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Cruise season', text: 'Fall colour and the busiest months for cruise ships.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snow, wind and freezing rain; Uptown pedways help.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Route 7 links Saint John with Fredericton, and Route 1 runs east to Moncton and west to the US border at St. Stephen.',
      time: '≈1 h 30 min from Moncton',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Bay Ferries’ Fundy Rose crosses the Bay of Fundy to Digby, Nova Scotia, in just over two hours. Book ahead in summer.',
      time: 'Just over 2 h to Digby',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Saint John Airport (YSJ) has flights to Toronto and other hubs; Moncton and Fredericton airports are alternatives.',
      time: '≈20 min to Uptown',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Saint John with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Uptown',
      area: 'Walkable',
      text: 'Hotels connected by pedways to the market and waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saint+John+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saint%20John%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'East Side',
      area: 'Near highway',
      text: 'Chain hotels near shopping and Route 1.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=East+Saint+John+New+Brunswick', level: 'blue' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'St. Martins',
      area: '≈45 min away',
      text: 'Inns and cottages by the sea caves and Fundy Trail.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=St.+Martins+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Saint John Transit',
      text: 'Saint John Transit runs city buses and the Comex commuter service. Pay $3 in exact cash, use a Transcard or monthly pass, or buy tickets in the SJTRides app.',
      linkLabel: 'Fares and passes',
      linkUrl: 'https://saintjohn.ca/en/transit/fares-and-passes',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares effective January 1, 2026. The Comex commuter cash fare is $4.50.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $3 (exact cash)', '10-ride Transcard: $27.30', 'Monthly pass: $83.50', 'App: SJTRides'],
        },
        linkLabel: 'Fares and passes',
        linkUrl: 'https://saintjohn.ca/en/transit/fares-and-passes',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Uptown is compact and hilly, with indoor pedways.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers the city’s sides of the river.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the Fundy Trail and St. Martins.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Tide tip:',
      text: 'See the Reversing Falls twice — at low tide the river pours out to sea; at high tide the bay pushes it back. Check the tide table for the times.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Saint John also carry a tourism accommodation levy (3.5% at last check).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Saint John / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + tourism levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Tours and attractions: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Reversing Falls lookouts: free' },
      { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', label: 'Irving Nature Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not St. John’s', text: 'Saint John (New Brunswick) is not St. John’s (Newfoundland) — double-check flights and bookings.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fundy Fog', text: 'Summer fog rolls in fast and keeps the city cool — bring a layer.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Tide Safety', text: 'At St. Martins and other beaches, the tide rises quickly — check tide times before exploring sea caves.' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', title: 'Cruise Days', text: 'Uptown gets busy when cruise ships are in, especially in September and October.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec, Ontario and Maine.' },
    { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Hilly Streets', text: 'Uptown streets are steep and icy in winter; use the indoor pedways.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Saint John is on the unceded territory of the Wolastoqiyik (Maliseet), the people of the Wolastoq — the Saint John River.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Saint John Regional Hospital', '400 University Ave', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default SAINT_JOHN;
