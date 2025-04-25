import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';

// Export the app element for SSR/pre-rendering capture.
const app = (
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
        <Analytics debug={false} />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);

createRoot(document.getElementById('root')!).render(app);

export { app };
