// Prince Albert — данные страницы /city/prince-albert (САСКАЧЕВАН)
// Видео Принс-Альберта в бесплатных банках нет: на Pexels есть только
// "Prince Albert's Cairn" — это памятник в Шотландии, не город.
// В шапке фото с Wikimedia Commons — река North Saskatchewan и набережная
// центра осенью, автор Carolyn Carleton, сентябрь 2013, CC BY-SA 3.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (37 756; citypa.ca).
// Тарифы — citypa.ca, сетка от 1 сентября 2024 (новее не нашли —
// «уточняйте»). Больница Victoria — SHA (идёт расширение корпуса).
// Saskatchewan не переводит часы (UTC-6 круглый год).
// Diefenbaker House, три премьера, Grey Owl, Waskesiu — из общих знаний.

export const PRINCE_ALBERT = {
  slug: 'prince-albert',
  name: 'Prince Albert',
  province: 'Saskatchewan',
  provinceId: 'sk',
  region: 'SK',
  tag: 'Saskatchewan · Gateway to the North',
  accentLevel: 'gold',
  heroIcon: '🌲',
  heroImage: '/Cities/PrinceAlbert/hero.jpg',
  heroCredit: 'Photo: Carolyn Carleton / Wikimedia Commons · CC BY-SA 3.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 53.2033, lon: -105.7531 },
  subtitle: 'Where the Prairie Meets the Forest',
  description:
    'Saskatchewan’s third-largest city sits on the North Saskatchewan River right where farmland gives way to boreal forest. Prince Albert is the jumping-off point for Prince Albert National Park’s lakes and wilderness, and a city with deep history — from the fur trade to three prime ministers who once represented it in Parliament.',

  actions: [
    { label: 'Explore Prince Albert', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈37.8K (2021)' },
    { label: 'Rank in Saskatchewan', value: '3rd largest' },
    { label: 'Language', value: 'English · Cree' },
    { label: 'Time Zone', value: 'Central — no DST (UTC-6)' },
    { label: 'To Saskatoon', value: '≈1 h 30 min by car' },
    { label: 'To Waskesiu', value: '≈1 h by car' },
  ],

  badges: ['Gateway to the North', 'River City', 'National Park Base'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '37,756', label: 'People in the 2021 census — Saskatchewan’s third-largest city', level: 'blue' },
    { value: '3', label: 'Prime ministers — Laurier, King and Diefenbaker — represented Prince Albert in Parliament', level: 'purple' },
    { value: 'UTC-6', label: 'All year — Saskatchewan does not change its clocks', level: 'gold' },
    { value: '$3', label: 'A city bus ride in cash (2024 fare schedule — confirm before you go)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Central Avenue', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Heritage storefronts, galleries and cafés',
      details: {
        "lead": "The heart of Prince Albert, where art, culture and history come together, close to the Rotary Trail.",
        "see": [
          {
            "title": "Mann Art Gallery",
            "text": "At 142 12th Street W in the E.A. Rawlinson Centre; free admission. New 2026 hours: Thursday and Friday 10 am–5 pm and Saturday noon–5 pm."
          },
          {
            "title": "Rotary Trail link",
            "text": "Near the historic downtown, a bridge connects the Rotary Trail to the Kiwanis Nature Trail."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The city centre."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The gallery is closed Sunday to Wednesday; phone 306-763-7080."
          }
        ],
        "link": {
          "label": "Mann Art Gallery",
          "url": "https://www.mannartgallery.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverfront', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Rotary Trail along the North Saskatchewan River',
      details: {
        "lead": "The Rotary Trail along the south bank of the North Saskatchewan River.",
        "see": [
          {
            "title": "Rotary Trail",
            "text": "Nearly 23 km of paved pathway following the river and then circling the city; cleared of snow in winter."
          },
          {
            "title": "Award",
            "text": "It won the Saskatchewan Parks and Recreation Association’s Parks and Open Space Award for 2020."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Along the river through the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "The city lists the trail as available all 12 months."
          }
        ],
        "link": {
          "label": "City of Prince Albert: Rotary Trail",
          "url": "https://www.citypa.ca/parks-recreation-and-culture/parks-and-trails/rotary-trail/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'East Hill', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Neighbourhoods and shopping on the hill',
      details: {
        "lead": "A residential area on the hill, with neighbourhoods and shopping.",
        "see": [
          {
            "title": "Residential",
            "text": "East Hill is one of the city’s official neighbourhoods; no visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "East of the centre."
          },
          {
            "label": "Good to know",
            "text": "Useful for shopping and services."
          }
        ],
        "link": {
          "label": "City of Prince Albert: neighbourhoods",
          "url": "https://citypa.ca/en/living-in-our-community/neighbourhoods-in-prince-albert.aspx"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Little Red River Park', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Park', tagLevel: 'olive', meta: 'Large wooded park with trails and winter sports',
      details: {
        "lead": "A wooded river-valley park open year-round, reached by a 3 km extension of the Rotary Trail.",
        "see": [
          {
            "title": "Summer",
            "text": "Trails for bikers and hikers."
          },
          {
            "title": "Winter",
            "text": "Cross-country skiing (sources give 12 routes of 1–6 km or over 50 km); the 3 km connector is cleared for walking only in winter."
          },
          {
            "title": "Toboggan hill",
            "text": "A free, unsupervised public toboggan hill beside the south parking lot, open when weather allows."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the edge of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "The ski trail figures vary a lot between sources."
          }
        ],
        "link": {
          "label": "Tourism Saskatchewan: Little Red River Park",
          "url": "https://tourismsaskatchewan.com/listings/1335/little-red-river-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Prime Ministers Park', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Heritage', tagLevel: 'purple', meta: 'Park honouring the city’s prime-ministerial ties',
      details: {
        "lead": "A park in a city that elected three prime ministers: Laurier, King and Diefenbaker.",
        "see": [
          {
            "title": "The link",
            "text": "Laurier won the riding in 1896 and King in a 1926 by-election, but neither lived in Prince Albert; Diefenbaker did."
          },
          {
            "title": "Diefenbaker",
            "text": "The city’s most commemorated figure: his former home is a museum, and a statue stands outside City Hall."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the city."
          },
          {
            "label": "Good to know",
            "text": "Three sports fields were once proposed to be named for the prime ministers; no monument to King was found."
          }
        ],
        "link": {
          "label": "Maclean’s: Prince Albert, Canada’s political city of champions",
          "url": "https://www.macleans.ca/politics/ottawa/prince-albert-canadas-political-city-of-champions"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Flat', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'West', tagLevel: 'danger', meta: 'Older residential area near the river',
      details: {
        "lead": "An older residential area near the river.",
        "see": [
          {
            "title": "Residential",
            "text": "West Flat is one of the city’s official neighbourhoods; no visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the centre, near the river."
          },
          {
            "label": "Good to know",
            "text": "Origins of the name were not found."
          }
        ],
        "link": {
          "label": "City of Prince Albert: neighbourhoods",
          "url": "https://citypa.ca/en/living-in-our-community/neighbourhoods-in-prince-albert.aspx"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Prince Albert National Park',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'An hour north, a vast park of boreal forest, lakes and aspen parkland with a resort village at Waskesiu Lake. Beaches, canoe routes, wildlife — and a free-roaming plains bison herd in its remote southwest.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Must see', level: 'gold' }],
      details: {
        "lead": "A boreal forest, lakes and aspen parkland park with the resort village of Waskesiu Lake, and a free-roaming plains bison herd in its remote southwest.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Entry fees",
                "text": "Park entry fees apply year-round; one guide lists $10.50 per adult up to $21 per vehicle, unconfirmed for 2026."
              },
              {
                "title": "Winter",
                "text": "The main gate on Highway 264 stays open, but most interior roads are not maintained; most Waskesiu services run late May to early October."
              },
              {
                "title": "Visitor centre",
                "text": "Heated washrooms are available 24 hours; a warming shelter is across the street. Winter hours were reduced and closed Mondays last season."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "No snowmobiles",
                "text": "Snowmobiles are not permitted in the park."
              },
              {
                "title": "Skating",
                "text": "An indoor rink on Montreal Drive; bring skates, fees apply."
              },
              {
                "title": "Confirm",
                "text": "Call 306-663-4522 for 2026–27 fees and hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park pass required, about $10 per adult per day."
          },
          {
            "label": "Getting there",
            "text": "About an hour north of Prince Albert."
          },
          {
            "label": "Best time",
            "text": "Summer; winter for skiing."
          }
        ],
        "link": {
          "label": "Parks Canada: Prince Albert National Park",
          "url": "https://parks.canada.ca/pn-np/sk/princealbert/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Grey Owl’s Cabin',
      icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Inside the national park, the lakeside cabin of conservationist Grey Owl is reached by a long hike or a canoe trip — a classic Saskatchewan adventure.',
      tags: [{ label: 'Full day+', level: 'caution' }, { label: 'Heritage', level: 'purple' }],
      details: {
        "lead": "The lakeside cabin on Ajawaan Lake where Grey Owl lived for seven years, reached by a long hike or a paddle and portage.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hiking",
                "text": "About 20 km one way (about 40 km return) from the Kingsmere River trailhead."
              },
              {
                "title": "Paddle",
                "text": "Paddle north across Kingsmere Lake, then portage about 600 m to Ajawaan Lake."
              },
              {
                "title": "Cabin",
                "text": "Also called Beaver Lodge; he lived there with his wife Anahareo."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Two days",
                "text": "One guide suggests two days minimum for the hike; a camping permit is needed."
              },
              {
                "title": "Final leg",
                "text": "Sources give different distances for the last stretch; confirm with Parks Canada."
              },
              {
                "title": "Season",
                "text": "A summer trip."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Park pass; permit for overnight camping."
          },
          {
            "label": "Getting there",
            "text": "Kingsmere River trailhead inside the national park."
          },
          {
            "label": "Time to allow",
            "text": "A full day or more."
          }
        ],
        "link": {
          "label": "Parks Canada: routes to Grey Owl’s Cabin",
          "url": "https://parks.canada.ca/pn-np/sk/princealbert/activ/experiences/randonee-hiking/cabane-cabin"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Diefenbaker House Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'The former home of Prime Minister John Diefenbaker, preserved as a small museum. Seasonal hours.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "The John and Olive Diefenbaker Museum, the former home of the prime minister, a National Historic Site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "The city lists daily 9:30 am–4:30 pm; another source gives 9 am–5 pm in summer and winter by appointment."
              },
              {
                "title": "Admission",
                "text": "Sources conflict: about $4 for adults, or free."
              },
              {
                "title": "Statue",
                "text": "A statue of Diefenbaker stands outside City Hall."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "Call 306-953-4863 before a winter visit."
              },
              {
                "title": "Confirm",
                "text": "No official 2026 listing was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee or free; confirm."
          },
          {
            "label": "Getting there",
            "text": "In Prince Albert."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Parks Canada: Diefenbaker Museum",
          "url": "https://parks.canada.ca/culture/designation/lieu-site/musee-john-olive-diefenbaker-museum"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Rotary Trail',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A paved trail loop through the city and along the riverbank, good for walking and cycling.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Walk & bike', level: 'blue' }],
      details: {
        "lead": "Nearly 23 km of paved pathway along the south bank of the North Saskatchewan River and around the city, cleared of snow in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Length",
                "text": "About 22.6 to 23 km, 10 ft wide and multi-use."
              },
              {
                "title": "Little Red River Park",
                "text": "A 3 km extension reaches the park."
              },
              {
                "title": "Kiwanis Nature Trail",
                "text": "A bridge near downtown connects to it."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Year-round",
                "text": "The city lists it as available all 12 months."
              },
              {
                "title": "Free",
                "text": "Free to use."
              },
              {
                "title": "Winter",
                "text": "The connector to the park is for walking only in winter."
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
            "text": "Access points along the river and around the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Prince Albert: Rotary Trail",
          "url": "https://www.citypa.ca/parks-recreation-and-culture/parks-and-trails/rotary-trail/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Little Red River Park',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'A wooded river-valley park at the edge of the city with hiking and biking in summer and cross-country skiing and tobogganing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
      details: {
        "lead": "A wooded river-valley park open year-round, with hiking and biking in summer and skiing and tobogganing in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Skiing",
                "text": "Sources give 12 routes of 1–6 km, or over 50 km maintained by the club; figures vary."
              },
              {
                "title": "Toboggan hill",
                "text": "Free and unsupervised beside the south parking lot, open when weather allows."
              },
              {
                "title": "Winter walking",
                "text": "The Nordic club grooms over 7 km of winter walking trails, per a city PDF."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Connector",
                "text": "A 3 km Rotary Trail extension links it to the city; walking only in winter."
              },
              {
                "title": "Free",
                "text": "Free to enter."
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
            "text": "At the edge of the city."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "City of Prince Albert: Little Red River Park",
          "url": "https://www.citypa.ca/en/parks-recreation-and-culture/little-red-river-park.aspx"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Arts Centre & Galleries',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'The Mann Art Gallery, in the E.A. Rawlinson Centre, offers free exhibitions; the city also runs an Arts Centre with free programs.',
      tags: [{ label: 'Culture', level: 'purple' }],
      details: {
        "lead": "The Mann Art Gallery, in the E.A. Rawlinson Centre, with free exhibitions, plus the city’s Arts Centre.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours (2026)",
                "text": "Thursday and Friday 10 am–5 pm, Saturday noon–5 pm; closed Sunday to Wednesday since January 1, 2026."
              },
              {
                "title": "Admission",
                "text": "Free."
              },
              {
                "title": "Why",
                "text": "The change was driven mostly by financial constraints, per the Prince Albert Herald."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Address",
                "text": "142 12th Street W."
              },
              {
                "title": "Confirm",
                "text": "Phone 306-763-7080 or check mannartgallery.ca, especially around holidays."
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
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Mann Art Gallery",
          "url": "https://www.mannartgallery.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Forest, Lakes and River',
  outdoor: [
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'Waskesiu Lake', dist: '≈1 h north', text: 'Sandy beaches, boating and a resort townsite in the national park.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Canoe Routes', dist: 'National park', text: 'Classic boreal paddling, including the route to Grey Owl’s cabin.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Northern lakes', text: 'Pike and walleye in the lakes north of the city. Licence required.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Cross-Country Skiing', dist: 'Little Red · park', text: 'Groomed trails in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Northern Lights', dist: 'Outside town', text: 'Dark skies north of the city often show the aurora in winter.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Wildlife', dist: 'Park roads', text: 'Elk, deer, black bears and foxes — drive carefully at dusk.' },
  ],

  food: [
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Pickerel', area: 'Local restaurants', areaLevel: 'blue', text: 'Fresh northern lake fish on menus.' },
    { icon: '🫓', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Bannock', area: 'Community events', areaLevel: 'danger', text: 'Traditional Indigenous bread at events and some cafés.' },
    { icon: '🍔', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Diners', area: 'Central Avenue', areaLevel: 'gold', text: 'Family restaurants and classic diners.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'olive', text: 'Small coffee shops on the main street.' },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Wild Berries', area: 'Late summer', areaLevel: 'purple', text: 'Blueberries and saskatoons in the forest nearby.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies', area: 'Local spots', areaLevel: 'safe', text: 'Prairie comfort food.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Thaw', text: 'River ice breaks up in April; the forest greens in May. Black flies start in late spring.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Lake season', text: 'Warm days and long evenings — the best time for Waskesiu and canoeing.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Golden aspen', text: 'Golden aspen along the river and in the park; elk rut in September.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold & snowy', text: 'Very cold, snowy winters — skiing, snowmobiling and aurora nights.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highway 11 and Highway 2 connect Prince Albert with Saskatoon; Highway 2 continues north to the national park.',
      time: '≈1 h 30 min from Saskatoon',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Prince Albert has a regional airport; most travellers fly into Saskatoon (YXE).',
      time: '≈1 h 30 min from YXE',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches connect with Saskatoon. Check current operators.',
      time: 'Check operators',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'There is no passenger rail to Prince Albert.',
      time: 'None',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Prince Albert',
      area: 'City hotels',
      text: 'Hotels downtown and along the highways.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Prince+Albert+Saskatchewan', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Prince%20Albert%2C%20Saskatchewan%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Waskesiu',
      area: 'National park',
      text: 'Cabins, lodges and campgrounds in the park’s townsite.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Waskesiu+Lake', level: 'blue' },
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/sk/princealbert', level: 'safe' },
      ],
    },
    {
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      title: 'Lake Lodges',
      area: 'North of the city',
      text: 'Fishing lodges and cabins on northern lakes.',
      links: [
        { label: 'Tourism Saskatchewan', url: 'https://www.tourismsaskatchewan.com/', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Prince Albert Transit',
      text: 'The city runs a local bus network covering downtown, East Hill and the main neighbourhoods. Service is limited in the evenings and on Sundays.',
      linkLabel: 'City of Prince Albert',
      linkUrl: 'https://www.citypa.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the city’s schedule dated September 1, 2024 — we could not find a newer one, so confirm before you travel.',
        fareBox: {
          label: 'Adult (2024 schedule)',
          lines: ['Cash: $3.00', '10 tickets: $25.00', 'Monthly (18–64): $80.00', 'Seniors monthly: $30.00'],
        },
        linkLabel: 'Fares & passes',
        linkUrl: 'https://www.citypa.ca/parking-streets-and-transportation/transit/fares-and-passes',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Essential for the national park.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the riverfront are walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The Rotary Trail in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Park tip:',
      text: 'Buy your Parks Canada pass online before driving north — and fill up in Prince Albert, as services thin out quickly.',
    },
  },

  taxInfo: {
    totalTaxPercent: '11%',
    headline: 'Saskatchewan: 5% GST + 6% PST',
    headlineLevel: 'gold',
    description:
      'Most purchases carry 5% federal GST plus 6% Saskatchewan PST, for 11% in total. Hotel stays carry GST and PST; check your bill for any local marketing fee.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Prince Albert / Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold', highlight: true },
      { label: 'Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + PST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + PST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + PST' },
      { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', label: 'Fishing gear: GST + PST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'Rotary Trail: free' },
      { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', label: 'Little Red River Park: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Fishing guides: 10–20%.',
  },

  practical: [
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'No Daylight Saving', text: 'Saskatchewan stays on UTC-6 all year.' },
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Wildfire Season', text: 'Northern Saskatchewan sees wildfires most summers — check park and road advisories.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs', text: 'Black flies and mosquitoes are intense in June and July in the forest.' },
    { icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Bears', text: 'Black bears live in the national park; store food properly when camping.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Temperatures often drop below −30 °C. Plug in your car overnight.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital Works', text: 'Victoria Hospital is being expanded — allow extra time to find the right entrance.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Prince Albert is on Treaty 6 territory, the traditional lands of the Cree people, and the homeland of the Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Victoria Hospital · 1200 24th St W', 'Emergency 24/7 · (306) 765-6000', 'Emergencies: call 911'] },
  ],
};

export default PRINCE_ALBERT;
