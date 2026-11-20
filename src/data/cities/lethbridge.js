// Lethbridge — данные страницы /city/lethbridge
// Видео Летбриджа в бесплатных банках нет: Pexels по "lethbridge" отдаёт
// Эдмонтон и Калгари, а ролик "bridges over Alberta's river" по кадрам —
// бетонные мосты над Северным Саскачеваном, не виадук Летбриджа.
// В шапке фото с Wikimedia Commons — виадук (High Level Bridge) над
// долиной реки Олдмен, автор Travhillier, 2016, CC BY-SA 4.0. Лицензия
// требует указывать автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Тарифы Lethbridge Transit — со страницы города; система оплаты
// менялась в 2026, в тексте сказано сверяться.

export const LETHBRIDGE = {
  slug: 'lethbridge',
  name: 'Lethbridge',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Southern Prairie',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/Lethbridge/hero.jpg',
  heroCredit: 'Photo: Travhillier / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.6942, lon: -112.8328 },
  subtitle: 'The City on the Coulees',
  description:
    'A prairie city built on the rim of the Oldman River valley, with a steel railway trestle a mile long striding across the coulees below. In Blackfoot it is Sikóóhkotok — the place of black rocks — and it sits at the heart of Blackfoot country, between the largest First Nations reserve in Canada and the mountains on the western skyline.',

  actions: [
    { label: 'Explore Lethbridge', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈114K' },
    { label: 'Climate', value: 'Dry · Windy' },
    { label: 'High Level Bridge', value: '≈1.6 km · 96 m' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈210 km · 2h' },
    { label: 'To Waterton', value: '≈130 km · 1.5h' },
  ],

  badges: ['Coulee Country', 'Blackfoot Territory', 'Chinook Winds'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '1909', label: 'The High Level Bridge opens — still the largest railway structure in Canada, still carrying trains', level: 'gold' },
    { value: '1869', label: 'Fort Whoop-Up, the most notorious whisky fort, opens — its trade helped bring the Mounted Police west', level: 'danger' },
    { value: '1870', label: 'The last great battle between the Blackfoot and the Cree, fought in the river bottom below the city', level: 'purple' },
    { value: '1967', label: 'Nikka Yuko Japanese Garden opens for Canada’s centennial — named for Japan–Canada friendship', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Galt Museum on the coulee edge · Galt Gardens · Restaurants and the old brick blocks',
      details: {
        "lead": "The old brick centre, with the Galt Museum on the edge of the coulee, Galt Gardens and the restaurants.",
        "see": [
          {
            "title": "Galt Museum & Archives",
            "text": "On the coulee edge, with a viewing gallery over the river valley. Hours and admission were not confirmed, so check the museum’s site."
          },
          {
            "title": "Galt Gardens",
            "text": "The central park in the middle of downtown."
          },
          {
            "title": "The old brick blocks",
            "text": "Early commercial buildings with restaurants and shops."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city, walkable."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          },
          {
            "label": "Good to know",
            "text": "The river valley and the High Level Bridge are a short drive or walk away."
          }
        ],
        "link": {
          "label": "Tourism Lethbridge",
          "url": "https://tourismlethbridge.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The River Valley', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Below the city', tagLevel: 'safe', meta: 'Indian Battle Park · Fort Whoop-Up · Helen Schuler Nature Centre · Trails under the bridge',
      details: {
        "lead": "The Oldman River valley below the city, with Indian Battle Park, Fort Whoop-Up, the Helen Schuler Nature Centre and the High Level Bridge overhead.",
        "see": [
          {
            "title": "Indian Battle Park",
            "text": "A large park in the coulee. You can walk the river trails to the base of the High Level Bridge, and metal stairs lead to a viewing platform."
          },
          {
            "title": "Fort Whoop-Up",
            "text": "In 2026 it was open May 15 to September 7, 10 am–5 pm daily, and is closed from September to April. Adults $15, seniors and students $10, family $30, plus GST; children 6 and under and Indigenous visitors free."
          },
          {
            "title": "Coalbanks Interpretive Kiosk",
            "text": "An open-air shelter with information on Lethbridge’s early mining history."
          },
          {
            "title": "Helen Schuler Nature Centre",
            "text": "The starting point for several nature trails."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Below downtown, in the river valley."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Fort Whoop-Up is closed in winter; check the Galt Museum’s page for the next season."
          }
        ],
        "link": {
          "label": "Fort Whoop-Up",
          "url": "https://fort.galtmuseum.com/visit"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Henderson Lake', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'South-east', tagLevel: 'blue', meta: 'Lake and park · Nikka Yuko Japanese Garden · Exhibition grounds',
      details: {
        "lead": "A lake and park on the south side, home to the Nikka Yuko Japanese Garden at 835 Mayor Magrath Drive South.",
        "see": [
          {
            "title": "Nikka Yuko Japanese Garden",
            "text": "The Winter Light Festival runs November 26, 2026 to February 28, 2027: Thursday to Monday 5–9 pm in November and December, Friday to Monday 6–9 pm in January and February. It closes if the temperature falls below −25°C."
          },
          {
            "title": "Henderson Lake Park",
            "text": "The park and lake around the garden."
          },
          {
            "title": "Exhibition grounds",
            "text": "The city’s exhibition grounds are nearby."
          }
        ],
        "practical": [
          {
            "label": "Admission",
            "text": "Garden tickets were listed from about $10; one listing says $10 to $17. Check the garden’s site."
          },
          {
            "label": "Closed days",
            "text": "Closed December 25 and January 1 for the festival; last admission 8:30 pm."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Nikka Yuko Winter Light Festival",
          "url": "https://www.showpass.com/winter-light-festival-2026-2027-2/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Lethbridge', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'Across the river', tagLevel: 'purple', meta: 'University of Lethbridge built into the coulee · Newer suburbs · Coulee trails',
      details: {
        "lead": "The newer suburbs west of the river, with the University of Lethbridge built into the coulee and trails along the coulee edge.",
        "see": [
          {
            "title": "University of Lethbridge",
            "text": "The campus sits on the coulee edge."
          },
          {
            "title": "Coulee trails",
            "text": "Trails run along the coulees near the suburbs."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the river, across the bridge."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a walk."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential and student housing."
          }
        ],
        "link": {
          "label": "Tourism Lethbridge",
          "url": "https://tourismlethbridge.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North Lethbridge', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'North', tagLevel: 'olive', meta: 'Older working neighbourhoods · Former mining and rail town · Local diners',
      details: {
        "lead": "The older working neighbourhoods, traditionally the working-class district close to the coal mines, on the other side of the railway from the south side.",
        "see": [
          {
            "title": "Mining heritage",
            "text": "Coal mining began in 1874, and the last local mine closed in 1957."
          },
          {
            "title": "Galt No. 6 mine site",
            "text": "Designated a Municipal Historic Resource and being turned into an interpretive park."
          },
          {
            "title": "Staffordville and Hardieville",
            "text": "Former coal communities annexed by the city in 1913 and 1978."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Local diners and older homes rather than visitor sights."
          }
        ],
        "link": {
          "label": "City of Lethbridge: our history",
          "url": "https://www.lethbridge.ca/arts-culture-events/our-history/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South Side', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'Commercial', tagLevel: 'danger', meta: 'Mayor Magrath Drive · Most hotels and chain restaurants · Car-oriented',
      details: {
        "lead": "Mayor Magrath Drive, with most of the hotels and chain restaurants. It is car-oriented.",
        "see": [
          {
            "title": "Mayor Magrath Drive",
            "text": "The main commercial strip."
          },
          {
            "title": "Nikka Yuko",
            "text": "The Japanese garden is on Mayor Magrath Drive South."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of downtown; a car is easiest."
          },
          {
            "label": "Stay",
            "text": "Most visitor accommodation is here."
          },
          {
            "label": "Good to know",
            "text": "The city was historically split by the railway into a working-class north side and a south side for merchants and professionals."
          }
        ],
        "link": {
          "label": "Tourism Lethbridge",
          "url": "https://tourismlethbridge.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'High Level Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A steel trestle about 1.6 km long and 96 m high, built by the Canadian Pacific Railway between 1907 and 1909 to reach the coal mines and still carrying freight trains today. It is the largest railway structure in Canada. Walk the river-bottom trails in Indian Battle Park to stand directly beneath it — seeing a train cross overhead is the classic Lethbridge moment.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Iconic', level: 'gold' }],
      details: {
        "lead": "The Lethbridge Viaduct is about 1,624 m long and 96 m high, built between 1907 and 1909, and it still carries freight trains.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Superlatives",
                "text": "Described as the largest railway structure in Canada and the largest conventional trestle railroad bridge ever built."
              },
              {
                "title": "Walk under it",
                "text": "The bridge is private rail property, but the public Oldman River trails in Indian Battle Park run to its base."
              },
              {
                "title": "Viewing platform",
                "text": "Metal stairs lead to a viewing platform near the bridge."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Stay off the tracks",
                "text": "The bridge is active freight rail property."
              },
              {
                "title": "Best view",
                "text": "From the river-bottom trails, looking up at the trestle."
              },
              {
                "title": "Combine",
                "text": "Pair it with Indian Battle Park and Fort Whoop-Up."
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
            "text": "Indian Battle Park, below downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism Lethbridge: High Level Bridge",
          "url": "https://tourismlethbridge.com/place/high-level-bridge"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fort Whoop-Up',
      icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      text: 'A reconstruction of the most notorious of the American “whisky forts” built on what is now Canadian soil from 1869. Between 1869 and 1874 its trade in liquor and guns did deep harm to Blackfoot communities, and the lawlessness helped push Ottawa to create the North West Mounted Police in 1873. A National Historic Site, run by the Galt Museum — the story is told as a harm, not a cowboy romance.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Hard history', level: 'danger' }],
      details: {
        "lead": "A reconstruction of the notorious American “whisky fort”, run by the Galt Museum. It is closed from September to April.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "May 15 to September 7, seven days a week, 10 am–5 pm. Tourism Lethbridge also lists weekends only from September 8 to 27."
              },
              {
                "title": "Wagon rides",
                "text": "Available June 17 to September 7 in 2026."
              },
              {
                "title": "Admission",
                "text": "Adults $15, seniors, students and grandparents $10, family $30, plus GST. Children 6 and under free; free for self-identified Indigenous visitors."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The fort is closed in winter; check the Galt Museum’s page for next season’s dates."
              },
              {
                "title": "Holiday Mondays",
                "text": "Tourism Lethbridge lists 1–5 pm on statutory holiday Mondays."
              },
              {
                "title": "Members",
                "text": "Galt Museum members get in free."
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
            "text": "In Indian Battle Park in the river valley."
          },
          {
            "label": "Best time",
            "text": "Summer, May to early September."
          }
        ],
        "link": {
          "label": "Fort Whoop-Up",
          "url": "https://fort.galtmuseum.com/visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Indian Battle Park',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'The river bottom where, in 1870, the Blackfoot and the Cree fought the last great battle between them, often called the Battle of the Belly River; a peace followed the next year. Today it is a large park under the High Level Bridge, with trails, picnic areas and the fort.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'River valley', level: 'blue' }],
      details: {
        "lead": "The river bottom below the High Level Bridge, a large park with trails, picnic areas and Fort Whoop-Up.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The 1870 battle",
                "text": "The park is named after the 1870 battle between the Blackfoot and the Cree, often called the Battle of the Belly River."
              },
              {
                "title": "Coalbanks kiosk",
                "text": "An open-air shelter with information on early mining history."
              },
              {
                "title": "Nature Centre",
                "text": "The Helen Schuler Nature Centre is the starting point for various nature trails."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walk under the bridge",
                "text": "The trails run to the base of the High Level Bridge."
              },
              {
                "title": "Hours",
                "text": "Park and nature centre hours were not confirmed; check the City of Lethbridge."
              },
              {
                "title": "Fort",
                "text": "Fort Whoop-Up is on the same site and is closed in winter."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The park is free; the fort charges admission in season."
          },
          {
            "label": "Getting there",
            "text": "Below downtown, in the river valley."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Tourism Lethbridge",
          "url": "https://tourismlethbridge.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Nikka Yuko Japanese Garden',
      icon: '⛩️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: 'A traditional Japanese garden opened in 1967 for Canada’s centennial, designed by landscape architects from Japan, with structures built there and reassembled here. The name means Japan–Canada friendship and honours Japanese Canadians in southern Alberta — many of whom came during the Second World War, forcibly removed from the BC coast and sent to work on sugar beet farms. Seasonal; check opening dates.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "A traditional Japanese garden opened in 1967, at 835 Mayor Magrath Drive South. The Winter Light Festival runs from November 26.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter Light Festival",
                "text": "November 26, 2026 to February 28, 2027. Thursday to Monday 5–9 pm in November and December, Friday to Monday 6–9 pm in January and February."
              },
              {
                "title": "Last admission",
                "text": "8:30 pm. Closed December 25 and January 1."
              },
              {
                "title": "Weather",
                "text": "The garden closes if the temperature drops below −25°C."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "Listings give from $10; one says $10 to $17 with discounts for students, seniors and children."
              },
              {
                "title": "Regular hours",
                "text": "Sources conflict on the non-festival schedule; check the garden’s own site."
              },
              {
                "title": "Dress warm",
                "text": "The festival is outdoors in winter."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, from about $10."
          },
          {
            "label": "Getting there",
            "text": "On the south side, near Henderson Lake."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Winter Light Festival listing",
          "url": "https://www.showpass.com/winter-light-festival-2026-2027-2/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Galt Museum & Archives',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The city museum, in a former hospital building on the edge of the coulee, with the story of Sikóóhkotok — Blackfoot land, the coal mines, the railway and the people who came to farm. The viewing gallery over the river valley is worth the visit on its own.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
      details: {
        "lead": "The city museum, in a former hospital building on the edge of the coulee, with a viewing gallery over the river valley. It also runs Fort Whoop-Up.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The story",
                "text": "Blackfoot land, the coal mines, the railway and the people who came to farm."
              },
              {
                "title": "Viewing gallery",
                "text": "The gallery over the river valley is worth the visit on its own."
              },
              {
                "title": "Fort Whoop-Up",
                "text": "The museum manages the fort and its seasonal schedule."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours and prices",
                "text": "Not confirmed in the sources; check the museum’s website."
              },
              {
                "title": "Pair it",
                "text": "Combine with Galt Gardens and downtown."
              },
              {
                "title": "Members",
                "text": "Memberships include free entry to Fort Whoop-Up."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the current price."
          },
          {
            "label": "Getting there",
            "text": "Downtown, on the coulee edge."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Galt Museum & Archives",
          "url": "https://fort.galtmuseum.com/visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Head-Smashed-In Buffalo Jump',
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'About an hour west, a UNESCO World Heritage Site where Blackfoot people drove bison over a cliff for some six thousand years. The interpretive centre, built into the cliff and run with Blackfoot guides, is one of the most important places in the province.',
      tags: [{ label: 'UNESCO', level: 'purple' }, { label: 'Day trip', level: 'blue' }],
      details: {
        "lead": "A UNESCO World Heritage Site 18 km north-west of Fort Macleod on Highway 785, preserving more than 6,000 years of Plains buffalo culture.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "October 13, 2026 to May 24, 2027: Wednesday to Sunday, 10 am–5 pm. Closed Monday and Tuesday."
              },
              {
                "title": "Closures",
                "text": "Closed Christmas Eve, Christmas Day, New Year’s Day and Easter Sunday, and sometimes in severe weather."
              },
              {
                "title": "Admission",
                "text": "The official site lists adults (18–64) $18, seniors $14, youth (7–17) $11, family $45, children 0–6 free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check the weather",
                "text": "The site closes in severe weather, so check before driving out."
              },
              {
                "title": "Prices differ",
                "text": "A 2026 blog gave $15 for adults; use the official figures."
              },
              {
                "title": "Guides",
                "text": "The interpretive centre is run with Blackfoot guides."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $18 for adults."
          },
          {
            "label": "Getting there",
            "text": "By car, about an hour west of Lethbridge."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Head-Smashed-In Buffalo Jump",
          "url": "https://www.headsmashedin.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Coulees, River and Wind',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Coulee Trails', dist: 'Both sides of the river', text: 'Paths run along the coulee rims and down into the river bottom. Exposed, dry and steep in places — carry water, and watch for rattlesnakes on warm days.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Helen Schuler Nature Centre', dist: 'River bottom', text: 'A free nature centre with short trails through the cottonwood forest under the bridge. Deer, porcupines and owls live here, in the middle of the city.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Cycling', dist: 'City-wide', text: 'Long paved pathways connect the river valley, Henderson Lake and the neighbourhoods. Ride with the wind at your back — the other direction can be brutal.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Oldman River', dist: 'Through the valley', text: 'Floating and paddling in summer when flows allow. The river is cold, can be shallow and braided, and changes after spring runoff — check conditions first.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Waterton Lakes', dist: '≈1.5h south-west', text: 'The nearest national park, where prairie meets mountains with almost no foothills in between. A park pass is required.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', name: 'Wind & Chinooks', dist: 'Always', text: 'Lethbridge is one of the windier places in Canada, and chinook winds can push winter temperatures above zero in hours. Secure hats and car doors.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is ranching and feedlot country, and steak and burgers are the regional default.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown · North side', areaLevel: 'gold', text: 'A small brewery scene with taprooms that double as the town’s social rooms.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Asian Food', area: 'Downtown', areaLevel: 'purple', text: 'Long-established Chinese and Japanese restaurants reflect communities that have been in southern Alberta for more than a century.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm Country', area: 'Around the city', areaLevel: 'olive', text: 'Irrigated farmland surrounds the city — markets and farm stands in summer, and sweet corn from nearby Taber in August.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Independent coffee shops cluster downtown and around the university.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Exhibition grounds', areaLevel: 'safe', text: 'A seasonal market with southern Alberta producers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Green coulees', text: 'The coulees turn briefly green, wildflowers bloom and the river runs high. Wind is near constant and late snow happens.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Hot and dry', text: 'Long, sunny and hot, with dry air. Thunderstorms can bring hail fast — watch the western sky. Wildfire smoke drifts in some summers.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 4, note: 'Golden cottonwoods', text: 'The river-bottom cottonwoods turn gold and the heat breaks. Excellent walking weather.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold, broken by chinooks', text: 'Cold snaps, wind chill and blowing snow, broken by chinooks that can melt everything in a day. Highways close in blizzards — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Calgary',
      text: 'Highway 2 south and Highway 3 east, about 210 km across open prairie. Strong crosswinds are common; high-sided vehicles should take care.',
      time: '≈2h from Calgary',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Lethbridge (YQL)',
      text: 'A small airport south of the city with flights to Calgary. Most visitors fly into Calgary and drive.',
      time: '≈15 min from downtown',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The Coutts–Sweetgrass crossing on Highway 4 is the main border point, about 100 km south-east, on the route to Montana.',
      time: '≈1h from the border',
    },
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'From Waterton',
      text: 'Highways 5 and 6 connect Lethbridge with Waterton Lakes National Park through ranch land and wind farms.',
      time: '≈1.5h',
    },
  ],

  stay: [
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Mayor Magrath Drive',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels and motels along the main commercial strip in the south of the city. Practical rather than charming.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lethbridge+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Lethbridge%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Fewer rooms',
      text: 'Close to the Galt Museum, restaurants and the coulee edge. The best area to walk in the evening.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Lethbridge', level: 'blue' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Campgrounds',
      area: 'River valley · Seasonal',
      text: 'Campgrounds near the river and on the edge of the city in summer. Book ahead for long weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lethbridge+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Lethbridge Transit',
      text: 'A city bus network links downtown, the university, the college and the main commercial areas. Service is reasonable on the main routes and thin on evenings and Sundays — for the river valley sites, a car or bike is easier.',
      linkLabel: 'Lethbridge Transit',
      linkUrl: 'https://www.lethbridge.ca/roads-parking-transit/transit/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the city’s transit page. In 2026 the city added a mobile app and web portal for buying fares; older Breeze cards needed upgrading. Confirm current prices before you ride.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Cash: $3.00 (exact fare)', 'Day pass: $7.50', '10 rides: $22.50', 'Monthly pass: $77'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.lethbridge.ca/roads-parking-transit/transit/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to reach the river valley, Head-Smashed-In and Waterton.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Good pathways — but plan around the wind.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city; book ahead for early flights.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the coulee-edge viewpoints are walkable; the river bottom is a steep walk down.' },
        ],
      },
    ],
    proTip: {
      label: 'Bridge tip:',
      text: 'Freight trains cross the High Level Bridge several times a day without a published schedule. Walk the trails under it in Indian Battle Park and wait — the rumble carries a long way down the valley before the train appears.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Lethbridge / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum and garden admission: 5% GST' },
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
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Wind', text: 'Expect strong wind on most days. It closes highways to light trailers, tears car doors from hands and makes winter cold far worse.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Rattlesnakes', text: 'Prairie rattlesnakes live in the coulees. Stay on trails, watch where you step on warm days and keep dogs leashed.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Sun & Heat', text: 'Summers are hot and dry with little shade on the coulee trails. Carry water and sunscreen.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Blowing snow can drop visibility to nothing on the open highways. Check 511 Alberta before travelling.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Pass for Waterton', text: 'Waterton Lakes National Park requires a Parks Canada pass — $12.25 adult per day in 2026, youth free.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Lethbridge is Sikóóhkotok, in Treaty 7 territory and the traditional lands of the Blackfoot Confederacy — Kainai, Piikani and Siksika. The Kainai Nation’s reserve, the largest First Nations reserve in Canada, lies just to the south-west.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Chinook Regional Hospital', '960 19 Street South', 'Emergencies: call 911'] },
  ],
};

export default LETHBRIDGE;
