// Wild Boar (invasive wild pigs) — данные страницы /wildlife/wild-boar
//
// Сделано самостоятельно без макета, по той же схеме, что Wood Bison /
// Orca / Coyote / Wolverine / Canada Lynx.
//
// ВАЖНО ПО СМЫСЛУ: в Канаде нет местных диких свиней. "Wild boar" здесь —
// это инвазивные свиньи (Sus scrofa): сбежавшие с ферм евразийские кабаны,
// одичавшие домашние свиньи и их гибриды. Поэтому страница не о том, "где
// посмотреть", а о том, как безопасно разойтись и СООБЩИТЬ о встрече.
//
// ИСТОЧНИКИ И ВЕРИФИКАЦИЯ:
// - Invasive Species Council of BC, брошюра "Invasive Pig" (март 2025):
//   нет местных свиней; завезены для ферм и охоты; устойчивые популяции в
//   Alberta, Saskatchewan, Manitoba, меньше — в BC, Ontario, Quebec;
//   "самое разрушительное крупное млекопитающее Канады"; переживают
//   канадские зимы; до 2.4 м длиной и 1 м в холке, 35-200 кг; поросята
//   полосатые; самки размножаются в первый год, самцы с 7 месяцев, до двух
//   помётов в год по 10-12 поросят, выживает не меньше половины; группы
//   называются sounders; распространились на >1 млн км²; часто ночные;
//   спортивная охота НЕ эффективна; могут передавать людям E. coli и
//   гепатит E; риск африканской чумы свиней (в Канаде её сейчас нет);
//   следы свиньи vs оленя.
// - Ryan Brook (University of Saskatchewan, Canadian Wild Pig Research
//   Project), по CBC / Global News / CJME: увидели признаки свиней —
//   уходите; если свинья приближается — в машину или здание; не
//   приближаться, агрессивны когда загнаны в угол или защищают поросят;
//   самая крупная пойманная в Саскачеване — 638 фунтов (~290 кг).
// - Alberta: wild boar "at large" — инвазивный вид и регулируемый
//   сельхоз-вредитель; кампания Squeal on Pigs (Alberta Invasive Species
//   Council); сообщать по 310-FARM (3276), через EDDMapS или форму на
//   alberta.ca. Бонус за уши ($50) отменён — охота делала только хуже.
// - Saskatchewan: горячая линия 1-833-PIGSPOT —
//   по Global News; указана буквенным номером, как в источнике.
// - Минимальная дистанция 30 м — общее правило Parks Canada для "прочих"
//   диких животных; отдельной официальной цифры для свиней не нашла.
//
// МЕДИА:
// - boar-hero.mp4 / boar-hero.jpg — "Sus scrofa-wild boars-Bulgaria-4",
//   фотоловушка в природном парке Витоша (Болгария), Neli St Ivanova /
//   Сдружение за дива природа, Wikimedia Commons, CC BY-SA 4.0. Дикие
//   кабаны в лесу (это Европа, не Канада — канадских свободных видео не
//   нашла). Обрезана нижняя полоса с датой; постер — кадр из того же видео.
// - Галерея — USDA APHIS, public domain, одичавшие свиньи в США (те же
//   гибриды, что и в Канаде):
//   * boar-sounder.jpg — группа у грязевой лужи, Havasu NWR (Аризона);
//   * boar-trailcam.jpg — ночная фотоловушка;
//   * boar-rooting.jpg — газон, перерытый свиньями (фото повреждений).
//   Кадры с ловушками/загонами (c4, c6) сознательно НЕ использованы.

export const WILD_BOAR = {
  slug: 'wild-boar',
  name: 'Wild Boar',
  shortName: 'Wild Pig',
  tag: 'Caution — Invasive Species',
  level: 'caution',
  image: '/wildlife/Wild Boar/boar-hero.jpg',
  heroVideo: '/wildlife/Wild Boar/boar-hero.mp4',
  heroCredit: 'Neli St Ivanova / Wikimedia Commons · CC BY-SA 4.0 · Vitosha, Bulgaria',
  heroVideoCredit: 'Video: Neli St Ivanova / Wikimedia Commons · CC BY-SA 4.0 · Vitosha, Bulgaria',
  description:
    "Canada has no native pigs. Escaped Eurasian wild boar, feral domestic pigs, and their hybrids now roam the Prairies — the most destructive large mammal in the country. If you see one, keep your distance, don't hunt it, and report it.",

  actions: [
    { label: 'Where Found', href: '#parks' },
    { label: 'Safety Guide', href: '#safety' },
  ],

  quickFacts: [
    { label: 'Weight', value: '35-200 KG' },
    { label: 'Length', value: 'Up To 2.4 M' },
    { label: 'Litters', value: 'Up To 2 A Year' },
    { label: 'Piglets', value: '10-12 Per Litter' },
    { label: 'Spread', value: '>1 Million Km²' },
    { label: 'Status', value: 'Invasive' },
  ],

  minDistanceWarning: {
    title: 'Min. Distance: 30 Metres',
    text: 'Never approach a wild pig — especially a sow with piglets. If one comes toward you, get into a vehicle or building.',
  },

  behaviorSection: {
    tag: 'Invasive Pig Behaviour',
    title: 'The Most Destructive',
    highlight: 'Mammal In Canada',
    accent: '#c99a2e',
    cards: [
      {
        title: 'Not Native To Canada',
        icon: 'AlertTriangle',
        description:
          'Wild pigs were brought in for farming and hunting. Escapees and their hybrids with domestic pigs adapted to the wild and are now established in Alberta, Saskatchewan, and Manitoba.',
      },
      {
        title: 'Built For Canadian Winters',
        icon: 'Wind',
        description:
          'Wild pigs survive cold Canadian winters with thick, bristly coats. The largest pig handled in Saskatchewan weighed about 290 kg.',
      },
      {
        title: 'Populations Explode Fast',
        icon: 'Users',
        description:
          'Females can breed in their first year and have two litters a year of 10-12 piglets, with at least half surviving. A few escapees can become hundreds in just a few years.',
      },
      {
        title: 'Live In Groups Called Sounders',
        icon: 'UsersThreeIcon',
        description:
          'Sows and piglets travel together in sounders. Striped piglets mean a protective mother is close by — the most dangerous situation to walk into.',
      },
      {
        title: 'Mostly Active At Night',
        icon: 'Moon',
        description:
          'Wild pigs hide in dense cover near water and farmland by day and forage after dark, which is why most are seen on trail cameras rather than in person.',
      },
      {
        title: 'Tear Up Land And Spread Disease',
        icon: 'Skull',
        description:
          'Rooting destroys crops, native plants, and ground-nesting bird habitat. They can carry diseases that affect livestock, wildlife, and people, including E. coli and hepatitis E.',
      },
    ],
  },

  distanceLabels: {
    outer: '100m — Recommended Distance',
    mid: '30m — Parks Canada Minimum',
    inner: '0-10m — Get To Safety',
  },

  distanceZones: [
    {
      range: '0-10M',
      label: 'Get To Safety',
      description: 'Far too close. Move calmly toward a vehicle, building, or something you can climb onto. A cornered or protective pig can charge.',
      level: 'danger',
    },
    {
      range: '10-30M',
      label: 'Too Close',
      description: 'Stop approaching and back away the way you came. Never walk between a sow and her piglets.',
      level: 'caution',
    },
    {
      range: '30M+',
      label: 'Observe & Report',
      description: 'Stay where you are, take a photo if it is safe, and note the exact location — then report the sighting.',
      level: 'safe',
    },
  ],

  neverDo: [
    {
      title: 'Never Approach Wild Pigs',
      icon: 'RunningFigure',
      description: 'Pigs avoid people unless they feel threatened or are protecting their young. Getting closer is what triggers a charge.',
    },
    {
      title: 'Never Get Between A Sow And Piglets',
      icon: 'Users',
      description: 'Striped piglets mean the mother is nearby. Back away immediately if you see young pigs.',
    },
    {
      title: 'Never Hunt Them On Your Own',
      icon: 'XCircle',
      description: 'Sport hunting scatters sounders, teaches survivors to avoid traps, and spreads pigs into new areas. Experts and provinces ask you to report instead.',
    },
    {
      title: 'Never Leave Food Or Feed Out',
      icon: 'Trash2',
      description: 'Spilled grain, livestock feed, and garbage draw sounders onto farms and yards and keep them coming back.',
    },
    {
      title: 'Never Release Or Abandon Pigs',
      icon: 'DoorOpen',
      description: 'Every wild population in Canada began with escaped or released animals. Domestic pigs must be securely fenced.',
    },
  ],

  alwaysDo: [
    {
      title: 'Leave The Area',
      icon: 'Compass',
      description: 'If you see pigs or fresh signs of them — rooted soil, wallows, tracks — calmly leave and give them a wide berth.',
    },
    {
      title: 'Use A Vehicle Or Building',
      icon: 'Car',
      description: 'If a pig moves toward you, get inside a vehicle or building rather than trying to outrun it.',
    },
    {
      title: 'Photograph From A Safe Distance',
      icon: 'Camera',
      description: 'A photo, even of tracks or rooting damage, helps officials confirm the report. Never get closer to take it.',
    },
    {
      title: 'Note The Exact Location',
      icon: 'Eye',
      description: 'Record the date, time, GPS location or nearest road, number of pigs, and whether piglets were present.',
    },
    {
      title: 'Squeal On Pigs — Report It',
      icon: 'Phone',
      description: 'Alberta: 310-FARM (3276) or EDDMapS. Saskatchewan: 1-833-PIGSPOT. B.C.: bcinvasives.ca/SquealOnPigs. Call 911 if anyone is in danger.',
    },
  ],

  neverFeed: {
    tag: 'Forbidden — Never Feed',
    warning:
      'Feeding wild pigs keeps sounders near people and farms, helps them breed even faster, and makes removal harder. Never feed, bait, or attract them.',
    items: [
      { name: 'Grain And Livestock Feed', icon: '🌾', description: 'Secure feed bins and clean up spills' },
      { name: 'Fruit And Vegetables', icon: '/icons/wildlife/🍎.png', description: 'Garden waste draws pigs onto properties' },
      { name: 'Root Vegetables', icon: '/icons/wildlife/🥕.png', description: 'Pigs will dig up whole fields for them' },
      { name: 'Bread And Grains', icon: '/icons/wildlife/🍞.png', description: 'Creates dependency on human food sources' },
      { name: 'Meat And Scraps', icon: '/icons/wildlife/🥩.png', description: 'Pigs are omnivores and eat almost anything' },
      { name: 'Unsecured Garbage', icon: '/icons/wildlife/🗑️.png', description: 'Teaches sounders to visit yards and farms' },
      { name: 'Pet Food', icon: '🐾', description: 'An easy meal left outside overnight' },
      { name: 'Bait Piles', icon: '🎯', description: 'Never bait pigs — leave removal to professionals' },
    ],
  },

  parksSectionTag: 'Where Wild Pigs Are Found',
  parksSectionHeading: { lead: 'Provinces With', highlight: 'Wild Pigs' },
  spotParks: [
    { name: 'Central Alberta', province: 'Alberta (Edmonton region)', season: 'Established — report via 310-FARM', level: 'danger' },
    { name: 'Saskatchewan', province: 'Saskatchewan', season: 'Established — report via 1-833-PIGSPOT', level: 'danger' },
    { name: 'Manitoba', province: 'Manitoba', season: 'Established — report every sighting', level: 'danger' },
    { name: 'B.C., Ontario & Quebec', province: 'Lower numbers', season: 'Sightings reported — help keep them out', level: 'caution' },
  ],

  encounterSteps: [
    {
      title: 'Stop And Stay Calm',
      description:
        'Most wild pigs run off once they notice people. Stop, keep quiet, and look for piglets — a sow with young is the most likely to charge.',
    },
    {
      title: 'Back Away And Leave',
      description:
        'Move slowly away the way you came and give the pigs an open escape route. Do not try to chase or herd them.',
    },
    {
      title: 'If One Comes Toward You — Get To Safety',
      description:
        'Get into a vehicle or building, or climb onto something solid. Pigs can be very large and powerful, so do not try to stand your ground.',
    },
    {
      title: 'Report The Sighting',
      description:
        'Note the location, number of pigs, and take a photo if it is safe. Report it to your province — every report helps crews trap whole sounders before they spread.',
    },
  ],

  gallery: [
    { src: '/wildlife/Wild Boar/boar-sounder.jpg', credit: 'USDA APHIS · Public domain · Feral swine sounder' },
    { src: '/wildlife/Wild Boar/boar-trailcam.jpg', credit: 'USDA APHIS · Public domain · Trail camera' },
    { src: '/wildlife/Wild Boar/boar-rooting.jpg', credit: 'USDA APHIS · Public domain · Rooting damage' },
  ],
};

export default WILD_BOAR;
