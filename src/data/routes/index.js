import { CALGARY_BANFF_LAKE_LOUISE } from './calgary-banff-lake-louise.js';

const ROUTES = {
  'calgary-banff-lake-louise': CALGARY_BANFF_LAKE_LOUISE,
};

export function getRouteDetail(slug) {
  if (!slug) return null;
  return ROUTES[slug.toLowerCase()] ?? null;
}

export default ROUTES;
