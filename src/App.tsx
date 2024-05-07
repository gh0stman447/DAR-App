import { Theme } from '@radix-ui/themes';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import { RouterProvider } from 'react-router-dom';
import RecipesLoader from './components/RecipesLoader';
import { isFiltersNull } from './state/recipes/recipesSlice';

interface AppProps {
  router: any;
}

const App: FC<AppProps> = ({ router }) => {
  return (
    <>
      <Provider store={store}>
        <Theme hasBackground={false}>
          <RecipesLoader>
            <RouterProvider router={router} />
          </RecipesLoader>
        </Theme>
      </Provider>
    </>
  );
};

export default App;
