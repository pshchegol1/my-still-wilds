// Whitehorse → Kluane — данные страницы
// /route/whitehorse-kluane
// Первый маршрут региона "Yukon".

import { WHITEHORSE_KLUANE_EXPLORER } from './explorer/whitehorse-kluane.js';

export const WHITEHORSE_KLUANE = {
  slug: 'whitehorse-kluane',
  name: 'Whitehorse to Kluane',
  region: 'Yukon · Alaska Highway',
  tag: 'Champagne & Aishihik · Kluane First Nation',
  accentLevel: 'blue',
  backLabel: 'Back to Yukon',
  backHref: '/province/yt',
  heroImage: '/yt/parks/kluane.png',

  // Интерактивная карта + вкладки (RouteExplorer)
  explorer: WHITEHORSE_KLUANE_EXPLORER,
  description:
    "The Alaska Highway west to Canada's highest mountains and largest non-polar icefield — most of which you will never see from the road. Kluane keeps its best country behind the front ranges, reachable on foot or by flightseeing. What you get from the car is still one of the great drives in the North.",

  badges: ['272 KM', '~4H DRIVE', 'LONG FUEL GAPS', 'CANADA’S HIGHEST PEAK'],

  headlineStats: [
    { value: '272', unit: 'km', label: 'Whitehorse to Destruction Bay' },
    { value: '~4', unit: 'h', label: 'Non-Stop Drive Time' },
    { value: '5,959', unit: 'm', label: 'Mount Logan, Canada’s Highest' },
  ],

  passport: [
    { icon: 'distance', label: 'Distance', value: '272 km, Whitehorse to Destruction Bay · Haines Junction, the park gateway, is at 155 km' },
    { icon: 'time', label: 'Drive Time', value: '~4h non-stop · realistically a full day, and longer if you fly over the icefields' },
    { icon: 'fuel', label: 'Fuel', value: 'Fill up in Whitehorse and again in Haines Junction. Northern stations keep short hours and some close entirely off-season — never pass one on half a tank' },
    { icon: 'cell', label: 'Cell Service', value: 'Whitehorse and Haines Junction only. Expect nothing in between or along Kluane Lake — carry a satellite messenger for backcountry' },
    { icon: 'road', label: 'Road Type', value: 'Alaska Highway (Hwy 1), paved two-lane · frost heaves make the surface wavy, gravel-patched sections are common' },
    { icon: 'winter', label: 'Winter Driving', value: 'Open year-round and properly cold: −40 °C happens. Winter tires, a full tank, warm gear in the car and someone who knows your plan' },
  ],

  seasonalNotes: [
    {
      icon: '🌊',
      title: 'Frost Heaves, Not Potholes',
      text: 'The Alaska Highway is built on ground that freezes and thaws, so the pavement ripples. At speed a heave can launch a loaded vehicle. The orange flags marking the worst ones are a warning to slow down, not decoration.',
    },
    {
      icon: '✈️',
      title: 'The Big Country Is Not Roadside',
      text: 'Mount Logan, the icefields and the glaciers are deep inside the park and invisible from the highway. Seeing them means a flightseeing trip out of Haines Junction or Burwash, or a serious multi-day hike. Plan for that rather than expecting a viewpoint.',
    },
    {
      icon: '🌙',
      title: 'Light Runs to Extremes',
      text: 'Near-24-hour daylight in June makes long days easy; by December there are about five usable hours. Aurora season runs roughly late August to April, and Kluane has no light pollution to fight.',
    },
  ],

  wildlifeSafety: {
    title: 'Grizzly Country With No Cell Signal',
    text: 'Kluane has a significant grizzly population, along with Dall sheep on the Sheep Mountain slopes and moose along the highway. The real difference from the Rockies is that there is no one nearby and no way to call.',
    rules: [
      'Carry bear spray and know how to use it before you need it — on any trail, not just long ones',
      'Travel in groups and make noise; most encounters happen when a bear is surprised',
      'Carry a satellite messenger for anything beyond a short roadside walk — there is no cell coverage to fall back on',
      'Watch for Dall sheep on the road near Sheep Mountain, and moose anywhere at dawn and dusk',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: 'Two Self-Governing Nations — and a Highway Built Through Them',
    text: "This drive crosses the traditional territories of the Champagne and Aishihik First Nations and the Kluane First Nation, both Southern Tutchone peoples and both now self-governing under modern land claim agreements. The Alaska Highway was pushed through in 1942 by the US Army in eight months, without consultation, and the epidemics that came with construction crews devastated communities along the route. The park itself displaced Southern Tutchone families from hunting and fishing grounds when it was created; co-management arrangements with both Nations came much later.",
    nations: [
      'Champagne and Aishihik First Nations',
      'Kluane First Nation',
      'Southern Tutchone peoples',
    ],
    authenticStop: {
      name: 'Da Kų Cultural Centre, Haines Junction',
      text: "Da Kų means 'our house'. It is run by the Champagne and Aishihik First Nations and shares a building with the Kluane park visitor centre, so it is directly on your way rather than a detour — and it is the Nation telling its own story, not an exhibit about them.",
    },
    note: 'The highway is often told as a wartime engineering feat, which it was. It was also built straight through inhabited territory with no agreement from the people living there, and the consequences arrived within months.',
  },

  stops: [
    {
      name: 'Whitehorse',
      km: 0,
      icon: '🏙️',
      text: 'Starting point and the last real city. Fill the tank, buy anything you might need, and check road reports before heading west.',
    },
    {
      name: 'Haines Junction',
      km: 155,
      icon: '🪶',
      text: 'The gateway to Kluane, where the Haines Road splits south toward Alaska. Fuel, food, the Da Kų Cultural Centre and the park visitor centre — stop here properly.',
    },
    {
      name: 'Sheep Mountain & Kluane Lake',
      km: 230,
      image: '/yt/parks/kluane.png',
      text: 'The highway meets the lake, the largest in Yukon, with Dall sheep on the slopes above. The colour of the water is the photograph everyone takes.',
    },
    {
      name: 'Destruction Bay',
      km: 272,
      icon: '⛽',
      text: 'A tiny settlement on the lakeshore, built as a highway construction camp. Fuel and a bed, and not much else for a long way after.',
    },
  ],
};

export default WHITEHORSE_KLUANE;
