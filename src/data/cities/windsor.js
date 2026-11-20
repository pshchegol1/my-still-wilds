// Windsor — данные страницы /city/windsor (Виндзор, ОНТАРИО)
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Mohit Singh, "snowy waterfront in Windsor, Canada at sunrise".
// Проверено по кадрам: заснеженная набережная Виндзора, лёд на реке
// Детройт и мост Амбассадор на горизонте — это канадский берег, а не
// Детройт и не английский Виндзор. Таймлапс 21 с; оригинал 44 МБ при
// 16,7 Мбит/с — пережат до ~6,4 МБ; постер — первый кадр.
// Население — перепись 2021 года. Тариф Transit Windsor — со страницы
// города (без даты); с 5 октября 2026 введена оплата через Umo.
// Мост Гордона Хоу открылся для машин 27 июля 2026.

export const WINDSOR = {
  slug: 'windsor',
  name: 'Windsor',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Across the River from Detroit',
  accentLevel: 'caution',
  heroIcon: '🌉',
  heroImage: '/Cities/Windsor/hero-poster.jpg',
  heroVideo: '/Cities/Windsor/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 42.3149, lon: -83.0364 },
  subtitle: 'The City That Looks North to the USA',
  description:
    'Canada’s southernmost city and its busiest border crossing, facing the Detroit skyline across a river less than a kilometre wide — and, oddly, looking north to it. A car town, a former rum-running capital, and the last stop on the Underground Railroad for many people escaping slavery.',

  actions: [
    { label: 'Explore Windsor', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈230K (2021)' },
    { label: 'River', value: 'Detroit River' },
    { label: 'Crossings', value: '2 bridges · tunnel' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈370 km · 3.5h' },
    { label: 'To Detroit', value: '≈5 min' },
  ],

  badges: ['Border City', 'Automotive Capital', 'Underground Railroad'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '2026', label: 'The Gordie Howe International Bridge opens to traffic on 27 July — the new crossing to Detroit', level: 'blue' },
    { value: '1930', label: 'The Detroit–Windsor Tunnel opens, a year after the Ambassador Bridge — the world’s first international road tunnel under water', level: 'gold' },
    { value: '1851', label: 'Sandwich First Baptist Church is completed by people who escaped slavery — still an active congregation', level: 'purple' },
    { value: '1920s', label: 'Prohibition turns the Detroit River into one of North America’s great smuggling routes', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Downtown & the Riverfront', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Riverfront trail · Detroit skyline views · Caesars Windsor · Tunnel entrance',
      details: {
        "lead": "The riverfront trail with the Detroit skyline directly across the water, Caesars Windsor and the tunnel entrance.",
        "see": [
          {
            "title": "Riverfront Trail",
            "text": "A path of about 5 km one way runs between the Ambassador Bridge and the Wildflower Garden, passing the tunnel at about 3 km. Round-trip routes are listed at 9.5 km."
          },
          {
            "title": "The skyline",
            "text": "Because the river bends, Detroit lies north of Windsor here."
          },
          {
            "title": "Crossings",
            "text": "The Ambassador Bridge (1929), the Detroit–Windsor Tunnel (1930) and the new Gordie Howe International Bridge."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the downtown waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Tolls on the Ambassador Bridge and tunnel were not checked; look them up before you cross."
          }
        ],
        "link": {
          "label": "Tourism Windsor Essex",
          "url": "https://www.visitwindsoressex.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Walkerville', icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'Hiram Walker distillery town · Restored brick streets · Cafés and pubs',
      details: {
        "lead": "The Hiram Walker distillery town, with restored brick streets, cafés and pubs.",
        "see": [
          {
            "title": "Hiram Walker",
            "text": "Hiram Walker founded a distillery here in the 1850s and built a company town around it."
          },
          {
            "title": "Prohibition Week",
            "text": "In 2026 Prohibition Week ran August 17–23 with tours of Walkerville, Willistead Manor and the Chimczuk Museum. Check whether it returns in 2027."
          },
          {
            "title": "Heritage streets",
            "text": "The district has some of the city’s best-preserved streets."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of downtown, along the river; the riverfront path runs about 5 km to the distillery."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Distillery tour details were not confirmed; check before visiting."
          }
        ],
        "link": {
          "label": "Prohibition in Windsor Essex",
          "url": "https://www.visitwindsoressex.com/prohibition/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Olde Sandwich Town', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Oldest', tagLevel: 'purple', meta: 'One of the oldest European settlements in Ontario · Sandwich First Baptist Church · Under the Ambassador Bridge',
      details: {
        "lead": "One of the oldest European settlements in Ontario, under the Ambassador Bridge.",
        "see": [
          {
            "title": "Sandwich First Baptist Church",
            "text": "3652 Peter Street. Built in 1851 and designated a national historic site in 1999. A 2026 tour schedule was not found; call (519) 252-4917 to confirm."
          },
          {
            "title": "Old streets",
            "text": "Historic streets in one of the oldest settlements in the province."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, beside the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Visit by arrangement; hours are unclear."
          }
        ],
        "link": {
          "label": "Tourism Windsor Essex: Sandwich First Baptist Church",
          "url": "https://www.visitwindsoressex.com/places/sandwich-first-baptist-church/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Via Italia (Erie Street)', icon: '🍝', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', tag: 'Little Italy', tagLevel: 'olive', meta: 'Italian restaurants, bakeries and cafés',
      details: {
        "lead": "Italian restaurants, bakeries and cafés along Erie Street.",
        "see": [
          {
            "title": "Erie Street",
            "text": "Italian restaurants, bakeries and cafés along the street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of downtown."
          },
          {
            "label": "Time to allow",
            "text": "A meal."
          }
        ],
        "link": {
          "label": "Tourism Windsor Essex",
          "url": "https://www.visitwindsoressex.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Ford City', icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', tag: 'East', tagLevel: 'blue', meta: 'Neighbourhood that grew around the Ford plant · Drouillard Road',
      details: {
        "lead": "The neighbourhood that grew around the Ford plant, along Drouillard Road.",
        "see": [
          {
            "title": "Drouillard Road",
            "text": "The neighbourhood’s main street."
          },
          {
            "title": "Industrial history",
            "text": "The area grew around the Ford plant."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of downtown."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          }
        ],
        "link": {
          "label": "Tourism Windsor Essex",
          "url": "https://www.visitwindsoressex.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South Windsor & LaSalle', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Suburbs toward the Gordie Howe bridge · Ojibway Prairie nature reserves',
      details: {
        "lead": "Suburbs toward the Gordie Howe bridge, with the Ojibway Prairie nature reserves.",
        "see": [
          {
            "title": "Gordie Howe International Bridge",
            "text": "The cable-stayed bridge opened to vehicles on July 27, 2026. The pedestrian and cycling path opened on August 5, with no toll, but travel documents are required."
          },
          {
            "title": "Ojibway Prairie",
            "text": "Nature reserves with prairie and woodland."
          }
        ],
        "practical": [
          {
            "label": "Vehicle tolls",
            "text": "Sources give $5.75 USD ($8 CAD) each way for cars."
          },
          {
            "label": "On the path",
            "text": "Electric scooters, skateboards and roller skates are not allowed."
          },
          {
            "label": "Getting there",
            "text": "South-west of downtown; a car is easiest."
          }
        ],
        "link": {
          "label": "Trans Canada Trail: Gordie Howe path",
          "url": "https://tctrail.ca/news/gordie-howe-international-bridge-opens-to-pedestrians-and-cyclists-completing-first-international-crossing-on-the-trans-canada-trail/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Riverfront Trail & Detroit Skyline',
      icon: '🌆', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: 'A long riverside park and trail runs along Windsor’s waterfront with the Detroit skyline directly across the water — a view that most Canadians never see from their own side. Because the river bends, Detroit actually lies north of Windsor here.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best at sunset', level: 'gold' }],
      details: {
        "lead": "A long riverside park and trail runs along Windsor’s waterfront with the Detroit skyline directly across the water.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 5 km one way between the Ambassador Bridge and the Wildflower Garden; routes are listed at 9.5 km round trip."
              },
              {
                "title": "The tunnel",
                "text": "The route passes the Detroit–Windsor Tunnel at about 3 km."
              },
              {
                "title": "To Walkerville",
                "text": "A paved stretch of about 5 km runs east to the Hiram Walker distillery."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "The view",
                "text": "Detroit lies north of Windsor because the river bends."
              },
              {
                "title": "Free",
                "text": "Free to walk or cycle."
              },
              {
                "title": "Longer routes",
                "text": "An Ontario By Bike regional itinerary is 34 km."
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
            "text": "Along the downtown waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Windsor Riverfront Trail (AllTrails)",
          "url": "https://www.alltrails.com/en-gb/trail/canada/ontario/windsor-riverfront-trail"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sandwich First Baptist Church',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'Built by a congregation formed around 1840 of people who had escaped slavery in the United States; the brick church was completed in 1851. It sheltered newly arrived freedom seekers, and members helped make its bricks by hand. A national historic site and one of the oldest continuously active Black churches in Canada.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Active church', level: 'purple' }],
      details: {
        "lead": "Built in 1851 by a congregation that included people who had escaped slavery in the United States. A national historic site, designated in 1999.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The church",
                "text": "Built to accommodate the growing Black community seeking refuge through the Underground Railroad."
              },
              {
                "title": "Where",
                "text": "3652 Peter Street, Windsor."
              },
              {
                "title": "A tour",
                "text": "A reviewer reported a tour that included the underground tunnel area."
              }
            ]
          },
          {
            "title": "Visiting",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Unclear: an old listing gave Sunday 11 am–1 pm only. Call (519) 252-4917 to confirm 2026 tour times."
              },
              {
                "title": "Active congregation",
                "text": "It is a church as well as a historic site; be respectful."
              },
              {
                "title": "Doors Open",
                "text": "It has been opened for Doors Open Ontario weekends."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check when you call."
          },
          {
            "label": "Getting there",
            "text": "In Olde Sandwich Town, west of downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism Windsor Essex",
          "url": "https://www.visitwindsoressex.com/places/sandwich-first-baptist-church/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gordie Howe International Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'The new cable-stayed bridge to Detroit opened to vehicles on 27 July 2026, with a toll-free pedestrian and cycling path opening on 5 August. It joins the Ambassador Bridge (1929) and the Detroit–Windsor Tunnel (1930) as the city’s crossings.',
      tags: [{ label: 'Opened 2026', level: 'blue' }, { label: 'Toll', level: 'caution' }],
      details: {
        "lead": "The cable-stayed bridge to Detroit opened to vehicles on July 27, 2026, with a pedestrian and cycling path opening on August 5.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Opening",
                "text": "Construction was completed in June 2026 and the bridge was inaugurated on July 24."
              },
              {
                "title": "Path",
                "text": "The roughly 1.5-mile path is separated from vehicles by barriers and is toll-free."
              },
              {
                "title": "Vehicle tolls",
                "text": "Sources give $5.75 USD ($8 CAD) each way for cars."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Documents",
                "text": "Pedestrians and cyclists must present approved travel documents to cross the border."
              },
              {
                "title": "Not allowed",
                "text": "Electric scooters, skateboards and roller skates are not allowed on the path."
              },
              {
                "title": "Cost figures",
                "text": "Reported costs differ, from CA$3.8 billion to about $4.4 billion."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free on foot or bike; cars pay a toll."
          },
          {
            "label": "Getting there",
            "text": "In the south-west of the city, toward LaSalle."
          },
          {
            "label": "Good to know",
            "text": "The Ambassador Bridge and the tunnel remain open."
          }
        ],
        "link": {
          "label": "Gordie Howe International Bridge",
          "url": "https://en.wikipedia.org/wiki/Gordie_Howe_International_Bridge"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Walkerville & Hiram Walker',
      icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      text: 'Hiram Walker founded a distillery here in the 1850s and built a company town around it; Canadian Club whisky is still made in Walkerville. The heritage district has some of the city’s best-preserved streets.',
      tags: [{ label: 'Distillery tours', level: 'gold' }, { label: 'Walkable', level: 'safe' }],
      details: {
        "lead": "Hiram Walker founded a distillery here in the 1850s and built a company town around it. The heritage district has some of the city’s best-preserved streets.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Company town",
                "text": "Restored brick streets, cafés and pubs."
              },
              {
                "title": "Canadian Club",
                "text": "Canadian Club whisky is still made in Walkerville."
              },
              {
                "title": "Prohibition Week",
                "text": "Ran August 17–23, 2026, with tours of Walkerville, Willistead Manor and the Chimczuk Museum."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Next year",
                "text": "Check whether Prohibition Week returns in 2027."
              },
              {
                "title": "Distillery tours",
                "text": "No distillery tour details were found."
              },
              {
                "title": "By the river",
                "text": "The riverfront path runs about 5 km east to the distillery."
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
            "text": "East of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Prohibition in Windsor Essex",
          "url": "https://www.visitwindsoressex.com/prohibition/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rum-Running History',
      icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'During US Prohibition, liquor flowed across the Detroit River from Windsor by boat, car and even across the winter ice. The waterfront and Walkerville still carry stories of the era.',
      tags: [{ label: 'History', level: 'danger' }],
      details: {
        "lead": "During US Prohibition (1920–1933), liquor flowed across the Detroit River from Windsor by boat, car and even across the winter ice.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Rum Runners Tour",
                "text": "A four-hour live-action bus tour with costumed characters. 2026 dates included September 27 and October 25, which have passed."
              },
              {
                "title": "Prohibition Week",
                "text": "Ran August 17–23, 2026."
              },
              {
                "title": "Windsor–Detroit funnel",
                "text": "The area was known as a major bootlegging hub."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Next season",
                "text": "Check encoreproductionswindsor.com for 2027 dates."
              },
              {
                "title": "Promotional figures",
                "text": "Claims such as 75% of America’s alcohol crossing here are promotional estimates."
              },
              {
                "title": "Walkerville",
                "text": "The waterfront and Walkerville still carry stories of the era."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The tour is paid; a Frenchtown group listing showed $158 for a bus trip."
          },
          {
            "label": "Getting there",
            "text": "Tours start in Windsor."
          },
          {
            "label": "Best time",
            "text": "Autumn tour dates and Prohibition Week in August."
          }
        ],
        "link": {
          "label": "The Rum Runners Tour",
          "url": "https://encoreproductionswindsor.com/rum-runners/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Point Pelee National Park',
      icon: '🦋', iconSrc: '/icons/attractions/ph_butterfly-thin.svg',
      text: 'About an hour southeast, the southernmost point of mainland Canada — a sandspit into Lake Erie famous for spring bird migration and autumn monarch butterflies. A Parks Canada pass is required.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Park pass', level: 'caution' }],
      details: {
        "lead": "About an hour south-east, the southernmost point of mainland Canada, a sandspit into Lake Erie.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bird migration",
                "text": "Famous for spring bird migration and autumn monarch butterflies."
              },
              {
                "title": "Winter hours",
                "text": "Last winter the park was open 7 am to dusk, and the Visitor Centre was open weekends only; the 2026–27 schedule was not found."
              },
              {
                "title": "Shuttle",
                "text": "The Tip shuttle was closed in winter last year."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fees",
                "text": "Sources give about $10 for adults and $19.50 for families (April to October) and lower in winter; check Parks Canada."
              },
              {
                "title": "Confirm",
                "text": "Call 519-322-2365 for winter hours, fees and shuttle status."
              },
              {
                "title": "Pass",
                "text": "A Parks Canada pass is required."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $8–10 for adults; confirm."
          },
          {
            "label": "Getting there",
            "text": "About an hour south-east of Windsor by car."
          },
          {
            "label": "Best time",
            "text": "May for birds; September and October for monarchs."
          }
        ],
        "link": {
          "label": "Parks Canada: Point Pelee hours",
          "url": "https://parks.canada.ca/pn-np/on/pelee/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River, Prairie and Lake Erie',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Riverfront Trail', dist: 'Downtown', text: 'Flat, paved and right on the water, with sculpture parks and views of Detroit.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', name: 'Ojibway Prairie', dist: 'West Windsor', text: 'Rare tallgrass prairie and oak savannah, protected in a cluster of nature reserves inside the city.' },
    { icon: '🦋', iconSrc: '/icons/attractions/ph_butterfly-thin.svg', name: 'Point Pelee', dist: '≈1h', text: 'Spring warbler migration and the autumn monarch gathering draw birders from across the continent.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', name: 'Essex County Wine Trail', dist: 'South county', text: 'Wineries along Lake Erie’s north shore, one of Canada’s warmest growing regions.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Erie Beaches', dist: '≈45 min', text: 'Warm, shallow water in summer. Check beach water-quality advisories before swimming.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Detroit River', text: 'Walleye in spring draw crowds of anglers. An Ontario licence is required.' },
  ],

  food: [
    { icon: '🍕', iconSrc: '/icons/attractions/ph_pizza-thin.svg', title: 'Windsor-Style Pizza', area: 'City-wide', areaLevel: 'danger', text: 'Shredded pepperoni and a sturdy crust — a local style Windsorites defend loudly.' },
    { icon: '🍝', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Via Italia', area: 'Erie Street', areaLevel: 'olive', text: 'Little Italy’s restaurants, bakeries and gelato.' },
    { icon: '🥙', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Middle Eastern Food', area: 'City-wide', areaLevel: 'purple', text: 'A large Lebanese and Arab community makes Windsor strong for shawarma and grills.' },
    { icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Whisky', area: 'Walkerville', areaLevel: 'gold', text: 'Canadian whisky made in the city since the 1850s.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Essex County Wine', area: 'South county', areaLevel: 'safe', text: 'Lake Erie North Shore wineries a short drive away.' },
    { icon: '🍅', iconSrc: '/icons/attractions/ph_pepper-thin.svg', title: 'Greenhouse Country', area: 'Leamington', areaLevel: 'blue', text: 'Leamington’s greenhouses produce vegetables for much of Canada; farm stands in summer.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Bird migration', text: 'Early spring by Canadian standards, with migration peaking at Point Pelee in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Hot and humid', text: 'One of the hottest, most humid places in Canada. Riverfront festivals and fireworks; thunderstorms are common.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest and monarchs', text: 'Wine harvest in Essex County and monarch butterflies gathering at Point Pelee.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Grey and mild-ish', text: 'Milder than most of Canada but grey, with ice on the river and occasional heavy snow.' },
  ],

  gettingThere: [
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From Detroit',
      text: 'Three crossings: the Ambassador Bridge, the Detroit–Windsor Tunnel into downtown, and the Gordie Howe International Bridge (opened July 2026). All need a passport or equivalent; check border wait times.',
      time: '≈5–15 min plus border',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'Windsor is the western end of VIA Rail’s Québec City–Windsor corridor, with trains to London and Toronto.',
      time: '≈4h from Toronto',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Highway 401',
      text: 'Highway 401 ends in Windsor, connecting to the new Gordie Howe bridge. Heavy truck traffic.',
      time: '≈3.5h from Toronto',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Windsor International Airport has limited flights. Detroit Metropolitan (DTW) across the border is a major hub but means a border crossing.',
      time: '≈30 min to DTW plus border',
    },
  ],

  stay: [
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Downtown Riverfront',
      area: 'Walkable · Skyline views',
      text: 'Hotels on the river with views of Detroit, including the casino resort.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Windsor+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Windsor%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      title: 'Walkerville',
      area: 'Heritage · Quieter',
      text: 'Short-term rentals and small inns in the historic district.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Walkerville+Windsor', level: 'blue' },
      ],
    },
    {
      icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      title: 'Essex County',
      area: 'Wine country · Car needed',
      text: 'Inns and B&Bs near the wineries and Lake Erie.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kingsville+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Transit Windsor',
      text: 'City buses cover downtown, the university, the college and suburbs. A new Umo payment system launched on 5 October 2026; exact cash is still accepted. Point Pelee and the wine country need a car.',
      linkLabel: 'Transit Windsor',
      linkUrl: 'https://www.citywindsor.ca/residents/transit-windsor/fares',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'The city’s fares page lists the adult cash fare below, including a two-hour transfer (no date is shown). Confirm current fares, especially after the switch to Umo.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash (exact): $3.95', 'Includes 2-hour transfer', 'Umo app and card from Oct 2026'],
        },
        linkLabel: 'Fares and passes',
        linkUrl: 'https://www.citywindsor.ca/residents/transit-windsor/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way around Essex County.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Riverfront Trail and a growing network of bike lanes.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available; cross-border trips need a driver who can cross.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the riverfront and Walkerville are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Border tip:',
      text: 'Check live border wait times for all three crossings before you go. The tunnel is quickest for downtown-to-downtown trips; the bridges suit highway traffic.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Windsor hotels and short-term rentals charge a 6% Municipal Accommodation Tax (since April 2025) for stays of 30 days or fewer, and HST applies on top of it. Across the river, Michigan prices are in US dollars with US taxes.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Windsor / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 13% HST + 6% MAT' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Wine and alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tours and admissions: 13% HST' },
    ],
    exempt: [
      { icon: '🌆', iconSrc: '/icons/attractions/ph_buildings-thin.svg', label: 'Riverfront Trail and parks: free' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays over 30 days: no MAT' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg', title: 'Passports', text: 'Crossing to Detroit requires a passport or other approved document, and returning to Canada means customs. Check what you can bring back.' },
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Two Currencies', text: 'US dollars are often accepted near the border but at poor rates. Use cards or Canadian cash.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Heat & Humidity', text: 'Summer heat and humidity are among the highest in Canada. Watch for heat warnings.' },
    { icon: '🧭', iconSrc: '/icons/attractions/ph_compass-thin.svg', title: 'Detroit Is North', text: 'Because the river bends, Detroit lies north of downtown Windsor — a favourite local fact.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as Detroit.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Transit Windsor moved to Umo in October 2026; exact cash still works.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Windsor is on the traditional territory of the Three Fires Confederacy — the Ojibwe, Odawa and Potawatomi. Caldwell First Nation and Walpole Island First Nation are the nearest First Nations.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Windsor Regional Hospital — Ouellette Campus', '1030 Ouellette Avenue', 'Emergencies: call 911'] },
  ],
};

export default WINDSOR;
