import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error('dist directory not found. Run vite build first.');
  }

  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');
  const { renderRoute } = await import(pathToFileURL(ssrEntryPath).href);

  const routes = [
    { route: '/company', outPath: path.resolve(distDir, 'company', 'index.html') },
    { route: '/teen', outPath: path.resolve(distDir, 'teen', 'index.html') },
    { route: '/company', outPath: path.resolve(distDir, 'index.html') },
  ];

  for (const { route, outPath } of routes) {
    const { html, headTags, seo } = await renderRoute(route);

    let pageHtml = template
      .replace('<!--app-html-->', html)
      .replace('<!--app-head-->', headTags)
      .replace(/<title>.*?<\/title>/s, `<title>${seo.title}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${seo.description}" />`
      )
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:title" content="${seo.title}" />`
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:description" content="${seo.description}" />`
      )
      .replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:title" content="${seo.title}" />`
      )
      .replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:description" content="${seo.description}" />`
      );

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, pageHtml, 'utf-8');
  }

  fs.rmSync(path.resolve(rootDir, 'dist-ssr'), { recursive: true, force: true });
  console.log('Prerendered static HTML for /, /company, and /teen.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
