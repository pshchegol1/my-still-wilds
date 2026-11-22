// Линии маршрутов (explorer/*.line.json — реальная геометрия дороги) — это
// почти весь вес данных маршрутов (~4 МБ). Раньше они импортировались
// статически, и открытие любого маршрута тянуло линии всех. Теперь каждая
// линия — отдельный чанк, который грузится только когда открывается карта
// именно этого маршрута (explorer.lineId = имя файла без .line.json).

const LINE_MODULES = import.meta.glob('./explorer/*.line.json', { import: 'default' });

// Один и тот же промис на линию: его ждёт React use() в RouteMap, и он же
// служит кэшем для повторного открытия. Неудачную загрузку не кэшируем.
const cache = new Map();

export function loadRouteLine(lineId) {
  let promise = cache.get(lineId);
  if (!promise) {
    const load = LINE_MODULES[`./explorer/${lineId}.line.json`];
    promise = load ? load() : Promise.reject(new Error(`Route line not found: ${lineId}`));
    promise.catch(() => cache.delete(lineId));
    cache.set(lineId, promise);
  }
  return promise;
}
