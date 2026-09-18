// Prince Edward Island — данные страницы /province/pe

export const PE = {
  id: 'pe',
  name: 'Prince Edward Island',
  // Акцентный цвет страницы — красный/оранжевый
  theme: { accent: '#ea580c', accentSoft: '#fb923c', tintRgb: '234, 88, 12' },
  heroTitle: ['PRINCE EDWARD', 'ISLAND'],
  kicker: 'Red Sand Beaches · Anne Of Green Gables',
  heroDescription:
    'Canada\'s smallest and most charming province — a crescent-shaped island in the Atlantic with red sand beaches, rolling green farmland, and the iconic story of Anne of Green Gables.',
  heroImage: '/provinces/prince-edward-island.jpg',
  heroVideo: '/pe/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '173K', label: 'Population' },
    { value: '57K', label: 'km² Area' },
    { value: '1', label: 'National Park' },
    { value: '1873', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About PEI',
    headingLead: "Canada's",
    headingAccent: 'Gentle Island',
    paragraphs: [
      'Prince Edward Island is Canada\'s smallest province — a crescent-shaped island in the Atlantic with distinctive red sand beaches, rolling green farmland, and a rich agricultural heritage. The island\'s charm and beauty have captivated visitors and writers for generations.',
      'PEI is Canada\'s pastoral capital, producing some of the finest potatoes in the world thanks to its uniquely fertile red soil. The island\'s seafood — particularly its lobster and mussels — is celebrated worldwide.',
      'Charlottetown holds a special place in Canadian history as the "Birthplace of Confederation," where the meetings took place that would eventually lead to Canada\'s creation as a nation. The island also inspired Lucy Maud Montgomery\'s beloved Anne of Green Gables, attracting literary pilgrims from around the world.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Charlottetown' },
      { icon: 'Users', label: 'Population', value: '173 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'July — September' },
      { icon: 'Languages', label: 'Language', value: 'English, French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Maritime' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1873' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'Small island, big heart — PEI\'s towns are warm, welcoming, and full of maritime charm.',
    items: [
      {
        name: 'Charlottetown',
        label: 'Capital City',
        population: '40K',
        accent: '#16a34a',
        crest: '/pe/cities/charlottetown.png',
      },
      {
        name: 'Summerside',
        label: 'Secondary City',
        population: '16K',
        accent: '#2563eb',
        crest: '/pe/cities/summerside.png',
      },
      {
        name: 'Stratford',
        label: 'Growing Town',
        population: '11K',
        accent: '#7c3aed',
        crest: '/pe/cities/stratford.png',
      },
      {
        name: 'Cornwall',
        label: 'Island Gateway',
        population: '6K',
        accent: '#dc2626',
        crest: '/pe/cities/cornwall.png',
      },
      {
        name: 'Montague',
        label: 'Eastern Shore',
        population: '2K',
        accent: '#0891b2',
        crest: '/pe/cities/montague.png',
      },
      {
        name: 'Souris',
        label: 'Lighthouse Town',
        population: '1K',
        accent: '#3b82f6',
        crest: '/pe/cities/souris.png',
      },
    ],
  },

  parks: {
    tag: '1 National Park',
    items: [
      {
        name: 'Prince Edward Island National Park',
        area: '226 km²',
        rating: '4.7',
        image: '/pe/parks/pei-national-park.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Lobster', icon: 'cougar', risk: 'Culinary Treasure', level: 'safe' },
      { name: 'Osprey', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Piping Plover', icon: 'eagle', risk: 'Protected Species', level: 'safe' },
      { name: 'White-tail Deer', icon: 'elk', risk: 'Caution', level: 'caution' },
      { name: 'Harbour Seal', icon: 'orca', risk: 'Safe To Watch', level: 'safe' },
    ],
  },
};

export default PE;
