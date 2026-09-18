// British Columbia — данные страницы /province/bc

export const BC = {
  id: 'bc',
  name: 'British Columbia',
  // Акцентный цвет страницы — зеленый
  theme: { accent: '#38A169', accentSoft: '#6ee7a1', tintRgb: '56, 161, 105' },
  // Заголовок героя разбит на две строки, как в макете
  heroTitle: ['BRITISH', 'COLUMBIA'],
  kicker: 'Pacific Coast · Rainforests · Mountains',
  heroDescription:
    'From the misty rainforests of Vancouver Island to the soaring peaks of the Rockies — British Columbia is Canada\'s most spectacular province.',
  heroImage: '/provinces/british-columbia.jpg',
  // Положите ролик сюда; пока файла нет, в шапке остается heroImage
  heroVideo: '/bc/hero.mp4',

  heroStats: [
    { value: '5.3M', label: 'Population' },
    { value: '944K', label: 'km² Area' },
    { value: '7', label: 'National Parks' },
    { value: '1871', label: 'Year Joined Canada' },
  ],

  about: {
    tag: 'About British Columbia',
    headingLead: 'The Pacific',
    headingAccent: 'Province',
    paragraphs: [
      'British Columbia is Canada\'s westernmost province, bordered by the Pacific Ocean to the west and the Rocky Mountains to the east. It is renowned for its stunning natural beauty, diverse landscapes, and mild climate.',
      'The province is home to world-class ski resorts, ancient temperate rainforests, dramatic fjords, and some of Canada\'s most vibrant cities. Vancouver consistently ranks as one of the world\'s most livable cities.',
      'Indigenous peoples have called BC home for thousands of years, and their rich cultural heritage is woven throughout the province\'s identity.',
    ],
    facts: [
      { icon: 'MapPin', label: 'Capital', value: 'Victoria' },
      { icon: 'Users', label: 'Population', value: '5.3 Million' },
      { icon: 'Sun', label: 'Best Season', value: 'June — September' },
      { icon: 'Languages', label: 'Language', value: 'English' },
      { icon: 'Thermometer', label: 'Climate', value: 'Oceanic · Alpine' },
      { icon: 'CalendarDays', label: 'Joined Canada', value: '1871' },
    ],
  },

  cities: {
    tag: 'Major Cities',
    intro:
      'From cosmopolitan Vancouver to charming Victoria — each city has its own unique character.',
    items: [
      {
        name: 'Vancouver',
        label: 'Largest City',
        population: '2.6M',
        accent: '#2f6fd0',
        crest: '/bc/cities/vancouver.png',
      },
      {
        name: 'Victoria',
        label: 'Capital City',
        population: '92K',
        accent: '#7e3ac0',
        crest: '/bc/cities/victoria.png',
      },
      {
        name: 'Kelowna',
        label: 'Wine Country',
        population: '144K',
        accent: '#c2410c',
        crest: '/bc/cities/kelowna.png',
      },
      {
        name: 'Whistler',
        label: 'Ski Resort',
        population: '12K',
        accent: '#be123c',
        crest: '/bc/cities/whistler.png',
      },
      {
        name: 'Kamloops',
        label: 'Tournament Capital',
        population: '97K',
        accent: '#b45309',
        crest: '/bc/cities/kamloops.png',
      },
      {
        name: 'Surrey',
        label: 'Metro City',
        population: '568K',
        accent: '#15803d',
        crest: '/bc/cities/surrey.png',
      },
      {
        name: 'Abbotsford',
        label: 'Fraser Valley',
        population: '161K',
        accent: '#3f4bb8',
        crest: '/bc/cities/abbotsford.png',
      },
      {
        name: 'Nanaimo',
        label: 'Harbour City',
        population: '99K',
        accent: '#b91c1c',
        crest: '/bc/cities/nanaimo.png',
      },
    ],
  },

  parks: {
    tag: '7 National Parks',
    items: [
      {
        name: 'Yoho National Park',
        area: '1,313 km²',
        rating: '4.7',
        image: '/parks/yoho.jpg',
      },
      {
        name: 'Pacific Rim',
        area: '511 km²',
        rating: '4.8',
        image: '/bc/parks/pacific-rim.png',
      },
      {
        name: 'Gulf Islands',
        area: '36 km²',
        rating: '4.6',
        image: '/bc/parks/gulf-islands.png',
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Orca Whale', icon: 'orca', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Bald Eagle', icon: 'eagle', risk: 'Safe', level: 'safe' },
      { name: 'Gray Wolf', icon: 'wolf', risk: 'Caution', level: 'caution' },
      { name: 'Grizzly Bear', icon: 'grizzly', risk: 'Dangerous', level: 'danger' },
      { name: 'Cougar', icon: 'cougar', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default BC;
