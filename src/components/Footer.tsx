import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/teenData';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/90 bg-[#040914] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/company"
              className="font-display text-xl font-bold tracking-tight text-slate-50"
            >
              Funngro
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Connecting businesses with supervised young digital talent across web builds,
              content creation, software testing, and marketing.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              Unofficial Funngro website redesign created for a frontend development, UI/UX,
              and technical SEO skill assessment. No fabricated statistics, testimonials, or
              earnings guarantees are included.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="font-display text-sm font-semibold text-slate-100">
              Platform Pages
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/company" className="inline-block py-0.5 transition-colors hover:text-emerald-300">
                  For Companies (/company)
                </Link>
              </li>
              <li>
                <Link to="/teen" className="inline-block py-0.5 transition-colors hover:text-emerald-300">
                  For Teens (/teen)
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="inline-block py-0.5 transition-colors hover:text-emerald-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-block py-0.5 transition-colors hover:text-emerald-300">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-slate-100">
              Official Funngro Resources
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href={OFFICIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-0.5 transition-colors hover:text-emerald-300"
                >
                  <span>funngro.com</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-0.5 transition-colors hover:text-emerald-300"
                >
                  <span>Google Play Store</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-0.5 transition-colors hover:text-emerald-300"
                >
                  <span>Apple App Store</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>Unofficial Funngro Skill Assessment Redesign · Built with React, Tailwind CSS, Framer Motion &amp; React Router.</p>
          <p className="font-mono tabular-nums">Routes: /company · /teen</p>
        </div>
      </div>
    </footer>
  );
}
