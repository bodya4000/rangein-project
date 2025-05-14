import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { SafeAreaView, StatusBar, View } from 'react-native'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Quintessential-Regular': require('../assets/fonts/Quintessential-Regular.ttf'),
  })

  if (!fontsLoaded) return null
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name='index' />
        <Stack.Screen options={{ headerShown: false }} name='profile' />
      </Stack>
    </>
  )
}
