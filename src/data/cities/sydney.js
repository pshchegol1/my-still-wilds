// Sydney — данные страницы /city/sydney (Сидни, НОВАЯ ШОТЛАНДИЯ, Кейп-Бретон)
// Осторожно: почти все "Sydney" в стоках — Австралия. Видео Сидни (NS)
// в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — набережная Сидни в сумерках, автор
// Plumzee, сентябрь 2017, CC BY-SA 4.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года: population centre Cape Breton – Sydney
// 30 960 (StatCan, Canadian Encyclopedia). На карточке было «3K» — ошибка.
// Transit Cape Breton: $2.50, месяц $82.50, tap-to-pay с 15.06.2026
// (CBRM Riders Guide June 2026). Marketing Levy CBRM 3% с 1.01.2024.
// HST 14%. Больница — Cape Breton Regional Hospital, 1482 George St.
// Big Fiddle, Celtic Colours, Louisbourg, Cabot Trail, Open Hearth Park,
// паром Marine Atlantic — из общих знаний.

export const SYDNEY = {
  slug: 'sydney',
  name: 'Sydney',
  province: 'Nova Scotia',
  provinceId: 'ns',
  region: 'NS',
  tag: 'Nova Scotia · Cape Breton Island',
  accentLevel: 'purple',
  heroIcon: '🎻',
  heroImage: '/Cities/Sydney/hero.jpg',
  heroCredit: 'Photo: Plumzee / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.1368, lon: -60.1942 },
  subtitle: 'Heart of Cape Breton',
  description:
    'The largest community on Cape Breton Island, Sydney grew up around coal and steel and now welcomes cruise ships beneath a giant fiddle on its harbourfront. It is a warm, music-loving place — the base for the Fortress of Louisbourg, the Cabot Trail and the ferry to Newfoundland.',

  actions: [
    { label: 'Explore Sydney', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈31K (2021)' },
    { label: 'Part of', value: 'Cape Breton Regional Municipality' },
    { label: 'Language', value: 'English · Gaelic & Mi’kmaw heritage' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Louisbourg', value: '≈40 min by car' },
    { label: 'To Halifax', value: '≈4 h 30 min by car' },
  ],

  badges: ['Cape Breton', 'Celtic Music', 'Harbour City'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '30,960', label: 'People in the Sydney population centre in the 2021 census — the largest on Cape Breton Island', level: 'blue' },
    { value: '$2.50', label: 'A Transit Cape Breton ride since June 15, 2026 — now with tap-to-pay', level: 'safe' },
    { value: '3%', label: 'Marketing levy on hotel stays across the regional municipality, on top of 14% HST', level: 'purple' },
    { value: 'October', label: 'Celtic Colours festival brings fiddle music to venues across the island', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Esplanade', icon: '🎻', iconSrc: '/icons/attractions/ph_guitar-thin.svg', tag: 'Harbourfront', tagLevel: 'gold', meta: 'Boardwalk, cruise pavilion and the Big Fiddle',
      details: {
        "lead": "The harbourfront, with the Big Fiddle by the cruise pavilion at 74 Esplanade.",
        "see": [
          {
            "title": "The Big Fiddle",
            "text": "Unveiled in January 2005 beside the visitor information centre and the Joan Harriss Cruise Pavilion."
          },
          {
            "title": "Boardwalk",
            "text": "A waterfront walk by the harbour."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of Sydney, on the harbour."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check for events and cruise-ship days at the cruise pavilion."
          }
        ],
        "link": {
          "label": "Cape Breton Island: World’s Largest Fiddle",
          "url": "https://www.cbisland.com/listing/worlds-largest-fiddle"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North End Heritage District', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: '18th-century houses; museum status varies, so check before visiting',
      details: {
        "lead": "Historic 18th-century houses on Charlotte Street, with museum houses whose status is uncertain.",
        "see": [
          {
            "title": "Cossit House",
            "text": "At 73–75 Charlotte Street. A 2026 provincial decision to close 12 Nova Scotia Museum sites listed it; one listing instead said it would reopen June 1, 2026."
          },
          {
            "title": "Jost Heritage House",
            "text": "At 54 Charlotte Street, with displays on marine life, Cape Breton history and a reconstructed apothecary; listings give about 10 am–4 pm, undated."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North end of downtown Sydney."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Confirm with the Nova Scotia Museum before planning a visit."
          }
        ],
        "link": {
          "label": "Old Sydney Society: Cossit House",
          "url": "https://oldsydney.ca/cossit-house-museum/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Open Hearth Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Parkland on the remediated former steel plant and tar ponds site',
      details: {
        "lead": "A 39-hectare park on the remediated Sydney Tar Ponds and former coke ovens site.",
        "see": [
          {
            "title": "Park",
            "text": "Sports fields, walking trails, art installations, a playground, murals about the steel plant and a dog run; more than 2,000 trees planted."
          },
          {
            "title": "History",
            "text": "The coke ovens closed in 1988; the cleanup (about $400 million) was completed in 2013 or 2014 by different accounts. The park sits over a capped, encapsulated mass of contaminated material."
          },
          {
            "title": "Debate",
            "text": "Some critics, including Elizabeth May, have questioned whether the containment is permanent; officials report fish returning to nearby waters."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Sydney, on the former steel plant site."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Named for the steel plant’s open-hearth furnaces."
          }
        ],
        "link": {
          "label": "Stantec: Open Hearth Park",
          "url": "https://www.stantec.com/en/projects/canada-projects/o/open-hearth-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Whitney Pier', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Community', tagLevel: 'danger', meta: 'Historic multicultural steelworkers’ neighbourhood',
      details: {
        "lead": "A historic multicultural steelworkers’ neighbourhood.",
        "see": [
          {
            "title": "Community",
            "text": "Whitney Pier grew around the steel plant; no 2026 visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A neighbourhood of Sydney."
          },
          {
            "label": "Good to know",
            "text": "Mainly residential; ask locally about churches and community halls open to visitors."
          }
        ],
        "link": {
          "label": "Cape Breton Island tourism",
          "url": "https://www.cbisland.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sydney River', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'South', tagLevel: 'blue', meta: 'Residential area and shopping on the river',
      details: {
        "lead": "Residential area and shopping on the river.",
        "see": [
          {
            "title": "Shopping",
            "text": "A residential and retail area; no visitor sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of Sydney."
          },
          {
            "label": "Good to know",
            "text": "Useful for shopping and services."
          }
        ],
        "link": {
          "label": "Cape Breton Island tourism",
          "url": "https://www.cbisland.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North Sydney', icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Ferry', tagLevel: 'olive', meta: 'Across the harbour — Marine Atlantic ferries to Newfoundland',
      details: {
        "lead": "Across the harbour, the western terminus of the Marine Atlantic ferry to Newfoundland.",
        "see": [
          {
            "title": "Port aux Basques",
            "text": "Marine Atlantic runs a year-round crossing; times are given as 6 to 8 hours depending on the source. A sailing on November 17, 2026 was rescheduled, so check the advisories."
          },
          {
            "title": "Argentia",
            "text": "A seasonal crossing, roughly June to September, taking 14 to 16 hours."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of Sydney, across the harbour."
          },
          {
            "label": "Booking",
            "text": "Book on marineatlantic.ca; sailings change with weather."
          },
          {
            "label": "Good to know",
            "text": "Check the current schedule before travelling."
          }
        ],
        "link": {
          "label": "Marine Atlantic: sailing information",
          "url": "https://www.marineatlantic.ca/commercial-services/sailing-traffic-information"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'The Big Fiddle',
      icon: '🎻', iconSrc: '/icons/attractions/ph_guitar-thin.svg',
      text: 'A giant fiddle and bow sculpture on the waterfront by the cruise pavilion — a tribute to Cape Breton’s Celtic music and the city’s favourite photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
      details: {
        "lead": "A giant illuminated fiddle and bow on the waterfront at 74 Esplanade, unveiled in January 2005 and billed as the world’s largest fiddle.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Size",
                "text": "Most tourism sites say about 60 ft (18 m); other sources give 42, 50 or 17 m for the bow."
              },
              {
                "title": "Weight",
                "text": "Eight to ten tons, depending on the source."
              },
              {
                "title": "Builder",
                "text": "One source credits Cyril Hearn as designer and builder."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to see, any time."
              },
              {
                "title": "Next door",
                "text": "The visitor information centre and the cruise pavilion."
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
            "text": "74 Esplanade, on the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Cape Breton Island: World’s Largest Fiddle",
          "url": "https://www.cbisland.com/listing/worlds-largest-fiddle"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fortress of Louisbourg',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'About 40 minutes away, Parks Canada’s huge reconstruction of an 18th-century French fortified town, with costumed interpreters, period food and cannon firings. Full services run May 18 to October 31; winter is a reduced low season.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Must see', level: 'purple' }],
      details: {
        "lead": "Parks Canada’s reconstruction of an 18th-century French fortified town, with costumed interpreters, period food and cannon firings.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Visitor services May 18 to October 31, 2026, 9:30 am–5 pm daily in the main season."
              },
              {
                "title": "Low season",
                "text": "November 1, 2026 to May 16, 2027: weekdays, about 9:30 am–4 pm, reduced services; phone 902-919-8392."
              },
              {
                "title": "Fees",
                "text": "One guide lists $22 for adults in peak season and $9.50 in shoulder season; confirm on Parks Canada’s fee page."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free summer",
                "text": "Admission was free June 19 to September 7, 2026."
              },
              {
                "title": "Winter",
                "text": "One guide says low-season admission is free; this was not confirmed."
              },
              {
                "title": "Dates differ",
                "text": "Two Parks Canada pages differ by a day on the peak-season end date."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid in season; confirm winter."
          },
          {
            "label": "Getting there",
            "text": "About 40 minutes from Sydney by car."
          },
          {
            "label": "Time to allow",
            "text": "Half a day or more."
          }
        ],
        "link": {
          "label": "Parks Canada: Fortress of Louisbourg hours",
          "url": "https://parks.canada.ca/lhn-nhs/ns/louisbourg/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Celtic Colours International Festival',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: 'Each October, concerts and community events across Cape Breton celebrate fiddle, piping and Gaelic song amid the fall colours. Book early.',
      tags: [{ label: 'October', level: 'danger' }, { label: 'Tickets', level: 'caution' }],
      details: {
        "lead": "Concerts and community events across Cape Breton in October celebrating fiddle, piping and Gaelic song.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2027",
                "text": "October 8–16, 2027 (the 31st edition), per the festival; one operator says October 8–17."
              },
              {
                "title": "2026",
                "text": "Ran October 9–17 with 52 concerts in 36 communities, for its 30th anniversary."
              },
              {
                "title": "Tickets",
                "text": "On sale historically in early July; no 2027 on-sale date was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book early",
                "text": "Rooms and concerts fill up."
              },
              {
                "title": "Check",
                "text": "Some tourism pages still show the 2027 dates as TBA."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets per concert."
          },
          {
            "label": "Getting there",
            "text": "Concerts across Cape Breton; a car is needed."
          },
          {
            "label": "Best time",
            "text": "October."
          }
        ],
        "link": {
          "label": "Celtic Colours: about",
          "url": "https://celtic-colours.com/about/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'North End Heritage Houses',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'Historic 18th-century homes in the North End show life in early Sydney. Cossit House’s status is unclear after a 2026 provincial decision to close 12 Nova Scotia Museum sites; confirm before going.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "Historic 18th-century houses on Charlotte Street; museum status is uncertain after 2026 provincial closures.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Cossit House",
                "text": "Restored with costumed interpreters and 18th-century furnishings in the past; a 2026 provincial decision listed it among 12 sites to close."
              },
              {
                "title": "Jost Heritage House",
                "text": "At 54 Charlotte Street, with marine-life and history displays and a reconstructed apothecary."
              },
              {
                "title": "Hours",
                "text": "Cossit House was seasonal (June 1 to October 15); Jost listings give about 10 am–4 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check with the Nova Scotia Museum and the Old Sydney Society."
              },
              {
                "title": "Winter",
                "text": "Houses are unlikely to be open to visitors in late November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee in past seasons; confirm."
          },
          {
            "label": "Getting there",
            "text": "Charlotte Street, in the North End."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Old Sydney Society: Cossit House",
          "url": "https://oldsydney.ca/cossit-house-museum/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Open Hearth Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'Trails, sports fields and a playground built on land once occupied by the steel plant and the notorious Sydney Tar Ponds — a story of environmental recovery.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "A 39-hectare park with trails, sports fields and a playground, built on the remediated Sydney Tar Ponds and steel plant site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Features",
                "text": "Walking trails, art installations, murals about the plant’s history and a dog run."
              },
              {
                "title": "Cleanup",
                "text": "About $400 million, completed in 2013 or 2014; the park sits on a capped mass of contaminated material."
              },
              {
                "title": "Trees",
                "text": "More than 2,000 trees have been planted."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Debate",
                "text": "Some critics have questioned whether the containment is permanent."
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
            "text": "In Sydney."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Stantec: Open Hearth Park",
          "url": "https://www.stantec.com/en/projects/canada-projects/o/open-hearth-park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cabot Trail',
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      text: 'Sydney is a gateway to the Cabot Trail loop through Cape Breton Highlands National Park — start in Baddeck, about an hour away.',
      tags: [{ label: 'Day trip+', level: 'blue' }, { label: 'Best in fall', level: 'danger' }],
      details: {
        "lead": "A scenic loop of about 298 km around northern Cape Breton, 106 km of it through Cape Breton Highlands National Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 298 km; around 4.5 hours of driving from and back to Baddeck without stops, more with stops."
              },
              {
                "title": "Park fees",
                "text": "Needed only if you stop in the park; one guide gives $11 per adult per day in 2026, from the end of May to the end of October."
              },
              {
                "title": "Fall",
                "text": "A favourite for autumn colours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "The road stays open year-round, but winter driving on the highland sections is for experienced drivers because of weather and moose."
              },
              {
                "title": "Closed in winter",
                "text": "Whale-watching and the Englishtown cable ferry do not run in winter."
              },
              {
                "title": "Services",
                "text": "The park does not close, but services are reduced."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free road; park pass for stops in season."
          },
          {
            "label": "Getting there",
            "text": "Start in Baddeck; no source confirmed the distance from Sydney."
          },
          {
            "label": "Best time",
            "text": "Summer and early fall."
          }
        ],
        "link": {
          "label": "Nova Scotia Tourism: Cabot Trail",
          "url": "https://novascotiavacation.ca/regions/cape-breton/attractions/cabot-trail/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Island Coast and Highlands',
  outdoor: [
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', name: 'Cabot Trail', dist: '≈1 h to Baddeck', text: 'One of Canada’s great scenic drives, with highland lookouts and whale-watching.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Cape Breton Highlands', dist: '≈2 h+', text: 'Hiking trails like the Skyline Trail above the Gulf of St. Lawrence.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Beaches', dist: 'Around the island', text: 'Sandy and cobble beaches on the Atlantic and Bras d’Or Lake.' },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Bras d’Or Lake', dist: '≈30–60 min', text: 'An inland sea at the heart of Cape Breton — sailing and eagle-spotting.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Waterfront Paths', dist: 'Downtown', text: 'The Esplanade boardwalk and Open Hearth Park trails.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Whale Watching', dist: 'Cabot Trail coast', text: 'Pilot and minke whales from tour boats in summer.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster & Snow Crab', area: 'Local restaurants', areaLevel: 'danger', text: 'Fresh shellfish from Cape Breton waters in season.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Meat Pies & Oatcakes', area: 'Bakeries', areaLevel: 'gold', text: 'Scottish- and Acadian-influenced home cooking.' },
    { icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg', title: 'Kitchen Parties', area: 'Pubs & halls', areaLevel: 'purple', text: 'Fiddle sessions and ceilidhs with food and dancing.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Haddock and chips, a Maritime staple.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Brews', area: 'Downtown', areaLevel: 'blue', text: 'Craft beer and Cape Breton whisky to try nearby.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Blueberries', area: 'Late summer', areaLevel: 'safe', text: 'Wild Nova Scotia blueberries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Late & cool', text: 'Spring comes late on the island; drift ice can linger offshore into April.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, cruise ships, festivals and the best Cabot Trail weather.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Celtic Colours', text: 'Brilliant highland colour and the Celtic Colours festival — book far ahead.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Stormy', text: 'Snowy and windy; many seasonal attractions close.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'J.A. Douglas McCurdy Sydney Airport (YQY) has flights to Halifax and Toronto. Check current schedules.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 104 and 105 cross the Canso Causeway onto Cape Breton Island; Highway 125 loops around Sydney.',
      time: '≈4 h 30 min from Halifax',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries sail from North Sydney to Port aux Basques and (seasonally) Argentia in Newfoundland.',
      time: 'North Sydney ≈20 min',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Cruise ships call at the Joan Harriss Cruise Pavilion beside the Big Fiddle.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '🎻', iconSrc: '/icons/attractions/ph_guitar-thin.svg',
      title: 'Downtown Waterfront',
      area: 'Walkable',
      text: 'Hotels on the Esplanade near the fiddle and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sydney+Nova+Scotia', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Sydney%2C%20Nova%20Scotia%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'North Sydney',
      area: 'Near the ferry',
      text: 'Handy for early Newfoundland crossings.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Sydney+Nova+Scotia', level: 'blue' },
      ],
    },
    {
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      title: 'Louisbourg',
      area: 'Fortress town',
      text: 'Inns in the village next to the fortress.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Louisbourg+Nova+Scotia', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Transit Cape Breton',
      text: 'Transit Cape Breton runs buses around Sydney and nearby communities. Since June 15, 2026, you can tap a debit or credit card, use the Umo app or a reloadable card — or pay exact cash. One payment gives 90 minutes of free transfers.',
      linkLabel: 'Transit Cape Breton',
      linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares (ages 18–59) from the CBRM June 2026 Riders’ Guide. Old paper tickets are accepted until December 31, 2026.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single ride: $2.50 (exact cash or tap)', 'Monthly pass: $82.50', 'Transfers: 90 minutes', 'Reloadable card: $10'],
        },
        linkLabel: 'Passenger information',
        linkUrl: 'https://cbrm.ns.ca/transportation/transit-cape-breton/passenger-information/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for Louisbourg and the Cabot Trail.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are walkable.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers Sydney and nearby towns.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Festival tip:',
      text: 'Visiting for Celtic Colours in October? Book rooms and concerts months ahead — the island fills up.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14%',
    headline: 'Nova Scotia: 14% HST',
    headlineLevel: 'blue',
    description:
      'Nova Scotia charges a single 14% Harmonized Sales Tax (since April 1, 2025). Accommodations in Cape Breton Regional Municipality also collect a 3% marketing levy (since January 1, 2024).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Sydney / Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 14% HST + 3% marketing levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 14% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival tickets: 14% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 14% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🎻', iconSrc: '/icons/attractions/ph_guitar-thin.svg', label: 'Big Fiddle & waterfront: free' },
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'Open Hearth Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🇦🇺', iconSrc: '/icons/attractions/ph_flag-thin.svg', title: 'Not That Sydney', text: 'When booking, double-check “Sydney, Nova Scotia” — flights and hotels sometimes default to Sydney, Australia.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Seasonal Sites', text: 'Louisbourg and many Cabot Trail businesses are seasonal — check dates outside summer and fall.' },
    { icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg', title: 'Storms', text: 'Post-tropical storms and winter nor’easters can bring high winds — check forecasts.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Ferry Reservations', text: 'Book Marine Atlantic crossings ahead in summer, especially with a vehicle.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on Roads', text: 'Watch for moose and deer on Cape Breton highways at dusk.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Sydney is in Unama’ki, the Cape Breton district of Mi’kma’ki — the ancestral and unceded territory of the Mi’kmaq; Membertou First Nation borders the city.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Cape Breton Regional Hospital', '1482 George St', 'Emergencies: call 911 · 811 for advice'] },
  ],
};

export default SYDNEY;
