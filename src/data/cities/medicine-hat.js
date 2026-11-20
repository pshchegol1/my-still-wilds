// Medicine Hat — данные страницы /city/medicine-hat
// Видео Медисин-Хата в бесплатных банках нет: Pexels по "medicine hat"
// отдаёт Эдмонтон и случайные кадры. В шапке фото с Wikimedia Commons —
// осенний центр города, ферменный мост через Южный Саскачеван и
// Saamis Tepee на горизонте, автор ColtonMckeePhotography, 2021,
// CC BY-SA 4.0. Лицензия требует указывать автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Тарифы Medicine Hat Transit — из городского Ride Guide (ноябрь 2025);
// подтверждения на 2026 нет, в тексте сказано сверяться.

export const MEDICINE_HAT = {
  slug: 'medicine-hat',
  name: 'Medicine Hat',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · South-East Prairie',
  accentLevel: 'caution',
  heroIcon: '🔥',
  heroImage: '/Cities/MedicineHat/hero.jpg',
  heroCredit: 'Photo: ColtonMckeePhotography / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.0405, lon: -110.6764 },
  subtitle: 'The Gas City',
  description:
    'A brick-and-clay city in the dry south-east corner of Alberta, set in the valley of the South Saskatchewan River among coulees and short-grass prairie. It sits on so much natural gas that Rudyard Kipling joked it had “all hell for a basement”, and its name comes from a Blackfoot word — saamis — for a medicine man’s headdress.',

  actions: [
    { label: 'Explore Medicine Hat', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈68.7K' },
    { label: 'Climate', value: 'Semi-arid · Sunny' },
    { label: 'Saamis Tepee', value: '≈65 m tall' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈295 km · 3h' },
    { label: 'To Cypress Hills', value: '≈65 km · 50 min' },
  ],

  badges: ['Gas City', 'Clay District', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1907', label: 'Kipling visits and says the region has “all hell for a basement” — the gas is still under the city', level: 'danger' },
    { value: '1916', label: 'Medalta Potteries opens — the Clay District made Medicine Hat a centre of Canadian ceramics', level: 'gold' },
    { value: '≈65 m', label: 'Saamis Tepee, built for the 1988 Calgary Olympics and raised here in 1991 over an archaeological site', level: 'purple' },
    { value: '2004', label: 'Cypress Hills becomes a dark-sky preserve — about an hour from the city', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Brick main streets · Esplanade Arts & Heritage Centre · City Hall by the river',
      details: {
        "lead": "Brick main streets with the Esplanade Arts & Heritage Centre and City Hall by the river.",
        "see": [
          {
            "title": "Esplanade Arts & Heritage Centre",
            "text": "401 1st Street SE. Hours differ between sources (noon to 5 pm Monday to Friday in one, Tuesday to Saturday in another). Museum and gallery admission is pay what you will."
          },
          {
            "title": "Brick main streets",
            "text": "Historic brick commercial streets in the centre."
          },
          {
            "title": "City Hall",
            "text": "By the river, with a brick mural depicting one of the legends of the city’s name."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city, on the South Saskatchewan River."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Confirm the Esplanade’s hours before you go."
          }
        ],
        "link": {
          "label": "Tourism Medicine Hat",
          "url": "https://www.tourismmedicinehat.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Historic Clay District', icon: '🏺', iconSrc: '/icons/attractions/ph_plant-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'Medalta museum in the old kilns · Brick plants · National Historic District',
      details: {
        "lead": "A former industrial ceramics complex on a Canadian Pacific spur line, once an important centre of the clay products industry in western Canada. Medalta is its centrepiece.",
        "see": [
          {
            "title": "Medalta museum",
            "text": "Fall hours are Wednesday to Saturday, 10 am–4 pm, with guided tours on Saturdays at 11 am and 1 pm. From July 1 each year it is open 10 am–5 pm seven days a week."
          },
          {
            "title": "Admission",
            "text": "Adults $15, seniors (60+) $13, youth (7–17) $11, children 6 and under free, family $40."
          },
          {
            "title": "Shaw Centre for Contemporary Ceramics",
            "text": "The working ceramics studio side, with guided tours."
          },
          {
            "title": "Heritage Christmas Market",
            "text": "Friday, November 27, 4–8 pm, and Saturday, November 28, 10 am–4 pm, with free entry."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the clay district, a short drive from downtown."
          },
          {
            "label": "Pottery classes",
            "text": "Hands-on classes are offered, including through third-party tour sites."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Medalta",
          "url": "https://medalta.org/visit/museum/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South Saskatchewan River Valley', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Green spine', tagLevel: 'safe', meta: 'Police Point Park · Riverside trails · Cottonwood forest',
      details: {
        "lead": "The river valley with Police Point Park, riverside trails and cottonwood forest.",
        "see": [
          {
            "title": "Police Point Park",
            "text": "More than 240 acres of natural reserve, with many kilometres of walking and cycling trails through cottonwood forest and sagebrush."
          },
          {
            "title": "Nature centre",
            "text": "Open year-round Tuesday to Sunday, 9 am–5 pm, closed Mondays and some holidays. Phone 403-529-6225 to confirm."
          },
          {
            "title": "Wildlife",
            "text": "Deer, beaver and birds are common in the park."
          }
        ],
        "practical": [
          {
            "label": "Winter",
            "text": "Cross-country ski and snowshoe rentals have been offered at the park; a 2020 report gave $4 per hour, which may be out of date."
          },
          {
            "label": "Getting there",
            "text": "On a bend of the river, a short drive from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Medicine Hat: Police Point Park",
          "url": "https://www.medicinehat.ca/en/news/police-point-park-nature-centre.aspx"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saamis Heights', icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg', tag: 'South rim', tagLevel: 'purple', meta: 'Saamis Tepee · Saamis Archaeological Site · Views over the valley',
      details: {
        "lead": "The rim of the valley, with the Saamis Tepee, the Saamis Archaeological Site and views over the valley.",
        "see": [
          {
            "title": "Saamis Tepee",
            "text": "A steel tepee about 65 m (215 ft) tall, built for the 1988 Calgary Olympics and on its current site since late 1991. Admission is free and it is open year-round."
          },
          {
            "title": "2026 upgrades",
            "text": "Upgrades finished in 2026, with a grand opening in September, a collaboration with the Miywasin Friendship Centre."
          },
          {
            "title": "Parking",
            "text": "Overflow parking shared with the Moose recreation area now holds about 220 vehicles."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Beside the Trans-Canada Highway on the valley rim."
          },
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "City of Medicine Hat",
          "url": "https://www.medicinehat.ca/news/posts/neat-to-know-september-17-2026/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dunmore Road', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'Commercial', tagLevel: 'olive', meta: 'Most hotels and chain restaurants · Highway 1 access · Car-oriented',
      details: {
        "lead": "The highway side of town, with most of the hotels and chain restaurants and easy access to Highway 1. It is car-oriented.",
        "see": [
          {
            "title": "Hotels and chain restaurants",
            "text": "The main concentration of visitor services."
          },
          {
            "title": "Highway 1 access",
            "text": "Convenient for travellers passing through."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the highway side of town; a car is easiest."
          },
          {
            "label": "Stay",
            "text": "Most visitor accommodation is here."
          },
          {
            "label": "Good to know",
            "text": "The historic sights are a short drive away."
          }
        ],
        "link": {
          "label": "Tourism Medicine Hat",
          "url": "https://www.tourismmedicinehat.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Crescent Heights', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'North', tagLevel: 'blue', meta: 'Residential neighbourhoods on the north side of the river · Coulee walks',
      details: {
        "lead": "Residential neighbourhoods on the north side of the river, with coulee walks and tree-lined streets.",
        "see": [
          {
            "title": "Parks and greenways",
            "text": "The area is known for its parks and greenways."
          },
          {
            "title": "Coulee walks",
            "text": "Trails run through the coulees."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the north-east of the city."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a walk."
          },
          {
            "label": "Good to know",
            "text": "Mainly residential; not a sightseeing area."
          }
        ],
        "link": {
          "label": "Tourism Medicine Hat",
          "url": "https://www.tourismmedicinehat.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Medalta in the Historic Clay District',
      icon: '🏺', iconSrc: '/icons/attractions/ph_plant-thin.svg',
      text: 'Medalta Potteries made stoneware, dinnerware and crocks here from 1916 to 1954, using local clay and the city’s cheap natural gas to fire its kilns. The factory is now a museum and working ceramics studio inside the original beehive kilns, within the Medicine Hat Clay Industries National Historic District. One of the most interesting industrial heritage sites on the prairies.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Paid entry', level: 'caution' }],
      details: {
        "lead": "Medalta Potteries made stoneware, dinnerware and crocks here from 1916 to 1954. The factory is now a museum and working ceramics studio.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Wednesday to Saturday, 10 am–4 pm in fall; guided tours on Saturdays at 11 am and 1 pm. Summer hours (from July 1) are 10 am–5 pm daily."
              },
              {
                "title": "Admission",
                "text": "Adults $15, seniors (60+) $13, youth (7–17) $11, family $40; children 6 and under free."
              },
              {
                "title": "Studio",
                "text": "The Shaw Centre for Contemporary Ceramics offers guided tours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Christmas market",
                "text": "Heritage Christmas Market on November 27–28, 2026 with free entry."
              },
              {
                "title": "District Days",
                "text": "The summer market on July 11–12, 2026 kept the site open late with free tours."
              },
              {
                "title": "Pottery classes",
                "text": "Hands-on classes are available through tour sites."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $15 for adults."
          },
          {
            "label": "Getting there",
            "text": "In the Historic Clay District."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Medalta",
          "url": "https://medalta.org/visit/museum/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Saamis Tepee',
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      text: 'A steel tepee about 65 metres tall, built for the 1988 Calgary Winter Olympics and re-erected here in 1991 on the rim of the valley. It stands above the Saamis Archaeological Site, and storyboards around its base tell Indigenous history and culture. Often billed as the world’s tallest tepee.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Landmark', level: 'purple' }],
      details: {
        "lead": "A steel tepee about 65 m (215 ft) tall, built for the 1988 Calgary Winter Olympics and on its current site since late 1991, with the Saamis Archaeological Site below.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The tepee",
                "text": "About 65 m tall, beside the Trans-Canada Highway on the valley rim."
              },
              {
                "title": "Storyboards",
                "text": "Storyboards around its base tell Indigenous history and culture."
              },
              {
                "title": "2026 upgrades",
                "text": "Completed in 2026 with the Miywasin Friendship Centre, with a grand opening in September."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free and open year-round; one guide says accessible essentially 24 hours a day."
              },
              {
                "title": "Parking",
                "text": "Overflow parking shared with the Moose recreation area holds about 220 vehicles."
              },
              {
                "title": "“World’s tallest”",
                "text": "The billing as the world’s tallest tepee is repeated widely but was not independently verified."
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
            "text": "On the valley rim next to the highway."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "City of Medicine Hat",
          "url": "https://www.medicinehat.ca/news/posts/neat-to-know-september-17-2026/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Esplanade Arts & Heritage Centre',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The glass-fronted arts centre by the river, with the city museum and archives, a gallery and a theatre under one roof. The place to understand the gas, the clay and the ranching that built the city.',
      tags: [{ label: 'Downtown', level: 'blue' }, { label: 'Indoor', level: 'gold' }],
      details: {
        "lead": "The glass-fronted arts centre by the river, with the city museum and archives, a gallery and a theatre under one roof, at 401 1st Street SE.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Under one roof",
                "text": "Museum, archives, gallery and theatre."
              },
              {
                "title": "Admission",
                "text": "Museum and gallery admission is listed as pay what you will."
              },
              {
                "title": "Hours",
                "text": "Sources disagree: noon to 5 pm Monday to Friday in one, Tuesday to Saturday in another."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm hours",
                "text": "Check with the Esplanade before visiting."
              },
              {
                "title": "Performances",
                "text": "Check the programme for theatre events."
              },
              {
                "title": "Local story",
                "text": "A good place to understand the gas, the clay and the ranching that built the city."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Pay what you will for the museum and gallery."
          },
          {
            "label": "Getting there",
            "text": "Downtown, by the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Stay in Medicine Hat: Esplanade",
          "url": "https://stayinmedicinehat.com/esplanade-arts-heritage-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Police Point Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A large natural park on a bend of the South Saskatchewan River, with trails through cottonwood forest, a nature centre and plenty of deer, beaver and birds.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
      details: {
        "lead": "A large natural park on a bend of the South Saskatchewan River, with more than 240 acres of reserve and trails through cottonwood forest and sagebrush.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Nature centre",
                "text": "Open year-round, Tuesday to Sunday, 9 am–5 pm; closed Mondays and some holidays."
              },
              {
                "title": "Trails",
                "text": "Many kilometres of walking and cycling trails."
              },
              {
                "title": "Wildlife",
                "text": "Deer, beaver and birds."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm hours",
                "text": "Phone 403-529-6225 before you go."
              },
              {
                "title": "Winter rentals",
                "text": "Ski and snowshoe rentals have been offered; a 2020 report gave $4 per hour, so check current availability."
              },
              {
                "title": "Park hours",
                "text": "Aggregators list the grounds as open roughly 6 am to 11 pm, which is not an official figure."
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
            "text": "1001 Police Point Drive NE."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Medicine Hat: Police Point Park",
          "url": "https://www.medicinehat.ca/en/news/police-point-park-nature-centre.aspx"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cypress Hills Interprovincial Park',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'About an hour south-east, the hills rise far above the prairie and carry lodgepole pine forest — a surprise in the middle of the grasslands. Elkwater Lake on the Alberta side, Fort Walsh National Historic Site on the Saskatchewan side, and a dark-sky preserve since 2004 that makes it one of the best stargazing places in western Canada.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Dark sky', level: 'purple' }],
      details: {
        "lead": "About an hour south-east, hills that rise far above the prairie and carry lodgepole pine forest, with Elkwater Lake on the Alberta side and Fort Walsh on the Saskatchewan side.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "A surprise forest",
                "text": "Lodgepole pine forest in the middle of the grasslands."
              },
              {
                "title": "Elkwater Lake",
                "text": "The Alberta side’s lake and townsite."
              },
              {
                "title": "Dark sky",
                "text": "A dark-sky preserve since 2004, one of the best stargazing places in the region."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check conditions",
                "text": "Current winter opening and road information was not found; check the parks before driving out."
              },
              {
                "title": "Two provinces",
                "text": "The park straddles Alberta and Saskatchewan."
              },
              {
                "title": "Fort Walsh",
                "text": "Fort Walsh National Historic Site is on the Saskatchewan side."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park fees may apply; check the parks’ sites."
          },
          {
            "label": "Getting there",
            "text": "About an hour south-east by car."
          },
          {
            "label": "Time to allow",
            "text": "A full day."
          }
        ],
        "link": {
          "label": "Tourism Medicine Hat",
          "url": "https://www.tourismmedicinehat.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Name',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'Medicine Hat comes from the Blackfoot saamis, a medicine man’s headdress. Several legends explain it — one of a hunter given a sacred hat by a river spirit, another of a Cree medicine man who lost his headdress in the river while retreating from a battle with the Blackfoot. A brick mural at City Hall depicts one of them.',
      tags: [{ label: 'Blackfoot', level: 'danger' }],
      details: {
        "lead": "Medicine Hat is an English interpretation of the Blackfoot word saamis, a medicine man’s headdress. Several legends explain it.",
        "columns": [
          {
            "title": "The legends",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "A river spirit’s hat",
                "text": "A hunter given a sacred hat by a river spirit."
              },
              {
                "title": "A lost headdress",
                "text": "A Cree medicine man who lost his headdress in the river while retreating from a battle with the Blackfoot."
              },
              {
                "title": "Saamis",
                "text": "The word is preserved at the Saamis Archaeological Site and the Saamis Tepee."
              }
            ]
          },
          {
            "title": "See it",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "City Hall mural",
                "text": "A brick mural at City Hall depicts one of the legends."
              },
              {
                "title": "Saamis Tepee",
                "text": "Storyboards around its base tell Indigenous history and culture."
              },
              {
                "title": "Esplanade",
                "text": "The city museum covers the history."
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
            "text": "City Hall is downtown; the Tepee is on the valley rim."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "City of Medicine Hat",
          "url": "https://www.medicinehat.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Valley and Short-Grass Prairie',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'River Trails', dist: 'City-wide', text: 'Paved and gravel trails follow the South Saskatchewan and its coulees across the city. Exposed and hot in summer — go early with water.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'South Saskatchewan River', dist: 'Through town', text: 'Paddling and floating on a broad, slow-looking river that still has real current and cold water. Check flows and go with someone who knows it.' },
    { icon: '🌵', iconSrc: '/icons/attractions/ph_cactus-thin.svg', name: 'Prairie & Coulees', dist: 'Around the city', text: 'Short-grass prairie with cactus, sage and rattlesnakes. Stay on trails and watch your step on warm days.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Stargazing', dist: 'Cypress Hills', text: 'The dark-sky preserve at Cypress Hills is about an hour away; even the edge of the city has big prairie skies on clear nights.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Valley and prairie', text: 'Deer and pronghorn on the prairie edges, beavers in the river valley, raptors overhead. Pronghorn are fast — never chase them for a photo.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'River and reservoirs', text: 'Walleye, pike and trout in the region. An Alberta fishing licence is required; check current regulations.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Ranch Country Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is cattle country, and steak, burgers and barbecue are the regional default.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'gold', text: 'A small brewery scene for a city this size, with taprooms close to the old downtown.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Independent coffee shops in the brick blocks near the river and the Esplanade.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'City-wide', areaLevel: 'purple', text: 'Long-established Chinese restaurants and a growing range of other cuisines.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Greenhouses & Farms', area: 'Around the city', areaLevel: 'olive', text: 'Cheap gas and long sun made the area a greenhouse centre; local produce shows up at markets in summer.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Seasonal', areaLevel: 'safe', text: 'A summer market with south-east Alberta producers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Green prairie', text: 'The prairie greens briefly and wildflowers and cactus bloom in the coulees. Windy, with late snow possible.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Hot and dry', text: 'One of the hottest, driest and sunniest corners of Canada. Days above 30 °C are common; thunderstorms can bring hail. Plan outdoor time for mornings and evenings.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Golden valley', text: 'The cottonwoods along the river turn gold, the heat breaks and the light is long. The best season to visit.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold and dry', text: 'Cold snaps and wind, broken by chinooks. Dry and often sunny, but highways can close in blowing snow — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Trans-Canada Highway',
      text: 'Highway 1 runs south-east from Calgary across the prairie to Medicine Hat and on into Saskatchewan. Long, straight and windy, with few services between towns.',
      time: '≈3h from Calgary (≈295 km)',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'From Lethbridge',
      text: 'Highway 3 east through irrigated farmland and small towns.',
      time: '≈1h45 (≈165 km)',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Medicine Hat Airport has limited scheduled service. Most visitors fly into Calgary and drive.',
      time: '≈3h from YYC by car',
    },
    {
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      title: 'To Cypress Hills',
      text: 'Highway 41 south to Elkwater climbs out of the prairie into the hills. Fill the tank before leaving the city.',
      time: '≈50 min (≈65 km)',
    },
  ],

  stay: [
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Dunmore Road & Trans-Canada',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels and motels along the highway and the main commercial road. Practical for a road trip stop.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Medicine+Hat+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Medicine%20Hat%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Fewer rooms',
      text: 'Close to the Esplanade, the river and downtown restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Medicine+Hat', level: 'blue' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Cypress Hills Campgrounds',
      area: 'Rustic · Book ahead',
      text: 'Provincial campgrounds and cabins at Elkwater, for a night under the darkest skies in the region.',
      links: [
        { label: 'Alberta Parks Reservations', url: 'https://reserve.albertaparks.ca/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Medicine Hat Transit',
      text: 'City buses connect downtown, Medicine Hat College, the hospital and the main shopping areas. Service is limited on evenings and weekends; for Medalta, Police Point or Cypress Hills a car is far easier.',
      linkLabel: 'Medicine Hat Transit',
      linkUrl: 'https://www.medicinehat.ca/en/roads-parking-and-transportation/transit.aspx',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the city’s Ride Guide (November 2025). Cash, day passes and monthly passes are accepted alongside the reloadable MHT Go! card. Confirm current prices before you ride.',
        fareBox: {
          label: 'Adult (18–64)',
          lines: ['Single trip: $3.25', 'Day pass: $6.50', 'Monthly pass: $70.50'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.medicinehat.ca/en/roads-parking-and-transportation/transit.aspx',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to see the city and the region.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The river trail network is good for cycling; mind the heat and wind.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the Esplanade and the riverfront are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Driving the Trans-Canada between Calgary and Regina, Medicine Hat is the natural overnight stop. Give it an evening: the Clay District and a walk along the river are worth more than a highway motel and nothing else.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Medicine Hat / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST 5% + PST 6%', example: '$100 → pay $111', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', label: 'Transit fares: as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%.',
  },

  practical: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Heat & Sun', text: 'Summers are hot, dry and very sunny. Carry water, wear a hat and avoid long walks in the midday heat.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Rattlesnakes', text: 'Prairie rattlesnakes live in the coulees and river valley. Stay on trails and keep dogs leashed.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Wind & Storms', text: 'Strong wind is common, and summer thunderstorms bring hail. Take Alberta Emergency Alerts seriously.' },
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Long Empty Highways', text: 'Services are far apart on the Trans-Canada east and west of the city. Fill up before long stretches.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta stays on Alberta Time (UTC-6) all year — the same clock as Saskatchewan, 50 km east, so there is no time change at the border.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Fees', text: 'Cypress Hills is a provincial park; check Alberta Parks for current day-use and camping fees.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Medicine Hat is in Treaty 7 territory and the traditional lands of the Blackfoot Confederacy. The city’s name, from the Blackfoot saamis, and the Saamis Archaeological Site above the valley are reminders of how long people have lived here.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Medicine Hat Regional Hospital', '666 5 Street SW', 'Emergencies: call 911'] },
  ],
};

export default MEDICINE_HAT;
