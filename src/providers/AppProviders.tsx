import AuthProvider from './AuthProvider';
import QueryProvider from './QueryProvider';
import RouterProvider from './RouterProvider';

export default function AppProviders() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </QueryProvider>
  );
}
