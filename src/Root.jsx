import App from './App.jsx';
import ProvincePage from './pages/ProvincePage.jsx';
import { getProvinceDetail } from './data/provinces/index.js';
import { matchProvinceRoute, useRoute } from './router.js';

export default function Root() {
  const path = useRoute();
  const provinceId = matchProvinceRoute(path);
  const province = provinceId ? getProvinceDetail(provinceId) : null;

  // Нет данных для этого id — показываем главную страницу
  if (!province) return <App />;

  return <ProvincePage province={province} />;
}
