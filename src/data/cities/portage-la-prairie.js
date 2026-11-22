// Portage la Prairie — данные страницы /city/portage-la-prairie (МАНИТОБА)
// Видео Портидж-ла-Прери в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — голландская мельница в Island Park
// на Crescent Lake, автор Shahnoor Habib Munmun, CC BY 3.0 — лицензия
// требует автора, отсюда heroCredit. Мельница 1950-х — Travel Manitoba.
// Население — перепись 2021 года (13 270).
// Городского автобуса нет (было только ТЭО транзита, WSP 2021).
// Больница: новое здание на Crescent Rd / River Rd достроено, открытие
// перенесено на осень 2026 (Southern Health) — на странице «уточняйте»;
// действующий адрес — 524 5th St SE.
// Банка Coca-Cola (бывшая водонапорная башня) — Travel Manitoba.
// Fort la Reine, Delta Marsh, поезда VIA — из общих знаний.

export const PORTAGE_LA_PRAIRIE = {
  slug: 'portage-la-prairie',
  name: 'Portage la Prairie',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Central Plains',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/PortageLaPrairie/hero.jpg',
  heroCredit: 'Photo: Shahnoor Habib Munmun / Wikimedia Commons · CC BY 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.9728, lon: -98.2926 },
  subtitle: 'The Island City of the Prairie',
  description:
    'Named for the old portage between the Assiniboine River and Lake Manitoba, Portage la Prairie is a farm city an hour west of Winnipeg wrapped around a crescent-shaped oxbow lake. Its island park, Dutch-style windmill and pioneer museum make an easy stop on the Trans-Canada, and Delta Marsh on Lake Manitoba draws birders from far away.',

  actions: [
    { label: 'Explore Portage', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈13.3K (2021)' },
    { label: 'Region', value: 'Central Plains' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈1 h by car' },
    { label: 'To Delta Marsh', value: '≈30 min by car' },
  ],

  badges: ['Island Park', 'Farm Country', 'Trans-Canada Stop'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '13,270', label: 'People in the 2021 census — a farm and food-processing hub west of Winnipeg', level: 'blue' },
    { value: '1950s', label: 'Decade the Dutch-style windmill was built in Island Park', level: 'gold' },
    { value: '1', label: 'Oxbow lake — Crescent Lake — curls around Island Park in the middle of the city', level: 'purple' },
    { value: '2026', label: 'A new regional hospital is finished, with opening set for fall 2026', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Island Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Heart', tagLevel: 'safe', meta: 'Park on an oxbow lake · Windmill · Splash Island waterpark · Wildlife viewing',
      details: {
        "lead": "A park on a former loop of the Assiniboine in the middle of town: lake, windmill, bandshell, waterpark and trails.",
        "see": [
          {
            "title": "Ukrainian Bandshell",
            "text": "Concerts in the Park run every second Thursday in summer, 6–8 pm; 2026 dates were July 9 and 23 and August 6 and 20."
          },
          {
            "title": "Splash Island Waterpark",
            "text": "Opened for the 2026 summer on June 6, first-come first-served; admission and hours at SplashIsland.ca. Summer only."
          },
          {
            "title": "Disc golf",
            "text": "A 17-hole public course, established in 2015."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "From Highway 1 take the Crescent Road exit to Royal Road South."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Most facilities are summer-only; check what is open in winter."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Island Park and Crescent Lake",
          "url": "https://www.travelmanitoba.com/directory/island-park-and-crescent-lake/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saskatchewan Avenue', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Main street with heritage buildings, shops and cafés',
      details: {
        "lead": "The main downtown street, with heritage buildings, in a Manitoba city.",
        "see": [
          {
            "title": "Portage la Prairie Public Building",
            "text": "At 55 Saskatchewan Avenue W, a National Historic Site since 1983, now City Hall."
          },
          {
            "title": "Dominion Post Office",
            "text": "At 97 Saskatchewan Avenue E, a three-storey stone building built 1895–98 and expanded in 1920, a municipal heritage site."
          },
          {
            "title": "Other heritage",
            "text": "The Newman Block (246 Saskatchewan Avenue E), the Land Titles Building (103 3rd Street NE, a provincial heritage site) and the CPR station (301 3rd Street NE)."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Shops and cafés keep their own hours."
          }
        ],
        "link": {
          "label": "Heritage Manitoba: Portage commercial landmarks",
          "url": "https://www.heritagemanitoba.ca/wp-content/uploads/2026/02/Portage-Commercial-Landmarks.pdf"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Crescent Lake Shore', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Lake', tagLevel: 'blue', meta: 'Walking path with historical signs around the lake',
      details: {
        "lead": "The oxbow lake around Island Park, once part of the Assiniboine River.",
        "see": [
          {
            "title": "The lake",
            "text": "An oxbow lake that was once part of the Assiniboine River, ringed by Island Park."
          },
          {
            "title": "Walk the shore",
            "text": "Walking paths run through the park around the lake."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Via Royal Road South."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "Check ice before walking on the lake in winter."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Island Park and Crescent Lake",
          "url": "https://www.travelmanitoba.com/directory/island-park-and-crescent-lake/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Trans-Canada Strip', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'olive', meta: 'Hotels, restaurants and fuel along Highway 1',
      details: {
        "lead": "Hotels, restaurants and fuel along Highway 1, and the Giant Coke Can.",
        "see": [
          {
            "title": "Giant Coke Can",
            "text": "A 26 m tall can, by Travel Manitoba’s account in the CanadInns parking lot; sources disagree on its history."
          },
          {
            "title": "Halfway point",
            "text": "The city is said to lie about halfway between the Saskatchewan and Ontario borders."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along Highway 1 and Highway 1A."
          },
          {
            "label": "Good to know",
            "text": "Useful for a stopover on the Trans-Canada route."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Portage la Prairie",
          "url": "https://www.travelmanitoba.com/places/must-see/portage-la-prairie/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Fort la Reine Area', icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Pioneer museum village on the east edge of the city',
      details: {
        "lead": "The pioneer museum village on the edge of the city.",
        "see": [
          {
            "title": "Fort la Reine Museum",
            "text": "Described as 25 or more heritage buildings on 5 acres of prairie. The 2026 season opened May 15; listed hours were 10 am–5 pm daily in season."
          },
          {
            "title": "Off-season",
            "text": "Access is limited; one listing says private tours can be booked in advance."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "2652 Saskatchewan Avenue; sources disagree on whether it is East or West, so confirm."
          },
          {
            "label": "Contact",
            "text": "Phone (204) 857-3259."
          },
          {
            "label": "Good to know",
            "text": "Closed for the season in November."
          }
        ],
        "link": {
          "label": "Fort la Reine Museum",
          "url": "https://canada.museum.ca/museum/fort-la-reine-museum"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Poplar Bluff', icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', tag: 'Industry', tagLevel: 'caution', meta: 'Industrial park with a major potato-processing plant (Simplot)',
      details: {
        "lead": "An industrial area on the edge of the city.",
        "see": [
          {
            "title": "Potato processing",
            "text": "Simplot’s plant sits in the Bluff Industrial Park, which opened in 2003; McCain has also operated a plant in Portage la Prairie for years."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of the city."
          },
          {
            "label": "Good to know",
            "text": "An industrial area, not a sightseeing destination."
          }
        ],
        "link": {
          "label": "Manitoba potato profile 2025",
          "url": "https://www.gov.mb.ca/agriculture/markets-and-statistics/crop-statistics/pubs/potato-profile-2025.pdf"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Island Park & Crescent Lake',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'An oxbow lake curls around a large island park in the centre of town, with a walking path, playground, the Ukrainian bandshell, a disc golf course, the Splash Island waterpark and wildlife viewing.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "An island park on an oxbow lake in the centre of town, with a windmill, bandshell, waterpark and trails.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Ukrainian Bandshell",
                "text": "Concerts in the Park run every second Thursday in summer."
              },
              {
                "title": "Splash Island",
                "text": "The waterpark opened for 2026 on June 6; summer only."
              },
              {
                "title": "Disc golf",
                "text": "A 17-hole public course."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Facilities are mostly summer-only; check what is open in winter."
              },
              {
                "title": "Access",
                "text": "Travel Manitoba lists full wheelchair access."
              },
              {
                "title": "Contact",
                "text": "Phone 204-239-8334."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park free; the waterpark charges."
          },
          {
            "label": "Getting there",
            "text": "Highway 1 to the Crescent Road exit, then Royal Road South."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Island Park and Crescent Lake",
          "url": "https://www.travelmanitoba.com/directory/island-park-and-crescent-lake/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dutch-Style Windmill',
      icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg',
      text: 'A wooden windmill built in the 1950s on the shore of Crescent Lake — the classic photo stop, especially in autumn colour.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo stop', level: 'gold' }],
      details: {
        "lead": "A wooden windmill in Island Park, first erected in the 1950s by the city’s Dutch community, and restored in 1982.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Origin",
                "text": "Commissioned by the large Dutch population that immigrated after the Second World War; one guide calls it a gift of thanks to the city."
              },
              {
                "title": "Restoration",
                "text": "A plaque says it was saved from demolition and restored in 1982."
              },
              {
                "title": "Setting",
                "text": "On the oxbow lake in Island Park."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Photos",
                "text": "A classic photo stop, especially in autumn colour."
              },
              {
                "title": "Free",
                "text": "Free to see."
              },
              {
                "title": "Exact date",
                "text": "No source gave the exact build date or builder."
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
            "text": "In Island Park."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Island Park and Crescent Lake",
          "url": "https://www.travelmanitoba.com/directory/island-park-and-crescent-lake/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fort la Reine Museum',
      icon: '🏚️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'A pioneer village museum with historic buildings, a railway car and farm machinery, named after the French fur-trade post built near here in the 1700s. Seasonal.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "A pioneer village museum of 25 or more heritage buildings on 5 acres of prairie, named after the French fur-trade post of the 1700s.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "Opened May 15; listed hours 10 am–5 pm daily in season (May to September)."
              },
              {
                "title": "The village",
                "text": "Historic buildings and exhibits across the grounds."
              },
              {
                "title": "Off-season",
                "text": "Access is limited; private tours may be booked in advance."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "An old listing gave $10 for adults, $8 for students and seniors and $5 for children; confirm the current price."
              },
              {
                "title": "Membership",
                "text": "Members get free admission all summer."
              },
              {
                "title": "Contact",
                "text": "Phone (204) 857-3259."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; about $10 on an old listing."
          },
          {
            "label": "Getting there",
            "text": "2652 Saskatchewan Avenue; sources disagree on the exact junction."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Fort la Reine Museum",
          "url": "https://canada.museum.ca/museum/fort-la-reine-museum"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Delta Marsh',
      icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'A large freshwater marsh on the south shore of Lake Manitoba, a Ramsar wetland and Important Bird Area and a key staging area for migrating waterfowl.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
      details: {
        "lead": "A large marsh on the south shore of Lake Manitoba, about 24 km north of Portage la Prairie, a Ramsar wetland and an Important Bird Area.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Waterfowl",
                "text": "An important staging marsh for migrating waterfowl; the Delta Waterfowl Research Station was founded in 1938."
              },
              {
                "title": "Size",
                "text": "About 33,000 acres by a 1964 count."
              },
              {
                "title": "Recognition",
                "text": "Ramsar Wetland of International Importance and Important Bird Area."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Field station",
                "text": "The University of Manitoba’s field station closed in 2011 after flooding damaged the buildings."
              },
              {
                "title": "Bird counts",
                "text": "No migration numbers were found; spring and fall are the busy seasons."
              },
              {
                "title": "Access",
                "text": "Check access with local sources before going."
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
            "text": "North of Portage la Prairie; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Spring and fall migration."
          }
        ],
        "link": {
          "label": "Delta Marsh",
          "url": "https://en.wikipedia.org/wiki/Delta_Marsh"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Giant Coke Can',
      icon: '🥫', iconSrc: '/icons/attractions/ph_cylinder-thin.svg',
      text: 'Billed as the World’s Largest Coca-Cola Can — a former water tower turned into a giant can, in a hotel parking lot by the highway. A quick, quirky photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Roadside', level: 'danger' }],
      details: {
        "lead": "Billed as the World’s Largest Coca-Cola Can, a former water tower about 26 m tall near the highway.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Origin",
                "text": "One source says it was built as a water tower in 1905 and moved; CTV says it was moved across town in the mid-1980s. Sources conflict."
              },
              {
                "title": "Coca-Cola",
                "text": "The drink maker reportedly offered to pay for the paint."
              },
              {
                "title": "Location",
                "text": "Sources place it in the CanadInns parking lot or between Canadian Tire and CanadInns on Saskatchewan Avenue West."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Quick stop",
                "text": "A short roadside photo stop."
              },
              {
                "title": "Free",
                "text": "Free to see."
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
            "text": "Along the Trans-Canada route through the city."
          },
          {
            "label": "Time to allow",
            "text": "10 minutes."
          }
        ],
        "link": {
          "label": "Travel Manitoba: roadside attractions",
          "url": "https://www.travelmanitoba.com/blog/9-awesome-roadside-attractions-in-western-manitoba/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Saskatchewan Avenue',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The downtown main street, with early-1900s buildings, local shops and places to eat.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk', level: 'olive' }],
      details: {
        "lead": "The downtown main street with heritage buildings, including the National Historic Site Public Building, now City Hall.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Public Building",
                "text": "At 55 Saskatchewan Avenue W, a National Historic Site since 1983."
              },
              {
                "title": "Dominion Post Office",
                "text": "At 97 Saskatchewan Avenue E, built 1895–98 and expanded in 1920."
              },
              {
                "title": "Other",
                "text": "The Newman Block, Land Titles Building and CPR station nearby."
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
                "title": "Heritage list",
                "text": "Heritage Manitoba has a Portage commercial landmarks guide."
              },
              {
                "title": "Shops",
                "text": "Hours vary."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk."
          },
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Heritage Manitoba: Portage commercial landmarks",
          "url": "https://www.heritagemanitoba.ca/wp-content/uploads/2026/02/Portage-Commercial-Landmarks.pdf"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lake, Marsh and Prairie',
  outdoor: [
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Delta Marsh Birding', dist: '≈30 min north', text: 'Waterfowl, songbirds and shorebirds by the thousands in spring and fall.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Crescent Lake Path', dist: 'In town', text: 'An easy loop around the lake with historical signs.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Manitoba Beaches', dist: '≈30 min north', text: 'Delta Beach and other shoreline spots on a huge prairie lake.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Crescent Lake', text: 'Calm water for canoes and kayaks in summer.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Crescent Lake', text: 'Skating on the lake when the city clears the ice.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', name: 'Prairie Drives', dist: 'Around town', text: 'Endless fields of wheat, canola and potatoes — golden at harvest time.' },
  ],

  food: [
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Local Potatoes', area: 'Farm country', areaLevel: 'gold', text: 'Portage sits in a major potato-growing area — fries taste better here.' },
    { icon: '🍓', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'U-Pick Berries', area: 'Summer farms', areaLevel: 'danger', text: 'Strawberry and saskatoon u-pick farms near town in season.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Highway Diners', area: 'Trans-Canada', areaLevel: 'olive', text: 'Classic road-trip stops along Highway 1.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Saskatchewan Ave', areaLevel: 'blue', text: 'Coffee and baking on the main street.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local restaurants', areaLevel: 'purple', text: 'Prairie Ukrainian comfort food.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm Stands', area: 'Late summer', areaLevel: 'safe', text: 'Sweet corn and vegetables sold roadside.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Bird migration', text: 'Huge flocks pass Delta Marsh; the Assiniboine can run high during the melt.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Park season', text: 'Warm days, the water park and lake activities in Island Park.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest & geese', text: 'Golden fields, autumn colour around the windmill and migrating geese.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Open prairie means strong winds and blowing snow; skating on the lake.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes right by the city; the Yellowhead (Highway 16) branches off west toward Saskatoon.',
      time: '≈1 h from Winnipeg',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail trains between Winnipeg and the west, and the Winnipeg–Churchill train, stop at Portage la Prairie a few times a week. Check current schedules.',
      time: '≈1 h 30 min from Winnipeg',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Winnipeg (YWG) is the nearest commercial airport.',
      time: '≈1 h by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches between Winnipeg and Brandon may stop here. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Trans-Canada Hotels',
      area: 'Highway 1',
      text: 'Most hotels are along the highway — convenient for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Portage+la+Prairie', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Portage%20la%20Prairie%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Near Island Park',
      text: 'A few options close to Saskatchewan Avenue and the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Portage+la+Prairie+Manitoba', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Lake Manitoba',
      area: 'Cottages',
      text: 'Cabins and campgrounds on the lake shore to the north.',
      links: [
        { label: 'Travel Manitoba', url: 'https://www.travelmanitoba.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No City Buses',
      text: 'Portage la Prairie has no public bus system — the city has only studied the idea. Downtown and Island Park are walkable; drive or take a taxi further out.',
      linkLabel: 'City of Portage la Prairie',
      linkUrl: 'https://www.city-plap.com/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
        title: 'Taxis',
        text: 'Local taxi companies operate in the city.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local', 'Walking: downtown & park', 'Car: for Delta Marsh'],
        },
        linkLabel: 'City of Portage la Prairie',
        linkUrl: 'https://www.city-plap.com/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Island Park and downtown are close together.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat streets and the lake path.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Delta Marsh and Lake Manitoba.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'For trips around town.' },
        ],
      },
    ],
    proTip: {
      label: 'Road-trip tip:',
      text: 'Driving the Trans-Canada? Take the short detour into town for a walk around Crescent Lake and the windmill — it beats a highway rest stop.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Portage / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', label: 'Island Park & windmill: free' },
      { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', label: 'Delta Marsh viewing: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'New Hospital', text: 'A new Portage Regional Health Centre was completed with opening planned for fall 2026. Check Southern Health-Santé Sud for which building runs the emergency department when you visit.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Open fields mean strong winds and blowing snow in winter — check highway conditions.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Marsh country — bring repellent from June to August, especially at Delta Marsh.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'River Levels', text: 'The Assiniboine floods in some springs; the Portage Diversion channel sends water north to Lake Manitoba.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Easy Stop', text: 'An hour from Winnipeg — a good first or last stop on a western road trip.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Portage la Prairie is on Treaty 1 territory, the traditional lands of the Anishinaabe and Dakota peoples and the homeland of the Red River Métis; Long Plain, Dakota Tipi and Dakota Plains First Nations are nearby.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Portage Regional Health Centre', '524 5th St SE (new building opening fall 2026)', 'Emergencies: call 911'] },
  ],
};

export default PORTAGE_LA_PRAIRIE;
