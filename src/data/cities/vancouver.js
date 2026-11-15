// Vancouver — данные страницы /city/vancouver

export const VANCOUVER = {
  slug: 'vancouver',
  name: 'Vancouver',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · City Guide',
  heroVideo: '/Cities/Vancouver/hero 2160 60Fps.mp4',
  heroImage: '/bc/cities/vancouver.png',
  heroCaption: 'Downtown Vancouver · BC · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 49.2827, lon: -123.1207 },
  subtitle: 'Where Ocean Meets Mountains',
  description:
    "Canada's most beautiful city — a stunning blend of cosmopolitan culture, rainforest, ocean, and snow-capped mountains. Ski in the morning, kayak in the afternoon, and dine in one of the world's best food cities by evening.",

  actions: [
    { label: 'Explore Vancouver', href: '#neighbourhoods' },
    { label: 'Nearby Parks', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '675,000' },
    { label: 'Metro Area', value: '2.6 Million' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific / UTC-7' },
    { label: 'Airport', value: 'YVR' },
    { label: 'Ski Resort', value: '30 min away' },
  ],

  badges: ['2010 Olympics', 'Year Round', 'Top 10 World'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'caution', rating: 4 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & Coal Harbour',
      image: '/Cities/Vancouver/Downtown & Coal Harbour.jpg',
      tag: 'Downtown',
      tagLevel: 'blue',
      meta: 'Waterfront · Convention Centre · Canada Place · Robson Street shopping',
      details: {
        lead: "Vancouver's waterfront core: cruise ships and floatplanes on the harbour, glass towers behind, and the Robson Street shopping strip a few blocks inland. The seawall links Coal Harbour with Stanley Park.",
        see: [
          {
            title: "Canada Place",
            text: "The sail-roofed cruise terminal and convention complex is free to walk around, with the harbour and the North Shore mountains in view. FlyOver Canada, a flight-simulation ride, is next door."
          },
          {
            title: "Convention Centre living roof",
            text: "The West building's 2.4-hectare green roof is the largest in Canada, planted with more than 400,000 native plants and home to honeybee hives."
          },
          {
            title: "Harbour Centre Lookout",
            text: "A 360-degree panorama of the city, the harbour and the mountains from 130 m up."
          },
          {
            title: "Vancouver Art Gallery",
            text: "Beside Robson Square, with by-donation admission on Tuesdays (check the hours). A good rainy-day stop."
          }
        ],
        eat: [
          {
            title: "Robson Street and around",
            text: "Coffee shops and casual places on nearly every block. Pacific Centre mall, two blocks away, is the dry option for lunch."
          },
          {
            title: "Food trucks",
            text: "Trucks often gather near the Art Gallery and along Granville Street, handy for a quick lunch."
          },
          {
            title: "Gastown",
            text: "Gastown's restaurants are about a five-minute walk from Waterfront Station."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Waterfront Station has the Expo Line, the Canada Line to the airport, the SeaBus to North Vancouver and the West Coast Express."
          },
          {
            label: "Time to allow",
            text: "Half a day for the waterfront and Robson Street; add the Lookout or the gallery for more."
          },
          {
            label: "Good base",
            text: "A convenient place to stay without a car: SkyTrain, SeaBus and the airport line all meet here."
          }
        ],
        checked: "November 2026"
      },
    },
    {
      name: 'Stanley Park',
      image: '/Cities/Vancouver/Stanley Park.jpg',
      tag: 'Nature',
      tagLevel: 'safe',
      meta: '1,000 acres of rainforest · Seawall · Beaches · Totem poles',
      details: {
        lead: "Vancouver's first park, established in 1886: 1,000 acres of forest, beaches and viewpoints, ringed by a 9 km seawall.",
        see: [
          {
            title: "The Seawall",
            text: "The Stanley Park section is 9 km. Walkers can go either way; cyclists and skaters must go counter-clockwise, in their own lane. Allow 2–3 hours on foot or 1–2 hours by bike."
          },
          {
            title: "Totem poles at Brockton Point",
            text: "About nine poles stand beside a visitor centre. The collection was moved here in 1962."
          },
          {
            title: "Along the water",
            text: "You pass Siwash Rock, Third Beach and Second Beach on the seawall; Lost Lagoon is near the park's main entrance."
          },
          {
            title: "Also in the park",
            text: "Vancouver Aquarium, a miniature railway, a salmon demonstration stream and horse-and-carriage rides."
          }
        ],
        eat: [
          {
            title: "In the park",
            text: "Refreshment stands and restaurants are scattered through the park."
          },
          {
            title: "Picnic",
            text: "The beaches and lawns make good picnic spots, so stock up before you go in."
          },
          {
            title: "Denman Street",
            text: "The nearest dining strip, just outside the park: bistros, taco places and pubs."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Walk or cycle in from Coal Harbour, where the seawall continues out of the park, or from English Bay. Bike rental shops are near Denman and Georgia, just outside the park."
          },
          {
            label: "Time to allow",
            text: "A half day, or 2–3 hours for the full seawall loop on foot."
          },
          {
            label: "Accessibility",
            text: "The seawall is fully accessible to wheelchairs and strollers."
          }
        ],
        checked: "November 2026"
      },
    },
    {
      name: 'Chinatown & Gastown',
      image: '/Cities/Vancouver/Chinatown & Gastown.jpg',
      tag: 'Food',
      tagLevel: 'danger',
      meta: "Historic steam clock · World's best dim sum · Night markets",
      details: {
        lead: "Two of the city's oldest neighbourhoods, side by side. Gastown grew from a single tavern in 1867 and is a National Historic Site; Chinatown, settled by Chinese immigrants from the late 1800s, gained heritage status in 1971.",
        see: [
          {
            title: "Gastown Steam Clock",
            text: "On Water Street at Cambie. It puffs steam and whistles every 15 minutes. Maple Tree Square, Gastown's historic heart, is close by."
          },
          {
            title: "Millennium Gate and Sam Kee Building",
            text: "A dragon-covered gate marks Chinatown's entrance. The Sam Kee Building holds a Guinness record as the narrowest commercial building in the world, at six feet."
          },
          {
            title: "Dr. Sun Yat-Sen Classical Chinese Garden",
            text: "At 578 Carrall Street, with koi ponds and quiet paths. Adult admission is about $16 and opening days are limited (usually Wednesday to Sunday). The free Dr. Sun Yat-Sen Park next door is open all day."
          },
          {
            title: "Keefer Street markets",
            text: "Shops and stalls selling things like wild ginseng and lychees."
          }
        ],
        eat: [
          {
            title: "Bao Bei",
            text: "A Taiwanese- and Shanghai-influenced brasserie on Keefer Street."
          },
          {
            title: "L'Abattoir",
            text: "French-influenced West Coast cooking in Gastown, open for dinner daily."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Gastown is about a five-minute walk from Waterfront Station. For Chinatown, take the Expo Line to Stadium–Chinatown (three stops from Waterfront) or walk east from Gastown."
          },
          {
            label: "Time to allow",
            text: "2–3 hours for both areas; longer if you visit the garden."
          },
          {
            label: "Steam clock",
            text: "Be there a few minutes before the quarter hour to catch the whistle."
          }
        ],
        checked: "November 2026"
      },
    },
    {
      name: 'Granville Island',
      image: '/Cities/Vancouver/Granville Island.jpg',
      tag: 'Market',
      tagLevel: 'blue',
      meta: 'Public market · Artisan studios · Fresh seafood · Ferries',
      details: {
        lead: "A former industrial peninsula turned arts and food district beneath the Granville Street Bridge. The Public Market is its heart, often named among the most-visited attractions in Vancouver.",
        see: [
          {
            title: "Public Market",
            text: "The anchor of the island: produce, farmers’ stalls, food shops and market artisans selling locally made goods."
          },
          {
            title: "The Net Loft",
            text: "First Nations artwork, B.C. wines and hand-printed scarves."
          },
          {
            title: "Railspur Alley",
            text: "Working studios of glassblowers, jewellers and potters."
          },
          {
            title: "Kids Market and improv",
            text: "A market of books, games and toys, and improv comedy shows by the Vancouver TheatreSports League."
          }
        ],
        eat: [
          {
            title: "At the market",
            text: "Oyama Sausage Co., Benton Brothers Fine Cheese, A Bread Affair and Granville Island Tea Co. are among the stalls."
          },
          {
            title: "Morning coffee",
            text: "Blue Parrot and JJ Bean open after 7:30 AM, Petit Ami after 8:30 AM."
          },
          {
            title: "Local drinks",
            text: "Granville Island Brewing (beer flights), Artisan Sake Maker and The Liberty Distillery."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Take a rainbow-coloured Aquabus or False Creek Ferry across False Creek, a ride in itself, or walk or cycle the seawall."
          },
          {
            label: "Market hours",
            text: "Public Market 9 AM to 6 PM. Closed December 25, 26, January 1 and the four Mondays in January."
          },
          {
            label: "Time to allow",
            text: "Half a day for the market, studios and a drink on the water."
          }
        ],
        checked: "November 2026"
      },
    },
    {
      name: 'Kitsilano & Main Street',
      image: '/Cities/Vancouver/Kitsilano & Main Street.jpg',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Beach · Cafés · Independent shops · Art galleries · Murals',
      details: {
        lead: "Two neighbourhoods across the water from downtown. Kitsilano is beaches, museums and the shops of West 4th Avenue; Mount Pleasant, around Main Street, is the city’s craft-brewery and street-art district.",
        see: [
          {
            title: "Kitsilano Beach and Pool",
            text: "A busy beach for volleyball and picnics. Beside it is Kitsilano Pool, at 137 m the longest outdoor pool in North America, filled with salt water. It is seasonal (June to mid-September in 2026) and the City is weighing a long closure or a replacement, so check before planning around it."
          },
          {
            title: "Vanier Park",
            text: "Home to the Museum of Vancouver, the H.R. MacMillan Space Centre and the Vancouver Maritime Museum. The Bard on the Beach Shakespeare Festival runs here in summer."
          },
          {
            title: "West 4th Avenue",
            text: "The main shopping strip, with outdoor-gear, vintage and wellness shops."
          },
          {
            title: "Murals around Main Street",
            text: "Mount Pleasant is the original home of the Vancouver Mural Festival. Its free app has a self-guided tour of the permanent murals."
          }
        ],
        eat: [
          {
            title: "Kits Beach",
            text: "LOCAL Public Eatery has a popular beach-facing deck."
          },
          {
            title: "West 4th Avenue",
            text: "Cafés, juice bars and vegetarian restaurants along the strip."
          },
          {
            title: "Main Street",
            text: "Craft breweries such as Brassneck (2148 Main St) and Main Street Brewing, plus independent coffee shops."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Kitsilano is across the Burrard Bridge from downtown, and the seawall runs from Kits Beach to Vanier Park. For Main Street, take the SkyTrain to Broadway–City Hall (Canada Line) or Main Street–Science World (Expo Line)."
          },
          {
            label: "Time to allow",
            text: "Half a day for Kitsilano, plus a couple of hours for Main Street."
          },
          {
            label: "Check ahead",
            text: "Mural festival dates and the pool’s future change from year to year; see the official pages."
          }
        ],
        checked: "November 2026"
      },
    },
    {
      name: 'English Bay & West End',
      image: '/Cities/Vancouver/English Bay & West End.jpg',
      tag: 'Beach',
      tagLevel: 'blue',
      meta: 'Sunset Beach · Cyclists · Rollerbladers · Most walkable area',
      details: {
        lead: "A residential neighbourhood on the peninsula between downtown and Stanley Park, with English Bay beach at its edge. It is the classic place in Vancouver to watch the sunset.",
        see: [
          {
            title: "English Bay Beach",
            text: "Sunset views, plus kayak and stand-up paddleboard rentals. The laughing statues of A-maze-ing Laughter are nearby."
          },
          {
            title: "The Inukshuk",
            text: "Vancouver's famous Inukshuk stands on the seawall. It inspired the logo of the 2010 Winter Olympics and Paralympics."
          },
          {
            title: "Sunset Beach",
            text: "The giant interlocked wedding rings of the sculpture Engagement are here. The seawall from Sunset Beach to English Bay is about 2 km."
          },
          {
            title: "Davie Village and the Polar Bear Swim",
            text: "Davie Village is the centre of Vancouver's LGBTQ+ community. On January 1 the Polar Bear Swim, held at English Bay since 1920, fills the beach."
          }
        ],
        eat: [
          {
            title: "Denman Street",
            text: "The main dining strip: bistros, taco places and pubs."
          },
          {
            title: "Beachside",
            text: "The Sylvia Restaurant & Lounge in the historic Sylvia Hotel and The Three Brits Public House both look out on the bay, good for sunset."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "A walk or short bus ride west of downtown. Several bus routes run along Davie and Denman Streets, a short walk from the beach."
          },
          {
            label: "Time to allow",
            text: "1–2 hours for the beach and seawall; stay on for sunset."
          },
          {
            label: "Seawall link",
            text: "From English Bay the seawall continues into Stanley Park at Second Beach and on to Sunset Beach."
          }
        ],
        checked: "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Stanley Park',
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      text: "One of the largest urban parks in North America. A 9 km seawall walk, coastal rainforest, beaches, totem poles, and views of the mountains and harbour.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        lead: "Vancouver's best-known green space, established in 1886: 1,000 acres of forest, beaches and viewpoints on a peninsula beside downtown. It is free to enter.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The Seawall",
                text: "The Stanley Park section is 9 km. Walkers can go either way; cyclists and skaters go counter-clockwise in their own lane."
              },
              {
                title: "Totem poles at Brockton Point",
                text: "About nine poles stand beside a visitor centre. The collection was moved here in 1962."
              },
              {
                title: "Along the water",
                text: "Siwash Rock, Third Beach and Second Beach lie on the seawall; Lost Lagoon is near the park's main entrance."
              },
              {
                title: "Also in the park",
                text: "Vancouver Aquarium, a miniature railway, a salmon demonstration stream and horse-and-carriage rides."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Cycle counter-clockwise",
                text: "Cyclists must follow the one-way lane; walkers can go either direction."
              },
              {
                title: "Rent a bike outside the gate",
                text: "Rental shops are near the corner of Denman and Georgia Streets, just outside the park."
              },
              {
                title: "Fully accessible",
                text: "The seawall suits wheelchairs and strollers."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free to enter. The Aquarium and other attractions inside charge their own admission."
          },
          {
            label: "Time to allow",
            text: "2–3 hours on foot or 1–2 hours by bike for the full seawall; a half day with stops."
          },
          {
            label: "Getting there",
            text: "Walk or cycle in from Coal Harbour or English Bay along the seawall."
          },
          {
            label: "Nearby",
            text: "Denman Street for food and English Bay for sunset are just outside the park."
          }
        ],
        link: {
          label: "Stanley Park (City of Vancouver)",
          url: "https://vancouver.ca/parks-recreation-culture/stanley-park.aspx"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Capilano Suspension Bridge',
      icon: '🌉', iconSrc: '/icons/attractions/ph_bridge-thin.svg',
      text: "Walk across a 137 m suspension bridge, 70 m above the Capilano River. Treetops Adventure and Cliffwalk are included. A free shuttle runs from downtown.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        lead: "A 137 m suspension bridge hanging 70 m above a river canyon in North Vancouver, set in coastal rainforest. The same ticket covers Treetops Adventure, Cliffwalk and an Indigenous cultural area.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The Suspension Bridge",
                text: "About 137 m (450 ft) long and roughly 70 m above the canyon, with views down the river."
              },
              {
                title: "Treetops Adventure",
                text: "A series of seven suspended footbridges between trees in the rainforest."
              },
              {
                title: "Cliffwalk",
                text: "Winding walkways, stairs and viewing platforms along the canyon cliffs."
              },
              {
                title: "Kia'palano",
                text: "A cultural area with carved totem poles and displays on Squamish and Tsleil-Waututh history."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Book a timed ticket online",
                text: "Tickets are timed-entry and sold on capbridge.com; availability is limited at peak times. Tickets from unauthorized sellers may be invalid."
              },
              {
                title: "Go off-peak",
                text: "Summer is the busiest season; spring and fall tend to be quieter."
              },
              {
                title: "Canyon Lights",
                text: "The winter light show runs November 20, 2026 to January 10, 2027 (11 am–10 pm, closed December 25) and is included with admission."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Timed-entry tickets, priced by season. 2026 guides put adult admission at roughly $80; confirm on capbridge.com."
          },
          {
            label: "Hours",
            text: "Seasonal: 10 am–5 pm in early November 2026, 11 am–10 pm during Canyon Lights."
          },
          {
            label: "Getting there",
            text: "A free shuttle runs from Canada Place, the Hyatt Regency and the Blue Horizon Hotel, about 15–25 minutes (first come, first served; the schedule changes by season)."
          },
          {
            label: "Time to allow",
            text: "About 2–3 hours in the park; a half day including travel from downtown."
          }
        ],
        link: {
          label: "capbridge.com",
          url: "https://www.capbridge.com/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Granville Island Public Market',
      icon: '🎪', iconSrc: '/icons/attractions/ph_storefront-thin.svg',
      text: "Vancouver's beloved food market with local artisans, fresh seafood, baked goods and dozens of food vendors. Take an Aquabus or False Creek ferry across the water.",
      tags: [{ label: 'Free Entry', level: 'safe' }, { label: 'Food', level: 'danger' }],
      details: {
        lead: "The anchor of Granville Island: produce, farmers’ stalls, food shops and local makers under one roof, often named among the most-visited attractions in Vancouver. Walking in is free.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Food stalls",
                text: "Oyama Sausage Co., Benton Brothers Fine Cheese, A Bread Affair and Granville Island Tea Co. are among the vendors."
              },
              {
                title: "Coffee",
                text: "Blue Parrot and JJ Bean open after 7:30 AM, Petit Ami after 8:30 AM."
              },
              {
                title: "Market artisans",
                text: "Locally made, handcrafted goods are sold alongside the food stalls."
              },
              {
                title: "Around the market",
                text: "The Net Loft, Railspur Alley studios, the Kids Market and Granville Island Brewing are all a short walk away."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Check the directory",
                text: "The market's online directory lists vendors by category: Boutiques, Food Shops and Dining."
              },
              {
                title: "Mind the January closures",
                text: "The Public Market is closed on the four Mondays in January for maintenance."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free to enter; you pay for what you buy."
          },
          {
            label: "Hours",
            text: "9 AM–6 PM. Open on statutory holidays except December 25, 26 and January 1."
          },
          {
            label: "Getting there",
            text: "Take a rainbow-coloured Aquabus or False Creek Ferry across False Creek, or walk or cycle the seawall."
          },
          {
            label: "Nearby",
            text: "See the Granville Island card under Neighbourhoods for the artisans, studios and waterfront."
          }
        ],
        link: {
          label: "Granville Island Public Market",
          url: "https://granvilleisland.com/public-market"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Grouse Mountain',
      icon: '🏔️', iconSrc: '/icons/attractions/ph_cable-car-thin.svg',
      text: "Ride the Skyride gondola up for views over the city. Skiing and snowboarding in winter, hiking and ziplines in summer, and a wildlife refuge with an orphaned grizzly bear and owls.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        lead: "A North Shore mountain you reach by gondola: the Skyride lifts you above the forest for views over Vancouver, with skiing in winter, hiking and ziplines in summer, and a wildlife refuge at the top.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Skyride and Blue Grouse Gondola",
                text: "A round trip on the Red Skyride or the Blue Grouse Gondola is included with Mountain Admission."
              },
              {
                title: "Wildlife Refuge",
                text: "A research, education and conservation centre with an orphaned grizzly bear and owls. Ranger Talks run in the summer months."
              },
              {
                title: "Mountaintop activities",
                text: "Theatre in the Sky, Mountain Ropes Adventure, ziplines and the Grouse Gravity Coaster, plus skiing, snowboarding, skating and snowshoeing when the winter season opens."
              },
              {
                title: "The Grouse Grind",
                text: "A steep hiking trail up the mountain; check its seasonal opening before you go."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Buy ahead",
                text: "A Mountain Admission Ticket is only valid for the date you select."
              },
              {
                title: "Check conditions on the day",
                text: "Weather can close the Skyride early: on November 14, 2026 it shut at 4 pm."
              },
              {
                title: "Dress warmer than in the city",
                text: "It is colder at the top, and some mountaintop activities close with the weather."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Mountain Admission: adult (19–64) $89, senior $79, youth $69, child (5–12) $49. Lower Mainland residents pay less (adult $74)."
          },
          {
            label: "Hours",
            text: "They vary by season and weather; check the live notices on grousemountain.com."
          },
          {
            label: "Getting there",
            text: "In season a shuttle runs from Canada Place (check dates), or take the SeaBus to Lonsdale Quay and a bus up the mountain. By car: 6400 Nancy Greene Way, North Vancouver."
          }
        ],
        link: {
          label: "grousemountain.com",
          url: "https://www.grousemountain.com/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Vancouver Aquarium',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: "Inside Stanley Park: rescued sea otters, Steller sea lions, sloths in an Amazon gallery, sharks and jellyfish. Whales and dolphins are no longer kept.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        lead: "A marine-science centre in Stanley Park, known for its rescued sea otters, Steller sea lions and Amazon rainforest gallery. Whales and dolphins are no longer on display.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Sea otters and sea lions",
                text: "Rescued sea otters live in an outdoor habitat with scheduled feedings; Steller sea lions and harbour seals are outdoors too."
              },
              {
                title: "Amazon Rainforest Gallery",
                text: "Two-toed sloths are among the residents."
              },
              {
                title: "Pacific and tropical zones",
                text: "Pacific giant octopus in the Pacific Canada Pavilion; blacktip reef sharks and stingrays in the Tropical Zone."
              },
              {
                title: "More to see",
                text: "Jellyfish, African penguins and axolotls in the \"Frogs Forever?\" gallery."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Arrive at opening",
                text: "Coming at 10 am gives you the smallest crowds."
              },
              {
                title: "Check the day’s programme",
                text: "Feedings and talks run at set times, so look at the schedule when you arrive."
              },
              {
                title: "Cashless",
                text: "Payment is by debit, credit, Apple Pay or Google Pay only."
              },
              {
                title: "Sea Otter Encounter",
                text: "An add-on for ages 8 and up, about $420 per private group of up to five, plus admission."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Adult tickets run about $42–58 depending on the date; online is usually cheapest. Under 3 free."
          },
          {
            label: "Hours",
            text: "They change by date; on days it closes at 5 pm, last admission is 3:30 pm. Check the calendar on vanaqua.org."
          },
          {
            label: "Getting there",
            text: "845 Avison Way, in the park's southeast corner. Walk or cycle the seawall from downtown; paid parking is nearby."
          },
          {
            label: "Time to allow",
            text: "2–3 hours; about 90 minutes if you hurry, around 4 with young children."
          }
        ],
        link: {
          label: "vanaqua.org",
          url: "https://www.vanaqua.org/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Museum of Anthropology (UBC)',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: "A large collection of Northwest Coast First Nations art and artifacts. The Bill Reid Rotunda holds the famous Raven and the First Men sculpture. On the UBC campus.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        lead: "A large collection of Northwest Coast First Nations art in an Arthur Erickson building (opened in 1976) on the UBC campus. Its best-known piece is Bill Reid’s The Raven and the First Men.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The Raven and the First Men",
                text: "Carved in yellow cedar, it shows a Haida story of the raven finding the first people in a clamshell. It stands in the Bill Reid Rotunda; Reid worked on it for about seven years."
              },
              {
                title: "The building",
                text: "Erickson drew on the post-and-beam architecture of northern Northwest Coast peoples; the Raven sits in a custom atrium under a skylight."
              },
              {
                title: "The Great Hall",
                text: "Towering totem poles stand in the Great Hall."
              },
              {
                title: "Exhibitions",
                text: "Tupananchiskama: Ancient Andean Cosmovision runs through January 3, 2027; In a Different Light is ongoing; From the Deep opens November 19, 2026."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Thursday evenings",
                text: "Admission is half-price after 5 pm, and the museum stays open until 9 pm."
              },
              {
                title: "Mondays",
                text: "The museum is closed on Mondays from October 15 to May 15."
              },
              {
                title: "Free entry",
                text: "Children 0–5, Indigenous people, and UBC students, staff and faculty enter free."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Adult $26, senior or student $23, youth (6–18) $13. An Access Pass is $35 for a year."
          },
          {
            label: "Hours",
            text: "Tuesday to Sunday 10 am–5 pm, Thursday until 9 pm. Holiday hours differ; December 25 is closed."
          },
          {
            label: "Getting there",
            text: "Take a bus to UBC Exchange (routes 25, 33, R4, 44, 49, 84, 99 B-Line or 480), then walk about 15 minutes. Parking is $4 per hour in front of the museum."
          }
        ],
        link: {
          label: "moa.ubc.ca",
          url: "https://moa.ubc.ca/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Whistler Blackcomb',
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      text: "The largest ski area in North America, about 2 hours from Vancouver. Skiing and snowboarding in winter; sightseeing, hiking and mountain biking in summer.",
      tags: [{ label: 'Paid', level: 'gold' }, { label: '2h from Vancouver', level: 'blue' }],
      details: {
        lead: "The largest ski area in North America, with about 8,171 acres across two mountains, around two hours from Vancouver. In summer the same lifts serve sightseeing, hiking and mountain biking.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Two mountains",
                text: "Whistler has about 4,757 acres of terrain; Blackcomb has about 3,414 acres and the higher vertical, at 1,565 m."
              },
              {
                title: "Peak 2 Peak Gondola",
                text: "Links the two mountains: 4.4 km in about 11 minutes."
              },
              {
                title: "Summer alpine",
                text: "Sightseeing, hiking and the mountain bike park run in the warmer months."
              },
              {
                title: "Whistler Village",
                text: "A pedestrian village at the base with shops and restaurants; Whistler has its own page on this site."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Winter tires are required",
                text: "On Highway 99 from October 1 to April 30; check DriveBC for current conditions before you set out."
              },
              {
                title: "Allow extra time",
                text: "Summer Friday afternoons and winter storms slow the Sea-to-Sky Highway."
              },
              {
                title: "Stop on the way",
                text: "Shannon Falls and the Sea to Sky Gondola near Squamish are good breaks on the drive."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Lift tickets and summer sightseeing tickets vary by date and season; buy ahead on whistlerblackcomb.com."
          },
          {
            label: "Season",
            text: "Skiing in winter and summer alpine access in the warmer months; the Peak 2 Peak Gondola does not operate in the fall season. Check dates."
          },
          {
            label: "Getting there",
            text: "About 120 km north on Highway 99 (Sea-to-Sky): roughly two hours in clear conditions, 90–150 minutes depending on traffic."
          }
        ],
        link: {
          label: "whistlerblackcomb.com",
          url: "https://www.whistlerblackcomb.com/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Canada Place & Waterfront',
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: "Vancouver's iconic landmark with five white sails: a cruise ship terminal, convention centre and hotel. Walk the waterfront promenade for harbour views and mountain panoramas.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        lead: "Five white sails on Burrard Inlet make Canada Place the postcard landmark of Vancouver. Built for Expo 86 on the site of the old Pier B.C., it is now a cruise terminal, convention centre and hotel, and its waterfront is free to walk.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The sails",
                text: "Five large white sails of Teflon-coated fibreglass form the building’s roof."
              },
              {
                title: "Cruise ships",
                text: "The main cruise terminal for the region; Alaska cruises sail from here."
              },
              {
                title: "FlyOver Canada",
                text: "A virtual flight ride inside the building, with its own ticket."
              },
              {
                title: "Next door",
                text: "The Vancouver Convention Centre West has the largest living roof in Canada, 2.4 hectares."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Free shuttle to Capilano",
                text: "The free Capilano Suspension Bridge shuttle leaves from Canada Place."
              },
              {
                title: "Walk on to Gastown",
                text: "Gastown is about a five-minute walk from Waterfront Station."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free to explore; attractions inside, such as FlyOver Canada, are ticketed."
          },
          {
            label: "Getting there",
            text: "Waterfront Station, with the Expo Line, Canada Line, SeaBus and West Coast Express, is a short walk away."
          },
          {
            label: "Nearby",
            text: "Coal Harbour and the seawall to Stanley Park start here; see the Downtown card under Neighbourhoods."
          }
        ],
        link: {
          label: "canadaplace.ca",
          url: "https://www.canadaplace.ca/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'English Bay Sunset',
      icon: '🌅', iconSrc: '/icons/attractions/ph_sun-horizon-thin.svg',
      text: "The most celebrated sunset spot in Vancouver. Watch the sun go down over the water from English Bay Beach. Free, beautiful, and unforgettable.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'blue' }],
      details: {
        lead: "English Bay Beach, on the west edge of the West End, is the classic place in Vancouver to watch the sun go down over the water, with the North Shore mountains across the bay. It is free all year.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "English Bay Beach",
                text: "Sunset views, plus kayak and stand-up paddleboard rentals. The laughing statues of A-maze-ing Laughter are nearby."
              },
              {
                title: "The Inukshuk",
                text: "Vancouver’s famous Inukshuk stands on the seawall; it inspired the logo of the 2010 Winter Olympics and Paralympics."
              },
              {
                title: "Sunset Beach",
                text: "The giant interlocked wedding rings of the sculpture Engagement are here; the seawall from Sunset Beach to English Bay is about 2 km."
              },
              {
                title: "Second Beach",
                text: "The seawall continues into Stanley Park at Second Beach."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Time it",
                text: "Sunset falls around 4:15 pm in mid-December and around 9:20 pm in late June; check the exact time and arrive early."
              },
              {
                title: "Fireworks have changed",
                text: "The Celebration of Light competition was reported cancelled indefinitely and did not run in 2026; a free one-night show, Summer Lights in English Bay, took place on July 31, 2026. Check current listings."
              },
              {
                title: "New Year’s Day",
                text: "The Polar Bear Swim, held at English Bay since 1920, fills the beach on January 1."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free."
          },
          {
            label: "Getting there",
            text: "A walk or short bus ride west of downtown; several bus routes run along Davie and Denman Streets."
          },
          {
            label: "Nearby",
            text: "Denman Street has the main dining strip; Stanley Park is next door."
          }
        ],
        link: {
          label: "Sunset Beach to English Bay (City of Vancouver)",
          url: "https://vancouver.ca/parks-recreation-culture/sunset-beach-to-english-bay.aspx"
        },
        checked: "November 2026"
      },
    },
  ],

  outdoor: [
    { icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Ski Grouse Mountain', dist: '30 min from Downtown', text: 'Night skiing with city views. Gondola access. A wildlife refuge is on the mountain too.' },
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Sea Kayaking', dist: 'Indian Arm · Deep Cove', text: 'Paddle in calm ocean inlets surrounded by mountains. Guided tours available.' },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Seawall Cycling', dist: '22 km loop · Downtown', text: "World's longest uninterrupted waterfront path. Rent bikes near Stanley Park." },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Hike the Grouse Grind', dist: 'North Vancouver · 30 min', text: '"Mother Nature\'s Stairmaster" — 2.9 km straight up Grouse Mountain. Hard but rewarding.' },
    { icon: '🏄', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Surf Tofino', dist: '4.5 hours from Vancouver', text: 'Wild Pacific surfing on Vancouver Island. World-class waves and stunning coast.' },
    { icon: '🦅', iconSrc: '/icons/attractions/ph_bird-thin.svg', name: 'Whale Watching', dist: 'Vancouver Harbour', text: 'Orca, humpback, and minke whale tours from Vancouver Harbour. Summer best.' },
    { icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg', name: 'Lynn Canyon Park', dist: 'North Vancouver · 25 min', text: 'Free suspension bridge through old-growth rainforest. Less crowded than Capilano.' },
    { icon: '🏔️', iconSrc: '/icons/attractions/ph_mountains-thin.svg', name: 'Garibaldi Provincial Park', dist: '1 hour from Vancouver', text: 'Stunning alpine lakes, glaciers, and volcanic landscapes. Cheakamus Lake trail is iconic.' },
  ],

  food: [
    { icon: '🦞', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Fresh Pacific Seafood', area: 'Granville Island · Gastown', areaLevel: 'blue', text: "Vancouver's location on the Pacific means the freshest Dungeness crab, salmon, halibut, and spot prawns. Joe Fortes and the Lobster Man are local institutions." },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'World-Class Dim Sum', area: 'Richmond · Chinatown', areaLevel: 'danger', text: 'Vancouver has the best dim sum outside of Hong Kong. The suburb of Richmond has over 500 Asian restaurants. Sun Sui Wah and Parker Place Night Market are must-visits.' },
    { icon: '🍣', iconSrc: '/icons/attractions/sushi-thin.svg', title: 'Japanese Food', area: 'Robson Street · Steveston', areaLevel: 'gold', text: "Vancouver has a huge Japanese community. Excellent ramen, sushi, and izakayas throughout the city. Tojo's restaurant created the California Roll right here in Vancouver." },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Indigenous Cuisine', area: 'Downtown · Gastown', areaLevel: 'safe', text: "Salmon, bannock, and traditional First Nations ingredients are celebrated in Vancouver's food scene. Salmon n' Bannock is the city's celebrated Indigenous-owned restaurant." },
    { icon: '☕', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Coffee Culture', area: 'Everywhere!', areaLevel: 'blue', text: "Vancouver is a world-class coffee city. Revolver, Elysian, and 49th Parallel are local roasters with cult followings. Café culture is deeply embedded in the city's DNA." },
    { icon: '🌮', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Food Trucks & Night Markets', area: 'Richmond Night Market', areaLevel: 'purple', text: "The Richmond Night Market (May–October) is the largest in North America with over 100 food vendors. Vancouver's food truck scene covers everything from tacos to Korean BBQ." },
  ],

  seasons: [
    {
      icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — warm, dry, and sunny. Beaches packed, outdoor concerts, markets. Longest days of the year. Book accommodation well in advance. Whistler mountain biking open.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg',
      name: 'Fall',
      months: 'September — November',
      level: 'danger',
      text: 'Still warm in September. Beautiful fall colours in Stanley Park. Fewer tourists, lower prices. Rain begins in October. Ski season starts at Whistler in November.',
      rating: 4,
      note: 'Great value',
    },
    {
      icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      name: 'Winter',
      months: 'December — February',
      level: 'caution',
      text: 'Mild city temperatures (rarely below 0°C) but rainy. World-class skiing at Whistler just 2 hours away. Vancouver itself stays green all winter. Christmas markets and Capilano Canyon Lights.',
      rating: 4,
      note: 'Ski season',
    },
    {
      icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: 'Cherry blossoms (late March–April) make Vancouver one of the most beautiful cities on Earth. Cool and rainy but stunning. Fewer crowds and great hotel deals. Spring skiing at Whistler.',
      rating: 4,
      note: 'Cherry blossoms!',
    },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Plane',
      text: "Vancouver International Airport (YVR) is one of Canada's busiest — direct flights from over 60 cities worldwide including London, Tokyo, Sydney, and all major North American cities.",
      time: '25 min by Canada Line SkyTrain to downtown',
    },
    {
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train / Bus',
      text: 'VIA Rail and Amtrak connect Vancouver to the rest of Canada and Seattle. BC Ferries connect Vancouver Island and the Gulf Islands. TransLink SkyTrain is excellent within the city.',
      time: 'Seattle: 3.5h by Amtrak · Calgary: 13h by train',
    },
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'Getting Around',
      text: 'TransLink SkyTrain, buses, and SeaBus cover the city efficiently. Mobi bike share downtown. Uber and Lyft available. Car not needed in the city but useful for day trips to parks.',
      time: 'SkyTrain Compass Card · translink.ca',
    },
  ],

  stay: [
    {
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      title: 'Downtown / Coal Harbour',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Hotel Vancouver, Rosewood Hotel Georgia, JW Marriott Parq. Walking distance to everything. Best for first-time visitors.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Vancouver', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Vancouver-Hotels.d8030.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🌲', iconSrc: '/icons/attractions/ph_tree-evergreen-thin.svg',
      title: 'West End / Stanley Park',
      area: 'Beach lifestyle · Relaxed vibe',
      text: 'English Bay Beach Hotel, Sylvia Hotel (historic!). Walking distance to Stanley Park and English Bay. Great for couples and outdoor lovers.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+End+Vancouver', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Vancouver--British-Columbia', level: 'danger' },
      ],
    },
    {
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      title: 'Kitsilano',
      area: 'Local feel · Beaches · Cafés',
      text: 'More residential and local. Steps from Kits Beach and 4th Avenue shops. Great B&Bs and vacation rentals. A neighbourhood feel away from the tourist crowds.',
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Kitsilano--Vancouver', level: 'danger' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/vancouver', level: 'blue' },
      ],
    },
    {
      icon: '⛷️', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg',
      title: 'Whistler Village',
      area: '2 hours from Vancouver',
      text: 'If skiing or summer hiking Whistler is the plan — stay in the village. Fairmont Chateau Whistler, Pan Pacific, and many condo rentals available.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Whistler+Village', level: 'blue' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Whistler--British-Columbia', level: 'danger' },
      ],
    },
    {
      icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg',
      title: 'Gastown / Yaletown',
      area: 'Hip · Historic · Restaurants',
      text: "Loden Hotel, Opus Hotel. Vancouver's trendiest neighbourhoods — cobblestone streets, converted warehouses, and the best restaurant scene in the city.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Gastown+Vancouver', level: 'blue' },
      ],
    },
    {
      icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg',
      title: 'Burnaby / Surrey',
      area: 'Budget Friendly · SkyTrain Access',
      text: 'More affordable options just outside Vancouver with easy SkyTrain access into downtown. Metrotown area in Burnaby has good transit and shopping.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Burnaby+BC', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Burnaby-Hotels.d180116.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊', iconSrc: '/icons/attractions/ph_tram-thin.svg',
      title: 'TransLink — Metro Vancouver Transit',
      text: 'TransLink operates SkyTrain, buses, SeaBus, and West Coast Express across Metro Vancouver. The Compass Card is your all-in-one transit card — load it at any station. Vancouver has one of the best public transit systems in Canada — you can get almost anywhere without a car.',
      linkLabel: 'TransLink Official',
      linkUrl: 'https://www.translink.ca',
    },
    modes: [
      {
        icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
        title: 'SkyTrain',
        text: '3 lines: Expo, Millennium, Canada Line. Airport (YVR) to downtown in about 25 min. Hours depend on the day: weekdays roughly 5am to 1:30am, Saturdays 6am to 1:20am, Sundays and holidays 7am to midnight (the Canada Line runs about 5am to 1am every day). Fully automated — no driver.',
        fareBox: {
          label: 'Fares (Compass Card)',
          lines: ['Zone 1: $2.85 / trip', 'Zone 2: $4.20 · Zone 3: $5.40', 'Day Pass: $12.55', 'After 6:30 pm, weekends, holidays: always Zone 1', 'Leaving YVR airport: +$6.50 AddFare', 'Children 12 and under: free'],
        },
        linkLabel: 'SkyTrain Map',
        linkUrl: 'https://www.translink.ca/schedules-and-maps/skytrain',
      },
      {
        icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
        title: 'Bus & SeaBus',
        text: '230+ bus routes cover all of Metro Vancouver. SeaBus connects downtown to North Vancouver in about 12 minutes — scenic and covered by your regular transit fare. Night buses run after SkyTrain closes.',
        fareBox: {
          label: 'Compass Card',
          lines: ['• Buses: tap in only, no tap out', '• SkyTrain & SeaBus: tap in and out at the gates', '• Free transfer within 90 min', '• Load online or at stations', '• Or tap a credit/debit card — pays the higher cash fare'],
        },
        linkLabel: 'Bus Routes',
        linkUrl: 'https://www.translink.ca/schedules-and-maps/buses',
      },
      {
        icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Uber & Lyft', text: 'Both available. More expensive than transit but convenient late at night.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Mobi Bike Share', text: 'E-bikes and regular bikes. About 2,600 bikes at 260+ stations in the city and at UBC. mobibikes.ca' },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Aquabus & False Creek Ferries', text: 'Mini ferries across False Creek to Granville Island. theaquabus.com' },
          { icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'BC Ferries', text: 'Ferries to Vancouver Island and Gulf Islands. bcferries.com' },
        ],
      },
    ],
    proTip: {
      label: 'Airport Pro Tip:',
      text: 'Take the Canada Line SkyTrain from YVR directly to downtown Vancouver — about 25 minutes. The fare is the regular fare plus a $6.50 airport surcharge (YVR AddFare, charged only when leaving the airport): $10.70 with a Compass Card on weekdays before 6:30 pm, $9.35 evenings, weekends and holidays; cash or a single-use ticket costs a little more. Still much cheaper than a taxi (about $46 flat rate) or Uber (roughly $30–45, depending on demand). Trains run every 6–8 minutes in the daytime and less often early, late and in the evening; the first train leaves YVR around 5:09 am and the last around 12:54 am.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: GST 5% + PST 7% = 12%',
    description: 'BC charges both federal GST (5%) and provincial PST (7%) on most purchases. Combined total is 12%. Note: BC uses separate GST and PST — they are not combined into HST like Ontario. Hotels also add a 2% Tourism Levy on top.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only · No PST', example: '$100 → pay $105', level: 'safe' },
      { label: 'Vancouver / BC', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'danger', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'blue' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'blue' },
    ],
    appliesTo: [
      { icon: '👜', iconSrc: '/icons/attractions/ph_handbag-thin.svg', label: 'Most retail goods and clothing' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals and takeout' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels + 2% Tourism Levy' },
      { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', label: 'Flights and transportation' },
      { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Entertainment and activities' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology' },
    ],
    exempt: [
      { icon: '🥬', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Basic groceries (fresh food)' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medications' },
      { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', label: 'Most medical services' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Most educational services' },
      { icon: '🏠', iconSrc: '/icons/attractions/ph_house-thin.svg', label: 'Long-term residential rent' },
      { icon: '👶', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: 'Most childcare services' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    {
      icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg',
      title: 'Weather',
      text: 'Mild and rainy Oct–Apr. Warm and sunny Jul–Sep. Always pack a light rain jacket. Snow in city is rare.',
    },
    {
      icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg',
      title: 'Currency',
      text: 'Canadian Dollar (CAD). Vancouver is expensive — budget $150–250/night for mid-range hotels.',
    },
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'Compass Card',
      text: 'Buy at any SkyTrain station. Or tap your Visa/Mastercard directly on the reader — no card needed.',
    },
    {
      icon: '🌐', iconSrc: '/icons/attractions/ph_translate-thin.svg',
      title: 'Language',
      text: "English primary. One of the world's most multilingual cities — Mandarin, Cantonese, Punjabi widely spoken.",
    },
    {
      icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg',
      title: 'Hospital',
      lines: ['Vancouver General Hospital', '899 W 12th Ave', '604-875-4111'],
    },
    {
      icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg',
      title: 'Cannabis',
      text: 'Legal in Canada. Licensed stores throughout Vancouver. Must be 19+. Not permitted in public parks or beaches.',
    },
    {
      icon: '🚰', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      title: 'Tap Water',
      text: 'Tap water is safe and delicious throughout Vancouver. No need to buy bottled water.',
    },
    {
      icon: '🐻', iconSrc: '/icons/attractions/ph_paw-print-thin.svg',
      title: 'Wildlife Note',
      text: 'Coyotes active in Stanley Park at night. Bears enter suburban areas occasionally. Keep food secured when camping nearby.',
    },
  ],
};

export default VANCOUVER;
