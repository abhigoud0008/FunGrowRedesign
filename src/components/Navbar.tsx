import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTeenPage = location.pathname.startsWith('/teen');
  const ctaTarget = isTeenPage ? '#app-download' : '#contact-brief';
  const ctaLabel = isTeenPage ? 'Get the App' : 'Share a Brief';

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060D1A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/company"
          className="font-display text-xl font-bold tracking-tight text-slate-50 transition-colors hover:text-emerald-400 whitespace-nowrap shrink-0"
        >
          Funngro
        </Link>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          <Link
            to="/company"
            className={cn(
              'whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8',
              !isTeenPage && 'text-emerald-400 underline underline-offset-8'
            )}
          >
            For Companies
          </Link>
          <Link
            to="/teen"
            className={cn(
              'whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8',
              isTeenPage && 'text-emerald-400 underline underline-offset-8'
            )}
          >
            For Teens
          </Link>
          <a
            href="#how-it-works"
            className="whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Primary CTA on desktop + Mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={ctaTarget}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0"
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1528] text-slate-200 transition-colors hover:border-slate-700 hover:text-white md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="border-t border-slate-800/90 bg-[#081122] px-4 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            <Link
              to="/company"
              className={cn(
                'flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors',
                !isTeenPage
                  ? 'bg-emerald-500/10 text-emerald-300'
                  : 'text-slate-200 hover:bg-slate-800/60'
              )}
            >
              For Companies
            </Link>
            <Link
              to="/teen"
              className={cn(
                'flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors',
                isTeenPage
                  ? 'bg-emerald-500/10 text-emerald-300'
                  : 'text-slate-200 hover:bg-slate-800/60'
              )}
            >
              For Teens
            </Link>
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/60"
            >
              How It Works
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/60"
            >
              FAQ
            </a>
            <a
              href={ctaTarget}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
