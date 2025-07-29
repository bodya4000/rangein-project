import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'
import { ActivityIndicator, StatusBar } from 'react-native'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { queryClient } from '@/constants'
import { useSetup } from '@/hooks'
import i18n from '@/i18n'

export default function RootLayout() {
  const { ready } = useSetup()
  if (!ready) return <ActivityIndicator />
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <KeyboardProvider>
          {/* <SafeAreaProvider> */}
          <StatusBar barStyle={'light-content'} />
          <Stack
            screenOptions={{
              headerShown: false,
              animation: 'none',
              gestureEnabled: false,
              statusBarHidden: true,
              navigationBarHidden: true,
            }}
          >
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='index' />

            <Stack.Screen name='home/index' />
            <Stack.Screen name='home/game/story' />
            <Stack.Screen name='home/game/chat' />

            <Stack.Screen name='profile/index' />
          </Stack>
          {/* </SafeAreaProvider> */}
        </KeyboardProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
