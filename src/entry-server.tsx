import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { MEDIA_ASSETS } from './data/mediaAssets';
import { getPageSeo, type SupportedRoute } from './lib/seo';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function streamToString(stream: ReadableStream<Uint8Array>): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode();
  return result;
}

export async function renderRoute(route: SupportedRoute) {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={route}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  const html = await streamToString(prelude);
  const seo = getPageSeo(route);
  const canonicalUrl = `https://funngro-redesign.vercel.app${seo.canonicalPath}`;
  const heroAsset = route === '/teen' ? MEDIA_ASSETS.heroTeen : MEDIA_ASSETS.heroCompany;

  const preloadHeroTag = `<link rel="preload" as="image" type="image/avif" imagesrcset="${escapeHtmlAttr(heroAsset.preloadAvifSrcSet)}" imagesizes="${escapeHtmlAttr(heroAsset.sizes)}" fetchpriority="high" />`;
  const jsonLdTags = seo.jsonLd
    .map(
      (schema) =>
        `<script type="application/ld+json" data-funngro-jsonld="true">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ');

  const headTags = `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />\n    ${preloadHeroTag}\n    ${jsonLdTags}`;

  return {
    html,
    headTags,
    seo,
  };
}
