// Lloydminster — данные страницы /city/lloydminster (Ллойдминстер, AB/SK)
// Видео Ллойдминстера в бесплатных банках нет; на Commons в основном
// фото магазинов.
// В шапке фото с Wikimedia Commons — ратуша сверху, вид на север вдоль
// границы Альберты и Саскачевана (красные пограничные столбы), автор
// Jason Whiting, июль 2014, CC BY-SA 4.0 — лицензия требует автора,
// отсюда heroCredit.
// Население — перепись 2021 года: 31 582 (19 739 AB + 11 843 SK).
// Налоги: SK-сторона — PST в городе обычно не взимается, кроме авто,
// жилья (lodging), связи и электричества для бизнеса (уведомление SK
// 2015/2017); AB-сторона — без PST, отели + 6% Tourism Levy с 1.04.2026.
// Время: город следует Альберте; Альберта с 1 ноября 2026 — UTC-6 круглый
// год (Bill 31); Саскачеван внёс закон, разрешающий Ллойдминстеру
// следовать за Альбертой (апрель 2026) — статус уточнить.
// Транспорт: регулярного автобуса нет; Border City Connects — по запросу
// для людей с ограниченной мобильностью (sk.211.ca).
// Больница — 3820 43 Ave (SK), 24/7, для жителей обеих провинций.
// Barr Colonists, 1903, пограничные столбы на 4-м меридиане — из общих
// знаний.

export const LLOYDMINSTER = {
  slug: 'lloydminster',
  name: 'Lloydminster',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan & Alberta · Border City',
  accentLevel: 'gold',
  heroIcon: '🧭',
  heroImage: '/Cities/Lloydminster/hero.jpg',
  heroCredit: 'Photo: Jason Whiting / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.2780, lon: -110.0050 },
  subtitle: 'One City, Two Provinces',
  description:
    'Lloydminster is Canada’s best-known border city, split between two provinces: the Alberta–Saskatchewan border runs right down its main street, marked by giant red survey posts. Founded in 1903 by British settlers of the Barr Colony, it is now a busy oil-and-farming hub where taxes, licence plates and even history lessons depend on which side of the street you stand on.',

  actions: [
    { label: 'Explore Lloydminster', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈31.6K (2021)' },
    { label: 'Split', value: '≈19.7K AB · ≈11.8K SK' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'To Edmonton', value: '≈2 h 30 min by car' },
    { label: 'To Saskatoon', value: '≈3 h by car' },
  ],

  badges: ['Border City', 'Two Provinces', 'Barr Colony'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '31,582', label: 'People in the 2021 census — 19,739 in Alberta and 11,843 in Saskatchewan', level: 'blue' },
    { value: '1903', label: 'The Barr Colonists, settlers from Britain, found the town on the future provincial border', level: 'purple' },
    { value: '0%', label: 'Provincial sales tax on most purchases — on either side of the line (lodging excepted)', level: 'safe' },
    { value: 'UTC-6', label: 'The whole city follows Alberta Time, which no longer changes from November 2026', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Meridian Avenue (50th Ave)', icon: '🧭', iconSrc: '/icons/attractions/ph_compass-thin.svg', tag: 'Border', tagLevel: 'gold', meta: 'The provincial boundary down the middle of the street, with the red border markers',
      details: {
        "lead": "The Fourth Meridian line, the border between Alberta and Saskatchewan, runs down the middle of the city.",
        "see": [
          {
            "title": "The border",
            "text": "The Fourth Meridian was chosen as the boundary when the two provinces were created in 1905; sources give the street as Meridian Avenue or 50th Avenue."
          },
          {
            "title": "Border markers",
            "text": "Four red survey-style markers about 30 m tall stand next to City Hall; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          },
          {
            "label": "Good to know",
            "text": "One city government runs both halves."
          }
        ],
        "link": {
          "label": "City of Lloydminster: border markers",
          "url": "https://www.lloydminster.ca/recreation-culture-community/history-and-heritage/border-markers/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'purple', meta: 'City Hall, shops and cafés straddling the border',
      details: {
        "lead": "The city centre, with City Hall beside the border markers.",
        "see": [
          {
            "title": "City Hall",
            "text": "Stands next to the border markers at the crossing of Highways 16 and 17."
          },
          {
            "title": "Cultural & Science Centre",
            "text": "At 4515 44th Street; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "In 1930 the two communities were amalgamated; it became a city in both provinces in 1958."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/home-property-utilities/choose-lloydminster/the-city/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Alberta Side', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'West', tagLevel: 'blue', meta: 'About 19,700 of the city’s residents (2021 census)',
      details: {
        "lead": "The Alberta half of the city, home to about 19,700 residents (2021 census).",
        "see": [
          {
            "title": "Population",
            "text": "The 2021 census gave roughly 31,582 in the city overall, about 19,739 on the Alberta side."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the boundary."
          },
          {
            "label": "Good to know",
            "text": "One city government runs both sides."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/home-property-utilities/choose-lloydminster/the-city/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saskatchewan Side', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'East', tagLevel: 'olive', meta: 'About 11,800 of the city’s residents (2021 census)',
      details: {
        "lead": "The Saskatchewan half of the city, home to about 11,800 residents (2021 census).",
        "see": [
          {
            "title": "Population",
            "text": "About 11,843 of the city’s roughly 31,582 residents in 2021."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the boundary."
          },
          {
            "label": "Good to know",
            "text": "One city government runs both sides."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/home-property-utilities/choose-lloydminster/the-city/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bud Miller All Seasons Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Large park with trails, a lake and gardens',
      details: {
        "lead": "A park of about 200 acres at 2902 59th Avenue, with a lake, trails, formal gardens and an amphitheatre.",
        "see": [
          {
            "title": "Trails",
            "text": "A 2.6 km easy loop; 7.5 km of groomed cross-country ski trails in winter."
          },
          {
            "title": "Lake",
            "text": "A 10-acre manmade lake for waterfowl and rainbow trout."
          },
          {
            "title": "Winter",
            "text": "Tobogganing, skating and ice fishing on the pond; check current conditions."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the southwest of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The city has closed its outdoor ice surfaces early in some years."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Bud Miller All Seasons Park",
          "url": "https://tourismsaskatchewan.com/listings/2075/bud-miller-all-seasons-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Highway 16 Strip', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and big-box stores on the Yellowhead',
      details: {
        "lead": "Hotels, restaurants and big-box stores on the Yellowhead.",
        "see": [
          {
            "title": "Services",
            "text": "Places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along Highway 16."
          },
          {
            "label": "Good to know",
            "text": "The border markers are on this highway, by City Hall."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Border Markers',
      icon: '🧭', iconSrc: '/icons/attractions/ph_compass-thin.svg',
      text: 'Four tall red markers styled like survey stakes stand beside City Hall where Highways 16 and 17 cross, built in 1994. The gap between the pillars represents the border — the classic Lloydminster photo.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
      details: {
        "lead": "Four red survey-style markers, each about 100 feet (30 m) tall, beside City Hall where Highways 16 and 17 cross.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Meaning",
                "text": "The gap between the steel pillars of each marker represents the actual border."
              },
              {
                "title": "Built",
                "text": "Erected in 1994."
              },
              {
                "title": "History",
                "text": "The Fourth Meridian became the Alberta–Saskatchewan boundary in 1905."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Photo",
                "text": "The classic photo is standing with a foot in each province."
              },
              {
                "title": "Free",
                "text": "Free to see, any time."
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
            "text": "Next to City Hall, at the crossing of Highways 16 and 17."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "City of Lloydminster: border markers",
          "url": "https://www.lloydminster.ca/recreation-culture-community/history-and-heritage/border-markers/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Lloydminster Cultural & Science Centre',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The city’s museum and cultural complex, telling the story of the Barr Colony and the region’s natural history. Check opening hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "The city’s museum, also called the Barr Colony Heritage Cultural Centre, at 4515 44th Street.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "The city lists Monday to Saturday 10 am–6 pm (Wednesday to 8 pm, with a midday break), closed Sunday."
              },
              {
                "title": "Admission",
                "text": "$8 for adults and $6 for seniors and students, per the city; one travel site says galleries are free."
              },
              {
                "title": "Archives",
                "text": "The archives have separate hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Conflicts",
                "text": "Third-party listings give different hours; call 780-874-3720."
              },
              {
                "title": "Story",
                "text": "The Barr Colony settlers and the region’s natural history."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $8 for adults."
          },
          {
            "label": "Getting there",
            "text": "4515 44th Street."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "City of Lloydminster: facility information",
          "url": "https://www.lloydminster.ca/recreation-culture-community/lma-lcsc/facility-information/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bud Miller All Seasons Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A large park with walking trails, a small lake, gardens and winter skating.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
      details: {
        "lead": "A park of about 200 acres with walking trails, a lake, formal gardens, an amphitheatre and winter skating.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "A 2.6 km easy loop."
              },
              {
                "title": "Lake",
                "text": "A 10-acre manmade lake for waterfowl and rainbow trout."
              },
              {
                "title": "Winter",
                "text": "7.5 km of groomed ski trails, a toboggan hill, and skating and ice fishing on the pond."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ice",
                "text": "Check current ice conditions; the city has closed outdoor ice early in some years."
              },
              {
                "title": "Gardens",
                "text": "The formal gardens can be booked for weddings."
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
            "text": "2902 59th Avenue."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Lloydminster: Bud Miller All Seasons Park",
          "url": "https://forms.lloydminster.ca/recreation-culture-community/parks-trails-and-sports-fields/bud-miller-all-seasons-park/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'City Hall on the Border',
      icon: '🏢', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: 'One city government runs both halves of town — City Hall stands right beside the provincial boundary.',
      tags: [{ label: 'Free to view', level: 'safe' }],
      details: {
        "lead": "One city government runs both halves of town; City Hall stands next to the provincial boundary.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "One city",
                "text": "The two communities were amalgamated in 1930 and became a city in both provinces in 1958."
              },
              {
                "title": "Population",
                "text": "About 31,582 in 2021: 19,739 on the Alberta side and 11,843 on the Saskatchewan side."
              },
              {
                "title": "Next door",
                "text": "The border markers are beside City Hall."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Exterior",
                "text": "Best seen from outside with the border markers."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view."
          },
          {
            "label": "Getting there",
            "text": "At the crossing of Highways 16 and 17."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/home-property-utilities/choose-lloydminster/the-city/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Heavy Oil Country',
      icon: '🛢️', iconSrc: '/icons/attractions/ph_gas-can-thin.svg',
      text: 'Lloydminster sits in the middle of a heavy-oil region; oil, upgrading and oilfield services drive the local economy.',
      tags: [{ label: 'Industry', level: 'danger' }],
      details: {
        "lead": "Lloydminster sits in the middle of a heavy-oil region, and the city is described as having a bi-provincial upgrader.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Economy",
                "text": "Oil, upgrading and oilfield services drive the local economy."
              },
              {
                "title": "Upgrader",
                "text": "A MapQuest listing mentions a bi-provincial upgrader; no operator was confirmed here."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Not a tourist site",
                "text": "Industrial facilities are not open to visitors; look from public roads."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "In and around the city."
          },
          {
            "label": "Time to allow",
            "text": "Not a sightseeing stop."
          }
        ],
        "link": {
          "label": "City of Lloydminster",
          "url": "https://www.lloydminster.ca/home-property-utilities/choose-lloydminster/the-city/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Prairie & Parkland Day Trips',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'Lakes and provincial parks in both provinces are within an hour or two — from the Battlefords to the lakes north of the city.',
      tags: [{ label: 'Car needed', level: 'caution' }],
      details: {
        "lead": "Lakes and provincial parks in both provinces are within an hour or two by car.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Close by",
                "text": "From the Battlefords to the lakes north of the city."
              },
              {
                "title": "Provincial parks",
                "text": "Parks in both Alberta and Saskatchewan are within reach."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Car needed",
                "text": "A car is the practical way to reach them."
              },
              {
                "title": "Winter",
                "text": "Check road and park conditions."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies by park."
          },
          {
            "label": "Getting there",
            "text": "By car."
          },
          {
            "label": "Time to allow",
            "text": "A half to full day."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan",
          "url": "https://www.tourismsaskatchewan.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Parkland on the Border',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'City Trails', dist: 'Bud Miller Park', text: 'Walking paths, a lake and gardens in town.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Nearby Lakes', dist: '≈30–60 min', text: 'Small lakes and provincial parks on both sides of the border.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Area lakes', text: 'Pike and walleye. Fish with the licence of the province you are in.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'City park', text: 'Outdoor skating when it freezes.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Sloughs', text: 'Waterfowl in the prairie potholes in spring and fall.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Northern Lights', dist: 'Outside town', text: 'Clear winter nights can bring the aurora.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Steakhouses', area: 'City-wide', areaLevel: 'danger', text: 'Alberta and Saskatchewan beef on many menus.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and road-trip stops.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie Ukrainian comfort food.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'City-wide', areaLevel: 'blue', text: 'Oil-town pubs and taprooms.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'Late thaw; the parkland greens up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fair season', text: 'Warm days, long evenings and summer exhibitions.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden aspen and harvest fields.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters — often below −25 °C.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Yellowhead Highway (Highway 16) runs through the city, linking Edmonton to the west with the Battlefords and Saskatoon to the east.',
      time: '≈2 h 30 min from Edmonton',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Lloydminster has a small regional airport; most travellers fly into Edmonton (YEG) or Saskatoon (YXE).',
      time: '≈2 h 45 min from YEG',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches on the Yellowhead may stop here. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail service to Lloydminster.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway 16',
      area: 'Hotels',
      text: 'Most hotels line the Yellowhead on both sides of the border.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lloydminster', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Lloydminster%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Near the markers',
      text: 'A few options close to Meridian Avenue.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lloydminster+Alberta', level: 'blue' },
      ],
    },
    {
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Lake Campgrounds',
      area: 'Nearby parks',
      text: 'Provincial park campgrounds within an hour.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No City Buses',
      text: 'Lloydminster has no regular public bus service. Border City Connects runs pre-booked door-to-door rides for people with mobility challenges; everyone else drives, cycles or takes a taxi.',
      linkLabel: 'City transportation',
      linkUrl: 'https://www.lloydminster.ca/home-property-utilities/roads-sidewalks-and-transportation/transportation/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
        title: 'Taxis & Accessible Rides',
        text: 'Local taxis serve both sides of the city. Border City Connects (for riders with mobility challenges) should be booked 24 hours ahead; check its current fares.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Accessible rides: book 24 h ahead', 'Taxis: local', 'Car: the norm'],
        },
        linkLabel: 'City transportation',
        linkUrl: 'https://www.lloydminster.ca/home-property-utilities/roads-sidewalks-and-transportation/transportation/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way around a spread-out city.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the border markers are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Park paths in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Check which province an address is in — it matters for some taxes, licences and services, even though one city runs both halves.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Mostly 5% GST — on both sides',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, and under special rules most purchases on Lloydminster’s Saskatchewan side are also exempt from Saskatchewan PST — so you usually pay just 5% GST. Exceptions on the Saskatchewan side include vehicles, lodging and telecommunications. Hotels on the Alberta side add Alberta’s 6% Tourism Levy (from April 1, 2026).',
    comparison: [
      { label: 'Lloydminster (most goods)', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Rest of Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels, AB side: GST + 6% Tourism Levy' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels, SK side: GST + SK PST (lodging is not exempt)' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST' },
      { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', label: 'Vehicles (SK side): PST applies' },
    ],
    exempt: [
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Most goods on either side: no provincial tax' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🧭', iconSrc: '/icons/attractions/ph_compass-thin.svg', label: 'Border markers: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'One Clock', text: 'The whole city follows Alberta. From November 1, 2026 Alberta stays on UTC-6 all year — the same as the rest of Saskatchewan. Saskatchewan has moved to update its law to match; check locally if in doubt.' },
    { icon: '🧾', iconSrc: '/icons/attractions/ph_receipt-thin.svg', title: 'Tax Quirk', text: 'Most shopping is GST-only on both sides — but hotels, vehicles and some services are taxed differently by province.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'One Hospital', text: 'The hospital is on the Saskatchewan side but serves both provinces — bring your provincial health card.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Two Licences', text: 'Fishing and hunting licences depend on which province you are in.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Temperatures often drop below −25 °C. Plug in your car overnight.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car Town', text: 'With no city buses, plan to drive or use taxis.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Lloydminster is on Treaty 6 territory, the traditional lands of the Cree and other First Nations, and the homeland of the Métis; Onion Lake Cree Nation lies nearby.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Lloydminster Hospital · 3820 43 Ave', 'Emergency 24/7 · 306-820-6033', 'Emergencies: call 911'] },
  ],
};

export default LLOYDMINSTER;
