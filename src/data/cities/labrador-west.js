// Labrador West — данные страницы /city/labrador-west (Лабрадор-Уэст,
// НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Осторожно: Labrador West — региональное название для города-побратима
// Лабрадор-Сити и Уобуша (≈3 км друг от друга); в данных провинции
// отдельно числится ещё и "Labrador City" с похожим населением — похоже
// на дублирование из исходной вёрстки сайта (как было с "French River"
// у Кармакса). Эта страница — про весь регион Лабрадор-Уэст.
// Видео в бесплатных банках нет (Pexels по "Labrador City" выдаёт в
// основном собак породы лабрадор). В шапке фото с Wikimedia Commons —
// город с воздуха у озера, автор Quintin Soloviev, 16.06.2026, CC BY 4.0
// (GPS 52.941, -66.895 — совпадает с Лабрадор-Сити; подпись к файлу
// называет население 7412 и статус "2nd-largest population centre in
// Labrador" — совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: Лабрадор-Сити 7 412 (+2.7% к 2016, 7220);
// Уобуш 1 964 (+3% к 2016, 1906); вместе ≈9 376 (канадский федеральный
// экономический профиль региона).
// История: железная руда открыта в 1892, права приобретены Iron Ore
// Company of Canada (IOC) в 1936; добыча на Carol Lake началась в 1962.
// Соседний Wabush Mines (рудник Scully) открыт в 1965, руда вывозилась
// по Квебек-Норт-Шор-энд-Лабрадорской железной дороге.
// Часовой пояс — важное отличие от острова Ньюфаундленд: Лабрадор-Уэст
// на Atlantic Time (UTC-4/-3), а не на Newfoundland Time с получасовым
// сдвигом.
// Транспорт: собственного городского автобуса нет (в отличие от Happy
// Valley-Goose Bay, где он появился); пассажирский поезд Tshiuetin из
// Sept-Îles (Квебек) до Лабрадор-Сити/Уобуша — последнее пассажирское
// ж/д сообщение в провинции, расписание уточнять у оператора.
// Больница — Labrador West Health Centre (переименован, возможно,
// преемник Captain William Jackman Memorial Hospital — связь не
// подтвердили отдельным источником), 1700 Nichols-Adam Hwy.
// Лыжные клубы — Menihek Nordic Ski Club (≈3 км, беговые трассы,
// Koch Trail System 15 км), Smokey Mountain Ski Club (≈5 км, горные
// лыжи в горах Wapusakatta).
// Налог — HST 15%.

export const LABRADOR_WEST = {
  slug: 'labrador-west',
  name: 'Labrador West',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Iron Ore Country",
  accentLevel: 'danger',
  heroIcon: '⛏️',
  heroImage: '/Cities/LabradorWest/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.9400, lon: -66.9108 },
  subtitle: "Twin Mining Towns on the Labrador Trough",
  description:
    "Labrador City and its smaller neighbour Wabush sit on the vast Labrador Trough iron ore deposits that built them in the 1960s. Together they form Labrador West, a self-sufficient mining region of lakes and boreal forest, reached by a long highway or the province's last passenger train — and a world away from the rest of Newfoundland & Labrador in climate, time zone and feel.",

  actions: [
    { label: 'Explore Labrador West', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈9.4K combined (2021)' },
    { label: 'Known For', value: 'Iron Ore Mining' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Sept-Îles, QC', value: '≈5–6 h by car' },
    { label: 'Road Access', value: 'Via Québec Route 389' },
  ],

  badges: ['Iron Ore Country', 'Carol Lake', 'Menihek Trails'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '7,412', label: 'People in Labrador City in the 2021 census — the 2nd-largest population centre in Labrador', level: 'danger' },
    { value: '1,964', label: 'People in neighbouring Wabush — together, about 9,376 across Labrador West', level: 'purple' },
    { value: '1962', label: 'Year the Iron Ore Company of Canada began production at Carol Lake', level: 'gold' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Labrador City', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Larger Town', tagLevel: 'gold', meta: 'The bigger of the twin towns, with most shops and services',
      details: {
        "lead": "The bigger of the twin towns, with most shops and services.",
        "see": [
          {
            "title": "Menihek Nordic",
            "text": "Over 30 km of groomed ski trails about 3 km from town; see the attraction below."
          },
          {
            "title": "Carol Lake Mine",
            "text": "The IOC open-pit mine about 2 km northeast of the town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By road or air; see the Labrador City page."
          },
          {
            "label": "Time to allow",
            "text": "A day or two."
          },
          {
            "label": "Good to know",
            "text": "Winter is cold and snowy; plan for it."
          }
        ],
        "link": {
          "label": "Gateway Labrador: activities",
          "url": "https://gatewaylabrador.ca/activities/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Wabush', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Neighbour', tagLevel: 'purple', meta: 'A smaller town about 3 km away, with its own airport',
      details: {
        "lead": "The smaller twin town, with about 1,960 people (2021).",
        "see": [
          {
            "title": "Jean Lake Trail",
            "text": "The Jean Lake trail system is near Wabush; one app lists it at about 0.5 km."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A few kilometres from Labrador City."
          },
          {
            "label": "Good to know",
            "text": "No visitor sights beyond trails were found."
          }
        ],
        "link": {
          "label": "Wikipedia: Labrador City",
          "url": "https://en.wikipedia.org/wiki/Labrador_City"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Carol Lake', icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', tag: 'Mine Site', tagLevel: 'danger', meta: 'The massive open-pit iron ore operation that built the region',
      details: {
        "lead": "The massive open-pit iron ore operation that built the region.",
        "see": [
          {
            "title": "Scale",
            "text": "Five operating pits, a concentrator and a pelletizing plant; design capacity 23 million tonnes a year."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 2 km northeast of Labrador City."
          },
          {
            "label": "Good to know",
            "text": "Not open for casual visits."
          }
        ],
        "link": {
          "label": "Mining Data Online: Carol Lake Mine",
          "url": "https://miningdataonline.com/property/23/Carol-Lake-Mine.aspx"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Menihek Lakes', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Lakes', tagLevel: 'blue', meta: 'A chain of lakes around the towns, used for recreation',
      details: {
        "lead": "A chain of lakes around the towns used for recreation.",
        "see": [
          {
            "title": "Lakes",
            "text": "No visitor details were found; the lakes are used locally for recreation."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Around Labrador City and Wabush."
          },
          {
            "label": "Good to know",
            "text": "Ask locally before heading out in winter."
          }
        ],
        "link": {
          "label": "Gateway Labrador: activities",
          "url": "https://gatewaylabrador.ca/activities/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Smokey Mountain / Wapusakatta', icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', tag: 'Ski', tagLevel: 'safe', meta: 'The hills just outside town used for downhill and Nordic skiing',
      details: {
        "lead": "The hills just outside town used for skiing and mountain biking.",
        "see": [
          {
            "title": "Smokey Mountain Ski Club",
            "text": "Its trails are mainly used by mountain bikers; no 2026–27 season or chairlift information was found."
          },
          {
            "title": "Menihek Nordic",
            "text": "The Koch Trail System was designed by Bill Koch for the 1983 and 1985 World Cup events."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Just outside Labrador City and Wabush."
          },
          {
            "label": "Good to know",
            "text": "Confirm with the clubs."
          }
        ],
        "link": {
          "label": "Trailforks: Menihek Nordic Ski Club",
          "url": "https://www.trailforks.com/region/menihek-nordic-ski-club-50409/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Carol Lake Mine',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'The Iron Ore Company of Canada’s massive open-pit operation, in production since 1962 — the economic engine behind Labrador West. Not open for casual visits; ask locally about viewing points.',
      tags: [{ label: 'Landmark', level: 'danger' }, { label: 'View only', level: 'caution' }],
      details: {
        "lead": "The Iron Ore Company of Canada’s open-pit operation, the economic engine of Labrador West.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Scale",
                "text": "Five operating pits, a concentrator and a pelletizing plant near Labrador City; port at Sept-Îles."
              },
              {
                "title": "Ownership",
                "text": "IOC is majority-owned by Rio Tinto."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "View only",
                "text": "Not open for casual visits; ask locally about viewing points."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "About 2 km northeast of Labrador City."
          },
          {
            "label": "Time to allow",
            "text": "A short look."
          }
        ],
        "link": {
          "label": "Mining Data Online: Carol Lake Mine",
          "url": "https://miningdataonline.com/property/23/Carol-Lake-Mine.aspx"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Menihek Nordic Ski Club',
      icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'About 3 km from Labrador City, with over 30 km of groomed trails (about 8 km lit) and the Koch Trail System, built for the 1983 and 1985 World Cup events.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Must do', level: 'gold' }],
      details: {
        "lead": "Over 30 km of groomed trails about 3 km from Labrador City, including the Koch Trail System.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "Classic and skate skiing; about 8 km lit (another source says 5 km)."
              },
              {
                "title": "Koch Trail System",
                "text": "Designed by Olympic medallist Bill Koch for the 1983 and 1985 World Cup events."
              },
              {
                "title": "Loppet",
                "text": "A 10 km blue family-friendly loppet trail is listed for 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "No 2026–27 opening was found; check meniheknordic.com."
              },
              {
                "title": "Setting",
                "text": "In the Wapusakatta Mountains."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Trail fees; check the club."
          },
          {
            "label": "Getting there",
            "text": "About 3 km from Labrador City."
          },
          {
            "label": "Best time",
            "text": "Winter, when snow is on."
          }
        ],
        "link": {
          "label": "Menihek Nordic Loppet Trail",
          "url": "https://www.trailforks.com/trails/menihek-nordic-loppet-trail-2026/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Smokey Mountain Ski Club',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'A ski club in the Wapusakatta Mountains; its trails are also used for mountain biking. No 2026–27 season or lift information was found.',
      tags: [{ label: 'Winter', level: 'blue' }, { label: 'Family', level: 'purple' }],
      details: {
        "lead": "A ski club in the Wapusakatta Mountains whose trails are also used for mountain biking.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Use",
                "text": "Trails are mainly used by mountain bikers; Smokey Mountain #1 descends about 607 ft."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No 2026–27 season or chairlift information was found; ask the club."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check with the club."
          },
          {
            "label": "Getting there",
            "text": "Near Labrador City and Wabush."
          },
          {
            "label": "Best time",
            "text": "Summer for biking."
          }
        ],
        "link": {
          "label": "Trailforks: Smokey Mountain and Menihek Nordic",
          "url": "https://products.mtbr.com/trails/canada/newfoundland/Labrador-City-Wabush/smokey-mountain-and-menihek-nordic.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jean Lake Walking Trail',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'An easy trail around Jean Lake, accessible from Grenfell Drive — a short walk close to town. One walking app lists it as about 0.5 km; no official length was found.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Easy', level: 'blue' }],
      details: {
        "lead": "An easy trail around Jean Lake, accessible from Grenfell Drive.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "One walking app lists about 0.5 km (1,000 steps); no official length was found."
              },
              {
                "title": "Difficulty",
                "text": "Easy, with about 26 ft of climb."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "A snowshoe walk in winter; check conditions."
              },
              {
                "title": "Free",
                "text": "Free."
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
            "text": "Grenfell Drive."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Pacer: Jean Lake Trail System",
          "url": "https://www.mypacer.com/routes/oi4yhb/jean-lake-trail-system-hiking-wabush-newfoundland-and-labrador"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tshiuetin Railway',
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      text: "The Tshiuetin passenger train runs from Sept-Îles, Québec, toward Schefferville and serves Labrador at Emeril Junction, about a 45-minute drive from Labrador City. No service to Labrador City or Wabush themselves was found; check the schedule.",
      tags: [{ label: 'Unique', level: 'purple' }, { label: 'Check schedule', level: 'caution' }],
      details: {
        "lead": "A passenger train from Sept-Îles, Québec, toward Schefferville, serving Labrador at Emeril Junction.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Frequency",
                "text": "The operator aims for up to two passenger services a week; no 2026 timetable was found."
              },
              {
                "title": "Labrador stop",
                "text": "Emeril Junction, about a 45-minute drive from Labrador City; you must arrange your own transport."
              },
              {
                "title": "Operator",
                "text": "Tshiuetin Rail Transportation, an active federal railway."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Schedule",
                "text": "It can change; check tshiuetin.net or the company’s Facebook page."
              },
              {
                "title": "Wabush",
                "text": "No passenger service to Labrador City or Wabush was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; check tshiuetin.net."
          },
          {
            "label": "Getting there",
            "text": "From Sept-Îles, Québec."
          },
          {
            "label": "Time to allow",
            "text": "A long day or more."
          }
        ],
        "link": {
          "label": "Tshiuetin: travel info",
          "url": "https://www.tshiuetin.net/travel-info/?lang=en"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Boreal Lakes and Mining-Country Trails',
  outdoor: [
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Nordic Skiing', dist: 'Menihek Nordic Ski Club', text: 'Some of the best groomed cross-country trails in Atlantic Canada.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Downhill Skiing', dist: 'Smokey Mountain', text: 'A local ski hill in the Wapusakatta Mountains.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Jean Lake Trail', dist: 'Near town', text: 'An easy loop walk around a nearby lake.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Menihek Lakes', text: 'Lake trout and other species in the surrounding lake chain.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Regional trails', text: 'A major winter activity across the Labrador Trough.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights, especially in winter.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Labrador City & Wabush', areaLevel: 'gold', text: 'A modest but solid dining scene serving both towns.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local restaurants', areaLevel: 'danger', text: 'Caribou and other northern specialties where available.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Labrador City', areaLevel: 'blue', text: 'Well-stocked for the region, though prices can run higher.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops serving the mining community.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Lake Fish', area: 'Local catch', areaLevel: 'safe', text: 'Lake trout from the Menihek Lakes.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs', area: 'Labrador City', areaLevel: 'olive', text: 'Local bars popular with mine workers and residents.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Thaw', text: 'Snow retreats slowly from the lakes and hills.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'Warm days for lake fishing and hiking around the Menihek chain.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Bright boreal colour before the long winter sets in.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — April', level: 'blue', rating: 5, note: 'Ski country', text: 'Deep, reliable snow — a serious draw for Nordic and downhill skiers.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Reached via Québec Route 389 from Baie-Comeau or Manic-Cinq — a long, remote drive with limited services, not connected to the rest of the island of Newfoundland by road.',
      time: '≈5–6 h from Sept-Îles, QC',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'The Tshiuetin Railway runs from Sept-Îles, Québec, to Labrador City and Wabush — the province’s last scheduled passenger rail service.',
      time: 'Check Tshiuetin schedule',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Wabush Airport (YWK) has scheduled flights, mainly connecting through Québec and other regional hubs.',
      time: 'Via regional connections',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'No direct scheduled bus service connects Labrador West to southern Canada; most travellers combine bus, train or flights via Québec.',
      time: 'Check connections',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Labrador City',
      area: 'Main town',
      text: 'The larger town, with most hotels and services.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Labrador%20City%2C%20Newfoundland%20and%20Labrador%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Wabush',
      area: '≈3 km away',
      text: 'A smaller selection of hotels near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wabush+Newfoundland', level: 'blue' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Near Smokey Mountain',
      area: 'Ski season',
      text: 'Convenient for winter sports visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Labrador+City+Newfoundland', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No Public Transit',
      text: 'Neither Labrador City nor Wabush runs a public bus system — a car or taxi is the way to get around, with roughly 3 km between the two towns.',
      linkLabel: 'Labrador City',
      linkUrl: 'https://www.labradorcity.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Each town centre is small and walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed to get between Labrador City and Wabush, and out to the lakes.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in both towns.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Widely used for winter travel on regional trails.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'Québec Route 389 to Labrador West is long and remote — fuel up, check weather, and carry supplies before setting out.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services across the province, including Labrador West.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Labrador West / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec (across the border)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Ski passes: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', label: 'Jean Lake Trail: free' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Menihek Lakes shoreline: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Ski and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Different Time Zone', text: "Unlike the island of Newfoundland, Labrador West runs on Atlantic Time (UTC-4 winter, UTC-3 summer) — no half-hour offset here." },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Serious Winters', text: 'Labrador West has some of the coldest, snowiest winters in the province — dress for it, and expect a long ski season.' },
    { icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', title: 'Remote Roads', text: 'Québec Route 389 to the region is long with limited services — plan fuel stops and check road and weather conditions.' },
    { icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg', title: 'Mining Economy', text: "The local economy follows global iron ore prices, so employment and activity can shift with the market — part of daily conversation here." },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Moose and caribou are common on regional highways — drive cautiously, especially at dawn and dusk.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Few Transit Options', text: 'Bring a car or plan on taxis — there is no public bus between or within the towns.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: "Labrador West is within Nitassinan, the traditional territory of the Innu, and near Inuit and NunatuKavut communities of Labrador." },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Labrador West Health Centre', '1700 Nichols-Adam Hwy, Labrador City', 'Call 911 · 811 for advice'] },
  ],
};

export default LABRADOR_WEST;
