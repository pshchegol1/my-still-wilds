# Still Wilds

## Pinned typography

Use the CSS custom properties and utility classes in `src/index.css` for all future UI work.

| Role | Font | Weight | Size / line-height |
| --- | --- | ---: | --- |
| H1 | Cinzel | 700 | 64px / 1.1 |
| H2 | Cinzel | 700 | 48px / 1.15 |
| H3 | Cinzel | 700 | 32px / 1.2 |
| H4 | Cinzel | 600 | 24px / 1.3 |
| Body | Outfit | 400 | 16px / 1.17 |
| Body small | Outfit | 400 | 13px / 1.6 |
| Label | Outfit | 400 | 12px / 1.4 |
| Button | Outfit | 600 | 14px / 1 |
| Tag | Cinzel, uppercase | 400 | 10px / 1.1 |
| Navigation link | Outfit | 400 | 13px / 1 |
| Statistic number | Cinzel | 700 | Responsive display size |

Semantic `h1`–`h4` styles implement the heading scale. Use `.type-body`,
`.type-body-sm`, `.type-label`, `.type-button`, and `.type-tag` for other roles.
Use `.type-stat` for numeric display values.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
