// Ottawa — данные страницы /city/ottawa
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Braeson Holland, "drone view over the city of Ottawa".
// Проверено по кадрам: центр города, Верховный суд, Парламент, река
// Оттава с мостами на закате. Оригинал 2560×1440 60 fps, 14 Мбит/с —
// пережат в 1920×1080 30 fps, ~5,2 МБ; постер — первый кадр.
// Центральный блок Парламента закрыт на реконструкцию с 2019 года и,
// по отчётам правительства, откроется не раньше начала 2030-х —
// на странице это сказано прямо, чтобы никто не ехал «в Парламент».
// Население — оценка города на конец 2025 года.

export const OTTAWA = {
  slug: 'ottawa',
  name: 'Ottawa',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Canada’s Capital',
  accentLevel: 'blue',
  heroIcon: '🏛️',
  heroImage: '/Cities/Ottawa/hero-poster.jpg',
  heroVideo: '/Cities/Ottawa/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.4215, lon: -75.6972 },
  subtitle: 'The Capital on the River',
  description:
    'The national capital, on the Ottawa River where Ontario faces Quebec across the water. Parliament on its cliff, a 19th-century canal that freezes into a skateway, the country’s national museums within walking distance of each other — and all of it on unceded Algonquin Anishinaabe land.',

  actions: [
    { label: 'Explore Ottawa', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.12M' },
    { label: 'Languages', value: 'English · French' },
    { label: 'Rideau Canal', value: 'UNESCO site' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Montréal', value: '≈200 km · 2h' },
    { label: 'From Toronto', value: '≈450 km · 4.5h' },
  ],

  badges: ['National Capital', 'Bilingual City', 'Algonquin Territory'],

  bestSeasons: [
    { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '7.8 km', label: 'Rideau Canal Skateway — the largest naturally frozen rink in the world, when winter cooperates', level: 'blue' },
    { value: '2030s', label: 'When Parliament’s Centre Block is expected to reopen — it has been closed for renovation since 2019', level: 'danger' },
    { value: '0', label: 'Days the Skateway opened in winter 2022–23 — a warm year, and a sign of what climate change does here', level: 'caution' },
    { value: '2007', label: 'The Rideau Canal, built 1826–1832, is inscribed as a UNESCO World Heritage Site', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'Parliament & Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Core', tagLevel: 'red', meta: 'Parliament Hill · Sparks Street · Confederation Park · National War Memorial',
      details: {
        "lead": "Parliament Hill, Sparks Street, Confederation Park and the National War Memorial in the centre of the capital.",
        "see": [
          {
            "title": "Parliament Hill tours",
            "text": "Centre Block is closed for rehabilitation, with construction expected to finish around 2030–31. Free guided tours run at West Block and the Senate of Canada Building. Booking ahead is recommended and photo ID is advised."
          },
          {
            "title": "Parliament Welcome Centre",
            "text": "As of mid-2026 its excavation was complete and the lower two of three levels were about 75 per cent built."
          },
          {
            "title": "Alternatives",
            "text": "A free Immersive Experience about Centre Block and a 360-degree virtual tour of Centre Block as it was before closing."
          }
        ],
        "practical": [
          {
            "label": "Getting around",
            "text": "OC Transpo’s 2026 adult single fare is $4.10 by Presto or debit/credit and $4.15 in cash. A day pass is $12.25, which is also the daily cap when tapping Presto."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Tour schedules change; check visit.parl.ca."
          }
        ],
        "link": {
          "label": "Visit Canada’s Parliament",
          "url": "https://visit.parl.ca/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'ByWard Market', icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', tag: 'Old market', tagLevel: 'gold', meta: 'Market laid out in the 1820s · Restaurants and bars · National Gallery nearby',
      details: {
        "lead": "The old market district laid out in the 1820s, Ottawa’s main food, drink and entertainment district, in a period of change.",
        "see": [
          {
            "title": "The market",
            "text": "The farmers’ market runs outdoors from May to October, mostly Saturday mornings, with year-round indoor vendors."
          },
          {
            "title": "A busy district",
            "text": "One guide counts 260+ restaurants and 100+ boutiques in about four blocks."
          },
          {
            "title": "Vendor Village",
            "text": "A new Vendor Village opened on George Street in 2026."
          }
        ],
        "practical": [
          {
            "label": "Looking ahead",
            "text": "The market will mark its 200th anniversary in 2027. City Council approved a revitalisation framework in March 2026."
          },
          {
            "label": "Atmosphere",
            "text": "Reviews are mixed: lively, but rough around the edges late at night."
          },
          {
            "label": "Time to allow",
            "text": "An evening, or a morning for the market."
          }
        ],
        "link": {
          "label": "Ottawa Tourism: ByWard Market",
          "url": "https://ottawatourism.ca/en/about-ottawa/neighbourhoods/byward-market-rideau-street"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Glebe', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'South', tagLevel: 'safe', meta: 'Bank Street shops · Lansdowne Park · Along the canal',
      details: {
        "lead": "Bank Street shops and Lansdowne Park, along the canal.",
        "see": [
          {
            "title": "Bank Street",
            "text": "Independent shops and cafés along the main street."
          },
          {
            "title": "Rideau Canal Skateway",
            "text": "The skateway passes through the Glebe in winter; the 2026 season opened in full on January 5."
          },
          {
            "title": "Lansdowne Park",
            "text": "The park and stadium complex on the canal."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of downtown, on the canal."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Ottawa Tourism",
          "url": "https://ottawatourism.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Centretown & Little Italy', icon: '🍝', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', tag: 'West', tagLevel: 'olive', meta: 'Preston Street restaurants · Dow’s Lake · Chinatown on Somerset',
      details: {
        "lead": "Preston Street’s restaurants, Dow’s Lake and Chinatown on Somerset.",
        "see": [
          {
            "title": "Preston Street",
            "text": "Little Italy’s restaurant street."
          },
          {
            "title": "Dow’s Lake",
            "text": "The canal lake. The skateway’s full 7.8 km runs from Rideau to Library, including Dow’s, when conditions allow."
          },
          {
            "title": "Chinatown",
            "text": "On Somerset Street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South-west of downtown."
          },
          {
            "label": "Time to allow",
            "text": "A meal or an afternoon."
          },
          {
            "label": "Good to know",
            "text": "Skateway opening depends on ice thickness of at least 30 cm."
          }
        ],
        "link": {
          "label": "Ottawa Tourism",
          "url": "https://ottawatourism.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Westboro & Hintonburg', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'West end', tagLevel: 'purple', meta: 'Independent shops and cafés · Riverside paths · Wellington Street West',
      details: {
        "lead": "Independent shops and cafés along Wellington Street West and riverside paths.",
        "see": [
          {
            "title": "Wellington Street West",
            "text": "Independent shops and cafés in Hintonburg and Westboro."
          },
          {
            "title": "Riverside paths",
            "text": "Paths run along the Ottawa River."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, along the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Ottawa Tourism",
          "url": "https://ottawatourism.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Gatineau (Quebec)', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Across the river', tagLevel: 'blue', meta: 'Canadian Museum of History · Gatineau Park · French-speaking · Quebec tax rules',
      details: {
        "lead": "Across the river, with the Canadian Museum of History and Gatineau Park. It is French-speaking, with Quebec tax rules.",
        "see": [
          {
            "title": "Canadian Museum of History",
            "text": "Listed as free on Thursday evenings from 5 to 7 pm and on Remembrance Day. No 2026 price was found."
          },
          {
            "title": "Gatineau Park",
            "text": "Paid parking began at the Visitor Centre on September 1, 2026: the first 30 minutes are free, then $3 per 30 minutes up to $16 a day. Most other lots are free, and in winter all parking is free."
          },
          {
            "title": "Winter trail pass",
            "text": "An adult day pass was $12.48 before tax in 2026–27; a season pass includes free parking at Relais plein air until March 31, 2027."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the Ottawa River from Parliament, about fifteen minutes by car."
          },
          {
            "label": "Transit",
            "text": "Gatineau’s STO runs separate fares; no 2026 figures were found."
          },
          {
            "label": "Language",
            "text": "Mostly French-speaking."
          }
        ],
        "link": {
          "label": "NCC: Gatineau Park parking",
          "url": "https://ncc-ccn.gc.ca/places/gatineau-park-parking-lots"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Parliament Hill',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The Gothic Revival parliament buildings on their cliff above the river are the symbol of the country — but the Centre Block, with the Peace Tower, has been closed for a full rehabilitation since 2019, and the government expects to finish construction in 2030–31 and reopen about a year later. The House of Commons sits temporarily in the West Block and the Senate in a converted railway station. Free guided tours run in summer; check visit.parl.ca. The grounds stay open to everyone.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Under renovation', level: 'danger' }],
      details: {
        "lead": "The Gothic Revival parliament buildings on their cliff above the river. Centre Block and the Peace Tower are closed for rehabilitation.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Centre Block",
                "text": "Closed for rehabilitation; construction is expected to finish around 2030–31, with reopening about a year later."
              },
              {
                "title": "Tours",
                "text": "Free guided tours run at West Block, which houses the House of Commons chamber, and at the Senate of Canada Building."
              },
              {
                "title": "Welcome Centre",
                "text": "The new Parliament Welcome Centre was about 75 per cent built on its lower two levels by mid-2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book ahead",
                "text": "Tours book up quickly; bring photo ID."
              },
              {
                "title": "Virtual options",
                "text": "A free Immersive Experience and a 360° virtual tour of Centre Block are available."
              },
              {
                "title": "Check",
                "text": "Schedules change; see visit.parl.ca."
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
            "text": "In the centre of downtown Ottawa."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Visit Canada’s Parliament",
          "url": "https://visit.parl.ca/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rideau Canal & Skateway',
      icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      text: 'A canal built in 1826–1832 as a military supply route, still working in summer with its original locks beside Parliament, and a UNESCO World Heritage Site since 2007. In winter its downtown stretch becomes a 7.8 km skateway — but only when it is cold enough. It did not open at all in 2022–23 and managed only about ten days in 2023–24; in 2026 it opened on New Year’s Eve. Check the NCC ice report before you bring skates.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Weather-dependent', level: 'caution' }],
      details: {
        "lead": "A canal built in 1826–1832, a UNESCO World Heritage Site since 2007. In winter its downtown stretch becomes a 7.8 km skateway when the ice is thick enough.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2025–26 season",
                "text": "A 3.4 km section from Somerset West to the Bank Street Bridge opened on December 31; the full 7.8 km, Rideau to Library including Dow’s Lake, opened on January 5. It closed on March 4, per one guide."
              },
              {
                "title": "Ice rule",
                "text": "The NCC needs ice at least 30 cm thick before it can open."
              },
              {
                "title": "Winterlude",
                "text": "The 2026 edition ran January 30 to February 16; 2027 dates were not published."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2027 season",
                "text": "No 2027 skateway date is published; it depends on the weather."
              },
              {
                "title": "Check",
                "text": "The NCC’s skateway page has current conditions."
              },
              {
                "title": "Summer",
                "text": "The canal is still working in summer, with its original locks beside Parliament."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to skate."
          },
          {
            "label": "Getting there",
            "text": "Access points along the canal downtown."
          },
          {
            "label": "Best time",
            "text": "January and February, weather permitting."
          }
        ],
        "link": {
          "label": "NCC: Rideau Canal Skateway",
          "url": "https://ncc-ccn.gc.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'National Museums',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The National Gallery (with the giant spider sculpture outside), the Canadian War Museum, the Canadian Museum of Nature and, across the river in Gatineau, the Canadian Museum of History — all within a short walk, bike or bus of each other. The Aviation and Space Museum is further east. Plan at least a day; check each one for current hours and admission.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Rainy-day plan', level: 'blue' }],
      details: {
        "lead": "The National Gallery, the Canadian War Museum, the Canadian Museum of Nature and, across the river in Gatineau, the Canadian Museum of History.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "National Gallery",
                "text": "From about $22 for adults in one guide, $16–20 in another. Thursday evenings from 5 to 8 pm are free."
              },
              {
                "title": "Museum of Nature",
                "text": "About $16 plus tax; free Thursday evenings, with a ticket still required."
              },
              {
                "title": "Aviation and Space Museum",
                "text": "About $15 plus tax; the Ingenium museums are free daily from 4 to 5 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free hours",
                "text": "The War Museum and the Museum of History were listed free on Thursday evenings (5–7 pm), and on Remembrance Day with timed tickets."
              },
              {
                "title": "Hours differ",
                "text": "Guides conflict on hours and prices; check each museum’s own site."
              },
              {
                "title": "Short distances",
                "text": "Most are within a short walk, bike or bus of each other."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Mostly paid, about $15–22; Thursday evenings are the free window."
          },
          {
            "label": "Getting there",
            "text": "Downtown and Gatineau; the Aviation and Space Museum is further east."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours per museum."
          }
        ],
        "link": {
          "label": "National Gallery of Canada",
          "url": "https://www.gallery.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'ByWard Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'The old market district laid out by Lt-Col John By, the canal’s builder, in the 1820s. Food stalls, restaurants, bars and the busiest evening streets in the city. Lively — and, late at night, rough around the edges.',
      tags: [{ label: 'Free to wander', level: 'safe' }, { label: 'Evenings', level: 'purple' }],
      details: {
        "lead": "The old market district laid out by Lt-Col John By in the 1820s, with food stalls, restaurants, bars and the busiest evening streets in the city.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Scale",
                "text": "A guide counts 260+ restaurants and 100+ boutiques in about four blocks."
              },
              {
                "title": "The market",
                "text": "The farmers’ market runs outdoors from May to October, with indoor vendors year-round."
              },
              {
                "title": "Vendor Village",
                "text": "A new Vendor Village opened on George Street in 2026."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "200th anniversary",
                "text": "The market turns 200 in 2027."
              },
              {
                "title": "Late night",
                "text": "Lively but rough around the edges late at night; reviews are mixed."
              },
              {
                "title": "Hours",
                "text": "Market hours change with the season; check before going."
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
            "text": "In Lower Town, a short walk from Parliament."
          },
          {
            "label": "Best time",
            "text": "Saturday morning for the market; evenings for the restaurants."
          }
        ],
        "link": {
          "label": "Ottawa Tourism: ByWard Market",
          "url": "https://ottawatourism.ca/en/about-ottawa/neighbourhoods/byward-market-rideau-street"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gatineau Park',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'A 361 km² wilderness park in Quebec, fifteen minutes from Parliament, with lakes, lookouts over the Ottawa Valley, hiking and some of the best cross-country skiing near any capital. Parking fees and seasonal road closures apply — check the NCC before going.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Quebec side', level: 'olive' }],
      details: {
        "lead": "A wilderness park in Quebec, fifteen minutes from Parliament, with lakes, lookouts, hiking and cross-country skiing.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Visitor Centre parking",
                "text": "Paid since September 1, 2026: the first 30 minutes free, then $3 per 30 minutes up to $16 a day."
              },
              {
                "title": "Free parking",
                "text": "Most other lots are free, including Champlain Lookout, and all parking is free in winter. In summer the beaches, boat launches, Leamy Lake and Mackenzie King Estate are paid."
              },
              {
                "title": "Winter trail pass",
                "text": "Adult daily pass $12.48 before tax in 2026–27; the season pass includes free parking at Relais plein air until March 31, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check the NCC",
                "text": "Seasonal road closures apply, and ski trail opening dates were not found."
              },
              {
                "title": "Cost",
                "text": "The park is free to enter; trails need a pass in winter."
              },
              {
                "title": "Cross-country skiing",
                "text": "Some of the best near any capital."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter; paid parking and winter trail passes."
          },
          {
            "label": "Getting there",
            "text": "About fifteen minutes from Parliament by car."
          },
          {
            "label": "Best time",
            "text": "Autumn colours and winter skiing."
          }
        ],
        "link": {
          "label": "NCC: Gatineau Park",
          "url": "https://ncc-ccn.gc.ca/places/gatineau-park-parking-lots"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Winterlude',
      icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      text: 'The capital region’s winter festival, held over three weekends in late January and February on both sides of the river — ice sculptures, the Skateway, snow playgrounds. In 2026 it ran 30 January to 16 February; 2027 dates are announced each autumn.',
      tags: [{ label: 'February', level: 'blue' }, { label: 'Mostly free', level: 'safe' }],
      details: {
        "lead": "The capital region’s winter festival, held over three weekends in late January and February on both sides of the river.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "January 30 to February 16, 2026."
              },
              {
                "title": "Skateway",
                "text": "The 7.8 km Rideau Canal Skateway, when ice conditions allow."
              },
              {
                "title": "Both sides",
                "text": "Events take place in Ottawa and Gatineau."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2027 dates",
                "text": "Not yet published; they are announced each autumn."
              },
              {
                "title": "Ice",
                "text": "The canal needs at least 30 cm of ice to open."
              },
              {
                "title": "Dress warm",
                "text": "Late January and February can be very cold."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Mostly free."
          },
          {
            "label": "Getting there",
            "text": "Downtown Ottawa and Gatineau."
          },
          {
            "label": "Best time",
            "text": "Late January to mid-February."
          }
        ],
        "link": {
          "label": "Pixidia: Winterlude 2027 guide",
          "url": "https://pixidia.com/en/winterlude-ottawa-2027-rideau-canal-skating/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River, Canal and Greenbelt',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Cycling', dist: 'City-wide', text: 'Hundreds of kilometres of riverside and canal pathways, plus Sunday car-free parkways in summer. One of the best capitals in the world to explore by bike.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Skating', dist: 'Rideau Canal', text: 'When the Skateway is open, it is the way to commute through downtown. Rentals and food huts line the ice. The season gets shorter in warm winters.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Canal · Ottawa River', text: 'Canoes and kayaks on the canal and Dow’s Lake in summer. The Ottawa River itself is big water with real current and whitewater upstream.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Gatineau Park', dist: '≈15 min', text: 'Trails, lookouts and lakes just across the river. Busy on autumn weekends when the colours peak.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'Greenbelt', dist: 'Around the city', text: 'A belt of forest, wetland and farmland around the inner city, with trails at Mer Bleue bog and Stony Swamp.' },
    { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Tulips', dist: 'Commissioner’s Park', text: 'The Canadian Tulip Festival in May recalls the bulbs the Netherlands has sent since the Second World War, when the Dutch royal family sheltered in Ottawa.' },
  ],

  food: [
    { icon: '🥐', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'BeaverTails', area: 'ByWard Market', areaLevel: 'gold', text: 'The fried-dough pastry was born in Ottawa’s region and is sold from huts on the canal in winter. A tourist cliché that is also genuinely good when it is −20 °C.' },
    { icon: '🍝', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Little Italy', area: 'Preston Street', areaLevel: 'danger', text: 'Italian restaurants and patios along Preston Street, a short walk from Dow’s Lake.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Chinatown', area: 'Somerset Street West', areaLevel: 'purple', text: 'Vietnamese, Chinese and pan-Asian restaurants under the Chinatown arch.' },
    { icon: '🥘', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Shawarma', area: 'City-wide', areaLevel: 'olive', text: 'Ottawa has a large Lebanese community and a serious shawarma culture — locals argue about it the way other cities argue about pizza.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Hintonburg · Glebe', areaLevel: 'blue', text: 'A strong brewery scene, especially in the west end.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Québécois Food', area: 'Gatineau', areaLevel: 'safe', text: 'Cross the bridge for poutine, tourtière and a different food culture — and a different sales tax.' },
  ],

  seasons: [
    { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'Tulips and thaw', text: 'The tulip festival in May and the canal reopening to boats. Spring floods on the Ottawa River can be serious in wet years.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Canada Day and humidity', text: 'Festivals, Canada Day on 1 July, Parliament tours. Hot and humid, with thunderstorms; Canada Day crowds and security are heavy downtown.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours', text: 'Maple colours in Gatineau Park and along the canal, cool clear days. Arguably the best time to visit.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Cold, if you are lucky', text: 'One of the coldest capitals in the world, with −25 °C cold snaps. That is what makes the Skateway and Winterlude possible — warm winters now cut both short.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Ottawa (YOW)',
      text: 'The airport is linked to the city by O-Train Line 4, opened in January 2025, from South Keys station — no premium fare. Transfer to Line 2 there for the city.',
      time: '≈35–55 min to downtown by train',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'Frequent VIA Rail trains on the Montréal–Ottawa–Toronto corridor arrive at Ottawa station east of downtown, connected to the O-Train.',
      time: '≈2h from Montréal · ≈4.5h from Toronto',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 417 from Montréal and Highway 401/416 from Toronto. Downtown parking is expensive and limited; winter driving needs real winter tires.',
      time: '≈2h from Montréal · ≈4.5h from Toronto',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches connect Ottawa with Montréal, Toronto and Kingston. Schedules and operators change; check before planning.',
      time: '≈2–5h',
    },
  ],

  stay: [
    {
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      title: 'Downtown & ByWard Market',
      area: 'Walkable · Most expensive',
      text: 'Walk to Parliament, the canal, the market and the museums. Book early around Canada Day and Winterlude.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Ottawa', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Ottawa%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'The Glebe & Centretown',
      area: 'Neighbourhood feel',
      text: 'Smaller hotels and rentals close to the canal, Lansdowne and Bank Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Centretown+Ottawa', level: 'blue' },
      ],
    },
    {
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      title: 'Gatineau',
      area: 'Across the river · Quebec',
      text: 'Often cheaper, close to the Museum of History and Gatineau Park, a bridge from Parliament. Prices include Quebec taxes, not Ontario ones.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gatineau+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'OC Transpo — O-Train & Buses',
      text: 'The O-Train runs east–west across downtown on Line 1 and north–south on Lines 2 and 4 (to the airport), with a large bus network. Line 1’s east and west extensions are built or under construction but not yet open — the east extension is waiting on a technical fix, the west is expected in 2027.',
      linkLabel: 'OC Transpo',
      linkUrl: 'https://www.octranspo.com/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from OC Transpo for 2026. Pay with Presto, a contactless bank card or cash. Presto has a daily cap at the DayPass price. The same fare covers buses and the O-Train, including the airport line.',
        fareBox: {
          label: 'Adult',
          lines: ['Presto / contactless: $4.10', 'Cash: $4.15', 'DayPass: $12.25', 'Monthly pass: $138.50'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.octranspo.com/en/fares/costs/',
      },
      {
        icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
        title: 'Crossing to Gatineau',
        text: 'Gatineau is served by STO, a separate Quebec transit agency. Some connections are shared downtown; check transfer rules between the two systems.',
        fareBox: {
          label: 'Two systems',
          lines: ['Ottawa: OC Transpo', 'Gatineau: STO', 'Check transfer rules'],
        },
        linkLabel: 'STO',
        linkUrl: 'https://www.sto.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Excellent pathways; bike share and rentals in summer.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Parliament, the Market, the Gallery and the canal are all close together.' },
          { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Skates', text: 'In a good winter, the canal is a real commuting route.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available, including to the airport.' },
        ],
      },
    ],
    proTip: {
      label: 'Skateway tip:',
      text: 'The NCC posts ice conditions daily in winter. Sections open and close separately, and a warm spell can shut the whole thing overnight — check the morning you plan to skate.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases in Ottawa carry 13% HST. Hotels and short-term rentals also charge the city’s Municipal Accommodation Tax, which rose to 6% on 1 January 2026. Cross the bridge to Gatineau and you are in Quebec, where GST plus QST comes to 14.975% — prices on the two sides of the river are taxed differently.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ottawa / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Gatineau / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 13% HST + 6% Municipal Accommodation Tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum and event tickets: 13% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Printed books: provincial portion rebated' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: provincial portion rebated" },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Real Winter', text: 'January cold snaps reach −25 °C or lower with wind chill. Dress in layers, cover skin, and treat frostbite warnings seriously.' },
    { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', title: 'Parliament Under Repair', text: 'The Centre Block and Peace Tower are closed until the 2030s. Tours visit the temporary chambers instead; check visit.parl.ca for current tours.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', title: 'Two Provinces', text: 'Gatineau is in Quebec: French first, different taxes, different transit, different alcohol rules. Ottawa and Gatineau share the same time zone.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Bilingual City', text: 'Ottawa is officially bilingual and federal services are in both languages; in Gatineau, French is the default. A “bonjour-hello” greeting is normal.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Tap a contactless bank card or Presto on OC Transpo; the daily cap means you never pay more than a DayPass.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Ottawa is on the unceded, unsurrendered territory of the Algonquin Anishinaabe Nation, whose homeland is the watershed of Kichi Sibi — the Ottawa River. No treaty ever ceded this land, including the ground Parliament stands on.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['The Ottawa Hospital — Civic Campus', '1053 Carling Avenue', 'Emergencies: call 911'] },
  ],
};

export default OTTAWA;
