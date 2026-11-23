// Jasper National Park — данные страницы /park/jasper

const BASE = '/parks/Jasper National Park';

export const JASPER = {
  slug: 'jasper',
  name: 'Jasper National Park',
  province: 'Alberta',
  tag: "Dark Sky Preserve · UNESCO World Heritage",
  heroImage: `${BASE}/Maligne Lake.jpg`,
  heroCaption: 'Maligne Lake · Jasper NP · Alberta',
  description:
    "Canada's largest Rocky Mountain national park — a vast wilderness of glaciers, hot springs, and roaming wildlife. One of the world's largest Dark Sky Preserves, Jasper offers some of the best stargazing on Earth.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1907' },
    { label: 'Area', value: '10,878 km²' },
    { label: 'Rating', value: '4.8 ★' },
    { label: 'Visitors/Year', value: '2.5M+' },
    { label: 'Highest Peak', value: 'Mt Columbia 3,747m' },
    { label: 'Dark Sky', value: "World's Largest" },
  ],

  badges: ['UNESCO', 'Dark Sky Preserve', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  attractions: [
    {
      name: 'Maligne Lake',
      image: `${BASE}/Maligne Lake.jpg`,
      tag: '🏆 Iconic',
      tagLevel: 'blue',
      meta: 'Spirit Island · Boat cruises · Largest lake in the park',
      details: {
        "lead": "The largest lake in the park, about 48 km from the Jasper townsite on a paved road, roughly an hour’s drive. There is no public transit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Spirit Island cruise",
                "text": "Resellers list the 2026 season from late May or June 1 to October 11. Adult prices ranged from about $80 to $106 before GST."
              },
              {
                "title": "Lake access",
                "text": "Parks Canada lists the Maligne Lake trailhead, the boathouse picnic site and the Maligne River day-use area as open."
              },
              {
                "title": "Maligne Canyon",
                "text": "The Maligne Canyon trailhead and picnic area are closed, and the canyon stays closed through 2026, including in winter."
              },
              {
                "title": "Cavell Road",
                "text": "Cavell Road and its two trails are also closed for 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Car needed",
                "text": "There is no transit to the lake, so plan to drive."
              },
              {
                "title": "Dates unconfirmed",
                "text": "The cruise dates come from resellers, not Parks Canada. Confirm with the operator, especially for 2027."
              },
              {
                "title": "Non-refundable",
                "text": "Tickets are generally non-refundable."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Cruise about $80–106 for adults; park pass extra."
          },
          {
            "label": "Getting there",
            "text": "About 48 km from Jasper by car, around an hour."
          },
          {
            "label": "Best time",
            "text": "Summer, while the cruise runs."
          }
        ],
        "link": {
          "label": "Parks Canada: what’s open in Jasper",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Miette Hot Springs',
      image: `${BASE}/Miette Hot Springs.jpeg`,
      tag: '♨️ Hot Springs',
      tagLevel: 'danger',
      meta: 'Hottest springs in the Canadian Rockies · Seasonal · Separate fee',
      status: {label:'Closed for the season',level:'closed',until:'2027-05-15'},
      details: {
        "lead": "The hottest springs in the Canadian Rockies, about an hour north-east of town up a winding mountain road. The 2026 season ended on October 12.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "Open from May 15 to October 12, 2026. One Jasper travel blog says it reopens in May 2027."
              },
              {
                "title": "Prices",
                "text": "Most recent sources list adults $19.75, and youth (3–17) and seniors $17.25, in person only."
              },
              {
                "title": "Hours",
                "text": "One source says 11 am to 9 pm with last entry at 8:30 pm; another lists longer summer hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "Parks Canada’s open and closed list shows the hot springs closed, with only the Miette Hot Springs picnic area open."
              },
              {
                "title": "Separate fee",
                "text": "Pool admission is separate from the park pass."
              },
              {
                "title": "Winding road",
                "text": "The road up is winding, so allow extra time."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $19.75 for adults, plus the park pass."
          },
          {
            "label": "Getting there",
            "text": "About an hour north-east of Jasper by car."
          },
          {
            "label": "Best time",
            "text": "May to mid-October. Confirm the 2027 opening on Parks Canada."
          }
        ],
        "link": {
          "label": "Parks Canada: Miette Hot Springs",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/sources-miette-springs"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Icefields Parkway',
      image: `${BASE}/Icefields Parkway.png`,
      tag: '🛣️ Scenic Drive',
      tagLevel: 'blue',
      meta: '232 km · Athabasca Glacier · Columbia Icefield · Sunwapta Falls',
      details: {
        "lead": "The 232 km Highway 93 North between Jasper and Lake Louise, a remote road with limited services and no cell coverage. This page covers the Jasper end.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Athabasca Falls",
                "text": "31 km south of Jasper, at the junction of Highways 93 and 93A. About 20 minutes by car."
              },
              {
                "title": "Sunwapta Falls",
                "text": "54 km south of Jasper on Highway 93, about 30 minutes. The Lower Sunwapta Falls trail is 2.6 km return with 87 m of climbing."
              },
              {
                "title": "Athabasca Glacier",
                "text": "Beside the road at the Columbia Icefield, with a short trail to the toe of the glacier."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fuel up first",
                "text": "There are no gas stations between Jasper and Saskatchewan River Crossing, 154 km south of Jasper."
              },
              {
                "title": "Winter driving",
                "text": "Snow tires (snowflake or M+S) or chains are required from November 1 to March 31, and whenever the road is snow-covered. Parks Canada’s winter page gives April 1, so check before you go. Services are closed along the road in winter."
              },
              {
                "title": "Weather",
                "text": "Temperatures are cool and winds are often strong, and wet snow is possible even in midsummer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Park pass",
            "text": "A valid national park pass is required to drive the Parkway."
          },
          {
            "label": "Cell service",
            "text": "None year-round. From May to early October there is limited coverage at the Columbia Icefield only."
          },
          {
            "label": "Conditions",
            "text": "Check 511 Alberta and the weather forecast before you start."
          }
        ],
        "link": {
          "label": "Parks Canada: Icefields Parkway",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails/glaciers-icefields"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Athabasca Falls',
      image: `${BASE}/Athabasca Falls.jpg`,
      tag: '🌊 Waterfall',
      tagLevel: 'blue',
      meta: 'One of the most powerful falls in the mountain parks · 23 m drop',
      details: {
        "lead": "A 23 m waterfall that is not very high by Canadian Rockies standards, but the volume of the river makes it one of the most powerful falls in the mountain national parks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Location",
                "text": "31 km south of Jasper, at the junction of Highways 93 and 93A, about 20 minutes by car."
              },
              {
                "title": "Power, not height",
                "text": "The falls are known for the size of the river rather than the drop."
              },
              {
                "title": "Access",
                "text": "Parks Canada lists the Athabasca Falls day-use area and trailhead as open."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Stay behind the railings",
                "text": "Mist covers the rocks with a thin, slippery film of water. Parks Canada says do not cross the railings; the rock beyond is slippery and dangerous."
              },
              {
                "title": "Winter and road status",
                "text": "Check Parks Canada for the status of Highway 93A before you go."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By car from Jasper, 31 km south."
          }
        ],
        "link": {
          "label": "Parks Canada: Athabasca Falls",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/itineraires-itineraries/athabasca"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dark Sky Festival',
      image: `${BASE}/Dark Sky Festival.jpg`,
      tag: '🌌 Dark Sky',
      tagLevel: 'gold',
      meta: 'Every October · Stargazing, talks and music · Dark Sky Preserve',
      status: {label:'Next: Oct 15–24, 2027',level:'blue',until:'2027-10-24'},
      details: {
        "lead": "Jasper’s annual festival of science, music, art and stargazing, held every October. Jasper National Park was designated a Dark Sky Preserve in 2011.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dates",
                "text": "The 2026 festival ran from mid-October to October 25. Tourism Jasper lists the next one as October 15–24, 2027, and the festival says it runs every October, starting the weekend after Thanksgiving."
              },
              {
                "title": "Sun to Stars",
                "text": "In 2026, a dining and stargazing experience on top of Whistlers Mountain, reached by the Jasper SkyTram, with astronomers from the Jasper Planetarium."
              },
              {
                "title": "Dark Sky Preserve",
                "text": "Designated by the Royal Astronomical Society of Canada, one of 17 in Canada. The festival calls it the second largest in the world and the largest accessible one, with a town inside its limits."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free and ticketed",
                "text": "The programme mixes free and ticketed events. Tickets for Tourism Jasper events are non-refundable, and children 2 and under do not need one."
              },
              {
                "title": "Dress warm",
                "text": "The festival suggests warm layers, mitts, scarves and toques. October lows can be around −5 °C, and highs around 15 °C."
              },
              {
                "title": "Bring a chair",
                "text": "For outdoor events, and expect uneven terrain."
              },
              {
                "title": "Event guide",
                "text": "Pick one up at the Jasper Visitor Experience Centre, 414 Patricia Street."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Next festival",
            "text": "October 15–24, 2027 per Tourism Jasper. This date is not yet confirmed on the festival site."
          },
          {
            "label": "Tickets",
            "text": "A mix of free and ticketed events. See jasperdarksky.travel for the programme."
          },
          {
            "label": "Contact",
            "text": "inquiries@jasper.travel or 780-820-1006."
          }
        ],
        "link": {
          "label": "Jasper Dark Sky Festival",
          "url": "https://jasperdarksky.travel/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Columbia Icefield',
      image: `${BASE}/Columbia Icefield.jpg`,
      tag: '🧊 Glacier',
      tagLevel: 'safe',
      meta: 'Walk on the glacier with a tour · Skywalk · Ice Explorer tours',
      status: {label:'Tours closed for winter',level:'closed',until:'2027-05-01'},
      details: {
        "lead": "The Athabasca Glacier sits beside the Icefields Parkway, inside Jasper National Park. You can walk to its toe on your own, but Parks Canada warns against walking on the glacier itself; the guided tours are the way onto the ice.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Columbia Icefield Adventure",
                "text": "A 2.5 to 3 hour tour with Pursuit that includes about 15 to 25 minutes on the glacier. The 2026 season ended on October 11; the 2027 season is listed from May 1 to October 11, weather permitting."
              },
              {
                "title": "Skywalk and Ice Odyssey",
                "text": "Pursuit also runs the glass-floored Columbia Icefield Skywalk and the Ice Odyssey, a two-hour glacier-only experience for 5 to 10 guests."
              },
              {
                "title": "Toe of the glacier trail",
                "text": "Parks Canada Trail 52 is 1.8 km return with 60 m of climbing, about 1 hour. It starts across from the Icefield Centre, at the end of Toes of the Glacier Road."
              },
              {
                "title": "Forefield trail",
                "text": "Trail 53 is 3.6 km return and starts directly across from the Icefield Centre. Be ready to turn back where meltwater streams cross the trail."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Do not walk onto the glacier alone",
                "text": "Parks Canada says walking on the Athabasca Glacier is not safe: the ice at the toe is hollow and collapsing, and several people have died falling into crevasses."
              },
              {
                "title": "Closed now",
                "text": "The tours are off for winter and Parks Canada lists the Icefield Centre information desk as closed. The Toe of the Glacier trailhead is listed as open for hiking."
              },
              {
                "title": "Dress for the weather",
                "text": "Temperatures are cool, winds are often strong, and wet snow is possible even in midsummer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Icefields Parkway, about 104 km south of Jasper."
          },
          {
            "label": "Season",
            "text": "Tours May to mid-October, weather dependent. Confirm on pursuit.com."
          },
          {
            "label": "Park pass",
            "text": "Required to drive the Icefields Parkway. Tour tickets are separate."
          }
        ],
        "link": {
          "label": "Pursuit: Columbia Icefield",
          "url": "https://www.pursuit.com/experiences/columbia-icefield/"
        },
        "checked": "November 2026"
      },
    },
  ],

  wildlifeWarning:
    'Always carry bear spray in Jasper. Jasper has one of the highest wolf and grizzly populations in the Rockies. Keep 100m from bears and wolves, 30m from all other wildlife.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★★☆ Common — valley floors' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Very common — spring' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★★☆☆ Best chance in Rockies' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★★ Extremely common' },
    { name: 'Moose', level: 'caution', chance: '★★★☆☆ Wetland areas' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Endangered herd' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ High rocky slopes' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ Near Maligne Lake' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails and Maligne Lake accessible. Wildlife very active. Boat tours available. Book everything well in advance. Fewer crowds than Banff.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Best for wildlife and dark sky. Elk rut in September is spectacular. Dark Sky Festival in October. Fewer crowds, lower prices. Milky Way visible on clear nights.',
      rating: 5,
      note: 'Best overall',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Ice climbing, cross-country skiing, snowshoeing. Northern Lights visible on clear nights. Marmot Basin ski resort open. Very few crowds — a true winter wilderness experience.',
      rating: 4,
      note: 'Northern Lights',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Bears emerging from hibernation — high wildlife activity. Waterfalls at peak flow. Some high trails still snowy. Maligne Lake road opens in late May. Budget-friendly season.',
      rating: 3,
      note: 'Wildlife season',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/jasper-national-park',
  trails: [
    {
      "name": "Valley of the Five Lakes",
      "length": "1.8–8.9 km",
      "gain": "",
      "time": "30 min to half a day",
      "area": "South of Jasper Town",
      "difficulty": "Easy to Moderate",
      "level": "safe",
      "details": {
        "lead": "A short walk through forest past five small lakes, with loops of different lengths. It reopened on May 23, 2026, the first time since the fire, with a realigned ridge trail, a new short loop and better signage.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Wetland Way",
                "text": "Easy, 1.8 km return."
              },
              {
                "title": "Emerald Loop",
                "text": "Moderate, 5.4 km loop."
              },
              {
                "title": "Valley Loop",
                "text": "Moderate, 7.7 km loop."
              },
              {
                "title": "Recovering forest",
                "text": "Part of the walk now passes through burned and regrowing forest."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Mud",
                "text": "On November 22, 2026 Parks Canada rated all the trails here as fair, wet and muddy."
              },
              {
                "title": "One section still closed",
                "text": "A section at the south end of First Lake was still closed when the trail reopened. Check the trail conditions page."
              },
              {
                "title": "Dogs and bikes",
                "text": "Dogs are allowed. Biking has seasonal restrictions and horses have location restrictions, both set by Parks Canada bulletins."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "Parks Canada lists 1.8 km to 8.9 km depending on the loop."
          },
          {
            "label": "Time",
            "text": "From half an hour to half a day."
          },
          {
            "label": "Trailhead",
            "text": "P15, 9 km south of the Jasper townsite on the Icefields Parkway."
          },
          {
            "label": "Difficulty",
            "text": "Easy to moderate."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Sulphur Skyline",
      "length": "8 km return",
      "gain": "700 m gain",
      "time": "4–6 hours",
      "area": "Miette",
      "difficulty": "Hard",
      "details": {
        "lead": "One of the park’s difficult day hikes: 8 km round trip with 700 m of climbing, from the Miette Hot Springs area.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The effort",
                "text": "700 m of climbing in 8 km round trip."
              },
              {
                "title": "Soak afterwards",
                "text": "The Miette Hot Springs pools are seasonal. The 2026 season ended on October 12, and one Jasper travel blog says they reopen in May 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Not on the conditions page",
                "text": "The trail is not listed on Parks Canada’s trail conditions page, so ask at the visitor centre or check the open and closed list before you drive out."
              },
              {
                "title": "Leave time",
                "text": "Allow 4 to 6 hours round trip, and start early so you are down before dark."
              },
              {
                "title": "Bears",
                "text": "Carry bear spray and know how to use it."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "8 km round trip."
          },
          {
            "label": "Time",
            "text": "4 to 6 hours."
          },
          {
            "label": "Climb",
            "text": "700 m of elevation gain (trail 30)."
          },
          {
            "label": "Difficulty",
            "text": "Parks Canada rates it difficult."
          }
        ],
        "link": {
          "label": "Parks Canada: day hiking in Jasper",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Opal Hills",
      "length": "8.2 km loop",
      "gain": "460 m gain",
      "time": "4–6 hours",
      "area": "Maligne Lake",
      "difficulty": "Hard",
      "details": {
        "lead": "A loop from Maligne Lake, 8.2 km with 460 m of climbing. Parks Canada rates it difficult.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Loop",
                "text": "8.2 km loop (trail 22) that starts and ends at the lake."
              },
              {
                "title": "Lake access",
                "text": "Parks Canada lists the Maligne Lake trailhead as open for hiking."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Snow",
                "text": "On November 22, 2026 Parks Canada rated the trail poor, snowbound at higher elevation."
              },
              {
                "title": "Car needed",
                "text": "There is no public transit to Maligne Lake. Maligne Canyon, on the same road, is closed."
              },
              {
                "title": "Trailhead",
                "text": "It starts from the farthest of the three parking lots at Maligne Lake."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "8.2 km loop."
          },
          {
            "label": "Time",
            "text": "4 to 6 hours."
          },
          {
            "label": "Climb",
            "text": "460 m of elevation gain."
          },
          {
            "label": "Getting there",
            "text": "About 48 km from Jasper by car, roughly an hour."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Wilcox Pass",
      "length": "8 km return",
      "gain": "390 m gain",
      "time": "2–3 hours return",
      "area": "Icefields Parkway",
      "difficulty": "Moderate",
      "details": {
        "lead": "A climb beside the Icefields Parkway near the Columbia Icefield. A short stretch to the first viewpoint is 2.4 km return; the pass is 8 km return.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "First viewpoint",
                "text": "2.4 km return, about 1 hour."
              },
              {
                "title": "The pass",
                "text": "8 km return, about 2 to 3 hours, with 390 m of climbing (trail 50)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Snow",
                "text": "The pass area can be snowy until late July. On November 22, 2026 Parks Canada rated the trail poor and snow-covered."
              },
              {
                "title": "Difficulty",
                "text": "Parks Canada’s two pages disagree: moderate in the day-hike table, difficult on the conditions page."
              },
              {
                "title": "Drive prepared",
                "text": "The Icefields Parkway has no cell coverage and no gas between Jasper and Saskatchewan River Crossing."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Trailhead",
            "text": "Parking on the left at the Wilcox Creek Campground entrance road, 3.1 km south of the Icefield Centre."
          },
          {
            "label": "Distance",
            "text": "8 km return to the pass."
          },
          {
            "label": "Season",
            "text": "Best once the snow has gone, usually late July."
          }
        ],
        "link": {
          "label": "Parks Canada: day hiking in Jasper",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Old Fort Point",
      "length": "3.8 km loop",
      "gain": "130 m gain",
      "time": "1–2 hours",
      "area": "Jasper Town",
      "difficulty": "Moderate",
      "details": {
        "lead": "A short loop close to town, 3.8 km with 130 m of climbing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Close to town",
                "text": "The trailhead is 1.6 km from the townsite, by the Old Fort Point and Lac Beauvert access road."
              },
              {
                "title": "Short",
                "text": "A loop of 3.8 km (trails 1 and 1a), 1 to 2 hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Mud",
                "text": "On November 22, 2026 Parks Canada rated the trail fair, wet and muddy."
              },
              {
                "title": "Bears",
                "text": "Carry bear spray and know how to use it."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "3.8 km loop."
          },
          {
            "label": "Time",
            "text": "1 to 2 hours."
          },
          {
            "label": "Climb",
            "text": "130 m of elevation gain."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Maligne Canyon",
      "length": "4.4 km return",
      "gain": "100 m gain",
      "time": "2–4 hours",
      "area": "Maligne Road",
      "difficulty": "Moderate",
      "status": {
        "label": "Closed until further notice",
        "level": "closed"
      },
      "details": {
        "lead": "Parks Canada describes the canyon as having the best views of Jasper’s famous limestone gorge. It is closed to the public right now.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The gorge",
                "text": "A limestone canyon on the Maligne Road, 4.4 km round trip with 100 m of climbing (trails 7g and 7)."
              },
              {
                "title": "Trailhead",
                "text": "Fifth Bridge, 8 km east, according to Parks Canada."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed",
                "text": "Parks Canada’s trail table says closed until further notice, and the conditions page (November 22, 2026) says Superintendent closure, no public access. Please do not enter."
              },
              {
                "title": "Maligne Lake is open",
                "text": "The lake itself is on the same road, and its trailhead is listed as open."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "4.4 km round trip."
          },
          {
            "label": "Time",
            "text": "2 to 4 hours."
          },
          {
            "label": "Status",
            "text": "Closed. Check Parks Canada for any reopening."
          }
        ],
        "link": {
          "label": "Parks Canada: trail conditions",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/activ/experience/sentiers-trails/etat-sentiers-trail-conditions"
        },
        "checked": "November 2026"
      }
    }
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Edmonton International Airport (YEG) — 4 hours east of Jasper. Or fly into Calgary (YYC) — 3.5 hours south via Icefields Parkway. Both airports have car rentals and shuttles.',
      time: '4h from Edmonton · 3.5h from Calgary',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'From Edmonton take Highway 16 west — the Yellowhead Highway. From Calgary take the Icefields Parkway (Highway 93) north through Banff — one of the world\'s most scenic drives.',
      time: '362 km from Edmonton · Hwy 16 West',
    },
    {
      icon: '🚂',
      title: 'By Train',
      text: 'VIA Rail runs the famous Canadian train from Vancouver to Toronto — stops in Jasper. A scenic overnight journey through the Rockies. Book months in advance for sleeper cabins.',
      time: 'From Vancouver ~17 hours · Scenic route',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass needed. Children under 18 are always free.',
    buyText: 'Jasper Shuttle operates routes within the park in summer — otherwise a car is required.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏰',
      title: 'Fairmont Jasper Park Lodge',
      text: 'The iconic lakeside lodge on Lac Beauvert. Golf course, spa, horseback riding, and stunning mountain views. The most famous hotel in Jasper. Book well in advance.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/hotel/ca/fairmont-jasper-park-lodge.html', level: 'safe' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Jasper-Hotels.d87.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏨',
      title: 'Jasper Town Hotels',
      text: 'Many options in Jasper townsite — Crimson Jasper, Pyramid Lake Resort, Jasper Inn. Walkable town with restaurants and shops. More affordable than Banff.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jasper+National+Park', level: 'safe' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Jasper--Alberta', level: 'danger' },
      ],
    },
    {
      icon: '🏕️',
      title: 'Camping in Jasper',
      text: 'Whistlers Campground is the largest — closest to town. Wapiti Campground open year round. Pocahontas Campground near Miette Hot Springs. Reserve through Parks Canada.',
      links: [
        { label: 'Parks Canada', url: 'https://reservation.pc.gc.ca/Jasper', level: 'safe' },
      ],
    },
    {
      icon: '🛖',
      title: 'Backcountry Huts',
      text: 'Several backcountry campgrounds along the Skyline Trail and other routes. Backcountry permit required — book through Parks Canada website. Bring all your own gear.',
      links: [
        { label: 'Backcountry Permit', url: 'https://reservation.pc.gc.ca/Jasper/backcountry', level: 'safe' },
      ],
    },
    {
      icon: '🌟',
      title: 'Pyramid Lake Resort',
      text: 'Stunning lake views just minutes from town. Cabins and hotel rooms. Canoe rentals in summer, ice skating in winter. One of the most beautiful settings in Jasper.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/hotel/ca/pyramid-lake-resort.html', level: 'safe' },
      ],
    },
    {
      icon: '🏡',
      title: 'Vacation Rentals',
      text: 'Several vacation homes and cabins available in and around Jasper townsite. Great for families or groups. Often better value than hotels for longer stays.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Jasper--Alberta', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/en-ca/vacation-rentals/canada/alberta/jasper', level: 'blue' },
      ],
    },
  ],

  practical: [
    {
      icon: '📞',
      title: 'Park Emergency',
      lines: ['780-852-6156', 'Parks Canada Dispatch', '24/7 Emergency Line'],
    },
    {
      icon: '🐻',
      title: 'Bear Spray',
      text: 'Mandatory on all backcountry trails. Available to rent or buy in Jasper townsite.',
    },
    {
      icon: '🌌',
      title: 'Dark Sky Preserve',
      text: "World's second largest. Best stargazing: August–October. Dark Sky Festival in October each year.",
    },
    {
      icon: '📶',
      title: 'Cell Service',
      text: 'Good in Jasper town only. No service on most trails. Always carry a paper map and satellite communicator.',
    },
    {
      icon: '🌡️',
      title: 'Weather',
      text: 'Cooler and wetter than Banff. Pack rain gear year round. Snow possible any month above 2,000m elevation.',
    },
    {
      icon: '🏥',
      title: 'Hospital',
      lines: ['Seton Jasper Healthcare Centre', '518 Robson Street, Jasper', '780-852-3344'],
    },
    {
      icon: '🚌',
      title: 'Jasper Shuttle',
      text: 'Runs to Maligne Lake and Miette Hot Springs in summer. Reduces parking congestion at popular sites.',
    },
    {
      icon: '🔒',
      title: 'Wildlife Corridors',
      text: 'Several trails may be closed due to wildlife activity. Check Parks Canada website before hiking.',
    },
  ],

  gallery: [
    `${BASE}/Maligne Lake.jpg`,
    `${BASE}/Athabasca Falls.jpg`,
    `${BASE}/Columbia Icefield.jpg`,
  ],
};

export default JASPER;
