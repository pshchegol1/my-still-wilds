import { VANCOUVER } from './vancouver.js';

const CITIES = {
  vancouver: VANCOUVER,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
