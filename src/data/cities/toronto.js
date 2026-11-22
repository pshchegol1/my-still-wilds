// Toronto — данные страницы /city/toronto

export const TORONTO = {
  slug: 'toronto',
  name: 'Toronto',
  province: 'Ontario',
  provinceId: 'on',
  region: 'ON',
  tag: "Ontario · Canada's Largest City",
  // Акцент страницы (тег в шапке, подзаголовок, основная кнопка) — красный,
  // в тон оригинальному макету Toronto.
  accentLevel: 'red',
  heroVideo: '/Cities/Toronto/11300218-uhd_3840_2160_24fps.mp4',
  heroImage: '/on/cities/toronto.png',
  heroCaption: 'CN Tower · Toronto · Ontario · Canada',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 43.6532, lon: -79.3832 },
  subtitle: 'The Centre of the Universe',
  description:
    "Canada's largest city and one of the world's most multicultural — over 200 languages spoken, world-class museums, the iconic CN Tower, NBA and NHL action, and a food scene that rivals any city on Earth. Toronto is endlessly alive.",

  actions: [
    { label: 'Explore Toronto', href: '#neighbourhoods' },
    { label: 'Niagara Falls', href: '#getting-there' },
  ],

  quickFacts: [
    { label: 'Population', value: '2.9 Million' },
    { label: 'Metro Area', value: '6.7 Million' },
    { label: 'Languages', value: '200+' },
    { label: 'Time Zone', value: 'EST / UTC-5' },
    { label: 'Airport', value: 'YYZ / Billy Bishop' },
    { label: 'Niagara Falls', value: '1.5h Away' },
  ],

  badges: ['200 Languages', 'NBA · NHL · MLB', 'TIFF · Festivals'],

  bestSeasons: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 5 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 3 },
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'olive', rating: 4 },
  ],

  highlights: [
    { value: '6.7M', label: 'Metro population — largest city in Canada, 4th largest in North America', level: 'red' },
    { value: '200+', label: 'Languages spoken — most multicultural city in the world', level: 'safe' },
    { value: '553m', label: 'CN Tower height — tallest free-standing structure in the Western Hemisphere', level: 'gold' },
    { value: '4', label: 'Major sports teams — Raptors · Maple Leafs · Blue Jays · TFC', level: 'blue' },
  ],

  neighbourhoods: [
    {
      name: 'Downtown & Financial District',
      image: '/Cities/Toronto/Downtown & Financial District.jpg',
      tag: 'Downtown',
      tagLevel: 'red',
      meta: 'CN Tower · Rogers Centre · Scotiabank Arena · PATH system',
      details: {
        "lead": "The CN Tower, Rogers Centre, Scotiabank Arena and the PATH underground walkway, in the centre of the city.",
        "see": [
          {
            "title": "CN Tower",
            "text": "Adult general admission was $47, seniors and youth 6–13 $34 and children 3–5 $18, plus tax, in 2026. Tickets can be bought up to 30 days ahead."
          },
          {
            "title": "PATH",
            "text": "The underground walkway links downtown buildings and stations."
          },
          {
            "title": "Arenas",
            "text": "Rogers Centre and Scotiabank Arena, home to the city’s pro teams."
          }
        ],
        "practical": [
          {
            "label": "TTC fares",
            "text": "The adult PRESTO single fare was $3.30 and a day pass $13.50 in 2026. After 47 fares in a calendar month the rest are free. Children 12 and under ride free."
          },
          {
            "label": "Getting there",
            "text": "Union Station is the hub for the TTC, GO and UP Express."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "CN Tower: tickets",
          "url": "https://www.cntower.ca/plan-your-visit/tickets-and-hours/tickets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Harbourfront & Distillery',
      image: '/Cities/Toronto/Harbourfront & Distillery.jpg',
      tag: 'Waterfront',
      tagLevel: 'safe',
      meta: 'Lake Ontario · Ferry to Toronto Islands · Historic Distillery District',
      details: {
        "lead": "The Lake Ontario waterfront, the ferry to the Toronto Islands and the historic Distillery District.",
        "see": [
          {
            "title": "Toronto Island ferry",
            "text": "In 2026 an adult round trip was $9.57, seniors and youth $6.15, juniors 2–14 $4.51 and under 2 free. From mid-October to mid-April only Ward’s Island runs, every 30 to 60 minutes."
          },
          {
            "title": "Distillery Winter Village",
            "text": "November 12, 2026 to January 3, 2027. Entry is free before 4 pm and on some weekdays; tickets start at $16 before fees, and children 9 and under are free. Closed Christmas Day."
          },
          {
            "title": "Harbourfront",
            "text": "The waterfront with Lake Ontario views."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the waterfront south of downtown."
          },
          {
            "label": "Ferry changes",
            "text": "New electric ferries are expected to start passenger service in spring 2027."
          },
          {
            "label": "Time to allow",
            "text": "Half a day."
          }
        ],
        "link": {
          "label": "City of Toronto: Island ferries",
          "url": "https://www.toronto.ca/explore-enjoy/toronto-island-ferries/ferry-ticket-passenger-information/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Kensington Market & Chinatown',
      image: '/Cities/Toronto/Kensington Market & Chinatown.jpg',
      tag: 'Culture',
      tagLevel: 'danger',
      meta: 'Bohemian · Vintage · Street food · World cultures in one block',
      details: {
        "lead": "A bohemian, vintage and street-food neighbourhood where many world cultures meet in a few blocks.",
        "see": [
          {
            "title": "Kensington Market",
            "text": "Vintage shops, street food and small stores in a compact grid."
          },
          {
            "title": "Chinatown",
            "text": "Spadina Avenue and Dundas Street West, with groceries and restaurants."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, by streetcar."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Destination Toronto",
          "url": "https://www.destinationtoronto.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Queen West & Ossington',
      image: '/Cities/Toronto/Queen West & Ossington.jpg',
      tag: 'Arts',
      tagLevel: 'purple',
      meta: 'Art galleries · Independent fashion · Best bars · Street art',
      details: {
        "lead": "Art galleries, independent fashion, bars and street art.",
        "see": [
          {
            "title": "Queen West",
            "text": "Galleries and independent fashion along the streetcar line."
          },
          {
            "title": "Ossington",
            "text": "A strip of bars and restaurants."
          },
          {
            "title": "Street art",
            "text": "Murals and graffiti on the side streets."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, on the 501 streetcar."
          },
          {
            "label": "Best time",
            "text": "Afternoons and evenings."
          },
          {
            "label": "Time to allow",
            "text": "One to three hours."
          }
        ],
        "link": {
          "label": "Destination Toronto",
          "url": "https://www.destinationtoronto.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Little Italy & Little Portugal',
      image: '/Cities/Toronto/Little Italy & Little Portugal.jpg',
      tag: 'Food',
      tagLevel: 'blue',
      meta: 'College Street · Best espresso · Trattorias · Patios in summer',
      details: {
        "lead": "College Street’s espresso, trattorias and summer patios, with Little Portugal to the west.",
        "see": [
          {
            "title": "College Street",
            "text": "Cafés, trattorias and patios."
          },
          {
            "title": "Little Portugal",
            "text": "Portuguese bakeries and restaurants nearby."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "West of downtown, by streetcar."
          },
          {
            "label": "Best time",
            "text": "Summer evenings for the patios."
          },
          {
            "label": "Time to allow",
            "text": "A meal or an evening."
          }
        ],
        "link": {
          "label": "Destination Toronto",
          "url": "https://www.destinationtoronto.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Yorkville & Bloor Street',
      image: '/Cities/Toronto/Yorkville & Bloor Street.jpg',
      tag: 'Upscale',
      tagLevel: 'gold',
      meta: 'Luxury shopping · Fine dining · Royal Ontario Museum · High-end hotels',
      details: {
        "lead": "Luxury shopping, fine dining and the Royal Ontario Museum.",
        "see": [
          {
            "title": "Royal Ontario Museum",
            "text": "Open Tuesday to Sunday, 10 am–5:30 pm, closed Mondays. Adults $23 to $26 depending on the source. Free on the third Tuesday of each month, 4–8:30 pm."
          },
          {
            "title": "The Crystal",
            "text": "The Michael Lee-Chin Crystal addition is itself an architectural landmark."
          },
          {
            "title": "Bloor Street",
            "text": "Luxury shops and high-end hotels."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "On the TTC subway at Museum or Bay stations."
          },
          {
            "label": "Special exhibitions",
            "text": "A psychedelics exhibition runs to December 6, 2026 with a $9 surcharge."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours at the ROM."
          }
        ],
        "link": {
          "label": "Royal Ontario Museum",
          "url": "https://www.rom.on.ca/visit/visitor-information"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'CN Tower',
      icon: '🗼', iconSrc: '/icons/attractions/ph_cell-tower-thin.svg',
      text: 'The defining symbol of Toronto — 553m tall with a glass floor observation deck, EdgeWalk (outdoor walk at 356m), and 360 Restaurant rotating at the top. Views stretch to Niagara Falls on clear days.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Iconic', level: 'red' }],
      details: {
        "lead": "The defining symbol of Toronto, 553 m tall, with indoor and outdoor observation levels, a glass floor and a revolving restaurant.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Admission",
                "text": "Adults $47, seniors and youth 6–13 $34, children 3–5 $18, plus tax. Timed tickets can be bought up to 30 days ahead."
              },
              {
                "title": "EdgeWalk",
                "text": "The outdoor walk starts at $199. One source says it runs roughly April to December; check the booking calendar."
              },
              {
                "title": "Glass floor",
                "text": "One guide puts the glass floor 342 m above the ground."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Sources give closing times from 9:30 pm to 10:30 pm; confirm on cntower.ca."
              },
              {
                "title": "Tickets",
                "text": "Non-refundable; changes need at least 72 hours’ notice."
              },
              {
                "title": "360 Restaurant",
                "text": "Plan about two hours for a dinner; the status of the ascension-fee waiver was not confirmed."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, $47 for adults plus tax."
          },
          {
            "label": "Getting there",
            "text": "Downtown, a short walk from Union Station."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "CN Tower: tickets",
          "url": "https://www.cntower.ca/plan-your-visit/tickets-and-hours/tickets"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Royal Ontario Museum',
      icon: '🦕', iconSrc: '/icons/attractions/ph_bone-thin.svg',
      text: "One of Canada's largest museums, with more than 13 million objects in about 40 galleries — ancient Egypt, dinosaurs, Indigenous cultures, and world history. The Michael Lee-Chin Crystal addition is itself an architectural masterpiece. In Yorkville.",
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "One of Canada’s largest museums, with more than 13 million objects in about 40 galleries, in Yorkville.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Tuesday to Sunday, 10 am–5:30 pm, with last entry at 5 pm. Closed Mondays."
              },
              {
                "title": "Admission",
                "text": "Adults $23 to $26 depending on the source, cheaper when booked in advance."
              },
              {
                "title": "Free evening",
                "text": "Free on the third Tuesday of every month from 4 to 8:30 pm, and for post-secondary students on Tuesdays."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Special exhibitions",
                "text": "A psychedelics exhibition runs to December 6, 2026 with a $9 surcharge for adults."
              },
              {
                "title": "The Crystal",
                "text": "The Michael Lee-Chin Crystal is itself a landmark."
              },
              {
                "title": "Check first",
                "text": "Confirm prices and hours on rom.on.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid, about $23–26 for adults."
          },
          {
            "label": "Getting there",
            "text": "TTC subway to Museum station."
          },
          {
            "label": "Time to allow",
            "text": "Two to four hours."
          }
        ],
        "link": {
          "label": "Royal Ontario Museum",
          "url": "https://www.rom.on.ca/visit/visitor-information"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Scotiabank Arena — Raptors & Leafs',
      icon: '🏀', iconSrc: '/icons/attractions/ph_basketball-thin.svg',
      text: 'Watch the Toronto Raptors (NBA champions 2019!) or the storied Toronto Maple Leafs play in one of the most electric arenas in North America — right downtown on Bay Street.',
      tags: [{ label: 'Tickets Required', level: 'gold' }, { label: 'Sports', level: 'blue' }],
      details: {
        "lead": "The downtown arena on Bay Street, home of the Toronto Raptors and the Toronto Maple Leafs.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Raptors",
                "text": "The Raptors won the NBA championship in 2019."
              },
              {
                "title": "Leafs",
                "text": "The storied Maple Leafs also play here."
              },
              {
                "title": "Location",
                "text": "Right downtown, close to Union Station."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Schedules",
                "text": "The 2026–27 schedules were not confirmed; check the teams."
              },
              {
                "title": "Tickets",
                "text": "Prices vary by game; buy through the teams or the arena."
              },
              {
                "title": "Getting there",
                "text": "Union Station is a short walk."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ticketed events."
          },
          {
            "label": "Getting there",
            "text": "Bay Street, downtown."
          },
          {
            "label": "Best time",
            "text": "NBA and NHL seasons, October to April."
          }
        ],
        "link": {
          "label": "Destination Toronto",
          "url": "https://www.destinationtoronto.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Toronto Islands',
      icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg',
      text: 'A chain of islands in Lake Ontario just 10 minutes by ferry from downtown. Beaches, bike rentals, Centreville Amusement Park, and stunning views of the Toronto skyline. Summer favourite.',
      tags: [{ label: 'Ferry $9', level: 'gold' }, { label: 'Summer', level: 'red' }],
      details: {
        "lead": "A chain of islands in Lake Ontario a short ferry ride from downtown, with beaches, bike rentals and skyline views.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Fares",
                "text": "Adult round trip $9.57, seniors and youth $6.15, juniors 2–14 $4.51, under 2 free (2026)."
              },
              {
                "title": "Winter service",
                "text": "From mid-October to mid-April only Ward’s Island runs, about every 30 to 60 minutes, from October 14, 2026."
              },
              {
                "title": "Summer",
                "text": "Centre Island and Hanlan’s Point ferries run mid-April to mid-October."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Centreville",
                "text": "No 2026 season information for Centreville Amusement Park was found."
              },
              {
                "title": "New ferries",
                "text": "New electric ferries are expected to start passenger service in spring 2027."
              },
              {
                "title": "Check the schedule",
                "text": "Exact winter times were not on the City page; check toronto.ca."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ferry about $9.57 for adults round trip."
          },
          {
            "label": "Getting there",
            "text": "From the ferry docks at Harbourfront."
          },
          {
            "label": "Best time",
            "text": "Summer for the beaches."
          }
        ],
        "link": {
          "label": "City of Toronto: Island ferries",
          "url": "https://www.toronto.ca/explore-enjoy/toronto-island-ferries/ferry-ticket-passenger-information/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Distillery Historic District',
      icon: '🥃', iconSrc: '/icons/attractions/ph_wine-thin.svg',
      text: "A 13-acre cobblestoned district of Victorian industrial buildings — now a pedestrian village of galleries, restaurants, boutiques, and cafés. Famous Christmas Market in December.",
      tags: [{ label: 'Free to Walk', level: 'safe' }, { label: 'Culture', level: 'purple' }],
      details: {
        "lead": "A 13-acre cobblestoned district of Victorian industrial buildings, now a pedestrian village of galleries, restaurants, boutiques and cafés.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter Village",
                "text": "The 2026 Christmas market runs from November 12 to January 3, 2027, opening at noon. Tree lighting is on November 12 at 6 pm."
              },
              {
                "title": "Admission",
                "text": "Free before 4 pm and on some weekday periods; tickets start at $16 before fees. Children 9 and under are free."
              },
              {
                "title": "Closed",
                "text": "Closed on Christmas Day."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Closing at 9 pm, or 10 pm on Fridays and Saturdays."
              },
              {
                "title": "Busy evenings",
                "text": "Tickets are required on busier evenings; book ahead."
              },
              {
                "title": "Dates",
                "text": "One guide gives January 4 as the end date; confirm."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "The district is free; the Winter Village is ticketed on busy evenings."
          },
          {
            "label": "Getting there",
            "text": "East of downtown, by streetcar."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Distillery Winter Village 2026",
          "url": "https://ontariofestivals.ca/event/distillery-winter-village-2026-toronto-on/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'TIFF — Toronto Film Festival',
      icon: '🎬', iconSrc: '/icons/attractions/ph_film-slate-thin.svg',
      text: "The Toronto International Film Festival (September) is one of the world's most prestigious — a launching pad for Oscar-winning films. Celebrity sightings everywhere during the festival.",
      tags: [{ label: 'September', level: 'gold' }, { label: 'Annual', level: 'purple' }],
      details: {
        "lead": "The Toronto International Film Festival, held every September. The 51st edition ran September 10–20, 2026.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "2026 dates",
                "text": "September 10–20, with TIFF: The Market on September 10–16."
              },
              {
                "title": "Tickets",
                "text": "General sales opened on August 31; members had earlier pre-sales."
              },
              {
                "title": "Venues",
                "text": "Roy Thomson Hall, the Princess of Wales Theatre, the Royal Alexandra Theatre, TIFF Lightbox and Scotiabank Theatre."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Next year",
                "text": "2027 dates have not been announced in the sources."
              },
              {
                "title": "Book early",
                "text": "Popular screenings sell out quickly."
              },
              {
                "title": "Year-round",
                "text": "TIFF Lightbox shows films all year."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Ticketed screenings."
          },
          {
            "label": "Getting there",
            "text": "Downtown, in the entertainment district."
          },
          {
            "label": "Best time",
            "text": "September."
          }
        ],
        "link": {
          "label": "TIFF",
          "url": "https://www.tiff.net/about-the-festival"
        },
        "checked": "November 2026"
      },
    },
    {
      name: "Ripley's Aquarium",
      icon: '🎡', iconSrc: '/icons/attractions/ph_confetti-thin.svg',
      text: 'Beneath the CN Tower — Thousands of aquatic animals including sharks and rays, and an underwater tunnel. One of the best aquariums in Canada. Open late — great for evenings.',
      tags: [{ label: 'Paid Entry', level: 'gold' }, { label: 'Family', level: 'purple' }],
      details: {
        "lead": "Beneath the CN Tower, with sharks, rays and an underwater tunnel. It stays open late, which suits an evening.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "The tunnel",
                "text": "An underwater tunnel passes through the main tanks."
              },
              {
                "title": "Sharks and rays",
                "text": "Sharks and rays are among the main attractions."
              },
              {
                "title": "Evenings",
                "text": "Open late, good for an evening visit."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Prices and hours",
                "text": "No 2026 prices or hours were found; check the aquarium’s site."
              },
              {
                "title": "Combine",
                "text": "It is next to the CN Tower."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Paid; confirm the current price."
          },
          {
            "label": "Getting there",
            "text": "Beside the CN Tower, near Union Station."
          },
          {
            "label": "Time to allow",
            "text": "Two to three hours."
          }
        ],
        "link": {
          "label": "Destination Toronto",
          "url": "https://www.destinationtoronto.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Niagara Falls Day Trip',
      icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg',
      text: 'Just 1.5 hours from Toronto — the most powerful waterfall in North America. Take the boat tour into the mist, walk behind the falls, or view from the Canadian side for the best perspective.',
      tags: [{ label: 'Free to View', level: 'safe' }, { label: '1.5h Away', level: 'red' }],
      details: {
        "lead": "About 1.5 hours from Toronto, the most powerful waterfall in North America. The Canadian side has the best view.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Winter Festival of Lights",
                "text": "November 14, 2026 to January 10, 2027, with nightly displays and fireworks on some nights."
              },
              {
                "title": "Boat trip",
                "text": "The Canadian-side boat ran about May to late November, roughly $48 plus HST for adults."
              },
              {
                "title": "Power Station",
                "text": "Adults $33 for the Niagara Parks Power Station and its tunnel."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "See the Niagara Falls page",
                "text": "The Niagara Falls page has more on prices and seasons."
              },
              {
                "title": "Dress warm",
                "text": "Winter days at the falls are cold and wet."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Viewing is free; attractions are extra."
          },
          {
            "label": "Getting there",
            "text": "About 1.5 hours by car or bus."
          },
          {
            "label": "Best time",
            "text": "Summer or the winter festival."
          }
        ],
        "link": {
          "label": "Niagara Parks",
          "url": "https://www.niagaraparks.com/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'St. Lawrence Market',
      icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg',
      text: "One of the world's great food markets — named #1 food market in the world by National Geographic. Fresh produce, cheese, meat, baked goods, and local vendors since 1803.",
      tags: [{ label: 'Free to Browse', level: 'safe' }, { label: 'Sat Best Day', level: 'danger' }],
      details: {
        "lead": "One of the world’s great food markets, with fresh produce, cheese, meat, baked goods and local vendors.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "South Market",
                "text": "Tuesday to Friday 9 am–7 pm, Saturday 7 am–5 pm and Sunday 10 am–5 pm. Closed Mondays."
              },
              {
                "title": "Saturday Farmers’ Market",
                "text": "Saturdays 5 am to 3 pm in a temporary building at 125 The Esplanade, because the North Market is being rebuilt."
              },
              {
                "title": "Holidays",
                "text": "Closed December 25, 2026, and the Saturday market is closed December 26."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Hours",
                "text": "Some third-party listings are out of date; use stlawrencemarket.com."
              },
              {
                "title": "Food market ranking",
                "text": "The National Geographic ranking was not confirmed in these sources."
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
            "text": "92–95 Front Street East."
          },
          {
            "label": "Time to allow",
            "text": "One to two hours."
          }
        ],
        "link": {
          "label": "St. Lawrence Market: hours",
          "url": "https://www.stlawrencemarket.com/pages/hours_parking/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoor: [
    { icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg', name: 'Toronto Islands', dist: '10 min ferry', text: 'Beaches, bike rentals, and skyline views just a short ferry ride from downtown.' },
    { icon: '🌳', iconSrc: '/icons/attractions/ph_tree-thin.svg', name: 'High Park', dist: 'West Toronto', text: "The city's largest park — cherry blossoms in April, a zoo, trails, and Grenadier Pond." },
    { icon: '🚴', iconSrc: '/icons/attractions/ph_person-simple-bike-thin.svg', name: 'Martin Goodman Trail', dist: '56 km waterfront', text: 'Cycling and walking path along Lake Ontario connecting the Beaches to the Humber River.' },
    { icon: '🥾', iconSrc: '/icons/attractions/ph_boot-thin.svg', name: 'Don Valley Trails', dist: 'Central Toronto', text: 'Forested ravine trails cutting through the city — a surprising escape minutes from downtown.' },
    { icon: '🏖️', iconSrc: '/icons/attractions/ph_umbrella-simple-thin.svg', name: 'The Beaches', dist: 'East Toronto', text: 'Boardwalk, sandy beach, and a laid-back neighbourhood vibe along Lake Ontario.' },
    { icon: '⛵', iconSrc: '/icons/attractions/ph_sailboat-thin.svg', name: 'Sailing on Lake Ontario', dist: 'Harbourfront', text: 'Rent a sailboat or take a harbour cruise for skyline views from the water.' },
    { icon: '🎿', iconSrc: '/icons/attractions/ph_person-simple-ski-thin.svg', name: 'Winter Skating', dist: 'Nathan Phillips Square', text: 'Free outdoor skating rink at City Hall — a Toronto winter tradition, skate rentals on site.' },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', name: 'Niagara Falls & Wine Country', dist: '1.5 hours away', text: "Niagara Falls and the Niagara-on-the-Lake wine region make for a perfect day trip from the city." },
  ],

  food: [
    { icon: '🍜', iconSrc: '/icons/attractions/ph_bowl-steam-thin.svg', title: "World's Most Diverse Food City", area: 'Everywhere', areaLevel: 'red', text: "Toronto is considered the world's most ethnically diverse city — this makes it one of Earth's greatest food cities. Authentic Ethiopian, Sri Lankan, Jamaican, Persian, Korean, and hundreds more cuisines at every price point." },
    { icon: '🥟', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Chinatown & Dim Sum', area: 'Spadina Ave · Scarborough', areaLevel: 'danger', text: "Multiple Chinatowns throughout the city. The Scarborough Chinatown offers some of North America's most authentic Chinese food. Dim sum on weekend mornings at Ocean Fisheries or Casa Victoria." },
    { icon: '🧆', iconSrc: '/icons/attractions/ph_bowl-food-thin.svg', title: 'Middle Eastern & Persian', area: 'Kensington · Danforth', areaLevel: 'gold', text: 'Toronto has one of the largest Persian communities outside Iran. Excellent shawarma, falafel, kababs, and baklava throughout the city. The Danforth (Greektown) is legendary for souvlaki and baklava.' },
    { icon: '🍕', iconSrc: '/icons/attractions/ph_pizza-thin.svg', title: 'Pizza & Italian', area: 'Little Italy · College St', areaLevel: 'blue', text: "Toronto's Italian community has created an exceptional pizza and pasta scene. Terroni is a cult favourite. Little Italy on College Street has some of the best espresso and tiramisu outside Rome." },
    { icon: '🫐', iconSrc: '/icons/attractions/ph_cherries-thin.svg', title: 'Brunch Culture', area: 'Queen West · Leslieville', areaLevel: 'safe', text: 'Toronto has an obsessive brunch culture — weekend lineups are legendary. Aunties and Uncles in Kensington, Lady Marmalade in Leslieville, and Drake Hotel on Queen West are institutions.' },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Jamaican & Caribbean', area: 'Eglinton · Scarborough', areaLevel: 'purple', text: 'Toronto has the largest Jamaican diaspora outside Jamaica. Excellent jerk chicken, oxtail, curry goat, and patties throughout the city. Eglinton West (Little Jamaica) is the place to go.' },
  ],

  seasons: [
    {
      icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season — Toronto Islands packed, outdoor festivals, Caribana (July), Pride (June), and amazing patio culture. Warm and humid. Blue Jays baseball at Rogers Centre. Busiest and most expensive.',
      rating: 5,
      note: 'Perfect',
    },
    {
      icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg',
      name: 'Fall',
      months: 'September — November',
      level: 'danger',
      text: 'Best season overall. TIFF in September, spectacular fall colours in October, fewer crowds. Perfect temperatures for walking. Raptors and Leafs seasons begin. Leaf-peeping in nearby parks and Muskoka.',
      rating: 5,
      note: 'Best overall',
    },
    {
      icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg',
      name: 'Winter',
      months: 'December — February',
      level: 'blue',
      text: 'Cold and sometimes snowy. Maple Leafs and Raptors are in full swing — great for sports fans. Distillery Christmas Market is magical. Indoor PATH system means you can explore downtown without going outside.',
      rating: 3,
      note: 'Sports season',
    },
    {
      icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg',
      name: 'Spring',
      months: 'March — May',
      level: 'olive',
      text: 'Cherry blossoms at High Park in late April are spectacular — rivalling Vancouver. Cool and sometimes rainy but beautiful. Lower hotel prices. Blue Jays opening day in April is a celebration.',
      rating: 4,
      note: 'Cherry blossoms!',
    },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Plane',
      text: "Toronto Pearson (YYZ) is Canada's busiest airport with direct global flights. Billy Bishop Airport (YTZ) on the Toronto Islands serves short-haul flights right downtown.",
      time: '25 min by UP Express train to Union Station',
    },
    {
      icon: '🚂', iconSrc: '/icons/attractions/ph_train-thin.svg',
      title: 'By Train / Bus',
      text: 'VIA Rail connects Toronto to Montreal, Ottawa, and Windsor from Union Station. GO Transit trains and buses serve the wider Greater Toronto Area and beyond.',
      time: 'Montreal: 5h · Ottawa: 4.5h by VIA Rail',
    },
    {
      icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
      title: 'Getting Around',
      text: 'The TTC runs the subway, streetcars, and buses across the city. The PATH is a 30km underground walkway connecting downtown buildings — handy in winter.',
      time: 'PRESTO card · ttc.ca',
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚊', iconSrc: '/icons/attractions/ph_tram-thin.svg',
      title: 'TTC — Toronto Transit Commission',
      text: 'The TTC operates the subway (2 main lines plus Line 4 and the Eglinton Crosstown), streetcars, and buses across the city. A PRESTO card or tap-to-pay works across the whole network with free transfers.',
      linkLabel: 'TTC Official',
      linkUrl: 'https://www.ttc.ca',
    },
    modes: [
      {
        icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg',
        title: 'Subway',
        text: 'Line 1 (Yonge-University) and Line 2 (Bloor-Danforth) cover most of downtown. Runs approximately 6am to 1:30am, with Line 1 running 24 hours on weekends in parts.',
        fareBox: {
          label: 'Fares (PRESTO / Tap)',
          lines: ['Adult single: $3.30 (cash $3.35)', 'Day Pass: $13.50', 'Monthly fare cap: free after 47 paid trips (from 1 Sep 2026)', 'Kids 12 & under: Free'],
        },
        linkLabel: 'Subway Map',
        linkUrl: 'https://www.ttc.ca/routes-and-schedules/subway',
      },
      {
        icon: '🚋', iconSrc: '/icons/attractions/ph_tram-thin.svg',
        title: 'Streetcars & Buses',
        text: "Toronto's iconic red streetcars run along King, Queen, and Spadina among others. Extensive bus network covers the rest of the city and suburbs.",
        fareBox: {
          label: 'PRESTO Card',
          lines: ['• Tap Visa/Mastercard directly', '• Or load a PRESTO card', '• Free transfer within 2 hours', '• PRESTO app for mobile fare'],
        },
        linkLabel: 'Streetcar Routes',
        linkUrl: 'https://www.ttc.ca/routes-and-schedules',
      },
      {
        icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg',
        title: 'Other Options',
        items: [
          { icon: '🚆', iconSrc: '/icons/attractions/ph_train-thin.svg', title: 'UP Express', text: 'Direct train from Pearson Airport to Union Station downtown in 25 minutes.' },
          { icon: '🚗', iconSrc: '/icons/attractions/ph_car-thin.svg', title: 'Uber & Lyft', text: 'Both widely available. Traffic can be heavy — transit is often faster downtown.' },
          { icon: '🚲', iconSrc: '/icons/attractions/ph_bicycle-thin.svg', title: 'Bike Share Toronto', text: 'Docked bike share with stations across downtown. bikesharetoronto.com' },
        ],
      },
    ],
    proTip: {
      label: 'Airport Tip:',
      text: 'The UP Express from Pearson to Union Station takes 25 minutes and costs less than a taxi — trains run every 15 minutes from 5:30am to 1am.',
    },
  },

  stay: [
    {
      icon: '🏙️', iconSrc: '/icons/attractions/ph_buildings-thin.svg',
      title: 'Downtown / Financial District',
      area: 'Best location · Walk everywhere',
      text: 'Fairmont Royal York, Ritz-Carlton, Hotel X. Steps from Union Station, the PATH system, and the CN Tower.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Downtown+Toronto', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Toronto-Hotels.d178293.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
    {
      icon: '🎨', iconSrc: '/icons/attractions/ph_paint-brush-thin.svg',
      title: 'Queen West / Kensington',
      area: 'Best for arts and nightlife',
      text: "Boutique hotels and B&Bs in Toronto's most creative neighbourhoods — galleries, vintage shops, and the best bars within walking distance.",
      links: [
        { label: 'Airbnb', url: 'https://www.airbnb.ca/s/Queen-West--Toronto', level: 'red' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Queen+West+Toronto', level: 'blue' },
      ],
    },
    {
      icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg',
      title: 'Yorkville',
      area: 'Best for luxury',
      text: "Four Seasons, Park Hyatt. Toronto's most upscale neighbourhood — high-end shopping, fine dining, and the Royal Ontario Museum on your doorstep.",
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Yorkville+Toronto', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Toronto-Hotels-Yorkville.d6146150.Travel-Guide-Hotels', level: 'gold' },
      ],
    },
  ],

  taxInfo: {
    totalTaxPercent: '13%',
    headline: 'Ontario: 13% HST (Harmonized Sales Tax)',
    headlineLevel: 'danger',
    description: 'Ontario uses HST — a single combined tax of 13% that merges federal GST (5%) and provincial sales tax (8%) into one. This is higher than Alberta (5%) and BC (12%) but lower than Quebec (14.975%). Hotels may also charge additional Municipal Accommodation Tax (MAT) of 4%.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'British Columbia', percent: '12%', note: 'GST 5% + PST 7%', example: '$100 → pay $112', level: 'red' },
      { label: 'Ontario / Toronto', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'danger', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'red' },
    ],
    appliesTo: [
      { icon: '🛍️', iconSrc: '/icons/attractions/ph_shopping-bag-thin.svg', label: 'Most retail goods and clothing' },
      { icon: '🍽️', iconSrc: '/icons/attractions/ph_fork-knife-thin.svg', label: 'Restaurant meals and takeout' },
      { icon: '🏨', iconSrc: '/icons/attractions/ph_bed-thin.svg', label: 'Hotels + 4% Municipal Accommodation Tax' },
      { icon: '🎟️', iconSrc: '/icons/attractions/ph_ticket-thin.svg', label: 'Entertainment and event tickets' },
      { icon: '🚕', iconSrc: '/icons/attractions/ph_taxi-thin.svg', label: 'Ride shares and taxis' },
      { icon: '📱', iconSrc: '/icons/attractions/ph_device-mobile-thin.svg', label: 'Electronics and technology' },
    ],
    exempt: [
      { icon: '🥬', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Basic groceries (fresh food)' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medications' },
      { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', label: 'Most medical services' },
      { icon: '📚', iconSrc: '/icons/attractions/ph_books-thin.svg', label: 'Most educational services' },
      { icon: '🏠', iconSrc: '/icons/attractions/ph_house-thin.svg', label: 'Long-term residential rent' },
      { icon: '👶', iconSrc: '/icons/attractions/ph_baby-thin.svg', label: 'Children\'s clothing and footwear' },
    ],
    tippingNote: 'Tipping is customary. Restaurants: 15–20% of pre-tax amount. Taxis/Uber: 10–15%. Hotel housekeeping: $2–5/night. Coffee shops: $1–2. Most terminals suggest 18%, 20%, or 25% — you can always enter a custom amount.',
  },

  practical: [
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', title: 'Weather', text: 'Humid summers, cold snowy winters. Layer up for fall/spring — temperatures swing quickly.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'Currency', text: 'Canadian Dollar (CAD). Toronto is one of the more expensive Canadian cities — budget accordingly.' },
    { icon: '🚇', iconSrc: '/icons/attractions/ph_subway-thin.svg', title: 'PRESTO Card', text: 'Tap your Visa/Mastercard directly on TTC readers, or load a PRESTO card for the whole GTA network.' },
    { icon: '🌐', iconSrc: '/icons/attractions/ph_translate-thin.svg', title: 'Language', text: "English primary, French also official nationally. World's most multilingual city — 200+ languages spoken." },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Hospital', lines: ['Toronto General Hospital', '200 Elizabeth St', '416-340-4800'] },
    { icon: '🍁', iconSrc: '/icons/attractions/ph_leaf-thin.svg', title: 'Cannabis', text: 'Legal for adults 19+ in Ontario. Only smoke in permitted areas — not in parks or near children.' },
    { icon: '🧊', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'PATH System', text: "30km of underground walkways connect downtown buildings — a great way to explore in winter without the cold." },
    { icon: '💧', iconSrc: '/icons/attractions/ph_drop-thin.svg', title: 'Day Trips', text: 'Niagara Falls (1.5h), Niagara-on-the-Lake wine country (1.5h), and Muskoka cottage country (2h) are popular trips.' },
  ],
};

export default TORONTO;
