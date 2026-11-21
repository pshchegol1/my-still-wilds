// Dauphin — данные страницы /city/dauphin (Дофин, МАНИТОБА)
// Видео Дофина в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — вокзал Дофина (национальное
// историческое место), автор Krazytea, июль 2020, CC BY-SA 4.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (8 368).
// Украинский фестиваль 2026: 31 июля — 2 августа (Selo Ukraina).
// Больница: затоплена в июле 2026, временное отделение неотложной помощи
// открыто в сентябре 2026 (CTV, Shared Health) — на странице «уточняйте».
// Церковь Воскресения — национальное историческое место (описание фото).
// Fort Dauphin, Riding Mountain, Dauphin Lake, поезд VIA — из общих знаний.

export const DAUPHIN = {
  slug: 'dauphin',
  name: 'Dauphin',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Parkland Gateway',
  accentLevel: 'caution',
  heroIcon: '🚂',
  heroImage: '/Cities/Dauphin/hero.jpg',
  heroCredit: 'Photo: Krazytea / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.1494, lon: -100.0502 },
  subtitle: 'Ukrainian Heart of the Parkland',
  description:
    'A prairie railway town at the northern foot of Riding Mountain, Dauphin is the service centre of Manitoba’s Parkland region. Ukrainian settlers shaped it — onion-domed churches still rise over the fields and the country’s largest Ukrainian festival fills the hills each summer — and Riding Mountain National Park begins just to the south.',

  actions: [
    { label: 'Explore Dauphin', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈8.4K (2021)' },
    { label: 'Region', value: 'Parkland' },
    { label: 'Language', value: 'English · Ukrainian heritage' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈3 h 30 min by car' },
    { label: 'To Riding Mountain', value: '≈30 min by car' },
  ],

  badges: ['Ukrainian Heritage', 'Railway Town', 'Riding Mountain'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '8,368', label: 'People in the 2021 census — the main town of Manitoba’s Parkland', level: 'blue' },
    { value: '61st', label: 'Canada’s National Ukrainian Festival in 2026 — billed as the country’s largest Ukrainian celebration', level: 'gold' },
    { value: '2', label: 'National Historic Sites in town: the railway station and the Ukrainian Catholic Church of the Resurrection', level: 'purple' },
    { value: '2026', label: 'Flooding closed the hospital in July; a temporary emergency department opened in September', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Downtown shops, the Watson Art Centre and Fort Dauphin Museum nearby',
      details: {
        "lead": "Downtown Dauphin, a short walk from the Watson Art Centre, Vermillion Park and Fort Dauphin Museum.",
        "see": [
          {
            "title": "Watson Art Centre",
            "text": "At 104 First Avenue N.W., a landmark since 1905 designed by local architect Stuart Geekie, with an art gallery, pottery and art studios, a ballet room and a ballroom."
          },
          {
            "title": "Fort Dauphin Museum",
            "text": "A few blocks away at 140 Jackson Street; see the attraction below."
          },
          {
            "title": "Vermillion Park",
            "text": "A wetland park two blocks west of Main Street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the centre of town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Shops keep their own hours; check what is open."
          }
        ],
        "link": {
          "label": "Tourism Dauphin",
          "url": "https://tourismdauphin.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Railway Station Area', icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Historic stone station and rail museum',
      details: {
        "lead": "The 1912 Canadian Northern station, clad in Tyndall stone, with the Dauphin Rail Museum in its former baggage room.",
        "see": [
          {
            "title": "The station",
            "text": "A Château-style building designated a Heritage Railway Station of Canada in 1990 and a Manitoba heritage site in 1998."
          },
          {
            "title": "Dauphin Rail Museum",
            "text": "2026 summer hours were listed as Tuesday to Thursday 10 am–4 pm, Friday 9 am–5 pm, Saturday 9 am–4 pm, Sunday 11 am–3 pm, closed Monday, with appointments outside those times."
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
            "text": "Those are summer hours, and the museum depends on volunteers; call before a winter visit."
          }
        ],
        "link": {
          "label": "Dauphin Rail Museum & CNR Station",
          "url": "https://tourismdauphin.ca/dauphin-blog/dauphin-rail-museum-cnr-station"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverside & Vermillion Park', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Green', tagLevel: 'safe', meta: 'Walking paths along the Vermilion River',
      details: {
        "lead": "A community wetland park on the Vermilion River in the heart of town, with a walking trail.",
        "see": [
          {
            "title": "Vermillion Park",
            "text": "At 214 Second Avenue N.W., two blocks west of Main Street. The oxbow is known locally as “Dead Mans River.”"
          },
          {
            "title": "Walking trail",
            "text": "Described as a lighted trail of 2 to 3 km (sources differ), used for walking, biking and jogging."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short walk from downtown shops, Fort Dauphin Museum and the Watson Art Centre."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          },
          {
            "label": "Good to know",
            "text": "One source says the trail is lit year-round."
          }
        ],
        "link": {
          "label": "Vermillion Park",
          "url": "https://ehcanadatravel.com/manitoba/parks-places/4003-vermillion-park.html"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Church Quarter', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Domes', tagLevel: 'danger', meta: 'The multi-domed Church of the Resurrection, a National Historic Site',
      details: {
        "lead": "The multi-domed Ukrainian Catholic Church of the Resurrection, a National Historic Site seen across Dauphin’s skyline.",
        "see": [
          {
            "title": "Church of the Resurrection",
            "text": "Built from 1936 to 1939 under Father Philip Ruh. A central dome is ringed by four smaller domes. It became a National Historic Site in 1997 and was renovated from 2003 to 2008."
          },
          {
            "title": "Newer parish church",
            "text": "A separate, newer church (designed by Victor Deneka, built in 1990) is not the historic site."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          },
          {
            "label": "Good to know",
            "text": "An active place of worship; interior access is not guaranteed, so call ahead."
          }
        ],
        "link": {
          "label": "Church of the Resurrection",
          "url": "https://tourismdauphin.ca/dauphin-blog/ukrainian-catholic-church-of-the-resurrection"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Selo Ukraina', icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg', tag: 'Festival site', tagLevel: 'blue', meta: 'Hillside festival grounds south of town',
      details: {
        "lead": "A hillside Ukrainian heritage site and festival grounds south of town, with a large amphitheatre.",
        "see": [
          {
            "title": "The amphitheatre",
            "text": "Travel Manitoba describes a 10,000-seat amphitheatre built into the hillside, 12 km south of Dauphin and 1 km west of Highway 10."
          },
          {
            "title": "Canada’s National Ukrainian Festival",
            "text": "The 2026 festival (July 31 – August 2) was cancelled because of flooding; passes will be honoured in 2027 or refunded. One guide lists 2027 as July 30 – August 1."
          },
          {
            "title": "Countryfest",
            "text": "Dauphin’s Countryfest uses the same site; 2027 listings show July 1–4."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 12 km south of town; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "Depends on the event."
          },
          {
            "label": "Good to know",
            "text": "Check the festival site for 2027 passes."
          }
        ],
        "link": {
          "label": "Travel Manitoba: Selo Ukraina",
          "url": "https://www.travelmanitoba.com/directory/selo-ukraina/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Dauphin Lake Shore', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: 'Lake', tagLevel: 'olive', meta: 'Beaches and fishing east of the city',
      details: {
        "lead": "The east shore of a large, shallow lake, best known for ice fishing in winter.",
        "see": [
          {
            "title": "Ice fishing",
            "text": "Winter ice fishing is the main fishing season; Tourism Dauphin says the lake becomes a village of ice fishing shacks."
          },
          {
            "title": "Beaches",
            "text": "Ochre Beach is listed among the beaches near Dauphin."
          },
          {
            "title": "Rules",
            "text": "Walleye over 48 cm must be released, and the inflowing rivers and water within 1 km of their mouths are closed to fishing. Check the 2026–27 Manitoba angling guide."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the city; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "The ice fishing village has moved to FortWhyte Alive in Winnipeg, per Travel Manitoba."
          }
        ],
        "link": {
          "label": "Tourism Dauphin: ice fishing",
          "url": "https://tourismdauphin.ca/dauphin-blog/ice-fishing"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Dauphin Railway Station',
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      text: 'A handsome 1912 Château-style station clad in Tyndall stone, now a Heritage Railway Station of Canada and a Manitoba heritage site with a small railway museum. A reminder that Dauphin grew up as a railway hub for the Parkland.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Photo stop', level: 'gold' }],
      details: {
        "lead": "The 1912 Château-style Canadian Northern station clad in Tyndall stone, with the Dauphin Rail Museum in its former baggage room.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Heritage",
                "text": "A Heritage Railway Station of Canada since 1990 and a Manitoba heritage site since 1998."
              },
              {
                "title": "Museum",
                "text": "The Dauphin Rail Museum is in the former baggage room."
              },
              {
                "title": "Rail hub",
                "text": "Dauphin grew up as a railway hub for the Parkland."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2026 summer hours",
                "text": "Tuesday to Thursday 10 am–4 pm, Friday 9 am–5 pm, Saturday 9 am–4 pm, Sunday 11 am–3 pm; closed Monday."
              },
              {
                "title": "Winter",
                "text": "Reduced fall and winter hours; the museum relies on volunteers, so call first."
              },
              {
                "title": "Appointments",
                "text": "Visits are possible by appointment outside listed hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Check with the museum."
          },
          {
            "label": "Getting there",
            "text": "Downtown Dauphin."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Dauphin Rail Museum & CNR Station",
          "url": "https://tourismdauphin.ca/dauphin-blog/dauphin-rail-museum-cnr-station"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Church of the Resurrection',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'A Ukrainian Catholic church with a cluster of domes, designated a National Historic Site. Check ahead if you hope to see the interior.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Free to view', level: 'safe' }],
      details: {
        "lead": "A Ukrainian Catholic church with a central dome and four smaller ones, built from 1936 to 1939 and a National Historic Site since 1997.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Domes",
                "text": "A tight cluster of towers, roof levels and domes with a stucco finish."
              },
              {
                "title": "History",
                "text": "Built under Father Philip Ruh; renovated 2003–2008 through the Manitoba Prairie Churches Project."
              },
              {
                "title": "Designations",
                "text": "Provincial heritage site in 1994 and national in 1997."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Do not confuse",
                "text": "A newer parish church, built in 1990, is a different building."
              },
              {
                "title": "Inside",
                "text": "Interior access is not guaranteed; call ahead."
              },
              {
                "title": "Respect",
                "text": "A working place of worship."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to view from outside."
          },
          {
            "label": "Getting there",
            "text": "In the town of Dauphin."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          }
        ],
        "link": {
          "label": "Church of the Resurrection",
          "url": "https://tourismdauphin.ca/dauphin-blog/ukrainian-catholic-church-of-the-resurrection"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canada’s National Ukrainian Festival',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: 'Three days of dance, music, food and crafts on a natural hillside amphitheatre at Selo Ukraina. The 2026 festival was cancelled because of flooding; check the festival for 2027 dates and tickets.',
      tags: [{ label: 'Tickets', level: 'gold' }, { label: 'Early August', level: 'caution' }],
      details: {
        "lead": "Three days of dance, music, food and crafts on the hillside amphitheatre at Selo Ukraina, held around the August long weekend.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026",
                "text": "Scheduled for July 31 to August 2, 2026 but cancelled because of flooding in western Manitoba."
              },
              {
                "title": "Passes",
                "text": "Festival and camping passes will be honoured in 2027 or refunded, per the board."
              },
              {
                "title": "2027 dates",
                "text": "One guide lists July 30 – August 1, 2027, taken from the festival’s website; confirm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "2026 price",
                "text": "$165 for a weekend pass in 2026; no 2027 pricing was found."
              },
              {
                "title": "Venue",
                "text": "Selo Ukraina, about 12 km south of Dauphin."
              },
              {
                "title": "Not now",
                "text": "Nothing is held in November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; 2026 weekend pass was $165."
          },
          {
            "label": "Getting there",
            "text": "By car, south of Dauphin."
          },
          {
            "label": "Best time",
            "text": "Late July or early August."
          }
        ],
        "link": {
          "label": "Travel Manitoba: National Ukrainian Festival",
          "url": "https://www.travelmanitoba.com/events/canadas-national-ukrainian-festival/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Fort Dauphin Museum',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'A reconstructed fur-trade fort with log buildings and exhibits about Indigenous peoples, traders and early settlers in the region.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "A museum inside a wooden palisade representing an 18th-century fur-trading post, with pioneer buildings and exhibits on Indigenous peoples, traders and settlers.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The site",
                "text": "Established in 1975 with about nine buildings, including a blacksmith shop, trapper’s cabin, schoolhouse and trading post."
              },
              {
                "title": "Exhibits",
                "text": "Visitors mention Métis history, fossils and First World War displays."
              },
              {
                "title": "Hours",
                "text": "The museum’s site lists Monday to Saturday 10 am–4 pm, closed Sundays and some holidays; hours are seasonal."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "$6 for adults and ages 13–17, free under 12; cash only."
              },
              {
                "title": "Winter",
                "text": "An older listing says September to April is by appointment; phone 204-638-6630."
              },
              {
                "title": "Not the NHS",
                "text": "The 1741 Fort Dauphin National Historic Event is near Winnipegosis, not here."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee, $6."
          },
          {
            "label": "Getting there",
            "text": "140 Jackson Street."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Fort Dauphin Museum",
          "url": "https://www.fortdauphinmuseum.ca/visit-us"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Riding Mountain National Park',
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'An island of forest, lakes and meadows rising above the prairie, with bison, elk, moose and black bears. The north edge is a short drive south; the resort village of Wasagaming is on the far side.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Wildlife', level: 'safe' }],
      details: {
        "lead": "An island of forest, lakes and meadows above the prairie, with bison, elk, moose and black bears.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fees",
                "text": "Daily adult admission is listed at $10.00 ($8.75 for seniors, $19.50 for a family or group), youth free; a Discovery Pass is $83.50 for adults. Fees were waived June 19 – September 7, 2026."
              },
              {
                "title": "Visitor centre",
                "text": "From October 14, 2025 to May 14, 2026 it was open Friday to Sunday 9 am–4:30 pm; check the winter 2026–27 schedule."
              },
              {
                "title": "Winter",
                "text": "The park is open year-round, but many businesses are seasonal, roughly late September to early May."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Buy online",
                "text": "A valid park pass is required; buying online is easiest."
              },
              {
                "title": "Call",
                "text": "Stop at or call the park before a winter visit, because highway travel is weather-permitting."
              },
              {
                "title": "Wildlife",
                "text": "Keep a safe distance from bison and bears."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park pass required; about $10 per adult per day."
          },
          {
            "label": "Getting there",
            "text": "A short drive south of Dauphin; Wasagaming is on the far side."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Parks Canada: Riding Mountain fees",
          "url": "https://www.parks.canada.ca/pn-np/mb/riding/visit/tarifs-fees"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Dauphin Lake',
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      text: 'A large, shallow prairie lake east of town with beaches, walleye fishing and ice fishing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Fishing', level: 'blue' }],
      details: {
        "lead": "A large, shallow prairie lake east of town, known for ice fishing and for beaches in summer.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Ice fishing",
                "text": "Winter ice fishing is the main fishing season on the lake."
              },
              {
                "title": "Beaches",
                "text": "Ochre Beach is listed among the beaches near Dauphin."
              },
              {
                "title": "Walleye",
                "text": "All walleye over 48 cm must be released."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed areas",
                "text": "All inflowing rivers and water within 1 km of their mouths are closed to fishing."
              },
              {
                "title": "Check rules",
                "text": "See the 2026–27 Manitoba angling guide."
              },
              {
                "title": "Ice safety",
                "text": "Check ice conditions before going out."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to visit; a fishing licence is needed to fish."
          },
          {
            "label": "Getting there",
            "text": "East of Dauphin; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Winter for ice fishing; summer for beaches."
          }
        ],
        "link": {
          "label": "Tourism Dauphin: ice fishing",
          "url": "https://tourismdauphin.ca/dauphin-blog/ice-fishing"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Prairie Meets Mountain',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Riding Mountain Trails', dist: '≈30 min south', text: 'Escarpment trails with views back over the Dauphin plain, and longer backcountry routes.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Bison Viewing', dist: 'Lake Audy, Riding Mountain', text: 'A bison enclosure with a viewing area inside the national park.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Dauphin Lake', text: 'Walleye in summer and ice fishing in winter. Licence required.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Town & park', text: 'Quiet country roads and park trails.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Trails', dist: 'Riding Mountain', text: 'Cross-country skiing and snowshoeing on park trails.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall Colours', dist: 'Escarpment', text: 'Aspen and oak on the escarpment turn gold in late September.' },
  ],

  food: [
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies (Varenyky)', area: 'Festivals & cafés', areaLevel: 'gold', text: 'Handmade perogies are everywhere — the taste of Ukrainian heritage.' },
    { icon: '🥬', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Holubtsi', area: 'Church suppers', areaLevel: 'safe', text: 'Cabbage rolls, often at community and church fundraisers.' },
    { icon: '🌭', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Kubasa', area: 'Local butchers', areaLevel: 'danger', text: 'Garlic sausage from local meat shops.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Main Street', areaLevel: 'olive', text: 'Small-town diners and family restaurants.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Walleye', area: 'Dauphin Lake', areaLevel: 'blue', text: 'Freshwater fish on local menus.' },
    { icon: '🍯', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'Farm Honey', area: 'Parkland', areaLevel: 'purple', text: 'Local honey and farm products in season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Wet roads', text: 'Snow melts in April; rivers can run high. Fields green up by late May.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, the Ukrainian festival and peak season in Riding Mountain.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest & elk', text: 'Golden fields, fall colours on the escarpment and elk bugling in the park.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & quiet', text: 'Long, cold prairie winters — ice fishing and cross-country skiing.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'From Winnipeg, take the Trans-Canada west and Highway 5 or 10 north. Highway 10 continues south through Riding Mountain National Park to Brandon.',
      time: '≈3 h 30 min from Winnipeg',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Winnipeg–Churchill train stops at Dauphin a couple of times a week. Check the current schedule.',
      time: 'Several hours from Winnipeg',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Winnipeg (YWG) is the nearest major airport. Dauphin’s small airport has little or no scheduled service.',
      time: '≈3 h 30 min from YWG',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators from Winnipeg or Brandon.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Dauphin',
      area: 'Town hotels',
      text: 'Hotels and motels along the highway and downtown. Book early for festival weekend.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dauphin+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dauphin%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      title: 'Wasagaming',
      area: 'Riding Mountain',
      text: 'Cabins, lodges and campgrounds in the national park’s resort village.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wasagaming', level: 'blue' },
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/mb/riding', level: 'safe' },
      ],
    },
    {
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      title: 'Festival Camping',
      area: 'Selo Ukraina',
      text: 'On-site camping during the Ukrainian festival — reserve with your ticket.',
      links: [
        { label: 'Festival site', url: 'https://www.cnuf.ca/', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Car Country',
      text: 'Dauphin has no city bus network. The town centre is walkable, but you need a car for Riding Mountain, Dauphin Lake and Selo Ukraina.',
      linkLabel: 'City of Dauphin',
      linkUrl: 'https://www.dauphin.ca/',
    },
    modes: [
      {
        icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
        title: 'Taxis',
        text: 'Local taxis operate in town. During the festival, arrange rides in advance or use festival shuttles if offered.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local', 'Walking: downtown', 'Car: needed for the park'],
        },
        linkLabel: 'City of Dauphin',
        linkUrl: 'https://www.dauphin.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Main Street, the station and the churches are close together.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Flat streets in town.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential outside town.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi', text: 'For short trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Scenic route:',
      text: 'Drive Highway 10 south through Riding Mountain National Park — watch for bison and elk, and stop at the escarpment lookouts.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Dauphin / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival tickets: check the listed price' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg', label: 'Viewing the historic station: free' },
      { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', label: 'Dauphin Lake beaches: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital Status', text: 'The Dauphin Regional Health Centre was damaged by flooding in July 2026; a temporary emergency department reopened in September. Check Prairie Mountain Health for current services.' },
    { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Festival Weekend', text: 'Hotels fill up for the Ukrainian festival in late July / early August — book months ahead.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Park Wildlife', text: 'Bison, elk and bears in Riding Mountain. Stay in your car near bison and keep 100 m from bears.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Mosquitoes and wood ticks in late spring and summer — use repellent and check for ticks.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Prairie cold and blowing snow. Check road reports before driving.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Dauphin is on the traditional lands of the Anishinaabe and Cree peoples and the homeland of the Red River Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Dauphin Regional Health Centre', '625 3rd St SW', 'Temporary ED since Sept 2026 · call 911'] },
  ],
};

export default DAUPHIN;
