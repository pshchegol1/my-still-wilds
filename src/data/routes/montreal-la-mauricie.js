// Montréal → La Mauricie — данные страницы
// /route/montreal-la-mauricie
// Первый маршрут региона "Québec".

import { MONTREAL_LA_MAURICIE_EXPLORER } from './explorer/montreal-la-mauricie.js';

export const MONTREAL_LA_MAURICIE = {
  slug: 'montreal-la-mauricie',
  name: 'Montréal to La Mauricie',
  region: 'Québec · Mauricie',
  tag: 'Nitaskinan · Atikamekw Territory',
  accentLevel: 'safe',
  backLabel: 'Back to Québec',
  backHref: '/province/qc',
  heroImage: '/qc/parks/la-mauricie.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: MONTREAL_LA_MAURICIE_EXPLORER,
  description:
    "The closest real wilderness to Montréal — two and a half hours northeast to a park of 150 lakes folded into the Laurentian hills. Easy driving, genuinely quiet water, and the one thing nobody warns you about: the black flies in June.",

  badges: ['225 KM', '~2H30M TO THE GATE', 'BLACK FLIES IN JUNE', 'FRANÇAIS'],

  headlineStats: [
    { value: '225', unit: 'km', label: 'Total Distance, With Stops' },
    { value: '~2h30', unit: 'm', label: 'Montréal to the Park Gate' },
    { value: '150', unit: '+', label: 'Lakes Inside the Park' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '182 km direct to the Saint-Jean-des-Piles gate · 225 km as driven with the Trois-Rivières stop and the park road' },
    { icon: 'time', label: 'Drive Time', value: '~2h30m to the gate · add 40 min for the slow, winding Parkway inside the park' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy along Autoroute 40 · fill up in Shawinigan or Saint-Jean-des-Piles, there is no fuel inside the park' },
    { icon: 'cell', label: 'Cell Service', value: 'Solid to Shawinigan · unreliable to absent through most of the park interior' },
    { icon: 'road', label: 'Road Type', value: 'Autoroute 40 then 55 north, both divided · the in-park Parkway is paved, narrow and slow' },
    { icon: 'winter', label: 'Winter Driving', value: 'The park Parkway closes to cars for the winter; access shifts to snowshoeing and cross-country skiing from the entrances' },
  ],

  seasonalNotes: [
    {
      icon: '🦟',
      title: 'Black Flies Own June',
      text: 'From late May into early July the black flies here are not a nuisance, they are the deciding factor in whether you enjoy the trip. Long sleeves, a head net if you are hiking, and plan the serious walking for August or September instead.',
    },
    {
      icon: '🛶',
      title: 'Canoe Routes Book Out',
      text: 'The multi-day canoe circuits and backcountry campsites are the real draw and are reserved well in advance for summer weekends. Day-use canoe rentals at Lac Wapizagonke are easier, but still go early.',
    },
    {
      icon: '🗣️',
      title: 'This Is French Country',
      text: 'Outside Montréal, Mauricie operates in French. Park staff and most tourist businesses manage in English, but road signs, menus and local radio will not. A few phrases go a long way here.',
    },
  ],

  wildlifeSafety: {
    title: 'Black Bears and Cold, Deep Lakes',
    text: 'La Mauricie has a healthy black bear population and bears regularly pass through campgrounds. There are no grizzlies in Québec — the rules are simpler here, but they still matter.',
    rules: [
      'Store food and anything scented in your car or the provided lockers, never in a tent',
      'The lakes are deep and stay cold; wear a lifejacket when canoeing, even close to shore',
      'Moose are present and most active at dawn and dusk — the Parkway has long blind curves',
      'Tell someone your route before heading into the backcountry; there is no cell coverage to fall back on',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Nitaskinan — Atikamekw Land',
    text: 'La Mauricie sits within Nitaskinan, "our land" in Atikamekw, the ancestral territory of the Atikamekw Nation, whose communities of Manawan, Wemotaci and Opitciwan lie to the north of the park. The Saint-Maurice River that gives the region its name was their travel route long before it carried logs; the W8banaki (Abenaki) also have long-standing ties to the lands south along the Saint Lawrence.',
    nations: [
      'Atikamekw Nation (Nitaskinan)',
      'Manawan, Wemotaci and Opitciwan',
      'W8banaki (Abenaki) Nation',
    ],
    note: 'The park’s own interpretation leans heavily on the logging era — the river drives, the timber barons, the restored camps. That history is real, but it is only the most recent layer, and the Atikamekw presence underneath it gets far less space than it deserves.',
  },

  stops: [
    {
      name: 'Montréal',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Autoroute 40 east then north — leave before the afternoon rush and the whole drive is straightforward.',
    },
    {
      name: 'Trois-Rivières',
      km: 140,
      icon: '🏛️',
      text: 'One of the oldest cities in North America, founded 1634, where the Saint-Maurice meets the Saint Lawrence. A good lunch stop and a real detour-worthy old town.',
    },
    {
      name: 'Shawinigan',
      km: 179,
      icon: '⚡',
      text: 'A hydroelectric town built on the river’s falls. Last full-service stop — fuel, groceries and the Cité de l’énergie if you have time.',
    },
    {
      name: 'Saint-Jean-des-Piles',
      km: 200,
      icon: '🚪',
      text: 'The eastern park gate. From here the Parkway winds slowly through the hills — budget far more time than the distance suggests.',
    },
    {
      name: 'La Mauricie — Lac Wapizagonke',
      km: 225,
      image: '/qc/parks/la-mauricie.png',
      text: 'The long, narrow lake the park is known for, with canoe rentals, beaches and the viewpoint over the valley from Le Passage.',
    },
  ],
};

export default MONTREAL_LA_MAURICIE;
