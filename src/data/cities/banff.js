// Banff — данные страницы /city/banff
// В шапке ролик, присланный владельцем сайта: гора Рандл, отражённая
// в озёрах Вермилион на закате, — прямо за городом. Проверено по кадрам.
// Исходник уже в SDR (bt709) и без звука; только переупакован с
// faststart, постер — первый кадр. 11 с, ~6,4 МБ.
// Город и национальный парк — разные страницы: парк описан в
// src/data/parks/banff.js, здесь только сам город.
// Население — муниципальная перепись 2024 года (с временными
// жителями). Тарифы Parks Canada и Roam — на сезон 2026; туристический
// сбор Альберты поднят до 6% с 1 апреля 2026.

export const BANFF = {
  slug: 'banff',
  name: 'Banff',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Inside Banff National Park',
  accentLevel: 'caution',
  heroIcon: '🏔️',
  heroImage: '/Cities/Banff/hero-poster.jpg',
  heroVideo: '/Cities/Banff/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.1784, lon: -115.5708 },
  subtitle: 'A Town Inside a National Park',
  description:
    'A mountain town of under ten thousand people sitting inside Canada’s first national park, on the Bow River under Mount Rundle. You cannot simply move here — you have to work in the park to live in it — and the town exists because three railway workers found hot springs in a cave in 1883. Millions of visitors pass through each year; elk walk the residential streets regardless.',

  actions: [
    { label: 'Explore Banff', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.4K' },
    { label: 'Elevation', value: '≈1,380 m' },
    { label: 'Park Pass', value: 'Required' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈128 km · 1.5h' },
    { label: 'To Lake Louise', value: '≈58 km · 45 min' },
  ],

  badges: ['National Park Town', 'Hot Springs', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1885', label: 'The hot springs reserve that became Canada’s first national park two years later', level: 'gold' },
    { value: '1883', label: 'Three railway workers climbed into the Cave and Basin through a hole in its roof', level: 'danger' },
    { value: '$12.25', label: 'Daily adult park admission in 2026 — required just to stop in town, not only for hiking', level: 'blue' },
    { value: '30 m', label: 'Minimum distance Parks Canada asks you to keep from elk — they live in town and they are not tame', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Banff Avenue & Downtown', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Shops and restaurants · Mount Cascade at the end of the street · Busiest part of town',
      details: {
        "lead": "The busiest part of town, with shops and restaurants along Banff Avenue and Mount Cascade at the end of the street. The Whyte Museum and the Roam bus hubs are here.",
        "see": [
          {
            "title": "Banff Avenue",
            "text": "The main street, with shops and restaurants and Mount Cascade at the far end."
          },
          {
            "title": "Whyte Museum",
            "text": "Most sources list 10 am–5 pm daily. Admission is reported as $15 for adults, $12.50 for seniors and students and free for under 17, while some guides say by donation. Check whyte.org."
          },
          {
            "title": "Roam Transit",
            "text": "Route 1 runs to the Banff Gondola. Local single rides were listed at $2 and local day passes at $5 on Roam’s fares page, and a new system-wide day pass applies from October 2026."
          }
        ],
        "practical": [
          {
            "label": "Park pass",
            "text": "In 2026 an adult day pass was $12.25 and a family or group pass per vehicle $24.50; the annual Discovery Pass was $83.50 for adults and $167.50 for families. Entry was free from June 19 to September 7, 2026."
          },
          {
            "label": "Getting around",
            "text": "The town is compact and walkable, and Roam serves the main sights."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for the street and the museum."
          }
        ],
        "link": {
          "label": "Roam Transit: fares",
          "url": "https://roamtransit.com/fares/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Bow River & Bow Falls', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Riverside', tagLevel: 'blue', meta: 'River trail · The pedestrian bridge · Bow Falls below the Banff Springs',
      details: {
        "lead": "The river runs along the south edge of town. Bow Falls is a short walk from downtown, with the Fairmont Banff Springs standing above it.",
        "see": [
          {
            "title": "Bow Falls",
            "text": "A wide, low waterfall a short walk from downtown along the river."
          },
          {
            "title": "River trail",
            "text": "The riverside paths in both directions are flat and free, and the best way to see the town on foot."
          },
          {
            "title": "The pedestrian bridge",
            "text": "A footbridge links downtown with the river path."
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Getting there",
            "text": "A short walk from Banff Avenue."
          },
          {
            "label": "Good to know",
            "text": "Wildlife, including elk, use the river corridor. Keep a safe distance, and note that trail closures change, so check Parks Canada’s bulletins."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff day hikes",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking/banff"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Spray Avenue & the Banff Springs', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'South side', tagLevel: 'purple', meta: 'The 1888 railway hotel · Golf course · Upper Hot Springs and gondola road',
      details: {
        "lead": "The south side of town, with the 1888 railway hotel, the golf course and the road up to the Upper Hot Springs and the gondola.",
        "see": [
          {
            "title": "Banff Upper Hot Springs",
            "text": "Adults $19.75, seniors and youth 3–17 $17.25, under 3 free, family of four $64.25 in 2026. Tickets are sold in person only, and park admission is separate. Most sources list 10 am to 10 pm with last entry at 9:30 pm; two list 1 pm to 10 pm, so check Parks Canada."
          },
          {
            "title": "Banff Gondola",
            "text": "The gondola up Sulphur Mountain. In 2026 it closed for annual maintenance around November 17–19 (sources differ). From mid-October hours were 10 am–9 pm, extending to 10 pm after the closure through December 31."
          },
          {
            "title": "The Fairmont Banff Springs",
            "text": "The railway hotel built in 1888, standing above Bow Falls."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Roam Route 1 serves the Gondola; the Upper Hot Springs are on the same road."
          },
          {
            "label": "Hot springs",
            "text": "The pools reopened in early 2026 after a seven-month renovation. Admission includes one locker token; swimsuit and towel rentals were listed at $5 and $3."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours for the springs, a half day with the gondola."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff Upper Hot Springs",
          "url": "https://banffhotsprings.ca/hot-springs/banff-upper-hot-springs/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Cave Avenue', icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', tag: 'West', tagLevel: 'danger', meta: 'Cave and Basin National Historic Site · Marsh boardwalk · Sundance trail',
      details: {
        "lead": "The west side of town, home to the Cave and Basin National Historic Site, the marsh boardwalk and the Sundance trail.",
        "see": [
          {
            "title": "Cave and Basin",
            "text": "October 16 to May 14: Thursday to Monday, 11 am–5 pm. May 15 to October 15: daily 9:30 am–5 pm. US News lists adults at $9 and seniors at $7.50, with youth 17 and under free. Plan 2 to 3 hours."
          },
          {
            "title": "Marsh boardwalk",
            "text": "Boardwalks around the site explore the warm outflow and wetland."
          },
          {
            "title": "Sundance Canyon",
            "text": "Parks Canada reports an area closure along the Sundance Canyon loop for bridge construction. The trail to the viewpoint is still accessible."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown; walkable or by bike."
          },
          {
            "label": "Admission",
            "text": "Annual park pass holders get in free. Check Parks Canada for current prices and closures."
          },
          {
            "label": "Do not touch",
            "text": "The outflow pools are home to the Banff Springs snail; do not touch the water."
          }
        ],
        "link": {
          "label": "Parks Canada: Cave and Basin",
          "url": "https://www.parks.canada.ca/lhn-nhs/ab/caveandbasin/visit"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tunnel Mountain', icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg', tag: 'East', tagLevel: 'safe', meta: 'Campgrounds · The Banff Centre · The Hoodoos viewpoint · Short summit hike',
      details: {
        "lead": "The east side of town, with campgrounds, the Banff Centre, the Hoodoos viewpoint and a short summit hike.",
        "see": [
          {
            "title": "Tunnel Mountain summit",
            "text": "About 4.5 to 4.8 km return with 260 to 300 m of climbing; it is 2.4 km one way from the lower trailhead. Walking in from downtown adds about 2 km."
          },
          {
            "title": "Hoodoos viewpoint",
            "text": "A separate, longer route that follows the Bow River under the east side of the mountain; from the parking lot it is another 1.2 km to the viewpoint."
          },
          {
            "title": "The Banff Centre",
            "text": "The arts and culture campus on the hillside."
          }
        ],
        "practical": [
          {
            "label": "Camping",
            "text": "A popular area for camping. Season dates were not confirmed, so check Parks Canada."
          },
          {
            "label": "Time to allow",
            "text": "About two hours for the summit."
          },
          {
            "label": "Good to know",
            "text": "The summit trail is easy but busy in summer."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff day hikes",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking/banff"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lake Minnewanka Road', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'North-east', tagLevel: 'olive', meta: 'Lake Minnewanka · Two Jack Lake · Johnson Lake · Wildlife on the road',
      details: {
        "lead": "The north-east side, with Lake Minnewanka, Two Jack Lake and Johnson Lake. Bighorn sheep on the road are common, so slow down.",
        "see": [
          {
            "title": "Lake Minnewanka",
            "text": "The largest lake in the park. It is free to visit with a park pass, and boat cruises are extra."
          },
          {
            "title": "Trail closure",
            "text": "On September 15, 2026 Parks Canada closed the Lake Minnewanka Trail, the Aylmer Pass Trail and associated campgrounds. Check the Parks Canada bulletins for the current status."
          },
          {
            "title": "Two Jack and Johnson lakes",
            "text": "Smaller lakes along the same road."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive from town; a seasonal bus runs in summer."
          },
          {
            "label": "Wildlife",
            "text": "Slow down for sheep on the road and keep your distance from all wildlife."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff bulletins",
          "url": "https://parks.canada.ca/pn-np/ab/banff/bulletins"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Cave and Basin',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'The reason everything else here exists. In November 1883 three Canadian Pacific Railway workers climbed down into a steaming cave through a hole in its roof; the fight over who owned the springs ended with Ottawa creating a hot springs reserve in 1885, which grew into Rocky Mountains Park — Canada’s first national park — in 1887. It is now a National Historic Site. The warm outflow pools are home to the Banff Springs snail, which lives nowhere else on earth; do not touch the water.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Paid entry', level: 'caution' }],
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
                "text": "US News listed adults at $9 and seniors at $7.50, with youth free. Annual park pass holders get in free. Entry was free from June 19 to September 7, 2026."
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
      name: 'Banff Upper Hot Springs',
      icon: '🛁', iconSrc: '/icons/attractions/ph_bathtub-thin.svg',
      text: 'The one hot spring you can actually bathe in, a pool on the side of Sulphur Mountain run by Parks Canada with views across the valley. Busy at peak times and separately ticketed from the park pass. Evenings in winter, with snow falling, are the classic visit.',
      tags: [{ label: 'Separate fee', level: 'caution' }, { label: 'Year-round', level: 'safe' }],
      details: {
        "lead": "The one hot spring you can bathe in, a pool on the side of Sulphur Mountain run by Parks Canada. It reopened in early 2026 after a seven-month renovation.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 prices",
                "text": "Adults $19.75, seniors and youth 3–17 $17.25, under 3 free, and a family pass of $64.25 (up to two adults)."
              },
              {
                "title": "Hours",
                "text": "Most sources list 10 am to 10 pm daily with last entry at 9:30 pm; two list 1 pm to 10 pm."
              },
              {
                "title": "Included",
                "text": "Admission includes one locker token. Swimsuit ($5) and towel ($3) rentals were listed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "In person only",
                "text": "Tickets are sold in person, first come first served, with no online booking."
              },
              {
                "title": "Park pass",
                "text": "Park admission is separate from the pool ticket."
              },
              {
                "title": "Fall closure",
                "text": "The pools closed October 13, 2026 with reopening expected in early November; check before going."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $19.75 for adults, plus the park pass."
          },
          {
            "label": "Getting there",
            "text": "Roam Route 1 or drive up the Sulphur Mountain road."
          },
          {
            "label": "Best time",
            "text": "Evenings, especially in winter."
          }
        ],
        "link": {
          "label": "Banff Upper Hot Springs guide",
          "url": "https://banffhotsprings.ca/hot-springs/banff-upper-hot-springs/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Banff Gondola',
      icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
      text: 'A short gondola ride up Sulphur Mountain to a summit boardwalk with views over the town and the Bow Valley. Expensive and crowded, but genuinely spectacular, and the boardwalk to the old weather observatory hut is worth the walk. Hiking up and riding down is an option.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Book ahead', level: 'danger' }],
      details: {
        "lead": "A short ride up Sulphur Mountain to a summit boardwalk with views over the town and the Bow Valley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "From October 13 the hours were 10 am–9 pm; after the November maintenance closure they extend to 10 pm through December 31, with the last ride up at 8:30 pm."
              },
              {
                "title": "Maintenance closure",
                "text": "Most sources say November 17–19, 2026; others give 9–20 or 10–21 November."
              },
              {
                "title": "Sky Bistro",
                "text": "One source lists the summit restaurant closed January 4–15, 2027, with the gondola open."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "One Banff blog lists adults (16+) at $76 CAD; prices vary by date. The park pass is separate."
              },
              {
                "title": "Book ahead",
                "text": "Tickets are date-based and sell out at peak times."
              },
              {
                "title": "Hike up",
                "text": "Hiking up and riding down is an option in summer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Around $76 for adults on one listing."
          },
          {
            "label": "Getting there",
            "text": "Roam Route 1 from downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Banff Gondola hours (guide)",
          "url": "https://canadian-rockies.com/guides/banff-gondola-hours/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bow Falls & the River Trail',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'A wide, low waterfall a short walk from downtown along the Bow, with the Fairmont Banff Springs — built by the railway in 1888 — standing above it. The riverside paths in both directions are flat, free and the best way to see the town on foot.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
      details: {
        "lead": "A wide, low waterfall a short walk from downtown along the Bow, with the Fairmont Banff Springs built by the railway in 1888 standing above it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The falls",
                "text": "Reachable on foot from downtown."
              },
              {
                "title": "River paths",
                "text": "The riverside paths in both directions are flat and free."
              },
              {
                "title": "The hotel",
                "text": "The Fairmont Banff Springs stands above the falls."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walkable",
                "text": "The best way to see the town on foot."
              },
              {
                "title": "Wildlife",
                "text": "Keep a safe distance from elk and other animals on the paths."
              },
              {
                "title": "Check closures",
                "text": "Trail closures change; see the Parks Canada bulletins."
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
            "text": "A short walk from Banff Avenue."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff day hikes",
          "url": "https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking/banff"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Lake Minnewanka',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'The largest lake in the park, a short drive or seasonal bus ride from town. Lakeshore trails, boat cruises in summer and, below the surface, the remains of a resort village flooded by a dam in 1941. Bighorn sheep on the road are common — slow down.',
      tags: [{ label: 'Seasonal bus', level: 'blue' }, { label: 'Wildlife', level: 'olive' }],
      details: {
        "lead": "The largest lake in the park, with lakeshore trails, boat cruises in summer and the remains of a resort village flooded by a dam in 1941.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Free with a pass",
                "text": "The lake is free to visit with a park pass; boat cruises are extra."
              },
              {
                "title": "Sheep on the road",
                "text": "Bighorn sheep are common, so slow down."
              },
              {
                "title": "Drowned village",
                "text": "The remains of a resort village lie below the surface."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Trail closure",
                "text": "On September 15, 2026 Parks Canada closed the Lake Minnewanka Trail, the Aylmer Pass Trail and associated campgrounds. Check the bulletins for current status."
              },
              {
                "title": "Seasonal bus",
                "text": "A bus runs in summer; otherwise drive."
              },
              {
                "title": "Time",
                "text": "Half a day with the lakeshore walk."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free with a park pass ($12.25 adult day pass in 2026)."
          },
          {
            "label": "Getting there",
            "text": "A short drive from town."
          },
          {
            "label": "Best time",
            "text": "Summer for cruises."
          }
        ],
        "link": {
          "label": "Parks Canada: Banff bulletins",
          "url": "https://parks.canada.ca/pn-np/ab/banff/bulletins"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Whyte Museum',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The museum and archives of the Canadian Rockies, founded by two Banff painters. It holds the records of the mountain guides, the early tourist trade — and of Banff Indian Days, the summer event from the late 1800s until 1978 at which Stoney Nakoda families were brought into town as a spectacle for visitors, under rules set by park authorities, and used it on their own terms anyway.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
      details: {
        "lead": "The museum and archives of the Canadian Rockies, founded by two Banff painters. It holds the records of the mountain guides and the early tourist trade.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Most sources list 10 am–5 pm daily; some give longer summer hours (9:30 am–6 pm from mid-June to mid-September)."
              },
              {
                "title": "Admission",
                "text": "One blog lists adults $15, seniors and students $12.50, locals $10 and under 17 free; other guides say by donation."
              },
              {
                "title": "Banff Indian Days",
                "text": "The archives also hold records of Banff Indian Days, which ran until 1978."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Library card",
                "text": "A Banff Public Library card can borrow a free family day pass."
              },
              {
                "title": "Holiday closures",
                "text": "Closed around Christmas and New Year."
              },
              {
                "title": "Check",
                "text": "Hours and prices differ between sources; confirm at whyte.org."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $15 for adults, or by donation in some guides."
          },
          {
            "label": "Getting there",
            "text": "Downtown Banff."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Whyte Museum",
          "url": "https://whyte.org/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Trailheads from the Edge of Town',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tunnel Mountain', dist: 'From town', text: 'A short, steady climb straight from the residential streets to a summit with a view down the whole Bow Valley. The best first hike in Banff, and achievable in a couple of hours.' },
    { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', name: 'Johnston Canyon', dist: '≈25 km west', text: 'Catwalks bolted to the canyon walls lead to two waterfalls. Very popular — arrive early or late, and use the parking rules in force that season.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Legacy Trail', dist: 'Banff to Canmore', text: 'A paved cycling path running alongside the highway between the two towns, with the mountains on every side. Ride one way and take the Roam bus back.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Skiing', dist: 'Three resorts', text: 'Mt Norquay sits right above town; Sunshine Village and Lake Louise are further out, with shuttles from Banff hotels in winter. One ski pass covers all three.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Vermilion Lakes · Bow River', text: 'Canoes and kayaks rent by the river in summer. Glacier-fed water is dangerously cold even in August — wear a lifejacket and stay close to shore.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Everywhere', text: 'Elk in town, bighorn sheep on the roads, bears and wolves on the trails. Carry bear spray on any hike, keep 30 metres from elk and 100 metres from bears, and never stop on the highway to photograph an animal.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef & Game', area: 'Banff Avenue', areaLevel: 'danger', text: 'Steakhouses and mountain-lodge menus with bison and elk are the house style. Prices reflect the location — this is a resort town in a national park.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Breweries & Distillery', area: 'Downtown', areaLevel: 'gold', text: 'A small brewpub and distillery scene within a few blocks of each other. After a long hiking day, the obvious place to end up.' },
    { icon: '🫕', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Fondue & Après', area: 'Downtown · Ski hills', areaLevel: 'purple', text: 'Swiss mountain-guide heritage shows up in fondue restaurants that have outlasted every food trend. Après-ski on the hills in winter.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés & Bakeries', area: 'Downtown', areaLevel: 'blue', text: 'Early-opening cafés catch hikers before the trailheads fill. Grab lunch to carry — there is nothing to buy once you are on a trail.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Groceries', area: 'Downtown', areaLevel: 'safe', text: 'Groceries cost noticeably more in Banff than in Calgary or Canmore. If you are self-catering for a week, stock up before you arrive.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Hotel Dining', area: 'Banff Springs · Chateau', areaLevel: 'olive', text: 'Afternoon tea or a drink in the grand railway hotels is the cheapest way to see inside them. Reservations help in summer.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Mud and snow', text: 'Valley trails melt out in May; high trails and lakes stay snowbound into June, and Moraine Lake is often still frozen. Elk calving season — mothers are aggressive. Quiet and cheaper.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Everything is open and everything is full. Book accommodation months ahead, use shuttles for Lake Louise and Moraine Lake, and expect wildfire smoke on some days. Nights stay cold.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Larches and the rut', text: 'Golden larches in mid-September draw crowds to the high trails. It is also the elk rut — bull elk in town are genuinely dangerous; keep your distance and stay out of their way.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Three ski areas, frozen waterfalls, the hot springs in falling snow. Cold snaps below −25 °C happen. Winter tires and an emergency kit are essential on the highways.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Calgary',
      text: 'The Trans-Canada Highway runs west from Calgary into the park, about 128 km and an hour and a half. You need a valid Parks Canada pass from the moment you enter the park — stopping in town counts. Fenced highway with wildlife overpasses; stay alert for animals anyway.',
      time: '≈1.5h from Calgary (≈128 km)',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'From Calgary Airport (YYC)',
      text: 'There is no commercial airport in the park. Scheduled airport shuttles run from YYC to Banff hotels; book ahead in summer and ski season.',
      time: '≈1h45m from YYC',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Roam Transit',
      text: 'Roam buses link Banff with Canmore (Route 3) and Lake Louise (Route 8X express), and serve the town and nearby sights. The 8X takes reservations, and in summer it is the sane way to reach Lake Louise.',
      time: '≈25 min to Canmore · ≈45 min to Lake Louise',
    },
    {
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Rail',
      text: 'There is no regular passenger train to Banff. The Rocky Mountaineer, a luxury tourist train, stops here between Vancouver and Calgary — a holiday in itself rather than a way to get here.',
      time: 'Tourist train only',
    },
  ],

  stay: [
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'Downtown Banff',
      area: 'Walkable · Most expensive',
      text: 'Hotels on and around Banff Avenue put restaurants, the river and the bus loop on foot. Prices in July and August are among the highest in the country.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Banff+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Banff%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Tunnel Mountain Campgrounds',
      area: 'Cheapest in the park · Book early',
      text: 'Parks Canada campgrounds a few minutes from town, with summer Roam service into downtown. Reservations open months ahead and sell out fast.',
      links: [
        { label: 'Parks Canada Reservations', url: 'https://reservation.pc.gc.ca/', level: 'safe' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Canmore',
      area: 'Cheaper · 20 min away',
      text: 'Just outside the park boundary, with more choice and lower prices. The Roam bus and the Legacy Trail connect the two towns. Note that you still need a park pass to enter Banff.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Canmore+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Roam Transit',
      text: 'Roam runs the town buses, the regional routes to Canmore and Lake Louise, and seasonal routes to sights like Lake Minnewanka and the Cave and Basin. In summer it is the best way to avoid parking battles.',
      linkLabel: 'Roam Transit',
      linkUrl: 'https://roamtransit.com/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Roam Fares',
        text: 'Fares below are from Roam’s 2026 fare table. Children ride free. Transfers between the Banff local routes are valid for 45 minutes.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Banff local: $2 · Day pass $5', 'Route 3 to Canmore: $6', 'Route 8X to Lake Louise: $12.50', 'System day pass: $30'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://roamtransit.com/fares/',
      },
      {
        icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
        title: 'Parks Canada Shuttles',
        text: 'Moraine Lake Road is closed to private vehicles. In season (June to mid-October in 2026) the only ways in are the Parks Canada shuttle, Roam or a licensed commercial tour. Shuttles also serve Lake Louise. Reserve ahead; the shuttle ticket is separate from your park pass.',
        fareBox: {
          label: 'Parks Canada shuttle',
          lines: ['Adult: $12.75', 'Senior: $6 · Youth: $4', 'Plus booking fee', 'Park pass also required'],
        },
        linkLabel: 'Parks Canada — Banff',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/banff',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🅿️', iconSrc: '/icons/attractions/ph_garage-thin.svg', title: 'Parking', text: 'Downtown parking is paid in the busy core and fills early in summer. Lake Louise parking is paid from mid-May to mid-October. Leave the car at the hotel and ride.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Cycling', text: 'Town is compact and flat along the river, and the Legacy Trail runs to Canmore. Bike rentals are easy to find.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'A small fleet; expect waits in peak season and late at night.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the river trails, Bow Falls and Cave and Basin are all walkable from Banff Avenue.' },
        ],
      },
    ],
    proTip: {
      label: 'Summer tip:',
      text: 'Do not try to drive to Lake Louise at midday in July. Book the 8X or the Parks Canada shuttle for an early slot — the lakeshore at 8am and the lakeshore at noon are different places.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some Banff properties also add their own destination or marketing fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Banff / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Gondola, tours and rentals: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Park admission: priced as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and ski instructors: 10–15%. Hotel housekeeping: $2–5/night. Shuttle drivers: a few dollars per bag is appreciated.',
  },

  practical: [
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Pass', text: 'Every vehicle stopping in the park needs a valid Parks Canada pass — including if you are only visiting the town. In 2026: $12.25 adult per day, $24.50 family, youth free. A Discovery Pass ($83.50 adult) pays off after about a week.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Elk in Town', text: 'Elk wander the streets and the schoolyard. Keep 30 metres away, never get between a cow and her calf in spring, and give bulls a very wide berth during the September–October rut.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Bear Safety', text: 'Carry bear spray on every trail and know how to use it. Some trails have seasonal group-hiking restrictions or closures — check Parks Canada trail reports before setting out.' },
    { icon: '📵', iconSrc: '/icons/attractions/ph_cell-signal-slash-thin.svg', title: 'Cell Coverage', text: 'Coverage is good in town and along the Trans-Canada but disappears quickly on trails and side roads. Download maps before you go.' },
    { icon: '🏠', iconSrc: '/icons/attractions/ph_house-thin.svg', title: 'Who Can Live Here', text: 'You cannot simply buy a house and move to Banff. To reside in the park you must be an eligible resident — in practice, mostly people whose main job is in the park, and their families.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta stays on Alberta Time (UTC-6) all year. BC stays on UTC-7 year-round, so Alberta is always one hour ahead of BC.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Banff lies in Treaty 7 territory and the traditional lands of the Stoney Nakoda, Tsuut’ina and Blackfoot Confederacy nations, with the Ktunaxa and Métis also tied to these valleys. When the park was created, the peoples who had hunted and gathered here for millennia were restricted from it.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Banff Mineral Springs Hospital', '305 Lynx Street', 'Emergencies: call 911'] },
  ],
};

export default BANFF;
