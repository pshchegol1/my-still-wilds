// Dawson City — данные страницы /city/dawson-city (Доусон-Сити, ЮКОН)
// Видео Доусона в бесплатных банках нет (Pexels не предлагает клипов по
// этому запросу). В шапке фото с Wikimedia Commons — Queen Street /
// Second Avenue, цветные исторические фасады на грунтовой улице, автор
// Prof Ranga Sai, 04.07.2026, CC0 (подпись не обязательна, указана для
// единообразия). GPS 64.062, -139.434 — совпадает с центром Доусона.
// Население — перепись 2021: городок (municipality) 1 577 (+14.7% к
// 2016); отдельно StatCan даёт population centre 1 092 — используем
// показатель по муниципалитету, как для других канадских городов на сайте.
// UNESCO: в сентябре 2023 Tr'ondëk-Klondike (городище Доусона плюс семь
// других объектов на территории Tr'ondëk Hwëch'in) включён в список
// Всемирного наследия — первый культурный объект Юкона.
// Больница — Dawson City Community Hospital, 501 6th Ave; заявлено ER
// 24/7, но в 2023 местная пожарная служба публично говорила о пробелах
// в скорой помощи (CBC) — предупреждение вместо гарантии.
// Транспорт: собственного городского транзита нет, передвижение пешком
// или на машине.
// Паром George Black (бесплатный, через реку Юкон к West Dawson и трассе
// Top of the World Highway) работает примерно с середины мая до середины
// октября; зимой иногда строят ледовую переправу, но в последние годы
// это ненадёжно из-за колебаний температуры (CBC, несколько лет подряд
// переправу не могли построить или она быстро ломалась) — предупреждение,
// не обещание.
// Diamond Tooth Gerties — казино с канканом, сезон начинается в мае
// (подтверждено на май 2026).
// Налог — как и во всём Юконе, только федеральный GST 5%, территориального
// налога с продаж нет.
// Из общих знаний: Klondike Gold Rush 1898, хижины Jack London и Robert
// Service, драга Dredge No. 4, Midnight Dome, Tr'ondëk Hwëch'in First
// Nation, Top of the World Highway в Аляску, время в пути.

export const DAWSON_CITY = {
  slug: 'dawson-city',
  name: 'Dawson City',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Heart of the Klondike Gold Rush',
  accentLevel: 'gold',
  heroIcon: '⛏️',
  heroImage: '/Cities/DawsonCity/hero.jpg',
  heroCredit: 'Photo: Prof Ranga Sai / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 64.0601, lon: -139.4322 },
  subtitle: 'Boomtown of the 1898 Gold Rush',
  description:
    'Where the Klondike River meets the Yukon, Dawson City exploded from wilderness to a city of 30,000 almost overnight during the 1898 gold rush — then settled into the small, wooden-boardwalk town you see today. Its historic townsite is now part of a UNESCO World Heritage Site, and gold panning, cancan shows and the midnight sun still draw travellers north.',

  actions: [
    { label: 'Explore Dawson City', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.6K (2021)' },
    { label: 'Status', value: 'UNESCO World Heritage (2023)' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈6 h by car' },
    { label: 'To Alaska border', value: '≈1 h 30 min by car' },
  ],

  badges: ['Gold Rush History', 'UNESCO Heritage', 'Midnight Sun'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 1 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1,577', label: 'People in Dawson City in the 2021 census — up 14.7% in five years', level: 'gold' },
    { value: '30,000', label: 'Estimated population at the peak of the 1898 Klondike Gold Rush', level: 'purple' },
    { value: '2023', label: 'Year the Dawson townsite joined the Tr’ondëk-Klondike UNESCO World Heritage Site', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Front Street', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Historic', tagLevel: 'gold', meta: 'Boardwalks, false-front buildings and the SS Keno sternwheeler',
      details: {
        "lead": "The historic waterfront street with boardwalks, false-front buildings and the S.S. Keno.",
        "see": [
          {
            "title": "S.S. Keno",
            "text": "A Parks Canada sternwheeler; programs run in summer (roughly mid-May to early September) and a tour was listed at $12.50."
          },
          {
            "title": "Visitor Centre",
            "text": "The S.S. Keno shares its building with the visitor centre."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Yukon River waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check Parks Canada for the 2027 season."
          }
        ],
        "link": {
          "label": "Parks Canada: S.S. Keno",
          "url": "https://www.parks.canada.ca/lhn-nhs/yt/klondike/activ/sskeno"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Downtown Grid', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'blue', meta: 'Gravel streets lined with gold-rush-era saloons and hotels',
      details: {
        "lead": "Gravel streets lined with gold-rush-era saloons and hotels.",
        "see": [
          {
            "title": "Diamond Tooth Gerties",
            "text": "Summer 2026: May 8 to September 19, nightly 7 pm–2 am with shows at 8:30, 10 and midnight; fall Fridays and Saturdays to October 17. Fireweed Entertainment produces the shows from 2026 to 2028."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Dawson."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check opening hours before a winter visit."
          }
        ],
        "link": {
          "label": "Travel Yukon: Diamond Tooth Gerties",
          "url": "https://www.travelyukon.com/en/see-and-do/experience-providers/diamond-tooth-gerties-gambling-hall"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Dawson', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Across the river', tagLevel: 'purple', meta: 'Reached by the George Black ferry or a winter ice crossing',
      details: {
        "lead": "Across the Yukon River, reached by the George Black ferry in season or by an ice crossing in winter.",
        "see": [
          {
            "title": "Ferry",
            "text": "The George Black ferry normally runs 24 hours from May to October; it is pulled before ice forms."
          },
          {
            "title": "Winter crossing",
            "text": "Last winter the river did not fully freeze, forcing a five-kilometre detour; the 2025–26 ice bridge closed on April 16, 2026. Whether one will be built this winter is not yet known."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By ferry or ice bridge from Dawson."
          },
          {
            "label": "Good to know",
            "text": "Check Yukon Highways and Public Works for the crossing status."
          }
        ],
        "link": {
          "label": "Yukon News: ice bridge closed for the season",
          "url": "https://yukon-news.com/2026/04/22/the-ice-bridge-at-dawson-city-is-now-officially-closed-for-the-season/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Klondike River Valley', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: 'Mining', tagLevel: 'danger', meta: 'Historic and active gold claims along Bonanza and Eldorado creeks',
      details: {
        "lead": "Gold claims and the Discovery Claim along Bonanza Creek.",
        "see": [
          {
            "title": "Discovery Claim",
            "text": "About 17 km south-southeast of Dawson, a national historic site since 1998; the 1896 find was made here."
          },
          {
            "title": "Free Claim No. 6",
            "text": "About 16–18 km up Bonanza Creek Road; run by the Klondike Visitors Association. Sources differ on whether pans are lent."
          },
          {
            "title": "Claim 33",
            "text": "At km 13; paid panning lessons."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of town on Bonanza Creek Road."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Do not pan elsewhere; the ground is staked by working miners."
          }
        ],
        "link": {
          "label": "Travel Yukon: gold panning made easy",
          "url": "https://www.travelyukon.com/en/get-inspired/gold-panning-made-easy"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Midnight Dome', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Viewpoint', tagLevel: 'olive', meta: 'Hilltop above town with views over the Klondike and Yukon rivers',
      details: {
        "lead": "The hilltop above town with views over the Klondike and Yukon rivers.",
        "see": [
          {
            "title": "Viewpoint",
            "text": "Views of Dawson, the river confluence and the hills; no winter road information was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive or hike above town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check road conditions in winter."
          }
        ],
        "link": {
          "label": "Dawson City: Klondike National Historic Sites",
          "url": "https://dawsoncity.ca/discover-dawson/klondike-national-historic-sites/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tr’ondëk Hwëch’in Lands', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: 'First Nation', tagLevel: 'safe', meta: 'Traditional territory woven through the townsite and surrounding valley',
      details: {
        "lead": "The traditional territory of the Tr’ondëk Hwëch’in, woven through the townsite and valley.",
        "see": [
          {
            "title": "Territory",
            "text": "Dawson sits on Tr’ondëk Hwëch’in traditional territory; Dänojà Zho Cultural Centre hours were not found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In and around Dawson."
          },
          {
            "label": "Good to know",
            "text": "Check the First Nation’s website for current cultural programming and hours."
          }
        ],
        "link": {
          "label": "Dawson City: discover Dawson",
          "url": "https://dawsoncity.ca/discover-dawson/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Diamond Tooth Gerties Gambling Hall',
      icon: '🎲', iconSrc: '/icons/attractions/ph_dice-five-thin.svg',
      text: 'A gambling hall with nightly cancan shows and gold-rush atmosphere. In 2026 it ran May 8 to September 19, plus Friday and Saturday evenings until October 17; it is closed now.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Evenings', level: 'purple' }],
      details: {
        "lead": "A gambling hall with nightly cancan shows and gold-rush atmosphere, run seasonally.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summer 2026",
                "text": "May 8 to September 19, seven days a week, 7 pm–2 am, with shows at 8:30, 10 and midnight."
              },
              {
                "title": "Fall 2026",
                "text": "September 25 to October 17, Fridays and Saturdays 7 pm–1 am, no cancan shows."
              },
              {
                "title": "Shows",
                "text": "Fireweed Entertainment produces the shows from 2026 to 2028; Miss Gertie and the Gold Rush Girls continue."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Entry",
                "text": "One guide says a season pass of about $30; another says about $20 over three days; neither is official."
              },
              {
                "title": "Closed now",
                "text": "It reopens in May 2027."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid entry; confirm."
          },
          {
            "label": "Getting there",
            "text": "Downtown Dawson."
          },
          {
            "label": "Best time",
            "text": "Summer evenings."
          }
        ],
        "link": {
          "label": "Travel Yukon: Diamond Tooth Gerties",
          "url": "https://www.travelyukon.com/en/see-and-do/experience-providers/diamond-tooth-gerties-gambling-hall"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'S.S. Keno National Historic Site',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'A restored sternwheeler on the Yukon River waterfront, once used to haul ore from the mines.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Free to view', level: 'safe' }],
      details: {
        "lead": "A restored sternwheeler on the Yukon River waterfront, which carried ore until improved roads retired the riverboats in the 1950s.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Parks Canada programs run roughly mid-May to early September; no 2026 dates were confirmed."
              },
              {
                "title": "Tour",
                "text": "A tour was listed at $12.50."
              },
              {
                "title": "Building",
                "text": "It shares its building with the visitor centre."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "The ship is likely closed in winter; the exterior can be seen from the waterfront."
              },
              {
                "title": "Confirm",
                "text": "Check Parks Canada’s Klondike pages."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view; tours paid."
          },
          {
            "label": "Getting there",
            "text": "Dawson waterfront."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Parks Canada: S.S. Keno",
          "url": "https://www.parks.canada.ca/lhn-nhs/yt/klondike/activ/sskeno"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dredge No. 4',
      icon: '⚙️', iconSrc: '/icons/attractions/ph_gear-thin.svg',
      text: 'A preserved gold dredge on Bonanza Creek south of town, recognised as a national historic site; Parks Canada tours run in summer.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Tours', level: 'blue' }],
      details: {
        "lead": "A preserved gold dredge on Bonanza Creek south of town, recognised with S.S. Keno as nationally historic in 2017.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tours",
                "text": "Most visitors come mid-May to mid-September, when Parks Canada runs its tours."
              },
              {
                "title": "Recognition",
                "text": "Its national historic importance was recognised in 2017."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No 2026 dates, prices or booking details were found."
              },
              {
                "title": "Closed now",
                "text": "Tours are not running in winter."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid in season; check Parks Canada."
          },
          {
            "label": "Getting there",
            "text": "On Bonanza Creek Road, south of Dawson."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Parks Canada: Klondike National Historic Sites",
          "url": "https://dawsoncity.ca/discover-dawson/klondike-national-historic-sites/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Midnight Dome',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A short drive or hike above town for sweeping views of Dawson, the river confluence and the surrounding hills — especially striking near the summer solstice.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Views', level: 'gold' }],
      details: {
        "lead": "A hilltop above town with sweeping views of Dawson, the river confluence and the hills.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "Dawson, the Yukon and Klondike rivers and the hills."
              },
              {
                "title": "Solstice",
                "text": "Especially striking near the summer solstice."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No winter road information was found; check conditions."
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
            "text": "A short drive or hike above town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Dawson City: discover Dawson",
          "url": "https://dawsoncity.ca/discover-dawson/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jack London & Robert Service Cabins',
      icon: '📖', iconSrc: '/icons/attractions/ph_book-open-thin.svg',
      text: 'Cabins linked to the two writers who made the Klondike famous. Robert Service’s former cabin is among Dawson’s historic buildings; no 2026 hours or readings were confirmed.',
      tags: [{ label: 'Literary', level: 'purple' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "Cabins linked to the two writers who made the Klondike famous.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Robert Service",
                "text": "His former cabin is among Dawson’s historic buildings."
              },
              {
                "title": "Jack London",
                "text": "No source confirmed the 2026 status of the Jack London cabin."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No 2026 hours or readings were found; check with Parks Canada or the visitor centre."
              },
              {
                "title": "Season",
                "text": "Summer programs only."
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
            "text": "In Dawson."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Parks Canada: Klondike National Historic Sites",
          "url": "https://www.parks.canada.ca/lhn-nhs/yt/klondike/activ/dawson"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gold Panning',
      icon: '🪙', iconSrc: '/icons/attractions/ph_coin-thin.svg',
      text: 'Try your luck at Free Claim No. 6 on Bonanza Creek Road or take a paid lesson at Claim 33; pan only at open sites, since other ground is staked by working miners.',
      tags: [{ label: 'Classic', level: 'gold' }, { label: 'Family', level: 'danger' }],
      details: {
        "lead": "Pan for gold on Bonanza Creek, where the 1896 strike was made.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Free Claim No. 6",
                "text": "About 16–18 km up Bonanza Creek Road, run by the Klondike Visitors Association; panning is free and you keep what you find."
              },
              {
                "title": "Claim 33",
                "text": "At km 13, with paid lessons."
              },
              {
                "title": "Discovery Claim",
                "text": "About 17 km from Dawson; a national historic site since 1998."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Pans",
                "text": "Sources differ on whether pans are lent; borrow one at the visitor centre or bring your own."
              },
              {
                "title": "Staked ground",
                "text": "Do not pan elsewhere on Bonanza Creek; working miners hold the claims."
              },
              {
                "title": "Winter",
                "text": "A summer activity."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free at Free Claim No. 6; lessons paid."
          },
          {
            "label": "Getting there",
            "text": "South of Dawson on Bonanza Creek Road."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Travel Yukon: gold panning made easy",
          "url": "https://www.travelyukon.com/en/get-inspired/gold-panning-made-easy"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Gold Creeks and River Valleys',
  outdoor: [
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Midnight Dome Trail', dist: 'Above town', text: 'Hike or drive up for panoramic valley views.' },
    { icon: '🪙', iconSrc: '/icons/attractions/ph_coin-thin.svg', name: 'Bonanza Creek', dist: '≈15 min', text: 'Site of the original 1896 gold discovery; try panning.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Yukon River Paddling', dist: 'Downtown', text: 'Canoe trips on the river the gold rush was built around.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Ridge Road Trail', dist: 'Near town', text: 'Hiking trails through the hills above the valley.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', name: 'Top of the World Highway', dist: 'Via ferry', text: 'A scenic, seasonal gravel road to the Alaska border.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora & Midnight Sun', dist: 'Year-round', text: 'Near-endless summer daylight and winter northern lights.' },
  ],

  food: [
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Saloons & Pubs', area: 'Front Street', areaLevel: 'gold', text: 'Gold-rush-themed bars and live music.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Yukon River salmon and Arctic char.' },
    { icon: '🥞', iconSrc: '/icons/attractions/ph_egg-thin.svg', title: 'Classic Diners', area: 'Downtown', areaLevel: 'olive', text: 'Hearty breakfasts fuel a day of sightseeing.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops among the historic storefronts.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries and cranberries from the surrounding bush.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 1, note: 'Breakup', text: 'The Yukon River ice breaks up; many attractions are still closed.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Nearly 24-hour daylight, open attractions and the ferry running.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Shutting down', text: 'A brief colourful window before most seasonal businesses close.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'Deep cold and a tiny year-round population — a dramatic, remote experience.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Klondike Highway runs year-round from Whitehorse; the seasonal, gravel Top of the World Highway links to Alaska via the George Black ferry.',
      time: '≈6 h from Whitehorse',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Dawson City Airport (YDA) has limited scheduled flights, mainly connecting via Whitehorse.',
      time: 'Limited flights',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'George Black Ferry',
      text: 'A free government ferry crosses the Yukon River to West Dawson and the Top of the World Highway, roughly mid-May to mid-October.',
      time: 'Seasonal, check status',
    },
    {
      icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'Winter Crossing',
      text: 'In some winters an ice crossing links West Dawson to town, but warmer winters have made it unreliable in recent years — don’t count on it.',
      time: 'Check conditions',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Historic hotels and inns among the gold-rush buildings.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dawson+City+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dawson%20City%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'West Dawson',
      area: 'Across the river',
      text: 'Quieter campgrounds reached by the George Black ferry.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Dawson+Yukon', level: 'blue' },
      ],
    },
    {
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      title: 'Klondike Valley',
      area: 'Near Bonanza Creek',
      text: 'Lodges and campgrounds close to the historic gold claims.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Bonanza+Creek+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Local Transit',
      text: 'Dawson City has no public bus system — the historic downtown grid is small enough to explore entirely on foot, and a car or the free George Black ferry covers the rest.',
      linkLabel: 'City of Dawson',
      linkUrl: 'https://cityofdawson.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is a few compact blocks of boardwalk streets.' },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'George Black Ferry', text: 'Free crossing to West Dawson, seasonal.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Dredge No. 4, Midnight Dome and the creeks.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Limited local service — arrange ahead.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Heading to Alaska via the Top of the World Highway? Check the George Black ferry’s operating status before you go — it closes for weather, maintenance and the shoulder seasons.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Dawson City has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Dawson City / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🎲', iconSrc: '/icons/attractions/ph_dice-five-thin.svg', label: 'Diamond Tooth Gerties: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Midnight Dome viewpoint: free' },
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'George Black ferry: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour and panning guides: 10–15%.',
  },

  practical: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Remote & Seasonal', text: 'Many businesses, the ferry and the Top of the World Highway close outside summer — plan around the season.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Midnight Sun', text: 'Around the summer solstice, Dawson gets close to 24 hours of daylight — bring an eye mask if you need dark to sleep.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Deep Winter Cold', text: 'Winters are extreme, with long periods well below freezing — this is a summer-focused destination for most visitors.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Don’t Rely on the Ice', text: 'The winter ice crossing to West Dawson is not guaranteed every year — check current conditions before planning around it.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer.' },
    { icon: '🚑', iconSrc: '/icons/attractions/ph_ambulance-thin.svg', title: 'Limited Emergency Services', text: 'This is a small, remote community — local reports have noted gaps in ambulance coverage. Call 911 and expect a wait.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Dawson City sits on the traditional territory of the Tr’ondëk Hwëch’in, whose history is central to the Tr’ondëk-Klondike UNESCO World Heritage Site.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dawson City Community Hospital', '501 6th Ave', 'Emergency: call 911 · Yukon HealthLine 811'] },
  ],
};

export default DAWSON_CITY;
