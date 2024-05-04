import { Theme } from '@radix-ui/themes';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import { RouterProvider } from 'react-router-dom';

interface AppProps {
  router: any;
}

const App: FC<AppProps> = ({ router }) => {
  return (
    <Provider store={store}>
      <Theme hasBackground={false}>
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  );
};

export default App;
