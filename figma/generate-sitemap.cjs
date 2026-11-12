// Генератор схемы сайта Still Wilds в SVG для импорта в Figma.
const fs = require('fs');
const out = process.argv[2];

const C = {
  bg: '#070D19', card: '#0E1A2E', border: '#24344F', text: '#FFFFFF', muted: '#93A3B8',
  green: '#38A169', greenSoft: '#6EE7A1', orange: '#E08A4A', blue: '#488CDC', purple: '#A78BFA', gold: '#E2B84B',
};
const FONT = "Inter, 'Segoe UI', Arial, sans-serif";
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const W = 300, LINE = 20, HEAD = 92;
const cardH = (n) => HEAD + n * LINE + 22;

const els = [];
const card = (id, x, y, { title, path, count, accent, sections }) => {
  const h = cardH(sections.length);
  const g = [];
  g.push(`<g id="${id}">`);
  g.push(`<rect x="${x}" y="${y}" width="${W}" height="${h}" rx="16" fill="${C.card}" stroke="${C.border}" stroke-width="1.5"/>`);
  g.push(`<rect x="${x}" y="${y}" width="${W}" height="6" rx="3" fill="${accent}"/>`);
  g.push(`<text x="${x + 20}" y="${y + 38}" font-family="${FONT}" font-size="20" font-weight="700" fill="${C.text}">${esc(title)}</text>`);
  g.push(`<text x="${x + 20}" y="${y + 62}" font-family="${FONT}" font-size="13" fill="${accent}">${esc(path)}</text>`);
  if (count) {
    const tw = count.length * 7.2 + 20;
    g.push(`<rect x="${x + W - tw - 16}" y="${y + 20}" width="${tw}" height="24" rx="12" fill="${accent}" fill-opacity="0.18"/>`);
    g.push(`<text x="${x + W - tw / 2 - 16}" y="${y + 36}" text-anchor="middle" font-family="${FONT}" font-size="12" font-weight="700" fill="${accent}">${esc(count)}</text>`);
  }
  g.push(`<line x1="${x + 20}" y1="${y + 76}" x2="${x + W - 20}" y2="${y + 76}" stroke="${C.border}"/>`);
  sections.forEach((s, i) => {
    const opt = s.endsWith('*');
    g.push(`<text x="${x + 20}" y="${y + HEAD + 8 + i * LINE}" font-family="${FONT}" font-size="13" fill="${opt ? C.muted : '#D5DEEA'}">${esc((i + 1) + '. ' + s.replace(/\*$/, ' (opt.)'))}</text>`);
  });
  g.push('</g>');
  els.push(g.join('\n'));
  return { x, y, w: W, h, cx: x + W / 2 };
};
const link = (a, b, { dashed = false, color = C.border, label } = {}) => {
  const x1 = a.cx, y1 = a.y + a.h, x2 = b.cx, y2 = b.y;
  const my = (y1 + y2) / 2;
  els.unshift(`<path d="M${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2" ${dashed ? 'stroke-dasharray="7 6"' : ''}/>` +
    (label ? `<text x="${(x1 + x2) / 2 + 6}" y="${my - 6}" font-family="${FONT}" font-size="12" fill="${color}">${esc(label)}</text>` : ''));
};

// ---------- Уровень 0: главная ----------
const GAP = 40, X0 = 80;
const colX = (i) => X0 + i * (W + GAP);
const home = card('home', colX(3), 200, {
  title: 'Home', path: '/', accent: C.green, count: 'Main',
  sections: ['Nav: Provinces · Wildlife · Parks', 'Nav: Hiker’s Guide · Dispatch', 'Hero + Map / Road Trips buttons', 'Provinces (#provinces)', 'Wildlife (#wildlife)', 'Safety (#safety)', 'Parks (#parks)', 'Newsletter (#newsletter)', 'Footer'],
});

// ---------- Уровень 1: разделы ----------
const Y1 = 640;
const prov = card('provinces', colX(0), Y1, { title: 'Province', path: '/province/:id', count: '13 pages', accent: C.blue,
  sections: ['Hero', 'Stats bar', 'About (#about)', 'Regions*', 'Cities (#cities)', 'National Parks (#parks)', 'Wildlife', 'Road Trips (#routes)'] });
const wild = card('wildlife', colX(1), Y1, { title: 'Wildlife', path: '/wildlife', count: '49 animals', accent: C.orange,
  sections: ['Hero banner', 'Stats grid', 'Dangerous — 4', 'Caution — 8', 'Large Mammals — 11', 'Small Mammals — 12', 'Marine Life — 5', 'Birds — 9', 'Footer'] });
const parks = card('parks', colX(2), Y1, { title: 'Parks', path: '/parks', accent: C.green,
  sections: ['Hero banner', 'Stats grid', 'Must Visit — bento grid', 'Region sections', 'Footer'] });
const trips = card('roadtrips', colX(3), Y1, { title: 'Road Trips', path: '/road-trips', accent: C.purple,
  sections: ['Header', 'Trip search + map', 'Selected route sections', 'Footer'] });
const map = card('map', colX(4), Y1, { title: 'Map', path: '/map', accent: C.purple,
  sections: ['Interactive map of Canada'] });
const hikers = card('hikers', colX(5), Y1, { title: 'Hiker’s Guide', path: '/hikers-guide', accent: C.gold,
  sections: ['Hero banner', 'Day hike vs multi-day', 'Backpack sizes', 'What to wear', 'Seasonal packing', 'Essentials', 'Golden rules', 'Emergencies', 'Footer'] });
const spray = card('bearspray', colX(6), Y1, { title: 'Bear Spray', path: '/bear-spray', accent: C.orange,
  sections: ['Hero', 'Why bear spray works', 'Step by step (#steps)', 'Video', 'How to carry', 'Spray vs predator', 'Common mistakes', 'Storage & maintenance', 'Buying guide (#buying-guide)'] });

// ---------- Уровень 2: шаблоны детальных страниц ----------
const Y2 = 1180;
const city = card('city', colX(0), Y2, { title: 'City', path: '/city/:slug', count: '93 pages', accent: C.blue,
  sections: ['Hero + Quick Facts', 'Live Weather', 'Facts*', 'Highlight*', 'Neighbourhoods', 'Top Attractions', 'Outdoor Adventures', 'Festival City*', 'Food Scene', 'Best Time to Visit', 'Getting There', 'Getting Around', 'Where to Stay', 'Tax', 'Practical Information'] });
const animal = card('animal', colX(1), Y2, { title: 'Animal', path: '/wildlife/:slug', count: '49 pages', accent: C.orange,
  sections: ['Hero video + Quick Facts', 'Behaviour', 'Road hazard*', 'Species comparison*', 'Safe Distance (danger/caution only)', 'Warning signs*', 'Safety Rules: Never / Always', 'Never Feed', 'Where to See (#parks)', 'Info callout*', 'Bear Spray promo*', 'Encounter Guide', 'Gallery'] });
const park = card('park', colX(2), Y2, { title: 'Park', path: '/park/:slug', count: '7 pages', accent: C.green,
  sections: ['Hero + Quick Facts', 'Highlight*', 'Attractions', 'Wildlife', 'Best Time to Visit', 'Top Trails (#trails)', 'Getting There (#getting-there)', 'Where to Stay'] });
const route = card('route', colX(3), Y2, { title: 'Route', path: '/route/:slug', count: '25 pages', accent: C.purple,
  sections: ['Hero', 'Route search + interactive map', 'Route Passport', 'Route fork*', 'Footer'] });

// ---------- Связи ----------
[prov, wild, parks, trips, map, hikers, spray].forEach((p) => link(home, p, { color: '#3B4F70' }));
link(prov, city, { color: C.blue });
link(wild, animal, { color: C.orange });
link(parks, park, { color: C.green });
link(trips, route, { color: C.purple });

// Перекрёстные ссылки — пунктиром, справа отдельной легендой
const cross = [
  ['Animal → Bear Spray', 'button in the Bear Spray promo block'],
  ['Province → City / Park / Route', 'cards in the Cities, Parks and Road Trips sections'],
  ['Home → Park (Banff)', 'card in the Parks section'],
  ['Home → Map, Road Trips', 'buttons in the Hero'],
  ['Back buttons', 'return to where you came from (/#wildlife, /#parks …)'],
];

// ---------- Заголовок и легенда ----------
const TOTAL_W = colX(7) + 40;
const head = [
  `<text x="${X0}" y="80" font-family="${FONT}" font-size="40" font-weight="800" fill="${C.text}">Still Wilds — Sitemap</text>`,
  `<text x="${X0}" y="116" font-family="${FONT}" font-size="16" fill="${C.muted}">8 page templates · ~190 pages · state as of Nov 2026 · (opt.) = section appears only on some pages</text>`,
];
const legX = colX(5), legY = 200;
const leg = [`<rect x="${legX}" y="${legY}" width="${W * 2 + GAP}" height="${60 + cross.length * 40}" rx="16" fill="${C.card}" stroke="${C.border}" stroke-width="1.5"/>`,
  `<text x="${legX + 20}" y="${legY + 36}" font-family="${FONT}" font-size="18" font-weight="700" fill="${C.text}">Cross-links</text>`];
cross.forEach(([a, b], i) => {
  leg.push(`<line x1="${legX + 20}" y1="${legY + 64 + i * 40}" x2="${legX + 50}" y2="${legY + 64 + i * 40}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  leg.push(`<text x="${legX + 62}" y="${legY + 60 + i * 40}" font-family="${FONT}" font-size="14" font-weight="600" fill="${C.text}">${esc(a)}</text>`);
  leg.push(`<text x="${legX + 62}" y="${legY + 78 + i * 40}" font-family="${FONT}" font-size="12" fill="${C.muted}">${esc(b)}</text>`);
});
const kX = colX(0), kY = 200;
const kinds = [['Main', C.green], ['Provinces & cities', C.blue], ['Wildlife & safety', C.orange], ['Parks', C.green], ['Trips & map', C.purple], ['Guides', C.gold]];
const key = [`<text x="${kX}" y="${kY + 18}" font-family="${FONT}" font-size="18" font-weight="700" fill="${C.text}">Colour key</text>`];
kinds.forEach(([t, c], i) => {
  key.push(`<rect x="${kX}" y="${kY + 40 + i * 30}" width="18" height="18" rx="5" fill="${c}"/>`);
  key.push(`<text x="${kX + 30}" y="${kY + 54 + i * 30}" font-family="${FONT}" font-size="14" fill="#D5DEEA">${esc(t)}</text>`);
});

const H = Y2 + cardH(15) + 80;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${TOTAL_W}" height="${H}" viewBox="0 0 ${TOTAL_W} ${H}">
<rect width="${TOTAL_W}" height="${H}" fill="${C.bg}"/>
${head.join('\n')}
${key.join('\n')}
${leg.join('\n')}
${els.join('\n')}
</svg>`;
fs.writeFileSync(out, svg);
console.log('written', out, TOTAL_W, 'x', H);
