// Варианты подъезда к Jasper National Park из разных городов Альберты.
// Блоки про сам парк наследуются от icefields-parkway через variantOf,
// см. getRouteDetail в ../index.js. Здесь — только про дорогу.

import { EDMONTON_JASPER_EXPLORER } from '../explorer/edmonton-jasper.js';
import { CALGARY_JASPER_EXPLORER } from '../explorer/calgary-jasper.js';
import { CANMORE_JASPER_EXPLORER } from '../explorer/canmore-jasper.js';
import { LETHBRIDGE_JASPER_EXPLORER } from '../explorer/lethbridge-jasper.js';
import { RED_DEER_JASPER_EXPLORER } from '../explorer/red-deer-jasper.js';

const BASE = 'icefields-parkway';

export const EDMONTON_JASPER = {
  slug: 'edmonton-jasper',
  variantOf: BASE,
  name: 'Edmonton to Jasper',
  explorer: EDMONTON_JASPER_EXPLORER,
  description:
    'The working road into the Rockies — Highway 16, the Yellowhead, through forestry and coal country rather than tourist towns. It is the fastest way from a major city to Jasper, and the only approach that does not involve the Icefields Parkway.',
  badges: ['366 KM', '~4H45M DRIVE', 'THE YELLOWHEAD', 'NO PARKWAY NEEDED'],
  headlineStats: [
    { value: '366', unit: 'km', label: 'Edmonton to Jasper Townsite' },
    { value: '~4h45', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '78', unit: 'km', label: 'Hinton to the Park Gate' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '366 km, Edmonton to Jasper via Edson and Hinton on Hwy 16' },
    { icon: 'time', label: 'Drive Time', value: '~4h45m non-stop · a comfortable half-day, and the only Jasper approach that is simply a drive' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy — Edson and Hinton are full service towns. Hinton is the last cheap fuel before park prices' },
    { icon: 'cell', label: 'Cell Service', value: 'Reasonable along Hwy 16 through the towns · drops inside the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 16, the Yellowhead · divided for the first stretch, then two-lane with passing lanes' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round and the most reliable winter approach to Jasper. Still a mountain highway past Hinton — winter tires required inside the park' },
  ],
  stops: [
    { name: 'Edmonton', km: 0, icon: '🏙️', text: 'Starting point. West on Hwy 16 — the Yellowhead runs all the way to the park gate.' },
    { name: 'Edson', km: 202, icon: '⛽', text: 'A forestry and rail town, and the practical halfway stop. Full services and the last of the flat country.' },
    { name: 'Hinton', km: 288, icon: '🛏️', text: 'The gateway town outside the park, with cheaper beds and fuel than Jasper. The mountains are properly visible from here.' },
    { name: 'Jasper', km: 366, image: '/ab/parks/jasper.png', text: 'The townsite in the valley. Smaller and quieter than Banff, and the start of the Icefields Parkway south.' },
  ],
};

export const CALGARY_JASPER = {
  slug: 'calgary-jasper',
  variantOf: BASE,
  name: 'Calgary to Jasper',
  explorer: CALGARY_JASPER_EXPLORER,
  description:
    'Calgary to Jasper the scenic way: west to Banff, then north up the Icefields Parkway past the Columbia Icefield. It is 420 km and six hours of driving on paper, and nobody completes it in six hours — the parkway is the reason you chose this instead of the Yellowhead.',
  badges: ['420 KM', '~6H15M DRIVE', 'ICEFIELDS PARKWAY', 'FUEL DISCIPLINE'],
  headlineStats: [
    { value: '420', unit: 'km', label: 'Calgary to Jasper Townsite' },
    { value: '~6h15', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '233', unit: 'km', label: 'Of Icefields Parkway' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '420 km, Calgary to Jasper via Banff, Lake Louise and the Icefields Parkway' },
    { icon: 'time', label: 'Drive Time', value: '~6h15m non-stop · plan a full day, because the parkway is the point' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill at Lake Louise before the parkway. Saskatchewan River Crossing is the only pump for the next 150 km and it is seasonal' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Lake Louise · effectively nothing along the parkway until Jasper' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada to Lake Louise, then Hwy 93 north · two-lane, no passing lanes for long stretches' },
    { icon: 'winter', label: 'Winter Driving', value: 'The parkway is unserviced in winter with avalanche closures and no signal. If conditions look marginal, the Yellowhead via Edmonton is the safe alternative' },
  ],
  stops: [
    { name: 'Calgary', km: 0, icon: '🌆', text: 'Starting point. West on the Trans-Canada — the mountains appear within twenty minutes.' },
    { name: 'Banff', km: 129, icon: '🏔️', text: 'The first park townsite. Worth a stop, but the drive ahead is the longer commitment.' },
    { name: 'Lake Louise', km: 187, icon: '⛽', text: 'Where the Icefields Parkway begins. Fill the tank here — this is the decision point.' },
    { name: 'Saskatchewan River Crossing', km: 266, icon: '🏕️', text: 'The only services on the parkway: seasonal fuel, a café and a motel. Confirm it is open before relying on it.' },
    { name: 'Jasper', km: 420, image: '/ab/parks/jasper.png', text: 'The end of the parkway and the townsite in the valley.' },
  ],
};

export const CANMORE_JASPER = {
  slug: 'canmore-jasper',
  variantOf: BASE,
  name: 'Canmore to Jasper',
  explorer: CANMORE_JASPER_EXPLORER,
  description:
    'Canmore sits at the southern end of the mountain corridor, so this is the Icefields Parkway run with the Calgary hour removed. Three hundred kilometres, almost all of it inside national parks, and the only fuel between Lake Louise and Jasper is seasonal.',
  badges: ['313 KM', '~4H45M DRIVE', 'ICEFIELDS PARKWAY', 'SEASONAL FUEL ONLY'],
  headlineStats: [
    { value: '313', unit: 'km', label: 'Canmore to Jasper Townsite' },
    { value: '~4h45', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '233', unit: 'km', label: 'Of Icefields Parkway' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '313 km, Canmore to Jasper via Lake Louise and the Icefields Parkway' },
    { icon: 'time', label: 'Drive Time', value: '~4h45m non-stop · the parkway section alone deserves most of a day' },
    { icon: 'fuel', label: 'Fuel', value: 'Canmore is the cheapest fuel on the route. Fill again at Lake Louise before the parkway — after that it is seasonal only' },
    { icon: 'cell', label: 'Cell Service', value: 'Good in Canmore and Lake Louise · nothing useful along the parkway' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada to Lake Louise, then Hwy 93 north · two-lane for the whole parkway' },
    { icon: 'winter', label: 'Winter Driving', value: 'Winter tires are legally required on these roads from October to April, and the parkway can close for avalanche control without much warning' },
  ],
  stops: [
    { name: 'Canmore', km: 0, icon: '🏘️', text: 'Starting point outside the park boundary. Fill up here — it is the last fuel below park prices.' },
    { name: 'Lake Louise', km: 80, icon: '⛽', text: 'The junction and the last reliable fuel. The Icefields Parkway starts just north of the village.' },
    { name: 'Saskatchewan River Crossing', km: 159, icon: '🏕️', text: 'Seasonal fuel, a café and a motel — the only services for 150 km in either direction.' },
    { name: 'Jasper', km: 313, image: '/ab/parks/jasper.png', text: 'The townsite at the north end of the parkway.' },
  ],
};

export const LETHBRIDGE_JASPER = {
  slug: 'lethbridge-jasper',
  variantOf: BASE,
  name: 'Lethbridge to Jasper',
  explorer: LETHBRIDGE_JASPER_EXPLORER,
  description:
    'The full length of the Alberta Rockies in one drive: from the dry southern prairie up through Calgary and Banff and all the way along the Icefields Parkway. At 627 km and nearly nine hours it is the longest mountain approach in the province, and it should be two days.',
  badges: ['627 KM', '~8H50M DRIVE', 'PRAIRIE TO ICEFIELD', 'TWO-DAY TRIP'],
  headlineStats: [
    { value: '627', unit: 'km', label: 'Lethbridge to Jasper Townsite' },
    { value: '~8h50', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '290', unit: 'km', label: 'Of Icefields Parkway at the End' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '627 km, Lethbridge to Jasper via Calgary, Banff and the Icefields Parkway' },
    { icon: 'time', label: 'Drive Time', value: '~8h50m non-stop · genuinely a two-day trip, with Banff or Lake Louise as the overnight' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy to Lake Louise, then nothing reliable. Fill at Lake Louise regardless of the gauge' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie and to Lake Louise · gone along the parkway' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 3 → Hwy 2 → Trans-Canada → Hwy 93 · divided highway, then two-lane parkway' },
    { icon: 'winter', label: 'Winter Driving', value: 'Three distinct hazards in one route: chinook black ice in the south, prairie blizzards, and an unserviced mountain parkway at the end' },
  ],
  stops: [
    { name: 'Lethbridge', km: 0, icon: '🌾', text: 'Starting point in the dry south. North to Calgary first — the mountains are four hours away.' },
    { name: 'Calgary', km: 208, icon: '🌆', text: 'Turn west onto the Trans-Canada. A reasonable place to stop before the mountain half begins.' },
    { name: 'Banff', km: 337, icon: '🏔️', text: 'The first park townsite, and the sensible overnight if you are splitting the drive.' },
    { name: 'Saskatchewan River Crossing', km: 472, icon: '⛽', text: 'The only services on the parkway, and seasonal. Do not arrive here needing fuel.' },
    { name: 'Jasper', km: 627, image: '/ab/parks/jasper.png', text: 'The far end of the Rockies from where you started.' },
  ],
};

export const RED_DEER_JASPER = {
  slug: 'red-deer-jasper',
  variantOf: BASE,
  name: 'Red Deer to Jasper',
  explorer: RED_DEER_JASPER_EXPLORER,
  description:
    'North to Edmonton and then west on the Yellowhead — the practical route rather than the scenic one. It is longer than going over the parkway from Banff but far more predictable, and it is the approach most central Albertans actually use in winter.',
  badges: ['520 KM', '~6H40M DRIVE', 'VIA EDMONTON', 'RELIABLE IN WINTER'],
  headlineStats: [
    { value: '520', unit: 'km', label: 'Red Deer to Jasper Townsite' },
    { value: '~6h40', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '154', unit: 'km', label: 'North to Edmonton First' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '520 km, Red Deer to Jasper via Edmonton, Edson and Hinton' },
    { icon: 'time', label: 'Drive Time', value: '~6h40m non-stop · a long day, but on good highway the whole way' },
    { icon: 'fuel', label: 'Fuel', value: 'Never a concern — Edmonton, Edson and Hinton all have full services' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along the QEII and Hwy 16 · drops inside the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) north, then Hwy 16 west · divided for most of the distance' },
    { icon: 'winter', label: 'Winter Driving', value: 'The reason to take this route in winter: no mountain pass and no parkway. Prairie ground blizzards are the one real risk' },
  ],
  stops: [
    { name: 'Red Deer', km: 0, icon: '🏙️', text: 'Starting point. North on the QEII rather than west — the long way round is the sensible way.' },
    { name: 'Edmonton', km: 154, icon: '🌆', text: 'Where the route turns west onto Hwy 16. Last big-city services before the forestry country.' },
    { name: 'Edson', km: 355, icon: '⛽', text: 'A forestry and rail town, and the natural break on the western half.' },
    { name: 'Hinton', km: 441, icon: '🛏️', text: 'The gateway town outside the park, with cheaper beds and fuel than Jasper itself.' },
    { name: 'Jasper', km: 520, image: '/ab/parks/jasper.png', text: 'The townsite in the valley, at the end of a long but easy drive.' },
  ],
};
