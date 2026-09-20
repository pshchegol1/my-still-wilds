import { GRIZZLY_BEAR } from './grizzly-bear.js';

const ANIMALS = {
  'grizzly-bear': GRIZZLY_BEAR,
};

export function getAnimalDetail(slug) {
  if (!slug) return null;
  return ANIMALS[slug.toLowerCase()] ?? null;
}

export default ANIMALS;
