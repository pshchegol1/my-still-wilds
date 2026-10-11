import { VANCOUVER } from './vancouver.js';
import { EDMONTON } from './edmonton.js';
import { CALGARY } from './calgary.js';
import { TORONTO } from './toronto.js';
import { VICTORIA } from './victoria.js';
import { KELOWNA } from './kelowna.js';
import { WHISTLER } from './whistler.js';

const CITIES = {
  vancouver: VANCOUVER,
  edmonton: EDMONTON,
  calgary: CALGARY,
  toronto: TORONTO,
  victoria: VICTORIA,
  kelowna: KELOWNA,
  whistler: WHISTLER,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
