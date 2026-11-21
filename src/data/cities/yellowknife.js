// Yellowknife — данные страницы /city/yellowknife (Йеллоунайф,
// СЕВЕРО-ЗАПАДНЫЕ ТЕРРИТОРИИ)
// Видео в бесплатных банках нет (Pexels — безымянные зимние реки и
// Эдмонтон). В шапке фото с Wikimedia Commons — панорама центра города
// с отеля Explorer, белая ночь конца июня, автор Daniel Case, 28.06.2015,
// CC BY-SA 3.0. Лицензия требует автора.
// Население — перепись 2021: 20 340 (+3.9% к 2016, 19569); крупнейший
// город территории, где проживает около половины её населения
// (41 070 на всю территорию в 2021).
// Больница — Stanton Territorial Hospital; источники расходятся в
// номере дома (548 или 550 Byrne Rd) — указываем улицу без точного
// номера. ER заявлено 24/7, это референтная больница для всей
// территории и региона Китикмеот в Нунавуте.
// Транспорт — Yellowknife Transit: новые тарифы с 1 октября 2024 —
// $2 за разовую поездку, 10 поездок $18 (полный тариф)/$12 (льготный),
// годовой абонемент $750/$500; точных данных на 2026 не нашли, не
// утверждаем, что цены не изменились.
// Важный контекст: в августе 2023 около 20 000 жителей были эвакуированы
// из-за лесного пожара, порядок снят 6 сентября 2023; город создал
// отдельное подразделение по готовности к ЧС после независимого разбора
// ситуации — упоминаем как контекст для сезона пожаров, не как текущую
// угрозу.
// Налог — в NWT нет территориального налога с продаж, только
// федеральный GST 5% (как в Юконе, Альберте, Нунавуте).
// Из общих знаний: статус столицы и "алмазной столицы" Канады, Old
// Town, Ragged Ass Road, Prince of Wales Northern Heritage Centre,
// Great Slave Lake, северное сияние, время в пути.

export const YELLOWKNIFE = {
  slug: 'yellowknife',
  name: 'Yellowknife',
  province: 'Northwest Territories',
  provinceId: 'nt',
  region: 'NT',
  tag: 'Northwest Territories · Diamond & Aurora Capital',
  accentLevel: 'blue',
  heroIcon: '🌌',
  heroImage: '/Cities/Yellowknife/hero.jpg',
  heroCredit: 'Photo: Daniel Case / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 62.4540, lon: -114.3718 },
  subtitle: 'Capital on the Shore of Great Slave Lake',
  description:
    'Built on the north shore of Great Slave Lake, Yellowknife grew from a 1930s gold-rush camp into the territorial capital and one of the best places on Earth to see the northern lights. Colourful houseboats and float planes fill Old Town, diamonds from nearby mines flow through downtown, and the midnight sun and aurora mark the turning of its extreme seasons.',

  actions: [
    { label: 'Explore Yellowknife', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈20K (2021)' },
    { label: 'Share of NWT', value: '≈50% of the territory' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Mountain (UTC-7/-6)' },
    { label: 'To Edmonton', value: '≈2 h by plane' },
    { label: 'Best Aurora Season', value: 'Late Aug — April' },
  ],

  badges: ['Northern Lights', 'Diamond Capital', 'Great Slave Lake'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '20,340', label: 'People in Yellowknife in the 2021 census — about half of all NWT residents', level: 'blue' },
    { value: '240+', label: 'Clear nights a year on average — part of why aurora odds here are so high', level: 'purple' },
    { value: '1934', label: 'Decade gold was first found nearby, sparking the town that became Yellowknife', level: 'gold' },
    { value: '5%', label: 'Sales tax — NWT charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Government offices, shops and the city’s tallest buildings',
      details: {
        "lead": "Government offices, shops and the city’s tallest buildings, with the Legislative Assembly and the NWT Diamond and Jewellery Centre.",
        "see": [
          {
            "title": "Legislative Assembly",
            "text": "At 4570 48th Street; free tours, weekdays at 10:30 am September to May (a 2 pm tour is added June to August)."
          },
          {
            "title": "NWT Diamond and Jewellery Centre",
            "text": "At 5105 49th Street, phone (867) 920-7108; reviewers describe a short video and a chance to polish a diamond; hours are inconsistent, so call ahead."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Public tours do not run on statutory holidays; the building closes only December 25, 26 and January 1."
          }
        ],
        "link": {
          "label": "NWT Legislative Assembly: tours",
          "url": "https://www.ntlegislativeassembly.ca/visit-learn/explore-assembly/tours"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Old Town', icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', tag: 'Historic', tagLevel: 'purple', meta: 'Colourful cabins, float planes and houseboats on the water',
      details: {
        "lead": "Colourful cabins, float planes and houseboats on the water, the original mining-era settlement.",
        "see": [
          {
            "title": "Bush Pilot’s Monument",
            "text": "A hilltop viewpoint, the highest point over Old Town and the new town, looking over houseboats and float planes; one guide lists it as open at all hours."
          },
          {
            "title": "Ragged Ass Road",
            "text": "A short, famously named street in Old Town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the bay, a short drive or walk from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Dress warmly: one visitor recorded −26 °C."
          }
        ],
        "link": {
          "label": "Bush Pilot’s Monument (Tripadvisor)",
          "url": "https://www.tripadvisor.ca/Attraction_Review-g154966-d8093454-Reviews-or60-Bush_Pilot_s_Monument-Yellowknife_Northwest_Territories.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Ragged Ass Road', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Local Icon', tagLevel: 'olive', meta: 'A short, famously named street in Old Town',
      details: {
        "lead": "A short, famously named street in Old Town.",
        "see": [
          {
            "title": "The street",
            "text": "Part of the colourful, sometimes eccentric Old Town housing; the sign is a popular photo."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Old Town."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          },
          {
            "label": "Good to know",
            "text": "Homes are private; photograph from the street."
          }
        ],
        "link": {
          "label": "Bush Pilot’s Monument (Tripadvisor)",
          "url": "https://www.tripadvisor.ca/Attraction_Review-g154966-d8093454-Reviews-or60-Bush_Pilot_s_Monument-Yellowknife_Northwest_Territories.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Frame Lake', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Lake', tagLevel: 'blue', meta: 'A lake within the city, ringed by a walking trail',
      details: {
        "lead": "A lake within the city, ringed by a walking trail, near the Prince of Wales Northern Heritage Centre.",
        "see": [
          {
            "title": "Heritage Centre",
            "text": "The territorial museum (phone 867-767-9347); free entry, donations welcome."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Inside the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Listed hours conflict (about Tuesday to Sunday 10 am–5 pm); confirm at pwnhc.ca."
          }
        ],
        "link": {
          "label": "Prince of Wales Northern Heritage Centre",
          "url": "https://spectacularnwt.com/attractions/prince-of-wales-northern-heritage-centre/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Niven Lake', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Trails', tagLevel: 'safe', meta: 'A residential area with lakeside walking paths',
      details: {
        "lead": "A residential area with lakeside walking paths.",
        "see": [
          {
            "title": "Paths",
            "text": "Lakeside walking paths; no visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the city."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "Spectacular NWT",
          "url": "https://spectacularnwt.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Great Slave Lake Shore', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Harbour', tagLevel: 'danger', meta: 'The bay and marina on one of the world’s deepest lakes',
      details: {
        "lead": "The bay and marina on Great Slave Lake, one of the deepest lakes in North America.",
        "see": [
          {
            "title": "Dettah ice road",
            "text": "The 2025–26 road opened on December 22, 2025 and closed on April 24, 2026; the 5-year average opening is January 2. No 2026–27 date yet."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the lakeshore by the city."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "Check Drive NWT for ice conditions before any ice trip."
          }
        ],
        "link": {
          "label": "Cabin Radio: Dettah ice road",
          "url": "https://cabinradio.ca/273232/news/yellowknife/dettah-ice-road-has-opened-for-2025-26-gnwt-says/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Northern Lights Viewing',
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      text: 'Yellowknife sits under the auroral oval and is one of the most reliable places to see the northern lights. Tourism sources claim up to 240 nights a year, which is an upper bound, not a forecast; the main season runs mid-November to early April, with good chances in late August and September too.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "Yellowknife sits under the auroral oval and is one of the most reliable places to see the northern lights.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Mid-November to early April per the City, with good chances in late August and September; December to early April is prime."
              },
              {
                "title": "The claim",
                "text": "Up to 240 nights a year is a tourism claim, not an official count."
              },
              {
                "title": "Aurora Village",
                "text": "Listed from November 20, 2026 to April 7, 2027, with a $50 holiday supplement from December 23 to January 2; confirm on its site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Dress warm",
                "text": "Winter nights are very cold."
              },
              {
                "title": "Free",
                "text": "Watching is free; tours are paid."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to watch; tours paid."
          },
          {
            "label": "Getting there",
            "text": "Out of the city lights."
          },
          {
            "label": "Best time",
            "text": "Clear nights from mid-November to early April."
          }
        ],
        "link": {
          "label": "Northern lights in Yellowknife 2026–27",
          "url": "https://rove.me/to/northwest-territories/northern-lights-in-yellowknife"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Town & Ragged Ass Road',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Wander the colourful cabins, float plane bases and houseboats of Old Town, including the famously named Ragged Ass Road.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'purple' }],
      details: {
        "lead": "Colourful cabins, float plane bases and houseboats of Old Town, including the famously named Ragged Ass Road.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bush Pilot’s Monument",
                "text": "A hilltop viewpoint over Old Town, the houseboats and float planes."
              },
              {
                "title": "Houses",
                "text": "Colourful, sometimes eccentric homes."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Dress warmly."
              },
              {
                "title": "Respect",
                "text": "Homes are private."
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
            "text": "A short drive or walk from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Bush Pilot’s Monument (Tripadvisor)",
          "url": "https://www.tripadvisor.ca/Attraction_Review-g154966-d8093454-Reviews-or60-Bush_Pilot_s_Monument-Yellowknife_Northwest_Territories.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Prince of Wales Northern Heritage Centre',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The territorial museum, covering Dene, Inuvialuit and settler history, the gold rush and the diamond mining industry.',
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "The territorial museum on Dene, Inuvialuit and settler history, the gold rush and diamond mining.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Free; donations welcome."
              },
              {
                "title": "Hours",
                "text": "Listings conflict: about Tuesday to Sunday 10 am–5 pm, closed Mondays; another lists Thursday to 8:30 pm."
              },
              {
                "title": "Closed",
                "text": "Closed Christmas Day and New Year’s Day."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Phone 867-767-9347 or check pwnhc.ca."
              },
              {
                "title": "Winter",
                "text": "No winter closure or renovation notice was found."
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
            "text": "By Frame Lake."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Spectacular NWT: Heritage Centre",
          "url": "https://spectacularnwt.com/attractions/prince-of-wales-northern-heritage-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Legislative Assembly of the NWT',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A distinctive circular building housing the territorial government, with free public tours available — check current hours.',
      tags: [{ label: 'Architecture', level: 'gold' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A distinctive circular building at 4570 48th Street with free public tours.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Tours",
                "text": "English tours weekdays at 10:30 am from September to May; a 2 pm tour added June to August; French tours Tuesday and Thursday at 1:30 pm."
              },
              {
                "title": "Building hours",
                "text": "Weekdays 8 am–6 pm; closed December 25, 26 and January 1."
              },
              {
                "title": "Free",
                "text": "Tours are free; parking is free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Holidays",
                "text": "No public tours on statutory holidays; an audio tour is available."
              },
              {
                "title": "Conflicts",
                "text": "Other pages show different times; check the official site."
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
            "text": "4570 48th Street."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "NWT Legislative Assembly: tours",
          "url": "https://www.ntlegislativeassembly.ca/visit-learn/explore-assembly/tours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Great Slave Lake',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'One of the deepest lakes in North America, right at the city’s edge — boat tours, fishing and ice roads depending on the season.',
      tags: [{ label: 'Scenic', level: 'blue' }, { label: 'Seasonal activities', level: 'purple' }],
      details: {
        "lead": "One of the deepest lakes in North America, at the city’s edge, with boat tours, fishing and ice roads by season.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dettah ice road",
                "text": "In 2025–26 it ran December 22 to April 24; construction takes about 5–7 days once the ice is thick enough."
              },
              {
                "title": "Average dates",
                "text": "The 5-year average opening is January 2 and closing April 13."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2026–27",
                "text": "No opening date is announced yet; check Drive NWT."
              },
              {
                "title": "Safety",
                "text": "Do not go on the ice without local advice."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view; tours paid."
          },
          {
            "label": "Getting there",
            "text": "At the edge of the city."
          },
          {
            "label": "Best time",
            "text": "Summer for boats, winter for the ice road."
          }
        ],
        "link": {
          "label": "NWT winter roads: average dates",
          "url": "https://www.inf.gov.nt.ca/en/services/highways-ferries-and-winter-roads/winter-roads-average-openclose-dates"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Diamond Mines & Jewellery',
      icon: '💎', iconSrc: '/icons/attractions/ph_diamond-thin.svg',
      text: 'The NWT Diamond and Jewellery Centre (5105 49th Street) sells stones mined, cut and polished in the territory. Diavik, the largest nearby mine, ended production on March 26, 2026.',
      tags: [{ label: 'Shopping', level: 'gold' }, { label: 'Unique', level: 'purple' }],
      details: {
        "lead": "The NWT Diamond and Jewellery Centre sells stones mined, cut and polished in the territory.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Visit",
                "text": "Book by phone or online; a diamond is scanned, planned, cut and polished, and reviewers mention a short video and a chance to polish a stone."
              },
              {
                "title": "Address",
                "text": "5105 49th Street; phone (867) 920-7108."
              },
              {
                "title": "Mines",
                "text": "Diavik’s final day of production was March 26, 2026; the status of Ekati was not found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listed hours are inconsistent; call ahead."
              },
              {
                "title": "Claim",
                "text": "The “diamond capital of Canada” label is a tourism claim."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "A demo is free per one review; stones are for sale."
          },
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Spectacular NWT: NWT Diamond Centre",
          "url": "https://spectacularnwt.com/amenities/nwt-diamond-centre/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Lake, Tundra and Northern Sky',
  outdoor: [
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Tours', dist: 'Outside the city', text: 'Guided viewing at dedicated aurora camps away from city lights.' },
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Frame Lake Trail', dist: 'Downtown', text: 'An easy loop walk right in the city.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Ice Fishing', dist: 'Great Slave Lake', text: 'A classic winter activity on the frozen lake.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Boating & Kayaking', dist: 'Great Slave Lake', text: 'Summer paddling and boat tours from Old Town.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Dog Sledding', dist: 'Outside the city', text: 'A popular winter activity with local outfitters.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Midnight Sun', dist: 'Midsummer', text: 'Nearly 24-hour daylight around the summer solstice.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Northern Fish', area: 'Local restaurants', areaLevel: 'blue', text: 'Arctic char, whitefish and trout from Great Slave Lake.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Game Meat', area: 'Local menus', areaLevel: 'danger', text: 'Caribou and other northern specialties.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'gold', text: 'Coffee shops serving a diverse northern capital.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Pubs & Breweries', area: 'Downtown', areaLevel: 'purple', text: 'Local bars, including NWT’s own breweries.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Summer', areaLevel: 'safe', text: 'Seasonal outdoor market with local vendors.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'olive', text: 'Blueberries and cranberries from the surrounding land.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice leaves Great Slave Lake as days lengthen fast.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Midnight sun', text: 'Near round-the-clock daylight for boating, fishing and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September', level: 'danger', rating: 3, note: 'Aurora returns', text: 'Darkness returns, bringing back the best northern lights viewing.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'October — March', level: 'blue', rating: 5, note: 'Aurora season', text: 'Deep cold but prime aurora viewing, ice roads and winter festivals.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Yellowknife Airport (YZF) has flights to Edmonton, Calgary and other hubs, plus connections across the NWT.',
      time: '≈2 h from Edmonton',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 3 connects Yellowknife to the rest of the territory and, via Alberta highways, to southern Canada — a long drive through remote country.',
      time: '≈15 h from Edmonton',
    },
    {
      icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Ice Road',
      text: 'In winter, ice roads extend travel options across frozen lakes to remote communities and mine sites.',
      time: 'Winter only',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Limited intercity coach options connect Yellowknife to southern Canada. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near government offices and shops.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+Northwest+Territories', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Yellowknife%2C%20Northwest%20Territories%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Old Town',
      area: 'Waterfront',
      text: 'B&Bs and inns near the houseboats and float planes.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+Old+Town', level: 'blue' },
      ],
    },
    {
      icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg',
      title: 'Aurora Lodges',
      area: 'Outside the city',
      text: 'Dedicated aurora-viewing camps and lodges away from city lights.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yellowknife+aurora+lodge', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Yellowknife Transit',
      text: 'City buses cover downtown and the main residential areas, with a dedicated route for the Folk on the Rocks festival each July.',
      linkLabel: 'Yellowknife Transit',
      linkUrl: 'https://www.yellowknife.ca/en/living-here/transit.aspx',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares introduced October 1, 2024. Confirm current pricing before you ride, since rates can change.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $2', '10-ride pass: $18 (full) / $12 (discount)', 'Annual pass: $750 (full) / $500 (discount)', 'Check current rates'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.yellowknife.ca/en/living-here/transit.aspx',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and Old Town are walkable.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers downtown and residential neighbourhoods.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for aurora viewing outside the city.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Widely available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Aurora tip:',
      text: 'Check the aurora forecast, dress for serious cold, and head a few minutes outside the city lights for the darkest skies and best views.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Northwest Territories: 5% GST only',
    headlineLevel: 'safe',
    description:
      'The Northwest Territories has no territorial sales tax — only the federal 5% GST applies, the lowest combined rate anywhere on this site.',
    comparison: [
      { label: 'Yellowknife / NWT', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', label: 'Aurora tours: 5% GST' },
      { icon: '💎', iconSrc: '/icons/attractions/ph_diamond-thin.svg', label: 'Diamonds and jewellery: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Old Town walking: free' },
      { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', label: 'Heritage Centre admission: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Aurora and fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', title: 'Aurora Season', text: 'Northern lights are best seen from late August to April, away from city lights, on clear nights.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Serious Cold', text: 'Winter temperatures regularly drop well below freezing — dress in layers and watch for frostbite warnings.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Midnight Sun', text: 'In midsummer, Yellowknife gets nearly 24 hours of daylight — pack an eye mask if you need dark to sleep.' },
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Fire Season Awareness', text: 'In August 2023, wildfires forced a three-week evacuation of the entire city — a reminder that summer and fall fire risk is a real, if occasional, concern; check current conditions if visiting in fire season.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Mountain Time: UTC-7 in winter, UTC-6 in summer — the same as Edmonton and Calgary.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Roads', text: 'Ice roads and highways can be affected by extreme cold — check conditions before winter travel.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Yellowknife is on the traditional territory of the Yellowknives Dene First Nation, within the North Slave region of the NWT.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Stanton Territorial Hospital', 'Byrne Rd', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default YELLOWKNIFE;
