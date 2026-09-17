// Реестр страниц провинций.
//
// Как добавить провинцию:
//   1. Создать файл с кодом провинции — src/data/provinces/<id>.js,
//      где <id> совпадает с id из PROVINCES_DATA (mockData.js).
//      Например: Alberta -> ab.js, Ontario -> on.js, Quebec -> qc.js.
//   2. Скопировать структуру из bc.js (British Columbia) — это эталон.
//   3. Импортировать файл и добавить его в PROVINCE_DETAILS ниже.
//
// Карточка провинции на главной автоматически станет ссылкой на
// /province/<id>, как только запись появится в реестре.

import { AB } from './ab';
import { BC } from './bc';

export const PROVINCE_DETAILS = {
  ab: AB,
  bc: BC,
};

export function getProvinceDetail(id) {
  return PROVINCE_DETAILS[id] ?? null;
}

export function hasProvinceDetail(id) {
  return Object.hasOwn(PROVINCE_DETAILS, id);
}
