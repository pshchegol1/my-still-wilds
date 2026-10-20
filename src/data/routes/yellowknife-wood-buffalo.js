// Yellowknife → Wood Buffalo — данные страницы
// /route/yellowknife-wood-buffalo
// Первый маршрут региона "Northwest Territories".

import { YELLOWKNIFE_WOOD_BUFFALO_EXPLORER } from './explorer/yellowknife-wood-buffalo.js';

export const YELLOWKNIFE_WOOD_BUFFALO = {
  slug: 'yellowknife-wood-buffalo',
  name: 'Yellowknife to Wood Buffalo',
  region: 'Northwest Territories · Slave River',
  tag: 'Treaty 8 · UNESCO World Heritage',
  accentLevel: 'danger',
  backLabel: 'Back to Northwest Territories',
  backHref: '/province/nt',
  heroImage: '/nt/parks/wood-buffalo.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: YELLOWKNIFE_WOOD_BUFFALO_EXPLORER,
  description:
    'Seven hundred and seventy kilometres south to the largest national park in Canada — bigger than Switzerland, and one of the few places in the world where you can drive into country this size. Wood Buffalo holds the last free-roaming wood bison herd, the only natural nesting ground of the whooping crane, and a park history that is genuinely uncomfortable.',

  badges: ['769 KM', '~12H DRIVE', 'BISON ON THE ROAD', 'LARGEST PARK IN CANADA'],

  headlineStats: [
    { value: '769', unit: 'km', label: 'Yellowknife to Fort Smith' },
    { value: '~12', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '44,802', unit: 'km²', label: 'Larger Than Switzerland' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '769 km, Yellowknife to Fort Smith via the Deh Cho Bridge, Enterprise and Hay River' },
    { icon: 'time', label: 'Drive Time', value: '~12h non-stop · a two-day trip in practice, and the last leg is slow for its length' },
    { icon: 'fuel', label: 'Fuel', value: 'Northern discipline applies: fill at Yellowknife, Fort Providence, Enterprise and Hay River. Never pass an open station on half a tank' },
    { icon: 'cell', label: 'Cell Service', value: 'Towns only. Highway 5 between Hay River and Fort Smith has no cellular coverage at all — carry a satellite messenger' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 3 → Hwy 1 over the Deh Cho Bridge → Hwy 2 → Hwy 5 · chipseal and pavement, with the last stretch slow going' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round and seriously cold. Winter tires, a full tank, warm gear in the vehicle and a travel plan someone else knows' },
  ],

  seasonalNotes: [
    {
      icon: '🦬',
      title: 'Bison Stand on the Highway',
      text: 'Wood bison use Highways 3 and 5 as cleared corridors, especially at dawn, dusk and in winter. A bull weighs close to a tonne and does not move for a horn. This is the most likely thing to go wrong on this drive — slow down through the park stretch and never try to squeeze past a herd.',
    },
    {
      icon: '📡',
      title: 'No Signal for 270 km',
      text: 'Highway 5 from Hay River to Fort Smith has no cellular coverage along its length. In a breakdown you are relying on another vehicle stopping, on a road that is not busy. Tell someone your plan, carry water and warm layers, and consider a satellite messenger.',
    },
    {
      icon: '🪰',
      title: 'The Insects Are Legendary for a Reason',
      text: 'The Peace-Athabasca Delta is one of the largest freshwater deltas on earth, which makes midsummer mosquitoes and blackflies genuinely severe. June and July on the trails without proper protection is not a pleasant experience.',
    },
  ],

  wildlifeSafety: {
    title: 'Bison, Bears and Real Remoteness',
    text: 'The park has free-roaming wood bison, black bears and wolves, and almost none of it is near help. The animals are not the main problem — the combination of distance, no signal and very light traffic is.',
    rules: [
      'Stay in your vehicle when bison are on or beside the road, and give them a hundred metres on foot',
      'Anthrax occurs naturally in the bison population here — never approach a dead animal, and report carcasses',
      'Carry bear spray on any trail, plus water, food and warm layers in the vehicle at all times',
      'Register your plans for backcountry travel; this is a park where self-rescue may be the only option',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty 8 — and a Conservation Disaster Shipped In by Rail',
    text: 'This is Treaty 8 territory, signed in 1899, and the homeland of Dene and Cree peoples and the Métis of the Slave River: the Mikisew Cree, Athabasca Chipewyan, Salt River, Smith’s Landing and Deninu K’ue, with Fort Smith and Fort Chipewyan Métis communities throughout. The park was created in 1922 to save the last wood bison. Then, between 1925 and 1928, the government shipped in roughly 6,673 surplus plains bison from Buffalo National Park at Wainwright — against the advice of the scientists of the day. They interbred with the wood bison and brought bovine tuberculosis and brucellosis with them, and those diseases remain the biggest obstacle to wood bison recovery a century later.',
    nations: [
      'Mikisew Cree First Nation',
      'Athabasca Chipewyan First Nation',
      'Salt River, Smith’s Landing and Deninu K’ue First Nations',
      'Fort Smith and Fort Chipewyan Métis — Treaty 8 (1899)',
    ],
    authenticStop: {
      name: 'Fort Smith',
      text: 'The park headquarters town on the Slave River, with Dene, Cree, Métis and settler communities and the rapids where the river drops. Indigenous guiding and outfitting here is run by the people whose families have used this country continuously — a different proposition from a park tour.',
    },
    note: 'The park is a UNESCO World Heritage Site and has been under sustained international scrutiny over the health of the Peace-Athabasca Delta — upstream hydro development and oil sands activity have both been raised as threats, and the Mikisew Cree were the ones who brought the concerns to UNESCO. It is a park with a World Heritage designation and a live argument about whether it is being protected.',
  },

  stops: [
    {
      name: 'Yellowknife',
      km: 0,
      icon: '🏙️',
      text: 'Starting point on Great Slave Lake. Last full-service city — stock the vehicle properly before heading south on Hwy 3.',
    },
    {
      name: 'Fort Providence',
      km: 316,
      icon: '🌉',
      text: 'Where the Deh Cho Bridge crosses the Mackenzie River. Fuel and food, and the end of the first long empty stretch.',
    },
    {
      name: 'Hay River',
      km: 495,
      icon: '🛏️',
      text: 'The hub of the south slave, a port town on Great Slave Lake. Full services and the sensible overnight before the final leg.',
    },
    {
      name: 'Fort Smith',
      km: 769,
      image: '/nt/parks/wood-buffalo.png',
      text: 'Park headquarters on the Alberta border, beside the Slave River rapids. The gateway to the delta, the salt plains and the bison country.',
    },
  ],
};

export default YELLOWKNIFE_WOOD_BUFFALO;
