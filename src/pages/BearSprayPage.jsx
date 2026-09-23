import {
  ArrowLeft,
  ArrowDownToLine,
  AlertTriangle,
  Baby,
  Bug,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Footprints,
  Package,
  PlayCircle,
  Plane,
  Ruler,
  ShieldCheck,
  SprayCan,
  Target,
  Tent,
  Thermometer,
  Timer,
  Unlock,
  XCircle,
} from 'lucide-react';
import { navigate } from '../router';
import { BEAR_SPRAY } from '../data/bearSpray';
import './BearSprayPage.css';

// Общая палитра для акцентов на странице — те же тона, что и на
// странице животного (RISK_STYLES), плюс лед/песок для сравнительной
// диаграммы, чтобы полосы не сливались с оранжевым/зеленым.
const COLORS = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)', glass: 'glass--forest' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)', glass: 'glass--sand' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)', glass: 'glass--ember' },
  ice: { text: '#8fbdf0', solid: '#4a88cf', border: 'rgba(74,136,207,0.45)', bg: 'rgba(74,136,207,0.12)', glass: 'glass--ice' },
  sand: { text: '#d8c6a0', solid: '#c6ad7a', border: 'rgba(198,173,122,0.45)', bg: 'rgba(198,173,122,0.12)', glass: 'glass--sand' },
};

const STEP_ICONS = { Unlock, Ruler, ArrowDownToLine, SprayCan, Footprints };
const MISTAKE_ICONS = { Tent, Bug, Plane, Baby };
const STORAGE_ICONS = { Thermometer, CalendarClock, ClipboardCheck };
const SPEC_ICONS = { Target, Timer, CheckCircle2, Thermometer, Calendar, Package };

function SectionTag({ icon: Icon, color, children }) {
  return (
    <span
      className="section-tag type-tag inline-flex w-fit items-center rounded-full border"
      style={{ color, borderColor: `${color}80`, background: `${color}14` }}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </span>
  );
}

export default function BearSprayPage() {
  const { hero, effectivenessStats, effectivenessSource, steps, windWarning, video, carryRight, comparison, mistakes, storage, products, emergency } = BEAR_SPRAY;

  return (
    <div className="bear-spray-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      {/* ================================================= */}
      {/* HERO                                              */}
      {/* ================================================= */}
      <section className="bs-hero relative w-full overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col gap-10 px-6 py-10 md:py-14">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <SectionTag icon={ShieldCheck} color={COLORS.danger.text}>{hero.tag}</SectionTag>
              <h1 className="text-[44px] leading-[1.02] tracking-wide text-white md:text-[60px]">
                {hero.title}
              </h1>
              <p className="type-tag text-[11px] tracking-[0.14em]" style={{ color: COLORS.danger.text }}>{hero.subtitle}</p>
              <p className="text-sm leading-relaxed text-gray-300">{hero.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="#steps"
                  className="type-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5"
                  style={{ background: COLORS.danger.solid }}
                >
                  How To Use
                </a>
                <a
                  href="#buying-guide"
                  className="type-button inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/50"
                >
                  Buying Guide
                </a>
              </div>
            </div>

            <img
              src="/wildlife/bear-spray-icon.svg"
              alt="Bear spray canister"
              className="mx-auto h-80 w-80 shrink-0 object-contain drop-shadow-[0_0_40px_rgba(217,107,50,0.35)] md:h-[26rem] md:w-[26rem]"
            />

            <div className="glass glass--sm w-full shrink-0 rounded-2xl p-4 md:w-72">
              <p className="type-display mb-2 text-sm text-white">Key Specifications</p>
              <ul>
                {hero.specs.map((spec, idx) => {
                  const Icon = SPEC_ICONS[spec.icon];
                  const c = COLORS[spec.color];
                  return (
                    <li
                      key={spec.label}
                      className={`flex items-center gap-2.5 py-1.5 ${idx > 0 ? 'border-t border-white/10' : ''}`}
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{ background: c.bg, color: c.text }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.1em] text-gray-400">{spec.label}</p>
                        <p className="type-stat text-sm" style={{ color: c.text }}>{spec.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1180px] space-y-16 px-6 py-14">

        {/* ================================================= */}
        {/* ПОЧЕМУ РАБОТАЕТ                                   */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={ShieldCheck} color={COLORS.safe.text}>Why Bear Spray Works</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            More Effective Than <span style={{ color: COLORS.danger.text }}>Any Firearm</span>
          </h2>

          <div className="glass glass--sm glass--forest grid grid-cols-1 gap-6 rounded-2xl p-8 sm:grid-cols-3">
            {effectivenessStats.map((stat) => {
              const c = COLORS[stat.color];
              return (
                <div key={stat.label} className="space-y-2 text-center">
                  <p className="type-stat text-5xl" style={{ color: c.text }}>{stat.value}</p>
                  <p className="text-[11px] uppercase leading-relaxed tracking-wide text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="glass glass--sm glass--forest flex items-start gap-2.5 rounded-xl px-4 py-3 text-xs leading-relaxed text-gray-400">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: COLORS.safe.text }} />
            {effectivenessSource}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* 5 ШАГОВ                                           */}
        {/* ================================================= */}
        <section id="steps" className="scroll-mt-10 space-y-7">
          <SectionTag icon={SprayCan} color={COLORS.danger.text}>Step By Step</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            5 Steps To <span style={{ color: COLORS.danger.text }}>Deploy Correctly</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon ? STEP_ICONS[step.icon] : null;
              return (
                <div key={step.step} className="glass glass--sm glass--ember flex flex-col items-center gap-2 rounded-2xl p-4 text-center">
                  <span
                    className="type-tag inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-[0.14em]"
                    style={{ color: COLORS.danger.text, borderColor: `${COLORS.danger.text}80` }}
                  >
                    Step {step.step}
                  </span>
                  {step.image ? (
                    step.step === 1 ? (
                      <img src={step.image} alt="" className="h-32 w-32 object-contain" />
                    ) : (
                      <img src={step.image} alt="" className="aspect-[900/380] w-full object-contain" />
                    )
                  ) : (
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: COLORS.danger.bg, color: COLORS.danger.text }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <p className={`text-xs font-bold uppercase tracking-wide text-white ${step.step !== 1 ? 'mt-3' : ''}`}>{step.title}</p>
                  <p className="text-[10px] leading-relaxed text-gray-400">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="glass glass--sm glass--sand flex items-start gap-2.5 rounded-xl px-4 py-3 text-xs leading-relaxed text-[#f0d99a]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: COLORS.caution.text }} />
            <span>
              <strong style={{ color: COLORS.caution.text }}>Check Wind Direction First — </strong>
              {windWarning}
            </span>
          </div>
        </section>

        {/* ================================================= */}
        {/* ВИДЕО                                             */}
        {/* ================================================= */}
        <div className="glass glass--sm flex flex-col items-center justify-center gap-3 rounded-2xl p-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: COLORS.danger.bg, color: COLORS.danger.text }}>
            <PlayCircle className="h-7 w-7" />
          </span>
          <p className="text-sm font-semibold text-white">{video.title}</p>
          <p className="text-xs text-gray-500">{video.subtitle}</p>
        </div>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* КАК НОСИТЬ                                        */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={AlertTriangle} color={COLORS.danger.text}>Don't Make This Mistake</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Carry It <span style={{ color: COLORS.safe.text }}>Right</span> Or It Won't{' '}
            <span style={{ color: COLORS.danger.text }}>Save You</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="glass glass--sm glass--forest rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2" style={{ color: COLORS.safe.text }}>
                <ShieldCheck className="h-4 w-4" />
                <p className="type-tag text-xs tracking-[0.1em]">Correct Way To Carry</p>
              </div>
              <ul className="space-y-2.5">
                {carryRight.correct.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: COLORS.safe.text }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass glass--sm glass--ember rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2" style={{ color: COLORS.danger.text }}>
                <XCircle className="h-4 w-4" />
                <p className="type-tag text-xs tracking-[0.1em]">Never Carry This Way</p>
              </div>
              <ul className="space-y-2.5">
                {carryRight.wrong.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300">
                    <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: COLORS.danger.text }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* СРАВНЕНИЕ ДИСТАНЦИИ                               */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={Ruler} color={COLORS.ice.text}>Spray Vs Predator</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Spray Range Vs <span style={{ color: COLORS.danger.text }}>Bear Speed</span>
          </h2>

          <div className="glass glass--sm rounded-2xl p-6 space-y-5">
            <p className="text-xs leading-relaxed text-gray-400">{comparison.intro}</p>
            <div className="space-y-4">
              {comparison.bars.map((bar) => {
                const c = COLORS[bar.color];
                return (
                  <div key={bar.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-300">{bar.label}</span>
                      <span className="type-stat" style={{ color: c.text }}>{bar.value}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${bar.pct}%`, background: c.solid }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЧАСТЫЕ ОШИБКИ                                     */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={XCircle} color={COLORS.danger.text}>Common Mistakes</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Mistakes That <span style={{ color: COLORS.danger.text }}>Get People Hurt</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {mistakes.map((item) => {
              const Icon = MISTAKE_ICONS[item.icon];
              return (
                <div key={item.title} className="glass glass--sm glass--ember flex flex-col items-center gap-2 rounded-2xl p-5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: COLORS.danger.bg, color: COLORS.danger.text }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-white">{item.title}</p>
                  <p className="text-[10px] leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ХРАНЕНИЕ И УХОД                                   */}
        {/* ================================================= */}
        <section className="space-y-7">
          <SectionTag icon={ClipboardCheck} color={COLORS.ice.text}>Storage & Maintenance</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Keep Your Spray <span style={{ color: COLORS.ice.text }}>Ready To Use</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {storage.map((item) => {
              const Icon = STORAGE_ICONS[item.icon];
              return (
                <div key={item.title} className="glass glass--sm glass--ice rounded-2xl p-5 space-y-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: COLORS.ice.bg, color: COLORS.ice.text }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* КАКОЙ КУПИТЬ                                      */}
        {/* ================================================= */}
        <section id="buying-guide" className="scroll-mt-10 space-y-7">
          <SectionTag icon={ExternalLink} color={COLORS.danger.text}>Buying Guide</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Which Bear Spray <span style={{ color: COLORS.danger.text }}>Should You Buy?</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {products.map((product) => {
              const badgeColor = COLORS[product.badgeColor];
              return (
                <div key={product.name} className="glass glass--sm rounded-2xl p-6 space-y-3">
                  <span
                    className="type-tag inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[9px] tracking-[0.1em]"
                    style={{ color: badgeColor.text, background: badgeColor.bg }}
                  >
                    {product.badge}
                  </span>
                  <p className="type-stat text-lg text-white">{product.name}</p>
                  <p className="text-[11px] text-gray-500">{product.spec}</p>
                  <ul className="space-y-1.5 pt-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0" style={{ color: COLORS.safe.text }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================= */}
        {/* ЭКСТРЕННАЯ ПОМОЩЬ                                 */}
        {/* ================================================= */}
        <div className="glass glass--sm glass--ember flex flex-col items-start gap-3 rounded-2xl p-6 sm:flex-row sm:items-center">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ background: COLORS.danger.bg, color: COLORS.danger.text }}
          >
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold" style={{ color: COLORS.danger.text }}>{emergency.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-400">{emergency.desc}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
          <p>© 2026 StillWilds.ca · Data from Parks Canada</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D96B32]" />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
