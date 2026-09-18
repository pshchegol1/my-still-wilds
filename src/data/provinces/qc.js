// Quebec — данные страницы /province/qc

export const QC = {
  id: 'qc',
  name: 'Quebec',
  // Акцентный цвет страницы — фиолетовый
  theme: { accent: '#a855f7', accentSoft: '#d8b4fe', tintRgb: '168, 85, 247' },
  heroTitle: ['QUÉBEC'],
  kicker: 'Historic Culture · St. Lawrence · Laurentian Mountains',
  heroDescription:
    'From the charming cobblestone streets of Old Quebec City to the vibrant culture and art scene of Montreal, Quebec is the heart of French heritage in North America.',
  heroImage: '/provinces/quebec.jpg',
  heroVideo: '/qc/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '8.9M', label: 'Population' },
    { value: '1.54M', label: 'km² Area' },
    { value: '3', label: 'National Parks' },
    { value: '1867', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Québec',
    headingLead: 'Je Me',
    headingAccent: 'Souviens',
    paragraphs: [
      'Quebec is Canada\'s largest province by area and the heart of French culture in North America. Known for its rich history, distinct heritage, and vibrant arts scene, Quebec is home to the world-renowned Montreal Jazz Festival and incredible food culture.',
      'Quebec City — the only walled city north of Mexico — is a UNESCO World Heritage Site where cobblestone streets wind past centuries-old buildings. The city showcases the unique blend of French and North American culture.',
      'Beyond the cities, Quebec stretches into breathtaking wilderness — from the Laurentian Mountains and Laurentide forests to the scenic St. Lawrence River and the northern lights dancing across winter skies.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Quebec City' },
      { icon: 'Users', label: 'Population', value: '8.9 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'September — October' },
      { icon: 'Languages', label: 'Language', value: 'French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1867' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From cosmopolitan Montreal to the historic capital Quebec City — each city tells a unique story of French culture in North America.',
    items: [
      {
        name: 'Montreal',
        label: 'Largest City',
        population: '4.3M',
        accent: '#d97706',
        crest: '/qc/cities/montreal.png',
      },
      {
        name: 'Quebec City',
        label: 'Capital City',
        population: '839K',
        accent: '#2563eb',
        crest: '/qc/cities/quebec-city.png',
      },
      {
        name: 'Laval',
        label: 'Island City',
        population: '438K',
        accent: '#dc2626',
        crest: '/qc/cities/laval.png',
      },
      {
        name: 'Gatineau',
        label: 'Hull Region',
        population: '290K',
        accent: '#16a34a',
        crest: '/qc/cities/gatineau.png',
      },
      {
        name: 'Sherbrooke',
        label: 'Eastern Townships',
        population: '163K',
        accent: '#ca8a04',
        crest: '/qc/cities/sherbrooke.png',
      },
      {
        name: 'Saguenay',
        label: 'Fjord City',
        population: '146K',
        accent: '#0891b2',
        crest: '/qc/cities/saguenay.png',
      },
      {
        name: 'Trois-Rivières',
        label: 'River City',
        population: '134K',
        accent: '#3b82f6',
        crest: '/qc/cities/trois-rivieres.png',
      },
      {
        name: 'Rimouski',
        label: 'St-Lawrence Shore',
        population: '48K',
        accent: '#7c3aed',
        crest: '/qc/cities/rimouski.png',
      },
    ],
  },

  parks: {
    tag: '3 National Parks',
    items: [
      {
        name: 'Forillon National Park',
        area: '240 km²',
        rating: '4.7',
        image: '/qc/parks/forillon.png',
      },
      {
        name: 'La Mauricie National Park',
        area: '536 km²',
        rating: '4.7',
        image: '/qc/parks/la-mauricie.png',
      },
      {
        name: 'Mingan Archipelago',
        area: '151 km²',
        rating: '4.7',
        image: '/qc/parks/mingan-archipelago.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Beluga Whale', icon: 'beluga-whale', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Caribou', icon: 'caribou', risk: 'Safe', level: 'safe' },
      { name: 'River Otter', icon: 'river-otter', risk: 'Safe', level: 'safe' },
      { name: 'Snowy Owl', icon: 'snowy-owl', risk: 'Safe', level: 'safe' },
      { name: 'Black Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default QC;
