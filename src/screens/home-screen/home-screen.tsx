import { View } from 'react-native'

import { GameModal } from '@/components/common/modals'
import { GradientTitle } from '@/components/common/text/gradient-title'

import { styles } from './home-screen.style'
import { PrimaryButton } from '../../components/common/buttons'
import ScreenContainer from '../../components/common/containers/screen-container/screen-container'

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <GradientTitle style={styles.title}>Big Logo Beautiful</GradientTitle>
      <View style={styles.spacer} />
      <View style={styles.buttons_container}>
        <PrimaryButton icon='profile' />
        <PrimaryButton icon='play' style={styles.button_top} sizeType='big' />
        <PrimaryButton icon='continue' />
      </View>
      <GameModal />
    </ScreenContainer>
  )
}

export default HomeScreen
