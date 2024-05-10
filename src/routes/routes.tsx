import HomePage from '../pages/HomePage';
import DishInfoPage from '../pages/DishInfoPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/dish/:id',
    element: <DishInfoPage />,
  },
];

export default routes;
