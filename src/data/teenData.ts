import type { FaqItem } from './companyData';

export type TeenCategoryId =
  | 'all'
  | 'web-dev'
  | 'app-dev'
  | 'content'
  | 'testing'
  | 'marketing';

export interface TeenSkillCategory {
  id: TeenCategoryId;
  label: string;
  description: string;
}

export interface IllustrativeProject {
  id: string;
  categoryId: Exclude<TeenCategoryId, 'all'>;
  categoryLabel: string;
  title: string;
  summary: string;
  deliverables: string[];
  skillsPracticed: string[];
  estimatedScope: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface TeenBenefit {
  number: string;
  title: string;
  description: string;
}

export const TEEN_HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Download the official app & build your profile',
    description:
      'Create an account on the Funngro app with parent or guardian consent, highlight your interests, and complete skill orientation.',
  },
  {
    step: '02',
    title: 'Browse scoped company projects',
    description:
      'Explore remote-friendly briefs across coding, design, testing, content, and marketing with clear instructions before applying.',
  },
  {
    step: '03',
    title: 'Complete milestones on your schedule',
    description:
      'Work on real deliverables around school and college hours, submit drafts for review, and incorporate constructive feedback.',
  },
  {
    step: '04',
    title: 'Build portfolio proof & earn responsibly',
    description:
      'Receive approved project payouts within the platform framework while documenting genuine work experience early.',
  },
];

export const TEEN_CATEGORIES: TeenSkillCategory[] = [
  {
    id: 'all',
    label: 'All Categories',
    description: 'Explore illustrative example briefs across all five core tracks.',
  },
  {
    id: 'web-dev',
    label: 'Website Development',
    description: 'Responsive landing pages, portfolio sites, HTML/CSS fixes, and React components.',
  },
  {
    id: 'app-dev',
    label: 'App Development',
    description: 'Mobile UI screens, prototype flows, basic feature modules, and cross-platform testing.',
  },
  {
    id: 'content',
    label: 'Content Creation',
    description: 'Short-form video editing, product explainer scripts, blog drafts, and social graphics.',
  },
  {
    id: 'testing',
    label: 'Software Testing',
    description: 'Exploratory bug reporting, signup flow audits, and mobile responsiveness checks.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description: 'Social media calendars, brand trend research, and student audience insights.',
  },
];

export const ILLUSTRATIVE_PROJECTS: IllustrativeProject[] = [
  {
    id: 'ex-web-1',
    categoryId: 'web-dev',
    categoryLabel: 'Website Development',
    title: 'Responsive Event Registration Landing Page',
    summary:
      'Build a clean single-page event site from a Figma wireframe with accessible forms, mobile navigation, and fast image loading.',
    deliverables: ['Mobile-friendly HTML/React page', 'Validated registration form', 'Cross-browser layout check'],
    skillsPracticed: ['Semantic HTML', 'Tailwind CSS', 'Responsive Grids'],
    estimatedScope: 'Illustrative Example · 4–6 hours scoped',
  },
  {
    id: 'ex-app-1',
    categoryId: 'app-dev',
    categoryLabel: 'App Development',
    title: 'Habit Tracker Onboarding Screen Prototype',
    summary:
      'Implement three interactive mobile onboarding screens with clean state transitions and accessible button targets.',
    deliverables: ['3 interactive screen views', 'Input state handling', 'Walkthrough screen recording'],
    skillsPracticed: ['React Native / Flutter UI', 'Component State', 'Mobile Ergonomics'],
    estimatedScope: 'Illustrative Example · 5–8 hours scoped',
  },
  {
    id: 'ex-content-1',
    categoryId: 'content',
    categoryLabel: 'Content Creation',
    title: '60-Second Product Walkthrough Reel & Captions',
    summary:
      'Edit raw product screen recordings into a crisp vertical explainer video with readable subtitles and structured pacing.',
    deliverables: ['9:16 vertical MP4 cut', 'Burned-in accessible captions', '2 thumbnail frame options'],
    skillsPracticed: ['Video Pacing', 'Visual Storytelling', 'Copy Editing'],
    estimatedScope: 'Illustrative Example · 3–4 hours scoped',
  },
  {
    id: 'ex-testing-1',
    categoryId: 'testing',
    categoryLabel: 'Software Testing',
    title: 'Checkout & Signup Flow QA Audit (Android)',
    summary:
      'Walk through a staging mobile app build, document edge-case UI overlaps, and log clear reproduction steps for developers.',
    deliverables: ['Structured bug log sheet', 'Annotated issue screenshots', 'Onboarding clarity notes'],
    skillsPracticed: ['QA Documentation', 'Edge-Case Thinking', 'UX Observation'],
    estimatedScope: 'Illustrative Example · 2–3 hours scoped',
  },
  {
    id: 'ex-marketing-1',
    categoryId: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Campus Audience Social Calendar & Hook Ideas',
    summary:
      'Research how student communities engage with study productivity tools and draft a two-week organic content plan.',
    deliverables: ['10 post concepts with hooks', 'Format & hashtag notes', 'Audience tone summary'],
    skillsPracticed: ['Audience Research', 'Campaign Planning', 'Concise Copywriting'],
    estimatedScope: 'Illustrative Example · 3–5 hours scoped',
  },
  {
    id: 'ex-web-2',
    categoryId: 'web-dev',
    categoryLabel: 'Website Development',
    title: 'Technical SEO & Accessibility Metadata Cleanup',
    summary:
      'Audit heading hierarchy, image alt descriptions, and meta descriptions across a five-page static marketing website.',
    deliverables: ['Updated H1–H3 structure', 'Descriptive alt text sheet', 'Meta tag recommendations'],
    skillsPracticed: ['Technical SEO', 'Web Accessibility', 'Clean Markup'],
    estimatedScope: 'Illustrative Example · 3–4 hours scoped',
  },
];

export const TEEN_BENEFITS: TeenBenefit[] = [
  {
    number: '01',
    title: 'Real portfolio work beyond classroom exercises',
    description:
      'Replace hypothetical school assignments with tangible briefs that demonstrate how you solve actual product, content, or testing problems.',
  },
  {
    number: '02',
    title: 'Professional communication & deadline habits',
    description:
      'Practice reading client briefs carefully, asking clarifying questions, accepting review notes, and delivering clean work on time.',
  },
  {
    number: '03',
    title: 'Study-first flexibility',
    description:
      'Choose remote, milestone-based briefs that fit around school exams, college classes, and family commitments.',
  },
  {
    number: '04',
    title: 'Guided financial awareness',
    description:
      'Learn how scoped project compensation, budgeting, and saving work in practice under guardian-approved oversight.',
  },
];

export const TEEN_FAQS: FaqItem[] = [
  {
    id: 'teen-faq-1',
    question: 'Do I need prior work experience to start on Funngro?',
    answer:
      'No prior corporate job is required. Building a few honest practice samples—such as a small website, video edit, or app review—helps companies understand what you can deliver.',
  },
  {
    id: 'teen-faq-2',
    question: 'Is there any guarantee of fixed monthly earnings?',
    answer:
      'No. Project availability, selection, and compensation depend on active company briefs, your skill track, and the quality of deliverables approved. This redesign intentionally avoids earnings guarantees.',
  },
  {
    id: 'teen-faq-3',
    question: 'Are the project cards on this page live active jobs?',
    answer:
      'No. Every project card displayed on this assessment redesign is clearly marked as an Illustrative Example to show the format and skill expectations of typical briefs. Live opportunities appear inside the official Funngro app.',
  },
  {
    id: 'teen-faq-4',
    question: 'Is parent or guardian consent needed for teens?',
    answer:
      'Yes. Funngro emphasises safe, supervised participation for teenagers and young learners, including parental or guardian involvement during onboarding.',
  },
  {
    id: 'teen-faq-5',
    question: 'Where do I download the official Funngro mobile app?',
    answer:
      'You can install the official Funngro app directly from the Google Play Store for Android or the Apple App Store for iOS using the official links at the bottom of this page.',
  },
];

export const OFFICIAL_LINKS = {
  website: 'https://www.funngro.com/',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.wishbanc.funngro',
  appStore: 'https://apps.apple.com/in/app/funngro/id1579361075',
};
