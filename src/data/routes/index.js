import { CALGARY_BANFF_LAKE_LOUISE } from './calgary-banff-lake-louise.js';
import { VANCOUVER_WHISTLER_ISLAND } from './vancouver-whistler-island.js';
import { ICEFIELDS_PARKWAY } from './icefields-parkway.js';
import { CALGARY_WATERTON_LAKES } from './calgary-waterton-lakes.js';
import { ROGERS_PASS_YOHO } from './rogers-pass-yoho.js';
import { VANCOUVER_GULF_ISLANDS } from './vancouver-gulf-islands.js';
import { TORONTO_BRUCE_PENINSULA } from './toronto-bruce-peninsula.js';
import { HALIFAX_CABOT_TRAIL } from './halifax-cabot-trail.js';
import { MONTREAL_LA_MAURICIE } from './montreal-la-mauricie.js';
import { MONCTON_FUNDY } from './moncton-fundy.js';
import { WINNIPEG_RIDING_MOUNTAIN } from './winnipeg-riding-mountain.js';
import { WHITEHORSE_KLUANE } from './whitehorse-kluane.js';
import { SASKATOON_PRINCE_ALBERT } from './saskatoon-prince-albert.js';
import { CORNER_BROOK_GROS_MORNE } from './corner-brook-gros-morne.js';
import { CHARLOTTETOWN_PEI } from './charlottetown-pei.js';
import { EDMONTON_ELK_ISLAND } from './edmonton-elk-island.js';
import { TORONTO_GEORGIAN_BAY } from './toronto-georgian-bay.js';
import { KINGSTON_THOUSAND_ISLANDS } from './kingston-thousand-islands.js';
import { REGINA_GRASSLANDS } from './regina-grasslands.js';
import { HALIFAX_KEJIMKUJIK } from './halifax-kejimkujik.js';
import { MONCTON_KOUCHIBOUGUAC } from './moncton-kouchibouguac.js';
import { CORNER_BROOK_LANSE_AUX_MEADOWS } from './corner-brook-lanse-aux-meadows.js';
import { QUEBEC_CITY_FORILLON } from './quebec-city-forillon.js';
import { QUEBEC_CITY_MINGAN } from './quebec-city-mingan.js';
import { YELLOWKNIFE_WOOD_BUFFALO } from './yellowknife-wood-buffalo.js';

// Варианты подъезда (наследуют блоки про парк через variantOf)
import { EDMONTON_BANFF_LAKE_LOUISE, JASPER_BANFF_LAKE_LOUISE, CANMORE_BANFF_LAKE_LOUISE, LETHBRIDGE_BANFF_LAKE_LOUISE, RED_DEER_BANFF_LAKE_LOUISE } from './variants/ab-banff.js';
import { EDMONTON_JASPER, CALGARY_JASPER, CANMORE_JASPER, LETHBRIDGE_JASPER, RED_DEER_JASPER } from './variants/ab-jasper.js';
import { EDMONTON_WATERTON_LAKES, BANFF_WATERTON_LAKES, JASPER_WATERTON_LAKES, CANMORE_WATERTON_LAKES, LETHBRIDGE_WATERTON_LAKES, RED_DEER_WATERTON_LAKES } from './variants/ab-waterton.js';
import { CALGARY_ELK_ISLAND, BANFF_ELK_ISLAND, JASPER_ELK_ISLAND, CANMORE_ELK_ISLAND, LETHBRIDGE_ELK_ISLAND, RED_DEER_ELK_ISLAND } from './variants/ab-elk-island.js';

const ROUTES = {
  'calgary-banff-lake-louise': CALGARY_BANFF_LAKE_LOUISE,
  'vancouver-whistler-island': VANCOUVER_WHISTLER_ISLAND,
  'icefields-parkway': ICEFIELDS_PARKWAY,
  'calgary-waterton-lakes': CALGARY_WATERTON_LAKES,
  'rogers-pass-yoho': ROGERS_PASS_YOHO,
  'vancouver-gulf-islands': VANCOUVER_GULF_ISLANDS,
  'toronto-bruce-peninsula': TORONTO_BRUCE_PENINSULA,
  'halifax-cabot-trail': HALIFAX_CABOT_TRAIL,
  'montreal-la-mauricie': MONTREAL_LA_MAURICIE,
  'moncton-fundy': MONCTON_FUNDY,
  'winnipeg-riding-mountain': WINNIPEG_RIDING_MOUNTAIN,
  'whitehorse-kluane': WHITEHORSE_KLUANE,
  'saskatoon-prince-albert': SASKATOON_PRINCE_ALBERT,
  'corner-brook-gros-morne': CORNER_BROOK_GROS_MORNE,
  'charlottetown-pei': CHARLOTTETOWN_PEI,
  'edmonton-elk-island': EDMONTON_ELK_ISLAND,
  'toronto-georgian-bay': TORONTO_GEORGIAN_BAY,
  'kingston-thousand-islands': KINGSTON_THOUSAND_ISLANDS,
  'regina-grasslands': REGINA_GRASSLANDS,
  'halifax-kejimkujik': HALIFAX_KEJIMKUJIK,
  'moncton-kouchibouguac': MONCTON_KOUCHIBOUGUAC,
  'corner-brook-lanse-aux-meadows': CORNER_BROOK_LANSE_AUX_MEADOWS,
  'quebec-city-forillon': QUEBEC_CITY_FORILLON,
  'quebec-city-mingan': QUEBEC_CITY_MINGAN,
  'yellowknife-wood-buffalo': YELLOWKNIFE_WOOD_BUFFALO,

  'edmonton-banff-lake-louise': EDMONTON_BANFF_LAKE_LOUISE,
  'jasper-banff-lake-louise': JASPER_BANFF_LAKE_LOUISE,
  'canmore-banff-lake-louise': CANMORE_BANFF_LAKE_LOUISE,
  'lethbridge-banff-lake-louise': LETHBRIDGE_BANFF_LAKE_LOUISE,
  'red-deer-banff-lake-louise': RED_DEER_BANFF_LAKE_LOUISE,
  'edmonton-jasper': EDMONTON_JASPER,
  'calgary-jasper': CALGARY_JASPER,
  'canmore-jasper': CANMORE_JASPER,
  'lethbridge-jasper': LETHBRIDGE_JASPER,
  'red-deer-jasper': RED_DEER_JASPER,
  'edmonton-waterton-lakes': EDMONTON_WATERTON_LAKES,
  'banff-waterton-lakes': BANFF_WATERTON_LAKES,
  'jasper-waterton-lakes': JASPER_WATERTON_LAKES,
  'canmore-waterton-lakes': CANMORE_WATERTON_LAKES,
  'lethbridge-waterton-lakes': LETHBRIDGE_WATERTON_LAKES,
  'red-deer-waterton-lakes': RED_DEER_WATERTON_LAKES,
  'calgary-elk-island': CALGARY_ELK_ISLAND,
  'banff-elk-island': BANFF_ELK_ISLAND,
  'jasper-elk-island': JASPER_ELK_ISLAND,
  'canmore-elk-island': CANMORE_ELK_ISLAND,
  'lethbridge-elk-island': LETHBRIDGE_ELK_ISLAND,
  'red-deer-elk-island': RED_DEER_ELK_ISLAND,
};

// Поля, которые описывают сам парк, а не дорогу к нему: из Эдмонтона и
// из Калгари едешь в один и тот же Уотертон, и предупреждения про
// медведей и история земли там одинаковые. Поэтому вариант маршрута
// наследует их от основного, а своё хранит только про подъезд.
const INHERITED = [
  'region', 'tag', 'accentLevel', 'heroImage', 'heroVideo',
  'backLabel', 'backHref', 'seasonalNotes', 'wildlifeSafety', 'culture',
];

export function getRouteDetail(slug) {
  if (!slug) return null;
  const route = ROUTES[slug.toLowerCase()] ?? null;
  if (!route?.variantOf) return route;

  const base = ROUTES[route.variantOf.toLowerCase()];
  if (!base) return route;

  const merged = { ...route };
  for (const key of INHERITED) {
    if (merged[key] === undefined && base[key] !== undefined) merged[key] = base[key];
  }
  return merged;
}

export default ROUTES;
