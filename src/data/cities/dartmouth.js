// Dartmouth — данные страницы /city/dartmouth (Дартмут, НОВАЯ ШОТЛАНДИЯ)
// Видео Дартмута в бесплатных банках нет: на Pexels по "dartmouth nova
// scotia" — Галифакс (набережная с южным терминалом) и деревня у озера
// (похоже на Шелберн) — проверено по кадрам.
// В шапке фото с Wikimedia Commons — Salt Marsh Trail (Cole Harbour, сразу
// к востоку от Дартмута, в том же муниципалитете HRM), автор Larry,
// август 2018, CC BY 2.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года: 72 139 (Дартмут, застроенная часть);
// с Cole Harbour — 96 165.
// Налоги и транзит — как в Галифаксе (HST 14%, Marketing Levy 3%, $3).
// Больница — Dartmouth General, 325 Pleasant St (Nova Scotia Health).
// Salt Marsh Trail ≈6.5 км, Shubie Park — novascotia.com/CTV.
// Озёра, канал Шубенакади, Alderney Landing, Lawrencetown — из общих знаний.

export const DARTMOUTH = {
  slug: 'dartmouth',
  name: 'Dartmouth',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · City of Lakes',
  accentLevel: 'safe',
  heroIcon: '🛶',
  heroImage: '/Cities/Dartmouth/hero.jpg',
  heroCredit: 'Photo: Larry / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.6713, lon: -63.5772 },
  subtitle: 'The City of Lakes Across the Harbour',
  description:
    'A short ferry ride from downtown Halifax, Dartmouth is the harbour city’s laid-back twin: a revived waterfront of cafés and breweries, a necklace of freshwater lakes for paddling and swimming, and a historic canal route inland. Just east, salt marshes and surf beaches begin — wild Atlantic coast only minutes from the ferry.',

  actions: [
    { label: 'Explore Dartmouth', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈72K (2021)' },
    { label: 'Part of', value: 'Halifax Regional Municipality' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Ferry to Halifax', value: '≈12 min' },
    { label: 'To Lawrencetown Beach', value: '≈25 min by car' },
  ],

  badges: ['City of Lakes', 'Harbour Ferry', 'Coastal Trails'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '72,139', label: 'People in Dartmouth in the 2021 census — about 96,000 including Cole Harbour', level: 'blue' },
    { value: '6.5 km', label: 'The Salt Marsh Trail, crossing tidal marsh on an old rail bed east of the city', level: 'safe' },
    { value: '$3', label: 'A ferry ride to downtown Halifax — the same fare as the bus', level: 'gold' },
    { value: '1996', label: 'Dartmouth merged with Halifax and other communities into Halifax Regional Municipality', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown Dartmouth', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Waterfront', tagLevel: 'gold', meta: 'Portland Street and the waterfront by the ferry terminal',
      details: {
        "lead": "Dartmouth’s compact downtown, on Portland Street by the harbour and the ferry terminal.",
        "see": [
          {
            "title": "Waterfront",
            "text": "A harbourfront trail with views back to the Halifax skyline."
          },
          {
            "title": "Ferry",
            "text": "The Alderney ferry runs often from the terminal; fare $3 for adults."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By ferry from Halifax, or by road across the harbour bridges."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Shops and cafés keep their own hours."
          }
        ],
        "link": {
          "label": "Discover Halifax: ferry ride",
          "url": "https://discoverhalifaxns.com/itineraries/ferry-ride-across-the-harbour-to-dartmouth/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Alderney Landing', icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Ferry', tagLevel: 'blue', meta: 'Ferry terminal, farmers’ market and arts venue on the harbour',
      details: {
        "lead": "The ferry terminal, farmers’ market and arts venue on the Dartmouth waterfront, at 2 Ochterloney Street.",
        "see": [
          {
            "title": "Farmers’ Market",
            "text": "Saturdays 8 am–1 pm. The June to November 2026 season also listed a Sunday artisan market (11 am–3 pm) and a Wednesday market (noon–6 pm)."
          },
          {
            "title": "Year-round",
            "text": "The provincial directory describes the market as operating year-round, with views across the harbour."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By ferry to the Alderney terminal."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The Wednesday and Sunday markets are seasonal; check alderneylanding.com for winter."
          }
        ],
        "link": {
          "label": "Alderney Landing: market info",
          "url": "https://www.alderneylanding.com/market/market-info/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lake Banook', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Paddling', tagLevel: 'safe', meta: 'Home of canoe and kayak clubs and international regattas',
      details: {
        "lead": "Home of the canoe and kayak clubs and the Lake Banook International Racecourse.",
        "see": [
          {
            "title": "Championships",
            "text": "Hosted the ICF Canoe Sprint World Championships in 2009 and 2022, and the Masters Worlds (June 25–27) and Junior and U23 Worlds (July 1–5) in 2026."
          },
          {
            "title": "Organisers",
            "text": "Atlantic Division Canoe Kayak Canada hosted the 2026 events; the club was undergoing renovations."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the middle of Dartmouth."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a lakeside walk."
          },
          {
            "label": "Good to know",
            "text": "No 2027 event dates were found."
          }
        ],
        "link": {
          "label": "Global News: 2026 world championships",
          "url": "https://globalnews.ca/news/11452816/dartmouth-n-s-to-host-two-canoe-sprint-world-championships-in-2026/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Shubie Park', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Canal', tagLevel: 'olive', meta: 'Woodland trails and the old Shubenacadie Canal locks',
      details: {
        "lead": "Woodland trails and the restored locks of the Shubenacadie Canal, between Lake Micmac and Lake Charles.",
        "see": [
          {
            "title": "Fairbanks Centre",
            "text": "At 54 Lock Road; an interpretive centre with a scale model of the lock mechanisms. Third-party listings say Monday to Friday 8:30 am–4:30 pm, unconfirmed for 2026."
          },
          {
            "title": "Locks",
            "text": "Locks 2 and 3 can be seen from the trails; Lock 3 is fully restored but inoperable."
          },
          {
            "title": "Shubie Canal Greenway",
            "text": "A linear trail of 9.25 km starting at the Fairbanks Centre."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Dartmouth, off Lock Road."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Some trail sections are wheelchair accessible, not all."
          }
        ],
        "link": {
          "label": "Halifax: Shubie Canal Greenway",
          "url": "https://www.halifax.ca/parks-recreation/parks-trails-gardens/trails/shubie-canal-greenway"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dartmouth Crossing', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'Shopping', tagLevel: 'purple', meta: 'Big-box shopping and restaurants off Highway 118',
      details: {
        "lead": "Big-box shopping and restaurants off Highway 118.",
        "see": [
          {
            "title": "Shopping",
            "text": "A retail area; no visitor sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Off Highway 118; a car is easiest."
          },
          {
            "label": "Good to know",
            "text": "Useful for shopping and a meal; the sights are elsewhere in Dartmouth."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Halifax region",
          "url": "https://novascotiavacation.ca/regions/halifax/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Cole Harbour', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'East', tagLevel: 'danger', meta: 'Suburbs bordering salt marshes and the coastal heritage park',
      details: {
        "lead": "Suburbs beside salt marshes, with the Salt Marsh Trail and the Cole Harbour Heritage Farm Museum.",
        "see": [
          {
            "title": "Salt Marsh Trail",
            "text": "About 6.5 km one way (13 km return) on an old railway line, part of the Trans Canada Trail."
          },
          {
            "title": "Cole Harbour Heritage Farm Museum",
            "text": "At 471 Poplar Drive; 2026 season May 15 to October 15, Wednesday to Sunday 10 am–4 pm, so closed now. Admission is by donation, per one directory."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of Dartmouth; a car or bus."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Check coleharbourfarmmuseum.ca for 2027 dates."
          }
        ],
        "link": {
          "label": "Cole Harbour Heritage Farm Museum",
          "url": "https://coleharbourfarmmuseum.ca/hours-and-admission/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Salt Marsh Trail',
      icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg',
      text: 'A flat 6.5 km trail along an old railway causeway through the Cole Harbour salt marsh — herons, tidal flats and granite islands. Part of the Trans Canada Trail.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "A flat trail along an old railway causeway through the Cole Harbour salt marsh, part of the Trans Canada Trail.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 6.5 km one way, or 13 km out and back; the Trans Canada Trail profile says 6.7 km."
              },
              {
                "title": "Causeway",
                "text": "Sources give 3 to over 4 km of causeway, with four or five bridges."
              },
              {
                "title": "Origin",
                "text": "A CN Rail line abandoned in the 1980s and converted to a rail trail."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Exposed",
                "text": "It is open to wind; dress for the weather."
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
            "text": "In Cole Harbour; trailheads at both ends."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours return."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Salt Marsh Trail",
          "url": "https://novascotia.com/listing/salt-marsh-trail-trans-canada-trail/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dartmouth Lakes',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Dozens of freshwater lakes lie within the city. Lake Banook hosts paddling clubs and big regattas, including the 2026 world junior and U23 championships.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "Freshwater lakes within the city, with Lake Banook the home of paddling clubs and regattas.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lake Banook",
                "text": "Hosted the world sprint championships in 2009 and 2022 and the world junior and U23 championships in July 2026."
              },
              {
                "title": "Racecourse",
                "text": "The Lake Banook International Racecourse."
              },
              {
                "title": "Summer",
                "text": "Paddling and swimming are summer activities."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Supervised beaches",
                "text": "No source listed which lake beaches are supervised; check the municipality."
              },
              {
                "title": "Winter",
                "text": "The lakes are best from late spring to early autumn."
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
            "text": "Throughout Dartmouth."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Global News: world championships on Lake Banook",
          "url": "https://globalnews.ca/news/11452816/dartmouth-n-s-to-host-two-canoe-sprint-world-championships-in-2026/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Shubie Park & the Canal',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'Wooded trails between Lake Micmac and Lake Charles, with restored locks of the 19th-century Shubenacadie Canal, which once linked Halifax Harbour toward the Bay of Fundy.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "Wooded trails between Lake Micmac and Lake Charles, with restored locks of the 19th-century Shubenacadie Canal.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fairbanks Centre",
                "text": "Interpretive centre with a scale model of the lock mechanisms, at 54 Lock Road."
              },
              {
                "title": "Locks",
                "text": "Locks 2 and 3 are visible from the trails; Lock 3 is restored but inoperable."
              },
              {
                "title": "Greenway",
                "text": "The Shubie Canal Greenway is 9.25 km long."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Fairbanks Centre hours were not confirmed for 2026; a listing says weekdays 8:30–4:30."
              },
              {
                "title": "Trails",
                "text": "A full loop is about 4 km; Lake Charles trail has the most climbing."
              },
              {
                "title": "Accessibility",
                "text": "Some sections are wheelchair accessible."
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
            "text": "Lock Road, Dartmouth."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Halifax: Shubie Canal Greenway",
          "url": "https://www.halifax.ca/parks-recreation/parks-trails-gardens/trails/shubie-canal-greenway"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Downtown Waterfront',
      icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg',
      text: 'A compact, walkable downtown with cafés and shops, a harbourfront trail and views back to the Halifax skyline.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Nightlife', level: 'danger' }],
      details: {
        "lead": "A compact, walkable downtown on the harbour with cafés, shops and a waterfront trail with views of the Halifax skyline.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Alderney Landing",
                "text": "Ferry terminal, arts venue and farmers’ market; Saturday market 8 am–1 pm."
              },
              {
                "title": "Views",
                "text": "The skyline view across the harbour."
              },
              {
                "title": "Ferry",
                "text": "The Alderney route runs every 15 to 30 minutes."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Venues keep their own hours; check before going."
              },
              {
                "title": "Sunset",
                "text": "The skyline is best around sunset."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to explore."
          },
          {
            "label": "Getting there",
            "text": "Ferry from Halifax, or road."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Alderney Landing",
          "url": "https://www.alderneylanding.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Halifax–Dartmouth Ferry',
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Ride across the harbour for the price of a bus ticket — the best skyline view in the region, especially at sunset.',
      tags: [{ label: 'Bus fare', level: 'gold' }, { label: 'Views', level: 'blue' }],
      details: {
        "lead": "Ride across the harbour for a Halifax Transit fare, with skyline views.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fare",
                "text": "$3 for adults, $2.25 for seniors and ages 13–17, free for 12 and under."
              },
              {
                "title": "Routes",
                "text": "Alderney every 15–30 minutes; Woodside weekdays only and not on holidays."
              },
              {
                "title": "History",
                "text": "One source calls it the oldest continuous saltwater ferry in North America (1752); others are more cautious."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fares change",
                "text": "Check Halifax Transit for the current fare."
              },
              {
                "title": "Sunset",
                "text": "Best view at sunset."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Bus fare, $3."
          },
          {
            "label": "Getting there",
            "text": "From the Dartmouth terminal at Alderney Landing."
          },
          {
            "label": "Time to allow",
            "text": "About 30 minutes return."
          }
        ],
        "link": {
          "label": "Discover Halifax: ferry ride",
          "url": "https://discoverhalifaxns.com/itineraries/ferry-ride-across-the-harbour-to-dartmouth/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Lawrencetown Beach',
      icon: '🏄', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'A wild, exposed Atlantic beach east of the city, famous for surfing year-round. Watch for strong currents.',
      tags: [{ label: 'Surf', level: 'blue' }, { label: 'Rip currents', level: 'caution' }],
      details: {
        "lead": "An exposed Atlantic beach east of the city, known for surfing, with the biggest waves in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Surf",
                "text": "Spring through autumn, with winter bringing the biggest surf for those in thick wetsuits; waves of about 3 to 8 ft for beginner to advanced surfers."
              },
              {
                "title": "Lifeguards",
                "text": "Supervised July 1 to August 30, 2026, and on September 5–6 and 12–13."
              },
              {
                "title": "Winter",
                "text": "No lifeguards are posted outside the supervised season."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Rip currents",
                "text": "The same swell that draws surfers produces rip currents that catch swimmers off guard."
              },
              {
                "title": "Gear",
                "text": "One guide suggests a 5/4 wetsuit with hood and boots in winter."
              },
              {
                "title": "Conditions",
                "text": "Check the Nova Scotia Lifeguard Service and local surf shops."
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
            "text": "East of Dartmouth; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Surf year-round; swimming in summer."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Lawrencetown Beach",
          "url": "https://novascotiavacation.ca/beaches/lawrencetown-beach/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lakes, Marshes and Surf',
  outdoor: [
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Lake Banook & chain of lakes', text: 'Calm lakes for canoe, kayak and paddleboard; rentals in summer.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', name: 'Salt Marsh Trail', dist: '≈20 min east', text: 'Easy, flat trail over tidal marsh — good for birding and cycling.' },
    { icon: '🏄', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Surfing', dist: 'Lawrencetown', text: 'Nova Scotia’s best-known surf beach; wetsuits needed most of the year.' },
    { icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg', name: 'Lake Swimming', dist: 'City beaches', text: 'Supervised lake beaches in summer — check water-quality advisories.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Canal & harbour trails', text: 'Multi-use paths along the canal lakes and the harbour.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Frozen lakes', text: 'Skating on lakes when the city confirms ice is safe.' },
  ],

  food: [
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Breweries', area: 'Downtown', areaLevel: 'gold', text: 'A cluster of local breweries and taprooms near the ferry.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Waterfront', areaLevel: 'danger', text: 'Lobster rolls, chowder and fish and chips.' },
    { icon: '🥙', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Donair', area: 'Everywhere', areaLevel: 'olive', text: 'The Halifax-area late-night classic.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Portland Street', areaLevel: 'purple', text: 'Independent coffee shops and bakeries.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Alderney Landing', areaLevel: 'safe', text: 'Local produce and baking by the ferry.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Blueberries', area: 'Summer', areaLevel: 'blue', text: 'Nova Scotia blueberries in pies and grunt.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool & foggy', text: 'Cool, foggy spring; lakes thaw in April and paddlers return in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days for lake beaches, paddling and patios.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour', text: 'Fall colour around the lakes and canal — but watch for tropical storms in September.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snow, rain and wind off the Atlantic; good winter surf for the brave.' },
  ],

  gettingThere: [
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Halifax Transit ferries cross from downtown Halifax to Alderney Landing (and to Woodside) for the bus fare.',
      time: '≈12 min crossing',
    },
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'By Bridge',
      text: 'The Macdonald and MacKay bridges link Dartmouth with Halifax; both charge a toll.',
      time: '≈10–20 min to downtown Halifax',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International (YHZ) is closer to Dartmouth than to downtown Halifax.',
      time: '≈25 min by car',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean arrives at Halifax station; cross by ferry, bus or taxi.',
      time: 'Via Halifax',
    },
  ],

  stay: [
    {
      icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg',
      title: 'Downtown Dartmouth',
      area: 'By the ferry',
      text: 'Inns and rentals steps from the ferry, cafés and breweries.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dartmouth%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Burnside & Dartmouth Crossing',
      area: 'Car-friendly',
      text: 'Chain hotels near the highways and shopping, handy for the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Crossing', level: 'blue' },
      ],
    },
    {
      icon: '🏄', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'Lawrencetown Coast',
      area: 'Surf & beaches',
      text: 'Cottages and rentals on the coast east of the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lawrencetown+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Halifax Transit',
      text: 'Dartmouth is served by Halifax Transit buses and the harbour ferries. One fare covers bus and ferry, with transfers. Tap-to-pay has been delayed; pay cash or use the HFXGO app.',
      linkLabel: 'Halifax Transit',
      linkUrl: 'https://www.halifax.ca/transportation/halifax-transit',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'The adult cash fare is $3.00 (set in 2024); a 25-cent increase was postponed to December 21, 2026. HFXGO caps fares per day and month.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $3.00 (bus & ferry)', 'HFXGO daily cap: $7.50', 'Monthly cap / pass: $90', '+25¢ planned Dec 21, 2026'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.halifax.ca/transportation/halifax-transit/fares-tickets-passes',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Ferry', text: 'The scenic way to Halifax.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown Dartmouth is small and walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the coast and surf beaches.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Canal and harbour trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Base yourself in downtown Dartmouth and commute to Halifax by ferry — often cheaper rooms and a harbour cruise twice a day.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). As part of Halifax Regional Municipality, Dartmouth hotels and short-term rentals also collect the 3% Marketing Levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Dartmouth / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST + 3% Marketing Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Boat & board rentals: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', label: 'Salt Marsh Trail: free' },
      { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', label: 'Shubie Park trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Beach Currents', text: 'Lawrencetown and other Atlantic beaches have strong rip currents — swim only where lifeguards are posted.' },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'Lake Water Quality', text: 'City lake beaches sometimes close for bacteria or blue-green algae — check advisories before swimming.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storm Season', text: 'Post-tropical storms can damage coastal trails in late summer and fall; check trail status.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', title: 'Bridge Tolls', text: 'Both harbour bridges charge a toll — check current payment options before you drive.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Changes', text: 'Bus and ferry fares rise 25¢ on December 21, 2026; tap-to-pay should follow.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Dartmouth is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq, covered by the Peace and Friendship Treaties.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dartmouth General Hospital', '325 Pleasant St', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default DARTMOUTH;
