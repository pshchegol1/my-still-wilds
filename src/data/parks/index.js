import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';

const PARKS = {
  banff: BANFF,
  jasper: JASPER,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
