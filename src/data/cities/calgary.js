// Calgary — данные страницы /city/calgary

export const CALGARY = {
  slug: 'calgary',
  name: 'Calgary',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Gateway to the Rockies',
  // Акцент страницы (тег в шапке, подзаголовок, основная кнопка) — золотой
  // вместо стандартного синего, в тон оригинальному макету Calgary.
  accentLevel: 'gold',
  heroVideo: '/Cities/Calgary/12649042_3840_2160_24fps.mp4',
  heroImage: '/ab/cities/calgary.png',
  heroCaption: 'Downtown Calgary · Alberta · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.0447, lon: -114.0719 },
  subtitle: 'Where the Prairies Meet the Rockies',
  description:
    "Alberta's largest city and Canada's energy capital — Calgary is a vibrant, modern city with the Rocky Mountains as its backdrop. Home to the world-famous Calgary Stampede, a booming food scene, and the perfect base for Banff and Jasper day trips.",

  actions: [
    { label: 'Explore Calgary', href: '#neighbourhoods' },
    { label: 'Day Trips', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '1.4 Million' },
    { label: 'Metro Area', value: '1.6 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'Airport', value: 'YYC' },
    { label: 'To Banff NP', value: '1.5 Hours' },
  ],

  badges: ['Stampede City', 'No PST', 'Sunniest City'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '335', label: 'Sunny days per year — sunniest major city in Canada', level: 'gold' },
    { value: '1.5h', label: 'Drive to Banff National Park — best mountain access in Canada', level: 'safe' },
    { value: '10', label: 'Days of Calgary Stampede — greatest outdoor show on Earth · July', level: 'gold' },
    { value: '5%', label: 'Only GST — no provincial tax. Shopping cheaper than most cities', level: 'purple' },
  ],

  spotlight: {
    tag: 'World Famous',
    emoji: '🤠', iconSrc: '/icons/attractions/ph_horse-thin.svg',
    title: 'Calgary Stampede — Greatest Outdoor Show on Earth',
    text: "Every July for 10 days, Calgary transforms into the world's biggest rodeo and western festival. Over 1.2 million visitors attend the chuckwagon races, rodeo competitions, live concerts, midway rides, and famous Stampede pancake breakfasts served free on street corners throughout the city. The entire city dresses in western wear — boots, hats, and denim everywhere.",
    links: [
      { label: 'Calgary Stampede Official', url: 'https://www.calgarystampede.com', level: 'blue' },
      { label: 'Buy Tickets', url: 'https://www.calgarystampede.com/stampede/tickets', level: 'gold' },
    ],
  },

  neighbourhoods: [
    {
      name: 'Downtown & Beltline',
      image: '/Cities/Calgary/Downtown & Beltline.png',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Stephen Avenue · Bow Tower · Telus Sky · Arts District',
      details: {
        "lead": "The core of the city, with Stephen Avenue, the towers, the Arts District and the Beltline just south of it.",
        "see": [
          {
            "title": "Calgary Tower",
            "text": "191 m tall. Adult admission was listed at $25 to $26.50 in 2026, with seniors at $23 and children 4–12 at $13 plus GST. Most guides list 10 am to 9 pm from September to May; check the tower’s site."
          },
          {
            "title": "Werklund Centre",
            "text": "Formerly Arts Commons, home to the Calgary Philharmonic and Theatre Calgary. A $270 million expansion adding a 1,000-seat theatre and a 200-seat studio theatre started in December 2024, with completion targeted for the 2028–29 season."
          },
          {
            "title": "Glenbow Museum",
            "text": "Still closed for renovation. Reopening has been described as late 2026 into 2027, with general admission expected to be free."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city; walkable between the main sights."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "The Beltline, just south, holds 17th Avenue SW and Central Memorial Park, Calgary’s oldest park."
          }
        ],
        "link": {
          "label": "Calgary Tower",
          "url": "https://www.calgarytower.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: "Eau Claire & Prince's Island",
      image: "/Cities/Calgary/Eau Claire & Prince's Island.png",
      tag: 'Parks',
      tagLevel: 'safe',
      meta: "Bow River pathways · Prince's Island Park · Farmers market",
      details: {
        "lead": "Bow River pathways, Prince’s Island Park and the riverbank just north of downtown.",
        "see": [
          {
            "title": "Prince’s Island Park",
            "text": "Open 5 am to 11 pm. The skating lagoon runs the same hours in winter."
          },
          {
            "title": "Festivals",
            "text": "In 2026 the island hosted the Calgary Folk Music Festival (July 23–26), the Roundup MusicFest (July 8–9), Expo Latino (August 14–16) and the Great Outdoors Comedy Festival (August 28–30)."
          },
          {
            "title": "Bow River pathway",
            "text": "The pathway runs about 48 km from Bearspaw Dam to Fish Creek Provincial Park."
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The park is free; festivals are ticketed."
          },
          {
            "label": "Getting there",
            "text": "A short walk from downtown across the footbridges."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "City of Calgary: Prince’s Island Park",
          "url": "https://www.calgary.ca/parks/princes-island-park.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Inglewood',
      image: '/Cities/Calgary/Inglewood.png',
      tag: 'Trendy',
      tagLevel: 'danger',
      meta: 'Oldest neighbourhood · Antiques · Craft beer · Local shops',
      details: {
        "lead": "One source calls it Calgary’s oldest and most interesting neighbourhood. Shops cluster along 9th Avenue SE, and the bird sanctuary lies at the eastern end.",
        "see": [
          {
            "title": "9th Avenue SE",
            "text": "Antique shops, craft breweries, independent cafés and local shops."
          },
          {
            "title": "Inglewood Bird Sanctuary",
            "text": "At the eastern end of the neighbourhood, by the river."
          },
          {
            "title": "Fort Calgary",
            "text": "The historic fort site, with the Deane House, is nearby."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of downtown, across the Bow River."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "The Barn Artisan Market listed a Sunday date on August 23, 2026; check for the current season."
          }
        ],
        "link": {
          "label": "Visit Calgary",
          "url": "https://www.visitcalgary.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Kensington',
      image: '/Cities/Calgary/Kensington.png',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Cafés · Boutiques · Restaurants · Bow River views',
      details: {
        "lead": "North of the Bow River, just across from the western end of downtown. Kensington Road and 10th Street NW are lined with independent cafés, bakeries, bookshops and restaurants.",
        "see": [
          {
            "title": "Kensington Road and 10th Street NW",
            "text": "The main streets, with independent shops, cafés and bookshops."
          },
          {
            "title": "Kensington Night Market",
            "text": "Listings give 2026 dates as August 13 and 27 at the Kensington Road parkade, or a run from June 25 to September 3. Confirm with the organizer."
          },
          {
            "title": "Bow River views",
            "text": "The river pathway is a short walk from the shops."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short walk across the Peace Bridge from downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Many of the shops cater primarily to locals."
          }
        ],
        "link": {
          "label": "Visit Calgary",
          "url": "https://www.visitcalgary.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: '17th Avenue SW',
      image: '/Cities/Calgary/17th Avenue SW.png',
      tag: 'Food',
      tagLevel: 'blue',
      meta: 'Restaurant row · Nightlife · Patio season · International food',
      details: {
        "lead": "The Beltline’s entertainment strip, known as the Red Mile, with restaurants, nightlife and patios in season.",
        "see": [
          {
            "title": "The Red Mile",
            "text": "The restaurant and nightlife strip along 17th Avenue SW."
          },
          {
            "title": "Central Memorial Park",
            "text": "Calgary’s oldest park, in the Beltline close to 17th Avenue."
          },
          {
            "title": "Patio season",
            "text": "Patios fill from late spring through summer."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Directly south of downtown; walkable."
          },
          {
            "label": "Best time",
            "text": "Summer evenings."
          }
        ],
        "link": {
          "label": "Visit Calgary",
          "url": "https://www.visitcalgary.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Mission & 4th Street',
      image: '/Cities/Calgary/Mission & 4th Street.png',
      tag: 'Local',
      tagLevel: 'safe',
      meta: 'Brunch spots · Independent cafés · Riverside walks',
      details: {
        "lead": "A walkable stretch of brunch spots, independent cafés and riverside walks south of downtown.",
        "see": [
          {
            "title": "4th Street SW",
            "text": "Cafés, restaurants and nightlife; one guide lists Mission among the main areas to go out."
          },
          {
            "title": "Riverside walks",
            "text": "The Elbow River pathway runs close by."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the Beltline, on the Elbow River."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for brunch and a walk."
          }
        ],
        "link": {
          "label": "Visit Calgary",
          "url": "https://www.visitcalgary.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Calgary Tower',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: '191m observation deck with a glass floor — stunning 360° views of downtown, Bow River, and the Rocky Mountains on the horizon. Hours vary, so check the tower’s website.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Views', level: 'blue' }],
      details: {
        "lead": "A 191 m landmark with an observation deck and glass floor in the middle of downtown.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "360° views over downtown, the Bow River and the Rockies on the horizon."
              },
              {
                "title": "Glass floor",
                "text": "The glass floor is part of the observation deck."
              },
              {
                "title": "Hours",
                "text": "Guides list 10 am to 9 pm daily from September to May and to 10 pm in summer. Private events can change the hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "In 2026 adults were listed at $25 plus GST (ages 13–64), seniors $23 and children 4–12 $13. Prices vary by date and time."
              },
              {
                "title": "Check first",
                "text": "The tower’s site showed adjusted hours for a private event on November 20, 2026."
              },
              {
                "title": "Dining",
                "text": "The restaurant’s current status was not confirmed; check the website."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $25 for adults."
          },
          {
            "label": "Getting there",
            "text": "Downtown, on Centre Street."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Calgary Tower",
          "url": "https://www.calgarytower.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Glenbow Museum',
      icon: '🦕', iconSrc: '/icons/attractions/ph_bone-thin.svg',
      text: 'World-class museum of Western Canadian history, Indigenous culture, and art. Currently under major renovation — check opening status before visiting.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "The museum of Western Canadian history, Indigenous culture and art is closed while a major renovation finishes. The reopening has been described as late 2026 into 2027.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Timing",
                "text": "Glenbow’s own 2025 release anticipated late 2026. A CTV report in August 2026 put the opening about a year away."
              },
              {
                "title": "Collection",
                "text": "It is described as the largest public art collection in Western Canada. Staff are preparing 36 exhibitions for the reopening."
              },
              {
                "title": "Admission",
                "text": "General admission is expected to be free, funded by a $25 million endowment."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Do not plan around it",
                "text": "There is no confirmed date; build in slack for travel plans."
              },
              {
                "title": "Phased opening",
                "text": "The reopening has been described as phased, with members and donors likely seeing it first."
              },
              {
                "title": "Check",
                "text": "glenbow.org is the best place for a confirmed date."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Expected to be free once open."
          },
          {
            "label": "Getting there",
            "text": "Downtown Calgary."
          },
          {
            "label": "Status",
            "text": "Closed at the time of writing."
          }
        ],
        "link": {
          "label": "Glenbow",
          "url": "https://www.glenbow.org/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: "Prince's Island Park",
      icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg',
      text: 'Beautiful island park in the Bow River right in downtown. Walking paths, festivals in summer, and stunning city views. Free and perfect for an afternoon.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "An island park in the Bow River right in downtown, open from 5 am to 11 pm.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Walking paths",
                "text": "Paths, picnic areas and skyline views."
              },
              {
                "title": "2026 festivals",
                "text": "Calgary Folk Music Festival (July 23–26, the 47th edition), Roundup MusicFest (July 8–9), Expo Latino (August 14–16), Great Outdoors Comedy Festival (August 28–30)."
              },
              {
                "title": "Winter",
                "text": "The skating lagoon runs the same hours as the park."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free park, ticketed events",
                "text": "The park is free; festivals are ticketed."
              },
              {
                "title": "Check dates",
                "text": "Festival dates come from listing sites; confirm with organizers."
              },
              {
                "title": "Pair it",
                "text": "The Bow River pathway and the Peace Bridge are close."
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
            "text": "Just north of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Calgary: Prince’s Island Park",
          "url": "https://www.calgary.ca/parks/princes-island-park.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Calgary Zoo',
      icon: '🐆', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: "One of Canada's largest zoos, with more than 4,000 animals in seven themed zones, including gorillas, snow leopards, red pandas and Canadian wildlife. WildLife area features Canadian species in their natural habitats.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Family', level: 'purple' }],
      details: {
        "lead": "The Wilder Institute’s Calgary Zoo is one of Canada’s largest, with listings counting more than 4,000 animals in seven themed zones.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Asian Highlands",
                "text": "The zoo’s July 2026 notice mentions snow leopards, red pandas and a new Sichuan takin."
              },
              {
                "title": "Pandas",
                "text": "Giant pandas are no longer at the zoo, though older listings still mention them."
              },
              {
                "title": "ZooLights",
                "text": "A winter event; 2026 details were not found, so check the zoo’s site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "Dynamic pricing: advance adult tickets from about $30.45 and children 3–15 from about $21.95."
              },
              {
                "title": "Hours",
                "text": "A reseller listed 9 am to 5 pm from September 8 to November 12, 2026; winter hours differ. Closed Christmas Day."
              },
              {
                "title": "Check first",
                "text": "Confirm hours and prices for your date."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, from about $30 for adults."
          },
          {
            "label": "Getting there",
            "text": "In the east of the city, near Fort Calgary and Inglewood."
          },
          {
            "label": "Time to allow",
            "text": "Three to five hours."
          }
        ],
        "link": {
          "label": "Calgary Zoo",
          "url": "https://www.calgaryzoo.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bow River Pathway',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'The city maintains about 1,000 km of regional pathways, and the Bow River pathway runs about 48 km from Bearspaw Dam to Fish Creek Provincial Park — cycling, walking and inline skating. Free and stunning.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "The city maintains about 1,000 km of regional pathways. The Bow River pathway runs about 48 km from Bearspaw Dam to Fish Creek Provincial Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Network",
                "text": "About 1,000 km of regional pathways and 96 km of trails, according to the City."
              },
              {
                "title": "Greenway",
                "text": "The Rotary/Mattamy Greenway loops around the city, commonly cited at 138 km."
              },
              {
                "title": "Uses",
                "text": "Cycling, walking and inline skating."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Maps",
                "text": "The City publishes a pathway and bikeway map; the future network of 4,000 km is a plan, not a total."
              },
              {
                "title": "Free",
                "text": "Free to use."
              },
              {
                "title": "Closures",
                "text": "Pathway sections close for flood and maintenance work; check calgary.ca/pathways."
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
            "text": "Access points across the city, including downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour to a full day."
          }
        ],
        "link": {
          "label": "City of Calgary: pathways",
          "url": "https://www.calgary.ca/bike-walk-roll/pathways.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Arts Commons',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: "Calgary's premier arts complex, now called the Werklund Centre, with year-round performances. Home to the Calgary Philharmonic and Theatre Calgary; a major expansion is under construction.",
      tags: [{ label: 'Tickets Vary', level: 'gold' }, { label: 'Arts', level: 'purple' }],
      details: {
        "lead": "Calgary’s premier arts complex, now called the Werklund Centre. A major expansion is under construction.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Resident companies",
                "text": "Home to the Calgary Philharmonic Orchestra and Theatre Calgary, among others."
              },
              {
                "title": "Expansion",
                "text": "A $270 million project adds a 1,000-seat theatre and a 200-seat studio theatre. Construction started in December 2024."
              },
              {
                "title": "Timing",
                "text": "Completion is targeted for the 2028–29 season. A council committee heard the project is nearly $200 million short of its funding goal."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Renamed",
                "text": "It was the EPCOR Centre, then Arts Commons (2014), and is now the Werklund Centre."
              },
              {
                "title": "Check the season",
                "text": "Performances are year-round; check the programme."
              },
              {
                "title": "Construction",
                "text": "Expect construction around the site."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ticketed performances."
          },
          {
            "label": "Getting there",
            "text": "Downtown, near Olympic Plaza."
          },
          {
            "label": "Good to know",
            "text": "The Olympic Plaza redevelopment is due to finish alongside the expansion in 2028."
          }
        ],
        "link": {
          "label": "Werklund Centre",
          "url": "https://en.wikipedia.org/wiki/Werklund_Centre"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Banff Day Trip',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'Calgary is the closest major city to Banff National Park — just 1.5 hours west on the Trans-Canada Highway. The most popular day trip from Calgary. UNESCO World Heritage site.',
      tags: [{ label: 'Parks Pass', level: 'gold' }, { label: '1.5h Away', level: 'blue' }],
      details: {
        "lead": "Banff is the closest major national park to Calgary, about 1.5 hours west on the Trans-Canada Highway.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "By bus",
                "text": "Buses run from Calgary and the airport. Travel times of about 1h20 to 1h45 are quoted, with fares from about $13 to $23 on aggregator sites."
              },
              {
                "title": "Brewster Express",
                "text": "Runs a winter schedule from Calgary Airport to Banff from November 2026 to April 2027."
              },
              {
                "title": "In Banff",
                "text": "See the Banff pages for the Gondola, Upper Hot Springs and Cave and Basin."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Park pass",
                "text": "A park pass is needed; an adult day pass was $12.25 in 2026."
              },
              {
                "title": "Winter driving",
                "text": "Winter tires are advisable on the highway."
              },
              {
                "title": "Check operators",
                "text": "Aggregator fares and times can be stale; check the operator."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Bus about $13–23 each way; park pass extra."
          },
          {
            "label": "Getting there",
            "text": "About 1.5 hours by car or bus."
          },
          {
            "label": "Time to allow",
            "text": "A full day."
          }
        ],
        "link": {
          "label": "Brewster Express",
          "url": "https://www.banffjaspercollection.com/brewster-express/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Drumheller Badlands',
      icon: '🦕', iconSrc: '/icons/attractions/ph_bone-thin.svg',
      text: "The Dinosaur Capital of the World — just 1.5 hours east of Calgary. The Royal Tyrrell Museum has one of the world's best dinosaur fossil collections. An unmissable day trip.",
      tags: [{ label: 'Paid', level: 'gold' }, { label: '1.5h Away', level: 'blue' }],
      details: {
        "lead": "The Royal Tyrrell Museum sits about 6 km outside Drumheller, in Midland Provincial Park on Highway 838, in the middle of the badlands.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listings give September 1 to May 14 as Tuesday to Sunday, 10 am to 5 pm, closed Mondays; summer is daily from 9 am."
              },
              {
                "title": "Location",
                "text": "About 6 km from Drumheller on Highway 838."
              },
              {
                "title": "Time",
                "text": "Plan at least half a day for a special trip."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "No current price was confirmed; old listings give $19 for adults, which is likely out of date."
              },
              {
                "title": "Check hours",
                "text": "Hours vary by season; confirm before driving out."
              },
              {
                "title": "Winter",
                "text": "Allow extra time for winter roads."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the current price."
          },
          {
            "label": "Getting there",
            "text": "About 1.5 hours east of Calgary by car."
          },
          {
            "label": "Best time",
            "text": "Summer for full hours."
          }
        ],
        "link": {
          "label": "Royal Tyrrell Museum",
          "url": "https://tyrrellmuseum.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Scotiabank Saddledome',
      icon: '🏒', iconSrc: '/icons/attractions/ph_hockey-thin.svg',
      text: 'Watch the Calgary Flames play NHL hockey in this iconic saddle-shaped arena in the heart of Stampede Park. 2026–27 is the Flames’ final season here; the new Scotia Place opens next door in fall 2027.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
      details: {
        "lead": "The saddle-shaped arena in Stampede Park. 2026–27 is the Flames’ final season here, their 43rd, before the move to Scotia Place.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Final season",
                "text": "The Flames opened their last season at the Saddledome on October 1 after 43 years."
              },
              {
                "title": "Scotia Place",
                "text": "The new 18,400-seat arena opens next door in fall 2027, in time for the 2027–28 NHL season."
              },
              {
                "title": "Future",
                "text": "The City says the Saddledome will be demolished once Scotia Place opens; a March 2026 report estimated within two years."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "Check the Flames and the venue for game and event tickets."
              },
              {
                "title": "Stampede Park",
                "text": "The land stays with the Calgary Stampede, which owns and operates it."
              },
              {
                "title": "Dates",
                "text": "One fan site claims a 2026 opening for Scotia Place, which conflicts with the City; use the City’s fall 2027 date."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ticketed events."
          },
          {
            "label": "Getting there",
            "text": "Victoria Park, on the CTrain line."
          },
          {
            "label": "Best time",
            "text": "NHL season, October to April."
          }
        ],
        "link": {
          "label": "Scotia Place (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Scotia_Place"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoor: [
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Bow River Pathway', dist: '1,000+ km network', text: 'Cycling, walking, and inline skating along one of North America\'s longest urban pathway systems.' },
    { icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg', name: "Prince's Island Park", dist: 'Downtown', text: 'Island park in the Bow River — walking paths, summer festivals, and skyline views.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Nose Hill Park', dist: 'North Calgary', text: 'One of the largest urban parks in Canada — native prairie grassland with panoramic mountain views.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Elbow River Pathway', dist: 'South Calgary', text: 'Quieter cycling and walking pathway connecting to Fish Creek Provincial Park.' },
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winsport Canada Olympic Park', dist: 'West Calgary', text: '1988 Olympics venue — skiing, tobogganing, bobsleigh experiences, and a ski jump tower with city views.' },
    { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', name: 'Fish Creek Provincial Park', dist: 'South Calgary', text: "One of the largest urban parks in North America — forests, wetlands, and the Bow Valley Ranch historic site." },
    { icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg', name: 'Stampede Park', dist: 'Victoria Park', text: "Year-round events venue, home of the Calgary Stampede — casino, agri-food exhibits, and concerts outside of July too." },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Banff & Kananaskis', dist: '1–1.5 hours away', text: 'The Rockies are Calgary\'s backyard — hiking, skiing, and turquoise lakes within a short drive.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef', area: 'Everywhere · Steakhouses', areaLevel: 'gold', text: "Calgary is Alberta beef country — world-class AAA steaks are the city's signature dish. Caesar's Steakhouse has been the institution since 1972. Saltlik and The Bison are newer favourites." },
    { icon: '🌮', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: '17th Avenue Food Scene', area: '17th Ave SW', areaLevel: 'danger', text: "Calgary's restaurant row — Mexican, Japanese, Ethiopian, Lebanese, and Canadian all within blocks of each other. The best concentration of restaurants in the city with great patio culture in summer." },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Inglewood · Beltline', areaLevel: 'safe', text: 'Calgary has a thriving craft brewery scene. Village Brewery, Tool Shed, and Born Colorado are local favourites. Inglewood has become the craft beer hub with multiple taprooms walkable from each other.' },
    { icon: '🥞', iconSrc: '/icons/attractions/ph_egg-thin.svg', title: 'Stampede Pancake Breakfast', area: 'Citywide · July Only', areaLevel: 'gold', text: 'During Calgary Stampede (July), free pancake breakfasts are served on street corners throughout the city every morning. A beloved Calgary tradition — don\'t miss it if you\'re here in July.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'International Food', area: 'International Avenue', areaLevel: 'blue', text: 'International Avenue (17th Ave SE) in Forest Lawn is one of the most multicultural streets in Canada — Vietnamese, Ethiopian, Mexican, Filipino, and more. Authentic and affordable.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Coffee Culture', area: 'Kensington · Inglewood', areaLevel: 'purple', text: 'Phil & Sebastian Coffee (born in Calgary) has become one of Canada\'s most celebrated roasters. Analog Coffee in Inglewood and Rosso Coffee are also local institutions worth visiting.' },
  ],

  seasons: [
    {
      icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — 335 sunny days per year means summer is spectacular. Calgary Stampede in July is unmissable. Banff day trips at their best. Patio culture everywhere. Warm and dry with very low humidity.',
      rating: 5,
      note: 'Stampede!',
    },
    {
      icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Beautiful crisp days, golden aspen leaves in the foothills. Fewer tourists at Banff. Chinook winds can bring surprise warm days in October and November. Flames hockey season starts.',
      rating: 4,
      note: 'Great value',
    },
    {
      icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Cold but sunny — Calgary gets more sunshine than any Canadian city even in winter. Chinook winds bring sudden warm spells. Skiing at Lake Louise and Banff Sunshine just 1.5 hours away. Christmas market downtown.',
      rating: 3,
      note: 'Ski season',
    },
    {
      icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow possible into April but Chinooks keep things mild. Banff is less crowded and more affordable. Spring skiing at resorts. Great time to visit before summer prices kick in.',
      rating: 4,
      note: 'Budget friendly',
    },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Plane',
      text: 'Calgary International Airport (YYC) is one of the busiest in Canada — direct flights to major North American, European, and Asian cities.',
      time: '20 min by car/shuttle to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway connects Calgary directly to Banff (1.5h) and Vancouver. Highway 2 leads north to Edmonton (~3 hours). No train station for passenger rail.',
      time: 'Banff: 1.5h · Edmonton: 3h',
    },
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'Getting Around',
      text: 'Calgary Transit runs the CTrain (light rail) and buses. The CTrain is free within the downtown Free Fare Zone. A car is useful for Banff and Kananaskis day trips.',
      time: 'Calgary Transit fare card · calgarytransit.com',
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊', iconSrc: '/icons/attractions/ph_tram-thin.svg',
      title: 'Calgary Transit — CTrain & Buses',
      text: 'Calgary Transit operates the CTrain light rail (Red and Blue lines) and an extensive bus network across the city. The downtown core has a Free Fare Zone on 7th Avenue — no ticket needed for CTrain travel within it.',
      linkLabel: 'Calgary Transit Official',
      linkUrl: 'https://www.calgarytransit.com',
    },
    modes: [
      {
        icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
        title: 'CTrain',
        text: '2 lines: Red and Blue. Runs roughly 4:30am to 1:30am. Downtown 7th Avenue segment is a Free Fare Zone — no ticket required.',
        fareBox: {
          label: 'Fares',
          lines: ['Adult single: $3.75', 'Day Pass: $11.00', 'Monthly Pass: $121', 'Downtown Free Fare Zone'],
        },
        linkLabel: 'CTrain Map',
        linkUrl: 'https://www.calgarytransit.com/routes-schedules/ctrain',
      },
      {
        icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Buses',
        text: 'Extensive bus network covering all quadrants of the city, connecting to CTrain stations. Same fare as CTrain with free transfers.',
        fareBox: {
          label: 'Fare Card',
          lines: ['• Tap Visa/Mastercard directly', '• Or use the Calgary Transit app', '• Free transfer within 90 min', '• Exact change accepted on board'],
        },
        linkLabel: 'Bus Routes',
        linkUrl: 'https://www.calgarytransit.com/routes-schedules',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Uber & Lyft', text: 'Both widely available. Useful for Banff-bound early starts before transit runs.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike Share', text: 'Calgary has an extensive pathway network — check local bike rental shops downtown.' },
          { icon: '🚙', iconSrc: '/icons/attractions/ph_car-profile-thin.svg', title: 'Car Rental', text: 'Recommended for Banff, Kananaskis, and Drumheller day trips — public transit does not reach the parks.' },
        ],
      },
    ],
    proTip: {
      label: 'Banff Day Trip Tip:',
      text: "There's no public transit to Banff — rent a car or book a shuttle (Banff Airporter, On-It Regional Transit seasonal bus). The drive is 1.5 hours on the Trans-Canada Highway with stunning mountain views the whole way.",
    },
  },

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown / Beltline',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Palliser, Hyatt Regency, Hotel Arts. Walking distance to Stephen Avenue, the Bow River, and CTrain Free Fare Zone.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Calgary', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Calgary-Hotels.d178289.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg',
      title: '17th Avenue SW / Mission',
      area: 'Best for food and nightlife',
      text: 'Boutique hotels and B&Bs steps from Calgary\'s best restaurant row. Walkable, vibrant, and close to the Elbow River pathway.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/17th-Avenue--Calgary', level: 'danger' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=17th+Avenue+Calgary', level: 'blue' },
      ],
    },
    {
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      title: 'Inglewood / Kensington',
      area: 'Best for local character',
      text: "Calgary's oldest and most artsy neighbourhoods — antique shops, craft breweries, and independent cafés. A quieter, more residential home base.",
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Inglewood--Calgary', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/alberta/calgary', level: 'blue' },
      ],
    },
  ],

  taxInfo: {
    totalTaxPercent: '5%',
    headline: '🎉 Alberta Has NO Provincial Sales Tax!',
    headlineLevel: 'safe',
    description: 'Same as Edmonton — Alberta is the only province with no PST. You only pay federal GST of 5%. This makes Calgary one of the cheapest major cities in Canada for shopping and dining. A $500 shopping trip costs $25 in tax — vs $60 in Vancouver or $65 in Toronto. Hotels are the exception: Alberta’s Tourism Levy on accommodation rose from 4% to 6% on 1 April 2026, charged on top of GST (bookings made before that date keep 4%; stays of 28+ nights are exempt). Some hotels also add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Calgary / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Weather', text: 'Sunny but variable — Chinook winds can swing temperatures 20°C+ in hours, even in winter. Layer up.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD). Calgary is more affordable than Vancouver or Toronto — no PST helps too.' },
    { icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', title: 'CTrain Fare', text: 'Tap your Visa/Mastercard directly, or use the Calgary Transit app. Downtown 7th Ave is fare-free.' },
    { icon: '🌐', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Language', text: 'English primary. A multicultural city with large South Asian, Filipino, and East Asian communities.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital', lines: ['Foothills Medical Centre', '1403 29 St NW', '403-944-1110'] },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Cannabis', text: 'Legal for adults 18+ in Alberta. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Chinook Winds', text: 'Warm winter winds can melt snow in hours. Locals joke Calgary has two seasons: winter and construction.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Day Trips', text: 'Banff (1.5h), Drumheller Badlands (1.5h), and Kananaskis Country (1h) are all easy day trips from Calgary.' },
  ],
};

export default CALGARY;
