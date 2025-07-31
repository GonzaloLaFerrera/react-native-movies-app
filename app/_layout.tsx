import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Stack } from 'expo-router';
import '../global.css';
// import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {
  // nowPlayingAction();
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout