import { WILDLIFE_CATEGORIES } from '../data/animals/all-wildlife';

// Данные линейки дистанции (DistanceCard) выводятся из distanceZones
// животного — тех же зон, что показаны плашками на его странице, поэтому
// отдельных чисел заводить не нужно и они не могут разойтись.
//
// Понимает диапазоны вида '0-50M' и '100M+' (последняя зона — открытая).
// Если формат другой — возвращает null, и страница показывает прежнюю схему.
// Шкала: до удвоенной границы последней зоны ("безопасно" занимает вторую
// половину линейки).
const RANGE = /^(\d+)-(\d+)M$/i;
const OPEN = /^(\d+)M\+$/i;
const TICK_STEPS = [5, 10, 15, 20, 25, 30, 50, 60, 100, 150, 200];

export function buildRuler(zones) {
  if (!Array.isArray(zones) || zones.length < 2) return null;
  const parsed = [];
  for (let i = 0; i < zones.length; i += 1) {
    const text = String(zones[i].range).trim();
    const closed = RANGE.exec(text);
    const open = OPEN.exec(text);
    const last = i === zones.length - 1;
    if (!last && closed) parsed.push({ from: Number(closed[1]), to: Number(closed[2]), level: zones[i].level });
    else if (last && open) parsed.push({ from: Number(open[1]), to: null, level: zones[i].level });
    else return null;
  }
  // зоны должны идти встык, начиная с нуля
  if (parsed[0].from !== 0) return null;
  for (let i = 1; i < parsed.length; i += 1) {
    if (parsed[i].from !== parsed[i - 1].to) return null;
  }

  const safeFrom = parsed[parsed.length - 1].from;
  const scaleMax = safeFrom * 2;
  parsed[parsed.length - 1].to = scaleMax;

  const step = TICK_STEPS.find((s) => scaleMax % s === 0 && scaleMax / s <= 5) ?? scaleMax;
  const ticks = [];
  for (let t = 0; t <= scaleMax; t += step) ticks.push(t);

  return { meters: safeFrom, scaleMax, ticks, zones: parsed };
}

// Регионы — те же, что на карточке животного в каталоге /wildlife.
export function getAnimalLocation(slug) {
  for (const category of Object.values(WILDLIFE_CATEGORIES)) {
    const hit = category.animals.find((a) => a.slug === slug);
    if (hit) return hit.location;
  }
  return null;
}
