import { VANCOUVER } from './vancouver.js';
import { EDMONTON } from './edmonton.js';
import { CALGARY } from './calgary.js';
import { TORONTO } from './toronto.js';
import { VICTORIA } from './victoria.js';
import { KELOWNA } from './kelowna.js';
import { WHISTLER } from './whistler.js';
import { KAMLOOPS } from './kamloops.js';
import { SURREY } from './surrey.js';
import { ABBOTSFORD } from './abbotsford.js';
import { NANAIMO } from './nanaimo.js';
import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { CANMORE } from './canmore.js';
import { LETHBRIDGE } from './lethbridge.js';
import { RED_DEER } from './red-deer.js';

const CITIES = {
  vancouver: VANCOUVER,
  edmonton: EDMONTON,
  calgary: CALGARY,
  toronto: TORONTO,
  victoria: VICTORIA,
  kelowna: KELOWNA,
  whistler: WHISTLER,
  kamloops: KAMLOOPS,
  surrey: SURREY,
  abbotsford: ABBOTSFORD,
  nanaimo: NANAIMO,
  banff: BANFF,
  jasper: JASPER,
  canmore: CANMORE,
  lethbridge: LETHBRIDGE,
  'red-deer': RED_DEER,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
