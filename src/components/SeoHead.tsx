import { useEffect } from 'react';
import { getPageSeo, type SupportedRoute } from '../lib/seo';

interface SeoHeadProps {
  route: SupportedRoute;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Dynamically synchronises document title, meta description, canonical URL,
 * Open Graph tags, Twitter metadata, and Schema.org JSON-LD per route.
 */
export function SeoHead({ route }: SeoHeadProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const seo = getPageSeo(route, origin);
    const canonicalUrl = `${origin}${seo.canonicalPath}`;

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existingJsonLd = document.head.querySelectorAll('script[data-funngro-jsonld="true"]');
    existingJsonLd.forEach((node) => node.remove());

    seo.jsonLd.forEach((schemaObject) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-funngro-jsonld', 'true');
      script.textContent = JSON.stringify(schemaObject);
      document.head.appendChild(script);
    });
  }, [route]);

  return null;
}
