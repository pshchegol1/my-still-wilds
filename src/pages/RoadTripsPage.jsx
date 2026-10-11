import { useState } from 'react';
import { ArrowLeft, ArrowRight, Info, Navigation } from 'lucide-react';
import { navigate } from '../router';
import TripSearchForm from '../components/TripSearchForm';
import RouteExplorer from '../components/RouteExplorer';
import { SectionTag, RouteWarnings, RouteCulture, RouteStops } from '../components/RouteSections';
import { getRouteDetail } from '../data/routes/index.js';

// Маршрут, который открыт при заходе на страницу — у него есть данные
// карты, поэтому сразу видно, как работает поиск.
const DEFAULT_SLUG = 'calgary-banff-lake-louise';

export default function RoadTripsPage() {
  const [slug, setSlug] = useState(DEFAULT_SLUG);
  const route = getRouteDetail(slug) ?? getRouteDetail(DEFAULT_SLUG);

  return (
    <div className="road-trips-page min-h-screen bg-[#070D19] text-[#EBF0F4] selection:bg-white/20 selection:text-white">
      <main className="mx-auto max-w-[1180px] space-y-10 px-6 pb-14 pt-7">

        <button
          type="button"
          onClick={() => navigate('/')}
          className="type-button inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-[#070D19]/50 px-4 py-2 text-[#e6ddc8] backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* ================================================= */}
        {/* ЗАГОЛОВОК                                          */}
        {/* ================================================= */}
        <header className="space-y-5">
          <SectionTag icon={Navigation}>Road Trips</SectionTag>
          <h1 className="text-[38px] leading-[1.05] tracking-wide text-white md:text-[52px]">
            Road Trips Through <span style={{ color: '#488CDC' }}>Canada</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
            Honest route guides — real drive times, fuel gaps, cell-service dead zones and the land
            these highways actually cross. Pick a starting city and a park to see the drive on the map.
          </p>
        </header>

        {/* ================================================= */}
        {/* ПОИСК + КАРТА                                      */}
        {/* ================================================= */}
        <section className="space-y-6">
          <TripSearchForm currentSlug={DEFAULT_SLUG} onSelect={setSlug} />

          {route.explorer ? (
            <RouteExplorer key={`map-${route.slug}`} route={route} />
          ) : (
            // Паромные маршруты: линию по воде проложить нечем, поэтому
            // вместо пустой карты — карточка маршрута со ссылкой на гид.
            <div className="glass glass--sm space-y-4 rounded-2xl p-6" style={{ '--glass-tint': '72, 140, 220' }}>
              <p className="type-tag text-[9px] tracking-[0.14em] text-gray-500">Selected Route</p>
              <p className="type-stat text-xl text-white">{route.name}</p>
              <p className="max-w-2xl text-sm leading-relaxed text-gray-400">{route.description}</p>
              <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                This one crosses water by ferry, so there is no drivable line to draw — the sections
                below still cover it in full.
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Showing <span className="text-gray-300">{route.name}</span>
            </p>
            <button
              type="button"
              onClick={() => navigate(`/route/${route.slug}`)}
              className="type-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5"
              style={{ background: '#3a71b3' }}
            >
              Open the Full Guide
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* ================================================= */}
        {/* СЕКЦИИ ВЫБРАННОГО МАРШРУТА                         */}
        {/* Те же компоненты, что и на /route/:slug — меняются  */}
        {/* вместе с выбором в форме.                          */}
        {/* ================================================= */}
        <div key={`sections-${route.slug}`} className="space-y-10">
          <hr className="border-white/10" />
          <RouteWarnings route={route} />
          <hr className="border-white/10" />
          <RouteCulture route={route} />
          <hr className="border-white/10" />
          <RouteStops route={route} />
        </div>
      </main>

      {/* ================================================= */}
      {/* ПОДВАЛ                                             */}
      {/* ================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <img src="/logo-green.svg" alt="Still Wilds" className="w-[110px]" />
          <p>© 2026 StillWilds.ca · Route data is approximate — always check current conditions</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#488CDC' }} />
            Updated 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
