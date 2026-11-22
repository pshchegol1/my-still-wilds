// Kelowna — данные страницы /city/kelowna
// Районы: фото лежат в public/Cities/Kelowna (источники — в комментариях
// у каждого района); подробные карточки — поле details.
//
// Hero-видео: яблоневый сад Оканагана (Pexels #19666848, лицензия
// Pexels — свободно для коммерческого использования). Выбрано потому,
// что автор прямо указал съёмку в Okanagan, BC; кадры проверены
// вручную — шпалерные ряды яблонь со светоотражающим полотном и сухие
// холмы с жёлтой сосной соответствуют долине. Постер — кадр из этого
// же видео.

export const KELOWNA = {
  slug: 'kelowna',
  name: 'Kelowna',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · Okanagan Valley',
  accentLevel: 'blue',
  heroVideo: '/Cities/Kelowna/19666848_2560_1440_24fps.mp4',
  heroImage: '/Cities/Kelowna/hero-poster.jpg',
  heroIcon: '🍇',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.888, lon: -119.496 },
  subtitle: 'The Heart of the Okanagan',
  description:
    "A sunny lakeside city in BC's interior — warm beaches on Okanagan Lake, dozens of wineries within a short drive, orchards, rail-trail cycling and a ski resort in the hills behind town. Kelowna is wine country, lake country and powder country in one trip.",

  actions: [
    { label: 'Explore Kelowna', href: '#neighbourhoods' },
    { label: 'Wine Country', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈145K city' },
    { label: 'Metro Area', value: '≈222K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'Airport', value: 'YLW' },
    { label: 'From Vancouver', value: '≈45 min flight' },
  ],

  badges: ['Wine Region', 'Lake Beaches', 'Ski Nearby'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', label: 'Winter', level: 'blue', rating: 4 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '130+ km', label: 'Length of Okanagan Lake — Kelowna sits on its eastern shore', level: 'blue' },
    { value: '≈45 min', label: 'Flight from Vancouver to Kelowna (YLW)', level: 'safe' },
    { value: '≈40', label: 'Wineries across Kelowna, West Kelowna and Lake Country', level: 'gold' },
    { value: '$6', label: 'Price of a bus DayPASS: unlimited rides for a day', level: 'danger' },
  ],

  neighbourhoods: [
    // Фото: предоставлено владельцем сайта (вид на даунтаун и мост через озеро)
    { name: 'Downtown & Cultural District', image: '/Cities/Kelowna/Downtown & Cultural District.jpg', icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg', tag: 'Downtown', tagLevel: 'blue', meta: 'Bernard Avenue · Waterfront Park · Art gallery · Museum · Restaurants',
      details: {
        "lead": "Kelowna's waterfront core. Bernard Avenue's shops and restaurants run down to City Park and the lake, and the Cultural District around Water Street puts an art gallery and a museum within a short walk.",
        "see": [
          {
            "title": "Kelowna Art Gallery",
            "text": "1315 Water Street. Open Tuesday to Saturday, 10 am–5 pm, with short Sunday hours; closed Mondays. Admission is free every Thursday, when it stays open until 8 pm. Regular prices differ between listings, so check kelownaartgallery.com."
          },
          {
            "title": "Okanagan Heritage Museum",
            "text": "470 Queensway, part of Kelowna Museums. The museum's site lists Wednesday to Saturday, 10 am–5 pm. Hours and admission change by exhibit, so check kelownamuseums.ca before you go."
          },
          {
            "title": "City Park and the waterfront path",
            "text": "The waterfront path through City Park reopened on May 15, 2026 after upgrades, including water access near Cenotaph Plaza, new seating and better lighting."
          },
          {
            "title": "Bernard Avenue",
            "text": "The 200 and 300 blocks close to cars for a summer pedestrian season (in 2026, May 15 to September 7) and are open to traffic the rest of the year."
          }
        ],
        "eat": [
          {
            "title": "Bernard Avenue and Water Street",
            "text": "Cafés, restaurants and patios cluster along Bernard Avenue and around the Cultural District, all within walking distance of the lake."
          },
          {
            "title": "Kelowna Farmers' and Crafters' Market",
            "text": "A short drive from downtown. The summer market is at Springfield Road and Dilworth Drive; the winter market moves indoors to the Parkinson Recreation Centre on Saturdays, 9 am–1 pm, from November to March. Summer days and hours vary, so check the market before going."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Downtown is walkable from the lake. Parkades near Bernard Avenue include the Library Parkade (1360 Ellis), the Memorial Parkade (1420 Ellis) and the Chapman Parkade (345 Lawrence)."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours for the waterfront and Bernard Avenue; add an hour for the gallery or the museum."
          },
          {
            "label": "Good to know",
            "text": "Thursday is the free day at the art gallery, and the gallery stays open late that evening."
          }
        ],
        "link": {
          "label": "Kelowna Art Gallery",
          "url": "https://kelownaartgallery.com/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (озеро и виноградники)
    { name: 'Pandosy & Lower Mission', image: '/Cities/Kelowna/Pandosy & Lower Mission.jpg', icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', tag: 'Beaches', tagLevel: 'blue', meta: 'Lake beaches · Cafés · Boat launches · Relaxed village feel',
      details: {
        "lead": "South of downtown along the lake. Pandosy Village is a walkable strip of shops and cafés, and two of Kelowna's most popular beaches sit at the south end of Pandosy and in Lower Mission. The area is named after Father Pandosy, who helped found the first mission here in 1859.",
        "see": [
          {
            "title": "Boyce-Gyro Beach Park",
            "text": "One of Kelowna's most popular beaches, at the south end of Pandosy. Rotary Beach Park is just a bit further south."
          },
          {
            "title": "Pandosy Village",
            "text": "Colourful storefronts selling clothing, art, antiques and more, a short walk from the lake."
          },
          {
            "title": "Father Pandosy Mission",
            "text": "3685 Benvoulin Road. Preserved buildings from the Mission de L’Immaculée Conception, founded in 1859. The grounds are open daily in daylight; the buildings are open in the warmer months, and entry is by donation. Check fatherpandosy.com for current hours."
          },
          {
            "title": "Cedar Creek Park",
            "text": "Tourism Kelowna lists it in Lower Mission and describes it as home to Kelowna's biggest off-leash dog beach."
          }
        ],
        "eat": [
          {
            "title": "Pandosy Village",
            "text": "Cafés and restaurants sit among the shops, a good stop before or after the beach."
          },
          {
            "title": "Lower Mission",
            "text": "Shopping centres, grocery stores and coffee shops, so it is an easy place to stock up for a beach day."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "Pandosy Street runs south from Bernard Avenue downtown. The beaches and the village are a short drive from the centre."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for the beach and the village; add an hour for the mission."
          },
          {
            "label": "Good to know",
            "text": "The beaches are busiest on summer weekends. Local guides place Boyce-Gyro and Rotary beaches in either Pandosy or Lower Mission, so the labels overlap."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: Pandosy guide",
          "url": "https://www.tourismkelowna.com/blog/post/explore-the-neighbourhood-guide-to-pandosy/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (въездной знак West Kelowna)
    { name: 'West Kelowna Wine Trail', image: '/Cities/Kelowna/West Kelowna Wine Trail.jpg', icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', tag: 'Wine', tagLevel: 'purple', meta: 'Across the lake bridge · Hillside vineyards · Tasting rooms',
      details: {
        "lead": "Across the lake bridge from Kelowna. The Westside Wine Trail links wineries with tasting rooms along the hills of West Kelowna. Visitor guides count between 17 and 18 tasting rooms, and the trail is built for self-guided touring.",
        "see": [
          {
            "title": "Mission Hill Family Estate",
            "text": "1730 Mission Hill Road. A landmark of the trail, known for its award-winning wines and its architecture. Check missionhillwinery.com for tour and tasting times."
          },
          {
            "title": "Quails' Gate Estate Winery",
            "text": "3303 Boucherie Road. One of the best-known wineries on the Westside. See quailsgate.com for tasting-room hours."
          },
          {
            "title": "Guided or self-guided",
            "text": "You can drive the trail yourself or join a guided tour. Guided tours are the easiest way to taste at several wineries in one day."
          }
        ],
        "eat": [
          {
            "title": "Old Vines Restaurant at Quails' Gate",
            "text": "Open daily from 11 am with dinner until 9:30 pm, plus Sunday brunch from 11 am to 2:30 pm, according to the official page. Listings disagree on small details, so check the hours and book at quailsgate.com."
          },
          {
            "title": "The Terrace at Mission Hill",
            "text": "The winery restaurant at 1730 Mission Hill Road is listed on OpenTable. Opening times are seasonal, so check ahead."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West Kelowna is just across the Okanagan Lake bridge from downtown Kelowna."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for two or three wineries; a full day if you add lunch."
          },
          {
            "label": "Drinking and driving",
            "text": "Book a guided tour or take a designated driver. Tasting and driving do not mix."
          },
          {
            "label": "Good to know",
            "text": "Tasting fees and hours vary by winery and season, so confirm them before you set out."
          }
        ],
        "link": {
          "label": "Visit Westside: Westside Wine Trail",
          "url": "https://www.visitwestside.com/top-10-highlights/westside-wine-trail"
        },
        "checked": "November 2026"
      },
    },
    // Фото: предоставлено владельцем сайта (закат над озером с лестницы-смотровой)
    { name: 'Knox Mountain & North End', image: '/Cities/Kelowna/Knox Mountain & North End.jpg', icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', tag: 'Hiking', tagLevel: 'safe', meta: 'City-edge park · Lookouts · Hiking and biking trails',
      details: {
        "lead": "A big city-edge park on the north side of downtown, with lookouts over Kelowna and Okanagan Lake and a network of hiking and biking trails. The park is open daily from 6 am to 10 pm.",
        "columns": [
          {
            "title": "What to see",
            "icon": "/icons/attractions/ph_eye-thin.svg",
            "items": [
              {
                "title": "Lookouts over the lake",
                "text": "Viewpoints above the city and Okanagan Lake, best around sunrise or sunset."
              },
              {
                "title": "Trails",
                "text": "Hiking and mountain-bike trails of different lengths. The city asks visitors to stay on marked trails and keep dogs on a leash."
              },
              {
                "title": "Disc golf",
                "text": "A disc golf course sits beside the main parking lot at the foot of the park."
              }
            ]
          },
          {
            "title": "Seasons and closures",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Knox Mountain Drive",
                "text": "The upper road closes to vehicles at the first signs of frost, usually in November, and reopens in spring. Walkers and cyclists can still use it all winter."
              },
              {
                "title": "Fire danger",
                "text": "The city has closed the road to vehicles when fire danger is high; foot and bike access stayed open."
              },
              {
                "title": "Events",
                "text": "Parking and road closures are common during events such as the annual Hill Climb. Check kelowna.ca before you go."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "The main parking lot is at the foot of the park, at the north end of downtown."
          },
          {
            "label": "Best time",
            "text": "Early morning or evening. Midday in summer is hot and exposed."
          },
          {
            "label": "Winter",
            "text": "The city does not clear snow or ice from the road and paths in winter, so wear proper footwear."
          }
        ],
        "link": {
          "label": "City of Kelowna: Knox Mountain Park",
          "url": "https://www.kelowna.ca/node/1184"
        },
        "checked": "November 2026"
      },
    },
    // Фото: фермерская лавка в долине Оканаган (North Okanagan Valley), Wikimedia Commons, CC0 (автора указывать не требуется). Точное место — не East Kelowna.
    { name: 'East Kelowna & Southeast', image: '/Cities/Kelowna/East Kelowna & Southeast.jpg', icon: '🍎', iconSrc: '/icons/attractions/ph_orange-slice-thin.svg', tag: 'Orchards', tagLevel: 'gold', meta: 'Orchards · Farm stands · Quieter, more rural roads',
      details: {
        "lead": "The rural side of Kelowna: orchards, roadside fruit stands, and small family-run wineries and cideries along Lakeshore Road and Highway 33 East. It is quieter than the lakefront and best explored slowly by car or bike.",
        "see": [
          {
            "title": "Lakeshore Road fruit stands",
            "text": "Sun City Cherries (4759 Lakeshore Road) sells cherries, honey and jams from the end of June to mid-October. Lakeside Orchards (4750 Lakeshore Road) is a cherry stand with orchards to walk through; it is cash only."
          },
          {
            "title": "Highway 33 East",
            "text": "Function Junction Fruit Stand and Double Cross Cidery (811 Highway 33 East) was listed as open daily from June 1 to October 31. East Kelowna Cider Co. at Carmelis Goat Cheese offers farm tours and tastings."
          },
          {
            "title": "South East Kelowna wine route",
            "text": "Tourism Kelowna describes it as a rural route of small, family-run operations, including The View Winery & Ward’s Cidery (2287 Ward Road)."
          }
        ],
        "eat": [
          {
            "title": "Fresh fruit and honey",
            "text": "Stands run seasonally, roughly summer to mid-October. Bring cash, as some take nothing else."
          },
          {
            "title": "Cider",
            "text": "Cideries here pair the Okanagan’s orchard heritage with craft tastings, often right where the apples grow."
          },
          {
            "title": "CedarCreek Estate Winery",
            "text": "5445 Lakeshore Road. One of the first eight pioneering wineries in BC."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "A car or a bike is the practical way. Stops are spread out along rural roads."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for three or four stops."
          },
          {
            "label": "Good to know",
            "text": "Most of the stands are listed in older guides, so hours and businesses change. Check before driving out."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: Kelowna wineries",
          "url": "https://www.tourismkelowna.com/things-to-do/wineries/wineries-by-community/kelowna/"
        },
        "checked": "November 2026"
      },
    },
    // Фото: берег озера Оканаган, Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Lake Country (north)', image: '/Cities/Kelowna/Lake Country (north).jpg', icon: '🌾', iconSrc: '/icons/attractions/ph_grains-thin.svg', tag: 'Farms', tagLevel: 'purple', meta: 'About 15–20 minutes north · Farms · Lakeside parks',
      details: {
        "lead": "The district north of Kelowna, between Wood Lake and Kalamalka Lake. It is known for the Okanagan Rail Trail, farm markets, lakeside parks and eight wineries on the Scenic Sip wine route.",
        "see": [
          {
            "title": "Okanagan Rail Trail",
            "text": "A flat, non-motorised trail. More than 20 km of it hug the shores of Wood Lake and Kalamalka Lake, and 16 km lie within Lake Country. Lake Country Cycle rents bikes just south of where the trail reopens."
          },
          {
            "title": "Wood Lake loop",
            "text": "A walking and cycling loop around the lake, listed at roughly 17 to 20 km depending on the source. Boat rentals are available on Wood Lake."
          },
          {
            "title": "Spion Kop",
            "text": "Family-friendly hiking trails. The trailhead is midway along Pelmewash Parkway."
          }
        ],
        "eat": [
          {
            "title": "Gatzke Orchards Farm Market",
            "text": "A third-generation family farm market known for local produce and pies."
          },
          {
            "title": "Farmers’ market",
            "text": "A Friday afternoon market runs from June to September."
          },
          {
            "title": "Wineries",
            "text": "Eight local wineries sit on the Scenic Sip wine route."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 15–20 minutes north of Kelowna by car along Highway 97."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for a section of the rail trail with a farm or winery stop; a full day for the whole Wood Lake loop."
          },
          {
            "label": "Good to know",
            "text": "The ArtWalk event runs in September. Check opening times for farm markets and wineries before you go."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: Lake Country",
          "url": "https://www.tourismkelowna.com/explore/neighbouring-communities/lake-country/"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Okanagan Lake & Beaches',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'The lake is the heart of the city — warm enough for summer swimming, with beaches and lakeside parks along the shore. The water can turn choppy in the afternoon, so keep paddling trips to the morning.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "Okanagan Lake is about 135 km long and reaches roughly 232 m at its deepest. Kelowna sits on its eastern shore, and the city, its parks and its beaches are all built around the water.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Boyce-Gyro Beach Park",
                "text": "One of Kelowna's most popular beaches, at the south end of Pandosy. Rotary Beach Park is just a bit further south."
              },
              {
                "title": "City Park and the downtown waterfront",
                "text": "Lakeside lawns, the waterfront path and views of the lake and hills, a short walk from Bernard Avenue."
              },
              {
                "title": "Bear Creek Provincial Park",
                "text": "A beach more than 400 m long on the west side of the lake, with golden sand, calm water and shaded picnic tables."
              },
              {
                "title": "Cedar Creek Park",
                "text": "Tourism Kelowna describes it as home to Kelowna's biggest off-leash dog beach."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Best time to swim",
                "text": "Summer. The beaches are busiest on summer weekends, so go early or on a weekday."
              },
              {
                "title": "Paddling",
                "text": "The water can turn choppy in the afternoon, so keep paddling trips to the morning."
              },
              {
                "title": "Beach day supplies",
                "text": "Lower Mission has grocery stores and coffee shops close to the beaches."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Public beaches and lakeside parks are free."
          },
          {
            "label": "Getting there",
            "text": "City Park is downtown; Boyce-Gyro and Rotary beaches are a short drive south along Pandosy Street."
          },
          {
            "label": "Best time",
            "text": "June to September for swimming; the lake is scenic year-round."
          }
        ],
        "link": {
          "label": "Tourism Kelowna",
          "url": "https://www.tourismkelowna.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Waterfront Park & Boardwalk',
      icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg',
      text: 'An easy lakeside promenade through Waterfront Park and City Park, with views of the lake, hills and the Okanagan Lake bridge. Downtown, free and best at sunset. Stuart Park, nearby, opens a skating rink in December.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "The lakeside heart of downtown, from Waterfront Park through City Park, with views of the lake, the hills and the Okanagan Lake bridge. It is free and best around sunset.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "City Park waterfront path",
                "text": "The path reopened on May 15, 2026 after upgrades, including water access near Cenotaph Plaza, new seating and better lighting."
              },
              {
                "title": "Parks Alive! at Waterfront Park",
                "text": "In summer the city runs free shows at the Waterfront Park stage; the 2026 season included Canada Day celebrations on July 1."
              },
              {
                "title": "Stuart Park skating rink",
                "text": "In winter the central plaza becomes a free outdoor rink. The 2025 season ran daily until late February, weather permitting, with skate rental on site."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Sunset",
                "text": "The waterfront faces the lake and the hills, so evening light is the best of the day."
              },
              {
                "title": "Rink dates",
                "text": "The rink opens in early December; check kelowna.ca/stuartpark for the current schedule and ice conditions."
              },
              {
                "title": "Bernard Avenue",
                "text": "The 200 and 300 blocks are pedestrian-only in summer (May 15 to September 7 in 2026), a short walk from the water."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free. Skate rental at Stuart Park is extra."
          },
          {
            "label": "Getting there",
            "text": "Downtown. Nearby parkades include the Library Parkade (1360 Ellis), the Memorial Parkade (1420 Ellis) and the Chapman Parkade (345 Lawrence)."
          },
          {
            "label": "Time to allow",
            "text": "An hour for a stroll; longer for an evening with music or a skate."
          }
        ],
        "link": {
          "label": "City of Kelowna: Stuart Park rink",
          "url": "https://www.kelowna.ca/stuartpark"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Knox Mountain Park',
      icon: '⛰️', iconSrc: '/icons/attractions/ph_mountains-thin.svg',
      text: 'A big city-edge park with lookouts over Kelowna and Okanagan Lake and hiking and biking trails. Open daily from 6 am to 10 pm; the upper road closes to cars in winter. Go at sunrise or sunset — midday summer is hot.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "A big park on the north edge of downtown, with lookouts over Kelowna and Okanagan Lake and a network of hiking and biking trails. It is open daily from 6 am to 10 pm.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Lookouts",
                "text": "Viewpoints above the city and the lake, best around sunrise or sunset."
              },
              {
                "title": "Trails",
                "text": "Hiking and mountain-bike trails of different lengths. The city asks visitors to stay on marked trails and keep dogs on a leash."
              },
              {
                "title": "Disc golf",
                "text": "A disc golf course sits beside the main parking lot at the foot of the park."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Heat",
                "text": "Midday in summer is hot and exposed; go early or late."
              },
              {
                "title": "Knox Mountain Drive",
                "text": "The upper road closes to vehicles at the first signs of frost, usually in November, and reopens in spring. Walkers and cyclists can still use it all winter."
              },
              {
                "title": "Closures",
                "text": "The road has also closed to vehicles during high fire danger, and parking is restricted during events such as the annual Hill Climb. Check kelowna.ca before you go."
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
            "text": "The main parking lot is at the foot of the park, at the north end of downtown."
          },
          {
            "label": "Winter",
            "text": "The city does not clear snow or ice from the road and paths in winter, so wear proper footwear."
          }
        ],
        "link": {
          "label": "City of Kelowna: Knox Mountain Park",
          "url": "https://www.kelowna.ca/node/1184"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Myra Canyon Trestles',
      icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg',
      text: 'A flat, scenic section of the old Kettle Valley Railway with 18 trestle bridges and tunnels. About a 40-minute drive from town; popular on foot and by bike. Free to enter, open year-round, with occasional closures for trestle maintenance.',
      tags: [{ label: 'Half day', level: 'blue' }, { label: 'Free', level: 'safe' }],
      details: {
        "lead": "A flat, scenic stretch of the old Kettle Valley Railway with 18 wooden trestle bridges and two rock tunnels, about 24 km from downtown Kelowna. It is free to visit.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The trestles",
                "text": "18 wooden trestle bridges and two rock tunnels with dramatic canyon views. Cyclists must yield to walkers on the trestles."
              },
              {
                "title": "Distance",
                "text": "One source gives about 11 km one way, 22 km out and back, so an easy half day on foot or by bike."
              },
              {
                "title": "Bike rental at Myra Station",
                "text": "Myra Canyon Bicycle Rental ran from April 25 to October 13 in 2026, with half-day slots. Its standard reservation was listed at $78 plus tax; reserve by midnight the day before."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Bring supplies",
                "text": "Both trailheads have parking and pit toilets, but no food or water."
              },
              {
                "title": "Season",
                "text": "The trail is open year-round and most popular from May to October. It occasionally closes for trestle and trail maintenance."
              },
              {
                "title": "Trailheads",
                "text": "Myra Station and Ruth Station both have free parking."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to enter, park and walk or bike. Bike rental and tours are extra."
          },
          {
            "label": "Getting there",
            "text": "About a 40-minute drive from downtown Kelowna; a car is the practical way."
          },
          {
            "label": "Time to allow",
            "text": "A half day, longer if you ride both directions."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: Myra Canyon",
          "url": "https://www.tourismkelowna.com/experiences/active-outdoors/myra-canyon/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Okanagan Wineries',
      icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      text: "Close to 40 wineries sit across Kelowna, West Kelowna and Lake Country, from big estates like Quails' Gate and Mission Hill to small family cellars. Book a guided tour or a designated driver — tasting and driving do not mix.",
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Food & Drink', level: 'danger' }],
      details: {
        "lead": "Tourism Kelowna counts close to 40 wineries across Kelowna, West Kelowna and Lake Country, with more than 25 in Kelowna itself. They are grouped into several wine trails, so you can pick one area and stay in it.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Westside Wine Trail",
                "text": "West Kelowna, across the lake bridge. Guides count 17 to 18 tasting rooms, including Mission Hill Family Estate and Quails’ Gate."
              },
              {
                "title": "South East Kelowna",
                "text": "A rural route of small, family-run wineries, including The View Winery & Ward’s Cidery (2287 Ward Road)."
              },
              {
                "title": "CedarCreek Estate Winery",
                "text": "5445 Lakeshore Road. One of the first eight pioneering wineries in BC."
              },
              {
                "title": "Lake Country",
                "text": "Eight wineries on the Scenic Sip wine route, north of Kelowna."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Do not drink and drive",
                "text": "Book a guided tour or take a designated driver. Tasting and driving do not mix."
              },
              {
                "title": "Check hours and fees",
                "text": "Tasting-room hours and fees vary by winery and season, so confirm before you set out."
              },
              {
                "title": "Lunch with a view",
                "text": "Old Vines Restaurant at Quails' Gate is open daily from 11 am, with Sunday brunch; check hours and book at quailsgate.com."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Tasting fees are set by each winery. Check the winery site for current prices."
          },
          {
            "label": "Getting there",
            "text": "Most wineries are a short drive from the city; West Kelowna is just across the lake bridge."
          },
          {
            "label": "Time to allow",
            "text": "Half a day for two or three wineries; a full day with lunch."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: wineries",
          "url": "https://www.tourismkelowna.com/things-to-do/wineries/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: "Kelowna Farmers' & Crafters' Market",
      icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg',
      text: 'A large, long-running market: outdoors in summer at Springfield Road and Dilworth Drive, and indoors on winter Saturdays. Fresh fruit, baking, preserves and local crafts — a good place for picnic supplies.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Food & Drink', level: 'danger' }],
      details: {
        "lead": "The big local market for fruit, baking, preserves and crafts. In summer it runs outdoors at Springfield Road and Dilworth Drive; in winter it moves indoors.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Summer market",
                "text": "Outdoors at the corner of Springfield Road and Dilworth Drive. Listings give mornings, mostly Saturdays (one adds Wednesdays), so check the current schedule."
              },
              {
                "title": "Winter market",
                "text": "Indoors at the Parkinson Recreation Centre (1800 Parkinson Way) on Saturdays, 9 am–1 pm, from November to March. It is wheelchair accessible."
              },
              {
                "title": "What to buy",
                "text": "Fresh fruit, baking, preserves and local crafts: good picnic supplies."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Go early",
                "text": "Markets are best in the morning, when stalls are full."
              },
              {
                "title": "Bring bags",
                "text": "Take reusable bags and plan to carry fresh produce, jars and baking home."
              },
              {
                "title": "Dates change",
                "text": "The most recent winter listing found covered the 2024–25 season, so confirm this season’s dates."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Free to browse; you pay for what you buy."
          },
          {
            "label": "Getting there",
            "text": "A short drive from downtown in both seasons."
          },
          {
            "label": "Time to allow",
            "text": "An hour or two."
          }
        ],
        "link": {
          "label": "Community directory listing",
          "url": "https://kelowna.cioc.ca/record/KNA0833"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Big White Ski Resort',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: 'About 45 minutes to an hour from Kelowna, famous for powder snow and a ski-in, ski-out village. In summer it turns to mountain biking and hiking. Winter driving here needs proper tires.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "A ski resort about 56 km southeast of Kelowna. The 2026/27 season is set to open on Thursday, November 26, 2026 and close on April 4, 2027, snow permitting.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Terrain",
                "text": "About 119 named runs served by 15 lifts, according to ski guides."
              },
              {
                "title": "Winter season",
                "text": "Opening day is November 26, 2026, snow permitting. The resort lists lift status and hours on its site."
              },
              {
                "title": "Season passes",
                "text": "Pre-season pass pricing ends November 25, 2026. Passes bought before opening day can be refunded if cancelled before that date."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices",
                "text": "Lift ticket prices differ between sources and by date, so check the official ticket page."
              },
              {
                "title": "Winter driving",
                "text": "The road up is a winter mountain road. Use proper winter tires and check road conditions before you drive."
              },
              {
                "title": "Summer",
                "text": "Check bigwhite.com for what is open outside the ski season."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid. Lift tickets and rentals vary by date; buy online from the official site."
          },
          {
            "label": "Getting there",
            "text": "About 56 km from Kelowna, roughly an hour by car."
          },
          {
            "label": "Best time",
            "text": "Winter for skiing; open dates depend on snow."
          }
        ],
        "link": {
          "label": "Big White: lift tickets",
          "url": "https://www.bigwhite.com/tickets-passes/lift-tickets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Bear Creek Provincial Park',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: 'On the west side of the lake, with a forest loop to a waterfall and canyon views. A shaded alternative on hot days and a good family hike.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        "lead": "A BC Parks site on the west side of Okanagan Lake, about 9 km west of Kelowna via Westside Road. It combines a long lakeside beach with trails around a creek and canyon.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The beach",
                "text": "More than 400 m long, with golden sand, calm water, shaded picnic tables and grassy areas. The creek splits the shoreline into two beaches."
              },
              {
                "title": "Canyon Rim Trail",
                "text": "A moderate loop of about 2.5 km with roughly 90 m of climbing, footbridges and viewpoints over the canyon."
              },
              {
                "title": "Waterfall loop",
                "text": "An easy loop of about 2.6 km to a waterfall with views of West Kelowna. Some visitors swim near the base in summer."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Shade on hot days",
                "text": "The forested trails are a cooler alternative to the open lakefront."
              },
              {
                "title": "Shorter walks",
                "text": "The Mid-Canyon Trail and an easy Loop Trail are shorter options for families."
              },
              {
                "title": "Camping",
                "text": "The park has a campground; reserve through BCParks.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Day use is free according to most sources; camping is charged. Check BC Parks for current fees."
          },
          {
            "label": "Getting there",
            "text": "About 9 km west of Kelowna on Westside Road; a car is the practical way."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours for a hike and a beach stop."
          }
        ],
        "link": {
          "label": "Tourism Kelowna: Bear Creek Provincial Park",
          "url": "https://www.tourismkelowna.com/listing/bear-creek-provincial-park/1654/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Cultural District',
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      text: 'Kelowna Art Gallery, the Okanagan Heritage Museum and the arts spaces around Water Street are a rainy-day or evening option, all close to the waterfront.',
      tags: [{ label: 'Paid', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "The arts and museum cluster around Water Street, a short walk from the lakefront. It works as a rainy-day or evening option in the centre of town.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Kelowna Art Gallery",
                "text": "1315 Water Street. Open Tuesday to Saturday, 10 am–5 pm, with short Sunday hours; closed Mondays. Admission is free every Thursday, when it stays open until 8 pm."
              },
              {
                "title": "Okanagan Heritage Museum",
                "text": "470 Queensway, part of Kelowna Museums. Check kelownamuseums.ca for current hours and admission."
              },
              {
                "title": "Okanagan Military Museum",
                "text": "1424 Ellis Street, also part of Kelowna Museums. Hours change by season, so check ahead."
              },
              {
                "title": "Rotary Centre for the Arts",
                "text": "A visual and performing arts centre with artist studios, a gallery, educational programs and community events."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Free Thursday",
                "text": "The art gallery is free every Thursday and open until 8 pm."
              },
              {
                "title": "Students",
                "text": "The gallery says UBC Okanagan and Okanagan College students get free admission."
              },
              {
                "title": "Check before you go",
                "text": "Hours and prices differ between listings and change by exhibit, so confirm with the venue."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Mixed: the gallery is free on Thursdays; other venues charge or ask for donations."
          },
          {
            "label": "Getting there",
            "text": "Downtown, within walking distance of the lake. Parkades on Ellis Street are close by."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours depending on how many venues you visit."
          }
        ],
        "link": {
          "label": "Kelowna Art Gallery",
          "url": "https://kelownaartgallery.com/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Nature Around the Lake',
  outdoor: [
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Kettle Valley Rail Trail', dist: 'Outdoor · bike rental', text: 'Beyond the Myra Canyon trestles, the former railway grade offers gentle cycling with big valley views. Rent a bike near Knox Mountain if you did not bring one.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Paddling & Boating', dist: 'Okanagan Lake', text: 'Kayaks, paddleboards and boats on Okanagan Lake — the water is warmest in summer. Go early before the afternoon chop, and wear a lifejacket.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Knox Mountain & Okanagan Mountain Park', dist: 'Free', text: 'Trails from short city hikes to wilder routes; Okanagan Mountain Park has secluded bays reachable by boat. Carry water and avoid midday heat in summer.' },
    { icon: '🚵', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Mountain Biking', dist: 'Knox Mountain · Big White', text: 'Knox Mountain has trails for several levels, and Big White opens bike terrain in summer. Check trail conditions and rules before riding.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Skiing & Snowboarding', dist: 'Big White, winter', text: 'Big White is the big name — known for light, dry powder. A winter day trip from Kelowna, or stay on the mountain for several days.' },
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing & Lake Days', dist: 'Licence required', text: 'Okanagan Lake and nearby waters offer fishing and quiet bays. Check BC fishing licence and regulations before you cast a line.' },
  ],

  food: [
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Okanagan Wine', area: 'West Kelowna · Mission · East Kelowna', areaLevel: 'purple', text: 'Cool-climate reds, crisp whites and sparkling wine from vineyards above the lake. Many wineries have restaurants with patio views — book lunch in summer.' },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer, Cider & Spirits', area: 'Downtown · Citywide', areaLevel: 'gold', text: 'A strong craft scene: breweries, cideries and distilleries all over town, many with food. Good for an evening when you are done with wine.' },
    { icon: '🍒', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Orchard Fruit', area: 'Roadside stands · Summer–Fall', areaLevel: 'danger', text: 'Cherries, peaches, apricots and apples, sold straight from farms and roadside stands in season. Look for the BC Tree Fruits label in shops.' },
    { icon: '🥗', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Farm-to-Table', area: 'Restaurants citywide', areaLevel: 'safe', text: 'Chefs lean heavily on local produce, cheese and wine. Menus change with the harvest — ask what is from the valley.' },
    { icon: '🧺', iconSrc: '/icons/attractions/ph_basket-thin.svg', title: "Farmers' Market", area: 'Wednesdays & Saturdays', areaLevel: 'blue', text: 'Baking, jams, honey, produce and prepared food. Arrive early for the best choice and parking.' },
    { icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg', title: 'Lakeside Patios', area: 'Waterfront · Pandosy', areaLevel: 'blue', text: 'Long summer evenings on patios by the water. Remember: restaurant food has no PST in BC, but drinks carry extra tax.' },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Book early', text: 'Hot, dry and bright — peak season for lake beaches, patios and rail-trail cycling. Hotels fill up, so book early. Wildfire smoke can affect air quality in some years; check conditions before you go.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 5, note: 'Harvest!', text: 'Harvest season at wineries and orchards, warm days and cooler nights, and golden larches at Myra Canyon. Many locals say this is the best time to visit.' },
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 4, note: 'Ski season', text: 'Big White brings skiers, and downtown Stuart Park opens a skating rink in December. In town it is colder and quieter. Carry winter tires on mountain highways.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — May', level: 'olive', rating: 4, note: 'Quiet & fresh', text: 'Orchard blossoms, lighter crowds and lower hotel prices. Higher trails may still hold snow. Lake water is still cold; wineries are calm and welcoming.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air — Kelowna Airport (YLW)',
      text: 'YLW is the second-busiest airport in BC after Vancouver, about 14 km northeast of downtown. Flights from Vancouver take under an hour; there are also nonstops from Calgary, Toronto and Seattle, among others. Rent a car, take Route 23, or grab a taxi or rideshare.',
      time: 'Vancouver ≈ 45 min flight · downtown ≈ 14 km',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'By Car from Vancouver',
      text: 'Take Hwy 1 east to Hope, then the Coquihalla (Hwy 5) north to Merritt, then Hwy 97C east to Kelowna. About 400–450 km. Mountain passes bring snow and closures in winter, so use winter tires and check DriveBC before you go.',
      time: '≈ 4–5 hours (about 400–450 km)',
    },
    {
      icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
      title: 'Okanagan Road-Trip Loop',
      text: 'A classic: Vancouver → Kelowna → Penticton and Osoyoos → Princeton → Hope → Vancouver. Roughly 850 km; allow at least two days. Kelowna to Penticton is about 60 km, around 45 minutes.',
      time: 'Loop ≈ 850 km · min. 2 days',
    },
  ],

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown & Waterfront',
      area: 'Best base · Walk to the lake',
      text: 'Lakeside hotels and condos steps from Waterfront Park, Bernard Avenue restaurants, the market and the Cultural District. Best for first-time visitors without a car.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Kelowna+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Kelowna-Hotels.d6054449.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg',
      title: 'Pandosy & Lower Mission',
      area: 'Beach feel · Relaxed',
      text: 'Quieter, beach-oriented stays south of downtown with cafés, small shops and lake access. A good fit for families and summer visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Pandosy+Kelowna+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Pandosy--Kelowna--BC', level: 'danger' },
      ],
    },
    {
      icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      title: 'West Kelowna Wine Country',
      area: 'Vineyards · Tasting rooms',
      text: 'Hillside wineries, vineyard inns and B&Bs across the lake bridge. Wake up among the vines; plan on a car or driver for dinner.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Kelowna+BC', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/West-Kelowna--BC', level: 'danger' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Big White Mountain',
      area: 'Ski-in, ski-out · Winter',
      text: "Canada's largest ski-in, ski-out village is about 45 minutes to an hour from town. Stay up the mountain for powder mornings; check winter road conditions.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Big+White+BC', level: 'blue' },
        { label: 'Big White', url: 'https://www.bigwhite.com', level: 'gold' },
      ],
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'Airport Area',
      area: 'Early flights · Practical',
      text: 'The Four Points by Sheraton is the only hotel near the terminal, about 1 km away with a shuttle. Handy for early departures, but far from the lake.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Kelowna+Airport', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Orchard & Farm Stays',
      area: 'Rural · Quiet',
      text: 'Vacation rentals and farm stays in East Kelowna and Lake Country — good for groups wanting space, fruit stands nearby and a slow pace.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Kelowna--BC', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/kelowna', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'Kelowna Regional Transit (BC Transit)',
      text: 'Kelowna has no subway or light rail — transit is a bus network covering Kelowna, West Kelowna, Lake Country and Peachland. Downtown is walkable and the waterfront is flat, but wineries, Myra Canyon and Big White are easiest with a car, tour or rideshare. Children 12 and under ride free.',
      linkLabel: 'BC Transit Kelowna',
      linkUrl: 'https://www.bctransit.com/kelowna',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'The same fare applies on any local route. Pay with the Umo app, a reloadable Umo card or a tapped contactless card or phone; cash is also accepted. Transit fares are exempt from sales tax.',
        fareBox: {
          label: 'Local fares',
          lines: ['Single ride: $3.00', 'DayPASS: $6.00', '30-Day Pass: $80 (concession $55)', 'Children 12 and under: free'],
        },
        linkLabel: 'Umo — App & Card',
        linkUrl: 'https://www.bctransit.com/umo/',
      },
      {
        icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
        title: 'Airport & Key Routes',
        text: 'The airport (YLW) is about a 15–20 minute drive from downtown. Route 23 serves it and connects at the UBC Okanagan exchange to Route 97, the RapidBus line between West Kelowna, downtown Kelowna and UBCO. Route 90 links Kelowna with Vernon, and Route 70 runs a limited weekday service between Kelowna and Penticton.',
        fareBox: {
          label: 'Useful routes',
          lines: ['23 — Airport ↔ UBCO', '97 — West Kelowna ↔ Downtown ↔ UBCO', '90 — Vernon ↔ Kelowna ($6 single ride)', '70 — Penticton ↔ Kelowna (limited weekday service)'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/kelowna/schedules-and-maps',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Walk the Waterfront', text: 'Downtown, Waterfront Park and the boardwalk are all within a flat, easy walk.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi & Rideshare', text: 'Taxis and rideshare are available, including at the airport. Useful for wineries and late evenings.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike & Scooter', text: 'Rent a bike near Knox Mountain or along the waterfront for the lakeside paths.' },
          { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Wine Tours', text: 'Guided tours with a driver are the safest way to taste at several wineries.' },
        ],
      },
    ],
    proTip: {
      label: 'Plan ahead:',
      text: 'Buses run less often on evenings and holidays, and not all wineries are on a route. If you want to visit several, book a tour or a driver rather than relying on transit.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      "Most goods are taxed at 12%. But BC has important exceptions: restaurant meals have no PST (just 5% GST), alcohol carries 10% PST, and hotel stays carry a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax, which also applies to short-term rental bookings made through online platforms). For a wine-country trip, the alcohol rule matters most — wine, beer and winery tasting fees are all taxed at the higher ≈15% rate, not the restaurant-meal 5%.",
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Kelowna', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Wine, beer and spirits: 10% PST + 5% GST (≈15%)' },
      { icon: '🥂', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Winery tasting fees: 10% PST + 5% GST' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: ~16% (GST + PST + 3% MRDT)' },
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing, electronics, souvenirs: 12%' },
    ],
    exempt: [
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals: GST only (5%)' },
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries and fresh fruit: no PST' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no PST' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Books and newspapers: no PST' },
      { icon: '🧒', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: "Children's-sized clothing: no PST" },
      { icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg', label: 'Bus fares: no sales tax' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Bar staff: $1–2 per drink. Wine tour guides and drivers: 10–15%.',
  },

  practical: [
    { icon: '🔥', iconSrc: '/icons/attractions/ph_fire-thin.svg', title: 'Wildfire & Smoke', text: 'Summers can bring wildfire smoke or restrictions. Check air quality and BC Wildfire Service updates, and be flexible with outdoor plans.' },
    { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', title: 'Wine & Driving', text: 'Do not drink and drive. Book a tour, hire a driver or nominate a sober driver for winery days.' },
    { icon: '🛞', iconSrc: '/icons/attractions/ph_tire-thin.svg', title: 'Winter Driving', text: 'Winter tires or chains are required on many BC highways, including the route from Vancouver. Check DriveBC for conditions.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Use the Umo app or card, tap a contactless card or phone, or pay cash. Kids 12 and under ride free. Fares include no sales tax.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', title: 'Lake Safety', text: 'The lake can be cold and choppy by afternoon. Wear a lifejacket on the water and respect swimming-area signs.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Sun & Heat', text: 'Summer days are hot and dry. Bring sunscreen, a hat and plenty of water, especially on Knox Mountain.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital', lines: ['Kelowna General Hospital', '2268 Pandosy Street', 'Emergencies: call 911'] },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Check Before You Go', text: 'Winery hours, markets and trail conditions change seasonally. Confirm on official sites before planning a day around them.' },
  ],
};

export default KELOWNA;
