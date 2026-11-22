// Thompson — данные страницы /city/thompson (Томпсон, МАНИТОБА)
// Видео Томпсона в бесплатных банках нет (Pexels по "thompson manitoba"
// отдаёт только Законодательное собрание в Виннипеге).
// В шапке фото с Wikimedia Commons — мурал с волком на высотке Highland
// Tower (Spirit Way), автор Bobak Ha'Eri, май 2009, CC BY 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (13 035, муниципалитет).
// Городского автобуса нет с лета 2024 года (CBC; циркуляр Манитобы 2025).
// Мурал по картине Роберта Бейтмана — Travel Manitoba и сайт города.
// Больница — Northern Health Region.
// История с никелем Inco/Vale, водопады, Paint Lake — из общих знаний.

export const THOMPSON = {
  slug: 'thompson',
  name: 'Thompson',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Hub of the North',
  accentLevel: 'blue',
  heroIcon: '🐺',
  heroImage: '/Cities/Thompson/hero.jpg',
  heroCredit: 'Photo: Bobak Ha’Eri / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 55.7435, lon: -97.8558 },
  subtitle: 'Wolf City of the Boreal North',
  description:
    'Carved out of the boreal forest in the late 1950s around one of the world’s great nickel deposits, Thompson is the service centre for all of northern Manitoba. A ten-storey wolf watches over town from the side of an apartment tower, the Burntwood River winds past, and waterfalls, lakes and northern lights are a short drive away.',

  actions: [
    { label: 'Explore Thompson', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13K (2021)' },
    { label: 'Founded', value: 'Late 1950s (nickel)' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈740 km · ≈8 h' },
    { label: 'To Pisew Falls', value: '≈1 h by car' },
  ],

  badges: ['Northern Hub', 'Wolf Capital', 'Boreal Forest'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '13,035', label: 'People in the 2021 census — the largest city in northern Manitoba', level: 'blue' },
    { value: '10', label: 'Storeys tall — the lighted wolf mural based on a painting by Robert Bateman', level: 'gold' },
    { value: '2 km', label: 'Spirit Way, a walking and biking path celebrating the city’s bond with the wolf', level: 'purple' },
    { value: '0', label: 'City bus routes — local transit has been suspended since summer 2024', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'City Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Shops, services and the main mall · Start of Spirit Way',
      details: {
        "lead": "The centre of the city, with shops, services and the start of Spirit Way.",
        "see": [
          {
            "title": "Spirit Way",
            "text": "A 2 to 2.5 km path that starts downtown and links the wolf sculptures, the mural and lookouts."
          },
          {
            "title": "Nickel Days",
            "text": "A June community festival of rides, music and a parade; one source says the third weekend of June."
          },
          {
            "title": "Winter Carnival",
            "text": "One travel guide says it is held every February; confirm with the City of Thompson."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the middle of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Shops and the mall keep their own hours."
          }
        ],
        "link": {
          "label": "City of Thompson: Spirit Way",
          "url": "https://www.thompson.ca/p/spirit-way"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Spirit Way', icon: '🐺', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', tag: 'Walk', tagLevel: 'purple', meta: 'Path linking painted wolf sculptures, the wolf mural and lookouts',
      details: {
        "lead": "A path through the city linking painted wolf sculptures, the wolf mural and lookouts.",
        "see": [
          {
            "title": "Wolf mural",
            "text": "The Bateman-based mural is on the Spirit Way route; see the attraction below."
          },
          {
            "title": "The path",
            "text": "About 2 to 2.5 km, and it overlaps with the longer Millennium Trail."
          },
          {
            "title": "Northern Aviation Tribute",
            "text": "A Norseman floatplane on display, with Burntwood River views."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Starts downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "A walking and cycling path; dress warmly in winter."
          }
        ],
        "link": {
          "label": "City of Thompson: Spirit Way",
          "url": "https://www.thompson.ca/p/spirit-way"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Burntwood Riverside', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Trails and views along the Burntwood River',
      details: {
        "lead": "Trails and views along the Burntwood River, including the Millennium Trail.",
        "see": [
          {
            "title": "Millennium Trail",
            "text": "A loop of about 12 to 15 km (sources differ) through boreal forest and urban areas, used for walking, hiking and mountain biking in summer, and walking and cross-country skiing in winter."
          },
          {
            "title": "Community ski trails",
            "text": "Thompson Community Ski Trails has groomed trails of 1 to 6 km."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the river in the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Check trail conditions in winter."
          }
        ],
        "link": {
          "label": "Travel Manitoba: hiking and walking trails",
          "url": "https://www.travelmanitoba.com/manitoba-north/things-to-do/hiking-trails/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Westwood & Eastwood', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Neighbourhoods built for mine families, surrounded by forest',
      details: {
        "lead": "Residential neighbourhoods built for mine families, surrounded by forest.",
        "see": [
          {
            "title": "Residential",
            "text": "Neighbourhoods surrounded by boreal forest; no visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the city."
          },
          {
            "label": "Good to know",
            "text": "Most visitors stay near the centre."
          }
        ],
        "link": {
          "label": "City of Thompson",
          "url": "https://www.thompson.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Mine Site', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: 'Industry', tagLevel: 'caution', meta: 'The nickel operation the city was built for — not open to the public',
      details: {
        "lead": "The nickel operation the city was built for; not open to the public.",
        "see": [
          {
            "title": "Ownership change",
            "text": "Vale completed the transaction on October 16, 2026 to establish Exiro Nickel Company as the new owner and operator of the Thompson Mine Complex. Vale retains an 18.9% stake."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of the city."
          },
          {
            "label": "Good to know",
            "text": "An industrial site, not open to visitors."
          }
        ],
        "link": {
          "label": "Vale: Form 6-K, October 2026",
          "url": "https://www.sec.gov/Archives/edgar/data/0000917851/000129281426004942/vale20261016_6k.htm"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Gateway', tagLevel: 'olive', meta: 'Flights to Winnipeg and fly-in northern communities',
      details: {
        "lead": "The gateway for flights to Winnipeg and northern communities.",
        "see": [
          {
            "title": "Thompson Airport",
            "text": "The city’s airport; flight information is on thompsonairport.ca."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of the city."
          },
          {
            "label": "Good to know",
            "text": "Check current schedules; flights are weather-dependent."
          }
        ],
        "link": {
          "label": "Thompson Airport: visiting Thompson",
          "url": "https://thompsonairport.ca/visiting-thompson"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'The Wolf Mural',
      icon: '🐺', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A ten-storey painting of a wolf, reproduced from a work by wildlife artist Robert Bateman, covers the side of an apartment tower and is lit at night. Tourism sources call it the world’s largest lighted mural.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Icon', level: 'gold' }],
      details: {
        "lead": "A ten-storey painting of a wolf, reproduced from a work by wildlife artist Robert Bateman, on the side of an apartment tower and lit at night.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Size",
                "text": "About 86 ft by 62 ft (roughly 26 by 19 m)."
              },
              {
                "title": "Painting",
                "text": "Artist Charles Johnston began projecting the Bateman image onto the building in August 2005; the lighting was completed in 2008."
              },
              {
                "title": "Claim",
                "text": "The city and tourism sources call it the world’s largest lighted mural; no independent verification was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "View",
                "text": "Best seen from the highway just north of the apartment building."
              },
              {
                "title": "Bateman",
                "text": "A reviewer notes it is based on his design rather than painted by him."
              },
              {
                "title": "Spirit Way",
                "text": "It is on the Spirit Way route."
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
            "text": "In the city, on Spirit Way."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "City of Thompson: Spirit Way",
          "url": "https://www.thompson.ca/p/spirit-way"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Spirit Way',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A walking and cycling path of about 2–2.5 km through town connecting painted wolf sculptures, the mural, a lookout and heritage displays.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "A walking and cycling path through town linking painted wolf sculptures, the mural, a lookout and heritage displays.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 2 to 2.5 km, depending on the source."
              },
              {
                "title": "Overlaps",
                "text": "The path overlaps with the longer Millennium Trail."
              },
              {
                "title": "Tribute",
                "text": "The Northern Aviation Tribute, with a Norseman floatplane and river views."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Dress warmly; the trail is used for walking and skiing."
              },
              {
                "title": "Free",
                "text": "Free to walk or bike."
              },
              {
                "title": "Map",
                "text": "Details are on the City of Thompson site."
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
            "text": "Starts downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "City of Thompson: Spirit Way",
          "url": "https://www.thompson.ca/p/spirit-way"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Heritage North Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A small museum in two log structures with an open-air blacksmith shop, institutional archives and a visitor information booth. Check opening hours.',
      tags: [{ label: 'Small fee', level: 'gold' }, { label: 'Indoor', level: 'purple' }],
      details: {
        "lead": "A small museum with two log structures, an open-air blacksmith shop and institutional archives.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 hours",
                "text": "Tuesday to Saturday 10 am–5 pm, closed noon to 1 pm for lunch, per the museum’s site."
              },
              {
                "title": "Summer",
                "text": "An older page says it is open seven days a week in July and August."
              },
              {
                "title": "Also",
                "text": "A gift shop with local goods and a visitor information booth."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "No official 2026 price was found; one old review recalls about $3.50."
              },
              {
                "title": "Contact",
                "text": "162 Princeton Drive, phone 204-677-2216."
              },
              {
                "title": "Confirm",
                "text": "Third-party listings give different hours; use the museum’s site."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee; confirm the price."
          },
          {
            "label": "Getting there",
            "text": "162 Princeton Drive."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Heritage North Museum",
          "url": "https://heritagenorth-thompson.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Pisew Falls',
      icon: '💦', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'One of Manitoba’s most spectacular waterfalls, where the Grass River plunges through a rocky gorge. A short boardwalk leads to viewing platforms. About an hour south on Highway 6.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Day trip', level: 'blue' }],
      details: {
        "lead": "Manitoba’s Grass River drops through a rocky gorge here; a short boardwalk leads to viewing platforms.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Viewing",
                "text": "A short boardwalk to observation platforms over the falls."
              },
              {
                "title": "Rotary Bridge",
                "text": "A trail leads to a bridge over the Grass River below the falls."
              },
              {
                "title": "Kwasitchewan Falls",
                "text": "Beyond the bridge, a rugged 22 to 28 km return hike (sources differ) leads to Manitoba’s highest falls."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Difficult hike",
                "text": "The government calls the Kwasitchewan route a difficult backcountry trail, for prepared hikers; one reviewer says it is poorly maintained."
              },
              {
                "title": "Winter",
                "text": "No 2026 winter access notice was found; check Manitoba Parks and Manitoba 511 for Highway 6."
              },
              {
                "title": "Turnoff",
                "text": "About 74–80 km south of Thompson on Highway 6."
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
            "text": "By car on Highway 6, about an hour south of Thompson."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Manitoba Parks: Pisew Falls",
          "url": "https://www.gov.mb.ca/sd/parks/park-maps-and-locations/northeast/pisew.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Paint Lake Provincial Park',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A large lake with beaches, camping, boating and fishing about half an hour south of the city — Thompson’s summer playground.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Summer', level: 'gold' }],
      details: {
        "lead": "A large lake with beaches, camping, boating and fishing, southwest of Thompson.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Getting there",
                "text": "About 30 km southwest of Thompson on Highway 6, then 6 km southeast on Highway 375."
              },
              {
                "title": "Seasonal camping",
                "text": "The 2026 seasonal season ran May 15 to September 20."
              },
              {
                "title": "Campground",
                "text": "A directory listing gives 76 sites, May to September; unverified for 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reservations",
                "text": "1-888-482-2267 or manitobaparks.com; a new cancellation fee applies for 2026."
              },
              {
                "title": "Fees",
                "text": "No Paint Lake nightly rate was found; provincial ranges are about $11.55 to $31 a night depending on service."
              },
              {
                "title": "Winter",
                "text": "Mainly a summer destination."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park and camping fees apply."
          },
          {
            "label": "Getting there",
            "text": "By car; about half an hour from the city."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Manitoba Parks: fees",
          "url": "https://www.gov.mb.ca/sd/parks/park-fees/index.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Northern Lights',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'At 55° north, Thompson often sees the aurora on clear, dark nights; low light pollution helps. Head just outside town, away from lights.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Clear nights', level: 'purple' }],
      details: {
        "lead": "Thompson, at about 55° north, has low light pollution, which helps aurora viewing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dark skies",
                "text": "One source says minimal light pollution means better aurora visibility in Thompson and Flin Flon."
              },
              {
                "title": "Season",
                "text": "No specific Thompson season was found; autumn through early spring nights are the darkest."
              },
              {
                "title": "Where",
                "text": "Just outside town, away from streetlights."
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

  outdoorHeading: 'Shield, Rivers and Boreal Forest',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Kwasitchewan Falls Trail', dist: 'From Pisew Falls', text: 'A long, rugged backcountry trail to Manitoba’s highest waterfall. For experienced hikers only — plan for an overnight.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Paint Lake · Burntwood River', text: 'Pike and walleye in summer, ice fishing in winter. A Manitoba licence is required.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Canoeing', dist: 'Grass & Burntwood rivers', text: 'Classic Canadian Shield paddling with portages and rapids — go with experience or a guide.' },
    { icon: '🏂', iconSrc: '/icons/attractions/ph_person-simple-snowboard-thin.svg', name: 'Winter Sports', dist: 'Around town', text: 'Cross-country skiing, snowshoeing and snowmobile trails through the forest.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Boreal forest', text: 'Moose, black bears, foxes and the wolves the city celebrates. Keep your distance.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Watching', dist: 'Outside town', text: 'Dark skies just minutes from the city.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Pickerel (walleye) and other fish from northern lakes.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners & Family Restaurants', area: 'City Centre', areaLevel: 'gold', text: 'Hearty comfort food for mine workers and travellers.' },
    { icon: '🫓', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread, often served at gatherings and festivals.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'purple', text: 'Blueberries and other wild berries in the forest around town.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Coffee Shops', area: 'Downtown', areaLevel: 'olive', text: 'Warm-up stops for long northern winters.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Groceries', area: 'Regional hub', areaLevel: 'safe', text: 'Thompson stocks supplies for many fly-in communities; prices are higher than in the south.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late thaw', text: 'Snow lasts into April and lakes stay icy into May. Black flies arrive in late spring.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Long days', text: 'Warm days and very long evenings — best for waterfalls, beaches and paddling. Bring bug spray.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Aurora season', text: 'Golden aspen and birch, few bugs and darker nights for the northern lights.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Deep cold', text: 'Long, very cold winters with deep snow — but clear nights for aurora and great snowmobiling.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Thompson Airport (YTH) has regular flights to Winnipeg and onward to northern communities.',
      time: 'Daily flights from Winnipeg',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Provincial Highway 6 runs north from Winnipeg through long stretches of forest with few services. Fill up wherever you can and carry winter gear.',
      time: '≈8 h from Winnipeg',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Winnipeg–Churchill train serves Thompson a couple of times a week. It is slow and often late — check the schedule with VIA.',
      time: 'About a day from Winnipeg',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity buses connect Thompson with Winnipeg. Check current operators and schedules.',
      time: '≈9–10 h',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'City Centre',
      area: 'Near services',
      text: 'Hotels and motels within walking distance of shops and Spirit Way.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Thompson+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Thompson%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Paint Lake',
      area: 'Lake & camping',
      text: 'Campgrounds and cabins at the provincial park, half an hour south.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
    {
      icon: '💦', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      title: 'Pisew Falls',
      area: 'Rustic',
      text: 'Basic camping for hikers heading to Kwasitchewan Falls.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No City Buses',
      text: 'Thompson has had no local bus service since summer 2024, when the city’s transit contract ended. Plan to get around by taxi, car or on foot.',
      linkLabel: 'City of Thompson',
      linkUrl: 'https://thompson.ca/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
        title: 'Taxis',
        text: 'Local taxi companies serve the city and the airport. Fares are by meter or set price — ask before you ride.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: available', 'Car rental: at the airport', 'Walking: compact centre'],
        },
        linkLabel: 'City transportation info',
        linkUrl: 'https://thompson.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The city centre and Spirit Way are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Spirit Way and local trails in summer.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for Pisew Falls, Paint Lake and aurora trips.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'The main option without a car.' },
        ],
      },
    ],
    proTip: {
      label: 'Road tip:',
      text: 'Highway 6 has long gaps between gas stations and little cell coverage. Top up the tank, carry water and a blanket, and watch for moose at dusk.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Thompson / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel: taxes included in the pump price' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🐺', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', label: 'Spirit Way & wolf mural: free' },
      { icon: '💦', iconSrc: '/icons/attractions/ph_drop-thin.svg', label: 'Pisew Falls: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'No Buses', text: 'There is no city transit — book taxis ahead at busy times or rent a car at the airport.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Highway 6 is long and isolated. Check road conditions in winter and travel in daylight if you can.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Extreme Cold', text: 'Winter temperatures often drop below −30 °C. Dress for frostbite risk and keep a winter kit in the car.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Black flies and mosquitoes are intense in June and July — bring repellent and a head net for trails.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife', text: 'Black bears and wolves live around town. Never feed wildlife, and store food securely when camping.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Thompson is on Treaty 5 territory, the traditional lands of the Cree (Ininew) people; Nisichawayasihk Cree Nation is among the First Nations of the region.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Thompson General Hospital', '871 Thompson Drive South', 'Emergency 24/7 · call 911'] },
  ],
};

export default THOMPSON;
