// Haines Junction — данные страницы /city/haines-junction (Хейнс-Джанкшен, ЮКОН)
// Видео в бесплатных банках нет (Pexels по запросу — только безымянные
// железнодорожные/дорожные ролики). В шапке фото с Wikimedia Commons —
// озеро Kathleen Lake в нацпарке Клуэйн рядом с посёлком, автор
// BeautifulEarth, 21.06.2017, CC BY-SA 4.0 — лицензия требует автора.
// Подпись к файлу на Commons явно называет место: "at Kluane National
// Park and Reserve near Haines Junction". Фото очень широкое (панорама),
// при показе в шапке центральная часть (горы) останется в кадре.
// Население — перепись 2021: деревня (village) 688 (+12.2% к 2016, 613).
// Отдельно Yukon Bureau of Statistics даёт оценку 2022 года — 1018
// человек, но это другая методика подсчёта (видимо, с окрестностями),
// не сравниваем напрямую с переписью.
// Медцентр — Haines Junction Health Centre, 131 Bates St (yukon.ca,
// обновлено 07.05.2026) — это центр здоровья, не полноценная больница
// с приёмным покоем; для серьёзных случаев эвакуация в Whitehorse General.
// Visitor Centre парка Клуэйн — в здании Da Kų Cultural Centre; сезон
// примерно с середины мая до середины сентября (точные часы на 2026 не
// нашли — пишем "уточняйте в Parks Canada").
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.
// Из общих знаний: гора Логан (высшая точка Канады) в парке Клуэйн,
// Haines Road в Аляску через Британскую Колумбию, озеро Dezadeash,
// катание на хели-лыжах/ледниковые туры, время в пути.

export const HAINES_JUNCTION = {
  slug: 'haines-junction',
  name: 'Haines Junction',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Gateway to Kluane National Park',
  accentLevel: 'danger',
  heroIcon: '🏔️',
  heroImage: '/Cities/HainesJunction/hero.jpg',
  heroCredit: 'Photo: BeautifulEarth / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 60.7522, lon: -137.5108 },
  subtitle: 'Where the Highway Meets the Icefields',
  description:
    'A small highway village at the edge of Kluane National Park and Reserve, Haines Junction sits beneath some of Canada’s highest, most remote mountains — including Mount Logan, the country’s tallest peak. It is the main gateway for hiking, glacier flights and the turquoise waters of Kathleen Lake.',

  actions: [
    { label: 'Explore Haines Junction', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈690 (2021)' },
    { label: 'Known For', value: 'Kluane National Park' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈1 h 30 min by car' },
    { label: 'To Haines, AK', value: '≈4 h by car' },
  ],

  badges: ['Kluane National Park', 'Mount Logan', 'Glacier Flights'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '688', label: 'People in Haines Junction in the 2021 census — up 12.2% in five years', level: 'danger' },
    { value: '5,959 m', label: 'Height of Mount Logan, Canada’s tallest peak, deep inside Kluane National Park', level: 'purple' },
    { value: '22,013 km²', label: 'Size of Kluane National Park and Reserve, mostly ice and remote peaks', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Village Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Services, the Da Kų Cultural Centre and the highway junction',
      details: {
        "lead": "Services, the Da Kų Cultural Centre and the highway junction.",
        "see": [
          {
            "title": "Da Kų Cultural Centre",
            "text": "Free to visit. Summer hours were 8:30 am–6 pm from May 15 to Labour Day (one source says to September 30); winter access is by appointment on 867-634-3300."
          },
          {
            "title": "Parks Canada visitor centre",
            "text": "Inside Da Kų; open daily 9 am–5 pm from May 15 to September 20 in 2026."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Alaska Highway at the junction."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Backcountry trips are registered in person at the visitor centre in summer; from November 16 to March 31 no permit is needed except for the Kluane Icefields."
          }
        ],
        "link": {
          "label": "Travel Yukon: Da Kų Cultural Centre",
          "url": "https://www.travelyukon.com/en/see-and-do/experience-providers/da-ku-cultural-centre"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Alaska Highway Corridor', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'blue', meta: 'The main route north to Whitehorse and south toward BC',
      details: {
        "lead": "The main route north to Whitehorse and south toward BC.",
        "see": [
          {
            "title": "Highway",
            "text": "A major route with services in the village; no 2026–27 winter condition information was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Through the village."
          },
          {
            "label": "Good to know",
            "text": "Check Yukon 511 for winter conditions."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Haines Road', icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', tag: 'Border Route', tagLevel: 'purple', meta: 'Scenic road south to Haines, Alaska, via British Columbia',
      details: {
        "lead": "The road south to Haines, Alaska, through British Columbia.",
        "see": [
          {
            "title": "Open year-round",
            "text": "Yukon Highway 3 is listed as open all year, about 246 km to Haines; Environment Canada issued a winter storm warning for the corridor on November 9, 2026."
          },
          {
            "title": "Border",
            "text": "Pleasant Camp is reported to run 9 am–1 am local time from November 1, 2026 to March 14, 2027 (older schedule: 8 am to midnight)."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South from Haines Junction."
          },
          {
            "label": "Documents",
            "text": "Carry a passport; confirm hours with CBSA or U.S. CBP."
          },
          {
            "label": "Good to know",
            "text": "Winter storms can close or slow the road."
          }
        ],
        "link": {
          "label": "Yukon highways guide",
          "url": "https://faszination-kanada.com/en/yukon-highways/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Kathleen Lake', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Park', tagLevel: 'danger', meta: 'The park’s main day-use area, a short drive south of the village',
      details: {
        "lead": "The Kluane day-use area and campground, a short drive south of the village.",
        "see": [
          {
            "title": "Campground",
            "text": "38 sites, May 15 to September 20, 2026; a standard site was $27 per night including firewood."
          },
          {
            "title": "King’s Throne",
            "text": "A trail and a picnic day-use area are features of the site."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive south of Haines Junction."
          },
          {
            "label": "Time to allow",
            "text": "Two hours to a full day."
          },
          {
            "label": "Good to know",
            "text": "No day-use fee was found; check Parks Canada. The campground is closed now."
          }
        ],
        "link": {
          "label": "Parks Canada: Kathleen Lake",
          "url": "https://parks.canada.ca/pn-np/yt/kluane/visit/services/kathleen"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dezadeash Lake', icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', tag: 'Fishing', tagLevel: 'safe', meta: 'Quiet lake along the Haines Road, popular with anglers',
      details: {
        "lead": "A quiet lake along the Haines Road, popular with anglers.",
        "see": [
          {
            "title": "Lake",
            "text": "No 2026 visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the Haines Road, south of Haines Junction."
          },
          {
            "label": "Good to know",
            "text": "Check fishing regulations and road conditions."
          }
        ],
        "link": {
          "label": "Yukon fishing",
          "url": "https://yukon.ca/en/how-and-where-catch-yukon-fish"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Da Kų Cultural Centre & Kluane Visitor Centre',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A combined First Nations cultural centre and Parks Canada visitor centre in the village — the place to plan any trip into Kluane. The Da Kų Centre is open about May 15 to Labour Day (8:30 am–6 pm) and the Parks Canada visitor centre about May 15 to September 20 (9 am–5 pm); both are closed for the season now, with winter access by appointment.',
      tags: [{ label: 'Start here', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "A First Nations cultural centre and Parks Canada visitor centre in the village, the place to plan any trip into Kluane.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Da Kų",
                "text": "Free; summer hours 8:30 am–6 pm from May 15 to Labour Day (one source says September 30)."
              },
              {
                "title": "Parks Canada",
                "text": "Open daily 9 am–5 pm from May 15 to September 20, 2026."
              },
              {
                "title": "Winter",
                "text": "Da Kų is open by appointment on 867-634-3300."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Permits",
                "text": "In summer, register backcountry trips in person; no permit is needed from November 16 to March 31 except for the Kluane Icefields."
              },
              {
                "title": "Closed now",
                "text": "Both centres are closed for the season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Da Kų free."
          },
          {
            "label": "Getting there",
            "text": "In Haines Junction."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Travel Yukon: Kluane visitor centre",
          "url": "https://www.travelyukon.com/en/see-and-do/experience-providers/kluane-national-park-and-reserve-visitor-centre-da-ku-centre"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Kathleen Lake',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A short drive from the village: a turquoise glacial lake ringed by snow-capped peaks, with picnic areas, a campground and trailheads.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A turquoise glacial lake ringed by peaks, with picnic areas, a campground and trailheads.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Campground",
                "text": "38 sites with water, firewood, bear-proof lockers and outhouses; May 15 to September 20, 2026."
              },
              {
                "title": "Fee",
                "text": "$27 per night in 2026, plus reservation fees."
              },
              {
                "title": "King’s Throne",
                "text": "A trail begins here, with a day-use picnic area."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Reservations",
                "text": "2026 reservations launched January 20."
              },
              {
                "title": "Day use",
                "text": "No day-use fee was found; check Parks Canada’s fees page."
              },
              {
                "title": "Closures",
                "text": "Parks Canada posts area closures, such as for wolves, on its Kluane page."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Camping paid; day use unconfirmed."
          },
          {
            "label": "Getting there",
            "text": "A short drive south of the village."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Parks Canada: Kathleen Lake",
          "url": "https://parks.canada.ca/pn-np/yt/kluane/visit/services/kathleen"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Glacier & Icefield Flights',
      icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg',
      text: 'Local operators fly scenic routes over the Kluane icefields and Mount Logan — one of the few ways to see the park’s remote interior. 2026 prices listed from about $250 for 45 minutes to $660 for the two-hour Logan tour.',
      tags: [{ label: 'Splurge', level: 'purple' }, { label: 'Weather-dependent', level: 'caution' }],
      details: {
        "lead": "Scenic flights over the Kluane icefields and Mount Logan from the Haines Junction airport.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 prices",
                "text": "One guide lists 45 min $250, 1 h $360, 1.5 h $500 and the 2 h Logan Super Tour $660 per person."
              },
              {
                "title": "Operators",
                "text": "Rocking Star Adventures and Kluane Glacier Air Tours are named; one guide names others."
              },
              {
                "title": "Weather",
                "text": "Weather decides whether a flight goes."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Backup day",
                "text": "One guide advises an overnight so you have a backup morning."
              },
              {
                "title": "Confirm",
                "text": "Prices were checked in late summer or October 2026; confirm before booking."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, from about $250."
          },
          {
            "label": "Getting there",
            "text": "From the airport at Haines Junction."
          },
          {
            "label": "Best time",
            "text": "Summer, on a clear day."
          }
        ],
        "link": {
          "label": "Kluane Glacier Air Tours",
          "url": "https://kluaneglacierairtours.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'St. Elias Lake Trail',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'An easy, popular day hike to a quiet lake framed by the St. Elias Mountains.',
      tags: [{ label: 'Easy hike', level: 'safe' }, { label: 'Family', level: 'danger' }],
      details: {
        "lead": "An easy, popular day hike to a quiet lake framed by the St. Elias Mountains.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hike",
                "text": "An easy day hike; no trail length was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Register",
                "text": "Ask at the visitor centre about conditions and any registration."
              },
              {
                "title": "Nearby",
                "text": "Other Haines Junction trails include Sheep Creek (10 km) and the Auriol loop (15 km)."
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
            "text": "Near Haines Junction by car."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Parks Canada: Kluane",
          "url": "https://parks.canada.ca/pn-np/yt/kluane"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Haines Road Scenic Drive',
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      text: 'One of the great northern drives, running south through alpine tundra and past Dezadeash Lake to the Alaska coast at Haines.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Border crossing', level: 'caution' }],
      details: {
        "lead": "A scenic drive south through alpine tundra and past Dezadeash Lake to the Alaska coast at Haines.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 246 km from Haines Junction to Haines; 175 km in Yukon, then British Columbia and Alaska."
              },
              {
                "title": "Open",
                "text": "Listed as open all year."
              },
              {
                "title": "Border",
                "text": "Pleasant Camp is reported to run 9 am–1 am from November 1, 2026 to March 14, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Storm warning",
                "text": "Environment Canada issued a winter storm warning for Haines Junction to Pleasant Camp on November 9, 2026."
              },
              {
                "title": "Passport",
                "text": "Carry a passport and confirm border hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free road."
          },
          {
            "label": "Getting there",
            "text": "South from Haines Junction."
          },
          {
            "label": "Best time",
            "text": "Summer for scenery; winter needs experience."
          }
        ],
        "link": {
          "label": "Yukon highways guide",
          "url": "https://faszination-kanada.com/en/yukon-highways/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Mountains, Icefields and Alpine Trails',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'King’s Throne Trail', dist: 'Kathleen Lake', text: 'A steep, rewarding climb above the lake for panoramic views.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'St. Elias Lake Trail', dist: 'Near highway', text: 'An easy hike to an alpine lake.' },
    { icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg', name: 'Icefield Flightseeing', dist: 'From the village', text: 'Scenic flights over glaciers and Mount Logan.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Dezadeash & Kathleen Lakes', text: 'Lake trout and grayling in the surrounding lakes.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Alsek Trail', dist: 'Kathleen Lake', text: 'A long backcountry route toward Alsek Pass.' },
    { icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg', name: 'Backcountry Camping', dist: 'Kluane interior', text: 'Permits required for wilderness travel into the park.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Highway Diners', area: 'Village centre', areaLevel: 'gold', text: 'Simple, hearty stops for road-trippers.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Village centre', areaLevel: 'purple', text: 'Coffee and baked goods near the visitor centre.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stop', area: 'Village centre', areaLevel: 'olive', text: 'The last well-stocked store before long stretches of highway.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Local menus', areaLevel: 'blue', text: 'Freshly caught trout where in season.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding alpine terrain.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Quiet', text: 'Snow lingers at elevation; most visitor services are still closed.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Park season', text: 'Trails, flights and the visitor centre are all open.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Alpine colour', text: 'Tundra turns gold before services wind down for winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 3, note: 'Remote & cold', text: 'Deep snow and a dramatic, very quiet mountain landscape.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Alaska Highway links Haines Junction with Whitehorse; the Haines Road runs south to the Alaska coast via British Columbia.',
      time: '≈1 h 30 min from Whitehorse',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Haines Junction has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
    {
      icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg',
      title: 'Scenic Flights',
      text: 'Local air operators offer flightseeing over Kluane’s icefields — the only way most visitors see the park’s remote interior.',
      time: 'Weather-dependent',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Seasonal or charter coach services sometimes stop here along the Alaska Highway. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Village Centre',
      area: 'Walkable',
      text: 'Motels and inns near the visitor centre and highway junction.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Haines+Junction+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Haines%20Junction%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      title: 'Kathleen Lake',
      area: '≈25 min away',
      text: 'A Parks Canada campground right on the lake.',
      links: [
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/yt/kluane', level: 'blue' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Dezadeash Lake',
      area: 'Along the Haines Road',
      text: 'Lakeside campgrounds for a quieter stay.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dezadeash+Lake+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Local Transit',
      text: 'Haines Junction has no public bus system — the village centre is a short walk, and a car (or a booked flight) is essential for the park itself.',
      linkLabel: 'Kluane National Park',
      linkUrl: 'https://parks.canada.ca/pn-np/yt/kluane',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The village centre is a few short blocks.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Kathleen Lake and the Haines Road.' },
          { icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg', title: 'Flightseeing', text: 'The way to reach the park’s remote icefields.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Weather tip:',
      text: 'Mountain weather changes fast here — book glacier flights with flexible dates, and check in at the visitor centre before any backcountry hike.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Haines Junction has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Haines Junction / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg', label: 'Flightseeing tours: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Kathleen Lake day-use: free' },
      { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', label: 'Most day-hike trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Flight and hiking guides: 10–15%.',
  },

  practical: [
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Pack for the Mountains', text: 'Weather changes fast near the icefields — bring layers even in summer.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Bear Country', text: 'Carry bear spray and make noise on trails — this is serious grizzly and black bear habitat.' },
    { icon: '📋', iconSrc: '/icons/attractions/ph_clipboard-text-thin.svg', title: 'Backcountry Permits', text: 'Overnight trips into Kluane’s interior require a park permit — register at the visitor centre.' },
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Fuel Up', text: 'This is a key fuel and supply stop before long stretches of the Alaska Highway and Haines Road.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg', title: 'Border Crossing', text: 'Driving the Haines Road to Alaska means crossing both US and Canadian border posts — bring a passport.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Haines Junction is on the traditional territory of the Champagne and Aishihik First Nations.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Haines Junction Health Centre', '131 Bates St', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default HAINES_JUNCTION;
