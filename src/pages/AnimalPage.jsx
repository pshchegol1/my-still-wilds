import { useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  Ban,
  Calendar,
  Camera,
  Car,
  Compass,
  DoorOpen,
  Ear,
  Eye,
  EyeOff,
  Fish,
  Flame,
  Lightbulb,
  MapPin,
  Moon,
  Footprints,
  PawPrint,
  Phone,
  Scale,
  Skull,
  ShieldCheck,
  SprayCan,
  Sun,
  Trash2,
  Users,
  Volume2,
  Wind,
  XCircle,
} from 'lucide-react';
import { navigate, getBackPath } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import './AnimalPage.css';

const RISK_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
};

// Lucide не содержит "бегущего человека" — реальная иконка Phosphor
// (person-simple-run) через icon-mask, поэтому красится в currentColor
// вместо зашитого в файл #C8622A, как обычная lucide-иконка по API.
function RunningFigure({ className }) {
  return (
    <span
      className={`icon-mask inline-block ${className}`}
      style={{ '--icon-src': "url('/icons/ph_person-simple-run-light.svg')" }}
      aria-hidden="true"
    />
  );
}

// Та же техника icon-mask для набора Phosphor-иконок, присланных под
// страницу Gray Wolf (собака, фонарик-луна, урна, глаз, мегафон, трое
// людей) — фабрика вместо повторения RunningFigure шесть раз подряд.
function maskIcon(src) {
  return function MaskIcon({ className }) {
    return (
      <span
        className={`icon-mask inline-block ${className}`}
        style={{ '--icon-src': `url('${src}')` }}
        aria-hidden="true"
      />
    );
  };
}

const DogIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_dog-thin.svg');
const NightIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_moon-light.svg');
const TrashIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_trash-light.svg');
const EyeContactIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_eye-light.svg');
const MegaphoneIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_megaphone-light.svg');
const UsersThreeIcon = maskIcon('/wildlife/Gray Wolf/Icons/ph_users-three-light.svg');

// Иконки для пунктов "Never Do This" / "Always Do This" — имя строкой
// в данных животного, компонент здесь. Ban — запасной вариант, если
// для пункта не указана своя иконка.
const RULE_ITEM_ICONS = {
  RunningFigure, Footprints, Camera, Moon, Skull, Trash2, Volume2, SprayCan, Users, EyeOff, Eye, DoorOpen, PawPrint, XCircle,
  DogIcon, NightIcon, TrashIcon, EyeContactIcon, MegaphoneIcon, UsersThreeIcon,
  Calendar, Car, Fish, Phone, Sun, Wind,
  ArrowDown, Ear, Flame,
  AlertTriangle, Compass, ShieldCheck,
};

// Детерминированное поле звёзд для animal.starryBackground (сетка +
// псевдослучайный джиттер по индексу, без Math.random — одинаковый
// результат на сервере и клиенте). Та же техника, что PARK_STARS в
// ParksPage.jsx, но position:fixed на всю страницу, а не только герой.
const STAR_COLS = 10;
const STAR_ROWS = 15;
const PAGE_STARS = Array.from({ length: STAR_COLS * STAR_ROWS }, (_, i) => {
  const col = i % STAR_COLS;
  const row = Math.floor(i / STAR_COLS);
  const jitterX = ((i * 37 + 13) % 100) / 100 - 0.5;
  const jitterY = ((i * 73 + 29) % 100) / 100 - 0.5;
  const cellW = 100 / STAR_COLS;
  const cellH = 100 / STAR_ROWS;
  return {
    id: i,
    x: col * cellW + cellW / 2 + jitterX * cellW * 0.8,
    y: row * cellH + cellH / 2 + jitterY * cellH * 0.8,
    size: ((i * 17) % 15) / 10 + 0.3,
    duration: ((i * 19) % 40) / 10 + 3,
    delay: ((i * 23) % 60) / 10,
    opacity: ((i * 31) % 50) / 100 + 0.15,
  };
});

function SectionTag({ icon: Icon, children }) {
  return (
    <span className="ap-tag section-tag type-tag inline-flex items-center rounded-full border">
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

// Схема концентрических зон — встроенный SVG (не файл-картинка), тот же
// viewBox 2796x660, что в исходнике, с диагональными выносками к
// подписям и медведем в круглой рамке вместо нарисованного силуэта.
// Цвета — те же RISK_STYLES.safe/caution/danger, что и везде на странице.
function DistanceRingsDiagram({
  centerIcon = '/wildlife-frame/grizzly-icon.svg',
  // Подписи колец переопределяются через animal.distanceLabels — у
  // большинства животных дистанции совпадают с дефолтом ниже, но,
  // например, у белого медведя другие пороги (300м/100м/50м).
  labels = {
    outer: '100m-MINIMUM LEGAL DISTANCE',
    mid: '200m — Recommended',
    inner: '50m — DANGER ZONE',
  },
}) {
  const cx = 1400;
  const cy = 330;

  return (
    <svg viewBox="0 0 2796 660" className="mx-auto w-full" style={{ overflow: 'visible' }}>
      {/* Кольца — большая закрашена целиком, следующая рисуется поверх
          ее части, поэтому видимое кольцо получается как разница между
          соседними эллипсами, без clip-path. */}
      <ellipse cx={cx} cy={cy} rx="900" ry="310" fill={RISK_STYLES.safe.bg} stroke={RISK_STYLES.safe.text} strokeWidth="2.5" strokeDasharray="1 10" strokeLinecap="round" />
      <ellipse cx={cx} cy={cy} rx="620" ry="210" fill={RISK_STYLES.caution.bg} stroke={RISK_STYLES.caution.text} strokeWidth="2.5" strokeDasharray="1 10" strokeLinecap="round" />
      <ellipse cx={cx} cy={cy} rx="340" ry="130" fill={RISK_STYLES.danger.bg} stroke={RISK_STYLES.danger.text} strokeWidth="2.5" strokeDasharray="1 10" strokeLinecap="round" />

      {/* Медведь в круглой рамке по центру — присланная иллюстрация
          вместо нарисованного силуэта, рамка остается тем же кругом */}
      <g transform={`translate(${cx}, ${cy})`}>
        <circle r="100" stroke={RISK_STYLES.danger.text} strokeWidth="3" fill="none" />
        <image href={centerIcon} x="-72" y="-72" width="144" height="144" />
      </g>

      {/* Подписи с ломаной выноской: сначала диагональ от края эллипса,
          затем горизонталь к тексту. */}
      <g fontFamily="Cinzel, Georgia, serif" fontWeight="700" fontSize="42">
        <polyline points="2216,199 2260,60 2200,60" fill="none" stroke={RISK_STYLES.safe.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="2210" y="60" fill={RISK_STYLES.safe.text}>{labels.outer}</text>

        <polyline points="2006,286 2150,300 2320,300" fill="none" stroke={RISK_STYLES.caution.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="2330" y="310" fill={RISK_STYLES.caution.text}>{labels.mid}</text>

        <polyline points="1080,374 520,545 350,545" fill="none" stroke={RISK_STYLES.danger.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="0" y="565" fill={RISK_STYLES.danger.text}>{labels.inner}</text>
      </g>
    </svg>
  );
}

export default function AnimalPage({ animal }) {
  const risk = RISK_STYLES[animal.level] ?? RISK_STYLES.danger;
  // Quick Facts обычно красится в цвет риска (оранжевый/золотой), но
  // animal.quickFactsAccent позволяет задать свой акцент — например,
  // синий для Gray Wolf, чтобы не спорить с остальными синими секциями.
  const factsAccent = animal.quickFactsAccent ?? { text: risk.text, border: risk.border, bg: risk.bg, rgb: null };
  // Для большинства животных первое слово названия — это и есть бытовое
  // название ("Grizzly" Bear, "Cougar"), но не для "Gray Wolf" и подобных
  // — там нужно последнее слово ("Wolf"). shortName в данных животного
  // переопределяет это на случай исключений в обе стороны.
  const shortName = animal.shortName ?? animal.name.split(' ').slice(-1)[0];
  // Простое "+s" ломается на неправильных множественных ("Wolf" -> "Wolfs"
  // вместо "Wolves") — animal.shortNamePlural переопределяет для таких случаев.
  const shortNamePlural = animal.shortNamePlural ?? `${shortName}s`;
  // 'video' | 'image' — что сейчас реально показывает BackgroundVideo в
  // шапке. Нужно, чтобы heroCredit (подпись автора ФОТО) не висела поверх
  // проигрывающегося видео, к которому она не относится.
  const [heroMode, setHeroMode] = useState(animal.heroVideo ? 'video' : 'image');

  return (
    <div
      className="animal-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white"
      style={{ '--accent': risk.text }}
    >
      {/* Мерцающие звёзды на всю страницу (опционально) — видео/фото в
          шапке остаются поверх как обычно, звёзды видны в секциях ниже,
          где раньше был просто сплошной тёмный фон. Первый child в DOM,
          без z-index — значит рисуется под всем, что идёт дальше. */}
      {animal.starryBackground && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {PAGE_STARS.map((star) => (
            <div
              key={star.id}
              className="ap-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `apTwinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* ================================================= */}
      {/* ГЕРОЙ — полноэкранное видео                       */}
      {/* ================================================= */}
      <header className="relative h-[520px] w-full overflow-hidden md:h-[700px]">
        <BackgroundVideo
          src={animal.heroVideo}
          poster={animal.image}
          alt={animal.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: animal.heroObjectPosition ?? 'center',
            // Контейнер шапки обычно шире кадра видео (16:9), поэтому
            // object-position по X визуально ничего не двигает — слева/
            // справа обрезать нечего. heroZoomPan добавляет масштаб +
            // сдвиг через transform, когда нужно всё же сместить кадр
            // по горизонтали.
            ...(animal.heroZoomPan ? { transform: animal.heroZoomPan, transformOrigin: 'center' } : null),
            // Та же именованная View Transition, что карточки животных
            // ставят на свою картинку перед переходом (см.
            // navigateToAnimal в router.js) — фото карточки плавно
            // "дорастает" в этот герой вместо плоской подмены страницы.
            viewTransitionName: 'animal-hero',
          }}
          onModeChange={setHeroMode}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/70 via-[#070D19]/10 to-transparent" />

        {/* Подпись автора фото — обязательна для лицензий CC BY/CC BY-SA,
            но только когда реально показывается фото, а не видео поверх
            него (видео — отдельный файл, часто без требования атрибуции). */}
        {(heroMode === 'image' ? animal.heroCredit : animal.heroVideoCredit) && (
          <p className="absolute right-5 top-7 z-10 max-w-[280px] rounded-lg bg-[#070D19]/45 px-2.5 py-1 text-right text-[10px] leading-snug text-white/70 backdrop-blur-sm">
            {heroMode === 'image' ? animal.heroCredit : animal.heroVideoCredit}
          </p>
        )}

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate(getBackPath('/wildlife'))}
              className="ap-outline-btn type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <div className="max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
              >
                <AlertTriangle className="h-3 w-3" />
                {animal.tag}
              </span>
              {/* animal.heroTitleSize — для длинных имён (White-Tailed Deer),
                  которые на 64px заезжают под панель Quick Facts. */}
              <h1
                className="text-[44px] leading-[1.02] tracking-wide text-white md:text-[64px]"
                style={animal.heroTitleSize ? { fontSize: animal.heroTitleSize } : undefined}
              >
                {animal.name}
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">{animal.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {animal.actions.map((action, idx) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      idx === 0
                        ? 'type-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5'
                        : 'ap-outline-btn type-button inline-flex items-center gap-2 rounded-full border border-white/80 bg-[#070D19]/50 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-y-0.5'
                    }
                    style={idx === 0 ? { background: risk.solid } : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Плавающая панель Quick Facts — наполовину поверх видео */}
      <div className="relative z-10 mx-auto -mt-48 max-w-[1180px] px-6 md:-mt-64">
        <div
          className="glass glass--sm ml-auto w-full max-w-md space-y-5 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:max-w-lg md:p-7"
          style={{
            ...(factsAccent.rgb ? { '--glass-tint': factsAccent.rgb } : null),
            // Сдвигает панель правее за счёт отрицательного margin —
            // по умолчанию 0 (как было), переопределяется в данных
            // животного (animal.quickFactsShiftRight).
            marginRight: animal.quickFactsShiftRight ?? 0,
          }}
        >
          <p className="type-tag text-[11px] tracking-[0.14em] text-gray-400">Quick Facts</p>
          <div className="grid grid-cols-2 gap-4">
            {animal.quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="type-tag text-[10px] tracking-[0.1em] text-gray-500">{fact.label}</p>
                <p
                  className="type-stat mt-1.5 text-base text-white"
                  style={fact.label === 'Speed' ? { color: factsAccent.text } : undefined}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
          <div
            className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed"
            style={{ color: factsAccent.text, borderColor: factsAccent.border, background: factsAccent.bg }}
          >
            <AlertTriangle className="h-4 w-4 shrink-0" />
            {/* Строка (как у остальных животных) или {title, text} —
                жирный заголовок строкой выше, как в карточке "Most
                Dangerous Bear" у белого медведя. */}
            {typeof animal.minDistanceWarning === 'string' ? (
              <span>{animal.minDistanceWarning}</span>
            ) : (
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wide">{animal.minDistanceWarning.title}</span>
                <span className="mt-0.5 block">{animal.minDistanceWarning.text}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-10">

        {/* ================================================= */}
        {/* ПОВЕДЕНИЕ (например, стая у волка) — опционально   */}
        {/* ================================================= */}
        {animal.behaviorSection && (
          <>
            <section className="space-y-7">
              <SectionTag icon={Users}>{animal.behaviorSection.tag}</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                {animal.behaviorSection.title}{' '}
                <span style={{ color: animal.behaviorSection.accent }}>{animal.behaviorSection.highlight}</span>
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {animal.behaviorSection.cards.map((card) => {
                  const Icon = RULE_ITEM_ICONS[card.icon] ?? Users;
                  return (
                    <div key={card.title} className="glass glass--sm rounded-2xl p-6 text-center" style={{ '--glass-tint': '72, 140, 220' }}>
                      <span
                        className="mx-auto mb-4 flex h-36 w-36 items-center justify-center"
                        style={{ color: animal.behaviorSection.accent }}
                      >
                        {card.image ? (
                          <img src={card.image} alt="" className="h-full w-full object-contain p-2.5" />
                        ) : (
                          <Icon className="h-16 w-16" />
                        )}
                      </span>
                      <p className="type-stat text-sm text-white">{card.title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

          </>
        )}

        {/* ================================================= */}
        {/* ОПАСНОСТЬ НА ДОРОГЕ (например, Moose) — опционально */}
        {/* Предупреждение + 3 простые карточки без иконок      */}
        {/* ================================================= */}
        {animal.hazardSection && (
          <>
            <section className="space-y-7">
              <SectionTag icon={Car}>{animal.hazardSection.tag}</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                {animal.hazardSection.heading.lead}{' '}
                <span style={{ color: risk.text }}>{animal.hazardSection.heading.highlight}</span>
              </h2>

              <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <div>
                  <p className="type-stat" style={{ color: risk.text }}>{animal.hazardSection.calloutTitle}</p>
                  <p className="mt-1.5 text-gray-400">{animal.hazardSection.calloutText}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {animal.hazardSection.tips.map((tip) => (
                  <div key={tip.title} className="glass glass--sm rounded-2xl p-5 text-center">
                    <p className="type-stat text-sm text-white">{tip.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{tip.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ================================================= */}
        {/* СРАВНЕНИЕ ВИДОВ (например, Black Bear vs Grizzly) —*/}
        {/* опционально                                       */}
        {/* ================================================= */}
        {animal.comparisonSection && (
          <>
            <section className="space-y-7">
              <SectionTag icon={Scale}>{animal.comparisonSection.tag}</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                {animal.comparisonSection.title}
                <span style={{ color: risk.text }}>{animal.comparisonSection.highlight}</span>
                {animal.comparisonSection.suffix}
              </h2>

              <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                {animal.comparisonSection.warning}
              </div>

              {(() => {
                const renderSide = (side) => {
                  const badgeStyle = RISK_STYLES[side.actionLevel] ?? RISK_STYLES.danger;
                  return (
                    <div className="glass glass--sm relative overflow-hidden rounded-2xl p-6" style={{ minHeight: '19rem' }}>
                      {/* Фото — фон карточки, а не отдельный блок сверху: растушевано
                          слева направо в тон карточки, чтобы строки читались поверх. */}
                      <div
                        className="pointer-events-none absolute inset-y-0 flex w-[60%] items-center justify-center py-8"
                        style={{ right: side.imageOffset ?? '4%' }}
                      >
                        <img
                          src={side.image}
                          alt={side.name}
                          className="h-full w-full object-cover object-center opacity-95"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1424] via-[#0b1424]/60 to-transparent" />

                      <div className="relative z-10">
                        <p className="type-stat mb-4 text-lg text-white">{side.name}</p>
                        <ul>
                          {side.rows.map((row, idx) => (
                            <li
                              key={row.label}
                              className={`flex items-center justify-between gap-3 py-2 text-xs ${idx > 0 ? 'border-t border-white/10' : ''}`}
                            >
                              <span className="text-gray-400">{row.label}</span>
                              <span className="text-right font-semibold" style={{ color: row.valueColor ?? '#fff' }}>{row.value}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs">
                          <span className="text-gray-400">If it attacks</span>
                          <span
                            className="text-[11px] font-bold uppercase tracking-wide"
                            style={{ color: badgeStyle.text }}
                          >
                            {side.action}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                };
                return (
                  <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
                    {renderSide(animal.comparisonSection.left)}
                    <p className="type-stat mx-auto hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#070D19] text-xs text-gray-400 lg:flex">
                      VS
                    </p>
                    {renderSide(animal.comparisonSection.right)}
                  </div>
                );
              })()}
            </section>
          </>
        )}

        {/* ================================================= */}
        {/* ЗОНЫ БЕЗОПАСНОГО РАССТОЯНИЯ                       */}
        {/* Весь раздел только для опасных/осторожных — для    */}
        {/* level: 'safe' (Caribou, White-Tailed Deer...) его  */}
        {/* нет вообще.                                        */}
        {/* ================================================= */}
        {animal.level !== 'safe' && (
        <>
        <hr className="border-white/10" />

        <section className="space-y-7">
          <SectionTag icon={Compass}>Safe Distance</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            How Close Is <span style={{ color: risk.text }}>Too Close?</span>
          </h2>

          <div
            className="relative mx-auto w-full rounded-3xl border-2 bg-white/[0.01] p-10 md:p-16 lg:p-20"
            style={{ borderColor: risk.text }}
          >
            <DistanceRingsDiagram centerIcon={animal.distanceIcon} labels={animal.distanceLabels} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {animal.distanceZones.map((zone) => {
              const style = RISK_STYLES[zone.level] ?? RISK_STYLES.danger;
              return (
                <div
                  key={zone.range}
                  className="glass glass--sm rounded-2xl p-5 text-center"
                  style={{ '--glass-tint': zone.level === 'safe' ? '56, 161, 105' : zone.level === 'caution' ? '224, 184, 74' : '224, 138, 74' }}
                >
                  <p className="type-stat text-2xl" style={{ color: style.text }}>{zone.range}</p>
                  <p className="type-tag mt-2 text-[10px] tracking-[0.14em]" style={{ color: style.text }}>{zone.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{zone.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        </>
        )}

        {/* ================================================= */}
        {/* ПРИЗНАКИ АТАКИ (например, Moose) — опционально     */}
        {/* ================================================= */}
        {animal.warningSigns && (
          <section
            className="space-y-6 rounded-3xl border p-7"
            style={{ borderColor: RISK_STYLES.caution.border, background: 'rgba(224,184,74,0.04)' }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold" style={{ color: RISK_STYLES.caution.text }}>
              <AlertTriangle className="h-5 w-5 shrink-0" />
              {animal.warningSigns.title}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {animal.warningSigns.items.map((item) => {
                const Icon = RULE_ITEM_ICONS[item.icon] ?? AlertTriangle;
                return (
                  <div
                    key={item.title}
                    className="glass glass--sm rounded-2xl p-4 text-center"
                    style={{ '--glass-tint': '224, 184, 74' }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt=""
                        className="mx-auto mb-3 h-24 w-24 rounded-full border-2 object-cover"
                        style={{ borderColor: RISK_STYLES.caution.border }}
                      />
                    ) : (
                      <span
                        className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border-2"
                        style={{ borderColor: RISK_STYLES.caution.border, color: RISK_STYLES.caution.text }}
                      >
                        <Icon className="h-10 w-10" />
                      </span>
                    )}
                    <p className="type-stat text-xs text-white">{item.title}</p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* НИКОГДА / ВСЕГДА                                  */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={ShieldCheck}>Safety Rules</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            What To <span className="text-[#e08a4a]">Never</span> Do &amp; What{' '}
            <span className="text-[#6ee7a1]">You Should</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="glass glass--ember rounded-2xl p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e08a4a]/40 bg-[#e08a4a]/15 text-[#e08a4a]">
                  <XCircle className="h-6 w-6" />
                </span>
                <p className="text-2xl tracking-wide text-[#e08a4a] md:text-[28px]" style={{ fontFamily: "'Cinzel', Georgia, serif", fontWeight: 600 }}>Never Do This</p>
              </div>
              <ul>
                {animal.neverDo.map((item, idx) => {
                  const Icon = RULE_ITEM_ICONS[item.icon] ?? Ban;
                  return (
                    <li
                      key={item.title}
                      className={`flex items-start gap-4 py-4 ${idx > 0 ? 'border-t border-white/10' : ''}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e08a4a]/35 bg-[#e08a4a]/15 text-[#e08a4a]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-400">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="glass glass--forest rounded-2xl p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#38a169]/40 bg-[#38a169]/15 text-[#6ee7a1]">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <p className="text-2xl tracking-wide text-[#6ee7a1] md:text-[28px]" style={{ fontFamily: "'Cinzel', Georgia, serif", fontWeight: 600 }}>Always Do This</p>
              </div>
              <ul>
                {animal.alwaysDo.map((item, idx) => {
                  const Icon = RULE_ITEM_ICONS[item.icon] ?? ShieldCheck;
                  return (
                    <li
                      key={item.title}
                      className={`flex items-start gap-4 py-4 ${idx > 0 ? 'border-t border-white/10' : ''}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#38a169]/35 bg-[#38a169]/15 text-[#6ee7a1]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-400">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* НИКОГДА НЕ КОРМИТЬ                                */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Ban}>{animal.neverFeed.tag ?? 'Feeding — Never Feed'}</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            What You Must <span className="text-[#e08a4a]">Never Feed</span> A {shortName}
          </h2>

          <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            {animal.neverFeed.warning}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {animal.neverFeed.items.map((item) => (
              <div
                key={item.name}
                className="glass glass--sm relative flex flex-col items-center rounded-2xl p-4 text-center"
                style={factsAccent.rgb ? { '--glass-tint': factsAccent.rgb } : undefined}
              >
                <Ban
                  className={`absolute right-3 top-3 h-4 w-4 ${factsAccent.rgb ? '' : 'text-[#e08a4a]/70'}`}
                  style={factsAccent.rgb ? { color: factsAccent.text } : undefined}
                />
                {item.icon.startsWith('/') ? (
                  <img src={item.icon} alt="" className="mb-2 h-9 w-9" />
                ) : (
                  // Нет готовой PNG-иконки под этот пункт — символ эмодзи
                  // текстом того же размера, вместо файла картинки.
                  <span className="mb-2 flex h-9 w-9 items-center justify-center text-2xl leading-none">{item.icon}</span>
                )}
                <p className="type-stat text-xs text-white">{item.name}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ПАРКИ                                             */}
        {/* ================================================= */}
        <section id="parks" className="space-y-7 scroll-mt-10" style={{ '--accent': animal.parksTagAccent ?? RISK_STYLES.safe.text }}>
          <SectionTag icon={MapPin}>{animal.parksSectionTag ?? 'National Parks'}</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            {animal.parksSectionHeading?.lead ?? 'Parks Where You Can'}{' '}
            <span style={{ color: animal.parksTagAccent ?? RISK_STYLES.safe.text }}>
              {animal.parksSectionHeading?.highlight ?? `Spot ${shortNamePlural}`}
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {animal.spotParks.map((park) => {
              // park.level — явный цвет точки (safe/caution/danger), если
              // задан; иначе как раньше угадываем по первому слову season.
              const dotColor = park.level
                ? (RISK_STYLES[park.level] ?? RISK_STYLES.safe).text
                : park.season.startsWith('High')
                ? RISK_STYLES.danger.text
                : park.season.startsWith('Moderate')
                ? RISK_STYLES.caution.text
                : RISK_STYLES.safe.text;
              return (
              <div
                key={park.name}
                className="glass glass--sm rounded-2xl p-5"
                style={factsAccent.rgb ? { '--glass-tint': factsAccent.rgb } : undefined}
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <span
                    className="icon-mask h-4 w-4"
                    style={{ '--icon-src': "url('/icons/icon-mountains.svg')", backgroundColor: animal.parksTagAccent ?? RISK_STYLES.safe.text }}
                    aria-hidden="true"
                  />
                </span>
                <p className="type-tag text-[9px] tracking-[0.12em]" style={{ color: animal.parksTagAccent ?? RISK_STYLES.safe.text }}>{park.province}</p>
                <p className="type-stat mt-1 text-sm text-white">{park.name}</p>
                <p className="mt-2 flex items-center gap-2 text-[11px] text-gray-500">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: dotColor, boxShadow: `0 0 6px 1px ${dotColor}` }}
                  />
                  {park.season}
                </p>
              </div>
              );
            })}
          </div>

          {/* Информационная плашка (опционально) — например, номер
              Polar Bear Alert в Черчилле. Синий акцент, в отличие от
              золотой tip-плашки у транспорта/налогов на City-страницах. */}
          {animal.infoCallout && (
            <div className="flex items-start gap-3 rounded-2xl border border-[#488CDC]/25 bg-[#488CDC]/[0.06] p-5 text-sm leading-relaxed text-gray-300">
              <Lightbulb className="h-5 w-5 shrink-0" style={{ color: '#488CDC' }} />
              <p>
                <span className="type-stat" style={{ color: '#488CDC' }}>{animal.infoCallout.title}: </span>
                {animal.infoCallout.text}
              </p>
            </div>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЧТО ДЕЛАТЬ ПРИ ВСТРЕЧЕ                            */}
        {/* ================================================= */}
        <section id="safety" className="space-y-7 scroll-mt-10">
          <SectionTag icon={AlertTriangle}>
            If You Encounter {/^[AEIOU]/i.test(shortName) ? 'An' : 'A'} {shortName}
          </SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Step-By-Step <span style={{ color: risk.text }}>Encounter Guide</span>
          </h2>

          {animal.bearSprayNote && (
            <div className="glass glass--sm glass--ember flex flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                {animal.bearSprayImage2 ? (
                  // Два изображения в одном квадрате: ружьё по диагонали
                  // на фоне, баллончик спрея меньше и ближе поверх него
                  // снизу — как на референсе, а не раздельными иконками.
                  <span className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <img
                      src={animal.bearSprayImage2}
                      alt="Firearm"
                      className="absolute inset-0 h-full w-full object-contain p-2.5"
                    />
                    <img
                      src={animal.bearSprayImage ?? '/wildlife/bear-spray.png'}
                      alt="Bear spray canister"
                      className="absolute bottom-1.5 right-[16%] h-[52%] w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                    />
                  </span>
                ) : (
                  <img src={animal.bearSprayImage ?? '/wildlife/bear-spray.png'} alt="Bear spray canister" className="h-20 w-20 shrink-0 object-contain" />
                )}
                <div className="min-w-0">
                  {/* fontSize инлайном: класс .type-tag задает font-size
                      10px через шорткод "font", он перебивает утилиты
                      Tailwind text-4xl/text-6xl по порядку в CSS — только
                      инлайн-стиль гарантированно выигрывает. */}
                  <p
                    className="type-tag font-black tracking-[0.14em]"
                    style={{ color: risk.text, textShadow: `0 0 12px ${risk.text}, 0 0 28px ${risk.solid}`, fontSize: 'clamp(0.9rem, 0.8rem + 0.3vw, 1.125rem)' }}
                  >
                    {animal.bearSprayTitle ?? 'Always Carry Bear Spray'}
                  </p>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-400">
                    {animal.bearSprayNote}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/bear-spray')}
                className="type-button shrink-0 rounded-full px-4 py-2 text-xs text-white transition-transform hover:-translate-y-0.5"
                style={{ background: risk.solid }}
              >
                {animal.bearSprayButtonLabel ?? 'How To Use'}
              </button>
            </div>
          )}

          <ol className="space-y-3">
            {animal.encounterSteps.map((step, idx) => (
              <li
                key={step.title}
                className="glass glass--sm glass--ember flex gap-4 rounded-2xl p-5"
                style={factsAccent.rgb ? { '--glass-tint': factsAccent.rgb } : undefined}
              >
                <span
                  className="type-stat relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base text-white ring-2 ring-white/15"
                  style={{
                    background: `linear-gradient(145deg, ${factsAccent.text}, ${factsAccent.rgb ? `rgb(${factsAccent.rgb})` : risk.solid})`,
                    boxShadow: `0 0 16px 2px ${factsAccent.rgb ? `rgba(${factsAccent.rgb},0.4)` : `${risk.solid}66`}`,
                  }}
                >
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ================================================= */}
        {/* ГАЛЕРЕЯ                                           */}
        {/* ================================================= */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {animal.gallery.map((item, idx) => {
            // Элемент галереи — либо просто путь к файлу (как у остальных
            // животных), либо {src, credit}, когда лицензия фото требует
            // указания автора (CC BY / CC BY-SA).
            const src = typeof item === 'string' ? item : item.src;
            const credit = typeof item === 'string' ? null : item.credit;
            return (
              <div key={`${src}-${idx}`} className="relative overflow-hidden rounded-2xl">
                <img src={src} alt={`${animal.name} ${idx + 1}`} className="h-48 w-full object-cover" loading="lazy" />
                {credit && (
                  <p className="absolute bottom-2 right-2 max-w-[90%] rounded bg-[#070D19]/55 px-2 py-0.5 text-right text-[9px] leading-snug text-white/70 backdrop-blur-sm">
                    {credit}
                  </p>
                )}
              </div>
            );
          })}
        </section>
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                            */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-compact.svg" alt="Still Wilds" className="w-[180px]" />
          <p>© 2026 StillWilds.ca · Data from Parks Canada</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: risk.text }} />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
