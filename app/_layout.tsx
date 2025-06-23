import { QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'

import { queryClient } from '@/constants'
import { useSetup } from '@/hooks'
import i18n from '@/i18n'

export default function RootLayout() {
  const { ready } = useSetup()

  if (!ready) return null
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <StatusBar barStyle={'light-content'} />
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name='index' />
          <Stack.Screen options={{ headerShown: false }} name='profile' />
          <Stack.Screen options={{ headerShown: false }} name='game' />
          <Stack.Screen options={{ headerShown: false }} name='chat' />
        </Stack>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
