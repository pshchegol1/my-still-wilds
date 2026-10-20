// Halifax → Kejimkujik National Park — данные страницы
// /route/halifax-kejimkujik
// Второй маршрут региона "Nova Scotia".

import { HALIFAX_KEJIMKUJIK_EXPLORER } from './explorer/halifax-kejimkujik.js';

export const HALIFAX_KEJIMKUJIK = {
  slug: 'halifax-kejimkujik',
  name: 'Halifax to Kejimkujik',
  region: 'Nova Scotia · Southern Interior',
  tag: "Mi'kma'ki · National Historic Site",
  accentLevel: 'safe',
  backLabel: 'Back to Nova Scotia',
  backHref: '/province/ns',
  heroImage: '/ns/parks/kejimkujik.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: HALIFAX_KEJIMKUJIK_EXPLORER,
  description:
    'Nova Scotia’s only inland national park, and one of very few anywhere that is also a National Historic Site for the culture that shaped it. Kejimkujik is lakes, hemlock forest and Mi’kmaw canoe routes that have been in use for thousands of years — the park protects a living cultural landscape, not just a watershed.',

  badges: ['170 KM', '~2H30M DRIVE', 'DARK SKY PRESERVE', 'MI’KMAW PETROGLYPHS'],

  headlineStats: [
    { value: '170', unit: 'km', label: 'Halifax to the Park Entrance' },
    { value: '~2h30', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '404', unit: 'km²', label: 'Of Lakes and Inland Forest' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '170 km, Halifax to the Maitland Bridge entrance via Bridgewater and Route 8' },
    { icon: 'time', label: 'Drive Time', value: '~2h30m non-stop · an easy half-day, though the park deserves longer' },
    { icon: 'fuel', label: 'Fuel', value: 'Easy to Bridgewater and Annapolis Royal. Route 8 between them runs through small villages — fill up before you turn inland' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along Hwy 103 · patchy on Route 8 and inside the park, especially on the lakes' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 103 southwest, then Route 8 inland · all paved, the last stretch two-lane through forest' },
    { icon: 'winter', label: 'Winter Driving', value: 'Roads stay open, but most park facilities and services close from November to the Victoria Day weekend' },
  ],

  seasonalNotes: [
    {
      icon: '🛶',
      title: 'The Park Is Water, Not Road',
      text: 'Kejimkujik has a short loop of park road and then stops. The interior — the backcountry sites, the portages, the places the park is actually about — is reached by canoe along routes the Mi’kmaq established long before the park existed. Plan to paddle or plan to see very little of it.',
    },
    {
      icon: '🌌',
      title: 'Nova Scotia’s Only Dark Sky Preserve',
      text: 'Designated by the Royal Astronomical Society of Canada in 2010. Being inland and away from the coastal towns is exactly what makes it dark, and the park runs night-sky programming in season.',
    },
    {
      icon: '🪸',
      title: 'Seaside Is a Separate Place',
      text: 'Kejimkujik Seaside, the coastal section with the white-sand beaches, is on the Atlantic shore near Port Joli — about an hour and a half from the main park by road. They share a name and almost nothing else. Decide which one you are going to.',
    },
  ],

  wildlifeSafety: {
    title: 'Ticks, Not Bears, Are the Problem Here',
    text: 'Black bears live in the park but encounters are rare and undramatic. The genuine health risk in southwestern Nova Scotia is blacklegged ticks, which are established here and carry Lyme disease.',
    rules: [
      'Check yourself thoroughly after every hike — Lyme disease is a real and growing risk in this part of the province',
      'Stay on trails, wear long trousers in tall grass, and treat tick checks as routine rather than cautious',
      'Snapping turtles nest along the roadsides in June; give them room rather than moving them',
      'Standard black bear rules apply at the campgrounds — store food, keep a clean site',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'A Park That Is a National Historic Site for Its People',
    text: 'Kejimkujik sits in Mi’kma’ki, and the designation that matters most here is not the park one. The whole landscape is a National Historic Site because of what the Mi’kmaq left in it and still carry: petroglyphs carved into the slate along the lakeshores, traditional encampment grounds, burial sites, and canoe routes and portages that form a working travel network thousands of years old. Parks Canada protects it as a cultural landscape rather than as wilderness — an important distinction, because "wilderness" would imply nobody was here.',
    nations: [
      "Mi'kmaq Nation (Kespukwitk district of Mi'kma'ki)",
      'Acadia First Nation',
      'Bear River First Nation',
    ],
    authenticStop: {
      name: 'The Petroglyph Tours',
      text: 'The carvings along the Kejimkujik Lake shoreline sit in a restricted area, and Parks Canada’s own guide is blunt about it: the only way to see them is on a guided tour. Registration is required, groups are capped at twenty, and places fill quickly — book before you arrive. Mi’kmaw visitors who want to see them are asked to contact the park directly.',
    },
    note: 'The park’s name is Mi’kmaw, and so is nearly everything it protects. It is one of the few places in the national park system where the Indigenous history is not a panel beside the trailhead but the actual reason the place is designated.',
  },

  stops: [
    {
      name: 'Halifax',
      km: 0,
      icon: '🏙️',
      text: 'Starting point. Head southwest on Hwy 103 along the South Shore — the fast part of the drive.',
    },
    {
      name: 'Bridgewater',
      km: 102,
      icon: '⛽',
      text: 'The service town of the South Shore, and where you turn inland onto Route 8. Full services and the last easy shopping.',
    },
    {
      name: 'Kejimkujik — Maitland Bridge',
      km: 170,
      image: '/ns/parks/kejimkujik.png',
      text: 'The park entrance and visitor centre on Route 8. From here it is lakes, hemlock and the canoe routes into the interior.',
    },
  ],
};

export default HALIFAX_KEJIMKUJIK;
