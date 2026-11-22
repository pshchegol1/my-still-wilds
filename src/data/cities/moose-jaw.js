// Moose Jaw — данные страницы /city/moose-jaw (Мус-Джо, САСКАЧЕВАН)
// Видео Мус-Джо в бесплатных банках нет (Pexels: только лоси, не город).
// В шапке фото с Wikimedia Commons — центр Мус-Джо сверху с ж/д путями,
// автор Quintin Soloviev, август 2026, CC BY 4.0 — лицензия требует
// автора, отсюда heroCredit.
// Население — перепись 2021 года (33 665; Moose Jaw Today, StatCan).
// Тариф наличными $3.25 — с 1 февраля 2023 (Discover Moose Jaw); цены
// проездных не нашли — «уточняйте». Больница — SHA (55 Diefenbaker Dr).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Туннели, Temple Gardens, Snowbirds в 15 Wing, Mac the Moose, мурали —
// из общих знаний.

export const MOOSE_JAW = {
  slug: 'moose-jaw',
  name: 'Moose Jaw',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · The Friendly City',
  accentLevel: 'caution',
  heroIcon: '🫎',
  heroImage: '/Cities/MooseJaw/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.3934, lon: -105.5519 },
  subtitle: 'Tunnels, Mineral Springs and Snowbirds',
  description:
    'A prairie railway town with a famously quirky name, Moose Jaw hides a network of old tunnels under its downtown, soaks visitors in a geothermal mineral pool and is home base for Canada’s Snowbirds aerobatic team. Murals cover its heritage buildings, and a giant moose statue greets you off the highway.',

  actions: [
    { label: 'Explore Moose Jaw', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈33.7K (2021)' },
    { label: 'Rank in Saskatchewan', value: '4th largest' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Regina', value: '≈45 min by car' },
    { label: 'Air Base', value: '15 Wing Moose Jaw' },
  ],

  badges: ['Tunnels', 'Mineral Spa', 'Snowbirds'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '33,665', label: 'People in the 2021 census — Saskatchewan’s fourth-largest city', level: 'blue' },
    { value: '15 Wing', label: 'The air force base that is home to the Snowbirds aerobatic team', level: 'purple' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks', level: 'gold' },
    { value: '$3.25', label: 'A city bus ride in cash (since 2023 — confirm current fares)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Historic Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Main Street heritage buildings, murals and tunnel tours',
      details: {
        "lead": "Downtown Moose Jaw, with the murals, the Tunnels office on Main Street and the city’s heritage buildings.",
        "see": [
          {
            "title": "Murals",
            "text": "Sources count 40 to 47 giant outdoor murals; free maps are available from the visitor centre or the Downtown Moose Jaw Association."
          },
          {
            "title": "Tunnels of Moose Jaw",
            "text": "Tours start at 18 Main Street N; winter hours are listed Wednesday to Sunday."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The city centre."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "The mural count differs by source."
          }
        ],
        "link": {
          "label": "Tourism Moose Jaw",
          "url": "https://tourismmoosejaw.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'River Street', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: 'Old town', tagLevel: 'danger', meta: 'Historic downtown centrepiece; a mural there recalls its 1920s nightlife',
      details: {
        "lead": "The historic centrepiece of downtown Moose Jaw.",
        "see": [
          {
            "title": "Revitalisation",
            "text": "A 2000 provincial release put $3 million toward revitalising River Street."
          },
          {
            "title": "Mural",
            "text": "A mural on River Street recalls its 1920s nightlife."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "No source confirmed which hotels or businesses remain on the street."
          }
        ],
        "link": {
          "label": "Province of Saskatchewan: River Street redevelopment",
          "url": "https://www.saskatchewan.ca/government/news-and-media/2000/august/08/moose-jaws-river-street-to-be-redeveloped"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Crescent Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'safe', meta: 'Central 28-acre park with a band shell, the 1912 library and a cenotaph',
      details: {
        "lead": "A 28-acre park in the heart of the city.",
        "see": [
          {
            "title": "Band shell",
            "text": "A mural on the band shell gives a pictorial history of Moose Jaw from 1902 to 2003."
          },
          {
            "title": "Library and cenotaph",
            "text": "The Public Library (1912) is on the west side; the cenotaph followed in 1923."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "The library and downtown shops are close by."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Crescent Park",
          "url": "https://tourismsaskatchewan.com/listings/2236/crescent-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Wakamow Valley', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Valley', tagLevel: 'blue', meta: 'River valley parkland with trails along the Moose Jaw River',
      details: {
        "lead": "An urban natural park of nearly 500 acres along the Moose Jaw River, with more than 20 km of trails.",
        "see": [
          {
            "title": "Trails",
            "text": "Over 20 km of trails, open year-round according to the city; one guide says dawn to dusk."
          },
          {
            "title": "Wakamow office",
            "text": "Monday to Friday 8:30 am–5 pm, closed 12:30–2 pm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the river in the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "The dawn-to-dusk hours are not an official schedule."
          }
        ],
        "link": {
          "label": "City of Moose Jaw: Wakamow Valley",
          "url": "https://moosejaw.ca/parks-recreation-culture/parks-trails/wakamow-valley/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tourism Info & Mac', icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', tag: 'Photo stop', tagLevel: 'olive', meta: 'Mac the Moose beside the Trans-Canada',
      details: {
        "lead": "Mac the Moose, beside the Moose Jaw visitor centre at Thatcher Drive East and the Trans-Canada Highway.",
        "see": [
          {
            "title": "Mac the Moose",
            "text": "A 1984 sculpture by Saskatoon artist Don Foulds. New antlers in October 2019 made it 10.36 m (34 ft), the world’s tallest moose; older reports give 9.8 m."
          },
          {
            "title": "Visitor centre",
            "text": "Maps and trip-planning help."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Beside the Trans-Canada Highway, at Thatcher Drive East."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          },
          {
            "label": "Good to know",
            "text": "Mac was moved 2 km to this site in 2004."
          }
        ],
        "link": {
          "label": "Mac the Moose",
          "url": "https://en.wikipedia.org/wiki/Mac_the_Moose"
        },
        "checked": "November 2026"
      },
    },
    { name: '15 Wing', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Base', tagLevel: 'purple', meta: 'Military flight training base south of the city',
      details: {
        "lead": "Saskatchewan’s only military base, 6 km south of the city: the RCAF’s centre for initial pilot training.",
        "see": [
          {
            "title": "Flying training",
            "text": "The commander of 15 Wing also directs NATO Flying Training in Canada; student pilots earn their wings here."
          },
          {
            "title": "Snowbirds",
            "text": "The Snowbirds are based here. The team was grounded after the 2026 season, with its last show on October 11, 2026."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of Moose Jaw; a military base."
          },
          {
            "label": "Good to know",
            "text": "The training contracts are listed as expiring in 2027."
          }
        ],
        "link": {
          "label": "RCAF: 15 Wing",
          "url": "https://www.canada.ca/en/air-force/corporate/wings/15-wing.html"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Tunnels of Moose Jaw',
      icon: '🕯️', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'Costumed guided tours under the downtown streets tell stories of Prohibition-era bootlegging and of Chinese immigrants in the early 1900s. Local legend links the tunnels to Al Capone — a tale that has never been proven.',
      tags: [{ label: 'Paid tours', level: 'gold' }, { label: 'Book ahead', level: 'caution' }],
      details: {
        "lead": "Costumed tours of tunnels under downtown: Prohibition-era bootlegging and the history of Chinese immigrants.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The tours",
                "text": "The Chicago Connection (bootlegging and Al Capone legends) and Passage to Fortune (Chinese history); Bunker 24 is a third tour."
              },
              {
                "title": "Winter hours",
                "text": "November 1 to March 31: Wednesday to Friday 9:30 am–4:30 pm, Saturday 9:30 am–5:30 pm, Sunday 11:30 am–4:30 pm."
              },
              {
                "title": "Prices",
                "text": "An older guide gave $15 for one tour and $25 for both for adults; a newer listing shows about $23.51. Confirm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Book ahead",
                "text": "Book on tunnelsofmoosejaw.com; combo tours are said to save over 15%."
              },
              {
                "title": "Capone",
                "text": "The link to Al Capone has never been proven."
              },
              {
                "title": "Length",
                "text": "About 50 minutes to an hour per tour."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $15 and up per tour."
          },
          {
            "label": "Getting there",
            "text": "18 Main Street N."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tunnels of Moose Jaw",
          "url": "https://tunnelsofmoosejaw.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Temple Gardens Mineral Spa',
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      text: 'A hotel spa with a rooftop pool filled with warm mineral water drawn from deep underground — a favourite in winter, when steam rises into the cold air.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A hotel spa with an indoor-outdoor rooftop pool of geothermal mineral water drawn from about 1,350 m underground.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The water",
                "text": "Geothermal mineral water from ancient sea beds; the spa opened in 1996."
              },
              {
                "title": "Hours",
                "text": "Sources conflict: Tourism Moose Jaw lists 10 am–11 pm Sunday to Thursday and 10 am–8:30 pm Friday and Saturday; a booking site says 7 am to 11 pm or midnight."
              },
              {
                "title": "Day passes",
                "text": "Non-guests can buy day passes; hotel guests swim free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Price",
                "text": "No current price was found; the only table was about 11 years old."
              },
              {
                "title": "Contact",
                "text": "Phone (306) 694-5055."
              },
              {
                "title": "Winter",
                "text": "A favourite in winter, when steam rises into the cold air."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the day-pass price."
          },
          {
            "label": "Getting there",
            "text": "24 Fairford Street East."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Temple Gardens",
          "url": "https://www.templegardenscentre.ca/plan-your-visit/things-to-do"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Mac the Moose',
      icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'A giant moose statue at the visitor centre by the Trans-Canada Highway — the city’s friendly mascot and an essential photo stop.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Roadside', level: 'danger' }],
      details: {
        "lead": "A 1984 steel-and-concrete moose by Don Foulds, beside the visitor centre on the Trans-Canada Highway.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Height",
                "text": "New antlers in October 2019 raised it to 10.36 m (34 ft), reclaiming the title of tallest moose; older reports say 9.8 m."
              },
              {
                "title": "Location",
                "text": "At Thatcher Drive East and the Trans-Canada Highway."
              },
              {
                "title": "Moved",
                "text": "Mac was moved 2 km by flatbed in 2004."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Visitor centre",
                "text": "Pick up maps and trip help next door."
              },
              {
                "title": "Free",
                "text": "Free to see."
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
            "text": "At the highway and Thatcher Drive East."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Mac the Moose",
          "url": "https://en.wikipedia.org/wiki/Mac_the_Moose"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Downtown Murals',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Dozens of large murals on heritage buildings illustrate the city’s history — pick up a walking-tour map.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Self-guided', level: 'purple' }],
      details: {
        "lead": "Dozens of large murals on downtown heritage buildings illustrate the city’s history.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Count",
                "text": "Sources give 40 to 47 outdoor murals; one calls Moose Jaw the mural capital of North America."
              },
              {
                "title": "Maps",
                "text": "Free maps are at the visitor centre; the Downtown Moose Jaw Association offers one online."
              },
              {
                "title": "Band shell",
                "text": "The Crescent Park band shell carries a mural history of the city."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Audio tour",
                "text": "A paid smartphone audio walking tour also exists."
              },
              {
                "title": "Confirm",
                "text": "Check the map is current."
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
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: murals of Moose Jaw",
          "url": "https://tourismsaskatchewan.com/listings/505/murals-of-moose-jaw"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Western Development Museum',
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      text: 'The Moose Jaw branch of the Western Development Museum is dedicated to transportation history and has a short-line railway.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "The Moose Jaw branch is dedicated to transportation history, with a short-line railway.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "One listing gives 9 am–5 pm daily; an older one says closed Mondays from January to April."
              },
              {
                "title": "Admission",
                "text": "An undated listing gives $10.57 for adults, $26.43 family, $7.40 students."
              },
              {
                "title": "Visit length",
                "text": "The museum suggests at least an hour to an hour and a half."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check wdm.ca for hours and winter closures."
              },
              {
                "title": "Events",
                "text": "A Night at the Museum event ran October 30, 2026."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $10 on an undated listing."
          },
          {
            "label": "Getting there",
            "text": "50 Diefenbaker Drive."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Western Development Museum: Moose Jaw",
          "url": "https://wdm.ca/moose-jaw/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Snowbirds Air Shows',
      icon: '🛩️', iconSrc: '/icons/attractions/ph_airplane-thin.svg',
      text: 'The Canadian Forces Snowbirds are based at 15 Wing, but the team was grounded after its final 2026 show season, with no flying expected until new trainers arrive, reportedly in the early 2030s.',
      tags: [{ label: 'Grounded', level: 'caution' }, { label: 'History', level: 'blue' }],
      details: {
        "lead": "The Snowbirds (431 Air Demonstration Squadron) are based at 15 Wing; the team ended its 55th and final jet season in 2026.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Grounding",
                "text": "The defence minister announced on May 19, 2026 that the Snowbirds’ CT-114 Tutor jets would be grounded after the 2026 season."
              },
              {
                "title": "Last show",
                "text": "The final show was scheduled for October 11, 2026."
              },
              {
                "title": "Hometown show",
                "text": "The Moose Jaw hometown show on July 11, 2026 sold out."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Return",
                "text": "Reports expect no public flying until new trainers arrive in the early 2030s; sources differ on whether the squadron stays on the books."
              },
              {
                "title": "No shows now",
                "text": "There are no Snowbirds shows to see in the near term."
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
            "text": "15 Wing, south of Moose Jaw."
          },
          {
            "label": "Best time",
            "text": "Not currently scheduled."
          }
        ],
        "link": {
          "label": "CBC: Snowbirds’ final home airshow",
          "url": "https://www.cbc.ca/news/canada/saskatchewan/snowbirds-final-home-airshow-9.7382397"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Valley Trails and Prairie Lakes',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Wakamow Valley', dist: 'In the city', text: 'Trails, bridges and picnic areas along the Moose Jaw River.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Buffalo Pound Provincial Park', dist: '≈30 min northeast', text: 'A long valley lake with beaches, trails and a small bison herd.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Valley paths', text: 'Easy riding on park paths and quiet streets.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Crescent Park', text: 'Outdoor skating when it freezes.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Prairie Sky', dist: 'Everywhere', text: 'Huge sunsets and summer thunderstorms over open fields.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Lakes & sloughs', text: 'Waterfowl and shorebirds in spring and fall.' },
  ],

  food: [
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Main Street', areaLevel: 'gold', text: 'Classic prairie diners and family restaurants.' },
    { icon: '🥡', iconSrc: '/icons/attractions/ph_package-thin.svg', title: 'Chinese-Canadian', area: 'Downtown', areaLevel: 'danger', text: 'A long tradition of small-town Chinese-Canadian restaurants.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'olive', text: 'Coffee shops in heritage buildings.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'City', areaLevel: 'purple', text: 'Local taprooms and pubs.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'blue', text: 'Saskatchewan beef on many menus.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Saskatoon Berries', area: 'Bakeries', areaLevel: 'safe', text: 'Berry pies and preserves.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Mild days return; the valley greens up in May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot and sunny — tunnel tours, patios, and possible Snowbirds shows.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Crisp days and golden fields around the city.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Spa season', text: 'Cold and windy — the perfect time for the outdoor mineral pool.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) runs past the city, about 70 km west of Regina.',
      time: '≈45 min from Regina',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Regina International (YQR) is the nearest commercial airport.',
      time: '≈50 min by car',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches between Regina and Calgary may stop here. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail service to Moose Jaw.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg',
      title: 'Downtown',
      area: 'Near the spa & tunnels',
      text: 'Stay steps from Temple Gardens, the tunnels and Main Street.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moose+Jaw', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Moose%20Jaw%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Highway Hotels',
      area: 'Trans-Canada',
      text: 'Chain hotels by the highway near Mac the Moose.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moose+Jaw+Saskatchewan', level: 'blue' },
      ],
    },
    {
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Buffalo Pound',
      area: 'Camping',
      text: 'Provincial park campgrounds by the lake.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Moose Jaw Transit',
      text: 'The city runs a small bus network linking downtown with the main neighbourhoods. Service is limited on evenings and Sundays.',
      linkLabel: 'City of Moose Jaw',
      linkUrl: 'https://moosejaw.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'The adult cash fare rose to $3.25 on February 1, 2023, and the city’s fares page (undated) still lists it. No day-pass price was found — confirm with the city before you travel.',
        fareBox: {
          label: 'Adult',
          lines: ['Cash: $3.25', '10 rides: $32.50', 'Monthly pass: $80 (students $65, seniors $44)', 'Confirm current prices'],
        },
        linkLabel: 'City of Moose Jaw',
        linkUrl: 'https://moosejaw.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the spa, tunnels and murals are close together.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Buffalo Pound and day trips.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Wakamow Valley paths.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Day-trip tip:',
      text: 'From Regina, Moose Jaw makes a perfect day: tunnel tour in the morning, mural walk at lunch, mineral pool in the evening.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Moose Jaw / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', label: 'Spa admission: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tunnel tours: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', label: 'Mac the Moose: free' },
      { icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', label: 'Mural walk: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year.' },
    { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Book Tunnel Tours', text: 'Tours run on set schedules and can sell out on summer weekends.' },
    { icon: '♨️', iconSrc: '/icons/attractions/ph_thermometer-hot-thin.svg', title: 'Pack a Swimsuit', text: 'Even in winter — the outdoor mineral pool is the city’s best warm-up.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Strong winds and blowing snow in winter — check highway conditions.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Thunderstorms can build fast on hot afternoons.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Mosquitoes', text: 'Bring repellent for the valley trails in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Moose Jaw is on Treaty 4 territory, the traditional lands of the Cree, Saulteaux, Dakota, Lakota and Nakoda peoples, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dr. F.H. Wigmore Regional Hospital', '55 Diefenbaker Dr', 'Emergencies: call 911'] },
  ],
};

export default MOOSE_JAW;
