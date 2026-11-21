// Whitehorse — данные страницы /city/whitehorse (Уайтхорс, ЮКОН)
// Видео Уайтхорса в бесплатных банках нет (Pexels по запросу — только
// безымянные горные/городские ролики без привязки к месту). В шапке
// фото с Wikimedia Commons — подвесной мост (Robert Lowe Bridge, 1922)
// через изумрудный Юкон в Miles Canyon, популярное место рядом с городом,
// автор Prof Ranga Sai, 03.07.2026, CC0 (подпись не обязательна, но
// указана для консистентности с другими страницами). GPS 60.663, -135.029 —
// Miles Canyon, в черте City of Whitehorse, ≈10 км к югу от центра.
// Население — перепись 2021: город (CSD) 28 201 (+12.4% к 2016), census
// agglomeration 31 913. Город — 70.1% населения всего Юкона.
// Транспорт — Whitehorse Transit: с 01.07.2026 наличные $3.50, день $8,
// 10 билетов $33, месячный $87 (whitehorse.ca, поэтапное повышение).
// Налог — в Юконе нет территориального налога с продаж, только GST 5%
// (как в Альберте, СЗТ и Нунавуте). Городской гостиничный сбор не нашли —
// не утверждаем.
// Больница — Whitehorse General Hospital, 5 Hospital Rd, новое приёмное
// отделение открыто в январе 2018, заявлено как работающее 24/7.
// S.S. Klondike NHS — в сезоне 2026 судно и здания закрыты, территория
// открыта (parks.canada.ca). Takhini Hot Springs теперь называются Eclipse
// Nordic Hot Springs, только для взрослых 19+, ежедневно 9:00–22:30.
// Из общих знаний: Klondike Highway, SS Klondike как символ города,
// северное сияние, Golden Horseshoe/золотая лихорадка история, время
// в пути, статус столицы территории.

export const WHITEHORSE = {
  slug: 'whitehorse',
  name: 'Whitehorse',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Capital on the Yukon River',
  accentLevel: 'safe',
  heroIcon: '🐎',
  heroImage: '/Cities/Whitehorse/hero.jpg',
  heroCredit: 'Photo: Prof Ranga Sai / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.7212, lon: -135.0568 },
  subtitle: 'Gateway to the Yukon Wilderness',
  description:
    'Home to most of the territory’s people, Whitehorse sits on the banks of the Yukon River between forested hills, with the dramatic walls of Miles Canyon just south of downtown. It is a small, outdoorsy capital — a base for the Klondike Highway, the northern lights, and some of Canada’s wildest country.',

  actions: [
    { label: 'Explore Whitehorse', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈28K (2021)' },
    { label: 'Share of Yukon', value: '≈70% of the territory' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Skagway, AK', value: '≈2 h 30 min by car' },
    { label: 'To Dawson City', value: '≈6 h by car' },
  ],

  badges: ['Yukon River', 'Northern Lights', 'Miles Canyon'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '28,201', label: 'People in Whitehorse in the 2021 census — about 70% of all Yukoners', level: 'safe' },
    { value: '1922', label: 'Year the Miles Canyon suspension bridge was built', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST, no territorial tax', level: 'gold' },
    { value: '19+', label: 'Minimum age at the former Takhini, now Eclipse Nordic Hot Springs', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Main Street shops, the SS Klondike and the waterfront',
      details: {
        "lead": "Main Street shops, the SS Klondike and the waterfront, with the MacBride Museum.",
        "see": [
          {
            "title": "MacBride Museum",
            "text": "Winter hours Tuesday to Saturday 10:30 am–5 pm; adults $12, seniors, students and youth 13+ $11, children free with a paying adult."
          },
          {
            "title": "S.S. Klondike",
            "text": "Parks Canada is carrying out rehabilitation work; the ship and buildings are closed in 2026 but the grounds are open."
          },
          {
            "title": "Waterfront Trolley",
            "text": "Status unclear: one guide says it is closed indefinitely; another describes it as operating."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Whitehorse."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Sam McGee’s cabin stands in the museum courtyard, open in summer only."
          }
        ],
        "link": {
          "label": "MacBride Museum: hours",
          "url": "https://macbridemuseum.com/visit/hours"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverfront & Rotary Park', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Yukon River trail and the Millennium Bridge',
      details: {
        "lead": "The Yukon River trail and the Millennium Trail, from Rotary Peace Park at the south of downtown.",
        "see": [
          {
            "title": "Millennium Trail",
            "text": "A paved, non-motorised, multi-use loop on both banks of the Yukon River, from the Robert Campbell Bridge to the Rotary footbridge near the fish ladder."
          },
          {
            "title": "Fish ladder",
            "text": "The Whitehorse Fishway bypasses the hydro dam for spawning salmon; described as the longest wooden fish ladder in the world, about 366 m."
          },
          {
            "title": "Rotary Peace Park",
            "text": "A picnic spot with a playground and splash park nearby."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the river at the south end of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "A section of the trail in Riverdale was closed because of erosion; check for detours."
          }
        ],
        "link": {
          "label": "City of Whitehorse: trails",
          "url": "https://www.whitehorse.ca/trails"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverdale', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Quiet neighbourhood across the river from downtown',
      details: {
        "lead": "The residential neighbourhood on the east side of the river.",
        "see": [
          {
            "title": "Skatepark",
            "text": "The Whitehorse Skatepark is in the area."
          },
          {
            "title": "Millennium Trail",
            "text": "A section was closed because of erosion; the city offered two detours (the notice is undated)."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the river from downtown."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "City of Whitehorse: trails",
          "url": "https://www.whitehorse.ca/trails"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Miles Canyon', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Landmark', tagLevel: 'purple', meta: 'Dramatic basalt canyon and footbridge just south of downtown',
      details: {
        "lead": "A basalt canyon on the Yukon River with a pedestrian suspension bridge, just south of downtown.",
        "see": [
          {
            "title": "Suspension bridge",
            "text": "The original 85-foot Robert Lowe bridge dates from 1922; today’s pedestrian-only bridge stands on the same spot and gently sways. It is narrow and not wheelchair accessible."
          },
          {
            "title": "Canyon City",
            "text": "The site of a gold-rush settlement; a trail leads there along Schwatka Lake."
          },
          {
            "title": "Schwatka Lake",
            "text": "Created by the Whitehorse power dam (1957–59), which raised water in the canyon by about 10 m."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive or a longer trail south of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours; a loop route is about 17.7 km."
          },
          {
            "label": "Good to know",
            "text": "Dress for winter."
          }
        ],
        "link": {
          "label": "ExploreNorth: Miles Canyon",
          "url": "https://explorenorth.com/yukon/miles_canyon.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Whitehorse Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Hilltop', tagLevel: 'olive', meta: 'Above downtown, with viewpoints over the valley',
      details: {
        "lead": "Above downtown, with the airport.",
        "see": [
          {
            "title": "Airport",
            "text": "The airport sits on the hill above downtown; no viewpoints were verified here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hill above downtown."
          },
          {
            "label": "Good to know",
            "text": "Check flight information before travelling."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Takhini & North Highway', icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', tag: 'Hot Springs', tagLevel: 'danger', meta: 'Route to the hot springs and the Klondike Highway north',
      details: {
        "lead": "The route north to the hot springs and the Yukon Wildlife Preserve.",
        "see": [
          {
            "title": "Eclipse Nordic Hot Springs",
            "text": "At KM 10 Takhini Hot Springs Road; open daily 9 am–10:30 pm, last entry 8:20 pm, adults only (19+); phone 867-456-8000."
          },
          {
            "title": "Yukon Wildlife Preserve",
            "text": "Winter hours 11 am–5 pm from November 1; closed below −35 °C."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of Whitehorse by car."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for each."
          },
          {
            "label": "Good to know",
            "text": "No spa admission price was found."
          }
        ],
        "link": {
          "label": "Eclipse Nordic Hot Springs",
          "url": "https://eclipsenordichotsprings.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Miles Canyon',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A short walk or drive from downtown: basalt cliffs frame the emerald Yukon River, crossed by a suspension footbridge on the site of the 1922 original. One of the city’s signature views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "Basalt cliffs frame the emerald Yukon River, crossed by a suspension footbridge on the site of the 1922 original.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bridge",
                "text": "The 1922 Robert Lowe Bridge was 85 ft long; the modern pedestrian bridge is on the same spot and sways gently."
              },
              {
                "title": "Canyon City",
                "text": "A gold-rush settlement site reached by trail."
              },
              {
                "title": "Dam lake",
                "text": "Schwatka Lake, formed by the 1957–59 dam, raised the canyon waters by about 10 m."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Accessibility",
                "text": "The bridge is narrow and not wheelchair accessible."
              },
              {
                "title": "Loop",
                "text": "One loop from Whitehorse is about 17.7 km."
              },
              {
                "title": "Free",
                "text": "Free to visit."
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
            "text": "A short drive south of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "ExploreNorth: Miles Canyon",
          "url": "https://explorenorth.com/yukon/miles_canyon.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'S.S. Klondike National Historic Site',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'A restored Yukon River sternwheeler on the downtown waterfront. For the 2026 season the ship and buildings are closed, though the grounds remain open — check Parks Canada before planning an indoor visit.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Check status', level: 'caution' }],
      details: {
        "lead": "A restored Yukon River sternwheeler on the downtown waterfront, closed inside in 2026 for rehabilitation.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "A travel guide says Parks Canada closed the ship and buildings for the 2026 season; the grounds are open."
              },
              {
                "title": "Investment",
                "text": "A $14.2 million investment funds structural work and remediation."
              },
              {
                "title": "Later access",
                "text": "Future public access to the vessel is not guaranteed by the project."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check parks.canada.ca; the official page does not mention the closure."
              },
              {
                "title": "Season",
                "text": "The site historically opened from the May long weekend to Labour Day."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Grounds free."
          },
          {
            "label": "Getting there",
            "text": "On the downtown waterfront."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Parks Canada: S.S. Klondike",
          "url": "https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=782"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'MacBride Museum of Yukon History',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Gold rush artifacts, wildlife displays and local history in the heart of downtown. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "Gold rush artifacts, wildlife displays and local history in the heart of downtown.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "Tuesday to Saturday 10:30 am–5 pm, per the museum; another guide gives 11 am–4:30 pm for January to March."
              },
              {
                "title": "Admission",
                "text": "Adults $12; seniors, students and youth 13+ $11; children under 12 free with a paying adult."
              },
              {
                "title": "Sam McGee",
                "text": "His cabin is in the outdoor courtyard, open in summer only."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check macbridemuseum.com before going."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $12 for adults."
          },
          {
            "label": "Getting there",
            "text": "Downtown Whitehorse."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "MacBride Museum: hours",
          "url": "https://macbridemuseum.com/visit/hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yukon Wildlife Preserve',
      icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A drive-and-walk preserve north of the city with caribou, musk ox, moose and other northern species in large natural enclosures.',
      tags: [{ label: 'Family', level: 'danger' }, { label: 'Year-round', level: 'safe' }],
      details: {
        "lead": "A drive-and-walk preserve north of the city with northern animals in large natural enclosures.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "11 am–5 pm from November 1 (10 am–6 pm in summer)."
              },
              {
                "title": "Admission",
                "text": "Adults (19+) $20, youth (4–18) $13, ages 0–3 free."
              },
              {
                "title": "Bus tours",
                "text": "November 1, 2026 to March 31, 2027 at noon and 3 pm; admission is included."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Cold closure",
                "text": "The preserve does not open when it is below −35 °C."
              },
              {
                "title": "Confirm",
                "text": "Third-party listings differ; use yukonwildlife.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $20 for adults."
          },
          {
            "label": "Getting there",
            "text": "North of Whitehorse by car."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Yukon Wildlife Preserve: hours",
          "url": "https://yukonwildlife.ca/experience/hours-and-admission/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Eclipse Nordic Hot Springs',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'A Nordic-style hot springs spa north of the city on Takhini Hot Springs Road, adults only (19+), open daily 9 am–10:30 pm.',
      tags: [{ label: '19+', level: 'caution' }, { label: 'Relaxing', level: 'purple' }],
      details: {
        "lead": "A Nordic-style hot springs spa at KM 10 Takhini Hot Springs Road, adults only (19+).",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Daily 9 am–10:30 pm, last entry 8:20 pm; the building closes at 11 pm."
              },
              {
                "title": "Age",
                "text": "Adults only (19+)."
              },
              {
                "title": "Contact",
                "text": "Phone 867-456-8000."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Price",
                "text": "No admission price was found; check eclipsenordichotsprings.ca."
              },
              {
                "title": "Hours conflict",
                "text": "Some listings show other hours; the official site is the most reliable."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the price."
          },
          {
            "label": "Getting there",
            "text": "North of Whitehorse by car."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Eclipse Nordic Hot Springs",
          "url": "https://eclipsenordichotsprings.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Northern Lights Viewing',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'On clear nights from late August to early April, the aurora borealis can appear right over the city — drive a few minutes from the lights for a darker sky.',
      tags: [{ label: 'Seasonal', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "On clear nights from late August to early April the aurora can appear over Whitehorse.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Late August to early April (another guide says mid-April); no single best month, with late winter and early spring a good balance of dark nights and longer days."
              },
              {
                "title": "2026–27",
                "text": "Activity can stay strong after the solar maximum."
              },
              {
                "title": "Tours",
                "text": "Operators sell 2- to 5-night packages with nightly guided aurora viewing."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Go dark",
                "text": "Drive a few minutes from the lights."
              },
              {
                "title": "Dress warm",
                "text": "Winter nights are very cold."
              },
              {
                "title": "Free",
                "text": "Free to watch."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; tours are paid."
          },
          {
            "label": "Getting there",
            "text": "Out of town to a dark spot."
          },
          {
            "label": "Best time",
            "text": "Clear, dark nights from late August to early April."
          }
        ],
        "link": {
          "label": "Destination Canada: aurora viewing in Whitehorse",
          "url": "https://travel.destinationcanada.com/en-us/things-to-do/how-to-maximize-your-aurora-viewing-odds-in-whitehorse-yukon"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Trails and Northern Wilderness',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Millennium Trail', dist: 'Downtown', text: 'Riverside loop trail linking downtown and Riverdale.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Miles Canyon Trails', dist: '≈10 min', text: 'Trails along the canyon rim and down to the river.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Yukon River Paddling', dist: 'Downtown', text: 'Canoe and kayak trips on the river that once carried gold-rush steamboats.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Mount Sima', dist: 'Near city', text: 'Local ski hill for downhill skiing and snowboarding.' },
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Nordic Skiing', dist: 'Whitehorse trails', text: 'Extensive groomed cross-country ski trails in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Outside the city', text: 'Dark-sky spots a short drive from downtown.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Arctic char and grayling on local menus.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou, bison and other northern specialties.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Main Street', areaLevel: 'gold', text: 'Coffee shops in the compact downtown.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Yukon Brewing and other local breweries.' },
    { icon: '🧑‍🍳', iconSrc: '/icons/attractions/ph_chef-hat-thin.svg', title: 'Farmers’ Market', area: 'Summer Saturdays', areaLevel: 'safe', text: 'Local produce and crafts in the warmer months.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'The Yukon River ice breaks up; days lengthen fast.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'Long daylight hours for hiking, paddling and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Short season', text: 'A quick but colourful turn before winter sets in.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 4, note: 'Aurora season', text: 'Cold and dark, but prime time for the northern lights and winter sports.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Erik Nielsen Whitehorse International Airport (YXY) has flights to Vancouver, Calgary and other hubs.',
      time: '≈10 min to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Alaska Highway runs through Whitehorse, linking it to British Columbia and Alaska; the Klondike Highway heads north to Dawson City.',
      time: '≈6 h to Dawson City',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Seasonal coach and shuttle services connect Whitehorse with Skagway, Alaska, and other Yukon communities. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'No scheduled passenger rail serves Whitehorse; the historic White Pass railway runs seasonal excursions from Skagway, not through to the city.',
      time: 'No direct rail',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Main Street and the riverfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whitehorse+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Whitehorse%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'Airport Area',
      area: 'Near YXY',
      text: 'Hotels convenient for early flights.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whitehorse+Airport', level: 'blue' },
      ],
    },
    {
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      title: 'Takhini / North Highway',
      area: '≈25 min away',
      text: 'Lodges and cabins near the hot springs and wildlife preserve.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Takhini+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Whitehorse Transit',
      text: 'Whitehorse Transit runs city buses across downtown, Riverdale and the suburbs. Fares rose as part of a phased increase approved in the city’s 2026–2028 operating budget.',
      linkLabel: 'Whitehorse Transit',
      linkUrl: 'https://www.whitehorse.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares effective July 1, 2026. Drivers do not carry change — bring exact fare.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $3.50 (exact cash)', 'Day pass: $8', '10 tickets: $33', 'Monthly pass: $87'],
        },
        linkLabel: 'Whitehorse Transit',
        linkUrl: 'https://www.whitehorse.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is small and walkable.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers downtown, Riverdale and suburban areas.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Miles Canyon, the hot springs and day trips.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Aurora tip:',
      text: 'For northern lights, check the forecast, dress warmly, and drive a few minutes outside the city lights for the darkest skies.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Yukon has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site. We could not confirm any separate municipal accommodation levy in Whitehorse.',
    comparison: [
      { label: 'Whitehorse / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', label: 'Hot springs & tours: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', label: 'Miles Canyon trails: free' },
      { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', label: 'Northern lights viewing: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', title: 'Aurora Season', text: 'Northern lights are best seen from late August to April, away from city lights, on clear nights.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Serious Cold', text: 'Winter temperatures regularly drop well below freezing — dress in layers and watch for frostbite warnings.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Midnight Sun', text: 'In midsummer, Whitehorse gets nearly 19 hours of daylight — pack an eye mask if you need dark to sleep.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Highways can close or ice over in winter — check road conditions before long drives.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Vancouver.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Moose and other large animals cross highways, especially at dawn and dusk — drive carefully outside town.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Whitehorse is on the traditional territory of the Kwanlin Dün First Nation and the Ta’an Kwäch’än Council.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Whitehorse General Hospital', '5 Hospital Rd', 'Emergency department · call 911 · Yukon HealthLine 811'] },
  ],
};

export default WHITEHORSE;
