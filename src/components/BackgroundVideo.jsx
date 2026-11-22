import { useEffect, useRef, useState } from 'react';

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
  // ref на сам <video>/<img> — чтобы родитель мог менять его стили напрямую
  // (например, параллакс при прокрутке без перерисовки страницы)
  mediaRef,
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

  // Ролик, ушедший за экран, ставим на паузу и запускаем снова, когда он
  // возвращается: декодирование 4K-видео, которого не видно, грузит
  // процессор и видеокарту и делает прокрутку остальной страницы рваной.
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!showingVideo || !video || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      // запускаем чуть заранее, чтобы при возврате кадр уже двигался
      { rootMargin: '200px 0px' },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [showingVideo, src]);

  const style = {
    ...(brightness ? { filter: `brightness(${brightness})` } : null),
    ...styleOverride,
  };

  if (showingVideo) {
    return (
      <video
        ref={(el) => {
          videoRef.current = el;
          if (mediaRef) mediaRef.current = el;
        }}
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

  return <img ref={mediaRef} src={poster} alt={alt} className={className} style={style} />;
}
