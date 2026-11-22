// Edmonton — данные страницы /city/edmonton

export const EDMONTON = {
  slug: 'edmonton',
  name: 'Edmonton',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Gateway to the North',
  heroVideo: '/Cities/Edmonton/12097522-hd_1920_1080_60fps.mp4',
  heroImage: '/ab/cities/edmonton.png',
  heroCaption: 'Downtown Edmonton · Alberta · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.5461, lon: -113.4938 },
  subtitle: "Canada's Festival City",
  description:
    "Alberta's capital and Canada's northernmost major city — Edmonton is a city of contrasts. World-class festivals, the largest urban river valley park in North America, a booming food scene, and the gateway to Jasper National Park just 4 hours away.",

  actions: [
    { label: 'Explore Edmonton', href: '#neighbourhoods' },
    { label: 'Nearby Parks', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '1.0 Million' },
    { label: 'Metro Area', value: '1.5 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'Airport', value: 'YEG' },
    { label: 'To Jasper NP', value: '4 hours' },
  ],

  badges: ['Festival City', 'River Valley', 'Northern Lights'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
  ],

  highlights: [
    { value: '50+', label: 'Major festivals per year — more per capita than any Canadian city', level: 'blue' },
    { value: '7,400', label: 'Acres of river valley park — largest urban park system in North America', level: 'safe' },
    { value: '#1', label: 'Fringe Theatre Festival in North America — every August', level: 'gold' },
    { value: '17h', label: 'Daylight in summer — one of the sunniest summer cities in Canada', level: 'purple' },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & ICE District',
      image: '/Cities/Edmonton/Downtown & ICE District.png',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Rogers Place arena · Stantec Tower · Bars · Restaurants · NHL',
      details: {
        "lead": "The centre of the city, built around Rogers Place and the 25-acre ICE District. The Royal Alberta Museum and the Art Gallery of Alberta are also downtown.",
        "see": [
          {
            "title": "Rogers Place",
            "text": "The arena opened in September 2016 and is operated by Oilers Entertainment Group. It is the centre of ICE District."
          },
          {
            "title": "Stantec Tower",
            "text": "A 66-storey tower and the tallest building in Edmonton, at about 251 m."
          },
          {
            "title": "ICE District",
            "text": "Tenants include the JW Marriott and Edmonton Tower, with bars and restaurants around the arena."
          }
        ],
        "practical": [
          {
            "label": "Parking",
            "text": "The ICE District Central Parkade is on the north side of 103 Avenue, just west of 103 Street. Its entry clearance is only 6 ft 10 in."
          },
          {
            "label": "Getting there",
            "text": "The centre of the city, on the LRT."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "ICE District",
          "url": "https://icedistrict.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'River Valley & Cloverdale',
      image: '/Cities/Edmonton/River Valley & Cloverdale.png',
      tag: 'Nature',
      tagLevel: 'safe',
      meta: '160 km of trails · Cycling · Kayaking · Footbridge views',
      details: {
        "lead": "The North Saskatchewan River valley runs through the middle of the city, with about 7,300 to 7,400 hectares of parkland and 160 km of maintained trails.",
        "see": [
          {
            "title": "The trail system",
            "text": "The valley is over 25 km long. Four main trailheads are Hawrelak, Terwillegar, Gold Bar and Hermitage parks."
          },
          {
            "title": "Muttart Conservatory",
            "text": "9626 96A Street, on the valley floor. The City lists adults at $14.95, youth and seniors $12.95 and children 2–12 $7.75."
          },
          {
            "title": "Gallagher Park",
            "text": "In the Cloverdale neighbourhood, the site of the annual Edmonton Folk Music Festival."
          }
        ],
        "practical": [
          {
            "label": "Winter",
            "text": "Paved trails are cleared after 2.5 cm of snow, so they stay usable year-round."
          },
          {
            "label": "Getting there",
            "text": "Access from many points across the city."
          },
          {
            "label": "Time to allow",
            "text": "An hour to a full day."
          }
        ],
        "link": {
          "label": "City of Edmonton: Muttart Conservatory",
          "url": "https://www.edmonton.ca/attractions_events/muttart-conservatory"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Strathcona',
      image: '/Cities/Edmonton/Old Strathcona.png',
      tag: 'Arts',
      tagLevel: 'danger',
      meta: 'Fringe Festival · Whyte Avenue bars · Theatres · Farmers market',
      details: {
        "lead": "The bohemian heart of the city, around Whyte Avenue, with independent restaurants, vintage shops, live music and theatres.",
        "see": [
          {
            "title": "Edmonton Fringe",
            "text": "The 2026 festival ran August 13–23 with more than 200 theatre productions in about 40 venues."
          },
          {
            "title": "Old Strathcona Farmers’ Market",
            "text": "Edmonton’s only year-round market, with more than 130 local makers, bakers and growers. It runs Saturdays from 8 am to 3 pm."
          },
          {
            "title": "Whyte Avenue",
            "text": "The main street, with bars, theatres and live music venues."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the river from downtown."
          },
          {
            "label": "Tickets",
            "text": "Fringe tickets go through the Fringe box office at 10330 84 Avenue and tickets.fringetheatre.ca."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Old Strathcona Business Association",
          "url": "https://oldstrathcona.ca/visit/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'West Edmonton Mall Area',
      image: '/Cities/Edmonton/West Edmonton Mall Area.jpg',
      tag: 'Shopping',
      tagLevel: 'purple',
      meta: "World's largest mall · Indoor waterpark · Ice rink · Entertainment",
      details: {
        "lead": "West Edmonton Mall is a huge shopping and entertainment centre with Galaxyland, a waterpark and an ice palace.",
        "see": [
          {
            "title": "Galaxyland",
            "text": "The indoor amusement park. In one recent blog general admission was $67 for visitors 48 in or taller and $57 for shorter guests over age two. The official pages list different hours, from 11 am or noon to 6 or 7 pm."
          },
          {
            "title": "Mall hours",
            "text": "A third-party directory lists 10 am to 9 pm Monday to Saturday and 11 am to 6 pm on Sunday; shops keep their own hours."
          },
          {
            "title": "Ice Palace",
            "text": "The ice rink is listed among the current attractions."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In west Edmonton, by car or bus."
          },
          {
            "label": "Prices",
            "text": "Hours and prices are subject to change without notice; check wem.ca."
          },
          {
            "label": "Time to allow",
            "text": "A half day to a full day."
          }
        ],
        "link": {
          "label": "West Edmonton Mall",
          "url": "https://www.wem.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Chinatown & Little Italy',
      image: '/Cities/Edmonton/Chinatown & Little Italy.png',
      tag: 'Multicultural',
      tagLevel: 'blue',
      meta: 'Authentic cuisine · Community markets · Cultural festivals',
      details: {
        "lead": "Two small food districts a short distance north of downtown, with Asian groceries on 97 Street and Italian cafés on 95 Street.",
        "see": [
          {
            "title": "Chinatown",
            "text": "One source places it between 97 and 101 streets, with Asian grocers such as Lucky 97 and 99 Supermarket."
          },
          {
            "title": "Little Italy",
            "text": "Centred on 95 Street north of 107 Avenue; sources give different boundaries."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of downtown."
          },
          {
            "label": "Good to know",
            "text": "Check a map before you go, as the boundaries are not formal."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a meal."
          }
        ],
        "link": {
          "label": "Explore Edmonton",
          "url": "https://exploreedmonton.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Garneau & University Area',
      image: '/Cities/Edmonton/Garneau & University Area.png',
      tag: 'Local',
      tagLevel: 'safe',
      meta: 'University of Alberta · Coffee shops · Bookstores · Local food',
      details: {
        "lead": "Garneau sits right next to the University of Alberta campus, with coffee shops, bookstores and local restaurants.",
        "see": [
          {
            "title": "University of Alberta",
            "text": "The campus is next to the neighbourhood."
          },
          {
            "title": "Garneau Theatre",
            "text": "A historic cinema now operated by the Metro Cinema Society."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the river, near the university."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Explore Edmonton",
          "url": "https://exploreedmonton.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'West Edmonton Mall',
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      text: "A huge shopping and entertainment centre with an indoor waterpark, an ice rink and the Galaxyland amusement park under one roof.",
      tags: [{ label: 'Paid for Attractions', level: 'gold' }, { label: 'Entertainment', level: 'purple' }],
      details: {
        "lead": "A huge shopping and entertainment centre with an indoor waterpark, an ice rink and the Galaxyland amusement park under one roof.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Galaxyland",
                "text": "The amusement park. Official pages list hours between 11 am and 7 pm, so check the day."
              },
              {
                "title": "Mall hours",
                "text": "About 10 am to 9 pm Monday to Saturday and 11 am to 6 pm Sunday, per a third-party directory."
              },
              {
                "title": "Admission",
                "text": "One recent blog gave $67 for guests 48 in or taller and $57 for shorter guests over two."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check first",
                "text": "Hours and prices are subject to change without notice."
              },
              {
                "title": "Height limits",
                "text": "Sources differ on the height cutoff (43 or 48 in); check the official page."
              },
              {
                "title": "Store count",
                "text": "An often-quoted 800+ stores was not verified."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter the mall; attractions are ticketed."
          },
          {
            "label": "Getting there",
            "text": "West Edmonton, by car or bus."
          },
          {
            "label": "Time to allow",
            "text": "A half day or more."
          }
        ],
        "link": {
          "label": "Galaxyland tickets",
          "url": "https://www.wem.ca/play/attractions/galaxyland/tickets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'River Valley Trail System',
      icon: '🌿', iconSrc: '/icons/attractions/ph_plant-thin.svg',
      text: '160 km of trails along the North Saskatchewan River, in about 7,300 hectares of parkland — among the largest areas of urban parkland in North America. Cycling, hiking, kayaking, skiing in winter. Free and world-class.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "About 7,300 to 7,400 hectares of parkland and 160 km of maintained trails along the North Saskatchewan River.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Scale",
                "text": "The valley is over 25 km long. It is described as the largest contiguous area of urban parkland in the country."
              },
              {
                "title": "Trailheads",
                "text": "Four main trailheads: Hawrelak, Terwillegar, Gold Bar and Hermitage parks."
              },
              {
                "title": "Hawrelak Park",
                "text": "A big lake in the middle, open fields and shade trees."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Paved trails are cleared after 2.5 cm of snow."
              },
              {
                "title": "Terwillegar Park",
                "text": "A 186-hectare park, suited to cross-country skiing in winter."
              },
              {
                "title": "Free",
                "text": "The trails are free to use."
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
            "text": "Access points across the city."
          },
          {
            "label": "Time to allow",
            "text": "An hour to a full day."
          }
        ],
        "link": {
          "label": "Explore Edmonton: hikes and walks",
          "url": "https://exploreedmonton.com/articles/best-hikes-and-walks-in-edmonton"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Royal Alberta Museum',
      icon: '🦕', iconSrc: '/icons/attractions/ph_bone-thin.svg',
      text: "The largest natural and human history museum in Western Canada, with Wild Alberta galleries, the Human History Hall, a Bug Gallery and a Children’s Gallery, and Indigenous content woven throughout the building.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "The largest natural and human history museum in Western Canada, downtown.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Galleries",
                "text": "Wild Alberta, the Human History Hall, a Bug Gallery, a Children’s Gallery and a feature gallery."
              },
              {
                "title": "Indigenous content",
                "text": "One guide says it is woven throughout the building rather than in a single room."
              },
              {
                "title": "Hours",
                "text": "A 2026 guide lists Wednesday and Friday to Sunday 10 am–4 pm and Thursday to 8 pm, closed Monday and Tuesday; the museum’s own listing differs."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "A 2026 guide lists adults at $21 until March 31 and $25 from April 1, seniors $16, youth $12 and families $55."
              },
              {
                "title": "Check hours",
                "text": "Sources disagree; confirm before going."
              },
              {
                "title": "Free days",
                "text": "Free-admission promotions in 2026 have ended."
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
            "text": "Downtown Edmonton."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Royal Alberta Museum",
          "url": "https://www.royalalbertamuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Strathcona & Whyte Ave',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: "Edmonton's bohemian heart — lined with independent restaurants, vintage shops, live music venues, and theatres. Home of North America's largest Fringe Theatre Festival every August.",
      tags: [{ label: 'Free to Walk', level: 'safe' }, { label: 'Arts', level: 'purple' }],
      details: {
        "lead": "Edmonton’s bohemian heart, lined with independent restaurants, vintage shops, live music venues and theatres.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Edmonton Fringe",
                "text": "August 13–23, 2026, with more than 200 productions in about 40 venues. The festival calls itself North America’s largest and longest-running fringe."
              },
              {
                "title": "Farmers’ Market",
                "text": "Year-round on Saturdays, 8 am to 3 pm, with more than 130 makers and growers."
              },
              {
                "title": "Whyte Avenue",
                "text": "Bars, theatres and live music."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fringe tickets",
                "text": "2026 tickets went on sale August 5; box office at 10330 84 Avenue or tickets.fringetheatre.ca."
              },
              {
                "title": "Next year",
                "text": "2027 dates have not been announced in the sources."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The street is free; shows are ticketed."
          },
          {
            "label": "Getting there",
            "text": "South of the river."
          },
          {
            "label": "Best time",
            "text": "August for the Fringe."
          }
        ],
        "link": {
          "label": "Old Strathcona Business Association",
          "url": "https://oldstrathcona.ca/visit/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rogers Place — Oilers Hockey',
      icon: '🏒', iconSrc: '/icons/attractions/ph_hockey-thin.svg',
      text: 'Watch the Edmonton Oilers play NHL hockey at Rogers Place — one of the most modern arenas in North America. Part of the ICE District entertainment complex downtown.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
      details: {
        "lead": "Home of the Edmonton Oilers, a multi-purpose arena that opened in September 2016 as part of the ICE District.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "ICE District",
                "text": "A 25-acre district with the JW Marriott, Edmonton Tower and Stantec Tower."
              },
              {
                "title": "Operator",
                "text": "Operated by Oilers Entertainment Group."
              },
              {
                "title": "Goal Cam",
                "text": "Fans can record and share their reaction to Oilers goals from their seats."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Parking",
                "text": "The ICE District Central Parkade has a 6 ft 10 in entry clearance."
              },
              {
                "title": "Tours",
                "text": "A tour schedule was not found; check the Oilers site."
              },
              {
                "title": "Tickets",
                "text": "Check the Oilers and the arena for game and event tickets."
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
            "text": "Downtown, on the LRT."
          },
          {
            "label": "Best time",
            "text": "NHL season, October to April."
          }
        ],
        "link": {
          "label": "ICE District",
          "url": "https://icedistrict.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Northern Lights Viewing',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: "Edmonton's northern latitude (53°N) makes it one of the best cities in Canada for Northern Lights. Late August to March is the best window. Head to Elk Island National Park, about 50 km east, inside the Beaver Hills Dark Sky Preserve.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sep–Mar', level: 'blue' }],
      details: {
        "lead": "Edmonton’s northern latitude makes it one of the better cities in Canada for the aurora. For the darkest skies, head to Elk Island National Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Elk Island",
                "text": "The park sits inside the Beaver Hills Dark Sky Preserve, which has held that status since 2006."
              },
              {
                "title": "Best spot",
                "text": "Astotin Lake is the most recommended site in the park."
              },
              {
                "title": "Season",
                "text": "Late August to March is the more defensible window, because of the long nights."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Distance",
                "text": "About 45 to 50 km east of Edmonton; guides quote 30 to 40 minutes’ drive."
              },
              {
                "title": "Forecast",
                "text": "Check Aurora Watch for geomagnetic activity and the cloud forecast before you go."
              },
              {
                "title": "Dress warm",
                "text": "It gets very cold on winter nights."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "A national park pass is needed for Elk Island."
          },
          {
            "label": "Getting there",
            "text": "By car, east of the city on the Yellowhead."
          },
          {
            "label": "Best time",
            "text": "Clear, dark nights from late August to March."
          }
        ],
        "link": {
          "label": "Explore Edmonton: stargazing",
          "url": "https://exploreedmonton.com/articles/stargazing-in-edmonton"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Muttart Conservatory',
      icon: '🌸', iconSrc: '/icons/attractions/ph_flower-lotus-thin.svg',
      text: 'Four stunning glass pyramids on the river valley floor, each housing a different world climate — tropical, arid, temperate, and feature. A unique and beautiful attraction.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "Four glass pyramids on the river valley floor, each housing a different climate, at 9626 96A Street.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Monday, Tuesday and Friday to Sunday 10 am–5 pm; Wednesday and Thursday 10 am–9 pm. Open daily except December 25."
              },
              {
                "title": "Adults only",
                "text": "Wednesday evenings from 5 to 9 pm are adults-only."
              },
              {
                "title": "Feature pyramid",
                "text": "Crimson and Cheer runs November 21, 2026 to January 3, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Adults $14.95, youth and seniors $12.95, children 2–12 $7.75, under 2 free. Admission closes 30 minutes before closing."
              },
              {
                "title": "Tickets",
                "text": "At the door or online."
              },
              {
                "title": "Older listings",
                "text": "Lower prices on third-party sites are out of date; use the City’s page."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $15 for adults."
          },
          {
            "label": "Getting there",
            "text": "On the river valley floor, south of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Edmonton: Muttart Conservatory",
          "url": "https://www.edmonton.ca/attractions_events/muttart-conservatory"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'K-Days & Northlands',
      icon: '🎡', iconSrc: '/icons/attractions/ph_confetti-thin.svg',
      text: "K-Days is Edmonton's massive summer fair — 10 days of rides, concerts, food, and entertainment every July. One of the largest fairs in Western Canada.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'July', level: 'danger' }],
      details: {
        "lead": "Edmonton’s summer fair. The 2026 edition ran ten days, from July 17 to 26, at the Edmonton EXPO Centre and Exhibition Grounds.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Rides and shows",
                "text": "A midway, concerts and food."
              },
              {
                "title": "Concerts",
                "text": "Concerts were free with general admission, with paid upgrades available."
              },
              {
                "title": "Community Day",
                "text": "Sunday, July 19, 2026 offered free gate admission to Edmonton Public Library cardholders."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Adults (13–59) $15.45 and youth and seniors $11.33, plus GST and fees, for a single day."
              },
              {
                "title": "Hours",
                "text": "Listings gave about 11 am or noon to 11 pm daily, with the midway open to midnight."
              },
              {
                "title": "Address",
                "text": "7515 118 Avenue."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $15 for adults for a day."
          },
          {
            "label": "Getting there",
            "text": "On the exhibition grounds, near downtown."
          },
          {
            "label": "Best time",
            "text": "Late July."
          }
        ],
        "link": {
          "label": "K-Days (Edmonton Events)",
          "url": "https://www.edmonton.events/k-days"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Art Gallery of Alberta',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Stunning glass and steel building in downtown Edmonton with Canadian and international art collections. The building itself is an architectural masterpiece worth visiting.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Arts', level: 'purple' }],
      details: {
        "lead": "A glass and steel building in downtown Edmonton with Canadian and international art, at Churchill Square.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "One listing gives Wednesday 11 am–5 pm, Thursday 11 am–7 pm and Friday to Sunday 11 am–5 pm; closed Monday and Tuesday."
              },
              {
                "title": "Free night",
                "text": "Free from 4 to 7 pm on the last Thursday of every month; the next is November 26, 2026."
              },
              {
                "title": "Youth",
                "text": "Admission is always free for kids and youth 17 and under."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "One listing shows adults at $14 and seniors at $10; check the official site."
              },
              {
                "title": "Holidays",
                "text": "Sources disagree on holiday hours."
              },
              {
                "title": "The building",
                "text": "The architecture is worth a look in itself."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $14; free on the last Thursday evening."
          },
          {
            "label": "Getting there",
            "text": "Downtown, at Churchill Square."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Art Gallery of Alberta",
          "url": "https://www.youraga.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: "North America's Largest Urban Park System",
  outdoorNote:
    '7,400 acres of connected parkland along the North Saskatchewan River — 22 times the size of New York\'s Central Park. Free, year-round, and right in the heart of the city.',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Cycling', dist: '160 km of trails', text: 'Rent bikes at multiple locations. The River Valley Road is car-free on weekends in summer.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Hiking', dist: 'Terwillegar Park', text: 'Endless trails through ravines, river banks, and forest. Terwillegar Park is the most popular family hiking area.' },
    { icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Kayaking', dist: 'North Saskatchewan River', text: 'Paddle the river through the city. Rentals available at several river access points in summer.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Cross-Country Ski', dist: 'Goldstick Park', text: 'Groomed ski trails in winter throughout the valley. Muttart Ski Area and Goldstick Park most popular.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Tobogganing', dist: 'Gallagher Hill', text: 'Classic Canadian winter fun. Multiple designated hills throughout the valley — Gallagher Hill is a favourite.' },
    { icon: '🌺', iconSrc: '/icons/attractions/ph_flower-thin.svg', name: 'Hawrelak Park', dist: 'River valley floor', text: 'Beautiful park with a large lake, pedal boats in summer, and skating in winter. Site of many summer festivals.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', name: 'High Level Bridge', dist: 'Downtown', text: 'Walk the pedestrian walkway for stunning river valley views. The streetcar runs across it in summer.' },
    { icon: '🐾', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Dog Parks', dist: 'Emily Murphy Park', text: 'Multiple off-leash areas throughout the valley. Emily Murphy Park is the most popular dog-friendly spot.' },
  ],

  festivals: [
    { month: 'JUNE', icon: '🌮', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', name: 'Edmonton International Street Performers Festival', text: 'Free outdoor performances across the city — acrobats, magicians, comedians. Sir Winston Churchill Square.', level: 'safe' },
    { month: 'JULY', icon: '🎡', iconSrc: '/icons/attractions/ph_confetti-thin.svg', name: 'K-Days', text: '10-day summer fair with concerts, rides, food, and entertainment. One of the largest fairs in Western Canada.', level: 'gold' },
    { month: 'AUGUST', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', name: 'Edmonton Fringe Festival', text: 'Largest fringe theatre festival in North America. 200+ productions, 1,500+ shows over 11 days in Old Strathcona.', level: 'danger' },
    { month: 'AUGUST', icon: '🎵', iconSrc: '/icons/attractions/ph_music-note-thin.svg', name: 'Edmonton Folk Music Festival', text: 'One of the best folk festivals in the world. Gallagher Hill — four days of incredible music on the river valley.', level: 'danger' },
    { month: 'SEPT', icon: '🌍', iconSrc: '/icons/attractions/ph_globe-thin.svg', name: 'Heritage Festival', text: "Over 90 cultural pavilions at Hawrelak Park representing the world's cultures through food, music, and dance.", level: 'olive' },
    { month: 'NOV', icon: '🎄', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Candy Cane Lane', text: 'Famous residential street in Bonnie Doon with over 100 houses decorated with millions of Christmas lights.', level: 'blue' },
    { month: 'FEB', icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Ice on Whyte Festival', text: 'World-class ice carving competition on Whyte Avenue. Intricate sculptures, snow slides, and winter activities.', level: 'blue' },
    { month: 'JUNE', icon: '🌈', iconSrc: '/icons/attractions/ph_rainbow-thin.svg', name: 'Edmonton Pride Festival', text: "One of Western Canada's largest Pride celebrations — parade, festival, and events throughout the city in June.", level: 'safe' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef', area: 'Downtown · Everywhere', areaLevel: 'blue', text: "Alberta is the beef capital of Canada. Edmonton's steakhouses serve world-class Alberta AAA beef. Notable spots: Hy's Steakhouse, The Harvest Room, and Hardware Grill." },
    { icon: '🫕', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Ukrainian Food', area: 'Old Strathcona · Whyte Ave', areaLevel: 'danger', text: 'Alberta has one of the largest Ukrainian communities in Canada. Perogies, borscht, and cabbage rolls are staples. The Ukrainian Cultural Heritage Village is just outside the city.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Asian Food Scene', area: 'Chinatown · Millwoods', areaLevel: 'gold', text: "Edmonton's diverse Asian community means exceptional Vietnamese pho, Filipino adobo, Korean BBQ, Chinese dim sum, and Indian curry. Little Vietnam on 97th Street is a must." },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer Scene', area: 'Old Strathcona · Downtown', areaLevel: 'safe', text: "Edmonton has an impressive craft brewery scene. Alley Kat (Alberta's oldest craft brewery), Situation Brewing, and Blind Enthusiasm are local favourites on the beer trail." },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm-to-Table', area: 'Grandin · Downtown', areaLevel: 'blue', text: "Surrounded by Alberta's farmland, Edmonton chefs have embraced farm-to-table dining. The City Market (Old Strathcona Farmers' Market) is one of Canada's best year-round markets." },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Independent Cafés', area: 'Whyte Ave · Garneau', areaLevel: 'purple', text: "Edmonton's independent café scene is thriving. Transcend Coffee, Iconoclast Coffee, and Roasti all roast locally. The University of Alberta area has some of the best cafés." },
  ],

  seasons: [
    {
      icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Edmonton transforms in summer — 17 hours of daylight, festivals almost every weekend, river valley packed with cyclists and kayakers. Fringe Festival in August is unmissable. Best time to visit.',
      rating: 5,
      note: 'Festival season',
    },
    {
      icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Beautiful golden aspen leaves in the river valley. Heritage Festival in September. Northern Lights season begins. Cooler but still pleasant. Oilers hockey season starts in October.',
      rating: 4,
      note: 'Northern Lights',
    },
    {
      icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Edmonton winters are very cold (-20°C average in January) but Edmontonians embrace it. Ice skating downtown, toboggan hills, ice carving festivals, and the best Northern Lights season. Dress warmly!',
      rating: 3,
      note: 'Very cold!',
    },
    {
      icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Snow can persist into April. River valley trails open as snow melts. Street festivals begin in May. Great for day trips to Jasper before the summer crowds arrive. Budget-friendly season.',
      rating: 3,
      note: 'Shoulder season',
    },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Plane',
      text: 'Edmonton International Airport (YEG) offers direct flights to major Canadian cities and select international destinations. One of the largest airports in Canada by land area.',
      time: '30 min by car/shuttle to downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 2 connects Edmonton to Calgary (~3 hours south). The Yellowhead Highway leads west to Jasper National Park (~4 hours) — one of the most scenic drives in Canada.',
      time: 'Calgary: 3h · Jasper: 4h',
    },
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'Getting Around',
      text: 'Edmonton Transit Service (ETS) runs buses and the LRT light rail line through downtown and the university area. A car is useful for river valley access and day trips.',
      time: 'ETS Smart Fare card · edmonton.ca/ets',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown / ICE District',
      area: 'Best for nightlife and hockey',
      text: 'Fairmont Hotel Macdonald, JW Marriott, Sutton Place. Walking distance to Rogers Place, restaurants, and the river valley stairs.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Edmonton', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Edmonton-Hotels.d178294.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      title: 'Old Strathcona / Whyte Ave',
      area: 'Best for arts and festivals',
      text: 'Boutique hotels and B&Bs steps from the Fringe Festival grounds, live music, and the City Market. Edmonton\'s most walkable, characterful neighbourhood.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Old-Strathcona--Edmonton', level: 'danger' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Strathcona+Edmonton', level: 'blue' },
      ],
    },
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'West Edmonton Mall Area',
      area: 'Best for families',
      text: 'Fantasyland Hotel offers themed rooms right inside the mall — waterpark, amusement park, and 800+ stores steps from your room.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Edmonton+Mall', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊', iconSrc: '/icons/attractions/ph_tram-thin.svg',
      title: 'Edmonton Transit Service (ETS) — LRT & Buses',
      text: 'ETS operates the LRT light rail (Capital Line, Metro Line, and the new Valley Line) and an extensive bus network across the city. A single Arc ticket or tap covers the whole system with free transfers within 90 minutes. Fares on this page are the 2026 City of Edmonton figures.',
      linkLabel: 'ETS Official',
      linkUrl: 'https://www.edmonton.ca/ets',
    },
    modes: [
      {
        icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
        title: 'LRT',
        text: 'Capital Line (north–south), Metro Line (north), and Valley Line (southeast) connect downtown, the university, and West Edmonton Mall area. Runs roughly 5am to 1am.',
        fareBox: {
          label: 'Fares',
          lines: ['Adult single (90 min): $3.75', '24-hour ticket: $10.50', 'Monthly fare cap (Arc card): $102', 'Transfers free within 90 min'],
        },
        linkLabel: 'LRT Map',
        linkUrl: 'https://www.edmonton.ca/ets/lrt',
      },
      {
        icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Buses',
        text: 'Extensive bus network reaching every quadrant of the city and feeding into LRT stations. Same fare as LRT with free transfers.',
        fareBox: {
          label: 'How to pay',
          lines: ['• Tap Visa/Mastercard directly', '• Or use a reloadable Arc card (monthly fare cap)', '• Free transfer within 90 min', '• Ride app for live schedules'],
        },
        linkLabel: 'Bus Routes',
        linkUrl: 'https://www.edmonton.ca/ets/bus-routes',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Uber & Lyft', text: 'Both widely available. Useful for late-night rides and trips beyond LRT coverage.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike Share', text: 'Shared e-bikes and bikes operate downtown and along river valley trails in summer.' },
          { icon: '🚙', iconSrc: '/icons/attractions/ph_car-profile-thin.svg', title: 'Car Rental', text: 'Recommended for Elk Island, Jasper, and river valley park day trips — transit does not reach them.' },
        ],
      },
    ],
    proTip: {
      label: 'Airport Tip:',
      text: 'There is no direct LRT to Edmonton International Airport (YEG) — take the Sky Shuttle or a taxi/rideshare, about 30 minutes from downtown.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: '🎉 Alberta Has NO Provincial Sales Tax!',
    headlineLevel: 'safe',
    description: 'Alberta is the only province with no PST. You only pay federal GST of 5%. This makes Edmonton one of the cheapest major cities in Canada for shopping and dining — including at West Edmonton Mall. A $500 shopping trip costs $25 in tax — vs $60 in Vancouver or $65 in Toronto. Hotels are the exception: Alberta’s Tourism Levy on accommodation rose from 4% to 6% on 1 April 2026, charged on top of GST (bookings made before that date keep 4%; stays of 28+ nights are exempt). Some hotels also add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Edmonton / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    { icon: '📞', iconSrc: '/icons/attractions/ph_phone-thin.svg', title: 'Emergency', lines: ['911', 'Police · Fire · Ambulance', '24/7'] },
    { icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', title: 'Transit Pass', text: 'ETS Smart Fare card works on buses and LRT — tap on and pay by zone-free flat fare.' },
    { icon: '🧥', iconSrc: '/icons/attractions/ph_hoodie-thin.svg', title: 'Winter Gear', text: 'Winters routinely hit -20°C. Pack a proper parka, insulated boots, and layers if visiting Nov–Mar.' },
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Tipping', text: '15–20% at restaurants and for taxis is standard and expected, same as the rest of Canada.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', title: 'Northern Lights', text: 'Best viewed Sep–Mar, 30+ minutes outside the city away from light pollution, on clear dark nights.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Cannabis', text: 'Legal for adults 18+ in Alberta. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Ride Sharing', text: 'Uber and Lyft both operate throughout Edmonton — reliable and often faster than driving downtown.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Day Trips', text: 'Jasper National Park (4h), Elk Island National Park (45 min), and the Ukrainian Cultural Heritage Village are all easy trips.' },
  ],
};

export default EDMONTON;
