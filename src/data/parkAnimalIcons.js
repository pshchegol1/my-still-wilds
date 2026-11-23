// Ключ иконки животного (см. GLYPH_FILES в components/WildlifeIcon.jsx) по
// названию из списка wildlife парка. Только виды, для которых есть своя
// иконка в public/icons/wildlife (чёрному медведю дана иконка гризли);
// остальным (снежный баран, бобёр и др.) иконка не подставляется —
// карточка получит лапу.
const PARK_ANIMAL_ICON_KEYS = {
  'Grizzly Bear': 'grizzly',
  // отдельной иконки чёрного медведя нет — по просьбе используется иконка гризли
  'Black Bear': 'grizzly',
  'Haida Gwaii Black Bear': 'grizzly',
  'Gray Wolf': 'wolf',
  'Grey Wolf': 'wolf',
  'Arctic Wolf': 'wolf',
  Elk: 'elk',
  'Elk / Wapiti': 'elk',
  Caribou: 'caribou',
  'Peary Caribou': 'caribou',
  'Mountain Caribou': 'caribou',
  'Woodland Caribou': 'caribou',
  Moose: 'moose',
  'Bald Eagle': 'eagle',
  'Golden Eagle': 'eagle',
  Cougar: 'cougar',
  'Mountain Lion': 'cougar',
  'Plains Bison': 'bison',
  'Wood Bison': 'bison',
  'White-tailed Deer': 'white-tail-deer',
  'River Otter': 'river-otter',
  'Harbour Seal': 'harbour-seal',
  'Grey Seal': 'harbour-seal',
  'Snowy Owl': 'snowy-owl',
  Orca: 'orca',
  'Killer Whale': 'orca',
  Beluga: 'beluga-whale',
  'Pilot Whale': 'pilot-whale',
  'Mountain Goat': 'mountain-goat',
  'Bighorn Sheep': 'bighorn-sheep',
};

export function parkAnimalIconKey(name) {
  return PARK_ANIMAL_ICON_KEYS[name] ?? null;
}
