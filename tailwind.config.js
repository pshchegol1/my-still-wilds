import plugin from 'tailwindcss/plugin';
import { PALETTE } from './src/palette.js';

// Tailwind собирается при сборке, а не в браузере (раньше стоял Play CDN
// cdn.tailwindcss.com: он компилировал стили прямо на странице и на каждое
// изменение DOM заново обходил все элементы с классами — отсюда тормоза).
// Версия закреплена на 3.4.17 — ровно та, что отдавал CDN, и конфиг по
// умолчанию, как у CDN, поэтому набор утилит и их вид не меняются.
//
// content — где искать классы. Классы, собранные из кусков строки
// (`bg-${color}`), сюда не попадут: имя класса должно встречаться в коде
// целиком.
//
// Палитра сайта (src/palette.js): классы sw-* (bg-sw-green/30 …) и те же
// цвета CSS-переменными --sw-* в :root для обычных .css-файлов.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sw: PALETTE,
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': Object.fromEntries(Object.entries(PALETTE).map(([name, value]) => [`--sw-${name}`, value])),
      });
    }),
  ],
};
