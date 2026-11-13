// Справочник для TripSearchForm: провинция (куда — парк) + город
// (откуда — любой город Канады, независимо от провинции). Готовые
// маршруты лежат в TRIP_ROUTES; любая другая комбинация в форме
// показывает честное "Coming soon", а не битую ссылку или
// придуманные цифры.
//
// "Province" в форме определяет провинцию ПАРКА (куда едем) — город
// отправления может быть из любой провинции Канады, поэтому список
// городов не фильтруется выбранной провинцией. Это намеренно: так
// можно искать и межпровинциальные поездки (Toronto → Jasper), а не
// только "внутри одной провинции".

// access: 'fly-in' — дороги до парка нет (только самолёт / лодка):
// форма не пишет "coming soon", а честно объясняет это (how) и ведёт
// на страницу парка. parkSlug — /park/:slug, если такая страница есть.
export const TRIP_PROVINCES = [
  {
    id: 'ab',
    name: 'Alberta',
    parks: [
      { id: 'banff', name: 'Banff & Lake Louise', parkSlug: 'banff' },
      { id: 'jasper', name: 'Jasper National Park', parkSlug: 'jasper' },
      { id: 'waterton', name: 'Waterton Lakes', parkSlug: 'waterton-lakes' },
      { id: 'elk-island', name: 'Elk Island National Park', parkSlug: 'elk-island' },
    ],
  },
  {
    id: 'bc',
    name: 'British Columbia',
    parks: [
      { id: 'pacific-rim', name: 'Whistler & Pacific Rim', parkSlug: 'pacific-rim' },
      { id: 'yoho', name: 'Yoho National Park', parkSlug: 'yoho' },
      { id: 'kootenay', name: 'Kootenay National Park', parkSlug: 'kootenay' },
      { id: 'mount-revelstoke', name: 'Mount Revelstoke & Glacier', parkSlug: 'mount-revelstoke' },
      { id: 'gulf-islands', name: 'Gulf Islands', parkSlug: 'gulf-islands' },
      { id: 'gwaii-haanas', name: 'Gwaii Haanas', parkSlug: 'gwaii-haanas', access: 'fly-in', how: 'There is no road into Gwaii Haanas — it is reached by boat or floatplane from Haida Gwaii.' },
      { id: 'vancouver-city', name: 'Vancouver (city)' },
    ],
  },
  {
    id: 'on',
    name: 'Ontario',
    parks: [
      { id: 'georgian-bay', name: 'Georgian Bay Islands', parkSlug: 'georgian-bay-islands' },
      { id: 'bruce-peninsula', name: 'Bruce Peninsula', parkSlug: 'bruce-peninsula' },
      { id: 'thousand-islands', name: 'Thousand Islands', parkSlug: 'thousand-islands' },
      { id: 'point-pelee', name: 'Point Pelee', parkSlug: 'point-pelee' },
      { id: 'pukaskwa', name: 'Pukaskwa National Park', parkSlug: 'pukaskwa' },
    ],
  },
  {
    id: 'qc',
    name: 'Quebec',
    parks: [
      { id: 'forillon', name: 'Forillon National Park', parkSlug: 'forillon' },
      { id: 'la-mauricie', name: 'La Mauricie National Park', parkSlug: 'la-mauricie' },
      { id: 'mingan', name: 'Mingan Archipelago', parkSlug: 'mingan-archipelago' },
      { id: 'montreal-city', name: 'Montréal (city)' },
    ],
  },
  {
    id: 'mb',
    name: 'Manitoba',
    parks: [
      { id: 'riding-mountain', name: 'Riding Mountain', parkSlug: 'riding-mountain' },
      { id: 'wapusk', name: 'Wapusk National Park', parkSlug: 'wapusk', access: 'fly-in', how: 'There is no road to Churchill — fly or take the train, then visit the park with a licensed tour operator.' },
    ],
  },
  {
    id: 'sk',
    name: 'Saskatchewan',
    parks: [
      { id: 'prince-albert', name: 'Prince Albert National Park', parkSlug: 'prince-albert' },
      { id: 'grasslands', name: 'Grasslands National Park', parkSlug: 'grasslands' },
    ],
  },
  {
    id: 'ns',
    name: 'Nova Scotia',
    parks: [
      { id: 'cape-breton', name: 'Cape Breton Highlands', parkSlug: 'cape-breton-highlands' },
      { id: 'kejimkujik', name: 'Kejimkujik National Park', parkSlug: 'kejimkujik' },
    ],
  },
  {
    id: 'pe',
    name: 'Prince Edward Island',
    parks: [{ id: 'pei-national-park', name: 'Prince Edward Island National Park', parkSlug: 'prince-edward-island' }],
  },
  {
    id: 'yt',
    name: 'Yukon',
    parks: [
      { id: 'kluane', name: 'Kluane National Park', parkSlug: 'kluane' },
      { id: 'ivvavik', name: 'Ivvavik National Park', parkSlug: 'ivvavik', access: 'fly-in', how: 'There is no road — Ivvavik is reached by charter plane from Inuvik.' },
      { id: 'vuntut', name: 'Vuntut National Park', parkSlug: 'vuntut', access: 'fly-in', how: 'There is no road — Vuntut is reached by air or river from Old Crow.' },
    ],
  },
  {
    id: 'nl',
    name: 'Newfoundland & Labrador',
    parks: [
      { id: 'gros-morne', name: 'Gros Morne National Park', parkSlug: 'gros-morne' },
      { id: 'lanse-aux-meadows', name: "L'Anse aux Meadows (Historic Site)" },
      { id: 'torngat-mountains', name: 'Torngat Mountains', parkSlug: 'torngat-mountains', access: 'fly-in', how: 'There is no road — the Torngats are reached by charter flight or expedition cruise.' },
    ],
  },
  {
    id: 'nu',
    name: 'Nunavut',
    parks: [
      { id: 'auyuittuq', name: 'Auyuittuq National Park', parkSlug: 'auyuittuq', access: 'fly-in', how: 'Nunavut has no road connection — fly to Pangnirtung or Qikiqtarjuaq, then travel with local outfitters.' },
      { id: 'sirmilik', name: 'Sirmilik National Park', parkSlug: 'sirmilik', access: 'fly-in', how: 'Nunavut has no road connection — fly to Pond Inlet, then travel with local guides.' },
      { id: 'quttinirpaaq', name: 'Quttinirpaaq National Park', parkSlug: 'quttinirpaaq', access: 'fly-in', how: 'Reached only by charter flight to the airstrips at Tanquary Fiord or Lake Hazen.' },
    ],
  },
  {
    id: 'nb',
    name: 'New Brunswick',
    parks: [
      { id: 'fundy', name: 'Fundy National Park', parkSlug: 'fundy' },
      { id: 'kouchibouguac', name: 'Kouchibouguac National Park', parkSlug: 'kouchibouguac' },
    ],
  },
  {
    id: 'nt',
    name: 'Northwest Territories',
    parks: [
      { id: 'wood-buffalo', name: 'Wood Buffalo National Park', parkSlug: 'wood-buffalo' },
      { id: 'nahanni', name: 'Nahanni National Park Reserve', parkSlug: 'nahanni', access: 'fly-in', how: 'Reached only by floatplane or helicopter, most often from Fort Simpson.' },
      { id: 'naatsihchoh', name: 'Nááts’įhch’oh National Park Reserve', parkSlug: 'naatsihchoh', access: 'fly-in', how: 'Most visitors arrive by floatplane from communities in the NWT and Yukon.' },
      { id: 'tuktut-nogait', name: 'Tuktut Nogait National Park', parkSlug: 'tuktut-nogait', access: 'fly-in', how: 'Reached only by air — register with Parks Canada before you go.' },
      { id: 'aulavik', name: 'Aulavik National Park', parkSlug: 'aulavik', access: 'fly-in', how: 'A fly-in park on Banks Island — charter a plane to one of its landing sites.' },
    ],
  },
];


// Все города Канады, независимо от провинции — для поля "From City".
// provinceId здесь — провинция самого города (для группировки в
// выпадающем списке), а НЕ провинция выбранного парка.
export const TRIP_CITIES = [
  { id: 'edmonton', name: 'Edmonton', provinceId: 'ab' },
  { id: 'calgary', name: 'Calgary', provinceId: 'ab' },
  { id: 'banff-town', name: 'Banff', provinceId: 'ab' },
  { id: 'jasper-town', name: 'Jasper', provinceId: 'ab' },
  { id: 'canmore', name: 'Canmore', provinceId: 'ab' },
  { id: 'lethbridge', name: 'Lethbridge', provinceId: 'ab' },
  { id: 'red-deer', name: 'Red Deer', provinceId: 'ab' },

  { id: 'vancouver', name: 'Vancouver', provinceId: 'bc' },
  { id: 'victoria', name: 'Victoria', provinceId: 'bc' },
  { id: 'kelowna', name: 'Kelowna', provinceId: 'bc' },
  { id: 'whistler', name: 'Whistler', provinceId: 'bc' },
  { id: 'kamloops', name: 'Kamloops', provinceId: 'bc' },
  { id: 'nanaimo', name: 'Nanaimo', provinceId: 'bc' },

  { id: 'toronto', name: 'Toronto', provinceId: 'on' },
  { id: 'ottawa', name: 'Ottawa', provinceId: 'on' },
  { id: 'niagara-falls', name: 'Niagara Falls', provinceId: 'on' },
  { id: 'hamilton', name: 'Hamilton', provinceId: 'on' },
  { id: 'kingston', name: 'Kingston', provinceId: 'on' },
  { id: 'london-on', name: 'London', provinceId: 'on' },

  { id: 'montreal', name: 'Montreal', provinceId: 'qc' },
  { id: 'quebec-city', name: 'Quebec City', provinceId: 'qc' },
  { id: 'gatineau', name: 'Gatineau', provinceId: 'qc' },

  { id: 'winnipeg', name: 'Winnipeg', provinceId: 'mb' },
  { id: 'churchill', name: 'Churchill', provinceId: 'mb' },
  { id: 'brandon', name: 'Brandon', provinceId: 'mb' },

  { id: 'saskatoon', name: 'Saskatoon', provinceId: 'sk' },
  { id: 'regina', name: 'Regina', provinceId: 'sk' },
  { id: 'prince-albert-city', name: 'Prince Albert', provinceId: 'sk' },

  { id: 'halifax', name: 'Halifax', provinceId: 'ns' },
  { id: 'sydney-ns', name: 'Sydney', provinceId: 'ns' },

  { id: 'charlottetown', name: 'Charlottetown', provinceId: 'pe' },

  { id: 'whitehorse', name: 'Whitehorse', provinceId: 'yt' },
  { id: 'dawson-city', name: 'Dawson City', provinceId: 'yt' },
  { id: 'haines-junction', name: 'Haines Junction', provinceId: 'yt' },

  { id: 'st-johns', name: "St. John's", provinceId: 'nl' },
  { id: 'corner-brook', name: 'Corner Brook', provinceId: 'nl' },

  { id: 'iqaluit', name: 'Iqaluit', provinceId: 'nu' },

  { id: 'fredericton', name: 'Fredericton', provinceId: 'nb' },
  { id: 'moncton', name: 'Moncton', provinceId: 'nb' },
  { id: 'saint-john', name: 'Saint John', provinceId: 'nb' },

  { id: 'yellowknife', name: 'Yellowknife', provinceId: 'nt' },
];

// "провинция-парка|город|парк" → slug страницы /route/:slug
const TRIP_ROUTES = {
  'ab|calgary|banff': 'calgary-banff-lake-louise',
  'ab|banff-town|jasper': 'icefields-parkway',
  'ab|calgary|waterton': 'calgary-waterton-lakes',
  'bc|vancouver|pacific-rim': 'vancouver-whistler-island',
  'bc|kamloops|yoho': 'rogers-pass-yoho',
  'bc|vancouver|gulf-islands': 'vancouver-gulf-islands',
  'on|toronto|bruce-peninsula': 'toronto-bruce-peninsula',
  'qc|montreal|la-mauricie': 'montreal-la-mauricie',
  'ns|halifax|cape-breton': 'halifax-cabot-trail',
  'nb|moncton|fundy': 'moncton-fundy',
  'mb|winnipeg|riding-mountain': 'winnipeg-riding-mountain',
  'yt|whitehorse|kluane': 'whitehorse-kluane',
  'sk|saskatoon|prince-albert': 'saskatoon-prince-albert',
  'nl|corner-brook|gros-morne': 'corner-brook-gros-morne',
  'pe|charlottetown|pei-national-park': 'charlottetown-pei',
  'ab|edmonton|elk-island': 'edmonton-elk-island',
  'on|toronto|georgian-bay': 'toronto-georgian-bay',
  'on|kingston|thousand-islands': 'kingston-thousand-islands',
  'sk|regina|grasslands': 'regina-grasslands',
  'ns|halifax|kejimkujik': 'halifax-kejimkujik',
  'nb|moncton|kouchibouguac': 'moncton-kouchibouguac',
  'nl|corner-brook|lanse-aux-meadows': 'corner-brook-lanse-aux-meadows',
  'qc|quebec-city|forillon': 'quebec-city-forillon',
  'qc|quebec-city|mingan': 'quebec-city-mingan',
  'nt|yellowknife|wood-buffalo': 'yellowknife-wood-buffalo',
  'bc|calgary|kootenay': 'calgary-kootenay',
  'bc|edmonton|vancouver-city': 'edmonton-vancouver',
  'bc|calgary|vancouver-city': 'calgary-vancouver',
  'qc|toronto|montreal-city': 'toronto-montreal',
  'ab|edmonton|banff': 'edmonton-banff-lake-louise',
  'ab|jasper-town|banff': 'jasper-banff-lake-louise',
  'ab|canmore|banff': 'canmore-banff-lake-louise',
  'ab|lethbridge|banff': 'lethbridge-banff-lake-louise',
  'ab|red-deer|banff': 'red-deer-banff-lake-louise',
  'ab|edmonton|jasper': 'edmonton-jasper',
  'ab|calgary|jasper': 'calgary-jasper',
  'ab|canmore|jasper': 'canmore-jasper',
  'ab|lethbridge|jasper': 'lethbridge-jasper',
  'ab|red-deer|jasper': 'red-deer-jasper',
  'ab|edmonton|waterton': 'edmonton-waterton-lakes',
  'ab|banff-town|waterton': 'banff-waterton-lakes',
  'ab|jasper-town|waterton': 'jasper-waterton-lakes',
  'ab|canmore|waterton': 'canmore-waterton-lakes',
  'ab|lethbridge|waterton': 'lethbridge-waterton-lakes',
  'ab|red-deer|waterton': 'red-deer-waterton-lakes',
  'ab|calgary|elk-island': 'calgary-elk-island',
  'ab|banff-town|elk-island': 'banff-elk-island',
  'ab|jasper-town|elk-island': 'jasper-elk-island',
  'ab|canmore|elk-island': 'canmore-elk-island',
  'ab|lethbridge|elk-island': 'lethbridge-elk-island',
  'ab|red-deer|elk-island': 'red-deer-elk-island',
};

// Обратное направление: по slug маршрута заполнить форму
export const ROUTE_SELECTION = Object.fromEntries(
  Object.entries(TRIP_ROUTES).map(([key, slug]) => {
    const [province, city, park] = key.split('|');
    return [slug, { province, city, park }];
  }),
);

export function findTripRoute({ province, city, park }) {
  return TRIP_ROUTES[`${province}|${city}|${park}`] ?? null;
}

// Список готовых маршрутов для подсказки в форме. Строится из данных,
// чтобы не расходиться с TRIP_ROUTES при добавлении новых направлений.
export function listTripRoutes() {
  const byProvince = new Map();
  for (const key of Object.keys(TRIP_ROUTES)) {
    const [provinceId, cityId, parkId] = key.split('|');
    const province = TRIP_PROVINCES.find((p) => p.id === provinceId);
    const city = TRIP_CITIES.find((c) => c.id === cityId);
    const park = province?.parks.find((p) => p.id === parkId);
    if (!province || !city || !park) continue;
    if (!byProvince.has(province.name)) byProvince.set(province.name, []);
    byProvince.get(province.name).push(city.name + ' → ' + park.name);
  }
  return [...byProvince].map(([province, drives]) => ({ province, drives }));
}

export function hasRoutes(provinceId) {
  return Object.keys(TRIP_ROUTES).some((key) => key.startsWith(`${provinceId}|`));
}
