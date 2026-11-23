// Gros Morne National Park — данные страницы /park/gros-morne

export const GROS_MORNE = {
  slug: 'gros-morne',
  name: 'Gros Morne National Park',
  shortName: 'Gros Morne',
  province: 'Newfoundland and Labrador',
  tag: 'UNESCO World Heritage · Est. 1973',
  heroImage: '/parks/gros-morne.jpg',
  description:
    "Where the ocean meets ancient mountains — Gros Morne is a geological wonder that helped reshape our understanding of plate tectonics. Towering fjord-like lakes, dramatic coastal cliffs, and some of the Earth's oldest exposed rock.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1973' },
    { label: 'Area', value: '1,805 km²' },
    { label: 'Rating', value: '4.9 ★' },
    { label: 'Highest Peak', value: 'Gros Morne Mt 806m' },
    { label: 'Coastline', value: '50+ km' },
    { label: 'Rock Age', value: '480M years' },
  ],

  badges: ['UNESCO 1987', 'Plate Tectonics', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 4 },
  ],

  spotlight: {
    tag: 'UNESCO World Heritage',
    emoji: '🌍',
    title: 'UNESCO World Heritage Site — Since 1987',
    text: "Gros Morne was inscribed as a UNESCO World Heritage Site because it provides outstanding examples of Earth's geological processes — specifically the movement of tectonic plates. The park contains some of the best exposed examples of mantle rock in the world, known as the Tablelands, which proved the theory of plate tectonics. Walking the Tablelands is like walking on the ocean floor of an ancient sea.",
    link: { label: 'UNESCO Page', url: 'https://whc.unesco.org/en/list/419' },
  },

  attractions: [
    {
      name: 'Western Brook Pond',
      image: '/nl/parks/gros-morne.png',
      tag: 'Iconic',
      tagLevel: 'blue',
      meta: 'Landlocked fjord · 2-hour boat tour · Waterfalls from 2,000 ft',
      status: {label:'Boat tours closed for winter',level:'closed',until:'2027-05-15'},
      details: {
        "lead": "A glacier-carved, landlocked fjord with billion-year-old cliffs. You reach it on a 3 km trail from the parking lot, then cruise it by boat.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Boat tour",
                "text": "A 2 hour tour with live interpretation, run by Bontours on two boats with canopied decks and on-board washrooms."
              },
              {
                "title": "Cliffs and waterfalls",
                "text": "Parks Canada describes waterfalls cascading from 2,000 feet that often turn to mist before reaching the pond."
              },
              {
                "title": "Gorge hike",
                "text": "Bontours also runs a Western Brook Pond gorge hike with a shuttle. See bontours.ca for details."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reserve",
                "text": "Reservations are recommended: 709-458-2016 or 1-888-458-2016, bontours.ca, or the ticket office on Pond Road in Rocky Harbour."
              },
              {
                "title": "Weather",
                "text": "Departures depend on wind and weather conditions."
              },
              {
                "title": "No pets",
                "text": "Pets are not permitted on the boats."
              },
              {
                "title": "Closed for winter",
                "text": "The tours run from mid-May to mid-October, so they are off now. Parks Canada gives no 2027 dates yet."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The trailhead is 27 km north of Rocky Harbour on Route 430. A 3 km trail, about 45 minutes, leads to the dock."
          },
          {
            "label": "Season",
            "text": "Mid-May to mid-October."
          },
          {
            "label": "Cost",
            "text": "See Bontours prices; the park pass is separate."
          }
        ],
        "link": {
          "label": "Parks Canada: Western Brook Pond",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/western-brook"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Tablelands',
      icon: '🌍',
      tag: 'Geological',
      tagLevel: 'gold',
      meta: 'Earth’s mantle exposed · Half a billion years in the making · Easy 4 km trail',
      details: {
        "lead": "A surreal, barren, orange landscape where rock formed deep in the Earth’s mantle half a billion years ago now lies exposed.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tablelands Trail",
                "text": "Rated easy, 4 km return. It follows an old roadbed along the base of the mountain and ends at Winter House Brook Canyon."
              },
              {
                "title": "Serpentine Loop",
                "text": "A shorter option for a quick look."
              },
              {
                "title": "Guided walk",
                "text": "“Walk Upon the Earth’s Mantle” is a two-hour guided hike. Parks Canada’s tours page lists the times."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "No route to the top",
                "text": "There are no route markers to the top of the Tablelands, so route finding and navigation skills are required. You are responsible for your own safety."
              },
              {
                "title": "Discovery Centre",
                "text": "The Discovery Centre in Woody Point is summer only; in 2026 it was open from June 1 to September 7, 9 am to 5 pm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "4 km return, 88 m of climbing."
          },
          {
            "label": "Time",
            "text": "1 to 2 hours."
          },
          {
            "label": "Trailhead",
            "text": "4 km west of the Discovery Centre in Woody Point on Route 431."
          },
          {
            "label": "Park pass",
            "text": "Required. Entry for youth 17 and under is free."
          }
        ],
        "link": {
          "label": "Parks Canada: The Tablelands",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/tablelands"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gros Morne Mountain',
      icon: '🏔️',
      tag: 'Summit',
      tagLevel: 'safe',
      meta: '806 m summit · Panoramic views · Summit trail closed May 1 – June 27',
      status: {label:'Summit not recommended in winter',level:'caution',until:'2027-04-30'},
      details: {
        "lead": "The hike to the 806 m summit is a difficult one-day climb of 17 km return with about 1,000 m of elevation gain.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Approach Trail",
                "text": "9 km return, moderate, 463 m of climbing, 2.5 to 3.5 hours, ending at a viewing platform."
              },
              {
                "title": "Summit Trail",
                "text": "An 8 km loop rated difficult, with 537 m of climbing and 3.5 to 5 hours."
              },
              {
                "title": "Panoramic views",
                "text": "Parks Canada invites hikers to trek to the panoramic views atop the summit."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Spring closure",
                "text": "The summit trail is closed to hikers every year from May 1 to June 27 and reopens on June 28. Violators may be charged under the Canada National Parks Act."
              },
              {
                "title": "Best season",
                "text": "Summer to early fall, June 28 to mid-October. From mid-October to April 30, hiking the Summit Trail is not recommended."
              },
              {
                "title": "Rules",
                "text": "Stay on the trail and leave wildflowers and rocks where they are. Drones are not allowed. Dogs must be on a leash and are not recommended on the Summit Trail."
              },
              {
                "title": "Emergency",
                "text": "Call 1-877-852-3100. Camping at Ferry Gulch needs a permit."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "17 km return, with 1,000 m of climbing."
          },
          {
            "label": "Time",
            "text": "At least 6 to 8.5 hours."
          },
          {
            "label": "Difficulty",
            "text": "Parks Canada rates it difficult."
          }
        ],
        "link": {
          "label": "Parks Canada: Gros Morne Mountain",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking/mgm-gmm"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Lobster Cove Head Lighthouse',
      icon: '⚓',
      tag: 'Coastal',
      tagLevel: 'blue',
      meta: 'Lighthouse · Open May 15 – Oct 12, 2026 · Grounds open year-round',
      status: {label:'Lighthouse closed for winter',level:'closed',until:'2027-05-15'},
      details: {
        "lead": "A lighthouse on the coast inside the park. In 2026 it was open from May 15 to October 12, and the grounds stay open year-round.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 hours",
                "text": "May 15 to October 12, 2026, 9 am to 5 pm."
              },
              {
                "title": "Grounds",
                "text": "Open year-round."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Off-season",
                "text": "The lighthouse is closed now. Parks Canada has not yet listed 2027 dates, so check the hours page in spring."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Hours",
            "text": "9 am to 5 pm during the season."
          }
        ],
        "link": {
          "label": "Parks Canada: hours of operation",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bonne Bay',
      icon: '⛵',
      tag: 'Wildlife',
      tagLevel: 'blue',
      meta: 'Boat tours · Sea kayaking · Water taxi to Woody Point',
      details: {
        "lead": "The bay between Norris Point and Woody Point, explored by boat tour, sea kayak or water taxi. These details come from operators’ listings, not from Parks Canada.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bonne Bay boat tour",
                "text": "Bontours runs a 2 hour tour of the bay’s natural and cultural history, mostly from Norris Point."
              },
              {
                "title": "Marine Station",
                "text": "A family Discovery tour features Killdevil, the Tablelands and the Long Range Mountains and ends at the Bonne Bay Marine Station. A Marine Discovery tour adds a 30 minute aquarium visit."
              },
              {
                "title": "Sea kayaking",
                "text": "Gros Morne Adventures in Norris Point offers a 2 hour guided paddle in tandem sea kayaks that continues to the marine station, plus kayak rentals."
              },
              {
                "title": "Water taxi",
                "text": "A passenger water taxi links Norris Point and Woody Point; one listing gave C$8 one way and C$14 return."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm first",
                "text": "Prices and schedules in the listings range from 2023 to 2026, so confirm them with the operators."
              },
              {
                "title": "Wildlife",
                "text": "The listings mention whales, bald eagles, Arctic terns, jellyfish and blue mussels, but what you see varies by day."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Boat tours",
            "text": "Bontours: bontours.ca, 709-458-2016."
          },
          {
            "label": "Season",
            "text": "Mainly summer. Ask the operators about dates."
          }
        ],
        "link": {
          "label": "Bontours",
          "url": "https://bontours.ca"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Norris Point & Rocky Harbour',
      icon: '🏘️',
      tag: 'Village',
      tagLevel: 'safe',
      meta: 'Rocky Harbour Visitor Centre · Boat tours from Norris Point · Water taxi to Woody Point',
      details: {
        "lead": "The park’s Visitor Centre is in Rocky Harbour, and Norris Point, on Bonne Bay, is where the bay boat tours and kayaking start.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Visitor Centre",
                "text": "Open year-round with reduced hours that are subject to change. Annual and day passes are sold here."
              },
              {
                "title": "Norris Point",
                "text": "Bontours runs most of its Bonne Bay trips from here, and Gros Morne Adventures offers sea kayaking."
              },
              {
                "title": "Pond Road",
                "text": "The Bontours ticket office for the Western Brook Pond tour is on Pond Road in Rocky Harbour."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "From October 13, 2026 to May 13, 2027 the Visitor Centre is open Monday to Friday, 10 am to 3 pm, and closed on Saturdays, Sundays and holidays."
              },
              {
                "title": "Summer hours",
                "text": "From May 14 to October 11, 2027 it is open 9 am to 5 pm."
              },
              {
                "title": "Summer-only services",
                "text": "The Woody Point Discovery Centre and the Wiltondale gate kiosk are open in summer only."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Phone",
            "text": "(709) 458-2417. In an emergency, call 1-877-852-3100."
          },
          {
            "label": "Park pass",
            "text": "Required. Entry for youth 17 and under is free."
          }
        ],
        "link": {
          "label": "Parks Canada: hours of operation",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
  ],

  wildlifeWarning:
    'Black bears are present in Gros Morne. Carry bear spray on all inland trails. Newfoundland has the highest moose density in North America — use extreme caution near roads at dawn and dusk.',
  wildlife: [
    { name: 'Black Bear', level: 'danger', chance: '★★★☆☆ Moderate chance' },
    { name: 'Moose', level: 'caution', chance: '★★★★★ Everywhere — be careful' },
    { name: 'Humpback Whale', level: 'safe', chance: '★★★★☆ July to September' },
    { name: 'Harbour Seal', level: 'safe', chance: '★★★★☆ Coastal areas' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★★☆ Near rivers and coast' },
    { name: 'Red Fox', level: 'safe', chance: '★★★★☆ Very common' },
    { name: 'Atlantic Puffin', level: 'safe', chance: '★★★☆☆ Coastal cliffs' },
    { name: 'Caribou', level: 'safe', chance: '★★★☆☆ Highland plateau' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails open, boat tours on Western Brook Pond running daily. Whale watching at its best in July–August. Wildflowers on the highland plateau. Book well in advance.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Stunning fall colours on the Long Range Mountains. Fewer crowds. Cooler hiking temperatures. Some boat tours end in September. One of the most beautiful fall landscapes in Atlantic Canada.',
      rating: 5,
      note: 'Best colours',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'blue',
      text: 'Cross-country skiing and snowshoeing. Very few crowds — experience true wilderness solitude. Some services closed. Weather can be severe — Atlantic storms arrive quickly. Check forecasts carefully.',
      rating: 3,
      note: 'For adventurers',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Icebergs drift past the coast in May — a spectacular sight. Seabirds returning. Some trails may still have snow. Whale watching begins in late May. A magical and underrated season to visit.',
      rating: 4,
      note: 'Icebergs!',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/newfoundland-and-labrador/gros-morne-national-park',
  trails: [
    {
      "name": "Gros Morne Mountain Trail",
      "length": "17 km return",
      "gain": "1,000 m gain",
      "time": "6–8.5 hours",
      "area": "Gros Morne Village",
      "difficulty": "Hard",
      "status": {
        "label": "Not recommended in winter",
        "level": "caution",
        "until": "2027-04-30"
      },
      "details": {
        "lead": "A difficult one-day climb to the 806 m summit. The Approach Trail (9 km return) leads to the Summit Trail, an 8 km loop.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Approach Trail",
                "text": "9 km return, moderate, 463 m of climbing, 2.5 to 3.5 hours. It ends at a viewing platform, and you can turn back at the bridge for a shorter hike."
              },
              {
                "title": "Summit Trail",
                "text": "8 km loop, difficult, 537 m of climbing, 3.5 to 5 hours."
              },
              {
                "title": "Summit",
                "text": "806 m, with panoramic views."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Spring closure",
                "text": "The Summit Trail is closed to hikers from May 1 to June 27 every year and reopens on June 28."
              },
              {
                "title": "Winter",
                "text": "From mid-October to April 30, hiking the Summit Trail is not recommended. On November 13, 2026 Parks Canada listed it as not recommended."
              },
              {
                "title": "Dogs",
                "text": "Dogs are not recommended on the Summit Trail, and must be on a leash."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "17 km return."
          },
          {
            "label": "Time",
            "text": "At least 6 to 8.5 hours."
          },
          {
            "label": "Climb",
            "text": "About 1,000 m."
          },
          {
            "label": "Emergency",
            "text": "Call 1-877-852-3100."
          }
        ],
        "link": {
          "label": "Parks Canada: Gros Morne Mountain",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking/mgm-gmm"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Tablelands Trail",
      "length": "4 km return",
      "gain": "88 m gain",
      "time": "1–2 hours",
      "area": "Woody Point",
      "difficulty": "Easy",
      "details": {
        "lead": "An easy walk along an old roadbed at the base of the Tablelands, where rock from the Earth’s mantle is exposed.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The walk",
                "text": "4 km return, rated easy. It follows an old roadbed along the base of the mountain and ends at Winter House Brook Canyon."
              },
              {
                "title": "Serpentine Loop",
                "text": "A shorter option."
              },
              {
                "title": "Guided walk",
                "text": "“Walk Upon the Earth’s Mantle” is a two-hour guided hike."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Stay on the trail",
                "text": "There are no route markers to the top of the Tablelands, so route finding is needed if you go off the trail, and you are responsible for your own safety."
              },
              {
                "title": "Discovery Centre",
                "text": "It is open in summer only, from June 1 to September 7 in 2026."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Trailhead",
            "text": "4 km west of the Discovery Centre in Woody Point on Route 431."
          },
          {
            "label": "Climb",
            "text": "88 m of elevation gain."
          },
          {
            "label": "Time",
            "text": "1 to 2 hours."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Gros Morne",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Western Brook Pond Trail",
      "length": "6 km return",
      "gain": "42 m gain",
      "time": "1–2 hours",
      "area": "Highway 430",
      "difficulty": "Easy",
      "details": {
        "lead": "The flat walk from the parking lot to the boat dock on Western Brook Pond, with a 1.8 km scenic loop.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Walk to the dock",
                "text": "3 km each way, about 45 minutes one way, with only 42 m of climbing."
              },
              {
                "title": "Scenic loop",
                "text": "A 1.8 km loop is also listed."
              },
              {
                "title": "Boat tour",
                "text": "The mid-May to mid-October boat tour starts at the dock. It is operated by Bontours and runs about 2 hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Boat is off-season",
                "text": "The tours do not run in winter, but the trail is still a walk to the water."
              },
              {
                "title": "Allow time",
                "text": "If you have a boat ticket, leave enough time to reach the dock before departure."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Trailhead",
            "text": "27 km north of Rocky Harbour on Route 430."
          },
          {
            "label": "Distance",
            "text": "6 km return."
          },
          {
            "label": "Time",
            "text": "1 to 2 hours."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Gros Morne",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Green Gardens Trail",
      "length": "9 km return",
      "gain": "415 m gain",
      "time": "3–4 hours",
      "area": "Trout River",
      "difficulty": "Moderate",
      "details": {
        "lead": "A trail down to the coast at Old Man Cove, 4.5 km each way. The way back is uphill most of the way and steep in places.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Old Man Cove",
                "text": "The trail reaches the coast after 4.5 km, where there are primitive campsites (permit required)."
              },
              {
                "title": "Open section",
                "text": "The 9 km return hike to Old Man Cove is the open section."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed section",
                "text": "The part from Steve’s Cove to Wallace Brook, the Wallace Brook Trail and the connector are closed because of erosion. Parks Canada’s bulletin runs from May 1, 2026 to April 30, 2027, while the trail page says closed permanently since 2017. Stay out of the closed area, which extends 30 m on either side."
              },
              {
                "title": "Climb back",
                "text": "Save energy for the return: it is uphill and steep in places."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Trailhead",
            "text": "On Route 431, 13 km from Woody Point and 3 km from Trout River."
          },
          {
            "label": "Distance",
            "text": "9 km return."
          },
          {
            "label": "Climb",
            "text": "415 m of elevation gain."
          }
        ],
        "link": {
          "label": "Parks Canada: Green Gardens",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking/gg"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Lookout Trail",
      "length": "5.8 km loop",
      "gain": "363 m gain",
      "time": "2–3 hours",
      "area": "Woody Point",
      "difficulty": "Moderate",
      "details": {
        "lead": "A moderate loop from the Discovery Centre in Woody Point, 5.8 km with 363 m of climbing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The loop",
                "text": "5.8 km, 2 to 3 hours."
              },
              {
                "title": "Starts in Woody Point",
                "text": "The trailhead is the Discovery Centre parking lot on Route 431."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Discovery Centre",
                "text": "The centre itself is open in summer only; in 2026 that was June 1 to September 7."
              },
              {
                "title": "Hunting season",
                "text": "In November 2026 Parks Canada put moose hunting cautions on many park trails. Check the conditions page."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "5.8 km loop."
          },
          {
            "label": "Climb",
            "text": "363 m of elevation gain."
          },
          {
            "label": "Time",
            "text": "2 to 3 hours."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Baker’s Brook Falls",
      "length": "10 km return",
      "gain": "195 m gain",
      "time": "2–3 hours",
      "area": "Berry Hill",
      "difficulty": "Moderate",
      "details": {
        "lead": "A moderate walk to the falls on Baker’s Brook, 10 km return with 195 m of climbing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The walk",
                "text": "10 km return, 2 to 3 hours."
              },
              {
                "title": "Trailhead",
                "text": "In the Berry Hill campground, 5 km north of Rocky Harbour on Route 430."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Off-season access",
                "text": "The campground was open from May 22 to September 28 in 2026, so check access to the trailhead outside the season."
              },
              {
                "title": "Hunting season",
                "text": "In November 2026 Parks Canada put moose hunting cautions on many park trails. Check the conditions page."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "10 km return."
          },
          {
            "label": "Climb",
            "text": "195 m of elevation gain."
          },
          {
            "label": "Time",
            "text": "2 to 3 hours."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/nl/grosmorne/activ/experiences/randonnee-hiking/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    }
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Deer Lake Regional Airport (YDF) — the closest airport, just 50 km from the park. Direct flights from Halifax, Montreal, and Toronto. Car rental available at the airport.',
      time: '50 km from Deer Lake Airport',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: "From St. John's take the Trans-Canada Highway (TCH) west to Deer Lake, then Highway 430 north into the park. The drive from St. John's takes about 6 hours. A scenic and essential road trip.",
      time: "6h from St. John's · TCH then Hwy 430",
    },
    {
      icon: '🚗',
      title: 'By Ferry',
      text: 'Marine Atlantic operates ferries from North Sydney, Nova Scotia to Port aux Basques, NL — then drive north on the TCH. The crossing takes 6–7 hours. Book well in advance for summer travel.',
      time: 'Ferry 6–7h · Then 3h drive north',
    },
  ],
  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass needed. Children under 18 are free.',
    buyText: 'Western Brook Pond boat tours must be booked separately through Ocean Watch Tours — very popular, book in advance!',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏨',
      title: 'Rocky Harbour Hotels',
      text: "Rocky Harbour is the main gateway town. Ocean View Hotel and Fisherman's Landing Inn are the most popular. Great base for exploring the northern part of the park.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rocky+Harbour+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Camping in the Park',
      text: 'Berry Hill Campground is the largest and most popular — close to Rocky Harbour. Trout River, Green Point, and Lomond campgrounds also available. Reserve early for summer.',
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/GrosMorne', level: 'safe' },
      ],
    },
    {
      icon: '🏠',
      title: 'Cottages and Cabins',
      text: 'Many charming Newfoundland cottages and cabins available for rent in Rocky Harbour, Norris Point, and Woody Point. Authentic local experience with kitchen facilities.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Rocky-Harbour--Newfoundland', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/newfoundland-and-labrador', level: 'blue' },
      ],
    },
    {
      icon: '🌟',
      title: 'Norris Point B&Bs',
      text: 'The charming village of Norris Point sits right on Bonne Bay. Several excellent B&Bs with stunning views. A quieter and more intimate alternative to Rocky Harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norris+Point+Newfoundland', level: 'blue' },
      ],
    },
  ],

  practical: [
    { icon: '📞', title: 'Emergency', lines: ['911', 'Park Wardens · 709-458-2417', '24/7'] },
    { icon: '🐻', title: 'Bear Safety', text: 'Carry bear spray on inland trails. Store food properly at campsites.' },
    { icon: '🎫', title: 'Parks Pass', text: 'Discovery Pass or day pass required. Buy online at reservation.pc.gc.ca.' },
    { icon: '🚤', title: 'Boat Tours', text: 'Western Brook Pond tours book out fast in summer — reserve well ahead.' },
    { icon: '🌦️', title: 'Weather', text: 'Atlantic storms arrive quickly — check forecasts daily, especially on the coast.' },
    { icon: '⛽', title: 'Fuel Up', text: 'Gas stations are sparse — fill up in Deer Lake or Rocky Harbour before exploring.' },
    { icon: '📶', title: 'Cell Service', text: 'Patchy throughout the park. Download offline maps before your trip.' },
    { icon: '🧊', title: 'Icebergs', text: 'Best viewed in May from coastal viewpoints near Rocky Harbour and St. Anthony.' },
  ],

  gallery: [
    '/parks/gros-morne.jpg',
    '/nl/parks/gros-morne.png',
  ],
};

export default GROS_MORNE;
