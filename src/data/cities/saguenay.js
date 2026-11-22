// Saguenay — данные страницы /city/saguenay (Сагеней, КВЕБЕК)
// Видео Сагенея в бесплатных банках нет: Pexels по "saguenay fjord" отдаёт
// норвежские фьорды. В шапке фото с Wikimedia Commons — река Сагеней и
// Чикутими (собор, Старый порт) с моста Sainte-Anne, автор 0x010C,
// сентябрь 2016, CC BY-SA 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (144 723).
// Тарифы STS — со страницы sts.saguenay.ca/tarifs-et-distributeurs/tarifs.
// Больница — адрес из репертуара Santé Québec.
// Слияние 2002 года, Пульпери, потоп 1996 года, алюминиевый мост в Арвиде,
// поезд VIA до Жонкьера — из общих знаний.

export const SAGUENAY = {
  slug: 'saguenay',
  name: 'Saguenay',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Saguenay–Lac-Saint-Jean',
  accentLevel: 'safe',
  heroIcon: '🌊',
  heroImage: '/Cities/Saguenay/hero.jpg',
  heroCredit: 'Photo: 0x010C / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4284, lon: -71.0685 },
  subtitle: 'City at the Head of the Fjord',
  description:
    'Where the Saguenay River widens into one of the world’s great fjords, three old towns — Chicoutimi, Jonquière and La Baie — became a single city in 2002. Saguenay is the capital of a proud, far-flung region: a base for kayaking between cliffs, ice fishing on the bay, cycling around Lac Saint-Jean and eating wild blueberries by the handful.',

  actions: [
    { label: 'Explore Saguenay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈145K (2021)' },
    { label: 'Boroughs', value: 'Chicoutimi · Jonquière · La Baie' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Québec City', value: '≈2 h 30 min by car' },
    { label: 'Fjord to Tadoussac', value: '≈100 km' },
  ],

  badges: ['Saguenay Fjord', 'Three Boroughs', 'Blueberry Country'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '144,723', label: 'People in the 2021 census — capital of the Saguenay–Lac-Saint-Jean region', level: 'blue' },
    { value: '2002', label: 'Chicoutimi, Jonquière, La Baie and smaller towns merge into the City of Saguenay', level: 'purple' },
    { value: '1996', label: 'The Saguenay flood — the “little white house” in Chicoutimi survived the torrent and became its symbol', level: 'danger' },
    { value: '$4', label: 'A single STS bus ride in cash; tickets are $3.70', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Chicoutimi', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Downtown on the hill · Cathedral · Old Port on the river · Rue Racine bars',
      details: {
        "lead": "Downtown on the hill, with the cathedral, the Old Port on the river and the bars of Rue Racine.",
        "see": [
          {
            "title": "La Pulperie de Chicoutimi",
            "text": "From November 2, 2026 to June 15, 2027 it is open Wednesday to Sunday, 10 am–4 pm (last entrance 3 pm), closed Monday and Tuesday. Closed December 24, 25 and 31 and January 1."
          },
          {
            "title": "Old Port",
            "text": "The marina and waterfront promenade on the Saguenay below downtown."
          },
          {
            "title": "Rue Racine",
            "text": "Bars, restaurants and microbreweries downtown."
          }
        ],
        "practical": [
          {
            "label": "Admission",
            "text": "La Pulperie charges admission; no price was found, so check pulperie.com."
          },
          {
            "label": "Getting there",
            "text": "On the Saguenay, in the south of the city."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "La Pulperie de Chicoutimi",
          "url": "https://www.pulperie.com/en/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Jonquière', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: 'West', tagLevel: 'purple', meta: 'Rue Saint-Dominique nightlife · Cégep town · Rivière-aux-Sables park',
      details: {
        "lead": "Rue Saint-Dominique’s nightlife, a college town and the Rivière-aux-Sables park.",
        "see": [
          {
            "title": "Rue Saint-Dominique",
            "text": "The main street, with bars and restaurants."
          },
          {
            "title": "Rivière-aux-Sables park",
            "text": "A park on the river."
          },
          {
            "title": "Arvida",
            "text": "The company town is part of the same city, close by."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of Chicoutimi, in the middle of the city."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Arvida', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Heritage', tagLevel: 'blue', meta: 'Planned aluminium company town · Aluminium bridge over the Saguenay',
      details: {
        "lead": "A planned aluminium company town, declared a National Historic Site in 2012, with an aluminium bridge over the Saguenay.",
        "see": [
          {
            "title": "The aluminium bridge",
            "text": "Classified a heritage building by the City in 2005 and a national historic civil engineering site by the Canadian Society for Civil Engineering in 2008."
          },
          {
            "title": "Heritage site",
            "text": "In July 2026 the city was officially entrusted with the Arvida heritage site, giving it more power to manage and protect it."
          },
          {
            "title": "UNESCO",
            "text": "Arvida is not on UNESCO’s list; the goal is a place on Canada’s tentative list."
          }
        ],
        "practical": [
          {
            "label": "Looking ahead",
            "text": "Phase 2 of the bridge enhancement project, with a belvedere, was expected to finish in 2027."
          },
          {
            "label": "Getting there",
            "text": "In Jonquière, on the Saguenay."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Arvida (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Arvida,_Quebec"
        },
        "checked": "November 2026"
      },
    },
    { name: 'La Baie', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'The bay', tagLevel: 'safe', meta: 'Cruise-ship quay on Baie des Ha! Ha! · Musée du Fjord · Ice-fishing village in winter',
      details: {
        "lead": "The cruise-ship quay on Baie des Ha! Ha!, the Musée du Fjord and an ice-fishing village in winter.",
        "see": [
          {
            "title": "Musée du Fjord",
            "text": "A museum and aquarium devoted to the fjord. 2026 hours and admission were not found."
          },
          {
            "title": "Fjord-du-Saguenay National Park",
            "text": "A daily access fee of about $10 for adults; high season is early June to mid-October, with some services from mid-December to mid-April."
          },
          {
            "title": "Cruises",
            "text": "Sépaq listed a $72 adult cruise with a stopover at L’Anse-Saint-Jean in summer 2026."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the bay, east of Chicoutimi."
          },
          {
            "label": "Winter",
            "text": "No 2026 information on the ice-fishing village was found."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Sépaq: Fjord-du-Saguenay National Park",
          "url": "https://www.sepaq.com/pq/sag/tarifs.dot?language_id=1"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Laterrière', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'South', tagLevel: 'olive', meta: 'Village atmosphere on the road to Québec City',
      details: {
        "lead": "A village atmosphere on the road to Québec City.",
        "see": [
          {
            "title": "Village",
            "text": "A small village south of Chicoutimi on the road to Québec City."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of Chicoutimi, on the main road to Québec City."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Shipshaw', icon: '⚡', iconSrc: '/icons/attractions/ph_lightning-thin.svg', tag: 'North shore', tagLevel: 'caution', meta: 'Hydroelectric station · Rural north bank of the river',
      details: {
        "lead": "A hydroelectric station and the rural north bank of the river.",
        "see": [
          {
            "title": "Hydroelectric station",
            "text": "A power station on the river."
          },
          {
            "title": "North bank",
            "text": "Rural land along the north side of the Saguenay."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the north bank; a car is needed."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Saguenay Fjord',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'Cliffs rise straight out of dark water for about 100 km from Saguenay to Tadoussac. See it from a cruise boat, a sea kayak or the trails of Fjord-du-Saguenay National Park, which starts a short drive from La Baie.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Park fees apply', level: 'caution' }],
      details: {
        "lead": "Cliffs rise straight out of dark water for about 100 km from Saguenay to Tadoussac, seen from a cruise boat, a sea kayak or the trails of Fjord-du-Saguenay National Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Day-use fee",
                "text": "About $10 per adult per day in 2026 (sources give $9.85 to $10.30); check Sépaq."
              },
              {
                "title": "Season",
                "text": "High season is early June to mid-October; some services run from mid-December to mid-April."
              },
              {
                "title": "Cruises",
                "text": "A $72 adult cruise with a stopover at L’Anse-Saint-Jean was listed for summer 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No information on winter ice fishing was found."
              },
              {
                "title": "Hiking",
                "text": "The Sentier du Fjord and Cap-Trinité are popular hikes."
              },
              {
                "title": "Confirm",
                "text": "Check sepaq.com for current fees and services."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park access about $10; cruises extra."
          },
          {
            "label": "Getting there",
            "text": "A short drive from La Baie."
          },
          {
            "label": "Best time",
            "text": "June to mid-October."
          }
        ],
        "link": {
          "label": "Sépaq: Fjord-du-Saguenay",
          "url": "https://www.sepaq.com/pq/sag/tarifs.dot?language_id=1"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'La Pulperie de Chicoutimi',
      icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg',
      text: 'The stone buildings of a huge early-20th-century pulp mill on the Chicoutimi River, now a regional museum. The “little white house” that stood firm in the 1996 flood is part of the site.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "The stone buildings of a huge early-20th-century pulp mill on the Chicoutimi River, now a regional museum.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "November 2, 2026 to June 15, 2027: Wednesday to Sunday, 10 am–4 pm, last entrance 3 pm. Closed Monday and Tuesday."
              },
              {
                "title": "Summer hours",
                "text": "June 17 to September 7, 2026: daily 9 am–6 pm, last entrance 5 pm."
              },
              {
                "title": "Closures",
                "text": "Closed December 24, 25 and 31, 2026 and January 1, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "There is an admission fee; check pulperie.com for current prices."
              },
              {
                "title": "The 1996 flood",
                "text": "The little white house that stood firm in the 1996 flood is part of the site."
              },
              {
                "title": "Check hours",
                "text": "The official site is the best source."
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
            "text": "In Chicoutimi, on the river."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "La Pulperie de Chicoutimi",
          "url": "https://www.pulperie.com/en/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Port of Chicoutimi',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'A waterfront park and marina on the Saguenay below downtown, with a promenade, summer shows and views across to the north shore.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer events', level: 'blue' }],
      details: {
        "lead": "A waterfront park and marina on the Saguenay below downtown, with a promenade, summer shows and views across to the north shore.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Promenade",
                "text": "A waterfront walk on the river."
              },
              {
                "title": "Marina",
                "text": "A marina on the Saguenay."
              },
              {
                "title": "Summer shows",
                "text": "Shows and events in summer."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Events",
                "text": "No 2026 events were found; check the city’s tourism site."
              },
              {
                "title": "Free",
                "text": "Walking the waterfront is free."
              },
              {
                "title": "Pair it",
                "text": "La Pulperie is close by."
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
            "text": "Below downtown Chicoutimi."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Musée du Fjord',
      icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'A museum and aquarium in La Baie devoted to the fjord’s unusual mix of fresh and salt water and the creatures that live in it.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "A museum and aquarium in La Baie devoted to the fjord’s unusual mix of fresh and salt water and the creatures that live in it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The fjord",
                "text": "Exhibits on the fjord’s fresh and salt water."
              },
              {
                "title": "Aquarium",
                "text": "Species that live in the fjord."
              },
              {
                "title": "Location",
                "text": "In La Baie, on Baie des Ha! Ha!."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours and prices",
                "text": "No 2026 hours or prices were found; check the museum’s site."
              },
              {
                "title": "Combine",
                "text": "Pair it with Fjord-du-Saguenay National Park."
              },
              {
                "title": "Rainy day",
                "text": "A good indoor stop."
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
            "text": "In La Baie."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Arvida Aluminium Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'Arvida was built as a company town for aluminium production, and its bridge over the Saguenay is made of aluminium — an early showcase for the metal that still drives the local economy.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Industrial heritage', level: 'blue' }],
      details: {
        "lead": "Arvida was built as a company town for aluminium production, and its bridge over the Saguenay is made of aluminium.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Heritage status",
                "text": "Classified by the City of Saguenay in 2005 and a national historic civil engineering site since 2008."
              },
              {
                "title": "The town",
                "text": "Arvida was declared a National Historic Site in 2012, a well-preserved Canadian company town."
              },
              {
                "title": "Enhancement",
                "text": "Phase 2, including a belvedere, was expected to finish in 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "UNESCO",
                "text": "The town is not on UNESCO’s list; the goal is Canada’s tentative list."
              },
              {
                "title": "Today",
                "text": "The local aluminium industry faces pressure from the trade dispute."
              },
              {
                "title": "Walk it",
                "text": "The bridge and the planned streets can be seen on foot."
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
            "text": "In Jonquière, over the Saguenay."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Arvida (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Arvida,_Quebec"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rue Racine & Rue Saint-Dominique',
      icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg',
      text: 'The main streets of downtown Chicoutimi and Jonquière, lined with microbreweries, bars and restaurants — lively on summer evenings.',
      tags: [{ label: 'Nightlife', level: 'purple' }],
      details: {
        "lead": "The main streets of downtown Chicoutimi and Jonquière, lined with microbreweries, bars and restaurants.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Rue Racine",
                "text": "Downtown Chicoutimi’s street of bars and restaurants."
              },
              {
                "title": "Rue Saint-Dominique",
                "text": "The main street of Jonquière."
              },
              {
                "title": "Microbreweries",
                "text": "Several microbreweries on the two streets."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Summer",
                "text": "Lively on summer evenings."
              },
              {
                "title": "Hours",
                "text": "Venues set their own hours; check before going."
              },
              {
                "title": "Getting around",
                "text": "The two streets are in different parts of the city, so you need a car or bus."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "You pay for food and drink."
          },
          {
            "label": "Getting there",
            "text": "Chicoutimi and Jonquière."
          },
          {
            "label": "Best time",
            "text": "Summer evenings."
          }
        ],
        "link": {
          "label": "Tourisme Saguenay–Lac-Saint-Jean",
          "url": "https://saguenaylacsaintjean.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Fjord, Lake and Forest',
  outdoor: [
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Sea Kayaking', dist: 'Saguenay Fjord', text: 'Guided trips between the cliffs. Water is cold year-round and tides are strong — go with an outfitter.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Fjord-du-Saguenay National Park', dist: '≈30–60 min', text: 'Sépaq park with cliff-top trails, lookouts and multi-day hikes along the fjord.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Ice Fishing', dist: 'La Baie · winter', text: 'A village of fishing huts appears on the frozen Baie des Ha! Ha! each winter.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Véloroute des Bleuets', dist: 'Lac Saint-Jean · ≈1 h west', text: 'A long cycling loop around Lac Saint-Jean through blueberry country.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Skiing', dist: 'Le Valinouët · Mont Bélu', text: 'Ski hills north of the river and in La Baie, with deep snow.' },
    { icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', name: 'Sainte-Rose-du-Nord', dist: '≈45 min', text: 'A tiny village tucked into a cove on the north shore of the fjord.' },
  ],

  food: [
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Blueberries', area: 'Region', areaLevel: 'blue', text: 'The region is famous for its bleuets — in pies, chocolate-covered, or fresh in August.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Tourtière du Lac-Saint-Jean', area: 'Region', areaLevel: 'danger', text: 'A deep, slow-baked meat-and-potato pie, the regional signature dish.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Microbreweries', area: 'Chicoutimi · Jonquière', areaLevel: 'gold', text: 'A strong craft-beer culture on Rue Racine and Rue Saint-Dominique.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Cheese Curds', area: 'Region', areaLevel: 'safe', text: 'Fresh, squeaky curds from regional dairies.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fjord Fish', area: 'La Baie', areaLevel: 'purple', text: 'Smelt and other fish from the fjord, especially in ice-fishing season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late thaw', text: 'Snow lingers into April; black flies arrive in late May and June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fjord season', text: 'Warm days and long evenings — the season for cruises, kayaking and blueberries.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour on the cliffs', text: 'Bright colours along the fjord in late September; cruise ships call at La Baie.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Deep cold', text: 'Long and very cold, with plenty of snow — ice fishing, snowmobiling and skiing.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Route 175 crosses the Laurentides Wildlife Reserve from Québec City. Fill up before the reserve and check winter road conditions.',
      time: '≈2 h 30 min from Québec City',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Bagotville Airport (YBG) in La Baie, shared with a military base, has flights to Montréal.',
      time: 'Short hop from Montréal',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail runs a long, scenic Montréal–Jonquière line through the backcountry a few times a week. Check the current schedule.',
      time: 'Most of a day',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches connect Saguenay with Québec City.',
      time: '≈3 h',
    },
  ],

  stay: [
    {
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      title: 'Chicoutimi',
      area: 'Downtown · Old Port',
      text: 'Hotels near Rue Racine and the river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Chicoutimi+Saguenay', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Saguenay%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'La Baie',
      area: 'On the fjord',
      text: 'Inns by the bay, closest to the national park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=La+Baie+Saguenay', level: 'blue' },
      ],
    },
    {
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      title: 'Jonquière',
      area: 'Nightlife · West end',
      text: 'Handy for Lac Saint-Jean and the VIA Rail station.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jonquiere+Saguenay', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'STS Buses',
      text: 'The Société de transport du Saguenay (STS) runs buses linking Chicoutimi, Jonquière and La Baie. Distances between the boroughs are long, so many visitors drive.',
      linkLabel: 'STS',
      linkUrl: 'https://sts.saguenay.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the STS fares page. Children under 5 ride free. Pay in exact cash, or load the Accès card at a distributor.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00 (exact)', 'Ticket: $3.70', 'Family day pass: $12.50', 'Monthly: $83.50'],
        },
        linkLabel: 'STS fares',
        linkUrl: 'https://sts.saguenay.ca/tarifs-et-distributeurs/tarifs',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way between boroughs and to the fjord.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike share', text: 'Accès Vélo bikes in summer; free with a monthly STS pass.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in each borough.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown Chicoutimi and the Old Port are walkable — but hilly.' },
        ],
      },
    ],
    proTip: {
      label: 'Family tip:',
      text: 'The $12.50 family day pass covers one or two adults with up to four children aged 12 and under — but not two adults without kids.',
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
      { label: 'Saguenay / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Fjord cruises and tours: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', label: 'Old Port promenade: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French Only, Mostly', text: 'Saguenay is one of the most French-speaking cities in Canada. English is less common than in Montréal — a few words of French help.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Long Distances', text: 'The three boroughs are spread out along the river; plan on driving.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Route 175', text: 'The road through the Laurentides reserve has long stretches without services and no cell signal in places. Watch for moose.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Real Winter', text: 'Winters are long and very cold. Winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Black flies and mosquitoes from late May into July — bring repellent for the trails.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Saguenay lies within Nitassinan, the ancestral territory of the Innu; the Innu community of Mashteuiatsh is on Lac Saint-Jean.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hôpital de Chicoutimi', '305 Rue Saint-Vallier', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default SAGUENAY;
