import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, MapPin, ShieldCheck } from 'lucide-react';
import './DistanceCard.css';

// Карточка «безопасная дистанция»: фото животного и линейка метров.
//
// 1) Пока пользователь ничего не трогал, линейка «доезжает» до безопасной
//    дистанции вместе с прокруткой (rAF, пишется прямо в style).
// 2) Линейку можно двигать мышью/пальцем (клик или перетаскивание лапы) и
//    с клавиатуры (стрелки, Home/End, шаг 5 м). Под линейкой появляется
//    предупреждение для выбранной дистанции: опасно, осторожно или безопасно.
//
// Числа и тексты не выдумываются: зоны (ruler.zones) идут в том же порядке,
// что и distanceZones животного (zoneInfo) — берутся его label/description.
// prefers-reduced-motion: линейка сразу стоит на безопасной дистанции.
const ease = (t) => 1 - (1 - t) ** 3;
const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function DistanceCard({ image, name, badge, location, ruler, zoneInfo, styles, zoneStyles, accent }) {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const pawRef = useRef(null);
  const valueRef = useRef(null);
  const pickedRef = useRef(false);
  const dragRef = useRef(false);
  const { meters, scaleMax, ticks, zones } = ruler;
  // шаг выбора: мелкая шкала (лоси, рыси) — по метру, большая — крупнее
  const STEP = scaleMax <= 100 ? 1 : scaleMax <= 250 ? 5 : 10;

  const [picked, setPicked] = useState(null); // метры, выбранные пользователем
  const [zoneIdx, setZoneIdx] = useState(zones.length - 1);

  const zoneOf = (v) => {
    const i = zones.findIndex((z) => v >= z.from && v < z.to);
    return i === -1 ? zones.length - 1 : i;
  };

  // фон линейки: цвет зоны стоит в её середине, между зонами — плавный
  // переход (близко — опасно, далеко — безопасно)
  const bands = zones
    .map((z) => `${zoneStyles[z.level].text} ${(((z.from + z.to) / 2) / scaleMax) * 100}%`)
    .join(', ');

  const paint = (v, { pawOpacity = 1, photoP = 1 } = {}) => {
    const pct = (v / scaleMax) * 100;
    if (fillRef.current) fillRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0 round 999px)`;
    if (pawRef.current) {
      pawRef.current.style.left = `${pct}%`;
      pawRef.current.style.opacity = String(pawOpacity);
    }
    if (valueRef.current) valueRef.current.textContent = `${Math.round(v)} m`;
    if (imgRef.current) imgRef.current.style.transform = `scale(${1 + 0.14 * (1 - photoP)})`;
  };

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let raf = null;
    const frame = () => {
      raf = null;
      if (pickedRef.current || !rootRef.current) return;
      const vh = window.innerHeight;
      const top = rootRef.current.getBoundingClientRect().top;
      // начинается, когда верх карточки на 95% высоты экрана, готово — на 35%
      const p = clamp01((vh * 0.95 - top) / (vh * 0.6));
      const e = ease(p);
      paint(meters * e, { pawOpacity: clamp01((e - 0.85) / 0.15), photoP: p });
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(frame);
    };
    if (reduce) {
      paint(meters);
      return undefined;
    }
    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
    // paint читает только refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meters]);

  const pick = (v) => {
    const value = Math.min(scaleMax, Math.max(0, v));
    pickedRef.current = true;
    paint(value);
    setPicked(value);
    setZoneIdx(zoneOf(value));
  };

  const fromPointer = (e) => {
    const rect = trackRef.current.getBoundingClientRect();
    const raw = ((e.clientX - rect.left) / rect.width) * scaleMax;
    pick(Math.round(raw / STEP) * STEP);
  };

  const onPointerDown = (e) => {
    dragRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    fromPointer(e);
  };
  const onPointerMove = (e) => {
    if (dragRef.current) fromPointer(e);
  };
  const onPointerUp = () => {
    dragRef.current = false;
  };

  const onKeyDown = (e) => {
    const cur = picked ?? meters;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = cur + STEP;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = cur - STEP;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = scaleMax;
    if (next === null) return;
    e.preventDefault();
    pick(next);
  };

  const zone = zones[zoneIdx];
  const info = zoneInfo?.[zoneIdx];
  const zs = zoneStyles[zone.level];
  const ZoneIcon = zone.level === 'safe' ? ShieldCheck : AlertTriangle;
  const valueColor = picked === null ? accent : zs.text;

  return (
    <div
      ref={rootRef}
      className="dc-card glass glass--ember relative grid overflow-hidden rounded-3xl border-2 md:grid-cols-[1.1fr_1fr]"
      style={{ borderColor: accent }}
    >
      <div className="dc-photo">
        <img ref={imgRef} src={image} alt={name} loading="lazy" />
        <div className="dc-photo__shade" />
      </div>

      <div className="dc-body">
        <span
          className="type-tag inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] backdrop-blur-md"
          style={{ color: accent, borderColor: styles.border, background: styles.bg }}
        >
          {badge}
        </span>
        <h3 className="text-2xl font-bold tracking-wide text-white md:text-4xl">{name.toUpperCase()}</h3>
        {location && (
          <p className="flex items-center gap-1.5 text-xs text-gray-300 md:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {location}
          </p>
        )}

        <div className="dc-ruler">
          <div className="dc-ruler__head">
            <span className="dc-ruler__label">Your distance</span>
            <span ref={valueRef} className="dc-ruler__value type-stat" style={{ color: valueColor }}>{meters} m</span>
          </div>

          <div
            className="dc-ruler__hit"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div ref={trackRef} className="dc-ruler__track">
              <i className="dc-ruler__bands" style={{ background: `linear-gradient(90deg, ${bands})` }} />
              <i
                ref={fillRef}
                className="dc-ruler__fill"
                style={{ background: `linear-gradient(90deg, ${bands})`, clipPath: 'inset(0 100% 0 0 round 999px)' }}
              />
              <span className="dc-ruler__you">YOU</span>
              <span
                ref={pawRef}
                role="slider"
                tabIndex={0}
                aria-label={`Distance to ${name}`}
                aria-valuemin={0}
                aria-valuemax={scaleMax}
                aria-valuenow={picked ?? meters}
                aria-valuetext={`${picked ?? meters} metres — ${info?.label ?? zone.level}`}
                onKeyDown={onKeyDown}
                className="dc-ruler__paw"
                style={{ left: `${(meters / scaleMax) * 100}%` }}
              >
                <img src="/icons/icon-paw.svg" alt="" draggable="false" />
              </span>
            </div>
          </div>
          <div className="dc-ruler__ticks" aria-hidden="true">
            {ticks.map((t) => (
              <span key={t} style={{ left: `${(t / scaleMax) * 100}%` }}>{t}</span>
            ))}
          </div>

          <div className="dc-status" aria-live="polite">
            {picked === null ? (
              <p className="dc-status__hint">Drag the paw or tap the ruler to test a distance.</p>
            ) : (
              <div className="dc-status__box" style={{ borderColor: zs.border, background: zs.bg }}>
                <ZoneIcon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: zs.text }} />
                <div>
                  <p className="type-tag text-[11px] tracking-[0.14em]" style={{ color: zs.text }}>
                    {info?.label ?? zone.level}
                  </p>
                  {info?.description && <p className="mt-1 text-xs leading-relaxed text-gray-300">{info.description}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
