// Ontario — данные страницы /province/on

export const ON = {
  id: 'on',
  name: 'Ontario',
  // Акцентный цвет страницы — голубой
  theme: { accent: '#2563EB', accentSoft: '#60a5fa', tintRgb: '37, 99, 235' },
  heroTitle: ['ONTARIO'],
  kicker: 'Niagara Falls · Great Lakes · Boreal Forests',
  heroDescription:
    'From the thundering majesty of Niagara Falls to the pristine wilderness of the Great Lakes, Ontario is home to Canada\'s largest city and boundless natural wonders.',
  heroImage: '/provinces/ontario.jpg',
  heroVideo: '/on/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '15.2M', label: 'Population' },
    { value: '1.07M', label: 'km² Area' },
    { value: '6', label: 'National Parks' },
    { value: '1867', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Ontario',
    headingLead: "Yours To",
    headingAccent: 'Discover',
    paragraphs: [
      'Ontario is Canada\'s most populous and economically powerful province. Home to the nation\'s largest city, Toronto, and the capital, Ottawa, Ontario is the political and financial heart of the country.',
      'The province stretches from the shores of the Great Lakes in the south to the vast boreal forests and Hudson Bay in the north. Niagara Falls — one of the world\'s most famous natural wonders — straddles the border between Ontario and New York.',
      'Ontario is also home to extraordinary natural beauty, with thousands of lakes, Canadian Shield wilderness, and a stunning fall foliage season that draws visitors from around the world.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Toronto' },
      { icon: 'Users', label: 'Population', value: '15.2 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'June — September' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Humid Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1867' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From Toronto\'s cosmopolitan streets to the capital\'s government buildings — Ontario\'s cities blend culture, history, and natural beauty.',
    items: [
      {
        name: 'Toronto',
        label: 'Largest City',
        population: '2.9M',
        accent: '#1e40af',
        crest: '/on/cities/toronto.png',
      },
      {
        name: 'Ottawa',
        label: 'Capital City',
        population: '1.4M',
        accent: '#0369a1',
        crest: '/on/cities/ottawa.png',
      },
      {
        name: 'Niagara Falls',
        label: 'Wonder Of Nature',
        population: '88K',
        accent: '#06b6d4',
        crest: '/on/cities/niagara-falls.png',
      },
      {
        name: 'Hamilton',
        label: 'Steel City',
        population: '579K',
        accent: '#d97706',
        crest: '/on/cities/hamilton.png',
      },
      {
        name: 'Kingston',
        label: 'Limestone City',
        population: '136K',
        accent: '#ca8a04',
        crest: '/on/cities/kingston.png',
      },
      {
        name: 'London',
        label: 'Forest City',
        population: '543K',
        accent: '#3b82f6',
        crest: '/on/cities/london.png',
      },
      {
        name: 'Thunder Bay',
        label: 'Lakehead City',
        population: '110K',
        accent: '#7c3aed',
        crest: '/on/cities/thunder-bay.png',
      },
      {
        name: 'Windsor',
        label: 'Border City',
        population: '230K',
        accent: '#1e3a8a',
        crest: '/on/cities/windsor.png',
      },
    ],
  },

  parks: {
    tag: '6 National Parks',
    items: [
      {
        name: 'Georgian Bay Islands',
        area: '13.7 km²',
        rating: '4.6',
        image: '/on/parks/georgian-bay-islands.png',
      },
      {
        name: 'Bruce Peninsula',
        area: '154 km²',
        rating: '4.7',
        image: '/on/parks/bruce-peninsula.png',
      },
      {
        name: 'Thousand Islands',
        area: '39.5 km²',
        rating: '4.7',
        image: '/on/parks/thousand-islands.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'White-tail Deer', icon: 'white-tail-deer', risk: 'Safe', level: 'safe' },
      { name: 'River Otter', icon: 'river-otter', risk: 'Safe', level: 'safe' },
      { name: 'Eastern Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Black Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default ON;
