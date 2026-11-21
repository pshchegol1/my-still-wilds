// Winnipeg — данные страницы /city/winnipeg (Виннипег, МАНИТОБА)
// Видео Виннипега в бесплатных банках нет: Pexels отдаёт Эдмонтон,
// ролик с Законодательным собранием вертикальный (7 с), а таймлапс
// "dome roof" с тегом Winnipeg снят в России (панельки, тарелки).
// В шапке фото с Wikimedia Commons — мост Esplanade Riel и Музей прав
// человека в сумерках, автор Ethan Sahagun, июль 2026, CC BY 4.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (749 607 город, 834 678 агломерация).
// Тарифы — winnipeg.ca/…/transit/fares (2026). Налог на проживание
// 6% с 1 апреля 2024 (assessment.winnipeg.ca), RST 7%, GST 5%.
// The Forks, Exchange District, Saint-Boniface, Qaumajuq, поезда VIA —
// из общих знаний.

export const WINNIPEG = {
  slug: 'winnipeg',
  name: 'Winnipeg',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Where the Red Meets the Assiniboine',
  accentLevel: 'gold',
  heroIcon: '🌉',
  heroImage: '/Cities/Winnipeg/hero.jpg',
  heroCredit: 'Photo: Ethan Sahagun / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.8951, lon: -97.1384 },
  subtitle: 'Heart of the Prairies',
  description:
    'At the forks of the Red and Assiniboine rivers, a meeting place for thousands of years, Winnipeg grew into the gateway of the Canadian West. Today it is a city of brick warehouse districts, a striking human rights museum, a French-speaking quarter and long, festival-filled winters — and the starting point for trips to Lake Winnipeg, Riding Mountain and the polar bears of Churchill.',

  actions: [
    { label: 'Explore Winnipeg', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈750K (2021)' },
    { label: 'Metro Area', value: '≈835K' },
    { label: 'Language', value: 'English · French' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Airport', value: 'YWG · ≈20 min' },
    { label: 'To Lake Winnipeg', value: '≈1 h by car' },
  ],

  badges: ['Prairie Capital', 'The Forks', 'Human Rights Museum'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '749,607', label: 'People in the 2021 census — Manitoba’s capital and by far its largest city', level: 'blue' },
    { value: '2', label: 'Rivers meet at The Forks — the Red and the Assiniboine', level: 'gold' },
    { value: 'Treaty 1', label: 'Winnipeg lies on Treaty 1 territory and the homeland of the Red River Métis', level: 'purple' },
    { value: '$3.10', label: 'A bus ride with a peggo card ($3.45 cash); kids 11 and under ride free with an adult', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'The Forks', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Riverside', tagLevel: 'gold', meta: 'Market hall · River walks · Skating trail on the ice in winter',
      details: {
        "lead": "Where the Red and Assiniboine rivers meet: a market, river paths and, when the ice is safe, a skating trail on the frozen rivers.",
        "see": [
          {
            "title": "The Forks Market",
            "text": "The market buildings are listed as open daily from 7 am to 10 pm; shops usually open at 10 am and the food hall at 11 am, and individual vendors set their own hours."
          },
          {
            "title": "Nestaweya River Trail",
            "text": "The skating trail on the frozen rivers has no fixed opening or closing date. It depends on ice and weather; last season it opened around New Year’s, and no 2026–27 date has been announced."
          },
          {
            "title": "Skate rentals",
            "text": "Iceland Skate Rentals, in the Market Tower atrium, is listed open daily 10 am–10 pm, weather permitting."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown, a short walk from Union Station and the Exchange District."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours, longer with the museum."
          },
          {
            "label": "Good to know",
            "text": "The ice is groomed late at night or early in the morning, so watch for machines. Check theforks.com for conditions."
          }
        ],
        "link": {
          "label": "The Forks: River Trail",
          "url": "https://www.theforks.com/events/river-trail"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Exchange District', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Early-1900s warehouses and terra-cotta facades · Galleries, bars and theatres',
      details: {
        "lead": "About 20 blocks of early-1900s warehouses and terra-cotta-clad office buildings, a National Historic Site since 1997.",
        "see": [
          {
            "title": "The streets",
            "text": "More than 100 turn-of-the-century buildings on narrow angled streets and covered alleys. It is one of Canada’s largest designated historic districts."
          },
          {
            "title": "Galleries and theatres",
            "text": "Galleries, bars and theatres sit in the old warehouses."
          },
          {
            "title": "Walking tours",
            "text": "Guided and self-guided walking tours are offered; check the district’s site for the current schedule."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown, a short walk from The Forks and City Hall."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Best seen on foot; look up at the upper floors and the terra-cotta details."
          }
        ],
        "link": {
          "label": "City of Winnipeg: Exchange District",
          "url": "https://www.winnipeg.ca/people-culture/winnipegs-history/heritage-conservation/exchange-district-national-historic-site"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saint-Boniface', icon: '⚜️', iconSrc: '/icons/attractions/ph_crown-thin.svg', tag: 'French quarter', tagLevel: 'blue', meta: 'Francophone heart of the city · Cathedral ruins and Louis Riel’s grave',
      details: {
        "lead": "The French-speaking quarter across the Red River, with the cathedral shell and Louis Riel’s grave.",
        "see": [
          {
            "title": "Saint-Boniface Cathedral",
            "text": "A fire on July 22, 1968 destroyed the interior of the 1905–08 basilica. The façade and stone walls survive, and a smaller church designed by Étienne Gaboury was built inside them and blessed in 1972."
          },
          {
            "title": "Louis Riel’s grave",
            "text": "Riel is buried in the cathedral cemetery. The grave is modest; visit with respect."
          },
          {
            "title": "Musée de Saint-Boniface",
            "text": "At 494 Taché Avenue, with Riel’s coffin and moccasins on display, per one listing. The museum’s site said it was closed and would reopen gradually from October 19, 2026, so phone (204) 237-4500 before going."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the Esplanade Riel footbridge from The Forks, or by bus."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Museum hours before the closure were around 12–4 pm on most days; confirm current hours."
          }
        ],
        "link": {
          "label": "Le Musée de Saint-Boniface",
          "url": "https://msbm.mb.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Osborne Village', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Lively', tagLevel: 'danger', meta: 'Dense, walkable strip of cafés, bars and shops south of the Legislature',
      details: {
        "lead": "A walkable strip of independent shops, vintage stores, record shops, cafés and bars south of the Legislature.",
        "see": [
          {
            "title": "Osborne Street",
            "text": "Independent boutiques, vintage stores, record shops and coffee spots, close together."
          },
          {
            "title": "Side streets",
            "text": "Locals recommend the side streets off Osborne for smaller cafés and vintage shops."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of downtown across the Assiniboine; buses run along Osborne."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The strip has had storefront vacancies in recent years, so check that a shop is still open before you go."
          }
        ],
        "link": {
          "label": "Travel Manitoba: shopping in Osborne Village",
          "url": "https://www.travelmanitoba.com/blog/everything-you-need-to-know-about-shopping-eating-and-drinking-in-osborne-village/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Corydon & Wolseley', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Leafy', tagLevel: 'safe', meta: 'Patios on Corydon Avenue · Elm-lined streets and old houses in Wolseley',
      details: {
        "lead": "Corydon Avenue’s patios and restaurants, and the leafy streets of Wolseley.",
        "see": [
          {
            "title": "Corydon Avenue",
            "text": "Between Stafford Street and Pembina Highway, with boutiques and restaurants, including many sushi places and the gelato at Nucci’s. The “Little Italy” name is used less now that some Italian restaurants have closed."
          },
          {
            "title": "Wolseley",
            "text": "Elm-lined residential streets with older houses."
          },
          {
            "title": "Wolseley Farmers’ Market",
            "text": "A seasonal market, listed on Tuesdays and Thursdays; confirm the days."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South and west of downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Patios are a summer thing."
          }
        ],
        "link": {
          "label": "Little Italy (Corydon), Winnipeg",
          "url": "https://en.wikipedia.org/wiki/Little_Italy,_Winnipeg"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Chinatown & West End', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: 'Diverse', tagLevel: 'olive', meta: 'Chinatown arch · West End murals · Large Filipino community',
      details: {
        "lead": "The Chinatown arch and the West End’s murals, in a mostly residential area with a large Filipino community.",
        "see": [
          {
            "title": "Chinatown",
            "text": "The Chinatown Arch connects the Dynasty and Mandarin buildings. The Dynasty Building, at 180 King Street, was completed in 1987."
          },
          {
            "title": "West End murals",
            "text": "More than 50 murals, among the largest collections of outdoor murals in the city, including along Sargent Avenue."
          },
          {
            "title": "Filipino community",
            "text": "A large Filipino population (about 21% in the 2011 census), with bakeries and restaurants."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Chinatown is next to the Exchange District; the West End is a bus ride west."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The murals are spread along the streets; a walk or a mural tour is the best way to see them."
          }
        ],
        "link": {
          "label": "Chinatown, Winnipeg",
          "url": "https://en.wikipedia.org/wiki/Chinatown,_Winnipeg"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Canadian Museum for Human Rights',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A spiralling glass-and-stone building at The Forks devoted to human rights stories from Canada and around the world. Ramps of glowing alabaster lead up to the Tower of Hope, with views over the city.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A museum on human rights stories from Canada and around the world, at The Forks, with ramps of glowing alabaster leading up to the Tower of Hope.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Tuesday to Sunday 10 am–5 pm; closed Mondays."
              },
              {
                "title": "Free days",
                "text": "Listed free on Canada Day (July 1) and Human Rights Day (December 10, 2026)."
              },
              {
                "title": "Tower of Hope",
                "text": "The top of the building has views over the city."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "About $23 for adults, $18 for seniors and students, $11 for youth on one listing; older guides give lower prices. Confirm on humanrights.ca."
              },
              {
                "title": "Other free offers",
                "text": "Sources disagree on weekly free hours; do not rely on them."
              },
              {
                "title": "Heavy subjects",
                "text": "Some galleries deal with genocide and abuse; plan time and rest."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $23 for adults."
          },
          {
            "label": "Getting there",
            "text": "At The Forks, downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Canadian Museum for Human Rights",
          "url": "https://humanrights.ca/visit"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Forks',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'The meeting place of two rivers and a gathering spot for thousands of years. Now a National Historic Site with a food hall, riverside paths and, in winter, a skating trail on the frozen river ice when conditions allow.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "The meeting place of the Red and Assiniboine rivers, now a National Historic Site with a market, river paths and a winter skating trail.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Market",
                "text": "Buildings open 7 am–10 pm; shops from about 10 am, food hall from 11 am."
              },
              {
                "title": "River Trail",
                "text": "The Nestaweya River Trail opens only when the ice is safe; last season it opened near New Year’s."
              },
              {
                "title": "Riverside paths",
                "text": "Walks along both rivers, year-round."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "No fixed dates",
                "text": "No 2026–27 opening date has been announced."
              },
              {
                "title": "Skates",
                "text": "Rentals are available in the Market Tower atrium."
              },
              {
                "title": "Hours",
                "text": "Vendors keep their own hours; check theforks.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk; the trail itself is free, rentals and food are extra."
          },
          {
            "label": "Getting there",
            "text": "Downtown, by Union Station."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "The Forks",
          "url": "https://www.theforks.com/events/river-trail"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Exchange District',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'One of the best-preserved early-20th-century commercial districts in North America — a National Historic Site so intact that its brick streets have doubled for American cities in films.',
      tags: [{ label: 'Free to explore', level: 'safe' }, { label: 'Walking tours', level: 'purple' }],
      details: {
        "lead": "About 20 blocks and more than 100 turn-of-the-century buildings, a National Historic Site since 1997 and one of Canada’s largest designated historic districts.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Architecture",
                "text": "Stone and brick warehouses, terra-cotta-clad office buildings, narrow angled streets and covered alleys."
              },
              {
                "title": "Culture",
                "text": "Galleries, theatres and bars in the old warehouses."
              },
              {
                "title": "Film",
                "text": "Local sources say its brick streets have doubled for American cities in films."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walk it",
                "text": "Compact enough to see on foot."
              },
              {
                "title": "Tours",
                "text": "Walking tours are offered; check the current schedule."
              },
              {
                "title": "Pair it",
                "text": "The Forks is a short walk away."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk."
          },
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Exchange District National Historic Site",
          "url": "https://www.winnipeg.ca/people-culture/winnipegs-history/heritage-conservation/exchange-district-national-historic-site"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Winnipeg Art Gallery – Qaumajuq',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The art gallery and its Inuit art centre, Qaumajuq, home to one of the largest public collections of contemporary Inuit art in the world. Check the gallery site for current hours.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Inuit art', level: 'blue' }],
      details: {
        "lead": "The gallery holds nearly 30,000 artworks, including what it describes as the largest public collection of contemporary Inuit art in the world, shown in Qaumajuq.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Inuit art",
                "text": "The Inuit collection is put at roughly 14,000 pieces on some sources."
              },
              {
                "title": "Hours",
                "text": "Sources disagree. A July 2026 listing gives Wednesday 11 am–9 pm and Thursday to Sunday 11 am–5 pm, closed Monday and Tuesday."
              },
              {
                "title": "Admission",
                "text": "$18 general and $9 for ages 18–25 during June 19–September 7, 2026 (Canada Strong Pass); free for under 18, Indigenous peoples and members."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free days",
                "text": "Older guides list free Wednesday evenings and a free Sunday each month; not confirmed for 2026."
              },
              {
                "title": "Confirm",
                "text": "Check wag.ca for current hours and prices."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $18 for adults."
          },
          {
            "label": "Getting there",
            "text": "Downtown on Memorial Boulevard."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Winnipeg Art Gallery-Qaumajuq",
          "url": "https://www.wag.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Assiniboine Park & Zoo',
      icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A huge urban park with gardens, the Leo Mol Sculpture Garden and a zoo whose Journey to Churchill exhibit lets you watch polar bears swim overhead.',
      tags: [{ label: 'Park free', level: 'safe' }, { label: 'Zoo paid', level: 'gold' }],
      details: {
        "lead": "A large park with gardens, the Leo Mol Sculpture Garden and a zoo whose Journey to Churchill exhibit is built around polar bears.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Zoo winter hours",
                "text": "October 1, 2026 to March 12, 2027: 9 am–4 pm daily, last entry 3:30 pm."
              },
              {
                "title": "Journey to Churchill",
                "text": "A guided tour including zoo admission is listed at $90 plus GST per person, year-round."
              },
              {
                "title": "Leo Mol Garden",
                "text": "Free; hours conflict (9 am–9 pm on one site, 9 am–6:30 pm on another). The gallery and school-house studio are closed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Zoo admission",
                "text": "No official 2026 general price was found; check assiniboinepark.ca."
              },
              {
                "title": "Dress warmly",
                "text": "The park is open in winter."
              },
              {
                "title": "Under 3",
                "text": "Children two and under are generally free, per a third-party listing."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park free; zoo paid, price unconfirmed."
          },
          {
            "label": "Getting there",
            "text": "West of downtown, along the Assiniboine River."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Assiniboine Park: hours",
          "url": "https://www.assiniboinepark.ca/park/visit/hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Manitoba Legislative Building',
      icon: '🗽', iconSrc: '/icons/attractions/ph_flag-thin.svg',
      text: 'A grand neoclassical legislature topped by the gilded Golden Boy statue. Free guided tours are offered; grounds stretch to the Assiniboine River.',
      tags: [{ label: 'Free tours', level: 'safe' }, { label: 'Heritage', level: 'purple' }],
      details: {
        "lead": "A neoclassical legislature topped by the gilded Golden Boy statue, about 73 m above the ground and visible from outside without a tour.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summer tours",
                "text": "July 1 to Labour Day weekend: free hourly tours daily, 9 am–4 pm, no reservation."
              },
              {
                "title": "September to June",
                "text": "Free tours generally Mondays and Fridays, plus occasional evenings and weekends, with reservation."
              },
              {
                "title": "Golden Boy",
                "text": "On the dome; seen from the grounds."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Bring ID",
                "text": "Photo ID and airport-style security screening are required."
              },
              {
                "title": "Contact",
                "text": "(204) 945-5813 or tour_reservation@mbassembly.ca."
              },
              {
                "title": "Paid alternative",
                "text": "SquarePeg Tours runs a separate paid tour under the Golden Boy on Saturdays at 10 am."
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
            "text": "On Broadway, just north of the Assiniboine River."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Manitoba Legislative Assembly Visitor Tour Program",
          "url": "https://www.travelmanitoba.com/directory/manitoba-legislative-assembly-visitor-tour-program/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Prairie, Lakes and Shield',
  outdoor: [
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'River Skating Trail', dist: 'The Forks · winter', text: 'A long skating and walking trail on the frozen Red and Assiniboine rivers when ice is safe. Open dates depend on the weather.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Lake Winnipeg Beaches', dist: '≈1 h north', text: 'Sandy beaches such as Grand Beach on one of the largest lakes in Canada.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'FortWhyte Alive', dist: 'South Winnipeg', text: 'Lakes, trails, a bison herd and huge flocks of geese in fall.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Oak Hammock Marsh', dist: '≈30 min north', text: 'A restored prairie marsh with boardwalks; spectacular during spring and fall bird migration.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Whiteshell Provincial Park', dist: '≈1 h 30 min east', text: 'Canadian Shield lakes, granite and canoe routes near the Ontario border.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'City paths', text: 'Flat river trails and active-transportation routes across the city.' },
  ],

  food: [
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'North End', areaLevel: 'gold', text: 'A legacy of Ukrainian and Polish immigrants — homemade perogies and kubasa sausage.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Fat Boy', area: 'City-wide', areaLevel: 'danger', text: 'Winnipeg’s signature chili-topped burger, sold at local burger shacks.' },
    { icon: '🍩', iconSrc: '/icons/attractions/ph_cookie-thin.svg', title: 'Jeanne’s Cake', area: 'Local classic', areaLevel: 'purple', text: 'A local favourite: a sponge-and-shortcake dessert sold in supermarkets across the city.' },
    { icon: '🥘', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Filipino Food', area: 'West End · North End', areaLevel: 'safe', text: 'A large Filipino community fills the city with bakeries and turo-turo spots.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'The Forks Market', area: 'The Forks', areaLevel: 'blue', text: 'A food hall with local vendors and a craft-beer bar by the rivers.' },
    { icon: '🥖', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'French Bistros', area: 'Saint-Boniface', areaLevel: 'olive', text: 'Bakeries and bistros in the francophone quarter.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Floods & thaw', text: 'Snow melts in April; the Red River can flood in high-water years. Warm by June, with mosquitoes arriving soon after.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot, sunny and long-days — Folklorama, outdoor patios and beach trips. Bring mosquito repellent.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Geese & colour', text: 'Crisp days, golden trees along the rivers and huge flocks of migrating geese.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Very cold', text: 'One of the coldest big cities on Earth — wind chills below −40 happen. But Festival du Voyageur and the river skating trail make it fun.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Winnipeg James Armstrong Richardson International Airport (YWG) has flights across Canada and to the US. Transit and taxis connect it to downtown.',
      time: '≈20 min to downtown',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Toronto–Vancouver train, the Canadian, stops at Union Station downtown, and Winnipeg is the starting point of the long train north to Churchill. Check schedules — departures are a few times a week.',
      time: 'Union Station · downtown',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway passes through the city. Regina is to the west, Kenora and Lake of the Woods to the east, and the US border is south on Highway 75.',
      time: '≈1 h to the US border',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Winnipeg with other Prairie cities and northwestern Ontario. Check current operators.',
      time: 'Varies',
    },
  ],

  stay: [
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Downtown & The Forks',
      area: 'Walk to the museum',
      text: 'Hotels near The Forks, the Exchange District and the arena.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Winnipeg+Downtown', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Winnipeg%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg',
      title: 'Osborne Village',
      area: 'Lively · Walkable',
      text: 'Rentals and small hotels near cafés and bars, a short walk from the Legislature.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Osborne+Village+Winnipeg', level: 'blue' },
      ],
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'Airport & Polo Park',
      area: 'Convenient',
      text: 'Chain hotels near the airport and the city’s main shopping mall.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Polo+Park+Winnipeg', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Winnipeg Transit',
      text: 'Winnipeg Transit runs the city’s buses, including rapid-transit corridors to the south. Pay with cash or the reloadable peggo card ($5), which gives a cheaper fare.',
      linkLabel: 'Winnipeg Transit',
      linkUrl: 'https://www.winnipeg.ca/services-programs/transportation-roads-parking/transit',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are the City of Winnipeg’s 2026 full fares (ages 17–64). Children 11 and under ride free with a fare-paying customer.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Cash: $3.45', 'peggo e-cash: $3.10', '24-hour e-pass: $11.45', 'Monthly e-pass: $119.35'],
        },
        linkLabel: 'Transit fares',
        linkUrl: 'https://www.winnipeg.ca/services-programs/transportation-roads-parking/transit/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, The Forks and the Exchange are close together; skywalks link many downtown buildings in winter.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat city with riverside trails — great from May to October.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for FortWhyte, beaches and parks outside the city.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
        ],
      },
    ],
    proTip: {
      label: 'Winter tip:',
      text: 'Downtown’s enclosed skywalk system lets you cross many blocks indoors on frigid days — handy between hotels, malls and the arena.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotels and short-term rentals in Winnipeg add the City’s 6% accommodation tax (raised from 5% on April 1, 2024).',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Winnipeg / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST + 6% city accommodation tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', label: 'The Forks & river walks: free' },
      { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', label: 'Legislature guided tours: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Real Cold', text: 'Winter wind chills can drop below −40. Dress in layers, cover exposed skin and check the forecast.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Summer mosquitoes are legendary, especially after wet springs — bring repellent for evenings outdoors.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Spring Floods', text: 'The Red River floods in some springs; riverside trails may close. A floodway channels water around the city.' },
    { icon: '⚜️', iconSrc: '/icons/attractions/ph_crown-thin.svg', title: 'Bilingual Pockets', text: 'Winnipeg is English-speaking, but Saint-Boniface has a strong French-speaking community and services.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — one hour behind Toronto.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Get a peggo', text: 'A $5 peggo card saves on every bus ride and holds day or monthly passes.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Winnipeg is on Treaty 1 territory, the traditional lands of the Anishinaabeg, Cree, Oji-Cree, Dakota and Dene peoples, and the homeland of the Red River Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Health Sciences Centre (HSC)', '820 Sherbrook St — follow signs to Emergency', 'Emergencies: call 911'] },
  ],
};

export default WINNIPEG;
