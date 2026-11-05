import { useEffect, useState } from 'react';

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
  // Сообщает родителю, что сейчас реально показывается — 'video' или
  // 'image'. Нужно, например, чтобы подпись автора фото (heroCredit) не
  // висела поверх видео, к которому она не относится.
  onModeChange,
}) {
  const [failed, setFailed] = useState(false);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const showingVideo = Boolean(src && !failed && !reduceMotion);

  useEffect(() => {
    onModeChange?.(showingVideo ? 'video' : 'image');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingVideo]);

  const style = {
    ...(brightness ? { filter: `brightness(${brightness})` } : null),
    ...styleOverride,
  };

  if (showingVideo) {
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
