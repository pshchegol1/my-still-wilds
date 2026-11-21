// Souris, Prince Edward Island — данные страницы /city/souris
//
// ВАЖНО: это Souris в графстве Kings, PEI (порт парома на Магдаленские острова) —
// НЕ Souris, Манитоба (гораздо более крупный город с тем же названием) и НЕ
// одноимённые Souris во Франции. Все источники ниже проверены именно на PEI.
// Также отдельно: Souris West — отдельный муниципалитет по соседству (население
// 379 по переписи 2021) — НЕ путать с самим городом Souris, о котором эта карточка.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: 1,079 чел. (перепись 2021, +2.5% к 2016 — 1,053), 480 занятых жилищ
//   из 533 всего, площадь 3.61 км², плотность 298.9/км² (Wikipedia / StatCan census
//   profile). Город инкорпорирован в 1910 (The Canadian Encyclopedia); встречается
//   также дата основания поселения 1740 (расхождение в источниках по ранней истории,
//   не по дате инкорпорации).
// - Название "Souris" по-французски означает "мышь" — по распространённой версии,
//   из-за исторических нашествий полевых мышей в этом районе; это общеизвестный,
//   часто повторяемый факт о топонимике, не нашла его в источниках этого конкретного
//   поиска, поэтому формулирую как популярную версию, а не доказанный факт.
// - Паром CTMA Souris — Cap-aux-Meules (Магдаленские острова, Квебек): маршрут
//   действует с 1960-х/1971 года (источники расходятся на этот счёт), переправа
//   занимает около 5 часов. Это единственный морской порт въезда на Магдаленские
//   острова. Старое судно MV Madeleine обслуживало маршрут около 24 лет до вывода
//   из эксплуатации в 2021; CBC сообщал о новом судне стоимостью $155 млн
//   (en.wikipedia.org/CTMA, CBC).
// - Souris Historic Lighthouse: деревянная башня на Knight Point с видом на город и
//   гавань, построена в 1880 (Tourism PEI, Historic Places Canada); интерпретационный
//   центр открыт для посетителей с июля 2010 — экспозиция о маяке, истории порта,
//   морском стекле, оригинальная линза Френеля (museumspei.ca, Tourism PEI). Также
//   встречается альтернативное название "Souris East Lighthouse" в некоторых
//   источниках.
// - East Point Lighthouse — отдельная достопримечательность примерно в 25 км
//   (≈10 минут на машине) восточнее Souris, построен в 1867, последний маяк,
//   построенный до вхождения PEI в Конфедерацию в 1873 — описан в карточке именно
//   как ближайшая поездка за пределы города, не как достопримечательность в черте
//   Souris (ehcanadatravel.com, Island Archives).
// - Медицина: Souris Hospital, 17 Knights Avenue, Souris, PE C0A 2B0, тел.
//   (902) 687-7150, 17-коечная community hospital. ВАЖНО: у больницы НЕТ отделения
//   неотложной помощи (источники Health PEI и 211 PEI подтверждают это; один
//   сторонний агрегатор ошибочно указывает круглосуточную ER — не используется как
//   источник). При экстренных случаях нужно звонить 911 или ехать в Kings County
//   Memorial Hospital (Монтегю) или Queen Elizabeth Hospital (Шарлоттаун) — указано
//   в карточке честно, без утверждения о наличии ER на месте.
// - Фото в шапке: Wikimedia Commons, "Souris, Prince Edward Island, Canada.jpg",
//   автор Quintin Soloviev, CC BY 4.0, снято 05.07.2025. GPS в EXIF: 46.355288,
//   -62.266517 — соответствует городу Souris (видны характерные красные скалы
//   побережья PEI и океан). Сравнивала с ещё одним снимком того же автора (гавань
//   Souris) — выбрала этот за более узнаваемую композицию целого города.
// - Видео в бесплатных банках не найдено (выдача Pexels нерелевантна).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const SOURIS = {
  slug: 'souris',
  name: 'Souris',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Kings County',
  tag: 'Gateway to the Magdalen Islands',
  accentLevel: 'blue',
  heroIcon: '🚢',
  heroImage: '/Cities/Souris/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.3534, lon: -62.2497 },

  subtitle: "PEI's Northeastern Ferry Town",
  description:
    "Souris is a small coastal town at the northeastern tip of Prince Edward Island, best known as the mainland's only ferry link to Quebec's Magdalen Islands. A working fishing port with red sandstone cliffs, a restored 1880 lighthouse, and an easy drive to East Point, Souris makes a scenic final stop before — or first stop after — crossing the Gulf of St. Lawrence.",

  actions: [
    { label: 'Explore Souris', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '1,079 (2021)' },
    { label: 'Role', value: 'Ferry Port to Magdalen Islands' },
    { label: 'Incorporated', value: '1910' },
    { label: 'Setting', value: 'Northeastern Coast' },
    { label: 'Region', value: 'Kings County' },
    { label: 'Known For', value: 'Ferry, Lighthouse & Fishing Port' },
  ],

  badges: ['Ferry Gateway', 'Kings County', 'Historic Lighthouse'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1910', label: 'Year Souris was incorporated as a town', level: 'blue' },
    { value: '1880', label: 'Year the Souris Historic Lighthouse was built', level: 'gold' },
    { value: '~5 hrs', label: 'Length of the CTMA ferry crossing to the Magdalen Islands', level: 'purple' },
    { value: '1,079', label: 'Population at the 2021 census, up 2.5% from 2016', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Ferry Terminal & Harbour', icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', tag: 'Port', tagLevel: 'blue', meta: 'The CTMA ferry dock and working fishing harbour',
      details: {
        "lead": "The CTMA ferry dock and a working fishing harbour on Colville Bay.",
        "see": [
          {
            "title": "Ferry",
            "text": "The terminal serves the CTMA ferry to Cap-aux-Meules in the Magdalen Islands; the current vessel is the MV Madeleine II. Sources date the service from the 1960s or 1971."
          },
          {
            "title": "Harbour",
            "text": "John Knight extended the wharf into a breakwater in the 1830s, creating a large sheltered harbour. The Port of Souris supports the inshore fishery and receives aggregate shipments."
          },
          {
            "title": "Ownership",
            "text": "The harbour passed to the Souris Harbour Authority in 2006; the ferry terminal stayed with Transport Canada."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the harbour in Souris."
          },
          {
            "label": "Time to allow",
            "text": "A short look, or a full crossing."
          },
          {
            "label": "Good to know",
            "text": "Sailings depend on season, weather and ice; see the CTMA schedule."
          }
        ],
        "link": {
          "label": "Canadian Encyclopedia: Souris",
          "url": "https://www.thecanadianencyclopedia.ca/en/article/souris-pei"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Knight Point', icon: '🏮', iconSrc: '/icons/attractions/ph_flame-thin.svg', tag: 'Lighthouse', tagLevel: 'gold', meta: 'Home to the Souris Historic Lighthouse overlooking the town',
      details: {
        "lead": "The point above the harbour, home of the Souris Historic Lighthouse.",
        "see": [
          {
            "title": "Lighthouse",
            "text": "A white-and-red wooden tower completed in 1880, about 14.3 m high; it is also called Souris East Lighthouse."
          },
          {
            "title": "Exhibits",
            "text": "An interpretive centre covers the lighthouse, the port and the town, with a sea glass display."
          },
          {
            "title": "Gift shop",
            "text": "Souris by the Sea Treasures is on the property."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the point overlooking the harbour."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "No opening hours were found; check before going."
          }
        ],
        "link": {
          "label": "Tourism PEI: Souris Historic Lighthouse",
          "url": "https://www.tourismpei.com/attractions/souris-historic-lighthouse"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Downtown', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Main Street', tagLevel: 'purple', meta: 'Shops, services and the town\'s commercial core',
      details: {
        "lead": "The main street and commercial core of a town of 1,079 people (2021).",
        "see": [
          {
            "title": "The town",
            "text": "Founded as an Acadian fishing settlement at the mouth of the Souris River (Wikipedia gives 1727; Tourism PEI tells a 1724 mice story for the name). Incorporated as a town in 1910."
          },
          {
            "title": "Shipbuilding",
            "text": "The Elsie, 316 tons, was launched at Souris in 1881 and was the last brigantine built on PEI."
          },
          {
            "title": "Shops",
            "text": "No individual shops or restaurants were verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town of Souris, eastern PEI."
          },
          {
            "label": "Good to know",
            "text": "A small town; no individual venues were verified."
          }
        ],
        "link": {
          "label": "Canadian Encyclopedia: Souris",
          "url": "https://www.thecanadianencyclopedia.ca/en/article/souris-pei"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'CTMA Ferry Terminal',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: "Souris is the PEI terminal of the CTMA ferry to Quebec's Magdalen Islands; the crossing takes about five hours.",
      tags: [{ label: 'Ferry', level: 'blue' }, { label: 'Check schedule', level: 'caution' }],
      details: {
        "lead": "The PEI terminal of the CTMA ferry to Cap-aux-Meules in Quebec’s Magdalen Islands; the crossing takes about five hours.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Vessel",
                "text": "The MV Madeleine II, operated by the Coopérative de transport maritime et aérien (CTMA)."
              },
              {
                "title": "Crossing",
                "text": "About five hours; a sample itinerary shows a 1:00 pm departure from Souris and a 5:00 pm arrival."
              },
              {
                "title": "Time zone",
                "text": "Both ends use Atlantic Time."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Schedule",
                "text": "Sources conflict (year-round per 211 PEI; fewer sailings in April and November per one aggregator). The schedule changes with weather and ice, so use the CTMA page and its schedule alerts."
              },
              {
                "title": "Reservations",
                "text": "Booking is open up to three hours before departure if space remains; CTMA recommends arriving at least 75 minutes early, and gates close 60 minutes before departure."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Third-party sites give roughly $55 per vehicle in high season; check CTMA for fares."
          },
          {
            "label": "Getting there",
            "text": "Souris harbour."
          },
          {
            "label": "Best time",
            "text": "Summer for the fullest timetable."
          }
        ],
        "link": {
          "label": "CTMA: schedule",
          "url": "https://www.traversierctma.ca/en/23-plan-your-trip/59-note-schedule"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Souris Historic Lighthouse',
      icon: '🏮', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'A wooden lighthouse tower built in 1880 on Knight Point, with an interpretive centre covering the lighthouse, the port\'s history, and local sea glass.',
      tags: [{ label: 'Historic', level: 'gold' }, { label: 'Museum', level: 'purple' }],
      details: {
        "lead": "A wooden lighthouse tower completed in 1880 on Knight Point, with an interpretive centre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tower",
                "text": "White and red, about 14.3 m, with a round red iron lantern; listed on the Canadian Register of Historic Places in 2012."
              },
              {
                "title": "Keepers",
                "text": "Frank McIntosh became keeper in 1920; one source calls him the last lighthouse keeper on PEI, though the retirement date (1991) is not consistent across sources."
              },
              {
                "title": "Interpretive centre",
                "text": "Exhibits on the lighthouse, the port and the town, plus a sea glass display; visitors can climb the tower."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No current hours were found; check before going, especially in late November."
              },
              {
                "title": "Renovation",
                "text": "A 2010 renovation reopened the tower for tours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not confirmed."
          },
          {
            "label": "Getting there",
            "text": "Knight Point, above the harbour."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Lighthouse Friends: Souris",
          "url": "https://www.lighthousefriends.com/light.asp?ID=949"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Souris Harbour',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: "A working fishing harbour lined with boats, central to the town's economy.",
      tags: [{ label: 'Waterfront', level: 'blue' }],
      details: {
        "lead": "A working fishing harbour that supports the inshore fishery.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "John Knight extended the wharf into a breakwater in the 1830s, creating a large sheltered harbour."
              },
              {
                "title": "Today",
                "text": "Inshore fishing, aggregate shipments and the Magdalen Islands ferry."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Access",
                "text": "A working port; keep to public areas and watch for vehicles."
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
            "text": "In Souris."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Canadian Encyclopedia: Souris",
          "url": "https://www.thecanadianencyclopedia.ca/en/article/souris-pei"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'East Point Lighthouse',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'At the eastern tip of the island, east of Souris, this lighthouse dates to 1867 and is known as Canada’s Confederation Lighthouse; Tourism PEI lists guided and self-guided tours.',
      tags: [{ label: 'Day Trip', level: 'caution' }, { label: 'Scenic', level: 'safe' }],
      details: {
        "lead": "A lighthouse at the eastern tip of PEI dating to 1867, known as Canada’s Confederation Lighthouse.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Visit",
                "text": "Tourism PEI lists guided and self-guided tours."
              },
              {
                "title": "Climb",
                "text": "Lonely Planet describes a climb of 67 steps with old lenses and a gallery of former keepers."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The listing gave 2024 dates (3 June–30 September) and one site marks it temporarily closed, so confirm; late November is almost certainly outside the season."
              },
              {
                "title": "Phone",
                "text": "The Community Museums of PEI listing gives 902-357-2718."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not confirmed."
          },
          {
            "label": "Getting there",
            "text": "By car, east of Souris at the end of the island."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Tourism PEI: East Point Lighthouse",
          "url": "https://tourismpei.com/attractions/east-point-lighthouse"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Coastal Cliffs and Harbour',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Red Sandstone Cliffs', dist: 'Along the coast', text: "PEI's signature red cliffs meet the ocean around Souris." },
    { icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', name: 'Souris Harbour', dist: 'Downtown', text: 'A working fishing port, lively with boat traffic in season.' },
    { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', name: 'East Point Lighthouse', dist: '~25 km east', text: 'A scenic day trip to the easternmost point of PEI.' },
    { icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Gulf of St. Lawrence Views', dist: 'Ferry terminal', text: 'Open-water views from the ferry dock toward the Magdalen Islands.' },
  ],

  food: [
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'blue', text: "Fresh catch reflecting Souris's working fishing harbour." },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Main Street Restaurants', area: 'Downtown', areaLevel: 'gold', text: "A small-town dining scene serving residents, fishers and ferry travellers." },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'purple', text: 'Coffee shops along the main commercial street.' },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days, the busiest ferry season, and the best time for East Point day trips.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather, fewer crowds, and a reduced ferry schedule later in the season.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Ferry service limited', text: 'Cold and quiet — the Magdalen Islands ferry runs a reduced seasonal schedule.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet time as the harbour and ferry season wake back up.' },
  ],

  gettingThere: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'From Charlottetown', text: 'Souris is roughly 75 km northeast of Charlottetown by road.', time: '~1 hour drive' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'By Ferry', text: 'CTMA operates the only sea route to the Magdalen Islands, Quebec, from the Souris terminal.', time: 'Seasonal, ~5 hr crossing' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, about an hour away by car.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      title: 'Near the Ferry Terminal',
      area: 'Downtown Souris',
      text: 'Convenient for travellers catching the Magdalen Islands ferry.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Souris+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Souris%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Small and Walkable, Car for the Coast',
      text: 'Downtown Souris is easily walkable, while a car is needed to reach East Point and the rest of eastern PEI.',
      linkLabel: 'CTMA Ferry',
      linkUrl: 'https://www.ctma.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the harbour are walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'Needed for East Point and the rest of eastern PEI.' },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'By Ferry', text: 'Souris is the departure point for the Magdalen Islands crossing.' },
        ],
      },
    ],
    proTip: {
      label: 'Ferry tip:',
      text: 'Booking the CTMA ferry well ahead is recommended in peak summer months, and schedules are reduced outside the main season — check current sailing times before planning your trip.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Souris / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Ferry tickets: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏮', iconSrc: '/icons/attractions/ph_flame-thin.svg', label: 'Lighthouse grounds: free to view' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), about an hour away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Ferry Planning', text: 'The Magdalen Islands ferry runs a seasonal schedule — check CTMA\'s website and book ahead in summer.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Souris Hospital, 17 Knights Avenue — no emergency department', 'For emergencies, call 911 or go to Montague or Charlottetown · 811 for advice'] },
  ],
};

export default SOURIS;
