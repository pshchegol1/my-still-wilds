// St. John's — данные страницы /city/st-johns (Сент-Джонс, НЬЮФАУНДЛЕНД И ЛАБРАДОР)
// Осторожно: не Saint John (Нью-Брансуик) — уже есть отдельная страница.
// Видео в шапке — Pexels, автор Erik Mclean, башня Кэбот-Тауэр на Сигнал-
// Хилл в туманный день; сверено по архитектуре (двойная башня с антеннами)
// с фото Cabot Tower на Wikimedia Commons — совпадает однозначно. Для
// обложки взят кадр с башней (9.9 c, без помех в кадре); также нашли
// второй клип того же типа съёмки — вид на The Narrows и гавань с Сигнал-
// Хилл, но в кадре плечо человека на протяжении почти всего ролика,
// поэтому не взяли. Лицензия Pexels подписи не требует.
// Население — перепись 2021: город 110 525; агломерация (CMA) 212 575
// (+2.0% к 2016) — второй по величине CMA в Атлантической Канаде после
// Галифакса; провинциальная оценка на июль 2025 — 243 478 (рост от
// иммиграции), но это не данные переписи, не путаем с ней.
// Транспорт — Metrobus: тариф для взрослых $2.50 наличными (таблица от
// марта 2020, сайт предупреждает, что тарифы могут меняться без
// уведомления) — не утверждаем точную дату на 2026 год.
// Налог — HST 15%; городской accommodation tax (tourism marketing levy)
// 4% с 1 января 2013 (муниципальный Municipal Taxation Act).
// Больница — Health Sciences Centre (General Hospital), 300 Prince Philip
// Dr; новое приёмное отделение открылось для пациентов 8 августа 2026,
// 7:30 утра, со отдельным новым входом рядом с главным. Детские случаи —
// вход Janeway Children's Hospital на той же территории.
// Великий пожар 1892 года уничтожил большую часть центра города;
// исторический центр (Water St, Duckworth St) отстроен из кирпича и
// камня вскоре после пожара — считается, что часть домов "Jellybean Row"
// восходит именно к этой перестройке, но происхождение названия и точное
// расположение "настоящего" Jellybean Row спорны в источниках — не
// утверждаем одну версию.
// Сигнал-Хилл: башня Cabot Tower (1897) в честь предполагаемой высадки
// Джона Кабота; по Британнике — место, где в 1762 году завершилась
// франко-английская борьба за Ньюфаундленд (последнее сражение Семилетней
// войны в Северной Америке).
// Cape Spear — самая восточная точка Северной Америки, ≈15 км/20 мин от
// центра города; маяк 1834 года — старейший сохранившийся в Ньюфаундленде.
// Утверждение "старейший город Северной Америки" (с 1528 года) встречается
// только в туристических источниках и оспаривается — не повторяем как факт.
// Из общих знаний: первый трансатлантический радиосигнал Маркони принят
// на Сигнал-Хилл в 1901 году; George Street как район баров; музей The
// Rooms; время в пути.

export const ST_JOHNS = {
  slug: 'st-johns',
  name: "St. John's",
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Capital on the Rock",
  accentLevel: 'danger',
  heroIcon: '🦑',
  heroVideo: "/Cities/StJohnsNL/hero.mp4",
  heroImage: "/Cities/StJohnsNL/hero-poster.jpg",
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 47.5615, lon: -52.7126 },
  subtitle: 'Harbour City at the Edge of the Continent',
  description:
    "Spilling down steep hills around one of the world's great natural harbours, St. John's is Canada's most easterly capital — a city of brightly painted row houses, foggy headlands and a history that reaches back centuries. Climb Signal Hill for views over The Narrows, stand at Cape Spear on the edge of North America, and spend an evening on George Street, said to have more bars per square foot than anywhere else in the country.",

  actions: [
    { label: "Explore St. John's", href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈111K (2021)' },
    { label: 'Metro Area', value: '≈213K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Newfoundland (UTC-3:30/-2:30)' },
    { label: 'To Cape Spear', value: '≈20 min by car' },
    { label: 'To Halifax', value: '≈1 h 40 min by air' },
  ],

  badges: ['Signal Hill', 'Jellybean Row', 'George Street'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 3 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '110,525', label: 'People in the city in the 2021 census — about 213K across the metro area', level: 'danger' },
    { value: '1892', label: 'Year the Great Fire destroyed most of downtown — rebuilt in brick and stone', level: 'gold' },
    { value: '15%', label: 'Newfoundland & Labrador HST on most purchases', level: 'purple' },
    { value: '≈15 km', label: 'Distance to Cape Spear, the easternmost point of North America', level: 'blue' },
  ],

  neighbourhoods: [
    { name: 'Downtown & Water Street', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: "Water Street shops and the harbourfront",
      details: {
        "lead": "Water Street, shops and the harbourfront in the heart of St. John’s.",
        "see": [
          {
            "title": "Water Street",
            "text": "The final stage of the Water Street infrastructure project was due to finish by late spring 2026."
          },
          {
            "title": "The Rooms",
            "text": "The provincial museum, art gallery and archives overlook downtown; see the attraction below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The centre of the city."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          },
          {
            "label": "Good to know",
            "text": "The “oldest commercial street” claim was not confirmed here."
          }
        ],
        "link": {
          "label": "City of St. John’s: Water Street project",
          "url": "https://www.stjohns.ca/news/posts/water-street-infrastructure-project-continues-in-2026/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'George Street', icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', tag: 'Nightlife', tagLevel: 'danger', meta: 'A pedestrian strip famous for its density of bars and live music',
      details: {
        "lead": "A short pedestrian strip of pubs and live music.",
        "see": [
          {
            "title": "Nightlife",
            "text": "Pubs and live music most nights; the George Street Festival is the big event."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown, near Water Street."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          },
          {
            "label": "Good to know",
            "text": "No 2027 festival dates were found; busiest on weekends."
          }
        ],
        "link": {
          "label": "Destination St. John’s",
          "url": "https://destinationstjohns.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Jellybean Row', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: 'Icon', tagLevel: 'purple', meta: 'Brightly painted row houses on the hilly streets above downtown',
      details: {
        "lead": "Brightly painted row houses on the hilly streets above downtown.",
        "see": [
          {
            "title": "The name",
            "text": "A nickname for clusters of colourful homes, not a real street; CBC says it first referred to townhouses on Quidi Vidi Lake. A popular belief says the colours helped fishermen see their houses in fog."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Above downtown, on foot."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "These are private homes; photograph from the street."
          }
        ],
        "link": {
          "label": "CBC: Jellybean Row",
          "url": "https://www.cbc.ca/arts/an-artist-s-guide-to-falling-in-love-with-st-john-s-jellybean-row-and-murderous-provincial-plants-1.4728685"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Signal Hill', icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', tag: 'Landmark', tagLevel: 'blue', meta: 'Cabot Tower and sweeping views over The Narrows and the city',
      details: {
        "lead": "Cabot Tower and sweeping views over The Narrows and the city.",
        "see": [
          {
            "title": "Season",
            "text": "June 1 to October 9, 2026, daily 10 am–6 pm; the grounds are open year-round."
          },
          {
            "title": "Flag signalling",
            "text": "Daily July 1 to August 31 at 10:30 am and 4:30 pm."
          },
          {
            "title": "Marconi",
            "text": "Marconi received the first transatlantic wireless signal here in 1901."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hill above The Narrows; by car or trail."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          },
          {
            "label": "Good to know",
            "text": "Winter facility hours conflict; check Parks Canada."
          }
        ],
        "link": {
          "label": "Parks Canada: Signal Hill",
          "url": "https://parks.canada.ca/lhn-nhs/nl/signalhill/activ/flag"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Quidi Vidi', icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', tag: 'Village', tagLevel: 'safe', meta: 'A small historic fishing village and brewery, inside the city limits',
      details: {
        "lead": "A small historic fishing village and brewery inside the city limits.",
        "see": [
          {
            "title": "Regatta",
            "text": "The 208th Royal St. John’s Regatta was held on August 5, 2026."
          },
          {
            "title": "Brewery",
            "text": "A travel guide says the taproom runs late morning to evening in summer with reduced winter hours; unconfirmed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A short drive or walk from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          },
          {
            "label": "Good to know",
            "text": "No Quidi Vidi Battery hours were found."
          }
        ],
        "link": {
          "label": "Destination St. John’s: Royal St. John’s Regatta",
          "url": "https://destinationstjohns.com/event/royal-st-johns-regatta/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'The Battery', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Historic', tagLevel: 'olive', meta: 'Colourful fishing houses clinging to the cliffs by the harbour entrance',
      details: {
        "lead": "Colourful fishing houses clinging to the cliffs at the harbour entrance.",
        "see": [
          {
            "title": "Battery Walking Trail",
            "text": "A trail along the cliffs; listed as a good iceberg-viewing spot."
          },
          {
            "title": "Icebergs",
            "text": "Iceberg season typically runs April to June, sometimes into early July; sightings are never guaranteed."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the entrance to St. John’s Harbour."
          },
          {
            "label": "Time to allow",
            "text": "An hour."
          },
          {
            "label": "Good to know",
            "text": "Steep and exposed; icy in winter."
          }
        ],
        "link": {
          "label": "Destination St. John’s: icebergs",
          "url": "https://destinationstjohns.com/tag/iceberg/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Signal Hill National Historic Site',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: "Cabot Tower (completed in 1897 or 1900, depending on the source) crowns a hilltop overlooking The Narrows and the city — the spot where Marconi received the first transatlantic wireless signal in 1901, and where, in 1762, the French and English fought the last battle for control of Newfoundland.",
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Views', level: 'blue' }],
      details: {
        "lead": "Cabot Tower crowns a hilltop over The Narrows; Marconi received the first transatlantic wireless signal here in 1901.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 season",
                "text": "June 1 to October 9, daily 10 am–6 pm; the grounds are open year-round."
              },
              {
                "title": "Flag signalling",
                "text": "Daily July 1 to August 31 at 10:30 am and 4:30 pm, included in admission."
              },
              {
                "title": "Fees",
                "text": "One listing gives adults $5, seniors $4.50, youth free; not confirmed by Parks Canada."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "The visitor centre and tower are seasonal; sources differ on any winter hours."
              },
              {
                "title": "Cabot Tower",
                "text": "Dated to 1897 or 1900 by different sources."
              },
              {
                "title": "Icebergs",
                "text": "The hill is a popular lookout in iceberg season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Grounds free; some facilities paid in season."
          },
          {
            "label": "Getting there",
            "text": "By car or trail above The Narrows."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Parks Canada: Signal Hill",
          "url": "https://parks.canada.ca/lhn-nhs/nl/signalhill/activ/flag"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cape Spear',
      icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg',
      text: "A short drive from downtown: the easternmost point of North America, with Newfoundland's oldest surviving lighthouse (built 1835, in operation from 1836) and dramatic Atlantic cliffs.",
      tags: [{ label: 'Must see', level: 'gold' }, { label: 'Sunrise spot', level: 'purple' }],
      details: {
        "lead": "The most easterly point in North America, with Newfoundland and Labrador’s oldest surviving lighthouse.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lighthouse",
                "text": "Built in 1835 and in operation from 1836 to 1955."
              },
              {
                "title": "Season",
                "text": "June 1 to October 9, 2026, daily 10 am–6 pm; the grounds are accessible year-round."
              },
              {
                "title": "Fees",
                "text": "Adults $10, seniors $8.50, youth free; coastal paths and viewpoints are free."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "The point",
                "text": "A walk of about five minutes from the parking lot."
              },
              {
                "title": "Guided tours",
                "text": "A small fee applies for interior tours of the lighthouse."
              },
              {
                "title": "Phone",
                "text": "709-772-2191."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free grounds; $10 for adults during the season."
          },
          {
            "label": "Getting there",
            "text": "A short drive from downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two hours."
          }
        ],
        "link": {
          "label": "Parks Canada: Cape Spear hours",
          "url": "https://parks.canada.ca/lhn-nhs/nl/spear/visit/heures-hours"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jellybean Row',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: "Rows of brightly painted houses climb the hills above downtown — the name is a nickname for clusters of colourful downtown homes, not a real street. The exact origin of the name, and which street is the 'real' one, is still debated locally.",
      tags: [{ label: 'Photo spot', level: 'purple' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "Rows of brightly painted houses climb the hills above downtown; the name is a nickname, not a real street.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Name",
                "text": "CBC says it first referred to colourful townhouses on Quidi Vidi Lake; the bright palette spread later."
              },
              {
                "title": "Story",
                "text": "A common belief says houses were painted so fishermen could see them in fog, but this is not documented."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Respect",
                "text": "These are private homes; photograph from the street."
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
            "text": "On foot from downtown."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "CBC: Jellybean Row",
          "url": "https://www.cbc.ca/arts/an-artist-s-guide-to-falling-in-love-with-st-john-s-jellybean-row-and-murderous-provincial-plants-1.4728685"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'George Street',
      icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg',
      text: 'A short pedestrian street packed with pubs and live music — a lively spot most nights, legendary during the George Street Festival.',
      tags: [{ label: 'Nightlife', level: 'danger' }, { label: 'Evenings', level: 'gold' }],
      details: {
        "lead": "A short pedestrian street packed with pubs and live music.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Music",
                "text": "Live music in pubs most nights."
              },
              {
                "title": "Festival",
                "text": "The George Street Festival is the big event; no 2027 dates were found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Evenings",
                "text": "Busiest on weekend nights."
              },
              {
                "title": "Hours",
                "text": "Venues keep their own hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk; drinks and cover vary."
          },
          {
            "label": "Getting there",
            "text": "Downtown."
          },
          {
            "label": "Time to allow",
            "text": "An evening."
          }
        ],
        "link": {
          "label": "Destination St. John’s",
          "url": "https://destinationstjohns.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Rooms',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: "Newfoundland and Labrador's provincial museum, art gallery and archives, in a striking modern building overlooking the harbour.",
      tags: [{ label: 'Indoor', level: 'blue' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "Newfoundland and Labrador’s provincial museum, art gallery and archives, in a modern building above the harbour.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources differ: Tuesday, Thursday and Saturday 10 am–5 pm, Wednesday and Friday to 9 pm, Sunday noon–5 pm, Monday closed."
              },
              {
                "title": "Admission",
                "text": "About $13.80 for adults and $8.97 for students and seniors on one listing; children 0–5 free."
              },
              {
                "title": "Free evening",
                "text": "Free gallery admission is listed on the first Wednesday of each month, 5–9 pm (December 2, 2026); another guide says every Wednesday 6–9 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Winter",
                "text": "No official winter schedule was found; early closures can happen from November to May."
              },
              {
                "title": "Confirm",
                "text": "Check therooms.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $13.80 for adults."
          },
          {
            "label": "Getting there",
            "text": "9 Bonaventure Avenue."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Museum Association of NL: The Rooms",
          "url": "https://museumsnl.ca/museum-directory/the-rooms/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Quidi Vidi Village',
      icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg',
      text: 'A small, picturesque fishing village within the city, with a historic battery, a lake used for the annual Royal St. John’s Regatta, and a well-known local brewery.',
      tags: [{ label: 'Scenic', level: 'safe' }, { label: 'Food & drink', level: 'gold' }],
      details: {
        "lead": "A small fishing village within the city, with a historic battery, the regatta lake and a well-known brewery.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Regatta",
                "text": "The 208th Royal St. John’s Regatta was held on August 5, 2026, with a weather-postponement rule."
              },
              {
                "title": "Brewery",
                "text": "A travel guide says the taproom runs late morning to evening in summer with reduced winter hours; unconfirmed."
              },
              {
                "title": "Battery",
                "text": "A fort overlooking the coast and the village; no fixed hours were found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Regatta day",
                "text": "Roads around Quidi Vidi Lake close on regatta day."
              },
              {
                "title": "Jellybean origin",
                "text": "CBC says the nickname first referred to houses on Quidi Vidi Lake."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to visit."
          },
          {
            "label": "Getting there",
            "text": "A short drive from downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Destination St. John’s: Royal St. John’s Regatta",
          "url": "https://destinationstjohns.com/event/royal-st-johns-regatta/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Cliffs, Icebergs and the North Atlantic',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'East Coast Trail', dist: 'From the city', text: 'A long coastal trail network passing cliffs, coves and sea stacks.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Iceberg Watching', dist: 'Coastal, spring', text: 'Icebergs drift past the coast from Greenland in spring and early summer.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Whale Watching', dist: 'Boat tours', text: 'Humpback whales feed close to shore in summer.' },
    { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', name: 'Signal Hill Trails', dist: 'Downtown', text: 'Coastal and hilltop trails with harbour views.' },
    { icon: '🚣', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Quidi Vidi Lake', dist: 'Quidi Vidi', text: 'A calm lake used for paddling and the Royal St. John’s Regatta.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Fishing & Boat Tours', dist: 'Harbour', text: 'Local operators run sea tours out of the harbour.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Seafood', area: 'Harbourfront', areaLevel: 'danger', text: 'Cod, crab and lobster on menus across downtown.' },
    { icon: '🍻', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Quidi Vidi & downtown', areaLevel: 'gold', text: 'Local breweries, including the well-known Quidi Vidi Brewery.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'George Street Pubs', area: 'George Street', areaLevel: 'purple', text: 'Bars, live music and the local "screech-in" tradition.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: 'Everywhere', areaLevel: 'olive', text: 'A Newfoundland staple, often with cod tongues on the side.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés', area: 'Water & Duckworth St', areaLevel: 'blue', text: 'Coffee shops in the historic downtown core.' },
    { icon: '🥧', iconSrc: '/icons/attractions/ph_cake-thin.svg', title: 'Jiggs Dinner & Toutons', area: 'Local restaurants', areaLevel: 'safe', text: 'Traditional Newfoundland comfort food.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 3, note: 'Iceberg season', text: 'Icebergs drift past the coast; weather stays cool and foggy.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Peak season', text: 'Whale watching, festivals and the busiest months on George Street.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Storm season', text: 'Dramatic Atlantic storms and fewer crowds.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Snowy & windy', text: 'Cold, windy and snowy, with a cosy pub scene downtown.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: "St. John's International Airport (YYT) has flights to Toronto, Halifax, Montréal and seasonal routes to the UK and Europe.",
      time: '≈20 min to downtown',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Ferry',
      text: 'Marine Atlantic ferries connect Newfoundland to Nova Scotia at Port aux Basques and Argentia, several hours’ drive from St. John’s.',
      time: 'Long drive from the ferry terminal',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'The Trans-Canada Highway ends (or begins) in St. John’s, running the length of the island to Port aux Basques.',
      time: '≈9 h to Gros Morne',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Metrobus covers the city; intercity coach options to the rest of the island are limited. Check current operators.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown',
      area: 'Walkable',
      text: 'Hotels and B&Bs near Water Street, George Street and the harbour.',
      links: [
        { label: 'Booking.com', url: "https://www.booking.com/searchresults.html?ss=St+John's+Newfoundland", level: 'blue' },
        { label: 'Expedia', url: "https://www.expedia.ca/Hotel-Search?destination=St.%20John's%2C%20Newfoundland%20and%20Labrador%2C%20Canada", level: 'gold' },
      ],
    },
    {
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      title: 'Near Signal Hill',
      area: 'Harbour views',
      text: 'B&Bs and inns with views over the harbour entrance.',
      links: [
        { label: 'Booking.com', url: "https://www.booking.com/searchresults.html?ss=Signal+Hill+St+John's", level: 'blue' },
      ],
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'Airport Area',
      area: 'Near YYT',
      text: 'Convenient for early flights or ferry connections.',
      links: [
        { label: 'Booking.com', url: "https://www.booking.com/searchresults.html?ss=St+John's+Airport+Newfoundland", level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Metrobus',
      text: "Metrobus runs the city's bus network, covering downtown, the university and surrounding neighbourhoods. Exact change is required for cash fares.",
      linkLabel: 'Metrobus',
      linkUrl: 'https://metrobus.com/fares',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares',
        text: 'Adult fares from Metrobus’s published rate table, which is labelled as effective March 2020; no newer table was found, and the operator notes rates can change without notice, so confirm the current price before boarding.',
        fareBox: {
          label: 'Adult',
          lines: ['Single ride: $2.50 (exact cash)', '10-ride pass: $22.50', 'Monthly pass: $78', 'mCard: smart card for passes'],
        },
        linkLabel: 'Fares',
        linkUrl: 'https://metrobus.com/fares',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Downtown is walkable but steep in places.' },
          { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Bus', text: 'Covers the city and Mount Pearl/Paradise area.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Useful for Cape Spear, the East Coast Trail and day trips.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis', text: 'Widely available downtown.' },
        ],
      },
    ],
    proTip: {
      label: 'Weather tip:',
      text: 'St. John\'s is famously foggy and windy — layer up and check conditions before heading out to Signal Hill or Cape Spear.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      "Newfoundland & Labrador charges a single 15% Harmonized Sales Tax. St. John's also collects a 4% municipal accommodation tax (tourism marketing levy) on hotel stays, in place since 2013.",
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: "St. John's / NL", percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 15% HST + 4% accommodation tax' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: 15% HST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival tickets: 15% HST' },
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Clothing and goods: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg', label: 'Signal Hill & Cabot Tower grounds: free' },
      { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', label: 'Cape Spear grounds: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Tour guides: 10–15%.',
  },

  practical: [
    { icon: '🗺️', iconSrc: '/icons/attractions/ph_map-trifold-thin.svg', title: 'Not Saint John, NB', text: "St. John's (Newfoundland) is not Saint John (New Brunswick) — double-check flights and bookings." },
    { icon: '🌫️', iconSrc: '/icons/attractions/ph_cloud-fog-thin.svg', title: 'Fog and Wind', text: 'The city is known for sudden fog and strong wind, especially on Signal Hill — dress in layers year-round.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Iceberg Alley', text: 'Icebergs are best seen April to June, and timing varies year to year — check reports before planning a trip specifically for them.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: "Newfoundland Time: UTC-3:30 in winter, UTC-2:30 in summer — a half-hour offset unique to the island." },
    { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Hilly Streets', text: "Downtown's steep hills can be slippery in winter — good footwear helps." },
    { icon: '🎉', iconSrc: '/icons/attractions/ph_confetti-thin.svg', title: 'George Street Crowds', text: 'George Street gets very busy on weekends and during festivals — book accommodation well ahead for peak dates.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: "St. John's is on the ancestral homeland of the Beothuk, and the island of Newfoundland is within the traditional territory of the Mi'kmaq." },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Health Sciences Centre (General Hospital)', '300 Prince Philip Dr', 'Emergency 24/7 · call 911 · 811 for advice'] },
  ],
};

export default ST_JOHNS;
