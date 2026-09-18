export const PROVINCES_DATA = [
  {
    id: "bc",
    name: "British Columbia",
    tagline: "Pacific Ocean, Rainforests & Peaks",
    tag: "West Coast",
    image: "/provinces/british-columbia.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "ab",
    name: "Alberta",
    tagline: "Rocky Mountains & Glacial Lakes",
    tag: "Rockies",
    image: "/provinces/alberta.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "on",
    name: "Ontario",
    tagline: "Niagara Falls & 250,000 Lakes",
    tag: "Central",
    image: "/provinces/ontario.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "qc",
    name: "Quebec",
    tagline: "Historic Architecture & St. Lawrence",
    tag: "Eastern",
    image: "/provinces/quebec.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "mb",
    name: "Manitoba",
    tagline: "Polar Bear Capital & Northern Tundra",
    tag: "Prairies",
    image: "/provinces/manitoba.png",
    colSpan: "lg:col-span-3",
  },
  {
    id: "sk",
    name: "Saskatchewan",
    tagline: "Land of Living Skies & Golden Plains",
    tag: "Prairies",
    image: "/provinces/saskatchewan.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "ns",
    name: "Nova Scotia",
    tagline: "Peggy's Cove & Rugged Atlantic Coast",
    tag: "Atlantic",
    image: "/provinces/nova-scotia.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "nb",
    name: "New Brunswick",
    tagline: "Hopewell Rocks & Highest Ocean Tides",
    tag: "Maritimes",
    image: "/provinces/new-brunswick.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "yt",
    name: "Yukon",
    tagline: "Midnight Sun, Klondike & Aurora Trails",
    tag: "Territory",
    image: "/provinces/yukon.jpg",
    colSpan: "lg:col-span-5",
  },
  {
    id: "nu",
    name: "Nunavut",
    tagline: "Ancient Glaciers & Arctic Archipelago",
    tag: "Territory",
    image: "/provinces/nunavut.jpg",
    colSpan: "lg:col-span-3",
  },
  {
    id: "nl",
    name: "Newfoundland & Labrador",
    tagline: "Iceberg Alley & Dramatic Coastal Fjords",
    tag: "Atlantic",
    image: "/provinces/newfoundland-labrador.jpg",
    colSpan: "lg:col-span-4",
  },
  {
    id: "nt",
    name: "Northwest Territories",
    tagline: "Aurora Capital & Nahanni Canyons",
    tag: "Territory",
    image: "/provinces/northwest-territories.jpg",
    colSpan: "lg:col-span-6",
  },
  {
    id: "pe",
    name: "Prince Edward Island",
    tagline: "Red Sandstone Cliffs & Anne's Shoreline",
    tag: "Maritimes",
    image: "/provinces/prince-edward-island.jpg",
    colSpan: "lg:col-span-6",
  },
];

export const PROVINCE_STATS = [
  { label: "Provinces & Territories", value: "13", icon: "map", tint: "forest" },
  { label: "National Parks", value: "48", icon: "mountains", tint: "ember" },
  { label: "km² of Nature", value: "10 M", icon: "trees", tint: "forest" },
  { label: "Canadians", value: "38 M", icon: "users", tint: "sand" },
];

export const WILDLIFE_DATA = {
  featured: {
    name: "Grizzly Bear",
    risk: "Dangerous",
    level: "danger",
    location: "BC · Alberta · Yukon",
    note: "Keep 100m distance",
    image: "/wildlife/grizzly-bear.jpg",
  },
  grid: [
    {
      name: "Gray Wolf",
      risk: "Caution",
      level: "caution",
      location: "BC · Alberta · Ontario",
      image: "/wildlife/grey-wolf.jpg",
    },
    {
      name: "Moose",
      risk: "Caution",
      level: "caution",
      location: "All Provinces",
      image: "/wildlife/moose.jpg",
    },
    {
      name: "Caribou",
      risk: "Safe",
      level: "safe",
      location: "Yukon · Nunavut",
      image: "/wildlife/caribou.jpg",
    },
    {
      name: "Bald Eagle",
      risk: "Safe",
      level: "safe",
      location: "BC · Nova Scotia",
      image: "/wildlife/bald-eagle.jpg",
    },
  ],
  bottom: [
    {
      name: "Orca Whale",
      risk: "Safe To Watch",
      level: "safe",
      location: "BC · Pacific Coast",
      image: "/wildlife/orca-whale.jpg",
    },
    {
      name: "Sea Turtle",
      risk: "Safe",
      level: "safe",
      location: "Atlantic Coast",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/960px-Chelonia_mydas_is_going_for_the_air_edit.jpg",
    },
    {
      name: "Cougar",
      risk: "Dangerous",
      level: "danger",
      location: "BC · Alberta",
      image: "/wildlife/cougar.jpg",
    },
  ],
};

export const PARKS_DATA = {
  featured: {
    name: "Banff National Park",
    province: "Alberta",
    area: "6,641 km²",
    established: "1885",
    rating: "4.9",
    seasons: ["Summer", "Winter", "Fall"],
    image: "/parks/banff.jpg",
  },
  side: [
    {
      name: "Jasper National Park",
      province: "Alberta",
      area: "10,878 km²",
      rating: "4.8",
      image: "/parks/jasper.jpg",
    },
    {
      name: "Yoho National Park",
      province: "British Columbia",
      area: "1,313 km²",
      rating: "4.7",
      image: "/parks/yoho.jpg",
    },
  ],
  bottom: [
    {
      name: "Fundy National Park",
      province: "New Brunswick",
      area: "206 km²",
      rating: "4.6",
      seasons: ["Summer", "Fall"],
      image: "/parks/fundy.jpg",
    },
    {
      name: "Gros Morne National Park",
      province: "Newfoundland",
      area: "1,805 km²",
      rating: "4.9",
      seasons: ["Summer", "Spring"],
      image: "/parks/gros-morne.jpg",
    },
  ],
};

export const PARK_STATS = [
  { label: "National Parks", value: "48", icon: "Trees" },
  { label: "Protected Nature", value: "340K km²", icon: "Shield" },
  { label: "Annual Visitors", value: "25M", icon: "Users" },
  { label: "Oldest Park (Banff)", value: "1885", icon: "Calendar" },
];

// Колонки ссылок в подвале. icon — имя файла в public/icons/
export const FOOTER_LINKS = [
  {
    title: "Explore",
    items: [
      { label: "National park", href: "#parks", icon: "game-icons_mountains.svg" },
      { label: "Nature & Trails", href: "#parks", icon: "ph_tree-evergreen-thin.svg" },
      { label: "Wildlife", href: "#wildlife", icon: "game-icons_flat-paw-print.svg" },
      { label: "Cities", href: "#provinces", icon: "healthicons_city-outline.svg" },
      { label: "Interactive Map", href: "#provinces", icon: "ph_map-trifold-thin.svg" },
    ],
  },
  {
    title: "Travel",
    items: [
      { label: "Getting There", href: "#", icon: "ph_airplane-tilt-thin.svg" },
      { label: "Where to Stay", href: "#", icon: "material-symbols-light_bed-outline-rounded.svg" },
      { label: "Food & Drink", href: "#", icon: "ph_fork-knife-light.svg" },
      { label: "Transport", href: "#", icon: "glyphs_bus.svg" },
      { label: "Safety Tips", href: "#safety", icon: "ph_first-aid-kit-light.svg" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About StillWilds", href: "#", icon: "material-symbols-light_info-outline-rounded.svg" },
      { label: "Contact Us", href: "#", icon: "ei_envelope.svg" },
      { label: "Privacy Policy", href: "#", icon: "mdi-light_shield.svg" },
      { label: "Terms of Use", href: "#", icon: "ph_file-text-light.svg" },
      { label: "Parks Canada", href: "#", icon: "glyphs_maple-leaf.svg" },
    ],
  },
];
