// Пилюля-заголовок секции — одна на весь сайт (раньше было 7 копий с разными
// отступами). Размеры и цвета — в .section-tag (index.css).
//
//   icon     — иконка lucide-react; или
//   iconSrc  — путь к SVG-иконке (перекрашивается в цвет текста через маску);
//   color    — цвет пилюли (текст, а обводка и фон — его полупрозрачные
//              оттенки). Без него берётся --accent страницы.
//   label    — то же, что children (для старых вызовов).
export default function SectionTag({ icon: Icon, iconSrc, color, label, children, className = '' }) {
  return (
    <span
      className={`section-tag type-tag inline-flex w-fit items-center rounded-full border ${className}`}
      style={color ? { '--tag-color': color } : undefined}
    >
      {iconSrc ? (
        <span className="icon-mask h-4 w-4 shrink-0" style={{ '--icon-src': `url('${iconSrc}')` }} aria-hidden="true" />
      ) : (
        Icon && <Icon className="h-4 w-4 shrink-0" />
      )}
      {children ?? label}
    </span>
  );
}
