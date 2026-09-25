import { GRIZZLY_BEAR } from './grizzly-bear.js';
import { GRAY_WOLF } from './gray-wolf.js';
import { BLACK_BEAR } from './black-bear.js';

const ANIMALS = {
  'grizzly-bear': GRIZZLY_BEAR,
  'gray-wolf': GRAY_WOLF,
  'black-bear': BLACK_BEAR,
};

export function getAnimalDetail(slug) {
  if (!slug) return null;
  return ANIMALS[slug.toLowerCase()] ?? null;
}

export default ANIMALS;
