// Cambridge Bay — данные страницы /city/cambridge-bay (Кеймбридж-Бей, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только Кембридж в Англии и
// безымянные зимние пейзажи). В шапке фото с Wikimedia Commons — посёлок
// с воздуха зимой вдоль замёрзшей бухты, автор Tristan in Ottawa,
// 20.02.2014, CC BY-SA 2.0. Лицензия требует автора.
// Население — перепись 2021: расхождение между муниципалитетом (1 760,
// близко к 2016 — 1766) и population centre (1 403, заметное снижение
// с 1619 в 2016); используем показатель по муниципалитету, как для
// других городов на сайте.
// Кеймбридж-Бей — крупнейший населённый пункт острова Виктория и
// административный центр региона Китикмеот (с 1999 года, после деления
// Северо-Западных территорий).
// Canadian High Arctic Research Station (CHARS) — анонсирована в 2010,
// завершена в 2017, управляется Polar Knowledge Canada.
// История судна Maud: куплено Гудзонбей и переименовано в Baymaud,
// застряло во льдах и затонуло в 1930 году в бухте; поднято проектом
// "Maud Returns Home" летом 2016 года и возвращено в Норвегию в августе
// 2018 — музей в Аскере.
// Ovayok Territorial Park (гора/эскер Ovayok, он же Mount Pelly) —
// примерно в 15 км от посёлка, грунтовая дорога, нередко видны овцебыки.
// Медцентр — Kitikmeot Regional Health Centre, 13D Omingmak St; в
// прошлом были жалобы на недоукомплектованность персоналом — указываем
// с оговоркой, без "24/7".
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний sealift;
// остановка судов Северо-Западного прохода.
// Из общих знаний: время в пути.

export const CAMBRIDGE_BAY = {
  slug: 'cambridge-bay',
  name: 'Cambridge Bay',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Hub of the Kitikmeot',
  accentLevel: 'blue',
  heroIcon: '🔬',
  heroImage: '/Cities/CambridgeBay/hero.jpg',
  heroCredit: 'Photo: Tristan in Ottawa / Wikimedia Commons · CC BY-SA 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 69.1169, lon: -105.0576 },
  subtitle: 'Arctic Science on Victoria Island',
  description:
    'The largest community on Victoria Island and the administrative hub of the Kitikmeot Region, Cambridge Bay mixes deep Inuinnait history with cutting-edge Arctic science. It is home to the Canadian High Arctic Research Station, a major stop for Northwest Passage ships, and the one-time resting place of Roald Amundsen’s ship Maud.',

  actions: [
    { label: 'Explore Cambridge Bay', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.8K (2021)' },
    { label: 'Known For', value: 'Arctic Research (CHARS)' },
    { label: 'Languages', value: 'Inuinnaqtun, English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Yellowknife', value: '≈2 h by plane' },
  ],

  badges: ['Victoria Island', 'Arctic Science', 'Northwest Passage'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈1.8K', label: 'People in Cambridge Bay — the largest community on Victoria Island', level: 'blue' },
    { value: '2017', label: 'Year the Canadian High Arctic Research Station opened here', level: 'purple' },
    { value: '2016–18', label: 'Years Amundsen’s ship Maud was raised from the bay and shipped home to Norway', level: 'gold' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Hamlet offices, shops and the main community buildings',
      details: {
        "lead": "Hamlet offices, shops and the main community buildings.",
        "see": [
          {
            "title": "Community",
            "text": "No individual shops or services were verified for this guide."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air only."
          },
          {
            "label": "Time to allow",
            "text": "A day or two."
          },
          {
            "label": "Good to know",
            "text": "Most visits need advance arrangements through the hamlet office."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Cambridge Bay",
          "url": "https://destinationnunavut.ca/destinations/kitikmeot-region/cambridge-bay"
        },
        "checked": "November 2026"
      },
    },
    { name: 'CHARS Campus', icon: '🔬', iconSrc: '/icons/attractions/ph_microscope-thin.svg', tag: 'Research', tagLevel: 'purple', meta: 'The Canadian High Arctic Research Station, opened 2017',
      details: {
        "lead": "The Canadian High Arctic Research Station, opened in 2017 at 1 Uvajuq Place.",
        "see": [
          {
            "title": "Tours",
            "text": "The public can visit the main research building with a group by appointment; Wikivoyage (June 2024) lists Monday to Friday 9 am–3:30 pm, free; phone +1 867-983-7425."
          },
          {
            "title": "Events",
            "text": "A presentation on environmental DNA was listed for September 13, 2026."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Cambridge Bay."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "No official 2026 tour schedule was found; contact Polar Knowledge Canada."
          }
        ],
        "link": {
          "label": "Wikivoyage: Cambridge Bay",
          "url": "https://en.wikivoyage.org/wiki/Cambridge_Bay"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waterfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'blue', meta: 'Where the Maud once lay, and a stop for Northwest Passage ships',
      details: {
        "lead": "Where the Maud once lay, and a stop for Northwest Passage ships.",
        "see": [
          {
            "title": "Maud",
            "text": "Amundsen’s ship lay in the bay for decades before being raised in 2016 and returned to Norway in 2018."
          },
          {
            "title": "Stone cairn",
            "text": "An Amundsen’s Maud stone cairn is listed in Cambridge Bay."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the bay in town."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Dress for the wind."
          }
        ],
        "link": {
          "label": "MAUD Returns Home (WoodenBoat)",
          "url": "https://www.woodenboat.com/online-exclusives/maud-returns-home"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Ovayok Territorial Park', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'The esker of Ovayok (Mount Pelly), about 15 km from town',
      details: {
        "lead": "The esker of Ovayok (Mount Pelly), a distinctive feature of a flat coastal landscape.",
        "see": [
          {
            "title": "Hike",
            "text": "Visitors can hike to Mount Pelly for views over the gulf; the peak is about 200 m high."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By gravel road, about 15 km from town."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Go with a local guide and carry bear and wildlife awareness."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Cambridge Bay",
          "url": "https://destinationnunavut.ca/destinations/kitikmeot-region/cambridge-bay"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world',
      details: {
        "lead": "The community’s only link to the outside world.",
        "see": [
          {
            "title": "Airport",
            "text": "Cambridge Bay has no road link; flight schedules were not found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air only."
          },
          {
            "label": "Good to know",
            "text": "Weather can delay flights."
          }
        ],
        "link": {
          "label": "Wikivoyage: Cambridge Bay",
          "url": "https://en.wikivoyage.org/wiki/Cambridge_Bay"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Canadian High Arctic Research Station',
      icon: '🔬', iconSrc: '/icons/attractions/ph_microscope-thin.svg',
      text: 'A major Arctic science campus, operated by Polar Knowledge Canada, studying everything from climate to wildlife. Opened in 2017 after a long-planned build.',
      tags: [{ label: 'Landmark', level: 'purple' }, { label: 'Tours vary', level: 'caution' }],
      details: {
        "lead": "A major Arctic science campus run by Polar Knowledge Canada, opened in 2017.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Visits",
                "text": "The public can visit the main research building by appointment; one listing says Monday to Friday 9 am–3:30 pm and free."
              },
              {
                "title": "Address",
                "text": "1 Uvajuq Place; phone +1 867-983-7425."
              },
              {
                "title": "Cruises",
                "text": "Some cruise itineraries include a CHARS stop."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book",
                "text": "Tours are by reservation; most visits need advance arrangements through the hamlet office."
              },
              {
                "title": "Confirm",
                "text": "No official 2026 schedule was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free, per one listing."
          },
          {
            "label": "Getting there",
            "text": "In Cambridge Bay."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Wikivoyage: Cambridge Bay",
          "url": "https://en.wikivoyage.org/wiki/Cambridge_Bay"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Ovayok Territorial Park',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A striking esker (Ovayok, also called Mount Pelly) about 15 km from town, reached by gravel road. Ask locally about wildlife along the road.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Wildlife', level: 'blue' }],
      details: {
        "lead": "The esker of Ovayok, also called Mount Pelly, a 200 m peak with views over the gulf.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hike",
                "text": "Visitors can hike to the top of Mount Pelly."
              },
              {
                "title": "Setting",
                "text": "A distinctive feature of a flat coastal area, about 15 km from town by gravel road."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Guide",
                "text": "Go with a local guide for wildlife safety."
              },
              {
                "title": "Season",
                "text": "A summer outing; no winter access information was found."
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
            "text": "Gravel road from town."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Cambridge Bay",
          "url": "https://destinationnunavut.ca/destinations/kitikmeot-region/cambridge-bay"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Maud Memorial Site',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'Roald Amundsen’s ship Maud sank in the bay in 1930 (some sources say it was abandoned in 1926) and lay there for decades; it was raised in 2016 and reached Bergen, Norway, on August 6, 2018.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "Roald Amundsen’s ship Maud sank in the bay in 1930 and was raised in 2016; it reached Bergen, Norway, on August 6, 2018.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "The Hudson’s Bay Company bought Maud after Amundsen’s expedition and used it as a floating warehouse and radio station, renamed Baymaud."
              },
              {
                "title": "Dates",
                "text": "Sources differ: abandoned in 1926 or sunk in 1930."
              },
              {
                "title": "Cairn",
                "text": "A stone cairn commemorates the ship."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to see."
              },
              {
                "title": "Return",
                "text": "The return to Norway was expected in 2017 but took until 2018."
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
            "text": "On the bay in Cambridge Bay."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Maud (ship)",
          "url": "https://en.wikipedia.org/wiki/Maud_(ship)"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Arctic Coast Visitor Centre',
      icon: 'ℹ️', iconSrc: '/icons/attractions/ph_info-thin.svg',
      text: 'Local history, Inuinnait culture and trip-planning information for the Kitikmeot region. No 2026 hours were found, so check before going.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'gold' }],
      details: {
        "lead": "Local history, Inuinnait culture and trip-planning information for the Kitikmeot region.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Purpose",
                "text": "Trip planning and local culture."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No 2026 hours were found; check with the hamlet."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check before going."
          },
          {
            "label": "Getting there",
            "text": "In Cambridge Bay."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Cambridge Bay",
          "url": "https://destinationnunavut.ca/destinations/kitikmeot-region/cambridge-bay"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Northwest Passage Cruise Stop',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'Cambridge Bay is a key port of call for research and expedition ships transiting the Northwest Passage.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Shipping hub', level: 'purple' }],
      details: {
        "lead": "Cambridge Bay is a key port of call for research and expedition ships on the Northwest Passage.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Community visit",
                "text": "Some cruises offer a community visit including CHARS; content is subject to change."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Ships call in the open-water season, not in winter."
              },
              {
                "title": "Independent travel",
                "text": "Plan visits through the hamlet office."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Part of cruise prices."
          },
          {
            "label": "Getting there",
            "text": "By ship in summer or by air."
          },
          {
            "label": "Best time",
            "text": "Late summer."
          }
        ],
        "link": {
          "label": "Travel HX: Cambridge Bay community visit",
          "url": "https://www.travelhx.com/en-us/enhance-your-cruise/catalog/cambridge-bay-community-visit/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Tundra, Bay and Victoria Island Wilderness',
  outdoor: [
    { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Ovayok Territorial Park', dist: '≈15 km', text: 'Hiking around the esker, with a good chance of seeing muskoxen.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Around town', text: 'Arctic char fishing in nearby waters.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Muskox Viewing', dist: 'Ovayok area', text: 'A relatively reliable spot to see muskoxen in the wild.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tundra Walking', dist: 'Around town', text: 'Open land right at the edge of the community.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and hunting in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Seal, caribou and Arctic char, traditional Inuinnait foods.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Town centre', areaLevel: 'gold', text: 'A small dining scene serving residents and visiting researchers.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Arctic Char', area: 'Local catch', areaLevel: 'safe', text: 'A signature northern fish, fresh or smoked.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee shops serving a small but international community.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', title: 'Waterfowl', area: 'Seasonal', areaLevel: 'olive', text: 'Traditional hunting of geese and ducks in season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice retreats slowly from the bay as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Open water', text: 'The mildest season, with Northwest Passage ships and open-bay activity.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before freeze-up and winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — April', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and short days, with good odds for the northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Cambridge Bay Airport is the Kitikmeot region’s main hub, with flights connecting to Yellowknife and other communities. There is no road or rail link to the rest of Canada.',
      time: '≈2 h to Yellowknife',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods, and the bay is a regular stop for Northwest Passage expedition and research ships during the short ice-free season.',
      time: 'Seasonal, roughly July to October',
    },
    {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'Getting Around',
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel on the land around the community.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'Hotels near the airport and town centre, often booked by visiting researchers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cambridge+Bay+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Cambridge%20Bay%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'Near Ovayok Park',
      area: '≈15 km away',
      text: 'Limited camping options near the territorial park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Cambridge+Bay+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No Public Transit',
      text: 'Cambridge Bay has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle local travel.',
      linkLabel: 'Hamlet of Cambridge Bay',
      linkUrl: 'https://www.cambridgebay.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
          { icon: '🏍️', iconSrc: '/icons/attractions/ph_motorcycle-thin.svg', title: 'ATV', text: 'Widely used in summer, including the gravel road to Ovayok.' },
        ],
      },
    ],
    proTip: {
      label: 'Research tip:',
      text: 'If CHARS offers public tours during your visit, book ahead — the station is a working research facility, not a standard tourist attraction.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Cambridge Bay has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Cambridge Bay / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tours and activities: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Ovayok Territorial Park: free' },
      { icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', label: 'Waterfront & Maud site: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Cambridge Bay to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'High Arctic Climate', text: 'Winters are long, dark and very cold even by Nunavut standards — dress in serious layers.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Long Summer Days', text: 'Midsummer brings very long daylight — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — different from most of Nunavut, which uses Eastern or Central time.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife Caution', text: 'Polar bears and muskoxen can appear near town — ask locally about current sightings before hiking.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Cambridge Bay is in the heart of Inuit Nunangat; Inuinnaqtun is spoken alongside English, reflecting the distinct Inuinnait culture of the Kitikmeot.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Kitikmeot Regional Health Centre', '13D Omingmak St · phone (867) 983-4500', 'Contact the health centre directly for emergencies'] },
  ],
};

export default CAMBRIDGE_BAY;
