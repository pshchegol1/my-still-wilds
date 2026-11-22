// Yarmouth — данные страницы /city/yarmouth (Ярмут, НОВАЯ ШОТЛАНДИЯ)
// Видео Ярмута в бесплатных банках нет (осторожно: Great Yarmouth в Англии
// и Ярмуты в Мэне/Массачусетсе).
// В шапке фото с Wikimedia Commons — маяк Cape Forchu (свет для гавани
// Ярмута), автор Dennis G. Jarvis, 31 июля 2011, CC BY-SA 2.0 — лицензия
// требует автора, отсюда heroCredit.
// Население — перепись 2021 года (6 829, город; округ — 24 947).
// Паром CAT Yarmouth–Bar Harbor: сезон 2026 — 14 мая–14 октября (уже
// закончился); возвращается в 2027, май–октябрь (Bay Ferries, CTV).
// Городской автобус — кольцевой маршрут, $2 (CBC), расписание ред. 12.2024
// («уточняйте»). Больница — Yarmouth Regional, 60 Vancouver St.
// HST 14%. Музеи, Acadian Shore, Mavillette — из общих знаний.

export const YARMOUTH = {
  slug: 'yarmouth',
  name: 'Yarmouth',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Gateway to the South Shore',
  accentLevel: 'safe',
  heroIcon: '🗼',
  heroImage: '/Cities/Yarmouth/hero.jpg',
  heroCredit: 'Photo: Dennis G. Jarvis / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.8374, lon: -66.1174 },
  subtitle: 'Seaport at the Tip of Nova Scotia',
  description:
    'At the southwestern tip of Nova Scotia, Yarmouth is an old shipbuilding port where Victorian sea captains’ houses line the streets and a red-and-white lighthouse guards the harbour. In summer the CAT ferry links it with Maine, and Acadian villages and long sandy beaches stretch along the coast in both directions.',

  actions: [
    { label: 'Explore Yarmouth', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈6.8K (2021)' },
    { label: 'County', value: '≈25K' },
    { label: 'Language', value: 'English · French (Acadian)' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈3 h 30 min by car' },
    { label: 'Ferry to Maine', value: 'CAT · May–Oct' },
  ],

  badges: ['Seaport', 'Lighthouses', 'Acadian Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '6,829', label: 'People in the town in the 2021 census — about 25,000 in Yarmouth County', level: 'blue' },
    { value: 'May–Oct', label: 'The CAT ferry to Bar Harbor, Maine ran May 14 – Oct 14 in 2026 and returns for 2027', level: 'gold' },
    { value: '1839', label: 'Cape Forchu light station is established to guide ships into Yarmouth harbour', level: 'purple' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Shops, cafés and the harbourfront boardwalk',
      details: {
        "lead": "The town centre, near the harbourfront.",
        "see": [
          {
            "title": "Yarmouth County Museum",
            "text": "At 22 Collins Street; see the attraction below."
          },
          {
            "title": "Harbourfront",
            "text": "A waterfront walk by the harbour."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Yarmouth."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Shops keep their own hours."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Collins Street Heritage District', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Victorian sea captains’ houses and gardens',
      details: {
        "lead": "Victorian homes built by captains and merchants when Yarmouth was a major shipping port.",
        "see": [
          {
            "title": "Yarmouth County Museum",
            "text": "At 22 Collins Street, in the district."
          },
          {
            "title": "Victorian houses",
            "text": "Grand homes to see from the street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Collins Street, in Yarmouth."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Private homes; look from the street."
          }
        ],
        "link": {
          "label": "Yarmouth County Museum",
          "url": "https://www.yarmouthcountymuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waterfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'blue', meta: 'Fishing boats, the ferry terminal and harbour walks',
      details: {
        "lead": "Fishing boats, the ferry terminal and harbour walks.",
        "see": [
          {
            "title": "The CAT ferry",
            "text": "The 2026 season ran May 14 to October 14 (120 of 132 planned round trips sailed; 3.5-hour crossing)."
          },
          {
            "title": "2027",
            "text": "The 2027 schedule is to be published at ferries.ca; Bar Harbor approved a lease running to October 31, 2027, but no end date had been announced."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the harbour in Yarmouth."
          },
          {
            "label": "Time to allow",
            "text": "One hour."
          },
          {
            "label": "Good to know",
            "text": "The ferry is not running now."
          }
        ],
        "link": {
          "label": "Bay Ferries",
          "url": "https://www.ferries.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Cape Forchu', icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', tag: 'Lighthouse', tagLevel: 'safe', meta: 'Headland lighthouse and coastal trail about 15 minutes away',
      details: {
        "lead": "The headland lighthouse about 11 km from Yarmouth.",
        "see": [
          {
            "title": "Lightstation",
            "text": "The grounds and the Leif Erikson Trail are open year-round, 24/7. The 2026 tour season ran May 16 to September 27."
          },
          {
            "title": "The light",
            "text": "The tallest climbable lighthouse in Nova Scotia, 77 steps to the lantern room."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 15 minutes from Yarmouth by car."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The tower is closed in winter; the grounds stay open."
          }
        ],
        "link": {
          "label": "Cape Forchu",
          "url": "https://capeforchu.com/contact/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Frost Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'olive', meta: 'Green space in the centre of town',
      details: {
        "lead": "Green space in the centre of town.",
        "see": [
          {
            "title": "Park",
            "text": "No visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of Yarmouth."
          },
          {
            "label": "Good to know",
            "text": "A place to stop between museums."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Acadian Shore', icon: '⚜️', iconSrc: '/icons/attractions/ph_crown-thin.svg', tag: 'French', tagLevel: 'danger', meta: 'French-speaking villages along the coast north and east',
      details: {
        "lead": "French-speaking villages along the coast north and east.",
        "see": [
          {
            "title": "Mavillette Beach",
            "text": "A long sandy beach with dunes on St. Marys Bay; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of town by car."
          },
          {
            "label": "Good to know",
            "text": "The French Shore is French-speaking."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: CAT ferry and Acadian shore",
          "url": "https://novascotiavacation.ca/guides/cat-ferry-yarmouth/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Cape Forchu Lightstation',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'The red-and-white light that guards Yarmouth harbour, on a rocky headland with walking trails, picnic areas and wide ocean views. The “apple core” lighthouse can be climbed in season (77 steps).',
      tags: [{ label: 'Free grounds', level: 'safe' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "The “apple core” lighthouse on a rocky headland 11 km from Yarmouth, the tallest climbable lighthouse in Nova Scotia.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Grounds",
                "text": "The Leif Erikson Trail and the grounds are open to visitors year-round, 24/7."
              },
              {
                "title": "2026 season",
                "text": "May 16 to September 27; Wednesday to Sunday in May, June and September, daily in summer."
              },
              {
                "title": "Climb",
                "text": "77 steps to the lantern room, seasonal and weather-dependent; the full tour was listed at $25 ($12 for children), the Quick Climb at $15."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Now",
                "text": "The tower and tours are closed for the season."
              },
              {
                "title": "Confirm",
                "text": "Check capeforchu.com for 2027 hours and prices."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Grounds free; climbs paid in season."
          },
          {
            "label": "Getting there",
            "text": "About 15 minutes from Yarmouth."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Cape Forchu",
          "url": "https://capeforchu.com/contact/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'CAT Ferry to Maine',
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'A high-speed ferry crosses the Gulf of Maine to Bar Harbor in summer — a scenic shortcut to New England. Seasonal; bring a passport.',
      tags: [{ label: 'May–Oct', level: 'caution' }, { label: 'Passport', level: 'danger' }],
      details: {
        "lead": "A high-speed ferry across the Gulf of Maine between Yarmouth and Bar Harbor, in a spring-to-autumn season.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "Ran May 14 to October 14; 44,032 passengers and 18,124 vehicles; 3.5-hour crossing."
              },
              {
                "title": "2027",
                "text": "Bay Ferries expected to publish the schedule around early November at ferries.ca; no fares had appeared."
              },
              {
                "title": "Bar Harbor",
                "text": "A lease covering November 1, 2026 to October 31, 2027 was approved, which points to continued service."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Not running",
                "text": "There is no sailing now."
              },
              {
                "title": "Documents",
                "text": "Check U.S. and Canadian government rules; carry a passport."
              },
              {
                "title": "Fares",
                "text": "Vary by season, with a port/security fee and extra for vehicles."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; check ferries.ca."
          },
          {
            "label": "Getting there",
            "text": "From the Yarmouth terminal."
          },
          {
            "label": "Best time",
            "text": "Mid-May to mid-October."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: CAT ferry",
          "url": "https://novascotiavacation.ca/guides/cat-ferry-yarmouth/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yarmouth County Museum',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'A museum and archives on Yarmouth’s seafaring past, including ship portraits from its golden age of sail.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "A museum and archives at 22 Collins Street on Yarmouth’s seafaring past.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "One listing: October 1 to May 31, Tuesday to Saturday 2–5 pm; June to September, Monday to Saturday 9 am–5 pm."
              },
              {
                "title": "Admission",
                "text": "About $7 for adults, $5 for ages 13–17 and 65+, $12 family, free under 13 (one listing)."
              },
              {
                "title": "Free days",
                "text": "The museum advertised free admission on certain days in 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Listings conflict; phone 902-742-5539."
              },
              {
                "title": "Archives",
                "text": "The museum also holds local archives."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $7."
          },
          {
            "label": "Getting there",
            "text": "22 Collins Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Yarmouth County Museum",
          "url": "https://www.yarmouthcountymuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Firefighters’ Museum of Nova Scotia',
      icon: '🚒', iconSrc: '/icons/attractions/ph_fire-truck-thin.svg',
      text: 'Vintage fire engines and equipment in a downtown museum — popular with kids.',
      tags: [{ label: 'Family', level: 'olive' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "Vintage fire engines and equipment in a downtown museum.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Collection",
                "text": "Vintage fire engines and equipment."
              },
              {
                "title": "Status",
                "text": "No 2026 hours or prices were found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check with Yarmouth tourism before going."
              },
              {
                "title": "Kids",
                "text": "Popular with children."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check before going."
          },
          {
            "label": "Getting there",
            "text": "Downtown Yarmouth."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Collins Street Heritage District',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'Stroll past grand Victorian homes built by captains and merchants when Yarmouth was a major shipping port.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'purple' }],
      details: {
        "lead": "Grand Victorian homes built by captains and merchants when Yarmouth was a major shipping port.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Houses",
                "text": "Victorian homes along Collins Street."
              },
              {
                "title": "Museum",
                "text": "The Yarmouth County Museum is at 22 Collins Street."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walk",
                "text": "Easy to see on foot."
              },
              {
                "title": "Respect",
                "text": "Private homes; look from the street."
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
            "text": "Collins Street."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Yarmouth County Museum",
          "url": "https://www.yarmouthcountymuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Mavillette Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A long sandy beach with dunes on St. Marys Bay, north of town on the Acadian French Shore.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
      details: {
        "lead": "A long sandy beach with dunes on St. Marys Bay, on the Acadian French Shore north of town.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "Dunes and a long sandy beach on St. Marys Bay."
              },
              {
                "title": "Season",
                "text": "A summer beach."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No 2026 lifeguard or facility details were found."
              },
              {
                "title": "Cold water",
                "text": "Water is cold outside summer."
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
            "text": "North of Yarmouth by car."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: CAT ferry and Acadian shore",
          "url": "https://novascotiavacation.ca/guides/cat-ferry-yarmouth/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lighthouses, Beaches and Acadian Coast',
  outdoor: [
    { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', name: 'Lighthouse Route', dist: 'Along the coast', text: 'Cape Forchu and many more lights along the South Shore.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Beaches', dist: '≈30–45 min', text: 'Mavillette and other sandy beaches on St. Marys Bay.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Whale Watching', dist: 'Bay of Fundy coast', text: 'Tours from Brier Island and Digby Neck to the north.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Rail Trail', dist: 'Yarmouth County', text: 'A converted railway line for walking and cycling.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Lakes & coves', text: 'Quiet lakes inland and sheltered coves.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Coast', text: 'Migrating songbirds and seabirds pass this southwestern tip.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Southwest Nova', areaLevel: 'danger', text: 'This region lands some of Canada’s biggest lobster catches — fresh lobster is everywhere in season.' },
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Rappie Pie', area: 'Acadian Shore', areaLevel: 'gold', text: 'Traditional Acadian grated-potato pie with chicken or clams.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Scallops & Clams', area: 'Waterfront', areaLevel: 'blue', text: 'Fresh shellfish from local boats.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Brews', area: 'Downtown', areaLevel: 'purple', text: 'Craft beer and cideries in the region.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Foggy', text: 'Cool, foggy spring by the ocean; the ferry starts in mid-May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Ferry season', text: 'Mild, breezy summers rarely get hot — perfect for beaches and lighthouses.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Calm & colour', text: 'Mild days and fewer crowds; the ferry ends mid-October.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Mild but stormy', text: 'One of Canada’s milder winters, but wet and windy.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 101 runs up the Bay of Fundy side to Halifax; Highway 103 follows the South Shore.',
      time: '≈3 h 30 min from Halifax',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Bay Ferries’ CAT links Yarmouth with Bar Harbor, Maine, seasonally (May–October).',
      time: 'Seasonal',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Yarmouth has a small regional airport with limited service; Halifax (YHZ) is the main gateway.',
      time: '≈3 h from YHZ',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Shuttle',
      text: 'Private shuttles connect Yarmouth with Halifax — book ahead.',
      time: '≈3 h 30 min',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Inns and hotels near the waterfront and ferry terminal.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yarmouth+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yarmouth%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Heritage B&Bs',
      area: 'Collins Street area',
      text: 'Stay in a restored Victorian captain’s house.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yarmouth+Bed+and+Breakfast', level: 'blue' },
      ],
    },
    {
      icon: '⚜️', iconSrc: '/icons/attractions/ph_crown-thin.svg',
      title: 'Acadian Shore',
      area: 'Coastal villages',
      text: 'Cottages and inns near the beaches of St. Marys Bay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Clare+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Yarmouth Town Bus',
      text: 'The town runs a small loop bus around Yarmouth, including stops at the hospital and shopping areas. Service has been interrupted at times — check with the town before relying on it.',
      linkLabel: 'Town of Yarmouth',
      linkUrl: 'https://www.townofyarmouth.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'A single ride has been reported at $2 (CBC); the route was revised in December 2024. Confirm the current fare and schedule with the town.',
        fareBox: {
          label: 'Getting around',
          lines: ['Town loop bus: ≈$2', 'Schedule: check town site', 'Taxis: local', 'Car: for lighthouses & beaches'],
        },
        linkLabel: 'Town of Yarmouth',
        linkUrl: 'https://www.townofyarmouth.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are compact.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Cape Forchu and the beaches.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat coastal roads and the rail trail.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in town.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Arriving on the CAT from Maine? Allow time for Canadian customs at the terminal, and book a room ahead in peak summer.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Check your hotel bill for any local marketing levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Yarmouth / NS', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Ferry fares: check booking terms' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', label: 'Cape Forchu grounds: free' },
      { icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', label: 'Heritage district walk: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg', title: 'Border Crossing', text: 'The CAT ferry crosses an international border — carry a valid passport and check entry rules for Canada and the US.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Ferry Season', text: 'The CAT runs only from mid-May to mid-October; outside those months, drive via New Brunswick.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fog', text: 'Thick sea fog is common, especially in early summer — drive carefully on coastal roads.' },
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not That Yarmouth', text: 'Add “Nova Scotia” when booking — Great Yarmouth (England) and Yarmouth (Maine) often show up first.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Maine.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster Season', text: 'The local lobster season traditionally opens in late November — fresh catches peak in winter and spring.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Yarmouth is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Yarmouth Regional Hospital', '60 Vancouver St', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default YARMOUTH;
