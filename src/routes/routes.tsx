import { AuthLayout } from '@components/layouts/auth-layout';
import { RootLayout } from '@components/layouts/root-layout';
import { HomePage } from '@pages/home-page';
import { LoginPage } from '@pages/login-page';
import { ProductListPage } from '@pages/product-list-page';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductListPage />,
        children: [],
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);
