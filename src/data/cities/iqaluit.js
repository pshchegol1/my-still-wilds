// Iqaluit — данные страницы /city/iqaluit (Икалуит, НУНАВУТ)
// Видео Икалуита в бесплатных банках нет — проверила похожий клип
// "aerial view of a small community near the iceberg", на деле Гренландия
// (Pexels), не брала. В шапке фото с Wikimedia Commons — панорама города
// летом с разноцветными домами на склоне, автор Quintin Soloviev,
// 03.07.2024, CC BY 4.0 (GPS 63.744, -68.506 — центр Икалуита). Подпись
// к файлу называет Икалуит "the northernmost city in Canada" — это верно
// только в узком смысле (единственный населённый пункт со статусом
// "city" в Нунавуте, город получил этот статус в 2001); поселения
// севернее (Resolute, Grise Fiord, Pond Inlet и др.) не имеют статуса
// города — уточняем формулировку, не повторяем голое "northernmost".
// Лицензия требует автора.
// Население — перепись 2021: город 7 429 (-4.0% к 2016, 7740) — около
// 20% всего населения Нунавута (36 858 в 2021).
// Транспорт — Iqaluit Transit, частный оператор по городской лицензии
// (Jacinto Marques), один маршрут из 14 остановок от аэропорта до Apex;
// тариф $5 наличными/картой; сведения о дате запуска в 2026 году
// расходятся по источникам — не называем точную дату.
// Больница — Qikiqtani General Hospital, приёмное отделение заявлено
// 24/7 (gov.nu.ca); точный адрес из вторичных источников — указываем
// с оговоркой.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог, связывающих Икалуит с остальной Канадой, нет — добраться можно
// только самолётом или (летом) морем; это общеизвестный факт о Нунавуте.
// Из общих знаний: собор St. Jude's (сгорел в 2005, снесён в 2006,
// перестроен и открыт в 2012 — проверено отдельным поиском), парк Sylvia
// Grinnell в черте города, район Apex в ~5 км, музей Nunatta
// Sunakkutaangit, статус столицы с 1999 года, время в пути.

export const IQALUIT = {
  slug: 'iqaluit',
  name: 'Iqaluit',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Capital on Frobisher Bay',
  accentLevel: 'blue',
  heroIcon: '🧊',
  heroImage: '/Cities/Iqaluit/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 63.7467, lon: -68.5170 },
  subtitle: 'Canada’s Arctic Capital',
  description:
    'Set on the rocky shore of Frobisher Bay, Iqaluit is Canada’s smallest and only Arctic capital — the sole incorporated city in Nunavut, and reachable only by air or, briefly in summer, by sea. Colourful houses climb the hillside above the bay, Inuit art and culture are everywhere, and the midnight sun and the aurora mark the turning of its extreme seasons.',

  actions: [
    { label: 'Explore Iqaluit', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈7.4K (2021)' },
    { label: 'Share of Nunavut', value: '≈20% of the territory' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'Road Access', value: 'None — fly or sail in' },
    { label: 'To Ottawa', value: '≈3 h by plane' },
  ],

  badges: ['Capital of Nunavut', 'No Road Access', 'Frobisher Bay'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '7,429', label: 'People in Iqaluit in the 2021 census — about 20% of all Nunavummiut', level: 'blue' },
    { value: '2001', label: 'Year Iqaluit was chartered as a city — the only one in Nunavut', level: 'purple' },
    { value: '0', label: 'Highways connecting Iqaluit to the rest of Canada — it’s fly-in or sail-in only', level: 'danger' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Government offices, shops and the colourful hillside houses',
      details: {
        "lead": "Government offices, shops and the colourful hillside houses, with the Unikkaarvik Visitor Centre and the museum on Sinaa Street.",
        "see": [
          {
            "title": "Unikkaarvik Visitor Centre",
            "text": "At 220 Sinaa Street; listings say Monday to Friday 9 am–5 pm but conflict on weekends; phone 867-979-4636."
          },
          {
            "title": "Nunatta Sunakkutaangit Museum",
            "text": "At 212 Sinaa Street, in an old Hudson’s Bay Company warehouse with a red roof; free admission."
          },
          {
            "title": "St. Jude’s Cathedral",
            "text": "The igloo-shaped cathedral at 655 Mattaaq; reviewers mention a guided tour of the interior."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The airport is about 2 km from the centre."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Check hours; many are shorter in winter."
          }
        ],
        "link": {
          "label": "Wikivoyage: Iqaluit",
          "url": "https://en.wikivoyage.org/wiki/Iqaluit"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Apex', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Historic', tagLevel: 'blue', meta: 'An older community along the bay, reached by road, taxi or trail',
      details: {
        "lead": "A quieter, older community along the bay, reached by road, taxi or the Apex Trail.",
        "see": [
          {
            "title": "Apex Trail",
            "text": "A reviewer calls it more of a scramble than a trail, with views of the bay and of both Apex and Iqaluit."
          },
          {
            "title": "Museum building",
            "text": "The Nunatta museum’s building was moved on tracks from Apex to Iqaluit."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By taxi, the local road or the coastal trail."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Dress for wind; no trail length or winter conditions were found."
          }
        ],
        "link": {
          "label": "Apex Trail (Tripadvisor)",
          "url": "https://www.tripadvisor.com/Attraction_Review-g183793-d22730861-Reviews-Apex_Trail-Iqaluit_Nunavut.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waterfront', icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Bay', tagLevel: 'purple', meta: 'Boats, sealift barges and sweeping views over Frobisher Bay',
      details: {
        "lead": "Boats, sealift barges and views over Frobisher Bay.",
        "see": [
          {
            "title": "Qaummaarviit Territorial Park",
            "text": "An island historic park reached by boat, with the ruins of 11 Thule sod houses; one reviewer recommends a guide. No 2026 boat information was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the bay in town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Tides are large in Frobisher Bay; check the Canadian Hydrographic Service tables."
          }
        ],
        "link": {
          "label": "Qaummaarviit Territorial Park",
          "url": "https://en.wikipedia.org/wiki/Qaummaarviit_Territorial_Park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Road to Nowhere', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Local Icon', tagLevel: 'olive', meta: 'A local road leading out onto the tundra, named half in jest',
      details: {
        "lead": "A local road system from Apex to Sylvia Grinnell Territorial Park, leading out onto the tundra.",
        "see": [
          {
            "title": "The road",
            "text": "It starts about 1 km west of town; some visitors go mainly to see the road sign, but the tundra scenery is worth seeing."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of town."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Wildlife and weather can change quickly on the tundra."
          }
        ],
        "link": {
          "label": "Wikivoyage: Iqaluit",
          "url": "https://en.wikivoyage.org/wiki/Iqaluit"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sylvia Grinnell Park', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Tundra park and river right at the edge of the city',
      details: {
        "lead": "A 148-hectare tundra park and river about 2 km from town, an easy 30-minute walk.",
        "see": [
          {
            "title": "Trails",
            "text": "Several hiking trails run along the river, and another leads to a waterfall."
          },
          {
            "title": "Fishing",
            "text": "Best in the shoulders of summer, when Arctic char migrate."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the airport."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          },
          {
            "label": "Good to know",
            "text": "No camping rules were found; check with Nunavut Parks."
          }
        ],
        "link": {
          "label": "Sylvia Grinnell Territorial Park",
          "url": "https://en.wikipedia.org/wiki/Sylvia_Grinnell_Territorial_Park"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'St. Jude’s Anglican Cathedral',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'Known as the “igloo church” for its rounded shape. The original igloo-shaped church was badly damaged in a November 2005 fire that the RCMP believed deliberate; the rebuilt cathedral reopened on June 3, 2012.',
      tags: [{ label: 'Landmark', level: 'blue' }, { label: 'Free to view', level: 'safe' }],
      details: {
        "lead": "The “igloo church”; the original was badly damaged in a November 2005 fire the RCMP believed deliberate, and the rebuilt cathedral reopened on June 3, 2012.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Rebuilding",
                "text": "Groundbreaking was in June 2007; the rebuild cost just over $10 million and matches the original look."
              },
              {
                "title": "Debt",
                "text": "The diocese has paid off the construction loan."
              },
              {
                "title": "Visiting",
                "text": "Reviewers describe a guided tour of the interior; no schedule was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Future",
                "text": "In 2024 the diocese warned that insurance costs (about $188,000 a year) put the building’s future at risk."
              },
              {
                "title": "Confirm",
                "text": "Check with the cathedral parish (iqaluitcathedral.ca) before going."
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
            "text": "655 Mattaaq, Iqaluit."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "St. Jude’s Cathedral",
          "url": "https://en.wikipedia.org/wiki/St._Jude%27s_Cathedral_(Iqaluit)"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Nunatta Sunakkutaangit Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A small museum in a former Hudson’s Bay Company building, with artwork, tools, archival documents and photographs.',
      tags: [{ label: 'Indoor', level: 'purple' }, { label: 'Culture', level: 'gold' }],
      details: {
        "lead": "A small museum in an old Hudson’s Bay Company warehouse with a red roof, moved on tracks from Apex.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Weekdays noon–6 pm and weekends 1–5 pm; closed on holidays."
              },
              {
                "title": "Admission",
                "text": "Free."
              },
              {
                "title": "Collection",
                "text": "Artwork, tools, archival documents, photographs and resource books."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Some third-party listings differ on Monday; phone 867-979-5537."
              },
              {
                "title": "Address",
                "text": "212 Sinaa Street."
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
            "text": "212 Sinaa Street, in the beach neighbourhood."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Nunatta Sunakkutaangit Museum",
          "url": "https://www.nunattasunakkutaangit.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sylvia Grinnell Territorial Park',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'About 2 km from town (an easy 30-minute walk): tundra trails along the Sylvia Grinnell River, which has good fishing, and a trail to a waterfall.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
      details: {
        "lead": "A 148-hectare tundra park about 2 km from town, with trails along the Sylvia Grinnell River.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "Several hiking trails along the river and one to a waterfall."
              },
              {
                "title": "Fishing",
                "text": "Good fishing; Arctic char migrate in the shoulders of summer."
              },
              {
                "title": "Walk",
                "text": "An easy 30-minute walk from the centre."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Camping",
                "text": "No camping information was found; ask Nunavut Parks."
              },
              {
                "title": "Fishing rules",
                "text": "Check Nunavut fishing regulations."
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
            "text": "West of the airport, about 2 km from town."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Sylvia Grinnell Territorial Park",
          "url": "https://en.wikipedia.org/wiki/Sylvia_Grinnell_Territorial_Park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Apex',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A quieter, older community by the bay — reach it by taxi, the local road or the coastal Apex Trail, which one reviewer calls more of a scramble than a trail.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Walkable', level: 'danger' }],
      details: {
        "lead": "A quieter, older community along the bay, reached by taxi, the local road or the coastal Apex Trail.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "The trail gives views of the bay and of both Apex and Iqaluit."
              },
              {
                "title": "Trail",
                "text": "A reviewer says it is more of a scramble than a trail."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Footwear",
                "text": "Wear sturdy shoes."
              },
              {
                "title": "Details",
                "text": "No length or winter conditions were found."
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
            "text": "By taxi, local road or coastal trail."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Apex Trail (Tripadvisor)",
          "url": "https://www.tripadvisor.com/Attraction_Review-g183793-d22730861-Reviews-Apex_Trail-Iqaluit_Nunavut.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Inuit Art & Carving',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Local artists and shops in Iqaluit sell soapstone carvings, prints and other Inuit art; no individual gallery or hours were verified, so ask at the Unikkaarvik Visitor Centre.',
      tags: [{ label: 'Shopping', level: 'purple' }, { label: 'Culture', level: 'gold' }],
      details: {
        "lead": "Soapstone carvings, prints and other Inuit art are sold by local artists and shops in Iqaluit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Art",
                "text": "Carvings and prints by local and regional artists."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ask",
                "text": "No individual gallery or hours were verified; ask at the Unikkaarvik Visitor Centre."
              },
              {
                "title": "Buying",
                "text": "Ask about the artist and keep paperwork for export."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies."
          },
          {
            "label": "Getting there",
            "text": "Around Iqaluit."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Wikivoyage: Iqaluit",
          "url": "https://en.wikivoyage.org/wiki/Iqaluit"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Tundra, Bay and Arctic Sky',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tundra Hiking', dist: 'Sylvia Grinnell Park', text: 'Trails across open tundra right by the city.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Sylvia Grinnell River', text: 'Arctic char fishing in season.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Boating', dist: 'Frobisher Bay', text: 'Local operators run wildlife and sightseeing trips in open-water months.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around the city', text: 'Northern lights on clear nights outside the brief summer season.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Midnight Sun', dist: 'Midsummer', text: 'Near round-the-clock daylight in June and July.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and exploring in winter.' },
  ],

  food: [
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Arctic char, caribou and seal, traditional Inuit foods.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Downtown', areaLevel: 'gold', text: 'A small but varied dining scene for a northern capital.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops serving residents and visitors.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Downtown', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Arctic Char', area: 'Local menus', areaLevel: 'safe', text: 'A signature northern fish, fresh or smoked.' },
    { icon: '🍲', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Community Feasts', area: 'Seasonal events', areaLevel: 'olive', text: 'Country-food feasts mark festivals and celebrations.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Snow and ice retreat slowly; days lengthen fast toward summer.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'The mildest, busiest season, with near-endless daylight.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A brief transition before winter sets in hard.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — April', level: 'blue', rating: 3, note: 'Long & dark', text: 'Deep cold and short days, but striking northern lights.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Iqaluit Airport (YFB) is the only practical way in — flights connect to Ottawa, Montréal and other Nunavut communities. There is no road or rail connection to the rest of Canada.',
      time: '≈3 h from Ottawa',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods and some passengers during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'Getting Around',
      text: 'Taxis are a common way to get around; a small private bus service also covers a single downtown-to-Apex route.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'Snowmobiles are widely used locally for winter travel on the land, including to Apex and beyond.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near government offices and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Iqaluit+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Iqaluit%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Apex',
      area: '≈5 km away',
      text: 'A quieter, more traditional setting near the bay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Apex+Iqaluit', level: 'blue' },
      ],
    },
    {
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      title: 'Near Sylvia Grinnell Park',
      area: 'City edge',
      text: 'Limited camping options close to the tundra and river.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Iqaluit+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg',
      title: 'Iqaluit Transit',
      text: 'A privately run shuttle service operates under a city licence, covering a single 14-stop route between the airport and Apex. City council has run and stopped bus service before, so check current status before relying on it.',
      linkLabel: 'City of Iqaluit',
      linkUrl: 'https://iqaluit.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Reported base fare and payment options — confirm current details with the operator before your trip.',
        fareBox: {
          label: 'Getting around',
          lines: ['Shuttle bus: $5 (cash, card, smart card)', 'Monthly pass: $189 (elders 55+: $129)', 'Taxis: widely used', 'Snowmobile: common in winter', 'Walking: downtown is compact'],
        },
        linkLabel: 'City of Iqaluit',
        linkUrl: 'https://iqaluit.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is walkable, though hilly and often icy.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The most reliable way to get around town.' },
          { icon: '🚐', iconSrc: '/icons/attractions/ph_van-thin.svg', title: 'Shuttle', text: 'Single route, airport to Apex.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Flight tip:',
      text: 'Weather can delay or cancel flights with little warning — build slack into your travel plans, especially in winter.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Nunavut has no territorial sales tax — only the federal 5% GST applies. Prices themselves, however, run high because nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Iqaluit / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', label: 'Art and carvings: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Sylvia Grinnell Park: free' },
      { icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', label: 'Viewing St. Jude’s Cathedral: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Iqaluit to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Extreme Winters', text: 'Winters are long, dark and very cold — dress in serious layers and respect weather warnings.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Midnight Sun', text: 'In midsummer the sun barely sets — pack an eye mask if you need darkness to sleep.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer — the same as Toronto and Montréal.' },
    { icon: '🦊', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife Caution', text: 'Polar bears and other Arctic wildlife can appear near town — ask locally about current sightings before hiking.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Iqaluit is in the heart of Inuit Nunangat; Inuktitut is an official language alongside English, and Inuit culture shapes daily life here.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Qikiqtani General Hospital', 'Emergency department · phone (867) 975-8600', 'Call 911 where available, or the hospital directly'] },
  ],
};

export default IQALUIT;
