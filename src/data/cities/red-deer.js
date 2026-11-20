// Red Deer — данные страницы /city/red-deer
// Видео Ред-Дира в бесплатных банках нет: по "red deer" банки отдают
// животное или Эдмонтон с Калгари. В шапке фото с Wikimedia Commons —
// аэрофото центра города с долиной реки за ним, автор Quintin
// Soloviev, август 2026, CC BY 4.0. Лицензия требует указывать
// автора — отсюда heroCredit.
// Население — оценка Alberta Regional Dashboard на 2025 год.
// Canadian Finals Rodeo в 2024–2026 проходит в Эдмонтоне, а не здесь,
// хотя многие гиды ещё пишут иначе, — поэтому на странице его нет.
// Тарифы Red Deer Transit — с сайта города, действуют с 1 сентября 2026.

export const RED_DEER = {
  slug: 'red-deer',
  name: 'Red Deer',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Central Parkland',
  accentLevel: 'purple',
  heroIcon: '🦌',
  heroImage: '/Cities/RedDeer/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 52.2681, lon: -113.8112 },
  subtitle: 'Halfway Between, and Its Own Place',
  description:
    'Alberta’s third-largest city, sitting almost exactly halfway between Calgary and Edmonton on the Red Deer River. Most people know it as a stop on Highway 2; the people who stop find a long, wooded river valley threaded through the middle of town, Alberta’s oldest bird sanctuary — and a history that includes two of the province’s hardest stories.',

  actions: [
    { label: 'Explore Red Deer', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈115K' },
    { label: 'Climate', value: 'Continental' },
    { label: 'Rank in Alberta', value: '3rd largest' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈150 km · 1.5h' },
    { label: 'From Edmonton', value: '≈150 km · 1.5h' },
  ],

  badges: ['River Valley City', 'Central Alberta', 'Treaty 6 & 7 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1924', label: 'Gaetz Lakes becomes a federal migratory bird sanctuary — the oldest in Alberta, inside the city', level: 'safe' },
    { value: '1885', label: 'Soldiers occupy a fortified stopping house at the river crossing — today’s Fort Normandeau', level: 'gold' },
    { value: '≈70', label: 'Children who died at the Red Deer Indian Industrial School (1893–1919), out of about 350 students', level: 'danger' },
    { value: '2,844', label: 'Albertans sterilized under the 1928–1972 eugenics law — Red Deer’s training school was at its centre', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Ross Street and Little Gaetz · Murals · Museum + Art Gallery · City Hall Park',
      details: {
        "lead": "The old centre around Ross Street and Little Gaetz, with murals, the Museum + Art Gallery and City Hall Park.",
        "see": [
          {
            "title": "Ross Street and Little Gaetz",
            "text": "The main downtown streets, with shops, cafés and murals."
          },
          {
            "title": "Red Deer Museum + Art Gallery",
            "text": "Central Alberta history, Indigenous history and rotating art exhibitions. Hours and admission were not confirmed; check the museum’s site."
          },
          {
            "title": "City Hall Park",
            "text": "A green space beside the civic buildings."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city, walkable between the main sights."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          },
          {
            "label": "Good to know",
            "text": "Waskasoo Park’s trails reach downtown, so a walk along the river is easy."
          }
        ],
        "link": {
          "label": "Tourism Red Deer",
          "url": "https://visitreddeer.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waskasoo Park & the River', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'The green spine', tagLevel: 'safe', meta: 'Trails along the Red Deer River · Bower Ponds · Heritage Ranch · Through the whole city',
      details: {
        "lead": "Trails along the Red Deer River and its creeks, running through the whole city, with Bower Ponds and Heritage Ranch on the route.",
        "see": [
          {
            "title": "The trail system",
            "text": "Tourism material most often gives more than 110 km of trails; other sources say about 100 km or over 80 km for the Waskasoo system alone."
          },
          {
            "title": "Bower Ponds",
            "text": "Visitors can rent a boat and paddle on the ponds, and there is a historic farmhouse with a tea room."
          },
          {
            "title": "Heritage Ranch",
            "text": "One cycling guide calls the route from Heritage Ranch to the Nature Centre via Bower Ponds particularly good."
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Getting there",
            "text": "The trails pass through downtown and many neighbourhoods."
          },
          {
            "label": "Winter",
            "text": "Some of the trails stay open for winter use; check the City for current conditions."
          }
        ],
        "link": {
          "label": "Visit Red Deer: hiking trails",
          "url": "https://visitreddeer.com/explore-the-best-red-deer-hiking-trails/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Gaetz Lakes & Kerry Wood', icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', tag: 'North-east', tagLevel: 'blue', meta: 'Bird sanctuary · Nature centre · Quiet walking trails',
      details: {
        "lead": "A bird sanctuary and the Kerry Wood Nature Centre, with quiet walking trails.",
        "see": [
          {
            "title": "Gaetz Lakes Sanctuary",
            "text": "Alberta’s oldest federal migratory bird sanctuary, covering 118 hectares. No skiing, jogging, pets or cycling."
          },
          {
            "title": "Kerry Wood Nature Centre",
            "text": "The hub of the Waskasoo Park trail system, with a permanent exhibit gallery, a bookstore and washrooms. Hours were not found; check the City."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the north of the city along the river."
          },
          {
            "label": "Rules",
            "text": "No pets, bikes or jogging in the sanctuary."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Waskasoo Park: Kerry Wood Nature Centre",
          "url": "https://www.waskasoopark.ca/kerry-wood-nature-centre/about"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Westerner Park', icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', tag: 'South', tagLevel: 'danger', meta: 'Centrium arena · Hockey, rodeo, trade shows · Exhibition grounds',
      details: {
        "lead": "The exhibition grounds, with the Centrium arena, hockey, rodeo and trade shows.",
        "see": [
          {
            "title": "Marchant Crane Centrium",
            "text": "The arena, formerly the Centrium, is the home of the Red Deer Rebels."
          },
          {
            "title": "Westerner Days",
            "text": "The 2026 fair ran July 15–19, noon to midnight, with the parade downtown on Wednesday, July 15 at 9:30 am."
          },
          {
            "title": "Trade shows",
            "text": "Hockey, rodeo and trade shows through the year."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the exhibition grounds, on the east side of the city."
          },
          {
            "label": "Tickets",
            "text": "Check the event for tickets."
          },
          {
            "label": "Good to know",
            "text": "The Rebels’ 2026–27 schedule was not confirmed; check the club."
          }
        ],
        "link": {
          "label": "Visit Red Deer: Westerner Days",
          "url": "https://visitreddeer.com/your-guide-to-westerner-days-2026/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Gasoline Alley', icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', tag: 'Highway 2', tagLevel: 'olive', meta: 'Fuel, chain restaurants and hotels · Where the highway traffic stops',
      details: {
        "lead": "The highway services area, with fuel, chain restaurants and hotels, where the highway traffic stops.",
        "see": [
          {
            "title": "Fuel and chain restaurants",
            "text": "The main concentration of road services."
          },
          {
            "title": "Hotels",
            "text": "Accommodation convenient for the highway."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Beside Highway 2; a car is needed."
          },
          {
            "label": "Stay",
            "text": "A convenient overnight stop between Calgary and Edmonton."
          },
          {
            "label": "Good to know",
            "text": "The city’s parks and museum are a short drive away."
          }
        ],
        "link": {
          "label": "Tourism Red Deer",
          "url": "https://visitreddeer.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North Red Deer', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Across the river', tagLevel: 'purple', meta: 'Older neighbourhoods · Riverside trails · Quieter residential streets',
      details: {
        "lead": "Older neighbourhoods with riverside trails and quieter residential streets.",
        "see": [
          {
            "title": "Riverside trails",
            "text": "Waskasoo Park’s trails run through the north side."
          },
          {
            "title": "Gaetz Lakes Sanctuary",
            "text": "The bird sanctuary and the Kerry Wood Nature Centre are in the north of the city."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Mainly residential."
          }
        ],
        "link": {
          "label": "Visit Red Deer: hiking trails",
          "url": "https://visitreddeer.com/explore-the-best-red-deer-hiking-trails/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Waskasoo Park',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: 'A park system that follows the Red Deer River and its creeks right through the city, linking dozens of kilometres of paved and gravel trails, ponds, picnic sites and natural areas. It is the reason Red Deer is a pleasant city to spend a day in rather than just a highway stop. Bower Ponds for skating in winter and paddleboats in summer; Heritage Ranch for the stairs up to river views.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "A park system that follows the Red Deer River and its creeks through the city, linking trails, ponds, picnic sites and natural areas.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trail length",
                "text": "Tourism material gives more than 110 km; other sources say about 100 km or over 80 km for the Waskasoo system itself."
              },
              {
                "title": "Bower Ponds",
                "text": "Boat rentals for a paddle, and a historic farmhouse with a tea room."
              },
              {
                "title": "Kerry Wood Nature Centre",
                "text": "The hub of the trail system, with an exhibit gallery and a bookstore."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Heritage Ranch to the Nature Centre",
                "text": "A recommended cycling route, via Bower Ponds."
              },
              {
                "title": "Winter",
                "text": "Part of the system stays open for winter use; check the City."
              },
              {
                "title": "Hours",
                "text": "Nature Centre hours were not found; confirm with the City."
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
            "text": "Trails pass through downtown and many neighbourhoods."
          },
          {
            "label": "Time to allow",
            "text": "An hour to a full day."
          }
        ],
        "link": {
          "label": "Waskasoo Park",
          "url": "https://www.waskasoopark.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Gaetz Lakes Sanctuary',
      icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg',
      text: 'Alberta’s oldest federal migratory bird sanctuary, protected since 1924, with roughly five kilometres of trails, a bird blind and viewing decks around two oxbow lakes. Enter through the Kerry Wood Nature Centre, named for the naturalist who fought to protect it in the 1950s. No pets, bikes or jogging — this is a place for walking quietly.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'No pets', level: 'caution' }],
      details: {
        "lead": "Alberta’s oldest federal migratory bird sanctuary, covering 118 hectares, with trails and viewing decks around two oxbow lakes.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Sanctuary",
                "text": "Alberta’s oldest federal migratory bird sanctuary."
              },
              {
                "title": "Kerry Wood Nature Centre",
                "text": "The entrance, named for the naturalist who fought to protect the area."
              },
              {
                "title": "Trails",
                "text": "About five kilometres of trails, a bird blind and viewing decks."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Rules",
                "text": "No skiing, jogging, pets or cycling in the sanctuary."
              },
              {
                "title": "Quiet",
                "text": "This is a place for watching birds, not exercise."
              },
              {
                "title": "Hours",
                "text": "Nature Centre hours were not found; confirm with the City."
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
            "text": "In the north of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Waskasoo Park: Kerry Wood Nature Centre",
          "url": "https://www.waskasoopark.ca/kerry-wood-nature-centre/about"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fort Normandeau',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A replica of the fortified stopping house at the old Calgary–Edmonton Trail river crossing, occupied by soldiers in 1885 during the North-West Resistance and later by the Mounted Police. It sits a short drive west of the city, and the site includes a monument to the children of the Red Deer Indian Industrial School and interpretation of Indigenous and Métis history.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'gold' }],
      details: {
        "lead": "A replica of the fortified stopping house at the old Calgary–Edmonton Trail river crossing, a short drive west of the city. Admission is free.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Grounds",
                "text": "Open daily from May 1 to Thanksgiving Monday, per Travel Alberta."
              },
              {
                "title": "Buildings",
                "text": "Open six days a week (closed Wednesdays) from the May long weekend to Labour Day, then weekends and holidays until Thanksgiving."
              },
              {
                "title": "Monument",
                "text": "The site includes a monument to the children of the Red Deer Indian Industrial School."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The seasonal buildings are closed in winter; the next season starts in May."
              },
              {
                "title": "Hours differ",
                "text": "Sources conflict; call 403-347-7550 or check Waskasoo Park."
              },
              {
                "title": "Events",
                "text": "Special events such as Fort Normandeau Days have had separate admission."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free for regular visits."
          },
          {
            "label": "Getting there",
            "text": "A short drive west of Red Deer."
          },
          {
            "label": "Best time",
            "text": "May to October."
          }
        ],
        "link": {
          "label": "Travel Alberta: Historic Fort Normandeau",
          "url": "https://www.travelalberta.com/listings/historic-fort-normandeau-6745"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Red Deer Indian Industrial School',
      icon: '🕯️', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      text: 'A Methodist-run residential school operated near the city from 1893 to 1919, with about 350 students and one of the highest death rates of any residential school in Canada — at least seventy children died. Four students who died in the 1918 flu are buried in the Red Deer Cemetery, where a memorial now bears their names; a ground-penetrating radar search of the school site began in 2021. This is not a tourist stop, but it is part of the city.',
      tags: [{ label: 'Treat with care', level: 'danger' }],
      details: {
        "lead": "A Methodist-run residential school that operated near the city from 1893 to 1919. At least seventy children died there. This is a place to learn and to remember, not a tourist attraction.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The school",
                "text": "About 350 students, and one of the highest death rates of any residential school in Canada."
              },
              {
                "title": "The memorial",
                "text": "Four students who died in the 1918 flu are buried in the Red Deer Cemetery, where a memorial now bears their names."
              },
              {
                "title": "Fort Normandeau",
                "text": "A monument to the children is part of the Fort Normandeau site."
              }
            ]
          },
          {
            "title": "If you visit",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Visit quietly",
                "text": "Treat the memorials with respect."
              },
              {
                "title": "Support",
                "text": "The 24-hour Indian Residential Schools Crisis Line is 1-866-925-4419 for former residential school students in distress."
              },
              {
                "title": "Learn more",
                "text": "The Red Deer Museum + Art Gallery covers Indigenous history in central Alberta."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; there is nothing to buy."
          },
          {
            "label": "Getting there",
            "text": "The cemetery memorial is in Red Deer; the Fort Normandeau monument is a short drive west."
          },
          {
            "label": "How to visit",
            "text": "Quietly, with respect."
          }
        ],
        "link": {
          "label": "Travel Alberta: Historic Fort Normandeau",
          "url": "https://www.travelalberta.com/listings/historic-fort-normandeau-6745"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Michener Centre & Alberta’s Eugenics Law',
      icon: '⚖️', iconSrc: '/icons/attractions/ph_scales-thin.svg',
      text: 'The Provincial Training School opened here in 1923 and became central to Alberta’s Sexual Sterilization Act: between 1928 and 1972 the province sterilized about 2,844 people (some sources give 2,831). In 1996 Leilani Muir, sterilized at the school as a teenager without being told, became the first person to win a lawsuit against Alberta for it. It is part of Red Deer’s history, and it deserves to be known.',
      tags: [{ label: 'Hard history', level: 'danger' }],
      details: {
        "lead": "The Provincial Training School opened in Red Deer in 1923 and became central to Alberta’s eugenics program. This is a hard chapter of history rather than a visitor attraction.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Sterilizations",
                "text": "Between 1928 and 1972 the province sterilized about 2,844 people; other sources give 2,831."
              },
              {
                "title": "Leilani Muir",
                "text": "In 1996 a court found she had been improperly detained at the school, and she was awarded $740,000. The province admitted wrongdoing. She died in March 2016."
              },
              {
                "title": "The site",
                "text": "It began as one building on 30 acres and grew to a 66-building complex on 360 acres."
              }
            ]
          },
          {
            "title": "Today",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closure",
                "text": "The province announced the closure of the North and South facilities on March 11, 2013."
              },
              {
                "title": "Current status",
                "text": "What has happened to the site since was not confirmed; check the City of Red Deer."
              },
              {
                "title": "Learn more",
                "text": "The Living Archives on Eugenics and the Eugenics Archive document this history."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; the site is not a managed attraction."
          },
          {
            "label": "Getting there",
            "text": "In Red Deer; check access before visiting."
          },
          {
            "label": "How to visit",
            "text": "Learn first, and visit respectfully."
          }
        ],
        "link": {
          "label": "City of Red Deer: Michener Centre",
          "url": "https://www.reddeer.ca/about-red-deer/history/history-of-red-deer/public-services/healthcare/michener-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Red Deer Museum + Art Gallery',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'The city museum downtown, with central Alberta history, Indigenous history and rotating art exhibitions. A good indoor hour on a cold or wet day.',
      tags: [{ label: 'Downtown', level: 'blue' }, { label: 'Indoor', level: 'gold' }],
      details: {
        "lead": "The city museum downtown, with central Alberta history, Indigenous history and rotating art exhibitions.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "Central Alberta history and Indigenous history."
              },
              {
                "title": "Art",
                "text": "Rotating art exhibitions."
              },
              {
                "title": "Indoor option",
                "text": "A good indoor hour on a cold or wet day."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours and prices",
                "text": "Not confirmed in the sources; check the museum’s website."
              },
              {
                "title": "Pair it",
                "text": "Combine with Ross Street and the Waskasoo Park trails."
              },
              {
                "title": "Learn more",
                "text": "Good background before visiting the memorials to the Red Deer Indian Industrial School."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Confirm the current price."
          },
          {
            "label": "Getting there",
            "text": "Downtown Red Deer."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourism Red Deer",
          "url": "https://visitreddeer.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'A River Valley Through the City',
  outdoor: [
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Trail System', dist: 'City-wide', text: 'Waskasoo Park’s trails let you cross most of the city on foot or by bike without touching a busy road. Mostly flat, with steep stairs and hills up the valley sides.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Red Deer River', dist: 'Through town', text: 'Paddling and floating in summer. The river is cold and changes quickly with rain upstream in the mountains — check flows before going out.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Bower Ponds', dist: 'Central', text: 'Skating in winter, paddleboats in summer, and a hub of trails in between.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Sylvan Lake', dist: '≈25 km west', text: 'The nearest big lake, with a beach town, marina and summer crowds. Water quality advisories happen some summers — check before swimming.' },
    { icon: '🦕', iconSrc: '/icons/attractions/ph_bone-thin.svg', name: 'Drumheller Badlands', dist: '≈1h45 south-east', text: 'Downstream on the same Red Deer River, the valley turns into badlands and the Royal Tyrrell dinosaur museum. A full day trip.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'River valley', text: 'Deer, moose, beaver, coyotes and owls live along the river valley inside the city. Give moose a wide berth, especially with calves.' },
  ],

  food: [
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Alberta Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is the heart of Alberta farm and ranch country, and steakhouses and burger places are everywhere.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown · Industrial areas', areaLevel: 'gold', text: 'A small but real brewery scene; several taprooms are in light industrial parks rather than downtown.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown · Little Gaetz', areaLevel: 'blue', text: 'Independent coffee shops in the older downtown blocks around Ross Street.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'City-wide', areaLevel: 'purple', text: 'Filipino, Vietnamese, Indian and Latin American restaurants reflect a growing immigrant community.' },
    { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', title: 'Road Food', area: 'Gasoline Alley', areaLevel: 'olive', text: 'Every chain restaurant you can name, clustered at the highway exits for the Calgary–Edmonton traffic.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Seasonal', areaLevel: 'safe', text: 'A summer market with central Alberta producers. Check current days and location before going.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Muddy, then green', text: 'Snowmelt and mud in April give way to a green river valley by late May. Migrating birds fill Gaetz Lakes.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Best season', text: 'Warm, long days on the trails and the river, and Sylvan Lake nearby. Thunderstorms and hail can build fast in the afternoon; wildfire smoke drifts in some summers.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 4, note: 'Golden valley', text: 'The aspens and poplars along the river turn gold. Crisp mornings, quiet trails.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold and bright', text: 'Real prairie winter, with cold snaps below −30 °C. Skating at Bower Ponds and groomed trails make it livable. Highway 2 can close in storms — check 511 Alberta.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Highway 2',
      text: 'The Queen Elizabeth II Highway between Calgary and Edmonton runs past the city. About 150 km either way, through farm country with little shelter from crosswinds and blowing snow.',
      time: '≈1.5h from Calgary or Edmonton',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Red Deer Regional Airport has limited scheduled service. Most visitors fly into Calgary (YYC) or Edmonton (YEG) and drive.',
      time: '≈1.5h from either major airport',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Intercity Bus',
      text: 'Private coach services run between Calgary, Red Deer and Edmonton. Schedules change frequently — check current operators before planning around them.',
      time: '≈1.5–2h',
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Day Trips',
      text: 'Sylvan Lake is about 25 km west; Drumheller and the badlands are about 1h45 south-east; the Rockies at Nordegg are roughly two to two and a half hours west.',
      time: 'Car needed',
    },
  ],

  stay: [
    {
      icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg',
      title: 'Gasoline Alley & Highway 2',
      area: 'Most hotels · Car needed',
      text: 'Chain hotels at the highway exits, practical for a stop between Calgary and Edmonton.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Red+Deer+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Red%20Deer%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable · Close to trails',
      text: 'Fewer hotels, but close to restaurants, the museum and the river valley trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Red+Deer', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Sylvan Lake',
      area: 'Summer · Beach town',
      text: 'Lake cottages and hotels 25 km west, if the trip is about summer rather than the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sylvan+Lake+Alberta', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Red Deer Transit',
      text: 'City buses connect downtown, the polytechnic, the hospital and the main shopping areas. Service is thinner on evenings and weekends; for Fort Normandeau, Sylvan Lake or Drumheller you will need a car.',
      linkLabel: 'Red Deer Transit',
      linkUrl: 'https://www.reddeer.ca/city-services/transit/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the City of Red Deer, effective 1 September 2026 to 31 August 2027. Drivers cannot give change and accept only $5 and $10 bills — bring exact fare.',
        fareBox: {
          label: 'Adult (18–64)',
          lines: ['Cash: $3', 'Day pass: $10', '12 rides: $33', 'Monthly pass: $75'],
        },
        linkLabel: 'Fares and Passes',
        linkUrl: 'https://www.reddeer.ca/city-services/transit/fares-and-passes/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way to cover the city and the region; parking is easy.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The trail system makes cycling across town genuinely pleasant in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available across the city.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the river valley trails are walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Road trip tip:',
      text: 'If you are driving Calgary–Edmonton, skip the Gasoline Alley exit and drive ten minutes into town instead. A walk at Bower Ponds or Gaetz Lakes beats a service-station break.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some hotels add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Red Deer / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Event and museum tickets: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', label: 'Transit fares: as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%.',
  },

  practical: [
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Highway', text: 'Highway 2 between Calgary and Edmonton is busy and exposed. Blowing snow and black ice cause pile-ups every winter — check 511 Alberta and slow down.' },
    { icon: '⛈️', iconSrc: '/icons/attractions/ph_cloud-lightning-thin.svg', title: 'Summer Storms', text: 'Central Alberta gets strong summer thunderstorms with hail and occasional tornado warnings. Take Alberta Emergency Alerts seriously.' },
    { icon: '🫎', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Moose in Town', text: 'Moose wander into the river valley and sometimes the streets. They are more dangerous than they look — keep well back.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital Construction', text: 'The regional hospital is undergoing a major expansion; expect construction around the site and check current entrances before visiting.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Fares', text: 'Exact fare only on Red Deer buses — drivers carry no change. Fares rose on 1 September 2026.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'The City of Red Deer acknowledges Treaty 6 and Treaty 7 territory and recognises the land as a Métis gathering site. The name itself is a translation of Indigenous names for the river that referred to elk — European settlers mistook the elk for the red deer of the British Isles.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Red Deer Regional Hospital Centre', '3942 50A Avenue', 'Emergencies: call 911'] },
  ],
};

export default RED_DEER;
