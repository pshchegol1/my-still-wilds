import {
  ArrowLeft,
  Backpack,
  Shirt,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
  ListChecks,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Phone,
  Compass,
  PawPrint,
} from 'lucide-react';
import { navigate } from '../router';
import {
  GUIDE_STATS,
  NAV_TAGS,
  PACK_LISTS,
  BACKPACK_SIZES,
  CLOTHING_LAYERS,
  FOOTWEAR,
  HEAD_HANDS,
  NEVER_WEAR,
  SEASON_PACKS,
  TEN_ESSENTIALS,
  GOLDEN_RULES,
  EMERGENCIES,
} from '../data/hikersGuide';
import './HikersGuidePage.css';

const SEASON_ICONS = { summer: Sun, fall: Leaf, winter: Snowflake, spring: Flower2 };
const SEASON_COLORS = {
  summer: { text: '#e0b84a', border: 'rgba(224, 184, 74, 0.35)' },
  fall: { text: '#D96B32', border: 'rgba(217, 107, 50, 0.35)' },
  winter: { text: '#4a88cf', border: 'rgba(74, 136, 207, 0.35)' },
  spring: { text: '#6ee7a1', border: 'rgba(110, 231, 161, 0.35)' },
};

const EMERGENCY_COLORS = ['#ee8d54', '#c084fc', '#8b5e3c'];

function SectionHeading({ icon: Icon, color, children }) {
  return (
    <div className="flex items-center gap-2 pb-3 border-b border-white/10" style={{ color }}>
      <Icon className="h-6 w-6 shrink-0" />
      <h2 className="text-xl font-bold tracking-wide">{children}</h2>
    </div>
  );
}

function PackListCard({ data, accent, icon: Icon }) {
  return (
    <div
      className="glass glass--sm rounded-2xl border-2 p-6 space-y-4"
      style={{ borderColor: `${accent}55` }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl border"
          style={{ borderColor: `${accent}55`, background: `${accent}22`, color: accent }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="type-stat text-lg text-white leading-tight">{data.title.toUpperCase()}</p>
          <p className="text-[11px] text-gray-400">{data.subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2.5">
        {data.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent }} />
            <span>{item}</span>
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

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <h1 className="tracking-wide text-white text-[44px] leading-[1.02] md:text-[64px]">
                HIKER'S <span className="text-[#D96B32]">GUIDE</span>
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
                    className="rounded-full border border-white/20 bg-[#070D19]/40 px-4 py-1.5 text-[11px] uppercase tracking-wide text-gray-300 backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
                  >
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
                  <p className="type-stat text-2xl leading-tight text-[#D96B32]">{stat.value}</p>
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
          <SectionHeading icon={Backpack} color="#e0b84a">
            Day Hike Vs Multi-Day Hike
          </SectionHeading>

          <div id="multi-day" className="grid grid-cols-1 lg:grid-cols-2 gap-5 scroll-mt-10">
            <PackListCard data={PACK_LISTS.dayHike} accent="#6ee7a1" icon={Sun} />
            <PackListCard data={PACK_LISTS.multiDay} accent="#D96B32" icon={Backpack} />
          </div>

          {/* Backpack sizes */}
          <div className="glass glass--sm rounded-2xl p-6 space-y-4">
            <p className="text-sm font-semibold tracking-wide text-white">What Size Backpack Do I Need?</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {BACKPACK_SIZES.map((pack) => (
                <div key={pack.size} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center space-y-1">
                  <p className="type-stat text-lg text-[#D96B32]">{pack.size}</p>
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
          <SectionHeading icon={Shirt} color="#6ee7a1">
            The 3-Layer Clothing System
          </SectionHeading>

          <div className="flex items-start gap-2.5 rounded-xl border border-[#38A169]/30 bg-[#38A169]/[0.08] px-4 py-3 text-xs leading-relaxed text-[#a8e6c1]">
            <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#6ee7a1]">The Golden Rule:</strong> Never wear cotton in the wilderness. Cotton holds moisture, dries slow, and causes hypothermia in cold conditions. Always use synthetic or wool fabrics.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CLOTHING_LAYERS.map((layer) => (
              <div key={layer.layer} className="glass glass--sm rounded-2xl p-5 space-y-2.5">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#6ee7a1]">{layer.layer}</p>
                <p className="text-sm font-bold text-white">{layer.title}</p>
                <p className="text-xs leading-relaxed text-gray-400">{layer.desc}</p>
                <ul className="space-y-1.5 pt-1">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-gray-300">
                      <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-[#6ee7a1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass glass--sm rounded-2xl p-5 space-y-2.5">
              <p className="text-sm font-bold text-white">{FOOTWEAR.title}</p>
              <ul className="space-y-1.5">
                {FOOTWEAR.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-gray-300">
                    <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-[#6ee7a1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass glass--sm rounded-2xl p-5 space-y-2.5">
              <p className="text-sm font-bold text-white">{HEAD_HANDS.title}</p>
              <ul className="space-y-1.5">
                {HEAD_HANDS.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-gray-300">
                    <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-[#6ee7a1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] p-5 space-y-2.5">
              <p className="flex items-center gap-2 text-sm font-bold text-[#ee8d54]">
                <XCircle className="h-4 w-4" />
                What NOT To Wear
              </p>
              <ul className="space-y-1.5">
                {NEVER_WEAR.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-gray-300">
                    <XCircle className="h-3 w-3 shrink-0 mt-0.5 text-[#ee8d54]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Seasonal Packing */}
        <section className="space-y-8">
          <SectionHeading icon={Sun} color="#e0b84a">
            What To Pack For Each Season
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(SEASON_PACKS).map(([key, season]) => {
              const Icon = SEASON_ICONS[key];
              const colors = SEASON_COLORS[key];
              return (
                <div key={key} className="glass glass--sm rounded-2xl p-5 space-y-3" style={{ borderColor: colors.border }}>
                  <div className="flex items-center gap-2" style={{ color: colors.text }}>
                    <Icon className="h-5 w-5" />
                    <p className="text-sm font-bold text-white">{season.label}</p>
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
          <SectionHeading icon={ListChecks} color="#ee8d54">
            Never Leave Without These 10 Items
          </SectionHeading>

          <div className="flex items-start gap-2.5 rounded-xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.06] px-4 py-3 text-xs leading-relaxed text-[#f0b98a]">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>The 10 Essentials list is developed by mountaineers to ensure survival in an emergency. In Canada's backcountry, carrying all 10 is not optional — it's the difference between a minor inconvenience and a life-threatening situation.</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TEN_ESSENTIALS.map((item) => (
              <div key={item.title} className="glass glass--sm rounded-2xl p-4 space-y-1.5">
                <p className="text-sm font-bold text-[#ee8d54]">{item.title}</p>
                <p className="text-[11px] leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Golden Rules */}
        <section id="safety-rules" className="space-y-8 scroll-mt-10">
          <SectionHeading icon={ShieldAlert} color="#6ee7a1">
            Golden Rules Of Hiking In Canada
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {GOLDEN_RULES.map((rule) => (
              <div key={rule.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6ee7a1] mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">{rule.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Emergencies */}
        <section className="space-y-8">
          <SectionHeading icon={Phone} color="#ee8d54">
            If Something Goes Wrong
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
