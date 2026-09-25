import { GRIZZLY_BEAR } from './grizzly-bear.js';
import { GRAY_WOLF } from './gray-wolf.js';

const ANIMALS = {
  'grizzly-bear': GRIZZLY_BEAR,
  'gray-wolf': GRAY_WOLF,
};

export function getAnimalDetail(slug) {
  if (!slug) return null;
  return ANIMALS[slug.toLowerCase()] ?? null;
}

export default ANIMALS;
