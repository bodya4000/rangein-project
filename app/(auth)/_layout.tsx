import { QueryClientProvider } from '@tanstack/react-query'
import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'

import { queryClient } from '@/constants'
import i18n from '@/i18n'

export default function AuthLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <StatusBar barStyle={'light-content'} />
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name='index' />
        </Stack>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
