import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import DeviceModule from 'modules/device-module/src/DeviceModule'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { queryClient } from '@/constants'
import i18n from '@/i18n'

export default function RootLayout() {
  // const { ready } = useSetup()

  console.log(DeviceModule.getDeviceId())

  // if (!ready) return <ActivityIndicator />
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <KeyboardProvider enabled={false}>
            <StatusBar barStyle={'light-content'} />
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='(auth)' />
              <Stack.Screen name='index' />
              <Stack.Screen options={{ animation: 'fade_from_bottom' }} name='home/game/story' />
              <Stack.Screen
                options={{
                  animation: 'slide_from_right',
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                }}
                name='home/game/chat'
              />
              <Stack.Screen options={{ animation: 'slide_from_left' }} name='profile/index' />
            </Stack>
          </KeyboardProvider>
        </SafeAreaProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
