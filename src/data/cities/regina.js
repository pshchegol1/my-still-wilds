// Regina — данные страницы /city/regina (Реджайна, САСКАЧЕВАН)
// Видео Реджайны в бесплатных банках нет: Pexels отдаёт Эдмонтон
// (в т.ч. «историческое Законодательное собрание» — эдмонтонское).
// В шапке фото с Wikimedia Commons — центр города с берега озера Wascana
// осенью, каякер на воде, автор Tintaggon, сентябрь 2012, CC BY-SA 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (226 404; CTV News).
// Тарифы — regina.ca/…/fares-passes (повышение с 8 апреля 2026; кэпы).
// Сбор 3% Destination Marketing Fund — добровольный, Regina Hotel
// Association (презентация U of R 2026). Больницы — SHA.
// Saskatchewan не переводит часы (UTC-6 круглый год).
// RCMP Heritage Centre, Royal Saskatchewan Museum, Roughriders, Pile o’
// Bones — из общих знаний.

export const REGINA = {
  slug: 'regina',
  name: 'Regina',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Queen City',
  accentLevel: 'safe',
  heroIcon: '🏛️',
  heroImage: '/Cities/Regina/hero.jpg',
  heroCredit: 'Photo: Tintaggon / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.4452, lon: -104.6189 },
  subtitle: 'The Queen City of the Plains',
  description:
    'Saskatchewan’s capital grew up on a treeless plain where buffalo bones once piled by a creek — nearly every tree in the city was planted by hand. Today Regina wraps around Wascana Lake and its huge urban park, home to a domed legislature, the provincial museum and art gallery. It is also the training ground of every Mountie and one of the most passionate football towns in Canada.',

  actions: [
    { label: 'Explore Regina', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈226K (2021)' },
    { label: 'Role', value: 'Capital of Saskatchewan' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'Airport', value: 'YQR · ≈10 min' },
    { label: 'To Saskatoon', value: '≈2 h 45 min by car' },
  ],

  badges: ['Provincial Capital', 'Wascana Lake', 'Rider Nation'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '226,404', label: 'People in the 2021 census — Saskatchewan’s second-largest city and its capital', level: 'blue' },
    { value: '$9.60', label: 'Daily fare cap on a Umo card — ride as much as you like after three trips (2026)', level: 'safe' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not switch to daylight saving time', level: 'purple' },
    { value: '3%', label: 'Voluntary destination marketing fee at member hotels, on top of GST and PST', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Victoria Park', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Office towers around a green square · Farmers’ market in summer',
      details: {
        "lead": "The city centre, with Victoria Park in City Square, the city’s outdoor events space and home of the Regina Farmers’ Market.",
        "see": [
          {
            "title": "Victoria Park",
            "text": "Part of City Square, which the city calls its premier outdoor cultural events facility."
          },
          {
            "title": "Regina Farmers’ Market",
            "text": "Held in the park; the Saturday market is a key downtown draw in summer."
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
            "text": "The market is a summer event."
          }
        ],
        "link": {
          "label": "City of Regina: City Square",
          "url": "https://www.regina.ca/residents/parks/city-square/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Wascana Centre', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Lake, Legislative Building, museum, gallery and walking trails',
      details: {
        "lead": "The city’s big central park around Wascana Lake, with the Legislative Building, the museum and the gallery.",
        "see": [
          {
            "title": "Canoes and kayaks",
            "text": "Rentals at the Wascana Marina run May to September; the marina was reported closed for the season from September 21, 2026."
          },
          {
            "title": "Rink on Wascana",
            "text": "A public outdoor rink on the lake in front of the Legislative Building. Ice thickness decides when it opens."
          },
          {
            "title": "Trails",
            "text": "Walking and cycling trails, picnic areas, play areas, a skateboard plaza and a disc golf course."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Beside downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two hours to half a day."
          },
          {
            "label": "Good to know",
            "text": "Sources conflict on skate rentals; bring skates to be safe."
          }
        ],
        "link": {
          "label": "Wascana Centre",
          "url": "https://www.tourismsaskatchewan.com/listings/2986/wascana-centre"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Cathedral Village', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Village', tagLevel: 'purple', meta: 'Character homes, cafés and an annual street arts festival',
      details: {
        "lead": "A walkable neighbourhood of character homes and cafés, with an annual arts festival.",
        "see": [
          {
            "title": "Cathedral Village Arts Festival",
            "text": "A six-day festival of performing, visual and literary arts in May (the 2024 edition ran May 20–25), ending with a street fair on 13th Avenue."
          },
          {
            "title": "13th Avenue",
            "text": "The street fair that closes the festival is held on 13th Avenue."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A walkable neighbourhood within the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check the festival’s current dates."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Cathedral Village",
          "url": "https://www.tourismsaskatchewan.com/blog/cathedral-village-a-walkable-neighbourhood-to-explore-in-regina"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Warehouse District', icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', tag: 'Nightlife', tagLevel: 'danger', meta: 'Old brick warehouses turned into breweries, restaurants and lofts',
      details: {
        "lead": "A former freight area just northeast of downtown, now known for restaurants, bars and nightclubs.",
        "see": [
          {
            "title": "Dining and bars",
            "text": "Shops, restaurants, bars and nightclubs in old brick warehouses. Bushwakker Brewing is named in one local guide."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Northeast of the central business district."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          },
          {
            "label": "Good to know",
            "text": "Check opening hours of individual venues."
          }
        ],
        "link": {
          "label": "CBC: an artist’s guide to Regina",
          "url": "https://www.cbc.ca/lite/story/1.5264589"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lakeview', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Leafy', tagLevel: 'olive', meta: 'Elm-lined streets south of Wascana Lake',
      details: {
        "lead": "Old Lakeview, a residential area south of Wascana Lake with large houses and direct access to the lakeshore path.",
        "see": [
          {
            "title": "Lakeshore path",
            "text": "Direct access to the path around Wascana Lake."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of Wascana Lake."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk."
          },
          {
            "label": "Good to know",
            "text": "Residential; no visitor attractions of its own."
          }
        ],
        "link": {
          "label": "Wascana Centre",
          "url": "https://www.tourismsaskatchewan.com/listings/2986/wascana-centre"
        },
        "checked": "November 2026"
      },
    },
    { name: 'RCMP Depot', icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg', tag: 'Heritage', tagLevel: 'blue', meta: 'RCMP training academy and Heritage Centre in the west end',
      details: {
        "lead": "The RCMP’s training academy and the RCMP Heritage Centre in the west end.",
        "see": [
          {
            "title": "RCMP Heritage Centre",
            "text": "Listed 11 am–5 pm daily; sources disagree. Admission was listed at $10 for adults (an older listing gives $12). On November 6, 2026 Ottawa promised to make it a national museum."
          },
          {
            "title": "Sunset Ceremonies",
            "text": "Free in July 2026; gates opened 5:30 pm for a 6 pm start through the Heritage Centre entrance at 5907 Dewdney Avenue."
          },
          {
            "title": "Depot tours",
            "text": "A third-party listing gave tours Tuesday to Friday, June 2 to August 28, 2026; not confirmed officially."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the west end, on Dewdney Avenue."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Firearms were reported removed from the displays in November 2026. Phone 306-719-3000."
          }
        ],
        "link": {
          "label": "RCMP Heritage Centre",
          "url": "https://trailsof1885.ca/en/sites/rcmp-heritage-centre/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Saskatchewan Legislative Building',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A grand domed legislature facing Wascana Lake, with marble halls and art inside. Free guided tours run year-round — check the schedule.',
      tags: [{ label: 'Free tours', level: 'safe' }, { label: 'Landmark', level: 'gold' }],
      details: {
        "lead": "A domed legislature facing Wascana Lake at 2405 Legislative Drive, with marble halls and art inside.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Free tours",
                "text": "About 30 minutes long; one source says they run every day except Christmas Day, Boxing Day, New Year’s Day and Good Friday."
              },
              {
                "title": "Times",
                "text": "Sources conflict: every 30 minutes from 9 am in summer and hourly in winter, or 8 am to 5 pm."
              },
              {
                "title": "Setting",
                "text": "The grounds run to Wascana Lake."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "No official 2026 schedule was found; check the Legislative Assembly of Saskatchewan."
              },
              {
                "title": "Winter",
                "text": "The Rink on Wascana is in front of the building when open."
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
            "text": "Wascana Centre, 2405 Legislative Drive."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism Regina: Legislative Building",
          "url": "https://tourismregina.com/attraction/legislative-building/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Wascana Centre',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A large urban park built around a man-made lake, with trails, islands, waterfowl, boat rentals in summer and skating in winter. The city’s green heart.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A large urban park around a man-made lake, with trails, islands, waterfowl, paddling in summer and a rink in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Paddling",
                "text": "Canoe, kayak and paddleboard rentals at Wascana Marina, May to September; closed for the 2026 season."
              },
              {
                "title": "Rink on Wascana",
                "text": "A public outdoor rink on the lake; opens only when the ice is safe."
              },
              {
                "title": "Trails",
                "text": "Walking and cycling trails, with cross-country skiing listed in winter."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Skates",
                "text": "Sources conflict on skate rentals at the warming hut; bring your own."
              },
              {
                "title": "Prices",
                "text": "One rental company’s posted hourly rates were $20–25; may be out of date."
              },
              {
                "title": "Winter",
                "text": "No winter grooming report was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter."
          },
          {
            "label": "Getting there",
            "text": "Beside downtown Regina."
          },
          {
            "label": "Time to allow",
            "text": "Two hours to half a day."
          }
        ],
        "link": {
          "label": "Wascana Centre",
          "url": "https://www.tourismsaskatchewan.com/listings/2986/wascana-centre"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'RCMP Heritage Centre',
      icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg',
      text: 'The museum of the Royal Canadian Mounted Police beside Depot, the training academy every Mountie passes through. Depot holds free Sunset Ceremonies in July.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Must see', level: 'purple' }],
      details: {
        "lead": "The museum of the Royal Canadian Mounted Police beside Depot, the training academy every Mountie passes through.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "The most consistent listing is 11 am–5 pm daily; summer hours may start at 10 am."
              },
              {
                "title": "Admission",
                "text": "About $10 for adults, $8 seniors and students, $6 ages 6–17, free 5 and under; an older listing gives $12 for adults."
              },
              {
                "title": "National museum",
                "text": "In early November 2026 the federal budget committed to making it Canada’s next national museum."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Displays",
                "text": "Historic firearms were reported removed from display on November 20, 2026."
              },
              {
                "title": "Depot",
                "text": "Free Sunset Ceremonies were held in July 2026."
              },
              {
                "title": "Confirm",
                "text": "Phone 306-719-3000 or check rcmpheritagecentre.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $10."
          },
          {
            "label": "Getting there",
            "text": "5907 Dewdney Avenue."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "RCMP Heritage Centre",
          "url": "https://trailsof1885.ca/en/sites/rcmp-heritage-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Royal Saskatchewan Museum',
      icon: '🦖', iconSrc: '/icons/attractions/ph_bone-thin.svg',
      text: 'The provincial museum in Wascana Centre, covering dinosaurs, prairie ecology and First Nations history.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "The provincial museum in Wascana Centre, with Scotty the T. rex in the Lower Gallery and displays on prairie ecology and First Nations history.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "9:30 am–5 pm daily, including holidays, per the museum."
              },
              {
                "title": "Admission",
                "text": "By donation; $5 to $10 per visitor is suggested."
              },
              {
                "title": "Scotty",
                "text": "Scotty the T. rex is on permanent display in the Lower Gallery."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check",
                "text": "Some third-party sites are out of date; use royalsaskmuseum.ca."
              },
              {
                "title": "Eastend",
                "text": "The T.rex Discovery Centre in Eastend is a separate site, closed until May 22, 2027."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "By donation."
          },
          {
            "label": "Getting there",
            "text": "In Wascana Centre."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Royal Saskatchewan Museum",
          "url": "https://royalsaskmuseum.ca/visit/plan-your-visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'MacKenzie Art Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'Saskatchewan’s major public gallery, with historic and contemporary Canadian and Indigenous art.',
      tags: [{ label: 'Check admission', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "Saskatchewan’s major public art gallery, at 3475 Albert Street, with Canadian and Indigenous art.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Recent listings show Monday closed, Tuesday, Wednesday and Friday 10 am–5:30 pm, Thursday until 9 pm, weekends from 11 am."
              },
              {
                "title": "Admission",
                "text": "Sources disagree: one listing says $12 with free entry for members and under 18; others say free."
              },
              {
                "title": "Special shows",
                "text": "A special exhibit may carry a charge."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Phone 306-584-4250 for current hours and any charge."
              },
              {
                "title": "Address",
                "text": "3475 Albert Street."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free or about $12; confirm."
          },
          {
            "label": "Getting there",
            "text": "3475 Albert Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourism Regina: MacKenzie Art Gallery",
          "url": "https://tourismregina.com/attraction/mackenzie-art-gallery/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Mosaic Stadium',
      icon: '🏈', iconSrc: '/icons/attractions/ph_football-thin.svg',
      text: 'Home of the Saskatchewan Roughriders. On game days the city turns green — and fans wear watermelons on their heads.',
      tags: [{ label: 'Tickets', level: 'gold' }, { label: 'Summer–fall', level: 'danger' }],
      details: {
        "lead": "Home of the Saskatchewan Roughriders, whose fans are known for wearing watermelon-shaped hats on game days.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Crowds",
                "text": "Home attendance has averaged roughly 22,000 to 33,000; the 2024 average was 27,684."
              },
              {
                "title": "2027 season",
                "text": "The regular season is provisionally May 20 to October 11, 2027."
              },
              {
                "title": "Grey Cup",
                "text": "The 2027 Grey Cup is planned for Regina on November 7, 2027, the second in the new stadium."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Schedule",
                "text": "The full 2027 home schedule was not yet found; check the CFL or Roughriders sites."
              },
              {
                "title": "Not now",
                "text": "The 2026 season is over."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets; prices vary."
          },
          {
            "label": "Getting there",
            "text": "In Regina; check the team’s site for game-day details."
          },
          {
            "label": "Best time",
            "text": "Summer to autumn."
          }
        ],
        "link": {
          "label": "2027 Grey Cup in Regina (CBC)",
          "url": "https://www.cbc.ca/news/canada/saskatchewan/grey-cup-regina-roughriders-2027-9.6955067"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lake, Valley and Prairie Sky',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Wascana Trails', dist: 'In the city', text: 'Paved loops around the lake and through the park.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling Wascana', dist: 'Summer', text: 'Canoe and kayak rentals on the calm city lake.' },
    { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', name: 'Qu’Appelle Valley', dist: '≈1 h northeast', text: 'A deep valley of lakes and hills cutting through the prairie — beaches, golf and the town of Fort Qu’Appelle.' },
    { icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg', name: 'Moose Jaw', dist: '≈45 min west', text: 'Tunnel tours, a historic downtown and the Temple Gardens mineral spa.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Wascana Lake', text: 'Skating on the lake and outdoor rinks when it freezes.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sunsets', dist: 'Everywhere', text: 'Wide-open sky makes for huge sunsets and storms in summer.' },
  ],

  food: [
    { icon: '🍕', iconSrc: '/icons/attractions/ph_pizza-thin.svg', title: 'Neighbourhood Pizza', area: 'City-wide', areaLevel: 'gold', text: 'Local pizza joints are a Regina institution — ask a local for their favourite.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Breweries', area: 'Warehouse District', areaLevel: 'danger', text: 'Taprooms in old brick buildings.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Cathedral Village', areaLevel: 'purple', text: 'Independent coffee shops on 13th Avenue.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie Ukrainian comfort food.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Local beef and bison.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berry Pie', area: 'Bakeries', areaLevel: 'safe', text: 'The prairie berry, baked into pies and tarts.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Snow melts in April; trees leaf out in May and Wascana fills with birds.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot, sunny days, late sunsets, festivals and football. Watch for thunderstorms.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Crisp days, golden trees in the park and the football season’s best games.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Cold, windy winters, often below −25 °C — but lots of sunshine.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Regina International Airport (YQR) is close to downtown, with flights across Canada.',
      time: '≈10 min to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes the city; Highway 11 runs north to Saskatoon and Highway 6 south toward the US border.',
      time: '≈2 h 45 min from Saskatoon',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Regina with Saskatoon and other prairie towns. Check current operators.',
      time: '≈3 h to Saskatoon',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger train to Regina — the old Union Station is now a casino. VIA’s transcontinental route passes through Saskatoon instead.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Victoria Park, a short walk from Wascana.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Regina%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg',
      title: 'Warehouse District',
      area: 'Nightlife',
      text: 'Rentals near breweries and restaurants.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Warehouse+District', level: 'blue' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'East & Airport',
      area: 'Highway hotels',
      text: 'Chain hotels along Victoria Avenue East and near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Regina+Saskatchewan', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Regina Transit',
      text: 'Regina Transit runs buses across the city. Pay exact coins, or tap a Umo card or app — stored value is cheaper and capped daily and monthly. Fares rose on April 8, 2026, and paper transfers were removed.',
      linkLabel: 'Regina Transit',
      linkUrl: 'https://www.regina.ca/transportation-roads-parking/transit/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares from the City of Regina fares page (2026). Umo cards cost $5 at transit agents. For children 13 and under, see the city’s child transit pass rules.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $3.50 (exact coins)', 'Umo stored value: $3.20', 'Daily cap: $9.60', 'Monthly cap / pass: $97'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.regina.ca/transportation-roads-parking/transit/fares-passes/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, Wascana and Cathedral Village are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat city with park paths.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Handy for Qu’Appelle Valley and Moose Jaw.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'Tap a Umo card instead of paying cash — it is cheaper per ride and stops charging after $9.60 in a day.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST, and member hotels of the Regina Hotel Association add a voluntary 3% destination marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Regina / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST (+ 3% marketing fee at member hotels)' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
      { icon: '🏈', iconSrc: '/icons/attractions/ph_football-thin.svg', label: 'Game tickets: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', label: 'Legislative Building tours: free' },
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'Wascana Centre: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year — the same as Alberta since November 2026, and the same as Manitoba in winter.' },
    { icon: '🏈', iconSrc: '/icons/attractions/ph_football-thin.svg', title: 'Game Day', text: 'On Roughriders home games, hotels fill and the city wears green. Book ahead.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Cold Winters', text: 'Wind chills below −30 °C are common in January. Plug in your car overnight.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Prairie thunderstorms build quickly on hot afternoons — watch the sky.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Bring repellent for summer evenings by Wascana Lake.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Exact Coins', text: 'Cash fares need exact coins; a Umo card is easier.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Regina is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Regina General Hospital · 1440 14th Ave', 'Pasqua Hospital · 4101 Dewdney Ave', 'Emergencies: call 911'] },
  ],
};

export default REGINA;
