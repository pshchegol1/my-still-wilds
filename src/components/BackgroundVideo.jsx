import { useState } from 'react';

// Фоновый ролик с картинкой-постером. Картинка же остается запасным
// вариантом: если файла нет, он не загрузился или система просит меньше
// анимации, показываем ее вместо видео.
export default function BackgroundVideo({
  src,
  poster,
  alt,
  className = '',
  brightness,
  style: styleOverride,
}) {
  const [failed, setFailed] = useState(false);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const style = {
    ...(brightness ? { filter: `brightness(${brightness})` } : null),
    ...styleOverride,
  };

  if (src && !failed && !reduceMotion) {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onError={() => setFailed(true)}
        className={className}
        style={style}
      />
    );
  }

  return <img src={poster} alt={alt} className={className} style={style} />;
}
