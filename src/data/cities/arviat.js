// Arviat — данные страницы /city/arviat (Арвиат, НУНАВУТ)
// Видео в бесплатных банках нет (Pexels — только безымянные зимние и
// патагонские пейзажи). Свежих качественных фото посёлка на Commons
// очень мало; в шапке — "Churches of Arviat, Nunavut, Canada", автор
// Ansgar Walk, 30.06.1995 — старое, но однозначно подписанное и с
// характерным видом посёлка; более свежих альтернатив высокого
// разрешения не нашли (только close-up одного здания 2025 года).
// Лицензия CC BY-SA 2.5 требует автора.
// Население — перепись 2021: расхождение между инфобоксом Wikipedia
// (2 657, по поселению/hamlet) и population centre (2 766); третий по
// величине населённый пункт Нунавута после Икалуита и Ранкин-Инлета.
// Название: Arviat означает "место горбатого/гренландского кита"
// (arviq — гренландский кит на инуктитуте); до 1 июня 1989 посёлок
// официально назывался Eskimo Point.
// Арвиат известен как одно из лучших мест в Канаде для наблюдения
// белых медведей осенью (с миграцией к морскому льду) и белух летом;
// в прошлом были случаи нападений медведей — предупреждение в тексте.
// Медцентр — Arviat Health Centre; конкретного адреса не нашли, только
// номера телефонов из разных источников — указываем с оговоркой.
// Налог — как и во всей территории, только федеральный GST 5%.
// Дорог к остальной Канаде нет — только самолёт и летний сealift.
// Из общих знаний: тёплый общинный дух, школа John Arnalukjuak, статус
// региона Kivalliq, время в пути.

export const ARVIAT = {
  slug: 'arviat',
  name: 'Arviat',
  province: 'Nunavut',
  provinceId: 'nu',
  region: 'NU',
  tag: 'Nunavut · Polar Bear Country',
  accentLevel: 'gold',
  heroIcon: '🐻‍❄️',
  heroImage: '/Cities/Arviat/hero.jpg',
  heroCredit: 'Photo: Ansgar Walk / Wikimedia Commons · CC BY-SA 2.5',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 61.1083, lon: -94.0556 },
  subtitle: 'Place of the Bowhead Whale',
  description:
    'On the western shore of Hudson Bay, Arviat — “place of the bowhead whale” in Inuktitut — is Nunavut’s third-largest community and one of its most traditional, with deep Inuit language and culture still at the centre of daily life. Each fall, polar bears migrate past the town on their way to the sea ice, making Arviat one of the best places in Canada to see them.',

  actions: [
    { label: 'Explore Arviat', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈2.7K (2021)' },
    { label: 'Known For', value: 'Polar Bear Viewing' },
    { label: 'Languages', value: 'Inuktitut, English' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'Road Access', value: 'None — fly in' },
    { label: 'To Rankin Inlet', value: '≈1 h by plane' },
  ],

  badges: ['Polar Bears', 'Hudson Bay', 'Inuit Culture'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈2.7K', label: 'People in Arviat — Nunavut’s third-largest community', level: 'gold' },
    { value: '1989', label: 'Year the community officially adopted the name Arviat, replacing Eskimo Point', level: 'purple' },
    { value: 'Fall', label: 'Season hundreds of polar bears migrate past town toward the sea ice', level: 'danger' },
    { value: '5%', label: 'Sales tax — Nunavut charges only the federal GST', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Town Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Hamlet office, school and the main community buildings',
      details: {
        "lead": "The hamlet office, school and main community buildings; the community of about 2,860 people (2021).",
        "see": [
          {
            "title": "Visitor centre",
            "text": "A Margaret Aniksak Visitor Centre appears in community listings (phone 857-2366); hours were not found."
          },
          {
            "title": "Culture",
            "text": "An annual music event at the Mark Kalluak Hall brings the community together."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air only."
          },
          {
            "label": "Time to allow",
            "text": "Plan a guided stay; tours should be booked before arrival."
          },
          {
            "label": "Good to know",
            "text": "Arviat means “place of the bowhead whale” in Inuktitut; the HBC post was called Eskimo Point from 1921."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Arviat",
          "url": "https://destinationnunavut.ca/destinations/kivalliq-region/arviat"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hudson Bay Shoreline', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Coast', tagLevel: 'blue', meta: 'The coast where polar bears and beluga are seen',
      details: {
        "lead": "The coast where polar bears gather in autumn and belugas pass in summer.",
        "see": [
          {
            "title": "Polar bears",
            "text": "Every fall hundreds of polar bears gather along the shore waiting for the ice to form; keep away from the coast without a guide."
          },
          {
            "title": "Beluga",
            "text": "Pods are often seen in the small bays near the community; guides can take visitors out from shore or by boat."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In and around the hamlet."
          },
          {
            "label": "Safety",
            "text": "Check the hamlet office and the Government of Nunavut for bear alerts; do not walk the shore alone in autumn."
          },
          {
            "label": "Good to know",
            "text": "No current alert information was found."
          }
        ],
        "link": {
          "label": "Destination Nunavut: beluga",
          "url": "https://destinationnunavut.ca/experiences/wildlife/beluga"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Maguse River Area', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Land', tagLevel: 'safe', meta: 'Tundra and river country used for traditional hunting and fishing',
      details: {
        "lead": "Tundra and river country used for traditional hunting and fishing.",
        "see": [
          {
            "title": "Land use",
            "text": "Used by the community for hunting and fishing; no visitor details were found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Outside the hamlet; travel only with a local guide."
          },
          {
            "label": "Good to know",
            "text": "Respect hunting and fishing areas."
          }
        ],
        "link": {
          "label": "Arviat community ecotourism handbook",
          "url": "https://www.arviat.ca/sites/default/files/public/files/Visitors/arviat_tourism_handbook_-_2013.pdf"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Access', tagLevel: 'olive', meta: 'The community’s only link to the outside world',
      details: {
        "lead": "The community’s only link to the outside world.",
        "see": [
          {
            "title": "Airport",
            "text": "Arviat has no road link; flight schedules were not found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air only; there is no road to the community."
          },
          {
            "label": "Good to know",
            "text": "Weather can delay flights; book tours with slack in your plans."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Arviat",
          "url": "https://destinationnunavut.ca/destinations/kivalliq-region/arviat"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Fall Polar Bear Migration',
      icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'Every autumn, polar bears pass close to Arviat as they head toward the forming sea ice on Hudson Bay — one of the best polar bear viewing opportunities in Canada, usually with a local guide.',
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Guide recommended', level: 'caution' }],
      details: {
        "lead": "Every autumn polar bears gather on the Hudson Bay coast near Arviat, waiting for the sea ice to form.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "October and November; bears stay concentrated while rivers still flow."
              },
              {
                "title": "Fly-in safaris",
                "text": "Operators run fly-in trips to cabins about 110 km south of Arviat; 2026 prices of about $17,500–21,500 for 8 days were listed."
              },
              {
                "title": "Bookings",
                "text": "Dates for fall 2026 and 2027 were still to be confirmed on some listings."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Guide",
                "text": "Go only with a local guide or a licensed operator."
              },
              {
                "title": "Now",
                "text": "The 2026 season is nearly over; book 2027 early."
              },
              {
                "title": "Alerts",
                "text": "No current polar bear alert information was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "High; fly-in trips cost thousands."
          },
          {
            "label": "Getting there",
            "text": "Most trips depart from Winnipeg via Churchill."
          },
          {
            "label": "Best time",
            "text": "October and November."
          }
        ],
        "link": {
          "label": "Arctic Kingdom: Polar Bear Migration",
          "url": "https://arctickingdom.com/expeditions/the-great-polar-bear-migration"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Beluga Watching',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'In summer, belugas can be seen from shore or by boat along the Hudson Bay coast near Arviat.',
      tags: [{ label: 'Summer', level: 'blue' }, { label: 'Wildlife', level: 'purple' }],
      details: {
        "lead": "In summer, belugas can be seen from shore or by boat along the Hudson Bay coast near Arviat.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Where",
                "text": "Pods are often seen in the many small bays near the community."
              },
              {
                "title": "Guides",
                "text": "Guides in Arviat and nearby Kivalliq communities take visitors out from land or by boat."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "A summer activity; no 2027 operator details were verified."
              },
              {
                "title": "Book ahead",
                "text": "Tours and cultural experiences should be booked before arrival."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid guided trips; prices not found."
          },
          {
            "label": "Getting there",
            "text": "From the hamlet."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Destination Nunavut: beluga",
          "url": "https://destinationnunavut.ca/experiences/wildlife/beluga"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Inuit Culture & Crafts',
      icon: '🧵', iconSrc: '/icons/attractions/ph_scissors-thin.svg',
      text: 'Arviat has talented carvers, seamstresses and musicians, and Inuktitut and English are the main languages.',
      tags: [{ label: 'Culture', level: 'gold' }, { label: 'Shopping', level: 'purple' }],
      details: {
        "lead": "Arviat has talented carvers, seamstresses and musicians; Inuktitut and English are the main languages.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Arts",
                "text": "Carving and sewing are practised; musicians are known across the territory."
              },
              {
                "title": "Music event",
                "text": "An annual event at the Mark Kalluak Hall."
              },
              {
                "title": "History",
                "text": "The nearby Arvia’juaq and Qikiqtaarjuk sites were designated a National Historic Site in 1995."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ask first",
                "text": "Ask artists before photographing them or their work."
              },
              {
                "title": "Shopping",
                "text": "No individual shop or hours were verified."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies."
          },
          {
            "label": "Getting there",
            "text": "In the hamlet."
          },
          {
            "label": "Time to allow",
            "text": "A day with a guide."
          }
        ],
        "link": {
          "label": "Arvia’juaq and Sentry Island",
          "url": "https://aina.ucalgary.ca/arviajuaq/Arviat.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Hudson Bay Shoreline',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Walk the rocky, tundra-backed coast for wide views over the bay — always with awareness of wildlife.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Caution', level: 'danger' }],
      details: {
        "lead": "The rocky, tundra-backed coast with wide views over the bay, always with awareness of wildlife.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Views",
                "text": "Open views over Hudson Bay."
              },
              {
                "title": "Wildlife",
                "text": "Polar bears gather here in autumn; belugas pass in summer."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Safety",
                "text": "In autumn do not walk the shore without a guide; check bear alerts with the hamlet office."
              },
              {
                "title": "Free",
                "text": "Free."
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
            "text": "From the hamlet."
          },
          {
            "label": "Time to allow",
            "text": "An hour, with caution."
          }
        ],
        "link": {
          "label": "Destination Nunavut: Arviat",
          "url": "https://destinationnunavut.ca/destinations/kivalliq-region/arviat"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Tundra and Hudson Bay Coast',
  outdoor: [
    { icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Polar Bear Tours', dist: 'Guided', text: 'Local operators run fall viewing trips along the migration route.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Beluga Watching', dist: 'Hudson Bay coast', text: 'Whales visible from shore in summer.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Maguse River', text: 'Arctic char fishing on nearby rivers.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Tundra Walking', dist: 'Around town', text: 'Open land right at the edge of the community.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of getting around and hunting in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around town', text: 'Northern lights on clear nights outside summer.' },
  ],

  food: [
    { icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Country Food', area: 'Local markets', areaLevel: 'blue', text: 'Seal, caribou and Arctic char, traditional Inuit foods.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Beluga & Whale', area: 'Seasonal', areaLevel: 'purple', text: 'Traditional harvest foods during whale season.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Grocery Stores', area: 'Town centre', areaLevel: 'danger', text: 'Prices run high — everything arrives by plane or summer sealift.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Community Meals', area: 'Local events', areaLevel: 'gold', text: 'Shared country-food meals mark community gatherings.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Arctic Char', area: 'Local catch', areaLevel: 'safe', text: 'A staple fish from nearby rivers and the bay.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Small Shops', area: 'Town centre', areaLevel: 'olive', text: 'A handful of stores for daily essentials.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'May — June', level: 'safe', rating: 2, note: 'Breakup', text: 'Ice retreats from the bay as days lengthen.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Beluga season', text: 'Mild weather and whale-watching along the coast.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Polar bear season', text: 'The main draw for visitors, as bears migrate past town.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — April', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and short days on the open coast.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Arviat Airport has scheduled flights connecting through Rankin Inlet and on to Winnipeg. There is no road or rail link to the rest of Canada.',
      time: '≈1 h to Rankin Inlet',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Sealift barges bring in bulk goods during the short ice-free season, roughly July to October.',
      time: 'Seasonal cargo, not for tourists',
    },
    {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'Getting Around',
      text: 'Taxis, personal vehicles, ATVs and snowmobiles handle local travel in this compact community.',
      time: 'Local only',
    },
    {
      icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      title: 'By Snowmobile',
      text: 'Widely used for winter travel, hunting and visiting the land around town.',
      time: 'Winter season',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Town Centre',
      area: 'Walkable',
      text: 'A small number of hotels and inns near the airport and town centre.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Arviat+Nunavut', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Arviat%2C%20Nunavut%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      title: 'Polar Bear Season',
      area: 'Fall',
      text: 'Guided tour operators often arrange lodging as part of fall bear-viewing packages.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Arviat+Nunavut', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg',
      title: 'No Public Transit',
      text: 'Arviat has no bus system — taxis, personal vehicles, ATVs and snowmobiles handle travel in this compact coastal community.',
      linkLabel: 'Hamlet of Arviat',
      linkUrl: 'https://www.arviat.ca/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The town centre is compact and walkable.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'The main way to get around locally.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel and hunting.' },
          { icon: '🏍️', iconSrc: '/icons/attractions/ph_motorcycle-thin.svg', title: 'ATV', text: 'Widely used in summer around the community.' },
        ],
      },
    ],
    proTip: {
      label: 'Bear safety tip:',
      text: 'Never approach a polar bear or walk the shoreline alone during fall migration season — go with a knowledgeable local guide, as the community itself takes precautions during this period.',
    },
  },

  taxInfo: {
    totalTaxPercent: '5%',
    headline: 'Nunavut: 5% GST only',
    headlineLevel: 'safe',
    description:
      'Like the rest of Nunavut, Arviat has no territorial sales tax — only the federal 5% GST applies. Prices still run high, since nearly everything arrives by air or summer sealift.',
    comparison: [
      { label: 'Arviat / Nunavut', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe', highlight: true },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'blue' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 5% GST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 5% GST' },
      { icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', label: 'Guided tours: 5% GST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 5% GST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', label: 'Shoreline viewing: free' },
      { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', label: 'Beluga watching from shore: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Hotel housekeeping: $2–5/night. Wildlife guides: 10–15%, often included in tour packages.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Arviat to the rest of Canada — plan your visit entirely around flight schedules.' },
    { icon: '🐻‍❄️', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Polar Bear Safety', text: 'Bears pass close to town in fall, and the community takes real precautions — never go to the shoreline alone during this season, and follow local guidance.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here than in southern Canada, since everything arrives by plane or summer barge.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Harsh Winters', text: 'Winters are long and cold, with strong winds off Hudson Bay — dress in serious layers.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer — the same as Winnipeg.' },
    { icon: '📶', iconSrc: '/icons/attractions/ph_cell-signal-full-thin.svg', title: 'Limited Services', text: 'This is a small, remote community — book tours and accommodation well ahead, especially for fall bear season.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Inuit Homeland', text: 'Arviat is in the heart of Inuit Nunangat, with one of Nunavut’s strongest traditions of spoken Inuktitut; respect local customs and ask before photographing people.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Arviat Health Centre', 'For emergencies, contact the health centre directly', 'Check current contact details with the Government of Nunavut'] },
  ],
};

export default ARVIAT;
