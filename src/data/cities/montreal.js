// Montreal — данные страницы /city/montreal
// В шапке кадр с Pexels (лицензия Pexels, атрибуция не требуется),
// автор Matthew Padilla, "aerial view of Montreal skyline at sunset".
// Проверено по кадрам: башня 1000 de La Gauchetière с медной верхушкой
// и гора Мон-Руаяль за ней. Оригинал 31 с, 2560×1440 50 fps — обрезан
// до 20 с, 1920×1080 30 fps, ~4,7 МБ; постер — первый кадр.
// ВНИМАНИЕ: ролик Pexels "Aerial view of Montreal's Old Port" на самом
// деле снят в Старом порту Квебека (бассейн Луиз, элеваторы Бунге) —
// не использовать для Монреаля.
// Население — перепись 2021 года, город без агломерации. Тарифы STM —
// со страницы перевозчика (дата не указана).

export const MONTREAL = {
  slug: 'montreal',
  name: 'Montréal',
  province: 'Quebec',
  provinceId: 'qc',
  region: 'QC',
  tag: 'Quebec · Island City on the St. Lawrence',
  accentLevel: 'blue',
  heroIcon: '⛪',
  heroImage: '/Cities/Montreal/hero-poster.jpg',
  heroVideo: '/Cities/Montreal/hero.mp4',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 45.5019, lon: -73.5674 },
  subtitle: 'North America’s French-Speaking Metropolis',
  description:
    'A city on an island in the St. Lawrence, built around a small mountain that gives it its name. French is the language of the street, the menus and the signs, but the city has always been a crossroads — Kanien’kehá:ka land called Tiohtià:ke, a fur-trade port, an industrial capital and now a city of festivals, bagels and steep outdoor staircases.',

  actions: [
    { label: 'Explore Montréal', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈1.76M (2021)' },
    { label: 'Language', value: 'French first' },
    { label: 'Mount Royal', value: '≈233 m' },
    { label: 'Time Zone', value: 'Eastern (UTC-5/-4)' },
    { label: 'From Toronto', value: '≈540 km · 5h' },
    { label: 'From Québec City', value: '≈250 km · 2.5h' },
  ],

  badges: ['French-Speaking', 'Festival City', 'Tiohtià:ke'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 4 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
  ],

  highlights: [
    { value: '1642', label: 'Ville-Marie is founded by French colonists on the site of today’s Old Montréal', level: 'gold' },
    { value: '1976', label: 'Montréal hosts the Summer Olympics — the stadium’s inclined tower still dominates the east end', level: 'blue' },
    { value: '2025', label: 'The REM light metro reaches Deux-Montagnes; the airport branch is still under construction', level: 'purple' },
    { value: '$3.75', label: 'One STM metro or bus trip — the 24-hour pass also covers the 747 airport bus', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Old Montréal & Old Port', icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg', tag: 'Historic', tagLevel: 'gold', meta: 'Cobblestone streets · Notre-Dame Basilica · Waterfront promenade · Busy in summer',
      details: {
        "lead": "Cobblestone streets, Notre-Dame Basilica and the waterfront promenade. Beautiful early in the morning and busy in summer.",
        "see": [
          {
            "title": "Notre-Dame Basilica",
            "text": "Monday to Saturday 9 am–4 pm and Sunday 12:30–4 pm. Adults $16, seniors $15, students (17–22) $14, children (6–16) $10, plus tax; 5 and under free."
          },
          {
            "title": "AURA",
            "text": "The evening show is a separate ticket, from $37 for adults, $32 for seniors, $31 for students and $22 for children (6–16), plus tax."
          },
          {
            "title": "Old Port",
            "text": "A waterfront promenade along the river."
          }
        ],
        "practical": [
          {
            "label": "Hours change",
            "text": "The basilica closed early on November 19, 2026; check the official site for special closures."
          },
          {
            "label": "Getting there",
            "text": "On the Metro to Place-d’Armes, or walk from downtown."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Notre-Dame Basilica: hours and rates",
          "url": "https://www.basiliquenotredame.ca/en/hours-and-rates"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Downtown & Quartier des Spectacles', icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg', tag: 'Core', tagLevel: 'blue', meta: 'Festival plazas · Sainte-Catherine Street · Museums · Underground city',
      details: {
        "lead": "The festival plazas, Sainte-Catherine Street, museums and the underground city.",
        "see": [
          {
            "title": "Great Christmas Market",
            "text": "November 13, 2026 to January 3, 2027 at Place des Festivals, with 40 or more artisans."
          },
          {
            "title": "LUMINO",
            "text": "A light-art trail from January 21 to March 7, 2027, with about thirty interactive installations, reaching the Esplanade Tranquille skating rink."
          },
          {
            "title": "Montréal en Lumière",
            "text": "February 18 to 28, 2027, with free events, ice slides and a giant Ferris wheel."
          }
        ],
        "practical": [
          {
            "label": "Transit fares",
            "text": "The STM single ticket stayed at $3.75 and the two-trip ticket at $7 after the July 2026 increase. A monthly pass for the island of Montréal (Zone A) is reported at $110."
          },
          {
            "label": "Getting there",
            "text": "On the Metro, with the underground city linking many buildings."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Montréal tourism: winter festivals",
          "url": "https://www.mtl.org/en/experience/montreal-winter-festivals-shine-bright"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Plateau Mont-Royal', icon: '🪜', iconSrc: '/icons/attractions/ph_stairs-thin.svg', tag: 'Iconic', tagLevel: 'danger', meta: 'Outdoor staircases · Colourful row houses · Cafés · Below the mountain',
      details: {
        "lead": "Outdoor staircases, colourful row houses and cafés below the mountain.",
        "see": [
          {
            "title": "Staircases and row houses",
            "text": "The outdoor staircases and colourful row houses define the neighbourhood."
          },
          {
            "title": "Mount Royal Park",
            "text": "The mountain above the Plateau, landscaped by Frederick Law Olmsted."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of downtown, on the Metro and bus."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          },
          {
            "label": "Good to know",
            "text": "Cafés and small shops keep their own hours."
          }
        ],
        "link": {
          "label": "Montréal tourism",
          "url": "https://www.mtl.org/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Mile End', icon: '🥯', iconSrc: '/icons/attractions/ph_cookie-thin.svg', tag: 'Creative', tagLevel: 'olive', meta: 'Bagel bakeries · Studios and bookshops · Mixed communities',
      details: {
        "lead": "Bagel bakeries, studios and bookshops in a mixed neighbourhood.",
        "see": [
          {
            "title": "Bagel bakeries",
            "text": "Wood-fired, honey-boiled Montréal bagels from the Mile End bakeries."
          },
          {
            "title": "Studios and bookshops",
            "text": "A creative neighbourhood of small studios and shops."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "North of the Plateau, near the Laurier and Outremont Metro stations."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          },
          {
            "label": "Good to know",
            "text": "Bakery hours vary."
          }
        ],
        "link": {
          "label": "Montréal tourism",
          "url": "https://www.mtl.org/en"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Little Italy & Jean-Talon', icon: '🍅', iconSrc: '/icons/attractions/ph_pepper-thin.svg', tag: 'Market', tagLevel: 'safe', meta: 'Jean-Talon Market · Italian cafés · Produce and Québec cheese',
      details: {
        "lead": "Jean-Talon Market, Italian cafés and Québec produce and cheese.",
        "see": [
          {
            "title": "Jean-Talon Market",
            "text": "Monday to Saturday 8 am–6 pm and Sunday 8 am–5 pm. Open year-round except a few days around Christmas; the aisles go indoors in October and outdoor stalls return in late April."
          },
          {
            "title": "December hours",
            "text": "The official events listing gives Friday and Saturday 10 am–6 pm and Sunday 10 am–5 pm for December 2026."
          },
          {
            "title": "Summer car-free days",
            "text": "From June to October the aisles are closed to cars Thursday to Sunday, 11 am to 5 pm."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At 7070 Henri-Julien Avenue, near the Jean-Talon Metro."
          },
          {
            "label": "Parking",
            "text": "The lots open 7:30 am to 6:30 pm Monday to Wednesday, and later Thursday to Sunday."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Jean-Talon Market",
          "url": "https://www.marchespublics-mtl.com/en/markets/jean-talon-market"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Hochelaga & the Olympic Park', icon: '🏟️', iconSrc: '/icons/attractions/ph_trophy-thin.svg', tag: 'East', tagLevel: 'purple', meta: 'Olympic Stadium · Botanical Garden · Biodôme · Working-class roots',
      details: {
        "lead": "The east end, with the Olympic Stadium, the Botanical Garden and the Biodôme.",
        "see": [
          {
            "title": "Space for Life",
            "text": "The Biodôme, Insectarium, Botanical Garden and Biosphère run about 9 am to 6 pm, with the garden open until 7 pm on some Fridays and Saturdays. Hours change by week."
          },
          {
            "title": "Admission",
            "text": "A listed 2026 price for one museum was $25.50 for adults and $13.50 for ages 5–17, $68 for a family; that page is old, so confirm."
          },
          {
            "title": "Olympic Stadium",
            "text": "The 1976 Olympic Stadium with its inclined tower. No tower price was found."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the Metro Green Line to Viau or Pie-IX."
          },
          {
            "label": "Time to allow",
            "text": "A half day to a full day."
          },
          {
            "label": "Good to know",
            "text": "Check the official calendar for weekly hours."
          }
        ],
        "link": {
          "label": "Space for Life",
          "url": "https://espacepourlavie.ca/en"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Mount Royal Park',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'The mountain at the heart of the city, landscaped as a park by Frederick Law Olmsted, the designer of New York’s Central Park. Walk up to the Kondiaronk Belvedere for the classic view over downtown and the river. Sunday “Tam-Tams” drumming gatherings take place by the monument in summer.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Best view', level: 'gold' }],
      details: {
        "lead": "The mountain at the heart of the city, landscaped as a park by Frederick Law Olmsted, the designer of New York’s Central Park.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Kondiaronk Belvedere",
                "text": "The classic view over downtown and the river."
              },
              {
                "title": "Tam-Tams",
                "text": "Drumming gatherings by the monument on summer Sundays."
              },
              {
                "title": "Free",
                "text": "The park is free to enter."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Walk up",
                "text": "It is a walk up from the Plateau or downtown."
              },
              {
                "title": "Summer",
                "text": "The Tam-Tams run in summer, so there is nothing at this time of year."
              },
              {
                "title": "Dress warm",
                "text": "Winter on the mountain can be cold and icy."
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
            "text": "On foot from the Plateau or downtown."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Montréal tourism",
          "url": "https://www.mtl.org/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Old Montréal',
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      text: 'The oldest part of the city, with stone buildings from the French and British regimes, Notre-Dame Basilica and its blue-and-gold interior, and the Old Port along the river. Beautiful early in the morning; crowded on summer afternoons.',
      tags: [{ label: 'Walkable', level: 'blue' }, { label: 'Basilica: paid', level: 'gold' }],
      details: {
        "lead": "The oldest part of the city, with stone buildings from the French and British regimes, Notre-Dame Basilica and the Old Port.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Basilica hours",
                "text": "Monday to Saturday 9 am–4 pm and Sunday 12:30–4 pm."
              },
              {
                "title": "Daytime admission",
                "text": "Adults $16, seniors $15, students $14, children (6–16) $10, plus tax."
              },
              {
                "title": "AURA",
                "text": "An evening show from $37 for adults, plus tax; a separate ticket."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Go early",
                "text": "Beautiful early in the morning; crowded on summer afternoons."
              },
              {
                "title": "AURA prices",
                "text": "Third-party sites quote different prices; confirm for your date."
              },
              {
                "title": "Closures",
                "text": "The basilica closes early on some days; check the official site."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Streets free; basilica from $16."
          },
          {
            "label": "Getting there",
            "text": "Metro to Place-d’Armes."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "Notre-Dame Basilica",
          "url": "https://www.basiliquenotredame.ca/en/hours-and-rates"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Festival Season',
      icon: '🎷', iconSrc: '/icons/attractions/ph_music-note-thin.svg',
      text: 'Montréal runs festivals almost every week of summer — the International Jazz Festival, Just for Laughs, the fireworks competition and more — many with free outdoor stages in the Quartier des Spectacles. Winter has its own, with Montréal en Lumière and Igloofest.',
      tags: [{ label: 'Summer peak', level: 'gold' }, { label: 'Many free shows', level: 'safe' }],
      details: {
        "lead": "Montréal runs festivals almost every week of summer, many with free outdoor stages in the Quartier des Spectacles, and winter has its own.",
        "columns": [
          {
            "title": "Dates",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Jazz Festival 2027",
                "text": "June 25 to July 4, 2027."
              },
              {
                "title": "Just for Laughs",
                "text": "Mid to late July in 2026 (July 14 or 15 to 26); 2027 dates not confirmed."
              },
              {
                "title": "Winter",
                "text": "Igloofest January 14 to February 6, 2027; Montréal en Lumière February 18 to 28, 2027."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Fireworks",
                "text": "The 2026 fireworks competition dates were not confirmed; check the organizer."
              },
              {
                "title": "Free stages",
                "text": "Many outdoor stages are free."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Many events are free; headliners are ticketed."
          },
          {
            "label": "Getting there",
            "text": "Quartier des Spectacles, downtown."
          },
          {
            "label": "Best time",
            "text": "Summer for the festivals; February for Montréal en Lumière."
          }
        ],
        "link": {
          "label": "Montréal summer festival guide",
          "url": "https://www.mtl.org/en/experience/montreal-summer-festival-guide"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bagels, Smoked Meat & Poutine',
      icon: '🥯', iconSrc: '/icons/attractions/ph_cookie-thin.svg',
      text: 'Wood-fired, honey-boiled Montréal bagels from the Mile End bakeries, smoked meat sandwiches downtown, and poutine at any hour. Montréal food is a serious reason to visit.',
      tags: [{ label: 'Food', level: 'danger' }, { label: 'Cheap eats', level: 'safe' }],
      details: {
        "lead": "Wood-fired, honey-boiled Montréal bagels from the Mile End bakeries, smoked meat sandwiches downtown, and poutine at any hour.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bagels",
                "text": "The Mile End bakeries are the classic source."
              },
              {
                "title": "Smoked meat",
                "text": "Sandwiches downtown."
              },
              {
                "title": "Poutine",
                "text": "Available at any hour in many places."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Jean-Talon Market",
                "text": "Open year-round for produce, cheese and street food; Monday to Saturday 8 am–6 pm."
              },
              {
                "title": "Check hours",
                "text": "Individual shops set their own hours."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Mile End, downtown and across the city."
          },
          {
            "label": "Time to allow",
            "text": "A morning or an evening."
          }
        ],
        "link": {
          "label": "Montréal tourism",
          "url": "https://www.mtl.org/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Olympic Park, Biodôme & Botanical Garden',
      icon: '🌺', iconSrc: '/icons/attractions/ph_flower-thin.svg',
      text: 'In the east end: the 1976 Olympic Stadium with its inclined tower, the Biodôme’s indoor ecosystems, and one of the largest botanical gardens in the world, with Chinese and Japanese gardens and a First Nations Garden.',
      tags: [{ label: 'Paid entry', level: 'gold' }, { label: 'Family', level: 'blue' }],
      details: {
        "lead": "In the east end: the 1976 Olympic Stadium, the Biodôme’s indoor ecosystems and one of the largest botanical gardens in the world.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "The Biodôme, Insectarium, Botanical Garden and Biosphère run about 9 am–6 pm; weekly hours vary."
              },
              {
                "title": "Admission",
                "text": "One museum was listed at $25.50 for adults, $18.50 for CMM residents and $13.50 for ages 5–17; family $68; under 4 free."
              },
              {
                "title": "Gardens",
                "text": "The Botanical Garden has Chinese and Japanese gardens and a First Nations Garden."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Check prices",
                "text": "The price page is old; confirm on espacepourlavie.ca."
              },
              {
                "title": "Accès Montréal",
                "text": "Cardholders get reduced rates, adults from $15.50."
              },
              {
                "title": "Packages",
                "text": "A five-museum package was listed for groups at $68."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $25 for adults per museum."
          },
          {
            "label": "Getting there",
            "text": "Metro Green Line to Viau or Pie-IX."
          },
          {
            "label": "Time to allow",
            "text": "A half day per museum."
          }
        ],
        "link": {
          "label": "Space for Life",
          "url": "https://espacepourlavie.ca/en"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Jean-Talon Market',
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'One of the largest open-air public markets in North America, in Little Italy — produce, Québec cheeses, maple products and street food, open year-round.',
      tags: [{ label: 'Free to browse', level: 'safe' }, { label: 'Year-round', level: 'olive' }],
      details: {
        "lead": "One of the largest open-air public markets in North America, in Little Italy, open year-round.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Monday to Saturday 8 am–6 pm and Sunday 8 am–5 pm; closed a few days around Christmas."
              },
              {
                "title": "December 2026",
                "text": "Friday and Saturday 10 am–6 pm and Sunday 10 am–5 pm, per the events listing."
              },
              {
                "title": "Indoors in winter",
                "text": "The market puts up its walls in October; outdoor aisles reopen in late April."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Car-free summer",
                "text": "From June to October, aisles are closed to cars Thursday to Sunday, 11 am–5 pm."
              },
              {
                "title": "Parking",
                "text": "The lots open from 7:30 am and close at 6:30 pm Monday to Wednesday."
              },
              {
                "title": "Conflicting hours",
                "text": "Some sites list later closing; the official page is the reliable one."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter."
          },
          {
            "label": "Getting there",
            "text": "7070 Henri-Julien Avenue."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "Jean-Talon Market",
          "url": "https://www.marchespublics-mtl.com/en/markets/jean-talon-market"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Mountain, River and Bike Paths',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Cycling', dist: 'City-wide', text: 'Montréal has one of the most extensive bike networks in North America, with separated lanes and the BIXI bike-share system in the warm months.' },
    { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Mount Royal', dist: 'Central', text: 'Trails, stairs and the summit belvedere. In winter, cross-country skiing and snowshoeing on the mountain.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Lachine Canal', dist: 'Southwest', text: 'A historic canal turned linear park, with a cycling path and kayak rentals.' },
    { icon: '🏄', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'River Surfing', dist: 'Lachine Rapids', text: 'A standing wave in the St. Lawrence lets people surf in the middle of the city. Lessons only — the current is dangerous.' },
    { icon: '⛸️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Skating', dist: 'Parks citywide', text: 'Outdoor rinks open across the city in winter, including at the Old Port and Lac aux Castors on the mountain.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall Colours', dist: 'Mount Royal · Laurentians', text: 'Maples turn brilliant red in early October, on the mountain and in the Laurentians an hour north.' },
  ],

  food: [
    { icon: '🥯', iconSrc: '/icons/attractions/ph_cookie-thin.svg', title: 'Bagels', area: 'Mile End', areaLevel: 'gold', text: 'Two rival bakeries open around the clock — small, dense, honey-boiled and wood-fired.' },
    { icon: '🥪', iconSrc: '/icons/attractions/ph_bread-thin.svg', title: 'Smoked Meat', area: 'Downtown · Plateau', areaLevel: 'danger', text: 'Brined, spiced and piled high on rye — a Jewish-Montréal classic.' },
    { icon: '🍟', iconSrc: '/icons/attractions/ph_hamburger-thin.svg', title: 'Poutine', area: 'City-wide', areaLevel: 'olive', text: 'Fries, cheese curds and gravy, from greasy spoons to fancy versions.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Bistros & BYOB', area: 'Plateau', areaLevel: 'purple', text: 'Many restaurants are “apportez votre vin” — bring your own wine from the SAQ or a dépanneur.' },
    { icon: '🧀', iconSrc: '/icons/attractions/ph_cheese-thin.svg', title: 'Québec Cheese & Maple', area: 'Markets', areaLevel: 'safe', text: 'Local cheeses and maple products at Jean-Talon and Atwater markets.' },
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: 'Global Food', area: 'City-wide', areaLevel: 'blue', text: 'Haitian, Lebanese, Vietnamese, Portuguese and many more communities feed the city.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 4, note: 'Terraces open', text: 'A messy thaw in April, then a sudden burst of green and the return of café terraces in May. Sugar-shack season in the countryside in March–April.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Hot and humid, with a festival nearly every week. Book accommodation well ahead for the Grand Prix and the Jazz Festival.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Colour and comfort', text: 'Cool, clear days and red maples on the mountain. One of the best times to visit.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 3, note: 'Cold and snowy', text: 'Long, cold and snowy, with −20 °C spells. The underground city, winter festivals and skating make it work — dress for it.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Montréal-Trudeau (YUL)',
      text: 'The 747 bus runs 24/7 between the airport and downtown; a 24-hour STM pass covers it. The REM light-metro link to the airport is still under construction.',
      time: '≈45–70 min to downtown by bus',
    },
    {
      icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train — VIA Rail',
      text: 'Frequent trains on the Québec City–Windsor corridor arrive at Central Station downtown, under the Queen Elizabeth hotel.',
      time: '≈5h from Toronto · ≈2h from Ottawa',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car',
      text: 'Highways 20 and 40 from Toronto and Québec City. Bridges onto the island jam at rush hour and summer roadwork is legendary. Parking downtown is expensive.',
      time: '≈5h from Toronto',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'Intercity coaches arrive at the downtown bus station from Toronto, Ottawa, Québec City and New York.',
      time: '≈2–7h',
    },
  ],

  stay: [
    {
      icon: '⛪', iconSrc: '/icons/attractions/ph_church-thin.svg',
      title: 'Old Montréal',
      area: 'Historic · Pricier',
      text: 'Boutique hotels in stone buildings near the basilica and the Old Port.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Old+Montreal', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Montreal%2C%20Quebec', level: 'gold' },
      ],
    },
    {
      icon: '🎭', iconSrc: '/icons/attractions/ph_mask-happy-thin.svg',
      title: 'Downtown',
      area: 'Central · Metro access',
      text: 'Big hotels near the festivals, shopping and the underground city.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Montreal', level: 'blue' },
      ],
    },
    {
      icon: '🪜', iconSrc: '/icons/attractions/ph_stairs-thin.svg',
      title: 'Plateau & Mile End',
      area: 'Local feel',
      text: 'Small hotels and short-term rentals among cafés and staircases. Check the rental is legally registered.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Plateau+Mont-Royal', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'STM Métro & Buses',
      text: 'Four métro lines and a dense bus network cover the island, linked to the underground city. The REM light metro serves the West Island, the South Shore and the North Shore. Rubber-tired métro trains are quiet and frequent.',
      linkLabel: 'STM',
      linkUrl: 'https://www.stm.info/en',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares (Zone A)',
        text: 'Single, 10-trip and monthly fares are Zone A prices from the ARTM grid in force since 1 July 2026; the 24-hour price is from the STM fares page. The 24-hour, 3-day and weekend passes also cover the 747 airport bus. Children 11 and under ride free with an adult.',
        fareBox: {
          label: 'Zone A',
          lines: ['1 trip: $3.75', '10 trips: $35', '24 hours: $11.25', 'Monthly: $110 (from 1 Jul 2026)', '3-day and weekend passes: check stm.info'],
        },
        linkLabel: 'STM fares',
        linkUrl: 'https://www.stm.info/en/info/fares/transit-fares',
      },
      {
        icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg',
        title: 'BIXI Bike Share',
        text: 'Thousands of shared bikes, including e-bikes, at stations across the city from spring to fall.',
        fareBox: {
          label: 'BIXI',
          lines: ['Seasonal (spring–fall)', 'Single rides or passes', 'Pay in the app'],
        },
        linkLabel: 'BIXI',
        linkUrl: 'https://bixi.com/en/',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'Old Montréal, downtown and the Plateau are very walkable.' },
          { icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', title: 'Underground City', text: 'Kilometres of tunnels link métro stations, malls and buildings — useful in winter.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Widely available.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Car', text: 'Not needed in the city; parking and roadwork make driving slow.' },
        ],
      },
    ],
    proTip: {
      label: 'Airport tip:',
      text: 'Buy a 24-hour pass on arrival: it covers the 747 bus downtown and unlimited métro rides for the rest of the day, for the same price as a single 747 ticket.',
    },
  },

  taxInfo: {
    totalTaxPercent: '14.975%',
    headline: 'Quebec: 5% GST + 9.975% QST',
    headlineLevel: 'purple',
    description:
      'Most purchases carry 5% GST plus 9.975% QST, for 14.975% in total. Hotels and short-term rentals add Quebec’s 3.5% lodging tax per night for stays under 31 days, and GST and QST are calculated on the price including it. Prices are usually shown before tax.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Montréal / Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple', highlight: true },
      { label: 'Nova Scotia', percent: '14%', note: 'HST combined', example: '$100 → pay $114', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: 3.5% lodging tax + GST + QST' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST + QST' },
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Wine and alcohol: GST + QST' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Festival and museum tickets: GST + QST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
      { icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', label: 'Mount Royal and many festival stages: free' },
      { icon: '🛏️', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Stays of 31+ nights: no lodging tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill (card terminals often suggest more). Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🗣️', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'French First', text: 'French is the official language and the default everywhere. Most people in central Montréal also speak English; a “bonjour” first is appreciated.' },
    { icon: '🚧', iconSrc: '/icons/attractions/ph_traffic-cone-thin.svg', title: 'Orange Cones', text: 'Summer roadwork is everywhere. Allow extra time when driving and check detours.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Winter Gear', text: 'Bring a proper coat, hat, gloves and boots with grip from December to March.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'BYOB Restaurants', text: 'Many restaurants let you bring your own wine. Buy it at the SAQ or a dépanneur.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Eastern Time: UTC-5 in winter, UTC-4 in summer. Quebec changes its clocks.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Get an OPUS Card', text: 'For longer stays, a reloadable OPUS card makes métro and bus travel easier.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Montréal is Tiohtià:ke, a historic meeting place of many Indigenous nations. The Kanien’kehá:ka (Mohawk) of Kahnawà:ke and Kanehsatà:ke are the closest communities today.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Montreal General Hospital', '1650 Cedar Avenue', 'Emergencies: call 911'] },
  ],
};

export default MONTREAL;
