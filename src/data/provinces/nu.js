// Nunavut — данные страницы /province/nu

export const NU = {
  id: 'nu',
  name: 'Nunavut',
  // Акцентный цвет страницы — ледяной голубой
  theme: { accent: '#06b6d4', accentSoft: '#67e8f9', tintRgb: '6, 182, 212' },
  heroTitle: ['NUNAVUT'],
  kicker: 'Arctic Tundra · Inuit Culture · Polar Wildlife',
  heroDescription:
    'Canada\'s newest and largest territory — a vast Arctic wilderness of ice, tundra, and dramatic glaciers. Home to the Inuit people with their rich culture, traditions, and unparalleled connection to the Arctic landscape.',
  heroImage: '/provinces/nunavut.jpg',
  heroVideo: '/nu/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '40K', label: 'Population' },
    { value: '2.09M', label: 'km² Area' },
    { value: '3', label: 'National Parks' },
    { value: '1999', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Nunavut',
    headingLead: 'Our Land —',
    headingAccent: 'Nunavut',
    paragraphs: [
      'Nunavut — meaning "Our Land" in Inuktitut — is Canada\'s newest, largest, and northernmost territory, created in 1999 as a homeland for the Inuit people. It covers over 2 million square kilometers of pristine Arctic tundra, ice sheets, and dramatic glaciers.',
      'This vast territory is one of the world\'s last great Arctic wildernesses. In summer, the midnight sun never sets and the tundra blooms with wildflowers. In winter, temperatures plunge to -50°C and the sky blazes with the northern lights.',
      'Inuit culture is the living heart of Nunavut — from throat singing and drum dancing to the ancient art of carving soapstone. The territory has preserved its language and traditions with remarkable strength, making it one of the most culturally distinct places in Canada.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Iqaluit' },
      { icon: 'Users', label: 'Population', value: '40 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'July — August' },
      { icon: 'Languages', label: 'Language', value: 'Inuktitut, English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Arctic' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1999' },
    ],
  },

  cities: {
    tag: 'Communities of Nunavut',
    intro:
      'Nunavut has 23 communities — most accessible only by air. Each is a gateway to the extraordinary Arctic wilderness.',
    items: [
      {
        name: 'Iqaluit',
        label: 'Capital City',
        population: '8K',
        accent: '#2563eb',
        crest: '/nu/cities/iqaluit.png',
      },
      {
        name: 'Rankin Inlet',
        label: 'Coastal Hub',
        population: '3K',
        accent: '#16a34a',
        crest: '/nu/cities/rankin-inlet.png',
      },
      {
        name: 'Arviat',
        label: 'Whale Watching',
        population: '2.5K',
        accent: '#ca8a04',
        crest: '/nu/cities/arviat.png',
      },
      {
        name: 'Baker Lake',
        label: 'Art Community',
        population: '1.8K',
        accent: '#7c3aed',
        crest: '/nu/cities/baker-lake.png',
      },
      {
        name: 'Cambridge Bay',
        label: 'Arctic Port',
        population: '1.5K',
        accent: '#0891b2',
        crest: '/nu/cities/cambridge-bay.png',
      },
      {
        name: 'Pond Inlet',
        label: 'Arctic Gateway',
        population: '1.6K',
        accent: '#dc2626',
        crest: '/nu/cities/pond-inlet.png',
      },
    ],
  },

  parks: {
    tag: '3 National Parks',
    items: [
      {
        name: 'Auyuittuq National Park',
        area: '5,008 km²',
        rating: '4.3',
        image: '/nu/parks/auyuittuq.png',
      },
      {
        name: 'Sirmilik National Park',
        area: '22,200 km²',
        rating: '4.9',
        image: '/nu/parks/sirmilik.png',
      },
      {
        name: 'Quttirpaaq National Park',
        area: '37,775 km²',
        rating: '4.7',
        image: '/nu/parks/quttirpaaq.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Ringed Seal', icon: 'orca', risk: 'Safe', level: 'safe' },
      { name: 'Narwhal', icon: 'orca', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Caribou', icon: 'elk', risk: 'Safe', level: 'safe' },
      { name: 'Snowy Owl', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Polar Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default NU;
