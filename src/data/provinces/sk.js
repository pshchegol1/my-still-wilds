// Saskatchewan — данные страницы /province/sk

export const SK = {
  id: 'sk',
  name: 'Saskatchewan',
  // Акцентный цвет страницы — золотой
  theme: { accent: '#d97706', accentSoft: '#fbbf24', tintRgb: '217, 119, 6' },
  heroTitle: ['SASKATCHEWAN'],
  kicker: 'Prairies · Wide Skies · Wheat Fields',
  heroDescription:
    'From the golden prairies and endless wheat fields to pristine northern lakes and forests, Saskatchewan is the land of big skies and natural beauty.',
  heroImage: '/provinces/saskatchewan.jpg',
  heroVideo: '/sk/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '1.2M', label: 'Population' },
    { value: '651K', label: 'km² Area' },
    { value: '2', label: 'National Parks' },
    { value: '1905', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Saskatchewan',
    headingLead: 'Land Of',
    headingAccent: 'Living Skies',
    paragraphs: [
      'Saskatchewan is Canada\'s breadbasket, producing more wheat than any other province — supplying grain to global markets. Golden fields stretch across the landscape, creating some of Canada\'s most dramatic agricultural vistas.',
      'The province offers some of Canada\'s most diverse landscapes — from the lush boreal forest and crystal lakes of the north to the vast prairie grasslands of the south. Saskatchewan is home to some of the clearest night skies in the country.',
      'Saskatchewan\'s residents take pride in their connection to the land and pioneering spirit. The province offers incredible outdoor adventures, from world-class fishing and canoeing to northern lights viewing and dinosaur fossils at Grasslands National Park.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Regina' },
      { icon: 'Users', label: 'Population', value: '1.2 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'June — August' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Semi-Arid Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1905' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From golden Saskatoon by the capitol Regina — Saskatchewan\'s cities reflect prairie spirit and diversity.',
    items: [
      {
        name: 'Saskatoon',
        slug: 'saskatoon',
        label: 'Largest City',
        population: '≈266K',
        accent: '#16a34a',
        crest: '/sk/cities/saskatoon.png',
      },
      {
        name: 'Regina',
        slug: 'regina',
        label: 'Capital City',
        population: '≈226K',
        accent: '#dc2626',
        crest: '/sk/cities/regina.png',
      },
      {
        name: 'Prince Albert',
        slug: 'prince-albert',
        label: 'University Town',
        population: '≈37.8K',
        accent: '#ca8a04',
        crest: '/sk/cities/prince-albert.png',
      },
      {
        name: 'Moose Jaw',
        slug: 'moose-jaw',
        label: 'Moose Jaw',
        population: '≈33.7K',
        accent: '#0891b2',
        crest: '/sk/cities/moose-jaw.png',
      },
      {
        name: 'Yorkton',
        slug: 'yorkton',
        label: 'Easternmost',
        population: '≈16.3K',
        accent: '#2563eb',
        crest: '/sk/cities/yorkton.png',
      },
      {
        name: 'North Battleford',
        slug: 'north-battleford',
        label: 'River City',
        population: '≈13.8K',
        accent: '#3b82f6',
        crest: '/sk/cities/north-battleford.png',
      },
      {
        name: 'Swift Current',
        slug: 'swift-current',
        label: 'Southwest SK',
        population: '≈16.8K',
        accent: '#0ea5e9',
        crest: '/sk/cities/swift-current.png',
      },
      {
        name: 'Lloydminster',
        slug: 'lloydminster',
        label: 'Border City SASK',
        population: '≈31.6K',
        accent: '#84cc16',
        crest: '/sk/cities/lloydminster.png',
      },
    ],
  },

  parks: {
    tag: '2 National Parks',
    items: [
      {
        name: 'Prince Albert National Park',
        area: '3,874 km²',
        rating: '4.6',
        image: '/sk/parks/prince-albert.png',
      },
      {
        name: 'Grasslands National Park',
        area: '907 km²',
        rating: '4.7',
        image: '/sk/parks/grasslands.png',
      },
    ],
  },

  routes: {
    tag: 'Road Trips',
    intro:
      'Honest route guides — real drive times, fuel gaps, and the land these highways actually cross.',
    items: [
      {
        name: 'Saskatoon to Prince Albert National Park',
        distance: '248 km',
        time: '~3h20m drive',
        image: '/sk/parks/prince-albert.png',
        slug: 'saskatoon-prince-albert',
      },
      {
        name: 'Regina to Grasslands',
        distance: '400 km',
        time: '~6h drive',
        image: '/sk/parks/grasslands.png',
        slug: 'regina-grasslands',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'White-tail Deer', icon: 'white-tail-deer', risk: 'Safe', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Bison', icon: 'bison', risk: 'Caution', level: 'caution' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Black Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default SK;
