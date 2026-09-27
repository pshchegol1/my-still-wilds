import { VANCOUVER } from './vancouver.js';
import { EDMONTON } from './edmonton.js';
import { CALGARY } from './calgary.js';

const CITIES = {
  vancouver: VANCOUVER,
  edmonton: EDMONTON,
  calgary: CALGARY,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
