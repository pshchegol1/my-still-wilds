// Yorkton — данные страницы /city/yorkton (Йорктон, САСКАЧЕВАН)
// Видео Йорктона в бесплатных банках нет; на Commons почти все фото
// города мелкие (600–1280 px).
// В шапке фото с Wikimedia Commons — здание суда Йорктона осенью, автор
// Hatsuki, сентябрь 2012, CC BY-SA 3.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года (16 280).
// Транспорт: тарифы 2026 ($5 / $90), субботы отменены в 2026, с января
// 2027 — транспорт по запросу через приложение (yorkton.ca).
// Кинофестиваль — старейший непрерывный в Северной Америке (Canadian
// Encyclopedia). Больница — SHA (270 Bradbrooke Dr).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Купол St. Mary's, духоборы, WDM, Good Spirit Lake — из общих знаний.

export const YORKTON = {
  slug: 'yorkton',
  name: 'Yorkton',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Parkland East',
  accentLevel: 'gold',
  heroIcon: '🎬',
  heroImage: '/Cities/Yorkton/hero.jpg',
  heroCredit: 'Photo: Hatsuki / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.2139, lon: -102.4628 },
  subtitle: 'Film, Faith and Farm Country',
  description:
    'The hub of east-central Saskatchewan, Yorkton grew up with the waves of Ukrainian, Doukhobor and other settlers who farmed the surrounding parkland. Today it is known for a richly painted Ukrainian church dome, a museum of prairie immigration, and a film festival that has run here every year since the mid-20th century.',

  actions: [
    { label: 'Explore Yorkton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈16.3K (2021)' },
    { label: 'Region', value: 'East-central Saskatchewan' },
    { label: 'Language', value: 'English · Ukrainian heritage' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈2 h 15 min by car' },
    { label: 'To Good Spirit Lake', value: '≈40 min by car' },
  ],

  badges: ['Film Festival', 'Ukrainian Heritage', 'Parkland Hub'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '16,280', label: 'People in the 2021 census — the regional centre of east-central Saskatchewan', level: 'blue' },
    { value: '1947', label: 'The Yorkton Film Council forms; its festival is described as North America’s longest continuous film festival', level: 'purple' },
    { value: '2027', label: 'City buses switch from fixed routes to app-booked on-demand service in January', level: 'gold' },
    { value: '$5', label: 'An adult bus trip in cash (2026); monthly pass $90', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Broadway Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Main shopping street with heritage buildings',
      details: {
        "lead": "Downtown Yorkton, with heritage buildings on Broadway Street and the Godfrey Dean Cultural Centre.",
        "see": [
          {
            "title": "Hudson’s Bay Company Store",
            "text": "At 19 Broadway Street E, a two-storey brick and terra-cotta building from 1912–13, recognised as a heritage property in 1990."
          },
          {
            "title": "Land Titles Building",
            "text": "At 49 Smith Street E, a Georgian Classical building (1907–08) forming part of the Godfrey Dean Cultural Centre; a Municipal Heritage Building since 1989."
          },
          {
            "title": "Court House",
            "text": "At 29 Darlington Street E; see the attraction below."
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
            "text": "The city publishes a heritage walking tour book."
          }
        ],
        "link": {
          "label": "City of Yorkton: walking tour book",
          "url": "https://www.yorkton.ca/media/gm4bjt5w/2021-promise-and-potential-walking-tour-book.pdf"
        },
        "checked": "November 2026"
      },
    },
    { name: 'City Centre Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Green space and plaques in the heart of town',
      details: {
        "lead": "Green space in the heart of town.",
        "see": [
          {
            "title": "Green space",
            "text": "Paths and green space; no further visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of town."
          },
          {
            "label": "Good to know",
            "text": "The city also posts heritage and history panels around town."
          }
        ],
        "link": {
          "label": "Tourism Yorkton",
          "url": "https://tourismyorkton.com/recreation"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Ravine Ecological Preserve', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'Nature', tagLevel: 'olive', meta: 'Wetland trails and prairie restoration on the city’s edge',
      details: {
        "lead": "About 20 acres of wetland trails and restored prairie at the edge of the city.",
        "see": [
          {
            "title": "Trails",
            "text": "Tourism Saskatchewan lists 2.8 km of trails with a floating boardwalk; Tourism Yorkton gives 2.5 km starting at the Gallagher Centre."
          },
          {
            "title": "Dulmage Farmstead",
            "text": "A historic farmstead is part of the site."
          },
          {
            "title": "Birds",
            "text": "Reviewers call it great for birds."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Trailhead off Sully Avenue, near Broadway Street W and Highways 52 and 10A."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "No winter information was found."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Ravine Ecological Preserve",
          "url": "https://www.tourismsaskatchewan.com/listings/1934/ravine-ecological-preserve--logan-green"
        },
        "checked": "November 2026"
      },
    },
    { name: 'St. Mary’s Area', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Ukrainian Catholic church with a famous painted dome',
      details: {
        "lead": "St. Mary’s Ukrainian Catholic Church (Our Mother of Perpetual Help), known for its painted dome.",
        "see": [
          {
            "title": "The dome",
            "text": "“The Coronation of Mary, Queen of Heaven” covers the whole dome and was painted by Stephen Meush in 1939–41."
          },
          {
            "title": "Later additions",
            "text": "Further paintings were added over the years by Theodore Baran and Fr. H. Metzger."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Yorkton."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          },
          {
            "label": "Good to know",
            "text": "Call ahead to see the interior; no hours were found."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: St. Mary’s",
          "url": "https://www.tourismsaskatchewan.com/listings/321/st-marys-ukrainian-catholic-church"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hwy 9 / 10 Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and shopping',
      details: {
        "lead": "Hotels, restaurants and shopping on the highways.",
        "see": [
          {
            "title": "Services",
            "text": "Places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the highway corridors."
          },
          {
            "label": "Good to know",
            "text": "The main sights are downtown and at the Western Development Museum."
          }
        ],
        "link": {
          "label": "Tourism Yorkton",
          "url": "https://tourismyorkton.com/recreation"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Museum District', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'History', tagLevel: 'blue', meta: 'Western Development Museum on the west side',
      details: {
        "lead": "The Western Development Museum on Highway 16A, on the west side.",
        "see": [
          {
            "title": "WDM Yorkton",
            "text": "The branch about the immigrant experience; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Highway 16A West."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Hours conflict; check wdm.ca."
          }
        ],
        "link": {
          "label": "Western Development Museum",
          "url": "https://wdm.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'St. Mary’s Ukrainian Catholic Church',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'Famous for the large painting covering the inside of its dome, painted by Stephen Meush between 1939 and 1941. Call ahead to see the interior.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Call ahead', level: 'caution' }],
      details: {
        "lead": "“The Coronation of Mary, Queen of Heaven,” painted by Stephen Meush, covers the entire dome of this Ukrainian Catholic church.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The dome",
                "text": "Meush began in September 1939 at age 36 and finished in 1941; the painting’s curvature is more than 62 feet."
              },
              {
                "title": "Additions",
                "text": "Theodore Baran and Fr. H. Metzger added further paintings over the years."
              },
              {
                "title": "Visiting",
                "text": "Tourism Saskatchewan says visitors can see the dome inside the church."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Call ahead",
                "text": "No tour schedule or hours were found."
              },
              {
                "title": "Respect",
                "text": "A working church."
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
            "text": "In Yorkton."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          }
        ],
        "link": {
          "label": "St. Mary’s: the cathedral dome",
          "url": "https://www.saintmarysyorkton.com/cathdome.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yorkton Film Festival',
      icon: '🎬', iconSrc: '/icons/attractions/ph_film-slate-thin.svg',
      text: 'Each spring the city hosts a festival of Canadian short films and documentaries, awarding the Golden Sheaf Awards. It traces its roots to 1947 and is described as the longest continuous film festival in North America.',
      tags: [{ label: 'Spring', level: 'gold' }, { label: 'Canadian film', level: 'blue' }],
      details: {
        "lead": "A festival of Canadian short films and documentaries that awards the Golden Sheaf Awards, with roots in 1947.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2027",
                "text": "May 26–30, 2027, its 80th edition."
              },
              {
                "title": "Claim",
                "text": "The festival calls itself the longest continuous film festival in North America; FilmFreeway says longest running."
              },
              {
                "title": "History",
                "text": "One source dates the first festival to 1950 and the first Golden Sheaf to 1958, so dates differ by source."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Submissions",
                "text": "Open until January 31, 2027; early bird until December 16, 2026."
              },
              {
                "title": "Tickets",
                "text": "Check yorktonfilm.com for the schedule."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets and passes; check the site."
          },
          {
            "label": "Getting there",
            "text": "In Yorkton."
          },
          {
            "label": "Best time",
            "text": "Late May."
          }
        ],
        "link": {
          "label": "Yorkton Film Festival",
          "url": "https://yorktonfilm.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Western Development Museum',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'The Yorkton branch tells the story of the many peoples who settled Saskatchewan, with recreated homes, churches and shops from immigrant communities.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "The Yorkton branch focuses on the immigrant experience of the people who settled Saskatchewan.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources conflict: Monday to Friday 9 am–5 pm with weekends from noon, or other patterns; confirm."
              },
              {
                "title": "Free day",
                "text": "BMO Day, September 26, 2026, was free at all four WDM locations."
              },
              {
                "title": "75th anniversary",
                "text": "A June 17, 2026 event had donation admission."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Price",
                "text": "No current adult price was found; some visitors feel it is high for the museum’s size."
              },
              {
                "title": "Confirm",
                "text": "Check wdm.ca."
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
            "text": "Highway 16A West."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "Western Development Museum",
          "url": "https://wdm.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yorkton Court House',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A two-storey brick and stone court house built in 1919–21 and now a Provincial Heritage Property — one of the city’s landmark buildings.',
      tags: [{ label: 'Free to view', level: 'safe' }, { label: 'Architecture', level: 'purple' }],
      details: {
        "lead": "A two-storey stone and brick court house at 29 Darlington Street E, built from 1919 to 1921 and the first court building designed by the province’s architect Maurice Sharon.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Heritage",
                "text": "A Provincial Heritage Property."
              },
              {
                "title": "Design",
                "text": "A symmetrical stone and brick building."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Exterior",
                "text": "Best seen from the outside; it is a working court building."
              },
              {
                "title": "Walking tour",
                "text": "The city’s heritage walking tour book lists nearby buildings."
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
            "text": "29 Darlington Street E."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Historic Places: Yorkton Court House",
          "url": "https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=2872"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Ravine Ecological Preserve',
      icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg',
      text: 'Walking trails through wetlands and restored prairie at the edge of the city — good for birds and quiet evenings.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
      details: {
        "lead": "Walking trails through wetlands and restored prairie at the edge of the city.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "2.5 to 2.8 km of trail, depending on the source, with a floating boardwalk."
              },
              {
                "title": "Farmstead",
                "text": "The Dulmage Farmstead is on site."
              },
              {
                "title": "Birds",
                "text": "Reviewers say it is great for birds."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Trailhead",
                "text": "Off Sully Avenue, or at the Gallagher Centre."
              },
              {
                "title": "Winter",
                "text": "No winter information was found."
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
            "text": "Sully Avenue, near Broadway Street W."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Ravine Ecological Preserve",
          "url": "https://www.tourismsaskatchewan.com/listings/1934/ravine-ecological-preserve--logan-green"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Good Spirit Lake Provincial Park',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A shallow lake with wide sandy beaches and dunes northwest of the city — a summer favourite.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "A shallow lake with sandy beaches and dunes northwest of Yorkton, with a campground of about 293 sites.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dunes trail",
                "text": "The Good Spirit Dunes Discovery Trail, about 3.4 to 4.3 km, begins near the beach."
              },
              {
                "title": "Winter",
                "text": "About 18 km of cross-country ski trails are maintained; snowmobile trails and ice fishing are also listed."
              },
              {
                "title": "Camping",
                "text": "Reduced services from October 1, 2026 (no water or showers); rates from October 29, 2026 are $16 non-electric and $31 electric."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fees",
                "text": "No day-use fee was found; phone 306-792-4750."
              },
              {
                "title": "Season",
                "text": "Summer is the main season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park entry permit; confirm."
          },
          {
            "label": "Getting there",
            "text": "Northwest of Yorkton; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Tourism Yorkton: recreation",
          "url": "https://tourismyorkton.com/recreation"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Parkland, Lakes and Dunes',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Good Spirit Lake', dist: '≈40 min northwest', text: 'Sandy beaches, dunes and warm, shallow water.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Ravine Preserve Trails', dist: 'In the city', text: 'Easy loops through wetland and grassland.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Sloughs & lakes', text: 'Waterfowl and songbirds in the parkland in spring and fall.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'City paths', text: 'Flat roads and park paths.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Sports', dist: 'Rinks & trails', text: 'Outdoor rinks and cross-country trails.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets over aspen bluffs and farmland.' },
  ],

  food: [
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies & Cabbage Rolls', area: 'Local cafés', areaLevel: 'gold', text: 'Ukrainian heritage cooking is part of daily life here.' },
    { icon: '🍞', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Doukhobor Borscht & Bread', area: 'Community events', areaLevel: 'danger', text: 'Look for traditional dishes at local events.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Broadway Street', areaLevel: 'olive', text: 'Family restaurants and diners.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Restaurants', areaLevel: 'blue', text: 'Local beef on many menus.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams from wild berries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Film festival', text: 'The film festival brings filmmakers to town; sloughs fill with migrating birds.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days for Good Spirit Lake and summer fairs.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden aspen and busy harvest fields.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold prairie winters with snow and wind.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 10 links Yorkton with Regina to the southwest; Highways 9, 10 and 16 connect toward Manitoba.',
      time: '≈2 h 15 min from Regina',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Yorkton has a municipal airport with little scheduled service; most travellers fly into Regina (YQR).',
      time: '≈2 h 15 min from YQR',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail to Yorkton.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway Hotels',
      area: 'Hwy 9 / 10',
      text: 'Most hotels are along the main highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkton', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yorkton%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near Broadway Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkton+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Good Spirit Lake',
      area: 'Camping',
      text: 'Provincial park campgrounds and cabins.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Yorkton Transit',
      text: 'Yorkton Transit is operated with SaskAbilities. In 2026 Saturday service was cut and weekday hours shortened; from January 2027 fixed routes are replaced by on-demand rides booked in the Blaise app, by phone or online.',
      linkLabel: 'City Transit Services',
      linkUrl: 'https://www.yorkton.ca/living-in-yorkton/transit/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are the city’s 2026 adult fares. Students pay $4 a trip or $50 a month; seniors 60+ can buy a $75 monthly pass.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $5.00', 'Monthly pass: $90.00', 'No Saturday service', 'On-demand from Jan 2027'],
        },
        linkLabel: 'Yorkton Transit',
        linkUrl: 'https://www.yorkton.ca/living-in-yorkton/transit/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way around town and to the lake.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat streets in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Weekend tip:',
      text: 'There are no city buses on Saturdays in 2026 — plan a taxi or rental car for weekend trips.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any local fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Yorkton / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival passes: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', label: 'Ravine Preserve trails: free' },
      { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', label: 'Court house & downtown walks: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year; nearby Manitoba switches in summer — mind the hour if you cross the border.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Transit Changes', text: 'No city buses on Saturdays in 2026, and a switch to on-demand service in January 2027.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Cold Winters', text: 'Temperatures often fall below −25 °C; plug in your car overnight.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Bring repellent for summer evenings near sloughs and lakes.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Prairie thunderstorms can bring hail — watch forecasts.' },
    { icon: '🎬', iconSrc: '/icons/attractions/ph_film-slate-thin.svg', title: 'Festival Week', text: 'Hotels fill during the spring film festival — book early.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Yorkton is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Yorkton Regional Health Centre', '270 Bradbrooke Dr', 'Emergency 24/7 · call 911'] },
  ],
};

export default YORKTON;
