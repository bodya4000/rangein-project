import { Text, View } from 'react-native'

import { PrimaryButton } from '@/components/common/buttons'
import ScreenContainer from '@/components/common/containers/screen-container/screen-container'
import HomeScreen from '@/screens/home-screen/home-screen'

export default function Home() {
  return (
    <ScreenContainer>
      <HomeScreen />
    </ScreenContainer>
  )
}
