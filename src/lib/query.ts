import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: true,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});

queryClient.setQueryDefaults(['trpc'], {
  networkMode: 'offlineFirst',
});

queryClient.setMutationDefaults(['trpc'], {
  onError: (error) => {
    if (error) {
      const trpcError = error;
      if (trpcError.data?.code === 'UNAUTHORIZED' || trpcError.message?.includes('401')) {
        window.location.href = '/login';
      }
    }
  },
});
