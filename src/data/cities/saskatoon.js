// Saskatoon — данные страницы /city/saskatoon (Саскатун, САСКАЧЕВАН)
// Видео Саскатуна в бесплатных банках нет: Pexels по "saskatoon" отдаёт
// Эдмонтон (ролики August Domingo с рекой и мостами — это мост Walterdale
// в Эдмонтоне, проверено по кадрам), Pixabay — пусто.
// В шапке фото с Wikimedia Commons — Саскатун сверху осенью, изгиб South
// Saskatchewan River и центр, автор Quintin Soloviev, октябрь 2025,
// CC BY 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (266 141 город, 317 480 агломерация).
// Тарифы — saskatoontransit.ca/fares (с 1 июля 2026; следующее повышение
// 1 января 2027). Сбор 4% Destination Marketing Fee — Discover Saskatoon.
// Больницы — sk.211.ca. Саскачеван не переводит часы (UTC-6 круглый год).
// Remai Modern, Wanuskewin, Bessborough, Meewasin — из общих знаний.

export const SASKATOON = {
  slug: 'saskatoon',
  name: 'Saskatoon',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · City of Bridges',
  accentLevel: 'gold',
  heroIcon: '🌉',
  heroImage: '/Cities/Saskatoon/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.1332, lon: -106.6700 },
  subtitle: 'The City of Bridges',
  description:
    'Saskatchewan’s largest city spreads along both banks of the South Saskatchewan River, stitched together by a row of bridges and a long green riverside trail system. Saskatoon pairs a castle-like railway hotel and a striking modern art gallery with deep Indigenous history at Wanuskewin — and endless prairie sky just beyond the suburbs.',

  actions: [
    { label: 'Explore Saskatoon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈266K (2021)' },
    { label: 'Metro Area', value: '≈317K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'Airport', value: 'YXE · ≈15 min' },
    { label: 'To Regina', value: '≈2 h 45 min by car' },
  ],

  badges: ['City of Bridges', 'River Valley', 'Prairie Hub'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '266,141', label: 'People in the 2021 census — Saskatchewan’s largest city', level: 'blue' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks for daylight saving', level: 'purple' },
    { value: '$3.25', label: 'A single bus ride since July 1, 2026; kids in Grade 8 and under ride free', level: 'safe' },
    { value: '4%', label: 'Destination marketing fee added by participating hotels, on top of GST and PST', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & River Landing', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Remai Modern · Farmers’ market · Riverfront promenade',
      details: {
        "lead": "The city centre on the South Saskatchewan River, with Remai Modern and the riverfront.",
        "see": [
          {
            "title": "Remai Modern",
            "text": "The art museum at 102 Spadina Crescent E; admission is by donation. See the attraction below."
          },
          {
            "title": "Delta Bessborough",
            "text": "The château-style railway hotel on the river, finished in 1932."
          },
          {
            "title": "Riverfront",
            "text": "The Meewasin trails run along the river through the centre."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city, on the river."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "The farmers’ market is in Riversdale."
          }
        ],
        "link": {
          "label": "Discover Saskatoon",
          "url": "https://www.discoversaskatoon.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Broadway', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: 'Lively', tagLevel: 'purple', meta: 'Cafés, independent shops, restaurants and the historic Broadway Theatre',
      details: {
        "lead": "Broadway Avenue, the original main street of the town of Nutana, now a shopping and cultural strip.",
        "see": [
          {
            "title": "The avenue",
            "text": "Independent boutiques, cafés, restaurants and bars. The Business Improvement District, set up in 1986, drove its revival."
          },
          {
            "title": "Broadway Theatre",
            "text": "A repertory movie house and live venue since 1984."
          },
          {
            "title": "Fringe Festival",
            "text": "Annual street festivals include the Saskatoon Fringe Theatre Festival."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the river, over the Broadway Bridge."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Five Corners, at Broadway and 12th Street East, was laid out in 1883."
          }
        ],
        "link": {
          "label": "Discover Saskatoon: Broadway",
          "url": "https://www.discoversaskatoon.com/blog/post/neighbourhood-love-broadway"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riversdale', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Trendy', tagLevel: 'danger', meta: 'Revitalised historic district with a café and restaurant strip on 20th Street',
      details: {
        "lead": "A revitalised historic district along 20th Street West, home of the Saskatoon Farmers’ Market.",
        "see": [
          {
            "title": "20th Street",
            "text": "The commercial corridor for over a century, now a café and restaurant strip; one report counted 22 mostly non-franchise restaurants opening in Riversdale and downtown over three years."
          },
          {
            "title": "Farmers’ Market",
            "text": "At 2600 Koyl Avenue: Saturday 8 am–2 pm and Sunday 10 am–3 pm, listed year-round."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The Riversdale figures are from earlier articles; check what is open."
          }
        ],
        "link": {
          "label": "Saskatoon Farmers’ Market",
          "url": "https://tourism.cecs-sk.ca/en/locations/saskatoon-farmers-market"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Nutana', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Leafy', tagLevel: 'safe', meta: 'Older tree-lined streets on the east bank above the river',
      details: {
        "lead": "The older tree-lined neighbourhood on the east bank, with Broadway Avenue as its main street.",
        "see": [
          {
            "title": "Broadway Avenue",
            "text": "The original commercial street of the town of Nutana, which joined Saskatoon in 1906."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the river."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk."
          },
          {
            "label": "Good to know",
            "text": "Mainly residential beyond Broadway."
          }
        ],
        "link": {
          "label": "Nutana, Saskatoon",
          "url": "https://www.wikipedia.com/wiki/Nutana"
        },
        "checked": "November 2026"
      },
    },
    { name: 'University of Saskatchewan', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'Campus', tagLevel: 'blue', meta: 'Greystone buildings on a riverside campus',
      details: {
        "lead": "A riverside campus of greystone buildings; the College Building, now the Peter MacKinnon Building, is a National Historic Site.",
        "see": [
          {
            "title": "Greystone",
            "text": "The original buildings are native limestone mined just north of campus, in Collegiate Gothic style."
          },
          {
            "title": "Peter MacKinnon Building",
            "text": "The former College Building, a National Historic Site since 2001."
          },
          {
            "title": "Memorial Gates",
            "text": "Built in 1927–28 to honour students and faculty lost in the First World War (the count is given as 67 or 69)."
          }
        ],
        "practical": [
          {
            "label": "Tours",
            "text": "The Diefenbaker Canada Centre runs historical walking tours of 30 to 90 minutes; check diefenbaker.usask.ca for schedules and prices."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The Centre is at 101 Diefenbaker Place."
          }
        ],
        "link": {
          "label": "Diefenbaker Canada Centre: tours",
          "url": "https://diefenbaker.usask.ca/visit/tours.php"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sutherland & Forestry Farm', icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', tag: 'Park', tagLevel: 'olive', meta: 'Forestry Farm Park and Zoo in the city’s northeast',
      details: {
        "lead": "The Saskatoon Forestry Farm Park & Zoo in the city’s northeast.",
        "see": [
          {
            "title": "Winter admission",
            "text": "From November 1, 2026: free under 6, $4.25 for ages 6–18, $7 for adults, $14 for families. Open daily 10 am–4 pm."
          },
          {
            "title": "Season pass",
            "text": "A pass bought between November 1 and December 31, 2026 is valid through December 31, 2027."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "1903 Forestry Farm Park Drive, in the northeast."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Summer hours were 9 am–5 pm; confirm at saskatoon.ca/zoo."
          }
        ],
        "link": {
          "label": "City of Saskatoon: zoo winter admission",
          "url": "https://www.saskatoon.ca/news-releases/winter-admission-begins-november-1-saskatoon-forestry-farm-park-zoo"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Meewasin Valley Trails',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A long network of paved and natural trails follows both banks of the South Saskatchewan River through the city — perfect for walking, cycling and watching the sun set over the bridges.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A network of trails along both banks of the South Saskatchewan River, through the city and beyond.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "Meewasin’s September 2026 release cites 108 km of established trail; other sources say 60 to 105 km."
              },
              {
                "title": "Winter",
                "text": "Sections become cross-country ski routes after snowfall; the City grooms Upper and Lower Meewasin and other parks on business days."
              },
              {
                "title": "New trail",
                "text": "A new Meewasin Trail is being planned in the northeast (September 2026)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ski conditions",
                "text": "Check saskatoon.ca/ski for 2026–27 conditions; no grooming schedule was found yet."
              },
              {
                "title": "Free",
                "text": "Free to use."
              },
              {
                "title": "Sunset",
                "text": "The bridges are a good place to watch the sunset."
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
            "text": "Access points along the river throughout the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Meewasin: visitors",
          "url": "https://meewasin.com/visitors/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Wanuskewin Heritage Park',
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'Just north of the city, an Indigenous heritage site with archaeological sites thousands of years old, interpretive trails through the Opimihaw Creek valley and a returned plains bison herd. Run with First Nations guidance.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Must see', level: 'purple' }],
      details: {
        "lead": "An Indigenous heritage site just north of the city with archaeological sites thousands of years old, interpretive trails and a returned bison herd.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Daily 9:30 am–5 pm, open year-round; fall and winter statutory holidays are closed."
              },
              {
                "title": "2026 admission",
                "text": "Adults $16, seniors $10, students $12, ages 6–17 $8, family (up to 6) $40, under 6 free."
              },
              {
                "title": "Bison",
                "text": "Bison were brought back to the site in December 2019 in partnership with Parks Canada."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "UNESCO",
                "text": "The site is on Canada’s tentative list for World Heritage; it is not yet inscribed."
              },
              {
                "title": "Herd",
                "text": "No current herd size or winter viewing details were found."
              },
              {
                "title": "Dress warm",
                "text": "The trails are outdoors."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $16 for adults."
          },
          {
            "label": "Getting there",
            "text": "North of Saskatoon; a car is easiest."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          }
        ],
        "link": {
          "label": "Wanuskewin: hours & admission",
          "url": "https://wanuskewin.com/visit/hours-admission/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Remai Modern',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'A bold riverside art museum known for its large collection of Picasso linocuts alongside contemporary Canadian and international art.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A riverside art museum with more than 8,000 works, including what it calls the world’s most comprehensive collection of Picasso linocuts.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "By donation on every open day; free for under 18. There is no separate free day."
              },
              {
                "title": "Hours",
                "text": "Most listings: Wednesday and Saturday–Sunday 10 am–5 pm, Thursday and Friday 10 am–9 pm; closed Monday and Tuesday."
              },
              {
                "title": "Now showing",
                "text": "Tanya Lukin Linklater: Storm song, until December 3, 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Suggested",
                "text": "A third-party site suggests $10 for adults."
              },
              {
                "title": "Confirm",
                "text": "An older listing shows different hours; check the museum’s site."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "By donation."
          },
          {
            "label": "Getting there",
            "text": "102 Spadina Crescent E, on the river."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Discover Saskatoon: Remai Modern",
          "url": "https://www.discoversaskatoon.com/listing/art-gallery-remai-modern/1343"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Delta Bessborough',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A château-style railway hotel built for Canadian National Hotels, finished in 1932 and opened in 1935, on the riverbank — the city’s signature landmark.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Landmark', level: 'danger' }],
      details: {
        "lead": "A château-style railway hotel on the riverbank, designed for Canadian National Hotels, finished in 1932 and opened in 1935.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "Named for the Earl of Bessborough, Governor General of Canada. The Depression delayed the opening until December 1935."
              },
              {
                "title": "Tallest",
                "text": "The tallest building in Saskatoon from 1932 to 1966."
              },
              {
                "title": "Owners",
                "text": "Delta Hotels bought it in 1989; Marriott later acquired the Delta chain."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free to view",
                "text": "It can be admired from the riverbank trail."
              },
              {
                "title": "Heritage",
                "text": "Listed on the City of Saskatoon heritage register."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view; rooms are paid."
          },
          {
            "label": "Getting there",
            "text": "Downtown, on the river."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "City of Saskatoon: Bessborough Hotel",
          "url": "https://saskatoon.ca/heritage-register/bessborough-hotel"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Western Development Museum',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'Walk the streets of 1910 Boomtown, a full-size indoor recreation of a prairie town at the height of settlement.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "The Saskatoon branch has Boomtown, a recreated 1910 prairie street with more than 30 original buildings, storefronts and businesses.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listed daily 9 am–5 pm with Thursdays to 8 pm; one directory shows Tuesday to Sunday."
              },
              {
                "title": "Admission",
                "text": "Adults $15, seniors (55+) $13, youth (6–17) $9, family $30, under 6 free."
              },
              {
                "title": "Events",
                "text": "BooTown, a Halloween experience, runs in late October."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Listings conflict; check wdm.ca."
              },
              {
                "title": "Cafe",
                "text": "Boomtown Cafe was listed 8:30 am–3 pm."
              },
              {
                "title": "Free day",
                "text": "BMO Day, April 25, 2026, was free."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $15 for adults."
          },
          {
            "label": "Getting there",
            "text": "In Saskatoon."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Discover Saskatoon: WDM",
          "url": "https://www.discoversaskatoon.com/listing/western-development-museum/160"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Saskatoon Farmers’ Market',
      icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg',
      text: 'Local produce and products at 2600 Koyl Avenue in Riversdale, open weekends year-round and running since 1975.',
      tags: [{ label: 'Weekends', level: 'caution' }, { label: 'Local food', level: 'safe' }],
      details: {
        "lead": "A market at 2600 Koyl Avenue in Riversdale, running since 1975 with local produce and products year-round.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Saturday 8 am–2 pm and Sunday 10 am–3 pm."
              },
              {
                "title": "Year-round",
                "text": "Listed as open year-round at the Koyl Avenue location."
              },
              {
                "title": "Riversdale",
                "text": "The market helped start the neighbourhood’s revival."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Wednesday",
                "text": "An old listing mentions a Wednesday market at a former address; do not rely on it."
              },
              {
                "title": "Confirm",
                "text": "Call 306-384-6262 or check saskatoonfarmersmarket.com for winter hours."
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
            "text": "2600 Koyl Avenue."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Saskatoon Farmers’ Market",
          "url": "https://tourism.cecs-sk.ca/en/locations/saskatoon-farmers-market"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Valley and Open Prairie',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Riverbank Cycling', dist: 'In the city', text: 'Flat, scenic trails on both sides of the river, crossing the bridges.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'River Paddling', dist: 'South Saskatchewan', text: 'Calm stretches for experienced paddlers; currents and sandbars change — check conditions.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wanuskewin Trails', dist: '≈15 min north', text: 'Prairie valley walks past bison and ancient sites.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Pike Lake & Blackstrap', dist: '≈30–40 min', text: 'Provincial parks with beaches in summer and ski hills in winter.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Prince Albert National Park', dist: '≈2 h 30 min north', text: 'Boreal lakes, wildlife and Grey Owl’s cabin.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'City rinks', text: 'Outdoor rinks and skating paths when it freezes.' },
  ],

  food: [
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'City-wide', areaLevel: 'purple', text: 'The city’s namesake berry in pies, jams and ice cream.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Coffee Roasters', area: 'Riversdale · Broadway', areaLevel: 'gold', text: 'A strong independent café scene.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local spots', areaLevel: 'danger', text: 'Ukrainian heritage cooking found across the prairies.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Breweries', area: 'City-wide', areaLevel: 'olive', text: 'Taprooms and brewpubs in industrial and downtown spaces.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Local beef and bison on menus.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm-to-Table', area: 'Downtown', areaLevel: 'safe', text: 'Restaurants built around Saskatchewan grains and produce.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Ice leaves the river in April; trails dry out and the valley turns green in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Long, sunny days and very late sunsets — festivals, patios and river trails.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden valley', text: 'Golden aspens along the river and crisp, clear prairie days.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters with temperatures often below −25 °C — but plenty of sunshine.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Saskatoon John G. Diefenbaker International Airport (YXE) has flights across Canada and some US routes.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 11 links Saskatoon with Regina; the Yellowhead (Highway 16) runs east–west toward Edmonton and Manitoba.',
      time: '≈2 h 45 min from Regina',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Toronto–Vancouver train, the Canadian, stops at Saskatoon’s station on the west side of the city a few times a week. Check the schedule.',
      time: 'Few times a week',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches connect Saskatoon with Regina and other prairie cities. Check current operators.',
      time: '≈3 h from Regina',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown & Riverfront',
      area: 'Walkable',
      text: 'Hotels near River Landing, the Bessborough and the trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saskatoon+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saskatoon%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      title: 'Broadway',
      area: 'Lively',
      text: 'Rentals and small hotels close to cafés and nightlife.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Broadway+Saskatoon', level: 'blue' },
      ],
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'Airport & North End',
      area: 'Convenient',
      text: 'Chain hotels near the airport and highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saskatoon+Airport', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Saskatoon Transit',
      text: 'Saskatoon Transit runs buses across the city. Pay exact cash, use a reloadable smart card, or buy fares in the transit app. Fares rose on July 1, 2026 and are set to rise again on January 1, 2027.',
      linkLabel: 'Saskatoon Transit',
      linkUrl: 'https://saskatoontransit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares effective July 1, 2026, from the Saskatoon Transit fares page. Children in Grade 8 and under ride free — no pass needed. Drivers carry no change.',
        fareBox: {
          label: 'Adult (from July 2026)',
          lines: ['Single ride: $3.25', 'Day pass: $9.50', '10 rides: $27.50', 'Monthly: $91.00'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://saskatoontransit.ca/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Riverside trails make cycling easy in summer.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, Broadway and Riversdale are walkable via the bridges.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for Wanuskewin and provincial parks.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Clock tip:',
      text: 'Saskatchewan stays on UTC-6 all year. Since November 2026 Alberta does too, and Manitoba matches it in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST, and many Saskatoon hotels also add a 4% Destination Marketing Fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatoon / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST (+ 4% marketing fee at many hotels)' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Admissions: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'Meewasin trails: free' },
      { icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', label: 'Bessborough gardens & riverbank: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on Central Standard Time (UTC-6) all year — check times when connecting to Alberta or Manitoba.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Cold Winters', text: 'Winters regularly drop below −25 °C with wind chill. Dress in layers and plug in your car overnight.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Summer evenings by the river can be buggy — bring repellent.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'River Safety', text: 'The South Saskatchewan has strong currents and shifting sandbars; do not swim in the river.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Big Sky Sun', text: 'Prairie sun is strong in summer — sunscreen and water on the trails.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Exact Fare', text: 'Bus drivers carry no change; use the app or a smart card.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Saskatoon is on Treaty 6 territory and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Royal University Hospital · 103 Hospital Dr', 'St. Paul’s Hospital · 1702 20th St W', 'Emergencies: call 911'] },
  ],
};

export default SASKATOON;
