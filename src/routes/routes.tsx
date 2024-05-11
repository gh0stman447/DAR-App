import HomePage from '../pages/HomePage';
import DishInfoPage from '../pages/RecipenfoPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/recipe/:id',
    element: <DishInfoPage />,
  },
];

export default routes;
