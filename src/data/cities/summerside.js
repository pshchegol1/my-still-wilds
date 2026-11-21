// Summerside, Prince Edward Island — данные страницы /city/summerside
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 16,001 чел. (перепись 2021, +7.8% к 2016 — 14,839), 7,097 занятых жилищ
//   из 7,393 всего, площадь 28.21 км², плотность 567.2/км². Второй по населению город PEI
//   (Wikipedia / StatCan census profile). Неофициальная оценка мэра на 2024-25 — ≈16,500,
//   указана отдельно как неофициальная.
// - Город основан (incorporated as a town) 1 апреля 1877, статус города (city) — 1 апреля
//   1995. Крупнейший работодатель — Canada Revenue Agency (общедоступный факт).
// - Consolidated Credit Union Place: многофункциональный центр по адресу 511 Notre Dame
//   Street, построен в две очереди, открыт в 2006 (ранее — Summerside Wellness Centre);
//   принимал Royal Bank Cup 2013 (национальный юниорский хоккейный чемпионат) и
//   предсезонный матч Kraft Hockeyville 2017; включает бассейн, горку, джакузи, фитнес-
//   центр, беговую дорожку, боулинг, каток (Wikipedia, architecture49.com).
// - Spinnakers' Landing — набережная в стиле рыбацкой деревни рядом с яхт-клубом,
//   управляется Port of Summerside, торговые точки и рестораны для туристов
//   (exploresummerside.com, CBC).
// - Eptek Art and Culture Centre — упоминается многократно как популярная
//   достопримечательность Саммерсайда, подробностей о текущей экспозиции не нашли —
//   формулировка в файле общая, без конкретных деталей выставок.
// - Prince County Hospital: 65 Roy Boates Avenue, Summerside, PE C1N 2A9,
//   тел. (902) 438-4200, отделение неотложной помощи — круглосуточно, после 20:00 все
//   двери закрыты кроме входа в Emergency (princeedwardisland.ca, erstat.ca). Отдельно
//   отметим: в прошлом были периодические перебои с ночными хирургическими операциями
//   (CBC-репортажи 2021-2023) — в файл эту деталь не включаем, т.к. она может быть уже
//   неактуальна, но сама больница и её адрес/режим ER подтверждены официально.
// - Фото в шапке: Wikimedia Commons, "Summerside, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 02.07.2025. GPS в EXIF: 46.386303, -63.791796 —
//   соответствует гавани/даунтауну Саммерсайда. Сравнивала с другим недавним снимком того
//   же автора (октябрь 2025) — выбрала этот за более чистую композицию и чёткость.
// - Видео в бесплатных банках не найдено (Pexels — нерелевантная выдача по запросу).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const SUMMERSIDE = {
  slug: 'summerside',
  name: 'Summerside',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Prince County',
  tag: "PEI's Second City",
  accentLevel: 'blue',
  heroIcon: '⚓',
  heroImage: '/Cities/Summerside/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.3959, lon: -63.7876 },

  subtitle: 'Harbour City on the Northumberland Strait',
  description:
    "Summerside is Prince Edward Island's second-largest city, a harbour town on the Northumberland Strait known for its waterfront, its deep roots in Acadian and shipbuilding history, and a compact downtown that mixes heritage architecture with modern community facilities. Spinnakers' Landing and the Summerside waterfront make it a natural base for exploring PEI's western half.",

  actions: [
    { label: 'Explore Downtown', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '16,001 (2021)' },
    { label: 'Role', value: "PEI's Second City" },
    { label: 'City Status Since', value: '1995' },
    { label: 'Setting', value: 'Harbour on Northumberland Strait' },
    { label: 'Region', value: 'Prince County' },
    { label: 'Known For', value: 'Waterfront & Heritage' },
  ],

  badges: ['Harbour City', 'Prince County', 'Walkable Downtown'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1877', label: 'Year Summerside was incorporated as a town', level: 'blue' },
    { value: '1995', label: 'Year Summerside became a city', level: 'gold' },
    { value: '16,001', label: 'Population at the 2021 census, up 7.8% from 2016', level: 'safe' },
    { value: '#2', label: "Largest city in Prince Edward Island by population", level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Historic Core', tagLevel: 'gold', meta: 'Heritage storefronts, City Hall and the main shopping streets',
      details: {
        "lead": "The commercial and civic heart of the city, a short walk from the waterfront.",
        "see": [
          {
            "title": "City",
            "text": "Summerside was incorporated as a town on 1 April 1877 and became a city in 1995 when it merged with St. Eleanors and Wilmot; the 2021 census counted 16,001 people."
          },
          {
            "title": "Waterfront",
            "text": "Spinnakers’ Landing, Eptek and the Harbourfront Theatre lie on the waterfront; see the attraction cards."
          },
          {
            "title": "Shops",
            "text": "No individual shops or restaurants were verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of Summerside."
          },
          {
            "label": "Time to allow",
            "text": "A couple of hours."
          },
          {
            "label": "Good to know",
            "text": "Venues keep their own hours."
          }
        ],
        "link": {
          "label": "Summerside (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Summerside,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
    { name: "Spinnakers' Landing & the Waterfront", icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbourfront', tagLevel: 'blue', meta: 'Fishing-village-style boardwalk next to the yacht club',
      details: {
        "lead": "A fishing-village-themed waterfront marketplace beside the Summerside Yacht Club, with a deck and boardwalk.",
        "see": [
          {
            "title": "Deck and boardwalk",
            "text": "Visitors relax on the deck and boardwalk; the site is seasonal."
          },
          {
            "title": "Summer programming",
            "text": "Weekly Landing After Dark evening shows and Matinee afternoons (1–3 pm), plus Canada Day events and a Makers Market in 2026."
          },
          {
            "title": "Eptek and the theatre",
            "text": "The Eptek Art and Culture Centre sits on the waterfront next to the Harbourfront Theatre."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Summerside waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No site-wide opening hours were found; tenants such as Jolly Roger’s Seafood list seasonal hours. Most of it is quiet in late November."
          }
        ],
        "link": {
          "label": "Explore Summerside: Spinnakers’ Landing",
          "url": "https://exploresummerside.com/?p=931"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Notre Dame Area', icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', tag: 'Recreation', tagLevel: 'purple', meta: 'Home to Credit Union Place and community sports facilities',
      details: {
        "lead": "The area around Notre Dame Street where the city’s main sports and recreation centre stands.",
        "see": [
          {
            "title": "Credit Union Place",
            "text": "Consolidated Credit Union Place is at 511 Notre Dame Street: an Aquatics Centre, a walking track and skating rinks. It is home to the Summerside Western Capitals."
          },
          {
            "title": "Walking track",
            "text": "A three-lane, 249.6 m, temperature-controlled track that the city says can be used year-round; use is free, but check the schedule."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "511 Notre Dame Street."
          },
          {
            "label": "Good to know",
            "text": "General facility hours on a 211 PEI listing: Mon–Fri 6 am–9 pm, Sat 7 am–9 pm, Sun 9 am–9 pm; confirm on 902-432-1234."
          }
        ],
        "link": {
          "label": "City of Summerside: Credit Union Place",
          "url": "https://summerside.hosted.civiclive.com/credit_union_place_sport__recreation_cen"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Slemon Park', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Former Air Base', tagLevel: 'caution', meta: 'Site of the old CFB Summerside, now an industrial and aviation park',
      details: {
        "lead": "The former CFB Summerside, now an aerospace and industrial park.",
        "see": [
          {
            "title": "History",
            "text": "Ottawa announced the base closure in 1989 and the base closed in 1991–92 (sources differ), with most military units moving to CFB Greenwood in Nova Scotia."
          },
          {
            "title": "Today",
            "text": "Slemon Park Corporation took over the roughly 1,400-acre property in 1992; more than 1,000 people work at businesses there, with Vector Aerospace and Honeywell Aerospace among its anchor tenants."
          },
          {
            "title": "Ownership",
            "text": "The Province later bought the property from Slemon Park Corporation."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At Summerside Airport on the edge of the city."
          },
          {
            "label": "Good to know",
            "text": "An industrial site; the public areas and aviation heritage displays were not verified."
          }
        ],
        "link": {
          "label": "Slemon Park: about",
          "url": "https://slemonpark.com/about/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'St. Eleanors', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Residential area on the western edge of the city',
      details: {
        "lead": "A residential area on the edge of the city, once its own community.",
        "see": [
          {
            "title": "History",
            "text": "A rural farming area until the Second World War, when the federal government bought farmland there for RCAF Station Summerside."
          },
          {
            "title": "Amalgamation",
            "text": "In 1995 St. Eleanors and Wilmot merged with the Town of Summerside to form the City of Summerside."
          },
          {
            "title": "Visitor sights",
            "text": "No visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of the city."
          },
          {
            "label": "Good to know",
            "text": "Mainly homes and local services."
          }
        ],
        "link": {
          "label": "St. Eleanors (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/St._Eleanors,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: "Spinnakers' Landing",
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: "Summerside's waterfront marketplace, built in a fishing-village theme beside the yacht club, with shops and restaurants.",
      tags: [{ label: 'Waterfront', level: 'blue' }, { label: 'Family', level: 'safe' }],
      details: {
        "lead": "A fishing-village-themed waterfront marketplace beside the Summerside Yacht Club, with shops, restaurants, a deck and a boardwalk.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "A deck and boardwalk beside the yacht club."
              },
              {
                "title": "Events",
                "text": "In 2026 the programme included weekly Landing After Dark shows, weekly Matinees (1–3 pm), Canada Day and a Makers Market on 6 September."
              },
              {
                "title": "Tours",
                "text": "A Segway Baywalk tour is listed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Tenants are seasonal (for example Jolly Roger’s Seafood lists seasonal hours); expect it to be quiet in late November."
              },
              {
                "title": "Hours",
                "text": "No site-wide hours were found; check the Port of Summerside or Explore Summerside."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk around; shops and food extra."
          },
          {
            "label": "Getting there",
            "text": "On the Summerside waterfront."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Explore Summerside: Spinnakers’ Landing",
          "url": "https://exploresummerside.com/?p=931"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Consolidated Credit Union Place',
      icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg',
      text: 'The city’s main sports and recreation centre, with an Aquatics Centre (lap pool and a leisure pool with a waterslide), a walking track and ice rinks.',
      tags: [{ label: 'Recreation', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "The city’s main sports and recreation centre at 511 Notre Dame Street, with an Aquatics Centre, a walking track and skating rinks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Aquatics Centre",
                "text": "A 25 m, six-lane lap pool and a leisure pool with what the city calls one of the fastest waterslides on PEI."
              },
              {
                "title": "Walking track",
                "text": "A free, three-lane, 249.6 m track that the city says can be used year-round."
              },
              {
                "title": "Hockey",
                "text": "The arena is home to the Summerside Western Capitals; sources differ on whether there are two NHL-size ice surfaces."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "A 211 PEI listing gives Mon–Fri 6 am–9 pm, Sat 7 am–9 pm, Sun 9 am–9 pm, but public swim times were not found. Phone 902-432-1234."
              },
              {
                "title": "Day pass",
                "text": "The city lists an adult pool day pass at $8.23; check the current price."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Pool day pass about $8.23 per adult; walking track free."
          },
          {
            "label": "Getting there",
            "text": "511 Notre Dame Street."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Summerside: Credit Union Place",
          "url": "https://summerside.hosted.civiclive.com/credit_union_place_sport__recreation_cen"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Eptek Art and Culture Centre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: "A PEI Museum and Heritage Foundation site on the Summerside waterfront, hosting temporary and travelling exhibitions and a permanent Summerside history exhibit.",
      tags: [{ label: 'Culture', level: 'gold' }],
      details: {
        "lead": "A PEI Museum and Heritage Foundation site at 130 Heather Moyse Drive on the Summerside waterfront, next to the Harbourfront Theatre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Exhibitions",
                "text": "Temporary local and travelling exhibitions plus a permanent Summerside history exhibit."
              },
              {
                "title": "Admission",
                "text": "By donation; a suggested $5."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listings conflict. The 2025 PEI Museum schedule for September was Tuesday to Friday 10–4 and Sunday 12–4; Tourism PEI asks visitors to check the website and social media for current dates."
              },
              {
                "title": "Phone",
                "text": "902-888-8373."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "By donation (suggested $5)."
          },
          {
            "label": "Getting there",
            "text": "130 Heather Moyse Drive, waterfront."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "PEI Museum: Eptek",
          "url": "https://peimuseum.ca/visit/eptek-art-culture-centre"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'College of Piping and Celtic Performing Arts',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: "A centre dedicated to Celtic music and dance, reflecting PEI's Scottish heritage.",
      tags: [{ label: 'Culture', level: 'purple' }],
      details: {
        "lead": "A Celtic music and dance school that grew from a volunteer effort in the 1980s to revive a local pipe band.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "The band became affiliated with the college in 1990 and the name was officially adopted in 1993."
              },
              {
                "title": "School",
                "text": "Described as the only year-round school of its kind in North America."
              },
              {
                "title": "Performing arts centre",
                "text": "The Scott MacAulay Performing Arts Centre opened on the campus in 2018; sources give 280 or 290 seats."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Shows",
                "text": "Performance dates were not verified; check the college or Tourism PEI for the current programme."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies by show."
          },
          {
            "label": "Getting there",
            "text": "In Summerside; see the college site for the address."
          },
          {
            "label": "Time to allow",
            "text": "A show or a visit by arrangement."
          }
        ],
        "link": {
          "label": "Explore Summerside: College of Piping",
          "url": "https://exploresummerside.com/?p=574"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Harbourfront Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: "Summerside's live performance venue, hosting touring and local productions.",
      tags: [{ label: 'Arts', level: 'gold' }],
      details: {
        "lead": "A 520-seat professional theatre on the waterfront, presenting live music, theatre, dance and special events year-round.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Opened",
                "text": "In 1996 as part of the Wyatt Centre, alongside the Eptek Art and Culture Centre and the PEI Sports Hall of Fame."
              },
              {
                "title": "Programme",
                "text": "Touring and local productions through the year."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "Check the theatre for current shows and prices."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies by show."
          },
          {
            "label": "Getting there",
            "text": "On the Summerside waterfront."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          }
        ],
        "link": {
          "label": "Explore Summerside: Harbourfront Theatre",
          "url": "https://exploresummerside.com/member/harbourfront-theatre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'PEI Sports Hall of Fame',
      icon: '🏆', iconSrc: '/icons/attractions/ph_trophy-thin.svg',
      text: "A small museum celebrating the island's sporting history.",
      tags: [{ label: 'Museum', level: 'blue' }],
      details: {
        "lead": "A small hall celebrating Island athletes and teams, in the Wyatt Centre on the waterfront.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Inductees",
                "text": "Since 1968 the Hall of Fame has welcomed over one hundred individuals and teams."
              },
              {
                "title": "Location",
                "text": "It shares the Wyatt Centre with the Harbourfront Theatre and Eptek."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No current hours were found; check before going."
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
            "text": "Wyatt Centre, Summerside waterfront."
          },
          {
            "label": "Time to allow",
            "text": "About 30 minutes."
          }
        ],
        "link": {
          "label": "Explore Summerside: PEI Sports Hall of Fame",
          "url": "https://exploresummerside.com/member/pei-sports-hall-of-fame/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Harbourfront and Open Water',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Confederation Trail', dist: 'Through Summerside', text: "PEI's province-spanning rail-trail network passes through the city." },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Silver Fox Curling & Yacht Club', dist: 'Waterfront', text: 'Sailing and yacht club activity on the harbour.' },
    { icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg', name: 'Indoor Pool & Waterslide', dist: 'Credit Union Place', text: 'Year-round swimming regardless of weather.' },
    { icon: '⛳', iconSrc: '/icons/attractions/ph_golf-thin.svg', name: 'Summerside Golf & Country Club', dist: 'Near downtown', text: 'A local golf course open to visitors.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: "Spinnakers' Landing Boardwalk", dist: 'Waterfront', text: 'A scenic walk along the harbour.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Northumberland Strait Views', dist: 'Waterfront', text: 'Open water views across the strait.' },
  ],

  food: [
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'blue', text: 'Mussels, oysters and other local seafood on area menus.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: "Spinnakers' Landing Dining", area: 'Waterfront', areaLevel: 'gold', text: 'Restaurants along the harbour boardwalk.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops and casual spots along the main streets.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Local Markets', area: 'Citywide', areaLevel: 'safe', text: 'Island produce and local goods.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Breweries', area: 'Downtown', areaLevel: 'caution', text: "A small but growing craft beverage scene." },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm harbour days, the busiest time for the waterfront and local events.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Fewer crowds and mild weather.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Quiet season', text: 'Cold, with indoor venues like Credit Union Place taking over from outdoor activity.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet, lower-priced time as the city wakes back up.' },
  ],

  gettingThere: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Summerside Airport (YSU) and nearby Slemon Park handle limited air traffic; most visitors fly into Charlottetown.', time: 'Limited service' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Road', text: 'About 40 minutes from Charlottetown and roughly 30 minutes from the Confederation Bridge by car.', time: 'Year-round' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick is the main route onto the Island for visitors arriving by car.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and inns near the heritage core and main shopping streets.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Summerside+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Summerside%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Waterfront',
      area: "Near Spinnakers' Landing",
      text: 'Accommodations close to the harbour boardwalk and yacht club.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Summerside+Prince+Edward+Island', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'Compact and Car-Friendly',
      text: 'Downtown Summerside is small and walkable, while a car makes it easy to reach Credit Union Place, Slemon Park and the rest of western PEI.',
      linkLabel: 'City of Summerside',
      linkUrl: 'https://www.summerside.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are easily walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'Recommended for reaching outlying areas and other parts of western PEI.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally for shorter trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Trip tip:',
      text: 'Summerside makes a convenient base for day trips across western PEI, including the Confederation Trail and North Cape.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Summerside / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
      { icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', label: 'Recreation admissions: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Waterfront walks: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Major Airport', text: 'Charlottetown Airport (YYG), about 40 minutes away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Getting Around', text: 'Downtown is walkable; a car is recommended for the rest of western PEI.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Prince County Hospital, 65 Roy Boates Avenue', '24-hour emergency department · Call 911'] },
  ],
};

export default SUMMERSIDE;
