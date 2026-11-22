// Swift Current — данные страницы /city/swift-current (САСКАЧЕВАН)
// Видео Свифт-Каррента в бесплатных банках нет. Осторожно с Commons:
// "Swift Current Sunset" (GlacierNPS) — это озеро Swiftcurrent в Glacier NP,
// Монтана, не город.
// В шапке фото с Wikimedia Commons — Swift Current Creek в городе (по
// категории файла), автор Vidit9395, июнь 2018, CC BY-SA 4.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (16 750).
// Swift Transit — swiftcurrent.ca: $3 / $30 / $75, пн–сб («уточняйте»).
// Больница — Cypress Regional Hospital, 2004 Saskatchewan Dr (SHA, 24/7).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Chinook Pathway, Frontier Days, Lake Diefenbaker, Great Sand Hills,
// Cypress Hills, Grasslands — из общих знаний.

export const SWIFT_CURRENT = {
  slug: 'swift-current',
  name: 'Swift Current',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Southwest Hub',
  accentLevel: 'safe',
  heroIcon: '🌾',
  heroImage: '/Cities/SwiftCurrent/hero.jpg',
  heroCredit: 'Photo: Vidit9395 / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.2851, lon: -107.7972 },
  subtitle: 'Gateway to the Southwest Prairie',
  description:
    'On the Trans-Canada halfway between Regina and Medicine Hat, Swift Current is the friendly service town of Saskatchewan’s southwest. A green pathway follows Swift Current Creek through the city, and from here big-sky roads lead to Lake Diefenbaker, the Great Sand Hills, the Cypress Hills and the wild grasslands near the US border.',

  actions: [
    { label: 'Explore Swift Current', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈16.8K (2021)' },
    { label: 'Region', value: 'Southwest Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈2 h 30 min by car' },
    { label: 'To Lake Diefenbaker', value: '≈45 min by car' },
  ],

  badges: ['Southwest Hub', 'Creek Pathway', 'Prairie Gateway'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '16,750', label: 'People in the 2021 census — the largest city in southwest Saskatchewan', level: 'blue' },
    { value: 'Mon–Sat', label: 'Swift Transit’s Red Line runs 7 am to 7 pm, Monday to Saturday', level: 'gold' },
    { value: 'UTC-6', label: 'All year — and since November 2026 Alberta, 2 hours west, uses the same clock', level: 'purple' },
    { value: '$3', label: 'A one-way bus fare; children under 6 ride free', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Central Avenue', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'The historic Lyric Theatre and downtown streets',
      details: {
        "lead": "Downtown, with the 1912 Lyric Theatre on Central Avenue North.",
        "see": [
          {
            "title": "Lyric Theatre",
            "text": "At 227 Central Avenue N; built in 1912 as a vaudeville and silent-film theatre. Recent listings include live music, theatre and comedy; Megan Nash played on November 21, 2026."
          },
          {
            "title": "Swift Current Museum",
            "text": "At 44 Robert Street W; listed Monday to Friday 9 am–5 pm and Saturday 1–5 pm, closed holidays."
          },
          {
            "title": "Art Gallery of Swift Current",
            "text": "At 411 Herbert Street E; free; Tuesday to Saturday noon–5 pm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The city centre."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Museum phone 306-778-2775; gallery 306-778-2736."
          }
        ],
        "link": {
          "label": "Swift Current Tourism: events",
          "url": "https://www.tourismswiftcurrent.ca/calendar-of-events"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Chinook Pathway', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Creek', tagLevel: 'blue', meta: 'Paved trail along Swift Current Creek through the city',
      details: {
        "lead": "A paved trail along Swift Current Creek through the city, also listed as Chinook Parkway.",
        "see": [
          {
            "title": "Length",
            "text": "The city cites 25 km; Tourism Saskatchewan says 24 km and another listing 22 km."
          },
          {
            "title": "Route",
            "text": "It starts on the North Service Road and winds along the creek to the Windscape Kite Festival site."
          },
          {
            "title": "Expansion",
            "text": "A 1 km link to the northeast part of town was opened by the city, so the total may have changed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Through the city along the creek."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Check the city’s trails page for the current map."
          }
        ],
        "link": {
          "label": "City of Swift Current: trails",
          "url": "https://www.swiftcurrent.ca/i-want-to/find/trails"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Kinetic Exhibition Park', icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg', tag: 'Events', tagLevel: 'danger', meta: 'Fairgrounds, home of Frontier Days and other events',
      details: {
        "lead": "The fairgrounds, a popular family destination that hosts events through the year, beside the Mennonite Heritage Village.",
        "see": [
          {
            "title": "Events",
            "text": "Hosts events through the year; no 2027 Frontier Days dates were found."
          },
          {
            "title": "Mennonite Heritage Village",
            "text": "Next door on 17th Avenue SE: an original homestead, church and gardens."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Reached from South Railway Street and Highway 4."
          },
          {
            "label": "Time to allow",
            "text": "Depends on the event."
          },
          {
            "label": "Good to know",
            "text": "Check the venue’s calendar."
          }
        ],
        "link": {
          "label": "Mennonite Heritage Village",
          "url": "https://mennoniteheritagevillage.ca/about.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverdene', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Neighbourhood near the creek and parks',
      details: {
        "lead": "A residential neighbourhood near the creek and parks.",
        "see": [
          {
            "title": "Residential",
            "text": "No visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the city, near the creek."
          },
          {
            "label": "Good to know",
            "text": "The Chinook Pathway is nearby."
          }
        ],
        "link": {
          "label": "City of Swift Current",
          "url": "https://www.swiftcurrent.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North Hill', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'olive', meta: 'Hotels and services along the Trans-Canada',
      details: {
        "lead": "Hotels and services along the Trans-Canada Highway.",
        "see": [
          {
            "title": "Hotels and services",
            "text": "The highway strip for places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Trans-Canada."
          },
          {
            "label": "Good to know",
            "text": "The main sights are downtown."
          }
        ],
        "link": {
          "label": "Swift Current Tourism",
          "url": "https://www.tourismswiftcurrent.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Heritage Village', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'History', tagLevel: 'purple', meta: 'Mennonite Heritage Village beside Kinetic Exhibition Park',
      details: {
        "lead": "The Mennonite Heritage Village, founded in 1992 to portray early Mennonite settlers around Swift Current.",
        "see": [
          {
            "title": "The buildings",
            "text": "Five early-20th-century wood-frame structures moved to the site, including a homestead and a church, set in gardens."
          },
          {
            "title": "Status",
            "text": "A Municipal Heritage Property; it holds a summer watermelon festival."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Beside Kinetic Park on 17th Avenue SE."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "A summer attraction; check opening before a winter visit."
          }
        ],
        "link": {
          "label": "Mennonite Heritage Village",
          "url": "https://mennoniteheritagevillage.ca/about.html"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Chinook Pathway',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A paved walking and cycling trail that follows Swift Current Creek through parks and neighbourhoods — the city’s green spine.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "A paved walking and cycling trail along Swift Current Creek through parks and neighbourhoods.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "Sources give 22, 24 or 25 km; AllTrails lists a 15.8 km main route."
              },
              {
                "title": "Route",
                "text": "From the North Service Road along the creek to the Windscape Kite Festival site."
              },
              {
                "title": "Also called",
                "text": "Often listed as Chinook Parkway."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to use."
              },
              {
                "title": "Map",
                "text": "See the city’s trails page."
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
            "text": "Access points through the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Swift Current: trails",
          "url": "https://www.swiftcurrent.ca/i-want-to/find/trails"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Lyric Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A historic downtown theatre restored as a venue for live music, events and community arts.',
      tags: [{ label: 'Events', level: 'purple' }, { label: 'Heritage', level: 'gold' }],
      details: {
        "lead": "A historic theatre built in 1912 as a vaudeville and silent-film house, now a venue for live music, theatre and community arts.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "It was a movie house until 1980, when it became a night club; it is now restored as a performance venue."
              },
              {
                "title": "Programming",
                "text": "Open Stage, Youth Talent Night, Write Out Loud and comedy nights."
              },
              {
                "title": "Heritage",
                "text": "Painted advertisements on the building date to the early 1920s."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check",
                "text": "Look at the Lyric’s event calendar for the next show."
              },
              {
                "title": "Address",
                "text": "227 Central Avenue N."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets vary by event."
          },
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          }
        ],
        "link": {
          "label": "The Lyric Theatre",
          "url": "https://lyrictheatre.ca/venue/the-lyric-theatre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Swift Current Museum & Art Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'Local history exhibits at the Swift Current Museum, and free exhibitions at the separate Art Gallery of Swift Current.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "Two separate venues: the Swift Current Museum on Robert Street and the free Art Gallery of Swift Current on Herbert Street.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Museum",
                "text": "44 Robert Street W; permanent and temporary galleries. Listed Monday to Friday 9 am–5 pm, Saturday 1–5 pm, closed holidays."
              },
              {
                "title": "Art Gallery",
                "text": "411 Herbert Street E; admission is always free; Tuesday to Saturday noon–5 pm, closed Sunday, Monday and holidays."
              },
              {
                "title": "Local history",
                "text": "The museum has an exhibit on the city’s history by decade."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Phone",
                "text": "Museum 306-778-2775; gallery 306-778-2736."
              },
              {
                "title": "Prices",
                "text": "No museum admission price was found; confirm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Gallery free; museum price unconfirmed."
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
          "label": "Art Gallery of Swift Current: visit",
          "url": "https://artgalleryofswiftcurrent.org/visit/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Frontier Days',
      icon: '🤠', iconSrc: '/icons/attractions/ph_horse-thin.svg',
      text: 'A long-running summer fair and rodeo at the exhibition grounds — check dates.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Tickets', level: 'caution' }],
      details: {
        "lead": "A summer fair and rodeo at Kinetic Exhibition Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Venue",
                "text": "Kinetic Exhibition Park, a family destination hosting events through the year."
              },
              {
                "title": "Dates",
                "text": "No 2027 dates were found; the 2026 fair is over."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check the organizers or Swift Current Tourism for dates and tickets."
              },
              {
                "title": "Not now",
                "text": "Not held in November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets; prices unconfirmed."
          },
          {
            "label": "Getting there",
            "text": "Kinetic Exhibition Park, via South Railway Street and Highway 4."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Swift Current Tourism: events",
          "url": "https://www.tourismswiftcurrent.ca/calendar-of-events"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Saskatchewan Landing Provincial Park',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'Where the highway crosses Lake Diefenbaker in a deep valley — beaches, hiking, and the historic Goodwin House. About 45 minutes north.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Day trip', level: 'blue' }],
      details: {
        "lead": "At the west end of Lake Diefenbaker, the site of a historic crossing of the South Saskatchewan River, with beaches, hiking trails and Goodwin House.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Goodwin House",
                "text": "The historic house is now the visitor and interpretive centre."
              },
              {
                "title": "Fees",
                "text": "The province says entry permits and campsite fees are unchanged for 2026; one guide lists $11 per vehicle and $35 per campsite night."
              },
              {
                "title": "Winter",
                "text": "Hiking and ice fishing are listed in winter; no winter-specific fees were found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "Hiking trails have interpretive panels."
              },
              {
                "title": "Confirm",
                "text": "Check parks.saskatchewan.ca or the park office."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park entry permit; about $11 per vehicle (unconfirmed)."
          },
          {
            "label": "Getting there",
            "text": "North of Swift Current by car."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Saskatchewan Parks: Saskatchewan Landing",
          "url": "https://saskparks.tourismsaskatchewan.com/saskatchewan-landing"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Great Sand Hills',
      icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg',
      text: 'Open sand dunes rising out of the prairie northwest of the city — a surreal landscape for walking and photography.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Remote', level: 'danger' }],
      details: {
        "lead": "Open sand dunes in the prairie, about 157 to 160 km northwest of Swift Current, inside an ecological reserve with a public access point.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Access",
                "text": "A public access point is in the northwestern section, with interpretive signs; there is no overnight camping."
              },
              {
                "title": "Trails",
                "text": "Informal; the sand is very fine, and some visitors go barefoot."
              },
              {
                "title": "Season",
                "text": "One guide says open year-round, best from late spring to fall."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Private land",
                "text": "Much of the area belongs to ranchers; respect private property."
              },
              {
                "title": "Permits",
                "text": "Environment and Climate Change Canada handles access for the national wildlife area."
              },
              {
                "title": "Distance",
                "text": "Sources disagree on the distance from Sceptre (10 or 20 km)."
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
            "text": "By car, via Highway 32; about two hours from Swift Current."
          },
          {
            "label": "Best time",
            "text": "Late spring to fall."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Great Sand Hills",
          "url": "https://www.tourismsaskatchewan.com/blog/the-great-sand-hills"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Big Sky Country',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Diefenbaker', dist: '≈45 min north', text: 'A long reservoir in a deep valley — boating, fishing and beaches.' },
    { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', name: 'Great Sand Hills', dist: '≈1 h 30 min northwest', text: 'Sand dunes and grassland; roads are rough — carry water.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Cypress Hills', dist: '≈2 h southwest', text: 'Forested hills and a dark-sky preserve straddling the Alberta border.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Grasslands National Park', dist: '≈2 h south', text: 'Native prairie, bison and prairie dogs near the US border.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Chinook Pathway', text: 'Easy riding along the creek.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets and summer storms over endless fields.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'danger', text: 'Ranch country means good local beef.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and road-trip stops.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Central Avenue', areaLevel: 'olive', text: 'Local coffee shops downtown.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Mennonite Cooking', area: 'Heritage events', areaLevel: 'purple', text: 'Vereniki and farmer sausage at community events.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'blue', text: 'Local pubs and taprooms.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Prairie bloom', text: 'Crocuses on the hills in April; green prairie by June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Fair season', text: 'Hot, dry and sunny — Frontier Days, lake trips and long evenings.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden fields and clear, crisp days.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Chinooks', text: 'Cold and windy, though warm chinook winds sometimes bring sudden thaws.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) runs through the city; Highway 4 heads north to Lake Diefenbaker and south toward Grasslands.',
      time: '≈2 h 30 min from Regina',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Swift Current has a small municipal airport; most travellers fly into Regina (YQR).',
      time: '≈2 h 30 min from YQR',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches on the Trans-Canada stop here between Regina and Medicine Hat. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail service to Swift Current.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Trans-Canada Hotels',
      area: 'North Hill',
      text: 'Most hotels sit along the highway — convenient for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Swift%20Current%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near Central Avenue.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Swift+Current+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      title: 'Saskatchewan Landing',
      area: 'Camping',
      text: 'Provincial park campgrounds above Lake Diefenbaker.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Swift Transit',
      text: 'The city’s Red Line runs Monday to Saturday from 7 am to 7 pm (last run starts at 6 pm), with no service on statutory holidays. Access Transit offers paratransit at the same fare.',
      linkLabel: 'Swift Transit',
      linkUrl: 'https://www.swiftcurrent.ca/divisions/infrastructure-operations/transit-services',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the City of Swift Current transit page; the city notes they can change without notice.',
        fareBox: {
          label: 'Adult',
          lines: ['One way: $3.00', '10-ride punch pass: $30.00', 'Monthly: $75.00', 'Kids 6–12: $1 · under 6 free'],
        },
        linkLabel: 'Swift Transit',
        linkUrl: 'https://www.swiftcurrent.ca/divisions/infrastructure-operations/transit-services',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for parks and the sand hills.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Chinook Pathway in summer.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Road-trip tip:',
      text: 'Driving west into Alberta? Since November 2026 Alberta also stays on UTC-6 all year, so your watch no longer changes at the border.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Next door in Alberta there is no provincial sales tax — only 5% GST.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Swift Current / SK', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Event tickets: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'Chinook Pathway: free' },
      { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', label: 'Great Sand Hills: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year — and since November 2026 so does Alberta.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Strong winds are common; winter wind chill and blowing snow can close highways.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Sun & Heat', text: 'Summers are hot and dry — bring sunscreen and water for the sand hills.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Back roads to the sand hills and Grasslands are gravel with few services.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Hail and thunderstorms can build fast on hot afternoons.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'No Sunday Buses', text: 'Swift Transit runs Monday to Saturday only.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Swift Current is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Cypress Regional Hospital', '2004 Saskatchewan Dr', 'Emergency 24/7 · call 911'] },
  ],
};

export default SWIFT_CURRENT;
