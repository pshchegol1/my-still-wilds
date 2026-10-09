// Vancouver → Whistler → Vancouver Island — данные страницы
// /route/vancouver-whistler-island
// Второй пилотный маршрут региона "British Columbia & the Coast".

export const VANCOUVER_WHISTLER_ISLAND = {
  slug: 'vancouver-whistler-island',
  name: 'Vancouver, Whistler & Vancouver Island',
  region: 'British Columbia · Pacific Coast & Mountains',
  tag: 'Pilot Route · Coast Salish Territory',
  accentLevel: 'blue',
  backLabel: 'Back to British Columbia',
  backHref: '/province/bc',
  heroImage: '/Cities/Vancouver/Stanley Park.jpg',
  description:
    "Mountains, ferries, and ocean in one loop — the Sea-to-Sky Highway north to Whistler, back down to catch a BC Ferry, then a choice of Victoria or Tofino. The ferry logistics catch more people out than the driving does.",

  badges: ['470+ KM', 'FERRY REQUIRED', 'COAST SALISH LAND', 'BOOK AHEAD'],

  passport: [
    { icon: 'distance', label: 'Distance', value: '~470 km total (Vancouver↔Whistler 240 km return, + ferry, + island leg)' },
    { icon: 'time', label: 'Drive + Ferry Time', value: '2h to Whistler · 1h45m back to the ferry · ~1h40m sailing · 1.5–3h on the island' },
    { icon: 'ferry', label: 'Ferry Reservations', value: 'Strongly recommended June–Sept — walk-ons get bumped 2–4+ sailings on summer weekends' },
    { icon: 'cell', label: 'Cell Service', value: 'Strong on Hwy 99 and Vancouver Island highways · weak to none mid-crossing on the ferry' },
    { icon: 'road', label: 'Road Type', value: 'Hwy 99 (Sea-to-Sky, winding mountain highway) + BC Ferries + Vancouver Island highways' },
    { icon: 'winter', label: 'Winter Driving', value: 'Hwy 99 is well-maintained for ski traffic, but winter tires required Oct 1–Apr 30' },
  ],

  seasonalNotes: [
    {
      icon: '💸',
      title: 'Whistler & Tofino Pricing',
      text: 'Both are among the most expensive places to sleep in Canada — Whistler peaks Dec–Mar and Jul–Aug, Tofino peaks Jun–Sept. Book 2–3 months ahead or expect $300+/night for anything decent.',
    },
    {
      icon: '🌧️',
      title: 'Coastal Rain',
      text: 'This is temperate rainforest — expect rain any month on the island and the coast, even in July. Whistler stays drier and sunnier than Tofino or Vancouver.',
    },
    {
      icon: '🐋',
      title: 'Whale Season',
      text: 'Resident orca pods near the Gulf Islands and Saanich Peninsula are best spotted May–September; humpbacks return to Tofino waters through summer and fall.',
    },
  ],

  wildlifeSafety: {
    title: 'Ferry Logistics Are the Real Risk Here',
    text: "Nobody gets hurt by missing a ferry, but it will wreck your schedule. Horseshoe Bay and Tsawwassen are different terminals serving different islands — picking the wrong one costs an extra hour of driving before you even start the sailing wait.",
    rules: [
      'Reserve your vehicle spot online for peak season — walk-on vehicles can wait 4+ hours on July/August weekends',
      'Arrive 30–60 min early even with a reservation; 90+ min early without one on busy days',
      'Sailings are not hourly — missing one can mean a 2+ hour wait for the next',
      'Black bears are present on Vancouver Island and around Whistler — standard 100m distance rule applies on any trail',
    ],
  },

  culture: {
    tag: 'Cultural & Historical Context',
    title: "Coast Salish, Squamish, Líl'wat, and Nuu-chah-nulth Land",
    text: "Vancouver sits on the unceded territories of the Musqueam, Squamish, and Tsleil-Waututh Nations. The Sea-to-Sky corridor to Whistler crosses Squamish and Líl'wat territory — the two nations co-hosted the 2010 Winter Olympics together. Vancouver Island is Coast Salish territory near Victoria (Songhees and Esquimalt Nations) and Nuu-chah-nulth territory on the west coast near Tofino (Tla-o-qui-aht and Yuułuʔiłʔatḥ First Nations).",
    nations: [
      'Musqueam, Squamish & Tsleil-Waututh Nations (Vancouver)',
      "Squamish & Líl'wat Nations (Sea-to-Sky corridor)",
      'Songhees & Esquimalt Nations (Victoria area)',
      'Nuu-chah-nulth — Tla-o-qui-aht & Yuułuʔiłʔatḥ Nations (Tofino area)',
    ],
    authenticStop: {
      name: 'Squamish Lil’wat Cultural Centre, Whistler',
      text: "Co-owned and operated by the Squamish and Líl'wat Nations, right in Whistler Village — not a detour. Built for the 2010 Olympics as a genuine cultural centre, not a tourist prop.",
    },
    note: "Haida Gwaii — home of the Haida Nation — is not on this route, despite sometimes being lumped into 'Vancouver Island trips.' It's a separate remote archipelago off the north coast of BC, reached by a different ferry from Prince Rupert, many hours further north. Worth its own trip, not a day detour from here.",
  },

  stops: [
    {
      name: 'Vancouver',
      km: 0,
      image: '/Cities/Vancouver/Stanley Park.jpg',
      text: 'Starting point. Fill the tank — Hwy 99 has gas in Squamish but prices climb the further you get from the city.',
    },
    {
      name: 'Squamish — Stawamus Chief & Sea to Sky Gondola',
      km: 70,
      icon: '🧗',
      text: 'Roughly the halfway mark. Worth 1–2 hours for the gondola views or a short hike even if you’re not stopping overnight.',
    },
    {
      name: "Whistler — Squamish Lil'wat Cultural Centre",
      km: 120,
      icon: '🪶',
      cultural: true,
      text: "The authentic cultural stop on this route — see the Culture section above for why it's worth the detour into the village.",
    },
    {
      name: 'Horseshoe Bay Ferry Terminal',
      km: 235,
      icon: '⛴️',
      text: "Back near Vancouver, not Whistler — the Sea-to-Sky doesn't loop, you backtrack down Hwy 99 to catch the ferry. Confirm you're booked for the right terminal.",
    },
    {
      name: 'Nanaimo — Departure Bay',
      km: 235,
      icon: '🚢',
      text: '~1h40m BC Ferries crossing from Horseshoe Bay. From here, the island splits toward Victoria or Tofino — see below.',
    },
  ],

  fork: {
    tag: 'Choose Your Ending',
    title: 'Two Ways to Finish This Trip',
    intro: 'From Nanaimo, the island splits two directions — a relaxed capital city, or a wild Pacific coastline. Both are real, finished legs of this route.',
    options: [
      {
        name: 'South to Victoria',
        tag: 'City & Wine',
        level: 'gold',
        time: '~1h40m drive · 111 km',
        text: "Easier driving, more reasonably priced than Whistler or Tofino, and close to Saanich Peninsula wine country and whale-watching tours out of the inner harbour.",
      },
      {
        name: 'West to Tofino',
        tag: 'Surf & Rainforest',
        level: 'blue',
        time: '~2.5–3h drive · 195 km via Hwy 4',
        text: 'Through Pacific Rim National Park Reserve — old-growth rainforest, surf beaches, and the narrow Port Alberni mountain pass worth driving carefully.',
        href: '/park/pacific-rim',
        linkLabel: 'See the Pacific Rim Park Guide',
      },
    ],
  },
};

export default VANCOUVER_WHISTLER_ISLAND;
