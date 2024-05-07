import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DishInfoPage from './pages/DishInfoPage';
import '@radix-ui/themes/styles.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dish/:id',
    element: <DishInfoPage />,
  },
]);

root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
);
