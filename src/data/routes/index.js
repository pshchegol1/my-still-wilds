import { CALGARY_BANFF_LAKE_LOUISE } from './calgary-banff-lake-louise.js';
import { VANCOUVER_WHISTLER_ISLAND } from './vancouver-whistler-island.js';

const ROUTES = {
  'calgary-banff-lake-louise': CALGARY_BANFF_LAKE_LOUISE,
  'vancouver-whistler-island': VANCOUVER_WHISTLER_ISLAND,
};

export function getRouteDetail(slug) {
  if (!slug) return null;
  return ROUTES[slug.toLowerCase()] ?? null;
}

export default ROUTES;
