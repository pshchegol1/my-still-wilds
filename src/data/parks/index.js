import { BANFF } from './banff.js';

const PARKS = {
  banff: BANFF,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
