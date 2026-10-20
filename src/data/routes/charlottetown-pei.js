// Charlottetown → Prince Edward Island National Park — данные страницы
// /route/charlottetown-pei
// Первый маршрут региона "Prince Edward Island".

import { CHARLOTTETOWN_PEI_EXPLORER } from './explorer/charlottetown-pei.js';

export const CHARLOTTETOWN_PEI = {
  slug: 'charlottetown-pei',
  name: 'Charlottetown to the North Shore',
  region: 'Prince Edward Island · Gulf Shore',
  tag: "Epekwitk · Mi'kma'ki",
  accentLevel: 'terracotta',
  backLabel: 'Back to Prince Edward Island',
  backHref: '/province/pe',
  heroImage: '/pe/parks/pei-national-park.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: CHARLOTTETOWN_PEI_EXPLORER,
  description:
    'The shortest national park drive in Canada — under forty minutes of actual distance from the capital to the dunes, if you take it straight. Nobody takes it straight. The Gulf Shore Parkway runs along the red cliffs between beaches, and the island is small enough that the drive is the point rather than the transfer.',

  badges: ['64 KM', '~1H20M DRIVE', 'RED SAND DUNES', 'PARKWAY IN TWO HALVES'],

  headlineStats: [
    { value: '64', unit: 'km', label: 'Charlottetown to Cavendish, Via the Shore' },
    { value: '~1h20', unit: 'm', label: 'Drive Time Including the Parkway' },
    { value: '3', unit: '', label: 'Separate Sections of the National Park' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '64 km, Charlottetown to Cavendish along the shore via Dalvay, Brackley and North Rustico' },
    { icon: 'time', label: 'Drive Time', value: '~1h20m the scenic way · 35 minutes if you cut straight across on Route 2 and Route 13' },
    { icon: 'fuel', label: 'Fuel', value: 'Never an issue — this is the most densely serviced route on the site. There is no fuel inside the park itself, but you are minutes from a village in any direction' },
    { icon: 'cell', label: 'Cell Service', value: 'Good the whole way, including the beaches' },
    { icon: 'road', label: 'Road Type', value: 'Route 2 and Route 6, plus the Gulf Shore Parkway in two separate stretches · all paved, all easy' },
    { icon: 'winter', label: 'Winter Driving', value: 'The Gulf Shore Parkway closes for winter. The connecting roads stay open, but island blizzards and whiteouts shut highways several times each winter' },
  ],

  seasonalNotes: [
    {
      icon: '🚧',
      title: 'The Parkway Does Not Connect',
      text: 'Gulf Shore Parkway East runs from Dalvay to Brackley; Gulf Shore Parkway West runs from North Rustico to Cavendish. Between them you go inland on Route 6 around Rustico Bay. People expect one continuous coastal road and are surprised when it ends.',
    },
    {
      icon: '🌀',
      title: 'Fiona Rewrote This Coastline',
      text: 'Hurricane Fiona hit in September 2022 and took the dunes apart — Dalvay lost its dune line completely. Parks Canada permanently closed some look-offs and parking areas along the western parkway rather than rebuild them into an eroding cliff. The shore has been recovering since, but check the park’s alerts page for what is actually open.',
    },
    {
      icon: '🌾',
      title: 'The Dunes Are Held Together by Grass',
      text: 'Marram grass roots are the only thing anchoring the sand, and a footstep breaks them. That is why the boardwalks exist and why the fenced areas are fenced. On an island losing coastline every year this is not a gentle request.',
    },
  ],

  wildlifeSafety: {
    title: 'No Bears, No Moose — the Risks Are Water and Sand',
    text: 'Prince Edward Island has no bears, no moose and nothing that will threaten you on a trail. What it has is open Gulf water, soft cliffs and a nesting shorebird that is running out of beach.',
    rules: [
      'Beaches are only supervised in the summer season; outside it, rip currents are yours to judge',
      'The red cliffs are sandstone and undercut — they calve without warning, so do not sit beneath them or walk the edge above',
      'Piping plover nesting areas are roped off between spring and midsummer; the birds nest on open sand and the closures are the reason any still do',
      'Stay on the boardwalks over the dunes, not because of fines but because the dune is the island’s only defence',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Epekwitk Before Anne of Green Gables',
    text: "The island is Epekwitk, 'resting on the water', one of the seven districts of Mi'kma'ki, and the Mi'kmaq have been here for thousands of years — the Lennox Island and Abegweit First Nations are its communities today. The French called it Île Saint-Jean and farmed the north shore until the British deportations of 1758 scattered the Acadian population; Rustico is one of the communities Acadians rebuilt afterwards. Charlottetown, where you start, is where the 1864 conference that led to Confederation was held. And Cavendish, where you finish, is the farm L.M. Montgomery turned into Green Gables.",
    nations: [
      "Mi'kmaq Nation (Epekwitk district of Mi'kma'ki)",
      'Lennox Island First Nation',
      'Abegweit First Nation',
      'Acadian communities of the north shore',
    ],
    authenticStop: {
      name: "Farmers' Bank of Rustico",
      text: 'A National Historic Site on the route at South Rustico: a bank chartered in 1864 and run by Acadian farmers and fishermen who could not get credit anywhere else, designed by their parish priest Georges-Antoine Belcourt. It is considered a forerunner of the credit union movement in Canada. Seasonal hours — check before you go.',
    },
    note: 'This island sells itself worldwide through a fictional red-haired orphan, which is charming and completely disconnected from the two histories you are actually driving through: a Mi’kmaq homeland of thousands of years, and an Acadian population deported from it. Green Gables is worth seeing. It is not the oldest story here.',
  },

  stops: [
    {
      name: 'Charlottetown',
      km: 0,
      icon: '🏛️',
      text: 'Starting point, and the smallest provincial capital in Canada. Province House, where the 1864 conference met, is in the middle of it.',
    },
    {
      name: 'Dalvay-by-the-Sea',
      km: 26,
      icon: '🏨',
      text: 'The eastern end of the park, with a Victorian summer house turned hotel and the beach that Fiona hit hardest. The parkway starts here.',
    },
    {
      name: 'Brackley Beach',
      km: 38,
      icon: '🏖️',
      text: 'Where the eastern parkway ends and you turn inland. Long sand, the Dunes complex, and the point at which people realise the coastal road does not continue.',
    },
    {
      name: 'North Rustico',
      km: 56,
      icon: '🦞',
      text: 'A working harbour and an Acadian community, with a boardwalk out to the lighthouse. The western parkway picks up here.',
    },
    {
      name: 'Cavendish',
      km: 64,
      image: '/pe/parks/pei-national-park.png',
      text: 'The busiest corner of the island: the main beach, the red cliffs, and Green Gables a few minutes inland. Arrive early in summer or park far away.',
    },
  ],
};

export default CHARLOTTETOWN_PEI;
