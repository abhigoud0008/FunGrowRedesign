import { COMPANY_FAQS, type FaqItem } from '../data/companyData';
import { OFFICIAL_LINKS, TEEN_FAQS } from '../data/teenData';

export type SupportedRoute = '/company' | '/teen';

export interface PageSeoConfig {
  route: SupportedRoute;
  title: string;
  description: string;
  canonicalPath: string;
  ogType: 'website';
  jsonLd: Record<string, unknown>[];
}

export function buildOrganizationJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Funngro',
    url: baseUrl,
    sameAs: [OFFICIAL_LINKS.website, OFFICIAL_LINKS.googlePlay, OFFICIAL_LINKS.appStore],
    description:
      'Platform connecting businesses with supervised teen freelancers for digital projects across engineering, content, testing, and marketing.',
  };
}

export function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getPageSeo(route: SupportedRoute, origin = 'https://funngro-redesign.vercel.app'): PageSeoConfig {
  const cleanOrigin = origin.replace(/\/+$/, '');

  if (route === '/teen') {
    return {
      route: '/teen',
      title: 'Funngro for Teens — Real Projects & Digital Skills',
      description:
        'Explore real-world freelance project tracks in web development, apps, content creation, QA testing, and marketing for teens on Funngro.',
      canonicalPath: '/teen',
      ogType: 'website',
      jsonLd: [
        buildOrganizationJsonLd(cleanOrigin),
        {
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Funngro',
          operatingSystem: 'Android, iOS',
          applicationCategory: 'BusinessApplication',
          downloadUrl: [OFFICIAL_LINKS.googlePlay, OFFICIAL_LINKS.appStore],
          description:
            'Mobile platform for teens to explore scoped real-world digital projects under supervised guidelines.',
        },
        buildFaqJsonLd(TEEN_FAQS),
      ],
    };
  }

  return {
    route: '/company',
    title: 'Funngro for Companies — Hire Skilled Teen Freelancers',
    description:
      'Partner with supervised, digitally fluent teen freelancers for web builds, content production, QA testing, and marketing sprints on Funngro.',
    canonicalPath: '/company',
    ogType: 'website',
    jsonLd: [
      buildOrganizationJsonLd(cleanOrigin),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Youth Freelance Project Staffing & Digital Campaigns',
        provider: {
          '@type': 'Organization',
          name: 'Funngro',
        },
        areaServed: 'India',
        description:
          'Scoped project collaboration connecting businesses with vetted teen talent across engineering, design, testing, and content.',
      },
      buildFaqJsonLd(COMPANY_FAQS),
    ],
  };
}
