import SiteFooter from '../components/SiteFooter';
import SectionTag from '../components/SectionTag';
import {
  AlertTriangle,
  Award,
  Bus,
  Calendar,
  Car,
  ExternalLink,
  Info,
  Mountain,
  Plane,
  Plus,
  Sparkles,
  Star,
  Tent,
  Ticket,
  Trees,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { navigate } from '../router';
import BackgroundVideo from '../components/BackgroundVideo';
import SiteNav from '../components/SiteNav';
import Atmosphere from '../components/Atmosphere';
import { useMagicReveal } from '../hooks/useMagicReveal';
import NeighbourhoodModal from '../components/NeighbourhoodModal';
import TrailCard from '../components/TrailCard';
import { activeStatus } from '../utils/status';
import WildlifeIcon from '../components/WildlifeIcon';
import { parkAnimalIconKey } from '../data/parkAnimalIcons';
import { parkIconSrc } from '../data/parkIcons';
import CommunitySection from '../community/CommunitySection';
import './ParkPage.css';

// Тот же язык риска, что и на страницах животных (RISK_STYLES в
// AnimalPage.jsx), плюс два park-специфичных акцента — золотой (город,
// достопримечательности) и оливковый (весна, которой не находится места
// среди safe/caution/danger).
const PARK_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  olive: { text: '#b8d24a', solid: '#94ab35', border: 'rgba(184,210,74,0.45)', bg: 'rgba(184,210,74,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  closed: { text: '#f28b8b', solid: '#d05555', border: 'rgba(242,139,139,0.5)', bg: 'rgba(242,139,139,0.12)' },
  purple: { text: '#b98af0', solid: '#8b5fc9', border: 'rgba(185,138,240,0.45)', bg: 'rgba(185,138,240,0.12)' },
};

// SectionTag — общий компонент (components/SectionTag.jsx)

const TRANSPORT_ICONS = { '✈️': Plane, '🚗': Car, '🚌': Bus };

// Метка вида «🏆 Iconic»: ведущий эмодзи заменяем тонкой иконкой (если она
// есть), текст остаётся как был.
function TagLabel({ children }) {
  const text = String(children ?? '');
  const m = text.match(/^(\S+)\s+(.*)$/u);
  const src = m && /\P{ASCII}/u.test(m[1]) ? parkIconSrc(m[1]) : null;
  if (!src) return text;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="icon-mask block h-3.5 w-3.5" style={{ '--icon-src': `url('${src}')` }} aria-hidden="true" />
      {m[2]}
    </span>
  );
}

// Иконка из данных парка: тонкая линейная (как на страницах городов и
// провинций); если для эмодзи подходящей нет, остаётся сам эмодзи.
// size — класс размера (h-… w-…), color — цвет линии.
function ParkIcon({ emoji, size = 'h-8 w-8', color, className = '' }) {
  const src = parkIconSrc(emoji);
  if (!src) return <span className={className}>{emoji}</span>;
  return (
    <span
      className={`icon-mask block ${size} ${className}`}
      style={{ '--icon-src': `url('${src}')`, color }}
      aria-hidden="true"
    />
  );
}

// Цвет сияния за силуэтом леса по разделам страницы: id раздела -> тема
// (см. Atmosphere.jsx: provinces — зелёное, wildlife — тёплое, parks —
// голубое, newsletter — фиолетовое). Список вне компонента — ссылка
// стабильна между рендерами.
const PARK_ATMOSPHERE_SECTIONS = [
  ['park-spotlight', 'newsletter'],
  ['park-attractions', 'parks'],
  ['park-wildlife', 'wildlife'],
  ['park-seasons', 'provinces'],
  ['trails', 'parks'],
  ['getting-there', 'newsletter'],
  ['park-stay', 'wildlife'],
  ['park-practical', 'provinces'],
];

export default function ParkPage({ park }) {
  const accent = PARK_STYLES[park.accentLevel] ?? PARK_STYLES.blue;
  // Открытая увеличенная карточка достопримечательности (см. NeighbourhoodModal)
  const [openAttr, setOpenAttr] = useState(null);
  // Раскрытая карточка тропы (по одной; см. trail-card в ParkPage.css)
  const [openTrail, setOpenTrail] = useState(null);
  // Плавное появление блоков при прокрутке — тот же эффект, что на главной
  const rootRef = useRef(null);
  useMagicReveal(rootRef);

  return (
    <div ref={rootRef} className="park-page min-h-screen bg-sw-bg text-sw-text selection:bg-white/20 selection:text-white">
      {/* Закреплённый слой: сияние сверху и силуэт хвойного леса снизу —
          лес поднимается при прокрутке, когда фото героя уезжает. Лежит под
          контентом (main и footer — relative z-10). */}
      <Atmosphere variant="forest" sections={PARK_ATMOSPHERE_SECTIONS} liftFrom={0.35} />

      <SiteNav backLabel="Back to Parks" onBack={() => navigate(park.slug ? `/parks#${park.slug}` : '/parks')} />

      {/* ================================================= */}
      {/* ГЕРОЙ                                              */}
      {/* ================================================= */}
      <header className="relative h-[520px] w-full overflow-hidden md:h-[700px]">
        <BackgroundVideo
          src={park.heroVideo}
          poster={park.heroImage}
          alt={park.name}
          brightness={1.05}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sw-bg via-sw-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sw-bg/70 via-sw-bg/10 to-transparent" />

        <div className="absolute inset-0">
          {/* «Назад» теперь в SiteNav над героем. Текст прижат к низу через mt-auto:
              если он выше героя (узкий телефон), то начинается с отступа сверху 62px,
              как раньше под кнопкой «Назад», а не уезжает под панель. */}
          <div className="mx-auto flex h-full max-w-[1180px] flex-col px-6 pb-7 pt-[62px]">
            <div className="mt-auto max-w-2xl space-y-4 pb-2 md:pb-4">
              <span
                className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] tracking-[0.14em] backdrop-blur-md"
                style={{ color: PARK_STYLES.gold.text, borderColor: PARK_STYLES.gold.border, background: PARK_STYLES.gold.bg }}
              >
                <Star className="h-3 w-3" />
                {park.tag}
              </span>
              {/* clamp: длинные одно-словные названия (Kouchibouguac) влезают на узком телефоне */}
              <h1 className="text-[clamp(28px,9vw,40px)] leading-[1.02] tracking-wide text-white [overflow-wrap:anywhere] md:text-[58px]">
                {park.name}
              </h1>
              <p className="type-display text-sm" style={{ color: accent.text }}>
                {park.province} · Est. {park.quickFacts.find((f) => f.label === 'Established')?.value} · {park.quickFacts.find((f) => f.label === 'Area')?.value}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">{park.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {park.actions.map((action, idx) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      idx === 0
                        ? 'type-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5'
                        : 'type-button inline-flex items-center gap-2 rounded-full border border-white/80 bg-sw-bg/50 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-y-0.5'
                    }
                    style={idx === 0 ? { background: accent.solid } : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Плавающая панель Quick Facts */}
      <div className="pointer-events-none relative z-10 mx-auto mt-6 max-w-[1180px] px-6 md:-mt-[22rem]">
        <div
          className="park-facts glass glass--sm pointer-events-auto ml-auto w-full max-w-md space-y-4 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          style={{ '--glass-tint': '72, 140, 220' }}
        >
          <p className="type-tag text-[12px] tracking-[0.14em] text-gray-400">Park Facts</p>
          <div className="grid grid-cols-2 gap-3">
            {park.quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="type-tag text-[12px] tracking-[0.1em] text-gray-500">{fact.label}</p>
                <p className="type-stat mt-1 text-sm text-white">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {park.badges.map((badge) => (
              <span
                key={badge}
                className="type-tag rounded-full border px-2.5 py-0.5 text-[12px] tracking-[0.14em]"
                style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="type-tag mb-2 text-[12px] tracking-[0.14em] text-gray-500">Best Seasons</p>
            <div className="grid grid-cols-4 gap-1.5">
              {park.bestSeasons.map((season) => {
                const style = PARK_STYLES[season.level] ?? PARK_STYLES.safe;
                return (
                  <div
                    key={season.label}
                    className="rounded-md border p-1.5 text-center"
                    style={{ borderColor: style.border, background: style.bg }}
                  >
                    <ParkIcon emoji={season.icon} size="h-4 w-4" color={style.text} className="mx-auto text-sm" />
                    <p className="mt-0.5 text-[12px] font-semibold" style={{ color: style.text }}>{season.label}</p>
                    <p className="text-[12px] text-gray-500">{'★'.repeat(season.rating)}{'☆'.repeat(5 - season.rating)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-[1180px] space-y-16 px-6 pb-14 pt-10">

        {/* ================================================= */}
        {/* ОСОБАЯ ВРЕЗКА (опционально)                        */}
        {/* ================================================= */}
        {park.spotlight && (
          <>
            <section id="park-spotlight" className="space-y-7">
              <SectionTag icon={Award}>{park.spotlight.tag}</SectionTag>
              <div className="glass glass--sm flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center" style={{ '--glass-tint': '72, 140, 220' }}>
                <p className="shrink-0 text-6xl">{park.spotlight.emoji}</p>
                <div className="flex-1">
                  <p className="type-stat text-lg" style={{ color: accent.text }}>{park.spotlight.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{park.spotlight.text}</p>
                  {park.spotlight.stats?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      {park.spotlight.stats.map((stat) => {
                        const style = PARK_STYLES[stat.level] ?? PARK_STYLES.safe;
                        return (
                          <div key={stat.label}>
                            <p className="type-stat text-2xl" style={{ color: style.text }}>{stat.value}</p>
                            <p className="type-tag mt-1 text-[12px] tracking-[0.14em] text-gray-500">{stat.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                {park.spotlight.link && (
                  <a
                    href={park.spotlight.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-tag inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border px-4 py-2.5 text-[12px] tracking-[0.06em]"
                    style={{ color: accent.text, borderColor: accent.border, background: accent.bg }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {park.spotlight.link.label}
                  </a>
                )}
              </div>
            </section>
            <hr className="border-white/10" />
          </>
        )}

        {/* ================================================= */}
        {/* ДОСТОПРИМЕЧАТЕЛЬНОСТИ                              */}
        {/* ================================================= */}
        <section id="park-attractions" className="space-y-7">
          <SectionTag icon={Sparkles}>{park.attractionsTag ?? 'Must See'}</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            {park.attractionsTitle ?? (
              <>Top <span style={{ color: PARK_STYLES.gold.text }}>Attractions</span> in {park.shortName ?? park.name.split(' ')[0]}</>
            )}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {park.attractions.map((attr) => {
              const style = PARK_STYLES[attr.tagLevel] ?? PARK_STYLES.safe;
              const hasDetails = Boolean(attr.details);
              const Card = hasDetails ? 'button' : 'div';
              // Метка в окне без эмодзи: иконки там берутся из карточки
              const tagText = String(attr.tag).replace(/^\S+\s+/u, '');
              // Временная плашка («Closed until Dec 11») — сама пропадает после даты until
              const status = activeStatus(attr);
              const statusStyle = status ? PARK_STYLES[status.level] ?? PARK_STYLES.closed : null;
              const statusChip = status && (
                <span
                  className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[12px] tracking-[0.12em]"
                  style={{
                    color: statusStyle.text,
                    borderColor: statusStyle.border,
                    background: `linear-gradient(${statusStyle.bg}, ${statusStyle.bg}), rgba(7,13,25,0.66)`,
                  }}
                >
                  {status.label}
                </span>
              );
              const cardProps = hasDetails
                ? {
                    type: 'button',
                    'aria-haspopup': 'dialog',
                    onClick: (e) => setOpenAttr({
                      item: attr.image || attr.iconSrc ? attr : { ...attr, iconSrc: parkIconSrc(attr.icon) },
                      style,
                      tags: [{ label: tagText, style }, ...(status ? [{ label: status.label, style: statusStyle }] : [])],
                      rect: e.currentTarget.getBoundingClientRect(),
                      trigger: e.currentTarget,
                    }),
                  }
                : {};
              const more = hasDetails && (
                <span className="nb-card__more type-tag" aria-hidden="true">
                  <Plus className="h-3 w-3" />
                  Explore
                </span>
              );
              // Фото — как у Banff/Jasper/Yoho. Иконка (без фото) — как для
              // парков без набора реальных снимков на каждую карточку.
              if (!attr.image) {
                return (
                  <Card
                    key={attr.name}
                    {...cardProps}
                    className={`glass glass--sm relative rounded-2xl p-5${hasDetails ? ' nb-card-attr block w-full cursor-pointer text-left' : ''}`}
                  >
                    <ParkIcon emoji={attr.icon} size="h-9 w-9" color={style.text} className="text-3xl" />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[12px] tracking-[0.12em]"
                        style={{ color: style.text, borderColor: style.border, background: style.bg }}
                      >
                        <TagLabel>{attr.tag}</TagLabel>
                      </span>
                      {statusChip}
                    </div>
                    <p className="type-stat mt-2 text-base text-white">{attr.name}</p>
                    <p className="mt-1 text-[12px] text-gray-400">{attr.meta}</p>
                    {more}
                  </Card>
                );
              }
              return (
                <Card
                  key={attr.name}
                  {...cardProps}
                  className={`group relative h-56 overflow-hidden rounded-2xl${hasDetails ? ' nb-card block w-full cursor-pointer text-left' : ''}`}
                >
                  <img
                    src={attr.image}
                    alt={attr.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sw-bg via-sw-bg/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="type-tag inline-block rounded-full border px-2.5 py-0.5 text-[12px] tracking-[0.12em]"
                        style={{ color: style.text, borderColor: style.border, background: style.bg }}
                      >
                        <TagLabel>{attr.tag}</TagLabel>
                      </span>
                      {statusChip}
                    </div>
                    <p className="type-stat text-base text-white">{attr.name}</p>
                    <p className="text-[12px] text-gray-300">{attr.meta}</p>
                  </div>
                  {more}
                </Card>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЖИВОТНЫЕ                                           */}
        {/* ================================================= */}
        <section id="park-wildlife" className="space-y-7">
          <SectionTag icon={Trees}>Wildlife</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Animals You Can <span style={{ color: PARK_STYLES.safe.text }}>See in {park.shortName ?? park.name.split(' ')[0]}</span>
          </h2>

          <div className="flex items-start gap-3 rounded-2xl border border-sw-ember-light/30 bg-sw-ember-light/[0.06] p-5 text-sm leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            {park.wildlifeWarning}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {park.wildlife.map((animal) => {
              const style = PARK_STYLES[animal.level] ?? PARK_STYLES.safe;
              return (
                <div key={animal.name} className="glass glass--sm rounded-2xl p-4 text-center">
                  {/* Свои иконки животных (как на странице провинции); без иконки — лапа */}
                  <div className="mb-2 flex h-16 items-center justify-center">
                    <WildlifeIcon name={parkAnimalIconKey(animal.name)} style={{ color: style.text }} />
                  </div>
                  <p className="type-stat text-xs text-white">{animal.name}</p>
                  <p
                    className="type-tag mt-2 inline-block rounded-full border px-2 py-0.5 text-[12px] tracking-[0.1em]"
                    style={{ color: style.text, borderColor: style.border, background: style.bg }}
                  >
                    {animal.level === 'danger' ? 'Dangerous' : animal.level === 'caution' ? 'Caution' : 'Safe'}
                  </p>
                  <p className="mt-2 text-[12px] text-gray-500">{animal.chance}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ЛУЧШЕЕ ВРЕМЯ ДЛЯ ПОСЕЩЕНИЯ                         */}
        {/* ================================================= */}
        <section id="park-seasons" className="space-y-7">
          <SectionTag icon={Calendar}>Best Time to Visit</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            When to <span style={{ color: PARK_STYLES.gold.text }}>Visit {park.shortName ?? park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {park.seasons.map((season) => {
              const style = PARK_STYLES[season.level] ?? PARK_STYLES.safe;
              return (
                <div key={season.name} className="glass glass--sm rounded-2xl p-5">
                  <ParkIcon emoji={season.icon} size="h-9 w-9" color={style.text} className="text-3xl" />
                  <p className="type-stat mt-3 text-sm text-white">{season.name}</p>
                  <p className="mt-1 text-[12px] font-semibold" style={{ color: style.text }}>{season.months}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{season.text}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="text-xs" style={{ color: style.text }}>
                      {'●'.repeat(season.rating)}
                      <span className="text-gray-700">{'●'.repeat(5 - season.rating)}</span>
                    </span>
                    <span className="text-[12px] text-gray-500">{season.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ТРОПЫ                                              */}
        {/* ================================================= */}
        <section id="trails" className="space-y-7 scroll-mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              {/* Заголовок можно переопределить (например, у Gwaii Haanas
                  вместо троп — места Watchmen, куда приплывают на лодке) */}
              <SectionTag icon={Mountain}>{park.trailsTag ?? 'Top Trails'}</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                {park.trailsTitle ? (
                  <>
                    {park.trailsTitle.lead} <span style={{ color: PARK_STYLES.safe.text }}>{park.trailsTitle.highlight}</span>
                  </>
                ) : (
                  <>
                    Best <span style={{ color: PARK_STYLES.safe.text }}>Hiking Trails</span> in {park.shortName ?? park.name.split(' ')[0]}
                  </>
                )}
              </h2>
            </div>
            {park.trailsUrl && (
              <a
                href={park.trailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5"
                style={{ background: PARK_STYLES.safe.solid }}
              >
                <ExternalLink className="h-4 w-4" />
                {park.trailsLinkLabel ?? 'View All Trails on AllTrails'}
              </a>
            )}
          </div>

          {park.trailsNote && (
            <div className="flex items-start gap-3 rounded-2xl border border-[#D4A017]/25 bg-[#D4A017]/[0.06] p-5 text-sm leading-relaxed text-gray-300">
              <AlertTriangle className="h-5 w-5 shrink-0" style={{ color: PARK_STYLES.gold.text }} />
              <div>
                <p className="type-stat text-sm" style={{ color: PARK_STYLES.gold.text }}>{park.trailsNote.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{park.trailsNote.text}</p>
              </div>
            </div>
          )}

          <ul className="space-y-3">
            {park.trails.map((trail) => {
              const diffStyle =
                PARK_STYLES[trail.level] ??
                (trail.difficulty === 'Hard' ? PARK_STYLES.danger : trail.difficulty === 'Moderate' ? PARK_STYLES.caution : PARK_STYLES.safe);
              return (
                <TrailCard
                  key={trail.name}
                  trail={trail}
                  parkSlug={park.slug}
                  diffStyle={diffStyle}
                  starColor={PARK_STYLES.caution.text}
                  isOpen={openTrail === trail.name}
                  onToggle={() => setOpenTrail(openTrail === trail.name ? null : trail.name)}
                />
              );
            })}
          </ul>

          {park.trailsEmbedUrl && (
            <div className="glass glass--sm space-y-3 rounded-2xl p-4">
              <div className="overflow-hidden rounded-xl">
                <iframe
                  src={park.trailsEmbedUrl}
                  title={`AllTrails: ${park.name}`}
                  className="aspect-video w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-gray-500">Interactive map · Powered by AllTrails</p>
            </div>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* КАК ДОБРАТЬСЯ                                      */}
        {/* ================================================= */}
        <section id="getting-there" className="space-y-7 scroll-mt-10">
          <SectionTag icon={Car}>Getting There</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            How to <span style={{ color: PARK_STYLES.blue.text }}>Get to {park.shortName ?? park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {park.gettingThere.map((option) => {
              const Icon = TRANSPORT_ICONS[option.icon] ?? Car;
              return (
                <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                  <span
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ color: PARK_STYLES.blue.text, borderColor: PARK_STYLES.blue.border, background: PARK_STYLES.blue.bg }}
                  >
                    {parkIconSrc(option.icon) ? (
                      <ParkIcon emoji={option.icon} size="h-6 w-6" color={PARK_STYLES.blue.text} />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </span>
                  <p className="type-stat text-sm text-white">{option.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                  <p className="mt-3 text-[12px] font-semibold" style={{ color: PARK_STYLES.blue.text }}>{option.time}</p>
                </div>
              );
            })}
          </div>

          {park.entryPass && (
            <div className="glass glass--sm flex flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{ color: PARK_STYLES.gold.text, borderColor: PARK_STYLES.gold.border, background: PARK_STYLES.gold.bg }}
                >
                  <Ticket className="h-5 w-5" />
                </span>
                <div>
                  <p className="type-stat text-sm text-white">{park.entryPass.title}</p>
                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-gray-500">
                    {park.entryPass.text} {park.entryPass.buyText}
                  </p>
                </div>
              </div>
              <a
                href={park.entryPass.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button shrink-0 rounded-full px-4 py-2 text-xs text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PARK_STYLES.gold.solid }}
              >
                Buy Parks Pass
              </a>
            </div>
          )}
        </section>

        <hr className="border-white/10" />

        {/* ================================================= */}
        {/* ГДЕ ОСТАНОВИТЬСЯ                                   */}
        {/* ================================================= */}
        <section id="park-stay" className="space-y-7">
          <SectionTag icon={Tent}>Where to Stay</SectionTag>
          <h2 className="text-[30px] tracking-wide md:text-[38px]">
            Accommodation <span style={{ color: PARK_STYLES.gold.text }}>in and Near {park.shortName ?? park.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {park.stay.map((option) => (
              <div key={option.title} className="glass glass--sm rounded-2xl p-5">
                <ParkIcon emoji={option.icon} size="h-9 w-9" color={PARK_STYLES.gold.text} className="text-3xl" />
                <p className="type-stat mt-3 text-sm text-white">{option.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{option.text}</p>
                {option.links?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {option.links.map((link) => {
                      const style = PARK_STYLES[link.level] ?? PARK_STYLES.safe;
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="type-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] tracking-[0.06em]"
                          style={{ color: style.text, borderColor: style.border, background: style.bg }}
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {park.practical && (
          <>
            <hr className="border-white/10" />
            <section id="park-practical" className="space-y-7">
              <SectionTag icon={Info}>Practical Information</SectionTag>
              <h2 className="text-[30px] tracking-wide md:text-[38px]">
                Everything You <span style={{ color: PARK_STYLES.safe.text }}>Need to Know</span>
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {park.practical.map((tip) => (
                  <div key={tip.title} className="glass glass--sm rounded-2xl p-5 text-center">
                    <ParkIcon emoji={tip.icon} size="h-8 w-8" color={PARK_STYLES.safe.text} className="mx-auto text-2xl" />
                    <p className="type-stat mt-3 text-xs text-white">{tip.title}</p>
                    {tip.lines ? (
                      tip.lines.map((line, idx) => (
                        <p
                          key={line}
                          className={`mt-1 text-[13px] leading-relaxed ${idx === 0 ? 'text-gray-300' : 'text-gray-500'}`}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{tip.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <hr className="border-white/10" />
        <CommunitySection
          kind="review"
          pageType="park"
          pageSlug={park.slug}
          pageName={park.shortName ?? park.name}
          accent={PARK_STYLES.safe.text}
        />

        {/* ================================================= */}
        {/* ГАЛЕРЕЯ                                            */}
        {/* ================================================= */}
        {/* Галерея необязательна — у парков с одним фото (Kootenay) её нет */}
        {park.gallery?.length > 0 && (
          <section id="park-gallery" className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {park.gallery.map((src, idx) => (
              <div key={`${src}-${idx}`} className="overflow-hidden rounded-2xl">
                <img src={src} alt={`${park.name} ${idx + 1}`} className="h-48 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </section>
        )}
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                             */}
      {/* ================================================= */}
      <SiteFooter note="Data from Parks Canada" accent={PARK_STYLES.blue.text} />

      {openAttr && (
        <NeighbourhoodModal
          item={openAttr.item}
          style={openAttr.style}
          tags={openAttr.tags}
          originRect={openAttr.rect}
          returnFocusTo={openAttr.trigger}
          onClose={() => setOpenAttr(null)}
        />
      )}
    </div>
  );
}
