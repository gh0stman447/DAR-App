import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '@radix-ui/themes/styles.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
);