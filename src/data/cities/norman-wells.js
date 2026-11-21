// Norman Wells — данные страницы /city/norman-wells (Норман-Уэллс,
// СЕВЕРО-ЗАПАДНЫЕ ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — совсем нерелевантная выдача,
// портреты пожилых людей). В шапке фото с Wikimedia Commons — город
// с воздуха на реке Маккензи, автор Quintin Soloviev, 28.09.2019,
// CC BY 4.0 (GPS 65.287, -126.824 — совпадает с Норман-Уэллс; подпись
// к файлу называет население 673 и статус нефтяного города в регионе
// Sahtu — совпадает с переписью). Лицензия требует автора.
// Население — перепись 2021: 673 (-13.5% к 2016, 778).
// ГЛАВНЫЙ АКТУАЛЬНЫЙ ФАКТ: нефть открыта компанией Imperial Oil
// 23.08.1920 (мировой рекорд на тот момент — самая северная скважина);
// добыча то останавливалась (1924), то возобновлялась (НПЗ 1936,
// трубопровод Canol во Вторую мировую — первая нефть пошла по трубе
// 19.12.1943, но до Уайтхорса дошла только 01.04.1945; труба заброшена
// после войны); трубопровод до юга (Norman Wells Pipeline) достроен в
// 1985. Добыча ОСТАНОВЛЕНА в августе 2026 года — 106 лет производства
// завершились 1 сентября 2026 (по собственным материалам Imperial Oil).
// Причина — истощение месторождения и нерентабельность; ответственность
// за энергоснабжение города передана NWT Power Corporation в августе
// 2026. Далее — демонтаж и консервация (3–5 лет), полная рекультивация
// займёт около 20 лет, начало — не раньше 2031 года. Налоги Imperial
// Oil (~$6 млн/год) составляли около 70% бюджета города — это создаёт
// серьёзную экономическую неопределённость для Норман-Уэллса прямо
// сейчас.
// Медцентр — новое здание Sahtú Got'iné Regional Health and Social
// Services Centre открыто (заменило старое здание 40-летней давности);
// точного актуального адреса не нашли — указываем с оговоркой.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5%.
// Из общих знаний: горы Norman Range/Franklin Mountains на фоне, джет-
// боты по Маккензи, статус региона Sahtu, время в пути.

export const NORMAN_WELLS = {
  slug: 'norman-wells',
  name: 'Norman Wells',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · A Century of Oil, Now Closing',
  accentLevel: 'blue',
  heroIcon: '🛢️',
  heroImage: '/Cities/NormanWells/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 65.2822, lon: -126.8325 },
  subtitle: 'On the Mackenzie River, at the End of an Oil Era',
  description:
    "Norman Wells grew up around an oil discovery made in 1920 — once the world's most northerly producing well — and the dramatic wartime Canol Pipeline project of the 1940s. In August 2026, after 106 years, Imperial Oil shut in production here for good, a major turning point for this small Mackenzie River town as it figures out what comes next.",

  actions: [
    { label: 'Explore Norman Wells', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈673 (2021)' },
    { label: 'Known For', value: 'Century-Old Oilfield' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'Road Access', value: 'None year-round — fly in' },
    { label: 'Oil Production', value: 'Ended August 2026' },
  ],

  badges: ['Mackenzie River', 'Oil History', 'Sahtu Region'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1920', label: 'Year Imperial Oil struck oil here — then the world’s most northerly producing well', level: 'gold' },
    { value: '106', label: 'Years of oil production, ending when Imperial shut in the field in August 2026', level: 'danger' },
    { value: '≈70%', label: 'Share of the town’s budget that came from Imperial’s property taxes', level: 'purple' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Shops, services and the airport, close together on the riverbank',
      details: {
        "lead": "Shops, services and the airport, close together on the riverbank.",
        "see": [
          {
            "title": "Services",
            "text": "A small community; no individual shops were verified."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air; the airport is in the town."
          },
          {
            "label": "Time to allow",
            "text": "A day."
          },
          {
            "label": "Good to know",
            "text": "Plan ahead for supplies."
          }
        ],
        "link": {
          "label": "Wikipedia: Norman Wells",
          "url": "https://en.wikipedia.org/wiki/Norman_Wells"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Oilfield Area', icon: '🛢️', iconSrc: '/icons/attractions/ph_gas-can-thin.svg', tag: 'Industry', tagLevel: 'blue', meta: 'The Imperial Oil site now moving into decommissioning',
      details: {
        "lead": "The Imperial Oil site, which shut in production in August 2026 and is moving into decommissioning.",
        "see": [
          {
            "title": "Shutdown",
            "text": "Imperial announced on January 30, 2026 that it would end production; the site safely shut in production in August 2026."
          },
          {
            "title": "Power",
            "text": "NWT Power Corporation took over primary power for the town in August 2026."
          },
          {
            "title": "Next steps",
            "text": "Imperial expects three to five years of interim care and maintenance before larger closure work."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Mackenzie River islands and at the processing plant."
          },
          {
            "label": "Good to know",
            "text": "Not open to visitors; the community’s bulk fuel supply is not changing in the near term."
          }
        ],
        "link": {
          "label": "Imperial Oil: Norman Wells closure",
          "url": "https://www.imperialoil.ca/company/operations/norman-wells"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Mackenzie Riverfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'safe', meta: 'The riverbank the town sits on, with Franklin Mountains views',
      details: {
        "lead": "The riverbank the town sits on, with the Franklin Mountains beyond.",
        "see": [
          {
            "title": "Views",
            "text": "The Mackenzie River and the mountains; the oil wells stand on islands in the river."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "The river freezes in winter."
          }
        ],
        "link": {
          "label": "CBC: Norman Wells after Imperial",
          "url": "https://www.cbc.ca/news/canada/north/norman-wells-imperial-oil-reclamation-9.7069421"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Access', tagLevel: 'purple', meta: 'The town’s main year-round link to the rest of the territory',
      details: {
        "lead": "The town’s main year-round link to the rest of the territory.",
        "see": [
          {
            "title": "Airport",
            "text": "No flight schedule was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Good to know",
            "text": "Weather can delay flights."
          }
        ],
        "link": {
          "label": "Wikipedia: Norman Wells",
          "url": "https://en.wikipedia.org/wiki/Norman_Wells"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Oilfield History Sites',
      icon: '🛢️', iconSrc: '/icons/attractions/ph_gas-can-thin.svg',
      text: 'Norman Wells grew from a 1920 oil strike and the dramatic WWII-era Canol Pipeline project, which ran crude 1,000 km to a refinery in Whitehorse. After 106 years, production ended here in August 2026, closing a major chapter of the town’s history.',
      tags: [{ label: 'History', level: 'gold' }, { label: 'Changing', level: 'caution' }],
      details: {
        "lead": "Norman Wells grew from a 1920 oil strike and the Second World War Canol Pipeline; production ended in August 2026.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Shutdown",
                "text": "Imperial said on January 30, 2026 that the field had reached the end of its productive life; production shut in during August 2026."
              },
              {
                "title": "Facilities",
                "text": "Wells on natural and artificial islands in the Mackenzie River and a central plant that also generated the town’s power."
              },
              {
                "title": "Care and maintenance",
                "text": "Three to five years are expected before larger closure work."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Not open",
                "text": "The site is not open to visitors; ask locally about heritage displays."
              },
              {
                "title": "Canol",
                "text": "The WWII pipeline carried crude about 1,000 km to a refinery in Whitehorse."
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
            "text": "Around the town."
          },
          {
            "label": "Time to allow",
            "text": "A short look."
          }
        ],
        "link": {
          "label": "Imperial Oil: Norman Wells closure",
          "url": "https://www.imperialoil.ca/company/operations/norman-wells"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Mackenzie River Views',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'The town sits right on the Mackenzie River, with the Franklin Mountains (Norman Range) as a dramatic backdrop.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "The town sits on the Mackenzie River, with the Franklin Mountains (Norman Range) behind.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "A wide river and mountains."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free."
              },
              {
                "title": "Winter",
                "text": "Dress for the cold."
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
            "text": "In the town."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Wikipedia: Norman Wells",
          "url": "https://en.wikipedia.org/wiki/Norman_Wells"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canol Heritage Trail',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'The abandoned WWII pipeline route is now a famous, extremely remote backcountry hiking trail starting near Norman Wells — for serious, well-prepared wilderness travellers only.',
      tags: [{ label: 'Expert only', level: 'danger' }, { label: 'Multi-day', level: 'caution' }],
      details: {
        "lead": "The abandoned WWII pipeline route, now an extremely remote backcountry trail for serious, well-prepared travellers.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Route",
                "text": "Starts near Norman Wells."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Experts only",
                "text": "Multi-day wilderness travel; go only with experience and proper preparation."
              },
              {
                "title": "Details",
                "text": "No current permit, access or season information was found; ask Parks or the Sahtu region offices."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies; logistics are costly."
          },
          {
            "label": "Getting there",
            "text": "Starts near Norman Wells."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Wikipedia: Norman Wells",
          "url": "https://en.wikipedia.org/wiki/Norman_Wells"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jet Boat & River Tours',
      icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Boat trips on the Mackenzie River are described as a classic way to see the region’s scale; no current operators were verified, so ask locally.',
      tags: [{ label: 'Guided', level: 'purple' }, { label: 'Seasonal', level: 'gold' }],
      details: {
        "lead": "Boat trips on the Mackenzie River, a classic way to see the region’s scale.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "The Mackenzie River and the Franklin Mountains."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Operators",
                "text": "No current operators or prices were verified; ask locally."
              },
              {
                "title": "Season",
                "text": "Open-water season only."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Guided trips paid."
          },
          {
            "label": "Getting there",
            "text": "From the town."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "CBC: Norman Wells after Imperial",
          "url": "https://www.cbc.ca/news/canada/north/norman-wells-imperial-oil-reclamation-9.7069421"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Mackenzie River and Mountain Views',
  outdoor: [
    { icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'River Boat Tours', dist: 'Mackenzie River', text: 'See the river and surrounding mountains by jet boat.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Canol Heritage Trail', dist: 'From Norman Wells', text: 'A legendary, extremely remote multi-day wilderness hike.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Mackenzie River', text: 'Northern fish species in the river and nearby lakes.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Franklin Mountains Views', dist: 'Across the river', text: 'A dramatic mountain backdrop visible from town.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Regional trails', text: 'A key way of travelling the land in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights visible on clear nights outside summer.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'River Fish', area: 'Local catch', areaLevel: 'blue', text: 'Fish from the Mackenzie River.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties where available.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'purple', text: 'The main supply point for the Sahtu region.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Restaurants', area: 'Town centre', areaLevel: 'gold', text: 'A small dining scene serving residents and visitors.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Town centre', areaLevel: 'safe', text: 'Coffee shops in the compact town centre.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves the Mackenzie River as days lengthen fast.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Open season', text: 'Long daylight for river trips and the Canol Trail’s short hiking window.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 2, note: 'Short window', text: 'A quick transition before freeze-up and winter.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 3, note: 'Ice road season', text: 'Cold and snowy, with winter roads opening seasonal land access.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Norman Wells Airport has scheduled flights connecting to Yellowknife and Inuvik — the town’s only year-round link to the outside world.',
      time: 'Scheduled flights available',
    },
    {
      icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Winter Road',
      text: 'A seasonal winter road connects Norman Wells to other Mackenzie Valley communities and highways when conditions allow.',
      time: 'Winter only',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Barge',
      text: 'Summer barge traffic on the Mackenzie River brings in bulk freight.',
      time: 'Seasonal cargo',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'No scheduled bus service connects Norman Wells to the rest of the territory.',
      time: 'No service',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norman+Wells+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Norman%20Wells%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      title: 'Canol Trail Trips',
      area: 'Guided',
      text: 'Outfitters arrange logistics for the remote Canol Heritage Trail.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Norman+Wells+Northwest+Territories', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Public Transit',
      text: 'Norman Wells is a small, compact town reached on foot, by taxi or by snowmobile — there is no public transit system.',
      linkLabel: 'Norman Wells',
      linkUrl: 'https://normanwells.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
        ],
      },
    ],
    proTip: {
      label: 'Timing tip:',
      text: 'With Imperial Oil’s operations winding down after 2026, services and the town’s economy may shift — check current conditions before planning a visit.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Norman Wells / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 5% GST' },
      { icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'River tours: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Riverfront views: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. River and trail guides: 10–15%.',
  },

  practical: [
    { icon: '🛢️', iconSrc: '/icons/attractions/ph_gas-can-thin.svg', title: 'Town in Transition', text: 'Imperial Oil shut in production here in August 2026 after 106 years, ending a role that provided about 70% of the town’s tax revenue — expect the local economy and services to be in flux for years to come.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In for Most of the Year', text: 'No permanent road connects Norman Wells to the rest of the territory — plan around flights, with a seasonal winter road as the only ground option.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', title: 'Canol Trail Is Serious', text: 'The Canol Heritage Trail is one of the most remote, difficult hikes in Canada — go only with proper preparation, gear and ideally a guide.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Cold Winters', text: 'Winters are long and cold this far north — dress in serious layers.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Yellowknife and Inuvik.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Wildlife Caution', text: 'Bears and other wildlife are present on area trails — carry bear spray and make noise.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Norman Wells is in the Sahtu Region, on the traditional territory of the Sahtu Dene and Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Sahtú Got’iné Regional Health and Social Services Centre', 'Call 911 where available · 811 for advice'] },
  ],
};

export default NORMAN_WELLS;
