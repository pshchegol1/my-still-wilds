// Hamilton — данные страницы /city/hamilton
// В шапке ролик с Pixabay (Pixabay Content License, атрибуция не
// требуется), автор A-Trivial-Wanderer, теги Pier 4, Hamilton, Ontario.
// На кадрах марина и мыс с большим канадским флагом в западной гавани,
// за водой лесистый северный берег. Уникального ориентира (Skyway,
// заводы) в кадре нет — место подтверждено тегами автора и тем, что
// вид с ними не расходится. 15 с, пережат с 10,9 до ~5,9 МБ; постер —
// первый кадр. Прежнее фото водопада Вебстера (Laslovarga, Commons,
// CC BY-SA 4.0) — запасной вариант.
// Население — городской отчёт за 2025 год (640 465). Тарифы HSR —
// с изменения 1 сентября 2025; данных о 2026 не нашлось.
// Stelco в сентябре 2026 остановила часть производства в Гамильтоне
// из-за пошлин США — это текущий контекст города, он на странице.

export const HAMILTON = {
  slug: 'hamilton',
  name: 'Hamilton',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: 'Ontario · Head of Lake Ontario',
  accentLevel: 'gold',
  heroIcon: '💧',
  heroImage: '/Cities/Hamilton/hero-poster.jpg',
  heroVideo: '/Cities/Hamilton/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.2557, lon: -79.8711 },
  subtitle: 'Steel Town Under the Waterfalls',
  description:
    'A working harbour city at the western tip of Lake Ontario, split in two by the Niagara Escarpment — the lower city by the water, the upper city on “the Mountain”. Steel built it. The escarpment gives it something no other Canadian city has: well over a hundred waterfalls inside the city limits.',

  actions: [
    { label: 'Explore Hamilton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈640K' },
    { label: 'Waterfalls', value: '100+' },
    { label: 'Escarpment', value: '“The Mountain”' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈70 km · 1h' },
    { label: 'To Niagara Falls', value: '≈70 km · 1h' },
  ],

  badges: ['Waterfall City', 'Steel Town', 'Dish With One Spoon'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '100+', label: 'Waterfalls within the city — counts run from about 130 to 156, depending on who counts and when', level: 'blue' },
    { value: '1964', label: 'The very first Tim Hortons opens on Ottawa Street North — the rebuilt store has a small free museum', level: 'gold' },
    { value: '2026', label: 'Stelco idles finishing lines at Hamilton Works over US tariffs, putting hundreds of steel jobs at risk', level: 'danger' },
    { value: '1,100 ha', label: 'Royal Botanical Gardens — Canada’s largest botanical garden, on the Hamilton–Burlington line', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & James Street North', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: 'Arts strip', tagLevel: 'gold', meta: 'Galleries, cafés and bars · Monthly art crawl · Art Gallery of Hamilton',
      details: {
        "lead": "Galleries, cafés and bars around James Street North, with the Art Gallery of Hamilton nearby.",
        "see": [
          {
            "title": "Art Gallery of Hamilton",
            "text": "123 King Street West. Thursday 11 am–9 pm, Friday 11 am–6 pm, Saturday and Sunday 11 am–5 pm; Monday to Wednesday by pre-booked tour only. Adults $15, seniors $12, students and children free. Thursdays are free all day."
          },
          {
            "title": "James Street North",
            "text": "The gallery and café street, where the monthly art crawl is held. No confirmed 2026 dates were found, so check locally."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of the city, walkable between the main sights."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          },
          {
            "label": "Good to know",
            "text": "Indigenous visitors get in free to the gallery."
          }
        ],
        "link": {
          "label": "Art Gallery of Hamilton",
          "url": "https://www.artgalleryofhamilton.com/plan-your-visit/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hess Village', icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', tag: 'Nightlife', tagLevel: 'purple', meta: 'Patios and pubs in old houses · Loud on weekends',
      details: {
        "lead": "Patios and pubs in old houses, loud on weekends.",
        "see": [
          {
            "title": "Patios and pubs",
            "text": "Old houses converted into bars and patios in a compact pedestrian-style block."
          }
        ],
        "practical": [
          {
            "label": "Best time",
            "text": "Evenings and summer weekends, when it is busiest and loudest."
          },
          {
            "label": "Getting there",
            "text": "Downtown, a short walk from the centre."
          },
          {
            "label": "Good to know",
            "text": "Not a quiet place to stay on a Friday or Saturday night."
          }
        ],
        "link": {
          "label": "Tourism Hamilton",
          "url": "https://www.tourismhamilton.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Locke Street', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Shops', tagLevel: 'safe', meta: 'Independent shops, bakeries and brunch · Walkable · Near the escarpment stairs',
      details: {
        "lead": "Independent shops, bakeries and brunch, walkable and close to the escarpment stairs.",
        "see": [
          {
            "title": "Locke Street shops",
            "text": "Independent shops and bakeries along a walkable stretch."
          },
          {
            "title": "Escarpment stairs",
            "text": "The stairs up the escarpment are close by."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, at the base of the escarpment."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Best time",
            "text": "Weekend mornings for brunch."
          }
        ],
        "link": {
          "label": "Tourism Hamilton",
          "url": "https://www.tourismhamilton.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Harbour & Bayfront', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Waterfront', tagLevel: 'blue', meta: 'Bayfront Park · Pier 4 · Waterfront trail · West Harbour GO station',
      details: {
        "lead": "The waterfront, with Bayfront Park, Pier 4, the Waterfront Trail and the West Harbour GO station.",
        "see": [
          {
            "title": "Bayfront Park",
            "text": "A park on the harbour."
          },
          {
            "title": "Pier 4",
            "text": "A pier and park on the water."
          },
          {
            "title": "Waterfront Trail",
            "text": "A trail along the harbour."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West Harbour GO station is on the waterfront."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check seasonal hours for waterfront facilities."
          }
        ],
        "link": {
          "label": "Tourism Hamilton",
          "url": "https://www.tourismhamilton.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: '“The Mountain”', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Upper city', tagLevel: 'olive', meta: 'Residential plateau above the escarpment · Brow viewpoints over the city',
      details: {
        "lead": "The residential plateau above the escarpment, with brow viewpoints over the city and Albion Falls on the east Mountain.",
        "see": [
          {
            "title": "Brow viewpoints",
            "text": "Viewpoints along the escarpment edge look over the city and the harbour."
          },
          {
            "title": "Albion Falls",
            "text": "A broad stepped cascade on the east Mountain. The falls are dangerous, and the city charges people who go off marked paths. The charge has been cited at $135 under the Parks By-law, and signs cite a maximum of $10,000."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the plateau above the escarpment; a car or bus."
          },
          {
            "label": "Safety",
            "text": "Stay on marked paths and behind fences. There is no safe access to the base of Albion Falls."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "City of Hamilton",
          "url": "https://www.hamilton.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dundas', icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', tag: 'West', tagLevel: 'danger', meta: 'Small-town main street · Webster’s and Tew’s Falls · Dundas Peak',
      details: {
        "lead": "A small-town main street at the foot of the escarpment, nicknamed Valley Town, with independent shops, cafés and the Carnegie Gallery. Webster’s and Tew’s Falls are close.",
        "see": [
          {
            "title": "King Street",
            "text": "Independent shops and cafés in the old downtown."
          },
          {
            "title": "Dundas Cactus Festival",
            "text": "A free three-day family festival on King and Main streets; in 2026 it ran August 21–23."
          },
          {
            "title": "Dundas Peak",
            "text": "One of the best-known lookouts in the region, on the Hamilton Conservation Authority’s Spencer Gorge lands."
          }
        ],
        "practical": [
          {
            "label": "Falls access",
            "text": "In fall 2026 a reservation system ran from September 26 to November 8; check Conservation Hamilton for current rules."
          },
          {
            "label": "Getting there",
            "text": "West of the city centre."
          },
          {
            "label": "Time to allow",
            "text": "Half a day with the falls."
          }
        ],
        "link": {
          "label": "Conservation Hamilton",
          "url": "https://www.conservationhamilton.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Webster’s & Tew’s Falls',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'The most famous pair of Hamilton’s waterfalls, in the Spencer Gorge above Dundas: Webster’s is wide and curtain-like with a stone footbridge above it, Tew’s is tall and narrow in a deep amphitheatre. The trail between them leads to Dundas Peak, the classic autumn view. On busy weekends access is managed by reservation and parking fees — check the conservation authority before going.',
      tags: [{ label: 'Book on weekends', level: 'caution' }, { label: 'Iconic', level: 'gold' }],
      details: {
        "lead": "The most famous pair of Hamilton’s waterfalls, in the Spencer Gorge above Dundas. Access has been by reservation in fall.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 reservations",
                "text": "Fall reservations ran from September 26 to November 8, 2026: two-hour blocks for Dundas Peak and Tew’s Falls or for Webster’s Falls, or four-hour blocks for both."
              },
              {
                "title": "Fees",
                "text": "For non-members: an $11 vehicle fee, $5.50 per passenger and a $10 reservation fee. Members pay the $10 reservation fee. The four-hour block adds an $11 parking fee."
              },
              {
                "title": "Parking",
                "text": "Dundas Peak and Tew’s Falls: 581 Harvest Road. Webster’s Falls: Greensville Optimist Park, 28 Fallsview Road."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book ahead",
                "text": "Reservations are online; questions to reserve@conservationhamilton.ca or 1-855-227-5267."
              },
              {
                "title": "Current rules",
                "text": "The 2026 system covered fall only; check Conservation Hamilton for current access and fees."
              },
              {
                "title": "Hours",
                "text": "An older source gives 8 am to sunset; confirm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid during reservation periods."
          },
          {
            "label": "Getting there",
            "text": "West of Hamilton near Dundas, with separate parking for each area."
          },
          {
            "label": "Best time",
            "text": "Autumn for the view from Dundas Peak."
          }
        ],
        "link": {
          "label": "Conservation Hamilton",
          "url": "https://www.conservationhamilton.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Albion Falls & the Escarpment',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A broad, stepped cascade on the east Mountain, and a reminder that these falls are dangerous: people have been injured and killed scrambling off-trail on the wet escarpment rock. Stay on marked paths and behind fences. Dozens of smaller falls along the Bruce Trail are quieter and just as good.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Stay on trail', level: 'danger' }],
      details: {
        "lead": "A broad, stepped cascade on the east Mountain, and a reminder that Hamilton’s falls are dangerous. Stay on marked paths and behind fences.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Rules",
                "text": "The city says anyone off a marked trail in or around the falls is violating the Parks By-law and will be charged."
              },
              {
                "title": "Fines",
                "text": "Figures cited include $105, $135 and $150; signs mention a maximum of $10,000 under the Trespass to Property Act."
              },
              {
                "title": "Base closed",
                "text": "The base of the falls is strictly prohibited, with no safe access."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "View from the fence",
                "text": "Stay behind fences and on marked paths."
              },
              {
                "title": "Other falls",
                "text": "Dozens of smaller falls along the Bruce Trail are quieter."
              },
              {
                "title": "Check current rules",
                "text": "No 2026 policy change was found; check the City of Hamilton."
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
            "text": "On the east Mountain, by car or bus."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "City of Hamilton",
          "url": "https://www.hamilton.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Royal Botanical Gardens',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'Canada’s largest botanical garden, about 1,100 hectares of gardens, marshes and trails straddling Hamilton and Burlington. The lilac and rose gardens peak in late spring and early summer; the nature sanctuaries are worth as much time as the formal beds.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Spring peak', level: 'safe' }],
      details: {
        "lead": "Canada’s largest botanical garden, described as over 1,100 hectares of gardens, marshes and trails straddling Hamilton and Burlington.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "RBG Centre",
                "text": "10 am–5 pm from April 18 to January 3, closed December 25, December 26 and January 1. Last admission is one hour before closing."
              },
              {
                "title": "Hendrie Park",
                "text": "10 am–5 pm from May 4 to November 29; it was closed November 16–25 to prepare for Winter Wonders."
              },
              {
                "title": "Trails",
                "text": "Open 8 am to dusk all year."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "A secondary guide lists adults at about $20; check rbg.ca for current prices."
              },
              {
                "title": "Winter",
                "text": "Entry in January is listed as members only for some dates; check the live site."
              },
              {
                "title": "Nature sanctuaries",
                "text": "Worth as much time as the formal beds."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid for the gardens, about $20; trails are free."
          },
          {
            "label": "Getting there",
            "text": "At 680 Plains Road West, on the Hamilton–Burlington border."
          },
          {
            "label": "Best time",
            "text": "Late spring and early summer for lilacs and roses."
          }
        ],
        "link": {
          "label": "Royal Botanical Gardens: hours",
          "url": "https://www.rbg.ca/visit/hours/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canadian Warplane Heritage Museum',
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      text: 'A hangar of historic aircraft at the airport, including an Avro Lancaster bomber that still flies — one of only two airworthy in the world. Flights in it are offered in season at a high price; just watching it run up is memorable.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "A hangar of historic aircraft at Hamilton’s airport, including an Avro Lancaster bomber that still flies. It is one of only two airworthy Lancasters in the world.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Wednesday to Sunday, 9 am–5 pm; closed Monday and Tuesday."
              },
              {
                "title": "Admission",
                "text": "A guide lists adults $20, seniors $18, youth 4–12 $12 and under 4 free; the museum’s own event page showed $20 for adults. Members are free."
              },
              {
                "title": "Lancaster flights",
                "text": "Flights are not part of general admission. No 2026 price was found; check warplane.com."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "Admission is sold online and at the admissions desk."
              },
              {
                "title": "Check hours",
                "text": "Other listings conflict; confirm before driving out."
              },
              {
                "title": "Seeing the Lancaster",
                "text": "Watching it run up is memorable even without a flight."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $20 for adults."
          },
          {
            "label": "Getting there",
            "text": "At 9280 Airport Road, Mount Hope, near the airport; a car is easiest."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Canadian Warplane Heritage Museum",
          "url": "https://www.warplane.com/visit/tickets.aspx"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dundurn Castle',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'An Italianate villa built in the 1830s for Sir Allan MacNab, later a premier of the Province of Canada, on a hill above the harbour. Costumed tours of the house and the servants’ quarters below stairs.',
      tags: [{ label: 'Paid tours', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "An Italianate villa built in the 1830s for Sir Allan MacNab, on a hill above the harbour. Visits are by guided tour.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Hamilton Civic Museums lists Tuesday to Sunday, 12–4 pm; closed Mondays and certain holidays. The City page says tours begin at 12:10 pm, with the last at 3:30 pm."
              },
              {
                "title": "The tour",
                "text": "About an hour, and it includes admission to the Hamilton Military Museum."
              },
              {
                "title": "Tickets",
                "text": "Unofficial sources give $11 to $12 for adults; Hamilton Public Library cards give free general admission, one per visitor."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tours sell out",
                "text": "The City notes that timed tours frequently sell out."
              },
              {
                "title": "Check prices",
                "text": "Confirm with the museum."
              },
              {
                "title": "Doors Open",
                "text": "A free self-guided tour of the castle and kitchen garden ran on May 2–3, 2026."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $11–12; library card gives free entry."
          },
          {
            "label": "Getting there",
            "text": "On a hill above the harbour, near Dundurn Park."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Hamilton Civic Museums",
          "url": "https://hamiltoncivicmuseums.ca/dundurn-national-historic-site/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tim Hortons Store No. 1',
      icon: '🍩', iconSrc: '/icons/attractions/ph_cookie-thin.svg',
      text: 'The chain began here on 17 May 1964, in a converted garage on Ottawa Street North. The store has a free museum, recently redesigned and moved into the main restaurant space. Pure pilgrimage — but it is also on a good street of fabric and textile shops.',
      tags: [{ label: 'Free museum', level: 'safe' }, { label: 'Quick stop', level: 'blue' }],
      details: {
        "lead": "The chain began here on May 17, 1964, at 65 Ottawa Street North. The museum is free.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Free museum",
                "text": "Admission is free; it was redesigned and moved into the main restaurant space."
              },
              {
                "title": "Hours",
                "text": "Sources conflict: about 6 am to 8 pm in some listings, longer in others."
              },
              {
                "title": "Textile street",
                "text": "It sits on a good street of fabric and textile shops."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check hours",
                "text": "Confirm before going; sources are about a year old."
              },
              {
                "title": "Older listings",
                "text": "Some listings still describe the museum on the second floor."
              },
              {
                "title": "Quick stop",
                "text": "Allow about half an hour."
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
            "text": "65 Ottawa Street North, in the east of the city."
          },
          {
            "label": "Time to allow",
            "text": "Half an hour."
          }
        ],
        "link": {
          "label": "Atlas Obscura: Tim Hortons No. 1",
          "url": "https://www.atlasobscura.com/places/tim-hortons-no-1"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Escarpment, Gorge and Harbour',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Bruce Trail', dist: 'Across the city', text: 'Canada’s oldest long-distance footpath runs right through Hamilton along the escarpment, linking waterfalls, lookouts and forest. Easy to walk a section without leaving the city.' },
    { icon: '🪜', iconSrc: '/icons/attractions/ph_stairs-thin.svg', name: 'Escarpment Stairs', dist: 'Downtown to the Mountain', text: 'Long public staircases climb the escarpment from the lower city — a free, brutal workout with a view at the top.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Rail Trails', dist: 'East and west', text: 'Former railway lines turned flat trails run across the city and into the countryside, good for cycling and long walks.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Hamilton Harbour', dist: 'Bayfront', text: 'Paddling and a waterfront trail around the west harbour. The harbour is still recovering from a century of industry, and a major clean-up of contaminated sediment is under way.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall Colours', dist: 'Spencer Gorge · Dundas Peak', text: 'October colour along the escarpment is spectacular and very popular. Go on a weekday or early in the morning.' },
    { icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', name: 'Waterfall Safety', dist: 'Everywhere', text: 'Escarpment rock is wet, loose and slippery. Never climb on falls or go past fences; rescues happen every year.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'James Street North', area: 'Downtown', areaLevel: 'gold', text: 'The best concentration of restaurants and cafés, many opened as artists and young families moved in from Toronto.' },
    { icon: '🥐', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Locke Street', area: 'West downtown', areaLevel: 'safe', text: 'Bakeries, brunch spots and small restaurants along a walkable shopping street.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'City-wide', areaLevel: 'purple', text: 'A strong brewery scene, much of it in former industrial buildings.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Hamilton Farmers’ Market', area: 'Downtown', areaLevel: 'olive', text: 'An indoor market downtown with a long history and Niagara-region produce. Check current days before going.' },
    { icon: '🍩', iconSrc: '/icons/attractions/ph_cookie-thin.svg', title: 'Tim Hortons No. 1', area: 'Ottawa Street North', areaLevel: 'danger', text: 'Coffee and a doughnut where the chain started, if only to say you did.' },
    { icon: '🍑', iconSrc: '/icons/attractions/ph_orange-slice-thin.svg', title: 'Fruit Belt', area: 'East toward Niagara', areaLevel: 'blue', text: 'Orchards and farm stands along the escarpment east of the city in summer.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'Falls at full flow', text: 'Snowmelt and spring rain make the waterfalls their most powerful. Lilacs bloom at the Botanical Gardens in late May. Trails are muddy.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Thin falls, warm harbour', text: 'Many smaller falls slow to a trickle in dry spells, but the big ones keep going. Hot and humid; festivals and art crawls downtown.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours on the escarpment', text: 'Peak colour in October along the gorge and the Bruce Trail. Busy at the famous falls — book where required.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Frozen falls', text: 'Grey and slushy in the lower city, but frozen waterfalls can be striking. Escarpment trails are icy and dangerous — microspikes or stay off.' },
  ],

  gettingThere: [
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By GO Transit',
      text: 'GO trains and buses on the Lakeshore West corridor link Hamilton with Toronto’s Union Station, at West Harbour and the downtown GO Centre. Service frequency varies by time of day; check GO Transit.',
      time: '≈1–1.5h from Union Station',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The QEW and Highway 403 from Toronto, often congested at rush hour. Hamilton sits between Toronto and Niagara, so it pairs easily with a Niagara trip.',
      time: '≈1h from Toronto',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Hamilton (YHM)',
      text: 'John C. Munro Hamilton International Airport on the Mountain, mainly with low-cost and seasonal flights. Toronto Pearson (YYZ) is the main hub, about an hour away.',
      time: '≈20 min from downtown',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'From Niagara',
      text: 'Drive the QEW around the lake, or combine GO services. Many visitors base in Hamilton for Niagara day trips.',
      time: '≈1h to Niagara Falls',
    },
  ],

  stay: [
    {
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Central',
      text: 'Close to James Street North, Hess Village and the GO Centre. Mixed blocks — some streets are rough at night.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Hamilton+Ontario', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Hamilton%2C%20Ontario', level: 'gold' },
      ],
    },
    {
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      title: 'Dundas',
      area: 'Small-town · Near the falls',
      text: 'Inns and short-term rentals in the west end, close to Webster’s Falls and the gorge trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dundas+Ontario', level: 'blue' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Burlington Edge',
      area: 'Car-friendly · Near RBG',
      text: 'Hotels just across the city line by the Botanical Gardens and the highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Burlington+Ontario', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'HSR — Hamilton Street Railway',
      text: 'City buses run across the lower city and up the Mountain. A light-rail line along Main and King streets is under construction; early civil works began in 2026, and no opening date has been announced. Expect closures and detours on the LRT corridor — Main and Ottawa streets close for about four months from 17 August 2026.',
      linkLabel: 'HSR',
      linkUrl: 'https://www.hamilton.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below took effect 1 September 2025; we did not find a 2026 change. You can tap a credit card or phone for the adult fare, or use Presto. Children 12 and under ride free.',
        fareBox: {
          label: 'Adult',
          lines: ['Presto / tap: $2.70', 'Cash: $3.50', 'Monthly pass: $118.80', 'Children 12 and under: free'],
        },
        linkLabel: 'HSR fares',
        linkUrl: 'https://www.hamilton.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for the falls and the conservation areas; book parking at the popular ones.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike Share', text: 'Hamilton has a city bike-share system for the lower city.' },
          { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'GO Transit', text: 'For Toronto and Burlington; separate fares from HSR.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, James North, Locke and the waterfront are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Waterfall tip:',
      text: 'Visit the famous falls on a weekday morning in spring. Flow is strongest, crowds are smallest, and weekend reservation systems usually are not in force.',
    },
  },

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 13% HST. Hotels charge Hamilton’s 4% Municipal Accommodation Tax, and since 1 July 2026 short-term rentals do too, for stays of 29 nights or less. HST is also charged on the accommodation tax itself.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Hamilton / Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 13% HST + 4% MAT' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 13% HST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 13% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum and garden admission: 13% HST' },
    ],
    exempt: [
      { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', label: 'Most waterfalls and trails: free (some parking fees)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no HST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no HST' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 30+ nights: no MAT' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '⚠️', iconSrc: '/icons/attractions/ph_warning-thin.svg', title: 'Waterfall Safety', text: 'The escarpment kills people. Stay on marked trails, respect fences, and never climb on the falls — especially in wet or icy conditions.' },
    { icon: '🅿️', iconSrc: '/icons/attractions/ph_garage-thin.svg', title: 'Book the Popular Falls', text: 'Webster’s, Tew’s and Dundas Peak have managed access and parking fees on busy days. Check the Hamilton Conservation Authority before driving out.' },
    { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'LRT Construction', text: 'Main and King streets are being dug up for the light rail. Allow extra time downtown and check detours.' },
    { icon: '🏭', iconSrc: '/icons/attractions/ph_factory-thin.svg', title: 'A Working City', text: 'Steel still matters here. In 2026 US tariffs pushed Stelco to idle finishing lines at Hamilton Works, with hundreds of jobs affected. It is part of the city you are visiting.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Ontario still changes its clocks.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Tap a credit card or phone on HSR buses for the adult fare, or use Presto.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Hamilton is within the lands protected by the Dish With One Spoon wampum, an agreement between the Haudenosaunee and Anishinaabek to share the land, and is covered by the Between the Lakes Purchase of 1792 with the Mississaugas of the Credit. The city acknowledges the Erie, Neutral, Huron-Wendat, Haudenosaunee and Mississaugas as its traditional peoples.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hamilton General Hospital', '237 Barton Street East', 'Emergencies: call 911'] },
  ],
};

export default HAMILTON;
