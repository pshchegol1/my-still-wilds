// New Brunswick — данные страницы /province/nb

export const NB = {
  id: 'nb',
  name: 'New Brunswick',
  // Акцентный цвет страницы — золотой
  theme: { accent: '#ca8a04', accentSoft: '#fcd34d', tintRgb: '202, 138, 4' },
  heroTitle: ['NEW BRUNSWICK'],
  kicker: 'Forests · Bay of Fundy · Birdwatching',
  heroDescription:
    'Canada\'s picture province — home to the Bay of Fundy with the world\'s highest tides, pristine forests, historic Acadian culture, and vibrant autumn foliage that paints the landscape in brilliant colors.',
  heroImage: '/provinces/new-brunswick.jpg',
  heroVideo: '/nb/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '825K', label: 'Population' },
    { value: '72,908', label: 'km² Area' },
    { value: '3', label: 'National Parks' },
    { value: '1867', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About New Brunswick',
    headingLead: 'The Picture',
    headingAccent: 'Province',
    paragraphs: [
      'New Brunswick is Canada\'s only officially bilingual province, where both English and French are spoken. The province is famous for the Bay of Fundy, home to the world\'s highest tides — water levels rise and fall up to 16 metres, creating dramatic rock formations and some of Atlantic Canada\'s most iconic sights.',
      'The Bay of Fundy is one of the world\'s natural wonders, its tides — the highest on Earth of up to 16 metres — dramatically reshape the coastline twice a day. The Hopewell Rocks are sculpted by these tides into towering formations, among Atlantic Canada\'s most iconic sights.',
      'Eighty-five percent of New Brunswick is covered by forest, making it a paradise for outdoor adventure — hiking, kayaking, and world-class salmon fishing on the legendary Saint John River.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Fredericton' },
      { icon: 'Users', label: 'Population', value: '825 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'July — September' },
      { icon: 'Languages', label: 'Language', value: 'English, French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Humid Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1867' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From the historic capital Fredericton to the vibrant tidal city of Moncton — New Brunswick blends English and French beautifully.',
    items: [
      {
        name: 'Fredericton',
        label: 'Capital City',
        population: '67K',
        accent: '#3b82f6',
        crest: '/nb/cities/fredericton.png',
      },
      {
        name: 'Moncton',
        label: 'Largest City',
        population: '175K',
        accent: '#dc2626',
        crest: '/nb/cities/moncton.png',
      },
      {
        name: 'Saint John',
        label: 'Harbour City',
        population: '125K',
        accent: '#16a34a',
        crest: '/nb/cities/saint-john.png',
      },
      {
        name: 'Bathurst',
        label: 'Chaleur Bay',
        population: '11K',
        accent: '#ca8a04',
        crest: '/nb/cities/bathurst.png',
      },
      {
        name: 'Campbellton',
        label: 'Restigouche',
        population: '7K',
        accent: '#0891b2',
        crest: '/nb/cities/campbellton.png',
      },
      {
        name: 'Edmundston',
        label: 'Madawaska Region',
        population: '16K',
        accent: '#7c3aed',
        crest: '/nb/cities/edmundston.png',
      },
    ],
  },

  parks: {
    tag: '3 National Parks',
    items: [
      {
        name: 'Fundy National Park',
        area: '206 km²',
        rating: '4.8',
        image: '/nb/parks/fundy.png',
      },
      {
        name: 'Hopewell Rocks',
        area: '30 km²',
        rating: '4.8',
        image: '/nb/parks/hopewell-rocks.png',
      },
      {
        name: 'Kouchibouguac National Park',
        area: '239 km²',
        rating: '4.6',
        image: '/nb/parks/kouchibouguac.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Atlantic Salmon', icon: 'atlantic-salmon', risk: 'Safe To Fish', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Lobster', icon: 'lobster', risk: 'Culinary Treasure', level: 'safe' },
      { name: 'Moose', icon: 'moose', risk: 'Caution', level: 'caution' },
      { name: 'Black Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default NB;
