// Stratford, Prince Edward Island — данные страницы /city/stratford
//
// ВАЖНО: это Stratford в графстве Queens, PEI (пригород Шарлоттауна через реку
// Hillsborough) — НЕ Stratford в Онтарио (город фестиваля Шекспира) и НЕ
// Stratford-upon-Avon в Англии. Все источники ниже проверены именно на PEI.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 10,927 чел. (перепись 2021, +12.5% к 2016 — 9,711), 4,307 занятых жилищ
//   из 4,667 всего, площадь 22.67 км², плотность 482/км². Третье по величине поселение
//   PEI (Wikipedia / StatCan census profile). Городские источники (town's own данные)
//   отмечают, что цифры переписи могут занижать реальное население из-за undercount —
//   указано с оговоркой, в карточку взята официальная цифра переписи.
// - География и история: Stratford расположен на юго-восточном берегу реки Hillsborough,
//   напротив Шарлоттауна — классический "спальный" пригород столицы. Образован слиянием
//   нескольких поселений (включая Southport) в единый город; провинциальный профиль и
//   ключевые факты PEI называют год инкорпорации 1995 (как и у Summerside) — у Wikipedia
//   формулировка про объединение Southport чуть иная, но год не противоречит.
// - Парки и трейлы: около 30 км пешеходных/велосипедных троп по всему городу (моторный
//   транспорт запрещён); Keppoch Park (136 Keppoch Road); Tea Hill Park — 15 акров на
//   набережной с пляжем и видами на Northumberland Strait (владение/статус парка указано
//   неоднозначно в источниках — упомянут и как "Tea Hill Provincial Park"); Robert Cotton
//   Park — дендрарий и сады; Fullerton's Creek Conservation Park — 140 акров вокруг
//   городского водозабора с тропами и смотровой площадкой на болото Fullerton's Marsh
//   (townofstratford.ca).
// - Медицина: Stratford фактически обслуживается больницей Шарлоттауна (Queen Elizabeth
//   Hospital, 60 Riverside Drive) — отдельной больницы в самом городе нет, это общая
//   практика для пригородов столицы PEI.
// - Фото в шапке: Wikimedia Commons, "Stratford, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 18.07.2025. GPS в EXIF: 46.229093, -63.106289 —
//   соответствует жилым районам Стратфорда на берегу залива, видно море на горизонте.
// - Видео в бесплатных банках не найдено (выдача Pexels нерелевантна — только другие
//   регионы Канады и одноимённые Stratford в США/Онтарио).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const STRATFORD = {
  slug: 'stratford',
  name: 'Stratford',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Queens County',
  tag: "Charlottetown's Riverside Suburb",
  accentLevel: 'purple',
  heroIcon: '🌉',
  heroImage: '/Cities/Stratford/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.2159, lon: -63.0894 },

  subtitle: 'Across the River from the Capital',
  description:
    "Stratford sits on the south-east bank of the Hillsborough River, directly across the water from Charlottetown. PEI's third-largest community, it has grown quickly into a green, family-friendly suburb with nearly 30 km of trails, waterfront parks, and quick access to the capital's downtown just across the bridge.",

  actions: [
    { label: 'Explore the Trails', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '10,927 (2021)' },
    { label: 'Role', value: "PEI's 3rd-Largest Community" },
    { label: 'Setting', value: 'Across the River from Charlottetown' },
    { label: 'Growth', value: '+12.5% since 2016' },
    { label: 'Region', value: 'Queens County' },
    { label: 'Known For', value: 'Trails & Waterfront Parks' },
  ],

  badges: ['Riverside Suburb', 'Queens County', '30 km of Trails'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '10,927', label: 'Population at the 2021 census, up 12.5% from 2016', level: 'safe' },
    { value: '#3', label: 'Largest community in Prince Edward Island by population', level: 'purple' },
    { value: '30 km', label: 'Of car-free walking and cycling trails across town', level: 'blue' },
    { value: '140', label: 'Acres protected at Fullerton\'s Creek Conservation Park', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Southport', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Riverfront', tagLevel: 'blue', meta: 'The historic riverside community closest to the Charlottetown bridge',
      details: {
        "lead": "The riverside community closest to the Hillsborough River bridge to Charlottetown.",
        "see": [
          {
            "title": "Bridge",
            "text": "In 1905 the Prince Edward Island Railway built the first Hillsborough River Bridge between Charlottetown and Southport."
          },
          {
            "title": "Town",
            "text": "Southport merged with Bunbury, Cross Roads and Keppoch-Kinlock to form Stratford; one source gives the date as 1 April 1995."
          },
          {
            "title": "Views",
            "text": "The shoreline looks across the river to downtown Charlottetown."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Stratford side of the Hillsborough River."
          },
          {
            "label": "Good to know",
            "text": "No individual venues were verified."
          }
        ],
        "link": {
          "label": "Stratford (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Stratford,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Keppoch', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: 'Waterfront', tagLevel: 'safe', meta: 'Home to Keppoch and Tea Hill parks on the Strait shoreline',
      details: {
        "lead": "The shoreline area along Keppoch Road with the Tea Hill and Pondside parks.",
        "see": [
          {
            "title": "Tea Hill Park",
            "text": "A 15-acre shoreline park with public beach access, a cricket facility and a change room."
          },
          {
            "title": "Pondside Park",
            "text": "A hiking trail of about 1 km at 15 Keppoch Road."
          },
          {
            "title": "History",
            "text": "Keppoch-Kinlock was one of the communities merged to form Stratford."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along Keppoch Road."
          },
          {
            "label": "Good to know",
            "text": "The beach is a summer destination."
          }
        ],
        "link": {
          "label": "Town of Stratford: parks",
          "url": "https://stratford.hosted.civiclive.com/residents/about_stratford/information_for_visitors"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Town Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Civic Core', tagLevel: 'gold', meta: "Stratford's municipal offices, schools and shops",
      details: {
        "lead": "The municipal and shopping core of a town of 10,927 people (2021).",
        "see": [
          {
            "title": "The town",
            "text": "Stratford sits on a peninsula formed by the Hillsborough River estuary, Charlottetown Harbour and Hillsborough Bay, across the river from Charlottetown."
          },
          {
            "title": "Growth",
            "text": "The 2021 census counted 10,927 residents, up 12.5% from 2016."
          },
          {
            "title": "Shops",
            "text": "No individual venues were verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Immediately southeast of Charlottetown."
          },
          {
            "label": "Good to know",
            "text": "Mostly a residential and commuter town."
          }
        ],
        "link": {
          "label": "Stratford (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Stratford,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
    { name: "Fullerton's Creek", icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Conservation', tagLevel: 'purple', meta: 'A protected wetland and trail area around the town wellfield',
      details: {
        "lead": "A protected wetland and trail area around the town’s wellfield.",
        "see": [
          {
            "title": "Park",
            "text": "Fullerton’s Creek Conservation Park covers about 140 acres, with walking trails, a multi-purpose field and a viewing platform over Fullerton’s Marsh."
          },
          {
            "title": "Trails",
            "text": "A gravel trail system with loops through open fields and woods, about 4 km; the trails and platform were named for the MacCallum family."
          },
          {
            "title": "Winter",
            "text": "The paved and gravel trail from the bridge to the marsh is cleared in winter; the section beyond to Mt. Herbert Road belongs to the Province."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Main entrance reported off MacIntosh Drive."
          },
          {
            "label": "Good to know",
            "text": "Trails can be reached from several neighbourhood streets."
          }
        ],
        "link": {
          "label": "Island Trails: Fullerton’s Creek",
          "url": "https://islandtrails.ca/?p=847"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Tea Hill Park',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A 15-acre shoreline park on Keppoch Road with public beach access, a cricket facility and a change room; it was a provincial park until the Town took it over in 1996.',
      tags: [{ label: 'Beach', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A 15-acre shoreline park on Keppoch Road with public beach access, wooded areas, a cricket facility and a change room.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "Originally a provincial park; the Town received it in a 1996 land transfer. Some travel listings still call it Tea Hill Provincial Park."
              },
              {
                "title": "Beach",
                "text": "Public beach access on the shoreline."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The beach is a summer destination; no winter services were found."
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
            "text": "Keppoch Road."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Town of Stratford: parks",
          "url": "https://stratford.hosted.civiclive.com/residents/about_stratford/information_for_visitors"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Keppoch Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A community park in the Keppoch area; facilities and access were not verified, so check with the Town of Stratford.',
      tags: [{ label: 'Family', level: 'safe' }],
      details: {
        "lead": "A community park in the Keppoch area.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Nearby",
                "text": "Tea Hill Park and the Pondside Park trail are on Keppoch Road."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No Town page for this park was found, and some listings may refer to the Tea Hill beach. Ask the Town of Stratford."
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
            "text": "Keppoch area."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Town of Stratford: parks",
          "url": "https://stratford.hosted.civiclive.com/residents/about_stratford/information_for_visitors"
        },
        "checked": "November 2026"
      },
    },
    {
      name: "Fullerton's Creek Conservation Park",
      icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: "A 140-acre protected area around the town's wellfield, with walking trails, a multi-purpose field, and a viewing platform over Fullerton's Marsh.",
      tags: [{ label: 'Nature', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A 140-acre conservation area around the town’s wellfield, with walking trails, a multi-purpose field and a viewing platform over Fullerton’s Marsh.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "A gravel trail system of about 4 km with loops through open fields and woods."
              },
              {
                "title": "Naming",
                "text": "The trails and viewing platform were named in honour of the MacCallum farm family."
              },
              {
                "title": "Winter",
                "text": "The paved and gravel trail is cleared in winter from the bridge to Fullerton’s Marsh."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Entrance",
                "text": "Main entrance reported off MacIntosh Drive; trails also connect to several neighbourhood streets."
              },
              {
                "title": "Beyond the marsh",
                "text": "The section to Mt. Herbert Road belongs to the Province."
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
            "text": "MacIntosh Drive, Stratford."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Island Trails: Fullerton’s Creek",
          "url": "https://islandtrails.ca/?p=847"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Robert Cotton Park',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'A park featuring an arboretum, gardens and walking trails.',
      tags: [{ label: 'Gardens', level: 'gold' }],
      details: {
        "lead": "A park with an arboretum, gardens and a gravel trail system.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "Numerous loops through open park along hedge lines and through woods."
              },
              {
                "title": "Clubs",
                "text": "The park houses the Mayflower Seniors and Youth Can Do clubs."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Gardens are best in summer; no winter information for the park was found."
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
            "text": "Stratford; see the Town trails page."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Town of Stratford: trails",
          "url": "https://stratford.hosted.civiclive.com/residents/respect_stratford/community_facilities/trails"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Stratford Trail Network',
      icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg',
      text: 'Town trails include a 7 km paved and gravel route (cleared in winter) and the Cotton Park and Fullerton’s Creek systems; several are groomed in winter.',
      tags: [{ label: 'Trails', level: 'blue' }],
      details: {
        "lead": "Town trails include a 7 km paved and gravel route cleared in winter, plus the Cotton Park and Fullerton’s Creek systems and shorter hikes.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Main route",
                "text": "About 7 km from the Hillsborough Bridge to Fullerton’s Marsh, with parking at several points."
              },
              {
                "title": "Short hikes",
                "text": "Pondside Park (about 1 km, 15 Keppoch Rd) and Tuckers Way (0.5 km, no on-site parking)."
              },
              {
                "title": "Winter",
                "text": "The Town grooms several trails for snowshoeing, skiing and walking."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Conditions",
                "text": "Grooming depends on snow; check the Town for current trail status."
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
            "text": "Across Stratford; several trailheads."
          },
          {
            "label": "Time to allow",
            "text": "An hour or more."
          }
        ],
        "link": {
          "label": "Town of Stratford: trails",
          "url": "https://stratford.hosted.civiclive.com/residents/respect_stratford/community_facilities/trails"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hillsborough River Views',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'Waterfront spots along the Southport shoreline look directly across the river to downtown Charlottetown.',
      tags: [{ label: 'Scenic', level: 'safe' }],
      details: {
        "lead": "Spots along the Southport shoreline look across the river to downtown Charlottetown.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "Stratford sits on a peninsula formed by the Hillsborough River estuary, Charlottetown Harbour and Hillsborough Bay."
              },
              {
                "title": "Bridge",
                "text": "The first Hillsborough River Bridge was built in 1905 by the Prince Edward Island Railway."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Viewpoints",
                "text": "No specific named lookouts were found; walk the shoreline in Southport."
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
            "text": "Southport, by the bridge."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Stratford (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Stratford,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Trails and the Hillsborough Shoreline',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Stratford Trail Network', dist: 'Townwide', text: 'Nearly 30 km of car-free walking and cycling trails.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Tea Hill Park Beach', dist: 'Keppoch Road', text: 'Public beach access on the Northumberland Strait.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: "Fullerton's Marsh Viewing", dist: "Fullerton's Creek Park", text: 'A viewing platform over a protected wetland.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Groomed Winter Trails', dist: 'Fullerton\'s Creek & Kenny Park', text: 'Winter grooming and clearing keeps key routes open year-round.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', name: 'Riverfront Views', dist: 'Southport', text: 'Direct views across the Hillsborough River to Charlottetown.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Robert Cotton Park Arboretum', dist: 'Town centre', text: 'Gardens and tree collections open to walk through.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Local Restaurants', area: 'Town centre', areaLevel: 'blue', text: 'A small but growing dining scene serving the fast-growing suburb.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving the local community.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery & Retail', area: 'Townwide', areaLevel: 'safe', text: 'Everyday shopping for residents, with downtown Charlottetown a short drive or bridge crossing away.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Nearby Charlottetown', areaLevel: 'gold', text: "Charlottetown's waterfront dining is minutes away across the river." },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the trails, beaches and waterfront parks.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather and fall colour along the trail network.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Groomed trails', text: 'Cold, but key trails like Fullerton\'s Creek are groomed for winter use.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, green season as the trails and parks reopen.' },
  ],

  gettingThere: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'From Charlottetown', text: 'Stratford sits directly across the Hillsborough River — a short drive over the bridge from downtown Charlottetown.', time: 'Minutes away' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, a short drive from Stratford.', time: 'Year-round' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick connects to the rest of PEI, with Stratford a short drive beyond Charlottetown.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Southport / Riverfront',
      area: 'Near the bridge',
      text: 'Close to the Hillsborough River crossing into downtown Charlottetown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Stratford+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Stratford%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Keppoch Waterfront',
      area: 'Near Tea Hill Park',
      text: 'Quieter options near the Strait shoreline and beach parks.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Stratford+Prince+Edward+Island', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Linked to Charlottetown',
      text: 'Stratford connects easily to downtown Charlottetown by car or local transit across the Hillsborough River, while its own trail network makes getting around town on foot or bike easy too.',
      linkLabel: 'Town of Stratford',
      linkUrl: 'https://townofstratford.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'The quickest way across the river to Charlottetown and the rest of the Island.' },
          { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', title: 'By Trail', text: 'Nearly 30 km of car-free trails connect Stratford\'s neighbourhoods and parks.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Local Transit', text: 'Bus routes link Stratford to Charlottetown.' },
        ],
      },
    ],
    proTip: {
      label: 'Location tip:',
      text: 'Staying in Stratford puts you minutes from downtown Charlottetown, with quieter, greener surroundings and direct access to riverfront and Strait-side parks.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Stratford / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
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
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Getting Around', text: 'A car or bike is the easiest way to get around, with an extensive local trail network.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Served by Queen Elizabeth Hospital in Charlottetown', '24-hour emergency department · Call 911'] },
  ],
};

export default STRATFORD;
