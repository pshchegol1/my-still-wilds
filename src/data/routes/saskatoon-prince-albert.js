// Saskatoon → Prince Albert National Park — данные страницы
// /route/saskatoon-prince-albert
// Первый маршрут региона "Saskatchewan".

import { SASKATOON_PRINCE_ALBERT_EXPLORER } from './explorer/saskatoon-prince-albert.js';

export const SASKATOON_PRINCE_ALBERT = {
  slug: 'saskatoon-prince-albert',
  name: 'Saskatoon to Prince Albert National Park',
  region: 'Saskatchewan · Boreal Transition',
  tag: 'Treaty 6 · Louis Riel Trail',
  accentLevel: 'gold',
  backLabel: 'Back to Saskatchewan',
  backHref: '/province/sk',
  heroImage: '/sk/parks/prince-albert.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: SASKATOON_PRINCE_ALBERT_EXPLORER,
  description:
    'The drive where the prairie quietly ends. Wheat and sky for two hours, then the fields break into aspen, the aspen into spruce, and by the time you reach Waskesiu you are in the boreal forest with a lake in front of you. The same highway runs past the ground where the 1885 resistance started — this is not an empty landscape, whatever the horizon suggests.',

  badges: ['248 KM', '~3H20M DRIVE', 'BOREAL EDGE', 'FREE-RANGING BISON'],

  headlineStats: [
    { value: '248', unit: 'km', label: 'Saskatoon to Waskesiu Lake' },
    { value: '~3h20', unit: 'm', label: 'Non-Stop Drive Time' },
    { value: '3,874', unit: 'km²', label: 'Prince Albert National Park' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '248 km, Saskatoon to the Waskesiu townsite via Duck Lake and the city of Prince Albert' },
    { icon: 'time', label: 'Drive Time', value: '~3h20m non-stop · a comfortable half-day with a stop at Duck Lake or Fort Carlton' },
    { icon: 'fuel', label: 'Fuel', value: 'Stations the whole way, but they get smaller and further apart past Prince Albert — Christopher Lake and the Waskesiu area are village operations with short off-season hours' },
    { icon: 'cell', label: 'Cell Service', value: 'Good along Hwy 11 · thins out north of Prince Albert and is patchy once you are inside the park' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 11 (Louis Riel Trail), then Hwy 2 north and Hwy 263 or 264 into the park · all paved, mostly straight' },
    { icon: 'winter', label: 'Winter Driving', value: 'Hwy 11 stays open and gets ploughed, but ground blizzards close prairie highways with no warning — check Saskatchewan Highway Hotline before leaving' },
  ],

  seasonalNotes: [
    {
      icon: '⛽',
      title: 'Fuel Gets Thinner, Not Absent',
      text: 'There is gas north of Prince Albert — Christopher Lake, and more near the park gate. What changes is scale: these are village stations with limited hours, not highway plazas, and off-season some simply are not open. Prince Albert is the last place you can count on without checking.',
    },
    {
      icon: '🏚️',
      title: 'Waskesiu Is a Summer Town',
      text: 'The townsite is built for July and August. Outside the summer season most of the restaurants, rentals and shops are shut — including the places you would refuel or eat at. The park stays beautiful and goes almost serviceless. Check what is actually open before you rely on it.',
    },
    {
      icon: '🌬️',
      title: 'Prairie Winter Closes Highways, Not Roads',
      text: 'Hwy 11 is a good highway. The problem is wind: it lifts snow off the open fields and erases the road on a clear, sunny day. Saskatchewan closes stretches of it for this most winters. Snowfall is not the warning sign — wind is.',
    },
  ],

  wildlifeSafety: {
    title: 'Black Bears, and Bison That Are Not Behind a Fence',
    text: 'Prince Albert is black bear country, with elk and moose along the park roads. It is also, as Parks Canada describes it, home to the only free-ranging plains bison herd still living within its historic range in Canada — the Sturgeon River herd, on the park’s remote west side. These animals are not in an enclosure and not used to people.',
    rules: [
      'Deer and moose cross Hwy 11 and Hwy 2 at dawn and dusk — this is where the collisions happen, not in the park',
      'Store food properly in the Waskesiu campgrounds; the bears here are habituated to the townsite',
      'If you drive the west-side gravel roads, treat bison as wild: stay in the vehicle and give them the road',
      'Grey Owl’s cabin is a 20 km hike each way from the Kingsmere River parking lot, which is itself 32 km past Waskesiu — a backcountry trip, not an afternoon walk',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Treaty 6 — and the Road Where 1885 Began',
    text: 'This is Treaty 6 territory, signed in 1876 at Fort Carlton, which sits just off this highway, and the homeland of the Métis. Saskatchewan renamed Hwy 11 the Louis Riel Trail in 2001, and the name is accurate: the first fighting of the 1885 North-West Resistance happened at Duck Lake on 26 March, when a Métis force under Gabriel Dumont met the North-West Mounted Police. Batoche, where the resistance ended seven weeks later, is a short detour east. You drive past all of it in under two hours.',
    nations: [
      'Nêhiyawak (Cree) Nations — Treaty 6 (1876)',
      "Beardy's & Okemasis' Cree Nation",
      'Mistawasis Nêhiyawak',
      'Sturgeon Lake First Nation',
      'Métis Nation–Saskatchewan',
    ],
    authenticStop: {
      name: 'Duck Lake Regional Interpretive Centre',
      text: 'Right on the highway at Duck Lake, telling the 1885 story from the Métis and Cree side rather than the one written by the winners. Fort Carlton Provincial Park, where Treaty 6 was signed, is 25 km further west on Hwy 212.',
    },
    note: 'One more thing worth knowing: the park’s most famous resident, Grey Owl, was an Englishman named Archibald Belaney who presented himself as Indigenous for most of his adult life. His conservation work was real and so was the deception, and the cabin is still a pilgrimage. It is a strange centrepiece for a park in Treaty 6 territory.',
  },

  stops: [
    {
      name: 'Saskatoon',
      km: 0,
      icon: '🏙️',
      text: 'Starting point, on the South Saskatchewan River. Head north on Hwy 11 — the Louis Riel Trail.',
    },
    {
      name: 'Duck Lake',
      km: 85,
      icon: '🪶',
      text: 'A small town with an outsized place in Canadian history: the 1885 resistance started in the fields here. The interpretive centre and the battlefield site are both worth the stop.',
    },
    {
      name: 'Prince Albert',
      km: 143,
      icon: '⛽',
      text: 'The last city before the north, and the last fuel, groceries and cell signal you can count on. Fill up here whatever the gauge says.',
    },
    {
      name: 'Waskesiu Lake',
      km: 248,
      image: '/sk/parks/prince-albert.png',
      text: 'The townsite on the lakeshore, with the park’s main beach, visitor centre and trails. From here it is gravel and water to everything else.',
    },
  ],
};

export default SASKATOON_PRINCE_ALBERT;
