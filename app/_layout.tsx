import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'
import i18n from '@/i18n'


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Quintessential-Regular': require('../assets/fonts/Quintessential-Regular.ttf'),
  })

  if (!fontsLoaded) return null
  return (
    <I18nextProvider i18n={i18n}>
      <StatusBar barStyle={'light-content'} />
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name='index' />
        <Stack.Screen options={{ headerShown: false }} name='profile' />
      </Stack>
    </I18nextProvider>
  )
}
