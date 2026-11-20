// Niagara Falls — данные страницы /city/niagara-falls
// В шапке ролик, присланный владельцем сайта: дрон над водопадом
// Подкова (Horseshoe Falls) и порогами над ним — проверено по кадрам.
// Исходник был в HDR (HLG, bt2020): переведён в SDR (bt709) тонмаппингом,
// иначе на обычных экранах выглядел бы блёклым. 19,5 с, пережат с 31 до
// ~6,8 МБ; постер — первый кадр.
// Это страница канадского города Niagara Falls, Онтарио. Одноимённый
// город в штате Нью-Йорк — на другом берегу, и путать их нельзя:
// погранпереход, другая валюта, другие правила.
// Население — перепись 2021 года (свежей оценки по самому городу не
// нашлось). MAT — 4% с 1 апреля 2026, 5% с 1 апреля 2027.

export const NIAGARA_FALLS = {
  slug: 'niagara-falls',
  name: 'Niagara Falls',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Niagara Region',
  accentLevel: 'safe',
  heroIcon: '🌊',
  heroImage: '/Cities/NiagaraFalls/hero-poster.jpg',
  heroVideo: '/Cities/NiagaraFalls/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.0896, lon: -79.0849 },
  subtitle: 'Where the River Falls Off a Cliff',
  description:
    'A city built around one of the most famous waterfalls on earth. The Horseshoe Falls — nearly all of it in Canada — pours the overflow of four Great Lakes over a cliff on the edge of town. Beside it sits a free public park more than a century old; a block away, the neon of Clifton Hill. Both are Niagara.',

  actions: [
    { label: 'Explore Niagara Falls', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈94K (2021)' },
    { label: 'Horseshoe Falls', value: '≈57 m high' },
    { label: 'Park Entry', value: 'Free' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈130 km · 1.5h' },
    { label: 'To the US', value: 'Rainbow Bridge' },
  ],

  badges: ['Horseshoe Falls', 'Border City', 'Treaty 381 Lands'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '169,000', label: 'Cubic metres of water over the brink every minute at peak daytime flow, per Niagara Parks', level: 'blue' },
    { value: '~½', label: 'Of the river is diverted for hydro power — more at night and in winter, under a 1950 treaty', level: 'gold' },
    { value: '1885', label: 'The Niagara Parks Commission is created to keep the falls’ edge a free public park', level: 'safe' },
    { value: '2022', label: 'The old Power Station opens to visitors, with a 670 m tunnel down to the river', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Queen Victoria Park', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'The falls', tagLevel: 'blue', meta: 'Free riverside park · Table Rock at the brink · Gardens · Nightly illumination',
      details: {
        "lead": "The free riverside park along the gorge, with Table Rock at the brink of the Horseshoe Falls, gardens and the nightly illumination.",
        "see": [
          {
            "title": "Table Rock",
            "text": "The viewpoint a few metres from the brink of the Horseshoe Falls. Free and open year-round."
          },
          {
            "title": "Winter Festival of Lights",
            "text": "The 44th festival runs November 14, 2026 to January 10, 2027. The displays are nightly, 5 pm to midnight, and free."
          },
          {
            "title": "Fireworks",
            "text": "November 14 to December 12: Fridays and Saturdays at 8 pm. December 18 to January 2: nightly at 8 pm."
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The park is free; parking and attractions are not."
          },
          {
            "label": "Getting there",
            "text": "On the Niagara Parkway beside the falls."
          },
          {
            "label": "Good to know",
            "text": "The falls are lit in colour every night after dark; winter schedules shift, so check Niagara Parks."
          }
        ],
        "link": {
          "label": "Niagara Parks: Winter Festival of Lights",
          "url": "https://www.niagaraparks.com/events/winter-festival-of-lights/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Clifton Hill', icon: '🎡', iconSrc: '/icons/attractions/ph_confetti-thin.svg', tag: 'The strip', tagLevel: 'danger', meta: 'Wax museums, haunted houses, the SkyWheel · Loud, bright, deliberate kitsch',
      details: {
        "lead": "Wax museums, haunted houses and the SkyWheel on a loud, bright, deliberately kitschy strip.",
        "see": [
          {
            "title": "Niagara SkyWheel",
            "text": "About $15 for adults and $7 for children 12 and under plus HST in 2026. A ride takes 8 to 12 minutes, and hours vary by date."
          },
          {
            "title": "Fun Pass",
            "text": "A bundle of attractions was listed at about $35 to $40 for adults plus tax."
          },
          {
            "title": "Walking the strip",
            "text": "Walking Clifton Hill is free."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Just up the hill from the falls."
          },
          {
            "label": "Time to allow",
            "text": "Three to four hours with the SkyWheel, an attraction and a meal."
          },
          {
            "label": "Good to know",
            "text": "SkyWheel hours were listed from 10 am in spring and fall and later in summer; check the day."
          }
        ],
        "link": {
          "label": "Clifton Hill: Niagara SkyWheel",
          "url": "https://www.cliftonhill.com/attractions/niagara-skywheel"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Fallsview', icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', tag: 'Above the falls', tagLevel: 'gold', meta: 'High-rise hotels and casino · Rooms with falls views · Expensive',
      details: {
        "lead": "High-rise hotels and the casino, with rooms that look over the falls. It is the expensive part of town.",
        "see": [
          {
            "title": "Falls views",
            "text": "High-rise hotels with rooms facing the Horseshoe Falls."
          },
          {
            "title": "The casino",
            "text": "The resort’s casino sits in the high-rise district."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hill above the falls; walkable to Table Rock."
          },
          {
            "label": "Stay",
            "text": "Rooms with falls views cost more."
          },
          {
            "label": "Good to know",
            "text": "Check what the displayed room price includes."
          }
        ],
        "link": {
          "label": "Niagara Falls Tourism",
          "url": "https://www.niagarafallstourism.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lundy’s Lane', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Motels', tagLevel: 'olive', meta: 'Cheaper motels and chain restaurants · 1814 battlefield · Car needed',
      details: {
        "lead": "Cheaper motels and chain restaurants, and the site of the 1814 battlefield. A car is needed.",
        "see": [
          {
            "title": "The 1814 battlefield",
            "text": "The Battle of Lundy’s Lane was fought here in 1814."
          },
          {
            "title": "Motels and chains",
            "text": "A concentration of cheaper accommodation and chain restaurants."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the falls; a car is easiest."
          },
          {
            "label": "Stay",
            "text": "Cheaper than Fallsview."
          }
        ],
        "link": {
          "label": "Niagara Falls Tourism",
          "url": "https://www.niagarafallstourism.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Queen Street Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Old downtown', tagLevel: 'purple', meta: 'The original town centre · Quieter · Murals and local cafés',
      details: {
        "lead": "The original town centre, quieter than the falls, with murals and local cafés.",
        "see": [
          {
            "title": "Murals",
            "text": "Murals decorate the downtown streets."
          },
          {
            "title": "Local cafés",
            "text": "Independent cafés in the old town centre."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Inland from the falls."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Niagara Falls Tourism",
          "url": "https://www.niagarafallstourism.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Niagara Parkway North', icon: '🍇', iconSrc: '/icons/attractions/ph_cherries-thin.svg', tag: 'Downriver', tagLevel: 'safe', meta: 'Whirlpool and Niagara Glen · Toward Niagara-on-the-Lake and wineries',
      details: {
        "lead": "The parkway north of the falls toward Niagara-on-the-Lake and the wineries, with the Whirlpool and Niagara Glen on the way.",
        "see": [
          {
            "title": "Niagara Glen",
            "text": "Trails drop to the river. The Nature Centre was listed as closed for the season on November 16, 2026, and the glen is listed 6:30 am to 6:30 pm."
          },
          {
            "title": "Trail closures",
            "text": "Sources conflict on closures; an October 2026 article says Whirlpool Trail and part of Terrace Trail are closed. Check Niagara Parks."
          },
          {
            "title": "Whirlpool Aero Car",
            "text": "The cable car over the whirlpool. Adult prices ranged from $16 to $19; the season may already be over."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of the falls on the Niagara Parkway; a car or bike."
          },
          {
            "label": "Time to allow",
            "text": "A half day."
          },
          {
            "label": "Good to know",
            "text": "Niagara Parks posts current trail notices."
          }
        ],
        "link": {
          "label": "Niagara Parks: Niagara Glen",
          "url": "https://www.niagaraparks.com/nature-and-gardens/niagara-glen/niagara-glen-nature-centre/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Horseshoe Falls & Table Rock',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'The viewpoint at Table Rock puts you a few metres from the brink, where the green water curls over a drop of about 57 metres. It is free, open year-round, and the single most important thing to see. Expect to get wet from the mist. The falls are lit in colour every night after dark.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "The viewpoint at Table Rock puts you a few metres from the brink of the Horseshoe Falls. It is free, open year-round and the single most important thing to see.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter Festival of Lights",
                "text": "November 14, 2026 to January 10, 2027, with displays nightly from 5 pm to midnight, free."
              },
              {
                "title": "Fireworks",
                "text": "Fridays and Saturdays at 8 pm from November 14 to December 12; nightly at 8 pm from December 18 to January 2."
              },
              {
                "title": "Illumination",
                "text": "The falls are lit in colour every night after dark."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "You will get wet",
                "text": "Expect mist at Table Rock."
              },
              {
                "title": "Check schedules",
                "text": "Winter lighting and firework times change; see Niagara Parks."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view."
          },
          {
            "label": "Getting there",
            "text": "In Queen Victoria Park, on the Niagara Parkway."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Niagara Parks: Winter Festival of Lights",
          "url": "https://www.niagaraparks.com/events/winter-festival-of-lights/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Boat Trip',
      icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Boats leave from the bottom of the gorge and push into the mist at the foot of the Horseshoe. Loud, soaking and genuinely overwhelming — the closest you can get to the falls. Seasonal, usually spring to late fall; ponchos provided.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "Boats leave from the bottom of the gorge and push into the mist at the foot of the Horseshoe. It runs seasonally.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "Roughly from May 1 to late November, weather permitting. Closing dates differ by source and depend on river conditions."
              },
              {
                "title": "Prices",
                "text": "Adult $47.95 and child (3–12) $32.95 plus 13% HST, about $54 for adults with tax."
              },
              {
                "title": "Ponchos",
                "text": "Ponchos are provided."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Roughly 9 am to 5 pm in spring and fall and longer in summer; one listing is old, so confirm."
              },
              {
                "title": "Closed in winter",
                "text": "The boats do not run in winter because of ice."
              },
              {
                "title": "Check first",
                "text": "Confirm the season with the operator."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $48 plus HST for adults."
          },
          {
            "label": "Getting there",
            "text": "From the base of the gorge."
          },
          {
            "label": "Best time",
            "text": "Late spring to early fall."
          }
        ],
        "link": {
          "label": "Niagara boat season guide",
          "url": "https://niagarafallsboattours.org/guides/boat-season-dates/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Niagara Parks Power Station',
      icon: '⚡', iconSrc: '/icons/attractions/ph_lightning-thin.svg',
      text: 'A 1905 hydro power station beside the upper rapids, restored and opened to visitors. Since July 2022 a tunnel about 670 m long takes you some 55 m underground to a viewing platform at river level below the falls. Good for understanding why so much of the river does not go over the edge.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A 1905 hydro power station beside the upper rapids, restored and opened to visitors. A tunnel takes you underground to a viewing platform at river level.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Adults (13+) $33 and children (3–12) $21.50; a premium guided tour is $53. The tunnel is included."
              },
              {
                "title": "Hours",
                "text": "Open daily, 10 am–5 pm; one guide lists 10 am–6 pm in late September."
              },
              {
                "title": "Time",
                "text": "About two hours for the hall and tunnel."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Parking",
                "text": "One reviewer paid $40 for parking, so budget for it."
              },
              {
                "title": "Icewine gala",
                "text": "The Cool As Ice Gala is at the Power Station on January 30, 2027."
              },
              {
                "title": "Check first",
                "text": "Hours shift with the season; confirm on niagaraparks.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $33 for adults."
          },
          {
            "label": "Getting there",
            "text": "Beside the upper rapids on the Niagara Parkway."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "Niagara Parks Power Station",
          "url": "https://www.niagaraparks.com/attractions/niagara-parks-power-station/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Where the Water Goes',
      icon: '⚖️', iconSrc: '/icons/attractions/ph_scales-thin.svg',
      text: 'Under the 1950 Niagara River Water Diversion Treaty between Canada and the US, roughly half the river is taken around the falls to power stations — more at night and in the off-season, when fewer people are watching. The falls you see are partly a managed spectacle. It is not a secret, just rarely mentioned.',
      tags: [{ label: 'Honest context', level: 'danger' }],
      details: {
        "lead": "Under the 1950 Niagara River Water Diversion Treaty between Canada and the US, roughly half the river is taken around the falls to power stations. The falls you see are partly a managed spectacle.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "More diverted at night",
                "text": "More water is diverted at night and in the off-season, when fewer people are watching."
              },
              {
                "title": "Not a secret",
                "text": "The arrangement is public, and the Power Station tells the story."
              },
              {
                "title": "See it",
                "text": "The Niagara Parks Power Station tunnel explains why so much of the river does not go over the edge."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Visit the Power Station",
                "text": "Tickets are $33 for adults; the tunnel is included."
              },
              {
                "title": "Winter flow",
                "text": "Winter views show the falls with less water at times."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to read about; the Power Station charges admission."
          },
          {
            "label": "Getting there",
            "text": "At the Niagara Parks Power Station."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Niagara Parks Power Station",
          "url": "https://www.niagaraparks.com/attractions/niagara-parks-power-station/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Whirlpool & Niagara Glen',
      icon: '🌀', iconSrc: '/icons/attractions/ph_spiral-thin.svg',
      text: 'Downriver the gorge turns sharply and the water spins in a giant whirlpool. An old cable car crosses above it, and the Niagara Glen trails drop to the river through boulders and forest — the wildest part of the area and much quieter than the falls.',
      tags: [{ label: 'Trails free', level: 'safe' }, { label: 'Steep', level: 'caution' }],
      details: {
        "lead": "Downriver the gorge turns sharply and the water spins in a giant whirlpool. An old cable car crosses above it, and the Niagara Glen trails drop to the river.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Aero Car",
                "text": "Adult prices ranged from $16 to $19. Seasons differ by source, from mid-April to early November or to mid-December, so it may already be closed."
              },
              {
                "title": "Niagara Glen",
                "text": "The glen is listed 6:30 am to 6:30 pm. The Nature Centre was closed for the season as of November 16, 2026."
              },
              {
                "title": "Trail notices",
                "text": "The Terrace Trail section reopened on June 30, 2026, but an October article says Whirlpool Trail and part of Terrace Trail are closed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check closures",
                "text": "Niagara Parks posts current trail notices."
              },
              {
                "title": "Quieter",
                "text": "It is much quieter than the falls."
              },
              {
                "title": "Hike down carefully",
                "text": "The trails drop through boulders and forest."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The glen is free; the Aero Car charges."
          },
          {
            "label": "Getting there",
            "text": "On the Niagara Parkway, downriver of the falls."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Niagara Parks: Niagara Glen",
          "url": "https://www.niagaraparks.com/nature-and-gardens/niagara-glen/niagara-glen-nature-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Niagara-on-the-Lake & Wineries',
      icon: '🍇', iconSrc: '/icons/attractions/ph_cherries-thin.svg',
      text: 'About 20 km north along the Niagara Parkway, a preserved 19th-century town and the heart of Ontario wine country, known especially for icewine. Easy by car or bike; WEGO buses run part of the way in season.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Wine', level: 'purple' }],
      details: {
        "lead": "About 20 km north along the Niagara Parkway, a preserved 19th-century town and the heart of Ontario wine country, known especially for icewine.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Icewine Festival 2027",
                "text": "Sources give January 8 to 30 or January 15 to 31, 2027; official dates were not confirmed. The Icewine Village is on Queen Street."
              },
              {
                "title": "Cool As Ice Gala",
                "text": "At the Niagara Parks Power Station on January 30, 2027."
              },
              {
                "title": "Tastings",
                "text": "The Icewine Discovery Pass includes three or six pairings at participating wineries."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check dates",
                "text": "Confirm the festival dates on the Niagara Grape and Wine Festival site."
              },
              {
                "title": "By car or bike",
                "text": "Easy by car or bike along the parkway."
              },
              {
                "title": "WEGO buses",
                "text": "Run part of the way in season; no 2026 fare information was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk; tastings and passes cost extra."
          },
          {
            "label": "Getting there",
            "text": "About 20 km north of the falls."
          },
          {
            "label": "Best time",
            "text": "Summer for the town; January for icewine."
          }
        ],
        "link": {
          "label": "Niagara Icewine Festival (guide)",
          "url": "https://ontariovisited.ca/niagara-icewine-festival-2027/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'The Gorge, the Parkway and the River',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Niagara Parkway Trail', dist: 'Fort Erie to Niagara-on-the-Lake', text: 'A long recreational trail beside the river — the best way to see the falls, the gorge and the wineries in one ride. Flat and well signed.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Niagara Glen', dist: 'Downriver', text: 'Rough trails down into the gorge among boulders and old forest. Steep and slippery when wet; allow time for the climb back up.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'White Water Walk', dist: 'Lower gorge', text: 'A boardwalk at the edge of the violent lower rapids of the gorge. Seasonal and ticketed.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Gorge and river', text: 'The Niagara River is an Important Bird Area, especially for gulls in late fall and winter, when thousands gather below the falls.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Falls', dist: 'Queen Victoria Park', text: 'Ice builds up around the falls in cold winters, but the falls themselves do not stop. A quiet, beautiful time to visit — dress for wind and spray that freezes.' },
    { icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', name: 'Stay Behind the Rails', dist: 'Everywhere', text: 'The current above the falls is lethal. Never climb railings or enter the river; people have died here.' },
  ],

  food: [
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Wine Country', area: 'Niagara-on-the-Lake · Bench', areaLevel: 'purple', text: 'Ontario’s main wine region, known for icewine and cool-climate whites. Tasting rooms line the roads north and west of the city.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Falls-View Dining', area: 'Fallsview · Skylon Tower', areaLevel: 'gold', text: 'Restaurants with a view of the falls charge for it. Book a window table, and expect tourist prices.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Clifton Hill Food', area: 'Clifton Hill', areaLevel: 'danger', text: 'Chains and themed restaurants aimed at tourists. Convenient, rarely memorable.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Local Cafés', area: 'Queen Street', areaLevel: 'blue', text: 'The old downtown has the local coffee shops and family restaurants, away from the tourist zone.' },
    { icon: '🍑', iconSrc: '/icons/attractions/ph_orange-slice-thin.svg', title: 'Fruit Stands', area: 'Niagara Parkway · Bench', areaLevel: 'safe', text: 'Niagara is Ontario’s fruit belt — peaches, cherries and grapes at roadside stands in summer.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Region-wide', areaLevel: 'olive', text: 'Breweries are scattered across the Niagara region, alongside the wineries.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 4, note: 'Rising flow, blossoms', text: 'Spring melt pushes the flow up, the boats return and fruit trees blossom along the Parkway. Cool and changeable.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Peak crowds', text: 'Everything open, longest hours, biggest crowds and highest hotel prices. Hot and humid; the mist helps.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Harvest season', text: 'Grape harvest, autumn colours in the gorge, smaller crowds. The best balance of the year.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Ice and lights', text: 'Ice formations, a winter light festival and low prices. Boats and some attractions close; cold wind off the gorge.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Toronto',
      text: 'The QEW around the end of Lake Ontario, about 130 km. Heavy traffic on summer weekends. Parking near the falls is paid and expensive in season.',
      time: '≈1.5h from Toronto',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By GO Train',
      text: 'GO Transit runs trains from Toronto’s Union Station to Niagara Falls station. From 8 September 2026 three of the five weekday trips were cut, so check the current timetable — weekend service differs. The station is about 2 km from the falls; use WEGO or walk.',
      time: '≈2h from Union Station',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The Rainbow Bridge crosses right beside the falls; the Queenston–Lewiston bridge is downriver. You need a passport or equivalent document. Walking across the Rainbow Bridge is possible and memorable.',
      time: 'Minutes from the falls',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Toronto Pearson (YYZ) is the main international airport; Buffalo Niagara (BUF) in the US is closer but means a border crossing.',
      time: '≈1.5h from YYZ',
    },
  ],

  stay: [
    {
      icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg',
      title: 'Fallsview',
      area: 'Falls views · Most expensive',
      text: 'High-rise hotels above the falls. Pay for a falls-view room only if you will actually be in it — confirm the view type before booking.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fallsview+Niagara+Falls+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Niagara%20Falls%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Lundy’s Lane',
      area: 'Cheaper · Car needed',
      text: 'Motels and chain hotels a short drive from the falls. Good value outside peak weekends.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Lundys+Lane+Niagara+Falls', level: 'blue' },
      ],
    },
    {
      icon: '🍇', iconSrc: '/icons/attractions/ph_cherries-thin.svg',
      title: 'Niagara-on-the-Lake',
      area: 'Quieter · Wine country',
      text: 'Inns and B&Bs in the historic town, 20 minutes from the falls. More expensive, much calmer.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Niagara-on-the-Lake', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'WEGO & Niagara Region Transit',
      text: 'WEGO is the visitor bus network run with Niagara Parks, linking the falls, Clifton Hill, Fallsview, Lundy’s Lane and sights along the Parkway. Regular city service is Niagara Region Transit. For wineries and Niagara-on-the-Lake, a car, bike or tour is easiest.',
      linkLabel: 'WEGO — Niagara Parks',
      linkUrl: 'https://www.niagaraparks.com/getting-around/wego-niagara-falls-bus/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'WEGO Passes',
        text: 'Prices below are 2026 fares, tax included. Children 2 and under ride free. Some Niagara Parks attraction passes include WEGO.',
        fareBox: {
          label: 'WEGO',
          lines: ['24-hour adult: $16', '24-hour child (3–12): $12', '48-hour adult: $20', '48-hour child: $16'],
        },
        linkLabel: 'WEGO',
        linkUrl: 'https://www.niagaraparks.com/getting-around/wego-niagara-falls-bus/',
      },
      {
        icon: '🅿️', iconSrc: '/icons/attractions/ph_garage-thin.svg',
        title: 'Parking',
        text: 'Lots near the falls are paid and fill up on summer weekends. Niagara Parks sells a parking pass covering several of its lots; otherwise park once and use WEGO.',
        fareBox: {
          label: 'Tips',
          lines: ['Park once, then ride WEGO', 'Avoid Clifton Hill lots on weekends', 'Check event days'],
        },
        linkLabel: 'Parking pass',
        linkUrl: 'https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/parking-pass/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Parkway trail is ideal for cycling; rentals available in season.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The falls, Clifton Hill and Fallsview are walkable but hilly.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🍇', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wine Tours', text: 'Guided tours handle the driving between wineries.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'See the falls twice: early morning, before the tour buses, and after dark when they are lit in colour. Midday in July is the worst time to be at Table Rock.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels also charge Niagara Falls’ Municipal Accommodation Tax: 4% of the room rate from 1 April 2026, rising to 5% on 1 April 2027. Some properties add their own destination or resort fees on top — check the full breakdown before booking. Across the Rainbow Bridge, US prices are in US dollars and taxed differently.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Niagara Falls / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 13% HST + 4% MAT (5% from April 2027)' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Wine and alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Attraction tickets: often tax-included — check' },
    ],
    exempt: [
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Queen Victoria Park and the falls: free' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides and drivers: 10–15%.',
  },

  practical: [
    { icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg', title: 'Two Cities, Two Countries', text: 'Niagara Falls, New York is across the river. Crossing needs a passport or equivalent, and returning to Canada is subject to customs. Do not book the wrong city by mistake.' },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'The Mist', text: 'Spray from the falls soaks anyone near Table Rock or on the boats. Protect cameras and phones, and wear shoes with grip.' },
    { icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', title: 'River Safety', text: 'The upper river is fast and deadly. Stay behind all railings, keep children close, and never enter the water anywhere near the falls.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'Tourist Prices', text: 'Parking, food and attractions near the falls are priced for visitors. Combination passes from Niagara Parks can save money if you plan several attractions.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as New York across the river.' },
    { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'Train Cuts', text: 'Weekday GO train service to Niagara Falls was reduced from 8 September 2026. Check GO Transit before relying on the train.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Niagara Falls is on land covered by the Niagara Purchase (Treaty 381, 1764/1781) with the Mississaugas of the Credit First Nation, and is also the traditional territory of the Haudenosaunee, including the Six Nations of the Grand River. The city’s own plan acknowledges both.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Greater Niagara General Hospital', '5546 Portage Road', 'Emergencies: call 911'] },
  ],
};

export default NIAGARA_FALLS;
