// North Battleford — данные страницы /city/north-battleford (САСКАЧЕВАН)
// Видео Норт-Батлфорда в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — город сверху осенью, автор Quintin
// Soloviev, октябрь 2025, CC BY 4.0 — лицензия требует автора, отсюда
// heroCredit.
// Население — перепись 2021 года (13 836).
// Транспорт — cityofnb.ca: только будни, $4 наличными, месяц $60
// (страница без даты — «уточняйте»). Больница — Battlefords Union
// Hospital, 1092 107th St (24/7); Saskatchewan Hospital — психиатрия, без
// приёмного отделения. Saskatchewan не переводит часы (UTC-6).
// Fort Battleford, могила Battleford Eight, Allen Sapp, WDM — из общих
// знаний.

export const NORTH_BATTLEFORD = {
  slug: 'north-battleford',
  name: 'North Battleford',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Battlefords',
  accentLevel: 'gold',
  heroIcon: '🏞️',
  heroImage: '/Cities/NorthBattleford/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.7575, lon: -108.2861 },
  subtitle: 'Where Two Rivers Meet History',
  description:
    'North Battleford faces the old town of Battleford across the North Saskatchewan River, near where the Battle River joins it. Together “the Battlefords” hold some of the most important — and painful — history of the Canadian West, from the first capital of the North-West Territories to the events of 1885, alongside a gallery devoted to Cree artist Allen Sapp.',

  actions: [
    { label: 'Explore North Battleford', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13.8K (2021)' },
    { label: 'Metro (Battlefords)', value: '≈19.4K' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Saskatoon', value: '≈1 h 45 min by car' },
    { label: 'Rivers', value: 'North Saskatchewan · Battle' },
  ],

  badges: ['River Valley', 'Prairie History', 'Cree Art'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '13,836', label: 'People in the 2021 census — the larger of the two Battlefords', level: 'blue' },
    { value: '1885', label: 'Year of the North-West Resistance; eight Indigenous men were hanged at Fort Battleford that November', level: 'danger' },
    { value: 'Mon–Fri', label: 'City buses run on weekdays only', level: 'gold' },
    { value: '$4', label: 'An adult bus fare in cash; kids 6 and under ride free', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown North Battleford', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Main streets, galleries and the civic centre',
      details: {
        "lead": "The city centre, with the Allen Sapp Gallery on Railway Avenue East.",
        "see": [
          {
            "title": "Allen Sapp Gallery",
            "text": "At 1 Railway Avenue East, home of the Gonor Collection of Allen Sapp paintings; donation admission."
          },
          {
            "title": "Winter hours",
            "text": "October to May: Wednesday to Sunday noon–4 pm, closed Monday, Tuesday and statutory holidays."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of North Battleford, on the north side of the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Phone 306-445-1760 to confirm."
          }
        ],
        "link": {
          "label": "City of North Battleford: Allen Sapp Gallery",
          "url": "https://www.cityofnb.ca/parks-recreation-culture/galleries-and-performing-arts-centre/the-allen-sapp-gallery-the-gonor-collection/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Battleford (town)', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'Old capital', tagLevel: 'purple', meta: 'Separate town across the river with Fort Battleford and historic buildings',
      details: {
        "lead": "The separate town across the river, the former capital of the North-West Territories, with Fort Battleford and its historic sites.",
        "see": [
          {
            "title": "Fort Battleford",
            "text": "A North-West Mounted Police post and National Historic Site; seasonal, so closed now."
          },
          {
            "title": "Battleford Eight",
            "text": "The mass grave of eight men hanged in 1885 is on public land in the town, near the Eiling Kramer Campground."
          },
          {
            "title": "Old Government House",
            "text": "The seat of territorial government from 1878 to 1883; one source reports the building burned in 2003."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the North Saskatchewan River from North Battleford."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Battleford was the capital of the North-West Territories until 1883, when Regina took over."
          }
        ],
        "link": {
          "label": "Parks Canada: Fort Battleford",
          "url": "https://www.parks.canada.ca/lhn-nhs/sk/battleford"
        },
        "checked": "November 2026"
      },
    },
    { name: 'River Valley', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Valley', tagLevel: 'blue', meta: 'Trails and lookouts above the North Saskatchewan',
      details: {
        "lead": "The Battlefords River Valley trail system above the North Saskatchewan, maintained jointly by the town and the city.",
        "see": [
          {
            "title": "Trans Canada Trail",
            "text": "A paved route of about 12.5 km along the river."
          },
          {
            "title": "North Shore Trail",
            "text": "Starts at the observation tower next to the Battlefords Goose Project."
          },
          {
            "title": "Finlayson Island",
            "text": "Trails for bird watching, hiking, fishing and dog walking."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the river between the city and the town."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Total length ranges from 19 to over 40 km depending on the source."
          }
        ],
        "link": {
          "label": "City of North Battleford: River Valley trails",
          "url": "https://cityofnb.ca/parks-recreation-culture/parks-trails-and-sports-fields/battlefords-river-valley-trails"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Central Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Paths and green space in the city',
      details: {
        "lead": "Paths and green space in the city.",
        "see": [
          {
            "title": "Green space",
            "text": "Paths and green space; no visitor details were found for this park."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In North Battleford."
          },
          {
            "label": "Good to know",
            "text": "The City of North Battleford lists its parks and greenspaces online."
          }
        ],
        "link": {
          "label": "City of North Battleford: parks",
          "url": "https://www.cityofnb.ca/parks-recreation-culture/parks-trails-and-sports-fields/parks-and-greenspaces/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Highway 16 Strip', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'danger', meta: 'Hotels, restaurants and the Western Development Museum',
      details: {
        "lead": "Hotels, restaurants and the Western Development Museum along Highway 16.",
        "see": [
          {
            "title": "Western Development Museum",
            "text": "The North Battleford branch’s Heritage Farm and Village; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along Highway 16."
          },
          {
            "label": "Good to know",
            "text": "Useful for hotels and a meal on the Yellowhead route."
          }
        ],
        "link": {
          "label": "Western Development Museum",
          "url": "https://wdm.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'King Hill', icon: '🌄', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', tag: 'Lookout', tagLevel: 'olive', meta: 'Panoramic views over the city and valley',
      details: {
        "lead": "King Hill Lookout, with a 360-degree view of the Battlefords, the river valley, the city and the town.",
        "see": [
          {
            "title": "The lookout",
            "text": "A viewpoint over the whole area."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the Battlefords; see the lookout’s page for directions."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          },
          {
            "label": "Good to know",
            "text": "Dress for the wind in winter."
          }
        ],
        "link": {
          "label": "Battlefords: King Hill Lookout",
          "url": "https://battlefords.ca/activities/king-hill-lookout"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Fort Battleford National Historic Site',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A North-West Mounted Police post established in 1876 in Battleford, across the river. Parks Canada interprets its role in the 1885 Resistance from several perspectives. Seasonal.',
      tags: [{ label: 'Parks Canada', level: 'safe' }, { label: 'Summer', level: 'caution' }],
      details: {
        "lead": "A North-West Mounted Police post established in 1876, now a Parks Canada site telling the story of the 1885 Resistance from several perspectives.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Guided tours",
                "text": "2026 tours ran June 2 to August 29 (Saturdays in June, Tuesday to Saturday in July and August), about 60 minutes."
              },
              {
                "title": "Free admission",
                "text": "Free during the Canada Strong Pass period, June 19 to September 7, 2026."
              },
              {
                "title": "Fees",
                "text": "Otherwise about $5 for adults and $4.50 for seniors, youth free (an older fee page)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The site is closed for the season."
              },
              {
                "title": "Hours",
                "text": "No confirmed 2026 daily hours were found."
              },
              {
                "title": "Gravesite",
                "text": "The Battleford Eight grave is nearby; visit respectfully."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $5 for adults outside free periods."
          },
          {
            "label": "Getting there",
            "text": "In Battleford, across the river."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Parks Canada: Fort Battleford",
          "url": "https://www.parks.canada.ca/lhn-nhs/sk/battleford"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gravesite of the Battleford Eight',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'Near Fort Battleford, the mass grave of eight Cree and Assiniboine men hanged in 1885 — a place of remembrance. Please visit respectfully.',
      tags: [{ label: 'Memorial', level: 'purple' }],
      details: {
        "lead": "The mass grave of eight Nêhiyawak (Cree) and Nakoda men executed on November 27, 1885, in Canada’s largest mass hanging. A place of remembrance; please visit respectfully.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "What happened",
                "text": "Six were convicted over the Frog Lake killings and two over the looting of Battleford, per Parks Canada."
              },
              {
                "title": "The grave",
                "text": "Rediscovered in 1972 by students following old fort plans; it is marked and has a headstone with the eight names."
              },
              {
                "title": "Where",
                "text": "Public property in the Town of Battleford, near the Eiling Kramer Campground and Fort Battleford."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Commemoration",
                "text": "Annual commemorations are held around November 27."
              },
              {
                "title": "Respect",
                "text": "Be quiet and respectful; do not climb or disturb the markers."
              },
              {
                "title": "Other memorial",
                "text": "A separate memorial in the town cemetery honours all those killed in the 1885 Rebellion."
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
            "text": "Near Fort Battleford in Battleford."
          },
          {
            "label": "Time to allow",
            "text": "A short, quiet visit."
          }
        ],
        "link": {
          "label": "Parks Canada: Fort Battleford history",
          "url": "https://parks.canada.ca/lhn-nhs/sk/battleford/culture/histoire-history"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Allen Sapp Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'A gallery dedicated to Allen Sapp, the celebrated Cree painter whose works record everyday life on the nearby Red Pheasant reserve.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "Home of the Gonor Collection of paintings by Allen Sapp, the Cree artist born on the Red Pheasant Reserve south of the city.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "By donation."
              },
              {
                "title": "Winter hours",
                "text": "October to May: Wednesday to Sunday noon–4 pm; closed Monday, Tuesday and statutory holidays."
              },
              {
                "title": "Summer hours",
                "text": "June to September: daily 11 am–5 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Accessible",
                "text": "Fully wheelchair accessible."
              },
              {
                "title": "Contact",
                "text": "1 Railway Avenue East; phone 306-445-1760."
              },
              {
                "title": "Classes",
                "text": "The city lists art classes and workshops at the gallery."
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
            "text": "1 Railway Avenue East."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "About the Allen Sapp Gallery",
          "url": "https://www.allensapp.com/about.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Western Development Museum',
      icon: '🚜', iconSrc: '/icons/attractions/ph_tractor-thin.svg',
      text: 'The North Battleford branch tells the story of prairie farming, with a heritage village and historic machinery.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "The North Battleford branch tells the story of prairie farming, with galleries and a Heritage Farm and Village.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "One listing: galleries and gift shop Tuesday to Sunday 9 am–5 pm; the Heritage Village is closed for the season."
              },
              {
                "title": "Events",
                "text": "History in Motion ran August 8–9, 2026 at $15 for adults."
              },
              {
                "title": "Free day",
                "text": "BMO Day, April 25, 2026, was free at all four WDM locations."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "No current 2026 rate was found; an old page lists $9 for adults."
              },
              {
                "title": "Confirm",
                "text": "Call 306-445-8033 or check wdm.ca."
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
            "text": "On Highway 16."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
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
      name: 'Government House (Battleford)',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Battleford was the first capital of the North-West Territories; the historic Government House site recalls that era.',
      tags: [{ label: 'Heritage', level: 'purple' }],
      details: {
        "lead": "The site of the seat of territorial government of the North-West Territories from 1878 to 1883, when Battleford was the capital.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Capital",
                "text": "Sources date Battleford’s capital status to 1876 or 1877 until 1883, when Regina took over."
              },
              {
                "title": "Recognition",
                "text": "Old Government House was recognised as a national historic site in 1973; a related designation for Government Ridge followed in 1984."
              },
              {
                "title": "The building",
                "text": "One source says the building burned down on June 7, 2003."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check",
                "text": "Confirm what can be seen on site with the Town of Battleford."
              },
              {
                "title": "Pair it",
                "text": "Visit alongside Fort Battleford."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "In Battleford."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          }
        ],
        "link": {
          "label": "Town of Battleford: The Old Government House",
          "url": "https://battleford.ca/the-old-government-house"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'River Valley Trails',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'Walking and cycling paths along the North Saskatchewan valley, with views of the bridges linking the Battlefords.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "Walking and cycling paths along the North Saskatchewan valley, maintained jointly by the town and the city.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trans Canada Trail",
                "text": "A paved route of about 12.5 km along the river."
              },
              {
                "title": "Finlayson Island",
                "text": "Trails for birding, hiking, fishing and dog walking."
              },
              {
                "title": "King Hill Lookout",
                "text": "A 360-degree view of the Battlefords and the valley."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "Sources range from over 19 km to over 40 km."
              },
              {
                "title": "Winter",
                "text": "The city also lists cross-country ski trails."
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
            "text": "Access points in both North Battleford and Battleford."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of North Battleford: River Valley trails",
          "url": "https://cityofnb.ca/parks-recreation-culture/parks-trails-and-sports-fields/battlefords-river-valley-trails"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Rivers and Prairie Lakes',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'The Battlefords Provincial Park', dist: '≈40 min north', text: 'Beaches, camping and fishing on Jackfish Lake.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'River Paddling', dist: 'North Saskatchewan', text: 'Experienced paddlers can float the wide river — check currents and sandbars.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Jackfish & Murray lakes', text: 'Pike and walleye. Licence required.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Valley Walks', dist: 'In the city', text: 'Trails with views across the river.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Sports', dist: 'Rinks & trails', text: 'Outdoor rinks and snowmobile trails.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Northern Lights', dist: 'Outside town', text: 'Clear winter nights can bring the aurora this far north.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Downtown', areaLevel: 'gold', text: 'Family restaurants and classic diners.' },
    { icon: '🫓', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread at events and some cafés.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local spots', areaLevel: 'olive', text: 'Prairie comfort food.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Local coffee shops.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Restaurants', areaLevel: 'blue', text: 'Pickerel from northern lakes.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Summer', areaLevel: 'safe', text: 'Pies and jams.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'River ice breaks up in April; the valley greens in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Heritage season', text: 'Fort Battleford and museums are open; lake days at Jackfish Lake.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden valley', text: 'Golden aspen in the river valley and harvest on the fields.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Very cold', text: 'Long, cold winters; many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Yellowhead Highway (Highway 16) links the Battlefords with Saskatoon to the southeast and Lloydminster to the west.',
      time: '≈1 h 45 min from Saskatoon',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'North Battleford has a regional airport; most travellers fly into Saskatoon (YXE).',
      time: '≈1 h 45 min from YXE',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches may stop here on the Yellowhead route. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no regular passenger rail service to North Battleford.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway 16',
      area: 'Hotels',
      text: 'Most hotels are along the Yellowhead.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Battleford', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=North%20Battleford%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few options near the galleries.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=North+Battleford+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Jackfish Lake',
      area: 'Camping & cabins',
      text: 'Provincial park campgrounds and lake cabins to the north.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'North Battleford Transit',
      text: 'The city runs a small bus service on weekdays only, with limited hours. Plan on a car or taxi for evenings, weekends and trips to Battleford.',
      linkLabel: 'City public transportation',
      linkUrl: 'https://www.cityofnb.ca/roads-parking-transportation/public-transportation/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the City of North Battleford transit page (undated — confirm before you travel). Exact change is needed for cash fares.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $4.00', '8-ride card: $24.00', 'Monthly pass: $60.00', 'Kids 6 and under: free'],
        },
        linkLabel: 'Fares & schedule',
        linkUrl: 'https://www.cityofnb.ca/roads-parking-transportation/public-transportation/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for Fort Battleford and the lakes.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Valley trails in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Heritage tip:',
      text: 'Visit Fort Battleford and the Battleford Eight gravesite on the same morning, then cross back for the Allen Sapp Gallery.',
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
      { label: 'North Battleford / SK', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'River valley trails: free' },
      { icon: '🌄', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', label: 'King Hill lookout: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year. Lloydminster and Alberta to the west use the same clock since Alberta stopped changing time in November 2026.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Weekday Buses', text: 'City buses do not run on weekends.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Sensitive History', text: 'The events of 1885 remain deeply significant for local First Nations — approach memorial sites with respect.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Temperatures often fall below −25 °C. Plug in your car overnight.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Bring repellent for summer evenings in the valley and at the lakes.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Right Hospital', text: 'Saskatchewan Hospital North Battleford is psychiatric only — for emergencies go to Battlefords Union Hospital.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'The Battlefords are on Treaty 6 territory, the traditional lands of the Cree, Assiniboine (Nakota) and other First Nations, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Battlefords Union Hospital', '1092 107th St', 'Emergency 24/7 · call 911'] },
  ],
};

export default NORTH_BATTLEFORD;
