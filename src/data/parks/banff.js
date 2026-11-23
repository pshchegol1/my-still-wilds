// Banff National Park — данные страницы /park/banff

const BASE = '/parks/Banff National Park';

export const BANFF = {
  slug: 'banff',
  name: 'Banff National Park',
  province: 'Alberta',
  tag: "Canada's First National Park · UNESCO",
  heroImage: `${BASE}/Moraine Lake.jpg`,
  heroCaption: 'Moraine Lake · Banff NP · Alberta',
  description:
    "Canada's oldest and most iconic national park — a world of turquoise lakes, ancient glaciers, and rugged Rocky Mountain peaks. Home to grizzly bears, wolves, and elk, Banff is where wilderness meets wonder.",

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'See Trails', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1885' },
    { label: 'Area', value: '6,641 km²' },
    { label: 'Rating', value: '4.9 ★' },
    { label: 'Visitors/Year', value: '4M+' },
    { label: 'Highest Peak', value: 'Mt Forbes 3,612m' },
    { label: 'Wildlife', value: '65+ species' },
  ],

  badges: ['UNESCO World Heritage', 'First Park · 1885', 'Year Round'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  attractions: [
    {
      name: 'Lake Louise',
      image: `${BASE}/Lake Louise.png`,
      tag: '🏆 Iconic',
      tagLevel: 'caution',
      meta: 'Turquoise glacier lake · Fairmont Chateau · Year round',
      details: {
        "lead": "A glacier-fed lake 55 km west of the Town of Banff on the Trans-Canada Highway. The community began in 1890 as Laggan Station.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The lakeshore",
                "text": "Open year-round. The lake and the community are a destination in every season, not only in summer."
              },
              {
                "title": "Tea house hikes",
                "text": "Lake Agnes and Plain of Six Glaciers are the best-known summer hikes in the area. Their tea houses open in mid-May and close after Canadian Thanksgiving in mid-October."
              },
              {
                "title": "Winter",
                "text": "Lake Louise Ski Resort runs November to May and the summer gondola mid-May to mid-October. The Ice Magic Festival is held in January."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reserve the shuttle",
                "text": "In summer you reserve a Parks Canada shuttle online and park at the Lake Louise Park and Ride at the ski resort. Booking opens in April, and more seats are released at 8 am MDT two days before departure."
              },
              {
                "title": "Parking",
                "text": "Lakeshore parking is paid in the shuttle season and the lots fill before sunrise and stay full until sunset."
              },
              {
                "title": "Avalanche danger",
                "text": "The hikes to the tea houses are not safe from November to mid-May. Do not hike to Lake Agnes or Plain of Six Glaciers in winter or spring, and check the trail report in May and June."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "55 km west of Banff on Highway 1. Roam Public Transit runs from Banff to the community of Lake Louise."
          },
          {
            "label": "Best time",
            "text": "The lakes usually melt by late May and alpine hiking starts in late June. May to October is extremely busy."
          },
          {
            "label": "Busiest days",
            "text": "Victoria Day, Canada Day, Heritage Day, Labour Day and the weekends of larch season in September."
          },
          {
            "label": "Visitor centre",
            "text": "201 Village Road, next to the Samson Mall in Lake Louise."
          }
        ],
        "link": {
          "label": "Parks Canada: Lake Louise and Moraine Lake",
          "url": "https://parks.canada.ca/pn-np/ab/banff/visit/les10-top10/louise"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Moraine Lake',
      image: `${BASE}/Moraine Lake.jpg`,
      tag: '📸 Best Photo',
      tagLevel: 'safe',
      meta: 'Valley of the Ten Peaks · June to October only',
      details: {
        "lead": "The lake under the Valley of the Ten Peaks. The road is closed to private cars all year, so you arrive by Parks Canada shuttle or with a licensed commercial operator.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Valley of the Ten Peaks",
                "text": "The peaks rise straight from the far shore of the lake."
              },
              {
                "title": "Short season",
                "text": "Open from early June to mid-October. In 2026 the Lake Connector shuttle ran June 1 to October 12, every 30 minutes."
              },
              {
                "title": "Backcountry setting",
                "text": "Parks Canada treats Moraine Lake as backcountry: no cell service, Wi-Fi, running water or lighting, and pit toilets at the lake."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reservations",
                "text": "A reservation is required for the Parks Canada shuttles. Seats opened on April 15 in 2026, and more are released at 8 am MDT two days before departure."
              },
              {
                "title": "Early or late",
                "text": "Parking at the Lake Louise Park and Ride fills early. Shuttle seats are the dependable way to see both lakes in one day."
              },
              {
                "title": "Phone",
                "text": "Reception returns about 5 km from the lake, so agree a meeting point before you go."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Only by Parks Canada shuttle or a licensed commercial operator. Exceptions are holders of an accessible parking placard and registered guests of Moraine Lake Lodge."
          },
          {
            "label": "Season",
            "text": "Early June to mid-October, weather permitting. The road is closed for the season now, so check Parks Canada for the 2027 dates."
          }
        ],
        "link": {
          "label": "Parks Canada: visiting Lake Louise and Moraine Lake",
          "url": "https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/louise"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Icefields Parkway',
      image: `${BASE}/Icefields Parkway.png`,
      tag: '🛣️ Scenic Drive',
      tagLevel: 'caution',
      meta: "232 km · World's most scenic highway · Athabasca Glacier",
      details: {
        "lead": "The 232 km Highway 93 North between Lake Louise and the Jasper townsite, a remote road with limited services and no cell coverage.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Crowfoot Glacier",
                "text": "A viewpoint 36 km from Lake Louise. One of the glacier’s three “toes” has melted away."
              },
              {
                "title": "Bow Lake and Peyto Lake",
                "text": "Bow Lake is 39 km from Lake Louise and the Peyto Lake viewpoint 43 km. Bow Summit, at 2,070 m, is the highest point on the Parkway."
              },
              {
                "title": "Columbia Icefield",
                "text": "The Discovery Centre is 128 km from Lake Louise and open May to September. Stay on the marked paths at the Athabasca Glacier, which is unstable."
              },
              {
                "title": "Falls near Jasper",
                "text": "Sunwapta Falls is 179 km and Athabasca Falls 203 km from Lake Louise."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fuel up first",
                "text": "Fill the tank in Lake Louise or Jasper. Gas at Saskatchewan River Crossing is summer only."
              },
              {
                "title": "Bring supplies",
                "text": "Bring your own water and food. Services run from early May to mid-October."
              },
              {
                "title": "Winter driving",
                "text": "Snow tires (snowflake or M+S) or chains are required from November 1 to March 31 and whenever the road is snow-covered. Parks Canada’s winter page gives April 1, so check before you go. Plowing runs 7 am to 3:30 pm from October to May, and in winter there is no gas, lodging or food along the road."
              },
              {
                "title": "No stopping",
                "text": "The 38 major avalanche paths are marked as no-stopping zones."
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
            "text": "Check 511 Alberta and the weather forecast before you start. Drones are prohibited in all national parks."
          }
        ],
        "link": {
          "label": "Parks Canada: Icefields Parkway",
          "url": "https://parks.canada.ca/pn-np/ab/banff/visit/les10-top10/glaciers-icefields"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cave & Basin Hot Springs',
      image: `${BASE}/Cave & Basin Hot Springs.png`,
      tag: '♨️ Hot Springs',
      tagLevel: 'danger',
      meta: 'Historic thermal springs · Origin of the park · Year round',
      details: {
        "lead": "In November 1883 three railway workers climbed down into a steaming cave here, and the springs led to Canada’s first national park. It is now a National Historic Site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Birthplace of the park",
                "text": "A hot springs reserve was created in 1885 and grew into Rocky Mountains Park in 1887."
              },
              {
                "title": "Hours",
                "text": "October 16 to May 14: Thursday to Monday, 11 am–5 pm. May 15 to October 15: daily 9:30 am–5 pm."
              },
              {
                "title": "Banff Springs snail",
                "text": "The warm outflow pools are home to a snail found nowhere else on earth."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "US News listed adults at $9 and seniors at $7.50, with youth free. Annual park pass holders get in free."
              },
              {
                "title": "Do not touch the water",
                "text": "The snail’s habitat is fragile."
              },
              {
                "title": "Time",
                "text": "Allow 2 to 3 hours with the boardwalks and gift shop."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $9 for adults. Confirm on Parks Canada."
          },
          {
            "label": "Getting there",
            "text": "West of downtown on Cave Avenue."
          },
          {
            "label": "Closures",
            "text": "A listing showed the site closed September 21–24 in 2026; check before going."
          }
        ],
        "link": {
          "label": "Parks Canada: Cave and Basin",
          "url": "https://www.parks.canada.ca/lhn-nhs/ab/caveandbasin/visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Town of Banff',
      image: `${BASE}/Town of Banff.png`,
      tag: '🏘️ Town',
      tagLevel: 'gold',
      meta: 'Restaurants · Shops · Museums · Nightlife · Year round',
      details: {
        "lead": "A compact mountain town of under ten thousand people on the Bow River, inside the park. Walk the centre, and use the Roam bus for the outlying sights.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Banff Upper Hot Springs",
                "text": "The pool you can bathe in, on Sulphur Mountain. 2026 prices: adults $19.75, seniors and youth 3–17 $17.25, under 3 free."
              },
              {
                "title": "Banff Gondola",
                "text": "Goes up Sulphur Mountain. Roam Route 1 serves it, and the hot springs are on the same road."
              },
              {
                "title": "Whyte Museum",
                "text": "Most sources list 10 am–5 pm daily. Admission is reported as $15 for adults, while some guides say by donation, so check whyte.org."
              },
              {
                "title": "Bow Falls",
                "text": "A short walk from downtown, with the Fairmont Banff Springs standing above it."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Leave the car",
                "text": "Town parking is limited and the lots fill by mid-morning. Free visitor parking may be available at the Train Station Public Parking Lot, reached from the Norquay Road exit."
              },
              {
                "title": "Roam routes",
                "text": "Route 1 Sulphur Mountain, Route 2 Tunnel Mountain, Route 3 Canmore/Banff, Route 8X Lake Louise express and Route 9 Johnston Canyon."
              },
              {
                "title": "Elk in town",
                "text": "Elk walk the streets. Parks Canada asks you to keep at least 30 m away, and they are not tame."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Visitor centre",
            "text": "224 Banff Avenue, phone +1 (403) 762-1550."
          },
          {
            "label": "Park pass",
            "text": "Required in the national park. See Parks Canada’s passes page."
          },
          {
            "label": "Fares",
            "text": "Check roamtransit.com for current fares and timetables."
          }
        ],
        "link": {
          "label": "Parks Canada: getting around Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/banff"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Johnston Canyon',
      image: `${BASE}/Johnston Canyon.png`,
      tag: '💧 Waterfall',
      tagLevel: 'safe',
      meta: 'Spectacular canyon walk · Upper and Lower Falls · Ice walks in winter',
      status: { label: 'Closed until Dec 11', level: 'closed', until: '2026-12-11' },
      details: {
        "lead": "A canyon walk on catwalks to the Lower and Upper Falls, 25 km from Banff and 34 km from Lake Louise. Closed from October 13 to December 11, 2026 for construction work.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lower Falls",
                "text": "Easy, 1.1 km one way, 85 m of climbing, about 1 hour round trip."
              },
              {
                "title": "Upper Falls",
                "text": "Easy, 2.4 km one way with a 215 m climb, about 2 hours round trip."
              },
              {
                "title": "Ink Pots",
                "text": "5.5 km one way, about 4 hours return, reached through Moose Meadows."
              },
              {
                "title": "Winter ice",
                "text": "In winter the frozen falls draw walkers, and guided Ice Walk tours are listed for November to April. Tours can only run while the canyon is open, so check with the operator."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closure",
                "text": "Parks Canada closed the Johnston Canyon Trail and Day Use Area, including the washrooms and the P1 parking lot, to all travel from October 13 to December 11, 2026, for construction work. Parks Canada’s hiking page says the Upper Falls and Ink Pots stay reachable by the Moose Meadows Trail. Entering a closed area can mean a fine of up to $25,000. Check Parks Canada’s bulletins before you go."
              },
              {
                "title": "Traction",
                "text": "The trail is icy in winter and traction devices are essential. You can rent or buy them in Banff."
              },
              {
                "title": "Stay on the trail",
                "text": "Off-trail use was prohibited in 2026 to protect black swifts, an endangered bird, with fines up to $25,000."
              },
              {
                "title": "Come early",
                "text": "Parking is limited. Roam Route 9 serves the canyon; check roamtransit.com for the current schedule."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Roam Route 9 from Banff, or drive 25 km. Hop On Banff also stops here from June to September."
          }
        ],
        "link": {
          "label": "Banff & Lake Louise: Johnston Canyon",
          "url": "https://www.banfflakelouise.com/johnston-canyon"
        },
        "checked": "November 2026"
      },
    },
  ],

  wildlifeWarning:
    'Always carry bear spray. Stay 100m from bears and wolves, 30m from all other wildlife. Never feed animals. Report sightings to Parks Canada.',
  wildlife: [
    { name: 'Grizzly Bear', level: 'danger', chance: '★★★☆☆ Moderate chance' },
    { name: 'Black Bear', level: 'danger', chance: '★★★★☆ Common — spring' },
    { name: 'Gray Wolf', level: 'caution', chance: '★★☆☆☆ Rare sightings' },
    { name: 'Elk / Wapiti', level: 'caution', chance: '★★★★★ Very common' },
    { name: 'Caribou', level: 'safe', chance: '★★☆☆☆ Rare — north areas' },
    { name: 'Mountain Goat', level: 'safe', chance: '★★★☆☆ Rocky slopes' },
    { name: 'Bighorn Sheep', level: 'safe', chance: '★★★★☆ Common roadside' },
    { name: 'Bald Eagle', level: 'safe', chance: '★★★☆☆ Near rivers' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — all trails open, Moraine Lake accessible, wildflowers blooming. Book accommodation 6+ months in advance. Crowds at Lake Louise and Moraine Lake.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Best photography season — golden larches at Lake Louise. Elk rut in September. Less crowded than summer. Cooler temperatures. Some high trails may close by October.',
      rating: 5,
      note: 'Best photos',
    },
    {
      icon: '❄️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Ski season — Lake Louise Ski Resort open. Ice skating on frozen lakes. Johnston Canyon ice walk when the trail is open. Northern Lights possible. Much fewer crowds and lower prices.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Shoulder season — fewer crowds, lower prices. Bears coming out of hibernation — high wildlife activity. Some trails still snowy. Moraine Lake road typically opens late May.',
      rating: 3,
      note: 'Budget friendly',
    },
  ],

  trailsUrl: 'https://www.alltrails.com/parks/canada/alberta/banff-national-park',
  trails: [
    {
      "name": "Johnston Canyon Lower and Upper Falls",
      "length": "2.4 km one way",
      "gain": "215 m gain",
      "time": "2 hours return",
      "area": "Johnston Canyon",
      "difficulty": "Easy",
      "status": {
        "label": "Closed until Dec 11",
        "level": "closed",
        "until": "2026-12-11"
      },
      "details": {
        "lead": "A catwalk trail through the canyon to the Lower and Upper Falls, with the Ink Pots further on. Closed from October 13 to December 11, 2026 for construction work.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lower Falls",
                "text": "1.1 km one way, 85 m of climbing, about 1 hour round trip."
              },
              {
                "title": "Upper Falls",
                "text": "2.4 km one way, 215 m of climbing, about 2 hours round trip."
              },
              {
                "title": "Ink Pots",
                "text": "5.5 km one way, about 4 hours return, reached through Moose Meadows."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closure",
                "text": "Parks Canada closed the Johnston Canyon Trail and Day Use Area, including the washrooms and the P1 parking lot, to all travel from October 13 to December 11, 2026, for construction work. Parks Canada’s hiking page says the Upper Falls and Ink Pots stay reachable by the Moose Meadows Trail. Entering a closed area can mean a fine of up to $25,000. Check Parks Canada’s bulletins before you go."
              },
              {
                "title": "Crowds",
                "text": "The trail is busy and hard to pass other users in the narrow sections. Strollers are not recommended."
              },
              {
                "title": "Winter",
                "text": "The trail is icy, so traction devices are essential."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Roam Route 9, or drive 25 km from Banff. When the canyon is open, parking fills quickly."
          },
          {
            "label": "Stay on the trail",
            "text": "Off-trail use was prohibited in 2026 to protect black swifts, an endangered bird."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Lake Agnes Tea House",
      "length": "3.9 km one way",
      "gain": "495 m gain",
      "time": "2.5–3 hours return",
      "area": "Lake Louise",
      "difficulty": "Moderate",
      "details": {
        "lead": "A well-maintained trail up to a lake tucked beneath towering peaks, with a quaint European-style tea house beside it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The tea house",
                "text": "Seasonal. Parks Canada says the tea houses open in mid-May and close after Canadian Thanksgiving in mid-October."
              },
              {
                "title": "Big Beehive",
                "text": "A side trip from the lake: 1.5 km one way with 150 m of climbing, for a panorama of Lake Louise and the Chateau."
              },
              {
                "title": "Little Beehive",
                "text": "A shorter side trip from the lake: 0.9 km one way with 65 m of climbing."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Avalanche hazard",
                "text": "The hikes to the tea houses are not safe from November through mid-May. Do not hike to Lake Agnes in winter or spring, and check the trail report in May and June."
              },
              {
                "title": "Getting to the trailhead",
                "text": "Take the Parks Canada shuttle or Roam Route 8X. Parking at the lakeshore is paid and fills before sunrise in summer."
              },
              {
                "title": "Pack out your garbage",
                "text": "Parks Canada asks hikers to carry out everything they bring."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "3.9 km one way, with 495 m of climbing and 80 m of descent."
          },
          {
            "label": "Time",
            "text": "2.5 to 3 hours round trip, plus time at the tea house."
          },
          {
            "label": "Trailhead",
            "text": "Lake Louise Lakeshore parking lot, 4 km from the community of Lake Louise."
          },
          {
            "label": "Season",
            "text": "Roughly mid-May to mid-October, while the tea house is open."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Plain of Six Glaciers",
      "length": "5.9 km one way",
      "gain": "595 m gain",
      "time": "4 hours return",
      "area": "Lake Louise",
      "difficulty": "Moderate",
      "details": {
        "lead": "A trail along Lake Louise and up the valley toward the glaciers, ending at a Swiss-built tea house.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tea house",
                "text": "A Swiss-built tea house, open seasonally. Parks Canada says the tea houses open in mid-May and close after Canadian Thanksgiving in mid-October."
              },
              {
                "title": "Loop with Lake Agnes",
                "text": "Connect the Lake Agnes and Plain of Six Glaciers trails via the Highline Trail to make a 14.3 km loop, about 5 hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Avalanche hazard",
                "text": "The trail is exposed to avalanche hazard, and Parks Canada does not recommend travel from mid-October to mid-June."
              },
              {
                "title": "Parking",
                "text": "The trailhead is the Lake Louise Lakeshore parking lot, with paid parking, and it is accessible by transit. In summer the lots fill before sunrise."
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
            "text": "5.9 km one way, with 595 m of climbing and 250 m of descent."
          },
          {
            "label": "Time",
            "text": "About 4 hours round trip."
          },
          {
            "label": "Trailhead",
            "text": "Lake Louise Lakeshore parking lot, 4 km from the community of Lake Louise."
          },
          {
            "label": "Season",
            "text": "Roughly mid-June to mid-October. Check the trail report in June."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Sulphur Mountain via Banff",
      "length": "4.8 km one way",
      "gain": "655 m gain",
      "time": "4 hours return",
      "area": "Banff Town",
      "difficulty": "Moderate",
      "details": {
        "lead": "Switchbacks climb the mountain from the Banff Upper Hot Springs to the top of the gondola, with a boardwalk along the ridge to Sanson Peak.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summit ridge",
                "text": "Beyond the gondola top, a 500 m boardwalk with 368 shallow steps runs along the ridge to Sanson Peak (0.5 km)."
              },
              {
                "title": "Other way down",
                "text": "Instead of retracing your steps, take the Sulphur Mountain Westside Trail (5.4 km) and Sundance Trail (2.6 km) to the Cave and Basin National Historic Site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Plan the return",
                "text": "If you finish at Cave and Basin, you need your own transport back to the Sulphur Mountain trailhead."
              },
              {
                "title": "Parking",
                "text": "Paid parking at the trailhead applied daily from May 15 to October 12 in 2026, 9 am to 9 pm. Roam Route 1 also serves it."
              },
              {
                "title": "Season",
                "text": "Parks Canada gives July to mid-September as the prime hiking season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "4.8 km to the top of the gondola, plus 0.5 km to Sanson Peak."
          },
          {
            "label": "Climb",
            "text": "655 m of elevation gain."
          },
          {
            "label": "Time",
            "text": "About 4 hours round trip."
          },
          {
            "label": "Trailhead",
            "text": "Banff Upper Hot Springs parking area, 4.3 km south of downtown at the end of Mountain Avenue."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Tunnel Mountain Summit Trail",
      "length": "2.3 km one way",
      "gain": "275 m gain",
      "time": "2 hours return",
      "area": "Banff Town",
      "difficulty": "Moderate",
      "details": {
        "lead": "A switchbacking trail from near downtown Banff to a low summit with views of the town, the Bow Valley and Mount Rundle.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "The town of Banff, the Bow Valley and Mount Rundle rising to the south."
              },
              {
                "title": "Close to town",
                "text": "The lower trailhead is a 15 minute, 1 km walk east of downtown Banff."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Underfoot",
                "text": "The path has rock and root patches, and a few concrete steps at the lower and upper trailheads."
              },
              {
                "title": "Parking",
                "text": "The lower lot is on St. Julien Road, where the Banff Centre has introduced paid parking. The upper lot is on Tunnel Mountain Drive, 2 km east of downtown. Park only in the designated areas."
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
            "text": "2.3 km one way, with 275 m of climbing."
          },
          {
            "label": "Time",
            "text": "About 2 hours round trip."
          },
          {
            "label": "Difficulty",
            "text": "Parks Canada lists it under moderate hikes."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    },
    {
      "name": "Sentinel Pass via Larch Valley",
      "length": "5.6 km one way",
      "gain": "750 m gain",
      "time": "4.5–5.5 hours return",
      "area": "Moraine Lake",
      "difficulty": "Hard",
      "details": {
        "lead": "Steep switchbacks from Moraine Lake lead through Larch Valley to a high point between Larch Valley and Paradise Valley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Larch Valley",
                "text": "A larch forest high above Moraine Lake, with views of the Ten Peaks. Parks Canada lists it separately: 4.5 km one way, 570 m of climbing, 3.5 to 4 hours return."
              },
              {
                "title": "The pass",
                "text": "The highest point of the trail, between two famous valleys."
              },
              {
                "title": "Larch season",
                "text": "Weekends in September are among the busiest times in the Lake Louise area."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Getting to the trailhead",
                "text": "Moraine Lake Road is closed to personal vehicles year-round, so take the Parks Canada shuttle. The trail begins just beyond the Moraine Lake Lodge."
              },
              {
                "title": "Group access",
                "text": "Restrictions on the Larch Valley and Sentinel Pass trails are often in place in summer to protect grizzly bears. When they are, you must hike in a tight group of four or more. Ask at the Lake Louise Visitor Centre."
              },
              {
                "title": "Avalanche hazard",
                "text": "Travel is not recommended from mid-October to mid-June."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Distance",
            "text": "5.6 km one way, with 750 m of climbing and 50 m of descent."
          },
          {
            "label": "Time",
            "text": "4.5 to 5.5 hours round trip."
          },
          {
            "label": "Difficulty",
            "text": "Parks Canada rates it difficult."
          },
          {
            "label": "Season",
            "text": "Roughly mid-June to mid-October."
          }
        ],
        "link": {
          "label": "Parks Canada: hiking in Banff",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking"
        },
        "checked": "November 2026"
      }
    }
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly into Calgary International Airport (YYC) — the closest major airport. Flights from Toronto, Vancouver, Montreal, and all major Canadian cities. International connections available.',
      time: '1 hour 20 min from Calgary airport',
    },
    {
      icon: '🚗',
      title: 'By Car',
      text: 'Take the Trans-Canada Highway (Highway 1) west from Calgary. The drive is 128 km and takes about 1.5 hours. A Parks Canada Discovery Pass is required to enter — buy at the gate or online.',
      time: '128 km west of Calgary on Hwy 1',
    },
    {
      icon: '🚌',
      title: 'By Bus / Shuttle',
      text: 'Brewster Express and Banff Airporter run daily shuttles from Calgary airport to Banff. Roam Transit operates routes within Banff and to Lake Louise in summer.',
      time: '2 hours from Calgary airport',
    },
  ],

  entryPass: {
    title: 'Entry Pass Required',
    text: 'Daily pass or Annual Discovery Pass required to enter all 48 national parks. Children under 18 are free.',
    buyText: 'Skip the gate lineup — purchase your pass in advance on the Parks Canada website.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🏰',
      title: 'Fairmont Banff Springs',
      text: 'The iconic castle hotel in the heart of Banff. Stunning mountain views, multiple restaurants, spa, and ski-in access. Book well in advance for peak season.',
    },
    {
      icon: '🏨',
      title: 'Banff Town Hotels',
      text: 'Many mid-range options in Banff town — Moose Hotel, Juniper Hotel, and Rimrock Resort. Walking distance to restaurants and shops, easy access to the gondola.',
    },
    {
      icon: '🏕️',
      title: 'Camping',
      text: 'Tunnel Mountain and Two Jack Lake campgrounds offer front-country camping close to town. Reserve on the Parks Canada reservation system months ahead for summer dates.',
    },
  ],

  practical: [
    { icon: '🎫', title: 'Parks Pass', text: 'Required daily or annually — buy online to skip the gate line.' },
    { icon: '🐻', title: 'Bear Country', text: 'Carry bear spray, make noise on trails, store food properly.' },
    { icon: '📶', title: 'Cell Service', text: 'Good in Banff town, spotty to none on backcountry trails.' },
    { icon: '🌡️', title: 'Weather', text: 'Mountain weather changes fast — layers year-round, even in summer.' },
  ],

  gallery: [
    `${BASE}/Lake Louise.png`,
    `${BASE}/Moraine Lake.jpg`,
    `${BASE}/Johnston Canyon.png`,
  ],
};

export default BANFF;
