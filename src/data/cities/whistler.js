// Whistler — данные страницы /city/whistler
// Районы: фото лежат в public/Cities/Whistler (источники — в комментариях у
// каждого района); подробные карточки — поле details. Hero-видео реальное:
// вид на деревню и долину с кабинами гондолы. Постер — кадр из него.

export const WHISTLER = {
  slug: 'whistler',
  name: 'Whistler',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Sea-to-Sky',
  accentLevel: 'blue',
  heroVideo: '/Cities/Whistler/11984824_1920_1080_60fps.mp4',
  heroImage: '/Cities/Whistler/hero-poster.jpg',
  heroIcon: '🏔️',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.1163, lon: -122.9574 },
  subtitle: "Canada's Mountain Resort Village",
  description:
    "Two mountains, one pedestrian village and the PEAK 2 PEAK gondola linking them. Whistler is a world-famous ski resort in winter and North America's biggest mountain-bike park in summer — a two-hour drive up the Sea-to-Sky Highway from Vancouver.",

  actions: [
    { label: 'Explore Whistler', href: '#neighbourhoods' },
    { label: 'Ski Season', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈14K' },
    { label: 'Village Elevation', value: '670 m' },
    { label: 'Ski Terrain', value: '8,171 acres' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '120 km · 1.5–2h' },
    { label: 'Ski Opening', value: 'Nov 20 (target)' },
  ],

  badges: ['Ski Resort', 'Bike Park', 'Year-Round'],

  bestSeasons: [
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Winter', level: 'blue', rating: 5 },
    { icon: '🌱', iconSrc: '/icons/attractions/ph_plant-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
  ],

  highlights: [
    { value: '8,171', label: 'Acres of ski terrain across Whistler and Blackcomb mountains', level: 'blue' },
    { value: '≈11 m', label: 'Average annual snowfall on the mountain (sources give 10.7 to 11.9 m)', level: 'safe' },
    { value: '50+ km', label: 'Of high alpine trails reached by the PEAK 2 PEAK Gondola in summer', level: 'gold' },
    { value: '120 km', label: 'From Vancouver along the Sea-to-Sky Highway (Hwy 99)', level: 'danger' },
  ],

  neighbourhoods: [
    // Фото: Olympic Plaza в Whistler Village (кольца вечером), Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Whistler Village', image: '/Cities/Whistler/Whistler Village.jpg', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Core', tagLevel: 'blue', meta: 'Pedestrian heart · Village gondola · Shops · Restaurants · Après-ski',
      details: {
        "lead": "The car-free centre of the resort. The Village Stroll links restaurants, cafés, shops and après spots, and both the Whistler and Blackcomb gondolas are within walking distance of a single base area.",
        "see": [
          {
            "title": "Olympic Plaza and the rings",
            "text": "The Olympic rings stand in Village North. In winter the plaza has an outdoor skating rink; the 2026/27 rink is set to reopen on November 26. Entry is by ticket and skate rental is extra."
          },
          {
            "title": "Whistler Winterlight",
            "text": "November 27–29, 2026 at Olympic Plaza: a lit Ferris wheel, light installations, live music and treats. The Whistler Holiday Market runs November 28–29 and the Whistler Film Festival December 2–6."
          },
          {
            "title": "Free Sunday fire show",
            "text": "Through the winter, skiers and riders jump through hoops of fire in a free outdoor evening show on Sundays."
          },
          {
            "title": "PEAK 2 PEAK",
            "text": "Winter sightseeing on the PEAK 2 PEAK Gondola reopens on November 25, 2026 and runs to April 18, 2027."
          }
        ],
        "eat": [
          {
            "title": "The Village Stroll",
            "text": "Restaurants, cafés, bakeries and après patios line the pedestrian streets. Book ahead in winter and on summer weekends."
          },
          {
            "title": "Purebread",
            "text": "The bakery has a Village location with longer hours than its Function Junction shop."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 120 km from Vancouver on Highway 99, roughly 1.5 to 2 hours by car."
          },
          {
            "label": "Getting around",
            "text": "The Village is car-free and compact. The Valley Trail links it to the lakes and other neighbourhoods."
          },
          {
            "label": "Ski season",
            "text": "Whistler Blackcomb has set a target opening of Friday, November 20, 2026, subject to weather."
          }
        ],
        "link": {
          "label": "Tourism Whistler",
          "url": "https://www.whistler.com/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: вершина рядом с Blackcomb Peak, Wikimedia Commons, общественное достояние (автора указывать не требуется)
    { name: 'Upper Village & Blackcomb', image: '/Cities/Whistler/Upper Village & Blackcomb.jpg', icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', tag: 'Ski-in', tagLevel: 'blue', meta: 'Blackcomb Gondola · Ski-in, ski-out stays · Quieter evenings',
      details: {
        "lead": "The base of Blackcomb Mountain, across Fitzsimmons Creek from the main Village. Whistler Blackcomb describes the walk to the Village as roughly ten minutes, and the Fairmont Chateau Whistler anchors the area.",
        "see": [
          {
            "title": "Blackcomb Gondola",
            "text": "The gondola up Blackcomb starts here, so the Upper Village is the easiest base for skiing the mountain."
          },
          {
            "title": "New Showcase Chair",
            "text": "For 2026/27 a fixed-grip quad replaces the Showcase T-Bar on Blackcomb, improving access to the Horstman and Blackcomb glacier terrain."
          },
          {
            "title": "Fairmont Chateau Whistler",
            "text": "The resort hotel that anchors the Upper Village."
          }
        ],
        "eat": [
          {
            "title": "Milestones",
            "text": "A popular chain restaurant by the Fairmont Chateau Whistler at 4555 Blackcomb Way."
          },
          {
            "title": "HandleBar Café and Après",
            "text": "4557 Blackcomb Way, known for its craft-beer selection."
          },
          {
            "title": "Connection Café",
            "text": "Next to the Upper Village at the Lost Lake PassivHaus, 7400 Fitzsimmons Road."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About a ten-minute walk from the main Village across the creek."
          },
          {
            "label": "Early season",
            "text": "Through January 15 most lifts are planned to run 9 am to 3:30 pm. Check lift status each morning."
          },
          {
            "label": "Good to know",
            "text": "Restaurant details in guides are sometimes years old, so confirm hours before you go."
          }
        ],
        "link": {
          "label": "Tourism Whistler: winter 2026/27",
          "url": "https://www.whistler.com/blog/post/what-to-expect-in-whistler-winter/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (гондола и деревня Creekside)
    { name: 'Creekside', image: '/Cities/Whistler/Creekside.jpg', icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg', tag: 'Relaxed', tagLevel: 'purple', meta: 'Original base area · Gondola · Cafés · Less crowded',
      details: {
        "lead": "The original base area, south of the Village. It has its own gondola up Whistler Mountain, restaurants, shops, a grocery store and everyday services, and it feels more like a neighbourhood than a resort centre.",
        "see": [
          {
            "title": "Creekside Gondola",
            "text": "Serves Whistler Mountain. Visitors report shorter lines here than at the Village, and Creekside has its own parking."
          },
          {
            "title": "Creekside bike zone",
            "text": "In summer the Creekside zone of the Whistler Mountain Bike Park hosted the UCI Mountain Bike World Cup Downhill on September 25–27, 2026."
          },
          {
            "title": "Everyday Whistler",
            "text": "A grocery store and local shops make it practical for longer stays."
          }
        ],
        "eat": [
          {
            "title": "Local pubs and coffee shops",
            "text": "Creekside has neighbourhood pubs and cosy cafés rather than the Village’s big après scene."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "To reach the main Village from Creekside you need a shuttle or a drive. Check Whistler Transit routes at bctransit.com/whistler."
          },
          {
            "label": "Best for",
            "text": "Quieter stays and skiers who want a shorter lift line."
          },
          {
            "label": "Good to know",
            "text": "Creekside has local spots rather than the Village’s big après scene, so compare both before you book."
          }
        ],
        "link": {
          "label": "Tourism Whistler",
          "url": "https://www.whistler.com/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (озеро с деревянным причалом)
    { name: 'Lost Lake & Alpine Meadows', image: '/Cities/Whistler/Lost Lake & Alpine Meadows.jpg', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Lakes', tagLevel: 'safe', meta: 'Forest trails · Swimming · Nordic skiing · North of the village',
      details: {
        "lead": "Lost Lake Park lies just north of the Village. Between April and mid-December it is for swimming, walking, hiking and biking; from mid-December to the end of March the trails become a cross-country ski network.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Swimming docks",
                "text": "In the warmer months you can swim out to the docks. Lake water in the valley stays cold even in summer."
              },
              {
                "title": "PassivHaus and Connection Café",
                "text": "Nordic tickets are sold at the Connection Café in the PassivHaus at 7400 Fitzsimmons Road."
              },
              {
                "title": "Forest trails",
                "text": "Walking, hiking and biking trails run through the park in the snow-free months."
              }
            ]
          },
          {
            "title": "Seasons and tickets",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Nordic pass",
                "text": "A pass is required, and the trails are closed to other users during Nordic operations. 2026/27 adult season passes are $299 early bird or $369 regular; day tickets list at $30 for cross-country and $15 for snowshoe or night."
              },
              {
                "title": "Check the status",
                "text": "The trails reopen when snow conditions allow, usually mid-December, so check the current status before you plan."
              },
              {
                "title": "Parking",
                "text": "Winter parking is closed from about November 15 to April 15, so walk, bike or take transit."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The main entry is near Blackcomb Way and Lorimer Road, with parking in Day Lot 5. The Valley Trail runs to the park."
          },
          {
            "label": "Best time",
            "text": "Summer for swimming, winter for Nordic skiing and snowshoeing."
          },
          {
            "label": "Good to know",
            "text": "Winter Nordic trails are closed to other users during ski operations, so check which sections are open to walkers."
          }
        ],
        "link": {
          "label": "Whistler.ca: Lost Lake Park",
          "url": "https://www.whistler.ca/parks-recreation-culture/parks/lost-lake-park/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (зимняя деревня с огнями)
    { name: 'Function Junction', image: '/Cities/Whistler/Function Junction.jpg', icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', tag: 'Local', tagLevel: 'gold', meta: 'Local workshops · Cafés and brewery scene · Budget stays nearby',
      details: {
        "lead": "Whistler's working neighbourhood on Millar Creek Road, less than a ten-minute drive south of the Village. It is where the locals go for craft beer, bakeries and a quick lunch.",
        "see": [
          {
            "title": "Whistler Brewing Company",
            "text": "On Millar Creek Road, less than a ten-minute drive south of the Village."
          },
          {
            "title": "Coast Mountain Brewing",
            "text": "About a block from Whistler Brewing, so it is easy to visit both."
          },
          {
            "title": "Local workshops",
            "text": "A cluster of local shops and workshops that sit apart from the resort scene."
          }
        ],
        "eat": [
          {
            "title": "Purebread",
            "text": "1-1040 Millar Creek Road. Listed as open daily 9 am–4:30 pm, take-away only."
          },
          {
            "title": "Wild Wood Café and Forecast Coffee",
            "text": "Brunch and coffee, according to Tourism Whistler’s neighbourhood guide."
          },
          {
            "title": "Functional Pie Pizzeria",
            "text": "Listed for dinner. Guides are from 2019, so check hours."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A guide lists buses 20, 20X or 10 from the Village, about 20 minutes. Stops and frequencies differ by source, so check bctransit.com/whistler."
          },
          {
            "label": "By taxi",
            "text": "About 9 to 10 minutes from the Village, roughly $21 to $27 according to Rome2Rio."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a beer and a bakery stop."
          }
        ],
        "link": {
          "label": "Tourism Whistler: Function Junction",
          "url": "https://www.whistler.com/blog/post/2019/09/17/function-junction/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (бирюзовое озеро в горах)
    { name: 'Pemberton', image: '/Cities/Whistler/Pemberton.jpg', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'Valley', tagLevel: 'danger', meta: 'Farm valley north of Whistler · Linked by the Pemberton Commuter bus',
      details: {
        "lead": "The valley north of Whistler. Joffre Lakes, about 30 minutes from Pemberton, is the main draw, and the Pemberton Commuter bus links the valley to Whistler.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Joffre Lakes Provincial Park",
                "text": "A three-lake hike of roughly 10 km round trip, beginner-friendly and the area’s most popular outing. From May to October a free day-use pass is required, booked online through BC Parks; passes often sell out."
              },
              {
                "title": "Camping at Joffre",
                "text": "Camping is allowed only at Upper Joffre Lake Campground, on designated tent pads, with reservations required in the camping season."
              },
              {
                "title": "Nairn Falls and One Mile Lake",
                "text": "Nairn Falls Provincial Park has a hike, and One Mile Lake is easy to reach."
              }
            ]
          },
          {
            "title": "Also in the valley",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Horseback riding",
                "text": "Guides list riding as a top way to see the valley."
              },
              {
                "title": "Distillery and disc golf",
                "text": "A distillery visit and disc golf are also on the lists."
              },
              {
                "title": "Transit",
                "text": "One guide describes Joffre Lakes as transit-accessible."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "By bus",
            "text": "The Pemberton Commuter is Route 99, starting at the Village Gondola Transit Exchange. A universal single-ride fare took effect on April 19, 2026; check the current price on bctransit.com."
          },
          {
            "label": "By car",
            "text": "North on Highway 99 through Whistler."
          },
          {
            "label": "Time to allow",
            "text": "A full day with a Joffre Lakes hike."
          }
        ],
        "link": {
          "label": "BC Transit: Route 99 Pemberton Commuter",
          "url": "https://www.bctransit.com/pemberton-valley/schedules-and-maps/route-overview/?route=99"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'PEAK 2 PEAK Gondola',
      icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
      text: 'A record-breaking gondola crossing the valley between Whistler and Blackcomb mountains, with views of volcanic peaks, coastal rainforest and glaciers. Sightseeing hours are seasonal, so check dates before you plan.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Views', level: 'blue' }],
      details: {
        "lead": "The gondola that links Whistler and Blackcomb mountains, a crossing of about 11 minutes one way with views of volcanic peaks, coastal rainforest and glaciers. The official site suggests planning about two hours for the full visit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The crossing",
                "text": "Listed as the longest unsupported span of its kind, joining the two mountains in about 11 minutes."
              },
              {
                "title": "Winter sightseeing",
                "text": "Reopens on November 25, 2026 and runs to April 18, 2027."
              },
              {
                "title": "Summer",
                "text": "The 2026 summer sightseeing season ran from May 16 to September 20."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book online",
                "text": "Prices vary by season, with youth and senior discounts. Adult prices in 2026 guides range from about $105 to $118; booking online is usually cheaper."
              },
              {
                "title": "Check hours",
                "text": "Sightseeing hours vary by season and sources disagree, so check whistler.com the day before."
              },
              {
                "title": "Dress for altitude",
                "text": "It is colder and windier at the top than in the Village."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Check the official price for your dates."
          },
          {
            "label": "Getting there",
            "text": "From the Whistler Village Gondola or the Blackcomb Gondola."
          },
          {
            "label": "Time to allow",
            "text": "About two hours for the full visit."
          }
        ],
        "link": {
          "label": "Whistler.com: PEAK 2 PEAK Gondola",
          "url": "https://www.whistler.com/activities/peak-to-peak-gondola/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Skiing & Snowboarding',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'About 8,171 acres of terrain across two mountains, with roughly 11 m of average snowfall. The 2026/27 season is targeted to open on November 20, weather permitting. Through January 15 most lifts are planned to run 9 am to 3:30 pm, so check hours.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Winter', level: 'blue' }],
      details: {
        "lead": "Whistler Blackcomb has 8,171 acres of terrain and more than 200 runs. The official target for opening day in 2026/27 is Friday, November 20, subject to weather.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Opening day",
                "text": "Target date November 20, 2026. Opening-day terrain is a partial package that grows as snow and snowmaking allow."
              },
              {
                "title": "Early-season hours",
                "text": "Through January 15 most lifts are planned to run 9 am to 3:30 pm, about 30 minutes later than in past seasons."
              },
              {
                "title": "What is new",
                "text": "A fixed-grip quad, the Showcase Chair, replaces the Showcase T-Bar on Blackcomb."
              },
              {
                "title": "Snowfall",
                "text": "Sources give an average of 10.7 to 11.9 m a year."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Buy early",
                "text": "Lift tickets are limited for 2026/27, and buying in advance may offer better value. Prices vary by date, so check the official site."
              },
              {
                "title": "Lessons",
                "text": "Book lessons early, especially around holidays."
              },
              {
                "title": "Check conditions",
                "text": "Open terrain changes day by day, so check lift status before you go up."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Day tickets and passes vary by date and are cheaper in advance."
          },
          {
            "label": "Getting there",
            "text": "The Whistler Village, Blackcomb and Creekside gondolas all reach the mountains."
          },
          {
            "label": "Best time",
            "text": "Winter, with opening depending on snow."
          }
        ],
        "link": {
          "label": "Tourism Whistler: winter 2026/27",
          "url": "https://www.whistler.com/blog/post/what-to-expect-in-whistler-winter/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Whistler Mountain Bike Park',
      icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg',
      text: 'A lift-served bike park with several zones, from beginner flow trails to expert downhill. Lessons and rentals are available. In 2026 it ran from May 15 to October 12.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Summer', level: 'blue' }],
      details: {
        "lead": "A lift-served bike park on Whistler Mountain. The 2026 season ran from May 15 to October 12, so it is closed now and expected to reopen next spring.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Zones",
                "text": "A 2019 park map names the Garbanzo, Creekside and Fitzsimmons zones and a limited-access Peak zone with a long descent to the valley floor."
              },
              {
                "title": "Race level",
                "text": "The Creekside zone hosted the UCI Mountain Bike World Cup Downhill on September 25–27, 2026."
              },
              {
                "title": "Lessons and rentals",
                "text": "Available at the park; lessons are the quickest way to improve."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "Adult day tickets in 2026 were reported at about $95 early season and $105 in the regular season, plus tax; one listing gave $110. Check for next season."
              },
              {
                "title": "Gear",
                "text": "Wear a full-face helmet and protective gear on lift-served terrain."
              },
              {
                "title": "Trail map",
                "text": "Zone layouts change, so check the current Bike Park map before you ride."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Tickets are cheaper pre-booked."
          },
          {
            "label": "Season",
            "text": "Late spring to early fall; the 2026 dates were May 15 to October 12."
          },
          {
            "label": "Getting there",
            "text": "Lifts leave from the Village and from Creekside."
          }
        ],
        "link": {
          "label": "Whistler Blackcomb: summer 2026",
          "url": "https://news.vailresorts.com/whistler-blackcomb-summer-2026"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Alpine Hiking',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'More than 50 km of high alpine trails reached by gondola. These are summer-only: they close for the season in fall and reopen the following summer. Valley trails stay open lower down year-round.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Summer only', level: 'blue' }],
      details: {
        "lead": "More than 50 km of high alpine trails connected by the PEAK 2 PEAK Gondola. They are summer-only, so they are closed now and reopen next summer.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summer Alpine Experience",
                "text": "The ticket covers the Whistler Village Gondola, Blackcomb Gondola, PEAK 2 PEAK, Peak Express and the Cloudraker Skybridge."
              },
              {
                "title": "Trail examples",
                "text": "The 0.8 km Cloudraker Loop, the 9.4 km High Note Trail on Whistler, and the Overlord Trail on Blackcomb, about 7.5 km."
              },
              {
                "title": "2026 dates",
                "text": "Sightseeing ran from May 16 to September 20, with the full PEAK 2 PEAK experience open daily from June 13."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Pack layers",
                "text": "Conditions change fast, so carry layers, water and a map."
              },
              {
                "title": "Check the snowline",
                "text": "High trails can hold snow into early summer; check which are open."
              },
              {
                "title": "Valley trails",
                "text": "Lower valley trails stay open much longer, including the Valley Trail."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. The gondola ticket covers the lifts."
          },
          {
            "label": "Getting there",
            "text": "Take the Whistler Village or Blackcomb gondola."
          },
          {
            "label": "Time to allow",
            "text": "A half day or a full day, depending on the trail."
          }
        ],
        "link": {
          "label": "Whistler Blackcomb: summer 2026",
          "url": "https://news.vailresorts.com/whistler-blackcomb-summer-2026"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Valley Trail & Lakes',
      icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg',
      text: 'A paved, mostly car-free network that links the village, neighbourhoods and lakes — ideal for walking, cycling and a summer swim. Rent a bike in the village.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "A network of paved, car-free trails around Whistler, listed at 46 km on the resort municipality’s tourism site. Other sources give 40 to 50 km.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Links the whole valley",
                "text": "The trail connects the Village, neighbourhoods and lakes. Alta Lake Road is the one stretch shared with cars on one popular route."
              },
              {
                "title": "Lost Lake",
                "text": "Swimming, walking, hiking and biking between April and mid-December."
              },
              {
                "title": "Winter",
                "text": "The municipality clears some sections for walking and fat biking, and some are groomed for Nordic skiing."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Rent a bike",
                "text": "Rental shops are near the Village; check prices and hours when you arrive."
              },
              {
                "title": "Cold water",
                "text": "Valley lakes stay cold even in July and August; wear a lifejacket if you paddle."
              },
              {
                "title": "Bears",
                "text": "Black bears are common in warm months. Never feed them and carry bear spray on remote trails."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free. Bike rental is extra."
          },
          {
            "label": "Getting there",
            "text": "The trail runs through the Village."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a short ride, longer for a lake swim."
          }
        ],
        "link": {
          "label": "Whistler.ca: multi-use trail network",
          "url": "https://www.whistler.ca/parks-recreation-culture/trails/multi-use-trail-network/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Whistler Village & Olympic Plaza',
      icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg',
      text: 'The car-free village centre hosted events at the 2010 Winter Olympics. Today it is the place for strolling, shopping, street performers and après-ski.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "The car-free village centre. Olympic Plaza in Village North holds the Olympic rings and, in winter, a skating rink and events.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Skating rink",
                "text": "The outdoor rink is set to reopen on November 26, 2026 and typically runs until mid-March. Entry is by ticket and skate rental is extra."
              },
              {
                "title": "Whistler Winterlight",
                "text": "November 27–29, 2026: a lit Ferris wheel, light installations, live music and treats."
              },
              {
                "title": "Other events",
                "text": "Whistler Holiday Market on November 28–29 and Whistler Film Festival on December 2–6."
              },
              {
                "title": "Free Sunday show",
                "text": "Through the winter, skiers and riders jump through fire hoops on Sunday evenings."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Evening light",
                "text": "The rings and the plaza are at their best in the evening."
              },
              {
                "title": "Skating times",
                "text": "Session times differ by source; check the official page before going."
              },
              {
                "title": "Walkable",
                "text": "The plaza is a short stroll from the Village Stroll and the gondolas."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to visit. Skating and events may cost extra."
          },
          {
            "label": "Getting there",
            "text": "In Village North, within walking distance of the gondolas."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Tourism Whistler: ice skating",
          "url": "https://www.whistler.com/activities/ice-skating/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Nordic Spa Day',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'Whistler has Scandinavian-style spas that alternate hot baths, cold plunges and steam, a classic recovery after a ski or bike day. Book ahead in winter.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Relax', level: 'purple' }],
      details: {
        "lead": "Scandinave Spa Whistler is open daily from 9 am to 10 pm, rain or shine, according to the official Whistler page. A visit alternates hot baths, cold plunges and relaxation.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Thermal Journey",
                "text": "The official page lists $138 in the regular season ($148 Friday to Sunday), $148 in high season ($163 Friday to Sunday) and $185 on peak days."
              },
              {
                "title": "Massage packages",
                "text": "Packages start at $273 in the regular season."
              },
              {
                "title": "Included",
                "text": "Reservations include guaranteed entry, robe rental, two towels and a locker. Walk-ins include a robe."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book ahead",
                "text": "In busy periods a waitlist may apply and walk-in availability is not guaranteed."
              },
              {
                "title": "Prices change",
                "text": "Prices differ by day and season and third-party sites show older figures, so check the official site."
              },
              {
                "title": "Contact",
                "text": "Phone 1-888-935-2423; the reservations team takes calls daily from 9 am to 8 pm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. From about $138 in the regular season."
          },
          {
            "label": "Getting there",
            "text": "A short drive from the Village."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          }
        ],
        "link": {
          "label": "Whistler.com: Scandinave Spa",
          "url": "https://www.whistler.com/wellness/scandinave-spa/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sea to Sky Gondola',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'On the way up from Vancouver, near Squamish: a 10-minute gondola to a summit at about 885 m with viewing platforms and trails. A good stop on the drive.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'En route', level: 'blue' }],
      details: {
        "lead": "On the drive up from Vancouver, near Squamish. The gondola climbs to a summit at about 885 m with viewing platforms and trails.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The summit",
                "text": "The highest point is 885 m (2,904 ft) above sea level."
              },
              {
                "title": "The ride",
                "text": "About 10 minutes each way, according to one ticket seller."
              },
              {
                "title": "Time at the top",
                "text": "Visitors spend about 1.5 to 3 hours."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "A 2026 local guide lists adults at $71.95 online and $76.95 at the ticket window; other sites differ, so check the official site."
              },
              {
                "title": "Hours",
                "text": "Most sources give 9 am to 5 pm, with the last ride down at 6 pm; summer hours may run later."
              },
              {
                "title": "Plan the drive",
                "text": "A good break on the Sea-to-Sky Highway, which takes 1.5 to 2 hours to Whistler."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Around $72 to $77 for adults."
          },
          {
            "label": "Getting there",
            "text": "Near Squamish on Highway 99, on the way to Whistler."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Wikipedia: Sea to Sky Gondola",
          "url": "https://en.wikipedia.org/wiki/Sea_to_Sky_Gondola"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Shannon Falls & Brandywine Falls',
      icon: '💦', iconSrc: '/icons/attractions/waterfall-thin.svg',
      text: 'Two free waterfall stops along the Sea-to-Sky Highway. Easy short walks from the parking areas — a good way to break up the drive.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "Two free waterfall stops along the Sea-to-Sky Highway. Neither needs a day-use pass.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Shannon Falls",
                "text": "A short walk of about 350 m to the base of the falls. A May 2026 guide says the park does not need the advance day-use passes used at other nearby parks."
              },
              {
                "title": "Brandywine Falls",
                "text": "The falls walk is roughly 1.2 km round trip and takes about 30 minutes."
              },
              {
                "title": "Free parking",
                "text": "Both parks have free parking, though Shannon Falls tends to fill by about 10 am."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Brandywine parking",
                "text": "There is no overflow parking, and cars left on the highway are towed. One guide says the lot closes in winter, so check before you go."
              },
              {
                "title": "Go early",
                "text": "Arrive before mid-morning on summer weekends."
              },
              {
                "title": "Check BC Parks",
                "text": "Passes and lot closures can change, so check the official park pages."
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
            "text": "Both are off Highway 99; Shannon Falls is near Squamish and Brandywine Falls is closer to Whistler."
          },
          {
            "label": "Time to allow",
            "text": "About half an hour to an hour at each."
          }
        ],
        "link": {
          "label": "Sea to Sky Parks: Shannon Falls",
          "url": "https://seatoskyparks.com/parks/shannon-falls-park/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Adventure Year-Round',
  outdoor: [
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Mountain Biking', dist: 'Bike park · summer', text: 'Whistler Mountain Bike Park has several zones, from beginner to expert; lessons are the best way to improve. The valley also has cross-country trails. Wear a full-face helmet and protective gear on lift-served terrain.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'High-Alpine Hiking', dist: '50+ km of trails', text: 'Ride up the gondola and walk across the alpine. Conditions change fast — carry layers, water and a map. Alpine trails are open in summer only.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Lakes & Paddling', dist: 'Valley floor · free', text: 'Several lakes around the valley for swimming, paddleboarding, kayaking and canoeing in summer. Water stays cold even in July and August; wear a lifejacket.' },
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Ski & Snowboard', dist: '8,171 acres', text: 'Two mountains, from groomed beginner runs to glacier terrain. Book lessons early and check lift hours — early-season days start later. Passes are cheapest bought in advance.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Nordic & Snowshoeing', dist: 'Near the village', text: 'Cross-country skiing and snowshoeing on the valley floor are quieter, cheaper alternatives to downhill skiing. Several trailheads are close to the village.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife & Bear Safety', dist: 'Valley-wide', text: 'Black bears are common in the Whistler valley in warm months and may show up in town. Never feed them, store food and garbage securely, and carry bear spray on remote trails.' },
  ],

  food: [
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Après-Ski', area: 'Village · Base areas', areaLevel: 'danger', text: "Whistler's signature: patios and pubs fill up when the lifts close. In winter many places have live music and DJs; in summer the same patios catch the evening sun." },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Mountain Dining', area: 'On the mountain', areaLevel: 'blue', text: 'From quick lodge lunches to sit-down restaurants high on the slopes and, in summer, at alpine viewpoints.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer & Pubs', area: 'Village · Function Junction', areaLevel: 'gold', text: 'A good craft-beer scene with brewpubs and taprooms in the valley. Locals favour the cluster at Function Junction.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés & Bakeries', area: 'Village · Creekside', areaLevel: 'blue', text: 'Quick breakfast spots and bakeries are the way to start early on a ski or bike day. Expect lines at peak times.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Fine Dining', area: 'Village · Upper Village', areaLevel: 'purple', text: 'Whistler has a serious restaurant scene with Pacific Northwest menus, seafood and wine lists. Reserve ahead in winter and on summer weekends.' },
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Pemberton Farm Produce', area: 'Pemberton Valley', areaLevel: 'safe', text: 'The valley to the north is farming country; local produce shows up on Whistler menus and at markets in season.' },
  ],

  seasons: [
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'Late November — April', level: 'blue', rating: 5, note: 'Ski season', text: 'Prime season. Peak crowds at Christmas, New Year, February and spring break, so book lodging early. Winter tires are required on Hwy 99 from October 1 to April 30.' },
    { icon: '🌱', iconSrc: '/icons/attractions/ph_plant-thin.svg', name: 'Spring', months: 'May — June', level: 'olive', rating: 3, note: 'Quiet & cheaper', text: 'A shoulder season. Lower elevations turn green while snow lingers up high. The bike park typically opens in mid-May, with full gondola access from mid-June. Some services run reduced hours.' },
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Summer', months: 'July — August', level: 'safe', rating: 5, note: 'Bike & hike', text: 'Warm days, with village highs around 27°C. Mountain biking, alpine hiking and lake swimming. Crankworx brings crowds in late July and early August. Reserve ahead.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: "Check what's open", text: 'Cooler and quieter. Alpine trails and gondola sightseeing close for the season and the bike park winds down. October is the quietest time of year — check what is running before you go.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Sea-to-Sky Highway',
      text: 'Take Highway 99 north from Vancouver: about 120 km along Howe Sound and up through the Coast Mountains. It is the only road to Whistler. Winter tires are required from October 1 to April 30, and avalanche control or weather can close it temporarily.',
      time: '1.5–2.5h (120 km) — longer on summer weekends',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus from Vancouver',
      text: 'Skylynx runs scheduled buses from Vancouver International Airport and downtown Vancouver; Epic Rides is a budget option from downtown. Buses fill up on winter weekends, so book ahead. There is no train from Vancouver to Whistler.',
      time: 'Downtown ≈ 2h · YVR ≈ 2.5–3h',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Whistler has no commercial airport; most visitors fly into Vancouver (YVR) and continue by shuttle or car. Floatplane flights from Vancouver run in season as a scenic splurge.',
      time: 'Fly to YVR, then ≈ 2–2.5h by road',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Whistler Village',
      area: 'Best base · Everything on foot',
      text: 'The lively centre: restaurants, shops, après-ski and the Whistler Village Gondola. Best for first-time visitors and short stays. Also the busiest and priciest.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whistler+Village+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Whistler-Hotels.d6054449.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Upper Village & Blackcomb',
      area: 'Ski-in, ski-out · Quiet',
      text: 'Steps from the Blackcomb Gondola with a calmer evening feel. A good choice for skiers who want first chair without a walk.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Upper+Village+Whistler+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Whistler--BC', level: 'danger' },
      ],
    },
    {
      icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
      title: 'Creekside',
      area: 'Relaxed · Near lifts',
      text: 'The original base area, with its own gondola, cafés and a slower pace. Good value and easy access to the slopes outside the busiest times.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Creekside+Whistler+BC', level: 'blue' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/whistler', level: 'purple' },
      ],
    },
    {
      icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg',
      title: 'Function Junction & Cheakamus',
      area: 'Budget · Local',
      text: 'Hostels and lower-cost lodging south of the village, linked by bus. HI Whistler is among the budget options. Trade-off: a bus ride to the lifts.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cheakamus+Whistler+BC', level: 'blue' },
        { label: 'Hostelling International', url: 'https://www.hihostels.com', level: 'safe' },
      ],
    },
    {
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      title: 'Pemberton',
      area: 'Farm valley · Quiet',
      text: 'Farm stays and cabins in the valley to the north. Lower prices than Whistler and a very different pace; use the Pemberton Commuter bus or a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pemberton+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Pemberton--BC', level: 'danger' },
      ],
    },
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Squamish',
      area: 'Stopover · Climbing town',
      text: 'Halfway on the Sea-to-Sky route, with a more affordable base and lots of outdoor activity. Good if you split the trip or want a quieter night.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Squamish+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Whistler Transit (BC Transit & the Resort Municipality)',
      text: 'Whistler is compact and the village centre is car-free. A bus network links the Village, Upper Village, Creekside, Function Junction and other neighbourhoods, so many visitors never need a car once they arrive. Children 12 and under ride free, and some routes run only in winter.',
      linkLabel: 'Whistler Transit',
      linkUrl: 'https://www.bctransit.com/whistler',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app or card, or tap a contactless card or phone; cash is still accepted. Fares are exempt from sales tax — confirm current prices before you travel.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $2.75', 'DayPASS: $5.50', '30-Day Pass: $55', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Key Routes',
        text: 'Single-digit routes cover the Village area. Full winter service began on November 20, 2026. Several routes cut back once the ski season ends: Route 4 Market Place and Route 25 are seasonal, and Routes 5, 7 and 20X run less often in spring.',
        fareBox: {
          label: 'Useful routes',
          lines: ['5 — Upper Village / Benchlands', '20X — Cheakamus Express', '25 — Whistler Creek / Village (winter)', '99 — Pemberton Commuter'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/whistler/schedules-and-maps',
      },
      {
        icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Walk the Village', text: 'The Village and Upper Village connect by a pleasant pedestrian route; most of the centre is car-free.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Valley Trail', text: 'A paved trail network for bikes and walkers links neighbourhoods and lakes in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Shuttles', text: 'Taxis and hotel shuttles help with luggage and late nights. Book airport shuttles in advance.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'Useful for day trips down the Sea-to-Sky, but parking in the Village costs money.' },
        ],
      },
    ],
    proTip: {
      label: 'Dual pass tip:',
      text: 'If you are travelling between Pemberton and Whistler, a Dual DayPASS ($12, sold in the Umo app) covers the Pemberton Commuter and both local systems. A Dual 30-Day Pass is $130.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals have no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax). Some Whistler properties also add resort or service fees, so confirm what a displayed room price includes — après-ski drinks and lodging are where the difference really shows.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Whistler', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Lodging: ~16% (GST + PST + 3% MRDT)' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and ski gear: 12%' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology: 12%' },
      { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Rentals and goods: 12% (check each shop)' },
    ],
    exempt: [
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no PST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no PST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Books and newspapers: no PST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's-sized clothing: no PST" },
      { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', label: 'Bus fares: no sales tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Ski and bike instructors: 10–15% for a good lesson. Hotel housekeeping: $2–5/night. Shuttle drivers and bellhops: a few dollars.',
  },

  practical: [
    { icon: '🛞', iconSrc: '/icons/attractions/ph_tire-thin.svg', title: 'Winter Tires', text: 'Winter tires (M+S or snowflake symbol) are required on Hwy 99 from October 1 to April 30. Check your rental has them and watch DriveBC.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Book Early', text: 'Christmas, New Year, February and summer weekends sell out. Book lodging, lessons and bike-park access well ahead.' },
    { icon: '🕘', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Early-Season Hours', text: 'Lifts open later in the morning early in the season, since BC now stays on daylight time year-round. Always check current mountain hours.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Bear Safety', text: 'Make noise on trails, carry bear spray, and keep food, coolers and garbage locked away. Never approach or feed wildlife.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Use Umo (app or card) on Whistler buses; kids 12 and under ride free. Service is reduced outside the ski season.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Whistler Health Care Centre', '4380 Lorimer Road', 'Emergencies: call 911'] },
    { icon: '🔎', iconSrc: '/icons/attractions/ph_magnifying-glass-thin.svg', title: "Check What's Open", text: 'In fall and spring, lifts, trails and restaurants may be closed. Confirm on Whistler Blackcomb and Tourism Whistler before you go.' },
  ],
};

export default WHISTLER;
