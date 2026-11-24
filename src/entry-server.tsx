import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getPageSeo, type SupportedRoute } from './lib/seo';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderRoute(route: SupportedRoute) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={route}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  const seo = getPageSeo(route);
  const canonicalUrl = `https://funngro-redesign.vercel.app${seo.canonicalPath}`;
  const jsonLdTags = seo.jsonLd
    .map(
      (schema) =>
        `<script type="application/ld+json" data-funngro-jsonld="true">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ');

  const headTags = `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />\n    ${jsonLdTags}`;

  return {
    html,
    headTags,
    seo,
  };
}
