import { Outlet, createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './components/AppLayout';
import { Campaign } from './pages/Campaign';
import { Home } from './pages/Home';

const routes = [
  {
    path: '/',
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/campaign', element: <Campaign /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
