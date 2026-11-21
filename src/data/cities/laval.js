// Laval — данные страницы /city/laval (Лаваль, КВЕБЕК)
// Видео Лаваля в бесплатных банках нет: Pexels по "laval quebec" отдаёт
// Монреаль. В шапке фото с Wikimedia Commons — пруд Centre de la nature,
// автор Richard Mc Neil, CC BY 3.0 (снимок Panoramio, цвета насыщенные).
// Лицензия требует указывать автора — отсюда heroCredit.
// Осторожно с картинками: "Université Laval" — это город Квебек, а многие
// снимки с подписью "Laval" сделаны в Лавале во Франции.
// Население — перепись 2021 года (Statistics Canada, 438 366).
// Тарифы STL — со страницы перевозчика (сетка TR-2026).
// Факты про Cosmodôme, парк Mille-Îles и станции метро — из общих знаний.

export const LAVAL = {
  slug: 'laval',
  name: 'Laval',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Île Jésus, North of Montréal',
  accentLevel: 'olive',
  heroIcon: '🌿',
  heroImage: '/Cities/Laval/hero.jpg',
  heroCredit: 'Photo: Richard Mc Neil / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5697, lon: -73.7241 },
  subtitle: 'The Island City Next Door',
  description:
    'Quebec’s third-largest city fills a whole island of its own, Île Jésus, just across the Rivière des Prairies from Montréal. Mostly suburban and French-speaking, it is easy to overlook — but its northern shore along the Rivière des Mille Îles is a chain of wooded islands, marshes and paddling routes within sight of the metro.',

  actions: [
    { label: 'Explore Laval', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈438K (2021)' },
    { label: 'Rank in Quebec', value: '3rd largest' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Montréal', value: '≈20 min by metro' },
    { label: 'Area', value: '≈246 km²' },
  ],

  badges: ['Island City', 'Mille Îles River', 'Montréal Suburb'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '438,366', label: 'People in the 2021 census — Quebec’s third-largest city, after Montréal and Québec City', level: 'blue' },
    { value: '3', label: 'Montréal metro stations on Laval’s side of the river, at the end of the Orange Line', level: 'gold' },
    { value: '1965', label: 'The fourteen municipalities of Île Jésus merge into a single city, Laval', level: 'purple' },
    { value: '$5', label: 'A single All Modes AB trip — bus, metro, train and REM across Laval and Montréal', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Centropolis & Montmorency', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Montmorency metro · Restaurants and shopping · The closest thing to a city centre',
      details: {
        "lead": "The closest thing to a city centre, with Montmorency metro, restaurants and shopping.",
        "see": [
          {
            "title": "Montmorency metro",
            "text": "The north-eastern end of the Orange Line, with a link to downtown Montréal."
          },
          {
            "title": "Restaurants and shopping",
            "text": "A concentration of restaurants and stores around the station."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Orange Line from Montréal."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          },
          {
            "label": "Good to know",
            "text": "Useful as a base for lower hotel prices than downtown Montréal."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Chomedey', icon: '🌍', iconSrc: '/icons/attractions/ph_globe-thin.svg', tag: 'West', tagLevel: 'blue', meta: 'Diverse residential district · Greek, Lebanese and Armenian communities · Carrefour Laval mall',
      details: {
        "lead": "A diverse residential district, with Greek, Lebanese and Armenian communities and the Carrefour Laval mall.",
        "see": [
          {
            "title": "Communities",
            "text": "Greek, Lebanese and Armenian communities shape the restaurants and shops."
          },
          {
            "title": "Carrefour Laval",
            "text": "A large shopping mall."
          },
          {
            "title": "Cosmodôme",
            "text": "The space science museum is near Highway 15. Most listings give daily hours of 10 am to 5 pm; confirm at cosmodome.org."
          }
        ],
        "practical": [
          {
            "label": "Cosmodôme prices",
            "text": "Adults were listed at $16.50, students $13, seniors $11 and a family of up to four $45; children 6 and under free."
          },
          {
            "label": "Getting there",
            "text": "West of the centre, along Highway 15."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Cosmodôme",
          "url": "https://cosmodome.org/en/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sainte-Rose', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Old village', tagLevel: 'danger', meta: 'Historic stone church · Old village street · Gateway to the Mille Îles river park',
      details: {
        "lead": "A historic stone church and an old village street, and the gateway to the Mille Îles river park.",
        "see": [
          {
            "title": "Church of Sainte-Rose-de-Lima",
            "text": "A recognised historic monument at the oldest village core."
          },
          {
            "title": "Parc de la Rivière-des-Mille-Îles",
            "text": "The main reception is at 345 boul. Sainte-Rose. Summer hours include Wednesday to Sunday, 9 am–6 pm, from June 20 to August 16, 2026."
          },
          {
            "title": "Village street",
            "text": "Heritage houses and cafés near the river."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the north of the island, by car or bus."
          },
          {
            "label": "Winter",
            "text": "The park offers a skating rink and snow slopes in winter; no 2026–27 hours were found."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Parc de la Rivière-des-Mille-Îles",
          "url": "https://www.parc-mille-iles.qc.ca/en/laval/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saint-François', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'East', tagLevel: 'olive', meta: 'Farmland and market gardens at the east end of the island',
      details: {
        "lead": "Farmland and market gardens at the east end of the island.",
        "see": [
          {
            "title": "Farm stands",
            "text": "Strawberries, sweet corn and pumpkins sold at roadside stands in season."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the east end of Île Jésus; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Summer and autumn for the stands."
          },
          {
            "label": "Good to know",
            "text": "Stands are seasonal and keep their own hours."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Vimont & Auteuil', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'North', tagLevel: 'safe', meta: 'Suburban neighbourhoods · Regional hospital · Parks',
      details: {
        "lead": "Suburban neighbourhoods with the regional hospital and parks.",
        "see": [
          {
            "title": "Parks",
            "text": "Local parks in suburban neighbourhoods."
          },
          {
            "title": "Regional hospital",
            "text": "The regional hospital serves the area."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the centre; a car or bus."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Laval-des-Rapides', icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', tag: 'South', tagLevel: 'purple', meta: 'Cartier and de la Concorde metro · Along the Rivière des Prairies',
      details: {
        "lead": "The Cartier and De la Concorde metro stations, along the Rivière des Prairies.",
        "see": [
          {
            "title": "Metro stations",
            "text": "Cartier and De la Concorde are on the Orange Line."
          },
          {
            "title": "Rivière des Prairies",
            "text": "The river runs along the south of the district."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Orange Line from downtown Montréal."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Three Orange Line stations serve Laval."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Rivière des Mille Îles',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'The river along Laval’s northern edge is scattered with dozens of small islands, marshes and channels, protected as a park with canoe and kayak rentals in summer and skating trails in winter. The best place to see that a suburban city can still be wild at its edges.',
      tags: [{ label: 'Paddling', level: 'blue' }, { label: 'Seasonal rentals', level: 'caution' }],
      details: {
        "lead": "The river along Laval’s northern edge, scattered with islands, marshes and channels and protected as a park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summer",
                "text": "Canoe and kayak rentals in summer; the Laval-area rental point is listed as Berge du Garrot."
              },
              {
                "title": "2026 hours",
                "text": "Weekends and holidays from May 16 to June 19; Wednesday to Sunday 9 am–6 pm from June 20 to August 16."
              },
              {
                "title": "Winter",
                "text": "A skating rink and snow slopes are offered in winter."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "No rental prices were found; check the park’s site."
              },
              {
                "title": "Winter hours",
                "text": "No 2026–27 winter hours were found."
              },
              {
                "title": "Reception",
                "text": "The main reception is at 345 boul. Sainte-Rose."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Rentals are paid; access varies by site."
          },
          {
            "label": "Getting there",
            "text": "In Sainte-Rose, on Laval’s north shore."
          },
          {
            "label": "Best time",
            "text": "Summer for paddling."
          }
        ],
        "link": {
          "label": "Parc de la Rivière-des-Mille-Îles",
          "url": "https://www.parc-mille-iles.qc.ca/en/laval/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Centre de la nature',
      icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg',
      text: 'A large park built in a former quarry, with ponds, gardens, a small farm and walking paths. Skating and sledding in winter. Free to enter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "A large park in a former quarry, with ponds, gardens, a small farm and walking paths.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Quarry park",
                "text": "Ponds, gardens and paths in a former quarry."
              },
              {
                "title": "Small farm",
                "text": "A small farm on site."
              },
              {
                "title": "Winter",
                "text": "Skating and sledding in winter."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free to enter",
                "text": "Entry is free."
              },
              {
                "title": "Hours",
                "text": "No 2026 hours or winter schedule were found; check the City of Laval."
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
            "text": "In Laval; a car or bus."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cosmodôme',
      icon: '🚀', iconSrc: '/icons/attractions/ph_rocket-thin.svg',
      text: 'A space science museum and camp near Highway 15, with exhibits on Canada’s role in space exploration. Check current opening hours.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A space science museum and camp near Highway 15, with exhibits on Canada’s role in space exploration.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Most listings give 10 am to 5 pm daily; one lists Tuesday to Sunday only."
              },
              {
                "title": "Admission",
                "text": "Adults $16.50, students $13, seniors $11, family of up to four $45; children 6 and under free."
              },
              {
                "title": "Free day",
                "text": "One guide says free on the first Sunday of each month for people aged 19 and younger."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check first",
                "text": "Prices conflict between sources; confirm at cosmodome.org."
              },
              {
                "title": "Camps",
                "text": "The spring break day camp cost $265 for the week in 2026."
              },
              {
                "title": "Open status",
                "text": "Opening was not confirmed in the sources; check current hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $16.50 for adults."
          },
          {
            "label": "Getting there",
            "text": "In Chomedey, near Highway 15."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Cosmodôme",
          "url": "https://cosmodome.org/en/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Sainte-Rose',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'The church of Sainte-Rose-de-Lima, a recognised historic monument, anchors the oldest village core on the island, with heritage houses and cafés near the river.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Heritage', level: 'danger' }],
      details: {
        "lead": "The church of Sainte-Rose-de-Lima, a recognised historic monument, anchors the oldest village core on the island.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The church",
                "text": "A recognised historic monument."
              },
              {
                "title": "Village core",
                "text": "Heritage houses and cafés near the river."
              },
              {
                "title": "River park",
                "text": "The park’s main reception is close by, at 345 boul. Sainte-Rose."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walk it",
                "text": "The core is small and walkable."
              },
              {
                "title": "Combine",
                "text": "Pair it with the Mille Îles river park."
              },
              {
                "title": "Hours",
                "text": "Cafés keep their own hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk."
          },
          {
            "label": "Getting there",
            "text": "In the north of the island."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Farm Stands of the East End',
      icon: '🍓', iconSrc: '/icons/attractions/ph_cherries-thin.svg',
      text: 'The eastern end of Île Jésus is still farmland — strawberries, sweet corn and pumpkins sold at roadside stands in season.',
      tags: [{ label: 'Summer–fall', level: 'gold' }],
      details: {
        "lead": "The eastern end of Île Jésus is still farmland, with strawberries, sweet corn and pumpkins sold at roadside stands in season.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Strawberries",
                "text": "In early summer."
              },
              {
                "title": "Sweet corn",
                "text": "In late summer."
              },
              {
                "title": "Pumpkins",
                "text": "In autumn."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Seasonal",
                "text": "Stands run in season only; nothing is open in winter."
              },
              {
                "title": "Car needed",
                "text": "The farms are spread out."
              },
              {
                "title": "Check hours",
                "text": "Stands set their own hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "You pay for what you buy."
          },
          {
            "label": "Getting there",
            "text": "East end of the island; by car."
          },
          {
            "label": "Best time",
            "text": "June to October."
          }
        ],
        "link": {
          "label": "Tourisme Laval",
          "url": "https://www.tourismelaval.com/en/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Easy Access to Montréal',
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      text: 'Three Orange Line metro stations connect Laval to downtown Montréal without driving — useful if you stay here for lower hotel prices.',
      tags: [{ label: 'All Modes AB fare', level: 'blue' }],
      details: {
        "lead": "Three Orange Line metro stations connect Laval to downtown Montréal without driving.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The stations",
                "text": "Cartier, De la Concorde and Montmorency."
              },
              {
                "title": "To Montréal",
                "text": "The Orange Line runs to downtown Montréal."
              },
              {
                "title": "Lower prices",
                "text": "Hotels here can cost less than downtown Montréal."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fares",
                "text": "Zone B covers Laval; check ARTM fares for the fare from Laval to Montréal."
              },
              {
                "title": "Base",
                "text": "Useful if you stay in Laval for lower hotel prices."
              },
              {
                "title": "Check service",
                "text": "Check STM and STL service updates before you travel."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Regional fares apply; check ARTM."
          },
          {
            "label": "Getting there",
            "text": "Orange Line from downtown Montréal."
          },
          {
            "label": "Time to allow",
            "text": "Plan about half an hour into the centre."
          }
        ],
        "link": {
          "label": "ARTM: fare schedules",
          "url": "https://www.artm.quebec/en/fare-schedules"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Rivers on Both Sides',
  outdoor: [
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Rivière des Mille Îles', text: 'Calm channels between islands, with rentals in summer. Beginners can paddle in sheltered water.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Mille Îles · Centre de la nature', text: 'Skating trails on the frozen river and park ponds when ice conditions allow.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Island-wide', text: 'A network of bike paths, including routes along both rivers.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Marshes', text: 'Herons and waterfowl in the marshes of the Mille Îles.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Bois de l’Équerre', dist: 'West Laval', text: 'One of the larger woodlands left on the island, with walking trails.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Rivière des Prairies', dist: 'South shore', text: 'River views facing Montréal, with parks along the banks.' },
  ],

  food: [
    { icon: '🥙', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Lebanese & Greek', area: 'Chomedey', areaLevel: 'purple', text: 'Long-established communities make Chomedey a good place for grills, pastries and mezze.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Centropolis', area: 'Downtown', areaLevel: 'gold', text: 'A cluster of restaurants and terraces around a pond near Montmorency.' },
    { icon: '🍓', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Farm Produce', area: 'Saint-François', areaLevel: 'safe', text: 'Strawberries and corn from the island’s farms in summer.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine & Casse-croûtes', area: 'City-wide', areaLevel: 'olive', text: 'Classic Québec snack bars across the island.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Village Cafés', area: 'Sainte-Rose', areaLevel: 'danger', text: 'Small cafés in the old village near the river.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Big-Box Shopping', area: 'Highway 15 · 440', areaLevel: 'blue', text: 'Major malls draw shoppers from across the region.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Floods possible', text: 'Spring floods can affect low-lying shores of both rivers in wet years. Parks green up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'River season', text: 'Warm and humid — the best time for paddling the Mille Îles and farm stands.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour and harvest', text: 'Fall colour along the rivers and pumpkin season on the farms.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 3, note: 'Skating', text: 'Cold and snowy; skating trails and sledding in the parks.' },
  ],

  gettingThere: [
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'By Metro',
      text: 'The Orange Line crosses under the Rivière des Prairies to Cartier, de la Concorde and Montmorency stations. You need an All Modes AB fare.',
      time: '≈20–30 min to downtown Montréal',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'The exo commuter train serves Laval stations on its line to Montréal. Check the current schedule.',
      time: 'Commuter service',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highways 15, 13 and 25 bridge Laval to Montréal and the Laurentians. Bridges jam at rush hour.',
      time: '≈20 min to Montréal off-peak',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Montréal-Trudeau (YUL) is about 25 minutes away by car.',
      time: '≈25 min',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Near Montmorency',
      area: 'Metro access · Good value',
      text: 'Hotels near the metro and Centropolis — a cheaper base for visiting Montréal.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Laval+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Laval%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway Hotels',
      area: 'Car-friendly',
      text: 'Chain hotels near Highways 15 and 440.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Laval+Chomedey', level: 'blue' },
      ],
    },
    {
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      title: 'Sainte-Rose',
      area: 'Quiet · Near the river',
      text: 'Short-term rentals near the old village and the Mille Îles park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sainte-Rose+Laval', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'STL Buses & Montréal Metro',
      text: 'The Société de transport de Laval (STL) runs buses across the island, feeding the three Orange Line metro stations. Bus-only fares do not cover the metro, train or REM — buy an All Modes AB fare for trips into Montréal.',
      linkLabel: 'STL',
      linkUrl: 'https://stlaval.ca/en/fares',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the STL fares page (2026 fare grid). Children 0–5 ride free; children 6–11 ride free with a person aged 14+ holding a valid fare.',
        fareBox: {
          label: 'Adult',
          lines: ['Bus only: $3.75', 'All Modes AB: $5.00', '24h All Modes AB: $13.75', '10 trips AB: $47.50'],
        },
        linkLabel: 'STL fares',
        linkUrl: 'https://stlaval.ca/en/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Laval is spread out; a car is the easiest way between neighbourhoods.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Good paths along the rivers in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', title: 'Metro', text: 'Best for trips into Montréal.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'Going into Montréal? Buy an All Modes AB fare from the start. A Laval bus-only ticket will not get you through the metro gates.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Laval / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg', label: 'Centre de la nature: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French First', text: 'Laval is French-speaking; English is widely understood, especially in Chomedey.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Right Fare', text: 'Bus-only and All Modes AB fares differ. You need AB for the metro.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Spring Floods', text: 'Low-lying shores flood in some springs. Check advisories before riverside walks.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Cold and snowy from December to March; dress warmly.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🔤', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Not Université Laval', text: 'Université Laval is in Québec City, 250 km away — not in Laval.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Laval lies within the historic territory of Indigenous peoples of the St. Lawrence valley; the Kanien’kehá:ka communities of Kanehsatà:ke and Kahnawà:ke are the nearest First Nations today.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hôpital de la Cité-de-la-Santé', '1755 Boulevard René-Laennec', 'Emergencies: call 911'] },
  ],
};

export default LAVAL;
