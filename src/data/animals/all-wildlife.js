export const WILDLIFE_CATEGORIES = {
  dangerous: {
    label: 'Dangerous',
    tag: 'Minimum 100 Metres Distance',
    level: 'danger',
    animals: [
      { name: 'Grizzly Bear', image: '/wildlife/grizzly-bear.jpg', location: 'BC · Alberta · Yukon · NWT', slug: 'grizzly-bear' },
      { name: 'Black Bear', image: '/wildlife/Black Bear/black-bear-card.png', location: 'All provinces', slug: 'black-bear' },
      { name: 'Polar Bear', image: '/wildlife/Polar Bear/Rectangle 179.png', location: 'Churchill · Nunavut · NWT', slug: 'polar-bear' },
      { name: 'Cougar', image: '/wildlife/cougar.jpg', location: 'BC · Alberta · Vancouver Island', slug: 'cougar' },
    ],
  },
  caution: {
    label: 'Caution',
    tag: 'Keep Safe Distance',
    level: 'caution',
    animals: [
      { name: 'Gray Wolf', image: '/wildlife/grey-wolf.jpg', location: 'BC · Alberta · Yukon · NWT', slug: 'gray-wolf' },
      { name: 'Moose', image: '/wildlife/moose.jpg', location: 'All provinces except PEI', slug: 'moose' },
      { name: 'Wood Bison', image: '/wildlife/Bison/Rectangle 188.png', location: 'NWT · Alberta · Yukon', slug: 'wood-bison' },
      { name: 'Orca', image: '/wildlife/ORCA/ORCA.png', location: 'BC · Pacific Coast', slug: 'orca' },
      { name: 'Coyote', image: '/wildlife/CAYOTE/Rectangle 191.png', location: 'All provinces', slug: 'coyote' },
      { name: 'Wolverine', image: '/wildlife/Wolverine/Rectangle 193.png', location: 'Yukon · NWT · BC', slug: 'wolverine' },
      { name: 'Canada Lynx', image: '/wildlife/Canada Lynx/Rectangle 195.png', location: 'Boreal forest', slug: 'canada-lynx' },
      { name: 'Wild Boar', image: '/wildlife/Wild Boar/Rectangle 197.png', location: 'Saskatchewan · Alberta', slug: 'wild-boar' },
    ],
  },
  largeMammals: {
    label: 'Large Mammals',
    tag: 'Safe to Observe',
    level: 'safe',
    animals: [
      { name: 'Caribou', image: '/wildlife/Caribou/Rectangle 202.png', location: 'BC · Alberta · Yukon · NWT', slug: 'caribou' },
      { name: 'White-Tailed Deer', image: '/wildlife/White-tail Deer/Rectangle 203.png', location: 'Ontario · Quebec · Atlantic', slug: 'white-tailed-deer' },
      // Чернохвостый олень, Banff NP, Альберта (Jakub Fryš, CC BY-SA 4.0).
      // Ареал — BC, Альберта, Саскачеван, юг Юкона (WAFWA, BC gov, Yukon.ca).
      { name: 'Mule Deer', image: '/wildlife/Mule Deer/muledeer-card.jpg', location: 'Alberta · BC · Saskatchewan', slug: 'mule-deer' },
      { name: 'Elk', image: '/wildlife/Elk/Rectangle 204.png', location: 'BC · Alberta · Manitoba', slug: 'elk' },
      { name: 'Musk Ox', image: '/wildlife/Muskox/Rectangle 205.png', location: 'Nunavut · NWT', slug: 'musk-ox' },
      { name: 'Mountain Goat', image: '/wildlife/Mountain Goat/Rectangle 207.png', location: 'BC · Alberta · Yukon', slug: 'mountain-goat' },
      { name: 'Bighorn Sheep', image: '/wildlife/Bighorn Sheep/Rectangle 209.png', location: 'BC · Alberta · Saskatchewan', slug: 'bighorn-sheep' },
      { name: 'Pronghorn', image: '/wildlife/Pronghorn/Rectangle 211.png', location: 'BC · Alberta · Saskatchewan', slug: 'pronghorn' },
      { name: 'Harbour Seal', image: '/wildlife/Harbour Seal/Rectangle 213.png', location: 'BC · Atlantic Coast', slug: 'harbour-seal' },
      { name: 'Harp Seal', image: '/wildlife/Harp Sea/Rectangle 215.png', location: 'Newfoundland · Gulf of St. Lawrence', slug: 'harp-seal' },
      { name: 'Atlantic Walrus', image: '/wildlife/Atlantic Walrus/Rectangle 217.png', location: 'Nunavut · Hudson Bay', slug: 'atlantic-walrus' },
    ],
  },
  smallMammals: {
    label: 'Small Mammals',
    tag: 'Safe to Observe',
    level: 'safe',
    animals: [
      { name: 'Beaver', image: '/wildlife/Beaver/Rectangle 219.png', location: 'National animal of Canada', slug: 'beaver' },
      { name: 'River Otter', image: '/wildlife/River Otter/Rectangle 221.png', location: 'BC · Ontario · Atlantic', slug: 'river-otter' },
      { name: 'Red Fox', image: '/wildlife/Red Fox/Rectangle 223.png', location: 'All provinces', slug: 'red-fox' },
      { name: 'Arctic Fox', image: '/wildlife/Arctic Fox/Rectangle 225.png', location: 'Nunavut · NWT · Yukon', slug: 'arctic-fox' },
      { name: 'Snowshoe Hare', image: '/wildlife/Snowshoe Hare/Rectangle 227.png', location: 'Boreal forest', slug: 'snowshoe-hare' },
      { name: 'Porcupine', image: '/wildlife/Porcupine/Rectangle 229.png', location: 'All forested provinces', slug: 'porcupine' },
      // Картинка карточки — колумбийский суслик, Banff NP (Charles J. Sharp,
      // CC BY-SA 4.0). Раньше здесь стояла картинка белки (Rectangle 231.png),
      // она перенесена в карточку Red Squirrel ниже.
      { name: 'Ground Squirrel', image: '/wildlife/Ground Squirrel/gsq-card.jpg', location: 'Yukon · NWT · Prairies', slug: 'ground-squirrel' },
      // ВНИМАНИЕ: на Rectangle 231.png — евразийская обыкновенная белка
      // (кисточки на ушах), в Канаде её нет; канадская — американская
      // красная белка (Tamiasciurus hudsonicus).
      { name: 'Red Squirrel', image: '/wildlife/Red Squirrel/Rectangle 231.png', location: 'Forests across Canada', slug: 'red-squirrel' },
      // Восточный бурундук, восточное Онтарио (Paul Harrison, CC BY-SA 4.0).
      { name: 'Chipmunk', image: '/wildlife/Chipmunk/chipmunk-card.jpg', location: 'Southern & boreal forests', slug: 'chipmunk' },
      { name: 'Raccoon', image: '/wildlife/Raccoon/Rectangle 233.png', location: 'Ontario · Quebec · BC', slug: 'raccoon' },
      { name: 'Striped Skunk', image: '/wildlife/Striped Skunk/Rectangle 235.png', location: 'Southern Canada', slug: 'striped-skunk' },
      { name: 'Muskrat', image: '/wildlife/Muskrat/Rectangle 237.png', location: 'Wetlands — all Canada', slug: 'muskrat' },
    ],
  },
  marineLift: {
    label: 'Marine Life',
    tag: 'Safe to Observe',
    level: 'safe',
    animals: [
      { name: 'Humpback Whale', image: '/wildlife/Humpback Whale/Rectangle 239.png', location: 'BC · Nova Scotia · NL', slug: 'humpback-whale' },
      { name: 'Beluga Whale', image: '/wildlife/Beluga Whale/Rectangle 241.png', location: 'Churchill · St. Lawrence', slug: 'beluga-whale' },
      { name: 'Narwhal', image: '/wildlife/Narwhal/Rectangle 243.png', location: 'Nunavut · Arctic', slug: 'narwhal' },
      { name: 'Blue Whale', image: '/wildlife/Blue Whale/Rectangle 250.png', location: 'St. Lawrence · Atlantic', slug: 'blue-whale' },
      { name: 'Bowhead Whale', image: '/wildlife/Bowhead Whale/Rectangle 245.png', location: 'Nunavut · Hudson Bay', slug: 'bowhead-whale' },
    ],
  },
  birds: {
    label: 'Birds',
    tag: 'Safe to Observe',
    level: 'safe',
    animals: [
      { name: 'Bald Eagle', image: '/wildlife/Bald Eagle/Rectangle 251.png', location: 'BC · Atlantic · Prairies', slug: 'bald-eagle' },
      { name: 'Peregrine Falcon', image: '/wildlife/Peregrine Falcon/Rectangle 261.png', location: 'All provinces', slug: 'peregrine-falcon' },
      { name: 'Common Loon', image: '/wildlife/Common Loon/Rectangle 255.png', location: 'Lakes', slug: 'common-loon' },
      { name: 'Atlantic Puffin', image: '/wildlife/Atlantic Puffin/Rectangle 257.png', location: 'Newfoundland · Nova Scotia', slug: 'atlantic-puffin' },
      { name: 'Whooping Crane', image: '/wildlife/Whooping Crane/Rectangle 259.png', location: 'Wood Buffalo NP · Saskatchewan', slug: 'whooping-crane' },
      { name: 'Canada Goose', image: '/wildlife/Canada Goose/Rectangle 253.png', location: 'All provinces', slug: 'canada-goose' },
      { name: 'Snowy Owl', image: '/wildlife/Snowy Owl/Rectangle 252.png', location: 'Nunavut · Prairie provinces', slug: 'snowy-owl' },
      // Голубая сойка, Algonquin Provincial Park, Онтарио (Mdf, CC BY-SA 3.0).
      // Ареал — Hinterland Who's Who: от центральной Альберты до Атлантики.
      { name: 'Blue Jay', image: '/wildlife/Blue Jay/bluejay-card.jpg', location: 'Alberta to the Atlantic', slug: 'blue-jay' },
      // Черноклювая сорока, Lake Louise, Альберта (Charles J. Sharp, CC BY-SA 4.0).
      // Ареал — от юга Юкона до запада Манитобы (The Canadian Encyclopedia).
      { name: 'Black-billed Magpie', image: '/wildlife/Black-billed Magpie/magpie-card.jpg', location: 'Alberta · BC · Saskatchewan', slug: 'black-billed-magpie' },
    ],
  },
};

export default WILDLIFE_CATEGORIES;
