// Отзывы и наблюдения посетителей.
//
// Два режима:
// - Supabase: если заданы VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY
//   (в .env.local — см. supabase/README.md). Это рабочий режим для сайта.
// - Демо: если ключей нет и сайт запущен через `npm run dev` — всё
//   хранится в localStorage этого браузера, чтобы можно было посмотреть
//   и проверить весь путь "отправить → одобрить → показать" без сервера.
// В собранном сайте без ключей блоки отзывов просто не показываются.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = SUPABASE_URL && SUPABASE_KEY ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;
export const MODE = supabase ? 'supabase' : import.meta.env.DEV ? 'demo' : 'off';
export const isEnabled = MODE !== 'off';

const TABLE = 'contributions';
const DEMO_KEY = 'stillwilds-demo-contributions';

// ---------- демо-хранилище ----------
function demoRead() {
  try {
    return JSON.parse(localStorage.getItem(DEMO_KEY) ?? '[]');
  } catch {
    return [];
  }
}
function demoWrite(rows) {
  try {
    localStorage.setItem(DEMO_KEY, JSON.stringify(rows));
  } catch {
    // приватный режим/запрет хранилища — демо просто не сохранит
  }
}

// ---------- примеры для демо-режима ----------
// Вымышленные посетители — только чтобы посмотреть, как блок выглядит
// с отзывами. Показываются ТОЛЬКО в демо-режиме (npm run dev без ключей
// Supabase), помечены плашкой "Sample" и никогда не попадают в базу и в
// собранный сайт.
const DEMO_SAMPLES = [
  {
    id: 'sample-1', kind: 'review', page_type: 'park', page_slug: 'banff',
    author_name: 'Anna from Calgary', rating: 5, visit_month: '2026-07-01',
    body: 'We went to Lake Louise on a weekday and still found the lot full by morning. Next time we’ll take the Parks Canada shuttle — check the schedule before you go.',
    created_at: '2026-08-02T10:00:00Z',
  },
  {
    id: 'sample-2', kind: 'review', page_type: 'park', page_slug: 'banff',
    author_name: 'Marc & Julie, Montréal', rating: 4, visit_month: '2026-09-01',
    body: 'September was perfect — golden larches and fewer crowds. We saw elk near town; gave them lots of space, as the signs ask. Bring warm layers, mornings were near freezing.',
    created_at: '2026-09-20T15:30:00Z',
    // Для примера — снимки, которые уже есть на сайте.
    photos: [
      { src: '/parks/Banff National Park/Moraine Lake.png', alt: 'Moraine Lake' },
      { src: '/wildlife/Elk/elk-hero.jpg', alt: 'Elk near Banff' },
      { src: '/parks/Banff National Park/Town of Banff.png', alt: 'Town of Banff' },
    ],
  },
  {
    id: 'sample-3', kind: 'review', page_type: 'park', page_slug: 'banff',
    author_name: 'Priya', rating: 5, visit_month: '2026-02-01',
    body: 'Winter visit with kids. Short, easy walks and hot chocolate in town made it magical. Roads were icy — winter tires are a must.',
    created_at: '2026-03-05T09:15:00Z',
  },
].map((r) => ({ ...r, status: 'approved', sample: true }));

// ---------- фото ----------
// Посетитель прикрепляет до 3 фото. Перед загрузкой каждое фото
// перерисовывается через canvas: уменьшается до 1600 px по длинной
// стороне и пересохраняется в JPEG — при этом из файла пропадают все
// метаданные EXIF, включая GPS-координаты (важно, чтобы не выдать место
// животного или дом посетителя).
//
// Хранилище (Supabase Storage):
// - photos-pending — закрытое: посетители только загружают, видит
//   только модератор;
// - photos — открытое: сюда фото копируются при одобрении.
export const PHOTO_LIMITS = { count: 3, maxRawMB: 15, maxSide: 1600 };
const PENDING_BUCKET = 'photos-pending';
const PUBLIC_BUCKET = 'photos';

export async function prepareImage(file, maxSide = PHOTO_LIMITS.maxSide) {
  if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(file.type) && !/\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)) {
    throw new Error(`${file.name}: please use a JPEG, PNG, or WebP photo.`);
  }
  if (file.size > PHOTO_LIMITS.maxRawMB * 1024 * 1024) {
    throw new Error(`${file.name}: photo is larger than ${PHOTO_LIMITS.maxRawMB} MB.`);
  }
  let bitmap;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch {
    throw new Error(`${file.name}: this photo format can’t be read by your browser. Try a JPEG.`);
  }
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.85));
  if (!blob) throw new Error(`${file.name}: could not process this photo.`);
  return blob;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

const publicUrl = (path) => supabase.storage.from(PUBLIC_BUCKET).getPublicUrl(path).data.publicUrl;

// ---------- проверка ввода (дублирует ограничения в schema.sql) ----------
export const LIMITS = { name: [2, 40], body: [10, 1000], place: 80 };

export function validate(entry) {
  const errors = {};
  const name = entry.author_name?.trim() ?? '';
  const body = entry.body?.trim() ?? '';
  if (name.length < LIMITS.name[0] || name.length > LIMITS.name[1]) {
    errors.author_name = `Name: ${LIMITS.name[0]}–${LIMITS.name[1]} characters.`;
  }
  if (body.length < LIMITS.body[0] || body.length > LIMITS.body[1]) {
    errors.body = `Please write ${LIMITS.body[0]}–${LIMITS.body[1]} characters.`;
  }
  if (entry.kind === 'review' && !(entry.rating >= 1 && entry.rating <= 5)) {
    errors.rating = 'Please choose a rating.';
  }
  if (entry.place && entry.place.length > LIMITS.place) {
    errors.place = `Place: up to ${LIMITS.place} characters.`;
  }
  if ((entry.photos?.length ?? 0) > PHOTO_LIMITS.count) {
    errors.photos = `Up to ${PHOTO_LIMITS.count} photos.`;
  }
  if (entry.photos?.length && !entry.photoConsent) {
    errors.photoConsent = 'Please confirm the photos are yours.';
  }
  return errors;
}

// ---------- публичное API ----------

// Одобренные записи для страницы. photos приходят как [{ src }].
export async function listApproved(pageType, pageSlug) {
  if (MODE === 'demo') {
    return [...demoRead(), ...DEMO_SAMPLES]
      .filter((r) => r.page_type === pageType && r.page_slug === pageSlug && r.status === 'approved')
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
  if (MODE !== 'supabase') return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select('id, kind, author_name, rating, body, visit_month, place, photos, created_at')
    .eq('page_type', pageType)
    .eq('page_slug', pageSlug)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) throw error;
  return data.map((r) => ({ ...r, photos: (r.photos ?? []).map((path) => ({ src: publicUrl(path) })) }));
}

// Отправка — всегда в статусе 'pending'. entry.photos — Blob'ы из prepareImage.
export async function submit(entry) {
  const row = {
    kind: entry.kind,
    page_type: entry.page_type,
    page_slug: entry.page_slug,
    author_name: entry.author_name.trim(),
    rating: entry.kind === 'review' ? entry.rating : null,
    body: entry.body.trim(),
    visit_month: entry.visit_month ? `${entry.visit_month}-01` : null,
    place: entry.place?.trim() || null,
  };
  const blobs = entry.photos ?? [];

  if (MODE === 'demo') {
    // В демо фото хранятся прямо в localStorage как data-URL (уменьшенные).
    const photos = [];
    for (const blob of blobs) photos.push({ src: await blobToDataUrl(blob) });
    const rows = demoRead();
    rows.push({ ...row, photos, id: crypto.randomUUID(), status: 'pending', created_at: new Date().toISOString() });
    demoWrite(rows);
    return;
  }
  if (MODE !== 'supabase') throw new Error('Community features are not configured.');

  const paths = [];
  for (const blob of blobs) {
    const path = `pending/${crypto.randomUUID()}.jpg`;
    const { error } = await supabase.storage.from(PENDING_BUCKET).upload(path, blob, { contentType: 'image/jpeg', upsert: false });
    if (error) throw new Error('A photo could not be uploaded. Please try again.');
    paths.push(path);
  }
  // Без .select(): посетитель не может читать pending-записи (RLS).
  const { error } = await supabase.from(TABLE).insert({ ...row, photos: paths });
  if (error) {
    // Запись не сохранилась — фото без записи никому не нужны.
    if (paths.length) await supabase.storage.from(PENDING_BUCKET).remove(paths).catch(() => {});
    throw error;
  }
}

// ---------- модерация ----------

export async function moderatorSignIn(email, password) {
  if (MODE === 'demo') return { demo: true };
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return {};
}

export async function moderatorSignOut() {
  if (MODE === 'supabase') await supabase.auth.signOut();
}

export async function currentModerator() {
  if (MODE === 'demo') return { email: 'demo mode' };
  if (MODE !== 'supabase') return null;
  const { data } = await supabase.auth.getUser();
  const user = data?.user;
  if (!user) return null;
  const { data: isMod } = await supabase.rpc('is_moderator');
  return isMod ? user : { ...user, notModerator: true };
}

// Для модерации к каждой записи добавляется photoUrls (для показа),
// а photos остаётся списком путей в хранилище.
export async function listForModeration(status) {
  if (MODE === 'demo') {
    return demoRead()
      .filter((r) => r.status === status)
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
      .map((r) => ({ ...r, photoUrls: (r.photos ?? []).map((p) => p.src) }));
  }
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })
    .limit(200);
  if (error) throw error;

  return Promise.all(
    data.map(async (r) => {
      const paths = r.photos ?? [];
      if (!paths.length) return { ...r, photoUrls: [] };
      if (r.status === 'approved') return { ...r, photoUrls: paths.map(publicUrl) };
      const { data: signed } = await supabase.storage.from(PENDING_BUCKET).createSignedUrls(paths, 3600);
      return { ...r, photoUrls: (signed ?? []).map((s) => s.signedUrl).filter(Boolean) };
    }),
  );
}

// row — запись целиком (нужны пути фото).
export async function setStatus(row, status) {
  const reviewed_at = new Date().toISOString();
  if (MODE === 'demo') {
    demoWrite(demoRead().map((r) => (r.id === row.id ? { ...r, status, reviewed_at } : r)));
    return;
  }
  const paths = row.photos ?? [];
  let photos = paths;

  if (status === 'approved' && paths.some((p) => p.startsWith('pending/'))) {
    // Копируем фото из закрытого хранилища в открытое.
    photos = [];
    for (const path of paths) {
      if (!path.startsWith('pending/')) {
        photos.push(path);
        continue;
      }
      const target = path.replace(/^pending\//, 'approved/');
      const { data: file, error: dlError } = await supabase.storage.from(PENDING_BUCKET).download(path);
      if (dlError) throw dlError;
      const { error: upError } = await supabase.storage.from(PUBLIC_BUCKET).upload(target, file, { contentType: 'image/jpeg', upsert: true });
      if (upError) throw upError;
      photos.push(target);
    }
  } else if (status !== 'approved' && paths.length) {
    // Отклонено или снято с публикации — фото удаляем отовсюду.
    photos = [];
  }

  const { error } = await supabase.from(TABLE).update({ status, reviewed_at, photos }).eq('id', row.id);
  if (error) throw error;

  // Убираем лишние файлы уже после успешного обновления записи.
  const pendingPaths = paths.filter((p) => p.startsWith('pending/'));
  const publicPaths = paths.filter((p) => p.startsWith('approved/'));
  if (pendingPaths.length) await supabase.storage.from(PENDING_BUCKET).remove(pendingPaths).catch(() => {});
  if (status !== 'approved' && publicPaths.length) await supabase.storage.from(PUBLIC_BUCKET).remove(publicPaths).catch(() => {});
}

export async function remove(row) {
  if (MODE === 'demo') {
    demoWrite(demoRead().filter((r) => r.id !== row.id));
    return;
  }
  const { error } = await supabase.from(TABLE).delete().eq('id', row.id);
  if (error) throw error;
  const paths = row.photos ?? [];
  const pendingPaths = paths.filter((p) => p.startsWith('pending/'));
  const publicPaths = paths.filter((p) => p.startsWith('approved/'));
  if (pendingPaths.length) await supabase.storage.from(PENDING_BUCKET).remove(pendingPaths).catch(() => {});
  if (publicPaths.length) await supabase.storage.from(PUBLIC_BUCKET).remove(publicPaths).catch(() => {});
}
