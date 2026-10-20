// Варианты подъезда к Banff & Lake Louise из разных городов Альберты.
// Блоки про сам парк (предупреждения, история земли, животные) не
// дублируются — они наследуются от calgary-banff-lake-louise через
// variantOf, см. getRouteDetail в ../index.js. Здесь только то, что
// действительно меняется от города к городу: дорога, цифры, остановки.

import { EDMONTON_BANFF_LAKE_LOUISE_EXPLORER } from '../explorer/edmonton-banff-lake-louise.js';
import { JASPER_BANFF_LAKE_LOUISE_EXPLORER } from '../explorer/jasper-banff-lake-louise.js';
import { CANMORE_BANFF_LAKE_LOUISE_EXPLORER } from '../explorer/canmore-banff-lake-louise.js';
import { LETHBRIDGE_BANFF_LAKE_LOUISE_EXPLORER } from '../explorer/lethbridge-banff-lake-louise.js';
import { RED_DEER_BANFF_LAKE_LOUISE_EXPLORER } from '../explorer/red-deer-banff-lake-louise.js';

const BASE = 'calgary-banff-lake-louise';

export const EDMONTON_BANFF_LAKE_LOUISE = {
  slug: 'edmonton-banff-lake-louise',
  variantOf: BASE,
  name: 'Edmonton to Banff & Lake Louise',
  explorer: EDMONTON_BANFF_LAKE_LOUISE_EXPLORER,
  description:
    'The long way into the Rockies: four hours of prairie and parkland down the QEII before the mountains even appear on the horizon. Nothing about the first 300 km hints at what the last 190 look like, which is part of why the arrival lands the way it does.',
  badges: ['489 KM', '~6H25M DRIVE', 'PRAIRIE THEN ROCKIES', 'VIA CALGARY'],
  headlineStats: [
    { value: '489', unit: 'km', label: 'Edmonton to Lake Louise' },
    { value: '~6h25', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '301', unit: 'km', label: 'Before the Mountains Start' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '489 km, Edmonton to Lake Louise via Red Deer, Calgary and Banff' },
    { icon: 'time', label: 'Drive Time', value: '~6h25m non-stop · a full day with stops, and the mountain hour is the slow one' },
    { icon: 'fuel', label: 'Fuel', value: 'Never a concern — the QEII is the busiest highway in Alberta and services run the whole way to Canmore' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Banff · patchy west of Banff and gone on most trails' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) to Calgary, then the Trans-Canada west · divided highway the entire distance' },
    { icon: 'winter', label: 'Winter Driving', value: 'Two different problems in one drive: prairie ground blizzards north of Calgary, mountain conditions west of it' },
  ],
  stops: [
    { name: 'Edmonton', km: 0, icon: '🏙️', text: 'Starting point. South on the QEII — the fastest and busiest road in the province.' },
    { name: 'Red Deer', km: 155, icon: '⛽', text: 'The halfway city between Edmonton and Calgary, and the obvious place to break the prairie stretch.' },
    { name: 'Calgary', km: 301, icon: '🌆', text: 'Where you turn west and the Rockies finally appear as a wall on the horizon. Last big-city shopping.' },
    { name: 'Banff', km: 430, icon: '🏔️', text: 'The park townsite — food, beds and the gondola. Most people stop here whether they meant to or not.' },
    { name: 'Lake Louise', km: 489, image: '/ab/parks/banff.png', text: 'The lake, the Victoria Glacier behind it, and a parking situation that demands an early start.' },
  ],
};

export const JASPER_BANFF_LAKE_LOUISE = {
  slug: 'jasper-banff-lake-louise',
  variantOf: BASE,
  name: 'Jasper to Banff & Lake Louise',
  explorer: JASPER_BANFF_LAKE_LOUISE_EXPLORER,
  description:
    'The Icefields Parkway in the other direction — 290 km of glaciers, meltwater lakes and almost no services, ending in the busiest corner of the Rockies. Driven southbound the scale builds rather than releases, and you finish at Lake Louise instead of starting there.',
  badges: ['290 KM', '~4H30M DRIVE', 'ICEFIELDS PARKWAY', 'NO FUEL FOR 230 KM'],
  headlineStats: [
    { value: '290', unit: 'km', label: 'Jasper to Banff Townsite' },
    { value: '~4h30', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '2,069', unit: 'm', label: 'Bow Summit, the High Point' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '290 km, Jasper to Banff via Saskatchewan River Crossing and Lake Louise' },
    { icon: 'time', label: 'Drive Time', value: '~4h30m non-stop · realistically a full day, because you will stop constantly' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill up in Jasper. Saskatchewan River Crossing is the only fuel on the parkway and it is seasonal and expensive — treat it as a bonus, not a plan' },
    { icon: 'cell', label: 'Cell Service', value: 'Jasper and Lake Louise only. Nothing worth relying on in between' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 93 (Icefields Parkway) then Hwy 1 · two-lane, paved, no passing lanes for long stretches' },
    { icon: 'winter', label: 'Winter Driving', value: 'The parkway is open but unserviced in winter, with avalanche closures and no cell signal. Winter tires are a legal requirement here' },
  ],
  stops: [
    { name: 'Jasper', km: 0, icon: '🏔️', text: 'Starting point. Fill the tank here — this is the last reliable fuel for 230 km.' },
    { name: 'Saskatchewan River Crossing', km: 153, icon: '⛽', text: 'The only services on the parkway: fuel, a café and a motel, all seasonal. Check it is open before you count on it.' },
    { name: 'Lake Louise', km: 232, image: '/ab/parks/banff.png', text: 'Where the parkway meets the Trans-Canada and the crowds return abruptly. Parking fills by mid-morning in summer.' },
    { name: 'Banff', km: 290, icon: '🏙️', text: 'The townsite at the end of the drive — hot springs, the gondola and the first real choice of restaurants since Jasper.' },
  ],
};

export const CANMORE_BANFF_LAKE_LOUISE = {
  slug: 'canmore-banff-lake-louise',
  variantOf: BASE,
  name: 'Canmore to Banff & Lake Louise',
  explorer: CANMORE_BANFF_LAKE_LOUISE_EXPLORER,
  description:
    'The shortest way into the Rockies on this site: twenty minutes from Canmore to Banff, an hour to Lake Louise. Canmore sits just outside the park boundary, which is exactly why people base themselves here — cheaper beds, no park pass needed to sleep, and the mountains start at the end of the street.',
  badges: ['84 KM', '~1H20M DRIVE', 'BASED OUTSIDE THE PARK', 'PARK PASS NEEDED'],
  headlineStats: [
    { value: '84', unit: 'km', label: 'Canmore to Lake Louise' },
    { value: '~1h20', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '26', unit: 'km', label: 'Canmore to Banff Townsite' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '84 km, Canmore to Lake Louise via Banff · the townsite itself is only 26 km' },
    { icon: 'time', label: 'Drive Time', value: '~1h20m non-stop · but summer parking at Lake Louise is the real time cost' },
    { icon: 'fuel', label: 'Fuel', value: 'Canmore is the cheapest fuel of the three towns and the sensible place to fill up — prices inside the park are higher' },
    { icon: 'cell', label: 'Cell Service', value: 'Good in Canmore and Banff · patchy west toward Lake Louise and gone on the trails' },
    { icon: 'road', label: 'Road Type', value: 'Trans-Canada Hwy 1 · divided and fenced through the park, with the wildlife overpasses' },
    { icon: 'winter', label: 'Winter Driving', value: 'Short but genuinely mountainous. Winter tires are legally required on this stretch from October to April' },
  ],
  stops: [
    { name: 'Canmore', km: 0, icon: '🏘️', text: 'Starting point, just outside the park gate. You still need a park pass the moment you cross the boundary.' },
    { name: 'Banff', km: 26, icon: '🏔️', text: 'Twenty minutes up the highway. The townsite, the hot springs and the gondola — and parking that fills early.' },
    { name: 'Lake Louise', km: 84, image: '/ab/parks/banff.png', text: 'The lake itself. In summer the lot is full by sunrise and the shuttle is the realistic way in.' },
  ],
};

export const LETHBRIDGE_BANFF_LAKE_LOUISE = {
  slug: 'lethbridge-banff-lake-louise',
  variantOf: BASE,
  name: 'Lethbridge to Banff & Lake Louise',
  explorer: LETHBRIDGE_BANFF_LAKE_LOUISE_EXPLORER,
  description:
    'North out of the dry southern prairie, through Calgary, and west into the mountains. The first two hours cross some of the windiest open country in Canada — chinook country, where a winter afternoon can swing twenty degrees before you reach Fort Macleod.',
  badges: ['405 KM', '~5H25M DRIVE', 'CHINOOK COUNTRY', 'VIA CALGARY'],
  headlineStats: [
    { value: '405', unit: 'km', label: 'Lethbridge to Lake Louise' },
    { value: '~5h25', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '218', unit: 'km', label: 'Of Prairie Before Calgary' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '405 km, Lethbridge to Lake Louise via Fort Macleod, Calgary and Banff' },
    { icon: 'time', label: 'Drive Time', value: '~5h25m non-stop · an easy long day on good roads' },
    { icon: 'fuel', label: 'Fuel', value: 'Fort Macleod, Claresholm and Calgary all have full services — fuel is never the constraint on this route' },
    { icon: 'cell', label: 'Cell Service', value: 'Good across the prairie and to Banff · patchy beyond it' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 3 then Hwy 2 north to Calgary, then the Trans-Canada west · all divided or twinned' },
    { icon: 'winter', label: 'Winter Driving', value: 'Southern Alberta wind is the issue: ground blizzards and black ice after a chinook thaw refreezes, long before you reach the mountains' },
  ],
  stops: [
    { name: 'Lethbridge', km: 0, icon: '🌾', text: 'Starting point in the dry south, beside the high-level rail bridge. Head north and west.' },
    { name: 'Fort Macleod', km: 50, icon: '⛽', text: 'The junction town where Hwy 3 meets Hwy 2. Head-Smashed-In Buffalo Jump is a short detour west.' },
    { name: 'Calgary', km: 218, icon: '🌆', text: 'Where the route turns west onto the Trans-Canada and the mountains come into view.' },
    { name: 'Banff', km: 347, icon: '🏔️', text: 'The townsite inside the park. Food, beds and the busiest street in the Rockies.' },
    { name: 'Lake Louise', km: 405, image: '/ab/parks/banff.png', text: 'The end of the drive. Arrive before eight or plan on the shuttle.' },
  ],
};

export const RED_DEER_BANFF_LAKE_LOUISE = {
  slug: 'red-deer-banff-lake-louise',
  variantOf: BASE,
  name: 'Red Deer to Banff & Lake Louise',
  explorer: RED_DEER_BANFF_LAKE_LOUISE_EXPLORER,
  description:
    'The middle of the province to the middle of the Rockies. Red Deer sits almost exactly between Edmonton and Calgary, which makes this the shortest prairie run of the Alberta approaches — ninety minutes of highway, then the mountains.',
  badges: ['334 KM', '~4H25M DRIVE', 'SHORTEST PRAIRIE RUN', 'VIA CALGARY'],
  headlineStats: [
    { value: '334', unit: 'km', label: 'Red Deer to Lake Louise' },
    { value: '~4h25', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '147', unit: 'km', label: 'To Calgary and the Turn West' },
  ],
  passport: [
    { icon: 'distance', label: 'Distance', value: '334 km, Red Deer to Lake Louise via Calgary and Banff' },
    { icon: 'time', label: 'Drive Time', value: '~4h25m non-stop · comfortably a day trip if you leave early' },
    { icon: 'fuel', label: 'Fuel', value: 'Services the whole way down the QEII and through Calgary. Fill in Canmore rather than inside the park' },
    { icon: 'cell', label: 'Cell Service', value: 'Good to Banff · patchy west of it' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 2 (QEII) south, then the Trans-Canada west · divided highway throughout' },
    { icon: 'winter', label: 'Winter Driving', value: 'Prairie blizzards on the QEII and mountain conditions past Canmore — check both forecasts, not one' },
  ],
  stops: [
    { name: 'Red Deer', km: 0, icon: '🏙️', text: 'Starting point, halfway between Alberta’s two cities. South on the QEII.' },
    { name: 'Calgary', km: 147, icon: '🌆', text: 'Turn west onto the Trans-Canada. The Rockies show up on the skyline within minutes of leaving the city.' },
    { name: 'Banff', km: 276, icon: '🏔️', text: 'The park townsite, and the natural lunch stop on a day trip.' },
    { name: 'Lake Louise', km: 334, image: '/ab/parks/banff.png', text: 'The lake and the Victoria Glacier. Early arrival or shuttle — there is no third option in summer.' },
  ],
};
