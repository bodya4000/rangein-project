import { QueryClientProvider } from '@tanstack/react-query'
import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { globalStyles, queryClient } from '@/constants'
import { useSetup } from '@/hooks'
import i18n from '@/i18n'

export default function RootLayout() {
  const { ready } = useSetup()
  if (!ready) return null
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} />
          <Stack>
            <Stack.Screen options={{ headerShown: false }} name='(auth)' />
            <Stack.Screen options={{ headerShown: false }} name='index' />
            <Stack.Screen options={{ headerShown: false }} name='home' />
            <Stack.Screen options={{ headerShown: false }} name='profile' />
            <Stack.Screen options={{ headerShown: false }} name='story' />
            <Stack.Screen options={{ headerShown: false }} name='chat' />
          </Stack>
        </SafeAreaProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
