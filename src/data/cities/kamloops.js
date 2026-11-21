// Kamloops — данные страницы /city/kamloops
// В шапке ролик из public/Cities/Kamloops. Снят он, судя по кадрам, не
// в Камлупсе: на видео озеро в густом хвойном лесу, а Камлупс —
// полупустыня у слияния двух рек. Ролик поставлен по прямому решению
// владельца сайта; если позже найдётся кадр самого города, менять
// нужно только heroVideo и heroImage. heroImage — постер, вырезанный
// из первой секунды того же ролика, чтобы шапка не мигала чужим видом
// до загрузки видео.
// Районы: фото лежат в public/Cities/Kamloops (источники — в комментариях у
// каждого района; без фото остались те, где свободного снимка не нашлось —
// работает icon-fallback). Подробные карточки — поле details.
// Все цифры (тарифы, расстояния, население) — из проверенных
// источников на октябрь 2026; графики и цены меняются, поэтому в
// тексте везде сказано сверяться перед поездкой.

export const KAMLOOPS = {
  slug: 'kamloops',
  name: 'Kamloops',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Thompson Country',
  accentLevel: 'gold',
  heroIcon: '🏜️',
  heroImage: '/Cities/Kamloops/hero-poster.jpg',
  heroVideo: '/Cities/Kamloops/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 50.6745, lon: -120.3273 },
  subtitle: 'Where the Rivers Meet',
  description:
    'The dry heart of British Columbia, at the confluence of the North and South Thompson rivers. Sagebrush hills instead of rainforest, some of the hottest summers in Canada, and over two thousand hours of sun a year. The name is Secwepemctsín — Tk’emlúps, "where the rivers meet" — and the Secwépemc have lived here for thousands of years.',

  actions: [
    { label: 'Explore Kamloops', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈98K' },
    { label: 'Climate', value: 'Semi-arid' },
    { label: 'Annual Sunshine', value: '2,000+ hours' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈355 km · 4–5h' },
    { label: 'To Sun Peaks', value: '≈45 min' },
  ],

  badges: ['Semi-Arid', 'River Confluence', 'Secwépemc Territory'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 5 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'danger', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'gold', rating: 5 },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
  ],

  highlights: [
    { value: '2', label: 'Rivers meeting in the middle of the city — the North and South Thompson', level: 'blue' },
    { value: '2,000+', label: 'Hours of sunshine a year, among the sunniest places in British Columbia', level: 'gold' },
    { value: '100+', label: 'Sports tournaments a year — the city calls itself the Tournament Capital of Canada', level: 'safe' },
    { value: '≈45 min', label: 'To Sun Peaks Resort, one of the largest ski areas in the country', level: 'danger' },
  ],

  neighbourhoods: [
    // Фото: пирс в Riverside Park зимой, вид на Mount Paul и реку, Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Downtown & Riverside', image: '/Cities/Kamloops/Downtown & Riverside.jpg', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Core', tagLevel: 'gold', meta: 'Victoria Street · Riverside Park · Beaches on the Thompson · Cafés and brewpubs',
      details: {
        "lead": "The compact core of the city, built around Victoria Street. Riverside Park and the beach on the Thompson River are a short walk away.",
        "see": [
          {
            "title": "Riverside Park",
            "text": "Tourism Kamloops calls it the most popular urban beach in the city. Swimming is allowed in the designated beach area only, at your own risk. There is an accessible splash park, an inclusive playground and free access to the paths. It is also a starting point for the Rivers Trail."
          },
          {
            "title": "Kamloops Art Gallery",
            "text": "101-465 Victoria Street. Open Tuesday to Saturday, 10 am–5 pm, with Thursdays until 8 pm; closed Sundays and Mondays. Admission is free on Thursdays; otherwise an adult ticket is listed at $5."
          },
          {
            "title": "Kamloops Museum and Archives",
            "text": "207 Seymour Street, at 2nd Avenue. Hours differ between sources, and admission is listed by donation, so check before you go."
          }
        ],
        "eat": [
          {
            "title": "Victoria Street",
            "text": "The cafés, bakeries and restaurants are concentrated in a few downtown blocks, easy to cover on foot."
          },
          {
            "title": "Red Collar Brewing Co.",
            "text": "One of the breweries in the downtown area, listed by Tourism Kamloops."
          },
          {
            "title": "Kamloops Farmers' Market",
            "text": "In 2026 the Saturday market ran from 8:30 am to 12:30 pm on St. Paul Street between 2nd and 3rd Avenues until October 31, with a Wednesday market on the 400 block of Victoria Street. Check what runs in winter."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Walkable from downtown hotels. The Rivers Trail follows the river through the park."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for the park, the gallery and a walk along Victoria Street."
          },
          {
            "label": "Good to know",
            "text": "The river is cold and fast in spring runoff, so stay in the designated swimming area."
          }
        ],
        "link": {
          "label": "Tourism Kamloops: Riverside Park",
          "url": "https://www.tourismkamloops.com/things-to-do/riverside-park/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (вид на реку и город с холма)
    { name: 'North Shore', image: '/Cities/Kamloops/North Shore.jpg', icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg', tag: 'Across the river', tagLevel: 'blue', meta: 'Tranquille Road · Older neighbourhoods · Cheaper stays · Links to the airport',
      details: {
        "lead": "North Kamloops, just over the Overlander Bridge and about five minutes north of downtown. Tranquille Road is its main street.",
        "see": [
          {
            "title": "Tranquille Road",
            "text": "The main commercial street of the North Shore, with shops, cafés and the neighbourhood’s breweries."
          },
          {
            "title": "The river",
            "text": "The Thompson is close on this side too, and the Rivers Trail connects the North Shore with downtown."
          }
        ],
        "eat": [
          {
            "title": "Bright Eye Brewing",
            "text": "292 Tranquille Road. The first craft brewery on the North Shore, opened in October 2019, with a restaurant and an arcade."
          },
          {
            "title": "Craft beer after the trails",
            "text": "The North Shore and downtown together hold most of the city’s small brewery scene."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About five minutes north of downtown, just over the Overlander Bridge."
          },
          {
            "label": "Stay",
            "text": "Older neighbourhoods and a quieter base than downtown; compare prices with the centre."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two for a brewery stop."
          }
        ],
        "link": {
          "label": "Tourism Kamloops: brewery tour",
          "url": "https://www.tourismkamloops.com/blog/a-kamloops-brewery-self-guided-tour-guide/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: кампус Thompson Rivers University в тумане (волк на крыше), чёрно-белое, Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Sahali & Aberdeen', image: '/Cities/Kamloops/Sahali & Aberdeen.jpg', icon: '🏫', iconSrc: '/icons/attractions/ph_chalkboard-teacher-thin.svg', tag: 'Hillside', tagLevel: 'safe', meta: 'Thompson Rivers University · Shopping · Views over the valley',
      details: {
        "lead": "The hillside neighbourhoods south of the river. Thompson Rivers University, major shopping centres, schools and medical facilities sit here, and the hills give views over the valley.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Thompson Rivers University",
                "text": "The campus sits on the hill above the river valley. A wolf statue stands on one of its buildings."
              },
              {
                "title": "Kenna Cartwright Nature Park",
                "text": "About 800 hectares on Mount Dufferin. The city lists more than 55 km of trails; other sources say about 40 km. There are no technical or extreme-rated trails."
              },
              {
                "title": "Lookouts",
                "text": "The Sunset Trail has a lookout at the end, and the Tower Trail is a 3.4 km round trip with a 145 m climb."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Heat and shade",
                "text": "Sagebrush and bunchgrass give no shade. In summer walk in the morning or evening and carry more water than you expect."
              },
              {
                "title": "Closures",
                "text": "Trails may close during spring snowmelt, and the park may close during extreme fire hazard."
              },
              {
                "title": "Rattlesnakes",
                "text": "Western rattlesnakes live in the grasslands. Watch where you step and keep dogs leashed."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hills south of downtown; the city bus network serves the university area."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours for a trail loop."
          },
          {
            "label": "Best time",
            "text": "Spring and fall for hiking; summer mornings and evenings only."
          }
        ],
        "link": {
          "label": "City of Kamloops: Kenna Cartwright Nature Park",
          "url": "https://www.kamloops.ca/recreation-culture/parks-sports-fields/kenna-cartwright-nature-park"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Valleyview & Dallas', image: '/Cities/Kamloops/Valleyview & Dallas.jpg', icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg', tag: 'East', tagLevel: 'olive', meta: 'Along the South Thompson · Highway motels · Closest to the BC Wildlife Park',
      details: {
        "lead": "The eastern side of the city, along the South Thompson River. Dallas is about 15 minutes from downtown, and this is the closest part of town to the BC Wildlife Park and the Thompson Valley wineries.",
        "see": [
          {
            "title": "BC Wildlife Park",
            "text": "9077 Dallas Drive. Listings give 9:30 am–5 pm daily, with last admission between 4 and 4:30 pm. Adult prices range from about $15 to $24 between sources. It is a non-profit and has a miniature train."
          },
          {
            "title": "Monte Creek Ranch Winery",
            "text": "A 1,200-acre working ranch with vineyards on both sides of the South Thompson River. Its Terrace Restaurant has a patio over the landscape."
          },
          {
            "title": "Privato Vineyard",
            "text": "A family-owned boutique winery known for pinot noir and chardonnay. Reservations are recommended, and summer hours are listed as 11 am–5 pm daily."
          }
        ],
        "eat": [
          {
            "title": "Terrace Restaurant, Monte Creek",
            "text": "Lunch with a view over the vineyards. Check the season and hours."
          },
          {
            "title": "Kamloops Wine Trail",
            "text": "The trail lists three wineries: Monte Creek, Privato and Sagewood. Harper’s Trail is shown as closed on the trail’s own site."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By car along the Trans-Canada Highway; the wineries and the wildlife park are spread out."
          },
          {
            "label": "Stay",
            "text": "Highway motels are the cheaper option, handy if you are passing through."
          },
          {
            "label": "Good to know",
            "text": "Prices and hours at the park and wineries change, so confirm before you drive out."
          }
        ],
        "link": {
          "label": "Tourism Kamloops: wineries",
          "url": "https://www.tourismkamloops.com/blog/your-guide-to-kamloops-wineries/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Westsyde & Batchelor', image: '/Cities/Kamloops/Westsyde & Batchelor.jpg', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Residential', tagLevel: 'purple', meta: 'North along the river · Quiet · Trailheads into the grassland hills',
      details: {
        "lead": "The quiet residential area north along the river, with trailheads into the grassland hills. Batchelor Heights sits on a hill above the south end of Westsyde Road.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Grassland trails",
                "text": "Trailheads lead into open sagebrush and bunchgrass hills with long views over the river valleys."
              },
              {
                "title": "Batchelor Heights",
                "text": "A hillside neighbourhood above Westsyde Road. One real-estate listing places Kamloops Airport within it."
              },
              {
                "title": "The river",
                "text": "Westsyde Road follows the North Thompson River."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Heat",
                "text": "Summer afternoons pass 35 °C with almost no shade. Plan outdoor time for early morning or evening."
              },
              {
                "title": "Rattlesnakes",
                "text": "They avoid people, but watch where you step on warm rock and keep dogs leashed."
              },
              {
                "title": "Fire season",
                "text": "Trails and parks can close during extreme fire hazard, and smoke can settle over the valley in July and August."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of the North Shore, along Westsyde Road. A car makes the trailheads much easier."
          },
          {
            "label": "Best for",
            "text": "A quiet base and early-morning walks."
          },
          {
            "label": "Good to know",
            "text": "Bring plenty of water; there is little shade on any of these trails."
          }
        ],
        "link": {
          "label": "Tourism Kamloops",
          "url": "https://www.tourismkamloops.com/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Tk’emlúps te Secwépemc', image: '/Cities/Kamloops/Tkemlups te Secwepemc.jpg', icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', tag: 'First Nation', tagLevel: 'danger', meta: 'Across the river from downtown · Secwépemc Museum & Heritage Park · Powwow grounds',
      details: {
        "lead": "The community of the Secwépemc across the river from downtown. The name Tk’emlúps means “where the rivers meet”. It is home to the Secwépemc Museum & Heritage Park, which is run by the Nation, and to the Powwow Arbour.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Secwépemc Museum & Heritage Park",
                "text": "Open Monday to Friday, 9 am–3:30 pm, and closed on statutory holidays. Admission is paid at reception by cash or card; listed prices exclude GST, and Tk’emlúps band members get in free."
              },
              {
                "title": "Tours of the former school",
                "text": "The museum offers guided tours of the Kamloops Indian Residential School (1923–1977), covering the chapel, dining room, kitchen, boys’ dormitory and gymnasium. Book online or by phone (250-828-9749). The tour can be made age-appropriate for Grade 4 and up, and includes four flights of stairs with no mobility accommodations."
              },
              {
                "title": "Kamloopa Powwow",
                "text": "The 45th annual powwow ran June 26–28, 2026 at the Arbour (345 Powwow Trail). It has moved to June, but 2027 dates were not confirmed."
              }
            ]
          },
          {
            "title": "Visiting with respect",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Start at the museum",
                "text": "It is run by the Nation and is the place to begin. The museum describes itself as ground zero for the search for The Missing."
              },
              {
                "title": "Other events at the Arbour",
                "text": "In 2026 these included the National Indigenous Peoples Day celebration on June 21 (free) and Music for the People on September 13."
              },
              {
                "title": "A living community",
                "text": "Tk’emlúps te Secwépemc is a community, not a historical site. Ask before photographing people or homes."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Across the river from downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours for the museum, longer with the school tour."
          },
          {
            "label": "Cost",
            "text": "The museum charges admission; check the current prices on its site."
          }
        ],
        "link": {
          "label": "Secwépemc Museum & Heritage Park",
          "url": "https://secwepemcmuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Secwépemc Museum & Heritage Park',
      icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg',
      text: 'The most important place in the city, and run by the Secwépemc themselves. A five-hectare site with a walking trail through the archaeological remains of a winter village roughly two thousand years old, reconstructed pit houses and a summer village, plus galleries of Secwépemc history. The main building was once the residence for the staff who ran the Indian residential school next door — the museum does not hide that.',
      tags: [{ label: 'Indigenous-run', level: 'danger' }, { label: 'Essential', level: 'gold' }],
      details: {
        "lead": "Run by the Secwépemc themselves, in the community of Tk’emlúps te Secwépemc. The museum also offers guided tours of the former Kamloops Indian Residential School.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Monday to Friday, 9 am–3:30 pm. Closed on provincial and national statutory holidays."
              },
              {
                "title": "School tours",
                "text": "A guide leads visitors through the Kamloops Indian Residential School (1923–1977): the chapel, dining room, kitchen, boys’ dormitory and gymnasium."
              },
              {
                "title": "Run by the Nation",
                "text": "The museum is run by Tk’emlúps te Secwépemc and is the best place to begin a visit."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Paid at reception by cash or card. Adult, youth, child and family rates are listed on the contact page, excluding GST. Band members are free."
              },
              {
                "title": "Booking",
                "text": "Book a school tour or museum tour online or by phone (250-828-9749)."
              },
              {
                "title": "Accessibility and age",
                "text": "The school tour includes four flights of stairs with no mobility accommodations, and can be made age-appropriate for Grade 4 and up."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Check current prices on the museum’s site."
          },
          {
            "label": "Getting there",
            "text": "Across the river from downtown."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours; longer with a school tour."
          }
        ],
        "link": {
          "label": "Secwépemc Museum & Heritage Park",
          "url": "https://secwepemcmuseum.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Le Estcwicwéy̓ — The Missing',
      icon: '🕯️', iconSrc: '/icons/attractions/candle-thin.svg',
      text: 'In May 2021 Tk’emlúps te Secwépemc announced that ground-penetrating radar had found what were reported as 215 potential unmarked burials at the former Kamloops Indian Residential School. A later specialist report put the figure at roughly 200 potential burial sites, with much of the grounds still unsurveyed, and the search continues. The Nation’s position is that the radar confirms what survivors’ oral history had already established. The site is not a tourist attraction — it is a place people visit quietly, if at all.',
      tags: [{ label: 'Treat with care', level: 'danger' }],
      details: {
        "lead": "The search for The Missing children at the former Kamloops Indian Residential School. This is not a tourist attraction. It is a place where Survivors, families and the community grieve, and visitors should treat it with that in mind.",
        "columns": [
          {
            "title": "What to know",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The announcement",
                "text": "In May 2021 Tk’emlúps te Secwépemc announced the radar findings that were reported as 215 potential unmarked burials. A later report put the figure at roughly 200 potential burial sites, with much of the grounds unsurveyed."
              },
              {
                "title": "Where it stands",
                "text": "In February 2026 the Nation said there may never be full consensus on what to do with the site. Options discussed include preserving it as a sacred site or excavating."
              },
              {
                "title": "Access",
                "text": "A 2022 presentation by the Nation described barricades and 24-hour security around the burial area. Do not assume you can enter the grounds; ask the Nation or the museum about current access."
              }
            ]
          },
          {
            "title": "If you visit",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Begin at the museum",
                "text": "The Secwépemc Museum is run by the Nation and is the place to learn the history and ask about the site."
              },
              {
                "title": "Public ceremonies",
                "text": "Anniversary ceremonies at the Powwow Arbour have been open to the public. In 2026 there was a gathering near the site on the eve of the National Day for Truth and Reconciliation."
              },
              {
                "title": "Support",
                "text": "The 24-hour Indian Residential Schools Crisis Line is 1-866-925-4419 for former residential school students in distress."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; there is nothing to buy."
          },
          {
            "label": "Getting there",
            "text": "In the community of Tk’emlúps te Secwépemc, across the river from downtown."
          },
          {
            "label": "How to visit",
            "text": "Quietly, with respect, and only where access is allowed."
          }
        ],
        "link": {
          "label": "BC government: joint statement on visiting the public memorial (2021)",
          "url": "https://news.gov.bc.ca/releases/2021IRR0040-001513"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Riverside Park',
      icon: '🏖️', iconSrc: '/icons/attractions/beach-thin.svg',
      text: 'Downtown on the Thompson, with a swimming beach, a waterfront walkway and free concerts in summer. It is the easiest introduction to why a desert city is built around water.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Central', level: 'blue' }],
      details: {
        "lead": "Downtown on the Thompson River. Tourism Kamloops describes it as the most popular urban beach in the city.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The beach",
                "text": "Swimming is permitted in the designated beach area only, at your own risk. A beach-access mobility mat may be available depending on river levels."
              },
              {
                "title": "Splash park and playground",
                "text": "An accessible splash park and inclusive playground."
              },
              {
                "title": "Music in the Park",
                "text": "Concerts run in July and August, according to Tourism Kamloops."
              },
              {
                "title": "Rivers Trail",
                "text": "The park is a starting point for walking, jogging and rollerblading along the trail."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Cold fast water",
                "text": "The river is cold and fast in spring runoff. Stay in the designated area."
              },
              {
                "title": "Heat",
                "text": "Summer afternoons are very hot with little shade; go early or late."
              },
              {
                "title": "Check the schedule",
                "text": "Concert dates and lifeguard coverage change, so check the city and Tourism Kamloops."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free access to the park, beach, paths, playground and splash park."
          },
          {
            "label": "Getting there",
            "text": "Downtown, within walking distance of Victoria Street."
          },
          {
            "label": "Time to allow",
            "text": "An hour to a half day."
          }
        ],
        "link": {
          "label": "Tourism Kamloops: Riverside Park",
          "url": "https://www.tourismkamloops.com/things-to-do/riverside-park/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'BC Wildlife Park',
      icon: '🐺', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      text: 'East of the city, a rehabilitation-focused park with wolves, bison, cougars and many more animals, most of them rescued and unable to return to the wild. There is a miniature train for children.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Family', level: 'safe' }],
      details: {
        "lead": "A non-profit wildlife park east of the city on the Trans-Canada Highway (9077 Dallas Drive), home to rescued animals that cannot return to the wild.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The animals",
                "text": "Wolves, bison, cougars and many more, most of them rescued."
              },
              {
                "title": "Miniature train",
                "text": "A miniature train ride and educational experiences for children."
              },
              {
                "title": "Hours",
                "text": "Listings give 9:30 am to 5 pm daily, including holidays, with last admission between 4 and 4:30 pm."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "Adult admission ranges from about $15 to $24 across sources; the park is a non-profit with limited funding. Confirm on the park’s site."
              },
              {
                "title": "Seasonal hours",
                "text": "Hours may change by season, so check before you drive out."
              },
              {
                "title": "Heat",
                "text": "Enclosures have little shade in summer; bring water and a hat."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. About $15 to $24 for adults."
          },
          {
            "label": "Getting there",
            "text": "By car, east of the city past Dallas."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Tourism Kamloops",
          "url": "https://www.tourismkamloops.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sun Peaks Resort',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'Roughly forty-five minutes north-east, one of the largest ski areas in Canada and a full village in its own right. Skiing in winter, mountain biking and alpine hiking in summer. Many people stay in Kamloops and drive up for the day.',
      tags: [{ label: 'Day trip', level: 'blue' }, { label: 'Year-round', level: 'safe' }],
      details: {
        "lead": "A ski resort and mountain village northeast of Kamloops. The 2026/27 opening was moved from November 21 to Thursday, November 26, weather permitting.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter season",
                "text": "Listed as November 26, 2026 to April 4, 2027. Guests who prebooked for the delayed days are refunded automatically."
              },
              {
                "title": "Tickets",
                "text": "The resort says you can save up to 40% on full-day alpine tickets by buying in advance."
              },
              {
                "title": "Summer bike park",
                "text": "In 2026 it ran June 13 to September 7 (10 am–7 pm) and September 8 to 27 (10 am–5 pm)."
              },
              {
                "title": "Summer hiking",
                "text": "22 trails after chairlift access, and a disc golf course at the top of the Sunburst Express."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Terrain size",
                "text": "Sources disagree, from 144 slopes and 13 lifts to 156 km of runs. Expect limited terrain early on."
              },
              {
                "title": "Winter driving",
                "text": "Use proper winter tires and check road conditions before you drive up."
              },
              {
                "title": "Day trip",
                "text": "Many visitors stay in Kamloops and drive up for the day; the drive is about 45 minutes."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Prices vary by date and are lower bought in advance."
          },
          {
            "label": "Getting there",
            "text": "About 45 minutes northeast of Kamloops by car. Seasonal shuttles run in ski season."
          },
          {
            "label": "Best time",
            "text": "Winter for skiing; summer for biking and hiking."
          }
        ],
        "link": {
          "label": "Sun Peaks: day tickets",
          "url": "https://www.sunpeaksresort.com/ski-ride/tickets-passes/day-tickets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'The Grassland Hills',
      icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg',
      text: 'Kamloops sits in Canada’s dry interior grassland, and the hills around the city are laced with trails — Kenna Cartwright Park on the bluff above downtown is the biggest. Sagebrush, bunchgrass and no shade: these are morning and evening walks in summer, not midday ones.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'No shade', level: 'danger' }],
      details: {
        "lead": "Kamloops sits in Canada’s dry interior grassland, and trails lace the hills around the city. Kenna Cartwright Nature Park is the largest, at about 800 hectares on Mount Dufferin.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Trail network",
                "text": "The city lists more than 55 km of trails; other sources say about 40 km. None are rated technical or extreme."
              },
              {
                "title": "Tower Trail",
                "text": "A 3.4 km round trip with a 145 m elevation gain."
              },
              {
                "title": "Panorama Loop and Sunset Trail",
                "text": "The Panorama Loop is listed at 2.8 km, and the Sunset Trail ends at a lookout."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "No shade",
                "text": "Sagebrush and bunchgrass offer no cover. Walk in the morning or evening in summer and carry plenty of water."
              },
              {
                "title": "Closures",
                "text": "Trails may close during spring snowmelt, and the park may close during extreme fire hazard."
              },
              {
                "title": "Rattlesnakes",
                "text": "Western rattlesnakes live here. Watch where you step and keep dogs leashed."
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
            "text": "On the bluff above downtown; a car makes the trailheads easier."
          },
          {
            "label": "Best time",
            "text": "Spring and fall; early morning or evening in summer."
          }
        ],
        "link": {
          "label": "City of Kamloops: Kenna Cartwright Nature Park",
          "url": "https://www.kamloops.ca/recreation-culture/parks-sports-fields/kenna-cartwright-nature-park"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'A Desert City Built on Two Rivers',
  outdoor: [
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Mountain Biking', dist: 'Bike Ranch · city trails', text: 'Kamloops has a serious riding reputation and a dry, grippy dirt that holds up when the coast is a swamp. The Kamloops Bike Ranch is the city-run park; the surrounding hills hold far more. Summer riding is best early or late in the day.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Grassland Hiking', dist: 'Hills around the city', text: 'Open bunchgrass and sagebrush with long views over the river valleys. There is almost no shade anywhere — carry far more water than a coastal hike of the same length would need, and watch for rattlesnakes on warm rock.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'The Thompson Rivers', dist: 'Through the city', text: 'Two rivers meet downtown, and both are used for paddling, rafting and swimming in summer. Current and cold water are real hazards in spring runoff — the rivers look calmer than they are.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Lake Fishing', dist: 'Hundreds within an hour', text: 'The plateau around Kamloops is famous for small trout lakes, and Kamloops trout is a recognised strain of rainbow. Licences are required; check regulations for each lake and season.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Sun Peaks', dist: '≈45 min north-east', text: 'A large ski resort with a pedestrian village, reachable as a day trip from the city. Winter driving up the Sun Peaks Road needs proper tires; summer brings lift-served biking and alpine trails.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Heat & Wildlife', dist: 'City-wide', text: 'Western rattlesnakes live in these grasslands and are a genuine, if uncommon, hazard — watch where you put your hands and feet. Summer afternoons regularly pass 35 °C with no cover at all.' },
  ],

  food: [
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer', area: 'Downtown · North Shore', areaLevel: 'gold', text: 'A small but real brewery scene clustered downtown and across the river, and a reliable landing place after a hot afternoon on the trails.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Thompson Valley Wine', area: 'East of the city', areaLevel: 'purple', text: 'One of Canada’s newest and smallest wine regions, with a handful of wineries along the South Thompson. Much less developed than the Okanagan, which is part of its appeal.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Cafés & Bakeries', area: 'Victoria Street', areaLevel: 'blue', text: 'The downtown strip has the concentration of independent coffee shops and bakeries. Good for an early start before the heat.' },
    { icon: '🥩', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Ranch Country Beef', area: 'City-wide', areaLevel: 'danger', text: 'This is cattle country — the grasslands around Kamloops have been ranched since the 1800s, and local beef shows up on menus throughout the city.' },
    { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', title: 'Downtown Dining', area: 'Victoria Street', areaLevel: 'safe', text: 'The restaurant choice is concentrated in a few downtown blocks rather than spread across the city. Easy to cover on foot.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farmers’ Markets', area: 'Seasonal · downtown', areaLevel: 'olive', text: 'Hot, dry summers and irrigation make this good growing country. Markets run through the warm months — check current days before planning around one.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 5, note: 'The best season', text: 'Green hills before the grass burns off, comfortable temperatures and long light. Arguably the nicest time to be here. River levels run high with snowmelt, so treat the water with respect.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'danger', rating: 4, note: 'Hot and smoky', text: 'Among the hottest places in Canada, regularly above 35 °C with no humidity and little shade. The lakes and rivers are the point. Wildfire smoke can settle over the valley for days or weeks — check air quality, not just the forecast.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'gold', rating: 5, note: 'Warm and clear', text: 'The heat breaks, the smoke usually clears and the light on the grassland hills is at its best. Excellent for hiking and riding, and the quietest the city gets.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Dry cold, ski access', text: 'Drier and less snowy in the valley than the mountains around it, but cold and often grey with valley inversions. Sun Peaks is the reason most visitors come in winter; the Coquihalla can close in storms.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — the Coquihalla',
      text: 'Highway 5, the Coquihalla, is the fast route from Vancouver via Hope and Merritt — about 355 km. It is a high mountain highway that closes in winter storms and has long climbs; winter tires are required in the cold months. Highway 1 through the Fraser Canyon is slower by about an hour and more scenic.',
      time: '4–5h from Vancouver (≈355 km)',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Kamloops Airport (YKA)',
      text: 'A small airport on the north-west side of the city with flights to Vancouver, Calgary and Prince George. The Vancouver hop is about fifty minutes in the air. Schedules are limited, so compare against the drive before booking.',
      time: '≈50 min from Vancouver',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Rail — VIA Rail',
      text: 'VIA Rail’s Canadian stops here on the Toronto–Vancouver route, but note two things: it runs only a few times a week, and Kamloops North station sits about 8 km from downtown on the far side of the river. It is a way to arrive, not a practical commuter link.',
      time: 'Few departures a week · station 8 km out',
    },
  ],

  stay: [
    {
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      title: 'Downtown & Riverside',
      area: 'Best base · Walkable',
      text: 'Close to Riverside Park, the restaurants on Victoria Street and the river walk. The obvious choice if you want to leave the car parked.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kamloops+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Kamloops%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🛣️', iconSrc: '/icons/attractions/ph_road-horizon-thin.svg',
      title: 'Valleyview & the Highway Strip',
      area: 'Cheaper · Car needed',
      text: 'Motels along the Trans-Canada east of the centre, handy if you are passing through or heading to the BC Wildlife Park. Less pleasant on foot.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Valleyview+Kamloops+BC', level: 'blue' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Sun Peaks Village',
      area: 'Ski-in · 45 min out',
      text: 'If the mountain is the reason for the trip, staying in the village saves the daily drive. More expensive than the city, and a long way from everything else.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sun+Peaks+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Kamloops Regional Transit (BC Transit)',
      text: 'A city bus network run by BC Transit covers downtown, the North Shore, the Sahali and Aberdeen hills and Thompson Rivers University. It works well for the central areas, but Kamloops is spread out across river valleys and hillsides — for Sun Peaks, the BC Wildlife Park or the grassland trailheads you will want a car.',
      linkLabel: 'BC Transit Kamloops',
      linkUrl: 'https://www.bctransit.com/kamloops',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app or a reloadable Umo card, tapping or scanning at the validator near the driver. A DayPASS applies automatically after your second paid trip of the day. Fares changed in September 2026, so confirm current prices before you travel.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $2.50', 'DayPASS: $5', '30-day adult pass: $55', 'Concession (13–18, 65+): $35', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Key Routes',
        text: 'Routes radiate from downtown across the river to the North Shore and up the hill to the university. Service levels change between semesters and seasons, so check the current schedule rather than assuming frequency.',
        fareBox: {
          label: 'Useful routes',
          lines: ['3 — Westsyde', '4 — Pacific Way', '5 — Pineview', '10 — North Shore / TRU Express'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/kamloops/schedules-and-maps',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'The practical choice. Sun Peaks, the wildlife park, the lakes and the trailheads all need one, and parking in Kamloops is easy and cheap.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Rivers Trail', text: 'A paved path along the Thompson links downtown, Riverside Park and neighbourhoods either side — good for walking and cycling.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Available in the city and from the airport. Coverage thins out in the evenings and in outlying areas.' },
          { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', title: 'Sun Peaks Shuttle', text: 'Seasonal shuttles run between Kamloops, the airport and Sun Peaks. Book ahead in ski season.' },
        ],
      },
    ],
    proTip: {
      label: 'Heat tip:',
      text: 'In July and August, plan walking and riding for before 10am or after 6pm. Midday here is genuinely dangerous without shade and water, and the bus is air-conditioned.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      'Most goods are taxed at 12%. BC has important exceptions: restaurant meals carry no PST (only 5% GST), alcohol carries 10% PST, and lodging carries a higher combined rate — 5% GST plus 8% PST on accommodation plus a Municipal and Regional District Tax of up to 3%. Confirm what a displayed room rate includes before booking.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Kamloops', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology: 12%' },
      { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', label: 'Bike parts and rentals: 12% (the bike itself is exempt)' },
    ],
    exempt: [
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no PST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no PST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Books and newspapers: no PST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's clothing: no PST" },
      { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', label: 'Bicycles: no PST · Bus fares: no tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Guides and instructors: 10–15%. Hotel housekeeping: $2–5/night. Taxi and shuttle drivers: around 10%.',
  },

  practical: [
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'Heat & Water', text: 'Summer afternoons pass 35 °C with almost no shade on the trails. Carry more water than you think you need, and plan outdoor activity for early morning or evening.' },
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Wildfire Smoke', text: 'Smoke from interior fires can sit in the valley for days or weeks in July and August. Check the air quality index alongside the forecast, and have an indoor plan.' },
    { icon: '🐍', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Rattlesnakes', text: 'Western rattlesnakes live in these grasslands. They avoid people, but watch where you step and reach on warm rock, and keep dogs leashed on the hill trails.' },
    { icon: '🛞', iconSrc: '/icons/attractions/ph_tire-thin.svg', title: 'Winter Tires', text: 'Winter tires are required on the Coquihalla and the mountain highways in the cold months. The Coquihalla closes in storms — check DriveBC before setting out.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Use the Umo app or card on Kamloops buses; children 12 and under ride free. Fares changed in September 2026 — confirm current prices.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Kamloops is in Secwépemcúl’ecw, the territory of the Secwépemc, and Tk’emlúps te Secwépemc is a community within the city, not a historical footnote. The Secwépemc Museum is run by the Nation and is the place to start.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Royal Inland Hospital', '311 Columbia Street', 'Emergencies: call 911'] },
  ],
};

export default KAMLOOPS;
