// Canmore — данные страницы /city/canmore
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Edward Rode, ролик назван "Canmore, Alberta, Canada". Проверено
// по кадрам: город внизу, над ним Ha Ling Peak и хребет, водохранилище
// Rundle Forebay и река Боу справа. Оригинал 13 с, 10 МБ — пережат до
// ~4,5 МБ, постер вырезан из первого кадра.
// Canmore — НЕ в национальном парке: пропуск Parks Canada в городе не
// нужен, а для троп Кананаскиса нужен отдельный провинциальный
// Kananaskis Conservation Pass. Это главная путаница у туристов,
// поэтому на странице она разобрана явно.
// Население — оценка Alberta Regional Dashboard на 2025 год.

export const CANMORE = {
  slug: 'canmore',
  name: 'Canmore',
  province: 'Alberta',
  provinceId: 'ab',
  region: 'AB',
  tag: 'Alberta · Bow Valley',
  accentLevel: 'blue',
  heroIcon: '⛰️',
  heroImage: '/Cities/Canmore/hero-poster.jpg',
  heroVideo: '/Cities/Canmore/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.0884, lon: -115.3479 },
  subtitle: 'The Mountain Town Outside the Park',
  description:
    'A former coal town in the Bow Valley, twenty minutes short of Banff and just outside the national park gate. It mined coal for almost a century, hosted the Nordic events of the 1988 Olympics on the old mine lands, and now lives on the mountains around it — Ha Ling, the Three Sisters and the trails of Kananaskis on its doorstep.',

  actions: [
    { label: 'Explore Canmore', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈17.3K' },
    { label: 'Elevation', value: '≈1,310 m' },
    { label: 'Park Pass', value: 'Not in town' },
    { label: 'Time Zone', value: 'Alberta Time (UTC-6)' },
    { label: 'From Calgary', value: '≈106 km · 1h15' },
    { label: 'To Banff', value: '≈26 km · 20 min' },
  ],

  badges: ['Bow Valley', 'Former Coal Town', 'Treaty 7 Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'safe', rating: 5 },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1979', label: 'The year the last coal mine closed — Canmore had been a mining town for close to a century', level: 'danger' },
    { value: '1988', label: 'Cross-country skiing and biathlon at the Calgary Olympics, on the reclaimed mine lands', level: 'gold' },
    { value: '$15', label: 'Kananaskis Conservation Pass per vehicle per day — needed at many trailheads, not for town', level: 'blue' },
    { value: '1978', label: 'First Canmore Folk Music Festival — the longest-running folk festival in Alberta', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Main Street', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Main Street shops and cafés · Centennial Park · Walkable · Ha Ling straight ahead',
      details: {
        "lead": "The walkable centre of Canmore, with Main Street shops and cafés, Centennial Park and Ha Ling Peak straight ahead.",
        "see": [
          {
            "title": "Main Street",
            "text": "Shops and cafés in a compact, walkable core."
          },
          {
            "title": "Centennial Park",
            "text": "Home of the Canmore Folk Music Festival over the August long weekend (August 1–3 in 2026)."
          },
          {
            "title": "Canmore Museum and Geoscience Centre",
            "text": "902 7 Avenue. Hours differ by source, from noon to 5 pm on weekdays in one listing to 10 am to 4 pm in others. Call (403) 678-2462 to confirm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Roam Route 3 links downtown Canmore and downtown Banff for $6 per adult single ride in 2026, or $15 for a day pass. Local Canmore routes are free."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "Parking is very tight during the folk festival weekend; come by bike or bus."
          }
        ],
        "link": {
          "label": "Roam Transit",
          "url": "https://roamtransit.com/fares/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bow River & Policeman’s Creek', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Riverside', tagLevel: 'blue', meta: 'Boardwalk along the creek · River paths · The old engine bridge',
      details: {
        "lead": "A boardwalk along the creek, river paths and the old engine bridge, a short walk from Main Street.",
        "see": [
          {
            "title": "Policeman’s Creek boardwalk",
            "text": "A boardwalk along the creek through the middle of town."
          },
          {
            "title": "River paths",
            "text": "Paths run along the Bow River, flat and easy."
          },
          {
            "title": "The old engine bridge",
            "text": "A landmark crossing on the river path."
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free."
          },
          {
            "label": "Getting there",
            "text": "On foot from downtown."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a stroll."
          }
        ],
        "link": {
          "label": "Tourism Canmore Kananaskis",
          "url": "https://www.explorecanmore.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Spring Creek & Railway', icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg', tag: 'Central', tagLevel: 'olive', meta: 'Newer mixed neighbourhood · Close to downtown · Bow Valley Trail hotels nearby',
      details: {
        "lead": "A newer mixed neighbourhood close to downtown, with the Bow Valley Trail hotels nearby.",
        "see": [
          {
            "title": "Close to downtown",
            "text": "Within walking distance of Main Street and the creek."
          },
          {
            "title": "Bow Valley Trail hotels",
            "text": "Many of the town’s hotels and motels are a short distance away."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Local Roam routes inside Canmore are free; Route 3 runs to Banff."
          },
          {
            "label": "Best for",
            "text": "A central base with easy access to the trails."
          },
          {
            "label": "Time to allow",
            "text": "This is mainly somewhere to stay."
          }
        ],
        "link": {
          "label": "Roam Transit",
          "url": "https://roamtransit.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Nordic Centre & Mineside', icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', tag: 'South-west', tagLevel: 'safe', meta: 'Olympic trail network · Old mine sites · Quarry Lake · Road to Spray Lakes',
      details: {
        "lead": "The south-west of town, with the Olympic-era Nordic Centre, old mine sites, Quarry Lake and the road to Spray Lakes.",
        "see": [
          {
            "title": "Canmore Nordic Centre",
            "text": "The regular winter season is listed as November 15, 2026 to April 30, 2027, conditions permitting. Frozen Thunder, the early-season track, runs October 17 to November 14."
          },
          {
            "title": "Quarry Lake",
            "text": "A reclaimed mine pit with a designated swimming area. There are no lifeguards and the water stays cold."
          },
          {
            "title": "Old mine sites",
            "text": "The land here was coal-mining country."
          }
        ],
        "practical": [
          {
            "label": "Trail pass",
            "text": "Groomed trails need a pass: adults $20 a day, ages 12–17 and seniors $15, ages 6–11 $10 in one guide. Passes are sold at the Day Lodge from 9 am to 5 pm."
          },
          {
            "label": "Parking",
            "text": "A Kananaskis Conservation Pass is $15 per vehicle per day."
          },
          {
            "label": "Good to know",
            "text": "Fireguard work from September 21, 2026 may affect parts of the park."
          }
        ],
        "link": {
          "label": "Alberta Parks: Canmore Nordic Centre",
          "url": "https://www.albertaparks.ca/parks/kananaskis/canmore-nordic-centre-pp/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Three Sisters', icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'East', tagLevel: 'danger', meta: 'Golf, resort homes · Built over old mine workings · Contested growth area',
      details: {
        "lead": "The east side of town, with golf and resort homes built over old mine workings. Growth here has been contested.",
        "see": [
          {
            "title": "The Three Sisters",
            "text": "The peaks that give the area its name rise over the neighbourhood and are reflected in Quarry Lake."
          },
          {
            "title": "Golf and resort homes",
            "text": "A resort-style residential area."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Roam Route 5T serves Three Sisters and is fare-free within Canmore."
          },
          {
            "label": "Good to know",
            "text": "Much of the land sits over old coal mine workings, which is part of the debate about growth."
          },
          {
            "label": "Time to allow",
            "text": "Mainly residential; not a sightseeing stop."
          }
        ],
        "link": {
          "label": "Roam Transit",
          "url": "https://roamtransit.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bow Valley Trail', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'Highway strip', tagLevel: 'purple', meta: 'Most hotels and motels · Car-oriented · Roam bus to Banff',
      details: {
        "lead": "The highway strip with most of the hotels and motels. It is car-oriented, with the Roam bus to Banff.",
        "see": [
          {
            "title": "Hotels and motels",
            "text": "The main concentration of visitor accommodation."
          },
          {
            "title": "Roam bus",
            "text": "Route 12 serves Palliser and the Bow Valley Trail, and is fare-free within Canmore."
          }
        ],
        "practical": [
          {
            "label": "To Banff",
            "text": "Roam Route 3 runs between downtown Canmore and downtown Banff; $6 per adult single in 2026. The run takes about 24 minutes."
          },
          {
            "label": "Schedules",
            "text": "Fall and winter schedule changes apply, so check the timetable."
          },
          {
            "label": "Good to know",
            "text": "You will want a car or the bus for evenings."
          }
        ],
        "link": {
          "label": "Roam Transit",
          "url": "https://roamtransit.com/fares/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Ha Ling Peak',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'The mountain that looms over town is named after Ha Ling, a Chinese cook who in 1896 accepted a $50 bet that he could not climb it, plant a flag and get back in a day — and did. For decades the peak carried a slur instead of his name; a campaign led by a Canmore teacher of Chinese descent had it renamed in the late 1990s. The steep trail to the summit is one of the most popular in the area and needs a Kananaskis pass at the trailhead.',
      tags: [{ label: 'Steep hike', level: 'danger' }, { label: 'Kananaskis pass', level: 'caution' }],
      details: {
        "lead": "The mountain that looms over town, named after Ha Ling, a Chinese cook who in 1896 accepted a $50 bet that he could climb it and get back in a day.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The hike",
                "text": "Sources give 5.4 to 7.8 km round trip with roughly 730 to 810 m of climbing. One guide lists the trailhead at 1,660 m and the summit at 2,408 m."
              },
              {
                "title": "Trail condition",
                "text": "The trail was rebuilt with stone steps and wooden staircases, but the final stretch is loose rock."
              },
              {
                "title": "Miner’s Peak",
                "text": "AllTrails lists the combined Ha Ling and Miner’s Peak route at about 5.5 mi, rated difficult."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Parking pass",
                "text": "A Kananaskis Conservation Pass is needed to park: $15 a day per vehicle or $90 a year. Driving through is free."
              },
              {
                "title": "Check the trail report",
                "text": "The Alberta Parks trail report is the authoritative source for closures."
              },
              {
                "title": "Start early",
                "text": "It is steep and exposed, and busy in summer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to hike; a parking pass is required."
          },
          {
            "label": "Getting there",
            "text": "The trailhead is near Goat Creek, a short drive from town."
          },
          {
            "label": "Time to allow",
            "text": "Four to six hours."
          }
        ],
        "link": {
          "label": "Alberta: Kananaskis Conservation Pass",
          "url": "https://www.alberta.ca/kananaskis-conservation-pass"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canmore Nordic Centre',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'Built for the cross-country and biathlon events of the 1988 Olympics on land that had been an open-pit coal mine. Now a provincial park with a large trail network — skiing in winter, mountain biking and running in summer — and still a training base for Canadian athletes.',
      tags: [{ label: 'Olympic venue', level: 'gold' }, { label: 'Year-round', level: 'safe' }],
      details: {
        "lead": "Built for the 1988 Olympics on land that was an open-pit coal mine, now a provincial park with a large trail network.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026/27 season",
                "text": "Alberta Parks lists November 15, 2026 to April 30, 2027, conditions permitting."
              },
              {
                "title": "Frozen Thunder",
                "text": "The early-season track ran October 17 to November 14, 2026 and needs a separate bib from the volunteer society."
              },
              {
                "title": "Passes",
                "text": "A trail pass is required on groomed trails. Day and season passes are sold at the Day Lodge, 9 am to 5 pm; season passes are also online."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Day pass prices",
                "text": "One guide lists adults $20, ages 12–17 and seniors $15, ages 6–11 $10, and a family season pass at $400."
              },
              {
                "title": "Parking",
                "text": "A Kananaskis Conservation Pass is $15 per vehicle per day."
              },
              {
                "title": "Fireguard work",
                "text": "Work from September 21, 2026 may affect parts of the park."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid for groomed trails in winter."
          },
          {
            "label": "Getting there",
            "text": "South-west of downtown."
          },
          {
            "label": "Best time",
            "text": "Winter for skiing; summer for biking and running."
          }
        ],
        "link": {
          "label": "Alberta Parks: Canmore Nordic Centre",
          "url": "https://www.albertaparks.ca/parks/kananaskis/canmore-nordic-centre-pp/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Grassi Lakes',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'Two small, startlingly clear green-blue ponds under limestone cliffs, reached by a short hike past a waterfall. One of the most visited trails in the valley — go early, and bring a Kananaskis Conservation Pass for the car park, where fines are real.',
      tags: [{ label: 'Easy hike', level: 'safe' }, { label: 'Pass required', level: 'caution' }],
      details: {
        "lead": "Two small, clear green-blue ponds under limestone cliffs, reached by a short hike past a waterfall. One of the most visited trails in the valley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The ponds",
                "text": "Startlingly clear green-blue water under limestone cliffs."
              },
              {
                "title": "The waterfall",
                "text": "The path to the lakes passes a waterfall."
              },
              {
                "title": "Easy hike",
                "text": "Short and suitable for most visitors."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Parking pass",
                "text": "A Kananaskis Conservation Pass is required to park: $15 a day per vehicle or $90 a year."
              },
              {
                "title": "Fines",
                "text": "Parking without a pass can be fined; the amount was not confirmed."
              },
              {
                "title": "Go early",
                "text": "It is one of the most popular trails."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to hike; parking pass required."
          },
          {
            "label": "Getting there",
            "text": "A short drive from town."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Alberta: Kananaskis Conservation Pass",
          "url": "https://www.alberta.ca/kananaskis-conservation-pass"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Quarry Lake',
      icon: '🏊', iconSrc: '/icons/attractions/ph_swimming-pool-thin.svg',
      text: 'A former open-pit mine reclaimed into a lake with a small beach, picnic meadow and off-leash dog area. Cold, but on a hot day it is where the town swims, with the Three Sisters reflected in the water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Swimming', level: 'blue' }],
      details: {
        "lead": "A former open-pit mine reclaimed into a lake with a small beach and picnic meadow. On a hot day it is where the town swims.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Swimming",
                "text": "One of the few designated swimming areas in Canmore. There are no lifeguards and the water stays cold."
              },
              {
                "title": "Dogs",
                "text": "The Town lists two off-leash areas, a meadow and a pond where dogs can swim. Dogs are not allowed in the lake."
              },
              {
                "title": "Three Sisters view",
                "text": "The peaks are reflected in the water."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Parking",
                "text": "Parking is hard on warm days. One guide lists paid rates by the hour; check the lot or the Town website."
              },
              {
                "title": "Fines",
                "text": "Fines start at $250 for dogs off leash outside designated areas."
              },
              {
                "title": "Go early",
                "text": "It is almost impossible to find a spot in summer unless you arrive in the morning."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to swim; parking may cost."
          },
          {
            "label": "Getting there",
            "text": "South-west of town near the Nordic Centre."
          },
          {
            "label": "Best time",
            "text": "A hot summer day, early."
          }
        ],
        "link": {
          "label": "Town of Canmore: pets",
          "url": "https://www.canmore.ca/your-community/residential-services/pets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canmore Museum & the Mines',
      icon: '⛏️', iconSrc: '/icons/attractions/ph_shovel-thin.svg',
      text: 'Canmore was a coal town for close to a century until the last mine closed in 1979, and much of the land the town is built on — including the Three Sisters development — sits over old mine workings. The local museum and the North West Mounted Police Barracks tell the story of the miners and the railway that made the town.',
      tags: [{ label: 'Local history', level: 'gold' }, { label: 'Downtown', level: 'blue' }],
      details: {
        "lead": "Canmore was a coal town for about 95 years. The museum’s Discovery Hall covers that history, and the museum shares programs with the North West Mounted Police Barracks Provincial Historic Site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Where",
                "text": "Canmore Museum and Geoscience Centre, 902 7 Avenue."
              },
              {
                "title": "Coal story",
                "text": "Discovery Hall covers Canmore as a coal-mining community."
              },
              {
                "title": "The building",
                "text": "It occupies a building that once served as a coal-mining office."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources conflict: noon–5 pm weekdays and 10 am–6 pm weekends in one, 10 am–4 pm in others. Call (403) 678-2462."
              },
              {
                "title": "Admission",
                "text": "Only an old listing was found ($3 adults); check the current price at cmags.org."
              },
              {
                "title": "Pair it",
                "text": "The museum is a short walk from Main Street."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, a few dollars; confirm the current price."
          },
          {
            "label": "Getting there",
            "text": "Downtown Canmore."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Canmore Museum",
          "url": "https://cmags.org/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canmore Folk Music Festival',
      icon: '🎶', iconSrc: '/icons/attractions/ph_music-notes-thin.svg',
      text: 'Alberta’s longest-running folk festival, held every year since 1978 over the Heritage Day long weekend in early August at Centennial Park downtown. Parking that weekend is almost nonexistent — come by bike or bus.',
      tags: [{ label: 'August long weekend', level: 'purple' }, { label: 'Ticketed', level: 'caution' }],
      details: {
        "lead": "Alberta’s longest-running folk festival, held since 1978 over the Heritage Day long weekend at Centennial Park. The 49th edition ran August 1–3, 2026.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 line-up",
                "text": "Reported headliners included Sarah Harmer, William Prince and Wild Rivers."
              },
              {
                "title": "Tickets",
                "text": "Weekend passes ranged from about $108 to $214 and children under 12 were free, per one listing."
              },
              {
                "title": "Venue",
                "text": "Centennial Park in downtown Canmore."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Getting there",
                "text": "Parking that weekend is almost nonexistent; come by bike or bus."
              },
              {
                "title": "Next year",
                "text": "2027 dates were not announced; check canmorefolkfestival.com."
              },
              {
                "title": "Children",
                "text": "Children under 12 are free, per one listing."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ticketed."
          },
          {
            "label": "Getting there",
            "text": "Walk, bike or Roam bus."
          },
          {
            "label": "Best time",
            "text": "The August long weekend."
          }
        ],
        "link": {
          "label": "Canmore Folk Festival",
          "url": "https://www.canmorefolkfestival.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Kananaskis at the Back Door',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Mountain Hiking', dist: 'Ha Ling · East End of Rundle · Grassi', text: 'Steep, rewarding hikes start minutes from town. Many trailheads are in Kananaskis and need the Conservation Pass. Snow lingers on north faces well into June.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Legacy Trail', dist: 'Canmore to Banff', text: 'A paved path beside the highway into Banff National Park, about 22 km. Ride there and take the Roam bus back. Entering the park by bike still requires a park pass.' },
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Mountain Biking', dist: 'Nordic Centre', text: 'The Olympic trail network turns into one of the best mountain-biking hubs in Alberta once the snow melts.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Bow River', dist: 'Through town', text: 'Paddling and float trips on the Bow. It is cold, fast in spring runoff and has weirs and debris — go with a guide if you do not know the river.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife Corridors', dist: 'Around town', text: 'Canmore sits in a narrow wildlife corridor between the mountains, and bears, elk, cougars and wolves move through the edges of town. Carry bear spray on any trail, keep dogs leashed, and respect corridor closures.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Spray Lakes Road', dist: 'Into Kananaskis', text: 'A gravel road over the shoulder of Ha Ling into the Spray Valley — dusty, rough and spectacular. Fuel up first, expect no signal, and buy a Conservation Pass.' },
  ],

  food: [
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Main Street Cafés', area: 'Downtown', areaLevel: 'blue', text: 'Bakeries and coffee shops that open early for hikers and climbers. Grab trail lunch here — Kananaskis has almost nothing for sale.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Breweries & Distillery', area: 'Downtown · Bow Valley Trail', areaLevel: 'gold', text: 'A small but strong brewery scene, plus a distillery. The usual end to a mountain day.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Mountain Dining', area: 'Downtown', areaLevel: 'danger', text: 'From pubs to fine dining, generally a little cheaper and less crowded than Banff — which is why Banff visitors often come here to eat.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Groceries', area: 'Bow Valley Trail', areaLevel: 'safe', text: 'Full supermarkets with prices closer to Calgary than to Banff. The place to stock up before heading into the park or Kananaskis.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'Downtown', areaLevel: 'purple', text: 'A wider range of cuisines than you might expect for a town this size, fed by the international crowd that works in the valley.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Farmers’ Market', area: 'Summer · downtown', areaLevel: 'olive', text: 'A summer market with Alberta producers and local makers. Check current days before you go.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Valley first, peaks later', text: 'The valley thaws early; higher trails stay snowy and avalanche-prone into June. Bears come out hungry — carry spray from the first warm days.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Long days, busy trailheads and the folk festival in early August. Wildfire smoke can fill the valley. Start hikes early to beat both crowds and afternoon thunderstorms.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'safe', rating: 5, note: 'Larches and quiet', text: 'Golden larches on the high trails in mid-September, fewer people, crisp mornings. Elk rut season — keep away from bulls.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Nordic skiing', text: 'Cross-country skiing at the Nordic Centre, ice climbing, and quick access to the Banff ski hills. Chinook winds bring sudden thaws; cold snaps below −25 °C still happen.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Calgary',
      text: 'The Trans-Canada Highway west from Calgary, about 106 km. Canmore is the last town before the Banff National Park gate, so no park pass is needed to drive into town — only if you continue west.',
      time: '≈1h15 from Calgary',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'From Calgary Airport (YYC)',
      text: 'Scheduled airport shuttles run to Canmore and Banff hotels. Book ahead in summer and ski season.',
      time: '≈1h30 from YYC',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Roam Transit',
      text: 'Roam’s Route 3 links Canmore and Banff in about 25 minutes. Local Canmore routes are fare-free.',
      time: '≈25 min to Banff',
    },
    {
      icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg',
      title: 'By Bike from Banff',
      text: 'The Legacy Trail connects the two towns along the valley floor — one of the most scenic commutes in the country.',
      time: '≈22 km',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Downtown Canmore',
      area: 'Walkable · Best base',
      text: 'Close to Main Street, the river and the bus. More character than the highway strip and easy to manage without a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Canmore+Alberta', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Canmore%2C%20Alberta', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Bow Valley Trail',
      area: 'Most hotels · Car-friendly',
      text: 'Hotels and motels along the old highway, with parking and a Roam stop. Usually cheaper than Banff for the same standard.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Bow+Valley+Trail+Canmore', level: 'blue' },
      ],
    },
    {
      icon: '⛺', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Kananaskis Campgrounds',
      area: 'Rustic · Pass required',
      text: 'Provincial campgrounds in Kananaskis and along the Spray Lakes road. Book through Alberta Parks; a Conservation Pass is required for your vehicle.',
      links: [
        { label: 'Alberta Parks Reservations', url: 'https://reserve.albertaparks.ca/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Roam Transit',
      text: 'Roam runs Canmore’s local buses and the regional link to Banff and Lake Louise. Canmore local routes are currently fare-free. Kananaskis trailheads have no public transit — you will need a car.',
      linkLabel: 'Roam Transit',
      linkUrl: 'https://roamtransit.com/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Two Different Passes',
        text: 'The most common confusion in Canmore. The town itself needs neither. Kananaskis trailheads (Grassi Lakes, Ha Ling, the Spray Lakes road) need the provincial Conservation Pass. Driving west into Banff needs the federal Parks Canada pass. They are not interchangeable.',
        fareBox: {
          label: '2026 prices',
          lines: ['Kananaskis pass: $15/vehicle/day', 'Kananaskis annual: $90', 'Parks Canada daily: $12.25 adult', 'Town of Canmore: no pass'],
        },
        linkLabel: 'Kananaskis Conservation Pass',
        linkUrl: 'https://www.albertaparks.ca/',
      },
      {
        icon: '🚍', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Roam Fares',
        text: 'Fares from Roam’s 2026 fare table. Children ride free.',
        fareBox: {
          label: 'Adult fares',
          lines: ['Canmore local: fare-free', 'Route 3 to Banff: $6', 'System day pass: $30'],
        },
        linkLabel: 'Roam Fares',
        linkUrl: 'https://roamtransit.com/fares/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Kananaskis and most trailheads. Downtown has paid parking in summer.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Town is compact and bike-friendly, with paths along the river and the Legacy Trail to Banff.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Limited; book ahead for early or late trips.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown, the river, Policeman’s Creek and Quarry Lake are all walkable.' },
        ],
      },
    ],
    proTip: {
      label: 'Pass tip:',
      text: 'If you will hike in Kananaskis more than six days in a year, the $90 annual Conservation Pass is cheaper than buying daily passes. Check Alberta Parks for how many vehicles it covers.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Alberta: GST Only — But Not on Your Room',
    headlineLevel: 'safe',
    description:
      'Alberta has no provincial sales tax, so most purchases carry only the 5% federal GST. Accommodation is the exception: Alberta’s Tourism Levy rose from 4% to 6% on 1 April 2026, on top of GST. Bookings made before 1 April 2026 keep the old 4% rate. Some properties add their own fees — check the breakdown before you pay.',
    comparison: [
      { label: 'Canmore / Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels and short-term rentals: 5% GST + 6% Tourism Levy' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Alcohol: 5% GST (plus provincial markup in the price)' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tours, rentals and lessons: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', label: 'Park passes: priced as posted' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 28+ nights: exempt from the Tourism Levy' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and instructors: 10–15%. Hotel housekeeping: $2–5/night.',
  },

  practical: [
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Which Pass?', text: 'Town: none. Kananaskis trailheads: Kananaskis Conservation Pass ($15/vehicle/day in 2026; parking without one is fined). Banff National Park: Parks Canada pass. Buy the right one before you park.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Bears in Town', text: 'Bears and cougars use the corridors around Canmore. Carry bear spray on every trail, never leave food or garbage out, and keep dogs on leash.' },
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Chinooks & Weather', text: 'Warm chinook winds can melt snow in hours in winter, and summer storms build fast in the afternoon. Check the forecast before any mountain day.' },
    { icon: '📵', iconSrc: '/icons/attractions/ph_cell-signal-slash-thin.svg', title: 'No Signal Out There', text: 'Coverage is fine in town and vanishes on the Spray Lakes road and most of Kananaskis. Download maps and tell someone your plan.' },
    { icon: '🏗️', iconSrc: '/icons/attractions/ph_crane-thin.svg', title: 'Growth & Housing', text: 'Canmore is under pressure: second homes, short-term rentals and the contested Three Sisters development — approved by a provincial tribunal in 2022 over the town’s objections — shape local politics. Workers struggle to find housing; it is part of the town you are visiting.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Since November 1, 2026, Alberta no longer changes its clocks: it stays on Alberta Time (UTC-6) all year — the same as Saskatchewan.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Canmore is in Treaty 7 territory. The Stoney Nakoda (Îyârhe Nakoda) Nations live just east of the valley at Mînî Thnî (Morley), and the Bow Valley is also part of the traditional lands of the Tsuut’ina and the Blackfoot Confederacy.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Canmore General Hospital', '1100 Hospital Place', 'Emergencies: call 911'] },
  ],
};

export default CANMORE;
