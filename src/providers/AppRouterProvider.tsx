import { router } from '@/routes/routes';
import { RouterProvider } from 'react-router-dom';

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
