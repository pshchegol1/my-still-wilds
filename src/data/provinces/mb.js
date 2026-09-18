// Manitoba — данные страницы /province/mb

export const MB = {
  id: 'mb',
  name: 'Manitoba',
  // Акцентный цвет страницы — голубой
  theme: { accent: '#0ea5e9', accentSoft: '#7dd3fc', tintRgb: '14, 165, 233' },
  heroTitle: ['MANITOBA'],
  kicker: 'Prairies · Polar Bears · Northern Lights',
  heroDescription:
    'From the golden prairies of the south to the Arctic tundra and polar bear capital of Churchill, Manitoba is Canada\'s most geographically diverse province.',
  heroImage: '/provinces/manitoba.png',
  heroVideo: '/mb/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '1.4M', label: 'Population' },
    { value: '647K', label: 'km² Area' },
    { value: '3', label: 'National Parks' },
    { value: '1870', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Manitoba',
    headingLead: "Canada's",
    headingAccent: 'Polar Heart',
    paragraphs: [
      'Manitoba is Canada\'s heartland province, stretching from the golden prairies in the south to the Arctic tundra in the north. The province is known for its incredible wildlife experiences and natural diversity.',
      'Churchill, on the shores of Hudson Bay, is the world-famous polar bear capital. Every autumn, hundreds of polar bears gather here waiting for the bay to freeze, making it one of the most spectacular wildlife experiences on Earth.',
      'Winnipeg, the provincial capital, is a vibrant multicultural city known for its arts scene and museums. Manitoba\'s vast wilderness offers endless opportunities for outdoor adventures, from pristine lakes to boreal forests.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Winnipeg' },
      { icon: 'Users', label: 'Population', value: '1.4 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'June — August' },
      { icon: 'Languages', label: 'Language', value: 'English, French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Continental - Arctic' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1870' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From cosmopolitan Winnipeg to the polar bear capital Churchill — each city offers unique experiences and connections to the Canadian landscape.',
    items: [
      {
        name: 'Winnipeg',
        label: 'Largest City',
        population: '853K',
        accent: '#16a34a',
        crest: '/mb/cities/winnipeg.png',
      },
      {
        name: 'Thompson',
        label: 'Northern Hub',
        population: '13K',
        accent: '#2563eb',
        crest: '/mb/cities/thompson.png',
      },
      {
        name: 'Flin Flon',
        label: 'Mining Town',
        population: '5K',
        accent: '#dc2626',
        crest: '/mb/cities/flin-flon.png',
      },
      {
        name: 'Dauphin',
        label: 'Parkland Gateway',
        population: '8K',
        accent: '#ea580c',
        crest: '/mb/cities/dauphin.png',
      },
      {
        name: 'Brandon',
        label: 'Wheat City',
        population: '48K',
        accent: '#ca8a04',
        crest: '/mb/cities/brandon.png',
      },
      {
        name: 'Portage La Prairie',
        label: 'Prairie Town',
        population: '13K',
        accent: '#06b6d4',
        crest: '/mb/cities/portage-la-prairie.png',
      },
      {
        name: 'Steinbach',
        label: 'Mennonite Heritage',
        population: '17K',
        accent: '#6366f1',
        crest: '/mb/cities/steinbach.png',
      },
      {
        name: 'Churchill',
        label: 'Polar Bear Capital',
        population: '900',
        accent: '#7c3aed',
        crest: '/mb/cities/churchill.png',
      },
    ],
  },

  parks: {
    tag: '3 National Parks',
    items: [
      {
        name: 'Wapusk National Park',
        area: '11,067 km²',
        rating: '4.8',
        image: '/mb/parks/wapusk.png',
      },
      {
        name: 'Riding Mountain',
        area: '2,973 km²',
        rating: '4.7',
        image: '/mb/parks/riding-mountain.png',
      },
      {
        name: 'Elk Island',
        area: '1,541 km²',
        rating: '4.6',
        image: '/mb/parks/elk-island.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Beluga Whale', icon: 'beluga-whale', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Snowy Owl', icon: 'snowy-owl', risk: 'Safe', level: 'safe' },
      { name: 'Bison', icon: 'bison-manitoba', risk: 'Caution', level: 'caution' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Polar Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default MB;
