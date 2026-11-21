// Flin Flon — данные страницы /city/flin-flon (Флин-Флон, МАНИТОБА)
// Видео Флин-Флона в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — "Flin Flon in the Fall": озеро и
// гранитные скалы щита в городе, автор Theoffice89 (AaronC), сентябрь
// 2012, CC BY-SA 3.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года: 5 099 всего, 4 940 на манитобской
// стороне (город стоит на границе с Саскачеваном).
// Эвакуация из-за лесного пожара 28 мая — 25 июня 2025 (CTV, Global News).
// Больница — Northern Health Region (Third Ave & Church St; 50 Church St —
// это дом престарелых, не больница).
// Название из романа, статуя Флинтабетти Флонатина, закрытие шахты 777
// в 2022 году, Bakers Narrows — из общих знаний.

export const FLIN_FLON = {
  slug: 'flin-flon',
  name: 'Flin Flon',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · On the Saskatchewan Border',
  accentLevel: 'danger',
  heroIcon: '⛏️',
  heroImage: '/Cities/FlinFlon/hero.jpg',
  heroCredit: 'Photo: Theoffice89 / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 54.7682, lon: -101.8650 },
  subtitle: 'The Town Built on Rock',
  description:
    'Named after the hero of a science-fiction novel and built straight onto the granite of the Canadian Shield, Flin Flon is a copper-and-zinc mining town that climbs over bare rock, boardwalks and lakes. It sits right on the Manitoba–Saskatchewan border and opens onto a vast landscape of lakes, canoe routes and northern lights.',

  actions: [
    { label: 'Explore Flin Flon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈5.1K (2021)' },
    { label: 'Provinces', value: 'Manitoba · Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈8–9 h by car' },
    { label: 'Founded', value: '1920s–30s (mining)' },
  ],

  badges: ['Mining Town', 'Two Provinces', 'Canadian Shield'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '5,099', label: 'People in the 2021 census — about 4,940 on the Manitoba side, the rest in Saskatchewan', level: 'blue' },
    { value: '2', label: 'Provinces — the city straddles the Manitoba–Saskatchewan boundary', level: 'gold' },
    { value: '2025', label: 'A wildfire forced the whole town to evacuate from May 28 to June 25; the town itself was spared', level: 'danger' },
    { value: '1', label: 'Statue of Flintabbatey Flonatin, the fictional explorer the town is named after', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Shops and cafés on a street that winds over the rock',
      details: {
        "lead": "The town centre, on a street that winds over the rock.",
        "see": [
          {
            "title": "Flinty statue",
            "text": "The big fibreglass statue of Flin Flon’s namesake, built in 1962 to a design by cartoonist Al Capp, stands at the entrance to town (tourist park and campground)."
          },
          {
            "title": "Station Museum",
            "text": "The old CN station holds the town’s museum; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of town."
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
          "label": "City of Flin Flon: history",
          "url": "https://cityofflinflon.ca/flin-flon-history"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Ross Lake', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'In town', tagLevel: 'blue', meta: 'Small lake and walking trail in the middle of town',
      details: {
        "lead": "A small lake ringed by cliffs in the middle of town, with a boardwalk around it.",
        "see": [
          {
            "title": "Flinty’s Boardwalk",
            "text": "A 4.2 km hike around Ross Lake with plaques explaining the geology. The Flinty Committee began building it in 1995."
          },
          {
            "title": "Flinty’s Trail",
            "text": "Continues about 2 km toward the uptown area; a second entry is at Manitoba Avenue."
          },
          {
            "title": "Hapnot Lake",
            "text": "A duck pond near downtown on Ross Street where ducks return each summer to nest."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town centre."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours for the boardwalk."
          },
          {
            "label": "Good to know",
            "text": "Regatta and fireworks are part of the Trout Festival; the 2026 festival ran June 26 – July 1."
          }
        ],
        "link": {
          "label": "City of Flin Flon: Flinty’s Boardwalk",
          "url": "https://cityofflinflon.ca/p/flinty-s-boardwalk"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hillside Streets', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Rock town', tagLevel: 'danger', meta: 'Houses perched on granite, linked by steep stairs and boardwalks',
      details: {
        "lead": "Houses built right on the Precambrian rock, with stairs and boardwalks between them.",
        "see": [
          {
            "title": "Streets on rock",
            "text": "Streets curve around outcrops of granite and many houses sit on bare rock."
          },
          {
            "title": "Viewpoints",
            "text": "One blog describes wooden stairs up to a rock outcrop over Ross Lake and the mine sites; this rests on a single source."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Throughout the town; steep in places."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk."
          },
          {
            "label": "Good to know",
            "text": "Wear sturdy shoes; stairs and rock are slippery in winter."
          }
        ],
        "link": {
          "label": "City of Flin Flon",
          "url": "https://cityofflinflon.ca/flin-flon-history"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Creighton (SK)', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Neighbour', tagLevel: 'safe', meta: 'Separate town just across the border in Saskatchewan',
      details: {
        "lead": "A separate town just across the border in Saskatchewan.",
        "see": [
          {
            "title": "Neighbour town",
            "text": "Creighton is in Saskatchewan, separate from Flin Flon."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Just across the provincial border from Flin Flon."
          }
        ],
        "link": {
          "label": "City of Flin Flon",
          "url": "https://cityofflinflon.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Channing', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: 'Mine side', tagLevel: 'caution', meta: 'Area near the historic mine and smelter site',
      details: {
        "lead": "The mining side of Flin Flon, near the former smelter.",
        "see": [
          {
            "title": "The smelter",
            "text": "Hudbay’s copper smelter stopped operating in June 2010. Demolition of the former facility was reported under way and expected to continue until spring 2026; no source confirmed the current status or tied the work to Channing itself."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of town."
          },
          {
            "label": "Good to know",
            "text": "An industrial area, not a sightseeing area; do not enter fenced sites."
          }
        ],
        "link": {
          "label": "The Reminder: smelter demolition",
          "url": "https://thereminder.ca/local-news/hudbay-starts-demolition-on-long-disused-smelter-9917838"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bakers Narrows', icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg', tag: 'Lakes', tagLevel: 'olive', meta: 'Provincial park and cottages south of town',
      details: {
        "lead": "A provincial park and cottages on Lake Athapapuskow, south of town.",
        "see": [
          {
            "title": "Park",
            "text": "A seasonal campground of about 71 sites (May to September), sandy swimming beaches and a viewing tower with 360-degree views."
          },
          {
            "title": "Safety",
            "text": "Lifejackets are strongly recommended, with free loaners from the park."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive south of Flin Flon."
          },
          {
            "label": "Booking",
            "text": "Campground reservations: 888-482-2267."
          },
          {
            "label": "Good to know",
            "text": "The park is mainly a summer destination. No 2026 fees were found; check Manitoba Parks."
          }
        ],
        "link": {
          "label": "Manitoba Parks",
          "url": "https://www.manitoba.ca/sd/parks/prs/index.html"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Flintabbatey Flonatin Statue',
      icon: '🗿', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'The town took its name from Josiah Flintabbatey Flonatin, the explorer hero of the novel “The Sunless City”, which prospectors found in the area. A cartoon-style statue of “Flinty” now greets visitors.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
      details: {
        "lead": "A large fibreglass statue of the fictional explorer after whom Flin Flon is named, built in 1962 to a design by cartoonist Al Capp.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The name",
                "text": "Prospectors found a copy of the novel The Sunless City, and a prospector (Tom or John Creighton, depending on the source) suggested naming the place after its hero."
              },
              {
                "title": "The statue",
                "text": "About 7.5 m tall and designed by Al Capp, creator of Li’l Abner; sources place it at the tourist park and campground at the town entrance, or near the museum."
              },
              {
                "title": "Claim",
                "text": "The city says it is the only city named after a science-fiction character, but also notes that fiction and fact blur in its history."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to see."
              },
              {
                "title": "The book",
                "text": "Sources date the novel to 1905 or 1914."
              },
              {
                "title": "Photo stop",
                "text": "A quick roadside stop."
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
            "text": "At the entrance to town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Flinty statue",
          "url": "https://www.travelmanitoba.com/directory/statue-of-josiah-flintabbatey-flonatin/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Town Built on Rock',
      icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'Streets curve around outcrops of ancient Precambrian granite, and many houses sit on bare rock. Wander the hillside stairs for the views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'blue' }],
      details: {
        "lead": "Streets curve around outcrops of ancient Precambrian granite, and many houses sit on bare rock.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Flinty’s Boardwalk",
                "text": "A 4.2 km walk around Ross Lake with geology plaques."
              },
              {
                "title": "Hillside stairs",
                "text": "Stairs and boardwalks connect houses on the rock."
              },
              {
                "title": "Views",
                "text": "Look-outs over Ross Lake and the town."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Rock and stairs can be icy."
              },
              {
                "title": "Shoes",
                "text": "Wear sturdy footwear."
              },
              {
                "title": "Pair it",
                "text": "Combine with the Station Museum."
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
            "text": "Throughout the town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Flin Flon: Flinty’s Boardwalk",
          "url": "https://cityofflinflon.ca/p/flinty-s-boardwalk"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Flin Flon Station Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A small seasonal museum about the town’s mining and railway history. Check opening hours before you go.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "The town’s museum in the old Canadian National Railway station, about mining, transportation and early settlers.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Collection",
                "text": "Artifacts of mining, transportation and early pioneers."
              },
              {
                "title": "Season",
                "text": "A tourism listing gives the first weekend of June to August 31, daily 10 am–8 pm; CBC gives 10 am–6 pm from June to September."
              },
              {
                "title": "Tours",
                "text": "Private tours can be arranged by phoning ahead."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "It is a seasonal museum and not open in November; call 204-687-2946 to ask about a visit."
              },
              {
                "title": "Admission",
                "text": "An older report gives $4 for adults and $10 for a family; the current price is unconfirmed."
              },
              {
                "title": "Confirm",
                "text": "Check with the City of Flin Flon."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee, about $4 on an older listing."
          },
          {
            "label": "Getting there",
            "text": "In the old station in town."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Flin Flon Station Museum",
          "url": "https://www.travelmanitoba.com/directory/flin-flon-station-museum/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bakers Narrows Provincial Park',
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      text: 'A lakeside park with a beach, campground and lookout tower on Lake Athapapuskow, a short drive south.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "A lakeside park on Lake Athapapuskow with sandy beaches, a campground and a viewing tower.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Campground",
                "text": "About 71 sites, open seasonally from May to September, with electric sites."
              },
              {
                "title": "Viewing tower",
                "text": "A tower with 360-degree views of the lake, forest and rock."
              },
              {
                "title": "Beaches",
                "text": "Sandy swimming beaches."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reservations",
                "text": "Campground reservations: 888-482-2267."
              },
              {
                "title": "Lifejackets",
                "text": "Strongly recommended; free loaners are available at the park."
              },
              {
                "title": "Fees",
                "text": "No 2026 fees were found; check Manitoba Parks."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park and camping fees apply; confirm the rates."
          },
          {
            "label": "Getting there",
            "text": "A short drive south of Flin Flon."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Manitoba Parks",
          "url": "https://www.manitoba.ca/sd/parks/prs/index.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Grass River & Lake Country',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Northern Manitoba’s lake-and-river canoe country lies around Flin Flon, including the Grass River route from Cranberry Portage — clear lakes, islands and portages.',
      tags: [{ label: 'Outfitters', level: 'blue' }, { label: 'Experience needed', level: 'caution' }],
      details: {
        "lead": "Northern Manitoba’s canoe country, with the Grass River route in Grass River Provincial Park, about 570 km long.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The route",
                "text": "A 570 km network of lakes and rivers from Simonhouse Lake to the Nelson River."
              },
              {
                "title": "Cranberry Portage",
                "text": "A 176 km run from Cranberry Portage to Wekusko Falls takes about a week."
              },
              {
                "title": "Camping",
                "text": "Designated backcountry campsites; all equipment is packed in and out."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Experience",
                "text": "Manitoba’s park profile says it is not for novices: long open crossings and fast water."
              },
              {
                "title": "Outfitters",
                "text": "No current outfitters were confirmed; check Manitoba Parks."
              },
              {
                "title": "Season",
                "text": "A summer activity; not in November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to paddle; camping permits apply."
          },
          {
            "label": "Getting there",
            "text": "Cranberry Portage is the usual launch; no Flin Flon link was confirmed."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Manitoba Parks: Grass River",
          "url": "https://www.gov.mb.ca/sd/pubs/parks-protected-spaces/park_info/grass_river_pp.pdf"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Northern Lights',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'Clear, dark nights in autumn through early spring can bring the aurora, helped by low light pollution. Head to a lake shore just outside town.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Clear nights', level: 'purple' }],
      details: {
        "lead": "Low light pollution makes Flin Flon a good place to watch the aurora on clear, dark nights.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "No specific Flin Flon season was found; autumn through early spring nights are the darkest."
              },
              {
                "title": "Where",
                "text": "A lake shore outside town; Bakers Narrows Lodge is suggested as a spot where the lights are often visible."
              },
              {
                "title": "Low light",
                "text": "One source says minimal light pollution gives better aurora in Flin Flon and Thompson."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to watch."
              },
              {
                "title": "Dress warm",
                "text": "Winter nights are very cold."
              },
              {
                "title": "Clear skies",
                "text": "Check cloud cover and the aurora forecast."
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
            "text": "Drive out of town to a dark spot."
          },
          {
            "label": "Best time",
            "text": "Clear, dark nights."
          }
        ],
        "link": {
          "label": "Travel Manitoba: northern lights",
          "url": "https://www.travelmanitoba.com/blog/manitoba-winter-explorer-guide-10-ways-to-see-the-northern-lights-this-winter/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lakes on the Shield',
  outdoor: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Surrounding lakes', text: 'Pike, walleye and lake trout in deep, clear lakes. Manitoba or Saskatchewan licence depending on where you fish.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Canoeing & Kayaking', dist: 'Lake Athapapuskow & beyond', text: 'Island-studded lakes and longer wilderness routes.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Hiking', dist: 'Around town', text: 'Rocky trails with lake views; watch your footing on bare granite.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Swimming', dist: 'Bakers Narrows', text: 'A sandy beach in the provincial park in summer.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Sports', dist: 'Trails & frozen lakes', text: 'Snowmobiling, ice fishing and cross-country skiing.' },
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', name: 'Fire Recovery', dist: 'Outside town', text: 'Large areas around town burned in 2025 — check trail and road conditions before heading out.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Pickerel & Pike', area: 'Local restaurants', areaLevel: 'blue', text: 'Fresh lake fish on many menus.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Main Street', areaLevel: 'gold', text: 'Comfort food in a classic mining-town setting.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Coffee Shops', area: 'Downtown', areaLevel: 'olive', text: 'Small local cafés for a warm-up.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Blueberries', area: 'Late summer', areaLevel: 'purple', text: 'Berry picking on the rocky hills around town.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Downtown', areaLevel: 'danger', text: 'Hockey-town pubs — the Flin Flon Bombers have a long history.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Groceries', area: 'Town', areaLevel: 'safe', text: 'Stock up here before heading to remote lakes.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Fire season starts', text: 'Late thaw; by late May the forest dries out and wildfire risk rises. Check fire bans and advisories.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm, long days for paddling, fishing and beaches — and the town’s summer festival.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Gold & aurora', text: 'Golden aspen against pink granite and dark nights for northern lights.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters — ice fishing, snowmobiling and short days.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 10 runs north from Dauphin and The Pas. From Saskatchewan, Highway 106 (the Hanson Lake Road) and Highway 167 lead in from the west. Distances between services are long.',
      time: '≈8–9 h from Winnipeg',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Flin Flon has a small regional airport with limited scheduled service. Check current flights to Winnipeg.',
      time: 'Limited service',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators from Winnipeg or The Pas.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger train to Flin Flon. VIA Rail’s Winnipeg–Churchill train stops in The Pas, about 1 h 30 min by road to the south.',
      time: 'Nearest: The Pas',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown Flin Flon',
      area: 'Near Main Street',
      text: 'Hotels and motels in town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Flin+Flon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Flin%20Flon%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Bakers Narrows',
      area: 'Lakeside camping',
      text: 'Provincial park campground on Lake Athapapuskow.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Fishing Lodges',
      area: 'Remote lakes',
      text: 'Lodges and outfitters on lakes around the region, some fly-in only.',
      links: [
        { label: 'Travel Manitoba', url: 'https://www.travelmanitoba.com/', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'Small Town, No Transit',
      text: 'Flin Flon is small and has no city bus network. You can walk the downtown, but you will need a car to reach lakes and parks.',
      linkLabel: 'City of Flin Flon',
      linkUrl: 'https://www.cityofflinflon.ca/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
        title: 'Taxis',
        text: 'Local taxis serve the town and the airport. Book ahead at night and on weekends.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local companies', 'Walking: downtown', 'Car: needed for lakes'],
        },
        linkLabel: 'City of Flin Flon',
        linkUrl: 'https://www.cityofflinflon.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact but steep — wear good shoes.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for Bakers Narrows and fishing lakes.' },
          { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Boat', text: 'Many cabins and lodges are reached by water.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Part of town is in Saskatchewan, and Creighton next door is fully in Saskatchewan. Sales tax and fishing licences change at the border line.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'On the Manitoba side, most purchases carry 5% GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Saskatchewan charges 5% GST plus 6% PST — so prices can differ slightly across the border.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Flin Flon / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
      { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', label: 'Fishing gear: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🗿', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', label: 'Flinty statue & town walks: free' },
      { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', label: 'Northern lights: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–20%.',
  },

  practical: [
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Wildfire Season', text: 'In 2025 the whole town was evacuated for almost a month. From May to September, check Manitoba and Saskatchewan fire advisories and road closures.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Long distances with few services. Fill up whenever you can and carry water and a winter kit.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer. Most of Saskatchewan does not change clocks — check times if you travel further west.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Black flies and mosquitoes in June and July — bring repellent.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Temperatures often fall below −30 °C. Plug in your car overnight.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Two Licences', text: 'Lakes on each side of the border need that province’s fishing licence.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Flin Flon is on the traditional lands of the Cree (Ininew) people; Mathias Colomb Cree Nation and other First Nations are in the region.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Flin Flon General Hospital', 'Third Ave & Church St', 'Emergency 24/7 · call 911'] },
  ],
};

export default FLIN_FLON;
