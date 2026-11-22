// Fredericton — данные страницы /city/fredericton (Фредериктон, НЬЮ-БРАНСУИК)
// Видео в шапке — Pexels, автор Steven Hause ("Church roof visible through
// trees near a river in autumn"). На странице место не указано — сверено
// по кадрам с Commons "FrederictonSkyline2013.jpg": шпиль Christ Church
// Cathedral слева и купол Законодательного собрания справа, вид через реку
// Сент-Джон. Лицензия Pexels подписи не требует. Клип "autumn cityscape"
// (30084303) — это Оттава, не взят.
// Население — перепись 2021: город 63 116, агломерация (CMA) 108 610.
// Транспорт — fredericton.ca: $3 наличными или картой/телефоном (open
// payment), месячный $85, 10 поездок $27.50, пересадки бесплатно.
// Налог — HST 15%; Tourism Accommodation Levy 3.5% (By-law R-13, текст).
// Больница — Dr. Everett Chalmers Regional Hospital, 700 Priestman St,
// приёмное 24/7 (Horizon). Смена караула — июль–август (Tourism
// Fredericton, без даты — уточнять).
// Из общих знаний: собор (1853), Законодательное собрание, Beaverbrook Art
// Gallery, Walking Bridge, Boyce Farmers Market, Harvest Music Festival,
// Mactaquac, Kings Landing, UNB, время в пути.

export const FREDERICTON = {
  slug: 'fredericton',
  name: 'Fredericton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Capital on the River',
  accentLevel: 'blue',
  heroIcon: '🏛️',
  heroVideo: '/Cities/Fredericton/hero.mp4',
  heroImage: '/Cities/Fredericton/hero-poster.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.9636, lon: -66.6431 },
  subtitle: 'Capital City on the Saint John River',
  description:
    'New Brunswick’s leafy capital sits on a broad bend of the Saint John River. Watch the changing of the guard in the Historic Garrison District, walk across an old railway bridge turned riverside trail, browse one of Canada’s best-loved Saturday farmers’ markets and see a major art collection at the Beaverbrook Art Gallery.',

  actions: [
    { label: 'Explore Fredericton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈63K (2021)' },
    { label: 'Metro Area', value: '≈109K' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Saint John', value: '≈1 h 15 min by car' },
    { label: 'To Moncton', value: '≈1 h 45 min by car' },
  ],

  badges: ['Provincial Capital', 'Riverside Trails', 'Garrison District'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '63,116', label: 'People in the city in the 2021 census — about 109K in the metro area', level: 'blue' },
    { value: '$3', label: 'Bus fare — pay cash or tap a card or phone', level: 'gold' },
    { value: '3.5%', label: 'City tourism levy on hotel stays, on top of HST', level: 'purple' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Queen and King streets, pubs, cafés and the riverfront',
      details: {
        "lead": "Queen and King streets, pubs, cafés and the riverfront in the centre of Fredericton.",
        "see": [
          {
            "title": "Boyce Farmers Market",
            "text": "At 665 George Street, Saturdays 7 am–1 pm, year-round."
          },
          {
            "title": "Legislative Assembly",
            "text": "At 706 Queen Street; see the attraction below."
          },
          {
            "title": "Riverfront",
            "text": "Trails along the Saint John River start here."
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
            "text": "The market is closed Sundays and may close on holidays."
          }
        ],
        "link": {
          "label": "Fredericton Capital Region",
          "url": "https://www.frederictoncapitalregion.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Historic Garrison District', icon: '🎖️', iconSrc: '/icons/attractions/ph_medal-thin.svg', tag: 'History', tagLevel: 'danger', meta: 'Officers’ Square, old barracks and summer events',
      details: {
        "lead": "The old British military quarter by the river, a National Historic Site, with Officers’ Square.",
        "see": [
          {
            "title": "Changing of the Guard",
            "text": "Past summers ran it in July and August in Officers’ Square, but Wikipedia says it has been suspended since 2024; times in listings conflict."
          },
          {
            "title": "Officers’ Square",
            "text": "The usual venue for summer events."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown, on the riverbank."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No 2026 schedule was found; check with the city."
          }
        ],
        "link": {
          "label": "Changing of the Guard",
          "url": "https://mynewbrunswick.ca/changing-of-the-guard-ceremony-2/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Green', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Riverside', tagLevel: 'safe', meta: 'Riverside parkland by the cathedral and the gallery',
      details: {
        "lead": "Riverside parkland by the cathedral and the Beaverbrook Art Gallery.",
        "see": [
          {
            "title": "Beaverbrook Art Gallery",
            "text": "On the riverbank, with Dalí’s Santiago el Grande."
          },
          {
            "title": "Christ Church Cathedral",
            "text": "The Gothic Revival cathedral, built 1845–53."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the riverbank in the centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The riverside trail passes here."
          }
        ],
        "link": {
          "label": "Beaverbrook Art Gallery",
          "url": "https://en.wikipedia.org/wiki/Beaverbrook_Art_Gallery"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Northside', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Across the river', tagLevel: 'blue', meta: 'Nashwaaksis and Devon, reached by the Walking Bridge',
      details: {
        "lead": "Across the river, reached by the Bill Thorpe Walking Bridge.",
        "see": [
          {
            "title": "Walking Bridge",
            "text": "About 581 m long; about 1,000 people still cross it daily in winter, versus 3,000 in summer."
          },
          {
            "title": "Marysville",
            "text": "The mill town on the Nashwaak River; see Marysville."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the river from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The Northside includes Nashwaaksis, Devon and Marysville."
          }
        ],
        "link": {
          "label": "Fredericton Railway Bridge",
          "url": "https://en.wikipedia.org/wiki/Fredericton_Railway_Bridge"
        },
        "checked": "November 2026"
      },
    },
    { name: 'College Hill', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'Campus', tagLevel: 'purple', meta: 'UNB and St. Thomas University on the hill above downtown',
      details: {
        "lead": "UNB and St. Thomas University on the hill above downtown.",
        "see": [
          {
            "title": "UNB",
            "text": "King’s College received its royal charter in 1828; UNB is described as Canada’s oldest English-speaking university."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hill above downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk."
          },
          {
            "label": "Good to know",
            "text": "No visitor-specific campus details were found."
          }
        ],
        "link": {
          "label": "University of New Brunswick",
          "url": "https://www.unb.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Marysville', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Heritage', tagLevel: 'olive', meta: 'Former mill town with a historic cotton mill',
      details: {
        "lead": "A former mill town on the Northside with the Marysville Cotton Mill, a National Historic Site.",
        "see": [
          {
            "title": "Cotton Mill",
            "text": "Built by Alexander “Boss” Gibson in 1883–85; later converted into government offices as Marysville Place."
          },
          {
            "title": "Heritage district",
            "text": "The neighbourhood was declared a national historic district on November 20, 1993."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Nashwaak River, on the Northside."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Sources differ on when the mill closed (1973 or 1975)."
          }
        ],
        "link": {
          "label": "Parks Canada: Marysville Cotton Mill",
          "url": "https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=185"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Historic Garrison District',
      icon: '🎖️', iconSrc: '/icons/attractions/ph_medal-thin.svg',
      text: 'The old British military quarter on the river, a National Historic Site. The summer changing of the guard in Officers’ Square has been reported suspended since 2024 and schedules conflict, so check whether it runs.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "The old British military quarter on the river, a National Historic Site, with Officers’ Square at its centre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "On the riverbank in downtown Fredericton."
              },
              {
                "title": "Guard",
                "text": "Past summers ran the Changing of the Guard; one source says it has been suspended since 2024."
              },
              {
                "title": "Schedules",
                "text": "Listed times conflict (11 am and 4 pm, or 12:30 pm Saturday to Wednesday)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "No 2026 schedule was found; check with the city."
              },
              {
                "title": "Now",
                "text": "Summer events are over."
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
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Changing of the Guard",
          "url": "https://mynewbrunswick.ca/changing-of-the-guard-ceremony-2/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Beaverbrook Art Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'A major art gallery on the riverbank, with Canadian and international works.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A major art gallery on the riverbank with Canadian and international works; its centrepiece is Dalí’s Santiago el Grande.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dalí",
                "text": "Santiago el Grande hangs in its own room at the back of the gallery."
              },
              {
                "title": "Hours",
                "text": "Sources differ: Tuesday to Saturday 10 am–5 pm, Thursday to 9 pm, Sunday noon–5 pm, Monday closed."
              },
              {
                "title": "Admission",
                "text": "One guide: adults $20, seniors and students $14, youth $8.50, under 6 free; older pages give lower prices."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free evening",
                "text": "Older pages say Thursday 5–9 pm is free; the newest guide says there is no regular free evening."
              },
              {
                "title": "Free entry",
                "text": "Members, children under 6 and Indigenous peoples are free."
              },
              {
                "title": "Phone",
                "text": "506-458-2028."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $20 for adults; confirm."
          },
          {
            "label": "Getting there",
            "text": "On the riverbank, downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Beaverbrook Art Gallery",
          "url": "https://en.wikipedia.org/wiki/Beaverbrook_Art_Gallery"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Christ Church Cathedral',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'A Gothic Revival cathedral from the mid-1800s, its tall spire a landmark on the Fredericton skyline.',
      tags: [{ label: 'Architecture', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A Gothic Revival cathedral built 1845–53 to plans by Frank Wills and William Butterfield for Bishop John Medley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Design",
                "text": "Modelled on a 14th-century church in Norfolk, England (some sources name St Mary’s, Snettisham)."
              },
              {
                "title": "Bells",
                "text": "A ring of 15 bells played by compressed air; chimes mark the quarter hours."
              },
              {
                "title": "Tours",
                "text": "Free, with donations welcome; self-guided booklets in several languages."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Summer hours",
                "text": "Sources conflict, e.g. Monday to Friday 10 am–5 pm and Sunday 1–4 pm; guided tours began on July 1 in 2025."
              },
              {
                "title": "Confirm",
                "text": "Check cccath.ca for winter hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; donations welcome."
          },
          {
            "label": "Getting there",
            "text": "Downtown, by the riverside green."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Christ Church Cathedral",
          "url": "https://frederictoncapitalregion.ca/see-do/activities/christ-church-cathedral"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Legislative Assembly',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'New Brunswick’s domed legislature at 706 Queen Street, in use since 1882. The legislature lists self-guided visits Monday to Friday; guided summer tours were listed in 2025 — check.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Tours', level: 'blue' }],
      details: {
        "lead": "New Brunswick’s domed legislature at 706 Queen Street, the seat of government since 1882 after the previous building burned.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Official visit page",
                "text": "Self-guided visits Monday to Friday, about 8:15 am–4:30 pm; closed weekends and holidays."
              },
              {
                "title": "Guided tours",
                "text": "The tourism listing (June 2025) described free guided tours of 30 to 40 minutes, Monday to Saturday from June 30 to August 29."
              },
              {
                "title": "Security",
                "text": "Arrive 10 minutes early for screening."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Phone (506) 453-2506 or check legnb.ca."
              },
              {
                "title": "Sessions",
                "text": "The legislature’s calendar shows when the House sits."
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
            "text": "706 Queen Street."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Visit the Legislature",
          "url": "https://www.legnb.ca/en/legislature/visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Boyce Farmers Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'A much-loved Saturday morning market with local produce, baking, crafts and food stalls.',
      tags: [{ label: 'Saturdays', level: 'caution' }, { label: 'Food', level: 'danger' }],
      details: {
        "lead": "A year-round Saturday market at 665 George Street with produce, baking, crafts and food stalls.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Saturdays 7 am–1 pm; Yelp lists a 6 am opening."
              },
              {
                "title": "Year-round",
                "text": "It runs through winter."
              },
              {
                "title": "Closed",
                "text": "Closed Sundays; may close on Christmas Day and other holidays."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Holidays",
                "text": "Check the market’s Facebook page before a holiday weekend."
              },
              {
                "title": "Phone",
                "text": "(506) 451-1815."
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
            "text": "665 George Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Fredericton Boyce Farmers Market",
          "url": "https://www.frederictoncapitalregion.ca/see-do/activities/fredericton-boyce-farmers-market"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bill Thorpe Walking Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A former railway bridge over the Saint John River, now part of the city’s trail network. Great views at sunset.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'gold' }],
      details: {
        "lead": "A former railway bridge, about 581 m long, across the Saint John River, now for pedestrians and cyclists.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 581 m (1,906 ft), described as one of the longest pedestrian-only bridges in the world."
              },
              {
                "title": "Use",
                "text": "About 1,000 people cross daily in winter and about 3,000 in summer."
              },
              {
                "title": "Trail",
                "text": "It links the north and south trail networks."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Sunset",
                "text": "Great views at sunset."
              },
              {
                "title": "Lighting",
                "text": "New lighting projects exist on the trail; completion was not confirmed."
              },
              {
                "title": "Free",
                "text": "Free to cross."
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
            "text": "From the east end of downtown to South Devon."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Fredericton Railway Bridge",
          "url": "https://en.wikipedia.org/wiki/Fredericton_Railway_Bridge"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Trails and Forest Parks',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Riverfront Trails', dist: 'Downtown', text: 'Paved trails along both banks of the river.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Odell Park', dist: 'West side', text: 'Old-growth forest and walking trails in the city.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Saint John River', text: 'Canoe and kayak rentals in summer.' },
    { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', name: 'Mactaquac Provincial Park', dist: '≈25 min', text: 'Beaches, golf and campground on the headpond.' },
    { icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', name: 'Kings Landing', dist: '≈35 min', text: 'Living-history village of 19th-century New Brunswick.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Downtown', text: 'Outdoor rinks and snowy trails in winter.' },
  ],

  food: [
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Boyce Market', areaLevel: 'safe', text: 'Saturday breakfast and local produce.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Several local breweries and taprooms.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Maritime Seafood', area: 'Restaurants', areaLevel: 'danger', text: 'Lobster, mussels and chowder.' },
    { icon: '🥞', iconSrc: '/icons/attractions/ph_egg-thin.svg', title: 'Fiddleheads', area: 'Spring', areaLevel: 'olive', text: 'A New Brunswick spring speciality.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Queen & King St', areaLevel: 'blue', text: 'Coffee shops in the downtown core.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Maple Treats', area: 'Late winter', areaLevel: 'gold', text: 'Local maple syrup and sugar shacks nearby.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Freshet', text: 'The river rises with snowmelt; low riverside areas can flood.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Guard & concerts', text: 'Changing of the guard, outdoor concerts and paddling.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Harvest festival', text: 'Fall colour and the Harvest Music Festival in September.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Snowy', text: 'Cold and snowy; skating, snowshoeing and FROSTival events.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Fredericton International Airport (YFC) has flights to Toronto, Montréal and other hubs.',
      time: '≈20 min to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Route 2) passes the city, linking Moncton, Edmundston and Québec. Route 7 runs to Saint John.',
      time: '≈4 h 30 min from Halifax',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Fredericton with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'No passenger trains serve Fredericton; the nearest VIA Rail stations are on the Montréal–Halifax line, such as Moncton.',
      time: 'No direct rail',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near the river, the Garrison District and Queen Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fredericton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Fredericton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Prospect Street & Highway',
      area: 'Uptown',
      text: 'Chain hotels near shopping and the Trans-Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fredericton+Prospect+Street', level: 'blue' },
      ],
    },
    {
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      title: 'Mactaquac',
      area: '≈25 min away',
      text: 'Camping and cottages by the headpond.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Mactaquac+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Fredericton Transit',
      text: 'Fredericton Transit runs buses on both sides of the river. Pay $3 in exact cash or tap a debit or credit card, phone or smartwatch. Ask the driver for a free one-way transfer.',
      linkLabel: 'Fredericton Transit',
      linkUrl: 'https://www.fredericton.ca/node/1037',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares from the City of Fredericton. Children under 6 ride free. Some banks show a temporary $6 hold when you tap — it is reversed the next business day.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $3 (exact cash or tap)', '10-ride card: $27.50', 'Monthly pass: $85', 'Transfers: free, one way'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.fredericton.ca/node/1037',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the Green are very walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Trails along the river and over the Walking Bridge.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers the main neighbourhoods.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Kings Landing and Mactaquac.' },
        ],
      },
    ],
    proTip: {
      label: 'Saturday tip:',
      text: 'Go to the Boyce Farmers Market early on Saturday morning — it gets busy fast.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Fredericton also carry a 3.5% city tourism accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Fredericton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + 3.5% levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival tickets: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🎖️', iconSrc: '/icons/attractions/ph_medal-thin.svg', label: 'Changing of the guard: free' },
      { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', label: 'Walking Bridge & trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Spring Flooding', text: 'The Saint John River can flood in spring; riverside trails and roads may close.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Snowy winters — use winter tires and check road conditions before long drives.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Bilingual Province', text: 'New Brunswick is officially bilingual; Fredericton is mostly English-speaking.' },
    { icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', title: 'Student Calendar', text: 'Hotels fill up at university move-in and graduation in May.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec and Ontario.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Bring repellent for forest trails in early summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Fredericton is on the unceded territory of the Wolastoqiyik (Maliseet), the people of the Wolastoq — the Saint John River.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dr. Everett Chalmers Regional Hospital', '700 Priestman St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default FREDERICTON;
