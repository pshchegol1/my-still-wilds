// Общие помощники для изображений в файлах провинций.

const COMMONS = 'https://upload.wikimedia.org/wikipedia/commons';
const UNSPLASH = 'https://images.unsplash.com';

// Герб или другое изображение с Wikimedia Commons.
// commons('thumb/a/a3/Coat_of_arms_of_Vancouver.svg/500px-...png')
export function commons(path) {
  return `${COMMONS}/${path}`;
}

// Фотография Unsplash с нужной шириной.
// unsplash('photo-1506744038136-46273834b3fb')
export function unsplash(photoId, width = 900) {
  return `${UNSPLASH}/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
