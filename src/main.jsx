import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tailwind — первым: стили проекта ниже должны идти после него (см. tailwind.css)
import './tailwind.css'
import './index.css'
import Root from './Root.jsx'
import { resolvePage } from './pageResolver.js'

// Сначала догружаем код и данные открытой страницы, потом монтируем — так
// первый кадр сразу полный, как и раньше, когда всё лежало в одном бандле.
const path = window.location.pathname

resolvePage(path).then(
  (page) => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <Root initial={{ path, page }} />
      </StrictMode>,
    )
  },
  (error) => console.error(error),
)
