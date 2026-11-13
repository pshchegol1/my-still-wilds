import { cloneElement, useEffect, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import './PackChecklist.css';

// «Собираем рюкзак»: список, где пункты отмечают сами — кликом (или Space /
// Enter с клавиатуры). Над карточками липкий счётчик «3 / 12 packed» с
// полоской; когда отмечено всё — вспыхивает «Ready to hike». Кнопка Reset
// снимает все отметки.
//
// Отметки запоминаются в браузере (localStorage) — чтобы список не
// сбрасывался при перезагрузке. Если хранилище недоступно, просто работает
// без запоминания.
//
// Карточки рисует вызывающий код (renderCard) — компонент добавляет им
// role="checkbox", обработчики и data-checked; значок .pack-check кладётся
// внутрь карточки через <PackCheckBadge /> (см. PackChecklist.css).
const STORAGE_KEY = 'still-wilds:hikers-guide:packed';

function load(valid) {
  try {
    const raw = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    return new Set(raw.filter((key) => valid.includes(key)));
  } catch {
    return new Set();
  }
}

export default function PackChecklist({ items, renderCard, getKey = (item) => item.title, label = 'Packed' }) {
  const keys = items.map(getKey);
  const total = items.length;
  const [checked, setChecked] = useState(() => load(keys));
  const count = checked.size;

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      /* хранилище недоступно — не страшно */
    }
  }, [checked]);

  const toggle = (key) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const ready = count === total;

  return (
    <>
      <div className="pack-strip glass glass--sm" data-ready={ready} role="status">
        <span className="pack-strip__label type-tag">{label}</span>
        <span className="pack-strip__count type-stat">
          {count} / {total}
        </span>
        <span className="pack-strip__track" aria-hidden="true">
          <i style={{ transform: `scaleX(${total ? count / total : 0})` }} />
        </span>
        <span className="pack-strip__hint">{count === 0 ? 'Tap what you’ve packed' : ''}</span>
        <span className="pack-strip__ready type-tag">
          <Check className="h-3.5 w-3.5" />
          Ready to hike
        </span>
        <button
          type="button"
          className="pack-strip__reset"
          onClick={() => setChecked(new Set())}
          disabled={count === 0}
          aria-label="Clear all checkmarks"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item, i) => {
          const key = keys[i];
          const on = checked.has(key);
          return cloneElement(renderCard(item, i), {
            key,
            role: 'checkbox',
            tabIndex: 0,
            'aria-checked': on,
            'data-checked': String(on),
            onClick: () => toggle(key),
            onKeyDown: (e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle(key);
              }
            },
          });
        })}
      </div>
    </>
  );
}

// Значок-галочка в углу карточки: рисуется внутри renderCard.
export function PackCheckBadge() {
  return (
    <span className="pack-check" aria-hidden="true">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}
