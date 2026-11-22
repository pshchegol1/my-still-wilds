// Montague, Prince Edward Island — данные страницы /city/montague
//
// ВАЖНЫЙ СТАТУСНЫЙ НЮАНС: с 28 сентября 2018 года Montague юридически — не отдельный
// муниципалитет, а община (community) в составе укрупнённого города Three Rivers,
// образованного слиянием Montague, Georgetown, Brudenell, Cardigan, Lower Montague,
// Lorne Valley и Valleyfield. Сайт перечисляет его как "Montague" (так его называют
// и туристы, и местные жители в быту), поэтому карточка описывает именно населённый
// пункт Montague, а не весь Three Rivers — с пояснением этого нюанса в тексте.
// Также отфильтровала поисковую путаницу с Montague Island (Barunguba) в Новом Южном
// Уэльсе, Австралия — совершенно другое место со своими турами и тюленями.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Население: цифры по Montague как населённому пункту расходятся между источниками:
//   citypopulation.de (со ссылкой на StatCan) даёт 1,896 (2021, перепись 2016 — 1,834,
//   2011 — 1,741); другие агрегаторы называют 1,961 и 2,027 — вероятно, из-за разных
//   границ до/после амальгамации 2018 года. В карточке используется осторожная оценка
//   "≈1,900" с пояснением в quickFacts. Население объединённого Three Rivers — 7,880
//   (перепись 2021) — в карточку не включено, т.к. относится к гораздо большей
//   территории, а не к самому Монтегю.
// - Montague исторически называют "Garden of the Gulf" — старейший музей провинции
//   (Garden of the Gulf Museum) основан в 1958, в этом же городе (lonelyplanet,
//   tourismpei, archives.pe.ca).
// - Набережная и променад — часть Confederation Trail, с парковкой и пандусом для
//   инвалидных колясок (источники о Pointe East / tourismpei).
// - Марина Монтегю — на 2017 год вмещала около 60 судов на плавучих причалах (данные
//   могли измениться, указано как оценка). "Three Rivers Boat Tours" базируется на
//   марине Монтегю, предлагает морскую рыбалку, речные экскурсии и комбо с дегустацией
//   на пивоварне (tourismpei.com) — факт про наблюдение за тюленями НЕ подтверждён
//   напрямую для Монтегю и в карточку не включён (в отличие от похожих туров в других
//   регионах).
// - Амальгамация в Three Rivers: 28 сентября 2018 (thecanadianencyclopedia,
//   историческое сравнение источников совпадает).
// - Медицина: Kings County Memorial Hospital, 409 MacIntyre Avenue, Montague, PE
//   C0A 1R0, тел. (902) 838-0777 — 30-коечная community hospital (официальный сайт
//   правительства PEI). ВАЖНО: в отличие от большинства других городов на сайте,
//   отделение неотложной помощи здесь НЕ описано как стабильно круглосуточное — по
//   многочисленным репортажам CBC за 2017–2024 годы ER периодически закрывается
//   (нехватка медсестёр/врачей, по выходным, по вечерам после 20:00); при закрытии
//   Health PEI направляет пациентов в Queen Elizabeth Hospital в Шарлоттауне. Эта
//   особенность отражена в practical-блоке честно, без утверждения "24-часовая ER".
// - Фото в шапке: Wikimedia Commons, "Montague, Prince Edward Island, Canada.jpg",
//   автор Hayden Soloviev, CC BY 4.0, снято 01.07.2025. GPS в EXIF: 46.166256,
//   -62.645056 — соответствует марине и историческому центру Монтегю на реке
//   Montague River. Сравнивала с ещё одним недавним снимком (Quintin Soloviev,
//   июль 2026) — выбрала этот за более выразительную композицию (марина с лодками).
// - Видео в бесплатных банках не найдено (выдача Pexels нерелевантна).
// - Налог: PEI применяет HST 15% (общеизвестный факт, провинциальная ставка, как и у
//   остальных городов PEI на сайте).

export const MONTAGUE = {
  slug: 'montague',
  name: 'Montague',
  province: 'Prince Edward Island',
  provinceId: 'pe',
  region: 'Kings County',
  tag: "Garden of the Gulf",
  accentLevel: 'blue',
  heroIcon: '⛵',
  heroImage: '/Cities/Montague/hero.jpg',
  heroCredit: 'Photo: Hayden Soloviev / Wikimedia Commons · CC BY 4.0',

  coords: { lat: 46.1659, lon: -62.6503 },

  subtitle: 'Marina Town on the Montague River',
  description:
    "Montague is a historic riverside community on PEI's eastern shore, long nicknamed the \"Garden of the Gulf.\" Its working marina, waterfront boardwalk along the Confederation Trail, and the province's oldest museum make it a natural hub for exploring Kings County. Since 2018, Montague has been part of the amalgamated Town of Three Rivers, though locals and visitors still know it simply as Montague.",

  actions: [
    { label: 'Explore the Waterfront', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1,900 (2021)' },
    { label: 'Municipal Status', value: 'Part of Three Rivers (since 2018)' },
    { label: 'Nickname', value: 'Garden of the Gulf' },
    { label: 'Setting', value: 'On the Montague River' },
    { label: 'Region', value: 'Kings County' },
    { label: 'Known For', value: 'Marina & Oldest Museum' },
  ],

  badges: ['Garden of the Gulf', 'Kings County', 'Marina Town'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 3 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 1 },
  ],

  highlights: [
    { value: '1958', label: 'Year the Garden of the Gulf Museum opened — the province\'s oldest museum', level: 'gold' },
    { value: '2018', label: 'Year Montague joined the amalgamated Town of Three Rivers', level: 'blue' },
    { value: '≈1,900', label: 'Estimated population of the Montague community (2021)', level: 'safe' },
    { value: '≈60', label: 'Boats the Montague Marina could berth on floating docks (2017 figure)', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Waterfront & Marina', icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', tag: 'Harbourfront', tagLevel: 'blue', meta: 'Boardwalk, marina and boat tour departures on the Montague River',
      details: {
        "lead": "The riverfront on the Montague River, with a boardwalk and a marina on the Confederation Trail.",
        "see": [
          {
            "title": "Boardwalk",
            "text": "Follows the banks of the Montague River and forms part of the 400+ km Confederation Trail, with parking and a ramp for wheelchair access."
          },
          {
            "title": "Marina",
            "text": "At 1 Station St; listed operators include Three Rivers Boat Tours, kayak rentals and e-bike rentals with direct access to the Confederation Trail."
          },
          {
            "title": "Redevelopment",
            "text": "A large-scale redevelopment of the waterfront has taken place in recent years; the old train station stands by Riverfront Park."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Montague River in the town centre."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Boat and rental operators are seasonal; no 2026 season dates were found."
          }
        ],
        "link": {
          "label": "Three Rivers: marinas",
          "url": "https://www.threeriverspei.com/marinas/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Downtown', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Historic Core', tagLevel: 'gold', meta: 'Home to the Garden of the Gulf Museum and heritage buildings',
      details: {
        "lead": "The main street area and the town’s heritage buildings, including the Garden of the Gulf Museum at 564 Main Street.",
        "see": [
          {
            "title": "Museum",
            "text": "The Garden of the Gulf Museum is in a former post office and customs house on Main Street."
          },
          {
            "title": "Town status",
            "text": "Montague is in Kings County, 44 km east of Charlottetown. It was incorporated in 1917 (before that it was called Montague Bridge) and since 2018 is part of the town of Three Rivers; the former town had 2,027 people in 2021."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On Main Street."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "No individual shops or cafés were verified."
          }
        ],
        "link": {
          "label": "Montague (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Montague,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Montague Bridge Area', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'River Crossing', tagLevel: 'purple', meta: 'The bridge linking the two sides of town across the river',
      details: {
        "lead": "The bridge linking the two sides of town across the Montague River.",
        "see": [
          {
            "title": "Name",
            "text": "Montague was known as Montague Bridge before it was incorporated in 1917."
          },
          {
            "title": "River",
            "text": "Samuel Holland named the river around 1774–75."
          },
          {
            "title": "Early history",
            "text": "Jean-Pierre Roma built a settlement called Three Rivers on Brudenell Point in 1732; the British burned it in 1745."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the town centre."
          },
          {
            "label": "Good to know",
            "text": "Seen as part of a waterfront walk."
          }
        ],
        "link": {
          "label": "Montague (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Montague,_Prince_Edward_Island"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Garden of the Gulf Museum',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: "Described as PEI's oldest community museum, established in 1958, in a former post office and customs house on Main Street.",
      tags: [{ label: 'Museum', level: 'gold' }, { label: 'Historic', level: 'blue' }],
      details: {
        "lead": "Described as PEI’s oldest community museum, established in 1958 in a former post office and customs house at 564 Main Street.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Building",
                "text": "The former post office and customs house sat vacant until the Town bought it in 1957 for a local museum."
              },
              {
                "title": "Collections",
                "text": "Local and Kings County history; no specific displays were verified."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources conflict: one lists Tuesday to Saturday 9–5, an older CBC report says closed Saturdays and Monday mornings, and Community Museums of PEI says seasonal. Call 902-838-2467 before going, especially in late November."
              },
              {
                "title": "Admission",
                "text": "An entrance fee applies, but no current price was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Admission fee; price not confirmed."
          },
          {
            "label": "Getting there",
            "text": "564 Main Street, Montague."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism PEI: Garden of the Gulf Museum",
          "url": "https://www.tourismpei.com/attractions/garden-of-the-gulf-museum"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Montague Waterfront & Boardwalk',
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      text: 'A boardwalk along the river, forming part of the Confederation Trail, with parking and wheelchair access.',
      tags: [{ label: 'Waterfront', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A boardwalk along the Montague River that forms part of the Confederation Trail.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trail",
                "text": "Part of the 400+ km Confederation Trail."
              },
              {
                "title": "Access",
                "text": "Plenty of parking and a ramp for wheelchair access."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "A year-round walk, but marina services are seasonal."
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
            "text": "On the riverfront in town."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          }
        ],
        "link": {
          "label": "Three Rivers: marinas",
          "url": "https://www.threeriverspei.com/marinas/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Montague Marina',
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: 'A marina on the Montague River at 1 Station St, with boat tours, kayak rentals and e-bike rentals listed among its operators.',
      tags: [{ label: 'Marina', level: 'purple' }],
      details: {
        "lead": "A marina on the Montague River at 1 Station St.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Operators",
                "text": "Three Rivers Boat Tours, Montague Marina E-bike Rentals (direct access to the Confederation Trail) and Montague Marina Kayak Rentals are listed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "No 2026 operating dates were found; the services are seasonal, so ask before going."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Varies by operator."
          },
          {
            "label": "Getting there",
            "text": "1 Station St, Montague."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Three Rivers: marinas",
          "url": "https://www.threeriverspei.com/marinas/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Three Rivers Boat Tours',
      icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      text: 'Departing from the Montague Marina; check the operator for current tours, dates and prices.',
      tags: [{ label: 'Tours', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "A boat-tour operator departing from the Montague Marina.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Departure",
                "text": "Montague Marina, 1 Station St."
              },
              {
                "title": "Contact",
                "text": "902-969-9126."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "The Tourism PEI listing gives no operating dates; tours are seasonal, so call or check the operator."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; check the operator."
          },
          {
            "label": "Getting there",
            "text": "Montague Marina."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Tourism PEI: Three Rivers Boat Tours",
          "url": "https://www.tourismpei.com/attractions/three-rivers-boat-tours"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'River and Waterfront',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Confederation Trail Boardwalk', dist: 'Waterfront', text: 'A scenic section of the trail running along the Montague River.' },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Montague Marina', dist: 'Downtown waterfront', text: 'Boat docking and the departure point for local river tours.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing & River Tours', dist: 'Montague Marina', text: 'Guided deep-sea and river excursions from the marina.' },
    { icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', name: 'Montague Bridge Views', dist: 'Town centre', text: 'River views from the bridge connecting both sides of town.' },
  ],

  food: [
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Downtown Restaurants', area: 'Town centre', areaLevel: 'blue', text: 'Local dining options along the main commercial street.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Brewery Tour Combos', area: 'Montague Marina', areaLevel: 'gold', text: 'Boat tours paired with local brewery tastings.' },
    { icon: '🦪', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'PEI Seafood', area: 'Citywide', areaLevel: 'purple', text: 'Fresh local seafood reflecting the fishing and tourism economy.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Downtown', areaLevel: 'safe', text: 'Coffee shops along the historic main street.' },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Warm days for the marina, boat tours and waterfront boardwalk.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 3, note: 'Shoulder season', text: 'Mild weather and fewer crowds along the river.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 1, note: 'Quiet season', text: 'Cold and quiet, with most seasonal attractions closed.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'safe', rating: 2, note: 'Low season', text: 'A quiet time as the town and marina wake back up.' },
  ],

  gettingThere: [
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'From Charlottetown', text: 'Montague is roughly 44 km east of Charlottetown by road, within the Kings County area of eastern PEI.', time: '~45 min drive' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'By Air', text: 'Charlottetown Airport (YYG) is the nearest airport, about 45 minutes away by car.', time: 'Year-round' },
    { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Via Confederation Bridge', text: 'The bridge from New Brunswick connects to the rest of PEI; Montague sits well east of Charlottetown.', time: 'Year-round' },
  ],

  stay: [
    {
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      title: 'Waterfront / Marina Area',
      area: "Near the marina",
      text: 'Accommodations close to the boardwalk, marina and downtown attractions.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Montague+Prince+Edward+Island', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Montague%2C%20Prince%20Edward%20Island%2C%20Canada', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Small and Car-Friendly',
      text: "Montague's downtown and waterfront are easily walkable, while a car is useful for exploring the wider Three Rivers area and eastern PEI.",
      linkLabel: 'Tourism PEI — Montague',
      linkUrl: 'https://www.tourismpei.com/',
    },
    modes: [
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the waterfront boardwalk are walkable.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'By Car', text: 'Recommended for reaching other parts of eastern PEI and Three Rivers.' },
        ],
      },
    ],
    proTip: {
      label: 'Trip tip:',
      text: 'Montague makes a good base for exploring eastern PEI, including the rest of the Three Rivers area and the Points East Coastal Drive.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Prince Edward Island: 15% HST',
    headlineLevel: 'danger',
    description:
      'Prince Edward Island applies the Harmonized Sales Tax (HST) at 15%, combining federal and provincial sales tax into a single rate charged on most goods and services.',
    comparison: [
      { label: 'Montague / PEI', percent: '15%', note: 'HST', example: '$100 → pay $115', level: 'danger', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST', example: '$100 → pay $114', level: 'gold' },
      { label: 'Ontario', percent: '13%', note: 'HST', example: '$100 → pay $113', level: 'blue' },
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🚤', iconSrc: '/icons/attractions/ph_boat-thin.svg', label: 'Boat tours: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', label: 'Boardwalk access: free' },
    ],
    tippingNote:
      'Restaurants: 15–18% of the pre-tax bill is standard. Boat tour guides: 10–15%.',
  },

  practical: [
    { icon: '💵', iconSrc: '/icons/attractions/ph_money-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD).' },
    { icon: '🚨', iconSrc: '/icons/attractions/ph_siren-thin.svg', title: 'Emergency Number', text: '911.' },
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Primary Language', text: 'English.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Nearest Airport', text: 'Charlottetown Airport (YYG), about 45 minutes away.' },
    { icon: '🌡️', iconSrc: '/icons/attractions/ph_thermometer-thin.svg', title: 'Climate', text: 'Humid continental — warm summers, cold snowy winters.' },
    { icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', title: 'Municipal Status', text: 'Part of the amalgamated Town of Three Rivers since 2018, though still widely known as Montague.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time (AST/ADT).' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Kings County Memorial Hospital, 409 MacIntyre Avenue', 'ER hours vary — check Health PEI before relying on it; call 911 or 811'] },
  ],
};

export default MONTAGUE;
