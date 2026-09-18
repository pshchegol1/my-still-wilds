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
import { ON } from './on';
import { QC } from './qc';
import { MB } from './mb';
import { SK } from './sk';
import { NS } from './ns';
import { PE } from './pe';
import { YT } from './yt';
import { NL } from './nl';
import { NU } from './nu';
import { NB } from './nb';
import { NT } from './nt';

export const PROVINCE_DETAILS = {
  ab: AB,
  bc: BC,
  on: ON,
  qc: QC,
  mb: MB,
  sk: SK,
  ns: NS,
  pe: PE,
  yt: YT,
  nl: NL,
  nu: NU,
  nb: NB,
  nt: NT,
};

export function getProvinceDetail(id) {
  return PROVINCE_DETAILS[id] ?? null;
}

export function hasProvinceDetail(id) {
  return Object.hasOwn(PROVINCE_DETAILS, id);
}
