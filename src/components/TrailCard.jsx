import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, ImagePlus, MapPin, Star, X } from 'lucide-react';
import { isEnabled, listApproved, submit, validate, prepareImage, LIMITS, MODE, PHOTO_LIMITS } from '../community/api';
import { activeStatus } from '../utils/status';
import '../community/CommunitySection.css';

// Раскрывающаяся карточка тропы (страницы парков).
//
// Шапка: название и сложность рядом, ниже цифры; справа — рейтинг из
// одобренных отзывов посетителей (звёзды кликабельны: клик раскрывает
// карточку и открывает форму с выбранной оценкой) и стрелка. Вся шапка —
// одна кнопка (растянута через ::after), звёзды лежат поверх неё.
//
// Внутри: описание тропы (data.details), фото и оценки посетителей и форма
// «оценить и добавить фото». Всё отправленное идёт на модерацию через тот же
// api, что блок «От посетителей»: запись — отзыв (kind 'review') страницы
// парка с особым slug `<парк>-trail-<тропа>` — менять схему базы не нужно.
// Без ключей Supabase (в собранном сайте) блок оценок и фото не показывается.

const slugify = (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const trailSlug = (parkSlug, trailName) => `${parkSlug}-trail-${slugify(trailName)}`.slice(0, 80).replace(/-$/, '');

function Stars({ value, size = 14, color }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value.toFixed(1)} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          style={{ width: size, height: size, color: n <= Math.round(value) ? color : 'rgba(255,255,255,0.22)' }}
          fill={n <= Math.round(value) ? color : 'none'}
        />
      ))}
    </span>
  );
}

// Одобренные записи по тропе + средняя оценка
function useTrailReviews(slug) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (!isEnabled) return undefined;
    let cancelled = false;
    listApproved('park', slug)
      .then((rows) => !cancelled && setItems(rows))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [slug]);
  const stats = useMemo(() => {
    const rated = items.filter((i) => i.rating);
    return { count: rated.length, avg: rated.length ? rated.reduce((s, i) => s + i.rating, 0) / rated.length : 0 };
  }, [items]);
  return { items, ...stats };
}

function MaskIcon({ src, className = 'h-4 w-4' }) {
  return <span className={`icon-mask shrink-0 ${className}`} style={{ '--icon-src': `url('${src}')` }} aria-hidden="true" />;
}

// Цвета временной плашки (closed — красный, отличается от оранжевого «Hard»)
const STATUS_STYLES = {
  closed: { text: '#f28b8b', border: 'rgba(242,139,139,0.5)', bg: 'rgba(242,139,139,0.12)' },
  caution: { text: '#e0b84a', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
};

const EMPTY_FORM = { author_name: '', body: '', website: '' };

// Форма «оценить тропу и добавить фото» + фото и советы посетителей
function TrailFeedback({ slug, trailName, items, starColor, rating, setRating, rateRef }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [submitError, setSubmitError] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const fileInput = useRef(null);
  const photosRef = useRef(photos);

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);
  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.url)), []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((l) => ({ ...l, index: (l.index + 1) % l.photos.length }));
      if (e.key === 'ArrowLeft') setLightbox((l) => ({ ...l, index: (l.index - 1 + l.photos.length) % l.photos.length }));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const gallery = items.flatMap((i) => (i.photos ?? []).map((p) => ({ ...p, author: i.author_name })));
  const tips = items.filter((i) => i.body).slice(0, 3);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function addPhotos(fileList) {
    const files = Array.from(fileList ?? []);
    if (!files.length) return;
    const room = PHOTO_LIMITS.count - photos.length;
    if (room <= 0) {
      setErrors((er) => ({ ...er, photos: `Up to ${PHOTO_LIMITS.count} photos.` }));
      return;
    }
    setPhotoBusy(true);
    const added = [];
    let problem = files.length > room ? `Only ${PHOTO_LIMITS.count} photos can be added.` : '';
    for (const file of files.slice(0, room)) {
      try {
        const blob = await prepareImage(file, MODE === 'demo' ? 900 : PHOTO_LIMITS.maxSide);
        added.push({ blob, url: URL.createObjectURL(blob) });
      } catch (err) {
        problem = err.message;
      }
    }
    setPhotos((p) => [...p, ...added]);
    setErrors((er) => ({ ...er, photos: problem || undefined }));
    setPhotoBusy(false);
    if (fileInput.current) fileInput.current.value = '';
  }

  function removePhoto(idx) {
    setPhotos((p) => {
      URL.revokeObjectURL(p[idx].url);
      return p.filter((_, i) => i !== idx);
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (form.website) {
      setState('sent');
      return;
    }
    const entry = { ...form, rating, kind: 'review', page_type: 'park', page_slug: slug, photos: photos.map((p) => p.blob), photoConsent };
    const found = validate(entry);
    setErrors(found);
    if (Object.keys(found).length) return;
    setState('sending');
    try {
      await submit(entry);
      setState('sent');
      setForm(EMPTY_FORM);
      setRating(0);
      photos.forEach((p) => URL.revokeObjectURL(p.url));
      setPhotos([]);
      setPhotoConsent(false);
    } catch (err) {
      setSubmitError(err?.message ?? 'Something went wrong.');
      setState('error');
    }
  }

  return (
    <div className="space-y-6" style={{ '--community-accent': starColor }}>
      <section>
        <h4 className="nb-h" style={{ color: starColor }}>
          <MaskIcon src="/icons/attractions/ph_image-thin.svg" />
          Visitor photos
        </h4>
        {gallery.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
            {gallery.slice(0, 12).map((photo, idx) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightbox({ photos: gallery, index: idx })}
                className="group overflow-hidden rounded-xl"
                aria-label={`Open photo by ${photo.author}`}
              >
                <img src={photo.src} alt="" loading="lazy" className="h-24 w-full object-cover transition duration-300 group-hover:scale-105" />
              </button>
            ))}
          </div>
        ) : (
          <p className="nb-item-text">No visitor photos yet. Add yours below.</p>
        )}
      </section>

      {tips.length > 0 && (
        <section>
          <h4 className="nb-h" style={{ color: starColor }}>
            <MaskIcon src="/icons/attractions/ph_info-thin.svg" />
            What visitors say
          </h4>
          <ul className="nb-list">
            {tips.map((t) => (
              <li key={t.id}>
                <p className="nb-item-title flex flex-wrap items-center gap-2">
                  {t.author_name}
                  {t.sample && (
                    <span className="type-tag rounded-full border border-white/20 px-2 py-0.5 text-[12px] tracking-[0.1em] text-gray-400">Sample</span>
                  )}
                  {t.rating ? <Stars value={t.rating} size={12} color={starColor} /> : null}
                </p>
                <p className="nb-item-text whitespace-pre-line">{t.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section ref={rateRef} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        {state === 'sent' && rating === 0 ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center">
            <CheckCircle2 className="h-9 w-9" style={{ color: starColor }} />
            <p className="type-stat text-base text-white">Thank you!</p>
            <p className="max-w-[320px] text-sm text-gray-400">Your rating and photos will appear here after a quick review.</p>
            <button
              type="button"
              onClick={() => setState('idle')}
              className="type-tag mt-1 rounded-full border border-white/15 px-4 py-2 text-[12px] tracking-[0.1em] text-gray-300 hover:border-white/30"
            >
              Share another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="community-form trail-form space-y-3" noValidate>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <p className="type-stat text-[13px] text-white">Rate {trailName}</p>
              <div className="flex items-center gap-2">
                <div className="flex" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n} star${n > 1 ? 's' : ''}`}
                      onClick={() => setRating(n)}
                      className="rounded p-[2px]"
                    >
                      <Star
                        className="h-5 w-5"
                        style={{ color: n <= rating ? starColor : 'rgba(255,255,255,0.25)' }}
                        fill={n <= rating ? starColor : 'none'}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && <span className="community-error !mt-0">{errors.rating}</span>}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_1.6fr]">
              <label className="block">
                <span className="community-label">Your name</span>
                <input value={form.author_name} onChange={update('author_name')} maxLength={LIMITS.name[1]} placeholder="e.g. Anna from Calgary" />
                {errors.author_name && <span className="community-error">{errors.author_name}</span>}
              </label>
              <label className="block">
                <span className="community-label">A tip for others</span>
                <textarea value={form.body} onChange={update('body')} rows={2} maxLength={LIMITS.body[1]} placeholder="Conditions, crowds, best time of day…" />
                {errors.body && <span className="community-error">{errors.body}</span>}
              </label>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="community-label">
                  Photos <em>(optional, up to {PHOTO_LIMITS.count})</em>
                </span>
                <div className="flex flex-wrap gap-2">
                  {photos.map((p, idx) => (
                    <div key={p.url} className="relative h-14 w-14 overflow-hidden rounded-lg">
                      <img src={p.url} alt={`Your photo ${idx + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute right-0.5 top-0.5 rounded-full bg-sw-bg/75 p-0.5 text-white"
                        aria-label={`Remove photo ${idx + 1}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {photos.length < PHOTO_LIMITS.count && (
                    <button
                      type="button"
                      onClick={() => fileInput.current?.click()}
                      disabled={photoBusy}
                      className="community-photo-add flex h-14 items-center justify-center gap-1.5 rounded-lg px-4 text-[12px] text-gray-400"
                    >
                      <ImagePlus className="h-4 w-4" />
                      {photoBusy ? 'Preparing…' : 'Add photo'}
                    </button>
                  )}
                </div>
                <input
                  ref={fileInput}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  className="hidden"
                  onChange={(e) => addPhotos(e.target.files)}
                />
                {errors.photos && <span className="community-error">{errors.photos}</span>}
              </div>

              <button
                type="submit"
                disabled={state === 'sending' || photoBusy}
                className="rounded-full px-5 py-2 text-[13px] font-semibold text-sw-bg transition hover:brightness-110 disabled:opacity-60"
                style={{ background: starColor }}
              >
                {state === 'sending' ? (photos.length ? 'Uploading photos…' : 'Sending…') : 'Send rating'}
              </button>
            </div>

            {photos.length > 0 && (
              <label className="flex items-start gap-2 text-[12px] leading-relaxed text-gray-300">
                <input type="checkbox" checked={photoConsent} onChange={(e) => setPhotoConsent(e.target.checked)} className="community-check mt-0.5" />
                I took these photos myself, and Still Wilds may publish them on this page with my name. Location data (GPS) is removed before upload.
              </label>
            )}
            {errors.photoConsent && <span className="community-error">{errors.photoConsent}</span>}

            <input className="community-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={update('website')} name="website" />

            <p className="text-[12px] leading-relaxed text-gray-500">
              Every post is read by a person before it appears. Only your own photos, no personal information, ads or links.
              {MODE === 'demo' ? ' Demo mode: saved only in this browser, approve at /moderation.' : ''}
            </p>

            {state === 'error' && <p className="community-error">{submitError}</p>}
          </form>
        )}
      </section>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-sw-bg/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Visitor photo"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-sw-bg/60 p-2 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={lightbox.photos[lightbox.index].src}
              alt=""
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex items-center gap-4 text-sm text-gray-300" onClick={(e) => e.stopPropagation()}>
              {lightbox.photos.length > 1 && (
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => setLightbox((l) => ({ ...l, index: (l.index - 1 + l.photos.length) % l.photos.length }))}
                  className="rounded-full border border-white/20 p-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              <span>
                Photo by {lightbox.photos[lightbox.index].author} · {lightbox.index + 1}/{lightbox.photos.length}
              </span>
              {lightbox.photos.length > 1 && (
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => setLightbox((l) => ({ ...l, index: (l.index + 1) % l.photos.length }))}
                  className="rounded-full border border-white/20 p-2"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

// trail — строка из data/parks/*.js; diffStyle — цвета сложности;
// isOpen/onToggle — раскрытием управляет страница (открыта одна карточка).
export default function TrailCard({ trail, parkSlug, diffStyle, starColor, isOpen, onToggle }) {
  const d = trail.details;
  const slug = trailSlug(parkSlug, trail.name);
  const { items, avg, count } = useTrailReviews(slug);
  const [hover, setHover] = useState(0);
  // форма остаётся в DOM после первого открытия — набранное не пропадает при сворачивании
  const [everOpen, setEverOpen] = useState(false);
  if (isOpen && !everOpen) setEverOpen(true);
  const [rating, setRating] = useState(0); // оценка для формы: из шапки или из самой формы
  const rateRef = useRef(null);
  const panelId = `trail-${slugify(trail.name)}`;

  const stats = (
    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-gray-400">
      {trail.length && <span>{trail.length}</span>}
      {trail.gain && <span>{trail.gain}</span>}
      {trail.time && <span>{trail.time}</span>}
      {trail.area && (
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {trail.area}
        </span>
      )}
    </div>
  );
  // Временная плашка («Closed until Dec 11») — сама пропадает после даты until
  const status = activeStatus(trail);
  const statusStyle = status ? STATUS_STYLES[status.level] ?? STATUS_STYLES.closed : null;
  const chip = (
    <>
      <span
        className="type-tag rounded-full border px-3 py-0.5 text-[12px] tracking-[0.1em]"
        style={{ color: diffStyle.text, borderColor: diffStyle.border, background: diffStyle.bg }}
      >
        {trail.difficulty}
      </span>
      {status && (
        <span
          className="type-tag rounded-full border px-3 py-0.5 text-[12px] tracking-[0.1em]"
          style={{ color: statusStyle.text, borderColor: statusStyle.border, background: statusStyle.bg }}
        >
          {status.label}
        </span>
      )}
    </>
  );

  if (!d) {
    return (
      <li className="glass glass--sm flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <p className="type-stat text-sm text-white">{trail.name}</p>
            {chip}
          </div>
          {stats}
        </div>
      </li>
    );
  }

  // Клик по звезде в шапке: раскрыть карточку и перейти к форме с этой оценкой
  const rate = (n) => {
    setRating(n);
    if (!isOpen) onToggle();
    window.setTimeout(() => rateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 450);
  };

  const shown = hover || Math.round(avg);

  return (
    <li className={`trail-card glass glass--sm rounded-2xl${isOpen ? ' is-open' : ''}`}>
      <div className="trail-card__bar flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="trail-card__head min-w-0 text-left"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="type-stat text-sm text-white">{trail.name}</span>
            {chip}
          </span>
          {stats}
        </button>

        <div className="flex shrink-0 items-center gap-3 self-start sm:self-auto">
          {isEnabled && (
            <div className="trail-card__rating flex items-center gap-2" onMouseLeave={() => setHover(0)}>
              <span className="inline-flex items-center" role="group" aria-label={`Rate ${trail.name}`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                    className="rounded p-[3px]"
                    onMouseEnter={() => setHover(n)}
                    onFocus={() => setHover(n)}
                    onBlur={() => setHover(0)}
                    onClick={() => rate(n)}
                  >
                    <Star
                      className="h-[18px] w-[18px]"
                      style={{ color: n <= shown ? starColor : 'rgba(255,255,255,0.28)' }}
                      fill={n <= shown ? starColor : 'none'}
                    />
                  </button>
                ))}
              </span>
              <span className="text-[12px] text-gray-400">{count > 0 ? `${avg.toFixed(1)} (${count})` : 'Rate this trail'}</span>
            </div>
          )}
          <ChevronDown className="trail-card__chevron h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>

      <div id={panelId} className="trail-card__panel" role="region" aria-label={`${trail.name}: details`} aria-hidden={!isOpen}>
        <div className="trail-card__clip">
          <div className="trail-card__body">
            {d.lead && <p className="nb-lead">{d.lead}</p>}

            {d.columns?.length > 0 && (
              <div className="nb-cols">
                {d.columns.map((col) => (
                  <section key={col.title}>
                    <h4 className="nb-h" style={{ color: diffStyle.text }}>
                      <MaskIcon src={col.icon} />
                      {col.title}
                    </h4>
                    <ul className="nb-list">
                      {col.items.map((it) => (
                        <li key={it.title}>
                          <p className="nb-item-title">{it.title}</p>
                          <p className="nb-item-text">{it.text}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}

            {d.practical?.length > 0 && (
              <section>
                <h4 className="nb-h" style={{ color: diffStyle.text }}>
                  <MaskIcon src="/icons/attractions/ph_info-thin.svg" />
                  Good to know
                </h4>
                <div className="nb-practical">
                  {d.practical.map((p) => (
                    <div key={p.label} className="nb-practical__item">
                      <p className="nb-practical__label" style={{ color: diffStyle.text }}>{p.label}</p>
                      <p className="nb-item-text">{p.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isEnabled && everOpen && (
              <TrailFeedback slug={slug} trailName={trail.name} items={items} starColor={starColor} rating={rating} setRating={setRating} rateRef={rateRef} />
            )}

            {d.link && (
              <a
                href={d.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-link type-tag"
                style={{ color: diffStyle.text, borderColor: diffStyle.border, background: diffStyle.bg }}
                tabIndex={isOpen ? 0 : -1}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {d.link.label}
              </a>
            )}

            <p className="nb-foot">
              {d.checked ? `Details checked ${d.checked}. ` : ''}
              Conditions, closures and shuttle rules change — confirm with Parks Canada before you go.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
