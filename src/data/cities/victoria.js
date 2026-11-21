// Victoria — данные страницы /city/victoria
// Районы пока без фото (есть только герб-crest, не фото) — используют
// icon-fallback в CityPage.jsx, а не выдуманные пути к несуществующим
// картинкам. Hero-видео и постер-кадр из него — реальные, добавлены.

export const VICTORIA = {
  slug: 'victoria',
  name: 'Victoria',
  province: 'British Columbia',
  provinceId: 'bc',
  region: 'BC',
  tag: 'British Columbia · The Garden City',
  accentLevel: 'purple',
  heroVideo: '/Cities/Victoria/14052318_3840_2160_60fps.mp4',
  heroImage: '/Cities/Victoria/hero-poster.jpg',
  heroIcon: '🏛️',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 48.4284, lon: -123.3656 },
  subtitle: 'The Capital on the Pacific',
  description:
    "British Columbia's capital sits at the southern tip of Vancouver Island — a walkable harbour city of Victorian architecture, flower-lined streets, afternoon tea, whale watching and some of the mildest weather in Canada. A world away from the mainland, just a ferry ride from Vancouver.",

  actions: [
    { label: 'Explore Victoria', href: '#neighbourhoods' },
    { label: 'Whale Watching', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈92K city' },
    { label: 'Metro Area', value: '≈397K' },
    { label: 'Language', value: 'English' },
    { label: 'Time Zone', value: 'Pacific (UTC-7)' },
    { label: 'Airport', value: 'YYJ' },
    { label: 'From Vancouver', value: 'Ferry 1h35' },
  ],

  badges: ['Provincial Capital', 'Very Walkable', 'Mild Climate'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 5 },
  ],

  highlights: [
    { value: 'Mile 0', label: 'The Trans-Canada Highway starts here, at Beacon Hill Park', level: 'purple' },
    { value: '1h 35', label: 'BC Ferries crossing from Tsawwassen (Vancouver) to Swartz Bay', level: 'safe' },
    { value: '$6', label: 'The most you pay for transit in a day with Umo fare capping', level: 'gold' },
    { value: 'Oldest', label: 'Chinatown in Canada — home to narrow Fan Tan Alley', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Inner Harbour', image: '/Cities/Victoria/Inner Harbour.jpg', icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg', tag: 'Downtown', tagLevel: 'purple', meta: 'Parliament · Fairmont Empress · Museum · Water taxis',
      details: {
        lead: "The postcard heart of Victoria, where the harbour meets the BC Parliament Buildings, the Royal BC Museum and the Fairmont Empress. Seaplanes and ferries come and go, and the whole downtown is a short walk away.",
        see: [
          {
            title: "BC Parliament Buildings",
            text: "Guided and self-guided tours are free, Monday to Friday, 8:30 am–4:30 pm. No booking is needed for guided tours; arrive 10 minutes early for security screening. Closed on weekends and holidays."
          },
          {
            title: "Royal BC Museum",
            text: "Open 10 am–5 pm daily. Adult $32, senior or youth $22, student $19; free for children 5 and under and Indigenous peoples. Ancient Egypt: Obsessed with Life runs through January 3, 2027."
          },
          {
            title: "Fairmont Empress",
            text: "The hotel on the harbour is known for its afternoon tea. Check current prices and booking on fairmont.com/empress."
          },
          {
            title: "Harbour and getting around",
            text: "The seaplane and ferry terminals are a couple of minutes’ walk away. Pedicabs, e-bikes and hop-on, hop-off bus tours are available downtown."
          }
        ],
        eat: [
          {
            title: "Tea and coffee",
            text: "Murchie's Tea & Coffee is one of the downtown names Tourism Victoria lists for tea and a light bite."
          },
          {
            title: "Pubs",
            text: "Bard & Banker, Garrick’s Head Pub and Swans Pub & Brewery are among the pubs Tourism Victoria names downtown."
          },
          {
            title: "Plenty of choice",
            text: "Tourism Victoria says the city has the most restaurants, pubs and bars per person in Canada."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "The ferry and seaplane terminals are a couple of minutes’ walk from downtown. The Swartz Bay ferry terminal is about a 30-minute drive away."
          },
          {
            label: "Time to allow",
            text: "Half a day for the harbour, Parliament and the museum. Walking from the edge of the Inner Harbour to the far side of Old Town takes as little as 15 minutes."
          },
          {
            label: "Getting around",
            text: "Downtown is compact and walkable. A network of bike paths runs through it, with a Bike Valet behind City Hall at Centennial Square."
          }
        ],
        checked: "November 2026"
      },
    },
    // Фото: Fisgard Street и Gate of Harmonious Interest, Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Chinatown & Old Town', image: '/Cities/Victoria/Chinatown & Old Town.jpg', icon: '🏮', iconSrc: '/icons/attractions/ph_flame-thin.svg', tag: 'Historic', tagLevel: 'danger', meta: 'Fan Tan Alley · Market Square · Government Street shops',
      details: {
        lead: "Canada's oldest Chinatown and the historic Old Town around Government Street and Market Square, a few blocks from the Inner Harbour. Chinatown, a National Historic Site since 1995, is only a few blocks long.",
        see: [
          {
            title: "Gate of Harmonious Interest",
            text: "The ornate gate on Fisgard Street marks Chinatown's entrance. It was erected in 1981 and stands about 11.6 m tall."
          },
          {
            title: "Fan Tan Alley",
            text: "Canada's narrowest street, less than 0.9 m wide at its narrowest point. It runs between Fisgard Street and Pandora Avenue and holds more than a dozen small shops."
          },
          {
            title: "Chinese Canadian Museum",
            text: "Admission is by donation."
          },
          {
            title: "Market Square and Government Street",
            text: "Tourism Victoria recommends both for browsing: Market Square is a plaza of shops, and Government Street is the main shopping street of Old Town."
          }
        ],
        eat: [
          {
            title: "Fisgard Street",
            text: "Guides name Little Yunnan, Bao and Ugly Duckling Dining among the Chinatown restaurants."
          },
          {
            title: "Fan Tan Alley treats",
            text: "Ice cream and other treats, vintage records and clothing shops sit along the alley."
          },
          {
            title: "Old Town pubs",
            text: "Garrick’s Head Pub and The Churchill are among the pubs Tourism Victoria lists."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "A few blocks from the Inner Harbour. Walking from the harbour edge to the far side of Old Town takes as little as 15 minutes."
          },
          {
            label: "Heritage",
            text: "Chinatown was designated a National Historic Site in 1995, and Fan Tan Alley became a heritage property in 2001."
          },
          {
            label: "Nearby",
            text: "The Inner Harbour, Parliament Buildings and Royal BC Museum are a short walk south."
          }
        ],
        checked: "November 2026"
      },
    },
    // Фото: тотемный столб в Beacon Hill Park, Wikimedia Commons, общественное достояние (автора указывать не требуется)
    { name: 'James Bay', image: '/Cities/Victoria/James Bay.jpg', icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', tag: 'Parks & Sea', tagLevel: 'safe', meta: 'Beacon Hill Park · Mile 0 · Dallas Road waterfront walk',
      details: {
        lead: "A residential neighbourhood just south of downtown, beside Beacon Hill Park and the Strait of Juan de Fuca. It is where artist Emily Carr was born, and where the Trans-Canada Highway begins at Mile 0.",
        see: [
          {
            title: "Beacon Hill Park",
            text: "A city park since 1882, about 74 hectares (183 acres). A totem pole of about 38.8 m (127 ft), carved from a single cedar and erected in 1956, stands in the park."
          },
          {
            title: "Beacon Hill Children’s Farm",
            text: "A petting zoo inside the park with seasonal hours; check before you go."
          },
          {
            title: "Mile 0 and the Terry Fox statue",
            text: "At the corner of Douglas Street and Dallas Road, beside the park, the Mile 0 marker starts the Trans-Canada Highway. A Terry Fox statue stands nearby."
          },
          {
            title: "Emily Carr House",
            text: "At 207 Government Street, the childhood home of the artist and a National Historic Site. Check opening times before you go."
          }
        ],
        eat: [
          {
            title: "Picnic in the park",
            text: "Beacon Hill Park has lawns, gardens and ponds that suit a picnic."
          },
          {
            title: "For more choice",
            text: "James Bay is mostly residential. The Inner Harbour and Old Town restaurants are within walking distance."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Walk south from the Inner Harbour; the Mile 0 marker is at Douglas Street and Dallas Road."
          },
          {
            label: "Time to allow",
            text: "Half a day for the park, Mile 0 and the Dallas Road waterfront."
          },
          {
            label: "Views",
            text: "The Dallas Road waterfront looks across the Strait of Juan de Fuca."
          }
        ],
        checked: "November 2026"
      },
    },
    // Фото от владельца сайта: Fernwood Square, Belfry Theatre и Fernwood Inn
    { name: 'Fernwood', image: '/Cities/Victoria/Fernwood.jpg', icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg', tag: 'Local', tagLevel: 'purple', meta: 'Indie cafés · Theatre · Neighbourhood square · Local feel',
      details: {
        lead: "A small, arts-minded neighbourhood about 15 minutes’ walk from downtown, built around Fernwood Square and Gladstone Avenue.",
        see: [
          {
            title: "Belfry Theatre",
            text: "Housed in a former church at 1291 Gladstone Avenue, with a resident company focused on contemporary Canadian plays."
          },
          {
            title: "Theatre Inconnu",
            text: "Across the street: Victoria's oldest alternative theatre company, with affordable tickets."
          },
          {
            title: "Open Studios and Fernfest",
            text: "Open Studios Fernwood is a walkable art event, and Fernfest is the neighbourhood’s annual celebration of arts and music. Check this year’s dates."
          }
        ],
        eat: [
          {
            title: "The Fernwood Inn",
            text: "A casual pub and the neighbourhood's informal gathering spot."
          },
          {
            title: "Stage Wine Bar",
            text: "A more upscale option for dinner."
          },
          {
            title: "Little June",
            text: "Coffee and brunch."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "About a 15-minute walk or a 5-minute drive from downtown."
          },
          {
            label: "Best for",
            text: "An evening: a show at the Belfry followed by dinner in the neighbourhood."
          },
          {
            label: "Check ahead",
            text: "Theatre schedules and festival dates change each season."
          }
        ],
        checked: "November 2026"
      },
    },
    // Фото от владельца сайта: Oak Bay Avenue
    { name: 'Oak Bay Village', image: '/Cities/Victoria/Oak Bay Village.jpg', icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Seaside', tagLevel: 'blue', meta: 'English-style village · Tea rooms · Beaches · Stargazing spot',
      details: {
        lead: "Oak Bay's village centre, a shopping street of coffee houses, tea rooms and pubs just east of downtown Victoria, with beaches, a marina and parkland close by.",
        see: [
          {
            title: "Oak Bay Avenue",
            text: "Boutiques and coffee houses along the avenue. A European-style Night Market runs on the second Wednesday of the month, June through September."
          },
          {
            title: "Willows Beach",
            text: "A true sand beach with a shaded playground. The Kiwanis Tearoom serves drinks and snacks in summer."
          },
          {
            title: "Uplands Park and Cattle Point",
            text: "A natural area with a Garry oak meadow and rare plants. Cattle Point has rocks to explore and ocean views, and is the Cattle Point Star Sanctuary for stargazing."
          },
          {
            title: "Oak Bay Marina and Beach Drive",
            text: "Harbour seals often appear around the docks. Beach Drive is a seaside cycling route past gardens and heritage houses."
          }
        ],
        eat: [
          {
            title: "Vis-à-Vis",
            text: "A breakfast and brunch spot, suggested for a pain au chocolat and a latte."
          },
          {
            title: "Penny Farthing Pub",
            text: "An English-style pub for comfort food and a pint."
          },
          {
            title: "Fish and chips and the marina",
            text: "Estevan Village, near Willows Beach, is known for fish and chips; the Marina Restaurant looks over the harbour."
          }
        ],
        practical: [
          {
            label: "Getting there",
            text: "Oak Bay is just east of downtown Victoria. Bike rentals and tours for Beach Drive are available from local operators."
          },
          {
            label: "A walking loop",
            text: "One local guide suggests a 5 km loop: Uplands Park, around Cattle Point, along Willows Beach and back."
          },
          {
            label: "Stargazing",
            text: "Cattle Point is the stargazing spot; go after dark and check the weather."
          }
        ],
        checked: "November 2026"
      },
    },
    // Фото: Craigdarroch Castle, Wikimedia Commons, CC0 (автора указывать не требуется)
    { name: 'Rockland & Cook Street Village', image: '/Cities/Victoria/Rockland & Cook Street Village.jpg', icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg', tag: 'Heritage', tagLevel: 'gold', meta: 'Craigdarroch Castle · Heritage homes · Cafés and bakeries',
      details: {
        lead: "Two neighbouring areas south-east of downtown: Rockland, with Victorian mansions, Craigdarroch Castle and the Government House gardens, and Cook Street Village, a tree-lined street of cafés, pubs and small shops.",
        see: [
          {
            title: "Craigdarroch Castle",
            text: "Built from 1887 to 1890 for coal baron Robert Dunsmuir, who died a year before it was finished; 39 rooms. Open Wednesday to Sunday, 10 am–4:30 pm; closed December 25, 26 and January 1."
          },
          {
            title: "Government House gardens",
            text: "At 1401 Rockland Avenue and free to visit from dawn to dusk, with a rose garden at the front and a Garry oak hillside behind."
          },
          {
            title: "Heritage streets",
            text: "Rockland’s quiet streets are lined with heritage homes, and Rockland and Gonzales are walkable from one another."
          }
        ],
        eat: [
          {
            title: "Cook Street Village",
            text: "An abundance of cafés, restaurants, pubs and small grocery shops along a pedestrian-friendly street."
          },
          {
            title: "Named by guides",
            text: "Empire Donuts, Moka House and Big Wheel Burger are among the places guides mention."
          }
        ],
        practical: [
          {
            label: "Castle admission",
            text: "Adult $23.50, senior or student $21, youth (12–17) $15.50, child (4–11) $11. Last tickets are sold about 45 minutes before closing."
          },
          {
            label: "Getting there",
            text: "From downtown it is about 2 km up Fort Street, a steady uphill climb. Fort Street is also on a bus route and has bike lanes."
          },
          {
            label: "Parking",
            text: "The castle has a free private lot, included with admission."
          },
          {
            label: "Accessibility",
            text: "The castle has no ramps or elevators and is not wheelchair accessible. Tours take at least 45 minutes."
          }
        ],
        checked: "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Inner Harbour',
      icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      text: "The postcard heart of Victoria — seaplanes, harbour ferries, street performers and the best views of the Parliament Buildings and the Fairmont Empress. Pleasant at any hour; magical at dusk.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Iconic', level: 'purple' }],
      details: {
        lead: "The postcard heart of Victoria, where the harbour meets the BC Parliament Buildings, the Royal BC Museum and the Fairmont Empress. It is free to walk around, and most of downtown is within a short stroll.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The harbour",
                text: "Seaplanes and ferries come and go, and the seaplane and ferry terminals are a couple of minutes’ walk from downtown."
              },
              {
                title: "The skyline",
                text: "The Parliament Buildings, the Royal BC Museum and the Fairmont Empress all face the water."
              },
              {
                title: "Getting around",
                text: "Pedicabs, e-bikes and hop-on, hop-off bus tours are available downtown."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Come back at dusk",
                text: "The Parliament Buildings are outlined in lights each evening from sunset."
              },
              {
                title: "Walk it",
                text: "Walking from the edge of the Inner Harbour to the far side of Old Town takes as little as 15 minutes."
              },
              {
                title: "Bikes",
                text: "A network of bike paths leads in, and there is a Bike Valet behind City Hall at Centennial Square."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free to walk around."
          },
          {
            label: "Time to allow",
            text: "An hour for the waterfront, a half day with Parliament and the museum."
          },
          {
            label: "Getting there",
            text: "The ferry and seaplane terminals are a couple of minutes’ walk away. Swartz Bay ferry terminal is about a 30-minute drive."
          },
          {
            label: "Nearby",
            text: "Parliament Buildings, Royal BC Museum, Old Town and Chinatown are all a short walk."
          }
        ],
        link: {
          label: "Tourism Victoria",
          url: "https://www.tourismvictoria.com/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'BC Parliament Buildings',
      icon: '🏛️', iconSrc: '/icons/attractions/ph_bank-thin.svg',
      text: "The provincial legislature faces the harbour and is outlined by more than 3,300 lights at night. Free guided and self-guided tours run on weekdays.",
      tags: [{ label: 'Grounds free', level: 'safe' }, { label: 'Culture', level: 'purple' }],
      details: {
        lead: "The provincial legislature faces the harbour. Free tours let you see inside on weekdays, and at night the building is outlined in lights.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Free tours",
                text: "Guided and self-guided tours are free, Monday to Friday, 8:30 am–4:30 pm. The Tour Desk is just inside the Main Entrance."
              },
              {
                title: "Lights at night",
                text: "More than 3,300 lights outline the buildings each evening from sunset until about 1 am. They have run nightly since 1965; the first lights were installed in 1897 for Queen Victoria’s Diamond Jubilee."
              },
              {
                title: "The building",
                text: "A gilded statue of Captain George Vancouver sits on the central dome, and a statue of Queen Victoria stands in front."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "No booking needed",
                text: "You do not need to register for guided tours. Arrive 10 minutes before a listed time."
              },
              {
                title: "Allow time for security",
                text: "Everyone passes through screening at the Main Entrance."
              },
              {
                title: "Check the schedule",
                text: "Tour times change weekly because of school and group bookings. The Legislature posts the next week’s times on Friday afternoon."
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
            label: "Hours",
            text: "Monday to Friday, 8:30 am–4:30 pm. Closed on weekends and holidays; hours can change without notice."
          },
          {
            label: "Getting there",
            text: "On the Inner Harbour, a short walk from downtown."
          },
          {
            label: "Questions",
            text: "Parliamentary Tour Program: 250-387-3046."
          }
        ],
        link: {
          label: "BC Legislature: public tours",
          url: "https://www.leg.bc.ca/visit/tour-information/public-tours"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Afternoon Tea at the Empress',
      icon: '🫖', iconSrc: '/icons/attractions/ph_coffee-thin.svg',
      text: "Victoria's most famous ritual — tiered trays, loose-leaf tea and a lobby that feels like another century. Reserve ahead in summer. Other tea rooms around town offer more relaxed alternatives.",
      tags: [{ label: 'Reservation', level: 'gold' }, { label: 'Tradition', level: 'danger' }],
      details: {
        lead: "Afternoon tea at the Fairmont Empress is served in the hotel’s Lobby Lounge: freshly baked scones, finger sandwiches, pastries and a wide choice of teas.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "What you get",
                text: "Scones, finger sandwiches, pastries and \"the finest assortment of teas\", according to the hotel."
              },
              {
                title: "Where",
                text: "The Lobby Lounge of the Fairmont Empress, on the Inner Harbour."
              },
              {
                title: "Festive tea",
                text: "A Festive Afternoon Tea runs November 20 to December 31, 2026: $279 per adult and $70 per child plus taxes."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Reserve ahead",
                text: "Guides advise booking in advance, especially in summer; the hotel takes bookings by phone at +1-250-384-8111 and online."
              },
              {
                title: "Ask about dress",
                text: "I found no official dress code, so ask when you book."
              },
              {
                title: "Cheaper alternatives",
                text: "Other tea rooms around town offer a more relaxed afternoon tea."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Varies by season and menu. Guides put the classic tea at roughly $100 or more per person; confirm on the hotel’s site."
          },
          {
            label: "Booking",
            text: "By phone (+1-250-384-8111) or online. Same-day tables are sometimes free off-season, but booking ahead is safer."
          },
          {
            label: "Getting there",
            text: "On the Inner Harbour in the middle of downtown."
          }
        ],
        link: {
          label: "Fairmont Empress: afternoon tea",
          url: "https://www.fairmont.com/empress-victoria/dining/afternoon-tea/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Royal BC Museum',
      icon: '🌍', iconSrc: '/icons/attractions/ph_globe-thin.svg',
      text: "Natural and human history of British Columbia, right on the Inner Harbour. Open daily; check the museum’s notices for current exhibitions and which galleries are open.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        lead: "The province’s museum of natural and human history, beside the Parliament Buildings on the Inner Harbour, with IMAX films and changing exhibitions.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Ancient Egypt: Obsessed with Life",
                text: "The current feature exhibition runs from June 5, 2026 to January 3, 2027."
              },
              {
                title: "Permanent galleries",
                text: "Natural history and human history of British Columbia. The Old Town gallery reopened in 2023, and exhibits in the First Peoples gallery reopened in 2024; check which galleries are open on the day."
              },
              {
                title: "IMAX Victoria",
                text: "The museum’s IMAX theatre shows documentaries and feature films, with a combined museum and IMAX ticket."
              },
              {
                title: "Cafe and shop",
                text: "Hide + Seek Coffee is open 9 am–4 pm daily, and the Royal Museum Shop 10 am–5 pm."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Check what’s open",
                text: "The museum is revisiting how Indigenous materials are presented, so look at its notices before you go."
              },
              {
                title: "Free for some visitors",
                text: "Children 5 and under and Indigenous peoples enter free; tell staff at the admission desk."
              },
              {
                title: "Combo tickets",
                text: "Museum plus an IMAX documentary costs $40 for an adult; a feature film is $43. 3D adds $1."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Museum only: adult $32, senior or youth $22, student $19. Prices change seasonally."
          },
          {
            label: "Hours",
            text: "10 am–5 pm daily; closed December 25 and January 1."
          },
          {
            label: "Getting there",
            text: "On the Inner Harbour, next to the Parliament Buildings."
          }
        ],
        link: {
          label: "Royal BC Museum",
          url: "https://royalbcmuseum.bc.ca/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Craigdarroch Castle',
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      text: "A Victorian mansion built for coal baron Robert Dunsmuir, now a National Historic Site. Self-guided tours of 39 rooms, with stained glass and a tower. Open Wednesday to Sunday.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'History', level: 'purple' }],
      details: {
        lead: "A Victorian mansion built from 1887 to 1890 for coal baron Robert Dunsmuir, who died a year before it was finished. It has 39 rooms and is now a National Historic Site.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The house",
                text: "A stone castle on a hill in Rockland with 39 rooms; visitors walk through on self-guided tours."
              },
              {
                title: "Detail inside",
                text: "Stained glass and Victorian interiors fill the house."
              },
              {
                title: "Guided option",
                text: "A personalized guided tour costs the regular admission plus $50 for the guide; book through the Visitor Experience Coordinator."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Plan for stairs",
                text: "There are no ramps or elevators, so the castle is not wheelchair accessible. Guide and service dogs are welcome."
              },
              {
                title: "Travel light",
                text: "Leave coats, backpacks and strollers in your vehicle; food, drink, tripods and selfie sticks are not allowed inside. Flash photography is permitted."
              },
              {
                title: "Mind the days",
                text: "Open Wednesday to Sunday only, and closed December 25, 26 and January 1."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Adult $23.50, senior or student $21, youth (12–17) $15.50, child (4–11) $11; 3 and under free with a paying adult."
          },
          {
            label: "Hours",
            text: "Wednesday to Sunday, 10 am–4:30 pm. The ticket office closes 45 minutes before closing."
          },
          {
            label: "Getting there",
            text: "About 2 km up Fort Street from downtown, a steady uphill climb. Fort Street is on a bus route and has bike lanes. Parking in the private lot is free."
          },
          {
            label: "Time to allow",
            text: "Tours take at least 45 minutes."
          }
        ],
        link: {
          label: "thecastle.ca",
          url: "https://thecastle.ca/plan/plan-your-visit"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Butchart Gardens',
      icon: '🌺', iconSrc: '/icons/attractions/ph_flower-thin.svg',
      text: "About 55 acres of formal gardens in Brentwood Bay: the Sunken Garden, Rose Garden, Japanese Garden and Italian Garden. About a 35-minute drive from downtown; allow half a day.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: '35 min away', level: 'purple' }],
      details: {
        lead: "About 55 acres of formal gardens in Brentwood Bay, open year round. The Sunken Garden, Rose Garden, Japanese Garden and Italian Garden are the best known.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "The gardens",
                text: "The Sunken Garden, Rose Garden, Japanese Garden, Italian Garden and a Mediterranean Garden."
              },
              {
                title: "Seasonal events",
                text: "Greenhouse tours on weekends from October 31 to November 29, and the Magic of Christmas light-up on December 1 at 6 pm."
              },
              {
                title: "Fireworks and entertainment",
                text: "Free for ticket holders when offered, but they can be cancelled without notice."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Prices change by season",
                text: "The gardens charge less in autumn and winter than in summer, so the same visit costs more in June than in November."
              },
              {
                title: "No senior or student discount",
                text: "Rates include tax. Active Canadian Armed Forces members enter free."
              },
              {
                title: "Closed in January",
                text: "The gardens close for a staff holiday from January 18 to 31, 2027, and on December 25."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price (2026–27)",
            text: "Adult $28.60 in November, $41.00 over Christmas (Dec 26–Jan 6), up to $45.60 in summer 2027. Youth about half price; children (5–12) $3–5. Rates include tax."
          },
          {
            label: "Hours",
            text: "In November 2026 the gates are open 10 am–4:30 pm. Hours change by season, so check before you go."
          },
          {
            label: "Getting there",
            text: "About a 35-minute drive from downtown Victoria, at 800 Benvenuto Avenue, Brentwood Bay. Check BC Transit and tour operators for other options."
          },
          {
            label: "Time to allow",
            text: "A half day."
          }
        ],
        link: {
          label: "butchartgardens.com",
          url: "https://www.butchartgardens.com/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Beacon Hill Park & Mile 0',
      icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg',
      text: "About 183 acres of gardens, ponds, free-roaming peacocks and sea views. The Mile 0 marker for the Trans-Canada Highway stands at Douglas Street and Dallas Road, with views across the strait to the Olympic Mountains.",
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Outdoor', level: 'purple' }],
      details: {
        lead: "A city park since 1882, about 74 hectares (183 acres) of gardens, ponds and lawns beside the Strait of Juan de Fuca. Entry is free.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Peacocks",
                text: "Free-roaming peacocks have lived in the park since about 1893; local reports count 60 or more."
              },
              {
                title: "Mile 0",
                text: "The marker that starts the Trans-Canada Highway is at the corner of Douglas Street and Dallas Road. A Terry Fox statue stands nearby."
              },
              {
                title: "Totem pole",
                text: "A pole of about 38.8 m (127 ft), carved from a single cedar and erected in 1956, stands in the park."
              },
              {
                title: "Sea views",
                text: "The Dallas Road edge looks across the strait toward the Olympic Mountains."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Children’s Farm",
                text: "The Beacon Hill Children’s Farm is a petting zoo with seasonal hours and an entry fee. Check before you go."
              },
              {
                title: "Bring a picnic",
                text: "The lawns, gardens and ponds suit a picnic."
              },
              {
                title: "Take your time",
                text: "The park joins James Bay and Cook Street Village, so you can walk through on the way between them."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free. The Children’s Farm charges admission."
          },
          {
            label: "Time to allow",
            text: "A couple of hours, or a half day with the waterfront."
          },
          {
            label: "Getting there",
            text: "Walk south from the Inner Harbour. The Mile 0 marker is at Douglas Street and Dallas Road."
          }
        ],
        link: {
          label: "Friends of Beacon Hill Park",
          url: "https://fbhp.ca/"
        },
        checked: "November 2026"
      },
    },
    {
      name: "Fisherman's Wharf",
      icon: '⚓', iconSrc: '/icons/attractions/ph_anchor-thin.svg',
      text: "A colourful floating-home community with food kiosks, harbour seals and Barb’s Fish & Chips on the dock. About a 10-minute walk or a harbour-ferry ride from the Inner Harbour.",
      tags: [{ label: 'Free to walk', level: 'safe' }, { label: 'Casual eats', level: 'danger' }],
      details: {
        lead: "A colourful floating-home community on the docks beside the harbour, with food kiosks, shops and harbour seals. It is free to walk around.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "Float homes",
                text: "The Greater Victoria Harbour Authority has set aside 33 berths for floating residences. They are private homes: you can walk the docks and look, but not go inside."
              },
              {
                title: "Harbour seals",
                text: "Seals are regularly seen around the docks."
              },
              {
                title: "Food on the dock",
                text: "Barb’s Fish & Chips at 1 Dallas Road has been open since 1984. Other kiosks sell tacos, pizza and ice cream."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Do not feed the seals",
                text: "Feeding them is now prohibited by the city because it disrupts their ecosystem."
              },
              {
                title: "Respect the residents",
                text: "The float homes are people’s houses, so keep to the public docks."
              },
              {
                title: "Come by water",
                text: "Victoria Harbour Ferry has a stop at Fisherman’s Wharf; check the operator for times and fares."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Free to walk around; food is paid."
          },
          {
            label: "Getting there",
            text: "About a 10-minute walk from downtown (one guide), or by Victoria Harbour Ferry from the Inner Harbour."
          },
          {
            label: "Time to allow",
            text: "An hour, longer if you stop for lunch."
          }
        ],
        link: {
          label: "Greater Victoria Harbour Authority",
          url: "https://gvha.ca/"
        },
        checked: "November 2026"
      },
    },
    {
      name: 'Whale Watching',
      icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg',
      text: "Tours depart from the Inner Harbour and nearby marinas into the Salish Sea — orcas, humpbacks and grey whales, plus seals and sea lions. Choose operators that follow responsible-viewing guidelines.",
      tags: [{ label: 'Paid Tour', level: 'gold' }, { label: 'Spring–Fall', level: 'purple' }],
      details: {
        lead: "Boat tours leave from the Inner Harbour and nearby marinas into the Salish Sea, looking for orcas, humpback whales, seals and sea lions. Most last about three hours.",
        columns: [
          {
            title: "Highlights",
            icon: "/icons/attractions/ph_sparkle-thin.svg",
            items: [
              {
                title: "What you might see",
                text: "Orcas and humpbacks, plus seals and sea lions. Sightings are never guaranteed."
              },
              {
                title: "Season",
                text: "Prince of Whales runs from March 27 to November 1 in 2026. Guides put July and August as peak season for orcas, and September and October as the time humpbacks feed heavily."
              },
              {
                title: "Operators",
                text: "Prince of Whales and Orca Spirit are two of the operators listed for Victoria; compare covered and open boats."
              }
            ]
          },
          {
            title: "Tips",
            icon: "/icons/attractions/ph_lightbulb-thin.svg",
            items: [
              {
                title: "Know the distance rules",
                text: "Vessels must stay 1,000 m from Southern Resident killer whales (rule in force until May 31, 2027), 200 m from other killer whales and from resting whales or whales with a calf, and 100 m from other whales, dolphins and porpoises."
              },
              {
                title: "Choose a responsible operator",
                text: "Pick one that follows the Be Whale Wise guidelines, which also suggest limiting viewing time to 30 minutes or less."
              },
              {
                title: "Book ahead",
                text: "Some operators need at least 24 hours’ notice. Dress warmly: it is colder on the water."
              }
            ]
          }
        ],
        practicalTitle: "Plan your visit",
        practical: [
          {
            label: "Price",
            text: "Listings for 3-hour tours in 2026 run from about $120 to $140 or more per adult, plus taxes and fees; for example, Orca Spirit listed $139 for October departures."
          },
          {
            label: "Time to allow",
            text: "About 3 to 3.5 hours for a standard tour; extended tours run longer."
          },
          {
            label: "Getting there",
            text: "Tours leave from the Inner Harbour and nearby marinas; your operator will tell you the departure point."
          }
        ],
        link: {
          label: "Be Whale Wise guidelines",
          url: "https://www.bewhalewise.org/"
        },
        checked: "November 2026"
      },
    },
  ],

  outdoorHeading: 'Nature Beyond the Harbour',
  outdoor: [
    { icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', name: 'Beacon Hill Park & Dallas Road', dist: 'In the city', text: 'Gardens, ponds and peacocks in the park, then a cliff-top walk along Dallas Road with views across the strait to the Olympic Mountains. Easy, flat and free.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', name: 'Goldstream Provincial Park', dist: '~20 min drive', text: 'Old-growth forest, Niagara Falls (a 47m drop) and the steep Mount Finlayson trail. Chum salmon spawn here mid-Oct to early Dec, drawing bald eagles.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', name: 'Galloping Goose Trail', dist: 'Bike or hike', text: 'A flat, car-free regional trail from downtown out to the western communities, passing Thetis Lake Regional Park along the way.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Sooke Coast Hiking', dist: '30–60 min drive', text: 'East Sooke Regional Park has rugged coastal hiking; the Juan de Fuca Marine Trail and Botanical Beach are further out. Check tides and carry offline maps.' },
    { icon: '🛶', iconSrc: '/icons/attractions/ph_boat-thin.svg', name: 'Kayaking & Paddleboarding', dist: 'Inner Harbour & Gorge', text: 'Rent on the sheltered Inner Harbour and Gorge Waterway, or join a guided sea-kayak trip along the coast. The Pacific stays cold all year — wear a lifejacket.' },
    { icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg', name: 'Southern Gulf Islands', dist: 'Ferry from Swartz Bay', text: 'Salt Spring, Pender, Galiano, Mayne and Saturna islands — markets and galleries on Salt Spring, quiet cycling and beaches on the smaller islands.' },
  ],

  food: [
    { icon: '🫖', iconSrc: '/icons/attractions/ph_coffee-thin.svg', title: 'Afternoon Tea', area: 'Inner Harbour · Government St', areaLevel: 'purple', text: 'Victoria takes tea seriously. The Fairmont Empress is the classic, and local tea merchants and tea rooms across the city offer calmer, cheaper ways to join the tradition.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Fish & Chips', area: "Ogden Point · Fisherman's Wharf", areaLevel: 'blue', text: "Fresh Pacific fish served from harbourside kiosks and shipping-container counters. Eat on the water with seagulls watching your every bite." },
    { icon: '🍺', iconSrc: '/icons/attractions/ph_beer-stein-thin.svg', title: 'Craft Beer & Ale Trail', area: 'Downtown · Harbour-side', areaLevel: 'gold', text: "Victoria has one of Canada's earliest craft-beer scenes, including long-running brewpubs on the water. The Victoria Ale Trail links the breweries." },
    { icon: '🦀', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', title: 'Pacific Seafood', area: 'Restaurants citywide', areaLevel: 'safe', text: 'Wild salmon, Dungeness crab, oysters and — in late spring — spot prawns, a beloved BC seasonal treat. Ask what is local and in season.' },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Chinatown & Fan Tan Alley', area: 'Fisgard Street', areaLevel: 'danger', text: "Dim sum, bakeries and tiny independent shops in Canada's oldest Chinatown. Squeeze down Fan Tan Alley, one of the narrowest streets in the country." },
    { icon: '🥕', iconSrc: '/icons/attractions/ph_carrot-thin.svg', title: 'Farmers Markets', area: 'Moss Street · Cook Street Village', areaLevel: 'purple', text: 'Greater Victoria has a strong farm-to-table culture. Weekend farmers markets in season are great for local cheese, baking, flowers and picnic supplies.' },
  ],

  seasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'June — August', level: 'safe', rating: 5, note: 'Book early', text: 'Peak season — warm, dry days, long evenings, gardens at their fullest and whale watching in full swing. Inner Harbour is busy and hotels and ferries fill up, so reserve early.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Quieter', text: 'Calm, golden light and thinner crowds. September is often still pleasant; rain starts returning through October. A good value time with whales and gardens still around.' },
    { icon: '🌧️', iconSrc: '/icons/attractions/ph_cloud-rain-thin.svg', name: 'Winter', months: 'November — February', level: 'blue', rating: 3, note: 'Mild & wet', text: 'Mild by Canadian standards, with rain and grey skies more common than snow. Cozy pubs, storm watching on the coast, and holiday lights. Pack a proper rain jacket.' },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'March — May', level: 'olive', rating: 5, note: 'Blossoms!', text: "Cherry blossoms and spring bulbs arrive early — often while the rest of Canada is still under snow. Grey whales pass through, and crowds stay moderate." },
  ],

  gettingThere: [
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By BC Ferries from Vancouver',
      text: 'The classic route: Tsawwassen to Swartz Bay across the Gulf Islands. Swartz Bay is roughly 30 minutes from downtown Victoria. Reservations are strongly recommended in summer, on weekends and holidays. Foot passengers can connect by bus (routes 70/71/72).',
      time: '1h35 crossing + ~30 min to downtown',
    },
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: "Victoria International Airport (YYJ) is north of the city near Sidney, with flights from Vancouver, Calgary, Toronto and other Canadian and US cities. For a scenic arrival, floatplanes fly between downtown Vancouver and Victoria's Inner Harbour in about half an hour.",
      time: 'Short taxi/rideshare from YYJ to downtown',
    },
    {
      icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'From Seattle & Washington State',
      text: "Passenger and vehicle ferries cross the Strait to downtown Victoria's harbour, and floatplanes fly from Seattle. Bring a passport — you are crossing an international border, and check each operator's current schedule.",
      time: 'Passport required',
    },
  ],

  stay: [
    {
      icon: '🏰', iconSrc: '/icons/attractions/ph_castle-turret-thin.svg',
      title: 'Inner Harbour',
      area: 'Best location · Walk everywhere',
      text: 'The Fairmont Empress, Hotel Grand Pacific and Delta Victoria Ocean Pointe put you steps from the harbour, Parliament and the museum. Best for first-time visitors — and the priciest area.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Inner+Harbour+Victoria+BC', level: 'purple' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Victoria-Hotels.d6086023.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🏮', iconSrc: '/icons/attractions/ph_flame-thin.svg',
      title: 'Downtown & Old Town',
      area: 'Boutique · Restaurants · Nightlife',
      text: 'Boutique hotels near Government Street, Chinatown and Market Square. Easy walking to restaurants, pubs and shopping, and a short stroll to the harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Victoria+BC', level: 'purple' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Victoria--BC', level: 'danger' },
      ],
    },
    {
      icon: '🏡', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'James Bay',
      area: 'Quiet · Heritage · Near the park',
      text: 'A residential neighbourhood of heritage B&Bs and guesthouses next to Beacon Hill Park and the sea. A calm base that is still a short walk from the Inner Harbour.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=James+Bay+Victoria+BC', level: 'purple' },
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/James-Bay--Victoria--BC', level: 'danger' },
      ],
    },
    {
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      title: 'Oak Bay',
      area: 'Seaside · Relaxed · Upscale',
      text: 'Oak Bay Beach Hotel and village inns offer a quieter seaside stay with beaches, tea rooms and starry skies. You will want a bus, rideshare or bike to reach downtown.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Oak+Bay+BC', level: 'purple' },
      ],
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_sailboat-thin.svg',
      title: 'Sidney / Swartz Bay',
      area: 'Ferry & airport · Budget',
      text: 'Several hotels near the airport and ferry terminal for early sailings or late flights. Practical rather than scenic; downtown Victoria is about a 30-minute ride away.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Sidney+BC', level: 'purple' },
        { label: 'Expedia', url: 'https://www.expedia.ca', level: 'gold' },
      ],
    },
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Westshore & Langford',
      area: 'More affordable · Car helpful',
      text: 'West of the city, with more rooms for the money and easy access to Sooke and Goldstream. Plan on a car or the bus for sightseeing in central Victoria.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Langford+BC', level: 'purple' },
        { label: 'VRBO', url: 'https://www.vrbo.com/vacation-rentals/canada/british-columbia/victoria', level: 'blue' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚌', iconSrc: '/icons/attractions/ph_bus-thin.svg',
      title: 'BC Transit — Victoria Regional Transit',
      text: "Victoria has no subway, SkyTrain or light rail — transit is a bus network that runs seven days a week and connects to the Swartz Bay ferry terminal. Downtown is compact and very walkable. Vancouver's Compass card does not work here — use an Umo card, the Umo app, or tap a bank card or phone.",
      linkLabel: 'BC Transit Official',
      linkUrl: 'https://www.bctransit.com/victoria',
    },
    modes: [
      {
        icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg',
        title: 'Fares & Umo',
        text: 'Fares are the same for any ride in the region. Pay with the Umo app, a reloadable Umo card, a tapped bank card or phone (since May 19, 2026), or cash with exact change.',
        fareBox: {
          label: 'Fares (adult)',
          lines: ['Single ride: $3.00', 'DayPass / daily cap: $6.00', '30-Day Pass: $85', 'Children 12 and under: free', 'Tap or Umo: same $3 fare, capped at $6 a day'],
        },
        linkLabel: 'Umo — Get the App or Card',
        linkUrl: 'https://ca.umopass.com',
      },
      {
        icon: '🛳️', iconSrc: '/icons/attractions/ph_boat-thin.svg',
        title: 'Ferry & Airport Buses',
        text: 'Routes 70, 71 and 72 run between downtown and the Swartz Bay ferry terminal. Since September 8, 2026, early-morning and late-night trips of route 72A also stop at the airport; routes 87 and 88 serve it during the rest of the day. Regular transit fares apply — many visitors still find a taxi or rideshare easier.',
        fareBox: {
          label: 'Key Routes',
          lines: ['70 / 71 / 72 — Downtown ↔ Swartz Bay', '72A — Swartz Bay ↔ Downtown via airport (early and late)', '87 / 88 — Sidney ↔ Airport (daytime)', 'Regular transit fares apply on all of them'],
        },
        linkLabel: 'Routes & Schedules',
        linkUrl: 'https://www.bctransit.com/victoria/schedules-and-maps',
      },
      {
        icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Walk the Core', text: "Inner Harbour, museum, Chinatown and Government Street are all within a short walk." },
          { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Victoria Harbour Ferries', text: "Small water taxis hop between the Inner Harbour, Fisherman's Wharf and other waterfront stops." },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Cycling', text: 'Bike lanes and the Galloping Goose Trail make cycling a popular way to see the region.' },
          { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', title: 'Taxi & Rideshare', text: 'Taxis and ride-hailing apps are available; useful for the airport and late evenings.' },
        ],
      },
    ],
    proTip: {
      label: 'Car-free tip:',
      text: 'You do not need a car for central Victoria. Arrive by ferry or seaplane, walk the Inner Harbour area, and use a bus, tour or rideshare only for Butchart Gardens and farther trips.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'British Columbia: 5% GST + 7% PST',
    headlineLevel: 'gold',
    description:
      "Most goods are taxed at 12% — federal GST of 5% plus BC's provincial sales tax (PST) of 7%. But BC's rules have important exceptions: restaurant meals have no PST (only 5% GST), alcohol carries a 10% PST, and hotel stays carry a higher combined rate of about 16% (GST 5% + PST 8% + a 3% Municipal and Regional District Tax) — some hotels also add a ~1% Destination Marketing Fee. Always check whether a displayed room price includes tax.",
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'BC / Victoria', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'purple', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'gold' },
    ],
    appliesTo: [
      { icon: '👕', iconSrc: '/icons/attractions/ph_t-shirt-thin.svg', label: 'Adult clothing and shoes' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology' },
      { icon: '🎁', iconSrc: '/icons/attractions/ph_gift-thin.svg', label: 'Souvenirs, gifts and most retail goods' },
      { icon: '🥤', iconSrc: '/icons/attractions/ph_pint-glass-thin.svg', label: 'Soda and similar drinks' },
      { icon: '🍷', iconSrc: '/icons/attractions/ph_wine-thin.svg', label: 'Alcohol: 10% PST + 5% GST (≈15%)' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels: ~16% (GST + PST + 3% MRDT)' },
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
      'Tipping is customary. Restaurants: 15–20% of the pre-tax bill. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Bar staff: $1–2 per drink. Whale-watching and tour guides: 10–15% is appreciated.',
  },

  practical: [
    { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'Walkable Core', text: 'The Inner Harbour, museum, Chinatown and Government Street are all close together. Comfortable shoes beat a car here.' },
    { icon: '⛴️', iconSrc: '/icons/attractions/ph_boat-thin.svg', title: 'Reserve the Ferry', text: 'BC Ferries reservations are strongly recommended in summer and on weekends and holidays. Without one you may wait for later sailings.' },
    { icon: '🧥', iconSrc: '/icons/attractions/ph_hoodie-thin.svg', title: 'Layers & Rain Gear', text: 'Mild year-round, but sea breezes and wet winters are real. Pack layers and a waterproof jacket outside midsummer.' },
    { icon: '🎫', iconSrc: '/icons/attractions/ph_ticket-thin.svg', title: 'Transit Payment', text: 'Use Umo (app, card) or contactless. Cash is exact change with no daily cap. Compass card is not accepted here.' },
    { icon: '🐋', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Whale Watching', text: 'Choose licensed operators who follow viewing guidelines and keep a respectful distance from marine mammals. Dress warmly.' },
    { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Cycling', text: 'Bike lanes and the Galloping Goose Trail connect Victoria with the western communities. Helmets are required in BC.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital', lines: ['Royal Jubilee Hospital', '1952 Bay Street, Victoria', 'Emergencies: call 911'] },
    { icon: '📅', iconSrc: '/icons/attractions/ph_calendar-blank-thin.svg', title: 'Check Before You Go', text: 'Museum galleries, castle days and tour schedules change. Confirm hours on the official sites before planning a day around them.' },
  ],
};

export default VICTORIA;
