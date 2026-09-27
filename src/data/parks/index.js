import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { YOHO } from './yoho.js';
import { ELK_ISLAND } from './elk-island.js';

const PARKS = {
  banff: BANFF,
  jasper: JASPER,
  yoho: YOHO,
  'elk-island': ELK_ISLAND,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
