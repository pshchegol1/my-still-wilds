// Québec → Forillon — данные страницы
// /route/quebec-city-forillon
// Второй маршрут региона "Quebec" — тур по Гаспези.

import { QUEBEC_CITY_FORILLON_EXPLORER } from './explorer/quebec-city-forillon.js';

export const QUEBEC_CITY_FORILLON = {
  slug: 'quebec-city-forillon',
  name: 'Québec City to Forillon',
  region: 'Québec · Gaspésie',
  tag: "Mi'gma'gi · The End of the Appalachians",
  accentLevel: 'blue',
  backLabel: 'Back to Quebec',
  backHref: '/province/qc',
  heroImage: '/qc/parks/forillon.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: QUEBEC_CITY_FORILLON_EXPLORER,
  description:
    'Seven hundred kilometres along the south shore of the St. Lawrence to the place where the Appalachian mountains finally run out of continent and drop into the sea. Forillon is the end of the chain that starts in Alabama. The drive is Route 132 the whole way, and in Gaspésie the road is the destination as much as the park is.',

  badges: ['704 KM', '~10H30M DRIVE', 'TWO-DAY TRIP', 'WHALES FROM SHORE'],

  headlineStats: [
    { value: '704', unit: 'km', label: 'Québec City to Cap-aux-Os' },
    { value: '~10h30', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '244', unit: 'km²', label: 'Where the Appalachians End' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '704 km, Québec City to Cap-aux-Os via Rivière-du-Loup, Rimouski and Sainte-Anne-des-Monts' },
    { icon: 'time', label: 'Drive Time', value: '~10h30m non-stop · nobody should do this in a day. Break it at Rimouski or Sainte-Anne-des-Monts' },
    { icon: 'fuel', label: 'Fuel', value: 'Good through Rimouski. Past Sainte-Anne-des-Monts the villages get small and the gaps longer — top up when you pass a station, not when you need one' },
    { icon: 'cell', label: 'Cell Service', value: 'Fine along the populated shore · drops in the Chic-Chocs stretch and inside the park’s valleys' },
    { icon: 'road', label: 'Road Type', value: 'Autoroute 20, then Route 132 — two-lane, coastal and winding for the last four hundred kilometres' },
    { icon: 'winter', label: 'Winter Driving', value: 'Route 132 stays open but gets blowing snow off the gulf and closes in storms. Most park services run roughly June to October' },
  ],

  seasonalNotes: [
    {
      icon: '🗓️',
      title: 'This Is Not a Weekend',
      text: 'Ten and a half hours of driving each way, on a two-lane coastal road where you will want to stop constantly. Most people do the full Gaspésie loop over five to seven days and treat Forillon as one anchor of it. Trying to compress it into two days means driving in the dark and seeing nothing.',
    },
    {
      icon: '🐋',
      title: 'Whales From the Rocks, No Boat Needed',
      text: 'The tip of the peninsula sits where the St. Lawrence meets the gulf, and from the Cap-Gaspé cliffs you can watch whales without going out on the water. Mid-summer into September is the window, and the walk out to the lighthouse is the place to do it.',
    },
    {
      icon: '🌬️',
      title: 'The Weather Comes From the Gulf',
      text: 'Fog, wind and a ten-degree swing between a sheltered cove and an exposed headland are normal here. Bring layers you would consider excessive for the season — the drive leaves warm farmland and ends on a cold, windy cape.',
    },
  ],

  wildlifeSafety: {
    title: 'Black Bears, Moose and a Long Way Back',
    text: 'Forillon has black bears, moose and porcupines, and the Gaspé peninsula also holds the last caribou herd south of the St. Lawrence — in the Chic-Chocs, not the park. The practical risk on this trip, though, is the road: four hundred kilometres of winding two-lane with wildlife on it.',
    rules: [
      'Moose on Route 132 and the Chic-Chocs roads at dawn and dusk — slow down, this is the real danger',
      'Standard black bear rules on the Forillon trails: noise, distance, no food left out',
      'Cliff edges at Cap-Gaspé are undercut and unfenced in places; stay on the marked paths',
      'Seals haul out on the beaches — watch from a distance rather than approaching',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'A Park Built on Emptied Villages',
    text: 'The Gaspé peninsula is Mi’gma’gi, Mi’kmaq territory, and the Gespe’gewa’gi district gives the peninsula its name — "the end of the land". The park’s own founding is a harder story. Expropriations began in 1970; roughly 225 families were removed from Grande-Grave and the surrounding communities, and most of their buildings were burned after they left. In February 2011 the House of Commons unanimously passed a motion calling for an apology for the unconscionable manner in which they were treated. Parks Canada now issues free access passes to expropriated families and, since 2020, to their fourth, fifth and sixth generations.',
    nations: [
      "Mi'kmaq Nation (Gespe'gewa'gi district of Mi'gma'gi)",
      'Gesgapegiag, Gespeg and Listuguj Mi’gmaq communities',
      'Acadian and Québécois fishing communities of the peninsula',
    ],
    authenticStop: {
      name: 'Grande-Grave',
      text: 'The restored fishing hamlet inside the park, with the Hyman & Sons store kept as it was. It is the one place where the park tells the story of the people it removed in the buildings they actually used — the rest were burned.',
    },
    note: 'Both halves are true at once: Forillon protects an extraordinary coast, and it exists because families were ordered off land they had worked for generations. The descendants did not get an apology from the government itself — they got a unanimous motion in the Commons, forty years later, and a free pass to visit.',
  },

  stops: [
    {
      name: 'Québec City',
      km: 0,
      icon: '🏛️',
      text: 'Starting point. Cross to the south shore and settle in on Autoroute 20 — the fast part is the first two hours.',
    },
    {
      name: 'Rivière-du-Loup',
      km: 209,
      icon: '⛽',
      text: 'Where the autoroute gives out and Route 132 takes over. Full services and the ferry across to Saint-Siméon.',
    },
    {
      name: 'Rimouski',
      km: 316,
      icon: '🛏️',
      text: 'The largest city of the Bas-Saint-Laurent and the sensible place to break the drive. The Pointe-au-Père lighthouse and the Empress of Ireland museum are here.',
    },
    {
      name: 'Sainte-Anne-des-Monts',
      km: 498,
      icon: '⛰️',
      text: 'The gateway to the Chic-Chocs and Parc national de la Gaspésie, where the mountains come down to the road. Last town of real size before the tip.',
    },
    {
      name: 'Forillon — Cap-aux-Os',
      km: 704,
      image: '/qc/parks/forillon.png',
      text: 'The end of the Appalachians: cliffs, the Cap-Gaspé lighthouse walk, seals on the beaches and whales offshore.',
    },
  ],
};

export default QUEBEC_CITY_FORILLON;
