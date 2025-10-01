import AuthProvider from './AuthProvider';
import QueryProvider from './QueryProvider';
import AppRouterProvider from './AppRouterProvider';

export default function AppProviders() {
  return (
    <QueryProvider>
      <AuthProvider>
        <AppRouterProvider />
      </AuthProvider>
    </QueryProvider>
  );
}
