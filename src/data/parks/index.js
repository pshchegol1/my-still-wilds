import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { YOHO } from './yoho.js';
import { ELK_ISLAND } from './elk-island.js';
import { GROS_MORNE } from './gros-morne.js';
import { PACIFIC_RIM } from './pacific-rim.js';

const PARKS = {
  banff: BANFF,
  jasper: JASPER,
  yoho: YOHO,
  'elk-island': ELK_ISLAND,
  'gros-morne': GROS_MORNE,
  'pacific-rim': PACIFIC_RIM,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
