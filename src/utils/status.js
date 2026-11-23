// Временная плашка у карточки («Closed until Dec 11»). Поле status в данных:
// { label, level, until: 'YYYY-MM-DD' } — после последнего дня плашка пропадает
// сама, тексты править не нужно (кроме самих данных, когда захотите).
export function activeStatus(item) {
  const st = item?.status;
  if (!st) return null;
  if (!st.until) return st;
  const end = new Date(`${st.until}T23:59:59`);
  return Date.now() <= end.getTime() ? st : null;
}
