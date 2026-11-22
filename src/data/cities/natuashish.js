// Natuashish — данные страницы /city/natuashish (Натуашиш, НЬЮФАУНДЛЕНД
// И ЛАБРАДОР)
// Фото/видео: ни на Wikimedia Commons, ни на Pexels не нашли ни одного
// свободного изображения самого посёлка — община маленькая, очень
// удалённая и появилась недавно (2002–2003), свободных снимков в
// открытых источниках просто нет. Поиск по Commons сильно засорён
// совпадением с кодом аэропорта (IATA YNP совпадает с сокращением
// другого парка на Викискладе). Пользователь подтвердил — делаем
// страницу без heroImage/heroVideo: сайт сам показывает красивый
// фолбэк (градиент + иконка + "Photo coming soon"), это сделано
// намеренно, не баг.
// Население — перепись 2021: 856 человек (-8.7% к 2016, 938); состав
// 420 мужчин/435 женщин. Отдельно — зарегистрированная численность
// народа Mushuau Innu First Nation на октябрь 2019: 1072 человека,
// из них 991 проживает в резервации (это не то же самое, что перепись
// населения, не смешиваем цифры).
// История: посёлок — результат переселения общины мушуау-инну с острова
// Илуикояк (Davis Inlet, ≈15 км) в 2002–2003 годах; первая группа из
// 150 семей переехала в декабре 2002, переселение завершилось в течение
// следующих ≈7–12 месяцев (источники расходятся, указываем "в течение
// года"). Это одно из самых дорогих и резонансных переселений коренной
// общины в истории Канады — оценки стоимости выросли с ≈$82 млн (1996)
// до более $152 млн к моменту переезда. Статус федеральной резервации
// получен в 2003. До этого община дважды переселялась властями:
// Nutak (1948, без консультаций с жителями) и затем Davis Inlet (1967).
// Natuashish Airport (YNP) — около 3 км к западу от посёлка; дорог,
// связывающих с остальной Канадой, нет, только самолёт или (летом)
// морской транспорт.
// Медцентр — Natuashish Community Clinic, работает Labrador-Grenfell
// Health совместно с Mushuau Innu Health Commission (MIHC); экстренные
// случаи эвакуируют по воздуху. Телефоны найдены в старом community
// profile — указываем с оговоркой, без точного адреса.
// Налог — HST 15% (по всей провинции).

export const NATUASHISH = {
  slug: 'natuashish',
  name: 'Natuashish',
  province: 'Newfoundland & Labrador',
  provinceId: 'nl',
  region: 'NL',
  tag: "Newfoundland & Labrador · Mushuau Innu Community",
  accentLevel: 'blue',
  heroIcon: '🪶',
  // Фото/видео не найдены в открытых источниках — страница намеренно
  // без heroImage/heroVideo, сайт показывает фолбэк с иконкой.
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 55.9167, lon: -61.1833 },
  subtitle: 'Home of the Mushuau Innu First Nation',
  description:
    "On the north coast of Labrador, Natuashish is the home of the Mushuau Innu First Nation, built in 2002–2003 after the community relocated from Davis Inlet. Reachable only by air or sea, it is a small, close-knit Innu community rebuilding its life and culture on its own terms, on the shore of Little Sango Pond.",

  actions: [
    { label: 'Explore Natuashish', href: '#neighbourhoods' },
    { label: 'Learn More', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈860 (2021)' },
    { label: 'Nation', value: 'Mushuau Innu First Nation' },
    { label: 'Languages', value: 'Innu-aimun, English' },
    { label: 'Time Zone', value: 'Atlantic (UTC-4/-3)' },
    { label: 'Road Access', value: 'None — fly or sail in' },
    { label: 'Founded', value: '2002–2003' },
  ],

  badges: ['Mushuau Innu', 'Fly-In Only', 'North Coast of Labrador'],

  bestSeasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', label: 'Spring', level: 'safe', rating: 1 },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', label: 'Summer', level: 'gold', rating: 4 },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '856', label: 'People in Natuashish in the 2021 census', level: 'blue' },
    { value: '2002', label: 'Year the first families relocated here from Davis Inlet', level: 'purple' },
    { value: '≈$152M', label: 'Final estimated cost of the relocation from Davis Inlet — one of the most expensive in Canadian history', level: 'danger' },
    { value: '15%', label: "Newfoundland & Labrador HST on most purchases", level: 'safe' },
  ],

  neighbourhoods: [
    { name: 'Community Centre', icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', tag: 'Centre', tagLevel: 'gold', meta: 'Band council office, school, clinic and community buildings',
      details: {
        "lead": "The band council office, school, clinic and community buildings of the Mushuau Innu First Nation.",
        "see": [
          {
            "title": "A community, not a tourist site",
            "text": "Natuashish is the home of the Mushuau Innu. No visitor facilities were found, and the information available here does not cover visitor rules."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air; the community is near Hopedale, about 295 km north of Goose Bay and 80 km southeast of Nain."
          },
          {
            "label": "Before you go",
            "text": "Contact the Mushuau Innu First Nation office (mifn.ca) before planning any visit and follow its guidance."
          },
          {
            "label": "Good to know",
            "text": "Please do not photograph people or homes without asking."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Little Sango Pond Shore', icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg', tag: 'Waterfront', tagLevel: 'blue', meta: 'The pond the community is built beside',
      details: {
        "lead": "The pond the community is built beside.",
        "see": [
          {
            "title": "The pond",
            "text": "Part of the community’s everyday land; ask the First Nation before visiting."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "At the community."
          },
          {
            "label": "Good to know",
            "text": "Follow local guidance."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Natuashish Airport Area', icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', tag: 'Access', tagLevel: 'olive', meta: 'About 3 km west of the community — the only way in or out',
      details: {
        "lead": "The only way in or out, about 3 km west of the community.",
        "see": [
          {
            "title": "Airport",
            "text": "No flight schedule or access information was found; the community is reached by air."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "By air only."
          },
          {
            "label": "Good to know",
            "text": "Contact the First Nation before travelling."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
    { name: 'Former Davis Inlet Site', icon: '🏝️', iconSrc: '/icons/attractions/ph_island-thin.svg', tag: 'History', tagLevel: 'purple', meta: 'The community’s previous home on Iluikoyak Island, about 15 km away',
      details: {
        "lead": "The community’s previous home on Iluikoyak Island, which families left for Natuashish.",
        "see": [
          {
            "title": "The move",
            "text": "The community endorsed relocation in a 1993 referendum; the site at Natuashish was chosen in 1996; the first families moved in December 2002 and the move finished within the next year. The reserve was set apart on December 11, 2003."
          }
        ],
        "practical": [
          {
            "label": "Getting there",
            "text": "About 15 km away; not a visitor destination."
          },
          {
            "label": "Good to know",
            "text": "A place of painful history for the community; do not visit without invitation."
          }
        ],
        "link": {
          "label": "Acadiensis: Mushuau Innu relocation",
          "url": "https://journals.lib.unb.ca/index.php/Acadiensis/article/download/10599/11215?inline=1"
        },
        "checked": "November 2026"
      },
    },
  ],

  attractions: [
    {
      name: 'Mushuau Innu First Nation School',
      icon: '🏫', iconSrc: '/icons/attractions/ph_chalkboard-teacher-thin.svg',
      text: 'The community school, a centre of daily life for the Mushuau Innu. It is a place of learning, not a visitor site.',
      tags: [{ label: 'Community', level: 'gold' }, { label: 'Not a tourist site', level: 'caution' }],
      details: {
        "lead": "The community school, a centre of daily life for the Mushuau Innu and a place of learning, not a visitor site.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Role",
                "text": "A hub of community life."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Not open",
                "text": "The school is not open to visitors."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "In the community."
          },
          {
            "label": "Time to allow",
            "text": "Not applicable."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Little Sango Pond',
      icon: '🌊', iconSrc: '/icons/attractions/ph_waves-thin.svg',
      text: 'The pond beside which the community sits. It is part of the community’s everyday land; ask permission before visiting or fishing.',
      tags: [{ label: 'Local life', level: 'blue' }, { label: 'Fishing', level: 'safe' }],
      details: {
        "lead": "The pond beside which the community sits, part of its everyday land.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Setting",
                "text": "A quiet shoreline."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Ask first",
                "text": "Ask permission from the First Nation before visiting or fishing."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "At the community."
          },
          {
            "label": "Time to allow",
            "text": "Depends on invitation."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
    {
      name: 'Traditional Land & Hunting Grounds',
      icon: '🏞️', iconSrc: '/icons/attractions/ph_park-thin.svg',
      text: 'The surrounding land remains central to Mushuau Innu life and is the community’s traditional territory. Visitors should not go out on the land without an invitation or guide from the community.',
      tags: [{ label: 'Cultural', level: 'purple' }, { label: 'Respect protocols', level: 'danger' }],
      details: {
        "lead": "The land remains central to Mushuau Innu life and is the community’s traditional territory.",
        "columns": [
          {
            "title": "Highlights",
            "icon": "/icons/attractions/ph_sparkle-thin.svg",
            "items": [
              {
                "title": "Meaning",
                "text": "The relocation to Natuashish was within traditional territory, agreed with Canada and the province in 1996."
              }
            ]
          },
          {
            "title": "Tips",
            "icon": "/icons/attractions/ph_lightbulb-thin.svg",
            "items": [
              {
                "title": "Respect",
                "text": "Do not go out on the land without an invitation or guide from the community."
              },
              {
                "title": "Contact",
                "text": "Contact the Mushuau Innu First Nation (mifn.ca)."
              }
            ]
          }
        ],
        "practical": [
          {
            "label": "Cost",
            "text": "Not applicable."
          },
          {
            "label": "Getting there",
            "text": "By arrangement only."
          },
          {
            "label": "Time to allow",
            "text": "Not applicable."
          }
        ],
        "link": {
          "label": "Mushuau Innu First Nation",
          "url": "https://mifn.ca/"
        },
        "checked": "November 2026"
      },
    },
  ],

  outdoorHeading: 'Coastal Labrador Land',
  outdoor: [
    { icon: '🎣', iconSrc: '/icons/attractions/ph_fish-simple-thin.svg', name: 'Fishing', dist: 'Little Sango Pond & coast', text: 'Traditional and recreational fishing in local waters.' },
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', name: 'Caribou Hunting', dist: 'Traditional territory', text: 'An important seasonal activity for the Mushuau Innu.' },
    { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Snowmobiling', dist: 'Surrounding land', text: 'A key way of travelling the land in winter.' },
    { icon: '🌌', iconSrc: '/icons/attractions/ph_moon-stars-thin.svg', name: 'Aurora Viewing', dist: 'Around the community', text: 'Northern lights visible on clear nights.' },
  ],

  food: [
    { icon: '🦌', iconSrc: '/icons/attractions/ph_paw-print-thin.svg', title: 'Caribou & Country Food', area: 'Traditional', areaLevel: 'danger', text: 'Caribou, fish and other land-based foods remain central to Innu life.' },
    { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', title: 'Community Store', area: 'In town', areaLevel: 'blue', text: 'Basic groceries, with prices reflecting fly-in costs.' },
    { icon: '🐟', iconSrc: '/icons/attractions/ph_fish-thin.svg', title: 'Local Fish', area: 'Little Sango Pond', areaLevel: 'safe', text: 'Fish from the pond and nearby coastal waters.' },
  ],

  seasons: [
    { icon: '🌸', iconSrc: '/icons/attractions/ph_flower-tulip-thin.svg', name: 'Spring', months: 'April — June', level: 'safe', rating: 1, note: 'Breakup', text: 'Ice and snow retreat slowly on the Labrador coast.' },
    { icon: '☀️', iconSrc: '/icons/attractions/ph_sun-thin.svg', name: 'Summer', months: 'July — August', level: 'gold', rating: 4, note: 'Open season', text: 'The mildest season, with fishing and land-based activities.' },
    { icon: '🍂', iconSrc: '/icons/attractions/ph_leaf-thin.svg', name: 'Fall', months: 'September — October', level: 'danger', rating: 2, note: 'Hunting season', text: 'A key season for caribou hunting on the land.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Long & cold', text: 'Deep cold and snow, with snowmobile travel across the land.' },
  ],

  gettingThere: [
    {
      icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg',
      title: 'By Air',
      text: 'Natuashish Airport (YNP), about 3 km west of the community, is the main way in — flights connect through other coastal Labrador communities. There is no road access.',
      time: 'Fly-in only',
    },
    {
      icon: '🚢', iconSrc: '/icons/attractions/ph_boat-thin.svg',
      title: 'By Sea',
      text: 'Coastal boats and supply ships serve Natuashish during the ice-free season.',
      time: 'Seasonal',
    },
  ],

  stay: [
    {
      icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg',
      title: 'Community',
      area: 'Limited options',
      text: 'Natuashish has very limited visitor accommodation — this is a residential Innu community, not a tourism destination. Travel here is typically for official, community or family reasons; contact the band office in advance.',
      links: [],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
      title: 'No Public Transit',
      text: 'Natuashish is a small, compact community reached on foot, by snowmobile or by truck — there is no public transit system.',
      linkLabel: 'Mushuau Innu First Nation',
      linkUrl: 'https://innu.ca/',
    },
    modes: [
      {
        icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg',
        title: 'Getting Around',
        items: [
          { icon: '🚶', iconSrc: '/icons/attractions/ph_person-simple-walk-thin.svg', title: 'On Foot', text: 'The community is small and walkable.' },
          { icon: '🛷', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Snowmobile', text: 'Common for winter travel on the land.' },
          { icon: '🚚', iconSrc: '/icons/attractions/ph_truck-thin.svg', title: 'Truck', text: 'Used for local trips and airport runs.' },
        ],
      },
    ],
    proTip: {
      label: 'Visitor note:',
      text: 'Natuashish is a residential First Nation community rebuilt after a difficult history — visitors should contact the band office ahead of any trip and follow local guidance and protocols.',
    },
  },

  taxInfo: {
    totalTaxPercent: '15%',
    headline: 'Newfoundland & Labrador: 15% HST',
    headlineLevel: 'blue',
    description:
      'Newfoundland & Labrador charges a single 15% Harmonized Sales Tax on most goods and services across the province.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'gold' },
      { label: 'Natuashish / NL', percent: '15%', note: 'HST combined', example: '$100 → pay $115', level: 'blue', highlight: true },
      { label: 'Quebec', percent: '14.975%', note: 'GST + QST', example: '$100 → pay $114.98', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🛒', iconSrc: '/icons/attractions/ph_shopping-cart-thin.svg', label: 'Store goods: 15% HST' },
      { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', label: 'Flights and freight: 15% HST' },
    ],
    exempt: [
      { icon: '🥦', iconSrc: '/icons/attractions/ph_basket-thin.svg', label: 'Basic groceries: no tax' },
      { icon: '💊', iconSrc: '/icons/attractions/ph_pill-thin.svg', label: 'Prescription medication: no tax' },
    ],
    tippingNote:
      'Natuashish has no tourism or hospitality industry to speak of — standard Canadian tipping norms don’t really apply here.',
  },

  practical: [
    { icon: '✈️', iconSrc: '/icons/attractions/ph_airplane-tilt-thin.svg', title: 'Fly-In Only', text: 'No roads connect Natuashish to the rest of Canada — all travel is by air or, in summer, by sea.' },
    { icon: '🏘️', iconSrc: '/icons/attractions/ph_house-line-thin.svg', title: 'Not a Tourist Destination', text: 'This is a residential First Nation community, not set up for casual visitors — plan any trip through the band office.' },
    { icon: '💰', iconSrc: '/icons/attractions/ph_coins-thin.svg', title: 'High Prices', text: 'Groceries and goods cost significantly more here, since everything arrives by plane or summer boat.' },
    { icon: '❄️', iconSrc: '/icons/attractions/ph_snowflake-thin.svg', title: 'Harsh Climate', text: 'Winters are long and cold on the Labrador coast — dress in serious layers.' },
    { icon: '⏰', iconSrc: '/icons/attractions/ph_clock-thin.svg', title: 'Time Zone', text: 'Atlantic Time: UTC-4 in winter, UTC-3 in summer.' },
    { icon: '🤝', iconSrc: '/icons/attractions/ph_handshake-thin.svg', title: 'Respect & Context', text: 'Natuashish exists because of a difficult history of forced relocation (Nutak in 1948, Davis Inlet in 1967, Natuashish in 2002–03) — approach the community with respect and awareness of that history.' },
    { icon: '🪶', iconSrc: '/icons/attractions/ph_feather-thin.svg', title: 'Whose Land', text: 'Natuashish is home to the Mushuau Innu First Nation, within Nitassinan, the traditional territory of the Innu.' },
    { icon: '🏥', iconSrc: '/icons/attractions/ph_first-aid-kit-thin.svg', title: 'Medical Care', lines: ['Natuashish Community Clinic', 'Run with the Mushuau Innu Health Commission', 'Emergencies are medevac’d · call 911 where available'] },
  ],
};

export default NATUASHISH;
