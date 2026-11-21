// Halifax — данные страницы /city/halifax (Галифакс, НОВАЯ ШОТЛАНДИЯ)
// Видео в шапке — Pexels, автор Max Medyk ("Aerial view of Halifax
// waterfront skyline"), проверено по кадрам: набережная Галифакса с
// причалами и Дартмут через гавань. Лицензия Pexels подписи не требует.
// Население — перепись 2021 года (HRM 439 819; городская часть 348 634).
// HST 14% с 1 апреля 2025 (Минфин NS). Marketing Levy 3% с 1.10.2023
// (By-law M-400, halifax.ca).
// Тарифы: $3 наличными (2024); +25¢ перенесено на 21 декабря 2026,
// tap-to-pay отложен; HFXGO кэп $7.50/день, $90/мес (CBC, Global News).
// Больница — QEII Halifax Infirmary; вход в приёмное с 14.12.2024 —
// 1840 Bell Rd (NSHA).
// Citadel, Pier 21, Maritime Museum, Public Gardens, Peggy's Cove,
// взрыв 1917, Titanic — из общих знаний.

export const HALIFAX = {
  slug: 'halifax',
  name: 'Halifax',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Capital on the Harbour',
  accentLevel: 'gold',
  heroIcon: '⚓',
  heroVideo: '/Cities/Halifax/hero.mp4',
  heroImage: '/Cities/Halifax/hero-poster.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 44.6488, lon: -63.5752 },
  subtitle: 'Harbour City of the Atlantic',
  description:
    'Built around one of the world’s great natural harbours, Halifax mixes a star-shaped hilltop fortress, a lively waterfront boardwalk and a maritime history that touches the Titanic, two world wars and the 1917 Halifax Explosion. It is a walkable, friendly capital with pubs full of live music — and the starting point for Peggy’s Cove, Lunenburg and the whole Atlantic coast.',

  actions: [
    { label: 'Explore Halifax', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈440K (HRM, 2021)' },
    { label: 'Role', value: 'Capital of Nova Scotia' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Airport', value: 'YHZ · ≈30 min' },
    { label: 'To Peggy’s Cove', value: '≈45 min by car' },
  ],

  badges: ['Harbour City', 'Maritime History', 'Gateway to the Coast'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '439,819', label: 'People in Halifax Regional Municipality in the 2021 census — the largest city in Atlantic Canada', level: 'blue' },
    { value: '14%', label: 'HST since April 1, 2025, down from 15% — plus a 3% marketing levy on hotel stays', level: 'purple' },
    { value: '1917', label: 'The Halifax Explosion — a munitions ship blast that devastated the north end', level: 'danger' },
    { value: '$3', label: 'A bus or ferry ride in cash; a 25¢ increase is planned for December 21, 2026', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Waterfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'gold', meta: 'Boardwalk, piers, seafood shacks, museums and the ferry terminal',
      details: {
        "lead": "The harbourfront, with a boardwalk of about 4 km, piers, the ferry terminal and museums.",
        "see": [
          {
            "title": "Waterfront Boardwalk",
            "text": "About 4 km from Pier 21 at the Seaport to Casino Nova Scotia; sources give 3 to 4.4 km. Open around the clock."
          },
          {
            "title": "Maritime Museum of the Atlantic",
            "text": "On the waterfront, with Titanic artifacts and the 1917 Halifax Explosion; CSS Acadia is moored alongside."
          },
          {
            "title": "Ferry terminal",
            "text": "The Halifax–Dartmouth ferries leave from here at a bus fare."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The heart of downtown, on the harbour."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          },
          {
            "label": "Good to know",
            "text": "Some seasonal businesses may be closed in winter; check before going."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Waterfront Boardwalk",
          "url": "https://novascotiavacation.ca/regions/halifax/attractions/halifax-waterfront-boardwalk/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Citadel Hill & Spring Garden', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'The star fort above downtown · Public Gardens · Shopping on Spring Garden Road',
      details: {
        "lead": "The star fort above downtown, the Public Gardens and shopping on Spring Garden Road.",
        "see": [
          {
            "title": "Halifax Citadel",
            "text": "The full site with exhibits and ramparts was open May 7 to November 5, 2026; the grounds are open year-round, and the noon gun fires daily except Christmas Day."
          },
          {
            "title": "Public Gardens",
            "text": "At 5665 Spring Garden Road; open year-round, free; gates open at 8 am and close before dusk."
          },
          {
            "title": "Spring Garden Road",
            "text": "The main shopping street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Up the hill from the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Ramparts may be closed if slippery in winter."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Halifax Citadel",
          "url": "https://novascotiavacation.ca/regions/halifax/attractions/halifax-citadel-national-historic-site/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North End', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: 'Creative', tagLevel: 'danger', meta: 'Agricola and Gottingen streets — cafés, bars, galleries and the Hydrostone district',
      details: {
        "lead": "The north of the peninsula, rebuilt after the 1917 Halifax Explosion, with independent shops, craft beer and the Hydrostone.",
        "see": [
          {
            "title": "Hydrostone District",
            "text": "A National Historic Site: an English-style garden suburb built after the explosion, with independent cafés, breweries and restaurants."
          },
          {
            "title": "Agricola Street",
            "text": "Known for independent shops and restaurants."
          },
          {
            "title": "Craft beer",
            "text": "The North End is one of Halifax’s best areas for craft beer."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Boundaries differ by source; the Hydrostone runs roughly from Duffus Street to Young Street."
          }
        ],
        "link": {
          "label": "Discover Halifax: North End",
          "url": "https://discoverhalifaxns.com/things-to-do/things-to-do-north-end-halifax/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South End', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Leafy', tagLevel: 'safe', meta: 'Universities, old houses and Point Pleasant Park at the tip of the peninsula',
      details: {
        "lead": "The peninsula’s south, with universities, old houses and Point Pleasant Park.",
        "see": [
          {
            "title": "Point Pleasant Park",
            "text": "At the tip of the peninsula; it hosts an outdoor Shakespeare event each summer."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Few visitor details were found for the rest of the neighbourhood."
          }
        ],
        "link": {
          "label": "Culture Trip: Halifax neighbourhoods",
          "url": "https://theculturetrip.com/north-america/canada/articles/the-coolest-neighbourhoods-in-halifax-nova-scotia"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dartmouth', icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Across the harbour', tagLevel: 'blue', meta: 'A short ferry ride away — lakes, waterfront and a growing downtown',
      details: {
        "lead": "Across the harbour by ferry: lakes, waterfront and a growing downtown. See the Dartmouth city page for details.",
        "see": [
          {
            "title": "Ferry",
            "text": "Adults pay $3; seniors and ages 13–17 $2.25; free for ages 12 and under. The Alderney route runs more often than Woodside, which is weekdays only."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By ferry from the downtown terminal."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Fares are subject to change; check Halifax Transit."
          }
        ],
        "link": {
          "label": "Discover Halifax: ferry ride",
          "url": "https://discoverhalifaxns.com/itineraries/ferry-ride-across-the-harbour-to-dartmouth/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Seaport District', icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', tag: 'Pier 21', tagLevel: 'olive', meta: 'Cruise terminal, immigration museum and farmers’ market',
      details: {
        "lead": "The cruise terminal, Pier 21 and the Halifax Seaport Farmers’ Market.",
        "see": [
          {
            "title": "Pier 21",
            "text": "The Canadian Museum of Immigration; adults $19."
          },
          {
            "title": "Seaport Farmers’ Market",
            "text": "At 961 Marginal Road: Saturday 8 am–2 pm and Sunday 10 am–2 pm, with free weekend parking."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The south end of the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "One listing gives different weekday hours; trust the market’s own page."
          }
        ],
        "link": {
          "label": "Halifax Seaport Farmers’ Market",
          "url": "https://halifaxfarmersmarket.com/contact/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Halifax Citadel National Historic Site',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A star-shaped 19th-century fort on the hill above downtown, with costumed interpreters, soldiers in kilts and the daily noon gun. Views over the harbour from the ramparts.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "A star-shaped 19th-century fort above downtown with costumed interpreters, harbour views and the daily noon gun.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The full site (exhibits and ramparts) was open May 7 to November 5, 2026, 9 am–5 pm; the grounds stay open year-round."
              },
              {
                "title": "Noon gun",
                "text": "Fires daily at noon except Christmas Day, a tradition since 1857."
              },
              {
                "title": "Fees",
                "text": "About $22 for adults and $18.75 for seniors, youth free (2026 rates reported); parking about $3.15."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Now",
                "text": "In winter the visitor centre is closed but the grounds and washrooms are open."
              },
              {
                "title": "Slippery",
                "text": "Ramparts may be closed when icy."
              },
              {
                "title": "Confirm",
                "text": "Check parks.canada.ca for fees and dates."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free grounds; paid full site in season."
          },
          {
            "label": "Getting there",
            "text": "On the hill above downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Parks Canada: Halifax Citadel",
          "url": "https://parks.canada.ca/lhn-nhs/ns/halifax"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Waterfront Boardwalk',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'A long harbourfront walkway lined with piers, restaurants, ice-cream stands, tall ships in summer and harbour tours.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A harbourfront walkway of about 4 km with piers, restaurants and harbour tours.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 4 km from Pier 21 to Casino Nova Scotia; sources say 3 to 4.4 km."
              },
              {
                "title": "Open",
                "text": "Open to the public around the clock."
              },
              {
                "title": "Summer",
                "text": "Tall ships and many seasonal stands in summer."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Some seasonal businesses may be closed; the walk itself stays open."
              },
              {
                "title": "Pair it",
                "text": "Combine it with the Maritime Museum and Pier 21."
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
            "text": "Downtown, along the harbour."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Waterfront Boardwalk",
          "url": "https://novascotiavacation.ca/regions/halifax/attractions/halifax-waterfront-boardwalk/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canadian Museum of Immigration at Pier 21',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'The ocean terminal where around a million immigrants arrived in Canada, now a national museum of immigration stories.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "The ocean terminal where immigrants arrived in Canada, now a national museum; one travel guide gives its main years as 1928 to 1971.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "The museum lists adults at $19."
              },
              {
                "title": "Hours",
                "text": "Sources conflict: daily 9:30 am–5:30 pm in summer; reduced hours and Mondays closed from November to April, per one guide."
              },
              {
                "title": "Seaport",
                "text": "It sits at the Halifax Seaport beside the cruise terminal and farmers’ market."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check pier21.ca for winter hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $19 for adults."
          },
          {
            "label": "Getting there",
            "text": "Halifax Seaport, on the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Pier 21",
          "url": "https://pier21.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Maritime Museum of the Atlantic',
      icon: '🧭', iconSrc: '/icons/attractions/ph_compass-thin.svg',
      text: 'Shipwrecks, the Titanic — whose recovery operations were based in Halifax — and the 1917 Halifax Explosion, right on the waterfront.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "Titanic artifacts, the 1917 Halifax Explosion, Mi’kmaw sea connections and the Royal Canadian Navy, with CSS Acadia moored on the wharf.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listings show Tuesday to Sunday 9:30 am–4:30 pm (Tuesday to 8 pm on one); Monday closed in winter."
              },
              {
                "title": "Admission",
                "text": "$11 for adults from May to October and $5.15 from November to April, per Nova Scotia Tourism."
              },
              {
                "title": "Free Tuesdays",
                "text": "Free entry Tuesdays 4–8 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Explosion gallery",
                "text": "One reviewer calls the Halifax Explosion exhibit the museum’s most affecting room."
              },
              {
                "title": "Confirm",
                "text": "No official 2026 winter schedule was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; about $5.15 in winter."
          },
          {
            "label": "Getting there",
            "text": "On the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Maritime Museum",
          "url": "https://novascotiavacation.ca/regions/halifax/points_of_interest/maritime-museum-of-the-atlantic/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Halifax Public Gardens',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'Formal Victorian gardens with a bandstand, ponds and flowerbeds in the heart of the city. Open year-round and free to enter; the flowerbeds are best in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best in summer', level: 'olive' }],
      details: {
        "lead": "Formal Victorian gardens with a bandstand, ponds and flowerbeds at 5665 Spring Garden Road, open year-round and free.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Gates open at 8 am and close about 30 minutes to an hour before dusk, year-round."
              },
              {
                "title": "Tours",
                "text": "Free one-hour tours daily from June to October at 10:30 am, noon, 1:30 pm and 3 pm."
              },
              {
                "title": "Free",
                "text": "Free to enter."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The flowerbeds are best in summer; winter is quiet."
              },
              {
                "title": "Confirm",
                "text": "No 2026 season details or bandstand schedule were found."
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
            "text": "Spring Garden Road, in the city centre."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Discover Halifax: Public Gardens",
          "url": "https://discoverhalifaxns.com/things-to-do/attractions/everything-you-need-to-know-about-the-halifax-public-gardens/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Halifax–Dartmouth Ferry',
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'One of North America’s oldest saltwater ferry services — and the cheapest harbour cruise in town, for the price of a bus ticket.',
      tags: [{ label: 'Bus fare', level: 'safe' }, { label: 'Views', level: 'blue' }],
      details: {
        "lead": "The harbour ferry between Halifax and Dartmouth, for a Halifax Transit fare, with skyline views.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fare",
                "text": "$3 for adults, $2.25 for seniors and ages 13–17, free for 12 and under; ten tickets $27, monthly pass $90."
              },
              {
                "title": "Routes",
                "text": "Alderney runs more often (every 15–30 minutes); Woodside is weekdays only and not on holidays."
              },
              {
                "title": "History",
                "text": "One source calls it the oldest continuous saltwater ferry in North America, from 1752; other sources are more cautious."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fares change",
                "text": "Check Halifax Transit for current fares and schedules."
              },
              {
                "title": "Sunset",
                "text": "The skyline view is best at sunset."
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
            "text": "From the Halifax ferry terminal."
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
  ],

  outdoorHeading: 'Coast, Coves and Islands',
  outdoor: [
    { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', name: 'Peggy’s Cove', dist: '≈45 min southwest', text: 'The famous lighthouse on bare granite. Stay off the dark, wet rocks — rogue waves are dangerous.' },
    { icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', name: 'Lunenburg', dist: '≈1 h 15 min', text: 'A colourful UNESCO World Heritage fishing town on the South Shore.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Point Pleasant Park', dist: 'South End', text: 'Forest trails and fort ruins at the mouth of the harbour.' },
    { icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg', name: 'McNabs Island', dist: 'Harbour', text: 'Hiking and old forts on an island reached by seasonal boat.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Crystal Crescent Beach', dist: '≈40 min', text: 'White-sand beaches and a rugged coastal trail.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Kayaking', dist: 'Dartmouth lakes · coast', text: 'Lake paddling in Dartmouth or guided sea kayaking along the coast.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Waterfront', areaLevel: 'danger', text: 'Lobster rolls and boiled lobster — best in season from shacks and restaurants.' },
    { icon: '🥙', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Donair', area: 'City-wide', areaLevel: 'gold', text: 'Halifax’s own spiced-beef wrap with sweet garlic sauce — a late-night classic.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Oysters & Scallops', area: 'Downtown', areaLevel: 'blue', text: 'Nova Scotia oysters and Digby scallops on many menus.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs & Live Music', area: 'Argyle & Grafton', areaLevel: 'purple', text: 'Celtic and East Coast music in lively pubs, plus local craft beer.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Haddock and chips, a Maritime staple.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberry Grunt', area: 'Bakeries', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries in traditional desserts.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Cool & foggy', text: 'Late, cool spring with fog off the ocean. Gardens bloom in June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm, breezy days, busy waterfront, festivals and tall ships.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour & seafood', text: 'Beautiful colour, fewer crowds and mild weather — but watch for tropical storms in September.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Wet & windy', text: 'Snow, rain and wind from the Atlantic — milder than inland Canada but stormy.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Halifax Stanfield International Airport (YHZ) has flights across Canada, to the US and to Europe. An express bus and taxis connect to downtown.',
      time: '≈30 min to downtown',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean train runs between Montréal and Halifax a few times a week, arriving at the station near the Seaport.',
      time: 'Overnight from Montréal',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 102 links Halifax with Truro and the Trans-Canada; Highway 103 runs down the South Shore.',
      time: '≈2 h 45 min from Moncton',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Halifax is a major cruise port; ships dock at the Seaport beside Pier 21.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      title: 'Downtown & Waterfront',
      area: 'Walkable',
      text: 'Hotels near the boardwalk, Citadel and nightlife.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Halifax+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Halifax%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      title: 'North End',
      area: 'Local feel',
      text: 'Rentals and small inns near cafés and bars.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+End+Halifax', level: 'blue' },
      ],
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Dartmouth',
      area: 'Across the harbour',
      text: 'Often cheaper, with a quick ferry ride to downtown Halifax.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dartmouth+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Halifax Transit',
      text: 'Halifax Transit runs buses across the region and the harbour ferries to Dartmouth. The ferry costs the same as the bus and transfers work on both. Tap-to-pay with bank cards has been delayed; for now, pay cash or use the HFXGO app.',
      linkLabel: 'Halifax Transit',
      linkUrl: 'https://www.halifax.ca/transportation/halifax-transit',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'The adult cash fare has been $3.00 since 2024; a 25-cent increase was postponed to December 21, 2026. HFXGO barcode payments are capped per day and month.',
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
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact but hilly — the Citadel sits on top.' },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Ferry', text: 'The fastest way to Dartmouth, and a scenic one.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Peggy’s Cove and the South Shore.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Harbour tip:',
      text: 'Ride the ferry to Dartmouth at sunset for the best skyline view in town — for the price of a bus ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single Harmonized Sales Tax of 14% (5% federal + 9% provincial) since April 1, 2025, when it dropped from 15%. Hotels and short-term rentals in Halifax also collect a 3% Marketing Levy, in place since October 1, 2023.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Halifax / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST + 3% Marketing Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', label: 'Waterfront boardwalk: free' },
      { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Public Gardens: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Peggy’s Cove Rocks', text: 'Stay off the dark, wet rocks near the lighthouse — waves have swept visitors into the sea.' },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fog & Layers', text: 'Ocean fog can roll in any time; bring a warm layer even in summer.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storm Season', text: 'Post-tropical storms can hit in late summer and fall — check forecasts.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster Season', text: 'Lobster is available year-round, but local fresh catches vary by fishing area and season.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Toronto.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Changes', text: 'Bus and ferry fares rise 25¢ on December 21, 2026; tap-to-pay should follow.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Halifax (Kjipuktuk) is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq, covered by the Peace and Friendship Treaties.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['QEII Halifax Infirmary', 'Emergency entrance: 1840 Bell Rd', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default HALIFAX;
