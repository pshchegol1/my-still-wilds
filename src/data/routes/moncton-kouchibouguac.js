// Moncton → Kouchibouguac National Park — данные страницы
// /route/moncton-kouchibouguac
// Второй маршрут региона "New Brunswick".

import { MONCTON_KOUCHIBOUGUAC_EXPLORER } from './explorer/moncton-kouchibouguac.js';

export const MONCTON_KOUCHIBOUGUAC = {
  slug: 'moncton-kouchibouguac',
  name: 'Moncton to Kouchibouguac',
  region: 'New Brunswick · Acadian Coast',
  tag: "Mi'kma'ki · Acadian Shore",
  accentLevel: 'terracotta',
  backLabel: 'Back to New Brunswick',
  backHref: '/province/nb',
  heroImage: '/nb/parks/kouchibouguac.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: MONCTON_KOUCHIBOUGUAC_EXPLORER,
  description:
    'North from Moncton along the warm side of New Brunswick, where the Northumberland Strait is shallow enough to give Canada some of its warmest saltwater and the road signs switch to French. Kouchibouguac is barrier dunes, lagoons and salt marsh — and a park with one of the most painful founding stories in the Canadian system.',

  badges: ['115 KM', '~1H35M DRIVE', 'WARM SALTWATER SWIMMING', 'CONTESTED GROUND'],

  headlineStats: [
    { value: '115', unit: 'km', label: 'Moncton to the Park Entrance' },
    { value: '~1h35', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '239', unit: 'km²', label: 'Of Dunes, Lagoons and Salt Marsh' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '115 km, Moncton to the Kouchibouguac entrance via Shediac and Bouctouche' },
    { icon: 'time', label: 'Drive Time', value: '~1h35m non-stop · a morning, and the coastal villages are worth the stops' },
    { icon: 'fuel', label: 'Fuel', value: 'Straightforward — Shediac, Bouctouche and Richibucto are all on the way with full services' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along the coast and in the park’s main areas' },
    { icon: 'road', label: 'Road Type', value: 'Route 15 then Route 11, with Route 134 as the slower coastal alternative · all paved' },
    { icon: 'winter', label: 'Winter Driving', value: 'Roads stay open; the park switches to winter use with most services closed from October' },
  ],

  seasonalNotes: [
    {
      icon: '🏖️',
      title: 'The Water Really Is Warm',
      text: 'The Northumberland Strait is shallow and sheltered, and by August it reaches temperatures you simply do not get elsewhere in Atlantic Canada. Kellys Beach, reached by a long boardwalk over the lagoon, is the one everybody goes to — and in July and August the parking fills early.',
    },
    {
      icon: '🪰',
      title: 'Salt Marsh Means Insects',
      text: 'Lagoons and marsh are perfect mosquito habitat, and the inland trails in June and July can be rough. The beach and the boardwalk get a sea breeze; the forest behind them does not.',
    },
    {
      icon: '🐦',
      title: 'Parts of the Beach Close for Birds',
      text: 'The dunes are a major piping plover nesting site and one of the largest tern colonies on the coast. Sections of beach are roped off through the nesting season, and the closures are not negotiable — these birds nest on open sand with nothing to hide behind.',
    },
  ],

  wildlifeSafety: {
    title: 'A Gentle Park, With Water to Respect',
    text: 'There is nothing here that will hurt you on a trail. The risks are the ordinary coastal ones people underestimate: currents in the lagoon channels, sun with no shade on the dunes, and ticks inland.',
    rules: [
      'The channels between the barrier islands run fast on a changing tide — swim at the supervised beach, not in the gaps',
      'No shade on the dunes or the boardwalk; sunburn is the most common thing that spoils a visit here',
      'Blacklegged ticks are established in New Brunswick — check after walking the inland trails',
      'Stay off the fenced dune and nesting areas entirely, even when they look empty',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'The Largest Forced Removal in the National Park System',
    text: 'This is Mi’kma’ki, and the park’s name is Mi’kmaw — Kouchibouguac, "river of the long tides". It is also a park built on top of living communities. Between 1969 and 1971 New Brunswick expropriated the land for the park; accounts differ on scale, but it displaced well over two hundred families, overwhelmingly Acadian, and the historian Ronald Rudin has called it the single largest case of forced removal in the history of the Canadian national park system. Jackie Vautour refused to go. His house was bulldozed in 1976, he returned in 1978 to squat on his land, and he lived there without electricity until his death in 2021.',
    nations: [
      "Mi'kmaq Nation (Sikniktuk district of Mi'kma'ki)",
      'Elsipogtog First Nation',
      'Acadian communities of Kent County',
    ],
    authenticStop: {
      name: 'The Expropriation Exhibit',
      text: 'Parks Canada now interprets the expropriation on site rather than leaving it out, and former residents and their descendants have recorded their own accounts of what happened. Ask about it at the visitor centre — it is not hidden, but it is also not the first thing you are shown.',
    },
    note: 'The legal aftermath is still unresolved and genuinely contested. The Vautour family’s claims rest on Métis identity, which the courts have rejected, and Mi’kmaq chiefs in New Brunswick have stated that they hold title to this land and that those rights do not extend to Acadian-Métis claimants. A class action over the 1969 expropriation remains before the courts.',
  },

  stops: [
    {
      name: 'Moncton',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Head east on Route 15 toward the strait — the shore changes character within half an hour.',
    },
    {
      name: 'Shediac',
      km: 26,
      icon: '🦞',
      text: 'The self-declared lobster capital of the world, with the giant lobster sculpture to prove it. Parlee Beach here is the busiest in the province.',
    },
    {
      name: 'Bouctouche',
      km: 61,
      icon: '🌾',
      text: 'An Acadian town with La Dune de Bouctouche — a twelve-kilometre sand spit with its own long boardwalk, and a good preview of what the park does at larger scale.',
    },
    {
      name: 'Kouchibouguac National Park',
      km: 115,
      image: '/nb/parks/kouchibouguac.png',
      text: 'Barrier islands, warm lagoons and salt marsh. Kellys Beach and its boardwalk are the centrepiece; the inland trails and rivers are quieter.',
    },
  ],
};

export default MONCTON_KOUCHIBOUGUAC;
