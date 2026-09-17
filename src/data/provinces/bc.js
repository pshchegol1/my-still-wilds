// British Columbia — данные страницы /province/bc
import { commons, unsplash } from './sources';

export const BC = {
  id: 'bc',
  name: 'British Columbia',
  // Заголовок героя разбит на две строки, как в макете
  heroTitle: ['BRITISH', 'COLUMBIA'],
  kicker: 'Pacific Coast · Rainforests · Mountains',
  heroDescription:
    'From the misty rainforests of Vancouver Island to the soaring peaks of the Rockies — British Columbia is Canada\'s most spectacular province.',
  heroImage: '/provinces/british-columbia.jpg',

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
        crest: commons('thumb/a/a3/Coat_of_arms_of_Vancouver.svg/500px-Coat_of_arms_of_Vancouver.svg.png'),
      },
      {
        name: 'Victoria',
        label: 'Capital City',
        population: '92K',
        accent: '#7e3ac0',
        crest: commons('f/fa/Coat_of_arms_of_Victoria%2C_Canada.png'),
      },
      {
        name: 'Kelowna',
        label: 'Wine Country',
        population: '144K',
        accent: '#c2410c',
        crest: commons('thumb/a/aa/Coat_of_Arms_of_the_Corporation_of_the_City_of_Kelowna.svg/500px-Coat_of_Arms_of_the_Corporation_of_the_City_of_Kelowna.svg.png'),
      },
      {
        // У Уистлера нет герба на Wikimedia Commons — будет запасной щит
        name: 'Whistler',
        label: 'Ski Resort',
        population: '12K',
        accent: '#be123c',
        crest: null,
      },
      {
        name: 'Kamloops',
        label: 'Tournament Capital',
        population: '97K',
        accent: '#b45309',
        crest: commons('1/13/Coat_of_arms_of_Kamloops%2C_Canada.png'),
      },
      {
        // У Суррея нет герба на Wikimedia Commons — будет запасной щит
        name: 'Surrey',
        label: 'Metro City',
        population: '568K',
        accent: '#15803d',
        crest: null,
      },
      {
        name: 'Abbotsford',
        label: 'Fraser Valley',
        population: '161K',
        accent: '#3f4bb8',
        crest: commons('thumb/6/60/Coat_of_Arms_of_Abbotsford.png/500px-Coat_of_Arms_of_Abbotsford.png'),
      },
      {
        name: 'Nanaimo',
        label: 'Harbour City',
        population: '99K',
        accent: '#b91c1c',
        crest: commons('d/d9/Coat_of_arms_of_Nanaimo%2C_Canada.png'),
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
        image: unsplash('photo-1506744038136-46273834b3fb'),
      },
      {
        name: 'Pacific Rim',
        area: '511 km²',
        rating: '4.8',
        image: unsplash('photo-1470071459604-3b5ec3a7fe05'),
      },
      {
        name: 'Gulf Islands',
        area: '36 km²',
        rating: '4.6',
        image: unsplash('photo-1439066615861-d1af74d74000'),
      },
    ],
  },

  wildlife: {
    tag: 'Local Wildlife',
    items: [
      { name: 'Orca Whale', icon: 'Fish', risk: 'Safe To Watch', level: 'safe' },
      { name: 'Bald Eagle', icon: 'Bird', risk: 'Safe', level: 'safe' },
      { name: 'Gray Wolf', icon: 'PawPrint', risk: 'Caution', level: 'caution' },
      { name: 'Grizzly Bear', icon: 'Mountain', risk: 'Dangerous', level: 'danger' },
      { name: 'Cougar', icon: 'Cat', risk: 'Dangerous', level: 'danger' },
    ],
  },
};

export default BC;
