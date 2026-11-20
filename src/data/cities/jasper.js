// Jasper — данные страницы /city/jasper
// В шапке ролик, присланный владельцем сайта. Снят он, судя по кадрам,
// не в Джаспере, а в Банфе: озеро Минневанка и озеро Ту-Джек с дорогой
// Lake Minnewanka Road между ними, ~290 км отсюда. Поставлен по прямому
// решению владельца сайта; если найдётся кадр самого Джаспера, менять
// нужно только heroVideo и heroImage. Постер вырезан из первого кадра
// того же ролика. Проверенный пост-пожарный снимок Pyramid Lake (Hansueli
// Krapf, Commons, 10.06.2025, CC BY-SA 4.0) — запасной вариант.
// Город и национальный парк — разные страницы: парк описан в
// src/data/parks/jasper.js, здесь только сам город.
// Статус объектов после пожара (что открыто, что закрыто) — на
// октябрь 2026 и меняется по сезонам; в тексте везде сказано
// сверяться с Parks Canada.

export const JASPER = {
  slug: 'jasper',
  name: 'Jasper',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Inside Jasper National Park',
  accentLevel: 'safe',
  heroIcon: '🌲',
  heroImage: '/Cities/Jasper/hero-poster.jpg',
  heroVideo: '/Cities/Jasper/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.8737, lon: -118.0814 },
  subtitle: 'The Town That Is Rebuilding',
  description:
    'A small railway town in the middle of the largest national park in the Canadian Rockies — quieter, wilder and further from anywhere than Banff. In July 2024 a wildfire burned through roughly a third of it. Jasper is open, people live and work here, and the rebuilding is happening in plain sight; visiting is one of the ways the town recovers.',

  actions: [
    { label: 'Explore Jasper', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈4.7K' },
    { label: 'Elevation', value: '≈1,060 m' },
    { label: 'Park Pass', value: 'Required' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Edmonton', value: '≈365 km · 4h' },
    { label: 'To Banff', value: '≈290 km · 4h' },
  ],

  badges: ['National Park Town', 'Rebuilding', 'Treaty 6 & 8 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '≈30%', label: 'Of the town’s structures destroyed by the July 2024 wildfire — 358 of 1,113', level: 'danger' },
    { value: '½', label: 'Of the destroyed properties rebuilt or approved for rebuilding by July 2026, per Parks Canada', level: 'gold' },
    { value: '25K', label: 'People evacuated in a single night — about 5,000 residents and 20,000 visitors', level: 'blue' },
    { value: '1907', label: 'The park was created — and First Nations and Métis families were removed from it', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Connaught Drive & Downtown', icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Railway station · Shops and restaurants · Information centre · Largely intact',
      details: {
        "lead": "The core of the town, around the railway station, with shops and restaurants and the information centre. Much of it came through the 2024 fire intact.",
        "see": [
          {
            "title": "Railway station",
            "text": "The station sits in the centre of town, on Connaught Drive."
          },
          {
            "title": "Information centre",
            "text": "The place to check what is open. Many things changed after the fire."
          },
          {
            "title": "Shops and restaurants",
            "text": "The central streets are largely intact and open for business."
          }
        ],
        "practical": [
          {
            "label": "Park pass",
            "text": "In 2026 an adult day pass was $12.25, a senior pass $10.75 and a family or group pass per vehicle $24.50; under 18 is free. The Discovery Pass was $83.50 for adults. Entry was free from June 19 to September 7, 2026."
          },
          {
            "label": "What is open",
            "text": "Parks Canada keeps a live “What’s open” page; check it before you plan."
          },
          {
            "label": "Time to allow",
            "text": "A couple of hours on foot."
          }
        ],
        "link": {
          "label": "Parks Canada: what’s open in Jasper",
          "url": "https://www.parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Patricia Street', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Main street', tagLevel: 'blue', meta: 'Cafés, outfitters and bars · One block up from the tracks',
      details: {
        "lead": "The main street, one block up from the tracks, with cafés, outfitters and bars.",
        "see": [
          {
            "title": "Cafés and outfitters",
            "text": "Coffee shops and outdoor-gear shops line the street."
          },
          {
            "title": "Bars",
            "text": "Where visitors and locals gather in the evening."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "One block up from the railway tracks, in the middle of town."
          },
          {
            "label": "Good to know",
            "text": "Hours can be reduced in winter and some businesses are still rebuilding, so check before you go."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Parks Canada: what’s open in Jasper",
          "url": "https://www.parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Rebuilding Areas', icon: '🏗️', iconSrc: '/icons/attractions/ph_crane-thin.svg', tag: 'West side', tagLevel: 'danger', meta: 'Neighbourhoods hit hardest in 2024 · Active construction · Residential, not a sight',
      details: {
        "lead": "The neighbourhoods hit hardest in July 2024. They are places where people live and rebuild, not a sight.",
        "see": [
          {
            "title": "Rebuilding progress",
            "text": "Of 374 properties that needed rebuilding, 46 were finished by July 15, 2026. A federal announcement on June 30, 2026 added $520 million in recovery funding."
          },
          {
            "title": "Timeline",
            "text": "The municipality plans to wind down dedicated recovery operations by the end of 2028."
          },
          {
            "title": "Rules",
            "text": "Under the updated rebuilding guide, wood siding or roofing is prohibited for new construction, except heavy timber."
          }
        ],
        "practical": [
          {
            "label": "How to visit",
            "text": "Drive through respectfully. Do not stop to photograph people’s homes."
          },
          {
            "label": "Still closed",
            "text": "Maligne Canyon (including in winter) and Cavell Road with its two trails stay closed for 2026; slope work on Cavell Road runs from fall 2026 to spring 2027."
          },
          {
            "label": "Good to know",
            "text": "Sources differ on the scale of loss (358 of 1,113 townsite structures in one report), so treat numbers as approximate."
          }
        ],
        "link": {
          "label": "Parks Canada: rebuilding guide",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/gestion-management/serviceimmobilier-realty/retablissement-recovery/guide"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Pyramid Bench', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'North', tagLevel: 'safe', meta: 'Pyramid and Patricia lakes · Five minutes’ drive · Trails and paddling',
      details: {
        "lead": "North of town, with Pyramid and Patricia lakes five minutes’ drive away and trails and paddling.",
        "see": [
          {
            "title": "Pyramid Island",
            "text": "A wooden footbridge, wheelchair- and stroller-friendly, links the island to shore. The island loop is about 300 m."
          },
          {
            "title": "Pyramid Lake",
            "text": "A listed 2026 closure affects elevations on Pyramid Mountain, not the lake, beach, docks or island, according to one guide."
          },
          {
            "title": "Patricia Lake",
            "text": "A quieter lake next door, good for paddling and picnics."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A five-minute drive from town."
          },
          {
            "label": "Cost",
            "text": "Free with a park pass."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Pyramid Lake guide",
          "url": "https://visitjaspernationalpark.ca/pyramid-lake-guide/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lac Beauvert', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Across the river', tagLevel: 'purple', meta: 'Jasper Park Lodge · Lakes Annette and Edith · Lakeside trail',
      details: {
        "lead": "Across the river from the town, with Lac Beauvert, Lakes Annette and Edith and a lakeside trail. Jasper Park Lodge sits on the lake.",
        "see": [
          {
            "title": "Lakes Annette and Edith",
            "text": "Two lakes with trails around them, close to the lodge."
          },
          {
            "title": "Lakeside trail",
            "text": "A trail follows the water."
          },
          {
            "title": "Jasper Park Lodge",
            "text": "The lodge on Lac Beauvert. Its winter status was not confirmed, so check with the lodge."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the river from the townsite; a short drive."
          },
          {
            "label": "Cost",
            "text": "The lakes are free with a park pass."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Parks Canada: what’s open in Jasper",
          "url": "https://www.parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Whistlers & the SkyTram', icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg', tag: 'South', tagLevel: 'olive', meta: 'Jasper SkyTram · Whistlers campground · Views over the Athabasca valley',
      details: {
        "lead": "The south side, with the Jasper SkyTram, Whistlers campground and views over the Athabasca valley.",
        "see": [
          {
            "title": "Jasper SkyTram",
            "text": "The 2026 season ran from April 15 to October 25. Pursuit lists the 2027 opening for May 21; confirm the date."
          },
          {
            "title": "Tickets",
            "text": "In October 2026 a timed adult ticket was listed from about $76–78, youth (6–15) from $48, and children 5 and under free."
          },
          {
            "title": "Whistlers campground",
            "text": "A campground at the foot of Whistlers Mountain."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the townsite on the Whistlers road."
          },
          {
            "label": "Weather",
            "text": "It is much colder at the top than in town."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Jasper SkyTram",
          "url": "https://www.whistlersmountain.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'The 2024 Fire — and Coming Back',
      icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg',
      text: 'In July 2024 a wildfire reached the townsite and destroyed 358 of its 1,113 structures — homes, businesses and hotels — while some 25,000 people were evacuated in a single night. A firefighter was killed by a falling tree during the response. Rebuilding is under way: of 374 properties that needed rebuilding, 46 were finished by July 15, 2026, and recovery operations are expected to wind down by the end of 2028. The burned neighbourhoods are where people live: drive through respectfully, do not treat them as a sightseeing stop.',
      tags: [{ label: 'Living history', level: 'danger' }, { label: 'Be respectful', level: 'caution' }],
      details: {
        "lead": "In July 2024 a wildfire reached the townsite. About 25,000 people were evacuated in a single night, and a firefighter was killed during the response.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Losses",
                "text": "One report puts the damage at 358 of the townsite’s 1,113 structures; another cites 380. Treat numbers as approximate."
              },
              {
                "title": "Rebuilding",
                "text": "Of 374 properties needing rebuilding, 46 were finished by July 15, 2026. A further $520 million in federal funding was announced on June 30, 2026."
              },
              {
                "title": "Timeline",
                "text": "Recovery operations are expected to wind down by the end of 2028."
              }
            ]
          },
          {
            "title": "How to visit",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Be respectful",
                "text": "The burned neighbourhoods are where people live. Drive through quietly and do not treat them as a sightseeing stop."
              },
              {
                "title": "Still closed",
                "text": "Maligne Canyon (including winter access) and Cavell Road with its two trails stay closed for 2026."
              },
              {
                "title": "Support businesses",
                "text": "Many businesses are open and welcome visitors; check Parks Canada’s open and closed list."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; it is not an attraction."
          },
          {
            "label": "Getting there",
            "text": "In the west of the townsite."
          },
          {
            "label": "Park pass",
            "text": "In 2026 an adult day pass was $12.25, a senior pass $10.75 and a family or group pass per vehicle $24.50; under 18 is free. The Discovery Pass was $83.50 for adults. Entry was free from June 19 to September 7, 2026."
          }
        ],
        "link": {
          "label": "Parks Canada: rebuilding guide",
          "url": "https://parks.canada.ca/pn-np/ab/jasper/gestion-management/serviceimmobilier-realty/retablissement-recovery/guide"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Pyramid & Patricia Lakes',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'Two lakes a short drive above town under Pyramid Mountain, with an island on a footbridge, paddling, picnic spots and trails. The slopes behind still show the scars of the fire and of the pine beetle years before it. The easiest place to see the scenery Jasper is known for without a long drive.',
      tags: [{ label: 'Free', level: 'safe' }, { label: '5 min drive', level: 'blue' }],
      details: {
        "lead": "Two lakes a short drive above town under Pyramid Mountain, with an island on a footbridge, paddling, picnic spots and trails.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Pyramid Island",
                "text": "A wheelchair- and stroller-friendly wooden footbridge leads to the island; the loop is about 300 m."
              },
              {
                "title": "Fire scars",
                "text": "The slopes behind still show scars of the fire and the pine beetle years before it."
              },
              {
                "title": "2026 closure",
                "text": "A listed closure affects elevations on Pyramid Mountain, not the lake, beach, docks or island."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Easy scenery",
                "text": "The easiest place to see the scenery Jasper is known for without a long drive."
              },
              {
                "title": "Trail lengths",
                "text": "Sources differ on lakeshore trail lengths (about 2 km to 5.2 km one way); check Parks Canada."
              },
              {
                "title": "Park pass",
                "text": "Needed in the national park."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free with a park pass."
          },
          {
            "label": "Getting there",
            "text": "Five minutes’ drive north of town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Pyramid Lake guide",
          "url": "https://visitjaspernationalpark.ca/pyramid-lake-guide/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jasper SkyTram',
      icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
      text: 'A tramway up Whistlers Mountain to a boardwalk and a steep trail to the summit, with the whole Athabasca valley below. Open in 2026 from mid-April to late October — check exact dates. Weather at the top is much colder than in town.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "A tramway up Whistlers Mountain to a boardwalk and a steep trail to the summit, with the Athabasca valley below.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "April 15 to October 25 (one source says October 26), weather permitting. It is closed for the winter."
              },
              {
                "title": "2027",
                "text": "Pursuit’s page lists a reopening on May 21, 2027, but a closing date in the same source does not match, so confirm."
              },
              {
                "title": "Prices",
                "text": "October 2026: timed adult ticket from about $76–78 before tax, youth (6–15) from $48, children 5 and under free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Cold at the top",
                "text": "It is much colder than in town; bring layers."
              },
              {
                "title": "Book timed tickets",
                "text": "Tickets are timed."
              },
              {
                "title": "Summit trail",
                "text": "The summit trail is steep; check Parks Canada for closures."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $76–78 for adults."
          },
          {
            "label": "Getting there",
            "text": "South of town on the Whistlers road."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Jasper SkyTram",
          "url": "https://www.whistlersmountain.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Maligne Lake',
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'The largest lake in the park, about an hour’s drive south-east, with boat trips to Spirit Island in summer. There is no public transit to the lake. Maligne Canyon, on the same road, stays closed through the 2026 season because of unstable slopes and debris flows after the fire — check Parks Canada for its reopening.',
      tags: [{ label: 'Car needed', level: 'caution' }, { label: 'Canyon closed', level: 'danger' }],
      details: {
        "lead": "The largest lake in the park, about 48 km from the townsite on a paved road, roughly an hour’s drive. There is no public transit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Spirit Island cruise",
                "text": "Resellers list the 2026 season from late May or June 1 to October 11. Adult prices ranged from about $80 to $106 before GST, with advance fares from $86."
              },
              {
                "title": "Canyon closed",
                "text": "Maligne Canyon stays closed through 2026, including in winter."
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
                "text": "There is no transit to the lake."
              },
              {
                "title": "Dates unconfirmed",
                "text": "The season dates come from resellers, not Parks Canada; confirm with the operator."
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
            "text": "About an hour south-east of Jasper by car."
          },
          {
            "label": "Best time",
            "text": "Summer for the cruise."
          }
        ],
        "link": {
          "label": "Parks Canada: what’s open in Jasper",
          "url": "https://www.parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Valley of the Five Lakes',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'One of the best-loved hikes in the park reopened on 23 May 2026 — the first time since the fire — with a realigned ridge trail, a new short loop and better signage. One section at the south end of First Lake is still closed. Walking through recovering forest is part of the experience now.',
      tags: [{ label: 'Reopened 2026', level: 'safe' }, { label: 'Free', level: 'blue' }],
      details: {
        "lead": "One of the best-loved hikes in the park reopened on May 23, 2026, the first time since the fire, with a realigned ridge trail, a new short loop and better signage.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Reopened",
                "text": "Reopened May 23, 2026 after the fire."
              },
              {
                "title": "New layout",
                "text": "A realigned ridge trail and a new short loop."
              },
              {
                "title": "Closed section",
                "text": "One section at the south end of First Lake is still closed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Recovering forest",
                "text": "Walking through recovering forest is part of the experience now."
              },
              {
                "title": "Check status",
                "text": "Check Parks Canada for the current trail status, especially in winter."
              },
              {
                "title": "Park pass",
                "text": "A park pass is needed."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free with a park pass."
          },
          {
            "label": "Getting there",
            "text": "South of the townsite on the Icefields Parkway."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Parks Canada: Jasper trail conditions",
          "url": "https://www.parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Miette Hot Springs',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'The hottest springs in the Canadian Rockies, about an hour north-east of town up a winding mountain road. Seasonal — in 2026 open until mid-October, reopening in May 2027. Separately ticketed from the park pass.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Separate fee', level: 'gold' }],
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
                "text": "Most recent sources list adults $19.75 and youth (3–17) and seniors $17.25, in person only."
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
                "title": "Separate fee",
                "text": "Pool admission is separate from the park pass, even during the 2026 free-entry promotion."
              },
              {
                "title": "Check dates",
                "text": "Confirm the 2027 opening on Parks Canada."
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
            "text": "May to mid-October."
          }
        ],
        "link": {
          "label": "Jasper: Miette Hot Springs",
          "url": "https://www.jasper.travel/blog/relax-and-unwind-miette-hot-springs"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'A Bigger, Wilder Park',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Hiking', dist: 'From town and beyond', text: 'Many trails reopened after the fire, others are still closed or rerouted, and burned forest carries real hazards — falling trees and unstable ground. Check the Parks Canada open/closed list before every hike.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Everywhere', text: 'Elk, bighorn sheep, mountain goats, bears and caribou in the high country. Keep 30 metres from elk and 100 metres from bears, carry bear spray, and never stop on the highway to watch animals.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Night Skies', dist: 'Outside town', text: 'Jasper protects its dark skies, and on clear nights away from town the Milky Way is overhead. Autumn and winter nights are long — and cold.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Pyramid · Patricia · Annette', text: 'Small lakes close to town for canoeing and paddleboarding. Glacier-fed water is cold enough to be dangerous — wear a lifejacket and stay near shore.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Columbia Icefield', dist: '≈100 km south', text: 'The Athabasca Glacier sits beside the Icefields Parkway, inside Jasper National Park. Never walk onto the glacier without a guide — there are hidden crevasses, and people have died there.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter', dist: 'Marmot Basin · Maligne', text: 'A ski hill about half an hour from town, cross-country trails, and ice walks in winter. Quiet, cold and cheaper than Banff.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Mountain-Town Dining', area: 'Patricia · Connaught', areaLevel: 'danger', text: 'Steak, bison, pub food and a few more ambitious kitchens. Some restaurants were lost in the fire and are rebuilding — choice is narrower than before 2024.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Brewpub', area: 'Downtown', areaLevel: 'gold', text: 'A brewpub on Connaught Drive is the usual after-hike stop and one of the busiest rooms in town.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés & Bakeries', area: 'Downtown', areaLevel: 'blue', text: 'Early cafés for trail lunches. Buy food before you leave town — there is nothing to buy at the trailheads.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Groceries', area: 'Downtown', areaLevel: 'safe', text: 'Groceries are expensive and choice is limited. Stock up in Hinton or Edmonton if you are self-catering.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Local Support', area: 'Town-wide', areaLevel: 'purple', text: 'Eating, staying and shopping locally is one of the most direct ways to help Jasper recover. Independent businesses carried the town through the first two years.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Lodge Dining', area: 'Lac Beauvert', areaLevel: 'olive', text: 'The lodge across the river serves the most formal meals in the area. Book ahead in summer.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Quiet and muddy', text: 'Valley trails melt out first; the high country and Maligne Lake can stay frozen into June. Elk calving season — mothers are aggressive. Many seasonal attractions open in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season · fire season', text: 'Everything open and accommodation scarce — and with fewer rooms since 2024, book early. This is also wildfire season: check fire bans and smoke forecasts, and know your evacuation route.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Elk rut, gold aspens', text: 'Quieter, golden, and the best time for wildlife. The elk rut makes bulls in town genuinely dangerous — keep well away. Seasonal attractions close through October.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Cold and quiet', text: 'Deep cold, few visitors, long dark nights. Ski at Marmot Basin, walk frozen canyons where open. The Icefields Parkway to Banff is a serious winter drive with no services — check DriveBC/511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Edmonton',
      text: 'Highway 16 (Yellowhead) runs west from Edmonton through Hinton to Jasper, about 365 km. You need a valid Parks Canada pass once you enter the park, even if you are only stopping in town.',
      time: '≈4h from Edmonton',
    },
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'From Banff — Icefields Parkway',
      text: 'Highway 93 north from Lake Louise, about 290 km from Banff, through some of the finest mountain scenery in the world. There is almost no cell service and only one fuel stop in the middle, at Saskatchewan River Crossing — fill up before you set off.',
      time: '≈4h without stops',
    },
    {
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'Jasper is one of the few Rockies towns with regular passenger rail. VIA Rail’s Canadian stops here on its Toronto–Vancouver route, and the Jasper–Prince Rupert train starts here. Both run only a few times a week — plan around the timetable.',
      time: 'A few departures a week',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'There is no commercial airport in the park. Edmonton (YEG) is the usual arrival point, then car or shuttle for about four hours.',
      time: '≈4h from YEG',
    },
  ],

  stay: [
    {
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'Downtown Jasper',
      area: 'Walkable · Fewer rooms since 2024',
      text: 'Hotels and guest houses close to the station and restaurants. Several properties were lost in the fire; those destroyed are expected to reopen by spring 2027. Book well ahead for summer.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Jasper+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Jasper%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Park Campgrounds',
      area: 'Cheapest · Book early',
      text: 'Parks Canada campgrounds around town. Check which ones are open — some were affected by the fire.',
      links: [
        { label: 'Parks Canada Reservations', url: 'https://reservation.pc.gc.ca/', level: 'safe' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Hinton',
      area: 'Outside the park · 1h away',
      text: 'A town on Highway 16 east of the park gate, with more and cheaper rooms. A practical base for day trips into the park if Jasper is full.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Hinton+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Jasper Transit',
      text: 'A small municipal bus service links downtown, hotels and nearby neighbourhoods. Ridership jumped in 2026 and the town is moving to its own new fleet, with route changes planned — check current routes and fares with the Municipality of Jasper. There is no public transit to Maligne Lake or most trailheads.',
      linkLabel: 'Municipality of Jasper',
      linkUrl: 'https://www.jasper-alberta.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Park Pass',
        text: 'Required for every vehicle and visitor in the park, including in town. The daily pass also covers Banff, Yoho and Kootenay and is valid until 4pm the next day.',
        fareBox: {
          label: '2026 daily admission',
          lines: ['Adult: $12.25', 'Senior: $10.75', 'Youth 17 and under: free', 'Family/group: $24.50', 'Discovery Pass: $83.50 adult'],
        },
        linkLabel: 'Parks Canada — Jasper',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/jasper',
      },
      {
        icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg',
        title: 'What’s Open',
        text: 'Since the fire, trail and road status changes through the season. Parks Canada keeps an open/closed list — read it before planning any day out.',
        fareBox: {
          label: 'Closed through 2026',
          lines: ['Maligne Canyon', 'Cavell Road', 'Valley of the Five Lakes — Trail 9 section'],
        },
        linkLabel: 'Open & Closed — Parks Canada',
        linkUrl: 'https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'Effectively required beyond town. Rent in Edmonton or Calgary — choice in Jasper is very limited.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Tours & Shuttles', text: 'Licensed operators run trips to Maligne Lake, the Icefield and other sights in season.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Cycling', text: 'Town is small and flat; bikes rent easily. Watch for elk on the paths.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the station and the riverside are all walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Fuel tip:',
      text: 'Fill the tank in Jasper or Hinton before any long drive. On the Icefields Parkway there is one fuel stop in 230 km, and it closes in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some properties add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Jasper / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'SkyTram, tours and rentals: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Park admission: priced as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Fire Season', text: 'Summer is wildfire season. Check fire bans, smoke forecasts and Alberta Emergency Alerts, and know how you would leave town. Jasper has one highway east and one south.' },
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Check What’s Open', text: 'Trails, roads and sites have reopened in stages since 2024. Use the Parks Canada open/closed list rather than older guides or blog posts.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Park Pass', text: 'Every visitor needs a valid Parks Canada pass, including when only visiting town. In 2026: $12.25 adult per day, youth free.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Elk in Town', text: 'Elk wander the streets. Keep 30 metres away — further during the autumn rut and spring calving.' },
    { icon: '📵', iconSrc: '/icons/attractions/ph_cell-signal-slash-thin.svg', title: 'No Signal', text: 'Coverage is good in town and drops away fast outside it — almost none on the Icefields Parkway. Download maps and tell someone your plans.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta stays on Alberta Time (UTC-6) all year. The BC border is 25 km west — BC stays on UTC-7, so it is always one hour behind.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Jasper lies in Treaty 6 and Treaty 8 territory. Parks Canada works with over two dozen Indigenous partners here, among them the Simpcw, Aseniwuche Winewak, Stoney Nakoda and Mountain Métis. Parks Canada itself states that after 1907 First Nations and Métis families were forcibly removed from the park.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Seton — Jasper Healthcare Centre', '518 Robson Street', 'Emergencies: call 911'] },
  ],
};

export default JASPER;
