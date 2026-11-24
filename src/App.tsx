import { lazy, Suspense, useEffect } from 'react';
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const TeenPage = lazy(() => import('./pages/TeenPage'));

function ScrollToTopAndCanonicalRoute() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/company', { replace: true });
      return;
    }

    if (hash) {
      const targetId = hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, navigate]);

  return null;
}

function RouteFallback() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page content"
      className="mx-auto min-h-[70vh] max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    />
  );
}

export function AppShell() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col bg-[#060D1A] text-slate-100">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
          >
            Skip to main content
          </a>

          <Navbar />
          <ScrollToTopAndCanonicalRoute />

          <main id="main-content" className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<CompanyPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/teen" element={<TeenPage />} />
                <Route path="*" element={<Navigate to="/company" replace />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export default AppShell;
