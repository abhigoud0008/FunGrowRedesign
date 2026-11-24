import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

async function bootstrap() {
  const container = document.getElementById('root')!;
  const hasPrerenderedMarkup =
    container.innerHTML.trim().length > 0 &&
    !container.innerHTML.includes('<!--app-html-->');

  // Preload only the active route chunk before hydrating prerendered HTML
  // to prevent Suspense fallback flash while preserving route code splitting.
  if (hasPrerenderedMarkup) {
    if (window.location.pathname.startsWith('/teen')) {
      await import('./pages/TeenPage');
    } else {
      await import('./pages/CompanyPage');
    }
  }

  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  if (hasPrerenderedMarkup) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}

void bootstrap();
