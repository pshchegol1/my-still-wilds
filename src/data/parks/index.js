import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { YOHO } from './yoho.js';

const PARKS = {
  banff: BANFF,
  jasper: JASPER,
  yoho: YOHO,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
