// Yukon — данные страницы /province/yt

export const YT = {
  id: 'yt',
  name: 'Yukon',
  // Акцентный цвет страницы — зеленый (северные сияния)
  theme: { accent: '#22c55e', accentSoft: '#86efac', tintRgb: '34, 197, 94' },
  heroTitle: ['YUKON'],
  kicker: 'Wilderness · Northern Lights · Gold Rush',
  heroDescription:
    'Canada\'s wildest frontier — where the Klondike Gold Rush echoes through history, massive glaciers tower above pristine valleys, and the northern lights dance across night skies.',
  heroImage: '/provinces/yukon.jpg',
  heroVideo: '/yt/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '44K', label: 'Population' },
    { value: '482K', label: 'km² Area' },
    { value: '5', label: 'National Parks' },
    { value: '1898', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Yukon',
    headingLead: "Canada's",
    headingAccent: 'True North',
    paragraphs: [
      'Yukon is Canada\'s westernmost territory — a vast wilderness of mountains, untamed rivers, and pristine lakes. Home to some of Canada\'s highest peaks and most dramatic scenery, Yukon is truly the last frontier.',
      'The Klondike Gold Rush of 1898 brought over 100,000 prospectors to the Yukon, transforming Dawson City into a booming frontier town. Today, Dawson preserves that fascinating history with wooden boardwalks, historic saloons, and the adventurous spirit of the gold rush era.',
      'Yukon offers some of the best northern lights viewing in the world — on clear winter nights, ribbons of green and purple aurora dance across the arctic sky. The territory is a paradise for outdoor adventurers seeking pristine wilderness, abundant wildlife, and authentic northern experiences.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Whitehorse' },
      { icon: 'Users', label: 'Population', value: '44 Thousand' },
      { icon: 'Sun', label: 'Best Season', value: 'August — April' },
      { icon: 'Languages', label: 'Language', value: 'English, French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1898' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From the vibrant capital Whitehorse to the historic gold rush town of Dawson City — Yukon\'s communities are gateways to wilderness.',
    items: [
      {
        name: 'Whitehorse',
        label: 'Capital City',
        population: '28K',
        accent: '#3b82f6',
        crest: '/yt/cities/whitehorse.png',
      },
      {
        name: 'Dawson City',
        label: 'Gold Rush Town',
        population: '2K',
        accent: '#ca8a04',
        crest: '/yt/cities/dawson-city.png',
      },
      {
        name: 'Watson Lake',
        label: 'Sign Post Forest',
        population: '900',
        accent: '#16a34a',
        crest: '/yt/cities/watson-lake.png',
      },
      {
        name: 'Haines Junction',
        label: 'Kluane Gateway',
        population: '600',
        accent: '#ea580c',
        crest: '/yt/cities/haines-junction.png',
      },
      {
        name: 'Carmacks',
        label: 'French River',
        population: '500',
        accent: '#0891b2',
        crest: '/yt/cities/carmacks.png',
      },
      {
        name: 'Faro',
        label: 'Mining Town',
        population: '350',
        accent: '#2563eb',
        crest: '/yt/cities/faro.png',
      },
    ],
  },

  parks: {
    tag: '5 National Parks',
    items: [
      {
        name: 'Kluane National Park',
        area: '22,013 km²',
        rating: '4.8',
        image: '/yt/parks/kluane.png',
      },
      {
        name: 'Ivvavik National Park',
        area: '9,750 km²',
        rating: '4.7',
        image: '/yt/parks/ivvavik.png',
      },
      {
        name: 'Vuntut National Park',
        area: '4,345 km²',
        rating: '4.6',
        image: '/yt/parks/vuntut.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Caribou', icon: 'elk', risk: 'Safe', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Wood Bison', icon: 'bison', risk: 'Caution', level: 'caution' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Grizzly Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default YT;
