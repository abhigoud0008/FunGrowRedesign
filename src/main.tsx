import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const hasPrerenderedMarkup =
  container.innerHTML.trim().length > 0 &&
  !container.innerHTML.includes('<!--app-html-->');

if (hasPrerenderedMarkup) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
