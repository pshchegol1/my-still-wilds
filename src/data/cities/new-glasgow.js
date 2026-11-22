// New Glasgow — данные страницы /city/new-glasgow (НОВАЯ ШОТЛАНДИЯ)
// Видео Нью-Глазго в бесплатных банках нет (осторожно: "Glasgow" в стоках —
// Шотландия).
// В шапке фото с Wikimedia Commons — берег East River осенью, автор
// Brendan Riley, октябрь 2015, CC BY-SA 3.0 — лицензия требует автора,
// отсюда heroCredit.
// Население — перепись 2021 года: 9 471 (город), 34 397 (агломерация).
// Pictou County Transit — pctransit.ca: $3 / $7.50 / $70 (без даты —
// «уточняйте»). Больница — Aberdeen Hospital, 835 East River Rd (24/7).
// HST 14% (с 1.04.2025).
// Museum of Industry, Hector в Пикту, Melmerby Beach, паром на PEI —
// из общих знаний.

export const NEW_GLASGOW = {
  slug: 'new-glasgow',
  name: 'New Glasgow',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Pictou County',
  accentLevel: 'danger',
  heroIcon: '🏴',
  heroImage: '/Cities/NewGlasgow/hero.jpg',
  heroCredit: 'Photo: Brendan Riley / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5926, lon: -62.6455 },
  subtitle: 'Scottish Roots on the East River',
  description:
    'Settled by Scottish Highlanders and built on coal, steel and shipbuilding, New Glasgow is the hub of Pictou County. Its riverside downtown sits a short drive from the warm-water beaches of the Northumberland Strait, the Hector heritage ship in Pictou, and the ferry to Prince Edward Island.',

  actions: [
    { label: 'Explore New Glasgow', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.5K (2021)' },
    { label: 'Urban area', value: '≈34K (Pictou County)' },
    { label: 'Language', value: 'English · Gaelic heritage' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Halifax', value: '≈1 h 45 min by car' },
    { label: 'To PEI ferry', value: '≈30 min by car' },
  ],

  badges: ['Scottish Heritage', 'East River', 'Northumberland Shore'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '9,471', label: 'People in the town in the 2021 census — about 34,000 across the Pictou County urban area', level: 'blue' },
    { value: '1773', label: 'The ship Hector lands Scottish Highlanders at nearby Pictou, beginning large-scale Scottish settlement', level: 'purple' },
    { value: '$3', label: 'A Pictou County Transit bus ride; day pass $7.50', level: 'safe' },
    { value: '14%', label: 'Nova Scotia HST since April 2025', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Provost Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Stone and brick heritage buildings, murals and cafés',
      details: {
        "lead": "The town centre, with heritage buildings, murals and the Roseland Theatre.",
        "see": [
          {
            "title": "Heritage buildings",
            "text": "Stone and brick buildings along the main streets."
          },
          {
            "title": "Murals and Roseland Theatre",
            "text": "Murals decorate downtown walls and the restored Roseland hosts films and events; no 2026 programme was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check the Town of New Glasgow’s calendar for events."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'East River', tagLevel: 'blue', meta: 'Waterfront trail and green space along the river',
      details: {
        "lead": "A waterfront trail and green space along the East River.",
        "see": [
          {
            "title": "Riverfront Trail",
            "text": "An easy walk through downtown; prettiest in autumn colour."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Through downtown New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "No trail length was found."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Glasgow Square', icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg', tag: 'Events', tagLevel: 'purple', meta: 'Outdoor amphitheatre for summer concerts',
      details: {
        "lead": "An outdoor amphitheatre for summer concerts.",
        "see": [
          {
            "title": "Concerts",
            "text": "A summer events venue; no 2026 schedule was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "Depends on the event."
          },
          {
            "label": "Good to know",
            "text": "Mainly a summer venue."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Stellarton', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Next door', tagLevel: 'danger', meta: 'Neighbouring town and home of the Museum of Industry',
      details: {
        "lead": "The neighbouring town, home of the Nova Scotia Museum of Industry.",
        "see": [
          {
            "title": "Museum of Industry",
            "text": "Listed open daily 9:30 am–4:30 pm, year-round; one listing says closed Mondays. Prices of $8.80 for adults, $3.85 for ages 5–17, $5.30 for seniors and $18.25 for a family come from an undated post."
          },
          {
            "title": "Closures",
            "text": "A 2026 provincial decision closed a large share of Nova Scotia Museum sites; Stellarton still shows open, but call to confirm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Next door to New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Call ahead to confirm opening days."
          }
        ],
        "link": {
          "label": "Museum of Industry",
          "url": "https://novascotia.ca/museum/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Trenton & Westville', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Pictou County', tagLevel: 'olive', meta: 'Sister towns with parks and trails',
      details: {
        "lead": "Sister towns with parks and trails in Pictou County.",
        "see": [
          {
            "title": "Parks and trails",
            "text": "No visitor details were found for these towns."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Close to New Glasgow."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Highway 104 Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'safe', meta: 'Hotels, shopping and services',
      details: {
        "lead": "Hotels, shopping and services.",
        "see": [
          {
            "title": "Services",
            "text": "Places to stay and eat; no sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along Highway 104."
          },
          {
            "label": "Good to know",
            "text": "A base for Pictou County day trips."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism",
          "url": "https://novascotia.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Nova Scotia Museum of Industry',
      icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg',
      text: 'In neighbouring Stellarton, a large museum of the province’s mining, manufacturing and railway history.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "In Stellarton, a large museum of the province’s mining, manufacturing and railway history.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listed daily 9:30 am–4:30 pm and open year-round; one listing says closed Mondays."
              },
              {
                "title": "Prices",
                "text": "An undated post gives adults $8.80, ages 5–17 $3.85, seniors $5.30, family $18.25."
              },
              {
                "title": "Closures",
                "text": "A 2026 provincial decision closed many Nova Scotia Museum sites; this one still shows open."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "No winter-specific schedule was found; call or check the museum’s site."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $8.80 for adults."
          },
          {
            "label": "Getting there",
            "text": "In Stellarton, next to New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Nova Scotia Museum",
          "url": "https://novascotia.ca/museum/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hector Heritage Quay',
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'In the town of Pictou, about 15 minutes away, a full-size replica of the Hector, the ship that brought Highland settlers in 1773. Seasonal.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
      details: {
        "lead": "In Pictou, a full-size replica of the Hector, the first ship to bring emigrants directly from Scotland to Nova Scotia in 1773.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listings say daily 10 am–4 pm; another gave 9:30 am–4:30 pm until September 20 and then closed Sunday and Monday."
              },
              {
                "title": "Admission",
                "text": "About $8 for adults, $6 for seniors and $20 for a family on one page; confirm."
              },
              {
                "title": "Aboard",
                "text": "Visitors can step aboard and learn the settlers’ voyage."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Seasonal",
                "text": "Likely closed in late November; phone 902-485-4371."
              },
              {
                "title": "Confirm",
                "text": "No official 2026 schedule was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; about $8 for adults."
          },
          {
            "label": "Getting there",
            "text": "About 15 minutes from New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "Coastal Nova Scotia: Hector Heritage Quay",
          "url": "https://coastalnovascotia.ca/attractions/ship-hector-hector-heritage-quay/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Riverfront Trail',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'An easy walk along the East River through downtown, prettiest in autumn colour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'blue' }],
      details: {
        "lead": "An easy walk along the East River through downtown, prettiest in autumn colour.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "Along the East River through downtown."
              },
              {
                "title": "Autumn",
                "text": "Best in fall colour."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No trail length or winter conditions were found."
              },
              {
                "title": "Free",
                "text": "Free to use."
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
            "text": "Downtown New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Carmichael-Stewart House Museum',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'A heritage house museum in New Glasgow. No 2026 hours were found, so check before going.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "A heritage house museum in New Glasgow.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Status",
                "text": "No 2026 hours or admission were found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check with the Town of New Glasgow or Pictou County tourism before going."
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
            "text": "In New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Melmerby Beach',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A long sandy beach on the Northumberland Strait, about 10 km northeast of New Glasgow, with lifeguards from July 1 to August 30, 2026. Reviewers say the water can be warm in summer, but it is a windy beach.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
      details: {
        "lead": "A long sandy beach on the Northumberland Strait, about 10 km northeast of New Glasgow.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lifeguards",
                "text": "Supervised July 1 to August 30, 2026; not on duty all year."
              },
              {
                "title": "Water",
                "text": "One visitor found it warm enough for hours; another found it too cold."
              },
              {
                "title": "Amenities",
                "text": "Change rooms, toilets, a wash station and free parking."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Wind",
                "text": "Reviews describe it as windy on a good day."
              },
              {
                "title": "Storms",
                "text": "The beach was closed for 45 minutes once after lightning."
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
            "text": "About 10 km northeast of New Glasgow."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Nova Scotia Parks: supervised swimming",
          "url": "https://parks.novascotia.ca/supervised-swimming"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Downtown Murals & Roseland Theatre',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Colourful murals decorate downtown walls, and the restored Roseland Theatre hosts films and events.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Culture', level: 'danger' }],
      details: {
        "lead": "Murals decorate downtown walls, and the restored Roseland Theatre hosts films and events.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Murals",
                "text": "A walk through downtown shows the murals."
              },
              {
                "title": "Roseland",
                "text": "The restored theatre hosts films and events."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Programme",
                "text": "No 2026 programme was found; check the theatre’s listings."
              },
              {
                "title": "Free",
                "text": "The murals are free to see."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Murals free; theatre tickets vary."
          },
          {
            "label": "Getting there",
            "text": "Downtown New Glasgow."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Town of New Glasgow",
          "url": "https://www.newglasgow.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Warm Water and Rolling Hills',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Northumberland Beaches', dist: '≈20–30 min', text: 'Melmerby and other warm, shallow beaches on the strait.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'PEI Day Trip', dist: 'Caribou ferry', text: 'Northumberland Ferries cross from Caribou to Wood Islands, PEI, in season.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Trails', dist: 'Pictou County', text: 'Rail trails and riverside paths between the towns.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'East River & harbour', text: 'Calm water for kayaks and canoes in summer.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Coast', text: 'Bald eagles, ospreys and shorebirds along the coast.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Sports', dist: 'Nearby hills', text: 'Cross-country skiing and snowshoeing.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Northumberland Shore', areaLevel: 'danger', text: 'Lobster suppers and rolls in season.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Oatcakes & Meat Pies', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish-style baking with deep local roots.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'purple', text: 'Local brewpubs.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Provost Street', areaLevel: 'blue', text: 'Independent coffee shops.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool', text: 'Cool spring; the river valley greens up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Beach season', text: 'Warm strait beaches, festivals and the PEI ferry.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright foliage along the river and in the hills.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Snow and coastal storms; many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 104 (the Trans-Canada) passes the town between Truro and Antigonish.',
      time: '≈1 h 45 min from Halifax',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is the nearest major airport.',
      time: '≈1 h 30 min by car',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'From PEI, Northumberland Ferries sail from Wood Islands to Caribou, near Pictou, in season.',
      time: '≈30 min from Caribou',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches on the Halifax–Sydney route may stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'New Glasgow',
      area: 'Town & highway',
      text: 'Hotels near the Highway 104 exits and downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=New+Glasgow+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=New%20Glasgow%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      title: 'Pictou',
      area: 'Waterfront town',
      text: 'Inns on the harbour near the Hector.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pictou+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Northumberland Shore',
      area: 'Cottages',
      text: 'Beach cottages along the strait.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Northumberland+Shore+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Pictou County Transit',
      text: 'Pictou County Transit links New Glasgow with Stellarton, Trenton, Westville and Pictou Landing First Nation. It became permanent in 2023 and was redesigned in 2025–2026.',
      linkLabel: 'Pictou County Transit',
      linkUrl: 'https://pctransit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from pctransit.ca (undated — confirm before you ride). Children under 5 ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Single: $3.00', 'Day pass: $7.50', 'Monthly: $70.00', 'Under 5: free'],
        },
        linkLabel: 'Pictou County Transit',
        linkUrl: 'https://pctransit.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for beaches and the PEI ferry.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Connects the Pictou County towns.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
        ],
      },
    ],
    proTip: {
      label: 'Island tip:',
      text: 'Make a loop: drive the Confederation Bridge to PEI one way and take the Wood Islands–Caribou ferry back (check seasonal schedules).',
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
      { label: 'New Glasgow / NS', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Riverfront trail: free' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Melmerby Beach: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏴', iconSrc: '/icons/attractions/ph_flag-thin.svg', title: 'Not Scotland', text: 'Searching online? Add “Nova Scotia” — results for Glasgow, Scotland, dominate.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Seasonal Ferry', text: 'The PEI ferry runs seasonally — book ahead in summer.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storms', text: 'Post-tropical storms in late summer and fall can bring heavy rain and wind.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife', text: 'Watch for deer on rural roads at dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus Coverage', text: 'Transit links the county towns, but beaches and the ferry need a car.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'New Glasgow is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq; Pictou Landing First Nation is nearby.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Aberdeen Hospital', '835 East River Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default NEW_GLASGOW;
