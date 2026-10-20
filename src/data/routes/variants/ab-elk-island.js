// Варианты подъезда к Elk Island из разных городов Альберты.
// Блоки про сам парк наследуются от edmonton-elk-island через
// variantOf, см. getRouteDetail в ../index.js. Здесь — только дорога.

import { CALGARY_ELK_ISLAND_EXPLORER } from '../explorer/calgary-elk-island.js';
import { BANFF_ELK_ISLAND_EXPLORER } from '../explorer/banff-elk-island.js';
import { JASPER_ELK_ISLAND_EXPLORER } from '../explorer/jasper-elk-island.js';
import { CANMORE_ELK_ISLAND_EXPLORER } from '../explorer/canmore-elk-island.js';
import { LETHBRIDGE_ELK_ISLAND_EXPLORER } from '../explorer/lethbridge-elk-island.js';
import { RED_DEER_ELK_ISLAND_EXPLORER } from '../explorer/red-deer-elk-island.js';

const BASE = 'edmonton-elk-island';

export const CALGARY_ELK_ISLAND = {
  slug: 'calgary-elk-island',
  variantOf: BASE,
  name: 'Calgary to Elk Island',
  explorer: CALGARY_ELK_ISLAND_EXPLORER,
  description:
    'Three and a half hours north to the park that saved the plains bison. Most Calgarians drive west to the mountains and never make this trip — which is why Elk Island on a summer weekend is emptier than any Banff trailhead at the same hour.',
  badges: ['354 KM', '~4H35M DRIVE', 'VIA EDMONTON', 'BISON ON THE ROAD'],
  headlineStats: [
    { value: '354', unit: 'km', label: 'Calgary to the Park Gate' },
    { value: '~4h35', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '301', unit: 'km', label: 'North to Edmonton First' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '354 km, Calgary to Elk Island via Red Deer and Edmonton' },
    { icon: 'time', label: 'Drive Time', value: '~4h35m non-stop · a long day trip, or an easy leg on the way somewhere else' },
    { icon: 'fuel', label: 'Fuel', value: 'Never an issue — the QEII is the busiest corridor in the province and there is nothing to run out of at the end' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole way, including in the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) north, then Hwy 16 east · divided four-lane throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Prairie ground blizzards close the QEII a few times each winter. The park itself stays open and is good in snow' },
  ],
  stops: [
    { name: 'Calgary', km: 0, icon: '🌆', text: 'Starting point. North on the QEII — four hours of prairie rather than one hour of mountains.' },
    { name: 'Red Deer', km: 147, icon: '⛽', text: 'The halfway city. Full services and the obvious break.' },
    { name: 'Edmonton', km: 301, icon: '🏙️', text: 'Through the city and east on Hwy 16. The park gate is forty minutes further.' },
    { name: 'Elk Island National Park', km: 354, image: '/ab/parks/Elk Island National Park.png', text: 'Fenced aspen parkland with bison on both sides of the road, and the darkest sky within an hour of a million people.' },
  ],
};

export const BANFF_ELK_ISLAND = {
  slug: 'banff-elk-island',
  variantOf: BASE,
  name: 'Banff to Elk Island',
  explorer: BANFF_ELK_ISLAND_EXPLORER,
  description:
    'From the most photographed park in Canada to the one that made several of the others possible. Elk Island supplied the bison that were reintroduced to Banff in 2017, so this drive follows the same route those animals took — in reverse, and six hours slower.',
  badges: ['479 KM', '~6H05M DRIVE', 'PARK TO PARK', 'WHERE BANFF’S BISON CAME FROM'],
  headlineStats: [
    { value: '479', unit: 'km', label: 'Banff to the Park Gate' },
    { value: '~6h05', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '2017', unit: '', label: 'Bison Returned to Banff From Here' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '479 km, Banff to Elk Island via Calgary, Red Deer and Edmonton' },
    { icon: 'time', label: 'Drive Time', value: '~6h05m non-stop · a full day of driving, almost all of it on divided highway' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill in Canmore rather than Banff, then the QEII has services the whole way' },
    { icon: 'cell', label: 'Cell Service', value: 'Patchy around Banff, then good for the rest of the drive' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada east, Hwy 2 (QEII) north, then Hwy 16 east · divided throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Mountain conditions for the first hour, then prairie ground blizzards — two different hazards on one drive' },
  ],
  stops: [
    { name: 'Banff', km: 0, icon: '🏔️', text: 'Starting point in the mountains. East on the Trans-Canada and out of the Rockies.' },
    { name: 'Calgary', km: 129, icon: '🌆', text: 'Where the route turns north onto the QEII.' },
    { name: 'Red Deer', km: 276, icon: '⛽', text: 'The halfway city of the prairie section.' },
    { name: 'Elk Island National Park', km: 479, image: '/ab/parks/Elk Island National Park.png', text: 'The source herd for Banff’s own bison, in a fenced patch of aspen parkland east of Edmonton.' },
  ],
};

export const JASPER_ELK_ISLAND = {
  slug: 'jasper-elk-island',
  variantOf: BASE,
  name: 'Jasper to Elk Island',
  explorer: JASPER_ELK_ISLAND_EXPLORER,
  description:
    'East on the Yellowhead from the mountains to the aspen parkland — one highway almost the whole way, and a complete change of landscape by the end of it. The elk, moose and bison at the far end are as dense as anything in Jasper, inside a fence a fraction of the size.',
  badges: ['420 KM', '~5H35M DRIVE', 'ONE HIGHWAY', 'MOUNTAINS TO PARKLAND'],
  headlineStats: [
    { value: '420', unit: 'km', label: 'Jasper to the Park Gate' },
    { value: '~5h35', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '194', unit: 'km²', label: 'Versus Jasper’s 11,000' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '420 km, Jasper to Elk Island via Hinton, Edson and Edmonton on Hwy 16' },
    { icon: 'time', label: 'Drive Time', value: '~5h35m non-stop · straightforward, with the only real traffic through Edmonton' },
    { icon: 'fuel', label: 'Fuel', value: 'Hinton is the first cheap fuel outside the park, then Edson and Edmonton. Never a concern after that' },
    { icon: 'cell', label: 'Cell Service', value: 'Drops inside Jasper, good from Hinton east' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 16, the Yellowhead, nearly the entire distance · two-lane west, divided east' },
    { icon: 'winter', label: 'Winter Driving', value: 'The most reliable winter route out of Jasper — no mountain pass. Ground blizzards east of Edmonton are the one risk' },
  ],
  stops: [
    { name: 'Jasper', km: 0, icon: '🏔️', text: 'Starting point. East on the Yellowhead — the same road the whole way.' },
    { name: 'Hinton', km: 77, icon: '⛽', text: 'Just outside the park, with fuel at normal prices for the first time.' },
    { name: 'Edson', km: 165, icon: '🌲', text: 'Forestry and rail country, and the natural midpoint of the drive.' },
    { name: 'Edmonton', km: 366, icon: '🏙️', text: 'Through the city and east. The park is another forty minutes on the same highway.' },
    { name: 'Elk Island National Park', km: 420, image: '/ab/parks/Elk Island National Park.png', text: 'Aspen parkland, bison on the road, and one of the highest densities of hoofed animals in Canada.' },
  ],
};

export const CANMORE_ELK_ISLAND = {
  slug: 'canmore-elk-island',
  variantOf: BASE,
  name: 'Canmore to Elk Island',
  explorer: CANMORE_ELK_ISLAND_EXPLORER,
  description:
    'Out of the mountain corridor and across the full width of settled Alberta. It is nearly six hours of easy divided highway, and the contrast at the end is the point: from the most crowded landscape in the Rockies to a park most people drive past without knowing it exists.',
  badges: ['455 KM', '~5H45M DRIVE', 'MOUNTAINS TO PARKLAND', 'VIA CALGARY'],
  headlineStats: [
    { value: '455', unit: 'km', label: 'Canmore to the Park Gate' },
    { value: '~5h45', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '104', unit: 'km', label: 'Before You Leave the Mountains' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '455 km, Canmore to Elk Island via Calgary, Red Deer and Edmonton' },
    { icon: 'time', label: 'Drive Time', value: '~5h45m non-stop · a full driving day on good roads' },
    { icon: 'fuel', label: 'Fuel', value: 'Canmore is the cheapest fuel of the trip; after that the QEII corridor covers everything' },
    { icon: 'cell', label: 'Cell Service', value: 'Good from Canmore onward, including in the park' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada east, Hwy 2 (QEII) north, then Hwy 16 east · divided throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Mountain conditions leaving Canmore, prairie ground blizzards for the rest — check both forecasts' },
  ],
  stops: [
    { name: 'Canmore', km: 0, icon: '🏘️', text: 'Starting point at the edge of the Rockies. East on the Trans-Canada.' },
    { name: 'Calgary', km: 104, icon: '🌆', text: 'Where the route turns north. The mountains disappear from the mirror within half an hour.' },
    { name: 'Red Deer', km: 251, icon: '⛽', text: 'The halfway city, and the obvious break on a long day.' },
    { name: 'Elk Island National Park', km: 455, image: '/ab/parks/Elk Island National Park.png', text: 'Fenced aspen parkland with free-roaming bison and a dark sky preserve, forty minutes from Edmonton.' },
  ],
};

export const LETHBRIDGE_ELK_ISLAND = {
  slug: 'lethbridge-elk-island',
  variantOf: BASE,
  name: 'Lethbridge to Elk Island',
  explorer: LETHBRIDGE_ELK_ISLAND_EXPLORER,
  description:
    'The full north-south length of Alberta on one highway, from the dry south to the aspen parkland east of Edmonton. Seven hours, nearly all of it divided, and a landscape that changes from irrigated prairie to grain country to boreal edge without ever being dramatic about it.',
  badges: ['559 KM', '~7H DRIVE', 'THE FULL QEII', 'SOUTH TO NORTH'],
  headlineStats: [
    { value: '559', unit: 'km', label: 'Lethbridge to the Park Gate' },
    { value: '~7', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '355', unit: 'km', label: 'To Red Deer, the Halfway Point' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '559 km, Lethbridge to Elk Island via Calgary, Red Deer and Edmonton' },
    { icon: 'time', label: 'Drive Time', value: '~7h non-stop · a full day, and worth splitting at Calgary or Red Deer' },
    { icon: 'fuel', label: 'Fuel', value: 'Services the entire way — this is the busiest corridor in Alberta' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole route, including in the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 3 → Hwy 2 (QEII) north → Hwy 16 east · divided highway nearly throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Chinook black ice in the south and ground blizzards further north. The QEII closes for whiteouts several times each winter' },
  ],
  stops: [
    { name: 'Lethbridge', km: 0, icon: '🌾', text: 'Starting point in the dry south. North toward Calgary and the long run up the province.' },
    { name: 'Calgary', km: 208, icon: '🌆', text: 'Through the city and onto the QEII north.' },
    { name: 'Red Deer', km: 355, icon: '⛽', text: 'The halfway city between Alberta’s two big centres, and the natural break.' },
    { name: 'Elk Island National Park', km: 559, image: '/ab/parks/Elk Island National Park.png', text: 'Bison, elk and moose behind a fence, seven hours from the southern prairie.' },
  ],
};

export const RED_DEER_ELK_ISLAND = {
  slug: 'red-deer-elk-island',
  variantOf: BASE,
  name: 'Red Deer to Elk Island',
  explorer: RED_DEER_ELK_ISLAND_EXPLORER,
  description:
    'Under three hours from central Alberta to the bison. It is the easiest park trip in the province after Edmonton’s own — straight up the QEII, through the city, and east on the Yellowhead to the gate.',
  badges: ['207 KM', '~2H50M DRIVE', 'EASY DAY TRIP', 'DARK SKY PRESERVE'],
  headlineStats: [
    { value: '207', unit: 'km', label: 'Red Deer to the Park Gate' },
    { value: '~2h50', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '154', unit: 'km', label: 'North to Edmonton First' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '207 km, Red Deer to Elk Island via Edmonton' },
    { icon: 'time', label: 'Drive Time', value: '~2h50m non-stop · comfortably a day trip, and good for an evening under the dark sky' },
    { icon: 'fuel', label: 'Fuel', value: 'Not a consideration. The QEII has services throughout and there is nothing to run out of at the end' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole way, including in the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) north, then Hwy 16 east · divided four-lane the whole distance' },
    { icon: 'winter', label: 'Winter Driving', value: 'Ploughed and open all winter. The only real risk is a prairie ground blizzard on the QEII' },
  ],
  stops: [
    { name: 'Red Deer', km: 0, icon: '🏙️', text: 'Starting point. North on the QEII for an hour and a half.' },
    { name: 'Edmonton', km: 154, icon: '🏙️', text: 'Through the city and east on Hwy 16. The park gate is forty minutes further.' },
    { name: 'Elk Island National Park', km: 207, image: '/ab/parks/Elk Island National Park.png', text: 'Bison on both sides of the parkway, Astotin Lake, and the nearest truly dark sky to central Alberta.' },
  ],
};
