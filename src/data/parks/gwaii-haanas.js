// Gwaii Haanas — данные страницы /park/gwaii-haanas
//
// Фото: только снимок с карточки (/bc/parks/Gwaii Haanas.png) — герой.
// Достопримечательности с иконками, галереи нет.
// Вместо раздела "тропы" — места Haida Gwaii Watchmen (сюда приплывают на
// лодке; троп в обычном смысле почти нет). Для этого в ParkPage добавлены
// необязательные trailsTag / trailsTitle / trailsLinkLabel и level у пунктов.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Parks Canada, Gwaii Haanas (главная): полное название — Gwaii Haanas
//   National Park Reserve, National Marine Conservation Area Reserve, and
//   Haida Heritage Site; охраняют Parks Canada, Fisheries and Oceans Canada
//   и хайда; дорог нет, только лодка или гидросамолёт; гид / лицензированный
//   оператор / самостоятельно; пик сезона июнь — сентябрь; телефон
//   250-559-8818, 1-877-559-8818, gwaiihaanas@pc.gc.ca; офис — Haida
//   Heritage Centre, Skidegate.
// - Parks Canada, Plan your visit: южная половина Haida Gwaii, ~100 км от
//   северного побережья BC; большинство едет с оператором (места
//   заканчиваются рано); самостоятельным нужна бронь и ориентация; лодки
//   идут от Moresby Camp; на каяке до северной границы ~2 дня.
// - Parks Canada, Visitor orientation: каждый от 17 лет проходит
//   самостоятельную ориентацию и тест (не меньше 80%); доступ — после
//   брони; с собой — квитанция брони и сертификат.
// - Gwaii Haanas Visitor Guide 2026 (Parks Canada, PDF): Watchmen —
//   граждане хайда, работают с мая по сентябрь; программа с 1981 (как
//   волонтёрская), Parks Canada помогает с 1990; 2-4 Watchmen на каждом
//   месте; вызывать по VHF канал 6 и просить разрешения высадиться; не
//   больше 12 человек на берегу; визиты до 18:00, последняя группа — до
//   16:00; места: SG̱ang Gwaay (Anthony Island) — ЮНЕСКО и национальное
//   историческое место с 1981, один из лучших примеров традиционной деревни
//   Северо-Западного побережья, важное место гнездования морских птиц (в
//   норах); Gandll K'in Gwaay.yaay (Hotspring Island) — горячие источники;
//   Hlk'yah GaawGa (Windy Bay) — место протеста против вырубки на Lyell
//   Island (1985), в августе 2013 поднят Legacy Pole — первый монументальный
//   столб за 130 лет, к 20-летию совместного управления; T'aanuu Llnagaay
//   (Tanu) — 25-40 длинных домов, остатки возвращаются в землю по решению
//   наследственных вождей; K'uuna Llnagaay (Skedans) — 26-30 длинных домов,
//   в конце 1800-х — больше 50 монументальных скульптур. Безопасность: нет
//   сотовой связи, нужна морская VHF-рация; Береговая охрана — VHF 16;
//   Parks Canada Emergency Dispatch 780-852-3100; приливы до 7.5 м; нельзя
//   собирать двустворчатых моллюсков; гипотермия; дроны запрещены; от
//   морских млекопитающих не ближе 100 м, от косаток — 200 м; морских птиц
//   не беспокоить (февраль — сентябрь), лодка без крыс; медведь Haida
//   Gwaii — с более крупными челюстями (питается лососем и обитателями
//   литорали).
// - Wikipedia: заповедник с 1988, 1,470 км² суши (как на карточке);
//   соглашение Gwaii Haanas 1993 между Council of the Haida Nation и
//   Канадой, Archipelago Management Board с равным представительством;
//   морская часть — соглашение 2010.
// - Паромы BC Ferries из Prince Rupert и аэропорты Sandspit / Masset —
//   общеизвестно, на странице без расписаний и времени в пути.
// - НЕ использовано: точная площадь моря, число посетителей, цены сборов.
//
// ФОТО КАРТОЧКИ: песчаный пляж с кекурами и лесом — похоже на побережье
// Haida Gwaii / севера острова Ванкувер; место съёмки не подтверждено.

const IMAGE = '/bc/parks/Gwaii Haanas.png';

export const GWAII_HAANAS = {
  slug: 'gwaii-haanas',
  name: 'Gwaii Haanas',
  shortName: 'Gwaii Haanas',
  province: 'British Columbia',
  tag: 'Haida Heritage Site · Est. 1988',
  heroImage: IMAGE,
  heroCaption: 'Gwaii Haanas · Haida Gwaii · BC',
  description:
    'Islands of Beauty — a wild archipelago at the edge of the Pacific, cared for together by the Haida Nation and Canada. No roads lead here: you arrive by boat or floatplane to ancient village sites, standing memorial poles, hot springs, and rainforest that meets the sea.',

  actions: [
    { label: 'Plan Your Visit', href: '#getting-there' },
    { label: 'Watchmen Sites', href: '#trails' },
  ],

  quickFacts: [
    { label: 'Established', value: '1988' },
    { label: 'Area', value: '1,470 km² land' },
    { label: 'Rating', value: '4.8 ★' },
    { label: 'Access', value: 'Boat Or Floatplane' },
    { label: 'SG̱ang Gwaay', value: 'UNESCO 1981' },
    { label: 'Peak Season', value: 'June — Sept' },
  ],

  badges: ['Haida Heritage', 'UNESCO', 'Marine Reserve'],

  bestSeasons: [
    { icon: '☀️', label: 'Summer', level: 'safe', rating: 5 },
    { icon: '🍂', label: 'Fall', level: 'danger', rating: 2 },
    { icon: '🌧️', label: 'Winter', level: 'caution', rating: 1 },
    { icon: '🌸', label: 'Spring', level: 'olive', rating: 3 },
  ],

  spotlight: {
    tag: 'Cooperative Management',
    emoji: '🪶',
    title: 'Protected By The Haida Nation And Canada, Together',
    text: 'In 1985 Haida citizens stood on a logging road on Lyell Island to stop the clear-cutting of their ancestral lands. That stand led to Gwaii Haanas: a national park reserve in 1988, and in 1993 an agreement under which the Council of the Haida Nation and the Government of Canada manage it as equals through the Archipelago Management Board. In 2013, the Legacy Pole was raised at Windy Bay to mark 20 years of working together — the first monumental pole raised in Gwaii Haanas in 130 years.',
    stats: [
      { value: '1985', label: 'Lyell Island stand', level: 'danger' },
      { value: '1993', label: 'Gwaii Haanas Agreement', level: 'gold' },
      { value: '2013', label: 'Legacy Pole raised', level: 'safe' },
      { value: '130', label: 'Years since the last pole', level: 'blue' },
    ],
  },

  attractionsTag: 'Haida Heritage',
  attractions: [
    {
      name: 'SG̱ang Gwaay',
      icon: '🪵',
      tag: 'UNESCO',
      tagLevel: 'gold',
      meta: 'Anthony Island — standing memorial and mortuary poles and longhouse remains. One of the finest Northwest Coast village sites on Earth.',
    },
    {
      name: 'Hotspring Island',
      icon: '♨️',
      tag: 'Hot Springs',
      tagLevel: 'danger',
      meta: 'Gandll K’in Gwaay.yaay — “Hotwater Island.” Natural thermal springs that comfort, heal, and nourish.',
    },
    {
      name: 'Windy Bay',
      icon: '🪶',
      tag: 'Legacy Pole',
      tagLevel: 'safe',
      meta: 'Hlk’yah GaawGa — “Peregrine Falcon Bay.” A site of the 1985 logging protest, home of the Legacy Pole raised in 2013.',
    },
    {
      name: 'T’aanuu Llnagaay',
      icon: '🌿',
      tag: 'Ancestral Village',
      tagLevel: 'olive',
      meta: '“Eelgrass Town” on Tanu Island — once 25 to 40 longhouses. Its remains are left to return to the earth.',
    },
    {
      name: 'K’uuna Llnagaay',
      icon: '🏛️',
      tag: 'Ancestral Village',
      tagLevel: 'blue',
      meta: '“On The Edge Town” (Skedans) on Louise Island — a few carved poles still stand among longhouse depressions.',
    },
    {
      name: 'Seabird Islands',
      icon: '🐦',
      tag: 'Wildlife',
      tagLevel: 'purple',
      meta: 'Globally important seabird colonies. Most birds nest in burrows underground — stay on trails and never land on colonies.',
    },
  ],

  wildlifeWarning:
    'Stay at least 100 m from all marine mammals and 200 m from killer whales. Don’t disturb seabirds, especially from February to September, and keep your boat free of rats. Haida Gwaii black bears live here — store food properly. Gwaii Haanas is a no-drone zone.',
  wildlife: [
    { name: 'Haida Gwaii Black Bear', level: 'danger', chance: '★★★☆☆ Shorelines and streams' },
    { name: 'Seabirds', level: 'safe', chance: '★★★★★ Colonies on outer islands' },
    { name: 'Marine Mammals', level: 'safe', chance: '★★★☆☆ Keep 100 m away' },
    { name: 'Orca', level: 'caution', chance: '★★☆☆☆ Keep 200 m away' },
  ],

  seasons: [
    {
      icon: '☀️',
      name: 'Summer',
      months: 'June — August',
      level: 'safe',
      text: 'Peak season. Haida Gwaii Watchmen welcome visitors at the village sites, and tour operators run full trips — book early, they fill fast.',
      rating: 5,
      note: 'Best time',
    },
    {
      icon: '🍂',
      name: 'Fall',
      months: 'September — October',
      level: 'danger',
      text: 'Watchmen stay at the sites until September. Storms build quickly over open water, and trips become weather-dependent.',
      rating: 2,
      note: 'Watch the weather',
    },
    {
      icon: '🌧️',
      name: 'Winter',
      months: 'November — March',
      level: 'caution',
      text: 'Stormy seas and short days. Watchmen are not at the sites, and travel is for very experienced mariners only.',
      rating: 1,
      note: 'Not recommended',
    },
    {
      icon: '🌸',
      name: 'Spring',
      months: 'April — May',
      level: 'olive',
      text: 'Watchmen return in May. Seabird breeding season is under way — keep well away from colonies.',
      rating: 3,
      note: 'Seabird season',
    },
  ],

  trailsTag: 'Watchmen Sites',
  trailsTitle: { lead: 'Visit The Haida', highlight: 'Watchmen Sites' },
  trailsNote: {
    title: 'Radio Ahead And Ask Permission',
    text: 'Haida Gwaii Watchmen live at these village sites from May to September. Call them on marine VHF channel 6 before you arrive and ask permission to land. No more than 12 people ashore at a time; visits end by 6 pm, last arrival by 4 pm. No camping at Watchmen sites.',
  },
  trailsUrl: 'https://parks.canada.ca/pn-np/bc/gwaiihaanas/visit',
  trailsLinkLabel: 'Plan With Parks Canada',
  trails: [
    { name: 'SG̱ang Gwaay', length: 'Anthony Island', time: 'UNESCO World Heritage Site', area: 'Exposed southwest coast', difficulty: 'Boat Access', level: 'gold' },
    { name: 'Gandll K’in Gwaay.yaay', length: 'Hotspring Island', time: 'Thermal springs', area: 'Central Gwaii Haanas', difficulty: 'Boat Access', level: 'danger' },
    { name: 'Hlk’yah GaawGa', length: 'Windy Bay', time: 'Legacy Pole', area: 'Lyell Island', difficulty: 'Boat Access', level: 'safe' },
    { name: 'T’aanuu Llnagaay', length: 'Tanu Island', time: 'Ancestral village', area: 'Eastern Tanu Island', difficulty: 'Boat Access', level: 'olive' },
    { name: 'K’uuna Llnagaay', length: 'Skedans', time: 'Ancestral village', area: 'Northeast Louise Island', difficulty: 'Boat Access', level: 'blue' },
  ],

  gettingThere: [
    {
      icon: '✈️',
      title: 'By Plane',
      text: 'Fly to Haida Gwaii (Sandspit or Masset airports). Gwaii Haanas lies on the southern half of the islands, about 100 km off BC’s north coast.',
      time: 'Then a boat or floatplane trip',
    },
    {
      icon: '⛴️',
      title: 'By Ferry',
      text: 'BC Ferries sails between Prince Rupert and Haida Gwaii. From there, most visitors join a licensed tour operator; independent boaters and kayakers launch from Moresby Camp.',
      time: 'Kayak to the northern border: ~2 days',
    },
    {
      icon: '🛶',
      title: 'Tour Or Self-Guided',
      text: 'There are no roads. Go with a licensed operator, or travel independently with your own boat or kayak — only with strong remote marine skills.',
      time: 'Reservation + orientation required',
    },
  ],

  entryPass: {
    title: 'Reservation & Orientation Required',
    text: 'Independent visitors must reserve and complete the Gwaii Haanas visitor orientation before entering. Everyone 17 and older must pass the orientation quiz (80%).',
    buyText: 'Carry your booking receipt and orientation certificate — there is no cell service in Gwaii Haanas.',
    url: 'https://reservation.pc.gc.ca',
  },

  stay: [
    {
      icon: '🛥️',
      title: 'Guided Tours',
      text: 'Most visitors go with a licensed tour operator — by boat, kayak, or sailing vessel. Trips fill early, so book well ahead.',
      links: [{ label: 'Parks Canada', url: 'https://parks.canada.ca/pn-np/bc/gwaiihaanas/visit', level: 'safe' }],
    },
    {
      icon: '🏕️',
      title: 'Wilderness Camping',
      text: 'Independent visitors camp in the wilderness. Groups stay small (no more than 12 ashore), out of sight and sound of others, and pack out everything. No camping at Watchmen sites.',
      links: [{ label: 'Reservations', url: 'https://reservation.pc.gc.ca', level: 'safe' }],
    },
    {
      icon: '🏘️',
      title: 'Haida Gwaii Communities',
      text: 'Stay in Skidegate, Daajing Giids, Sandspit, or Masset before and after your trip — and visit the Haida Heritage Centre in Skidegate.',
      links: [{ label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Haida+Gwaii', level: 'blue' }],
    },
  ],

  practical: [
    {
      icon: '📻',
      title: 'Emergency',
      lines: ['Coast Guard: VHF channel 16', 'Parks Canada Dispatch (sat phone):', '780-852-3100'],
    },
    {
      icon: 'ℹ️',
      title: 'Gwaii Haanas Office',
      lines: ['Haida Heritage Centre, Skidegate', '250-559-8818', '1-877-559-8818'],
    },
    {
      icon: '📶',
      title: 'No Cell Service',
      text: 'Carry a marine VHF radio — and ideally a satellite phone or personal locator beacon.',
    },
    {
      icon: '🌊',
      title: 'Tides Up To 7.5 m',
      text: 'Big tides and fast weather changes. Check the marine forecast several times a day.',
    },
    {
      icon: '🐚',
      title: 'No Shellfish Harvest',
      text: 'Collecting clams, scallops, cockles, and other bivalves is not allowed in Gwaii Haanas.',
    },
    {
      icon: '🚁',
      title: 'No Drones',
      text: 'Gwaii Haanas is a no-drone zone.',
    },
  ],

  gallery: [],
};

export default GWAII_HAANAS;
