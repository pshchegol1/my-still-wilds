// Moncton — данные страницы /city/moncton (Монктон, НЬЮ-БРАНСУИК)
// Видео Монктона в бесплатных банках нет (Pexels по запросу — Ричмонд,
// Йёнчёпинг и безымянные города). В шапке фото с Wikimedia Commons —
// "Moncton Landscape From The Marsh", James Mann, 12.06.2017, CC BY 2.0
// (GPS 46.0825, -64.7659 — марш у реки Петикодьяк, центр Монктона);
// обрезано до 16:9 без чёрных полос оригинала. Лицензия требует автора.
// Население — перепись 2021: город 79 470 (+10.5% к 2016), CMA 157 717.
// Транспорт — codiactranspo.ca: $3 наличными без сдачи, день $7, 10 поездок
// $29, 30 дней $73, групповой день $18; приложение Codiac+.
// Налог — HST 15%; Tourism Accommodation Levy 3.5% (By-law A-1419, moncton.ca).
// Больницы — The Moncton Hospital, 135 MacBeath Ave; CHU Dr-Georges-L.-Dumont,
// 330 av. Université — обе приёмные 24/7.
// Приливная волна — Bore Park, 10 Bendview Ct; 0.5–1 м, ±20 мин (moncton.ca).
// Из общих знаний: первый официально двуязычный город Канады (2002),
// Magnetic Hill, Hopewell Rocks, Shediac, Avenir Centre, VIA Ocean, время
// в пути.

export const MONCTON = {
  slug: 'moncton',
  name: 'Moncton',
  province: 'New Brunswick',
  provinceId: 'nb',
  region: 'NB',
  tag: 'New Brunswick · Hub of the Maritimes',
  accentLevel: 'danger',
  heroIcon: '🌊',
  heroImage: '/Cities/Moncton/hero.jpg',
  heroCredit: 'Photo: James Mann / Wikimedia Commons · CC BY 2.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.0878, lon: -64.7782 },
  subtitle: 'Bilingual Crossroads on the Petitcodiac',
  description:
    'New Brunswick’s largest city is a friendly, fast-growing hub where English and French mix on every street. Watch the tidal bore roll up the Petitcodiac River, test the famous Magnetic Hill illusion, and use Moncton as a base for the Hopewell Rocks, the warm beaches of Shediac and the Bay of Fundy.',

  actions: [
    { label: 'Explore Moncton', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈79K (2021)' },
    { label: 'Metro Area', value: '≈158K' },
    { label: 'Languages', value: 'English, French' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'To Hopewell Rocks', value: '≈40 min by car' },
    { label: 'To Halifax', value: '≈2 h 45 min by car' },
  ],

  badges: ['Tidal Bore', 'Bilingual City', 'Fundy Gateway'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '79,470', label: 'People in the city in 2021 — up 10.5% in five years', level: 'danger' },
    { value: '0.5–1 m', label: 'Height of the tidal bore on the Petitcodiac River', level: 'blue' },
    { value: '2×', label: 'A day the bore arrives — check the city timetable', level: 'purple' },
    { value: '15%', label: 'New Brunswick HST on most purchases', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Restaurants, pubs, the Capitol Theatre and the Avenir Centre',
      details: {
        "lead": "The city centre, with restaurants, pubs, the Capitol Theatre and the Avenir Centre.",
        "see": [
          {
            "title": "Resurgo Place",
            "text": "The Moncton Museum and Transportation Discovery Centre at 20 Mountain Road; see the attraction below."
          },
          {
            "title": "Capitol Theatre",
            "text": "The historic theatre on Main Street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of Moncton."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Venues keep their own hours; check before going."
          }
        ],
        "link": {
          "label": "Tourism Moncton",
          "url": "https://www.moncton.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Bore Park and the riverfront trail along the Petitcodiac',
      details: {
        "lead": "Bore Park and the riverfront trail along the Petitcodiac River.",
        "see": [
          {
            "title": "Tidal bore",
            "text": "Check the official tide station for each day’s bore size (1 smallest, 4 largest). On November 21, 2026 it was small, about 7:13 am and 7:41 pm, with size 2 from November 22."
          },
          {
            "title": "Riverfront Trail",
            "text": "Runs along the river and connects to Riverview and Dieppe; sections are cleared for walking and running in winter."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown, on the river."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "Arrive 20–30 minutes early; the Tidal Bore Times site gives times that differ slightly from the government station."
          }
        ],
        "link": {
          "label": "Government of Canada: Moncton tide station",
          "url": "https://tides.gc.ca/en/stations/175"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Magnetic Hill', icon: '🧲', iconSrc: '/icons/attractions/ph_magnet-thin.svg', tag: 'Family', tagLevel: 'danger', meta: 'The hill illusion, a zoo and a summer water park',
      details: {
        "lead": "The hill illusion, the Magnetic Hill Zoo and, in winter, Wild Lights.",
        "see": [
          {
            "title": "Magnetic Hill Zoo",
            "text": "In November it is listed open five days a week, 10 am–5 pm, closed Tuesday and Wednesday; $13 for a November window."
          },
          {
            "title": "Wild Lights",
            "text": "The zoo’s winter light show: November 27–30, December 3–7, 10–14, 17–23 and 26–31, and January 1–2; closed several evenings; doors 5 pm, last entry 8:30 pm; about $16 for adults."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the edge of Moncton."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "No 2026 information was found for the water park."
          }
        ],
        "link": {
          "label": "Wild Lights",
          "url": "https://www.zoodemagnetichillzoo.ca/wild-lights"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dieppe', icon: '🇫🇷', iconSrc: '/icons/attractions/ph_flag-thin.svg', tag: 'Acadian', tagLevel: 'purple', meta: 'Mostly French-speaking city next door, with the airport',
      details: {
        "lead": "The mostly French-speaking city next door, with the airport.",
        "see": [
          {
            "title": "Acadian city",
            "text": "A largely French-speaking neighbour of Moncton."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Next to Moncton."
          },
          {
            "label": "Good to know",
            "text": "The riverfront trail links Moncton, Dieppe and Riverview."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick",
          "url": "https://tourismnewbrunswick.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverview', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Across the river', tagLevel: 'safe', meta: 'Quiet town on the south bank with marsh trails',
      details: {
        "lead": "The town across the river from Moncton, linked by the riverfront trail.",
        "see": [
          {
            "title": "Trails",
            "text": "Riverfront and marsh trails connect to the Moncton system."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the Petitcodiac River."
          },
          {
            "label": "Good to know",
            "text": "Mostly residential."
          }
        ],
        "link": {
          "label": "Tourism New Brunswick: Moncton trails",
          "url": "https://tourismnewbrunswick.ca/listing/city-moncton-trails"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Centennial Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Park', tagLevel: 'olive', meta: 'Large city park with a beach, trails and winter skating',
      details: {
        "lead": "A large city park in the heart of Moncton with a supervised beach, trails and winter sports.",
        "see": [
          {
            "title": "Winter",
            "text": "Skating, snowshoeing, tobogganing and skiing, including what the city calls Eastern Canada’s longest lit cross-country ski trail."
          },
          {
            "title": "Centennial Beach",
            "text": "A supervised man-made beach with change houses and washrooms; summer only."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "The park connects to the riverfront trail network."
          }
        ],
        "link": {
          "label": "City of Moncton: Centennial Park",
          "url": "https://www.moncton.ca/en/things-do-parks/centennial-park"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Tidal Bore at Bore Park',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Twice a day the Fundy tide pushes a wave up to about a metre high up the Petitcodiac River. Arrive 30 minutes early — it can come 20 minutes either side of the forecast time.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Timed', level: 'caution' }],
      details: {
        "lead": "Twice a day the Fundy tide pushes a wave up the Petitcodiac River at Bore Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Today",
                "text": "On November 21, 2026 the bore is small (size 1 of 4), about 7:13 am and 7:41 pm; size 2 begins November 22."
              },
              {
                "title": "Timing",
                "text": "The government tide station is the more reliable source; the Tidal Bore Times site differs on some dates."
              },
              {
                "title": "Summer",
                "text": "In July and August, Resurgo staff are on site about 30 minutes before the daytime bore."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Arrive early",
                "text": "Come 20–30 minutes early; it can arrive either side of the forecast."
              },
              {
                "title": "Free",
                "text": "Free to watch."
              },
              {
                "title": "Closures",
                "text": "No source addressed any Bore Park or interpretive centre closures; check with the city."
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
            "text": "Bore Park, on the river."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Government of Canada: Moncton tide station",
          "url": "https://tides.gc.ca/en/stations/175"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Magnetic Hill',
      icon: '🧲', iconSrc: '/icons/attractions/ph_magnet-thin.svg',
      text: 'Put your car in neutral and it seems to roll uphill — a famous optical illusion. The area also has a zoo and a seasonal water park.',
      tags: [{ label: 'Classic', level: 'gold' }, { label: 'Family', level: 'danger' }],
      details: {
        "lead": "Put your car in neutral and it seems to roll uphill; the area also has a zoo and, in winter, the Wild Lights show.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Zoo",
                "text": "In November, open five days a week 10 am–5 pm, closed Tuesday and Wednesday."
              },
              {
                "title": "Wild Lights",
                "text": "November 27 to January 2 on most evenings; doors 5 pm, last entry 8:30 pm."
              },
              {
                "title": "Prices",
                "text": "Summer admission was $21; about $16 for Wild Lights adults."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "On sale from November 19, 2026 at tickets.moncton.ca."
              },
              {
                "title": "Water park",
                "text": "No 2026 hours were found; it is seasonal."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The hill illusion is free; zoo and Wild Lights are paid."
          },
          {
            "label": "Getting there",
            "text": "On the edge of Moncton; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Magnetic Hill Zoo: Wild Lights",
          "url": "https://www.zoodemagnetichillzoo.ca/wild-lights"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hopewell Rocks',
      icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'About 40 minutes away: giant “flowerpot” rock formations on the Bay of Fundy. Walk the ocean floor at low tide and kayak around them at high tide.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Tide times', level: 'caution' }],
      details: {
        "lead": "About 40 minutes from Moncton, giant “flowerpot” rock formations on the Bay of Fundy; walk the ocean floor at low tide.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "May 15 to October 25, 2026, with hours of 8 am–8 pm in summer; it is closed now."
              },
              {
                "title": "Winter",
                "text": "There are no facilities or staff when closed, and access outside operating days is prohibited."
              },
              {
                "title": "Fees",
                "text": "One guide: adult $18.15, senior or student $15.56, child $10.37, family $45.37 plus tax; confirm at nbparks.ca."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Two days",
                "text": "A ticket is valid for two consecutive days, to see both high and low tide."
              },
              {
                "title": "Tide times",
                "text": "Check a tide table for Hopewell Cape."
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
            "text": "About 40 minutes from Moncton by car."
          },
          {
            "label": "Best time",
            "text": "Summer, timed to the tide."
          }
        ],
        "link": {
          "label": "NB Parks: Hopewell Rocks dates & rates",
          "url": "https://www.nbparks.ca/en/parks/33/hopewell-rocks-provincial-park/dates"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Parlee Beach & Shediac',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'About 25 minutes away on the Northumberland Strait — often cited for some of the warmest saltwater swimming in Canada.',
      tags: [{ label: 'Summer', level: 'gold' }, { label: 'Beach', level: 'blue' }],
      details: {
        "lead": "On the Northumberland Strait about 25 minutes from Moncton, often cited for some of the warmest saltwater swimming in Canada.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lifeguards",
                "text": "Patrolled from the first weekend of June until Labour Day, per Wikipedia."
              },
              {
                "title": "Parking",
                "text": "Reports differ: $13 or $20 per car, or free at times; check the park’s rate page."
              },
              {
                "title": "Blue Flag",
                "text": "The beach has held Blue Flag status (2023 mentioned)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "A summer beach; outside it, no lifeguards."
              },
              {
                "title": "Confirm",
                "text": "Check the provincial park for 2027 rates."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Parking fee; confirm."
          },
          {
            "label": "Getting there",
            "text": "About 25 minutes from Moncton by car."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Parlee Beach Provincial Park",
          "url": "https://en.wikipedia.org/wiki/Parlee_Beach_Provincial_Park"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Resurgo Place',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Moncton’s museum of local history, with a hands-on transportation discovery centre. Check hours.',
      tags: [{ label: 'History', level: 'purple' }, { label: 'Indoor', level: 'blue' }],
      details: {
        "lead": "The Moncton Museum and the Transportation Discovery Centre at 20 Mountain Road, one admission for both.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listed Monday to Wednesday and Friday–Saturday 10 am–5 pm, Thursday to 8 pm, Sunday noon–5 pm; other listings say closed Mondays."
              },
              {
                "title": "Admission",
                "text": "About $12 for adults, $9 seniors, $8 youth, $6 children, $25 family; another page gives $13 for adults."
              },
              {
                "title": "Thursday evening",
                "text": "50% off from 5 to 8 pm, per one guide."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Check resurgo.ca; phone 506-856-4383."
              },
              {
                "title": "Summer",
                "text": "Open seven days in summer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $12 for adults."
          },
          {
            "label": "Getting there",
            "text": "20 Mountain Road."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Resurgo Place",
          "url": "https://ahnb-apnb.ca/museums/place-resurgo-place/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Capitol Theatre',
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      text: 'A historic theatre on Main Street, hosting concerts, plays and shows.',
      tags: [{ label: 'Culture', level: 'purple' }, { label: 'Evenings', level: 'blue' }],
      details: {
        "lead": "A historic theatre on Main Street hosting concerts, plays and shows.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Programme",
                "text": "Concerts, plays and shows; no 2026–27 programme was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Tickets",
                "text": "Check the theatre’s listings for the next show."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tickets vary by event."
          },
          {
            "label": "Getting there",
            "text": "Main Street, downtown."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          }
        ],
        "link": {
          "label": "Tourism Moncton",
          "url": "https://www.moncton.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River, Marsh and Fundy Coast',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Riverfront Trail', dist: 'Downtown', text: 'Paved trail along the Petitcodiac, linking Moncton, Dieppe and Riverview.' },
    { icon: '🦆', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Marsh Walks', dist: 'Riverview', text: 'Dyke trails and birds on the river marshes.' },
    { icon: '🪨', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Hopewell Rocks', dist: '≈40 min', text: 'Ocean-floor walks and kayaking.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Fundy National Park', dist: '≈1 h 15 min', text: 'Waterfalls, forest trails and coastal views.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Parlee Beach', dist: '≈25 min', text: 'Warm water and long sandy beach.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter Skating', dist: 'Centennial Park', text: 'Outdoor rinks and snowy trails.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Lobster', area: 'Shediac', areaLevel: 'danger', text: 'Lobster suppers and boat tours by the sea.' },
    { icon: '🥔', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Acadian Dishes', area: 'Dieppe & area', areaLevel: 'purple', text: 'Poutine râpée, fricot and other Acadian classics.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown', areaLevel: 'gold', text: 'Local breweries and taprooms.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Downtown', areaLevel: 'safe', text: 'Saturday market with local produce and food stalls.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Main Street', areaLevel: 'blue', text: 'Coffee shops in the city centre.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'Maritime classic.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Thaw', text: 'Cool and muddy; attractions open by late spring.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Beaches, Hopewell Rocks, Magnetic Hill and festivals.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour', text: 'Fall colour along the Fundy coast and quieter attractions.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Snowy', text: 'Cold and snowy; hockey games and outdoor skating.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Greater Moncton Roméo LeBlanc International Airport (YQM) in Dieppe has flights to Toronto, Montréal and other hubs.',
      time: '≈15 min to downtown',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Ocean (Montréal–Halifax) stops in Moncton a few times a week.',
      time: '≈4 h to Halifax by train',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Route 2) connects Moncton with Fredericton, Nova Scotia and the Confederation Bridge to PEI.',
      time: '≈1 h 45 min from Fredericton',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Moncton with other Maritime cities. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels near Main Street, the Avenir Centre and the riverfront.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moncton+New+Brunswick', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Moncton%2C%20New%20Brunswick%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🧲', iconSrc: '/icons/attractions/ph_magnet-thin.svg',
      title: 'Magnetic Hill',
      area: 'Near the highway',
      text: 'Hotels by the Trans-Canada, handy for road trips.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Magnetic+Hill+Moncton', level: 'blue' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Shediac',
      area: '≈25 min away',
      text: 'Cottages and inns near Parlee Beach.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Shediac+New+Brunswick', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Codiac Transpo',
      text: 'Codiac Transpo runs buses across Moncton, Dieppe and Riverview. Pay with exact cash, or buy passes in the Codiac+ app.',
      linkLabel: 'Codiac Transpo',
      linkUrl: 'https://www.codiactranspo.ca/moncton-transport/fares',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares from Codiac Transpo (the 30-day pass rose $1 on 1 January 2026). A cash-fare increase to $3.25 has been proposed for January 2027. A group day pass ($18, up to five people) can be bought on the bus.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $3 (exact cash)', 'Day pass: $7', '10 trips: $29', '30-day pass: $73'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://www.codiactranspo.ca/moncton-transport/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The riverfront trail links three communities.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers the metro area.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Hopewell Rocks, Fundy and beaches.' },
        ],
      },
    ],
    proTip: {
      label: 'Fundy tip:',
      text: 'Plan Hopewell Rocks around the tides: arrive near low tide to walk the ocean floor, and stay or return at high tide to see the change.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'New Brunswick: 15% HST',
    headlineLevel: 'blue',
    description:
      'New Brunswick charges a single 15% Harmonized Sales Tax. Hotel stays in Moncton also carry a 3.5% city tourism accommodation levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'purple' },
      { label: 'Moncton / New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + 3.5% levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Attraction tickets: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Tidal bore viewing: free' },
      { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', label: 'Riverfront trail: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Kayak guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Bilingual City', text: 'Moncton is officially bilingual — a friendly “Bonjour-Hi” is common; you can be served in English or French.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Tide Safety', text: 'Fundy tides rise fast — never walk out on mud or the ocean floor without checking tide times.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', title: 'Beach Days', text: 'Parlee Beach fills up on hot summer weekends — go early.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Driving', text: 'Snowy winters — use winter tires and check road conditions before long drives.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer — one hour ahead of Québec and Ontario.' },
    { icon: '🚑', iconSrc: '/icons/attractions/ph_ambulance-thin.svg', title: 'Two Hospitals', text: 'Moncton has two hospitals with 24/7 emergency departments: The Moncton Hospital and the Dr. Georges-L.-Dumont University Hospital Centre (mainly French-language service).' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Moncton is in Mi’kma’ki, the ancestral and unceded territory of the Mi’kmaq.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['The Moncton Hospital', '135 MacBeath Ave', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default MONCTON;
