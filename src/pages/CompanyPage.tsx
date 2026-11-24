import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Send, CheckCircle2 } from 'lucide-react';
import {
  CAMPAIGN_OPPORTUNITIES,
  COMPANY_BENEFITS,
  COMPANY_FAQS,
  HIRING_PROCESS,
  TALENT_CATEGORIES,
} from '../data/companyData';
import { validateCompanyInquiry, type CompanyInquiryInput } from '../lib/filters';
import { cn } from '../lib/utils';
import { SeoHead } from '../components/SeoHead';
import { MediaFrame } from '../components/MediaFrame';
import { FaqAccordion } from '../components/FaqAccordion';
import { Spotlight } from '../components/aceternity/Spotlight';
import { BackgroundBeams } from '../components/aceternity/BackgroundBeams';
import { BentoGrid, BentoGridItem } from '../components/aceternity/BentoGrid';
import { CardSpotlight } from '../components/aceternity/CardSpotlight';

const INITIAL_FORM: CompanyInquiryInput = {
  fullName: '',
  companyName: '',
  workEmail: '',
  category: TALENT_CATEGORIES[0].label,
  projectBrief: '',
};

export function CompanyPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(TALENT_CATEGORIES[0].id);
  const [formState, setFormState] = useState<CompanyInquiryInput>(INITIAL_FORM);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof CompanyInquiryInput, string>>>({});
  const [submittedBrief, setSubmittedBrief] = useState<CompanyInquiryInput | null>(null);

  const activeCategory =
    TALENT_CATEGORIES.find((cat) => cat.id === activeCategoryId) ?? TALENT_CATEGORIES[0];

  function handleFieldChange<K extends keyof CompanyInquiryInput>(
    field: K,
    value: CompanyInquiryInput[K]
  ) {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateCompanyInquiry(formState);
    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }
    setFormErrors({});
    setSubmittedBrief(validation.sanitized);
    setFormState(INITIAL_FORM);
  }

  return (
    <>
      <SeoHead route="/company" />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 pb-20 pt-14 md:pb-28 md:pt-20">
        <Spotlight className="-left-16 -top-32" fill="#10B981" />
        <BackgroundBeams className="opacity-50" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-sm font-medium tracking-wide text-emerald-400">
                Funngro for Companies · Supervised Youth Talent
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-slate-50 [text-wrap:balance]">
                Hire skilled teen freelancers for modern digital sprints
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Partner with screened student developers, designers, testers, and content
                creators on scoped project briefs—built for startups and marketing teams that
                value crisp deliverables and digital-native perspective.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-brief"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0"
                >
                  <span>Submit a Project Brief</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/teen"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700/90 bg-[#0B1528]/80 px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0"
                >
                  Explore Teen Experience
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <MediaFrame
                src="/src/assets/images/hero_company_workspace_1795535470034.jpg"
                alt="Startup team and young digital specialists reviewing wireframes and product dashboards together in a modern workspace"
                aspectClassName="aspect-video lg:aspect-auto lg:min-h-[360px]"
                className="h-full"
                priority
                caption="Collaborative project sprints with milestone-based review and structured briefs."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Hire Talented Young Freelancers & Business Benefits */}
      <section aria-labelledby="benefits-heading" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="benefits-heading"
              className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
            >
              Why growing businesses build with teen talent
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Instead of stretching core teams across repetitive production tasks, companies
              assign clear, bounded deliverables to eager young specialists.
            </p>
          </div>

          <BentoGrid className="mt-12">
            {COMPANY_BENEFITS.map((benefit) => (
              <BentoGridItem
                key={benefit.number}
                indexLabel={benefit.number}
                title={benefit.title}
                description={benefit.description}
                className={benefit.span === 'wide' ? 'md:col-span-2' : 'md:col-span-1'}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 3. Available Talent & Skill Categories */}
      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className="border-t border-slate-800/80 bg-[#081122] py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2
                id="capabilities-heading"
                className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
              >
                Available talent and skill categories
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Select a capability track to inspect sample deliverables and the types of
                company workflows each track supports.
              </p>
            </div>
          </div>

          {/* Interactive category selector tabs */}
          <div
            role="tablist"
            aria-label="Company talent categories"
            className="mt-10 flex flex-wrap gap-2 rounded-xl border border-slate-800/90 bg-[#060D1A] p-1.5"
          >
            {TALENT_CATEGORIES.map((category) => {
              const isSelected = category.id === activeCategory.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={cn(
                    'min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0',
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Active capability detail view */}
          <div
            role="tabpanel"
            aria-label={activeCategory.label}
            className="mt-8 grid grid-cols-1 items-stretch gap-8 rounded-2xl border border-slate-800/90 bg-[#0B1528] p-6 md:grid-cols-12 md:p-8"
          >
            <div className="flex flex-col justify-between md:col-span-7">
              <div>
                <p className="text-xs font-medium tracking-wide text-emerald-400">
                  {activeCategory.label} · {activeCategory.idealFor}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
                  {activeCategory.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {activeCategory.summary}
                </p>

                <div className="mt-6">
                  <h4 className="font-display text-sm font-semibold text-slate-200">
                    Typical brief deliverables
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeCategory.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact-brief"
                  onClick={() => handleFieldChange('category', activeCategory.label)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 whitespace-nowrap shrink-0"
                >
                  <span>Request {activeCategory.label} Brief</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <MediaFrame
                src={activeCategory.imageSrc}
                alt={activeCategory.imageAlt}
                aspectClassName="aspect-[4/3] md:h-full"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Hiring Process */}
      <section
        id="how-it-works"
        aria-labelledby="hiring-process-heading"
        className="border-t border-slate-800/80 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="hiring-process-heading"
              className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
            >
              Step-by-step hiring process
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              A predictable four-step workflow keeps expectations aligned from initial brief
              submission through final deliverable sign-off.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HIRING_PROCESS.map((item) => (
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

      {/* 5. Business Campaign Opportunities */}
      <section
        aria-labelledby="campaigns-heading"
        className="border-t border-slate-800/80 bg-[#081122] py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="campaigns-heading"
              className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
            >
              Business campaign opportunities
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Run focused multi-participant campaigns when your team needs parallel testing,
              varied creative hooks, or structured student feedback.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CAMPAIGN_OPPORTUNITIES.map((campaign) => (
              <CardSpotlight key={campaign.id}>
                <p className="text-xs font-medium text-emerald-400">
                  {campaign.category}
                </p>
                <h3 className="mt-2.5 font-display text-xl font-semibold text-slate-50">
                  {campaign.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                  {campaign.summary}
                </p>
                <p className="mt-4 border-t border-slate-800/80 pt-3.5 text-xs text-slate-400">
                  Expected output: <span className="text-slate-200">{campaign.outcome}</span>
                </p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <FaqAccordion
        items={COMPANY_FAQS}
        heading="Questions from hiring teams"
        subheading="Practical answers on brief scoping, parental oversight, deliverable quality checks, and multi-creator campaigns."
      />

      {/* 7. Contact & Call-to-Action Section */}
      <section
        id="contact-brief"
        aria-labelledby="contact-heading"
        className="border-t border-slate-800/80 bg-[#081122] py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                id="contact-heading"
                className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
              >
                Share your next project brief
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Describe what you need shipped and your target timeline. Use this assessment
                inquiry form to preview how structured company briefs are validated and
                prepared.
              </p>

              <div className="mt-8 space-y-4 border-t border-slate-800/80 pt-6 text-sm text-slate-300">
                <p>
                  Looking for the student &amp; teen workflow instead?{' '}
                  <Link
                    to="/teen"
                    className="font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                  >
                    Visit the Teen Page (/teen)
                  </Link>
                </p>
                <p className="text-xs text-slate-400">
                  Note: Submitting this form validates your brief locally as part of this
                  interactive redesign demo without sending external emails.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedBrief ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-emerald-500/40 bg-[#0B1528] p-8"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-50">
                        Project brief validated and ready
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        Thank you, <span className="font-semibold text-white">{submittedBrief.fullName}</span>.
                        Your brief for <span className="font-semibold text-white">{submittedBrief.companyName}</span> in{' '}
                        <span className="text-emerald-300">{submittedBrief.category}</span> has been formatted cleanly.
                      </p>
                      <dl className="mt-5 space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                        <div>
                          <dt className="inline font-medium text-slate-300">Reply email: </dt>
                          <dd className="inline">{submittedBrief.workEmail}</dd>
                        </div>
                        <div>
                          <dt className="inline font-medium text-slate-300">Scope summary: </dt>
                          <dd className="inline">{submittedBrief.projectBrief}</dd>
                        </div>
                      </dl>
                      <button
                        type="button"
                        onClick={() => setSubmittedBrief(null)}
                        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700 bg-[#060D1A] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                      >
                        Prepare Another Brief
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-slate-800/90 bg-[#0B1528] p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company-full-name"
                        className="block text-sm font-medium text-slate-200"
                      >
                        Full name
                      </label>
                      <input
                        id="company-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formState.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        aria-invalid={Boolean(formErrors.fullName)}
                        aria-describedby={formErrors.fullName ? 'error-fullName' : undefined}
                        placeholder="Priya Nair"
                        className="mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                      {formErrors.fullName && (
                        <p id="error-fullName" className="mt-1.5 text-xs text-rose-400">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company-org-name"
                        className="block text-sm font-medium text-slate-200"
                      >
                        Company or organisation
                      </label>
                      <input
                        id="company-org-name"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={formState.companyName}
                        onChange={(e) => handleFieldChange('companyName', e.target.value)}
                        aria-invalid={Boolean(formErrors.companyName)}
                        aria-describedby={formErrors.companyName ? 'error-companyName' : undefined}
                        placeholder="Kaveri Labs"
                        className="mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                      {formErrors.companyName && (
                        <p id="error-companyName" className="mt-1.5 text-xs text-rose-400">
                          {formErrors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company-work-email"
                        className="block text-sm font-medium text-slate-200"
                      >
                        Work email
                      </label>
                      <input
                        id="company-work-email"
                        name="workEmail"
                        type="email"
                        autoComplete="email"
                        value={formState.workEmail}
                        onChange={(e) => handleFieldChange('workEmail', e.target.value)}
                        aria-invalid={Boolean(formErrors.workEmail)}
                        aria-describedby={formErrors.workEmail ? 'error-workEmail' : undefined}
                        placeholder="team@company.com"
                        className="mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                      {formErrors.workEmail && (
                        <p id="error-workEmail" className="mt-1.5 text-xs text-rose-400">
                          {formErrors.workEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company-category"
                        className="block text-sm font-medium text-slate-200"
                      >
                        Primary talent category
                      </label>
                      <select
                        id="company-category"
                        name="category"
                        value={formState.category}
                        onChange={(e) => handleFieldChange('category', e.target.value)}
                        aria-invalid={Boolean(formErrors.category)}
                        aria-describedby={formErrors.category ? 'error-category' : undefined}
                        className="mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
                      >
                        {TALENT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.label}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.category && (
                        <p id="error-category" className="mt-1.5 text-xs text-rose-400">
                          {formErrors.category}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="company-project-brief"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Deliverables &amp; timeline summary
                    </label>
                    <textarea
                      id="company-project-brief"
                      name="projectBrief"
                      rows={4}
                      value={formState.projectBrief}
                      onChange={(e) => handleFieldChange('projectBrief', e.target.value)}
                      aria-invalid={Boolean(formErrors.projectBrief)}
                      aria-describedby={formErrors.projectBrief ? 'error-projectBrief' : undefined}
                      placeholder="Describe the deliverables, review criteria, and preferred completion window..."
                      className="mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                    {formErrors.projectBrief && (
                      <p id="error-projectBrief" className="mt-1.5 text-xs text-rose-400">
                        {formErrors.projectBrief}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                      All fields are validated before submission.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 whitespace-nowrap shrink-0"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Submit Brief Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
