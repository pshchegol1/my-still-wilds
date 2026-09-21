import {
  ArrowLeft,
  Backpack,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Compass,
  PawPrint,
  Layers2,
  Flashlight,
  Stethoscope,
  Flame,
  Wrench,
  Utensils,
  Droplet,
  Tent,
  Radio,
  MessageSquare,
  CloudSun,
  Users,
  Undo2,
  Smartphone,
  Recycle,
  Waves,
} from 'lucide-react';
import { navigate } from '../router';
import {
  GUIDE_STATS,
  NAV_TAGS,
  PACK_LISTS,
  BACKPACK_SIZES,
  CLOTHING_CARDS,
  SEASON_PACKS,
  TEN_ESSENTIALS,
  GOLDEN_RULES,
  EMERGENCIES,
} from '../data/hikersGuide';
import './HikersGuidePage.css';

const SEASON_ICONS = { summer: Sun, fall: Leaf, winter: Snowflake, spring: Flower2 };
// Все четыре круга вырезаны из одной присланной 2x2 сетки одинаковой
// обрезкой по контуру, поэтому лежат единым набором.
const SEASON_IMAGES = {
  summer: '/icons/hike/season-summer.png',
  fall: '/icons/hike/season-fall.png',
  winter: '/icons/hike/season-winter.png',
  spring: '/icons/hike/season-spring.png',
};

// Строка -> компонент, чтобы данные (hikersGuide.js) не импортировали
// React напрямую и оставались обычным JSON-подобным списком.
const ESSENTIAL_ICONS = {
  Compass, Sun, Layers2, Flashlight, Stethoscope, Flame, Wrench, Utensils, Droplet, Tent, PawPrint, Radio,
};

const RULE_ICONS = {
  MessageSquare, Users, CloudSun, Undo2, Droplet, Smartphone, Recycle, Waves,
};

const SEASON_COLORS = {
  summer: { text: '#48B878', border: 'rgba(72, 184, 120, 0.35)' },
  fall: { text: '#E86349', border: 'rgba(232, 99, 73, 0.35)' },
  winter: { text: '#3E7BFA', border: 'rgba(62, 123, 250, 0.35)' },
  spring: { text: '#D4FF28', border: 'rgba(212, 255, 40, 0.35)' },
};

const EMERGENCY_COLORS = ['#ee8d54', '#c084fc', '#8b5e3c'];

// Пилюля над заголовком секции. iconSrc — файл из /icons/hike (красится
// через маску), icon — компонент lucide для того, чего в наборе нет.
function SectionTag({ label, icon: Icon, iconSrc, color }) {
  return (
    <span
      className="section-tag type-tag inline-flex w-fit items-center rounded-full border"
      style={{ color, borderColor: `${color}80`, background: `${color}14` }}
    >
      {iconSrc ? (
        <span
          className="icon-mask h-4 w-4 shrink-0"
          style={{ '--icon-src': `url('${iconSrc}')` }}
          aria-hidden="true"
        />
      ) : (
        <Icon className="h-4 w-4 shrink-0" />
      )}
      {label}
    </span>
  );
}

function SectionHeading({ color, tag, children }) {
  return (
    <div className="space-y-3">
      {tag && <SectionTag {...tag} />}
      <div className="pb-3 border-b border-white/10" style={{ color }}>
        <h2 className="text-2xl font-bold tracking-wide md:text-3xl">{children}</h2>
      </div>
    </div>
  );
}

const PRIORITY_STYLES = {
  must: { label: 'Must Have', text: '#ee8d54', border: 'rgba(222,107,50,0.5)', bg: 'rgba(222,107,50,0.12)' },
  recommended: { label: 'Recommended', text: '#F0B828', border: 'rgba(240,184,40,0.5)', bg: 'rgba(240,184,40,0.12)' },
  optional: { label: 'Optional', text: '#6ee7a1', border: 'rgba(56,161,105,0.5)', bg: 'rgba(56,161,105,0.12)' },
};

function PriorityBadge({ priority }) {
  const style = PRIORITY_STYLES[priority];
  if (!style) return null;
  return (
    <span
      className="type-tag shrink-0 rounded-full border px-2.5 py-0.5 text-[9px]"
      style={{ color: style.text, borderColor: style.border, background: style.bg }}
    >
      {style.label}
    </span>
  );
}

function PackListCard({ data, accent, iconSrc }) {
  return (
    <div
      className="glass glass--sm rounded-2xl border-2 p-6 space-y-4"
      style={{ borderColor: `${accent}55` }}
    >
      <div className="flex items-center gap-3">
        {/* Файлы обрезаны по контуру круга заранее, но не все с прозрачным
            фоном — rounded-full подстраховывает от светлого квадрата
            по углам у тех, где фон вокруг круга непрозрачный. */}
        <img src={iconSrc} alt="" className="h-32 w-32 shrink-0 rounded-full object-cover" />
        <div>
          <p className="type-stat text-lg text-white leading-tight">{data.title.toUpperCase()}</p>
          <p className="text-[11px] text-gray-400">{data.subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {data.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
          >
            {item.icon ? (
              <img src={item.icon} alt="" className="h-9 w-9 shrink-0 object-contain" />
            ) : (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                <CheckCircle2 className="h-4 w-4" style={{ color: accent }} />
              </span>
            )}
            <span className="flex-1 text-sm text-white">{item.label}</span>
            <PriorityBadge priority={item.priority} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HikersGuidePage() {
  return (
    <div className="hikers-guide-page min-h-screen bg-[#070D19] text-[#EBF0F4]">
      {/* Hero Banner */}
      <section
        className="relative w-full overflow-hidden bg-[#070D19]"
        style={{
          aspectRatio: '5600 / 3200',
          backgroundImage: 'url("/hike/silhouette-men-hiking-mountain-peak-sunset-generative-ai.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Ровный слой цвета страницы поверх всего кадра — то же самое,
            что приглушить само фото на 60%. */}
        <div className="absolute inset-0" style={{ background: 'rgba(7,13,25,0.6)' }} />

        {/* Затемнение только в верхней части — силуэты хайкеров начинаются
            примерно с 66% высоты кадра и должны остаться чистыми. */}
        <div
          className="absolute inset-x-0 top-0 h-[60%]"
          style={{
            background: 'linear-gradient(to bottom, rgba(7,13,25,0.37) 0%, rgba(7,13,25,0.31) 30%, rgba(7,13,25,0.2) 55%, rgba(7,13,25,0.08) 80%, transparent 100%)',
          }}
        />
        {/* Низ кадра уже почти черный — короткого фейда хватает, чтобы
            склеить фото с фоном страницы, не задев силуэты. */}
        <div className="absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-[#070D19] to-transparent" />

        <div className="relative z-10 h-full mx-auto flex w-full max-w-[1440px] flex-col px-6 py-7">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="mt-12 flex flex-col gap-8 md:mt-64 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <h1 className="tracking-wide text-white text-[44px] leading-[1.02] md:text-[64px]">
                HIKER'S <span className="text-[#F0B828]">GUIDE</span>
              </h1>
              <p className="type-body-sm leading-relaxed text-gray-300">
                Everything you need to know before hitting the trails in Canada — what to wear,
                what to pack, how to prepare for any season, and how to stay safe in the wilderness.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {NAV_TAGS.map((tag) => (
                  <a
                    key={tag.id}
                    href={`#${tag.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F0B828]/45 bg-[#070D19]/40 px-4 py-1.5 text-[11px] uppercase tracking-wide text-[#F0B828] backdrop-blur-md transition-colors hover:border-[#F0B828] hover:bg-[#F0B828]/10"
                  >
                    <span
                      className="icon-mask h-4 w-4 shrink-0"
                      style={{ '--icon-src': `url('${tag.icon}')` }}
                      aria-hidden="true"
                    />
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="flex shrink-0 gap-8 md:flex-col md:gap-5 md:text-right"
              style={{ fontFamily: "'Outfit', Arial, sans-serif" }}
            >
              {GUIDE_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="type-stat text-2xl leading-tight text-[#F0B828]">{stat.value}</p>
                  <p className="uppercase tracking-wide text-[13px] text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 space-y-20">

        {/* Day Hike vs Multi-Day */}
        <section id="day-hike" className="space-y-8 scroll-mt-10">
          <SectionHeading
            color="#ffffff"
            tag={{ label: 'Pack List', icon: Backpack, color: '#F0B828' }}
          >
            Day Hike Vs <span style={{ color: '#F0B828' }}>Multi-Day Hike</span>
          </SectionHeading>

          <div id="multi-day" className="grid grid-cols-1 lg:grid-cols-2 gap-5 scroll-mt-10">
            <PackListCard data={PACK_LISTS.dayHike} accent="#6ee7a1" iconSrc={PACK_LISTS.dayHike.icon} />
            <PackListCard data={PACK_LISTS.multiDay} accent="#D96B32" iconSrc={PACK_LISTS.multiDay.icon} />
          </div>

          {/* Backpack sizes */}
          <div className="glass glass--sm rounded-2xl p-6 space-y-4">
            <p className="text-sm font-semibold tracking-wide text-white">What Size Backpack Do I Need?</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {BACKPACK_SIZES.map((pack) => (
                <div key={pack.size} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center space-y-1">
                  <p className="type-stat text-lg" style={{ color: pack.accent }}>{pack.size}</p>
                  <p className="text-xs font-semibold text-white">{pack.name}</p>
                  <p className="text-[10px] text-gray-500">{pack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* 3-Layer Clothing System */}
        <section id="what-to-wear" className="space-y-8 scroll-mt-10">
          <SectionHeading
            color="#ffffff"
            tag={{ label: 'What To Wear', iconSrc: '/icons/hike/iconoir_shirt.svg', color: '#F0B828' }}
          >
            The 3-Layer <span style={{ color: '#6ee7a1' }}>Clothing System</span>
          </SectionHeading>

          <div className="flex items-start gap-2.5 rounded-xl border border-[#38A169]/30 bg-[#38A169]/[0.08] px-4 py-3 text-xs leading-relaxed text-[#a8e6c1]">
            <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#6ee7a1]">The Golden Rule:</strong> Never wear cotton in the wilderness. Cotton holds moisture, dries slow, and causes hypothermia in cold conditions. Always use synthetic or wool fabrics.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLOTHING_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-col gap-3 rounded-2xl border bg-white/[0.02] p-5"
                style={{
                  borderColor: card.danger ? `${card.accent}55` : 'rgba(255,255,255,0.1)',
                  background: card.danger ? `${card.accent}0d` : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Иллюстрация нарисована кругом в квадратном холсте —
                      rounded-full срезает белые углы без правки файла. */}
                  <img src={card.icon} alt="" className="h-20 w-20 shrink-0 rounded-full object-cover" />
                  <div>
                    <p
                      className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]"
                      style={{ color: card.accent }}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: card.accent }} />
                      {card.label}
                    </p>
                    <p className="type-stat text-base text-white">{card.title}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-gray-400">{card.desc}</p>

                <ul className="mt-auto space-y-1.5 pt-1">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11px]"
                      style={{ color: card.danger ? card.accent : '#d1d5db' }}
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: card.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Seasonal Packing */}
        <section className="space-y-8">
          <SectionHeading
            color="#ffffff"
            tag={{ label: 'By Season', iconSrc: '/icons/hike/mdi-light_calendar.svg', color: '#6ee7a1' }}
          >
            What To Pack <span style={{ color: '#F0B828' }}>For Each Season</span>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(SEASON_PACKS).map(([key, season]) => {
              const Icon = SEASON_ICONS[key];
              const image = SEASON_IMAGES[key];
              const colors = SEASON_COLORS[key];
              return (
                <div key={key} className="glass glass--sm rounded-2xl p-5 space-y-3" style={{ borderColor: colors.border }}>
                  <div className="flex items-center gap-2.5" style={{ color: colors.text }}>
                    {image ? (
                      <img src={image} alt="" className="h-24 w-24 shrink-0 rounded-full object-cover" />
                    ) : (
                      <Icon className="h-5 w-5 shrink-0" />
                    )}
                    <p className="text-base font-bold" style={{ color: colors.text }}>{season.label}</p>
                  </div>
                  <p className="text-[10px] text-gray-500">{season.months}</p>
                  <ul className="space-y-1.5 pt-1">
                    {season.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5" style={{ color: colors.text }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* 10 Essentials */}
        <section id="essentials" className="space-y-8 scroll-mt-10">
          <SectionHeading
            color="#ffffff"
            tag={{ label: '10 Essentials', iconSrc: '/icons/hike/ph_first-aid-kit-light.svg', color: '#ee8d54' }}
          >
            Never Leave Without <span style={{ color: '#ee8d54' }}>These 10 Items</span>
          </SectionHeading>

          <div className="flex items-start gap-2.5 rounded-xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] px-4 py-3 text-xs leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>The 10 Essentials list is developed by mountaineers to ensure survival in an emergency. In Canada's backcountry, carrying all 10 is not optional — it's the difference between a minor inconvenience and a life-threatening situation.</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TEN_ESSENTIALS.map((item) => {
              const Fallback = ESSENTIAL_ICONS[item.iconFallback];
              return (
                <div key={item.title} className="glass glass--sm rounded-2xl p-4 space-y-2 flex flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center text-[#ee8d54]">
                    {item.icon ? (
                      <img src={item.icon} alt="" className="h-12 w-12 object-contain" />
                    ) : (
                      <Fallback className="h-6 w-6" />
                    )}
                  </span>
                  <p className="text-sm font-bold text-[#ee8d54]">{item.title}</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Golden Rules */}
        <section id="safety-rules" className="space-y-8 scroll-mt-10">
          <SectionHeading
            color="#ffffff"
            tag={{ label: 'Safety Rules', iconSrc: '/icons/hike/tdesign_secured.svg', color: '#F0B828' }}
          >
            Golden Rules Of <span style={{ color: '#F0B828' }}>Hiking In Canada</span>
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {GOLDEN_RULES.map((rule) => {
              const Fallback = RULE_ICONS[rule.iconFallback];
              return (
              <div key={rule.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className={`flex shrink-0 items-center justify-center text-[#6ee7a1] ${rule.iconSize || 'h-9 w-9'}`}>
                  {rule.icon ? (
                    <img src={rule.icon} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <Fallback className="h-[18px] w-[18px]" />
                  )}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{rule.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{rule.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Emergencies */}
        <section className="space-y-8">
          <SectionHeading
            color="#ffffff"
            tag={{ label: 'Emergency', icon: AlertTriangle, color: '#ee8d54' }}
          >
            If Something Goes <span style={{ color: '#ee8d54' }}>Wrong</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EMERGENCIES.map((item, idx) => {
              const color = EMERGENCY_COLORS[idx];
              const Icon = idx === 0 ? Phone : idx === 1 ? Compass : PawPrint;
              return (
                <div key={item.title} className="rounded-2xl border-2 p-5 space-y-2" style={{ borderColor: `${color}40`, background: `${color}0d` }}>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${color}55`, background: `${color}22`, color }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="type-stat text-lg" style={{ color }}>{item.action}</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
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
