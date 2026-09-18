// Nova Scotia — данные страницы /province/ns

export const NS = {
  id: 'ns',
  name: 'Nova Scotia',
  // Акцентный цвет страницы — морской голубой
  theme: { accent: '#0891b2', accentSoft: '#67e8f9', tintRgb: '8, 145, 178' },
  heroTitle: ['NOVA SCOTIA'],
  kicker: 'Atlantic Coast · Seafood · Lighthouses',
  heroDescription:
    'Surrounded by the sea on three sides — Nova Scotia is a land of rugged coastlines, semi-precious stones, world-famous seafood, and Celtic culture reflected in its music, food, and warm spirit.',
  heroImage: '/provinces/nova-scotia.jpg',
  heroVideo: '/ns/hero.mp4',
  heroBrightness: 1.1,

  heroStats: [
    { value: '1.07M', label: 'Population' },
    { value: '7,600', label: 'km Coastline' },
    { value: '2', label: 'National Parks' },
    { value: '1867', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Nova Scotia',
    headingLead: "Canada's",
    headingAccent: 'Ocean Playground',
    paragraphs: [
      'Nova Scotia — Latin for "New Scotland" — is a peninsula surrounded by the Atlantic, known for its rugged beauty, maritime heritage, and vibrant seafood culture. The province produces more lobster from anywhere else in Canada.',
      'The Cabot Trail in Cape Breton is consistently ranked among the world\'s most scenic drives, winding along dramatic cliffs above the Atlantic. Peggy\'s Cove, with its iconic lighthouse perched on granite rocks, is one of Canada\'s most photographed spots.',
      'Nova Scotia is also Canada\'s seafood capital — in lobster, scallops, and salmon restaurants throughout the province produce some lobster production. The province produces more lobster from anywhere else in Canada, and the province attracts artists, musicians, and visitors seeking authentic maritime culture and natural beauty.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Halifax' },
      { icon: 'Users', label: 'Population', value: '1.07 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'July — September' },
      { icon: 'Languages', label: 'Language', value: 'English, French' },
      { icon: 'Thermometer', label: 'Climate', value: 'Maritime' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1867' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From vibrant Halifax to the historic heartland of Cape Breton — each city tells an ocean story.',
    items: [
      {
        name: 'Halifax',
        label: 'Capital City',
        population: '460K',
        accent: '#ca8a04',
        crest: '/ns/cities/halifax.png',
      },
      {
        name: 'Dartmouth',
        label: 'Harbour Twin',
        population: '107K',
        accent: '#16a34a',
        crest: '/ns/cities/dartmouth.png',
      },
      {
        name: 'Sydney',
        label: 'Cape Breton',
        population: '3K',
        accent: '#7c3aed',
        crest: '/ns/cities/sydney.png',
      },
      {
        name: 'New Glasgow',
        label: 'Riverside',
        population: '10K',
        accent: '#dc2626',
        crest: '/ns/cities/new-glasgow.png',
      },
      {
        name: 'Antigonish',
        label: 'University Town',
        population: '5K',
        accent: '#2563eb',
        crest: '/ns/cities/antigonish.png',
      },
      {
        name: 'Yarmouth',
        label: 'Seaport',
        population: '7K',
        accent: '#06b6d4',
        crest: '/ns/cities/yarmouth.png',
      },
      {
        name: 'Truro',
        label: 'Hub',
        population: '12K',
        accent: '#3b82f6',
        crest: '/ns/cities/truro.png',
      },
      {
        name: 'Glace Bay',
        label: 'Mining Town',
        population: '10K',
        accent: '#ca8a04',
        crest: '/ns/cities/glace-bay.png',
      },
    ],
  },

  parks: {
    tag: '2 National Parks',
    items: [
      {
        name: 'Cape Breton Highlands',
        area: '948 km²',
        rating: '4.8',
        image: '/ns/parks/cape-breton-highlands.png',
      },
      {
        name: 'Kejimkujik National Park',
        area: '381 km²',
        rating: '4.7',
        image: '/ns/parks/kejimkujik.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Lobster', icon: 'cougar', risk: 'Culinary Treasure', level: 'safe' },
      { name: 'Humpback Whale', icon: 'orca', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe', level: 'safe' },
      { name: 'White-tail Deer', icon: 'elk', risk: 'Caution', level: 'caution' },
      { name: 'Black Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default NS;
