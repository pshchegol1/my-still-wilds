// Блок "От посетителей": список одобренных записей + форма отправки.
//
// kind="review"   — отзывы и советы (парки, города, маршруты), с оценкой.
// kind="sighting" — "Я видел(а)" на страницах животных, без оценки,
//                   место — только парк или регион.
// Всё отправленное попадает на модерацию и появляется после одобрения.

import { useEffect, useMemo, useRef, useState } from 'react';
import { Binoculars, CheckCircle2, ChevronLeft, ChevronRight, ImagePlus, MessageSquareHeart, ShieldAlert, Star, X } from 'lucide-react';
import { isEnabled, listApproved, submit, validate, prepareImage, LIMITS, MODE, PHOTO_LIMITS } from './api';
import './CommunitySection.css';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatMonth(value) {
  if (!value) return null;
  const [y, m] = value.split('-');
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

function Stars({ value, size = 14, color }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          style={{ width: size, height: size, color: n <= Math.round(value) ? color : 'rgba(255,255,255,0.18)' }}
          fill={n <= Math.round(value) ? color : 'none'}
        />
      ))}
    </span>
  );
}

const COPY = {
  review: {
    tag: 'From Our Visitors',
    title: 'Tips & Stories',
    highlight: 'From Travellers',
    intro: 'Been here? Share what helped you — road conditions, the best time of day, a quiet trail. Every post is read by a person before it appears.',
    empty: 'No stories yet — be the first to share a tip for fellow travellers.',
    bodyLabel: 'Your tip or story',
    bodyPlaceholder: 'What should other travellers know?',
    submitLabel: 'Share My Tip',
  },
  sighting: {
    tag: 'Visitor Sightings',
    title: 'Seen One?',
    highlight: 'Tell Us About It',
    intro: 'Share where and when you saw this animal — park or region only. Every sighting is read by a person before it appears.',
    empty: 'No sightings shared yet — be the first.',
    bodyLabel: 'What did you see?',
    bodyPlaceholder: 'What was it doing? How far away were you?',
    submitLabel: 'Share My Sighting',
  },
};

const GUIDELINES = {
  review: [
    'Be kind and honest — share what you experienced.',
    'Practical tips help most: roads, timing, closures, facilities.',
    'Photos: only your own, and no close-ups of other people without their permission.',
    'No personal information, ads, or links.',
  ],
  sighting: [
    'Park or region only — never an exact spot, trail marker, or GPS.',
    'Only sightings from a safe, legal distance. Stories or photos of feeding, baiting, or approaching wildlife won’t be published.',
    'Photos: only your own — taken from a respectful distance.',
    'No personal information, ads, or links.',
  ],
};

export default function CommunitySection({ kind, pageType, pageSlug, pageName, accent = '#6ee7a1', sensitive = false, placeSuggestions = [] }) {
  const copy = COPY[kind];
  const [items, setItems] = useState([]);
  const [loadError, setLoadError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [form, setForm] = useState({ author_name: '', rating: 0, body: '', visit_month: '', place: '', website: '' });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [submitError, setSubmitError] = useState('');
  const [lightbox, setLightbox] = useState(null); // { photos, index, author }

  // Фото к отправке: [{ blob, url }] — уже уменьшенные, без EXIF/GPS.
  const [photos, setPhotos] = useState([]);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [photoBusy, setPhotoBusy] = useState(false);
  const fileInput = useRef(null);
  const photosRef = useRef(photos);
  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);
  // При уходе со страницы освобождаем превью.
  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.url)), []);

  // Просмотр фото: Esc — закрыть, стрелки — листать.
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

  useEffect(() => {
    if (!isEnabled) return undefined;
    let cancelled = false;
    listApproved(pageType, pageSlug)
      .then((rows) => !cancelled && setItems(rows))
      .catch(() => !cancelled && setLoadError(true));
    return () => {
      cancelled = true;
    };
  }, [pageType, pageSlug]);

  const average = useMemo(() => {
    const rated = items.filter((i) => i.rating);
    return rated.length ? rated.reduce((s, i) => s + i.rating, 0) / rated.length : 0;
  }, [items]);

  if (!isEnabled) return null;

  const shown = showAll ? items : items.slice(0, 4);
  const thisMonth = new Date().toISOString().slice(0, 7);

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
        // В демо фото хранятся в браузере — уменьшаем сильнее.
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
    // Скрытое поле-ловушка: люди его не видят, боты заполняют.
    if (form.website) {
      setState('sent');
      return;
    }
    const entry = { ...form, kind, page_type: pageType, page_slug: pageSlug, photos: photos.map((p) => p.blob), photoConsent };
    const found = validate(entry);
    setErrors(found);
    if (Object.keys(found).length) return;
    setState('sending');
    try {
      await submit(entry);
      setState('sent');
      setForm({ author_name: '', rating: 0, body: '', visit_month: '', place: '', website: '' });
      photos.forEach((p) => URL.revokeObjectURL(p.url));
      setPhotos([]);
      setPhotoConsent(false);
    } catch (err) {
      setSubmitError(err?.message ?? 'Something went wrong.');
      setState('error');
    }
  }

  const Icon = kind === 'review' ? MessageSquareHeart : Binoculars;

  return (
    <section className="community space-y-7" id="community" style={{ '--community-accent': accent }}>
      <span
        className="type-tag inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.14em]"
        style={{ color: accent, borderColor: `color-mix(in srgb, ${accent} 45%, transparent)`, background: `color-mix(in srgb, ${accent} 10%, transparent)` }}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {copy.tag}
      </span>
      <h2 className="text-[30px] tracking-wide md:text-[38px]">
        {copy.title} <span style={{ color: accent }}>{copy.highlight}</span>
      </h2>
      <p className="max-w-[720px] text-sm leading-relaxed text-gray-400">{copy.intro}</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_1fr]">
        {/* ---------- список ---------- */}
        <div className="space-y-4">
          {kind === 'review' && items.length > 0 && (
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="type-stat text-2xl text-white">{average.toFixed(1)}</span>
              <Stars value={average} size={16} color={accent} />
              <span className="text-gray-500">
                {items.length} {items.length === 1 ? 'review' : 'reviews'}
              </span>
            </div>
          )}

          {loadError && <p className="text-sm text-gray-500">Stories couldn’t load right now. Please try again later.</p>}

          {!loadError && items.length === 0 && (
            <div className="glass glass--sm rounded-2xl p-6 text-sm text-gray-400">{copy.empty}</div>
          )}

          {shown.map((item) => (
            <article key={item.id} className="glass glass--sm rounded-2xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="type-stat text-sm text-white">
                  {item.author_name}
                  {item.sample && (
                    <span className="type-tag ml-2 rounded-full border border-white/20 px-2 py-0.5 align-middle text-[9px] tracking-[0.1em] text-gray-400">
                      Sample
                    </span>
                  )}
                </p>
                {item.rating ? <Stars value={item.rating} color={accent} /> : null}
              </div>
              <p className="mt-1 text-[11px] text-gray-500">
                {[item.place, formatMonth(item.visit_month?.slice(0, 7))].filter(Boolean).join(' · ')}
              </p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-300">{item.body}</p>
              {item.photos?.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {item.photos.slice(0, 6).map((photo, idx) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setLightbox({ photos: item.photos, index: idx, author: item.author_name })}
                      className="group overflow-hidden rounded-xl"
                      aria-label={`Open photo: ${photo.alt ?? 'visitor photo'}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        loading="lazy"
                        className="h-24 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-28"
                      />
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}

          {items.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="type-tag rounded-full border border-white/15 px-4 py-2 text-[11px] tracking-[0.1em] text-gray-300 hover:border-white/30"
            >
              {showAll ? 'Show fewer' : `Show all ${items.length}`}
            </button>
          )}
        </div>

        {/* ---------- форма ---------- */}
        <div className="glass glass--sm rounded-2xl p-6">
          {state === 'sent' ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-10 w-10" style={{ color: accent }} />
              <p className="type-stat text-lg text-white">Thank you!</p>
              <p className="max-w-[300px] text-sm text-gray-400">
                Your {kind === 'review' ? 'tip' : 'sighting'} will appear here after a quick review.
              </p>
              <button
                type="button"
                onClick={() => setState('idle')}
                className="type-tag mt-2 rounded-full border border-white/15 px-4 py-2 text-[11px] tracking-[0.1em] text-gray-300 hover:border-white/30"
              >
                Share another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="community-form space-y-4" noValidate>
              <p className="type-stat text-base text-white">
                {kind === 'review' ? `Your ${pageName} experience` : `Your ${pageName} sighting`}
              </p>

              {kind === 'sighting' && sensitive && (
                <div className="flex gap-2 rounded-xl border border-[#e08a4a]/30 bg-[#e08a4a]/[0.07] p-3 text-xs leading-relaxed text-[#f0b98a]">
                  <ShieldAlert className="h-4 w-4 shrink-0" />
                  This species is easily disturbed. Please share the park or region only — exact locations draw crowds and put animals at risk.
                </div>
              )}

              <label className="block">
                <span className="community-label">Your name</span>
                <input value={form.author_name} onChange={update('author_name')} maxLength={LIMITS.name[1]} placeholder="e.g. Anna from Calgary" />
                {errors.author_name && <span className="community-error">{errors.author_name}</span>}
              </label>

              {kind === 'review' && (
                <div>
                  <span className="community-label">Your rating</span>
                  <div className="flex gap-1" role="radiogroup" aria-label="Rating">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={form.rating === n}
                        aria-label={`${n} star${n > 1 ? 's' : ''}`}
                        onClick={() => setForm((f) => ({ ...f, rating: n }))}
                        className="rounded p-0.5"
                      >
                        <Star
                          className="h-6 w-6"
                          style={{ color: n <= form.rating ? accent : 'rgba(255,255,255,0.25)' }}
                          fill={n <= form.rating ? accent : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                  {errors.rating && <span className="community-error">{errors.rating}</span>}
                </div>
              )}

              {kind === 'sighting' && (
                <label className="block">
                  <span className="community-label">Park or region</span>
                  <input
                    value={form.place}
                    onChange={update('place')}
                    maxLength={LIMITS.place}
                    list={`places-${pageSlug}`}
                    placeholder="e.g. Jasper National Park"
                  />
                  <datalist id={`places-${pageSlug}`}>
                    {placeSuggestions.map((p) => (
                      <option key={p} value={p} />
                    ))}
                  </datalist>
                  {errors.place && <span className="community-error">{errors.place}</span>}
                </label>
              )}

              <label className="block">
                <span className="community-label">{kind === 'review' ? 'When did you visit?' : 'When?'} <em>(optional)</em></span>
                <input type="month" value={form.visit_month} onChange={update('visit_month')} max={thisMonth} />
              </label>

              <label className="block">
                <span className="community-label">{copy.bodyLabel}</span>
                <textarea
                  value={form.body}
                  onChange={update('body')}
                  rows={5}
                  maxLength={LIMITS.body[1]}
                  placeholder={copy.bodyPlaceholder}
                />
                <span className="mt-1 flex justify-between text-[11px] text-gray-500">
                  <span className="community-error">{errors.body ?? ''}</span>
                  <span>
                    {form.body.length}/{LIMITS.body[1]}
                  </span>
                </span>
              </label>

              {/* ---------- фото ---------- */}
              <div>
                <span className="community-label">
                  Photos <em>(optional, up to {PHOTO_LIMITS.count})</em>
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((p, idx) => (
                    <div key={p.url} className="relative overflow-hidden rounded-xl">
                      <img src={p.url} alt={`Your photo ${idx + 1}`} className="h-20 w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute right-1 top-1 rounded-full bg-[#070D19]/75 p-1 text-white"
                        aria-label={`Remove photo ${idx + 1}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {photos.length < PHOTO_LIMITS.count && (
                    <button
                      type="button"
                      onClick={() => fileInput.current?.click()}
                      disabled={photoBusy}
                      className="community-photo-add flex h-20 flex-col items-center justify-center gap-1 rounded-xl text-[11px] text-gray-400"
                    >
                      <ImagePlus className="h-5 w-5" />
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
                {photos.length > 0 && (
                  <>
                    <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
                      Photos are resized and their location data (GPS) is removed before upload.
                    </p>
                    <label className="mt-2 flex items-start gap-2 text-[11px] leading-relaxed text-gray-300">
                      <input
                        type="checkbox"
                        checked={photoConsent}
                        onChange={(e) => setPhotoConsent(e.target.checked)}
                        className="community-check mt-0.5"
                      />
                      I took these photos myself, and Still Wilds may publish them on this page with my name.
                    </label>
                    {errors.photoConsent && <span className="community-error">{errors.photoConsent}</span>}
                  </>
                )}
              </div>

              {/* Ловушка для ботов — скрыта от людей и экранных читалок */}
              <input
                className="community-honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={update('website')}
                name="website"
              />

              <ul className="space-y-1 text-[11px] leading-relaxed text-gray-500">
                {GUIDELINES[kind].map((g) => (
                  <li key={g}>• {g}</li>
                ))}
              </ul>

              {state === 'error' && <p className="community-error">{submitError}</p>}

              <button
                type="submit"
                disabled={state === 'sending' || photoBusy}
                className="w-full rounded-full px-5 py-3 text-sm font-semibold text-[#070D19] transition hover:brightness-110 disabled:opacity-60"
                style={{ background: accent }}
              >
                {state === 'sending' ? (photos.length ? 'Uploading photos…' : 'Sending…') : copy.submitLabel}
              </button>

              {MODE === 'demo' && (
                <p className="text-center text-[10px] text-gray-600">Demo mode — saved only in this browser. Approve at /moderation.</p>
              )}
            </form>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#070D19]/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visitor photo"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#070D19]/60 p-2 text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.photos[lightbox.index].src}
            alt={lightbox.photos[lightbox.index].alt ?? ''}
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
              Photo by {lightbox.author} · {lightbox.index + 1}/{lightbox.photos.length}
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
        </div>
      )}
    </section>
  );
}
