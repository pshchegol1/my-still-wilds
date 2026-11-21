// Campbellton — данные страницы /city/campbellton (Кэмпбелтон, НЬЮ-БРАНСУИК)
// Видео Кэмпбелтона в бесплатных банках нет (Pexels по запросу — только
// безымянные ролики без привязки к месту). В шапке фото с Wikimedia
// Commons — центр города с воздуха зимой, мост Дж. К. Ван Хорна через
// Ресtigouche и гора Sugarloaf на фоне, автор Quintin Soloviev, 14.03.2025,
// CC BY 4.0 (GPS 48.002, -66.678 — центр Кэмпбелтона). Лицензия требует
// автора.
// Население — перепись 2021: старый город 7 047 (+2.4% к 2016); с
// 01.01.2023 Кэмпбелтон объединился с Atholville, Tide Head, Glencoe
// и частями соседних LSD — оценка новой территории ≈12 000 (на данных
// переписи 2021, не отдельный подсчёт).
// Больница — Campbellton Regional Hospital, 189 Lily Lake Rd (Vitalité);
// приёмное отделение в прошлом неоднократно закрывалось из-за нехватки
// персонала — в тексте предупреждение, без утверждения "24/7".
// Sugarloaf Provincial Park — горнолыжный склон и парк в Atholville
// (внутри объединённого Кэмпбелтона), 11.5 км².
// Транспорт: собственного транзита по состоянию на начало 2026 года не
// было; автобусы для региона Кэмпбелтон–Гранд-Фолс анонсированы на
// "позже в 2026" (CBC) — подробностей не нашли, пишем "уточняйте".
// Налог — HST 15%; городской гостиничный сбор подтверждения не нашли,
// в тексте не утверждаем.
// Из общих знаний: статуя лосося, вокзал VIA Rail, мост соединяет с
// Квебеком (Pointe-à-la-Croix), Restigouche — место последнего морского
// сражения Франции в Северной Америке (1760), время в пути.

export const CAMPBELLTON = {
  slug: 'campbellton',
  name: 'Campbellton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Restigouche Gateway',
  accentLevel: 'blue',
  heroIcon: '🐟',
  heroImage: '/Cities/Campbellton/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.0054, lon: -66.6730 },
  subtitle: 'Salmon Capital on the Restigouche',
  description:
    'Tucked under the shadow of Sugarloaf Mountain where the Restigouche River meets Chaleur Bay, Campbellton is a small northern city famous for Atlantic salmon fishing, a long French-English history and snowy winters made for skiing. A steel bridge links it to Pointe-à-la-Croix, Québec, just across the water.',

  actions: [
    { label: 'Explore Campbellton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈7K (city, 2021)' },
    { label: 'Region', value: 'Restigouche' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Bathurst', value: '≈1 h 15 min by car' },
    { label: 'To Québec border', value: '≈2 min across the bridge' },
  ],

  badges: ['Sugarloaf Mountain', 'Salmon Fishing', 'Restigouche River'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 5 },
  ],

  highlights: [
    { value: '7,047', label: 'People in the old city in the 2021 census — before the 2023 amalgamation', level: 'blue' },
    { value: '2023', label: 'Year Campbellton merged with Atholville, Tide Head and nearby areas', level: 'purple' },
    { value: '11.5 km²', label: 'Size of Sugarloaf Provincial Park, with its ski hill right in town', level: 'gold' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Water Street shops, cafés and the riverfront',
      details: {
        "lead": "Water Street, near the riverfront and Salmon Plaza.",
        "see": [
          {
            "title": "Salmon Plaza",
            "text": "Home of the giant salmon statue, “Restigouche Sam,” beside the Information Centre."
          },
          {
            "title": "Salmon museum",
            "text": "A reviewer mentions a small free salmon museum nearby."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Campbellton, on the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No individual shops or cafés were verified."
          }
        ],
        "link": {
          "label": "Salmon Capital: Campbellton",
          "url": "https://1000towns.ca/salmon-capital/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Waterfront', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Views of the J.C. Van Horne Bridge and Restigouche River',
      details: {
        "lead": "Views of the J.C. Van Horne Bridge and the Restigouche River.",
        "see": [
          {
            "title": "Salmon Plaza",
            "text": "The 8.5 m stainless steel salmon stands in a large fountain, with the bridge behind it."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the river in the centre of town."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Dress for the wind."
          }
        ],
        "link": {
          "label": "Salmon Plaza (Tripadvisor)",
          "url": "https://www.tripadvisor.ca/Attraction_Review-g182196-d7658315-Reviews-Salmon_Plaza_Monument-Campbellton_New_Brunswick.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Atholville', icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', tag: 'Ski', tagLevel: 'danger', meta: 'Now part of Campbellton — home to Sugarloaf Provincial Park',
      details: {
        "lead": "Now part of Campbellton, and home to Sugarloaf Provincial Park.",
        "see": [
          {
            "title": "Sugarloaf Provincial Park",
            "text": "Park access is open daily 8 am–10 pm in 2026; the ski hill was listed closed for the season on October 14, 2026."
          },
          {
            "title": "Winter",
            "text": "The Les Montagnards chalet is open November 1, 2026 to March 31, 2027; no 2026–27 lift schedule had been published."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Campbellton."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Season passes cost $435 pre-season (until November 15) and $484 regular for adults."
          }
        ],
        "link": {
          "label": "Sugarloaf Provincial Park",
          "url": "https://parcsugarloafpark.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tide Head', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Quiet riverside community, also now part of the city',
      details: {
        "lead": "A quiet riverside community, now part of the city.",
        "see": [
          {
            "title": "Residential",
            "text": "No visitor sights were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the river."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick",
          "url": "https://tourismnewbrunswick.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Pointe-à-la-Croix, QC', icon: '🇫🇷', iconSrc: '/icons/attractions/ph_flag-thin.svg', tag: 'Québec', tagLevel: 'purple', meta: 'Across the bridge — a different province in two minutes',
      details: {
        "lead": "Across the Restigouche River in Québec, on the other side of the J.C. Van Horne Bridge.",
        "see": [
          {
            "title": "Another province",
            "text": "Campbellton sits on the south bank opposite Pointe-à-la-Croix, Québec."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the bridge."
          },
          {
            "label": "Good to know",
            "text": "A different province, with its own rules and language of service."
          }
        ],
        "link": {
          "label": "Campbellton, New Brunswick",
          "url": "https://en.wikipedia.org/wiki/Campbellton,_New_Brunswick"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sugarloaf Mountain', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Landmark', tagLevel: 'olive', meta: 'The rounded peak that overlooks the whole city',
      details: {
        "lead": "The rounded peak that overlooks the city, the heart of Sugarloaf Provincial Park.",
        "see": [
          {
            "title": "Bike park",
            "text": "Open May 30 to September 27, 2026; a day ticket was $36."
          },
          {
            "title": "Winter",
            "text": "The ski hill and sliding hill were listed as closed for the season in October."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In Atholville, part of Campbellton."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Check the park’s conditions page."
          }
        ],
        "link": {
          "label": "Sugarloaf Provincial Park",
          "url": "https://parcsugarloafpark.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Sugarloaf Provincial Park',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'A ski hill and four-season park right in town, built around the distinctive rounded peak of Sugarloaf Mountain. Skiing and sliding in winter, and a bike park and trails in summer.',
      tags: [{ label: 'Four seasons', level: 'gold' }, { label: 'Family', level: 'danger' }],
      details: {
        "lead": "A ski hill and four-season park in town, built around the rounded peak of Sugarloaf Mountain.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Lift hours for 2025–26 ran through March 29, 2026; no 2026–27 lift schedule had been published. The ski hill was listed closed on October 14, 2026."
              },
              {
                "title": "Passes",
                "text": "Adult season pass $435 before November 15, 2026, then $484; senior $340 or $378.10."
              },
              {
                "title": "Summer",
                "text": "The bike park ran May 30 to September 27, 2026; park access is 8 am–10 pm daily."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Chalet",
                "text": "Les Montagnards chalet is open November 1, 2026 to March 31, 2027."
              },
              {
                "title": "Sliding",
                "text": "The sliding hill was listed closed with no opening date."
              },
              {
                "title": "Snofest",
                "text": "Campbellton Snofest is listed for mid-February."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Lift passes and bike tickets are paid."
          },
          {
            "label": "Getting there",
            "text": "In Atholville, Campbellton."
          },
          {
            "label": "Best time",
            "text": "Winter for skiing, summer for biking."
          }
        ],
        "link": {
          "label": "Sugarloaf Provincial Park",
          "url": "https://parcsugarloafpark.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'J.C. Van Horne Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'The steel bridge over the Restigouche River linking Campbellton to Pointe-à-la-Croix, Québec — walk or drive across to another province.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'blue' }],
      details: {
        "lead": "The bridge over the Restigouche River linking Campbellton to Pointe-à-la-Croix, Québec.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "It forms the backdrop to the salmon statue."
              },
              {
                "title": "Provinces",
                "text": "Campbellton is on the south bank opposite Pointe-à-la-Croix."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Border",
                "text": "It crosses between provinces, not countries; no passport is needed."
              },
              {
                "title": "Free",
                "text": "Free to cross."
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
            "text": "On the river at Campbellton."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Campbellton, New Brunswick",
          "url": "https://en.wikipedia.org/wiki/Campbellton,_New_Brunswick"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Giant Salmon Statue',
      icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'A large sculpture of an Atlantic salmon on the waterfront, celebrating the Restigouche’s famous salmon fishery.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Photo spot', level: 'gold' }],
      details: {
        "lead": "“Restigouche Sam,” an 8.5 m stainless steel Atlantic salmon in a fountain at Salmon Plaza, beside the Information Centre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Size",
                "text": "8.5 m of stainless steel."
              },
              {
                "title": "Setting",
                "text": "In a large fountain, with the J.C. Van Horne Bridge behind it."
              },
              {
                "title": "Museum",
                "text": "A small salmon museum nearby was described as free and nicely done."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
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
            "text": "Salmon Plaza, on the riverfront."
          },
          {
            "label": "Time to allow",
            "text": "A short stop."
          }
        ],
        "link": {
          "label": "Salmon Capital: Campbellton",
          "url": "https://1000towns.ca/salmon-capital/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Restigouche River Salmon Fishing',
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      text: 'One of eastern Canada’s legendary Atlantic salmon rivers. Licensed anglers and guided outfitters work the pools around Campbellton in season.',
      tags: [{ label: 'Licence needed', level: 'caution' }, { label: 'Seasonal', level: 'purple' }],
      details: {
        "lead": "One of eastern Canada’s well-known Atlantic salmon rivers; Campbellton calls itself the Salmon Capital.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Reputation",
                "text": "Campbellton markets itself as Canada’s “Salmon Capital.”"
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Licence",
                "text": "A licence is needed; check the provincial rules."
              },
              {
                "title": "Season",
                "text": "Seasonal; no 2027 season dates or outfitters were verified."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Licence and guide fees apply."
          },
          {
            "label": "Getting there",
            "text": "The river runs through Campbellton."
          },
          {
            "label": "Best time",
            "text": "Summer, in season."
          }
        ],
        "link": {
          "label": "Salmon Capital: Campbellton",
          "url": "https://1000towns.ca/salmon-capital/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Battle of the Restigouche Site',
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: 'The river here was the scene of the last French naval battle in North America (1760). A National Historic Site marks the location nearby.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "In 1760 the Restigouche was the scene of the final naval battle between the English and French for North America, and a National Historic Site marks it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "History",
                "text": "The battle was fought in 1760 during the Seven Years’ War."
              },
              {
                "title": "Remains",
                "text": "Wikivoyage says visitors can see the ship’s remains; this was not confirmed here."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "No 2026 Parks Canada visiting details were found."
              },
              {
                "title": "Winter",
                "text": "Likely closed in winter; check Parks Canada."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check Parks Canada."
          },
          {
            "label": "Getting there",
            "text": "Near Campbellton."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Battle of Restigouche",
          "url": "https://en.wikipedia.org/wiki/Battle_of_Restigouche"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Downtown Water Street',
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      text: 'Shops, diners and the VIA Rail station along the main riverside street.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Food', level: 'gold' }],
      details: {
        "lead": "The main riverside street, with shops and diners.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Walkable",
                "text": "Close to Salmon Plaza and the waterfront."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "No individual shops, diners or VIA Rail times were verified."
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
            "text": "Downtown Campbellton."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Campbellton, New Brunswick",
          "url": "https://en.wikipedia.org/wiki/Campbellton,_New_Brunswick"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Mountain, River and Bay',
  outdoor: [
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Downhill Skiing', dist: 'Sugarloaf Park', text: 'Alpine runs with views over the Restigouche.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Salmon Fishing', dist: 'Restigouche River', text: 'Licensed Atlantic salmon angling in season.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Trail Hiking', dist: 'Sugarloaf Park', text: 'Summer trails up and around the mountain.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling', dist: 'Restigouche River', text: 'Canoeing and kayaking on calmer stretches.' },
    { icon: '🏂', iconSrc: '/icons/attractions/ph_person-simple-snowboard-thin.svg', name: 'Snow Tubing', dist: 'Sugarloaf Park', text: 'Family-friendly tubing hill in winter.' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', name: 'Scenic Drives', dist: 'Route 11 & 17', text: 'Mountain and coastal roads around the region.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Atlantic Salmon', area: 'Local restaurants', areaLevel: 'blue', text: 'The river’s signature catch, when in season.' },
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Acadian Dishes', area: 'Around the region', areaLevel: 'purple', text: 'Poutine râpée and other Acadian classics.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Water Street', areaLevel: 'gold', text: 'Coffee shops downtown.' },
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Chaleur region', areaLevel: 'danger', text: 'Lobster and crab from the bay nearby.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Local Pubs', area: 'Downtown', areaLevel: 'olive', text: 'Casual bars and diners.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'safe', text: 'Blueberries from the surrounding forests.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Ice-out', text: 'Snowmelt swells the Restigouche; cool well into May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Salmon season', text: 'Fishing, trails and warm (if brief) summer days.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Mountain foliage around Sugarloaf and the river valley.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 5, note: 'Ski season', text: 'Reliable snow for skiing, tubing and snowmobiling.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Route 11 runs south along the coast to Bathurst; Route 17 heads inland toward Edmundston. The bridge crosses straight into Québec.',
      time: '≈1 h 15 min from Bathurst',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops at the Campbellton station a few times a week.',
      time: 'Check VIA schedule',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'The nearest larger airports are in Bathurst and Québec’s Gaspé region; most visitors arrive by road or rail.',
      time: 'Limited local options',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches serve Campbellton from other New Brunswick and Québec points. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Water Street and the waterfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Campbellton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Campbellton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Sugarloaf Area',
      area: 'Atholville',
      text: 'Lodging near the ski hill and provincial park.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sugarloaf+Campbellton', level: 'blue' },
      ],
    },
    {
      icon: '🇫🇷', iconSrc: '/icons/attractions/ph_flag-thin.svg',
      title: 'Pointe-à-la-Croix, QC',
      area: 'Across the bridge',
      text: 'A handful of options just over the river in Québec.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pointe-a-la-Croix+Quebec', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'No Local Transit Yet',
      text: 'Campbellton does not run its own public transit system. A regional on-demand bus service covering Campbellton and Grand Falls has been announced for 2026 — check for launch details before relying on it.',
      linkLabel: 'City of Campbellton',
      linkUrl: 'https://campbellton.org/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront are walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The best way to reach Sugarloaf and fishing spots.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available locally.' },
          { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'VIA Rail', text: 'Useful for onward travel, not local trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Bridge tip:',
      text: 'Crossing the J.C. Van Horne Bridge into Québec takes you into a different time zone in summer — Québec stays on Eastern Time, one hour behind Atlantic.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax on most goods and services, including hotel stays in Campbellton.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec (across the bridge)', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
      { label: 'Campbellton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Ski lift tickets: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', label: 'Salmon statue & waterfront: free' },
      { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', label: 'Crossing the bridge: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Bilingual Region', text: 'English and French are both common; crossing into Québec, French becomes the main language.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Serious Winters', text: 'Heavy snow and cold are normal from November to March — dress for it and check road conditions.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Fishing Licences', text: 'Atlantic salmon angling requires a New Brunswick licence and follows strict seasonal rules.' },
    { icon: '🕐', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Crossing Time Zones', text: 'Québec just across the bridge stays on Eastern Time — it can be an hour behind Campbellton in summer.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🚑', iconSrc: '/icons/attractions/ph_ambulance-thin.svg', title: 'Check the ER', text: 'The Campbellton Regional Hospital’s emergency department has faced staffing-related disruptions in the past — check current status before relying on it for urgent care.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Campbellton sits on the traditional territory of the Mi’gmaq, near the Mi’gmaq community of Listuguj across the river.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Campbellton Regional Hospital', '189 Lily Lake Rd', 'Call 911 · 811 for advice'] },
  ],
};

export default CAMPBELLTON;
