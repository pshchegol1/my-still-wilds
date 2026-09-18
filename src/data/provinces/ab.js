// Alberta — данные страницы /province/ab

export const AB = {
  id: 'ab',
  name: 'Alberta',
  // Акцентный цвет страницы — оранжевый
  theme: { accent: '#D96B32', accentSoft: '#e08a4a', tintRgb: '217, 107, 50' },
  heroTitle: ['ALBERTA'],
  kicker: 'Rocky Mountains · Prairies · Northern Lights',
  heroDescription:
    'From the soaring peaks of Banff and Jasper to the sweeping golden prairies — Alberta is Canada\'s most dramatic province, where wild nature meets western spirit.',
  heroImage: '/provinces/alberta.jpg',
  // Ролик в шапке; фото остается постером и запасным вариантом
  heroVideo: '/ab/hero.mp4',
  heroBrightness: 1.35,

  heroStats: [
    { value: '4.7M', label: 'Population' },
    { value: '661K', label: 'km² Area' },
    { value: '5', label: 'National Parks' },
    { value: '1905', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About Alberta',
    headingLead: 'Wild Rose',
    headingAccent: 'Country',
    paragraphs: [
      'Alberta is Canada\'s most visited province for outdoor adventure. Home to two of the world\'s most celebrated national parks — Banff and Jasper — it draws millions of visitors each year with its dramatic Rocky Mountain scenery.',
      'Beyond the mountains, Alberta stretches into vast golden prairies and the boreal forest of the north, where the aurora borealis dances in winter skies above Edmonton.',
      'The province is also Canada\'s energy heartland, with a rich cowboy culture celebrated every summer at the world-famous Calgary Stampede.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Edmonton' },
      { icon: 'Users', label: 'Population', value: '4.7 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'June — September' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Continental' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1905' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From cosmopolitan Calgary to the mountain town of Banff — Alberta\'s cities each have their own spirit.',
    // Гербы лежат в public/ab/cities/
    items: [
      {
        name: 'Edmonton',
        label: 'Capital City',
        population: '1.1M',
        accent: '#2f6fd0',
        crest: '/ab/cities/edmonton.png',
      },
      {
        name: 'Calgary',
        label: 'Largest City',
        population: '1.4M',
        accent: '#b8860b',
        crest: '/ab/cities/calgary.png',
      },
      {
        name: 'Banff',
        label: 'Mountain Town',
        population: '8K',
        accent: '#2a5ca8',
        crest: '/ab/cities/banff.png',
      },
      {
        name: 'Jasper',
        label: 'Gateway To Wild',
        population: '5K',
        accent: '#c0392b',
        crest: '/ab/cities/jasper.png',
      },
      {
        name: 'Canmore',
        label: 'Mountain Gateway',
        population: '16K',
        accent: '#15803d',
        crest: '/ab/cities/canmore.png',
      },
      {
        name: 'Lethbridge',
        label: 'Southern AB',
        population: '106K',
        accent: '#2c7a7b',
        crest: '/ab/cities/lethbridge.png',
      },
      {
        name: 'Red Deer',
        label: 'Central Alberta',
        population: '105K',
        accent: '#b45309',
        crest: '/ab/cities/red-deer.png',
      },
      {
        name: 'Medicine Hat',
        label: 'Gas City',
        population: '65K',
        accent: '#7e3ac0',
        crest: '/ab/cities/medicine-hat.png',
      },
    ],
  },

  parks: {
    tag: '5 National Parks',
    items: [
      {
        name: 'Banff National Park',
        area: '6,641 km²',
        rating: '4.9',
        image: '/ab/parks/banff.png',
      },
      {
        name: 'Jasper National Park',
        area: '10,878 km²',
        rating: '4.8',
        image: '/ab/parks/jasper.png',
      },
      {
        name: 'Waterton Lakes',
        area: '505 km²',
        rating: '4.7',
        image: '/ab/parks/waterton-lakes.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Elk', icon: 'elk', risk: 'Caution', level: 'caution' },
      { name: 'Bison', icon: 'bison', risk: 'Caution', level: 'caution' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Grizzly Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
      { name: 'Cougar', icon: 'cougar', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default AB;
