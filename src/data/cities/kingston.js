// Kingston — данные страницы /city/kingston
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Braeson Holland, описание "university town in Kingston, Canada".
// Проверено по кадрам: часовая башня Grant Hall Университета Куинс,
// University Avenue к озеру Онтарио, труба больницы Kingston General —
// это Кингстон, Онтарио (а не Ямайка и не Кингстон-на-Темзе). Снято
// поздней осенью или ранней весной, деревья голые. Оригинал 2560×1440,
// 24,7 МБ — пережат в 1920×1080, ~5,5 МБ; постер — первый кадр.
// Население — перепись 2021 года: оценки на 2025 у разных источников
// расходятся от 129 до 150 тысяч. Тарифы Kingston Transit — с сайта
// перевозчика, дата вступления там не указана.

export const KINGSTON = {
  slug: 'kingston',
  name: 'Kingston',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Where the Lake Meets the St. Lawrence',
  accentLevel: 'purple',
  heroIcon: '🏛️',
  heroImage: '/Cities/Kingston/hero-poster.jpg',
  heroVideo: '/Cities/Kingston/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.2312, lon: -76.486 },
  subtitle: 'The Limestone City',
  description:
    'A city of grey limestone at the eastern end of Lake Ontario, where the lake drains into the St. Lawrence and the Rideau Canal begins. Canada’s first capital, a fortress town, a prison town and a university town all at once — and the gateway to the Thousand Islands.',

  actions: [
    { label: 'Explore Kingston', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈132K (2021)' },
    { label: 'Climate', value: 'Lakeside · Windy' },
    { label: 'Rideau Canal', value: 'UNESCO site' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈260 km · 2.5h' },
    { label: 'From Ottawa', value: '≈195 km · 2h' },
  ],

  badges: ['Limestone City', 'First Capital', 'Katarokwi'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1841', label: 'Kingston becomes the first capital of the united Province of Canada — the seat moved on in 1844', level: 'gold' },
    { value: '2007', label: 'The Rideau Canal and Kingston’s fortifications are inscribed together as a UNESCO World Heritage Site', level: 'blue' },
    { value: '1835', label: 'Kingston Penitentiary opens — it held prisoners until 2013 and now runs tours led by former staff', level: 'danger' },
    { value: '2021', label: 'Council votes 12–1 to remove the Sir John A. Macdonald statue from City Park over residential schools', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown & the Waterfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Limestone City Hall · Market Square · Princess Street · Confederation Basin',
      details: {
        "lead": "The limestone City Hall faces the waterfront across Market Square. Confederation Basin and Princess Street are close.",
        "see": [
          {
            "title": "City Hall tours",
            "text": "Free guided tours of about 45 minutes ran in summer; a 2026 guide gave May 19 to October 9, with times that vary by source. Check the City’s site."
          },
          {
            "title": "Market Square",
            "text": "The Kingston Public Market moved to winter hours on November 1, opening at 9 am. A skating rink appears here in winter."
          },
          {
            "title": "Canadian Museum of Health Care",
            "text": "Listed as open daily, 10 am–4 pm."
          }
        ],
        "practical": [
          {
            "label": "Visitor centre",
            "text": "The Visitor Information Centre was listed Monday to Saturday 9 am–8 pm and Sunday 9 am–7 pm; check current hours."
          },
          {
            "label": "Getting there",
            "text": "The centre of the city, on the lake; walkable."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Visit Kingston",
          "url": "https://www.visitkingston.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Queen’s & Sydenham', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'University', tagLevel: 'purple', meta: 'Queen’s University campus · Grant Hall · Old limestone streets by the lake',
      details: {
        "lead": "Queen’s University’s limestone campus, with Grant Hall and old limestone streets by the lake.",
        "see": [
          {
            "title": "Queen’s campus",
            "text": "Limestone buildings, including Grant Hall, in a walkable campus."
          },
          {
            "title": "Old limestone streets",
            "text": "Historic houses and streets running down to the lake."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, close to the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Visit Kingston",
          "url": "https://www.visitkingston.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Portsmouth Village', icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', tag: 'West', tagLevel: 'blue', meta: 'Olympic harbour from 1976 · Kingston Penitentiary · Waterfront trail',
      details: {
        "lead": "The village by the Olympic harbour from 1976, with Kingston Penitentiary and the waterfront trail.",
        "see": [
          {
            "title": "Kingston Penitentiary",
            "text": "Tours ran April 4 to October 31, 2026. Standard $42.13, Extended $81.13, Express $27.13 (45 minutes), all fees and HST included. Kingston residents and local post-secondary students get 20% off."
          },
          {
            "title": "Olympic harbour",
            "text": "The harbour built for the 1976 Olympic sailing events."
          },
          {
            "title": "Waterfront trail",
            "text": "A trail along the lake shore."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown along the lake."
          },
          {
            "label": "Winter",
            "text": "The penitentiary tour season has ended; check kingstonpentours.com for 2027."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours with a tour."
          }
        ],
        "link": {
          "label": "Kingston Pen Tours",
          "url": "https://www.kingstonpentours.com/visit/admissions/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Point Frederick & Fort Henry', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'East', tagLevel: 'danger', meta: 'Royal Military College · Fort Henry on its hill · Views back over the city',
      details: {
        "lead": "The Royal Military College, Fort Henry on its hill and views back over the city.",
        "see": [
          {
            "title": "Fort Henry",
            "text": "The 2026 season ran May 16 to September 7, 10 am–5 pm. Fall programming ran Wednesday to Sunday September 9–27. The next season is planned for 2027."
          },
          {
            "title": "Royal Military College",
            "text": "The military college on Point Frederick."
          },
          {
            "title": "Views",
            "text": "The hill looks back over the city and harbour."
          }
        ],
        "practical": [
          {
            "label": "Admission",
            "text": "A guidebook gave adults about $20 before tax and a family rate of $60."
          },
          {
            "label": "Getting there",
            "text": "East of downtown, across the Cataraqui River."
          },
          {
            "label": "Good to know",
            "text": "Fort Henry is closed in winter."
          }
        ],
        "link": {
          "label": "Fort Henry: admissions",
          "url": "https://www.forthenry.com/visit/admissions/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Williamsville & Princess St', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'Up-town', tagLevel: 'olive', meta: 'Long commercial street · Local restaurants · Student neighbourhoods',
      details: {
        "lead": "A long commercial street with local restaurants, in a student neighbourhood.",
        "see": [
          {
            "title": "Princess Street",
            "text": "Shops, pubs and restaurants run inland from the waterfront."
          },
          {
            "title": "Local restaurants",
            "text": "A concentration of local restaurants in a long commercial stretch."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown on Princess Street."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a meal."
          }
        ],
        "link": {
          "label": "Visit Kingston",
          "url": "https://www.visitkingston.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Wolfe Island', icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Across the water', tagLevel: 'safe', meta: 'Free car ferry from downtown · Farmland and wind turbines · Quiet roads for cycling',
      details: {
        "lead": "A quiet island reached by a car ferry from downtown, with farmland, wind turbines and roads that are good for cycling.",
        "see": [
          {
            "title": "The ferry",
            "text": "The car ferry runs from downtown Kingston. The ferry is described as free; confirm the current schedule."
          },
          {
            "title": "Cycling",
            "text": "Quiet roads across farmland and wind turbines."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By ferry from downtown; check the current timetable."
          },
          {
            "label": "Time to allow",
            "text": "A half day to a full day."
          }
        ],
        "link": {
          "label": "Visit Kingston",
          "url": "https://www.visitkingston.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Fort Henry',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A 19th-century British fortress on a hill east of downtown, built to defend the end of the Rideau Canal and the naval dockyard. In summer it comes alive with drill, musket and artillery demonstrations, and the evening Sunset Ceremony. Part of the Rideau Canal UNESCO World Heritage Site.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Summer programs', level: 'safe' }],
      details: {
        "lead": "A 19th-century British fortress on a hill east of downtown. In summer it comes alive with drill, musket and artillery demonstrations and the evening Sunset Ceremony.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "May 16 to September 7, 10 am–5 pm. Fall programming ran Wednesday to Sunday, September 9–27, 10 am–4:30 pm."
              },
              {
                "title": "Sunset Ceremony",
                "text": "Six Wednesday performances in 2026, from July 29 to September 2, with doors at 6 pm."
              },
              {
                "title": "Admission",
                "text": "A guidebook listed adults at $20 before tax and a family rate of $60; fall tickets were $13."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The fort is closed for the season; the next season is planned for 2027."
              },
              {
                "title": "Fort Fright",
                "text": "The October haunt ran evenings, with tickets from about $25 to $30 plus HST."
              },
              {
                "title": "Check dates",
                "text": "Confirm the 2027 dates on forthenry.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $20 for adults."
          },
          {
            "label": "Getting there",
            "text": "On a hill east of downtown."
          },
          {
            "label": "Best time",
            "text": "Summer, for the demonstrations."
          }
        ],
        "link": {
          "label": "Fort Henry",
          "url": "https://www.forthenry.com/visit/admissions/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Kingston Penitentiary',
      icon: '🔒', iconSrc: '/icons/attractions/ph_lock-thin.svg',
      text: 'Opened in 1835 and closed in 2013, one of the oldest prisons in Canada. Tours run from spring to the end of October, many led by former correctional officers who worked there — candid, unsettling and among the best-reviewed tours in the province. Book ahead in season.',
      tags: [{ label: 'Book ahead', level: 'danger' }, { label: 'Apr–Oct', level: 'caution' }],
      details: {
        "lead": "Opened in 1835 and closed in 2013, one of the oldest prisons in Canada. Tours are led by former staff.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "April 4 to October 31, 2026."
              },
              {
                "title": "Tours and prices",
                "text": "Standard $42.13, Extended $81.13 (2.5 hours) and Express $27.13 (45 minutes), with fees and HST included."
              },
              {
                "title": "Discounts",
                "text": "Kingston residents (with ID) and local post-secondary students get 20% off."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book ahead",
                "text": "Tours sell out in season."
              },
              {
                "title": "Closed now",
                "text": "The season has ended; no 2027 dates were found, so check kingstonpentours.com."
              },
              {
                "title": "Hard subject",
                "text": "The tours are candid and can be unsettling."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, from about $27."
          },
          {
            "label": "Getting there",
            "text": "In Portsmouth Village, west of downtown."
          },
          {
            "label": "Best time",
            "text": "April to October."
          }
        ],
        "link": {
          "label": "Kingston Pen Tours",
          "url": "https://www.kingstonpentours.com/visit/admissions/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rideau Canal at Kingston Mills',
      icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'The southern end of the 202 km Rideau Canal, opened in 1832 and still working with its original hand-operated locks. The flight of locks at Kingston Mills, just north of the city, is the place to watch boats rise through the rock cut.',
      tags: [{ label: 'Free to watch', level: 'safe' }, { label: 'UNESCO', level: 'blue' }],
      details: {
        "lead": "The southern end of the 202 km Rideau Canal, opened in 1832 and still working with its original hand-operated locks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "Navigation ended on October 13. The site is closed to the public from October 14 to May 14."
              },
              {
                "title": "Lock hours",
                "text": "Summer hours ran Monday to Thursday 9 am–6 pm (June 19 to September 7); shoulder-season hours were 10 am–4 pm."
              },
              {
                "title": "Free lockage",
                "text": "Ran June 19 to September 7, 2026; regular fees applied from September 8."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The canal is closed for the winter and not maintained."
              },
              {
                "title": "Hours not guaranteed",
                "text": "Water management or maintenance can interrupt lockage."
              },
              {
                "title": "Best view",
                "text": "Watch boats rise through the rock cut at the flight of locks."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to watch; boaters pay lockage fees."
          },
          {
            "label": "Getting there",
            "text": "Just north of Kingston."
          },
          {
            "label": "Best time",
            "text": "Mid-May to mid-October."
          }
        ],
        "link": {
          "label": "Parks Canada: Rideau Canal",
          "url": "https://parks.canada.ca/lhn-nhs/on/rideau/visit/basse-saison-off-season"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Thousand Islands',
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      text: 'East of the city the St. Lawrence breaks into more than a thousand islands of granite and pine. Cruises leave from downtown Kingston and from Gananoque; drive the Thousand Islands Parkway for the views. Our road-trip guide covers the route.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Cruises seasonal', level: 'caution' }],
      details: {
        "lead": "East of the city the St. Lawrence breaks into more than a thousand islands. Cruises leave from downtown Kingston and from Gananoque.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Operators run daily from April to October from Kingston, Gananoque, Ivy Lea, Rockport and Brockville."
              },
              {
                "title": "Kingston cruises",
                "text": "A 3-hour riverboat cruise was listed at about $51; a lunch cruise at about $77–78; a sunset dinner cruise at about $102–103."
              },
              {
                "title": "Gananoque cruises",
                "text": "The 1-hour sightseeing cruise was listed from about $29–30 (often in USD); the 3-hour cruise from about $41 to $66."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices vary",
                "text": "Listings differ by site and currency; check the operator."
              },
              {
                "title": "Closed now",
                "text": "The cruise season has ended for the year."
              },
              {
                "title": "By road",
                "text": "Drive the Thousand Islands Parkway for the views."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, from about $30 to $100 depending on the cruise."
          },
          {
            "label": "Getting there",
            "text": "From downtown Kingston or Gananoque."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Kingston 1000 Islands Cruises",
          "url": "https://kingston1000islandscruises.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bellevue House & the Macdonald Debate',
      icon: '⚖️', iconSrc: '/icons/attractions/ph_scales-thin.svg',
      text: 'Sir John A. Macdonald, Canada’s first prime minister, lived in Kingston and is buried here. In 2021 the city removed his statue from City Park, citing his role in creating the residential school system. His former home, Bellevue House, is a national historic site whose interpretation has been reworked to address the harm his policies did, not only his nation-building.',
      tags: [{ label: 'Hard history', level: 'danger' }],
      details: {
        "lead": "The former home of Sir John A. Macdonald, now a national historic site. Its interpretation reflects the debate over his legacy.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 hours",
                "text": "May 16 to June 30: Thursday to Monday, 10 am–5 pm. July 1 to August 31: daily. September 1 to October 14: Thursday to Monday. Last admission 4 pm."
              },
              {
                "title": "Closed",
                "text": "October 15, 2026 to May 15, 2027."
              },
              {
                "title": "The house",
                "text": "The house is open 10 am–4 pm, and the visitor centre and grounds 10 am–5 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Fees apply, with free admission for youth. No current adult price was found."
              },
              {
                "title": "The debate",
                "text": "In 2021 the city removed Macdonald’s statue from City Park, citing his role in creating the residential school system."
              },
              {
                "title": "Check dates",
                "text": "Other sources give slightly different September dates; confirm with Parks Canada."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; youth free."
          },
          {
            "label": "Getting there",
            "text": "On the lake shore west of downtown."
          },
          {
            "label": "Best time",
            "text": "May to mid-October."
          }
        ],
        "link": {
          "label": "Parks Canada: Bellevue House",
          "url": "https://www.parks.canada.ca/lhn-nhs/on/bellevue/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Downtown & Market Square',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The grand limestone City Hall faces the waterfront across Market Square, where a farmers’ market runs in the warm months and a skating rink appears in winter. Princess Street climbs inland lined with shops, pubs and restaurants.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
      details: {
        "lead": "The grand limestone City Hall faces the waterfront across Market Square, where a farmers’ market runs in the warm months and a skating rink appears in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Public Market",
                "text": "The Kingston Public Market moved to winter hours on November 1, opening at 9 am."
              },
              {
                "title": "City Hall tours",
                "text": "Free guided tours ran in summer, about 45 minutes. A 2026 guide gave May 19 to October 9."
              },
              {
                "title": "Princess Street",
                "text": "Climbs inland lined with shops, pubs and restaurants."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tour times",
                "text": "Times differ by source; check the City’s site."
              },
              {
                "title": "Rink",
                "text": "The winter rink’s dates were not confirmed."
              },
              {
                "title": "Visitor centre",
                "text": "The Visitor Information Centre was listed Monday to Saturday 9 am–8 pm, Sunday 9 am–7 pm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk; City Hall tours were free."
          },
          {
            "label": "Getting there",
            "text": "The centre of the city, on the lake."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          }
        ],
        "link": {
          "label": "Visit Kingston",
          "url": "https://www.visitkingston.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lake, River and Canal',
  outdoor: [
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Sailing', dist: 'Portsmouth · Downtown', text: 'Kingston hosted the sailing events of the 1976 Montréal Olympics and still calls itself a freshwater sailing capital. The afternoon winds off the lake are reliable — and can be strong.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Wolfe Island Cycling', dist: 'Free ferry', text: 'Take the free car ferry from downtown and cycle flat, quiet farm roads among the wind turbines. Check the ferry schedule for the return.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Rideau · Thousand Islands', text: 'The canal’s lakes north of the city and the islands to the east are classic paddling waters. Big ship traffic and wind on the St. Lawrence demand care.' },
    { icon: '🤿', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Shipwreck Diving', dist: 'Lake Ontario', text: 'Cold, clear water preserves dozens of 19th- and 20th-century wrecks off Kingston. Guided dives only; the water stays cold year-round.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Waterfront Trail', dist: 'Along the lake', text: 'A walking and cycling route along the shore links downtown, Queen’s, Portsmouth and the parks to the west.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Market Square', text: 'An outdoor rink in front of City Hall in winter. Cold, windy and very pretty with the limestone lit up at night.' },
  ],

  food: [
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Market Square', area: 'Downtown', areaLevel: 'olive', text: 'One of the oldest public markets in Ontario, with farmers and makers in the warm season. Check current days before going.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs & Breweries', area: 'Downtown', areaLevel: 'gold', text: 'Limestone pubs and local breweries — a student city has plenty of both.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Princess Street', area: 'Downtown', areaLevel: 'danger', text: 'The main restaurant strip, from cheap student eats to serious dining rooms.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Prince Edward County', area: '≈1h west', areaLevel: 'purple', text: 'A wine and food region across the Bay of Quinte, an easy day trip by car and a short free ferry.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown · Queen’s', areaLevel: 'blue', text: 'Independent coffee shops around campus and in the old downtown blocks.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Local Producers', area: 'Wolfe Island · Countryside', areaLevel: 'safe', text: 'Cheese, maple and farm produce from the surrounding countryside at the market and in shops.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Locks open', text: 'The canal reopens to boats in May, the penitentiary tours resume, and the city fills back up. Cool and windy by the lake.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Fort Henry programs, island cruises, sailing and festivals. Warm, sometimes humid, with lake breezes. Book accommodation early.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour and students', text: 'Fall colour along the canal and in the Thousand Islands. Queen’s homecoming and move-in weekends pack the city — avoid them unless that is the point.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold and windy', text: 'Cold, grey and windy off the lake, with ice on the water. Many seasonal attractions close.' },
  ],

  gettingThere: [
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'Kingston is on VIA Rail’s Toronto–Ottawa–Montréal corridor, with frequent trains. The station is north of downtown; take a bus or taxi in.',
      time: '≈2.5h from Toronto · ≈2h from Ottawa',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Highway 401',
      text: 'Highway 401 runs past the city between Toronto and Montréal. Highway 15 and the Rideau region connect north toward Ottawa.',
      time: '≈2.5h from Toronto · ≈3h from Montréal',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Kingston has a small regional airport. Most visitors fly into Toronto, Ottawa or Montréal and continue by train.',
      time: 'Limited service',
    },
    {
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      title: 'Thousand Islands Route',
      text: 'The Thousand Islands Parkway runs east from near Gananoque toward Brockville along the river — see our Kingston to the Thousand Islands road trip.',
      time: '≈30 min to Gananoque',
    },
  ],

  stay: [
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Waterfront',
      text: 'Hotels and inns near the waterfront, Market Square and Princess Street. Expensive and fully booked on Queen’s weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kingston+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Kingston%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway 401 Corridor',
      area: 'Cheaper · Car needed',
      text: 'Chain hotels by the highway north of the city, practical for a road-trip stop.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kingston+Ontario', level: 'blue' },
      ],
    },
    {
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      title: 'Gananoque',
      area: 'Thousand Islands · 30 min',
      text: 'A small river town at the heart of the Thousand Islands, with inns and cruise departures.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gananoque+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Kingston Transit',
      text: 'City buses cover downtown, Queen’s, the train station and the suburbs, with express routes across town. For Fort Henry, Kingston Mills and the Thousand Islands, a car, bike or tour is easier.',
      linkLabel: 'Kingston Transit',
      linkUrl: 'https://www.kingstontransit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from Kingston Transit’s standard fares page (no effective date is shown). Cash fares are coins only and drivers carry no change. Children 14 and under ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (coins): $3.50', 'Day pass: $10', '6-ride pass: $14', 'Monthly pass: $61.75'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.kingstontransit.ca/fares-and-passes/standard-fares-and-passes/',
      },
      {
        icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
        title: 'Wolfe Island Ferry',
        text: 'The provincial car ferry to Wolfe Island leaves from downtown and is free. Summer queues for cars can be long; foot passengers and cyclists board easily.',
        fareBox: {
          label: 'Ferry',
          lines: ['Fare: free', 'From downtown Kingston', 'Check the schedule'],
        },
        linkLabel: 'Ontario ferries',
        linkUrl: 'https://www.ontario.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the waterfront and Queen’s are compact and walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The waterfront trail and Wolfe Island are excellent by bike.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available; useful from the train station.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the canal locks, Prince Edward County and the Parkway.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'Check the Queen’s University calendar before booking. Move-in week and homecoming fill every room in town and send prices soaring.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Kingston hotels and short-term rentals also charge a Municipal Accommodation Tax, introduced at 4% in 2018 — confirm the current rate on your booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Kingston / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 13% HST + Municipal Accommodation Tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tours and admissions: 13% HST' },
    ],
    exempt: [
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Wolfe Island ferry: free' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Tour guides: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', title: 'Student City', text: 'Queen’s University shapes the calendar. Early September and homecoming weekends are crowded and loud; summer is quieter.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Lake Wind', text: 'The wind off Lake Ontario makes summer evenings cool and winter brutal. Bring a layer even in July.' },
    { icon: '🔒', iconSrc: '/icons/attractions/ph_lock-thin.svg', title: 'Book the Pen Tours', text: 'Kingston Penitentiary tours run roughly April to October and sell out on summer weekends.' },
    { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'Train Is Easy', text: 'VIA Rail makes Kingston an easy stop between Toronto, Ottawa and Montréal without a car.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Exact Change', text: 'Kingston Transit takes coins only for cash fares, with no change given. A day pass is simpler.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Kingston stands at Katarokwi, the traditional homeland of the Anishinaabe, Haudenosaunee and Huron-Wendat. The name Cataraqui, still used for the river and parts of the city, comes from it.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Kingston General Hospital', '76 Stuart Street', 'Emergencies: call 911'] },
  ],
};

export default KINGSTON;
