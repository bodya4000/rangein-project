import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Quintessential-Regular': require('../assets/fonts/Quintessential-Regular.ttf'),
  })

  if (!fontsLoaded) return null
  return <Stack />
}
