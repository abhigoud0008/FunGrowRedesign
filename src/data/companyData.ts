import { MEDIA_ASSETS, type MediaAsset } from './mediaAssets';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TalentCategory {
  id: string;
  label: string;
  headline: string;
  summary: string;
  deliverables: string[];
  idealFor: string;
  mediaAsset: MediaAsset;
  imageAlt: string;
}

export interface BusinessBenefit {
  number: string;
  title: string;
  description: string;
  span?: 'wide' | 'standard';
}

export interface HiringStep {
  step: string;
  title: string;
  description: string;
}

export interface CampaignOpportunity {
  id: string;
  category: string;
  title: string;
  summary: string;
  outcome: string;
}

export const COMPANY_BENEFITS: BusinessBenefit[] = [
  {
    number: '01',
    title: 'Direct access to digitally fluent youth talent',
    description:
      'Work with screened student creators, developers, and testers who live inside modern mobile apps, short-form media, and web tools every day.',
    span: 'wide',
  },
  {
    number: '02',
    title: 'Defined deliverables with transparent scope',
    description:
      'Every engagement starts with a scoped brief and milestone checklist rather than open-ended hourly retainers.',
    span: 'standard',
  },
  {
    number: '03',
    title: 'Built-in coordination and quality review',
    description:
      'Structured brief templates, submission checkpoints, and platform oversight help lean teams ship campaigns without extra HR overhead.',
    span: 'standard',
  },
  {
    number: '04',
    title: 'Genuine Gen-Z product and market perspective',
    description:
      'Gather candid usability notes, campus feedback, and creative messaging tailored for younger digital audiences directly from your target demographic.',
    span: 'wide',
  },
];

export const TALENT_CATEGORIES: TalentCategory[] = [
  {
    id: 'web-app',
    label: 'Web & App Development',
    headline: 'Responsive websites, landing pages, and prototype builds',
    summary:
      'Engage young frontend and mobile developers for focused landing pages, WordPress or React updates, bug fixes, and interactive product prototypes.',
    deliverables: [
      'Responsive campaign microsites & landing pages',
      'HTML/CSS/React layout refinements and UI polish',
      'Basic mobile app screen builds and API wiring',
      'Cross-device browser layout verification',
    ],
    idealFor: 'Startups and D2C teams needing rapid web turnarounds',
    mediaAsset: MEDIA_ASSETS.capabilityWeb,
    imageAlt: 'Laptop displaying responsive website wireframes and clean frontend HTML code on a dark studio desk',
  },
  {
    id: 'content-media',
    label: 'Content & Video Creation',
    headline: 'Short-form video edits, social reels, and brand storytelling',
    summary:
      'Collaborate with creative storytellers to produce product explainers, UGC-style demos, blog drafts, and visual social assets built for modern feeds.',
    deliverables: [
      'Vertical short-form reels and product walkthrough clips',
      'Social carousel graphics and thumbnail templates',
      'SEO blog articles, product copy, and newsletter drafts',
      'Podcast or webinar highlight cuts with captions',
    ],
    idealFor: 'Consumer brands building consistent organic media pipelines',
    mediaAsset: MEDIA_ASSETS.capabilityContent,
    imageAlt: 'Young creator adjusting a mirrorless camera on a desk tripod alongside a studio microphone and editing tablet',
  },
  {
    id: 'marketing',
    label: 'Digital Marketing & Social',
    headline: 'Community campaigns, social calendars, and campus outreach',
    summary:
      'Partner with digital-native marketers who understand current platform formats, creator trends, and peer-to-peer product discovery.',
    deliverables: [
      'Monthly social media content calendars and scheduling',
      'Competitor messaging and trend audits across platforms',
      'Student community outreach and feedback surveys',
      'Email campaign formatting and UTM link hygiene',
    ],
    idealFor: 'Marketing teams expanding reach among student and youth cohorts',
    mediaAsset: MEDIA_ASSETS.heroCompany,
    imageAlt: 'Product and marketing team reviewing analytics dashboards and campaign wireframes together',
  },
  {
    id: 'qa-testing',
    label: 'Software Testing & Research',
    headline: 'Real-device QA testing, usability notes, and data hygiene',
    summary:
      'Run structured bug hunts and UX walkthroughs on real Android and iOS handsets before shipping releases to the broader public.',
    deliverables: [
      'Exploratory mobile app testing across varied screen sizes',
      'Step-by-step bug reproduction logs with screenshots',
      'First-time user onboarding friction reports',
      'Catalog tagging, spreadsheet cleanup, and desk research',
    ],
    idealFor: 'Product managers seeking fresh eyes before a release milestone',
    mediaAsset: MEDIA_ASSETS.heroTeen,
    imageAlt: 'Young developer testing a web application interface at a quiet desk workspace',
  },
];

export const HIRING_PROCESS: HiringStep[] = [
  {
    step: '01',
    title: 'Define your project brief',
    description:
      'Outline your deliverable goals, preferred skill track, review criteria, and timeline in a clear one-page brief.',
  },
  {
    step: '02',
    title: 'Review matched applicants',
    description:
      'Evaluate shortlisted teen freelancers based on their skill category, sample work, and readiness for your brief.',
  },
  {
    step: '03',
    title: 'Run scoped milestones',
    description:
      'Share reference materials and track progress through structured checkpoints with parent-acknowledged platform oversight.',
  },
  {
    step: '04',
    title: 'Approve work & settle payout',
    description:
      'Verify completed deliverables against your brief and release payment securely once milestones meet your standard.',
  },
];

export const CAMPAIGN_OPPORTUNITIES: CampaignOpportunity[] = [
  {
    id: 'beta-testing',
    category: 'Product & QA',
    title: 'Pre-launch app beta & usability sprints',
    summary:
      'Put your Android, iOS, or web build in front of structured youth testers to catch edge-case UI glitches and confusing onboarding copy.',
    outcome: 'Actionable bug logs and annotated user-flow recordings.',
  },
  {
    id: 'ugc-content',
    category: 'Creative Media',
    title: 'Authentic short-form video & social asset kits',
    summary:
      'Commission batches of product unboxings, feature explainers, and tutorial clips recorded in relatable home and campus environments.',
    outcome: 'Ready-to-publish vertical video packs and caption copy.',
  },
  {
    id: 'web-sprint',
    category: 'Web Engineering',
    title: 'Campaign microsites & landing page refreshes',
    summary:
      'Ship clean, mobile-responsive event pages, waitlist sites, and documentation layouts without pulling core engineers off product work.',
    outcome: 'Semantic HTML/React pages tested across mobile breakpoints.',
  },
  {
    id: 'market-pulse',
    category: 'Research & Growth',
    title: 'Gen-Z brand perception & campus pulse studies',
    summary:
      'Understand how younger consumers discover, evaluate, and talk about products in your category through structured qualitative briefs.',
    outcome: 'Organised survey synthesis and messaging recommendations.',
  },
];

export const COMPANY_FAQS: FaqItem[] = [
  {
    id: 'comp-faq-1',
    question: 'What types of projects are best suited for teen freelancers?',
    answer:
      'Well-scoped digital tasks with clear deliverables work best—such as landing page builds, short-form video editing, social media design kits, exploratory QA testing, content writing, and structured market research.',
  },
  {
    id: 'comp-faq-2',
    question: 'How does Funngro handle age eligibility and parental oversight?',
    answer:
      'Funngro is built specifically for supervised youth participation. Teens onboard with guardian awareness and platform guidelines so project scopes remain age-appropriate, remote-friendly, and transparent.',
  },
  {
    id: 'comp-faq-3',
    question: 'How do businesses review quality before releasing payment?',
    answer:
      'Projects are structured around clear milestones and acceptance criteria set in your initial brief. You review submitted deliverables against those requirements before final approval.',
  },
  {
    id: 'comp-faq-4',
    question: 'Can we run multi-creator campaigns instead of single-person tasks?',
    answer:
      'Yes. Companies can structure broader campaigns—such as parallel mobile app testing cohorts or multi-creator short-form content sprints—to gather diverse outputs under one unified brief.',
  },
  {
    id: 'comp-faq-5',
    question: 'Do we need an existing HR vendor setup to submit a brief?',
    answer:
      'No. You can start by sharing your project scope and timeline through the inquiry form on this page or via the official Funngro platform channels.',
  },
];
