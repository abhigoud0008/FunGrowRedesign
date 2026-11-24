import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CompanyPage } from './pages/CompanyPage';
import { TeenPage } from './pages/TeenPage';

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

export function AppShell() {
  return (
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
          <Routes>
            <Route path="/" element={<CompanyPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/teen" element={<TeenPage />} />
            <Route path="*" element={<Navigate to="/company" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default AppShell;
