import { CALGARY_BANFF_LAKE_LOUISE } from './calgary-banff-lake-louise.js';
import { VANCOUVER_WHISTLER_ISLAND } from './vancouver-whistler-island.js';
import { ICEFIELDS_PARKWAY } from './icefields-parkway.js';
import { CALGARY_WATERTON_LAKES } from './calgary-waterton-lakes.js';
import { ROGERS_PASS_YOHO } from './rogers-pass-yoho.js';
import { VANCOUVER_GULF_ISLANDS } from './vancouver-gulf-islands.js';
import { TORONTO_BRUCE_PENINSULA } from './toronto-bruce-peninsula.js';
import { HALIFAX_CABOT_TRAIL } from './halifax-cabot-trail.js';
import { MONTREAL_LA_MAURICIE } from './montreal-la-mauricie.js';

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
};

export function getRouteDetail(slug) {
  if (!slug) return null;
  return ROUTES[slug.toLowerCase()] ?? null;
}

export default ROUTES;
