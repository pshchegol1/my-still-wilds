// Dauphin — данные страницы /city/dauphin (Дофин, МАНИТОБА)
// Видео Дофина в бесплатных банках нет.
// В шапке фото с Wikimedia Commons — вокзал Дофина (национальное
// историческое место), автор Krazytea, июль 2020, CC BY-SA 4.0 —
// лицензия требует автора, отсюда heroCredit.
// Население — перепись 2021 года (8 368).
// Украинский фестиваль 2026: 31 июля — 2 августа (Selo Ukraina).
// Больница: затоплена в июле 2026, временное отделение неотложной помощи
// открыто в сентябре 2026 (CTV, Shared Health) — на странице «уточняйте».
// Церковь Воскресения — национальное историческое место (описание фото).
// Fort Dauphin, Riding Mountain, Dauphin Lake, поезд VIA — из общих знаний.

export const DAUPHIN = {
  slug: 'dauphin',
  name: 'Dauphin',
  province: 'Manitoba',
  provinceId: 'mb',
  region: 'MB',
  tag: 'Manitoba · Parkland Gateway',
  accentLevel: 'caution',
  heroIcon: '🚂',
  heroImage: '/Cities/Dauphin/hero.jpg',
  heroCredit: 'Photo: Krazytea / Wikimedia Commons · CC BY-SA 4.0',
  // Координаты для живого виджета погоды (Open-Meteo, без ключа API)
  coords: { lat: 51.1494, lon: -100.0502 },
  subtitle: 'Ukrainian Heart of the Parkland',
  description:
    'A prairie railway town at the northern foot of Riding Mountain, Dauphin is the service centre of Manitoba’s Parkland region. Ukrainian settlers shaped it — onion-domed churches still rise over the fields and the country’s largest Ukrainian festival fills the hills each summer — and Riding Mountain National Park begins just to the south.',

  actions: [
    { label: 'Explore Dauphin', href: '#neighbourhoods' },
    { label: 'What to See', href: '#attractions' },
  ],

  quickFacts: [
    { label: 'Population', value: '≈8.4K (2021)' },
    { label: 'Region', value: 'Parkland' },
    { label: 'Language', value: 'English · Ukrainian heritage' },
    { label: 'Time Zone', value: 'Central (UTC-6/-5)' },
    { label: 'To Winnipeg', value: '≈3 h 30 min by car' },
    { label: 'To Riding Mountain', value: '≈30 min by car' },
  ],

  badges: ['Ukrainian Heritage', 'Railway Town', 'Riding Mountain'],

  bestSeasons: [
    { icon: '🌸', label: 'Spring', level: 'safe', rating: 2 },
    { icon: '☀️', label: 'Summer', level: 'gold', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 4 },
    { icon: '❄️', label: 'Winter', level: 'blue', rating: 2 },
  ],

  highlights: [
    { value: '8,368', label: 'People in the 2021 census — the main town of Manitoba’s Parkland', level: 'blue' },
    { value: '61st', label: 'Canada’s National Ukrainian Festival in 2026 — billed as the country’s largest Ukrainian celebration', level: 'gold' },
    { value: '2', label: 'National Historic Sites in town: the railway station and the Ukrainian Catholic Church of the Resurrection', level: 'purple' },
    { value: '2026', label: 'Flooding closed the hospital in July; a temporary emergency department opened in September', level: 'danger' },
  ],

  neighbourhoods: [
    { name: 'Main Street', icon: '🏙️', tag: '🏙️ Downtown', tagLevel: 'gold', meta: 'Shops, cafés and the Watson Arts Centre' },
    { name: 'Railway Station Area', icon: '🚂', tag: '🚂 Heritage', tagLevel: 'purple', meta: 'Historic brick station and rail museum' },
    { name: 'Riverside & Vermillion Park', icon: '🌳', tag: '🌳 Green', tagLevel: 'safe', meta: 'Walking paths along the Vermilion River' },
    { name: 'Church Quarter', icon: '⛪', tag: '⛪ Domes', tagLevel: 'danger', meta: 'Ukrainian Catholic and Orthodox churches with onion domes' },
    { name: 'Selo Ukraina', icon: '🎶', tag: '🎶 Festival site', tagLevel: 'blue', meta: 'Hillside festival grounds south of town' },
    { name: 'Dauphin Lake Shore', icon: '🏖️', tag: '🏖️ Lake', tagLevel: 'olive', meta: 'Beaches and fishing east of the city' },
  ],

  attractions: [
    {
      name: 'Dauphin Railway Station',
      icon: '🚂',
      text: 'A handsome early-20th-century brick station, now a National Historic Site with a small railway museum. A reminder that Dauphin grew up as a railway hub for the Parkland.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Photo stop', level: 'gold' }],
    },
    {
      name: 'Church of the Resurrection',
      icon: '⛪',
      text: 'A Ukrainian Catholic church with a cluster of domes, designated a National Historic Site. Check ahead if you hope to see the interior.',
      tags: [{ label: 'Heritage', level: 'purple' }, { label: 'Free to view', level: 'safe' }],
    },
    {
      name: 'Canada’s National Ukrainian Festival',
      icon: '🎶',
      text: 'Three days of dance, music, food and crafts on a natural hillside amphitheatre at Selo Ukraina. In 2026 it ran July 31 – August 2; buy tickets in advance.',
      tags: [{ label: 'Tickets', level: 'gold' }, { label: 'Early August', level: 'caution' }],
    },
    {
      name: 'Fort Dauphin Museum',
      icon: '🏰',
      text: 'A reconstructed fur-trade fort with log buildings and exhibits about Indigenous peoples, traders and early settlers in the region.',
      tags: [{ label: 'Seasonal', level: 'caution' }, { label: 'History', level: 'purple' }],
    },
    {
      name: 'Riding Mountain National Park',
      icon: '🦬',
      text: 'An island of forest, lakes and meadows rising above the prairie, with bison, elk, moose and black bears. The north edge is a short drive south; the resort village of Wasagaming is on the far side.',
      tags: [{ label: 'Park pass', level: 'caution' }, { label: 'Wildlife', level: 'safe' }],
    },
    {
      name: 'Dauphin Lake',
      icon: '🏖️',
      text: 'A large, shallow prairie lake east of town with beaches, walleye fishing and ice fishing in winter.',
      tags: [{ label: 'Free', level: 'safe' }, { label: 'Fishing', level: 'blue' }],
    },
  ],

  outdoorHeading: 'Prairie Meets Mountain',
  outdoor: [
    { icon: '🥾', name: 'Riding Mountain Trails', dist: '≈30 min south', text: 'Escarpment trails with views back over the Dauphin plain, and longer backcountry routes.' },
    { icon: '🦬', name: 'Bison Viewing', dist: 'Lake Audy, Riding Mountain', text: 'A bison enclosure with a viewing area inside the national park.' },
    { icon: '🎣', name: 'Fishing', dist: 'Dauphin Lake', text: 'Walleye in summer and ice fishing in winter. Licence required.' },
    { icon: '🚲', name: 'Cycling', dist: 'Town & park', text: 'Quiet country roads and park trails.' },
    { icon: '⛷️', name: 'Winter Trails', dist: 'Riding Mountain', text: 'Cross-country skiing and snowshoeing on park trails.' },
    { icon: '🍂', name: 'Fall Colours', dist: 'Escarpment', text: 'Aspen and oak on the escarpment turn gold in late September.' },
  ],

  food: [
    { icon: '🥟', title: 'Perogies (Varenyky)', area: 'Festivals & cafés', areaLevel: 'gold', text: 'Handmade perogies are everywhere — the taste of Ukrainian heritage.' },
    { icon: '🥬', title: 'Holubtsi', area: 'Church suppers', areaLevel: 'safe', text: 'Cabbage rolls, often at community and church fundraisers.' },
    { icon: '🌭', title: 'Kubasa', area: 'Local butchers', areaLevel: 'danger', text: 'Garlic sausage from local meat shops.' },
    { icon: '🍔', title: 'Diners', area: 'Main Street', areaLevel: 'olive', text: 'Small-town diners and family restaurants.' },
    { icon: '🐟', title: 'Walleye', area: 'Dauphin Lake', areaLevel: 'blue', text: 'Freshwater fish on local menus.' },
    { icon: '🍯', title: 'Farm Honey', area: 'Parkland', areaLevel: 'purple', text: 'Local honey and farm products in season.' },
  ],

  seasons: [
    { icon: '🌸', name: 'Spring', months: 'April — June', level: 'safe', rating: 2, note: 'Wet roads', text: 'Snow melts in April; rivers can run high. Fields green up by late May.' },
    { icon: '☀️', name: 'Summer', months: 'July — August', level: 'gold', rating: 5, note: 'Festival season', text: 'Warm days, the Ukrainian festival and peak season in Riding Mountain.' },
    { icon: '🍂', name: 'Fall', months: 'September — October', level: 'danger', rating: 4, note: 'Harvest & elk', text: 'Golden fields, fall colours on the escarpment and elk bugling in the park.' },
    { icon: '❄️', name: 'Winter', months: 'November — March', level: 'blue', rating: 2, note: 'Cold & quiet', text: 'Long, cold prairie winters — ice fishing and cross-country skiing.' },
  ],

  gettingThere: [
    {
      icon: '🚗',
      title: 'By Car',
      text: 'From Winnipeg, take the Trans-Canada west and Highway 5 or 10 north. Highway 10 continues south through Riding Mountain National Park to Brandon.',
      time: '≈3 h 30 min from Winnipeg',
    },
    {
      icon: '🚆',
      title: 'By Train',
      text: 'VIA Rail’s Winnipeg–Churchill train stops at Dauphin a couple of times a week. Check the current schedule.',
      time: 'Several hours from Winnipeg',
    },
    {
      icon: '✈️',
      title: 'By Air',
      text: 'Winnipeg (YWG) is the nearest major airport. Dauphin’s small airport has little or no scheduled service.',
      time: '≈3 h 30 min from YWG',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      text: 'Intercity bus service is limited. Check current operators from Winnipeg or Brandon.',
      time: 'Check operators',
    },
  ],

  stay: [
    {
      icon: '🏙️',
      title: 'Dauphin',
      area: 'Town hotels',
      text: 'Hotels and motels along the highway and downtown. Book early for festival weekend.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Dauphin+Manitoba', level: 'blue' },
        { label: 'Expedia', url: 'https://www.expedia.ca/Hotel-Search?destination=Dauphin%2C%20Manitoba%2C%20Canada', level: 'gold' },
      ],
    },
    {
      icon: '🦬',
      title: 'Wasagaming',
      area: 'Riding Mountain',
      text: 'Cabins, lodges and campgrounds in the national park’s resort village.',
      links: [
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Wasagaming', level: 'blue' },
        { label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/mb/riding', level: 'safe' },
      ],
    },
    {
      icon: '🎶',
      title: 'Festival Camping',
      area: 'Selo Ukraina',
      text: 'On-site camping during the Ukrainian festival — reserve with your ticket.',
      links: [
        { label: 'Festival site', url: 'https://www.cnuf.ca/', level: 'gold' },
      ],
    },
  ],

  transitGuide: {
    intro: {
      icon: '🚗',
      title: 'Car Country',
      text: 'Dauphin has no city bus network. The town centre is walkable, but you need a car for Riding Mountain, Dauphin Lake and Selo Ukraina.',
      linkLabel: 'City of Dauphin',
      linkUrl: 'https://www.dauphin.ca/',
    },
    modes: [
      {
        icon: '🚕',
        title: 'Taxis',
        text: 'Local taxis operate in town. During the festival, arrange rides in advance or use festival shuttles if offered.',
        fareBox: {
          label: 'Getting around',
          lines: ['City buses: none', 'Taxis: local', 'Walking: downtown', 'Car: needed for the park'],
        },
        linkLabel: 'City of Dauphin',
        linkUrl: 'https://www.dauphin.ca/',
      },
      {
        icon: '🚗',
        title: 'Getting Around',
        items: [
          { icon: '🚶', title: 'On Foot', text: 'Main Street, the station and the churches are close together.' },
          { icon: '🚲', title: 'Bike', text: 'Flat streets in town.' },
          { icon: '🚗', title: 'Car', text: 'Essential outside town.' },
          { icon: '🚕', title: 'Taxi', text: 'For short trips.' },
        ],
      },
    ],
    proTip: {
      label: 'Scenic route:',
      text: 'Drive Highway 10 south through Riding Mountain National Park — watch for bison and elk, and stop at the escarpment lookouts.',
    },
  },

  taxInfo: {
    totalTaxPercent: '12%',
    headline: 'Manitoba: 5% GST + 7% RST',
    headlineLevel: 'blue',
    description:
      'Most purchases carry 5% federal GST plus 7% Manitoba Retail Sales Tax (RST), for 12% in total. Hotel stays are taxed with GST and RST; check your bill for any local levy.',
    comparison: [
      { label: 'Alberta', percent: '5%', note: 'GST only', example: '$100 → pay $105', level: 'safe' },
      { label: 'Saskatchewan', percent: '11%', note: 'GST + PST', example: '$100 → pay $111', level: 'gold' },
      { label: 'Dauphin / Manitoba', percent: '12%', note: 'GST + RST', example: '$100 → pay $112', level: 'blue', highlight: true },
      { label: 'Ontario', percent: '13%', note: 'HST combined', example: '$100 → pay $113', level: 'purple' },
    ],
    appliesTo: [
      { icon: '🏨', label: 'Hotels: GST + RST' },
      { icon: '🍽️', label: 'Restaurant meals: GST + RST' },
      { icon: '🎟️', label: 'Festival tickets: check the listed price' },
      { icon: '🛍️', label: 'Clothing and goods: GST + RST' },
    ],
    exempt: [
      { icon: '🥦', label: 'Basic groceries: no tax' },
      { icon: '💊', label: 'Prescription medication: no tax' },
      { icon: '🚂', label: 'Viewing the historic station: free' },
      { icon: '🏖️', label: 'Dauphin Lake beaches: free' },
    ],
    tippingNote:
      'Restaurants: 15–20% of the pre-tax bill. Bar staff: $1–2 per drink. Hotel housekeeping: $2–5/night. Taxi drivers: 10–15%.',
  },

  practical: [
    { icon: '🏥', title: 'Hospital Status', text: 'The Dauphin Regional Health Centre was damaged by flooding in July 2026; a temporary emergency department reopened in September. Check Prairie Mountain Health for current services.' },
    { icon: '🎟️', title: 'Festival Weekend', text: 'Hotels fill up for the Ukrainian festival in late July / early August — book months ahead.' },
    { icon: '🦬', title: 'Park Wildlife', text: 'Bison, elk and bears in Riding Mountain. Stay in your car near bison and keep 100 m from bears.' },
    { icon: '🦟', title: 'Bugs', text: 'Mosquitoes and wood ticks in late spring and summer — use repellent and check for ticks.' },
    { icon: '❄️', title: 'Winter', text: 'Prairie cold and blowing snow. Check road reports before driving.' },
    { icon: '⏰', title: 'Time Zone', text: 'Central Time: UTC-6 in winter, UTC-5 in summer.' },
    { icon: '🪶', title: 'Whose Land', text: 'Dauphin is on the traditional lands of the Anishinaabe and Cree peoples and the homeland of the Red River Métis.' },
    { icon: '🏥', title: 'Medical Care', lines: ['Dauphin Regional Health Centre', '625 3rd St SW', 'Temporary ED since Sept 2026 · call 911'] },
  ],
};

export default DAUPHIN;
