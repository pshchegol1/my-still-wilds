// Abbotsford — данные страницы /city/abbotsford
// Видео города в бесплатных банках нет: Pexels по "abbotsford" отдаёт
// случайные пригороды и Новую Зеландию, Pixabay и Wikimedia Commons —
// ничего. Поэтому в шапке фото: тюльпанные поля Abbotsford Tulip
// Festival на фоне горы Сумас, присланное пользователем. Подпись автора
// не нужна, heroCredit не задан.
// Население — оценка StatCan на 1 июля 2025, а не перепись; в тексте
// сказано, чья это цифра. Тарифы BC Transit менялись 6 сентября 2026,
// и на сайте перевозчика дата вступления не указана, поэтому везде
// сказано сверяться перед поездкой.

export const ABBOTSFORD = {
  slug: 'abbotsford',
  name: 'Abbotsford',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Fraser Valley',
  accentLevel: 'olive',
  heroIcon: '🌷',
  heroImage: '/Cities/Abbotsford/hero.jpg',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.0504, lon: -122.3045 },
  subtitle: 'The City in the Country',
  description:
    'Canada’s farming capital by value, wrapped around an airport and spread across the widest part of the Fraser Valley. Roughly seven tenths of Abbotsford is protected farmland, Mount Baker fills the southern sky, and the flat ground east of town is a lake that was drained a century ago — and came back for two weeks in November 2021.',

  actions: [
    { label: 'Explore Abbotsford', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈175K' },
    { label: 'Climate', value: 'Oceanic · Wet' },
    { label: 'Land in the ALR', value: '≈72%' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'From Vancouver', value: '≈70 km · 1h' },
    { label: 'To the US Border', value: '≈10 min' },
  ],

  badges: ['Farming Capital', 'Fraser Valley', 'Stó:lō Territory'],

  bestSeasons: [
    { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'gold', rating: 5 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'olive', rating: 4 },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '≈72%', label: 'Of the city’s land sits inside the Agricultural Land Reserve — farming is not a fringe here, it is the plan', level: 'olive' },
    { value: '1911', label: 'The Gur Sikh Temple, the oldest surviving gurdwara in North America and a National Historic Site', level: 'gold' },
    { value: '1924', label: 'The year Sumas Lake was finished being drained for farmland — it flooded back in November 2021', level: 'blue' },
    { value: '~$1B', label: 'In annual farm gate receipts from the region’s farms, the highest concentration in the country', level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Historic Downtown', image: '/Cities/Abbotsford/Historic Downtown.jpg', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'The old core', tagLevel: 'gold', meta: 'Essendene Avenue · Independent shops and cafés · Jubilee Park · Walkable',
      details: {
        "lead": "The old core of the city, around Essendene Avenue, with independent shops, cafés and Jubilee Park. The Reach Gallery Museum is here too.",
        "see": [
          {
            "title": "The Reach Gallery Museum",
            "text": "32388 Veterans Way. A November 2025 report gave Tuesday, Wednesday and Friday 10 am–5 pm, Thursday 10 am–8 pm, Saturday noon–5 pm, closed Sunday and Monday. Admission is free or by donation, though some special exhibitions may be ticketed. The Abbotsford Archives is based here."
          },
          {
            "title": "Essendene Avenue",
            "text": "The main street of the old centre, with independent shops and cafés in a walkable stretch."
          },
          {
            "title": "Jubilee Park",
            "text": "A park in the old centre, near the shops on Essendene Avenue."
          }
        ],
        "eat": [
          {
            "title": "Independent cafés",
            "text": "The old core is where the independent cafés and small shops cluster, a contrast with the malls on South Fraser Way."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Central Abbotsford; the old core is compact and walkable."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours for the street and the museum."
          },
          {
            "label": "Good to know",
            "text": "Gallery hours differ between sources; check thereach.ca or call 604-864-8087."
          }
        ],
        "link": {
          "label": "The Reach Gallery Museum",
          "url": "https://www.thereach.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'West Abbotsford & Clearbrook', image: '/Cities/Abbotsford/West Abbotsford & Clearbrook.jpg', icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', tag: 'Busiest', tagLevel: 'blue', meta: 'South Fraser Way · Shopping · Gurdwaras · Most of the city’s services',
      details: {
        "lead": "The busiest part of the city, along South Fraser Way, with the main shopping, services and several gurdwaras. The Gur Sikh Temple National Historic Site is here.",
        "see": [
          {
            "title": "Gur Sikh Temple",
            "text": "33089 South Fraser Way. Hours differ between sources: seven days, 9:30 am–4:30 pm in one, weekdays 9 am–4 pm for the museum in another. Call 604-850-7338 to confirm."
          },
          {
            "title": "Sikh Heritage Museum",
            "text": "Next to the temple, telling the story of the community that built it."
          },
          {
            "title": "Highstreet",
            "text": "The shopping centre exchange is the hub for the BC Transit Airshow Shuttle in August."
          }
        ],
        "eat": [
          {
            "title": "South Fraser Way",
            "text": "Restaurants and shopping centres line the main road."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The western half of the city, along South Fraser Way."
          },
          {
            "label": "Visiting the temple",
            "text": "It is an active place of worship. Cover your head before entering, and ask at the entrance about shoes and the community meal."
          },
          {
            "label": "Time to allow",
            "text": "An hour for the temple and museum."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford: Sikh Heritage Museum",
          "url": "https://tourismabbotsford.ca/listing/sikh-heritage-museum/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'East Abbotsford', image: '/Cities/Abbotsford/East Abbotsford.jpg', icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg', tag: 'Hillside', tagLevel: 'safe', meta: 'Newer residential · Views over the valley · Closest to Sumas Mountain',
      details: {
        "lead": "Newer residential streets on the hillside with views over the valley, and the closest part of the city to Sumas Mountain.",
        "see": [
          {
            "title": "Sumas Mountain",
            "text": "The mountain on the eastern edge carries the main hiking network, including the climb to Chadsey Lake."
          },
          {
            "title": "Views over the valley",
            "text": "The hillside gives views over the Fraser Valley and the flat prairie below."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the hillside on the eastern edge of the city; a car helps."
          },
          {
            "label": "Best for",
            "text": "A base close to the mountain trails."
          },
          {
            "label": "Good to know",
            "text": "The valley trails are muddy from October to April, so boots, not trainers."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford",
          "url": "https://tourismabbotsford.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Clayburn Village', image: '/Cities/Abbotsford/Clayburn Village.jpg', icon: '🧱', iconSrc: '/icons/attractions/ph_wall-thin.svg', tag: 'Heritage', tagLevel: 'danger', meta: 'BC’s first company town · Brick houses from 1905–08 · Village store and tearoom',
      details: {
        "lead": "BC's first company town, built for the brickworks workers, with a village store and tearoom. It is classified as the municipally designated Clayburn Village Heritage Conservation Area.",
        "see": [
          {
            "title": "The brick houses",
            "text": "A row of company brick houses from before 1909 gives the village a unity of appearance said to be unique in BC."
          },
          {
            "title": "Heritage conservation area",
            "text": "The designation covers the village and the brick plant site."
          },
          {
            "title": "Church and schoolhouse",
            "text": "Part of the original company-town layout."
          }
        ],
        "eat": [
          {
            "title": "Clayburn Village Store",
            "text": "34810 Clayburn Road. Listings give Tuesday to Saturday, 10 am–5 pm, with a tea room serving homemade scones, soups and lunch. Seasonal closures (January, mid-May to mid-June and September in some listings) vary, so check clayburnvillagestore.com or call (604) 853-4020."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the foot of Sumas Mountain, a short drive east of central Abbotsford."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a walk and tea."
          },
          {
            "label": "Good to know",
            "text": "Small village; the store and tea room are the usual stop."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford: Clayburn Village General Store",
          "url": "https://tourismabbotsford.ca/listing/clayburn-village-general-store/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Sumas Prairie', image: '/Cities/Abbotsford/Sumas Prairie.jpg', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'The old lakebed', tagLevel: 'caution', meta: 'Dead-flat farmland below sea level · Dairy and berry farms · Flood country',
      details: {
        "lead": "Dead-flat farmland on the bed of the former Sumas Lake, a 134 square kilometre lake until it was drained in the 1920s. Dairy and berry farms now cover it, and it is flood country.",
        "see": [
          {
            "title": "The old lakebed",
            "text": "Driving Highway 1 across the prairie, you are crossing a lakebed. Semá:th X̲ó:tsa was drained between 1920 and 1924."
          },
          {
            "title": "Barrowtown pump station",
            "text": "The province has committed $76.6 million to upgrade the pump station that helps handle floodwater from the Sumas and Nooksack rivers."
          },
          {
            "title": "Flood planning",
            "text": "A $3.3 million Sumas River Watershed Flood Mitigation Planning Initiative involves the province, three First Nations including the Semá:th, and the cities of Abbotsford and Chilliwack."
          }
        ],
        "eat": [
          {
            "title": "Farm stands",
            "text": "Dairy and berry farms sell direct in season; check farm stand hours before you drive out."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "South of the city centre; the Trans-Canada runs across the prairie."
          },
          {
            "label": "The debate",
            "text": "A study put the cost of restoring part of the lake against rebuilding dikes. The city has proposed a $700 million pump station, and the larger projects had not been approved at the time of writing."
          },
          {
            "label": "Good to know",
            "text": "The 2021 floods are still in living memory; be respectful when visiting affected farms."
          }
        ],
        "link": {
          "label": "BC government: Sumas Prairie flood planning",
          "url": "https://news.gov.bc.ca/releases/2026EMCR0002-000081"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Bradner & Mount Lehman', image: '/Cities/Abbotsford/Bradner & Mount Lehman.jpg', icon: '🌼', iconSrc: '/icons/attractions/ph_flower-thin.svg', tag: 'Rural west', tagLevel: 'purple', meta: 'Daffodil fields · Back roads · Flower show in April · Farm stands',
      details: {
        "lead": "The rural west of the city, with daffodil fields, back roads, farm stands and most of Abbotsford’s wineries. Bradner hosts a flower show every April.",
        "see": [
          {
            "title": "Bradner Flower Show",
            "text": "The 96th show ran April 10–12, 2026 at Bradner Community Hall (5305 Bradner Road), 10 am–4 pm daily, with admission of $2.50. The 2026 theme was A Fairy Garden."
          },
          {
            "title": "Farm stops",
            "text": "Taves Farms Applebarn and Tuscan Farm Gardens, a lavender farm on Mt Lehman Road, are among the stops on the self-guided Circle Farm Tour of 20+ farm stores, wineries and dairies."
          }
        ],
        "eat": [
          {
            "title": "Mt. Lehman Winery",
            "text": "5094 Mount Lehman Road, noted for lower-alcohol bottles and walk-in tastings."
          },
          {
            "title": "Seaside Pearl Farmgate Winery",
            "text": "Tastings are by appointment only."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Northwest of the city centre; a car is needed."
          },
          {
            "label": "Best time",
            "text": "April for the flower show; summer and fall for farm stands."
          },
          {
            "label": "Good to know",
            "text": "Tasting-room hours change, and some sources are several years old, so check before you visit."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford",
          "url": "https://tourismabbotsford.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Gur Sikh Temple',
      icon: '🛕', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: 'Built by Sikh millworkers and opened in 1911, using lumber from the mill where many of them worked. It is the oldest surviving gurdwara in North America and a National Historic Site — Parks Canada designated it in 2002. The adjoining Sikh Heritage Museum tells the story of the community that built it, including the exclusion laws it was built under. Still an active place of worship: cover your head and remove your shoes.',
      tags: [{ label: 'National Historic Site', level: 'gold' }, { label: 'Active gurdwara', level: 'danger' }],
      details: {
        "lead": "Opened in 1911 and the oldest surviving gurdwara in North America, at 33089 South Fraser Way. The adjoining Sikh Heritage Museum tells the story of the community that built it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "National Historic Site",
                "text": "Parks Canada designated the temple in 2002."
              },
              {
                "title": "Sikh Heritage Museum",
                "text": "Tells the story of the community, including the exclusion laws it was built under."
              },
              {
                "title": "Hours",
                "text": "Sources disagree: seven days, 9:30 am–4:30 pm in one; Monday to Friday, 9 am–4 pm for the museum in another. Call 604-850-7338."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Respect",
                "text": "It is an active place of worship. Cover your head before entering."
              },
              {
                "title": "Ask at the door",
                "text": "Ask staff about shoes, photography and the community meal (langar)."
              },
              {
                "title": "Admission",
                "text": "No general admission fee was found, but confirm on arrival."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "No fee found; confirm on arrival."
          },
          {
            "label": "Getting there",
            "text": "On South Fraser Way in West Abbotsford."
          },
          {
            "label": "Time to allow",
            "text": "About an hour with the museum."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford: Sikh Heritage Museum",
          "url": "https://tourismabbotsford.ca/listing/sikh-heritage-museum/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sumas Prairie & the Lake That Returned',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'Semá:th X̲ó:tsa — Sumas Lake — fed the Semá:th people for generations until it was drained between 1920 and 1924 and turned into farmland. In November 2021 an atmospheric river sent the Nooksack River over the border, the dike failed, and the lake refilled; about 1,100 Abbotsford homes were evacuated. A 2024 study by UBC researchers and Semá:th members costed letting part of the lakebed return at under half the price of rebuilding the dikes. The city’s position remains flood prevention. Driving Highway 1 across the prairie, you are crossing a lakebed.',
      tags: [{ label: 'Contested', level: 'danger' }, { label: 'Drive-through', level: 'blue' }],
      details: {
        "lead": "Semá:th X̲ó:tsa, Sumas Lake, was a 134 square kilometre lake until it was drained between 1920 and 1924. Farmland now covers the lakebed, and the flood-protection debate is unresolved.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The 2021 flood",
                "text": "An atmospheric river in November 2021 sent the Nooksack River over the border, the dike failed and the lake refilled."
              },
              {
                "title": "Pump station",
                "text": "The province committed $76.6 million to upgrade the Barrowtown pump station."
              },
              {
                "title": "Restoration study",
                "text": "A Frontiers study rated the 16.7 km Sumas Lake Reclamation dike as in unacceptable condition and laid out options with costs from about $209 million to $2.4 billion."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "City position",
                "text": "Abbotsford has proposed a $700 million pump station, new dikes and a floodway. The larger projects had not been approved."
              },
              {
                "title": "Planning",
                "text": "A $3.3 million planning initiative brings together the province, three First Nations and two cities."
              },
              {
                "title": "Be respectful",
                "text": "Many farms were badly affected in 2021; keep to public roads."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free; it is a drive-through."
          },
          {
            "label": "Getting there",
            "text": "Highway 1 crosses the prairie."
          },
          {
            "label": "Time to allow",
            "text": "It is a landscape to drive through, not a destination."
          }
        ],
        "link": {
          "label": "BC government: Sumas Prairie flood planning",
          "url": "https://news.gov.bc.ca/releases/2026EMCR0002-000081"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Clayburn Village',
      icon: '🧱', iconSrc: '/icons/attractions/ph_wall-thin.svg',
      text: 'British Columbia’s first company town, built between 1905 and 1908 at the foot of Sumas Mountain for the workers of the brickworks. Its bricks went into landmarks across the province. Seven of the original company brick houses still stand, along with the church and schoolhouse, in a designated heritage conservation area. The village store and tearoom are the usual reason people stop.',
      tags: [{ label: 'Heritage area', level: 'gold' }, { label: 'Small', level: 'blue' }],
      details: {
        "lead": "British Columbia's first company town, built between 1905 and 1908 at the foot of Sumas Mountain for the brickworks workers. It is the municipally designated Clayburn Village Heritage Conservation Area.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Brick houses",
                "text": "A row of company brick houses from before 1909 has a unity of appearance said to be unique in BC."
              },
              {
                "title": "Village store and tea room",
                "text": "34810 Clayburn Road. Homemade scones, soups and lunch."
              },
              {
                "title": "Heritage area",
                "text": "Covers the village and the brick plant site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Listings give Tuesday to Saturday, 10 am–5 pm, with closures in some months. Check clayburnvillagestore.com or call (604) 853-4020."
              },
              {
                "title": "Small place",
                "text": "Plan an hour for a walk and tea."
              },
              {
                "title": "Pair it",
                "text": "Sumas Mountain trailheads are close."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to walk; the store and tea room charge."
          },
          {
            "label": "Getting there",
            "text": "A short drive east of central Abbotsford."
          },
          {
            "label": "Time to allow",
            "text": "About an hour."
          }
        ],
        "link": {
          "label": "Tourism Abbotsford: Clayburn Village",
          "url": "https://tourismabbotsford.ca/listing/clayburn-village-general-store/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Abbotsford International Airshow',
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      text: 'Three days every August at the airport, and one of the largest annual events in British Columbia. Tickets usually sell out in advance and the roads around the airport jam badly on the weekend — buy early, arrive early, and plan the exit before you need it.',
      tags: [{ label: 'August', level: 'caution' }, { label: 'Book ahead', level: 'danger' }],
      details: {
        "lead": "Three days every August at Abbotsford International Airport. The 2026 show ran Friday, August 7 to Sunday, August 9.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 schedule",
                "text": "One listing gave Friday as a twilight show (gates 2 pm to 10 pm) and Saturday and Sunday as daytime shows (gates 9 am to 5 pm)."
              },
              {
                "title": "Tickets",
                "text": "One source listed adults at $39.99 in advance and $60 at the gate, and youth at $19.99 in advance and $30 at the gate. Children 5 and under were free."
              },
              {
                "title": "Shuttle",
                "text": "BC Transit ran a special Airshow Shuttle from the Highstreet Mall exchange."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Next year",
                "text": "2027 dates have not been confirmed; check abbotsfordairshow.com."
              },
              {
                "title": "Book early",
                "text": "Tickets often sell out in advance, and the roads around the airport jam on the weekend."
              },
              {
                "title": "Parking",
                "text": "Onsite carload passes started at $89.99 online in one listing; walk-in parking passes ran $14.99 to $25."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Prices differ by source; check the official site."
          },
          {
            "label": "Getting there",
            "text": "The airport at Townline Road; the address is listed as 1583 or 1595 Townline Road, so use the official site."
          },
          {
            "label": "Best time",
            "text": "The first weekend of August is typical."
          }
        ],
        "link": {
          "label": "Abbotsford International Airshow",
          "url": "https://abbotsfordairshow.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Tulip & Daffodil Fields',
      icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      text: 'Spring here is a commercial flower crop before it is a tourist attraction. The tulip festival fields run roughly April into May, and out at Bradner the daffodil farms have supported a flower show since 1928 — it began in one man’s parlour and now shows hundreds of daffodil varieties. Both are weather-dependent and dated differently each year; check before driving out.',
      tags: [{ label: 'April — May', level: 'gold' }, { label: 'Ticketed', level: 'caution' }],
      details: {
        "lead": "Spring here is a commercial flower crop before it is a tourist attraction. The Bradner Flower Show and the Abbotsford Tulip Festival were the 2026 highlights.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Bradner Flower Show",
                "text": "April 10–12, 2026, 10 am–4 pm at Bradner Community Hall (5305 Bradner Road), $2.50 admission. The 96th show had hundreds of daffodils, most unusual varieties grown locally."
              },
              {
                "title": "Abbotsford Tulip Festival",
                "text": "Run by Lakeland Flowers at 3663 Marion Road. Sources gave the 2026 dates as roughly mid-April to early or mid-May."
              },
              {
                "title": "Admission",
                "text": "One listing gave $20 for the tulip festival; no official price was found."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Weather-dependent",
                "text": "Bloom dates move with the weather. Check Lakeland Flowers and the Bradner Barker before driving out."
              },
              {
                "title": "Next year",
                "text": "2027 dates were not yet posted."
              },
              {
                "title": "Farm stops",
                "text": "Combine it with the Circle Farm Tour in Bradner and Mount Lehman."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; about $2.50 for the flower show and about $20 for the tulips in one listing."
          },
          {
            "label": "Getting there",
            "text": "By car; the fields are on rural roads."
          },
          {
            "label": "Best time",
            "text": "April into early May."
          }
        ],
        "link": {
          "label": "Bradner Barker: flower show",
          "url": "https://www.bradnerbarker.com/news/category/flower-show"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Sumas Mountain & the Trails',
      icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg',
      text: 'The mountain on the city’s eastern edge carries the main hiking network, including the long climb to Chadsey Lake. Lower down, Mill Lake Park sits in the middle of the city with an easy loop around the water. The valley trails are mud from October to April — this is boots country, not trainers.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Muddy in winter', level: 'blue' }],
      details: {
        "lead": "The mountain on the city’s eastern edge carries the main hiking network, including the climb to Chadsey Lake at about 660 m.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Chadsey Lake",
                "text": "From Sumas Mountain Regional Park AllTrails lists about 9 km out and back with roughly 520 m of climbing. Best Hikes BC gives 10.6 km and 680 m from the Sumas Mountain Road trailhead."
              },
              {
                "title": "Shorter loop",
                "text": "A loop via the Sumas Mountain Viewpoint is about 5.6 km with around 260 m of climbing, but the access road is rough."
              },
              {
                "title": "To the summit",
                "text": "Continuing to Sumas Mountain adds roughly 6 km and 230 m."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Mud",
                "text": "Valley trails are muddy from October to April; wear boots."
              },
              {
                "title": "Trailhead road",
                "text": "The road to the viewpoint is rough; high clearance is recommended."
              },
              {
                "title": "Distances vary",
                "text": "Different sources give different distances; use a map and allow 3.5 to 4 hours for the main route."
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
            "text": "On the city’s eastern edge; you need a car."
          },
          {
            "label": "Time to allow",
            "text": "3.5 to 4 hours for the main hike."
          }
        ],
        "link": {
          "label": "Best Hikes BC: Chadsey Lake",
          "url": "https://besthikesbc.ca/hiking-chadsey-lake-near-abbotsford/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Farmland, Floodplain and One Mountain',
  outdoor: [
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Sumas Mountain', dist: 'East edge of the city', text: 'The main hiking ground, with a steep forest climb to Chadsey Lake near the top. Wet roots and mud for much of the year; the summit views over the valley are the payoff.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Discovery Trail', dist: 'Through the city', text: 'A multi-use path threading the city between parks and neighbourhoods — the easiest way to see Abbotsford without a car, and flat for most of its length.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Mill Lake', dist: 'City centre', text: 'A small lake with a loop path, a playground and ducks, right in the middle of town. The default local walk, and busy on any dry evening.' },
    { icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', name: 'Farm Roads', dist: 'Sumas Prairie · Mount Lehman', text: 'The back roads through the farmland are flat, quiet and genuinely scenic, with Mount Baker across the border for a backdrop. They are working roads — expect tractors, and give them room.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Birding', dist: 'Sumas Prairie · Fraser lowlands', text: 'The prairie floods seasonally and draws raptors, swans and snow geese through the winter months. Watch from the road; the fields are private and in use.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Rain Planning', dist: 'October — March', text: 'The Fraser Valley catches the weather coming up from the coast, and the wet half of the year is persistent rather than dramatic. Waterproofs matter more than warm layers.' },
  ],

  food: [
    { icon: '🍓', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Berry Country', area: 'City-wide', areaLevel: 'danger', text: 'Raspberries and blueberries by the square kilometre — over a thousand hectares of raspberries alone. Farm stands and U-pick run roughly June to August, and the gate price is a fraction of the supermarket one.' },
    { icon: '🐄', iconSrc: '/icons/attractions/ph_cow-thin.svg', title: 'Dairy', area: 'Sumas Prairie · Matsqui', areaLevel: 'safe', text: 'This is one of the densest dairy districts in the country, and local cheese and ice cream show up on menus and at farm shops throughout the valley.' },
    { icon: '🍛', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Punjabi Food', area: 'Clearbrook · South Fraser Way', areaLevel: 'purple', text: 'Abbotsford’s Punjabi community is more than a century old, and the food reflects it — sweet shops, vegetarian dhabas and tandoori places concentrated in the west of the city.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Valley Wine & Cider', area: 'Rural edges', areaLevel: 'gold', text: 'A small Fraser Valley wine and cider scene, built on fruit rather than reputation. Tasting rooms are scattered across farmland, so plan a route and a driver.' },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Historic Downtown', area: 'Essendene Avenue', areaLevel: 'blue', text: 'The old main street holds most of the independent cafés, bakeries and restaurants. It is the one part of the city that works properly on foot.' },
    { icon: '🌽', iconSrc: '/icons/attractions/ph_grains-thin.svg', title: 'Farm Stands', area: 'Back roads', areaLevel: 'olive', text: 'Unstaffed roadside stands with an honesty box are normal here. Carry small cash — many of them have no other way to pay.' },
  ],

  seasons: [
    { icon: '🌷', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'March — May', level: 'gold', rating: 5, note: 'Flower season', text: 'Daffodils then tulips, fields of them, with the valley at its greenest. Still wet, and the flower dates move with the weather every year — confirm before driving out.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Berries and the airshow', text: 'Warm, dry and long — U-pick season, farm stands, and the airshow in August. Hot spells can be sharp and most older housing has no air conditioning.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'olive', rating: 4, note: 'Harvest, then rain', text: 'The harvest end of the year, often with settled weather early on. The rain returns properly by late October, and with it the flood-watch season.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Winter', months: 'November — February', level: 'blue', rating: 2, note: 'Wet and flood-prone', text: 'Mild, grey and persistently wet. Atmospheric rivers in November and December are a genuine hazard here, not a weather curiosity — the 2021 flood closed Highway 1 through the valley. Check DriveBC in heavy rain.' },
  ],

  gettingThere: [
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car — Highway 1',
      text: 'Abbotsford sits on the Trans-Canada about seventy kilometres east of Vancouver, roughly an hour outside rush hour and considerably more inside it. Highway 11 runs north to Mission across the Fraser and south to the border. The highway crosses Sumas Prairie east of the city — the stretch that closed under water in November 2021.',
      time: '≈1h from Vancouver (≈70 km)',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Abbotsford (YXX)',
      text: 'A real airport in the middle of the city, used mainly by low-cost carriers for domestic routes. For some trips it is cheaper and far quicker to get through than Vancouver, and parking is a fraction of the price. Route choice is limited, so compare both airports.',
      time: 'In the city · 10 min from downtown',
    },
    {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'By Bus',
      text: 'The FVX (route 66) links Abbotsford to the Carvolth exchange in Langley, where TransLink buses continue to the SkyTrain — the practical transit route in from Vancouver. Intercity coaches also serve the city. Plan on a transfer either way.',
      time: '≈1h45m from Vancouver via Carvolth',
    },
    {
      icon: '🛂', iconSrc: '/icons/attractions/ph_identification-card-thin.svg',
      title: 'From the United States',
      text: 'The Huntingdon crossing on Highway 11 sits at the south edge of the city, opposite Sumas, Washington. It is usually far quieter than the Peace Arch, which is why people from Vancouver sometimes drive out to use it. Check current wait times either way.',
      time: '≈10 min from the city centre',
    },
  ],

  stay: [
    {
      icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg',
      title: 'Clearbrook & South Fraser Way',
      area: 'Most choice · Car needed',
      text: 'Where most of the hotels are, along the main commercial strip and close to the airport. Convenient rather than charming.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Abbotsford+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Abbotsford%2C%20British%20Columbia', level: 'gold' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Historic Downtown',
      area: 'Walkable · Limited rooms',
      text: 'Fewer beds, but the one area where you can leave the car and walk to dinner. Book early in airshow week — the whole city fills.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Abbotsford+BC', level: 'blue' },
      ],
    },
    {
      icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg',
      title: 'Farm Stays & Harrison',
      area: 'Rural · Further out',
      text: 'The valley has farm guesthouses, and Harrison Hot Springs is about an hour further east if you want the resort end of the Fraser Valley.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Fraser+Valley+BC', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Central Fraser Valley Transit (BC Transit)',
      text: 'Abbotsford is not on the TransLink system — Compass cards and Metro Vancouver fares do not apply here. The local network is BC Transit’s Central Fraser Valley system, covering Abbotsford and Mission, plus the FVX express to Langley. It serves the main corridors reasonably and the farmland barely at all; outside the built-up core, this is a car city.',
      linkLabel: 'BC Transit — Central Fraser Valley',
      linkUrl: 'https://www.bctransit.com/central-fraser-valley/',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'Pay with the Umo app, a reloadable Umo card or contactless. Note that fares and products changed on 6 September 2026 and BC Transit’s own fares page does not state an effective date — treat the figures below as a guide and confirm the current price before you ride.',
        fareBox: {
          label: 'Listed fares',
          lines: ['Single ride: $2.75', 'FVX single ride: $5', 'DayPASS: $5.50', '30-day adult pass: $59', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '🚍', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Key Routes',
        text: 'Local routes radiate from the Bourquin and Highstreet exchanges across Abbotsford and over the river to Mission. The FVX is the one that matters for visitors without a car — it is the link towards Metro Vancouver.',
        fareBox: {
          label: 'Useful routes',
          lines: ['66 FVX — Abbotsford to Carvolth (Langley)', '2 — Bourquin to Clearbrook', '12 — McKee', '31/32 — Mission connections'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/central-fraser-valley/schedules-and-maps',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Rental Car', text: 'Effectively required to see the farmland, Clayburn, Bradner or the mountain trailheads. Parking across the city is easy and mostly free.' },
          { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Airport Access', text: 'YXX is inside the city, so a taxi from most hotels is short. Transit to the airport exists but is infrequent — check the schedule rather than assuming.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxis & Rideshare', text: 'Both operate, though coverage thins in the rural areas and late at night.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Discovery Trail', text: 'The city’s multi-use path makes cycling between the central neighbourhoods genuinely practical. The farm roads beyond are flat but carry fast traffic.' },
        ],
      },
    ],
    proTip: {
      label: 'Airport tip:',
      text: 'If you are flying domestically, price Abbotsford (YXX) against Vancouver (YVR) before booking. The security line is a different world, parking is cheap, and for Fraser Valley destinations it saves an hour of driving at each end.',
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
      { label: 'BC / Abbotsford', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'gold', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', label: 'Beer, wine and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Lodging: GST + 8% PST + up to 3% MRDT' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and gear: 12%' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology: 12%' },
      { icon: '⛽', iconSrc: '/icons/attractions/ph_gas-pump-thin.svg', label: 'Fuel: carries its own motor fuel taxes on top' },
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
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: around 10%. Farm stands and honesty boxes are not tipped — pay the posted price.',
  },

  practical: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Flood Season', text: 'November and December bring atmospheric rivers to this valley, and Sumas Prairie sits below sea level behind dikes. The 2021 flood cut Highway 1 and evacuated about 1,100 homes. In heavy rain, check DriveBC and the city’s emergency notices before travelling across the prairie.' },
    { icon: '☔', iconSrc: '/icons/attractions/ph_umbrella-thin.svg', title: 'Rain Gear', text: 'From October to March, assume rain. Trails turn to mud and stay that way — waterproof boots are worth more here than a warm coat.' },
    { icon: '🚜', iconSrc: '/icons/attractions/ph_tractor-thin.svg', title: 'Working Farmland', text: 'Most of the pretty scenery is someone’s business. Stay on the road for photographs, do not enter fields, and expect slow farm machinery on the back roads.' },
    { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', title: 'Not TransLink', text: 'Compass cards do not work here — this is BC Transit territory, with separate fares and its own app. The FVX to Langley is the bridge between the two systems.' },
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Airshow Week', text: 'In early August the airshow fills every hotel room in the city and jams the roads around the airport. Either plan around it or book months ahead.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'BC stopped changing its clocks in March 2026 and stays on UTC-7 year-round, matching summer Pacific time.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Abbotsford is on Stó:lō territory, and specifically the territories of the Semá:th (Sumas) and Máthxwi (Matsqui) First Nations. Semá:th X̲ó:tsa — the lake drained to make Sumas Prairie — was their main food source, and its loss is living history rather than background.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Abbotsford Regional Hospital', '32900 Marshall Road', 'Emergencies: call 911'] },
  ],
};

export default ABBOTSFORD;
