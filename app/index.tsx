import { Text, View } from 'react-native'

import { PrimaryButton } from '@/components/ui/buttons'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import HomeScreen from '@/screens/home-screen/home-screen'

export default function Home() {
  return (
    <ScreenContainer>
      <HomeScreen />
    </ScreenContainer>
  )
}
