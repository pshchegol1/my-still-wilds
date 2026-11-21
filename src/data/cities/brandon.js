// Brandon — данные страницы /city/brandon (Брандон, МАНИТОБА)
// Видео Брандона в бесплатных банках нет (Pexels по "brandon manitoba"
// не отдаёт ни одного ролика из Брандона).
// В шапке фото с Wikimedia Commons — панорама центра со зданием McKenzie
// Seeds, автор MBBrdn, август 2026, CC0 (подпись не обязательна, но
// указана для единообразия).
// Население — перепись 2021 года (51 313; brandon.ca).
// Тарифы Brandon Transit — циркуляр правительства Манитобы 2025-25
// (официальную страницу 2026 найти не удалось — на странице «уточняйте»).
// Налог на проживание 5% с 1 июля 2023 (By-law 7355, brandon.ca).
// Больница — список учреждений Манитобы.
// Музеи, Riverbank, Spruce Woods, McKenzie Seeds — из общих знаний.

export const BRANDON = {
  slug: 'brandon',
  name: 'Brandon',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · The Wheat City',
  accentLevel: 'gold',
  heroIcon: '🌾',
  heroImage: '/Cities/Brandon/hero.jpg',
  heroCredit: 'Photo: MBBrdn / Wikimedia Commons · CC0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.8485, lon: -99.9501 },
  subtitle: 'Heart of the Western Prairie',
  description:
    'Manitoba’s second city grew up on the Assiniboine River as a grain and railway centre — hence its nickname, the Wheat City. Today Brandon is a university and farm-show town with a riverside trail network, a museum in a wartime air-training hangar, and quick access to the sand dunes of Spruce Woods and the forests of Riding Mountain.',

  actions: [
    { label: 'Explore Brandon', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈51K (2021)' },
    { label: 'Rank in Manitoba', value: '2nd largest' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈2 h 15 min by car' },
    { label: 'To Spruce Woods', value: '≈45 min by car' },
  ],

  badges: ['Wheat City', 'Assiniboine River', 'Prairie Hub'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '51,313', label: 'People in the 2021 census — Manitoba’s second-largest city', level: 'blue' },
    { value: '5%', label: 'City accommodation tax on hotel rooms since July 1, 2023, on top of GST and RST', level: 'purple' },
    { value: '1', label: 'Wartime air-training base turned museum, with vintage aircraft in its original hangars', level: 'gold' },
    { value: '$2', label: 'A Brandon Transit bus ride in cash (2025 fare)', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Rosser Avenue', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Heritage brick buildings · Cafés and shops · McKenzie Seeds building',
      details: {
        "lead": "Brandon’s centre: Rosser Avenue, the art gallery, the Daly House Museum and the old McKenzie Seeds building.",
        "see": [
          {
            "title": "Art Gallery of Southwestern Manitoba",
            "text": "At 710 Rosser Avenue, Unit 2; free admission. Listed hours are Tuesday to Friday 10 am–5 pm (Thursday until 9 pm) and Saturday from noon, but sources differ."
          },
          {
            "title": "Daly House Museum",
            "text": "The 1882 home of Brandon’s first mayor, Thomas Mayne Daly. Tuesday to Saturday, closed at lunch; phone 204-727-1722 to confirm."
          },
          {
            "title": "McKenzie Seeds building",
            "text": "At 30 Ninth Street, built in 1910 as the A.E. McKenzie Company building, the city’s first reinforced-concrete building and its tallest until 1973. A provincial heritage site since 1988; it has been vacant since 2008 and redevelopment has been planned. See it from the street."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The city centre; free parking behind the Daly House off Rosser Avenue."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Confirm hours, since listings differ."
          }
        ],
        "link": {
          "label": "Tourism Westman",
          "url": "https://www.tourismwestman.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Riverbank', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'River', tagLevel: 'blue', meta: 'Riverbank Discovery Centre · Trails along the Assiniboine',
      details: {
        "lead": "Brandon’s visitor centre on the Assiniboine and the start of the riverside trail network.",
        "see": [
          {
            "title": "Riverbank Discovery Centre",
            "text": "Winter hours run from Thanksgiving to the May long weekend: Monday to Friday 8:30 am–5 pm, Saturday, Sunday and holidays 12–5 pm. A snack bar, water refill and washrooms are on site."
          },
          {
            "title": "Trails",
            "text": "The centre is the starting point for the trails around it. One guide puts the network at over 17 km along the river."
          },
          {
            "title": "Canoe and kayak",
            "text": "Reviewers mention canoe and kayak rentals in the warm season."
          }
        ],
        "practical": [
          {
            "label": "Contact",
            "text": "Phone 204-729-2141; winter hours are subject to change."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The trail network is best from spring to fall."
          }
        ],
        "link": {
          "label": "Riverbank Discovery Centre",
          "url": "https://riverbank.mb.ca/about-the-centre/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'University District', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'Campus', tagLevel: 'purple', meta: 'Brandon University · Older tree-lined streets',
      details: {
        "lead": "Brandon University, an independent university since 1967, and older tree-lined streets around it.",
        "see": [
          {
            "title": "Brandon University",
            "text": "Its roots go back to Brandon College, founded around 1890–1899 (sources disagree). The university received its own charter in 1967."
          },
          {
            "title": "Heritage buildings",
            "text": "The Brandon College and Clark Hall buildings at 270 Eighteenth Street are a heritage site; a stone monument from 1999 beside Clark Hall marks Prairie College."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On 18th Street."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a campus walk."
          },
          {
            "label": "Good to know",
            "text": "Campus is busiest in term time."
          }
        ],
        "link": {
          "label": "Brandon University: historical sketch",
          "url": "https://brandonu.ca/president/historical-sketch"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Keystone Centre Area', icon: '🐄', iconSrc: '/icons/attractions/ph_cow-thin.svg', tag: 'Events', tagLevel: 'danger', meta: 'Arena and fairgrounds — home of the Royal Manitoba Winter Fair',
      details: {
        "lead": "The arena and fairgrounds: hockey, concerts and the Royal Manitoba Winter Fair.",
        "see": [
          {
            "title": "Assiniboine Credit Union Place",
            "text": "The arena, formerly Westoba Place, hosts Brandon Wheat Kings games into February and March 2027."
          },
          {
            "title": "Winter Fair",
            "text": "The Provincial Exhibition of Manitoba lists the 2027 Royal Manitoba Winter Fair as March 5–7; the 2026 edition ran March 30 to April 4. Confirm before planning."
          },
          {
            "title": "Other events",
            "text": "Manitoba Ag Days is listed for January 19–21, 2027, and the 2027 Telus Cup (U18 hockey) is coming in April."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 1175 18th Street; one listing gives 1200 13th Street, so use the venue’s site."
          },
          {
            "label": "Time to allow",
            "text": "Depends on the event."
          },
          {
            "label": "Good to know",
            "text": "Events book hotels quickly."
          }
        ],
        "link": {
          "label": "Keystone Centre",
          "url": "https://keystonecentre.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'North Hill', icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', tag: 'Shopping', tagLevel: 'olive', meta: 'Big-box stores and hotels along the Trans-Canada',
      details: {
        "lead": "Shopping and hotels along the Trans-Canada Highway.",
        "see": [
          {
            "title": "Shops and hotels",
            "text": "Big-box stores and highway hotels. No visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Trans-Canada Highway at the north edge of the city."
          },
          {
            "label": "Good to know",
            "text": "Useful for supplies and a place to stay; the main sights are downtown."
          }
        ],
        "link": {
          "label": "Tourism Westman",
          "url": "https://www.tourismwestman.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'South End', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'safe', meta: 'Newer neighbourhoods and parks',
      details: {
        "lead": "Newer residential neighbourhoods and parks.",
        "see": [
          {
            "title": "Residential area",
            "text": "Newer neighbourhoods and parks; no visitor attractions were found here."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the centre."
          },
          {
            "label": "Good to know",
            "text": "Most visitors stay downtown or on the highway."
          }
        ],
        "link": {
          "label": "City of Brandon",
          "url": "https://www.brandon.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Commonwealth Air Training Plan Museum',
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      text: 'Housed in original Second World War hangars at the airport, this museum tells the story of the plan that trained Allied aircrews across Canada, with restored aircraft on display.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Aviation', level: 'blue' }],
      details: {
        "lead": "A museum in original Second World War hangars at the Brandon airport about the plan that trained Allied aircrews, with restored aircraft on display.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "The museum’s site and Tripadvisor list 10 am–2 pm daily; some older listings give other hours."
              },
              {
                "title": "Renovated",
                "text": "Renovated exhibits were unveiled in April 2025 after repairs to the hangar."
              },
              {
                "title": "Admission",
                "text": "A 2025 guide lists adults at $10; no 2026 price was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Call first",
                "text": "Phone (204) 727-2444 to confirm hours and price."
              },
              {
                "title": "Location",
                "text": "At McGill Field, the Brandon Municipal Airport."
              },
              {
                "title": "Check",
                "text": "Confirm at airmuseum.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $10 for adults on one listing."
          },
          {
            "label": "Getting there",
            "text": "At the airport; a car is easiest."
          },
          {
            "label": "Time to allow",
            "text": "About two hours."
          }
        ],
        "link": {
          "label": "Commonwealth Air Training Plan Museum",
          "url": "https://airmuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Riverbank Discovery Centre',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Brandon’s visitor centre on the Assiniboine, gateway to kilometres of riverside walking and cycling trails.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Trails', level: 'blue' }],
      details: {
        "lead": "Brandon’s visitor centre on the Assiniboine River, the gateway to the riverside walking and cycling trails.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter hours",
                "text": "Thanksgiving to the May long weekend: Monday to Friday 8:30 am–5 pm; Saturday, Sunday and holidays 12–5 pm."
              },
              {
                "title": "Facilities",
                "text": "A snack bar, a water refill station and washrooms."
              },
              {
                "title": "Trails",
                "text": "Over 17 km of trails along the river, per one guide."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Call",
                "text": "Phone 204-729-2141 to confirm winter hours."
              },
              {
                "title": "Summer",
                "text": "Longer summer hours, weekdays until 8 pm."
              },
              {
                "title": "Paddling",
                "text": "Canoe and kayak rentals are mentioned by reviewers."
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
            "text": "On the Assiniboine River."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Riverbank Discovery Centre",
          "url": "https://riverbank.mb.ca/about-the-centre/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Daly House Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'A restored Victorian home of Brandon’s first mayor, showing life in the city’s early days.',
      tags: [{ label: 'Small fee', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        "lead": "A Victorian house built in 1882 for Thomas Mayne Daly, Brandon’s first mayor, with a garden that has a bandstand and gazebo.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The house",
                "text": "Open as a museum since 1978, showing life in early Brandon."
              },
              {
                "title": "Hours",
                "text": "Tuesday to Saturday, closed over the lunch hour; in winter the afternoon ends at 4 pm."
              },
              {
                "title": "Garden",
                "text": "Victorian-era flowers, paved walkways and century-old elms."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "Sources differ: about $6 for adults, $5 for seniors and youth, with a family rate."
              },
              {
                "title": "Parking",
                "text": "Free behind the house off Rosser Avenue."
              },
              {
                "title": "Call first",
                "text": "Phone 204-727-1722; one source says visits may be by appointment."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Small fee, about $6."
          },
          {
            "label": "Getting there",
            "text": "Downtown Brandon."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Daly House Museum",
          "url": "https://dalyhousemuseum.ca"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Royal Manitoba Winter Fair',
      icon: '🐎', iconSrc: '/icons/attractions/ph_horse-thin.svg',
      text: 'One of Canada’s big agricultural fairs, held at the Keystone Centre in late winter or spring with horse shows, livestock and family events. Check dates.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'Family', level: 'olive' }],
      details: {
        "lead": "An agricultural fair at the Keystone Centre, with livestock, horse shows and family events, run by the Provincial Exhibition of Manitoba.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2027 dates",
                "text": "Listed as March 5–7, 2027 on the Provincial Exhibition’s site."
              },
              {
                "title": "2026 edition",
                "text": "Ran March 30 to April 4, 2026."
              },
              {
                "title": "Venue",
                "text": "The Keystone Centre, Brandon."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "The 2027 dates are shorter than the 2026 run; confirm before booking."
              },
              {
                "title": "Book rooms",
                "text": "Events at the centre fill hotels quickly."
              },
              {
                "title": "Not on now",
                "text": "The fair is not on in November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; tickets via the Provincial Exhibition."
          },
          {
            "label": "Getting there",
            "text": "Keystone Centre, 18th Street."
          },
          {
            "label": "Time to allow",
            "text": "Half a day or more."
          }
        ],
        "link": {
          "label": "Provincial Exhibition of Manitoba",
          "url": "https://provincialexhibition.com/rmwf-royal-manitoba-winter-fair/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Art Gallery of Southwestern Manitoba',
      icon: '🖼️', iconSrc: '/icons/attractions/ph_image-thin.svg',
      text: 'A downtown public gallery showing regional and Canadian contemporary art.',
      tags: [{ label: 'Free or low cost', level: 'safe' }, { label: 'Indoor', level: 'purple' }],
      details: {
        "lead": "A downtown public gallery of regional and Canadian contemporary art, with free admission.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Admission is free, with wheelchair access."
              },
              {
                "title": "Hours",
                "text": "Most sources: Tuesday to Friday 10 am–5 pm, Thursday until 9 pm, Saturday from noon; closed Sunday, Monday and major holidays."
              },
              {
                "title": "Summer",
                "text": "One source says Saturday is closed in July and August."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Confirm",
                "text": "Hours differ between listings; check agsm.ca or call 204-727-1036."
              },
              {
                "title": "Holidays",
                "text": "Closed over Christmas and New Year, per one listing."
              },
              {
                "title": "Pair it",
                "text": "Combine with Daly House on Rosser Avenue."
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
            "text": "710 Rosser Avenue, Unit 2, in the Town Centre."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Art Gallery of Southwestern Manitoba",
          "url": "https://agsm.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Spruce Woods Provincial Park',
      icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg',
      text: 'East of Brandon, the Spirit Sands are open sand dunes in the middle of the prairie — a surprising desert-like hike. Bring water and avoid midday heat.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Park pass', level: 'caution' }],
      details: {
        "lead": "About 45 minutes east of Brandon, the Spirit Sands are open sand dunes in the prairie, with the Devil’s Punch Bowl and a river valley.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Spirit Sands",
                "text": "Dunes and trails, including the Devil’s Punch Bowl route, popular with hikers."
              },
              {
                "title": "Winter",
                "text": "Snowshoeing on the Devil’s Punch Bowl route; the Newfoundland Trail is groomed for cross-country skiing, per Wikipedia."
              },
              {
                "title": "Park fee",
                "text": "Vehicle permits were waived until March 31, 2026; check for the current rate (an older listing gives $9.50 daily)."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Heat",
                "text": "Bring water and avoid midday heat in summer."
              },
              {
                "title": "Check",
                "text": "Confirm the 2026–27 permit and trail conditions with the province."
              },
              {
                "title": "Car needed",
                "text": "A car is the practical way to get there."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "A vehicle permit may be required; confirm."
          },
          {
            "label": "Getting there",
            "text": "East of Brandon, near Carberry; a car is needed."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Spruce Woods Provincial Park",
          "url": "https://en.wikipedia.org/wiki/Spruce_Woods_Provincial_Park"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River Valley and Sand Hills',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Assiniboine Riverbank Trails', dist: 'In the city', text: 'Paved and natural trails through the river valley.' },
    { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', name: 'Spirit Sands', dist: '≈45 min east', text: 'Dunes and the Devil’s Punch Bowl in Spruce Woods Provincial Park.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Assiniboine Paddling', dist: 'Spruce Woods', text: 'A gentle river canoe route through the park.' },
    { icon: '🦬', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Riding Mountain', dist: '≈1 h 15 min north', text: 'National park with bison, lakes and the resort village of Wasagaming.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Trails', dist: 'Valley & parks', text: 'Cross-country skiing and skating when the snow arrives.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'River valley', text: 'Migrating songbirds and waterfowl in spring and fall.' },
  ],

  food: [
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Perogies & Kubasa', area: 'Local diners', areaLevel: 'gold', text: 'Prairie Ukrainian and Polish comfort food.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Prairie Beef', area: 'Steakhouses', areaLevel: 'danger', text: 'Local beef in a farm-country city.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Downtown Cafés', area: 'Rosser Avenue', areaLevel: 'olive', text: 'Independent coffee shops in heritage buildings.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'City-wide', areaLevel: 'purple', text: 'Local brewpubs and taprooms.' },
    { icon: '🥘', iconSrc: '/icons/attractions/ph_cooking-pot-thin.svg', title: 'World Flavours', area: 'City-wide', areaLevel: 'blue', text: 'A growing immigrant community brings Latin American, Asian and African restaurants.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farmers’ Market', area: 'Summer', areaLevel: 'safe', text: 'Local produce, baking and honey in season.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Fair season', text: 'The Winter Fair arrives in spring; the river can run high during the melt.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Long days', text: 'Hot and sunny — great for the dunes (early morning) and riverside trails.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest', text: 'Golden fields, crisp days and colour in the river valley.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Cold prairie winters with strong winds and blowing snow.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway (Highway 1) passes the north edge of the city. Winnipeg is east, Regina is west; Highway 10 runs north to Riding Mountain.',
      time: '≈2 h 15 min from Winnipeg',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Brandon Municipal Airport (YBR) has limited scheduled service. Most travellers fly into Winnipeg (YWG).',
      time: 'Limited service',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches link Brandon with Winnipeg and other prairie towns. Check current operators.',
      time: '≈2 h 30 min from Winnipeg',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s transcontinental train passes through the region, stopping at nearby Rivers rather than Brandon. Check VIA for current stops.',
      time: 'Check VIA Rail',
    },
  ],

  stay: [
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'North Hill / Trans-Canada',
      area: 'Highway hotels',
      text: 'Most hotels cluster along 18th Street and the Trans-Canada.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Brandon+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Brandon%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'A few hotels near Rosser Avenue and the Riverbank trails.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Brandon+Manitoba', level: 'blue' },
      ],
    },
    {
      icon: '🏕️', iconSrc: '/icons/attractions/ph_tent-thin.svg',
      title: 'Spruce Woods',
      area: 'Camping',
      text: 'Campgrounds and yurts in the provincial park.',
      links: [
        { label: 'Manitoba Parks', url: 'https://www.gov.mb.ca/sd/parks/', level: 'safe' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Brandon Transit',
      text: 'The city runs Brandon Transit, a local bus network linking downtown, the university, shopping areas and residential districts. Service is reduced in the evenings and on Sundays.',
      linkLabel: 'City of Brandon',
      linkUrl: 'https://www.brandon.ca/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are 2025 adult fares from a Government of Manitoba circular; we could not confirm 2026 prices — check with the City of Brandon before you travel.',
        fareBox: {
          label: 'Adult (2025)',
          lines: ['Cash: $2.00', '10 rides: $18.00', '30-day pass: $98.00', 'SMART card: $3.50'],
        },
        linkLabel: 'City of Brandon',
        linkUrl: 'https://www.brandon.ca/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'The easiest way around a spread-out city.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'Riverbank trails in summer.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is compact.' },
        ],
      },
    ],
    proTip: {
      label: 'Dune tip:',
      text: 'Hike the Spirit Sands early in the morning — the open sand gets very hot by midday in July and August.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel rooms in Brandon also carry the City’s 5% accommodation tax (since July 1, 2023), charged on the room rate only.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Brandon / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: GST + RST + 5% city accommodation tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + RST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + RST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🛎️', iconSrc: '/icons/attractions/ph_bell-simple-thin.svg', label: 'Hotel extras (pets, late checkout): no city accommodation tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Riverbank trails: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🌬️', iconSrc: '/icons/attractions/ph_wind-thin.svg', title: 'Prairie Wind', text: 'Strong winds are common; winter wind chill makes it feel much colder than the thermometer says.' },
    { icon: '🏜️', iconSrc: '/icons/attractions/ph_cactus-thin.svg', title: 'Dune Safety', text: 'Carry plenty of water on the Spirit Sands — there is little shade.' },
    { icon: '🦟', iconSrc: '/icons/attractions/ph_bug-thin.svg', title: 'Bugs & Ticks', text: 'Mosquitoes in summer and wood ticks in late spring along the trails.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'River Levels', text: 'The Assiniboine can flood in wet springs; riverside trails sometimes close.' },
    { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Fair Week', text: 'Hotels fill during the Winter Fair and big Keystone Centre events — book ahead.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Brandon is on Treaty 2 territory, the traditional lands of the Dakota, Anishinaabe and Cree peoples, and the homeland of the Red River Métis.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Brandon Regional Health Centre', '150 McTavish Ave E', 'Emergencies: call 911'] },
  ],
};

export default BRANDON;
