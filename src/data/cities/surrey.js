// Surrey — данные страницы /city/surrey
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется):
// дрон над Surrey City Centre. Проверено по кадрам — эстакада SkyTrain,
// станция, автобусная петля TransLink и башни Уолли. Это именно Surrey
// в Британской Колумбии, а не графство Surrey в Англии: по слову
// "surrey" банки отдают в основном английские пляжи, так что кадры
// сверялись вручную. Оригинал был 50 с и 110 МБ при 17 Мбит/с —
// обрезан до 20 с и пережат до ~6,7 МБ, постер вырезан из первого
// кадра.
// Население — оценка BC Stats на 19 декабря 2025, а не перепись:
// разрыв между ними большой, поэтому в тексте прямо сказано, чья это
// цифра. Остальные данные (тарифы, расстояния, даты) — из проверенных
// источников на октябрь 2026; расписания и цены меняются, поэтому
// везде сказано сверяться перед поездкой.

export const SURREY = {
  slug: 'surrey',
  name: 'Surrey',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · South of the Fraser',
  accentLevel: 'safe',
  heroIcon: '🏙️',
  heroImage: '/Cities/Surrey/hero-poster.jpg',
  heroVideo: '/Cities/Surrey/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.1913, lon: -122.849 },
  subtitle: 'Six Towns Becoming One City',
  description:
    'The fastest-growing city in British Columbia, and on current projections the largest one by the end of the decade. Surrey is not a single downtown but six communities stitched together across the land south of the Fraser — towers and SkyTrain in one corner, a rodeo ground in another, beach and tidal flats in a third, and more than eight hundred parks in between.',

  actions: [
    { label: 'Explore Surrey', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈734K' },
    { label: 'Climate', value: 'Oceanic' },
    { label: 'City Parks', value: '800+' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈30 km · 45 min' },
    { label: 'To the US Border', value: '≈20 min' },
  ],

  badges: ['Fastest-Growing in BC', 'City of Parks', 'Coast Salish Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'olive', rating: 4 },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '≈734K', label: 'People, on the BC Stats estimate for 2026 — the census count is lower, and the two are measured differently', level: 'blue' },
    { value: '800+', label: 'Parks managed by the city, most of them protecting natural areas rather than playing fields', level: 'safe' },
    { value: '550K+', label: 'People at the 2025 Vaisakhi parade, by RCMP estimate — the largest Sikh celebration in the world', level: 'purple' },
    { value: '2029', label: 'Target opening for the SkyTrain extension to Langley, now under construction across the city', level: 'gold' },
  ],

  neighbourhoods: [
    { name: 'City Centre (Whalley)', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'The new downtown', tagLevel: 'gold', meta: 'SkyTrain · Towers and cranes · SFU Surrey · Central City · Civic Plaza',
      details: {
        "lead": "The new downtown, being built around the SkyTrain. City Hall, Civic Plaza, the City Centre Library, SFU Surrey, a KPU campus and Holland Park are all here.",
        "see": [
          {
            "title": "Civic Plaza",
            "text": "The City Hall plaza opened in 2014. The annual Tree Lighting Festival takes place there every November."
          },
          {
            "title": "Holland Park",
            "text": "Host to many festivals, including the Surrey Fusion Festival (July 18–19 in 2026, free)."
          },
          {
            "title": "Central City",
            "text": "The shopping centre sits next to Surrey Central station with 130 to 140+ stores (counts vary), and SFU’s campus occupies its upper floors."
          }
        ],
        "eat": [
          {
            "title": "Central City",
            "text": "A T&T Supermarket and restaurants in the mall."
          },
          {
            "title": "Holland Park events",
            "text": "During festivals the park has many food pavilions."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "SkyTrain Expo Line to Surrey Central."
          },
          {
            "label": "Construction",
            "text": "The area is being rebuilt from a suburb into a downtown, so expect cranes and changing routes."
          },
          {
            "label": "Time to allow",
            "text": "A couple of hours."
          }
        ],
        "link": {
          "label": "City of Surrey: City Centre",
          "url": "https://www.surrey.ca/about-surrey/our-communities/city-centre"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Guildford', icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', tag: 'North-east', tagLevel: 'blue', meta: 'The big mall · Recreation centre · Closest to Tynehead and Highway 1',
      details: {
        "lead": "The north-east of the city, built around a large shopping mall, and the closest part of Surrey to Tynehead Regional Park and Highway 1.",
        "see": [
          {
            "title": "Guildford Town Centre",
            "text": "A large mall at 10355 152nd Street, with many stores, restaurants and a cinema."
          },
          {
            "title": "Tynehead Regional Park",
            "text": "More than 250 hectares of forest trails and meadows for walking and cycling, with a salmon hatchery."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North-east Surrey; a car is easiest for Tynehead."
          },
          {
            "label": "Time to allow",
            "text": "An hour at the mall, half a day at Tynehead."
          },
          {
            "label": "Good to know",
            "text": "Check the hatchery’s season before planning a visit."
          }
        ],
        "link": {
          "label": "Tourism Surrey",
          "url": "https://discoversurreybc.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Fleetwood', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Middle', tagLevel: 'safe', meta: 'Quiet residential · Fraser Highway · Three SkyTrain stations under construction',
      details: {
        "lead": "Quiet residential streets along Fraser Highway, and the part of Surrey where the SkyTrain extension to Langley is being built.",
        "see": [
          {
            "title": "The SkyTrain extension",
            "text": "The roughly 16 km Surrey-Langley line runs mainly along Fraser Highway from King George station to 203 Street in Langley. A May 2026 update said all eight stations were under construction and service is expected in late 2029."
          },
          {
            "title": "Fleetwood stations",
            "text": "Three stations: 152 Street, Fleetwood at 160 Street, and Bakerview at 166 Street, next to the Surrey Sports and Leisure Complex."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By bus along Fraser Highway for now; the SkyTrain will arrive later."
          },
          {
            "label": "Construction",
            "text": "Expect lane closures and changed bus routing along the line."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential, so not a sightseeing area."
          }
        ],
        "link": {
          "label": "Fleetwood Plan: City of Surrey",
          "url": "https://fleetwoodplan.surrey.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Newton', icon: '🪔', iconSrc: '/icons/attractions/ph_flame-thin.svg', tag: 'Most populated', tagLevel: 'purple', meta: 'Punjabi businesses and gurdwaras · Scott Road · Bear Creek Park',
      details: {
        "lead": "The most populous community in Surrey and one of Canada’s largest concentrations of South Asian businesses, along Scott Road and 128 Street.",
        "see": [
          {
            "title": "Scott Road and 128 Street",
            "text": "Grocers, sweet shops and restaurants, along 120 Street (Scott Road) and along 128 Street from 64 Avenue to 88 Avenue."
          },
          {
            "title": "Bear Creek Park",
            "text": "A regional park of 140 to 173 acres (sources differ) with gardens, trails, a pool and a miniature railway."
          },
          {
            "title": "Gurdwara Sahib Dasmesh Darbar",
            "text": "The gurdwara in Newton that presents Surrey’s Vaisakhi parade each April."
          }
        ],
        "eat": [
          {
            "title": "Newton food crawl",
            "text": "Punjabi sweets, butter chicken and chai along the main streets."
          },
          {
            "title": "Scott Road",
            "text": "Indian restaurants are concentrated here on the Surrey-Delta border."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Newton Exchange is a bus hub; the R6 Scott Road RapidBus runs from Scott Road Station to Newton."
          },
          {
            "label": "Time to allow",
            "text": "A couple of hours for a food crawl."
          },
          {
            "label": "Good to know",
            "text": "Gurdwaras are active places of worship; cover your head and ask staff about local customs."
          }
        ],
        "link": {
          "label": "Tourism Surrey",
          "url": "https://discoversurreybc.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Cloverdale', icon: '🤠', iconSrc: '/icons/attractions/ph_horse-thin.svg', tag: 'Heritage town', tagLevel: 'olive', meta: 'Old main street · Surrey Museum · Rodeo grounds · A regular film location',
      details: {
        "lead": "A heritage town inside the city, with an old main street, the Museum of Surrey and the rodeo grounds. Film crews often use the street.",
        "see": [
          {
            "title": "Museum of Surrey",
            "text": "17710 56A Avenue. Tuesday to Saturday, 9:30 am–5:30 pm and Sunday noon–5 pm, closed Monday. Admission is free. It closes for a few weeks around the winter holidays; call 604-592-6956 to confirm."
          },
          {
            "title": "Historic main street",
            "text": "A nineteenth-century main street, and a regular film location."
          },
          {
            "title": "Cloverdale Rodeo and Country Fair",
            "text": "Held over the Victoria Day long weekend; in 2026 it ran May 14–18 at the fairgrounds."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the east of Surrey; a car or bus."
          },
          {
            "label": "Time to allow",
            "text": "Two hours for the museum and the street."
          },
          {
            "label": "Good to know",
            "text": "Rodeo weekend brings crowds and road closures."
          }
        ],
        "link": {
          "label": "Museum of Surrey",
          "url": "https://www.surrey.ca/news-events/news/museum-of-surrey-reopens-january-18"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South Surrey & Crescent Beach', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: 'The coast', tagLevel: 'caution', meta: 'Boundary Bay · Blackie Spit · Redwood Park · Peace Arch border crossing',
      details: {
        "lead": "The seaside end of the city, on Boundary Bay, with Crescent Beach, Blackie Spit and Redwood Park, close to the border.",
        "see": [
          {
            "title": "Blackie Spit",
            "text": "A strong birding site on Boundary Bay, part of the Pacific Flyway. The park has parking, beach access, a trail to the point and two dog off-leash areas. The entrance is at 3136 McBride Avenue."
          },
          {
            "title": "Crescent Beach",
            "text": "A beach community with a sandy beach, a pier and a marina at the mouth of the Nicomekl River."
          },
          {
            "title": "Redwood Park",
            "text": "17900 20 Avenue. The largest stand of redwoods north of California, with more than 5 km of trails."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A car-based part of the city, far from the SkyTrain."
          },
          {
            "label": "Tide",
            "text": "Check the tide: low tide exposes the sand, while at high tide there is not much beach."
          },
          {
            "label": "Good to know",
            "text": "Parking fills early on hot weekends."
          }
        ],
        "link": {
          "label": "City of Surrey: Crescent Beach",
          "url": "https://www.surrey.ca/parks-recreation/parks/crescent-beach"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Green Timbers Urban Forest',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'The old-growth here was logged to the last giant tree, and in March 1930 the BC Forest Service replanted the cleared ground — British Columbia’s first reforestation project. Only a couple of dozen trees from that first planting survive, and they stand in what is now a city park with a lake, trails and picnic ground. Nothing about it looks dramatic; what it is, is the place the province started growing forests back.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Historic', level: 'gold' }],
      details: {
        "lead": "The site of British Columbia’s first reforestation project. The BC Forest Service replanted the cleared ground on March 15, 1930, at 140 Street and 96 Avenue.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The inaugural plantation",
                "text": "Only 27 trees from the original 1930 planting survive at the site."
              },
              {
                "title": "The park",
                "text": "It became a park in 1974, and residents voted to designate parts of it as an urban forest in 1988 and 1996."
              },
              {
                "title": "Trails and lake",
                "text": "One travel article describes about 10 km of nature trails and fishing at the lake."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Low-key",
                "text": "Nothing about it looks dramatic; it is a place to walk and learn."
              },
              {
                "title": "Sources differ",
                "text": "The size of the original forest is reported as 5,000, 2,000 or 640 acres; the park is listed at 560 acres."
              },
              {
                "title": "Heritage Society",
                "text": "The Green Timbers Heritage Society, founded in 1987, works with Surrey Parks on trails and access."
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
            "text": "In Surrey’s north; the Green Timbers SkyTrain station is under construction."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Surrey: Green Timbers inaugural plantation",
          "url": "https://surrey.ca/culture-recreation/3409.aspx"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Vaisakhi & the Gurdwaras',
      icon: '🪔', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'Surrey’s Vaisakhi parade is the largest outside India — organizers reported more than 450,000 people in April 2026. It runs in April from Gurdwara Sahib Dasmesh Darbar in Newton, and volunteers hand out free vegetarian food along the whole route, as langar tradition requires. Check the date each spring; it moves.',
      tags: [{ label: 'April', level: 'purple' }, { label: 'Free food', level: 'safe' }],
      details: {
        "lead": "Surrey’s Khalsa Day Vaisakhi parade is the largest outside India. The 2026 parade was held on Saturday, April 18, presented by Gurdwara Sahib Dasmesh Darbar in Newton.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Attendance",
                "text": "Organizers forecast more than 600,000 people and later reported more than 450,000 for 2026."
              },
              {
                "title": "The parade",
                "text": "The 28th annual parade featured over 2,500 participants from 20 community organizations."
              },
              {
                "title": "Free food",
                "text": "Volunteers hand out free vegetarian food along the route, as langar tradition requires."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Dates move",
                "text": "Check the date each spring; it falls in April."
              },
              {
                "title": "Crowds",
                "text": "Roads around the gurdwara are closed and crowds are very large; arrive early and use transit."
              },
              {
                "title": "Respect",
                "text": "It is a religious celebration. Dress modestly and follow volunteers’ directions."
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
            "text": "In Newton; the parade starts at the gurdwara, which one report puts on 85 Avenue."
          },
          {
            "label": "Best time",
            "text": "April, on the parade day."
          }
        ],
        "link": {
          "label": "CBC: Surrey Vaisakhi 2026",
          "url": "https://www.cbc.ca/news/canada/british-columbia/vaisakhi-surrey-2026-9.7169107"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Crescent Beach & Blackie Spit',
      icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'A low sandy corner of South Surrey on Boundary Bay, with a village-sized beach community and, at Blackie Spit, one of the better birding spots in the region — the tidal flats draw migrating shorebirds in spring and autumn. Parking fills early on hot weekends, and the tide goes out a very long way.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Birding', level: 'blue' }],
      details: {
        "lead": "A low sandy corner of South Surrey on Boundary Bay. Blackie Spit is a strong site for shorebirds and marine birds.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Blackie Spit birding",
                "text": "Part of the Boundary Bay system on the Pacific Flyway, with herons, eagles and flocks of shorebirds."
              },
              {
                "title": "Facilities",
                "text": "Parking, beach access, a trail to the point and back, washrooms and two dog off-leash areas."
              },
              {
                "title": "Crescent Beach",
                "text": "A sandy beach, a pier, and the Crescent Beach Marina at the mouth of the Nicomekl River."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check the tide",
                "text": "The city recommends checking the tide; low tide exposes the sand and the tide goes out a very long way."
              },
              {
                "title": "Parking",
                "text": "Blackie Spit has the most reliable parking; the village lots fill early on hot weekends."
              },
              {
                "title": "Dog rules",
                "text": "Sources differ on when the swimming area for dogs can be used; check the posted rules."
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
            "text": "The main entrance to Blackie Spit is at 3136 McBride Avenue; a car is easiest."
          },
          {
            "label": "Best time",
            "text": "Spring and autumn for shorebirds; early on summer weekends."
          }
        ],
        "link": {
          "label": "City of Surrey: Crescent Beach",
          "url": "https://www.surrey.ca/parks-recreation/parks/crescent-beach"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Historic Cloverdale & the Museum of Surrey',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A nineteenth-century main street that somehow survived inside a city of three-quarters of a million people, with the Museum of Surrey and the city archives at its centre. Film crews use the street often enough that you may arrive to find it dressed as somewhere else entirely.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walkable', level: 'blue' }],
      details: {
        "lead": "A nineteenth-century main street inside a big modern city, with the Museum of Surrey and the city archives at its centre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Museum of Surrey",
                "text": "17710 56A Avenue. Tuesday to Saturday, 9:30 am–5:30 pm; Sunday noon–5 pm; closed Monday."
              },
              {
                "title": "Free admission",
                "text": "Admission is free, sponsored by the Friends of the Surrey Museum and Archives Society."
              },
              {
                "title": "Film location",
                "text": "Crews use the street often enough that it may be dressed as somewhere else."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Holiday closure",
                "text": "The museum closes for a few weeks over the winter holidays, usually from just before Christmas to mid-January."
              },
              {
                "title": "Confirm",
                "text": "Call 604-592-6956 to confirm hours, especially around holidays."
              },
              {
                "title": "Walkable",
                "text": "The main street is compact and easy on foot."
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
            "text": "In Cloverdale, east of the city centre."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "City of Surrey: Museum of Surrey",
          "url": "https://www.surrey.ca/news-events/news/museum-of-surrey-reopens-january-18"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cloverdale Rodeo & Country Fair',
      icon: '🤠', iconSrc: '/icons/attractions/ph_horse-thin.svg',
      text: 'The fair dates from 1888 and moved to the Cloverdale grounds in 1938; the rodeo was added in the mid-1940s. It now runs over the Victoria Day long weekend in May. Worth knowing before you buy a ticket: after a calf died at the 2007 event the rodeo dropped four timed events, which took it off the professional circuit — the animal-welfare argument around it has not gone away.',
      tags: [{ label: 'May long weekend', level: 'olive' }, { label: 'Contested', level: 'danger' }],
      details: {
        "lead": "The fair dates from 1888, and the rodeo was added in the mid-1940s. It runs over the Victoria Day long weekend; the 2026 event was May 14–18.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 hours",
                "text": "Thursday 4–10:30 pm, Friday 4–11 pm, Saturday and Sunday 10 am–11 pm, Monday 10 am–6 pm, with entry closing about an hour earlier."
              },
              {
                "title": "Parade",
                "text": "The Cloverdale Rodeo Parade was on Saturday, May 16."
              },
              {
                "title": "Concerts",
                "text": "All-ages concerts are included with general admission."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "The organizer listed fair admission from $18 for one day or $36 for the weekend, with kids 12 and under free. Rodeo tickets are separate, up to about $53 for ages 13 and up."
              },
              {
                "title": "Welfare debate",
                "text": "After a calf died at the 2007 event the rodeo dropped four timed events. The animal-welfare argument around it continues."
              },
              {
                "title": "Next year",
                "text": "2027 details were not available; check cloverdalerodeo.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; fair admission from $18 a day in 2026, rodeo extra."
          },
          {
            "label": "Getting there",
            "text": "Cloverdale Fairgrounds."
          },
          {
            "label": "Best time",
            "text": "The Victoria Day long weekend in May."
          }
        ],
        "link": {
          "label": "Cloverdale Rodeo & Country Fair",
          "url": "https://cloverdalerodeo.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Redwood Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'The twin brothers David and Peter Brown were given land by their father (dated to 1881 or 1893, depending on the source) and planted it with trees from around the world. They lived in a treehouse on the property; a replica stands in the middle of the park today. The grove is the strangest-feeling piece of forest in the city.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Dawn to dusk', level: 'blue' }],
      details: {
        "lead": "The legacy of twin brothers David and Peter Brown, who filled their land with trees from around the world. It holds the largest stand of redwoods north of California.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The brothers",
                "text": "The Browns built a treehouse and lived there in solitude until their deaths in 1949 and 1958."
              },
              {
                "title": "The replica",
                "text": "The original became unstable and was removed by 1986; a replica now stands in the centre of the park."
              },
              {
                "title": "Trails",
                "text": "More than 5 km of nature trails, at 17900 20 Avenue in South Surrey."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Sources differ",
                "text": "The land gift is dated 1881 or 1893, and the acreage ranges from 40 to 80 acres."
              },
              {
                "title": "Heritage listing",
                "text": "The park is on the Canadian Register of Historic Places."
              },
              {
                "title": "Hours",
                "text": "Open from dawn to dusk."
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
            "text": "South Surrey, on 20 Avenue; a car is easiest."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "City of Surrey: Redwood Park",
          "url": "https://www.surrey.ca/parks-recreation/parks/redwood-park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Surrey Fusion Festival',
      icon: '🎪', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      text: 'Two days in July at Holland Park, free to enter, with around fifty cultural pavilions and eight stages. It is the clearest single answer to what Surrey actually is now, and the food is the reason most people go.',
      tags: [{ label: 'July · Free', level: 'safe' }, { label: 'Food', level: 'gold' }],
      details: {
        "lead": "A free two-day multicultural festival at Holland Park. The 2026 edition ran July 18–19, from 11 am to 10 pm each day.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Scale",
                "text": "The official site lists 50 cultural pavilions and 8 stages."
              },
              {
                "title": "2026 theme",
                "text": "“One World, One Game”, tied to the FIFA World Cup, with live screenings of matches."
              },
              {
                "title": "Headliners",
                "text": "Reported performers included 54•40, Kulwinder Billa, FIONN and The Folk Turbanators."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free entry",
                "text": "Admission is free."
              },
              {
                "title": "Food",
                "text": "The food is the reason most people go; arrive hungry."
              },
              {
                "title": "Next year",
                "text": "2027 dates are not yet confirmed; check surreyfusionfestival.ca."
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
            "text": "Holland Park, next to Surrey Central station and the City Centre."
          },
          {
            "label": "Best time",
            "text": "Mid-July."
          }
        ],
        "link": {
          "label": "Surrey Fusion Festival",
          "url": "https://surreyfusionfestival.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Eight Hundred Parks and a Coastline',
  outdoor: [
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Forest Trails', dist: 'Across the city', text: 'Of the 800-plus parks the city manages, only about a quarter have playing fields and playgrounds — the rest largely protect natural land. Green Timbers, Tynehead and Surrey Bend give real forest walking without leaving the city limits.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Boundary Bay Shore', dist: 'South Surrey', text: 'Crescent Beach and the Blackie Spit flats are shallow, warm by BC standards in late summer, and enormous at low tide. Check the tide table before planning a swim — at low water the sea is a long walk away.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Blackie Spit · Serpentine', text: 'The bay and the Serpentine lowlands sit on the Pacific Flyway, and the shorebird migrations in spring and autumn are the main event. Bring a scope; the birds are usually out on the flats, not at your feet.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'City-wide', text: 'Surrey is flat in the north-west and hilly in the south, with a growing network of greenways linking the town centres. Distances between those centres are real — this is a city built for cars, with cycling added afterwards.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'The Fraser River', dist: 'Northern edge', text: 'Surrey’s north edge is the Fraser, working river rather than scenic one — log booms, barges and industry. Fishing here is tightly regulated and the regulations change in-season; check before you cast.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Rain Planning', dist: 'October — March', text: 'This is the wet coast: the winter half of the year is grey and damp rather than cold, and the trails turn to mud. Waterproofs matter far more than warm layers here.' },
  ],

  food: [
    { icon: '🍛', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Punjabi Food', area: 'Newton · Scott Road', areaLevel: 'purple', text: 'The reason many people drive to Surrey in the first place. The concentration is along Scott Road (120 Street) and through Newton — sweet shops, vegetarian dhabas and tandoori places, most of them family-run and cash-friendly.' },
    { icon: '🥘', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'Langar', area: 'Gurdwaras · city-wide', areaLevel: 'safe', text: 'Sikh temples serve free vegetarian meals to anyone who comes, every day, as a matter of religious principle. Cover your head, remove your shoes, sit on the floor with everyone else. It is hospitality, not a restaurant — behave accordingly.' },
    { icon: '🌏', iconSrc: '/icons/attractions/ph_globe-thin.svg', title: 'Everything Else', area: 'Guildford · Newton · Whalley', areaLevel: 'blue', text: 'Filipino, Korean, Vietnamese, Mexican, Afghan, Ethiopian — the strip malls here hold a density of cuisines that the glossier parts of Metro Vancouver cannot match on price.' },
    { icon: '🍓', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Berry Farms', area: 'Cloverdale · South Surrey', areaLevel: 'danger', text: 'Half of Surrey is still farmland inside the Agricultural Land Reserve. Blueberry and strawberry farms sell at the gate and run U-pick in season, roughly June through August.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'City Centre · Cloverdale', areaLevel: 'gold', text: 'A small taproom scene, scattered rather than clustered, which means a plan and a designated driver. Several of the breweries sit in industrial parks rather than on a strip you can stroll.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farmers’ Markets', area: 'Seasonal', areaLevel: 'olive', text: 'Markets run through the warm months in several of the town centres. Days and locations shift year to year — check the current schedule rather than turning up.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'March — May', level: 'safe', rating: 4, note: 'Green and wet', text: 'Everything flowers early here, and the shorebird migration peaks on the bay. Still genuinely rainy — spring on this coast is a wetter season than most visitors expect.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'The best of it', text: 'Dry, warm and long-lit, without the heat of the interior. This is when the beaches, the festivals and the berry farms all happen at once. Hot spells can be sharp, and most older housing here has no air conditioning.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'olive', rating: 4, note: 'Quiet and clear', text: 'Often the most settled weather of the year early on, then the rain returns. Birding is excellent again, and the forest parks are at their best.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Winter', months: 'November — February', level: 'blue', rating: 3, note: 'Grey, not frozen', text: 'Mild and persistently wet rather than cold — snow is occasional and the region handles it badly when it comes. Short days; plan indoor time into any winter trip.' },
  ],

  gettingThere: [
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'By SkyTrain — the Expo Line',
      text: 'The Expo Line runs from downtown Vancouver through New Westminster to Surrey, ending at King George after Surrey Central and Gateway. It is the simplest way in and out without a car, it runs every few minutes, and the stations sit in the middle of City Centre. The extension towards Langley — sixteen kilometres and eight more stations — is under construction and targeted to open in late 2029.',
      time: '≈45 min from downtown Vancouver',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 1 over the Port Mann Bridge, Highway 99 from the south and Highway 17 all feed into Surrey, and none of the crossings is tolled. The old Pattullo Bridge closed permanently in February 2026 and was replaced by the stal̕əw̓asəm Bridge beside it; demolition of the old span runs for about two years, so expect changed approaches on the New Westminster side.',
      time: '45 min from Vancouver · longer at rush hour',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The Peace Arch crossing sits at the bottom of South Surrey, with the truck crossing at Pacific Highway next to it — together the busiest border point in British Columbia. Waits swing from minutes to hours depending on day and season; check the current border wait times before committing to a crossing.',
      time: '≈20 min from City Centre to the border',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Vancouver (YVR)',
      text: 'There is no airport in Surrey. YVR is the arrival point, roughly forty kilometres away. The Canada Line plus the Expo Line will get you here on transit with one change downtown, but with luggage most people take a car.',
      time: '≈45–60 min from YVR',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'City Centre',
      area: 'Best for transit · Walkable core',
      text: 'Hotels beside Surrey Central and King George stations put you on the SkyTrain, which makes both Surrey and Vancouver reachable without a car. The area is a building site in places — it is being rebuilt from a suburb into a downtown in real time.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Surrey+City+Centre+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Surrey%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Guildford',
      area: 'Cheaper · Near Highway 1',
      text: 'Handy if you are driving through or heading east, with the mall and recreation centre next door. You will need the car for everything else.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Guildford+Surrey+BC', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'South Surrey & White Rock',
      area: 'Quietest · Near the beach',
      text: 'The seaside end of the city, close to Crescent Beach, Redwood Park and the border. Far from the SkyTrain, so this is a car-based base — but it is the pleasant one.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=South+Surrey+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'TransLink — SkyTrain & Buses',
      text: 'Surrey is on the same TransLink system as the rest of Metro Vancouver: the Expo Line through City Centre, plus a dense bus network including the R1 RapidBus along King George Boulevard. Transit works well along those spines and thins out quickly away from them — Cloverdale, Crescent Beach and the farm country are much easier with a car.',
      linkLabel: 'TransLink',
      linkUrl: 'https://www.translink.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Compass',
        text: 'Tap a Compass card, a contactless bank card or your phone at the fare gate or on the bus. Fares rose on 1 July 2026, so confirm current prices before travelling. The zone rules matter here more than anywhere: Surrey to downtown Vancouver is a three-zone trip at peak, but the same ride is one zone after 6:30pm on weekdays and all day on weekends and holidays.',
        fareBox: {
          label: 'Adult stored value',
          lines: ['1 zone: $2.85', '2 zones: $4.20', '3 zones: $5.40', 'DayPass: $12.55', 'Buses: always 1 zone'],
        },
        linkLabel: 'Compass Card',
        linkUrl: 'https://www.compasscard.ca/',
      },
      {
        icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
        title: 'Key Links',
        text: 'Three Expo Line stations serve the city, with the busiest interchanges at Surrey Central and King George. Park-and-ride at Scott Road station is the usual move for drivers coming from further out who want to leave the car before the bridges.',
        fareBox: {
          label: 'Useful lines',
          lines: ['Expo Line — Scott Road · Gateway · Surrey Central · King George', 'R1 — King George Blvd RapidBus', '96 — Newton to Guildford', '502 / 503 — Fraser Highway to Langley'],
        },
        linkLabel: 'Schedules & Maps',
        linkUrl: 'https://www.translink.ca/schedules-and-maps',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'The practical choice for seeing more than City Centre. Parking across Surrey is plentiful and mostly free, which is not true of Vancouver.' },
          { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'SkyTrain Construction', text: 'The Langley extension is being built along Fraser Highway through Fleetwood and Clayton. Expect lane closures and changed bus routing on that corridor until it opens.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Both operate across the city and to the airport. Fares to Vancouver are substantial — the SkyTrain is a fraction of the cost.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Greenways', text: 'A growing network of separated paths links parks and town centres, best in the flatter northern half of the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Fare tip:',
      text: 'If your plan is flexible, ride the SkyTrain into Vancouver after 6:30pm — the whole trip drops to a one-zone fare. Buses are always one zone whatever the distance, so a bus-and-SkyTrain combination can be cheaper than it first looks.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals carry no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate — 5% GST plus 8% PST on accommodation plus a Municipal and Regional District Tax of up to 3%. Confirm what a displayed room rate includes before booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Surrey', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology: 12%' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel: carries its own motor fuel taxes on top' },
    ],
    exempt: [
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no PST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no PST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Books and newspapers: no PST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: no PST" },
      { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', label: 'Bicycles: no PST · Transit fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi and rideshare drivers: around 10%. Langar at a gurdwara is never tipped — donations go in the box, if at all.',
  },

  practical: [
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Distances Are Real', text: 'Surrey covers roughly three times the ground the City of Vancouver does, and the town centres are genuinely far apart — Guildford to Crescent Beach is a half-hour drive in good traffic. Plan around one or two of them a day, not the whole city.' },
    { icon: '☔', iconSrc: '/icons/attractions/ph_umbrella-thin.svg', title: 'Rain Gear', text: 'From October to March, assume rain rather than hoping against it. A waterproof shell is more useful here than a heavy coat.' },
    { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'Construction', text: 'City Centre and the Fraser Highway corridor are both active building sites — SkyTrain works, towers and road changes. Routes and parking shift month to month; trust current directions over older guides.' },
    { icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg', title: 'The Border', text: 'Peace Arch is the busiest crossing in BC and waits are unpredictable. Check live border wait times the same day, and remember that returning to Canada can be the slower direction.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Contactless bank cards and phones work directly at SkyTrain gates and on buses — no Compass card needed for a short visit. Fares changed on 1 July 2026.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Surrey sits on the territories of several Coast Salish nations, among them the Semiahmoo, Katzie, Kwantlen, Kwikwetlem, Qayqayt and Tsawwassen. The Semiahmoo community is at the southern edge of the city, by the bay that carries its name.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Surrey Memorial Hospital', '13750 96 Avenue', 'Emergencies: call 911'] },
  ],
};

export default SURREY;
