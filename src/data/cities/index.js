import { VANCOUVER } from './vancouver.js';
import { EDMONTON } from './edmonton.js';

const CITIES = {
  vancouver: VANCOUVER,
  edmonton: EDMONTON,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
