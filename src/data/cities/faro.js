// Faro — данные страницы /city/faro (Фаро, ЮКОН)
// Видео Фаро в бесплатных банках нет (Pexels по запросу — только зимние
// пейзажи и маяки без связи с местом; слово "Faro" по-испански/итальянски
// означает "маяк", отсюда путаница в выдаче). В шапке фото с Wikimedia
// Commons — посёлок с вертолёта на фоне долины и гор, подпись к файлу
// "Town of Faro seen from helicopter", автор Histif, май 2009, CC BY-SA 4.0
// — лицензия требует автора. GPS в EXIF нет, но подпись однозначно
// называет место.
// Население — перепись 2021: 440 (+26.4% к 2016, 348) — самый быстрый
// рост среди городов Юкона на сайте; статистика Юкона связывает прежнее
// падение с закрытием рудника.
// История: посёлок построен в 1968–69 компанией Cyprus Anvil Mines для
// одного из крупнейших открытых свинцово-цинковых рудников в мире;
// рудник закрылся окончательно в 1998 году (банкротство последнего
// владельца). Сейчас здесь один из самых сложных проектов рекультивации
// заброшенных рудников в Канаде — ориентировочный срок завершения около
// 2039 года (федеральные публикации, 2026). Беспокойство — утечка
// токсичных металлов в реки Пелли и Юкон ниже по течению.
// Медцентр — Faro Community Health Centre; в августе 2025 закрывался на
// месяц из-за нехватки медсестёр, мэр публично говорил о кризисе
// здравоохранения — предупреждение вместо гарантии круглосуточной помощи.
// Fannin sheep (гибрид снежного барана Далла и барана Стоуна) —
// смотровая станция Mount Mye с домиком и печкой; ежегодный фестиваль
// Crane and Sheep Viewing Festival.
// Налог — как и во всём Юконе, только федеральный GST 5%.
// Транспорта внутри посёлка нет.

export const FARO = {
  slug: 'faro',
  name: 'Faro',
  province: 'Yukon',
  provinceId: 'yt',
  region: 'YT',
  tag: 'Yukon · Former Mining Capital',
  accentLevel: 'purple',
  heroIcon: '⛏️',
  heroImage: '/Cities/Faro/hero.jpg',
  heroCredit: 'Photo: Histif / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.2309, lon: -133.3756 },
  subtitle: 'Mountain Town Reborn After the Mine',
  description:
    'Built in 1968–69 to house workers at one of the world’s largest open-pit lead-zinc mines, Faro sits in a remote valley on the Robert Campbell Highway, framed by the Pelly Mountains. Since the mine closed, this small community has reinvented itself around wildlife viewing, wilderness recreation and one of Canada’s biggest ongoing mine-cleanup projects.',

  actions: [
    { label: 'Explore Faro', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈440 (2021)' },
    { label: 'Known For', value: 'Fannin Sheep Viewing' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-8/-7)' },
    { label: 'To Whitehorse', value: '≈4 h by car' },
    { label: 'To Ross River', value: '≈1 h by car' },
  ],

  badges: ['Fannin Sheep', 'Mine Remediation', 'Pelly Mountains'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '440', label: 'People in Faro in the 2021 census — up 26.4% in five years', level: 'purple' },
    { value: '1968', label: 'Year the town was built for the Cyprus Anvil lead-zinc mine', level: 'gold' },
    { value: '≈2039', label: 'Estimated completion of the Faro Mine Remediation Project', level: 'blue' },
    { value: '5%', label: 'Sales tax — Yukon charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Built for thousands of mine workers, now a quieter community',
      details: {
        "lead": "Built for thousands of mine workers, now a quieter community.",
        "see": [
          {
            "title": "Faro Museum",
            "text": "Local and mining history; no 2026 hours were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Robert Campbell Highway."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The town website is faroyukon.ca; services are limited."
          }
        ],
        "link": {
          "label": "The MILEPOST: Faro",
          "url": "https://themilepost.com/communities/faro-yukon/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Mount Mye', icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', tag: 'Wildlife', tagLevel: 'purple', meta: 'Sheep-viewing station overlooking the valley',
      details: {
        "lead": "The Fannin sheep viewing station overlooking the valley.",
        "see": [
          {
            "title": "Viewing cabin",
            "text": "An all-season observation cabin; the road is accessible once the snow melts, in early May."
          },
          {
            "title": "When to see sheep",
            "text": "Sheep are best seen from mid-September to mid-June, on their winter range near town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By road near Faro; ask locally for access in winter."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No daily hours were found."
          }
        ],
        "link": {
          "label": "Faro’s Fannin’s sheep (What’s Up Yukon)",
          "url": "https://www.whatsupyukon.com/current-issue/faros-fannins-sheep/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Pelly Mountains', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Backdrop', tagLevel: 'blue', meta: 'The range framing the town and old mine site',
      details: {
        "lead": "The range framing the town and the old mine site.",
        "see": [
          {
            "title": "Backdrop",
            "text": "A scenic range around Faro; no visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Around Faro."
          },
          {
            "label": "Good to know",
            "text": "Check conditions before any backcountry trip."
          }
        ],
        "link": {
          "label": "The MILEPOST: Faro",
          "url": "https://themilepost.com/communities/faro-yukon/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Faro Mine Site', icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', tag: 'Remediation', tagLevel: 'danger', meta: 'One of Canada’s largest ongoing mine-cleanup projects',
      details: {
        "lead": "Once the largest open-pit lead-zinc mine in the world, abandoned in 1998 and now a major remediation project.",
        "see": [
          {
            "title": "Remediation",
            "text": "A November 2026 report says active cleanup is expected to begin around 2029; the estimated cost grew from $200 million in 2002 to $5 billion in 2022–23."
          },
          {
            "title": "Who runs it",
            "text": "The federal government (CIRNAC) leads, the Yukon government handles care and maintenance, and the Kaska Faro Secretariat takes part."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Near Faro."
          },
          {
            "label": "Good to know",
            "text": "No public access or viewpoint information was found."
          }
        ],
        "link": {
          "label": "CIRNAC: Faro Mine Remediation Project",
          "url": "https://www.rcaanc-cirnac.gc.ca/eng/1480019546952/1537554989037"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Robert Campbell Highway', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway', tagLevel: 'olive', meta: 'The route connecting Faro to Carmacks and Watson Lake',
      details: {
        "lead": "The route connecting Faro to Carmacks and Watson Lake.",
        "see": [
          {
            "title": "Highway",
            "text": "A quiet northern highway; no 2026–27 winter condition information was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By road from Carmacks or Watson Lake."
          },
          {
            "label": "Good to know",
            "text": "Check Yukon 511 before winter driving."
          }
        ],
        "link": {
          "label": "The MILEPOST: Faro",
          "url": "https://themilepost.com/communities/faro-yukon/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Mount Mye Fannin Sheep Viewing Station',
      icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A viewing platform and warm cabin for watching Fannin sheep — a rare, naturally occurring hybrid of Dall’s and Stone’s sheep found around Faro.',
      tags: [{ label: 'Rare wildlife', level: 'gold' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A viewing cabin for watching Fannin sheep, a hybrid of Dall’s and Stone’s sheep found around Faro.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Open",
                "text": "Described as an all-season observation cabin and photographer’s blind."
              },
              {
                "title": "Access",
                "text": "The road is accessible once the snow melts out in early May."
              },
              {
                "title": "Best season",
                "text": "Sheep are best seen between mid-September and mid-June."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No daily hours were found; ask in Faro."
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
            "text": "By road near Faro."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Faro’s Fannin’s sheep (What’s Up Yukon)",
          "url": "https://www.whatsupyukon.com/current-issue/faros-fannins-sheep/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Crane and Sheep Viewing Festival',
      icon: '🎉', iconSrc: '/icons/attractions/ph_confetti-thin.svg',
      text: 'An annual community festival celebrating the spring migration of sandhill cranes and the local sheep population.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Community', level: 'purple' }],
      details: {
        "lead": "An annual community festival celebrating the spring migration of sandhill cranes and the local sheep.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "Held May 1–3, 2026, the first weekend of May."
              },
              {
                "title": "Program",
                "text": "Past festivals had tours to the sheep cabin on Blind Creek Road and crane talks; the 2026 schedule may differ."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2027",
                "text": "No 2027 dates were found; expect the first weekend of May."
              },
              {
                "title": "Contact",
                "text": "Check faroyukon.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check the festival."
          },
          {
            "label": "Getting there",
            "text": "Faro, on the Robert Campbell Highway."
          },
          {
            "label": "Best time",
            "text": "Early May."
          }
        ],
        "link": {
          "label": "Travel Yukon: Faro Crane & Sheep Festival",
          "url": "https://www.travelyukon.com/en/see-and-do/events/faro-sheep-and-crane-festival"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Faro Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Local and mining history, including displays on the town’s boom years and its wildlife. Check seasonal hours.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'History', level: 'gold' }],
      details: {
        "lead": "Local and mining history, including the town’s boom years and its wildlife.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Collection",
                "text": "Mining history and local displays."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No 2026 hours or admission were found; check with the town."
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
            "text": "In Faro."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "The MILEPOST: Faro",
          "url": "https://themilepost.com/communities/faro-yukon/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Faro Mine Site',
      icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg',
      text: 'Once one of the world’s largest open-pit lead-zinc mines, now the focus of a decades-long federal remediation project. Public access was not confirmed; ask in Faro before heading out.',
      tags: [{ label: 'History', level: 'danger' }, { label: 'View only', level: 'caution' }],
      details: {
        "lead": "Once the world’s largest open-pit lead-zinc mine, abandoned in 1998 and the focus of a federal remediation project.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Timeline",
                "text": "Active remediation is now expected around 2029; earlier targets were 2025 and 2026."
              },
              {
                "title": "Cost",
                "text": "Estimated at $5 billion in 2022–23, up from $200 million in 2002; about 15 years of remediation plus monitoring."
              },
              {
                "title": "Leaders",
                "text": "CIRNAC leads; the Yukon government cares for the site; the Kaska Faro Secretariat takes part."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Access",
                "text": "Public access was not confirmed; ask in Faro first."
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
            "text": "Near Faro."
          },
          {
            "label": "Time to allow",
            "text": "A short stop if accessible."
          }
        ],
        "link": {
          "label": "CIRNAC: Faro Mine Remediation Project",
          "url": "https://www.rcaanc-cirnac.gc.ca/eng/1480019546952/1537554989037"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Van Gorder Falls & Trails',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'Local hiking trails around the valley, popular for berry-picking and quiet walks in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Nature', level: 'olive' }],
      details: {
        "lead": "Local hiking trails around the valley, popular for berry-picking and quiet walks in summer.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trails",
                "text": "Local trails around the valley."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Details",
                "text": "No trail lengths or conditions were found; ask in Faro."
              },
              {
                "title": "Bears",
                "text": "Carry bear spray on Yukon trails."
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
            "text": "Around Faro."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Travel Yukon",
          "url": "https://www.travelyukon.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Mountain Valley and Wildlife',
  outdoor: [
    { icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Sheep Viewing', dist: 'Mount Mye', text: 'Watch rare Fannin sheep from a dedicated platform.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Valley Trails', dist: 'Around town', text: 'Hiking and berry-picking trails near the townsite.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Pelly River', text: 'Angling on the river below the valley.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Spring migration', text: 'Sandhill cranes pass through in spring.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Pelly Mountains', dist: 'Surrounding the town', text: 'Remote alpine scenery with few other visitors.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife Watching', dist: 'Highway corridor', text: 'Moose, caribou and other northern species nearby.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Local Diner', area: 'Town centre', areaLevel: 'gold', text: 'Simple stops for residents and travellers.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'General Store', area: 'Town centre', areaLevel: 'olive', text: 'Basic groceries and supplies.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'purple', text: 'Coffee and quick bites.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Northern specialties where available.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'River Fish', area: 'Local menus', areaLevel: 'blue', text: 'Pelly River fish where in season.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Berries from the surrounding valley.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 3, note: 'Crane migration', text: 'Sandhill cranes pass through, and the sheep festival often falls in this window.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 4, note: 'Open season', text: 'Trails, fishing and the sheep viewing station are at their best.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Berry season', text: 'Berry-picking and good sheep viewing as weather cools.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 2, note: 'Very quiet', text: 'A small, remote mountain community under deep snow.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Faro sits off the Robert Campbell Highway, reached via a side road from Carmacks or from Watson Lake through Ross River.',
      time: '≈4 h from Whitehorse',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Faro has a small local airstrip; scheduled flights go through Whitehorse International Airport (YXY).',
      time: 'Via Whitehorse',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'No regular scheduled bus service reaches Faro — most visitors arrive by car.',
      time: 'No scheduled service',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'No passenger rail serves Faro.',
      time: 'No rail service',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small selection of motels and inns.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Faro+Yukon', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Faro%2C%20Yukon%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      title: 'Near Mount Mye',
      area: 'Short drive from town',
      text: 'Close to the sheep viewing station.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Faro+Yukon+campground', level: 'blue' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Pelly River',
      area: 'Nearby',
      text: 'Riverside camping for anglers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pelly+River+Yukon', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Local Transit',
      text: 'Faro has no public bus system — the town centre is a short walk, and a car is essential for the highway and surrounding wilderness.',
      linkLabel: 'Yukon government',
      linkUrl: 'https://yukon.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is a few short blocks.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the highway and Mount Mye.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Very limited — arrange ahead if needed.' },
        ],
      },
    ],
    proTip: {
      label: 'Sheep tip:',
      text: 'Bring binoculars to the Mount Mye viewing station — Fannin sheep graze well up the mountainside, and the cabin’s woodstove makes a cold wait more comfortable.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Yukon: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Yukon, Faro has no territorial sales tax — only the federal 5% GST applies.',
    comparison: [
      { label: 'Faro / Yukon', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel & supplies: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', label: 'Sheep viewing station: free' },
      { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', label: 'Valley trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Fuel Up', text: 'Services are limited along the surrounding highways — fill up and stock supplies in Faro.' },
    { icon: '🐏', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Respect the Sheep', text: 'View Fannin sheep from the designated platform and keep a respectful distance — don’t approach them on the mountainside.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Isolation', text: 'Faro is remote even by Yukon standards — check road and weather conditions before winter travel.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife on the Road', text: 'Watch for moose and other large animals on the highway, especially at dawn and dusk.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Pacific Time: UTC-8 in winter, UTC-7 in summer — the same as Whitehorse.' },
    { icon: '📶', iconSrc: '/icons/attractions/ph_cell-signal-full-thin.svg', title: 'Limited Services', text: 'This is a small, remote community — cell coverage and services are limited outside town.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Faro is on the traditional territory of the Ross River Dena Council and the Selkirk First Nation.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Faro Community Health Centre', 'Staffing can be limited — check status before relying on it', 'For emergencies call 911 · Yukon HealthLine 811'] },
  ],
};

export default FARO;
