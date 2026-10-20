// Варианты подъезда к Waterton Lakes из разных городов Альберты.
// Блоки про сам парк наследуются от calgary-waterton-lakes через
// variantOf, см. getRouteDetail в ../index.js. Здесь — только дорога.

import { EDMONTON_WATERTON_LAKES_EXPLORER } from '../explorer/edmonton-waterton-lakes.js';
import { BANFF_WATERTON_LAKES_EXPLORER } from '../explorer/banff-waterton-lakes.js';
import { JASPER_WATERTON_LAKES_EXPLORER } from '../explorer/jasper-waterton-lakes.js';
import { CANMORE_WATERTON_LAKES_EXPLORER } from '../explorer/canmore-waterton-lakes.js';
import { LETHBRIDGE_WATERTON_LAKES_EXPLORER } from '../explorer/lethbridge-waterton-lakes.js';
import { RED_DEER_WATERTON_LAKES_EXPLORER } from '../explorer/red-deer-waterton-lakes.js';

const BASE = 'calgary-waterton-lakes';

export const EDMONTON_WATERTON_LAKES = {
  slug: 'edmonton-waterton-lakes',
  variantOf: BASE,
  name: 'Edmonton to Waterton Lakes',
  explorer: EDMONTON_WATERTON_LAKES_EXPLORER,
  description:
    'The full north-to-south run of settled Alberta: 579 km from Edmonton to the US border, almost all of it on divided highway. Waterton is the least visited of Alberta’s mountain parks largely because of this distance — and that is exactly what makes it worth the drive.',
  badges: ['579 KM', '~7H25M DRIVE', 'FULL LENGTH OF ALBERTA', 'QUIETEST MOUNTAIN PARK'],
  headlineStats: [
    { value: '579', unit: 'km', label: 'Edmonton to Waterton Townsite' },
    { value: '~7h25', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '473', unit: 'km', label: 'Before the Mountains Appear' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '579 km, Edmonton to Waterton via Red Deer, Calgary and Fort Macleod' },
    { icon: 'time', label: 'Drive Time', value: '~7h25m non-stop · a full day, and worth splitting at Calgary if you can' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy the whole way down the QEII and Hwy 2. Pincher Creek and Cardston are the last proper stops before the park' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie · patchy in the park and gone on the trails' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) the whole way south, then Hwy 5 and 6 into the park · divided highway almost throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Prairie blizzards for most of the route, then the windiest corner of the Rockies. Waterton closes much of its road network in winter' },
  ],
  stops: [
    { name: 'Edmonton', km: 0, icon: '🏙️', text: 'Starting point. South on the QEII for the next four and a half hours.' },
    { name: 'Red Deer', km: 155, icon: '⛽', text: 'The halfway city of central Alberta and the obvious first break.' },
    { name: 'Calgary', km: 301, icon: '🌆', text: 'Just over halfway. The natural overnight if you are splitting this drive in two.' },
    { name: 'Fort Macleod', km: 473, icon: '🦬', text: 'Where you turn toward the mountains. Head-Smashed-In Buffalo Jump is a short detour and the best stop on the route.' },
    { name: 'Waterton Lakes', km: 579, image: '/ab/parks/waterton-lakes.png', text: 'The townsite on the lake, where prairie meets mountain with no foothills in between.' },
  ],
};

export const BANFF_WATERTON_LAKES = {
  slug: 'banff-waterton-lakes',
  variantOf: BASE,
  name: 'Banff to Waterton Lakes',
  explorer: BANFF_WATERTON_LAKES_EXPLORER,
  description:
    'Out of the mountains, across the prairie, and back into the mountains again. The two parks are only about 250 km apart in a straight line, but the Rockies have no road between them in Alberta — so you drop to Calgary and come back up the other side.',
  badges: ['406 KM', '~5H20M DRIVE', 'OUT AND BACK IN', 'PARK TO PARK'],
  headlineStats: [
    { value: '406', unit: 'km', label: 'Banff to Waterton Townsite' },
    { value: '~5h20', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '2', unit: '', label: 'Mountain Parks, One Prairie Crossing' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '406 km, Banff to Waterton via Calgary and Fort Macleod' },
    { icon: 'time', label: 'Drive Time', value: '~5h20m non-stop · the park-to-park day that most Rockies itineraries underestimate' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill in Canmore rather than Banff, then services the whole way down Hwy 2' },
    { icon: 'cell', label: 'Cell Service', value: 'Patchy around Banff, good across the prairie, patchy again in Waterton' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada east to Calgary, then Hwy 2 south and Hwy 5/6 into the park' },
    { icon: 'winter', label: 'Winter Driving', value: 'Mountain conditions at both ends and open prairie in between — three different forecasts to check on one drive' },
  ],
  stops: [
    { name: 'Banff', km: 0, icon: '🏔️', text: 'Starting point. East on the Trans-Canada — you leave the mountains before you return to them.' },
    { name: 'Calgary', km: 129, icon: '🌆', text: 'The turn south onto Hwy 2. Last big-city services of the drive.' },
    { name: 'Fort Macleod', km: 301, icon: '🦬', text: 'The junction town, and the detour to Head-Smashed-In Buffalo Jump.' },
    { name: 'Waterton Lakes', km: 406, image: '/ab/parks/waterton-lakes.png', text: 'Smaller, windier and far quieter than the park you left this morning.' },
  ],
};

export const JASPER_WATERTON_LAKES = {
  slug: 'jasper-waterton-lakes',
  variantOf: BASE,
  name: 'Jasper to Waterton Lakes',
  explorer: JASPER_WATERTON_LAKES_EXPLORER,
  description:
    'The longest drive in the Alberta Rockies: the entire Icefields Parkway, then the entire southern prairie, ending at the US border. Nearly 700 km and close to ten hours. Done in one day it is punishing; done in two, with a night in Banff, it is the best road trip in the province.',
  badges: ['692 KM', '~9H35M DRIVE', 'PARKWAY + PRAIRIE', 'SPLIT IT IN TWO'],
  headlineStats: [
    { value: '692', unit: 'km', label: 'Jasper to Waterton Townsite' },
    { value: '~9h35', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '231', unit: 'km', label: 'Of Icefields Parkway First' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '692 km, Jasper to Waterton via the Icefields Parkway, Calgary and Fort Macleod' },
    { icon: 'time', label: 'Drive Time', value: '~9h35m non-stop · this is a two-day route, and treating it as one is how people end up driving the prairie in the dark' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill in Jasper, then at Lake Louise. After Calgary it is easy again all the way to the park' },
    { icon: 'cell', label: 'Cell Service', value: 'Nothing along the parkway, good from Lake Louise to Fort Macleod, patchy in Waterton' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 93 → Trans-Canada → Hwy 2 → Hwy 5/6 · two-lane parkway, then divided highway' },
    { icon: 'winter', label: 'Winter Driving', value: 'Not a sensible winter route in one day: an unserviced parkway at one end, prairie blizzards in the middle, and a park that closes roads at the other' },
  ],
  stops: [
    { name: 'Jasper', km: 0, icon: '🏔️', text: 'Starting point. Fill the tank — the parkway begins immediately and there is nothing on it.' },
    { name: 'Lake Louise', km: 231, icon: '⛽', text: 'The end of the parkway and the first reliable fuel. Also the natural overnight if you split the drive.' },
    { name: 'Calgary', km: 414, icon: '🌆', text: 'Out of the mountains and onto the prairie. Turn south on Hwy 2.' },
    { name: 'Fort Macleod', km: 586, icon: '🦬', text: 'The junction town where the route turns toward the mountains again.' },
    { name: 'Waterton Lakes', km: 692, image: '/ab/parks/waterton-lakes.png', text: 'The far southern end of the Alberta Rockies, almost ten hours from where you started.' },
  ],
};

export const CANMORE_WATERTON_LAKES = {
  slug: 'canmore-waterton-lakes',
  variantOf: BASE,
  name: 'Canmore to Waterton Lakes',
  explorer: CANMORE_WATERTON_LAKES_EXPLORER,
  description:
    'Canmore to the quietest mountain park in Alberta, down the eastern edge of the Rockies. Five hours of mostly divided highway, with the mountains on your right the entire way and the actual turn into them saved for the last hour.',
  badges: ['382 KM', '~5H DRIVE', 'ALONG THE ROCKIES', 'QUIETEST PARK'],
  headlineStats: [
    { value: '382', unit: 'km', label: 'Canmore to Waterton Townsite' },
    { value: '~5', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '277', unit: 'km', label: 'To Fort Macleod and the Turn West' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '382 km, Canmore to Waterton via Calgary and Fort Macleod' },
    { icon: 'time', label: 'Drive Time', value: '~5h non-stop · a long but straightforward day' },
    { icon: 'fuel', label: 'Fuel', value: 'Canmore is cheap fuel; after that the Hwy 2 corridor has services throughout' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie section · patchy in the park itself' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada to Calgary, then Hwy 2 south and Hwy 5/6 into the park' },
    { icon: 'winter', label: 'Winter Driving', value: 'Chinook country: the wind that keeps the prairie clear also leaves black ice when a thaw refreezes overnight' },
  ],
  stops: [
    { name: 'Canmore', km: 0, icon: '🏘️', text: 'Starting point outside the park gate. East on the Trans-Canada toward Calgary.' },
    { name: 'Calgary', km: 104, icon: '🌆', text: 'Turn south on Hwy 2. The Rockies stay visible on your right for the next three hours.' },
    { name: 'Fort Macleod', km: 277, icon: '🦬', text: 'The junction town, with Head-Smashed-In Buffalo Jump a short detour west.' },
    { name: 'Waterton Lakes', km: 382, image: '/ab/parks/waterton-lakes.png', text: 'Where the prairie hits the mountains with no foothills in between — the thing Waterton is actually famous for.' },
  ],
};

export const LETHBRIDGE_WATERTON_LAKES = {
  slug: 'lethbridge-waterton-lakes',
  variantOf: BASE,
  name: 'Lethbridge to Waterton Lakes',
  explorer: LETHBRIDGE_WATERTON_LAKES_EXPLORER,
  description:
    'The shortest approach to any mountain park in Alberta: under two hours from a city of a hundred thousand to the Waterton townsite. The route crosses the Blood Reserve and passes through Cardston, and the mountains rise out of flat farmland with no warning at all.',
  badges: ['132 KM', '~1H50M DRIVE', 'SHORTEST MOUNTAIN RUN', 'KAINAI TERRITORY'],
  headlineStats: [
    { value: '132', unit: 'km', label: 'Lethbridge to Waterton Townsite' },
    { value: '~1h50', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '0', unit: '', label: 'Foothills Between Prairie and Peaks' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '132 km, Lethbridge to Waterton via Cardston on Hwy 5' },
    { icon: 'time', label: 'Drive Time', value: '~1h50m non-stop · the only Alberta mountain park that works as a half-day trip' },
    { icon: 'fuel', label: 'Fuel', value: 'Lethbridge and Cardston both have full services. There is limited fuel in the Waterton townsite and it is seasonal' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the farmland · patchy once you are in the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 5 southwest, then Hwy 6 into the park · two-lane and paved' },
    { icon: 'winter', label: 'Winter Driving', value: 'This is the windiest corner of Alberta. Ground blizzards close Hwy 5 and 6 several times most winters, and the park closes much of its road network' },
  ],
  stops: [
    { name: 'Lethbridge', km: 0, icon: '🌾', text: 'Starting point. Southwest on Hwy 5 — the mountains are already on the horizon.' },
    { name: 'Cardston', km: 79, icon: '⛽', text: 'The last town before the park, on the edge of Kainai territory. Fuel and groceries, and the Remington Carriage Museum.' },
    { name: 'Waterton Lakes', km: 132, image: '/ab/parks/waterton-lakes.png', text: 'The townsite on the lake. Under two hours from the prairie, and it looks nothing like where you started.' },
  ],
};

export const RED_DEER_WATERTON_LAKES = {
  slug: 'red-deer-waterton-lakes',
  variantOf: BASE,
  name: 'Red Deer to Waterton Lakes',
  explorer: RED_DEER_WATERTON_LAKES_EXPLORER,
  description:
    'Straight down the spine of settled Alberta, from the middle of the province to the US border. It is 424 km of almost entirely divided highway — a long day, but one of the easiest long drives in the country until the last hour.',
  badges: ['424 KM', '~5H25M DRIVE', 'DIVIDED HIGHWAY', 'VIA CALGARY'],
  headlineStats: [
    { value: '424', unit: 'km', label: 'Red Deer to Waterton Townsite' },
    { value: '~5h25', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '319', unit: 'km', label: 'To Fort Macleod and the Turn West' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '424 km, Red Deer to Waterton via Calgary and Fort Macleod' },
    { icon: 'time', label: 'Drive Time', value: '~5h25m non-stop · easy driving, but a full day once you include the park' },
    { icon: 'fuel', label: 'Fuel', value: 'Services the entire Hwy 2 corridor. Pincher Creek and Cardston are the last proper stops before the park' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie · patchy in the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) south through Calgary, then Hwy 5/6 into the park · divided almost throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Ground blizzards along the QEII and the open south, then the strongest winds in the Rockies at the far end' },
  ],
  stops: [
    { name: 'Red Deer', km: 0, icon: '🏙️', text: 'Starting point in the centre of the province. South on the QEII.' },
    { name: 'Calgary', km: 147, icon: '🌆', text: 'Through the city and on south. The Rockies sit on your right for the next two hours.' },
    { name: 'Fort Macleod', km: 319, icon: '🦬', text: 'Where you turn toward the mountains, with Head-Smashed-In Buffalo Jump nearby.' },
    { name: 'Waterton Lakes', km: 424, image: '/ab/parks/waterton-lakes.png', text: 'Prairie straight into mountains — the single most striking arrival of any park in Alberta.' },
  ],
};
