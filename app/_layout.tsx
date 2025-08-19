import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { colors, queryClient } from '@/constants'
import i18n from '@/i18n'

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.black },
              }}
            >
              <Stack.Screen name='(auth)' />
              <Stack.Screen name='index' options={{ freezeOnBlur: true }} />
              <Stack.Screen options={{ animation: 'fade_from_bottom' }} name='home/game/story' />
              <Stack.Screen
                options={{ animation: 'slide_from_right' }}
                name='home/game/chat/index'
              />
              <Stack.Screen
                options={{
                  presentation: 'transparentModal',
                  contentStyle: { backgroundColor: 'transparent' },
                }}
                name='home/game/chat/option-modal'
              />
              <Stack.Screen options={{ animation: 'slide_from_left' }} name='profile/index' />
            </Stack>
          </KeyboardProvider>
        </SafeAreaProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
