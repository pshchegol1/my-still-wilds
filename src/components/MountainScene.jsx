import './MountainScene.css';

// Сгенерированная в коде сцена гор — замена видео там, где реального
// ролика нет. Три слоя силуэтов с параллаксом, северное сияние и звезды,
// в палитре проекта. Каждый слой — SVG, повторенный дважды по ширине;
// бесконечный сдвиг на 50% дает бесшовный луп без склеек.
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: (i * 53 + 7) % 400,
  y: (i * 31 + 11) % 120,
  size: ((i * 17) % 12) / 10 + 0.4,
  delay: ((i * 29) % 50) / 10,
  duration: ((i * 13) % 30) / 10 + 3,
}));

// Одна цепь гор в виде замкнутого полигона (виден только верхний контур)
function Ridge({ points, fill }) {
  return <polygon points={points} fill={fill} />;
}

export default function MountainScene({ className = '', alt = 'Canadian mountains' }) {
  return (
    <div className={`mountain-scene ${className}`} role="img" aria-label={alt}>
      {/* Небо: закатный градиент, как в остальном фирменном стиле */}
      <div className="mountain-scene__sky" />

      {/* Звезды */}
      <svg className="mountain-scene__stars" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        {STARS.map((s) => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.size}
            fill="#fff"
            className="mountain-scene__star"
            style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
          />
        ))}
      </svg>

      {/* Солнечное свечение над горизонтом */}
      <div className="mountain-scene__sun" />

      {/* Северное сияние */}
      <div className="mountain-scene__aurora mountain-scene__aurora--one" />
      <div className="mountain-scene__aurora mountain-scene__aurora--two" />

      {/* Дальний хребет — самый медленный и светлый */}
      <div className="mountain-scene__layer mountain-scene__layer--back">
        <svg viewBox="0 0 400 200" preserveAspectRatio="none">
          <Ridge
            fill="#274a6b"
            points="0,140 30,95 55,120 90,60 120,110 150,80 180,125 210,70 240,115 270,90 300,130 330,85 360,120 400,100 400,200 0,200"
          />
          <Ridge
            fill="#274a6b"
            points="400,140 430,95 455,120 490,60 520,110 550,80 580,125 610,70 640,115 670,90 700,130 730,85 760,120 800,100 800,200 400,200"
          />
        </svg>
      </div>

      {/* Средний хребет */}
      <div className="mountain-scene__layer mountain-scene__layer--mid">
        <svg viewBox="0 0 400 200" preserveAspectRatio="none">
          <Ridge
            fill="#16324a"
            points="0,170 40,110 70,145 110,80 150,135 190,100 230,150 270,95 310,140 350,115 400,150 400,200 0,200"
          />
          <Ridge
            fill="#16324a"
            points="400,170 440,110 470,145 510,80 550,135 590,100 630,150 670,95 710,140 750,115 800,150 800,200 400,200"
          />
        </svg>
      </div>

      {/* Ближний хребет со снежными вершинами, освещенными закатом */}
      <div className="mountain-scene__layer mountain-scene__layer--front">
        <svg viewBox="0 0 400 200" preserveAspectRatio="none">
          <g>
            <polygon fill="#0a1c2c" points="0,200 0,155 45,75 90,150 130,95 175,160 220,85 265,150 310,110 355,165 400,140 400,200" />
            {/* Снег на вершинах */}
            <polygon fill="#e8ecf2" opacity="0.85" points="45,75 60,100 30,100" />
            <polygon fill="#e8ecf2" opacity="0.85" points="130,95 145,118 115,118" />
            <polygon fill="#e8ecf2" opacity="0.85" points="220,85 236,110 204,110" />
          </g>
          <g transform="translate(400,0)">
            <polygon fill="#0a1c2c" points="0,200 0,155 45,75 90,150 130,95 175,160 220,85 265,150 310,110 355,165 400,140 400,200" />
            <polygon fill="#e8ecf2" opacity="0.85" points="45,75 60,100 30,100" />
            <polygon fill="#e8ecf2" opacity="0.85" points="130,95 145,118 115,118" />
            <polygon fill="#e8ecf2" opacity="0.85" points="220,85 236,110 204,110" />
          </g>
        </svg>
      </div>

      {/* Туман у подножия */}
      <div className="mountain-scene__mist" />
    </div>
  );
}
