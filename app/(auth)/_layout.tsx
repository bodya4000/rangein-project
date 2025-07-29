import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function AuthLayout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name='index' />
      </Stack>
    </>
  )
}
