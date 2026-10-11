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

export const TRIP_PROVINCES = [
  {
    id: 'ab',
    name: 'Alberta',
    parks: [
      { id: 'banff', name: 'Banff & Lake Louise' },
      { id: 'jasper', name: 'Jasper National Park' },
      { id: 'waterton', name: 'Waterton Lakes' },
      { id: 'elk-island', name: 'Elk Island National Park' },
    ],
  },
  {
    id: 'bc',
    name: 'British Columbia',
    parks: [
      { id: 'pacific-rim', name: 'Whistler & Pacific Rim' },
      { id: 'yoho', name: 'Yoho National Park' },
      { id: 'gulf-islands', name: 'Gulf Islands' },
    ],
  },
  {
    id: 'on',
    name: 'Ontario',
    parks: [
      { id: 'georgian-bay', name: 'Georgian Bay Islands' },
      { id: 'bruce-peninsula', name: 'Bruce Peninsula' },
      { id: 'thousand-islands', name: 'Thousand Islands' },
    ],
  },
  {
    id: 'qc',
    name: 'Quebec',
    parks: [
      { id: 'forillon', name: 'Forillon National Park' },
      { id: 'la-mauricie', name: 'La Mauricie National Park' },
      { id: 'mingan', name: 'Mingan Archipelago' },
    ],
  },
  {
    id: 'mb',
    name: 'Manitoba',
    parks: [
      { id: 'wapusk', name: 'Wapusk National Park' },
      { id: 'riding-mountain', name: 'Riding Mountain' },
      { id: 'elk-island-mb', name: 'Elk Island' },
    ],
  },
  {
    id: 'sk',
    name: 'Saskatchewan',
    parks: [
      { id: 'prince-albert', name: 'Prince Albert National Park' },
      { id: 'grasslands', name: 'Grasslands National Park' },
    ],
  },
  {
    id: 'ns',
    name: 'Nova Scotia',
    parks: [
      { id: 'cape-breton', name: 'Cape Breton Highlands' },
      { id: 'kejimkujik', name: 'Kejimkujik National Park' },
    ],
  },
  {
    id: 'pe',
    name: 'Prince Edward Island',
    parks: [{ id: 'pei-national-park', name: 'Prince Edward Island National Park' }],
  },
  {
    id: 'yt',
    name: 'Yukon',
    parks: [
      { id: 'kluane', name: 'Kluane National Park' },
      { id: 'ivvavik', name: 'Ivvavik National Park' },
      { id: 'vuntut', name: 'Vuntut National Park' },
    ],
  },
  {
    id: 'nl',
    name: 'Newfoundland & Labrador',
    parks: [
      { id: 'gros-morne', name: 'Gros Morne National Park' },
      { id: 'lanse-aux-meadows', name: "L'Anse Aux Meadows" },
      { id: 'torngat-mountains', name: 'Torngat Mountains' },
    ],
  },
  {
    id: 'nu',
    name: 'Nunavut',
    parks: [
      { id: 'auyuittuq', name: 'Auyuittuq National Park' },
      { id: 'sirmilik', name: 'Sirmilik National Park' },
      { id: 'quttinirpaaq', name: 'Quttinirpaaq National Park' },
    ],
  },
  {
    id: 'nb',
    name: 'New Brunswick',
    parks: [
      { id: 'fundy', name: 'Fundy National Park' },
      { id: 'hopewell-rocks', name: 'Hopewell Rocks' },
      { id: 'kouchibouguac', name: 'Kouchibouguac National Park' },
    ],
  },
  {
    id: 'nt',
    name: 'Northwest Territories',
    parks: [
      { id: 'wood-buffalo', name: 'Wood Buffalo National Park' },
      { id: 'naianni', name: 'Naianni National Park' },
      { id: 'tuktut-nogait', name: 'Tuktut Nogait National Park' },
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

export function hasRoutes(provinceId) {
  return Object.keys(TRIP_ROUTES).some((key) => key.startsWith(`${provinceId}|`));
}
