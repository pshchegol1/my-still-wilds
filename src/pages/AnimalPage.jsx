import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  Compass,
  MapPin,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import './AnimalPage.css';

const RISK_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
};

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
function DistanceRingsDiagram() {
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
        <image href="/wildlife-frame/grizzly-icon.svg" x="-72" y="-72" width="144" height="144" />
      </g>

      {/* Подписи с ломаной выноской: сначала диагональ от края эллипса,
          затем горизонталь к тексту. */}
      <g fontFamily="Cinzel, Georgia, serif" fontWeight="700" fontSize="42">
        <polyline points="2216,199 2260,60 2200,60" fill="none" stroke={RISK_STYLES.safe.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="2210" y="60" fill={RISK_STYLES.safe.text}>100m-MINIMUM LEGAL DISTANCE</text>

        <polyline points="2006,286 2150,300 2320,300" fill="none" stroke={RISK_STYLES.caution.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="2330" y="310" fill={RISK_STYLES.caution.text}>200m — Recommended</text>

        <polyline points="1080,374 520,545 350,545" fill="none" stroke={RISK_STYLES.danger.text} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
        <text x="0" y="565" fill={RISK_STYLES.danger.text}>50m — DANGER ZONE</text>
      </g>
    </svg>
  );
}

export default function AnimalPage({ animal }) {
  const risk = RISK_STYLES[animal.level] ?? RISK_STYLES.danger;

  return (
    <div
      className="animal-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white"
      style={{ '--accent': risk.text }}
    >
      {/* ================================================= */}
      {/* ГЕРОЙ — полноэкранное видео                       */}
      {/* ================================================= */}
      <header className="relative h-[520px] w-full overflow-hidden md:h-[700px]">
        <BackgroundVideo
          src={animal.heroVideo}
          poster={animal.image}
          alt={animal.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-[#070D19]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19]/70 via-[#070D19]/10 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1180px] flex-col justify-between px-6 py-7">
            <button
              type="button"
              onClick={() => navigate('/#wildlife')}
              className="ap-outline-btn type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Wildlife
            </button>

            <div className="max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
              >
                <AlertTriangle className="h-3 w-3" />
                {animal.tag}
              </span>
              <h1 className="text-[44px] leading-[1.02] tracking-wide text-white md:text-[64px]">
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
        <div className="glass glass--sm ml-auto w-full max-w-md space-y-5 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:max-w-lg md:p-7">
          <p className="type-tag text-[11px] tracking-[0.14em] text-gray-400">Quick Facts</p>
          <div className="grid grid-cols-2 gap-4">
            {animal.quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="type-tag text-[10px] tracking-[0.1em] text-gray-500">{fact.label}</p>
                <p
                  className="type-stat mt-1.5 text-base text-white"
                  style={fact.label === 'Speed' ? { color: risk.text } : undefined}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
          <div
            className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed"
            style={{ color: risk.text, borderColor: risk.border, background: risk.bg }}
          >
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{animal.minDistanceWarning}</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-10">

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЗОНЫ БЕЗОПАСНОГО РАССТОЯНИЯ                       */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Compass}>Safe Distance</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            How Close Is <span style={{ color: risk.text }}>Too Close?</span>
          </h2>

          <div
            className="relative mx-auto w-full rounded-3xl border-2 bg-white/[0.01] p-10 md:p-16 lg:p-20"
            style={{ borderColor: risk.text }}
          >
            <DistanceRingsDiagram />
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
                  <p className="type-tag mt-2 text-[10px] tracking-[0.14em] text-gray-300">{zone.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{zone.description}</p>
                </div>
              );
            })}
          </div>
        </section>

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
            <div className="rounded-2xl border border-[#e08a4a]/25 bg-[#e08a4a]/[0.04] p-6">
              <p className="type-tag mb-5 flex items-center gap-2 text-[11px] tracking-[0.14em] text-[#e08a4a]">
                <XCircle className="h-4 w-4" />
                Never Do This
              </p>
              <ul className="space-y-4">
                {animal.neverDo.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#38a169]/25 bg-[#38a169]/[0.04] p-6">
              <p className="type-tag mb-5 flex items-center gap-2 text-[11px] tracking-[0.14em] text-[#6ee7a1]">
                <ShieldCheck className="h-4 w-4" />
                Always Do This
              </p>
              <ul className="space-y-4">
                {animal.alwaysDo.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* НИКОГДА НЕ КОРМИТЬ                                */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Ban}>Feeding — Never Feed</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            What You Must <span className="text-[#e08a4a]">Never Feed</span> A {animal.name.split(' ')[0]}
          </h2>

          <div className="flex items-start gap-3 rounded-2xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            {animal.neverFeed.warning}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {animal.neverFeed.items.map((item) => (
              <div key={item.name} className="glass glass--sm relative rounded-2xl p-4">
                <Ban className="absolute right-3 top-3 h-4 w-4 text-[#e08a4a]/70" />
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
        <section id="parks" className="space-y-7 scroll-mt-10">
          <SectionTag icon={MapPin}>National Parks</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Parks Where You Can <span style={{ color: risk.text }}>Spot {animal.name.split(' ')[0]}s</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {animal.spotParks.map((park) => (
              <div key={park.name} className="glass glass--sm rounded-2xl p-5">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <Compass className="h-4 w-4" style={{ color: risk.text }} />
                </span>
                <p className="type-tag text-[9px] tracking-[0.12em] text-gray-500">{park.province}</p>
                <p className="type-stat mt-1 text-sm text-white">{park.name}</p>
                <p className="mt-2 text-[11px] text-gray-500">{park.season}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЧТО ДЕЛАТЬ ПРИ ВСТРЕЧЕ                            */}
        {/* ================================================= */}
        <section id="safety" className="space-y-7 scroll-mt-10">
          <SectionTag icon={AlertTriangle}>If You Encounter A {animal.name.split(' ')[0]}</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Step-By-Step <span style={{ color: risk.text }}>Encounter Guide</span>
          </h2>

          <div
            className="flex flex-col items-start gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: risk.border, background: risk.bg }}
          >
            <div>
              <p className="type-tag text-[11px] tracking-[0.14em]" style={{ color: risk.text }}>
                Always Carry Bear Spray
              </p>
              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-gray-400">
                {animal.bearSprayNote}
              </p>
            </div>
            <span
              className="type-button shrink-0 rounded-full px-4 py-2 text-xs text-white"
              style={{ background: risk.solid }}
            >
              How To Use
            </span>
          </div>

          <ol className="space-y-3">
            {animal.encounterSteps.map((step, idx) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span
                  className="type-stat flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs text-white"
                  style={{ background: risk.solid }}
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
          {animal.gallery.map((src, idx) => (
            <div key={`${src}-${idx}`} className="overflow-hidden rounded-2xl">
              <img src={src} alt={`${animal.name} ${idx + 1}`} className="h-48 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </section>
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                            */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
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
