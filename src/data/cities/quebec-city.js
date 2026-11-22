// Québec City — данные страницы /city/quebec-city
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Ali Soheil, "aerial footage of Château Frontenac". Проверено по
// кадрам: Шато Фронтенак, терраса Дюфферен, река Св. Лаврентия. Исходник
// был в HDR (HLG): переведён в SDR, обрезан с 2730×1440 до 16:9 и пережат
// до ~6,3 МБ, 23 с; постер — первый кадр.
// Население — перепись 2021 года (город, без агломерации).
// Тариф RTC: на 2026 сайт даёт разовую поездку $3.85 и дневной $10.50;
// на старой странице $3.15 — на странице сказано сверяться.
// Адрес Hôtel-Dieu de Québec — из общих знаний, в этот раз не проверен.

export const QUEBEC_CITY = {
  slug: 'quebec-city',
  name: 'Québec City',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Capitale-Nationale',
  accentLevel: 'safe',
  heroIcon: '🏰',
  heroImage: '/Cities/QuebecCity/hero-poster.jpg',
  heroVideo: '/Cities/QuebecCity/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 46.8139, lon: -71.208 },
  subtitle: 'The Walled City on the Cliff',
  description:
    'The capital of Quebec and one of the oldest European cities in North America, set on a cliff where the St. Lawrence suddenly narrows — which is what the Algonquian word kébec means. Its old town is still ringed by stone walls, the only fortified city north of Mexico to keep nearly all of them, and French is spoken almost everywhere.',

  actions: [
    { label: 'Explore Québec City', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈549K (2021)' },
    { label: 'Language', value: 'French' },
    { label: 'Old Québec', value: 'UNESCO 1985' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Montréal', value: '≈250 km · 2.5h' },
    { label: 'Founded', value: '1608' },
  ],

  badges: ['Walled City', 'French-Speaking', 'UNESCO Old Town'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '1608', label: 'Samuel de Champlain founds a trading post at the foot of the cliff', level: 'gold' },
    { value: '1759', label: 'The British defeat the French on the Plains of Abraham, in a battle that lasted under an hour', level: 'danger' },
    { value: '1985', label: 'Old Québec becomes a UNESCO World Heritage Site — the most complete fortified colonial town north of Mexico', level: 'blue' },
    { value: '2033', label: 'Target opening of the new tramway; construction disrupts parts of the city until then', level: 'purple' },
  ],

  neighbourhoods: [
    { name: 'Upper Town (Haute-Ville)', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'Inside the walls', tagLevel: 'gold', meta: 'Château Frontenac · Dufferin Terrace · Rue Saint-Jean · Citadelle',
      details: {
        "lead": "Château Frontenac and Dufferin Terrace on the cliff, with Rue Saint-Jean and the Citadelle.",
        "see": [
          {
            "title": "Dufferin Terrace",
            "text": "The boardwalk in front of the Château Frontenac runs along the cliff edge with views down the river. It is free."
          },
          {
            "title": "Citadelle",
            "text": "Visits are guided only, because it is an active military base. Adults were listed at $22, seniors and students $20, teens 11–17 $8 and a family bundle $50 in early 2026."
          },
          {
            "title": "Winter hours",
            "text": "Official periods are May 16 to August 31, 2026 and September 1, 2026 to May 21, 2027. Sources give 10 am to 5:30 pm in colder months, so confirm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the cliff top; the funicular links Dufferin Terrace to the Lower Town."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "The Citadelle admission covers a 60-minute outdoor guided tour and the Royal 22e Régiment Museum."
          }
        ],
        "link": {
          "label": "La Citadelle de Québec",
          "url": "https://www.lacitadelle.qc.ca/en/admission-hours"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Lower Town & Petit-Champlain', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Below the cliff', tagLevel: 'danger', meta: 'Oldest streets in the city · Place Royale · Funicular and Breakneck Stairs',
      details: {
        "lead": "The oldest streets in the city, with Place Royale, the funicular and the Breakneck Stairs.",
        "see": [
          {
            "title": "German Christmas Market",
            "text": "November 19 to December 23, 2026, Thursday to Sunday plus December 21–23, at several sites in Old Québec. Entry is free; you pay for food, drinks and purchases."
          },
          {
            "title": "The funicular",
            "text": "Links Dufferin Terrace with the Lower Town. Fares were quoted from $3 to $7, so check on arrival."
          },
          {
            "title": "Breakneck Stairs",
            "text": "A steep staircase between the Upper and Lower towns."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By the funicular or the stairs from Dufferin Terrace."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "Very busy in summer and during the Christmas market."
          }
        ],
        "link": {
          "label": "Quebec City Christmas market guide",
          "url": "https://quebeccity.tours/guides/quebec-city-christmas-market/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Old Port', icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg', tag: 'Waterfront', tagLevel: 'blue', meta: 'Marina · Farmers’ market · Antique shops on Rue Saint-Paul',
      details: {
        "lead": "The marina, the farmers’ market and antique shops on Rue Saint-Paul.",
        "see": [
          {
            "title": "Marina and waterfront",
            "text": "The old harbour area on the river."
          },
          {
            "title": "Rue Saint-Paul",
            "text": "Antique shops and cafés."
          },
          {
            "title": "Farmers’ market",
            "text": "A public market in the Old Port; hours were not confirmed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Below the Lower Town, on the river."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "Check the market’s seasonal hours."
          }
        ],
        "link": {
          "label": "Québec City tourism",
          "url": "https://www.quebec-cite.com/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Saint-Roch', icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', tag: 'Lower city', tagLevel: 'olive', meta: 'Restaurants, cafés and start-ups · Rue Saint-Joseph · Revitalised old district',
      details: {
        "lead": "A revitalised old district of restaurants, cafés and start-ups around Rue Saint-Joseph.",
        "see": [
          {
            "title": "Rue Saint-Joseph",
            "text": "The main street, with restaurants and cafés."
          },
          {
            "title": "Start-up district",
            "text": "A revitalised area outside the walls."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Below the old walls, north of the Old Port."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Québec City tourism",
          "url": "https://www.quebec-cite.com/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Montcalm & Grande Allée', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'West of the walls', tagLevel: 'safe', meta: 'Plains of Abraham · Fine-arts museum · Terraces on Grande Allée',
      details: {
        "lead": "The Plains of Abraham, the fine-arts museum and the terraces on Grande Allée.",
        "see": [
          {
            "title": "Plains of Abraham",
            "text": "More than 14 km of free classic and skate ski trails; the 2026–27 season is listed. Last winter the season ended early for lack of snow."
          },
          {
            "title": "Ski rental",
            "text": "Equipment is rented at the skaters’ chalet next to the skating rink."
          },
          {
            "title": "Grande Allée",
            "text": "Terraces and restaurants along the avenue."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of the walls, on the Grande Allée."
          },
          {
            "label": "Time to allow",
            "text": "A few hours."
          },
          {
            "label": "Good to know",
            "text": "Grooming depends on snow; check the park’s trail report."
          }
        ],
        "link": {
          "label": "Plains of Abraham: cross-country skiing",
          "url": "https://www.plainsofabraham.ca/activities-events/cross-country-skiing"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Wendake', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: 'Huron-Wendat Nation', tagLevel: 'purple', meta: 'Huron-Wendat community in the north of the city · Museum and hotel',
      details: {
        "lead": "The Huron-Wendat community in the north of the city, with the Huron-Wendat Museum and the Hôtel-Musée Premières Nations.",
        "see": [
          {
            "title": "Musée huron-wendat",
            "text": "Open Wednesday to Sunday, 10 am–6 pm, with half-price tickets after 5 pm. Adults were listed between $13 and $17; confirm the current price."
          },
          {
            "title": "Hôtel-Musée Premières Nations",
            "text": "5 place de la Rencontre. The hotel shares a building with the museum, but hotel guests do not get free museum admission."
          },
          {
            "title": "La Traite restaurant",
            "text": "Serves breakfast, lunch and dinner at the hotel."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "In the north of the city; a car or bus."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          },
          {
            "label": "Good to know",
            "text": "The museum is its own entity; check its hours before going."
          }
        ],
        "link": {
          "label": "Musée huron-wendat",
          "url": "https://museehuronwendat.ca/en/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Château Frontenac & Dufferin Terrace',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: 'The castle-like railway hotel built in the 1890s dominates the skyline. The boardwalk in front of it, Dufferin Terrace, runs along the cliff edge with views down the river — free, and the best place to start.',
      tags: [{ label: 'Free terrace', level: 'safe' }, { label: 'Iconic', level: 'gold' }],
      details: {
        "lead": "The castle-like railway hotel built in the 1890s dominates the skyline. Dufferin Terrace in front of it is free.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Dufferin Terrace",
                "text": "A boardwalk along the cliff edge with views down the river."
              },
              {
                "title": "Funicular",
                "text": "Links the terrace with the Lower Town; fares were quoted from $3 to $7."
              },
              {
                "title": "Christmas market",
                "text": "The German Christmas Market runs November 19 to December 23, 2026 at sites in Old Québec."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Best place to start",
                "text": "The terrace is free and a good place to begin."
              },
              {
                "title": "Dress warm",
                "text": "The terrace is exposed to river wind."
              },
              {
                "title": "Check the funicular fare",
                "text": "Prices were not confirmed; ask on arrival."
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
            "text": "In the Upper Town, on the cliff."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Québec City tourism",
          "url": "https://www.quebec-cite.com/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Fortifications & Citadelle',
      icon: '🧱', iconSrc: '/icons/attractions/ph_wall-thin.svg',
      text: 'About 4.6 km of walls and gates still surround the old town. Walk sections of them on top; the star-shaped Citadelle on Cap Diamant is still an active military base, with guided tours and the summer changing of the guard.',
      tags: [{ label: 'Walls: free', level: 'safe' }, { label: 'Citadelle: paid', level: 'gold' }],
      details: {
        "lead": "Walls and gates still surround the old town, with the star-shaped Citadelle on Cap Diamant.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Citadelle admission",
                "text": "Early 2026: adults $22, seniors and students $20, teens 11–17 $8, under 11 free, family $50."
              },
              {
                "title": "The tour",
                "text": "Visits are guided only, with a 60-minute outdoor tour and free entry to the Royal 22e Régiment Museum."
              },
              {
                "title": "Seasons",
                "text": "May 16 to August 31, 2026 and September 1, 2026 to May 21, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Changing of the guard",
                "text": "Sources disagree on timing; one says daily at 10 am from late June to Labour Day."
              },
              {
                "title": "Night tours",
                "text": "October 2026 evening tours ran on Fridays and Saturdays."
              },
              {
                "title": "Reserve",
                "text": "Advance reservation is recommended in summer."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid for the Citadelle; the walls can be walked free."
          },
          {
            "label": "Getting there",
            "text": "On Cap Diamant, in the Upper Town."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "La Citadelle de Québec",
          "url": "https://www.lacitadelle.qc.ca/en/admission-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Petit-Champlain & Place Royale',
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      text: 'The narrow lanes of the Lower Town, where the city began. Reach them by the funicular or by the steep Breakneck Stairs. Lovely and very busy in summer.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Crowded', level: 'caution' }],
      details: {
        "lead": "The narrow lanes of the Lower Town, where the city began. Reach them by the funicular or the steep Breakneck Stairs.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Christmas market",
                "text": "November 19 to December 23, 2026, Thursday to Sunday plus December 21–23. Entry is free."
              },
              {
                "title": "Funicular",
                "text": "Quoted from $3 to $7; check on arrival."
              },
              {
                "title": "Breakneck Stairs",
                "text": "A steep alternative to the funicular."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Very busy",
                "text": "Lovely and very busy in summer."
              },
              {
                "title": "After the market",
                "text": "Old Québec stays decorated after the market closes."
              },
              {
                "title": "Site list",
                "text": "Guides disagree on the number of market sites; check the tourism office."
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
            "text": "By funicular or stairs from Dufferin Terrace."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Quebec City Christmas market guide",
          "url": "https://quebeccity.tours/guides/quebec-city-christmas-market/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Plains of Abraham',
      icon: '⚔️', iconSrc: '/icons/attractions/ph_sword-thin.svg',
      text: 'The battlefield of 13 September 1759, where British forces defeated the French in under an hour — now a huge urban park on the clifftop, used for concerts in summer and cross-country skiing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'History', level: 'danger' }],
      details: {
        "lead": "The battlefield of September 13, 1759, now a huge urban park used for concerts in summer and cross-country skiing in winter.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Ski trails",
                "text": "More than 14 km of free classic and skate trails, at beginner to expert levels. Other sources give 10 to 13.9 km."
              },
              {
                "title": "2026–27 season",
                "text": "Listed on the official site, depending on snow."
              },
              {
                "title": "Rentals",
                "text": "Equipment is rented at the skaters’ chalet by the skating rink."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Snow dependent",
                "text": "Last season ended early in March because of insufficient snow and icy surfaces."
              },
              {
                "title": "Check grooming",
                "text": "See the park’s trail report before going."
              },
              {
                "title": "Free",
                "text": "The park and the ski trails are free."
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
            "text": "West of the walls, next to Grande Allée."
          },
          {
            "label": "Best time",
            "text": "Summer for concerts; winter for skiing."
          }
        ],
        "link": {
          "label": "Plains of Abraham",
          "url": "https://www.plainsofabraham.ca/activities-events/cross-country-skiing"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Montmorency Falls',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'About 15 minutes from downtown, an 83-metre waterfall, taller than Niagara, with a suspension bridge over the top and a cable car. In winter its spray builds a cone of ice at the bottom.',
      tags: [{ label: 'Paid parking', level: 'caution' }, { label: 'Year-round', level: 'blue' }],
      details: {
        "lead": "An 83-metre waterfall about 15 minutes from downtown, with a suspension bridge over the top and a cable car.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Listings give $10.42 in low season to $13.90 in the main season; another says under 18 is free."
              },
              {
                "title": "Cable car",
                "text": "About $14.95 round trip for adults in one guide."
              },
              {
                "title": "Zipline",
                "text": "One source lists $30 for adults."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours vary",
                "text": "Sources say 9 am to 5 or 6 pm; winter access to some areas varies with weather."
              },
              {
                "title": "Parking",
                "text": "Quoted from $7.25 to $10.65, or free with some packages. Since 2025 parking renovations, visitors arrive at the bottom of the falls."
              },
              {
                "title": "Winter",
                "text": "No 2026 information on the ice cone was found."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "About $10–14, plus extras."
          },
          {
            "label": "Getting there",
            "text": "About 15 minutes from downtown by car."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Montmorency Falls guide",
          "url": "https://lesdeuxpiedsdehors.com/en/falls-montmorency-quebec/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Winter Carnival',
      icon: '⛄', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      text: 'The Carnaval de Québec, one of the largest winter festivals in the world, runs over several weeks from late January into February with night parades, ice canoe races and Bonhomme, its snowman mascot. Dates are announced each year.',
      tags: [{ label: 'Jan–Feb', level: 'blue' }, { label: 'Book early', level: 'danger' }],
      details: {
        "lead": "The Carnaval de Québec, one of the largest winter festivals in the world. The 73rd edition is listed for February 5 to 14, 2027.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2027 dates",
                "text": "The official site gives February 5 to 14, 2027. One calendar site gives February 3 to 12, which conflicts."
              },
              {
                "title": "Effigy pass",
                "text": "The official pass was reported at $29 presale and $39 after, plus tax, in one French guide; unconfirmed."
              },
              {
                "title": "Night parades",
                "text": "Two night parades are listed, one in the Upper Town on Saturday, February 13 at 7 pm, to be reconfirmed."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ice Palace",
                "text": "The 2027 theme had not been announced."
              },
              {
                "title": "Check carnaval.qc.ca",
                "text": "Prices and parade schedules were still to be confirmed."
              },
              {
                "title": "Dress warm",
                "text": "February in Québec City is very cold."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Many events are free; the Effigy pass opens the main sites."
          },
          {
            "label": "Getting there",
            "text": "Across the Upper Town and the Plains of Abraham."
          },
          {
            "label": "Best time",
            "text": "Early to mid February."
          }
        ],
        "link": {
          "label": "Carnaval de Québec",
          "url": "https://carnaval.qc.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Cliff, River and Snow',
  outdoor: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', name: 'Walls & Stairs', dist: 'Old Québec', text: 'The city is steep. Walking the walls and the stairways between Upper and Lower Town is the best workout and the best sightseeing.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Corridor du Littoral', dist: 'Along the river', text: 'A long cycling and walking path beside the St. Lawrence, linking to Montmorency Falls.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Skiing', dist: '≈30–45 min', text: 'Mont-Sainte-Anne and Le Massif, with views over the river, are within easy reach.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Île d’Orléans', dist: '≈20 min', text: 'A farm island in the river with orchards, cideries and strawberry fields. Cycle the loop road in summer.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Skating', dist: 'Place D’Youville', text: 'An outdoor rink by the city gates in winter.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Jacques-Cartier Park', dist: '≈45 min north', text: 'A deep glacial valley for hiking and paddling in the Laurentians.' },
  ],

  food: [
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Québécois Classics', area: 'Old Québec', areaLevel: 'danger', text: 'Tourtière, pea soup and sugar pie — traditional dishes served in old stone houses.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Maple Taffy', area: 'Winter streets', areaLevel: 'gold', text: 'Hot maple syrup poured on snow and rolled onto a stick — a Carnival favourite.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Fries, curds and gravy at every price point.' },
    { icon: '🍎', iconSrc: '/icons/attractions/ph_orange-slice-thin.svg', title: 'Île d’Orléans Produce', area: 'Island farms', areaLevel: 'safe', text: 'Cider, ice cider, berries and cheese from the island farms.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Saint-Roch Cafés', area: 'Rue Saint-Joseph', areaLevel: 'blue', text: 'The city’s modern dining and café scene.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: 'Old Port Market', area: 'Old Port', areaLevel: 'purple', text: 'Local produce and Quebec food products, open year-round.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'olive', rating: 3, note: 'Slow thaw', text: 'Snow lingers into April. Sugar-shack season around the city in March–April. Green by June.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival d’été', text: 'Warm days, the big summer music festival on the Plains of Abraham, and crowds in the old town.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colours', text: 'Red maples, crisp air and cruise ships on the river. Book ahead in early October.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'December — March', level: 'blue', rating: 4, note: 'Snow city', text: 'Deep snow and −20 °C cold snaps. The old town under snow and the Winter Carnival are magical — dress warmly.' },
  ],

  gettingThere: [
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'VIA Rail trains from Montréal arrive at the Gare du Palais, a short walk below the old town.',
      time: '≈3.5h from Montréal',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highways 20 and 40 from Montréal. Parking inside the walls is limited; use public car parks.',
      time: '≈2.5h from Montréal',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Jean-Lesage (YQB)',
      text: 'Québec City’s airport has flights from major Canadian cities and some US and sun destinations. Taxi or bus to the old town.',
      time: '≈20–30 min to downtown',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'Lévis Ferry',
      text: 'A short ferry crosses the river to Lévis — worth it for the view of the old town and Château Frontenac from the water.',
      time: '≈12 min crossing',
    },
  ],

  stay: [
    {
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      title: 'Inside the Walls',
      area: 'Historic · Pricier',
      text: 'Hotels and inns in old stone buildings, steps from everything. Book far ahead for the Carnival and fall.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Quebec', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Quebec%20City%2C%20Quebec', level: 'gold' },
      ],
    },
    {
      icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg',
      title: 'Saint-Roch',
      area: 'Lively · Better value',
      text: 'Modern hotels in the lower city, a walk or short bus ride from the old town.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Saint-Roch+Quebec', level: 'blue' },
      ],
    },
    {
      icon: '🍎', iconSrc: '/icons/attractions/ph_orange-slice-thin.svg',
      title: 'Île d’Orléans',
      area: 'Rural · Car needed',
      text: 'Farm inns and B&Bs on the island, 20 minutes from the city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Ile+d%27Orleans', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'RTC Buses',
      text: 'The RTC runs the city’s buses, including frequent Métrobus lines through the old town and along the main corridors. The future tramway is under construction and expected around 2033. The old town itself is best on foot.',
      linkLabel: 'RTC',
      linkUrl: 'https://www.rtcquebec.ca/en',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'RTC’s 2026 fare schedule lists the prices below; an older page still shows a lower single fare, so confirm before you ride. A single fare includes a 90-minute transfer on OPUS or an occasional card.',
        fareBox: {
          label: 'Adult (2026)',
          lines: ['Single fare: $3.85 (cash $4.00)', 'Day pass: $10.50', 'Monthly pass: $102.50', '90-minute transfer included'],
        },
        linkLabel: 'RTC fares',
        linkUrl: 'https://www.rtcquebec.ca/en/rates-and-purchase/rates-and-passes/fare-schedule',
      },
      {
        icon: '🚡', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
        title: 'Funicular',
        text: 'The Old Québec Funicular links Dufferin Terrace with Petit-Champlain — a short ride that saves the climb. Paid; open year-round.',
        fareBox: {
          label: 'Funicular',
          lines: ['Upper ↔ Lower Town', 'Paid per ride', 'Or take the stairs'],
        },
        linkLabel: 'Québec City Tourism',
        linkUrl: 'https://www.quebec-cite.com/en',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The old town is compact but steep — wear good shoes.' },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Ferry', text: 'The Québec–Lévis ferry is cheap and scenic.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Available; useful from the airport and train station with luggage.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for Montmorency, Île d’Orléans and skiing; not for the old town.' },
        ],
      },
    ],
    proTip: {
      label: 'View tip:',
      text: 'Take the Lévis ferry at sunset. The view back at the Château Frontenac and the cliffs is the best in the city, for the price of a ferry ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days, and GST and QST are calculated on the price including it.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Québec City / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'New Brunswick', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Wine and cider: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Tours and admissions: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', label: 'Dufferin Terrace and the walls: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Guides: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French Everywhere', text: 'Québec City is far more French-speaking than Montréal. People in tourist areas usually speak English, but a few French phrases go a long way.' },
    { icon: '🪜', iconSrc: '/icons/attractions/ph_stairs-thin.svg', title: 'Steep Streets', text: 'Hills and stairs everywhere; icy in winter. Wear shoes with grip.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Cold', text: 'January can bring −25 °C wind chills. Dress in layers and cover skin.' },
    { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', title: 'Book Ahead', text: 'Rooms inside the walls sell out during the Carnival, the summer festival and early October.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer.' },
    { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'Tramway Works', text: 'Construction for the new tramway affects several corridors in 2026 and beyond.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Québec City is on the ancestral lands of the Huron-Wendat Nation, whose community of Wendake lies within the city. The name comes from kébec, an Algonquian word for the place where the river narrows.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Hôtel-Dieu de Québec', '11 Côte du Palais', 'Emergencies: call 911'] },
  ],
};

export default QUEBEC_CITY;
