// Kingston → Thousand Islands National Park — данные страницы
// /route/kingston-thousand-islands
// Второй маршрут региона "Ontario".

import { KINGSTON_THOUSAND_ISLANDS_EXPLORER } from './explorer/kingston-thousand-islands.js';

export const KINGSTON_THOUSAND_ISLANDS = {
  slug: 'kingston-thousand-islands',
  name: 'Kingston to the Thousand Islands',
  region: 'Ontario · St. Lawrence River',
  tag: 'Haudenosaunee · Mississauga Anishinaabe',
  accentLevel: 'blue',
  backLabel: 'Back to Ontario',
  backHref: '/province/on',
  heroImage: '/on/parks/thousand-islands.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: KINGSTON_THOUSAND_ISLANDS_EXPLORER,
  description:
    'An hour of river road where the St. Lawrence breaks into granite islands and the border runs between them. Canada’s smallest national park is scattered across more than twenty of those islands plus a few mainland properties — which means the drive gets you to the edge of it, and a boat gets you in.',

  badges: ['59 KM', '~45M DRIVE', 'BOAT FOR THE ISLANDS', 'SMALLEST NATIONAL PARK'],

  headlineStats: [
    { value: '59', unit: 'km', label: 'Kingston to Mallorytown Landing' },
    { value: '~45', unit: 'm', label: 'Drive Time Along the Parkway' },
    { value: '24.4', unit: 'km²', label: 'Canada’s Smallest National Park' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '59 km, Kingston to Mallorytown Landing via Gananoque and the 1000 Islands Parkway' },
    { icon: 'time', label: 'Drive Time', value: '~45m on the parkway · 35m if you stay on Hwy 401 and miss the point entirely' },
    { icon: 'fuel', label: 'Fuel', value: 'No concern at all — Kingston, Gananoque and the 401 service centres cover the whole distance' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole way. On the water you may pick up US carriers — watch for roaming charges' },
    { icon: 'road', label: 'Road Type', value: '1000 Islands Parkway, a two-lane scenic road beside the river, with Hwy 401 running parallel' },
    { icon: 'winter', label: 'Winter Driving', value: 'The parkway stays open, but the park’s islands and boat services shut down. Winter here is for the mainland trails only' },
  ],

  seasonalNotes: [
    {
      icon: '⛴️',
      title: 'The Park Is Islands — You Need a Boat',
      text: 'Mallorytown Landing is the mainland base with the visitor centre, trails and launch ramp. Everything else — the campsites, the granite shorelines, the views people come for — is reachable only by water taxi, tour boat or your own vessel. Driving here without a boat plan means seeing the park from the outside.',
    },
    {
      icon: '🛂',
      title: 'The Border Runs Through the Islands',
      text: 'Some islands are Canadian, some are American, and the line is not marked on the water. Crossing it in a private boat means reporting to customs on the other side. Commercial tour boats handle this; you do not, so know where you are.',
    },
    {
      icon: '🐍',
      title: 'Rattlesnakes Really Do Live Here',
      text: 'The eastern massasauga rattlesnake, Ontario’s only venomous snake, lives in this part of the St. Lawrence. Bites are rare and the snake is shy, but it is a real reason to stay on the trails and watch where you put your hands on warm rock.',
    },
  ],

  wildlifeSafety: {
    title: 'A Gentle Park With Two Sharp Edges',
    text: 'There are no bears or moose to worry about here. The hazards are smaller and easier to forget: a venomous snake that is genuinely present, and a big, busy river with freighter traffic.',
    rules: [
      'Give any massasauga rattlesnake a wide berth and report sightings — they are a species at risk, not a threat to manage',
      'Poison ivy is abundant on the mainland trails and on the islands',
      'The St. Lawrence carries ocean-going ships: in a small boat, stay out of the shipping channel and respect the wake',
      'Ticks are present through spring and summer — check after hiking at Mallorytown Landing',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Tsitkawehnoton — The Many Islands',
    text: 'Parks Canada describes this park as the traditional territory of two distinct peoples: the Haudenosaunee, the Six Nations Confederacy, who call the area Tsitkawehnoton, "The Many Islands", and the Mississauga Anishinaabe, whose name for the river is Gicchi siibi, "The Great River". Both names describe the place by what it actually is, which is more than the tourist name does. The shoreline you drive was later reshaped by United Empire Loyalist settlement after 1783, and Kingston, where you start, briefly served as the capital of the Province of Canada in the 1840s.',
    nations: [
      'Haudenosaunee (Six Nations Confederacy)',
      'Mississauga Anishinaabe',
      'Mohawks of Akwesasne',
    ],
    authenticStop: {
      name: 'Smoky Fire Trail, Mallorytown Landing',
      text: 'A short trail at the mainland visitor centre, named for a ceremony held there with the Mohawks of Akwesasne in 2007. The neighbouring Six Nations Trail has been closed by storm damage at times, so check what is open when you arrive.',
    },
    note: 'The "Thousand Islands" name sells boat tours and salad dressing. The Haudenosaunee and Anishinaabe names for the same water are older and more accurate, and Parks Canada prints both in its own trail brochure — which is further than most parks go.',
  },

  stops: [
    {
      name: 'Kingston',
      km: 0,
      icon: '🏛️',
      text: 'Starting point, where Lake Ontario becomes the St. Lawrence. Limestone buildings, Fort Henry above the harbour, and the boat tours that run out into the islands.',
    },
    {
      name: 'Gananoque',
      km: 26,
      icon: '⛴️',
      text: 'The town that calls itself the gateway to the islands, and the main departure point for cruises. Smaller, slower and the practical place to get on the water.',
    },
    {
      name: 'Mallorytown Landing',
      km: 59,
      image: '/on/parks/thousand-islands.png',
      text: 'The park’s mainland base: visitor centre, trails, launch ramp and oTENTik cabins. From here the islands are a boat ride away.',
    },
  ],
};

export default KINGSTON_THOUSAND_ISLANDS;
