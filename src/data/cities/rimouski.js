// Rimouski — данные страницы /city/rimouski (Римуски, КВЕБЕК)
// Видео Римуски в бесплатных банках нет: Pexels отдаёт посторонние города,
// ролики с маяками — без локации (не Pointe-au-Père).
// В шапке фото с Wikimedia Commons — центр города сверху вдоль берега
// реки Святого Лаврентия в отлив, автор Quintin Soloviev, август 2026,
// CC BY 4.0 — лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (48 935).
// Тарифы — со страницы rimouskibus.com/pages/infos-pratiques/tarifs
// (тарифы пересматривают каждое 1 марта — на странице есть «уточняйте»).
// Паром Rimouski–Forestville не ходит с 2022 года (мемуар г. Форествиль
// 2026–2027). Больница — адрес из репертуара Santé Québec.
// Pointe-au-Père, Empress of Ireland, Onondaga, пожар 1950 года, Bic,
// Reford Gardens, поезд Ocean — из общих знаний.

export const RIMOUSKI = {
  slug: 'rimouski',
  name: 'Rimouski',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Bas-Saint-Laurent',
  accentLevel: 'gold',
  heroIcon: '🌅',
  heroImage: '/Cities/Rimouski/hero.jpg',
  heroCredit: 'Photo: Quintin Soloviev / Wikimedia Commons · CC BY 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4489, lon: -68.5236 },
  subtitle: 'Sunsets on the Sea-River',
  description:
    'On the south shore where the St. Lawrence is already so wide it looks like the sea, Rimouski is a small university city devoted to ocean science. Walk the seaside promenade at sunset, climb into a real submarine at Pointe-au-Père, and spot seals in Bic National Park just down the coast — the start of the road to the Gaspé.',

  actions: [
    { label: 'Explore Rimouski', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈49K (2021)' },
    { label: 'Region', value: 'Bas-Saint-Laurent' },
    { label: 'Language', value: 'French' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'To Québec City', value: '≈3 h by car' },
    { label: 'To Bic National Park', value: '≈20 min by car' },
  ],

  badges: ['Sea-River Sunsets', 'Ocean Science', 'Gateway to Gaspé'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '48,935', label: 'People in the 2021 census — the main city of the Bas-Saint-Laurent', level: 'blue' },
    { value: '1914', label: 'The liner Empress of Ireland sank off Pointe-au-Père; its story is told at the maritime site', level: 'danger' },
    { value: '1950', label: 'A great fire destroyed a large part of the city, which was rebuilt in the following years', level: 'purple' },
    { value: '$4', label: 'A single Citébus or Taxibus ride in exact cash', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Centre-ville', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Downtown', tagLevel: 'gold', meta: 'Cathedral · Rue Saint-Germain · Shops, cafés and bars',
      details: {
        "lead": "The cathedral, Rue Saint-Germain, and shops, cafés and bars.",
        "see": [
          {
            "title": "Rue Saint-Germain",
            "text": "The main street, with shops, cafés and bars."
          },
          {
            "title": "Cathedral",
            "text": "The cathedral in the centre of town."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city, near the shore."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "The Promenade de la mer is close by."
          }
        ],
        "link": {
          "label": "Tourisme Bas-Saint-Laurent",
          "url": "https://www.bassaintlaurent.ca/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Promenade de la mer', icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', tag: 'Waterfront', tagLevel: 'blue', meta: 'Seaside walking and cycling path · Sunset benches · Marina',
      details: {
        "lead": "A seaside walking and cycling path with sunset benches and a marina.",
        "see": [
          {
            "title": "The path",
            "text": "A waterfront path along the shore downtown."
          },
          {
            "title": "Sunset",
            "text": "Join locals on the benches when the sun sinks into the estuary."
          },
          {
            "title": "Marina",
            "text": "Boats to Île Saint-Barnabé leave from the Rimouski marina every half hour from 9 am in summer."
          }
        ],
        "practical": [
          {
            "label": "Île Saint-Barnabé boat",
            "text": "June 12 to September 27 in 2026; adults $28.50 and children (10–17) $17.82 from July 13 to August 23, lower outside that, plus tax."
          },
          {
            "label": "Getting there",
            "text": "Downtown, on the shore."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Excursions to Saint-Barnabé Island",
          "url": "https://www.quebecmaritime.ca/en/company/excursions-to-saint-barnabe-island/activities"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Pointe-au-Père', icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', tag: 'East', tagLevel: 'danger', meta: 'Lighthouse · Submarine Onondaga · Empress of Ireland museum',
      details: {
        "lead": "The lighthouse, the submarine Onondaga and the Empress of Ireland museum.",
        "see": [
          {
            "title": "2026 season",
            "text": "June 6 to August 16: daily 9 am–6 pm. August 17 to October 12: daily 9 am–5 pm. A museum-only period runs February 19 to June 5, Thursday to Sunday, 9 am–4:30 pm."
          },
          {
            "title": "Admission",
            "text": "An older listing gave $25 for adults and $14.50 for ages 8–17; confirm the current price."
          },
          {
            "title": "Winter",
            "text": "Sources disagree on the winter opening; the site is likely closed or closing for the season."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the shore, east of the city centre."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Check Parks Canada and the site for 2027 dates."
          }
        ],
        "link": {
          "label": "Parks Canada: Pointe-au-Père hours",
          "url": "https://parcs.canada.ca/lhn-nhs/qc/pointeaupere/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    { name: 'University District', icon: '🎓', iconSrc: '/icons/attractions/ph_graduation-cap-thin.svg', tag: 'Campus', tagLevel: 'purple', meta: 'UQAR and its ocean-science institute · Student life',
      details: {
        "lead": "UQAR and its ocean-science institute, with student life.",
        "see": [
          {
            "title": "UQAR",
            "text": "The Université du Québec à Rimouski, with an ocean-science institute."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the city; by bus or car."
          },
          {
            "label": "Time to allow",
            "text": "A short visit."
          },
          {
            "label": "Good to know",
            "text": "Student life is busiest in term time."
          }
        ],
        "link": {
          "label": "Tourisme Bas-Saint-Laurent",
          "url": "https://www.bassaintlaurent.ca/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Le Bic', icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg', tag: 'West', tagLevel: 'safe', meta: 'Village and national park on rocky coves · Seals and sunsets',
      details: {
        "lead": "A village and national park on rocky coves, with seals and sunsets.",
        "see": [
          {
            "title": "Bic National Park",
            "text": "Open year-round. The adult day-use fee was listed at $10.30. The Rivière-du-Sud-Ouest visitor centre ran 9 am–8 pm from June 5 to September 6, 2026."
          },
          {
            "title": "Ferme-Rioux",
            "text": "The Ferme-Rioux centre is closed from October 13, 2026 to May 28, 2027."
          },
          {
            "title": "Seals",
            "text": "One guide says harbour seals are present year-round, peaking June to August."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 20 minutes west of downtown."
          },
          {
            "label": "Winter",
            "text": "No 2026–27 winter schedule was found; check Sépaq."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Sépaq: Parc national du Bic",
          "url": "https://www.sepaq.com/pq/bic/information.dot?language_id=1"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sainte-Blandine & Mont-Lebel', icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', tag: 'Inland', tagLevel: 'olive', meta: 'Rural districts on the plateau south of the city',
      details: {
        "lead": "Rural districts on the plateau south of the city.",
        "see": [
          {
            "title": "Canyon des Portes de l’Enfer",
            "text": "The 2026 season ran May 16 to October 30, so it is closed now. Listings give 9 am–5 pm and about $20 per person."
          },
          {
            "title": "Rural plateau",
            "text": "Farmland and forest south of the city."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of Rimouski, about half an hour inland; a car is needed."
          },
          {
            "label": "Contact",
            "text": "Phone 418-735-6063 to confirm."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Canyon des Portes de l’Enfer (Tripadvisor)",
          "url": "https://www.tripadvisor.com/Attraction_Review-g11828497-d2251445-Reviews-or10-Canyon_des_Portes_de_l_Enfer-Saint_Narcisse_de_Rimouski_Bas_Saint_Laurent_.html"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Pointe-au-Père Maritime Historic Site',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'Climb the tall lighthouse, step aboard the decommissioned Canadian submarine Onondaga, and learn the story of the Empress of Ireland, which sank nearby in 1914 with heavy loss of life.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "Climb the tall lighthouse, step aboard the decommissioned submarine Onondaga, and learn the story of the Empress of Ireland, which sank nearby in 1914.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 hours",
                "text": "June 6 to August 16: daily 9 am–6 pm. August 17 to October 12: daily 9 am–5 pm."
              },
              {
                "title": "Museum only",
                "text": "February 19 to June 5, Thursday to Sunday, 9 am–4:30 pm."
              },
              {
                "title": "Admission",
                "text": "An older listing: $25 for adults, $14.50 for ages 8–17, under 7 free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The site is likely closed or closing for the winter."
              },
              {
                "title": "Confirm",
                "text": "Check Parks Canada for 2027 dates and current prices."
              },
              {
                "title": "Time",
                "text": "Allow two to three hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $25 for adults on an older listing."
          },
          {
            "label": "Getting there",
            "text": "On the shore east of Rimouski."
          },
          {
            "label": "Best time",
            "text": "June to mid-October."
          }
        ],
        "link": {
          "label": "Parks Canada: Pointe-au-Père",
          "url": "https://parcs.canada.ca/lhn-nhs/qc/pointeaupere/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bic National Park',
      icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: 'A Sépaq park of capes, coves and islands about 20 minutes west of downtown. Harbour seals haul out on the rocks at low tide, and the sunsets are among the best on the river.',
      tags: [{ label: 'Park fees apply', level: 'caution' }, { label: 'Wildlife', level: 'safe' }],
      details: {
        "lead": "A Sépaq park of capes, coves and islands about 20 minutes west of downtown, with seals on the rocks.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Open year-round",
                "text": "Operating hours vary by season."
              },
              {
                "title": "Day-use fee",
                "text": "$10.30 per adult, free for under 18, in one listing; sources range from about $9 to $10.30."
              },
              {
                "title": "Visitor centres",
                "text": "Rivière-du-Sud-Ouest ran 9 am–8 pm from June 5 to September 6, 2026; Ferme-Rioux is closed October 13, 2026 to May 28, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Buy online",
                "text": "Buying the daily pass online is recommended."
              },
              {
                "title": "Seals",
                "text": "Harbour seals are said to be present year-round, peaking June to August."
              },
              {
                "title": "Winter",
                "text": "No 2026–27 winter schedule was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $10 per adult per day."
          },
          {
            "label": "Getting there",
            "text": "About 20 minutes west of Rimouski."
          },
          {
            "label": "Best time",
            "text": "Summer for seals; sunset on the river."
          }
        ],
        "link": {
          "label": "Sépaq: Parc national du Bic",
          "url": "https://www.sepaq.com/pq/bic/information.dot?language_id=1"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Promenade de la mer',
      icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg',
      text: 'A waterfront path along the shore downtown. Join locals on the benches at sunset, when the sun sinks into the wide estuary.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Sunsets', level: 'gold' }],
      details: {
        "lead": "A waterfront path along the shore downtown, where locals watch the sun sink into the estuary.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The path",
                "text": "A walking and cycling path along the shore."
              },
              {
                "title": "Sunset benches",
                "text": "Join locals on the benches at sunset."
              },
              {
                "title": "Marina",
                "text": "The marina is the departure point for the Île Saint-Barnabé boats."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free",
                "text": "Free to walk."
              },
              {
                "title": "Best time",
                "text": "Evening, for the sunset."
              },
              {
                "title": "Pair it",
                "text": "Combine with a boat trip to Île Saint-Barnabé in summer."
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
            "text": "Downtown Rimouski."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Tourisme Bas-Saint-Laurent",
          "url": "https://www.bassaintlaurent.ca/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Île Saint-Barnabé',
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      text: 'A wooded island just offshore, reached by a short boat ride in summer, with walking trails and the story of a hermit who once lived there.',
      tags: [{ label: 'Summer only', level: 'caution' }, { label: 'Boat ride', level: 'blue' }],
      details: {
        "lead": "A wooded island just offshore, reached by a short boat ride in summer, with walking trails and the story of a hermit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "June 12 to September 27, with departures every half hour from 9 am from the Rimouski marina."
              },
              {
                "title": "Fares",
                "text": "Adults $28.50 and children (10–17) $17.82 from July 13 to August 23; lower outside that window; taxes extra."
              },
              {
                "title": "The island",
                "text": "Walking trails and the hermit’s story."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Closed now",
                "text": "The season has ended; the boats return in June."
              },
              {
                "title": "Separate operator",
                "text": "The boat is run by Quebec Maritime, not by the park."
              },
              {
                "title": "Confirm",
                "text": "Check the 2027 season and fares."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $28.50 for adults in high season."
          },
          {
            "label": "Getting there",
            "text": "By boat from the Rimouski marina."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Excursions to Saint-Barnabé Island",
          "url": "https://www.quebecmaritime.ca/en/company/excursions-to-saint-barnabe-island/activities"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Canyon des Portes de l’Enfer',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: 'A deep river canyon south of the city with trails and a high suspension footbridge. About half an hour inland.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Seasonal', level: 'caution' }],
      details: {
        "lead": "A deep river canyon south of the city with trails and a high suspension footbridge, about half an hour inland.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "May 16 to October 30; it is closed now."
              },
              {
                "title": "Hours and price",
                "text": "Listings give 9 am to 5 pm and about $20 per person; confirm with the site."
              },
              {
                "title": "The canyon",
                "text": "Walls up to about 90 m, a waterfall of about 20 m at the head, and about 300 steps down to the floor."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Footbridge",
                "text": "Reviewers describe the suspension bridge as sturdy; sources disagree on its height."
              },
              {
                "title": "Contact",
                "text": "Phone 418-735-6063."
              },
              {
                "title": "Next season",
                "text": "Check the 2027 opening in spring."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $20 per person."
          },
          {
            "label": "Getting there",
            "text": "South of Rimouski; a car is needed."
          },
          {
            "label": "Best time",
            "text": "Late spring to early autumn."
          }
        ],
        "link": {
          "label": "Canyon des Portes de l’Enfer (Tripadvisor)",
          "url": "https://www.tripadvisor.com/Attraction_Review-g11828497-d2251445-Reviews-or10-Canyon_des_Portes_de_l_Enfer-Saint_Narcisse_de_Rimouski_Bas_Saint_Laurent_.html"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Reford Gardens (Jardins de Métis)',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'Famous historic gardens by the river in Grand-Métis, east of Rimouski, plus an international garden festival in summer.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Summer', level: 'safe' }],
      details: {
        "lead": "Famous historic gardens by the river in Grand-Métis, east of Rimouski, plus an international garden festival in summer.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The gardens",
                "text": "Historic gardens by the river."
              },
              {
                "title": "Garden festival",
                "text": "An international garden festival runs in summer."
              },
              {
                "title": "Location",
                "text": "In Grand-Métis, east of Rimouski."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Season",
                "text": "Gardens are seasonal; no 2026 or 2027 dates were found."
              },
              {
                "title": "Check",
                "text": "Confirm hours, prices and festival dates with the gardens."
              },
              {
                "title": "Closed now",
                "text": "The gardens are not open in November."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the price."
          },
          {
            "label": "Getting there",
            "text": "East of Rimouski along the river; a car is easiest."
          },
          {
            "label": "Best time",
            "text": "Summer."
          }
        ],
        "link": {
          "label": "Tourisme Bas-Saint-Laurent",
          "url": "https://www.bassaintlaurent.ca/en"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Where the River Becomes the Sea',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Hiking in Bic', dist: '≈20 min west', text: 'Coastal trails and lookouts; the climb to Pic Champlain gives sweeping views.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Sea Kayaking', dist: 'Bic · Rimouski', text: 'Guided outings among the islands — tides and cold water make a guide worthwhile.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'Route Verte', text: 'Quebec’s long-distance cycle route follows the shore through the city.' },
    { icon: '🐦', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Pointe-au-Père shore', text: 'Seabirds and shorebirds along the tidal flats east of the city.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', name: 'Sunset Watching', dist: 'Promenade · Bic', text: 'The river faces northwest here, so summer sunsets set over open water.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Sports', dist: 'Mont-Comi · trails', text: 'Downhill skiing southeast of the city, plus cross-country and snowshoe trails.' },
  ],

  food: [
    { icon: '🦐', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Northern Shrimp', area: 'Region', areaLevel: 'danger', text: 'Small sweet Matane shrimp and other seafood from the lower St. Lawrence and the Gaspé.' },
    { icon: '🦀', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Snow Crab', area: 'Seasonal', areaLevel: 'gold', text: 'Fresh crab at fish shops and restaurants in spring and early summer.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Microbreweries', area: 'Downtown', areaLevel: 'purple', text: 'Local craft beer in the bars of Rue Saint-Germain.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Classic Quebec casse-croûtes.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Bas-Saint-Laurent Cheese', area: 'Region', areaLevel: 'safe', text: 'Cheeses and curds from farms along the shore.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Student Cafés', area: 'Downtown · UQAR', areaLevel: 'blue', text: 'Relaxed cafés in a university town.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Slow to warm', text: 'Ice leaves the river in April; it stays cool and windy by the water into June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Best season', text: 'Pleasant, rarely hot, with long evenings and spectacular sunsets. Most attractions are open only in summer.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Colour & calm', text: 'Fewer visitors, fall colour on the hills, and still-good hiking in Bic.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 2, note: 'Cold & windy', text: 'Long, snowy winters with strong winds off the river. Many seasonal sites close.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Autoroute 20 follows the south shore from Québec City; Route 132 continues east along the coast to the Gaspé Peninsula.',
      time: '≈3 h from Québec City',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train',
      text: 'VIA Rail’s Montréal–Halifax train, the Ocean, stops in Rimouski a few times a week. Check the current schedule.',
      time: 'Overnight from Montréal',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches run along the south shore from Québec City and continue toward the Gaspé.',
      time: '≈4 h from Québec City',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Across the River',
      text: 'The Rimouski–Forestville ferry has not operated since 2022. To reach the North Shore, check the other St. Lawrence ferry crossings before you go.',
      time: 'No ferry from Rimouski',
    },
  ],

  stay: [
    {
      icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg',
      title: 'Downtown & Waterfront',
      area: 'Walk to the promenade',
      text: 'Hotels near the cathedral and the seaside path.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Rimouski+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Rimouski%2C%20Quebec%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🦭', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      title: 'Le Bic',
      area: 'Near the national park',
      text: 'Inns in the village, or camping and ready-to-camp tents inside the park (book early with Sépaq).',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Le+Bic+Rimouski', level: 'blue' },
      ],
    },
    {
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      title: 'Pointe-au-Père',
      area: 'Quiet · By the lighthouse',
      text: 'Motels and B&Bs on the east side of the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pointe-au-Pere+Rimouski', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Citébus & Taxibus',
      text: 'The Société des transports de Rimouski runs Citébus routes through the central city and Taxibus — shared taxis on set routes — to the outer districts. One fare table covers both.',
      linkLabel: 'Rimouskibus',
      linkUrl: 'https://www.rimouskibus.com/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Fares below are from the STR fares page; prices are revised every March 1, so confirm before you travel. Children 0–12 ride free with someone aged 16+ (up to three children aged 6–12 per adult).',
        fareBox: {
          label: 'Adult',
          lines: ['Single, cash: $4.00 (exact)', 'Day pass (Transit app): $9.25', '10 rides: $34.75', 'Monthly: $90.75'],
        },
        linkLabel: 'STR fares',
        linkUrl: 'https://www.rimouskibus.com/pages/infos-pratiques/tarifs',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown and the promenade are compact and walkable.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike', text: 'The seaside path is ideal in summer.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Needed for Bic, the canyon and the gardens.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available in the city.' },
        ],
      },
    ],
    proTip: {
      label: 'Sunset tip:',
      text: 'Check the sunset time and head to the Promenade de la mer or Bic National Park 30 minutes before — locals do.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Rimouski / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Museum admission: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', label: 'Promenade de la mer: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French Region', text: 'Rimouski is almost entirely French-speaking. Staff at major sites speak English, but a few French phrases go a long way.' },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Summer Season', text: 'Pointe-au-Père, the island boat, the canyon and the gardens mostly open from June to early fall. Check dates before you go.' },
    { icon: '🧥', iconSrc: '/icons/attractions/ph_hoodie-thin.svg', title: 'Bring a Layer', text: 'Even in July, wind off the cold river can make evenings chilly.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Tides', text: 'The shore has large tidal flats. Watch the tide times when walking out on the rocks in Bic.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter', text: 'Long and windy. Winter tires are mandatory in Quebec from December 1 to March 15.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'The Bas-Saint-Laurent lies within the traditional territories of the Wolastoqiyik (Maliseet) and Mi’gmaq peoples.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hôpital régional de Rimouski', '150 Avenue Rouleau', 'Emergencies: call 911 · Health line: 811'] },
  ],
};

export default RIMOUSKI;
