import { GRIZZLY_BEAR } from './grizzly-bear.js';
import { GRAY_WOLF } from './gray-wolf.js';
import { BLACK_BEAR } from './black-bear.js';
import { POLAR_BEAR } from './polar-bear.js';
import { COUGAR } from './cougar.js';
import { MOOSE } from './moose.js';
import { WOOD_BISON } from './wood-bison.js';
import { ORCA } from './orca.js';
import { COYOTE } from './coyote.js';
import { WOLVERINE } from './wolverine.js';
import { CANADA_LYNX } from './canada-lynx.js';
import { WILD_BOAR } from './wild-boar.js';
import { CARIBOU } from './caribou.js';
import { WHITE_TAILED_DEER } from './white-tailed-deer.js';
import { ELK } from './elk.js';
import { MUSK_OX } from './musk-ox.js';
import { MOUNTAIN_GOAT } from './mountain-goat.js';
import { BIGHORN_SHEEP } from './bighorn-sheep.js';
import { PRONGHORN } from './pronghorn.js';
import { HARBOUR_SEAL } from './harbour-seal.js';
import { HARP_SEAL } from './harp-seal.js';
import { ATLANTIC_WALRUS } from './atlantic-walrus.js';
import { BEAVER } from './beaver.js';
import { RIVER_OTTER } from './river-otter.js';
import { RED_FOX } from './red-fox.js';
import { ARCTIC_FOX } from './arctic-fox.js';
import { SNOWSHOE_HARE } from './snowshoe-hare.js';
import { PORCUPINE } from './porcupine.js';
import { GROUND_SQUIRREL } from './ground-squirrel.js';
import { RACCOON } from './raccoon.js';

const ANIMALS = {
  'grizzly-bear': GRIZZLY_BEAR,
  'gray-wolf': GRAY_WOLF,
  'black-bear': BLACK_BEAR,
  'polar-bear': POLAR_BEAR,
  cougar: COUGAR,
  moose: MOOSE,
  'wood-bison': WOOD_BISON,
  orca: ORCA,
  coyote: COYOTE,
  wolverine: WOLVERINE,
  'canada-lynx': CANADA_LYNX,
  'wild-boar': WILD_BOAR,
  caribou: CARIBOU,
  'white-tailed-deer': WHITE_TAILED_DEER,
  elk: ELK,
  'musk-ox': MUSK_OX,
  'mountain-goat': MOUNTAIN_GOAT,
  'bighorn-sheep': BIGHORN_SHEEP,
  pronghorn: PRONGHORN,
  'harbour-seal': HARBOUR_SEAL,
  'harp-seal': HARP_SEAL,
  'atlantic-walrus': ATLANTIC_WALRUS,
  beaver: BEAVER,
  'river-otter': RIVER_OTTER,
  'red-fox': RED_FOX,
  'arctic-fox': ARCTIC_FOX,
  'snowshoe-hare': SNOWSHOE_HARE,
  porcupine: PORCUPINE,
  'ground-squirrel': GROUND_SQUIRREL,
  raccoon: RACCOON,
};

export function getAnimalDetail(slug) {
  if (!slug) return null;
  return ANIMALS[slug.toLowerCase()] ?? null;
}

export default ANIMALS;
