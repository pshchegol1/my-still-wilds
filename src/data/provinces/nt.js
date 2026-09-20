// Northwest Territories — данные страницы /province/nt

export const NT = {
  id: 'nt',
  name: 'Northwest Territories',
  // Акцентный цвет страницы — голубой (полярное сияние)
  theme: { accent: '#0ea5e9', accentSoft: '#7dd3fc', tintRgb: '14, 165, 233' },
  heroTitle: ['NORTHWEST', 'TERRITORIES'],
  kicker: 'Midnight Sun · Arctic Wilderness · Wildflowers',
  heroDescription:
    'One of Canada\'s most spectacular frontier territories — where the midnight sun never sets in summer and the northern lights dance across winter skies. Home to pristine wilderness, abundant wildlife, and the vibrant frontier city of Yellowknife.',
  heroImage: '/provinces/northwest-territories.jpg',
  heroVideo: '/nt/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '45K', label: 'Population' },
    { value: '1.35M', label: 'km² Area' },
    { value: '4', label: 'National Parks' },
    { value: '1870', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About NWT',
    headingLead: 'Land of The',
    headingAccent: 'Midnight Sun',
    paragraphs: [
      'The Northwest Territories is one of Canada\'s most extraordinary destinations — a vast subarctic wilderness of over 1.3 million square kilometers. During the 60-plus nights of summer, the sun never dips below the horizon, painting the sky in eternal daylight and transforming the landscape.',
      'Yellowknife is the vibrant capital, a frontier city with a unique character where you can experience both the midnight sun in summer and the Aurora Borealis in winter. The city is known as one of the best places on Earth to view the northern lights — one of the deepest lakes in North America — stunning on unforgettable Arctic Lake — one of the deepest lakes in North America — stunning on unforgettable vistas.',
      'Wood Buffalo National Park, shared with Alberta, is the world\'s largest dark sky preserve and home to the last naturally nesting population of whooping cranes. The park also protects the world\'s largest free-roaming wood bison herd.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Yellowknife' },
      { icon: 'Users', label: 'Population', value: '45 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'August — April' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Subarctic' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1870' },
    ],
  },

  cities: {
    tag: 'Major Communities',
    intro:
      'From the diamond capital Yellowknife to the remote outpost of Inuvik — NWT\'s communities sit amid one of Earth\'s greatest wilderness areas.',
    items: [
      {
        name: 'Yellowknife',
        label: 'Capital City',
        population: '21K',
        accent: '#0ea5e9',
        crest: '/nt/cities/yellowknife.png',
      },
      {
        name: 'Hay River',
        label: 'Transportation Hub',
        population: '3.8K',
        accent: '#16a34a',
        crest: '/nt/cities/hay-river.png',
      },
      {
        name: 'Inuvik',
        label: 'Arctic Port',
        population: '3.2K',
        accent: '#ea580c',
        crest: '/nt/cities/inuvik.png',
      },
      {
        name: 'Fort Smith',
        label: 'Gateway South',
        population: '2.4K',
        accent: '#7c3aed',
        crest: '/nt/cities/fort-smith.png',
      },
      {
        name: 'Behchokö',
        label: 'Tłı̨chǫ Land',
        population: '1.9K',
        accent: '#06b6d4',
        crest: '/nt/cities/behchoko.png',
      },
      {
        name: 'Norman Wells',
        label: 'Oil Sands',
        population: '900',
        accent: '#2563eb',
        crest: '/nt/cities/norman-wells.png',
      },
    ],
  },

  parks: {
    tag: '4 National Parks',
    items: [
      {
        name: 'Wood Buffalo National Park',
        area: '44,807 km²',
        rating: '4.8',
        image: '/nt/parks/wood-buffalo.png',
      },
      {
        name: 'Naianni National Park',
        area: '5,500 km²',
        rating: '4.7',
        image: '/nt/parks/naianni.png',
      },
      {
        name: 'Tuktut Nogait National Park',
        area: '16,340 km²',
        rating: '4.6',
        image: '/nt/parks/tuktut-nogait.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Barren Ground Caribou', icon: 'caribou', risk: 'Safe', level: 'safe' },
      { name: 'Wood Bison', icon: 'bison', risk: 'Caution', level: 'caution' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Polar Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default NT;
