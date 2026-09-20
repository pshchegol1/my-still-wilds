// Newfoundland & Labrador — данные страницы /province/nl

export const NL = {
  id: 'nl',
  name: 'Newfoundland & Labrador',
  // Акцентный цвет страницы — оранжевый
  theme: { accent: '#f97316', accentSoft: '#fed7aa', tintRgb: '249, 115, 22' },
  heroTitle: ['NEWFOUNDLAND &', 'LABRADOR'],
  kicker: 'Atlantic Coast · Icebergs · Viking History',
  heroDescription:
    'Canada\'s most easterly province — an island of Newfoundland with its distinctive accent, music, traditions, and the wild mainland territory of Labrador offering pristine wilderness and dramatic Arctic landscapes.',
  heroImage: '/provinces/newfoundland-labrador.jpg',
  heroVideo: '/nl/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '528K', label: 'Population' },
    { value: '405,212', label: 'km² Area' },
    { value: '3', label: 'National Parks' },
    { value: '1949', label: 'Year Joined Canada' },
  ],

  regions: {
    tag: 'Two Distinct Regions',
    heading: 'One Province · Two Worlds',
    items: [
      {
        name: 'Newfoundland Island',
        label: 'The Rock',
        description:
          'Rugged Atlantic island known for dramatic fjords, icebergs, colorful row houses of St. John\'s, and the wild-famous Gros Morne National Park. Famous for its unique culture, dialect, and hospitality.',
      },
      {
        name: 'Labrador',
        label: 'The Big Land',
        description:
          'A vast wilderness of boreal forest, tundra, and coastline larger than France. Home to massive iron ore deposits, the Trans-Labrador Highway, and Indigenous communities.',
      },
    ],
  },

  about: {
    tag: 'About NL',
    headingLead: 'The Most',
    headingAccent: 'Easterly Province',
    paragraphs: [
      'Newfoundland & Labrador is Canada\'s youngest province, having joined Confederation only in 1949. It consists of two distinct regions — the island of Newfoundland with its distinctive accent, music, traditions, and colorful fishing villages, and the vast mainland territory of Labrador.',
      'The province is home to two UNESCO World Heritage Sites — Gros Morne National Park and L\'Anse aux Meadows, where Vikings landed over 1,000 years ago. The dramatic fjords and colorful fishing villages dotting the coast create some of Canada\'s most iconic scenery.',
      'Newfoundland\'s culture is uniquely vibrant — with its own distinct dialect, music traditions, legendary hospitality, and the iconic rowdy spirit of the people. Every summer, icebergs drift down from Greenland, and whale-watching season brings humpback whales close to shore.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'St. John\'s' },
      { icon: 'Users', label: 'Population', value: '528 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'July — August' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Maritime' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1949' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'One province, two worlds: from the colourful row houses of St. John\'s to the rugged remoteness of Labrador.',
    newfoundland: {
      heading: 'Cities Of The Rock',
      items: [
        {
          name: 'St. John\'s',
          label: 'Capital City',
          population: '108K',
          accent: '#dc2626',
          crest: '/nl/cities/st-johns.png',
        },
        {
          name: 'Corner Brook',
          label: 'Paper City',
          population: '20K',
          accent: '#16a34a',
          crest: '/nl/cities/corner-brook.png',
        },
        {
          name: 'Gander',
          label: 'Aviation Hub',
          population: '10K',
          accent: '#7c3aed',
          crest: '/nl/cities/gander.png',
        },
        {
          name: 'Grand Falls-Windsor',
          label: 'Central Hub',
          population: '14K',
          accent: '#ca8a04',
          crest: '/nl/cities/grand-falls-windsor.png',
        },
      ],
    },
    labrador: {
      heading: 'Cities Of The Big Land',
      items: [
        {
          name: 'Labrador West',
          label: 'Iron Ore Capital',
          population: '8K',
          accent: '#ea580c',
          crest: '/nl/cities/labrador-west.png',
        },
        {
          name: 'Happy Valley-Goose Bay',
          label: 'Labrador Capital',
          population: '8K',
          accent: '#7c3aed',
          crest: '/nl/cities/happy-valley-goose-bay.png',
        },
        {
          name: 'Labrador City',
          label: 'Mining Town',
          population: '7K',
          accent: '#dc2626',
          crest: '/nl/cities/labrador-city.png',
        },
        {
          name: 'Natuashish',
          label: 'Innu Community',
          population: '300',
          accent: '#0891b2',
          crest: '/nl/cities/natuashish.png',
        },
      ],
    },
  },

  parks: {
    tag: '3 National Parks',
    items: [
      {
        name: 'Gros Morne National Park',
        area: '1,805 km²',
        rating: '4.8',
        image: '/nl/parks/gros-morne.png',
      },
      {
        name: 'L\'Anse Aux Meadows',
        area: '241 km²',
        rating: '4.7',
        image: '/nl/parks/lanse-aux-meadows.png',
      },
      {
        name: 'Torngat Mountains',
        area: '9,700 km²',
        rating: '4.6',
        image: '/nl/parks/torngat-mountains.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Humpback Whale', icon: 'orca', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Caribou', icon: 'caribou', risk: 'Safe', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Harp Seal', icon: 'harbour-seal', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Grizzly Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default NL;
