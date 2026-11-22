// Цвета секций маршрута — общие для RouteSections, страницы маршрута и Road Trips.
// Вынесены из RouteSections.jsx: файл с компонентами должен экспортировать
// только компоненты (иначе ломается Fast Refresh в dev-режиме).

// Тот же язык, что и в ParkPage.jsx/CityPage.jsx, плюс terracotta —
// тёплый акцент только для культурного/исторического блока, чтобы он
// визуально не читался как предупреждение (danger/caution уже заняты
// другими смыслами на этой странице).
export const ROUTE_STYLES = {
  safe: { text: '#6ee7a1', solid: '#38a169', border: 'rgba(56,161,105,0.45)', bg: 'rgba(56,161,105,0.12)' },
  caution: { text: '#e0b84a', solid: '#c99a2e', border: 'rgba(224,184,74,0.45)', bg: 'rgba(224,184,74,0.12)' },
  danger: { text: '#e08a4a', solid: '#d96b32', border: 'rgba(224,138,74,0.45)', bg: 'rgba(224,138,74,0.12)' },
  gold: { text: '#D4A017', solid: '#b8890f', border: 'rgba(212,160,23,0.45)', bg: 'rgba(212,160,23,0.12)' },
  blue: { text: '#488CDC', solid: '#3a71b3', border: 'rgba(72,140,220,0.45)', bg: 'rgba(72,140,220,0.12)' },
  terracotta: { text: '#D97A52', solid: '#B85F3C', border: 'rgba(217,122,82,0.45)', bg: 'rgba(217,122,82,0.12)' },
};

export const accentOf = (route) => ROUTE_STYLES[route.accentLevel] ?? ROUTE_STYLES.blue;
