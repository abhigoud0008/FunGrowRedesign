import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Smartphone } from 'lucide-react';
import {
  ILLUSTRATIVE_PROJECTS,
  OFFICIAL_LINKS,
  TEEN_BENEFITS,
  TEEN_CATEGORIES,
  TEEN_FAQS,
  TEEN_HOW_IT_WORKS,
  type TeenCategoryId,
} from '../data/teenData';
import { filterProjectExamples } from '../lib/filters';
import { cn } from '../lib/utils';
import { SeoHead } from '../components/SeoHead';
import { MediaFrame } from '../components/MediaFrame';
import { FaqAccordion } from '../components/FaqAccordion';
import { Spotlight } from '../components/aceternity/Spotlight';
import { BackgroundBeams } from '../components/aceternity/BackgroundBeams';
import { CardSpotlight } from '../components/aceternity/CardSpotlight';

export function TeenPage() {
  const [selectedCategory, setSelectedCategory] = useState<TeenCategoryId>('all');

  const visibleProjects = filterProjectExamples(ILLUSTRATIVE_PROJECTS, selectedCategory);
  const activeCategoryMeta =
    TEEN_CATEGORIES.find((cat) => cat.id === selectedCategory) ?? TEEN_CATEGORIES[0];

  return (
    <>
      <SeoHead route="/teen" />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 pb-20 pt-14 md:pb-28 md:pt-20">
        <Spotlight className="-right-16 -top-32" fill="#10B981" />
        <BackgroundBeams className="opacity-45" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-sm font-medium tracking-wide text-emerald-400">
                Funngro for Teens · Learn, Build &amp; Earn Responsibly
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-slate-50 [text-wrap:balance]">
                Turn practical digital skills into real-world project experience
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Explore supervised online freelance projects built for teenagers and students—from
                website builds and mobile UI screens to video editing, QA testing, and digital
                marketing—designed to fit around school and college hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#app-download"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0"
                >
                  <span>Download Official App</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#categories"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700/90 bg-[#0B1528]/80 px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0"
                >
                  Browse Example Briefs
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <MediaFrame
                src="/src/assets/images/hero_teen_creator_1795535470988.jpg"
                alt="Young Indian student creator coding and designing digital interfaces on a laptop at a tidy desk"
                aspectClassName="aspect-video lg:aspect-auto lg:min-h-[360px]"
                className="h-full"
                priority
                caption="Build verifiable portfolio work on remote briefs around your study schedule."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. How Funngro Works */}
      <section
        id="how-it-works"
        aria-labelledby="teen-how-heading"
        className="py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="teen-how-heading"
              className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
            >
              How Funngro works for young creators
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              A clear, guardian-aware pathway from onboarding your first skill track to
              completing scoped company deliverables.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TEEN_HOW_IT_WORKS.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-slate-800/90 bg-[#0B1528]/80 p-6"
              >
                <span className="font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums">
                  {item.step}.
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Categories & Illustrative Project Cards */}
      <section
        id="categories"
        aria-labelledby="teen-categories-heading"
        className="border-t border-slate-800/80 bg-[#081122] py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="teen-categories-heading"
              className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
            >
              Skill categories and illustrative project briefs
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Explore the five core project tracks—Website Development, App Development,
              Content Creation, Software Testing, and Marketing. Each card below is an{' '}
              <strong className="font-semibold text-emerald-300">Illustrative Example</strong>{' '}
              showing typical deliverables rather than an active live listing or earnings promise.
            </p>
          </div>

          {/* Interactive category filter controls */}
          <div
            role="group"
            aria-label="Filter illustrative project examples by skill category"
            className="mt-8 flex flex-wrap gap-2 rounded-xl border border-slate-800/90 bg-[#060D1A] p-1.5"
          >
            {TEEN_CATEGORIES.map((category) => {
              const active = category.id === selectedCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    'min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0',
                    active
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <p aria-live="polite" className="mt-4 text-sm text-slate-400">
            Showing <span className="font-mono text-slate-200 tabular-nums">{visibleProjects.length}</span>{' '}
            {visibleProjects.length === 1 ? 'illustrative example' : 'illustrative examples'} —{' '}
            {activeCategoryMeta.description}
          </p>

          {/* Illustrative Project Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <CardSpotlight key={project.id} className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-emerald-400">
                    {project.categoryLabel} <span aria-hidden="true">·</span> Illustrative Example
                  </p>

                  <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-slate-50">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-5 border-t border-slate-800/80 pt-4">
                    <h4 className="font-display text-xs font-semibold tracking-wide text-slate-200">
                      Example deliverables
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {project.deliverables.map((deliv) => (
                        <li
                          key={deliv}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400"
                            aria-hidden="true"
                          />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-3.5 text-xs text-slate-400">
                  <p className="text-slate-300">
                    Skills practiced: {project.skillsPracticed.join(' · ')}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-slate-400 tabular-nums">
                    {project.estimatedScope}
                  </p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits of Working on Real-World Projects */}
      <section
        aria-labelledby="teen-benefits-heading"
        className="border-t border-slate-800/80 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                id="teen-benefits-heading"
                className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
              >
                Why real-world projects matter early
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Shipping work for real reviewers builds habits no textbook simulation teaches—from
                reading requirements carefully to managing deadlines alongside classes.
              </p>
              <div className="mt-8">
                <MediaFrame
                  src="/src/assets/images/capability_web_engineering_1795535471362.jpg"
                  alt="Laptop displaying clean responsive wireframes and frontend code side by side"
                  aspectClassName="aspect-[4/3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {TEEN_BENEFITS.map((benefit) => (
                <div
                  key={benefit.number}
                  className="rounded-2xl border border-slate-800/90 bg-[#0B1528]/80 p-6"
                >
                  <span className="font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums">
                    {benefit.number}.
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-50">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <FaqAccordion
        items={TEEN_FAQS}
        heading="Questions from teens and parents"
        subheading="Transparent answers on guardian approval, realistic expectations, illustrative project cards, and official app access."
      />

      {/* 6. Official App Download Links */}
      <section
        id="app-download"
        aria-labelledby="app-download-heading"
        className="border-t border-slate-800/80 bg-[#081122] py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-[#0B1528] p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  <span>Official Mobile Applications</span>
                </p>
                <h2
                  id="app-download-heading"
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-50 [text-wrap:balance]"
                >
                  Install the official Funngro app
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  Access verified onboarding, guardian-approved profiles, and live project
                  applications exclusively through Funngro&apos;s official mobile store listings.
                </p>

                <div className="mt-7 flex flex-wrap gap-3.5">
                  <a
                    href={OFFICIAL_LINKS.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 whitespace-nowrap shrink-0"
                  >
                    <span>Get it on Google Play</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={OFFICIAL_LINKS.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#060D1A] px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0"
                  >
                    <span>Download on App Store</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-6 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <h3 className="font-display text-base font-semibold text-slate-100">
                  Hiring teen talent as a company?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Explore scoped talent tracks, business campaign options, and brief
                  submission tools on our dedicated Company page.
                </p>
                <Link
                  to="/company"
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                >
                  <span>Go to Company Page (/company)</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
